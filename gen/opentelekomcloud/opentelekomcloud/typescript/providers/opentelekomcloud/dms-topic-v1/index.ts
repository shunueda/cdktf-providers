// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dms_topic_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DmsTopicV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dms_topic_v1#id DmsTopicV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dms_topic_v1#instance_id DmsTopicV1#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dms_topic_v1#max_partitions DmsTopicV1#max_partitions}
  */
  readonly maxPartitions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dms_topic_v1#name DmsTopicV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dms_topic_v1#partition DmsTopicV1#partition}
  */
  readonly partition?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dms_topic_v1#remain_partitions DmsTopicV1#remain_partitions}
  */
  readonly remainPartitions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dms_topic_v1#replication DmsTopicV1#replication}
  */
  readonly replication?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dms_topic_v1#retention_time DmsTopicV1#retention_time}
  */
  readonly retentionTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dms_topic_v1#size DmsTopicV1#size}
  */
  readonly size?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dms_topic_v1#sync_message_flush DmsTopicV1#sync_message_flush}
  */
  readonly syncMessageFlush?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dms_topic_v1#sync_replication DmsTopicV1#sync_replication}
  */
  readonly syncReplication?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dms_topic_v1 opentelekomcloud_dms_topic_v1}
*/
export class DmsTopicV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_dms_topic_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DmsTopicV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DmsTopicV1 to import
  * @param importFromId The id of the existing DmsTopicV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dms_topic_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DmsTopicV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_dms_topic_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dms_topic_v1 opentelekomcloud_dms_topic_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DmsTopicV1Config
  */
  public constructor(scope: Construct, id: string, config: DmsTopicV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_dms_topic_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.53',
        providerVersionConstraint: '1.36.53'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._maxPartitions = config.maxPartitions;
    this._name = config.name;
    this._partition = config.partition;
    this._remainPartitions = config.remainPartitions;
    this._replication = config.replication;
    this._retentionTime = config.retentionTime;
    this._size = config.size;
    this._syncMessageFlush = config.syncMessageFlush;
    this._syncReplication = config.syncReplication;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // max_partitions - computed: true, optional: true, required: false
  private _maxPartitions?: number; 
  public get maxPartitions() {
    return this.getNumberAttribute('max_partitions');
  }
  public set maxPartitions(value: number) {
    this._maxPartitions = value;
  }
  public resetMaxPartitions() {
    this._maxPartitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPartitionsInput() {
    return this._maxPartitions;
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

  // partition - computed: true, optional: true, required: false
  private _partition?: number; 
  public get partition() {
    return this.getNumberAttribute('partition');
  }
  public set partition(value: number) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // remain_partitions - computed: true, optional: true, required: false
  private _remainPartitions?: number; 
  public get remainPartitions() {
    return this.getNumberAttribute('remain_partitions');
  }
  public set remainPartitions(value: number) {
    this._remainPartitions = value;
  }
  public resetRemainPartitions() {
    this._remainPartitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remainPartitionsInput() {
    return this._remainPartitions;
  }

  // replication - computed: true, optional: true, required: false
  private _replication?: number; 
  public get replication() {
    return this.getNumberAttribute('replication');
  }
  public set replication(value: number) {
    this._replication = value;
  }
  public resetReplication() {
    this._replication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationInput() {
    return this._replication;
  }

  // retention_time - computed: true, optional: true, required: false
  private _retentionTime?: number; 
  public get retentionTime() {
    return this.getNumberAttribute('retention_time');
  }
  public set retentionTime(value: number) {
    this._retentionTime = value;
  }
  public resetRetentionTime() {
    this._retentionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionTimeInput() {
    return this._retentionTime;
  }

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // sync_message_flush - computed: true, optional: true, required: false
  private _syncMessageFlush?: boolean | cdktf.IResolvable; 
  public get syncMessageFlush() {
    return this.getBooleanAttribute('sync_message_flush');
  }
  public set syncMessageFlush(value: boolean | cdktf.IResolvable) {
    this._syncMessageFlush = value;
  }
  public resetSyncMessageFlush() {
    this._syncMessageFlush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncMessageFlushInput() {
    return this._syncMessageFlush;
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
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      max_partitions: cdktf.numberToTerraform(this._maxPartitions),
      name: cdktf.stringToTerraform(this._name),
      partition: cdktf.numberToTerraform(this._partition),
      remain_partitions: cdktf.numberToTerraform(this._remainPartitions),
      replication: cdktf.numberToTerraform(this._replication),
      retention_time: cdktf.numberToTerraform(this._retentionTime),
      size: cdktf.numberToTerraform(this._size),
      sync_message_flush: cdktf.booleanToTerraform(this._syncMessageFlush),
      sync_replication: cdktf.booleanToTerraform(this._syncReplication),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      max_partitions: {
        value: cdktf.numberToHclTerraform(this._maxPartitions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition: {
        value: cdktf.numberToHclTerraform(this._partition),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remain_partitions: {
        value: cdktf.numberToHclTerraform(this._remainPartitions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      replication: {
        value: cdktf.numberToHclTerraform(this._replication),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retention_time: {
        value: cdktf.numberToHclTerraform(this._retentionTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sync_message_flush: {
        value: cdktf.booleanToHclTerraform(this._syncMessageFlush),
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
