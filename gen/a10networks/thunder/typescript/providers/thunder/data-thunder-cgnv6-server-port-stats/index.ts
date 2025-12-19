// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_server_port_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6ServerPortStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_server_port_stats#id DataThunderCgnv6ServerPortStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_server_port_stats#port_number DataThunderCgnv6ServerPortStats#port_number}
  */
  readonly portNumber: number;
  /**
  * 'tcp': TCP Port; 'udp': UDP Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_server_port_stats#protocol DataThunderCgnv6ServerPortStats#protocol}
  */
  readonly protocol: string;
  /**
  * Server_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_server_port_stats#server_name DataThunderCgnv6ServerPortStats#server_name}
  */
  readonly serverName: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_server_port_stats#stats DataThunderCgnv6ServerPortStats#stats}
  */
  readonly stats?: DataThunderCgnv6ServerPortStatsStats;
}
export interface DataThunderCgnv6ServerPortStatsStats {
  /**
  * Current connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_server_port_stats#curr_conn DataThunderCgnv6ServerPortStats#curr_conn}
  */
  readonly currConn?: number;
  /**
  * Current requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_server_port_stats#curr_req DataThunderCgnv6ServerPortStats#curr_req}
  */
  readonly currReq?: number;
  /**
  * Total proxy request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_server_port_stats#es_req_count DataThunderCgnv6ServerPortStats#es_req_count}
  */
  readonly esReqCount?: number;
  /**
  * Response status 200
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_server_port_stats#es_resp_200 DataThunderCgnv6ServerPortStats#es_resp_200}
  */
  readonly esResp200?: number;
  /**
  * Response status 300
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_server_port_stats#es_resp_300 DataThunderCgnv6ServerPortStats#es_resp_300}
  */
  readonly esResp300?: number;
  /**
  * Response status 400
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_server_port_stats#es_resp_400 DataThunderCgnv6ServerPortStats#es_resp_400}
  */
  readonly esResp400?: number;
  /**
  * Response status 500
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_server_port_stats#es_resp_500 DataThunderCgnv6ServerPortStats#es_resp_500}
  */
  readonly esResp500?: number;
  /**
  * Total proxy Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_server_port_stats#es_resp_count DataThunderCgnv6ServerPortStats#es_resp_count}
  */
  readonly esRespCount?: number;
  /**
  * Total non-http response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_server_port_stats#es_resp_invalid_http DataThunderCgnv6ServerPortStats#es_resp_invalid_http}
  */
  readonly esRespInvalidHttp?: number;
  /**
  * Response status other
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_server_port_stats#es_resp_other DataThunderCgnv6ServerPortStats#es_resp_other}
  */
  readonly esRespOther?: number;
  /**
  * Fastest response time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_server_port_stats#fastest_rsp_time DataThunderCgnv6ServerPortStats#fastest_rsp_time}
  */
  readonly fastestRspTime?: number;
  /**
  * Last total connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_server_port_stats#last_total_conn DataThunderCgnv6ServerPortStats#last_total_conn}
  */
  readonly lastTotalConn?: number;
  /**
  * Peak connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_server_port_stats#peak_conn DataThunderCgnv6ServerPortStats#peak_conn}
  */
  readonly peakConn?: number;
  /**
  * Response time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_server_port_stats#response_time DataThunderCgnv6ServerPortStats#response_time}
  */
  readonly responseTime?: number;
  /**
  * Slowest response time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_server_port_stats#slowest_rsp_time DataThunderCgnv6ServerPortStats#slowest_rsp_time}
  */
  readonly slowestRspTime?: number;
  /**
  * Total connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_server_port_stats#total_conn DataThunderCgnv6ServerPortStats#total_conn}
  */
  readonly totalConn?: number;
  /**
  * Forward bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_server_port_stats#total_fwd_bytes DataThunderCgnv6ServerPortStats#total_fwd_bytes}
  */
  readonly totalFwdBytes?: number;
  /**
  * Forward packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_server_port_stats#total_fwd_pkts DataThunderCgnv6ServerPortStats#total_fwd_pkts}
  */
  readonly totalFwdPkts?: number;
  /**
  * Total requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_server_port_stats#total_req DataThunderCgnv6ServerPortStats#total_req}
  */
  readonly totalReq?: number;
  /**
  * Total request success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_server_port_stats#total_req_succ DataThunderCgnv6ServerPortStats#total_req_succ}
  */
  readonly totalReqSucc?: number;
  /**
  * Reverse bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_server_port_stats#total_rev_bytes DataThunderCgnv6ServerPortStats#total_rev_bytes}
  */
  readonly totalRevBytes?: number;
  /**
  * Reverse packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_server_port_stats#total_rev_pkts DataThunderCgnv6ServerPortStats#total_rev_pkts}
  */
  readonly totalRevPkts?: number;
  /**
  * Total reverse packets inspected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_server_port_stats#total_rev_pkts_inspected DataThunderCgnv6ServerPortStats#total_rev_pkts_inspected}
  */
  readonly totalRevPktsInspected?: number;
  /**
  * Total reverse packets with good status code inspected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_server_port_stats#total_rev_pkts_inspected_good_status_code DataThunderCgnv6ServerPortStats#total_rev_pkts_inspected_good_status_code}
  */
  readonly totalRevPktsInspectedGoodStatusCode?: number;
}

export function dataThunderCgnv6ServerPortStatsStatsToTerraform(struct?: DataThunderCgnv6ServerPortStatsStatsOutputReference | DataThunderCgnv6ServerPortStatsStats): any {
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


export function dataThunderCgnv6ServerPortStatsStatsToHclTerraform(struct?: DataThunderCgnv6ServerPortStatsStatsOutputReference | DataThunderCgnv6ServerPortStatsStats): any {
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

export class DataThunderCgnv6ServerPortStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6ServerPortStatsStats | undefined {
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

  public set internalValue(value: DataThunderCgnv6ServerPortStatsStats | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_server_port_stats thunder_cgnv6_server_port_stats}
*/
export class DataThunderCgnv6ServerPortStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_server_port_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6ServerPortStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6ServerPortStats to import
  * @param importFromId The id of the existing DataThunderCgnv6ServerPortStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_server_port_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6ServerPortStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_server_port_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_server_port_stats thunder_cgnv6_server_port_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6ServerPortStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6ServerPortStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_server_port_stats',
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
    this._portNumber = config.portNumber;
    this._protocol = config.protocol;
    this._serverName = config.serverName;
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

  // server_name - computed: false, optional: false, required: true
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderCgnv6ServerPortStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderCgnv6ServerPortStatsStats) {
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
      port_number: cdktf.numberToTerraform(this._portNumber),
      protocol: cdktf.stringToTerraform(this._protocol),
      server_name: cdktf.stringToTerraform(this._serverName),
      stats: dataThunderCgnv6ServerPortStatsStatsToTerraform(this._stats.internalValue),
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
      port_number: {
        value: cdktf.numberToHclTerraform(this._portNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_name: {
        value: cdktf.stringToHclTerraform(this._serverName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats: {
        value: dataThunderCgnv6ServerPortStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6ServerPortStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
