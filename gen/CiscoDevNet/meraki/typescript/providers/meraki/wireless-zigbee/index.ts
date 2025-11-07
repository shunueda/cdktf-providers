// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_zigbee
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelessZigbeeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_zigbee#defaults_channel WirelessZigbee#defaults_channel}
  */
  readonly defaultsChannel?: string;
  /**
  * Transmit Power Level
  *   - Range: `10`-`20`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_zigbee#defaults_transmit_power_level WirelessZigbee#defaults_transmit_power_level}
  */
  readonly defaultsTransmitPowerLevel?: number;
  /**
  * To enable/disable Zigbee on the network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_zigbee#enabled WirelessZigbee#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Device Serial number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_zigbee#iot_controller_serial WirelessZigbee#iot_controller_serial}
  */
  readonly iotControllerSerial?: string;
  /**
  * Host Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_zigbee#lock_management_address WirelessZigbee#lock_management_address}
  */
  readonly lockManagementAddress?: string;
  /**
  * Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_zigbee#lock_management_password WirelessZigbee#lock_management_password}
  */
  readonly lockManagementPassword?: string;
  /**
  * Username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_zigbee#lock_management_username WirelessZigbee#lock_management_username}
  */
  readonly lockManagementUsername?: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_zigbee#network_id WirelessZigbee#network_id}
  */
  readonly networkId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_zigbee meraki_wireless_zigbee}
*/
export class WirelessZigbee extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_wireless_zigbee";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelessZigbee resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelessZigbee to import
  * @param importFromId The id of the existing WirelessZigbee that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_zigbee#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelessZigbee to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_wireless_zigbee", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_zigbee meraki_wireless_zigbee} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelessZigbeeConfig
  */
  public constructor(scope: Construct, id: string, config: WirelessZigbeeConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_wireless_zigbee',
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
    this._defaultsChannel = config.defaultsChannel;
    this._defaultsTransmitPowerLevel = config.defaultsTransmitPowerLevel;
    this._enabled = config.enabled;
    this._iotControllerSerial = config.iotControllerSerial;
    this._lockManagementAddress = config.lockManagementAddress;
    this._lockManagementPassword = config.lockManagementPassword;
    this._lockManagementUsername = config.lockManagementUsername;
    this._networkId = config.networkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // defaults_channel - computed: false, optional: true, required: false
  private _defaultsChannel?: string; 
  public get defaultsChannel() {
    return this.getStringAttribute('defaults_channel');
  }
  public set defaultsChannel(value: string) {
    this._defaultsChannel = value;
  }
  public resetDefaultsChannel() {
    this._defaultsChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultsChannelInput() {
    return this._defaultsChannel;
  }

  // defaults_transmit_power_level - computed: false, optional: true, required: false
  private _defaultsTransmitPowerLevel?: number; 
  public get defaultsTransmitPowerLevel() {
    return this.getNumberAttribute('defaults_transmit_power_level');
  }
  public set defaultsTransmitPowerLevel(value: number) {
    this._defaultsTransmitPowerLevel = value;
  }
  public resetDefaultsTransmitPowerLevel() {
    this._defaultsTransmitPowerLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultsTransmitPowerLevelInput() {
    return this._defaultsTransmitPowerLevel;
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

  // iot_controller_serial - computed: false, optional: true, required: false
  private _iotControllerSerial?: string; 
  public get iotControllerSerial() {
    return this.getStringAttribute('iot_controller_serial');
  }
  public set iotControllerSerial(value: string) {
    this._iotControllerSerial = value;
  }
  public resetIotControllerSerial() {
    this._iotControllerSerial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotControllerSerialInput() {
    return this._iotControllerSerial;
  }

  // lock_management_address - computed: false, optional: true, required: false
  private _lockManagementAddress?: string; 
  public get lockManagementAddress() {
    return this.getStringAttribute('lock_management_address');
  }
  public set lockManagementAddress(value: string) {
    this._lockManagementAddress = value;
  }
  public resetLockManagementAddress() {
    this._lockManagementAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockManagementAddressInput() {
    return this._lockManagementAddress;
  }

  // lock_management_password - computed: false, optional: true, required: false
  private _lockManagementPassword?: string; 
  public get lockManagementPassword() {
    return this.getStringAttribute('lock_management_password');
  }
  public set lockManagementPassword(value: string) {
    this._lockManagementPassword = value;
  }
  public resetLockManagementPassword() {
    this._lockManagementPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockManagementPasswordInput() {
    return this._lockManagementPassword;
  }

  // lock_management_username - computed: false, optional: true, required: false
  private _lockManagementUsername?: string; 
  public get lockManagementUsername() {
    return this.getStringAttribute('lock_management_username');
  }
  public set lockManagementUsername(value: string) {
    this._lockManagementUsername = value;
  }
  public resetLockManagementUsername() {
    this._lockManagementUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockManagementUsernameInput() {
    return this._lockManagementUsername;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      defaults_channel: cdktf.stringToTerraform(this._defaultsChannel),
      defaults_transmit_power_level: cdktf.numberToTerraform(this._defaultsTransmitPowerLevel),
      enabled: cdktf.booleanToTerraform(this._enabled),
      iot_controller_serial: cdktf.stringToTerraform(this._iotControllerSerial),
      lock_management_address: cdktf.stringToTerraform(this._lockManagementAddress),
      lock_management_password: cdktf.stringToTerraform(this._lockManagementPassword),
      lock_management_username: cdktf.stringToTerraform(this._lockManagementUsername),
      network_id: cdktf.stringToTerraform(this._networkId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      defaults_channel: {
        value: cdktf.stringToHclTerraform(this._defaultsChannel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defaults_transmit_power_level: {
        value: cdktf.numberToHclTerraform(this._defaultsTransmitPowerLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      iot_controller_serial: {
        value: cdktf.stringToHclTerraform(this._iotControllerSerial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lock_management_address: {
        value: cdktf.stringToHclTerraform(this._lockManagementAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lock_management_password: {
        value: cdktf.stringToHclTerraform(this._lockManagementPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lock_management_username: {
        value: cdktf.stringToHclTerraform(this._lockManagementUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
