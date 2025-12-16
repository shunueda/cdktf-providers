// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/cluster_waiter_v2_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInstaclustrClusterWaiterV2InstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/cluster_waiter_v2_instance#cluster_id DataInstaclustrClusterWaiterV2Instance#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Indicates if the cluster is currently performing any restructuring operation such as being created or resized
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/cluster_waiter_v2_instance#current_cluster_operation_status DataInstaclustrClusterWaiterV2Instance#current_cluster_operation_status}
  */
  readonly currentClusterOperationStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/cluster_waiter_v2_instance#id DataInstaclustrClusterWaiterV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/cluster_waiter_v2_instance instaclustr_cluster_waiter_v2_instance}
*/
export class DataInstaclustrClusterWaiterV2Instance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_cluster_waiter_v2_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInstaclustrClusterWaiterV2Instance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInstaclustrClusterWaiterV2Instance to import
  * @param importFromId The id of the existing DataInstaclustrClusterWaiterV2Instance that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/cluster_waiter_v2_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInstaclustrClusterWaiterV2Instance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_cluster_waiter_v2_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/cluster_waiter_v2_instance instaclustr_cluster_waiter_v2_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInstaclustrClusterWaiterV2InstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataInstaclustrClusterWaiterV2InstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_cluster_waiter_v2_instance',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.37',
        providerVersionConstraint: '2.1.37'
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
    this._currentClusterOperationStatus = config.currentClusterOperationStatus;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // current_cluster_operation_status - computed: true, optional: true, required: false
  private _currentClusterOperationStatus?: string; 
  public get currentClusterOperationStatus() {
    return this.getStringAttribute('current_cluster_operation_status');
  }
  public set currentClusterOperationStatus(value: string) {
    this._currentClusterOperationStatus = value;
  }
  public resetCurrentClusterOperationStatus() {
    this._currentClusterOperationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentClusterOperationStatusInput() {
    return this._currentClusterOperationStatus;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      current_cluster_operation_status: cdktf.stringToTerraform(this._currentClusterOperationStatus),
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
      current_cluster_operation_status: {
        value: cdktf.stringToHclTerraform(this._currentClusterOperationStatus),
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
