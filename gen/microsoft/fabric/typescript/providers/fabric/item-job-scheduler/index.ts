// https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/item_job_scheduler
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ItemJobSchedulerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The schedule configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/item_job_scheduler#configuration ItemJobScheduler#configuration}
  */
  readonly configuration: ItemJobSchedulerConfiguration;
  /**
  * Whether this schedule is enabled. True - Enabled, False - Disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/item_job_scheduler#enabled ItemJobScheduler#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * <i style="color:red;font-weight: bold">(ForceNew)</i> The item ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/item_job_scheduler#item_id ItemJobScheduler#item_id}
  */
  readonly itemId: string;
  /**
  * <i style="color:red;font-weight: bold">(ForceNew)</i> The job type. Allowed job types per item type: dataflow: {ApplyChanges, Execute}; lakehouse: {RefreshMaterializedLakeViews}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/item_job_scheduler#job_type ItemJobScheduler#job_type}
  */
  readonly jobType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/item_job_scheduler#timeouts ItemJobScheduler#timeouts}
  */
  readonly timeouts?: ItemJobSchedulerTimeouts;
  /**
  * <i style="color:red;font-weight: bold">(ForceNew)</i> The Workspace ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/item_job_scheduler#workspace_id ItemJobScheduler#workspace_id}
  */
  readonly workspaceId: string;
}
export interface ItemJobSchedulerConfigurationOccurrence {
  /**
  * Specifies a date to trigger the job, using a value between 1 and 31. For example, 2 means the second day of the month. The date must be valid. If an invalid date is provided, such as February 31st, it will automatically skip to the month that includes the 31st day. Value must be between 1 and 31. If the value of [`<.occurrence_type`](#<.occurrence_type) attribute is `DayOfMonth` this attribute is **REQUIRED**. If the value of [`<.occurrence_type`](#<.occurrence_type) attribute is `OrdinalWeekday` this attribute is **NULL**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/item_job_scheduler#day_of_month ItemJobScheduler#day_of_month}
  */
  readonly dayOfMonth?: number;
  /**
  * An enumerator that lists the day for triggering jobs. Value must be one of : `DayOfMonth`, `OrdinalWeekday`. If the [`<`](#<) attribute is set this attribute is **REQUIRED**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/item_job_scheduler#occurrence_type ItemJobScheduler#occurrence_type}
  */
  readonly occurrenceType: string;
  /**
  * The week of the month. Value must be one of : `Fifth`, `First`, `Fourth`, `Second`, `Third`. If the value of [`<.occurrence_type`](#<.occurrence_type) attribute is `OrdinalWeekday` this attribute is **REQUIRED**. If the value of [`<.occurrence_type`](#<.occurrence_type) attribute is `DayOfMonth` this attribute is **NULL**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/item_job_scheduler#week_index ItemJobScheduler#week_index}
  */
  readonly weekIndex?: string;
  /**
  * Week day for triggering jobs. Value must be one of : `Friday`, `Monday`, `Saturday`, `Sunday`, `Thursday`, `Tuesday`, `Wednesday`. If the value of [`<.occurrence_type`](#<.occurrence_type) attribute is `OrdinalWeekday` this attribute is **REQUIRED**. If the value of [`<.occurrence_type`](#<.occurrence_type) attribute is `DayOfMonth` this attribute is **NULL**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/item_job_scheduler#weekday ItemJobScheduler#weekday}
  */
  readonly weekday?: string;
}

export function itemJobSchedulerConfigurationOccurrenceToTerraform(struct?: ItemJobSchedulerConfigurationOccurrence | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_month: cdktf.numberToTerraform(struct!.dayOfMonth),
    occurrence_type: cdktf.stringToTerraform(struct!.occurrenceType),
    week_index: cdktf.stringToTerraform(struct!.weekIndex),
    weekday: cdktf.stringToTerraform(struct!.weekday),
  }
}


export function itemJobSchedulerConfigurationOccurrenceToHclTerraform(struct?: ItemJobSchedulerConfigurationOccurrence | cdktf.IResolvable): any {
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
    occurrence_type: {
      value: cdktf.stringToHclTerraform(struct!.occurrenceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    week_index: {
      value: cdktf.stringToHclTerraform(struct!.weekIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weekday: {
      value: cdktf.stringToHclTerraform(struct!.weekday),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItemJobSchedulerConfigurationOccurrenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ItemJobSchedulerConfigurationOccurrence | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfMonth = this._dayOfMonth;
    }
    if (this._occurrenceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.occurrenceType = this._occurrenceType;
    }
    if (this._weekIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekIndex = this._weekIndex;
    }
    if (this._weekday !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekday = this._weekday;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItemJobSchedulerConfigurationOccurrence | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dayOfMonth = undefined;
      this._occurrenceType = undefined;
      this._weekIndex = undefined;
      this._weekday = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dayOfMonth = value.dayOfMonth;
      this._occurrenceType = value.occurrenceType;
      this._weekIndex = value.weekIndex;
      this._weekday = value.weekday;
    }
  }

  // day_of_month - computed: false, optional: true, required: false
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

  // occurrence_type - computed: false, optional: false, required: true
  private _occurrenceType?: string; 
  public get occurrenceType() {
    return this.getStringAttribute('occurrence_type');
  }
  public set occurrenceType(value: string) {
    this._occurrenceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get occurrenceTypeInput() {
    return this._occurrenceType;
  }

  // week_index - computed: false, optional: true, required: false
  private _weekIndex?: string; 
  public get weekIndex() {
    return this.getStringAttribute('week_index');
  }
  public set weekIndex(value: string) {
    this._weekIndex = value;
  }
  public resetWeekIndex() {
    this._weekIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekIndexInput() {
    return this._weekIndex;
  }

  // weekday - computed: false, optional: true, required: false
  private _weekday?: string; 
  public get weekday() {
    return this.getStringAttribute('weekday');
  }
  public set weekday(value: string) {
    this._weekday = value;
  }
  public resetWeekday() {
    this._weekday = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdayInput() {
    return this._weekday;
  }
}
export interface ItemJobSchedulerConfiguration {
  /**
  * The end time for this schedule. The end time must be later than the start time. It has to be in UTC, using the YYYY-MM-DDTHH:mm:ssZ format. The time must be in UTC, using the YYYY-MM-DDTHH:mm:ssZ format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/item_job_scheduler#end_date_time ItemJobScheduler#end_date_time}
  */
  readonly endDateTime: string;
  /**
  * The time interval in minutes. A number between 1 and 5270400 (10 years). Value must be between 1 and 5270400. If the value of [`configuration.type`](#configuration.type) attribute is `Cron` this attribute is **REQUIRED**. If the value of [`configuration.type`](#configuration.type) attribute is one of `Daily`, `Weekly` or `Monthly` this attribute is **NULL**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/item_job_scheduler#interval ItemJobScheduler#interval}
  */
  readonly interval?: number;
  /**
  * A date for triggering the job. If the value of [`configuration.type`](#configuration.type) attribute is `Monthly` this attribute is **REQUIRED**. If the value of [`configuration.type`](#configuration.type) attribute is one of `Daily`, `Weekly` or `Cron` this attribute is **NULL**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/item_job_scheduler#occurrence ItemJobScheduler#occurrence}
  */
  readonly occurrence?: ItemJobSchedulerConfigurationOccurrence;
  /**
  * Specifies the monthly job repeat interval. For example, when set to 1 the job is triggered every month. Value must be between 1 and 12. If the value of [`configuration.type`](#configuration.type) attribute is `Monthly` this attribute is **REQUIRED**. If the value of [`configuration.type`](#configuration.type) attribute is one of `Daily`, `Weekly` or `Cron` this attribute is **NULL**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/item_job_scheduler#recurrence ItemJobScheduler#recurrence}
  */
  readonly recurrence?: number;
  /**
  * The start time for this schedule. If the start time is in the past, it will trigger a job instantly. The time is in UTC, using the YYYY-MM-DDTHH:mm:ssZ format. The time must be in UTC, using the YYYY-MM-DDTHH:mm:ssZ format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/item_job_scheduler#start_date_time ItemJobScheduler#start_date_time}
  */
  readonly startDateTime: string;
  /**
  * A list of time slots in hh:mm format, at most 100 elements are allowed. Set must contain at most 100 elements. Element value must satisfy all validations: Each time entry must be in hh:mm format. If the value of [`configuration.type`](#configuration.type) attribute is one of `Daily`, `Weekly` or `Monthly` this attribute is **REQUIRED**. If the value of [`configuration.type`](#configuration.type) attribute is `Cron` this attribute is **NULL**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/item_job_scheduler#times ItemJobScheduler#times}
  */
  readonly times?: string[];
  /**
  * A string represents the type of the plan. Value must be one of : `Cron`, `Daily`, `Monthly`, `Weekly`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/item_job_scheduler#type ItemJobScheduler#type}
  */
  readonly type: string;
  /**
  * A list of weekdays, at most seven elements are allowed. Set must contain at most 7 elements. Element value must satisfy all validations: value must be one of: ["Friday" "Monday" "Saturday" "Sunday" "Thursday" "Tuesday" "Wednesday"]. If the value of [`configuration.type`](#configuration.type) attribute is `Weekly` this attribute is **REQUIRED**. If the value of [`configuration.type`](#configuration.type) attribute is one of `Cron`, `Daily` or `Monthly` this attribute is **NULL**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/item_job_scheduler#weekdays ItemJobScheduler#weekdays}
  */
  readonly weekdays?: string[];
}

export function itemJobSchedulerConfigurationToTerraform(struct?: ItemJobSchedulerConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_date_time: cdktf.stringToTerraform(struct!.endDateTime),
    interval: cdktf.numberToTerraform(struct!.interval),
    occurrence: itemJobSchedulerConfigurationOccurrenceToTerraform(struct!.occurrence),
    recurrence: cdktf.numberToTerraform(struct!.recurrence),
    start_date_time: cdktf.stringToTerraform(struct!.startDateTime),
    times: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.times),
    type: cdktf.stringToTerraform(struct!.type),
    weekdays: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.weekdays),
  }
}


export function itemJobSchedulerConfigurationToHclTerraform(struct?: ItemJobSchedulerConfiguration | cdktf.IResolvable): any {
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
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    occurrence: {
      value: itemJobSchedulerConfigurationOccurrenceToHclTerraform(struct!.occurrence),
      isBlock: true,
      type: "struct",
      storageClassType: "ItemJobSchedulerConfigurationOccurrence",
    },
    recurrence: {
      value: cdktf.numberToHclTerraform(struct!.recurrence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_date_time: {
      value: cdktf.stringToHclTerraform(struct!.startDateTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    times: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.times),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weekdays: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.weekdays),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItemJobSchedulerConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ItemJobSchedulerConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endDateTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endDateTime = this._endDateTime;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._occurrence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.occurrence = this._occurrence?.internalValue;
    }
    if (this._recurrence !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrence = this._recurrence;
    }
    if (this._startDateTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDateTime = this._startDateTime;
    }
    if (this._times !== undefined) {
      hasAnyValues = true;
      internalValueResult.times = this._times;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._weekdays !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekdays = this._weekdays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItemJobSchedulerConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endDateTime = undefined;
      this._interval = undefined;
      this._occurrence.internalValue = undefined;
      this._recurrence = undefined;
      this._startDateTime = undefined;
      this._times = undefined;
      this._type = undefined;
      this._weekdays = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endDateTime = value.endDateTime;
      this._interval = value.interval;
      this._occurrence.internalValue = value.occurrence;
      this._recurrence = value.recurrence;
      this._startDateTime = value.startDateTime;
      this._times = value.times;
      this._type = value.type;
      this._weekdays = value.weekdays;
    }
  }

  // end_date_time - computed: false, optional: false, required: true
  private _endDateTime?: string; 
  public get endDateTime() {
    return this.getStringAttribute('end_date_time');
  }
  public set endDateTime(value: string) {
    this._endDateTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateTimeInput() {
    return this._endDateTime;
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

  // occurrence - computed: false, optional: true, required: false
  private _occurrence = new ItemJobSchedulerConfigurationOccurrenceOutputReference(this, "occurrence");
  public get occurrence() {
    return this._occurrence;
  }
  public putOccurrence(value: ItemJobSchedulerConfigurationOccurrence) {
    this._occurrence.internalValue = value;
  }
  public resetOccurrence() {
    this._occurrence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get occurrenceInput() {
    return this._occurrence.internalValue;
  }

  // recurrence - computed: false, optional: true, required: false
  private _recurrence?: number; 
  public get recurrence() {
    return this.getNumberAttribute('recurrence');
  }
  public set recurrence(value: number) {
    this._recurrence = value;
  }
  public resetRecurrence() {
    this._recurrence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceInput() {
    return this._recurrence;
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

  // times - computed: false, optional: true, required: false
  private _times?: string[]; 
  public get times() {
    return cdktf.Fn.tolist(this.getListAttribute('times'));
  }
  public set times(value: string[]) {
    this._times = value;
  }
  public resetTimes() {
    this._times = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timesInput() {
    return this._times;
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
}
export interface ItemJobSchedulerOwner {
}

export function itemJobSchedulerOwnerToTerraform(struct?: ItemJobSchedulerOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function itemJobSchedulerOwnerToHclTerraform(struct?: ItemJobSchedulerOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ItemJobSchedulerOwnerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ItemJobSchedulerOwner | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItemJobSchedulerOwner | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface ItemJobSchedulerTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/item_job_scheduler#create ItemJobScheduler#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/item_job_scheduler#delete ItemJobScheduler#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/item_job_scheduler#read ItemJobScheduler#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/item_job_scheduler#update ItemJobScheduler#update}
  */
  readonly update?: string;
}

export function itemJobSchedulerTimeoutsToTerraform(struct?: ItemJobSchedulerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function itemJobSchedulerTimeoutsToHclTerraform(struct?: ItemJobSchedulerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItemJobSchedulerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ItemJobSchedulerTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItemJobSchedulerTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/item_job_scheduler fabric_item_job_scheduler}
*/
export class ItemJobScheduler extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fabric_item_job_scheduler";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ItemJobScheduler resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ItemJobScheduler to import
  * @param importFromId The id of the existing ItemJobScheduler that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/item_job_scheduler#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ItemJobScheduler to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fabric_item_job_scheduler", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/item_job_scheduler fabric_item_job_scheduler} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ItemJobSchedulerConfig
  */
  public constructor(scope: Construct, id: string, config: ItemJobSchedulerConfig) {
    super(scope, id, {
      terraformResourceType: 'fabric_item_job_scheduler',
      terraformGeneratorMetadata: {
        providerName: 'fabric',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configuration.internalValue = config.configuration;
    this._enabled = config.enabled;
    this._itemId = config.itemId;
    this._jobType = config.jobType;
    this._timeouts.internalValue = config.timeouts;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration - computed: false, optional: false, required: true
  private _configuration = new ItemJobSchedulerConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: ItemJobSchedulerConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // created_date_time - computed: true, optional: false, required: false
  public get createdDateTime() {
    return this.getStringAttribute('created_date_time');
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // item_id - computed: false, optional: false, required: true
  private _itemId?: string; 
  public get itemId() {
    return this.getStringAttribute('item_id');
  }
  public set itemId(value: string) {
    this._itemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemIdInput() {
    return this._itemId;
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

  // owner - computed: true, optional: false, required: false
  private _owner = new ItemJobSchedulerOwnerOutputReference(this, "owner");
  public get owner() {
    return this._owner;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ItemJobSchedulerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ItemJobSchedulerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration: itemJobSchedulerConfigurationToTerraform(this._configuration.internalValue),
      enabled: cdktf.booleanToTerraform(this._enabled),
      item_id: cdktf.stringToTerraform(this._itemId),
      job_type: cdktf.stringToTerraform(this._jobType),
      timeouts: itemJobSchedulerTimeoutsToTerraform(this._timeouts.internalValue),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: itemJobSchedulerConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ItemJobSchedulerConfiguration",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      item_id: {
        value: cdktf.stringToHclTerraform(this._itemId),
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
      timeouts: {
        value: itemJobSchedulerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ItemJobSchedulerTimeouts",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
