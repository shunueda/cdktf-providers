// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/appliance_traffic_shaping_uplink_bandwidth
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiApplianceTrafficShapingUplinkBandwidthConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/appliance_traffic_shaping_uplink_bandwidth#network_id DataMerakiApplianceTrafficShapingUplinkBandwidth#network_id}
  */
  readonly networkId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/appliance_traffic_shaping_uplink_bandwidth meraki_appliance_traffic_shaping_uplink_bandwidth}
*/
export class DataMerakiApplianceTrafficShapingUplinkBandwidth extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_traffic_shaping_uplink_bandwidth";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiApplianceTrafficShapingUplinkBandwidth resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiApplianceTrafficShapingUplinkBandwidth to import
  * @param importFromId The id of the existing DataMerakiApplianceTrafficShapingUplinkBandwidth that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/appliance_traffic_shaping_uplink_bandwidth#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiApplianceTrafficShapingUplinkBandwidth to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_traffic_shaping_uplink_bandwidth", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/appliance_traffic_shaping_uplink_bandwidth meraki_appliance_traffic_shaping_uplink_bandwidth} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiApplianceTrafficShapingUplinkBandwidthConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiApplianceTrafficShapingUplinkBandwidthConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_traffic_shaping_uplink_bandwidth',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1',
        providerVersionConstraint: '1.7.1'
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

  // cellular_limit_down - computed: true, optional: false, required: false
  public get cellularLimitDown() {
    return this.getNumberAttribute('cellular_limit_down');
  }

  // cellular_limit_up - computed: true, optional: false, required: false
  public get cellularLimitUp() {
    return this.getNumberAttribute('cellular_limit_up');
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

  // wan1_limit_down - computed: true, optional: false, required: false
  public get wan1LimitDown() {
    return this.getNumberAttribute('wan1_limit_down');
  }

  // wan1_limit_up - computed: true, optional: false, required: false
  public get wan1LimitUp() {
    return this.getNumberAttribute('wan1_limit_up');
  }

  // wan2_limit_down - computed: true, optional: false, required: false
  public get wan2LimitDown() {
    return this.getNumberAttribute('wan2_limit_down');
  }

  // wan2_limit_up - computed: true, optional: false, required: false
  public get wan2LimitUp() {
    return this.getNumberAttribute('wan2_limit_up');
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
