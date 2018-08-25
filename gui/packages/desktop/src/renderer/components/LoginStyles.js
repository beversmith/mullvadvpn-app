// @flow

import { Styles } from 'reactxp';
import { colors } from '../../config';

export default {
  login_footer: Styles.createViewStyle({
    flex: 0,
    paddingTop: 16,
    paddingBottom: 24,
    paddingLeft: 24,
    paddingRight: 24,
    backgroundColor: colors.darkBlue
  }),
  status_icon: Styles.createViewStyle({
    flex: 0,
    marginBottom: 30,
    alignItems: 'center',
    height: 48
  }),
  login_form: Styles.createViewStyle({
    flex: 1,
    flexDirection: 'column',
    overflow: 'visible',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 24,
    paddingRight: 24,
    marginTop: 83,
    marginBottom: 0,
    marginRight: 0,
    marginLeft: 0
  }),
  account_input_group: Styles.createViewStyle({
    borderWidth: 2,
    borderRadius: 8,
    borderColor: 'transparent'
  }),
  account_input_group__active: Styles.createViewStyle({
    borderColor: colors.darkBlue
  }),
  account_input_group__inactive: Styles.createViewStyle({
    opacity: 0.6
  }),
  account_input_group__error: Styles.createViewStyle({
    borderColor: colors.red40,
    color: colors.red
  }),
  account_input_backdrop: Styles.createViewStyle({
    backgroundColor: colors.white,
    borderColor: colors.darkBlue,
    flexDirection: 'row'
  }),
  input_button: Styles.createViewStyle({
    flex: 0,
    borderWidth: 0,
    width: 48,
    alignItems: 'center',
    justifyContent: 'center'
  }),
  input_button__invisible: Styles.createViewStyle({
    backgroundColor: colors.white,
    opacity: 0
  }),
  input_arrow: Styles.createViewStyle({
    flex: 0,
    borderWidth: 0,
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.blue20
  }),
  input_arrow__active: Styles.createViewStyle({
    color: colors.white
  }),
  input_arrow__invisible: Styles.createViewStyle({
    color: colors.white,
    opacity: 0
  }),
  account_dropdown__spacer: Styles.createViewStyle({
    height: 1,
    backgroundColor: colors.darkBlue
  }),
  account_dropdown__item: Styles.createViewStyle({
    paddingTop: 0,
    paddingRight: 0,
    paddingLeft: 0,
    paddingBottom: 0,
    marginBottom: 0,
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: colors.white60,
    cursor: 'default'
  }),
  account_dropdown__item_hover: Styles.createViewStyle({
    backgroundColor: colors.white40
  }),
  account_dropdown__remove: Styles.createViewStyle({
    justifyContent: 'center',
    color: colors.blue40,
    paddingTop: 10,
    paddingRight: 12,
    paddingBottom: 12,
    paddingLeft: 12,
    marginLeft: 0
  }),
  account_dropdown__remove_cell_hover: Styles.createViewStyle({
    color: colors.blue60
  }),
  account_dropdown__remove_hover: Styles.createViewStyle({
    color: colors.blue
  }),
  account_dropdown__label_hover: Styles.createViewStyle({
    color: colors.blue
  }),

  login_footer__prompt: Styles.createTextStyle({
    color: colors.white80,
    fontFamily: 'Open Sans',
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 18,
    letterSpacing: -0.2,
    marginBottom: 8
  }),
  title: Styles.createTextStyle({
    fontFamily: 'DINPro',
    fontSize: 32,
    fontWeight: '900',
    lineHeight: 44,
    letterSpacing: -0.7,
    color: colors.white,
    marginBottom: 7,
    flex: 0
  }),
  subtitle: Styles.createTextStyle({
    fontFamily: 'Open Sans',
    fontSize: 13,
    lineHeight: 15,
    fontWeight: '600',
    letterSpacing: -0.2,
    color: colors.white80,
    marginBottom: 8
  }),
  account_input_textfield: Styles.createTextInputStyle({
    borderWidth: 0,
    paddingTop: 10,
    paddingRight: 12,
    paddingLeft: 12,
    paddingBottom: 12,
    fontFamily: 'DINPro',
    fontSize: 20,
    fontWeight: '900',
    lineHeight: 26,
    color: colors.blue,
    backgroundColor: 'transparent',
    flex: 1
  }),
  account_dropdown__label: Styles.createTextStyle({
    flex: 1,
    fontFamily: 'DINPro',
    fontSize: 20,
    fontWeight: '900',
    lineHeight: 26,
    color: colors.blue80,
    borderWidth: 0,
    textAlign: 'left',
    marginLeft: 0,
    paddingTop: 10,
    paddingRight: 0,
    paddingLeft: 12,
    paddingBottom: 12,
    cursor: 'default'
  })
};