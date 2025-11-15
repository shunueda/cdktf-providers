// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/wireless_zigbee
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiWirelessZigbeeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/wireless_zigbee#network_id DataMerakiWirelessZigbee#network_id}
  */
  readonly networkId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/wireless_zigbee meraki_wireless_zigbee}
*/
export class DataMerakiWirelessZigbee extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_wireless_zigbee";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiWirelessZigbee resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiWirelessZigbee to import
  * @param importFromId The id of the existing DataMerakiWirelessZigbee that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/wireless_zigbee#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiWirelessZigbee to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_wireless_zigbee", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/wireless_zigbee meraki_wireless_zigbee} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiWirelessZigbeeConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiWirelessZigbeeConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_wireless_zigbee',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._networkId = config.networkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // defaults_channel - computed: true, optional: false, required: false
  public get defaultsChannel() {
    return this.getStringAttribute('defaults_channel');
  }

  // defaults_transmit_power_level - computed: true, optional: false, required: false
  public get defaultsTransmitPowerLevel() {
    return this.getNumberAttribute('defaults_transmit_power_level');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // iot_controller_serial - computed: true, optional: false, required: false
  public get iotControllerSerial() {
    return this.getStringAttribute('iot_controller_serial');
  }

  // lock_management_address - computed: true, optional: false, required: false
  public get lockManagementAddress() {
    return this.getStringAttribute('lock_management_address');
  }

  // lock_management_password - computed: true, optional: false, required: false
  public get lockManagementPassword() {
    return this.getStringAttribute('lock_management_password');
  }

  // lock_management_username - computed: true, optional: false, required: false
  public get lockManagementUsername() {
    return this.getStringAttribute('lock_management_username');
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
      network_id: cdktf.stringToTerraform(this._networkId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
