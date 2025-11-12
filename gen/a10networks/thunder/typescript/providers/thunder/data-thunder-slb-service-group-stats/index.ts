// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_service_group_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbServiceGroupStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_service_group_stats#id DataThunderSlbServiceGroupStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * SLB Service Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_service_group_stats#name DataThunderSlbServiceGroupStats#name}
  */
  readonly name: string;
  /**
  * member_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_service_group_stats#member_list DataThunderSlbServiceGroupStats#member_list}
  */
  readonly memberList?: DataThunderSlbServiceGroupStatsMemberListStruct[] | cdktf.IResolvable;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_service_group_stats#stats DataThunderSlbServiceGroupStats#stats}
  */
  readonly stats?: DataThunderSlbServiceGroupStatsStats;
}
export interface DataThunderSlbServiceGroupStatsMemberListStats {
  /**
  * Current established connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_service_group_stats#curr_conn DataThunderSlbServiceGroupStats#curr_conn}
  */
  readonly currConn?: number;
  /**
  * Current connection counter overflow count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_service_group_stats#curr_conn_overflow DataThunderSlbServiceGroupStats#curr_conn_overflow}
  */
  readonly currConnOverflow?: number;
  /**
  * Current requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_service_group_stats#curr_req DataThunderSlbServiceGroupStats#curr_req}
  */
  readonly currReq?: number;
  /**
  * Current SSL connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_service_group_stats#curr_ssl_conn DataThunderSlbServiceGroupStats#curr_ssl_conn}
  */
  readonly currSslConn?: number;
  /**
  * Fastest response time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_service_group_stats#fastest_rsp_time DataThunderSlbServiceGroupStats#fastest_rsp_time}
  */
  readonly fastestRspTime?: number;
  /**
  * Peak connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_service_group_stats#peak_conn DataThunderSlbServiceGroupStats#peak_conn}
  */
  readonly peakConn?: number;
  /**
  * Response time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_service_group_stats#response_time DataThunderSlbServiceGroupStats#response_time}
  */
  readonly responseTime?: number;
  /**
  * Slowest response time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_service_group_stats#slowest_rsp_time DataThunderSlbServiceGroupStats#slowest_rsp_time}
  */
  readonly slowestRspTime?: number;
  /**
  * State flaps count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_service_group_stats#state_flaps DataThunderSlbServiceGroupStats#state_flaps}
  */
  readonly stateFlaps?: number;
  /**
  * Total established connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_service_group_stats#total_conn DataThunderSlbServiceGroupStats#total_conn}
  */
  readonly totalConn?: number;
  /**
  * Bytes processed in forward direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_service_group_stats#total_fwd_bytes DataThunderSlbServiceGroupStats#total_fwd_bytes}
  */
  readonly totalFwdBytes?: number;
  /**
  * Packets processed in forward direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_service_group_stats#total_fwd_pkts DataThunderSlbServiceGroupStats#total_fwd_pkts}
  */
  readonly totalFwdPkts?: number;
  /**
  * Total requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_service_group_stats#total_req DataThunderSlbServiceGroupStats#total_req}
  */
  readonly totalReq?: number;
  /**
  * Total requests successful
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_service_group_stats#total_req_succ DataThunderSlbServiceGroupStats#total_req_succ}
  */
  readonly totalReqSucc?: number;
  /**
  * Bytes processed in reverse direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_service_group_stats#total_rev_bytes DataThunderSlbServiceGroupStats#total_rev_bytes}
  */
  readonly totalRevBytes?: number;
  /**
  * Packets processed in reverse direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_service_group_stats#total_rev_pkts DataThunderSlbServiceGroupStats#total_rev_pkts}
  */
  readonly totalRevPkts?: number;
  /**
  * Total reverse packets inspected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_service_group_stats#total_rev_pkts_inspected DataThunderSlbServiceGroupStats#total_rev_pkts_inspected}
  */
  readonly totalRevPktsInspected?: number;
  /**
  * Total reverse packets inspected status code 2xx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_service_group_stats#total_rev_pkts_inspected_status_code_2xx DataThunderSlbServiceGroupStats#total_rev_pkts_inspected_status_code_2xx}
  */
  readonly totalRevPktsInspectedStatusCode2Xx?: number;
  /**
  * Total reverse packets inspected status code non 5xx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_service_group_stats#total_rev_pkts_inspected_status_code_non_5xx DataThunderSlbServiceGroupStats#total_rev_pkts_inspected_status_code_non_5xx}
  */
  readonly totalRevPktsInspectedStatusCodeNon5Xx?: number;
  /**
  * Total SSL connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_service_group_stats#total_ssl_conn DataThunderSlbServiceGroupStats#total_ssl_conn}
  */
  readonly totalSslConn?: number;
}

export function dataThunderSlbServiceGroupStatsMemberListStatsToTerraform(struct?: DataThunderSlbServiceGroupStatsMemberListStatsOutputReference | DataThunderSlbServiceGroupStatsMemberListStats): any {
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


export function dataThunderSlbServiceGroupStatsMemberListStatsToHclTerraform(struct?: DataThunderSlbServiceGroupStatsMemberListStatsOutputReference | DataThunderSlbServiceGroupStatsMemberListStats): any {
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

export class DataThunderSlbServiceGroupStatsMemberListStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbServiceGroupStatsMemberListStats | undefined {
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

  public set internalValue(value: DataThunderSlbServiceGroupStatsMemberListStats | undefined) {
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
export interface DataThunderSlbServiceGroupStatsMemberListStruct {
  /**
  * Member name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_service_group_stats#name DataThunderSlbServiceGroupStats#name}
  */
  readonly name: string;
  /**
  * Port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_service_group_stats#port DataThunderSlbServiceGroupStats#port}
  */
  readonly port: number;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_service_group_stats#stats DataThunderSlbServiceGroupStats#stats}
  */
  readonly stats?: DataThunderSlbServiceGroupStatsMemberListStats;
}

export function dataThunderSlbServiceGroupStatsMemberListStructToTerraform(struct?: DataThunderSlbServiceGroupStatsMemberListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    stats: dataThunderSlbServiceGroupStatsMemberListStatsToTerraform(struct!.stats),
  }
}


export function dataThunderSlbServiceGroupStatsMemberListStructToHclTerraform(struct?: DataThunderSlbServiceGroupStatsMemberListStruct | cdktf.IResolvable): any {
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stats: {
      value: dataThunderSlbServiceGroupStatsMemberListStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbServiceGroupStatsMemberListStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbServiceGroupStatsMemberListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbServiceGroupStatsMemberListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._stats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stats = this._stats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbServiceGroupStatsMemberListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._port = undefined;
      this._stats.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._port = value.port;
      this._stats.internalValue = value.stats;
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderSlbServiceGroupStatsMemberListStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbServiceGroupStatsMemberListStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }
}

export class DataThunderSlbServiceGroupStatsMemberListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbServiceGroupStatsMemberListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbServiceGroupStatsMemberListStructOutputReference {
    return new DataThunderSlbServiceGroupStatsMemberListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbServiceGroupStatsStats {
  /**
  * Drops due to Service selection failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_service_group_stats#server_selection_fail_drop DataThunderSlbServiceGroupStats#server_selection_fail_drop}
  */
  readonly serverSelectionFailDrop?: number;
  /**
  * Resets sent out for Service selection failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_service_group_stats#server_selection_fail_reset DataThunderSlbServiceGroupStats#server_selection_fail_reset}
  */
  readonly serverSelectionFailReset?: number;
  /**
  * Current connection counter overflow count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_service_group_stats#service_curr_conn_overflow DataThunderSlbServiceGroupStats#service_curr_conn_overflow}
  */
  readonly serviceCurrConnOverflow?: number;
  /**
  * Service Group healthy host count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_service_group_stats#service_healthy_host DataThunderSlbServiceGroupStats#service_healthy_host}
  */
  readonly serviceHealthyHost?: number;
  /**
  * Peak connection count for the Service Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_service_group_stats#service_peak_conn DataThunderSlbServiceGroupStats#service_peak_conn}
  */
  readonly servicePeakConn?: number;
  /**
  * Service Group request count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_service_group_stats#service_req_count DataThunderSlbServiceGroupStats#service_req_count}
  */
  readonly serviceReqCount?: number;
  /**
  * Service Group response 2xx count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_service_group_stats#service_resp_2xx DataThunderSlbServiceGroupStats#service_resp_2xx}
  */
  readonly serviceResp2Xx?: number;
  /**
  * Service Group response 3xx count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_service_group_stats#service_resp_3xx DataThunderSlbServiceGroupStats#service_resp_3xx}
  */
  readonly serviceResp3Xx?: number;
  /**
  * Service Group response 4xx count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_service_group_stats#service_resp_4xx DataThunderSlbServiceGroupStats#service_resp_4xx}
  */
  readonly serviceResp4Xx?: number;
  /**
  * Service Group response 5xx count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_service_group_stats#service_resp_5xx DataThunderSlbServiceGroupStats#service_resp_5xx}
  */
  readonly serviceResp5Xx?: number;
  /**
  * Service Group response count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_service_group_stats#service_resp_count DataThunderSlbServiceGroupStats#service_resp_count}
  */
  readonly serviceRespCount?: number;
  /**
  * Service Group unhealthy host count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_service_group_stats#service_unhealthy_host DataThunderSlbServiceGroupStats#service_unhealthy_host}
  */
  readonly serviceUnhealthyHost?: number;
}

export function dataThunderSlbServiceGroupStatsStatsToTerraform(struct?: DataThunderSlbServiceGroupStatsStatsOutputReference | DataThunderSlbServiceGroupStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server_selection_fail_drop: cdktf.numberToTerraform(struct!.serverSelectionFailDrop),
    server_selection_fail_reset: cdktf.numberToTerraform(struct!.serverSelectionFailReset),
    service_curr_conn_overflow: cdktf.numberToTerraform(struct!.serviceCurrConnOverflow),
    service_healthy_host: cdktf.numberToTerraform(struct!.serviceHealthyHost),
    service_peak_conn: cdktf.numberToTerraform(struct!.servicePeakConn),
    service_req_count: cdktf.numberToTerraform(struct!.serviceReqCount),
    service_resp_2xx: cdktf.numberToTerraform(struct!.serviceResp2Xx),
    service_resp_3xx: cdktf.numberToTerraform(struct!.serviceResp3Xx),
    service_resp_4xx: cdktf.numberToTerraform(struct!.serviceResp4Xx),
    service_resp_5xx: cdktf.numberToTerraform(struct!.serviceResp5Xx),
    service_resp_count: cdktf.numberToTerraform(struct!.serviceRespCount),
    service_unhealthy_host: cdktf.numberToTerraform(struct!.serviceUnhealthyHost),
  }
}


export function dataThunderSlbServiceGroupStatsStatsToHclTerraform(struct?: DataThunderSlbServiceGroupStatsStatsOutputReference | DataThunderSlbServiceGroupStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server_selection_fail_drop: {
      value: cdktf.numberToHclTerraform(struct!.serverSelectionFailDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_selection_fail_reset: {
      value: cdktf.numberToHclTerraform(struct!.serverSelectionFailReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_curr_conn_overflow: {
      value: cdktf.numberToHclTerraform(struct!.serviceCurrConnOverflow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_healthy_host: {
      value: cdktf.numberToHclTerraform(struct!.serviceHealthyHost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_peak_conn: {
      value: cdktf.numberToHclTerraform(struct!.servicePeakConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_req_count: {
      value: cdktf.numberToHclTerraform(struct!.serviceReqCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_resp_2xx: {
      value: cdktf.numberToHclTerraform(struct!.serviceResp2Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_resp_3xx: {
      value: cdktf.numberToHclTerraform(struct!.serviceResp3Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_resp_4xx: {
      value: cdktf.numberToHclTerraform(struct!.serviceResp4Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_resp_5xx: {
      value: cdktf.numberToHclTerraform(struct!.serviceResp5Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_resp_count: {
      value: cdktf.numberToHclTerraform(struct!.serviceRespCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_unhealthy_host: {
      value: cdktf.numberToHclTerraform(struct!.serviceUnhealthyHost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbServiceGroupStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbServiceGroupStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverSelectionFailDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSelectionFailDrop = this._serverSelectionFailDrop;
    }
    if (this._serverSelectionFailReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSelectionFailReset = this._serverSelectionFailReset;
    }
    if (this._serviceCurrConnOverflow !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceCurrConnOverflow = this._serviceCurrConnOverflow;
    }
    if (this._serviceHealthyHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceHealthyHost = this._serviceHealthyHost;
    }
    if (this._servicePeakConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePeakConn = this._servicePeakConn;
    }
    if (this._serviceReqCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceReqCount = this._serviceReqCount;
    }
    if (this._serviceResp2Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceResp2Xx = this._serviceResp2Xx;
    }
    if (this._serviceResp3Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceResp3Xx = this._serviceResp3Xx;
    }
    if (this._serviceResp4Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceResp4Xx = this._serviceResp4Xx;
    }
    if (this._serviceResp5Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceResp5Xx = this._serviceResp5Xx;
    }
    if (this._serviceRespCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceRespCount = this._serviceRespCount;
    }
    if (this._serviceUnhealthyHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceUnhealthyHost = this._serviceUnhealthyHost;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbServiceGroupStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serverSelectionFailDrop = undefined;
      this._serverSelectionFailReset = undefined;
      this._serviceCurrConnOverflow = undefined;
      this._serviceHealthyHost = undefined;
      this._servicePeakConn = undefined;
      this._serviceReqCount = undefined;
      this._serviceResp2Xx = undefined;
      this._serviceResp3Xx = undefined;
      this._serviceResp4Xx = undefined;
      this._serviceResp5Xx = undefined;
      this._serviceRespCount = undefined;
      this._serviceUnhealthyHost = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serverSelectionFailDrop = value.serverSelectionFailDrop;
      this._serverSelectionFailReset = value.serverSelectionFailReset;
      this._serviceCurrConnOverflow = value.serviceCurrConnOverflow;
      this._serviceHealthyHost = value.serviceHealthyHost;
      this._servicePeakConn = value.servicePeakConn;
      this._serviceReqCount = value.serviceReqCount;
      this._serviceResp2Xx = value.serviceResp2Xx;
      this._serviceResp3Xx = value.serviceResp3Xx;
      this._serviceResp4Xx = value.serviceResp4Xx;
      this._serviceResp5Xx = value.serviceResp5Xx;
      this._serviceRespCount = value.serviceRespCount;
      this._serviceUnhealthyHost = value.serviceUnhealthyHost;
    }
  }

  // server_selection_fail_drop - computed: false, optional: true, required: false
  private _serverSelectionFailDrop?: number; 
  public get serverSelectionFailDrop() {
    return this.getNumberAttribute('server_selection_fail_drop');
  }
  public set serverSelectionFailDrop(value: number) {
    this._serverSelectionFailDrop = value;
  }
  public resetServerSelectionFailDrop() {
    this._serverSelectionFailDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSelectionFailDropInput() {
    return this._serverSelectionFailDrop;
  }

  // server_selection_fail_reset - computed: false, optional: true, required: false
  private _serverSelectionFailReset?: number; 
  public get serverSelectionFailReset() {
    return this.getNumberAttribute('server_selection_fail_reset');
  }
  public set serverSelectionFailReset(value: number) {
    this._serverSelectionFailReset = value;
  }
  public resetServerSelectionFailReset() {
    this._serverSelectionFailReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSelectionFailResetInput() {
    return this._serverSelectionFailReset;
  }

  // service_curr_conn_overflow - computed: false, optional: true, required: false
  private _serviceCurrConnOverflow?: number; 
  public get serviceCurrConnOverflow() {
    return this.getNumberAttribute('service_curr_conn_overflow');
  }
  public set serviceCurrConnOverflow(value: number) {
    this._serviceCurrConnOverflow = value;
  }
  public resetServiceCurrConnOverflow() {
    this._serviceCurrConnOverflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCurrConnOverflowInput() {
    return this._serviceCurrConnOverflow;
  }

  // service_healthy_host - computed: false, optional: true, required: false
  private _serviceHealthyHost?: number; 
  public get serviceHealthyHost() {
    return this.getNumberAttribute('service_healthy_host');
  }
  public set serviceHealthyHost(value: number) {
    this._serviceHealthyHost = value;
  }
  public resetServiceHealthyHost() {
    this._serviceHealthyHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceHealthyHostInput() {
    return this._serviceHealthyHost;
  }

  // service_peak_conn - computed: false, optional: true, required: false
  private _servicePeakConn?: number; 
  public get servicePeakConn() {
    return this.getNumberAttribute('service_peak_conn');
  }
  public set servicePeakConn(value: number) {
    this._servicePeakConn = value;
  }
  public resetServicePeakConn() {
    this._servicePeakConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePeakConnInput() {
    return this._servicePeakConn;
  }

  // service_req_count - computed: false, optional: true, required: false
  private _serviceReqCount?: number; 
  public get serviceReqCount() {
    return this.getNumberAttribute('service_req_count');
  }
  public set serviceReqCount(value: number) {
    this._serviceReqCount = value;
  }
  public resetServiceReqCount() {
    this._serviceReqCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceReqCountInput() {
    return this._serviceReqCount;
  }

  // service_resp_2xx - computed: false, optional: true, required: false
  private _serviceResp2Xx?: number; 
  public get serviceResp2Xx() {
    return this.getNumberAttribute('service_resp_2xx');
  }
  public set serviceResp2Xx(value: number) {
    this._serviceResp2Xx = value;
  }
  public resetServiceResp2Xx() {
    this._serviceResp2Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceResp2XxInput() {
    return this._serviceResp2Xx;
  }

  // service_resp_3xx - computed: false, optional: true, required: false
  private _serviceResp3Xx?: number; 
  public get serviceResp3Xx() {
    return this.getNumberAttribute('service_resp_3xx');
  }
  public set serviceResp3Xx(value: number) {
    this._serviceResp3Xx = value;
  }
  public resetServiceResp3Xx() {
    this._serviceResp3Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceResp3XxInput() {
    return this._serviceResp3Xx;
  }

  // service_resp_4xx - computed: false, optional: true, required: false
  private _serviceResp4Xx?: number; 
  public get serviceResp4Xx() {
    return this.getNumberAttribute('service_resp_4xx');
  }
  public set serviceResp4Xx(value: number) {
    this._serviceResp4Xx = value;
  }
  public resetServiceResp4Xx() {
    this._serviceResp4Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceResp4XxInput() {
    return this._serviceResp4Xx;
  }

  // service_resp_5xx - computed: false, optional: true, required: false
  private _serviceResp5Xx?: number; 
  public get serviceResp5Xx() {
    return this.getNumberAttribute('service_resp_5xx');
  }
  public set serviceResp5Xx(value: number) {
    this._serviceResp5Xx = value;
  }
  public resetServiceResp5Xx() {
    this._serviceResp5Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceResp5XxInput() {
    return this._serviceResp5Xx;
  }

  // service_resp_count - computed: false, optional: true, required: false
  private _serviceRespCount?: number; 
  public get serviceRespCount() {
    return this.getNumberAttribute('service_resp_count');
  }
  public set serviceRespCount(value: number) {
    this._serviceRespCount = value;
  }
  public resetServiceRespCount() {
    this._serviceRespCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRespCountInput() {
    return this._serviceRespCount;
  }

  // service_unhealthy_host - computed: false, optional: true, required: false
  private _serviceUnhealthyHost?: number; 
  public get serviceUnhealthyHost() {
    return this.getNumberAttribute('service_unhealthy_host');
  }
  public set serviceUnhealthyHost(value: number) {
    this._serviceUnhealthyHost = value;
  }
  public resetServiceUnhealthyHost() {
    this._serviceUnhealthyHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceUnhealthyHostInput() {
    return this._serviceUnhealthyHost;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_service_group_stats thunder_slb_service_group_stats}
*/
export class DataThunderSlbServiceGroupStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_service_group_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbServiceGroupStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbServiceGroupStats to import
  * @param importFromId The id of the existing DataThunderSlbServiceGroupStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_service_group_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbServiceGroupStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_service_group_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_service_group_stats thunder_slb_service_group_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbServiceGroupStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbServiceGroupStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_service_group_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
    this._memberList.internalValue = config.memberList;
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

  // member_list - computed: false, optional: true, required: false
  private _memberList = new DataThunderSlbServiceGroupStatsMemberListStructList(this, "member_list", false);
  public get memberList() {
    return this._memberList;
  }
  public putMemberList(value: DataThunderSlbServiceGroupStatsMemberListStruct[] | cdktf.IResolvable) {
    this._memberList.internalValue = value;
  }
  public resetMemberList() {
    this._memberList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberListInput() {
    return this._memberList.internalValue;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderSlbServiceGroupStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbServiceGroupStatsStats) {
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
      member_list: cdktf.listMapper(dataThunderSlbServiceGroupStatsMemberListStructToTerraform, true)(this._memberList.internalValue),
      stats: dataThunderSlbServiceGroupStatsStatsToTerraform(this._stats.internalValue),
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
      member_list: {
        value: cdktf.listMapperHcl(dataThunderSlbServiceGroupStatsMemberListStructToHclTerraform, true)(this._memberList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbServiceGroupStatsMemberListStructList",
      },
      stats: {
        value: dataThunderSlbServiceGroupStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbServiceGroupStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
