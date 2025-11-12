// https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_routing_zones
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApstraDatacenterRoutingZonesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apstra Blueprint ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_routing_zones#blueprint_id DataApstraDatacenterRoutingZones#blueprint_id}
  */
  readonly blueprintId: string;
  /**
  * Routing Zone attributes used as a filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_routing_zones#filter DataApstraDatacenterRoutingZones#filter}
  */
  readonly filter?: DataApstraDatacenterRoutingZonesFilter;
  /**
  * List of filters used to select only desired node IDs. For a node to match a filter, all specified attributes must match (each attribute within a filter is AND-ed together). The returned node IDs represent the nodes matched by all of the filters together (filters are OR-ed together).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_routing_zones#filters DataApstraDatacenterRoutingZones#filters}
  */
  readonly filters?: DataApstraDatacenterRoutingZonesFilters[] | cdktf.IResolvable;
}
export interface DataApstraDatacenterRoutingZonesFilter {
  /**
  * Set of addresses of DHCP servers (IPv4 or IPv6) which must be configured in the Routing Zone. This is a list of *required* servers, not an exact-match list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_routing_zones#dhcp_servers DataApstraDatacenterRoutingZones#dhcp_servers}
  */
  readonly dhcpServers?: string[];
  /**
  * This is a set of *required* RTs, not an exact-match list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_routing_zones#export_route_targets DataApstraDatacenterRoutingZones#export_route_targets}
  */
  readonly exportRouteTargets?: string[];
  /**
  * This is a set of *required* RTs, not an exact-match list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_routing_zones#import_route_targets DataApstraDatacenterRoutingZones#import_route_targets}
  */
  readonly importRouteTargets?: string[];
  /**
  * Symmetric IRB Routing for EVPN on Junos devices makes use of an L3 VNI for inter-subnet routing which is embedded into EVPN Type2-routes to support better scaling for networks with large amounts of VLANs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_routing_zones#junos_evpn_irb_mode DataApstraDatacenterRoutingZones#junos_evpn_irb_mode}
  */
  readonly junosEvpnIrbMode?: string;
  /**
  * Name displayed in the Apstra web UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_routing_zones#name DataApstraDatacenterRoutingZones#name}
  */
  readonly name?: string;
  /**
  * Non-EVPN blueprints must use the default policy, so this field must be null. Set this attribute in an EVPN blueprint to use a non-default policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_routing_zones#routing_policy_id DataApstraDatacenterRoutingZones#routing_policy_id}
  */
  readonly routingPolicyId?: string;
  /**
  * Used for VLAN tagged Layer 3 links on external connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_routing_zones#vlan_id DataApstraDatacenterRoutingZones#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * VxLAN VNI associated with the routing zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_routing_zones#vni DataApstraDatacenterRoutingZones#vni}
  */
  readonly vni?: number;
  /**
  * VRF name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_routing_zones#vrf_name DataApstraDatacenterRoutingZones#vrf_name}
  */
  readonly vrfName?: string;
}

export function dataApstraDatacenterRoutingZonesFilterToTerraform(struct?: DataApstraDatacenterRoutingZonesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dhcpServers),
    export_route_targets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exportRouteTargets),
    import_route_targets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.importRouteTargets),
    junos_evpn_irb_mode: cdktf.stringToTerraform(struct!.junosEvpnIrbMode),
    name: cdktf.stringToTerraform(struct!.name),
    routing_policy_id: cdktf.stringToTerraform(struct!.routingPolicyId),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
    vni: cdktf.numberToTerraform(struct!.vni),
    vrf_name: cdktf.stringToTerraform(struct!.vrfName),
  }
}


export function dataApstraDatacenterRoutingZonesFilterToHclTerraform(struct?: DataApstraDatacenterRoutingZonesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dhcpServers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
    junos_evpn_irb_mode: {
      value: cdktf.stringToHclTerraform(struct!.junosEvpnIrbMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.routingPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vni: {
      value: cdktf.numberToHclTerraform(struct!.vni),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataApstraDatacenterRoutingZonesFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataApstraDatacenterRoutingZonesFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcpServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpServers = this._dhcpServers;
    }
    if (this._exportRouteTargets !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportRouteTargets = this._exportRouteTargets;
    }
    if (this._importRouteTargets !== undefined) {
      hasAnyValues = true;
      internalValueResult.importRouteTargets = this._importRouteTargets;
    }
    if (this._junosEvpnIrbMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.junosEvpnIrbMode = this._junosEvpnIrbMode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._routingPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingPolicyId = this._routingPolicyId;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    if (this._vni !== undefined) {
      hasAnyValues = true;
      internalValueResult.vni = this._vni;
    }
    if (this._vrfName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfName = this._vrfName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraDatacenterRoutingZonesFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dhcpServers = undefined;
      this._exportRouteTargets = undefined;
      this._importRouteTargets = undefined;
      this._junosEvpnIrbMode = undefined;
      this._name = undefined;
      this._routingPolicyId = undefined;
      this._vlanId = undefined;
      this._vni = undefined;
      this._vrfName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dhcpServers = value.dhcpServers;
      this._exportRouteTargets = value.exportRouteTargets;
      this._importRouteTargets = value.importRouteTargets;
      this._junosEvpnIrbMode = value.junosEvpnIrbMode;
      this._name = value.name;
      this._routingPolicyId = value.routingPolicyId;
      this._vlanId = value.vlanId;
      this._vni = value.vni;
      this._vrfName = value.vrfName;
    }
  }

  // blueprint_id - computed: true, optional: false, required: false
  public get blueprintId() {
    return this.getStringAttribute('blueprint_id');
  }

  // dhcp_servers - computed: false, optional: true, required: false
  private _dhcpServers?: string[]; 
  public get dhcpServers() {
    return cdktf.Fn.tolist(this.getListAttribute('dhcp_servers'));
  }
  public set dhcpServers(value: string[]) {
    this._dhcpServers = value;
  }
  public resetDhcpServers() {
    this._dhcpServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServersInput() {
    return this._dhcpServers;
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

  // had_prior_vlan_id_config - computed: true, optional: false, required: false
  public get hadPriorVlanIdConfig() {
    return this.getBooleanAttribute('had_prior_vlan_id_config');
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

  // junos_evpn_irb_mode - computed: false, optional: true, required: false
  private _junosEvpnIrbMode?: string; 
  public get junosEvpnIrbMode() {
    return this.getStringAttribute('junos_evpn_irb_mode');
  }
  public set junosEvpnIrbMode(value: string) {
    this._junosEvpnIrbMode = value;
  }
  public resetJunosEvpnIrbMode() {
    this._junosEvpnIrbMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get junosEvpnIrbModeInput() {
    return this._junosEvpnIrbMode;
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

  // routing_policy_id - computed: false, optional: true, required: false
  private _routingPolicyId?: string; 
  public get routingPolicyId() {
    return this.getStringAttribute('routing_policy_id');
  }
  public set routingPolicyId(value: string) {
    this._routingPolicyId = value;
  }
  public resetRoutingPolicyId() {
    this._routingPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPolicyIdInput() {
    return this._routingPolicyId;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
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
export interface DataApstraDatacenterRoutingZonesFilters {
  /**
  * Set of addresses of DHCP servers (IPv4 or IPv6) which must be configured in the Routing Zone. This is a list of *required* servers, not an exact-match list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_routing_zones#dhcp_servers DataApstraDatacenterRoutingZones#dhcp_servers}
  */
  readonly dhcpServers?: string[];
  /**
  * This is a set of *required* RTs, not an exact-match list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_routing_zones#export_route_targets DataApstraDatacenterRoutingZones#export_route_targets}
  */
  readonly exportRouteTargets?: string[];
  /**
  * This is a set of *required* RTs, not an exact-match list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_routing_zones#import_route_targets DataApstraDatacenterRoutingZones#import_route_targets}
  */
  readonly importRouteTargets?: string[];
  /**
  * Symmetric IRB Routing for EVPN on Junos devices makes use of an L3 VNI for inter-subnet routing which is embedded into EVPN Type2-routes to support better scaling for networks with large amounts of VLANs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_routing_zones#junos_evpn_irb_mode DataApstraDatacenterRoutingZones#junos_evpn_irb_mode}
  */
  readonly junosEvpnIrbMode?: string;
  /**
  * Name displayed in the Apstra web UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_routing_zones#name DataApstraDatacenterRoutingZones#name}
  */
  readonly name?: string;
  /**
  * Non-EVPN blueprints must use the default policy, so this field must be null. Set this attribute in an EVPN blueprint to use a non-default policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_routing_zones#routing_policy_id DataApstraDatacenterRoutingZones#routing_policy_id}
  */
  readonly routingPolicyId?: string;
  /**
  * Used for VLAN tagged Layer 3 links on external connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_routing_zones#vlan_id DataApstraDatacenterRoutingZones#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * VxLAN VNI associated with the routing zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_routing_zones#vni DataApstraDatacenterRoutingZones#vni}
  */
  readonly vni?: number;
  /**
  * VRF name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_routing_zones#vrf_name DataApstraDatacenterRoutingZones#vrf_name}
  */
  readonly vrfName?: string;
}

export function dataApstraDatacenterRoutingZonesFiltersToTerraform(struct?: DataApstraDatacenterRoutingZonesFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dhcpServers),
    export_route_targets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exportRouteTargets),
    import_route_targets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.importRouteTargets),
    junos_evpn_irb_mode: cdktf.stringToTerraform(struct!.junosEvpnIrbMode),
    name: cdktf.stringToTerraform(struct!.name),
    routing_policy_id: cdktf.stringToTerraform(struct!.routingPolicyId),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
    vni: cdktf.numberToTerraform(struct!.vni),
    vrf_name: cdktf.stringToTerraform(struct!.vrfName),
  }
}


export function dataApstraDatacenterRoutingZonesFiltersToHclTerraform(struct?: DataApstraDatacenterRoutingZonesFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dhcpServers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
    junos_evpn_irb_mode: {
      value: cdktf.stringToHclTerraform(struct!.junosEvpnIrbMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.routingPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vni: {
      value: cdktf.numberToHclTerraform(struct!.vni),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataApstraDatacenterRoutingZonesFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraDatacenterRoutingZonesFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcpServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpServers = this._dhcpServers;
    }
    if (this._exportRouteTargets !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportRouteTargets = this._exportRouteTargets;
    }
    if (this._importRouteTargets !== undefined) {
      hasAnyValues = true;
      internalValueResult.importRouteTargets = this._importRouteTargets;
    }
    if (this._junosEvpnIrbMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.junosEvpnIrbMode = this._junosEvpnIrbMode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._routingPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingPolicyId = this._routingPolicyId;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    if (this._vni !== undefined) {
      hasAnyValues = true;
      internalValueResult.vni = this._vni;
    }
    if (this._vrfName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfName = this._vrfName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraDatacenterRoutingZonesFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dhcpServers = undefined;
      this._exportRouteTargets = undefined;
      this._importRouteTargets = undefined;
      this._junosEvpnIrbMode = undefined;
      this._name = undefined;
      this._routingPolicyId = undefined;
      this._vlanId = undefined;
      this._vni = undefined;
      this._vrfName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dhcpServers = value.dhcpServers;
      this._exportRouteTargets = value.exportRouteTargets;
      this._importRouteTargets = value.importRouteTargets;
      this._junosEvpnIrbMode = value.junosEvpnIrbMode;
      this._name = value.name;
      this._routingPolicyId = value.routingPolicyId;
      this._vlanId = value.vlanId;
      this._vni = value.vni;
      this._vrfName = value.vrfName;
    }
  }

  // blueprint_id - computed: true, optional: false, required: false
  public get blueprintId() {
    return this.getStringAttribute('blueprint_id');
  }

  // dhcp_servers - computed: false, optional: true, required: false
  private _dhcpServers?: string[]; 
  public get dhcpServers() {
    return cdktf.Fn.tolist(this.getListAttribute('dhcp_servers'));
  }
  public set dhcpServers(value: string[]) {
    this._dhcpServers = value;
  }
  public resetDhcpServers() {
    this._dhcpServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServersInput() {
    return this._dhcpServers;
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

  // had_prior_vlan_id_config - computed: true, optional: false, required: false
  public get hadPriorVlanIdConfig() {
    return this.getBooleanAttribute('had_prior_vlan_id_config');
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

  // junos_evpn_irb_mode - computed: false, optional: true, required: false
  private _junosEvpnIrbMode?: string; 
  public get junosEvpnIrbMode() {
    return this.getStringAttribute('junos_evpn_irb_mode');
  }
  public set junosEvpnIrbMode(value: string) {
    this._junosEvpnIrbMode = value;
  }
  public resetJunosEvpnIrbMode() {
    this._junosEvpnIrbMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get junosEvpnIrbModeInput() {
    return this._junosEvpnIrbMode;
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

  // routing_policy_id - computed: false, optional: true, required: false
  private _routingPolicyId?: string; 
  public get routingPolicyId() {
    return this.getStringAttribute('routing_policy_id');
  }
  public set routingPolicyId(value: string) {
    this._routingPolicyId = value;
  }
  public resetRoutingPolicyId() {
    this._routingPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPolicyIdInput() {
    return this._routingPolicyId;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
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

export class DataApstraDatacenterRoutingZonesFiltersList extends cdktf.ComplexList {
  public internalValue? : DataApstraDatacenterRoutingZonesFilters[] | cdktf.IResolvable

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
  public get(index: number): DataApstraDatacenterRoutingZonesFiltersOutputReference {
    return new DataApstraDatacenterRoutingZonesFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_routing_zones apstra_datacenter_routing_zones}
*/
export class DataApstraDatacenterRoutingZones extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_datacenter_routing_zones";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApstraDatacenterRoutingZones resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApstraDatacenterRoutingZones to import
  * @param importFromId The id of the existing DataApstraDatacenterRoutingZones that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_routing_zones#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApstraDatacenterRoutingZones to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_datacenter_routing_zones", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_routing_zones apstra_datacenter_routing_zones} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApstraDatacenterRoutingZonesConfig
  */
  public constructor(scope: Construct, id: string, config: DataApstraDatacenterRoutingZonesConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_datacenter_routing_zones',
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
  private _filter = new DataApstraDatacenterRoutingZonesFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataApstraDatacenterRoutingZonesFilter) {
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
  private _filters = new DataApstraDatacenterRoutingZonesFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataApstraDatacenterRoutingZonesFilters[] | cdktf.IResolvable) {
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
      filter: dataApstraDatacenterRoutingZonesFilterToTerraform(this._filter.internalValue),
      filters: cdktf.listMapper(dataApstraDatacenterRoutingZonesFiltersToTerraform, false)(this._filters.internalValue),
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
        value: dataApstraDatacenterRoutingZonesFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataApstraDatacenterRoutingZonesFilter",
      },
      filters: {
        value: cdktf.listMapperHcl(dataApstraDatacenterRoutingZonesFiltersToHclTerraform, false)(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataApstraDatacenterRoutingZonesFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
