// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/router_multicast
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiosRouterMulticastConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/router_multicast#id DataFortiosRouterMulticast#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/router_multicast#vdomparam DataFortiosRouterMulticast#vdomparam}
  */
  readonly vdomparam?: string;
}
export interface DataFortiosRouterMulticastInterfaceIgmp {
}

export function dataFortiosRouterMulticastInterfaceIgmpToTerraform(struct?: DataFortiosRouterMulticastInterfaceIgmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterMulticastInterfaceIgmpToHclTerraform(struct?: DataFortiosRouterMulticastInterfaceIgmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterMulticastInterfaceIgmpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterMulticastInterfaceIgmp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterMulticastInterfaceIgmp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_group - computed: true, optional: false, required: false
  public get accessGroup() {
    return this.getStringAttribute('access_group');
  }

  // immediate_leave_group - computed: true, optional: false, required: false
  public get immediateLeaveGroup() {
    return this.getStringAttribute('immediate_leave_group');
  }

  // last_member_query_count - computed: true, optional: false, required: false
  public get lastMemberQueryCount() {
    return this.getNumberAttribute('last_member_query_count');
  }

  // last_member_query_interval - computed: true, optional: false, required: false
  public get lastMemberQueryInterval() {
    return this.getNumberAttribute('last_member_query_interval');
  }

  // query_interval - computed: true, optional: false, required: false
  public get queryInterval() {
    return this.getNumberAttribute('query_interval');
  }

  // query_max_response_time - computed: true, optional: false, required: false
  public get queryMaxResponseTime() {
    return this.getNumberAttribute('query_max_response_time');
  }

  // query_timeout - computed: true, optional: false, required: false
  public get queryTimeout() {
    return this.getNumberAttribute('query_timeout');
  }

  // router_alert_check - computed: true, optional: false, required: false
  public get routerAlertCheck() {
    return this.getStringAttribute('router_alert_check');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataFortiosRouterMulticastInterfaceIgmpList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterMulticastInterfaceIgmpOutputReference {
    return new DataFortiosRouterMulticastInterfaceIgmpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterMulticastInterfaceJoinGroup {
}

export function dataFortiosRouterMulticastInterfaceJoinGroupToTerraform(struct?: DataFortiosRouterMulticastInterfaceJoinGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterMulticastInterfaceJoinGroupToHclTerraform(struct?: DataFortiosRouterMulticastInterfaceJoinGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterMulticastInterfaceJoinGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterMulticastInterfaceJoinGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterMulticastInterfaceJoinGroup | undefined) {
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
}

export class DataFortiosRouterMulticastInterfaceJoinGroupList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterMulticastInterfaceJoinGroupOutputReference {
    return new DataFortiosRouterMulticastInterfaceJoinGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterMulticastInterface {
}

export function dataFortiosRouterMulticastInterfaceToTerraform(struct?: DataFortiosRouterMulticastInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterMulticastInterfaceToHclTerraform(struct?: DataFortiosRouterMulticastInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterMulticastInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterMulticastInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterMulticastInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bfd - computed: true, optional: false, required: false
  public get bfd() {
    return this.getStringAttribute('bfd');
  }

  // cisco_exclude_genid - computed: true, optional: false, required: false
  public get ciscoExcludeGenid() {
    return this.getStringAttribute('cisco_exclude_genid');
  }

  // dr_priority - computed: true, optional: false, required: false
  public get drPriority() {
    return this.getNumberAttribute('dr_priority');
  }

  // hello_holdtime - computed: true, optional: false, required: false
  public get helloHoldtime() {
    return this.getNumberAttribute('hello_holdtime');
  }

  // hello_interval - computed: true, optional: false, required: false
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }

  // igmp - computed: true, optional: false, required: false
  private _igmp = new DataFortiosRouterMulticastInterfaceIgmpList(this, "igmp", false);
  public get igmp() {
    return this._igmp;
  }

  // join_group - computed: true, optional: false, required: false
  private _joinGroup = new DataFortiosRouterMulticastInterfaceJoinGroupList(this, "join_group", false);
  public get joinGroup() {
    return this._joinGroup;
  }

  // multicast_flow - computed: true, optional: false, required: false
  public get multicastFlow() {
    return this.getStringAttribute('multicast_flow');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // neighbour_filter - computed: true, optional: false, required: false
  public get neighbourFilter() {
    return this.getStringAttribute('neighbour_filter');
  }

  // passive - computed: true, optional: false, required: false
  public get passive() {
    return this.getStringAttribute('passive');
  }

  // pim_mode - computed: true, optional: false, required: false
  public get pimMode() {
    return this.getStringAttribute('pim_mode');
  }

  // propagation_delay - computed: true, optional: false, required: false
  public get propagationDelay() {
    return this.getNumberAttribute('propagation_delay');
  }

  // rp_candidate - computed: true, optional: false, required: false
  public get rpCandidate() {
    return this.getStringAttribute('rp_candidate');
  }

  // rp_candidate_group - computed: true, optional: false, required: false
  public get rpCandidateGroup() {
    return this.getStringAttribute('rp_candidate_group');
  }

  // rp_candidate_interval - computed: true, optional: false, required: false
  public get rpCandidateInterval() {
    return this.getNumberAttribute('rp_candidate_interval');
  }

  // rp_candidate_priority - computed: true, optional: false, required: false
  public get rpCandidatePriority() {
    return this.getNumberAttribute('rp_candidate_priority');
  }

  // rpf_nbr_fail_back - computed: true, optional: false, required: false
  public get rpfNbrFailBack() {
    return this.getStringAttribute('rpf_nbr_fail_back');
  }

  // rpf_nbr_fail_back_filter - computed: true, optional: false, required: false
  public get rpfNbrFailBackFilter() {
    return this.getStringAttribute('rpf_nbr_fail_back_filter');
  }

  // state_refresh_interval - computed: true, optional: false, required: false
  public get stateRefreshInterval() {
    return this.getNumberAttribute('state_refresh_interval');
  }

  // static_group - computed: true, optional: false, required: false
  public get staticGroup() {
    return this.getStringAttribute('static_group');
  }

  // ttl_threshold - computed: true, optional: false, required: false
  public get ttlThreshold() {
    return this.getNumberAttribute('ttl_threshold');
  }
}

export class DataFortiosRouterMulticastInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterMulticastInterfaceOutputReference {
    return new DataFortiosRouterMulticastInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterMulticastPimSmGlobalRpAddress {
}

export function dataFortiosRouterMulticastPimSmGlobalRpAddressToTerraform(struct?: DataFortiosRouterMulticastPimSmGlobalRpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterMulticastPimSmGlobalRpAddressToHclTerraform(struct?: DataFortiosRouterMulticastPimSmGlobalRpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterMulticastPimSmGlobalRpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterMulticastPimSmGlobalRpAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterMulticastPimSmGlobalRpAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
}

export class DataFortiosRouterMulticastPimSmGlobalRpAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterMulticastPimSmGlobalRpAddressOutputReference {
    return new DataFortiosRouterMulticastPimSmGlobalRpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterMulticastPimSmGlobal {
}

export function dataFortiosRouterMulticastPimSmGlobalToTerraform(struct?: DataFortiosRouterMulticastPimSmGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterMulticastPimSmGlobalToHclTerraform(struct?: DataFortiosRouterMulticastPimSmGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterMulticastPimSmGlobalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterMulticastPimSmGlobal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterMulticastPimSmGlobal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accept_register_list - computed: true, optional: false, required: false
  public get acceptRegisterList() {
    return this.getStringAttribute('accept_register_list');
  }

  // accept_source_list - computed: true, optional: false, required: false
  public get acceptSourceList() {
    return this.getStringAttribute('accept_source_list');
  }

  // bsr_allow_quick_refresh - computed: true, optional: false, required: false
  public get bsrAllowQuickRefresh() {
    return this.getStringAttribute('bsr_allow_quick_refresh');
  }

  // bsr_candidate - computed: true, optional: false, required: false
  public get bsrCandidate() {
    return this.getStringAttribute('bsr_candidate');
  }

  // bsr_hash - computed: true, optional: false, required: false
  public get bsrHash() {
    return this.getNumberAttribute('bsr_hash');
  }

  // bsr_interface - computed: true, optional: false, required: false
  public get bsrInterface() {
    return this.getStringAttribute('bsr_interface');
  }

  // bsr_priority - computed: true, optional: false, required: false
  public get bsrPriority() {
    return this.getNumberAttribute('bsr_priority');
  }

  // cisco_crp_prefix - computed: true, optional: false, required: false
  public get ciscoCrpPrefix() {
    return this.getStringAttribute('cisco_crp_prefix');
  }

  // cisco_ignore_rp_set_priority - computed: true, optional: false, required: false
  public get ciscoIgnoreRpSetPriority() {
    return this.getStringAttribute('cisco_ignore_rp_set_priority');
  }

  // cisco_register_checksum - computed: true, optional: false, required: false
  public get ciscoRegisterChecksum() {
    return this.getStringAttribute('cisco_register_checksum');
  }

  // cisco_register_checksum_group - computed: true, optional: false, required: false
  public get ciscoRegisterChecksumGroup() {
    return this.getStringAttribute('cisco_register_checksum_group');
  }

  // join_prune_holdtime - computed: true, optional: false, required: false
  public get joinPruneHoldtime() {
    return this.getNumberAttribute('join_prune_holdtime');
  }

  // message_interval - computed: true, optional: false, required: false
  public get messageInterval() {
    return this.getNumberAttribute('message_interval');
  }

  // null_register_retries - computed: true, optional: false, required: false
  public get nullRegisterRetries() {
    return this.getNumberAttribute('null_register_retries');
  }

  // pim_use_sdwan - computed: true, optional: false, required: false
  public get pimUseSdwan() {
    return this.getStringAttribute('pim_use_sdwan');
  }

  // register_rate_limit - computed: true, optional: false, required: false
  public get registerRateLimit() {
    return this.getNumberAttribute('register_rate_limit');
  }

  // register_rp_reachability - computed: true, optional: false, required: false
  public get registerRpReachability() {
    return this.getStringAttribute('register_rp_reachability');
  }

  // register_source - computed: true, optional: false, required: false
  public get registerSource() {
    return this.getStringAttribute('register_source');
  }

  // register_source_interface - computed: true, optional: false, required: false
  public get registerSourceInterface() {
    return this.getStringAttribute('register_source_interface');
  }

  // register_source_ip - computed: true, optional: false, required: false
  public get registerSourceIp() {
    return this.getStringAttribute('register_source_ip');
  }

  // register_supression - computed: true, optional: false, required: false
  public get registerSupression() {
    return this.getNumberAttribute('register_supression');
  }

  // rp_address - computed: true, optional: false, required: false
  private _rpAddress = new DataFortiosRouterMulticastPimSmGlobalRpAddressList(this, "rp_address", false);
  public get rpAddress() {
    return this._rpAddress;
  }

  // rp_register_keepalive - computed: true, optional: false, required: false
  public get rpRegisterKeepalive() {
    return this.getNumberAttribute('rp_register_keepalive');
  }

  // spt_threshold - computed: true, optional: false, required: false
  public get sptThreshold() {
    return this.getStringAttribute('spt_threshold');
  }

  // spt_threshold_group - computed: true, optional: false, required: false
  public get sptThresholdGroup() {
    return this.getStringAttribute('spt_threshold_group');
  }

  // ssm - computed: true, optional: false, required: false
  public get ssm() {
    return this.getStringAttribute('ssm');
  }

  // ssm_range - computed: true, optional: false, required: false
  public get ssmRange() {
    return this.getStringAttribute('ssm_range');
  }
}

export class DataFortiosRouterMulticastPimSmGlobalList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterMulticastPimSmGlobalOutputReference {
    return new DataFortiosRouterMulticastPimSmGlobalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterMulticastPimSmGlobalVrfRpAddress {
}

export function dataFortiosRouterMulticastPimSmGlobalVrfRpAddressToTerraform(struct?: DataFortiosRouterMulticastPimSmGlobalVrfRpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterMulticastPimSmGlobalVrfRpAddressToHclTerraform(struct?: DataFortiosRouterMulticastPimSmGlobalVrfRpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterMulticastPimSmGlobalVrfRpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterMulticastPimSmGlobalVrfRpAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterMulticastPimSmGlobalVrfRpAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
}

export class DataFortiosRouterMulticastPimSmGlobalVrfRpAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterMulticastPimSmGlobalVrfRpAddressOutputReference {
    return new DataFortiosRouterMulticastPimSmGlobalVrfRpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterMulticastPimSmGlobalVrf {
}

export function dataFortiosRouterMulticastPimSmGlobalVrfToTerraform(struct?: DataFortiosRouterMulticastPimSmGlobalVrf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterMulticastPimSmGlobalVrfToHclTerraform(struct?: DataFortiosRouterMulticastPimSmGlobalVrf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterMulticastPimSmGlobalVrfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterMulticastPimSmGlobalVrf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterMulticastPimSmGlobalVrf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bsr_allow_quick_refresh - computed: true, optional: false, required: false
  public get bsrAllowQuickRefresh() {
    return this.getStringAttribute('bsr_allow_quick_refresh');
  }

  // bsr_candidate - computed: true, optional: false, required: false
  public get bsrCandidate() {
    return this.getStringAttribute('bsr_candidate');
  }

  // bsr_hash - computed: true, optional: false, required: false
  public get bsrHash() {
    return this.getNumberAttribute('bsr_hash');
  }

  // bsr_interface - computed: true, optional: false, required: false
  public get bsrInterface() {
    return this.getStringAttribute('bsr_interface');
  }

  // bsr_priority - computed: true, optional: false, required: false
  public get bsrPriority() {
    return this.getNumberAttribute('bsr_priority');
  }

  // cisco_crp_prefix - computed: true, optional: false, required: false
  public get ciscoCrpPrefix() {
    return this.getStringAttribute('cisco_crp_prefix');
  }

  // rp_address - computed: true, optional: false, required: false
  private _rpAddress = new DataFortiosRouterMulticastPimSmGlobalVrfRpAddressList(this, "rp_address", false);
  public get rpAddress() {
    return this._rpAddress;
  }

  // vrf - computed: true, optional: false, required: false
  public get vrf() {
    return this.getNumberAttribute('vrf');
  }
}

export class DataFortiosRouterMulticastPimSmGlobalVrfList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterMulticastPimSmGlobalVrfOutputReference {
    return new DataFortiosRouterMulticastPimSmGlobalVrfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/router_multicast fortios_router_multicast}
*/
export class DataFortiosRouterMulticast extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_router_multicast";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiosRouterMulticast resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiosRouterMulticast to import
  * @param importFromId The id of the existing DataFortiosRouterMulticast that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/router_multicast#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiosRouterMulticast to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_router_multicast", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/router_multicast fortios_router_multicast} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiosRouterMulticastConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataFortiosRouterMulticastConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_router_multicast',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
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
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // interface - computed: true, optional: false, required: false
  private _interface = new DataFortiosRouterMulticastInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }

  // multicast_routing - computed: true, optional: false, required: false
  public get multicastRouting() {
    return this.getStringAttribute('multicast_routing');
  }

  // pim_sm_global - computed: true, optional: false, required: false
  private _pimSmGlobal = new DataFortiosRouterMulticastPimSmGlobalList(this, "pim_sm_global", false);
  public get pimSmGlobal() {
    return this._pimSmGlobal;
  }

  // pim_sm_global_vrf - computed: true, optional: false, required: false
  private _pimSmGlobalVrf = new DataFortiosRouterMulticastPimSmGlobalVrfList(this, "pim_sm_global_vrf", false);
  public get pimSmGlobalVrf() {
    return this._pimSmGlobalVrf;
  }

  // route_limit - computed: true, optional: false, required: false
  public get routeLimit() {
    return this.getNumberAttribute('route_limit');
  }

  // route_threshold - computed: true, optional: false, required: false
  public get routeThreshold() {
    return this.getNumberAttribute('route_threshold');
  }

  // vdomparam - computed: false, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
