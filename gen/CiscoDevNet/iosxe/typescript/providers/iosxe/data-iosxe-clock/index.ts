// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/data-sources/clock
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeClockConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/data-sources/clock#device DataIosxeClock#device}
  */
  readonly device?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/data-sources/clock iosxe_clock}
*/
export class DataIosxeClock extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_clock";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeClock resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeClock to import
  * @param importFromId The id of the existing DataIosxeClock that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/data-sources/clock#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeClock to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_clock", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/data-sources/clock iosxe_clock} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeClockConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIosxeClockConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_clock',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.14.4',
        providerVersionConstraint: '0.14.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // calendar_valid - computed: true, optional: false, required: false
  public get calendarValid() {
    return this.getBooleanAttribute('calendar_valid');
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

  // summer_time_date - computed: true, optional: false, required: false
  public get summerTimeDate() {
    return this.getBooleanAttribute('summer_time_date');
  }

  // summer_time_date_end_day - computed: true, optional: false, required: false
  public get summerTimeDateEndDay() {
    return this.getNumberAttribute('summer_time_date_end_day');
  }

  // summer_time_date_end_month - computed: true, optional: false, required: false
  public get summerTimeDateEndMonth() {
    return this.getStringAttribute('summer_time_date_end_month');
  }

  // summer_time_date_end_time - computed: true, optional: false, required: false
  public get summerTimeDateEndTime() {
    return this.getStringAttribute('summer_time_date_end_time');
  }

  // summer_time_date_end_year - computed: true, optional: false, required: false
  public get summerTimeDateEndYear() {
    return this.getNumberAttribute('summer_time_date_end_year');
  }

  // summer_time_date_offset - computed: true, optional: false, required: false
  public get summerTimeDateOffset() {
    return this.getNumberAttribute('summer_time_date_offset');
  }

  // summer_time_date_start_day - computed: true, optional: false, required: false
  public get summerTimeDateStartDay() {
    return this.getNumberAttribute('summer_time_date_start_day');
  }

  // summer_time_date_start_month - computed: true, optional: false, required: false
  public get summerTimeDateStartMonth() {
    return this.getStringAttribute('summer_time_date_start_month');
  }

  // summer_time_date_start_time - computed: true, optional: false, required: false
  public get summerTimeDateStartTime() {
    return this.getStringAttribute('summer_time_date_start_time');
  }

  // summer_time_date_start_year - computed: true, optional: false, required: false
  public get summerTimeDateStartYear() {
    return this.getNumberAttribute('summer_time_date_start_year');
  }

  // summer_time_recurring - computed: true, optional: false, required: false
  public get summerTimeRecurring() {
    return this.getBooleanAttribute('summer_time_recurring');
  }

  // summer_time_recurring_end_month - computed: true, optional: false, required: false
  public get summerTimeRecurringEndMonth() {
    return this.getStringAttribute('summer_time_recurring_end_month');
  }

  // summer_time_recurring_end_time - computed: true, optional: false, required: false
  public get summerTimeRecurringEndTime() {
    return this.getStringAttribute('summer_time_recurring_end_time');
  }

  // summer_time_recurring_end_week - computed: true, optional: false, required: false
  public get summerTimeRecurringEndWeek() {
    return this.getStringAttribute('summer_time_recurring_end_week');
  }

  // summer_time_recurring_end_weekday - computed: true, optional: false, required: false
  public get summerTimeRecurringEndWeekday() {
    return this.getStringAttribute('summer_time_recurring_end_weekday');
  }

  // summer_time_recurring_offset - computed: true, optional: false, required: false
  public get summerTimeRecurringOffset() {
    return this.getNumberAttribute('summer_time_recurring_offset');
  }

  // summer_time_recurring_start_month - computed: true, optional: false, required: false
  public get summerTimeRecurringStartMonth() {
    return this.getStringAttribute('summer_time_recurring_start_month');
  }

  // summer_time_recurring_start_time - computed: true, optional: false, required: false
  public get summerTimeRecurringStartTime() {
    return this.getStringAttribute('summer_time_recurring_start_time');
  }

  // summer_time_recurring_start_week - computed: true, optional: false, required: false
  public get summerTimeRecurringStartWeek() {
    return this.getStringAttribute('summer_time_recurring_start_week');
  }

  // summer_time_recurring_start_weekday - computed: true, optional: false, required: false
  public get summerTimeRecurringStartWeekday() {
    return this.getStringAttribute('summer_time_recurring_start_weekday');
  }

  // summer_time_zone - computed: true, optional: false, required: false
  public get summerTimeZone() {
    return this.getStringAttribute('summer_time_zone');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }

  // timezone_offset_hours - computed: true, optional: false, required: false
  public get timezoneOffsetHours() {
    return this.getNumberAttribute('timezone_offset_hours');
  }

  // timezone_offset_minutes - computed: true, optional: false, required: false
  public get timezoneOffsetMinutes() {
    return this.getNumberAttribute('timezone_offset_minutes');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
