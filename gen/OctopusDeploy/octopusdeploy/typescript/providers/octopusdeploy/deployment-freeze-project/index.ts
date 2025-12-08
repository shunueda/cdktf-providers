// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/deployment_freeze_project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeploymentFreezeProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * The deployment freeze ID associated with this freeze scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/deployment_freeze_project#deploymentfreeze_id DeploymentFreezeProject#deploymentfreeze_id}
  */
  readonly deploymentfreezeId: string;
  /**
  * The environment IDs associated with this project deployment freeze scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/deployment_freeze_project#environment_ids DeploymentFreezeProject#environment_ids}
  */
  readonly environmentIds?: string[];
  /**
  * The project ID associated with this freeze scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/deployment_freeze_project#project_id DeploymentFreezeProject#project_id}
  */
  readonly projectId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/deployment_freeze_project octopusdeploy_deployment_freeze_project}
*/
export class DeploymentFreezeProject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_deployment_freeze_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeploymentFreezeProject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeploymentFreezeProject to import
  * @param importFromId The id of the existing DeploymentFreezeProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/deployment_freeze_project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeploymentFreezeProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_deployment_freeze_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/deployment_freeze_project octopusdeploy_deployment_freeze_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeploymentFreezeProjectConfig
  */
  public constructor(scope: Construct, id: string, config: DeploymentFreezeProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_deployment_freeze_project',
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
    this._deploymentfreezeId = config.deploymentfreezeId;
    this._environmentIds = config.environmentIds;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deploymentfreeze_id - computed: false, optional: false, required: true
  private _deploymentfreezeId?: string; 
  public get deploymentfreezeId() {
    return this.getStringAttribute('deploymentfreeze_id');
  }
  public set deploymentfreezeId(value: string) {
    this._deploymentfreezeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentfreezeIdInput() {
    return this._deploymentfreezeId;
  }

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deploymentfreeze_id: cdktf.stringToTerraform(this._deploymentfreezeId),
      environment_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._environmentIds),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deploymentfreeze_id: {
        value: cdktf.stringToHclTerraform(this._deploymentfreezeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._environmentIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
