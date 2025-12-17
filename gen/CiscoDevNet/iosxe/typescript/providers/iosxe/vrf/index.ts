// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VrfConfig extends cdktf.TerraformMetaArguments {
  /**
  * Address family
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#address_family_ipv4 Vrf#address_family_ipv4}
  */
  readonly addressFamilyIpv4?: boolean | cdktf.IResolvable;
  /**
  * Address family
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#address_family_ipv6 Vrf#address_family_ipv6}
  */
  readonly addressFamilyIpv6?: boolean | cdktf.IResolvable;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#delete_mode Vrf#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * VRF specific description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#description Vrf#description}
  */
  readonly description?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#device Vrf#device}
  */
  readonly device?: string;
  /**
  * IPv4 address of Rendezvous-point for anycast mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#ipv4_evpn_mcast_anycast Vrf#ipv4_evpn_mcast_anycast}
  */
  readonly ipv4EvpnMcastAnycast?: string;
  /**
  * EVPN multicast data MDT group address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#ipv4_evpn_mcast_data_address Vrf#ipv4_evpn_mcast_data_address}
  */
  readonly ipv4EvpnMcastDataAddress?: string;
  /**
  * EVPN multicast data MDT mask bits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#ipv4_evpn_mcast_data_mask_bits Vrf#ipv4_evpn_mcast_data_mask_bits}
  */
  readonly ipv4EvpnMcastDataMaskBits?: string;
  /**
  * EVPN multicast MDT default group address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#ipv4_evpn_mcast_mdt_default_address Vrf#ipv4_evpn_mcast_mdt_default_address}
  */
  readonly ipv4EvpnMcastMdtDefaultAddress?: string;
  /**
  * Route-map based VRF export for IPv4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#ipv4_export_map Vrf#ipv4_export_map}
  */
  readonly ipv4ExportMap?: string;
  /**
  * Route-map based VRF import for IPv4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#ipv4_import_map Vrf#ipv4_import_map}
  */
  readonly ipv4ImportMap?: string;
  /**
  * Enable BGP auto-discovery for VxLAN PIM interworking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#ipv4_mdt_auto_discovery_interworking_vxlan_pim Vrf#ipv4_mdt_auto_discovery_interworking_vxlan_pim}
  */
  readonly ipv4MdtAutoDiscoveryInterworkingVxlanPim?: boolean | cdktf.IResolvable;
  /**
  * Enable Inter-AS BGP auto-discovery for VxLAN PIM interworking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#ipv4_mdt_auto_discovery_interworking_vxlan_pim_inter_as Vrf#ipv4_mdt_auto_discovery_interworking_vxlan_pim_inter_as}
  */
  readonly ipv4MdtAutoDiscoveryInterworkingVxlanPimInterAs?: boolean | cdktf.IResolvable;
  /**
  * Enable BGP auto-discovery for VxLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#ipv4_mdt_auto_discovery_vxlan Vrf#ipv4_mdt_auto_discovery_vxlan}
  */
  readonly ipv4MdtAutoDiscoveryVxlan?: boolean | cdktf.IResolvable;
  /**
  * Enable Inter-AS BGP auto-discovery for VxLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#ipv4_mdt_auto_discovery_vxlan_inter_as Vrf#ipv4_mdt_auto_discovery_vxlan_inter_as}
  */
  readonly ipv4MdtAutoDiscoveryVxlanInterAs?: boolean | cdktf.IResolvable;
  /**
  * MDT data multicast group ranges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#ipv4_mdt_data_multicast Vrf#ipv4_mdt_data_multicast}
  */
  readonly ipv4MdtDataMulticast?: VrfIpv4MdtDataMulticast[] | cdktf.IResolvable;
  /**
  * MDT switching threshold in Kbps (1-4294967)
  *   - Range: `1`-`4294967`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#ipv4_mdt_data_threshold Vrf#ipv4_mdt_data_threshold}
  */
  readonly ipv4MdtDataThreshold?: number;
  /**
  * MDT default group IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#ipv4_mdt_default_address Vrf#ipv4_mdt_default_address}
  */
  readonly ipv4MdtDefaultAddress?: string;
  /**
  * Enable BGP for MDT overlay signaling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#ipv4_mdt_overlay_use_bgp Vrf#ipv4_mdt_overlay_use_bgp}
  */
  readonly ipv4MdtOverlayUseBgp?: boolean | cdktf.IResolvable;
  /**
  * Enable Shortest path tree-only ASM mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#ipv4_mdt_overlay_use_bgp_spt_only Vrf#ipv4_mdt_overlay_use_bgp_spt_only}
  */
  readonly ipv4MdtOverlayUseBgpSptOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#ipv4_route_replicate Vrf#ipv4_route_replicate}
  */
  readonly ipv4RouteReplicate?: VrfIpv4RouteReplicate[] | cdktf.IResolvable;
  /**
  * Export Target-VPN community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#ipv4_route_target_export Vrf#ipv4_route_target_export}
  */
  readonly ipv4RouteTargetExport?: VrfIpv4RouteTargetExport[] | cdktf.IResolvable;
  /**
  * Export Target-VPN community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#ipv4_route_target_export_stitching Vrf#ipv4_route_target_export_stitching}
  */
  readonly ipv4RouteTargetExportStitching?: VrfIpv4RouteTargetExportStitching[] | cdktf.IResolvable;
  /**
  * Import Target-VPN community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#ipv4_route_target_import Vrf#ipv4_route_target_import}
  */
  readonly ipv4RouteTargetImport?: VrfIpv4RouteTargetImport[] | cdktf.IResolvable;
  /**
  * Import Target-VPN community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#ipv4_route_target_import_stitching Vrf#ipv4_route_target_import_stitching}
  */
  readonly ipv4RouteTargetImportStitching?: VrfIpv4RouteTargetImportStitching[] | cdktf.IResolvable;
  /**
  * IPv6 address of Rendezvous-point for anycast mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#ipv6_evpn_mcast_anycast Vrf#ipv6_evpn_mcast_anycast}
  */
  readonly ipv6EvpnMcastAnycast?: string;
  /**
  * EVPN multicast data MDT group address (IPv6)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#ipv6_evpn_mcast_data_address Vrf#ipv6_evpn_mcast_data_address}
  */
  readonly ipv6EvpnMcastDataAddress?: string;
  /**
  * EVPN multicast data MDT mask bits (IPv6)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#ipv6_evpn_mcast_data_mask_bits Vrf#ipv6_evpn_mcast_data_mask_bits}
  */
  readonly ipv6EvpnMcastDataMaskBits?: string;
  /**
  * EVPN multicast MDT default group address (IPv6)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#ipv6_evpn_mcast_mdt_default_address Vrf#ipv6_evpn_mcast_mdt_default_address}
  */
  readonly ipv6EvpnMcastMdtDefaultAddress?: string;
  /**
  * Route-map based VRF export for IPv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#ipv6_export_map Vrf#ipv6_export_map}
  */
  readonly ipv6ExportMap?: string;
  /**
  * Route-map based VRF import for IPv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#ipv6_import_map Vrf#ipv6_import_map}
  */
  readonly ipv6ImportMap?: string;
  /**
  * Export Target-VPN community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#ipv6_route_target_export Vrf#ipv6_route_target_export}
  */
  readonly ipv6RouteTargetExport?: VrfIpv6RouteTargetExport[] | cdktf.IResolvable;
  /**
  * Export Target-VPN community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#ipv6_route_target_export_stitching Vrf#ipv6_route_target_export_stitching}
  */
  readonly ipv6RouteTargetExportStitching?: VrfIpv6RouteTargetExportStitching[] | cdktf.IResolvable;
  /**
  * Import Target-VPN community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#ipv6_route_target_import Vrf#ipv6_route_target_import}
  */
  readonly ipv6RouteTargetImport?: VrfIpv6RouteTargetImport[] | cdktf.IResolvable;
  /**
  * Import Target-VPN community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#ipv6_route_target_import_stitching Vrf#ipv6_route_target_import_stitching}
  */
  readonly ipv6RouteTargetImportStitching?: VrfIpv6RouteTargetImportStitching[] | cdktf.IResolvable;
  /**
  * WORD;;VRF name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#name Vrf#name}
  */
  readonly name: string;
  /**
  * Specify Route Distinguisher
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#rd Vrf#rd}
  */
  readonly rd?: string;
  /**
  * Specify to enable auto Route Distinguisher
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#rd_auto Vrf#rd_auto}
  */
  readonly rdAuto?: boolean | cdktf.IResolvable;
  /**
  * Export Target-VPN community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#route_target_export Vrf#route_target_export}
  */
  readonly routeTargetExport?: VrfRouteTargetExport[] | cdktf.IResolvable;
  /**
  * Import Target-VPN community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#route_target_import Vrf#route_target_import}
  */
  readonly routeTargetImport?: VrfRouteTargetImport[] | cdktf.IResolvable;
  /**
  * Specify VNID for route-target auto generation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#vnids Vrf#vnids}
  */
  readonly vnids?: VrfVnids[] | cdktf.IResolvable;
  /**
  * Configure VPN ID in rfc2685 format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#vpn_id Vrf#vpn_id}
  */
  readonly vpnId?: string;
}
export interface VrfIpv4MdtDataMulticast {
  /**
  * Multicast group base address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#address Vrf#address}
  */
  readonly address: string;
  /**
  * Access-list for group range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#list Vrf#list}
  */
  readonly list?: string;
  /**
  * Wildcard mask for address range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#wildcard Vrf#wildcard}
  */
  readonly wildcard: string;
}

export function vrfIpv4MdtDataMulticastToTerraform(struct?: VrfIpv4MdtDataMulticast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    list: cdktf.stringToTerraform(struct!.list),
    wildcard: cdktf.stringToTerraform(struct!.wildcard),
  }
}


export function vrfIpv4MdtDataMulticastToHclTerraform(struct?: VrfIpv4MdtDataMulticast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    list: {
      value: cdktf.stringToHclTerraform(struct!.list),
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

export class VrfIpv4MdtDataMulticastOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfIpv4MdtDataMulticast | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._list !== undefined) {
      hasAnyValues = true;
      internalValueResult.list = this._list;
    }
    if (this._wildcard !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildcard = this._wildcard;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfIpv4MdtDataMulticast | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._list = undefined;
      this._wildcard = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._list = value.list;
      this._wildcard = value.wildcard;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // list - computed: false, optional: true, required: false
  private _list?: string; 
  public get list() {
    return this.getStringAttribute('list');
  }
  public set list(value: string) {
    this._list = value;
  }
  public resetList() {
    this._list = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listInput() {
    return this._list;
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

export class VrfIpv4MdtDataMulticastList extends cdktf.ComplexList {
  public internalValue? : VrfIpv4MdtDataMulticast[] | cdktf.IResolvable

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
  public get(index: number): VrfIpv4MdtDataMulticastOutputReference {
    return new VrfIpv4MdtDataMulticastOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfIpv4RouteReplicate {
  /**
  * Source VRF name or 'global'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#name Vrf#name}
  */
  readonly name: string;
  /**
  * All routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#unicast_all Vrf#unicast_all}
  */
  readonly unicastAll?: boolean | cdktf.IResolvable;
  /**
  * Route map reference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#unicast_all_route_map Vrf#unicast_all_route_map}
  */
  readonly unicastAllRouteMap?: string;
}

export function vrfIpv4RouteReplicateToTerraform(struct?: VrfIpv4RouteReplicate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    unicast_all: cdktf.booleanToTerraform(struct!.unicastAll),
    unicast_all_route_map: cdktf.stringToTerraform(struct!.unicastAllRouteMap),
  }
}


export function vrfIpv4RouteReplicateToHclTerraform(struct?: VrfIpv4RouteReplicate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unicast_all: {
      value: cdktf.booleanToHclTerraform(struct!.unicastAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unicast_all_route_map: {
      value: cdktf.stringToHclTerraform(struct!.unicastAllRouteMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfIpv4RouteReplicateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfIpv4RouteReplicate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._unicastAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.unicastAll = this._unicastAll;
    }
    if (this._unicastAllRouteMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.unicastAllRouteMap = this._unicastAllRouteMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfIpv4RouteReplicate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._unicastAll = undefined;
      this._unicastAllRouteMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._unicastAll = value.unicastAll;
      this._unicastAllRouteMap = value.unicastAllRouteMap;
    }
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

  // unicast_all - computed: false, optional: true, required: false
  private _unicastAll?: boolean | cdktf.IResolvable; 
  public get unicastAll() {
    return this.getBooleanAttribute('unicast_all');
  }
  public set unicastAll(value: boolean | cdktf.IResolvable) {
    this._unicastAll = value;
  }
  public resetUnicastAll() {
    this._unicastAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unicastAllInput() {
    return this._unicastAll;
  }

  // unicast_all_route_map - computed: false, optional: true, required: false
  private _unicastAllRouteMap?: string; 
  public get unicastAllRouteMap() {
    return this.getStringAttribute('unicast_all_route_map');
  }
  public set unicastAllRouteMap(value: string) {
    this._unicastAllRouteMap = value;
  }
  public resetUnicastAllRouteMap() {
    this._unicastAllRouteMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unicastAllRouteMapInput() {
    return this._unicastAllRouteMap;
  }
}

export class VrfIpv4RouteReplicateList extends cdktf.ComplexList {
  public internalValue? : VrfIpv4RouteReplicate[] | cdktf.IResolvable

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
  public get(index: number): VrfIpv4RouteReplicateOutputReference {
    return new VrfIpv4RouteReplicateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfIpv4RouteTargetExport {
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#value Vrf#value}
  */
  readonly value: string;
}

export function vrfIpv4RouteTargetExportToTerraform(struct?: VrfIpv4RouteTargetExport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vrfIpv4RouteTargetExportToHclTerraform(struct?: VrfIpv4RouteTargetExport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfIpv4RouteTargetExportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfIpv4RouteTargetExport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfIpv4RouteTargetExport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VrfIpv4RouteTargetExportList extends cdktf.ComplexList {
  public internalValue? : VrfIpv4RouteTargetExport[] | cdktf.IResolvable

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
  public get(index: number): VrfIpv4RouteTargetExportOutputReference {
    return new VrfIpv4RouteTargetExportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfIpv4RouteTargetExportStitching {
  /**
  * VXLAN route target set
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#stitching Vrf#stitching}
  */
  readonly stitching?: boolean | cdktf.IResolvable;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#value Vrf#value}
  */
  readonly value: string;
}

export function vrfIpv4RouteTargetExportStitchingToTerraform(struct?: VrfIpv4RouteTargetExportStitching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stitching: cdktf.booleanToTerraform(struct!.stitching),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vrfIpv4RouteTargetExportStitchingToHclTerraform(struct?: VrfIpv4RouteTargetExportStitching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stitching: {
      value: cdktf.booleanToHclTerraform(struct!.stitching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfIpv4RouteTargetExportStitchingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfIpv4RouteTargetExportStitching | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stitching !== undefined) {
      hasAnyValues = true;
      internalValueResult.stitching = this._stitching;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfIpv4RouteTargetExportStitching | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stitching = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stitching = value.stitching;
      this._value = value.value;
    }
  }

  // stitching - computed: true, optional: true, required: false
  private _stitching?: boolean | cdktf.IResolvable; 
  public get stitching() {
    return this.getBooleanAttribute('stitching');
  }
  public set stitching(value: boolean | cdktf.IResolvable) {
    this._stitching = value;
  }
  public resetStitching() {
    this._stitching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stitchingInput() {
    return this._stitching;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VrfIpv4RouteTargetExportStitchingList extends cdktf.ComplexList {
  public internalValue? : VrfIpv4RouteTargetExportStitching[] | cdktf.IResolvable

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
  public get(index: number): VrfIpv4RouteTargetExportStitchingOutputReference {
    return new VrfIpv4RouteTargetExportStitchingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfIpv4RouteTargetImport {
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#value Vrf#value}
  */
  readonly value: string;
}

export function vrfIpv4RouteTargetImportToTerraform(struct?: VrfIpv4RouteTargetImport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vrfIpv4RouteTargetImportToHclTerraform(struct?: VrfIpv4RouteTargetImport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfIpv4RouteTargetImportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfIpv4RouteTargetImport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfIpv4RouteTargetImport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VrfIpv4RouteTargetImportList extends cdktf.ComplexList {
  public internalValue? : VrfIpv4RouteTargetImport[] | cdktf.IResolvable

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
  public get(index: number): VrfIpv4RouteTargetImportOutputReference {
    return new VrfIpv4RouteTargetImportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfIpv4RouteTargetImportStitching {
  /**
  * VXLAN route target set
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#stitching Vrf#stitching}
  */
  readonly stitching?: boolean | cdktf.IResolvable;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#value Vrf#value}
  */
  readonly value: string;
}

export function vrfIpv4RouteTargetImportStitchingToTerraform(struct?: VrfIpv4RouteTargetImportStitching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stitching: cdktf.booleanToTerraform(struct!.stitching),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vrfIpv4RouteTargetImportStitchingToHclTerraform(struct?: VrfIpv4RouteTargetImportStitching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stitching: {
      value: cdktf.booleanToHclTerraform(struct!.stitching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfIpv4RouteTargetImportStitchingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfIpv4RouteTargetImportStitching | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stitching !== undefined) {
      hasAnyValues = true;
      internalValueResult.stitching = this._stitching;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfIpv4RouteTargetImportStitching | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stitching = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stitching = value.stitching;
      this._value = value.value;
    }
  }

  // stitching - computed: true, optional: true, required: false
  private _stitching?: boolean | cdktf.IResolvable; 
  public get stitching() {
    return this.getBooleanAttribute('stitching');
  }
  public set stitching(value: boolean | cdktf.IResolvable) {
    this._stitching = value;
  }
  public resetStitching() {
    this._stitching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stitchingInput() {
    return this._stitching;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VrfIpv4RouteTargetImportStitchingList extends cdktf.ComplexList {
  public internalValue? : VrfIpv4RouteTargetImportStitching[] | cdktf.IResolvable

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
  public get(index: number): VrfIpv4RouteTargetImportStitchingOutputReference {
    return new VrfIpv4RouteTargetImportStitchingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfIpv6RouteTargetExport {
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#value Vrf#value}
  */
  readonly value: string;
}

export function vrfIpv6RouteTargetExportToTerraform(struct?: VrfIpv6RouteTargetExport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vrfIpv6RouteTargetExportToHclTerraform(struct?: VrfIpv6RouteTargetExport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfIpv6RouteTargetExportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfIpv6RouteTargetExport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfIpv6RouteTargetExport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VrfIpv6RouteTargetExportList extends cdktf.ComplexList {
  public internalValue? : VrfIpv6RouteTargetExport[] | cdktf.IResolvable

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
  public get(index: number): VrfIpv6RouteTargetExportOutputReference {
    return new VrfIpv6RouteTargetExportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfIpv6RouteTargetExportStitching {
  /**
  * VXLAN route target set
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#stitching Vrf#stitching}
  */
  readonly stitching?: boolean | cdktf.IResolvable;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#value Vrf#value}
  */
  readonly value: string;
}

export function vrfIpv6RouteTargetExportStitchingToTerraform(struct?: VrfIpv6RouteTargetExportStitching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stitching: cdktf.booleanToTerraform(struct!.stitching),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vrfIpv6RouteTargetExportStitchingToHclTerraform(struct?: VrfIpv6RouteTargetExportStitching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stitching: {
      value: cdktf.booleanToHclTerraform(struct!.stitching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfIpv6RouteTargetExportStitchingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfIpv6RouteTargetExportStitching | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stitching !== undefined) {
      hasAnyValues = true;
      internalValueResult.stitching = this._stitching;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfIpv6RouteTargetExportStitching | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stitching = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stitching = value.stitching;
      this._value = value.value;
    }
  }

  // stitching - computed: true, optional: true, required: false
  private _stitching?: boolean | cdktf.IResolvable; 
  public get stitching() {
    return this.getBooleanAttribute('stitching');
  }
  public set stitching(value: boolean | cdktf.IResolvable) {
    this._stitching = value;
  }
  public resetStitching() {
    this._stitching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stitchingInput() {
    return this._stitching;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VrfIpv6RouteTargetExportStitchingList extends cdktf.ComplexList {
  public internalValue? : VrfIpv6RouteTargetExportStitching[] | cdktf.IResolvable

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
  public get(index: number): VrfIpv6RouteTargetExportStitchingOutputReference {
    return new VrfIpv6RouteTargetExportStitchingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfIpv6RouteTargetImport {
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#value Vrf#value}
  */
  readonly value: string;
}

export function vrfIpv6RouteTargetImportToTerraform(struct?: VrfIpv6RouteTargetImport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vrfIpv6RouteTargetImportToHclTerraform(struct?: VrfIpv6RouteTargetImport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfIpv6RouteTargetImportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfIpv6RouteTargetImport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfIpv6RouteTargetImport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VrfIpv6RouteTargetImportList extends cdktf.ComplexList {
  public internalValue? : VrfIpv6RouteTargetImport[] | cdktf.IResolvable

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
  public get(index: number): VrfIpv6RouteTargetImportOutputReference {
    return new VrfIpv6RouteTargetImportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfIpv6RouteTargetImportStitching {
  /**
  * VXLAN route target set
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#stitching Vrf#stitching}
  */
  readonly stitching?: boolean | cdktf.IResolvable;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#value Vrf#value}
  */
  readonly value: string;
}

export function vrfIpv6RouteTargetImportStitchingToTerraform(struct?: VrfIpv6RouteTargetImportStitching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stitching: cdktf.booleanToTerraform(struct!.stitching),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vrfIpv6RouteTargetImportStitchingToHclTerraform(struct?: VrfIpv6RouteTargetImportStitching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stitching: {
      value: cdktf.booleanToHclTerraform(struct!.stitching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfIpv6RouteTargetImportStitchingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfIpv6RouteTargetImportStitching | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stitching !== undefined) {
      hasAnyValues = true;
      internalValueResult.stitching = this._stitching;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfIpv6RouteTargetImportStitching | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stitching = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stitching = value.stitching;
      this._value = value.value;
    }
  }

  // stitching - computed: true, optional: true, required: false
  private _stitching?: boolean | cdktf.IResolvable; 
  public get stitching() {
    return this.getBooleanAttribute('stitching');
  }
  public set stitching(value: boolean | cdktf.IResolvable) {
    this._stitching = value;
  }
  public resetStitching() {
    this._stitching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stitchingInput() {
    return this._stitching;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VrfIpv6RouteTargetImportStitchingList extends cdktf.ComplexList {
  public internalValue? : VrfIpv6RouteTargetImportStitching[] | cdktf.IResolvable

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
  public get(index: number): VrfIpv6RouteTargetImportStitchingOutputReference {
    return new VrfIpv6RouteTargetImportStitchingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfRouteTargetExport {
  /**
  * VXLAN route target set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#stitching Vrf#stitching}
  */
  readonly stitching?: boolean | cdktf.IResolvable;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#value Vrf#value}
  */
  readonly value: string;
}

export function vrfRouteTargetExportToTerraform(struct?: VrfRouteTargetExport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stitching: cdktf.booleanToTerraform(struct!.stitching),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vrfRouteTargetExportToHclTerraform(struct?: VrfRouteTargetExport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stitching: {
      value: cdktf.booleanToHclTerraform(struct!.stitching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfRouteTargetExportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfRouteTargetExport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stitching !== undefined) {
      hasAnyValues = true;
      internalValueResult.stitching = this._stitching;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfRouteTargetExport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stitching = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stitching = value.stitching;
      this._value = value.value;
    }
  }

  // stitching - computed: false, optional: true, required: false
  private _stitching?: boolean | cdktf.IResolvable; 
  public get stitching() {
    return this.getBooleanAttribute('stitching');
  }
  public set stitching(value: boolean | cdktf.IResolvable) {
    this._stitching = value;
  }
  public resetStitching() {
    this._stitching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stitchingInput() {
    return this._stitching;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VrfRouteTargetExportList extends cdktf.ComplexList {
  public internalValue? : VrfRouteTargetExport[] | cdktf.IResolvable

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
  public get(index: number): VrfRouteTargetExportOutputReference {
    return new VrfRouteTargetExportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfRouteTargetImport {
  /**
  * VXLAN route target set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#stitching Vrf#stitching}
  */
  readonly stitching?: boolean | cdktf.IResolvable;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#value Vrf#value}
  */
  readonly value: string;
}

export function vrfRouteTargetImportToTerraform(struct?: VrfRouteTargetImport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stitching: cdktf.booleanToTerraform(struct!.stitching),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vrfRouteTargetImportToHclTerraform(struct?: VrfRouteTargetImport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stitching: {
      value: cdktf.booleanToHclTerraform(struct!.stitching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfRouteTargetImportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfRouteTargetImport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stitching !== undefined) {
      hasAnyValues = true;
      internalValueResult.stitching = this._stitching;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfRouteTargetImport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stitching = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stitching = value.stitching;
      this._value = value.value;
    }
  }

  // stitching - computed: false, optional: true, required: false
  private _stitching?: boolean | cdktf.IResolvable; 
  public get stitching() {
    return this.getBooleanAttribute('stitching');
  }
  public set stitching(value: boolean | cdktf.IResolvable) {
    this._stitching = value;
  }
  public resetStitching() {
    this._stitching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stitchingInput() {
    return this._stitching;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VrfRouteTargetImportList extends cdktf.ComplexList {
  public internalValue? : VrfRouteTargetImport[] | cdktf.IResolvable

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
  public get(index: number): VrfRouteTargetImportOutputReference {
    return new VrfRouteTargetImportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfVnidsEvpnInstanceVnis {
  /**
  * Core vlan number to associate with VNI (explicit VNI mode)
  *   - Range: `1`-`4094`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#core_vlan Vrf#core_vlan}
  */
  readonly coreVlan?: number;
  /**
  * The NVE L3 VNI number
  *   - Range: `4096`-`16777215`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#vni Vrf#vni}
  */
  readonly vni: number;
}

export function vrfVnidsEvpnInstanceVnisToTerraform(struct?: VrfVnidsEvpnInstanceVnis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    core_vlan: cdktf.numberToTerraform(struct!.coreVlan),
    vni: cdktf.numberToTerraform(struct!.vni),
  }
}


export function vrfVnidsEvpnInstanceVnisToHclTerraform(struct?: VrfVnidsEvpnInstanceVnis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    core_vlan: {
      value: cdktf.numberToHclTerraform(struct!.coreVlan),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfVnidsEvpnInstanceVnisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfVnidsEvpnInstanceVnis | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coreVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreVlan = this._coreVlan;
    }
    if (this._vni !== undefined) {
      hasAnyValues = true;
      internalValueResult.vni = this._vni;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfVnidsEvpnInstanceVnis | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._coreVlan = undefined;
      this._vni = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._coreVlan = value.coreVlan;
      this._vni = value.vni;
    }
  }

  // core_vlan - computed: false, optional: true, required: false
  private _coreVlan?: number; 
  public get coreVlan() {
    return this.getNumberAttribute('core_vlan');
  }
  public set coreVlan(value: number) {
    this._coreVlan = value;
  }
  public resetCoreVlan() {
    this._coreVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreVlanInput() {
    return this._coreVlan;
  }

  // vni - computed: false, optional: false, required: true
  private _vni?: number; 
  public get vni() {
    return this.getNumberAttribute('vni');
  }
  public set vni(value: number) {
    this._vni = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vniInput() {
    return this._vni;
  }
}

export class VrfVnidsEvpnInstanceVnisList extends cdktf.ComplexList {
  public internalValue? : VrfVnidsEvpnInstanceVnis[] | cdktf.IResolvable

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
  public get(index: number): VrfVnidsEvpnInstanceVnisOutputReference {
    return new VrfVnidsEvpnInstanceVnisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfVnids {
  /**
  * Specify explicit NVE L3 VNI number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#evpn_instance_vnis Vrf#evpn_instance_vnis}
  */
  readonly evpnInstanceVnis?: VrfVnidsEvpnInstanceVnis[] | cdktf.IResolvable;
  /**
  * VNID value for route-target auto generation
  *   - Range: `1`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#vnid Vrf#vnid}
  */
  readonly vnid: number;
}

export function vrfVnidsToTerraform(struct?: VrfVnids | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evpn_instance_vnis: cdktf.listMapper(vrfVnidsEvpnInstanceVnisToTerraform, false)(struct!.evpnInstanceVnis),
    vnid: cdktf.numberToTerraform(struct!.vnid),
  }
}


export function vrfVnidsToHclTerraform(struct?: VrfVnids | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    evpn_instance_vnis: {
      value: cdktf.listMapperHcl(vrfVnidsEvpnInstanceVnisToHclTerraform, false)(struct!.evpnInstanceVnis),
      isBlock: true,
      type: "list",
      storageClassType: "VrfVnidsEvpnInstanceVnisList",
    },
    vnid: {
      value: cdktf.numberToHclTerraform(struct!.vnid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfVnidsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfVnids | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evpnInstanceVnis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evpnInstanceVnis = this._evpnInstanceVnis?.internalValue;
    }
    if (this._vnid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnid = this._vnid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfVnids | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evpnInstanceVnis.internalValue = undefined;
      this._vnid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evpnInstanceVnis.internalValue = value.evpnInstanceVnis;
      this._vnid = value.vnid;
    }
  }

  // evpn_instance_vnis - computed: false, optional: true, required: false
  private _evpnInstanceVnis = new VrfVnidsEvpnInstanceVnisList(this, "evpn_instance_vnis", false);
  public get evpnInstanceVnis() {
    return this._evpnInstanceVnis;
  }
  public putEvpnInstanceVnis(value: VrfVnidsEvpnInstanceVnis[] | cdktf.IResolvable) {
    this._evpnInstanceVnis.internalValue = value;
  }
  public resetEvpnInstanceVnis() {
    this._evpnInstanceVnis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evpnInstanceVnisInput() {
    return this._evpnInstanceVnis.internalValue;
  }

  // vnid - computed: false, optional: false, required: true
  private _vnid?: number; 
  public get vnid() {
    return this.getNumberAttribute('vnid');
  }
  public set vnid(value: number) {
    this._vnid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vnidInput() {
    return this._vnid;
  }
}

export class VrfVnidsList extends cdktf.ComplexList {
  public internalValue? : VrfVnids[] | cdktf.IResolvable

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
  public get(index: number): VrfVnidsOutputReference {
    return new VrfVnidsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf iosxe_vrf}
*/
export class Vrf extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_vrf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vrf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vrf to import
  * @param importFromId The id of the existing Vrf that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vrf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_vrf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vrf iosxe_vrf} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VrfConfig
  */
  public constructor(scope: Construct, id: string, config: VrfConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_vrf',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.14.4',
        providerVersionConstraint: '0.14.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addressFamilyIpv4 = config.addressFamilyIpv4;
    this._addressFamilyIpv6 = config.addressFamilyIpv6;
    this._deleteMode = config.deleteMode;
    this._description = config.description;
    this._device = config.device;
    this._ipv4EvpnMcastAnycast = config.ipv4EvpnMcastAnycast;
    this._ipv4EvpnMcastDataAddress = config.ipv4EvpnMcastDataAddress;
    this._ipv4EvpnMcastDataMaskBits = config.ipv4EvpnMcastDataMaskBits;
    this._ipv4EvpnMcastMdtDefaultAddress = config.ipv4EvpnMcastMdtDefaultAddress;
    this._ipv4ExportMap = config.ipv4ExportMap;
    this._ipv4ImportMap = config.ipv4ImportMap;
    this._ipv4MdtAutoDiscoveryInterworkingVxlanPim = config.ipv4MdtAutoDiscoveryInterworkingVxlanPim;
    this._ipv4MdtAutoDiscoveryInterworkingVxlanPimInterAs = config.ipv4MdtAutoDiscoveryInterworkingVxlanPimInterAs;
    this._ipv4MdtAutoDiscoveryVxlan = config.ipv4MdtAutoDiscoveryVxlan;
    this._ipv4MdtAutoDiscoveryVxlanInterAs = config.ipv4MdtAutoDiscoveryVxlanInterAs;
    this._ipv4MdtDataMulticast.internalValue = config.ipv4MdtDataMulticast;
    this._ipv4MdtDataThreshold = config.ipv4MdtDataThreshold;
    this._ipv4MdtDefaultAddress = config.ipv4MdtDefaultAddress;
    this._ipv4MdtOverlayUseBgp = config.ipv4MdtOverlayUseBgp;
    this._ipv4MdtOverlayUseBgpSptOnly = config.ipv4MdtOverlayUseBgpSptOnly;
    this._ipv4RouteReplicate.internalValue = config.ipv4RouteReplicate;
    this._ipv4RouteTargetExport.internalValue = config.ipv4RouteTargetExport;
    this._ipv4RouteTargetExportStitching.internalValue = config.ipv4RouteTargetExportStitching;
    this._ipv4RouteTargetImport.internalValue = config.ipv4RouteTargetImport;
    this._ipv4RouteTargetImportStitching.internalValue = config.ipv4RouteTargetImportStitching;
    this._ipv6EvpnMcastAnycast = config.ipv6EvpnMcastAnycast;
    this._ipv6EvpnMcastDataAddress = config.ipv6EvpnMcastDataAddress;
    this._ipv6EvpnMcastDataMaskBits = config.ipv6EvpnMcastDataMaskBits;
    this._ipv6EvpnMcastMdtDefaultAddress = config.ipv6EvpnMcastMdtDefaultAddress;
    this._ipv6ExportMap = config.ipv6ExportMap;
    this._ipv6ImportMap = config.ipv6ImportMap;
    this._ipv6RouteTargetExport.internalValue = config.ipv6RouteTargetExport;
    this._ipv6RouteTargetExportStitching.internalValue = config.ipv6RouteTargetExportStitching;
    this._ipv6RouteTargetImport.internalValue = config.ipv6RouteTargetImport;
    this._ipv6RouteTargetImportStitching.internalValue = config.ipv6RouteTargetImportStitching;
    this._name = config.name;
    this._rd = config.rd;
    this._rdAuto = config.rdAuto;
    this._routeTargetExport.internalValue = config.routeTargetExport;
    this._routeTargetImport.internalValue = config.routeTargetImport;
    this._vnids.internalValue = config.vnids;
    this._vpnId = config.vpnId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_family_ipv4 - computed: false, optional: true, required: false
  private _addressFamilyIpv4?: boolean | cdktf.IResolvable; 
  public get addressFamilyIpv4() {
    return this.getBooleanAttribute('address_family_ipv4');
  }
  public set addressFamilyIpv4(value: boolean | cdktf.IResolvable) {
    this._addressFamilyIpv4 = value;
  }
  public resetAddressFamilyIpv4() {
    this._addressFamilyIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFamilyIpv4Input() {
    return this._addressFamilyIpv4;
  }

  // address_family_ipv6 - computed: false, optional: true, required: false
  private _addressFamilyIpv6?: boolean | cdktf.IResolvable; 
  public get addressFamilyIpv6() {
    return this.getBooleanAttribute('address_family_ipv6');
  }
  public set addressFamilyIpv6(value: boolean | cdktf.IResolvable) {
    this._addressFamilyIpv6 = value;
  }
  public resetAddressFamilyIpv6() {
    this._addressFamilyIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFamilyIpv6Input() {
    return this._addressFamilyIpv6;
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

  // ipv4_evpn_mcast_anycast - computed: false, optional: true, required: false
  private _ipv4EvpnMcastAnycast?: string; 
  public get ipv4EvpnMcastAnycast() {
    return this.getStringAttribute('ipv4_evpn_mcast_anycast');
  }
  public set ipv4EvpnMcastAnycast(value: string) {
    this._ipv4EvpnMcastAnycast = value;
  }
  public resetIpv4EvpnMcastAnycast() {
    this._ipv4EvpnMcastAnycast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4EvpnMcastAnycastInput() {
    return this._ipv4EvpnMcastAnycast;
  }

  // ipv4_evpn_mcast_data_address - computed: false, optional: true, required: false
  private _ipv4EvpnMcastDataAddress?: string; 
  public get ipv4EvpnMcastDataAddress() {
    return this.getStringAttribute('ipv4_evpn_mcast_data_address');
  }
  public set ipv4EvpnMcastDataAddress(value: string) {
    this._ipv4EvpnMcastDataAddress = value;
  }
  public resetIpv4EvpnMcastDataAddress() {
    this._ipv4EvpnMcastDataAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4EvpnMcastDataAddressInput() {
    return this._ipv4EvpnMcastDataAddress;
  }

  // ipv4_evpn_mcast_data_mask_bits - computed: false, optional: true, required: false
  private _ipv4EvpnMcastDataMaskBits?: string; 
  public get ipv4EvpnMcastDataMaskBits() {
    return this.getStringAttribute('ipv4_evpn_mcast_data_mask_bits');
  }
  public set ipv4EvpnMcastDataMaskBits(value: string) {
    this._ipv4EvpnMcastDataMaskBits = value;
  }
  public resetIpv4EvpnMcastDataMaskBits() {
    this._ipv4EvpnMcastDataMaskBits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4EvpnMcastDataMaskBitsInput() {
    return this._ipv4EvpnMcastDataMaskBits;
  }

  // ipv4_evpn_mcast_mdt_default_address - computed: false, optional: true, required: false
  private _ipv4EvpnMcastMdtDefaultAddress?: string; 
  public get ipv4EvpnMcastMdtDefaultAddress() {
    return this.getStringAttribute('ipv4_evpn_mcast_mdt_default_address');
  }
  public set ipv4EvpnMcastMdtDefaultAddress(value: string) {
    this._ipv4EvpnMcastMdtDefaultAddress = value;
  }
  public resetIpv4EvpnMcastMdtDefaultAddress() {
    this._ipv4EvpnMcastMdtDefaultAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4EvpnMcastMdtDefaultAddressInput() {
    return this._ipv4EvpnMcastMdtDefaultAddress;
  }

  // ipv4_export_map - computed: false, optional: true, required: false
  private _ipv4ExportMap?: string; 
  public get ipv4ExportMap() {
    return this.getStringAttribute('ipv4_export_map');
  }
  public set ipv4ExportMap(value: string) {
    this._ipv4ExportMap = value;
  }
  public resetIpv4ExportMap() {
    this._ipv4ExportMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ExportMapInput() {
    return this._ipv4ExportMap;
  }

  // ipv4_import_map - computed: false, optional: true, required: false
  private _ipv4ImportMap?: string; 
  public get ipv4ImportMap() {
    return this.getStringAttribute('ipv4_import_map');
  }
  public set ipv4ImportMap(value: string) {
    this._ipv4ImportMap = value;
  }
  public resetIpv4ImportMap() {
    this._ipv4ImportMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ImportMapInput() {
    return this._ipv4ImportMap;
  }

  // ipv4_mdt_auto_discovery_interworking_vxlan_pim - computed: false, optional: true, required: false
  private _ipv4MdtAutoDiscoveryInterworkingVxlanPim?: boolean | cdktf.IResolvable; 
  public get ipv4MdtAutoDiscoveryInterworkingVxlanPim() {
    return this.getBooleanAttribute('ipv4_mdt_auto_discovery_interworking_vxlan_pim');
  }
  public set ipv4MdtAutoDiscoveryInterworkingVxlanPim(value: boolean | cdktf.IResolvable) {
    this._ipv4MdtAutoDiscoveryInterworkingVxlanPim = value;
  }
  public resetIpv4MdtAutoDiscoveryInterworkingVxlanPim() {
    this._ipv4MdtAutoDiscoveryInterworkingVxlanPim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4MdtAutoDiscoveryInterworkingVxlanPimInput() {
    return this._ipv4MdtAutoDiscoveryInterworkingVxlanPim;
  }

  // ipv4_mdt_auto_discovery_interworking_vxlan_pim_inter_as - computed: false, optional: true, required: false
  private _ipv4MdtAutoDiscoveryInterworkingVxlanPimInterAs?: boolean | cdktf.IResolvable; 
  public get ipv4MdtAutoDiscoveryInterworkingVxlanPimInterAs() {
    return this.getBooleanAttribute('ipv4_mdt_auto_discovery_interworking_vxlan_pim_inter_as');
  }
  public set ipv4MdtAutoDiscoveryInterworkingVxlanPimInterAs(value: boolean | cdktf.IResolvable) {
    this._ipv4MdtAutoDiscoveryInterworkingVxlanPimInterAs = value;
  }
  public resetIpv4MdtAutoDiscoveryInterworkingVxlanPimInterAs() {
    this._ipv4MdtAutoDiscoveryInterworkingVxlanPimInterAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4MdtAutoDiscoveryInterworkingVxlanPimInterAsInput() {
    return this._ipv4MdtAutoDiscoveryInterworkingVxlanPimInterAs;
  }

  // ipv4_mdt_auto_discovery_vxlan - computed: false, optional: true, required: false
  private _ipv4MdtAutoDiscoveryVxlan?: boolean | cdktf.IResolvable; 
  public get ipv4MdtAutoDiscoveryVxlan() {
    return this.getBooleanAttribute('ipv4_mdt_auto_discovery_vxlan');
  }
  public set ipv4MdtAutoDiscoveryVxlan(value: boolean | cdktf.IResolvable) {
    this._ipv4MdtAutoDiscoveryVxlan = value;
  }
  public resetIpv4MdtAutoDiscoveryVxlan() {
    this._ipv4MdtAutoDiscoveryVxlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4MdtAutoDiscoveryVxlanInput() {
    return this._ipv4MdtAutoDiscoveryVxlan;
  }

  // ipv4_mdt_auto_discovery_vxlan_inter_as - computed: false, optional: true, required: false
  private _ipv4MdtAutoDiscoveryVxlanInterAs?: boolean | cdktf.IResolvable; 
  public get ipv4MdtAutoDiscoveryVxlanInterAs() {
    return this.getBooleanAttribute('ipv4_mdt_auto_discovery_vxlan_inter_as');
  }
  public set ipv4MdtAutoDiscoveryVxlanInterAs(value: boolean | cdktf.IResolvable) {
    this._ipv4MdtAutoDiscoveryVxlanInterAs = value;
  }
  public resetIpv4MdtAutoDiscoveryVxlanInterAs() {
    this._ipv4MdtAutoDiscoveryVxlanInterAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4MdtAutoDiscoveryVxlanInterAsInput() {
    return this._ipv4MdtAutoDiscoveryVxlanInterAs;
  }

  // ipv4_mdt_data_multicast - computed: false, optional: true, required: false
  private _ipv4MdtDataMulticast = new VrfIpv4MdtDataMulticastList(this, "ipv4_mdt_data_multicast", false);
  public get ipv4MdtDataMulticast() {
    return this._ipv4MdtDataMulticast;
  }
  public putIpv4MdtDataMulticast(value: VrfIpv4MdtDataMulticast[] | cdktf.IResolvable) {
    this._ipv4MdtDataMulticast.internalValue = value;
  }
  public resetIpv4MdtDataMulticast() {
    this._ipv4MdtDataMulticast.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4MdtDataMulticastInput() {
    return this._ipv4MdtDataMulticast.internalValue;
  }

  // ipv4_mdt_data_threshold - computed: false, optional: true, required: false
  private _ipv4MdtDataThreshold?: number; 
  public get ipv4MdtDataThreshold() {
    return this.getNumberAttribute('ipv4_mdt_data_threshold');
  }
  public set ipv4MdtDataThreshold(value: number) {
    this._ipv4MdtDataThreshold = value;
  }
  public resetIpv4MdtDataThreshold() {
    this._ipv4MdtDataThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4MdtDataThresholdInput() {
    return this._ipv4MdtDataThreshold;
  }

  // ipv4_mdt_default_address - computed: false, optional: true, required: false
  private _ipv4MdtDefaultAddress?: string; 
  public get ipv4MdtDefaultAddress() {
    return this.getStringAttribute('ipv4_mdt_default_address');
  }
  public set ipv4MdtDefaultAddress(value: string) {
    this._ipv4MdtDefaultAddress = value;
  }
  public resetIpv4MdtDefaultAddress() {
    this._ipv4MdtDefaultAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4MdtDefaultAddressInput() {
    return this._ipv4MdtDefaultAddress;
  }

  // ipv4_mdt_overlay_use_bgp - computed: false, optional: true, required: false
  private _ipv4MdtOverlayUseBgp?: boolean | cdktf.IResolvable; 
  public get ipv4MdtOverlayUseBgp() {
    return this.getBooleanAttribute('ipv4_mdt_overlay_use_bgp');
  }
  public set ipv4MdtOverlayUseBgp(value: boolean | cdktf.IResolvable) {
    this._ipv4MdtOverlayUseBgp = value;
  }
  public resetIpv4MdtOverlayUseBgp() {
    this._ipv4MdtOverlayUseBgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4MdtOverlayUseBgpInput() {
    return this._ipv4MdtOverlayUseBgp;
  }

  // ipv4_mdt_overlay_use_bgp_spt_only - computed: false, optional: true, required: false
  private _ipv4MdtOverlayUseBgpSptOnly?: boolean | cdktf.IResolvable; 
  public get ipv4MdtOverlayUseBgpSptOnly() {
    return this.getBooleanAttribute('ipv4_mdt_overlay_use_bgp_spt_only');
  }
  public set ipv4MdtOverlayUseBgpSptOnly(value: boolean | cdktf.IResolvable) {
    this._ipv4MdtOverlayUseBgpSptOnly = value;
  }
  public resetIpv4MdtOverlayUseBgpSptOnly() {
    this._ipv4MdtOverlayUseBgpSptOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4MdtOverlayUseBgpSptOnlyInput() {
    return this._ipv4MdtOverlayUseBgpSptOnly;
  }

  // ipv4_route_replicate - computed: false, optional: true, required: false
  private _ipv4RouteReplicate = new VrfIpv4RouteReplicateList(this, "ipv4_route_replicate", false);
  public get ipv4RouteReplicate() {
    return this._ipv4RouteReplicate;
  }
  public putIpv4RouteReplicate(value: VrfIpv4RouteReplicate[] | cdktf.IResolvable) {
    this._ipv4RouteReplicate.internalValue = value;
  }
  public resetIpv4RouteReplicate() {
    this._ipv4RouteReplicate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4RouteReplicateInput() {
    return this._ipv4RouteReplicate.internalValue;
  }

  // ipv4_route_target_export - computed: false, optional: true, required: false
  private _ipv4RouteTargetExport = new VrfIpv4RouteTargetExportList(this, "ipv4_route_target_export", true);
  public get ipv4RouteTargetExport() {
    return this._ipv4RouteTargetExport;
  }
  public putIpv4RouteTargetExport(value: VrfIpv4RouteTargetExport[] | cdktf.IResolvable) {
    this._ipv4RouteTargetExport.internalValue = value;
  }
  public resetIpv4RouteTargetExport() {
    this._ipv4RouteTargetExport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4RouteTargetExportInput() {
    return this._ipv4RouteTargetExport.internalValue;
  }

  // ipv4_route_target_export_stitching - computed: false, optional: true, required: false
  private _ipv4RouteTargetExportStitching = new VrfIpv4RouteTargetExportStitchingList(this, "ipv4_route_target_export_stitching", true);
  public get ipv4RouteTargetExportStitching() {
    return this._ipv4RouteTargetExportStitching;
  }
  public putIpv4RouteTargetExportStitching(value: VrfIpv4RouteTargetExportStitching[] | cdktf.IResolvable) {
    this._ipv4RouteTargetExportStitching.internalValue = value;
  }
  public resetIpv4RouteTargetExportStitching() {
    this._ipv4RouteTargetExportStitching.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4RouteTargetExportStitchingInput() {
    return this._ipv4RouteTargetExportStitching.internalValue;
  }

  // ipv4_route_target_import - computed: false, optional: true, required: false
  private _ipv4RouteTargetImport = new VrfIpv4RouteTargetImportList(this, "ipv4_route_target_import", true);
  public get ipv4RouteTargetImport() {
    return this._ipv4RouteTargetImport;
  }
  public putIpv4RouteTargetImport(value: VrfIpv4RouteTargetImport[] | cdktf.IResolvable) {
    this._ipv4RouteTargetImport.internalValue = value;
  }
  public resetIpv4RouteTargetImport() {
    this._ipv4RouteTargetImport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4RouteTargetImportInput() {
    return this._ipv4RouteTargetImport.internalValue;
  }

  // ipv4_route_target_import_stitching - computed: false, optional: true, required: false
  private _ipv4RouteTargetImportStitching = new VrfIpv4RouteTargetImportStitchingList(this, "ipv4_route_target_import_stitching", true);
  public get ipv4RouteTargetImportStitching() {
    return this._ipv4RouteTargetImportStitching;
  }
  public putIpv4RouteTargetImportStitching(value: VrfIpv4RouteTargetImportStitching[] | cdktf.IResolvable) {
    this._ipv4RouteTargetImportStitching.internalValue = value;
  }
  public resetIpv4RouteTargetImportStitching() {
    this._ipv4RouteTargetImportStitching.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4RouteTargetImportStitchingInput() {
    return this._ipv4RouteTargetImportStitching.internalValue;
  }

  // ipv6_evpn_mcast_anycast - computed: false, optional: true, required: false
  private _ipv6EvpnMcastAnycast?: string; 
  public get ipv6EvpnMcastAnycast() {
    return this.getStringAttribute('ipv6_evpn_mcast_anycast');
  }
  public set ipv6EvpnMcastAnycast(value: string) {
    this._ipv6EvpnMcastAnycast = value;
  }
  public resetIpv6EvpnMcastAnycast() {
    this._ipv6EvpnMcastAnycast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EvpnMcastAnycastInput() {
    return this._ipv6EvpnMcastAnycast;
  }

  // ipv6_evpn_mcast_data_address - computed: false, optional: true, required: false
  private _ipv6EvpnMcastDataAddress?: string; 
  public get ipv6EvpnMcastDataAddress() {
    return this.getStringAttribute('ipv6_evpn_mcast_data_address');
  }
  public set ipv6EvpnMcastDataAddress(value: string) {
    this._ipv6EvpnMcastDataAddress = value;
  }
  public resetIpv6EvpnMcastDataAddress() {
    this._ipv6EvpnMcastDataAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EvpnMcastDataAddressInput() {
    return this._ipv6EvpnMcastDataAddress;
  }

  // ipv6_evpn_mcast_data_mask_bits - computed: false, optional: true, required: false
  private _ipv6EvpnMcastDataMaskBits?: string; 
  public get ipv6EvpnMcastDataMaskBits() {
    return this.getStringAttribute('ipv6_evpn_mcast_data_mask_bits');
  }
  public set ipv6EvpnMcastDataMaskBits(value: string) {
    this._ipv6EvpnMcastDataMaskBits = value;
  }
  public resetIpv6EvpnMcastDataMaskBits() {
    this._ipv6EvpnMcastDataMaskBits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EvpnMcastDataMaskBitsInput() {
    return this._ipv6EvpnMcastDataMaskBits;
  }

  // ipv6_evpn_mcast_mdt_default_address - computed: false, optional: true, required: false
  private _ipv6EvpnMcastMdtDefaultAddress?: string; 
  public get ipv6EvpnMcastMdtDefaultAddress() {
    return this.getStringAttribute('ipv6_evpn_mcast_mdt_default_address');
  }
  public set ipv6EvpnMcastMdtDefaultAddress(value: string) {
    this._ipv6EvpnMcastMdtDefaultAddress = value;
  }
  public resetIpv6EvpnMcastMdtDefaultAddress() {
    this._ipv6EvpnMcastMdtDefaultAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EvpnMcastMdtDefaultAddressInput() {
    return this._ipv6EvpnMcastMdtDefaultAddress;
  }

  // ipv6_export_map - computed: false, optional: true, required: false
  private _ipv6ExportMap?: string; 
  public get ipv6ExportMap() {
    return this.getStringAttribute('ipv6_export_map');
  }
  public set ipv6ExportMap(value: string) {
    this._ipv6ExportMap = value;
  }
  public resetIpv6ExportMap() {
    this._ipv6ExportMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ExportMapInput() {
    return this._ipv6ExportMap;
  }

  // ipv6_import_map - computed: false, optional: true, required: false
  private _ipv6ImportMap?: string; 
  public get ipv6ImportMap() {
    return this.getStringAttribute('ipv6_import_map');
  }
  public set ipv6ImportMap(value: string) {
    this._ipv6ImportMap = value;
  }
  public resetIpv6ImportMap() {
    this._ipv6ImportMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ImportMapInput() {
    return this._ipv6ImportMap;
  }

  // ipv6_route_target_export - computed: false, optional: true, required: false
  private _ipv6RouteTargetExport = new VrfIpv6RouteTargetExportList(this, "ipv6_route_target_export", true);
  public get ipv6RouteTargetExport() {
    return this._ipv6RouteTargetExport;
  }
  public putIpv6RouteTargetExport(value: VrfIpv6RouteTargetExport[] | cdktf.IResolvable) {
    this._ipv6RouteTargetExport.internalValue = value;
  }
  public resetIpv6RouteTargetExport() {
    this._ipv6RouteTargetExport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6RouteTargetExportInput() {
    return this._ipv6RouteTargetExport.internalValue;
  }

  // ipv6_route_target_export_stitching - computed: false, optional: true, required: false
  private _ipv6RouteTargetExportStitching = new VrfIpv6RouteTargetExportStitchingList(this, "ipv6_route_target_export_stitching", true);
  public get ipv6RouteTargetExportStitching() {
    return this._ipv6RouteTargetExportStitching;
  }
  public putIpv6RouteTargetExportStitching(value: VrfIpv6RouteTargetExportStitching[] | cdktf.IResolvable) {
    this._ipv6RouteTargetExportStitching.internalValue = value;
  }
  public resetIpv6RouteTargetExportStitching() {
    this._ipv6RouteTargetExportStitching.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6RouteTargetExportStitchingInput() {
    return this._ipv6RouteTargetExportStitching.internalValue;
  }

  // ipv6_route_target_import - computed: false, optional: true, required: false
  private _ipv6RouteTargetImport = new VrfIpv6RouteTargetImportList(this, "ipv6_route_target_import", true);
  public get ipv6RouteTargetImport() {
    return this._ipv6RouteTargetImport;
  }
  public putIpv6RouteTargetImport(value: VrfIpv6RouteTargetImport[] | cdktf.IResolvable) {
    this._ipv6RouteTargetImport.internalValue = value;
  }
  public resetIpv6RouteTargetImport() {
    this._ipv6RouteTargetImport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6RouteTargetImportInput() {
    return this._ipv6RouteTargetImport.internalValue;
  }

  // ipv6_route_target_import_stitching - computed: false, optional: true, required: false
  private _ipv6RouteTargetImportStitching = new VrfIpv6RouteTargetImportStitchingList(this, "ipv6_route_target_import_stitching", true);
  public get ipv6RouteTargetImportStitching() {
    return this._ipv6RouteTargetImportStitching;
  }
  public putIpv6RouteTargetImportStitching(value: VrfIpv6RouteTargetImportStitching[] | cdktf.IResolvable) {
    this._ipv6RouteTargetImportStitching.internalValue = value;
  }
  public resetIpv6RouteTargetImportStitching() {
    this._ipv6RouteTargetImportStitching.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6RouteTargetImportStitchingInput() {
    return this._ipv6RouteTargetImportStitching.internalValue;
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

  // rd - computed: false, optional: true, required: false
  private _rd?: string; 
  public get rd() {
    return this.getStringAttribute('rd');
  }
  public set rd(value: string) {
    this._rd = value;
  }
  public resetRd() {
    this._rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdInput() {
    return this._rd;
  }

  // rd_auto - computed: false, optional: true, required: false
  private _rdAuto?: boolean | cdktf.IResolvable; 
  public get rdAuto() {
    return this.getBooleanAttribute('rd_auto');
  }
  public set rdAuto(value: boolean | cdktf.IResolvable) {
    this._rdAuto = value;
  }
  public resetRdAuto() {
    this._rdAuto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdAutoInput() {
    return this._rdAuto;
  }

  // route_target_export - computed: false, optional: true, required: false
  private _routeTargetExport = new VrfRouteTargetExportList(this, "route_target_export", true);
  public get routeTargetExport() {
    return this._routeTargetExport;
  }
  public putRouteTargetExport(value: VrfRouteTargetExport[] | cdktf.IResolvable) {
    this._routeTargetExport.internalValue = value;
  }
  public resetRouteTargetExport() {
    this._routeTargetExport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTargetExportInput() {
    return this._routeTargetExport.internalValue;
  }

  // route_target_import - computed: false, optional: true, required: false
  private _routeTargetImport = new VrfRouteTargetImportList(this, "route_target_import", true);
  public get routeTargetImport() {
    return this._routeTargetImport;
  }
  public putRouteTargetImport(value: VrfRouteTargetImport[] | cdktf.IResolvable) {
    this._routeTargetImport.internalValue = value;
  }
  public resetRouteTargetImport() {
    this._routeTargetImport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTargetImportInput() {
    return this._routeTargetImport.internalValue;
  }

  // vnids - computed: false, optional: true, required: false
  private _vnids = new VrfVnidsList(this, "vnids", false);
  public get vnids() {
    return this._vnids;
  }
  public putVnids(value: VrfVnids[] | cdktf.IResolvable) {
    this._vnids.internalValue = value;
  }
  public resetVnids() {
    this._vnids.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnidsInput() {
    return this._vnids.internalValue;
  }

  // vpn_id - computed: false, optional: true, required: false
  private _vpnId?: string; 
  public get vpnId() {
    return this.getStringAttribute('vpn_id');
  }
  public set vpnId(value: string) {
    this._vpnId = value;
  }
  public resetVpnId() {
    this._vpnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIdInput() {
    return this._vpnId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_family_ipv4: cdktf.booleanToTerraform(this._addressFamilyIpv4),
      address_family_ipv6: cdktf.booleanToTerraform(this._addressFamilyIpv6),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      description: cdktf.stringToTerraform(this._description),
      device: cdktf.stringToTerraform(this._device),
      ipv4_evpn_mcast_anycast: cdktf.stringToTerraform(this._ipv4EvpnMcastAnycast),
      ipv4_evpn_mcast_data_address: cdktf.stringToTerraform(this._ipv4EvpnMcastDataAddress),
      ipv4_evpn_mcast_data_mask_bits: cdktf.stringToTerraform(this._ipv4EvpnMcastDataMaskBits),
      ipv4_evpn_mcast_mdt_default_address: cdktf.stringToTerraform(this._ipv4EvpnMcastMdtDefaultAddress),
      ipv4_export_map: cdktf.stringToTerraform(this._ipv4ExportMap),
      ipv4_import_map: cdktf.stringToTerraform(this._ipv4ImportMap),
      ipv4_mdt_auto_discovery_interworking_vxlan_pim: cdktf.booleanToTerraform(this._ipv4MdtAutoDiscoveryInterworkingVxlanPim),
      ipv4_mdt_auto_discovery_interworking_vxlan_pim_inter_as: cdktf.booleanToTerraform(this._ipv4MdtAutoDiscoveryInterworkingVxlanPimInterAs),
      ipv4_mdt_auto_discovery_vxlan: cdktf.booleanToTerraform(this._ipv4MdtAutoDiscoveryVxlan),
      ipv4_mdt_auto_discovery_vxlan_inter_as: cdktf.booleanToTerraform(this._ipv4MdtAutoDiscoveryVxlanInterAs),
      ipv4_mdt_data_multicast: cdktf.listMapper(vrfIpv4MdtDataMulticastToTerraform, false)(this._ipv4MdtDataMulticast.internalValue),
      ipv4_mdt_data_threshold: cdktf.numberToTerraform(this._ipv4MdtDataThreshold),
      ipv4_mdt_default_address: cdktf.stringToTerraform(this._ipv4MdtDefaultAddress),
      ipv4_mdt_overlay_use_bgp: cdktf.booleanToTerraform(this._ipv4MdtOverlayUseBgp),
      ipv4_mdt_overlay_use_bgp_spt_only: cdktf.booleanToTerraform(this._ipv4MdtOverlayUseBgpSptOnly),
      ipv4_route_replicate: cdktf.listMapper(vrfIpv4RouteReplicateToTerraform, false)(this._ipv4RouteReplicate.internalValue),
      ipv4_route_target_export: cdktf.listMapper(vrfIpv4RouteTargetExportToTerraform, false)(this._ipv4RouteTargetExport.internalValue),
      ipv4_route_target_export_stitching: cdktf.listMapper(vrfIpv4RouteTargetExportStitchingToTerraform, false)(this._ipv4RouteTargetExportStitching.internalValue),
      ipv4_route_target_import: cdktf.listMapper(vrfIpv4RouteTargetImportToTerraform, false)(this._ipv4RouteTargetImport.internalValue),
      ipv4_route_target_import_stitching: cdktf.listMapper(vrfIpv4RouteTargetImportStitchingToTerraform, false)(this._ipv4RouteTargetImportStitching.internalValue),
      ipv6_evpn_mcast_anycast: cdktf.stringToTerraform(this._ipv6EvpnMcastAnycast),
      ipv6_evpn_mcast_data_address: cdktf.stringToTerraform(this._ipv6EvpnMcastDataAddress),
      ipv6_evpn_mcast_data_mask_bits: cdktf.stringToTerraform(this._ipv6EvpnMcastDataMaskBits),
      ipv6_evpn_mcast_mdt_default_address: cdktf.stringToTerraform(this._ipv6EvpnMcastMdtDefaultAddress),
      ipv6_export_map: cdktf.stringToTerraform(this._ipv6ExportMap),
      ipv6_import_map: cdktf.stringToTerraform(this._ipv6ImportMap),
      ipv6_route_target_export: cdktf.listMapper(vrfIpv6RouteTargetExportToTerraform, false)(this._ipv6RouteTargetExport.internalValue),
      ipv6_route_target_export_stitching: cdktf.listMapper(vrfIpv6RouteTargetExportStitchingToTerraform, false)(this._ipv6RouteTargetExportStitching.internalValue),
      ipv6_route_target_import: cdktf.listMapper(vrfIpv6RouteTargetImportToTerraform, false)(this._ipv6RouteTargetImport.internalValue),
      ipv6_route_target_import_stitching: cdktf.listMapper(vrfIpv6RouteTargetImportStitchingToTerraform, false)(this._ipv6RouteTargetImportStitching.internalValue),
      name: cdktf.stringToTerraform(this._name),
      rd: cdktf.stringToTerraform(this._rd),
      rd_auto: cdktf.booleanToTerraform(this._rdAuto),
      route_target_export: cdktf.listMapper(vrfRouteTargetExportToTerraform, false)(this._routeTargetExport.internalValue),
      route_target_import: cdktf.listMapper(vrfRouteTargetImportToTerraform, false)(this._routeTargetImport.internalValue),
      vnids: cdktf.listMapper(vrfVnidsToTerraform, false)(this._vnids.internalValue),
      vpn_id: cdktf.stringToTerraform(this._vpnId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_family_ipv4: {
        value: cdktf.booleanToHclTerraform(this._addressFamilyIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      address_family_ipv6: {
        value: cdktf.booleanToHclTerraform(this._addressFamilyIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      ipv4_evpn_mcast_anycast: {
        value: cdktf.stringToHclTerraform(this._ipv4EvpnMcastAnycast),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_evpn_mcast_data_address: {
        value: cdktf.stringToHclTerraform(this._ipv4EvpnMcastDataAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_evpn_mcast_data_mask_bits: {
        value: cdktf.stringToHclTerraform(this._ipv4EvpnMcastDataMaskBits),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_evpn_mcast_mdt_default_address: {
        value: cdktf.stringToHclTerraform(this._ipv4EvpnMcastMdtDefaultAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_export_map: {
        value: cdktf.stringToHclTerraform(this._ipv4ExportMap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_import_map: {
        value: cdktf.stringToHclTerraform(this._ipv4ImportMap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_mdt_auto_discovery_interworking_vxlan_pim: {
        value: cdktf.booleanToHclTerraform(this._ipv4MdtAutoDiscoveryInterworkingVxlanPim),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv4_mdt_auto_discovery_interworking_vxlan_pim_inter_as: {
        value: cdktf.booleanToHclTerraform(this._ipv4MdtAutoDiscoveryInterworkingVxlanPimInterAs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv4_mdt_auto_discovery_vxlan: {
        value: cdktf.booleanToHclTerraform(this._ipv4MdtAutoDiscoveryVxlan),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv4_mdt_auto_discovery_vxlan_inter_as: {
        value: cdktf.booleanToHclTerraform(this._ipv4MdtAutoDiscoveryVxlanInterAs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv4_mdt_data_multicast: {
        value: cdktf.listMapperHcl(vrfIpv4MdtDataMulticastToHclTerraform, false)(this._ipv4MdtDataMulticast.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VrfIpv4MdtDataMulticastList",
      },
      ipv4_mdt_data_threshold: {
        value: cdktf.numberToHclTerraform(this._ipv4MdtDataThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv4_mdt_default_address: {
        value: cdktf.stringToHclTerraform(this._ipv4MdtDefaultAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_mdt_overlay_use_bgp: {
        value: cdktf.booleanToHclTerraform(this._ipv4MdtOverlayUseBgp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv4_mdt_overlay_use_bgp_spt_only: {
        value: cdktf.booleanToHclTerraform(this._ipv4MdtOverlayUseBgpSptOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv4_route_replicate: {
        value: cdktf.listMapperHcl(vrfIpv4RouteReplicateToHclTerraform, false)(this._ipv4RouteReplicate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VrfIpv4RouteReplicateList",
      },
      ipv4_route_target_export: {
        value: cdktf.listMapperHcl(vrfIpv4RouteTargetExportToHclTerraform, false)(this._ipv4RouteTargetExport.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VrfIpv4RouteTargetExportList",
      },
      ipv4_route_target_export_stitching: {
        value: cdktf.listMapperHcl(vrfIpv4RouteTargetExportStitchingToHclTerraform, false)(this._ipv4RouteTargetExportStitching.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VrfIpv4RouteTargetExportStitchingList",
      },
      ipv4_route_target_import: {
        value: cdktf.listMapperHcl(vrfIpv4RouteTargetImportToHclTerraform, false)(this._ipv4RouteTargetImport.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VrfIpv4RouteTargetImportList",
      },
      ipv4_route_target_import_stitching: {
        value: cdktf.listMapperHcl(vrfIpv4RouteTargetImportStitchingToHclTerraform, false)(this._ipv4RouteTargetImportStitching.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VrfIpv4RouteTargetImportStitchingList",
      },
      ipv6_evpn_mcast_anycast: {
        value: cdktf.stringToHclTerraform(this._ipv6EvpnMcastAnycast),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_evpn_mcast_data_address: {
        value: cdktf.stringToHclTerraform(this._ipv6EvpnMcastDataAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_evpn_mcast_data_mask_bits: {
        value: cdktf.stringToHclTerraform(this._ipv6EvpnMcastDataMaskBits),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_evpn_mcast_mdt_default_address: {
        value: cdktf.stringToHclTerraform(this._ipv6EvpnMcastMdtDefaultAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_export_map: {
        value: cdktf.stringToHclTerraform(this._ipv6ExportMap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_import_map: {
        value: cdktf.stringToHclTerraform(this._ipv6ImportMap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_route_target_export: {
        value: cdktf.listMapperHcl(vrfIpv6RouteTargetExportToHclTerraform, false)(this._ipv6RouteTargetExport.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VrfIpv6RouteTargetExportList",
      },
      ipv6_route_target_export_stitching: {
        value: cdktf.listMapperHcl(vrfIpv6RouteTargetExportStitchingToHclTerraform, false)(this._ipv6RouteTargetExportStitching.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VrfIpv6RouteTargetExportStitchingList",
      },
      ipv6_route_target_import: {
        value: cdktf.listMapperHcl(vrfIpv6RouteTargetImportToHclTerraform, false)(this._ipv6RouteTargetImport.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VrfIpv6RouteTargetImportList",
      },
      ipv6_route_target_import_stitching: {
        value: cdktf.listMapperHcl(vrfIpv6RouteTargetImportStitchingToHclTerraform, false)(this._ipv6RouteTargetImportStitching.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VrfIpv6RouteTargetImportStitchingList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rd: {
        value: cdktf.stringToHclTerraform(this._rd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rd_auto: {
        value: cdktf.booleanToHclTerraform(this._rdAuto),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      route_target_export: {
        value: cdktf.listMapperHcl(vrfRouteTargetExportToHclTerraform, false)(this._routeTargetExport.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VrfRouteTargetExportList",
      },
      route_target_import: {
        value: cdktf.listMapperHcl(vrfRouteTargetImportToHclTerraform, false)(this._routeTargetImport.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VrfRouteTargetImportList",
      },
      vnids: {
        value: cdktf.listMapperHcl(vrfVnidsToHclTerraform, false)(this._vnids.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VrfVnidsList",
      },
      vpn_id: {
        value: cdktf.stringToHclTerraform(this._vpnId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
