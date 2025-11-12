// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_device_bluetooth_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelessDeviceBluetoothSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Desired major value of the beacon. If the value is set to null it will reset to Dashboard`s automatically generated value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_device_bluetooth_settings#major WirelessDeviceBluetoothSettings#major}
  */
  readonly major?: number;
  /**
  * Desired minor value of the beacon. If the value is set to null it will reset to Dashboard`s automatically generated value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_device_bluetooth_settings#minor WirelessDeviceBluetoothSettings#minor}
  */
  readonly minor?: number;
  /**
  * Wireless AP serial
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_device_bluetooth_settings#serial WirelessDeviceBluetoothSettings#serial}
  */
  readonly serial: string;
  /**
  * Desired UUID of the beacon. If the value is set to null it will reset to Dashboard`s automatically generated value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_device_bluetooth_settings#uuid WirelessDeviceBluetoothSettings#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_device_bluetooth_settings meraki_wireless_device_bluetooth_settings}
*/
export class WirelessDeviceBluetoothSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_wireless_device_bluetooth_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelessDeviceBluetoothSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelessDeviceBluetoothSettings to import
  * @param importFromId The id of the existing WirelessDeviceBluetoothSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_device_bluetooth_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelessDeviceBluetoothSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_wireless_device_bluetooth_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_device_bluetooth_settings meraki_wireless_device_bluetooth_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelessDeviceBluetoothSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: WirelessDeviceBluetoothSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_wireless_device_bluetooth_settings',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1',
        providerVersionConstraint: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._major = config.major;
    this._minor = config.minor;
    this._serial = config.serial;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // major - computed: false, optional: true, required: false
  private _major?: number; 
  public get major() {
    return this.getNumberAttribute('major');
  }
  public set major(value: number) {
    this._major = value;
  }
  public resetMajor() {
    this._major = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get majorInput() {
    return this._major;
  }

  // minor - computed: false, optional: true, required: false
  private _minor?: number; 
  public get minor() {
    return this.getNumberAttribute('minor');
  }
  public set minor(value: number) {
    this._minor = value;
  }
  public resetMinor() {
    this._minor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minorInput() {
    return this._minor;
  }

  // serial - computed: false, optional: false, required: true
  private _serial?: string; 
  public get serial() {
    return this.getStringAttribute('serial');
  }
  public set serial(value: string) {
    this._serial = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }

  // uuid - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      major: cdktf.numberToTerraform(this._major),
      minor: cdktf.numberToTerraform(this._minor),
      serial: cdktf.stringToTerraform(this._serial),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      major: {
        value: cdktf.numberToHclTerraform(this._major),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minor: {
        value: cdktf.numberToHclTerraform(this._minor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      serial: {
        value: cdktf.stringToHclTerraform(this._serial),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
