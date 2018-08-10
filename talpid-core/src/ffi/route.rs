use std::ptr;

use libc;
use widestring::WideCString;

use ffi;

error_chain!{
    errors{
        /// Failure to set metrics of network interfaces
        MetricApplication{
            description("Failed to set the metrics for a network interface")
        }
        InvalidInterfaceAlias{
            description("Supplied interface alias is invalid")
        }
        GetIpv6Status {
            description("Failed to read IPv6 status on the TAP network interface")
        }
    }
}

/// Returns true if metrics were changed, false otherwise
pub fn ensure_top_metric_for_interface(interface_alias: &str) -> Result<bool> {
    let interface_alias_ws =
        WideCString::from_str(interface_alias).chain_err(|| ErrorKind::InvalidInterfaceAlias)?;
    unsafe {
        WinRoute_EnsureTopMetric(
            interface_alias_ws.as_wide_c_str().as_ptr(),
            Some(ffi::error_sink),
            ptr::null_mut(),
        ).into()
    }
}

// Allowing dead code here as this type should only ever be constructed by an FFI function.
#[allow(dead_code)]
#[repr(u32)]
enum MetricResult {
    MetricsUnchanged = 0u32,
    MetricsChanged = 1u32,
    Failure = 2u32,
    UnexpectedValue,
}

impl Into<Result<bool>> for MetricResult {
    fn into(self) -> Result<bool> {
        match self {
            MetricResult::MetricsUnchanged => Ok(false),
            MetricResult::MetricsChanged => Ok(true),
            MetricResult::Failure => Err(Error::from(ErrorKind::MetricApplication)),
            MetricResult::UnexpectedValue => {
                error!("Unexpected return code from WinRoute_EnsureTopMetric");
                Err(Error::from(ErrorKind::MetricApplication))
            }
        }
    }
}

extern "system" {
    #[link_name(WinRoute_EnsureTopMetric)]
    fn WinRoute_EnsureTopMetric(
        tunnel_interface_alias: *const libc::wchar_t,
        sink: Option<ffi::ErrorSink>,
        sink_context: *mut libc::c_void,
    ) -> MetricResult;
}


/// Checks if IPv6 is enabled for the TAP interface
pub fn get_tap_interface_ipv6_status() -> Result<bool> {
    unsafe { GetTapInterfaceIpv6Status(Some(ffi::error_sink), ptr::null_mut()).into() }
}

// Allowing dead code here as this type should only ever be constructed by an FFI function.
#[allow(dead_code)]
#[repr(u32)]
enum TapIpv6Status {
    Enabled = 0u32,
    Disabled = 1u32,
    Failure = 2u32,
    UnexpectedValue,
}

impl From<TapIpv6Status> for Result<bool> {
    fn from(status: TapIpv6Status) -> Self {
        match status {
            TapIpv6Status::Enabled => Ok(true),
            TapIpv6Status::Disabled => Ok(false),
            TapIpv6Status::Failure => Err(Error::from(ErrorKind::GetIpv6Status)),
            TapIpv6Status::UnexpectedValue => {
                error!("Unexpected return code from GetTapInterfaceIpv6Status");
                Err(Error::from(ErrorKind::GetIpv6Status))
            }
        }
    }
}

extern "system" {
    #[link_name(GetTapInterfaceIpv6Status)]
    fn GetTapInterfaceIpv6Status(
        sink: Option<ffi::ErrorSink>,
        sink_context: *mut libc::c_void,
    ) -> TapIpv6Status;
}
