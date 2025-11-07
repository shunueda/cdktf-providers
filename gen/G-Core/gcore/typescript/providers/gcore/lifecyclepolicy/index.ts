// https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/lifecyclepolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LifecyclepolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/lifecyclepolicy#action Lifecyclepolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/lifecyclepolicy#id Lifecyclepolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/lifecyclepolicy#name Lifecyclepolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/lifecyclepolicy#project_id Lifecyclepolicy#project_id}
  */
  readonly projectId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/lifecyclepolicy#project_name Lifecyclepolicy#project_name}
  */
  readonly projectName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/lifecyclepolicy#region_id Lifecyclepolicy#region_id}
  */
  readonly regionId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/lifecyclepolicy#region_name Lifecyclepolicy#region_name}
  */
  readonly regionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/lifecyclepolicy#status Lifecyclepolicy#status}
  */
  readonly status?: string;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/lifecyclepolicy#schedule Lifecyclepolicy#schedule}
  */
  readonly schedule?: LifecyclepolicySchedule[] | cdktf.IResolvable;
  /**
  * volume block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/lifecyclepolicy#volume Lifecyclepolicy#volume}
  */
  readonly volume?: LifecyclepolicyVolume[] | cdktf.IResolvable;
}
export interface LifecyclepolicyScheduleCron {
  /**
  * Either single asterisk or comma-separated list of integers (1-31)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/lifecyclepolicy#day Lifecyclepolicy#day}
  */
  readonly day?: string;
  /**
  * Either single asterisk or comma-separated list of integers (0-6)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/lifecyclepolicy#day_of_week Lifecyclepolicy#day_of_week}
  */
  readonly dayOfWeek?: string;
  /**
  * Either single asterisk or comma-separated list of integers (0-23)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/lifecyclepolicy#hour Lifecyclepolicy#hour}
  */
  readonly hour?: string;
  /**
  * Either single asterisk or comma-separated list of integers (0-59)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/lifecyclepolicy#minute Lifecyclepolicy#minute}
  */
  readonly minute?: string;
  /**
  * Either single asterisk or comma-separated list of integers (1-12)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/lifecyclepolicy#month Lifecyclepolicy#month}
  */
  readonly month?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/lifecyclepolicy#timezone Lifecyclepolicy#timezone}
  */
  readonly timezone?: string;
  /**
  * Either single asterisk or comma-separated list of integers (1-53)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/lifecyclepolicy#week Lifecyclepolicy#week}
  */
  readonly week?: string;
}

export function lifecyclepolicyScheduleCronToTerraform(struct?: LifecyclepolicyScheduleCronOutputReference | LifecyclepolicyScheduleCron): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.stringToTerraform(struct!.day),
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    hour: cdktf.stringToTerraform(struct!.hour),
    minute: cdktf.stringToTerraform(struct!.minute),
    month: cdktf.stringToTerraform(struct!.month),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    week: cdktf.stringToTerraform(struct!.week),
  }
}


export function lifecyclepolicyScheduleCronToHclTerraform(struct?: LifecyclepolicyScheduleCronOutputReference | LifecyclepolicyScheduleCron): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.stringToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hour: {
      value: cdktf.stringToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minute: {
      value: cdktf.stringToHclTerraform(struct!.minute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    month: {
      value: cdktf.stringToHclTerraform(struct!.month),
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
    week: {
      value: cdktf.stringToHclTerraform(struct!.week),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LifecyclepolicyScheduleCronOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LifecyclepolicyScheduleCron | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    if (this._minute !== undefined) {
      hasAnyValues = true;
      internalValueResult.minute = this._minute;
    }
    if (this._month !== undefined) {
      hasAnyValues = true;
      internalValueResult.month = this._month;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._week !== undefined) {
      hasAnyValues = true;
      internalValueResult.week = this._week;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LifecyclepolicyScheduleCron | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._day = undefined;
      this._dayOfWeek = undefined;
      this._hour = undefined;
      this._minute = undefined;
      this._month = undefined;
      this._timezone = undefined;
      this._week = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._day = value.day;
      this._dayOfWeek = value.dayOfWeek;
      this._hour = value.hour;
      this._minute = value.minute;
      this._month = value.month;
      this._timezone = value.timezone;
      this._week = value.week;
    }
  }

  // day - computed: false, optional: true, required: false
  private _day?: string; 
  public get day() {
    return this.getStringAttribute('day');
  }
  public set day(value: string) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // day_of_week - computed: false, optional: true, required: false
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // hour - computed: false, optional: true, required: false
  private _hour?: string; 
  public get hour() {
    return this.getStringAttribute('hour');
  }
  public set hour(value: string) {
    this._hour = value;
  }
  public resetHour() {
    this._hour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // minute - computed: false, optional: true, required: false
  private _minute?: string; 
  public get minute() {
    return this.getStringAttribute('minute');
  }
  public set minute(value: string) {
    this._minute = value;
  }
  public resetMinute() {
    this._minute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteInput() {
    return this._minute;
  }

  // month - computed: false, optional: true, required: false
  private _month?: string; 
  public get month() {
    return this.getStringAttribute('month');
  }
  public set month(value: string) {
    this._month = value;
  }
  public resetMonth() {
    this._month = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // timezone - computed: false, optional: true, required: false
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

  // week - computed: false, optional: true, required: false
  private _week?: string; 
  public get week() {
    return this.getStringAttribute('week');
  }
  public set week(value: string) {
    this._week = value;
  }
  public resetWeek() {
    this._week = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekInput() {
    return this._week;
  }
}
export interface LifecyclepolicyScheduleInterval {
  /**
  * Number of days to wait between actions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/lifecyclepolicy#days Lifecyclepolicy#days}
  */
  readonly days?: number;
  /**
  * Number of hours to wait between actions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/lifecyclepolicy#hours Lifecyclepolicy#hours}
  */
  readonly hours?: number;
  /**
  * Number of minutes to wait between actions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/lifecyclepolicy#minutes Lifecyclepolicy#minutes}
  */
  readonly minutes?: number;
  /**
  * Number of weeks to wait between actions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/lifecyclepolicy#weeks Lifecyclepolicy#weeks}
  */
  readonly weeks?: number;
}

export function lifecyclepolicyScheduleIntervalToTerraform(struct?: LifecyclepolicyScheduleIntervalOutputReference | LifecyclepolicyScheduleInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
    weeks: cdktf.numberToTerraform(struct!.weeks),
  }
}


export function lifecyclepolicyScheduleIntervalToHclTerraform(struct?: LifecyclepolicyScheduleIntervalOutputReference | LifecyclepolicyScheduleInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weeks: {
      value: cdktf.numberToHclTerraform(struct!.weeks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LifecyclepolicyScheduleIntervalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LifecyclepolicyScheduleInterval | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    if (this._weeks !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeks = this._weeks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LifecyclepolicyScheduleInterval | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
      this._hours = undefined;
      this._minutes = undefined;
      this._weeks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
      this._hours = value.hours;
      this._minutes = value.minutes;
      this._weeks = value.weeks;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // weeks - computed: false, optional: true, required: false
  private _weeks?: number; 
  public get weeks() {
    return this.getNumberAttribute('weeks');
  }
  public set weeks(value: number) {
    this._weeks = value;
  }
  public resetWeeks() {
    this._weeks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeksInput() {
    return this._weeks;
  }
}
export interface LifecyclepolicyScheduleRetentionTime {
  /**
  * Number of days to wait before deleting snapshot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/lifecyclepolicy#days Lifecyclepolicy#days}
  */
  readonly days?: number;
  /**
  * Number of hours to wait before deleting snapshot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/lifecyclepolicy#hours Lifecyclepolicy#hours}
  */
  readonly hours?: number;
  /**
  * Number of minutes to wait before deleting snapshot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/lifecyclepolicy#minutes Lifecyclepolicy#minutes}
  */
  readonly minutes?: number;
  /**
  * Number of weeks to wait before deleting snapshot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/lifecyclepolicy#weeks Lifecyclepolicy#weeks}
  */
  readonly weeks?: number;
}

export function lifecyclepolicyScheduleRetentionTimeToTerraform(struct?: LifecyclepolicyScheduleRetentionTimeOutputReference | LifecyclepolicyScheduleRetentionTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
    weeks: cdktf.numberToTerraform(struct!.weeks),
  }
}


export function lifecyclepolicyScheduleRetentionTimeToHclTerraform(struct?: LifecyclepolicyScheduleRetentionTimeOutputReference | LifecyclepolicyScheduleRetentionTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weeks: {
      value: cdktf.numberToHclTerraform(struct!.weeks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LifecyclepolicyScheduleRetentionTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LifecyclepolicyScheduleRetentionTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    if (this._weeks !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeks = this._weeks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LifecyclepolicyScheduleRetentionTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
      this._hours = undefined;
      this._minutes = undefined;
      this._weeks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
      this._hours = value.hours;
      this._minutes = value.minutes;
      this._weeks = value.weeks;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // weeks - computed: false, optional: true, required: false
  private _weeks?: number; 
  public get weeks() {
    return this.getNumberAttribute('weeks');
  }
  public set weeks(value: number) {
    this._weeks = value;
  }
  public resetWeeks() {
    this._weeks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeksInput() {
    return this._weeks;
  }
}
export interface LifecyclepolicySchedule {
  /**
  * Maximum number of stored resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/lifecyclepolicy#max_quantity Lifecyclepolicy#max_quantity}
  */
  readonly maxQuantity: number;
  /**
  * Used to name snapshots. {volume_id} is substituted with volume.id on creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/lifecyclepolicy#resource_name_template Lifecyclepolicy#resource_name_template}
  */
  readonly resourceNameTemplate?: string;
  /**
  * cron block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/lifecyclepolicy#cron Lifecyclepolicy#cron}
  */
  readonly cron?: LifecyclepolicyScheduleCron;
  /**
  * interval block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/lifecyclepolicy#interval Lifecyclepolicy#interval}
  */
  readonly interval?: LifecyclepolicyScheduleInterval;
  /**
  * retention_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/lifecyclepolicy#retention_time Lifecyclepolicy#retention_time}
  */
  readonly retentionTime?: LifecyclepolicyScheduleRetentionTime;
}

export function lifecyclepolicyScheduleToTerraform(struct?: LifecyclepolicySchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_quantity: cdktf.numberToTerraform(struct!.maxQuantity),
    resource_name_template: cdktf.stringToTerraform(struct!.resourceNameTemplate),
    cron: lifecyclepolicyScheduleCronToTerraform(struct!.cron),
    interval: lifecyclepolicyScheduleIntervalToTerraform(struct!.interval),
    retention_time: lifecyclepolicyScheduleRetentionTimeToTerraform(struct!.retentionTime),
  }
}


export function lifecyclepolicyScheduleToHclTerraform(struct?: LifecyclepolicySchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_quantity: {
      value: cdktf.numberToHclTerraform(struct!.maxQuantity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_name_template: {
      value: cdktf.stringToHclTerraform(struct!.resourceNameTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cron: {
      value: lifecyclepolicyScheduleCronToHclTerraform(struct!.cron),
      isBlock: true,
      type: "list",
      storageClassType: "LifecyclepolicyScheduleCronList",
    },
    interval: {
      value: lifecyclepolicyScheduleIntervalToHclTerraform(struct!.interval),
      isBlock: true,
      type: "list",
      storageClassType: "LifecyclepolicyScheduleIntervalList",
    },
    retention_time: {
      value: lifecyclepolicyScheduleRetentionTimeToHclTerraform(struct!.retentionTime),
      isBlock: true,
      type: "list",
      storageClassType: "LifecyclepolicyScheduleRetentionTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LifecyclepolicyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LifecyclepolicySchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxQuantity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxQuantity = this._maxQuantity;
    }
    if (this._resourceNameTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceNameTemplate = this._resourceNameTemplate;
    }
    if (this._cron?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cron = this._cron?.internalValue;
    }
    if (this._interval?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval?.internalValue;
    }
    if (this._retentionTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionTime = this._retentionTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LifecyclepolicySchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxQuantity = undefined;
      this._resourceNameTemplate = undefined;
      this._cron.internalValue = undefined;
      this._interval.internalValue = undefined;
      this._retentionTime.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxQuantity = value.maxQuantity;
      this._resourceNameTemplate = value.resourceNameTemplate;
      this._cron.internalValue = value.cron;
      this._interval.internalValue = value.interval;
      this._retentionTime.internalValue = value.retentionTime;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_quantity - computed: false, optional: false, required: true
  private _maxQuantity?: number; 
  public get maxQuantity() {
    return this.getNumberAttribute('max_quantity');
  }
  public set maxQuantity(value: number) {
    this._maxQuantity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxQuantityInput() {
    return this._maxQuantity;
  }

  // resource_name_template - computed: false, optional: true, required: false
  private _resourceNameTemplate?: string; 
  public get resourceNameTemplate() {
    return this.getStringAttribute('resource_name_template');
  }
  public set resourceNameTemplate(value: string) {
    this._resourceNameTemplate = value;
  }
  public resetResourceNameTemplate() {
    this._resourceNameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameTemplateInput() {
    return this._resourceNameTemplate;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // cron - computed: false, optional: true, required: false
  private _cron = new LifecyclepolicyScheduleCronOutputReference(this, "cron");
  public get cron() {
    return this._cron;
  }
  public putCron(value: LifecyclepolicyScheduleCron) {
    this._cron.internalValue = value;
  }
  public resetCron() {
    this._cron.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronInput() {
    return this._cron.internalValue;
  }

  // interval - computed: false, optional: true, required: false
  private _interval = new LifecyclepolicyScheduleIntervalOutputReference(this, "interval");
  public get interval() {
    return this._interval;
  }
  public putInterval(value: LifecyclepolicyScheduleInterval) {
    this._interval.internalValue = value;
  }
  public resetInterval() {
    this._interval.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval.internalValue;
  }

  // retention_time - computed: false, optional: true, required: false
  private _retentionTime = new LifecyclepolicyScheduleRetentionTimeOutputReference(this, "retention_time");
  public get retentionTime() {
    return this._retentionTime;
  }
  public putRetentionTime(value: LifecyclepolicyScheduleRetentionTime) {
    this._retentionTime.internalValue = value;
  }
  public resetRetentionTime() {
    this._retentionTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionTimeInput() {
    return this._retentionTime.internalValue;
  }
}

export class LifecyclepolicyScheduleList extends cdktf.ComplexList {
  public internalValue? : LifecyclepolicySchedule[] | cdktf.IResolvable

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
  public get(index: number): LifecyclepolicyScheduleOutputReference {
    return new LifecyclepolicyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LifecyclepolicyVolume {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/lifecyclepolicy#id Lifecyclepolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function lifecyclepolicyVolumeToTerraform(struct?: LifecyclepolicyVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function lifecyclepolicyVolumeToHclTerraform(struct?: LifecyclepolicyVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LifecyclepolicyVolumeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LifecyclepolicyVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LifecyclepolicyVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class LifecyclepolicyVolumeList extends cdktf.ComplexList {
  public internalValue? : LifecyclepolicyVolume[] | cdktf.IResolvable

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
  public get(index: number): LifecyclepolicyVolumeOutputReference {
    return new LifecyclepolicyVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/lifecyclepolicy gcore_lifecyclepolicy}
*/
export class Lifecyclepolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore_lifecyclepolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Lifecyclepolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Lifecyclepolicy to import
  * @param importFromId The id of the existing Lifecyclepolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/lifecyclepolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Lifecyclepolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore_lifecyclepolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/lifecyclepolicy gcore_lifecyclepolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LifecyclepolicyConfig
  */
  public constructor(scope: Construct, id: string, config: LifecyclepolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'gcore_lifecyclepolicy',
      terraformGeneratorMetadata: {
        providerName: 'gcore',
        providerVersion: '0.31.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._id = config.id;
    this._name = config.name;
    this._projectId = config.projectId;
    this._projectName = config.projectName;
    this._regionId = config.regionId;
    this._regionName = config.regionName;
    this._status = config.status;
    this._schedule.internalValue = config.schedule;
    this._volume.internalValue = config.volume;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // project_name - computed: false, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // region_id - computed: false, optional: true, required: false
  private _regionId?: number; 
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }
  public set regionId(value: number) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // region_name - computed: false, optional: true, required: false
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  public resetRegionName() {
    this._regionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
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

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getNumberAttribute('user_id');
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new LifecyclepolicyScheduleList(this, "schedule", false);
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: LifecyclepolicySchedule[] | cdktf.IResolvable) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // volume - computed: false, optional: true, required: false
  private _volume = new LifecyclepolicyVolumeList(this, "volume", true);
  public get volume() {
    return this._volume;
  }
  public putVolume(value: LifecyclepolicyVolume[] | cdktf.IResolvable) {
    this._volume.internalValue = value;
  }
  public resetVolume() {
    this._volume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.numberToTerraform(this._projectId),
      project_name: cdktf.stringToTerraform(this._projectName),
      region_id: cdktf.numberToTerraform(this._regionId),
      region_name: cdktf.stringToTerraform(this._regionName),
      status: cdktf.stringToTerraform(this._status),
      schedule: cdktf.listMapper(lifecyclepolicyScheduleToTerraform, true)(this._schedule.internalValue),
      volume: cdktf.listMapper(lifecyclepolicyVolumeToTerraform, true)(this._volume.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
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
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_id: {
        value: cdktf.numberToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region_name: {
        value: cdktf.stringToHclTerraform(this._regionName),
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
      schedule: {
        value: cdktf.listMapperHcl(lifecyclepolicyScheduleToHclTerraform, true)(this._schedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LifecyclepolicyScheduleList",
      },
      volume: {
        value: cdktf.listMapperHcl(lifecyclepolicyVolumeToHclTerraform, true)(this._volume.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LifecyclepolicyVolumeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
