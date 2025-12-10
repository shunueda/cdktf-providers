// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/waf_custom_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafCustomRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Action type, 1(Block), 2(Captcha), 3(log), 4(Redirect).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/waf_custom_rule#action_type WafCustomRule#action_type}
  */
  readonly actionType: string;
  /**
  * Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/waf_custom_rule#domain WafCustomRule#domain}
  */
  readonly domain: string;
  /**
  * Expiration time in second-level timestamp, for example, 1677254399 indicates the expiration time is 2023-02-24 23:59:59; 0 indicates it will never expire.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/waf_custom_rule#expire_time WafCustomRule#expire_time}
  */
  readonly expireTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/waf_custom_rule#id WafCustomRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Rule execution mode: TimedJob indicates scheduled execution. CronJob indicates periodic execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/waf_custom_rule#job_type WafCustomRule#job_type}
  */
  readonly jobType?: string;
  /**
  * Rule Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/waf_custom_rule#name WafCustomRule#name}
  */
  readonly name: string;
  /**
  * If the action is a Redirect, it represents the redirect address; Other situations can be left blank.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/waf_custom_rule#redirect WafCustomRule#redirect}
  */
  readonly redirect?: string;
  /**
  * Priority, value range 0-100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/waf_custom_rule#sort_id WafCustomRule#sort_id}
  */
  readonly sortId: string;
  /**
  * The status of the rule, 1(open), 0(close).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/waf_custom_rule#status WafCustomRule#status}
  */
  readonly status?: string;
  /**
  * job_date_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/waf_custom_rule#job_date_time WafCustomRule#job_date_time}
  */
  readonly jobDateTime?: WafCustomRuleJobDateTime;
  /**
  * strategies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/waf_custom_rule#strategies WafCustomRule#strategies}
  */
  readonly strategies: WafCustomRuleStrategies[] | cdktf.IResolvable;
}
export interface WafCustomRuleJobDateTimeCron {
  /**
  * Days in each month for execution. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/waf_custom_rule#days WafCustomRule#days}
  */
  readonly days?: number[];
  /**
  * End time. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/waf_custom_rule#end_time WafCustomRule#end_time}
  */
  readonly endTime?: string;
  /**
  * Start time. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/waf_custom_rule#start_time WafCustomRule#start_time}
  */
  readonly startTime?: string;
  /**
  * Days of each week for execution. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/waf_custom_rule#w_days WafCustomRule#w_days}
  */
  readonly wDays?: number[];
}

export function wafCustomRuleJobDateTimeCronToTerraform(struct?: WafCustomRuleJobDateTimeCron | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.days),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    w_days: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.wDays),
  }
}


export function wafCustomRuleJobDateTimeCronToHclTerraform(struct?: WafCustomRuleJobDateTimeCron | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.days),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    w_days: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.wDays),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafCustomRuleJobDateTimeCronOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafCustomRuleJobDateTimeCron | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._wDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.wDays = this._wDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafCustomRuleJobDateTimeCron | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._days = undefined;
      this._endTime = undefined;
      this._startTime = undefined;
      this._wDays = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._days = value.days;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
      this._wDays = value.wDays;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number[]; 
  public get days() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('days')));
  }
  public set days(value: number[]) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // w_days - computed: false, optional: true, required: false
  private _wDays?: number[]; 
  public get wDays() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('w_days')));
  }
  public set wDays(value: number[]) {
    this._wDays = value;
  }
  public resetWDays() {
    this._wDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wDaysInput() {
    return this._wDays;
  }
}

export class WafCustomRuleJobDateTimeCronList extends cdktf.ComplexList {
  public internalValue? : WafCustomRuleJobDateTimeCron[] | cdktf.IResolvable

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
  public get(index: number): WafCustomRuleJobDateTimeCronOutputReference {
    return new WafCustomRuleJobDateTimeCronOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafCustomRuleJobDateTimeTimed {
  /**
  * End timestamp, in seconds. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/waf_custom_rule#end_date_time WafCustomRule#end_date_time}
  */
  readonly endDateTime?: number;
  /**
  * Start timestamp, in seconds. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/waf_custom_rule#start_date_time WafCustomRule#start_date_time}
  */
  readonly startDateTime?: number;
}

export function wafCustomRuleJobDateTimeTimedToTerraform(struct?: WafCustomRuleJobDateTimeTimed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_date_time: cdktf.numberToTerraform(struct!.endDateTime),
    start_date_time: cdktf.numberToTerraform(struct!.startDateTime),
  }
}


export function wafCustomRuleJobDateTimeTimedToHclTerraform(struct?: WafCustomRuleJobDateTimeTimed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_date_time: {
      value: cdktf.numberToHclTerraform(struct!.endDateTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_date_time: {
      value: cdktf.numberToHclTerraform(struct!.startDateTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafCustomRuleJobDateTimeTimedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafCustomRuleJobDateTimeTimed | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endDateTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endDateTime = this._endDateTime;
    }
    if (this._startDateTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDateTime = this._startDateTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafCustomRuleJobDateTimeTimed | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endDateTime = undefined;
      this._startDateTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endDateTime = value.endDateTime;
      this._startDateTime = value.startDateTime;
    }
  }

  // end_date_time - computed: false, optional: true, required: false
  private _endDateTime?: number; 
  public get endDateTime() {
    return this.getNumberAttribute('end_date_time');
  }
  public set endDateTime(value: number) {
    this._endDateTime = value;
  }
  public resetEndDateTime() {
    this._endDateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateTimeInput() {
    return this._endDateTime;
  }

  // start_date_time - computed: false, optional: true, required: false
  private _startDateTime?: number; 
  public get startDateTime() {
    return this.getNumberAttribute('start_date_time');
  }
  public set startDateTime(value: number) {
    this._startDateTime = value;
  }
  public resetStartDateTime() {
    this._startDateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateTimeInput() {
    return this._startDateTime;
  }
}

export class WafCustomRuleJobDateTimeTimedList extends cdktf.ComplexList {
  public internalValue? : WafCustomRuleJobDateTimeTimed[] | cdktf.IResolvable

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
  public get(index: number): WafCustomRuleJobDateTimeTimedOutputReference {
    return new WafCustomRuleJobDateTimeTimedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafCustomRuleJobDateTime {
  /**
  * Time zone. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/waf_custom_rule#time_t_zone WafCustomRule#time_t_zone}
  */
  readonly timeTZone?: string;
  /**
  * cron block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/waf_custom_rule#cron WafCustomRule#cron}
  */
  readonly cron?: WafCustomRuleJobDateTimeCron[] | cdktf.IResolvable;
  /**
  * timed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/waf_custom_rule#timed WafCustomRule#timed}
  */
  readonly timed?: WafCustomRuleJobDateTimeTimed[] | cdktf.IResolvable;
}

export function wafCustomRuleJobDateTimeToTerraform(struct?: WafCustomRuleJobDateTimeOutputReference | WafCustomRuleJobDateTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_t_zone: cdktf.stringToTerraform(struct!.timeTZone),
    cron: cdktf.listMapper(wafCustomRuleJobDateTimeCronToTerraform, true)(struct!.cron),
    timed: cdktf.listMapper(wafCustomRuleJobDateTimeTimedToTerraform, true)(struct!.timed),
  }
}


export function wafCustomRuleJobDateTimeToHclTerraform(struct?: WafCustomRuleJobDateTimeOutputReference | WafCustomRuleJobDateTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    time_t_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeTZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cron: {
      value: cdktf.listMapperHcl(wafCustomRuleJobDateTimeCronToHclTerraform, true)(struct!.cron),
      isBlock: true,
      type: "list",
      storageClassType: "WafCustomRuleJobDateTimeCronList",
    },
    timed: {
      value: cdktf.listMapperHcl(wafCustomRuleJobDateTimeTimedToHclTerraform, true)(struct!.timed),
      isBlock: true,
      type: "list",
      storageClassType: "WafCustomRuleJobDateTimeTimedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafCustomRuleJobDateTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WafCustomRuleJobDateTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeTZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeTZone = this._timeTZone;
    }
    if (this._cron?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cron = this._cron?.internalValue;
    }
    if (this._timed?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timed = this._timed?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafCustomRuleJobDateTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timeTZone = undefined;
      this._cron.internalValue = undefined;
      this._timed.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timeTZone = value.timeTZone;
      this._cron.internalValue = value.cron;
      this._timed.internalValue = value.timed;
    }
  }

  // time_t_zone - computed: false, optional: true, required: false
  private _timeTZone?: string; 
  public get timeTZone() {
    return this.getStringAttribute('time_t_zone');
  }
  public set timeTZone(value: string) {
    this._timeTZone = value;
  }
  public resetTimeTZone() {
    this._timeTZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeTZoneInput() {
    return this._timeTZone;
  }

  // cron - computed: false, optional: true, required: false
  private _cron = new WafCustomRuleJobDateTimeCronList(this, "cron", false);
  public get cron() {
    return this._cron;
  }
  public putCron(value: WafCustomRuleJobDateTimeCron[] | cdktf.IResolvable) {
    this._cron.internalValue = value;
  }
  public resetCron() {
    this._cron.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronInput() {
    return this._cron.internalValue;
  }

  // timed - computed: false, optional: true, required: false
  private _timed = new WafCustomRuleJobDateTimeTimedList(this, "timed", false);
  public get timed() {
    return this._timed;
  }
  public putTimed(value: WafCustomRuleJobDateTimeTimed[] | cdktf.IResolvable) {
    this._timed.internalValue = value;
  }
  public resetTimed() {
    this._timed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timedInput() {
    return this._timed.internalValue;
  }
}
export interface WafCustomRuleStrategies {
  /**
  * Matching parameter
  *               There are two types of configuration parameters: unsupported parameters and supported parameters.
  *               The matching parameter can be entered only when the matching field is one of the following four. Otherwise, the parameter is not supported.
  *                   GET (GET parameter value)		
  *                   POST (POST parameter value)		
  *                   ARGS_COOKIE (Cookie parameter value)		
  *                   ARGS_HEADER (Header parameter value)
  *           Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/waf_custom_rule#arg WafCustomRule#arg}
  */
  readonly arg: string;
  /**
  * 0: case-sensitive, 1: case-insensitive. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/waf_custom_rule#case_not_sensitive WafCustomRule#case_not_sensitive}
  */
  readonly caseNotSensitive?: number;
  /**
  * Logic symbol
  *               Logical symbols are divided into the following types:
  *                   empty (content is empty)
  *                   null (do not exist)
  *                   eq (equal to)
  *                   neq (not equal to)
  *                   contains (contain)
  *                   ncontains (do not contain)
  *                   strprefix (prefix matching)
  *                   strsuffix (suffix matching)
  *                   len_eq (length equals to)
  *                   len_gt (length is greater than)
  *                   len_lt (length is less than)
  *                   ipmatch (belong to)
  *                   ipnmatch (do not belong to)
  *                   numgt (number greater than)
  *                   numlt (number less than)
  *                   geo_in (IP geo belongs to)
  *                   geo_not_in (IP geo not belongs to)
  *                   rematch (regex match)
  * 				  numgt (numerically greater than)
  * 				  numlt (numerically less than)
  * 				  numeq (numerically equal to)
  * 				  numneq (numerically not equal to)
  * 				  numle (numerically less than or equal to)
  * 				  numge (numerically greater than or equal to)
  *               Different matching fields correspond to different logical operators. For details, see the matching field table above.
  *           Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/waf_custom_rule#compare_func WafCustomRule#compare_func}
  */
  readonly compareFunc: string;
  /**
  * Matching content
  *               Currently, when the matching field is COOKIE (cookie), the matching content is not required. In other scenes, the matching content is required.
  *           Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/waf_custom_rule#content WafCustomRule#content}
  */
  readonly content: string;
  /**
  * Matching field
  *               Different matching fields result in different matching parameters, logical operators, and matching contents. The details are as follows:
  * 			  <table><thead><tr><th>Matching Field</th><th>Matching Parameter</th><th>Logical Symbol</th><th>Matching Content</th></tr></thead><tbody><tr><td>IP (source IP)</td><td>Parameters are not supported.</td><td>ipmatch (match)<br>ipnmatch (mismatch)</td><td>Multiple IP addresses are separated by commas. A maximum of 20 IP addresses are allowed.</td></tr><tr><td>IPv6 (source IPv6)</td><td>Parameters are not supported.</td><td>ipmatch (match)<br>ipnmatch (mismatch)</td><td>A single IPv6 address is supported.</td></tr><tr><td>Referer (referer)</td><td>Parameters are not supported.</td><td>empty (Content is empty.)<br>null (do not exist)<br>eq (equal to)<br>neq (not equal to)<br>contains (contain)<br>ncontains (do not contain)<br>len_eq (length equals to)<br>len_gt (length is greater than)<br>len_lt (length is less than)<br>strprefix (prefix matching)<br>strsuffix (suffix matching)<br>rematch (regular expression matching)</td><td>Enter the content, with a maximum of 512 characters.</td></tr><tr><td>URL (request path)</td><td>Parameters are not supported.</td><td>eq (equal to)<br>neq (not equal to)<br>contains (contain)<br>ncontains (do not contain)<br>len_eq (length equals to)<br>len_gt (length is greater than)<br>len_lt (length is less than)<br>strprefix (prefix matching)<br>strsuffix (suffix matching)<br>rematch (regular expression matching)</td><td>Enter the content starting with /, with a maximum of 512 characters.</td></tr><tr><td>UserAgent (UserAgent)</td><td>Parameters are not supported.</td><td>Same logical symbols as the matching field <font color="Red">Referer</font></td><td>Enter the content with a maximum of 512 characters.</td></tr><tr><td>HTTP_METHOD (HTTP request method)</td><td>Parameters are not supported.</td><td>eq (equal to)<br>neq (not equal to)</td><td>Enter the method name. The uppercase is recommended.</td></tr><tr><td>QUERY_STRING (request string)</td><td>Parameters are not supported.</td><td>Same logical symbol as the matching field <font color="Red">Request Path</font></td><td>Enter the content with a maximum of 512 characters.</td></tr><tr><td>GET (GET parameter value)</td><td>Parameter entry is supported.</td><td>contains (contain)<br>ncontains (do not contain)<br>len_eq (length equals to)<br>len_gt (length is greater than)<br>len_lt (length is less than)<br>strprefix (prefix matching)<br>strsuffix (suffix matching)</td><td>Enter the content with a maximum of 512 characters.</td></tr><tr><td>GET_PARAMS_NAMES (GET parameter name)</td><td>Parameters are not supported.</td><td>exist (Parameter exists.)<br>nexist (Parameter does not exist.)<br>len_eq (length equals to)<br>len_gt (length is greater than)<br>len_lt (length is less than)<br>strprefix (prefix matching)<br>strsuffix (suffix matching)</td><td>Enter the content with a maximum of 512 characters.</td></tr><tr><td>POST (POST parameter value)</td><td>Parameter entry is supported.</td><td>Same logical symbol as the matching field <font color="Red">GET Parameter Value</font></td><td>Enter the content with a maximum of 512 characters.</td></tr><tr><td>GET_POST_NAMES (POST parameter name)</td><td>Parameters are not supported.</td><td>Same logical symbol as the matching field <font color="Red">GET Parameter Name</font></td><td>Enter the content with a maximum of 512 characters.</td></tr><tr><td>POST_BODY (complete body)</td><td>Parameters are not supported.</td><td>Same logical symbol as the matching field <font color="Red">Request Path</font></td><td>Enter the body content with a maximum of 512 characters.</td></tr><tr><td>COOKIE (cookie)</td><td>Parameters are not supported.</td><td>empty (Content is empty.)<br>null (do not exist)<br>rematch (regular expression matching)</td><td><font color="Red">Unsupported currently</font></td></tr><tr><td>GET_COOKIES_NAMES (cookie parameter name)</td><td>Parameters are not supported.</td><td>Same logical symbol as the matching field <font color="Red">GET Parameter Name</font></td><td>Enter the content with a maximum of 512 characters.</td></tr><tr><td>ARGS_COOKIE (cookie parameter value)</td><td>Parameter entry is supported.</td><td>Same logical symbol as the matching field <font color="Red">GET Parameter Value</font></td><td>Enter the contentwith a maximum of 512 characters.</td></tr><tr><td>GET_HEADERS_NAMES (header parameter name)</td><td>Parameters are not supported.</td><td>exist (Parameter exists.)<br>nexist (Parameter does not exist.)<br>len_eq (length equals to)<br>len_gt (length is greater than)<br>len_lt (length is less than)<br>strprefix (prefix matching)<br>strsuffix (suffix matching)<br>rematch (regular expression matching)</td><td>Enter the content with a maximum of 512 characters. The lowercase is recommended.</td></tr><tr><td>ARGS_HEADER (header parameter value)</td><td>Parameter entry is supported.</td><td>contains (contain)<br>ncontains (do not contain)<br>len_eq (length equals to)<br>len_gt (length is greater than)<br>len_lt (length is less than)<br>strprefix (prefix matching)<br>strsuffix (suffix matching)<br>rematch (regular expression matching)</td><td>Enter the content with a maximum of 512 characters.</td></tr><tr><td>CAPTCHA_RISK (CAPTCHA risk)</td><td>Parameters are not supported.</td><td>eq (equal to)<br>neq (not equal to)<br>belong (belongs to)<br>not_belong (does not belong to)<br>null (does not exist)<br>exist (exists)</td><td>Enter risk level value, supporting numerical range 0-255</td></tr><tr><td>CAPTCHA_DEVICE_RISK (CAPTCHA device risk)</td><td>Parameters are not supported.</td><td>eq (equal to)<br>neq (not equal to)<br>belong (belongs to)<br>not_belong (does not belong to)<br>null (does not exist)<br>exist (exists)</td><td>Enter device risk code, supporting values: 101, 201, 301, 401, 501, 601, 701</td></tr><tr><td>CAPTCHAR_SCORE (CAPTCHA risk assessment score)</td><td>Parameters are not supported.</td><td>numeq (numerically equal to)<br>numgt (numerically greater than)<br>numlt (numerically less than)<br>numle (numerically less than or equal to)<br>numge (numerically greater than or equal to)<br>null (does not exist)<br>exist (exists)</td><td>Enter assessment score, supporting numerical range 0-100</td></tr></tbody></table>
  *           	  Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/waf_custom_rule#field WafCustomRule#field}
  */
  readonly field: string;
}

export function wafCustomRuleStrategiesToTerraform(struct?: WafCustomRuleStrategies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arg: cdktf.stringToTerraform(struct!.arg),
    case_not_sensitive: cdktf.numberToTerraform(struct!.caseNotSensitive),
    compare_func: cdktf.stringToTerraform(struct!.compareFunc),
    content: cdktf.stringToTerraform(struct!.content),
    field: cdktf.stringToTerraform(struct!.field),
  }
}


export function wafCustomRuleStrategiesToHclTerraform(struct?: WafCustomRuleStrategies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arg: {
      value: cdktf.stringToHclTerraform(struct!.arg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    case_not_sensitive: {
      value: cdktf.numberToHclTerraform(struct!.caseNotSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compare_func: {
      value: cdktf.stringToHclTerraform(struct!.compareFunc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafCustomRuleStrategiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafCustomRuleStrategies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arg !== undefined) {
      hasAnyValues = true;
      internalValueResult.arg = this._arg;
    }
    if (this._caseNotSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseNotSensitive = this._caseNotSensitive;
    }
    if (this._compareFunc !== undefined) {
      hasAnyValues = true;
      internalValueResult.compareFunc = this._compareFunc;
    }
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafCustomRuleStrategies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arg = undefined;
      this._caseNotSensitive = undefined;
      this._compareFunc = undefined;
      this._content = undefined;
      this._field = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arg = value.arg;
      this._caseNotSensitive = value.caseNotSensitive;
      this._compareFunc = value.compareFunc;
      this._content = value.content;
      this._field = value.field;
    }
  }

  // arg - computed: false, optional: false, required: true
  private _arg?: string; 
  public get arg() {
    return this.getStringAttribute('arg');
  }
  public set arg(value: string) {
    this._arg = value;
  }
  // Temporarily expose input value. Use with caution.
  public get argInput() {
    return this._arg;
  }

  // case_not_sensitive - computed: false, optional: true, required: false
  private _caseNotSensitive?: number; 
  public get caseNotSensitive() {
    return this.getNumberAttribute('case_not_sensitive');
  }
  public set caseNotSensitive(value: number) {
    this._caseNotSensitive = value;
  }
  public resetCaseNotSensitive() {
    this._caseNotSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseNotSensitiveInput() {
    return this._caseNotSensitive;
  }

  // compare_func - computed: false, optional: false, required: true
  private _compareFunc?: string; 
  public get compareFunc() {
    return this.getStringAttribute('compare_func');
  }
  public set compareFunc(value: string) {
    this._compareFunc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compareFuncInput() {
    return this._compareFunc;
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

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }
}

export class WafCustomRuleStrategiesList extends cdktf.ComplexList {
  public internalValue? : WafCustomRuleStrategies[] | cdktf.IResolvable

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
  public get(index: number): WafCustomRuleStrategiesOutputReference {
    return new WafCustomRuleStrategiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/waf_custom_rule tencentcloud_waf_custom_rule}
*/
export class WafCustomRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_waf_custom_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WafCustomRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WafCustomRule to import
  * @param importFromId The id of the existing WafCustomRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/waf_custom_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WafCustomRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_waf_custom_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/waf_custom_rule tencentcloud_waf_custom_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafCustomRuleConfig
  */
  public constructor(scope: Construct, id: string, config: WafCustomRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_waf_custom_rule',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actionType = config.actionType;
    this._domain = config.domain;
    this._expireTime = config.expireTime;
    this._id = config.id;
    this._jobType = config.jobType;
    this._name = config.name;
    this._redirect = config.redirect;
    this._sortId = config.sortId;
    this._status = config.status;
    this._jobDateTime.internalValue = config.jobDateTime;
    this._strategies.internalValue = config.strategies;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_type - computed: false, optional: false, required: true
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // expire_time - computed: false, optional: false, required: true
  private _expireTime?: string; 
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }
  public set expireTime(value: string) {
    this._expireTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expireTimeInput() {
    return this._expireTime;
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

  // job_type - computed: true, optional: true, required: false
  private _jobType?: string; 
  public get jobType() {
    return this.getStringAttribute('job_type');
  }
  public set jobType(value: string) {
    this._jobType = value;
  }
  public resetJobType() {
    this._jobType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTypeInput() {
    return this._jobType;
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

  // redirect - computed: false, optional: true, required: false
  private _redirect?: string; 
  public get redirect() {
    return this.getStringAttribute('redirect');
  }
  public set redirect(value: string) {
    this._redirect = value;
  }
  public resetRedirect() {
    this._redirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect;
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // sort_id - computed: false, optional: false, required: true
  private _sortId?: string; 
  public get sortId() {
    return this.getStringAttribute('sort_id');
  }
  public set sortId(value: string) {
    this._sortId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sortIdInput() {
    return this._sortId;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // job_date_time - computed: false, optional: true, required: false
  private _jobDateTime = new WafCustomRuleJobDateTimeOutputReference(this, "job_date_time");
  public get jobDateTime() {
    return this._jobDateTime;
  }
  public putJobDateTime(value: WafCustomRuleJobDateTime) {
    this._jobDateTime.internalValue = value;
  }
  public resetJobDateTime() {
    this._jobDateTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobDateTimeInput() {
    return this._jobDateTime.internalValue;
  }

  // strategies - computed: false, optional: false, required: true
  private _strategies = new WafCustomRuleStrategiesList(this, "strategies", false);
  public get strategies() {
    return this._strategies;
  }
  public putStrategies(value: WafCustomRuleStrategies[] | cdktf.IResolvable) {
    this._strategies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategiesInput() {
    return this._strategies.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_type: cdktf.stringToTerraform(this._actionType),
      domain: cdktf.stringToTerraform(this._domain),
      expire_time: cdktf.stringToTerraform(this._expireTime),
      id: cdktf.stringToTerraform(this._id),
      job_type: cdktf.stringToTerraform(this._jobType),
      name: cdktf.stringToTerraform(this._name),
      redirect: cdktf.stringToTerraform(this._redirect),
      sort_id: cdktf.stringToTerraform(this._sortId),
      status: cdktf.stringToTerraform(this._status),
      job_date_time: wafCustomRuleJobDateTimeToTerraform(this._jobDateTime.internalValue),
      strategies: cdktf.listMapper(wafCustomRuleStrategiesToTerraform, true)(this._strategies.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_type: {
        value: cdktf.stringToHclTerraform(this._actionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expire_time: {
        value: cdktf.stringToHclTerraform(this._expireTime),
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
      job_type: {
        value: cdktf.stringToHclTerraform(this._jobType),
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
      redirect: {
        value: cdktf.stringToHclTerraform(this._redirect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_id: {
        value: cdktf.stringToHclTerraform(this._sortId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_date_time: {
        value: wafCustomRuleJobDateTimeToHclTerraform(this._jobDateTime.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WafCustomRuleJobDateTimeList",
      },
      strategies: {
        value: cdktf.listMapperHcl(wafCustomRuleStrategiesToHclTerraform, true)(this._strategies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WafCustomRuleStrategiesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
