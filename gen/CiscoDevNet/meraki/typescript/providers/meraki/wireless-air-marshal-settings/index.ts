// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/wireless_air_marshal_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelessAirMarshalSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allows clients to access rogue networks. Blocked by default.
  *   - Choices: `allow`, `block`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/wireless_air_marshal_settings#default_policy WirelessAirMarshalSettings#default_policy}
  */
  readonly defaultPolicy: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/wireless_air_marshal_settings#network_id WirelessAirMarshalSettings#network_id}
  */
  readonly networkId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/wireless_air_marshal_settings meraki_wireless_air_marshal_settings}
*/
export class WirelessAirMarshalSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_wireless_air_marshal_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelessAirMarshalSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelessAirMarshalSettings to import
  * @param importFromId The id of the existing WirelessAirMarshalSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/wireless_air_marshal_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelessAirMarshalSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_wireless_air_marshal_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/wireless_air_marshal_settings meraki_wireless_air_marshal_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelessAirMarshalSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: WirelessAirMarshalSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_wireless_air_marshal_settings',
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
    this._defaultPolicy = config.defaultPolicy;
    this._networkId = config.networkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_policy - computed: false, optional: false, required: true
  private _defaultPolicy?: string; 
  public get defaultPolicy() {
    return this.getStringAttribute('default_policy');
  }
  public set defaultPolicy(value: string) {
    this._defaultPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPolicyInput() {
    return this._defaultPolicy;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
      default_policy: cdktf.stringToTerraform(this._defaultPolicy),
      network_id: cdktf.stringToTerraform(this._networkId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_policy: {
        value: cdktf.stringToHclTerraform(this._defaultPolicy),
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
