// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_storm_control
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchStormControlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Percentage (1 to 99) of total available port bandwidth for broadcast traffic type. Default value 100 percent rate is to clear the configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_storm_control#broadcast_threshold SwitchStormControl#broadcast_threshold}
  */
  readonly broadcastThreshold?: number;
  /**
  * Percentage (1 to 99) of total available port bandwidth for multicast traffic type. Default value 100 percent rate is to clear the configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_storm_control#multicast_threshold SwitchStormControl#multicast_threshold}
  */
  readonly multicastThreshold?: number;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_storm_control#network_id SwitchStormControl#network_id}
  */
  readonly networkId: string;
  /**
  * Grouped traffic types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_storm_control#treat_these_traffic_types_as_one_threshold SwitchStormControl#treat_these_traffic_types_as_one_threshold}
  */
  readonly treatTheseTrafficTypesAsOneThreshold?: string[];
  /**
  * Percentage (1 to 99) of total available port bandwidth for unknown unicast (dlf-destination lookup failure) traffic type. Default value 100 percent rate is to clear the configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_storm_control#unknown_unicast_threshold SwitchStormControl#unknown_unicast_threshold}
  */
  readonly unknownUnicastThreshold?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_storm_control meraki_switch_storm_control}
*/
export class SwitchStormControl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_switch_storm_control";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchStormControl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchStormControl to import
  * @param importFromId The id of the existing SwitchStormControl that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_storm_control#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchStormControl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_switch_storm_control", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_storm_control meraki_switch_storm_control} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchStormControlConfig
  */
  public constructor(scope: Construct, id: string, config: SwitchStormControlConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_switch_storm_control',
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
    this._broadcastThreshold = config.broadcastThreshold;
    this._multicastThreshold = config.multicastThreshold;
    this._networkId = config.networkId;
    this._treatTheseTrafficTypesAsOneThreshold = config.treatTheseTrafficTypesAsOneThreshold;
    this._unknownUnicastThreshold = config.unknownUnicastThreshold;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // broadcast_threshold - computed: false, optional: true, required: false
  private _broadcastThreshold?: number; 
  public get broadcastThreshold() {
    return this.getNumberAttribute('broadcast_threshold');
  }
  public set broadcastThreshold(value: number) {
    this._broadcastThreshold = value;
  }
  public resetBroadcastThreshold() {
    this._broadcastThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastThresholdInput() {
    return this._broadcastThreshold;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // multicast_threshold - computed: false, optional: true, required: false
  private _multicastThreshold?: number; 
  public get multicastThreshold() {
    return this.getNumberAttribute('multicast_threshold');
  }
  public set multicastThreshold(value: number) {
    this._multicastThreshold = value;
  }
  public resetMulticastThreshold() {
    this._multicastThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastThresholdInput() {
    return this._multicastThreshold;
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

  // treat_these_traffic_types_as_one_threshold - computed: false, optional: true, required: false
  private _treatTheseTrafficTypesAsOneThreshold?: string[]; 
  public get treatTheseTrafficTypesAsOneThreshold() {
    return this.getListAttribute('treat_these_traffic_types_as_one_threshold');
  }
  public set treatTheseTrafficTypesAsOneThreshold(value: string[]) {
    this._treatTheseTrafficTypesAsOneThreshold = value;
  }
  public resetTreatTheseTrafficTypesAsOneThreshold() {
    this._treatTheseTrafficTypesAsOneThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get treatTheseTrafficTypesAsOneThresholdInput() {
    return this._treatTheseTrafficTypesAsOneThreshold;
  }

  // unknown_unicast_threshold - computed: false, optional: true, required: false
  private _unknownUnicastThreshold?: number; 
  public get unknownUnicastThreshold() {
    return this.getNumberAttribute('unknown_unicast_threshold');
  }
  public set unknownUnicastThreshold(value: number) {
    this._unknownUnicastThreshold = value;
  }
  public resetUnknownUnicastThreshold() {
    this._unknownUnicastThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownUnicastThresholdInput() {
    return this._unknownUnicastThreshold;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      broadcast_threshold: cdktf.numberToTerraform(this._broadcastThreshold),
      multicast_threshold: cdktf.numberToTerraform(this._multicastThreshold),
      network_id: cdktf.stringToTerraform(this._networkId),
      treat_these_traffic_types_as_one_threshold: cdktf.listMapper(cdktf.stringToTerraform, false)(this._treatTheseTrafficTypesAsOneThreshold),
      unknown_unicast_threshold: cdktf.numberToTerraform(this._unknownUnicastThreshold),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      broadcast_threshold: {
        value: cdktf.numberToHclTerraform(this._broadcastThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multicast_threshold: {
        value: cdktf.numberToHclTerraform(this._multicastThreshold),
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
      treat_these_traffic_types_as_one_threshold: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._treatTheseTrafficTypesAsOneThreshold),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      unknown_unicast_threshold: {
        value: cdktf.numberToHclTerraform(this._unknownUnicastThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
