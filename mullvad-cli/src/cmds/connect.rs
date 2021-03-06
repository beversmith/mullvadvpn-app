use clap;
use new_rpc_client;
use Command;
use Result;


pub struct Connect;

impl Command for Connect {
    fn name(&self) -> &'static str {
        "connect"
    }

    fn clap_subcommand(&self) -> clap::App<'static, 'static> {
        clap::SubCommand::with_name(self.name())
            .about("Command the client to start establishing a VPN tunnel")
    }

    fn run(&self, _matches: &clap::ArgMatches) -> Result<()> {
        let mut rpc = new_rpc_client()?;
        rpc.connect()?;
        Ok(())
    }
}
