// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/bgp_address_family_ipv6_vrf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BgpAddressFamilyIpv6VrfConfig extends cdktf.TerraformMetaArguments {
  /**
  * 
  *   - Choices: `flowspec`, `mdt`, `multicast`, `mvpn`, `unicast`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/bgp_address_family_ipv6_vrf#af_name BgpAddressFamilyIpv6Vrf#af_name}
  */
  readonly afName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/bgp_address_family_ipv6_vrf#asn BgpAddressFamilyIpv6Vrf#asn}
  */
  readonly asn: string;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/bgp_address_family_ipv6_vrf#delete_mode BgpAddressFamilyIpv6Vrf#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/bgp_address_family_ipv6_vrf#device BgpAddressFamilyIpv6Vrf#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/bgp_address_family_ipv6_vrf#vrfs BgpAddressFamilyIpv6Vrf#vrfs}
  */
  readonly vrfs?: BgpAddressFamilyIpv6VrfVrfs[] | cdktf.IResolvable;
}
export interface BgpAddressFamilyIpv6VrfVrfsIpv6UnicastNetworks {
  /**
  * Specify a BGP backdoor route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/bgp_address_family_ipv6_vrf#backdoor BgpAddressFamilyIpv6Vrf#backdoor}
  */
  readonly backdoor?: boolean | cdktf.IResolvable;
  /**
  * Advertise or export to EVPN address-family
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/bgp_address_family_ipv6_vrf#evpn BgpAddressFamilyIpv6Vrf#evpn}
  */
  readonly evpn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/bgp_address_family_ipv6_vrf#network BgpAddressFamilyIpv6Vrf#network}
  */
  readonly network: string;
  /**
  * Route-map to modify the attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/bgp_address_family_ipv6_vrf#route_map BgpAddressFamilyIpv6Vrf#route_map}
  */
  readonly routeMap?: string;
}

export function bgpAddressFamilyIpv6VrfVrfsIpv6UnicastNetworksToTerraform(struct?: BgpAddressFamilyIpv6VrfVrfsIpv6UnicastNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backdoor: cdktf.booleanToTerraform(struct!.backdoor),
    evpn: cdktf.booleanToTerraform(struct!.evpn),
    network: cdktf.stringToTerraform(struct!.network),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function bgpAddressFamilyIpv6VrfVrfsIpv6UnicastNetworksToHclTerraform(struct?: BgpAddressFamilyIpv6VrfVrfsIpv6UnicastNetworks | cdktf.IResolvable): any {
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
    evpn: {
      value: cdktf.booleanToHclTerraform(struct!.evpn),
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

export class BgpAddressFamilyIpv6VrfVrfsIpv6UnicastNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BgpAddressFamilyIpv6VrfVrfsIpv6UnicastNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backdoor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backdoor = this._backdoor;
    }
    if (this._evpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.evpn = this._evpn;
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

  public set internalValue(value: BgpAddressFamilyIpv6VrfVrfsIpv6UnicastNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backdoor = undefined;
      this._evpn = undefined;
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
      this._evpn = value.evpn;
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

  // evpn - computed: false, optional: true, required: false
  private _evpn?: boolean | cdktf.IResolvable; 
  public get evpn() {
    return this.getBooleanAttribute('evpn');
  }
  public set evpn(value: boolean | cdktf.IResolvable) {
    this._evpn = value;
  }
  public resetEvpn() {
    this._evpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evpnInput() {
    return this._evpn;
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

export class BgpAddressFamilyIpv6VrfVrfsIpv6UnicastNetworksList extends cdktf.ComplexList {
  public internalValue? : BgpAddressFamilyIpv6VrfVrfsIpv6UnicastNetworks[] | cdktf.IResolvable

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
  public get(index: number): BgpAddressFamilyIpv6VrfVrfsIpv6UnicastNetworksOutputReference {
    return new BgpAddressFamilyIpv6VrfVrfsIpv6UnicastNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BgpAddressFamilyIpv6VrfVrfs {
  /**
  * Advertise/export prefixes to l2vpn evpn table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/bgp_address_family_ipv6_vrf#ipv6_unicast_advertise_l2vpn_evpn BgpAddressFamilyIpv6Vrf#ipv6_unicast_advertise_l2vpn_evpn}
  */
  readonly ipv6UnicastAdvertiseL2VpnEvpn?: boolean | cdktf.IResolvable;
  /**
  * Specify a network to announce via BGP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/bgp_address_family_ipv6_vrf#ipv6_unicast_networks BgpAddressFamilyIpv6Vrf#ipv6_unicast_networks}
  */
  readonly ipv6UnicastNetworks?: BgpAddressFamilyIpv6VrfVrfsIpv6UnicastNetworks[] | cdktf.IResolvable;
  /**
  * Connected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/bgp_address_family_ipv6_vrf#ipv6_unicast_redistribute_connected BgpAddressFamilyIpv6Vrf#ipv6_unicast_redistribute_connected}
  */
  readonly ipv6UnicastRedistributeConnected?: boolean | cdktf.IResolvable;
  /**
  * Static routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/bgp_address_family_ipv6_vrf#ipv6_unicast_redistribute_static BgpAddressFamilyIpv6Vrf#ipv6_unicast_redistribute_static}
  */
  readonly ipv6UnicastRedistributeStatic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/bgp_address_family_ipv6_vrf#name BgpAddressFamilyIpv6Vrf#name}
  */
  readonly name: string;
}

export function bgpAddressFamilyIpv6VrfVrfsToTerraform(struct?: BgpAddressFamilyIpv6VrfVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_unicast_advertise_l2vpn_evpn: cdktf.booleanToTerraform(struct!.ipv6UnicastAdvertiseL2VpnEvpn),
    ipv6_unicast_networks: cdktf.listMapper(bgpAddressFamilyIpv6VrfVrfsIpv6UnicastNetworksToTerraform, false)(struct!.ipv6UnicastNetworks),
    ipv6_unicast_redistribute_connected: cdktf.booleanToTerraform(struct!.ipv6UnicastRedistributeConnected),
    ipv6_unicast_redistribute_static: cdktf.booleanToTerraform(struct!.ipv6UnicastRedistributeStatic),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function bgpAddressFamilyIpv6VrfVrfsToHclTerraform(struct?: BgpAddressFamilyIpv6VrfVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_unicast_advertise_l2vpn_evpn: {
      value: cdktf.booleanToHclTerraform(struct!.ipv6UnicastAdvertiseL2VpnEvpn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv6_unicast_networks: {
      value: cdktf.listMapperHcl(bgpAddressFamilyIpv6VrfVrfsIpv6UnicastNetworksToHclTerraform, false)(struct!.ipv6UnicastNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "BgpAddressFamilyIpv6VrfVrfsIpv6UnicastNetworksList",
    },
    ipv6_unicast_redistribute_connected: {
      value: cdktf.booleanToHclTerraform(struct!.ipv6UnicastRedistributeConnected),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv6_unicast_redistribute_static: {
      value: cdktf.booleanToHclTerraform(struct!.ipv6UnicastRedistributeStatic),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyIpv6VrfVrfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BgpAddressFamilyIpv6VrfVrfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6UnicastAdvertiseL2VpnEvpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6UnicastAdvertiseL2VpnEvpn = this._ipv6UnicastAdvertiseL2VpnEvpn;
    }
    if (this._ipv6UnicastNetworks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6UnicastNetworks = this._ipv6UnicastNetworks?.internalValue;
    }
    if (this._ipv6UnicastRedistributeConnected !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6UnicastRedistributeConnected = this._ipv6UnicastRedistributeConnected;
    }
    if (this._ipv6UnicastRedistributeStatic !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6UnicastRedistributeStatic = this._ipv6UnicastRedistributeStatic;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyIpv6VrfVrfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6UnicastAdvertiseL2VpnEvpn = undefined;
      this._ipv6UnicastNetworks.internalValue = undefined;
      this._ipv6UnicastRedistributeConnected = undefined;
      this._ipv6UnicastRedistributeStatic = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6UnicastAdvertiseL2VpnEvpn = value.ipv6UnicastAdvertiseL2VpnEvpn;
      this._ipv6UnicastNetworks.internalValue = value.ipv6UnicastNetworks;
      this._ipv6UnicastRedistributeConnected = value.ipv6UnicastRedistributeConnected;
      this._ipv6UnicastRedistributeStatic = value.ipv6UnicastRedistributeStatic;
      this._name = value.name;
    }
  }

  // ipv6_unicast_advertise_l2vpn_evpn - computed: false, optional: true, required: false
  private _ipv6UnicastAdvertiseL2VpnEvpn?: boolean | cdktf.IResolvable; 
  public get ipv6UnicastAdvertiseL2VpnEvpn() {
    return this.getBooleanAttribute('ipv6_unicast_advertise_l2vpn_evpn');
  }
  public set ipv6UnicastAdvertiseL2VpnEvpn(value: boolean | cdktf.IResolvable) {
    this._ipv6UnicastAdvertiseL2VpnEvpn = value;
  }
  public resetIpv6UnicastAdvertiseL2VpnEvpn() {
    this._ipv6UnicastAdvertiseL2VpnEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6UnicastAdvertiseL2VpnEvpnInput() {
    return this._ipv6UnicastAdvertiseL2VpnEvpn;
  }

  // ipv6_unicast_networks - computed: false, optional: true, required: false
  private _ipv6UnicastNetworks = new BgpAddressFamilyIpv6VrfVrfsIpv6UnicastNetworksList(this, "ipv6_unicast_networks", false);
  public get ipv6UnicastNetworks() {
    return this._ipv6UnicastNetworks;
  }
  public putIpv6UnicastNetworks(value: BgpAddressFamilyIpv6VrfVrfsIpv6UnicastNetworks[] | cdktf.IResolvable) {
    this._ipv6UnicastNetworks.internalValue = value;
  }
  public resetIpv6UnicastNetworks() {
    this._ipv6UnicastNetworks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6UnicastNetworksInput() {
    return this._ipv6UnicastNetworks.internalValue;
  }

  // ipv6_unicast_redistribute_connected - computed: false, optional: true, required: false
  private _ipv6UnicastRedistributeConnected?: boolean | cdktf.IResolvable; 
  public get ipv6UnicastRedistributeConnected() {
    return this.getBooleanAttribute('ipv6_unicast_redistribute_connected');
  }
  public set ipv6UnicastRedistributeConnected(value: boolean | cdktf.IResolvable) {
    this._ipv6UnicastRedistributeConnected = value;
  }
  public resetIpv6UnicastRedistributeConnected() {
    this._ipv6UnicastRedistributeConnected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6UnicastRedistributeConnectedInput() {
    return this._ipv6UnicastRedistributeConnected;
  }

  // ipv6_unicast_redistribute_static - computed: false, optional: true, required: false
  private _ipv6UnicastRedistributeStatic?: boolean | cdktf.IResolvable; 
  public get ipv6UnicastRedistributeStatic() {
    return this.getBooleanAttribute('ipv6_unicast_redistribute_static');
  }
  public set ipv6UnicastRedistributeStatic(value: boolean | cdktf.IResolvable) {
    this._ipv6UnicastRedistributeStatic = value;
  }
  public resetIpv6UnicastRedistributeStatic() {
    this._ipv6UnicastRedistributeStatic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6UnicastRedistributeStaticInput() {
    return this._ipv6UnicastRedistributeStatic;
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
}

export class BgpAddressFamilyIpv6VrfVrfsList extends cdktf.ComplexList {
  public internalValue? : BgpAddressFamilyIpv6VrfVrfs[] | cdktf.IResolvable

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
  public get(index: number): BgpAddressFamilyIpv6VrfVrfsOutputReference {
    return new BgpAddressFamilyIpv6VrfVrfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/bgp_address_family_ipv6_vrf iosxe_bgp_address_family_ipv6_vrf}
*/
export class BgpAddressFamilyIpv6Vrf extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_bgp_address_family_ipv6_vrf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BgpAddressFamilyIpv6Vrf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BgpAddressFamilyIpv6Vrf to import
  * @param importFromId The id of the existing BgpAddressFamilyIpv6Vrf that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/bgp_address_family_ipv6_vrf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BgpAddressFamilyIpv6Vrf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_bgp_address_family_ipv6_vrf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/bgp_address_family_ipv6_vrf iosxe_bgp_address_family_ipv6_vrf} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BgpAddressFamilyIpv6VrfConfig
  */
  public constructor(scope: Construct, id: string, config: BgpAddressFamilyIpv6VrfConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_bgp_address_family_ipv6_vrf',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.15.0',
        providerVersionConstraint: '0.15.0'
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
    this._vrfs.internalValue = config.vrfs;
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

  // vrfs - computed: false, optional: true, required: false
  private _vrfs = new BgpAddressFamilyIpv6VrfVrfsList(this, "vrfs", false);
  public get vrfs() {
    return this._vrfs;
  }
  public putVrfs(value: BgpAddressFamilyIpv6VrfVrfs[] | cdktf.IResolvable) {
    this._vrfs.internalValue = value;
  }
  public resetVrfs() {
    this._vrfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfsInput() {
    return this._vrfs.internalValue;
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
      vrfs: cdktf.listMapper(bgpAddressFamilyIpv6VrfVrfsToTerraform, false)(this._vrfs.internalValue),
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
      vrfs: {
        value: cdktf.listMapperHcl(bgpAddressFamilyIpv6VrfVrfsToHclTerraform, false)(this._vrfs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BgpAddressFamilyIpv6VrfVrfsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
