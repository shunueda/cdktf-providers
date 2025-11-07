// https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/grid_servicerestart_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GridServicerestartGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Comment for the Restart Group; maximum 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/grid_servicerestart_group#comment GridServicerestartGroup#comment}
  */
  readonly comment?: string;
  /**
  * Extensible attributes associated with the object. For valid values for extensible attributes, see {extattrs:values}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/grid_servicerestart_group#extattrs GridServicerestartGroup#extattrs}
  */
  readonly extattrs?: { [key: string]: string };
  /**
  * The list of members belonging to the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/grid_servicerestart_group#members GridServicerestartGroup#members}
  */
  readonly members?: string[];
  /**
  * The default restart method for this Restart Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/grid_servicerestart_group#mode GridServicerestartGroup#mode}
  */
  readonly mode?: string;
  /**
  * The name of this Restart Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/grid_servicerestart_group#name GridServicerestartGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/grid_servicerestart_group#recurring_schedule GridServicerestartGroup#recurring_schedule}
  */
  readonly recurringSchedule?: GridServicerestartGroupRecurringSchedule;
  /**
  * The applicable service for this Restart Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/grid_servicerestart_group#service GridServicerestartGroup#service}
  */
  readonly service: string;
}
export interface GridServicerestartGroupRecurringScheduleSchedule {
  /**
  * The day of the month for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/grid_servicerestart_group#day_of_month GridServicerestartGroup#day_of_month}
  */
  readonly dayOfMonth?: number;
  /**
  * If set to True, the scheduled task is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/grid_servicerestart_group#disable GridServicerestartGroup#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * The number of frequency to wait before repeating the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/grid_servicerestart_group#every GridServicerestartGroup#every}
  */
  readonly every?: number;
  /**
  * The frequency for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/grid_servicerestart_group#frequency GridServicerestartGroup#frequency}
  */
  readonly frequency?: string;
  /**
  * The hour of day for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/grid_servicerestart_group#hour_of_day GridServicerestartGroup#hour_of_day}
  */
  readonly hourOfDay?: number;
  /**
  * The minutes past the hour for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/grid_servicerestart_group#minutes_past_hour GridServicerestartGroup#minutes_past_hour}
  */
  readonly minutesPastHour?: number;
  /**
  * The month for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/grid_servicerestart_group#month GridServicerestartGroup#month}
  */
  readonly month?: number;
  /**
  * The recurring time for the schedule in Epoch seconds format. This field is obsolete and is preserved only for backward compatibility purposes. Please use other applicable fields to define the recurring schedule. DO NOT use recurring_time together with these fields. If you use recurring_time with other fields to define the recurring schedule, recurring_time has priority over year, hour_of_day, and minutes_past_hour and will override the values of these fields, although it does not override month and day_of_month. In this case, the recurring time value might be different than the intended value that you define.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/grid_servicerestart_group#recurring_time GridServicerestartGroup#recurring_time}
  */
  readonly recurringTime?: number;
  /**
  * Indicates if the scheduled task will be repeated or run only once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/grid_servicerestart_group#repeat GridServicerestartGroup#repeat}
  */
  readonly repeat?: string;
  /**
  * The time zone for the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/grid_servicerestart_group#time_zone GridServicerestartGroup#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Days of the week when scheduling is triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/grid_servicerestart_group#weekdays GridServicerestartGroup#weekdays}
  */
  readonly weekdays?: string[];
  /**
  * The year for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/grid_servicerestart_group#year GridServicerestartGroup#year}
  */
  readonly year?: number;
}

export function gridServicerestartGroupRecurringScheduleScheduleToTerraform(struct?: GridServicerestartGroupRecurringScheduleSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_month: cdktf.numberToTerraform(struct!.dayOfMonth),
    disable: cdktf.booleanToTerraform(struct!.disable),
    every: cdktf.numberToTerraform(struct!.every),
    frequency: cdktf.stringToTerraform(struct!.frequency),
    hour_of_day: cdktf.numberToTerraform(struct!.hourOfDay),
    minutes_past_hour: cdktf.numberToTerraform(struct!.minutesPastHour),
    month: cdktf.numberToTerraform(struct!.month),
    recurring_time: cdktf.numberToTerraform(struct!.recurringTime),
    repeat: cdktf.stringToTerraform(struct!.repeat),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    weekdays: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.weekdays),
    year: cdktf.numberToTerraform(struct!.year),
  }
}


export function gridServicerestartGroupRecurringScheduleScheduleToHclTerraform(struct?: GridServicerestartGroupRecurringScheduleSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_month: {
      value: cdktf.numberToHclTerraform(struct!.dayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    every: {
      value: cdktf.numberToHclTerraform(struct!.every),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
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
    minutes_past_hour: {
      value: cdktf.numberToHclTerraform(struct!.minutesPastHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    month: {
      value: cdktf.numberToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recurring_time: {
      value: cdktf.numberToHclTerraform(struct!.recurringTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    repeat: {
      value: cdktf.stringToHclTerraform(struct!.repeat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weekdays: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.weekdays),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    year: {
      value: cdktf.numberToHclTerraform(struct!.year),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GridServicerestartGroupRecurringScheduleScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GridServicerestartGroupRecurringScheduleSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfMonth = this._dayOfMonth;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._every !== undefined) {
      hasAnyValues = true;
      internalValueResult.every = this._every;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._hourOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourOfDay = this._hourOfDay;
    }
    if (this._minutesPastHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutesPastHour = this._minutesPastHour;
    }
    if (this._month !== undefined) {
      hasAnyValues = true;
      internalValueResult.month = this._month;
    }
    if (this._recurringTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurringTime = this._recurringTime;
    }
    if (this._repeat !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeat = this._repeat;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    if (this._weekdays !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekdays = this._weekdays;
    }
    if (this._year !== undefined) {
      hasAnyValues = true;
      internalValueResult.year = this._year;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GridServicerestartGroupRecurringScheduleSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dayOfMonth = undefined;
      this._disable = undefined;
      this._every = undefined;
      this._frequency = undefined;
      this._hourOfDay = undefined;
      this._minutesPastHour = undefined;
      this._month = undefined;
      this._recurringTime = undefined;
      this._repeat = undefined;
      this._timeZone = undefined;
      this._weekdays = undefined;
      this._year = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dayOfMonth = value.dayOfMonth;
      this._disable = value.disable;
      this._every = value.every;
      this._frequency = value.frequency;
      this._hourOfDay = value.hourOfDay;
      this._minutesPastHour = value.minutesPastHour;
      this._month = value.month;
      this._recurringTime = value.recurringTime;
      this._repeat = value.repeat;
      this._timeZone = value.timeZone;
      this._weekdays = value.weekdays;
      this._year = value.year;
    }
  }

  // day_of_month - computed: true, optional: true, required: false
  private _dayOfMonth?: number; 
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }
  public set dayOfMonth(value: number) {
    this._dayOfMonth = value;
  }
  public resetDayOfMonth() {
    this._dayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfMonthInput() {
    return this._dayOfMonth;
  }

  // disable - computed: true, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // every - computed: true, optional: true, required: false
  private _every?: number; 
  public get every() {
    return this.getNumberAttribute('every');
  }
  public set every(value: number) {
    this._every = value;
  }
  public resetEvery() {
    this._every = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get everyInput() {
    return this._every;
  }

  // frequency - computed: true, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
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

  // minutes_past_hour - computed: true, optional: true, required: false
  private _minutesPastHour?: number; 
  public get minutesPastHour() {
    return this.getNumberAttribute('minutes_past_hour');
  }
  public set minutesPastHour(value: number) {
    this._minutesPastHour = value;
  }
  public resetMinutesPastHour() {
    this._minutesPastHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesPastHourInput() {
    return this._minutesPastHour;
  }

  // month - computed: true, optional: true, required: false
  private _month?: number; 
  public get month() {
    return this.getNumberAttribute('month');
  }
  public set month(value: number) {
    this._month = value;
  }
  public resetMonth() {
    this._month = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // recurring_time - computed: true, optional: true, required: false
  private _recurringTime?: number; 
  public get recurringTime() {
    return this.getNumberAttribute('recurring_time');
  }
  public set recurringTime(value: number) {
    this._recurringTime = value;
  }
  public resetRecurringTime() {
    this._recurringTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringTimeInput() {
    return this._recurringTime;
  }

  // repeat - computed: true, optional: true, required: false
  private _repeat?: string; 
  public get repeat() {
    return this.getStringAttribute('repeat');
  }
  public set repeat(value: string) {
    this._repeat = value;
  }
  public resetRepeat() {
    this._repeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatInput() {
    return this._repeat;
  }

  // time_zone - computed: true, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // weekdays - computed: true, optional: true, required: false
  private _weekdays?: string[]; 
  public get weekdays() {
    return this.getListAttribute('weekdays');
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

  // year - computed: true, optional: true, required: false
  private _year?: number; 
  public get year() {
    return this.getNumberAttribute('year');
  }
  public set year(value: number) {
    this._year = value;
  }
  public resetYear() {
    this._year = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearInput() {
    return this._year;
  }
}
export interface GridServicerestartGroupRecurringSchedule {
  /**
  * Determines if the Restart Group should have a force restart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/grid_servicerestart_group#force GridServicerestartGroup#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * The restart method for a Grid restart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/grid_servicerestart_group#mode GridServicerestartGroup#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/grid_servicerestart_group#schedule GridServicerestartGroup#schedule}
  */
  readonly schedule?: GridServicerestartGroupRecurringScheduleSchedule;
  /**
  * The list of applicable services for the restart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/grid_servicerestart_group#services GridServicerestartGroup#services}
  */
  readonly services?: string[];
}

export function gridServicerestartGroupRecurringScheduleToTerraform(struct?: GridServicerestartGroupRecurringSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force: cdktf.booleanToTerraform(struct!.force),
    mode: cdktf.stringToTerraform(struct!.mode),
    schedule: gridServicerestartGroupRecurringScheduleScheduleToTerraform(struct!.schedule),
    services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.services),
  }
}


export function gridServicerestartGroupRecurringScheduleToHclTerraform(struct?: GridServicerestartGroupRecurringSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    force: {
      value: cdktf.booleanToHclTerraform(struct!.force),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule: {
      value: gridServicerestartGroupRecurringScheduleScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "struct",
      storageClassType: "GridServicerestartGroupRecurringScheduleSchedule",
    },
    services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.services),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GridServicerestartGroupRecurringScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GridServicerestartGroupRecurringSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._force !== undefined) {
      hasAnyValues = true;
      internalValueResult.force = this._force;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GridServicerestartGroupRecurringSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._force = undefined;
      this._mode = undefined;
      this._schedule.internalValue = undefined;
      this._services = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._force = value.force;
      this._mode = value.mode;
      this._schedule.internalValue = value.schedule;
      this._services = value.services;
    }
  }

  // force - computed: true, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // schedule - computed: true, optional: true, required: false
  private _schedule = new GridServicerestartGroupRecurringScheduleScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: GridServicerestartGroupRecurringScheduleSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // services - computed: true, optional: true, required: false
  private _services?: string[]; 
  public get services() {
    return this.getListAttribute('services');
  }
  public set services(value: string[]) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }
}
export interface GridServicerestartGroupStatus {
}

export function gridServicerestartGroupStatusToTerraform(struct?: GridServicerestartGroupStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function gridServicerestartGroupStatusToHclTerraform(struct?: GridServicerestartGroupStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GridServicerestartGroupStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GridServicerestartGroupStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GridServicerestartGroupStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // failures - computed: true, optional: false, required: false
  public get failures() {
    return this.getNumberAttribute('failures');
  }

  // finished - computed: true, optional: false, required: false
  public get finished() {
    return this.getNumberAttribute('finished');
  }

  // grouped - computed: true, optional: false, required: false
  public get grouped() {
    return this.getStringAttribute('grouped');
  }

  // needed_restart - computed: true, optional: false, required: false
  public get neededRestart() {
    return this.getNumberAttribute('needed_restart');
  }

  // no_restart - computed: true, optional: false, required: false
  public get noRestart() {
    return this.getNumberAttribute('no_restart');
  }

  // parent - computed: true, optional: false, required: false
  public get parent() {
    return this.getStringAttribute('parent');
  }

  // pending - computed: true, optional: false, required: false
  public get pending() {
    return this.getNumberAttribute('pending');
  }

  // pending_restart - computed: true, optional: false, required: false
  public get pendingRestart() {
    return this.getNumberAttribute('pending_restart');
  }

  // processing - computed: true, optional: false, required: false
  public get processing() {
    return this.getNumberAttribute('processing');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // restarting - computed: true, optional: false, required: false
  public get restarting() {
    return this.getNumberAttribute('restarting');
  }

  // success - computed: true, optional: false, required: false
  public get success() {
    return this.getNumberAttribute('success');
  }

  // timeouts - computed: true, optional: false, required: false
  public get timeouts() {
    return this.getNumberAttribute('timeouts');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/grid_servicerestart_group nios_grid_servicerestart_group}
*/
export class GridServicerestartGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_grid_servicerestart_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GridServicerestartGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GridServicerestartGroup to import
  * @param importFromId The id of the existing GridServicerestartGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/grid_servicerestart_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GridServicerestartGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_grid_servicerestart_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/grid_servicerestart_group nios_grid_servicerestart_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GridServicerestartGroupConfig
  */
  public constructor(scope: Construct, id: string, config: GridServicerestartGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'nios_grid_servicerestart_group',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._extattrs = config.extattrs;
    this._members = config.members;
    this._mode = config.mode;
    this._name = config.name;
    this._recurringSchedule.internalValue = config.recurringSchedule;
    this._service = config.service;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // extattrs - computed: true, optional: true, required: false
  private _extattrs?: { [key: string]: string }; 
  public get extattrs() {
    return this.getStringMapAttribute('extattrs');
  }
  public set extattrs(value: { [key: string]: string }) {
    this._extattrs = value;
  }
  public resetExtattrs() {
    this._extattrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extattrsInput() {
    return this._extattrs;
  }

  // extattrs_all - computed: true, optional: false, required: false
  private _extattrsAll = new cdktf.StringMap(this, "extattrs_all");
  public get extattrsAll() {
    return this._extattrsAll;
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getNumberAttribute('last_updated_time');
  }

  // members - computed: true, optional: true, required: false
  private _members?: string[]; 
  public get members() {
    return this.getListAttribute('members');
  }
  public set members(value: string[]) {
    this._members = value;
  }
  public resetMembers() {
    this._members = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // position - computed: true, optional: false, required: false
  public get position() {
    return this.getNumberAttribute('position');
  }

  // recurring_schedule - computed: true, optional: true, required: false
  private _recurringSchedule = new GridServicerestartGroupRecurringScheduleOutputReference(this, "recurring_schedule");
  public get recurringSchedule() {
    return this._recurringSchedule;
  }
  public putRecurringSchedule(value: GridServicerestartGroupRecurringSchedule) {
    this._recurringSchedule.internalValue = value;
  }
  public resetRecurringSchedule() {
    this._recurringSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringScheduleInput() {
    return this._recurringSchedule.internalValue;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // requests - computed: true, optional: false, required: false
  public get requests() {
    return this.getListAttribute('requests');
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // status - computed: true, optional: false, required: false
  private _status = new GridServicerestartGroupStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      extattrs: cdktf.hashMapper(cdktf.stringToTerraform)(this._extattrs),
      members: cdktf.listMapper(cdktf.stringToTerraform, false)(this._members),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      recurring_schedule: gridServicerestartGroupRecurringScheduleToTerraform(this._recurringSchedule.internalValue),
      service: cdktf.stringToTerraform(this._service),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extattrs: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extattrs),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      members: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._members),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      recurring_schedule: {
        value: gridServicerestartGroupRecurringScheduleToHclTerraform(this._recurringSchedule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GridServicerestartGroupRecurringSchedule",
      },
      service: {
        value: cdktf.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
