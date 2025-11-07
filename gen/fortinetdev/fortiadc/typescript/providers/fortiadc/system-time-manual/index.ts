// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_time_manual
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemTimeManualConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_time_manual#dst SystemTimeManual#dst}
  */
  readonly dst: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_time_manual#hour SystemTimeManual#hour}
  */
  readonly hour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_time_manual#id SystemTimeManual#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_time_manual#mday SystemTimeManual#mday}
  */
  readonly mday?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_time_manual#minute SystemTimeManual#minute}
  */
  readonly minute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_time_manual#month SystemTimeManual#month}
  */
  readonly month?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_time_manual#ntpserver SystemTimeManual#ntpserver}
  */
  readonly ntpserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_time_manual#ntpsync SystemTimeManual#ntpsync}
  */
  readonly ntpsync: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_time_manual#second SystemTimeManual#second}
  */
  readonly second?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_time_manual#syncinterval SystemTimeManual#syncinterval}
  */
  readonly syncinterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_time_manual#tz SystemTimeManual#tz}
  */
  readonly tz: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_time_manual#year SystemTimeManual#year}
  */
  readonly year?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_time_manual fortiadc_system_time_manual}
*/
export class SystemTimeManual extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_system_time_manual";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemTimeManual resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemTimeManual to import
  * @param importFromId The id of the existing SystemTimeManual that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_time_manual#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemTimeManual to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_system_time_manual", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_time_manual fortiadc_system_time_manual} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemTimeManualConfig
  */
  public constructor(scope: Construct, id: string, config: SystemTimeManualConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_system_time_manual',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dst = config.dst;
    this._hour = config.hour;
    this._id = config.id;
    this._mday = config.mday;
    this._minute = config.minute;
    this._month = config.month;
    this._ntpserver = config.ntpserver;
    this._ntpsync = config.ntpsync;
    this._second = config.second;
    this._syncinterval = config.syncinterval;
    this._tz = config.tz;
    this._year = config.year;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dst - computed: false, optional: false, required: true
  private _dst?: string; 
  public get dst() {
    return this.getStringAttribute('dst');
  }
  public set dst(value: string) {
    this._dst = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstInput() {
    return this._dst;
  }

  // hour - computed: true, optional: true, required: false
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  public resetHour() {
    this._hour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
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

  // mday - computed: true, optional: true, required: false
  private _mday?: number; 
  public get mday() {
    return this.getNumberAttribute('mday');
  }
  public set mday(value: number) {
    this._mday = value;
  }
  public resetMday() {
    this._mday = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdayInput() {
    return this._mday;
  }

  // minute - computed: true, optional: true, required: false
  private _minute?: number; 
  public get minute() {
    return this.getNumberAttribute('minute');
  }
  public set minute(value: number) {
    this._minute = value;
  }
  public resetMinute() {
    this._minute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteInput() {
    return this._minute;
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

  // ntpserver - computed: true, optional: true, required: false
  private _ntpserver?: string; 
  public get ntpserver() {
    return this.getStringAttribute('ntpserver');
  }
  public set ntpserver(value: string) {
    this._ntpserver = value;
  }
  public resetNtpserver() {
    this._ntpserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpserverInput() {
    return this._ntpserver;
  }

  // ntpsync - computed: false, optional: false, required: true
  private _ntpsync?: string; 
  public get ntpsync() {
    return this.getStringAttribute('ntpsync');
  }
  public set ntpsync(value: string) {
    this._ntpsync = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpsyncInput() {
    return this._ntpsync;
  }

  // second - computed: true, optional: true, required: false
  private _second?: number; 
  public get second() {
    return this.getNumberAttribute('second');
  }
  public set second(value: number) {
    this._second = value;
  }
  public resetSecond() {
    this._second = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondInput() {
    return this._second;
  }

  // syncinterval - computed: true, optional: true, required: false
  private _syncinterval?: string; 
  public get syncinterval() {
    return this.getStringAttribute('syncinterval');
  }
  public set syncinterval(value: string) {
    this._syncinterval = value;
  }
  public resetSyncinterval() {
    this._syncinterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncintervalInput() {
    return this._syncinterval;
  }

  // tz - computed: false, optional: false, required: true
  private _tz?: string; 
  public get tz() {
    return this.getStringAttribute('tz');
  }
  public set tz(value: string) {
    this._tz = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tzInput() {
    return this._tz;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dst: cdktf.stringToTerraform(this._dst),
      hour: cdktf.numberToTerraform(this._hour),
      id: cdktf.stringToTerraform(this._id),
      mday: cdktf.numberToTerraform(this._mday),
      minute: cdktf.numberToTerraform(this._minute),
      month: cdktf.numberToTerraform(this._month),
      ntpserver: cdktf.stringToTerraform(this._ntpserver),
      ntpsync: cdktf.stringToTerraform(this._ntpsync),
      second: cdktf.numberToTerraform(this._second),
      syncinterval: cdktf.stringToTerraform(this._syncinterval),
      tz: cdktf.stringToTerraform(this._tz),
      year: cdktf.numberToTerraform(this._year),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dst: {
        value: cdktf.stringToHclTerraform(this._dst),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hour: {
        value: cdktf.numberToHclTerraform(this._hour),
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
      mday: {
        value: cdktf.numberToHclTerraform(this._mday),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minute: {
        value: cdktf.numberToHclTerraform(this._minute),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      month: {
        value: cdktf.numberToHclTerraform(this._month),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ntpserver: {
        value: cdktf.stringToHclTerraform(this._ntpserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ntpsync: {
        value: cdktf.stringToHclTerraform(this._ntpsync),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      second: {
        value: cdktf.numberToHclTerraform(this._second),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      syncinterval: {
        value: cdktf.stringToHclTerraform(this._syncinterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tz: {
        value: cdktf.stringToHclTerraform(this._tz),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      year: {
        value: cdktf.numberToHclTerraform(this._year),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
