// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_network_bluetooth_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelessNetworkBluetoothSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether APs will advertise beacons.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_network_bluetooth_settings#advertising_enabled WirelessNetworkBluetoothSettings#advertising_enabled}
  */
  readonly advertisingEnabled?: boolean | cdktf.IResolvable;
  /**
  * The major number to be used in the beacon identifier. Only valid in `Non-unique` mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_network_bluetooth_settings#major WirelessNetworkBluetoothSettings#major}
  */
  readonly major?: number;
  /**
  * The way major and minor number should be assigned to nodes in the network. (`Unique`, `Non-unique`)
  *   - Choices: `Non-unique`, `Unique`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_network_bluetooth_settings#major_minor_assignment_mode WirelessNetworkBluetoothSettings#major_minor_assignment_mode}
  */
  readonly majorMinorAssignmentMode?: string;
  /**
  * The minor number to be used in the beacon identifier. Only valid in `Non-unique` mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_network_bluetooth_settings#minor WirelessNetworkBluetoothSettings#minor}
  */
  readonly minor?: number;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_network_bluetooth_settings#network_id WirelessNetworkBluetoothSettings#network_id}
  */
  readonly networkId: string;
  /**
  * Whether APs will scan for Bluetooth enabled clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_network_bluetooth_settings#scanning_enabled WirelessNetworkBluetoothSettings#scanning_enabled}
  */
  readonly scanningEnabled?: boolean | cdktf.IResolvable;
  /**
  * The UUID to be used in the beacon identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_network_bluetooth_settings#uuid WirelessNetworkBluetoothSettings#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_network_bluetooth_settings meraki_wireless_network_bluetooth_settings}
*/
export class WirelessNetworkBluetoothSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_wireless_network_bluetooth_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelessNetworkBluetoothSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelessNetworkBluetoothSettings to import
  * @param importFromId The id of the existing WirelessNetworkBluetoothSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_network_bluetooth_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelessNetworkBluetoothSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_wireless_network_bluetooth_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_network_bluetooth_settings meraki_wireless_network_bluetooth_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelessNetworkBluetoothSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: WirelessNetworkBluetoothSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_wireless_network_bluetooth_settings',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._advertisingEnabled = config.advertisingEnabled;
    this._major = config.major;
    this._majorMinorAssignmentMode = config.majorMinorAssignmentMode;
    this._minor = config.minor;
    this._networkId = config.networkId;
    this._scanningEnabled = config.scanningEnabled;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advertising_enabled - computed: false, optional: true, required: false
  private _advertisingEnabled?: boolean | cdktf.IResolvable; 
  public get advertisingEnabled() {
    return this.getBooleanAttribute('advertising_enabled');
  }
  public set advertisingEnabled(value: boolean | cdktf.IResolvable) {
    this._advertisingEnabled = value;
  }
  public resetAdvertisingEnabled() {
    this._advertisingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisingEnabledInput() {
    return this._advertisingEnabled;
  }

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

  // major_minor_assignment_mode - computed: false, optional: true, required: false
  private _majorMinorAssignmentMode?: string; 
  public get majorMinorAssignmentMode() {
    return this.getStringAttribute('major_minor_assignment_mode');
  }
  public set majorMinorAssignmentMode(value: string) {
    this._majorMinorAssignmentMode = value;
  }
  public resetMajorMinorAssignmentMode() {
    this._majorMinorAssignmentMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get majorMinorAssignmentModeInput() {
    return this._majorMinorAssignmentMode;
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

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // scanning_enabled - computed: false, optional: true, required: false
  private _scanningEnabled?: boolean | cdktf.IResolvable; 
  public get scanningEnabled() {
    return this.getBooleanAttribute('scanning_enabled');
  }
  public set scanningEnabled(value: boolean | cdktf.IResolvable) {
    this._scanningEnabled = value;
  }
  public resetScanningEnabled() {
    this._scanningEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanningEnabledInput() {
    return this._scanningEnabled;
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
      advertising_enabled: cdktf.booleanToTerraform(this._advertisingEnabled),
      major: cdktf.numberToTerraform(this._major),
      major_minor_assignment_mode: cdktf.stringToTerraform(this._majorMinorAssignmentMode),
      minor: cdktf.numberToTerraform(this._minor),
      network_id: cdktf.stringToTerraform(this._networkId),
      scanning_enabled: cdktf.booleanToTerraform(this._scanningEnabled),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advertising_enabled: {
        value: cdktf.booleanToHclTerraform(this._advertisingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      major: {
        value: cdktf.numberToHclTerraform(this._major),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      major_minor_assignment_mode: {
        value: cdktf.stringToHclTerraform(this._majorMinorAssignmentMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minor: {
        value: cdktf.numberToHclTerraform(this._minor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scanning_enabled: {
        value: cdktf.booleanToHclTerraform(this._scanningEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
