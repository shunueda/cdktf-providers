// https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApstraDatacenterVirtualNetworksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apstra Blueprint ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks#blueprint_id DataApstraDatacenterVirtualNetworks#blueprint_id}
  */
  readonly blueprintId: string;
  /**
  * Virtual Network attributes used as filter. At least one filter attribute must be included when this attribute is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks#filter DataApstraDatacenterVirtualNetworks#filter}
  */
  readonly filter?: DataApstraDatacenterVirtualNetworksFilter;
  /**
  * List of filters used to select only desired node IDs. For a node to match a filter, all specified attributes must match (each attribute within a filter is AND-ed together). The returned node IDs represent the nodes matched by all of the filters together (filters are OR-ed together).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks#filters DataApstraDatacenterVirtualNetworks#filters}
  */
  readonly filters?: DataApstraDatacenterVirtualNetworksFilters[] | cdktf.IResolvable;
}
export interface DataApstraDatacenterVirtualNetworksFilterBindings {
}

export function dataApstraDatacenterVirtualNetworksFilterBindingsToTerraform(struct?: DataApstraDatacenterVirtualNetworksFilterBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraDatacenterVirtualNetworksFilterBindingsToHclTerraform(struct?: DataApstraDatacenterVirtualNetworksFilterBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraDatacenterVirtualNetworksFilterBindingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataApstraDatacenterVirtualNetworksFilterBindings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraDatacenterVirtualNetworksFilterBindings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class DataApstraDatacenterVirtualNetworksFilterBindingsMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataApstraDatacenterVirtualNetworksFilterBindingsOutputReference {
    return new DataApstraDatacenterVirtualNetworksFilterBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataApstraDatacenterVirtualNetworksFilter {
  /**
  * Virtual Network Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks#description DataApstraDatacenterVirtualNetworks#description}
  */
  readonly description?: string;
  /**
  * Enables a DHCP relay agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks#dhcp_service_enabled DataApstraDatacenterVirtualNetworks#dhcp_service_enabled}
  */
  readonly dhcpServiceEnabled?: boolean | cdktf.IResolvable;
  /**
  * This is a set of *required* export RTs, not an exact-match list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks#export_route_targets DataApstraDatacenterVirtualNetworks#export_route_targets}
  */
  readonly exportRouteTargets?: string[];
  /**
  * This is a set of *required* import RTs, not an exact-match list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks#import_route_targets DataApstraDatacenterVirtualNetworks#import_route_targets}
  */
  readonly importRouteTargets?: string[];
  /**
  * Enables IPv4 within the Virtual Network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks#ipv4_connectivity_enabled DataApstraDatacenterVirtualNetworks#ipv4_connectivity_enabled}
  */
  readonly ipv4ConnectivityEnabled?: boolean | cdktf.IResolvable;
  /**
  * IPv4 subnet associated with the Virtual Network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks#ipv4_subnet DataApstraDatacenterVirtualNetworks#ipv4_subnet}
  */
  readonly ipv4Subnet?: string;
  /**
  * Specifies the IPv4 virtual gateway address within the Virtual Network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks#ipv4_virtual_gateway DataApstraDatacenterVirtualNetworks#ipv4_virtual_gateway}
  */
  readonly ipv4VirtualGateway?: string;
  /**
  * Controls and indicates whether the IPv4 gateway within the Virtual Network is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks#ipv4_virtual_gateway_enabled DataApstraDatacenterVirtualNetworks#ipv4_virtual_gateway_enabled}
  */
  readonly ipv4VirtualGatewayEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enables IPv6 within the Virtual Network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks#ipv6_connectivity_enabled DataApstraDatacenterVirtualNetworks#ipv6_connectivity_enabled}
  */
  readonly ipv6ConnectivityEnabled?: boolean | cdktf.IResolvable;
  /**
  * IPv6 subnet associated with the Virtual Network. Note that this attribute will not appear in the `graph_query` output because IPv6 zero compression rules are problematic for mechanisms which rely on string matching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks#ipv6_subnet DataApstraDatacenterVirtualNetworks#ipv6_subnet}
  */
  readonly ipv6Subnet?: string;
  /**
  * Specifies the IPv6 virtual gateway address within the Virtual Network. Note that this attribute will not appear in the `graph_query` output because IPv6 zero compression rules are problematic for mechanisms which rely on string matching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks#ipv6_virtual_gateway DataApstraDatacenterVirtualNetworks#ipv6_virtual_gateway}
  */
  readonly ipv6VirtualGateway?: string;
  /**
  * Controls and indicates whether the IPv6 gateway within the Virtual Network is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks#ipv6_virtual_gateway_enabled DataApstraDatacenterVirtualNetworks#ipv6_virtual_gateway_enabled}
  */
  readonly ipv6VirtualGatewayEnabled?: boolean | cdktf.IResolvable;
  /**
  * L3 MTU used by the L3 switch interfaces participating in the Virtual Network. Requires Apstra 4.2 or later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks#l3_mtu DataApstraDatacenterVirtualNetworks#l3_mtu}
  */
  readonly l3Mtu?: number;
  /**
  * Virtual Network Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks#name DataApstraDatacenterVirtualNetworks#name}
  */
  readonly name?: string;
  /**
  * Selects only virtual networks with the *Reserve across blueprint* box checked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks#reserve_vlan DataApstraDatacenterVirtualNetworks#reserve_vlan}
  */
  readonly reserveVlan?: boolean | cdktf.IResolvable;
  /**
  * Selects only virtual networks with the *Reserve across blueprint* box checked and this value selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks#reserved_vlan_id DataApstraDatacenterVirtualNetworks#reserved_vlan_id}
  */
  readonly reservedVlanId?: number;
  /**
  * Routing Zone ID (required when `type == vxlan`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks#routing_zone_id DataApstraDatacenterVirtualNetworks#routing_zone_id}
  */
  readonly routingZoneId?: string;
  /**
  * Set of Tags. All tags supplied here are used to match the Virtual Network, but a matching Virtual Network may have additional tags not enumerated in this set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks#tags DataApstraDatacenterVirtualNetworks#tags}
  */
  readonly tags?: string[];
  /**
  * Virtual Network Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks#type DataApstraDatacenterVirtualNetworks#type}
  */
  readonly type?: string;
  /**
  * EVPN Virtual Network ID to be associated with this Virtual Network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks#vni DataApstraDatacenterVirtualNetworks#vni}
  */
  readonly vni?: number;
}

export function dataApstraDatacenterVirtualNetworksFilterToTerraform(struct?: DataApstraDatacenterVirtualNetworksFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    dhcp_service_enabled: cdktf.booleanToTerraform(struct!.dhcpServiceEnabled),
    export_route_targets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exportRouteTargets),
    import_route_targets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.importRouteTargets),
    ipv4_connectivity_enabled: cdktf.booleanToTerraform(struct!.ipv4ConnectivityEnabled),
    ipv4_subnet: cdktf.stringToTerraform(struct!.ipv4Subnet),
    ipv4_virtual_gateway: cdktf.stringToTerraform(struct!.ipv4VirtualGateway),
    ipv4_virtual_gateway_enabled: cdktf.booleanToTerraform(struct!.ipv4VirtualGatewayEnabled),
    ipv6_connectivity_enabled: cdktf.booleanToTerraform(struct!.ipv6ConnectivityEnabled),
    ipv6_subnet: cdktf.stringToTerraform(struct!.ipv6Subnet),
    ipv6_virtual_gateway: cdktf.stringToTerraform(struct!.ipv6VirtualGateway),
    ipv6_virtual_gateway_enabled: cdktf.booleanToTerraform(struct!.ipv6VirtualGatewayEnabled),
    l3_mtu: cdktf.numberToTerraform(struct!.l3Mtu),
    name: cdktf.stringToTerraform(struct!.name),
    reserve_vlan: cdktf.booleanToTerraform(struct!.reserveVlan),
    reserved_vlan_id: cdktf.numberToTerraform(struct!.reservedVlanId),
    routing_zone_id: cdktf.stringToTerraform(struct!.routingZoneId),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    type: cdktf.stringToTerraform(struct!.type),
    vni: cdktf.numberToTerraform(struct!.vni),
  }
}


export function dataApstraDatacenterVirtualNetworksFilterToHclTerraform(struct?: DataApstraDatacenterVirtualNetworksFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_service_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.dhcpServiceEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    export_route_targets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exportRouteTargets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    import_route_targets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.importRouteTargets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ipv4_connectivity_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ipv4ConnectivityEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv4_subnet: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_virtual_gateway: {
      value: cdktf.stringToHclTerraform(struct!.ipv4VirtualGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_virtual_gateway_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ipv4VirtualGatewayEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv6_connectivity_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ipv6ConnectivityEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv6_subnet: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_virtual_gateway: {
      value: cdktf.stringToHclTerraform(struct!.ipv6VirtualGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_virtual_gateway_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ipv6VirtualGatewayEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    l3_mtu: {
      value: cdktf.numberToHclTerraform(struct!.l3Mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reserve_vlan: {
      value: cdktf.booleanToHclTerraform(struct!.reserveVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reserved_vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.reservedVlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    routing_zone_id: {
      value: cdktf.stringToHclTerraform(struct!.routingZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vni: {
      value: cdktf.numberToHclTerraform(struct!.vni),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataApstraDatacenterVirtualNetworksFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataApstraDatacenterVirtualNetworksFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._dhcpServiceEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpServiceEnabled = this._dhcpServiceEnabled;
    }
    if (this._exportRouteTargets !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportRouteTargets = this._exportRouteTargets;
    }
    if (this._importRouteTargets !== undefined) {
      hasAnyValues = true;
      internalValueResult.importRouteTargets = this._importRouteTargets;
    }
    if (this._ipv4ConnectivityEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4ConnectivityEnabled = this._ipv4ConnectivityEnabled;
    }
    if (this._ipv4Subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Subnet = this._ipv4Subnet;
    }
    if (this._ipv4VirtualGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4VirtualGateway = this._ipv4VirtualGateway;
    }
    if (this._ipv4VirtualGatewayEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4VirtualGatewayEnabled = this._ipv4VirtualGatewayEnabled;
    }
    if (this._ipv6ConnectivityEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6ConnectivityEnabled = this._ipv6ConnectivityEnabled;
    }
    if (this._ipv6Subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Subnet = this._ipv6Subnet;
    }
    if (this._ipv6VirtualGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6VirtualGateway = this._ipv6VirtualGateway;
    }
    if (this._ipv6VirtualGatewayEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6VirtualGatewayEnabled = this._ipv6VirtualGatewayEnabled;
    }
    if (this._l3Mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3Mtu = this._l3Mtu;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._reserveVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.reserveVlan = this._reserveVlan;
    }
    if (this._reservedVlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedVlanId = this._reservedVlanId;
    }
    if (this._routingZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingZoneId = this._routingZoneId;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vni !== undefined) {
      hasAnyValues = true;
      internalValueResult.vni = this._vni;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraDatacenterVirtualNetworksFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._dhcpServiceEnabled = undefined;
      this._exportRouteTargets = undefined;
      this._importRouteTargets = undefined;
      this._ipv4ConnectivityEnabled = undefined;
      this._ipv4Subnet = undefined;
      this._ipv4VirtualGateway = undefined;
      this._ipv4VirtualGatewayEnabled = undefined;
      this._ipv6ConnectivityEnabled = undefined;
      this._ipv6Subnet = undefined;
      this._ipv6VirtualGateway = undefined;
      this._ipv6VirtualGatewayEnabled = undefined;
      this._l3Mtu = undefined;
      this._name = undefined;
      this._reserveVlan = undefined;
      this._reservedVlanId = undefined;
      this._routingZoneId = undefined;
      this._tags = undefined;
      this._type = undefined;
      this._vni = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._dhcpServiceEnabled = value.dhcpServiceEnabled;
      this._exportRouteTargets = value.exportRouteTargets;
      this._importRouteTargets = value.importRouteTargets;
      this._ipv4ConnectivityEnabled = value.ipv4ConnectivityEnabled;
      this._ipv4Subnet = value.ipv4Subnet;
      this._ipv4VirtualGateway = value.ipv4VirtualGateway;
      this._ipv4VirtualGatewayEnabled = value.ipv4VirtualGatewayEnabled;
      this._ipv6ConnectivityEnabled = value.ipv6ConnectivityEnabled;
      this._ipv6Subnet = value.ipv6Subnet;
      this._ipv6VirtualGateway = value.ipv6VirtualGateway;
      this._ipv6VirtualGatewayEnabled = value.ipv6VirtualGatewayEnabled;
      this._l3Mtu = value.l3Mtu;
      this._name = value.name;
      this._reserveVlan = value.reserveVlan;
      this._reservedVlanId = value.reservedVlanId;
      this._routingZoneId = value.routingZoneId;
      this._tags = value.tags;
      this._type = value.type;
      this._vni = value.vni;
    }
  }

  // bindings - computed: true, optional: false, required: false
  private _bindings = new DataApstraDatacenterVirtualNetworksFilterBindingsMap(this, "bindings");
  public get bindings() {
    return this._bindings;
  }

  // blueprint_id - computed: true, optional: false, required: false
  public get blueprintId() {
    return this.getStringAttribute('blueprint_id');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // dhcp_service_enabled - computed: false, optional: true, required: false
  private _dhcpServiceEnabled?: boolean | cdktf.IResolvable; 
  public get dhcpServiceEnabled() {
    return this.getBooleanAttribute('dhcp_service_enabled');
  }
  public set dhcpServiceEnabled(value: boolean | cdktf.IResolvable) {
    this._dhcpServiceEnabled = value;
  }
  public resetDhcpServiceEnabled() {
    this._dhcpServiceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServiceEnabledInput() {
    return this._dhcpServiceEnabled;
  }

  // export_route_targets - computed: false, optional: true, required: false
  private _exportRouteTargets?: string[]; 
  public get exportRouteTargets() {
    return cdktf.Fn.tolist(this.getListAttribute('export_route_targets'));
  }
  public set exportRouteTargets(value: string[]) {
    this._exportRouteTargets = value;
  }
  public resetExportRouteTargets() {
    this._exportRouteTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportRouteTargetsInput() {
    return this._exportRouteTargets;
  }

  // had_prior_vni_config - computed: true, optional: false, required: false
  public get hadPriorVniConfig() {
    return this.getBooleanAttribute('had_prior_vni_config');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // import_route_targets - computed: false, optional: true, required: false
  private _importRouteTargets?: string[]; 
  public get importRouteTargets() {
    return cdktf.Fn.tolist(this.getListAttribute('import_route_targets'));
  }
  public set importRouteTargets(value: string[]) {
    this._importRouteTargets = value;
  }
  public resetImportRouteTargets() {
    this._importRouteTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importRouteTargetsInput() {
    return this._importRouteTargets;
  }

  // ipv4_connectivity_enabled - computed: false, optional: true, required: false
  private _ipv4ConnectivityEnabled?: boolean | cdktf.IResolvable; 
  public get ipv4ConnectivityEnabled() {
    return this.getBooleanAttribute('ipv4_connectivity_enabled');
  }
  public set ipv4ConnectivityEnabled(value: boolean | cdktf.IResolvable) {
    this._ipv4ConnectivityEnabled = value;
  }
  public resetIpv4ConnectivityEnabled() {
    this._ipv4ConnectivityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ConnectivityEnabledInput() {
    return this._ipv4ConnectivityEnabled;
  }

  // ipv4_subnet - computed: false, optional: true, required: false
  private _ipv4Subnet?: string; 
  public get ipv4Subnet() {
    return this.getStringAttribute('ipv4_subnet');
  }
  public set ipv4Subnet(value: string) {
    this._ipv4Subnet = value;
  }
  public resetIpv4Subnet() {
    this._ipv4Subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4SubnetInput() {
    return this._ipv4Subnet;
  }

  // ipv4_virtual_gateway - computed: false, optional: true, required: false
  private _ipv4VirtualGateway?: string; 
  public get ipv4VirtualGateway() {
    return this.getStringAttribute('ipv4_virtual_gateway');
  }
  public set ipv4VirtualGateway(value: string) {
    this._ipv4VirtualGateway = value;
  }
  public resetIpv4VirtualGateway() {
    this._ipv4VirtualGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4VirtualGatewayInput() {
    return this._ipv4VirtualGateway;
  }

  // ipv4_virtual_gateway_enabled - computed: false, optional: true, required: false
  private _ipv4VirtualGatewayEnabled?: boolean | cdktf.IResolvable; 
  public get ipv4VirtualGatewayEnabled() {
    return this.getBooleanAttribute('ipv4_virtual_gateway_enabled');
  }
  public set ipv4VirtualGatewayEnabled(value: boolean | cdktf.IResolvable) {
    this._ipv4VirtualGatewayEnabled = value;
  }
  public resetIpv4VirtualGatewayEnabled() {
    this._ipv4VirtualGatewayEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4VirtualGatewayEnabledInput() {
    return this._ipv4VirtualGatewayEnabled;
  }

  // ipv6_connectivity_enabled - computed: false, optional: true, required: false
  private _ipv6ConnectivityEnabled?: boolean | cdktf.IResolvable; 
  public get ipv6ConnectivityEnabled() {
    return this.getBooleanAttribute('ipv6_connectivity_enabled');
  }
  public set ipv6ConnectivityEnabled(value: boolean | cdktf.IResolvable) {
    this._ipv6ConnectivityEnabled = value;
  }
  public resetIpv6ConnectivityEnabled() {
    this._ipv6ConnectivityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ConnectivityEnabledInput() {
    return this._ipv6ConnectivityEnabled;
  }

  // ipv6_subnet - computed: false, optional: true, required: false
  private _ipv6Subnet?: string; 
  public get ipv6Subnet() {
    return this.getStringAttribute('ipv6_subnet');
  }
  public set ipv6Subnet(value: string) {
    this._ipv6Subnet = value;
  }
  public resetIpv6Subnet() {
    this._ipv6Subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SubnetInput() {
    return this._ipv6Subnet;
  }

  // ipv6_virtual_gateway - computed: false, optional: true, required: false
  private _ipv6VirtualGateway?: string; 
  public get ipv6VirtualGateway() {
    return this.getStringAttribute('ipv6_virtual_gateway');
  }
  public set ipv6VirtualGateway(value: string) {
    this._ipv6VirtualGateway = value;
  }
  public resetIpv6VirtualGateway() {
    this._ipv6VirtualGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6VirtualGatewayInput() {
    return this._ipv6VirtualGateway;
  }

  // ipv6_virtual_gateway_enabled - computed: false, optional: true, required: false
  private _ipv6VirtualGatewayEnabled?: boolean | cdktf.IResolvable; 
  public get ipv6VirtualGatewayEnabled() {
    return this.getBooleanAttribute('ipv6_virtual_gateway_enabled');
  }
  public set ipv6VirtualGatewayEnabled(value: boolean | cdktf.IResolvable) {
    this._ipv6VirtualGatewayEnabled = value;
  }
  public resetIpv6VirtualGatewayEnabled() {
    this._ipv6VirtualGatewayEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6VirtualGatewayEnabledInput() {
    return this._ipv6VirtualGatewayEnabled;
  }

  // l3_mtu - computed: false, optional: true, required: false
  private _l3Mtu?: number; 
  public get l3Mtu() {
    return this.getNumberAttribute('l3_mtu');
  }
  public set l3Mtu(value: number) {
    this._l3Mtu = value;
  }
  public resetL3Mtu() {
    this._l3Mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3MtuInput() {
    return this._l3Mtu;
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

  // reserve_vlan - computed: false, optional: true, required: false
  private _reserveVlan?: boolean | cdktf.IResolvable; 
  public get reserveVlan() {
    return this.getBooleanAttribute('reserve_vlan');
  }
  public set reserveVlan(value: boolean | cdktf.IResolvable) {
    this._reserveVlan = value;
  }
  public resetReserveVlan() {
    this._reserveVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reserveVlanInput() {
    return this._reserveVlan;
  }

  // reserved_vlan_id - computed: false, optional: true, required: false
  private _reservedVlanId?: number; 
  public get reservedVlanId() {
    return this.getNumberAttribute('reserved_vlan_id');
  }
  public set reservedVlanId(value: number) {
    this._reservedVlanId = value;
  }
  public resetReservedVlanId() {
    this._reservedVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedVlanIdInput() {
    return this._reservedVlanId;
  }

  // routing_zone_id - computed: false, optional: true, required: false
  private _routingZoneId?: string; 
  public get routingZoneId() {
    return this.getStringAttribute('routing_zone_id');
  }
  public set routingZoneId(value: string) {
    this._routingZoneId = value;
  }
  public resetRoutingZoneId() {
    this._routingZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingZoneIdInput() {
    return this._routingZoneId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vni - computed: false, optional: true, required: false
  private _vni?: number; 
  public get vni() {
    return this.getNumberAttribute('vni');
  }
  public set vni(value: number) {
    this._vni = value;
  }
  public resetVni() {
    this._vni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vniInput() {
    return this._vni;
  }
}
export interface DataApstraDatacenterVirtualNetworksFiltersBindings {
}

export function dataApstraDatacenterVirtualNetworksFiltersBindingsToTerraform(struct?: DataApstraDatacenterVirtualNetworksFiltersBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraDatacenterVirtualNetworksFiltersBindingsToHclTerraform(struct?: DataApstraDatacenterVirtualNetworksFiltersBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraDatacenterVirtualNetworksFiltersBindingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataApstraDatacenterVirtualNetworksFiltersBindings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraDatacenterVirtualNetworksFiltersBindings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class DataApstraDatacenterVirtualNetworksFiltersBindingsMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataApstraDatacenterVirtualNetworksFiltersBindingsOutputReference {
    return new DataApstraDatacenterVirtualNetworksFiltersBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataApstraDatacenterVirtualNetworksFilters {
  /**
  * Virtual Network Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks#description DataApstraDatacenterVirtualNetworks#description}
  */
  readonly description?: string;
  /**
  * Enables a DHCP relay agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks#dhcp_service_enabled DataApstraDatacenterVirtualNetworks#dhcp_service_enabled}
  */
  readonly dhcpServiceEnabled?: boolean | cdktf.IResolvable;
  /**
  * This is a set of *required* export RTs, not an exact-match list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks#export_route_targets DataApstraDatacenterVirtualNetworks#export_route_targets}
  */
  readonly exportRouteTargets?: string[];
  /**
  * This is a set of *required* import RTs, not an exact-match list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks#import_route_targets DataApstraDatacenterVirtualNetworks#import_route_targets}
  */
  readonly importRouteTargets?: string[];
  /**
  * Enables IPv4 within the Virtual Network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks#ipv4_connectivity_enabled DataApstraDatacenterVirtualNetworks#ipv4_connectivity_enabled}
  */
  readonly ipv4ConnectivityEnabled?: boolean | cdktf.IResolvable;
  /**
  * IPv4 subnet associated with the Virtual Network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks#ipv4_subnet DataApstraDatacenterVirtualNetworks#ipv4_subnet}
  */
  readonly ipv4Subnet?: string;
  /**
  * Specifies the IPv4 virtual gateway address within the Virtual Network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks#ipv4_virtual_gateway DataApstraDatacenterVirtualNetworks#ipv4_virtual_gateway}
  */
  readonly ipv4VirtualGateway?: string;
  /**
  * Controls and indicates whether the IPv4 gateway within the Virtual Network is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks#ipv4_virtual_gateway_enabled DataApstraDatacenterVirtualNetworks#ipv4_virtual_gateway_enabled}
  */
  readonly ipv4VirtualGatewayEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enables IPv6 within the Virtual Network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks#ipv6_connectivity_enabled DataApstraDatacenterVirtualNetworks#ipv6_connectivity_enabled}
  */
  readonly ipv6ConnectivityEnabled?: boolean | cdktf.IResolvable;
  /**
  * IPv6 subnet associated with the Virtual Network. Note that this attribute will not appear in the `graph_query` output because IPv6 zero compression rules are problematic for mechanisms which rely on string matching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks#ipv6_subnet DataApstraDatacenterVirtualNetworks#ipv6_subnet}
  */
  readonly ipv6Subnet?: string;
  /**
  * Specifies the IPv6 virtual gateway address within the Virtual Network. Note that this attribute will not appear in the `graph_query` output because IPv6 zero compression rules are problematic for mechanisms which rely on string matching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks#ipv6_virtual_gateway DataApstraDatacenterVirtualNetworks#ipv6_virtual_gateway}
  */
  readonly ipv6VirtualGateway?: string;
  /**
  * Controls and indicates whether the IPv6 gateway within the Virtual Network is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks#ipv6_virtual_gateway_enabled DataApstraDatacenterVirtualNetworks#ipv6_virtual_gateway_enabled}
  */
  readonly ipv6VirtualGatewayEnabled?: boolean | cdktf.IResolvable;
  /**
  * L3 MTU used by the L3 switch interfaces participating in the Virtual Network. Requires Apstra 4.2 or later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks#l3_mtu DataApstraDatacenterVirtualNetworks#l3_mtu}
  */
  readonly l3Mtu?: number;
  /**
  * Virtual Network Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks#name DataApstraDatacenterVirtualNetworks#name}
  */
  readonly name?: string;
  /**
  * Selects only virtual networks with the *Reserve across blueprint* box checked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks#reserve_vlan DataApstraDatacenterVirtualNetworks#reserve_vlan}
  */
  readonly reserveVlan?: boolean | cdktf.IResolvable;
  /**
  * Selects only virtual networks with the *Reserve across blueprint* box checked and this value selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks#reserved_vlan_id DataApstraDatacenterVirtualNetworks#reserved_vlan_id}
  */
  readonly reservedVlanId?: number;
  /**
  * Routing Zone ID (required when `type == vxlan`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks#routing_zone_id DataApstraDatacenterVirtualNetworks#routing_zone_id}
  */
  readonly routingZoneId?: string;
  /**
  * Set of Tags. All tags supplied here are used to match the Virtual Network, but a matching Virtual Network may have additional tags not enumerated in this set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks#tags DataApstraDatacenterVirtualNetworks#tags}
  */
  readonly tags?: string[];
  /**
  * Virtual Network Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks#type DataApstraDatacenterVirtualNetworks#type}
  */
  readonly type?: string;
  /**
  * EVPN Virtual Network ID to be associated with this Virtual Network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks#vni DataApstraDatacenterVirtualNetworks#vni}
  */
  readonly vni?: number;
}

export function dataApstraDatacenterVirtualNetworksFiltersToTerraform(struct?: DataApstraDatacenterVirtualNetworksFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    dhcp_service_enabled: cdktf.booleanToTerraform(struct!.dhcpServiceEnabled),
    export_route_targets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exportRouteTargets),
    import_route_targets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.importRouteTargets),
    ipv4_connectivity_enabled: cdktf.booleanToTerraform(struct!.ipv4ConnectivityEnabled),
    ipv4_subnet: cdktf.stringToTerraform(struct!.ipv4Subnet),
    ipv4_virtual_gateway: cdktf.stringToTerraform(struct!.ipv4VirtualGateway),
    ipv4_virtual_gateway_enabled: cdktf.booleanToTerraform(struct!.ipv4VirtualGatewayEnabled),
    ipv6_connectivity_enabled: cdktf.booleanToTerraform(struct!.ipv6ConnectivityEnabled),
    ipv6_subnet: cdktf.stringToTerraform(struct!.ipv6Subnet),
    ipv6_virtual_gateway: cdktf.stringToTerraform(struct!.ipv6VirtualGateway),
    ipv6_virtual_gateway_enabled: cdktf.booleanToTerraform(struct!.ipv6VirtualGatewayEnabled),
    l3_mtu: cdktf.numberToTerraform(struct!.l3Mtu),
    name: cdktf.stringToTerraform(struct!.name),
    reserve_vlan: cdktf.booleanToTerraform(struct!.reserveVlan),
    reserved_vlan_id: cdktf.numberToTerraform(struct!.reservedVlanId),
    routing_zone_id: cdktf.stringToTerraform(struct!.routingZoneId),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    type: cdktf.stringToTerraform(struct!.type),
    vni: cdktf.numberToTerraform(struct!.vni),
  }
}


export function dataApstraDatacenterVirtualNetworksFiltersToHclTerraform(struct?: DataApstraDatacenterVirtualNetworksFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_service_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.dhcpServiceEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    export_route_targets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exportRouteTargets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    import_route_targets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.importRouteTargets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ipv4_connectivity_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ipv4ConnectivityEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv4_subnet: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_virtual_gateway: {
      value: cdktf.stringToHclTerraform(struct!.ipv4VirtualGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_virtual_gateway_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ipv4VirtualGatewayEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv6_connectivity_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ipv6ConnectivityEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv6_subnet: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_virtual_gateway: {
      value: cdktf.stringToHclTerraform(struct!.ipv6VirtualGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_virtual_gateway_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ipv6VirtualGatewayEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    l3_mtu: {
      value: cdktf.numberToHclTerraform(struct!.l3Mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reserve_vlan: {
      value: cdktf.booleanToHclTerraform(struct!.reserveVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reserved_vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.reservedVlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    routing_zone_id: {
      value: cdktf.stringToHclTerraform(struct!.routingZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vni: {
      value: cdktf.numberToHclTerraform(struct!.vni),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataApstraDatacenterVirtualNetworksFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraDatacenterVirtualNetworksFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._dhcpServiceEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpServiceEnabled = this._dhcpServiceEnabled;
    }
    if (this._exportRouteTargets !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportRouteTargets = this._exportRouteTargets;
    }
    if (this._importRouteTargets !== undefined) {
      hasAnyValues = true;
      internalValueResult.importRouteTargets = this._importRouteTargets;
    }
    if (this._ipv4ConnectivityEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4ConnectivityEnabled = this._ipv4ConnectivityEnabled;
    }
    if (this._ipv4Subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Subnet = this._ipv4Subnet;
    }
    if (this._ipv4VirtualGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4VirtualGateway = this._ipv4VirtualGateway;
    }
    if (this._ipv4VirtualGatewayEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4VirtualGatewayEnabled = this._ipv4VirtualGatewayEnabled;
    }
    if (this._ipv6ConnectivityEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6ConnectivityEnabled = this._ipv6ConnectivityEnabled;
    }
    if (this._ipv6Subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Subnet = this._ipv6Subnet;
    }
    if (this._ipv6VirtualGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6VirtualGateway = this._ipv6VirtualGateway;
    }
    if (this._ipv6VirtualGatewayEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6VirtualGatewayEnabled = this._ipv6VirtualGatewayEnabled;
    }
    if (this._l3Mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3Mtu = this._l3Mtu;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._reserveVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.reserveVlan = this._reserveVlan;
    }
    if (this._reservedVlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedVlanId = this._reservedVlanId;
    }
    if (this._routingZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingZoneId = this._routingZoneId;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vni !== undefined) {
      hasAnyValues = true;
      internalValueResult.vni = this._vni;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraDatacenterVirtualNetworksFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._dhcpServiceEnabled = undefined;
      this._exportRouteTargets = undefined;
      this._importRouteTargets = undefined;
      this._ipv4ConnectivityEnabled = undefined;
      this._ipv4Subnet = undefined;
      this._ipv4VirtualGateway = undefined;
      this._ipv4VirtualGatewayEnabled = undefined;
      this._ipv6ConnectivityEnabled = undefined;
      this._ipv6Subnet = undefined;
      this._ipv6VirtualGateway = undefined;
      this._ipv6VirtualGatewayEnabled = undefined;
      this._l3Mtu = undefined;
      this._name = undefined;
      this._reserveVlan = undefined;
      this._reservedVlanId = undefined;
      this._routingZoneId = undefined;
      this._tags = undefined;
      this._type = undefined;
      this._vni = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._dhcpServiceEnabled = value.dhcpServiceEnabled;
      this._exportRouteTargets = value.exportRouteTargets;
      this._importRouteTargets = value.importRouteTargets;
      this._ipv4ConnectivityEnabled = value.ipv4ConnectivityEnabled;
      this._ipv4Subnet = value.ipv4Subnet;
      this._ipv4VirtualGateway = value.ipv4VirtualGateway;
      this._ipv4VirtualGatewayEnabled = value.ipv4VirtualGatewayEnabled;
      this._ipv6ConnectivityEnabled = value.ipv6ConnectivityEnabled;
      this._ipv6Subnet = value.ipv6Subnet;
      this._ipv6VirtualGateway = value.ipv6VirtualGateway;
      this._ipv6VirtualGatewayEnabled = value.ipv6VirtualGatewayEnabled;
      this._l3Mtu = value.l3Mtu;
      this._name = value.name;
      this._reserveVlan = value.reserveVlan;
      this._reservedVlanId = value.reservedVlanId;
      this._routingZoneId = value.routingZoneId;
      this._tags = value.tags;
      this._type = value.type;
      this._vni = value.vni;
    }
  }

  // bindings - computed: true, optional: false, required: false
  private _bindings = new DataApstraDatacenterVirtualNetworksFiltersBindingsMap(this, "bindings");
  public get bindings() {
    return this._bindings;
  }

  // blueprint_id - computed: true, optional: false, required: false
  public get blueprintId() {
    return this.getStringAttribute('blueprint_id');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // dhcp_service_enabled - computed: false, optional: true, required: false
  private _dhcpServiceEnabled?: boolean | cdktf.IResolvable; 
  public get dhcpServiceEnabled() {
    return this.getBooleanAttribute('dhcp_service_enabled');
  }
  public set dhcpServiceEnabled(value: boolean | cdktf.IResolvable) {
    this._dhcpServiceEnabled = value;
  }
  public resetDhcpServiceEnabled() {
    this._dhcpServiceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServiceEnabledInput() {
    return this._dhcpServiceEnabled;
  }

  // export_route_targets - computed: false, optional: true, required: false
  private _exportRouteTargets?: string[]; 
  public get exportRouteTargets() {
    return cdktf.Fn.tolist(this.getListAttribute('export_route_targets'));
  }
  public set exportRouteTargets(value: string[]) {
    this._exportRouteTargets = value;
  }
  public resetExportRouteTargets() {
    this._exportRouteTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportRouteTargetsInput() {
    return this._exportRouteTargets;
  }

  // had_prior_vni_config - computed: true, optional: false, required: false
  public get hadPriorVniConfig() {
    return this.getBooleanAttribute('had_prior_vni_config');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // import_route_targets - computed: false, optional: true, required: false
  private _importRouteTargets?: string[]; 
  public get importRouteTargets() {
    return cdktf.Fn.tolist(this.getListAttribute('import_route_targets'));
  }
  public set importRouteTargets(value: string[]) {
    this._importRouteTargets = value;
  }
  public resetImportRouteTargets() {
    this._importRouteTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importRouteTargetsInput() {
    return this._importRouteTargets;
  }

  // ipv4_connectivity_enabled - computed: false, optional: true, required: false
  private _ipv4ConnectivityEnabled?: boolean | cdktf.IResolvable; 
  public get ipv4ConnectivityEnabled() {
    return this.getBooleanAttribute('ipv4_connectivity_enabled');
  }
  public set ipv4ConnectivityEnabled(value: boolean | cdktf.IResolvable) {
    this._ipv4ConnectivityEnabled = value;
  }
  public resetIpv4ConnectivityEnabled() {
    this._ipv4ConnectivityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ConnectivityEnabledInput() {
    return this._ipv4ConnectivityEnabled;
  }

  // ipv4_subnet - computed: false, optional: true, required: false
  private _ipv4Subnet?: string; 
  public get ipv4Subnet() {
    return this.getStringAttribute('ipv4_subnet');
  }
  public set ipv4Subnet(value: string) {
    this._ipv4Subnet = value;
  }
  public resetIpv4Subnet() {
    this._ipv4Subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4SubnetInput() {
    return this._ipv4Subnet;
  }

  // ipv4_virtual_gateway - computed: false, optional: true, required: false
  private _ipv4VirtualGateway?: string; 
  public get ipv4VirtualGateway() {
    return this.getStringAttribute('ipv4_virtual_gateway');
  }
  public set ipv4VirtualGateway(value: string) {
    this._ipv4VirtualGateway = value;
  }
  public resetIpv4VirtualGateway() {
    this._ipv4VirtualGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4VirtualGatewayInput() {
    return this._ipv4VirtualGateway;
  }

  // ipv4_virtual_gateway_enabled - computed: false, optional: true, required: false
  private _ipv4VirtualGatewayEnabled?: boolean | cdktf.IResolvable; 
  public get ipv4VirtualGatewayEnabled() {
    return this.getBooleanAttribute('ipv4_virtual_gateway_enabled');
  }
  public set ipv4VirtualGatewayEnabled(value: boolean | cdktf.IResolvable) {
    this._ipv4VirtualGatewayEnabled = value;
  }
  public resetIpv4VirtualGatewayEnabled() {
    this._ipv4VirtualGatewayEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4VirtualGatewayEnabledInput() {
    return this._ipv4VirtualGatewayEnabled;
  }

  // ipv6_connectivity_enabled - computed: false, optional: true, required: false
  private _ipv6ConnectivityEnabled?: boolean | cdktf.IResolvable; 
  public get ipv6ConnectivityEnabled() {
    return this.getBooleanAttribute('ipv6_connectivity_enabled');
  }
  public set ipv6ConnectivityEnabled(value: boolean | cdktf.IResolvable) {
    this._ipv6ConnectivityEnabled = value;
  }
  public resetIpv6ConnectivityEnabled() {
    this._ipv6ConnectivityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ConnectivityEnabledInput() {
    return this._ipv6ConnectivityEnabled;
  }

  // ipv6_subnet - computed: false, optional: true, required: false
  private _ipv6Subnet?: string; 
  public get ipv6Subnet() {
    return this.getStringAttribute('ipv6_subnet');
  }
  public set ipv6Subnet(value: string) {
    this._ipv6Subnet = value;
  }
  public resetIpv6Subnet() {
    this._ipv6Subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SubnetInput() {
    return this._ipv6Subnet;
  }

  // ipv6_virtual_gateway - computed: false, optional: true, required: false
  private _ipv6VirtualGateway?: string; 
  public get ipv6VirtualGateway() {
    return this.getStringAttribute('ipv6_virtual_gateway');
  }
  public set ipv6VirtualGateway(value: string) {
    this._ipv6VirtualGateway = value;
  }
  public resetIpv6VirtualGateway() {
    this._ipv6VirtualGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6VirtualGatewayInput() {
    return this._ipv6VirtualGateway;
  }

  // ipv6_virtual_gateway_enabled - computed: false, optional: true, required: false
  private _ipv6VirtualGatewayEnabled?: boolean | cdktf.IResolvable; 
  public get ipv6VirtualGatewayEnabled() {
    return this.getBooleanAttribute('ipv6_virtual_gateway_enabled');
  }
  public set ipv6VirtualGatewayEnabled(value: boolean | cdktf.IResolvable) {
    this._ipv6VirtualGatewayEnabled = value;
  }
  public resetIpv6VirtualGatewayEnabled() {
    this._ipv6VirtualGatewayEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6VirtualGatewayEnabledInput() {
    return this._ipv6VirtualGatewayEnabled;
  }

  // l3_mtu - computed: false, optional: true, required: false
  private _l3Mtu?: number; 
  public get l3Mtu() {
    return this.getNumberAttribute('l3_mtu');
  }
  public set l3Mtu(value: number) {
    this._l3Mtu = value;
  }
  public resetL3Mtu() {
    this._l3Mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3MtuInput() {
    return this._l3Mtu;
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

  // reserve_vlan - computed: false, optional: true, required: false
  private _reserveVlan?: boolean | cdktf.IResolvable; 
  public get reserveVlan() {
    return this.getBooleanAttribute('reserve_vlan');
  }
  public set reserveVlan(value: boolean | cdktf.IResolvable) {
    this._reserveVlan = value;
  }
  public resetReserveVlan() {
    this._reserveVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reserveVlanInput() {
    return this._reserveVlan;
  }

  // reserved_vlan_id - computed: false, optional: true, required: false
  private _reservedVlanId?: number; 
  public get reservedVlanId() {
    return this.getNumberAttribute('reserved_vlan_id');
  }
  public set reservedVlanId(value: number) {
    this._reservedVlanId = value;
  }
  public resetReservedVlanId() {
    this._reservedVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedVlanIdInput() {
    return this._reservedVlanId;
  }

  // routing_zone_id - computed: false, optional: true, required: false
  private _routingZoneId?: string; 
  public get routingZoneId() {
    return this.getStringAttribute('routing_zone_id');
  }
  public set routingZoneId(value: string) {
    this._routingZoneId = value;
  }
  public resetRoutingZoneId() {
    this._routingZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingZoneIdInput() {
    return this._routingZoneId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vni - computed: false, optional: true, required: false
  private _vni?: number; 
  public get vni() {
    return this.getNumberAttribute('vni');
  }
  public set vni(value: number) {
    this._vni = value;
  }
  public resetVni() {
    this._vni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vniInput() {
    return this._vni;
  }
}

export class DataApstraDatacenterVirtualNetworksFiltersList extends cdktf.ComplexList {
  public internalValue? : DataApstraDatacenterVirtualNetworksFilters[] | cdktf.IResolvable

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
  public get(index: number): DataApstraDatacenterVirtualNetworksFiltersOutputReference {
    return new DataApstraDatacenterVirtualNetworksFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks apstra_datacenter_virtual_networks}
*/
export class DataApstraDatacenterVirtualNetworks extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_datacenter_virtual_networks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApstraDatacenterVirtualNetworks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApstraDatacenterVirtualNetworks to import
  * @param importFromId The id of the existing DataApstraDatacenterVirtualNetworks that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApstraDatacenterVirtualNetworks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_datacenter_virtual_networks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_virtual_networks apstra_datacenter_virtual_networks} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApstraDatacenterVirtualNetworksConfig
  */
  public constructor(scope: Construct, id: string, config: DataApstraDatacenterVirtualNetworksConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_datacenter_virtual_networks',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.1',
        providerVersionConstraint: '0.95.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blueprintId = config.blueprintId;
    this._filter.internalValue = config.filter;
    this._filters.internalValue = config.filters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blueprint_id - computed: false, optional: false, required: true
  private _blueprintId?: string; 
  public get blueprintId() {
    return this.getStringAttribute('blueprint_id');
  }
  public set blueprintId(value: string) {
    this._blueprintId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintIdInput() {
    return this._blueprintId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataApstraDatacenterVirtualNetworksFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataApstraDatacenterVirtualNetworksFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new DataApstraDatacenterVirtualNetworksFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataApstraDatacenterVirtualNetworksFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // graph_queries - computed: true, optional: false, required: false
  public get graphQueries() {
    return this.getListAttribute('graph_queries');
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return cdktf.Fn.tolist(this.getListAttribute('ids'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blueprint_id: cdktf.stringToTerraform(this._blueprintId),
      filter: dataApstraDatacenterVirtualNetworksFilterToTerraform(this._filter.internalValue),
      filters: cdktf.listMapper(dataApstraDatacenterVirtualNetworksFiltersToTerraform, false)(this._filters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blueprint_id: {
        value: cdktf.stringToHclTerraform(this._blueprintId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: dataApstraDatacenterVirtualNetworksFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataApstraDatacenterVirtualNetworksFilter",
      },
      filters: {
        value: cdktf.listMapperHcl(dataApstraDatacenterVirtualNetworksFiltersToHclTerraform, false)(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataApstraDatacenterVirtualNetworksFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
