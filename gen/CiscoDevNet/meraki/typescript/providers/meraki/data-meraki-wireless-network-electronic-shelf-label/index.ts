// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_network_electronic_shelf_label
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiWirelessNetworkElectronicShelfLabelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_network_electronic_shelf_label#network_id DataMerakiWirelessNetworkElectronicShelfLabel#network_id}
  */
  readonly networkId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_network_electronic_shelf_label meraki_wireless_network_electronic_shelf_label}
*/
export class DataMerakiWirelessNetworkElectronicShelfLabel extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_wireless_network_electronic_shelf_label";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiWirelessNetworkElectronicShelfLabel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiWirelessNetworkElectronicShelfLabel to import
  * @param importFromId The id of the existing DataMerakiWirelessNetworkElectronicShelfLabel that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_network_electronic_shelf_label#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiWirelessNetworkElectronicShelfLabel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_wireless_network_electronic_shelf_label", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_network_electronic_shelf_label meraki_wireless_network_electronic_shelf_label} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiWirelessNetworkElectronicShelfLabelConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiWirelessNetworkElectronicShelfLabelConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_wireless_network_electronic_shelf_label',
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
    this._networkId = config.networkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
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
