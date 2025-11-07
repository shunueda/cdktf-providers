// https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * (Optional) Root scope to which the user belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/user#app_scope_id User#app_scope_id}
  */
  readonly appScopeId?: string;
  /**
  * Email address associated with the user account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/user#email User#email}
  */
  readonly email: string;
  /**
  * If true, and an existing but disabled user with the same email exists they will be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/user#enable_existing User#enable_existing}
  */
  readonly enableExisting?: boolean | cdktf.IResolvable;
  /**
  * Userʼs first name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/user#first_name User#first_name}
  */
  readonly firstName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Userʼs last name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/user#last_name User#last_name}
  */
  readonly lastName: string;
  /**
  * (Optional) A list of roles to be assigned to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/user#role_ids User#role_ids}
  */
  readonly roleIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/user secureworkload_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "secureworkload_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "secureworkload_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/user secureworkload_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'secureworkload_user',
      terraformGeneratorMetadata: {
        providerName: 'secureworkload',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appScopeId = config.appScopeId;
    this._email = config.email;
    this._enableExisting = config.enableExisting;
    this._firstName = config.firstName;
    this._id = config.id;
    this._lastName = config.lastName;
    this._roleIds = config.roleIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_scope_id - computed: true, optional: true, required: false
  private _appScopeId?: string; 
  public get appScopeId() {
    return this.getStringAttribute('app_scope_id');
  }
  public set appScopeId(value: string) {
    this._appScopeId = value;
  }
  public resetAppScopeId() {
    this._appScopeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appScopeIdInput() {
    return this._appScopeId;
  }

  // disabled_at - computed: true, optional: false, required: false
  public get disabledAt() {
    return this.getNumberAttribute('disabled_at');
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // enable_existing - computed: false, optional: true, required: false
  private _enableExisting?: boolean | cdktf.IResolvable; 
  public get enableExisting() {
    return this.getBooleanAttribute('enable_existing');
  }
  public set enableExisting(value: boolean | cdktf.IResolvable) {
    this._enableExisting = value;
  }
  public resetEnableExisting() {
    this._enableExisting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableExistingInput() {
    return this._enableExisting;
  }

  // first_name - computed: false, optional: false, required: true
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
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

  // last_name - computed: false, optional: false, required: true
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // role_ids - computed: true, optional: true, required: false
  private _roleIds?: string[]; 
  public get roleIds() {
    return cdktf.Fn.tolist(this.getListAttribute('role_ids'));
  }
  public set roleIds(value: string[]) {
    this._roleIds = value;
  }
  public resetRoleIds() {
    this._roleIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdsInput() {
    return this._roleIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_scope_id: cdktf.stringToTerraform(this._appScopeId),
      email: cdktf.stringToTerraform(this._email),
      enable_existing: cdktf.booleanToTerraform(this._enableExisting),
      first_name: cdktf.stringToTerraform(this._firstName),
      id: cdktf.stringToTerraform(this._id),
      last_name: cdktf.stringToTerraform(this._lastName),
      role_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roleIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_scope_id: {
        value: cdktf.stringToHclTerraform(this._appScopeId),
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
      enable_existing: {
        value: cdktf.booleanToHclTerraform(this._enableExisting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      first_name: {
        value: cdktf.stringToHclTerraform(this._firstName),
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
      last_name: {
        value: cdktf.stringToHclTerraform(this._lastName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roleIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
