// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/ckafka_consumer_group_modify_offset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CkafkaConsumerGroupModifyOffsetConfig extends cdktf.TerraformMetaArguments {
  /**
  * kafka group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/ckafka_consumer_group_modify_offset#group CkafkaConsumerGroupModifyOffset#group}
  */
  readonly group: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/ckafka_consumer_group_modify_offset#id CkafkaConsumerGroupModifyOffset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Kafka instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/ckafka_consumer_group_modify_offset#instance_id CkafkaConsumerGroupModifyOffset#instance_id}
  */
  readonly instanceId: string;
  /**
  * The offset location that needs to be reset. When strategy is 2, this field must be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/ckafka_consumer_group_modify_offset#offset CkafkaConsumerGroupModifyOffset#offset}
  */
  readonly offset?: number;
  /**
  * The list of partition that needs to be reset if no Topics parameter is specified. Resets the partition in the corresponding Partition list of all topics. When Topics is specified, the partition of the corresponding topic list of the specified Partitions list is reset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/ckafka_consumer_group_modify_offset#partitions CkafkaConsumerGroupModifyOffset#partitions}
  */
  readonly partitions?: number[];
  /**
  * This field must be included when strategy is 0. If it is greater than zero, the offset will be moved backward by shift bars, and if it is less than zero, the offset will be traced back to the number of shift entries. After the correct reset, the new offset should be (old_offset + shift). It should be noted that if the new offset is less than partition's earliest, it will be set to earliest, and if the latest greater than partition will be set to latest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/ckafka_consumer_group_modify_offset#shift CkafkaConsumerGroupModifyOffset#shift}
  */
  readonly shift?: number;
  /**
  * Unit ms. When strategy is 1, you must include this field, where-2 means to reset the offset to the beginning,-1 means to reset to the latest position (equivalent to emptying), and other values represent the specified time. You will get the offset of the specified time in the topic and then reset it. If there is no message at the specified time, get the last offset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/ckafka_consumer_group_modify_offset#shift_timestamp CkafkaConsumerGroupModifyOffset#shift_timestamp}
  */
  readonly shiftTimestamp?: number;
  /**
  * Reset the policy of offset.
  * `0`: Move the offset forward or backward shift bar;
  * `1`: Alignment reference (by-duration,to-datetime,to-earliest,to-latest), which means moving the offset to the location of the specified timestamp;
  * `2`: Alignment reference (to-offset), which means to move the offset to the specified offset location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/ckafka_consumer_group_modify_offset#strategy CkafkaConsumerGroupModifyOffset#strategy}
  */
  readonly strategy: number;
  /**
  * Indicates the topics that needs to be reset. Leave it empty means all.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/ckafka_consumer_group_modify_offset#topics CkafkaConsumerGroupModifyOffset#topics}
  */
  readonly topics?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/ckafka_consumer_group_modify_offset tencentcloud_ckafka_consumer_group_modify_offset}
*/
export class CkafkaConsumerGroupModifyOffset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ckafka_consumer_group_modify_offset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CkafkaConsumerGroupModifyOffset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CkafkaConsumerGroupModifyOffset to import
  * @param importFromId The id of the existing CkafkaConsumerGroupModifyOffset that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/ckafka_consumer_group_modify_offset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CkafkaConsumerGroupModifyOffset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ckafka_consumer_group_modify_offset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/ckafka_consumer_group_modify_offset tencentcloud_ckafka_consumer_group_modify_offset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CkafkaConsumerGroupModifyOffsetConfig
  */
  public constructor(scope: Construct, id: string, config: CkafkaConsumerGroupModifyOffsetConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ckafka_consumer_group_modify_offset',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.46',
        providerVersionConstraint: '1.82.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._group = config.group;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._offset = config.offset;
    this._partitions = config.partitions;
    this._shift = config.shift;
    this._shiftTimestamp = config.shiftTimestamp;
    this._strategy = config.strategy;
    this._topics = config.topics;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // partitions - computed: false, optional: true, required: false
  private _partitions?: number[]; 
  public get partitions() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('partitions')));
  }
  public set partitions(value: number[]) {
    this._partitions = value;
  }
  public resetPartitions() {
    this._partitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionsInput() {
    return this._partitions;
  }

  // shift - computed: false, optional: true, required: false
  private _shift?: number; 
  public get shift() {
    return this.getNumberAttribute('shift');
  }
  public set shift(value: number) {
    this._shift = value;
  }
  public resetShift() {
    this._shift = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shiftInput() {
    return this._shift;
  }

  // shift_timestamp - computed: false, optional: true, required: false
  private _shiftTimestamp?: number; 
  public get shiftTimestamp() {
    return this.getNumberAttribute('shift_timestamp');
  }
  public set shiftTimestamp(value: number) {
    this._shiftTimestamp = value;
  }
  public resetShiftTimestamp() {
    this._shiftTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shiftTimestampInput() {
    return this._shiftTimestamp;
  }

  // strategy - computed: false, optional: false, required: true
  private _strategy?: number; 
  public get strategy() {
    return this.getNumberAttribute('strategy');
  }
  public set strategy(value: number) {
    this._strategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // topics - computed: false, optional: true, required: false
  private _topics?: string[]; 
  public get topics() {
    return cdktf.Fn.tolist(this.getListAttribute('topics'));
  }
  public set topics(value: string[]) {
    this._topics = value;
  }
  public resetTopics() {
    this._topics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicsInput() {
    return this._topics;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group: cdktf.stringToTerraform(this._group),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      offset: cdktf.numberToTerraform(this._offset),
      partitions: cdktf.listMapper(cdktf.numberToTerraform, false)(this._partitions),
      shift: cdktf.numberToTerraform(this._shift),
      shift_timestamp: cdktf.numberToTerraform(this._shiftTimestamp),
      strategy: cdktf.numberToTerraform(this._strategy),
      topics: cdktf.listMapper(cdktf.stringToTerraform, false)(this._topics),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group: {
        value: cdktf.stringToHclTerraform(this._group),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      partitions: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._partitions),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      shift: {
        value: cdktf.numberToHclTerraform(this._shift),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shift_timestamp: {
        value: cdktf.numberToHclTerraform(this._shiftTimestamp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      strategy: {
        value: cdktf.numberToHclTerraform(this._strategy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      topics: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._topics),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
