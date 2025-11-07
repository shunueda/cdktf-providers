// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/network_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiNetworkSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/network_settings#network_id DataMerakiNetworkSettings#network_id}
  */
  readonly networkId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/network_settings meraki_network_settings}
*/
export class DataMerakiNetworkSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_network_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiNetworkSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiNetworkSettings to import
  * @param importFromId The id of the existing DataMerakiNetworkSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/network_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiNetworkSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_network_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/network_settings meraki_network_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiNetworkSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiNetworkSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_network_settings',
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // local_status_page_authentication_enabled - computed: true, optional: false, required: false
  public get localStatusPageAuthenticationEnabled() {
    return this.getBooleanAttribute('local_status_page_authentication_enabled');
  }

  // local_status_page_authentication_password - computed: true, optional: false, required: false
  public get localStatusPageAuthenticationPassword() {
    return this.getStringAttribute('local_status_page_authentication_password');
  }

  // local_status_page_authentication_username - computed: true, optional: false, required: false
  public get localStatusPageAuthenticationUsername() {
    return this.getStringAttribute('local_status_page_authentication_username');
  }

  // local_status_page_enabled - computed: true, optional: false, required: false
  public get localStatusPageEnabled() {
    return this.getBooleanAttribute('local_status_page_enabled');
  }

  // named_vlans_enabled - computed: true, optional: false, required: false
  public get namedVlansEnabled() {
    return this.getBooleanAttribute('named_vlans_enabled');
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

  // remote_status_page_enabled - computed: true, optional: false, required: false
  public get remoteStatusPageEnabled() {
    return this.getBooleanAttribute('remote_status_page_enabled');
  }

  // secure_port_enabled - computed: true, optional: false, required: false
  public get securePortEnabled() {
    return this.getBooleanAttribute('secure_port_enabled');
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
