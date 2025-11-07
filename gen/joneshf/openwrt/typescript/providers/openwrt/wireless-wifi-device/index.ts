// https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/wireless_wifi_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelessWifiDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Channel width. Must be one of: "2g", "5g", "6g".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/wireless_wifi_device#band WirelessWifiDevice#band}
  */
  readonly band?: string;
  /**
  * Configures data rates based on the coverage cell density. Must be one of 0, 1, 2, 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/wireless_wifi_device#cell_density WirelessWifiDevice#cell_density}
  */
  readonly cellDensity?: number;
  /**
  * The wireless channel. Currently, only "auto" is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/wireless_wifi_device#channel WirelessWifiDevice#channel}
  */
  readonly channel: string;
  /**
  * Two-digit country code. E.g. "US".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/wireless_wifi_device#country WirelessWifiDevice#country}
  */
  readonly country?: string;
  /**
  * Channel width. Must be one of: "HE20", "HE40", "HE80", "HE160", "HT20", "HT40", "HT40-", "HT40+", "NONE", "VHT20", "VHT40", "VHT80", "VHT160".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/wireless_wifi_device#htmode WirelessWifiDevice#htmode}
  */
  readonly htmode?: string;
  /**
  * Name of the section. This name is only used when interacting with UCI directly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/wireless_wifi_device#id WirelessWifiDevice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Path of the device in `/sys/devices`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/wireless_wifi_device#path WirelessWifiDevice#path}
  */
  readonly path?: string;
  /**
  * The type of device. Currently only "mac80211" is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/wireless_wifi_device#type WirelessWifiDevice#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/wireless_wifi_device openwrt_wireless_wifi_device}
*/
export class WirelessWifiDevice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openwrt_wireless_wifi_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelessWifiDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelessWifiDevice to import
  * @param importFromId The id of the existing WirelessWifiDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/wireless_wifi_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelessWifiDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openwrt_wireless_wifi_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/wireless_wifi_device openwrt_wireless_wifi_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelessWifiDeviceConfig
  */
  public constructor(scope: Construct, id: string, config: WirelessWifiDeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'openwrt_wireless_wifi_device',
      terraformGeneratorMetadata: {
        providerName: 'openwrt',
        providerVersion: '0.0.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._band = config.band;
    this._cellDensity = config.cellDensity;
    this._channel = config.channel;
    this._country = config.country;
    this._htmode = config.htmode;
    this._id = config.id;
    this._path = config.path;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // band - computed: true, optional: true, required: false
  private _band?: string; 
  public get band() {
    return this.getStringAttribute('band');
  }
  public set band(value: string) {
    this._band = value;
  }
  public resetBand() {
    this._band = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandInput() {
    return this._band;
  }

  // cell_density - computed: true, optional: true, required: false
  private _cellDensity?: number; 
  public get cellDensity() {
    return this.getNumberAttribute('cell_density');
  }
  public set cellDensity(value: number) {
    this._cellDensity = value;
  }
  public resetCellDensity() {
    this._cellDensity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cellDensityInput() {
    return this._cellDensity;
  }

  // channel - computed: false, optional: false, required: true
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // country - computed: true, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // htmode - computed: true, optional: true, required: false
  private _htmode?: string; 
  public get htmode() {
    return this.getStringAttribute('htmode');
  }
  public set htmode(value: string) {
    this._htmode = value;
  }
  public resetHtmode() {
    this._htmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get htmodeInput() {
    return this._htmode;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      band: cdktf.stringToTerraform(this._band),
      cell_density: cdktf.numberToTerraform(this._cellDensity),
      channel: cdktf.stringToTerraform(this._channel),
      country: cdktf.stringToTerraform(this._country),
      htmode: cdktf.stringToTerraform(this._htmode),
      id: cdktf.stringToTerraform(this._id),
      path: cdktf.stringToTerraform(this._path),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      band: {
        value: cdktf.stringToHclTerraform(this._band),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cell_density: {
        value: cdktf.numberToHclTerraform(this._cellDensity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      channel: {
        value: cdktf.stringToHclTerraform(this._channel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      country: {
        value: cdktf.stringToHclTerraform(this._country),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      htmode: {
        value: cdktf.stringToHclTerraform(this._htmode),
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
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
