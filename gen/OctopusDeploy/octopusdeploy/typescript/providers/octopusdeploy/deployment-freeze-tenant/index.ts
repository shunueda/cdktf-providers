// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/deployment_freeze_tenant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeploymentFreezeTenantConfig extends cdktf.TerraformMetaArguments {
  /**
  * The deployment freeze ID associated with this freeze scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/deployment_freeze_tenant#deploymentfreeze_id DeploymentFreezeTenant#deploymentfreeze_id}
  */
  readonly deploymentfreezeId: string;
  /**
  * The environment ID associated with this freeze scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/deployment_freeze_tenant#environment_id DeploymentFreezeTenant#environment_id}
  */
  readonly environmentId: string;
  /**
  * The project ID associated with this freeze scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/deployment_freeze_tenant#project_id DeploymentFreezeTenant#project_id}
  */
  readonly projectId: string;
  /**
  * The tenant ID associated with this freeze scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/deployment_freeze_tenant#tenant_id DeploymentFreezeTenant#tenant_id}
  */
  readonly tenantId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/deployment_freeze_tenant octopusdeploy_deployment_freeze_tenant}
*/
export class DeploymentFreezeTenant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_deployment_freeze_tenant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeploymentFreezeTenant resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeploymentFreezeTenant to import
  * @param importFromId The id of the existing DeploymentFreezeTenant that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/deployment_freeze_tenant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeploymentFreezeTenant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_deployment_freeze_tenant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/deployment_freeze_tenant octopusdeploy_deployment_freeze_tenant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeploymentFreezeTenantConfig
  */
  public constructor(scope: Construct, id: string, config: DeploymentFreezeTenantConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_deployment_freeze_tenant',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
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
    this._environmentId = config.environmentId;
    this._projectId = config.projectId;
    this._tenantId = config.tenantId;
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

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deploymentfreeze_id: cdktf.stringToTerraform(this._deploymentfreezeId),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      project_id: cdktf.stringToTerraform(this._projectId),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
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
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
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
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
