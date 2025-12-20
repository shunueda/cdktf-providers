// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_owasp_white_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafOwaspWhiteRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_owasp_white_rule#domain WafOwaspWhiteRule#domain}
  */
  readonly domain: string;
  /**
  * If the JobDateTime field is not set, this field is used. 0 means permanent, other values indicate the cutoff time for scheduled effect (unit: seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_owasp_white_rule#expire_time WafOwaspWhiteRule#expire_time}
  */
  readonly expireTime: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_owasp_white_rule#id WafOwaspWhiteRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID list of allowlisted rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_owasp_white_rule#ids WafOwaspWhiteRule#ids}
  */
  readonly ids: number[];
  /**
  * Rule execution mode: TimedJob indicates scheduled execution. CronJob indicates periodic execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_owasp_white_rule#job_type WafOwaspWhiteRule#job_type}
  */
  readonly jobType: string;
  /**
  * Rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_owasp_white_rule#name WafOwaspWhiteRule#name}
  */
  readonly name: string;
  /**
  * Rule status. valid values: 0 (disabled), 1 (enabled). enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_owasp_white_rule#status WafOwaspWhiteRule#status}
  */
  readonly status?: number;
  /**
  * Allowlist type. valid values: 0 (allowlisting by specific rule ID), 1 (allowlisting by rule type).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_owasp_white_rule#type WafOwaspWhiteRule#type}
  */
  readonly type: number;
  /**
  * job_date_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_owasp_white_rule#job_date_time WafOwaspWhiteRule#job_date_time}
  */
  readonly jobDateTime: WafOwaspWhiteRuleJobDateTime;
  /**
  * strategies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_owasp_white_rule#strategies WafOwaspWhiteRule#strategies}
  */
  readonly strategies: WafOwaspWhiteRuleStrategies[] | cdktf.IResolvable;
}
export interface WafOwaspWhiteRuleJobDateTimeCron {
  /**
  * Execution day of each month.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_owasp_white_rule#days WafOwaspWhiteRule#days}
  */
  readonly days?: number[];
  /**
  * End time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_owasp_white_rule#end_time WafOwaspWhiteRule#end_time}
  */
  readonly endTime?: string;
  /**
  * Start time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_owasp_white_rule#start_time WafOwaspWhiteRule#start_time}
  */
  readonly startTime?: string;
  /**
  * Execution day of each week.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_owasp_white_rule#w_days WafOwaspWhiteRule#w_days}
  */
  readonly wDays?: number[];
}

export function wafOwaspWhiteRuleJobDateTimeCronToTerraform(struct?: WafOwaspWhiteRuleJobDateTimeCron | cdktf.IResolvable): any {
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


export function wafOwaspWhiteRuleJobDateTimeCronToHclTerraform(struct?: WafOwaspWhiteRuleJobDateTimeCron | cdktf.IResolvable): any {
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

export class WafOwaspWhiteRuleJobDateTimeCronOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafOwaspWhiteRuleJobDateTimeCron | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WafOwaspWhiteRuleJobDateTimeCron | cdktf.IResolvable | undefined) {
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

export class WafOwaspWhiteRuleJobDateTimeCronList extends cdktf.ComplexList {
  public internalValue? : WafOwaspWhiteRuleJobDateTimeCron[] | cdktf.IResolvable

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
  public get(index: number): WafOwaspWhiteRuleJobDateTimeCronOutputReference {
    return new WafOwaspWhiteRuleJobDateTimeCronOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafOwaspWhiteRuleJobDateTimeTimed {
  /**
  * End timestamp, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_owasp_white_rule#end_date_time WafOwaspWhiteRule#end_date_time}
  */
  readonly endDateTime?: number;
  /**
  * Start timestamp, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_owasp_white_rule#start_date_time WafOwaspWhiteRule#start_date_time}
  */
  readonly startDateTime?: number;
}

export function wafOwaspWhiteRuleJobDateTimeTimedToTerraform(struct?: WafOwaspWhiteRuleJobDateTimeTimed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_date_time: cdktf.numberToTerraform(struct!.endDateTime),
    start_date_time: cdktf.numberToTerraform(struct!.startDateTime),
  }
}


export function wafOwaspWhiteRuleJobDateTimeTimedToHclTerraform(struct?: WafOwaspWhiteRuleJobDateTimeTimed | cdktf.IResolvable): any {
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

export class WafOwaspWhiteRuleJobDateTimeTimedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafOwaspWhiteRuleJobDateTimeTimed | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WafOwaspWhiteRuleJobDateTimeTimed | cdktf.IResolvable | undefined) {
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

export class WafOwaspWhiteRuleJobDateTimeTimedList extends cdktf.ComplexList {
  public internalValue? : WafOwaspWhiteRuleJobDateTimeTimed[] | cdktf.IResolvable

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
  public get(index: number): WafOwaspWhiteRuleJobDateTimeTimedOutputReference {
    return new WafOwaspWhiteRuleJobDateTimeTimedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafOwaspWhiteRuleJobDateTime {
  /**
  * Specifies the time zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_owasp_white_rule#time_t_zone WafOwaspWhiteRule#time_t_zone}
  */
  readonly timeTZone?: string;
  /**
  * cron block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_owasp_white_rule#cron WafOwaspWhiteRule#cron}
  */
  readonly cron?: WafOwaspWhiteRuleJobDateTimeCron[] | cdktf.IResolvable;
  /**
  * timed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_owasp_white_rule#timed WafOwaspWhiteRule#timed}
  */
  readonly timed?: WafOwaspWhiteRuleJobDateTimeTimed[] | cdktf.IResolvable;
}

export function wafOwaspWhiteRuleJobDateTimeToTerraform(struct?: WafOwaspWhiteRuleJobDateTimeOutputReference | WafOwaspWhiteRuleJobDateTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_t_zone: cdktf.stringToTerraform(struct!.timeTZone),
    cron: cdktf.listMapper(wafOwaspWhiteRuleJobDateTimeCronToTerraform, true)(struct!.cron),
    timed: cdktf.listMapper(wafOwaspWhiteRuleJobDateTimeTimedToTerraform, true)(struct!.timed),
  }
}


export function wafOwaspWhiteRuleJobDateTimeToHclTerraform(struct?: WafOwaspWhiteRuleJobDateTimeOutputReference | WafOwaspWhiteRuleJobDateTime): any {
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
      value: cdktf.listMapperHcl(wafOwaspWhiteRuleJobDateTimeCronToHclTerraform, true)(struct!.cron),
      isBlock: true,
      type: "list",
      storageClassType: "WafOwaspWhiteRuleJobDateTimeCronList",
    },
    timed: {
      value: cdktf.listMapperHcl(wafOwaspWhiteRuleJobDateTimeTimedToHclTerraform, true)(struct!.timed),
      isBlock: true,
      type: "list",
      storageClassType: "WafOwaspWhiteRuleJobDateTimeTimedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafOwaspWhiteRuleJobDateTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WafOwaspWhiteRuleJobDateTime | undefined {
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

  public set internalValue(value: WafOwaspWhiteRuleJobDateTime | undefined) {
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
  private _cron = new WafOwaspWhiteRuleJobDateTimeCronList(this, "cron", false);
  public get cron() {
    return this._cron;
  }
  public putCron(value: WafOwaspWhiteRuleJobDateTimeCron[] | cdktf.IResolvable) {
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
  private _timed = new WafOwaspWhiteRuleJobDateTimeTimedList(this, "timed", false);
  public get timed() {
    return this._timed;
  }
  public putTimed(value: WafOwaspWhiteRuleJobDateTimeTimed[] | cdktf.IResolvable) {
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
export interface WafOwaspWhiteRuleStrategies {
  /**
  * Specifies the matching parameter.
  * 
  * Configuration parameters are divided into two data types: parameter not supported and support parameters.
  * When the match field is one of the following four, the matching parameter can be entered, otherwise not supported.
  * GET (get parameter value).		
  * POST (post parameter value).		
  * ARGS_COOKIE (COOKIE parameter value).		
  * ARGS_HEADER (HEADER parameter value).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_owasp_white_rule#arg WafOwaspWhiteRule#arg}
  */
  readonly arg: string;
  /**
  * Case-Sensitive.
  * Case-Insensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_owasp_white_rule#case_not_sensitive WafOwaspWhiteRule#case_not_sensitive}
  */
  readonly caseNotSensitive?: number;
  /**
  * Specifies the logic symbol. 
  * 
  * Logical symbols are divided into the following types:.
  * Empty (content is empty).
  * null (not found).
  * Eq (equal to).
  * neq (not equal to).
  * contains (contain).
  * ncontains (do not contain).
  * strprefix (prefix matching).
  * strsuffix (suffix matching).
  * Len_eq (length equals to).
  * Len_gt (length greater than).
  * Len_lt (length less than).
  * ipmatch (belong).
  * ipnmatch (not_in).
  * numgt (value greater than).
  * NumValue smaller than].
  * Value equal to.
  * numneq (value not equal to).
  * numle (less than or equal to).
  * numge (value is greater than or equal to).
  * geo_in (IP geographic belong).
  * geo_not_in (IP geographic not_in).
  * Specifies different logical operators for matching fields. for details, see the matching field table above.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_owasp_white_rule#compare_func WafOwaspWhiteRule#compare_func}
  */
  readonly compareFunc: string;
  /**
  * Specifies the match content.
  * 
  * Currently, when the match field is COOKIE (COOKIE), match content is not required. all others are needed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_owasp_white_rule#content WafOwaspWhiteRule#content}
  */
  readonly content: string;
  /**
  * Specifies the matching field.
  * 
  * Different matching fields result in different matching parameters, logical operators, and matching contents. the details are as follows:.
  * <table><thead><tr><th>Matching Field</th> <th>Matching Parameter</th> <th>Logical Symbol</th> <th>Matching Content</th></tr></thead> <tbody><tr><td>IP (source IP)</td> <td>Parameters are not supported.</td> <td>ipmatch (match)<br/>ipnmatch (mismatch)</td> <td>Multiple IP addresses are separated by commas. A maximum of 20 IP addresses are allowed.</td></tr> <tr><td>IPv6 (source IPv6)</td> <td>Parameters are not supported.</td> <td>ipmatch (match)<br/>ipnmatch (mismatch)</td> <td>A single IPv6 address is supported.</td></tr> <tr><td>Referer (referer)</td> <td>Parameters are not supported.</td> <td>empty (Content is empty.)<br/>null (do not exist)<br/>eq (equal to)<br/>neq (not equal to)<br/>contains (contain)<br/>ncontains (do not contain)<br/>len_eq (length equals to)<br/>len_gt (length is greater than)<br/>len_lt (length is less than)<br/>strprefix (prefix matching)<br/>strsuffix (suffix matching)<br/>rematch (regular expression matching)</td> <td>Enter the content, with a maximum of 512 characters.</td></tr> <tr><td>URL (request path)</td> <td>Parameters are not supported.</td> <td>eq (equal to)<br/>neq (not equal to)<br/>contains (contain)<br/>ncontains (do not contain)<br/>len_eq (length equals to)<br/>len_gt (length is greater than)<br/>len_lt (length is 
  *  less than)<br/>strprefix (prefix matching)<br/>strsuffix (suffix matching)<br/>rematch (regular expression matching)</td> <td>Enter the content starting with /, with a maximum of 512 characters.</td></tr> <tr><td>UserAgent (UserAgent)</td> <td>Parameters are not supported.</td><td>Same logical symbols as the matching field <font color="Red">Referer</font></td> <td>Enter the content with a maximum of 512 characters.</td></tr> <tr><td>HTTP_METHOD (HTTP request method)</td> <td>Parameters are not supported.</td> <td>eq (equal to)<br/>neq (not equal to)</td> <td>Enter the method name. The uppercase is recommended.</td></tr> <tr><td>QUERY_STRING (request string)</td> <td>Parameters are not supported.</td> <td>Same logical symbol as the matching field <font color="Red">Request Path</font></td><td>Enter the content with a maximum of 512 characters.</td></tr> <tr><td>GET (GET parameter value)</td> <td>Parameter entry is supported.</td> <td>contains (contain)<br/>ncontains (do not contain)<br/>len_eq (length equals to)<br/>len_gt (length is greater than)<br/>len_lt (length is less than)<br/>strprefix (prefix matching)<br/>strsuffix (suffix matching)</td> <td>Enter the content with a maximum of 512 characters.</td></tr> <tr><td>GET_PARAMS_NAMES (GET parameter name)</td> <td>Parameters are not supported.</td> <td>exist (Parameter exists.)<br/>nexist (Parameter does not exist.)<br/>len_eq (length equals to)<br/>len_gt (length is greater than)<br/>len_lt (length is less than)<br/>strprefix (prefix matching)<br/>strsuffix (suffix matching)</td><td>Enter the content with a maximum of 512 characters.</td></tr> <tr><td>POST (POST parameter value)</td> <td>Parameter entry is supported.</td> <td>Same logical symbol as the matching field <font color="Red">GET Parameter Value</font></td> <td>Enter the content with a maximum of 512 characters.</td></tr> <tr><td>GET_POST_NAMES (POST parameter name)</td> <td>Parameters are not supported.</td> <td>Same logical symbol as the matching field <font color="Red">GET Parameter Name</font></td> <td>Enter the content with a maximum of 512 characters.</td></tr> <tr><td>POST_BODY (complete body)</td> <td>Parameters are not supported.</td> <td>Same logical symbol as the matching field <font color="Red">Request Path</font></td><td>Enter the body content with a maximum of 512 characters.</td></tr> <tr><td>COOKIE (cookie)</td> <td>Parameters are not supported.</td> <td>empty (Content is empty.)<br/>null (do not exist)<br/>rematch (regular expression matching)</td> <td><font color="Red">Unsupported currently</font></td></tr> <tr><td>GET_COOKIES_NAMES (cookie parameter name)</td> <td>Parameters are not supported.</td> <td>Same logical symbol as the matching field <font color="Red">GET Parameter Name</font></td> <td>Enter the content with a maximum of 512 characters.</td></tr> <tr><td>ARGS_COOKIE (cookie parameter value)</td> <td>Parameter entry is supported.</td> <td>Same logical symbol as the matching field <font color="Red">GET Parameter Value</font></td> <td>Enter the content512 characters limit</td></tr><tr><td>GET_HEADERS_NAMES (Header parameter name)</td><td>parameter not supported</td><td>exsit (parameter exists)<br/>nexsit (parameter does not exist)<br/>len_eq (LENGTH equal)<br/>len_gt (LENGTH greater than)<br/>len_lt (LENGTH less than)<br/>strprefix (prefix match)<br/>strsuffix (suffix matching)<br/>rematch (regular expression matching)</td><td>enter CONTENT, lowercase is recommended, up to 512 characters</td></tr><tr><td>ARGS_Header (Header parameter value)</td><td>support parameter entry</td><td>contains (include)<br/>ncontains (does not include)<br/>len_eq (LENGTH equal)<br/>len_gt (LENGTH greater than)<br/>len_lt (LENGTH less than)<br/>strprefix (prefix match)<br/>strsuffix (suffix matching)<br/>rematch (regular expression matching)</td><td>enter CONTENT, up to 512 characters</td></tr><tr><td>CONTENT_LENGTH (CONTENT-LENGTH)</td><td>support parameter entry</td><td>numgt (value greater than)<br/>numlt (value smaller than)<br/>numeq (value equal to)<br/></td><td>enter an integer between 0-9999999999999</td></tr><tr><td>IP_GEO (source IP geolocation)</td><td>support parameter entry</td><td>GEO_in (belong)<br/>GEO_not_in (not_in)<br/></td><td>enter CONTENT, up to 10240 characters, format: serialized JSON, format: [{"Country":"china","Region":"guangdong","City":"shenzhen"}]</td></tr><tr><td>CAPTCHA_RISK (CAPTCHA RISK)</td><td>parameter not supported</td><td>eq (equal)<br/>neq (not equal to)<br/>belong (belong)<br/>not_belong (not belong to)<br/>null (nonexistent)<br/>exist (exist)</td><td>enter RISK level value, value range 0-255</td></tr><tr><td>CAPTCHA_DEVICE_RISK (CAPTCHA DEVICE RISK)</td><td>parameter not supported</td><td>eq (equal)<br/>neq (not equal to)<br/>belong (belong)<br/>not_belong (not belong to)<br/>null (nonexistent)<br/>exist (exist)</td><td>enter DEVICE RISK code, valid values: 101, 201, 301, 401, 501, 601, 701</td></tr><tr><td>CAPTCHAR_SCORE (CAPTCHA RISK assessment SCORE)</td><td>parameter not supported</td><td>numeq (value equal to)<br/>numgt (value greater than)<br/>numlt (value smaller than)<br/>numle (less than or equal to)<br/>numge (value is greater than or equal to)<br/>null (nonexistent)<br/>exist (exist)</td><td>enter assessment SCORE, value range 0-100</td></tr>.
  * </tbody></table>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_owasp_white_rule#field WafOwaspWhiteRule#field}
  */
  readonly field: string;
}

export function wafOwaspWhiteRuleStrategiesToTerraform(struct?: WafOwaspWhiteRuleStrategies | cdktf.IResolvable): any {
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


export function wafOwaspWhiteRuleStrategiesToHclTerraform(struct?: WafOwaspWhiteRuleStrategies | cdktf.IResolvable): any {
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

export class WafOwaspWhiteRuleStrategiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafOwaspWhiteRuleStrategies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WafOwaspWhiteRuleStrategies | cdktf.IResolvable | undefined) {
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

export class WafOwaspWhiteRuleStrategiesList extends cdktf.ComplexList {
  public internalValue? : WafOwaspWhiteRuleStrategies[] | cdktf.IResolvable

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
  public get(index: number): WafOwaspWhiteRuleStrategiesOutputReference {
    return new WafOwaspWhiteRuleStrategiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_owasp_white_rule tencentcloud_waf_owasp_white_rule}
*/
export class WafOwaspWhiteRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_waf_owasp_white_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WafOwaspWhiteRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WafOwaspWhiteRule to import
  * @param importFromId The id of the existing WafOwaspWhiteRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_owasp_white_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WafOwaspWhiteRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_waf_owasp_white_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_owasp_white_rule tencentcloud_waf_owasp_white_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafOwaspWhiteRuleConfig
  */
  public constructor(scope: Construct, id: string, config: WafOwaspWhiteRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_waf_owasp_white_rule',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domain = config.domain;
    this._expireTime = config.expireTime;
    this._id = config.id;
    this._ids = config.ids;
    this._jobType = config.jobType;
    this._name = config.name;
    this._status = config.status;
    this._type = config.type;
    this._jobDateTime.internalValue = config.jobDateTime;
    this._strategies.internalValue = config.strategies;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _expireTime?: number; 
  public get expireTime() {
    return this.getNumberAttribute('expire_time');
  }
  public set expireTime(value: number) {
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

  // ids - computed: false, optional: false, required: true
  private _ids?: number[]; 
  public get ids() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('ids')));
  }
  public set ids(value: number[]) {
    this._ids = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // job_type - computed: false, optional: false, required: true
  private _jobType?: string; 
  public get jobType() {
    return this.getStringAttribute('job_type');
  }
  public set jobType(value: string) {
    this._jobType = value;
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

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getNumberAttribute('rule_id');
  }

  // status - computed: true, optional: true, required: false
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // type - computed: false, optional: false, required: true
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // job_date_time - computed: false, optional: false, required: true
  private _jobDateTime = new WafOwaspWhiteRuleJobDateTimeOutputReference(this, "job_date_time");
  public get jobDateTime() {
    return this._jobDateTime;
  }
  public putJobDateTime(value: WafOwaspWhiteRuleJobDateTime) {
    this._jobDateTime.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobDateTimeInput() {
    return this._jobDateTime.internalValue;
  }

  // strategies - computed: false, optional: false, required: true
  private _strategies = new WafOwaspWhiteRuleStrategiesList(this, "strategies", false);
  public get strategies() {
    return this._strategies;
  }
  public putStrategies(value: WafOwaspWhiteRuleStrategies[] | cdktf.IResolvable) {
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
      domain: cdktf.stringToTerraform(this._domain),
      expire_time: cdktf.numberToTerraform(this._expireTime),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._ids),
      job_type: cdktf.stringToTerraform(this._jobType),
      name: cdktf.stringToTerraform(this._name),
      status: cdktf.numberToTerraform(this._status),
      type: cdktf.numberToTerraform(this._type),
      job_date_time: wafOwaspWhiteRuleJobDateTimeToTerraform(this._jobDateTime.internalValue),
      strategies: cdktf.listMapper(wafOwaspWhiteRuleStrategiesToTerraform, true)(this._strategies.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expire_time: {
        value: cdktf.numberToHclTerraform(this._expireTime),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
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
      status: {
        value: cdktf.numberToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.numberToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      job_date_time: {
        value: wafOwaspWhiteRuleJobDateTimeToHclTerraform(this._jobDateTime.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WafOwaspWhiteRuleJobDateTimeList",
      },
      strategies: {
        value: cdktf.listMapperHcl(wafOwaspWhiteRuleStrategiesToHclTerraform, true)(this._strategies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WafOwaspWhiteRuleStrategiesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
