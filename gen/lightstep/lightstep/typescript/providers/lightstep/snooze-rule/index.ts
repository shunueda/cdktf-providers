// https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/snooze_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnoozeRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/snooze_rule#id SnoozeRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the [project](https://docs.lightstep.com/docs/glossary#project) in which to create this alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/snooze_rule#project_name SnoozeRule#project_name}
  */
  readonly projectName: string;
  /**
  * The title of the snooze rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/snooze_rule#title SnoozeRule#title}
  */
  readonly title: string;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/snooze_rule#schedule SnoozeRule#schedule}
  */
  readonly schedule: SnoozeRuleSchedule;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/snooze_rule#scope SnoozeRule#scope}
  */
  readonly scope: SnoozeRuleScope;
}
export interface SnoozeRuleScheduleOneTime {
  /**
  * ISO 8601 relative date/time format. Example: '2021-04-04T14:30:00'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/snooze_rule#end_date_time SnoozeRule#end_date_time}
  */
  readonly endDateTime?: string;
  /**
  * ISO 8601 relative date/time format. Example: '2021-04-04T14:30:00'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/snooze_rule#start_date_time SnoozeRule#start_date_time}
  */
  readonly startDateTime: string;
  /**
  * IANA format timezone. Examples: 'UTC', 'US/Pacific', 'Europe/Paris'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/snooze_rule#timezone SnoozeRule#timezone}
  */
  readonly timezone: string;
}

export function snoozeRuleScheduleOneTimeToTerraform(struct?: SnoozeRuleScheduleOneTimeOutputReference | SnoozeRuleScheduleOneTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_date_time: cdktf.stringToTerraform(struct!.endDateTime),
    start_date_time: cdktf.stringToTerraform(struct!.startDateTime),
    timezone: cdktf.stringToTerraform(struct!.timezone),
  }
}


export function snoozeRuleScheduleOneTimeToHclTerraform(struct?: SnoozeRuleScheduleOneTimeOutputReference | SnoozeRuleScheduleOneTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_date_time: {
      value: cdktf.stringToHclTerraform(struct!.endDateTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_date_time: {
      value: cdktf.stringToHclTerraform(struct!.startDateTime),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnoozeRuleScheduleOneTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnoozeRuleScheduleOneTime | undefined {
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
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnoozeRuleScheduleOneTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endDateTime = undefined;
      this._startDateTime = undefined;
      this._timezone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endDateTime = value.endDateTime;
      this._startDateTime = value.startDateTime;
      this._timezone = value.timezone;
    }
  }

  // end_date_time - computed: false, optional: true, required: false
  private _endDateTime?: string; 
  public get endDateTime() {
    return this.getStringAttribute('end_date_time');
  }
  public set endDateTime(value: string) {
    this._endDateTime = value;
  }
  public resetEndDateTime() {
    this._endDateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateTimeInput() {
    return this._endDateTime;
  }

  // start_date_time - computed: false, optional: false, required: true
  private _startDateTime?: string; 
  public get startDateTime() {
    return this.getStringAttribute('start_date_time');
  }
  public set startDateTime(value: string) {
    this._startDateTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateTimeInput() {
    return this._startDateTime;
  }

  // timezone - computed: false, optional: false, required: true
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }
}
export interface SnoozeRuleScheduleRecurringScheduleCadence {
  /**
  * Comma-separated List of number or ranges (crontab-style). The empty string is defined as no days. Leaving this field undefined or null is defined as all days.a The string '*' is also defined as all days. Format: 0, 7 = sun, 1 = mon, ..., 6 = stat. Examples: '1-5' or '6-7' or '2,4', '*', ''
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/snooze_rule#days_of_week SnoozeRule#days_of_week}
  */
  readonly daysOfWeek: string;
}

export function snoozeRuleScheduleRecurringScheduleCadenceToTerraform(struct?: SnoozeRuleScheduleRecurringScheduleCadenceOutputReference | SnoozeRuleScheduleRecurringScheduleCadence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_of_week: cdktf.stringToTerraform(struct!.daysOfWeek),
  }
}


export function snoozeRuleScheduleRecurringScheduleCadenceToHclTerraform(struct?: SnoozeRuleScheduleRecurringScheduleCadenceOutputReference | SnoozeRuleScheduleRecurringScheduleCadence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days_of_week: {
      value: cdktf.stringToHclTerraform(struct!.daysOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnoozeRuleScheduleRecurringScheduleCadenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnoozeRuleScheduleRecurringScheduleCadence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfWeek = this._daysOfWeek;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnoozeRuleScheduleRecurringScheduleCadence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._daysOfWeek = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._daysOfWeek = value.daysOfWeek;
    }
  }

  // days_of_week - computed: false, optional: false, required: true
  private _daysOfWeek?: string; 
  public get daysOfWeek() {
    return this.getStringAttribute('days_of_week');
  }
  public set daysOfWeek(value: string) {
    this._daysOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfWeekInput() {
    return this._daysOfWeek;
  }
}
export interface SnoozeRuleScheduleRecurringSchedule {
  /**
  * How long each occurrence lasts specified in milliseconds. Must be a multiple of 1 minute (no fractional minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/snooze_rule#duration_millis SnoozeRule#duration_millis}
  */
  readonly durationMillis: number;
  /**
  * Human-readable name for this reoccurrence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/snooze_rule#name SnoozeRule#name}
  */
  readonly name?: string;
  /**
  * ISO 8601 time format defining when the silencing period begins on each relevant day defined by the cadence. Must NOT include UTC time offset (the time zone is specified in the 'recurring' block instead. Example '16:07:29'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/snooze_rule#start_time SnoozeRule#start_time}
  */
  readonly startTime: string;
  /**
  * cadence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/snooze_rule#cadence SnoozeRule#cadence}
  */
  readonly cadence: SnoozeRuleScheduleRecurringScheduleCadence;
}

export function snoozeRuleScheduleRecurringScheduleToTerraform(struct?: SnoozeRuleScheduleRecurringScheduleOutputReference | SnoozeRuleScheduleRecurringSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration_millis: cdktf.numberToTerraform(struct!.durationMillis),
    name: cdktf.stringToTerraform(struct!.name),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    cadence: snoozeRuleScheduleRecurringScheduleCadenceToTerraform(struct!.cadence),
  }
}


export function snoozeRuleScheduleRecurringScheduleToHclTerraform(struct?: SnoozeRuleScheduleRecurringScheduleOutputReference | SnoozeRuleScheduleRecurringSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration_millis: {
      value: cdktf.numberToHclTerraform(struct!.durationMillis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    cadence: {
      value: snoozeRuleScheduleRecurringScheduleCadenceToHclTerraform(struct!.cadence),
      isBlock: true,
      type: "set",
      storageClassType: "SnoozeRuleScheduleRecurringScheduleCadenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnoozeRuleScheduleRecurringScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnoozeRuleScheduleRecurringSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationMillis = this._durationMillis;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._cadence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cadence = this._cadence?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnoozeRuleScheduleRecurringSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._durationMillis = undefined;
      this._name = undefined;
      this._startTime = undefined;
      this._cadence.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._durationMillis = value.durationMillis;
      this._name = value.name;
      this._startTime = value.startTime;
      this._cadence.internalValue = value.cadence;
    }
  }

  // duration_millis - computed: false, optional: false, required: true
  private _durationMillis?: number; 
  public get durationMillis() {
    return this.getNumberAttribute('duration_millis');
  }
  public set durationMillis(value: number) {
    this._durationMillis = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationMillisInput() {
    return this._durationMillis;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // cadence - computed: false, optional: false, required: true
  private _cadence = new SnoozeRuleScheduleRecurringScheduleCadenceOutputReference(this, "cadence");
  public get cadence() {
    return this._cadence;
  }
  public putCadence(value: SnoozeRuleScheduleRecurringScheduleCadence) {
    this._cadence.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cadenceInput() {
    return this._cadence.internalValue;
  }
}
export interface SnoozeRuleScheduleRecurring {
  /**
  * ISO 8601 date format. Example: 2021-01-01
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/snooze_rule#end_date SnoozeRule#end_date}
  */
  readonly endDate?: string;
  /**
  * ISO 8601 date format. Example: 2021-01-01
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/snooze_rule#start_date SnoozeRule#start_date}
  */
  readonly startDate: string;
  /**
  * IANA format timezone. Examples: 'UTC', 'US/Pacific', 'Europe/Paris'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/snooze_rule#timezone SnoozeRule#timezone}
  */
  readonly timezone: string;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/snooze_rule#schedule SnoozeRule#schedule}
  */
  readonly schedule: SnoozeRuleScheduleRecurringSchedule;
}

export function snoozeRuleScheduleRecurringToTerraform(struct?: SnoozeRuleScheduleRecurringOutputReference | SnoozeRuleScheduleRecurring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_date: cdktf.stringToTerraform(struct!.endDate),
    start_date: cdktf.stringToTerraform(struct!.startDate),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    schedule: snoozeRuleScheduleRecurringScheduleToTerraform(struct!.schedule),
  }
}


export function snoozeRuleScheduleRecurringToHclTerraform(struct?: SnoozeRuleScheduleRecurringOutputReference | SnoozeRuleScheduleRecurring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_date: {
      value: cdktf.stringToHclTerraform(struct!.endDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_date: {
      value: cdktf.stringToHclTerraform(struct!.startDate),
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
    schedule: {
      value: snoozeRuleScheduleRecurringScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "set",
      storageClassType: "SnoozeRuleScheduleRecurringScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnoozeRuleScheduleRecurringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnoozeRuleScheduleRecurring | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.endDate = this._endDate;
    }
    if (this._startDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDate = this._startDate;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnoozeRuleScheduleRecurring | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endDate = undefined;
      this._startDate = undefined;
      this._timezone = undefined;
      this._schedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endDate = value.endDate;
      this._startDate = value.startDate;
      this._timezone = value.timezone;
      this._schedule.internalValue = value.schedule;
    }
  }

  // end_date - computed: false, optional: true, required: false
  private _endDate?: string; 
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string) {
    this._endDate = value;
  }
  public resetEndDate() {
    this._endDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate;
  }

  // start_date - computed: false, optional: false, required: true
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
  }

  // timezone - computed: false, optional: false, required: true
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule = new SnoozeRuleScheduleRecurringScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: SnoozeRuleScheduleRecurringSchedule) {
    this._schedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }
}
export interface SnoozeRuleSchedule {
  /**
  * one_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/snooze_rule#one_time SnoozeRule#one_time}
  */
  readonly oneTime?: SnoozeRuleScheduleOneTime;
  /**
  * recurring block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/snooze_rule#recurring SnoozeRule#recurring}
  */
  readonly recurring?: SnoozeRuleScheduleRecurring;
}

export function snoozeRuleScheduleToTerraform(struct?: SnoozeRuleScheduleOutputReference | SnoozeRuleSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    one_time: snoozeRuleScheduleOneTimeToTerraform(struct!.oneTime),
    recurring: snoozeRuleScheduleRecurringToTerraform(struct!.recurring),
  }
}


export function snoozeRuleScheduleToHclTerraform(struct?: SnoozeRuleScheduleOutputReference | SnoozeRuleSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    one_time: {
      value: snoozeRuleScheduleOneTimeToHclTerraform(struct!.oneTime),
      isBlock: true,
      type: "set",
      storageClassType: "SnoozeRuleScheduleOneTimeList",
    },
    recurring: {
      value: snoozeRuleScheduleRecurringToHclTerraform(struct!.recurring),
      isBlock: true,
      type: "set",
      storageClassType: "SnoozeRuleScheduleRecurringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnoozeRuleScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnoozeRuleSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oneTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oneTime = this._oneTime?.internalValue;
    }
    if (this._recurring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurring = this._recurring?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnoozeRuleSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oneTime.internalValue = undefined;
      this._recurring.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oneTime.internalValue = value.oneTime;
      this._recurring.internalValue = value.recurring;
    }
  }

  // one_time - computed: false, optional: true, required: false
  private _oneTime = new SnoozeRuleScheduleOneTimeOutputReference(this, "one_time");
  public get oneTime() {
    return this._oneTime;
  }
  public putOneTime(value: SnoozeRuleScheduleOneTime) {
    this._oneTime.internalValue = value;
  }
  public resetOneTime() {
    this._oneTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneTimeInput() {
    return this._oneTime.internalValue;
  }

  // recurring - computed: false, optional: true, required: false
  private _recurring = new SnoozeRuleScheduleRecurringOutputReference(this, "recurring");
  public get recurring() {
    return this._recurring;
  }
  public putRecurring(value: SnoozeRuleScheduleRecurring) {
    this._recurring.internalValue = value;
  }
  public resetRecurring() {
    this._recurring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringInput() {
    return this._recurring.internalValue;
  }
}
export interface SnoozeRuleScopeBasicScopeFilterLabelPredicateLabel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/snooze_rule#key SnoozeRule#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/snooze_rule#value SnoozeRule#value}
  */
  readonly value: string;
}

export function snoozeRuleScopeBasicScopeFilterLabelPredicateLabelToTerraform(struct?: SnoozeRuleScopeBasicScopeFilterLabelPredicateLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function snoozeRuleScopeBasicScopeFilterLabelPredicateLabelToHclTerraform(struct?: SnoozeRuleScopeBasicScopeFilterLabelPredicateLabel | cdktf.IResolvable): any {
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

export class SnoozeRuleScopeBasicScopeFilterLabelPredicateLabelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SnoozeRuleScopeBasicScopeFilterLabelPredicateLabel | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SnoozeRuleScopeBasicScopeFilterLabelPredicateLabel | cdktf.IResolvable | undefined) {
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
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

export class SnoozeRuleScopeBasicScopeFilterLabelPredicateLabelList extends cdktf.ComplexList {
  public internalValue? : SnoozeRuleScopeBasicScopeFilterLabelPredicateLabel[] | cdktf.IResolvable

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
  public get(index: number): SnoozeRuleScopeBasicScopeFilterLabelPredicateLabelOutputReference {
    return new SnoozeRuleScopeBasicScopeFilterLabelPredicateLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SnoozeRuleScopeBasicScopeFilterLabelPredicate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/snooze_rule#operator SnoozeRule#operator}
  */
  readonly operator?: string;
  /**
  * label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/snooze_rule#label SnoozeRule#label}
  */
  readonly label?: SnoozeRuleScopeBasicScopeFilterLabelPredicateLabel[] | cdktf.IResolvable;
}

export function snoozeRuleScopeBasicScopeFilterLabelPredicateToTerraform(struct?: SnoozeRuleScopeBasicScopeFilterLabelPredicateOutputReference | SnoozeRuleScopeBasicScopeFilterLabelPredicate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    label: cdktf.listMapper(snoozeRuleScopeBasicScopeFilterLabelPredicateLabelToTerraform, true)(struct!.label),
  }
}


export function snoozeRuleScopeBasicScopeFilterLabelPredicateToHclTerraform(struct?: SnoozeRuleScopeBasicScopeFilterLabelPredicateOutputReference | SnoozeRuleScopeBasicScopeFilterLabelPredicate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.listMapperHcl(snoozeRuleScopeBasicScopeFilterLabelPredicateLabelToHclTerraform, true)(struct!.label),
      isBlock: true,
      type: "set",
      storageClassType: "SnoozeRuleScopeBasicScopeFilterLabelPredicateLabelList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnoozeRuleScopeBasicScopeFilterLabelPredicateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnoozeRuleScopeBasicScopeFilterLabelPredicate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._label?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnoozeRuleScopeBasicScopeFilterLabelPredicate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._label.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._label.internalValue = value.label;
    }
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

  // label - computed: false, optional: true, required: false
  private _label = new SnoozeRuleScopeBasicScopeFilterLabelPredicateLabelList(this, "label", true);
  public get label() {
    return this._label;
  }
  public putLabel(value: SnoozeRuleScopeBasicScopeFilterLabelPredicateLabel[] | cdktf.IResolvable) {
    this._label.internalValue = value;
  }
  public resetLabel() {
    this._label.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label.internalValue;
  }
}
export interface SnoozeRuleScopeBasicScopeFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/snooze_rule#alert_ids SnoozeRule#alert_ids}
  */
  readonly alertIds?: string[];
  /**
  * label_predicate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/snooze_rule#label_predicate SnoozeRule#label_predicate}
  */
  readonly labelPredicate?: SnoozeRuleScopeBasicScopeFilterLabelPredicate;
}

export function snoozeRuleScopeBasicScopeFilterToTerraform(struct?: SnoozeRuleScopeBasicScopeFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.alertIds),
    label_predicate: snoozeRuleScopeBasicScopeFilterLabelPredicateToTerraform(struct!.labelPredicate),
  }
}


export function snoozeRuleScopeBasicScopeFilterToHclTerraform(struct?: SnoozeRuleScopeBasicScopeFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.alertIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    label_predicate: {
      value: snoozeRuleScopeBasicScopeFilterLabelPredicateToHclTerraform(struct!.labelPredicate),
      isBlock: true,
      type: "set",
      storageClassType: "SnoozeRuleScopeBasicScopeFilterLabelPredicateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnoozeRuleScopeBasicScopeFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SnoozeRuleScopeBasicScopeFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertIds = this._alertIds;
    }
    if (this._labelPredicate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelPredicate = this._labelPredicate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnoozeRuleScopeBasicScopeFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertIds = undefined;
      this._labelPredicate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertIds = value.alertIds;
      this._labelPredicate.internalValue = value.labelPredicate;
    }
  }

  // alert_ids - computed: false, optional: true, required: false
  private _alertIds?: string[]; 
  public get alertIds() {
    return cdktf.Fn.tolist(this.getListAttribute('alert_ids'));
  }
  public set alertIds(value: string[]) {
    this._alertIds = value;
  }
  public resetAlertIds() {
    this._alertIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertIdsInput() {
    return this._alertIds;
  }

  // label_predicate - computed: false, optional: true, required: false
  private _labelPredicate = new SnoozeRuleScopeBasicScopeFilterLabelPredicateOutputReference(this, "label_predicate");
  public get labelPredicate() {
    return this._labelPredicate;
  }
  public putLabelPredicate(value: SnoozeRuleScopeBasicScopeFilterLabelPredicate) {
    this._labelPredicate.internalValue = value;
  }
  public resetLabelPredicate() {
    this._labelPredicate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelPredicateInput() {
    return this._labelPredicate.internalValue;
  }
}

export class SnoozeRuleScopeBasicScopeFilterList extends cdktf.ComplexList {
  public internalValue? : SnoozeRuleScopeBasicScopeFilter[] | cdktf.IResolvable

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
  public get(index: number): SnoozeRuleScopeBasicScopeFilterOutputReference {
    return new SnoozeRuleScopeBasicScopeFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SnoozeRuleScopeBasic {
  /**
  * scope_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/snooze_rule#scope_filter SnoozeRule#scope_filter}
  */
  readonly scopeFilter: SnoozeRuleScopeBasicScopeFilter[] | cdktf.IResolvable;
}

export function snoozeRuleScopeBasicToTerraform(struct?: SnoozeRuleScopeBasicOutputReference | SnoozeRuleScopeBasic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_filter: cdktf.listMapper(snoozeRuleScopeBasicScopeFilterToTerraform, true)(struct!.scopeFilter),
  }
}


export function snoozeRuleScopeBasicToHclTerraform(struct?: SnoozeRuleScopeBasicOutputReference | SnoozeRuleScopeBasic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope_filter: {
      value: cdktf.listMapperHcl(snoozeRuleScopeBasicScopeFilterToHclTerraform, true)(struct!.scopeFilter),
      isBlock: true,
      type: "set",
      storageClassType: "SnoozeRuleScopeBasicScopeFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnoozeRuleScopeBasicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnoozeRuleScopeBasic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scopeFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeFilter = this._scopeFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnoozeRuleScopeBasic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scopeFilter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scopeFilter.internalValue = value.scopeFilter;
    }
  }

  // scope_filter - computed: false, optional: false, required: true
  private _scopeFilter = new SnoozeRuleScopeBasicScopeFilterList(this, "scope_filter", true);
  public get scopeFilter() {
    return this._scopeFilter;
  }
  public putScopeFilter(value: SnoozeRuleScopeBasicScopeFilter[] | cdktf.IResolvable) {
    this._scopeFilter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeFilterInput() {
    return this._scopeFilter.internalValue;
  }
}
export interface SnoozeRuleScope {
  /**
  * basic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/snooze_rule#basic SnoozeRule#basic}
  */
  readonly basic: SnoozeRuleScopeBasic;
}

export function snoozeRuleScopeToTerraform(struct?: SnoozeRuleScopeOutputReference | SnoozeRuleScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic: snoozeRuleScopeBasicToTerraform(struct!.basic),
  }
}


export function snoozeRuleScopeToHclTerraform(struct?: SnoozeRuleScopeOutputReference | SnoozeRuleScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic: {
      value: snoozeRuleScopeBasicToHclTerraform(struct!.basic),
      isBlock: true,
      type: "set",
      storageClassType: "SnoozeRuleScopeBasicList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnoozeRuleScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnoozeRuleScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basic = this._basic?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnoozeRuleScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._basic.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._basic.internalValue = value.basic;
    }
  }

  // basic - computed: false, optional: false, required: true
  private _basic = new SnoozeRuleScopeBasicOutputReference(this, "basic");
  public get basic() {
    return this._basic;
  }
  public putBasic(value: SnoozeRuleScopeBasic) {
    this._basic.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get basicInput() {
    return this._basic.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/snooze_rule lightstep_snooze_rule}
*/
export class SnoozeRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lightstep_snooze_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnoozeRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnoozeRule to import
  * @param importFromId The id of the existing SnoozeRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/snooze_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnoozeRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "lightstep_snooze_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/snooze_rule lightstep_snooze_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnoozeRuleConfig
  */
  public constructor(scope: Construct, id: string, config: SnoozeRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'lightstep_snooze_rule',
      terraformGeneratorMetadata: {
        providerName: 'lightstep',
        providerVersion: '1.98.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._projectName = config.projectName;
    this._title = config.title;
    this._schedule.internalValue = config.schedule;
    this._scope.internalValue = config.scope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // project_name - computed: false, optional: false, required: true
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
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

  // schedule - computed: false, optional: false, required: true
  private _schedule = new SnoozeRuleScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: SnoozeRuleSchedule) {
    this._schedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // scope - computed: false, optional: false, required: true
  private _scope = new SnoozeRuleScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }
  public putScope(value: SnoozeRuleScope) {
    this._scope.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      project_name: cdktf.stringToTerraform(this._projectName),
      title: cdktf.stringToTerraform(this._title),
      schedule: snoozeRuleScheduleToTerraform(this._schedule.internalValue),
      scope: snoozeRuleScopeToTerraform(this._scope.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
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
      schedule: {
        value: snoozeRuleScheduleToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SnoozeRuleScheduleList",
      },
      scope: {
        value: snoozeRuleScopeToHclTerraform(this._scope.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SnoozeRuleScopeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
