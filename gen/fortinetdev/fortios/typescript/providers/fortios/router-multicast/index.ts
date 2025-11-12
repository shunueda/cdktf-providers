// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterMulticastConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#dynamic_sort_subtable RouterMulticast#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#get_all_tables RouterMulticast#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#id RouterMulticast#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#multicast_routing RouterMulticast#multicast_routing}
  */
  readonly multicastRouting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#route_limit RouterMulticast#route_limit}
  */
  readonly routeLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#route_threshold RouterMulticast#route_threshold}
  */
  readonly routeThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#vdomparam RouterMulticast#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#interface RouterMulticast#interface}
  */
  readonly interface?: RouterMulticastInterface[] | cdktf.IResolvable;
  /**
  * pim_sm_global block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#pim_sm_global RouterMulticast#pim_sm_global}
  */
  readonly pimSmGlobal?: RouterMulticastPimSmGlobal;
  /**
  * pim_sm_global_vrf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#pim_sm_global_vrf RouterMulticast#pim_sm_global_vrf}
  */
  readonly pimSmGlobalVrf?: RouterMulticastPimSmGlobalVrf[] | cdktf.IResolvable;
}
export interface RouterMulticastInterfaceIgmp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#access_group RouterMulticast#access_group}
  */
  readonly accessGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#immediate_leave_group RouterMulticast#immediate_leave_group}
  */
  readonly immediateLeaveGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#last_member_query_count RouterMulticast#last_member_query_count}
  */
  readonly lastMemberQueryCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#last_member_query_interval RouterMulticast#last_member_query_interval}
  */
  readonly lastMemberQueryInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#query_interval RouterMulticast#query_interval}
  */
  readonly queryInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#query_max_response_time RouterMulticast#query_max_response_time}
  */
  readonly queryMaxResponseTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#query_timeout RouterMulticast#query_timeout}
  */
  readonly queryTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#router_alert_check RouterMulticast#router_alert_check}
  */
  readonly routerAlertCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#version RouterMulticast#version}
  */
  readonly version?: string;
}

export function routerMulticastInterfaceIgmpToTerraform(struct?: RouterMulticastInterfaceIgmpOutputReference | RouterMulticastInterfaceIgmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_group: cdktf.stringToTerraform(struct!.accessGroup),
    immediate_leave_group: cdktf.stringToTerraform(struct!.immediateLeaveGroup),
    last_member_query_count: cdktf.numberToTerraform(struct!.lastMemberQueryCount),
    last_member_query_interval: cdktf.numberToTerraform(struct!.lastMemberQueryInterval),
    query_interval: cdktf.numberToTerraform(struct!.queryInterval),
    query_max_response_time: cdktf.numberToTerraform(struct!.queryMaxResponseTime),
    query_timeout: cdktf.numberToTerraform(struct!.queryTimeout),
    router_alert_check: cdktf.stringToTerraform(struct!.routerAlertCheck),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function routerMulticastInterfaceIgmpToHclTerraform(struct?: RouterMulticastInterfaceIgmpOutputReference | RouterMulticastInterfaceIgmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_group: {
      value: cdktf.stringToHclTerraform(struct!.accessGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    immediate_leave_group: {
      value: cdktf.stringToHclTerraform(struct!.immediateLeaveGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_member_query_count: {
      value: cdktf.numberToHclTerraform(struct!.lastMemberQueryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    last_member_query_interval: {
      value: cdktf.numberToHclTerraform(struct!.lastMemberQueryInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_interval: {
      value: cdktf.numberToHclTerraform(struct!.queryInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_max_response_time: {
      value: cdktf.numberToHclTerraform(struct!.queryMaxResponseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_timeout: {
      value: cdktf.numberToHclTerraform(struct!.queryTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    router_alert_check: {
      value: cdktf.stringToHclTerraform(struct!.routerAlertCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterMulticastInterfaceIgmpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterMulticastInterfaceIgmp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessGroup = this._accessGroup;
    }
    if (this._immediateLeaveGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.immediateLeaveGroup = this._immediateLeaveGroup;
    }
    if (this._lastMemberQueryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastMemberQueryCount = this._lastMemberQueryCount;
    }
    if (this._lastMemberQueryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastMemberQueryInterval = this._lastMemberQueryInterval;
    }
    if (this._queryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryInterval = this._queryInterval;
    }
    if (this._queryMaxResponseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryMaxResponseTime = this._queryMaxResponseTime;
    }
    if (this._queryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryTimeout = this._queryTimeout;
    }
    if (this._routerAlertCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerAlertCheck = this._routerAlertCheck;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterMulticastInterfaceIgmp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessGroup = undefined;
      this._immediateLeaveGroup = undefined;
      this._lastMemberQueryCount = undefined;
      this._lastMemberQueryInterval = undefined;
      this._queryInterval = undefined;
      this._queryMaxResponseTime = undefined;
      this._queryTimeout = undefined;
      this._routerAlertCheck = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessGroup = value.accessGroup;
      this._immediateLeaveGroup = value.immediateLeaveGroup;
      this._lastMemberQueryCount = value.lastMemberQueryCount;
      this._lastMemberQueryInterval = value.lastMemberQueryInterval;
      this._queryInterval = value.queryInterval;
      this._queryMaxResponseTime = value.queryMaxResponseTime;
      this._queryTimeout = value.queryTimeout;
      this._routerAlertCheck = value.routerAlertCheck;
      this._version = value.version;
    }
  }

  // access_group - computed: false, optional: true, required: false
  private _accessGroup?: string; 
  public get accessGroup() {
    return this.getStringAttribute('access_group');
  }
  public set accessGroup(value: string) {
    this._accessGroup = value;
  }
  public resetAccessGroup() {
    this._accessGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessGroupInput() {
    return this._accessGroup;
  }

  // immediate_leave_group - computed: false, optional: true, required: false
  private _immediateLeaveGroup?: string; 
  public get immediateLeaveGroup() {
    return this.getStringAttribute('immediate_leave_group');
  }
  public set immediateLeaveGroup(value: string) {
    this._immediateLeaveGroup = value;
  }
  public resetImmediateLeaveGroup() {
    this._immediateLeaveGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immediateLeaveGroupInput() {
    return this._immediateLeaveGroup;
  }

  // last_member_query_count - computed: true, optional: true, required: false
  private _lastMemberQueryCount?: number; 
  public get lastMemberQueryCount() {
    return this.getNumberAttribute('last_member_query_count');
  }
  public set lastMemberQueryCount(value: number) {
    this._lastMemberQueryCount = value;
  }
  public resetLastMemberQueryCount() {
    this._lastMemberQueryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastMemberQueryCountInput() {
    return this._lastMemberQueryCount;
  }

  // last_member_query_interval - computed: true, optional: true, required: false
  private _lastMemberQueryInterval?: number; 
  public get lastMemberQueryInterval() {
    return this.getNumberAttribute('last_member_query_interval');
  }
  public set lastMemberQueryInterval(value: number) {
    this._lastMemberQueryInterval = value;
  }
  public resetLastMemberQueryInterval() {
    this._lastMemberQueryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastMemberQueryIntervalInput() {
    return this._lastMemberQueryInterval;
  }

  // query_interval - computed: true, optional: true, required: false
  private _queryInterval?: number; 
  public get queryInterval() {
    return this.getNumberAttribute('query_interval');
  }
  public set queryInterval(value: number) {
    this._queryInterval = value;
  }
  public resetQueryInterval() {
    this._queryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryIntervalInput() {
    return this._queryInterval;
  }

  // query_max_response_time - computed: true, optional: true, required: false
  private _queryMaxResponseTime?: number; 
  public get queryMaxResponseTime() {
    return this.getNumberAttribute('query_max_response_time');
  }
  public set queryMaxResponseTime(value: number) {
    this._queryMaxResponseTime = value;
  }
  public resetQueryMaxResponseTime() {
    this._queryMaxResponseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryMaxResponseTimeInput() {
    return this._queryMaxResponseTime;
  }

  // query_timeout - computed: true, optional: true, required: false
  private _queryTimeout?: number; 
  public get queryTimeout() {
    return this.getNumberAttribute('query_timeout');
  }
  public set queryTimeout(value: number) {
    this._queryTimeout = value;
  }
  public resetQueryTimeout() {
    this._queryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTimeoutInput() {
    return this._queryTimeout;
  }

  // router_alert_check - computed: true, optional: true, required: false
  private _routerAlertCheck?: string; 
  public get routerAlertCheck() {
    return this.getStringAttribute('router_alert_check');
  }
  public set routerAlertCheck(value: string) {
    this._routerAlertCheck = value;
  }
  public resetRouterAlertCheck() {
    this._routerAlertCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerAlertCheckInput() {
    return this._routerAlertCheck;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface RouterMulticastInterfaceJoinGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#address RouterMulticast#address}
  */
  readonly address?: string;
}

export function routerMulticastInterfaceJoinGroupToTerraform(struct?: RouterMulticastInterfaceJoinGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
  }
}


export function routerMulticastInterfaceJoinGroupToHclTerraform(struct?: RouterMulticastInterfaceJoinGroup | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterMulticastInterfaceJoinGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterMulticastInterfaceJoinGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterMulticastInterfaceJoinGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
    }
  }

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }
}

export class RouterMulticastInterfaceJoinGroupList extends cdktf.ComplexList {
  public internalValue? : RouterMulticastInterfaceJoinGroup[] | cdktf.IResolvable

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
  public get(index: number): RouterMulticastInterfaceJoinGroupOutputReference {
    return new RouterMulticastInterfaceJoinGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterMulticastInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#bfd RouterMulticast#bfd}
  */
  readonly bfd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#cisco_exclude_genid RouterMulticast#cisco_exclude_genid}
  */
  readonly ciscoExcludeGenid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#dr_priority RouterMulticast#dr_priority}
  */
  readonly drPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#hello_holdtime RouterMulticast#hello_holdtime}
  */
  readonly helloHoldtime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#hello_interval RouterMulticast#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#multicast_flow RouterMulticast#multicast_flow}
  */
  readonly multicastFlow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#name RouterMulticast#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#neighbour_filter RouterMulticast#neighbour_filter}
  */
  readonly neighbourFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#passive RouterMulticast#passive}
  */
  readonly passive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#pim_mode RouterMulticast#pim_mode}
  */
  readonly pimMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#propagation_delay RouterMulticast#propagation_delay}
  */
  readonly propagationDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#rp_candidate RouterMulticast#rp_candidate}
  */
  readonly rpCandidate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#rp_candidate_group RouterMulticast#rp_candidate_group}
  */
  readonly rpCandidateGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#rp_candidate_interval RouterMulticast#rp_candidate_interval}
  */
  readonly rpCandidateInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#rp_candidate_priority RouterMulticast#rp_candidate_priority}
  */
  readonly rpCandidatePriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#rpf_nbr_fail_back RouterMulticast#rpf_nbr_fail_back}
  */
  readonly rpfNbrFailBack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#rpf_nbr_fail_back_filter RouterMulticast#rpf_nbr_fail_back_filter}
  */
  readonly rpfNbrFailBackFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#state_refresh_interval RouterMulticast#state_refresh_interval}
  */
  readonly stateRefreshInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#static_group RouterMulticast#static_group}
  */
  readonly staticGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#ttl_threshold RouterMulticast#ttl_threshold}
  */
  readonly ttlThreshold?: number;
  /**
  * igmp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#igmp RouterMulticast#igmp}
  */
  readonly igmp?: RouterMulticastInterfaceIgmp;
  /**
  * join_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#join_group RouterMulticast#join_group}
  */
  readonly joinGroup?: RouterMulticastInterfaceJoinGroup[] | cdktf.IResolvable;
}

export function routerMulticastInterfaceToTerraform(struct?: RouterMulticastInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bfd: cdktf.stringToTerraform(struct!.bfd),
    cisco_exclude_genid: cdktf.stringToTerraform(struct!.ciscoExcludeGenid),
    dr_priority: cdktf.numberToTerraform(struct!.drPriority),
    hello_holdtime: cdktf.numberToTerraform(struct!.helloHoldtime),
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    multicast_flow: cdktf.stringToTerraform(struct!.multicastFlow),
    name: cdktf.stringToTerraform(struct!.name),
    neighbour_filter: cdktf.stringToTerraform(struct!.neighbourFilter),
    passive: cdktf.stringToTerraform(struct!.passive),
    pim_mode: cdktf.stringToTerraform(struct!.pimMode),
    propagation_delay: cdktf.numberToTerraform(struct!.propagationDelay),
    rp_candidate: cdktf.stringToTerraform(struct!.rpCandidate),
    rp_candidate_group: cdktf.stringToTerraform(struct!.rpCandidateGroup),
    rp_candidate_interval: cdktf.numberToTerraform(struct!.rpCandidateInterval),
    rp_candidate_priority: cdktf.numberToTerraform(struct!.rpCandidatePriority),
    rpf_nbr_fail_back: cdktf.stringToTerraform(struct!.rpfNbrFailBack),
    rpf_nbr_fail_back_filter: cdktf.stringToTerraform(struct!.rpfNbrFailBackFilter),
    state_refresh_interval: cdktf.numberToTerraform(struct!.stateRefreshInterval),
    static_group: cdktf.stringToTerraform(struct!.staticGroup),
    ttl_threshold: cdktf.numberToTerraform(struct!.ttlThreshold),
    igmp: routerMulticastInterfaceIgmpToTerraform(struct!.igmp),
    join_group: cdktf.listMapper(routerMulticastInterfaceJoinGroupToTerraform, true)(struct!.joinGroup),
  }
}


export function routerMulticastInterfaceToHclTerraform(struct?: RouterMulticastInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bfd: {
      value: cdktf.stringToHclTerraform(struct!.bfd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cisco_exclude_genid: {
      value: cdktf.stringToHclTerraform(struct!.ciscoExcludeGenid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dr_priority: {
      value: cdktf.numberToHclTerraform(struct!.drPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hello_holdtime: {
      value: cdktf.numberToHclTerraform(struct!.helloHoldtime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hello_interval: {
      value: cdktf.numberToHclTerraform(struct!.helloInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multicast_flow: {
      value: cdktf.stringToHclTerraform(struct!.multicastFlow),
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
    neighbour_filter: {
      value: cdktf.stringToHclTerraform(struct!.neighbourFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passive: {
      value: cdktf.stringToHclTerraform(struct!.passive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pim_mode: {
      value: cdktf.stringToHclTerraform(struct!.pimMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    propagation_delay: {
      value: cdktf.numberToHclTerraform(struct!.propagationDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rp_candidate: {
      value: cdktf.stringToHclTerraform(struct!.rpCandidate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rp_candidate_group: {
      value: cdktf.stringToHclTerraform(struct!.rpCandidateGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rp_candidate_interval: {
      value: cdktf.numberToHclTerraform(struct!.rpCandidateInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rp_candidate_priority: {
      value: cdktf.numberToHclTerraform(struct!.rpCandidatePriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rpf_nbr_fail_back: {
      value: cdktf.stringToHclTerraform(struct!.rpfNbrFailBack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rpf_nbr_fail_back_filter: {
      value: cdktf.stringToHclTerraform(struct!.rpfNbrFailBackFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state_refresh_interval: {
      value: cdktf.numberToHclTerraform(struct!.stateRefreshInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_group: {
      value: cdktf.stringToHclTerraform(struct!.staticGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl_threshold: {
      value: cdktf.numberToHclTerraform(struct!.ttlThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    igmp: {
      value: routerMulticastInterfaceIgmpToHclTerraform(struct!.igmp),
      isBlock: true,
      type: "list",
      storageClassType: "RouterMulticastInterfaceIgmpList",
    },
    join_group: {
      value: cdktf.listMapperHcl(routerMulticastInterfaceJoinGroupToHclTerraform, true)(struct!.joinGroup),
      isBlock: true,
      type: "list",
      storageClassType: "RouterMulticastInterfaceJoinGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterMulticastInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterMulticastInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bfd !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfd = this._bfd;
    }
    if (this._ciscoExcludeGenid !== undefined) {
      hasAnyValues = true;
      internalValueResult.ciscoExcludeGenid = this._ciscoExcludeGenid;
    }
    if (this._drPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.drPriority = this._drPriority;
    }
    if (this._helloHoldtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloHoldtime = this._helloHoldtime;
    }
    if (this._helloInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloInterval = this._helloInterval;
    }
    if (this._multicastFlow !== undefined) {
      hasAnyValues = true;
      internalValueResult.multicastFlow = this._multicastFlow;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._neighbourFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighbourFilter = this._neighbourFilter;
    }
    if (this._passive !== undefined) {
      hasAnyValues = true;
      internalValueResult.passive = this._passive;
    }
    if (this._pimMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.pimMode = this._pimMode;
    }
    if (this._propagationDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagationDelay = this._propagationDelay;
    }
    if (this._rpCandidate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpCandidate = this._rpCandidate;
    }
    if (this._rpCandidateGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpCandidateGroup = this._rpCandidateGroup;
    }
    if (this._rpCandidateInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpCandidateInterval = this._rpCandidateInterval;
    }
    if (this._rpCandidatePriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpCandidatePriority = this._rpCandidatePriority;
    }
    if (this._rpfNbrFailBack !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpfNbrFailBack = this._rpfNbrFailBack;
    }
    if (this._rpfNbrFailBackFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpfNbrFailBackFilter = this._rpfNbrFailBackFilter;
    }
    if (this._stateRefreshInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateRefreshInterval = this._stateRefreshInterval;
    }
    if (this._staticGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticGroup = this._staticGroup;
    }
    if (this._ttlThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttlThreshold = this._ttlThreshold;
    }
    if (this._igmp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.igmp = this._igmp?.internalValue;
    }
    if (this._joinGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.joinGroup = this._joinGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterMulticastInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bfd = undefined;
      this._ciscoExcludeGenid = undefined;
      this._drPriority = undefined;
      this._helloHoldtime = undefined;
      this._helloInterval = undefined;
      this._multicastFlow = undefined;
      this._name = undefined;
      this._neighbourFilter = undefined;
      this._passive = undefined;
      this._pimMode = undefined;
      this._propagationDelay = undefined;
      this._rpCandidate = undefined;
      this._rpCandidateGroup = undefined;
      this._rpCandidateInterval = undefined;
      this._rpCandidatePriority = undefined;
      this._rpfNbrFailBack = undefined;
      this._rpfNbrFailBackFilter = undefined;
      this._stateRefreshInterval = undefined;
      this._staticGroup = undefined;
      this._ttlThreshold = undefined;
      this._igmp.internalValue = undefined;
      this._joinGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bfd = value.bfd;
      this._ciscoExcludeGenid = value.ciscoExcludeGenid;
      this._drPriority = value.drPriority;
      this._helloHoldtime = value.helloHoldtime;
      this._helloInterval = value.helloInterval;
      this._multicastFlow = value.multicastFlow;
      this._name = value.name;
      this._neighbourFilter = value.neighbourFilter;
      this._passive = value.passive;
      this._pimMode = value.pimMode;
      this._propagationDelay = value.propagationDelay;
      this._rpCandidate = value.rpCandidate;
      this._rpCandidateGroup = value.rpCandidateGroup;
      this._rpCandidateInterval = value.rpCandidateInterval;
      this._rpCandidatePriority = value.rpCandidatePriority;
      this._rpfNbrFailBack = value.rpfNbrFailBack;
      this._rpfNbrFailBackFilter = value.rpfNbrFailBackFilter;
      this._stateRefreshInterval = value.stateRefreshInterval;
      this._staticGroup = value.staticGroup;
      this._ttlThreshold = value.ttlThreshold;
      this._igmp.internalValue = value.igmp;
      this._joinGroup.internalValue = value.joinGroup;
    }
  }

  // bfd - computed: true, optional: true, required: false
  private _bfd?: string; 
  public get bfd() {
    return this.getStringAttribute('bfd');
  }
  public set bfd(value: string) {
    this._bfd = value;
  }
  public resetBfd() {
    this._bfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd;
  }

  // cisco_exclude_genid - computed: true, optional: true, required: false
  private _ciscoExcludeGenid?: string; 
  public get ciscoExcludeGenid() {
    return this.getStringAttribute('cisco_exclude_genid');
  }
  public set ciscoExcludeGenid(value: string) {
    this._ciscoExcludeGenid = value;
  }
  public resetCiscoExcludeGenid() {
    this._ciscoExcludeGenid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciscoExcludeGenidInput() {
    return this._ciscoExcludeGenid;
  }

  // dr_priority - computed: true, optional: true, required: false
  private _drPriority?: number; 
  public get drPriority() {
    return this.getNumberAttribute('dr_priority');
  }
  public set drPriority(value: number) {
    this._drPriority = value;
  }
  public resetDrPriority() {
    this._drPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drPriorityInput() {
    return this._drPriority;
  }

  // hello_holdtime - computed: true, optional: true, required: false
  private _helloHoldtime?: number; 
  public get helloHoldtime() {
    return this.getNumberAttribute('hello_holdtime');
  }
  public set helloHoldtime(value: number) {
    this._helloHoldtime = value;
  }
  public resetHelloHoldtime() {
    this._helloHoldtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloHoldtimeInput() {
    return this._helloHoldtime;
  }

  // hello_interval - computed: true, optional: true, required: false
  private _helloInterval?: number; 
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }
  public set helloInterval(value: number) {
    this._helloInterval = value;
  }
  public resetHelloInterval() {
    this._helloInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalInput() {
    return this._helloInterval;
  }

  // multicast_flow - computed: false, optional: true, required: false
  private _multicastFlow?: string; 
  public get multicastFlow() {
    return this.getStringAttribute('multicast_flow');
  }
  public set multicastFlow(value: string) {
    this._multicastFlow = value;
  }
  public resetMulticastFlow() {
    this._multicastFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastFlowInput() {
    return this._multicastFlow;
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

  // neighbour_filter - computed: false, optional: true, required: false
  private _neighbourFilter?: string; 
  public get neighbourFilter() {
    return this.getStringAttribute('neighbour_filter');
  }
  public set neighbourFilter(value: string) {
    this._neighbourFilter = value;
  }
  public resetNeighbourFilter() {
    this._neighbourFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighbourFilterInput() {
    return this._neighbourFilter;
  }

  // passive - computed: true, optional: true, required: false
  private _passive?: string; 
  public get passive() {
    return this.getStringAttribute('passive');
  }
  public set passive(value: string) {
    this._passive = value;
  }
  public resetPassive() {
    this._passive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInput() {
    return this._passive;
  }

  // pim_mode - computed: true, optional: true, required: false
  private _pimMode?: string; 
  public get pimMode() {
    return this.getStringAttribute('pim_mode');
  }
  public set pimMode(value: string) {
    this._pimMode = value;
  }
  public resetPimMode() {
    this._pimMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pimModeInput() {
    return this._pimMode;
  }

  // propagation_delay - computed: true, optional: true, required: false
  private _propagationDelay?: number; 
  public get propagationDelay() {
    return this.getNumberAttribute('propagation_delay');
  }
  public set propagationDelay(value: number) {
    this._propagationDelay = value;
  }
  public resetPropagationDelay() {
    this._propagationDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagationDelayInput() {
    return this._propagationDelay;
  }

  // rp_candidate - computed: true, optional: true, required: false
  private _rpCandidate?: string; 
  public get rpCandidate() {
    return this.getStringAttribute('rp_candidate');
  }
  public set rpCandidate(value: string) {
    this._rpCandidate = value;
  }
  public resetRpCandidate() {
    this._rpCandidate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpCandidateInput() {
    return this._rpCandidate;
  }

  // rp_candidate_group - computed: false, optional: true, required: false
  private _rpCandidateGroup?: string; 
  public get rpCandidateGroup() {
    return this.getStringAttribute('rp_candidate_group');
  }
  public set rpCandidateGroup(value: string) {
    this._rpCandidateGroup = value;
  }
  public resetRpCandidateGroup() {
    this._rpCandidateGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpCandidateGroupInput() {
    return this._rpCandidateGroup;
  }

  // rp_candidate_interval - computed: true, optional: true, required: false
  private _rpCandidateInterval?: number; 
  public get rpCandidateInterval() {
    return this.getNumberAttribute('rp_candidate_interval');
  }
  public set rpCandidateInterval(value: number) {
    this._rpCandidateInterval = value;
  }
  public resetRpCandidateInterval() {
    this._rpCandidateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpCandidateIntervalInput() {
    return this._rpCandidateInterval;
  }

  // rp_candidate_priority - computed: true, optional: true, required: false
  private _rpCandidatePriority?: number; 
  public get rpCandidatePriority() {
    return this.getNumberAttribute('rp_candidate_priority');
  }
  public set rpCandidatePriority(value: number) {
    this._rpCandidatePriority = value;
  }
  public resetRpCandidatePriority() {
    this._rpCandidatePriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpCandidatePriorityInput() {
    return this._rpCandidatePriority;
  }

  // rpf_nbr_fail_back - computed: true, optional: true, required: false
  private _rpfNbrFailBack?: string; 
  public get rpfNbrFailBack() {
    return this.getStringAttribute('rpf_nbr_fail_back');
  }
  public set rpfNbrFailBack(value: string) {
    this._rpfNbrFailBack = value;
  }
  public resetRpfNbrFailBack() {
    this._rpfNbrFailBack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpfNbrFailBackInput() {
    return this._rpfNbrFailBack;
  }

  // rpf_nbr_fail_back_filter - computed: false, optional: true, required: false
  private _rpfNbrFailBackFilter?: string; 
  public get rpfNbrFailBackFilter() {
    return this.getStringAttribute('rpf_nbr_fail_back_filter');
  }
  public set rpfNbrFailBackFilter(value: string) {
    this._rpfNbrFailBackFilter = value;
  }
  public resetRpfNbrFailBackFilter() {
    this._rpfNbrFailBackFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpfNbrFailBackFilterInput() {
    return this._rpfNbrFailBackFilter;
  }

  // state_refresh_interval - computed: true, optional: true, required: false
  private _stateRefreshInterval?: number; 
  public get stateRefreshInterval() {
    return this.getNumberAttribute('state_refresh_interval');
  }
  public set stateRefreshInterval(value: number) {
    this._stateRefreshInterval = value;
  }
  public resetStateRefreshInterval() {
    this._stateRefreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateRefreshIntervalInput() {
    return this._stateRefreshInterval;
  }

  // static_group - computed: false, optional: true, required: false
  private _staticGroup?: string; 
  public get staticGroup() {
    return this.getStringAttribute('static_group');
  }
  public set staticGroup(value: string) {
    this._staticGroup = value;
  }
  public resetStaticGroup() {
    this._staticGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticGroupInput() {
    return this._staticGroup;
  }

  // ttl_threshold - computed: true, optional: true, required: false
  private _ttlThreshold?: number; 
  public get ttlThreshold() {
    return this.getNumberAttribute('ttl_threshold');
  }
  public set ttlThreshold(value: number) {
    this._ttlThreshold = value;
  }
  public resetTtlThreshold() {
    this._ttlThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlThresholdInput() {
    return this._ttlThreshold;
  }

  // igmp - computed: false, optional: true, required: false
  private _igmp = new RouterMulticastInterfaceIgmpOutputReference(this, "igmp");
  public get igmp() {
    return this._igmp;
  }
  public putIgmp(value: RouterMulticastInterfaceIgmp) {
    this._igmp.internalValue = value;
  }
  public resetIgmp() {
    this._igmp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpInput() {
    return this._igmp.internalValue;
  }

  // join_group - computed: false, optional: true, required: false
  private _joinGroup = new RouterMulticastInterfaceJoinGroupList(this, "join_group", false);
  public get joinGroup() {
    return this._joinGroup;
  }
  public putJoinGroup(value: RouterMulticastInterfaceJoinGroup[] | cdktf.IResolvable) {
    this._joinGroup.internalValue = value;
  }
  public resetJoinGroup() {
    this._joinGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinGroupInput() {
    return this._joinGroup.internalValue;
  }
}

export class RouterMulticastInterfaceList extends cdktf.ComplexList {
  public internalValue? : RouterMulticastInterface[] | cdktf.IResolvable

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
  public get(index: number): RouterMulticastInterfaceOutputReference {
    return new RouterMulticastInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterMulticastPimSmGlobalRpAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#group RouterMulticast#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#id RouterMulticast#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#ip_address RouterMulticast#ip_address}
  */
  readonly ipAddress?: string;
}

export function routerMulticastPimSmGlobalRpAddressToTerraform(struct?: RouterMulticastPimSmGlobalRpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    id: cdktf.numberToTerraform(struct!.id),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function routerMulticastPimSmGlobalRpAddressToHclTerraform(struct?: RouterMulticastPimSmGlobalRpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterMulticastPimSmGlobalRpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterMulticastPimSmGlobalRpAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterMulticastPimSmGlobalRpAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._id = undefined;
      this._ipAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._id = value.id;
      this._ipAddress = value.ipAddress;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}

export class RouterMulticastPimSmGlobalRpAddressList extends cdktf.ComplexList {
  public internalValue? : RouterMulticastPimSmGlobalRpAddress[] | cdktf.IResolvable

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
  public get(index: number): RouterMulticastPimSmGlobalRpAddressOutputReference {
    return new RouterMulticastPimSmGlobalRpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterMulticastPimSmGlobal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#accept_register_list RouterMulticast#accept_register_list}
  */
  readonly acceptRegisterList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#accept_source_list RouterMulticast#accept_source_list}
  */
  readonly acceptSourceList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#bsr_allow_quick_refresh RouterMulticast#bsr_allow_quick_refresh}
  */
  readonly bsrAllowQuickRefresh?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#bsr_candidate RouterMulticast#bsr_candidate}
  */
  readonly bsrCandidate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#bsr_hash RouterMulticast#bsr_hash}
  */
  readonly bsrHash?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#bsr_interface RouterMulticast#bsr_interface}
  */
  readonly bsrInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#bsr_priority RouterMulticast#bsr_priority}
  */
  readonly bsrPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#cisco_crp_prefix RouterMulticast#cisco_crp_prefix}
  */
  readonly ciscoCrpPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#cisco_ignore_rp_set_priority RouterMulticast#cisco_ignore_rp_set_priority}
  */
  readonly ciscoIgnoreRpSetPriority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#cisco_register_checksum RouterMulticast#cisco_register_checksum}
  */
  readonly ciscoRegisterChecksum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#cisco_register_checksum_group RouterMulticast#cisco_register_checksum_group}
  */
  readonly ciscoRegisterChecksumGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#join_prune_holdtime RouterMulticast#join_prune_holdtime}
  */
  readonly joinPruneHoldtime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#message_interval RouterMulticast#message_interval}
  */
  readonly messageInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#null_register_retries RouterMulticast#null_register_retries}
  */
  readonly nullRegisterRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#pim_use_sdwan RouterMulticast#pim_use_sdwan}
  */
  readonly pimUseSdwan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#register_rate_limit RouterMulticast#register_rate_limit}
  */
  readonly registerRateLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#register_rp_reachability RouterMulticast#register_rp_reachability}
  */
  readonly registerRpReachability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#register_source RouterMulticast#register_source}
  */
  readonly registerSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#register_source_interface RouterMulticast#register_source_interface}
  */
  readonly registerSourceInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#register_source_ip RouterMulticast#register_source_ip}
  */
  readonly registerSourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#register_supression RouterMulticast#register_supression}
  */
  readonly registerSupression?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#rp_register_keepalive RouterMulticast#rp_register_keepalive}
  */
  readonly rpRegisterKeepalive?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#spt_threshold RouterMulticast#spt_threshold}
  */
  readonly sptThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#spt_threshold_group RouterMulticast#spt_threshold_group}
  */
  readonly sptThresholdGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#ssm RouterMulticast#ssm}
  */
  readonly ssm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#ssm_range RouterMulticast#ssm_range}
  */
  readonly ssmRange?: string;
  /**
  * rp_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#rp_address RouterMulticast#rp_address}
  */
  readonly rpAddress?: RouterMulticastPimSmGlobalRpAddress[] | cdktf.IResolvable;
}

export function routerMulticastPimSmGlobalToTerraform(struct?: RouterMulticastPimSmGlobalOutputReference | RouterMulticastPimSmGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_register_list: cdktf.stringToTerraform(struct!.acceptRegisterList),
    accept_source_list: cdktf.stringToTerraform(struct!.acceptSourceList),
    bsr_allow_quick_refresh: cdktf.stringToTerraform(struct!.bsrAllowQuickRefresh),
    bsr_candidate: cdktf.stringToTerraform(struct!.bsrCandidate),
    bsr_hash: cdktf.numberToTerraform(struct!.bsrHash),
    bsr_interface: cdktf.stringToTerraform(struct!.bsrInterface),
    bsr_priority: cdktf.numberToTerraform(struct!.bsrPriority),
    cisco_crp_prefix: cdktf.stringToTerraform(struct!.ciscoCrpPrefix),
    cisco_ignore_rp_set_priority: cdktf.stringToTerraform(struct!.ciscoIgnoreRpSetPriority),
    cisco_register_checksum: cdktf.stringToTerraform(struct!.ciscoRegisterChecksum),
    cisco_register_checksum_group: cdktf.stringToTerraform(struct!.ciscoRegisterChecksumGroup),
    join_prune_holdtime: cdktf.numberToTerraform(struct!.joinPruneHoldtime),
    message_interval: cdktf.numberToTerraform(struct!.messageInterval),
    null_register_retries: cdktf.numberToTerraform(struct!.nullRegisterRetries),
    pim_use_sdwan: cdktf.stringToTerraform(struct!.pimUseSdwan),
    register_rate_limit: cdktf.numberToTerraform(struct!.registerRateLimit),
    register_rp_reachability: cdktf.stringToTerraform(struct!.registerRpReachability),
    register_source: cdktf.stringToTerraform(struct!.registerSource),
    register_source_interface: cdktf.stringToTerraform(struct!.registerSourceInterface),
    register_source_ip: cdktf.stringToTerraform(struct!.registerSourceIp),
    register_supression: cdktf.numberToTerraform(struct!.registerSupression),
    rp_register_keepalive: cdktf.numberToTerraform(struct!.rpRegisterKeepalive),
    spt_threshold: cdktf.stringToTerraform(struct!.sptThreshold),
    spt_threshold_group: cdktf.stringToTerraform(struct!.sptThresholdGroup),
    ssm: cdktf.stringToTerraform(struct!.ssm),
    ssm_range: cdktf.stringToTerraform(struct!.ssmRange),
    rp_address: cdktf.listMapper(routerMulticastPimSmGlobalRpAddressToTerraform, true)(struct!.rpAddress),
  }
}


export function routerMulticastPimSmGlobalToHclTerraform(struct?: RouterMulticastPimSmGlobalOutputReference | RouterMulticastPimSmGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_register_list: {
      value: cdktf.stringToHclTerraform(struct!.acceptRegisterList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    accept_source_list: {
      value: cdktf.stringToHclTerraform(struct!.acceptSourceList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bsr_allow_quick_refresh: {
      value: cdktf.stringToHclTerraform(struct!.bsrAllowQuickRefresh),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bsr_candidate: {
      value: cdktf.stringToHclTerraform(struct!.bsrCandidate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bsr_hash: {
      value: cdktf.numberToHclTerraform(struct!.bsrHash),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bsr_interface: {
      value: cdktf.stringToHclTerraform(struct!.bsrInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bsr_priority: {
      value: cdktf.numberToHclTerraform(struct!.bsrPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cisco_crp_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ciscoCrpPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cisco_ignore_rp_set_priority: {
      value: cdktf.stringToHclTerraform(struct!.ciscoIgnoreRpSetPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cisco_register_checksum: {
      value: cdktf.stringToHclTerraform(struct!.ciscoRegisterChecksum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cisco_register_checksum_group: {
      value: cdktf.stringToHclTerraform(struct!.ciscoRegisterChecksumGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    join_prune_holdtime: {
      value: cdktf.numberToHclTerraform(struct!.joinPruneHoldtime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message_interval: {
      value: cdktf.numberToHclTerraform(struct!.messageInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    null_register_retries: {
      value: cdktf.numberToHclTerraform(struct!.nullRegisterRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pim_use_sdwan: {
      value: cdktf.stringToHclTerraform(struct!.pimUseSdwan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    register_rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.registerRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    register_rp_reachability: {
      value: cdktf.stringToHclTerraform(struct!.registerRpReachability),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    register_source: {
      value: cdktf.stringToHclTerraform(struct!.registerSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    register_source_interface: {
      value: cdktf.stringToHclTerraform(struct!.registerSourceInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    register_source_ip: {
      value: cdktf.stringToHclTerraform(struct!.registerSourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    register_supression: {
      value: cdktf.numberToHclTerraform(struct!.registerSupression),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rp_register_keepalive: {
      value: cdktf.numberToHclTerraform(struct!.rpRegisterKeepalive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spt_threshold: {
      value: cdktf.stringToHclTerraform(struct!.sptThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spt_threshold_group: {
      value: cdktf.stringToHclTerraform(struct!.sptThresholdGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssm: {
      value: cdktf.stringToHclTerraform(struct!.ssm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssm_range: {
      value: cdktf.stringToHclTerraform(struct!.ssmRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rp_address: {
      value: cdktf.listMapperHcl(routerMulticastPimSmGlobalRpAddressToHclTerraform, true)(struct!.rpAddress),
      isBlock: true,
      type: "list",
      storageClassType: "RouterMulticastPimSmGlobalRpAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterMulticastPimSmGlobalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterMulticastPimSmGlobal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptRegisterList !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptRegisterList = this._acceptRegisterList;
    }
    if (this._acceptSourceList !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptSourceList = this._acceptSourceList;
    }
    if (this._bsrAllowQuickRefresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.bsrAllowQuickRefresh = this._bsrAllowQuickRefresh;
    }
    if (this._bsrCandidate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bsrCandidate = this._bsrCandidate;
    }
    if (this._bsrHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.bsrHash = this._bsrHash;
    }
    if (this._bsrInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.bsrInterface = this._bsrInterface;
    }
    if (this._bsrPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.bsrPriority = this._bsrPriority;
    }
    if (this._ciscoCrpPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ciscoCrpPrefix = this._ciscoCrpPrefix;
    }
    if (this._ciscoIgnoreRpSetPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.ciscoIgnoreRpSetPriority = this._ciscoIgnoreRpSetPriority;
    }
    if (this._ciscoRegisterChecksum !== undefined) {
      hasAnyValues = true;
      internalValueResult.ciscoRegisterChecksum = this._ciscoRegisterChecksum;
    }
    if (this._ciscoRegisterChecksumGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.ciscoRegisterChecksumGroup = this._ciscoRegisterChecksumGroup;
    }
    if (this._joinPruneHoldtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.joinPruneHoldtime = this._joinPruneHoldtime;
    }
    if (this._messageInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageInterval = this._messageInterval;
    }
    if (this._nullRegisterRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullRegisterRetries = this._nullRegisterRetries;
    }
    if (this._pimUseSdwan !== undefined) {
      hasAnyValues = true;
      internalValueResult.pimUseSdwan = this._pimUseSdwan;
    }
    if (this._registerRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.registerRateLimit = this._registerRateLimit;
    }
    if (this._registerRpReachability !== undefined) {
      hasAnyValues = true;
      internalValueResult.registerRpReachability = this._registerRpReachability;
    }
    if (this._registerSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.registerSource = this._registerSource;
    }
    if (this._registerSourceInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.registerSourceInterface = this._registerSourceInterface;
    }
    if (this._registerSourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.registerSourceIp = this._registerSourceIp;
    }
    if (this._registerSupression !== undefined) {
      hasAnyValues = true;
      internalValueResult.registerSupression = this._registerSupression;
    }
    if (this._rpRegisterKeepalive !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpRegisterKeepalive = this._rpRegisterKeepalive;
    }
    if (this._sptThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.sptThreshold = this._sptThreshold;
    }
    if (this._sptThresholdGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.sptThresholdGroup = this._sptThresholdGroup;
    }
    if (this._ssm !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssm = this._ssm;
    }
    if (this._ssmRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmRange = this._ssmRange;
    }
    if (this._rpAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpAddress = this._rpAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterMulticastPimSmGlobal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceptRegisterList = undefined;
      this._acceptSourceList = undefined;
      this._bsrAllowQuickRefresh = undefined;
      this._bsrCandidate = undefined;
      this._bsrHash = undefined;
      this._bsrInterface = undefined;
      this._bsrPriority = undefined;
      this._ciscoCrpPrefix = undefined;
      this._ciscoIgnoreRpSetPriority = undefined;
      this._ciscoRegisterChecksum = undefined;
      this._ciscoRegisterChecksumGroup = undefined;
      this._joinPruneHoldtime = undefined;
      this._messageInterval = undefined;
      this._nullRegisterRetries = undefined;
      this._pimUseSdwan = undefined;
      this._registerRateLimit = undefined;
      this._registerRpReachability = undefined;
      this._registerSource = undefined;
      this._registerSourceInterface = undefined;
      this._registerSourceIp = undefined;
      this._registerSupression = undefined;
      this._rpRegisterKeepalive = undefined;
      this._sptThreshold = undefined;
      this._sptThresholdGroup = undefined;
      this._ssm = undefined;
      this._ssmRange = undefined;
      this._rpAddress.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceptRegisterList = value.acceptRegisterList;
      this._acceptSourceList = value.acceptSourceList;
      this._bsrAllowQuickRefresh = value.bsrAllowQuickRefresh;
      this._bsrCandidate = value.bsrCandidate;
      this._bsrHash = value.bsrHash;
      this._bsrInterface = value.bsrInterface;
      this._bsrPriority = value.bsrPriority;
      this._ciscoCrpPrefix = value.ciscoCrpPrefix;
      this._ciscoIgnoreRpSetPriority = value.ciscoIgnoreRpSetPriority;
      this._ciscoRegisterChecksum = value.ciscoRegisterChecksum;
      this._ciscoRegisterChecksumGroup = value.ciscoRegisterChecksumGroup;
      this._joinPruneHoldtime = value.joinPruneHoldtime;
      this._messageInterval = value.messageInterval;
      this._nullRegisterRetries = value.nullRegisterRetries;
      this._pimUseSdwan = value.pimUseSdwan;
      this._registerRateLimit = value.registerRateLimit;
      this._registerRpReachability = value.registerRpReachability;
      this._registerSource = value.registerSource;
      this._registerSourceInterface = value.registerSourceInterface;
      this._registerSourceIp = value.registerSourceIp;
      this._registerSupression = value.registerSupression;
      this._rpRegisterKeepalive = value.rpRegisterKeepalive;
      this._sptThreshold = value.sptThreshold;
      this._sptThresholdGroup = value.sptThresholdGroup;
      this._ssm = value.ssm;
      this._ssmRange = value.ssmRange;
      this._rpAddress.internalValue = value.rpAddress;
    }
  }

  // accept_register_list - computed: false, optional: true, required: false
  private _acceptRegisterList?: string; 
  public get acceptRegisterList() {
    return this.getStringAttribute('accept_register_list');
  }
  public set acceptRegisterList(value: string) {
    this._acceptRegisterList = value;
  }
  public resetAcceptRegisterList() {
    this._acceptRegisterList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptRegisterListInput() {
    return this._acceptRegisterList;
  }

  // accept_source_list - computed: false, optional: true, required: false
  private _acceptSourceList?: string; 
  public get acceptSourceList() {
    return this.getStringAttribute('accept_source_list');
  }
  public set acceptSourceList(value: string) {
    this._acceptSourceList = value;
  }
  public resetAcceptSourceList() {
    this._acceptSourceList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptSourceListInput() {
    return this._acceptSourceList;
  }

  // bsr_allow_quick_refresh - computed: true, optional: true, required: false
  private _bsrAllowQuickRefresh?: string; 
  public get bsrAllowQuickRefresh() {
    return this.getStringAttribute('bsr_allow_quick_refresh');
  }
  public set bsrAllowQuickRefresh(value: string) {
    this._bsrAllowQuickRefresh = value;
  }
  public resetBsrAllowQuickRefresh() {
    this._bsrAllowQuickRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bsrAllowQuickRefreshInput() {
    return this._bsrAllowQuickRefresh;
  }

  // bsr_candidate - computed: true, optional: true, required: false
  private _bsrCandidate?: string; 
  public get bsrCandidate() {
    return this.getStringAttribute('bsr_candidate');
  }
  public set bsrCandidate(value: string) {
    this._bsrCandidate = value;
  }
  public resetBsrCandidate() {
    this._bsrCandidate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bsrCandidateInput() {
    return this._bsrCandidate;
  }

  // bsr_hash - computed: true, optional: true, required: false
  private _bsrHash?: number; 
  public get bsrHash() {
    return this.getNumberAttribute('bsr_hash');
  }
  public set bsrHash(value: number) {
    this._bsrHash = value;
  }
  public resetBsrHash() {
    this._bsrHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bsrHashInput() {
    return this._bsrHash;
  }

  // bsr_interface - computed: false, optional: true, required: false
  private _bsrInterface?: string; 
  public get bsrInterface() {
    return this.getStringAttribute('bsr_interface');
  }
  public set bsrInterface(value: string) {
    this._bsrInterface = value;
  }
  public resetBsrInterface() {
    this._bsrInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bsrInterfaceInput() {
    return this._bsrInterface;
  }

  // bsr_priority - computed: false, optional: true, required: false
  private _bsrPriority?: number; 
  public get bsrPriority() {
    return this.getNumberAttribute('bsr_priority');
  }
  public set bsrPriority(value: number) {
    this._bsrPriority = value;
  }
  public resetBsrPriority() {
    this._bsrPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bsrPriorityInput() {
    return this._bsrPriority;
  }

  // cisco_crp_prefix - computed: true, optional: true, required: false
  private _ciscoCrpPrefix?: string; 
  public get ciscoCrpPrefix() {
    return this.getStringAttribute('cisco_crp_prefix');
  }
  public set ciscoCrpPrefix(value: string) {
    this._ciscoCrpPrefix = value;
  }
  public resetCiscoCrpPrefix() {
    this._ciscoCrpPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciscoCrpPrefixInput() {
    return this._ciscoCrpPrefix;
  }

  // cisco_ignore_rp_set_priority - computed: true, optional: true, required: false
  private _ciscoIgnoreRpSetPriority?: string; 
  public get ciscoIgnoreRpSetPriority() {
    return this.getStringAttribute('cisco_ignore_rp_set_priority');
  }
  public set ciscoIgnoreRpSetPriority(value: string) {
    this._ciscoIgnoreRpSetPriority = value;
  }
  public resetCiscoIgnoreRpSetPriority() {
    this._ciscoIgnoreRpSetPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciscoIgnoreRpSetPriorityInput() {
    return this._ciscoIgnoreRpSetPriority;
  }

  // cisco_register_checksum - computed: true, optional: true, required: false
  private _ciscoRegisterChecksum?: string; 
  public get ciscoRegisterChecksum() {
    return this.getStringAttribute('cisco_register_checksum');
  }
  public set ciscoRegisterChecksum(value: string) {
    this._ciscoRegisterChecksum = value;
  }
  public resetCiscoRegisterChecksum() {
    this._ciscoRegisterChecksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciscoRegisterChecksumInput() {
    return this._ciscoRegisterChecksum;
  }

  // cisco_register_checksum_group - computed: false, optional: true, required: false
  private _ciscoRegisterChecksumGroup?: string; 
  public get ciscoRegisterChecksumGroup() {
    return this.getStringAttribute('cisco_register_checksum_group');
  }
  public set ciscoRegisterChecksumGroup(value: string) {
    this._ciscoRegisterChecksumGroup = value;
  }
  public resetCiscoRegisterChecksumGroup() {
    this._ciscoRegisterChecksumGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciscoRegisterChecksumGroupInput() {
    return this._ciscoRegisterChecksumGroup;
  }

  // join_prune_holdtime - computed: true, optional: true, required: false
  private _joinPruneHoldtime?: number; 
  public get joinPruneHoldtime() {
    return this.getNumberAttribute('join_prune_holdtime');
  }
  public set joinPruneHoldtime(value: number) {
    this._joinPruneHoldtime = value;
  }
  public resetJoinPruneHoldtime() {
    this._joinPruneHoldtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinPruneHoldtimeInput() {
    return this._joinPruneHoldtime;
  }

  // message_interval - computed: true, optional: true, required: false
  private _messageInterval?: number; 
  public get messageInterval() {
    return this.getNumberAttribute('message_interval');
  }
  public set messageInterval(value: number) {
    this._messageInterval = value;
  }
  public resetMessageInterval() {
    this._messageInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageIntervalInput() {
    return this._messageInterval;
  }

  // null_register_retries - computed: true, optional: true, required: false
  private _nullRegisterRetries?: number; 
  public get nullRegisterRetries() {
    return this.getNumberAttribute('null_register_retries');
  }
  public set nullRegisterRetries(value: number) {
    this._nullRegisterRetries = value;
  }
  public resetNullRegisterRetries() {
    this._nullRegisterRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullRegisterRetriesInput() {
    return this._nullRegisterRetries;
  }

  // pim_use_sdwan - computed: true, optional: true, required: false
  private _pimUseSdwan?: string; 
  public get pimUseSdwan() {
    return this.getStringAttribute('pim_use_sdwan');
  }
  public set pimUseSdwan(value: string) {
    this._pimUseSdwan = value;
  }
  public resetPimUseSdwan() {
    this._pimUseSdwan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pimUseSdwanInput() {
    return this._pimUseSdwan;
  }

  // register_rate_limit - computed: false, optional: true, required: false
  private _registerRateLimit?: number; 
  public get registerRateLimit() {
    return this.getNumberAttribute('register_rate_limit');
  }
  public set registerRateLimit(value: number) {
    this._registerRateLimit = value;
  }
  public resetRegisterRateLimit() {
    this._registerRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registerRateLimitInput() {
    return this._registerRateLimit;
  }

  // register_rp_reachability - computed: true, optional: true, required: false
  private _registerRpReachability?: string; 
  public get registerRpReachability() {
    return this.getStringAttribute('register_rp_reachability');
  }
  public set registerRpReachability(value: string) {
    this._registerRpReachability = value;
  }
  public resetRegisterRpReachability() {
    this._registerRpReachability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registerRpReachabilityInput() {
    return this._registerRpReachability;
  }

  // register_source - computed: true, optional: true, required: false
  private _registerSource?: string; 
  public get registerSource() {
    return this.getStringAttribute('register_source');
  }
  public set registerSource(value: string) {
    this._registerSource = value;
  }
  public resetRegisterSource() {
    this._registerSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registerSourceInput() {
    return this._registerSource;
  }

  // register_source_interface - computed: false, optional: true, required: false
  private _registerSourceInterface?: string; 
  public get registerSourceInterface() {
    return this.getStringAttribute('register_source_interface');
  }
  public set registerSourceInterface(value: string) {
    this._registerSourceInterface = value;
  }
  public resetRegisterSourceInterface() {
    this._registerSourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registerSourceInterfaceInput() {
    return this._registerSourceInterface;
  }

  // register_source_ip - computed: true, optional: true, required: false
  private _registerSourceIp?: string; 
  public get registerSourceIp() {
    return this.getStringAttribute('register_source_ip');
  }
  public set registerSourceIp(value: string) {
    this._registerSourceIp = value;
  }
  public resetRegisterSourceIp() {
    this._registerSourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registerSourceIpInput() {
    return this._registerSourceIp;
  }

  // register_supression - computed: true, optional: true, required: false
  private _registerSupression?: number; 
  public get registerSupression() {
    return this.getNumberAttribute('register_supression');
  }
  public set registerSupression(value: number) {
    this._registerSupression = value;
  }
  public resetRegisterSupression() {
    this._registerSupression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registerSupressionInput() {
    return this._registerSupression;
  }

  // rp_register_keepalive - computed: true, optional: true, required: false
  private _rpRegisterKeepalive?: number; 
  public get rpRegisterKeepalive() {
    return this.getNumberAttribute('rp_register_keepalive');
  }
  public set rpRegisterKeepalive(value: number) {
    this._rpRegisterKeepalive = value;
  }
  public resetRpRegisterKeepalive() {
    this._rpRegisterKeepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpRegisterKeepaliveInput() {
    return this._rpRegisterKeepalive;
  }

  // spt_threshold - computed: true, optional: true, required: false
  private _sptThreshold?: string; 
  public get sptThreshold() {
    return this.getStringAttribute('spt_threshold');
  }
  public set sptThreshold(value: string) {
    this._sptThreshold = value;
  }
  public resetSptThreshold() {
    this._sptThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sptThresholdInput() {
    return this._sptThreshold;
  }

  // spt_threshold_group - computed: false, optional: true, required: false
  private _sptThresholdGroup?: string; 
  public get sptThresholdGroup() {
    return this.getStringAttribute('spt_threshold_group');
  }
  public set sptThresholdGroup(value: string) {
    this._sptThresholdGroup = value;
  }
  public resetSptThresholdGroup() {
    this._sptThresholdGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sptThresholdGroupInput() {
    return this._sptThresholdGroup;
  }

  // ssm - computed: true, optional: true, required: false
  private _ssm?: string; 
  public get ssm() {
    return this.getStringAttribute('ssm');
  }
  public set ssm(value: string) {
    this._ssm = value;
  }
  public resetSsm() {
    this._ssm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmInput() {
    return this._ssm;
  }

  // ssm_range - computed: false, optional: true, required: false
  private _ssmRange?: string; 
  public get ssmRange() {
    return this.getStringAttribute('ssm_range');
  }
  public set ssmRange(value: string) {
    this._ssmRange = value;
  }
  public resetSsmRange() {
    this._ssmRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmRangeInput() {
    return this._ssmRange;
  }

  // rp_address - computed: false, optional: true, required: false
  private _rpAddress = new RouterMulticastPimSmGlobalRpAddressList(this, "rp_address", false);
  public get rpAddress() {
    return this._rpAddress;
  }
  public putRpAddress(value: RouterMulticastPimSmGlobalRpAddress[] | cdktf.IResolvable) {
    this._rpAddress.internalValue = value;
  }
  public resetRpAddress() {
    this._rpAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpAddressInput() {
    return this._rpAddress.internalValue;
  }
}
export interface RouterMulticastPimSmGlobalVrfRpAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#group RouterMulticast#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#id RouterMulticast#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#ip_address RouterMulticast#ip_address}
  */
  readonly ipAddress?: string;
}

export function routerMulticastPimSmGlobalVrfRpAddressToTerraform(struct?: RouterMulticastPimSmGlobalVrfRpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    id: cdktf.numberToTerraform(struct!.id),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function routerMulticastPimSmGlobalVrfRpAddressToHclTerraform(struct?: RouterMulticastPimSmGlobalVrfRpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterMulticastPimSmGlobalVrfRpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterMulticastPimSmGlobalVrfRpAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterMulticastPimSmGlobalVrfRpAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._id = undefined;
      this._ipAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._id = value.id;
      this._ipAddress = value.ipAddress;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}

export class RouterMulticastPimSmGlobalVrfRpAddressList extends cdktf.ComplexList {
  public internalValue? : RouterMulticastPimSmGlobalVrfRpAddress[] | cdktf.IResolvable

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
  public get(index: number): RouterMulticastPimSmGlobalVrfRpAddressOutputReference {
    return new RouterMulticastPimSmGlobalVrfRpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterMulticastPimSmGlobalVrf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#bsr_allow_quick_refresh RouterMulticast#bsr_allow_quick_refresh}
  */
  readonly bsrAllowQuickRefresh?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#bsr_candidate RouterMulticast#bsr_candidate}
  */
  readonly bsrCandidate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#bsr_hash RouterMulticast#bsr_hash}
  */
  readonly bsrHash?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#bsr_interface RouterMulticast#bsr_interface}
  */
  readonly bsrInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#bsr_priority RouterMulticast#bsr_priority}
  */
  readonly bsrPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#cisco_crp_prefix RouterMulticast#cisco_crp_prefix}
  */
  readonly ciscoCrpPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#vrf RouterMulticast#vrf}
  */
  readonly vrf?: number;
  /**
  * rp_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#rp_address RouterMulticast#rp_address}
  */
  readonly rpAddress?: RouterMulticastPimSmGlobalVrfRpAddress[] | cdktf.IResolvable;
}

export function routerMulticastPimSmGlobalVrfToTerraform(struct?: RouterMulticastPimSmGlobalVrf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bsr_allow_quick_refresh: cdktf.stringToTerraform(struct!.bsrAllowQuickRefresh),
    bsr_candidate: cdktf.stringToTerraform(struct!.bsrCandidate),
    bsr_hash: cdktf.numberToTerraform(struct!.bsrHash),
    bsr_interface: cdktf.stringToTerraform(struct!.bsrInterface),
    bsr_priority: cdktf.numberToTerraform(struct!.bsrPriority),
    cisco_crp_prefix: cdktf.stringToTerraform(struct!.ciscoCrpPrefix),
    vrf: cdktf.numberToTerraform(struct!.vrf),
    rp_address: cdktf.listMapper(routerMulticastPimSmGlobalVrfRpAddressToTerraform, true)(struct!.rpAddress),
  }
}


export function routerMulticastPimSmGlobalVrfToHclTerraform(struct?: RouterMulticastPimSmGlobalVrf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bsr_allow_quick_refresh: {
      value: cdktf.stringToHclTerraform(struct!.bsrAllowQuickRefresh),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bsr_candidate: {
      value: cdktf.stringToHclTerraform(struct!.bsrCandidate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bsr_hash: {
      value: cdktf.numberToHclTerraform(struct!.bsrHash),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bsr_interface: {
      value: cdktf.stringToHclTerraform(struct!.bsrInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bsr_priority: {
      value: cdktf.numberToHclTerraform(struct!.bsrPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cisco_crp_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ciscoCrpPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf: {
      value: cdktf.numberToHclTerraform(struct!.vrf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rp_address: {
      value: cdktf.listMapperHcl(routerMulticastPimSmGlobalVrfRpAddressToHclTerraform, true)(struct!.rpAddress),
      isBlock: true,
      type: "list",
      storageClassType: "RouterMulticastPimSmGlobalVrfRpAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterMulticastPimSmGlobalVrfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterMulticastPimSmGlobalVrf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bsrAllowQuickRefresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.bsrAllowQuickRefresh = this._bsrAllowQuickRefresh;
    }
    if (this._bsrCandidate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bsrCandidate = this._bsrCandidate;
    }
    if (this._bsrHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.bsrHash = this._bsrHash;
    }
    if (this._bsrInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.bsrInterface = this._bsrInterface;
    }
    if (this._bsrPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.bsrPriority = this._bsrPriority;
    }
    if (this._ciscoCrpPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ciscoCrpPrefix = this._ciscoCrpPrefix;
    }
    if (this._vrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrf = this._vrf;
    }
    if (this._rpAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpAddress = this._rpAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterMulticastPimSmGlobalVrf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bsrAllowQuickRefresh = undefined;
      this._bsrCandidate = undefined;
      this._bsrHash = undefined;
      this._bsrInterface = undefined;
      this._bsrPriority = undefined;
      this._ciscoCrpPrefix = undefined;
      this._vrf = undefined;
      this._rpAddress.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bsrAllowQuickRefresh = value.bsrAllowQuickRefresh;
      this._bsrCandidate = value.bsrCandidate;
      this._bsrHash = value.bsrHash;
      this._bsrInterface = value.bsrInterface;
      this._bsrPriority = value.bsrPriority;
      this._ciscoCrpPrefix = value.ciscoCrpPrefix;
      this._vrf = value.vrf;
      this._rpAddress.internalValue = value.rpAddress;
    }
  }

  // bsr_allow_quick_refresh - computed: true, optional: true, required: false
  private _bsrAllowQuickRefresh?: string; 
  public get bsrAllowQuickRefresh() {
    return this.getStringAttribute('bsr_allow_quick_refresh');
  }
  public set bsrAllowQuickRefresh(value: string) {
    this._bsrAllowQuickRefresh = value;
  }
  public resetBsrAllowQuickRefresh() {
    this._bsrAllowQuickRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bsrAllowQuickRefreshInput() {
    return this._bsrAllowQuickRefresh;
  }

  // bsr_candidate - computed: true, optional: true, required: false
  private _bsrCandidate?: string; 
  public get bsrCandidate() {
    return this.getStringAttribute('bsr_candidate');
  }
  public set bsrCandidate(value: string) {
    this._bsrCandidate = value;
  }
  public resetBsrCandidate() {
    this._bsrCandidate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bsrCandidateInput() {
    return this._bsrCandidate;
  }

  // bsr_hash - computed: true, optional: true, required: false
  private _bsrHash?: number; 
  public get bsrHash() {
    return this.getNumberAttribute('bsr_hash');
  }
  public set bsrHash(value: number) {
    this._bsrHash = value;
  }
  public resetBsrHash() {
    this._bsrHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bsrHashInput() {
    return this._bsrHash;
  }

  // bsr_interface - computed: false, optional: true, required: false
  private _bsrInterface?: string; 
  public get bsrInterface() {
    return this.getStringAttribute('bsr_interface');
  }
  public set bsrInterface(value: string) {
    this._bsrInterface = value;
  }
  public resetBsrInterface() {
    this._bsrInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bsrInterfaceInput() {
    return this._bsrInterface;
  }

  // bsr_priority - computed: false, optional: true, required: false
  private _bsrPriority?: number; 
  public get bsrPriority() {
    return this.getNumberAttribute('bsr_priority');
  }
  public set bsrPriority(value: number) {
    this._bsrPriority = value;
  }
  public resetBsrPriority() {
    this._bsrPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bsrPriorityInput() {
    return this._bsrPriority;
  }

  // cisco_crp_prefix - computed: true, optional: true, required: false
  private _ciscoCrpPrefix?: string; 
  public get ciscoCrpPrefix() {
    return this.getStringAttribute('cisco_crp_prefix');
  }
  public set ciscoCrpPrefix(value: string) {
    this._ciscoCrpPrefix = value;
  }
  public resetCiscoCrpPrefix() {
    this._ciscoCrpPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciscoCrpPrefixInput() {
    return this._ciscoCrpPrefix;
  }

  // vrf - computed: true, optional: true, required: false
  private _vrf?: number; 
  public get vrf() {
    return this.getNumberAttribute('vrf');
  }
  public set vrf(value: number) {
    this._vrf = value;
  }
  public resetVrf() {
    this._vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }

  // rp_address - computed: false, optional: true, required: false
  private _rpAddress = new RouterMulticastPimSmGlobalVrfRpAddressList(this, "rp_address", false);
  public get rpAddress() {
    return this._rpAddress;
  }
  public putRpAddress(value: RouterMulticastPimSmGlobalVrfRpAddress[] | cdktf.IResolvable) {
    this._rpAddress.internalValue = value;
  }
  public resetRpAddress() {
    this._rpAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpAddressInput() {
    return this._rpAddress.internalValue;
  }
}

export class RouterMulticastPimSmGlobalVrfList extends cdktf.ComplexList {
  public internalValue? : RouterMulticastPimSmGlobalVrf[] | cdktf.IResolvable

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
  public get(index: number): RouterMulticastPimSmGlobalVrfOutputReference {
    return new RouterMulticastPimSmGlobalVrfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast fortios_router_multicast}
*/
export class RouterMulticast extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_router_multicast";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterMulticast resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterMulticast to import
  * @param importFromId The id of the existing RouterMulticast that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterMulticast to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_router_multicast", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast fortios_router_multicast} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterMulticastConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RouterMulticastConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_router_multicast',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._multicastRouting = config.multicastRouting;
    this._routeLimit = config.routeLimit;
    this._routeThreshold = config.routeThreshold;
    this._vdomparam = config.vdomparam;
    this._interface.internalValue = config.interface;
    this._pimSmGlobal.internalValue = config.pimSmGlobal;
    this._pimSmGlobalVrf.internalValue = config.pimSmGlobalVrf;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
  }

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

  // multicast_routing - computed: true, optional: true, required: false
  private _multicastRouting?: string; 
  public get multicastRouting() {
    return this.getStringAttribute('multicast_routing');
  }
  public set multicastRouting(value: string) {
    this._multicastRouting = value;
  }
  public resetMulticastRouting() {
    this._multicastRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastRoutingInput() {
    return this._multicastRouting;
  }

  // route_limit - computed: true, optional: true, required: false
  private _routeLimit?: number; 
  public get routeLimit() {
    return this.getNumberAttribute('route_limit');
  }
  public set routeLimit(value: number) {
    this._routeLimit = value;
  }
  public resetRouteLimit() {
    this._routeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeLimitInput() {
    return this._routeLimit;
  }

  // route_threshold - computed: false, optional: true, required: false
  private _routeThreshold?: number; 
  public get routeThreshold() {
    return this.getNumberAttribute('route_threshold');
  }
  public set routeThreshold(value: number) {
    this._routeThreshold = value;
  }
  public resetRouteThreshold() {
    this._routeThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeThresholdInput() {
    return this._routeThreshold;
  }

  // vdomparam - computed: true, optional: true, required: false
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

  // interface - computed: false, optional: true, required: false
  private _interface = new RouterMulticastInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: RouterMulticastInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // pim_sm_global - computed: false, optional: true, required: false
  private _pimSmGlobal = new RouterMulticastPimSmGlobalOutputReference(this, "pim_sm_global");
  public get pimSmGlobal() {
    return this._pimSmGlobal;
  }
  public putPimSmGlobal(value: RouterMulticastPimSmGlobal) {
    this._pimSmGlobal.internalValue = value;
  }
  public resetPimSmGlobal() {
    this._pimSmGlobal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pimSmGlobalInput() {
    return this._pimSmGlobal.internalValue;
  }

  // pim_sm_global_vrf - computed: false, optional: true, required: false
  private _pimSmGlobalVrf = new RouterMulticastPimSmGlobalVrfList(this, "pim_sm_global_vrf", false);
  public get pimSmGlobalVrf() {
    return this._pimSmGlobalVrf;
  }
  public putPimSmGlobalVrf(value: RouterMulticastPimSmGlobalVrf[] | cdktf.IResolvable) {
    this._pimSmGlobalVrf.internalValue = value;
  }
  public resetPimSmGlobalVrf() {
    this._pimSmGlobalVrf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pimSmGlobalVrfInput() {
    return this._pimSmGlobalVrf.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      multicast_routing: cdktf.stringToTerraform(this._multicastRouting),
      route_limit: cdktf.numberToTerraform(this._routeLimit),
      route_threshold: cdktf.numberToTerraform(this._routeThreshold),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      interface: cdktf.listMapper(routerMulticastInterfaceToTerraform, true)(this._interface.internalValue),
      pim_sm_global: routerMulticastPimSmGlobalToTerraform(this._pimSmGlobal.internalValue),
      pim_sm_global_vrf: cdktf.listMapper(routerMulticastPimSmGlobalVrfToTerraform, true)(this._pimSmGlobalVrf.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      multicast_routing: {
        value: cdktf.stringToHclTerraform(this._multicastRouting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_limit: {
        value: cdktf.numberToHclTerraform(this._routeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      route_threshold: {
        value: cdktf.numberToHclTerraform(this._routeThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface: {
        value: cdktf.listMapperHcl(routerMulticastInterfaceToHclTerraform, true)(this._interface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterMulticastInterfaceList",
      },
      pim_sm_global: {
        value: routerMulticastPimSmGlobalToHclTerraform(this._pimSmGlobal.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterMulticastPimSmGlobalList",
      },
      pim_sm_global_vrf: {
        value: cdktf.listMapperHcl(routerMulticastPimSmGlobalVrfToHclTerraform, true)(this._pimSmGlobalVrf.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterMulticastPimSmGlobalVrfList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
