// https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/data-sources/wireless_wifi_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpenwrtWirelessWifiDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the section. This name is only used when interacting with UCI directly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/data-sources/wireless_wifi_device#id DataOpenwrtWirelessWifiDevice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/data-sources/wireless_wifi_device openwrt_wireless_wifi_device}
*/
export class DataOpenwrtWirelessWifiDevice extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openwrt_wireless_wifi_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpenwrtWirelessWifiDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpenwrtWirelessWifiDevice to import
  * @param importFromId The id of the existing DataOpenwrtWirelessWifiDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/data-sources/wireless_wifi_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpenwrtWirelessWifiDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openwrt_wireless_wifi_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/data-sources/wireless_wifi_device openwrt_wireless_wifi_device} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpenwrtWirelessWifiDeviceConfig
  */
  public constructor(scope: Construct, id: string, config: DataOpenwrtWirelessWifiDeviceConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // band - computed: true, optional: false, required: false
  public get band() {
    return this.getStringAttribute('band');
  }

  // cell_density - computed: true, optional: false, required: false
  public get cellDensity() {
    return this.getNumberAttribute('cell_density');
  }

  // channel - computed: true, optional: false, required: false
  public get channel() {
    return this.getStringAttribute('channel');
  }

  // country - computed: true, optional: false, required: false
  public get country() {
    return this.getStringAttribute('country');
  }

  // htmode - computed: true, optional: false, required: false
  public get htmode() {
    return this.getStringAttribute('htmode');
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

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
