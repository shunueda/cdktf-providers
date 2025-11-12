// https://registry.terraform.io/providers/castai/castai/8.1.0/docs/data-sources/workload_scaling_policy_order
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCastaiWorkloadScalingPolicyOrderConfig extends cdktf.TerraformMetaArguments {
  /**
  * CAST AI cluster id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.1.0/docs/data-sources/workload_scaling_policy_order#cluster_id DataCastaiWorkloadScalingPolicyOrder#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.1.0/docs/data-sources/workload_scaling_policy_order#id DataCastaiWorkloadScalingPolicyOrder#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/castai/castai/8.1.0/docs/data-sources/workload_scaling_policy_order castai_workload_scaling_policy_order}
*/
export class DataCastaiWorkloadScalingPolicyOrder extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "castai_workload_scaling_policy_order";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCastaiWorkloadScalingPolicyOrder resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCastaiWorkloadScalingPolicyOrder to import
  * @param importFromId The id of the existing DataCastaiWorkloadScalingPolicyOrder that should be imported. Refer to the {@link https://registry.terraform.io/providers/castai/castai/8.1.0/docs/data-sources/workload_scaling_policy_order#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCastaiWorkloadScalingPolicyOrder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "castai_workload_scaling_policy_order", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/castai/castai/8.1.0/docs/data-sources/workload_scaling_policy_order castai_workload_scaling_policy_order} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCastaiWorkloadScalingPolicyOrderConfig
  */
  public constructor(scope: Construct, id: string, config: DataCastaiWorkloadScalingPolicyOrderConfig) {
    super(scope, id, {
      terraformResourceType: 'castai_workload_scaling_policy_order',
      terraformGeneratorMetadata: {
        providerName: 'castai',
        providerVersion: '8.1.0',
        providerVersionConstraint: '8.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // policy_ids - computed: true, optional: false, required: false
  public get policyIds() {
    return this.getListAttribute('policy_ids');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
