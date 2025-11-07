// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_traffic_shaping_custom_performance_class
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplianceTrafficShapingCustomPerformanceClassConfig extends cdktf.TerraformMetaArguments {
  /**
  * Maximum jitter in milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_traffic_shaping_custom_performance_class#max_jitter ApplianceTrafficShapingCustomPerformanceClass#max_jitter}
  */
  readonly maxJitter?: number;
  /**
  * Maximum latency in milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_traffic_shaping_custom_performance_class#max_latency ApplianceTrafficShapingCustomPerformanceClass#max_latency}
  */
  readonly maxLatency?: number;
  /**
  * Maximum percentage of packet loss
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_traffic_shaping_custom_performance_class#max_loss_percentage ApplianceTrafficShapingCustomPerformanceClass#max_loss_percentage}
  */
  readonly maxLossPercentage?: number;
  /**
  * Name of the custom performance class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_traffic_shaping_custom_performance_class#name ApplianceTrafficShapingCustomPerformanceClass#name}
  */
  readonly name: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_traffic_shaping_custom_performance_class#network_id ApplianceTrafficShapingCustomPerformanceClass#network_id}
  */
  readonly networkId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_traffic_shaping_custom_performance_class meraki_appliance_traffic_shaping_custom_performance_class}
*/
export class ApplianceTrafficShapingCustomPerformanceClass extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_traffic_shaping_custom_performance_class";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplianceTrafficShapingCustomPerformanceClass resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplianceTrafficShapingCustomPerformanceClass to import
  * @param importFromId The id of the existing ApplianceTrafficShapingCustomPerformanceClass that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_traffic_shaping_custom_performance_class#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplianceTrafficShapingCustomPerformanceClass to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_traffic_shaping_custom_performance_class", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_traffic_shaping_custom_performance_class meraki_appliance_traffic_shaping_custom_performance_class} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplianceTrafficShapingCustomPerformanceClassConfig
  */
  public constructor(scope: Construct, id: string, config: ApplianceTrafficShapingCustomPerformanceClassConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_traffic_shaping_custom_performance_class',
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
    this._maxJitter = config.maxJitter;
    this._maxLatency = config.maxLatency;
    this._maxLossPercentage = config.maxLossPercentage;
    this._name = config.name;
    this._networkId = config.networkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_jitter - computed: false, optional: true, required: false
  private _maxJitter?: number; 
  public get maxJitter() {
    return this.getNumberAttribute('max_jitter');
  }
  public set maxJitter(value: number) {
    this._maxJitter = value;
  }
  public resetMaxJitter() {
    this._maxJitter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxJitterInput() {
    return this._maxJitter;
  }

  // max_latency - computed: false, optional: true, required: false
  private _maxLatency?: number; 
  public get maxLatency() {
    return this.getNumberAttribute('max_latency');
  }
  public set maxLatency(value: number) {
    this._maxLatency = value;
  }
  public resetMaxLatency() {
    this._maxLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLatencyInput() {
    return this._maxLatency;
  }

  // max_loss_percentage - computed: false, optional: true, required: false
  private _maxLossPercentage?: number; 
  public get maxLossPercentage() {
    return this.getNumberAttribute('max_loss_percentage');
  }
  public set maxLossPercentage(value: number) {
    this._maxLossPercentage = value;
  }
  public resetMaxLossPercentage() {
    this._maxLossPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLossPercentageInput() {
    return this._maxLossPercentage;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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
      max_jitter: cdktf.numberToTerraform(this._maxJitter),
      max_latency: cdktf.numberToTerraform(this._maxLatency),
      max_loss_percentage: cdktf.numberToTerraform(this._maxLossPercentage),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      max_jitter: {
        value: cdktf.numberToHclTerraform(this._maxJitter),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_latency: {
        value: cdktf.numberToHclTerraform(this._maxLatency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_loss_percentage: {
        value: cdktf.numberToHclTerraform(this._maxLossPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
