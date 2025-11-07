// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/network_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Delay in seconds for IP rebalance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/network_settings#sc_rebalance_delay NetworkSettings#sc_rebalance_delay}
  */
  readonly scRebalanceDelay?: number;
  /**
  * Enable or disable Source Based Routing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/network_settings#source_based_routing_enabled NetworkSettings#source_based_routing_enabled}
  */
  readonly sourceBasedRoutingEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of client TCP ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/network_settings#tcp_ports NetworkSettings#tcp_ports}
  */
  readonly tcpPorts?: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/network_settings powerscale_network_settings}
*/
export class NetworkSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_network_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkSettings to import
  * @param importFromId The id of the existing NetworkSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/network_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_network_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/network_settings powerscale_network_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NetworkSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerscale_network_settings',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._scRebalanceDelay = config.scRebalanceDelay;
    this._sourceBasedRoutingEnabled = config.sourceBasedRoutingEnabled;
    this._tcpPorts = config.tcpPorts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_groupnet - computed: true, optional: false, required: false
  public get defaultGroupnet() {
    return this.getStringAttribute('default_groupnet');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // sc_rebalance_delay - computed: true, optional: true, required: false
  private _scRebalanceDelay?: number; 
  public get scRebalanceDelay() {
    return this.getNumberAttribute('sc_rebalance_delay');
  }
  public set scRebalanceDelay(value: number) {
    this._scRebalanceDelay = value;
  }
  public resetScRebalanceDelay() {
    this._scRebalanceDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scRebalanceDelayInput() {
    return this._scRebalanceDelay;
  }

  // source_based_routing_enabled - computed: true, optional: true, required: false
  private _sourceBasedRoutingEnabled?: boolean | cdktf.IResolvable; 
  public get sourceBasedRoutingEnabled() {
    return this.getBooleanAttribute('source_based_routing_enabled');
  }
  public set sourceBasedRoutingEnabled(value: boolean | cdktf.IResolvable) {
    this._sourceBasedRoutingEnabled = value;
  }
  public resetSourceBasedRoutingEnabled() {
    this._sourceBasedRoutingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceBasedRoutingEnabledInput() {
    return this._sourceBasedRoutingEnabled;
  }

  // tcp_ports - computed: true, optional: true, required: false
  private _tcpPorts?: number[]; 
  public get tcpPorts() {
    return this.getNumberListAttribute('tcp_ports');
  }
  public set tcpPorts(value: number[]) {
    this._tcpPorts = value;
  }
  public resetTcpPorts() {
    this._tcpPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortsInput() {
    return this._tcpPorts;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      sc_rebalance_delay: cdktf.numberToTerraform(this._scRebalanceDelay),
      source_based_routing_enabled: cdktf.booleanToTerraform(this._sourceBasedRoutingEnabled),
      tcp_ports: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tcpPorts),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      sc_rebalance_delay: {
        value: cdktf.numberToHclTerraform(this._scRebalanceDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_based_routing_enabled: {
        value: cdktf.booleanToHclTerraform(this._sourceBasedRoutingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tcp_ports: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._tcpPorts),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
