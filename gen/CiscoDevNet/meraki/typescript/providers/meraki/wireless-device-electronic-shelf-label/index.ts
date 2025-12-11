// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/wireless_device_electronic_shelf_label
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelessDeviceElectronicShelfLabelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Desired ESL channel for the device, or `Auto` (case insensitive) to use the recommended channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/wireless_device_electronic_shelf_label#channel WirelessDeviceElectronicShelfLabel#channel}
  */
  readonly channel?: string;
  /**
  * Turn ESL features on and off for this device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/wireless_device_electronic_shelf_label#enabled WirelessDeviceElectronicShelfLabel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Wireless AP serial
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/wireless_device_electronic_shelf_label#serial WirelessDeviceElectronicShelfLabel#serial}
  */
  readonly serial: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/wireless_device_electronic_shelf_label meraki_wireless_device_electronic_shelf_label}
*/
export class WirelessDeviceElectronicShelfLabel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_wireless_device_electronic_shelf_label";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelessDeviceElectronicShelfLabel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelessDeviceElectronicShelfLabel to import
  * @param importFromId The id of the existing WirelessDeviceElectronicShelfLabel that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/wireless_device_electronic_shelf_label#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelessDeviceElectronicShelfLabel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_wireless_device_electronic_shelf_label", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/wireless_device_electronic_shelf_label meraki_wireless_device_electronic_shelf_label} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelessDeviceElectronicShelfLabelConfig
  */
  public constructor(scope: Construct, id: string, config: WirelessDeviceElectronicShelfLabelConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_wireless_device_electronic_shelf_label',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.9.0',
        providerVersionConstraint: '1.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._channel = config.channel;
    this._enabled = config.enabled;
    this._serial = config.serial;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // channel - computed: false, optional: true, required: false
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      channel: cdktf.stringToTerraform(this._channel),
      enabled: cdktf.booleanToTerraform(this._enabled),
      serial: cdktf.stringToTerraform(this._serial),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      channel: {
        value: cdktf.stringToHclTerraform(this._channel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      serial: {
        value: cdktf.stringToHclTerraform(this._serial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
