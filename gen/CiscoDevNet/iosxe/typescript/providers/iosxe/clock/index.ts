// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/clock
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClockConfig extends cdktf.TerraformMetaArguments {
  /**
  * Calendar time is authoritative
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/clock#calendar_valid Clock#calendar_valid}
  */
  readonly calendarValid?: boolean | cdktf.IResolvable;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/clock#delete_mode Clock#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/clock#device Clock#device}
  */
  readonly device?: string;
  /**
  * Configure absolute summer time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/clock#summer_time_date Clock#summer_time_date}
  */
  readonly summerTimeDate?: boolean | cdktf.IResolvable;
  /**
  * 
  *   - Range: `1`-`31`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/clock#summer_time_date_end_day Clock#summer_time_date_end_day}
  */
  readonly summerTimeDateEndDay?: number;
  /**
  * 
  *   - Choices: `Apr`, `Aug`, `Dec`, `Feb`, `Jan`, `Jul`, `Jun`, `Mar`, `May`, `Nov`, `Oct`, `Sep`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/clock#summer_time_date_end_month Clock#summer_time_date_end_month}
  */
  readonly summerTimeDateEndMonth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/clock#summer_time_date_end_time Clock#summer_time_date_end_time}
  */
  readonly summerTimeDateEndTime?: string;
  /**
  * 
  *   - Range: `1993`-`2035`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/clock#summer_time_date_end_year Clock#summer_time_date_end_year}
  */
  readonly summerTimeDateEndYear?: number;
  /**
  * 
  *   - Range: `1`-`1440`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/clock#summer_time_date_offset Clock#summer_time_date_offset}
  */
  readonly summerTimeDateOffset?: number;
  /**
  * 
  *   - Range: `1`-`31`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/clock#summer_time_date_start_day Clock#summer_time_date_start_day}
  */
  readonly summerTimeDateStartDay?: number;
  /**
  * 
  *   - Choices: `Apr`, `Aug`, `Dec`, `Feb`, `Jan`, `Jul`, `Jun`, `Mar`, `May`, `Nov`, `Oct`, `Sep`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/clock#summer_time_date_start_month Clock#summer_time_date_start_month}
  */
  readonly summerTimeDateStartMonth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/clock#summer_time_date_start_time Clock#summer_time_date_start_time}
  */
  readonly summerTimeDateStartTime?: string;
  /**
  * 
  *   - Range: `1993`-`2035`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/clock#summer_time_date_start_year Clock#summer_time_date_start_year}
  */
  readonly summerTimeDateStartYear?: number;
  /**
  * Configure recurring summer time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/clock#summer_time_recurring Clock#summer_time_recurring}
  */
  readonly summerTimeRecurring?: boolean | cdktf.IResolvable;
  /**
  * 
  *   - Choices: `Apr`, `Aug`, `Dec`, `Feb`, `Jan`, `Jul`, `Jun`, `Mar`, `May`, `Nov`, `Oct`, `Sep`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/clock#summer_time_recurring_end_month Clock#summer_time_recurring_end_month}
  */
  readonly summerTimeRecurringEndMonth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/clock#summer_time_recurring_end_time Clock#summer_time_recurring_end_time}
  */
  readonly summerTimeRecurringEndTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/clock#summer_time_recurring_end_week Clock#summer_time_recurring_end_week}
  */
  readonly summerTimeRecurringEndWeek?: string;
  /**
  * 
  *   - Choices: `Fri`, `Mon`, `Sat`, `Sun`, `Thu`, `Tue`, `Wed`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/clock#summer_time_recurring_end_weekday Clock#summer_time_recurring_end_weekday}
  */
  readonly summerTimeRecurringEndWeekday?: string;
  /**
  * 
  *   - Range: `1`-`1440`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/clock#summer_time_recurring_offset Clock#summer_time_recurring_offset}
  */
  readonly summerTimeRecurringOffset?: number;
  /**
  * 
  *   - Choices: `Apr`, `Aug`, `Dec`, `Feb`, `Jan`, `Jul`, `Jun`, `Mar`, `May`, `Nov`, `Oct`, `Sep`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/clock#summer_time_recurring_start_month Clock#summer_time_recurring_start_month}
  */
  readonly summerTimeRecurringStartMonth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/clock#summer_time_recurring_start_time Clock#summer_time_recurring_start_time}
  */
  readonly summerTimeRecurringStartTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/clock#summer_time_recurring_start_week Clock#summer_time_recurring_start_week}
  */
  readonly summerTimeRecurringStartWeek?: string;
  /**
  * 
  *   - Choices: `Fri`, `Mon`, `Sat`, `Sun`, `Thu`, `Tue`, `Wed`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/clock#summer_time_recurring_start_weekday Clock#summer_time_recurring_start_weekday}
  */
  readonly summerTimeRecurringStartWeekday?: string;
  /**
  * Name of time zone in summer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/clock#summer_time_zone Clock#summer_time_zone}
  */
  readonly summerTimeZone?: string;
  /**
  * Name of time zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/clock#timezone Clock#timezone}
  */
  readonly timezone?: string;
  /**
  * 
  *   - Range: `-23`-`23`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/clock#timezone_offset_hours Clock#timezone_offset_hours}
  */
  readonly timezoneOffsetHours?: number;
  /**
  * 
  *   - Range: `0`-`59`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/clock#timezone_offset_minutes Clock#timezone_offset_minutes}
  */
  readonly timezoneOffsetMinutes?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/clock iosxe_clock}
*/
export class Clock extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_clock";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Clock resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Clock to import
  * @param importFromId The id of the existing Clock that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/clock#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Clock to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_clock", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/clock iosxe_clock} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClockConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ClockConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_clock',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.14.6',
        providerVersionConstraint: '0.14.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._calendarValid = config.calendarValid;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._summerTimeDate = config.summerTimeDate;
    this._summerTimeDateEndDay = config.summerTimeDateEndDay;
    this._summerTimeDateEndMonth = config.summerTimeDateEndMonth;
    this._summerTimeDateEndTime = config.summerTimeDateEndTime;
    this._summerTimeDateEndYear = config.summerTimeDateEndYear;
    this._summerTimeDateOffset = config.summerTimeDateOffset;
    this._summerTimeDateStartDay = config.summerTimeDateStartDay;
    this._summerTimeDateStartMonth = config.summerTimeDateStartMonth;
    this._summerTimeDateStartTime = config.summerTimeDateStartTime;
    this._summerTimeDateStartYear = config.summerTimeDateStartYear;
    this._summerTimeRecurring = config.summerTimeRecurring;
    this._summerTimeRecurringEndMonth = config.summerTimeRecurringEndMonth;
    this._summerTimeRecurringEndTime = config.summerTimeRecurringEndTime;
    this._summerTimeRecurringEndWeek = config.summerTimeRecurringEndWeek;
    this._summerTimeRecurringEndWeekday = config.summerTimeRecurringEndWeekday;
    this._summerTimeRecurringOffset = config.summerTimeRecurringOffset;
    this._summerTimeRecurringStartMonth = config.summerTimeRecurringStartMonth;
    this._summerTimeRecurringStartTime = config.summerTimeRecurringStartTime;
    this._summerTimeRecurringStartWeek = config.summerTimeRecurringStartWeek;
    this._summerTimeRecurringStartWeekday = config.summerTimeRecurringStartWeekday;
    this._summerTimeZone = config.summerTimeZone;
    this._timezone = config.timezone;
    this._timezoneOffsetHours = config.timezoneOffsetHours;
    this._timezoneOffsetMinutes = config.timezoneOffsetMinutes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // calendar_valid - computed: false, optional: true, required: false
  private _calendarValid?: boolean | cdktf.IResolvable; 
  public get calendarValid() {
    return this.getBooleanAttribute('calendar_valid');
  }
  public set calendarValid(value: boolean | cdktf.IResolvable) {
    this._calendarValid = value;
  }
  public resetCalendarValid() {
    this._calendarValid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calendarValidInput() {
    return this._calendarValid;
  }

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // summer_time_date - computed: false, optional: true, required: false
  private _summerTimeDate?: boolean | cdktf.IResolvable; 
  public get summerTimeDate() {
    return this.getBooleanAttribute('summer_time_date');
  }
  public set summerTimeDate(value: boolean | cdktf.IResolvable) {
    this._summerTimeDate = value;
  }
  public resetSummerTimeDate() {
    this._summerTimeDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summerTimeDateInput() {
    return this._summerTimeDate;
  }

  // summer_time_date_end_day - computed: false, optional: true, required: false
  private _summerTimeDateEndDay?: number; 
  public get summerTimeDateEndDay() {
    return this.getNumberAttribute('summer_time_date_end_day');
  }
  public set summerTimeDateEndDay(value: number) {
    this._summerTimeDateEndDay = value;
  }
  public resetSummerTimeDateEndDay() {
    this._summerTimeDateEndDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summerTimeDateEndDayInput() {
    return this._summerTimeDateEndDay;
  }

  // summer_time_date_end_month - computed: false, optional: true, required: false
  private _summerTimeDateEndMonth?: string; 
  public get summerTimeDateEndMonth() {
    return this.getStringAttribute('summer_time_date_end_month');
  }
  public set summerTimeDateEndMonth(value: string) {
    this._summerTimeDateEndMonth = value;
  }
  public resetSummerTimeDateEndMonth() {
    this._summerTimeDateEndMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summerTimeDateEndMonthInput() {
    return this._summerTimeDateEndMonth;
  }

  // summer_time_date_end_time - computed: false, optional: true, required: false
  private _summerTimeDateEndTime?: string; 
  public get summerTimeDateEndTime() {
    return this.getStringAttribute('summer_time_date_end_time');
  }
  public set summerTimeDateEndTime(value: string) {
    this._summerTimeDateEndTime = value;
  }
  public resetSummerTimeDateEndTime() {
    this._summerTimeDateEndTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summerTimeDateEndTimeInput() {
    return this._summerTimeDateEndTime;
  }

  // summer_time_date_end_year - computed: false, optional: true, required: false
  private _summerTimeDateEndYear?: number; 
  public get summerTimeDateEndYear() {
    return this.getNumberAttribute('summer_time_date_end_year');
  }
  public set summerTimeDateEndYear(value: number) {
    this._summerTimeDateEndYear = value;
  }
  public resetSummerTimeDateEndYear() {
    this._summerTimeDateEndYear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summerTimeDateEndYearInput() {
    return this._summerTimeDateEndYear;
  }

  // summer_time_date_offset - computed: false, optional: true, required: false
  private _summerTimeDateOffset?: number; 
  public get summerTimeDateOffset() {
    return this.getNumberAttribute('summer_time_date_offset');
  }
  public set summerTimeDateOffset(value: number) {
    this._summerTimeDateOffset = value;
  }
  public resetSummerTimeDateOffset() {
    this._summerTimeDateOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summerTimeDateOffsetInput() {
    return this._summerTimeDateOffset;
  }

  // summer_time_date_start_day - computed: false, optional: true, required: false
  private _summerTimeDateStartDay?: number; 
  public get summerTimeDateStartDay() {
    return this.getNumberAttribute('summer_time_date_start_day');
  }
  public set summerTimeDateStartDay(value: number) {
    this._summerTimeDateStartDay = value;
  }
  public resetSummerTimeDateStartDay() {
    this._summerTimeDateStartDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summerTimeDateStartDayInput() {
    return this._summerTimeDateStartDay;
  }

  // summer_time_date_start_month - computed: false, optional: true, required: false
  private _summerTimeDateStartMonth?: string; 
  public get summerTimeDateStartMonth() {
    return this.getStringAttribute('summer_time_date_start_month');
  }
  public set summerTimeDateStartMonth(value: string) {
    this._summerTimeDateStartMonth = value;
  }
  public resetSummerTimeDateStartMonth() {
    this._summerTimeDateStartMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summerTimeDateStartMonthInput() {
    return this._summerTimeDateStartMonth;
  }

  // summer_time_date_start_time - computed: false, optional: true, required: false
  private _summerTimeDateStartTime?: string; 
  public get summerTimeDateStartTime() {
    return this.getStringAttribute('summer_time_date_start_time');
  }
  public set summerTimeDateStartTime(value: string) {
    this._summerTimeDateStartTime = value;
  }
  public resetSummerTimeDateStartTime() {
    this._summerTimeDateStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summerTimeDateStartTimeInput() {
    return this._summerTimeDateStartTime;
  }

  // summer_time_date_start_year - computed: false, optional: true, required: false
  private _summerTimeDateStartYear?: number; 
  public get summerTimeDateStartYear() {
    return this.getNumberAttribute('summer_time_date_start_year');
  }
  public set summerTimeDateStartYear(value: number) {
    this._summerTimeDateStartYear = value;
  }
  public resetSummerTimeDateStartYear() {
    this._summerTimeDateStartYear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summerTimeDateStartYearInput() {
    return this._summerTimeDateStartYear;
  }

  // summer_time_recurring - computed: false, optional: true, required: false
  private _summerTimeRecurring?: boolean | cdktf.IResolvable; 
  public get summerTimeRecurring() {
    return this.getBooleanAttribute('summer_time_recurring');
  }
  public set summerTimeRecurring(value: boolean | cdktf.IResolvable) {
    this._summerTimeRecurring = value;
  }
  public resetSummerTimeRecurring() {
    this._summerTimeRecurring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summerTimeRecurringInput() {
    return this._summerTimeRecurring;
  }

  // summer_time_recurring_end_month - computed: false, optional: true, required: false
  private _summerTimeRecurringEndMonth?: string; 
  public get summerTimeRecurringEndMonth() {
    return this.getStringAttribute('summer_time_recurring_end_month');
  }
  public set summerTimeRecurringEndMonth(value: string) {
    this._summerTimeRecurringEndMonth = value;
  }
  public resetSummerTimeRecurringEndMonth() {
    this._summerTimeRecurringEndMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summerTimeRecurringEndMonthInput() {
    return this._summerTimeRecurringEndMonth;
  }

  // summer_time_recurring_end_time - computed: false, optional: true, required: false
  private _summerTimeRecurringEndTime?: string; 
  public get summerTimeRecurringEndTime() {
    return this.getStringAttribute('summer_time_recurring_end_time');
  }
  public set summerTimeRecurringEndTime(value: string) {
    this._summerTimeRecurringEndTime = value;
  }
  public resetSummerTimeRecurringEndTime() {
    this._summerTimeRecurringEndTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summerTimeRecurringEndTimeInput() {
    return this._summerTimeRecurringEndTime;
  }

  // summer_time_recurring_end_week - computed: false, optional: true, required: false
  private _summerTimeRecurringEndWeek?: string; 
  public get summerTimeRecurringEndWeek() {
    return this.getStringAttribute('summer_time_recurring_end_week');
  }
  public set summerTimeRecurringEndWeek(value: string) {
    this._summerTimeRecurringEndWeek = value;
  }
  public resetSummerTimeRecurringEndWeek() {
    this._summerTimeRecurringEndWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summerTimeRecurringEndWeekInput() {
    return this._summerTimeRecurringEndWeek;
  }

  // summer_time_recurring_end_weekday - computed: false, optional: true, required: false
  private _summerTimeRecurringEndWeekday?: string; 
  public get summerTimeRecurringEndWeekday() {
    return this.getStringAttribute('summer_time_recurring_end_weekday');
  }
  public set summerTimeRecurringEndWeekday(value: string) {
    this._summerTimeRecurringEndWeekday = value;
  }
  public resetSummerTimeRecurringEndWeekday() {
    this._summerTimeRecurringEndWeekday = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summerTimeRecurringEndWeekdayInput() {
    return this._summerTimeRecurringEndWeekday;
  }

  // summer_time_recurring_offset - computed: false, optional: true, required: false
  private _summerTimeRecurringOffset?: number; 
  public get summerTimeRecurringOffset() {
    return this.getNumberAttribute('summer_time_recurring_offset');
  }
  public set summerTimeRecurringOffset(value: number) {
    this._summerTimeRecurringOffset = value;
  }
  public resetSummerTimeRecurringOffset() {
    this._summerTimeRecurringOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summerTimeRecurringOffsetInput() {
    return this._summerTimeRecurringOffset;
  }

  // summer_time_recurring_start_month - computed: false, optional: true, required: false
  private _summerTimeRecurringStartMonth?: string; 
  public get summerTimeRecurringStartMonth() {
    return this.getStringAttribute('summer_time_recurring_start_month');
  }
  public set summerTimeRecurringStartMonth(value: string) {
    this._summerTimeRecurringStartMonth = value;
  }
  public resetSummerTimeRecurringStartMonth() {
    this._summerTimeRecurringStartMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summerTimeRecurringStartMonthInput() {
    return this._summerTimeRecurringStartMonth;
  }

  // summer_time_recurring_start_time - computed: false, optional: true, required: false
  private _summerTimeRecurringStartTime?: string; 
  public get summerTimeRecurringStartTime() {
    return this.getStringAttribute('summer_time_recurring_start_time');
  }
  public set summerTimeRecurringStartTime(value: string) {
    this._summerTimeRecurringStartTime = value;
  }
  public resetSummerTimeRecurringStartTime() {
    this._summerTimeRecurringStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summerTimeRecurringStartTimeInput() {
    return this._summerTimeRecurringStartTime;
  }

  // summer_time_recurring_start_week - computed: false, optional: true, required: false
  private _summerTimeRecurringStartWeek?: string; 
  public get summerTimeRecurringStartWeek() {
    return this.getStringAttribute('summer_time_recurring_start_week');
  }
  public set summerTimeRecurringStartWeek(value: string) {
    this._summerTimeRecurringStartWeek = value;
  }
  public resetSummerTimeRecurringStartWeek() {
    this._summerTimeRecurringStartWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summerTimeRecurringStartWeekInput() {
    return this._summerTimeRecurringStartWeek;
  }

  // summer_time_recurring_start_weekday - computed: false, optional: true, required: false
  private _summerTimeRecurringStartWeekday?: string; 
  public get summerTimeRecurringStartWeekday() {
    return this.getStringAttribute('summer_time_recurring_start_weekday');
  }
  public set summerTimeRecurringStartWeekday(value: string) {
    this._summerTimeRecurringStartWeekday = value;
  }
  public resetSummerTimeRecurringStartWeekday() {
    this._summerTimeRecurringStartWeekday = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summerTimeRecurringStartWeekdayInput() {
    return this._summerTimeRecurringStartWeekday;
  }

  // summer_time_zone - computed: false, optional: true, required: false
  private _summerTimeZone?: string; 
  public get summerTimeZone() {
    return this.getStringAttribute('summer_time_zone');
  }
  public set summerTimeZone(value: string) {
    this._summerTimeZone = value;
  }
  public resetSummerTimeZone() {
    this._summerTimeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summerTimeZoneInput() {
    return this._summerTimeZone;
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

  // timezone_offset_hours - computed: false, optional: true, required: false
  private _timezoneOffsetHours?: number; 
  public get timezoneOffsetHours() {
    return this.getNumberAttribute('timezone_offset_hours');
  }
  public set timezoneOffsetHours(value: number) {
    this._timezoneOffsetHours = value;
  }
  public resetTimezoneOffsetHours() {
    this._timezoneOffsetHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneOffsetHoursInput() {
    return this._timezoneOffsetHours;
  }

  // timezone_offset_minutes - computed: false, optional: true, required: false
  private _timezoneOffsetMinutes?: number; 
  public get timezoneOffsetMinutes() {
    return this.getNumberAttribute('timezone_offset_minutes');
  }
  public set timezoneOffsetMinutes(value: number) {
    this._timezoneOffsetMinutes = value;
  }
  public resetTimezoneOffsetMinutes() {
    this._timezoneOffsetMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneOffsetMinutesInput() {
    return this._timezoneOffsetMinutes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      calendar_valid: cdktf.booleanToTerraform(this._calendarValid),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      summer_time_date: cdktf.booleanToTerraform(this._summerTimeDate),
      summer_time_date_end_day: cdktf.numberToTerraform(this._summerTimeDateEndDay),
      summer_time_date_end_month: cdktf.stringToTerraform(this._summerTimeDateEndMonth),
      summer_time_date_end_time: cdktf.stringToTerraform(this._summerTimeDateEndTime),
      summer_time_date_end_year: cdktf.numberToTerraform(this._summerTimeDateEndYear),
      summer_time_date_offset: cdktf.numberToTerraform(this._summerTimeDateOffset),
      summer_time_date_start_day: cdktf.numberToTerraform(this._summerTimeDateStartDay),
      summer_time_date_start_month: cdktf.stringToTerraform(this._summerTimeDateStartMonth),
      summer_time_date_start_time: cdktf.stringToTerraform(this._summerTimeDateStartTime),
      summer_time_date_start_year: cdktf.numberToTerraform(this._summerTimeDateStartYear),
      summer_time_recurring: cdktf.booleanToTerraform(this._summerTimeRecurring),
      summer_time_recurring_end_month: cdktf.stringToTerraform(this._summerTimeRecurringEndMonth),
      summer_time_recurring_end_time: cdktf.stringToTerraform(this._summerTimeRecurringEndTime),
      summer_time_recurring_end_week: cdktf.stringToTerraform(this._summerTimeRecurringEndWeek),
      summer_time_recurring_end_weekday: cdktf.stringToTerraform(this._summerTimeRecurringEndWeekday),
      summer_time_recurring_offset: cdktf.numberToTerraform(this._summerTimeRecurringOffset),
      summer_time_recurring_start_month: cdktf.stringToTerraform(this._summerTimeRecurringStartMonth),
      summer_time_recurring_start_time: cdktf.stringToTerraform(this._summerTimeRecurringStartTime),
      summer_time_recurring_start_week: cdktf.stringToTerraform(this._summerTimeRecurringStartWeek),
      summer_time_recurring_start_weekday: cdktf.stringToTerraform(this._summerTimeRecurringStartWeekday),
      summer_time_zone: cdktf.stringToTerraform(this._summerTimeZone),
      timezone: cdktf.stringToTerraform(this._timezone),
      timezone_offset_hours: cdktf.numberToTerraform(this._timezoneOffsetHours),
      timezone_offset_minutes: cdktf.numberToTerraform(this._timezoneOffsetMinutes),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      calendar_valid: {
        value: cdktf.booleanToHclTerraform(this._calendarValid),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      summer_time_date: {
        value: cdktf.booleanToHclTerraform(this._summerTimeDate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      summer_time_date_end_day: {
        value: cdktf.numberToHclTerraform(this._summerTimeDateEndDay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      summer_time_date_end_month: {
        value: cdktf.stringToHclTerraform(this._summerTimeDateEndMonth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      summer_time_date_end_time: {
        value: cdktf.stringToHclTerraform(this._summerTimeDateEndTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      summer_time_date_end_year: {
        value: cdktf.numberToHclTerraform(this._summerTimeDateEndYear),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      summer_time_date_offset: {
        value: cdktf.numberToHclTerraform(this._summerTimeDateOffset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      summer_time_date_start_day: {
        value: cdktf.numberToHclTerraform(this._summerTimeDateStartDay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      summer_time_date_start_month: {
        value: cdktf.stringToHclTerraform(this._summerTimeDateStartMonth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      summer_time_date_start_time: {
        value: cdktf.stringToHclTerraform(this._summerTimeDateStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      summer_time_date_start_year: {
        value: cdktf.numberToHclTerraform(this._summerTimeDateStartYear),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      summer_time_recurring: {
        value: cdktf.booleanToHclTerraform(this._summerTimeRecurring),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      summer_time_recurring_end_month: {
        value: cdktf.stringToHclTerraform(this._summerTimeRecurringEndMonth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      summer_time_recurring_end_time: {
        value: cdktf.stringToHclTerraform(this._summerTimeRecurringEndTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      summer_time_recurring_end_week: {
        value: cdktf.stringToHclTerraform(this._summerTimeRecurringEndWeek),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      summer_time_recurring_end_weekday: {
        value: cdktf.stringToHclTerraform(this._summerTimeRecurringEndWeekday),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      summer_time_recurring_offset: {
        value: cdktf.numberToHclTerraform(this._summerTimeRecurringOffset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      summer_time_recurring_start_month: {
        value: cdktf.stringToHclTerraform(this._summerTimeRecurringStartMonth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      summer_time_recurring_start_time: {
        value: cdktf.stringToHclTerraform(this._summerTimeRecurringStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      summer_time_recurring_start_week: {
        value: cdktf.stringToHclTerraform(this._summerTimeRecurringStartWeek),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      summer_time_recurring_start_weekday: {
        value: cdktf.stringToHclTerraform(this._summerTimeRecurringStartWeekday),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      summer_time_zone: {
        value: cdktf.stringToHclTerraform(this._summerTimeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timezone_offset_hours: {
        value: cdktf.numberToHclTerraform(this._timezoneOffsetHours),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timezone_offset_minutes: {
        value: cdktf.numberToHclTerraform(this._timezoneOffsetMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
