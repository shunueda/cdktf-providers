// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_app_control_update_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementSetAppControlUpdateScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_app_control_update_schedule#id ManagementSetAppControlUpdateSchedule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * schedule_gateway_update block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_app_control_update_schedule#schedule_gateway_update ManagementSetAppControlUpdateSchedule#schedule_gateway_update}
  */
  readonly scheduleGatewayUpdate?: ManagementSetAppControlUpdateScheduleScheduleGatewayUpdate;
  /**
  * schedule_management_update block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_app_control_update_schedule#schedule_management_update ManagementSetAppControlUpdateSchedule#schedule_management_update}
  */
  readonly scheduleManagementUpdate?: ManagementSetAppControlUpdateScheduleScheduleManagementUpdate;
}
export interface ManagementSetAppControlUpdateScheduleScheduleGatewayUpdateScheduleRecurrence {
  /**
  * Days of the month to run the update.<br> Valid values: interval in the range of 1 to 31. <font color="red">Required only when</font> pattern is set to 'Monthly'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_app_control_update_schedule#days ManagementSetAppControlUpdateSchedule#days}
  */
  readonly days?: string[];
  /**
  * The amount of hours between updates. <font color="red">Required only when</font> pattern is set to 'Interval'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_app_control_update_schedule#interval_hours ManagementSetAppControlUpdateSchedule#interval_hours}
  */
  readonly intervalHours?: number;
  /**
  * The amount of minutes between updates. <font color="red">Required only when</font> pattern is set to 'Interval'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_app_control_update_schedule#interval_minutes ManagementSetAppControlUpdateSchedule#interval_minutes}
  */
  readonly intervalMinutes?: number;
  /**
  * The amount of seconds between updates. <font color="red">Required only when</font> pattern is set to 'Interval'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_app_control_update_schedule#interval_seconds ManagementSetAppControlUpdateSchedule#interval_seconds}
  */
  readonly intervalSeconds?: number;
  /**
  * Days recurrence pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_app_control_update_schedule#pattern ManagementSetAppControlUpdateSchedule#pattern}
  */
  readonly pattern?: string;
  /**
  * Days of the week to run the update.<br> Valid values: group of values from {'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'}. <font color="red">Required only when</font> pattern is set to 'Weekly'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_app_control_update_schedule#weekdays ManagementSetAppControlUpdateSchedule#weekdays}
  */
  readonly weekdays?: string[];
}

export function managementSetAppControlUpdateScheduleScheduleGatewayUpdateScheduleRecurrenceToTerraform(struct?: ManagementSetAppControlUpdateScheduleScheduleGatewayUpdateScheduleRecurrenceOutputReference | ManagementSetAppControlUpdateScheduleScheduleGatewayUpdateScheduleRecurrence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.days),
    interval_hours: cdktf.numberToTerraform(struct!.intervalHours),
    interval_minutes: cdktf.numberToTerraform(struct!.intervalMinutes),
    interval_seconds: cdktf.numberToTerraform(struct!.intervalSeconds),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    weekdays: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.weekdays),
  }
}


export function managementSetAppControlUpdateScheduleScheduleGatewayUpdateScheduleRecurrenceToHclTerraform(struct?: ManagementSetAppControlUpdateScheduleScheduleGatewayUpdateScheduleRecurrenceOutputReference | ManagementSetAppControlUpdateScheduleScheduleGatewayUpdateScheduleRecurrence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.days),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    interval_hours: {
      value: cdktf.numberToHclTerraform(struct!.intervalHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_minutes: {
      value: cdktf.numberToHclTerraform(struct!.intervalMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_seconds: {
      value: cdktf.numberToHclTerraform(struct!.intervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
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

export class ManagementSetAppControlUpdateScheduleScheduleGatewayUpdateScheduleRecurrenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSetAppControlUpdateScheduleScheduleGatewayUpdateScheduleRecurrence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._intervalHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalHours = this._intervalHours;
    }
    if (this._intervalMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalMinutes = this._intervalMinutes;
    }
    if (this._intervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalSeconds = this._intervalSeconds;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._weekdays !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekdays = this._weekdays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSetAppControlUpdateScheduleScheduleGatewayUpdateScheduleRecurrence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
      this._intervalHours = undefined;
      this._intervalMinutes = undefined;
      this._intervalSeconds = undefined;
      this._pattern = undefined;
      this._weekdays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
      this._intervalHours = value.intervalHours;
      this._intervalMinutes = value.intervalMinutes;
      this._intervalSeconds = value.intervalSeconds;
      this._pattern = value.pattern;
      this._weekdays = value.weekdays;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: string[]; 
  public get days() {
    return cdktf.Fn.tolist(this.getListAttribute('days'));
  }
  public set days(value: string[]) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // interval_hours - computed: false, optional: true, required: false
  private _intervalHours?: number; 
  public get intervalHours() {
    return this.getNumberAttribute('interval_hours');
  }
  public set intervalHours(value: number) {
    this._intervalHours = value;
  }
  public resetIntervalHours() {
    this._intervalHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalHoursInput() {
    return this._intervalHours;
  }

  // interval_minutes - computed: false, optional: true, required: false
  private _intervalMinutes?: number; 
  public get intervalMinutes() {
    return this.getNumberAttribute('interval_minutes');
  }
  public set intervalMinutes(value: number) {
    this._intervalMinutes = value;
  }
  public resetIntervalMinutes() {
    this._intervalMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalMinutesInput() {
    return this._intervalMinutes;
  }

  // interval_seconds - computed: false, optional: true, required: false
  private _intervalSeconds?: number; 
  public get intervalSeconds() {
    return this.getNumberAttribute('interval_seconds');
  }
  public set intervalSeconds(value: number) {
    this._intervalSeconds = value;
  }
  public resetIntervalSeconds() {
    this._intervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalSecondsInput() {
    return this._intervalSeconds;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
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
export interface ManagementSetAppControlUpdateScheduleScheduleGatewayUpdateSchedule {
  /**
  * Time in format HH:mm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_app_control_update_schedule#time ManagementSetAppControlUpdateSchedule#time}
  */
  readonly time?: string;
  /**
  * recurrence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_app_control_update_schedule#recurrence ManagementSetAppControlUpdateSchedule#recurrence}
  */
  readonly recurrence?: ManagementSetAppControlUpdateScheduleScheduleGatewayUpdateScheduleRecurrence;
}

export function managementSetAppControlUpdateScheduleScheduleGatewayUpdateScheduleToTerraform(struct?: ManagementSetAppControlUpdateScheduleScheduleGatewayUpdateScheduleOutputReference | ManagementSetAppControlUpdateScheduleScheduleGatewayUpdateSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time: cdktf.stringToTerraform(struct!.time),
    recurrence: managementSetAppControlUpdateScheduleScheduleGatewayUpdateScheduleRecurrenceToTerraform(struct!.recurrence),
  }
}


export function managementSetAppControlUpdateScheduleScheduleGatewayUpdateScheduleToHclTerraform(struct?: ManagementSetAppControlUpdateScheduleScheduleGatewayUpdateScheduleOutputReference | ManagementSetAppControlUpdateScheduleScheduleGatewayUpdateSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    time: {
      value: cdktf.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recurrence: {
      value: managementSetAppControlUpdateScheduleScheduleGatewayUpdateScheduleRecurrenceToHclTerraform(struct!.recurrence),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSetAppControlUpdateScheduleScheduleGatewayUpdateScheduleRecurrenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSetAppControlUpdateScheduleScheduleGatewayUpdateScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSetAppControlUpdateScheduleScheduleGatewayUpdateSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    if (this._recurrence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrence = this._recurrence?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSetAppControlUpdateScheduleScheduleGatewayUpdateSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._time = undefined;
      this._recurrence.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._time = value.time;
      this._recurrence.internalValue = value.recurrence;
    }
  }

  // time - computed: false, optional: true, required: false
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }

  // recurrence - computed: false, optional: true, required: false
  private _recurrence = new ManagementSetAppControlUpdateScheduleScheduleGatewayUpdateScheduleRecurrenceOutputReference(this, "recurrence");
  public get recurrence() {
    return this._recurrence;
  }
  public putRecurrence(value: ManagementSetAppControlUpdateScheduleScheduleGatewayUpdateScheduleRecurrence) {
    this._recurrence.internalValue = value;
  }
  public resetRecurrence() {
    this._recurrence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceInput() {
    return this._recurrence.internalValue;
  }
}
export interface ManagementSetAppControlUpdateScheduleScheduleGatewayUpdate {
  /**
  * Enable/Disable Application Control & URL Filtering Update Schedule on Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_app_control_update_schedule#enabled ManagementSetAppControlUpdateSchedule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_app_control_update_schedule#schedule ManagementSetAppControlUpdateSchedule#schedule}
  */
  readonly schedule?: ManagementSetAppControlUpdateScheduleScheduleGatewayUpdateSchedule;
}

export function managementSetAppControlUpdateScheduleScheduleGatewayUpdateToTerraform(struct?: ManagementSetAppControlUpdateScheduleScheduleGatewayUpdateOutputReference | ManagementSetAppControlUpdateScheduleScheduleGatewayUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    schedule: managementSetAppControlUpdateScheduleScheduleGatewayUpdateScheduleToTerraform(struct!.schedule),
  }
}


export function managementSetAppControlUpdateScheduleScheduleGatewayUpdateToHclTerraform(struct?: ManagementSetAppControlUpdateScheduleScheduleGatewayUpdateOutputReference | ManagementSetAppControlUpdateScheduleScheduleGatewayUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    schedule: {
      value: managementSetAppControlUpdateScheduleScheduleGatewayUpdateScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSetAppControlUpdateScheduleScheduleGatewayUpdateScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSetAppControlUpdateScheduleScheduleGatewayUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSetAppControlUpdateScheduleScheduleGatewayUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSetAppControlUpdateScheduleScheduleGatewayUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._schedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._schedule.internalValue = value.schedule;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new ManagementSetAppControlUpdateScheduleScheduleGatewayUpdateScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: ManagementSetAppControlUpdateScheduleScheduleGatewayUpdateSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }
}
export interface ManagementSetAppControlUpdateScheduleScheduleManagementUpdateScheduleRecurrence {
  /**
  * Days of the month to run the update.<br> Valid values: interval in the range of 1 to 31. <font color="red">Required only when</font> pattern is set to 'Monthly'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_app_control_update_schedule#days ManagementSetAppControlUpdateSchedule#days}
  */
  readonly days?: string[];
  /**
  * Days recurrence pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_app_control_update_schedule#pattern ManagementSetAppControlUpdateSchedule#pattern}
  */
  readonly pattern?: string;
  /**
  * Days of the week to run the update.<br> Valid values: group of values from {'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'}. <font color="red">Required only when</font> pattern is set to 'Weekly'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_app_control_update_schedule#weekdays ManagementSetAppControlUpdateSchedule#weekdays}
  */
  readonly weekdays?: string[];
}

export function managementSetAppControlUpdateScheduleScheduleManagementUpdateScheduleRecurrenceToTerraform(struct?: ManagementSetAppControlUpdateScheduleScheduleManagementUpdateScheduleRecurrenceOutputReference | ManagementSetAppControlUpdateScheduleScheduleManagementUpdateScheduleRecurrence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.days),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    weekdays: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.weekdays),
  }
}


export function managementSetAppControlUpdateScheduleScheduleManagementUpdateScheduleRecurrenceToHclTerraform(struct?: ManagementSetAppControlUpdateScheduleScheduleManagementUpdateScheduleRecurrenceOutputReference | ManagementSetAppControlUpdateScheduleScheduleManagementUpdateScheduleRecurrence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.days),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
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

export class ManagementSetAppControlUpdateScheduleScheduleManagementUpdateScheduleRecurrenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSetAppControlUpdateScheduleScheduleManagementUpdateScheduleRecurrence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._weekdays !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekdays = this._weekdays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSetAppControlUpdateScheduleScheduleManagementUpdateScheduleRecurrence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
      this._pattern = undefined;
      this._weekdays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
      this._pattern = value.pattern;
      this._weekdays = value.weekdays;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: string[]; 
  public get days() {
    return cdktf.Fn.tolist(this.getListAttribute('days'));
  }
  public set days(value: string[]) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
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
export interface ManagementSetAppControlUpdateScheduleScheduleManagementUpdateSchedule {
  /**
  * Time in format HH:mm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_app_control_update_schedule#time ManagementSetAppControlUpdateSchedule#time}
  */
  readonly time?: string;
  /**
  * recurrence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_app_control_update_schedule#recurrence ManagementSetAppControlUpdateSchedule#recurrence}
  */
  readonly recurrence?: ManagementSetAppControlUpdateScheduleScheduleManagementUpdateScheduleRecurrence;
}

export function managementSetAppControlUpdateScheduleScheduleManagementUpdateScheduleToTerraform(struct?: ManagementSetAppControlUpdateScheduleScheduleManagementUpdateScheduleOutputReference | ManagementSetAppControlUpdateScheduleScheduleManagementUpdateSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time: cdktf.stringToTerraform(struct!.time),
    recurrence: managementSetAppControlUpdateScheduleScheduleManagementUpdateScheduleRecurrenceToTerraform(struct!.recurrence),
  }
}


export function managementSetAppControlUpdateScheduleScheduleManagementUpdateScheduleToHclTerraform(struct?: ManagementSetAppControlUpdateScheduleScheduleManagementUpdateScheduleOutputReference | ManagementSetAppControlUpdateScheduleScheduleManagementUpdateSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    time: {
      value: cdktf.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recurrence: {
      value: managementSetAppControlUpdateScheduleScheduleManagementUpdateScheduleRecurrenceToHclTerraform(struct!.recurrence),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSetAppControlUpdateScheduleScheduleManagementUpdateScheduleRecurrenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSetAppControlUpdateScheduleScheduleManagementUpdateScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSetAppControlUpdateScheduleScheduleManagementUpdateSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    if (this._recurrence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrence = this._recurrence?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSetAppControlUpdateScheduleScheduleManagementUpdateSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._time = undefined;
      this._recurrence.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._time = value.time;
      this._recurrence.internalValue = value.recurrence;
    }
  }

  // time - computed: false, optional: true, required: false
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }

  // recurrence - computed: false, optional: true, required: false
  private _recurrence = new ManagementSetAppControlUpdateScheduleScheduleManagementUpdateScheduleRecurrenceOutputReference(this, "recurrence");
  public get recurrence() {
    return this._recurrence;
  }
  public putRecurrence(value: ManagementSetAppControlUpdateScheduleScheduleManagementUpdateScheduleRecurrence) {
    this._recurrence.internalValue = value;
  }
  public resetRecurrence() {
    this._recurrence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceInput() {
    return this._recurrence.internalValue;
  }
}
export interface ManagementSetAppControlUpdateScheduleScheduleManagementUpdate {
  /**
  * Enable/Disable Application Control & URL Filtering Update Schedule on Management Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_app_control_update_schedule#enabled ManagementSetAppControlUpdateSchedule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_app_control_update_schedule#schedule ManagementSetAppControlUpdateSchedule#schedule}
  */
  readonly schedule?: ManagementSetAppControlUpdateScheduleScheduleManagementUpdateSchedule;
}

export function managementSetAppControlUpdateScheduleScheduleManagementUpdateToTerraform(struct?: ManagementSetAppControlUpdateScheduleScheduleManagementUpdateOutputReference | ManagementSetAppControlUpdateScheduleScheduleManagementUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    schedule: managementSetAppControlUpdateScheduleScheduleManagementUpdateScheduleToTerraform(struct!.schedule),
  }
}


export function managementSetAppControlUpdateScheduleScheduleManagementUpdateToHclTerraform(struct?: ManagementSetAppControlUpdateScheduleScheduleManagementUpdateOutputReference | ManagementSetAppControlUpdateScheduleScheduleManagementUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    schedule: {
      value: managementSetAppControlUpdateScheduleScheduleManagementUpdateScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSetAppControlUpdateScheduleScheduleManagementUpdateScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSetAppControlUpdateScheduleScheduleManagementUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSetAppControlUpdateScheduleScheduleManagementUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSetAppControlUpdateScheduleScheduleManagementUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._schedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._schedule.internalValue = value.schedule;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new ManagementSetAppControlUpdateScheduleScheduleManagementUpdateScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: ManagementSetAppControlUpdateScheduleScheduleManagementUpdateSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_app_control_update_schedule checkpoint_management_set_app_control_update_schedule}
*/
export class ManagementSetAppControlUpdateSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_set_app_control_update_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementSetAppControlUpdateSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementSetAppControlUpdateSchedule to import
  * @param importFromId The id of the existing ManagementSetAppControlUpdateSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_app_control_update_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementSetAppControlUpdateSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_set_app_control_update_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_app_control_update_schedule checkpoint_management_set_app_control_update_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementSetAppControlUpdateScheduleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ManagementSetAppControlUpdateScheduleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_set_app_control_update_schedule',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
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
    this._scheduleGatewayUpdate.internalValue = config.scheduleGatewayUpdate;
    this._scheduleManagementUpdate.internalValue = config.scheduleManagementUpdate;
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

  // schedule_gateway_update - computed: false, optional: true, required: false
  private _scheduleGatewayUpdate = new ManagementSetAppControlUpdateScheduleScheduleGatewayUpdateOutputReference(this, "schedule_gateway_update");
  public get scheduleGatewayUpdate() {
    return this._scheduleGatewayUpdate;
  }
  public putScheduleGatewayUpdate(value: ManagementSetAppControlUpdateScheduleScheduleGatewayUpdate) {
    this._scheduleGatewayUpdate.internalValue = value;
  }
  public resetScheduleGatewayUpdate() {
    this._scheduleGatewayUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleGatewayUpdateInput() {
    return this._scheduleGatewayUpdate.internalValue;
  }

  // schedule_management_update - computed: false, optional: true, required: false
  private _scheduleManagementUpdate = new ManagementSetAppControlUpdateScheduleScheduleManagementUpdateOutputReference(this, "schedule_management_update");
  public get scheduleManagementUpdate() {
    return this._scheduleManagementUpdate;
  }
  public putScheduleManagementUpdate(value: ManagementSetAppControlUpdateScheduleScheduleManagementUpdate) {
    this._scheduleManagementUpdate.internalValue = value;
  }
  public resetScheduleManagementUpdate() {
    this._scheduleManagementUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleManagementUpdateInput() {
    return this._scheduleManagementUpdate.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      schedule_gateway_update: managementSetAppControlUpdateScheduleScheduleGatewayUpdateToTerraform(this._scheduleGatewayUpdate.internalValue),
      schedule_management_update: managementSetAppControlUpdateScheduleScheduleManagementUpdateToTerraform(this._scheduleManagementUpdate.internalValue),
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
      schedule_gateway_update: {
        value: managementSetAppControlUpdateScheduleScheduleGatewayUpdateToHclTerraform(this._scheduleGatewayUpdate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementSetAppControlUpdateScheduleScheduleGatewayUpdateList",
      },
      schedule_management_update: {
        value: managementSetAppControlUpdateScheduleScheduleManagementUpdateToHclTerraform(this._scheduleManagementUpdate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementSetAppControlUpdateScheduleScheduleManagementUpdateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
