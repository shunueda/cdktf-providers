// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/traffic_data_policy_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanTrafficDataPolicyDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/traffic_data_policy_definition#id DataSdwanTrafficDataPolicyDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataSdwanTrafficDataPolicyDefinitionSequencesActionEntriesNatParameters {
}

export function dataSdwanTrafficDataPolicyDefinitionSequencesActionEntriesNatParametersToTerraform(struct?: DataSdwanTrafficDataPolicyDefinitionSequencesActionEntriesNatParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanTrafficDataPolicyDefinitionSequencesActionEntriesNatParametersToHclTerraform(struct?: DataSdwanTrafficDataPolicyDefinitionSequencesActionEntriesNatParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanTrafficDataPolicyDefinitionSequencesActionEntriesNatParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanTrafficDataPolicyDefinitionSequencesActionEntriesNatParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanTrafficDataPolicyDefinitionSequencesActionEntriesNatParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fallback - computed: true, optional: false, required: false
  public get fallback() {
    return this.getBooleanAttribute('fallback');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vpn_id - computed: true, optional: false, required: false
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }
}

export class DataSdwanTrafficDataPolicyDefinitionSequencesActionEntriesNatParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanTrafficDataPolicyDefinitionSequencesActionEntriesNatParametersOutputReference {
    return new DataSdwanTrafficDataPolicyDefinitionSequencesActionEntriesNatParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanTrafficDataPolicyDefinitionSequencesActionEntriesSetParameters {
}

export function dataSdwanTrafficDataPolicyDefinitionSequencesActionEntriesSetParametersToTerraform(struct?: DataSdwanTrafficDataPolicyDefinitionSequencesActionEntriesSetParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanTrafficDataPolicyDefinitionSequencesActionEntriesSetParametersToHclTerraform(struct?: DataSdwanTrafficDataPolicyDefinitionSequencesActionEntriesSetParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanTrafficDataPolicyDefinitionSequencesActionEntriesSetParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanTrafficDataPolicyDefinitionSequencesActionEntriesSetParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanTrafficDataPolicyDefinitionSequencesActionEntriesSetParameters | undefined) {
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

  // forwarding_class - computed: true, optional: false, required: false
  public get forwardingClass() {
    return this.getStringAttribute('forwarding_class');
  }

  // local_tloc_list_color - computed: true, optional: false, required: false
  public get localTlocListColor() {
    return this.getStringAttribute('local_tloc_list_color');
  }

  // local_tloc_list_encap - computed: true, optional: false, required: false
  public get localTlocListEncap() {
    return this.getStringAttribute('local_tloc_list_encap');
  }

  // local_tloc_list_restrict - computed: true, optional: false, required: false
  public get localTlocListRestrict() {
    return this.getBooleanAttribute('local_tloc_list_restrict');
  }

  // next_hop - computed: true, optional: false, required: false
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }

  // next_hop_loose - computed: true, optional: false, required: false
  public get nextHopLoose() {
    return this.getBooleanAttribute('next_hop_loose');
  }

  // policer_list_id - computed: true, optional: false, required: false
  public get policerListId() {
    return this.getStringAttribute('policer_list_id');
  }

  // policer_list_version - computed: true, optional: false, required: false
  public get policerListVersion() {
    return this.getNumberAttribute('policer_list_version');
  }

  // preferred_color_group_list_id - computed: true, optional: false, required: false
  public get preferredColorGroupListId() {
    return this.getStringAttribute('preferred_color_group_list_id');
  }

  // preferred_color_group_list_version - computed: true, optional: false, required: false
  public get preferredColorGroupListVersion() {
    return this.getNumberAttribute('preferred_color_group_list_version');
  }

  // service_tloc_color - computed: true, optional: false, required: false
  public get serviceTlocColor() {
    return this.getStringAttribute('service_tloc_color');
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

  // service_tloc_list_version - computed: true, optional: false, required: false
  public get serviceTlocListVersion() {
    return this.getNumberAttribute('service_tloc_list_version');
  }

  // service_tloc_local - computed: true, optional: false, required: false
  public get serviceTlocLocal() {
    return this.getBooleanAttribute('service_tloc_local');
  }

  // service_tloc_restrict - computed: true, optional: false, required: false
  public get serviceTlocRestrict() {
    return this.getBooleanAttribute('service_tloc_restrict');
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // service_vpn_id - computed: true, optional: false, required: false
  public get serviceVpnId() {
    return this.getNumberAttribute('service_vpn_id');
  }

  // tloc_color - computed: true, optional: false, required: false
  public get tlocColor() {
    return this.getStringAttribute('tloc_color');
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

  // tloc_list_version - computed: true, optional: false, required: false
  public get tlocListVersion() {
    return this.getNumberAttribute('tloc_list_version');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vpn_id - computed: true, optional: false, required: false
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }
}

export class DataSdwanTrafficDataPolicyDefinitionSequencesActionEntriesSetParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanTrafficDataPolicyDefinitionSequencesActionEntriesSetParametersOutputReference {
    return new DataSdwanTrafficDataPolicyDefinitionSequencesActionEntriesSetParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanTrafficDataPolicyDefinitionSequencesActionEntries {
}

export function dataSdwanTrafficDataPolicyDefinitionSequencesActionEntriesToTerraform(struct?: DataSdwanTrafficDataPolicyDefinitionSequencesActionEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanTrafficDataPolicyDefinitionSequencesActionEntriesToHclTerraform(struct?: DataSdwanTrafficDataPolicyDefinitionSequencesActionEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanTrafficDataPolicyDefinitionSequencesActionEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanTrafficDataPolicyDefinitionSequencesActionEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanTrafficDataPolicyDefinitionSequencesActionEntries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cflowd - computed: true, optional: false, required: false
  public get cflowd() {
    return this.getBooleanAttribute('cflowd');
  }

  // counter - computed: true, optional: false, required: false
  public get counter() {
    return this.getStringAttribute('counter');
  }

  // dre_optimization - computed: true, optional: false, required: false
  public get dreOptimization() {
    return this.getBooleanAttribute('dre_optimization');
  }

  // fallback_to_routing - computed: true, optional: false, required: false
  public get fallbackToRouting() {
    return this.getBooleanAttribute('fallback_to_routing');
  }

  // log - computed: true, optional: false, required: false
  public get log() {
    return this.getBooleanAttribute('log');
  }

  // loss_correction - computed: true, optional: false, required: false
  public get lossCorrection() {
    return this.getStringAttribute('loss_correction');
  }

  // loss_correction_fec - computed: true, optional: false, required: false
  public get lossCorrectionFec() {
    return this.getStringAttribute('loss_correction_fec');
  }

  // loss_correction_fec_threshold - computed: true, optional: false, required: false
  public get lossCorrectionFecThreshold() {
    return this.getStringAttribute('loss_correction_fec_threshold');
  }

  // loss_correction_packet_duplication - computed: true, optional: false, required: false
  public get lossCorrectionPacketDuplication() {
    return this.getStringAttribute('loss_correction_packet_duplication');
  }

  // nat_parameters - computed: true, optional: false, required: false
  private _natParameters = new DataSdwanTrafficDataPolicyDefinitionSequencesActionEntriesNatParametersList(this, "nat_parameters", false);
  public get natParameters() {
    return this._natParameters;
  }

  // nat_pool - computed: true, optional: false, required: false
  public get natPool() {
    return this.getStringAttribute('nat_pool');
  }

  // nat_pool_id - computed: true, optional: false, required: false
  public get natPoolId() {
    return this.getNumberAttribute('nat_pool_id');
  }

  // redirect_dns - computed: true, optional: false, required: false
  public get redirectDns() {
    return this.getStringAttribute('redirect_dns');
  }

  // redirect_dns_address - computed: true, optional: false, required: false
  public get redirectDnsAddress() {
    return this.getStringAttribute('redirect_dns_address');
  }

  // redirect_dns_type - computed: true, optional: false, required: false
  public get redirectDnsType() {
    return this.getStringAttribute('redirect_dns_type');
  }

  // secure_internet_gateway - computed: true, optional: false, required: false
  public get secureInternetGateway() {
    return this.getBooleanAttribute('secure_internet_gateway');
  }

  // service_node_group - computed: true, optional: false, required: false
  public get serviceNodeGroup() {
    return this.getStringAttribute('service_node_group');
  }

  // set_parameters - computed: true, optional: false, required: false
  private _setParameters = new DataSdwanTrafficDataPolicyDefinitionSequencesActionEntriesSetParametersList(this, "set_parameters", false);
  public get setParameters() {
    return this._setParameters;
  }

  // tcp_optimization - computed: true, optional: false, required: false
  public get tcpOptimization() {
    return this.getBooleanAttribute('tcp_optimization');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataSdwanTrafficDataPolicyDefinitionSequencesActionEntriesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanTrafficDataPolicyDefinitionSequencesActionEntriesOutputReference {
    return new DataSdwanTrafficDataPolicyDefinitionSequencesActionEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanTrafficDataPolicyDefinitionSequencesMatchEntries {
}

export function dataSdwanTrafficDataPolicyDefinitionSequencesMatchEntriesToTerraform(struct?: DataSdwanTrafficDataPolicyDefinitionSequencesMatchEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanTrafficDataPolicyDefinitionSequencesMatchEntriesToHclTerraform(struct?: DataSdwanTrafficDataPolicyDefinitionSequencesMatchEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanTrafficDataPolicyDefinitionSequencesMatchEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanTrafficDataPolicyDefinitionSequencesMatchEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanTrafficDataPolicyDefinitionSequencesMatchEntries | undefined) {
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

  // application_list_version - computed: true, optional: false, required: false
  public get applicationListVersion() {
    return this.getNumberAttribute('application_list_version');
  }

  // destination_data_prefix_list_id - computed: true, optional: false, required: false
  public get destinationDataPrefixListId() {
    return this.getStringAttribute('destination_data_prefix_list_id');
  }

  // destination_data_prefix_list_version - computed: true, optional: false, required: false
  public get destinationDataPrefixListVersion() {
    return this.getNumberAttribute('destination_data_prefix_list_version');
  }

  // destination_ip - computed: true, optional: false, required: false
  public get destinationIp() {
    return this.getStringAttribute('destination_ip');
  }

  // destination_port - computed: true, optional: false, required: false
  public get destinationPort() {
    return this.getStringAttribute('destination_port');
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

  // dns_application_list_version - computed: true, optional: false, required: false
  public get dnsApplicationListVersion() {
    return this.getNumberAttribute('dns_application_list_version');
  }

  // dscp - computed: true, optional: false, required: false
  public get dscp() {
    return this.getStringAttribute('dscp');
  }

  // icmp_message - computed: true, optional: false, required: false
  public get icmpMessage() {
    return this.getStringAttribute('icmp_message');
  }

  // packet_length - computed: true, optional: false, required: false
  public get packetLength() {
    return this.getNumberAttribute('packet_length');
  }

  // plp - computed: true, optional: false, required: false
  public get plp() {
    return this.getStringAttribute('plp');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // source_data_prefix_list_id - computed: true, optional: false, required: false
  public get sourceDataPrefixListId() {
    return this.getStringAttribute('source_data_prefix_list_id');
  }

  // source_data_prefix_list_version - computed: true, optional: false, required: false
  public get sourceDataPrefixListVersion() {
    return this.getNumberAttribute('source_data_prefix_list_version');
  }

  // source_ip - computed: true, optional: false, required: false
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }

  // source_port - computed: true, optional: false, required: false
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }

  // tcp - computed: true, optional: false, required: false
  public get tcp() {
    return this.getStringAttribute('tcp');
  }

  // traffic_to - computed: true, optional: false, required: false
  public get trafficTo() {
    return this.getStringAttribute('traffic_to');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataSdwanTrafficDataPolicyDefinitionSequencesMatchEntriesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanTrafficDataPolicyDefinitionSequencesMatchEntriesOutputReference {
    return new DataSdwanTrafficDataPolicyDefinitionSequencesMatchEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanTrafficDataPolicyDefinitionSequences {
}

export function dataSdwanTrafficDataPolicyDefinitionSequencesToTerraform(struct?: DataSdwanTrafficDataPolicyDefinitionSequences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanTrafficDataPolicyDefinitionSequencesToHclTerraform(struct?: DataSdwanTrafficDataPolicyDefinitionSequences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanTrafficDataPolicyDefinitionSequencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanTrafficDataPolicyDefinitionSequences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanTrafficDataPolicyDefinitionSequences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_entries - computed: true, optional: false, required: false
  private _actionEntries = new DataSdwanTrafficDataPolicyDefinitionSequencesActionEntriesList(this, "action_entries", true);
  public get actionEntries() {
    return this._actionEntries;
  }

  // base_action - computed: true, optional: false, required: false
  public get baseAction() {
    return this.getStringAttribute('base_action');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // ip_type - computed: true, optional: false, required: false
  public get ipType() {
    return this.getStringAttribute('ip_type');
  }

  // match_entries - computed: true, optional: false, required: false
  private _matchEntries = new DataSdwanTrafficDataPolicyDefinitionSequencesMatchEntriesList(this, "match_entries", true);
  public get matchEntries() {
    return this._matchEntries;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataSdwanTrafficDataPolicyDefinitionSequencesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanTrafficDataPolicyDefinitionSequencesOutputReference {
    return new DataSdwanTrafficDataPolicyDefinitionSequencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/traffic_data_policy_definition sdwan_traffic_data_policy_definition}
*/
export class DataSdwanTrafficDataPolicyDefinition extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_traffic_data_policy_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanTrafficDataPolicyDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanTrafficDataPolicyDefinition to import
  * @param importFromId The id of the existing DataSdwanTrafficDataPolicyDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/traffic_data_policy_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanTrafficDataPolicyDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_traffic_data_policy_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/traffic_data_policy_definition sdwan_traffic_data_policy_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanTrafficDataPolicyDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanTrafficDataPolicyDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_traffic_data_policy_definition',
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
  private _sequences = new DataSdwanTrafficDataPolicyDefinitionSequencesList(this, "sequences", false);
  public get sequences() {
    return this._sequences;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
