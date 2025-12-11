// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/cellular_gateway_uplink
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CellularGatewayUplinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * The maximum download limit (integer, in Kbps). null indicates no limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/cellular_gateway_uplink#bandwidth_limits_limit_down CellularGatewayUplink#bandwidth_limits_limit_down}
  */
  readonly bandwidthLimitsLimitDown?: number;
  /**
  * The maximum upload limit (integer, in Kbps). null indicates no limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/cellular_gateway_uplink#bandwidth_limits_limit_up CellularGatewayUplink#bandwidth_limits_limit_up}
  */
  readonly bandwidthLimitsLimitUp?: number;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/cellular_gateway_uplink#network_id CellularGatewayUplink#network_id}
  */
  readonly networkId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/cellular_gateway_uplink meraki_cellular_gateway_uplink}
*/
export class CellularGatewayUplink extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_cellular_gateway_uplink";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CellularGatewayUplink resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CellularGatewayUplink to import
  * @param importFromId The id of the existing CellularGatewayUplink that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/cellular_gateway_uplink#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CellularGatewayUplink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_cellular_gateway_uplink", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/cellular_gateway_uplink meraki_cellular_gateway_uplink} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CellularGatewayUplinkConfig
  */
  public constructor(scope: Construct, id: string, config: CellularGatewayUplinkConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_cellular_gateway_uplink',
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
    this._bandwidthLimitsLimitDown = config.bandwidthLimitsLimitDown;
    this._bandwidthLimitsLimitUp = config.bandwidthLimitsLimitUp;
    this._networkId = config.networkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth_limits_limit_down - computed: false, optional: true, required: false
  private _bandwidthLimitsLimitDown?: number; 
  public get bandwidthLimitsLimitDown() {
    return this.getNumberAttribute('bandwidth_limits_limit_down');
  }
  public set bandwidthLimitsLimitDown(value: number) {
    this._bandwidthLimitsLimitDown = value;
  }
  public resetBandwidthLimitsLimitDown() {
    this._bandwidthLimitsLimitDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthLimitsLimitDownInput() {
    return this._bandwidthLimitsLimitDown;
  }

  // bandwidth_limits_limit_up - computed: false, optional: true, required: false
  private _bandwidthLimitsLimitUp?: number; 
  public get bandwidthLimitsLimitUp() {
    return this.getNumberAttribute('bandwidth_limits_limit_up');
  }
  public set bandwidthLimitsLimitUp(value: number) {
    this._bandwidthLimitsLimitUp = value;
  }
  public resetBandwidthLimitsLimitUp() {
    this._bandwidthLimitsLimitUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthLimitsLimitUpInput() {
    return this._bandwidthLimitsLimitUp;
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
      bandwidth_limits_limit_down: cdktf.numberToTerraform(this._bandwidthLimitsLimitDown),
      bandwidth_limits_limit_up: cdktf.numberToTerraform(this._bandwidthLimitsLimitUp),
      network_id: cdktf.stringToTerraform(this._networkId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bandwidth_limits_limit_down: {
        value: cdktf.numberToHclTerraform(this._bandwidthLimitsLimitDown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bandwidth_limits_limit_up: {
        value: cdktf.numberToHclTerraform(this._bandwidthLimitsLimitUp),
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
