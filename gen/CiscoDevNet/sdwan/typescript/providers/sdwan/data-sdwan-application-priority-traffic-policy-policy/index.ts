// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/application_priority_traffic_policy_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanApplicationPriorityTrafficPolicyPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/application_priority_traffic_policy_policy#feature_profile_id DataSdwanApplicationPriorityTrafficPolicyPolicy#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The id of the Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/application_priority_traffic_policy_policy#id DataSdwanApplicationPriorityTrafficPolicyPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataSdwanApplicationPriorityTrafficPolicyPolicySequencesActionsSetParameters {
}

export function dataSdwanApplicationPriorityTrafficPolicyPolicySequencesActionsSetParametersToTerraform(struct?: DataSdwanApplicationPriorityTrafficPolicyPolicySequencesActionsSetParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanApplicationPriorityTrafficPolicyPolicySequencesActionsSetParametersToHclTerraform(struct?: DataSdwanApplicationPriorityTrafficPolicyPolicySequencesActionsSetParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanApplicationPriorityTrafficPolicyPolicySequencesActionsSetParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanApplicationPriorityTrafficPolicyPolicySequencesActionsSetParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanApplicationPriorityTrafficPolicyPolicySequencesActionsSetParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dscp - computed: true, optional: false, required: false
  public get dscp() {
    return this.getNumberAttribute('dscp');
  }

  // forwarding_class_list_id - computed: true, optional: false, required: false
  public get forwardingClassListId() {
    return this.getStringAttribute('forwarding_class_list_id');
  }

  // local_tloc_list_color - computed: true, optional: false, required: false
  public get localTlocListColor() {
    return cdktf.Fn.tolist(this.getListAttribute('local_tloc_list_color'));
  }

  // local_tloc_list_encapsulation - computed: true, optional: false, required: false
  public get localTlocListEncapsulation() {
    return this.getStringAttribute('local_tloc_list_encapsulation');
  }

  // local_tloc_list_restrict - computed: true, optional: false, required: false
  public get localTlocListRestrict() {
    return this.getStringAttribute('local_tloc_list_restrict');
  }

  // next_hop_ipv4 - computed: true, optional: false, required: false
  public get nextHopIpv4() {
    return this.getStringAttribute('next_hop_ipv4');
  }

  // next_hop_ipv6 - computed: true, optional: false, required: false
  public get nextHopIpv6() {
    return this.getStringAttribute('next_hop_ipv6');
  }

  // next_hop_loose - computed: true, optional: false, required: false
  public get nextHopLoose() {
    return this.getBooleanAttribute('next_hop_loose');
  }

  // policer_id - computed: true, optional: false, required: false
  public get policerId() {
    return this.getStringAttribute('policer_id');
  }

  // preferred_color_group_id - computed: true, optional: false, required: false
  public get preferredColorGroupId() {
    return this.getStringAttribute('preferred_color_group_id');
  }

  // preferred_remote_color_id - computed: true, optional: false, required: false
  public get preferredRemoteColorId() {
    return cdktf.Fn.tolist(this.getListAttribute('preferred_remote_color_id'));
  }

  // preferred_remote_color_restrict - computed: true, optional: false, required: false
  public get preferredRemoteColorRestrict() {
    return this.getStringAttribute('preferred_remote_color_restrict');
  }

  // service_chain_fallback_to_routing - computed: true, optional: false, required: false
  public get serviceChainFallbackToRouting() {
    return this.getBooleanAttribute('service_chain_fallback_to_routing');
  }

  // service_chain_local - computed: true, optional: false, required: false
  public get serviceChainLocal() {
    return this.getBooleanAttribute('service_chain_local');
  }

  // service_chain_tloc_color - computed: true, optional: false, required: false
  public get serviceChainTlocColor() {
    return cdktf.Fn.tolist(this.getListAttribute('service_chain_tloc_color'));
  }

  // service_chain_tloc_encapsulation - computed: true, optional: false, required: false
  public get serviceChainTlocEncapsulation() {
    return this.getStringAttribute('service_chain_tloc_encapsulation');
  }

  // service_chain_tloc_ip - computed: true, optional: false, required: false
  public get serviceChainTlocIp() {
    return this.getStringAttribute('service_chain_tloc_ip');
  }

  // service_chain_tloc_list_id - computed: true, optional: false, required: false
  public get serviceChainTlocListId() {
    return this.getStringAttribute('service_chain_tloc_list_id');
  }

  // service_chain_type - computed: true, optional: false, required: false
  public get serviceChainType() {
    return this.getStringAttribute('service_chain_type');
  }

  // service_chain_vpn - computed: true, optional: false, required: false
  public get serviceChainVpn() {
    return this.getNumberAttribute('service_chain_vpn');
  }

  // service_tloc_color - computed: true, optional: false, required: false
  public get serviceTlocColor() {
    return cdktf.Fn.tolist(this.getListAttribute('service_tloc_color'));
  }

  // service_tloc_encapsulation - computed: true, optional: false, required: false
  public get serviceTlocEncapsulation() {
    return this.getStringAttribute('service_tloc_encapsulation');
  }

  // service_tloc_ip - computed: true, optional: false, required: false
  public get serviceTlocIp() {
    return this.getStringAttribute('service_tloc_ip');
  }

  // service_tloc_list_id - computed: true, optional: false, required: false
  public get serviceTlocListId() {
    return this.getStringAttribute('service_tloc_list_id');
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // service_vpn - computed: true, optional: false, required: false
  public get serviceVpn() {
    return this.getStringAttribute('service_vpn');
  }

  // tloc_color - computed: true, optional: false, required: false
  public get tlocColor() {
    return cdktf.Fn.tolist(this.getListAttribute('tloc_color'));
  }

  // tloc_encapsulation - computed: true, optional: false, required: false
  public get tlocEncapsulation() {
    return this.getStringAttribute('tloc_encapsulation');
  }

  // tloc_ip - computed: true, optional: false, required: false
  public get tlocIp() {
    return this.getStringAttribute('tloc_ip');
  }

  // tloc_list_id - computed: true, optional: false, required: false
  public get tlocListId() {
    return this.getStringAttribute('tloc_list_id');
  }

  // vpn - computed: true, optional: false, required: false
  public get vpn() {
    return this.getStringAttribute('vpn');
  }
}

export class DataSdwanApplicationPriorityTrafficPolicyPolicySequencesActionsSetParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanApplicationPriorityTrafficPolicyPolicySequencesActionsSetParametersOutputReference {
    return new DataSdwanApplicationPriorityTrafficPolicyPolicySequencesActionsSetParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanApplicationPriorityTrafficPolicyPolicySequencesActionsSlaClasses {
}

export function dataSdwanApplicationPriorityTrafficPolicyPolicySequencesActionsSlaClassesToTerraform(struct?: DataSdwanApplicationPriorityTrafficPolicyPolicySequencesActionsSlaClasses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanApplicationPriorityTrafficPolicyPolicySequencesActionsSlaClassesToHclTerraform(struct?: DataSdwanApplicationPriorityTrafficPolicyPolicySequencesActionsSlaClasses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanApplicationPriorityTrafficPolicyPolicySequencesActionsSlaClassesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanApplicationPriorityTrafficPolicyPolicySequencesActionsSlaClasses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanApplicationPriorityTrafficPolicyPolicySequencesActionsSlaClasses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fallback_to_best_path - computed: true, optional: false, required: false
  public get fallbackToBestPath() {
    return this.getBooleanAttribute('fallback_to_best_path');
  }

  // preferred_color - computed: true, optional: false, required: false
  public get preferredColor() {
    return cdktf.Fn.tolist(this.getListAttribute('preferred_color'));
  }

  // preferred_color_group_list_id - computed: true, optional: false, required: false
  public get preferredColorGroupListId() {
    return this.getStringAttribute('preferred_color_group_list_id');
  }

  // preferred_remote_color - computed: true, optional: false, required: false
  public get preferredRemoteColor() {
    return cdktf.Fn.tolist(this.getListAttribute('preferred_remote_color'));
  }

  // remote_color_restrict - computed: true, optional: false, required: false
  public get remoteColorRestrict() {
    return this.getBooleanAttribute('remote_color_restrict');
  }

  // sla_class_list_id - computed: true, optional: false, required: false
  public get slaClassListId() {
    return this.getStringAttribute('sla_class_list_id');
  }

  // strict - computed: true, optional: false, required: false
  public get strict() {
    return this.getBooleanAttribute('strict');
  }
}

export class DataSdwanApplicationPriorityTrafficPolicyPolicySequencesActionsSlaClassesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanApplicationPriorityTrafficPolicyPolicySequencesActionsSlaClassesOutputReference {
    return new DataSdwanApplicationPriorityTrafficPolicyPolicySequencesActionsSlaClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanApplicationPriorityTrafficPolicyPolicySequencesActions {
}

export function dataSdwanApplicationPriorityTrafficPolicyPolicySequencesActionsToTerraform(struct?: DataSdwanApplicationPriorityTrafficPolicyPolicySequencesActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanApplicationPriorityTrafficPolicyPolicySequencesActionsToHclTerraform(struct?: DataSdwanApplicationPriorityTrafficPolicyPolicySequencesActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanApplicationPriorityTrafficPolicyPolicySequencesActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanApplicationPriorityTrafficPolicyPolicySequencesActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanApplicationPriorityTrafficPolicyPolicySequencesActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_sla_preferred_color - computed: true, optional: false, required: false
  public get backupSlaPreferredColor() {
    return cdktf.Fn.tolist(this.getListAttribute('backup_sla_preferred_color'));
  }

  // cloud_probe - computed: true, optional: false, required: false
  public get cloudProbe() {
    return this.getBooleanAttribute('cloud_probe');
  }

  // cloud_saas - computed: true, optional: false, required: false
  public get cloudSaas() {
    return this.getBooleanAttribute('cloud_saas');
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getStringAttribute('count');
  }

  // fallback_to_routing - computed: true, optional: false, required: false
  public get fallbackToRouting() {
    return this.getBooleanAttribute('fallback_to_routing');
  }

  // log - computed: true, optional: false, required: false
  public get log() {
    return this.getBooleanAttribute('log');
  }

  // loss_correct_fec_threshold - computed: true, optional: false, required: false
  public get lossCorrectFecThreshold() {
    return this.getNumberAttribute('loss_correct_fec_threshold');
  }

  // loss_correct_type - computed: true, optional: false, required: false
  public get lossCorrectType() {
    return this.getStringAttribute('loss_correct_type');
  }

  // nat_bypass - computed: true, optional: false, required: false
  public get natBypass() {
    return this.getBooleanAttribute('nat_bypass');
  }

  // nat_dia_interface - computed: true, optional: false, required: false
  public get natDiaInterface() {
    return cdktf.Fn.tolist(this.getListAttribute('nat_dia_interface'));
  }

  // nat_dia_pool - computed: true, optional: false, required: false
  public get natDiaPool() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('nat_dia_pool')));
  }

  // nat_fallback - computed: true, optional: false, required: false
  public get natFallback() {
    return this.getBooleanAttribute('nat_fallback');
  }

  // nat_pool - computed: true, optional: false, required: false
  public get natPool() {
    return this.getNumberAttribute('nat_pool');
  }

  // nat_vpn - computed: true, optional: false, required: false
  public get natVpn() {
    return this.getBooleanAttribute('nat_vpn');
  }

  // redirect_dns_field - computed: true, optional: false, required: false
  public get redirectDnsField() {
    return this.getStringAttribute('redirect_dns_field');
  }

  // redirect_dns_value - computed: true, optional: false, required: false
  public get redirectDnsValue() {
    return this.getStringAttribute('redirect_dns_value');
  }

  // secure_internet_gateway - computed: true, optional: false, required: false
  public get secureInternetGateway() {
    return this.getBooleanAttribute('secure_internet_gateway');
  }

  // set_parameters - computed: true, optional: false, required: false
  private _setParameters = new DataSdwanApplicationPriorityTrafficPolicyPolicySequencesActionsSetParametersList(this, "set_parameters", false);
  public get setParameters() {
    return this._setParameters;
  }

  // sla_classes - computed: true, optional: false, required: false
  private _slaClasses = new DataSdwanApplicationPriorityTrafficPolicyPolicySequencesActionsSlaClassesList(this, "sla_classes", false);
  public get slaClasses() {
    return this._slaClasses;
  }
}

export class DataSdwanApplicationPriorityTrafficPolicyPolicySequencesActionsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanApplicationPriorityTrafficPolicyPolicySequencesActionsOutputReference {
    return new DataSdwanApplicationPriorityTrafficPolicyPolicySequencesActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanApplicationPriorityTrafficPolicyPolicySequencesMatchEntries {
}

export function dataSdwanApplicationPriorityTrafficPolicyPolicySequencesMatchEntriesToTerraform(struct?: DataSdwanApplicationPriorityTrafficPolicyPolicySequencesMatchEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanApplicationPriorityTrafficPolicyPolicySequencesMatchEntriesToHclTerraform(struct?: DataSdwanApplicationPriorityTrafficPolicyPolicySequencesMatchEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanApplicationPriorityTrafficPolicyPolicySequencesMatchEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanApplicationPriorityTrafficPolicyPolicySequencesMatchEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanApplicationPriorityTrafficPolicyPolicySequencesMatchEntries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_list_id - computed: true, optional: false, required: false
  public get applicationListId() {
    return this.getStringAttribute('application_list_id');
  }

  // destination_data_ipv4_prefix_list_id - computed: true, optional: false, required: false
  public get destinationDataIpv4PrefixListId() {
    return this.getStringAttribute('destination_data_ipv4_prefix_list_id');
  }

  // destination_data_ipv6_prefix_list_id - computed: true, optional: false, required: false
  public get destinationDataIpv6PrefixListId() {
    return this.getStringAttribute('destination_data_ipv6_prefix_list_id');
  }

  // destination_ipv4_prefix - computed: true, optional: false, required: false
  public get destinationIpv4Prefix() {
    return this.getStringAttribute('destination_ipv4_prefix');
  }

  // destination_ipv6_prefix - computed: true, optional: false, required: false
  public get destinationIpv6Prefix() {
    return this.getStringAttribute('destination_ipv6_prefix');
  }

  // destination_ports - computed: true, optional: false, required: false
  public get destinationPorts() {
    return cdktf.Fn.tolist(this.getListAttribute('destination_ports'));
  }

  // destination_region - computed: true, optional: false, required: false
  public get destinationRegion() {
    return this.getStringAttribute('destination_region');
  }

  // dns - computed: true, optional: false, required: false
  public get dns() {
    return this.getStringAttribute('dns');
  }

  // dns_application_list_id - computed: true, optional: false, required: false
  public get dnsApplicationListId() {
    return this.getStringAttribute('dns_application_list_id');
  }

  // dscp - computed: true, optional: false, required: false
  public get dscp() {
    return this.getNumberAttribute('dscp');
  }

  // icmp6_message - computed: true, optional: false, required: false
  public get icmp6Message() {
    return cdktf.Fn.tolist(this.getListAttribute('icmp6_message'));
  }

  // icmp_message - computed: true, optional: false, required: false
  public get icmpMessage() {
    return cdktf.Fn.tolist(this.getListAttribute('icmp_message'));
  }

  // packet_length - computed: true, optional: false, required: false
  public get packetLength() {
    return this.getStringAttribute('packet_length');
  }

  // protocols - computed: true, optional: false, required: false
  public get protocols() {
    return cdktf.Fn.tolist(this.getListAttribute('protocols'));
  }

  // saas_application_list_id - computed: true, optional: false, required: false
  public get saasApplicationListId() {
    return this.getStringAttribute('saas_application_list_id');
  }

  // service_area - computed: true, optional: false, required: false
  public get serviceArea() {
    return cdktf.Fn.tolist(this.getListAttribute('service_area'));
  }

  // source_data_ipv4_prefx_list_id - computed: true, optional: false, required: false
  public get sourceDataIpv4PrefxListId() {
    return this.getStringAttribute('source_data_ipv4_prefx_list_id');
  }

  // source_data_ipv6_prefx_list_id - computed: true, optional: false, required: false
  public get sourceDataIpv6PrefxListId() {
    return this.getStringAttribute('source_data_ipv6_prefx_list_id');
  }

  // source_ipv4_prefix - computed: true, optional: false, required: false
  public get sourceIpv4Prefix() {
    return this.getStringAttribute('source_ipv4_prefix');
  }

  // source_ipv6_prefix - computed: true, optional: false, required: false
  public get sourceIpv6Prefix() {
    return this.getStringAttribute('source_ipv6_prefix');
  }

  // source_ports - computed: true, optional: false, required: false
  public get sourcePorts() {
    return cdktf.Fn.tolist(this.getListAttribute('source_ports'));
  }

  // tcp - computed: true, optional: false, required: false
  public get tcp() {
    return this.getStringAttribute('tcp');
  }

  // traffic_category - computed: true, optional: false, required: false
  public get trafficCategory() {
    return this.getStringAttribute('traffic_category');
  }

  // traffic_class - computed: true, optional: false, required: false
  public get trafficClass() {
    return this.getStringAttribute('traffic_class');
  }

  // traffic_to - computed: true, optional: false, required: false
  public get trafficTo() {
    return this.getStringAttribute('traffic_to');
  }
}

export class DataSdwanApplicationPriorityTrafficPolicyPolicySequencesMatchEntriesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanApplicationPriorityTrafficPolicyPolicySequencesMatchEntriesOutputReference {
    return new DataSdwanApplicationPriorityTrafficPolicyPolicySequencesMatchEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanApplicationPriorityTrafficPolicyPolicySequences {
}

export function dataSdwanApplicationPriorityTrafficPolicyPolicySequencesToTerraform(struct?: DataSdwanApplicationPriorityTrafficPolicyPolicySequences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanApplicationPriorityTrafficPolicyPolicySequencesToHclTerraform(struct?: DataSdwanApplicationPriorityTrafficPolicyPolicySequences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanApplicationPriorityTrafficPolicyPolicySequencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanApplicationPriorityTrafficPolicyPolicySequences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanApplicationPriorityTrafficPolicyPolicySequences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new DataSdwanApplicationPriorityTrafficPolicyPolicySequencesActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // base_action - computed: true, optional: false, required: false
  public get baseAction() {
    return this.getStringAttribute('base_action');
  }

  // match_entries - computed: true, optional: false, required: false
  private _matchEntries = new DataSdwanApplicationPriorityTrafficPolicyPolicySequencesMatchEntriesList(this, "match_entries", false);
  public get matchEntries() {
    return this._matchEntries;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // sequence_id - computed: true, optional: false, required: false
  public get sequenceId() {
    return this.getNumberAttribute('sequence_id');
  }

  // sequence_name - computed: true, optional: false, required: false
  public get sequenceName() {
    return this.getStringAttribute('sequence_name');
  }
}

export class DataSdwanApplicationPriorityTrafficPolicyPolicySequencesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanApplicationPriorityTrafficPolicyPolicySequencesOutputReference {
    return new DataSdwanApplicationPriorityTrafficPolicyPolicySequencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/application_priority_traffic_policy_policy sdwan_application_priority_traffic_policy_policy}
*/
export class DataSdwanApplicationPriorityTrafficPolicyPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_application_priority_traffic_policy_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanApplicationPriorityTrafficPolicyPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanApplicationPriorityTrafficPolicyPolicy to import
  * @param importFromId The id of the existing DataSdwanApplicationPriorityTrafficPolicyPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/application_priority_traffic_policy_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanApplicationPriorityTrafficPolicyPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_application_priority_traffic_policy_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/application_priority_traffic_policy_policy sdwan_application_priority_traffic_policy_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanApplicationPriorityTrafficPolicyPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanApplicationPriorityTrafficPolicyPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_application_priority_traffic_policy_policy',
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

  // default_action - computed: true, optional: false, required: false
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sequences - computed: true, optional: false, required: false
  private _sequences = new DataSdwanApplicationPriorityTrafficPolicyPolicySequencesList(this, "sequences", false);
  public get sequences() {
    return this._sequences;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // vpns - computed: true, optional: false, required: false
  public get vpns() {
    return cdktf.Fn.tolist(this.getListAttribute('vpns'));
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
