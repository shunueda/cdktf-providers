// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/alikafka_topic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlikafkaTopicConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/alikafka_topic#compact_topic AlikafkaTopic#compact_topic}
  */
  readonly compactTopic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/alikafka_topic#id AlikafkaTopic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/alikafka_topic#instance_id AlikafkaTopic#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/alikafka_topic#local_topic AlikafkaTopic#local_topic}
  */
  readonly localTopic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/alikafka_topic#partition_num AlikafkaTopic#partition_num}
  */
  readonly partitionNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/alikafka_topic#remark AlikafkaTopic#remark}
  */
  readonly remark: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/alikafka_topic#tags AlikafkaTopic#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/alikafka_topic#topic AlikafkaTopic#topic}
  */
  readonly topic: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/alikafka_topic#timeouts AlikafkaTopic#timeouts}
  */
  readonly timeouts?: AlikafkaTopicTimeouts;
}
export interface AlikafkaTopicTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/alikafka_topic#create AlikafkaTopic#create}
  */
  readonly create?: string;
}

export function alikafkaTopicTimeoutsToTerraform(struct?: AlikafkaTopicTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function alikafkaTopicTimeoutsToHclTerraform(struct?: AlikafkaTopicTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlikafkaTopicTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlikafkaTopicTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlikafkaTopicTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/alikafka_topic alibabacloudstack_alikafka_topic}
*/
export class AlikafkaTopic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_alikafka_topic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlikafkaTopic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlikafkaTopic to import
  * @param importFromId The id of the existing AlikafkaTopic that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/alikafka_topic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlikafkaTopic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_alikafka_topic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/alikafka_topic alibabacloudstack_alikafka_topic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlikafkaTopicConfig
  */
  public constructor(scope: Construct, id: string, config: AlikafkaTopicConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_alikafka_topic',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compactTopic = config.compactTopic;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._localTopic = config.localTopic;
    this._partitionNum = config.partitionNum;
    this._remark = config.remark;
    this._tags = config.tags;
    this._topic = config.topic;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compact_topic - computed: false, optional: true, required: false
  private _compactTopic?: boolean | cdktf.IResolvable; 
  public get compactTopic() {
    return this.getBooleanAttribute('compact_topic');
  }
  public set compactTopic(value: boolean | cdktf.IResolvable) {
    this._compactTopic = value;
  }
  public resetCompactTopic() {
    this._compactTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compactTopicInput() {
    return this._compactTopic;
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

  // local_topic - computed: false, optional: true, required: false
  private _localTopic?: boolean | cdktf.IResolvable; 
  public get localTopic() {
    return this.getBooleanAttribute('local_topic');
  }
  public set localTopic(value: boolean | cdktf.IResolvable) {
    this._localTopic = value;
  }
  public resetLocalTopic() {
    this._localTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localTopicInput() {
    return this._localTopic;
  }

  // partition_num - computed: false, optional: true, required: false
  private _partitionNum?: number; 
  public get partitionNum() {
    return this.getNumberAttribute('partition_num');
  }
  public set partitionNum(value: number) {
    this._partitionNum = value;
  }
  public resetPartitionNum() {
    this._partitionNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionNumInput() {
    return this._partitionNum;
  }

  // remark - computed: false, optional: false, required: true
  private _remark?: string; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string) {
    this._remark = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // topic - computed: false, optional: false, required: true
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AlikafkaTopicTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AlikafkaTopicTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compact_topic: cdktf.booleanToTerraform(this._compactTopic),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      local_topic: cdktf.booleanToTerraform(this._localTopic),
      partition_num: cdktf.numberToTerraform(this._partitionNum),
      remark: cdktf.stringToTerraform(this._remark),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      topic: cdktf.stringToTerraform(this._topic),
      timeouts: alikafkaTopicTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compact_topic: {
        value: cdktf.booleanToHclTerraform(this._compactTopic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      local_topic: {
        value: cdktf.booleanToHclTerraform(this._localTopic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      partition_num: {
        value: cdktf.numberToHclTerraform(this._partitionNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remark: {
        value: cdktf.stringToHclTerraform(this._remark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      topic: {
        value: cdktf.stringToHclTerraform(this._topic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: alikafkaTopicTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AlikafkaTopicTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
