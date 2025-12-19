// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UpdateWindowsConfig extends cdktf.TerraformMetaArguments {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows#enabled UpdateWindows#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows#id UpdateWindows#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows#name UpdateWindows#name}
  */
  readonly name: string;
  /**
  * Possible Values: `MONTHLY`, `ONCE`, `DAILY`, `WEEKLY`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows#recurrence UpdateWindows#recurrence}
  */
  readonly recurrence: string;
  /**
  * daily_recurrence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows#daily_recurrence UpdateWindows#daily_recurrence}
  */
  readonly dailyRecurrence?: UpdateWindowsDailyRecurrence;
  /**
  * monthly_recurrence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows#monthly_recurrence UpdateWindows#monthly_recurrence}
  */
  readonly monthlyRecurrence?: UpdateWindowsMonthlyRecurrence;
  /**
  * once_recurrence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows#once_recurrence UpdateWindows#once_recurrence}
  */
  readonly onceRecurrence?: UpdateWindowsOnceRecurrence;
  /**
  * weekly_recurrence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows#weekly_recurrence UpdateWindows#weekly_recurrence}
  */
  readonly weeklyRecurrence?: UpdateWindowsWeeklyRecurrence;
}
export interface UpdateWindowsDailyRecurrenceRecurrenceRange {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows#end UpdateWindows#end}
  */
  readonly end: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows#start UpdateWindows#start}
  */
  readonly start: string;
}

export function updateWindowsDailyRecurrenceRecurrenceRangeToTerraform(struct?: UpdateWindowsDailyRecurrenceRecurrenceRangeOutputReference | UpdateWindowsDailyRecurrenceRecurrenceRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function updateWindowsDailyRecurrenceRecurrenceRangeToHclTerraform(struct?: UpdateWindowsDailyRecurrenceRecurrenceRangeOutputReference | UpdateWindowsDailyRecurrenceRecurrenceRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpdateWindowsDailyRecurrenceRecurrenceRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UpdateWindowsDailyRecurrenceRecurrenceRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpdateWindowsDailyRecurrenceRecurrenceRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._end = undefined;
      this._start = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: false, required: true
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface UpdateWindowsDailyRecurrenceUpdateTime {
  /**
  * Duration (minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows#duration UpdateWindows#duration}
  */
  readonly duration: number;
  /**
  * Start time (24-hour clock)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows#start_time UpdateWindows#start_time}
  */
  readonly startTime: string;
  /**
  * Possible Values: `GMT_06_00`, `GMT_12_00`, `GMT_10_00`, `GMT_07_00`, `GMT_00_00`, `GMT_11_00`, `GMT_03_00`, `GMT_01_00`, `GMT_05_00`, `GMT_09_00`, `GMT_02_00`, `GMT_04_00`, `GMT_08_00`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows#time_zone UpdateWindows#time_zone}
  */
  readonly timeZone: string;
}

export function updateWindowsDailyRecurrenceUpdateTimeToTerraform(struct?: UpdateWindowsDailyRecurrenceUpdateTimeOutputReference | UpdateWindowsDailyRecurrenceUpdateTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}


export function updateWindowsDailyRecurrenceUpdateTimeToHclTerraform(struct?: UpdateWindowsDailyRecurrenceUpdateTimeOutputReference | UpdateWindowsDailyRecurrenceUpdateTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpdateWindowsDailyRecurrenceUpdateTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UpdateWindowsDailyRecurrenceUpdateTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpdateWindowsDailyRecurrenceUpdateTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._startTime = undefined;
      this._timeZone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._startTime = value.startTime;
      this._timeZone = value.timeZone;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
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

  // time_zone - computed: false, optional: false, required: true
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}
export interface UpdateWindowsDailyRecurrence {
  /**
  * Every **X** days:
  * * `1` = every day,
  * * `2` = every two days,
  * * `3` = every three days,
  * * etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows#every UpdateWindows#every}
  */
  readonly every: number;
  /**
  * recurrence_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows#recurrence_range UpdateWindows#recurrence_range}
  */
  readonly recurrenceRange: UpdateWindowsDailyRecurrenceRecurrenceRange;
  /**
  * update_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows#update_time UpdateWindows#update_time}
  */
  readonly updateTime: UpdateWindowsDailyRecurrenceUpdateTime;
}

export function updateWindowsDailyRecurrenceToTerraform(struct?: UpdateWindowsDailyRecurrenceOutputReference | UpdateWindowsDailyRecurrence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    every: cdktf.numberToTerraform(struct!.every),
    recurrence_range: updateWindowsDailyRecurrenceRecurrenceRangeToTerraform(struct!.recurrenceRange),
    update_time: updateWindowsDailyRecurrenceUpdateTimeToTerraform(struct!.updateTime),
  }
}


export function updateWindowsDailyRecurrenceToHclTerraform(struct?: UpdateWindowsDailyRecurrenceOutputReference | UpdateWindowsDailyRecurrence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    every: {
      value: cdktf.numberToHclTerraform(struct!.every),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recurrence_range: {
      value: updateWindowsDailyRecurrenceRecurrenceRangeToHclTerraform(struct!.recurrenceRange),
      isBlock: true,
      type: "list",
      storageClassType: "UpdateWindowsDailyRecurrenceRecurrenceRangeList",
    },
    update_time: {
      value: updateWindowsDailyRecurrenceUpdateTimeToHclTerraform(struct!.updateTime),
      isBlock: true,
      type: "list",
      storageClassType: "UpdateWindowsDailyRecurrenceUpdateTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpdateWindowsDailyRecurrenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UpdateWindowsDailyRecurrence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._every !== undefined) {
      hasAnyValues = true;
      internalValueResult.every = this._every;
    }
    if (this._recurrenceRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrenceRange = this._recurrenceRange?.internalValue;
    }
    if (this._updateTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateTime = this._updateTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpdateWindowsDailyRecurrence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._every = undefined;
      this._recurrenceRange.internalValue = undefined;
      this._updateTime.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._every = value.every;
      this._recurrenceRange.internalValue = value.recurrenceRange;
      this._updateTime.internalValue = value.updateTime;
    }
  }

  // every - computed: false, optional: false, required: true
  private _every?: number; 
  public get every() {
    return this.getNumberAttribute('every');
  }
  public set every(value: number) {
    this._every = value;
  }
  // Temporarily expose input value. Use with caution.
  public get everyInput() {
    return this._every;
  }

  // recurrence_range - computed: false, optional: false, required: true
  private _recurrenceRange = new UpdateWindowsDailyRecurrenceRecurrenceRangeOutputReference(this, "recurrence_range");
  public get recurrenceRange() {
    return this._recurrenceRange;
  }
  public putRecurrenceRange(value: UpdateWindowsDailyRecurrenceRecurrenceRange) {
    this._recurrenceRange.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceRangeInput() {
    return this._recurrenceRange.internalValue;
  }

  // update_time - computed: false, optional: false, required: true
  private _updateTime = new UpdateWindowsDailyRecurrenceUpdateTimeOutputReference(this, "update_time");
  public get updateTime() {
    return this._updateTime;
  }
  public putUpdateTime(value: UpdateWindowsDailyRecurrenceUpdateTime) {
    this._updateTime.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get updateTimeInput() {
    return this._updateTime.internalValue;
  }
}
export interface UpdateWindowsMonthlyRecurrenceRecurrenceRange {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows#end UpdateWindows#end}
  */
  readonly end: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows#start UpdateWindows#start}
  */
  readonly start: string;
}

export function updateWindowsMonthlyRecurrenceRecurrenceRangeToTerraform(struct?: UpdateWindowsMonthlyRecurrenceRecurrenceRangeOutputReference | UpdateWindowsMonthlyRecurrenceRecurrenceRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function updateWindowsMonthlyRecurrenceRecurrenceRangeToHclTerraform(struct?: UpdateWindowsMonthlyRecurrenceRecurrenceRangeOutputReference | UpdateWindowsMonthlyRecurrenceRecurrenceRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpdateWindowsMonthlyRecurrenceRecurrenceRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UpdateWindowsMonthlyRecurrenceRecurrenceRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpdateWindowsMonthlyRecurrenceRecurrenceRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._end = undefined;
      this._start = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: false, required: true
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface UpdateWindowsMonthlyRecurrenceUpdateTime {
  /**
  * Duration (minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows#duration UpdateWindows#duration}
  */
  readonly duration: number;
  /**
  * Start time (24-hour clock)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows#start_time UpdateWindows#start_time}
  */
  readonly startTime: string;
  /**
  * Possible Values: `GMT_06_00`, `GMT_12_00`, `GMT_10_00`, `GMT_07_00`, `GMT_00_00`, `GMT_11_00`, `GMT_03_00`, `GMT_01_00`, `GMT_05_00`, `GMT_09_00`, `GMT_02_00`, `GMT_04_00`, `GMT_08_00`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows#time_zone UpdateWindows#time_zone}
  */
  readonly timeZone: string;
}

export function updateWindowsMonthlyRecurrenceUpdateTimeToTerraform(struct?: UpdateWindowsMonthlyRecurrenceUpdateTimeOutputReference | UpdateWindowsMonthlyRecurrenceUpdateTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}


export function updateWindowsMonthlyRecurrenceUpdateTimeToHclTerraform(struct?: UpdateWindowsMonthlyRecurrenceUpdateTimeOutputReference | UpdateWindowsMonthlyRecurrenceUpdateTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpdateWindowsMonthlyRecurrenceUpdateTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UpdateWindowsMonthlyRecurrenceUpdateTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpdateWindowsMonthlyRecurrenceUpdateTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._startTime = undefined;
      this._timeZone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._startTime = value.startTime;
      this._timeZone = value.timeZone;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
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

  // time_zone - computed: false, optional: false, required: true
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}
export interface UpdateWindowsMonthlyRecurrence {
  /**
  * Every **X** months:
  * * `1` = every month,
  * * `2` = every two months,
  * * `3` = every three months,
  * * etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows#every UpdateWindows#every}
  */
  readonly every: number;
  /**
  * Day of the month
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows#selected_month_day UpdateWindows#selected_month_day}
  */
  readonly selectedMonthDay: number;
  /**
  * recurrence_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows#recurrence_range UpdateWindows#recurrence_range}
  */
  readonly recurrenceRange: UpdateWindowsMonthlyRecurrenceRecurrenceRange;
  /**
  * update_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows#update_time UpdateWindows#update_time}
  */
  readonly updateTime: UpdateWindowsMonthlyRecurrenceUpdateTime;
}

export function updateWindowsMonthlyRecurrenceToTerraform(struct?: UpdateWindowsMonthlyRecurrenceOutputReference | UpdateWindowsMonthlyRecurrence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    every: cdktf.numberToTerraform(struct!.every),
    selected_month_day: cdktf.numberToTerraform(struct!.selectedMonthDay),
    recurrence_range: updateWindowsMonthlyRecurrenceRecurrenceRangeToTerraform(struct!.recurrenceRange),
    update_time: updateWindowsMonthlyRecurrenceUpdateTimeToTerraform(struct!.updateTime),
  }
}


export function updateWindowsMonthlyRecurrenceToHclTerraform(struct?: UpdateWindowsMonthlyRecurrenceOutputReference | UpdateWindowsMonthlyRecurrence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    every: {
      value: cdktf.numberToHclTerraform(struct!.every),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    selected_month_day: {
      value: cdktf.numberToHclTerraform(struct!.selectedMonthDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recurrence_range: {
      value: updateWindowsMonthlyRecurrenceRecurrenceRangeToHclTerraform(struct!.recurrenceRange),
      isBlock: true,
      type: "list",
      storageClassType: "UpdateWindowsMonthlyRecurrenceRecurrenceRangeList",
    },
    update_time: {
      value: updateWindowsMonthlyRecurrenceUpdateTimeToHclTerraform(struct!.updateTime),
      isBlock: true,
      type: "list",
      storageClassType: "UpdateWindowsMonthlyRecurrenceUpdateTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpdateWindowsMonthlyRecurrenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UpdateWindowsMonthlyRecurrence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._every !== undefined) {
      hasAnyValues = true;
      internalValueResult.every = this._every;
    }
    if (this._selectedMonthDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedMonthDay = this._selectedMonthDay;
    }
    if (this._recurrenceRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrenceRange = this._recurrenceRange?.internalValue;
    }
    if (this._updateTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateTime = this._updateTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpdateWindowsMonthlyRecurrence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._every = undefined;
      this._selectedMonthDay = undefined;
      this._recurrenceRange.internalValue = undefined;
      this._updateTime.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._every = value.every;
      this._selectedMonthDay = value.selectedMonthDay;
      this._recurrenceRange.internalValue = value.recurrenceRange;
      this._updateTime.internalValue = value.updateTime;
    }
  }

  // every - computed: false, optional: false, required: true
  private _every?: number; 
  public get every() {
    return this.getNumberAttribute('every');
  }
  public set every(value: number) {
    this._every = value;
  }
  // Temporarily expose input value. Use with caution.
  public get everyInput() {
    return this._every;
  }

  // selected_month_day - computed: false, optional: false, required: true
  private _selectedMonthDay?: number; 
  public get selectedMonthDay() {
    return this.getNumberAttribute('selected_month_day');
  }
  public set selectedMonthDay(value: number) {
    this._selectedMonthDay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedMonthDayInput() {
    return this._selectedMonthDay;
  }

  // recurrence_range - computed: false, optional: false, required: true
  private _recurrenceRange = new UpdateWindowsMonthlyRecurrenceRecurrenceRangeOutputReference(this, "recurrence_range");
  public get recurrenceRange() {
    return this._recurrenceRange;
  }
  public putRecurrenceRange(value: UpdateWindowsMonthlyRecurrenceRecurrenceRange) {
    this._recurrenceRange.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceRangeInput() {
    return this._recurrenceRange.internalValue;
  }

  // update_time - computed: false, optional: false, required: true
  private _updateTime = new UpdateWindowsMonthlyRecurrenceUpdateTimeOutputReference(this, "update_time");
  public get updateTime() {
    return this._updateTime;
  }
  public putUpdateTime(value: UpdateWindowsMonthlyRecurrenceUpdateTime) {
    this._updateTime.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get updateTimeInput() {
    return this._updateTime.internalValue;
  }
}
export interface UpdateWindowsOnceRecurrenceRecurrenceRange {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows#end UpdateWindows#end}
  */
  readonly end: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows#start UpdateWindows#start}
  */
  readonly start: string;
}

export function updateWindowsOnceRecurrenceRecurrenceRangeToTerraform(struct?: UpdateWindowsOnceRecurrenceRecurrenceRangeOutputReference | UpdateWindowsOnceRecurrenceRecurrenceRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function updateWindowsOnceRecurrenceRecurrenceRangeToHclTerraform(struct?: UpdateWindowsOnceRecurrenceRecurrenceRangeOutputReference | UpdateWindowsOnceRecurrenceRecurrenceRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpdateWindowsOnceRecurrenceRecurrenceRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UpdateWindowsOnceRecurrenceRecurrenceRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpdateWindowsOnceRecurrenceRecurrenceRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._end = undefined;
      this._start = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: false, required: true
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface UpdateWindowsOnceRecurrence {
  /**
  * recurrence_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows#recurrence_range UpdateWindows#recurrence_range}
  */
  readonly recurrenceRange: UpdateWindowsOnceRecurrenceRecurrenceRange;
}

export function updateWindowsOnceRecurrenceToTerraform(struct?: UpdateWindowsOnceRecurrenceOutputReference | UpdateWindowsOnceRecurrence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recurrence_range: updateWindowsOnceRecurrenceRecurrenceRangeToTerraform(struct!.recurrenceRange),
  }
}


export function updateWindowsOnceRecurrenceToHclTerraform(struct?: UpdateWindowsOnceRecurrenceOutputReference | UpdateWindowsOnceRecurrence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recurrence_range: {
      value: updateWindowsOnceRecurrenceRecurrenceRangeToHclTerraform(struct!.recurrenceRange),
      isBlock: true,
      type: "list",
      storageClassType: "UpdateWindowsOnceRecurrenceRecurrenceRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpdateWindowsOnceRecurrenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UpdateWindowsOnceRecurrence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recurrenceRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrenceRange = this._recurrenceRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpdateWindowsOnceRecurrence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recurrenceRange.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recurrenceRange.internalValue = value.recurrenceRange;
    }
  }

  // recurrence_range - computed: false, optional: false, required: true
  private _recurrenceRange = new UpdateWindowsOnceRecurrenceRecurrenceRangeOutputReference(this, "recurrence_range");
  public get recurrenceRange() {
    return this._recurrenceRange;
  }
  public putRecurrenceRange(value: UpdateWindowsOnceRecurrenceRecurrenceRange) {
    this._recurrenceRange.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceRangeInput() {
    return this._recurrenceRange.internalValue;
  }
}
export interface UpdateWindowsWeeklyRecurrenceRecurrenceRange {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows#end UpdateWindows#end}
  */
  readonly end: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows#start UpdateWindows#start}
  */
  readonly start: string;
}

export function updateWindowsWeeklyRecurrenceRecurrenceRangeToTerraform(struct?: UpdateWindowsWeeklyRecurrenceRecurrenceRangeOutputReference | UpdateWindowsWeeklyRecurrenceRecurrenceRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function updateWindowsWeeklyRecurrenceRecurrenceRangeToHclTerraform(struct?: UpdateWindowsWeeklyRecurrenceRecurrenceRangeOutputReference | UpdateWindowsWeeklyRecurrenceRecurrenceRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpdateWindowsWeeklyRecurrenceRecurrenceRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UpdateWindowsWeeklyRecurrenceRecurrenceRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpdateWindowsWeeklyRecurrenceRecurrenceRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._end = undefined;
      this._start = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: false, required: true
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface UpdateWindowsWeeklyRecurrenceSelectedWeekDays {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows#friday UpdateWindows#friday}
  */
  readonly friday: boolean | cdktf.IResolvable;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows#monday UpdateWindows#monday}
  */
  readonly monday: boolean | cdktf.IResolvable;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows#saturday UpdateWindows#saturday}
  */
  readonly saturday: boolean | cdktf.IResolvable;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows#sunday UpdateWindows#sunday}
  */
  readonly sunday: boolean | cdktf.IResolvable;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows#thursday UpdateWindows#thursday}
  */
  readonly thursday: boolean | cdktf.IResolvable;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows#tuesday UpdateWindows#tuesday}
  */
  readonly tuesday: boolean | cdktf.IResolvable;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows#wednesday UpdateWindows#wednesday}
  */
  readonly wednesday: boolean | cdktf.IResolvable;
}

export function updateWindowsWeeklyRecurrenceSelectedWeekDaysToTerraform(struct?: UpdateWindowsWeeklyRecurrenceSelectedWeekDaysOutputReference | UpdateWindowsWeeklyRecurrenceSelectedWeekDays): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    friday: cdktf.booleanToTerraform(struct!.friday),
    monday: cdktf.booleanToTerraform(struct!.monday),
    saturday: cdktf.booleanToTerraform(struct!.saturday),
    sunday: cdktf.booleanToTerraform(struct!.sunday),
    thursday: cdktf.booleanToTerraform(struct!.thursday),
    tuesday: cdktf.booleanToTerraform(struct!.tuesday),
    wednesday: cdktf.booleanToTerraform(struct!.wednesday),
  }
}


export function updateWindowsWeeklyRecurrenceSelectedWeekDaysToHclTerraform(struct?: UpdateWindowsWeeklyRecurrenceSelectedWeekDaysOutputReference | UpdateWindowsWeeklyRecurrenceSelectedWeekDays): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    friday: {
      value: cdktf.booleanToHclTerraform(struct!.friday),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monday: {
      value: cdktf.booleanToHclTerraform(struct!.monday),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    saturday: {
      value: cdktf.booleanToHclTerraform(struct!.saturday),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sunday: {
      value: cdktf.booleanToHclTerraform(struct!.sunday),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    thursday: {
      value: cdktf.booleanToHclTerraform(struct!.thursday),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tuesday: {
      value: cdktf.booleanToHclTerraform(struct!.tuesday),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wednesday: {
      value: cdktf.booleanToHclTerraform(struct!.wednesday),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpdateWindowsWeeklyRecurrenceSelectedWeekDaysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UpdateWindowsWeeklyRecurrenceSelectedWeekDays | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._friday !== undefined) {
      hasAnyValues = true;
      internalValueResult.friday = this._friday;
    }
    if (this._monday !== undefined) {
      hasAnyValues = true;
      internalValueResult.monday = this._monday;
    }
    if (this._saturday !== undefined) {
      hasAnyValues = true;
      internalValueResult.saturday = this._saturday;
    }
    if (this._sunday !== undefined) {
      hasAnyValues = true;
      internalValueResult.sunday = this._sunday;
    }
    if (this._thursday !== undefined) {
      hasAnyValues = true;
      internalValueResult.thursday = this._thursday;
    }
    if (this._tuesday !== undefined) {
      hasAnyValues = true;
      internalValueResult.tuesday = this._tuesday;
    }
    if (this._wednesday !== undefined) {
      hasAnyValues = true;
      internalValueResult.wednesday = this._wednesday;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpdateWindowsWeeklyRecurrenceSelectedWeekDays | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._friday = undefined;
      this._monday = undefined;
      this._saturday = undefined;
      this._sunday = undefined;
      this._thursday = undefined;
      this._tuesday = undefined;
      this._wednesday = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._friday = value.friday;
      this._monday = value.monday;
      this._saturday = value.saturday;
      this._sunday = value.sunday;
      this._thursday = value.thursday;
      this._tuesday = value.tuesday;
      this._wednesday = value.wednesday;
    }
  }

  // friday - computed: false, optional: false, required: true
  private _friday?: boolean | cdktf.IResolvable; 
  public get friday() {
    return this.getBooleanAttribute('friday');
  }
  public set friday(value: boolean | cdktf.IResolvable) {
    this._friday = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fridayInput() {
    return this._friday;
  }

  // monday - computed: false, optional: false, required: true
  private _monday?: boolean | cdktf.IResolvable; 
  public get monday() {
    return this.getBooleanAttribute('monday');
  }
  public set monday(value: boolean | cdktf.IResolvable) {
    this._monday = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mondayInput() {
    return this._monday;
  }

  // saturday - computed: false, optional: false, required: true
  private _saturday?: boolean | cdktf.IResolvable; 
  public get saturday() {
    return this.getBooleanAttribute('saturday');
  }
  public set saturday(value: boolean | cdktf.IResolvable) {
    this._saturday = value;
  }
  // Temporarily expose input value. Use with caution.
  public get saturdayInput() {
    return this._saturday;
  }

  // sunday - computed: false, optional: false, required: true
  private _sunday?: boolean | cdktf.IResolvable; 
  public get sunday() {
    return this.getBooleanAttribute('sunday');
  }
  public set sunday(value: boolean | cdktf.IResolvable) {
    this._sunday = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sundayInput() {
    return this._sunday;
  }

  // thursday - computed: false, optional: false, required: true
  private _thursday?: boolean | cdktf.IResolvable; 
  public get thursday() {
    return this.getBooleanAttribute('thursday');
  }
  public set thursday(value: boolean | cdktf.IResolvable) {
    this._thursday = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thursdayInput() {
    return this._thursday;
  }

  // tuesday - computed: false, optional: false, required: true
  private _tuesday?: boolean | cdktf.IResolvable; 
  public get tuesday() {
    return this.getBooleanAttribute('tuesday');
  }
  public set tuesday(value: boolean | cdktf.IResolvable) {
    this._tuesday = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tuesdayInput() {
    return this._tuesday;
  }

  // wednesday - computed: false, optional: false, required: true
  private _wednesday?: boolean | cdktf.IResolvable; 
  public get wednesday() {
    return this.getBooleanAttribute('wednesday');
  }
  public set wednesday(value: boolean | cdktf.IResolvable) {
    this._wednesday = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wednesdayInput() {
    return this._wednesday;
  }
}
export interface UpdateWindowsWeeklyRecurrenceUpdateTime {
  /**
  * Duration (minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows#duration UpdateWindows#duration}
  */
  readonly duration: number;
  /**
  * Start time (24-hour clock)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows#start_time UpdateWindows#start_time}
  */
  readonly startTime: string;
  /**
  * Possible Values: `GMT_06_00`, `GMT_12_00`, `GMT_10_00`, `GMT_07_00`, `GMT_00_00`, `GMT_11_00`, `GMT_03_00`, `GMT_01_00`, `GMT_05_00`, `GMT_09_00`, `GMT_02_00`, `GMT_04_00`, `GMT_08_00`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows#time_zone UpdateWindows#time_zone}
  */
  readonly timeZone: string;
}

export function updateWindowsWeeklyRecurrenceUpdateTimeToTerraform(struct?: UpdateWindowsWeeklyRecurrenceUpdateTimeOutputReference | UpdateWindowsWeeklyRecurrenceUpdateTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}


export function updateWindowsWeeklyRecurrenceUpdateTimeToHclTerraform(struct?: UpdateWindowsWeeklyRecurrenceUpdateTimeOutputReference | UpdateWindowsWeeklyRecurrenceUpdateTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpdateWindowsWeeklyRecurrenceUpdateTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UpdateWindowsWeeklyRecurrenceUpdateTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpdateWindowsWeeklyRecurrenceUpdateTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._startTime = undefined;
      this._timeZone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._startTime = value.startTime;
      this._timeZone = value.timeZone;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
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

  // time_zone - computed: false, optional: false, required: true
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}
export interface UpdateWindowsWeeklyRecurrence {
  /**
  * Every **X** weeks:
  * * `1` = every week,
  * * `2` = every two weeks,
  * * `3` = every three weeks,
  * * etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows#every UpdateWindows#every}
  */
  readonly every: number;
  /**
  * recurrence_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows#recurrence_range UpdateWindows#recurrence_range}
  */
  readonly recurrenceRange: UpdateWindowsWeeklyRecurrenceRecurrenceRange;
  /**
  * selected_week_days block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows#selected_week_days UpdateWindows#selected_week_days}
  */
  readonly selectedWeekDays: UpdateWindowsWeeklyRecurrenceSelectedWeekDays;
  /**
  * update_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows#update_time UpdateWindows#update_time}
  */
  readonly updateTime: UpdateWindowsWeeklyRecurrenceUpdateTime;
}

export function updateWindowsWeeklyRecurrenceToTerraform(struct?: UpdateWindowsWeeklyRecurrenceOutputReference | UpdateWindowsWeeklyRecurrence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    every: cdktf.numberToTerraform(struct!.every),
    recurrence_range: updateWindowsWeeklyRecurrenceRecurrenceRangeToTerraform(struct!.recurrenceRange),
    selected_week_days: updateWindowsWeeklyRecurrenceSelectedWeekDaysToTerraform(struct!.selectedWeekDays),
    update_time: updateWindowsWeeklyRecurrenceUpdateTimeToTerraform(struct!.updateTime),
  }
}


export function updateWindowsWeeklyRecurrenceToHclTerraform(struct?: UpdateWindowsWeeklyRecurrenceOutputReference | UpdateWindowsWeeklyRecurrence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    every: {
      value: cdktf.numberToHclTerraform(struct!.every),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recurrence_range: {
      value: updateWindowsWeeklyRecurrenceRecurrenceRangeToHclTerraform(struct!.recurrenceRange),
      isBlock: true,
      type: "list",
      storageClassType: "UpdateWindowsWeeklyRecurrenceRecurrenceRangeList",
    },
    selected_week_days: {
      value: updateWindowsWeeklyRecurrenceSelectedWeekDaysToHclTerraform(struct!.selectedWeekDays),
      isBlock: true,
      type: "list",
      storageClassType: "UpdateWindowsWeeklyRecurrenceSelectedWeekDaysList",
    },
    update_time: {
      value: updateWindowsWeeklyRecurrenceUpdateTimeToHclTerraform(struct!.updateTime),
      isBlock: true,
      type: "list",
      storageClassType: "UpdateWindowsWeeklyRecurrenceUpdateTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpdateWindowsWeeklyRecurrenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UpdateWindowsWeeklyRecurrence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._every !== undefined) {
      hasAnyValues = true;
      internalValueResult.every = this._every;
    }
    if (this._recurrenceRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrenceRange = this._recurrenceRange?.internalValue;
    }
    if (this._selectedWeekDays?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedWeekDays = this._selectedWeekDays?.internalValue;
    }
    if (this._updateTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateTime = this._updateTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpdateWindowsWeeklyRecurrence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._every = undefined;
      this._recurrenceRange.internalValue = undefined;
      this._selectedWeekDays.internalValue = undefined;
      this._updateTime.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._every = value.every;
      this._recurrenceRange.internalValue = value.recurrenceRange;
      this._selectedWeekDays.internalValue = value.selectedWeekDays;
      this._updateTime.internalValue = value.updateTime;
    }
  }

  // every - computed: false, optional: false, required: true
  private _every?: number; 
  public get every() {
    return this.getNumberAttribute('every');
  }
  public set every(value: number) {
    this._every = value;
  }
  // Temporarily expose input value. Use with caution.
  public get everyInput() {
    return this._every;
  }

  // recurrence_range - computed: false, optional: false, required: true
  private _recurrenceRange = new UpdateWindowsWeeklyRecurrenceRecurrenceRangeOutputReference(this, "recurrence_range");
  public get recurrenceRange() {
    return this._recurrenceRange;
  }
  public putRecurrenceRange(value: UpdateWindowsWeeklyRecurrenceRecurrenceRange) {
    this._recurrenceRange.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceRangeInput() {
    return this._recurrenceRange.internalValue;
  }

  // selected_week_days - computed: false, optional: false, required: true
  private _selectedWeekDays = new UpdateWindowsWeeklyRecurrenceSelectedWeekDaysOutputReference(this, "selected_week_days");
  public get selectedWeekDays() {
    return this._selectedWeekDays;
  }
  public putSelectedWeekDays(value: UpdateWindowsWeeklyRecurrenceSelectedWeekDays) {
    this._selectedWeekDays.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedWeekDaysInput() {
    return this._selectedWeekDays.internalValue;
  }

  // update_time - computed: false, optional: false, required: true
  private _updateTime = new UpdateWindowsWeeklyRecurrenceUpdateTimeOutputReference(this, "update_time");
  public get updateTime() {
    return this._updateTime;
  }
  public putUpdateTime(value: UpdateWindowsWeeklyRecurrenceUpdateTime) {
    this._updateTime.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get updateTimeInput() {
    return this._updateTime.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows dynatrace_update_windows}
*/
export class UpdateWindows extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_update_windows";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UpdateWindows resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UpdateWindows to import
  * @param importFromId The id of the existing UpdateWindows that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UpdateWindows to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_update_windows", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/update_windows dynatrace_update_windows} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UpdateWindowsConfig
  */
  public constructor(scope: Construct, id: string, config: UpdateWindowsConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_update_windows',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.1',
        providerVersionConstraint: '1.88.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._recurrence = config.recurrence;
    this._dailyRecurrence.internalValue = config.dailyRecurrence;
    this._monthlyRecurrence.internalValue = config.monthlyRecurrence;
    this._onceRecurrence.internalValue = config.onceRecurrence;
    this._weeklyRecurrence.internalValue = config.weeklyRecurrence;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // recurrence - computed: false, optional: false, required: true
  private _recurrence?: string; 
  public get recurrence() {
    return this.getStringAttribute('recurrence');
  }
  public set recurrence(value: string) {
    this._recurrence = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceInput() {
    return this._recurrence;
  }

  // daily_recurrence - computed: false, optional: true, required: false
  private _dailyRecurrence = new UpdateWindowsDailyRecurrenceOutputReference(this, "daily_recurrence");
  public get dailyRecurrence() {
    return this._dailyRecurrence;
  }
  public putDailyRecurrence(value: UpdateWindowsDailyRecurrence) {
    this._dailyRecurrence.internalValue = value;
  }
  public resetDailyRecurrence() {
    this._dailyRecurrence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyRecurrenceInput() {
    return this._dailyRecurrence.internalValue;
  }

  // monthly_recurrence - computed: false, optional: true, required: false
  private _monthlyRecurrence = new UpdateWindowsMonthlyRecurrenceOutputReference(this, "monthly_recurrence");
  public get monthlyRecurrence() {
    return this._monthlyRecurrence;
  }
  public putMonthlyRecurrence(value: UpdateWindowsMonthlyRecurrence) {
    this._monthlyRecurrence.internalValue = value;
  }
  public resetMonthlyRecurrence() {
    this._monthlyRecurrence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyRecurrenceInput() {
    return this._monthlyRecurrence.internalValue;
  }

  // once_recurrence - computed: false, optional: true, required: false
  private _onceRecurrence = new UpdateWindowsOnceRecurrenceOutputReference(this, "once_recurrence");
  public get onceRecurrence() {
    return this._onceRecurrence;
  }
  public putOnceRecurrence(value: UpdateWindowsOnceRecurrence) {
    this._onceRecurrence.internalValue = value;
  }
  public resetOnceRecurrence() {
    this._onceRecurrence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onceRecurrenceInput() {
    return this._onceRecurrence.internalValue;
  }

  // weekly_recurrence - computed: false, optional: true, required: false
  private _weeklyRecurrence = new UpdateWindowsWeeklyRecurrenceOutputReference(this, "weekly_recurrence");
  public get weeklyRecurrence() {
    return this._weeklyRecurrence;
  }
  public putWeeklyRecurrence(value: UpdateWindowsWeeklyRecurrence) {
    this._weeklyRecurrence.internalValue = value;
  }
  public resetWeeklyRecurrence() {
    this._weeklyRecurrence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyRecurrenceInput() {
    return this._weeklyRecurrence.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      recurrence: cdktf.stringToTerraform(this._recurrence),
      daily_recurrence: updateWindowsDailyRecurrenceToTerraform(this._dailyRecurrence.internalValue),
      monthly_recurrence: updateWindowsMonthlyRecurrenceToTerraform(this._monthlyRecurrence.internalValue),
      once_recurrence: updateWindowsOnceRecurrenceToTerraform(this._onceRecurrence.internalValue),
      weekly_recurrence: updateWindowsWeeklyRecurrenceToTerraform(this._weeklyRecurrence.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      recurrence: {
        value: cdktf.stringToHclTerraform(this._recurrence),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      daily_recurrence: {
        value: updateWindowsDailyRecurrenceToHclTerraform(this._dailyRecurrence.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UpdateWindowsDailyRecurrenceList",
      },
      monthly_recurrence: {
        value: updateWindowsMonthlyRecurrenceToHclTerraform(this._monthlyRecurrence.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UpdateWindowsMonthlyRecurrenceList",
      },
      once_recurrence: {
        value: updateWindowsOnceRecurrenceToHclTerraform(this._onceRecurrence.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UpdateWindowsOnceRecurrenceList",
      },
      weekly_recurrence: {
        value: updateWindowsWeeklyRecurrenceToHclTerraform(this._weeklyRecurrence.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UpdateWindowsWeeklyRecurrenceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
