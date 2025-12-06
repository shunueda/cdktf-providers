// https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.1.0/docs/resources/infrastructure_deployer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InfrastructureDeployerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow data loss
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.1.0/docs/resources/infrastructure_deployer#allow_data_loss InfrastructureDeployer#allow_data_loss}
  */
  readonly allowDataLoss?: boolean | cdktf.IResolvable;
  /**
  * Await deploy finish
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.1.0/docs/resources/infrastructure_deployer#await_deploy_finish InfrastructureDeployer#await_deploy_finish}
  */
  readonly awaitDeployFinish?: boolean | cdktf.IResolvable;
  /**
  * Infrastructure Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.1.0/docs/resources/infrastructure_deployer#infrastructure_id InfrastructureDeployer#infrastructure_id}
  */
  readonly infrastructureId: string;
  /**
  * Prevent infrastructure deploy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.1.0/docs/resources/infrastructure_deployer#prevent_deploy InfrastructureDeployer#prevent_deploy}
  */
  readonly preventDeploy?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.1.0/docs/resources/infrastructure_deployer metalcloud_infrastructure_deployer}
*/
export class InfrastructureDeployer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "metalcloud_infrastructure_deployer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InfrastructureDeployer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InfrastructureDeployer to import
  * @param importFromId The id of the existing InfrastructureDeployer that should be imported. Refer to the {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.1.0/docs/resources/infrastructure_deployer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InfrastructureDeployer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "metalcloud_infrastructure_deployer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.1.0/docs/resources/infrastructure_deployer metalcloud_infrastructure_deployer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InfrastructureDeployerConfig
  */
  public constructor(scope: Construct, id: string, config: InfrastructureDeployerConfig) {
    super(scope, id, {
      terraformResourceType: 'metalcloud_infrastructure_deployer',
      terraformGeneratorMetadata: {
        providerName: 'metalcloud',
        providerVersion: '7.1.0',
        providerVersionConstraint: '7.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowDataLoss = config.allowDataLoss;
    this._awaitDeployFinish = config.awaitDeployFinish;
    this._infrastructureId = config.infrastructureId;
    this._preventDeploy = config.preventDeploy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_data_loss - computed: true, optional: true, required: false
  private _allowDataLoss?: boolean | cdktf.IResolvable; 
  public get allowDataLoss() {
    return this.getBooleanAttribute('allow_data_loss');
  }
  public set allowDataLoss(value: boolean | cdktf.IResolvable) {
    this._allowDataLoss = value;
  }
  public resetAllowDataLoss() {
    this._allowDataLoss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDataLossInput() {
    return this._allowDataLoss;
  }

  // await_deploy_finish - computed: true, optional: true, required: false
  private _awaitDeployFinish?: boolean | cdktf.IResolvable; 
  public get awaitDeployFinish() {
    return this.getBooleanAttribute('await_deploy_finish');
  }
  public set awaitDeployFinish(value: boolean | cdktf.IResolvable) {
    this._awaitDeployFinish = value;
  }
  public resetAwaitDeployFinish() {
    this._awaitDeployFinish = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awaitDeployFinishInput() {
    return this._awaitDeployFinish;
  }

  // infrastructure_id - computed: false, optional: false, required: true
  private _infrastructureId?: string; 
  public get infrastructureId() {
    return this.getStringAttribute('infrastructure_id');
  }
  public set infrastructureId(value: string) {
    this._infrastructureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureIdInput() {
    return this._infrastructureId;
  }

  // prevent_deploy - computed: true, optional: true, required: false
  private _preventDeploy?: boolean | cdktf.IResolvable; 
  public get preventDeploy() {
    return this.getBooleanAttribute('prevent_deploy');
  }
  public set preventDeploy(value: boolean | cdktf.IResolvable) {
    this._preventDeploy = value;
  }
  public resetPreventDeploy() {
    this._preventDeploy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventDeployInput() {
    return this._preventDeploy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_data_loss: cdktf.booleanToTerraform(this._allowDataLoss),
      await_deploy_finish: cdktf.booleanToTerraform(this._awaitDeployFinish),
      infrastructure_id: cdktf.stringToTerraform(this._infrastructureId),
      prevent_deploy: cdktf.booleanToTerraform(this._preventDeploy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_data_loss: {
        value: cdktf.booleanToHclTerraform(this._allowDataLoss),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      await_deploy_finish: {
        value: cdktf.booleanToHclTerraform(this._awaitDeployFinish),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      infrastructure_id: {
        value: cdktf.stringToHclTerraform(this._infrastructureId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prevent_deploy: {
        value: cdktf.booleanToHclTerraform(this._preventDeploy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
