// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6ServerStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_stats#id DataThunderCgnv6ServerStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Server Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_stats#name DataThunderCgnv6ServerStats#name}
  */
  readonly name: string;
  /**
  * port_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_stats#port_list DataThunderCgnv6ServerStats#port_list}
  */
  readonly portList?: DataThunderCgnv6ServerStatsPortListStruct[] | cdktf.IResolvable;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_stats#stats DataThunderCgnv6ServerStats#stats}
  */
  readonly stats?: DataThunderCgnv6ServerStatsStats;
}
export interface DataThunderCgnv6ServerStatsPortListStats {
  /**
  * Current connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_stats#curr_conn DataThunderCgnv6ServerStats#curr_conn}
  */
  readonly currConn?: number;
  /**
  * Current requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_stats#curr_req DataThunderCgnv6ServerStats#curr_req}
  */
  readonly currReq?: number;
  /**
  * Total proxy request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_stats#es_req_count DataThunderCgnv6ServerStats#es_req_count}
  */
  readonly esReqCount?: number;
  /**
  * Response status 200
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_stats#es_resp_200 DataThunderCgnv6ServerStats#es_resp_200}
  */
  readonly esResp200?: number;
  /**
  * Response status 300
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_stats#es_resp_300 DataThunderCgnv6ServerStats#es_resp_300}
  */
  readonly esResp300?: number;
  /**
  * Response status 400
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_stats#es_resp_400 DataThunderCgnv6ServerStats#es_resp_400}
  */
  readonly esResp400?: number;
  /**
  * Response status 500
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_stats#es_resp_500 DataThunderCgnv6ServerStats#es_resp_500}
  */
  readonly esResp500?: number;
  /**
  * Total proxy Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_stats#es_resp_count DataThunderCgnv6ServerStats#es_resp_count}
  */
  readonly esRespCount?: number;
  /**
  * Total non-http response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_stats#es_resp_invalid_http DataThunderCgnv6ServerStats#es_resp_invalid_http}
  */
  readonly esRespInvalidHttp?: number;
  /**
  * Response status other
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_stats#es_resp_other DataThunderCgnv6ServerStats#es_resp_other}
  */
  readonly esRespOther?: number;
  /**
  * Fastest response time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_stats#fastest_rsp_time DataThunderCgnv6ServerStats#fastest_rsp_time}
  */
  readonly fastestRspTime?: number;
  /**
  * Last total connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_stats#last_total_conn DataThunderCgnv6ServerStats#last_total_conn}
  */
  readonly lastTotalConn?: number;
  /**
  * Peak connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_stats#peak_conn DataThunderCgnv6ServerStats#peak_conn}
  */
  readonly peakConn?: number;
  /**
  * Response time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_stats#response_time DataThunderCgnv6ServerStats#response_time}
  */
  readonly responseTime?: number;
  /**
  * Slowest response time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_stats#slowest_rsp_time DataThunderCgnv6ServerStats#slowest_rsp_time}
  */
  readonly slowestRspTime?: number;
  /**
  * Total connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_stats#total_conn DataThunderCgnv6ServerStats#total_conn}
  */
  readonly totalConn?: number;
  /**
  * Forward bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_stats#total_fwd_bytes DataThunderCgnv6ServerStats#total_fwd_bytes}
  */
  readonly totalFwdBytes?: number;
  /**
  * Forward packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_stats#total_fwd_pkts DataThunderCgnv6ServerStats#total_fwd_pkts}
  */
  readonly totalFwdPkts?: number;
  /**
  * Total requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_stats#total_req DataThunderCgnv6ServerStats#total_req}
  */
  readonly totalReq?: number;
  /**
  * Total request success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_stats#total_req_succ DataThunderCgnv6ServerStats#total_req_succ}
  */
  readonly totalReqSucc?: number;
  /**
  * Reverse bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_stats#total_rev_bytes DataThunderCgnv6ServerStats#total_rev_bytes}
  */
  readonly totalRevBytes?: number;
  /**
  * Reverse packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_stats#total_rev_pkts DataThunderCgnv6ServerStats#total_rev_pkts}
  */
  readonly totalRevPkts?: number;
  /**
  * Total reverse packets inspected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_stats#total_rev_pkts_inspected DataThunderCgnv6ServerStats#total_rev_pkts_inspected}
  */
  readonly totalRevPktsInspected?: number;
  /**
  * Total reverse packets with good status code inspected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_stats#total_rev_pkts_inspected_good_status_code DataThunderCgnv6ServerStats#total_rev_pkts_inspected_good_status_code}
  */
  readonly totalRevPktsInspectedGoodStatusCode?: number;
}

export function dataThunderCgnv6ServerStatsPortListStatsToTerraform(struct?: DataThunderCgnv6ServerStatsPortListStatsOutputReference | DataThunderCgnv6ServerStatsPortListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    curr_conn: cdktf.numberToTerraform(struct!.currConn),
    curr_req: cdktf.numberToTerraform(struct!.currReq),
    es_req_count: cdktf.numberToTerraform(struct!.esReqCount),
    es_resp_200: cdktf.numberToTerraform(struct!.esResp200),
    es_resp_300: cdktf.numberToTerraform(struct!.esResp300),
    es_resp_400: cdktf.numberToTerraform(struct!.esResp400),
    es_resp_500: cdktf.numberToTerraform(struct!.esResp500),
    es_resp_count: cdktf.numberToTerraform(struct!.esRespCount),
    es_resp_invalid_http: cdktf.numberToTerraform(struct!.esRespInvalidHttp),
    es_resp_other: cdktf.numberToTerraform(struct!.esRespOther),
    fastest_rsp_time: cdktf.numberToTerraform(struct!.fastestRspTime),
    last_total_conn: cdktf.numberToTerraform(struct!.lastTotalConn),
    peak_conn: cdktf.numberToTerraform(struct!.peakConn),
    response_time: cdktf.numberToTerraform(struct!.responseTime),
    slowest_rsp_time: cdktf.numberToTerraform(struct!.slowestRspTime),
    total_conn: cdktf.numberToTerraform(struct!.totalConn),
    total_fwd_bytes: cdktf.numberToTerraform(struct!.totalFwdBytes),
    total_fwd_pkts: cdktf.numberToTerraform(struct!.totalFwdPkts),
    total_req: cdktf.numberToTerraform(struct!.totalReq),
    total_req_succ: cdktf.numberToTerraform(struct!.totalReqSucc),
    total_rev_bytes: cdktf.numberToTerraform(struct!.totalRevBytes),
    total_rev_pkts: cdktf.numberToTerraform(struct!.totalRevPkts),
    total_rev_pkts_inspected: cdktf.numberToTerraform(struct!.totalRevPktsInspected),
    total_rev_pkts_inspected_good_status_code: cdktf.numberToTerraform(struct!.totalRevPktsInspectedGoodStatusCode),
  }
}


export function dataThunderCgnv6ServerStatsPortListStatsToHclTerraform(struct?: DataThunderCgnv6ServerStatsPortListStatsOutputReference | DataThunderCgnv6ServerStatsPortListStats): any {
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
    curr_req: {
      value: cdktf.numberToHclTerraform(struct!.currReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    es_req_count: {
      value: cdktf.numberToHclTerraform(struct!.esReqCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    es_resp_200: {
      value: cdktf.numberToHclTerraform(struct!.esResp200),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    es_resp_300: {
      value: cdktf.numberToHclTerraform(struct!.esResp300),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    es_resp_400: {
      value: cdktf.numberToHclTerraform(struct!.esResp400),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    es_resp_500: {
      value: cdktf.numberToHclTerraform(struct!.esResp500),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    es_resp_count: {
      value: cdktf.numberToHclTerraform(struct!.esRespCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    es_resp_invalid_http: {
      value: cdktf.numberToHclTerraform(struct!.esRespInvalidHttp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    es_resp_other: {
      value: cdktf.numberToHclTerraform(struct!.esRespOther),
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
    last_total_conn: {
      value: cdktf.numberToHclTerraform(struct!.lastTotalConn),
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
    total_rev_pkts_inspected_good_status_code: {
      value: cdktf.numberToHclTerraform(struct!.totalRevPktsInspectedGoodStatusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6ServerStatsPortListStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6ServerStatsPortListStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.currConn = this._currConn;
    }
    if (this._currReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.currReq = this._currReq;
    }
    if (this._esReqCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.esReqCount = this._esReqCount;
    }
    if (this._esResp200 !== undefined) {
      hasAnyValues = true;
      internalValueResult.esResp200 = this._esResp200;
    }
    if (this._esResp300 !== undefined) {
      hasAnyValues = true;
      internalValueResult.esResp300 = this._esResp300;
    }
    if (this._esResp400 !== undefined) {
      hasAnyValues = true;
      internalValueResult.esResp400 = this._esResp400;
    }
    if (this._esResp500 !== undefined) {
      hasAnyValues = true;
      internalValueResult.esResp500 = this._esResp500;
    }
    if (this._esRespCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.esRespCount = this._esRespCount;
    }
    if (this._esRespInvalidHttp !== undefined) {
      hasAnyValues = true;
      internalValueResult.esRespInvalidHttp = this._esRespInvalidHttp;
    }
    if (this._esRespOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.esRespOther = this._esRespOther;
    }
    if (this._fastestRspTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastestRspTime = this._fastestRspTime;
    }
    if (this._lastTotalConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastTotalConn = this._lastTotalConn;
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
    if (this._totalRevPktsInspectedGoodStatusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalRevPktsInspectedGoodStatusCode = this._totalRevPktsInspectedGoodStatusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6ServerStatsPortListStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._currConn = undefined;
      this._currReq = undefined;
      this._esReqCount = undefined;
      this._esResp200 = undefined;
      this._esResp300 = undefined;
      this._esResp400 = undefined;
      this._esResp500 = undefined;
      this._esRespCount = undefined;
      this._esRespInvalidHttp = undefined;
      this._esRespOther = undefined;
      this._fastestRspTime = undefined;
      this._lastTotalConn = undefined;
      this._peakConn = undefined;
      this._responseTime = undefined;
      this._slowestRspTime = undefined;
      this._totalConn = undefined;
      this._totalFwdBytes = undefined;
      this._totalFwdPkts = undefined;
      this._totalReq = undefined;
      this._totalReqSucc = undefined;
      this._totalRevBytes = undefined;
      this._totalRevPkts = undefined;
      this._totalRevPktsInspected = undefined;
      this._totalRevPktsInspectedGoodStatusCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._currConn = value.currConn;
      this._currReq = value.currReq;
      this._esReqCount = value.esReqCount;
      this._esResp200 = value.esResp200;
      this._esResp300 = value.esResp300;
      this._esResp400 = value.esResp400;
      this._esResp500 = value.esResp500;
      this._esRespCount = value.esRespCount;
      this._esRespInvalidHttp = value.esRespInvalidHttp;
      this._esRespOther = value.esRespOther;
      this._fastestRspTime = value.fastestRspTime;
      this._lastTotalConn = value.lastTotalConn;
      this._peakConn = value.peakConn;
      this._responseTime = value.responseTime;
      this._slowestRspTime = value.slowestRspTime;
      this._totalConn = value.totalConn;
      this._totalFwdBytes = value.totalFwdBytes;
      this._totalFwdPkts = value.totalFwdPkts;
      this._totalReq = value.totalReq;
      this._totalReqSucc = value.totalReqSucc;
      this._totalRevBytes = value.totalRevBytes;
      this._totalRevPkts = value.totalRevPkts;
      this._totalRevPktsInspected = value.totalRevPktsInspected;
      this._totalRevPktsInspectedGoodStatusCode = value.totalRevPktsInspectedGoodStatusCode;
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

  // es_req_count - computed: false, optional: true, required: false
  private _esReqCount?: number; 
  public get esReqCount() {
    return this.getNumberAttribute('es_req_count');
  }
  public set esReqCount(value: number) {
    this._esReqCount = value;
  }
  public resetEsReqCount() {
    this._esReqCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esReqCountInput() {
    return this._esReqCount;
  }

  // es_resp_200 - computed: false, optional: true, required: false
  private _esResp200?: number; 
  public get esResp200() {
    return this.getNumberAttribute('es_resp_200');
  }
  public set esResp200(value: number) {
    this._esResp200 = value;
  }
  public resetEsResp200() {
    this._esResp200 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esResp200Input() {
    return this._esResp200;
  }

  // es_resp_300 - computed: false, optional: true, required: false
  private _esResp300?: number; 
  public get esResp300() {
    return this.getNumberAttribute('es_resp_300');
  }
  public set esResp300(value: number) {
    this._esResp300 = value;
  }
  public resetEsResp300() {
    this._esResp300 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esResp300Input() {
    return this._esResp300;
  }

  // es_resp_400 - computed: false, optional: true, required: false
  private _esResp400?: number; 
  public get esResp400() {
    return this.getNumberAttribute('es_resp_400');
  }
  public set esResp400(value: number) {
    this._esResp400 = value;
  }
  public resetEsResp400() {
    this._esResp400 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esResp400Input() {
    return this._esResp400;
  }

  // es_resp_500 - computed: false, optional: true, required: false
  private _esResp500?: number; 
  public get esResp500() {
    return this.getNumberAttribute('es_resp_500');
  }
  public set esResp500(value: number) {
    this._esResp500 = value;
  }
  public resetEsResp500() {
    this._esResp500 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esResp500Input() {
    return this._esResp500;
  }

  // es_resp_count - computed: false, optional: true, required: false
  private _esRespCount?: number; 
  public get esRespCount() {
    return this.getNumberAttribute('es_resp_count');
  }
  public set esRespCount(value: number) {
    this._esRespCount = value;
  }
  public resetEsRespCount() {
    this._esRespCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esRespCountInput() {
    return this._esRespCount;
  }

  // es_resp_invalid_http - computed: false, optional: true, required: false
  private _esRespInvalidHttp?: number; 
  public get esRespInvalidHttp() {
    return this.getNumberAttribute('es_resp_invalid_http');
  }
  public set esRespInvalidHttp(value: number) {
    this._esRespInvalidHttp = value;
  }
  public resetEsRespInvalidHttp() {
    this._esRespInvalidHttp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esRespInvalidHttpInput() {
    return this._esRespInvalidHttp;
  }

  // es_resp_other - computed: false, optional: true, required: false
  private _esRespOther?: number; 
  public get esRespOther() {
    return this.getNumberAttribute('es_resp_other');
  }
  public set esRespOther(value: number) {
    this._esRespOther = value;
  }
  public resetEsRespOther() {
    this._esRespOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esRespOtherInput() {
    return this._esRespOther;
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

  // last_total_conn - computed: false, optional: true, required: false
  private _lastTotalConn?: number; 
  public get lastTotalConn() {
    return this.getNumberAttribute('last_total_conn');
  }
  public set lastTotalConn(value: number) {
    this._lastTotalConn = value;
  }
  public resetLastTotalConn() {
    this._lastTotalConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastTotalConnInput() {
    return this._lastTotalConn;
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

  // total_rev_pkts_inspected_good_status_code - computed: false, optional: true, required: false
  private _totalRevPktsInspectedGoodStatusCode?: number; 
  public get totalRevPktsInspectedGoodStatusCode() {
    return this.getNumberAttribute('total_rev_pkts_inspected_good_status_code');
  }
  public set totalRevPktsInspectedGoodStatusCode(value: number) {
    this._totalRevPktsInspectedGoodStatusCode = value;
  }
  public resetTotalRevPktsInspectedGoodStatusCode() {
    this._totalRevPktsInspectedGoodStatusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalRevPktsInspectedGoodStatusCodeInput() {
    return this._totalRevPktsInspectedGoodStatusCode;
  }
}
export interface DataThunderCgnv6ServerStatsPortListStruct {
  /**
  * Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_stats#port_number DataThunderCgnv6ServerStats#port_number}
  */
  readonly portNumber: number;
  /**
  * 'tcp': TCP Port; 'udp': UDP Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_stats#protocol DataThunderCgnv6ServerStats#protocol}
  */
  readonly protocol: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_stats#stats DataThunderCgnv6ServerStats#stats}
  */
  readonly stats?: DataThunderCgnv6ServerStatsPortListStats;
}

export function dataThunderCgnv6ServerStatsPortListStructToTerraform(struct?: DataThunderCgnv6ServerStatsPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_number: cdktf.numberToTerraform(struct!.portNumber),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    stats: dataThunderCgnv6ServerStatsPortListStatsToTerraform(struct!.stats),
  }
}


export function dataThunderCgnv6ServerStatsPortListStructToHclTerraform(struct?: DataThunderCgnv6ServerStatsPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_number: {
      value: cdktf.numberToHclTerraform(struct!.portNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stats: {
      value: dataThunderCgnv6ServerStatsPortListStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderCgnv6ServerStatsPortListStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6ServerStatsPortListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderCgnv6ServerStatsPortListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNumber = this._portNumber;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._stats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stats = this._stats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6ServerStatsPortListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portNumber = undefined;
      this._protocol = undefined;
      this._stats.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._portNumber = value.portNumber;
      this._protocol = value.protocol;
      this._stats.internalValue = value.stats;
    }
  }

  // port_number - computed: false, optional: false, required: true
  private _portNumber?: number; 
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }
  public set portNumber(value: number) {
    this._portNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumberInput() {
    return this._portNumber;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderCgnv6ServerStatsPortListStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderCgnv6ServerStatsPortListStats) {
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

export class DataThunderCgnv6ServerStatsPortListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderCgnv6ServerStatsPortListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderCgnv6ServerStatsPortListStructOutputReference {
    return new DataThunderCgnv6ServerStatsPortListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderCgnv6ServerStatsStats {
  /**
  * Current connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_stats#curr_conn DataThunderCgnv6ServerStats#curr_conn}
  */
  readonly currConn?: number;
  /**
  * Forward packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_stats#fwd_pkt DataThunderCgnv6ServerStats#fwd_pkt}
  */
  readonly fwdPkt?: number;
  /**
  * Peak connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_stats#peak_conn DataThunderCgnv6ServerStats#peak_conn}
  */
  readonly peakConn?: number;
  /**
  * Reverse Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_stats#rev_pkt DataThunderCgnv6ServerStats#rev_pkt}
  */
  readonly revPkt?: number;
  /**
  * Total connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_stats#total_conn DataThunderCgnv6ServerStats#total_conn}
  */
  readonly totalConn?: number;
}

export function dataThunderCgnv6ServerStatsStatsToTerraform(struct?: DataThunderCgnv6ServerStatsStatsOutputReference | DataThunderCgnv6ServerStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    curr_conn: cdktf.numberToTerraform(struct!.currConn),
    fwd_pkt: cdktf.numberToTerraform(struct!.fwdPkt),
    peak_conn: cdktf.numberToTerraform(struct!.peakConn),
    rev_pkt: cdktf.numberToTerraform(struct!.revPkt),
    total_conn: cdktf.numberToTerraform(struct!.totalConn),
  }
}


export function dataThunderCgnv6ServerStatsStatsToHclTerraform(struct?: DataThunderCgnv6ServerStatsStatsOutputReference | DataThunderCgnv6ServerStatsStats): any {
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
    fwd_pkt: {
      value: cdktf.numberToHclTerraform(struct!.fwdPkt),
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
    rev_pkt: {
      value: cdktf.numberToHclTerraform(struct!.revPkt),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6ServerStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6ServerStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.currConn = this._currConn;
    }
    if (this._fwdPkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdPkt = this._fwdPkt;
    }
    if (this._peakConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.peakConn = this._peakConn;
    }
    if (this._revPkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.revPkt = this._revPkt;
    }
    if (this._totalConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalConn = this._totalConn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6ServerStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._currConn = undefined;
      this._fwdPkt = undefined;
      this._peakConn = undefined;
      this._revPkt = undefined;
      this._totalConn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._currConn = value.currConn;
      this._fwdPkt = value.fwdPkt;
      this._peakConn = value.peakConn;
      this._revPkt = value.revPkt;
      this._totalConn = value.totalConn;
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

  // fwd_pkt - computed: false, optional: true, required: false
  private _fwdPkt?: number; 
  public get fwdPkt() {
    return this.getNumberAttribute('fwd_pkt');
  }
  public set fwdPkt(value: number) {
    this._fwdPkt = value;
  }
  public resetFwdPkt() {
    this._fwdPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdPktInput() {
    return this._fwdPkt;
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

  // rev_pkt - computed: false, optional: true, required: false
  private _revPkt?: number; 
  public get revPkt() {
    return this.getNumberAttribute('rev_pkt');
  }
  public set revPkt(value: number) {
    this._revPkt = value;
  }
  public resetRevPkt() {
    this._revPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revPktInput() {
    return this._revPkt;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_stats thunder_cgnv6_server_stats}
*/
export class DataThunderCgnv6ServerStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_server_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6ServerStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6ServerStats to import
  * @param importFromId The id of the existing DataThunderCgnv6ServerStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6ServerStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_server_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_stats thunder_cgnv6_server_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6ServerStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6ServerStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_server_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._portList.internalValue = config.portList;
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

  // port_list - computed: false, optional: true, required: false
  private _portList = new DataThunderCgnv6ServerStatsPortListStructList(this, "port_list", false);
  public get portList() {
    return this._portList;
  }
  public putPortList(value: DataThunderCgnv6ServerStatsPortListStruct[] | cdktf.IResolvable) {
    this._portList.internalValue = value;
  }
  public resetPortList() {
    this._portList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portListInput() {
    return this._portList.internalValue;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderCgnv6ServerStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderCgnv6ServerStatsStats) {
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
      port_list: cdktf.listMapper(dataThunderCgnv6ServerStatsPortListStructToTerraform, true)(this._portList.internalValue),
      stats: dataThunderCgnv6ServerStatsStatsToTerraform(this._stats.internalValue),
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
      port_list: {
        value: cdktf.listMapperHcl(dataThunderCgnv6ServerStatsPortListStructToHclTerraform, true)(this._portList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6ServerStatsPortListStructList",
      },
      stats: {
        value: dataThunderCgnv6ServerStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6ServerStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
