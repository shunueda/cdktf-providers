// https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/cluster_default_queue
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterDefaultQueueConfig extends cdktf.TerraformMetaArguments {
  /**
  * The GraphQL ID of the cluster to which to add a default queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/cluster_default_queue#cluster_id ClusterDefaultQueue#cluster_id}
  */
  readonly clusterId: string;
  /**
  * The GraphQL ID of the cluster queue to set as default on the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/cluster_default_queue#queue_id ClusterDefaultQueue#queue_id}
  */
  readonly queueId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/cluster_default_queue buildkite_cluster_default_queue}
*/
export class ClusterDefaultQueue extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "buildkite_cluster_default_queue";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClusterDefaultQueue resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClusterDefaultQueue to import
  * @param importFromId The id of the existing ClusterDefaultQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/cluster_default_queue#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClusterDefaultQueue to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "buildkite_cluster_default_queue", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/cluster_default_queue buildkite_cluster_default_queue} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterDefaultQueueConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterDefaultQueueConfig) {
    super(scope, id, {
      terraformResourceType: 'buildkite_cluster_default_queue',
      terraformGeneratorMetadata: {
        providerName: 'buildkite',
        providerVersion: '1.28.0',
        providerVersionConstraint: '1.28.0'
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
    this._queueId = config.queueId;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // queue_id - computed: false, optional: false, required: true
  private _queueId?: string; 
  public get queueId() {
    return this.getStringAttribute('queue_id');
  }
  public set queueId(value: string) {
    this._queueId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueIdInput() {
    return this._queueId;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      queue_id: cdktf.stringToTerraform(this._queueId),
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
      queue_id: {
        value: cdktf.stringToHclTerraform(this._queueId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
