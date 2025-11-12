// https://registry.terraform.io/providers/splunk/scp/1.2.7/docs/resources/users
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UsersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set the default app for this user. Setting this here overrides the default app inherited from the user's role(s).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.2.7/docs/resources/users#default_app Users#default_app}
  */
  readonly defaultApp?: string;
  /**
  * The email of the user to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.2.7/docs/resources/users#email Users#email}
  */
  readonly email?: string;
  /**
  * If any role contains the 'fsh_manage' capability you must set this attribute to a value of "Y". This header acknowledges that a role with the fsh_manage capability can send search results outside the compliant environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.2.7/docs/resources/users#federated_search_manage_ack Users#federated_search_manage_ack}
  */
  readonly federatedSearchManageAck?: string;
  /**
  * To force a change of password on the user's first login, set forceChangePass to "true".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.2.7/docs/resources/users#force_change_pass Users#force_change_pass}
  */
  readonly forceChangePass?: boolean | cdktf.IResolvable;
  /**
  * The full name of the user to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.2.7/docs/resources/users#full_name Users#full_name}
  */
  readonly fullName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.2.7/docs/resources/users#id Users#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the user to create. Can not be updated after creation, if changed in config file terraform will propose a replacement (delete old user and recreate with new name).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.2.7/docs/resources/users#name Users#name}
  */
  readonly name: string;
  /**
  * The old password of the user to update. To protect your password, you can replace the credentials with variables configured with the sensitive flag, and set values for these variables using environment variables or with a .tfvars file. Please refer to https://developer.hashicorp.com/terraform/tutorials/configuration-language/sensitive-variables for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.2.7/docs/resources/users#old_password Users#old_password}
  */
  readonly oldPassword?: string;
  /**
  * The password of the user to create, or the new password to update. To protect your password, you can replace the credentials with variables configured with the sensitive flag, and set values for these variables using environment variables or with a .tfvars file. Please refer to https://developer.hashicorp.com/terraform/tutorials/configuration-language/sensitive-variables for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.2.7/docs/resources/users#password Users#password}
  */
  readonly password: string;
  /**
  * Assign one of more roles to this user. The user will inherit all the settings and capabilities from those roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.2.7/docs/resources/users#roles Users#roles}
  */
  readonly roles?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk/scp/1.2.7/docs/resources/users scp_users}
*/
export class Users extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scp_users";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Users resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Users to import
  * @param importFromId The id of the existing Users that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk/scp/1.2.7/docs/resources/users#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Users to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scp_users", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk/scp/1.2.7/docs/resources/users scp_users} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UsersConfig
  */
  public constructor(scope: Construct, id: string, config: UsersConfig) {
    super(scope, id, {
      terraformResourceType: 'scp_users',
      terraformGeneratorMetadata: {
        providerName: 'scp',
        providerVersion: '1.2.7',
        providerVersionConstraint: '1.2.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultApp = config.defaultApp;
    this._email = config.email;
    this._federatedSearchManageAck = config.federatedSearchManageAck;
    this._forceChangePass = config.forceChangePass;
    this._fullName = config.fullName;
    this._id = config.id;
    this._name = config.name;
    this._oldPassword = config.oldPassword;
    this._password = config.password;
    this._roles = config.roles;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_app - computed: true, optional: true, required: false
  private _defaultApp?: string; 
  public get defaultApp() {
    return this.getStringAttribute('default_app');
  }
  public set defaultApp(value: string) {
    this._defaultApp = value;
  }
  public resetDefaultApp() {
    this._defaultApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAppInput() {
    return this._defaultApp;
  }

  // default_app_source - computed: true, optional: false, required: false
  public get defaultAppSource() {
    return this.getStringAttribute('default_app_source');
  }

  // email - computed: true, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // federated_search_manage_ack - computed: false, optional: true, required: false
  private _federatedSearchManageAck?: string; 
  public get federatedSearchManageAck() {
    return this.getStringAttribute('federated_search_manage_ack');
  }
  public set federatedSearchManageAck(value: string) {
    this._federatedSearchManageAck = value;
  }
  public resetFederatedSearchManageAck() {
    this._federatedSearchManageAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get federatedSearchManageAckInput() {
    return this._federatedSearchManageAck;
  }

  // force_change_pass - computed: false, optional: true, required: false
  private _forceChangePass?: boolean | cdktf.IResolvable; 
  public get forceChangePass() {
    return this.getBooleanAttribute('force_change_pass');
  }
  public set forceChangePass(value: boolean | cdktf.IResolvable) {
    this._forceChangePass = value;
  }
  public resetForceChangePass() {
    this._forceChangePass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceChangePassInput() {
    return this._forceChangePass;
  }

  // full_name - computed: true, optional: true, required: false
  private _fullName?: string; 
  public get fullName() {
    return this.getStringAttribute('full_name');
  }
  public set fullName(value: string) {
    this._fullName = value;
  }
  public resetFullName() {
    this._fullName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullNameInput() {
    return this._fullName;
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

  // last_successful_login - computed: true, optional: false, required: false
  public get lastSuccessfulLogin() {
    return this.getStringAttribute('last_successful_login');
  }

  // locked_out - computed: true, optional: false, required: false
  public get lockedOut() {
    return this.getBooleanAttribute('locked_out');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // old_password - computed: false, optional: true, required: false
  private _oldPassword?: string; 
  public get oldPassword() {
    return this.getStringAttribute('old_password');
  }
  public set oldPassword(value: string) {
    this._oldPassword = value;
  }
  public resetOldPassword() {
    this._oldPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldPasswordInput() {
    return this._oldPassword;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // roles - computed: true, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_app: cdktf.stringToTerraform(this._defaultApp),
      email: cdktf.stringToTerraform(this._email),
      federated_search_manage_ack: cdktf.stringToTerraform(this._federatedSearchManageAck),
      force_change_pass: cdktf.booleanToTerraform(this._forceChangePass),
      full_name: cdktf.stringToTerraform(this._fullName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      old_password: cdktf.stringToTerraform(this._oldPassword),
      password: cdktf.stringToTerraform(this._password),
      roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roles),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_app: {
        value: cdktf.stringToHclTerraform(this._defaultApp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      federated_search_manage_ack: {
        value: cdktf.stringToHclTerraform(this._federatedSearchManageAck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_change_pass: {
        value: cdktf.booleanToHclTerraform(this._forceChangePass),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      full_name: {
        value: cdktf.stringToHclTerraform(this._fullName),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      old_password: {
        value: cdktf.stringToHclTerraform(this._oldPassword),
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
      roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
