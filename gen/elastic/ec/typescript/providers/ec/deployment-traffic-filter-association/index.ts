// https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment_traffic_filter_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeploymentTrafficFilterAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Required deployment ID where the traffic filter will be associated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment_traffic_filter_association#deployment_id DeploymentTrafficFilterAssociation#deployment_id}
  */
  readonly deploymentId: string;
  /**
  * Required traffic filter ruleset ID to tie to a deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment_traffic_filter_association#traffic_filter_id DeploymentTrafficFilterAssociation#traffic_filter_id}
  */
  readonly trafficFilterId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment_traffic_filter_association ec_deployment_traffic_filter_association}
*/
export class DeploymentTrafficFilterAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ec_deployment_traffic_filter_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeploymentTrafficFilterAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeploymentTrafficFilterAssociation to import
  * @param importFromId The id of the existing DeploymentTrafficFilterAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment_traffic_filter_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeploymentTrafficFilterAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ec_deployment_traffic_filter_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment_traffic_filter_association ec_deployment_traffic_filter_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeploymentTrafficFilterAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: DeploymentTrafficFilterAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'ec_deployment_traffic_filter_association',
      terraformGeneratorMetadata: {
        providerName: 'ec',
        providerVersion: '0.12.2',
        providerVersionConstraint: '0.12.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deploymentId = config.deploymentId;
    this._trafficFilterId = config.trafficFilterId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deployment_id - computed: false, optional: false, required: true
  private _deploymentId?: string; 
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }
  public set deploymentId(value: string) {
    this._deploymentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentIdInput() {
    return this._deploymentId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // traffic_filter_id - computed: false, optional: false, required: true
  private _trafficFilterId?: string; 
  public get trafficFilterId() {
    return this.getStringAttribute('traffic_filter_id');
  }
  public set trafficFilterId(value: string) {
    this._trafficFilterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficFilterIdInput() {
    return this._trafficFilterId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deployment_id: cdktf.stringToTerraform(this._deploymentId),
      traffic_filter_id: cdktf.stringToTerraform(this._trafficFilterId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deployment_id: {
        value: cdktf.stringToHclTerraform(this._deploymentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_filter_id: {
        value: cdktf.stringToHclTerraform(this._trafficFilterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
