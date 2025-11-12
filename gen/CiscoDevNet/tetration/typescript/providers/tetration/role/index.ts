// https://registry.terraform.io/providers/ciscodevnet/tetration/0.1.1/docs/resources/role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The scope to which this role will be given access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/tetration/0.1.1/docs/resources/role#access_app_scope_id Role#access_app_scope_id}
  */
  readonly accessAppScopeId: string;
  /**
  * The type of access to grant the role to the `access_app_scope_id` scope.
  *  Valid values are [SCOPE_READ, SCOPE_WRITE, EXECUTE, ENFORCE, SCOPE_OWNER, DEVELOPER]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/tetration/0.1.1/docs/resources/role#access_type Role#access_type}
  */
  readonly accessType: string;
  /**
  * The scope in which this role will be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/tetration/0.1.1/docs/resources/role#app_scope_id Role#app_scope_id}
  */
  readonly appScopeId: string;
  /**
  * The role's description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/tetration/0.1.1/docs/resources/role#description Role#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/tetration/0.1.1/docs/resources/role#id Role#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * (Optional) User-specified name for the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/tetration/0.1.1/docs/resources/role#name Role#name}
  */
  readonly name?: string;
  /**
  * The users to which this role will be assigned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/tetration/0.1.1/docs/resources/role#user_ids Role#user_ids}
  */
  readonly userIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/tetration/0.1.1/docs/resources/role tetration_role}
*/
export class Role extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tetration_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Role resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Role to import
  * @param importFromId The id of the existing Role that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/tetration/0.1.1/docs/resources/role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Role to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tetration_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/tetration/0.1.1/docs/resources/role tetration_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoleConfig
  */
  public constructor(scope: Construct, id: string, config: RoleConfig) {
    super(scope, id, {
      terraformResourceType: 'tetration_role',
      terraformGeneratorMetadata: {
        providerName: 'tetration',
        providerVersion: '0.1.1',
        providerVersionConstraint: '0.1.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessAppScopeId = config.accessAppScopeId;
    this._accessType = config.accessType;
    this._appScopeId = config.appScopeId;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._userIds = config.userIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_app_scope_id - computed: false, optional: false, required: true
  private _accessAppScopeId?: string; 
  public get accessAppScopeId() {
    return this.getStringAttribute('access_app_scope_id');
  }
  public set accessAppScopeId(value: string) {
    this._accessAppScopeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessAppScopeIdInput() {
    return this._accessAppScopeId;
  }

  // access_type - computed: false, optional: false, required: true
  private _accessType?: string; 
  public get accessType() {
    return this.getStringAttribute('access_type');
  }
  public set accessType(value: string) {
    this._accessType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTypeInput() {
    return this._accessType;
  }

  // app_scope_id - computed: false, optional: false, required: true
  private _appScopeId?: string; 
  public get appScopeId() {
    return this.getStringAttribute('app_scope_id');
  }
  public set appScopeId(value: string) {
    this._appScopeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appScopeIdInput() {
    return this._appScopeId;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // user_ids - computed: true, optional: true, required: false
  private _userIds?: string[]; 
  public get userIds() {
    return cdktf.Fn.tolist(this.getListAttribute('user_ids'));
  }
  public set userIds(value: string[]) {
    this._userIds = value;
  }
  public resetUserIds() {
    this._userIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdsInput() {
    return this._userIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_app_scope_id: cdktf.stringToTerraform(this._accessAppScopeId),
      access_type: cdktf.stringToTerraform(this._accessType),
      app_scope_id: cdktf.stringToTerraform(this._appScopeId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_app_scope_id: {
        value: cdktf.stringToHclTerraform(this._accessAppScopeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_type: {
        value: cdktf.stringToHclTerraform(this._accessType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_scope_id: {
        value: cdktf.stringToHclTerraform(this._appScopeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      user_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
