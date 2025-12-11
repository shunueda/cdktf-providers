// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/bgp_address_family_ipv4
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BgpAddressFamilyIpv4Config extends cdktf.TerraformMetaArguments {
  /**
  * 
  *   - Choices: `flowspec`, `labeled-unicast`, `mdt`, `multicast`, `mvpn`, `sr-policy`, `tunnel`, `unicast`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/bgp_address_family_ipv4#af_name BgpAddressFamilyIpv4#af_name}
  */
  readonly afName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/bgp_address_family_ipv4#asn BgpAddressFamilyIpv4#asn}
  */
  readonly asn: string;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/bgp_address_family_ipv4#delete_mode BgpAddressFamilyIpv4#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/bgp_address_family_ipv4#device BgpAddressFamilyIpv4#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/bgp_address_family_ipv4#ipv4_unicast_admin_distances BgpAddressFamilyIpv4#ipv4_unicast_admin_distances}
  */
  readonly ipv4UnicastAdminDistances?: BgpAddressFamilyIpv4Ipv4UnicastAdminDistances[] | cdktf.IResolvable;
  /**
  * Configure BGP aggregate entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/bgp_address_family_ipv4#ipv4_unicast_aggregate_addresses BgpAddressFamilyIpv4#ipv4_unicast_aggregate_addresses}
  */
  readonly ipv4UnicastAggregateAddresses?: BgpAddressFamilyIpv4Ipv4UnicastAggregateAddresses[] | cdktf.IResolvable;
  /**
  * 
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/bgp_address_family_ipv4#ipv4_unicast_distance_bgp_external BgpAddressFamilyIpv4#ipv4_unicast_distance_bgp_external}
  */
  readonly ipv4UnicastDistanceBgpExternal?: number;
  /**
  * 
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/bgp_address_family_ipv4#ipv4_unicast_distance_bgp_internal BgpAddressFamilyIpv4#ipv4_unicast_distance_bgp_internal}
  */
  readonly ipv4UnicastDistanceBgpInternal?: number;
  /**
  * 
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/bgp_address_family_ipv4#ipv4_unicast_distance_bgp_local BgpAddressFamilyIpv4#ipv4_unicast_distance_bgp_local}
  */
  readonly ipv4UnicastDistanceBgpLocal?: number;
  /**
  * eBGP-multipath
  *   - Range: `1`-`32`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/bgp_address_family_ipv4#ipv4_unicast_maximum_paths_ebgp BgpAddressFamilyIpv4#ipv4_unicast_maximum_paths_ebgp}
  */
  readonly ipv4UnicastMaximumPathsEbgp?: number;
  /**
  * iBGP-multipath
  *   - Range: `1`-`32`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/bgp_address_family_ipv4#ipv4_unicast_maximum_paths_ibgp BgpAddressFamilyIpv4#ipv4_unicast_maximum_paths_ibgp}
  */
  readonly ipv4UnicastMaximumPathsIbgp?: number;
  /**
  * Specify a network to announce via BGP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/bgp_address_family_ipv4#ipv4_unicast_networks BgpAddressFamilyIpv4#ipv4_unicast_networks}
  */
  readonly ipv4UnicastNetworks?: BgpAddressFamilyIpv4Ipv4UnicastNetworks[] | cdktf.IResolvable;
  /**
  * Specify a network to announce via BGP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/bgp_address_family_ipv4#ipv4_unicast_networks_mask BgpAddressFamilyIpv4#ipv4_unicast_networks_mask}
  */
  readonly ipv4UnicastNetworksMask?: BgpAddressFamilyIpv4Ipv4UnicastNetworksMask[] | cdktf.IResolvable;
  /**
  * Connected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/bgp_address_family_ipv4#ipv4_unicast_redistribute_connected BgpAddressFamilyIpv4#ipv4_unicast_redistribute_connected}
  */
  readonly ipv4UnicastRedistributeConnected?: boolean | cdktf.IResolvable;
  /**
  * Static routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/bgp_address_family_ipv4#ipv4_unicast_redistribute_static BgpAddressFamilyIpv4#ipv4_unicast_redistribute_static}
  */
  readonly ipv4UnicastRedistributeStatic?: boolean | cdktf.IResolvable;
}
export interface BgpAddressFamilyIpv4Ipv4UnicastAdminDistances {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/bgp_address_family_ipv4#acl BgpAddressFamilyIpv4#acl}
  */
  readonly acl?: string;
  /**
  * 
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/bgp_address_family_ipv4#distance BgpAddressFamilyIpv4#distance}
  */
  readonly distance: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/bgp_address_family_ipv4#source_ip BgpAddressFamilyIpv4#source_ip}
  */
  readonly sourceIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/bgp_address_family_ipv4#wildcard BgpAddressFamilyIpv4#wildcard}
  */
  readonly wildcard: string;
}

export function bgpAddressFamilyIpv4Ipv4UnicastAdminDistancesToTerraform(struct?: BgpAddressFamilyIpv4Ipv4UnicastAdminDistances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl: cdktf.stringToTerraform(struct!.acl),
    distance: cdktf.numberToTerraform(struct!.distance),
    source_ip: cdktf.stringToTerraform(struct!.sourceIp),
    wildcard: cdktf.stringToTerraform(struct!.wildcard),
  }
}


export function bgpAddressFamilyIpv4Ipv4UnicastAdminDistancesToHclTerraform(struct?: BgpAddressFamilyIpv4Ipv4UnicastAdminDistances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl: {
      value: cdktf.stringToHclTerraform(struct!.acl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    distance: {
      value: cdktf.numberToHclTerraform(struct!.distance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_ip: {
      value: cdktf.stringToHclTerraform(struct!.sourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wildcard: {
      value: cdktf.stringToHclTerraform(struct!.wildcard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyIpv4Ipv4UnicastAdminDistancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BgpAddressFamilyIpv4Ipv4UnicastAdminDistances | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acl !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl = this._acl;
    }
    if (this._distance !== undefined) {
      hasAnyValues = true;
      internalValueResult.distance = this._distance;
    }
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    if (this._wildcard !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildcard = this._wildcard;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyIpv4Ipv4UnicastAdminDistances | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acl = undefined;
      this._distance = undefined;
      this._sourceIp = undefined;
      this._wildcard = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acl = value.acl;
      this._distance = value.distance;
      this._sourceIp = value.sourceIp;
      this._wildcard = value.wildcard;
    }
  }

  // acl - computed: false, optional: true, required: false
  private _acl?: string; 
  public get acl() {
    return this.getStringAttribute('acl');
  }
  public set acl(value: string) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
  }

  // distance - computed: false, optional: false, required: true
  private _distance?: number; 
  public get distance() {
    return this.getNumberAttribute('distance');
  }
  public set distance(value: number) {
    this._distance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceInput() {
    return this._distance;
  }

  // source_ip - computed: false, optional: false, required: true
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // wildcard - computed: false, optional: false, required: true
  private _wildcard?: string; 
  public get wildcard() {
    return this.getStringAttribute('wildcard');
  }
  public set wildcard(value: string) {
    this._wildcard = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardInput() {
    return this._wildcard;
  }
}

export class BgpAddressFamilyIpv4Ipv4UnicastAdminDistancesList extends cdktf.ComplexList {
  public internalValue? : BgpAddressFamilyIpv4Ipv4UnicastAdminDistances[] | cdktf.IResolvable

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
  public get(index: number): BgpAddressFamilyIpv4Ipv4UnicastAdminDistancesOutputReference {
    return new BgpAddressFamilyIpv4Ipv4UnicastAdminDistancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BgpAddressFamilyIpv4Ipv4UnicastAggregateAddresses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/bgp_address_family_ipv4#ipv4_address BgpAddressFamilyIpv4#ipv4_address}
  */
  readonly ipv4Address: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/bgp_address_family_ipv4#ipv4_mask BgpAddressFamilyIpv4#ipv4_mask}
  */
  readonly ipv4Mask: string;
}

export function bgpAddressFamilyIpv4Ipv4UnicastAggregateAddressesToTerraform(struct?: BgpAddressFamilyIpv4Ipv4UnicastAggregateAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_mask: cdktf.stringToTerraform(struct!.ipv4Mask),
  }
}


export function bgpAddressFamilyIpv4Ipv4UnicastAggregateAddressesToHclTerraform(struct?: BgpAddressFamilyIpv4Ipv4UnicastAggregateAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_mask: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyIpv4Ipv4UnicastAggregateAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BgpAddressFamilyIpv4Ipv4UnicastAggregateAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv4Mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Mask = this._ipv4Mask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyIpv4Ipv4UnicastAggregateAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Address = undefined;
      this._ipv4Mask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Address = value.ipv4Address;
      this._ipv4Mask = value.ipv4Mask;
    }
  }

  // ipv4_address - computed: false, optional: false, required: true
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv4_mask - computed: false, optional: false, required: true
  private _ipv4Mask?: string; 
  public get ipv4Mask() {
    return this.getStringAttribute('ipv4_mask');
  }
  public set ipv4Mask(value: string) {
    this._ipv4Mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4MaskInput() {
    return this._ipv4Mask;
  }
}

export class BgpAddressFamilyIpv4Ipv4UnicastAggregateAddressesList extends cdktf.ComplexList {
  public internalValue? : BgpAddressFamilyIpv4Ipv4UnicastAggregateAddresses[] | cdktf.IResolvable

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
  public get(index: number): BgpAddressFamilyIpv4Ipv4UnicastAggregateAddressesOutputReference {
    return new BgpAddressFamilyIpv4Ipv4UnicastAggregateAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BgpAddressFamilyIpv4Ipv4UnicastNetworks {
  /**
  * Specify a BGP backdoor route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/bgp_address_family_ipv4#backdoor BgpAddressFamilyIpv4#backdoor}
  */
  readonly backdoor?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/bgp_address_family_ipv4#network BgpAddressFamilyIpv4#network}
  */
  readonly network: string;
  /**
  * Route-map to modify the attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/bgp_address_family_ipv4#route_map BgpAddressFamilyIpv4#route_map}
  */
  readonly routeMap?: string;
}

export function bgpAddressFamilyIpv4Ipv4UnicastNetworksToTerraform(struct?: BgpAddressFamilyIpv4Ipv4UnicastNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backdoor: cdktf.booleanToTerraform(struct!.backdoor),
    network: cdktf.stringToTerraform(struct!.network),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function bgpAddressFamilyIpv4Ipv4UnicastNetworksToHclTerraform(struct?: BgpAddressFamilyIpv4Ipv4UnicastNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backdoor: {
      value: cdktf.booleanToHclTerraform(struct!.backdoor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyIpv4Ipv4UnicastNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BgpAddressFamilyIpv4Ipv4UnicastNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backdoor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backdoor = this._backdoor;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyIpv4Ipv4UnicastNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backdoor = undefined;
      this._network = undefined;
      this._routeMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backdoor = value.backdoor;
      this._network = value.network;
      this._routeMap = value.routeMap;
    }
  }

  // backdoor - computed: false, optional: true, required: false
  private _backdoor?: boolean | cdktf.IResolvable; 
  public get backdoor() {
    return this.getBooleanAttribute('backdoor');
  }
  public set backdoor(value: boolean | cdktf.IResolvable) {
    this._backdoor = value;
  }
  public resetBackdoor() {
    this._backdoor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backdoorInput() {
    return this._backdoor;
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // route_map - computed: false, optional: true, required: false
  private _routeMap?: string; 
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
  public set routeMap(value: string) {
    this._routeMap = value;
  }
  public resetRouteMap() {
    this._routeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap;
  }
}

export class BgpAddressFamilyIpv4Ipv4UnicastNetworksList extends cdktf.ComplexList {
  public internalValue? : BgpAddressFamilyIpv4Ipv4UnicastNetworks[] | cdktf.IResolvable

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
  public get(index: number): BgpAddressFamilyIpv4Ipv4UnicastNetworksOutputReference {
    return new BgpAddressFamilyIpv4Ipv4UnicastNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BgpAddressFamilyIpv4Ipv4UnicastNetworksMask {
  /**
  * Specify a BGP backdoor route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/bgp_address_family_ipv4#backdoor BgpAddressFamilyIpv4#backdoor}
  */
  readonly backdoor?: boolean | cdktf.IResolvable;
  /**
  * Network mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/bgp_address_family_ipv4#mask BgpAddressFamilyIpv4#mask}
  */
  readonly mask: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/bgp_address_family_ipv4#network BgpAddressFamilyIpv4#network}
  */
  readonly network: string;
  /**
  * Route-map to modify the attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/bgp_address_family_ipv4#route_map BgpAddressFamilyIpv4#route_map}
  */
  readonly routeMap?: string;
}

export function bgpAddressFamilyIpv4Ipv4UnicastNetworksMaskToTerraform(struct?: BgpAddressFamilyIpv4Ipv4UnicastNetworksMask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backdoor: cdktf.booleanToTerraform(struct!.backdoor),
    mask: cdktf.stringToTerraform(struct!.mask),
    network: cdktf.stringToTerraform(struct!.network),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function bgpAddressFamilyIpv4Ipv4UnicastNetworksMaskToHclTerraform(struct?: BgpAddressFamilyIpv4Ipv4UnicastNetworksMask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backdoor: {
      value: cdktf.booleanToHclTerraform(struct!.backdoor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyIpv4Ipv4UnicastNetworksMaskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BgpAddressFamilyIpv4Ipv4UnicastNetworksMask | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backdoor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backdoor = this._backdoor;
    }
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyIpv4Ipv4UnicastNetworksMask | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backdoor = undefined;
      this._mask = undefined;
      this._network = undefined;
      this._routeMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backdoor = value.backdoor;
      this._mask = value.mask;
      this._network = value.network;
      this._routeMap = value.routeMap;
    }
  }

  // backdoor - computed: false, optional: true, required: false
  private _backdoor?: boolean | cdktf.IResolvable; 
  public get backdoor() {
    return this.getBooleanAttribute('backdoor');
  }
  public set backdoor(value: boolean | cdktf.IResolvable) {
    this._backdoor = value;
  }
  public resetBackdoor() {
    this._backdoor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backdoorInput() {
    return this._backdoor;
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // route_map - computed: false, optional: true, required: false
  private _routeMap?: string; 
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
  public set routeMap(value: string) {
    this._routeMap = value;
  }
  public resetRouteMap() {
    this._routeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap;
  }
}

export class BgpAddressFamilyIpv4Ipv4UnicastNetworksMaskList extends cdktf.ComplexList {
  public internalValue? : BgpAddressFamilyIpv4Ipv4UnicastNetworksMask[] | cdktf.IResolvable

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
  public get(index: number): BgpAddressFamilyIpv4Ipv4UnicastNetworksMaskOutputReference {
    return new BgpAddressFamilyIpv4Ipv4UnicastNetworksMaskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/bgp_address_family_ipv4 iosxe_bgp_address_family_ipv4}
*/
export class BgpAddressFamilyIpv4 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_bgp_address_family_ipv4";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BgpAddressFamilyIpv4 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BgpAddressFamilyIpv4 to import
  * @param importFromId The id of the existing BgpAddressFamilyIpv4 that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/bgp_address_family_ipv4#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BgpAddressFamilyIpv4 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_bgp_address_family_ipv4", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/bgp_address_family_ipv4 iosxe_bgp_address_family_ipv4} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BgpAddressFamilyIpv4Config
  */
  public constructor(scope: Construct, id: string, config: BgpAddressFamilyIpv4Config) {
    super(scope, id, {
      terraformResourceType: 'iosxe_bgp_address_family_ipv4',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._afName = config.afName;
    this._asn = config.asn;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._ipv4UnicastAdminDistances.internalValue = config.ipv4UnicastAdminDistances;
    this._ipv4UnicastAggregateAddresses.internalValue = config.ipv4UnicastAggregateAddresses;
    this._ipv4UnicastDistanceBgpExternal = config.ipv4UnicastDistanceBgpExternal;
    this._ipv4UnicastDistanceBgpInternal = config.ipv4UnicastDistanceBgpInternal;
    this._ipv4UnicastDistanceBgpLocal = config.ipv4UnicastDistanceBgpLocal;
    this._ipv4UnicastMaximumPathsEbgp = config.ipv4UnicastMaximumPathsEbgp;
    this._ipv4UnicastMaximumPathsIbgp = config.ipv4UnicastMaximumPathsIbgp;
    this._ipv4UnicastNetworks.internalValue = config.ipv4UnicastNetworks;
    this._ipv4UnicastNetworksMask.internalValue = config.ipv4UnicastNetworksMask;
    this._ipv4UnicastRedistributeConnected = config.ipv4UnicastRedistributeConnected;
    this._ipv4UnicastRedistributeStatic = config.ipv4UnicastRedistributeStatic;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // af_name - computed: false, optional: false, required: true
  private _afName?: string; 
  public get afName() {
    return this.getStringAttribute('af_name');
  }
  public set afName(value: string) {
    this._afName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get afNameInput() {
    return this._afName;
  }

  // asn - computed: false, optional: false, required: true
  private _asn?: string; 
  public get asn() {
    return this.getStringAttribute('asn');
  }
  public set asn(value: string) {
    this._asn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv4_unicast_admin_distances - computed: false, optional: true, required: false
  private _ipv4UnicastAdminDistances = new BgpAddressFamilyIpv4Ipv4UnicastAdminDistancesList(this, "ipv4_unicast_admin_distances", false);
  public get ipv4UnicastAdminDistances() {
    return this._ipv4UnicastAdminDistances;
  }
  public putIpv4UnicastAdminDistances(value: BgpAddressFamilyIpv4Ipv4UnicastAdminDistances[] | cdktf.IResolvable) {
    this._ipv4UnicastAdminDistances.internalValue = value;
  }
  public resetIpv4UnicastAdminDistances() {
    this._ipv4UnicastAdminDistances.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4UnicastAdminDistancesInput() {
    return this._ipv4UnicastAdminDistances.internalValue;
  }

  // ipv4_unicast_aggregate_addresses - computed: false, optional: true, required: false
  private _ipv4UnicastAggregateAddresses = new BgpAddressFamilyIpv4Ipv4UnicastAggregateAddressesList(this, "ipv4_unicast_aggregate_addresses", false);
  public get ipv4UnicastAggregateAddresses() {
    return this._ipv4UnicastAggregateAddresses;
  }
  public putIpv4UnicastAggregateAddresses(value: BgpAddressFamilyIpv4Ipv4UnicastAggregateAddresses[] | cdktf.IResolvable) {
    this._ipv4UnicastAggregateAddresses.internalValue = value;
  }
  public resetIpv4UnicastAggregateAddresses() {
    this._ipv4UnicastAggregateAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4UnicastAggregateAddressesInput() {
    return this._ipv4UnicastAggregateAddresses.internalValue;
  }

  // ipv4_unicast_distance_bgp_external - computed: false, optional: true, required: false
  private _ipv4UnicastDistanceBgpExternal?: number; 
  public get ipv4UnicastDistanceBgpExternal() {
    return this.getNumberAttribute('ipv4_unicast_distance_bgp_external');
  }
  public set ipv4UnicastDistanceBgpExternal(value: number) {
    this._ipv4UnicastDistanceBgpExternal = value;
  }
  public resetIpv4UnicastDistanceBgpExternal() {
    this._ipv4UnicastDistanceBgpExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4UnicastDistanceBgpExternalInput() {
    return this._ipv4UnicastDistanceBgpExternal;
  }

  // ipv4_unicast_distance_bgp_internal - computed: false, optional: true, required: false
  private _ipv4UnicastDistanceBgpInternal?: number; 
  public get ipv4UnicastDistanceBgpInternal() {
    return this.getNumberAttribute('ipv4_unicast_distance_bgp_internal');
  }
  public set ipv4UnicastDistanceBgpInternal(value: number) {
    this._ipv4UnicastDistanceBgpInternal = value;
  }
  public resetIpv4UnicastDistanceBgpInternal() {
    this._ipv4UnicastDistanceBgpInternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4UnicastDistanceBgpInternalInput() {
    return this._ipv4UnicastDistanceBgpInternal;
  }

  // ipv4_unicast_distance_bgp_local - computed: false, optional: true, required: false
  private _ipv4UnicastDistanceBgpLocal?: number; 
  public get ipv4UnicastDistanceBgpLocal() {
    return this.getNumberAttribute('ipv4_unicast_distance_bgp_local');
  }
  public set ipv4UnicastDistanceBgpLocal(value: number) {
    this._ipv4UnicastDistanceBgpLocal = value;
  }
  public resetIpv4UnicastDistanceBgpLocal() {
    this._ipv4UnicastDistanceBgpLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4UnicastDistanceBgpLocalInput() {
    return this._ipv4UnicastDistanceBgpLocal;
  }

  // ipv4_unicast_maximum_paths_ebgp - computed: false, optional: true, required: false
  private _ipv4UnicastMaximumPathsEbgp?: number; 
  public get ipv4UnicastMaximumPathsEbgp() {
    return this.getNumberAttribute('ipv4_unicast_maximum_paths_ebgp');
  }
  public set ipv4UnicastMaximumPathsEbgp(value: number) {
    this._ipv4UnicastMaximumPathsEbgp = value;
  }
  public resetIpv4UnicastMaximumPathsEbgp() {
    this._ipv4UnicastMaximumPathsEbgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4UnicastMaximumPathsEbgpInput() {
    return this._ipv4UnicastMaximumPathsEbgp;
  }

  // ipv4_unicast_maximum_paths_ibgp - computed: false, optional: true, required: false
  private _ipv4UnicastMaximumPathsIbgp?: number; 
  public get ipv4UnicastMaximumPathsIbgp() {
    return this.getNumberAttribute('ipv4_unicast_maximum_paths_ibgp');
  }
  public set ipv4UnicastMaximumPathsIbgp(value: number) {
    this._ipv4UnicastMaximumPathsIbgp = value;
  }
  public resetIpv4UnicastMaximumPathsIbgp() {
    this._ipv4UnicastMaximumPathsIbgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4UnicastMaximumPathsIbgpInput() {
    return this._ipv4UnicastMaximumPathsIbgp;
  }

  // ipv4_unicast_networks - computed: false, optional: true, required: false
  private _ipv4UnicastNetworks = new BgpAddressFamilyIpv4Ipv4UnicastNetworksList(this, "ipv4_unicast_networks", false);
  public get ipv4UnicastNetworks() {
    return this._ipv4UnicastNetworks;
  }
  public putIpv4UnicastNetworks(value: BgpAddressFamilyIpv4Ipv4UnicastNetworks[] | cdktf.IResolvable) {
    this._ipv4UnicastNetworks.internalValue = value;
  }
  public resetIpv4UnicastNetworks() {
    this._ipv4UnicastNetworks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4UnicastNetworksInput() {
    return this._ipv4UnicastNetworks.internalValue;
  }

  // ipv4_unicast_networks_mask - computed: false, optional: true, required: false
  private _ipv4UnicastNetworksMask = new BgpAddressFamilyIpv4Ipv4UnicastNetworksMaskList(this, "ipv4_unicast_networks_mask", false);
  public get ipv4UnicastNetworksMask() {
    return this._ipv4UnicastNetworksMask;
  }
  public putIpv4UnicastNetworksMask(value: BgpAddressFamilyIpv4Ipv4UnicastNetworksMask[] | cdktf.IResolvable) {
    this._ipv4UnicastNetworksMask.internalValue = value;
  }
  public resetIpv4UnicastNetworksMask() {
    this._ipv4UnicastNetworksMask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4UnicastNetworksMaskInput() {
    return this._ipv4UnicastNetworksMask.internalValue;
  }

  // ipv4_unicast_redistribute_connected - computed: false, optional: true, required: false
  private _ipv4UnicastRedistributeConnected?: boolean | cdktf.IResolvable; 
  public get ipv4UnicastRedistributeConnected() {
    return this.getBooleanAttribute('ipv4_unicast_redistribute_connected');
  }
  public set ipv4UnicastRedistributeConnected(value: boolean | cdktf.IResolvable) {
    this._ipv4UnicastRedistributeConnected = value;
  }
  public resetIpv4UnicastRedistributeConnected() {
    this._ipv4UnicastRedistributeConnected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4UnicastRedistributeConnectedInput() {
    return this._ipv4UnicastRedistributeConnected;
  }

  // ipv4_unicast_redistribute_static - computed: false, optional: true, required: false
  private _ipv4UnicastRedistributeStatic?: boolean | cdktf.IResolvable; 
  public get ipv4UnicastRedistributeStatic() {
    return this.getBooleanAttribute('ipv4_unicast_redistribute_static');
  }
  public set ipv4UnicastRedistributeStatic(value: boolean | cdktf.IResolvable) {
    this._ipv4UnicastRedistributeStatic = value;
  }
  public resetIpv4UnicastRedistributeStatic() {
    this._ipv4UnicastRedistributeStatic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4UnicastRedistributeStaticInput() {
    return this._ipv4UnicastRedistributeStatic;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      af_name: cdktf.stringToTerraform(this._afName),
      asn: cdktf.stringToTerraform(this._asn),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      ipv4_unicast_admin_distances: cdktf.listMapper(bgpAddressFamilyIpv4Ipv4UnicastAdminDistancesToTerraform, false)(this._ipv4UnicastAdminDistances.internalValue),
      ipv4_unicast_aggregate_addresses: cdktf.listMapper(bgpAddressFamilyIpv4Ipv4UnicastAggregateAddressesToTerraform, false)(this._ipv4UnicastAggregateAddresses.internalValue),
      ipv4_unicast_distance_bgp_external: cdktf.numberToTerraform(this._ipv4UnicastDistanceBgpExternal),
      ipv4_unicast_distance_bgp_internal: cdktf.numberToTerraform(this._ipv4UnicastDistanceBgpInternal),
      ipv4_unicast_distance_bgp_local: cdktf.numberToTerraform(this._ipv4UnicastDistanceBgpLocal),
      ipv4_unicast_maximum_paths_ebgp: cdktf.numberToTerraform(this._ipv4UnicastMaximumPathsEbgp),
      ipv4_unicast_maximum_paths_ibgp: cdktf.numberToTerraform(this._ipv4UnicastMaximumPathsIbgp),
      ipv4_unicast_networks: cdktf.listMapper(bgpAddressFamilyIpv4Ipv4UnicastNetworksToTerraform, false)(this._ipv4UnicastNetworks.internalValue),
      ipv4_unicast_networks_mask: cdktf.listMapper(bgpAddressFamilyIpv4Ipv4UnicastNetworksMaskToTerraform, false)(this._ipv4UnicastNetworksMask.internalValue),
      ipv4_unicast_redistribute_connected: cdktf.booleanToTerraform(this._ipv4UnicastRedistributeConnected),
      ipv4_unicast_redistribute_static: cdktf.booleanToTerraform(this._ipv4UnicastRedistributeStatic),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      af_name: {
        value: cdktf.stringToHclTerraform(this._afName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      asn: {
        value: cdktf.stringToHclTerraform(this._asn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_unicast_admin_distances: {
        value: cdktf.listMapperHcl(bgpAddressFamilyIpv4Ipv4UnicastAdminDistancesToHclTerraform, false)(this._ipv4UnicastAdminDistances.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BgpAddressFamilyIpv4Ipv4UnicastAdminDistancesList",
      },
      ipv4_unicast_aggregate_addresses: {
        value: cdktf.listMapperHcl(bgpAddressFamilyIpv4Ipv4UnicastAggregateAddressesToHclTerraform, false)(this._ipv4UnicastAggregateAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BgpAddressFamilyIpv4Ipv4UnicastAggregateAddressesList",
      },
      ipv4_unicast_distance_bgp_external: {
        value: cdktf.numberToHclTerraform(this._ipv4UnicastDistanceBgpExternal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv4_unicast_distance_bgp_internal: {
        value: cdktf.numberToHclTerraform(this._ipv4UnicastDistanceBgpInternal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv4_unicast_distance_bgp_local: {
        value: cdktf.numberToHclTerraform(this._ipv4UnicastDistanceBgpLocal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv4_unicast_maximum_paths_ebgp: {
        value: cdktf.numberToHclTerraform(this._ipv4UnicastMaximumPathsEbgp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv4_unicast_maximum_paths_ibgp: {
        value: cdktf.numberToHclTerraform(this._ipv4UnicastMaximumPathsIbgp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv4_unicast_networks: {
        value: cdktf.listMapperHcl(bgpAddressFamilyIpv4Ipv4UnicastNetworksToHclTerraform, false)(this._ipv4UnicastNetworks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BgpAddressFamilyIpv4Ipv4UnicastNetworksList",
      },
      ipv4_unicast_networks_mask: {
        value: cdktf.listMapperHcl(bgpAddressFamilyIpv4Ipv4UnicastNetworksMaskToHclTerraform, false)(this._ipv4UnicastNetworksMask.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BgpAddressFamilyIpv4Ipv4UnicastNetworksMaskList",
      },
      ipv4_unicast_redistribute_connected: {
        value: cdktf.booleanToHclTerraform(this._ipv4UnicastRedistributeConnected),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv4_unicast_redistribute_static: {
        value: cdktf.booleanToHclTerraform(this._ipv4UnicastRedistributeStatic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
