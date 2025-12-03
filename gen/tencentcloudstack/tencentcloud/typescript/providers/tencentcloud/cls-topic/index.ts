// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_topic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClsTopicConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to enable automatic split. Default value: true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_topic#auto_split ClsTopic#auto_split}
  */
  readonly autoSplit?: boolean | cdktf.IResolvable;
  /**
  * Log Topic Description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_topic#describes ClsTopic#describes}
  */
  readonly describes?: string;
  /**
  * 0: Turn off log sinking. Non 0: The number of days of standard storage after enabling log settling. HotPeriod needs to be greater than or equal to 7 and less than Period. Only effective when StorageType is hot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_topic#hot_period ClsTopic#hot_period}
  */
  readonly hotPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_topic#id ClsTopic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * No authentication switch. False: closed; True: Enable. The default is false. After activation, anonymous access to the log topic will be supported for specified operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_topic#is_web_tracking ClsTopic#is_web_tracking}
  */
  readonly isWebTracking?: boolean | cdktf.IResolvable;
  /**
  * Logset ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_topic#logset_id ClsTopic#logset_id}
  */
  readonly logsetId: string;
  /**
  * Maximum number of partitions to split into for this topic if automatic split is enabled. Default value: 50.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_topic#max_split_partitions ClsTopic#max_split_partitions}
  */
  readonly maxSplitPartitions?: number;
  /**
  * Number of log topic partitions. Default value: 1. Maximum value: 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_topic#partition_count ClsTopic#partition_count}
  */
  readonly partitionCount?: number;
  /**
  * lifetime. Unit: days. Standard storage value range: 1 to 3600. Infrequent storage value range: 7 to 3600 days. A value of 3640 indicates permanent retention.If this value is not input, it defaults to the Period value of the log set corresponding to the accessed log topic (defaults to 30 days in case of access failure).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_topic#period ClsTopic#period}
  */
  readonly period?: number;
  /**
  * Log topic storage class. Valid values: hot: real-time storage; cold: offline storage. Default value: hot. If cold is passed in, please contact the customer service to add the log topic to the allowlist first.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_topic#storage_type ClsTopic#storage_type}
  */
  readonly storageType?: string;
  /**
  * Tag description list. Up to 10 tag key-value pairs are supported and must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_topic#tags ClsTopic#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Log topic name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_topic#topic_name ClsTopic#topic_name}
  */
  readonly topicName: string;
  /**
  * extends block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_topic#extends ClsTopic#extends}
  */
  readonly extends?: ClsTopicExtends;
}
export interface ClsTopicExtendsAnonymousAccessConditions {
  /**
  * Condition attribute, currently only VpcID is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_topic#attributes ClsTopic#attributes}
  */
  readonly attributes?: string;
  /**
  * The value of the corresponding conditional attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_topic#condition_value ClsTopic#condition_value}
  */
  readonly conditionValue?: string;
  /**
  * Conditional rule, 1: equal, 2: not equal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_topic#rule ClsTopic#rule}
  */
  readonly rule?: number;
}

export function clsTopicExtendsAnonymousAccessConditionsToTerraform(struct?: ClsTopicExtendsAnonymousAccessConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.stringToTerraform(struct!.attributes),
    condition_value: cdktf.stringToTerraform(struct!.conditionValue),
    rule: cdktf.numberToTerraform(struct!.rule),
  }
}


export function clsTopicExtendsAnonymousAccessConditionsToHclTerraform(struct?: ClsTopicExtendsAnonymousAccessConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: cdktf.stringToHclTerraform(struct!.attributes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition_value: {
      value: cdktf.stringToHclTerraform(struct!.conditionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule: {
      value: cdktf.numberToHclTerraform(struct!.rule),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClsTopicExtendsAnonymousAccessConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ClsTopicExtendsAnonymousAccessConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._conditionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionValue = this._conditionValue;
    }
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsTopicExtendsAnonymousAccessConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes = undefined;
      this._conditionValue = undefined;
      this._rule = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes = value.attributes;
      this._conditionValue = value.conditionValue;
      this._rule = value.rule;
    }
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: string; 
  public get attributes() {
    return this.getStringAttribute('attributes');
  }
  public set attributes(value: string) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // condition_value - computed: false, optional: true, required: false
  private _conditionValue?: string; 
  public get conditionValue() {
    return this.getStringAttribute('condition_value');
  }
  public set conditionValue(value: string) {
    this._conditionValue = value;
  }
  public resetConditionValue() {
    this._conditionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionValueInput() {
    return this._conditionValue;
  }

  // rule - computed: false, optional: true, required: false
  private _rule?: number; 
  public get rule() {
    return this.getNumberAttribute('rule');
  }
  public set rule(value: number) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }
}

export class ClsTopicExtendsAnonymousAccessConditionsList extends cdktf.ComplexList {
  public internalValue? : ClsTopicExtendsAnonymousAccessConditions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ClsTopicExtendsAnonymousAccessConditionsOutputReference {
    return new ClsTopicExtendsAnonymousAccessConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClsTopicExtendsAnonymousAccess {
  /**
  * Operation list, supporting trackLog (JS/HTTP upload log) and realtimeProducer (kafka protocol upload log).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_topic#operations ClsTopic#operations}
  */
  readonly operations?: string[];
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_topic#conditions ClsTopic#conditions}
  */
  readonly conditions?: ClsTopicExtendsAnonymousAccessConditions[] | cdktf.IResolvable;
}

export function clsTopicExtendsAnonymousAccessToTerraform(struct?: ClsTopicExtendsAnonymousAccessOutputReference | ClsTopicExtendsAnonymousAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    conditions: cdktf.listMapper(clsTopicExtendsAnonymousAccessConditionsToTerraform, true)(struct!.conditions),
  }
}


export function clsTopicExtendsAnonymousAccessToHclTerraform(struct?: ClsTopicExtendsAnonymousAccessOutputReference | ClsTopicExtendsAnonymousAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    conditions: {
      value: cdktf.listMapperHcl(clsTopicExtendsAnonymousAccessConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "ClsTopicExtendsAnonymousAccessConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClsTopicExtendsAnonymousAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClsTopicExtendsAnonymousAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsTopicExtendsAnonymousAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operations = undefined;
      this._conditions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operations = value.operations;
      this._conditions.internalValue = value.conditions;
    }
  }

  // operations - computed: false, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return this.getListAttribute('operations');
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new ClsTopicExtendsAnonymousAccessConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: ClsTopicExtendsAnonymousAccessConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}
export interface ClsTopicExtends {
  /**
  * anonymous_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_topic#anonymous_access ClsTopic#anonymous_access}
  */
  readonly anonymousAccess?: ClsTopicExtendsAnonymousAccess;
}

export function clsTopicExtendsToTerraform(struct?: ClsTopicExtendsOutputReference | ClsTopicExtends): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anonymous_access: clsTopicExtendsAnonymousAccessToTerraform(struct!.anonymousAccess),
  }
}


export function clsTopicExtendsToHclTerraform(struct?: ClsTopicExtendsOutputReference | ClsTopicExtends): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anonymous_access: {
      value: clsTopicExtendsAnonymousAccessToHclTerraform(struct!.anonymousAccess),
      isBlock: true,
      type: "list",
      storageClassType: "ClsTopicExtendsAnonymousAccessList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClsTopicExtendsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClsTopicExtends | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anonymousAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anonymousAccess = this._anonymousAccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsTopicExtends | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._anonymousAccess.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._anonymousAccess.internalValue = value.anonymousAccess;
    }
  }

  // anonymous_access - computed: false, optional: true, required: false
  private _anonymousAccess = new ClsTopicExtendsAnonymousAccessOutputReference(this, "anonymous_access");
  public get anonymousAccess() {
    return this._anonymousAccess;
  }
  public putAnonymousAccess(value: ClsTopicExtendsAnonymousAccess) {
    this._anonymousAccess.internalValue = value;
  }
  public resetAnonymousAccess() {
    this._anonymousAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonymousAccessInput() {
    return this._anonymousAccess.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_topic tencentcloud_cls_topic}
*/
export class ClsTopic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cls_topic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClsTopic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClsTopic to import
  * @param importFromId The id of the existing ClsTopic that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_topic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClsTopic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cls_topic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_topic tencentcloud_cls_topic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClsTopicConfig
  */
  public constructor(scope: Construct, id: string, config: ClsTopicConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cls_topic',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.40',
        providerVersionConstraint: '1.82.40'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoSplit = config.autoSplit;
    this._describes = config.describes;
    this._hotPeriod = config.hotPeriod;
    this._id = config.id;
    this._isWebTracking = config.isWebTracking;
    this._logsetId = config.logsetId;
    this._maxSplitPartitions = config.maxSplitPartitions;
    this._partitionCount = config.partitionCount;
    this._period = config.period;
    this._storageType = config.storageType;
    this._tags = config.tags;
    this._topicName = config.topicName;
    this._extends.internalValue = config.extends;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_split - computed: true, optional: true, required: false
  private _autoSplit?: boolean | cdktf.IResolvable; 
  public get autoSplit() {
    return this.getBooleanAttribute('auto_split');
  }
  public set autoSplit(value: boolean | cdktf.IResolvable) {
    this._autoSplit = value;
  }
  public resetAutoSplit() {
    this._autoSplit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSplitInput() {
    return this._autoSplit;
  }

  // describes - computed: false, optional: true, required: false
  private _describes?: string; 
  public get describes() {
    return this.getStringAttribute('describes');
  }
  public set describes(value: string) {
    this._describes = value;
  }
  public resetDescribes() {
    this._describes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get describesInput() {
    return this._describes;
  }

  // hot_period - computed: true, optional: true, required: false
  private _hotPeriod?: number; 
  public get hotPeriod() {
    return this.getNumberAttribute('hot_period');
  }
  public set hotPeriod(value: number) {
    this._hotPeriod = value;
  }
  public resetHotPeriod() {
    this._hotPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hotPeriodInput() {
    return this._hotPeriod;
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

  // is_web_tracking - computed: true, optional: true, required: false
  private _isWebTracking?: boolean | cdktf.IResolvable; 
  public get isWebTracking() {
    return this.getBooleanAttribute('is_web_tracking');
  }
  public set isWebTracking(value: boolean | cdktf.IResolvable) {
    this._isWebTracking = value;
  }
  public resetIsWebTracking() {
    this._isWebTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isWebTrackingInput() {
    return this._isWebTracking;
  }

  // logset_id - computed: false, optional: false, required: true
  private _logsetId?: string; 
  public get logsetId() {
    return this.getStringAttribute('logset_id');
  }
  public set logsetId(value: string) {
    this._logsetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logsetIdInput() {
    return this._logsetId;
  }

  // max_split_partitions - computed: true, optional: true, required: false
  private _maxSplitPartitions?: number; 
  public get maxSplitPartitions() {
    return this.getNumberAttribute('max_split_partitions');
  }
  public set maxSplitPartitions(value: number) {
    this._maxSplitPartitions = value;
  }
  public resetMaxSplitPartitions() {
    this._maxSplitPartitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSplitPartitionsInput() {
    return this._maxSplitPartitions;
  }

  // partition_count - computed: true, optional: true, required: false
  private _partitionCount?: number; 
  public get partitionCount() {
    return this.getNumberAttribute('partition_count');
  }
  public set partitionCount(value: number) {
    this._partitionCount = value;
  }
  public resetPartitionCount() {
    this._partitionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionCountInput() {
    return this._partitionCount;
  }

  // period - computed: true, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // storage_type - computed: true, optional: true, required: false
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
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

  // extends - computed: false, optional: true, required: false
  private _extends = new ClsTopicExtendsOutputReference(this, "extends");
  public get extends() {
    return this._extends;
  }
  public putExtends(value: ClsTopicExtends) {
    this._extends.internalValue = value;
  }
  public resetExtends() {
    this._extends.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendsInput() {
    return this._extends.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_split: cdktf.booleanToTerraform(this._autoSplit),
      describes: cdktf.stringToTerraform(this._describes),
      hot_period: cdktf.numberToTerraform(this._hotPeriod),
      id: cdktf.stringToTerraform(this._id),
      is_web_tracking: cdktf.booleanToTerraform(this._isWebTracking),
      logset_id: cdktf.stringToTerraform(this._logsetId),
      max_split_partitions: cdktf.numberToTerraform(this._maxSplitPartitions),
      partition_count: cdktf.numberToTerraform(this._partitionCount),
      period: cdktf.numberToTerraform(this._period),
      storage_type: cdktf.stringToTerraform(this._storageType),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      topic_name: cdktf.stringToTerraform(this._topicName),
      extends: clsTopicExtendsToTerraform(this._extends.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_split: {
        value: cdktf.booleanToHclTerraform(this._autoSplit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      describes: {
        value: cdktf.stringToHclTerraform(this._describes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hot_period: {
        value: cdktf.numberToHclTerraform(this._hotPeriod),
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
      is_web_tracking: {
        value: cdktf.booleanToHclTerraform(this._isWebTracking),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      logset_id: {
        value: cdktf.stringToHclTerraform(this._logsetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_split_partitions: {
        value: cdktf.numberToHclTerraform(this._maxSplitPartitions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      partition_count: {
        value: cdktf.numberToHclTerraform(this._partitionCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storage_type: {
        value: cdktf.stringToHclTerraform(this._storageType),
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
      topic_name: {
        value: cdktf.stringToHclTerraform(this._topicName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extends: {
        value: clsTopicExtendsToHclTerraform(this._extends.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClsTopicExtendsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
