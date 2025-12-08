// https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/system_clock
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemClockConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/system_clock#___path___ SystemClock#___path___}
  */
  readonly path?: string;
  /**
  * Date.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/system_clock#date SystemClock#date}
  */
  readonly date?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/system_clock#id SystemClock#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/system_clock#time SystemClock#time}
  */
  readonly time?: string;
  /**
  * Feature available from v6.27. If enabled, the time zone will be set automatically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/system_clock#time_zone_autodetect SystemClock#time_zone_autodetect}
  */
  readonly timeZoneAutodetect?: boolean | cdktf.IResolvable;
  /**
  * Name of the time zone. As most of the text values in RouterOS, this value is case sensitive. Special value manual applies [manually configured GMT offset](https://wiki.mikrotik.com/wiki/Manual:System/Time#Manual_time_zone_configuration), which by default is 00:00 with no daylight saving time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/system_clock#time_zone_name SystemClock#time_zone_name}
  */
  readonly timeZoneName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/system_clock routeros_system_clock}
*/
export class SystemClock extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_system_clock";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemClock resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemClock to import
  * @param importFromId The id of the existing SystemClock that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/system_clock#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemClock to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_system_clock", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/system_clock routeros_system_clock} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemClockConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemClockConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_system_clock',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.98.0',
        providerVersionConstraint: '1.98.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._date = config.date;
    this._id = config.id;
    this._time = config.time;
    this._timeZoneAutodetect = config.timeZoneAutodetect;
    this._timeZoneName = config.timeZoneName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // date - computed: false, optional: true, required: false
  private _date?: string; 
  public get date() {
    return this.getStringAttribute('date');
  }
  public set date(value: string) {
    this._date = value;
  }
  public resetDate() {
    this._date = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateInput() {
    return this._date;
  }

  // dst_active - computed: true, optional: false, required: false
  public get dstActive() {
    return this.getBooleanAttribute('dst_active');
  }

  // gmt_offset - computed: true, optional: false, required: false
  public get gmtOffset() {
    return this.getStringAttribute('gmt_offset');
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

  // time_zone_autodetect - computed: false, optional: true, required: false
  private _timeZoneAutodetect?: boolean | cdktf.IResolvable; 
  public get timeZoneAutodetect() {
    return this.getBooleanAttribute('time_zone_autodetect');
  }
  public set timeZoneAutodetect(value: boolean | cdktf.IResolvable) {
    this._timeZoneAutodetect = value;
  }
  public resetTimeZoneAutodetect() {
    this._timeZoneAutodetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneAutodetectInput() {
    return this._timeZoneAutodetect;
  }

  // time_zone_name - computed: false, optional: true, required: false
  private _timeZoneName?: string; 
  public get timeZoneName() {
    return this.getStringAttribute('time_zone_name');
  }
  public set timeZoneName(value: string) {
    this._timeZoneName = value;
  }
  public resetTimeZoneName() {
    this._timeZoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneNameInput() {
    return this._timeZoneName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      date: cdktf.stringToTerraform(this._date),
      id: cdktf.stringToTerraform(this._id),
      time: cdktf.stringToTerraform(this._time),
      time_zone_autodetect: cdktf.booleanToTerraform(this._timeZoneAutodetect),
      time_zone_name: cdktf.stringToTerraform(this._timeZoneName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      date: {
        value: cdktf.stringToHclTerraform(this._date),
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
      time: {
        value: cdktf.stringToHclTerraform(this._time),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_zone_autodetect: {
        value: cdktf.booleanToHclTerraform(this._timeZoneAutodetect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      time_zone_name: {
        value: cdktf.stringToHclTerraform(this._timeZoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
