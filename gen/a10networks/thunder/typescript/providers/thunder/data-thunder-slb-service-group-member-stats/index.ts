// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_service_group_member_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbServiceGroupMemberStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_service_group_member_stats#id DataThunderSlbServiceGroupMemberStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Member name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_service_group_member_stats#name DataThunderSlbServiceGroupMemberStats#name}
  */
  readonly name: string;
  /**
  * Port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_service_group_member_stats#port DataThunderSlbServiceGroupMemberStats#port}
  */
  readonly port: number;
  /**
  * Service_group_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_service_group_member_stats#service_group_name DataThunderSlbServiceGroupMemberStats#service_group_name}
  */
  readonly serviceGroupName: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_service_group_member_stats#stats DataThunderSlbServiceGroupMemberStats#stats}
  */
  readonly stats?: DataThunderSlbServiceGroupMemberStatsStats;
}
export interface DataThunderSlbServiceGroupMemberStatsStats {
  /**
  * Current established connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_service_group_member_stats#curr_conn DataThunderSlbServiceGroupMemberStats#curr_conn}
  */
  readonly currConn?: number;
  /**
  * Current connection counter overflow count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_service_group_member_stats#curr_conn_overflow DataThunderSlbServiceGroupMemberStats#curr_conn_overflow}
  */
  readonly currConnOverflow?: number;
  /**
  * Current requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_service_group_member_stats#curr_req DataThunderSlbServiceGroupMemberStats#curr_req}
  */
  readonly currReq?: number;
  /**
  * Current SSL connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_service_group_member_stats#curr_ssl_conn DataThunderSlbServiceGroupMemberStats#curr_ssl_conn}
  */
  readonly currSslConn?: number;
  /**
  * Fastest response time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_service_group_member_stats#fastest_rsp_time DataThunderSlbServiceGroupMemberStats#fastest_rsp_time}
  */
  readonly fastestRspTime?: number;
  /**
  * Peak connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_service_group_member_stats#peak_conn DataThunderSlbServiceGroupMemberStats#peak_conn}
  */
  readonly peakConn?: number;
  /**
  * Response time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_service_group_member_stats#response_time DataThunderSlbServiceGroupMemberStats#response_time}
  */
  readonly responseTime?: number;
  /**
  * Slowest response time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_service_group_member_stats#slowest_rsp_time DataThunderSlbServiceGroupMemberStats#slowest_rsp_time}
  */
  readonly slowestRspTime?: number;
  /**
  * State flaps count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_service_group_member_stats#state_flaps DataThunderSlbServiceGroupMemberStats#state_flaps}
  */
  readonly stateFlaps?: number;
  /**
  * Total established connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_service_group_member_stats#total_conn DataThunderSlbServiceGroupMemberStats#total_conn}
  */
  readonly totalConn?: number;
  /**
  * Bytes processed in forward direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_service_group_member_stats#total_fwd_bytes DataThunderSlbServiceGroupMemberStats#total_fwd_bytes}
  */
  readonly totalFwdBytes?: number;
  /**
  * Packets processed in forward direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_service_group_member_stats#total_fwd_pkts DataThunderSlbServiceGroupMemberStats#total_fwd_pkts}
  */
  readonly totalFwdPkts?: number;
  /**
  * Total requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_service_group_member_stats#total_req DataThunderSlbServiceGroupMemberStats#total_req}
  */
  readonly totalReq?: number;
  /**
  * Total requests successful
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_service_group_member_stats#total_req_succ DataThunderSlbServiceGroupMemberStats#total_req_succ}
  */
  readonly totalReqSucc?: number;
  /**
  * Bytes processed in reverse direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_service_group_member_stats#total_rev_bytes DataThunderSlbServiceGroupMemberStats#total_rev_bytes}
  */
  readonly totalRevBytes?: number;
  /**
  * Packets processed in reverse direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_service_group_member_stats#total_rev_pkts DataThunderSlbServiceGroupMemberStats#total_rev_pkts}
  */
  readonly totalRevPkts?: number;
  /**
  * Total reverse packets inspected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_service_group_member_stats#total_rev_pkts_inspected DataThunderSlbServiceGroupMemberStats#total_rev_pkts_inspected}
  */
  readonly totalRevPktsInspected?: number;
  /**
  * Total reverse packets inspected status code 2xx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_service_group_member_stats#total_rev_pkts_inspected_status_code_2xx DataThunderSlbServiceGroupMemberStats#total_rev_pkts_inspected_status_code_2xx}
  */
  readonly totalRevPktsInspectedStatusCode2Xx?: number;
  /**
  * Total reverse packets inspected status code non 5xx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_service_group_member_stats#total_rev_pkts_inspected_status_code_non_5xx DataThunderSlbServiceGroupMemberStats#total_rev_pkts_inspected_status_code_non_5xx}
  */
  readonly totalRevPktsInspectedStatusCodeNon5Xx?: number;
  /**
  * Total SSL connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_service_group_member_stats#total_ssl_conn DataThunderSlbServiceGroupMemberStats#total_ssl_conn}
  */
  readonly totalSslConn?: number;
}

export function dataThunderSlbServiceGroupMemberStatsStatsToTerraform(struct?: DataThunderSlbServiceGroupMemberStatsStatsOutputReference | DataThunderSlbServiceGroupMemberStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    curr_conn: cdktf.numberToTerraform(struct!.currConn),
    curr_conn_overflow: cdktf.numberToTerraform(struct!.currConnOverflow),
    curr_req: cdktf.numberToTerraform(struct!.currReq),
    curr_ssl_conn: cdktf.numberToTerraform(struct!.currSslConn),
    fastest_rsp_time: cdktf.numberToTerraform(struct!.fastestRspTime),
    peak_conn: cdktf.numberToTerraform(struct!.peakConn),
    response_time: cdktf.numberToTerraform(struct!.responseTime),
    slowest_rsp_time: cdktf.numberToTerraform(struct!.slowestRspTime),
    state_flaps: cdktf.numberToTerraform(struct!.stateFlaps),
    total_conn: cdktf.numberToTerraform(struct!.totalConn),
    total_fwd_bytes: cdktf.numberToTerraform(struct!.totalFwdBytes),
    total_fwd_pkts: cdktf.numberToTerraform(struct!.totalFwdPkts),
    total_req: cdktf.numberToTerraform(struct!.totalReq),
    total_req_succ: cdktf.numberToTerraform(struct!.totalReqSucc),
    total_rev_bytes: cdktf.numberToTerraform(struct!.totalRevBytes),
    total_rev_pkts: cdktf.numberToTerraform(struct!.totalRevPkts),
    total_rev_pkts_inspected: cdktf.numberToTerraform(struct!.totalRevPktsInspected),
    total_rev_pkts_inspected_status_code_2xx: cdktf.numberToTerraform(struct!.totalRevPktsInspectedStatusCode2Xx),
    total_rev_pkts_inspected_status_code_non_5xx: cdktf.numberToTerraform(struct!.totalRevPktsInspectedStatusCodeNon5Xx),
    total_ssl_conn: cdktf.numberToTerraform(struct!.totalSslConn),
  }
}


export function dataThunderSlbServiceGroupMemberStatsStatsToHclTerraform(struct?: DataThunderSlbServiceGroupMemberStatsStatsOutputReference | DataThunderSlbServiceGroupMemberStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    curr_conn: {
      value: cdktf.numberToHclTerraform(struct!.currConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr_conn_overflow: {
      value: cdktf.numberToHclTerraform(struct!.currConnOverflow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr_req: {
      value: cdktf.numberToHclTerraform(struct!.currReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr_ssl_conn: {
      value: cdktf.numberToHclTerraform(struct!.currSslConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fastest_rsp_time: {
      value: cdktf.numberToHclTerraform(struct!.fastestRspTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peak_conn: {
      value: cdktf.numberToHclTerraform(struct!.peakConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_time: {
      value: cdktf.numberToHclTerraform(struct!.responseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slowest_rsp_time: {
      value: cdktf.numberToHclTerraform(struct!.slowestRspTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    state_flaps: {
      value: cdktf.numberToHclTerraform(struct!.stateFlaps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_conn: {
      value: cdktf.numberToHclTerraform(struct!.totalConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_fwd_bytes: {
      value: cdktf.numberToHclTerraform(struct!.totalFwdBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_fwd_pkts: {
      value: cdktf.numberToHclTerraform(struct!.totalFwdPkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_req: {
      value: cdktf.numberToHclTerraform(struct!.totalReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_req_succ: {
      value: cdktf.numberToHclTerraform(struct!.totalReqSucc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_rev_bytes: {
      value: cdktf.numberToHclTerraform(struct!.totalRevBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_rev_pkts: {
      value: cdktf.numberToHclTerraform(struct!.totalRevPkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_rev_pkts_inspected: {
      value: cdktf.numberToHclTerraform(struct!.totalRevPktsInspected),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_rev_pkts_inspected_status_code_2xx: {
      value: cdktf.numberToHclTerraform(struct!.totalRevPktsInspectedStatusCode2Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_rev_pkts_inspected_status_code_non_5xx: {
      value: cdktf.numberToHclTerraform(struct!.totalRevPktsInspectedStatusCodeNon5Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_ssl_conn: {
      value: cdktf.numberToHclTerraform(struct!.totalSslConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbServiceGroupMemberStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbServiceGroupMemberStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.currConn = this._currConn;
    }
    if (this._currConnOverflow !== undefined) {
      hasAnyValues = true;
      internalValueResult.currConnOverflow = this._currConnOverflow;
    }
    if (this._currReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.currReq = this._currReq;
    }
    if (this._currSslConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.currSslConn = this._currSslConn;
    }
    if (this._fastestRspTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastestRspTime = this._fastestRspTime;
    }
    if (this._peakConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.peakConn = this._peakConn;
    }
    if (this._responseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseTime = this._responseTime;
    }
    if (this._slowestRspTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowestRspTime = this._slowestRspTime;
    }
    if (this._stateFlaps !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateFlaps = this._stateFlaps;
    }
    if (this._totalConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalConn = this._totalConn;
    }
    if (this._totalFwdBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalFwdBytes = this._totalFwdBytes;
    }
    if (this._totalFwdPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalFwdPkts = this._totalFwdPkts;
    }
    if (this._totalReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalReq = this._totalReq;
    }
    if (this._totalReqSucc !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalReqSucc = this._totalReqSucc;
    }
    if (this._totalRevBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalRevBytes = this._totalRevBytes;
    }
    if (this._totalRevPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalRevPkts = this._totalRevPkts;
    }
    if (this._totalRevPktsInspected !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalRevPktsInspected = this._totalRevPktsInspected;
    }
    if (this._totalRevPktsInspectedStatusCode2Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalRevPktsInspectedStatusCode2Xx = this._totalRevPktsInspectedStatusCode2Xx;
    }
    if (this._totalRevPktsInspectedStatusCodeNon5Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalRevPktsInspectedStatusCodeNon5Xx = this._totalRevPktsInspectedStatusCodeNon5Xx;
    }
    if (this._totalSslConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalSslConn = this._totalSslConn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbServiceGroupMemberStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._currConn = undefined;
      this._currConnOverflow = undefined;
      this._currReq = undefined;
      this._currSslConn = undefined;
      this._fastestRspTime = undefined;
      this._peakConn = undefined;
      this._responseTime = undefined;
      this._slowestRspTime = undefined;
      this._stateFlaps = undefined;
      this._totalConn = undefined;
      this._totalFwdBytes = undefined;
      this._totalFwdPkts = undefined;
      this._totalReq = undefined;
      this._totalReqSucc = undefined;
      this._totalRevBytes = undefined;
      this._totalRevPkts = undefined;
      this._totalRevPktsInspected = undefined;
      this._totalRevPktsInspectedStatusCode2Xx = undefined;
      this._totalRevPktsInspectedStatusCodeNon5Xx = undefined;
      this._totalSslConn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._currConn = value.currConn;
      this._currConnOverflow = value.currConnOverflow;
      this._currReq = value.currReq;
      this._currSslConn = value.currSslConn;
      this._fastestRspTime = value.fastestRspTime;
      this._peakConn = value.peakConn;
      this._responseTime = value.responseTime;
      this._slowestRspTime = value.slowestRspTime;
      this._stateFlaps = value.stateFlaps;
      this._totalConn = value.totalConn;
      this._totalFwdBytes = value.totalFwdBytes;
      this._totalFwdPkts = value.totalFwdPkts;
      this._totalReq = value.totalReq;
      this._totalReqSucc = value.totalReqSucc;
      this._totalRevBytes = value.totalRevBytes;
      this._totalRevPkts = value.totalRevPkts;
      this._totalRevPktsInspected = value.totalRevPktsInspected;
      this._totalRevPktsInspectedStatusCode2Xx = value.totalRevPktsInspectedStatusCode2Xx;
      this._totalRevPktsInspectedStatusCodeNon5Xx = value.totalRevPktsInspectedStatusCodeNon5Xx;
      this._totalSslConn = value.totalSslConn;
    }
  }

  // curr_conn - computed: false, optional: true, required: false
  private _currConn?: number; 
  public get currConn() {
    return this.getNumberAttribute('curr_conn');
  }
  public set currConn(value: number) {
    this._currConn = value;
  }
  public resetCurrConn() {
    this._currConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currConnInput() {
    return this._currConn;
  }

  // curr_conn_overflow - computed: false, optional: true, required: false
  private _currConnOverflow?: number; 
  public get currConnOverflow() {
    return this.getNumberAttribute('curr_conn_overflow');
  }
  public set currConnOverflow(value: number) {
    this._currConnOverflow = value;
  }
  public resetCurrConnOverflow() {
    this._currConnOverflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currConnOverflowInput() {
    return this._currConnOverflow;
  }

  // curr_req - computed: false, optional: true, required: false
  private _currReq?: number; 
  public get currReq() {
    return this.getNumberAttribute('curr_req');
  }
  public set currReq(value: number) {
    this._currReq = value;
  }
  public resetCurrReq() {
    this._currReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currReqInput() {
    return this._currReq;
  }

  // curr_ssl_conn - computed: false, optional: true, required: false
  private _currSslConn?: number; 
  public get currSslConn() {
    return this.getNumberAttribute('curr_ssl_conn');
  }
  public set currSslConn(value: number) {
    this._currSslConn = value;
  }
  public resetCurrSslConn() {
    this._currSslConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currSslConnInput() {
    return this._currSslConn;
  }

  // fastest_rsp_time - computed: false, optional: true, required: false
  private _fastestRspTime?: number; 
  public get fastestRspTime() {
    return this.getNumberAttribute('fastest_rsp_time');
  }
  public set fastestRspTime(value: number) {
    this._fastestRspTime = value;
  }
  public resetFastestRspTime() {
    this._fastestRspTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastestRspTimeInput() {
    return this._fastestRspTime;
  }

  // peak_conn - computed: false, optional: true, required: false
  private _peakConn?: number; 
  public get peakConn() {
    return this.getNumberAttribute('peak_conn');
  }
  public set peakConn(value: number) {
    this._peakConn = value;
  }
  public resetPeakConn() {
    this._peakConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peakConnInput() {
    return this._peakConn;
  }

  // response_time - computed: false, optional: true, required: false
  private _responseTime?: number; 
  public get responseTime() {
    return this.getNumberAttribute('response_time');
  }
  public set responseTime(value: number) {
    this._responseTime = value;
  }
  public resetResponseTime() {
    this._responseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTimeInput() {
    return this._responseTime;
  }

  // slowest_rsp_time - computed: false, optional: true, required: false
  private _slowestRspTime?: number; 
  public get slowestRspTime() {
    return this.getNumberAttribute('slowest_rsp_time');
  }
  public set slowestRspTime(value: number) {
    this._slowestRspTime = value;
  }
  public resetSlowestRspTime() {
    this._slowestRspTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowestRspTimeInput() {
    return this._slowestRspTime;
  }

  // state_flaps - computed: false, optional: true, required: false
  private _stateFlaps?: number; 
  public get stateFlaps() {
    return this.getNumberAttribute('state_flaps');
  }
  public set stateFlaps(value: number) {
    this._stateFlaps = value;
  }
  public resetStateFlaps() {
    this._stateFlaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateFlapsInput() {
    return this._stateFlaps;
  }

  // total_conn - computed: false, optional: true, required: false
  private _totalConn?: number; 
  public get totalConn() {
    return this.getNumberAttribute('total_conn');
  }
  public set totalConn(value: number) {
    this._totalConn = value;
  }
  public resetTotalConn() {
    this._totalConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalConnInput() {
    return this._totalConn;
  }

  // total_fwd_bytes - computed: false, optional: true, required: false
  private _totalFwdBytes?: number; 
  public get totalFwdBytes() {
    return this.getNumberAttribute('total_fwd_bytes');
  }
  public set totalFwdBytes(value: number) {
    this._totalFwdBytes = value;
  }
  public resetTotalFwdBytes() {
    this._totalFwdBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalFwdBytesInput() {
    return this._totalFwdBytes;
  }

  // total_fwd_pkts - computed: false, optional: true, required: false
  private _totalFwdPkts?: number; 
  public get totalFwdPkts() {
    return this.getNumberAttribute('total_fwd_pkts');
  }
  public set totalFwdPkts(value: number) {
    this._totalFwdPkts = value;
  }
  public resetTotalFwdPkts() {
    this._totalFwdPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalFwdPktsInput() {
    return this._totalFwdPkts;
  }

  // total_req - computed: false, optional: true, required: false
  private _totalReq?: number; 
  public get totalReq() {
    return this.getNumberAttribute('total_req');
  }
  public set totalReq(value: number) {
    this._totalReq = value;
  }
  public resetTotalReq() {
    this._totalReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalReqInput() {
    return this._totalReq;
  }

  // total_req_succ - computed: false, optional: true, required: false
  private _totalReqSucc?: number; 
  public get totalReqSucc() {
    return this.getNumberAttribute('total_req_succ');
  }
  public set totalReqSucc(value: number) {
    this._totalReqSucc = value;
  }
  public resetTotalReqSucc() {
    this._totalReqSucc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalReqSuccInput() {
    return this._totalReqSucc;
  }

  // total_rev_bytes - computed: false, optional: true, required: false
  private _totalRevBytes?: number; 
  public get totalRevBytes() {
    return this.getNumberAttribute('total_rev_bytes');
  }
  public set totalRevBytes(value: number) {
    this._totalRevBytes = value;
  }
  public resetTotalRevBytes() {
    this._totalRevBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalRevBytesInput() {
    return this._totalRevBytes;
  }

  // total_rev_pkts - computed: false, optional: true, required: false
  private _totalRevPkts?: number; 
  public get totalRevPkts() {
    return this.getNumberAttribute('total_rev_pkts');
  }
  public set totalRevPkts(value: number) {
    this._totalRevPkts = value;
  }
  public resetTotalRevPkts() {
    this._totalRevPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalRevPktsInput() {
    return this._totalRevPkts;
  }

  // total_rev_pkts_inspected - computed: false, optional: true, required: false
  private _totalRevPktsInspected?: number; 
  public get totalRevPktsInspected() {
    return this.getNumberAttribute('total_rev_pkts_inspected');
  }
  public set totalRevPktsInspected(value: number) {
    this._totalRevPktsInspected = value;
  }
  public resetTotalRevPktsInspected() {
    this._totalRevPktsInspected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalRevPktsInspectedInput() {
    return this._totalRevPktsInspected;
  }

  // total_rev_pkts_inspected_status_code_2xx - computed: false, optional: true, required: false
  private _totalRevPktsInspectedStatusCode2Xx?: number; 
  public get totalRevPktsInspectedStatusCode2Xx() {
    return this.getNumberAttribute('total_rev_pkts_inspected_status_code_2xx');
  }
  public set totalRevPktsInspectedStatusCode2Xx(value: number) {
    this._totalRevPktsInspectedStatusCode2Xx = value;
  }
  public resetTotalRevPktsInspectedStatusCode2Xx() {
    this._totalRevPktsInspectedStatusCode2Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalRevPktsInspectedStatusCode2XxInput() {
    return this._totalRevPktsInspectedStatusCode2Xx;
  }

  // total_rev_pkts_inspected_status_code_non_5xx - computed: false, optional: true, required: false
  private _totalRevPktsInspectedStatusCodeNon5Xx?: number; 
  public get totalRevPktsInspectedStatusCodeNon5Xx() {
    return this.getNumberAttribute('total_rev_pkts_inspected_status_code_non_5xx');
  }
  public set totalRevPktsInspectedStatusCodeNon5Xx(value: number) {
    this._totalRevPktsInspectedStatusCodeNon5Xx = value;
  }
  public resetTotalRevPktsInspectedStatusCodeNon5Xx() {
    this._totalRevPktsInspectedStatusCodeNon5Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalRevPktsInspectedStatusCodeNon5XxInput() {
    return this._totalRevPktsInspectedStatusCodeNon5Xx;
  }

  // total_ssl_conn - computed: false, optional: true, required: false
  private _totalSslConn?: number; 
  public get totalSslConn() {
    return this.getNumberAttribute('total_ssl_conn');
  }
  public set totalSslConn(value: number) {
    this._totalSslConn = value;
  }
  public resetTotalSslConn() {
    this._totalSslConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalSslConnInput() {
    return this._totalSslConn;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_service_group_member_stats thunder_slb_service_group_member_stats}
*/
export class DataThunderSlbServiceGroupMemberStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_service_group_member_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbServiceGroupMemberStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbServiceGroupMemberStats to import
  * @param importFromId The id of the existing DataThunderSlbServiceGroupMemberStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_service_group_member_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbServiceGroupMemberStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_service_group_member_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_service_group_member_stats thunder_slb_service_group_member_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbServiceGroupMemberStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbServiceGroupMemberStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_service_group_member_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._name = config.name;
    this._port = config.port;
    this._serviceGroupName = config.serviceGroupName;
    this._stats.internalValue = config.stats;
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // service_group_name - computed: false, optional: false, required: true
  private _serviceGroupName?: string; 
  public get serviceGroupName() {
    return this.getStringAttribute('service_group_name');
  }
  public set serviceGroupName(value: string) {
    this._serviceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupNameInput() {
    return this._serviceGroupName;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderSlbServiceGroupMemberStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbServiceGroupMemberStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
      service_group_name: cdktf.stringToTerraform(this._serviceGroupName),
      stats: dataThunderSlbServiceGroupMemberStatsStatsToTerraform(this._stats.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_group_name: {
        value: cdktf.stringToHclTerraform(this._serviceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats: {
        value: dataThunderSlbServiceGroupMemberStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbServiceGroupMemberStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
