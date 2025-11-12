// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_static_routes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchRoutingStaticRoutesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_static_routes#items SwitchRoutingStaticRoutes#items}
  */
  readonly items: SwitchRoutingStaticRoutesItems[] | cdktf.IResolvable;
  /**
  * The organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_static_routes#organization_id SwitchRoutingStaticRoutes#organization_id}
  */
  readonly organizationId: string;
  /**
  * Switch serial
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_static_routes#serial SwitchRoutingStaticRoutes#serial}
  */
  readonly serial: string;
}
export interface SwitchRoutingStaticRoutesItems {
  /**
  * Option to advertise static route via OSPF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_static_routes#advertise_via_ospf_enabled SwitchRoutingStaticRoutes#advertise_via_ospf_enabled}
  */
  readonly advertiseViaOspfEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name or description for layer 3 static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_static_routes#name SwitchRoutingStaticRoutes#name}
  */
  readonly name?: string;
  /**
  * IP address of the next hop device to which the device sends its traffic for the subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_static_routes#next_hop_ip SwitchRoutingStaticRoutes#next_hop_ip}
  */
  readonly nextHopIp: string;
  /**
  * Option to prefer static route over OSPF routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_static_routes#prefer_over_ospf_routes_enabled SwitchRoutingStaticRoutes#prefer_over_ospf_routes_enabled}
  */
  readonly preferOverOspfRoutesEnabled?: boolean | cdktf.IResolvable;
  /**
  * The subnet which is routed via this static route and should be specified in CIDR notation (ex. 1.2.3.0/24)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_static_routes#subnet SwitchRoutingStaticRoutes#subnet}
  */
  readonly subnet: string;
  /**
  * Whether or not next-hop IP is reachable via default VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_static_routes#vrf_leak_route_to_default_vrf SwitchRoutingStaticRoutes#vrf_leak_route_to_default_vrf}
  */
  readonly vrfLeakRouteToDefaultVrf?: boolean | cdktf.IResolvable;
  /**
  * The name of the VRF this static route belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_static_routes#vrf_name SwitchRoutingStaticRoutes#vrf_name}
  */
  readonly vrfName?: string;
}

export function switchRoutingStaticRoutesItemsToTerraform(struct?: SwitchRoutingStaticRoutesItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_via_ospf_enabled: cdktf.booleanToTerraform(struct!.advertiseViaOspfEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    next_hop_ip: cdktf.stringToTerraform(struct!.nextHopIp),
    prefer_over_ospf_routes_enabled: cdktf.booleanToTerraform(struct!.preferOverOspfRoutesEnabled),
    subnet: cdktf.stringToTerraform(struct!.subnet),
    vrf_leak_route_to_default_vrf: cdktf.booleanToTerraform(struct!.vrfLeakRouteToDefaultVrf),
    vrf_name: cdktf.stringToTerraform(struct!.vrfName),
  }
}


export function switchRoutingStaticRoutesItemsToHclTerraform(struct?: SwitchRoutingStaticRoutesItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise_via_ospf_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.advertiseViaOspfEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop_ip: {
      value: cdktf.stringToHclTerraform(struct!.nextHopIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefer_over_ospf_routes_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.preferOverOspfRoutesEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf_leak_route_to_default_vrf: {
      value: cdktf.booleanToHclTerraform(struct!.vrfLeakRouteToDefaultVrf),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vrf_name: {
      value: cdktf.stringToHclTerraform(struct!.vrfName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchRoutingStaticRoutesItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SwitchRoutingStaticRoutesItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertiseViaOspfEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseViaOspfEnabled = this._advertiseViaOspfEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nextHopIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopIp = this._nextHopIp;
    }
    if (this._preferOverOspfRoutesEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferOverOspfRoutesEnabled = this._preferOverOspfRoutesEnabled;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    if (this._vrfLeakRouteToDefaultVrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfLeakRouteToDefaultVrf = this._vrfLeakRouteToDefaultVrf;
    }
    if (this._vrfName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfName = this._vrfName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchRoutingStaticRoutesItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertiseViaOspfEnabled = undefined;
      this._name = undefined;
      this._nextHopIp = undefined;
      this._preferOverOspfRoutesEnabled = undefined;
      this._subnet = undefined;
      this._vrfLeakRouteToDefaultVrf = undefined;
      this._vrfName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertiseViaOspfEnabled = value.advertiseViaOspfEnabled;
      this._name = value.name;
      this._nextHopIp = value.nextHopIp;
      this._preferOverOspfRoutesEnabled = value.preferOverOspfRoutesEnabled;
      this._subnet = value.subnet;
      this._vrfLeakRouteToDefaultVrf = value.vrfLeakRouteToDefaultVrf;
      this._vrfName = value.vrfName;
    }
  }

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
}

export class SwitchRoutingStaticRoutesItemsList extends cdktf.ComplexList {
  public internalValue? : SwitchRoutingStaticRoutesItems[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SwitchRoutingStaticRoutesItemsOutputReference {
    return new SwitchRoutingStaticRoutesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_static_routes meraki_switch_routing_static_routes}
*/
export class SwitchRoutingStaticRoutes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_switch_routing_static_routes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchRoutingStaticRoutes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchRoutingStaticRoutes to import
  * @param importFromId The id of the existing SwitchRoutingStaticRoutes that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_static_routes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchRoutingStaticRoutes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_switch_routing_static_routes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_static_routes meraki_switch_routing_static_routes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchRoutingStaticRoutesConfig
  */
  public constructor(scope: Construct, id: string, config: SwitchRoutingStaticRoutesConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_switch_routing_static_routes',
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
    this._items.internalValue = config.items;
    this._organizationId = config.organizationId;
    this._serial = config.serial;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // items - computed: false, optional: false, required: true
  private _items = new SwitchRoutingStaticRoutesItemsList(this, "items", true);
  public get items() {
    return this._items;
  }
  public putItems(value: SwitchRoutingStaticRoutesItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // serial - computed: false, optional: false, required: true
  private _serial?: string; 
  public get serial() {
    return this.getStringAttribute('serial');
  }
  public set serial(value: string) {
    this._serial = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      items: cdktf.listMapper(switchRoutingStaticRoutesItemsToTerraform, false)(this._items.internalValue),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      serial: cdktf.stringToTerraform(this._serial),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      items: {
        value: cdktf.listMapperHcl(switchRoutingStaticRoutesItemsToHclTerraform, false)(this._items.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SwitchRoutingStaticRoutesItemsList",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serial: {
        value: cdktf.stringToHclTerraform(this._serial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
