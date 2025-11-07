// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_local
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserLocalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_local#auth_concurrent_override UserLocal#auth_concurrent_override}
  */
  readonly authConcurrentOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_local#auth_concurrent_value UserLocal#auth_concurrent_value}
  */
  readonly authConcurrentValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_local#authtimeout UserLocal#authtimeout}
  */
  readonly authtimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_local#email_to UserLocal#email_to}
  */
  readonly emailTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_local#fortitoken UserLocal#fortitoken}
  */
  readonly fortitoken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_local#fosid UserLocal#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_local#id UserLocal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_local#ldap_server UserLocal#ldap_server}
  */
  readonly ldapServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_local#name UserLocal#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_local#passwd UserLocal#passwd}
  */
  readonly passwd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_local#passwd_policy UserLocal#passwd_policy}
  */
  readonly passwdPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_local#passwd_time UserLocal#passwd_time}
  */
  readonly passwdTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_local#ppk_identity UserLocal#ppk_identity}
  */
  readonly ppkIdentity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_local#ppk_secret UserLocal#ppk_secret}
  */
  readonly ppkSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_local#qkd_profile UserLocal#qkd_profile}
  */
  readonly qkdProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_local#radius_server UserLocal#radius_server}
  */
  readonly radiusServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_local#saml_server UserLocal#saml_server}
  */
  readonly samlServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_local#sms_custom_server UserLocal#sms_custom_server}
  */
  readonly smsCustomServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_local#sms_phone UserLocal#sms_phone}
  */
  readonly smsPhone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_local#sms_server UserLocal#sms_server}
  */
  readonly smsServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_local#status UserLocal#status}
  */
  readonly status: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_local#tacacs_server UserLocal#tacacs_server}
  */
  readonly tacacsServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_local#two_factor UserLocal#two_factor}
  */
  readonly twoFactor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_local#two_factor_authentication UserLocal#two_factor_authentication}
  */
  readonly twoFactorAuthentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_local#two_factor_notification UserLocal#two_factor_notification}
  */
  readonly twoFactorNotification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_local#type UserLocal#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_local#username_case_insensitivity UserLocal#username_case_insensitivity}
  */
  readonly usernameCaseInsensitivity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_local#username_case_sensitivity UserLocal#username_case_sensitivity}
  */
  readonly usernameCaseSensitivity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_local#username_sensitivity UserLocal#username_sensitivity}
  */
  readonly usernameSensitivity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_local#vdomparam UserLocal#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_local#workstation UserLocal#workstation}
  */
  readonly workstation?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_local fortios_user_local}
*/
export class UserLocal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_user_local";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserLocal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserLocal to import
  * @param importFromId The id of the existing UserLocal that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_local#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserLocal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_user_local", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_local fortios_user_local} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserLocalConfig
  */
  public constructor(scope: Construct, id: string, config: UserLocalConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_user_local',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authConcurrentOverride = config.authConcurrentOverride;
    this._authConcurrentValue = config.authConcurrentValue;
    this._authtimeout = config.authtimeout;
    this._emailTo = config.emailTo;
    this._fortitoken = config.fortitoken;
    this._fosid = config.fosid;
    this._id = config.id;
    this._ldapServer = config.ldapServer;
    this._name = config.name;
    this._passwd = config.passwd;
    this._passwdPolicy = config.passwdPolicy;
    this._passwdTime = config.passwdTime;
    this._ppkIdentity = config.ppkIdentity;
    this._ppkSecret = config.ppkSecret;
    this._qkdProfile = config.qkdProfile;
    this._radiusServer = config.radiusServer;
    this._samlServer = config.samlServer;
    this._smsCustomServer = config.smsCustomServer;
    this._smsPhone = config.smsPhone;
    this._smsServer = config.smsServer;
    this._status = config.status;
    this._tacacsServer = config.tacacsServer;
    this._twoFactor = config.twoFactor;
    this._twoFactorAuthentication = config.twoFactorAuthentication;
    this._twoFactorNotification = config.twoFactorNotification;
    this._type = config.type;
    this._usernameCaseInsensitivity = config.usernameCaseInsensitivity;
    this._usernameCaseSensitivity = config.usernameCaseSensitivity;
    this._usernameSensitivity = config.usernameSensitivity;
    this._vdomparam = config.vdomparam;
    this._workstation = config.workstation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_concurrent_override - computed: true, optional: true, required: false
  private _authConcurrentOverride?: string; 
  public get authConcurrentOverride() {
    return this.getStringAttribute('auth_concurrent_override');
  }
  public set authConcurrentOverride(value: string) {
    this._authConcurrentOverride = value;
  }
  public resetAuthConcurrentOverride() {
    this._authConcurrentOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authConcurrentOverrideInput() {
    return this._authConcurrentOverride;
  }

  // auth_concurrent_value - computed: false, optional: true, required: false
  private _authConcurrentValue?: number; 
  public get authConcurrentValue() {
    return this.getNumberAttribute('auth_concurrent_value');
  }
  public set authConcurrentValue(value: number) {
    this._authConcurrentValue = value;
  }
  public resetAuthConcurrentValue() {
    this._authConcurrentValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authConcurrentValueInput() {
    return this._authConcurrentValue;
  }

  // authtimeout - computed: false, optional: true, required: false
  private _authtimeout?: number; 
  public get authtimeout() {
    return this.getNumberAttribute('authtimeout');
  }
  public set authtimeout(value: number) {
    this._authtimeout = value;
  }
  public resetAuthtimeout() {
    this._authtimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authtimeoutInput() {
    return this._authtimeout;
  }

  // email_to - computed: false, optional: true, required: false
  private _emailTo?: string; 
  public get emailTo() {
    return this.getStringAttribute('email_to');
  }
  public set emailTo(value: string) {
    this._emailTo = value;
  }
  public resetEmailTo() {
    this._emailTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailToInput() {
    return this._emailTo;
  }

  // fortitoken - computed: false, optional: true, required: false
  private _fortitoken?: string; 
  public get fortitoken() {
    return this.getStringAttribute('fortitoken');
  }
  public set fortitoken(value: string) {
    this._fortitoken = value;
  }
  public resetFortitoken() {
    this._fortitoken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortitokenInput() {
    return this._fortitoken;
  }

  // fosid - computed: true, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ldap_server - computed: false, optional: true, required: false
  private _ldapServer?: string; 
  public get ldapServer() {
    return this.getStringAttribute('ldap_server');
  }
  public set ldapServer(value: string) {
    this._ldapServer = value;
  }
  public resetLdapServer() {
    this._ldapServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapServerInput() {
    return this._ldapServer;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // passwd - computed: false, optional: true, required: false
  private _passwd?: string; 
  public get passwd() {
    return this.getStringAttribute('passwd');
  }
  public set passwd(value: string) {
    this._passwd = value;
  }
  public resetPasswd() {
    this._passwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwdInput() {
    return this._passwd;
  }

  // passwd_policy - computed: false, optional: true, required: false
  private _passwdPolicy?: string; 
  public get passwdPolicy() {
    return this.getStringAttribute('passwd_policy');
  }
  public set passwdPolicy(value: string) {
    this._passwdPolicy = value;
  }
  public resetPasswdPolicy() {
    this._passwdPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwdPolicyInput() {
    return this._passwdPolicy;
  }

  // passwd_time - computed: true, optional: true, required: false
  private _passwdTime?: string; 
  public get passwdTime() {
    return this.getStringAttribute('passwd_time');
  }
  public set passwdTime(value: string) {
    this._passwdTime = value;
  }
  public resetPasswdTime() {
    this._passwdTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwdTimeInput() {
    return this._passwdTime;
  }

  // ppk_identity - computed: false, optional: true, required: false
  private _ppkIdentity?: string; 
  public get ppkIdentity() {
    return this.getStringAttribute('ppk_identity');
  }
  public set ppkIdentity(value: string) {
    this._ppkIdentity = value;
  }
  public resetPpkIdentity() {
    this._ppkIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ppkIdentityInput() {
    return this._ppkIdentity;
  }

  // ppk_secret - computed: false, optional: true, required: false
  private _ppkSecret?: string; 
  public get ppkSecret() {
    return this.getStringAttribute('ppk_secret');
  }
  public set ppkSecret(value: string) {
    this._ppkSecret = value;
  }
  public resetPpkSecret() {
    this._ppkSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ppkSecretInput() {
    return this._ppkSecret;
  }

  // qkd_profile - computed: false, optional: true, required: false
  private _qkdProfile?: string; 
  public get qkdProfile() {
    return this.getStringAttribute('qkd_profile');
  }
  public set qkdProfile(value: string) {
    this._qkdProfile = value;
  }
  public resetQkdProfile() {
    this._qkdProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qkdProfileInput() {
    return this._qkdProfile;
  }

  // radius_server - computed: false, optional: true, required: false
  private _radiusServer?: string; 
  public get radiusServer() {
    return this.getStringAttribute('radius_server');
  }
  public set radiusServer(value: string) {
    this._radiusServer = value;
  }
  public resetRadiusServer() {
    this._radiusServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusServerInput() {
    return this._radiusServer;
  }

  // saml_server - computed: false, optional: true, required: false
  private _samlServer?: string; 
  public get samlServer() {
    return this.getStringAttribute('saml_server');
  }
  public set samlServer(value: string) {
    this._samlServer = value;
  }
  public resetSamlServer() {
    this._samlServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlServerInput() {
    return this._samlServer;
  }

  // sms_custom_server - computed: false, optional: true, required: false
  private _smsCustomServer?: string; 
  public get smsCustomServer() {
    return this.getStringAttribute('sms_custom_server');
  }
  public set smsCustomServer(value: string) {
    this._smsCustomServer = value;
  }
  public resetSmsCustomServer() {
    this._smsCustomServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsCustomServerInput() {
    return this._smsCustomServer;
  }

  // sms_phone - computed: false, optional: true, required: false
  private _smsPhone?: string; 
  public get smsPhone() {
    return this.getStringAttribute('sms_phone');
  }
  public set smsPhone(value: string) {
    this._smsPhone = value;
  }
  public resetSmsPhone() {
    this._smsPhone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsPhoneInput() {
    return this._smsPhone;
  }

  // sms_server - computed: true, optional: true, required: false
  private _smsServer?: string; 
  public get smsServer() {
    return this.getStringAttribute('sms_server');
  }
  public set smsServer(value: string) {
    this._smsServer = value;
  }
  public resetSmsServer() {
    this._smsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsServerInput() {
    return this._smsServer;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tacacs_server - computed: false, optional: true, required: false
  private _tacacsServer?: string; 
  public get tacacsServer() {
    return this.getStringAttribute('tacacs_server');
  }
  public set tacacsServer(value: string) {
    this._tacacsServer = value;
  }
  public resetTacacsServer() {
    this._tacacsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacacsServerInput() {
    return this._tacacsServer;
  }

  // two_factor - computed: true, optional: true, required: false
  private _twoFactor?: string; 
  public get twoFactor() {
    return this.getStringAttribute('two_factor');
  }
  public set twoFactor(value: string) {
    this._twoFactor = value;
  }
  public resetTwoFactor() {
    this._twoFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFactorInput() {
    return this._twoFactor;
  }

  // two_factor_authentication - computed: false, optional: true, required: false
  private _twoFactorAuthentication?: string; 
  public get twoFactorAuthentication() {
    return this.getStringAttribute('two_factor_authentication');
  }
  public set twoFactorAuthentication(value: string) {
    this._twoFactorAuthentication = value;
  }
  public resetTwoFactorAuthentication() {
    this._twoFactorAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFactorAuthenticationInput() {
    return this._twoFactorAuthentication;
  }

  // two_factor_notification - computed: false, optional: true, required: false
  private _twoFactorNotification?: string; 
  public get twoFactorNotification() {
    return this.getStringAttribute('two_factor_notification');
  }
  public set twoFactorNotification(value: string) {
    this._twoFactorNotification = value;
  }
  public resetTwoFactorNotification() {
    this._twoFactorNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFactorNotificationInput() {
    return this._twoFactorNotification;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // username_case_insensitivity - computed: false, optional: true, required: false
  private _usernameCaseInsensitivity?: string; 
  public get usernameCaseInsensitivity() {
    return this.getStringAttribute('username_case_insensitivity');
  }
  public set usernameCaseInsensitivity(value: string) {
    this._usernameCaseInsensitivity = value;
  }
  public resetUsernameCaseInsensitivity() {
    this._usernameCaseInsensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameCaseInsensitivityInput() {
    return this._usernameCaseInsensitivity;
  }

  // username_case_sensitivity - computed: false, optional: true, required: false
  private _usernameCaseSensitivity?: string; 
  public get usernameCaseSensitivity() {
    return this.getStringAttribute('username_case_sensitivity');
  }
  public set usernameCaseSensitivity(value: string) {
    this._usernameCaseSensitivity = value;
  }
  public resetUsernameCaseSensitivity() {
    this._usernameCaseSensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameCaseSensitivityInput() {
    return this._usernameCaseSensitivity;
  }

  // username_sensitivity - computed: true, optional: true, required: false
  private _usernameSensitivity?: string; 
  public get usernameSensitivity() {
    return this.getStringAttribute('username_sensitivity');
  }
  public set usernameSensitivity(value: string) {
    this._usernameSensitivity = value;
  }
  public resetUsernameSensitivity() {
    this._usernameSensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameSensitivityInput() {
    return this._usernameSensitivity;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // workstation - computed: false, optional: true, required: false
  private _workstation?: string; 
  public get workstation() {
    return this.getStringAttribute('workstation');
  }
  public set workstation(value: string) {
    this._workstation = value;
  }
  public resetWorkstation() {
    this._workstation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workstationInput() {
    return this._workstation;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_concurrent_override: cdktf.stringToTerraform(this._authConcurrentOverride),
      auth_concurrent_value: cdktf.numberToTerraform(this._authConcurrentValue),
      authtimeout: cdktf.numberToTerraform(this._authtimeout),
      email_to: cdktf.stringToTerraform(this._emailTo),
      fortitoken: cdktf.stringToTerraform(this._fortitoken),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      ldap_server: cdktf.stringToTerraform(this._ldapServer),
      name: cdktf.stringToTerraform(this._name),
      passwd: cdktf.stringToTerraform(this._passwd),
      passwd_policy: cdktf.stringToTerraform(this._passwdPolicy),
      passwd_time: cdktf.stringToTerraform(this._passwdTime),
      ppk_identity: cdktf.stringToTerraform(this._ppkIdentity),
      ppk_secret: cdktf.stringToTerraform(this._ppkSecret),
      qkd_profile: cdktf.stringToTerraform(this._qkdProfile),
      radius_server: cdktf.stringToTerraform(this._radiusServer),
      saml_server: cdktf.stringToTerraform(this._samlServer),
      sms_custom_server: cdktf.stringToTerraform(this._smsCustomServer),
      sms_phone: cdktf.stringToTerraform(this._smsPhone),
      sms_server: cdktf.stringToTerraform(this._smsServer),
      status: cdktf.stringToTerraform(this._status),
      tacacs_server: cdktf.stringToTerraform(this._tacacsServer),
      two_factor: cdktf.stringToTerraform(this._twoFactor),
      two_factor_authentication: cdktf.stringToTerraform(this._twoFactorAuthentication),
      two_factor_notification: cdktf.stringToTerraform(this._twoFactorNotification),
      type: cdktf.stringToTerraform(this._type),
      username_case_insensitivity: cdktf.stringToTerraform(this._usernameCaseInsensitivity),
      username_case_sensitivity: cdktf.stringToTerraform(this._usernameCaseSensitivity),
      username_sensitivity: cdktf.stringToTerraform(this._usernameSensitivity),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      workstation: cdktf.stringToTerraform(this._workstation),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_concurrent_override: {
        value: cdktf.stringToHclTerraform(this._authConcurrentOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_concurrent_value: {
        value: cdktf.numberToHclTerraform(this._authConcurrentValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      authtimeout: {
        value: cdktf.numberToHclTerraform(this._authtimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      email_to: {
        value: cdktf.stringToHclTerraform(this._emailTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortitoken: {
        value: cdktf.stringToHclTerraform(this._fortitoken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_server: {
        value: cdktf.stringToHclTerraform(this._ldapServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passwd: {
        value: cdktf.stringToHclTerraform(this._passwd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passwd_policy: {
        value: cdktf.stringToHclTerraform(this._passwdPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passwd_time: {
        value: cdktf.stringToHclTerraform(this._passwdTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ppk_identity: {
        value: cdktf.stringToHclTerraform(this._ppkIdentity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ppk_secret: {
        value: cdktf.stringToHclTerraform(this._ppkSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qkd_profile: {
        value: cdktf.stringToHclTerraform(this._qkdProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_server: {
        value: cdktf.stringToHclTerraform(this._radiusServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml_server: {
        value: cdktf.stringToHclTerraform(this._samlServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sms_custom_server: {
        value: cdktf.stringToHclTerraform(this._smsCustomServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sms_phone: {
        value: cdktf.stringToHclTerraform(this._smsPhone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sms_server: {
        value: cdktf.stringToHclTerraform(this._smsServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tacacs_server: {
        value: cdktf.stringToHclTerraform(this._tacacsServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      two_factor: {
        value: cdktf.stringToHclTerraform(this._twoFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      two_factor_authentication: {
        value: cdktf.stringToHclTerraform(this._twoFactorAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      two_factor_notification: {
        value: cdktf.stringToHclTerraform(this._twoFactorNotification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username_case_insensitivity: {
        value: cdktf.stringToHclTerraform(this._usernameCaseInsensitivity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username_case_sensitivity: {
        value: cdktf.stringToHclTerraform(this._usernameCaseSensitivity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username_sensitivity: {
        value: cdktf.stringToHclTerraform(this._usernameSensitivity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workstation: {
        value: cdktf.stringToHclTerraform(this._workstation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
