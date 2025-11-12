// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_scheduling_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutomationSchedulingRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_scheduling_rule#business_calendar AutomationSchedulingRule#business_calendar}
  */
  readonly businessCalendar?: string;
  /**
  * An optional description for the scheduling rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_scheduling_rule#description AutomationSchedulingRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_scheduling_rule#id AutomationSchedulingRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The title / name of the scheduling rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_scheduling_rule#title AutomationSchedulingRule#title}
  */
  readonly title: string;
  /**
  * fixed_offset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_scheduling_rule#fixed_offset AutomationSchedulingRule#fixed_offset}
  */
  readonly fixedOffset?: AutomationSchedulingRuleFixedOffset;
  /**
  * grouping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_scheduling_rule#grouping AutomationSchedulingRule#grouping}
  */
  readonly grouping?: AutomationSchedulingRuleGrouping;
  /**
  * recurrence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_scheduling_rule#recurrence AutomationSchedulingRule#recurrence}
  */
  readonly recurrence?: AutomationSchedulingRuleRecurrence;
  /**
  * relative_offset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_scheduling_rule#relative_offset AutomationSchedulingRule#relative_offset}
  */
  readonly relativeOffset?: AutomationSchedulingRuleRelativeOffset;
}
export interface AutomationSchedulingRuleFixedOffset {
  /**
  * Every day of the scheduling rule referred to with `rule` will be offset by this amount of days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_scheduling_rule#offset AutomationSchedulingRule#offset}
  */
  readonly offset: number;
  /**
  * Refers to a scheduling rule for which to produce valid days with an offset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_scheduling_rule#rule AutomationSchedulingRule#rule}
  */
  readonly rule: string;
}

export function automationSchedulingRuleFixedOffsetToTerraform(struct?: AutomationSchedulingRuleFixedOffsetOutputReference | AutomationSchedulingRuleFixedOffset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    offset: cdktf.numberToTerraform(struct!.offset),
    rule: cdktf.stringToTerraform(struct!.rule),
  }
}


export function automationSchedulingRuleFixedOffsetToHclTerraform(struct?: AutomationSchedulingRuleFixedOffsetOutputReference | AutomationSchedulingRuleFixedOffset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    offset: {
      value: cdktf.numberToHclTerraform(struct!.offset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule: {
      value: cdktf.stringToHclTerraform(struct!.rule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationSchedulingRuleFixedOffsetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomationSchedulingRuleFixedOffset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._offset !== undefined) {
      hasAnyValues = true;
      internalValueResult.offset = this._offset;
    }
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationSchedulingRuleFixedOffset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._offset = undefined;
      this._rule = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._offset = value.offset;
      this._rule = value.rule;
    }
  }

  // offset - computed: false, optional: false, required: true
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // rule - computed: false, optional: false, required: true
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }
}
export interface AutomationSchedulingRuleGrouping {
  /**
  * The IDs of scheduling rules determining the days the schedule should apply to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_scheduling_rule#combine AutomationSchedulingRule#combine}
  */
  readonly combine: string[];
  /**
  * The IDs of scheduling rules determining the days the schedule is allowed apply to. If specified, only days that are covered by `combine` and `intersect` are valid days for the schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_scheduling_rule#intersect AutomationSchedulingRule#intersect}
  */
  readonly intersect?: string[];
  /**
  * The IDs of scheduling rules determing the days the schedule must not apply. If specified it reduces down the set of days covered by `combine` and `intersect`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_scheduling_rule#subtract AutomationSchedulingRule#subtract}
  */
  readonly subtract?: string[];
}

export function automationSchedulingRuleGroupingToTerraform(struct?: AutomationSchedulingRuleGroupingOutputReference | AutomationSchedulingRuleGrouping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    combine: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.combine),
    intersect: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.intersect),
    subtract: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subtract),
  }
}


export function automationSchedulingRuleGroupingToHclTerraform(struct?: AutomationSchedulingRuleGroupingOutputReference | AutomationSchedulingRuleGrouping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    combine: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.combine),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    intersect: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.intersect),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subtract: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subtract),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationSchedulingRuleGroupingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomationSchedulingRuleGrouping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._combine !== undefined) {
      hasAnyValues = true;
      internalValueResult.combine = this._combine;
    }
    if (this._intersect !== undefined) {
      hasAnyValues = true;
      internalValueResult.intersect = this._intersect;
    }
    if (this._subtract !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtract = this._subtract;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationSchedulingRuleGrouping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._combine = undefined;
      this._intersect = undefined;
      this._subtract = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._combine = value.combine;
      this._intersect = value.intersect;
      this._subtract = value.subtract;
    }
  }

  // combine - computed: false, optional: false, required: true
  private _combine?: string[]; 
  public get combine() {
    return cdktf.Fn.tolist(this.getListAttribute('combine'));
  }
  public set combine(value: string[]) {
    this._combine = value;
  }
  // Temporarily expose input value. Use with caution.
  public get combineInput() {
    return this._combine;
  }

  // intersect - computed: false, optional: true, required: false
  private _intersect?: string[]; 
  public get intersect() {
    return cdktf.Fn.tolist(this.getListAttribute('intersect'));
  }
  public set intersect(value: string[]) {
    this._intersect = value;
  }
  public resetIntersect() {
    this._intersect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intersectInput() {
    return this._intersect;
  }

  // subtract - computed: false, optional: true, required: false
  private _subtract?: string[]; 
  public get subtract() {
    return cdktf.Fn.tolist(this.getListAttribute('subtract'));
  }
  public set subtract(value: string[]) {
    this._subtract = value;
  }
  public resetSubtract() {
    this._subtract = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtractInput() {
    return this._subtract;
  }
}
export interface AutomationSchedulingRuleRecurrence {
  /**
  * The recurrence start. Example: `2017-07-04` represents July 4th 2017
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_scheduling_rule#datestart AutomationSchedulingRule#datestart}
  */
  readonly datestart: string;
  /**
  * Restricts the recurrence to specific days within a month. `1`, `2`, `3`, ... refers to the first, second, third day in the month. You can also specify negative values to refer to values relative to the last day. `-1` refers to the last day, `-2` refers to the second to the last day, ...
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_scheduling_rule#days_in_month AutomationSchedulingRule#days_in_month}
  */
  readonly daysInMonth?: number[];
  /**
  * Restricts the recurrence to specific days within a year. `1`, `2`, `3`, ... refers to the first, second, third day of the year. You can also specify negative values to refer to values relative to the last day. `-1` refers to the last day, `-2` refers to the second to the last day, ...
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_scheduling_rule#days_in_year AutomationSchedulingRule#days_in_year}
  */
  readonly daysInYear?: number[];
  /**
  * Restricts the recurrence to specific days relative to Easter Sunday. `0` will yield the Easter Sunday itself
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_scheduling_rule#easter AutomationSchedulingRule#easter}
  */
  readonly easter?: number[];
  /**
  * Possible values are `YEARLY`, `MONTHLY`, `WEEKLY`, `DAILY`, `HOURLY`, `MINUTELY` and `SECONDLY`. Example: `frequency` = `DAILY` and `interval` = `2` schedules for every other day
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_scheduling_rule#frequency AutomationSchedulingRule#frequency}
  */
  readonly frequency: string;
  /**
  * The interval between each iteration. Default: 1. Example: `frequency` = `DAILY` and `interval` = `2` schedules for every other day
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_scheduling_rule#interval AutomationSchedulingRule#interval}
  */
  readonly interval?: number;
  /**
  * Restricts the recurrence to specific months. `1` for `January`, `2` for `February`, ..., `12` for `December`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_scheduling_rule#months AutomationSchedulingRule#months}
  */
  readonly months?: number[];
  /**
  * Restricts the recurrence to specific week days. Possible values are `MO`, `TU`, `WE`, `TH`, `FR`, `SA` and `SU`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_scheduling_rule#weekdays AutomationSchedulingRule#weekdays}
  */
  readonly weekdays?: string[];
  /**
  * Restricts the recurrence to specific weeks within a year. `1`, `2`, `3`, ... refers to the first, second, third week of the year. You can also specify negative values to refer to values relative to the last week. `-1` refers to the last week, `-2` refers to the second to the last week, ...
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_scheduling_rule#weeks AutomationSchedulingRule#weeks}
  */
  readonly weeks?: number[];
  /**
  * Possible values are `WORKING` (Work days), `HOLIDAYS` (Holidays) and `OFF` (Weekends + Holidays)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_scheduling_rule#workdays AutomationSchedulingRule#workdays}
  */
  readonly workdays: string;
}

export function automationSchedulingRuleRecurrenceToTerraform(struct?: AutomationSchedulingRuleRecurrenceOutputReference | AutomationSchedulingRuleRecurrence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datestart: cdktf.stringToTerraform(struct!.datestart),
    days_in_month: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.daysInMonth),
    days_in_year: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.daysInYear),
    easter: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.easter),
    frequency: cdktf.stringToTerraform(struct!.frequency),
    interval: cdktf.numberToTerraform(struct!.interval),
    months: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.months),
    weekdays: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.weekdays),
    weeks: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.weeks),
    workdays: cdktf.stringToTerraform(struct!.workdays),
  }
}


export function automationSchedulingRuleRecurrenceToHclTerraform(struct?: AutomationSchedulingRuleRecurrenceOutputReference | AutomationSchedulingRuleRecurrence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datestart: {
      value: cdktf.stringToHclTerraform(struct!.datestart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    days_in_month: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.daysInMonth),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    days_in_year: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.daysInYear),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    easter: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.easter),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    months: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.months),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    weekdays: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.weekdays),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    weeks: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.weeks),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    workdays: {
      value: cdktf.stringToHclTerraform(struct!.workdays),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationSchedulingRuleRecurrenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomationSchedulingRuleRecurrence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datestart !== undefined) {
      hasAnyValues = true;
      internalValueResult.datestart = this._datestart;
    }
    if (this._daysInMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysInMonth = this._daysInMonth;
    }
    if (this._daysInYear !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysInYear = this._daysInYear;
    }
    if (this._easter !== undefined) {
      hasAnyValues = true;
      internalValueResult.easter = this._easter;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._months !== undefined) {
      hasAnyValues = true;
      internalValueResult.months = this._months;
    }
    if (this._weekdays !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekdays = this._weekdays;
    }
    if (this._weeks !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeks = this._weeks;
    }
    if (this._workdays !== undefined) {
      hasAnyValues = true;
      internalValueResult.workdays = this._workdays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationSchedulingRuleRecurrence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datestart = undefined;
      this._daysInMonth = undefined;
      this._daysInYear = undefined;
      this._easter = undefined;
      this._frequency = undefined;
      this._interval = undefined;
      this._months = undefined;
      this._weekdays = undefined;
      this._weeks = undefined;
      this._workdays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datestart = value.datestart;
      this._daysInMonth = value.daysInMonth;
      this._daysInYear = value.daysInYear;
      this._easter = value.easter;
      this._frequency = value.frequency;
      this._interval = value.interval;
      this._months = value.months;
      this._weekdays = value.weekdays;
      this._weeks = value.weeks;
      this._workdays = value.workdays;
    }
  }

  // datestart - computed: false, optional: false, required: true
  private _datestart?: string; 
  public get datestart() {
    return this.getStringAttribute('datestart');
  }
  public set datestart(value: string) {
    this._datestart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datestartInput() {
    return this._datestart;
  }

  // days_in_month - computed: false, optional: true, required: false
  private _daysInMonth?: number[]; 
  public get daysInMonth() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('days_in_month')));
  }
  public set daysInMonth(value: number[]) {
    this._daysInMonth = value;
  }
  public resetDaysInMonth() {
    this._daysInMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInMonthInput() {
    return this._daysInMonth;
  }

  // days_in_year - computed: false, optional: true, required: false
  private _daysInYear?: number[]; 
  public get daysInYear() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('days_in_year')));
  }
  public set daysInYear(value: number[]) {
    this._daysInYear = value;
  }
  public resetDaysInYear() {
    this._daysInYear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInYearInput() {
    return this._daysInYear;
  }

  // easter - computed: false, optional: true, required: false
  private _easter?: number[]; 
  public get easter() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('easter')));
  }
  public set easter(value: number[]) {
    this._easter = value;
  }
  public resetEaster() {
    this._easter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get easterInput() {
    return this._easter;
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // months - computed: false, optional: true, required: false
  private _months?: number[]; 
  public get months() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('months')));
  }
  public set months(value: number[]) {
    this._months = value;
  }
  public resetMonths() {
    this._months = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthsInput() {
    return this._months;
  }

  // weekdays - computed: false, optional: true, required: false
  private _weekdays?: string[]; 
  public get weekdays() {
    return cdktf.Fn.tolist(this.getListAttribute('weekdays'));
  }
  public set weekdays(value: string[]) {
    this._weekdays = value;
  }
  public resetWeekdays() {
    this._weekdays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdaysInput() {
    return this._weekdays;
  }

  // weeks - computed: false, optional: true, required: false
  private _weeks?: number[]; 
  public get weeks() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('weeks')));
  }
  public set weeks(value: number[]) {
    this._weeks = value;
  }
  public resetWeeks() {
    this._weeks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeksInput() {
    return this._weeks;
  }

  // workdays - computed: false, optional: false, required: true
  private _workdays?: string; 
  public get workdays() {
    return this.getStringAttribute('workdays');
  }
  public set workdays(value: string) {
    this._workdays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workdaysInput() {
    return this._workdays;
  }
}
export interface AutomationSchedulingRuleRelativeOffset {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_scheduling_rule#direction AutomationSchedulingRule#direction}
  */
  readonly direction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_scheduling_rule#source_rule AutomationSchedulingRule#source_rule}
  */
  readonly sourceRule: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_scheduling_rule#target_rule AutomationSchedulingRule#target_rule}
  */
  readonly targetRule: string;
}

export function automationSchedulingRuleRelativeOffsetToTerraform(struct?: AutomationSchedulingRuleRelativeOffsetOutputReference | AutomationSchedulingRuleRelativeOffset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    source_rule: cdktf.stringToTerraform(struct!.sourceRule),
    target_rule: cdktf.stringToTerraform(struct!.targetRule),
  }
}


export function automationSchedulingRuleRelativeOffsetToHclTerraform(struct?: AutomationSchedulingRuleRelativeOffsetOutputReference | AutomationSchedulingRuleRelativeOffset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_rule: {
      value: cdktf.stringToHclTerraform(struct!.sourceRule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_rule: {
      value: cdktf.stringToHclTerraform(struct!.targetRule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationSchedulingRuleRelativeOffsetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomationSchedulingRuleRelativeOffset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._sourceRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceRule = this._sourceRule;
    }
    if (this._targetRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRule = this._targetRule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationSchedulingRuleRelativeOffset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._direction = undefined;
      this._sourceRule = undefined;
      this._targetRule = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._direction = value.direction;
      this._sourceRule = value.sourceRule;
      this._targetRule = value.targetRule;
    }
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // source_rule - computed: false, optional: false, required: true
  private _sourceRule?: string; 
  public get sourceRule() {
    return this.getStringAttribute('source_rule');
  }
  public set sourceRule(value: string) {
    this._sourceRule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRuleInput() {
    return this._sourceRule;
  }

  // target_rule - computed: false, optional: false, required: true
  private _targetRule?: string; 
  public get targetRule() {
    return this.getStringAttribute('target_rule');
  }
  public set targetRule(value: string) {
    this._targetRule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRuleInput() {
    return this._targetRule;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_scheduling_rule dynatrace_automation_scheduling_rule}
*/
export class AutomationSchedulingRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_automation_scheduling_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutomationSchedulingRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutomationSchedulingRule to import
  * @param importFromId The id of the existing AutomationSchedulingRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_scheduling_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutomationSchedulingRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_automation_scheduling_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_scheduling_rule dynatrace_automation_scheduling_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutomationSchedulingRuleConfig
  */
  public constructor(scope: Construct, id: string, config: AutomationSchedulingRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_automation_scheduling_rule',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._businessCalendar = config.businessCalendar;
    this._description = config.description;
    this._id = config.id;
    this._title = config.title;
    this._fixedOffset.internalValue = config.fixedOffset;
    this._grouping.internalValue = config.grouping;
    this._recurrence.internalValue = config.recurrence;
    this._relativeOffset.internalValue = config.relativeOffset;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // business_calendar - computed: false, optional: true, required: false
  private _businessCalendar?: string; 
  public get businessCalendar() {
    return this.getStringAttribute('business_calendar');
  }
  public set businessCalendar(value: string) {
    this._businessCalendar = value;
  }
  public resetBusinessCalendar() {
    this._businessCalendar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessCalendarInput() {
    return this._businessCalendar;
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

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // fixed_offset - computed: false, optional: true, required: false
  private _fixedOffset = new AutomationSchedulingRuleFixedOffsetOutputReference(this, "fixed_offset");
  public get fixedOffset() {
    return this._fixedOffset;
  }
  public putFixedOffset(value: AutomationSchedulingRuleFixedOffset) {
    this._fixedOffset.internalValue = value;
  }
  public resetFixedOffset() {
    this._fixedOffset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedOffsetInput() {
    return this._fixedOffset.internalValue;
  }

  // grouping - computed: false, optional: true, required: false
  private _grouping = new AutomationSchedulingRuleGroupingOutputReference(this, "grouping");
  public get grouping() {
    return this._grouping;
  }
  public putGrouping(value: AutomationSchedulingRuleGrouping) {
    this._grouping.internalValue = value;
  }
  public resetGrouping() {
    this._grouping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupingInput() {
    return this._grouping.internalValue;
  }

  // recurrence - computed: false, optional: true, required: false
  private _recurrence = new AutomationSchedulingRuleRecurrenceOutputReference(this, "recurrence");
  public get recurrence() {
    return this._recurrence;
  }
  public putRecurrence(value: AutomationSchedulingRuleRecurrence) {
    this._recurrence.internalValue = value;
  }
  public resetRecurrence() {
    this._recurrence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceInput() {
    return this._recurrence.internalValue;
  }

  // relative_offset - computed: false, optional: true, required: false
  private _relativeOffset = new AutomationSchedulingRuleRelativeOffsetOutputReference(this, "relative_offset");
  public get relativeOffset() {
    return this._relativeOffset;
  }
  public putRelativeOffset(value: AutomationSchedulingRuleRelativeOffset) {
    this._relativeOffset.internalValue = value;
  }
  public resetRelativeOffset() {
    this._relativeOffset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeOffsetInput() {
    return this._relativeOffset.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      business_calendar: cdktf.stringToTerraform(this._businessCalendar),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      title: cdktf.stringToTerraform(this._title),
      fixed_offset: automationSchedulingRuleFixedOffsetToTerraform(this._fixedOffset.internalValue),
      grouping: automationSchedulingRuleGroupingToTerraform(this._grouping.internalValue),
      recurrence: automationSchedulingRuleRecurrenceToTerraform(this._recurrence.internalValue),
      relative_offset: automationSchedulingRuleRelativeOffsetToTerraform(this._relativeOffset.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      business_calendar: {
        value: cdktf.stringToHclTerraform(this._businessCalendar),
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
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fixed_offset: {
        value: automationSchedulingRuleFixedOffsetToHclTerraform(this._fixedOffset.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutomationSchedulingRuleFixedOffsetList",
      },
      grouping: {
        value: automationSchedulingRuleGroupingToHclTerraform(this._grouping.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutomationSchedulingRuleGroupingList",
      },
      recurrence: {
        value: automationSchedulingRuleRecurrenceToHclTerraform(this._recurrence.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutomationSchedulingRuleRecurrenceList",
      },
      relative_offset: {
        value: automationSchedulingRuleRelativeOffsetToHclTerraform(this._relativeOffset.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutomationSchedulingRuleRelativeOffsetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
