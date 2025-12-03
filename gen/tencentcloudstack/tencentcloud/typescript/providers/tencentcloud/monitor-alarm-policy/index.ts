// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorAlarmPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of trigger condition template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#conditon_template_id MonitorAlarmPolicy#conditon_template_id}
  */
  readonly conditonTemplateId?: number;
  /**
  * Whether to enable, default is `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#enable MonitorAlarmPolicy#enable}
  */
  readonly enable?: number;
  /**
  * Aggregate dimension list, specify which dimension keys to use for group by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#group_by MonitorAlarmPolicy#group_by}
  */
  readonly groupBy?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#id MonitorAlarmPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The type of monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#monitor_type MonitorAlarmPolicy#monitor_type}
  */
  readonly monitorType: string;
  /**
  * The type of alarm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#namespace MonitorAlarmPolicy#namespace}
  */
  readonly namespace: string;
  /**
  * List of notification rule IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#notice_ids MonitorAlarmPolicy#notice_ids}
  */
  readonly noticeIds?: string[];
  /**
  * The name of policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#policy_name MonitorAlarmPolicy#policy_name}
  */
  readonly policyName: string;
  /**
  * Project ID. For products with different projects, a value other than -1 must be passed in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#project_id MonitorAlarmPolicy#project_id}
  */
  readonly projectId?: number;
  /**
  * The remark of policy group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#remark MonitorAlarmPolicy#remark}
  */
  readonly remark?: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#conditions MonitorAlarmPolicy#conditions}
  */
  readonly conditions?: MonitorAlarmPolicyConditions;
  /**
  * event_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#event_conditions MonitorAlarmPolicy#event_conditions}
  */
  readonly eventConditions?: MonitorAlarmPolicyEventConditions[] | cdktf.IResolvable;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#filter MonitorAlarmPolicy#filter}
  */
  readonly filter?: MonitorAlarmPolicyFilter;
  /**
  * policy_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#policy_tag MonitorAlarmPolicy#policy_tag}
  */
  readonly policyTag?: MonitorAlarmPolicyPolicyTag[] | cdktf.IResolvable;
  /**
  * trigger_tasks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#trigger_tasks MonitorAlarmPolicy#trigger_tasks}
  */
  readonly triggerTasks?: MonitorAlarmPolicyTriggerTasks[] | cdktf.IResolvable;
}
export interface MonitorAlarmPolicyConditionsRulesFilter {
  /**
  * JSON string generated by serializing the AlarmPolicyDimension two-dimensional array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#dimensions MonitorAlarmPolicy#dimensions}
  */
  readonly dimensions?: string;
  /**
  * Filter condition type. Valid values: DIMENSION (uses dimensions for filtering).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#type MonitorAlarmPolicy#type}
  */
  readonly type?: string;
}

export function monitorAlarmPolicyConditionsRulesFilterToTerraform(struct?: MonitorAlarmPolicyConditionsRulesFilterOutputReference | MonitorAlarmPolicyConditionsRulesFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimensions: cdktf.stringToTerraform(struct!.dimensions),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function monitorAlarmPolicyConditionsRulesFilterToHclTerraform(struct?: MonitorAlarmPolicyConditionsRulesFilterOutputReference | MonitorAlarmPolicyConditionsRulesFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimensions: {
      value: cdktf.stringToHclTerraform(struct!.dimensions),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAlarmPolicyConditionsRulesFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorAlarmPolicyConditionsRulesFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAlarmPolicyConditionsRulesFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dimensions = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dimensions = value.dimensions;
      this._type = value.type;
    }
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions?: string; 
  public get dimensions() {
    return this.getStringAttribute('dimensions');
  }
  public set dimensions(value: string) {
    this._dimensions = value;
  }
  public resetDimensions() {
    this._dimensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface MonitorAlarmPolicyConditionsRules {
  /**
  * Number of periods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#continue_period MonitorAlarmPolicy#continue_period}
  */
  readonly continuePeriod?: number;
  /**
  * Metric display name, which is used in the output parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#description MonitorAlarmPolicy#description}
  */
  readonly description?: string;
  /**
  * Whether the alarm frequency increases exponentially.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#is_power_notice MonitorAlarmPolicy#is_power_notice}
  */
  readonly isPowerNotice?: number;
  /**
  * Metric name or event name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#metric_name MonitorAlarmPolicy#metric_name}
  */
  readonly metricName?: string;
  /**
  * Alarm interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#notice_frequency MonitorAlarmPolicy#notice_frequency}
  */
  readonly noticeFrequency?: number;
  /**
  * Operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#operator MonitorAlarmPolicy#operator}
  */
  readonly operator?: string;
  /**
  * Statistical period in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#period MonitorAlarmPolicy#period}
  */
  readonly period?: number;
  /**
  * Trigger condition type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#rule_type MonitorAlarmPolicy#rule_type}
  */
  readonly ruleType?: string;
  /**
  * Unit, which is used in the output parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#unit MonitorAlarmPolicy#unit}
  */
  readonly unit?: string;
  /**
  * Threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#value MonitorAlarmPolicy#value}
  */
  readonly value?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#filter MonitorAlarmPolicy#filter}
  */
  readonly filter?: MonitorAlarmPolicyConditionsRulesFilter;
}

export function monitorAlarmPolicyConditionsRulesToTerraform(struct?: MonitorAlarmPolicyConditionsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    continue_period: cdktf.numberToTerraform(struct!.continuePeriod),
    description: cdktf.stringToTerraform(struct!.description),
    is_power_notice: cdktf.numberToTerraform(struct!.isPowerNotice),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    notice_frequency: cdktf.numberToTerraform(struct!.noticeFrequency),
    operator: cdktf.stringToTerraform(struct!.operator),
    period: cdktf.numberToTerraform(struct!.period),
    rule_type: cdktf.stringToTerraform(struct!.ruleType),
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.stringToTerraform(struct!.value),
    filter: monitorAlarmPolicyConditionsRulesFilterToTerraform(struct!.filter),
  }
}


export function monitorAlarmPolicyConditionsRulesToHclTerraform(struct?: MonitorAlarmPolicyConditionsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    continue_period: {
      value: cdktf.numberToHclTerraform(struct!.continuePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_power_notice: {
      value: cdktf.numberToHclTerraform(struct!.isPowerNotice),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notice_frequency: {
      value: cdktf.numberToHclTerraform(struct!.noticeFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_type: {
      value: cdktf.stringToHclTerraform(struct!.ruleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
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
    filter: {
      value: monitorAlarmPolicyConditionsRulesFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorAlarmPolicyConditionsRulesFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAlarmPolicyConditionsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorAlarmPolicyConditionsRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._continuePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.continuePeriod = this._continuePeriod;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._isPowerNotice !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPowerNotice = this._isPowerNotice;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._noticeFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.noticeFrequency = this._noticeFrequency;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._ruleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleType = this._ruleType;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAlarmPolicyConditionsRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._continuePeriod = undefined;
      this._description = undefined;
      this._isPowerNotice = undefined;
      this._metricName = undefined;
      this._noticeFrequency = undefined;
      this._operator = undefined;
      this._period = undefined;
      this._ruleType = undefined;
      this._unit = undefined;
      this._value = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._continuePeriod = value.continuePeriod;
      this._description = value.description;
      this._isPowerNotice = value.isPowerNotice;
      this._metricName = value.metricName;
      this._noticeFrequency = value.noticeFrequency;
      this._operator = value.operator;
      this._period = value.period;
      this._ruleType = value.ruleType;
      this._unit = value.unit;
      this._value = value.value;
      this._filter.internalValue = value.filter;
    }
  }

  // continue_period - computed: true, optional: true, required: false
  private _continuePeriod?: number; 
  public get continuePeriod() {
    return this.getNumberAttribute('continue_period');
  }
  public set continuePeriod(value: number) {
    this._continuePeriod = value;
  }
  public resetContinuePeriod() {
    this._continuePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuePeriodInput() {
    return this._continuePeriod;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // is_power_notice - computed: true, optional: true, required: false
  private _isPowerNotice?: number; 
  public get isPowerNotice() {
    return this.getNumberAttribute('is_power_notice');
  }
  public set isPowerNotice(value: number) {
    this._isPowerNotice = value;
  }
  public resetIsPowerNotice() {
    this._isPowerNotice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPowerNoticeInput() {
    return this._isPowerNotice;
  }

  // metric_name - computed: false, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // notice_frequency - computed: true, optional: true, required: false
  private _noticeFrequency?: number; 
  public get noticeFrequency() {
    return this.getNumberAttribute('notice_frequency');
  }
  public set noticeFrequency(value: number) {
    this._noticeFrequency = value;
  }
  public resetNoticeFrequency() {
    this._noticeFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noticeFrequencyInput() {
    return this._noticeFrequency;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // period - computed: false, optional: true, required: false
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

  // rule_type - computed: true, optional: true, required: false
  private _ruleType?: string; 
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }
  public resetRuleType() {
    this._ruleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }

  // unit - computed: true, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new MonitorAlarmPolicyConditionsRulesFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: MonitorAlarmPolicyConditionsRulesFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}

export class MonitorAlarmPolicyConditionsRulesList extends cdktf.ComplexList {
  public internalValue? : MonitorAlarmPolicyConditionsRules[] | cdktf.IResolvable

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
  public get(index: number): MonitorAlarmPolicyConditionsRulesOutputReference {
    return new MonitorAlarmPolicyConditionsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorAlarmPolicyConditions {
  /**
  * The and or relation of indicator alarm rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#is_union_rule MonitorAlarmPolicy#is_union_rule}
  */
  readonly isUnionRule?: number;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#rules MonitorAlarmPolicy#rules}
  */
  readonly rules?: MonitorAlarmPolicyConditionsRules[] | cdktf.IResolvable;
}

export function monitorAlarmPolicyConditionsToTerraform(struct?: MonitorAlarmPolicyConditionsOutputReference | MonitorAlarmPolicyConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_union_rule: cdktf.numberToTerraform(struct!.isUnionRule),
    rules: cdktf.listMapper(monitorAlarmPolicyConditionsRulesToTerraform, true)(struct!.rules),
  }
}


export function monitorAlarmPolicyConditionsToHclTerraform(struct?: MonitorAlarmPolicyConditionsOutputReference | MonitorAlarmPolicyConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_union_rule: {
      value: cdktf.numberToHclTerraform(struct!.isUnionRule),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rules: {
      value: cdktf.listMapperHcl(monitorAlarmPolicyConditionsRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorAlarmPolicyConditionsRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAlarmPolicyConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorAlarmPolicyConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isUnionRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.isUnionRule = this._isUnionRule;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAlarmPolicyConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isUnionRule = undefined;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isUnionRule = value.isUnionRule;
      this._rules.internalValue = value.rules;
    }
  }

  // is_union_rule - computed: false, optional: true, required: false
  private _isUnionRule?: number; 
  public get isUnionRule() {
    return this.getNumberAttribute('is_union_rule');
  }
  public set isUnionRule(value: number) {
    this._isUnionRule = value;
  }
  public resetIsUnionRule() {
    this._isUnionRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUnionRuleInput() {
    return this._isUnionRule;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new MonitorAlarmPolicyConditionsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: MonitorAlarmPolicyConditionsRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface MonitorAlarmPolicyEventConditionsFilter {
  /**
  * JSON string generated by serializing the AlarmPolicyDimension two-dimensional array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#dimensions MonitorAlarmPolicy#dimensions}
  */
  readonly dimensions?: string;
  /**
  * Filter condition type. Valid values: DIMENSION (uses dimensions for filtering).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#type MonitorAlarmPolicy#type}
  */
  readonly type?: string;
}

export function monitorAlarmPolicyEventConditionsFilterToTerraform(struct?: MonitorAlarmPolicyEventConditionsFilterOutputReference | MonitorAlarmPolicyEventConditionsFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimensions: cdktf.stringToTerraform(struct!.dimensions),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function monitorAlarmPolicyEventConditionsFilterToHclTerraform(struct?: MonitorAlarmPolicyEventConditionsFilterOutputReference | MonitorAlarmPolicyEventConditionsFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimensions: {
      value: cdktf.stringToHclTerraform(struct!.dimensions),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAlarmPolicyEventConditionsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorAlarmPolicyEventConditionsFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAlarmPolicyEventConditionsFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dimensions = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dimensions = value.dimensions;
      this._type = value.type;
    }
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions?: string; 
  public get dimensions() {
    return this.getStringAttribute('dimensions');
  }
  public set dimensions(value: string) {
    this._dimensions = value;
  }
  public resetDimensions() {
    this._dimensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface MonitorAlarmPolicyEventConditions {
  /**
  * Number of periods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#continue_period MonitorAlarmPolicy#continue_period}
  */
  readonly continuePeriod?: number;
  /**
  * Metric display name, which is used in the output parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#description MonitorAlarmPolicy#description}
  */
  readonly description?: string;
  /**
  * Whether the alarm frequency increases exponentially.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#is_power_notice MonitorAlarmPolicy#is_power_notice}
  */
  readonly isPowerNotice?: number;
  /**
  * Metric name or event name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#metric_name MonitorAlarmPolicy#metric_name}
  */
  readonly metricName?: string;
  /**
  * Alarm interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#notice_frequency MonitorAlarmPolicy#notice_frequency}
  */
  readonly noticeFrequency?: number;
  /**
  * Operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#operator MonitorAlarmPolicy#operator}
  */
  readonly operator?: string;
  /**
  * Statistical period in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#period MonitorAlarmPolicy#period}
  */
  readonly period?: number;
  /**
  * Trigger condition type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#rule_type MonitorAlarmPolicy#rule_type}
  */
  readonly ruleType?: string;
  /**
  * Unit, which is used in the output parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#unit MonitorAlarmPolicy#unit}
  */
  readonly unit?: string;
  /**
  * Threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#value MonitorAlarmPolicy#value}
  */
  readonly value?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#filter MonitorAlarmPolicy#filter}
  */
  readonly filter?: MonitorAlarmPolicyEventConditionsFilter;
}

export function monitorAlarmPolicyEventConditionsToTerraform(struct?: MonitorAlarmPolicyEventConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    continue_period: cdktf.numberToTerraform(struct!.continuePeriod),
    description: cdktf.stringToTerraform(struct!.description),
    is_power_notice: cdktf.numberToTerraform(struct!.isPowerNotice),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    notice_frequency: cdktf.numberToTerraform(struct!.noticeFrequency),
    operator: cdktf.stringToTerraform(struct!.operator),
    period: cdktf.numberToTerraform(struct!.period),
    rule_type: cdktf.stringToTerraform(struct!.ruleType),
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.stringToTerraform(struct!.value),
    filter: monitorAlarmPolicyEventConditionsFilterToTerraform(struct!.filter),
  }
}


export function monitorAlarmPolicyEventConditionsToHclTerraform(struct?: MonitorAlarmPolicyEventConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    continue_period: {
      value: cdktf.numberToHclTerraform(struct!.continuePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_power_notice: {
      value: cdktf.numberToHclTerraform(struct!.isPowerNotice),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notice_frequency: {
      value: cdktf.numberToHclTerraform(struct!.noticeFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_type: {
      value: cdktf.stringToHclTerraform(struct!.ruleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
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
    filter: {
      value: monitorAlarmPolicyEventConditionsFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorAlarmPolicyEventConditionsFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAlarmPolicyEventConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorAlarmPolicyEventConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._continuePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.continuePeriod = this._continuePeriod;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._isPowerNotice !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPowerNotice = this._isPowerNotice;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._noticeFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.noticeFrequency = this._noticeFrequency;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._ruleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleType = this._ruleType;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAlarmPolicyEventConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._continuePeriod = undefined;
      this._description = undefined;
      this._isPowerNotice = undefined;
      this._metricName = undefined;
      this._noticeFrequency = undefined;
      this._operator = undefined;
      this._period = undefined;
      this._ruleType = undefined;
      this._unit = undefined;
      this._value = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._continuePeriod = value.continuePeriod;
      this._description = value.description;
      this._isPowerNotice = value.isPowerNotice;
      this._metricName = value.metricName;
      this._noticeFrequency = value.noticeFrequency;
      this._operator = value.operator;
      this._period = value.period;
      this._ruleType = value.ruleType;
      this._unit = value.unit;
      this._value = value.value;
      this._filter.internalValue = value.filter;
    }
  }

  // continue_period - computed: true, optional: true, required: false
  private _continuePeriod?: number; 
  public get continuePeriod() {
    return this.getNumberAttribute('continue_period');
  }
  public set continuePeriod(value: number) {
    this._continuePeriod = value;
  }
  public resetContinuePeriod() {
    this._continuePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuePeriodInput() {
    return this._continuePeriod;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // is_power_notice - computed: true, optional: true, required: false
  private _isPowerNotice?: number; 
  public get isPowerNotice() {
    return this.getNumberAttribute('is_power_notice');
  }
  public set isPowerNotice(value: number) {
    this._isPowerNotice = value;
  }
  public resetIsPowerNotice() {
    this._isPowerNotice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPowerNoticeInput() {
    return this._isPowerNotice;
  }

  // metric_name - computed: false, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // notice_frequency - computed: true, optional: true, required: false
  private _noticeFrequency?: number; 
  public get noticeFrequency() {
    return this.getNumberAttribute('notice_frequency');
  }
  public set noticeFrequency(value: number) {
    this._noticeFrequency = value;
  }
  public resetNoticeFrequency() {
    this._noticeFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noticeFrequencyInput() {
    return this._noticeFrequency;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // period - computed: false, optional: true, required: false
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

  // rule_type - computed: true, optional: true, required: false
  private _ruleType?: string; 
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }
  public resetRuleType() {
    this._ruleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }

  // unit - computed: true, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new MonitorAlarmPolicyEventConditionsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: MonitorAlarmPolicyEventConditionsFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}

export class MonitorAlarmPolicyEventConditionsList extends cdktf.ComplexList {
  public internalValue? : MonitorAlarmPolicyEventConditions[] | cdktf.IResolvable

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
  public get(index: number): MonitorAlarmPolicyEventConditionsOutputReference {
    return new MonitorAlarmPolicyEventConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorAlarmPolicyFilter {
  /**
  * JSON string generated by serializing the AlarmPolicyDimension two-dimensional array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#dimensions MonitorAlarmPolicy#dimensions}
  */
  readonly dimensions?: string;
  /**
  * Filter condition type. Valid values: DIMENSION (uses dimensions for filtering).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#type MonitorAlarmPolicy#type}
  */
  readonly type: string;
}

export function monitorAlarmPolicyFilterToTerraform(struct?: MonitorAlarmPolicyFilterOutputReference | MonitorAlarmPolicyFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimensions: cdktf.stringToTerraform(struct!.dimensions),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function monitorAlarmPolicyFilterToHclTerraform(struct?: MonitorAlarmPolicyFilterOutputReference | MonitorAlarmPolicyFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimensions: {
      value: cdktf.stringToHclTerraform(struct!.dimensions),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAlarmPolicyFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorAlarmPolicyFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAlarmPolicyFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dimensions = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dimensions = value.dimensions;
      this._type = value.type;
    }
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions?: string; 
  public get dimensions() {
    return this.getStringAttribute('dimensions');
  }
  public set dimensions(value: string) {
    this._dimensions = value;
  }
  public resetDimensions() {
    this._dimensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions;
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
export interface MonitorAlarmPolicyPolicyTag {
  /**
  * Tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#key MonitorAlarmPolicy#key}
  */
  readonly key: string;
  /**
  * Tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#value MonitorAlarmPolicy#value}
  */
  readonly value: string;
}

export function monitorAlarmPolicyPolicyTagToTerraform(struct?: MonitorAlarmPolicyPolicyTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function monitorAlarmPolicyPolicyTagToHclTerraform(struct?: MonitorAlarmPolicyPolicyTag | cdktf.IResolvable): any {
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

export class MonitorAlarmPolicyPolicyTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorAlarmPolicyPolicyTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MonitorAlarmPolicyPolicyTag | cdktf.IResolvable | undefined) {
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

export class MonitorAlarmPolicyPolicyTagList extends cdktf.ComplexList {
  public internalValue? : MonitorAlarmPolicyPolicyTag[] | cdktf.IResolvable

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
  public get(index: number): MonitorAlarmPolicyPolicyTagOutputReference {
    return new MonitorAlarmPolicyPolicyTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorAlarmPolicyTriggerTasks {
  /**
  * Configuration information in JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#task_config MonitorAlarmPolicy#task_config}
  */
  readonly taskConfig: string;
  /**
  * Triggered task type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#type MonitorAlarmPolicy#type}
  */
  readonly type: string;
}

export function monitorAlarmPolicyTriggerTasksToTerraform(struct?: MonitorAlarmPolicyTriggerTasks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    task_config: cdktf.stringToTerraform(struct!.taskConfig),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function monitorAlarmPolicyTriggerTasksToHclTerraform(struct?: MonitorAlarmPolicyTriggerTasks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    task_config: {
      value: cdktf.stringToHclTerraform(struct!.taskConfig),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAlarmPolicyTriggerTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorAlarmPolicyTriggerTasks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._taskConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskConfig = this._taskConfig;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAlarmPolicyTriggerTasks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._taskConfig = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._taskConfig = value.taskConfig;
      this._type = value.type;
    }
  }

  // task_config - computed: false, optional: false, required: true
  private _taskConfig?: string; 
  public get taskConfig() {
    return this.getStringAttribute('task_config');
  }
  public set taskConfig(value: string) {
    this._taskConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskConfigInput() {
    return this._taskConfig;
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

export class MonitorAlarmPolicyTriggerTasksList extends cdktf.ComplexList {
  public internalValue? : MonitorAlarmPolicyTriggerTasks[] | cdktf.IResolvable

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
  public get(index: number): MonitorAlarmPolicyTriggerTasksOutputReference {
    return new MonitorAlarmPolicyTriggerTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy tencentcloud_monitor_alarm_policy}
*/
export class MonitorAlarmPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_monitor_alarm_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonitorAlarmPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonitorAlarmPolicy to import
  * @param importFromId The id of the existing MonitorAlarmPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonitorAlarmPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_monitor_alarm_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_alarm_policy tencentcloud_monitor_alarm_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorAlarmPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorAlarmPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_monitor_alarm_policy',
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
    this._conditonTemplateId = config.conditonTemplateId;
    this._enable = config.enable;
    this._groupBy = config.groupBy;
    this._id = config.id;
    this._monitorType = config.monitorType;
    this._namespace = config.namespace;
    this._noticeIds = config.noticeIds;
    this._policyName = config.policyName;
    this._projectId = config.projectId;
    this._remark = config.remark;
    this._conditions.internalValue = config.conditions;
    this._eventConditions.internalValue = config.eventConditions;
    this._filter.internalValue = config.filter;
    this._policyTag.internalValue = config.policyTag;
    this._triggerTasks.internalValue = config.triggerTasks;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // conditon_template_id - computed: false, optional: true, required: false
  private _conditonTemplateId?: number; 
  public get conditonTemplateId() {
    return this.getNumberAttribute('conditon_template_id');
  }
  public set conditonTemplateId(value: number) {
    this._conditonTemplateId = value;
  }
  public resetConditonTemplateId() {
    this._conditonTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditonTemplateIdInput() {
    return this._conditonTemplateId;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy?: string[]; 
  public get groupBy() {
    return cdktf.Fn.tolist(this.getListAttribute('group_by'));
  }
  public set groupBy(value: string[]) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
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

  // monitor_type - computed: false, optional: false, required: true
  private _monitorType?: string; 
  public get monitorType() {
    return this.getStringAttribute('monitor_type');
  }
  public set monitorType(value: string) {
    this._monitorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorTypeInput() {
    return this._monitorType;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // notice_ids - computed: false, optional: true, required: false
  private _noticeIds?: string[]; 
  public get noticeIds() {
    return this.getListAttribute('notice_ids');
  }
  public set noticeIds(value: string[]) {
    this._noticeIds = value;
  }
  public resetNoticeIds() {
    this._noticeIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noticeIdsInput() {
    return this._noticeIds;
  }

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // remark - computed: false, optional: true, required: false
  private _remark?: string; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string) {
    this._remark = value;
  }
  public resetRemark() {
    this._remark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new MonitorAlarmPolicyConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: MonitorAlarmPolicyConditions) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // event_conditions - computed: false, optional: true, required: false
  private _eventConditions = new MonitorAlarmPolicyEventConditionsList(this, "event_conditions", false);
  public get eventConditions() {
    return this._eventConditions;
  }
  public putEventConditions(value: MonitorAlarmPolicyEventConditions[] | cdktf.IResolvable) {
    this._eventConditions.internalValue = value;
  }
  public resetEventConditions() {
    this._eventConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventConditionsInput() {
    return this._eventConditions.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new MonitorAlarmPolicyFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: MonitorAlarmPolicyFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // policy_tag - computed: false, optional: true, required: false
  private _policyTag = new MonitorAlarmPolicyPolicyTagList(this, "policy_tag", false);
  public get policyTag() {
    return this._policyTag;
  }
  public putPolicyTag(value: MonitorAlarmPolicyPolicyTag[] | cdktf.IResolvable) {
    this._policyTag.internalValue = value;
  }
  public resetPolicyTag() {
    this._policyTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTagInput() {
    return this._policyTag.internalValue;
  }

  // trigger_tasks - computed: false, optional: true, required: false
  private _triggerTasks = new MonitorAlarmPolicyTriggerTasksList(this, "trigger_tasks", false);
  public get triggerTasks() {
    return this._triggerTasks;
  }
  public putTriggerTasks(value: MonitorAlarmPolicyTriggerTasks[] | cdktf.IResolvable) {
    this._triggerTasks.internalValue = value;
  }
  public resetTriggerTasks() {
    this._triggerTasks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerTasksInput() {
    return this._triggerTasks.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      conditon_template_id: cdktf.numberToTerraform(this._conditonTemplateId),
      enable: cdktf.numberToTerraform(this._enable),
      group_by: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupBy),
      id: cdktf.stringToTerraform(this._id),
      monitor_type: cdktf.stringToTerraform(this._monitorType),
      namespace: cdktf.stringToTerraform(this._namespace),
      notice_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._noticeIds),
      policy_name: cdktf.stringToTerraform(this._policyName),
      project_id: cdktf.numberToTerraform(this._projectId),
      remark: cdktf.stringToTerraform(this._remark),
      conditions: monitorAlarmPolicyConditionsToTerraform(this._conditions.internalValue),
      event_conditions: cdktf.listMapper(monitorAlarmPolicyEventConditionsToTerraform, true)(this._eventConditions.internalValue),
      filter: monitorAlarmPolicyFilterToTerraform(this._filter.internalValue),
      policy_tag: cdktf.listMapper(monitorAlarmPolicyPolicyTagToTerraform, true)(this._policyTag.internalValue),
      trigger_tasks: cdktf.listMapper(monitorAlarmPolicyTriggerTasksToTerraform, true)(this._triggerTasks.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      conditon_template_id: {
        value: cdktf.numberToHclTerraform(this._conditonTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable: {
        value: cdktf.numberToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      group_by: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groupBy),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_type: {
        value: cdktf.stringToHclTerraform(this._monitorType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notice_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._noticeIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      policy_name: {
        value: cdktf.stringToHclTerraform(this._policyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
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
      conditions: {
        value: monitorAlarmPolicyConditionsToHclTerraform(this._conditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorAlarmPolicyConditionsList",
      },
      event_conditions: {
        value: cdktf.listMapperHcl(monitorAlarmPolicyEventConditionsToHclTerraform, true)(this._eventConditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorAlarmPolicyEventConditionsList",
      },
      filter: {
        value: monitorAlarmPolicyFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorAlarmPolicyFilterList",
      },
      policy_tag: {
        value: cdktf.listMapperHcl(monitorAlarmPolicyPolicyTagToHclTerraform, true)(this._policyTag.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorAlarmPolicyPolicyTagList",
      },
      trigger_tasks: {
        value: cdktf.listMapperHcl(monitorAlarmPolicyTriggerTasksToHclTerraform, true)(this._triggerTasks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorAlarmPolicyTriggerTasksList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
