// https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/infrastructure
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InfrastructureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow data loss
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/infrastructure#allow_data_loss Infrastructure#allow_data_loss}
  */
  readonly allowDataLoss?: boolean | cdktf.IResolvable;
  /**
  * Await deploy finish
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/infrastructure#await_deploy_finish Infrastructure#await_deploy_finish}
  */
  readonly awaitDeployFinish?: boolean | cdktf.IResolvable;
  /**
  * Infrastructure label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/infrastructure#label Infrastructure#label}
  */
  readonly label: string;
  /**
  * Prevent infrastructure deploy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/infrastructure#prevent_deploy Infrastructure#prevent_deploy}
  */
  readonly preventDeploy?: boolean | cdktf.IResolvable;
  /**
  * Site Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/infrastructure#site_id Infrastructure#site_id}
  */
  readonly siteId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/infrastructure metalcloud_infrastructure}
*/
export class Infrastructure extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "metalcloud_infrastructure";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Infrastructure resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Infrastructure to import
  * @param importFromId The id of the existing Infrastructure that should be imported. Refer to the {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/infrastructure#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Infrastructure to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "metalcloud_infrastructure", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/infrastructure metalcloud_infrastructure} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InfrastructureConfig
  */
  public constructor(scope: Construct, id: string, config: InfrastructureConfig) {
    super(scope, id, {
      terraformResourceType: 'metalcloud_infrastructure',
      terraformGeneratorMetadata: {
        providerName: 'metalcloud',
        providerVersion: '7.0.10',
        providerVersionConstraint: '7.0.10'
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
    this._label = config.label;
    this._preventDeploy = config.preventDeploy;
    this._siteId = config.siteId;
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

  // infrastructure_id - computed: true, optional: false, required: false
  public get infrastructureId() {
    return this.getStringAttribute('infrastructure_id');
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
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

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_data_loss: cdktf.booleanToTerraform(this._allowDataLoss),
      await_deploy_finish: cdktf.booleanToTerraform(this._awaitDeployFinish),
      label: cdktf.stringToTerraform(this._label),
      prevent_deploy: cdktf.booleanToTerraform(this._preventDeploy),
      site_id: cdktf.stringToTerraform(this._siteId),
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
      label: {
        value: cdktf.stringToHclTerraform(this._label),
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
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
