// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/switch_storm_control
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiSwitchStormControlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/switch_storm_control#network_id DataMerakiSwitchStormControl#network_id}
  */
  readonly networkId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/switch_storm_control meraki_switch_storm_control}
*/
export class DataMerakiSwitchStormControl extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_switch_storm_control";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiSwitchStormControl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiSwitchStormControl to import
  * @param importFromId The id of the existing DataMerakiSwitchStormControl that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/switch_storm_control#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiSwitchStormControl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_switch_storm_control", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/switch_storm_control meraki_switch_storm_control} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiSwitchStormControlConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiSwitchStormControlConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_switch_storm_control',
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
    this._networkId = config.networkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // broadcast_threshold - computed: true, optional: false, required: false
  public get broadcastThreshold() {
    return this.getNumberAttribute('broadcast_threshold');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // multicast_threshold - computed: true, optional: false, required: false
  public get multicastThreshold() {
    return this.getNumberAttribute('multicast_threshold');
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

  // treat_these_traffic_types_as_one_threshold - computed: true, optional: false, required: false
  public get treatTheseTrafficTypesAsOneThreshold() {
    return this.getListAttribute('treat_these_traffic_types_as_one_threshold');
  }

  // unknown_unicast_threshold - computed: true, optional: false, required: false
  public get unknownUnicastThreshold() {
    return this.getNumberAttribute('unknown_unicast_threshold');
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
