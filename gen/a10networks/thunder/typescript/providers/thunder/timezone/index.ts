// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/timezone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TimezoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/timezone#id Timezone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/timezone#uuid Timezone#uuid}
  */
  readonly uuid?: string;
  /**
  * timezone_index_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/timezone#timezone_index_cfg Timezone#timezone_index_cfg}
  */
  readonly timezoneIndexCfg?: TimezoneTimezoneIndexCfg;
}
export interface TimezoneTimezoneIndexCfg {
  /**
  * Disable daylight saving time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/timezone#nodst Timezone#nodst}
  */
  readonly nodst?: number;
  /**
  * 'UTC': Coordinated Universal Time (UTC); 'Pacific/Midway': (GMT-11:00)Midway Island, Samoa; 'Pacific/Honolulu': (GMT-10:00)Hawaii; 'America/Anchorage': (GMT-09:00)Alaska; 'America/Tijuana': (GMT-08:00)Pacific Time - Tijuana; 'America/Los_Angeles': (GMT-08:00)Pacific Time(US & Canada); 'America/Vancouver': (GMT-08:00)Pacific Time - west British Columbia; 'America/Phoenix': (GMT-07:00)Arizona; 'America/Shiprock': (GMT-07:00)Mountain Time(US & Canada); 'America/Chicago': (GMT-06:00)Central Time(US & Canada); 'America/Mexico_City': (GMT-06:00)Mexico City; 'America/Regina': (GMT-06:00)Saskatchewan; 'America/Swift_Current': (GMT-06:00)Central America; 'America/Kentucky/Monticello': (GMT-05:00)Eastern Time(US & Canada); 'America/Indiana/Marengo': (GMT-05:00)Indiana(East); 'America/Montreal': (GMT-05:00)Eastern Time - Ontario & Quebec - most locations; 'America/New_York': (GMT-05:00)Eastern Time; 'America/Toronto': (GMT-05:00)Eastern Time - Toronto, Ontario; 'America/Caracas': (GMT-04:00)Caracas, La Paz; 'America/Halifax': (GMT-04:00)Atlantic Time(Canada); 'America/Santiago': (GMT-04:00)Santiago; 'America/St_Johns': (GMT-03:30)Newfoundland; 'America/Buenos_Aires': (GMT-03:00)Buenos Aires, Georgetown; 'America/Godthab': (GMT-03:00)Greenland; 'America/Brasilia': (GMT-03:00)Brasilia; 'Atlantic/South_Georgia': (GMT-02:00)Mid-Atlantic; 'Atlantic/Azores': (GMT-01:00)Azores; 'Atlantic/Cape_Verde': (GMT-01:00)Cape Verde Is.; 'Europe/Dublin': (GMT)Greenwich Mean Time: Dublin, Edinburgh, Lisbon, London; 'Africa/Algiers': (GMT+01:00)West Central Africa; 'Europe/Amsterdam': (GMT+01:00)Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna; 'Europe/Belgrade': (GMT+01:00)Belgrade, Bratislava, Budapest, Ljubljana, Prague; 'Europe/Brussels': (GMT+01:00)Brussels, Copenhagen, Madrid, Paris; 'Europe/Sarajevo': (GMT+01:00)Sarajevo, Skopje, Sofija, Vilnius, Warsaw, Zagreb; 'Europe/Bucharest': (GMT+02:00)Bucharest; 'Africa/Cairo': (GMT+02:00)Cairo; 'Europe/Athens': (GMT+02:00)Athens, Istanbul, Minsk; 'Africa/Harare': (GMT+02:00)Harare, Pretoria; 'Asia/Jerusalem': (GMT+02:00)Jerusalem; 'Europe/Helsinki': (GMT+02:00)Helsinki, Riga, Tallinn; 'Africa/Nairobi': (GMT+03:00)Nairobi; 'Asia/Baghdad': (GMT+03:00)Baghdad; 'Asia/Kuwait': (GMT+03:00)Kuwait, Riyadh; 'Europe/Moscow': (GMT+03:00)Moscow, St.Petersburg, Volgogard; 'Asia/Tehran': (GMT+03:30)Tehran; 'Asia/Baku': (GMT+04:00)Baku, Tbilisi, Yerevan; 'Asia/Muscat': (GMT+04:00)Abu Dhabi, Muscat; 'Asia/Kabul': (GMT+04:30)Kabul; 'Asia/Karachi': (GMT+05:00)Islamabad, Karachi, Tashkent; 'Asia/Yekaterinburg': (GMT+05:00)Ekaterinburg; 'Asia/Calcutta': (GMT+05:30)Calcutta, Chennai, Mumbai, New Delhi; 'Asia/Katmandu': (GMT+05:45)Kathmandu; 'Asia/Almaty': (GMT+06:00)Almaty, Novosibirsk; 'Asia/Dhaka': (GMT+06:00)Astana, Dhaka; 'Indian/Chagos': (GMT+06:00)Sri Jayawardenepura; 'Asia/Rangoon': (GMT+06:30)Rangoon; 'Asia/Bangkok': (GMT+07:00)Bangkok, Hanoi, Jakarta; 'Asia/Krasnoyarsk': (GMT+07:00)Krasnoyarsk; 'Asia/Irkutsk': (GMT+08:00)Irkutsk, Ulaan Bataar; 'Asia/Kuala_Lumpur': (GMT+08:00)Kuala Lumpur, Singapore; 'Asia/Shanghai': (GMT+08:00)Beijing, Chongqing, Hong Kong, Urumqi; 'Asia/Taipei': (GMT+08:00)Taipei; 'Australia/Perth': (GMT+08:00)Perth; 'Asia/Seoul': (GMT+09:00)Seoul; 'Asia/Tokyo': (GMT+09:00)Osaka, Sapporo, Tokyo; 'Asia/Yakutsk': (GMT+09:00)Yakutsk; 'Australia/Adelaide': (GMT+09:30)Adelaide; 'Australia/Darwin': (GMT+09:30)Darwin; 'Australia/Hobart': (GMT+10:00)Hobart; 'Australia/Brisbane': (GMT+10:00)Brisbane; 'Asia/Vladivostok': (GMT+10:00)Vladivostok; 'Australia/Sydney': (GMT+10:00)Canberra, Melbourne, Sydney; 'Pacific/Guam': (GMT+10:00)Guam, Port Moresby; 'Asia/Magadan': (GMT+11:00)Magadan, Solomon., New Caledonia; 'Pacific/Auckland': (GMT+12:00)Auckland, Wellington; 'Pacific/Fiji': (GMT+12:00)Fiji, Kamchatka, Marshall Is.; 'Pacific/Kwajalein': (GMT+12:00)Eniwetok, Kwajalein; 'Pacific/Enderbury': (GMT+13:00)Nuku'alofa;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/timezone#timezone_index Timezone#timezone_index}
  */
  readonly timezoneIndex?: string;
}

export function timezoneTimezoneIndexCfgToTerraform(struct?: TimezoneTimezoneIndexCfgOutputReference | TimezoneTimezoneIndexCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nodst: cdktf.numberToTerraform(struct!.nodst),
    timezone_index: cdktf.stringToTerraform(struct!.timezoneIndex),
  }
}


export function timezoneTimezoneIndexCfgToHclTerraform(struct?: TimezoneTimezoneIndexCfgOutputReference | TimezoneTimezoneIndexCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nodst: {
      value: cdktf.numberToHclTerraform(struct!.nodst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timezone_index: {
      value: cdktf.stringToHclTerraform(struct!.timezoneIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimezoneTimezoneIndexCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TimezoneTimezoneIndexCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodst !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodst = this._nodst;
    }
    if (this._timezoneIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezoneIndex = this._timezoneIndex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimezoneTimezoneIndexCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodst = undefined;
      this._timezoneIndex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodst = value.nodst;
      this._timezoneIndex = value.timezoneIndex;
    }
  }

  // nodst - computed: false, optional: true, required: false
  private _nodst?: number; 
  public get nodst() {
    return this.getNumberAttribute('nodst');
  }
  public set nodst(value: number) {
    this._nodst = value;
  }
  public resetNodst() {
    this._nodst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodstInput() {
    return this._nodst;
  }

  // timezone_index - computed: false, optional: true, required: false
  private _timezoneIndex?: string; 
  public get timezoneIndex() {
    return this.getStringAttribute('timezone_index');
  }
  public set timezoneIndex(value: string) {
    this._timezoneIndex = value;
  }
  public resetTimezoneIndex() {
    this._timezoneIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneIndexInput() {
    return this._timezoneIndex;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/timezone thunder_timezone}
*/
export class Timezone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_timezone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Timezone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Timezone to import
  * @param importFromId The id of the existing Timezone that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/timezone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Timezone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_timezone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/timezone thunder_timezone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TimezoneConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TimezoneConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_timezone',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._uuid = config.uuid;
    this._timezoneIndexCfg.internalValue = config.timezoneIndexCfg;
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // timezone_index_cfg - computed: false, optional: true, required: false
  private _timezoneIndexCfg = new TimezoneTimezoneIndexCfgOutputReference(this, "timezone_index_cfg");
  public get timezoneIndexCfg() {
    return this._timezoneIndexCfg;
  }
  public putTimezoneIndexCfg(value: TimezoneTimezoneIndexCfg) {
    this._timezoneIndexCfg.internalValue = value;
  }
  public resetTimezoneIndexCfg() {
    this._timezoneIndexCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneIndexCfgInput() {
    return this._timezoneIndexCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      timezone_index_cfg: timezoneTimezoneIndexCfgToTerraform(this._timezoneIndexCfg.internalValue),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timezone_index_cfg: {
        value: timezoneTimezoneIndexCfgToHclTerraform(this._timezoneIndexCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TimezoneTimezoneIndexCfgList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
