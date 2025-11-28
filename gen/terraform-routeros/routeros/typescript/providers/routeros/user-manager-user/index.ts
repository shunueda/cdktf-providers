// https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/user_manager_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserManagerUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/user_manager_user#___path___ UserManagerUser#___path___}
  */
  readonly path?: string;
  /**
  * A custom set of colon-separated attributes with their values will be added to `Access-Accept` messages for users in this group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/user_manager_user#attributes UserManagerUser#attributes}
  */
  readonly attributes?: string[];
  /**
  * Allow user's authentication with a specific Calling-Station-Id value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/user_manager_user#caller_id UserManagerUser#caller_id}
  */
  readonly callerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/user_manager_user#comment UserManagerUser#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/user_manager_user#disabled UserManagerUser#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the group the user is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/user_manager_user#group UserManagerUser#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/user_manager_user#id UserManagerUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Username for session authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/user_manager_user#name UserManagerUser#name}
  */
  readonly name: string;
  /**
  * A token of a one-time code that will be attached to the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/user_manager_user#otp_secret UserManagerUser#otp_secret}
  */
  readonly otpSecret?: string;
  /**
  * The password of the user for session authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/user_manager_user#password UserManagerUser#password}
  */
  readonly password?: string;
  /**
  * The total amount of sessions the user can simultaneously establish.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/user_manager_user#shared_users UserManagerUser#shared_users}
  */
  readonly sharedUsers?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/user_manager_user routeros_user_manager_user}
*/
export class UserManagerUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_user_manager_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserManagerUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserManagerUser to import
  * @param importFromId The id of the existing UserManagerUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/user_manager_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserManagerUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_user_manager_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/user_manager_user routeros_user_manager_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserManagerUserConfig
  */
  public constructor(scope: Construct, id: string, config: UserManagerUserConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_user_manager_user',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.94.0',
        providerVersionConstraint: '1.94.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._attributes = config.attributes;
    this._callerId = config.callerId;
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._group = config.group;
    this._id = config.id;
    this._name = config.name;
    this._otpSecret = config.otpSecret;
    this._password = config.password;
    this._sharedUsers = config.sharedUsers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: string[]; 
  public get attributes() {
    return this.getListAttribute('attributes');
  }
  public set attributes(value: string[]) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // caller_id - computed: false, optional: true, required: false
  private _callerId?: string; 
  public get callerId() {
    return this.getStringAttribute('caller_id');
  }
  public set callerId(value: string) {
    this._callerId = value;
  }
  public resetCallerId() {
    this._callerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callerIdInput() {
    return this._callerId;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // otp_secret - computed: false, optional: true, required: false
  private _otpSecret?: string; 
  public get otpSecret() {
    return this.getStringAttribute('otp_secret');
  }
  public set otpSecret(value: string) {
    this._otpSecret = value;
  }
  public resetOtpSecret() {
    this._otpSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpSecretInput() {
    return this._otpSecret;
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

  // shared_users - computed: false, optional: true, required: false
  private _sharedUsers?: number; 
  public get sharedUsers() {
    return this.getNumberAttribute('shared_users');
  }
  public set sharedUsers(value: number) {
    this._sharedUsers = value;
  }
  public resetSharedUsers() {
    this._sharedUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedUsersInput() {
    return this._sharedUsers;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._attributes),
      caller_id: cdktf.stringToTerraform(this._callerId),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      group: cdktf.stringToTerraform(this._group),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      otp_secret: cdktf.stringToTerraform(this._otpSecret),
      password: cdktf.stringToTerraform(this._password),
      shared_users: cdktf.numberToTerraform(this._sharedUsers),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attributes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._attributes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      caller_id: {
        value: cdktf.stringToHclTerraform(this._callerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
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
      otp_secret: {
        value: cdktf.stringToHclTerraform(this._otpSecret),
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
      shared_users: {
        value: cdktf.numberToHclTerraform(this._sharedUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
