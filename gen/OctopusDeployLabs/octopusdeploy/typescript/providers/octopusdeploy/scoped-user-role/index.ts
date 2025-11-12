// https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/scoped_user_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScopedUserRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/scoped_user_role#environment_ids ScopedUserRole#environment_ids}
  */
  readonly environmentIds?: string[];
  /**
  * The unique ID for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/scoped_user_role#id ScopedUserRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/scoped_user_role#project_group_ids ScopedUserRole#project_group_ids}
  */
  readonly projectGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/scoped_user_role#project_ids ScopedUserRole#project_ids}
  */
  readonly projectIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/scoped_user_role#space_id ScopedUserRole#space_id}
  */
  readonly spaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/scoped_user_role#team_id ScopedUserRole#team_id}
  */
  readonly teamId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/scoped_user_role#tenant_ids ScopedUserRole#tenant_ids}
  */
  readonly tenantIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/scoped_user_role#user_role_id ScopedUserRole#user_role_id}
  */
  readonly userRoleId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/scoped_user_role octopusdeploy_scoped_user_role}
*/
export class ScopedUserRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_scoped_user_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ScopedUserRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScopedUserRole to import
  * @param importFromId The id of the existing ScopedUserRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/scoped_user_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScopedUserRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_scoped_user_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/scoped_user_role octopusdeploy_scoped_user_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScopedUserRoleConfig
  */
  public constructor(scope: Construct, id: string, config: ScopedUserRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_scoped_user_role',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '0.43.2',
        providerVersionConstraint: '0.43.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environmentIds = config.environmentIds;
    this._id = config.id;
    this._projectGroupIds = config.projectGroupIds;
    this._projectIds = config.projectIds;
    this._spaceId = config.spaceId;
    this._teamId = config.teamId;
    this._tenantIds = config.tenantIds;
    this._userRoleId = config.userRoleId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // environment_ids - computed: false, optional: true, required: false
  private _environmentIds?: string[]; 
  public get environmentIds() {
    return cdktf.Fn.tolist(this.getListAttribute('environment_ids'));
  }
  public set environmentIds(value: string[]) {
    this._environmentIds = value;
  }
  public resetEnvironmentIds() {
    this._environmentIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdsInput() {
    return this._environmentIds;
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

  // project_group_ids - computed: false, optional: true, required: false
  private _projectGroupIds?: string[]; 
  public get projectGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('project_group_ids'));
  }
  public set projectGroupIds(value: string[]) {
    this._projectGroupIds = value;
  }
  public resetProjectGroupIds() {
    this._projectGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectGroupIdsInput() {
    return this._projectGroupIds;
  }

  // project_ids - computed: false, optional: true, required: false
  private _projectIds?: string[]; 
  public get projectIds() {
    return cdktf.Fn.tolist(this.getListAttribute('project_ids'));
  }
  public set projectIds(value: string[]) {
    this._projectIds = value;
  }
  public resetProjectIds() {
    this._projectIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdsInput() {
    return this._projectIds;
  }

  // space_id - computed: false, optional: false, required: true
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // team_id - computed: false, optional: false, required: true
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // tenant_ids - computed: false, optional: true, required: false
  private _tenantIds?: string[]; 
  public get tenantIds() {
    return cdktf.Fn.tolist(this.getListAttribute('tenant_ids'));
  }
  public set tenantIds(value: string[]) {
    this._tenantIds = value;
  }
  public resetTenantIds() {
    this._tenantIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdsInput() {
    return this._tenantIds;
  }

  // user_role_id - computed: false, optional: false, required: true
  private _userRoleId?: string; 
  public get userRoleId() {
    return this.getStringAttribute('user_role_id');
  }
  public set userRoleId(value: string) {
    this._userRoleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userRoleIdInput() {
    return this._userRoleId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._environmentIds),
      id: cdktf.stringToTerraform(this._id),
      project_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._projectGroupIds),
      project_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._projectIds),
      space_id: cdktf.stringToTerraform(this._spaceId),
      team_id: cdktf.stringToTerraform(this._teamId),
      tenant_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tenantIds),
      user_role_id: cdktf.stringToTerraform(this._userRoleId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._environmentIds),
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
      project_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._projectGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      project_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._projectIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team_id: {
        value: cdktf.stringToHclTerraform(this._teamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tenantIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      user_role_id: {
        value: cdktf.stringToHclTerraform(this._userRoleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
