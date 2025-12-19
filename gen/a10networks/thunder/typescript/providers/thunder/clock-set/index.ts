// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/clock_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClockSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/clock_set#id ClockSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * time_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/clock_set#time_cfg ClockSet#time_cfg}
  */
  readonly timeCfg?: ClockSetTimeCfg;
}
export interface ClockSetTimeCfg {
  /**
  * Day of the Month
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/clock_set#day_of_month ClockSet#day_of_month}
  */
  readonly dayOfMonth?: number;
  /**
  * Day of the Month
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/clock_set#day_of_month_2 ClockSet#day_of_month_2}
  */
  readonly dayOfMonth2?: number;
  /**
  * 'January': Month of the year; 'February': Month of the year; 'March': Month of the year; 'April': Month of the year; 'May': Month of the year; 'June': Month of the year; 'July': Month of the year; 'August': Month of the year; 'September': Month of the year; 'October': Month of the year; 'November': Month of the year; 'December': Month of the year;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/clock_set#month ClockSet#month}
  */
  readonly month?: string;
  /**
  * 'January': Month of the year; 'February': Month of the year; 'March': Month of the year; 'April': Month of the year; 'May': Month of the year; 'June': Month of the year; 'July': Month of the year; 'August': Month of the year; 'September': Month of the year; 'October': Month of the year; 'November': Month of the year; 'December': Month of the year;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/clock_set#month_2 ClockSet#month_2}
  */
  readonly month2?: string;
  /**
  * Current Time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/clock_set#time ClockSet#time}
  */
  readonly time?: string;
  /**
  * Year
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/clock_set#year ClockSet#year}
  */
  readonly year?: number;
}

export function clockSetTimeCfgToTerraform(struct?: ClockSetTimeCfgOutputReference | ClockSetTimeCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_month: cdktf.numberToTerraform(struct!.dayOfMonth),
    day_of_month_2: cdktf.numberToTerraform(struct!.dayOfMonth2),
    month: cdktf.stringToTerraform(struct!.month),
    month_2: cdktf.stringToTerraform(struct!.month2),
    time: cdktf.stringToTerraform(struct!.time),
    year: cdktf.numberToTerraform(struct!.year),
  }
}


export function clockSetTimeCfgToHclTerraform(struct?: ClockSetTimeCfgOutputReference | ClockSetTimeCfg): any {
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
    day_of_month_2: {
      value: cdktf.numberToHclTerraform(struct!.dayOfMonth2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    month: {
      value: cdktf.stringToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    month_2: {
      value: cdktf.stringToHclTerraform(struct!.month2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time: {
      value: cdktf.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class ClockSetTimeCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClockSetTimeCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfMonth = this._dayOfMonth;
    }
    if (this._dayOfMonth2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfMonth2 = this._dayOfMonth2;
    }
    if (this._month !== undefined) {
      hasAnyValues = true;
      internalValueResult.month = this._month;
    }
    if (this._month2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.month2 = this._month2;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    if (this._year !== undefined) {
      hasAnyValues = true;
      internalValueResult.year = this._year;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClockSetTimeCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfMonth = undefined;
      this._dayOfMonth2 = undefined;
      this._month = undefined;
      this._month2 = undefined;
      this._time = undefined;
      this._year = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfMonth = value.dayOfMonth;
      this._dayOfMonth2 = value.dayOfMonth2;
      this._month = value.month;
      this._month2 = value.month2;
      this._time = value.time;
      this._year = value.year;
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

  // year - computed: false, optional: true, required: false
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/clock_set thunder_clock_set}
*/
export class ClockSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_clock_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClockSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClockSet to import
  * @param importFromId The id of the existing ClockSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/clock_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClockSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_clock_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/clock_set thunder_clock_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClockSetConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ClockSetConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_clock_set',
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
    this._id = config.id;
    this._timeCfg.internalValue = config.timeCfg;
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

  // time_cfg - computed: false, optional: true, required: false
  private _timeCfg = new ClockSetTimeCfgOutputReference(this, "time_cfg");
  public get timeCfg() {
    return this._timeCfg;
  }
  public putTimeCfg(value: ClockSetTimeCfg) {
    this._timeCfg.internalValue = value;
  }
  public resetTimeCfg() {
    this._timeCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeCfgInput() {
    return this._timeCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      time_cfg: clockSetTimeCfgToTerraform(this._timeCfg.internalValue),
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
      time_cfg: {
        value: clockSetTimeCfgToHclTerraform(this._timeCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClockSetTimeCfgList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
