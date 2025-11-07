// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_keywords_alarm_rule_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LtsKeywordsAlarmRuleV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_keywords_alarm_rule_v2#alarm_action_rule_name LtsKeywordsAlarmRuleV2#alarm_action_rule_name}
  */
  readonly alarmActionRuleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_keywords_alarm_rule_v2#description LtsKeywordsAlarmRuleV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_keywords_alarm_rule_v2#id LtsKeywordsAlarmRuleV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_keywords_alarm_rule_v2#name LtsKeywordsAlarmRuleV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_keywords_alarm_rule_v2#notification_frequency LtsKeywordsAlarmRuleV2#notification_frequency}
  */
  readonly notificationFrequency: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_keywords_alarm_rule_v2#recovery_policy LtsKeywordsAlarmRuleV2#recovery_policy}
  */
  readonly recoveryPolicy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_keywords_alarm_rule_v2#send_notifications LtsKeywordsAlarmRuleV2#send_notifications}
  */
  readonly sendNotifications?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_keywords_alarm_rule_v2#send_recovery_notifications LtsKeywordsAlarmRuleV2#send_recovery_notifications}
  */
  readonly sendRecoveryNotifications?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_keywords_alarm_rule_v2#severity LtsKeywordsAlarmRuleV2#severity}
  */
  readonly severity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_keywords_alarm_rule_v2#trigger_condition_count LtsKeywordsAlarmRuleV2#trigger_condition_count}
  */
  readonly triggerConditionCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_keywords_alarm_rule_v2#trigger_condition_frequency LtsKeywordsAlarmRuleV2#trigger_condition_frequency}
  */
  readonly triggerConditionFrequency?: number;
  /**
  * frequency block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_keywords_alarm_rule_v2#frequency LtsKeywordsAlarmRuleV2#frequency}
  */
  readonly frequency: LtsKeywordsAlarmRuleV2Frequency;
  /**
  * keywords_requests block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_keywords_alarm_rule_v2#keywords_requests LtsKeywordsAlarmRuleV2#keywords_requests}
  */
  readonly keywordsRequests: LtsKeywordsAlarmRuleV2KeywordsRequests[] | cdktf.IResolvable;
  /**
  * notification_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_keywords_alarm_rule_v2#notification_rule LtsKeywordsAlarmRuleV2#notification_rule}
  */
  readonly notificationRule?: LtsKeywordsAlarmRuleV2NotificationRule;
}
export interface LtsKeywordsAlarmRuleV2Frequency {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_keywords_alarm_rule_v2#cron_expression LtsKeywordsAlarmRuleV2#cron_expression}
  */
  readonly cronExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_keywords_alarm_rule_v2#day_of_week LtsKeywordsAlarmRuleV2#day_of_week}
  */
  readonly dayOfWeek?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_keywords_alarm_rule_v2#fixed_rate LtsKeywordsAlarmRuleV2#fixed_rate}
  */
  readonly fixedRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_keywords_alarm_rule_v2#fixed_rate_unit LtsKeywordsAlarmRuleV2#fixed_rate_unit}
  */
  readonly fixedRateUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_keywords_alarm_rule_v2#hour_of_day LtsKeywordsAlarmRuleV2#hour_of_day}
  */
  readonly hourOfDay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_keywords_alarm_rule_v2#type LtsKeywordsAlarmRuleV2#type}
  */
  readonly type: string;
}

export function ltsKeywordsAlarmRuleV2FrequencyToTerraform(struct?: LtsKeywordsAlarmRuleV2FrequencyOutputReference | LtsKeywordsAlarmRuleV2Frequency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_expression: cdktf.stringToTerraform(struct!.cronExpression),
    day_of_week: cdktf.numberToTerraform(struct!.dayOfWeek),
    fixed_rate: cdktf.numberToTerraform(struct!.fixedRate),
    fixed_rate_unit: cdktf.stringToTerraform(struct!.fixedRateUnit),
    hour_of_day: cdktf.numberToTerraform(struct!.hourOfDay),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ltsKeywordsAlarmRuleV2FrequencyToHclTerraform(struct?: LtsKeywordsAlarmRuleV2FrequencyOutputReference | LtsKeywordsAlarmRuleV2Frequency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron_expression: {
      value: cdktf.stringToHclTerraform(struct!.cronExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_of_week: {
      value: cdktf.numberToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fixed_rate: {
      value: cdktf.numberToHclTerraform(struct!.fixedRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fixed_rate_unit: {
      value: cdktf.stringToHclTerraform(struct!.fixedRateUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hour_of_day: {
      value: cdktf.numberToHclTerraform(struct!.hourOfDay),
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

export class LtsKeywordsAlarmRuleV2FrequencyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LtsKeywordsAlarmRuleV2Frequency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronExpression = this._cronExpression;
    }
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._fixedRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedRate = this._fixedRate;
    }
    if (this._fixedRateUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedRateUnit = this._fixedRateUnit;
    }
    if (this._hourOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourOfDay = this._hourOfDay;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LtsKeywordsAlarmRuleV2Frequency | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cronExpression = undefined;
      this._dayOfWeek = undefined;
      this._fixedRate = undefined;
      this._fixedRateUnit = undefined;
      this._hourOfDay = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cronExpression = value.cronExpression;
      this._dayOfWeek = value.dayOfWeek;
      this._fixedRate = value.fixedRate;
      this._fixedRateUnit = value.fixedRateUnit;
      this._hourOfDay = value.hourOfDay;
      this._type = value.type;
    }
  }

  // cron_expression - computed: true, optional: true, required: false
  private _cronExpression?: string; 
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }
  public set cronExpression(value: string) {
    this._cronExpression = value;
  }
  public resetCronExpression() {
    this._cronExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpressionInput() {
    return this._cronExpression;
  }

  // day_of_week - computed: true, optional: true, required: false
  private _dayOfWeek?: number; 
  public get dayOfWeek() {
    return this.getNumberAttribute('day_of_week');
  }
  public set dayOfWeek(value: number) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // fixed_rate - computed: true, optional: true, required: false
  private _fixedRate?: number; 
  public get fixedRate() {
    return this.getNumberAttribute('fixed_rate');
  }
  public set fixedRate(value: number) {
    this._fixedRate = value;
  }
  public resetFixedRate() {
    this._fixedRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedRateInput() {
    return this._fixedRate;
  }

  // fixed_rate_unit - computed: true, optional: true, required: false
  private _fixedRateUnit?: string; 
  public get fixedRateUnit() {
    return this.getStringAttribute('fixed_rate_unit');
  }
  public set fixedRateUnit(value: string) {
    this._fixedRateUnit = value;
  }
  public resetFixedRateUnit() {
    this._fixedRateUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedRateUnitInput() {
    return this._fixedRateUnit;
  }

  // hour_of_day - computed: true, optional: true, required: false
  private _hourOfDay?: number; 
  public get hourOfDay() {
    return this.getNumberAttribute('hour_of_day');
  }
  public set hourOfDay(value: number) {
    this._hourOfDay = value;
  }
  public resetHourOfDay() {
    this._hourOfDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourOfDayInput() {
    return this._hourOfDay;
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
export interface LtsKeywordsAlarmRuleV2KeywordsRequests {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_keywords_alarm_rule_v2#condition LtsKeywordsAlarmRuleV2#condition}
  */
  readonly condition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_keywords_alarm_rule_v2#keyword LtsKeywordsAlarmRuleV2#keyword}
  */
  readonly keyword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_keywords_alarm_rule_v2#log_group_id LtsKeywordsAlarmRuleV2#log_group_id}
  */
  readonly logGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_keywords_alarm_rule_v2#log_stream_id LtsKeywordsAlarmRuleV2#log_stream_id}
  */
  readonly logStreamId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_keywords_alarm_rule_v2#number LtsKeywordsAlarmRuleV2#number}
  */
  readonly number: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_keywords_alarm_rule_v2#search_time_range LtsKeywordsAlarmRuleV2#search_time_range}
  */
  readonly searchTimeRange: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_keywords_alarm_rule_v2#search_time_range_unit LtsKeywordsAlarmRuleV2#search_time_range_unit}
  */
  readonly searchTimeRangeUnit: string;
}

export function ltsKeywordsAlarmRuleV2KeywordsRequestsToTerraform(struct?: LtsKeywordsAlarmRuleV2KeywordsRequests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    keyword: cdktf.stringToTerraform(struct!.keyword),
    log_group_id: cdktf.stringToTerraform(struct!.logGroupId),
    log_stream_id: cdktf.stringToTerraform(struct!.logStreamId),
    number: cdktf.numberToTerraform(struct!.number),
    search_time_range: cdktf.numberToTerraform(struct!.searchTimeRange),
    search_time_range_unit: cdktf.stringToTerraform(struct!.searchTimeRangeUnit),
  }
}


export function ltsKeywordsAlarmRuleV2KeywordsRequestsToHclTerraform(struct?: LtsKeywordsAlarmRuleV2KeywordsRequests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keyword: {
      value: cdktf.stringToHclTerraform(struct!.keyword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_group_id: {
      value: cdktf.stringToHclTerraform(struct!.logGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_id: {
      value: cdktf.stringToHclTerraform(struct!.logStreamId),
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
    search_time_range: {
      value: cdktf.numberToHclTerraform(struct!.searchTimeRange),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    search_time_range_unit: {
      value: cdktf.stringToHclTerraform(struct!.searchTimeRangeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LtsKeywordsAlarmRuleV2KeywordsRequests | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._keyword !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyword = this._keyword;
    }
    if (this._logGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupId = this._logGroupId;
    }
    if (this._logStreamId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamId = this._logStreamId;
    }
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._searchTimeRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchTimeRange = this._searchTimeRange;
    }
    if (this._searchTimeRangeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchTimeRangeUnit = this._searchTimeRangeUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LtsKeywordsAlarmRuleV2KeywordsRequests | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._keyword = undefined;
      this._logGroupId = undefined;
      this._logStreamId = undefined;
      this._number = undefined;
      this._searchTimeRange = undefined;
      this._searchTimeRangeUnit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._keyword = value.keyword;
      this._logGroupId = value.logGroupId;
      this._logStreamId = value.logStreamId;
      this._number = value.number;
      this._searchTimeRange = value.searchTimeRange;
      this._searchTimeRangeUnit = value.searchTimeRangeUnit;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // keyword - computed: false, optional: false, required: true
  private _keyword?: string; 
  public get keyword() {
    return this.getStringAttribute('keyword');
  }
  public set keyword(value: string) {
    this._keyword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordInput() {
    return this._keyword;
  }

  // log_group_id - computed: false, optional: false, required: true
  private _logGroupId?: string; 
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }
  public set logGroupId(value: string) {
    this._logGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupIdInput() {
    return this._logGroupId;
  }

  // log_stream_id - computed: false, optional: false, required: true
  private _logStreamId?: string; 
  public get logStreamId() {
    return this.getStringAttribute('log_stream_id');
  }
  public set logStreamId(value: string) {
    this._logStreamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamIdInput() {
    return this._logStreamId;
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

  // search_time_range - computed: false, optional: false, required: true
  private _searchTimeRange?: number; 
  public get searchTimeRange() {
    return this.getNumberAttribute('search_time_range');
  }
  public set searchTimeRange(value: number) {
    this._searchTimeRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchTimeRangeInput() {
    return this._searchTimeRange;
  }

  // search_time_range_unit - computed: false, optional: false, required: true
  private _searchTimeRangeUnit?: string; 
  public get searchTimeRangeUnit() {
    return this.getStringAttribute('search_time_range_unit');
  }
  public set searchTimeRangeUnit(value: string) {
    this._searchTimeRangeUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchTimeRangeUnitInput() {
    return this._searchTimeRangeUnit;
  }
}

export class LtsKeywordsAlarmRuleV2KeywordsRequestsList extends cdktf.ComplexList {
  public internalValue? : LtsKeywordsAlarmRuleV2KeywordsRequests[] | cdktf.IResolvable

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
  public get(index: number): LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference {
    return new LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LtsKeywordsAlarmRuleV2NotificationRuleTopics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_keywords_alarm_rule_v2#display_name LtsKeywordsAlarmRuleV2#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_keywords_alarm_rule_v2#name LtsKeywordsAlarmRuleV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_keywords_alarm_rule_v2#push_policy LtsKeywordsAlarmRuleV2#push_policy}
  */
  readonly pushPolicy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_keywords_alarm_rule_v2#topic_urn LtsKeywordsAlarmRuleV2#topic_urn}
  */
  readonly topicUrn: string;
}

export function ltsKeywordsAlarmRuleV2NotificationRuleTopicsToTerraform(struct?: LtsKeywordsAlarmRuleV2NotificationRuleTopics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    name: cdktf.stringToTerraform(struct!.name),
    push_policy: cdktf.numberToTerraform(struct!.pushPolicy),
    topic_urn: cdktf.stringToTerraform(struct!.topicUrn),
  }
}


export function ltsKeywordsAlarmRuleV2NotificationRuleTopicsToHclTerraform(struct?: LtsKeywordsAlarmRuleV2NotificationRuleTopics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
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
    push_policy: {
      value: cdktf.numberToHclTerraform(struct!.pushPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    topic_urn: {
      value: cdktf.stringToHclTerraform(struct!.topicUrn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LtsKeywordsAlarmRuleV2NotificationRuleTopics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pushPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.pushPolicy = this._pushPolicy;
    }
    if (this._topicUrn !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicUrn = this._topicUrn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LtsKeywordsAlarmRuleV2NotificationRuleTopics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._name = undefined;
      this._pushPolicy = undefined;
      this._topicUrn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._name = value.name;
      this._pushPolicy = value.pushPolicy;
      this._topicUrn = value.topicUrn;
    }
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // push_policy - computed: true, optional: true, required: false
  private _pushPolicy?: number; 
  public get pushPolicy() {
    return this.getNumberAttribute('push_policy');
  }
  public set pushPolicy(value: number) {
    this._pushPolicy = value;
  }
  public resetPushPolicy() {
    this._pushPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushPolicyInput() {
    return this._pushPolicy;
  }

  // topic_urn - computed: false, optional: false, required: true
  private _topicUrn?: string; 
  public get topicUrn() {
    return this.getStringAttribute('topic_urn');
  }
  public set topicUrn(value: string) {
    this._topicUrn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicUrnInput() {
    return this._topicUrn;
  }
}

export class LtsKeywordsAlarmRuleV2NotificationRuleTopicsList extends cdktf.ComplexList {
  public internalValue? : LtsKeywordsAlarmRuleV2NotificationRuleTopics[] | cdktf.IResolvable

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
  public get(index: number): LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference {
    return new LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LtsKeywordsAlarmRuleV2NotificationRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_keywords_alarm_rule_v2#language LtsKeywordsAlarmRuleV2#language}
  */
  readonly language?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_keywords_alarm_rule_v2#template_name LtsKeywordsAlarmRuleV2#template_name}
  */
  readonly templateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_keywords_alarm_rule_v2#timezone LtsKeywordsAlarmRuleV2#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_keywords_alarm_rule_v2#user_name LtsKeywordsAlarmRuleV2#user_name}
  */
  readonly userName: string;
  /**
  * topics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_keywords_alarm_rule_v2#topics LtsKeywordsAlarmRuleV2#topics}
  */
  readonly topics: LtsKeywordsAlarmRuleV2NotificationRuleTopics[] | cdktf.IResolvable;
}

export function ltsKeywordsAlarmRuleV2NotificationRuleToTerraform(struct?: LtsKeywordsAlarmRuleV2NotificationRuleOutputReference | LtsKeywordsAlarmRuleV2NotificationRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    language: cdktf.stringToTerraform(struct!.language),
    template_name: cdktf.stringToTerraform(struct!.templateName),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    user_name: cdktf.stringToTerraform(struct!.userName),
    topics: cdktf.listMapper(ltsKeywordsAlarmRuleV2NotificationRuleTopicsToTerraform, true)(struct!.topics),
  }
}


export function ltsKeywordsAlarmRuleV2NotificationRuleToHclTerraform(struct?: LtsKeywordsAlarmRuleV2NotificationRuleOutputReference | LtsKeywordsAlarmRuleV2NotificationRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    language: {
      value: cdktf.stringToHclTerraform(struct!.language),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_name: {
      value: cdktf.stringToHclTerraform(struct!.templateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topics: {
      value: cdktf.listMapperHcl(ltsKeywordsAlarmRuleV2NotificationRuleTopicsToHclTerraform, true)(struct!.topics),
      isBlock: true,
      type: "list",
      storageClassType: "LtsKeywordsAlarmRuleV2NotificationRuleTopicsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LtsKeywordsAlarmRuleV2NotificationRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LtsKeywordsAlarmRuleV2NotificationRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._language !== undefined) {
      hasAnyValues = true;
      internalValueResult.language = this._language;
    }
    if (this._templateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateName = this._templateName;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    if (this._topics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topics = this._topics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LtsKeywordsAlarmRuleV2NotificationRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._language = undefined;
      this._templateName = undefined;
      this._timezone = undefined;
      this._userName = undefined;
      this._topics.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._language = value.language;
      this._templateName = value.templateName;
      this._timezone = value.timezone;
      this._userName = value.userName;
      this._topics.internalValue = value.topics;
    }
  }

  // language - computed: true, optional: true, required: false
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  public resetLanguage() {
    this._language = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }

  // template_name - computed: false, optional: true, required: false
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  public resetTemplateName() {
    this._templateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // topics - computed: false, optional: false, required: true
  private _topics = new LtsKeywordsAlarmRuleV2NotificationRuleTopicsList(this, "topics", false);
  public get topics() {
    return this._topics;
  }
  public putTopics(value: LtsKeywordsAlarmRuleV2NotificationRuleTopics[] | cdktf.IResolvable) {
    this._topics.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicsInput() {
    return this._topics.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_keywords_alarm_rule_v2 opentelekomcloud_lts_keywords_alarm_rule_v2}
*/
export class LtsKeywordsAlarmRuleV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_lts_keywords_alarm_rule_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LtsKeywordsAlarmRuleV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LtsKeywordsAlarmRuleV2 to import
  * @param importFromId The id of the existing LtsKeywordsAlarmRuleV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_keywords_alarm_rule_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LtsKeywordsAlarmRuleV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_lts_keywords_alarm_rule_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_keywords_alarm_rule_v2 opentelekomcloud_lts_keywords_alarm_rule_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LtsKeywordsAlarmRuleV2Config
  */
  public constructor(scope: Construct, id: string, config: LtsKeywordsAlarmRuleV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_lts_keywords_alarm_rule_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.52'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alarmActionRuleName = config.alarmActionRuleName;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._notificationFrequency = config.notificationFrequency;
    this._recoveryPolicy = config.recoveryPolicy;
    this._sendNotifications = config.sendNotifications;
    this._sendRecoveryNotifications = config.sendRecoveryNotifications;
    this._severity = config.severity;
    this._triggerConditionCount = config.triggerConditionCount;
    this._triggerConditionFrequency = config.triggerConditionFrequency;
    this._frequency.internalValue = config.frequency;
    this._keywordsRequests.internalValue = config.keywordsRequests;
    this._notificationRule.internalValue = config.notificationRule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alarm_action_rule_name - computed: false, optional: true, required: false
  private _alarmActionRuleName?: string; 
  public get alarmActionRuleName() {
    return this.getStringAttribute('alarm_action_rule_name');
  }
  public set alarmActionRuleName(value: string) {
    this._alarmActionRuleName = value;
  }
  public resetAlarmActionRuleName() {
    this._alarmActionRuleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmActionRuleNameInput() {
    return this._alarmActionRuleName;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: false, optional: true, required: false
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

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
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

  // notification_frequency - computed: false, optional: false, required: true
  private _notificationFrequency?: number; 
  public get notificationFrequency() {
    return this.getNumberAttribute('notification_frequency');
  }
  public set notificationFrequency(value: number) {
    this._notificationFrequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationFrequencyInput() {
    return this._notificationFrequency;
  }

  // recovery_policy - computed: true, optional: true, required: false
  private _recoveryPolicy?: number; 
  public get recoveryPolicy() {
    return this.getNumberAttribute('recovery_policy');
  }
  public set recoveryPolicy(value: number) {
    this._recoveryPolicy = value;
  }
  public resetRecoveryPolicy() {
    this._recoveryPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryPolicyInput() {
    return this._recoveryPolicy;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // send_notifications - computed: true, optional: true, required: false
  private _sendNotifications?: boolean | cdktf.IResolvable; 
  public get sendNotifications() {
    return this.getBooleanAttribute('send_notifications');
  }
  public set sendNotifications(value: boolean | cdktf.IResolvable) {
    this._sendNotifications = value;
  }
  public resetSendNotifications() {
    this._sendNotifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendNotificationsInput() {
    return this._sendNotifications;
  }

  // send_recovery_notifications - computed: true, optional: true, required: false
  private _sendRecoveryNotifications?: boolean | cdktf.IResolvable; 
  public get sendRecoveryNotifications() {
    return this.getBooleanAttribute('send_recovery_notifications');
  }
  public set sendRecoveryNotifications(value: boolean | cdktf.IResolvable) {
    this._sendRecoveryNotifications = value;
  }
  public resetSendRecoveryNotifications() {
    this._sendRecoveryNotifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendRecoveryNotificationsInput() {
    return this._sendRecoveryNotifications;
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // trigger_condition_count - computed: true, optional: true, required: false
  private _triggerConditionCount?: number; 
  public get triggerConditionCount() {
    return this.getNumberAttribute('trigger_condition_count');
  }
  public set triggerConditionCount(value: number) {
    this._triggerConditionCount = value;
  }
  public resetTriggerConditionCount() {
    this._triggerConditionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerConditionCountInput() {
    return this._triggerConditionCount;
  }

  // trigger_condition_frequency - computed: true, optional: true, required: false
  private _triggerConditionFrequency?: number; 
  public get triggerConditionFrequency() {
    return this.getNumberAttribute('trigger_condition_frequency');
  }
  public set triggerConditionFrequency(value: number) {
    this._triggerConditionFrequency = value;
  }
  public resetTriggerConditionFrequency() {
    this._triggerConditionFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerConditionFrequencyInput() {
    return this._triggerConditionFrequency;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency = new LtsKeywordsAlarmRuleV2FrequencyOutputReference(this, "frequency");
  public get frequency() {
    return this._frequency;
  }
  public putFrequency(value: LtsKeywordsAlarmRuleV2Frequency) {
    this._frequency.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency.internalValue;
  }

  // keywords_requests - computed: false, optional: false, required: true
  private _keywordsRequests = new LtsKeywordsAlarmRuleV2KeywordsRequestsList(this, "keywords_requests", false);
  public get keywordsRequests() {
    return this._keywordsRequests;
  }
  public putKeywordsRequests(value: LtsKeywordsAlarmRuleV2KeywordsRequests[] | cdktf.IResolvable) {
    this._keywordsRequests.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordsRequestsInput() {
    return this._keywordsRequests.internalValue;
  }

  // notification_rule - computed: false, optional: true, required: false
  private _notificationRule = new LtsKeywordsAlarmRuleV2NotificationRuleOutputReference(this, "notification_rule");
  public get notificationRule() {
    return this._notificationRule;
  }
  public putNotificationRule(value: LtsKeywordsAlarmRuleV2NotificationRule) {
    this._notificationRule.internalValue = value;
  }
  public resetNotificationRule() {
    this._notificationRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationRuleInput() {
    return this._notificationRule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alarm_action_rule_name: cdktf.stringToTerraform(this._alarmActionRuleName),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      notification_frequency: cdktf.numberToTerraform(this._notificationFrequency),
      recovery_policy: cdktf.numberToTerraform(this._recoveryPolicy),
      send_notifications: cdktf.booleanToTerraform(this._sendNotifications),
      send_recovery_notifications: cdktf.booleanToTerraform(this._sendRecoveryNotifications),
      severity: cdktf.stringToTerraform(this._severity),
      trigger_condition_count: cdktf.numberToTerraform(this._triggerConditionCount),
      trigger_condition_frequency: cdktf.numberToTerraform(this._triggerConditionFrequency),
      frequency: ltsKeywordsAlarmRuleV2FrequencyToTerraform(this._frequency.internalValue),
      keywords_requests: cdktf.listMapper(ltsKeywordsAlarmRuleV2KeywordsRequestsToTerraform, true)(this._keywordsRequests.internalValue),
      notification_rule: ltsKeywordsAlarmRuleV2NotificationRuleToTerraform(this._notificationRule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alarm_action_rule_name: {
        value: cdktf.stringToHclTerraform(this._alarmActionRuleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_frequency: {
        value: cdktf.numberToHclTerraform(this._notificationFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      recovery_policy: {
        value: cdktf.numberToHclTerraform(this._recoveryPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      send_notifications: {
        value: cdktf.booleanToHclTerraform(this._sendNotifications),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      send_recovery_notifications: {
        value: cdktf.booleanToHclTerraform(this._sendRecoveryNotifications),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_condition_count: {
        value: cdktf.numberToHclTerraform(this._triggerConditionCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trigger_condition_frequency: {
        value: cdktf.numberToHclTerraform(this._triggerConditionFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      frequency: {
        value: ltsKeywordsAlarmRuleV2FrequencyToHclTerraform(this._frequency.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LtsKeywordsAlarmRuleV2FrequencyList",
      },
      keywords_requests: {
        value: cdktf.listMapperHcl(ltsKeywordsAlarmRuleV2KeywordsRequestsToHclTerraform, true)(this._keywordsRequests.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LtsKeywordsAlarmRuleV2KeywordsRequestsList",
      },
      notification_rule: {
        value: ltsKeywordsAlarmRuleV2NotificationRuleToHclTerraform(this._notificationRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LtsKeywordsAlarmRuleV2NotificationRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
