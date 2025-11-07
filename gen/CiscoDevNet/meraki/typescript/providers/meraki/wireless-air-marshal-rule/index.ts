// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_air_marshal_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelessAirMarshalRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The string used to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_air_marshal_rule#match_string WirelessAirMarshalRule#match_string}
  */
  readonly matchString?: string;
  /**
  * The type of match.
  *   - Choices: `bssid`, `contains`, `exact`, `wildcard`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_air_marshal_rule#match_type WirelessAirMarshalRule#match_type}
  */
  readonly matchType?: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_air_marshal_rule#network_id WirelessAirMarshalRule#network_id}
  */
  readonly networkId: string;
  /**
  * Indicates if this rule will allow, block, or alert.
  *   - Choices: `alert`, `allow`, `block`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_air_marshal_rule#type WirelessAirMarshalRule#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_air_marshal_rule meraki_wireless_air_marshal_rule}
*/
export class WirelessAirMarshalRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_wireless_air_marshal_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelessAirMarshalRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelessAirMarshalRule to import
  * @param importFromId The id of the existing WirelessAirMarshalRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_air_marshal_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelessAirMarshalRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_wireless_air_marshal_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_air_marshal_rule meraki_wireless_air_marshal_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelessAirMarshalRuleConfig
  */
  public constructor(scope: Construct, id: string, config: WirelessAirMarshalRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_wireless_air_marshal_rule',
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
    this._matchString = config.matchString;
    this._matchType = config.matchType;
    this._networkId = config.networkId;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // match_string - computed: false, optional: true, required: false
  private _matchString?: string; 
  public get matchString() {
    return this.getStringAttribute('match_string');
  }
  public set matchString(value: string) {
    this._matchString = value;
  }
  public resetMatchString() {
    this._matchString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchStringInput() {
    return this._matchString;
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
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
      match_string: cdktf.stringToTerraform(this._matchString),
      match_type: cdktf.stringToTerraform(this._matchType),
      network_id: cdktf.stringToTerraform(this._networkId),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      match_string: {
        value: cdktf.stringToHclTerraform(this._matchString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_type: {
        value: cdktf.stringToHclTerraform(this._matchType),
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
