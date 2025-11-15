// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_bandwidth
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplianceTrafficShapingUplinkBandwidthConfig extends cdktf.TerraformMetaArguments {
  /**
  * The maximum download limit (integer, in Kbps). null indicates no limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_bandwidth#cellular_limit_down ApplianceTrafficShapingUplinkBandwidth#cellular_limit_down}
  */
  readonly cellularLimitDown?: number;
  /**
  * The maximum upload limit (integer, in Kbps). null indicates no limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_bandwidth#cellular_limit_up ApplianceTrafficShapingUplinkBandwidth#cellular_limit_up}
  */
  readonly cellularLimitUp?: number;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_bandwidth#network_id ApplianceTrafficShapingUplinkBandwidth#network_id}
  */
  readonly networkId: string;
  /**
  * The maximum download limit (integer, in Kbps). null indicates no limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_bandwidth#wan1_limit_down ApplianceTrafficShapingUplinkBandwidth#wan1_limit_down}
  */
  readonly wan1LimitDown?: number;
  /**
  * The maximum upload limit (integer, in Kbps). null indicates no limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_bandwidth#wan1_limit_up ApplianceTrafficShapingUplinkBandwidth#wan1_limit_up}
  */
  readonly wan1LimitUp?: number;
  /**
  * The maximum download limit (integer, in Kbps). null indicates no limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_bandwidth#wan2_limit_down ApplianceTrafficShapingUplinkBandwidth#wan2_limit_down}
  */
  readonly wan2LimitDown?: number;
  /**
  * The maximum upload limit (integer, in Kbps). null indicates no limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_bandwidth#wan2_limit_up ApplianceTrafficShapingUplinkBandwidth#wan2_limit_up}
  */
  readonly wan2LimitUp?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_bandwidth meraki_appliance_traffic_shaping_uplink_bandwidth}
*/
export class ApplianceTrafficShapingUplinkBandwidth extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_traffic_shaping_uplink_bandwidth";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplianceTrafficShapingUplinkBandwidth resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplianceTrafficShapingUplinkBandwidth to import
  * @param importFromId The id of the existing ApplianceTrafficShapingUplinkBandwidth that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_bandwidth#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplianceTrafficShapingUplinkBandwidth to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_traffic_shaping_uplink_bandwidth", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_bandwidth meraki_appliance_traffic_shaping_uplink_bandwidth} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplianceTrafficShapingUplinkBandwidthConfig
  */
  public constructor(scope: Construct, id: string, config: ApplianceTrafficShapingUplinkBandwidthConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_traffic_shaping_uplink_bandwidth',
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
    this._cellularLimitDown = config.cellularLimitDown;
    this._cellularLimitUp = config.cellularLimitUp;
    this._networkId = config.networkId;
    this._wan1LimitDown = config.wan1LimitDown;
    this._wan1LimitUp = config.wan1LimitUp;
    this._wan2LimitDown = config.wan2LimitDown;
    this._wan2LimitUp = config.wan2LimitUp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cellular_limit_down - computed: false, optional: true, required: false
  private _cellularLimitDown?: number; 
  public get cellularLimitDown() {
    return this.getNumberAttribute('cellular_limit_down');
  }
  public set cellularLimitDown(value: number) {
    this._cellularLimitDown = value;
  }
  public resetCellularLimitDown() {
    this._cellularLimitDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cellularLimitDownInput() {
    return this._cellularLimitDown;
  }

  // cellular_limit_up - computed: false, optional: true, required: false
  private _cellularLimitUp?: number; 
  public get cellularLimitUp() {
    return this.getNumberAttribute('cellular_limit_up');
  }
  public set cellularLimitUp(value: number) {
    this._cellularLimitUp = value;
  }
  public resetCellularLimitUp() {
    this._cellularLimitUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cellularLimitUpInput() {
    return this._cellularLimitUp;
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

  // wan1_limit_down - computed: false, optional: true, required: false
  private _wan1LimitDown?: number; 
  public get wan1LimitDown() {
    return this.getNumberAttribute('wan1_limit_down');
  }
  public set wan1LimitDown(value: number) {
    this._wan1LimitDown = value;
  }
  public resetWan1LimitDown() {
    this._wan1LimitDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wan1LimitDownInput() {
    return this._wan1LimitDown;
  }

  // wan1_limit_up - computed: false, optional: true, required: false
  private _wan1LimitUp?: number; 
  public get wan1LimitUp() {
    return this.getNumberAttribute('wan1_limit_up');
  }
  public set wan1LimitUp(value: number) {
    this._wan1LimitUp = value;
  }
  public resetWan1LimitUp() {
    this._wan1LimitUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wan1LimitUpInput() {
    return this._wan1LimitUp;
  }

  // wan2_limit_down - computed: false, optional: true, required: false
  private _wan2LimitDown?: number; 
  public get wan2LimitDown() {
    return this.getNumberAttribute('wan2_limit_down');
  }
  public set wan2LimitDown(value: number) {
    this._wan2LimitDown = value;
  }
  public resetWan2LimitDown() {
    this._wan2LimitDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wan2LimitDownInput() {
    return this._wan2LimitDown;
  }

  // wan2_limit_up - computed: false, optional: true, required: false
  private _wan2LimitUp?: number; 
  public get wan2LimitUp() {
    return this.getNumberAttribute('wan2_limit_up');
  }
  public set wan2LimitUp(value: number) {
    this._wan2LimitUp = value;
  }
  public resetWan2LimitUp() {
    this._wan2LimitUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wan2LimitUpInput() {
    return this._wan2LimitUp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cellular_limit_down: cdktf.numberToTerraform(this._cellularLimitDown),
      cellular_limit_up: cdktf.numberToTerraform(this._cellularLimitUp),
      network_id: cdktf.stringToTerraform(this._networkId),
      wan1_limit_down: cdktf.numberToTerraform(this._wan1LimitDown),
      wan1_limit_up: cdktf.numberToTerraform(this._wan1LimitUp),
      wan2_limit_down: cdktf.numberToTerraform(this._wan2LimitDown),
      wan2_limit_up: cdktf.numberToTerraform(this._wan2LimitUp),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cellular_limit_down: {
        value: cdktf.numberToHclTerraform(this._cellularLimitDown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cellular_limit_up: {
        value: cdktf.numberToHclTerraform(this._cellularLimitUp),
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
      wan1_limit_down: {
        value: cdktf.numberToHclTerraform(this._wan1LimitDown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wan1_limit_up: {
        value: cdktf.numberToHclTerraform(this._wan1LimitUp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wan2_limit_down: {
        value: cdktf.numberToHclTerraform(this._wan2LimitDown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wan2_limit_up: {
        value: cdktf.numberToHclTerraform(this._wan2LimitUp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
