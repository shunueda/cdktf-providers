// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterMulticastInterfaceAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface#bfd RouterMulticastInterfaceA#bfd}
  */
  readonly bfd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface#cisco_exclude_genid RouterMulticastInterfaceA#cisco_exclude_genid}
  */
  readonly ciscoExcludeGenid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface#device_name RouterMulticastInterfaceA#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface#device_vdom RouterMulticastInterfaceA#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface#dr_priority RouterMulticastInterfaceA#dr_priority}
  */
  readonly drPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface#dynamic_sort_subtable RouterMulticastInterfaceA#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface#hello_holdtime RouterMulticastInterfaceA#hello_holdtime}
  */
  readonly helloHoldtime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface#hello_interval RouterMulticastInterfaceA#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface#id RouterMulticastInterfaceA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface#multicast_flow RouterMulticastInterfaceA#multicast_flow}
  */
  readonly multicastFlow?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface#name RouterMulticastInterfaceA#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface#neighbour_filter RouterMulticastInterfaceA#neighbour_filter}
  */
  readonly neighbourFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface#passive RouterMulticastInterfaceA#passive}
  */
  readonly passive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface#pim_mode RouterMulticastInterfaceA#pim_mode}
  */
  readonly pimMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface#propagation_delay RouterMulticastInterfaceA#propagation_delay}
  */
  readonly propagationDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface#rp_candidate RouterMulticastInterfaceA#rp_candidate}
  */
  readonly rpCandidate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface#rp_candidate_group RouterMulticastInterfaceA#rp_candidate_group}
  */
  readonly rpCandidateGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface#rp_candidate_interval RouterMulticastInterfaceA#rp_candidate_interval}
  */
  readonly rpCandidateInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface#rp_candidate_priority RouterMulticastInterfaceA#rp_candidate_priority}
  */
  readonly rpCandidatePriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface#rpf_nbr_fail_back RouterMulticastInterfaceA#rpf_nbr_fail_back}
  */
  readonly rpfNbrFailBack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface#rpf_nbr_fail_back_filter RouterMulticastInterfaceA#rpf_nbr_fail_back_filter}
  */
  readonly rpfNbrFailBackFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface#state_refresh_interval RouterMulticastInterfaceA#state_refresh_interval}
  */
  readonly stateRefreshInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface#static_group RouterMulticastInterfaceA#static_group}
  */
  readonly staticGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface#ttl_threshold RouterMulticastInterfaceA#ttl_threshold}
  */
  readonly ttlThreshold?: number;
  /**
  * igmp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface#igmp RouterMulticastInterfaceA#igmp}
  */
  readonly igmp?: RouterMulticastInterfaceIgmpA;
  /**
  * join_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface#join_group RouterMulticastInterfaceA#join_group}
  */
  readonly joinGroup?: RouterMulticastInterfaceJoinGroupA[] | cdktf.IResolvable;
}
export interface RouterMulticastInterfaceIgmpA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface#access_group RouterMulticastInterfaceA#access_group}
  */
  readonly accessGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface#immediate_leave_group RouterMulticastInterfaceA#immediate_leave_group}
  */
  readonly immediateLeaveGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface#last_member_query_count RouterMulticastInterfaceA#last_member_query_count}
  */
  readonly lastMemberQueryCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface#last_member_query_interval RouterMulticastInterfaceA#last_member_query_interval}
  */
  readonly lastMemberQueryInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface#query_interval RouterMulticastInterfaceA#query_interval}
  */
  readonly queryInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface#query_max_response_time RouterMulticastInterfaceA#query_max_response_time}
  */
  readonly queryMaxResponseTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface#query_timeout RouterMulticastInterfaceA#query_timeout}
  */
  readonly queryTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface#router_alert_check RouterMulticastInterfaceA#router_alert_check}
  */
  readonly routerAlertCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface#version RouterMulticastInterfaceA#version}
  */
  readonly version?: string;
}

export function routerMulticastInterfaceIgmpAToTerraform(struct?: RouterMulticastInterfaceIgmpAOutputReference | RouterMulticastInterfaceIgmpA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessGroup),
    immediate_leave_group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.immediateLeaveGroup),
    last_member_query_count: cdktf.numberToTerraform(struct!.lastMemberQueryCount),
    last_member_query_interval: cdktf.numberToTerraform(struct!.lastMemberQueryInterval),
    query_interval: cdktf.numberToTerraform(struct!.queryInterval),
    query_max_response_time: cdktf.numberToTerraform(struct!.queryMaxResponseTime),
    query_timeout: cdktf.numberToTerraform(struct!.queryTimeout),
    router_alert_check: cdktf.stringToTerraform(struct!.routerAlertCheck),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function routerMulticastInterfaceIgmpAToHclTerraform(struct?: RouterMulticastInterfaceIgmpAOutputReference | RouterMulticastInterfaceIgmpA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessGroup),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    immediate_leave_group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.immediateLeaveGroup),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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

export class RouterMulticastInterfaceIgmpAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterMulticastInterfaceIgmpA | undefined {
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

  public set internalValue(value: RouterMulticastInterfaceIgmpA | undefined) {
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

  // access_group - computed: true, optional: true, required: false
  private _accessGroup?: string[]; 
  public get accessGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('access_group'));
  }
  public set accessGroup(value: string[]) {
    this._accessGroup = value;
  }
  public resetAccessGroup() {
    this._accessGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessGroupInput() {
    return this._accessGroup;
  }

  // immediate_leave_group - computed: true, optional: true, required: false
  private _immediateLeaveGroup?: string[]; 
  public get immediateLeaveGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('immediate_leave_group'));
  }
  public set immediateLeaveGroup(value: string[]) {
    this._immediateLeaveGroup = value;
  }
  public resetImmediateLeaveGroup() {
    this._immediateLeaveGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immediateLeaveGroupInput() {
    return this._immediateLeaveGroup;
  }

  // last_member_query_count - computed: false, optional: true, required: false
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

  // last_member_query_interval - computed: false, optional: true, required: false
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
export interface RouterMulticastInterfaceJoinGroupA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface#address RouterMulticastInterfaceA#address}
  */
  readonly address?: string;
}

export function routerMulticastInterfaceJoinGroupAToTerraform(struct?: RouterMulticastInterfaceJoinGroupA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
  }
}


export function routerMulticastInterfaceJoinGroupAToHclTerraform(struct?: RouterMulticastInterfaceJoinGroupA | cdktf.IResolvable): any {
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

export class RouterMulticastInterfaceJoinGroupAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterMulticastInterfaceJoinGroupA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterMulticastInterfaceJoinGroupA | cdktf.IResolvable | undefined) {
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

  // address - computed: false, optional: true, required: false
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

export class RouterMulticastInterfaceJoinGroupAList extends cdktf.ComplexList {
  public internalValue? : RouterMulticastInterfaceJoinGroupA[] | cdktf.IResolvable

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
  public get(index: number): RouterMulticastInterfaceJoinGroupAOutputReference {
    return new RouterMulticastInterfaceJoinGroupAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface fmgdevice_router_multicast_interface}
*/
export class RouterMulticastInterfaceA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_router_multicast_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterMulticastInterfaceA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterMulticastInterfaceA to import
  * @param importFromId The id of the existing RouterMulticastInterfaceA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterMulticastInterfaceA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_router_multicast_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface fmgdevice_router_multicast_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterMulticastInterfaceAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RouterMulticastInterfaceAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_router_multicast_interface',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bfd = config.bfd;
    this._ciscoExcludeGenid = config.ciscoExcludeGenid;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._drPriority = config.drPriority;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._helloHoldtime = config.helloHoldtime;
    this._helloInterval = config.helloInterval;
    this._id = config.id;
    this._multicastFlow = config.multicastFlow;
    this._name = config.name;
    this._neighbourFilter = config.neighbourFilter;
    this._passive = config.passive;
    this._pimMode = config.pimMode;
    this._propagationDelay = config.propagationDelay;
    this._rpCandidate = config.rpCandidate;
    this._rpCandidateGroup = config.rpCandidateGroup;
    this._rpCandidateInterval = config.rpCandidateInterval;
    this._rpCandidatePriority = config.rpCandidatePriority;
    this._rpfNbrFailBack = config.rpfNbrFailBack;
    this._rpfNbrFailBackFilter = config.rpfNbrFailBackFilter;
    this._stateRefreshInterval = config.stateRefreshInterval;
    this._staticGroup = config.staticGroup;
    this._ttlThreshold = config.ttlThreshold;
    this._igmp.internalValue = config.igmp;
    this._joinGroup.internalValue = config.joinGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
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

  // multicast_flow - computed: true, optional: true, required: false
  private _multicastFlow?: string[]; 
  public get multicastFlow() {
    return cdktf.Fn.tolist(this.getListAttribute('multicast_flow'));
  }
  public set multicastFlow(value: string[]) {
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

  // neighbour_filter - computed: true, optional: true, required: false
  private _neighbourFilter?: string[]; 
  public get neighbourFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('neighbour_filter'));
  }
  public set neighbourFilter(value: string[]) {
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

  // propagation_delay - computed: false, optional: true, required: false
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

  // rp_candidate_group - computed: true, optional: true, required: false
  private _rpCandidateGroup?: string[]; 
  public get rpCandidateGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('rp_candidate_group'));
  }
  public set rpCandidateGroup(value: string[]) {
    this._rpCandidateGroup = value;
  }
  public resetRpCandidateGroup() {
    this._rpCandidateGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpCandidateGroupInput() {
    return this._rpCandidateGroup;
  }

  // rp_candidate_interval - computed: false, optional: true, required: false
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

  // rp_candidate_priority - computed: false, optional: true, required: false
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

  // rpf_nbr_fail_back_filter - computed: true, optional: true, required: false
  private _rpfNbrFailBackFilter?: string[]; 
  public get rpfNbrFailBackFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('rpf_nbr_fail_back_filter'));
  }
  public set rpfNbrFailBackFilter(value: string[]) {
    this._rpfNbrFailBackFilter = value;
  }
  public resetRpfNbrFailBackFilter() {
    this._rpfNbrFailBackFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpfNbrFailBackFilterInput() {
    return this._rpfNbrFailBackFilter;
  }

  // state_refresh_interval - computed: false, optional: true, required: false
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

  // static_group - computed: true, optional: true, required: false
  private _staticGroup?: string[]; 
  public get staticGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('static_group'));
  }
  public set staticGroup(value: string[]) {
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
  private _igmp = new RouterMulticastInterfaceIgmpAOutputReference(this, "igmp");
  public get igmp() {
    return this._igmp;
  }
  public putIgmp(value: RouterMulticastInterfaceIgmpA) {
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
  private _joinGroup = new RouterMulticastInterfaceJoinGroupAList(this, "join_group", false);
  public get joinGroup() {
    return this._joinGroup;
  }
  public putJoinGroup(value: RouterMulticastInterfaceJoinGroupA[] | cdktf.IResolvable) {
    this._joinGroup.internalValue = value;
  }
  public resetJoinGroup() {
    this._joinGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinGroupInput() {
    return this._joinGroup.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bfd: cdktf.stringToTerraform(this._bfd),
      cisco_exclude_genid: cdktf.stringToTerraform(this._ciscoExcludeGenid),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      dr_priority: cdktf.numberToTerraform(this._drPriority),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      hello_holdtime: cdktf.numberToTerraform(this._helloHoldtime),
      hello_interval: cdktf.numberToTerraform(this._helloInterval),
      id: cdktf.stringToTerraform(this._id),
      multicast_flow: cdktf.listMapper(cdktf.stringToTerraform, false)(this._multicastFlow),
      name: cdktf.stringToTerraform(this._name),
      neighbour_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._neighbourFilter),
      passive: cdktf.stringToTerraform(this._passive),
      pim_mode: cdktf.stringToTerraform(this._pimMode),
      propagation_delay: cdktf.numberToTerraform(this._propagationDelay),
      rp_candidate: cdktf.stringToTerraform(this._rpCandidate),
      rp_candidate_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rpCandidateGroup),
      rp_candidate_interval: cdktf.numberToTerraform(this._rpCandidateInterval),
      rp_candidate_priority: cdktf.numberToTerraform(this._rpCandidatePriority),
      rpf_nbr_fail_back: cdktf.stringToTerraform(this._rpfNbrFailBack),
      rpf_nbr_fail_back_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rpfNbrFailBackFilter),
      state_refresh_interval: cdktf.numberToTerraform(this._stateRefreshInterval),
      static_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._staticGroup),
      ttl_threshold: cdktf.numberToTerraform(this._ttlThreshold),
      igmp: routerMulticastInterfaceIgmpAToTerraform(this._igmp.internalValue),
      join_group: cdktf.listMapper(routerMulticastInterfaceJoinGroupAToTerraform, true)(this._joinGroup.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bfd: {
        value: cdktf.stringToHclTerraform(this._bfd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cisco_exclude_genid: {
        value: cdktf.stringToHclTerraform(this._ciscoExcludeGenid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dr_priority: {
        value: cdktf.numberToHclTerraform(this._drPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hello_holdtime: {
        value: cdktf.numberToHclTerraform(this._helloHoldtime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hello_interval: {
        value: cdktf.numberToHclTerraform(this._helloInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multicast_flow: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._multicastFlow),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      neighbour_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._neighbourFilter),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      passive: {
        value: cdktf.stringToHclTerraform(this._passive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pim_mode: {
        value: cdktf.stringToHclTerraform(this._pimMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      propagation_delay: {
        value: cdktf.numberToHclTerraform(this._propagationDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rp_candidate: {
        value: cdktf.stringToHclTerraform(this._rpCandidate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rp_candidate_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rpCandidateGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      rp_candidate_interval: {
        value: cdktf.numberToHclTerraform(this._rpCandidateInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rp_candidate_priority: {
        value: cdktf.numberToHclTerraform(this._rpCandidatePriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rpf_nbr_fail_back: {
        value: cdktf.stringToHclTerraform(this._rpfNbrFailBack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rpf_nbr_fail_back_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rpfNbrFailBackFilter),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      state_refresh_interval: {
        value: cdktf.numberToHclTerraform(this._stateRefreshInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      static_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._staticGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ttl_threshold: {
        value: cdktf.numberToHclTerraform(this._ttlThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      igmp: {
        value: routerMulticastInterfaceIgmpAToHclTerraform(this._igmp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterMulticastInterfaceIgmpAList",
      },
      join_group: {
        value: cdktf.listMapperHcl(routerMulticastInterfaceJoinGroupAToHclTerraform, true)(this._joinGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterMulticastInterfaceJoinGroupAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
