// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_virtualserver_port_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6Dns64VirtualserverPortStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Dns64_virtualserver_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_virtualserver_port_stats#dns64_virtualserver_name DataThunderCgnv6Dns64VirtualserverPortStats#dns64_virtualserver_name}
  */
  readonly dns64VirtualserverName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_virtualserver_port_stats#id DataThunderCgnv6Dns64VirtualserverPortStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_virtualserver_port_stats#port_number DataThunderCgnv6Dns64VirtualserverPortStats#port_number}
  */
  readonly portNumber: number;
  /**
  * 'dns-udp': DNS service over UDP;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_virtualserver_port_stats#protocol DataThunderCgnv6Dns64VirtualserverPortStats#protocol}
  */
  readonly protocol: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_virtualserver_port_stats#stats DataThunderCgnv6Dns64VirtualserverPortStats#stats}
  */
  readonly stats?: DataThunderCgnv6Dns64VirtualserverPortStatsStats;
}
export interface DataThunderCgnv6Dns64VirtualserverPortStatsStats {
  /**
  * Data out of compression engine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_virtualserver_port_stats#compression_bytes_after DataThunderCgnv6Dns64VirtualserverPortStats#compression_bytes_after}
  */
  readonly compressionBytesAfter?: number;
  /**
  * Data into compression engine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_virtualserver_port_stats#compression_bytes_before DataThunderCgnv6Dns64VirtualserverPortStats#compression_bytes_before}
  */
  readonly compressionBytesBefore?: number;
  /**
  * Number of requests compressed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_virtualserver_port_stats#compression_hit DataThunderCgnv6Dns64VirtualserverPortStats#compression_hit}
  */
  readonly compressionHit?: number;
  /**
  * Number of requests NOT compressed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_virtualserver_port_stats#compression_miss DataThunderCgnv6Dns64VirtualserverPortStats#compression_miss}
  */
  readonly compressionMiss?: number;
  /**
  * Compression miss no client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_virtualserver_port_stats#compression_miss_no_client DataThunderCgnv6Dns64VirtualserverPortStats#compression_miss_no_client}
  */
  readonly compressionMissNoClient?: number;
  /**
  * Compression miss template exclusion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_virtualserver_port_stats#compression_miss_template_exclusion DataThunderCgnv6Dns64VirtualserverPortStats#compression_miss_template_exclusion}
  */
  readonly compressionMissTemplateExclusion?: number;
  /**
  * Current connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_virtualserver_port_stats#curr_conn DataThunderCgnv6Dns64VirtualserverPortStats#curr_conn}
  */
  readonly currConn?: number;
  /**
  * Current connection rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_virtualserver_port_stats#curr_conn_rate DataThunderCgnv6Dns64VirtualserverPortStats#curr_conn_rate}
  */
  readonly currConnRate?: number;
  /**
  * Current requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_virtualserver_port_stats#curr_req DataThunderCgnv6Dns64VirtualserverPortStats#curr_req}
  */
  readonly currReq?: number;
  /**
  * Total failure actions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_virtualserver_port_stats#es_total_failure_actions DataThunderCgnv6Dns64VirtualserverPortStats#es_total_failure_actions}
  */
  readonly esTotalFailureActions?: number;
  /**
  * Fastest response time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_virtualserver_port_stats#fastest_rsp_time DataThunderCgnv6Dns64VirtualserverPortStats#fastest_rsp_time}
  */
  readonly fastestRspTime?: number;
  /**
  * Last response time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_virtualserver_port_stats#last_rsp_time DataThunderCgnv6Dns64VirtualserverPortStats#last_rsp_time}
  */
  readonly lastRspTime?: number;
  /**
  * Peak connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_virtualserver_port_stats#peak_conn DataThunderCgnv6Dns64VirtualserverPortStats#peak_conn}
  */
  readonly peakConn?: number;
  /**
  * Slowest response time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_virtualserver_port_stats#slowest_rsp_time DataThunderCgnv6Dns64VirtualserverPortStats#slowest_rsp_time}
  */
  readonly slowestRspTime?: number;
  /**
  * Total TCP connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_virtualserver_port_stats#toatal_tcp_conn DataThunderCgnv6Dns64VirtualserverPortStats#toatal_tcp_conn}
  */
  readonly toatalTcpConn?: number;
  /**
  * Total connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_virtualserver_port_stats#total_conn DataThunderCgnv6Dns64VirtualserverPortStats#total_conn}
  */
  readonly totalConn?: number;
  /**
  * Total DNS packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_virtualserver_port_stats#total_dns_pkts DataThunderCgnv6Dns64VirtualserverPortStats#total_dns_pkts}
  */
  readonly totalDnsPkts?: number;
  /**
  * Total forward bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_virtualserver_port_stats#total_fwd_bytes DataThunderCgnv6Dns64VirtualserverPortStats#total_fwd_bytes}
  */
  readonly totalFwdBytes?: number;
  /**
  * Total forward packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_virtualserver_port_stats#total_fwd_pkts DataThunderCgnv6Dns64VirtualserverPortStats#total_fwd_pkts}
  */
  readonly totalFwdPkts?: number;
  /**
  * Total L4 connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_virtualserver_port_stats#total_l4_conn DataThunderCgnv6Dns64VirtualserverPortStats#total_l4_conn}
  */
  readonly totalL4Conn?: number;
  /**
  * Total L7 connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_virtualserver_port_stats#total_l7_conn DataThunderCgnv6Dns64VirtualserverPortStats#total_l7_conn}
  */
  readonly totalL7Conn?: number;
  /**
  * Total MF DNS packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_virtualserver_port_stats#total_mf_dns_pkts DataThunderCgnv6Dns64VirtualserverPortStats#total_mf_dns_pkts}
  */
  readonly totalMfDnsPkts?: number;
  /**
  * Total requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_virtualserver_port_stats#total_req DataThunderCgnv6Dns64VirtualserverPortStats#total_req}
  */
  readonly totalReq?: number;
  /**
  * Total successful requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_virtualserver_port_stats#total_req_succ DataThunderCgnv6Dns64VirtualserverPortStats#total_req_succ}
  */
  readonly totalReqSucc?: number;
  /**
  * Total reverse bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_virtualserver_port_stats#total_rev_bytes DataThunderCgnv6Dns64VirtualserverPortStats#total_rev_bytes}
  */
  readonly totalRevBytes?: number;
  /**
  * Total reverse packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_virtualserver_port_stats#total_rev_pkts DataThunderCgnv6Dns64VirtualserverPortStats#total_rev_pkts}
  */
  readonly totalRevPkts?: number;
}

export function dataThunderCgnv6Dns64VirtualserverPortStatsStatsToTerraform(struct?: DataThunderCgnv6Dns64VirtualserverPortStatsStatsOutputReference | DataThunderCgnv6Dns64VirtualserverPortStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression_bytes_after: cdktf.numberToTerraform(struct!.compressionBytesAfter),
    compression_bytes_before: cdktf.numberToTerraform(struct!.compressionBytesBefore),
    compression_hit: cdktf.numberToTerraform(struct!.compressionHit),
    compression_miss: cdktf.numberToTerraform(struct!.compressionMiss),
    compression_miss_no_client: cdktf.numberToTerraform(struct!.compressionMissNoClient),
    compression_miss_template_exclusion: cdktf.numberToTerraform(struct!.compressionMissTemplateExclusion),
    curr_conn: cdktf.numberToTerraform(struct!.currConn),
    curr_conn_rate: cdktf.numberToTerraform(struct!.currConnRate),
    curr_req: cdktf.numberToTerraform(struct!.currReq),
    es_total_failure_actions: cdktf.numberToTerraform(struct!.esTotalFailureActions),
    fastest_rsp_time: cdktf.numberToTerraform(struct!.fastestRspTime),
    last_rsp_time: cdktf.numberToTerraform(struct!.lastRspTime),
    peak_conn: cdktf.numberToTerraform(struct!.peakConn),
    slowest_rsp_time: cdktf.numberToTerraform(struct!.slowestRspTime),
    toatal_tcp_conn: cdktf.numberToTerraform(struct!.toatalTcpConn),
    total_conn: cdktf.numberToTerraform(struct!.totalConn),
    total_dns_pkts: cdktf.numberToTerraform(struct!.totalDnsPkts),
    total_fwd_bytes: cdktf.numberToTerraform(struct!.totalFwdBytes),
    total_fwd_pkts: cdktf.numberToTerraform(struct!.totalFwdPkts),
    total_l4_conn: cdktf.numberToTerraform(struct!.totalL4Conn),
    total_l7_conn: cdktf.numberToTerraform(struct!.totalL7Conn),
    total_mf_dns_pkts: cdktf.numberToTerraform(struct!.totalMfDnsPkts),
    total_req: cdktf.numberToTerraform(struct!.totalReq),
    total_req_succ: cdktf.numberToTerraform(struct!.totalReqSucc),
    total_rev_bytes: cdktf.numberToTerraform(struct!.totalRevBytes),
    total_rev_pkts: cdktf.numberToTerraform(struct!.totalRevPkts),
  }
}


export function dataThunderCgnv6Dns64VirtualserverPortStatsStatsToHclTerraform(struct?: DataThunderCgnv6Dns64VirtualserverPortStatsStatsOutputReference | DataThunderCgnv6Dns64VirtualserverPortStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression_bytes_after: {
      value: cdktf.numberToHclTerraform(struct!.compressionBytesAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_bytes_before: {
      value: cdktf.numberToHclTerraform(struct!.compressionBytesBefore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_hit: {
      value: cdktf.numberToHclTerraform(struct!.compressionHit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_miss: {
      value: cdktf.numberToHclTerraform(struct!.compressionMiss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_miss_no_client: {
      value: cdktf.numberToHclTerraform(struct!.compressionMissNoClient),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_miss_template_exclusion: {
      value: cdktf.numberToHclTerraform(struct!.compressionMissTemplateExclusion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr_conn: {
      value: cdktf.numberToHclTerraform(struct!.currConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr_conn_rate: {
      value: cdktf.numberToHclTerraform(struct!.currConnRate),
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
    es_total_failure_actions: {
      value: cdktf.numberToHclTerraform(struct!.esTotalFailureActions),
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
    last_rsp_time: {
      value: cdktf.numberToHclTerraform(struct!.lastRspTime),
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
    slowest_rsp_time: {
      value: cdktf.numberToHclTerraform(struct!.slowestRspTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    toatal_tcp_conn: {
      value: cdktf.numberToHclTerraform(struct!.toatalTcpConn),
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
    total_dns_pkts: {
      value: cdktf.numberToHclTerraform(struct!.totalDnsPkts),
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
    total_l4_conn: {
      value: cdktf.numberToHclTerraform(struct!.totalL4Conn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_l7_conn: {
      value: cdktf.numberToHclTerraform(struct!.totalL7Conn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_mf_dns_pkts: {
      value: cdktf.numberToHclTerraform(struct!.totalMfDnsPkts),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6Dns64VirtualserverPortStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6Dns64VirtualserverPortStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionBytesAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionBytesAfter = this._compressionBytesAfter;
    }
    if (this._compressionBytesBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionBytesBefore = this._compressionBytesBefore;
    }
    if (this._compressionHit !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionHit = this._compressionHit;
    }
    if (this._compressionMiss !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionMiss = this._compressionMiss;
    }
    if (this._compressionMissNoClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionMissNoClient = this._compressionMissNoClient;
    }
    if (this._compressionMissTemplateExclusion !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionMissTemplateExclusion = this._compressionMissTemplateExclusion;
    }
    if (this._currConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.currConn = this._currConn;
    }
    if (this._currConnRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currConnRate = this._currConnRate;
    }
    if (this._currReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.currReq = this._currReq;
    }
    if (this._esTotalFailureActions !== undefined) {
      hasAnyValues = true;
      internalValueResult.esTotalFailureActions = this._esTotalFailureActions;
    }
    if (this._fastestRspTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastestRspTime = this._fastestRspTime;
    }
    if (this._lastRspTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastRspTime = this._lastRspTime;
    }
    if (this._peakConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.peakConn = this._peakConn;
    }
    if (this._slowestRspTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowestRspTime = this._slowestRspTime;
    }
    if (this._toatalTcpConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.toatalTcpConn = this._toatalTcpConn;
    }
    if (this._totalConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalConn = this._totalConn;
    }
    if (this._totalDnsPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalDnsPkts = this._totalDnsPkts;
    }
    if (this._totalFwdBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalFwdBytes = this._totalFwdBytes;
    }
    if (this._totalFwdPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalFwdPkts = this._totalFwdPkts;
    }
    if (this._totalL4Conn !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalL4Conn = this._totalL4Conn;
    }
    if (this._totalL7Conn !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalL7Conn = this._totalL7Conn;
    }
    if (this._totalMfDnsPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalMfDnsPkts = this._totalMfDnsPkts;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6Dns64VirtualserverPortStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compressionBytesAfter = undefined;
      this._compressionBytesBefore = undefined;
      this._compressionHit = undefined;
      this._compressionMiss = undefined;
      this._compressionMissNoClient = undefined;
      this._compressionMissTemplateExclusion = undefined;
      this._currConn = undefined;
      this._currConnRate = undefined;
      this._currReq = undefined;
      this._esTotalFailureActions = undefined;
      this._fastestRspTime = undefined;
      this._lastRspTime = undefined;
      this._peakConn = undefined;
      this._slowestRspTime = undefined;
      this._toatalTcpConn = undefined;
      this._totalConn = undefined;
      this._totalDnsPkts = undefined;
      this._totalFwdBytes = undefined;
      this._totalFwdPkts = undefined;
      this._totalL4Conn = undefined;
      this._totalL7Conn = undefined;
      this._totalMfDnsPkts = undefined;
      this._totalReq = undefined;
      this._totalReqSucc = undefined;
      this._totalRevBytes = undefined;
      this._totalRevPkts = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compressionBytesAfter = value.compressionBytesAfter;
      this._compressionBytesBefore = value.compressionBytesBefore;
      this._compressionHit = value.compressionHit;
      this._compressionMiss = value.compressionMiss;
      this._compressionMissNoClient = value.compressionMissNoClient;
      this._compressionMissTemplateExclusion = value.compressionMissTemplateExclusion;
      this._currConn = value.currConn;
      this._currConnRate = value.currConnRate;
      this._currReq = value.currReq;
      this._esTotalFailureActions = value.esTotalFailureActions;
      this._fastestRspTime = value.fastestRspTime;
      this._lastRspTime = value.lastRspTime;
      this._peakConn = value.peakConn;
      this._slowestRspTime = value.slowestRspTime;
      this._toatalTcpConn = value.toatalTcpConn;
      this._totalConn = value.totalConn;
      this._totalDnsPkts = value.totalDnsPkts;
      this._totalFwdBytes = value.totalFwdBytes;
      this._totalFwdPkts = value.totalFwdPkts;
      this._totalL4Conn = value.totalL4Conn;
      this._totalL7Conn = value.totalL7Conn;
      this._totalMfDnsPkts = value.totalMfDnsPkts;
      this._totalReq = value.totalReq;
      this._totalReqSucc = value.totalReqSucc;
      this._totalRevBytes = value.totalRevBytes;
      this._totalRevPkts = value.totalRevPkts;
    }
  }

  // compression_bytes_after - computed: false, optional: true, required: false
  private _compressionBytesAfter?: number; 
  public get compressionBytesAfter() {
    return this.getNumberAttribute('compression_bytes_after');
  }
  public set compressionBytesAfter(value: number) {
    this._compressionBytesAfter = value;
  }
  public resetCompressionBytesAfter() {
    this._compressionBytesAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionBytesAfterInput() {
    return this._compressionBytesAfter;
  }

  // compression_bytes_before - computed: false, optional: true, required: false
  private _compressionBytesBefore?: number; 
  public get compressionBytesBefore() {
    return this.getNumberAttribute('compression_bytes_before');
  }
  public set compressionBytesBefore(value: number) {
    this._compressionBytesBefore = value;
  }
  public resetCompressionBytesBefore() {
    this._compressionBytesBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionBytesBeforeInput() {
    return this._compressionBytesBefore;
  }

  // compression_hit - computed: false, optional: true, required: false
  private _compressionHit?: number; 
  public get compressionHit() {
    return this.getNumberAttribute('compression_hit');
  }
  public set compressionHit(value: number) {
    this._compressionHit = value;
  }
  public resetCompressionHit() {
    this._compressionHit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionHitInput() {
    return this._compressionHit;
  }

  // compression_miss - computed: false, optional: true, required: false
  private _compressionMiss?: number; 
  public get compressionMiss() {
    return this.getNumberAttribute('compression_miss');
  }
  public set compressionMiss(value: number) {
    this._compressionMiss = value;
  }
  public resetCompressionMiss() {
    this._compressionMiss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionMissInput() {
    return this._compressionMiss;
  }

  // compression_miss_no_client - computed: false, optional: true, required: false
  private _compressionMissNoClient?: number; 
  public get compressionMissNoClient() {
    return this.getNumberAttribute('compression_miss_no_client');
  }
  public set compressionMissNoClient(value: number) {
    this._compressionMissNoClient = value;
  }
  public resetCompressionMissNoClient() {
    this._compressionMissNoClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionMissNoClientInput() {
    return this._compressionMissNoClient;
  }

  // compression_miss_template_exclusion - computed: false, optional: true, required: false
  private _compressionMissTemplateExclusion?: number; 
  public get compressionMissTemplateExclusion() {
    return this.getNumberAttribute('compression_miss_template_exclusion');
  }
  public set compressionMissTemplateExclusion(value: number) {
    this._compressionMissTemplateExclusion = value;
  }
  public resetCompressionMissTemplateExclusion() {
    this._compressionMissTemplateExclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionMissTemplateExclusionInput() {
    return this._compressionMissTemplateExclusion;
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

  // curr_conn_rate - computed: false, optional: true, required: false
  private _currConnRate?: number; 
  public get currConnRate() {
    return this.getNumberAttribute('curr_conn_rate');
  }
  public set currConnRate(value: number) {
    this._currConnRate = value;
  }
  public resetCurrConnRate() {
    this._currConnRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currConnRateInput() {
    return this._currConnRate;
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

  // es_total_failure_actions - computed: false, optional: true, required: false
  private _esTotalFailureActions?: number; 
  public get esTotalFailureActions() {
    return this.getNumberAttribute('es_total_failure_actions');
  }
  public set esTotalFailureActions(value: number) {
    this._esTotalFailureActions = value;
  }
  public resetEsTotalFailureActions() {
    this._esTotalFailureActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esTotalFailureActionsInput() {
    return this._esTotalFailureActions;
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

  // last_rsp_time - computed: false, optional: true, required: false
  private _lastRspTime?: number; 
  public get lastRspTime() {
    return this.getNumberAttribute('last_rsp_time');
  }
  public set lastRspTime(value: number) {
    this._lastRspTime = value;
  }
  public resetLastRspTime() {
    this._lastRspTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastRspTimeInput() {
    return this._lastRspTime;
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

  // toatal_tcp_conn - computed: false, optional: true, required: false
  private _toatalTcpConn?: number; 
  public get toatalTcpConn() {
    return this.getNumberAttribute('toatal_tcp_conn');
  }
  public set toatalTcpConn(value: number) {
    this._toatalTcpConn = value;
  }
  public resetToatalTcpConn() {
    this._toatalTcpConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toatalTcpConnInput() {
    return this._toatalTcpConn;
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

  // total_dns_pkts - computed: false, optional: true, required: false
  private _totalDnsPkts?: number; 
  public get totalDnsPkts() {
    return this.getNumberAttribute('total_dns_pkts');
  }
  public set totalDnsPkts(value: number) {
    this._totalDnsPkts = value;
  }
  public resetTotalDnsPkts() {
    this._totalDnsPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalDnsPktsInput() {
    return this._totalDnsPkts;
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

  // total_l4_conn - computed: false, optional: true, required: false
  private _totalL4Conn?: number; 
  public get totalL4Conn() {
    return this.getNumberAttribute('total_l4_conn');
  }
  public set totalL4Conn(value: number) {
    this._totalL4Conn = value;
  }
  public resetTotalL4Conn() {
    this._totalL4Conn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalL4ConnInput() {
    return this._totalL4Conn;
  }

  // total_l7_conn - computed: false, optional: true, required: false
  private _totalL7Conn?: number; 
  public get totalL7Conn() {
    return this.getNumberAttribute('total_l7_conn');
  }
  public set totalL7Conn(value: number) {
    this._totalL7Conn = value;
  }
  public resetTotalL7Conn() {
    this._totalL7Conn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalL7ConnInput() {
    return this._totalL7Conn;
  }

  // total_mf_dns_pkts - computed: false, optional: true, required: false
  private _totalMfDnsPkts?: number; 
  public get totalMfDnsPkts() {
    return this.getNumberAttribute('total_mf_dns_pkts');
  }
  public set totalMfDnsPkts(value: number) {
    this._totalMfDnsPkts = value;
  }
  public resetTotalMfDnsPkts() {
    this._totalMfDnsPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMfDnsPktsInput() {
    return this._totalMfDnsPkts;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_virtualserver_port_stats thunder_cgnv6_dns64_virtualserver_port_stats}
*/
export class DataThunderCgnv6Dns64VirtualserverPortStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_dns64_virtualserver_port_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6Dns64VirtualserverPortStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6Dns64VirtualserverPortStats to import
  * @param importFromId The id of the existing DataThunderCgnv6Dns64VirtualserverPortStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_virtualserver_port_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6Dns64VirtualserverPortStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_dns64_virtualserver_port_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_virtualserver_port_stats thunder_cgnv6_dns64_virtualserver_port_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6Dns64VirtualserverPortStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6Dns64VirtualserverPortStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_dns64_virtualserver_port_stats',
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
    this._dns64VirtualserverName = config.dns64VirtualserverName;
    this._id = config.id;
    this._portNumber = config.portNumber;
    this._protocol = config.protocol;
    this._stats.internalValue = config.stats;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns64_virtualserver_name - computed: false, optional: false, required: true
  private _dns64VirtualserverName?: string; 
  public get dns64VirtualserverName() {
    return this.getStringAttribute('dns64_virtualserver_name');
  }
  public set dns64VirtualserverName(value: string) {
    this._dns64VirtualserverName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dns64VirtualserverNameInput() {
    return this._dns64VirtualserverName;
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
  private _stats = new DataThunderCgnv6Dns64VirtualserverPortStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderCgnv6Dns64VirtualserverPortStatsStats) {
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
      dns64_virtualserver_name: cdktf.stringToTerraform(this._dns64VirtualserverName),
      id: cdktf.stringToTerraform(this._id),
      port_number: cdktf.numberToTerraform(this._portNumber),
      protocol: cdktf.stringToTerraform(this._protocol),
      stats: dataThunderCgnv6Dns64VirtualserverPortStatsStatsToTerraform(this._stats.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns64_virtualserver_name: {
        value: cdktf.stringToHclTerraform(this._dns64VirtualserverName),
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
      stats: {
        value: dataThunderCgnv6Dns64VirtualserverPortStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6Dns64VirtualserverPortStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
