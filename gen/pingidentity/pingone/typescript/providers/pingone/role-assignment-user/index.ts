// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/role_assignment_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoleAssignmentUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the environment that contains the user to assign the admin role to.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/role_assignment_user#environment_id RoleAssignmentUser#environment_id}
  */
  readonly environmentId: string;
  /**
  * The ID of an admin role to assign to the user.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/role_assignment_user#role_id RoleAssignmentUser#role_id}
  */
  readonly roleId: string;
  /**
  * Limit the scope of the admin role assignment to the specified application ID.  Must be a valid PingOne resource ID.  Some roles cannot be scoped to the application.  This field is immutable and will trigger a replace plan if changed.  Exactly one of the following must be defined: `scope_application_id`, `scope_organization_id`, `scope_environment_id`, `scope_population_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/role_assignment_user#scope_application_id RoleAssignmentUser#scope_application_id}
  */
  readonly scopeApplicationId?: string;
  /**
  * Limit the scope of the admin role assignment to the specified environment ID.  Must be a valid PingOne resource ID.  Some roles cannot be scoped to the environment.  This field is immutable and will trigger a replace plan if changed.  Exactly one of the following must be defined: `scope_application_id`, `scope_organization_id`, `scope_environment_id`, `scope_population_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/role_assignment_user#scope_environment_id RoleAssignmentUser#scope_environment_id}
  */
  readonly scopeEnvironmentId?: string;
  /**
  * Limit the scope of the admin role assignment to the specified organization ID.  Must be a valid PingOne resource ID.  Some roles cannot be scoped to the organization.  This field is immutable and will trigger a replace plan if changed.  Exactly one of the following must be defined: `scope_application_id`, `scope_organization_id`, `scope_environment_id`, `scope_population_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/role_assignment_user#scope_organization_id RoleAssignmentUser#scope_organization_id}
  */
  readonly scopeOrganizationId?: string;
  /**
  * Limit the scope of the admin role assignment to the specified population ID.  Must be a valid PingOne resource ID.  Some roles cannot be scoped to the population.  This field is immutable and will trigger a replace plan if changed.  Exactly one of the following must be defined: `scope_application_id`, `scope_organization_id`, `scope_environment_id`, `scope_population_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/role_assignment_user#scope_population_id RoleAssignmentUser#scope_population_id}
  */
  readonly scopePopulationId?: string;
  /**
  * The ID of an user to assign an admin role to.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/role_assignment_user#user_id RoleAssignmentUser#user_id}
  */
  readonly userId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/role_assignment_user pingone_role_assignment_user}
*/
export class RoleAssignmentUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_role_assignment_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RoleAssignmentUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RoleAssignmentUser to import
  * @param importFromId The id of the existing RoleAssignmentUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/role_assignment_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RoleAssignmentUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_role_assignment_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/role_assignment_user pingone_role_assignment_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoleAssignmentUserConfig
  */
  public constructor(scope: Construct, id: string, config: RoleAssignmentUserConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_role_assignment_user',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environmentId = config.environmentId;
    this._roleId = config.roleId;
    this._scopeApplicationId = config.scopeApplicationId;
    this._scopeEnvironmentId = config.scopeEnvironmentId;
    this._scopeOrganizationId = config.scopeOrganizationId;
    this._scopePopulationId = config.scopePopulationId;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // role_id - computed: false, optional: false, required: true
  private _roleId?: string; 
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
  public set roleId(value: string) {
    this._roleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }

  // scope_application_id - computed: false, optional: true, required: false
  private _scopeApplicationId?: string; 
  public get scopeApplicationId() {
    return this.getStringAttribute('scope_application_id');
  }
  public set scopeApplicationId(value: string) {
    this._scopeApplicationId = value;
  }
  public resetScopeApplicationId() {
    this._scopeApplicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeApplicationIdInput() {
    return this._scopeApplicationId;
  }

  // scope_environment_id - computed: false, optional: true, required: false
  private _scopeEnvironmentId?: string; 
  public get scopeEnvironmentId() {
    return this.getStringAttribute('scope_environment_id');
  }
  public set scopeEnvironmentId(value: string) {
    this._scopeEnvironmentId = value;
  }
  public resetScopeEnvironmentId() {
    this._scopeEnvironmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeEnvironmentIdInput() {
    return this._scopeEnvironmentId;
  }

  // scope_organization_id - computed: false, optional: true, required: false
  private _scopeOrganizationId?: string; 
  public get scopeOrganizationId() {
    return this.getStringAttribute('scope_organization_id');
  }
  public set scopeOrganizationId(value: string) {
    this._scopeOrganizationId = value;
  }
  public resetScopeOrganizationId() {
    this._scopeOrganizationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeOrganizationIdInput() {
    return this._scopeOrganizationId;
  }

  // scope_population_id - computed: false, optional: true, required: false
  private _scopePopulationId?: string; 
  public get scopePopulationId() {
    return this.getStringAttribute('scope_population_id');
  }
  public set scopePopulationId(value: string) {
    this._scopePopulationId = value;
  }
  public resetScopePopulationId() {
    this._scopePopulationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopePopulationIdInput() {
    return this._scopePopulationId;
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment_id: cdktf.stringToTerraform(this._environmentId),
      role_id: cdktf.stringToTerraform(this._roleId),
      scope_application_id: cdktf.stringToTerraform(this._scopeApplicationId),
      scope_environment_id: cdktf.stringToTerraform(this._scopeEnvironmentId),
      scope_organization_id: cdktf.stringToTerraform(this._scopeOrganizationId),
      scope_population_id: cdktf.stringToTerraform(this._scopePopulationId),
      user_id: cdktf.stringToTerraform(this._userId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_id: {
        value: cdktf.stringToHclTerraform(this._roleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope_application_id: {
        value: cdktf.stringToHclTerraform(this._scopeApplicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope_environment_id: {
        value: cdktf.stringToHclTerraform(this._scopeEnvironmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope_organization_id: {
        value: cdktf.stringToHclTerraform(this._scopeOrganizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope_population_id: {
        value: cdktf.stringToHclTerraform(this._scopePopulationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
