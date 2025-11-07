// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_network_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivateAccessNetworkConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Autonomous System Number (ASN).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_network_configuration#as_number PrivateAccessNetworkConfiguration#as_number}
  */
  readonly asNumber?: string;
  /**
  * BGP Routing Design.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_network_configuration#bgp_design PrivateAccessNetworkConfiguration#bgp_design}
  */
  readonly bgpDesign?: string;
  /**
  * Available/unused subnet that can be used to assign loopback interface IP addresses used for BGP router IDs parameter on the FortiSASE security PoPs. /28 is the minimum subnet size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_network_configuration#bgp_router_ids_subnet PrivateAccessNetworkConfiguration#bgp_router_ids_subnet}
  */
  readonly bgpRouterIdsSubnet?: string;
  /**
  * BGP Recursive Routing. Enabling this setting allows for interhub connectivity. When use BGP design on-loopback this has to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_network_configuration#recursive_next_hop PrivateAccessNetworkConfiguration#recursive_next_hop}
  */
  readonly recursiveNextHop?: boolean | cdktf.IResolvable;
  /**
  * Health Check IP. Must be provided when enable sdwan rule which used to obtain Jitter, latency and packet loss measurements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_network_configuration#sdwan_health_check_vm PrivateAccessNetworkConfiguration#sdwan_health_check_vm}
  */
  readonly sdwanHealthCheckVm?: string;
  /**
  * Hub Selection Method. Enabling this setting the highest priority service connection that meets minimum SLA requirements is selected. Otherwise BGP MED (Multi-Exit Discriminator) will be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_network_configuration#sdwan_rule_enable PrivateAccessNetworkConfiguration#sdwan_rule_enable}
  */
  readonly sdwanRuleEnable?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_network_configuration fortisase_private_access_network_configuration}
*/
export class PrivateAccessNetworkConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_private_access_network_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrivateAccessNetworkConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrivateAccessNetworkConfiguration to import
  * @param importFromId The id of the existing PrivateAccessNetworkConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_network_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrivateAccessNetworkConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_private_access_network_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_network_configuration fortisase_private_access_network_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivateAccessNetworkConfigurationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PrivateAccessNetworkConfigurationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortisase_private_access_network_configuration',
      terraformGeneratorMetadata: {
        providerName: 'fortisase',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asNumber = config.asNumber;
    this._bgpDesign = config.bgpDesign;
    this._bgpRouterIdsSubnet = config.bgpRouterIdsSubnet;
    this._recursiveNextHop = config.recursiveNextHop;
    this._sdwanHealthCheckVm = config.sdwanHealthCheckVm;
    this._sdwanRuleEnable = config.sdwanRuleEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // as_number - computed: true, optional: true, required: false
  private _asNumber?: string; 
  public get asNumber() {
    return this.getStringAttribute('as_number');
  }
  public set asNumber(value: string) {
    this._asNumber = value;
  }
  public resetAsNumber() {
    this._asNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumberInput() {
    return this._asNumber;
  }

  // bgp_design - computed: true, optional: true, required: false
  private _bgpDesign?: string; 
  public get bgpDesign() {
    return this.getStringAttribute('bgp_design');
  }
  public set bgpDesign(value: string) {
    this._bgpDesign = value;
  }
  public resetBgpDesign() {
    this._bgpDesign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpDesignInput() {
    return this._bgpDesign;
  }

  // bgp_router_ids_subnet - computed: true, optional: true, required: false
  private _bgpRouterIdsSubnet?: string; 
  public get bgpRouterIdsSubnet() {
    return this.getStringAttribute('bgp_router_ids_subnet');
  }
  public set bgpRouterIdsSubnet(value: string) {
    this._bgpRouterIdsSubnet = value;
  }
  public resetBgpRouterIdsSubnet() {
    this._bgpRouterIdsSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpRouterIdsSubnetInput() {
    return this._bgpRouterIdsSubnet;
  }

  // config_state - computed: true, optional: false, required: false
  public get configState() {
    return this.getStringAttribute('config_state');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // recursive_next_hop - computed: true, optional: true, required: false
  private _recursiveNextHop?: boolean | cdktf.IResolvable; 
  public get recursiveNextHop() {
    return this.getBooleanAttribute('recursive_next_hop');
  }
  public set recursiveNextHop(value: boolean | cdktf.IResolvable) {
    this._recursiveNextHop = value;
  }
  public resetRecursiveNextHop() {
    this._recursiveNextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveNextHopInput() {
    return this._recursiveNextHop;
  }

  // sdwan_health_check_vm - computed: true, optional: true, required: false
  private _sdwanHealthCheckVm?: string; 
  public get sdwanHealthCheckVm() {
    return this.getStringAttribute('sdwan_health_check_vm');
  }
  public set sdwanHealthCheckVm(value: string) {
    this._sdwanHealthCheckVm = value;
  }
  public resetSdwanHealthCheckVm() {
    this._sdwanHealthCheckVm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanHealthCheckVmInput() {
    return this._sdwanHealthCheckVm;
  }

  // sdwan_rule_enable - computed: true, optional: true, required: false
  private _sdwanRuleEnable?: boolean | cdktf.IResolvable; 
  public get sdwanRuleEnable() {
    return this.getBooleanAttribute('sdwan_rule_enable');
  }
  public set sdwanRuleEnable(value: boolean | cdktf.IResolvable) {
    this._sdwanRuleEnable = value;
  }
  public resetSdwanRuleEnable() {
    this._sdwanRuleEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanRuleEnableInput() {
    return this._sdwanRuleEnable;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      as_number: cdktf.stringToTerraform(this._asNumber),
      bgp_design: cdktf.stringToTerraform(this._bgpDesign),
      bgp_router_ids_subnet: cdktf.stringToTerraform(this._bgpRouterIdsSubnet),
      recursive_next_hop: cdktf.booleanToTerraform(this._recursiveNextHop),
      sdwan_health_check_vm: cdktf.stringToTerraform(this._sdwanHealthCheckVm),
      sdwan_rule_enable: cdktf.booleanToTerraform(this._sdwanRuleEnable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      as_number: {
        value: cdktf.stringToHclTerraform(this._asNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_design: {
        value: cdktf.stringToHclTerraform(this._bgpDesign),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_router_ids_subnet: {
        value: cdktf.stringToHclTerraform(this._bgpRouterIdsSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recursive_next_hop: {
        value: cdktf.booleanToHclTerraform(this._recursiveNextHop),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sdwan_health_check_vm: {
        value: cdktf.stringToHclTerraform(this._sdwanHealthCheckVm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdwan_rule_enable: {
        value: cdktf.booleanToHclTerraform(this._sdwanRuleEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
