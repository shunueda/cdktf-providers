// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouteMapConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#device RouteMap#device}
  */
  readonly device?: string;
  /**
  * Sequence to insert to/delete from existing route-map entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#entries RouteMap#entries}
  */
  readonly entries?: RouteMapEntries[] | cdktf.IResolvable;
  /**
  * WORD;;Route map tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#name RouteMap#name}
  */
  readonly name: string;
}
export interface RouteMapEntriesSetAsPathReplaceAs {
  /**
  * <1-65535>;;AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#as_number RouteMap#as_number}
  */
  readonly asNumber: string;
}

export function routeMapEntriesSetAsPathReplaceAsToTerraform(struct?: RouteMapEntriesSetAsPathReplaceAs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_number: cdktf.stringToTerraform(struct!.asNumber),
  }
}


export function routeMapEntriesSetAsPathReplaceAsToHclTerraform(struct?: RouteMapEntriesSetAsPathReplaceAs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_number: {
      value: cdktf.stringToHclTerraform(struct!.asNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapEntriesSetAsPathReplaceAsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouteMapEntriesSetAsPathReplaceAs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumber = this._asNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapEntriesSetAsPathReplaceAs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asNumber = value.asNumber;
    }
  }

  // as_number - computed: false, optional: false, required: true
  private _asNumber?: string; 
  public get asNumber() {
    return this.getStringAttribute('as_number');
  }
  public set asNumber(value: string) {
    this._asNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumberInput() {
    return this._asNumber;
  }
}

export class RouteMapEntriesSetAsPathReplaceAsList extends cdktf.ComplexList {
  public internalValue? : RouteMapEntriesSetAsPathReplaceAs[] | cdktf.IResolvable

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
  public get(index: number): RouteMapEntriesSetAsPathReplaceAsOutputReference {
    return new RouteMapEntriesSetAsPathReplaceAsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouteMapEntries {
  /**
  * Continue on a different entry within the route-map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#continue RouteMap#continue}
  */
  readonly continue?: boolean | cdktf.IResolvable;
  /**
  * Route-map entry sequence number
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#continue_sequence_number RouteMap#continue_sequence_number}
  */
  readonly continueSequenceNumber?: number;
  /**
  * Route-map comment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#description RouteMap#description}
  */
  readonly description?: string;
  /**
  * AS path access-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#match_as_paths RouteMap#match_as_paths}
  */
  readonly matchAsPaths?: number[];
  /**
  * AS path access-list (OBSOLETE - please use route-map configuration in Cisco-IOS-XE-bgp.yang)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#match_as_paths_legacy RouteMap#match_as_paths_legacy}
  */
  readonly matchAsPathsLegacy?: number[];
  /**
  * Do exact matching of communities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#match_community_list_exact_match RouteMap#match_community_list_exact_match}
  */
  readonly matchCommunityListExactMatch?: boolean | cdktf.IResolvable;
  /**
  * Named Access List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#match_community_lists RouteMap#match_community_lists}
  */
  readonly matchCommunityLists?: string[];
  /**
  * Named Access List (OBSOLETE- please use community-list in Cisco-IOS-XE-bgp.yang)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#match_community_lists_legacy RouteMap#match_community_lists_legacy}
  */
  readonly matchCommunityListsLegacy?: string[];
  /**
  * Named Access List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#match_extcommunity_lists RouteMap#match_extcommunity_lists}
  */
  readonly matchExtcommunityLists?: string[];
  /**
  * Named Access List (OBSOLETE- please use extcommunity-list in Cisco-IOS-XE-bgp.yang)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#match_extcommunity_lists_legacy RouteMap#match_extcommunity_lists_legacy}
  */
  readonly matchExtcommunityListsLegacy?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#match_interfaces RouteMap#match_interfaces}
  */
  readonly matchInterfaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#match_ip_address_access_lists RouteMap#match_ip_address_access_lists}
  */
  readonly matchIpAddressAccessLists?: string[];
  /**
  * Match entries of prefix-lists
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#match_ip_address_prefix_lists RouteMap#match_ip_address_prefix_lists}
  */
  readonly matchIpAddressPrefixLists?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#match_ip_next_hop_access_lists RouteMap#match_ip_next_hop_access_lists}
  */
  readonly matchIpNextHopAccessLists?: string[];
  /**
  * Match entries of prefix-lists
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#match_ip_next_hop_prefix_lists RouteMap#match_ip_next_hop_prefix_lists}
  */
  readonly matchIpNextHopPrefixLists?: string[];
  /**
  * IPv6 access-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#match_ipv6_address_access_lists RouteMap#match_ipv6_address_access_lists}
  */
  readonly matchIpv6AddressAccessLists?: string;
  /**
  * IPv6 prefix-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#match_ipv6_address_prefix_lists RouteMap#match_ipv6_address_prefix_lists}
  */
  readonly matchIpv6AddressPrefixLists?: string;
  /**
  * IPv6 access-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#match_ipv6_next_hop_access_lists RouteMap#match_ipv6_next_hop_access_lists}
  */
  readonly matchIpv6NextHopAccessLists?: string;
  /**
  * IPv6 prefix-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#match_ipv6_next_hop_prefix_lists RouteMap#match_ipv6_next_hop_prefix_lists}
  */
  readonly matchIpv6NextHopPrefixLists?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#match_local_preferences RouteMap#match_local_preferences}
  */
  readonly matchLocalPreferences?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#match_local_preferences_legacy RouteMap#match_local_preferences_legacy}
  */
  readonly matchLocalPreferencesLegacy?: number[];
  /**
  * external route (BGP, EIGRP and OSPF type 1/2)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#match_route_type_external RouteMap#match_route_type_external}
  */
  readonly matchRouteTypeExternal?: boolean | cdktf.IResolvable;
  /**
  * OSPF external type 1 route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#match_route_type_external_type_1 RouteMap#match_route_type_external_type_1}
  */
  readonly matchRouteTypeExternalType1?: boolean | cdktf.IResolvable;
  /**
  * OSPF external type 2 route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#match_route_type_external_type_2 RouteMap#match_route_type_external_type_2}
  */
  readonly matchRouteTypeExternalType2?: boolean | cdktf.IResolvable;
  /**
  * internal route (including OSPF intra/inter area)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#match_route_type_internal RouteMap#match_route_type_internal}
  */
  readonly matchRouteTypeInternal?: boolean | cdktf.IResolvable;
  /**
  * IS-IS level-1 route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#match_route_type_level_1 RouteMap#match_route_type_level_1}
  */
  readonly matchRouteTypeLevel1?: boolean | cdktf.IResolvable;
  /**
  * IS-IS level-2 route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#match_route_type_level_2 RouteMap#match_route_type_level_2}
  */
  readonly matchRouteTypeLevel2?: boolean | cdktf.IResolvable;
  /**
  * locally generated route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#match_route_type_local RouteMap#match_route_type_local}
  */
  readonly matchRouteTypeLocal?: boolean | cdktf.IResolvable;
  /**
  * locally generated route (OBSOLETE - please use route-map configuration in Cisco-IOS-XE-bgp.yang)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#match_route_type_local_legacy RouteMap#match_route_type_local_legacy}
  */
  readonly matchRouteTypeLocalLegacy?: boolean | cdktf.IResolvable;
  /**
  * Border Gateway Protocol (BGP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#match_source_protocol_bgp RouteMap#match_source_protocol_bgp}
  */
  readonly matchSourceProtocolBgp?: string[];
  /**
  * Connected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#match_source_protocol_connected RouteMap#match_source_protocol_connected}
  */
  readonly matchSourceProtocolConnected?: boolean | cdktf.IResolvable;
  /**
  * Border Gateway Protocol (BGP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#match_source_protocol_eigrp RouteMap#match_source_protocol_eigrp}
  */
  readonly matchSourceProtocolEigrp?: string[];
  /**
  * ISO IS-IS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#match_source_protocol_isis RouteMap#match_source_protocol_isis}
  */
  readonly matchSourceProtocolIsis?: boolean | cdktf.IResolvable;
  /**
  * Locator ID Separation Protocol (LISP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#match_source_protocol_lisp RouteMap#match_source_protocol_lisp}
  */
  readonly matchSourceProtocolLisp?: boolean | cdktf.IResolvable;
  /**
  * Open Shortest Path First (OSPF)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#match_source_protocol_ospf RouteMap#match_source_protocol_ospf}
  */
  readonly matchSourceProtocolOspf?: string[];
  /**
  * OSPFv3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#match_source_protocol_ospfv3 RouteMap#match_source_protocol_ospfv3}
  */
  readonly matchSourceProtocolOspfv3?: string[];
  /**
  * Routing Information Protocol (RIP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#match_source_protocol_rip RouteMap#match_source_protocol_rip}
  */
  readonly matchSourceProtocolRip?: boolean | cdktf.IResolvable;
  /**
  * Static routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#match_source_protocol_static RouteMap#match_source_protocol_static}
  */
  readonly matchSourceProtocolStatic?: boolean | cdktf.IResolvable;
  /**
  * Tag value (DEPRECATED - please use tag-val)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#match_tags RouteMap#match_tags}
  */
  readonly matchTags?: number[];
  /**
  * tracking object
  *   - Range: `1`-`1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#match_track RouteMap#match_track}
  */
  readonly matchTrack?: number;
  /**
  * Route map permit/deny set operations
  *   - Choices: `deny`, `permit`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#operation RouteMap#operation}
  */
  readonly operation?: string;
  /**
  * 
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#seq RouteMap#seq}
  */
  readonly seq: number;
  /**
  * BGP AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_as_path_prepend_as RouteMap#set_as_path_prepend_as}
  */
  readonly setAsPathPrependAs?: string;
  /**
  * <1-65535>;;AS number (OBSOLETE - please use route-map configuration in Cisco-IOS-XE-bgp.yang)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_as_path_prepend_as_legacy RouteMap#set_as_path_prepend_as_legacy}
  */
  readonly setAsPathPrependAsLegacy?: string;
  /**
  * 
  *   - Range: `1`-`10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_as_path_prepend_last_as RouteMap#set_as_path_prepend_last_as}
  */
  readonly setAsPathPrependLastAs?: number;
  /**
  * 
  *   - Range: `1`-`10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_as_path_prepend_last_as_legacy RouteMap#set_as_path_prepend_last_as_legacy}
  */
  readonly setAsPathPrependLastAsLegacy?: number;
  /**
  * Replace each AS number in the AS-path with the local AS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_as_path_replace_any RouteMap#set_as_path_replace_any}
  */
  readonly setAsPathReplaceAny?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_as_path_replace_as RouteMap#set_as_path_replace_as}
  */
  readonly setAsPathReplaceAs?: RouteMapEntriesSetAsPathReplaceAs[] | cdktf.IResolvable;
  /**
  * Set the tag as an AS-path attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_as_path_tag RouteMap#set_as_path_tag}
  */
  readonly setAsPathTag?: boolean | cdktf.IResolvable;
  /**
  * Set the tag as an AS-path attribute (OBSOLETE - please use route-map configuration in Cisco-IOS-XE-bgp.yang)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_as_path_tag_legacy RouteMap#set_as_path_tag_legacy}
  */
  readonly setAsPathTagLegacy?: boolean | cdktf.IResolvable;
  /**
  * BGP community value - can be a number (AA:NN format) or well-known value (internet, local-AS, no-advertise, no-export, gshut)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_communities RouteMap#set_communities}
  */
  readonly setCommunities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_communities_additive RouteMap#set_communities_additive}
  */
  readonly setCommunitiesAdditive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_communities_additive_legacy RouteMap#set_communities_additive_legacy}
  */
  readonly setCommunitiesAdditiveLegacy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_communities_legacy RouteMap#set_communities_legacy}
  */
  readonly setCommunitiesLegacy?: string[];
  /**
  * Delete matching communities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_community_list_delete RouteMap#set_community_list_delete}
  */
  readonly setCommunityListDelete?: boolean | cdktf.IResolvable;
  /**
  * Delete matching communities (OBSOLETE - please use route-map configuration in Cisco-IOS-XE-bgp.yang)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_community_list_delete_legacy RouteMap#set_community_list_delete_legacy}
  */
  readonly setCommunityListDeleteLegacy?: boolean | cdktf.IResolvable;
  /**
  * 
  *   - Range: `100`-`500`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_community_list_expanded RouteMap#set_community_list_expanded}
  */
  readonly setCommunityListExpanded?: number;
  /**
  * 
  *   - Range: `100`-`500`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_community_list_expanded_legacy RouteMap#set_community_list_expanded_legacy}
  */
  readonly setCommunityListExpandedLegacy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_community_list_name RouteMap#set_community_list_name}
  */
  readonly setCommunityListName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_community_list_name_legacy RouteMap#set_community_list_name_legacy}
  */
  readonly setCommunityListNameLegacy?: string;
  /**
  * 
  *   - Range: `1`-`99`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_community_list_standard RouteMap#set_community_list_standard}
  */
  readonly setCommunityListStandard?: number;
  /**
  * 
  *   - Range: `1`-`99`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_community_list_standard_legacy RouteMap#set_community_list_standard_legacy}
  */
  readonly setCommunityListStandardLegacy?: number;
  /**
  * No community attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_community_none RouteMap#set_community_none}
  */
  readonly setCommunityNone?: boolean | cdktf.IResolvable;
  /**
  * No community attribute (OBSOLETE - please use route-map configuration in Cisco-IOS-XE-bgp.yang)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_community_none_legacy RouteMap#set_community_none_legacy}
  */
  readonly setCommunityNoneLegacy?: boolean | cdktf.IResolvable;
  /**
  * SPAN source interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_default_interfaces RouteMap#set_default_interfaces}
  */
  readonly setDefaultInterfaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_extcomunity_rt RouteMap#set_extcomunity_rt}
  */
  readonly setExtcomunityRt?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_extcomunity_rt_legacy RouteMap#set_extcomunity_rt_legacy}
  */
  readonly setExtcomunityRtLegacy?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_extcomunity_soo RouteMap#set_extcomunity_soo}
  */
  readonly setExtcomunitySoo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_extcomunity_soo_legacy RouteMap#set_extcomunity_soo_legacy}
  */
  readonly setExtcomunitySooLegacy?: string;
  /**
  *  VPN Distinguisher Extended Community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_extcomunity_vpn_distinguisher RouteMap#set_extcomunity_vpn_distinguisher}
  */
  readonly setExtcomunityVpnDistinguisher?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_extcomunity_vpn_distinguisher_additive RouteMap#set_extcomunity_vpn_distinguisher_additive}
  */
  readonly setExtcomunityVpnDistinguisherAdditive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_extcomunity_vpn_distinguisher_legacy RouteMap#set_extcomunity_vpn_distinguisher_legacy}
  */
  readonly setExtcomunityVpnDistinguisherLegacy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_global RouteMap#set_global}
  */
  readonly setGlobal?: boolean | cdktf.IResolvable;
  /**
  * Interface specific information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_interfaces RouteMap#set_interfaces}
  */
  readonly setInterfaces?: string[];
  /**
  * Specify prefix-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_ip_address RouteMap#set_ip_address}
  */
  readonly setIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_ip_default_global_next_hop_address RouteMap#set_ip_default_global_next_hop_address}
  */
  readonly setIpDefaultGlobalNextHopAddress?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_ip_default_next_hop_address RouteMap#set_ip_default_next_hop_address}
  */
  readonly setIpDefaultNextHopAddress?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_ip_global_next_hop_address RouteMap#set_ip_global_next_hop_address}
  */
  readonly setIpGlobalNextHopAddress?: string[];
  /**
  * IP address of next hop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_ip_next_hop_address RouteMap#set_ip_next_hop_address}
  */
  readonly setIpNextHopAddress?: string[];
  /**
  * Use self address (for BGP only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_ip_next_hop_self RouteMap#set_ip_next_hop_self}
  */
  readonly setIpNextHopSelf?: boolean | cdktf.IResolvable;
  /**
  * Propagate next hop unchanged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_ip_next_hop_unchanged RouteMap#set_ip_next_hop_unchanged}
  */
  readonly setIpNextHopUnchanged?: boolean | cdktf.IResolvable;
  /**
  * 
  *   - Range: `0`-`99`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_ip_qos_group RouteMap#set_ip_qos_group}
  */
  readonly setIpQosGroup?: number;
  /**
  * IPv6 prefix-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_ipv6_address RouteMap#set_ipv6_address}
  */
  readonly setIpv6Address?: string[];
  /**
  * Next hop along path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_ipv6_default_global_next_hop RouteMap#set_ipv6_default_global_next_hop}
  */
  readonly setIpv6DefaultGlobalNextHop?: string;
  /**
  * Default next hop IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_ipv6_default_next_hop RouteMap#set_ipv6_default_next_hop}
  */
  readonly setIpv6DefaultNextHop?: string[];
  /**
  * Next hop IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_ipv6_next_hop RouteMap#set_ipv6_next_hop}
  */
  readonly setIpv6NextHop?: string[];
  /**
  * Import into a level-1 area
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_level_1 RouteMap#set_level_1}
  */
  readonly setLevel1?: boolean | cdktf.IResolvable;
  /**
  * Import into level-1 and level-2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_level_1_2 RouteMap#set_level_1_2}
  */
  readonly setLevel12?: boolean | cdktf.IResolvable;
  /**
  * Import into level-2 sub-domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_level_2 RouteMap#set_level_2}
  */
  readonly setLevel2?: boolean | cdktf.IResolvable;
  /**
  * Preference value
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_local_preference RouteMap#set_local_preference}
  */
  readonly setLocalPreference?: number;
  /**
  * Preference value (OBSOLETE - please use route-map configuration in Cisco-IOS-XE-bgp.yang)
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_local_preference_legacy RouteMap#set_local_preference_legacy}
  */
  readonly setLocalPreferenceLegacy?: number;
  /**
  * +/-<metric>;;Add or subtract metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_metric_change RouteMap#set_metric_change}
  */
  readonly setMetricChange?: string;
  /**
  * EIGRP delay metric, in 10 microsecond units
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_metric_delay RouteMap#set_metric_delay}
  */
  readonly setMetricDelay?: string;
  /**
  * EIGRP Effective bandwidth metric (Loading) where 255 is 100% loaded
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_metric_loading RouteMap#set_metric_loading}
  */
  readonly setMetricLoading?: number;
  /**
  * EIGRP MTU of the path
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_metric_mtu RouteMap#set_metric_mtu}
  */
  readonly setMetricMtu?: number;
  /**
  * EIGRP reliability metric where 255 is 100% reliable
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_metric_reliability RouteMap#set_metric_reliability}
  */
  readonly setMetricReliability?: number;
  /**
  * Type of metric for destination routing protocol
  *   - Choices: `external`, `internal`, `type-1`, `type-2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_metric_type RouteMap#set_metric_type}
  */
  readonly setMetricType?: string;
  /**
  * Metric value or Bandwidth in Kbits per second
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_metric_value RouteMap#set_metric_value}
  */
  readonly setMetricValue?: number;
  /**
  * Tag value (DEPRECATED - please use tag-val)
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_tag RouteMap#set_tag}
  */
  readonly setTag?: number;
  /**
  * VPN Routing/Forwarding instance name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_vrf RouteMap#set_vrf}
  */
  readonly setVrf?: string;
  /**
  * BGP weight for routing table
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_weight RouteMap#set_weight}
  */
  readonly setWeight?: number;
  /**
  * BGP weight for routing table (OBSOLETE - please use route-map configuration in Cisco-IOS-XE-bgp.yang)
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#set_weight_legacy RouteMap#set_weight_legacy}
  */
  readonly setWeightLegacy?: number;
}

export function routeMapEntriesToTerraform(struct?: RouteMapEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    continue: cdktf.booleanToTerraform(struct!.continue),
    continue_sequence_number: cdktf.numberToTerraform(struct!.continueSequenceNumber),
    description: cdktf.stringToTerraform(struct!.description),
    match_as_paths: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.matchAsPaths),
    match_as_paths_legacy: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.matchAsPathsLegacy),
    match_community_list_exact_match: cdktf.booleanToTerraform(struct!.matchCommunityListExactMatch),
    match_community_lists: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchCommunityLists),
    match_community_lists_legacy: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchCommunityListsLegacy),
    match_extcommunity_lists: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchExtcommunityLists),
    match_extcommunity_lists_legacy: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchExtcommunityListsLegacy),
    match_interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchInterfaces),
    match_ip_address_access_lists: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchIpAddressAccessLists),
    match_ip_address_prefix_lists: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchIpAddressPrefixLists),
    match_ip_next_hop_access_lists: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchIpNextHopAccessLists),
    match_ip_next_hop_prefix_lists: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchIpNextHopPrefixLists),
    match_ipv6_address_access_lists: cdktf.stringToTerraform(struct!.matchIpv6AddressAccessLists),
    match_ipv6_address_prefix_lists: cdktf.stringToTerraform(struct!.matchIpv6AddressPrefixLists),
    match_ipv6_next_hop_access_lists: cdktf.stringToTerraform(struct!.matchIpv6NextHopAccessLists),
    match_ipv6_next_hop_prefix_lists: cdktf.stringToTerraform(struct!.matchIpv6NextHopPrefixLists),
    match_local_preferences: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.matchLocalPreferences),
    match_local_preferences_legacy: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.matchLocalPreferencesLegacy),
    match_route_type_external: cdktf.booleanToTerraform(struct!.matchRouteTypeExternal),
    match_route_type_external_type_1: cdktf.booleanToTerraform(struct!.matchRouteTypeExternalType1),
    match_route_type_external_type_2: cdktf.booleanToTerraform(struct!.matchRouteTypeExternalType2),
    match_route_type_internal: cdktf.booleanToTerraform(struct!.matchRouteTypeInternal),
    match_route_type_level_1: cdktf.booleanToTerraform(struct!.matchRouteTypeLevel1),
    match_route_type_level_2: cdktf.booleanToTerraform(struct!.matchRouteTypeLevel2),
    match_route_type_local: cdktf.booleanToTerraform(struct!.matchRouteTypeLocal),
    match_route_type_local_legacy: cdktf.booleanToTerraform(struct!.matchRouteTypeLocalLegacy),
    match_source_protocol_bgp: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchSourceProtocolBgp),
    match_source_protocol_connected: cdktf.booleanToTerraform(struct!.matchSourceProtocolConnected),
    match_source_protocol_eigrp: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchSourceProtocolEigrp),
    match_source_protocol_isis: cdktf.booleanToTerraform(struct!.matchSourceProtocolIsis),
    match_source_protocol_lisp: cdktf.booleanToTerraform(struct!.matchSourceProtocolLisp),
    match_source_protocol_ospf: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchSourceProtocolOspf),
    match_source_protocol_ospfv3: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchSourceProtocolOspfv3),
    match_source_protocol_rip: cdktf.booleanToTerraform(struct!.matchSourceProtocolRip),
    match_source_protocol_static: cdktf.booleanToTerraform(struct!.matchSourceProtocolStatic),
    match_tags: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.matchTags),
    match_track: cdktf.numberToTerraform(struct!.matchTrack),
    operation: cdktf.stringToTerraform(struct!.operation),
    seq: cdktf.numberToTerraform(struct!.seq),
    set_as_path_prepend_as: cdktf.stringToTerraform(struct!.setAsPathPrependAs),
    set_as_path_prepend_as_legacy: cdktf.stringToTerraform(struct!.setAsPathPrependAsLegacy),
    set_as_path_prepend_last_as: cdktf.numberToTerraform(struct!.setAsPathPrependLastAs),
    set_as_path_prepend_last_as_legacy: cdktf.numberToTerraform(struct!.setAsPathPrependLastAsLegacy),
    set_as_path_replace_any: cdktf.booleanToTerraform(struct!.setAsPathReplaceAny),
    set_as_path_replace_as: cdktf.listMapper(routeMapEntriesSetAsPathReplaceAsToTerraform, false)(struct!.setAsPathReplaceAs),
    set_as_path_tag: cdktf.booleanToTerraform(struct!.setAsPathTag),
    set_as_path_tag_legacy: cdktf.booleanToTerraform(struct!.setAsPathTagLegacy),
    set_communities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.setCommunities),
    set_communities_additive: cdktf.booleanToTerraform(struct!.setCommunitiesAdditive),
    set_communities_additive_legacy: cdktf.booleanToTerraform(struct!.setCommunitiesAdditiveLegacy),
    set_communities_legacy: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.setCommunitiesLegacy),
    set_community_list_delete: cdktf.booleanToTerraform(struct!.setCommunityListDelete),
    set_community_list_delete_legacy: cdktf.booleanToTerraform(struct!.setCommunityListDeleteLegacy),
    set_community_list_expanded: cdktf.numberToTerraform(struct!.setCommunityListExpanded),
    set_community_list_expanded_legacy: cdktf.numberToTerraform(struct!.setCommunityListExpandedLegacy),
    set_community_list_name: cdktf.stringToTerraform(struct!.setCommunityListName),
    set_community_list_name_legacy: cdktf.stringToTerraform(struct!.setCommunityListNameLegacy),
    set_community_list_standard: cdktf.numberToTerraform(struct!.setCommunityListStandard),
    set_community_list_standard_legacy: cdktf.numberToTerraform(struct!.setCommunityListStandardLegacy),
    set_community_none: cdktf.booleanToTerraform(struct!.setCommunityNone),
    set_community_none_legacy: cdktf.booleanToTerraform(struct!.setCommunityNoneLegacy),
    set_default_interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.setDefaultInterfaces),
    set_extcomunity_rt: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.setExtcomunityRt),
    set_extcomunity_rt_legacy: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.setExtcomunityRtLegacy),
    set_extcomunity_soo: cdktf.stringToTerraform(struct!.setExtcomunitySoo),
    set_extcomunity_soo_legacy: cdktf.stringToTerraform(struct!.setExtcomunitySooLegacy),
    set_extcomunity_vpn_distinguisher: cdktf.stringToTerraform(struct!.setExtcomunityVpnDistinguisher),
    set_extcomunity_vpn_distinguisher_additive: cdktf.booleanToTerraform(struct!.setExtcomunityVpnDistinguisherAdditive),
    set_extcomunity_vpn_distinguisher_legacy: cdktf.stringToTerraform(struct!.setExtcomunityVpnDistinguisherLegacy),
    set_global: cdktf.booleanToTerraform(struct!.setGlobal),
    set_interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.setInterfaces),
    set_ip_address: cdktf.stringToTerraform(struct!.setIpAddress),
    set_ip_default_global_next_hop_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.setIpDefaultGlobalNextHopAddress),
    set_ip_default_next_hop_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.setIpDefaultNextHopAddress),
    set_ip_global_next_hop_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.setIpGlobalNextHopAddress),
    set_ip_next_hop_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.setIpNextHopAddress),
    set_ip_next_hop_self: cdktf.booleanToTerraform(struct!.setIpNextHopSelf),
    set_ip_next_hop_unchanged: cdktf.booleanToTerraform(struct!.setIpNextHopUnchanged),
    set_ip_qos_group: cdktf.numberToTerraform(struct!.setIpQosGroup),
    set_ipv6_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.setIpv6Address),
    set_ipv6_default_global_next_hop: cdktf.stringToTerraform(struct!.setIpv6DefaultGlobalNextHop),
    set_ipv6_default_next_hop: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.setIpv6DefaultNextHop),
    set_ipv6_next_hop: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.setIpv6NextHop),
    set_level_1: cdktf.booleanToTerraform(struct!.setLevel1),
    set_level_1_2: cdktf.booleanToTerraform(struct!.setLevel12),
    set_level_2: cdktf.booleanToTerraform(struct!.setLevel2),
    set_local_preference: cdktf.numberToTerraform(struct!.setLocalPreference),
    set_local_preference_legacy: cdktf.numberToTerraform(struct!.setLocalPreferenceLegacy),
    set_metric_change: cdktf.stringToTerraform(struct!.setMetricChange),
    set_metric_delay: cdktf.stringToTerraform(struct!.setMetricDelay),
    set_metric_loading: cdktf.numberToTerraform(struct!.setMetricLoading),
    set_metric_mtu: cdktf.numberToTerraform(struct!.setMetricMtu),
    set_metric_reliability: cdktf.numberToTerraform(struct!.setMetricReliability),
    set_metric_type: cdktf.stringToTerraform(struct!.setMetricType),
    set_metric_value: cdktf.numberToTerraform(struct!.setMetricValue),
    set_tag: cdktf.numberToTerraform(struct!.setTag),
    set_vrf: cdktf.stringToTerraform(struct!.setVrf),
    set_weight: cdktf.numberToTerraform(struct!.setWeight),
    set_weight_legacy: cdktf.numberToTerraform(struct!.setWeightLegacy),
  }
}


export function routeMapEntriesToHclTerraform(struct?: RouteMapEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    continue: {
      value: cdktf.booleanToHclTerraform(struct!.continue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    continue_sequence_number: {
      value: cdktf.numberToHclTerraform(struct!.continueSequenceNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_as_paths: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.matchAsPaths),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    match_as_paths_legacy: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.matchAsPathsLegacy),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    match_community_list_exact_match: {
      value: cdktf.booleanToHclTerraform(struct!.matchCommunityListExactMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_community_lists: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchCommunityLists),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_community_lists_legacy: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchCommunityListsLegacy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_extcommunity_lists: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchExtcommunityLists),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_extcommunity_lists_legacy: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchExtcommunityListsLegacy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_interfaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchInterfaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_ip_address_access_lists: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchIpAddressAccessLists),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_ip_address_prefix_lists: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchIpAddressPrefixLists),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_ip_next_hop_access_lists: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchIpNextHopAccessLists),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_ip_next_hop_prefix_lists: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchIpNextHopPrefixLists),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_ipv6_address_access_lists: {
      value: cdktf.stringToHclTerraform(struct!.matchIpv6AddressAccessLists),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_ipv6_address_prefix_lists: {
      value: cdktf.stringToHclTerraform(struct!.matchIpv6AddressPrefixLists),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_ipv6_next_hop_access_lists: {
      value: cdktf.stringToHclTerraform(struct!.matchIpv6NextHopAccessLists),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_ipv6_next_hop_prefix_lists: {
      value: cdktf.stringToHclTerraform(struct!.matchIpv6NextHopPrefixLists),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_local_preferences: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.matchLocalPreferences),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    match_local_preferences_legacy: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.matchLocalPreferencesLegacy),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    match_route_type_external: {
      value: cdktf.booleanToHclTerraform(struct!.matchRouteTypeExternal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_route_type_external_type_1: {
      value: cdktf.booleanToHclTerraform(struct!.matchRouteTypeExternalType1),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_route_type_external_type_2: {
      value: cdktf.booleanToHclTerraform(struct!.matchRouteTypeExternalType2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_route_type_internal: {
      value: cdktf.booleanToHclTerraform(struct!.matchRouteTypeInternal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_route_type_level_1: {
      value: cdktf.booleanToHclTerraform(struct!.matchRouteTypeLevel1),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_route_type_level_2: {
      value: cdktf.booleanToHclTerraform(struct!.matchRouteTypeLevel2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_route_type_local: {
      value: cdktf.booleanToHclTerraform(struct!.matchRouteTypeLocal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_route_type_local_legacy: {
      value: cdktf.booleanToHclTerraform(struct!.matchRouteTypeLocalLegacy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_source_protocol_bgp: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchSourceProtocolBgp),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_source_protocol_connected: {
      value: cdktf.booleanToHclTerraform(struct!.matchSourceProtocolConnected),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_source_protocol_eigrp: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchSourceProtocolEigrp),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_source_protocol_isis: {
      value: cdktf.booleanToHclTerraform(struct!.matchSourceProtocolIsis),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_source_protocol_lisp: {
      value: cdktf.booleanToHclTerraform(struct!.matchSourceProtocolLisp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_source_protocol_ospf: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchSourceProtocolOspf),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_source_protocol_ospfv3: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchSourceProtocolOspfv3),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_source_protocol_rip: {
      value: cdktf.booleanToHclTerraform(struct!.matchSourceProtocolRip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_source_protocol_static: {
      value: cdktf.booleanToHclTerraform(struct!.matchSourceProtocolStatic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_tags: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.matchTags),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    match_track: {
      value: cdktf.numberToHclTerraform(struct!.matchTrack),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seq: {
      value: cdktf.numberToHclTerraform(struct!.seq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_as_path_prepend_as: {
      value: cdktf.stringToHclTerraform(struct!.setAsPathPrependAs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_as_path_prepend_as_legacy: {
      value: cdktf.stringToHclTerraform(struct!.setAsPathPrependAsLegacy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_as_path_prepend_last_as: {
      value: cdktf.numberToHclTerraform(struct!.setAsPathPrependLastAs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_as_path_prepend_last_as_legacy: {
      value: cdktf.numberToHclTerraform(struct!.setAsPathPrependLastAsLegacy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_as_path_replace_any: {
      value: cdktf.booleanToHclTerraform(struct!.setAsPathReplaceAny),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_as_path_replace_as: {
      value: cdktf.listMapperHcl(routeMapEntriesSetAsPathReplaceAsToHclTerraform, false)(struct!.setAsPathReplaceAs),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapEntriesSetAsPathReplaceAsList",
    },
    set_as_path_tag: {
      value: cdktf.booleanToHclTerraform(struct!.setAsPathTag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_as_path_tag_legacy: {
      value: cdktf.booleanToHclTerraform(struct!.setAsPathTagLegacy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_communities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.setCommunities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set_communities_additive: {
      value: cdktf.booleanToHclTerraform(struct!.setCommunitiesAdditive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_communities_additive_legacy: {
      value: cdktf.booleanToHclTerraform(struct!.setCommunitiesAdditiveLegacy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_communities_legacy: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.setCommunitiesLegacy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set_community_list_delete: {
      value: cdktf.booleanToHclTerraform(struct!.setCommunityListDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_community_list_delete_legacy: {
      value: cdktf.booleanToHclTerraform(struct!.setCommunityListDeleteLegacy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_community_list_expanded: {
      value: cdktf.numberToHclTerraform(struct!.setCommunityListExpanded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_community_list_expanded_legacy: {
      value: cdktf.numberToHclTerraform(struct!.setCommunityListExpandedLegacy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_community_list_name: {
      value: cdktf.stringToHclTerraform(struct!.setCommunityListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_community_list_name_legacy: {
      value: cdktf.stringToHclTerraform(struct!.setCommunityListNameLegacy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_community_list_standard: {
      value: cdktf.numberToHclTerraform(struct!.setCommunityListStandard),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_community_list_standard_legacy: {
      value: cdktf.numberToHclTerraform(struct!.setCommunityListStandardLegacy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_community_none: {
      value: cdktf.booleanToHclTerraform(struct!.setCommunityNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_community_none_legacy: {
      value: cdktf.booleanToHclTerraform(struct!.setCommunityNoneLegacy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_default_interfaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.setDefaultInterfaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set_extcomunity_rt: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.setExtcomunityRt),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set_extcomunity_rt_legacy: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.setExtcomunityRtLegacy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set_extcomunity_soo: {
      value: cdktf.stringToHclTerraform(struct!.setExtcomunitySoo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_extcomunity_soo_legacy: {
      value: cdktf.stringToHclTerraform(struct!.setExtcomunitySooLegacy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_extcomunity_vpn_distinguisher: {
      value: cdktf.stringToHclTerraform(struct!.setExtcomunityVpnDistinguisher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_extcomunity_vpn_distinguisher_additive: {
      value: cdktf.booleanToHclTerraform(struct!.setExtcomunityVpnDistinguisherAdditive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_extcomunity_vpn_distinguisher_legacy: {
      value: cdktf.stringToHclTerraform(struct!.setExtcomunityVpnDistinguisherLegacy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_global: {
      value: cdktf.booleanToHclTerraform(struct!.setGlobal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_interfaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.setInterfaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.setIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_ip_default_global_next_hop_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.setIpDefaultGlobalNextHopAddress),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set_ip_default_next_hop_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.setIpDefaultNextHopAddress),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set_ip_global_next_hop_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.setIpGlobalNextHopAddress),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set_ip_next_hop_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.setIpNextHopAddress),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set_ip_next_hop_self: {
      value: cdktf.booleanToHclTerraform(struct!.setIpNextHopSelf),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_ip_next_hop_unchanged: {
      value: cdktf.booleanToHclTerraform(struct!.setIpNextHopUnchanged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_ip_qos_group: {
      value: cdktf.numberToHclTerraform(struct!.setIpQosGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_ipv6_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.setIpv6Address),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set_ipv6_default_global_next_hop: {
      value: cdktf.stringToHclTerraform(struct!.setIpv6DefaultGlobalNextHop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_ipv6_default_next_hop: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.setIpv6DefaultNextHop),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set_ipv6_next_hop: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.setIpv6NextHop),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set_level_1: {
      value: cdktf.booleanToHclTerraform(struct!.setLevel1),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_level_1_2: {
      value: cdktf.booleanToHclTerraform(struct!.setLevel12),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_level_2: {
      value: cdktf.booleanToHclTerraform(struct!.setLevel2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_local_preference: {
      value: cdktf.numberToHclTerraform(struct!.setLocalPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_local_preference_legacy: {
      value: cdktf.numberToHclTerraform(struct!.setLocalPreferenceLegacy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_metric_change: {
      value: cdktf.stringToHclTerraform(struct!.setMetricChange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_metric_delay: {
      value: cdktf.stringToHclTerraform(struct!.setMetricDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_metric_loading: {
      value: cdktf.numberToHclTerraform(struct!.setMetricLoading),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_metric_mtu: {
      value: cdktf.numberToHclTerraform(struct!.setMetricMtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_metric_reliability: {
      value: cdktf.numberToHclTerraform(struct!.setMetricReliability),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_metric_type: {
      value: cdktf.stringToHclTerraform(struct!.setMetricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_metric_value: {
      value: cdktf.numberToHclTerraform(struct!.setMetricValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_tag: {
      value: cdktf.numberToHclTerraform(struct!.setTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_vrf: {
      value: cdktf.stringToHclTerraform(struct!.setVrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_weight: {
      value: cdktf.numberToHclTerraform(struct!.setWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_weight_legacy: {
      value: cdktf.numberToHclTerraform(struct!.setWeightLegacy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouteMapEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._continue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continue = this._continue;
    }
    if (this._continueSequenceNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.continueSequenceNumber = this._continueSequenceNumber;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._matchAsPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAsPaths = this._matchAsPaths;
    }
    if (this._matchAsPathsLegacy !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAsPathsLegacy = this._matchAsPathsLegacy;
    }
    if (this._matchCommunityListExactMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCommunityListExactMatch = this._matchCommunityListExactMatch;
    }
    if (this._matchCommunityLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCommunityLists = this._matchCommunityLists;
    }
    if (this._matchCommunityListsLegacy !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCommunityListsLegacy = this._matchCommunityListsLegacy;
    }
    if (this._matchExtcommunityLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExtcommunityLists = this._matchExtcommunityLists;
    }
    if (this._matchExtcommunityListsLegacy !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExtcommunityListsLegacy = this._matchExtcommunityListsLegacy;
    }
    if (this._matchInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchInterfaces = this._matchInterfaces;
    }
    if (this._matchIpAddressAccessLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchIpAddressAccessLists = this._matchIpAddressAccessLists;
    }
    if (this._matchIpAddressPrefixLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchIpAddressPrefixLists = this._matchIpAddressPrefixLists;
    }
    if (this._matchIpNextHopAccessLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchIpNextHopAccessLists = this._matchIpNextHopAccessLists;
    }
    if (this._matchIpNextHopPrefixLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchIpNextHopPrefixLists = this._matchIpNextHopPrefixLists;
    }
    if (this._matchIpv6AddressAccessLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchIpv6AddressAccessLists = this._matchIpv6AddressAccessLists;
    }
    if (this._matchIpv6AddressPrefixLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchIpv6AddressPrefixLists = this._matchIpv6AddressPrefixLists;
    }
    if (this._matchIpv6NextHopAccessLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchIpv6NextHopAccessLists = this._matchIpv6NextHopAccessLists;
    }
    if (this._matchIpv6NextHopPrefixLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchIpv6NextHopPrefixLists = this._matchIpv6NextHopPrefixLists;
    }
    if (this._matchLocalPreferences !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLocalPreferences = this._matchLocalPreferences;
    }
    if (this._matchLocalPreferencesLegacy !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLocalPreferencesLegacy = this._matchLocalPreferencesLegacy;
    }
    if (this._matchRouteTypeExternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRouteTypeExternal = this._matchRouteTypeExternal;
    }
    if (this._matchRouteTypeExternalType1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRouteTypeExternalType1 = this._matchRouteTypeExternalType1;
    }
    if (this._matchRouteTypeExternalType2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRouteTypeExternalType2 = this._matchRouteTypeExternalType2;
    }
    if (this._matchRouteTypeInternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRouteTypeInternal = this._matchRouteTypeInternal;
    }
    if (this._matchRouteTypeLevel1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRouteTypeLevel1 = this._matchRouteTypeLevel1;
    }
    if (this._matchRouteTypeLevel2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRouteTypeLevel2 = this._matchRouteTypeLevel2;
    }
    if (this._matchRouteTypeLocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRouteTypeLocal = this._matchRouteTypeLocal;
    }
    if (this._matchRouteTypeLocalLegacy !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRouteTypeLocalLegacy = this._matchRouteTypeLocalLegacy;
    }
    if (this._matchSourceProtocolBgp !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchSourceProtocolBgp = this._matchSourceProtocolBgp;
    }
    if (this._matchSourceProtocolConnected !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchSourceProtocolConnected = this._matchSourceProtocolConnected;
    }
    if (this._matchSourceProtocolEigrp !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchSourceProtocolEigrp = this._matchSourceProtocolEigrp;
    }
    if (this._matchSourceProtocolIsis !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchSourceProtocolIsis = this._matchSourceProtocolIsis;
    }
    if (this._matchSourceProtocolLisp !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchSourceProtocolLisp = this._matchSourceProtocolLisp;
    }
    if (this._matchSourceProtocolOspf !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchSourceProtocolOspf = this._matchSourceProtocolOspf;
    }
    if (this._matchSourceProtocolOspfv3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchSourceProtocolOspfv3 = this._matchSourceProtocolOspfv3;
    }
    if (this._matchSourceProtocolRip !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchSourceProtocolRip = this._matchSourceProtocolRip;
    }
    if (this._matchSourceProtocolStatic !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchSourceProtocolStatic = this._matchSourceProtocolStatic;
    }
    if (this._matchTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchTags = this._matchTags;
    }
    if (this._matchTrack !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchTrack = this._matchTrack;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._seq !== undefined) {
      hasAnyValues = true;
      internalValueResult.seq = this._seq;
    }
    if (this._setAsPathPrependAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.setAsPathPrependAs = this._setAsPathPrependAs;
    }
    if (this._setAsPathPrependAsLegacy !== undefined) {
      hasAnyValues = true;
      internalValueResult.setAsPathPrependAsLegacy = this._setAsPathPrependAsLegacy;
    }
    if (this._setAsPathPrependLastAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.setAsPathPrependLastAs = this._setAsPathPrependLastAs;
    }
    if (this._setAsPathPrependLastAsLegacy !== undefined) {
      hasAnyValues = true;
      internalValueResult.setAsPathPrependLastAsLegacy = this._setAsPathPrependLastAsLegacy;
    }
    if (this._setAsPathReplaceAny !== undefined) {
      hasAnyValues = true;
      internalValueResult.setAsPathReplaceAny = this._setAsPathReplaceAny;
    }
    if (this._setAsPathReplaceAs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setAsPathReplaceAs = this._setAsPathReplaceAs?.internalValue;
    }
    if (this._setAsPathTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.setAsPathTag = this._setAsPathTag;
    }
    if (this._setAsPathTagLegacy !== undefined) {
      hasAnyValues = true;
      internalValueResult.setAsPathTagLegacy = this._setAsPathTagLegacy;
    }
    if (this._setCommunities !== undefined) {
      hasAnyValues = true;
      internalValueResult.setCommunities = this._setCommunities;
    }
    if (this._setCommunitiesAdditive !== undefined) {
      hasAnyValues = true;
      internalValueResult.setCommunitiesAdditive = this._setCommunitiesAdditive;
    }
    if (this._setCommunitiesAdditiveLegacy !== undefined) {
      hasAnyValues = true;
      internalValueResult.setCommunitiesAdditiveLegacy = this._setCommunitiesAdditiveLegacy;
    }
    if (this._setCommunitiesLegacy !== undefined) {
      hasAnyValues = true;
      internalValueResult.setCommunitiesLegacy = this._setCommunitiesLegacy;
    }
    if (this._setCommunityListDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.setCommunityListDelete = this._setCommunityListDelete;
    }
    if (this._setCommunityListDeleteLegacy !== undefined) {
      hasAnyValues = true;
      internalValueResult.setCommunityListDeleteLegacy = this._setCommunityListDeleteLegacy;
    }
    if (this._setCommunityListExpanded !== undefined) {
      hasAnyValues = true;
      internalValueResult.setCommunityListExpanded = this._setCommunityListExpanded;
    }
    if (this._setCommunityListExpandedLegacy !== undefined) {
      hasAnyValues = true;
      internalValueResult.setCommunityListExpandedLegacy = this._setCommunityListExpandedLegacy;
    }
    if (this._setCommunityListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.setCommunityListName = this._setCommunityListName;
    }
    if (this._setCommunityListNameLegacy !== undefined) {
      hasAnyValues = true;
      internalValueResult.setCommunityListNameLegacy = this._setCommunityListNameLegacy;
    }
    if (this._setCommunityListStandard !== undefined) {
      hasAnyValues = true;
      internalValueResult.setCommunityListStandard = this._setCommunityListStandard;
    }
    if (this._setCommunityListStandardLegacy !== undefined) {
      hasAnyValues = true;
      internalValueResult.setCommunityListStandardLegacy = this._setCommunityListStandardLegacy;
    }
    if (this._setCommunityNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.setCommunityNone = this._setCommunityNone;
    }
    if (this._setCommunityNoneLegacy !== undefined) {
      hasAnyValues = true;
      internalValueResult.setCommunityNoneLegacy = this._setCommunityNoneLegacy;
    }
    if (this._setDefaultInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.setDefaultInterfaces = this._setDefaultInterfaces;
    }
    if (this._setExtcomunityRt !== undefined) {
      hasAnyValues = true;
      internalValueResult.setExtcomunityRt = this._setExtcomunityRt;
    }
    if (this._setExtcomunityRtLegacy !== undefined) {
      hasAnyValues = true;
      internalValueResult.setExtcomunityRtLegacy = this._setExtcomunityRtLegacy;
    }
    if (this._setExtcomunitySoo !== undefined) {
      hasAnyValues = true;
      internalValueResult.setExtcomunitySoo = this._setExtcomunitySoo;
    }
    if (this._setExtcomunitySooLegacy !== undefined) {
      hasAnyValues = true;
      internalValueResult.setExtcomunitySooLegacy = this._setExtcomunitySooLegacy;
    }
    if (this._setExtcomunityVpnDistinguisher !== undefined) {
      hasAnyValues = true;
      internalValueResult.setExtcomunityVpnDistinguisher = this._setExtcomunityVpnDistinguisher;
    }
    if (this._setExtcomunityVpnDistinguisherAdditive !== undefined) {
      hasAnyValues = true;
      internalValueResult.setExtcomunityVpnDistinguisherAdditive = this._setExtcomunityVpnDistinguisherAdditive;
    }
    if (this._setExtcomunityVpnDistinguisherLegacy !== undefined) {
      hasAnyValues = true;
      internalValueResult.setExtcomunityVpnDistinguisherLegacy = this._setExtcomunityVpnDistinguisherLegacy;
    }
    if (this._setGlobal !== undefined) {
      hasAnyValues = true;
      internalValueResult.setGlobal = this._setGlobal;
    }
    if (this._setInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.setInterfaces = this._setInterfaces;
    }
    if (this._setIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.setIpAddress = this._setIpAddress;
    }
    if (this._setIpDefaultGlobalNextHopAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.setIpDefaultGlobalNextHopAddress = this._setIpDefaultGlobalNextHopAddress;
    }
    if (this._setIpDefaultNextHopAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.setIpDefaultNextHopAddress = this._setIpDefaultNextHopAddress;
    }
    if (this._setIpGlobalNextHopAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.setIpGlobalNextHopAddress = this._setIpGlobalNextHopAddress;
    }
    if (this._setIpNextHopAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.setIpNextHopAddress = this._setIpNextHopAddress;
    }
    if (this._setIpNextHopSelf !== undefined) {
      hasAnyValues = true;
      internalValueResult.setIpNextHopSelf = this._setIpNextHopSelf;
    }
    if (this._setIpNextHopUnchanged !== undefined) {
      hasAnyValues = true;
      internalValueResult.setIpNextHopUnchanged = this._setIpNextHopUnchanged;
    }
    if (this._setIpQosGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.setIpQosGroup = this._setIpQosGroup;
    }
    if (this._setIpv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.setIpv6Address = this._setIpv6Address;
    }
    if (this._setIpv6DefaultGlobalNextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.setIpv6DefaultGlobalNextHop = this._setIpv6DefaultGlobalNextHop;
    }
    if (this._setIpv6DefaultNextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.setIpv6DefaultNextHop = this._setIpv6DefaultNextHop;
    }
    if (this._setIpv6NextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.setIpv6NextHop = this._setIpv6NextHop;
    }
    if (this._setLevel1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.setLevel1 = this._setLevel1;
    }
    if (this._setLevel12 !== undefined) {
      hasAnyValues = true;
      internalValueResult.setLevel12 = this._setLevel12;
    }
    if (this._setLevel2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.setLevel2 = this._setLevel2;
    }
    if (this._setLocalPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.setLocalPreference = this._setLocalPreference;
    }
    if (this._setLocalPreferenceLegacy !== undefined) {
      hasAnyValues = true;
      internalValueResult.setLocalPreferenceLegacy = this._setLocalPreferenceLegacy;
    }
    if (this._setMetricChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.setMetricChange = this._setMetricChange;
    }
    if (this._setMetricDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.setMetricDelay = this._setMetricDelay;
    }
    if (this._setMetricLoading !== undefined) {
      hasAnyValues = true;
      internalValueResult.setMetricLoading = this._setMetricLoading;
    }
    if (this._setMetricMtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.setMetricMtu = this._setMetricMtu;
    }
    if (this._setMetricReliability !== undefined) {
      hasAnyValues = true;
      internalValueResult.setMetricReliability = this._setMetricReliability;
    }
    if (this._setMetricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.setMetricType = this._setMetricType;
    }
    if (this._setMetricValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setMetricValue = this._setMetricValue;
    }
    if (this._setTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.setTag = this._setTag;
    }
    if (this._setVrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.setVrf = this._setVrf;
    }
    if (this._setWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.setWeight = this._setWeight;
    }
    if (this._setWeightLegacy !== undefined) {
      hasAnyValues = true;
      internalValueResult.setWeightLegacy = this._setWeightLegacy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._continue = undefined;
      this._continueSequenceNumber = undefined;
      this._description = undefined;
      this._matchAsPaths = undefined;
      this._matchAsPathsLegacy = undefined;
      this._matchCommunityListExactMatch = undefined;
      this._matchCommunityLists = undefined;
      this._matchCommunityListsLegacy = undefined;
      this._matchExtcommunityLists = undefined;
      this._matchExtcommunityListsLegacy = undefined;
      this._matchInterfaces = undefined;
      this._matchIpAddressAccessLists = undefined;
      this._matchIpAddressPrefixLists = undefined;
      this._matchIpNextHopAccessLists = undefined;
      this._matchIpNextHopPrefixLists = undefined;
      this._matchIpv6AddressAccessLists = undefined;
      this._matchIpv6AddressPrefixLists = undefined;
      this._matchIpv6NextHopAccessLists = undefined;
      this._matchIpv6NextHopPrefixLists = undefined;
      this._matchLocalPreferences = undefined;
      this._matchLocalPreferencesLegacy = undefined;
      this._matchRouteTypeExternal = undefined;
      this._matchRouteTypeExternalType1 = undefined;
      this._matchRouteTypeExternalType2 = undefined;
      this._matchRouteTypeInternal = undefined;
      this._matchRouteTypeLevel1 = undefined;
      this._matchRouteTypeLevel2 = undefined;
      this._matchRouteTypeLocal = undefined;
      this._matchRouteTypeLocalLegacy = undefined;
      this._matchSourceProtocolBgp = undefined;
      this._matchSourceProtocolConnected = undefined;
      this._matchSourceProtocolEigrp = undefined;
      this._matchSourceProtocolIsis = undefined;
      this._matchSourceProtocolLisp = undefined;
      this._matchSourceProtocolOspf = undefined;
      this._matchSourceProtocolOspfv3 = undefined;
      this._matchSourceProtocolRip = undefined;
      this._matchSourceProtocolStatic = undefined;
      this._matchTags = undefined;
      this._matchTrack = undefined;
      this._operation = undefined;
      this._seq = undefined;
      this._setAsPathPrependAs = undefined;
      this._setAsPathPrependAsLegacy = undefined;
      this._setAsPathPrependLastAs = undefined;
      this._setAsPathPrependLastAsLegacy = undefined;
      this._setAsPathReplaceAny = undefined;
      this._setAsPathReplaceAs.internalValue = undefined;
      this._setAsPathTag = undefined;
      this._setAsPathTagLegacy = undefined;
      this._setCommunities = undefined;
      this._setCommunitiesAdditive = undefined;
      this._setCommunitiesAdditiveLegacy = undefined;
      this._setCommunitiesLegacy = undefined;
      this._setCommunityListDelete = undefined;
      this._setCommunityListDeleteLegacy = undefined;
      this._setCommunityListExpanded = undefined;
      this._setCommunityListExpandedLegacy = undefined;
      this._setCommunityListName = undefined;
      this._setCommunityListNameLegacy = undefined;
      this._setCommunityListStandard = undefined;
      this._setCommunityListStandardLegacy = undefined;
      this._setCommunityNone = undefined;
      this._setCommunityNoneLegacy = undefined;
      this._setDefaultInterfaces = undefined;
      this._setExtcomunityRt = undefined;
      this._setExtcomunityRtLegacy = undefined;
      this._setExtcomunitySoo = undefined;
      this._setExtcomunitySooLegacy = undefined;
      this._setExtcomunityVpnDistinguisher = undefined;
      this._setExtcomunityVpnDistinguisherAdditive = undefined;
      this._setExtcomunityVpnDistinguisherLegacy = undefined;
      this._setGlobal = undefined;
      this._setInterfaces = undefined;
      this._setIpAddress = undefined;
      this._setIpDefaultGlobalNextHopAddress = undefined;
      this._setIpDefaultNextHopAddress = undefined;
      this._setIpGlobalNextHopAddress = undefined;
      this._setIpNextHopAddress = undefined;
      this._setIpNextHopSelf = undefined;
      this._setIpNextHopUnchanged = undefined;
      this._setIpQosGroup = undefined;
      this._setIpv6Address = undefined;
      this._setIpv6DefaultGlobalNextHop = undefined;
      this._setIpv6DefaultNextHop = undefined;
      this._setIpv6NextHop = undefined;
      this._setLevel1 = undefined;
      this._setLevel12 = undefined;
      this._setLevel2 = undefined;
      this._setLocalPreference = undefined;
      this._setLocalPreferenceLegacy = undefined;
      this._setMetricChange = undefined;
      this._setMetricDelay = undefined;
      this._setMetricLoading = undefined;
      this._setMetricMtu = undefined;
      this._setMetricReliability = undefined;
      this._setMetricType = undefined;
      this._setMetricValue = undefined;
      this._setTag = undefined;
      this._setVrf = undefined;
      this._setWeight = undefined;
      this._setWeightLegacy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._continue = value.continue;
      this._continueSequenceNumber = value.continueSequenceNumber;
      this._description = value.description;
      this._matchAsPaths = value.matchAsPaths;
      this._matchAsPathsLegacy = value.matchAsPathsLegacy;
      this._matchCommunityListExactMatch = value.matchCommunityListExactMatch;
      this._matchCommunityLists = value.matchCommunityLists;
      this._matchCommunityListsLegacy = value.matchCommunityListsLegacy;
      this._matchExtcommunityLists = value.matchExtcommunityLists;
      this._matchExtcommunityListsLegacy = value.matchExtcommunityListsLegacy;
      this._matchInterfaces = value.matchInterfaces;
      this._matchIpAddressAccessLists = value.matchIpAddressAccessLists;
      this._matchIpAddressPrefixLists = value.matchIpAddressPrefixLists;
      this._matchIpNextHopAccessLists = value.matchIpNextHopAccessLists;
      this._matchIpNextHopPrefixLists = value.matchIpNextHopPrefixLists;
      this._matchIpv6AddressAccessLists = value.matchIpv6AddressAccessLists;
      this._matchIpv6AddressPrefixLists = value.matchIpv6AddressPrefixLists;
      this._matchIpv6NextHopAccessLists = value.matchIpv6NextHopAccessLists;
      this._matchIpv6NextHopPrefixLists = value.matchIpv6NextHopPrefixLists;
      this._matchLocalPreferences = value.matchLocalPreferences;
      this._matchLocalPreferencesLegacy = value.matchLocalPreferencesLegacy;
      this._matchRouteTypeExternal = value.matchRouteTypeExternal;
      this._matchRouteTypeExternalType1 = value.matchRouteTypeExternalType1;
      this._matchRouteTypeExternalType2 = value.matchRouteTypeExternalType2;
      this._matchRouteTypeInternal = value.matchRouteTypeInternal;
      this._matchRouteTypeLevel1 = value.matchRouteTypeLevel1;
      this._matchRouteTypeLevel2 = value.matchRouteTypeLevel2;
      this._matchRouteTypeLocal = value.matchRouteTypeLocal;
      this._matchRouteTypeLocalLegacy = value.matchRouteTypeLocalLegacy;
      this._matchSourceProtocolBgp = value.matchSourceProtocolBgp;
      this._matchSourceProtocolConnected = value.matchSourceProtocolConnected;
      this._matchSourceProtocolEigrp = value.matchSourceProtocolEigrp;
      this._matchSourceProtocolIsis = value.matchSourceProtocolIsis;
      this._matchSourceProtocolLisp = value.matchSourceProtocolLisp;
      this._matchSourceProtocolOspf = value.matchSourceProtocolOspf;
      this._matchSourceProtocolOspfv3 = value.matchSourceProtocolOspfv3;
      this._matchSourceProtocolRip = value.matchSourceProtocolRip;
      this._matchSourceProtocolStatic = value.matchSourceProtocolStatic;
      this._matchTags = value.matchTags;
      this._matchTrack = value.matchTrack;
      this._operation = value.operation;
      this._seq = value.seq;
      this._setAsPathPrependAs = value.setAsPathPrependAs;
      this._setAsPathPrependAsLegacy = value.setAsPathPrependAsLegacy;
      this._setAsPathPrependLastAs = value.setAsPathPrependLastAs;
      this._setAsPathPrependLastAsLegacy = value.setAsPathPrependLastAsLegacy;
      this._setAsPathReplaceAny = value.setAsPathReplaceAny;
      this._setAsPathReplaceAs.internalValue = value.setAsPathReplaceAs;
      this._setAsPathTag = value.setAsPathTag;
      this._setAsPathTagLegacy = value.setAsPathTagLegacy;
      this._setCommunities = value.setCommunities;
      this._setCommunitiesAdditive = value.setCommunitiesAdditive;
      this._setCommunitiesAdditiveLegacy = value.setCommunitiesAdditiveLegacy;
      this._setCommunitiesLegacy = value.setCommunitiesLegacy;
      this._setCommunityListDelete = value.setCommunityListDelete;
      this._setCommunityListDeleteLegacy = value.setCommunityListDeleteLegacy;
      this._setCommunityListExpanded = value.setCommunityListExpanded;
      this._setCommunityListExpandedLegacy = value.setCommunityListExpandedLegacy;
      this._setCommunityListName = value.setCommunityListName;
      this._setCommunityListNameLegacy = value.setCommunityListNameLegacy;
      this._setCommunityListStandard = value.setCommunityListStandard;
      this._setCommunityListStandardLegacy = value.setCommunityListStandardLegacy;
      this._setCommunityNone = value.setCommunityNone;
      this._setCommunityNoneLegacy = value.setCommunityNoneLegacy;
      this._setDefaultInterfaces = value.setDefaultInterfaces;
      this._setExtcomunityRt = value.setExtcomunityRt;
      this._setExtcomunityRtLegacy = value.setExtcomunityRtLegacy;
      this._setExtcomunitySoo = value.setExtcomunitySoo;
      this._setExtcomunitySooLegacy = value.setExtcomunitySooLegacy;
      this._setExtcomunityVpnDistinguisher = value.setExtcomunityVpnDistinguisher;
      this._setExtcomunityVpnDistinguisherAdditive = value.setExtcomunityVpnDistinguisherAdditive;
      this._setExtcomunityVpnDistinguisherLegacy = value.setExtcomunityVpnDistinguisherLegacy;
      this._setGlobal = value.setGlobal;
      this._setInterfaces = value.setInterfaces;
      this._setIpAddress = value.setIpAddress;
      this._setIpDefaultGlobalNextHopAddress = value.setIpDefaultGlobalNextHopAddress;
      this._setIpDefaultNextHopAddress = value.setIpDefaultNextHopAddress;
      this._setIpGlobalNextHopAddress = value.setIpGlobalNextHopAddress;
      this._setIpNextHopAddress = value.setIpNextHopAddress;
      this._setIpNextHopSelf = value.setIpNextHopSelf;
      this._setIpNextHopUnchanged = value.setIpNextHopUnchanged;
      this._setIpQosGroup = value.setIpQosGroup;
      this._setIpv6Address = value.setIpv6Address;
      this._setIpv6DefaultGlobalNextHop = value.setIpv6DefaultGlobalNextHop;
      this._setIpv6DefaultNextHop = value.setIpv6DefaultNextHop;
      this._setIpv6NextHop = value.setIpv6NextHop;
      this._setLevel1 = value.setLevel1;
      this._setLevel12 = value.setLevel12;
      this._setLevel2 = value.setLevel2;
      this._setLocalPreference = value.setLocalPreference;
      this._setLocalPreferenceLegacy = value.setLocalPreferenceLegacy;
      this._setMetricChange = value.setMetricChange;
      this._setMetricDelay = value.setMetricDelay;
      this._setMetricLoading = value.setMetricLoading;
      this._setMetricMtu = value.setMetricMtu;
      this._setMetricReliability = value.setMetricReliability;
      this._setMetricType = value.setMetricType;
      this._setMetricValue = value.setMetricValue;
      this._setTag = value.setTag;
      this._setVrf = value.setVrf;
      this._setWeight = value.setWeight;
      this._setWeightLegacy = value.setWeightLegacy;
    }
  }

  // continue - computed: false, optional: true, required: false
  private _continue?: boolean | cdktf.IResolvable; 
  public get continue() {
    return this.getBooleanAttribute('continue');
  }
  public set continue(value: boolean | cdktf.IResolvable) {
    this._continue = value;
  }
  public resetContinue() {
    this._continue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueInput() {
    return this._continue;
  }

  // continue_sequence_number - computed: false, optional: true, required: false
  private _continueSequenceNumber?: number; 
  public get continueSequenceNumber() {
    return this.getNumberAttribute('continue_sequence_number');
  }
  public set continueSequenceNumber(value: number) {
    this._continueSequenceNumber = value;
  }
  public resetContinueSequenceNumber() {
    this._continueSequenceNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueSequenceNumberInput() {
    return this._continueSequenceNumber;
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

  // match_as_paths - computed: false, optional: true, required: false
  private _matchAsPaths?: number[]; 
  public get matchAsPaths() {
    return this.getNumberListAttribute('match_as_paths');
  }
  public set matchAsPaths(value: number[]) {
    this._matchAsPaths = value;
  }
  public resetMatchAsPaths() {
    this._matchAsPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAsPathsInput() {
    return this._matchAsPaths;
  }

  // match_as_paths_legacy - computed: false, optional: true, required: false
  private _matchAsPathsLegacy?: number[]; 
  public get matchAsPathsLegacy() {
    return this.getNumberListAttribute('match_as_paths_legacy');
  }
  public set matchAsPathsLegacy(value: number[]) {
    this._matchAsPathsLegacy = value;
  }
  public resetMatchAsPathsLegacy() {
    this._matchAsPathsLegacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAsPathsLegacyInput() {
    return this._matchAsPathsLegacy;
  }

  // match_community_list_exact_match - computed: false, optional: true, required: false
  private _matchCommunityListExactMatch?: boolean | cdktf.IResolvable; 
  public get matchCommunityListExactMatch() {
    return this.getBooleanAttribute('match_community_list_exact_match');
  }
  public set matchCommunityListExactMatch(value: boolean | cdktf.IResolvable) {
    this._matchCommunityListExactMatch = value;
  }
  public resetMatchCommunityListExactMatch() {
    this._matchCommunityListExactMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCommunityListExactMatchInput() {
    return this._matchCommunityListExactMatch;
  }

  // match_community_lists - computed: false, optional: true, required: false
  private _matchCommunityLists?: string[]; 
  public get matchCommunityLists() {
    return this.getListAttribute('match_community_lists');
  }
  public set matchCommunityLists(value: string[]) {
    this._matchCommunityLists = value;
  }
  public resetMatchCommunityLists() {
    this._matchCommunityLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCommunityListsInput() {
    return this._matchCommunityLists;
  }

  // match_community_lists_legacy - computed: false, optional: true, required: false
  private _matchCommunityListsLegacy?: string[]; 
  public get matchCommunityListsLegacy() {
    return this.getListAttribute('match_community_lists_legacy');
  }
  public set matchCommunityListsLegacy(value: string[]) {
    this._matchCommunityListsLegacy = value;
  }
  public resetMatchCommunityListsLegacy() {
    this._matchCommunityListsLegacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCommunityListsLegacyInput() {
    return this._matchCommunityListsLegacy;
  }

  // match_extcommunity_lists - computed: false, optional: true, required: false
  private _matchExtcommunityLists?: string[]; 
  public get matchExtcommunityLists() {
    return this.getListAttribute('match_extcommunity_lists');
  }
  public set matchExtcommunityLists(value: string[]) {
    this._matchExtcommunityLists = value;
  }
  public resetMatchExtcommunityLists() {
    this._matchExtcommunityLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExtcommunityListsInput() {
    return this._matchExtcommunityLists;
  }

  // match_extcommunity_lists_legacy - computed: false, optional: true, required: false
  private _matchExtcommunityListsLegacy?: string[]; 
  public get matchExtcommunityListsLegacy() {
    return this.getListAttribute('match_extcommunity_lists_legacy');
  }
  public set matchExtcommunityListsLegacy(value: string[]) {
    this._matchExtcommunityListsLegacy = value;
  }
  public resetMatchExtcommunityListsLegacy() {
    this._matchExtcommunityListsLegacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExtcommunityListsLegacyInput() {
    return this._matchExtcommunityListsLegacy;
  }

  // match_interfaces - computed: false, optional: true, required: false
  private _matchInterfaces?: string[]; 
  public get matchInterfaces() {
    return this.getListAttribute('match_interfaces');
  }
  public set matchInterfaces(value: string[]) {
    this._matchInterfaces = value;
  }
  public resetMatchInterfaces() {
    this._matchInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInterfacesInput() {
    return this._matchInterfaces;
  }

  // match_ip_address_access_lists - computed: false, optional: true, required: false
  private _matchIpAddressAccessLists?: string[]; 
  public get matchIpAddressAccessLists() {
    return this.getListAttribute('match_ip_address_access_lists');
  }
  public set matchIpAddressAccessLists(value: string[]) {
    this._matchIpAddressAccessLists = value;
  }
  public resetMatchIpAddressAccessLists() {
    this._matchIpAddressAccessLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchIpAddressAccessListsInput() {
    return this._matchIpAddressAccessLists;
  }

  // match_ip_address_prefix_lists - computed: false, optional: true, required: false
  private _matchIpAddressPrefixLists?: string[]; 
  public get matchIpAddressPrefixLists() {
    return this.getListAttribute('match_ip_address_prefix_lists');
  }
  public set matchIpAddressPrefixLists(value: string[]) {
    this._matchIpAddressPrefixLists = value;
  }
  public resetMatchIpAddressPrefixLists() {
    this._matchIpAddressPrefixLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchIpAddressPrefixListsInput() {
    return this._matchIpAddressPrefixLists;
  }

  // match_ip_next_hop_access_lists - computed: false, optional: true, required: false
  private _matchIpNextHopAccessLists?: string[]; 
  public get matchIpNextHopAccessLists() {
    return this.getListAttribute('match_ip_next_hop_access_lists');
  }
  public set matchIpNextHopAccessLists(value: string[]) {
    this._matchIpNextHopAccessLists = value;
  }
  public resetMatchIpNextHopAccessLists() {
    this._matchIpNextHopAccessLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchIpNextHopAccessListsInput() {
    return this._matchIpNextHopAccessLists;
  }

  // match_ip_next_hop_prefix_lists - computed: false, optional: true, required: false
  private _matchIpNextHopPrefixLists?: string[]; 
  public get matchIpNextHopPrefixLists() {
    return this.getListAttribute('match_ip_next_hop_prefix_lists');
  }
  public set matchIpNextHopPrefixLists(value: string[]) {
    this._matchIpNextHopPrefixLists = value;
  }
  public resetMatchIpNextHopPrefixLists() {
    this._matchIpNextHopPrefixLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchIpNextHopPrefixListsInput() {
    return this._matchIpNextHopPrefixLists;
  }

  // match_ipv6_address_access_lists - computed: false, optional: true, required: false
  private _matchIpv6AddressAccessLists?: string; 
  public get matchIpv6AddressAccessLists() {
    return this.getStringAttribute('match_ipv6_address_access_lists');
  }
  public set matchIpv6AddressAccessLists(value: string) {
    this._matchIpv6AddressAccessLists = value;
  }
  public resetMatchIpv6AddressAccessLists() {
    this._matchIpv6AddressAccessLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchIpv6AddressAccessListsInput() {
    return this._matchIpv6AddressAccessLists;
  }

  // match_ipv6_address_prefix_lists - computed: false, optional: true, required: false
  private _matchIpv6AddressPrefixLists?: string; 
  public get matchIpv6AddressPrefixLists() {
    return this.getStringAttribute('match_ipv6_address_prefix_lists');
  }
  public set matchIpv6AddressPrefixLists(value: string) {
    this._matchIpv6AddressPrefixLists = value;
  }
  public resetMatchIpv6AddressPrefixLists() {
    this._matchIpv6AddressPrefixLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchIpv6AddressPrefixListsInput() {
    return this._matchIpv6AddressPrefixLists;
  }

  // match_ipv6_next_hop_access_lists - computed: false, optional: true, required: false
  private _matchIpv6NextHopAccessLists?: string; 
  public get matchIpv6NextHopAccessLists() {
    return this.getStringAttribute('match_ipv6_next_hop_access_lists');
  }
  public set matchIpv6NextHopAccessLists(value: string) {
    this._matchIpv6NextHopAccessLists = value;
  }
  public resetMatchIpv6NextHopAccessLists() {
    this._matchIpv6NextHopAccessLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchIpv6NextHopAccessListsInput() {
    return this._matchIpv6NextHopAccessLists;
  }

  // match_ipv6_next_hop_prefix_lists - computed: false, optional: true, required: false
  private _matchIpv6NextHopPrefixLists?: string; 
  public get matchIpv6NextHopPrefixLists() {
    return this.getStringAttribute('match_ipv6_next_hop_prefix_lists');
  }
  public set matchIpv6NextHopPrefixLists(value: string) {
    this._matchIpv6NextHopPrefixLists = value;
  }
  public resetMatchIpv6NextHopPrefixLists() {
    this._matchIpv6NextHopPrefixLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchIpv6NextHopPrefixListsInput() {
    return this._matchIpv6NextHopPrefixLists;
  }

  // match_local_preferences - computed: false, optional: true, required: false
  private _matchLocalPreferences?: number[]; 
  public get matchLocalPreferences() {
    return this.getNumberListAttribute('match_local_preferences');
  }
  public set matchLocalPreferences(value: number[]) {
    this._matchLocalPreferences = value;
  }
  public resetMatchLocalPreferences() {
    this._matchLocalPreferences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLocalPreferencesInput() {
    return this._matchLocalPreferences;
  }

  // match_local_preferences_legacy - computed: false, optional: true, required: false
  private _matchLocalPreferencesLegacy?: number[]; 
  public get matchLocalPreferencesLegacy() {
    return this.getNumberListAttribute('match_local_preferences_legacy');
  }
  public set matchLocalPreferencesLegacy(value: number[]) {
    this._matchLocalPreferencesLegacy = value;
  }
  public resetMatchLocalPreferencesLegacy() {
    this._matchLocalPreferencesLegacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLocalPreferencesLegacyInput() {
    return this._matchLocalPreferencesLegacy;
  }

  // match_route_type_external - computed: false, optional: true, required: false
  private _matchRouteTypeExternal?: boolean | cdktf.IResolvable; 
  public get matchRouteTypeExternal() {
    return this.getBooleanAttribute('match_route_type_external');
  }
  public set matchRouteTypeExternal(value: boolean | cdktf.IResolvable) {
    this._matchRouteTypeExternal = value;
  }
  public resetMatchRouteTypeExternal() {
    this._matchRouteTypeExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRouteTypeExternalInput() {
    return this._matchRouteTypeExternal;
  }

  // match_route_type_external_type_1 - computed: false, optional: true, required: false
  private _matchRouteTypeExternalType1?: boolean | cdktf.IResolvable; 
  public get matchRouteTypeExternalType1() {
    return this.getBooleanAttribute('match_route_type_external_type_1');
  }
  public set matchRouteTypeExternalType1(value: boolean | cdktf.IResolvable) {
    this._matchRouteTypeExternalType1 = value;
  }
  public resetMatchRouteTypeExternalType1() {
    this._matchRouteTypeExternalType1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRouteTypeExternalType1Input() {
    return this._matchRouteTypeExternalType1;
  }

  // match_route_type_external_type_2 - computed: false, optional: true, required: false
  private _matchRouteTypeExternalType2?: boolean | cdktf.IResolvable; 
  public get matchRouteTypeExternalType2() {
    return this.getBooleanAttribute('match_route_type_external_type_2');
  }
  public set matchRouteTypeExternalType2(value: boolean | cdktf.IResolvable) {
    this._matchRouteTypeExternalType2 = value;
  }
  public resetMatchRouteTypeExternalType2() {
    this._matchRouteTypeExternalType2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRouteTypeExternalType2Input() {
    return this._matchRouteTypeExternalType2;
  }

  // match_route_type_internal - computed: false, optional: true, required: false
  private _matchRouteTypeInternal?: boolean | cdktf.IResolvable; 
  public get matchRouteTypeInternal() {
    return this.getBooleanAttribute('match_route_type_internal');
  }
  public set matchRouteTypeInternal(value: boolean | cdktf.IResolvable) {
    this._matchRouteTypeInternal = value;
  }
  public resetMatchRouteTypeInternal() {
    this._matchRouteTypeInternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRouteTypeInternalInput() {
    return this._matchRouteTypeInternal;
  }

  // match_route_type_level_1 - computed: false, optional: true, required: false
  private _matchRouteTypeLevel1?: boolean | cdktf.IResolvable; 
  public get matchRouteTypeLevel1() {
    return this.getBooleanAttribute('match_route_type_level_1');
  }
  public set matchRouteTypeLevel1(value: boolean | cdktf.IResolvable) {
    this._matchRouteTypeLevel1 = value;
  }
  public resetMatchRouteTypeLevel1() {
    this._matchRouteTypeLevel1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRouteTypeLevel1Input() {
    return this._matchRouteTypeLevel1;
  }

  // match_route_type_level_2 - computed: false, optional: true, required: false
  private _matchRouteTypeLevel2?: boolean | cdktf.IResolvable; 
  public get matchRouteTypeLevel2() {
    return this.getBooleanAttribute('match_route_type_level_2');
  }
  public set matchRouteTypeLevel2(value: boolean | cdktf.IResolvable) {
    this._matchRouteTypeLevel2 = value;
  }
  public resetMatchRouteTypeLevel2() {
    this._matchRouteTypeLevel2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRouteTypeLevel2Input() {
    return this._matchRouteTypeLevel2;
  }

  // match_route_type_local - computed: false, optional: true, required: false
  private _matchRouteTypeLocal?: boolean | cdktf.IResolvable; 
  public get matchRouteTypeLocal() {
    return this.getBooleanAttribute('match_route_type_local');
  }
  public set matchRouteTypeLocal(value: boolean | cdktf.IResolvable) {
    this._matchRouteTypeLocal = value;
  }
  public resetMatchRouteTypeLocal() {
    this._matchRouteTypeLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRouteTypeLocalInput() {
    return this._matchRouteTypeLocal;
  }

  // match_route_type_local_legacy - computed: false, optional: true, required: false
  private _matchRouteTypeLocalLegacy?: boolean | cdktf.IResolvable; 
  public get matchRouteTypeLocalLegacy() {
    return this.getBooleanAttribute('match_route_type_local_legacy');
  }
  public set matchRouteTypeLocalLegacy(value: boolean | cdktf.IResolvable) {
    this._matchRouteTypeLocalLegacy = value;
  }
  public resetMatchRouteTypeLocalLegacy() {
    this._matchRouteTypeLocalLegacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRouteTypeLocalLegacyInput() {
    return this._matchRouteTypeLocalLegacy;
  }

  // match_source_protocol_bgp - computed: false, optional: true, required: false
  private _matchSourceProtocolBgp?: string[]; 
  public get matchSourceProtocolBgp() {
    return this.getListAttribute('match_source_protocol_bgp');
  }
  public set matchSourceProtocolBgp(value: string[]) {
    this._matchSourceProtocolBgp = value;
  }
  public resetMatchSourceProtocolBgp() {
    this._matchSourceProtocolBgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchSourceProtocolBgpInput() {
    return this._matchSourceProtocolBgp;
  }

  // match_source_protocol_connected - computed: false, optional: true, required: false
  private _matchSourceProtocolConnected?: boolean | cdktf.IResolvable; 
  public get matchSourceProtocolConnected() {
    return this.getBooleanAttribute('match_source_protocol_connected');
  }
  public set matchSourceProtocolConnected(value: boolean | cdktf.IResolvable) {
    this._matchSourceProtocolConnected = value;
  }
  public resetMatchSourceProtocolConnected() {
    this._matchSourceProtocolConnected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchSourceProtocolConnectedInput() {
    return this._matchSourceProtocolConnected;
  }

  // match_source_protocol_eigrp - computed: false, optional: true, required: false
  private _matchSourceProtocolEigrp?: string[]; 
  public get matchSourceProtocolEigrp() {
    return this.getListAttribute('match_source_protocol_eigrp');
  }
  public set matchSourceProtocolEigrp(value: string[]) {
    this._matchSourceProtocolEigrp = value;
  }
  public resetMatchSourceProtocolEigrp() {
    this._matchSourceProtocolEigrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchSourceProtocolEigrpInput() {
    return this._matchSourceProtocolEigrp;
  }

  // match_source_protocol_isis - computed: false, optional: true, required: false
  private _matchSourceProtocolIsis?: boolean | cdktf.IResolvable; 
  public get matchSourceProtocolIsis() {
    return this.getBooleanAttribute('match_source_protocol_isis');
  }
  public set matchSourceProtocolIsis(value: boolean | cdktf.IResolvable) {
    this._matchSourceProtocolIsis = value;
  }
  public resetMatchSourceProtocolIsis() {
    this._matchSourceProtocolIsis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchSourceProtocolIsisInput() {
    return this._matchSourceProtocolIsis;
  }

  // match_source_protocol_lisp - computed: false, optional: true, required: false
  private _matchSourceProtocolLisp?: boolean | cdktf.IResolvable; 
  public get matchSourceProtocolLisp() {
    return this.getBooleanAttribute('match_source_protocol_lisp');
  }
  public set matchSourceProtocolLisp(value: boolean | cdktf.IResolvable) {
    this._matchSourceProtocolLisp = value;
  }
  public resetMatchSourceProtocolLisp() {
    this._matchSourceProtocolLisp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchSourceProtocolLispInput() {
    return this._matchSourceProtocolLisp;
  }

  // match_source_protocol_ospf - computed: false, optional: true, required: false
  private _matchSourceProtocolOspf?: string[]; 
  public get matchSourceProtocolOspf() {
    return this.getListAttribute('match_source_protocol_ospf');
  }
  public set matchSourceProtocolOspf(value: string[]) {
    this._matchSourceProtocolOspf = value;
  }
  public resetMatchSourceProtocolOspf() {
    this._matchSourceProtocolOspf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchSourceProtocolOspfInput() {
    return this._matchSourceProtocolOspf;
  }

  // match_source_protocol_ospfv3 - computed: false, optional: true, required: false
  private _matchSourceProtocolOspfv3?: string[]; 
  public get matchSourceProtocolOspfv3() {
    return this.getListAttribute('match_source_protocol_ospfv3');
  }
  public set matchSourceProtocolOspfv3(value: string[]) {
    this._matchSourceProtocolOspfv3 = value;
  }
  public resetMatchSourceProtocolOspfv3() {
    this._matchSourceProtocolOspfv3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchSourceProtocolOspfv3Input() {
    return this._matchSourceProtocolOspfv3;
  }

  // match_source_protocol_rip - computed: false, optional: true, required: false
  private _matchSourceProtocolRip?: boolean | cdktf.IResolvable; 
  public get matchSourceProtocolRip() {
    return this.getBooleanAttribute('match_source_protocol_rip');
  }
  public set matchSourceProtocolRip(value: boolean | cdktf.IResolvable) {
    this._matchSourceProtocolRip = value;
  }
  public resetMatchSourceProtocolRip() {
    this._matchSourceProtocolRip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchSourceProtocolRipInput() {
    return this._matchSourceProtocolRip;
  }

  // match_source_protocol_static - computed: false, optional: true, required: false
  private _matchSourceProtocolStatic?: boolean | cdktf.IResolvable; 
  public get matchSourceProtocolStatic() {
    return this.getBooleanAttribute('match_source_protocol_static');
  }
  public set matchSourceProtocolStatic(value: boolean | cdktf.IResolvable) {
    this._matchSourceProtocolStatic = value;
  }
  public resetMatchSourceProtocolStatic() {
    this._matchSourceProtocolStatic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchSourceProtocolStaticInput() {
    return this._matchSourceProtocolStatic;
  }

  // match_tags - computed: false, optional: true, required: false
  private _matchTags?: number[]; 
  public get matchTags() {
    return this.getNumberListAttribute('match_tags');
  }
  public set matchTags(value: number[]) {
    this._matchTags = value;
  }
  public resetMatchTags() {
    this._matchTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTagsInput() {
    return this._matchTags;
  }

  // match_track - computed: false, optional: true, required: false
  private _matchTrack?: number; 
  public get matchTrack() {
    return this.getNumberAttribute('match_track');
  }
  public set matchTrack(value: number) {
    this._matchTrack = value;
  }
  public resetMatchTrack() {
    this._matchTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTrackInput() {
    return this._matchTrack;
  }

  // operation - computed: false, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // seq - computed: false, optional: false, required: true
  private _seq?: number; 
  public get seq() {
    return this.getNumberAttribute('seq');
  }
  public set seq(value: number) {
    this._seq = value;
  }
  // Temporarily expose input value. Use with caution.
  public get seqInput() {
    return this._seq;
  }

  // set_as_path_prepend_as - computed: false, optional: true, required: false
  private _setAsPathPrependAs?: string; 
  public get setAsPathPrependAs() {
    return this.getStringAttribute('set_as_path_prepend_as');
  }
  public set setAsPathPrependAs(value: string) {
    this._setAsPathPrependAs = value;
  }
  public resetSetAsPathPrependAs() {
    this._setAsPathPrependAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setAsPathPrependAsInput() {
    return this._setAsPathPrependAs;
  }

  // set_as_path_prepend_as_legacy - computed: false, optional: true, required: false
  private _setAsPathPrependAsLegacy?: string; 
  public get setAsPathPrependAsLegacy() {
    return this.getStringAttribute('set_as_path_prepend_as_legacy');
  }
  public set setAsPathPrependAsLegacy(value: string) {
    this._setAsPathPrependAsLegacy = value;
  }
  public resetSetAsPathPrependAsLegacy() {
    this._setAsPathPrependAsLegacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setAsPathPrependAsLegacyInput() {
    return this._setAsPathPrependAsLegacy;
  }

  // set_as_path_prepend_last_as - computed: false, optional: true, required: false
  private _setAsPathPrependLastAs?: number; 
  public get setAsPathPrependLastAs() {
    return this.getNumberAttribute('set_as_path_prepend_last_as');
  }
  public set setAsPathPrependLastAs(value: number) {
    this._setAsPathPrependLastAs = value;
  }
  public resetSetAsPathPrependLastAs() {
    this._setAsPathPrependLastAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setAsPathPrependLastAsInput() {
    return this._setAsPathPrependLastAs;
  }

  // set_as_path_prepend_last_as_legacy - computed: false, optional: true, required: false
  private _setAsPathPrependLastAsLegacy?: number; 
  public get setAsPathPrependLastAsLegacy() {
    return this.getNumberAttribute('set_as_path_prepend_last_as_legacy');
  }
  public set setAsPathPrependLastAsLegacy(value: number) {
    this._setAsPathPrependLastAsLegacy = value;
  }
  public resetSetAsPathPrependLastAsLegacy() {
    this._setAsPathPrependLastAsLegacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setAsPathPrependLastAsLegacyInput() {
    return this._setAsPathPrependLastAsLegacy;
  }

  // set_as_path_replace_any - computed: false, optional: true, required: false
  private _setAsPathReplaceAny?: boolean | cdktf.IResolvable; 
  public get setAsPathReplaceAny() {
    return this.getBooleanAttribute('set_as_path_replace_any');
  }
  public set setAsPathReplaceAny(value: boolean | cdktf.IResolvable) {
    this._setAsPathReplaceAny = value;
  }
  public resetSetAsPathReplaceAny() {
    this._setAsPathReplaceAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setAsPathReplaceAnyInput() {
    return this._setAsPathReplaceAny;
  }

  // set_as_path_replace_as - computed: false, optional: true, required: false
  private _setAsPathReplaceAs = new RouteMapEntriesSetAsPathReplaceAsList(this, "set_as_path_replace_as", false);
  public get setAsPathReplaceAs() {
    return this._setAsPathReplaceAs;
  }
  public putSetAsPathReplaceAs(value: RouteMapEntriesSetAsPathReplaceAs[] | cdktf.IResolvable) {
    this._setAsPathReplaceAs.internalValue = value;
  }
  public resetSetAsPathReplaceAs() {
    this._setAsPathReplaceAs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setAsPathReplaceAsInput() {
    return this._setAsPathReplaceAs.internalValue;
  }

  // set_as_path_tag - computed: false, optional: true, required: false
  private _setAsPathTag?: boolean | cdktf.IResolvable; 
  public get setAsPathTag() {
    return this.getBooleanAttribute('set_as_path_tag');
  }
  public set setAsPathTag(value: boolean | cdktf.IResolvable) {
    this._setAsPathTag = value;
  }
  public resetSetAsPathTag() {
    this._setAsPathTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setAsPathTagInput() {
    return this._setAsPathTag;
  }

  // set_as_path_tag_legacy - computed: false, optional: true, required: false
  private _setAsPathTagLegacy?: boolean | cdktf.IResolvable; 
  public get setAsPathTagLegacy() {
    return this.getBooleanAttribute('set_as_path_tag_legacy');
  }
  public set setAsPathTagLegacy(value: boolean | cdktf.IResolvable) {
    this._setAsPathTagLegacy = value;
  }
  public resetSetAsPathTagLegacy() {
    this._setAsPathTagLegacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setAsPathTagLegacyInput() {
    return this._setAsPathTagLegacy;
  }

  // set_communities - computed: false, optional: true, required: false
  private _setCommunities?: string[]; 
  public get setCommunities() {
    return this.getListAttribute('set_communities');
  }
  public set setCommunities(value: string[]) {
    this._setCommunities = value;
  }
  public resetSetCommunities() {
    this._setCommunities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCommunitiesInput() {
    return this._setCommunities;
  }

  // set_communities_additive - computed: false, optional: true, required: false
  private _setCommunitiesAdditive?: boolean | cdktf.IResolvable; 
  public get setCommunitiesAdditive() {
    return this.getBooleanAttribute('set_communities_additive');
  }
  public set setCommunitiesAdditive(value: boolean | cdktf.IResolvable) {
    this._setCommunitiesAdditive = value;
  }
  public resetSetCommunitiesAdditive() {
    this._setCommunitiesAdditive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCommunitiesAdditiveInput() {
    return this._setCommunitiesAdditive;
  }

  // set_communities_additive_legacy - computed: false, optional: true, required: false
  private _setCommunitiesAdditiveLegacy?: boolean | cdktf.IResolvable; 
  public get setCommunitiesAdditiveLegacy() {
    return this.getBooleanAttribute('set_communities_additive_legacy');
  }
  public set setCommunitiesAdditiveLegacy(value: boolean | cdktf.IResolvable) {
    this._setCommunitiesAdditiveLegacy = value;
  }
  public resetSetCommunitiesAdditiveLegacy() {
    this._setCommunitiesAdditiveLegacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCommunitiesAdditiveLegacyInput() {
    return this._setCommunitiesAdditiveLegacy;
  }

  // set_communities_legacy - computed: false, optional: true, required: false
  private _setCommunitiesLegacy?: string[]; 
  public get setCommunitiesLegacy() {
    return this.getListAttribute('set_communities_legacy');
  }
  public set setCommunitiesLegacy(value: string[]) {
    this._setCommunitiesLegacy = value;
  }
  public resetSetCommunitiesLegacy() {
    this._setCommunitiesLegacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCommunitiesLegacyInput() {
    return this._setCommunitiesLegacy;
  }

  // set_community_list_delete - computed: false, optional: true, required: false
  private _setCommunityListDelete?: boolean | cdktf.IResolvable; 
  public get setCommunityListDelete() {
    return this.getBooleanAttribute('set_community_list_delete');
  }
  public set setCommunityListDelete(value: boolean | cdktf.IResolvable) {
    this._setCommunityListDelete = value;
  }
  public resetSetCommunityListDelete() {
    this._setCommunityListDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCommunityListDeleteInput() {
    return this._setCommunityListDelete;
  }

  // set_community_list_delete_legacy - computed: false, optional: true, required: false
  private _setCommunityListDeleteLegacy?: boolean | cdktf.IResolvable; 
  public get setCommunityListDeleteLegacy() {
    return this.getBooleanAttribute('set_community_list_delete_legacy');
  }
  public set setCommunityListDeleteLegacy(value: boolean | cdktf.IResolvable) {
    this._setCommunityListDeleteLegacy = value;
  }
  public resetSetCommunityListDeleteLegacy() {
    this._setCommunityListDeleteLegacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCommunityListDeleteLegacyInput() {
    return this._setCommunityListDeleteLegacy;
  }

  // set_community_list_expanded - computed: false, optional: true, required: false
  private _setCommunityListExpanded?: number; 
  public get setCommunityListExpanded() {
    return this.getNumberAttribute('set_community_list_expanded');
  }
  public set setCommunityListExpanded(value: number) {
    this._setCommunityListExpanded = value;
  }
  public resetSetCommunityListExpanded() {
    this._setCommunityListExpanded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCommunityListExpandedInput() {
    return this._setCommunityListExpanded;
  }

  // set_community_list_expanded_legacy - computed: false, optional: true, required: false
  private _setCommunityListExpandedLegacy?: number; 
  public get setCommunityListExpandedLegacy() {
    return this.getNumberAttribute('set_community_list_expanded_legacy');
  }
  public set setCommunityListExpandedLegacy(value: number) {
    this._setCommunityListExpandedLegacy = value;
  }
  public resetSetCommunityListExpandedLegacy() {
    this._setCommunityListExpandedLegacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCommunityListExpandedLegacyInput() {
    return this._setCommunityListExpandedLegacy;
  }

  // set_community_list_name - computed: false, optional: true, required: false
  private _setCommunityListName?: string; 
  public get setCommunityListName() {
    return this.getStringAttribute('set_community_list_name');
  }
  public set setCommunityListName(value: string) {
    this._setCommunityListName = value;
  }
  public resetSetCommunityListName() {
    this._setCommunityListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCommunityListNameInput() {
    return this._setCommunityListName;
  }

  // set_community_list_name_legacy - computed: false, optional: true, required: false
  private _setCommunityListNameLegacy?: string; 
  public get setCommunityListNameLegacy() {
    return this.getStringAttribute('set_community_list_name_legacy');
  }
  public set setCommunityListNameLegacy(value: string) {
    this._setCommunityListNameLegacy = value;
  }
  public resetSetCommunityListNameLegacy() {
    this._setCommunityListNameLegacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCommunityListNameLegacyInput() {
    return this._setCommunityListNameLegacy;
  }

  // set_community_list_standard - computed: false, optional: true, required: false
  private _setCommunityListStandard?: number; 
  public get setCommunityListStandard() {
    return this.getNumberAttribute('set_community_list_standard');
  }
  public set setCommunityListStandard(value: number) {
    this._setCommunityListStandard = value;
  }
  public resetSetCommunityListStandard() {
    this._setCommunityListStandard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCommunityListStandardInput() {
    return this._setCommunityListStandard;
  }

  // set_community_list_standard_legacy - computed: false, optional: true, required: false
  private _setCommunityListStandardLegacy?: number; 
  public get setCommunityListStandardLegacy() {
    return this.getNumberAttribute('set_community_list_standard_legacy');
  }
  public set setCommunityListStandardLegacy(value: number) {
    this._setCommunityListStandardLegacy = value;
  }
  public resetSetCommunityListStandardLegacy() {
    this._setCommunityListStandardLegacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCommunityListStandardLegacyInput() {
    return this._setCommunityListStandardLegacy;
  }

  // set_community_none - computed: false, optional: true, required: false
  private _setCommunityNone?: boolean | cdktf.IResolvable; 
  public get setCommunityNone() {
    return this.getBooleanAttribute('set_community_none');
  }
  public set setCommunityNone(value: boolean | cdktf.IResolvable) {
    this._setCommunityNone = value;
  }
  public resetSetCommunityNone() {
    this._setCommunityNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCommunityNoneInput() {
    return this._setCommunityNone;
  }

  // set_community_none_legacy - computed: false, optional: true, required: false
  private _setCommunityNoneLegacy?: boolean | cdktf.IResolvable; 
  public get setCommunityNoneLegacy() {
    return this.getBooleanAttribute('set_community_none_legacy');
  }
  public set setCommunityNoneLegacy(value: boolean | cdktf.IResolvable) {
    this._setCommunityNoneLegacy = value;
  }
  public resetSetCommunityNoneLegacy() {
    this._setCommunityNoneLegacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCommunityNoneLegacyInput() {
    return this._setCommunityNoneLegacy;
  }

  // set_default_interfaces - computed: false, optional: true, required: false
  private _setDefaultInterfaces?: string[]; 
  public get setDefaultInterfaces() {
    return this.getListAttribute('set_default_interfaces');
  }
  public set setDefaultInterfaces(value: string[]) {
    this._setDefaultInterfaces = value;
  }
  public resetSetDefaultInterfaces() {
    this._setDefaultInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setDefaultInterfacesInput() {
    return this._setDefaultInterfaces;
  }

  // set_extcomunity_rt - computed: false, optional: true, required: false
  private _setExtcomunityRt?: string[]; 
  public get setExtcomunityRt() {
    return this.getListAttribute('set_extcomunity_rt');
  }
  public set setExtcomunityRt(value: string[]) {
    this._setExtcomunityRt = value;
  }
  public resetSetExtcomunityRt() {
    this._setExtcomunityRt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setExtcomunityRtInput() {
    return this._setExtcomunityRt;
  }

  // set_extcomunity_rt_legacy - computed: false, optional: true, required: false
  private _setExtcomunityRtLegacy?: string[]; 
  public get setExtcomunityRtLegacy() {
    return this.getListAttribute('set_extcomunity_rt_legacy');
  }
  public set setExtcomunityRtLegacy(value: string[]) {
    this._setExtcomunityRtLegacy = value;
  }
  public resetSetExtcomunityRtLegacy() {
    this._setExtcomunityRtLegacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setExtcomunityRtLegacyInput() {
    return this._setExtcomunityRtLegacy;
  }

  // set_extcomunity_soo - computed: false, optional: true, required: false
  private _setExtcomunitySoo?: string; 
  public get setExtcomunitySoo() {
    return this.getStringAttribute('set_extcomunity_soo');
  }
  public set setExtcomunitySoo(value: string) {
    this._setExtcomunitySoo = value;
  }
  public resetSetExtcomunitySoo() {
    this._setExtcomunitySoo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setExtcomunitySooInput() {
    return this._setExtcomunitySoo;
  }

  // set_extcomunity_soo_legacy - computed: false, optional: true, required: false
  private _setExtcomunitySooLegacy?: string; 
  public get setExtcomunitySooLegacy() {
    return this.getStringAttribute('set_extcomunity_soo_legacy');
  }
  public set setExtcomunitySooLegacy(value: string) {
    this._setExtcomunitySooLegacy = value;
  }
  public resetSetExtcomunitySooLegacy() {
    this._setExtcomunitySooLegacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setExtcomunitySooLegacyInput() {
    return this._setExtcomunitySooLegacy;
  }

  // set_extcomunity_vpn_distinguisher - computed: false, optional: true, required: false
  private _setExtcomunityVpnDistinguisher?: string; 
  public get setExtcomunityVpnDistinguisher() {
    return this.getStringAttribute('set_extcomunity_vpn_distinguisher');
  }
  public set setExtcomunityVpnDistinguisher(value: string) {
    this._setExtcomunityVpnDistinguisher = value;
  }
  public resetSetExtcomunityVpnDistinguisher() {
    this._setExtcomunityVpnDistinguisher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setExtcomunityVpnDistinguisherInput() {
    return this._setExtcomunityVpnDistinguisher;
  }

  // set_extcomunity_vpn_distinguisher_additive - computed: false, optional: true, required: false
  private _setExtcomunityVpnDistinguisherAdditive?: boolean | cdktf.IResolvable; 
  public get setExtcomunityVpnDistinguisherAdditive() {
    return this.getBooleanAttribute('set_extcomunity_vpn_distinguisher_additive');
  }
  public set setExtcomunityVpnDistinguisherAdditive(value: boolean | cdktf.IResolvable) {
    this._setExtcomunityVpnDistinguisherAdditive = value;
  }
  public resetSetExtcomunityVpnDistinguisherAdditive() {
    this._setExtcomunityVpnDistinguisherAdditive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setExtcomunityVpnDistinguisherAdditiveInput() {
    return this._setExtcomunityVpnDistinguisherAdditive;
  }

  // set_extcomunity_vpn_distinguisher_legacy - computed: false, optional: true, required: false
  private _setExtcomunityVpnDistinguisherLegacy?: string; 
  public get setExtcomunityVpnDistinguisherLegacy() {
    return this.getStringAttribute('set_extcomunity_vpn_distinguisher_legacy');
  }
  public set setExtcomunityVpnDistinguisherLegacy(value: string) {
    this._setExtcomunityVpnDistinguisherLegacy = value;
  }
  public resetSetExtcomunityVpnDistinguisherLegacy() {
    this._setExtcomunityVpnDistinguisherLegacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setExtcomunityVpnDistinguisherLegacyInput() {
    return this._setExtcomunityVpnDistinguisherLegacy;
  }

  // set_global - computed: false, optional: true, required: false
  private _setGlobal?: boolean | cdktf.IResolvable; 
  public get setGlobal() {
    return this.getBooleanAttribute('set_global');
  }
  public set setGlobal(value: boolean | cdktf.IResolvable) {
    this._setGlobal = value;
  }
  public resetSetGlobal() {
    this._setGlobal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setGlobalInput() {
    return this._setGlobal;
  }

  // set_interfaces - computed: false, optional: true, required: false
  private _setInterfaces?: string[]; 
  public get setInterfaces() {
    return this.getListAttribute('set_interfaces');
  }
  public set setInterfaces(value: string[]) {
    this._setInterfaces = value;
  }
  public resetSetInterfaces() {
    this._setInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInterfacesInput() {
    return this._setInterfaces;
  }

  // set_ip_address - computed: false, optional: true, required: false
  private _setIpAddress?: string; 
  public get setIpAddress() {
    return this.getStringAttribute('set_ip_address');
  }
  public set setIpAddress(value: string) {
    this._setIpAddress = value;
  }
  public resetSetIpAddress() {
    this._setIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setIpAddressInput() {
    return this._setIpAddress;
  }

  // set_ip_default_global_next_hop_address - computed: false, optional: true, required: false
  private _setIpDefaultGlobalNextHopAddress?: string[]; 
  public get setIpDefaultGlobalNextHopAddress() {
    return this.getListAttribute('set_ip_default_global_next_hop_address');
  }
  public set setIpDefaultGlobalNextHopAddress(value: string[]) {
    this._setIpDefaultGlobalNextHopAddress = value;
  }
  public resetSetIpDefaultGlobalNextHopAddress() {
    this._setIpDefaultGlobalNextHopAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setIpDefaultGlobalNextHopAddressInput() {
    return this._setIpDefaultGlobalNextHopAddress;
  }

  // set_ip_default_next_hop_address - computed: false, optional: true, required: false
  private _setIpDefaultNextHopAddress?: string[]; 
  public get setIpDefaultNextHopAddress() {
    return this.getListAttribute('set_ip_default_next_hop_address');
  }
  public set setIpDefaultNextHopAddress(value: string[]) {
    this._setIpDefaultNextHopAddress = value;
  }
  public resetSetIpDefaultNextHopAddress() {
    this._setIpDefaultNextHopAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setIpDefaultNextHopAddressInput() {
    return this._setIpDefaultNextHopAddress;
  }

  // set_ip_global_next_hop_address - computed: false, optional: true, required: false
  private _setIpGlobalNextHopAddress?: string[]; 
  public get setIpGlobalNextHopAddress() {
    return this.getListAttribute('set_ip_global_next_hop_address');
  }
  public set setIpGlobalNextHopAddress(value: string[]) {
    this._setIpGlobalNextHopAddress = value;
  }
  public resetSetIpGlobalNextHopAddress() {
    this._setIpGlobalNextHopAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setIpGlobalNextHopAddressInput() {
    return this._setIpGlobalNextHopAddress;
  }

  // set_ip_next_hop_address - computed: false, optional: true, required: false
  private _setIpNextHopAddress?: string[]; 
  public get setIpNextHopAddress() {
    return this.getListAttribute('set_ip_next_hop_address');
  }
  public set setIpNextHopAddress(value: string[]) {
    this._setIpNextHopAddress = value;
  }
  public resetSetIpNextHopAddress() {
    this._setIpNextHopAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setIpNextHopAddressInput() {
    return this._setIpNextHopAddress;
  }

  // set_ip_next_hop_self - computed: false, optional: true, required: false
  private _setIpNextHopSelf?: boolean | cdktf.IResolvable; 
  public get setIpNextHopSelf() {
    return this.getBooleanAttribute('set_ip_next_hop_self');
  }
  public set setIpNextHopSelf(value: boolean | cdktf.IResolvable) {
    this._setIpNextHopSelf = value;
  }
  public resetSetIpNextHopSelf() {
    this._setIpNextHopSelf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setIpNextHopSelfInput() {
    return this._setIpNextHopSelf;
  }

  // set_ip_next_hop_unchanged - computed: false, optional: true, required: false
  private _setIpNextHopUnchanged?: boolean | cdktf.IResolvable; 
  public get setIpNextHopUnchanged() {
    return this.getBooleanAttribute('set_ip_next_hop_unchanged');
  }
  public set setIpNextHopUnchanged(value: boolean | cdktf.IResolvable) {
    this._setIpNextHopUnchanged = value;
  }
  public resetSetIpNextHopUnchanged() {
    this._setIpNextHopUnchanged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setIpNextHopUnchangedInput() {
    return this._setIpNextHopUnchanged;
  }

  // set_ip_qos_group - computed: false, optional: true, required: false
  private _setIpQosGroup?: number; 
  public get setIpQosGroup() {
    return this.getNumberAttribute('set_ip_qos_group');
  }
  public set setIpQosGroup(value: number) {
    this._setIpQosGroup = value;
  }
  public resetSetIpQosGroup() {
    this._setIpQosGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setIpQosGroupInput() {
    return this._setIpQosGroup;
  }

  // set_ipv6_address - computed: false, optional: true, required: false
  private _setIpv6Address?: string[]; 
  public get setIpv6Address() {
    return this.getListAttribute('set_ipv6_address');
  }
  public set setIpv6Address(value: string[]) {
    this._setIpv6Address = value;
  }
  public resetSetIpv6Address() {
    this._setIpv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setIpv6AddressInput() {
    return this._setIpv6Address;
  }

  // set_ipv6_default_global_next_hop - computed: false, optional: true, required: false
  private _setIpv6DefaultGlobalNextHop?: string; 
  public get setIpv6DefaultGlobalNextHop() {
    return this.getStringAttribute('set_ipv6_default_global_next_hop');
  }
  public set setIpv6DefaultGlobalNextHop(value: string) {
    this._setIpv6DefaultGlobalNextHop = value;
  }
  public resetSetIpv6DefaultGlobalNextHop() {
    this._setIpv6DefaultGlobalNextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setIpv6DefaultGlobalNextHopInput() {
    return this._setIpv6DefaultGlobalNextHop;
  }

  // set_ipv6_default_next_hop - computed: false, optional: true, required: false
  private _setIpv6DefaultNextHop?: string[]; 
  public get setIpv6DefaultNextHop() {
    return this.getListAttribute('set_ipv6_default_next_hop');
  }
  public set setIpv6DefaultNextHop(value: string[]) {
    this._setIpv6DefaultNextHop = value;
  }
  public resetSetIpv6DefaultNextHop() {
    this._setIpv6DefaultNextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setIpv6DefaultNextHopInput() {
    return this._setIpv6DefaultNextHop;
  }

  // set_ipv6_next_hop - computed: false, optional: true, required: false
  private _setIpv6NextHop?: string[]; 
  public get setIpv6NextHop() {
    return this.getListAttribute('set_ipv6_next_hop');
  }
  public set setIpv6NextHop(value: string[]) {
    this._setIpv6NextHop = value;
  }
  public resetSetIpv6NextHop() {
    this._setIpv6NextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setIpv6NextHopInput() {
    return this._setIpv6NextHop;
  }

  // set_level_1 - computed: false, optional: true, required: false
  private _setLevel1?: boolean | cdktf.IResolvable; 
  public get setLevel1() {
    return this.getBooleanAttribute('set_level_1');
  }
  public set setLevel1(value: boolean | cdktf.IResolvable) {
    this._setLevel1 = value;
  }
  public resetSetLevel1() {
    this._setLevel1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setLevel1Input() {
    return this._setLevel1;
  }

  // set_level_1_2 - computed: false, optional: true, required: false
  private _setLevel12?: boolean | cdktf.IResolvable; 
  public get setLevel12() {
    return this.getBooleanAttribute('set_level_1_2');
  }
  public set setLevel12(value: boolean | cdktf.IResolvable) {
    this._setLevel12 = value;
  }
  public resetSetLevel12() {
    this._setLevel12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setLevel12Input() {
    return this._setLevel12;
  }

  // set_level_2 - computed: false, optional: true, required: false
  private _setLevel2?: boolean | cdktf.IResolvable; 
  public get setLevel2() {
    return this.getBooleanAttribute('set_level_2');
  }
  public set setLevel2(value: boolean | cdktf.IResolvable) {
    this._setLevel2 = value;
  }
  public resetSetLevel2() {
    this._setLevel2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setLevel2Input() {
    return this._setLevel2;
  }

  // set_local_preference - computed: false, optional: true, required: false
  private _setLocalPreference?: number; 
  public get setLocalPreference() {
    return this.getNumberAttribute('set_local_preference');
  }
  public set setLocalPreference(value: number) {
    this._setLocalPreference = value;
  }
  public resetSetLocalPreference() {
    this._setLocalPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setLocalPreferenceInput() {
    return this._setLocalPreference;
  }

  // set_local_preference_legacy - computed: false, optional: true, required: false
  private _setLocalPreferenceLegacy?: number; 
  public get setLocalPreferenceLegacy() {
    return this.getNumberAttribute('set_local_preference_legacy');
  }
  public set setLocalPreferenceLegacy(value: number) {
    this._setLocalPreferenceLegacy = value;
  }
  public resetSetLocalPreferenceLegacy() {
    this._setLocalPreferenceLegacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setLocalPreferenceLegacyInput() {
    return this._setLocalPreferenceLegacy;
  }

  // set_metric_change - computed: false, optional: true, required: false
  private _setMetricChange?: string; 
  public get setMetricChange() {
    return this.getStringAttribute('set_metric_change');
  }
  public set setMetricChange(value: string) {
    this._setMetricChange = value;
  }
  public resetSetMetricChange() {
    this._setMetricChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setMetricChangeInput() {
    return this._setMetricChange;
  }

  // set_metric_delay - computed: false, optional: true, required: false
  private _setMetricDelay?: string; 
  public get setMetricDelay() {
    return this.getStringAttribute('set_metric_delay');
  }
  public set setMetricDelay(value: string) {
    this._setMetricDelay = value;
  }
  public resetSetMetricDelay() {
    this._setMetricDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setMetricDelayInput() {
    return this._setMetricDelay;
  }

  // set_metric_loading - computed: false, optional: true, required: false
  private _setMetricLoading?: number; 
  public get setMetricLoading() {
    return this.getNumberAttribute('set_metric_loading');
  }
  public set setMetricLoading(value: number) {
    this._setMetricLoading = value;
  }
  public resetSetMetricLoading() {
    this._setMetricLoading = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setMetricLoadingInput() {
    return this._setMetricLoading;
  }

  // set_metric_mtu - computed: false, optional: true, required: false
  private _setMetricMtu?: number; 
  public get setMetricMtu() {
    return this.getNumberAttribute('set_metric_mtu');
  }
  public set setMetricMtu(value: number) {
    this._setMetricMtu = value;
  }
  public resetSetMetricMtu() {
    this._setMetricMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setMetricMtuInput() {
    return this._setMetricMtu;
  }

  // set_metric_reliability - computed: false, optional: true, required: false
  private _setMetricReliability?: number; 
  public get setMetricReliability() {
    return this.getNumberAttribute('set_metric_reliability');
  }
  public set setMetricReliability(value: number) {
    this._setMetricReliability = value;
  }
  public resetSetMetricReliability() {
    this._setMetricReliability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setMetricReliabilityInput() {
    return this._setMetricReliability;
  }

  // set_metric_type - computed: false, optional: true, required: false
  private _setMetricType?: string; 
  public get setMetricType() {
    return this.getStringAttribute('set_metric_type');
  }
  public set setMetricType(value: string) {
    this._setMetricType = value;
  }
  public resetSetMetricType() {
    this._setMetricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setMetricTypeInput() {
    return this._setMetricType;
  }

  // set_metric_value - computed: false, optional: true, required: false
  private _setMetricValue?: number; 
  public get setMetricValue() {
    return this.getNumberAttribute('set_metric_value');
  }
  public set setMetricValue(value: number) {
    this._setMetricValue = value;
  }
  public resetSetMetricValue() {
    this._setMetricValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setMetricValueInput() {
    return this._setMetricValue;
  }

  // set_tag - computed: false, optional: true, required: false
  private _setTag?: number; 
  public get setTag() {
    return this.getNumberAttribute('set_tag');
  }
  public set setTag(value: number) {
    this._setTag = value;
  }
  public resetSetTag() {
    this._setTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setTagInput() {
    return this._setTag;
  }

  // set_vrf - computed: false, optional: true, required: false
  private _setVrf?: string; 
  public get setVrf() {
    return this.getStringAttribute('set_vrf');
  }
  public set setVrf(value: string) {
    this._setVrf = value;
  }
  public resetSetVrf() {
    this._setVrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setVrfInput() {
    return this._setVrf;
  }

  // set_weight - computed: false, optional: true, required: false
  private _setWeight?: number; 
  public get setWeight() {
    return this.getNumberAttribute('set_weight');
  }
  public set setWeight(value: number) {
    this._setWeight = value;
  }
  public resetSetWeight() {
    this._setWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setWeightInput() {
    return this._setWeight;
  }

  // set_weight_legacy - computed: false, optional: true, required: false
  private _setWeightLegacy?: number; 
  public get setWeightLegacy() {
    return this.getNumberAttribute('set_weight_legacy');
  }
  public set setWeightLegacy(value: number) {
    this._setWeightLegacy = value;
  }
  public resetSetWeightLegacy() {
    this._setWeightLegacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setWeightLegacyInput() {
    return this._setWeightLegacy;
  }
}

export class RouteMapEntriesList extends cdktf.ComplexList {
  public internalValue? : RouteMapEntries[] | cdktf.IResolvable

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
  public get(index: number): RouteMapEntriesOutputReference {
    return new RouteMapEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map iosxe_route_map}
*/
export class RouteMap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_route_map";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouteMap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouteMap to import
  * @param importFromId The id of the existing RouteMap that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouteMap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_route_map", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/route_map iosxe_route_map} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouteMapConfig
  */
  public constructor(scope: Construct, id: string, config: RouteMapConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_route_map',
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
    this._device = config.device;
    this._entries.internalValue = config.entries;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // entries - computed: false, optional: true, required: false
  private _entries = new RouteMapEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: RouteMapEntries[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  public resetEntries() {
    this._entries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      entries: cdktf.listMapper(routeMapEntriesToTerraform, false)(this._entries.internalValue),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entries: {
        value: cdktf.listMapperHcl(routeMapEntriesToHclTerraform, false)(this._entries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouteMapEntriesList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
