// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/shutdown
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ShutdownConfig extends cdktf.TerraformMetaArguments {
  /**
  * Shutdown at a specific time/date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/shutdown#at Shutdown#at}
  */
  readonly at?: number;
  /**
  * Cancel Pending Shutdown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/shutdown#cancel Shutdown#cancel}
  */
  readonly cancel?: number;
  /**
  * Day of the Month
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/shutdown#day_of_month Shutdown#day_of_month}
  */
  readonly dayOfMonth?: number;
  /**
  * Day of the Month
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/shutdown#day_of_month_2 Shutdown#day_of_month_2}
  */
  readonly dayOfMonth2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/shutdown#id Shutdown#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Delay before Shutdown (Time in hours and minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/shutdown#in Shutdown#in}
  */
  readonly in?: string;
  /**
  * 'January': Month of the year; 'February': Month of the year; 'March': Month of the year; 'April': Month of the year; 'May': Month of the year; 'June': Month of the year; 'July': Month of the year; 'August': Month of the year; 'September': Month of the year; 'October': Month of the year; 'November': Month of the year; 'December': Month of the year;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/shutdown#month Shutdown#month}
  */
  readonly month?: string;
  /**
  * 'January': Month of the year; 'February': Month of the year; 'March': Month of the year; 'April': Month of the year; 'May': Month of the year; 'June': Month of the year; 'July': Month of the year; 'August': Month of the year; 'September': Month of the year; 'October': Month of the year; 'November': Month of the year; 'December': Month of the year;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/shutdown#month_2 Shutdown#month_2}
  */
  readonly month2?: string;
  /**
  * Reason for Shutdown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/shutdown#reason Shutdown#reason}
  */
  readonly reason?: string;
  /**
  * Reason for Shutdown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/shutdown#reason_2 Shutdown#reason_2}
  */
  readonly reason2?: string;
  /**
  * Reason for Shutdown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/shutdown#reason_3 Shutdown#reason_3}
  */
  readonly reason3?: string;
  /**
  * Time to Shutdown (hh:mm)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/shutdown#time Shutdown#time}
  */
  readonly time?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/shutdown thunder_shutdown}
*/
export class Shutdown extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_shutdown";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Shutdown resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Shutdown to import
  * @param importFromId The id of the existing Shutdown that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/shutdown#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Shutdown to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_shutdown", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/shutdown thunder_shutdown} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ShutdownConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ShutdownConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_shutdown',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._at = config.at;
    this._cancel = config.cancel;
    this._dayOfMonth = config.dayOfMonth;
    this._dayOfMonth2 = config.dayOfMonth2;
    this._id = config.id;
    this._in = config.in;
    this._month = config.month;
    this._month2 = config.month2;
    this._reason = config.reason;
    this._reason2 = config.reason2;
    this._reason3 = config.reason3;
    this._time = config.time;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // at - computed: false, optional: true, required: false
  private _at?: number; 
  public get at() {
    return this.getNumberAttribute('at');
  }
  public set at(value: number) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }

  // cancel - computed: false, optional: true, required: false
  private _cancel?: number; 
  public get cancel() {
    return this.getNumberAttribute('cancel');
  }
  public set cancel(value: number) {
    this._cancel = value;
  }
  public resetCancel() {
    this._cancel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancelInput() {
    return this._cancel;
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

  // day_of_month_2 - computed: false, optional: true, required: false
  private _dayOfMonth2?: number; 
  public get dayOfMonth2() {
    return this.getNumberAttribute('day_of_month_2');
  }
  public set dayOfMonth2(value: number) {
    this._dayOfMonth2 = value;
  }
  public resetDayOfMonth2() {
    this._dayOfMonth2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfMonth2Input() {
    return this._dayOfMonth2;
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

  // in - computed: false, optional: true, required: false
  private _in?: string; 
  public get in() {
    return this.getStringAttribute('in');
  }
  public set in(value: string) {
    this._in = value;
  }
  public resetIn() {
    this._in = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inInput() {
    return this._in;
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

  // month_2 - computed: false, optional: true, required: false
  private _month2?: string; 
  public get month2() {
    return this.getStringAttribute('month_2');
  }
  public set month2(value: string) {
    this._month2 = value;
  }
  public resetMonth2() {
    this._month2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get month2Input() {
    return this._month2;
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // reason_2 - computed: false, optional: true, required: false
  private _reason2?: string; 
  public get reason2() {
    return this.getStringAttribute('reason_2');
  }
  public set reason2(value: string) {
    this._reason2 = value;
  }
  public resetReason2() {
    this._reason2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reason2Input() {
    return this._reason2;
  }

  // reason_3 - computed: false, optional: true, required: false
  private _reason3?: string; 
  public get reason3() {
    return this.getStringAttribute('reason_3');
  }
  public set reason3(value: string) {
    this._reason3 = value;
  }
  public resetReason3() {
    this._reason3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reason3Input() {
    return this._reason3;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      at: cdktf.numberToTerraform(this._at),
      cancel: cdktf.numberToTerraform(this._cancel),
      day_of_month: cdktf.numberToTerraform(this._dayOfMonth),
      day_of_month_2: cdktf.numberToTerraform(this._dayOfMonth2),
      id: cdktf.stringToTerraform(this._id),
      in: cdktf.stringToTerraform(this._in),
      month: cdktf.stringToTerraform(this._month),
      month_2: cdktf.stringToTerraform(this._month2),
      reason: cdktf.stringToTerraform(this._reason),
      reason_2: cdktf.stringToTerraform(this._reason2),
      reason_3: cdktf.stringToTerraform(this._reason3),
      time: cdktf.stringToTerraform(this._time),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      at: {
        value: cdktf.numberToHclTerraform(this._at),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cancel: {
        value: cdktf.numberToHclTerraform(this._cancel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      day_of_month: {
        value: cdktf.numberToHclTerraform(this._dayOfMonth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      day_of_month_2: {
        value: cdktf.numberToHclTerraform(this._dayOfMonth2),
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
      in: {
        value: cdktf.stringToHclTerraform(this._in),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      month: {
        value: cdktf.stringToHclTerraform(this._month),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      month_2: {
        value: cdktf.stringToHclTerraform(this._month2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reason: {
        value: cdktf.stringToHclTerraform(this._reason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reason_2: {
        value: cdktf.stringToHclTerraform(this._reason2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reason_3: {
        value: cdktf.stringToHclTerraform(this._reason3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time: {
        value: cdktf.stringToHclTerraform(this._time),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
