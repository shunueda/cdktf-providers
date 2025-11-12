// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemAdminConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#accprofile SystemAdmin#accprofile}
  */
  readonly accprofile?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#accprofile_override SystemAdmin#accprofile_override}
  */
  readonly accprofileOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#allow_remove_admin_session SystemAdmin#allow_remove_admin_session}
  */
  readonly allowRemoveAdminSession?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#comments SystemAdmin#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#device_name SystemAdmin#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#email_to SystemAdmin#email_to}
  */
  readonly emailTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#force_password_change SystemAdmin#force_password_change}
  */
  readonly forcePasswordChange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#fortitoken SystemAdmin#fortitoken}
  */
  readonly fortitoken?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#guest_auth SystemAdmin#guest_auth}
  */
  readonly guestAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#guest_lang SystemAdmin#guest_lang}
  */
  readonly guestLang?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#guest_usergroups SystemAdmin#guest_usergroups}
  */
  readonly guestUsergroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#gui_default_dashboard_template SystemAdmin#gui_default_dashboard_template}
  */
  readonly guiDefaultDashboardTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#gui_ignore_invalid_signature_version SystemAdmin#gui_ignore_invalid_signature_version}
  */
  readonly guiIgnoreInvalidSignatureVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#gui_ignore_release_overview_version SystemAdmin#gui_ignore_release_overview_version}
  */
  readonly guiIgnoreReleaseOverviewVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#hidden SystemAdmin#hidden}
  */
  readonly hidden?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#history0 SystemAdmin#history0}
  */
  readonly history0?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#history1 SystemAdmin#history1}
  */
  readonly history1?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#id SystemAdmin#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#ip6_trusthost1 SystemAdmin#ip6_trusthost1}
  */
  readonly ip6Trusthost1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#ip6_trusthost10 SystemAdmin#ip6_trusthost10}
  */
  readonly ip6Trusthost10?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#ip6_trusthost2 SystemAdmin#ip6_trusthost2}
  */
  readonly ip6Trusthost2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#ip6_trusthost3 SystemAdmin#ip6_trusthost3}
  */
  readonly ip6Trusthost3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#ip6_trusthost4 SystemAdmin#ip6_trusthost4}
  */
  readonly ip6Trusthost4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#ip6_trusthost5 SystemAdmin#ip6_trusthost5}
  */
  readonly ip6Trusthost5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#ip6_trusthost6 SystemAdmin#ip6_trusthost6}
  */
  readonly ip6Trusthost6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#ip6_trusthost7 SystemAdmin#ip6_trusthost7}
  */
  readonly ip6Trusthost7?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#ip6_trusthost8 SystemAdmin#ip6_trusthost8}
  */
  readonly ip6Trusthost8?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#ip6_trusthost9 SystemAdmin#ip6_trusthost9}
  */
  readonly ip6Trusthost9?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#name SystemAdmin#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#old_password SystemAdmin#old_password}
  */
  readonly oldPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#password SystemAdmin#password}
  */
  readonly password?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#password_expire SystemAdmin#password_expire}
  */
  readonly passwordExpire?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#peer_auth SystemAdmin#peer_auth}
  */
  readonly peerAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#peer_group SystemAdmin#peer_group}
  */
  readonly peerGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#radius_vdom_override SystemAdmin#radius_vdom_override}
  */
  readonly radiusVdomOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#remote_auth SystemAdmin#remote_auth}
  */
  readonly remoteAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#remote_group SystemAdmin#remote_group}
  */
  readonly remoteGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#schedule SystemAdmin#schedule}
  */
  readonly schedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#sms_custom_server SystemAdmin#sms_custom_server}
  */
  readonly smsCustomServer?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#sms_phone SystemAdmin#sms_phone}
  */
  readonly smsPhone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#sms_server SystemAdmin#sms_server}
  */
  readonly smsServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#ssh_certificate SystemAdmin#ssh_certificate}
  */
  readonly sshCertificate?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#ssh_public_key1 SystemAdmin#ssh_public_key1}
  */
  readonly sshPublicKey1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#ssh_public_key2 SystemAdmin#ssh_public_key2}
  */
  readonly sshPublicKey2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#ssh_public_key3 SystemAdmin#ssh_public_key3}
  */
  readonly sshPublicKey3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#trusthost1 SystemAdmin#trusthost1}
  */
  readonly trusthost1?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#trusthost10 SystemAdmin#trusthost10}
  */
  readonly trusthost10?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#trusthost2 SystemAdmin#trusthost2}
  */
  readonly trusthost2?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#trusthost3 SystemAdmin#trusthost3}
  */
  readonly trusthost3?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#trusthost4 SystemAdmin#trusthost4}
  */
  readonly trusthost4?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#trusthost5 SystemAdmin#trusthost5}
  */
  readonly trusthost5?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#trusthost6 SystemAdmin#trusthost6}
  */
  readonly trusthost6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#trusthost7 SystemAdmin#trusthost7}
  */
  readonly trusthost7?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#trusthost8 SystemAdmin#trusthost8}
  */
  readonly trusthost8?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#trusthost9 SystemAdmin#trusthost9}
  */
  readonly trusthost9?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#two_factor SystemAdmin#two_factor}
  */
  readonly twoFactor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#two_factor_authentication SystemAdmin#two_factor_authentication}
  */
  readonly twoFactorAuthentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#two_factor_notification SystemAdmin#two_factor_notification}
  */
  readonly twoFactorNotification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#vdom SystemAdmin#vdom}
  */
  readonly vdom?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#vdom_override SystemAdmin#vdom_override}
  */
  readonly vdomOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#wildcard SystemAdmin#wildcard}
  */
  readonly wildcard?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin fmgdevice_system_admin}
*/
export class SystemAdmin extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_admin";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemAdmin resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemAdmin to import
  * @param importFromId The id of the existing SystemAdmin that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemAdmin to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_admin", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_admin fmgdevice_system_admin} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemAdminConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemAdminConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_admin',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accprofile = config.accprofile;
    this._accprofileOverride = config.accprofileOverride;
    this._allowRemoveAdminSession = config.allowRemoveAdminSession;
    this._comments = config.comments;
    this._deviceName = config.deviceName;
    this._emailTo = config.emailTo;
    this._forcePasswordChange = config.forcePasswordChange;
    this._fortitoken = config.fortitoken;
    this._guestAuth = config.guestAuth;
    this._guestLang = config.guestLang;
    this._guestUsergroups = config.guestUsergroups;
    this._guiDefaultDashboardTemplate = config.guiDefaultDashboardTemplate;
    this._guiIgnoreInvalidSignatureVersion = config.guiIgnoreInvalidSignatureVersion;
    this._guiIgnoreReleaseOverviewVersion = config.guiIgnoreReleaseOverviewVersion;
    this._hidden = config.hidden;
    this._history0 = config.history0;
    this._history1 = config.history1;
    this._id = config.id;
    this._ip6Trusthost1 = config.ip6Trusthost1;
    this._ip6Trusthost10 = config.ip6Trusthost10;
    this._ip6Trusthost2 = config.ip6Trusthost2;
    this._ip6Trusthost3 = config.ip6Trusthost3;
    this._ip6Trusthost4 = config.ip6Trusthost4;
    this._ip6Trusthost5 = config.ip6Trusthost5;
    this._ip6Trusthost6 = config.ip6Trusthost6;
    this._ip6Trusthost7 = config.ip6Trusthost7;
    this._ip6Trusthost8 = config.ip6Trusthost8;
    this._ip6Trusthost9 = config.ip6Trusthost9;
    this._name = config.name;
    this._oldPassword = config.oldPassword;
    this._password = config.password;
    this._passwordExpire = config.passwordExpire;
    this._peerAuth = config.peerAuth;
    this._peerGroup = config.peerGroup;
    this._radiusVdomOverride = config.radiusVdomOverride;
    this._remoteAuth = config.remoteAuth;
    this._remoteGroup = config.remoteGroup;
    this._schedule = config.schedule;
    this._smsCustomServer = config.smsCustomServer;
    this._smsPhone = config.smsPhone;
    this._smsServer = config.smsServer;
    this._sshCertificate = config.sshCertificate;
    this._sshPublicKey1 = config.sshPublicKey1;
    this._sshPublicKey2 = config.sshPublicKey2;
    this._sshPublicKey3 = config.sshPublicKey3;
    this._trusthost1 = config.trusthost1;
    this._trusthost10 = config.trusthost10;
    this._trusthost2 = config.trusthost2;
    this._trusthost3 = config.trusthost3;
    this._trusthost4 = config.trusthost4;
    this._trusthost5 = config.trusthost5;
    this._trusthost6 = config.trusthost6;
    this._trusthost7 = config.trusthost7;
    this._trusthost8 = config.trusthost8;
    this._trusthost9 = config.trusthost9;
    this._twoFactor = config.twoFactor;
    this._twoFactorAuthentication = config.twoFactorAuthentication;
    this._twoFactorNotification = config.twoFactorNotification;
    this._vdom = config.vdom;
    this._vdomOverride = config.vdomOverride;
    this._wildcard = config.wildcard;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accprofile - computed: true, optional: true, required: false
  private _accprofile?: string[]; 
  public get accprofile() {
    return cdktf.Fn.tolist(this.getListAttribute('accprofile'));
  }
  public set accprofile(value: string[]) {
    this._accprofile = value;
  }
  public resetAccprofile() {
    this._accprofile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accprofileInput() {
    return this._accprofile;
  }

  // accprofile_override - computed: false, optional: true, required: false
  private _accprofileOverride?: string; 
  public get accprofileOverride() {
    return this.getStringAttribute('accprofile_override');
  }
  public set accprofileOverride(value: string) {
    this._accprofileOverride = value;
  }
  public resetAccprofileOverride() {
    this._accprofileOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accprofileOverrideInput() {
    return this._accprofileOverride;
  }

  // allow_remove_admin_session - computed: true, optional: true, required: false
  private _allowRemoveAdminSession?: string; 
  public get allowRemoveAdminSession() {
    return this.getStringAttribute('allow_remove_admin_session');
  }
  public set allowRemoveAdminSession(value: string) {
    this._allowRemoveAdminSession = value;
  }
  public resetAllowRemoveAdminSession() {
    this._allowRemoveAdminSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRemoveAdminSessionInput() {
    return this._allowRemoveAdminSession;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
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

  // force_password_change - computed: false, optional: true, required: false
  private _forcePasswordChange?: string; 
  public get forcePasswordChange() {
    return this.getStringAttribute('force_password_change');
  }
  public set forcePasswordChange(value: string) {
    this._forcePasswordChange = value;
  }
  public resetForcePasswordChange() {
    this._forcePasswordChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcePasswordChangeInput() {
    return this._forcePasswordChange;
  }

  // fortitoken - computed: true, optional: true, required: false
  private _fortitoken?: string[]; 
  public get fortitoken() {
    return cdktf.Fn.tolist(this.getListAttribute('fortitoken'));
  }
  public set fortitoken(value: string[]) {
    this._fortitoken = value;
  }
  public resetFortitoken() {
    this._fortitoken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortitokenInput() {
    return this._fortitoken;
  }

  // guest_auth - computed: true, optional: true, required: false
  private _guestAuth?: string; 
  public get guestAuth() {
    return this.getStringAttribute('guest_auth');
  }
  public set guestAuth(value: string) {
    this._guestAuth = value;
  }
  public resetGuestAuth() {
    this._guestAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestAuthInput() {
    return this._guestAuth;
  }

  // guest_lang - computed: true, optional: true, required: false
  private _guestLang?: string[]; 
  public get guestLang() {
    return cdktf.Fn.tolist(this.getListAttribute('guest_lang'));
  }
  public set guestLang(value: string[]) {
    this._guestLang = value;
  }
  public resetGuestLang() {
    this._guestLang = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestLangInput() {
    return this._guestLang;
  }

  // guest_usergroups - computed: true, optional: true, required: false
  private _guestUsergroups?: string[]; 
  public get guestUsergroups() {
    return cdktf.Fn.tolist(this.getListAttribute('guest_usergroups'));
  }
  public set guestUsergroups(value: string[]) {
    this._guestUsergroups = value;
  }
  public resetGuestUsergroups() {
    this._guestUsergroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestUsergroupsInput() {
    return this._guestUsergroups;
  }

  // gui_default_dashboard_template - computed: false, optional: true, required: false
  private _guiDefaultDashboardTemplate?: string; 
  public get guiDefaultDashboardTemplate() {
    return this.getStringAttribute('gui_default_dashboard_template');
  }
  public set guiDefaultDashboardTemplate(value: string) {
    this._guiDefaultDashboardTemplate = value;
  }
  public resetGuiDefaultDashboardTemplate() {
    this._guiDefaultDashboardTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiDefaultDashboardTemplateInput() {
    return this._guiDefaultDashboardTemplate;
  }

  // gui_ignore_invalid_signature_version - computed: false, optional: true, required: false
  private _guiIgnoreInvalidSignatureVersion?: string; 
  public get guiIgnoreInvalidSignatureVersion() {
    return this.getStringAttribute('gui_ignore_invalid_signature_version');
  }
  public set guiIgnoreInvalidSignatureVersion(value: string) {
    this._guiIgnoreInvalidSignatureVersion = value;
  }
  public resetGuiIgnoreInvalidSignatureVersion() {
    this._guiIgnoreInvalidSignatureVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiIgnoreInvalidSignatureVersionInput() {
    return this._guiIgnoreInvalidSignatureVersion;
  }

  // gui_ignore_release_overview_version - computed: false, optional: true, required: false
  private _guiIgnoreReleaseOverviewVersion?: string; 
  public get guiIgnoreReleaseOverviewVersion() {
    return this.getStringAttribute('gui_ignore_release_overview_version');
  }
  public set guiIgnoreReleaseOverviewVersion(value: string) {
    this._guiIgnoreReleaseOverviewVersion = value;
  }
  public resetGuiIgnoreReleaseOverviewVersion() {
    this._guiIgnoreReleaseOverviewVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiIgnoreReleaseOverviewVersionInput() {
    return this._guiIgnoreReleaseOverviewVersion;
  }

  // hidden - computed: false, optional: true, required: false
  private _hidden?: number; 
  public get hidden() {
    return this.getNumberAttribute('hidden');
  }
  public set hidden(value: number) {
    this._hidden = value;
  }
  public resetHidden() {
    this._hidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenInput() {
    return this._hidden;
  }

  // history0 - computed: true, optional: true, required: false
  private _history0?: string[]; 
  public get history0() {
    return cdktf.Fn.tolist(this.getListAttribute('history0'));
  }
  public set history0(value: string[]) {
    this._history0 = value;
  }
  public resetHistory0() {
    this._history0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get history0Input() {
    return this._history0;
  }

  // history1 - computed: true, optional: true, required: false
  private _history1?: string[]; 
  public get history1() {
    return cdktf.Fn.tolist(this.getListAttribute('history1'));
  }
  public set history1(value: string[]) {
    this._history1 = value;
  }
  public resetHistory1() {
    this._history1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get history1Input() {
    return this._history1;
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

  // ip6_trusthost1 - computed: true, optional: true, required: false
  private _ip6Trusthost1?: string; 
  public get ip6Trusthost1() {
    return this.getStringAttribute('ip6_trusthost1');
  }
  public set ip6Trusthost1(value: string) {
    this._ip6Trusthost1 = value;
  }
  public resetIp6Trusthost1() {
    this._ip6Trusthost1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Trusthost1Input() {
    return this._ip6Trusthost1;
  }

  // ip6_trusthost10 - computed: true, optional: true, required: false
  private _ip6Trusthost10?: string; 
  public get ip6Trusthost10() {
    return this.getStringAttribute('ip6_trusthost10');
  }
  public set ip6Trusthost10(value: string) {
    this._ip6Trusthost10 = value;
  }
  public resetIp6Trusthost10() {
    this._ip6Trusthost10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Trusthost10Input() {
    return this._ip6Trusthost10;
  }

  // ip6_trusthost2 - computed: true, optional: true, required: false
  private _ip6Trusthost2?: string; 
  public get ip6Trusthost2() {
    return this.getStringAttribute('ip6_trusthost2');
  }
  public set ip6Trusthost2(value: string) {
    this._ip6Trusthost2 = value;
  }
  public resetIp6Trusthost2() {
    this._ip6Trusthost2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Trusthost2Input() {
    return this._ip6Trusthost2;
  }

  // ip6_trusthost3 - computed: true, optional: true, required: false
  private _ip6Trusthost3?: string; 
  public get ip6Trusthost3() {
    return this.getStringAttribute('ip6_trusthost3');
  }
  public set ip6Trusthost3(value: string) {
    this._ip6Trusthost3 = value;
  }
  public resetIp6Trusthost3() {
    this._ip6Trusthost3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Trusthost3Input() {
    return this._ip6Trusthost3;
  }

  // ip6_trusthost4 - computed: true, optional: true, required: false
  private _ip6Trusthost4?: string; 
  public get ip6Trusthost4() {
    return this.getStringAttribute('ip6_trusthost4');
  }
  public set ip6Trusthost4(value: string) {
    this._ip6Trusthost4 = value;
  }
  public resetIp6Trusthost4() {
    this._ip6Trusthost4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Trusthost4Input() {
    return this._ip6Trusthost4;
  }

  // ip6_trusthost5 - computed: true, optional: true, required: false
  private _ip6Trusthost5?: string; 
  public get ip6Trusthost5() {
    return this.getStringAttribute('ip6_trusthost5');
  }
  public set ip6Trusthost5(value: string) {
    this._ip6Trusthost5 = value;
  }
  public resetIp6Trusthost5() {
    this._ip6Trusthost5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Trusthost5Input() {
    return this._ip6Trusthost5;
  }

  // ip6_trusthost6 - computed: true, optional: true, required: false
  private _ip6Trusthost6?: string; 
  public get ip6Trusthost6() {
    return this.getStringAttribute('ip6_trusthost6');
  }
  public set ip6Trusthost6(value: string) {
    this._ip6Trusthost6 = value;
  }
  public resetIp6Trusthost6() {
    this._ip6Trusthost6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Trusthost6Input() {
    return this._ip6Trusthost6;
  }

  // ip6_trusthost7 - computed: true, optional: true, required: false
  private _ip6Trusthost7?: string; 
  public get ip6Trusthost7() {
    return this.getStringAttribute('ip6_trusthost7');
  }
  public set ip6Trusthost7(value: string) {
    this._ip6Trusthost7 = value;
  }
  public resetIp6Trusthost7() {
    this._ip6Trusthost7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Trusthost7Input() {
    return this._ip6Trusthost7;
  }

  // ip6_trusthost8 - computed: true, optional: true, required: false
  private _ip6Trusthost8?: string; 
  public get ip6Trusthost8() {
    return this.getStringAttribute('ip6_trusthost8');
  }
  public set ip6Trusthost8(value: string) {
    this._ip6Trusthost8 = value;
  }
  public resetIp6Trusthost8() {
    this._ip6Trusthost8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Trusthost8Input() {
    return this._ip6Trusthost8;
  }

  // ip6_trusthost9 - computed: true, optional: true, required: false
  private _ip6Trusthost9?: string; 
  public get ip6Trusthost9() {
    return this.getStringAttribute('ip6_trusthost9');
  }
  public set ip6Trusthost9(value: string) {
    this._ip6Trusthost9 = value;
  }
  public resetIp6Trusthost9() {
    this._ip6Trusthost9 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Trusthost9Input() {
    return this._ip6Trusthost9;
  }

  // name - computed: false, optional: true, required: false
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

  // old_password - computed: true, optional: true, required: false
  private _oldPassword?: string[]; 
  public get oldPassword() {
    return cdktf.Fn.tolist(this.getListAttribute('old_password'));
  }
  public set oldPassword(value: string[]) {
    this._oldPassword = value;
  }
  public resetOldPassword() {
    this._oldPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldPasswordInput() {
    return this._oldPassword;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string[]; 
  public get password() {
    return cdktf.Fn.tolist(this.getListAttribute('password'));
  }
  public set password(value: string[]) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_expire - computed: true, optional: true, required: false
  private _passwordExpire?: string[]; 
  public get passwordExpire() {
    return cdktf.Fn.tolist(this.getListAttribute('password_expire'));
  }
  public set passwordExpire(value: string[]) {
    this._passwordExpire = value;
  }
  public resetPasswordExpire() {
    this._passwordExpire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordExpireInput() {
    return this._passwordExpire;
  }

  // peer_auth - computed: true, optional: true, required: false
  private _peerAuth?: string; 
  public get peerAuth() {
    return this.getStringAttribute('peer_auth');
  }
  public set peerAuth(value: string) {
    this._peerAuth = value;
  }
  public resetPeerAuth() {
    this._peerAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAuthInput() {
    return this._peerAuth;
  }

  // peer_group - computed: true, optional: true, required: false
  private _peerGroup?: string[]; 
  public get peerGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('peer_group'));
  }
  public set peerGroup(value: string[]) {
    this._peerGroup = value;
  }
  public resetPeerGroup() {
    this._peerGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerGroupInput() {
    return this._peerGroup;
  }

  // radius_vdom_override - computed: false, optional: true, required: false
  private _radiusVdomOverride?: string; 
  public get radiusVdomOverride() {
    return this.getStringAttribute('radius_vdom_override');
  }
  public set radiusVdomOverride(value: string) {
    this._radiusVdomOverride = value;
  }
  public resetRadiusVdomOverride() {
    this._radiusVdomOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusVdomOverrideInput() {
    return this._radiusVdomOverride;
  }

  // remote_auth - computed: true, optional: true, required: false
  private _remoteAuth?: string; 
  public get remoteAuth() {
    return this.getStringAttribute('remote_auth');
  }
  public set remoteAuth(value: string) {
    this._remoteAuth = value;
  }
  public resetRemoteAuth() {
    this._remoteAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAuthInput() {
    return this._remoteAuth;
  }

  // remote_group - computed: true, optional: true, required: false
  private _remoteGroup?: string[]; 
  public get remoteGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('remote_group'));
  }
  public set remoteGroup(value: string[]) {
    this._remoteGroup = value;
  }
  public resetRemoteGroup() {
    this._remoteGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteGroupInput() {
    return this._remoteGroup;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // sms_custom_server - computed: true, optional: true, required: false
  private _smsCustomServer?: string[]; 
  public get smsCustomServer() {
    return cdktf.Fn.tolist(this.getListAttribute('sms_custom_server'));
  }
  public set smsCustomServer(value: string[]) {
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

  // ssh_certificate - computed: true, optional: true, required: false
  private _sshCertificate?: string[]; 
  public get sshCertificate() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_certificate'));
  }
  public set sshCertificate(value: string[]) {
    this._sshCertificate = value;
  }
  public resetSshCertificate() {
    this._sshCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshCertificateInput() {
    return this._sshCertificate;
  }

  // ssh_public_key1 - computed: false, optional: true, required: false
  private _sshPublicKey1?: string; 
  public get sshPublicKey1() {
    return this.getStringAttribute('ssh_public_key1');
  }
  public set sshPublicKey1(value: string) {
    this._sshPublicKey1 = value;
  }
  public resetSshPublicKey1() {
    this._sshPublicKey1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKey1Input() {
    return this._sshPublicKey1;
  }

  // ssh_public_key2 - computed: false, optional: true, required: false
  private _sshPublicKey2?: string; 
  public get sshPublicKey2() {
    return this.getStringAttribute('ssh_public_key2');
  }
  public set sshPublicKey2(value: string) {
    this._sshPublicKey2 = value;
  }
  public resetSshPublicKey2() {
    this._sshPublicKey2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKey2Input() {
    return this._sshPublicKey2;
  }

  // ssh_public_key3 - computed: false, optional: true, required: false
  private _sshPublicKey3?: string; 
  public get sshPublicKey3() {
    return this.getStringAttribute('ssh_public_key3');
  }
  public set sshPublicKey3(value: string) {
    this._sshPublicKey3 = value;
  }
  public resetSshPublicKey3() {
    this._sshPublicKey3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKey3Input() {
    return this._sshPublicKey3;
  }

  // trusthost1 - computed: true, optional: true, required: false
  private _trusthost1?: string[]; 
  public get trusthost1() {
    return this.getListAttribute('trusthost1');
  }
  public set trusthost1(value: string[]) {
    this._trusthost1 = value;
  }
  public resetTrusthost1() {
    this._trusthost1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trusthost1Input() {
    return this._trusthost1;
  }

  // trusthost10 - computed: true, optional: true, required: false
  private _trusthost10?: string[]; 
  public get trusthost10() {
    return this.getListAttribute('trusthost10');
  }
  public set trusthost10(value: string[]) {
    this._trusthost10 = value;
  }
  public resetTrusthost10() {
    this._trusthost10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trusthost10Input() {
    return this._trusthost10;
  }

  // trusthost2 - computed: true, optional: true, required: false
  private _trusthost2?: string[]; 
  public get trusthost2() {
    return this.getListAttribute('trusthost2');
  }
  public set trusthost2(value: string[]) {
    this._trusthost2 = value;
  }
  public resetTrusthost2() {
    this._trusthost2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trusthost2Input() {
    return this._trusthost2;
  }

  // trusthost3 - computed: true, optional: true, required: false
  private _trusthost3?: string[]; 
  public get trusthost3() {
    return this.getListAttribute('trusthost3');
  }
  public set trusthost3(value: string[]) {
    this._trusthost3 = value;
  }
  public resetTrusthost3() {
    this._trusthost3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trusthost3Input() {
    return this._trusthost3;
  }

  // trusthost4 - computed: true, optional: true, required: false
  private _trusthost4?: string[]; 
  public get trusthost4() {
    return this.getListAttribute('trusthost4');
  }
  public set trusthost4(value: string[]) {
    this._trusthost4 = value;
  }
  public resetTrusthost4() {
    this._trusthost4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trusthost4Input() {
    return this._trusthost4;
  }

  // trusthost5 - computed: true, optional: true, required: false
  private _trusthost5?: string[]; 
  public get trusthost5() {
    return this.getListAttribute('trusthost5');
  }
  public set trusthost5(value: string[]) {
    this._trusthost5 = value;
  }
  public resetTrusthost5() {
    this._trusthost5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trusthost5Input() {
    return this._trusthost5;
  }

  // trusthost6 - computed: true, optional: true, required: false
  private _trusthost6?: string[]; 
  public get trusthost6() {
    return this.getListAttribute('trusthost6');
  }
  public set trusthost6(value: string[]) {
    this._trusthost6 = value;
  }
  public resetTrusthost6() {
    this._trusthost6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trusthost6Input() {
    return this._trusthost6;
  }

  // trusthost7 - computed: true, optional: true, required: false
  private _trusthost7?: string[]; 
  public get trusthost7() {
    return this.getListAttribute('trusthost7');
  }
  public set trusthost7(value: string[]) {
    this._trusthost7 = value;
  }
  public resetTrusthost7() {
    this._trusthost7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trusthost7Input() {
    return this._trusthost7;
  }

  // trusthost8 - computed: true, optional: true, required: false
  private _trusthost8?: string[]; 
  public get trusthost8() {
    return this.getListAttribute('trusthost8');
  }
  public set trusthost8(value: string[]) {
    this._trusthost8 = value;
  }
  public resetTrusthost8() {
    this._trusthost8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trusthost8Input() {
    return this._trusthost8;
  }

  // trusthost9 - computed: true, optional: true, required: false
  private _trusthost9?: string[]; 
  public get trusthost9() {
    return this.getListAttribute('trusthost9');
  }
  public set trusthost9(value: string[]) {
    this._trusthost9 = value;
  }
  public resetTrusthost9() {
    this._trusthost9 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trusthost9Input() {
    return this._trusthost9;
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

  // vdom - computed: true, optional: true, required: false
  private _vdom?: string[]; 
  public get vdom() {
    return cdktf.Fn.tolist(this.getListAttribute('vdom'));
  }
  public set vdom(value: string[]) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // vdom_override - computed: true, optional: true, required: false
  private _vdomOverride?: string; 
  public get vdomOverride() {
    return this.getStringAttribute('vdom_override');
  }
  public set vdomOverride(value: string) {
    this._vdomOverride = value;
  }
  public resetVdomOverride() {
    this._vdomOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomOverrideInput() {
    return this._vdomOverride;
  }

  // wildcard - computed: false, optional: true, required: false
  private _wildcard?: string; 
  public get wildcard() {
    return this.getStringAttribute('wildcard');
  }
  public set wildcard(value: string) {
    this._wildcard = value;
  }
  public resetWildcard() {
    this._wildcard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardInput() {
    return this._wildcard;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accprofile: cdktf.listMapper(cdktf.stringToTerraform, false)(this._accprofile),
      accprofile_override: cdktf.stringToTerraform(this._accprofileOverride),
      allow_remove_admin_session: cdktf.stringToTerraform(this._allowRemoveAdminSession),
      comments: cdktf.stringToTerraform(this._comments),
      device_name: cdktf.stringToTerraform(this._deviceName),
      email_to: cdktf.stringToTerraform(this._emailTo),
      force_password_change: cdktf.stringToTerraform(this._forcePasswordChange),
      fortitoken: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fortitoken),
      guest_auth: cdktf.stringToTerraform(this._guestAuth),
      guest_lang: cdktf.listMapper(cdktf.stringToTerraform, false)(this._guestLang),
      guest_usergroups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._guestUsergroups),
      gui_default_dashboard_template: cdktf.stringToTerraform(this._guiDefaultDashboardTemplate),
      gui_ignore_invalid_signature_version: cdktf.stringToTerraform(this._guiIgnoreInvalidSignatureVersion),
      gui_ignore_release_overview_version: cdktf.stringToTerraform(this._guiIgnoreReleaseOverviewVersion),
      hidden: cdktf.numberToTerraform(this._hidden),
      history0: cdktf.listMapper(cdktf.stringToTerraform, false)(this._history0),
      history1: cdktf.listMapper(cdktf.stringToTerraform, false)(this._history1),
      id: cdktf.stringToTerraform(this._id),
      ip6_trusthost1: cdktf.stringToTerraform(this._ip6Trusthost1),
      ip6_trusthost10: cdktf.stringToTerraform(this._ip6Trusthost10),
      ip6_trusthost2: cdktf.stringToTerraform(this._ip6Trusthost2),
      ip6_trusthost3: cdktf.stringToTerraform(this._ip6Trusthost3),
      ip6_trusthost4: cdktf.stringToTerraform(this._ip6Trusthost4),
      ip6_trusthost5: cdktf.stringToTerraform(this._ip6Trusthost5),
      ip6_trusthost6: cdktf.stringToTerraform(this._ip6Trusthost6),
      ip6_trusthost7: cdktf.stringToTerraform(this._ip6Trusthost7),
      ip6_trusthost8: cdktf.stringToTerraform(this._ip6Trusthost8),
      ip6_trusthost9: cdktf.stringToTerraform(this._ip6Trusthost9),
      name: cdktf.stringToTerraform(this._name),
      old_password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._oldPassword),
      password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._password),
      password_expire: cdktf.listMapper(cdktf.stringToTerraform, false)(this._passwordExpire),
      peer_auth: cdktf.stringToTerraform(this._peerAuth),
      peer_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._peerGroup),
      radius_vdom_override: cdktf.stringToTerraform(this._radiusVdomOverride),
      remote_auth: cdktf.stringToTerraform(this._remoteAuth),
      remote_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._remoteGroup),
      schedule: cdktf.stringToTerraform(this._schedule),
      sms_custom_server: cdktf.listMapper(cdktf.stringToTerraform, false)(this._smsCustomServer),
      sms_phone: cdktf.stringToTerraform(this._smsPhone),
      sms_server: cdktf.stringToTerraform(this._smsServer),
      ssh_certificate: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshCertificate),
      ssh_public_key1: cdktf.stringToTerraform(this._sshPublicKey1),
      ssh_public_key2: cdktf.stringToTerraform(this._sshPublicKey2),
      ssh_public_key3: cdktf.stringToTerraform(this._sshPublicKey3),
      trusthost1: cdktf.listMapper(cdktf.stringToTerraform, false)(this._trusthost1),
      trusthost10: cdktf.listMapper(cdktf.stringToTerraform, false)(this._trusthost10),
      trusthost2: cdktf.listMapper(cdktf.stringToTerraform, false)(this._trusthost2),
      trusthost3: cdktf.listMapper(cdktf.stringToTerraform, false)(this._trusthost3),
      trusthost4: cdktf.listMapper(cdktf.stringToTerraform, false)(this._trusthost4),
      trusthost5: cdktf.listMapper(cdktf.stringToTerraform, false)(this._trusthost5),
      trusthost6: cdktf.listMapper(cdktf.stringToTerraform, false)(this._trusthost6),
      trusthost7: cdktf.listMapper(cdktf.stringToTerraform, false)(this._trusthost7),
      trusthost8: cdktf.listMapper(cdktf.stringToTerraform, false)(this._trusthost8),
      trusthost9: cdktf.listMapper(cdktf.stringToTerraform, false)(this._trusthost9),
      two_factor: cdktf.stringToTerraform(this._twoFactor),
      two_factor_authentication: cdktf.stringToTerraform(this._twoFactorAuthentication),
      two_factor_notification: cdktf.stringToTerraform(this._twoFactorNotification),
      vdom: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vdom),
      vdom_override: cdktf.stringToTerraform(this._vdomOverride),
      wildcard: cdktf.stringToTerraform(this._wildcard),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accprofile: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._accprofile),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      accprofile_override: {
        value: cdktf.stringToHclTerraform(this._accprofileOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_remove_admin_session: {
        value: cdktf.stringToHclTerraform(this._allowRemoveAdminSession),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_to: {
        value: cdktf.stringToHclTerraform(this._emailTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_password_change: {
        value: cdktf.stringToHclTerraform(this._forcePasswordChange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortitoken: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fortitoken),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      guest_auth: {
        value: cdktf.stringToHclTerraform(this._guestAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      guest_lang: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._guestLang),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      guest_usergroups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._guestUsergroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      gui_default_dashboard_template: {
        value: cdktf.stringToHclTerraform(this._guiDefaultDashboardTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_ignore_invalid_signature_version: {
        value: cdktf.stringToHclTerraform(this._guiIgnoreInvalidSignatureVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_ignore_release_overview_version: {
        value: cdktf.stringToHclTerraform(this._guiIgnoreReleaseOverviewVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hidden: {
        value: cdktf.numberToHclTerraform(this._hidden),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      history0: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._history0),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      history1: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._history1),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_trusthost1: {
        value: cdktf.stringToHclTerraform(this._ip6Trusthost1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_trusthost10: {
        value: cdktf.stringToHclTerraform(this._ip6Trusthost10),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_trusthost2: {
        value: cdktf.stringToHclTerraform(this._ip6Trusthost2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_trusthost3: {
        value: cdktf.stringToHclTerraform(this._ip6Trusthost3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_trusthost4: {
        value: cdktf.stringToHclTerraform(this._ip6Trusthost4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_trusthost5: {
        value: cdktf.stringToHclTerraform(this._ip6Trusthost5),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_trusthost6: {
        value: cdktf.stringToHclTerraform(this._ip6Trusthost6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_trusthost7: {
        value: cdktf.stringToHclTerraform(this._ip6Trusthost7),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_trusthost8: {
        value: cdktf.stringToHclTerraform(this._ip6Trusthost8),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_trusthost9: {
        value: cdktf.stringToHclTerraform(this._ip6Trusthost9),
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
      old_password: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._oldPassword),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      password: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._password),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      password_expire: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._passwordExpire),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      peer_auth: {
        value: cdktf.stringToHclTerraform(this._peerAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._peerGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      radius_vdom_override: {
        value: cdktf.stringToHclTerraform(this._radiusVdomOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_auth: {
        value: cdktf.stringToHclTerraform(this._remoteAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._remoteGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      schedule: {
        value: cdktf.stringToHclTerraform(this._schedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sms_custom_server: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._smsCustomServer),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      ssh_certificate: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshCertificate),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ssh_public_key1: {
        value: cdktf.stringToHclTerraform(this._sshPublicKey1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_public_key2: {
        value: cdktf.stringToHclTerraform(this._sshPublicKey2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_public_key3: {
        value: cdktf.stringToHclTerraform(this._sshPublicKey3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusthost1: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._trusthost1),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      trusthost10: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._trusthost10),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      trusthost2: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._trusthost2),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      trusthost3: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._trusthost3),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      trusthost4: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._trusthost4),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      trusthost5: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._trusthost5),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      trusthost6: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._trusthost6),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      trusthost7: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._trusthost7),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      trusthost8: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._trusthost8),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      trusthost9: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._trusthost9),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      vdom: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vdom),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vdom_override: {
        value: cdktf.stringToHclTerraform(this._vdomOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wildcard: {
        value: cdktf.stringToHclTerraform(this._wildcard),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
