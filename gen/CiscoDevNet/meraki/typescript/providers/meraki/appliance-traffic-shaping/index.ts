// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_traffic_shaping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplianceTrafficShapingConfig extends cdktf.TerraformMetaArguments {
  /**
  * The download bandwidth limit in Kbps. (0 represents no limit.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_traffic_shaping#global_bandwidth_limit_down ApplianceTrafficShaping#global_bandwidth_limit_down}
  */
  readonly globalBandwidthLimitDown: number;
  /**
  * The upload bandwidth limit in Kbps. (0 represents no limit.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_traffic_shaping#global_bandwidth_limit_up ApplianceTrafficShaping#global_bandwidth_limit_up}
  */
  readonly globalBandwidthLimitUp: number;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_traffic_shaping#network_id ApplianceTrafficShaping#network_id}
  */
  readonly networkId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_traffic_shaping meraki_appliance_traffic_shaping}
*/
export class ApplianceTrafficShaping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_traffic_shaping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplianceTrafficShaping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplianceTrafficShaping to import
  * @param importFromId The id of the existing ApplianceTrafficShaping that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_traffic_shaping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplianceTrafficShaping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_traffic_shaping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_traffic_shaping meraki_appliance_traffic_shaping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplianceTrafficShapingConfig
  */
  public constructor(scope: Construct, id: string, config: ApplianceTrafficShapingConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_traffic_shaping',
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
    this._globalBandwidthLimitDown = config.globalBandwidthLimitDown;
    this._globalBandwidthLimitUp = config.globalBandwidthLimitUp;
    this._networkId = config.networkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // global_bandwidth_limit_down - computed: false, optional: false, required: true
  private _globalBandwidthLimitDown?: number; 
  public get globalBandwidthLimitDown() {
    return this.getNumberAttribute('global_bandwidth_limit_down');
  }
  public set globalBandwidthLimitDown(value: number) {
    this._globalBandwidthLimitDown = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalBandwidthLimitDownInput() {
    return this._globalBandwidthLimitDown;
  }

  // global_bandwidth_limit_up - computed: false, optional: false, required: true
  private _globalBandwidthLimitUp?: number; 
  public get globalBandwidthLimitUp() {
    return this.getNumberAttribute('global_bandwidth_limit_up');
  }
  public set globalBandwidthLimitUp(value: number) {
    this._globalBandwidthLimitUp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalBandwidthLimitUpInput() {
    return this._globalBandwidthLimitUp;
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
      global_bandwidth_limit_down: cdktf.numberToTerraform(this._globalBandwidthLimitDown),
      global_bandwidth_limit_up: cdktf.numberToTerraform(this._globalBandwidthLimitUp),
      network_id: cdktf.stringToTerraform(this._networkId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      global_bandwidth_limit_down: {
        value: cdktf.numberToHclTerraform(this._globalBandwidthLimitDown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      global_bandwidth_limit_up: {
        value: cdktf.numberToHclTerraform(this._globalBandwidthLimitUp),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
