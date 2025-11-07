// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/service_routing_bgp_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanServiceRoutingBgpFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/service_routing_bgp_feature#feature_profile_id DataSdwanServiceRoutingBgpFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The id of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/service_routing_bgp_feature#id DataSdwanServiceRoutingBgpFeature#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataSdwanServiceRoutingBgpFeatureIpv4AggregateAddresses {
}

export function dataSdwanServiceRoutingBgpFeatureIpv4AggregateAddressesToTerraform(struct?: DataSdwanServiceRoutingBgpFeatureIpv4AggregateAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceRoutingBgpFeatureIpv4AggregateAddressesToHclTerraform(struct?: DataSdwanServiceRoutingBgpFeatureIpv4AggregateAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceRoutingBgpFeatureIpv4AggregateAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceRoutingBgpFeatureIpv4AggregateAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceRoutingBgpFeatureIpv4AggregateAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // as_set_path - computed: true, optional: false, required: false
  public get asSetPath() {
    return this.getBooleanAttribute('as_set_path');
  }

  // as_set_path_variable - computed: true, optional: false, required: false
  public get asSetPathVariable() {
    return this.getStringAttribute('as_set_path_variable');
  }

  // network_address - computed: true, optional: false, required: false
  public get networkAddress() {
    return this.getStringAttribute('network_address');
  }

  // network_address_variable - computed: true, optional: false, required: false
  public get networkAddressVariable() {
    return this.getStringAttribute('network_address_variable');
  }

  // subnet_mask - computed: true, optional: false, required: false
  public get subnetMask() {
    return this.getStringAttribute('subnet_mask');
  }

  // subnet_mask_variable - computed: true, optional: false, required: false
  public get subnetMaskVariable() {
    return this.getStringAttribute('subnet_mask_variable');
  }

  // summary_only - computed: true, optional: false, required: false
  public get summaryOnly() {
    return this.getBooleanAttribute('summary_only');
  }

  // summary_only_variable - computed: true, optional: false, required: false
  public get summaryOnlyVariable() {
    return this.getStringAttribute('summary_only_variable');
  }
}

export class DataSdwanServiceRoutingBgpFeatureIpv4AggregateAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceRoutingBgpFeatureIpv4AggregateAddressesOutputReference {
    return new DataSdwanServiceRoutingBgpFeatureIpv4AggregateAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceRoutingBgpFeatureIpv4NeighborsAddressFamilies {
}

export function dataSdwanServiceRoutingBgpFeatureIpv4NeighborsAddressFamiliesToTerraform(struct?: DataSdwanServiceRoutingBgpFeatureIpv4NeighborsAddressFamilies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceRoutingBgpFeatureIpv4NeighborsAddressFamiliesToHclTerraform(struct?: DataSdwanServiceRoutingBgpFeatureIpv4NeighborsAddressFamilies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceRoutingBgpFeatureIpv4NeighborsAddressFamiliesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceRoutingBgpFeatureIpv4NeighborsAddressFamilies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceRoutingBgpFeatureIpv4NeighborsAddressFamilies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disable_peer_max_number_of_prefixes - computed: true, optional: false, required: false
  public get disablePeerMaxNumberOfPrefixes() {
    return this.getNumberAttribute('disable_peer_max_number_of_prefixes');
  }

  // disable_peer_max_number_of_prefixes_variable - computed: true, optional: false, required: false
  public get disablePeerMaxNumberOfPrefixesVariable() {
    return this.getStringAttribute('disable_peer_max_number_of_prefixes_variable');
  }

  // disable_peer_threshold - computed: true, optional: false, required: false
  public get disablePeerThreshold() {
    return this.getNumberAttribute('disable_peer_threshold');
  }

  // disable_peer_threshold_variable - computed: true, optional: false, required: false
  public get disablePeerThresholdVariable() {
    return this.getStringAttribute('disable_peer_threshold_variable');
  }

  // family_type - computed: true, optional: false, required: false
  public get familyType() {
    return this.getStringAttribute('family_type');
  }

  // in_route_policy_id - computed: true, optional: false, required: false
  public get inRoutePolicyId() {
    return this.getStringAttribute('in_route_policy_id');
  }

  // out_route_policy_id - computed: true, optional: false, required: false
  public get outRoutePolicyId() {
    return this.getStringAttribute('out_route_policy_id');
  }

  // policy_type - computed: true, optional: false, required: false
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }

  // restart_interval - computed: true, optional: false, required: false
  public get restartInterval() {
    return this.getNumberAttribute('restart_interval');
  }

  // restart_interval_variable - computed: true, optional: false, required: false
  public get restartIntervalVariable() {
    return this.getStringAttribute('restart_interval_variable');
  }

  // restart_max_number_of_prefixes - computed: true, optional: false, required: false
  public get restartMaxNumberOfPrefixes() {
    return this.getNumberAttribute('restart_max_number_of_prefixes');
  }

  // restart_max_number_of_prefixes_variable - computed: true, optional: false, required: false
  public get restartMaxNumberOfPrefixesVariable() {
    return this.getStringAttribute('restart_max_number_of_prefixes_variable');
  }

  // restart_threshold - computed: true, optional: false, required: false
  public get restartThreshold() {
    return this.getNumberAttribute('restart_threshold');
  }

  // restart_threshold_variable - computed: true, optional: false, required: false
  public get restartThresholdVariable() {
    return this.getStringAttribute('restart_threshold_variable');
  }

  // warning_message_max_number_of_prefixes - computed: true, optional: false, required: false
  public get warningMessageMaxNumberOfPrefixes() {
    return this.getNumberAttribute('warning_message_max_number_of_prefixes');
  }

  // warning_message_max_number_of_prefixes_variable - computed: true, optional: false, required: false
  public get warningMessageMaxNumberOfPrefixesVariable() {
    return this.getStringAttribute('warning_message_max_number_of_prefixes_variable');
  }

  // warning_message_threshold - computed: true, optional: false, required: false
  public get warningMessageThreshold() {
    return this.getNumberAttribute('warning_message_threshold');
  }

  // warning_message_threshold_variable - computed: true, optional: false, required: false
  public get warningMessageThresholdVariable() {
    return this.getStringAttribute('warning_message_threshold_variable');
  }
}

export class DataSdwanServiceRoutingBgpFeatureIpv4NeighborsAddressFamiliesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceRoutingBgpFeatureIpv4NeighborsAddressFamiliesOutputReference {
    return new DataSdwanServiceRoutingBgpFeatureIpv4NeighborsAddressFamiliesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceRoutingBgpFeatureIpv4Neighbors {
}

export function dataSdwanServiceRoutingBgpFeatureIpv4NeighborsToTerraform(struct?: DataSdwanServiceRoutingBgpFeatureIpv4Neighbors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceRoutingBgpFeatureIpv4NeighborsToHclTerraform(struct?: DataSdwanServiceRoutingBgpFeatureIpv4Neighbors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceRoutingBgpFeatureIpv4NeighborsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceRoutingBgpFeatureIpv4Neighbors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceRoutingBgpFeatureIpv4Neighbors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // address_families - computed: true, optional: false, required: false
  private _addressFamilies = new DataSdwanServiceRoutingBgpFeatureIpv4NeighborsAddressFamiliesList(this, "address_families", false);
  public get addressFamilies() {
    return this._addressFamilies;
  }

  // address_variable - computed: true, optional: false, required: false
  public get addressVariable() {
    return this.getStringAttribute('address_variable');
  }

  // allowas_in_number - computed: true, optional: false, required: false
  public get allowasInNumber() {
    return this.getNumberAttribute('allowas_in_number');
  }

  // allowas_in_number_variable - computed: true, optional: false, required: false
  public get allowasInNumberVariable() {
    return this.getStringAttribute('allowas_in_number_variable');
  }

  // as_override - computed: true, optional: false, required: false
  public get asOverride() {
    return this.getBooleanAttribute('as_override');
  }

  // as_override_variable - computed: true, optional: false, required: false
  public get asOverrideVariable() {
    return this.getStringAttribute('as_override_variable');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // description_variable - computed: true, optional: false, required: false
  public get descriptionVariable() {
    return this.getStringAttribute('description_variable');
  }

  // ebgp_multihop - computed: true, optional: false, required: false
  public get ebgpMultihop() {
    return this.getNumberAttribute('ebgp_multihop');
  }

  // ebgp_multihop_variable - computed: true, optional: false, required: false
  public get ebgpMultihopVariable() {
    return this.getStringAttribute('ebgp_multihop_variable');
  }

  // hold_time - computed: true, optional: false, required: false
  public get holdTime() {
    return this.getNumberAttribute('hold_time');
  }

  // hold_time_variable - computed: true, optional: false, required: false
  public get holdTimeVariable() {
    return this.getStringAttribute('hold_time_variable');
  }

  // keepalive_time - computed: true, optional: false, required: false
  public get keepaliveTime() {
    return this.getNumberAttribute('keepalive_time');
  }

  // keepalive_time_variable - computed: true, optional: false, required: false
  public get keepaliveTimeVariable() {
    return this.getStringAttribute('keepalive_time_variable');
  }

  // local_as - computed: true, optional: false, required: false
  public get localAs() {
    return this.getNumberAttribute('local_as');
  }

  // local_as_variable - computed: true, optional: false, required: false
  public get localAsVariable() {
    return this.getStringAttribute('local_as_variable');
  }

  // next_hop_self - computed: true, optional: false, required: false
  public get nextHopSelf() {
    return this.getBooleanAttribute('next_hop_self');
  }

  // next_hop_self_variable - computed: true, optional: false, required: false
  public get nextHopSelfVariable() {
    return this.getStringAttribute('next_hop_self_variable');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // password_variable - computed: true, optional: false, required: false
  public get passwordVariable() {
    return this.getStringAttribute('password_variable');
  }

  // remote_as - computed: true, optional: false, required: false
  public get remoteAs() {
    return this.getNumberAttribute('remote_as');
  }

  // remote_as_variable - computed: true, optional: false, required: false
  public get remoteAsVariable() {
    return this.getStringAttribute('remote_as_variable');
  }

  // send_community - computed: true, optional: false, required: false
  public get sendCommunity() {
    return this.getBooleanAttribute('send_community');
  }

  // send_community_variable - computed: true, optional: false, required: false
  public get sendCommunityVariable() {
    return this.getStringAttribute('send_community_variable');
  }

  // send_extended_community - computed: true, optional: false, required: false
  public get sendExtendedCommunity() {
    return this.getBooleanAttribute('send_extended_community');
  }

  // send_extended_community_variable - computed: true, optional: false, required: false
  public get sendExtendedCommunityVariable() {
    return this.getStringAttribute('send_extended_community_variable');
  }

  // send_label - computed: true, optional: false, required: false
  public get sendLabel() {
    return this.getBooleanAttribute('send_label');
  }

  // send_label_variable - computed: true, optional: false, required: false
  public get sendLabelVariable() {
    return this.getStringAttribute('send_label_variable');
  }

  // shutdown - computed: true, optional: false, required: false
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }

  // shutdown_variable - computed: true, optional: false, required: false
  public get shutdownVariable() {
    return this.getStringAttribute('shutdown_variable');
  }

  // update_source_interface - computed: true, optional: false, required: false
  public get updateSourceInterface() {
    return this.getStringAttribute('update_source_interface');
  }

  // update_source_interface_variable - computed: true, optional: false, required: false
  public get updateSourceInterfaceVariable() {
    return this.getStringAttribute('update_source_interface_variable');
  }
}

export class DataSdwanServiceRoutingBgpFeatureIpv4NeighborsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceRoutingBgpFeatureIpv4NeighborsOutputReference {
    return new DataSdwanServiceRoutingBgpFeatureIpv4NeighborsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceRoutingBgpFeatureIpv4Networks {
}

export function dataSdwanServiceRoutingBgpFeatureIpv4NetworksToTerraform(struct?: DataSdwanServiceRoutingBgpFeatureIpv4Networks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceRoutingBgpFeatureIpv4NetworksToHclTerraform(struct?: DataSdwanServiceRoutingBgpFeatureIpv4Networks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceRoutingBgpFeatureIpv4NetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceRoutingBgpFeatureIpv4Networks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceRoutingBgpFeatureIpv4Networks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // network_address - computed: true, optional: false, required: false
  public get networkAddress() {
    return this.getStringAttribute('network_address');
  }

  // network_address_variable - computed: true, optional: false, required: false
  public get networkAddressVariable() {
    return this.getStringAttribute('network_address_variable');
  }

  // subnet_mask - computed: true, optional: false, required: false
  public get subnetMask() {
    return this.getStringAttribute('subnet_mask');
  }

  // subnet_mask_variable - computed: true, optional: false, required: false
  public get subnetMaskVariable() {
    return this.getStringAttribute('subnet_mask_variable');
  }
}

export class DataSdwanServiceRoutingBgpFeatureIpv4NetworksList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceRoutingBgpFeatureIpv4NetworksOutputReference {
    return new DataSdwanServiceRoutingBgpFeatureIpv4NetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceRoutingBgpFeatureIpv4Redistributes {
}

export function dataSdwanServiceRoutingBgpFeatureIpv4RedistributesToTerraform(struct?: DataSdwanServiceRoutingBgpFeatureIpv4Redistributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceRoutingBgpFeatureIpv4RedistributesToHclTerraform(struct?: DataSdwanServiceRoutingBgpFeatureIpv4Redistributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceRoutingBgpFeatureIpv4RedistributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceRoutingBgpFeatureIpv4Redistributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceRoutingBgpFeatureIpv4Redistributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // protocol_variable - computed: true, optional: false, required: false
  public get protocolVariable() {
    return this.getStringAttribute('protocol_variable');
  }

  // route_policy_id - computed: true, optional: false, required: false
  public get routePolicyId() {
    return this.getStringAttribute('route_policy_id');
  }

  // translate_rib_metric - computed: true, optional: false, required: false
  public get translateRibMetric() {
    return this.getBooleanAttribute('translate_rib_metric');
  }
}

export class DataSdwanServiceRoutingBgpFeatureIpv4RedistributesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceRoutingBgpFeatureIpv4RedistributesOutputReference {
    return new DataSdwanServiceRoutingBgpFeatureIpv4RedistributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceRoutingBgpFeatureIpv6AggregateAddresses {
}

export function dataSdwanServiceRoutingBgpFeatureIpv6AggregateAddressesToTerraform(struct?: DataSdwanServiceRoutingBgpFeatureIpv6AggregateAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceRoutingBgpFeatureIpv6AggregateAddressesToHclTerraform(struct?: DataSdwanServiceRoutingBgpFeatureIpv6AggregateAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceRoutingBgpFeatureIpv6AggregateAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceRoutingBgpFeatureIpv6AggregateAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceRoutingBgpFeatureIpv6AggregateAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregate_prefix - computed: true, optional: false, required: false
  public get aggregatePrefix() {
    return this.getStringAttribute('aggregate_prefix');
  }

  // aggregate_prefix_variable - computed: true, optional: false, required: false
  public get aggregatePrefixVariable() {
    return this.getStringAttribute('aggregate_prefix_variable');
  }

  // as_set_path - computed: true, optional: false, required: false
  public get asSetPath() {
    return this.getBooleanAttribute('as_set_path');
  }

  // as_set_path_variable - computed: true, optional: false, required: false
  public get asSetPathVariable() {
    return this.getStringAttribute('as_set_path_variable');
  }

  // summary_only - computed: true, optional: false, required: false
  public get summaryOnly() {
    return this.getBooleanAttribute('summary_only');
  }

  // summary_only_variable - computed: true, optional: false, required: false
  public get summaryOnlyVariable() {
    return this.getStringAttribute('summary_only_variable');
  }
}

export class DataSdwanServiceRoutingBgpFeatureIpv6AggregateAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceRoutingBgpFeatureIpv6AggregateAddressesOutputReference {
    return new DataSdwanServiceRoutingBgpFeatureIpv6AggregateAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceRoutingBgpFeatureIpv6NeighborsAddressFamilies {
}

export function dataSdwanServiceRoutingBgpFeatureIpv6NeighborsAddressFamiliesToTerraform(struct?: DataSdwanServiceRoutingBgpFeatureIpv6NeighborsAddressFamilies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceRoutingBgpFeatureIpv6NeighborsAddressFamiliesToHclTerraform(struct?: DataSdwanServiceRoutingBgpFeatureIpv6NeighborsAddressFamilies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceRoutingBgpFeatureIpv6NeighborsAddressFamiliesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceRoutingBgpFeatureIpv6NeighborsAddressFamilies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceRoutingBgpFeatureIpv6NeighborsAddressFamilies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // family_type - computed: true, optional: false, required: false
  public get familyType() {
    return this.getStringAttribute('family_type');
  }

  // in_route_policy_id - computed: true, optional: false, required: false
  public get inRoutePolicyId() {
    return this.getStringAttribute('in_route_policy_id');
  }

  // max_number_of_prefixes - computed: true, optional: false, required: false
  public get maxNumberOfPrefixes() {
    return this.getNumberAttribute('max_number_of_prefixes');
  }

  // max_number_of_prefixes_variable - computed: true, optional: false, required: false
  public get maxNumberOfPrefixesVariable() {
    return this.getStringAttribute('max_number_of_prefixes_variable');
  }

  // out_route_policy_id - computed: true, optional: false, required: false
  public get outRoutePolicyId() {
    return this.getStringAttribute('out_route_policy_id');
  }

  // policy_type - computed: true, optional: false, required: false
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }

  // restart_interval - computed: true, optional: false, required: false
  public get restartInterval() {
    return this.getNumberAttribute('restart_interval');
  }

  // restart_interval_variable - computed: true, optional: false, required: false
  public get restartIntervalVariable() {
    return this.getStringAttribute('restart_interval_variable');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }

  // threshold_variable - computed: true, optional: false, required: false
  public get thresholdVariable() {
    return this.getStringAttribute('threshold_variable');
  }
}

export class DataSdwanServiceRoutingBgpFeatureIpv6NeighborsAddressFamiliesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceRoutingBgpFeatureIpv6NeighborsAddressFamiliesOutputReference {
    return new DataSdwanServiceRoutingBgpFeatureIpv6NeighborsAddressFamiliesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceRoutingBgpFeatureIpv6Neighbors {
}

export function dataSdwanServiceRoutingBgpFeatureIpv6NeighborsToTerraform(struct?: DataSdwanServiceRoutingBgpFeatureIpv6Neighbors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceRoutingBgpFeatureIpv6NeighborsToHclTerraform(struct?: DataSdwanServiceRoutingBgpFeatureIpv6Neighbors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceRoutingBgpFeatureIpv6NeighborsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceRoutingBgpFeatureIpv6Neighbors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceRoutingBgpFeatureIpv6Neighbors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // address_families - computed: true, optional: false, required: false
  private _addressFamilies = new DataSdwanServiceRoutingBgpFeatureIpv6NeighborsAddressFamiliesList(this, "address_families", false);
  public get addressFamilies() {
    return this._addressFamilies;
  }

  // address_variable - computed: true, optional: false, required: false
  public get addressVariable() {
    return this.getStringAttribute('address_variable');
  }

  // allowas_in_number - computed: true, optional: false, required: false
  public get allowasInNumber() {
    return this.getNumberAttribute('allowas_in_number');
  }

  // allowas_in_number_variable - computed: true, optional: false, required: false
  public get allowasInNumberVariable() {
    return this.getStringAttribute('allowas_in_number_variable');
  }

  // as_override - computed: true, optional: false, required: false
  public get asOverride() {
    return this.getBooleanAttribute('as_override');
  }

  // as_override_variable - computed: true, optional: false, required: false
  public get asOverrideVariable() {
    return this.getStringAttribute('as_override_variable');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // description_variable - computed: true, optional: false, required: false
  public get descriptionVariable() {
    return this.getStringAttribute('description_variable');
  }

  // ebgp_multihop - computed: true, optional: false, required: false
  public get ebgpMultihop() {
    return this.getNumberAttribute('ebgp_multihop');
  }

  // ebgp_multihop_variable - computed: true, optional: false, required: false
  public get ebgpMultihopVariable() {
    return this.getStringAttribute('ebgp_multihop_variable');
  }

  // hold_time - computed: true, optional: false, required: false
  public get holdTime() {
    return this.getNumberAttribute('hold_time');
  }

  // hold_time_variable - computed: true, optional: false, required: false
  public get holdTimeVariable() {
    return this.getStringAttribute('hold_time_variable');
  }

  // keepalive_time - computed: true, optional: false, required: false
  public get keepaliveTime() {
    return this.getNumberAttribute('keepalive_time');
  }

  // keepalive_time_variable - computed: true, optional: false, required: false
  public get keepaliveTimeVariable() {
    return this.getStringAttribute('keepalive_time_variable');
  }

  // local_as - computed: true, optional: false, required: false
  public get localAs() {
    return this.getNumberAttribute('local_as');
  }

  // local_as_variable - computed: true, optional: false, required: false
  public get localAsVariable() {
    return this.getStringAttribute('local_as_variable');
  }

  // next_hop_self - computed: true, optional: false, required: false
  public get nextHopSelf() {
    return this.getBooleanAttribute('next_hop_self');
  }

  // next_hop_self_variable - computed: true, optional: false, required: false
  public get nextHopSelfVariable() {
    return this.getStringAttribute('next_hop_self_variable');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // password_variable - computed: true, optional: false, required: false
  public get passwordVariable() {
    return this.getStringAttribute('password_variable');
  }

  // remote_as - computed: true, optional: false, required: false
  public get remoteAs() {
    return this.getNumberAttribute('remote_as');
  }

  // remote_as_variable - computed: true, optional: false, required: false
  public get remoteAsVariable() {
    return this.getStringAttribute('remote_as_variable');
  }

  // send_community - computed: true, optional: false, required: false
  public get sendCommunity() {
    return this.getBooleanAttribute('send_community');
  }

  // send_community_variable - computed: true, optional: false, required: false
  public get sendCommunityVariable() {
    return this.getStringAttribute('send_community_variable');
  }

  // send_extended_community - computed: true, optional: false, required: false
  public get sendExtendedCommunity() {
    return this.getBooleanAttribute('send_extended_community');
  }

  // send_extended_community_variable - computed: true, optional: false, required: false
  public get sendExtendedCommunityVariable() {
    return this.getStringAttribute('send_extended_community_variable');
  }

  // shutdown - computed: true, optional: false, required: false
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }

  // shutdown_variable - computed: true, optional: false, required: false
  public get shutdownVariable() {
    return this.getStringAttribute('shutdown_variable');
  }

  // update_source_interface - computed: true, optional: false, required: false
  public get updateSourceInterface() {
    return this.getStringAttribute('update_source_interface');
  }

  // update_source_interface_variable - computed: true, optional: false, required: false
  public get updateSourceInterfaceVariable() {
    return this.getStringAttribute('update_source_interface_variable');
  }
}

export class DataSdwanServiceRoutingBgpFeatureIpv6NeighborsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceRoutingBgpFeatureIpv6NeighborsOutputReference {
    return new DataSdwanServiceRoutingBgpFeatureIpv6NeighborsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceRoutingBgpFeatureIpv6Networks {
}

export function dataSdwanServiceRoutingBgpFeatureIpv6NetworksToTerraform(struct?: DataSdwanServiceRoutingBgpFeatureIpv6Networks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceRoutingBgpFeatureIpv6NetworksToHclTerraform(struct?: DataSdwanServiceRoutingBgpFeatureIpv6Networks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceRoutingBgpFeatureIpv6NetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceRoutingBgpFeatureIpv6Networks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceRoutingBgpFeatureIpv6Networks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // network_prefix - computed: true, optional: false, required: false
  public get networkPrefix() {
    return this.getStringAttribute('network_prefix');
  }

  // network_prefix_variable - computed: true, optional: false, required: false
  public get networkPrefixVariable() {
    return this.getStringAttribute('network_prefix_variable');
  }
}

export class DataSdwanServiceRoutingBgpFeatureIpv6NetworksList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceRoutingBgpFeatureIpv6NetworksOutputReference {
    return new DataSdwanServiceRoutingBgpFeatureIpv6NetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceRoutingBgpFeatureIpv6Redistributes {
}

export function dataSdwanServiceRoutingBgpFeatureIpv6RedistributesToTerraform(struct?: DataSdwanServiceRoutingBgpFeatureIpv6Redistributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceRoutingBgpFeatureIpv6RedistributesToHclTerraform(struct?: DataSdwanServiceRoutingBgpFeatureIpv6Redistributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceRoutingBgpFeatureIpv6RedistributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceRoutingBgpFeatureIpv6Redistributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceRoutingBgpFeatureIpv6Redistributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // protocol_variable - computed: true, optional: false, required: false
  public get protocolVariable() {
    return this.getStringAttribute('protocol_variable');
  }

  // route_policy_id - computed: true, optional: false, required: false
  public get routePolicyId() {
    return this.getStringAttribute('route_policy_id');
  }

  // translate_rib_metric - computed: true, optional: false, required: false
  public get translateRibMetric() {
    return this.getBooleanAttribute('translate_rib_metric');
  }
}

export class DataSdwanServiceRoutingBgpFeatureIpv6RedistributesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceRoutingBgpFeatureIpv6RedistributesOutputReference {
    return new DataSdwanServiceRoutingBgpFeatureIpv6RedistributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/service_routing_bgp_feature sdwan_service_routing_bgp_feature}
*/
export class DataSdwanServiceRoutingBgpFeature extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_service_routing_bgp_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanServiceRoutingBgpFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanServiceRoutingBgpFeature to import
  * @param importFromId The id of the existing DataSdwanServiceRoutingBgpFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/service_routing_bgp_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanServiceRoutingBgpFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_service_routing_bgp_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/service_routing_bgp_feature sdwan_service_routing_bgp_feature} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanServiceRoutingBgpFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanServiceRoutingBgpFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_service_routing_bgp_feature',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._featureProfileId = config.featureProfileId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // always_compare_med - computed: true, optional: false, required: false
  public get alwaysCompareMed() {
    return this.getBooleanAttribute('always_compare_med');
  }

  // always_compare_med_variable - computed: true, optional: false, required: false
  public get alwaysCompareMedVariable() {
    return this.getStringAttribute('always_compare_med_variable');
  }

  // as_number - computed: true, optional: false, required: false
  public get asNumber() {
    return this.getNumberAttribute('as_number');
  }

  // as_number_variable - computed: true, optional: false, required: false
  public get asNumberVariable() {
    return this.getStringAttribute('as_number_variable');
  }

  // compare_router_id - computed: true, optional: false, required: false
  public get compareRouterId() {
    return this.getBooleanAttribute('compare_router_id');
  }

  // compare_router_id_variable - computed: true, optional: false, required: false
  public get compareRouterIdVariable() {
    return this.getStringAttribute('compare_router_id_variable');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // deterministic_med - computed: true, optional: false, required: false
  public get deterministicMed() {
    return this.getBooleanAttribute('deterministic_med');
  }

  // deterministic_med_variable - computed: true, optional: false, required: false
  public get deterministicMedVariable() {
    return this.getStringAttribute('deterministic_med_variable');
  }

  // external_routes_distance - computed: true, optional: false, required: false
  public get externalRoutesDistance() {
    return this.getNumberAttribute('external_routes_distance');
  }

  // external_routes_distance_variable - computed: true, optional: false, required: false
  public get externalRoutesDistanceVariable() {
    return this.getStringAttribute('external_routes_distance_variable');
  }

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
  }

  // hold_time - computed: true, optional: false, required: false
  public get holdTime() {
    return this.getNumberAttribute('hold_time');
  }

  // hold_time_variable - computed: true, optional: false, required: false
  public get holdTimeVariable() {
    return this.getStringAttribute('hold_time_variable');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // internal_routes_distance - computed: true, optional: false, required: false
  public get internalRoutesDistance() {
    return this.getNumberAttribute('internal_routes_distance');
  }

  // internal_routes_distance_variable - computed: true, optional: false, required: false
  public get internalRoutesDistanceVariable() {
    return this.getStringAttribute('internal_routes_distance_variable');
  }

  // ipv4_aggregate_addresses - computed: true, optional: false, required: false
  private _ipv4AggregateAddresses = new DataSdwanServiceRoutingBgpFeatureIpv4AggregateAddressesList(this, "ipv4_aggregate_addresses", false);
  public get ipv4AggregateAddresses() {
    return this._ipv4AggregateAddresses;
  }

  // ipv4_eibgp_maximum_paths - computed: true, optional: false, required: false
  public get ipv4EibgpMaximumPaths() {
    return this.getNumberAttribute('ipv4_eibgp_maximum_paths');
  }

  // ipv4_eibgp_maximum_paths_variable - computed: true, optional: false, required: false
  public get ipv4EibgpMaximumPathsVariable() {
    return this.getStringAttribute('ipv4_eibgp_maximum_paths_variable');
  }

  // ipv4_neighbors - computed: true, optional: false, required: false
  private _ipv4Neighbors = new DataSdwanServiceRoutingBgpFeatureIpv4NeighborsList(this, "ipv4_neighbors", false);
  public get ipv4Neighbors() {
    return this._ipv4Neighbors;
  }

  // ipv4_networks - computed: true, optional: false, required: false
  private _ipv4Networks = new DataSdwanServiceRoutingBgpFeatureIpv4NetworksList(this, "ipv4_networks", false);
  public get ipv4Networks() {
    return this._ipv4Networks;
  }

  // ipv4_originate - computed: true, optional: false, required: false
  public get ipv4Originate() {
    return this.getBooleanAttribute('ipv4_originate');
  }

  // ipv4_originate_variable - computed: true, optional: false, required: false
  public get ipv4OriginateVariable() {
    return this.getStringAttribute('ipv4_originate_variable');
  }

  // ipv4_redistributes - computed: true, optional: false, required: false
  private _ipv4Redistributes = new DataSdwanServiceRoutingBgpFeatureIpv4RedistributesList(this, "ipv4_redistributes", false);
  public get ipv4Redistributes() {
    return this._ipv4Redistributes;
  }

  // ipv4_table_map_filter - computed: true, optional: false, required: false
  public get ipv4TableMapFilter() {
    return this.getBooleanAttribute('ipv4_table_map_filter');
  }

  // ipv4_table_map_filter_variable - computed: true, optional: false, required: false
  public get ipv4TableMapFilterVariable() {
    return this.getStringAttribute('ipv4_table_map_filter_variable');
  }

  // ipv4_table_map_route_policy_id - computed: true, optional: false, required: false
  public get ipv4TableMapRoutePolicyId() {
    return this.getStringAttribute('ipv4_table_map_route_policy_id');
  }

  // ipv6_aggregate_addresses - computed: true, optional: false, required: false
  private _ipv6AggregateAddresses = new DataSdwanServiceRoutingBgpFeatureIpv6AggregateAddressesList(this, "ipv6_aggregate_addresses", false);
  public get ipv6AggregateAddresses() {
    return this._ipv6AggregateAddresses;
  }

  // ipv6_eibgp_maximum_paths - computed: true, optional: false, required: false
  public get ipv6EibgpMaximumPaths() {
    return this.getNumberAttribute('ipv6_eibgp_maximum_paths');
  }

  // ipv6_eibgp_maximum_paths_variable - computed: true, optional: false, required: false
  public get ipv6EibgpMaximumPathsVariable() {
    return this.getStringAttribute('ipv6_eibgp_maximum_paths_variable');
  }

  // ipv6_neighbors - computed: true, optional: false, required: false
  private _ipv6Neighbors = new DataSdwanServiceRoutingBgpFeatureIpv6NeighborsList(this, "ipv6_neighbors", false);
  public get ipv6Neighbors() {
    return this._ipv6Neighbors;
  }

  // ipv6_networks - computed: true, optional: false, required: false
  private _ipv6Networks = new DataSdwanServiceRoutingBgpFeatureIpv6NetworksList(this, "ipv6_networks", false);
  public get ipv6Networks() {
    return this._ipv6Networks;
  }

  // ipv6_originate - computed: true, optional: false, required: false
  public get ipv6Originate() {
    return this.getBooleanAttribute('ipv6_originate');
  }

  // ipv6_originate_variable - computed: true, optional: false, required: false
  public get ipv6OriginateVariable() {
    return this.getStringAttribute('ipv6_originate_variable');
  }

  // ipv6_redistributes - computed: true, optional: false, required: false
  private _ipv6Redistributes = new DataSdwanServiceRoutingBgpFeatureIpv6RedistributesList(this, "ipv6_redistributes", false);
  public get ipv6Redistributes() {
    return this._ipv6Redistributes;
  }

  // ipv6_table_map_filter - computed: true, optional: false, required: false
  public get ipv6TableMapFilter() {
    return this.getBooleanAttribute('ipv6_table_map_filter');
  }

  // ipv6_table_map_filter_variable - computed: true, optional: false, required: false
  public get ipv6TableMapFilterVariable() {
    return this.getStringAttribute('ipv6_table_map_filter_variable');
  }

  // ipv6_table_map_route_policy_id - computed: true, optional: false, required: false
  public get ipv6TableMapRoutePolicyId() {
    return this.getStringAttribute('ipv6_table_map_route_policy_id');
  }

  // keepalive_time - computed: true, optional: false, required: false
  public get keepaliveTime() {
    return this.getNumberAttribute('keepalive_time');
  }

  // keepalive_time_variable - computed: true, optional: false, required: false
  public get keepaliveTimeVariable() {
    return this.getStringAttribute('keepalive_time_variable');
  }

  // local_routes_distance - computed: true, optional: false, required: false
  public get localRoutesDistance() {
    return this.getNumberAttribute('local_routes_distance');
  }

  // local_routes_distance_variable - computed: true, optional: false, required: false
  public get localRoutesDistanceVariable() {
    return this.getStringAttribute('local_routes_distance_variable');
  }

  // missing_med_as_worst - computed: true, optional: false, required: false
  public get missingMedAsWorst() {
    return this.getBooleanAttribute('missing_med_as_worst');
  }

  // missing_med_as_worst_variable - computed: true, optional: false, required: false
  public get missingMedAsWorstVariable() {
    return this.getStringAttribute('missing_med_as_worst_variable');
  }

  // multipath_relax - computed: true, optional: false, required: false
  public get multipathRelax() {
    return this.getBooleanAttribute('multipath_relax');
  }

  // multipath_relax_variable - computed: true, optional: false, required: false
  public get multipathRelaxVariable() {
    return this.getStringAttribute('multipath_relax_variable');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // propagate_as_path - computed: true, optional: false, required: false
  public get propagateAsPath() {
    return this.getBooleanAttribute('propagate_as_path');
  }

  // propagate_as_path_variable - computed: true, optional: false, required: false
  public get propagateAsPathVariable() {
    return this.getStringAttribute('propagate_as_path_variable');
  }

  // propagate_community - computed: true, optional: false, required: false
  public get propagateCommunity() {
    return this.getBooleanAttribute('propagate_community');
  }

  // propagate_community_variable - computed: true, optional: false, required: false
  public get propagateCommunityVariable() {
    return this.getStringAttribute('propagate_community_variable');
  }

  // router_id - computed: true, optional: false, required: false
  public get routerId() {
    return this.getStringAttribute('router_id');
  }

  // router_id_variable - computed: true, optional: false, required: false
  public get routerIdVariable() {
    return this.getStringAttribute('router_id_variable');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
