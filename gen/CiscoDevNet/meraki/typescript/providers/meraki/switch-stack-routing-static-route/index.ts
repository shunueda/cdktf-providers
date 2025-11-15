// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_stack_routing_static_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchStackRoutingStaticRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Option to advertise static route via OSPF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_stack_routing_static_route#advertise_via_ospf_enabled SwitchStackRoutingStaticRoute#advertise_via_ospf_enabled}
  */
  readonly advertiseViaOspfEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name or description for layer 3 static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_stack_routing_static_route#name SwitchStackRoutingStaticRoute#name}
  */
  readonly name?: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_stack_routing_static_route#network_id SwitchStackRoutingStaticRoute#network_id}
  */
  readonly networkId: string;
  /**
  * IP address of the next hop device to which the device sends its traffic for the subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_stack_routing_static_route#next_hop_ip SwitchStackRoutingStaticRoute#next_hop_ip}
  */
  readonly nextHopIp: string;
  /**
  * Option to prefer static route over OSPF routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_stack_routing_static_route#prefer_over_ospf_routes_enabled SwitchStackRoutingStaticRoute#prefer_over_ospf_routes_enabled}
  */
  readonly preferOverOspfRoutesEnabled?: boolean | cdktf.IResolvable;
  /**
  * The subnet which is routed via this static route and should be specified in CIDR notation (ex. 1.2.3.0/24)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_stack_routing_static_route#subnet SwitchStackRoutingStaticRoute#subnet}
  */
  readonly subnet: string;
  /**
  * Switch stack ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_stack_routing_static_route#switch_stack_id SwitchStackRoutingStaticRoute#switch_stack_id}
  */
  readonly switchStackId: string;
  /**
  * Whether or not next-hop IP is reachable via default VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_stack_routing_static_route#vrf_leak_route_to_default_vrf SwitchStackRoutingStaticRoute#vrf_leak_route_to_default_vrf}
  */
  readonly vrfLeakRouteToDefaultVrf?: boolean | cdktf.IResolvable;
  /**
  * The name of the VRF this static route belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_stack_routing_static_route#vrf_name SwitchStackRoutingStaticRoute#vrf_name}
  */
  readonly vrfName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_stack_routing_static_route meraki_switch_stack_routing_static_route}
*/
export class SwitchStackRoutingStaticRoute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_switch_stack_routing_static_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchStackRoutingStaticRoute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchStackRoutingStaticRoute to import
  * @param importFromId The id of the existing SwitchStackRoutingStaticRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_stack_routing_static_route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchStackRoutingStaticRoute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_switch_stack_routing_static_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_stack_routing_static_route meraki_switch_stack_routing_static_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchStackRoutingStaticRouteConfig
  */
  public constructor(scope: Construct, id: string, config: SwitchStackRoutingStaticRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_switch_stack_routing_static_route',
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
    this._advertiseViaOspfEnabled = config.advertiseViaOspfEnabled;
    this._name = config.name;
    this._networkId = config.networkId;
    this._nextHopIp = config.nextHopIp;
    this._preferOverOspfRoutesEnabled = config.preferOverOspfRoutesEnabled;
    this._subnet = config.subnet;
    this._switchStackId = config.switchStackId;
    this._vrfLeakRouteToDefaultVrf = config.vrfLeakRouteToDefaultVrf;
    this._vrfName = config.vrfName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advertise_via_ospf_enabled - computed: false, optional: true, required: false
  private _advertiseViaOspfEnabled?: boolean | cdktf.IResolvable; 
  public get advertiseViaOspfEnabled() {
    return this.getBooleanAttribute('advertise_via_ospf_enabled');
  }
  public set advertiseViaOspfEnabled(value: boolean | cdktf.IResolvable) {
    this._advertiseViaOspfEnabled = value;
  }
  public resetAdvertiseViaOspfEnabled() {
    this._advertiseViaOspfEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseViaOspfEnabledInput() {
    return this._advertiseViaOspfEnabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
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

  // next_hop_ip - computed: false, optional: false, required: true
  private _nextHopIp?: string; 
  public get nextHopIp() {
    return this.getStringAttribute('next_hop_ip');
  }
  public set nextHopIp(value: string) {
    this._nextHopIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopIpInput() {
    return this._nextHopIp;
  }

  // prefer_over_ospf_routes_enabled - computed: false, optional: true, required: false
  private _preferOverOspfRoutesEnabled?: boolean | cdktf.IResolvable; 
  public get preferOverOspfRoutesEnabled() {
    return this.getBooleanAttribute('prefer_over_ospf_routes_enabled');
  }
  public set preferOverOspfRoutesEnabled(value: boolean | cdktf.IResolvable) {
    this._preferOverOspfRoutesEnabled = value;
  }
  public resetPreferOverOspfRoutesEnabled() {
    this._preferOverOspfRoutesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferOverOspfRoutesEnabledInput() {
    return this._preferOverOspfRoutesEnabled;
  }

  // subnet - computed: false, optional: false, required: true
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // switch_stack_id - computed: false, optional: false, required: true
  private _switchStackId?: string; 
  public get switchStackId() {
    return this.getStringAttribute('switch_stack_id');
  }
  public set switchStackId(value: string) {
    this._switchStackId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchStackIdInput() {
    return this._switchStackId;
  }

  // vrf_leak_route_to_default_vrf - computed: false, optional: true, required: false
  private _vrfLeakRouteToDefaultVrf?: boolean | cdktf.IResolvable; 
  public get vrfLeakRouteToDefaultVrf() {
    return this.getBooleanAttribute('vrf_leak_route_to_default_vrf');
  }
  public set vrfLeakRouteToDefaultVrf(value: boolean | cdktf.IResolvable) {
    this._vrfLeakRouteToDefaultVrf = value;
  }
  public resetVrfLeakRouteToDefaultVrf() {
    this._vrfLeakRouteToDefaultVrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfLeakRouteToDefaultVrfInput() {
    return this._vrfLeakRouteToDefaultVrf;
  }

  // vrf_name - computed: false, optional: true, required: false
  private _vrfName?: string; 
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
  public set vrfName(value: string) {
    this._vrfName = value;
  }
  public resetVrfName() {
    this._vrfName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfNameInput() {
    return this._vrfName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advertise_via_ospf_enabled: cdktf.booleanToTerraform(this._advertiseViaOspfEnabled),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      next_hop_ip: cdktf.stringToTerraform(this._nextHopIp),
      prefer_over_ospf_routes_enabled: cdktf.booleanToTerraform(this._preferOverOspfRoutesEnabled),
      subnet: cdktf.stringToTerraform(this._subnet),
      switch_stack_id: cdktf.stringToTerraform(this._switchStackId),
      vrf_leak_route_to_default_vrf: cdktf.booleanToTerraform(this._vrfLeakRouteToDefaultVrf),
      vrf_name: cdktf.stringToTerraform(this._vrfName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advertise_via_ospf_enabled: {
        value: cdktf.booleanToHclTerraform(this._advertiseViaOspfEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      next_hop_ip: {
        value: cdktf.stringToHclTerraform(this._nextHopIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefer_over_ospf_routes_enabled: {
        value: cdktf.booleanToHclTerraform(this._preferOverOspfRoutesEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      subnet: {
        value: cdktf.stringToHclTerraform(this._subnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_stack_id: {
        value: cdktf.stringToHclTerraform(this._switchStackId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_leak_route_to_default_vrf: {
        value: cdktf.booleanToHclTerraform(this._vrfLeakRouteToDefaultVrf),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vrf_name: {
        value: cdktf.stringToHclTerraform(this._vrfName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
