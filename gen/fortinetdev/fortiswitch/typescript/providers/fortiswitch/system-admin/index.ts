// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemAdminConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin#accprofile SystemAdmin#accprofile}
  */
  readonly accprofile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin#accprofile_override SystemAdmin#accprofile_override}
  */
  readonly accprofileOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin#allow_remove_admin_session SystemAdmin#allow_remove_admin_session}
  */
  readonly allowRemoveAdminSession?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin#comments SystemAdmin#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin#force_password_change SystemAdmin#force_password_change}
  */
  readonly forcePasswordChange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin#hidden SystemAdmin#hidden}
  */
  readonly hidden?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin#id SystemAdmin#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin#ip6_trusthost1 SystemAdmin#ip6_trusthost1}
  */
  readonly ip6Trusthost1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin#ip6_trusthost10 SystemAdmin#ip6_trusthost10}
  */
  readonly ip6Trusthost10?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin#ip6_trusthost2 SystemAdmin#ip6_trusthost2}
  */
  readonly ip6Trusthost2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin#ip6_trusthost3 SystemAdmin#ip6_trusthost3}
  */
  readonly ip6Trusthost3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin#ip6_trusthost4 SystemAdmin#ip6_trusthost4}
  */
  readonly ip6Trusthost4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin#ip6_trusthost5 SystemAdmin#ip6_trusthost5}
  */
  readonly ip6Trusthost5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin#ip6_trusthost6 SystemAdmin#ip6_trusthost6}
  */
  readonly ip6Trusthost6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin#ip6_trusthost7 SystemAdmin#ip6_trusthost7}
  */
  readonly ip6Trusthost7?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin#ip6_trusthost8 SystemAdmin#ip6_trusthost8}
  */
  readonly ip6Trusthost8?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin#ip6_trusthost9 SystemAdmin#ip6_trusthost9}
  */
  readonly ip6Trusthost9?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin#is_admin SystemAdmin#is_admin}
  */
  readonly isAdmin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin#name SystemAdmin#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin#password SystemAdmin#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin#password_expire SystemAdmin#password_expire}
  */
  readonly passwordExpire?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin#peer_auth SystemAdmin#peer_auth}
  */
  readonly peerAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin#peer_group SystemAdmin#peer_group}
  */
  readonly peerGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin#remote_auth SystemAdmin#remote_auth}
  */
  readonly remoteAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin#remote_group SystemAdmin#remote_group}
  */
  readonly remoteGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin#schedule SystemAdmin#schedule}
  */
  readonly schedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin#ssh_public_key1 SystemAdmin#ssh_public_key1}
  */
  readonly sshPublicKey1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin#ssh_public_key2 SystemAdmin#ssh_public_key2}
  */
  readonly sshPublicKey2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin#ssh_public_key3 SystemAdmin#ssh_public_key3}
  */
  readonly sshPublicKey3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin#trusthost1 SystemAdmin#trusthost1}
  */
  readonly trusthost1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin#trusthost10 SystemAdmin#trusthost10}
  */
  readonly trusthost10?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin#trusthost2 SystemAdmin#trusthost2}
  */
  readonly trusthost2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin#trusthost3 SystemAdmin#trusthost3}
  */
  readonly trusthost3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin#trusthost4 SystemAdmin#trusthost4}
  */
  readonly trusthost4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin#trusthost5 SystemAdmin#trusthost5}
  */
  readonly trusthost5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin#trusthost6 SystemAdmin#trusthost6}
  */
  readonly trusthost6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin#trusthost7 SystemAdmin#trusthost7}
  */
  readonly trusthost7?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin#trusthost8 SystemAdmin#trusthost8}
  */
  readonly trusthost8?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin#trusthost9 SystemAdmin#trusthost9}
  */
  readonly trusthost9?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin#vdom SystemAdmin#vdom}
  */
  readonly vdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin#wildcard SystemAdmin#wildcard}
  */
  readonly wildcard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin#wildcard_fallback SystemAdmin#wildcard_fallback}
  */
  readonly wildcardFallback?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin fortiswitch_system_admin}
*/
export class SystemAdmin extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_system_admin";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemAdmin resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemAdmin to import
  * @param importFromId The id of the existing SystemAdmin that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemAdmin to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_system_admin", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_admin fortiswitch_system_admin} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemAdminConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemAdminConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_system_admin',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6',
        providerVersionConstraint: '1.1.6'
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
    this._forcePasswordChange = config.forcePasswordChange;
    this._hidden = config.hidden;
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
    this._isAdmin = config.isAdmin;
    this._name = config.name;
    this._password = config.password;
    this._passwordExpire = config.passwordExpire;
    this._peerAuth = config.peerAuth;
    this._peerGroup = config.peerGroup;
    this._remoteAuth = config.remoteAuth;
    this._remoteGroup = config.remoteGroup;
    this._schedule = config.schedule;
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
    this._vdom = config.vdom;
    this._wildcard = config.wildcard;
    this._wildcardFallback = config.wildcardFallback;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accprofile - computed: true, optional: true, required: false
  private _accprofile?: string; 
  public get accprofile() {
    return this.getStringAttribute('accprofile');
  }
  public set accprofile(value: string) {
    this._accprofile = value;
  }
  public resetAccprofile() {
    this._accprofile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accprofileInput() {
    return this._accprofile;
  }

  // accprofile_override - computed: true, optional: true, required: false
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

  // comments - computed: true, optional: true, required: false
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

  // force_password_change - computed: true, optional: true, required: false
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

  // hidden - computed: true, optional: true, required: false
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

  // is_admin - computed: true, optional: true, required: false
  private _isAdmin?: number; 
  public get isAdmin() {
    return this.getNumberAttribute('is_admin');
  }
  public set isAdmin(value: number) {
    this._isAdmin = value;
  }
  public resetIsAdmin() {
    this._isAdmin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAdminInput() {
    return this._isAdmin;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
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
  private _passwordExpire?: string; 
  public get passwordExpire() {
    return this.getStringAttribute('password_expire');
  }
  public set passwordExpire(value: string) {
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
  private _peerGroup?: string; 
  public get peerGroup() {
    return this.getStringAttribute('peer_group');
  }
  public set peerGroup(value: string) {
    this._peerGroup = value;
  }
  public resetPeerGroup() {
    this._peerGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerGroupInput() {
    return this._peerGroup;
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
  private _remoteGroup?: string; 
  public get remoteGroup() {
    return this.getStringAttribute('remote_group');
  }
  public set remoteGroup(value: string) {
    this._remoteGroup = value;
  }
  public resetRemoteGroup() {
    this._remoteGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteGroupInput() {
    return this._remoteGroup;
  }

  // schedule - computed: true, optional: true, required: false
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

  // ssh_public_key1 - computed: true, optional: true, required: false
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

  // ssh_public_key2 - computed: true, optional: true, required: false
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

  // ssh_public_key3 - computed: true, optional: true, required: false
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
  private _trusthost1?: string; 
  public get trusthost1() {
    return this.getStringAttribute('trusthost1');
  }
  public set trusthost1(value: string) {
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
  private _trusthost10?: string; 
  public get trusthost10() {
    return this.getStringAttribute('trusthost10');
  }
  public set trusthost10(value: string) {
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
  private _trusthost2?: string; 
  public get trusthost2() {
    return this.getStringAttribute('trusthost2');
  }
  public set trusthost2(value: string) {
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
  private _trusthost3?: string; 
  public get trusthost3() {
    return this.getStringAttribute('trusthost3');
  }
  public set trusthost3(value: string) {
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
  private _trusthost4?: string; 
  public get trusthost4() {
    return this.getStringAttribute('trusthost4');
  }
  public set trusthost4(value: string) {
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
  private _trusthost5?: string; 
  public get trusthost5() {
    return this.getStringAttribute('trusthost5');
  }
  public set trusthost5(value: string) {
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
  private _trusthost6?: string; 
  public get trusthost6() {
    return this.getStringAttribute('trusthost6');
  }
  public set trusthost6(value: string) {
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
  private _trusthost7?: string; 
  public get trusthost7() {
    return this.getStringAttribute('trusthost7');
  }
  public set trusthost7(value: string) {
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
  private _trusthost8?: string; 
  public get trusthost8() {
    return this.getStringAttribute('trusthost8');
  }
  public set trusthost8(value: string) {
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
  private _trusthost9?: string; 
  public get trusthost9() {
    return this.getStringAttribute('trusthost9');
  }
  public set trusthost9(value: string) {
    this._trusthost9 = value;
  }
  public resetTrusthost9() {
    this._trusthost9 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trusthost9Input() {
    return this._trusthost9;
  }

  // vdom - computed: true, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // wildcard - computed: true, optional: true, required: false
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

  // wildcard_fallback - computed: true, optional: true, required: false
  private _wildcardFallback?: string; 
  public get wildcardFallback() {
    return this.getStringAttribute('wildcard_fallback');
  }
  public set wildcardFallback(value: string) {
    this._wildcardFallback = value;
  }
  public resetWildcardFallback() {
    this._wildcardFallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardFallbackInput() {
    return this._wildcardFallback;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accprofile: cdktf.stringToTerraform(this._accprofile),
      accprofile_override: cdktf.stringToTerraform(this._accprofileOverride),
      allow_remove_admin_session: cdktf.stringToTerraform(this._allowRemoveAdminSession),
      comments: cdktf.stringToTerraform(this._comments),
      force_password_change: cdktf.stringToTerraform(this._forcePasswordChange),
      hidden: cdktf.numberToTerraform(this._hidden),
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
      is_admin: cdktf.numberToTerraform(this._isAdmin),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      password_expire: cdktf.stringToTerraform(this._passwordExpire),
      peer_auth: cdktf.stringToTerraform(this._peerAuth),
      peer_group: cdktf.stringToTerraform(this._peerGroup),
      remote_auth: cdktf.stringToTerraform(this._remoteAuth),
      remote_group: cdktf.stringToTerraform(this._remoteGroup),
      schedule: cdktf.stringToTerraform(this._schedule),
      ssh_public_key1: cdktf.stringToTerraform(this._sshPublicKey1),
      ssh_public_key2: cdktf.stringToTerraform(this._sshPublicKey2),
      ssh_public_key3: cdktf.stringToTerraform(this._sshPublicKey3),
      trusthost1: cdktf.stringToTerraform(this._trusthost1),
      trusthost10: cdktf.stringToTerraform(this._trusthost10),
      trusthost2: cdktf.stringToTerraform(this._trusthost2),
      trusthost3: cdktf.stringToTerraform(this._trusthost3),
      trusthost4: cdktf.stringToTerraform(this._trusthost4),
      trusthost5: cdktf.stringToTerraform(this._trusthost5),
      trusthost6: cdktf.stringToTerraform(this._trusthost6),
      trusthost7: cdktf.stringToTerraform(this._trusthost7),
      trusthost8: cdktf.stringToTerraform(this._trusthost8),
      trusthost9: cdktf.stringToTerraform(this._trusthost9),
      vdom: cdktf.stringToTerraform(this._vdom),
      wildcard: cdktf.stringToTerraform(this._wildcard),
      wildcard_fallback: cdktf.stringToTerraform(this._wildcardFallback),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accprofile: {
        value: cdktf.stringToHclTerraform(this._accprofile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      force_password_change: {
        value: cdktf.stringToHclTerraform(this._forcePasswordChange),
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
      is_admin: {
        value: cdktf.numberToHclTerraform(this._isAdmin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_expire: {
        value: cdktf.stringToHclTerraform(this._passwordExpire),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_auth: {
        value: cdktf.stringToHclTerraform(this._peerAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_group: {
        value: cdktf.stringToHclTerraform(this._peerGroup),
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
        value: cdktf.stringToHclTerraform(this._remoteGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: cdktf.stringToHclTerraform(this._schedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
        value: cdktf.stringToHclTerraform(this._trusthost1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusthost10: {
        value: cdktf.stringToHclTerraform(this._trusthost10),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusthost2: {
        value: cdktf.stringToHclTerraform(this._trusthost2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusthost3: {
        value: cdktf.stringToHclTerraform(this._trusthost3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusthost4: {
        value: cdktf.stringToHclTerraform(this._trusthost4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusthost5: {
        value: cdktf.stringToHclTerraform(this._trusthost5),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusthost6: {
        value: cdktf.stringToHclTerraform(this._trusthost6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusthost7: {
        value: cdktf.stringToHclTerraform(this._trusthost7),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusthost8: {
        value: cdktf.stringToHclTerraform(this._trusthost8),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusthost9: {
        value: cdktf.stringToHclTerraform(this._trusthost9),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
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
      wildcard_fallback: {
        value: cdktf.stringToHclTerraform(this._wildcardFallback),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
