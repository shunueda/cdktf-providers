// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_ldap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserLdapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_ldap#ca_cert UserLdap#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_ldap#cnid UserLdap#cnid}
  */
  readonly cnid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_ldap#dn UserLdap#dn}
  */
  readonly dn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_ldap#group_member_check UserLdap#group_member_check}
  */
  readonly groupMemberCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_ldap#group_object_filter UserLdap#group_object_filter}
  */
  readonly groupObjectFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_ldap#id UserLdap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_ldap#member_attr UserLdap#member_attr}
  */
  readonly memberAttr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_ldap#name UserLdap#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_ldap#password UserLdap#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_ldap#password_expiry_warning UserLdap#password_expiry_warning}
  */
  readonly passwordExpiryWarning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_ldap#password_renewal UserLdap#password_renewal}
  */
  readonly passwordRenewal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_ldap#port UserLdap#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_ldap#secure UserLdap#secure}
  */
  readonly secure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_ldap#server UserLdap#server}
  */
  readonly server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_ldap#server_identity_check UserLdap#server_identity_check}
  */
  readonly serverIdentityCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_ldap#type UserLdap#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_ldap#username UserLdap#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_ldap fortiswitch_user_ldap}
*/
export class UserLdap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_user_ldap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserLdap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserLdap to import
  * @param importFromId The id of the existing UserLdap that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_ldap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserLdap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_user_ldap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_ldap fortiswitch_user_ldap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserLdapConfig = {}
  */
  public constructor(scope: Construct, id: string, config: UserLdapConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_user_ldap',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._caCert = config.caCert;
    this._cnid = config.cnid;
    this._dn = config.dn;
    this._groupMemberCheck = config.groupMemberCheck;
    this._groupObjectFilter = config.groupObjectFilter;
    this._id = config.id;
    this._memberAttr = config.memberAttr;
    this._name = config.name;
    this._password = config.password;
    this._passwordExpiryWarning = config.passwordExpiryWarning;
    this._passwordRenewal = config.passwordRenewal;
    this._port = config.port;
    this._secure = config.secure;
    this._server = config.server;
    this._serverIdentityCheck = config.serverIdentityCheck;
    this._type = config.type;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_cert - computed: true, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // cnid - computed: true, optional: true, required: false
  private _cnid?: string; 
  public get cnid() {
    return this.getStringAttribute('cnid');
  }
  public set cnid(value: string) {
    this._cnid = value;
  }
  public resetCnid() {
    this._cnid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnidInput() {
    return this._cnid;
  }

  // dn - computed: true, optional: true, required: false
  private _dn?: string; 
  public get dn() {
    return this.getStringAttribute('dn');
  }
  public set dn(value: string) {
    this._dn = value;
  }
  public resetDn() {
    this._dn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnInput() {
    return this._dn;
  }

  // group_member_check - computed: true, optional: true, required: false
  private _groupMemberCheck?: string; 
  public get groupMemberCheck() {
    return this.getStringAttribute('group_member_check');
  }
  public set groupMemberCheck(value: string) {
    this._groupMemberCheck = value;
  }
  public resetGroupMemberCheck() {
    this._groupMemberCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMemberCheckInput() {
    return this._groupMemberCheck;
  }

  // group_object_filter - computed: true, optional: true, required: false
  private _groupObjectFilter?: string; 
  public get groupObjectFilter() {
    return this.getStringAttribute('group_object_filter');
  }
  public set groupObjectFilter(value: string) {
    this._groupObjectFilter = value;
  }
  public resetGroupObjectFilter() {
    this._groupObjectFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupObjectFilterInput() {
    return this._groupObjectFilter;
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

  // member_attr - computed: true, optional: true, required: false
  private _memberAttr?: string; 
  public get memberAttr() {
    return this.getStringAttribute('member_attr');
  }
  public set memberAttr(value: string) {
    this._memberAttr = value;
  }
  public resetMemberAttr() {
    this._memberAttr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberAttrInput() {
    return this._memberAttr;
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

  // password_expiry_warning - computed: true, optional: true, required: false
  private _passwordExpiryWarning?: string; 
  public get passwordExpiryWarning() {
    return this.getStringAttribute('password_expiry_warning');
  }
  public set passwordExpiryWarning(value: string) {
    this._passwordExpiryWarning = value;
  }
  public resetPasswordExpiryWarning() {
    this._passwordExpiryWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordExpiryWarningInput() {
    return this._passwordExpiryWarning;
  }

  // password_renewal - computed: true, optional: true, required: false
  private _passwordRenewal?: string; 
  public get passwordRenewal() {
    return this.getStringAttribute('password_renewal');
  }
  public set passwordRenewal(value: string) {
    this._passwordRenewal = value;
  }
  public resetPasswordRenewal() {
    this._passwordRenewal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordRenewalInput() {
    return this._passwordRenewal;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // secure - computed: true, optional: true, required: false
  private _secure?: string; 
  public get secure() {
    return this.getStringAttribute('secure');
  }
  public set secure(value: string) {
    this._secure = value;
  }
  public resetSecure() {
    this._secure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureInput() {
    return this._secure;
  }

  // server - computed: true, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // server_identity_check - computed: true, optional: true, required: false
  private _serverIdentityCheck?: string; 
  public get serverIdentityCheck() {
    return this.getStringAttribute('server_identity_check');
  }
  public set serverIdentityCheck(value: string) {
    this._serverIdentityCheck = value;
  }
  public resetServerIdentityCheck() {
    this._serverIdentityCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdentityCheckInput() {
    return this._serverIdentityCheck;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca_cert: cdktf.stringToTerraform(this._caCert),
      cnid: cdktf.stringToTerraform(this._cnid),
      dn: cdktf.stringToTerraform(this._dn),
      group_member_check: cdktf.stringToTerraform(this._groupMemberCheck),
      group_object_filter: cdktf.stringToTerraform(this._groupObjectFilter),
      id: cdktf.stringToTerraform(this._id),
      member_attr: cdktf.stringToTerraform(this._memberAttr),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      password_expiry_warning: cdktf.stringToTerraform(this._passwordExpiryWarning),
      password_renewal: cdktf.stringToTerraform(this._passwordRenewal),
      port: cdktf.numberToTerraform(this._port),
      secure: cdktf.stringToTerraform(this._secure),
      server: cdktf.stringToTerraform(this._server),
      server_identity_check: cdktf.stringToTerraform(this._serverIdentityCheck),
      type: cdktf.stringToTerraform(this._type),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca_cert: {
        value: cdktf.stringToHclTerraform(this._caCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cnid: {
        value: cdktf.stringToHclTerraform(this._cnid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dn: {
        value: cdktf.stringToHclTerraform(this._dn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_member_check: {
        value: cdktf.stringToHclTerraform(this._groupMemberCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_object_filter: {
        value: cdktf.stringToHclTerraform(this._groupObjectFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_attr: {
        value: cdktf.stringToHclTerraform(this._memberAttr),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_expiry_warning: {
        value: cdktf.stringToHclTerraform(this._passwordExpiryWarning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_renewal: {
        value: cdktf.stringToHclTerraform(this._passwordRenewal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secure: {
        value: cdktf.stringToHclTerraform(this._secure),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_identity_check: {
        value: cdktf.stringToHclTerraform(this._serverIdentityCheck),
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
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
