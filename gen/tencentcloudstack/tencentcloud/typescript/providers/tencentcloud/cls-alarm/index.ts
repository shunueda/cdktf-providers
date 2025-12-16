// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cls_alarm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClsAlarmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Alarm level. 0: Warning; 1: Info; 2: Critical. Default is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cls_alarm#alarm_level ClsAlarm#alarm_level}
  */
  readonly alarmLevel?: number;
  /**
  * list of alarm notice id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cls_alarm#alarm_notice_ids ClsAlarm#alarm_notice_ids}
  */
  readonly alarmNoticeIds: string[];
  /**
  * alarm repeat cycle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cls_alarm#alarm_period ClsAlarm#alarm_period}
  */
  readonly alarmPeriod: number;
  /**
  * Trigger condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cls_alarm#condition ClsAlarm#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cls_alarm#id ClsAlarm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * user define alarm notice.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cls_alarm#message_template ClsAlarm#message_template}
  */
  readonly messageTemplate?: string;
  /**
  * log alarm name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cls_alarm#name ClsAlarm#name}
  */
  readonly name: string;
  /**
  * whether to enable the alarm policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cls_alarm#status ClsAlarm#status}
  */
  readonly status?: boolean | cdktf.IResolvable;
  /**
  * Tag description list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cls_alarm#tags ClsAlarm#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * continuous cycle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cls_alarm#trigger_count ClsAlarm#trigger_count}
  */
  readonly triggerCount: number;
  /**
  * alarm_targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cls_alarm#alarm_targets ClsAlarm#alarm_targets}
  */
  readonly alarmTargets: ClsAlarmAlarmTargets[] | cdktf.IResolvable;
  /**
  * analysis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cls_alarm#analysis ClsAlarm#analysis}
  */
  readonly analysis?: ClsAlarmAnalysis[] | cdktf.IResolvable;
  /**
  * call_back block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cls_alarm#call_back ClsAlarm#call_back}
  */
  readonly callBack?: ClsAlarmCallBack;
  /**
  * monitor_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cls_alarm#monitor_time ClsAlarm#monitor_time}
  */
  readonly monitorTime: ClsAlarmMonitorTime;
  /**
  * multi_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cls_alarm#multi_conditions ClsAlarm#multi_conditions}
  */
  readonly multiConditions?: ClsAlarmMultiConditions[] | cdktf.IResolvable;
}
export interface ClsAlarmAlarmTargets {
  /**
  * search end time of offset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cls_alarm#end_time_offset ClsAlarm#end_time_offset}
  */
  readonly endTimeOffset: number;
  /**
  * logset id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cls_alarm#logset_id ClsAlarm#logset_id}
  */
  readonly logsetId: string;
  /**
  * the number of alarm object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cls_alarm#number ClsAlarm#number}
  */
  readonly number: number;
  /**
  * query rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cls_alarm#query ClsAlarm#query}
  */
  readonly query: string;
  /**
  * search start time of offset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cls_alarm#start_time_offset ClsAlarm#start_time_offset}
  */
  readonly startTimeOffset: number;
  /**
  * Retrieve grammar rules, 0: Lucene syntax, 1: CQL syntax, Default value is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cls_alarm#syntax_rule ClsAlarm#syntax_rule}
  */
  readonly syntaxRule?: number;
  /**
  * topic id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cls_alarm#topic_id ClsAlarm#topic_id}
  */
  readonly topicId: string;
}

export function clsAlarmAlarmTargetsToTerraform(struct?: ClsAlarmAlarmTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time_offset: cdktf.numberToTerraform(struct!.endTimeOffset),
    logset_id: cdktf.stringToTerraform(struct!.logsetId),
    number: cdktf.numberToTerraform(struct!.number),
    query: cdktf.stringToTerraform(struct!.query),
    start_time_offset: cdktf.numberToTerraform(struct!.startTimeOffset),
    syntax_rule: cdktf.numberToTerraform(struct!.syntaxRule),
    topic_id: cdktf.stringToTerraform(struct!.topicId),
  }
}


export function clsAlarmAlarmTargetsToHclTerraform(struct?: ClsAlarmAlarmTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_time_offset: {
      value: cdktf.numberToHclTerraform(struct!.endTimeOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    logset_id: {
      value: cdktf.stringToHclTerraform(struct!.logsetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time_offset: {
      value: cdktf.numberToHclTerraform(struct!.startTimeOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syntax_rule: {
      value: cdktf.numberToHclTerraform(struct!.syntaxRule),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    topic_id: {
      value: cdktf.stringToHclTerraform(struct!.topicId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClsAlarmAlarmTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClsAlarmAlarmTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTimeOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTimeOffset = this._endTimeOffset;
    }
    if (this._logsetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logsetId = this._logsetId;
    }
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._startTimeOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTimeOffset = this._startTimeOffset;
    }
    if (this._syntaxRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.syntaxRule = this._syntaxRule;
    }
    if (this._topicId !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicId = this._topicId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsAlarmAlarmTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endTimeOffset = undefined;
      this._logsetId = undefined;
      this._number = undefined;
      this._query = undefined;
      this._startTimeOffset = undefined;
      this._syntaxRule = undefined;
      this._topicId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endTimeOffset = value.endTimeOffset;
      this._logsetId = value.logsetId;
      this._number = value.number;
      this._query = value.query;
      this._startTimeOffset = value.startTimeOffset;
      this._syntaxRule = value.syntaxRule;
      this._topicId = value.topicId;
    }
  }

  // end_time_offset - computed: false, optional: false, required: true
  private _endTimeOffset?: number; 
  public get endTimeOffset() {
    return this.getNumberAttribute('end_time_offset');
  }
  public set endTimeOffset(value: number) {
    this._endTimeOffset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeOffsetInput() {
    return this._endTimeOffset;
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

  // number - computed: false, optional: false, required: true
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // start_time_offset - computed: false, optional: false, required: true
  private _startTimeOffset?: number; 
  public get startTimeOffset() {
    return this.getNumberAttribute('start_time_offset');
  }
  public set startTimeOffset(value: number) {
    this._startTimeOffset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeOffsetInput() {
    return this._startTimeOffset;
  }

  // syntax_rule - computed: true, optional: true, required: false
  private _syntaxRule?: number; 
  public get syntaxRule() {
    return this.getNumberAttribute('syntax_rule');
  }
  public set syntaxRule(value: number) {
    this._syntaxRule = value;
  }
  public resetSyntaxRule() {
    this._syntaxRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syntaxRuleInput() {
    return this._syntaxRule;
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
}

export class ClsAlarmAlarmTargetsList extends cdktf.ComplexList {
  public internalValue? : ClsAlarmAlarmTargets[] | cdktf.IResolvable

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
  public get(index: number): ClsAlarmAlarmTargetsOutputReference {
    return new ClsAlarmAlarmTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClsAlarmAnalysisConfigInfo {
  /**
  * key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cls_alarm#key ClsAlarm#key}
  */
  readonly key: string;
  /**
  * value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cls_alarm#value ClsAlarm#value}
  */
  readonly value: string;
}

export function clsAlarmAnalysisConfigInfoToTerraform(struct?: ClsAlarmAnalysisConfigInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clsAlarmAnalysisConfigInfoToHclTerraform(struct?: ClsAlarmAnalysisConfigInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClsAlarmAnalysisConfigInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClsAlarmAnalysisConfigInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsAlarmAnalysisConfigInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClsAlarmAnalysisConfigInfoList extends cdktf.ComplexList {
  public internalValue? : ClsAlarmAnalysisConfigInfo[] | cdktf.IResolvable

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
  public get(index: number): ClsAlarmAnalysisConfigInfoOutputReference {
    return new ClsAlarmAnalysisConfigInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClsAlarmAnalysis {
  /**
  * analysis content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cls_alarm#content ClsAlarm#content}
  */
  readonly content: string;
  /**
  * analysis name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cls_alarm#name ClsAlarm#name}
  */
  readonly name: string;
  /**
  * analysis type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cls_alarm#type ClsAlarm#type}
  */
  readonly type: string;
  /**
  * config_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cls_alarm#config_info ClsAlarm#config_info}
  */
  readonly configInfo?: ClsAlarmAnalysisConfigInfo[] | cdktf.IResolvable;
}

export function clsAlarmAnalysisToTerraform(struct?: ClsAlarmAnalysis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    config_info: cdktf.listMapper(clsAlarmAnalysisConfigInfoToTerraform, true)(struct!.configInfo),
  }
}


export function clsAlarmAnalysisToHclTerraform(struct?: ClsAlarmAnalysis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_info: {
      value: cdktf.listMapperHcl(clsAlarmAnalysisConfigInfoToHclTerraform, true)(struct!.configInfo),
      isBlock: true,
      type: "list",
      storageClassType: "ClsAlarmAnalysisConfigInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClsAlarmAnalysisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClsAlarmAnalysis | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._configInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configInfo = this._configInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsAlarmAnalysis | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._name = undefined;
      this._type = undefined;
      this._configInfo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._name = value.name;
      this._type = value.type;
      this._configInfo.internalValue = value.configInfo;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // config_info - computed: false, optional: true, required: false
  private _configInfo = new ClsAlarmAnalysisConfigInfoList(this, "config_info", false);
  public get configInfo() {
    return this._configInfo;
  }
  public putConfigInfo(value: ClsAlarmAnalysisConfigInfo[] | cdktf.IResolvable) {
    this._configInfo.internalValue = value;
  }
  public resetConfigInfo() {
    this._configInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInfoInput() {
    return this._configInfo.internalValue;
  }
}

export class ClsAlarmAnalysisList extends cdktf.ComplexList {
  public internalValue? : ClsAlarmAnalysis[] | cdktf.IResolvable

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
  public get(index: number): ClsAlarmAnalysisOutputReference {
    return new ClsAlarmAnalysisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClsAlarmCallBack {
  /**
  * callback body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cls_alarm#body ClsAlarm#body}
  */
  readonly body: string;
  /**
  * callback headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cls_alarm#headers ClsAlarm#headers}
  */
  readonly headers?: string[];
}

export function clsAlarmCallBackToTerraform(struct?: ClsAlarmCallBackOutputReference | ClsAlarmCallBack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headers),
  }
}


export function clsAlarmCallBackToHclTerraform(struct?: ClsAlarmCallBackOutputReference | ClsAlarmCallBack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClsAlarmCallBackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClsAlarmCallBack | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsAlarmCallBack | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._body = undefined;
      this._headers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._body = value.body;
      this._headers = value.headers;
    }
  }

  // body - computed: false, optional: false, required: true
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: string[]; 
  public get headers() {
    return cdktf.Fn.tolist(this.getListAttribute('headers'));
  }
  public set headers(value: string[]) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }
}
export interface ClsAlarmMonitorTime {
  /**
  * time period or point in time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cls_alarm#time ClsAlarm#time}
  */
  readonly time: number;
  /**
  * Period for periodic execution, Fixed for regular execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cls_alarm#type ClsAlarm#type}
  */
  readonly type: string;
}

export function clsAlarmMonitorTimeToTerraform(struct?: ClsAlarmMonitorTimeOutputReference | ClsAlarmMonitorTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time: cdktf.numberToTerraform(struct!.time),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function clsAlarmMonitorTimeToHclTerraform(struct?: ClsAlarmMonitorTimeOutputReference | ClsAlarmMonitorTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    time: {
      value: cdktf.numberToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClsAlarmMonitorTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClsAlarmMonitorTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsAlarmMonitorTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._time = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._time = value.time;
      this._type = value.type;
    }
  }

  // time - computed: false, optional: false, required: true
  private _time?: number; 
  public get time() {
    return this.getNumberAttribute('time');
  }
  public set time(value: number) {
    this._time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ClsAlarmMultiConditions {
  /**
  * Alarm level. 0: Warning; 1: Info; 2: Critical. Default is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cls_alarm#alarm_level ClsAlarm#alarm_level}
  */
  readonly alarmLevel?: number;
  /**
  * Trigger condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cls_alarm#condition ClsAlarm#condition}
  */
  readonly condition?: string;
}

export function clsAlarmMultiConditionsToTerraform(struct?: ClsAlarmMultiConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alarm_level: cdktf.numberToTerraform(struct!.alarmLevel),
    condition: cdktf.stringToTerraform(struct!.condition),
  }
}


export function clsAlarmMultiConditionsToHclTerraform(struct?: ClsAlarmMultiConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alarm_level: {
      value: cdktf.numberToHclTerraform(struct!.alarmLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClsAlarmMultiConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClsAlarmMultiConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmLevel = this._alarmLevel;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsAlarmMultiConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarmLevel = undefined;
      this._condition = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarmLevel = value.alarmLevel;
      this._condition = value.condition;
    }
  }

  // alarm_level - computed: true, optional: true, required: false
  private _alarmLevel?: number; 
  public get alarmLevel() {
    return this.getNumberAttribute('alarm_level');
  }
  public set alarmLevel(value: number) {
    this._alarmLevel = value;
  }
  public resetAlarmLevel() {
    this._alarmLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmLevelInput() {
    return this._alarmLevel;
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }
}

export class ClsAlarmMultiConditionsList extends cdktf.ComplexList {
  public internalValue? : ClsAlarmMultiConditions[] | cdktf.IResolvable

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
  public get(index: number): ClsAlarmMultiConditionsOutputReference {
    return new ClsAlarmMultiConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cls_alarm tencentcloud_cls_alarm}
*/
export class ClsAlarm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cls_alarm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClsAlarm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClsAlarm to import
  * @param importFromId The id of the existing ClsAlarm that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cls_alarm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClsAlarm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cls_alarm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cls_alarm tencentcloud_cls_alarm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClsAlarmConfig
  */
  public constructor(scope: Construct, id: string, config: ClsAlarmConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cls_alarm',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.45',
        providerVersionConstraint: '1.82.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alarmLevel = config.alarmLevel;
    this._alarmNoticeIds = config.alarmNoticeIds;
    this._alarmPeriod = config.alarmPeriod;
    this._condition = config.condition;
    this._id = config.id;
    this._messageTemplate = config.messageTemplate;
    this._name = config.name;
    this._status = config.status;
    this._tags = config.tags;
    this._triggerCount = config.triggerCount;
    this._alarmTargets.internalValue = config.alarmTargets;
    this._analysis.internalValue = config.analysis;
    this._callBack.internalValue = config.callBack;
    this._monitorTime.internalValue = config.monitorTime;
    this._multiConditions.internalValue = config.multiConditions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alarm_level - computed: true, optional: true, required: false
  private _alarmLevel?: number; 
  public get alarmLevel() {
    return this.getNumberAttribute('alarm_level');
  }
  public set alarmLevel(value: number) {
    this._alarmLevel = value;
  }
  public resetAlarmLevel() {
    this._alarmLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmLevelInput() {
    return this._alarmLevel;
  }

  // alarm_notice_ids - computed: false, optional: false, required: true
  private _alarmNoticeIds?: string[]; 
  public get alarmNoticeIds() {
    return cdktf.Fn.tolist(this.getListAttribute('alarm_notice_ids'));
  }
  public set alarmNoticeIds(value: string[]) {
    this._alarmNoticeIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmNoticeIdsInput() {
    return this._alarmNoticeIds;
  }

  // alarm_period - computed: false, optional: false, required: true
  private _alarmPeriod?: number; 
  public get alarmPeriod() {
    return this.getNumberAttribute('alarm_period');
  }
  public set alarmPeriod(value: number) {
    this._alarmPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmPeriodInput() {
    return this._alarmPeriod;
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
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

  // message_template - computed: false, optional: true, required: false
  private _messageTemplate?: string; 
  public get messageTemplate() {
    return this.getStringAttribute('message_template');
  }
  public set messageTemplate(value: string) {
    this._messageTemplate = value;
  }
  public resetMessageTemplate() {
    this._messageTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTemplateInput() {
    return this._messageTemplate;
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

  // status - computed: true, optional: true, required: false
  private _status?: boolean | cdktf.IResolvable; 
  public get status() {
    return this.getBooleanAttribute('status');
  }
  public set status(value: boolean | cdktf.IResolvable) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

  // trigger_count - computed: false, optional: false, required: true
  private _triggerCount?: number; 
  public get triggerCount() {
    return this.getNumberAttribute('trigger_count');
  }
  public set triggerCount(value: number) {
    this._triggerCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerCountInput() {
    return this._triggerCount;
  }

  // alarm_targets - computed: false, optional: false, required: true
  private _alarmTargets = new ClsAlarmAlarmTargetsList(this, "alarm_targets", false);
  public get alarmTargets() {
    return this._alarmTargets;
  }
  public putAlarmTargets(value: ClsAlarmAlarmTargets[] | cdktf.IResolvable) {
    this._alarmTargets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmTargetsInput() {
    return this._alarmTargets.internalValue;
  }

  // analysis - computed: false, optional: true, required: false
  private _analysis = new ClsAlarmAnalysisList(this, "analysis", false);
  public get analysis() {
    return this._analysis;
  }
  public putAnalysis(value: ClsAlarmAnalysis[] | cdktf.IResolvable) {
    this._analysis.internalValue = value;
  }
  public resetAnalysis() {
    this._analysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisInput() {
    return this._analysis.internalValue;
  }

  // call_back - computed: false, optional: true, required: false
  private _callBack = new ClsAlarmCallBackOutputReference(this, "call_back");
  public get callBack() {
    return this._callBack;
  }
  public putCallBack(value: ClsAlarmCallBack) {
    this._callBack.internalValue = value;
  }
  public resetCallBack() {
    this._callBack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callBackInput() {
    return this._callBack.internalValue;
  }

  // monitor_time - computed: false, optional: false, required: true
  private _monitorTime = new ClsAlarmMonitorTimeOutputReference(this, "monitor_time");
  public get monitorTime() {
    return this._monitorTime;
  }
  public putMonitorTime(value: ClsAlarmMonitorTime) {
    this._monitorTime.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorTimeInput() {
    return this._monitorTime.internalValue;
  }

  // multi_conditions - computed: false, optional: true, required: false
  private _multiConditions = new ClsAlarmMultiConditionsList(this, "multi_conditions", false);
  public get multiConditions() {
    return this._multiConditions;
  }
  public putMultiConditions(value: ClsAlarmMultiConditions[] | cdktf.IResolvable) {
    this._multiConditions.internalValue = value;
  }
  public resetMultiConditions() {
    this._multiConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiConditionsInput() {
    return this._multiConditions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alarm_level: cdktf.numberToTerraform(this._alarmLevel),
      alarm_notice_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alarmNoticeIds),
      alarm_period: cdktf.numberToTerraform(this._alarmPeriod),
      condition: cdktf.stringToTerraform(this._condition),
      id: cdktf.stringToTerraform(this._id),
      message_template: cdktf.stringToTerraform(this._messageTemplate),
      name: cdktf.stringToTerraform(this._name),
      status: cdktf.booleanToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      trigger_count: cdktf.numberToTerraform(this._triggerCount),
      alarm_targets: cdktf.listMapper(clsAlarmAlarmTargetsToTerraform, true)(this._alarmTargets.internalValue),
      analysis: cdktf.listMapper(clsAlarmAnalysisToTerraform, true)(this._analysis.internalValue),
      call_back: clsAlarmCallBackToTerraform(this._callBack.internalValue),
      monitor_time: clsAlarmMonitorTimeToTerraform(this._monitorTime.internalValue),
      multi_conditions: cdktf.listMapper(clsAlarmMultiConditionsToTerraform, true)(this._multiConditions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alarm_level: {
        value: cdktf.numberToHclTerraform(this._alarmLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      alarm_notice_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alarmNoticeIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      alarm_period: {
        value: cdktf.numberToHclTerraform(this._alarmPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      condition: {
        value: cdktf.stringToHclTerraform(this._condition),
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
      message_template: {
        value: cdktf.stringToHclTerraform(this._messageTemplate),
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
      status: {
        value: cdktf.booleanToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      trigger_count: {
        value: cdktf.numberToHclTerraform(this._triggerCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      alarm_targets: {
        value: cdktf.listMapperHcl(clsAlarmAlarmTargetsToHclTerraform, true)(this._alarmTargets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClsAlarmAlarmTargetsList",
      },
      analysis: {
        value: cdktf.listMapperHcl(clsAlarmAnalysisToHclTerraform, true)(this._analysis.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClsAlarmAnalysisList",
      },
      call_back: {
        value: clsAlarmCallBackToHclTerraform(this._callBack.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClsAlarmCallBackList",
      },
      monitor_time: {
        value: clsAlarmMonitorTimeToHclTerraform(this._monitorTime.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClsAlarmMonitorTimeList",
      },
      multi_conditions: {
        value: cdktf.listMapperHcl(clsAlarmMultiConditionsToHclTerraform, true)(this._multiConditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClsAlarmMultiConditionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
