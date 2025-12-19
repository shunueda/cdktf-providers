// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_server_port_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbServerPortStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_server_port_stats#id DataThunderSlbServerPortStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_server_port_stats#port_number DataThunderSlbServerPortStats#port_number}
  */
  readonly portNumber: number;
  /**
  * 'tcp': TCP Port; 'udp': UDP Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_server_port_stats#protocol DataThunderSlbServerPortStats#protocol}
  */
  readonly protocol: string;
  /**
  * Server_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_server_port_stats#server_name DataThunderSlbServerPortStats#server_name}
  */
  readonly serverName: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_server_port_stats#stats DataThunderSlbServerPortStats#stats}
  */
  readonly stats?: DataThunderSlbServerPortStatsStats;
}
export interface DataThunderSlbServerPortStatsStats {
  /**
  * Current connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_server_port_stats#curr_conn DataThunderSlbServerPortStats#curr_conn}
  */
  readonly currConn?: number;
  /**
  * Current persistent connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_server_port_stats#curr_pconn DataThunderSlbServerPortStats#curr_pconn}
  */
  readonly currPconn?: number;
  /**
  * Current requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_server_port_stats#curr_req DataThunderSlbServerPortStats#curr_req}
  */
  readonly currReq?: number;
  /**
  * Current SSL connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_server_port_stats#curr_ssl_conn DataThunderSlbServerPortStats#curr_ssl_conn}
  */
  readonly currSslConn?: number;
  /**
  * Total proxy requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_server_port_stats#es_req_count DataThunderSlbServerPortStats#es_req_count}
  */
  readonly esReqCount?: number;
  /**
  * Response status 200
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_server_port_stats#es_resp_200 DataThunderSlbServerPortStats#es_resp_200}
  */
  readonly esResp200?: number;
  /**
  * Response status 300
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_server_port_stats#es_resp_300 DataThunderSlbServerPortStats#es_resp_300}
  */
  readonly esResp300?: number;
  /**
  * Response status 400
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_server_port_stats#es_resp_400 DataThunderSlbServerPortStats#es_resp_400}
  */
  readonly esResp400?: number;
  /**
  * Response status 500
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_server_port_stats#es_resp_500 DataThunderSlbServerPortStats#es_resp_500}
  */
  readonly esResp500?: number;
  /**
  * Total proxy response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_server_port_stats#es_resp_count DataThunderSlbServerPortStats#es_resp_count}
  */
  readonly esRespCount?: number;
  /**
  * Total non-http response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_server_port_stats#es_resp_invalid_http DataThunderSlbServerPortStats#es_resp_invalid_http}
  */
  readonly esRespInvalidHttp?: number;
  /**
  * Response status other
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_server_port_stats#es_resp_other DataThunderSlbServerPortStats#es_resp_other}
  */
  readonly esRespOther?: number;
  /**
  * Fastest response time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_server_port_stats#fastest_rsp_time DataThunderSlbServerPortStats#fastest_rsp_time}
  */
  readonly fastestRspTime?: number;
  /**
  * Last total connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_server_port_stats#last_total_conn DataThunderSlbServerPortStats#last_total_conn}
  */
  readonly lastTotalConn?: number;
  /**
  * Peak connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_server_port_stats#peak_conn DataThunderSlbServerPortStats#peak_conn}
  */
  readonly peakConn?: number;
  /**
  * Response status 1xx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_server_port_stats#resp_1xx DataThunderSlbServerPortStats#resp_1xx}
  */
  readonly resp1Xx?: number;
  /**
  * Response status 2xx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_server_port_stats#resp_2xx DataThunderSlbServerPortStats#resp_2xx}
  */
  readonly resp2Xx?: number;
  /**
  * Response status 3xx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_server_port_stats#resp_3xx DataThunderSlbServerPortStats#resp_3xx}
  */
  readonly resp3Xx?: number;
  /**
  * Response status 4xx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_server_port_stats#resp_4xx DataThunderSlbServerPortStats#resp_4xx}
  */
  readonly resp4Xx?: number;
  /**
  * Response status 5xx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_server_port_stats#resp_5xx DataThunderSlbServerPortStats#resp_5xx}
  */
  readonly resp5Xx?: number;
  /**
  * Total Response Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_server_port_stats#resp_count DataThunderSlbServerPortStats#resp_count}
  */
  readonly respCount?: number;
  /**
  * Time to First Response Byte
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_server_port_stats#resp_latency DataThunderSlbServerPortStats#resp_latency}
  */
  readonly respLatency?: number;
  /**
  * Response status Other
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_server_port_stats#resp_other DataThunderSlbServerPortStats#resp_other}
  */
  readonly respOther?: number;
  /**
  * Response time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_server_port_stats#response_time DataThunderSlbServerPortStats#response_time}
  */
  readonly responseTime?: number;
  /**
  * Slowest response time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_server_port_stats#slowest_rsp_time DataThunderSlbServerPortStats#slowest_rsp_time}
  */
  readonly slowestRspTime?: number;
  /**
  * Total connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_server_port_stats#total_conn DataThunderSlbServerPortStats#total_conn}
  */
  readonly totalConn?: number;
  /**
  * Bytes processed in forward direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_server_port_stats#total_fwd_bytes DataThunderSlbServerPortStats#total_fwd_bytes}
  */
  readonly totalFwdBytes?: number;
  /**
  * Packets processed in forward direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_server_port_stats#total_fwd_pkts DataThunderSlbServerPortStats#total_fwd_pkts}
  */
  readonly totalFwdPkts?: number;
  /**
  * Total Requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_server_port_stats#total_req DataThunderSlbServerPortStats#total_req}
  */
  readonly totalReq?: number;
  /**
  * Total requests succ
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_server_port_stats#total_req_succ DataThunderSlbServerPortStats#total_req_succ}
  */
  readonly totalReqSucc?: number;
  /**
  * Bytes processed in reverse direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_server_port_stats#total_rev_bytes DataThunderSlbServerPortStats#total_rev_bytes}
  */
  readonly totalRevBytes?: number;
  /**
  * Packets processed in reverse direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_server_port_stats#total_rev_pkts DataThunderSlbServerPortStats#total_rev_pkts}
  */
  readonly totalRevPkts?: number;
  /**
  * Total reverse packets inspected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_server_port_stats#total_rev_pkts_inspected DataThunderSlbServerPortStats#total_rev_pkts_inspected}
  */
  readonly totalRevPktsInspected?: number;
  /**
  * Total reverse packets with good status code inspected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_server_port_stats#total_rev_pkts_inspected_good_status_code DataThunderSlbServerPortStats#total_rev_pkts_inspected_good_status_code}
  */
  readonly totalRevPktsInspectedGoodStatusCode?: number;
  /**
  * Total SSL connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_server_port_stats#total_ssl_conn DataThunderSlbServerPortStats#total_ssl_conn}
  */
  readonly totalSslConn?: number;
}

export function dataThunderSlbServerPortStatsStatsToTerraform(struct?: DataThunderSlbServerPortStatsStatsOutputReference | DataThunderSlbServerPortStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    curr_conn: cdktf.numberToTerraform(struct!.currConn),
    curr_pconn: cdktf.numberToTerraform(struct!.currPconn),
    curr_req: cdktf.numberToTerraform(struct!.currReq),
    curr_ssl_conn: cdktf.numberToTerraform(struct!.currSslConn),
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
    resp_1xx: cdktf.numberToTerraform(struct!.resp1Xx),
    resp_2xx: cdktf.numberToTerraform(struct!.resp2Xx),
    resp_3xx: cdktf.numberToTerraform(struct!.resp3Xx),
    resp_4xx: cdktf.numberToTerraform(struct!.resp4Xx),
    resp_5xx: cdktf.numberToTerraform(struct!.resp5Xx),
    resp_count: cdktf.numberToTerraform(struct!.respCount),
    resp_latency: cdktf.numberToTerraform(struct!.respLatency),
    resp_other: cdktf.numberToTerraform(struct!.respOther),
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
    total_ssl_conn: cdktf.numberToTerraform(struct!.totalSslConn),
  }
}


export function dataThunderSlbServerPortStatsStatsToHclTerraform(struct?: DataThunderSlbServerPortStatsStatsOutputReference | DataThunderSlbServerPortStatsStats): any {
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
    curr_pconn: {
      value: cdktf.numberToHclTerraform(struct!.currPconn),
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
    resp_1xx: {
      value: cdktf.numberToHclTerraform(struct!.resp1Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resp_2xx: {
      value: cdktf.numberToHclTerraform(struct!.resp2Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resp_3xx: {
      value: cdktf.numberToHclTerraform(struct!.resp3Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resp_4xx: {
      value: cdktf.numberToHclTerraform(struct!.resp4Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resp_5xx: {
      value: cdktf.numberToHclTerraform(struct!.resp5Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resp_count: {
      value: cdktf.numberToHclTerraform(struct!.respCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resp_latency: {
      value: cdktf.numberToHclTerraform(struct!.respLatency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resp_other: {
      value: cdktf.numberToHclTerraform(struct!.respOther),
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

export class DataThunderSlbServerPortStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbServerPortStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.currConn = this._currConn;
    }
    if (this._currPconn !== undefined) {
      hasAnyValues = true;
      internalValueResult.currPconn = this._currPconn;
    }
    if (this._currReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.currReq = this._currReq;
    }
    if (this._currSslConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.currSslConn = this._currSslConn;
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
    if (this._resp1Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.resp1Xx = this._resp1Xx;
    }
    if (this._resp2Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.resp2Xx = this._resp2Xx;
    }
    if (this._resp3Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.resp3Xx = this._resp3Xx;
    }
    if (this._resp4Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.resp4Xx = this._resp4Xx;
    }
    if (this._resp5Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.resp5Xx = this._resp5Xx;
    }
    if (this._respCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.respCount = this._respCount;
    }
    if (this._respLatency !== undefined) {
      hasAnyValues = true;
      internalValueResult.respLatency = this._respLatency;
    }
    if (this._respOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.respOther = this._respOther;
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
    if (this._totalSslConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalSslConn = this._totalSslConn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbServerPortStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._currConn = undefined;
      this._currPconn = undefined;
      this._currReq = undefined;
      this._currSslConn = undefined;
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
      this._resp1Xx = undefined;
      this._resp2Xx = undefined;
      this._resp3Xx = undefined;
      this._resp4Xx = undefined;
      this._resp5Xx = undefined;
      this._respCount = undefined;
      this._respLatency = undefined;
      this._respOther = undefined;
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
      this._totalSslConn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._currConn = value.currConn;
      this._currPconn = value.currPconn;
      this._currReq = value.currReq;
      this._currSslConn = value.currSslConn;
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
      this._resp1Xx = value.resp1Xx;
      this._resp2Xx = value.resp2Xx;
      this._resp3Xx = value.resp3Xx;
      this._resp4Xx = value.resp4Xx;
      this._resp5Xx = value.resp5Xx;
      this._respCount = value.respCount;
      this._respLatency = value.respLatency;
      this._respOther = value.respOther;
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

  // curr_pconn - computed: false, optional: true, required: false
  private _currPconn?: number; 
  public get currPconn() {
    return this.getNumberAttribute('curr_pconn');
  }
  public set currPconn(value: number) {
    this._currPconn = value;
  }
  public resetCurrPconn() {
    this._currPconn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currPconnInput() {
    return this._currPconn;
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

  // resp_1xx - computed: false, optional: true, required: false
  private _resp1Xx?: number; 
  public get resp1Xx() {
    return this.getNumberAttribute('resp_1xx');
  }
  public set resp1Xx(value: number) {
    this._resp1Xx = value;
  }
  public resetResp1Xx() {
    this._resp1Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resp1XxInput() {
    return this._resp1Xx;
  }

  // resp_2xx - computed: false, optional: true, required: false
  private _resp2Xx?: number; 
  public get resp2Xx() {
    return this.getNumberAttribute('resp_2xx');
  }
  public set resp2Xx(value: number) {
    this._resp2Xx = value;
  }
  public resetResp2Xx() {
    this._resp2Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resp2XxInput() {
    return this._resp2Xx;
  }

  // resp_3xx - computed: false, optional: true, required: false
  private _resp3Xx?: number; 
  public get resp3Xx() {
    return this.getNumberAttribute('resp_3xx');
  }
  public set resp3Xx(value: number) {
    this._resp3Xx = value;
  }
  public resetResp3Xx() {
    this._resp3Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resp3XxInput() {
    return this._resp3Xx;
  }

  // resp_4xx - computed: false, optional: true, required: false
  private _resp4Xx?: number; 
  public get resp4Xx() {
    return this.getNumberAttribute('resp_4xx');
  }
  public set resp4Xx(value: number) {
    this._resp4Xx = value;
  }
  public resetResp4Xx() {
    this._resp4Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resp4XxInput() {
    return this._resp4Xx;
  }

  // resp_5xx - computed: false, optional: true, required: false
  private _resp5Xx?: number; 
  public get resp5Xx() {
    return this.getNumberAttribute('resp_5xx');
  }
  public set resp5Xx(value: number) {
    this._resp5Xx = value;
  }
  public resetResp5Xx() {
    this._resp5Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resp5XxInput() {
    return this._resp5Xx;
  }

  // resp_count - computed: false, optional: true, required: false
  private _respCount?: number; 
  public get respCount() {
    return this.getNumberAttribute('resp_count');
  }
  public set respCount(value: number) {
    this._respCount = value;
  }
  public resetRespCount() {
    this._respCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respCountInput() {
    return this._respCount;
  }

  // resp_latency - computed: false, optional: true, required: false
  private _respLatency?: number; 
  public get respLatency() {
    return this.getNumberAttribute('resp_latency');
  }
  public set respLatency(value: number) {
    this._respLatency = value;
  }
  public resetRespLatency() {
    this._respLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respLatencyInput() {
    return this._respLatency;
  }

  // resp_other - computed: false, optional: true, required: false
  private _respOther?: number; 
  public get respOther() {
    return this.getNumberAttribute('resp_other');
  }
  public set respOther(value: number) {
    this._respOther = value;
  }
  public resetRespOther() {
    this._respOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respOtherInput() {
    return this._respOther;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_server_port_stats thunder_slb_server_port_stats}
*/
export class DataThunderSlbServerPortStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_server_port_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbServerPortStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbServerPortStats to import
  * @param importFromId The id of the existing DataThunderSlbServerPortStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_server_port_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbServerPortStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_server_port_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_server_port_stats thunder_slb_server_port_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbServerPortStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbServerPortStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_server_port_stats',
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
  private _stats = new DataThunderSlbServerPortStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbServerPortStatsStats) {
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
      stats: dataThunderSlbServerPortStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSlbServerPortStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbServerPortStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
