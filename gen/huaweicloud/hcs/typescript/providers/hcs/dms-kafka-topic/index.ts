// https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/resources/dms_kafka_topic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DmsKafkaTopicConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/resources/dms_kafka_topic#aging_time DmsKafkaTopic#aging_time}
  */
  readonly agingTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/resources/dms_kafka_topic#id DmsKafkaTopic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/resources/dms_kafka_topic#instance_id DmsKafkaTopic#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/resources/dms_kafka_topic#name DmsKafkaTopic#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/resources/dms_kafka_topic#partitions DmsKafkaTopic#partitions}
  */
  readonly partitions: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/resources/dms_kafka_topic#region DmsKafkaTopic#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/resources/dms_kafka_topic#replicas DmsKafkaTopic#replicas}
  */
  readonly replicas?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/resources/dms_kafka_topic#sync_flushing DmsKafkaTopic#sync_flushing}
  */
  readonly syncFlushing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/resources/dms_kafka_topic#sync_replication DmsKafkaTopic#sync_replication}
  */
  readonly syncReplication?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/resources/dms_kafka_topic hcs_dms_kafka_topic}
*/
export class DmsKafkaTopic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcs_dms_kafka_topic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DmsKafkaTopic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DmsKafkaTopic to import
  * @param importFromId The id of the existing DmsKafkaTopic that should be imported. Refer to the {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/resources/dms_kafka_topic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DmsKafkaTopic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcs_dms_kafka_topic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/resources/dms_kafka_topic hcs_dms_kafka_topic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DmsKafkaTopicConfig
  */
  public constructor(scope: Construct, id: string, config: DmsKafkaTopicConfig) {
    super(scope, id, {
      terraformResourceType: 'hcs_dms_kafka_topic',
      terraformGeneratorMetadata: {
        providerName: 'hcs',
        providerVersion: '2.4.19'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agingTime = config.agingTime;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._name = config.name;
    this._partitions = config.partitions;
    this._region = config.region;
    this._replicas = config.replicas;
    this._syncFlushing = config.syncFlushing;
    this._syncReplication = config.syncReplication;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aging_time - computed: true, optional: true, required: false
  private _agingTime?: number; 
  public get agingTime() {
    return this.getNumberAttribute('aging_time');
  }
  public set agingTime(value: number) {
    this._agingTime = value;
  }
  public resetAgingTime() {
    this._agingTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agingTimeInput() {
    return this._agingTime;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
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

  // partitions - computed: false, optional: false, required: true
  private _partitions?: number; 
  public get partitions() {
    return this.getNumberAttribute('partitions');
  }
  public set partitions(value: number) {
    this._partitions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionsInput() {
    return this._partitions;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // replicas - computed: true, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // sync_flushing - computed: true, optional: true, required: false
  private _syncFlushing?: boolean | cdktf.IResolvable; 
  public get syncFlushing() {
    return this.getBooleanAttribute('sync_flushing');
  }
  public set syncFlushing(value: boolean | cdktf.IResolvable) {
    this._syncFlushing = value;
  }
  public resetSyncFlushing() {
    this._syncFlushing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncFlushingInput() {
    return this._syncFlushing;
  }

  // sync_replication - computed: true, optional: true, required: false
  private _syncReplication?: boolean | cdktf.IResolvable; 
  public get syncReplication() {
    return this.getBooleanAttribute('sync_replication');
  }
  public set syncReplication(value: boolean | cdktf.IResolvable) {
    this._syncReplication = value;
  }
  public resetSyncReplication() {
    this._syncReplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncReplicationInput() {
    return this._syncReplication;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aging_time: cdktf.numberToTerraform(this._agingTime),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      name: cdktf.stringToTerraform(this._name),
      partitions: cdktf.numberToTerraform(this._partitions),
      region: cdktf.stringToTerraform(this._region),
      replicas: cdktf.numberToTerraform(this._replicas),
      sync_flushing: cdktf.booleanToTerraform(this._syncFlushing),
      sync_replication: cdktf.booleanToTerraform(this._syncReplication),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aging_time: {
        value: cdktf.numberToHclTerraform(this._agingTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
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
      partitions: {
        value: cdktf.numberToHclTerraform(this._partitions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replicas: {
        value: cdktf.numberToHclTerraform(this._replicas),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sync_flushing: {
        value: cdktf.booleanToHclTerraform(this._syncFlushing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sync_replication: {
        value: cdktf.booleanToHclTerraform(this._syncReplication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
