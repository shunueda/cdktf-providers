// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project_deployment_target_trigger
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectDeploymentTargetTriggerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apply environment id filters to restrict which deployment targets will actually cause the trigger to fire, and consequently, which deployment targets will be automatically deployed to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project_deployment_target_trigger#environment_ids ProjectDeploymentTargetTrigger#environment_ids}
  */
  readonly environmentIds?: string[];
  /**
  * Apply event category filters to restrict which deployment targets will actually cause the trigger to fire, and consequently, which deployment targets will be automatically deployed to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project_deployment_target_trigger#event_categories ProjectDeploymentTargetTrigger#event_categories}
  */
  readonly eventCategories?: string[];
  /**
  * Apply event group filters to restrict which deployment targets will actually cause the trigger to fire, and consequently, which deployment targets will be automatically deployed to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project_deployment_target_trigger#event_groups ProjectDeploymentTargetTrigger#event_groups}
  */
  readonly eventGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project_deployment_target_trigger#id ProjectDeploymentTargetTrigger#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project_deployment_target_trigger#name ProjectDeploymentTargetTrigger#name}
  */
  readonly name: string;
  /**
  * The ID of the project to attach the trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project_deployment_target_trigger#project_id ProjectDeploymentTargetTrigger#project_id}
  */
  readonly projectId: string;
  /**
  * Apply event role filters to restrict which deployment targets will actually cause the trigger to fire, and consequently, which deployment targets will be automatically deployed to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project_deployment_target_trigger#roles ProjectDeploymentTargetTrigger#roles}
  */
  readonly roles?: string[];
  /**
  * Enable to re-deploy to the deployment targets even if they are already up-to-date with the current deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project_deployment_target_trigger#should_redeploy ProjectDeploymentTargetTrigger#should_redeploy}
  */
  readonly shouldRedeploy?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project_deployment_target_trigger octopusdeploy_project_deployment_target_trigger}
*/
export class ProjectDeploymentTargetTrigger extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_project_deployment_target_trigger";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectDeploymentTargetTrigger resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectDeploymentTargetTrigger to import
  * @param importFromId The id of the existing ProjectDeploymentTargetTrigger that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project_deployment_target_trigger#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectDeploymentTargetTrigger to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_project_deployment_target_trigger", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project_deployment_target_trigger octopusdeploy_project_deployment_target_trigger} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectDeploymentTargetTriggerConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectDeploymentTargetTriggerConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_project_deployment_target_trigger',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.6.0',
        providerVersionConstraint: '1.6.0'
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
    this._eventCategories = config.eventCategories;
    this._eventGroups = config.eventGroups;
    this._id = config.id;
    this._name = config.name;
    this._projectId = config.projectId;
    this._roles = config.roles;
    this._shouldRedeploy = config.shouldRedeploy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // environment_ids - computed: false, optional: true, required: false
  private _environmentIds?: string[]; 
  public get environmentIds() {
    return this.getListAttribute('environment_ids');
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

  // event_categories - computed: false, optional: true, required: false
  private _eventCategories?: string[]; 
  public get eventCategories() {
    return this.getListAttribute('event_categories');
  }
  public set eventCategories(value: string[]) {
    this._eventCategories = value;
  }
  public resetEventCategories() {
    this._eventCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventCategoriesInput() {
    return this._eventCategories;
  }

  // event_groups - computed: false, optional: true, required: false
  private _eventGroups?: string[]; 
  public get eventGroups() {
    return this.getListAttribute('event_groups');
  }
  public set eventGroups(value: string[]) {
    this._eventGroups = value;
  }
  public resetEventGroups() {
    this._eventGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventGroupsInput() {
    return this._eventGroups;
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
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

  // should_redeploy - computed: false, optional: true, required: false
  private _shouldRedeploy?: boolean | cdktf.IResolvable; 
  public get shouldRedeploy() {
    return this.getBooleanAttribute('should_redeploy');
  }
  public set shouldRedeploy(value: boolean | cdktf.IResolvable) {
    this._shouldRedeploy = value;
  }
  public resetShouldRedeploy() {
    this._shouldRedeploy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldRedeployInput() {
    return this._shouldRedeploy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._environmentIds),
      event_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._eventCategories),
      event_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._eventGroups),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roles),
      should_redeploy: cdktf.booleanToTerraform(this._shouldRedeploy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._environmentIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      event_categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._eventCategories),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      event_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._eventGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      should_redeploy: {
        value: cdktf.booleanToHclTerraform(this._shouldRedeploy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
