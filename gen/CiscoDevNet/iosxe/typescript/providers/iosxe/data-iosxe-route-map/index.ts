// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/data-sources/route_map
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeRouteMapConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/data-sources/route_map#device DataIosxeRouteMap#device}
  */
  readonly device?: string;
  /**
  * WORD;;Route map tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/data-sources/route_map#name DataIosxeRouteMap#name}
  */
  readonly name: string;
}
export interface DataIosxeRouteMapEntriesSetAsPathReplaceAs {
}

export function dataIosxeRouteMapEntriesSetAsPathReplaceAsToTerraform(struct?: DataIosxeRouteMapEntriesSetAsPathReplaceAs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeRouteMapEntriesSetAsPathReplaceAsToHclTerraform(struct?: DataIosxeRouteMapEntriesSetAsPathReplaceAs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeRouteMapEntriesSetAsPathReplaceAsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIosxeRouteMapEntriesSetAsPathReplaceAs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeRouteMapEntriesSetAsPathReplaceAs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // as_number - computed: true, optional: false, required: false
  public get asNumber() {
    return this.getStringAttribute('as_number');
  }
}

export class DataIosxeRouteMapEntriesSetAsPathReplaceAsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeRouteMapEntriesSetAsPathReplaceAsOutputReference {
    return new DataIosxeRouteMapEntriesSetAsPathReplaceAsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeRouteMapEntries {
}

export function dataIosxeRouteMapEntriesToTerraform(struct?: DataIosxeRouteMapEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeRouteMapEntriesToHclTerraform(struct?: DataIosxeRouteMapEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeRouteMapEntriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIosxeRouteMapEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeRouteMapEntries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // continue - computed: true, optional: false, required: false
  public get continue() {
    return this.getBooleanAttribute('continue');
  }

  // continue_sequence_number - computed: true, optional: false, required: false
  public get continueSequenceNumber() {
    return this.getNumberAttribute('continue_sequence_number');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // match_as_paths - computed: true, optional: false, required: false
  public get matchAsPaths() {
    return this.getNumberListAttribute('match_as_paths');
  }

  // match_as_paths_legacy - computed: true, optional: false, required: false
  public get matchAsPathsLegacy() {
    return this.getNumberListAttribute('match_as_paths_legacy');
  }

  // match_community_list_exact_match - computed: true, optional: false, required: false
  public get matchCommunityListExactMatch() {
    return this.getBooleanAttribute('match_community_list_exact_match');
  }

  // match_community_lists - computed: true, optional: false, required: false
  public get matchCommunityLists() {
    return this.getListAttribute('match_community_lists');
  }

  // match_community_lists_legacy - computed: true, optional: false, required: false
  public get matchCommunityListsLegacy() {
    return this.getListAttribute('match_community_lists_legacy');
  }

  // match_extcommunity_lists - computed: true, optional: false, required: false
  public get matchExtcommunityLists() {
    return this.getListAttribute('match_extcommunity_lists');
  }

  // match_extcommunity_lists_legacy - computed: true, optional: false, required: false
  public get matchExtcommunityListsLegacy() {
    return this.getListAttribute('match_extcommunity_lists_legacy');
  }

  // match_interfaces - computed: true, optional: false, required: false
  public get matchInterfaces() {
    return this.getListAttribute('match_interfaces');
  }

  // match_ip_address_access_lists - computed: true, optional: false, required: false
  public get matchIpAddressAccessLists() {
    return this.getListAttribute('match_ip_address_access_lists');
  }

  // match_ip_address_prefix_lists - computed: true, optional: false, required: false
  public get matchIpAddressPrefixLists() {
    return this.getListAttribute('match_ip_address_prefix_lists');
  }

  // match_ip_next_hop_access_lists - computed: true, optional: false, required: false
  public get matchIpNextHopAccessLists() {
    return this.getListAttribute('match_ip_next_hop_access_lists');
  }

  // match_ip_next_hop_prefix_lists - computed: true, optional: false, required: false
  public get matchIpNextHopPrefixLists() {
    return this.getListAttribute('match_ip_next_hop_prefix_lists');
  }

  // match_ipv6_address_access_lists - computed: true, optional: false, required: false
  public get matchIpv6AddressAccessLists() {
    return this.getStringAttribute('match_ipv6_address_access_lists');
  }

  // match_ipv6_address_prefix_lists - computed: true, optional: false, required: false
  public get matchIpv6AddressPrefixLists() {
    return this.getStringAttribute('match_ipv6_address_prefix_lists');
  }

  // match_ipv6_next_hop_access_lists - computed: true, optional: false, required: false
  public get matchIpv6NextHopAccessLists() {
    return this.getStringAttribute('match_ipv6_next_hop_access_lists');
  }

  // match_ipv6_next_hop_prefix_lists - computed: true, optional: false, required: false
  public get matchIpv6NextHopPrefixLists() {
    return this.getStringAttribute('match_ipv6_next_hop_prefix_lists');
  }

  // match_local_preferences - computed: true, optional: false, required: false
  public get matchLocalPreferences() {
    return this.getNumberListAttribute('match_local_preferences');
  }

  // match_local_preferences_legacy - computed: true, optional: false, required: false
  public get matchLocalPreferencesLegacy() {
    return this.getNumberListAttribute('match_local_preferences_legacy');
  }

  // match_route_type_external - computed: true, optional: false, required: false
  public get matchRouteTypeExternal() {
    return this.getBooleanAttribute('match_route_type_external');
  }

  // match_route_type_external_type_1 - computed: true, optional: false, required: false
  public get matchRouteTypeExternalType1() {
    return this.getBooleanAttribute('match_route_type_external_type_1');
  }

  // match_route_type_external_type_2 - computed: true, optional: false, required: false
  public get matchRouteTypeExternalType2() {
    return this.getBooleanAttribute('match_route_type_external_type_2');
  }

  // match_route_type_internal - computed: true, optional: false, required: false
  public get matchRouteTypeInternal() {
    return this.getBooleanAttribute('match_route_type_internal');
  }

  // match_route_type_level_1 - computed: true, optional: false, required: false
  public get matchRouteTypeLevel1() {
    return this.getBooleanAttribute('match_route_type_level_1');
  }

  // match_route_type_level_2 - computed: true, optional: false, required: false
  public get matchRouteTypeLevel2() {
    return this.getBooleanAttribute('match_route_type_level_2');
  }

  // match_route_type_local - computed: true, optional: false, required: false
  public get matchRouteTypeLocal() {
    return this.getBooleanAttribute('match_route_type_local');
  }

  // match_route_type_local_legacy - computed: true, optional: false, required: false
  public get matchRouteTypeLocalLegacy() {
    return this.getBooleanAttribute('match_route_type_local_legacy');
  }

  // match_source_protocol_bgp - computed: true, optional: false, required: false
  public get matchSourceProtocolBgp() {
    return this.getListAttribute('match_source_protocol_bgp');
  }

  // match_source_protocol_connected - computed: true, optional: false, required: false
  public get matchSourceProtocolConnected() {
    return this.getBooleanAttribute('match_source_protocol_connected');
  }

  // match_source_protocol_eigrp - computed: true, optional: false, required: false
  public get matchSourceProtocolEigrp() {
    return this.getListAttribute('match_source_protocol_eigrp');
  }

  // match_source_protocol_isis - computed: true, optional: false, required: false
  public get matchSourceProtocolIsis() {
    return this.getBooleanAttribute('match_source_protocol_isis');
  }

  // match_source_protocol_lisp - computed: true, optional: false, required: false
  public get matchSourceProtocolLisp() {
    return this.getBooleanAttribute('match_source_protocol_lisp');
  }

  // match_source_protocol_ospf - computed: true, optional: false, required: false
  public get matchSourceProtocolOspf() {
    return this.getListAttribute('match_source_protocol_ospf');
  }

  // match_source_protocol_ospfv3 - computed: true, optional: false, required: false
  public get matchSourceProtocolOspfv3() {
    return this.getListAttribute('match_source_protocol_ospfv3');
  }

  // match_source_protocol_rip - computed: true, optional: false, required: false
  public get matchSourceProtocolRip() {
    return this.getBooleanAttribute('match_source_protocol_rip');
  }

  // match_source_protocol_static - computed: true, optional: false, required: false
  public get matchSourceProtocolStatic() {
    return this.getBooleanAttribute('match_source_protocol_static');
  }

  // match_tags - computed: true, optional: false, required: false
  public get matchTags() {
    return this.getNumberListAttribute('match_tags');
  }

  // match_track - computed: true, optional: false, required: false
  public get matchTrack() {
    return this.getNumberAttribute('match_track');
  }

  // operation - computed: true, optional: false, required: false
  public get operation() {
    return this.getStringAttribute('operation');
  }

  // seq - computed: true, optional: false, required: false
  public get seq() {
    return this.getNumberAttribute('seq');
  }

  // set_as_path_prepend_as - computed: true, optional: false, required: false
  public get setAsPathPrependAs() {
    return this.getStringAttribute('set_as_path_prepend_as');
  }

  // set_as_path_prepend_as_legacy - computed: true, optional: false, required: false
  public get setAsPathPrependAsLegacy() {
    return this.getStringAttribute('set_as_path_prepend_as_legacy');
  }

  // set_as_path_prepend_last_as - computed: true, optional: false, required: false
  public get setAsPathPrependLastAs() {
    return this.getNumberAttribute('set_as_path_prepend_last_as');
  }

  // set_as_path_prepend_last_as_legacy - computed: true, optional: false, required: false
  public get setAsPathPrependLastAsLegacy() {
    return this.getNumberAttribute('set_as_path_prepend_last_as_legacy');
  }

  // set_as_path_replace_any - computed: true, optional: false, required: false
  public get setAsPathReplaceAny() {
    return this.getBooleanAttribute('set_as_path_replace_any');
  }

  // set_as_path_replace_as - computed: true, optional: false, required: false
  private _setAsPathReplaceAs = new DataIosxeRouteMapEntriesSetAsPathReplaceAsList(this, "set_as_path_replace_as", false);
  public get setAsPathReplaceAs() {
    return this._setAsPathReplaceAs;
  }

  // set_as_path_tag - computed: true, optional: false, required: false
  public get setAsPathTag() {
    return this.getBooleanAttribute('set_as_path_tag');
  }

  // set_as_path_tag_legacy - computed: true, optional: false, required: false
  public get setAsPathTagLegacy() {
    return this.getBooleanAttribute('set_as_path_tag_legacy');
  }

  // set_communities - computed: true, optional: false, required: false
  public get setCommunities() {
    return this.getListAttribute('set_communities');
  }

  // set_communities_additive - computed: true, optional: false, required: false
  public get setCommunitiesAdditive() {
    return this.getBooleanAttribute('set_communities_additive');
  }

  // set_communities_additive_legacy - computed: true, optional: false, required: false
  public get setCommunitiesAdditiveLegacy() {
    return this.getBooleanAttribute('set_communities_additive_legacy');
  }

  // set_communities_legacy - computed: true, optional: false, required: false
  public get setCommunitiesLegacy() {
    return this.getListAttribute('set_communities_legacy');
  }

  // set_community_list_delete - computed: true, optional: false, required: false
  public get setCommunityListDelete() {
    return this.getBooleanAttribute('set_community_list_delete');
  }

  // set_community_list_delete_legacy - computed: true, optional: false, required: false
  public get setCommunityListDeleteLegacy() {
    return this.getBooleanAttribute('set_community_list_delete_legacy');
  }

  // set_community_list_expanded - computed: true, optional: false, required: false
  public get setCommunityListExpanded() {
    return this.getNumberAttribute('set_community_list_expanded');
  }

  // set_community_list_expanded_legacy - computed: true, optional: false, required: false
  public get setCommunityListExpandedLegacy() {
    return this.getNumberAttribute('set_community_list_expanded_legacy');
  }

  // set_community_list_name - computed: true, optional: false, required: false
  public get setCommunityListName() {
    return this.getStringAttribute('set_community_list_name');
  }

  // set_community_list_name_legacy - computed: true, optional: false, required: false
  public get setCommunityListNameLegacy() {
    return this.getStringAttribute('set_community_list_name_legacy');
  }

  // set_community_list_standard - computed: true, optional: false, required: false
  public get setCommunityListStandard() {
    return this.getNumberAttribute('set_community_list_standard');
  }

  // set_community_list_standard_legacy - computed: true, optional: false, required: false
  public get setCommunityListStandardLegacy() {
    return this.getNumberAttribute('set_community_list_standard_legacy');
  }

  // set_community_none - computed: true, optional: false, required: false
  public get setCommunityNone() {
    return this.getBooleanAttribute('set_community_none');
  }

  // set_community_none_legacy - computed: true, optional: false, required: false
  public get setCommunityNoneLegacy() {
    return this.getBooleanAttribute('set_community_none_legacy');
  }

  // set_default_interfaces - computed: true, optional: false, required: false
  public get setDefaultInterfaces() {
    return this.getListAttribute('set_default_interfaces');
  }

  // set_extcomunity_rt - computed: true, optional: false, required: false
  public get setExtcomunityRt() {
    return this.getListAttribute('set_extcomunity_rt');
  }

  // set_extcomunity_rt_legacy - computed: true, optional: false, required: false
  public get setExtcomunityRtLegacy() {
    return this.getListAttribute('set_extcomunity_rt_legacy');
  }

  // set_extcomunity_soo - computed: true, optional: false, required: false
  public get setExtcomunitySoo() {
    return this.getStringAttribute('set_extcomunity_soo');
  }

  // set_extcomunity_soo_legacy - computed: true, optional: false, required: false
  public get setExtcomunitySooLegacy() {
    return this.getStringAttribute('set_extcomunity_soo_legacy');
  }

  // set_extcomunity_vpn_distinguisher - computed: true, optional: false, required: false
  public get setExtcomunityVpnDistinguisher() {
    return this.getStringAttribute('set_extcomunity_vpn_distinguisher');
  }

  // set_extcomunity_vpn_distinguisher_additive - computed: true, optional: false, required: false
  public get setExtcomunityVpnDistinguisherAdditive() {
    return this.getBooleanAttribute('set_extcomunity_vpn_distinguisher_additive');
  }

  // set_extcomunity_vpn_distinguisher_legacy - computed: true, optional: false, required: false
  public get setExtcomunityVpnDistinguisherLegacy() {
    return this.getStringAttribute('set_extcomunity_vpn_distinguisher_legacy');
  }

  // set_global - computed: true, optional: false, required: false
  public get setGlobal() {
    return this.getBooleanAttribute('set_global');
  }

  // set_interfaces - computed: true, optional: false, required: false
  public get setInterfaces() {
    return this.getListAttribute('set_interfaces');
  }

  // set_ip_address - computed: true, optional: false, required: false
  public get setIpAddress() {
    return this.getStringAttribute('set_ip_address');
  }

  // set_ip_default_global_next_hop_address - computed: true, optional: false, required: false
  public get setIpDefaultGlobalNextHopAddress() {
    return this.getListAttribute('set_ip_default_global_next_hop_address');
  }

  // set_ip_default_next_hop_address - computed: true, optional: false, required: false
  public get setIpDefaultNextHopAddress() {
    return this.getListAttribute('set_ip_default_next_hop_address');
  }

  // set_ip_global_next_hop_address - computed: true, optional: false, required: false
  public get setIpGlobalNextHopAddress() {
    return this.getListAttribute('set_ip_global_next_hop_address');
  }

  // set_ip_next_hop_address - computed: true, optional: false, required: false
  public get setIpNextHopAddress() {
    return this.getListAttribute('set_ip_next_hop_address');
  }

  // set_ip_next_hop_self - computed: true, optional: false, required: false
  public get setIpNextHopSelf() {
    return this.getBooleanAttribute('set_ip_next_hop_self');
  }

  // set_ip_next_hop_unchanged - computed: true, optional: false, required: false
  public get setIpNextHopUnchanged() {
    return this.getBooleanAttribute('set_ip_next_hop_unchanged');
  }

  // set_ip_qos_group - computed: true, optional: false, required: false
  public get setIpQosGroup() {
    return this.getNumberAttribute('set_ip_qos_group');
  }

  // set_ipv6_address - computed: true, optional: false, required: false
  public get setIpv6Address() {
    return this.getListAttribute('set_ipv6_address');
  }

  // set_ipv6_default_global_next_hop - computed: true, optional: false, required: false
  public get setIpv6DefaultGlobalNextHop() {
    return this.getStringAttribute('set_ipv6_default_global_next_hop');
  }

  // set_ipv6_default_next_hop - computed: true, optional: false, required: false
  public get setIpv6DefaultNextHop() {
    return this.getListAttribute('set_ipv6_default_next_hop');
  }

  // set_ipv6_next_hop - computed: true, optional: false, required: false
  public get setIpv6NextHop() {
    return this.getListAttribute('set_ipv6_next_hop');
  }

  // set_level_1 - computed: true, optional: false, required: false
  public get setLevel1() {
    return this.getBooleanAttribute('set_level_1');
  }

  // set_level_1_2 - computed: true, optional: false, required: false
  public get setLevel12() {
    return this.getBooleanAttribute('set_level_1_2');
  }

  // set_level_2 - computed: true, optional: false, required: false
  public get setLevel2() {
    return this.getBooleanAttribute('set_level_2');
  }

  // set_local_preference - computed: true, optional: false, required: false
  public get setLocalPreference() {
    return this.getNumberAttribute('set_local_preference');
  }

  // set_local_preference_legacy - computed: true, optional: false, required: false
  public get setLocalPreferenceLegacy() {
    return this.getNumberAttribute('set_local_preference_legacy');
  }

  // set_metric_change - computed: true, optional: false, required: false
  public get setMetricChange() {
    return this.getStringAttribute('set_metric_change');
  }

  // set_metric_delay - computed: true, optional: false, required: false
  public get setMetricDelay() {
    return this.getStringAttribute('set_metric_delay');
  }

  // set_metric_loading - computed: true, optional: false, required: false
  public get setMetricLoading() {
    return this.getNumberAttribute('set_metric_loading');
  }

  // set_metric_mtu - computed: true, optional: false, required: false
  public get setMetricMtu() {
    return this.getNumberAttribute('set_metric_mtu');
  }

  // set_metric_reliability - computed: true, optional: false, required: false
  public get setMetricReliability() {
    return this.getNumberAttribute('set_metric_reliability');
  }

  // set_metric_type - computed: true, optional: false, required: false
  public get setMetricType() {
    return this.getStringAttribute('set_metric_type');
  }

  // set_metric_value - computed: true, optional: false, required: false
  public get setMetricValue() {
    return this.getNumberAttribute('set_metric_value');
  }

  // set_tag - computed: true, optional: false, required: false
  public get setTag() {
    return this.getNumberAttribute('set_tag');
  }

  // set_vrf - computed: true, optional: false, required: false
  public get setVrf() {
    return this.getStringAttribute('set_vrf');
  }

  // set_weight - computed: true, optional: false, required: false
  public get setWeight() {
    return this.getNumberAttribute('set_weight');
  }

  // set_weight_legacy - computed: true, optional: false, required: false
  public get setWeightLegacy() {
    return this.getNumberAttribute('set_weight_legacy');
  }
}

export class DataIosxeRouteMapEntriesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeRouteMapEntriesOutputReference {
    return new DataIosxeRouteMapEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/data-sources/route_map iosxe_route_map}
*/
export class DataIosxeRouteMap extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_route_map";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeRouteMap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeRouteMap to import
  * @param importFromId The id of the existing DataIosxeRouteMap that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/data-sources/route_map#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeRouteMap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_route_map", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/data-sources/route_map iosxe_route_map} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeRouteMapConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxeRouteMapConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_route_map',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.12.0',
        providerVersionConstraint: '0.12.0'
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

  // entries - computed: true, optional: false, required: false
  private _entries = new DataIosxeRouteMapEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
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
