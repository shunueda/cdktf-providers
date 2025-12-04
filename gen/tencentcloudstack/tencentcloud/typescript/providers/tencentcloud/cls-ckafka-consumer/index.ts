// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cls_ckafka_consumer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClsCkafkaConsumerConfig extends cdktf.TerraformMetaArguments {
  /**
  * compression method. 0 for NONE, 2 for SNAPPY, 3 for LZ4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cls_ckafka_consumer#compression ClsCkafkaConsumer#compression}
  */
  readonly compression?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cls_ckafka_consumer#id ClsCkafkaConsumer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * whether to deliver the metadata information of the log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cls_ckafka_consumer#need_content ClsCkafkaConsumer#need_content}
  */
  readonly needContent?: boolean | cdktf.IResolvable;
  /**
  * topic id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cls_ckafka_consumer#topic_id ClsCkafkaConsumer#topic_id}
  */
  readonly topicId: string;
  /**
  * ckafka block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cls_ckafka_consumer#ckafka ClsCkafkaConsumer#ckafka}
  */
  readonly ckafka?: ClsCkafkaConsumerCkafka;
  /**
  * content block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cls_ckafka_consumer#content ClsCkafkaConsumer#content}
  */
  readonly content?: ClsCkafkaConsumerContent;
}
export interface ClsCkafkaConsumerCkafka {
  /**
  * instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cls_ckafka_consumer#instance_id ClsCkafkaConsumer#instance_id}
  */
  readonly instanceId: string;
  /**
  * instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cls_ckafka_consumer#instance_name ClsCkafkaConsumer#instance_name}
  */
  readonly instanceName: string;
  /**
  * topic id of ckafka.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cls_ckafka_consumer#topic_id ClsCkafkaConsumer#topic_id}
  */
  readonly topicId: string;
  /**
  * topic name of ckafka.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cls_ckafka_consumer#topic_name ClsCkafkaConsumer#topic_name}
  */
  readonly topicName: string;
  /**
  * vip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cls_ckafka_consumer#vip ClsCkafkaConsumer#vip}
  */
  readonly vip: string;
  /**
  * vport.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cls_ckafka_consumer#vport ClsCkafkaConsumer#vport}
  */
  readonly vport: string;
}

export function clsCkafkaConsumerCkafkaToTerraform(struct?: ClsCkafkaConsumerCkafkaOutputReference | ClsCkafkaConsumerCkafka): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    instance_name: cdktf.stringToTerraform(struct!.instanceName),
    topic_id: cdktf.stringToTerraform(struct!.topicId),
    topic_name: cdktf.stringToTerraform(struct!.topicName),
    vip: cdktf.stringToTerraform(struct!.vip),
    vport: cdktf.stringToTerraform(struct!.vport),
  }
}


export function clsCkafkaConsumerCkafkaToHclTerraform(struct?: ClsCkafkaConsumerCkafkaOutputReference | ClsCkafkaConsumerCkafka): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_name: {
      value: cdktf.stringToHclTerraform(struct!.instanceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic_id: {
      value: cdktf.stringToHclTerraform(struct!.topicId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic_name: {
      value: cdktf.stringToHclTerraform(struct!.topicName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vip: {
      value: cdktf.stringToHclTerraform(struct!.vip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vport: {
      value: cdktf.stringToHclTerraform(struct!.vport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClsCkafkaConsumerCkafkaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClsCkafkaConsumerCkafka | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._instanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceName = this._instanceName;
    }
    if (this._topicId !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicId = this._topicId;
    }
    if (this._topicName !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicName = this._topicName;
    }
    if (this._vip !== undefined) {
      hasAnyValues = true;
      internalValueResult.vip = this._vip;
    }
    if (this._vport !== undefined) {
      hasAnyValues = true;
      internalValueResult.vport = this._vport;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsCkafkaConsumerCkafka | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceId = undefined;
      this._instanceName = undefined;
      this._topicId = undefined;
      this._topicName = undefined;
      this._vip = undefined;
      this._vport = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceId = value.instanceId;
      this._instanceName = value.instanceName;
      this._topicId = value.topicId;
      this._topicName = value.topicName;
      this._vip = value.vip;
      this._vport = value.vport;
    }
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

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // topic_id - computed: false, optional: false, required: true
  private _topicId?: string; 
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }
  public set topicId(value: string) {
    this._topicId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicIdInput() {
    return this._topicId;
  }

  // topic_name - computed: false, optional: false, required: true
  private _topicName?: string; 
  public get topicName() {
    return this.getStringAttribute('topic_name');
  }
  public set topicName(value: string) {
    this._topicName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicNameInput() {
    return this._topicName;
  }

  // vip - computed: false, optional: false, required: true
  private _vip?: string; 
  public get vip() {
    return this.getStringAttribute('vip');
  }
  public set vip(value: string) {
    this._vip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vipInput() {
    return this._vip;
  }

  // vport - computed: false, optional: false, required: true
  private _vport?: string; 
  public get vport() {
    return this.getStringAttribute('vport');
  }
  public set vport(value: string) {
    this._vport = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vportInput() {
    return this._vport;
  }
}
export interface ClsCkafkaConsumerContent {
  /**
  * whether to deliver the TAG info.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cls_ckafka_consumer#enable_tag ClsCkafkaConsumer#enable_tag}
  */
  readonly enableTag: boolean | cdktf.IResolvable;
  /**
  * metadata info list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cls_ckafka_consumer#meta_fields ClsCkafkaConsumer#meta_fields}
  */
  readonly metaFields: string[];
  /**
  * whether to tiling tag json.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cls_ckafka_consumer#tag_json_not_tiled ClsCkafkaConsumer#tag_json_not_tiled}
  */
  readonly tagJsonNotTiled?: boolean | cdktf.IResolvable;
  /**
  * delivery timestamp precision,1 for second, 2 for millisecond.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cls_ckafka_consumer#timestamp_accuracy ClsCkafkaConsumer#timestamp_accuracy}
  */
  readonly timestampAccuracy?: number;
}

export function clsCkafkaConsumerContentToTerraform(struct?: ClsCkafkaConsumerContentOutputReference | ClsCkafkaConsumerContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_tag: cdktf.booleanToTerraform(struct!.enableTag),
    meta_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.metaFields),
    tag_json_not_tiled: cdktf.booleanToTerraform(struct!.tagJsonNotTiled),
    timestamp_accuracy: cdktf.numberToTerraform(struct!.timestampAccuracy),
  }
}


export function clsCkafkaConsumerContentToHclTerraform(struct?: ClsCkafkaConsumerContentOutputReference | ClsCkafkaConsumerContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_tag: {
      value: cdktf.booleanToHclTerraform(struct!.enableTag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    meta_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.metaFields),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tag_json_not_tiled: {
      value: cdktf.booleanToHclTerraform(struct!.tagJsonNotTiled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timestamp_accuracy: {
      value: cdktf.numberToHclTerraform(struct!.timestampAccuracy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClsCkafkaConsumerContentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClsCkafkaConsumerContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTag = this._enableTag;
    }
    if (this._metaFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.metaFields = this._metaFields;
    }
    if (this._tagJsonNotTiled !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagJsonNotTiled = this._tagJsonNotTiled;
    }
    if (this._timestampAccuracy !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampAccuracy = this._timestampAccuracy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsCkafkaConsumerContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableTag = undefined;
      this._metaFields = undefined;
      this._tagJsonNotTiled = undefined;
      this._timestampAccuracy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableTag = value.enableTag;
      this._metaFields = value.metaFields;
      this._tagJsonNotTiled = value.tagJsonNotTiled;
      this._timestampAccuracy = value.timestampAccuracy;
    }
  }

  // enable_tag - computed: false, optional: false, required: true
  private _enableTag?: boolean | cdktf.IResolvable; 
  public get enableTag() {
    return this.getBooleanAttribute('enable_tag');
  }
  public set enableTag(value: boolean | cdktf.IResolvable) {
    this._enableTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTagInput() {
    return this._enableTag;
  }

  // meta_fields - computed: false, optional: false, required: true
  private _metaFields?: string[]; 
  public get metaFields() {
    return cdktf.Fn.tolist(this.getListAttribute('meta_fields'));
  }
  public set metaFields(value: string[]) {
    this._metaFields = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metaFieldsInput() {
    return this._metaFields;
  }

  // tag_json_not_tiled - computed: false, optional: true, required: false
  private _tagJsonNotTiled?: boolean | cdktf.IResolvable; 
  public get tagJsonNotTiled() {
    return this.getBooleanAttribute('tag_json_not_tiled');
  }
  public set tagJsonNotTiled(value: boolean | cdktf.IResolvable) {
    this._tagJsonNotTiled = value;
  }
  public resetTagJsonNotTiled() {
    this._tagJsonNotTiled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagJsonNotTiledInput() {
    return this._tagJsonNotTiled;
  }

  // timestamp_accuracy - computed: false, optional: true, required: false
  private _timestampAccuracy?: number; 
  public get timestampAccuracy() {
    return this.getNumberAttribute('timestamp_accuracy');
  }
  public set timestampAccuracy(value: number) {
    this._timestampAccuracy = value;
  }
  public resetTimestampAccuracy() {
    this._timestampAccuracy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampAccuracyInput() {
    return this._timestampAccuracy;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cls_ckafka_consumer tencentcloud_cls_ckafka_consumer}
*/
export class ClsCkafkaConsumer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cls_ckafka_consumer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClsCkafkaConsumer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClsCkafkaConsumer to import
  * @param importFromId The id of the existing ClsCkafkaConsumer that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cls_ckafka_consumer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClsCkafkaConsumer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cls_ckafka_consumer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cls_ckafka_consumer tencentcloud_cls_ckafka_consumer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClsCkafkaConsumerConfig
  */
  public constructor(scope: Construct, id: string, config: ClsCkafkaConsumerConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cls_ckafka_consumer',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.41',
        providerVersionConstraint: '1.82.41'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compression = config.compression;
    this._id = config.id;
    this._needContent = config.needContent;
    this._topicId = config.topicId;
    this._ckafka.internalValue = config.ckafka;
    this._content.internalValue = config.content;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compression - computed: false, optional: true, required: false
  private _compression?: number; 
  public get compression() {
    return this.getNumberAttribute('compression');
  }
  public set compression(value: number) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
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

  // need_content - computed: false, optional: true, required: false
  private _needContent?: boolean | cdktf.IResolvable; 
  public get needContent() {
    return this.getBooleanAttribute('need_content');
  }
  public set needContent(value: boolean | cdktf.IResolvable) {
    this._needContent = value;
  }
  public resetNeedContent() {
    this._needContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get needContentInput() {
    return this._needContent;
  }

  // topic_id - computed: false, optional: false, required: true
  private _topicId?: string; 
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }
  public set topicId(value: string) {
    this._topicId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicIdInput() {
    return this._topicId;
  }

  // ckafka - computed: false, optional: true, required: false
  private _ckafka = new ClsCkafkaConsumerCkafkaOutputReference(this, "ckafka");
  public get ckafka() {
    return this._ckafka;
  }
  public putCkafka(value: ClsCkafkaConsumerCkafka) {
    this._ckafka.internalValue = value;
  }
  public resetCkafka() {
    this._ckafka.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ckafkaInput() {
    return this._ckafka.internalValue;
  }

  // content - computed: false, optional: true, required: false
  private _content = new ClsCkafkaConsumerContentOutputReference(this, "content");
  public get content() {
    return this._content;
  }
  public putContent(value: ClsCkafkaConsumerContent) {
    this._content.internalValue = value;
  }
  public resetContent() {
    this._content.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compression: cdktf.numberToTerraform(this._compression),
      id: cdktf.stringToTerraform(this._id),
      need_content: cdktf.booleanToTerraform(this._needContent),
      topic_id: cdktf.stringToTerraform(this._topicId),
      ckafka: clsCkafkaConsumerCkafkaToTerraform(this._ckafka.internalValue),
      content: clsCkafkaConsumerContentToTerraform(this._content.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compression: {
        value: cdktf.numberToHclTerraform(this._compression),
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
      need_content: {
        value: cdktf.booleanToHclTerraform(this._needContent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      topic_id: {
        value: cdktf.stringToHclTerraform(this._topicId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ckafka: {
        value: clsCkafkaConsumerCkafkaToHclTerraform(this._ckafka.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClsCkafkaConsumerCkafkaList",
      },
      content: {
        value: clsCkafkaConsumerContentToHclTerraform(this._content.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClsCkafkaConsumerContentList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
