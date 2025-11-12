// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVisibilityStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#id DataThunderVisibilityStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * mon_entity_telemetry_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#mon_entity_telemetry_data DataThunderVisibilityStats#mon_entity_telemetry_data}
  */
  readonly monEntityTelemetryData?: DataThunderVisibilityStatsMonEntityTelemetryData;
  /**
  * packet_capture block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#packet_capture DataThunderVisibilityStats#packet_capture}
  */
  readonly packetCapture?: DataThunderVisibilityStatsPacketCapture;
  /**
  * reporting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#reporting DataThunderVisibilityStats#reporting}
  */
  readonly reporting?: DataThunderVisibilityStatsReporting;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#stats DataThunderVisibilityStats#stats}
  */
  readonly stats?: DataThunderVisibilityStatsStats;
  /**
  * topn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#topn DataThunderVisibilityStats#topn}
  */
  readonly topn?: DataThunderVisibilityStatsTopn;
}
export interface DataThunderVisibilityStatsMonEntityTelemetryDataStats {
  /**
  * Monitored Entity telemetry Metric Average data CPU utilization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#avg_data_cpu_util DataThunderVisibilityStats#avg_data_cpu_util}
  */
  readonly avgDataCpuUtil?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#concurrent_conn DataThunderVisibilityStats#concurrent_conn}
  */
  readonly concurrentConn?: number;
  /**
  * Monitored Entity telemetry Metric Drop pkts per pkts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#drop_pkts_per_pkts DataThunderVisibilityStats#drop_pkts_per_pkts}
  */
  readonly dropPktsPerPkts?: number;
  /**
  * Monitored Entity telemetry Metric ERRORS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#errors DataThunderVisibilityStats#errors}
  */
  readonly errors?: number;
  /**
  * Monitored Entity telemetry Metric IN bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#in_bytes DataThunderVisibilityStats#in_bytes}
  */
  readonly inBytes?: number;
  /**
  * Monitored Entity telemetry Metric IN bytes per OUT bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#in_bytes_per_out_bytes DataThunderVisibilityStats#in_bytes_per_out_bytes}
  */
  readonly inBytesPerOutBytes?: number;
  /**
  * Monitored Entity telemetry Metric IN frag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#in_frag DataThunderVisibilityStats#in_frag}
  */
  readonly inFrag?: number;
  /**
  * Monitored Entity telemetry Metric IN pkts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#in_pkts DataThunderVisibilityStats#in_pkts}
  */
  readonly inPkts?: number;
  /**
  * Monitored Entity telemetry Metric IN SMALL pkt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#in_small_pkt DataThunderVisibilityStats#in_small_pkt}
  */
  readonly inSmallPkt?: number;
  /**
  * Monitored Entity telemetry Metric New Sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#new_conn DataThunderVisibilityStats#new_conn}
  */
  readonly newConn?: number;
  /**
  * Monitored Entity telemetry Metric OUT bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#out_bytes DataThunderVisibilityStats#out_bytes}
  */
  readonly outBytes?: number;
  /**
  * Monitored Entity telemetry Metric OUT frag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#out_frag DataThunderVisibilityStats#out_frag}
  */
  readonly outFrag?: number;
  /**
  * Monitored Entity telemetry Metric OUT pkts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#out_pkts DataThunderVisibilityStats#out_pkts}
  */
  readonly outPkts?: number;
  /**
  * Monitored Entity telemetry Metric OUT SMALL pkt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#out_small_pkt DataThunderVisibilityStats#out_small_pkt}
  */
  readonly outSmallPkt?: number;
  /**
  * Monitored Entity telemetry Metric Outside interface utilization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#outside_intf_util DataThunderVisibilityStats#outside_intf_util}
  */
  readonly outsideIntfUtil?: number;
  /**
  * Monitored Entity telemetry Metric TCP connection miss
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#tcp_conn_miss DataThunderVisibilityStats#tcp_conn_miss}
  */
  readonly tcpConnMiss?: number;
  /**
  * Monitored Entity telemetry Metric TCP FWD SYN per FIN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#tcp_fwd_syn_per_fin DataThunderVisibilityStats#tcp_fwd_syn_per_fin}
  */
  readonly tcpFwdSynPerFin?: number;
  /**
  * Monitored Entity telemetry Metric TCP_IN EMPTY ack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#tcp_in_empty_ack DataThunderVisibilityStats#tcp_in_empty_ack}
  */
  readonly tcpInEmptyAck?: number;
  /**
  * Monitored Entity telemetry Metric TCP IN fin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#tcp_in_fin DataThunderVisibilityStats#tcp_in_fin}
  */
  readonly tcpInFin?: number;
  /**
  * Monitored Entity telemetry Metric TCP IN payload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#tcp_in_payload DataThunderVisibilityStats#tcp_in_payload}
  */
  readonly tcpInPayload?: number;
  /**
  * Monitored Entity telemetry Metric TCP IN rexmit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#tcp_in_rexmit DataThunderVisibilityStats#tcp_in_rexmit}
  */
  readonly tcpInRexmit?: number;
  /**
  * Monitored Entity telemetry Metric TCP IN rst
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#tcp_in_rst DataThunderVisibilityStats#tcp_in_rst}
  */
  readonly tcpInRst?: number;
  /**
  * Monitored Entity telemetry Metric TCP IN syn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#tcp_in_syn DataThunderVisibilityStats#tcp_in_syn}
  */
  readonly tcpInSyn?: number;
  /**
  * Monitored Entity telemetry Metric TCP IN ZERO wnd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#tcp_in_zero_wnd DataThunderVisibilityStats#tcp_in_zero_wnd}
  */
  readonly tcpInZeroWnd?: number;
  /**
  * Monitored Entity telemetry Metric TCP OUT EMPTY ack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#tcp_out_empty_ack DataThunderVisibilityStats#tcp_out_empty_ack}
  */
  readonly tcpOutEmptyAck?: number;
  /**
  * Monitored Entity telemetry Metric TCP OUT fin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#tcp_out_fin DataThunderVisibilityStats#tcp_out_fin}
  */
  readonly tcpOutFin?: number;
  /**
  * Monitored Entity telemetry Metric TCP OUT payload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#tcp_out_payload DataThunderVisibilityStats#tcp_out_payload}
  */
  readonly tcpOutPayload?: number;
  /**
  * Monitored Entity telemetry Metric TCP OUT rexmit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#tcp_out_rexmit DataThunderVisibilityStats#tcp_out_rexmit}
  */
  readonly tcpOutRexmit?: number;
  /**
  * Monitored Entity telemetry Metric TCP OUT rst
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#tcp_out_rst DataThunderVisibilityStats#tcp_out_rst}
  */
  readonly tcpOutRst?: number;
  /**
  * Monitored Entity telemetry Metric TCP OUT syn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#tcp_out_syn DataThunderVisibilityStats#tcp_out_syn}
  */
  readonly tcpOutSyn?: number;
  /**
  * Monitored Entity telemetry Metric TCP OUT ZERO wnd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#tcp_out_zero_wnd DataThunderVisibilityStats#tcp_out_zero_wnd}
  */
  readonly tcpOutZeroWnd?: number;
}

export function dataThunderVisibilityStatsMonEntityTelemetryDataStatsToTerraform(struct?: DataThunderVisibilityStatsMonEntityTelemetryDataStatsOutputReference | DataThunderVisibilityStatsMonEntityTelemetryDataStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    avg_data_cpu_util: cdktf.numberToTerraform(struct!.avgDataCpuUtil),
    concurrent_conn: cdktf.numberToTerraform(struct!.concurrentConn),
    drop_pkts_per_pkts: cdktf.numberToTerraform(struct!.dropPktsPerPkts),
    errors: cdktf.numberToTerraform(struct!.errors),
    in_bytes: cdktf.numberToTerraform(struct!.inBytes),
    in_bytes_per_out_bytes: cdktf.numberToTerraform(struct!.inBytesPerOutBytes),
    in_frag: cdktf.numberToTerraform(struct!.inFrag),
    in_pkts: cdktf.numberToTerraform(struct!.inPkts),
    in_small_pkt: cdktf.numberToTerraform(struct!.inSmallPkt),
    new_conn: cdktf.numberToTerraform(struct!.newConn),
    out_bytes: cdktf.numberToTerraform(struct!.outBytes),
    out_frag: cdktf.numberToTerraform(struct!.outFrag),
    out_pkts: cdktf.numberToTerraform(struct!.outPkts),
    out_small_pkt: cdktf.numberToTerraform(struct!.outSmallPkt),
    outside_intf_util: cdktf.numberToTerraform(struct!.outsideIntfUtil),
    tcp_conn_miss: cdktf.numberToTerraform(struct!.tcpConnMiss),
    tcp_fwd_syn_per_fin: cdktf.numberToTerraform(struct!.tcpFwdSynPerFin),
    tcp_in_empty_ack: cdktf.numberToTerraform(struct!.tcpInEmptyAck),
    tcp_in_fin: cdktf.numberToTerraform(struct!.tcpInFin),
    tcp_in_payload: cdktf.numberToTerraform(struct!.tcpInPayload),
    tcp_in_rexmit: cdktf.numberToTerraform(struct!.tcpInRexmit),
    tcp_in_rst: cdktf.numberToTerraform(struct!.tcpInRst),
    tcp_in_syn: cdktf.numberToTerraform(struct!.tcpInSyn),
    tcp_in_zero_wnd: cdktf.numberToTerraform(struct!.tcpInZeroWnd),
    tcp_out_empty_ack: cdktf.numberToTerraform(struct!.tcpOutEmptyAck),
    tcp_out_fin: cdktf.numberToTerraform(struct!.tcpOutFin),
    tcp_out_payload: cdktf.numberToTerraform(struct!.tcpOutPayload),
    tcp_out_rexmit: cdktf.numberToTerraform(struct!.tcpOutRexmit),
    tcp_out_rst: cdktf.numberToTerraform(struct!.tcpOutRst),
    tcp_out_syn: cdktf.numberToTerraform(struct!.tcpOutSyn),
    tcp_out_zero_wnd: cdktf.numberToTerraform(struct!.tcpOutZeroWnd),
  }
}


export function dataThunderVisibilityStatsMonEntityTelemetryDataStatsToHclTerraform(struct?: DataThunderVisibilityStatsMonEntityTelemetryDataStatsOutputReference | DataThunderVisibilityStatsMonEntityTelemetryDataStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    avg_data_cpu_util: {
      value: cdktf.numberToHclTerraform(struct!.avgDataCpuUtil),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrent_conn: {
      value: cdktf.numberToHclTerraform(struct!.concurrentConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_pkts_per_pkts: {
      value: cdktf.numberToHclTerraform(struct!.dropPktsPerPkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    errors: {
      value: cdktf.numberToHclTerraform(struct!.errors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    in_bytes: {
      value: cdktf.numberToHclTerraform(struct!.inBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    in_bytes_per_out_bytes: {
      value: cdktf.numberToHclTerraform(struct!.inBytesPerOutBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    in_frag: {
      value: cdktf.numberToHclTerraform(struct!.inFrag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    in_pkts: {
      value: cdktf.numberToHclTerraform(struct!.inPkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    in_small_pkt: {
      value: cdktf.numberToHclTerraform(struct!.inSmallPkt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_conn: {
      value: cdktf.numberToHclTerraform(struct!.newConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out_bytes: {
      value: cdktf.numberToHclTerraform(struct!.outBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out_frag: {
      value: cdktf.numberToHclTerraform(struct!.outFrag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out_pkts: {
      value: cdktf.numberToHclTerraform(struct!.outPkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out_small_pkt: {
      value: cdktf.numberToHclTerraform(struct!.outSmallPkt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outside_intf_util: {
      value: cdktf.numberToHclTerraform(struct!.outsideIntfUtil),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_conn_miss: {
      value: cdktf.numberToHclTerraform(struct!.tcpConnMiss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_fwd_syn_per_fin: {
      value: cdktf.numberToHclTerraform(struct!.tcpFwdSynPerFin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_in_empty_ack: {
      value: cdktf.numberToHclTerraform(struct!.tcpInEmptyAck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_in_fin: {
      value: cdktf.numberToHclTerraform(struct!.tcpInFin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_in_payload: {
      value: cdktf.numberToHclTerraform(struct!.tcpInPayload),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_in_rexmit: {
      value: cdktf.numberToHclTerraform(struct!.tcpInRexmit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_in_rst: {
      value: cdktf.numberToHclTerraform(struct!.tcpInRst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_in_syn: {
      value: cdktf.numberToHclTerraform(struct!.tcpInSyn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_in_zero_wnd: {
      value: cdktf.numberToHclTerraform(struct!.tcpInZeroWnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_out_empty_ack: {
      value: cdktf.numberToHclTerraform(struct!.tcpOutEmptyAck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_out_fin: {
      value: cdktf.numberToHclTerraform(struct!.tcpOutFin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_out_payload: {
      value: cdktf.numberToHclTerraform(struct!.tcpOutPayload),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_out_rexmit: {
      value: cdktf.numberToHclTerraform(struct!.tcpOutRexmit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_out_rst: {
      value: cdktf.numberToHclTerraform(struct!.tcpOutRst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_out_syn: {
      value: cdktf.numberToHclTerraform(struct!.tcpOutSyn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_out_zero_wnd: {
      value: cdktf.numberToHclTerraform(struct!.tcpOutZeroWnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityStatsMonEntityTelemetryDataStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityStatsMonEntityTelemetryDataStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._avgDataCpuUtil !== undefined) {
      hasAnyValues = true;
      internalValueResult.avgDataCpuUtil = this._avgDataCpuUtil;
    }
    if (this._concurrentConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentConn = this._concurrentConn;
    }
    if (this._dropPktsPerPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropPktsPerPkts = this._dropPktsPerPkts;
    }
    if (this._errors !== undefined) {
      hasAnyValues = true;
      internalValueResult.errors = this._errors;
    }
    if (this._inBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.inBytes = this._inBytes;
    }
    if (this._inBytesPerOutBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.inBytesPerOutBytes = this._inBytesPerOutBytes;
    }
    if (this._inFrag !== undefined) {
      hasAnyValues = true;
      internalValueResult.inFrag = this._inFrag;
    }
    if (this._inPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.inPkts = this._inPkts;
    }
    if (this._inSmallPkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.inSmallPkt = this._inSmallPkt;
    }
    if (this._newConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.newConn = this._newConn;
    }
    if (this._outBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.outBytes = this._outBytes;
    }
    if (this._outFrag !== undefined) {
      hasAnyValues = true;
      internalValueResult.outFrag = this._outFrag;
    }
    if (this._outPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.outPkts = this._outPkts;
    }
    if (this._outSmallPkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.outSmallPkt = this._outSmallPkt;
    }
    if (this._outsideIntfUtil !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideIntfUtil = this._outsideIntfUtil;
    }
    if (this._tcpConnMiss !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpConnMiss = this._tcpConnMiss;
    }
    if (this._tcpFwdSynPerFin !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFwdSynPerFin = this._tcpFwdSynPerFin;
    }
    if (this._tcpInEmptyAck !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpInEmptyAck = this._tcpInEmptyAck;
    }
    if (this._tcpInFin !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpInFin = this._tcpInFin;
    }
    if (this._tcpInPayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpInPayload = this._tcpInPayload;
    }
    if (this._tcpInRexmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpInRexmit = this._tcpInRexmit;
    }
    if (this._tcpInRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpInRst = this._tcpInRst;
    }
    if (this._tcpInSyn !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpInSyn = this._tcpInSyn;
    }
    if (this._tcpInZeroWnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpInZeroWnd = this._tcpInZeroWnd;
    }
    if (this._tcpOutEmptyAck !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpOutEmptyAck = this._tcpOutEmptyAck;
    }
    if (this._tcpOutFin !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpOutFin = this._tcpOutFin;
    }
    if (this._tcpOutPayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpOutPayload = this._tcpOutPayload;
    }
    if (this._tcpOutRexmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpOutRexmit = this._tcpOutRexmit;
    }
    if (this._tcpOutRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpOutRst = this._tcpOutRst;
    }
    if (this._tcpOutSyn !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpOutSyn = this._tcpOutSyn;
    }
    if (this._tcpOutZeroWnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpOutZeroWnd = this._tcpOutZeroWnd;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityStatsMonEntityTelemetryDataStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._avgDataCpuUtil = undefined;
      this._concurrentConn = undefined;
      this._dropPktsPerPkts = undefined;
      this._errors = undefined;
      this._inBytes = undefined;
      this._inBytesPerOutBytes = undefined;
      this._inFrag = undefined;
      this._inPkts = undefined;
      this._inSmallPkt = undefined;
      this._newConn = undefined;
      this._outBytes = undefined;
      this._outFrag = undefined;
      this._outPkts = undefined;
      this._outSmallPkt = undefined;
      this._outsideIntfUtil = undefined;
      this._tcpConnMiss = undefined;
      this._tcpFwdSynPerFin = undefined;
      this._tcpInEmptyAck = undefined;
      this._tcpInFin = undefined;
      this._tcpInPayload = undefined;
      this._tcpInRexmit = undefined;
      this._tcpInRst = undefined;
      this._tcpInSyn = undefined;
      this._tcpInZeroWnd = undefined;
      this._tcpOutEmptyAck = undefined;
      this._tcpOutFin = undefined;
      this._tcpOutPayload = undefined;
      this._tcpOutRexmit = undefined;
      this._tcpOutRst = undefined;
      this._tcpOutSyn = undefined;
      this._tcpOutZeroWnd = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._avgDataCpuUtil = value.avgDataCpuUtil;
      this._concurrentConn = value.concurrentConn;
      this._dropPktsPerPkts = value.dropPktsPerPkts;
      this._errors = value.errors;
      this._inBytes = value.inBytes;
      this._inBytesPerOutBytes = value.inBytesPerOutBytes;
      this._inFrag = value.inFrag;
      this._inPkts = value.inPkts;
      this._inSmallPkt = value.inSmallPkt;
      this._newConn = value.newConn;
      this._outBytes = value.outBytes;
      this._outFrag = value.outFrag;
      this._outPkts = value.outPkts;
      this._outSmallPkt = value.outSmallPkt;
      this._outsideIntfUtil = value.outsideIntfUtil;
      this._tcpConnMiss = value.tcpConnMiss;
      this._tcpFwdSynPerFin = value.tcpFwdSynPerFin;
      this._tcpInEmptyAck = value.tcpInEmptyAck;
      this._tcpInFin = value.tcpInFin;
      this._tcpInPayload = value.tcpInPayload;
      this._tcpInRexmit = value.tcpInRexmit;
      this._tcpInRst = value.tcpInRst;
      this._tcpInSyn = value.tcpInSyn;
      this._tcpInZeroWnd = value.tcpInZeroWnd;
      this._tcpOutEmptyAck = value.tcpOutEmptyAck;
      this._tcpOutFin = value.tcpOutFin;
      this._tcpOutPayload = value.tcpOutPayload;
      this._tcpOutRexmit = value.tcpOutRexmit;
      this._tcpOutRst = value.tcpOutRst;
      this._tcpOutSyn = value.tcpOutSyn;
      this._tcpOutZeroWnd = value.tcpOutZeroWnd;
    }
  }

  // avg_data_cpu_util - computed: false, optional: true, required: false
  private _avgDataCpuUtil?: number; 
  public get avgDataCpuUtil() {
    return this.getNumberAttribute('avg_data_cpu_util');
  }
  public set avgDataCpuUtil(value: number) {
    this._avgDataCpuUtil = value;
  }
  public resetAvgDataCpuUtil() {
    this._avgDataCpuUtil = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avgDataCpuUtilInput() {
    return this._avgDataCpuUtil;
  }

  // concurrent_conn - computed: false, optional: true, required: false
  private _concurrentConn?: number; 
  public get concurrentConn() {
    return this.getNumberAttribute('concurrent_conn');
  }
  public set concurrentConn(value: number) {
    this._concurrentConn = value;
  }
  public resetConcurrentConn() {
    this._concurrentConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentConnInput() {
    return this._concurrentConn;
  }

  // drop_pkts_per_pkts - computed: false, optional: true, required: false
  private _dropPktsPerPkts?: number; 
  public get dropPktsPerPkts() {
    return this.getNumberAttribute('drop_pkts_per_pkts');
  }
  public set dropPktsPerPkts(value: number) {
    this._dropPktsPerPkts = value;
  }
  public resetDropPktsPerPkts() {
    this._dropPktsPerPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropPktsPerPktsInput() {
    return this._dropPktsPerPkts;
  }

  // errors - computed: false, optional: true, required: false
  private _errors?: number; 
  public get errors() {
    return this.getNumberAttribute('errors');
  }
  public set errors(value: number) {
    this._errors = value;
  }
  public resetErrors() {
    this._errors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorsInput() {
    return this._errors;
  }

  // in_bytes - computed: false, optional: true, required: false
  private _inBytes?: number; 
  public get inBytes() {
    return this.getNumberAttribute('in_bytes');
  }
  public set inBytes(value: number) {
    this._inBytes = value;
  }
  public resetInBytes() {
    this._inBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inBytesInput() {
    return this._inBytes;
  }

  // in_bytes_per_out_bytes - computed: false, optional: true, required: false
  private _inBytesPerOutBytes?: number; 
  public get inBytesPerOutBytes() {
    return this.getNumberAttribute('in_bytes_per_out_bytes');
  }
  public set inBytesPerOutBytes(value: number) {
    this._inBytesPerOutBytes = value;
  }
  public resetInBytesPerOutBytes() {
    this._inBytesPerOutBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inBytesPerOutBytesInput() {
    return this._inBytesPerOutBytes;
  }

  // in_frag - computed: false, optional: true, required: false
  private _inFrag?: number; 
  public get inFrag() {
    return this.getNumberAttribute('in_frag');
  }
  public set inFrag(value: number) {
    this._inFrag = value;
  }
  public resetInFrag() {
    this._inFrag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inFragInput() {
    return this._inFrag;
  }

  // in_pkts - computed: false, optional: true, required: false
  private _inPkts?: number; 
  public get inPkts() {
    return this.getNumberAttribute('in_pkts');
  }
  public set inPkts(value: number) {
    this._inPkts = value;
  }
  public resetInPkts() {
    this._inPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inPktsInput() {
    return this._inPkts;
  }

  // in_small_pkt - computed: false, optional: true, required: false
  private _inSmallPkt?: number; 
  public get inSmallPkt() {
    return this.getNumberAttribute('in_small_pkt');
  }
  public set inSmallPkt(value: number) {
    this._inSmallPkt = value;
  }
  public resetInSmallPkt() {
    this._inSmallPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inSmallPktInput() {
    return this._inSmallPkt;
  }

  // new_conn - computed: false, optional: true, required: false
  private _newConn?: number; 
  public get newConn() {
    return this.getNumberAttribute('new_conn');
  }
  public set newConn(value: number) {
    this._newConn = value;
  }
  public resetNewConn() {
    this._newConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newConnInput() {
    return this._newConn;
  }

  // out_bytes - computed: false, optional: true, required: false
  private _outBytes?: number; 
  public get outBytes() {
    return this.getNumberAttribute('out_bytes');
  }
  public set outBytes(value: number) {
    this._outBytes = value;
  }
  public resetOutBytes() {
    this._outBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outBytesInput() {
    return this._outBytes;
  }

  // out_frag - computed: false, optional: true, required: false
  private _outFrag?: number; 
  public get outFrag() {
    return this.getNumberAttribute('out_frag');
  }
  public set outFrag(value: number) {
    this._outFrag = value;
  }
  public resetOutFrag() {
    this._outFrag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outFragInput() {
    return this._outFrag;
  }

  // out_pkts - computed: false, optional: true, required: false
  private _outPkts?: number; 
  public get outPkts() {
    return this.getNumberAttribute('out_pkts');
  }
  public set outPkts(value: number) {
    this._outPkts = value;
  }
  public resetOutPkts() {
    this._outPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outPktsInput() {
    return this._outPkts;
  }

  // out_small_pkt - computed: false, optional: true, required: false
  private _outSmallPkt?: number; 
  public get outSmallPkt() {
    return this.getNumberAttribute('out_small_pkt');
  }
  public set outSmallPkt(value: number) {
    this._outSmallPkt = value;
  }
  public resetOutSmallPkt() {
    this._outSmallPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outSmallPktInput() {
    return this._outSmallPkt;
  }

  // outside_intf_util - computed: false, optional: true, required: false
  private _outsideIntfUtil?: number; 
  public get outsideIntfUtil() {
    return this.getNumberAttribute('outside_intf_util');
  }
  public set outsideIntfUtil(value: number) {
    this._outsideIntfUtil = value;
  }
  public resetOutsideIntfUtil() {
    this._outsideIntfUtil = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideIntfUtilInput() {
    return this._outsideIntfUtil;
  }

  // tcp_conn_miss - computed: false, optional: true, required: false
  private _tcpConnMiss?: number; 
  public get tcpConnMiss() {
    return this.getNumberAttribute('tcp_conn_miss');
  }
  public set tcpConnMiss(value: number) {
    this._tcpConnMiss = value;
  }
  public resetTcpConnMiss() {
    this._tcpConnMiss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpConnMissInput() {
    return this._tcpConnMiss;
  }

  // tcp_fwd_syn_per_fin - computed: false, optional: true, required: false
  private _tcpFwdSynPerFin?: number; 
  public get tcpFwdSynPerFin() {
    return this.getNumberAttribute('tcp_fwd_syn_per_fin');
  }
  public set tcpFwdSynPerFin(value: number) {
    this._tcpFwdSynPerFin = value;
  }
  public resetTcpFwdSynPerFin() {
    this._tcpFwdSynPerFin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFwdSynPerFinInput() {
    return this._tcpFwdSynPerFin;
  }

  // tcp_in_empty_ack - computed: false, optional: true, required: false
  private _tcpInEmptyAck?: number; 
  public get tcpInEmptyAck() {
    return this.getNumberAttribute('tcp_in_empty_ack');
  }
  public set tcpInEmptyAck(value: number) {
    this._tcpInEmptyAck = value;
  }
  public resetTcpInEmptyAck() {
    this._tcpInEmptyAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInEmptyAckInput() {
    return this._tcpInEmptyAck;
  }

  // tcp_in_fin - computed: false, optional: true, required: false
  private _tcpInFin?: number; 
  public get tcpInFin() {
    return this.getNumberAttribute('tcp_in_fin');
  }
  public set tcpInFin(value: number) {
    this._tcpInFin = value;
  }
  public resetTcpInFin() {
    this._tcpInFin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInFinInput() {
    return this._tcpInFin;
  }

  // tcp_in_payload - computed: false, optional: true, required: false
  private _tcpInPayload?: number; 
  public get tcpInPayload() {
    return this.getNumberAttribute('tcp_in_payload');
  }
  public set tcpInPayload(value: number) {
    this._tcpInPayload = value;
  }
  public resetTcpInPayload() {
    this._tcpInPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInPayloadInput() {
    return this._tcpInPayload;
  }

  // tcp_in_rexmit - computed: false, optional: true, required: false
  private _tcpInRexmit?: number; 
  public get tcpInRexmit() {
    return this.getNumberAttribute('tcp_in_rexmit');
  }
  public set tcpInRexmit(value: number) {
    this._tcpInRexmit = value;
  }
  public resetTcpInRexmit() {
    this._tcpInRexmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInRexmitInput() {
    return this._tcpInRexmit;
  }

  // tcp_in_rst - computed: false, optional: true, required: false
  private _tcpInRst?: number; 
  public get tcpInRst() {
    return this.getNumberAttribute('tcp_in_rst');
  }
  public set tcpInRst(value: number) {
    this._tcpInRst = value;
  }
  public resetTcpInRst() {
    this._tcpInRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInRstInput() {
    return this._tcpInRst;
  }

  // tcp_in_syn - computed: false, optional: true, required: false
  private _tcpInSyn?: number; 
  public get tcpInSyn() {
    return this.getNumberAttribute('tcp_in_syn');
  }
  public set tcpInSyn(value: number) {
    this._tcpInSyn = value;
  }
  public resetTcpInSyn() {
    this._tcpInSyn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInSynInput() {
    return this._tcpInSyn;
  }

  // tcp_in_zero_wnd - computed: false, optional: true, required: false
  private _tcpInZeroWnd?: number; 
  public get tcpInZeroWnd() {
    return this.getNumberAttribute('tcp_in_zero_wnd');
  }
  public set tcpInZeroWnd(value: number) {
    this._tcpInZeroWnd = value;
  }
  public resetTcpInZeroWnd() {
    this._tcpInZeroWnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInZeroWndInput() {
    return this._tcpInZeroWnd;
  }

  // tcp_out_empty_ack - computed: false, optional: true, required: false
  private _tcpOutEmptyAck?: number; 
  public get tcpOutEmptyAck() {
    return this.getNumberAttribute('tcp_out_empty_ack');
  }
  public set tcpOutEmptyAck(value: number) {
    this._tcpOutEmptyAck = value;
  }
  public resetTcpOutEmptyAck() {
    this._tcpOutEmptyAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpOutEmptyAckInput() {
    return this._tcpOutEmptyAck;
  }

  // tcp_out_fin - computed: false, optional: true, required: false
  private _tcpOutFin?: number; 
  public get tcpOutFin() {
    return this.getNumberAttribute('tcp_out_fin');
  }
  public set tcpOutFin(value: number) {
    this._tcpOutFin = value;
  }
  public resetTcpOutFin() {
    this._tcpOutFin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpOutFinInput() {
    return this._tcpOutFin;
  }

  // tcp_out_payload - computed: false, optional: true, required: false
  private _tcpOutPayload?: number; 
  public get tcpOutPayload() {
    return this.getNumberAttribute('tcp_out_payload');
  }
  public set tcpOutPayload(value: number) {
    this._tcpOutPayload = value;
  }
  public resetTcpOutPayload() {
    this._tcpOutPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpOutPayloadInput() {
    return this._tcpOutPayload;
  }

  // tcp_out_rexmit - computed: false, optional: true, required: false
  private _tcpOutRexmit?: number; 
  public get tcpOutRexmit() {
    return this.getNumberAttribute('tcp_out_rexmit');
  }
  public set tcpOutRexmit(value: number) {
    this._tcpOutRexmit = value;
  }
  public resetTcpOutRexmit() {
    this._tcpOutRexmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpOutRexmitInput() {
    return this._tcpOutRexmit;
  }

  // tcp_out_rst - computed: false, optional: true, required: false
  private _tcpOutRst?: number; 
  public get tcpOutRst() {
    return this.getNumberAttribute('tcp_out_rst');
  }
  public set tcpOutRst(value: number) {
    this._tcpOutRst = value;
  }
  public resetTcpOutRst() {
    this._tcpOutRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpOutRstInput() {
    return this._tcpOutRst;
  }

  // tcp_out_syn - computed: false, optional: true, required: false
  private _tcpOutSyn?: number; 
  public get tcpOutSyn() {
    return this.getNumberAttribute('tcp_out_syn');
  }
  public set tcpOutSyn(value: number) {
    this._tcpOutSyn = value;
  }
  public resetTcpOutSyn() {
    this._tcpOutSyn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpOutSynInput() {
    return this._tcpOutSyn;
  }

  // tcp_out_zero_wnd - computed: false, optional: true, required: false
  private _tcpOutZeroWnd?: number; 
  public get tcpOutZeroWnd() {
    return this.getNumberAttribute('tcp_out_zero_wnd');
  }
  public set tcpOutZeroWnd(value: number) {
    this._tcpOutZeroWnd = value;
  }
  public resetTcpOutZeroWnd() {
    this._tcpOutZeroWnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpOutZeroWndInput() {
    return this._tcpOutZeroWnd;
  }
}
export interface DataThunderVisibilityStatsMonEntityTelemetryData {
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#stats DataThunderVisibilityStats#stats}
  */
  readonly stats?: DataThunderVisibilityStatsMonEntityTelemetryDataStats;
}

export function dataThunderVisibilityStatsMonEntityTelemetryDataToTerraform(struct?: DataThunderVisibilityStatsMonEntityTelemetryDataOutputReference | DataThunderVisibilityStatsMonEntityTelemetryData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stats: dataThunderVisibilityStatsMonEntityTelemetryDataStatsToTerraform(struct!.stats),
  }
}


export function dataThunderVisibilityStatsMonEntityTelemetryDataToHclTerraform(struct?: DataThunderVisibilityStatsMonEntityTelemetryDataOutputReference | DataThunderVisibilityStatsMonEntityTelemetryData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stats: {
      value: dataThunderVisibilityStatsMonEntityTelemetryDataStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityStatsMonEntityTelemetryDataStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityStatsMonEntityTelemetryDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityStatsMonEntityTelemetryData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stats = this._stats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityStatsMonEntityTelemetryData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stats.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stats.internalValue = value.stats;
    }
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderVisibilityStatsMonEntityTelemetryDataStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderVisibilityStatsMonEntityTelemetryDataStats) {
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
export interface DataThunderVisibilityStatsPacketCaptureAutomatedCapturesStats {
  /**
  * Total failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#total_failure DataThunderVisibilityStats#total_failure}
  */
  readonly totalFailure?: number;
}

export function dataThunderVisibilityStatsPacketCaptureAutomatedCapturesStatsToTerraform(struct?: DataThunderVisibilityStatsPacketCaptureAutomatedCapturesStatsOutputReference | DataThunderVisibilityStatsPacketCaptureAutomatedCapturesStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    total_failure: cdktf.numberToTerraform(struct!.totalFailure),
  }
}


export function dataThunderVisibilityStatsPacketCaptureAutomatedCapturesStatsToHclTerraform(struct?: DataThunderVisibilityStatsPacketCaptureAutomatedCapturesStatsOutputReference | DataThunderVisibilityStatsPacketCaptureAutomatedCapturesStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    total_failure: {
      value: cdktf.numberToHclTerraform(struct!.totalFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityStatsPacketCaptureAutomatedCapturesStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityStatsPacketCaptureAutomatedCapturesStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._totalFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalFailure = this._totalFailure;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityStatsPacketCaptureAutomatedCapturesStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._totalFailure = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._totalFailure = value.totalFailure;
    }
  }

  // total_failure - computed: false, optional: true, required: false
  private _totalFailure?: number; 
  public get totalFailure() {
    return this.getNumberAttribute('total_failure');
  }
  public set totalFailure(value: number) {
    this._totalFailure = value;
  }
  public resetTotalFailure() {
    this._totalFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalFailureInput() {
    return this._totalFailure;
  }
}
export interface DataThunderVisibilityStatsPacketCaptureAutomatedCaptures {
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#stats DataThunderVisibilityStats#stats}
  */
  readonly stats?: DataThunderVisibilityStatsPacketCaptureAutomatedCapturesStats;
}

export function dataThunderVisibilityStatsPacketCaptureAutomatedCapturesToTerraform(struct?: DataThunderVisibilityStatsPacketCaptureAutomatedCapturesOutputReference | DataThunderVisibilityStatsPacketCaptureAutomatedCaptures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stats: dataThunderVisibilityStatsPacketCaptureAutomatedCapturesStatsToTerraform(struct!.stats),
  }
}


export function dataThunderVisibilityStatsPacketCaptureAutomatedCapturesToHclTerraform(struct?: DataThunderVisibilityStatsPacketCaptureAutomatedCapturesOutputReference | DataThunderVisibilityStatsPacketCaptureAutomatedCaptures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stats: {
      value: dataThunderVisibilityStatsPacketCaptureAutomatedCapturesStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityStatsPacketCaptureAutomatedCapturesStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityStatsPacketCaptureAutomatedCapturesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityStatsPacketCaptureAutomatedCaptures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stats = this._stats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityStatsPacketCaptureAutomatedCaptures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stats.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stats.internalValue = value.stats;
    }
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderVisibilityStatsPacketCaptureAutomatedCapturesStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderVisibilityStatsPacketCaptureAutomatedCapturesStats) {
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
export interface DataThunderVisibilityStatsPacketCaptureCaptureConfigListStats {
  /**
  * Auto pcapng files merged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#auto_pcap_file_merged DataThunderVisibilityStats#auto_pcap_file_merged}
  */
  readonly autoPcapFileMerged?: number;
  /**
  * Auto pcapng files merged failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#auto_pcap_file_merged_failed DataThunderVisibilityStats#auto_pcap_file_merged_failed}
  */
  readonly autoPcapFileMergedFailed?: number;
  /**
  * Dynamic Capture(ctr anomaly based) freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#concurrent_capture_by_ctr_anomaly_freed DataThunderVisibilityStats#concurrent_capture_by_ctr_anomaly_freed}
  */
  readonly concurrentCaptureByCtrAnomalyFreed?: number;
  /**
  * Dynamic Capture(ctr increment based) freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#concurrent_capture_by_ctr_increment_freed DataThunderVisibilityStats#concurrent_capture_by_ctr_increment_freed}
  */
  readonly concurrentCaptureByCtrIncrementFreed?: number;
  /**
  * Dynamic Capture(Other feature based) freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#concurrent_capture_by_ctr_other_feature_freed DataThunderVisibilityStats#concurrent_capture_by_ctr_other_feature_freed}
  */
  readonly concurrentCaptureByCtrOtherFeatureFreed?: number;
  /**
  * Error, Dynamic Capture(ctr anomaly based) create failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#concurrent_capture_create_failed_by_ctr_anomaly DataThunderVisibilityStats#concurrent_capture_create_failed_by_ctr_anomaly}
  */
  readonly concurrentCaptureCreateFailedByCtrAnomaly?: number;
  /**
  * Error, Dynamic Capture(ctr increment based) create failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#concurrent_capture_create_failed_by_ctr_increment DataThunderVisibilityStats#concurrent_capture_create_failed_by_ctr_increment}
  */
  readonly concurrentCaptureCreateFailedByCtrIncrement?: number;
  /**
  * Error, Dynamic Capture(Other feature based) create failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#concurrent_capture_create_failed_by_other_feature DataThunderVisibilityStats#concurrent_capture_create_failed_by_other_feature}
  */
  readonly concurrentCaptureCreateFailedByOtherFeature?: number;
  /**
  * Error, Dynamic Capture create failed, OOM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#concurrent_capture_create_failed_oom DataThunderVisibilityStats#concurrent_capture_create_failed_oom}
  */
  readonly concurrentCaptureCreateFailedOom?: number;
  /**
  * Dynamic 3 tuple based capture created (ctr anomaly based)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#concurrent_capture_created_by_ctr_anomaly DataThunderVisibilityStats#concurrent_capture_created_by_ctr_anomaly}
  */
  readonly concurrentCaptureCreatedByCtrAnomaly?: number;
  /**
  * Dynamic 3 tuple based capture created (ctr increment based)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#concurrent_capture_created_by_ctr_increment DataThunderVisibilityStats#concurrent_capture_created_by_ctr_increment}
  */
  readonly concurrentCaptureCreatedByCtrIncrement?: number;
  /**
  * Number of Dynamic captures(3 tuple based) finished capturing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#concurrent_capture_finished DataThunderVisibilityStats#concurrent_capture_finished}
  */
  readonly concurrentCaptureFinished?: number;
  /**
  * Dynamic Capture configured concurrent limit reached
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#concurrent_capture_limit_reached DataThunderVisibilityStats#concurrent_capture_limit_reached}
  */
  readonly concurrentCaptureLimitReached?: number;
  /**
  * Error, Conn extension creation fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#conn_ext_failed DataThunderVisibilityStats#conn_ext_failed}
  */
  readonly connExtFailed?: number;
  /**
  * Skip capturing, capture-config marked completed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#failed_as_return_completed_set DataThunderVisibilityStats#failed_as_return_completed_set}
  */
  readonly failedAsReturnCompletedSet?: number;
  /**
  * Error, Capture fail, Disk limit reached
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#failed_disk_full DataThunderVisibilityStats#failed_disk_full}
  */
  readonly failedDiskFull?: number;
  /**
  * Number of times global capture finished capturing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#global_capture_finished DataThunderVisibilityStats#global_capture_finished}
  */
  readonly globalCaptureFinished?: number;
  /**
  * Skip capturing, not packet processing path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#non_pkt_path DataThunderVisibilityStats#non_pkt_path}
  */
  readonly nonPktPath?: number;
  /**
  * Conn tag success (based on ctr anomaly, dynamic)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_conns_tagged_anomaly DataThunderVisibilityStats#num_conns_tagged_anomaly}
  */
  readonly numConnsTaggedAnomaly?: number;
  /**
  * Conn tag fail (based on ctr anomaly, dynamic)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_conns_tagged_anomaly_fail DataThunderVisibilityStats#num_conns_tagged_anomaly_fail}
  */
  readonly numConnsTaggedAnomalyFail?: number;
  /**
  * Conn tag fail, reached limit (based on ctr anomaly, dynamic)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_conns_tagged_anomaly_maxed DataThunderVisibilityStats#num_conns_tagged_anomaly_maxed}
  */
  readonly numConnsTaggedAnomalyMaxed?: number;
  /**
  * Conn tag success (based on ctr anomaly, Global)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_conns_tagged_global_anomaly DataThunderVisibilityStats#num_conns_tagged_global_anomaly}
  */
  readonly numConnsTaggedGlobalAnomaly?: number;
  /**
  * Conn tag fail (based on ctr anomaly, Global)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_conns_tagged_global_anomaly_fail DataThunderVisibilityStats#num_conns_tagged_global_anomaly_fail}
  */
  readonly numConnsTaggedGlobalAnomalyFail?: number;
  /**
  * Conn tag fail, reached limit (based on ctr anomaly, Global)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_conns_tagged_global_anomaly_maxed DataThunderVisibilityStats#num_conns_tagged_global_anomaly_maxed}
  */
  readonly numConnsTaggedGlobalAnomalyMaxed?: number;
  /**
  * Conn tag success (based on ctr increment, Global)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_conns_tagged_global_increment DataThunderVisibilityStats#num_conns_tagged_global_increment}
  */
  readonly numConnsTaggedGlobalIncrement?: number;
  /**
  * Conn tag fail (based on ctr increment, Global)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_conns_tagged_global_increment_fail DataThunderVisibilityStats#num_conns_tagged_global_increment_fail}
  */
  readonly numConnsTaggedGlobalIncrementFail?: number;
  /**
  * Conn tag fail, reached limit (based on ctr increment, Global)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_conns_tagged_global_increment_maxed DataThunderVisibilityStats#num_conns_tagged_global_increment_maxed}
  */
  readonly numConnsTaggedGlobalIncrementMaxed?: number;
  /**
  * Conn tag success (based on Other feature, Global)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_conns_tagged_global_other_feature DataThunderVisibilityStats#num_conns_tagged_global_other_feature}
  */
  readonly numConnsTaggedGlobalOtherFeature?: number;
  /**
  * Conn tag fail (based on Other feature, Global)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_conns_tagged_global_other_feature_fail DataThunderVisibilityStats#num_conns_tagged_global_other_feature_fail}
  */
  readonly numConnsTaggedGlobalOtherFeatureFail?: number;
  /**
  * Conn tag fail, reached limit (based on Other feature, Global)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_conns_tagged_global_other_feature_maxed DataThunderVisibilityStats#num_conns_tagged_global_other_feature_maxed}
  */
  readonly numConnsTaggedGlobalOtherFeatureMaxed?: number;
  /**
  * Conn tag success (based on ctr increment, dynamic)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_conns_tagged_increment DataThunderVisibilityStats#num_conns_tagged_increment}
  */
  readonly numConnsTaggedIncrement?: number;
  /**
  * Conn tag fail (based on ctr increment, dynamic)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_conns_tagged_increment_fail DataThunderVisibilityStats#num_conns_tagged_increment_fail}
  */
  readonly numConnsTaggedIncrementFail?: number;
  /**
  * Conn tag fail, reached limit (based on ctr increment, dynamic)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_conns_tagged_increment_maxed DataThunderVisibilityStats#num_conns_tagged_increment_maxed}
  */
  readonly numConnsTaggedIncrementMaxed?: number;
  /**
  * Conn tag success (based on Other feature, dynamic)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_conns_tagged_other_feature DataThunderVisibilityStats#num_conns_tagged_other_feature}
  */
  readonly numConnsTaggedOtherFeature?: number;
  /**
  * Conn tag fail (based on Other feature, dynamic)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_conns_tagged_other_feature_fail DataThunderVisibilityStats#num_conns_tagged_other_feature_fail}
  */
  readonly numConnsTaggedOtherFeatureFail?: number;
  /**
  * Conn tag fail, reached limit (based on Other feature, dynamic)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_conns_tagged_other_feature_maxed DataThunderVisibilityStats#num_conns_tagged_other_feature_maxed}
  */
  readonly numConnsTaggedOtherFeatureMaxed?: number;
  /**
  * Number of conns untagged (done with conn limit or capture)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_conns_untagged DataThunderVisibilityStats#num_conns_untagged}
  */
  readonly numConnsUntagged?: number;
  /**
  * Number of dynamic capture-config created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_dynamic_capture_config_created DataThunderVisibilityStats#num_dynamic_capture_config_created}
  */
  readonly numDynamicCaptureConfigCreated?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_dynamic_capture_config_delete_q DataThunderVisibilityStats#num_dynamic_capture_config_delete_q}
  */
  readonly numDynamicCaptureConfigDeleteQ?: number;
  /**
  * Number of dynamic capture-config deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_dynamic_capture_config_deleted DataThunderVisibilityStats#num_dynamic_capture_config_deleted}
  */
  readonly numDynamicCaptureConfigDeleted?: number;
  /**
  * Number of global objects deregistered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_global_counters_deregistered DataThunderVisibilityStats#num_global_counters_deregistered}
  */
  readonly numGlobalCountersDeregistered?: number;
  /**
  * Number of global objects registered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_global_counters_registered DataThunderVisibilityStats#num_global_counters_registered}
  */
  readonly numGlobalCountersRegistered?: number;
  /**
  * Number of times ctr Anomaly cleared
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_of_anomalies_cleared DataThunderVisibilityStats#num_of_anomalies_cleared}
  */
  readonly numOfAnomaliesCleared?: number;
  /**
  * Number of times ctr Anomaly detected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_of_anomalies_detected DataThunderVisibilityStats#num_of_anomalies_detected}
  */
  readonly numOfAnomaliesDetected?: number;
  /**
  * Error, Number of pcapng files creation failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_pcaps_create_failed DataThunderVisibilityStats#num_pcaps_create_failed}
  */
  readonly numPcapsCreateFailed?: number;
  /**
  * Number of pcapng files created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_pcaps_created DataThunderVisibilityStats#num_pcaps_created}
  */
  readonly numPcapsCreated?: number;
  /**
  * Number of per instance objects deregistered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_per_object_counters_deregistered DataThunderVisibilityStats#num_per_object_counters_deregistered}
  */
  readonly numPerObjectCountersDeregistered?: number;
  /**
  * Number of per instance objects registered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_per_object_counters_registered DataThunderVisibilityStats#num_per_object_counters_registered}
  */
  readonly numPerObjectCountersRegistered?: number;
  /**
  * Number of temporary pcapng files created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_tmp_pcaps_created DataThunderVisibilityStats#num_tmp_pcaps_created}
  */
  readonly numTmpPcapsCreated?: number;
  /**
  * Skip capturing, packet already captured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#pkt_already_captured DataThunderVisibilityStats#pkt_already_captured}
  */
  readonly pktAlreadyCaptured?: number;
  /**
  * Error, Automated Packet capture infra OOM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#pktcap_oom DataThunderVisibilityStats#pktcap_oom}
  */
  readonly pktcapOom?: number;
  /**
  * Capture fail, file size reached
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#pktcapture_failure_file_size_rchd DataThunderVisibilityStats#pktcapture_failure_file_size_rchd}
  */
  readonly pktcaptureFailureFileSizeRchd?: number;
  /**
  * Capture fail, waiting to get free buffer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#pktcapture_failure_wait_for_block DataThunderVisibilityStats#pktcapture_failure_wait_for_block}
  */
  readonly pktcaptureFailureWaitForBlock?: number;
  /**
  * Capture triggered by counter anomaly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#pktcapture_triggered_by_anomaly DataThunderVisibilityStats#pktcapture_triggered_by_anomaly}
  */
  readonly pktcaptureTriggeredByAnomaly?: number;
  /**
  * Capture triggered by counter increment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#pktcapture_triggered_by_increment DataThunderVisibilityStats#pktcapture_triggered_by_increment}
  */
  readonly pktcaptureTriggeredByIncrement?: number;
  /**
  * Capture triggered by Other feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#pktcapture_triggered_by_other_feature DataThunderVisibilityStats#pktcapture_triggered_by_other_feature}
  */
  readonly pktcaptureTriggeredByOtherFeature?: number;
  /**
  * Capture fail, Packets with untagged conn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#pktcapture_with_conn_but_not_tagged_failure DataThunderVisibilityStats#pktcapture_with_conn_but_not_tagged_failure}
  */
  readonly pktcaptureWithConnButNotTaggedFailure?: number;
  /**
  * Capture success, Packets with untagged conn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#pktcapture_with_conn_but_not_tagged_success DataThunderVisibilityStats#pktcapture_with_conn_but_not_tagged_success}
  */
  readonly pktcaptureWithConnButNotTaggedSuccess?: number;
  /**
  * Capture fail, Packets with tagged conn (dynamic capture)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#pktcapture_with_conn_failure DataThunderVisibilityStats#pktcapture_with_conn_failure}
  */
  readonly pktcaptureWithConnFailure?: number;
  /**
  * Capture fail, Packets with tagged conn (global capture)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#pktcapture_with_conn_failure_global DataThunderVisibilityStats#pktcapture_with_conn_failure_global}
  */
  readonly pktcaptureWithConnFailureGlobal?: number;
  /**
  * Capture success, Packets with tagged conn (dynamic capture)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#pktcapture_with_conn_success DataThunderVisibilityStats#pktcapture_with_conn_success}
  */
  readonly pktcaptureWithConnSuccess?: number;
  /**
  * Capture success, Packets with tagged conn (global capture)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#pktcapture_with_conn_success_global DataThunderVisibilityStats#pktcapture_with_conn_success_global}
  */
  readonly pktcaptureWithConnSuccessGlobal?: number;
  /**
  * Capture fail, Packets without conn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#pktcapture_with_no_conn_failure DataThunderVisibilityStats#pktcapture_with_no_conn_failure}
  */
  readonly pktcaptureWithNoConnFailure?: number;
  /**
  * Capture success, Packets without conn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#pktcapture_with_no_conn_success DataThunderVisibilityStats#pktcapture_with_no_conn_success}
  */
  readonly pktcaptureWithNoConnSuccess?: number;
  /**
  * Skip creating capture, conn was already captured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#skip_as_conn_already_recapture DataThunderVisibilityStats#skip_as_conn_already_recapture}
  */
  readonly skipAsConnAlreadyRecapture?: number;
  /**
  * Skip capturing, conn was created before the capture started
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#skip_capture_as_conn_created_before_smp DataThunderVisibilityStats#skip_capture_as_conn_created_before_smp}
  */
  readonly skipCaptureAsConnCreatedBeforeSmp?: number;
  /**
  * Counter increment issue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#wrong_ctr_incremented DataThunderVisibilityStats#wrong_ctr_incremented}
  */
  readonly wrongCtrIncremented?: number;
}

export function dataThunderVisibilityStatsPacketCaptureCaptureConfigListStatsToTerraform(struct?: DataThunderVisibilityStatsPacketCaptureCaptureConfigListStatsOutputReference | DataThunderVisibilityStatsPacketCaptureCaptureConfigListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_pcap_file_merged: cdktf.numberToTerraform(struct!.autoPcapFileMerged),
    auto_pcap_file_merged_failed: cdktf.numberToTerraform(struct!.autoPcapFileMergedFailed),
    concurrent_capture_by_ctr_anomaly_freed: cdktf.numberToTerraform(struct!.concurrentCaptureByCtrAnomalyFreed),
    concurrent_capture_by_ctr_increment_freed: cdktf.numberToTerraform(struct!.concurrentCaptureByCtrIncrementFreed),
    concurrent_capture_by_ctr_other_feature_freed: cdktf.numberToTerraform(struct!.concurrentCaptureByCtrOtherFeatureFreed),
    concurrent_capture_create_failed_by_ctr_anomaly: cdktf.numberToTerraform(struct!.concurrentCaptureCreateFailedByCtrAnomaly),
    concurrent_capture_create_failed_by_ctr_increment: cdktf.numberToTerraform(struct!.concurrentCaptureCreateFailedByCtrIncrement),
    concurrent_capture_create_failed_by_other_feature: cdktf.numberToTerraform(struct!.concurrentCaptureCreateFailedByOtherFeature),
    concurrent_capture_create_failed_oom: cdktf.numberToTerraform(struct!.concurrentCaptureCreateFailedOom),
    concurrent_capture_created_by_ctr_anomaly: cdktf.numberToTerraform(struct!.concurrentCaptureCreatedByCtrAnomaly),
    concurrent_capture_created_by_ctr_increment: cdktf.numberToTerraform(struct!.concurrentCaptureCreatedByCtrIncrement),
    concurrent_capture_finished: cdktf.numberToTerraform(struct!.concurrentCaptureFinished),
    concurrent_capture_limit_reached: cdktf.numberToTerraform(struct!.concurrentCaptureLimitReached),
    conn_ext_failed: cdktf.numberToTerraform(struct!.connExtFailed),
    failed_as_return_completed_set: cdktf.numberToTerraform(struct!.failedAsReturnCompletedSet),
    failed_disk_full: cdktf.numberToTerraform(struct!.failedDiskFull),
    global_capture_finished: cdktf.numberToTerraform(struct!.globalCaptureFinished),
    non_pkt_path: cdktf.numberToTerraform(struct!.nonPktPath),
    num_conns_tagged_anomaly: cdktf.numberToTerraform(struct!.numConnsTaggedAnomaly),
    num_conns_tagged_anomaly_fail: cdktf.numberToTerraform(struct!.numConnsTaggedAnomalyFail),
    num_conns_tagged_anomaly_maxed: cdktf.numberToTerraform(struct!.numConnsTaggedAnomalyMaxed),
    num_conns_tagged_global_anomaly: cdktf.numberToTerraform(struct!.numConnsTaggedGlobalAnomaly),
    num_conns_tagged_global_anomaly_fail: cdktf.numberToTerraform(struct!.numConnsTaggedGlobalAnomalyFail),
    num_conns_tagged_global_anomaly_maxed: cdktf.numberToTerraform(struct!.numConnsTaggedGlobalAnomalyMaxed),
    num_conns_tagged_global_increment: cdktf.numberToTerraform(struct!.numConnsTaggedGlobalIncrement),
    num_conns_tagged_global_increment_fail: cdktf.numberToTerraform(struct!.numConnsTaggedGlobalIncrementFail),
    num_conns_tagged_global_increment_maxed: cdktf.numberToTerraform(struct!.numConnsTaggedGlobalIncrementMaxed),
    num_conns_tagged_global_other_feature: cdktf.numberToTerraform(struct!.numConnsTaggedGlobalOtherFeature),
    num_conns_tagged_global_other_feature_fail: cdktf.numberToTerraform(struct!.numConnsTaggedGlobalOtherFeatureFail),
    num_conns_tagged_global_other_feature_maxed: cdktf.numberToTerraform(struct!.numConnsTaggedGlobalOtherFeatureMaxed),
    num_conns_tagged_increment: cdktf.numberToTerraform(struct!.numConnsTaggedIncrement),
    num_conns_tagged_increment_fail: cdktf.numberToTerraform(struct!.numConnsTaggedIncrementFail),
    num_conns_tagged_increment_maxed: cdktf.numberToTerraform(struct!.numConnsTaggedIncrementMaxed),
    num_conns_tagged_other_feature: cdktf.numberToTerraform(struct!.numConnsTaggedOtherFeature),
    num_conns_tagged_other_feature_fail: cdktf.numberToTerraform(struct!.numConnsTaggedOtherFeatureFail),
    num_conns_tagged_other_feature_maxed: cdktf.numberToTerraform(struct!.numConnsTaggedOtherFeatureMaxed),
    num_conns_untagged: cdktf.numberToTerraform(struct!.numConnsUntagged),
    num_dynamic_capture_config_created: cdktf.numberToTerraform(struct!.numDynamicCaptureConfigCreated),
    num_dynamic_capture_config_delete_q: cdktf.numberToTerraform(struct!.numDynamicCaptureConfigDeleteQ),
    num_dynamic_capture_config_deleted: cdktf.numberToTerraform(struct!.numDynamicCaptureConfigDeleted),
    num_global_counters_deregistered: cdktf.numberToTerraform(struct!.numGlobalCountersDeregistered),
    num_global_counters_registered: cdktf.numberToTerraform(struct!.numGlobalCountersRegistered),
    num_of_anomalies_cleared: cdktf.numberToTerraform(struct!.numOfAnomaliesCleared),
    num_of_anomalies_detected: cdktf.numberToTerraform(struct!.numOfAnomaliesDetected),
    num_pcaps_create_failed: cdktf.numberToTerraform(struct!.numPcapsCreateFailed),
    num_pcaps_created: cdktf.numberToTerraform(struct!.numPcapsCreated),
    num_per_object_counters_deregistered: cdktf.numberToTerraform(struct!.numPerObjectCountersDeregistered),
    num_per_object_counters_registered: cdktf.numberToTerraform(struct!.numPerObjectCountersRegistered),
    num_tmp_pcaps_created: cdktf.numberToTerraform(struct!.numTmpPcapsCreated),
    pkt_already_captured: cdktf.numberToTerraform(struct!.pktAlreadyCaptured),
    pktcap_oom: cdktf.numberToTerraform(struct!.pktcapOom),
    pktcapture_failure_file_size_rchd: cdktf.numberToTerraform(struct!.pktcaptureFailureFileSizeRchd),
    pktcapture_failure_wait_for_block: cdktf.numberToTerraform(struct!.pktcaptureFailureWaitForBlock),
    pktcapture_triggered_by_anomaly: cdktf.numberToTerraform(struct!.pktcaptureTriggeredByAnomaly),
    pktcapture_triggered_by_increment: cdktf.numberToTerraform(struct!.pktcaptureTriggeredByIncrement),
    pktcapture_triggered_by_other_feature: cdktf.numberToTerraform(struct!.pktcaptureTriggeredByOtherFeature),
    pktcapture_with_conn_but_not_tagged_failure: cdktf.numberToTerraform(struct!.pktcaptureWithConnButNotTaggedFailure),
    pktcapture_with_conn_but_not_tagged_success: cdktf.numberToTerraform(struct!.pktcaptureWithConnButNotTaggedSuccess),
    pktcapture_with_conn_failure: cdktf.numberToTerraform(struct!.pktcaptureWithConnFailure),
    pktcapture_with_conn_failure_global: cdktf.numberToTerraform(struct!.pktcaptureWithConnFailureGlobal),
    pktcapture_with_conn_success: cdktf.numberToTerraform(struct!.pktcaptureWithConnSuccess),
    pktcapture_with_conn_success_global: cdktf.numberToTerraform(struct!.pktcaptureWithConnSuccessGlobal),
    pktcapture_with_no_conn_failure: cdktf.numberToTerraform(struct!.pktcaptureWithNoConnFailure),
    pktcapture_with_no_conn_success: cdktf.numberToTerraform(struct!.pktcaptureWithNoConnSuccess),
    skip_as_conn_already_recapture: cdktf.numberToTerraform(struct!.skipAsConnAlreadyRecapture),
    skip_capture_as_conn_created_before_smp: cdktf.numberToTerraform(struct!.skipCaptureAsConnCreatedBeforeSmp),
    wrong_ctr_incremented: cdktf.numberToTerraform(struct!.wrongCtrIncremented),
  }
}


export function dataThunderVisibilityStatsPacketCaptureCaptureConfigListStatsToHclTerraform(struct?: DataThunderVisibilityStatsPacketCaptureCaptureConfigListStatsOutputReference | DataThunderVisibilityStatsPacketCaptureCaptureConfigListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_pcap_file_merged: {
      value: cdktf.numberToHclTerraform(struct!.autoPcapFileMerged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auto_pcap_file_merged_failed: {
      value: cdktf.numberToHclTerraform(struct!.autoPcapFileMergedFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrent_capture_by_ctr_anomaly_freed: {
      value: cdktf.numberToHclTerraform(struct!.concurrentCaptureByCtrAnomalyFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrent_capture_by_ctr_increment_freed: {
      value: cdktf.numberToHclTerraform(struct!.concurrentCaptureByCtrIncrementFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrent_capture_by_ctr_other_feature_freed: {
      value: cdktf.numberToHclTerraform(struct!.concurrentCaptureByCtrOtherFeatureFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrent_capture_create_failed_by_ctr_anomaly: {
      value: cdktf.numberToHclTerraform(struct!.concurrentCaptureCreateFailedByCtrAnomaly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrent_capture_create_failed_by_ctr_increment: {
      value: cdktf.numberToHclTerraform(struct!.concurrentCaptureCreateFailedByCtrIncrement),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrent_capture_create_failed_by_other_feature: {
      value: cdktf.numberToHclTerraform(struct!.concurrentCaptureCreateFailedByOtherFeature),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrent_capture_create_failed_oom: {
      value: cdktf.numberToHclTerraform(struct!.concurrentCaptureCreateFailedOom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrent_capture_created_by_ctr_anomaly: {
      value: cdktf.numberToHclTerraform(struct!.concurrentCaptureCreatedByCtrAnomaly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrent_capture_created_by_ctr_increment: {
      value: cdktf.numberToHclTerraform(struct!.concurrentCaptureCreatedByCtrIncrement),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrent_capture_finished: {
      value: cdktf.numberToHclTerraform(struct!.concurrentCaptureFinished),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrent_capture_limit_reached: {
      value: cdktf.numberToHclTerraform(struct!.concurrentCaptureLimitReached),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_ext_failed: {
      value: cdktf.numberToHclTerraform(struct!.connExtFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    failed_as_return_completed_set: {
      value: cdktf.numberToHclTerraform(struct!.failedAsReturnCompletedSet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    failed_disk_full: {
      value: cdktf.numberToHclTerraform(struct!.failedDiskFull),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    global_capture_finished: {
      value: cdktf.numberToHclTerraform(struct!.globalCaptureFinished),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    non_pkt_path: {
      value: cdktf.numberToHclTerraform(struct!.nonPktPath),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_anomaly: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedAnomaly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_anomaly_fail: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedAnomalyFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_anomaly_maxed: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedAnomalyMaxed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_global_anomaly: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedGlobalAnomaly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_global_anomaly_fail: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedGlobalAnomalyFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_global_anomaly_maxed: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedGlobalAnomalyMaxed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_global_increment: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedGlobalIncrement),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_global_increment_fail: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedGlobalIncrementFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_global_increment_maxed: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedGlobalIncrementMaxed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_global_other_feature: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedGlobalOtherFeature),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_global_other_feature_fail: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedGlobalOtherFeatureFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_global_other_feature_maxed: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedGlobalOtherFeatureMaxed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_increment: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedIncrement),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_increment_fail: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedIncrementFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_increment_maxed: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedIncrementMaxed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_other_feature: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedOtherFeature),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_other_feature_fail: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedOtherFeatureFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_other_feature_maxed: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedOtherFeatureMaxed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_untagged: {
      value: cdktf.numberToHclTerraform(struct!.numConnsUntagged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_dynamic_capture_config_created: {
      value: cdktf.numberToHclTerraform(struct!.numDynamicCaptureConfigCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_dynamic_capture_config_delete_q: {
      value: cdktf.numberToHclTerraform(struct!.numDynamicCaptureConfigDeleteQ),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_dynamic_capture_config_deleted: {
      value: cdktf.numberToHclTerraform(struct!.numDynamicCaptureConfigDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_global_counters_deregistered: {
      value: cdktf.numberToHclTerraform(struct!.numGlobalCountersDeregistered),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_global_counters_registered: {
      value: cdktf.numberToHclTerraform(struct!.numGlobalCountersRegistered),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_of_anomalies_cleared: {
      value: cdktf.numberToHclTerraform(struct!.numOfAnomaliesCleared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_of_anomalies_detected: {
      value: cdktf.numberToHclTerraform(struct!.numOfAnomaliesDetected),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_pcaps_create_failed: {
      value: cdktf.numberToHclTerraform(struct!.numPcapsCreateFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_pcaps_created: {
      value: cdktf.numberToHclTerraform(struct!.numPcapsCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_per_object_counters_deregistered: {
      value: cdktf.numberToHclTerraform(struct!.numPerObjectCountersDeregistered),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_per_object_counters_registered: {
      value: cdktf.numberToHclTerraform(struct!.numPerObjectCountersRegistered),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_tmp_pcaps_created: {
      value: cdktf.numberToHclTerraform(struct!.numTmpPcapsCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkt_already_captured: {
      value: cdktf.numberToHclTerraform(struct!.pktAlreadyCaptured),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktcap_oom: {
      value: cdktf.numberToHclTerraform(struct!.pktcapOom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktcapture_failure_file_size_rchd: {
      value: cdktf.numberToHclTerraform(struct!.pktcaptureFailureFileSizeRchd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktcapture_failure_wait_for_block: {
      value: cdktf.numberToHclTerraform(struct!.pktcaptureFailureWaitForBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktcapture_triggered_by_anomaly: {
      value: cdktf.numberToHclTerraform(struct!.pktcaptureTriggeredByAnomaly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktcapture_triggered_by_increment: {
      value: cdktf.numberToHclTerraform(struct!.pktcaptureTriggeredByIncrement),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktcapture_triggered_by_other_feature: {
      value: cdktf.numberToHclTerraform(struct!.pktcaptureTriggeredByOtherFeature),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktcapture_with_conn_but_not_tagged_failure: {
      value: cdktf.numberToHclTerraform(struct!.pktcaptureWithConnButNotTaggedFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktcapture_with_conn_but_not_tagged_success: {
      value: cdktf.numberToHclTerraform(struct!.pktcaptureWithConnButNotTaggedSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktcapture_with_conn_failure: {
      value: cdktf.numberToHclTerraform(struct!.pktcaptureWithConnFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktcapture_with_conn_failure_global: {
      value: cdktf.numberToHclTerraform(struct!.pktcaptureWithConnFailureGlobal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktcapture_with_conn_success: {
      value: cdktf.numberToHclTerraform(struct!.pktcaptureWithConnSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktcapture_with_conn_success_global: {
      value: cdktf.numberToHclTerraform(struct!.pktcaptureWithConnSuccessGlobal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktcapture_with_no_conn_failure: {
      value: cdktf.numberToHclTerraform(struct!.pktcaptureWithNoConnFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktcapture_with_no_conn_success: {
      value: cdktf.numberToHclTerraform(struct!.pktcaptureWithNoConnSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    skip_as_conn_already_recapture: {
      value: cdktf.numberToHclTerraform(struct!.skipAsConnAlreadyRecapture),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    skip_capture_as_conn_created_before_smp: {
      value: cdktf.numberToHclTerraform(struct!.skipCaptureAsConnCreatedBeforeSmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wrong_ctr_incremented: {
      value: cdktf.numberToHclTerraform(struct!.wrongCtrIncremented),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityStatsPacketCaptureCaptureConfigListStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityStatsPacketCaptureCaptureConfigListStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoPcapFileMerged !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoPcapFileMerged = this._autoPcapFileMerged;
    }
    if (this._autoPcapFileMergedFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoPcapFileMergedFailed = this._autoPcapFileMergedFailed;
    }
    if (this._concurrentCaptureByCtrAnomalyFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentCaptureByCtrAnomalyFreed = this._concurrentCaptureByCtrAnomalyFreed;
    }
    if (this._concurrentCaptureByCtrIncrementFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentCaptureByCtrIncrementFreed = this._concurrentCaptureByCtrIncrementFreed;
    }
    if (this._concurrentCaptureByCtrOtherFeatureFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentCaptureByCtrOtherFeatureFreed = this._concurrentCaptureByCtrOtherFeatureFreed;
    }
    if (this._concurrentCaptureCreateFailedByCtrAnomaly !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentCaptureCreateFailedByCtrAnomaly = this._concurrentCaptureCreateFailedByCtrAnomaly;
    }
    if (this._concurrentCaptureCreateFailedByCtrIncrement !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentCaptureCreateFailedByCtrIncrement = this._concurrentCaptureCreateFailedByCtrIncrement;
    }
    if (this._concurrentCaptureCreateFailedByOtherFeature !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentCaptureCreateFailedByOtherFeature = this._concurrentCaptureCreateFailedByOtherFeature;
    }
    if (this._concurrentCaptureCreateFailedOom !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentCaptureCreateFailedOom = this._concurrentCaptureCreateFailedOom;
    }
    if (this._concurrentCaptureCreatedByCtrAnomaly !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentCaptureCreatedByCtrAnomaly = this._concurrentCaptureCreatedByCtrAnomaly;
    }
    if (this._concurrentCaptureCreatedByCtrIncrement !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentCaptureCreatedByCtrIncrement = this._concurrentCaptureCreatedByCtrIncrement;
    }
    if (this._concurrentCaptureFinished !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentCaptureFinished = this._concurrentCaptureFinished;
    }
    if (this._concurrentCaptureLimitReached !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentCaptureLimitReached = this._concurrentCaptureLimitReached;
    }
    if (this._connExtFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.connExtFailed = this._connExtFailed;
    }
    if (this._failedAsReturnCompletedSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.failedAsReturnCompletedSet = this._failedAsReturnCompletedSet;
    }
    if (this._failedDiskFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.failedDiskFull = this._failedDiskFull;
    }
    if (this._globalCaptureFinished !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalCaptureFinished = this._globalCaptureFinished;
    }
    if (this._nonPktPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonPktPath = this._nonPktPath;
    }
    if (this._numConnsTaggedAnomaly !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedAnomaly = this._numConnsTaggedAnomaly;
    }
    if (this._numConnsTaggedAnomalyFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedAnomalyFail = this._numConnsTaggedAnomalyFail;
    }
    if (this._numConnsTaggedAnomalyMaxed !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedAnomalyMaxed = this._numConnsTaggedAnomalyMaxed;
    }
    if (this._numConnsTaggedGlobalAnomaly !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedGlobalAnomaly = this._numConnsTaggedGlobalAnomaly;
    }
    if (this._numConnsTaggedGlobalAnomalyFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedGlobalAnomalyFail = this._numConnsTaggedGlobalAnomalyFail;
    }
    if (this._numConnsTaggedGlobalAnomalyMaxed !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedGlobalAnomalyMaxed = this._numConnsTaggedGlobalAnomalyMaxed;
    }
    if (this._numConnsTaggedGlobalIncrement !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedGlobalIncrement = this._numConnsTaggedGlobalIncrement;
    }
    if (this._numConnsTaggedGlobalIncrementFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedGlobalIncrementFail = this._numConnsTaggedGlobalIncrementFail;
    }
    if (this._numConnsTaggedGlobalIncrementMaxed !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedGlobalIncrementMaxed = this._numConnsTaggedGlobalIncrementMaxed;
    }
    if (this._numConnsTaggedGlobalOtherFeature !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedGlobalOtherFeature = this._numConnsTaggedGlobalOtherFeature;
    }
    if (this._numConnsTaggedGlobalOtherFeatureFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedGlobalOtherFeatureFail = this._numConnsTaggedGlobalOtherFeatureFail;
    }
    if (this._numConnsTaggedGlobalOtherFeatureMaxed !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedGlobalOtherFeatureMaxed = this._numConnsTaggedGlobalOtherFeatureMaxed;
    }
    if (this._numConnsTaggedIncrement !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedIncrement = this._numConnsTaggedIncrement;
    }
    if (this._numConnsTaggedIncrementFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedIncrementFail = this._numConnsTaggedIncrementFail;
    }
    if (this._numConnsTaggedIncrementMaxed !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedIncrementMaxed = this._numConnsTaggedIncrementMaxed;
    }
    if (this._numConnsTaggedOtherFeature !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedOtherFeature = this._numConnsTaggedOtherFeature;
    }
    if (this._numConnsTaggedOtherFeatureFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedOtherFeatureFail = this._numConnsTaggedOtherFeatureFail;
    }
    if (this._numConnsTaggedOtherFeatureMaxed !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedOtherFeatureMaxed = this._numConnsTaggedOtherFeatureMaxed;
    }
    if (this._numConnsUntagged !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsUntagged = this._numConnsUntagged;
    }
    if (this._numDynamicCaptureConfigCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.numDynamicCaptureConfigCreated = this._numDynamicCaptureConfigCreated;
    }
    if (this._numDynamicCaptureConfigDeleteQ !== undefined) {
      hasAnyValues = true;
      internalValueResult.numDynamicCaptureConfigDeleteQ = this._numDynamicCaptureConfigDeleteQ;
    }
    if (this._numDynamicCaptureConfigDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.numDynamicCaptureConfigDeleted = this._numDynamicCaptureConfigDeleted;
    }
    if (this._numGlobalCountersDeregistered !== undefined) {
      hasAnyValues = true;
      internalValueResult.numGlobalCountersDeregistered = this._numGlobalCountersDeregistered;
    }
    if (this._numGlobalCountersRegistered !== undefined) {
      hasAnyValues = true;
      internalValueResult.numGlobalCountersRegistered = this._numGlobalCountersRegistered;
    }
    if (this._numOfAnomaliesCleared !== undefined) {
      hasAnyValues = true;
      internalValueResult.numOfAnomaliesCleared = this._numOfAnomaliesCleared;
    }
    if (this._numOfAnomaliesDetected !== undefined) {
      hasAnyValues = true;
      internalValueResult.numOfAnomaliesDetected = this._numOfAnomaliesDetected;
    }
    if (this._numPcapsCreateFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.numPcapsCreateFailed = this._numPcapsCreateFailed;
    }
    if (this._numPcapsCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.numPcapsCreated = this._numPcapsCreated;
    }
    if (this._numPerObjectCountersDeregistered !== undefined) {
      hasAnyValues = true;
      internalValueResult.numPerObjectCountersDeregistered = this._numPerObjectCountersDeregistered;
    }
    if (this._numPerObjectCountersRegistered !== undefined) {
      hasAnyValues = true;
      internalValueResult.numPerObjectCountersRegistered = this._numPerObjectCountersRegistered;
    }
    if (this._numTmpPcapsCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.numTmpPcapsCreated = this._numTmpPcapsCreated;
    }
    if (this._pktAlreadyCaptured !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktAlreadyCaptured = this._pktAlreadyCaptured;
    }
    if (this._pktcapOom !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktcapOom = this._pktcapOom;
    }
    if (this._pktcaptureFailureFileSizeRchd !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktcaptureFailureFileSizeRchd = this._pktcaptureFailureFileSizeRchd;
    }
    if (this._pktcaptureFailureWaitForBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktcaptureFailureWaitForBlock = this._pktcaptureFailureWaitForBlock;
    }
    if (this._pktcaptureTriggeredByAnomaly !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktcaptureTriggeredByAnomaly = this._pktcaptureTriggeredByAnomaly;
    }
    if (this._pktcaptureTriggeredByIncrement !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktcaptureTriggeredByIncrement = this._pktcaptureTriggeredByIncrement;
    }
    if (this._pktcaptureTriggeredByOtherFeature !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktcaptureTriggeredByOtherFeature = this._pktcaptureTriggeredByOtherFeature;
    }
    if (this._pktcaptureWithConnButNotTaggedFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktcaptureWithConnButNotTaggedFailure = this._pktcaptureWithConnButNotTaggedFailure;
    }
    if (this._pktcaptureWithConnButNotTaggedSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktcaptureWithConnButNotTaggedSuccess = this._pktcaptureWithConnButNotTaggedSuccess;
    }
    if (this._pktcaptureWithConnFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktcaptureWithConnFailure = this._pktcaptureWithConnFailure;
    }
    if (this._pktcaptureWithConnFailureGlobal !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktcaptureWithConnFailureGlobal = this._pktcaptureWithConnFailureGlobal;
    }
    if (this._pktcaptureWithConnSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktcaptureWithConnSuccess = this._pktcaptureWithConnSuccess;
    }
    if (this._pktcaptureWithConnSuccessGlobal !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktcaptureWithConnSuccessGlobal = this._pktcaptureWithConnSuccessGlobal;
    }
    if (this._pktcaptureWithNoConnFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktcaptureWithNoConnFailure = this._pktcaptureWithNoConnFailure;
    }
    if (this._pktcaptureWithNoConnSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktcaptureWithNoConnSuccess = this._pktcaptureWithNoConnSuccess;
    }
    if (this._skipAsConnAlreadyRecapture !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipAsConnAlreadyRecapture = this._skipAsConnAlreadyRecapture;
    }
    if (this._skipCaptureAsConnCreatedBeforeSmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipCaptureAsConnCreatedBeforeSmp = this._skipCaptureAsConnCreatedBeforeSmp;
    }
    if (this._wrongCtrIncremented !== undefined) {
      hasAnyValues = true;
      internalValueResult.wrongCtrIncremented = this._wrongCtrIncremented;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityStatsPacketCaptureCaptureConfigListStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoPcapFileMerged = undefined;
      this._autoPcapFileMergedFailed = undefined;
      this._concurrentCaptureByCtrAnomalyFreed = undefined;
      this._concurrentCaptureByCtrIncrementFreed = undefined;
      this._concurrentCaptureByCtrOtherFeatureFreed = undefined;
      this._concurrentCaptureCreateFailedByCtrAnomaly = undefined;
      this._concurrentCaptureCreateFailedByCtrIncrement = undefined;
      this._concurrentCaptureCreateFailedByOtherFeature = undefined;
      this._concurrentCaptureCreateFailedOom = undefined;
      this._concurrentCaptureCreatedByCtrAnomaly = undefined;
      this._concurrentCaptureCreatedByCtrIncrement = undefined;
      this._concurrentCaptureFinished = undefined;
      this._concurrentCaptureLimitReached = undefined;
      this._connExtFailed = undefined;
      this._failedAsReturnCompletedSet = undefined;
      this._failedDiskFull = undefined;
      this._globalCaptureFinished = undefined;
      this._nonPktPath = undefined;
      this._numConnsTaggedAnomaly = undefined;
      this._numConnsTaggedAnomalyFail = undefined;
      this._numConnsTaggedAnomalyMaxed = undefined;
      this._numConnsTaggedGlobalAnomaly = undefined;
      this._numConnsTaggedGlobalAnomalyFail = undefined;
      this._numConnsTaggedGlobalAnomalyMaxed = undefined;
      this._numConnsTaggedGlobalIncrement = undefined;
      this._numConnsTaggedGlobalIncrementFail = undefined;
      this._numConnsTaggedGlobalIncrementMaxed = undefined;
      this._numConnsTaggedGlobalOtherFeature = undefined;
      this._numConnsTaggedGlobalOtherFeatureFail = undefined;
      this._numConnsTaggedGlobalOtherFeatureMaxed = undefined;
      this._numConnsTaggedIncrement = undefined;
      this._numConnsTaggedIncrementFail = undefined;
      this._numConnsTaggedIncrementMaxed = undefined;
      this._numConnsTaggedOtherFeature = undefined;
      this._numConnsTaggedOtherFeatureFail = undefined;
      this._numConnsTaggedOtherFeatureMaxed = undefined;
      this._numConnsUntagged = undefined;
      this._numDynamicCaptureConfigCreated = undefined;
      this._numDynamicCaptureConfigDeleteQ = undefined;
      this._numDynamicCaptureConfigDeleted = undefined;
      this._numGlobalCountersDeregistered = undefined;
      this._numGlobalCountersRegistered = undefined;
      this._numOfAnomaliesCleared = undefined;
      this._numOfAnomaliesDetected = undefined;
      this._numPcapsCreateFailed = undefined;
      this._numPcapsCreated = undefined;
      this._numPerObjectCountersDeregistered = undefined;
      this._numPerObjectCountersRegistered = undefined;
      this._numTmpPcapsCreated = undefined;
      this._pktAlreadyCaptured = undefined;
      this._pktcapOom = undefined;
      this._pktcaptureFailureFileSizeRchd = undefined;
      this._pktcaptureFailureWaitForBlock = undefined;
      this._pktcaptureTriggeredByAnomaly = undefined;
      this._pktcaptureTriggeredByIncrement = undefined;
      this._pktcaptureTriggeredByOtherFeature = undefined;
      this._pktcaptureWithConnButNotTaggedFailure = undefined;
      this._pktcaptureWithConnButNotTaggedSuccess = undefined;
      this._pktcaptureWithConnFailure = undefined;
      this._pktcaptureWithConnFailureGlobal = undefined;
      this._pktcaptureWithConnSuccess = undefined;
      this._pktcaptureWithConnSuccessGlobal = undefined;
      this._pktcaptureWithNoConnFailure = undefined;
      this._pktcaptureWithNoConnSuccess = undefined;
      this._skipAsConnAlreadyRecapture = undefined;
      this._skipCaptureAsConnCreatedBeforeSmp = undefined;
      this._wrongCtrIncremented = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoPcapFileMerged = value.autoPcapFileMerged;
      this._autoPcapFileMergedFailed = value.autoPcapFileMergedFailed;
      this._concurrentCaptureByCtrAnomalyFreed = value.concurrentCaptureByCtrAnomalyFreed;
      this._concurrentCaptureByCtrIncrementFreed = value.concurrentCaptureByCtrIncrementFreed;
      this._concurrentCaptureByCtrOtherFeatureFreed = value.concurrentCaptureByCtrOtherFeatureFreed;
      this._concurrentCaptureCreateFailedByCtrAnomaly = value.concurrentCaptureCreateFailedByCtrAnomaly;
      this._concurrentCaptureCreateFailedByCtrIncrement = value.concurrentCaptureCreateFailedByCtrIncrement;
      this._concurrentCaptureCreateFailedByOtherFeature = value.concurrentCaptureCreateFailedByOtherFeature;
      this._concurrentCaptureCreateFailedOom = value.concurrentCaptureCreateFailedOom;
      this._concurrentCaptureCreatedByCtrAnomaly = value.concurrentCaptureCreatedByCtrAnomaly;
      this._concurrentCaptureCreatedByCtrIncrement = value.concurrentCaptureCreatedByCtrIncrement;
      this._concurrentCaptureFinished = value.concurrentCaptureFinished;
      this._concurrentCaptureLimitReached = value.concurrentCaptureLimitReached;
      this._connExtFailed = value.connExtFailed;
      this._failedAsReturnCompletedSet = value.failedAsReturnCompletedSet;
      this._failedDiskFull = value.failedDiskFull;
      this._globalCaptureFinished = value.globalCaptureFinished;
      this._nonPktPath = value.nonPktPath;
      this._numConnsTaggedAnomaly = value.numConnsTaggedAnomaly;
      this._numConnsTaggedAnomalyFail = value.numConnsTaggedAnomalyFail;
      this._numConnsTaggedAnomalyMaxed = value.numConnsTaggedAnomalyMaxed;
      this._numConnsTaggedGlobalAnomaly = value.numConnsTaggedGlobalAnomaly;
      this._numConnsTaggedGlobalAnomalyFail = value.numConnsTaggedGlobalAnomalyFail;
      this._numConnsTaggedGlobalAnomalyMaxed = value.numConnsTaggedGlobalAnomalyMaxed;
      this._numConnsTaggedGlobalIncrement = value.numConnsTaggedGlobalIncrement;
      this._numConnsTaggedGlobalIncrementFail = value.numConnsTaggedGlobalIncrementFail;
      this._numConnsTaggedGlobalIncrementMaxed = value.numConnsTaggedGlobalIncrementMaxed;
      this._numConnsTaggedGlobalOtherFeature = value.numConnsTaggedGlobalOtherFeature;
      this._numConnsTaggedGlobalOtherFeatureFail = value.numConnsTaggedGlobalOtherFeatureFail;
      this._numConnsTaggedGlobalOtherFeatureMaxed = value.numConnsTaggedGlobalOtherFeatureMaxed;
      this._numConnsTaggedIncrement = value.numConnsTaggedIncrement;
      this._numConnsTaggedIncrementFail = value.numConnsTaggedIncrementFail;
      this._numConnsTaggedIncrementMaxed = value.numConnsTaggedIncrementMaxed;
      this._numConnsTaggedOtherFeature = value.numConnsTaggedOtherFeature;
      this._numConnsTaggedOtherFeatureFail = value.numConnsTaggedOtherFeatureFail;
      this._numConnsTaggedOtherFeatureMaxed = value.numConnsTaggedOtherFeatureMaxed;
      this._numConnsUntagged = value.numConnsUntagged;
      this._numDynamicCaptureConfigCreated = value.numDynamicCaptureConfigCreated;
      this._numDynamicCaptureConfigDeleteQ = value.numDynamicCaptureConfigDeleteQ;
      this._numDynamicCaptureConfigDeleted = value.numDynamicCaptureConfigDeleted;
      this._numGlobalCountersDeregistered = value.numGlobalCountersDeregistered;
      this._numGlobalCountersRegistered = value.numGlobalCountersRegistered;
      this._numOfAnomaliesCleared = value.numOfAnomaliesCleared;
      this._numOfAnomaliesDetected = value.numOfAnomaliesDetected;
      this._numPcapsCreateFailed = value.numPcapsCreateFailed;
      this._numPcapsCreated = value.numPcapsCreated;
      this._numPerObjectCountersDeregistered = value.numPerObjectCountersDeregistered;
      this._numPerObjectCountersRegistered = value.numPerObjectCountersRegistered;
      this._numTmpPcapsCreated = value.numTmpPcapsCreated;
      this._pktAlreadyCaptured = value.pktAlreadyCaptured;
      this._pktcapOom = value.pktcapOom;
      this._pktcaptureFailureFileSizeRchd = value.pktcaptureFailureFileSizeRchd;
      this._pktcaptureFailureWaitForBlock = value.pktcaptureFailureWaitForBlock;
      this._pktcaptureTriggeredByAnomaly = value.pktcaptureTriggeredByAnomaly;
      this._pktcaptureTriggeredByIncrement = value.pktcaptureTriggeredByIncrement;
      this._pktcaptureTriggeredByOtherFeature = value.pktcaptureTriggeredByOtherFeature;
      this._pktcaptureWithConnButNotTaggedFailure = value.pktcaptureWithConnButNotTaggedFailure;
      this._pktcaptureWithConnButNotTaggedSuccess = value.pktcaptureWithConnButNotTaggedSuccess;
      this._pktcaptureWithConnFailure = value.pktcaptureWithConnFailure;
      this._pktcaptureWithConnFailureGlobal = value.pktcaptureWithConnFailureGlobal;
      this._pktcaptureWithConnSuccess = value.pktcaptureWithConnSuccess;
      this._pktcaptureWithConnSuccessGlobal = value.pktcaptureWithConnSuccessGlobal;
      this._pktcaptureWithNoConnFailure = value.pktcaptureWithNoConnFailure;
      this._pktcaptureWithNoConnSuccess = value.pktcaptureWithNoConnSuccess;
      this._skipAsConnAlreadyRecapture = value.skipAsConnAlreadyRecapture;
      this._skipCaptureAsConnCreatedBeforeSmp = value.skipCaptureAsConnCreatedBeforeSmp;
      this._wrongCtrIncremented = value.wrongCtrIncremented;
    }
  }

  // auto_pcap_file_merged - computed: false, optional: true, required: false
  private _autoPcapFileMerged?: number; 
  public get autoPcapFileMerged() {
    return this.getNumberAttribute('auto_pcap_file_merged');
  }
  public set autoPcapFileMerged(value: number) {
    this._autoPcapFileMerged = value;
  }
  public resetAutoPcapFileMerged() {
    this._autoPcapFileMerged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPcapFileMergedInput() {
    return this._autoPcapFileMerged;
  }

  // auto_pcap_file_merged_failed - computed: false, optional: true, required: false
  private _autoPcapFileMergedFailed?: number; 
  public get autoPcapFileMergedFailed() {
    return this.getNumberAttribute('auto_pcap_file_merged_failed');
  }
  public set autoPcapFileMergedFailed(value: number) {
    this._autoPcapFileMergedFailed = value;
  }
  public resetAutoPcapFileMergedFailed() {
    this._autoPcapFileMergedFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPcapFileMergedFailedInput() {
    return this._autoPcapFileMergedFailed;
  }

  // concurrent_capture_by_ctr_anomaly_freed - computed: false, optional: true, required: false
  private _concurrentCaptureByCtrAnomalyFreed?: number; 
  public get concurrentCaptureByCtrAnomalyFreed() {
    return this.getNumberAttribute('concurrent_capture_by_ctr_anomaly_freed');
  }
  public set concurrentCaptureByCtrAnomalyFreed(value: number) {
    this._concurrentCaptureByCtrAnomalyFreed = value;
  }
  public resetConcurrentCaptureByCtrAnomalyFreed() {
    this._concurrentCaptureByCtrAnomalyFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentCaptureByCtrAnomalyFreedInput() {
    return this._concurrentCaptureByCtrAnomalyFreed;
  }

  // concurrent_capture_by_ctr_increment_freed - computed: false, optional: true, required: false
  private _concurrentCaptureByCtrIncrementFreed?: number; 
  public get concurrentCaptureByCtrIncrementFreed() {
    return this.getNumberAttribute('concurrent_capture_by_ctr_increment_freed');
  }
  public set concurrentCaptureByCtrIncrementFreed(value: number) {
    this._concurrentCaptureByCtrIncrementFreed = value;
  }
  public resetConcurrentCaptureByCtrIncrementFreed() {
    this._concurrentCaptureByCtrIncrementFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentCaptureByCtrIncrementFreedInput() {
    return this._concurrentCaptureByCtrIncrementFreed;
  }

  // concurrent_capture_by_ctr_other_feature_freed - computed: false, optional: true, required: false
  private _concurrentCaptureByCtrOtherFeatureFreed?: number; 
  public get concurrentCaptureByCtrOtherFeatureFreed() {
    return this.getNumberAttribute('concurrent_capture_by_ctr_other_feature_freed');
  }
  public set concurrentCaptureByCtrOtherFeatureFreed(value: number) {
    this._concurrentCaptureByCtrOtherFeatureFreed = value;
  }
  public resetConcurrentCaptureByCtrOtherFeatureFreed() {
    this._concurrentCaptureByCtrOtherFeatureFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentCaptureByCtrOtherFeatureFreedInput() {
    return this._concurrentCaptureByCtrOtherFeatureFreed;
  }

  // concurrent_capture_create_failed_by_ctr_anomaly - computed: false, optional: true, required: false
  private _concurrentCaptureCreateFailedByCtrAnomaly?: number; 
  public get concurrentCaptureCreateFailedByCtrAnomaly() {
    return this.getNumberAttribute('concurrent_capture_create_failed_by_ctr_anomaly');
  }
  public set concurrentCaptureCreateFailedByCtrAnomaly(value: number) {
    this._concurrentCaptureCreateFailedByCtrAnomaly = value;
  }
  public resetConcurrentCaptureCreateFailedByCtrAnomaly() {
    this._concurrentCaptureCreateFailedByCtrAnomaly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentCaptureCreateFailedByCtrAnomalyInput() {
    return this._concurrentCaptureCreateFailedByCtrAnomaly;
  }

  // concurrent_capture_create_failed_by_ctr_increment - computed: false, optional: true, required: false
  private _concurrentCaptureCreateFailedByCtrIncrement?: number; 
  public get concurrentCaptureCreateFailedByCtrIncrement() {
    return this.getNumberAttribute('concurrent_capture_create_failed_by_ctr_increment');
  }
  public set concurrentCaptureCreateFailedByCtrIncrement(value: number) {
    this._concurrentCaptureCreateFailedByCtrIncrement = value;
  }
  public resetConcurrentCaptureCreateFailedByCtrIncrement() {
    this._concurrentCaptureCreateFailedByCtrIncrement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentCaptureCreateFailedByCtrIncrementInput() {
    return this._concurrentCaptureCreateFailedByCtrIncrement;
  }

  // concurrent_capture_create_failed_by_other_feature - computed: false, optional: true, required: false
  private _concurrentCaptureCreateFailedByOtherFeature?: number; 
  public get concurrentCaptureCreateFailedByOtherFeature() {
    return this.getNumberAttribute('concurrent_capture_create_failed_by_other_feature');
  }
  public set concurrentCaptureCreateFailedByOtherFeature(value: number) {
    this._concurrentCaptureCreateFailedByOtherFeature = value;
  }
  public resetConcurrentCaptureCreateFailedByOtherFeature() {
    this._concurrentCaptureCreateFailedByOtherFeature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentCaptureCreateFailedByOtherFeatureInput() {
    return this._concurrentCaptureCreateFailedByOtherFeature;
  }

  // concurrent_capture_create_failed_oom - computed: false, optional: true, required: false
  private _concurrentCaptureCreateFailedOom?: number; 
  public get concurrentCaptureCreateFailedOom() {
    return this.getNumberAttribute('concurrent_capture_create_failed_oom');
  }
  public set concurrentCaptureCreateFailedOom(value: number) {
    this._concurrentCaptureCreateFailedOom = value;
  }
  public resetConcurrentCaptureCreateFailedOom() {
    this._concurrentCaptureCreateFailedOom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentCaptureCreateFailedOomInput() {
    return this._concurrentCaptureCreateFailedOom;
  }

  // concurrent_capture_created_by_ctr_anomaly - computed: false, optional: true, required: false
  private _concurrentCaptureCreatedByCtrAnomaly?: number; 
  public get concurrentCaptureCreatedByCtrAnomaly() {
    return this.getNumberAttribute('concurrent_capture_created_by_ctr_anomaly');
  }
  public set concurrentCaptureCreatedByCtrAnomaly(value: number) {
    this._concurrentCaptureCreatedByCtrAnomaly = value;
  }
  public resetConcurrentCaptureCreatedByCtrAnomaly() {
    this._concurrentCaptureCreatedByCtrAnomaly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentCaptureCreatedByCtrAnomalyInput() {
    return this._concurrentCaptureCreatedByCtrAnomaly;
  }

  // concurrent_capture_created_by_ctr_increment - computed: false, optional: true, required: false
  private _concurrentCaptureCreatedByCtrIncrement?: number; 
  public get concurrentCaptureCreatedByCtrIncrement() {
    return this.getNumberAttribute('concurrent_capture_created_by_ctr_increment');
  }
  public set concurrentCaptureCreatedByCtrIncrement(value: number) {
    this._concurrentCaptureCreatedByCtrIncrement = value;
  }
  public resetConcurrentCaptureCreatedByCtrIncrement() {
    this._concurrentCaptureCreatedByCtrIncrement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentCaptureCreatedByCtrIncrementInput() {
    return this._concurrentCaptureCreatedByCtrIncrement;
  }

  // concurrent_capture_finished - computed: false, optional: true, required: false
  private _concurrentCaptureFinished?: number; 
  public get concurrentCaptureFinished() {
    return this.getNumberAttribute('concurrent_capture_finished');
  }
  public set concurrentCaptureFinished(value: number) {
    this._concurrentCaptureFinished = value;
  }
  public resetConcurrentCaptureFinished() {
    this._concurrentCaptureFinished = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentCaptureFinishedInput() {
    return this._concurrentCaptureFinished;
  }

  // concurrent_capture_limit_reached - computed: false, optional: true, required: false
  private _concurrentCaptureLimitReached?: number; 
  public get concurrentCaptureLimitReached() {
    return this.getNumberAttribute('concurrent_capture_limit_reached');
  }
  public set concurrentCaptureLimitReached(value: number) {
    this._concurrentCaptureLimitReached = value;
  }
  public resetConcurrentCaptureLimitReached() {
    this._concurrentCaptureLimitReached = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentCaptureLimitReachedInput() {
    return this._concurrentCaptureLimitReached;
  }

  // conn_ext_failed - computed: false, optional: true, required: false
  private _connExtFailed?: number; 
  public get connExtFailed() {
    return this.getNumberAttribute('conn_ext_failed');
  }
  public set connExtFailed(value: number) {
    this._connExtFailed = value;
  }
  public resetConnExtFailed() {
    this._connExtFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connExtFailedInput() {
    return this._connExtFailed;
  }

  // failed_as_return_completed_set - computed: false, optional: true, required: false
  private _failedAsReturnCompletedSet?: number; 
  public get failedAsReturnCompletedSet() {
    return this.getNumberAttribute('failed_as_return_completed_set');
  }
  public set failedAsReturnCompletedSet(value: number) {
    this._failedAsReturnCompletedSet = value;
  }
  public resetFailedAsReturnCompletedSet() {
    this._failedAsReturnCompletedSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedAsReturnCompletedSetInput() {
    return this._failedAsReturnCompletedSet;
  }

  // failed_disk_full - computed: false, optional: true, required: false
  private _failedDiskFull?: number; 
  public get failedDiskFull() {
    return this.getNumberAttribute('failed_disk_full');
  }
  public set failedDiskFull(value: number) {
    this._failedDiskFull = value;
  }
  public resetFailedDiskFull() {
    this._failedDiskFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedDiskFullInput() {
    return this._failedDiskFull;
  }

  // global_capture_finished - computed: false, optional: true, required: false
  private _globalCaptureFinished?: number; 
  public get globalCaptureFinished() {
    return this.getNumberAttribute('global_capture_finished');
  }
  public set globalCaptureFinished(value: number) {
    this._globalCaptureFinished = value;
  }
  public resetGlobalCaptureFinished() {
    this._globalCaptureFinished = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalCaptureFinishedInput() {
    return this._globalCaptureFinished;
  }

  // non_pkt_path - computed: false, optional: true, required: false
  private _nonPktPath?: number; 
  public get nonPktPath() {
    return this.getNumberAttribute('non_pkt_path');
  }
  public set nonPktPath(value: number) {
    this._nonPktPath = value;
  }
  public resetNonPktPath() {
    this._nonPktPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonPktPathInput() {
    return this._nonPktPath;
  }

  // num_conns_tagged_anomaly - computed: false, optional: true, required: false
  private _numConnsTaggedAnomaly?: number; 
  public get numConnsTaggedAnomaly() {
    return this.getNumberAttribute('num_conns_tagged_anomaly');
  }
  public set numConnsTaggedAnomaly(value: number) {
    this._numConnsTaggedAnomaly = value;
  }
  public resetNumConnsTaggedAnomaly() {
    this._numConnsTaggedAnomaly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedAnomalyInput() {
    return this._numConnsTaggedAnomaly;
  }

  // num_conns_tagged_anomaly_fail - computed: false, optional: true, required: false
  private _numConnsTaggedAnomalyFail?: number; 
  public get numConnsTaggedAnomalyFail() {
    return this.getNumberAttribute('num_conns_tagged_anomaly_fail');
  }
  public set numConnsTaggedAnomalyFail(value: number) {
    this._numConnsTaggedAnomalyFail = value;
  }
  public resetNumConnsTaggedAnomalyFail() {
    this._numConnsTaggedAnomalyFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedAnomalyFailInput() {
    return this._numConnsTaggedAnomalyFail;
  }

  // num_conns_tagged_anomaly_maxed - computed: false, optional: true, required: false
  private _numConnsTaggedAnomalyMaxed?: number; 
  public get numConnsTaggedAnomalyMaxed() {
    return this.getNumberAttribute('num_conns_tagged_anomaly_maxed');
  }
  public set numConnsTaggedAnomalyMaxed(value: number) {
    this._numConnsTaggedAnomalyMaxed = value;
  }
  public resetNumConnsTaggedAnomalyMaxed() {
    this._numConnsTaggedAnomalyMaxed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedAnomalyMaxedInput() {
    return this._numConnsTaggedAnomalyMaxed;
  }

  // num_conns_tagged_global_anomaly - computed: false, optional: true, required: false
  private _numConnsTaggedGlobalAnomaly?: number; 
  public get numConnsTaggedGlobalAnomaly() {
    return this.getNumberAttribute('num_conns_tagged_global_anomaly');
  }
  public set numConnsTaggedGlobalAnomaly(value: number) {
    this._numConnsTaggedGlobalAnomaly = value;
  }
  public resetNumConnsTaggedGlobalAnomaly() {
    this._numConnsTaggedGlobalAnomaly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedGlobalAnomalyInput() {
    return this._numConnsTaggedGlobalAnomaly;
  }

  // num_conns_tagged_global_anomaly_fail - computed: false, optional: true, required: false
  private _numConnsTaggedGlobalAnomalyFail?: number; 
  public get numConnsTaggedGlobalAnomalyFail() {
    return this.getNumberAttribute('num_conns_tagged_global_anomaly_fail');
  }
  public set numConnsTaggedGlobalAnomalyFail(value: number) {
    this._numConnsTaggedGlobalAnomalyFail = value;
  }
  public resetNumConnsTaggedGlobalAnomalyFail() {
    this._numConnsTaggedGlobalAnomalyFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedGlobalAnomalyFailInput() {
    return this._numConnsTaggedGlobalAnomalyFail;
  }

  // num_conns_tagged_global_anomaly_maxed - computed: false, optional: true, required: false
  private _numConnsTaggedGlobalAnomalyMaxed?: number; 
  public get numConnsTaggedGlobalAnomalyMaxed() {
    return this.getNumberAttribute('num_conns_tagged_global_anomaly_maxed');
  }
  public set numConnsTaggedGlobalAnomalyMaxed(value: number) {
    this._numConnsTaggedGlobalAnomalyMaxed = value;
  }
  public resetNumConnsTaggedGlobalAnomalyMaxed() {
    this._numConnsTaggedGlobalAnomalyMaxed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedGlobalAnomalyMaxedInput() {
    return this._numConnsTaggedGlobalAnomalyMaxed;
  }

  // num_conns_tagged_global_increment - computed: false, optional: true, required: false
  private _numConnsTaggedGlobalIncrement?: number; 
  public get numConnsTaggedGlobalIncrement() {
    return this.getNumberAttribute('num_conns_tagged_global_increment');
  }
  public set numConnsTaggedGlobalIncrement(value: number) {
    this._numConnsTaggedGlobalIncrement = value;
  }
  public resetNumConnsTaggedGlobalIncrement() {
    this._numConnsTaggedGlobalIncrement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedGlobalIncrementInput() {
    return this._numConnsTaggedGlobalIncrement;
  }

  // num_conns_tagged_global_increment_fail - computed: false, optional: true, required: false
  private _numConnsTaggedGlobalIncrementFail?: number; 
  public get numConnsTaggedGlobalIncrementFail() {
    return this.getNumberAttribute('num_conns_tagged_global_increment_fail');
  }
  public set numConnsTaggedGlobalIncrementFail(value: number) {
    this._numConnsTaggedGlobalIncrementFail = value;
  }
  public resetNumConnsTaggedGlobalIncrementFail() {
    this._numConnsTaggedGlobalIncrementFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedGlobalIncrementFailInput() {
    return this._numConnsTaggedGlobalIncrementFail;
  }

  // num_conns_tagged_global_increment_maxed - computed: false, optional: true, required: false
  private _numConnsTaggedGlobalIncrementMaxed?: number; 
  public get numConnsTaggedGlobalIncrementMaxed() {
    return this.getNumberAttribute('num_conns_tagged_global_increment_maxed');
  }
  public set numConnsTaggedGlobalIncrementMaxed(value: number) {
    this._numConnsTaggedGlobalIncrementMaxed = value;
  }
  public resetNumConnsTaggedGlobalIncrementMaxed() {
    this._numConnsTaggedGlobalIncrementMaxed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedGlobalIncrementMaxedInput() {
    return this._numConnsTaggedGlobalIncrementMaxed;
  }

  // num_conns_tagged_global_other_feature - computed: false, optional: true, required: false
  private _numConnsTaggedGlobalOtherFeature?: number; 
  public get numConnsTaggedGlobalOtherFeature() {
    return this.getNumberAttribute('num_conns_tagged_global_other_feature');
  }
  public set numConnsTaggedGlobalOtherFeature(value: number) {
    this._numConnsTaggedGlobalOtherFeature = value;
  }
  public resetNumConnsTaggedGlobalOtherFeature() {
    this._numConnsTaggedGlobalOtherFeature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedGlobalOtherFeatureInput() {
    return this._numConnsTaggedGlobalOtherFeature;
  }

  // num_conns_tagged_global_other_feature_fail - computed: false, optional: true, required: false
  private _numConnsTaggedGlobalOtherFeatureFail?: number; 
  public get numConnsTaggedGlobalOtherFeatureFail() {
    return this.getNumberAttribute('num_conns_tagged_global_other_feature_fail');
  }
  public set numConnsTaggedGlobalOtherFeatureFail(value: number) {
    this._numConnsTaggedGlobalOtherFeatureFail = value;
  }
  public resetNumConnsTaggedGlobalOtherFeatureFail() {
    this._numConnsTaggedGlobalOtherFeatureFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedGlobalOtherFeatureFailInput() {
    return this._numConnsTaggedGlobalOtherFeatureFail;
  }

  // num_conns_tagged_global_other_feature_maxed - computed: false, optional: true, required: false
  private _numConnsTaggedGlobalOtherFeatureMaxed?: number; 
  public get numConnsTaggedGlobalOtherFeatureMaxed() {
    return this.getNumberAttribute('num_conns_tagged_global_other_feature_maxed');
  }
  public set numConnsTaggedGlobalOtherFeatureMaxed(value: number) {
    this._numConnsTaggedGlobalOtherFeatureMaxed = value;
  }
  public resetNumConnsTaggedGlobalOtherFeatureMaxed() {
    this._numConnsTaggedGlobalOtherFeatureMaxed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedGlobalOtherFeatureMaxedInput() {
    return this._numConnsTaggedGlobalOtherFeatureMaxed;
  }

  // num_conns_tagged_increment - computed: false, optional: true, required: false
  private _numConnsTaggedIncrement?: number; 
  public get numConnsTaggedIncrement() {
    return this.getNumberAttribute('num_conns_tagged_increment');
  }
  public set numConnsTaggedIncrement(value: number) {
    this._numConnsTaggedIncrement = value;
  }
  public resetNumConnsTaggedIncrement() {
    this._numConnsTaggedIncrement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedIncrementInput() {
    return this._numConnsTaggedIncrement;
  }

  // num_conns_tagged_increment_fail - computed: false, optional: true, required: false
  private _numConnsTaggedIncrementFail?: number; 
  public get numConnsTaggedIncrementFail() {
    return this.getNumberAttribute('num_conns_tagged_increment_fail');
  }
  public set numConnsTaggedIncrementFail(value: number) {
    this._numConnsTaggedIncrementFail = value;
  }
  public resetNumConnsTaggedIncrementFail() {
    this._numConnsTaggedIncrementFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedIncrementFailInput() {
    return this._numConnsTaggedIncrementFail;
  }

  // num_conns_tagged_increment_maxed - computed: false, optional: true, required: false
  private _numConnsTaggedIncrementMaxed?: number; 
  public get numConnsTaggedIncrementMaxed() {
    return this.getNumberAttribute('num_conns_tagged_increment_maxed');
  }
  public set numConnsTaggedIncrementMaxed(value: number) {
    this._numConnsTaggedIncrementMaxed = value;
  }
  public resetNumConnsTaggedIncrementMaxed() {
    this._numConnsTaggedIncrementMaxed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedIncrementMaxedInput() {
    return this._numConnsTaggedIncrementMaxed;
  }

  // num_conns_tagged_other_feature - computed: false, optional: true, required: false
  private _numConnsTaggedOtherFeature?: number; 
  public get numConnsTaggedOtherFeature() {
    return this.getNumberAttribute('num_conns_tagged_other_feature');
  }
  public set numConnsTaggedOtherFeature(value: number) {
    this._numConnsTaggedOtherFeature = value;
  }
  public resetNumConnsTaggedOtherFeature() {
    this._numConnsTaggedOtherFeature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedOtherFeatureInput() {
    return this._numConnsTaggedOtherFeature;
  }

  // num_conns_tagged_other_feature_fail - computed: false, optional: true, required: false
  private _numConnsTaggedOtherFeatureFail?: number; 
  public get numConnsTaggedOtherFeatureFail() {
    return this.getNumberAttribute('num_conns_tagged_other_feature_fail');
  }
  public set numConnsTaggedOtherFeatureFail(value: number) {
    this._numConnsTaggedOtherFeatureFail = value;
  }
  public resetNumConnsTaggedOtherFeatureFail() {
    this._numConnsTaggedOtherFeatureFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedOtherFeatureFailInput() {
    return this._numConnsTaggedOtherFeatureFail;
  }

  // num_conns_tagged_other_feature_maxed - computed: false, optional: true, required: false
  private _numConnsTaggedOtherFeatureMaxed?: number; 
  public get numConnsTaggedOtherFeatureMaxed() {
    return this.getNumberAttribute('num_conns_tagged_other_feature_maxed');
  }
  public set numConnsTaggedOtherFeatureMaxed(value: number) {
    this._numConnsTaggedOtherFeatureMaxed = value;
  }
  public resetNumConnsTaggedOtherFeatureMaxed() {
    this._numConnsTaggedOtherFeatureMaxed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedOtherFeatureMaxedInput() {
    return this._numConnsTaggedOtherFeatureMaxed;
  }

  // num_conns_untagged - computed: false, optional: true, required: false
  private _numConnsUntagged?: number; 
  public get numConnsUntagged() {
    return this.getNumberAttribute('num_conns_untagged');
  }
  public set numConnsUntagged(value: number) {
    this._numConnsUntagged = value;
  }
  public resetNumConnsUntagged() {
    this._numConnsUntagged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsUntaggedInput() {
    return this._numConnsUntagged;
  }

  // num_dynamic_capture_config_created - computed: false, optional: true, required: false
  private _numDynamicCaptureConfigCreated?: number; 
  public get numDynamicCaptureConfigCreated() {
    return this.getNumberAttribute('num_dynamic_capture_config_created');
  }
  public set numDynamicCaptureConfigCreated(value: number) {
    this._numDynamicCaptureConfigCreated = value;
  }
  public resetNumDynamicCaptureConfigCreated() {
    this._numDynamicCaptureConfigCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numDynamicCaptureConfigCreatedInput() {
    return this._numDynamicCaptureConfigCreated;
  }

  // num_dynamic_capture_config_delete_q - computed: false, optional: true, required: false
  private _numDynamicCaptureConfigDeleteQ?: number; 
  public get numDynamicCaptureConfigDeleteQ() {
    return this.getNumberAttribute('num_dynamic_capture_config_delete_q');
  }
  public set numDynamicCaptureConfigDeleteQ(value: number) {
    this._numDynamicCaptureConfigDeleteQ = value;
  }
  public resetNumDynamicCaptureConfigDeleteQ() {
    this._numDynamicCaptureConfigDeleteQ = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numDynamicCaptureConfigDeleteQInput() {
    return this._numDynamicCaptureConfigDeleteQ;
  }

  // num_dynamic_capture_config_deleted - computed: false, optional: true, required: false
  private _numDynamicCaptureConfigDeleted?: number; 
  public get numDynamicCaptureConfigDeleted() {
    return this.getNumberAttribute('num_dynamic_capture_config_deleted');
  }
  public set numDynamicCaptureConfigDeleted(value: number) {
    this._numDynamicCaptureConfigDeleted = value;
  }
  public resetNumDynamicCaptureConfigDeleted() {
    this._numDynamicCaptureConfigDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numDynamicCaptureConfigDeletedInput() {
    return this._numDynamicCaptureConfigDeleted;
  }

  // num_global_counters_deregistered - computed: false, optional: true, required: false
  private _numGlobalCountersDeregistered?: number; 
  public get numGlobalCountersDeregistered() {
    return this.getNumberAttribute('num_global_counters_deregistered');
  }
  public set numGlobalCountersDeregistered(value: number) {
    this._numGlobalCountersDeregistered = value;
  }
  public resetNumGlobalCountersDeregistered() {
    this._numGlobalCountersDeregistered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numGlobalCountersDeregisteredInput() {
    return this._numGlobalCountersDeregistered;
  }

  // num_global_counters_registered - computed: false, optional: true, required: false
  private _numGlobalCountersRegistered?: number; 
  public get numGlobalCountersRegistered() {
    return this.getNumberAttribute('num_global_counters_registered');
  }
  public set numGlobalCountersRegistered(value: number) {
    this._numGlobalCountersRegistered = value;
  }
  public resetNumGlobalCountersRegistered() {
    this._numGlobalCountersRegistered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numGlobalCountersRegisteredInput() {
    return this._numGlobalCountersRegistered;
  }

  // num_of_anomalies_cleared - computed: false, optional: true, required: false
  private _numOfAnomaliesCleared?: number; 
  public get numOfAnomaliesCleared() {
    return this.getNumberAttribute('num_of_anomalies_cleared');
  }
  public set numOfAnomaliesCleared(value: number) {
    this._numOfAnomaliesCleared = value;
  }
  public resetNumOfAnomaliesCleared() {
    this._numOfAnomaliesCleared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfAnomaliesClearedInput() {
    return this._numOfAnomaliesCleared;
  }

  // num_of_anomalies_detected - computed: false, optional: true, required: false
  private _numOfAnomaliesDetected?: number; 
  public get numOfAnomaliesDetected() {
    return this.getNumberAttribute('num_of_anomalies_detected');
  }
  public set numOfAnomaliesDetected(value: number) {
    this._numOfAnomaliesDetected = value;
  }
  public resetNumOfAnomaliesDetected() {
    this._numOfAnomaliesDetected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfAnomaliesDetectedInput() {
    return this._numOfAnomaliesDetected;
  }

  // num_pcaps_create_failed - computed: false, optional: true, required: false
  private _numPcapsCreateFailed?: number; 
  public get numPcapsCreateFailed() {
    return this.getNumberAttribute('num_pcaps_create_failed');
  }
  public set numPcapsCreateFailed(value: number) {
    this._numPcapsCreateFailed = value;
  }
  public resetNumPcapsCreateFailed() {
    this._numPcapsCreateFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numPcapsCreateFailedInput() {
    return this._numPcapsCreateFailed;
  }

  // num_pcaps_created - computed: false, optional: true, required: false
  private _numPcapsCreated?: number; 
  public get numPcapsCreated() {
    return this.getNumberAttribute('num_pcaps_created');
  }
  public set numPcapsCreated(value: number) {
    this._numPcapsCreated = value;
  }
  public resetNumPcapsCreated() {
    this._numPcapsCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numPcapsCreatedInput() {
    return this._numPcapsCreated;
  }

  // num_per_object_counters_deregistered - computed: false, optional: true, required: false
  private _numPerObjectCountersDeregistered?: number; 
  public get numPerObjectCountersDeregistered() {
    return this.getNumberAttribute('num_per_object_counters_deregistered');
  }
  public set numPerObjectCountersDeregistered(value: number) {
    this._numPerObjectCountersDeregistered = value;
  }
  public resetNumPerObjectCountersDeregistered() {
    this._numPerObjectCountersDeregistered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numPerObjectCountersDeregisteredInput() {
    return this._numPerObjectCountersDeregistered;
  }

  // num_per_object_counters_registered - computed: false, optional: true, required: false
  private _numPerObjectCountersRegistered?: number; 
  public get numPerObjectCountersRegistered() {
    return this.getNumberAttribute('num_per_object_counters_registered');
  }
  public set numPerObjectCountersRegistered(value: number) {
    this._numPerObjectCountersRegistered = value;
  }
  public resetNumPerObjectCountersRegistered() {
    this._numPerObjectCountersRegistered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numPerObjectCountersRegisteredInput() {
    return this._numPerObjectCountersRegistered;
  }

  // num_tmp_pcaps_created - computed: false, optional: true, required: false
  private _numTmpPcapsCreated?: number; 
  public get numTmpPcapsCreated() {
    return this.getNumberAttribute('num_tmp_pcaps_created');
  }
  public set numTmpPcapsCreated(value: number) {
    this._numTmpPcapsCreated = value;
  }
  public resetNumTmpPcapsCreated() {
    this._numTmpPcapsCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numTmpPcapsCreatedInput() {
    return this._numTmpPcapsCreated;
  }

  // pkt_already_captured - computed: false, optional: true, required: false
  private _pktAlreadyCaptured?: number; 
  public get pktAlreadyCaptured() {
    return this.getNumberAttribute('pkt_already_captured');
  }
  public set pktAlreadyCaptured(value: number) {
    this._pktAlreadyCaptured = value;
  }
  public resetPktAlreadyCaptured() {
    this._pktAlreadyCaptured = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktAlreadyCapturedInput() {
    return this._pktAlreadyCaptured;
  }

  // pktcap_oom - computed: false, optional: true, required: false
  private _pktcapOom?: number; 
  public get pktcapOom() {
    return this.getNumberAttribute('pktcap_oom');
  }
  public set pktcapOom(value: number) {
    this._pktcapOom = value;
  }
  public resetPktcapOom() {
    this._pktcapOom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktcapOomInput() {
    return this._pktcapOom;
  }

  // pktcapture_failure_file_size_rchd - computed: false, optional: true, required: false
  private _pktcaptureFailureFileSizeRchd?: number; 
  public get pktcaptureFailureFileSizeRchd() {
    return this.getNumberAttribute('pktcapture_failure_file_size_rchd');
  }
  public set pktcaptureFailureFileSizeRchd(value: number) {
    this._pktcaptureFailureFileSizeRchd = value;
  }
  public resetPktcaptureFailureFileSizeRchd() {
    this._pktcaptureFailureFileSizeRchd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktcaptureFailureFileSizeRchdInput() {
    return this._pktcaptureFailureFileSizeRchd;
  }

  // pktcapture_failure_wait_for_block - computed: false, optional: true, required: false
  private _pktcaptureFailureWaitForBlock?: number; 
  public get pktcaptureFailureWaitForBlock() {
    return this.getNumberAttribute('pktcapture_failure_wait_for_block');
  }
  public set pktcaptureFailureWaitForBlock(value: number) {
    this._pktcaptureFailureWaitForBlock = value;
  }
  public resetPktcaptureFailureWaitForBlock() {
    this._pktcaptureFailureWaitForBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktcaptureFailureWaitForBlockInput() {
    return this._pktcaptureFailureWaitForBlock;
  }

  // pktcapture_triggered_by_anomaly - computed: false, optional: true, required: false
  private _pktcaptureTriggeredByAnomaly?: number; 
  public get pktcaptureTriggeredByAnomaly() {
    return this.getNumberAttribute('pktcapture_triggered_by_anomaly');
  }
  public set pktcaptureTriggeredByAnomaly(value: number) {
    this._pktcaptureTriggeredByAnomaly = value;
  }
  public resetPktcaptureTriggeredByAnomaly() {
    this._pktcaptureTriggeredByAnomaly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktcaptureTriggeredByAnomalyInput() {
    return this._pktcaptureTriggeredByAnomaly;
  }

  // pktcapture_triggered_by_increment - computed: false, optional: true, required: false
  private _pktcaptureTriggeredByIncrement?: number; 
  public get pktcaptureTriggeredByIncrement() {
    return this.getNumberAttribute('pktcapture_triggered_by_increment');
  }
  public set pktcaptureTriggeredByIncrement(value: number) {
    this._pktcaptureTriggeredByIncrement = value;
  }
  public resetPktcaptureTriggeredByIncrement() {
    this._pktcaptureTriggeredByIncrement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktcaptureTriggeredByIncrementInput() {
    return this._pktcaptureTriggeredByIncrement;
  }

  // pktcapture_triggered_by_other_feature - computed: false, optional: true, required: false
  private _pktcaptureTriggeredByOtherFeature?: number; 
  public get pktcaptureTriggeredByOtherFeature() {
    return this.getNumberAttribute('pktcapture_triggered_by_other_feature');
  }
  public set pktcaptureTriggeredByOtherFeature(value: number) {
    this._pktcaptureTriggeredByOtherFeature = value;
  }
  public resetPktcaptureTriggeredByOtherFeature() {
    this._pktcaptureTriggeredByOtherFeature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktcaptureTriggeredByOtherFeatureInput() {
    return this._pktcaptureTriggeredByOtherFeature;
  }

  // pktcapture_with_conn_but_not_tagged_failure - computed: false, optional: true, required: false
  private _pktcaptureWithConnButNotTaggedFailure?: number; 
  public get pktcaptureWithConnButNotTaggedFailure() {
    return this.getNumberAttribute('pktcapture_with_conn_but_not_tagged_failure');
  }
  public set pktcaptureWithConnButNotTaggedFailure(value: number) {
    this._pktcaptureWithConnButNotTaggedFailure = value;
  }
  public resetPktcaptureWithConnButNotTaggedFailure() {
    this._pktcaptureWithConnButNotTaggedFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktcaptureWithConnButNotTaggedFailureInput() {
    return this._pktcaptureWithConnButNotTaggedFailure;
  }

  // pktcapture_with_conn_but_not_tagged_success - computed: false, optional: true, required: false
  private _pktcaptureWithConnButNotTaggedSuccess?: number; 
  public get pktcaptureWithConnButNotTaggedSuccess() {
    return this.getNumberAttribute('pktcapture_with_conn_but_not_tagged_success');
  }
  public set pktcaptureWithConnButNotTaggedSuccess(value: number) {
    this._pktcaptureWithConnButNotTaggedSuccess = value;
  }
  public resetPktcaptureWithConnButNotTaggedSuccess() {
    this._pktcaptureWithConnButNotTaggedSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktcaptureWithConnButNotTaggedSuccessInput() {
    return this._pktcaptureWithConnButNotTaggedSuccess;
  }

  // pktcapture_with_conn_failure - computed: false, optional: true, required: false
  private _pktcaptureWithConnFailure?: number; 
  public get pktcaptureWithConnFailure() {
    return this.getNumberAttribute('pktcapture_with_conn_failure');
  }
  public set pktcaptureWithConnFailure(value: number) {
    this._pktcaptureWithConnFailure = value;
  }
  public resetPktcaptureWithConnFailure() {
    this._pktcaptureWithConnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktcaptureWithConnFailureInput() {
    return this._pktcaptureWithConnFailure;
  }

  // pktcapture_with_conn_failure_global - computed: false, optional: true, required: false
  private _pktcaptureWithConnFailureGlobal?: number; 
  public get pktcaptureWithConnFailureGlobal() {
    return this.getNumberAttribute('pktcapture_with_conn_failure_global');
  }
  public set pktcaptureWithConnFailureGlobal(value: number) {
    this._pktcaptureWithConnFailureGlobal = value;
  }
  public resetPktcaptureWithConnFailureGlobal() {
    this._pktcaptureWithConnFailureGlobal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktcaptureWithConnFailureGlobalInput() {
    return this._pktcaptureWithConnFailureGlobal;
  }

  // pktcapture_with_conn_success - computed: false, optional: true, required: false
  private _pktcaptureWithConnSuccess?: number; 
  public get pktcaptureWithConnSuccess() {
    return this.getNumberAttribute('pktcapture_with_conn_success');
  }
  public set pktcaptureWithConnSuccess(value: number) {
    this._pktcaptureWithConnSuccess = value;
  }
  public resetPktcaptureWithConnSuccess() {
    this._pktcaptureWithConnSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktcaptureWithConnSuccessInput() {
    return this._pktcaptureWithConnSuccess;
  }

  // pktcapture_with_conn_success_global - computed: false, optional: true, required: false
  private _pktcaptureWithConnSuccessGlobal?: number; 
  public get pktcaptureWithConnSuccessGlobal() {
    return this.getNumberAttribute('pktcapture_with_conn_success_global');
  }
  public set pktcaptureWithConnSuccessGlobal(value: number) {
    this._pktcaptureWithConnSuccessGlobal = value;
  }
  public resetPktcaptureWithConnSuccessGlobal() {
    this._pktcaptureWithConnSuccessGlobal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktcaptureWithConnSuccessGlobalInput() {
    return this._pktcaptureWithConnSuccessGlobal;
  }

  // pktcapture_with_no_conn_failure - computed: false, optional: true, required: false
  private _pktcaptureWithNoConnFailure?: number; 
  public get pktcaptureWithNoConnFailure() {
    return this.getNumberAttribute('pktcapture_with_no_conn_failure');
  }
  public set pktcaptureWithNoConnFailure(value: number) {
    this._pktcaptureWithNoConnFailure = value;
  }
  public resetPktcaptureWithNoConnFailure() {
    this._pktcaptureWithNoConnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktcaptureWithNoConnFailureInput() {
    return this._pktcaptureWithNoConnFailure;
  }

  // pktcapture_with_no_conn_success - computed: false, optional: true, required: false
  private _pktcaptureWithNoConnSuccess?: number; 
  public get pktcaptureWithNoConnSuccess() {
    return this.getNumberAttribute('pktcapture_with_no_conn_success');
  }
  public set pktcaptureWithNoConnSuccess(value: number) {
    this._pktcaptureWithNoConnSuccess = value;
  }
  public resetPktcaptureWithNoConnSuccess() {
    this._pktcaptureWithNoConnSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktcaptureWithNoConnSuccessInput() {
    return this._pktcaptureWithNoConnSuccess;
  }

  // skip_as_conn_already_recapture - computed: false, optional: true, required: false
  private _skipAsConnAlreadyRecapture?: number; 
  public get skipAsConnAlreadyRecapture() {
    return this.getNumberAttribute('skip_as_conn_already_recapture');
  }
  public set skipAsConnAlreadyRecapture(value: number) {
    this._skipAsConnAlreadyRecapture = value;
  }
  public resetSkipAsConnAlreadyRecapture() {
    this._skipAsConnAlreadyRecapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipAsConnAlreadyRecaptureInput() {
    return this._skipAsConnAlreadyRecapture;
  }

  // skip_capture_as_conn_created_before_smp - computed: false, optional: true, required: false
  private _skipCaptureAsConnCreatedBeforeSmp?: number; 
  public get skipCaptureAsConnCreatedBeforeSmp() {
    return this.getNumberAttribute('skip_capture_as_conn_created_before_smp');
  }
  public set skipCaptureAsConnCreatedBeforeSmp(value: number) {
    this._skipCaptureAsConnCreatedBeforeSmp = value;
  }
  public resetSkipCaptureAsConnCreatedBeforeSmp() {
    this._skipCaptureAsConnCreatedBeforeSmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCaptureAsConnCreatedBeforeSmpInput() {
    return this._skipCaptureAsConnCreatedBeforeSmp;
  }

  // wrong_ctr_incremented - computed: false, optional: true, required: false
  private _wrongCtrIncremented?: number; 
  public get wrongCtrIncremented() {
    return this.getNumberAttribute('wrong_ctr_incremented');
  }
  public set wrongCtrIncremented(value: number) {
    this._wrongCtrIncremented = value;
  }
  public resetWrongCtrIncremented() {
    this._wrongCtrIncremented = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wrongCtrIncrementedInput() {
    return this._wrongCtrIncremented;
  }
}
export interface DataThunderVisibilityStatsPacketCaptureCaptureConfigListStruct {
  /**
  * Specify the name of the capture-config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#name DataThunderVisibilityStats#name}
  */
  readonly name: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#stats DataThunderVisibilityStats#stats}
  */
  readonly stats?: DataThunderVisibilityStatsPacketCaptureCaptureConfigListStats;
}

export function dataThunderVisibilityStatsPacketCaptureCaptureConfigListStructToTerraform(struct?: DataThunderVisibilityStatsPacketCaptureCaptureConfigListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    stats: dataThunderVisibilityStatsPacketCaptureCaptureConfigListStatsToTerraform(struct!.stats),
  }
}


export function dataThunderVisibilityStatsPacketCaptureCaptureConfigListStructToHclTerraform(struct?: DataThunderVisibilityStatsPacketCaptureCaptureConfigListStruct | cdktf.IResolvable): any {
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
    stats: {
      value: dataThunderVisibilityStatsPacketCaptureCaptureConfigListStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityStatsPacketCaptureCaptureConfigListStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityStatsPacketCaptureCaptureConfigListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityStatsPacketCaptureCaptureConfigListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._stats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stats = this._stats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityStatsPacketCaptureCaptureConfigListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderVisibilityStatsPacketCaptureCaptureConfigListStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderVisibilityStatsPacketCaptureCaptureConfigListStats) {
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

export class DataThunderVisibilityStatsPacketCaptureCaptureConfigListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityStatsPacketCaptureCaptureConfigListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityStatsPacketCaptureCaptureConfigListStructOutputReference {
    return new DataThunderVisibilityStatsPacketCaptureCaptureConfigListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityStatsPacketCaptureStats {
  /**
  * Auto pcapng files merged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#auto_pcap_file_merged DataThunderVisibilityStats#auto_pcap_file_merged}
  */
  readonly autoPcapFileMerged?: number;
  /**
  * Auto pcapng files merged failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#auto_pcap_file_merged_failed DataThunderVisibilityStats#auto_pcap_file_merged_failed}
  */
  readonly autoPcapFileMergedFailed?: number;
  /**
  * Dynamic Capture(ctr anomaly based) freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#concurrent_capture_by_ctr_anomaly_freed DataThunderVisibilityStats#concurrent_capture_by_ctr_anomaly_freed}
  */
  readonly concurrentCaptureByCtrAnomalyFreed?: number;
  /**
  * Dynamic Capture(ctr increment based) freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#concurrent_capture_by_ctr_increment_freed DataThunderVisibilityStats#concurrent_capture_by_ctr_increment_freed}
  */
  readonly concurrentCaptureByCtrIncrementFreed?: number;
  /**
  * Dynamic Capture(Other feature based) freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#concurrent_capture_by_ctr_other_feature_freed DataThunderVisibilityStats#concurrent_capture_by_ctr_other_feature_freed}
  */
  readonly concurrentCaptureByCtrOtherFeatureFreed?: number;
  /**
  * Error, Dynamic Capture(ctr anomaly based) create failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#concurrent_capture_create_failed_by_ctr_anomaly DataThunderVisibilityStats#concurrent_capture_create_failed_by_ctr_anomaly}
  */
  readonly concurrentCaptureCreateFailedByCtrAnomaly?: number;
  /**
  * Error, Dynamic Capture(ctr increment based) create failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#concurrent_capture_create_failed_by_ctr_increment DataThunderVisibilityStats#concurrent_capture_create_failed_by_ctr_increment}
  */
  readonly concurrentCaptureCreateFailedByCtrIncrement?: number;
  /**
  * Error, Dynamic Capture(Other feature based) create failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#concurrent_capture_create_failed_by_other_feature DataThunderVisibilityStats#concurrent_capture_create_failed_by_other_feature}
  */
  readonly concurrentCaptureCreateFailedByOtherFeature?: number;
  /**
  * Error, Dynamic Capture create failed, OOM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#concurrent_capture_create_failed_oom DataThunderVisibilityStats#concurrent_capture_create_failed_oom}
  */
  readonly concurrentCaptureCreateFailedOom?: number;
  /**
  * Dynamic 3 tuple based capture created (ctr anomaly based)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#concurrent_capture_created_by_ctr_anomaly DataThunderVisibilityStats#concurrent_capture_created_by_ctr_anomaly}
  */
  readonly concurrentCaptureCreatedByCtrAnomaly?: number;
  /**
  * Dynamic 3 tuple based capture created (ctr increment based)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#concurrent_capture_created_by_ctr_increment DataThunderVisibilityStats#concurrent_capture_created_by_ctr_increment}
  */
  readonly concurrentCaptureCreatedByCtrIncrement?: number;
  /**
  * Dynamic 3 tuple based capture created (Other feature based)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#concurrent_capture_created_by_other_feature DataThunderVisibilityStats#concurrent_capture_created_by_other_feature}
  */
  readonly concurrentCaptureCreatedByOtherFeature?: number;
  /**
  * Number of Dynamic captures(3 tuple based) finished capturing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#concurrent_capture_finished DataThunderVisibilityStats#concurrent_capture_finished}
  */
  readonly concurrentCaptureFinished?: number;
  /**
  * Dynamic Capture configured concurrent limit reached
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#concurrent_capture_limit_reached DataThunderVisibilityStats#concurrent_capture_limit_reached}
  */
  readonly concurrentCaptureLimitReached?: number;
  /**
  * Error, Conn extension creation fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#conn_ext_failed DataThunderVisibilityStats#conn_ext_failed}
  */
  readonly connExtFailed?: number;
  /**
  * Skip capturing, capture-config marked completed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#failed_as_return_completed_set DataThunderVisibilityStats#failed_as_return_completed_set}
  */
  readonly failedAsReturnCompletedSet?: number;
  /**
  * Error, Capture fail, Disk limit reached
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#failed_disk_full DataThunderVisibilityStats#failed_disk_full}
  */
  readonly failedDiskFull?: number;
  /**
  * Number of times global capture finished capturing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#global_capture_finished DataThunderVisibilityStats#global_capture_finished}
  */
  readonly globalCaptureFinished?: number;
  /**
  * Skip capturing, not packet processing path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#non_pkt_path DataThunderVisibilityStats#non_pkt_path}
  */
  readonly nonPktPath?: number;
  /**
  * Number of capture-config created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_capture_config_created DataThunderVisibilityStats#num_capture_config_created}
  */
  readonly numCaptureConfigCreated?: number;
  /**
  * Number of capture-config set for deletion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_capture_config_delete_q DataThunderVisibilityStats#num_capture_config_delete_q}
  */
  readonly numCaptureConfigDeleteQ?: number;
  /**
  * Number of capture-config deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_capture_config_deleted DataThunderVisibilityStats#num_capture_config_deleted}
  */
  readonly numCaptureConfigDeleted?: number;
  /**
  * Number of times capture-config linked to template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_capture_config_linked DataThunderVisibilityStats#num_capture_config_linked}
  */
  readonly numCaptureConfigLinked?: number;
  /**
  * Number of times capture-config unlinked from template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_capture_config_unlinked DataThunderVisibilityStats#num_capture_config_unlinked}
  */
  readonly numCaptureConfigUnlinked?: number;
  /**
  * Conn tag success (based on ctr anomaly, dynamic)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_conns_tagged_anomaly DataThunderVisibilityStats#num_conns_tagged_anomaly}
  */
  readonly numConnsTaggedAnomaly?: number;
  /**
  * Conn tag fail (based on ctr anomaly, dynamic)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_conns_tagged_anomaly_fail DataThunderVisibilityStats#num_conns_tagged_anomaly_fail}
  */
  readonly numConnsTaggedAnomalyFail?: number;
  /**
  * Conn tag fail, reached limit (based on ctr anomaly, dynamic)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_conns_tagged_anomaly_maxed DataThunderVisibilityStats#num_conns_tagged_anomaly_maxed}
  */
  readonly numConnsTaggedAnomalyMaxed?: number;
  /**
  * Conn tag success (based on ctr anomaly, Global)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_conns_tagged_global_anomaly DataThunderVisibilityStats#num_conns_tagged_global_anomaly}
  */
  readonly numConnsTaggedGlobalAnomaly?: number;
  /**
  * Conn tag fail (based on ctr anomaly, Global)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_conns_tagged_global_anomaly_fail DataThunderVisibilityStats#num_conns_tagged_global_anomaly_fail}
  */
  readonly numConnsTaggedGlobalAnomalyFail?: number;
  /**
  * Conn tag fail, reached limit (based on ctr anomaly, Global)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_conns_tagged_global_anomaly_maxed DataThunderVisibilityStats#num_conns_tagged_global_anomaly_maxed}
  */
  readonly numConnsTaggedGlobalAnomalyMaxed?: number;
  /**
  * Conn tag success (based on ctr increment, Global)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_conns_tagged_global_increment DataThunderVisibilityStats#num_conns_tagged_global_increment}
  */
  readonly numConnsTaggedGlobalIncrement?: number;
  /**
  * Conn tag fail (based on ctr increment, Global)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_conns_tagged_global_increment_fail DataThunderVisibilityStats#num_conns_tagged_global_increment_fail}
  */
  readonly numConnsTaggedGlobalIncrementFail?: number;
  /**
  * Conn tag fail, reached limit (based on ctr increment, Global)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_conns_tagged_global_increment_maxed DataThunderVisibilityStats#num_conns_tagged_global_increment_maxed}
  */
  readonly numConnsTaggedGlobalIncrementMaxed?: number;
  /**
  * Conn tag success (based on Other feature, Global)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_conns_tagged_global_other_feature DataThunderVisibilityStats#num_conns_tagged_global_other_feature}
  */
  readonly numConnsTaggedGlobalOtherFeature?: number;
  /**
  * Conn tag fail (based on Other feature, Global)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_conns_tagged_global_other_feature_fail DataThunderVisibilityStats#num_conns_tagged_global_other_feature_fail}
  */
  readonly numConnsTaggedGlobalOtherFeatureFail?: number;
  /**
  * Conn tag fail, reached limit (based on Other feature, Global)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_conns_tagged_global_other_feature_maxed DataThunderVisibilityStats#num_conns_tagged_global_other_feature_maxed}
  */
  readonly numConnsTaggedGlobalOtherFeatureMaxed?: number;
  /**
  * Conn tag success (based on ctr increment, dynamic)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_conns_tagged_increment DataThunderVisibilityStats#num_conns_tagged_increment}
  */
  readonly numConnsTaggedIncrement?: number;
  /**
  * Conn tag fail (based on ctr increment, dynamic)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_conns_tagged_increment_fail DataThunderVisibilityStats#num_conns_tagged_increment_fail}
  */
  readonly numConnsTaggedIncrementFail?: number;
  /**
  * Conn tag fail, reached limit (based on ctr increment, dynamic)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_conns_tagged_increment_maxed DataThunderVisibilityStats#num_conns_tagged_increment_maxed}
  */
  readonly numConnsTaggedIncrementMaxed?: number;
  /**
  * Conn tag success (based on Other feature, dynamic)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_conns_tagged_other_feature DataThunderVisibilityStats#num_conns_tagged_other_feature}
  */
  readonly numConnsTaggedOtherFeature?: number;
  /**
  * Conn tag fail (based on Other feature, dynamic)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_conns_tagged_other_feature_fail DataThunderVisibilityStats#num_conns_tagged_other_feature_fail}
  */
  readonly numConnsTaggedOtherFeatureFail?: number;
  /**
  * Conn tag fail, reached limit (based on Other feature, dynamic)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_conns_tagged_other_feature_maxed DataThunderVisibilityStats#num_conns_tagged_other_feature_maxed}
  */
  readonly numConnsTaggedOtherFeatureMaxed?: number;
  /**
  * Number of conns untagged (done with conn limit or capture)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_conns_untagged DataThunderVisibilityStats#num_conns_untagged}
  */
  readonly numConnsUntagged?: number;
  /**
  * Number of dynamic capture-config created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_dynamic_capture_config_created DataThunderVisibilityStats#num_dynamic_capture_config_created}
  */
  readonly numDynamicCaptureConfigCreated?: number;
  /**
  * Number of dynamic capture-config set for deletion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_dynamic_capture_config_delete_q DataThunderVisibilityStats#num_dynamic_capture_config_delete_q}
  */
  readonly numDynamicCaptureConfigDeleteQ?: number;
  /**
  * Number of dynamic capture-config deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_dynamic_capture_config_deleted DataThunderVisibilityStats#num_dynamic_capture_config_deleted}
  */
  readonly numDynamicCaptureConfigDeleted?: number;
  /**
  * Number of times dynamic capture-config linked to template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_dynamic_capture_config_linked DataThunderVisibilityStats#num_dynamic_capture_config_linked}
  */
  readonly numDynamicCaptureConfigLinked?: number;
  /**
  * Number of times dynamic capture-config unlinked from template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_dynamic_capture_config_unlinked DataThunderVisibilityStats#num_dynamic_capture_config_unlinked}
  */
  readonly numDynamicCaptureConfigUnlinked?: number;
  /**
  * Number of global objects deregistered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_global_counters_deregistered DataThunderVisibilityStats#num_global_counters_deregistered}
  */
  readonly numGlobalCountersDeregistered?: number;
  /**
  * Number of global objects registered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_global_counters_registered DataThunderVisibilityStats#num_global_counters_registered}
  */
  readonly numGlobalCountersRegistered?: number;
  /**
  * Number of global templates created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_global_tmpl_created DataThunderVisibilityStats#num_global_tmpl_created}
  */
  readonly numGlobalTmplCreated?: number;
  /**
  * Number of global templates deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_global_tmpl_deleted DataThunderVisibilityStats#num_global_tmpl_deleted}
  */
  readonly numGlobalTmplDeleted?: number;
  /**
  * Number of object templates created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_object_tmpl_created DataThunderVisibilityStats#num_object_tmpl_created}
  */
  readonly numObjectTmplCreated?: number;
  /**
  * Number of object templates deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_object_tmpl_deleted DataThunderVisibilityStats#num_object_tmpl_deleted}
  */
  readonly numObjectTmplDeleted?: number;
  /**
  * Number of times ctr Anomaly cleared
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_of_anomalies_cleared DataThunderVisibilityStats#num_of_anomalies_cleared}
  */
  readonly numOfAnomaliesCleared?: number;
  /**
  * Number of times ctr Anomaly detected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_of_anomalies_detected DataThunderVisibilityStats#num_of_anomalies_detected}
  */
  readonly numOfAnomaliesDetected?: number;
  /**
  * Error, Number of pcapng files creation failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_pcaps_create_failed DataThunderVisibilityStats#num_pcaps_create_failed}
  */
  readonly numPcapsCreateFailed?: number;
  /**
  * Number of pcapng files created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_pcaps_created DataThunderVisibilityStats#num_pcaps_created}
  */
  readonly numPcapsCreated?: number;
  /**
  * Number of per instance objects deregistered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_per_object_counters_deregistered DataThunderVisibilityStats#num_per_object_counters_deregistered}
  */
  readonly numPerObjectCountersDeregistered?: number;
  /**
  * Number of per instance objects registered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_per_object_counters_registered DataThunderVisibilityStats#num_per_object_counters_registered}
  */
  readonly numPerObjectCountersRegistered?: number;
  /**
  * Number of temporary pcapng files created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#num_tmp_pcaps_created DataThunderVisibilityStats#num_tmp_pcaps_created}
  */
  readonly numTmpPcapsCreated?: number;
  /**
  * Skip capturing, packet already captured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#pkt_already_captured DataThunderVisibilityStats#pkt_already_captured}
  */
  readonly pktAlreadyCaptured?: number;
  /**
  * Error, Automated Packet capture infra OOM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#pktcap_oom DataThunderVisibilityStats#pktcap_oom}
  */
  readonly pktcapOom?: number;
  /**
  * Capture fail, file size reached
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#pktcapture_failure_file_size_rchd DataThunderVisibilityStats#pktcapture_failure_file_size_rchd}
  */
  readonly pktcaptureFailureFileSizeRchd?: number;
  /**
  * Capture fail, waiting to get free buffer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#pktcapture_failure_wait_for_block DataThunderVisibilityStats#pktcapture_failure_wait_for_block}
  */
  readonly pktcaptureFailureWaitForBlock?: number;
  /**
  * Capture triggered by counter anomaly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#pktcapture_triggered_by_anomaly DataThunderVisibilityStats#pktcapture_triggered_by_anomaly}
  */
  readonly pktcaptureTriggeredByAnomaly?: number;
  /**
  * Capture triggered by counter increment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#pktcapture_triggered_by_increment DataThunderVisibilityStats#pktcapture_triggered_by_increment}
  */
  readonly pktcaptureTriggeredByIncrement?: number;
  /**
  * Capture triggered by Other feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#pktcapture_triggered_by_other_feature DataThunderVisibilityStats#pktcapture_triggered_by_other_feature}
  */
  readonly pktcaptureTriggeredByOtherFeature?: number;
  /**
  * Capture fail, Packets with untagged conn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#pktcapture_with_conn_but_not_tagged_failure DataThunderVisibilityStats#pktcapture_with_conn_but_not_tagged_failure}
  */
  readonly pktcaptureWithConnButNotTaggedFailure?: number;
  /**
  * Capture success, Packets with untagged conn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#pktcapture_with_conn_but_not_tagged_success DataThunderVisibilityStats#pktcapture_with_conn_but_not_tagged_success}
  */
  readonly pktcaptureWithConnButNotTaggedSuccess?: number;
  /**
  * Capture fail, Packets with tagged conn (dynamic capture)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#pktcapture_with_conn_failure DataThunderVisibilityStats#pktcapture_with_conn_failure}
  */
  readonly pktcaptureWithConnFailure?: number;
  /**
  * Capture fail, Packets with tagged conn (global capture)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#pktcapture_with_conn_failure_global DataThunderVisibilityStats#pktcapture_with_conn_failure_global}
  */
  readonly pktcaptureWithConnFailureGlobal?: number;
  /**
  * Capture success, Packets with tagged conn (dynamic capture)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#pktcapture_with_conn_success DataThunderVisibilityStats#pktcapture_with_conn_success}
  */
  readonly pktcaptureWithConnSuccess?: number;
  /**
  * Capture success, Packets with tagged conn (global capture)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#pktcapture_with_conn_success_global DataThunderVisibilityStats#pktcapture_with_conn_success_global}
  */
  readonly pktcaptureWithConnSuccessGlobal?: number;
  /**
  * Capture fail, Packets without conn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#pktcapture_with_no_conn_failure DataThunderVisibilityStats#pktcapture_with_no_conn_failure}
  */
  readonly pktcaptureWithNoConnFailure?: number;
  /**
  * Capture success, Packets without conn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#pktcapture_with_no_conn_success DataThunderVisibilityStats#pktcapture_with_no_conn_success}
  */
  readonly pktcaptureWithNoConnSuccess?: number;
  /**
  * Skip creating capture, conn was already captured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#skip_as_conn_already_recapture DataThunderVisibilityStats#skip_as_conn_already_recapture}
  */
  readonly skipAsConnAlreadyRecapture?: number;
  /**
  * Skip capturing, conn was created before the capture started
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#skip_capture_as_conn_created_before_smp DataThunderVisibilityStats#skip_capture_as_conn_created_before_smp}
  */
  readonly skipCaptureAsConnCreatedBeforeSmp?: number;
  /**
  * Counter increment issue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#wrong_ctr_incremented DataThunderVisibilityStats#wrong_ctr_incremented}
  */
  readonly wrongCtrIncremented?: number;
}

export function dataThunderVisibilityStatsPacketCaptureStatsToTerraform(struct?: DataThunderVisibilityStatsPacketCaptureStatsOutputReference | DataThunderVisibilityStatsPacketCaptureStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_pcap_file_merged: cdktf.numberToTerraform(struct!.autoPcapFileMerged),
    auto_pcap_file_merged_failed: cdktf.numberToTerraform(struct!.autoPcapFileMergedFailed),
    concurrent_capture_by_ctr_anomaly_freed: cdktf.numberToTerraform(struct!.concurrentCaptureByCtrAnomalyFreed),
    concurrent_capture_by_ctr_increment_freed: cdktf.numberToTerraform(struct!.concurrentCaptureByCtrIncrementFreed),
    concurrent_capture_by_ctr_other_feature_freed: cdktf.numberToTerraform(struct!.concurrentCaptureByCtrOtherFeatureFreed),
    concurrent_capture_create_failed_by_ctr_anomaly: cdktf.numberToTerraform(struct!.concurrentCaptureCreateFailedByCtrAnomaly),
    concurrent_capture_create_failed_by_ctr_increment: cdktf.numberToTerraform(struct!.concurrentCaptureCreateFailedByCtrIncrement),
    concurrent_capture_create_failed_by_other_feature: cdktf.numberToTerraform(struct!.concurrentCaptureCreateFailedByOtherFeature),
    concurrent_capture_create_failed_oom: cdktf.numberToTerraform(struct!.concurrentCaptureCreateFailedOom),
    concurrent_capture_created_by_ctr_anomaly: cdktf.numberToTerraform(struct!.concurrentCaptureCreatedByCtrAnomaly),
    concurrent_capture_created_by_ctr_increment: cdktf.numberToTerraform(struct!.concurrentCaptureCreatedByCtrIncrement),
    concurrent_capture_created_by_other_feature: cdktf.numberToTerraform(struct!.concurrentCaptureCreatedByOtherFeature),
    concurrent_capture_finished: cdktf.numberToTerraform(struct!.concurrentCaptureFinished),
    concurrent_capture_limit_reached: cdktf.numberToTerraform(struct!.concurrentCaptureLimitReached),
    conn_ext_failed: cdktf.numberToTerraform(struct!.connExtFailed),
    failed_as_return_completed_set: cdktf.numberToTerraform(struct!.failedAsReturnCompletedSet),
    failed_disk_full: cdktf.numberToTerraform(struct!.failedDiskFull),
    global_capture_finished: cdktf.numberToTerraform(struct!.globalCaptureFinished),
    non_pkt_path: cdktf.numberToTerraform(struct!.nonPktPath),
    num_capture_config_created: cdktf.numberToTerraform(struct!.numCaptureConfigCreated),
    num_capture_config_delete_q: cdktf.numberToTerraform(struct!.numCaptureConfigDeleteQ),
    num_capture_config_deleted: cdktf.numberToTerraform(struct!.numCaptureConfigDeleted),
    num_capture_config_linked: cdktf.numberToTerraform(struct!.numCaptureConfigLinked),
    num_capture_config_unlinked: cdktf.numberToTerraform(struct!.numCaptureConfigUnlinked),
    num_conns_tagged_anomaly: cdktf.numberToTerraform(struct!.numConnsTaggedAnomaly),
    num_conns_tagged_anomaly_fail: cdktf.numberToTerraform(struct!.numConnsTaggedAnomalyFail),
    num_conns_tagged_anomaly_maxed: cdktf.numberToTerraform(struct!.numConnsTaggedAnomalyMaxed),
    num_conns_tagged_global_anomaly: cdktf.numberToTerraform(struct!.numConnsTaggedGlobalAnomaly),
    num_conns_tagged_global_anomaly_fail: cdktf.numberToTerraform(struct!.numConnsTaggedGlobalAnomalyFail),
    num_conns_tagged_global_anomaly_maxed: cdktf.numberToTerraform(struct!.numConnsTaggedGlobalAnomalyMaxed),
    num_conns_tagged_global_increment: cdktf.numberToTerraform(struct!.numConnsTaggedGlobalIncrement),
    num_conns_tagged_global_increment_fail: cdktf.numberToTerraform(struct!.numConnsTaggedGlobalIncrementFail),
    num_conns_tagged_global_increment_maxed: cdktf.numberToTerraform(struct!.numConnsTaggedGlobalIncrementMaxed),
    num_conns_tagged_global_other_feature: cdktf.numberToTerraform(struct!.numConnsTaggedGlobalOtherFeature),
    num_conns_tagged_global_other_feature_fail: cdktf.numberToTerraform(struct!.numConnsTaggedGlobalOtherFeatureFail),
    num_conns_tagged_global_other_feature_maxed: cdktf.numberToTerraform(struct!.numConnsTaggedGlobalOtherFeatureMaxed),
    num_conns_tagged_increment: cdktf.numberToTerraform(struct!.numConnsTaggedIncrement),
    num_conns_tagged_increment_fail: cdktf.numberToTerraform(struct!.numConnsTaggedIncrementFail),
    num_conns_tagged_increment_maxed: cdktf.numberToTerraform(struct!.numConnsTaggedIncrementMaxed),
    num_conns_tagged_other_feature: cdktf.numberToTerraform(struct!.numConnsTaggedOtherFeature),
    num_conns_tagged_other_feature_fail: cdktf.numberToTerraform(struct!.numConnsTaggedOtherFeatureFail),
    num_conns_tagged_other_feature_maxed: cdktf.numberToTerraform(struct!.numConnsTaggedOtherFeatureMaxed),
    num_conns_untagged: cdktf.numberToTerraform(struct!.numConnsUntagged),
    num_dynamic_capture_config_created: cdktf.numberToTerraform(struct!.numDynamicCaptureConfigCreated),
    num_dynamic_capture_config_delete_q: cdktf.numberToTerraform(struct!.numDynamicCaptureConfigDeleteQ),
    num_dynamic_capture_config_deleted: cdktf.numberToTerraform(struct!.numDynamicCaptureConfigDeleted),
    num_dynamic_capture_config_linked: cdktf.numberToTerraform(struct!.numDynamicCaptureConfigLinked),
    num_dynamic_capture_config_unlinked: cdktf.numberToTerraform(struct!.numDynamicCaptureConfigUnlinked),
    num_global_counters_deregistered: cdktf.numberToTerraform(struct!.numGlobalCountersDeregistered),
    num_global_counters_registered: cdktf.numberToTerraform(struct!.numGlobalCountersRegistered),
    num_global_tmpl_created: cdktf.numberToTerraform(struct!.numGlobalTmplCreated),
    num_global_tmpl_deleted: cdktf.numberToTerraform(struct!.numGlobalTmplDeleted),
    num_object_tmpl_created: cdktf.numberToTerraform(struct!.numObjectTmplCreated),
    num_object_tmpl_deleted: cdktf.numberToTerraform(struct!.numObjectTmplDeleted),
    num_of_anomalies_cleared: cdktf.numberToTerraform(struct!.numOfAnomaliesCleared),
    num_of_anomalies_detected: cdktf.numberToTerraform(struct!.numOfAnomaliesDetected),
    num_pcaps_create_failed: cdktf.numberToTerraform(struct!.numPcapsCreateFailed),
    num_pcaps_created: cdktf.numberToTerraform(struct!.numPcapsCreated),
    num_per_object_counters_deregistered: cdktf.numberToTerraform(struct!.numPerObjectCountersDeregistered),
    num_per_object_counters_registered: cdktf.numberToTerraform(struct!.numPerObjectCountersRegistered),
    num_tmp_pcaps_created: cdktf.numberToTerraform(struct!.numTmpPcapsCreated),
    pkt_already_captured: cdktf.numberToTerraform(struct!.pktAlreadyCaptured),
    pktcap_oom: cdktf.numberToTerraform(struct!.pktcapOom),
    pktcapture_failure_file_size_rchd: cdktf.numberToTerraform(struct!.pktcaptureFailureFileSizeRchd),
    pktcapture_failure_wait_for_block: cdktf.numberToTerraform(struct!.pktcaptureFailureWaitForBlock),
    pktcapture_triggered_by_anomaly: cdktf.numberToTerraform(struct!.pktcaptureTriggeredByAnomaly),
    pktcapture_triggered_by_increment: cdktf.numberToTerraform(struct!.pktcaptureTriggeredByIncrement),
    pktcapture_triggered_by_other_feature: cdktf.numberToTerraform(struct!.pktcaptureTriggeredByOtherFeature),
    pktcapture_with_conn_but_not_tagged_failure: cdktf.numberToTerraform(struct!.pktcaptureWithConnButNotTaggedFailure),
    pktcapture_with_conn_but_not_tagged_success: cdktf.numberToTerraform(struct!.pktcaptureWithConnButNotTaggedSuccess),
    pktcapture_with_conn_failure: cdktf.numberToTerraform(struct!.pktcaptureWithConnFailure),
    pktcapture_with_conn_failure_global: cdktf.numberToTerraform(struct!.pktcaptureWithConnFailureGlobal),
    pktcapture_with_conn_success: cdktf.numberToTerraform(struct!.pktcaptureWithConnSuccess),
    pktcapture_with_conn_success_global: cdktf.numberToTerraform(struct!.pktcaptureWithConnSuccessGlobal),
    pktcapture_with_no_conn_failure: cdktf.numberToTerraform(struct!.pktcaptureWithNoConnFailure),
    pktcapture_with_no_conn_success: cdktf.numberToTerraform(struct!.pktcaptureWithNoConnSuccess),
    skip_as_conn_already_recapture: cdktf.numberToTerraform(struct!.skipAsConnAlreadyRecapture),
    skip_capture_as_conn_created_before_smp: cdktf.numberToTerraform(struct!.skipCaptureAsConnCreatedBeforeSmp),
    wrong_ctr_incremented: cdktf.numberToTerraform(struct!.wrongCtrIncremented),
  }
}


export function dataThunderVisibilityStatsPacketCaptureStatsToHclTerraform(struct?: DataThunderVisibilityStatsPacketCaptureStatsOutputReference | DataThunderVisibilityStatsPacketCaptureStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_pcap_file_merged: {
      value: cdktf.numberToHclTerraform(struct!.autoPcapFileMerged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auto_pcap_file_merged_failed: {
      value: cdktf.numberToHclTerraform(struct!.autoPcapFileMergedFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrent_capture_by_ctr_anomaly_freed: {
      value: cdktf.numberToHclTerraform(struct!.concurrentCaptureByCtrAnomalyFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrent_capture_by_ctr_increment_freed: {
      value: cdktf.numberToHclTerraform(struct!.concurrentCaptureByCtrIncrementFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrent_capture_by_ctr_other_feature_freed: {
      value: cdktf.numberToHclTerraform(struct!.concurrentCaptureByCtrOtherFeatureFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrent_capture_create_failed_by_ctr_anomaly: {
      value: cdktf.numberToHclTerraform(struct!.concurrentCaptureCreateFailedByCtrAnomaly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrent_capture_create_failed_by_ctr_increment: {
      value: cdktf.numberToHclTerraform(struct!.concurrentCaptureCreateFailedByCtrIncrement),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrent_capture_create_failed_by_other_feature: {
      value: cdktf.numberToHclTerraform(struct!.concurrentCaptureCreateFailedByOtherFeature),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrent_capture_create_failed_oom: {
      value: cdktf.numberToHclTerraform(struct!.concurrentCaptureCreateFailedOom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrent_capture_created_by_ctr_anomaly: {
      value: cdktf.numberToHclTerraform(struct!.concurrentCaptureCreatedByCtrAnomaly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrent_capture_created_by_ctr_increment: {
      value: cdktf.numberToHclTerraform(struct!.concurrentCaptureCreatedByCtrIncrement),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrent_capture_created_by_other_feature: {
      value: cdktf.numberToHclTerraform(struct!.concurrentCaptureCreatedByOtherFeature),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrent_capture_finished: {
      value: cdktf.numberToHclTerraform(struct!.concurrentCaptureFinished),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrent_capture_limit_reached: {
      value: cdktf.numberToHclTerraform(struct!.concurrentCaptureLimitReached),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_ext_failed: {
      value: cdktf.numberToHclTerraform(struct!.connExtFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    failed_as_return_completed_set: {
      value: cdktf.numberToHclTerraform(struct!.failedAsReturnCompletedSet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    failed_disk_full: {
      value: cdktf.numberToHclTerraform(struct!.failedDiskFull),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    global_capture_finished: {
      value: cdktf.numberToHclTerraform(struct!.globalCaptureFinished),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    non_pkt_path: {
      value: cdktf.numberToHclTerraform(struct!.nonPktPath),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_capture_config_created: {
      value: cdktf.numberToHclTerraform(struct!.numCaptureConfigCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_capture_config_delete_q: {
      value: cdktf.numberToHclTerraform(struct!.numCaptureConfigDeleteQ),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_capture_config_deleted: {
      value: cdktf.numberToHclTerraform(struct!.numCaptureConfigDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_capture_config_linked: {
      value: cdktf.numberToHclTerraform(struct!.numCaptureConfigLinked),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_capture_config_unlinked: {
      value: cdktf.numberToHclTerraform(struct!.numCaptureConfigUnlinked),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_anomaly: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedAnomaly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_anomaly_fail: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedAnomalyFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_anomaly_maxed: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedAnomalyMaxed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_global_anomaly: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedGlobalAnomaly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_global_anomaly_fail: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedGlobalAnomalyFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_global_anomaly_maxed: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedGlobalAnomalyMaxed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_global_increment: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedGlobalIncrement),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_global_increment_fail: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedGlobalIncrementFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_global_increment_maxed: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedGlobalIncrementMaxed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_global_other_feature: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedGlobalOtherFeature),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_global_other_feature_fail: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedGlobalOtherFeatureFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_global_other_feature_maxed: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedGlobalOtherFeatureMaxed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_increment: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedIncrement),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_increment_fail: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedIncrementFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_increment_maxed: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedIncrementMaxed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_other_feature: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedOtherFeature),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_other_feature_fail: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedOtherFeatureFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_other_feature_maxed: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedOtherFeatureMaxed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_untagged: {
      value: cdktf.numberToHclTerraform(struct!.numConnsUntagged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_dynamic_capture_config_created: {
      value: cdktf.numberToHclTerraform(struct!.numDynamicCaptureConfigCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_dynamic_capture_config_delete_q: {
      value: cdktf.numberToHclTerraform(struct!.numDynamicCaptureConfigDeleteQ),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_dynamic_capture_config_deleted: {
      value: cdktf.numberToHclTerraform(struct!.numDynamicCaptureConfigDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_dynamic_capture_config_linked: {
      value: cdktf.numberToHclTerraform(struct!.numDynamicCaptureConfigLinked),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_dynamic_capture_config_unlinked: {
      value: cdktf.numberToHclTerraform(struct!.numDynamicCaptureConfigUnlinked),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_global_counters_deregistered: {
      value: cdktf.numberToHclTerraform(struct!.numGlobalCountersDeregistered),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_global_counters_registered: {
      value: cdktf.numberToHclTerraform(struct!.numGlobalCountersRegistered),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_global_tmpl_created: {
      value: cdktf.numberToHclTerraform(struct!.numGlobalTmplCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_global_tmpl_deleted: {
      value: cdktf.numberToHclTerraform(struct!.numGlobalTmplDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_object_tmpl_created: {
      value: cdktf.numberToHclTerraform(struct!.numObjectTmplCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_object_tmpl_deleted: {
      value: cdktf.numberToHclTerraform(struct!.numObjectTmplDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_of_anomalies_cleared: {
      value: cdktf.numberToHclTerraform(struct!.numOfAnomaliesCleared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_of_anomalies_detected: {
      value: cdktf.numberToHclTerraform(struct!.numOfAnomaliesDetected),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_pcaps_create_failed: {
      value: cdktf.numberToHclTerraform(struct!.numPcapsCreateFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_pcaps_created: {
      value: cdktf.numberToHclTerraform(struct!.numPcapsCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_per_object_counters_deregistered: {
      value: cdktf.numberToHclTerraform(struct!.numPerObjectCountersDeregistered),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_per_object_counters_registered: {
      value: cdktf.numberToHclTerraform(struct!.numPerObjectCountersRegistered),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_tmp_pcaps_created: {
      value: cdktf.numberToHclTerraform(struct!.numTmpPcapsCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkt_already_captured: {
      value: cdktf.numberToHclTerraform(struct!.pktAlreadyCaptured),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktcap_oom: {
      value: cdktf.numberToHclTerraform(struct!.pktcapOom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktcapture_failure_file_size_rchd: {
      value: cdktf.numberToHclTerraform(struct!.pktcaptureFailureFileSizeRchd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktcapture_failure_wait_for_block: {
      value: cdktf.numberToHclTerraform(struct!.pktcaptureFailureWaitForBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktcapture_triggered_by_anomaly: {
      value: cdktf.numberToHclTerraform(struct!.pktcaptureTriggeredByAnomaly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktcapture_triggered_by_increment: {
      value: cdktf.numberToHclTerraform(struct!.pktcaptureTriggeredByIncrement),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktcapture_triggered_by_other_feature: {
      value: cdktf.numberToHclTerraform(struct!.pktcaptureTriggeredByOtherFeature),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktcapture_with_conn_but_not_tagged_failure: {
      value: cdktf.numberToHclTerraform(struct!.pktcaptureWithConnButNotTaggedFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktcapture_with_conn_but_not_tagged_success: {
      value: cdktf.numberToHclTerraform(struct!.pktcaptureWithConnButNotTaggedSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktcapture_with_conn_failure: {
      value: cdktf.numberToHclTerraform(struct!.pktcaptureWithConnFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktcapture_with_conn_failure_global: {
      value: cdktf.numberToHclTerraform(struct!.pktcaptureWithConnFailureGlobal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktcapture_with_conn_success: {
      value: cdktf.numberToHclTerraform(struct!.pktcaptureWithConnSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktcapture_with_conn_success_global: {
      value: cdktf.numberToHclTerraform(struct!.pktcaptureWithConnSuccessGlobal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktcapture_with_no_conn_failure: {
      value: cdktf.numberToHclTerraform(struct!.pktcaptureWithNoConnFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktcapture_with_no_conn_success: {
      value: cdktf.numberToHclTerraform(struct!.pktcaptureWithNoConnSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    skip_as_conn_already_recapture: {
      value: cdktf.numberToHclTerraform(struct!.skipAsConnAlreadyRecapture),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    skip_capture_as_conn_created_before_smp: {
      value: cdktf.numberToHclTerraform(struct!.skipCaptureAsConnCreatedBeforeSmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wrong_ctr_incremented: {
      value: cdktf.numberToHclTerraform(struct!.wrongCtrIncremented),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityStatsPacketCaptureStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityStatsPacketCaptureStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoPcapFileMerged !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoPcapFileMerged = this._autoPcapFileMerged;
    }
    if (this._autoPcapFileMergedFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoPcapFileMergedFailed = this._autoPcapFileMergedFailed;
    }
    if (this._concurrentCaptureByCtrAnomalyFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentCaptureByCtrAnomalyFreed = this._concurrentCaptureByCtrAnomalyFreed;
    }
    if (this._concurrentCaptureByCtrIncrementFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentCaptureByCtrIncrementFreed = this._concurrentCaptureByCtrIncrementFreed;
    }
    if (this._concurrentCaptureByCtrOtherFeatureFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentCaptureByCtrOtherFeatureFreed = this._concurrentCaptureByCtrOtherFeatureFreed;
    }
    if (this._concurrentCaptureCreateFailedByCtrAnomaly !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentCaptureCreateFailedByCtrAnomaly = this._concurrentCaptureCreateFailedByCtrAnomaly;
    }
    if (this._concurrentCaptureCreateFailedByCtrIncrement !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentCaptureCreateFailedByCtrIncrement = this._concurrentCaptureCreateFailedByCtrIncrement;
    }
    if (this._concurrentCaptureCreateFailedByOtherFeature !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentCaptureCreateFailedByOtherFeature = this._concurrentCaptureCreateFailedByOtherFeature;
    }
    if (this._concurrentCaptureCreateFailedOom !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentCaptureCreateFailedOom = this._concurrentCaptureCreateFailedOom;
    }
    if (this._concurrentCaptureCreatedByCtrAnomaly !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentCaptureCreatedByCtrAnomaly = this._concurrentCaptureCreatedByCtrAnomaly;
    }
    if (this._concurrentCaptureCreatedByCtrIncrement !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentCaptureCreatedByCtrIncrement = this._concurrentCaptureCreatedByCtrIncrement;
    }
    if (this._concurrentCaptureCreatedByOtherFeature !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentCaptureCreatedByOtherFeature = this._concurrentCaptureCreatedByOtherFeature;
    }
    if (this._concurrentCaptureFinished !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentCaptureFinished = this._concurrentCaptureFinished;
    }
    if (this._concurrentCaptureLimitReached !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentCaptureLimitReached = this._concurrentCaptureLimitReached;
    }
    if (this._connExtFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.connExtFailed = this._connExtFailed;
    }
    if (this._failedAsReturnCompletedSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.failedAsReturnCompletedSet = this._failedAsReturnCompletedSet;
    }
    if (this._failedDiskFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.failedDiskFull = this._failedDiskFull;
    }
    if (this._globalCaptureFinished !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalCaptureFinished = this._globalCaptureFinished;
    }
    if (this._nonPktPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonPktPath = this._nonPktPath;
    }
    if (this._numCaptureConfigCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.numCaptureConfigCreated = this._numCaptureConfigCreated;
    }
    if (this._numCaptureConfigDeleteQ !== undefined) {
      hasAnyValues = true;
      internalValueResult.numCaptureConfigDeleteQ = this._numCaptureConfigDeleteQ;
    }
    if (this._numCaptureConfigDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.numCaptureConfigDeleted = this._numCaptureConfigDeleted;
    }
    if (this._numCaptureConfigLinked !== undefined) {
      hasAnyValues = true;
      internalValueResult.numCaptureConfigLinked = this._numCaptureConfigLinked;
    }
    if (this._numCaptureConfigUnlinked !== undefined) {
      hasAnyValues = true;
      internalValueResult.numCaptureConfigUnlinked = this._numCaptureConfigUnlinked;
    }
    if (this._numConnsTaggedAnomaly !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedAnomaly = this._numConnsTaggedAnomaly;
    }
    if (this._numConnsTaggedAnomalyFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedAnomalyFail = this._numConnsTaggedAnomalyFail;
    }
    if (this._numConnsTaggedAnomalyMaxed !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedAnomalyMaxed = this._numConnsTaggedAnomalyMaxed;
    }
    if (this._numConnsTaggedGlobalAnomaly !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedGlobalAnomaly = this._numConnsTaggedGlobalAnomaly;
    }
    if (this._numConnsTaggedGlobalAnomalyFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedGlobalAnomalyFail = this._numConnsTaggedGlobalAnomalyFail;
    }
    if (this._numConnsTaggedGlobalAnomalyMaxed !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedGlobalAnomalyMaxed = this._numConnsTaggedGlobalAnomalyMaxed;
    }
    if (this._numConnsTaggedGlobalIncrement !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedGlobalIncrement = this._numConnsTaggedGlobalIncrement;
    }
    if (this._numConnsTaggedGlobalIncrementFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedGlobalIncrementFail = this._numConnsTaggedGlobalIncrementFail;
    }
    if (this._numConnsTaggedGlobalIncrementMaxed !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedGlobalIncrementMaxed = this._numConnsTaggedGlobalIncrementMaxed;
    }
    if (this._numConnsTaggedGlobalOtherFeature !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedGlobalOtherFeature = this._numConnsTaggedGlobalOtherFeature;
    }
    if (this._numConnsTaggedGlobalOtherFeatureFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedGlobalOtherFeatureFail = this._numConnsTaggedGlobalOtherFeatureFail;
    }
    if (this._numConnsTaggedGlobalOtherFeatureMaxed !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedGlobalOtherFeatureMaxed = this._numConnsTaggedGlobalOtherFeatureMaxed;
    }
    if (this._numConnsTaggedIncrement !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedIncrement = this._numConnsTaggedIncrement;
    }
    if (this._numConnsTaggedIncrementFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedIncrementFail = this._numConnsTaggedIncrementFail;
    }
    if (this._numConnsTaggedIncrementMaxed !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedIncrementMaxed = this._numConnsTaggedIncrementMaxed;
    }
    if (this._numConnsTaggedOtherFeature !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedOtherFeature = this._numConnsTaggedOtherFeature;
    }
    if (this._numConnsTaggedOtherFeatureFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedOtherFeatureFail = this._numConnsTaggedOtherFeatureFail;
    }
    if (this._numConnsTaggedOtherFeatureMaxed !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedOtherFeatureMaxed = this._numConnsTaggedOtherFeatureMaxed;
    }
    if (this._numConnsUntagged !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsUntagged = this._numConnsUntagged;
    }
    if (this._numDynamicCaptureConfigCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.numDynamicCaptureConfigCreated = this._numDynamicCaptureConfigCreated;
    }
    if (this._numDynamicCaptureConfigDeleteQ !== undefined) {
      hasAnyValues = true;
      internalValueResult.numDynamicCaptureConfigDeleteQ = this._numDynamicCaptureConfigDeleteQ;
    }
    if (this._numDynamicCaptureConfigDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.numDynamicCaptureConfigDeleted = this._numDynamicCaptureConfigDeleted;
    }
    if (this._numDynamicCaptureConfigLinked !== undefined) {
      hasAnyValues = true;
      internalValueResult.numDynamicCaptureConfigLinked = this._numDynamicCaptureConfigLinked;
    }
    if (this._numDynamicCaptureConfigUnlinked !== undefined) {
      hasAnyValues = true;
      internalValueResult.numDynamicCaptureConfigUnlinked = this._numDynamicCaptureConfigUnlinked;
    }
    if (this._numGlobalCountersDeregistered !== undefined) {
      hasAnyValues = true;
      internalValueResult.numGlobalCountersDeregistered = this._numGlobalCountersDeregistered;
    }
    if (this._numGlobalCountersRegistered !== undefined) {
      hasAnyValues = true;
      internalValueResult.numGlobalCountersRegistered = this._numGlobalCountersRegistered;
    }
    if (this._numGlobalTmplCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.numGlobalTmplCreated = this._numGlobalTmplCreated;
    }
    if (this._numGlobalTmplDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.numGlobalTmplDeleted = this._numGlobalTmplDeleted;
    }
    if (this._numObjectTmplCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.numObjectTmplCreated = this._numObjectTmplCreated;
    }
    if (this._numObjectTmplDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.numObjectTmplDeleted = this._numObjectTmplDeleted;
    }
    if (this._numOfAnomaliesCleared !== undefined) {
      hasAnyValues = true;
      internalValueResult.numOfAnomaliesCleared = this._numOfAnomaliesCleared;
    }
    if (this._numOfAnomaliesDetected !== undefined) {
      hasAnyValues = true;
      internalValueResult.numOfAnomaliesDetected = this._numOfAnomaliesDetected;
    }
    if (this._numPcapsCreateFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.numPcapsCreateFailed = this._numPcapsCreateFailed;
    }
    if (this._numPcapsCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.numPcapsCreated = this._numPcapsCreated;
    }
    if (this._numPerObjectCountersDeregistered !== undefined) {
      hasAnyValues = true;
      internalValueResult.numPerObjectCountersDeregistered = this._numPerObjectCountersDeregistered;
    }
    if (this._numPerObjectCountersRegistered !== undefined) {
      hasAnyValues = true;
      internalValueResult.numPerObjectCountersRegistered = this._numPerObjectCountersRegistered;
    }
    if (this._numTmpPcapsCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.numTmpPcapsCreated = this._numTmpPcapsCreated;
    }
    if (this._pktAlreadyCaptured !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktAlreadyCaptured = this._pktAlreadyCaptured;
    }
    if (this._pktcapOom !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktcapOom = this._pktcapOom;
    }
    if (this._pktcaptureFailureFileSizeRchd !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktcaptureFailureFileSizeRchd = this._pktcaptureFailureFileSizeRchd;
    }
    if (this._pktcaptureFailureWaitForBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktcaptureFailureWaitForBlock = this._pktcaptureFailureWaitForBlock;
    }
    if (this._pktcaptureTriggeredByAnomaly !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktcaptureTriggeredByAnomaly = this._pktcaptureTriggeredByAnomaly;
    }
    if (this._pktcaptureTriggeredByIncrement !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktcaptureTriggeredByIncrement = this._pktcaptureTriggeredByIncrement;
    }
    if (this._pktcaptureTriggeredByOtherFeature !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktcaptureTriggeredByOtherFeature = this._pktcaptureTriggeredByOtherFeature;
    }
    if (this._pktcaptureWithConnButNotTaggedFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktcaptureWithConnButNotTaggedFailure = this._pktcaptureWithConnButNotTaggedFailure;
    }
    if (this._pktcaptureWithConnButNotTaggedSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktcaptureWithConnButNotTaggedSuccess = this._pktcaptureWithConnButNotTaggedSuccess;
    }
    if (this._pktcaptureWithConnFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktcaptureWithConnFailure = this._pktcaptureWithConnFailure;
    }
    if (this._pktcaptureWithConnFailureGlobal !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktcaptureWithConnFailureGlobal = this._pktcaptureWithConnFailureGlobal;
    }
    if (this._pktcaptureWithConnSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktcaptureWithConnSuccess = this._pktcaptureWithConnSuccess;
    }
    if (this._pktcaptureWithConnSuccessGlobal !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktcaptureWithConnSuccessGlobal = this._pktcaptureWithConnSuccessGlobal;
    }
    if (this._pktcaptureWithNoConnFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktcaptureWithNoConnFailure = this._pktcaptureWithNoConnFailure;
    }
    if (this._pktcaptureWithNoConnSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktcaptureWithNoConnSuccess = this._pktcaptureWithNoConnSuccess;
    }
    if (this._skipAsConnAlreadyRecapture !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipAsConnAlreadyRecapture = this._skipAsConnAlreadyRecapture;
    }
    if (this._skipCaptureAsConnCreatedBeforeSmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipCaptureAsConnCreatedBeforeSmp = this._skipCaptureAsConnCreatedBeforeSmp;
    }
    if (this._wrongCtrIncremented !== undefined) {
      hasAnyValues = true;
      internalValueResult.wrongCtrIncremented = this._wrongCtrIncremented;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityStatsPacketCaptureStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoPcapFileMerged = undefined;
      this._autoPcapFileMergedFailed = undefined;
      this._concurrentCaptureByCtrAnomalyFreed = undefined;
      this._concurrentCaptureByCtrIncrementFreed = undefined;
      this._concurrentCaptureByCtrOtherFeatureFreed = undefined;
      this._concurrentCaptureCreateFailedByCtrAnomaly = undefined;
      this._concurrentCaptureCreateFailedByCtrIncrement = undefined;
      this._concurrentCaptureCreateFailedByOtherFeature = undefined;
      this._concurrentCaptureCreateFailedOom = undefined;
      this._concurrentCaptureCreatedByCtrAnomaly = undefined;
      this._concurrentCaptureCreatedByCtrIncrement = undefined;
      this._concurrentCaptureCreatedByOtherFeature = undefined;
      this._concurrentCaptureFinished = undefined;
      this._concurrentCaptureLimitReached = undefined;
      this._connExtFailed = undefined;
      this._failedAsReturnCompletedSet = undefined;
      this._failedDiskFull = undefined;
      this._globalCaptureFinished = undefined;
      this._nonPktPath = undefined;
      this._numCaptureConfigCreated = undefined;
      this._numCaptureConfigDeleteQ = undefined;
      this._numCaptureConfigDeleted = undefined;
      this._numCaptureConfigLinked = undefined;
      this._numCaptureConfigUnlinked = undefined;
      this._numConnsTaggedAnomaly = undefined;
      this._numConnsTaggedAnomalyFail = undefined;
      this._numConnsTaggedAnomalyMaxed = undefined;
      this._numConnsTaggedGlobalAnomaly = undefined;
      this._numConnsTaggedGlobalAnomalyFail = undefined;
      this._numConnsTaggedGlobalAnomalyMaxed = undefined;
      this._numConnsTaggedGlobalIncrement = undefined;
      this._numConnsTaggedGlobalIncrementFail = undefined;
      this._numConnsTaggedGlobalIncrementMaxed = undefined;
      this._numConnsTaggedGlobalOtherFeature = undefined;
      this._numConnsTaggedGlobalOtherFeatureFail = undefined;
      this._numConnsTaggedGlobalOtherFeatureMaxed = undefined;
      this._numConnsTaggedIncrement = undefined;
      this._numConnsTaggedIncrementFail = undefined;
      this._numConnsTaggedIncrementMaxed = undefined;
      this._numConnsTaggedOtherFeature = undefined;
      this._numConnsTaggedOtherFeatureFail = undefined;
      this._numConnsTaggedOtherFeatureMaxed = undefined;
      this._numConnsUntagged = undefined;
      this._numDynamicCaptureConfigCreated = undefined;
      this._numDynamicCaptureConfigDeleteQ = undefined;
      this._numDynamicCaptureConfigDeleted = undefined;
      this._numDynamicCaptureConfigLinked = undefined;
      this._numDynamicCaptureConfigUnlinked = undefined;
      this._numGlobalCountersDeregistered = undefined;
      this._numGlobalCountersRegistered = undefined;
      this._numGlobalTmplCreated = undefined;
      this._numGlobalTmplDeleted = undefined;
      this._numObjectTmplCreated = undefined;
      this._numObjectTmplDeleted = undefined;
      this._numOfAnomaliesCleared = undefined;
      this._numOfAnomaliesDetected = undefined;
      this._numPcapsCreateFailed = undefined;
      this._numPcapsCreated = undefined;
      this._numPerObjectCountersDeregistered = undefined;
      this._numPerObjectCountersRegistered = undefined;
      this._numTmpPcapsCreated = undefined;
      this._pktAlreadyCaptured = undefined;
      this._pktcapOom = undefined;
      this._pktcaptureFailureFileSizeRchd = undefined;
      this._pktcaptureFailureWaitForBlock = undefined;
      this._pktcaptureTriggeredByAnomaly = undefined;
      this._pktcaptureTriggeredByIncrement = undefined;
      this._pktcaptureTriggeredByOtherFeature = undefined;
      this._pktcaptureWithConnButNotTaggedFailure = undefined;
      this._pktcaptureWithConnButNotTaggedSuccess = undefined;
      this._pktcaptureWithConnFailure = undefined;
      this._pktcaptureWithConnFailureGlobal = undefined;
      this._pktcaptureWithConnSuccess = undefined;
      this._pktcaptureWithConnSuccessGlobal = undefined;
      this._pktcaptureWithNoConnFailure = undefined;
      this._pktcaptureWithNoConnSuccess = undefined;
      this._skipAsConnAlreadyRecapture = undefined;
      this._skipCaptureAsConnCreatedBeforeSmp = undefined;
      this._wrongCtrIncremented = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoPcapFileMerged = value.autoPcapFileMerged;
      this._autoPcapFileMergedFailed = value.autoPcapFileMergedFailed;
      this._concurrentCaptureByCtrAnomalyFreed = value.concurrentCaptureByCtrAnomalyFreed;
      this._concurrentCaptureByCtrIncrementFreed = value.concurrentCaptureByCtrIncrementFreed;
      this._concurrentCaptureByCtrOtherFeatureFreed = value.concurrentCaptureByCtrOtherFeatureFreed;
      this._concurrentCaptureCreateFailedByCtrAnomaly = value.concurrentCaptureCreateFailedByCtrAnomaly;
      this._concurrentCaptureCreateFailedByCtrIncrement = value.concurrentCaptureCreateFailedByCtrIncrement;
      this._concurrentCaptureCreateFailedByOtherFeature = value.concurrentCaptureCreateFailedByOtherFeature;
      this._concurrentCaptureCreateFailedOom = value.concurrentCaptureCreateFailedOom;
      this._concurrentCaptureCreatedByCtrAnomaly = value.concurrentCaptureCreatedByCtrAnomaly;
      this._concurrentCaptureCreatedByCtrIncrement = value.concurrentCaptureCreatedByCtrIncrement;
      this._concurrentCaptureCreatedByOtherFeature = value.concurrentCaptureCreatedByOtherFeature;
      this._concurrentCaptureFinished = value.concurrentCaptureFinished;
      this._concurrentCaptureLimitReached = value.concurrentCaptureLimitReached;
      this._connExtFailed = value.connExtFailed;
      this._failedAsReturnCompletedSet = value.failedAsReturnCompletedSet;
      this._failedDiskFull = value.failedDiskFull;
      this._globalCaptureFinished = value.globalCaptureFinished;
      this._nonPktPath = value.nonPktPath;
      this._numCaptureConfigCreated = value.numCaptureConfigCreated;
      this._numCaptureConfigDeleteQ = value.numCaptureConfigDeleteQ;
      this._numCaptureConfigDeleted = value.numCaptureConfigDeleted;
      this._numCaptureConfigLinked = value.numCaptureConfigLinked;
      this._numCaptureConfigUnlinked = value.numCaptureConfigUnlinked;
      this._numConnsTaggedAnomaly = value.numConnsTaggedAnomaly;
      this._numConnsTaggedAnomalyFail = value.numConnsTaggedAnomalyFail;
      this._numConnsTaggedAnomalyMaxed = value.numConnsTaggedAnomalyMaxed;
      this._numConnsTaggedGlobalAnomaly = value.numConnsTaggedGlobalAnomaly;
      this._numConnsTaggedGlobalAnomalyFail = value.numConnsTaggedGlobalAnomalyFail;
      this._numConnsTaggedGlobalAnomalyMaxed = value.numConnsTaggedGlobalAnomalyMaxed;
      this._numConnsTaggedGlobalIncrement = value.numConnsTaggedGlobalIncrement;
      this._numConnsTaggedGlobalIncrementFail = value.numConnsTaggedGlobalIncrementFail;
      this._numConnsTaggedGlobalIncrementMaxed = value.numConnsTaggedGlobalIncrementMaxed;
      this._numConnsTaggedGlobalOtherFeature = value.numConnsTaggedGlobalOtherFeature;
      this._numConnsTaggedGlobalOtherFeatureFail = value.numConnsTaggedGlobalOtherFeatureFail;
      this._numConnsTaggedGlobalOtherFeatureMaxed = value.numConnsTaggedGlobalOtherFeatureMaxed;
      this._numConnsTaggedIncrement = value.numConnsTaggedIncrement;
      this._numConnsTaggedIncrementFail = value.numConnsTaggedIncrementFail;
      this._numConnsTaggedIncrementMaxed = value.numConnsTaggedIncrementMaxed;
      this._numConnsTaggedOtherFeature = value.numConnsTaggedOtherFeature;
      this._numConnsTaggedOtherFeatureFail = value.numConnsTaggedOtherFeatureFail;
      this._numConnsTaggedOtherFeatureMaxed = value.numConnsTaggedOtherFeatureMaxed;
      this._numConnsUntagged = value.numConnsUntagged;
      this._numDynamicCaptureConfigCreated = value.numDynamicCaptureConfigCreated;
      this._numDynamicCaptureConfigDeleteQ = value.numDynamicCaptureConfigDeleteQ;
      this._numDynamicCaptureConfigDeleted = value.numDynamicCaptureConfigDeleted;
      this._numDynamicCaptureConfigLinked = value.numDynamicCaptureConfigLinked;
      this._numDynamicCaptureConfigUnlinked = value.numDynamicCaptureConfigUnlinked;
      this._numGlobalCountersDeregistered = value.numGlobalCountersDeregistered;
      this._numGlobalCountersRegistered = value.numGlobalCountersRegistered;
      this._numGlobalTmplCreated = value.numGlobalTmplCreated;
      this._numGlobalTmplDeleted = value.numGlobalTmplDeleted;
      this._numObjectTmplCreated = value.numObjectTmplCreated;
      this._numObjectTmplDeleted = value.numObjectTmplDeleted;
      this._numOfAnomaliesCleared = value.numOfAnomaliesCleared;
      this._numOfAnomaliesDetected = value.numOfAnomaliesDetected;
      this._numPcapsCreateFailed = value.numPcapsCreateFailed;
      this._numPcapsCreated = value.numPcapsCreated;
      this._numPerObjectCountersDeregistered = value.numPerObjectCountersDeregistered;
      this._numPerObjectCountersRegistered = value.numPerObjectCountersRegistered;
      this._numTmpPcapsCreated = value.numTmpPcapsCreated;
      this._pktAlreadyCaptured = value.pktAlreadyCaptured;
      this._pktcapOom = value.pktcapOom;
      this._pktcaptureFailureFileSizeRchd = value.pktcaptureFailureFileSizeRchd;
      this._pktcaptureFailureWaitForBlock = value.pktcaptureFailureWaitForBlock;
      this._pktcaptureTriggeredByAnomaly = value.pktcaptureTriggeredByAnomaly;
      this._pktcaptureTriggeredByIncrement = value.pktcaptureTriggeredByIncrement;
      this._pktcaptureTriggeredByOtherFeature = value.pktcaptureTriggeredByOtherFeature;
      this._pktcaptureWithConnButNotTaggedFailure = value.pktcaptureWithConnButNotTaggedFailure;
      this._pktcaptureWithConnButNotTaggedSuccess = value.pktcaptureWithConnButNotTaggedSuccess;
      this._pktcaptureWithConnFailure = value.pktcaptureWithConnFailure;
      this._pktcaptureWithConnFailureGlobal = value.pktcaptureWithConnFailureGlobal;
      this._pktcaptureWithConnSuccess = value.pktcaptureWithConnSuccess;
      this._pktcaptureWithConnSuccessGlobal = value.pktcaptureWithConnSuccessGlobal;
      this._pktcaptureWithNoConnFailure = value.pktcaptureWithNoConnFailure;
      this._pktcaptureWithNoConnSuccess = value.pktcaptureWithNoConnSuccess;
      this._skipAsConnAlreadyRecapture = value.skipAsConnAlreadyRecapture;
      this._skipCaptureAsConnCreatedBeforeSmp = value.skipCaptureAsConnCreatedBeforeSmp;
      this._wrongCtrIncremented = value.wrongCtrIncremented;
    }
  }

  // auto_pcap_file_merged - computed: false, optional: true, required: false
  private _autoPcapFileMerged?: number; 
  public get autoPcapFileMerged() {
    return this.getNumberAttribute('auto_pcap_file_merged');
  }
  public set autoPcapFileMerged(value: number) {
    this._autoPcapFileMerged = value;
  }
  public resetAutoPcapFileMerged() {
    this._autoPcapFileMerged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPcapFileMergedInput() {
    return this._autoPcapFileMerged;
  }

  // auto_pcap_file_merged_failed - computed: false, optional: true, required: false
  private _autoPcapFileMergedFailed?: number; 
  public get autoPcapFileMergedFailed() {
    return this.getNumberAttribute('auto_pcap_file_merged_failed');
  }
  public set autoPcapFileMergedFailed(value: number) {
    this._autoPcapFileMergedFailed = value;
  }
  public resetAutoPcapFileMergedFailed() {
    this._autoPcapFileMergedFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPcapFileMergedFailedInput() {
    return this._autoPcapFileMergedFailed;
  }

  // concurrent_capture_by_ctr_anomaly_freed - computed: false, optional: true, required: false
  private _concurrentCaptureByCtrAnomalyFreed?: number; 
  public get concurrentCaptureByCtrAnomalyFreed() {
    return this.getNumberAttribute('concurrent_capture_by_ctr_anomaly_freed');
  }
  public set concurrentCaptureByCtrAnomalyFreed(value: number) {
    this._concurrentCaptureByCtrAnomalyFreed = value;
  }
  public resetConcurrentCaptureByCtrAnomalyFreed() {
    this._concurrentCaptureByCtrAnomalyFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentCaptureByCtrAnomalyFreedInput() {
    return this._concurrentCaptureByCtrAnomalyFreed;
  }

  // concurrent_capture_by_ctr_increment_freed - computed: false, optional: true, required: false
  private _concurrentCaptureByCtrIncrementFreed?: number; 
  public get concurrentCaptureByCtrIncrementFreed() {
    return this.getNumberAttribute('concurrent_capture_by_ctr_increment_freed');
  }
  public set concurrentCaptureByCtrIncrementFreed(value: number) {
    this._concurrentCaptureByCtrIncrementFreed = value;
  }
  public resetConcurrentCaptureByCtrIncrementFreed() {
    this._concurrentCaptureByCtrIncrementFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentCaptureByCtrIncrementFreedInput() {
    return this._concurrentCaptureByCtrIncrementFreed;
  }

  // concurrent_capture_by_ctr_other_feature_freed - computed: false, optional: true, required: false
  private _concurrentCaptureByCtrOtherFeatureFreed?: number; 
  public get concurrentCaptureByCtrOtherFeatureFreed() {
    return this.getNumberAttribute('concurrent_capture_by_ctr_other_feature_freed');
  }
  public set concurrentCaptureByCtrOtherFeatureFreed(value: number) {
    this._concurrentCaptureByCtrOtherFeatureFreed = value;
  }
  public resetConcurrentCaptureByCtrOtherFeatureFreed() {
    this._concurrentCaptureByCtrOtherFeatureFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentCaptureByCtrOtherFeatureFreedInput() {
    return this._concurrentCaptureByCtrOtherFeatureFreed;
  }

  // concurrent_capture_create_failed_by_ctr_anomaly - computed: false, optional: true, required: false
  private _concurrentCaptureCreateFailedByCtrAnomaly?: number; 
  public get concurrentCaptureCreateFailedByCtrAnomaly() {
    return this.getNumberAttribute('concurrent_capture_create_failed_by_ctr_anomaly');
  }
  public set concurrentCaptureCreateFailedByCtrAnomaly(value: number) {
    this._concurrentCaptureCreateFailedByCtrAnomaly = value;
  }
  public resetConcurrentCaptureCreateFailedByCtrAnomaly() {
    this._concurrentCaptureCreateFailedByCtrAnomaly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentCaptureCreateFailedByCtrAnomalyInput() {
    return this._concurrentCaptureCreateFailedByCtrAnomaly;
  }

  // concurrent_capture_create_failed_by_ctr_increment - computed: false, optional: true, required: false
  private _concurrentCaptureCreateFailedByCtrIncrement?: number; 
  public get concurrentCaptureCreateFailedByCtrIncrement() {
    return this.getNumberAttribute('concurrent_capture_create_failed_by_ctr_increment');
  }
  public set concurrentCaptureCreateFailedByCtrIncrement(value: number) {
    this._concurrentCaptureCreateFailedByCtrIncrement = value;
  }
  public resetConcurrentCaptureCreateFailedByCtrIncrement() {
    this._concurrentCaptureCreateFailedByCtrIncrement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentCaptureCreateFailedByCtrIncrementInput() {
    return this._concurrentCaptureCreateFailedByCtrIncrement;
  }

  // concurrent_capture_create_failed_by_other_feature - computed: false, optional: true, required: false
  private _concurrentCaptureCreateFailedByOtherFeature?: number; 
  public get concurrentCaptureCreateFailedByOtherFeature() {
    return this.getNumberAttribute('concurrent_capture_create_failed_by_other_feature');
  }
  public set concurrentCaptureCreateFailedByOtherFeature(value: number) {
    this._concurrentCaptureCreateFailedByOtherFeature = value;
  }
  public resetConcurrentCaptureCreateFailedByOtherFeature() {
    this._concurrentCaptureCreateFailedByOtherFeature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentCaptureCreateFailedByOtherFeatureInput() {
    return this._concurrentCaptureCreateFailedByOtherFeature;
  }

  // concurrent_capture_create_failed_oom - computed: false, optional: true, required: false
  private _concurrentCaptureCreateFailedOom?: number; 
  public get concurrentCaptureCreateFailedOom() {
    return this.getNumberAttribute('concurrent_capture_create_failed_oom');
  }
  public set concurrentCaptureCreateFailedOom(value: number) {
    this._concurrentCaptureCreateFailedOom = value;
  }
  public resetConcurrentCaptureCreateFailedOom() {
    this._concurrentCaptureCreateFailedOom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentCaptureCreateFailedOomInput() {
    return this._concurrentCaptureCreateFailedOom;
  }

  // concurrent_capture_created_by_ctr_anomaly - computed: false, optional: true, required: false
  private _concurrentCaptureCreatedByCtrAnomaly?: number; 
  public get concurrentCaptureCreatedByCtrAnomaly() {
    return this.getNumberAttribute('concurrent_capture_created_by_ctr_anomaly');
  }
  public set concurrentCaptureCreatedByCtrAnomaly(value: number) {
    this._concurrentCaptureCreatedByCtrAnomaly = value;
  }
  public resetConcurrentCaptureCreatedByCtrAnomaly() {
    this._concurrentCaptureCreatedByCtrAnomaly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentCaptureCreatedByCtrAnomalyInput() {
    return this._concurrentCaptureCreatedByCtrAnomaly;
  }

  // concurrent_capture_created_by_ctr_increment - computed: false, optional: true, required: false
  private _concurrentCaptureCreatedByCtrIncrement?: number; 
  public get concurrentCaptureCreatedByCtrIncrement() {
    return this.getNumberAttribute('concurrent_capture_created_by_ctr_increment');
  }
  public set concurrentCaptureCreatedByCtrIncrement(value: number) {
    this._concurrentCaptureCreatedByCtrIncrement = value;
  }
  public resetConcurrentCaptureCreatedByCtrIncrement() {
    this._concurrentCaptureCreatedByCtrIncrement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentCaptureCreatedByCtrIncrementInput() {
    return this._concurrentCaptureCreatedByCtrIncrement;
  }

  // concurrent_capture_created_by_other_feature - computed: false, optional: true, required: false
  private _concurrentCaptureCreatedByOtherFeature?: number; 
  public get concurrentCaptureCreatedByOtherFeature() {
    return this.getNumberAttribute('concurrent_capture_created_by_other_feature');
  }
  public set concurrentCaptureCreatedByOtherFeature(value: number) {
    this._concurrentCaptureCreatedByOtherFeature = value;
  }
  public resetConcurrentCaptureCreatedByOtherFeature() {
    this._concurrentCaptureCreatedByOtherFeature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentCaptureCreatedByOtherFeatureInput() {
    return this._concurrentCaptureCreatedByOtherFeature;
  }

  // concurrent_capture_finished - computed: false, optional: true, required: false
  private _concurrentCaptureFinished?: number; 
  public get concurrentCaptureFinished() {
    return this.getNumberAttribute('concurrent_capture_finished');
  }
  public set concurrentCaptureFinished(value: number) {
    this._concurrentCaptureFinished = value;
  }
  public resetConcurrentCaptureFinished() {
    this._concurrentCaptureFinished = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentCaptureFinishedInput() {
    return this._concurrentCaptureFinished;
  }

  // concurrent_capture_limit_reached - computed: false, optional: true, required: false
  private _concurrentCaptureLimitReached?: number; 
  public get concurrentCaptureLimitReached() {
    return this.getNumberAttribute('concurrent_capture_limit_reached');
  }
  public set concurrentCaptureLimitReached(value: number) {
    this._concurrentCaptureLimitReached = value;
  }
  public resetConcurrentCaptureLimitReached() {
    this._concurrentCaptureLimitReached = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentCaptureLimitReachedInput() {
    return this._concurrentCaptureLimitReached;
  }

  // conn_ext_failed - computed: false, optional: true, required: false
  private _connExtFailed?: number; 
  public get connExtFailed() {
    return this.getNumberAttribute('conn_ext_failed');
  }
  public set connExtFailed(value: number) {
    this._connExtFailed = value;
  }
  public resetConnExtFailed() {
    this._connExtFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connExtFailedInput() {
    return this._connExtFailed;
  }

  // failed_as_return_completed_set - computed: false, optional: true, required: false
  private _failedAsReturnCompletedSet?: number; 
  public get failedAsReturnCompletedSet() {
    return this.getNumberAttribute('failed_as_return_completed_set');
  }
  public set failedAsReturnCompletedSet(value: number) {
    this._failedAsReturnCompletedSet = value;
  }
  public resetFailedAsReturnCompletedSet() {
    this._failedAsReturnCompletedSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedAsReturnCompletedSetInput() {
    return this._failedAsReturnCompletedSet;
  }

  // failed_disk_full - computed: false, optional: true, required: false
  private _failedDiskFull?: number; 
  public get failedDiskFull() {
    return this.getNumberAttribute('failed_disk_full');
  }
  public set failedDiskFull(value: number) {
    this._failedDiskFull = value;
  }
  public resetFailedDiskFull() {
    this._failedDiskFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedDiskFullInput() {
    return this._failedDiskFull;
  }

  // global_capture_finished - computed: false, optional: true, required: false
  private _globalCaptureFinished?: number; 
  public get globalCaptureFinished() {
    return this.getNumberAttribute('global_capture_finished');
  }
  public set globalCaptureFinished(value: number) {
    this._globalCaptureFinished = value;
  }
  public resetGlobalCaptureFinished() {
    this._globalCaptureFinished = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalCaptureFinishedInput() {
    return this._globalCaptureFinished;
  }

  // non_pkt_path - computed: false, optional: true, required: false
  private _nonPktPath?: number; 
  public get nonPktPath() {
    return this.getNumberAttribute('non_pkt_path');
  }
  public set nonPktPath(value: number) {
    this._nonPktPath = value;
  }
  public resetNonPktPath() {
    this._nonPktPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonPktPathInput() {
    return this._nonPktPath;
  }

  // num_capture_config_created - computed: false, optional: true, required: false
  private _numCaptureConfigCreated?: number; 
  public get numCaptureConfigCreated() {
    return this.getNumberAttribute('num_capture_config_created');
  }
  public set numCaptureConfigCreated(value: number) {
    this._numCaptureConfigCreated = value;
  }
  public resetNumCaptureConfigCreated() {
    this._numCaptureConfigCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numCaptureConfigCreatedInput() {
    return this._numCaptureConfigCreated;
  }

  // num_capture_config_delete_q - computed: false, optional: true, required: false
  private _numCaptureConfigDeleteQ?: number; 
  public get numCaptureConfigDeleteQ() {
    return this.getNumberAttribute('num_capture_config_delete_q');
  }
  public set numCaptureConfigDeleteQ(value: number) {
    this._numCaptureConfigDeleteQ = value;
  }
  public resetNumCaptureConfigDeleteQ() {
    this._numCaptureConfigDeleteQ = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numCaptureConfigDeleteQInput() {
    return this._numCaptureConfigDeleteQ;
  }

  // num_capture_config_deleted - computed: false, optional: true, required: false
  private _numCaptureConfigDeleted?: number; 
  public get numCaptureConfigDeleted() {
    return this.getNumberAttribute('num_capture_config_deleted');
  }
  public set numCaptureConfigDeleted(value: number) {
    this._numCaptureConfigDeleted = value;
  }
  public resetNumCaptureConfigDeleted() {
    this._numCaptureConfigDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numCaptureConfigDeletedInput() {
    return this._numCaptureConfigDeleted;
  }

  // num_capture_config_linked - computed: false, optional: true, required: false
  private _numCaptureConfigLinked?: number; 
  public get numCaptureConfigLinked() {
    return this.getNumberAttribute('num_capture_config_linked');
  }
  public set numCaptureConfigLinked(value: number) {
    this._numCaptureConfigLinked = value;
  }
  public resetNumCaptureConfigLinked() {
    this._numCaptureConfigLinked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numCaptureConfigLinkedInput() {
    return this._numCaptureConfigLinked;
  }

  // num_capture_config_unlinked - computed: false, optional: true, required: false
  private _numCaptureConfigUnlinked?: number; 
  public get numCaptureConfigUnlinked() {
    return this.getNumberAttribute('num_capture_config_unlinked');
  }
  public set numCaptureConfigUnlinked(value: number) {
    this._numCaptureConfigUnlinked = value;
  }
  public resetNumCaptureConfigUnlinked() {
    this._numCaptureConfigUnlinked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numCaptureConfigUnlinkedInput() {
    return this._numCaptureConfigUnlinked;
  }

  // num_conns_tagged_anomaly - computed: false, optional: true, required: false
  private _numConnsTaggedAnomaly?: number; 
  public get numConnsTaggedAnomaly() {
    return this.getNumberAttribute('num_conns_tagged_anomaly');
  }
  public set numConnsTaggedAnomaly(value: number) {
    this._numConnsTaggedAnomaly = value;
  }
  public resetNumConnsTaggedAnomaly() {
    this._numConnsTaggedAnomaly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedAnomalyInput() {
    return this._numConnsTaggedAnomaly;
  }

  // num_conns_tagged_anomaly_fail - computed: false, optional: true, required: false
  private _numConnsTaggedAnomalyFail?: number; 
  public get numConnsTaggedAnomalyFail() {
    return this.getNumberAttribute('num_conns_tagged_anomaly_fail');
  }
  public set numConnsTaggedAnomalyFail(value: number) {
    this._numConnsTaggedAnomalyFail = value;
  }
  public resetNumConnsTaggedAnomalyFail() {
    this._numConnsTaggedAnomalyFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedAnomalyFailInput() {
    return this._numConnsTaggedAnomalyFail;
  }

  // num_conns_tagged_anomaly_maxed - computed: false, optional: true, required: false
  private _numConnsTaggedAnomalyMaxed?: number; 
  public get numConnsTaggedAnomalyMaxed() {
    return this.getNumberAttribute('num_conns_tagged_anomaly_maxed');
  }
  public set numConnsTaggedAnomalyMaxed(value: number) {
    this._numConnsTaggedAnomalyMaxed = value;
  }
  public resetNumConnsTaggedAnomalyMaxed() {
    this._numConnsTaggedAnomalyMaxed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedAnomalyMaxedInput() {
    return this._numConnsTaggedAnomalyMaxed;
  }

  // num_conns_tagged_global_anomaly - computed: false, optional: true, required: false
  private _numConnsTaggedGlobalAnomaly?: number; 
  public get numConnsTaggedGlobalAnomaly() {
    return this.getNumberAttribute('num_conns_tagged_global_anomaly');
  }
  public set numConnsTaggedGlobalAnomaly(value: number) {
    this._numConnsTaggedGlobalAnomaly = value;
  }
  public resetNumConnsTaggedGlobalAnomaly() {
    this._numConnsTaggedGlobalAnomaly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedGlobalAnomalyInput() {
    return this._numConnsTaggedGlobalAnomaly;
  }

  // num_conns_tagged_global_anomaly_fail - computed: false, optional: true, required: false
  private _numConnsTaggedGlobalAnomalyFail?: number; 
  public get numConnsTaggedGlobalAnomalyFail() {
    return this.getNumberAttribute('num_conns_tagged_global_anomaly_fail');
  }
  public set numConnsTaggedGlobalAnomalyFail(value: number) {
    this._numConnsTaggedGlobalAnomalyFail = value;
  }
  public resetNumConnsTaggedGlobalAnomalyFail() {
    this._numConnsTaggedGlobalAnomalyFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedGlobalAnomalyFailInput() {
    return this._numConnsTaggedGlobalAnomalyFail;
  }

  // num_conns_tagged_global_anomaly_maxed - computed: false, optional: true, required: false
  private _numConnsTaggedGlobalAnomalyMaxed?: number; 
  public get numConnsTaggedGlobalAnomalyMaxed() {
    return this.getNumberAttribute('num_conns_tagged_global_anomaly_maxed');
  }
  public set numConnsTaggedGlobalAnomalyMaxed(value: number) {
    this._numConnsTaggedGlobalAnomalyMaxed = value;
  }
  public resetNumConnsTaggedGlobalAnomalyMaxed() {
    this._numConnsTaggedGlobalAnomalyMaxed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedGlobalAnomalyMaxedInput() {
    return this._numConnsTaggedGlobalAnomalyMaxed;
  }

  // num_conns_tagged_global_increment - computed: false, optional: true, required: false
  private _numConnsTaggedGlobalIncrement?: number; 
  public get numConnsTaggedGlobalIncrement() {
    return this.getNumberAttribute('num_conns_tagged_global_increment');
  }
  public set numConnsTaggedGlobalIncrement(value: number) {
    this._numConnsTaggedGlobalIncrement = value;
  }
  public resetNumConnsTaggedGlobalIncrement() {
    this._numConnsTaggedGlobalIncrement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedGlobalIncrementInput() {
    return this._numConnsTaggedGlobalIncrement;
  }

  // num_conns_tagged_global_increment_fail - computed: false, optional: true, required: false
  private _numConnsTaggedGlobalIncrementFail?: number; 
  public get numConnsTaggedGlobalIncrementFail() {
    return this.getNumberAttribute('num_conns_tagged_global_increment_fail');
  }
  public set numConnsTaggedGlobalIncrementFail(value: number) {
    this._numConnsTaggedGlobalIncrementFail = value;
  }
  public resetNumConnsTaggedGlobalIncrementFail() {
    this._numConnsTaggedGlobalIncrementFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedGlobalIncrementFailInput() {
    return this._numConnsTaggedGlobalIncrementFail;
  }

  // num_conns_tagged_global_increment_maxed - computed: false, optional: true, required: false
  private _numConnsTaggedGlobalIncrementMaxed?: number; 
  public get numConnsTaggedGlobalIncrementMaxed() {
    return this.getNumberAttribute('num_conns_tagged_global_increment_maxed');
  }
  public set numConnsTaggedGlobalIncrementMaxed(value: number) {
    this._numConnsTaggedGlobalIncrementMaxed = value;
  }
  public resetNumConnsTaggedGlobalIncrementMaxed() {
    this._numConnsTaggedGlobalIncrementMaxed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedGlobalIncrementMaxedInput() {
    return this._numConnsTaggedGlobalIncrementMaxed;
  }

  // num_conns_tagged_global_other_feature - computed: false, optional: true, required: false
  private _numConnsTaggedGlobalOtherFeature?: number; 
  public get numConnsTaggedGlobalOtherFeature() {
    return this.getNumberAttribute('num_conns_tagged_global_other_feature');
  }
  public set numConnsTaggedGlobalOtherFeature(value: number) {
    this._numConnsTaggedGlobalOtherFeature = value;
  }
  public resetNumConnsTaggedGlobalOtherFeature() {
    this._numConnsTaggedGlobalOtherFeature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedGlobalOtherFeatureInput() {
    return this._numConnsTaggedGlobalOtherFeature;
  }

  // num_conns_tagged_global_other_feature_fail - computed: false, optional: true, required: false
  private _numConnsTaggedGlobalOtherFeatureFail?: number; 
  public get numConnsTaggedGlobalOtherFeatureFail() {
    return this.getNumberAttribute('num_conns_tagged_global_other_feature_fail');
  }
  public set numConnsTaggedGlobalOtherFeatureFail(value: number) {
    this._numConnsTaggedGlobalOtherFeatureFail = value;
  }
  public resetNumConnsTaggedGlobalOtherFeatureFail() {
    this._numConnsTaggedGlobalOtherFeatureFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedGlobalOtherFeatureFailInput() {
    return this._numConnsTaggedGlobalOtherFeatureFail;
  }

  // num_conns_tagged_global_other_feature_maxed - computed: false, optional: true, required: false
  private _numConnsTaggedGlobalOtherFeatureMaxed?: number; 
  public get numConnsTaggedGlobalOtherFeatureMaxed() {
    return this.getNumberAttribute('num_conns_tagged_global_other_feature_maxed');
  }
  public set numConnsTaggedGlobalOtherFeatureMaxed(value: number) {
    this._numConnsTaggedGlobalOtherFeatureMaxed = value;
  }
  public resetNumConnsTaggedGlobalOtherFeatureMaxed() {
    this._numConnsTaggedGlobalOtherFeatureMaxed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedGlobalOtherFeatureMaxedInput() {
    return this._numConnsTaggedGlobalOtherFeatureMaxed;
  }

  // num_conns_tagged_increment - computed: false, optional: true, required: false
  private _numConnsTaggedIncrement?: number; 
  public get numConnsTaggedIncrement() {
    return this.getNumberAttribute('num_conns_tagged_increment');
  }
  public set numConnsTaggedIncrement(value: number) {
    this._numConnsTaggedIncrement = value;
  }
  public resetNumConnsTaggedIncrement() {
    this._numConnsTaggedIncrement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedIncrementInput() {
    return this._numConnsTaggedIncrement;
  }

  // num_conns_tagged_increment_fail - computed: false, optional: true, required: false
  private _numConnsTaggedIncrementFail?: number; 
  public get numConnsTaggedIncrementFail() {
    return this.getNumberAttribute('num_conns_tagged_increment_fail');
  }
  public set numConnsTaggedIncrementFail(value: number) {
    this._numConnsTaggedIncrementFail = value;
  }
  public resetNumConnsTaggedIncrementFail() {
    this._numConnsTaggedIncrementFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedIncrementFailInput() {
    return this._numConnsTaggedIncrementFail;
  }

  // num_conns_tagged_increment_maxed - computed: false, optional: true, required: false
  private _numConnsTaggedIncrementMaxed?: number; 
  public get numConnsTaggedIncrementMaxed() {
    return this.getNumberAttribute('num_conns_tagged_increment_maxed');
  }
  public set numConnsTaggedIncrementMaxed(value: number) {
    this._numConnsTaggedIncrementMaxed = value;
  }
  public resetNumConnsTaggedIncrementMaxed() {
    this._numConnsTaggedIncrementMaxed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedIncrementMaxedInput() {
    return this._numConnsTaggedIncrementMaxed;
  }

  // num_conns_tagged_other_feature - computed: false, optional: true, required: false
  private _numConnsTaggedOtherFeature?: number; 
  public get numConnsTaggedOtherFeature() {
    return this.getNumberAttribute('num_conns_tagged_other_feature');
  }
  public set numConnsTaggedOtherFeature(value: number) {
    this._numConnsTaggedOtherFeature = value;
  }
  public resetNumConnsTaggedOtherFeature() {
    this._numConnsTaggedOtherFeature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedOtherFeatureInput() {
    return this._numConnsTaggedOtherFeature;
  }

  // num_conns_tagged_other_feature_fail - computed: false, optional: true, required: false
  private _numConnsTaggedOtherFeatureFail?: number; 
  public get numConnsTaggedOtherFeatureFail() {
    return this.getNumberAttribute('num_conns_tagged_other_feature_fail');
  }
  public set numConnsTaggedOtherFeatureFail(value: number) {
    this._numConnsTaggedOtherFeatureFail = value;
  }
  public resetNumConnsTaggedOtherFeatureFail() {
    this._numConnsTaggedOtherFeatureFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedOtherFeatureFailInput() {
    return this._numConnsTaggedOtherFeatureFail;
  }

  // num_conns_tagged_other_feature_maxed - computed: false, optional: true, required: false
  private _numConnsTaggedOtherFeatureMaxed?: number; 
  public get numConnsTaggedOtherFeatureMaxed() {
    return this.getNumberAttribute('num_conns_tagged_other_feature_maxed');
  }
  public set numConnsTaggedOtherFeatureMaxed(value: number) {
    this._numConnsTaggedOtherFeatureMaxed = value;
  }
  public resetNumConnsTaggedOtherFeatureMaxed() {
    this._numConnsTaggedOtherFeatureMaxed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedOtherFeatureMaxedInput() {
    return this._numConnsTaggedOtherFeatureMaxed;
  }

  // num_conns_untagged - computed: false, optional: true, required: false
  private _numConnsUntagged?: number; 
  public get numConnsUntagged() {
    return this.getNumberAttribute('num_conns_untagged');
  }
  public set numConnsUntagged(value: number) {
    this._numConnsUntagged = value;
  }
  public resetNumConnsUntagged() {
    this._numConnsUntagged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsUntaggedInput() {
    return this._numConnsUntagged;
  }

  // num_dynamic_capture_config_created - computed: false, optional: true, required: false
  private _numDynamicCaptureConfigCreated?: number; 
  public get numDynamicCaptureConfigCreated() {
    return this.getNumberAttribute('num_dynamic_capture_config_created');
  }
  public set numDynamicCaptureConfigCreated(value: number) {
    this._numDynamicCaptureConfigCreated = value;
  }
  public resetNumDynamicCaptureConfigCreated() {
    this._numDynamicCaptureConfigCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numDynamicCaptureConfigCreatedInput() {
    return this._numDynamicCaptureConfigCreated;
  }

  // num_dynamic_capture_config_delete_q - computed: false, optional: true, required: false
  private _numDynamicCaptureConfigDeleteQ?: number; 
  public get numDynamicCaptureConfigDeleteQ() {
    return this.getNumberAttribute('num_dynamic_capture_config_delete_q');
  }
  public set numDynamicCaptureConfigDeleteQ(value: number) {
    this._numDynamicCaptureConfigDeleteQ = value;
  }
  public resetNumDynamicCaptureConfigDeleteQ() {
    this._numDynamicCaptureConfigDeleteQ = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numDynamicCaptureConfigDeleteQInput() {
    return this._numDynamicCaptureConfigDeleteQ;
  }

  // num_dynamic_capture_config_deleted - computed: false, optional: true, required: false
  private _numDynamicCaptureConfigDeleted?: number; 
  public get numDynamicCaptureConfigDeleted() {
    return this.getNumberAttribute('num_dynamic_capture_config_deleted');
  }
  public set numDynamicCaptureConfigDeleted(value: number) {
    this._numDynamicCaptureConfigDeleted = value;
  }
  public resetNumDynamicCaptureConfigDeleted() {
    this._numDynamicCaptureConfigDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numDynamicCaptureConfigDeletedInput() {
    return this._numDynamicCaptureConfigDeleted;
  }

  // num_dynamic_capture_config_linked - computed: false, optional: true, required: false
  private _numDynamicCaptureConfigLinked?: number; 
  public get numDynamicCaptureConfigLinked() {
    return this.getNumberAttribute('num_dynamic_capture_config_linked');
  }
  public set numDynamicCaptureConfigLinked(value: number) {
    this._numDynamicCaptureConfigLinked = value;
  }
  public resetNumDynamicCaptureConfigLinked() {
    this._numDynamicCaptureConfigLinked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numDynamicCaptureConfigLinkedInput() {
    return this._numDynamicCaptureConfigLinked;
  }

  // num_dynamic_capture_config_unlinked - computed: false, optional: true, required: false
  private _numDynamicCaptureConfigUnlinked?: number; 
  public get numDynamicCaptureConfigUnlinked() {
    return this.getNumberAttribute('num_dynamic_capture_config_unlinked');
  }
  public set numDynamicCaptureConfigUnlinked(value: number) {
    this._numDynamicCaptureConfigUnlinked = value;
  }
  public resetNumDynamicCaptureConfigUnlinked() {
    this._numDynamicCaptureConfigUnlinked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numDynamicCaptureConfigUnlinkedInput() {
    return this._numDynamicCaptureConfigUnlinked;
  }

  // num_global_counters_deregistered - computed: false, optional: true, required: false
  private _numGlobalCountersDeregistered?: number; 
  public get numGlobalCountersDeregistered() {
    return this.getNumberAttribute('num_global_counters_deregistered');
  }
  public set numGlobalCountersDeregistered(value: number) {
    this._numGlobalCountersDeregistered = value;
  }
  public resetNumGlobalCountersDeregistered() {
    this._numGlobalCountersDeregistered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numGlobalCountersDeregisteredInput() {
    return this._numGlobalCountersDeregistered;
  }

  // num_global_counters_registered - computed: false, optional: true, required: false
  private _numGlobalCountersRegistered?: number; 
  public get numGlobalCountersRegistered() {
    return this.getNumberAttribute('num_global_counters_registered');
  }
  public set numGlobalCountersRegistered(value: number) {
    this._numGlobalCountersRegistered = value;
  }
  public resetNumGlobalCountersRegistered() {
    this._numGlobalCountersRegistered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numGlobalCountersRegisteredInput() {
    return this._numGlobalCountersRegistered;
  }

  // num_global_tmpl_created - computed: false, optional: true, required: false
  private _numGlobalTmplCreated?: number; 
  public get numGlobalTmplCreated() {
    return this.getNumberAttribute('num_global_tmpl_created');
  }
  public set numGlobalTmplCreated(value: number) {
    this._numGlobalTmplCreated = value;
  }
  public resetNumGlobalTmplCreated() {
    this._numGlobalTmplCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numGlobalTmplCreatedInput() {
    return this._numGlobalTmplCreated;
  }

  // num_global_tmpl_deleted - computed: false, optional: true, required: false
  private _numGlobalTmplDeleted?: number; 
  public get numGlobalTmplDeleted() {
    return this.getNumberAttribute('num_global_tmpl_deleted');
  }
  public set numGlobalTmplDeleted(value: number) {
    this._numGlobalTmplDeleted = value;
  }
  public resetNumGlobalTmplDeleted() {
    this._numGlobalTmplDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numGlobalTmplDeletedInput() {
    return this._numGlobalTmplDeleted;
  }

  // num_object_tmpl_created - computed: false, optional: true, required: false
  private _numObjectTmplCreated?: number; 
  public get numObjectTmplCreated() {
    return this.getNumberAttribute('num_object_tmpl_created');
  }
  public set numObjectTmplCreated(value: number) {
    this._numObjectTmplCreated = value;
  }
  public resetNumObjectTmplCreated() {
    this._numObjectTmplCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numObjectTmplCreatedInput() {
    return this._numObjectTmplCreated;
  }

  // num_object_tmpl_deleted - computed: false, optional: true, required: false
  private _numObjectTmplDeleted?: number; 
  public get numObjectTmplDeleted() {
    return this.getNumberAttribute('num_object_tmpl_deleted');
  }
  public set numObjectTmplDeleted(value: number) {
    this._numObjectTmplDeleted = value;
  }
  public resetNumObjectTmplDeleted() {
    this._numObjectTmplDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numObjectTmplDeletedInput() {
    return this._numObjectTmplDeleted;
  }

  // num_of_anomalies_cleared - computed: false, optional: true, required: false
  private _numOfAnomaliesCleared?: number; 
  public get numOfAnomaliesCleared() {
    return this.getNumberAttribute('num_of_anomalies_cleared');
  }
  public set numOfAnomaliesCleared(value: number) {
    this._numOfAnomaliesCleared = value;
  }
  public resetNumOfAnomaliesCleared() {
    this._numOfAnomaliesCleared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfAnomaliesClearedInput() {
    return this._numOfAnomaliesCleared;
  }

  // num_of_anomalies_detected - computed: false, optional: true, required: false
  private _numOfAnomaliesDetected?: number; 
  public get numOfAnomaliesDetected() {
    return this.getNumberAttribute('num_of_anomalies_detected');
  }
  public set numOfAnomaliesDetected(value: number) {
    this._numOfAnomaliesDetected = value;
  }
  public resetNumOfAnomaliesDetected() {
    this._numOfAnomaliesDetected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfAnomaliesDetectedInput() {
    return this._numOfAnomaliesDetected;
  }

  // num_pcaps_create_failed - computed: false, optional: true, required: false
  private _numPcapsCreateFailed?: number; 
  public get numPcapsCreateFailed() {
    return this.getNumberAttribute('num_pcaps_create_failed');
  }
  public set numPcapsCreateFailed(value: number) {
    this._numPcapsCreateFailed = value;
  }
  public resetNumPcapsCreateFailed() {
    this._numPcapsCreateFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numPcapsCreateFailedInput() {
    return this._numPcapsCreateFailed;
  }

  // num_pcaps_created - computed: false, optional: true, required: false
  private _numPcapsCreated?: number; 
  public get numPcapsCreated() {
    return this.getNumberAttribute('num_pcaps_created');
  }
  public set numPcapsCreated(value: number) {
    this._numPcapsCreated = value;
  }
  public resetNumPcapsCreated() {
    this._numPcapsCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numPcapsCreatedInput() {
    return this._numPcapsCreated;
  }

  // num_per_object_counters_deregistered - computed: false, optional: true, required: false
  private _numPerObjectCountersDeregistered?: number; 
  public get numPerObjectCountersDeregistered() {
    return this.getNumberAttribute('num_per_object_counters_deregistered');
  }
  public set numPerObjectCountersDeregistered(value: number) {
    this._numPerObjectCountersDeregistered = value;
  }
  public resetNumPerObjectCountersDeregistered() {
    this._numPerObjectCountersDeregistered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numPerObjectCountersDeregisteredInput() {
    return this._numPerObjectCountersDeregistered;
  }

  // num_per_object_counters_registered - computed: false, optional: true, required: false
  private _numPerObjectCountersRegistered?: number; 
  public get numPerObjectCountersRegistered() {
    return this.getNumberAttribute('num_per_object_counters_registered');
  }
  public set numPerObjectCountersRegistered(value: number) {
    this._numPerObjectCountersRegistered = value;
  }
  public resetNumPerObjectCountersRegistered() {
    this._numPerObjectCountersRegistered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numPerObjectCountersRegisteredInput() {
    return this._numPerObjectCountersRegistered;
  }

  // num_tmp_pcaps_created - computed: false, optional: true, required: false
  private _numTmpPcapsCreated?: number; 
  public get numTmpPcapsCreated() {
    return this.getNumberAttribute('num_tmp_pcaps_created');
  }
  public set numTmpPcapsCreated(value: number) {
    this._numTmpPcapsCreated = value;
  }
  public resetNumTmpPcapsCreated() {
    this._numTmpPcapsCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numTmpPcapsCreatedInput() {
    return this._numTmpPcapsCreated;
  }

  // pkt_already_captured - computed: false, optional: true, required: false
  private _pktAlreadyCaptured?: number; 
  public get pktAlreadyCaptured() {
    return this.getNumberAttribute('pkt_already_captured');
  }
  public set pktAlreadyCaptured(value: number) {
    this._pktAlreadyCaptured = value;
  }
  public resetPktAlreadyCaptured() {
    this._pktAlreadyCaptured = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktAlreadyCapturedInput() {
    return this._pktAlreadyCaptured;
  }

  // pktcap_oom - computed: false, optional: true, required: false
  private _pktcapOom?: number; 
  public get pktcapOom() {
    return this.getNumberAttribute('pktcap_oom');
  }
  public set pktcapOom(value: number) {
    this._pktcapOom = value;
  }
  public resetPktcapOom() {
    this._pktcapOom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktcapOomInput() {
    return this._pktcapOom;
  }

  // pktcapture_failure_file_size_rchd - computed: false, optional: true, required: false
  private _pktcaptureFailureFileSizeRchd?: number; 
  public get pktcaptureFailureFileSizeRchd() {
    return this.getNumberAttribute('pktcapture_failure_file_size_rchd');
  }
  public set pktcaptureFailureFileSizeRchd(value: number) {
    this._pktcaptureFailureFileSizeRchd = value;
  }
  public resetPktcaptureFailureFileSizeRchd() {
    this._pktcaptureFailureFileSizeRchd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktcaptureFailureFileSizeRchdInput() {
    return this._pktcaptureFailureFileSizeRchd;
  }

  // pktcapture_failure_wait_for_block - computed: false, optional: true, required: false
  private _pktcaptureFailureWaitForBlock?: number; 
  public get pktcaptureFailureWaitForBlock() {
    return this.getNumberAttribute('pktcapture_failure_wait_for_block');
  }
  public set pktcaptureFailureWaitForBlock(value: number) {
    this._pktcaptureFailureWaitForBlock = value;
  }
  public resetPktcaptureFailureWaitForBlock() {
    this._pktcaptureFailureWaitForBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktcaptureFailureWaitForBlockInput() {
    return this._pktcaptureFailureWaitForBlock;
  }

  // pktcapture_triggered_by_anomaly - computed: false, optional: true, required: false
  private _pktcaptureTriggeredByAnomaly?: number; 
  public get pktcaptureTriggeredByAnomaly() {
    return this.getNumberAttribute('pktcapture_triggered_by_anomaly');
  }
  public set pktcaptureTriggeredByAnomaly(value: number) {
    this._pktcaptureTriggeredByAnomaly = value;
  }
  public resetPktcaptureTriggeredByAnomaly() {
    this._pktcaptureTriggeredByAnomaly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktcaptureTriggeredByAnomalyInput() {
    return this._pktcaptureTriggeredByAnomaly;
  }

  // pktcapture_triggered_by_increment - computed: false, optional: true, required: false
  private _pktcaptureTriggeredByIncrement?: number; 
  public get pktcaptureTriggeredByIncrement() {
    return this.getNumberAttribute('pktcapture_triggered_by_increment');
  }
  public set pktcaptureTriggeredByIncrement(value: number) {
    this._pktcaptureTriggeredByIncrement = value;
  }
  public resetPktcaptureTriggeredByIncrement() {
    this._pktcaptureTriggeredByIncrement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktcaptureTriggeredByIncrementInput() {
    return this._pktcaptureTriggeredByIncrement;
  }

  // pktcapture_triggered_by_other_feature - computed: false, optional: true, required: false
  private _pktcaptureTriggeredByOtherFeature?: number; 
  public get pktcaptureTriggeredByOtherFeature() {
    return this.getNumberAttribute('pktcapture_triggered_by_other_feature');
  }
  public set pktcaptureTriggeredByOtherFeature(value: number) {
    this._pktcaptureTriggeredByOtherFeature = value;
  }
  public resetPktcaptureTriggeredByOtherFeature() {
    this._pktcaptureTriggeredByOtherFeature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktcaptureTriggeredByOtherFeatureInput() {
    return this._pktcaptureTriggeredByOtherFeature;
  }

  // pktcapture_with_conn_but_not_tagged_failure - computed: false, optional: true, required: false
  private _pktcaptureWithConnButNotTaggedFailure?: number; 
  public get pktcaptureWithConnButNotTaggedFailure() {
    return this.getNumberAttribute('pktcapture_with_conn_but_not_tagged_failure');
  }
  public set pktcaptureWithConnButNotTaggedFailure(value: number) {
    this._pktcaptureWithConnButNotTaggedFailure = value;
  }
  public resetPktcaptureWithConnButNotTaggedFailure() {
    this._pktcaptureWithConnButNotTaggedFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktcaptureWithConnButNotTaggedFailureInput() {
    return this._pktcaptureWithConnButNotTaggedFailure;
  }

  // pktcapture_with_conn_but_not_tagged_success - computed: false, optional: true, required: false
  private _pktcaptureWithConnButNotTaggedSuccess?: number; 
  public get pktcaptureWithConnButNotTaggedSuccess() {
    return this.getNumberAttribute('pktcapture_with_conn_but_not_tagged_success');
  }
  public set pktcaptureWithConnButNotTaggedSuccess(value: number) {
    this._pktcaptureWithConnButNotTaggedSuccess = value;
  }
  public resetPktcaptureWithConnButNotTaggedSuccess() {
    this._pktcaptureWithConnButNotTaggedSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktcaptureWithConnButNotTaggedSuccessInput() {
    return this._pktcaptureWithConnButNotTaggedSuccess;
  }

  // pktcapture_with_conn_failure - computed: false, optional: true, required: false
  private _pktcaptureWithConnFailure?: number; 
  public get pktcaptureWithConnFailure() {
    return this.getNumberAttribute('pktcapture_with_conn_failure');
  }
  public set pktcaptureWithConnFailure(value: number) {
    this._pktcaptureWithConnFailure = value;
  }
  public resetPktcaptureWithConnFailure() {
    this._pktcaptureWithConnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktcaptureWithConnFailureInput() {
    return this._pktcaptureWithConnFailure;
  }

  // pktcapture_with_conn_failure_global - computed: false, optional: true, required: false
  private _pktcaptureWithConnFailureGlobal?: number; 
  public get pktcaptureWithConnFailureGlobal() {
    return this.getNumberAttribute('pktcapture_with_conn_failure_global');
  }
  public set pktcaptureWithConnFailureGlobal(value: number) {
    this._pktcaptureWithConnFailureGlobal = value;
  }
  public resetPktcaptureWithConnFailureGlobal() {
    this._pktcaptureWithConnFailureGlobal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktcaptureWithConnFailureGlobalInput() {
    return this._pktcaptureWithConnFailureGlobal;
  }

  // pktcapture_with_conn_success - computed: false, optional: true, required: false
  private _pktcaptureWithConnSuccess?: number; 
  public get pktcaptureWithConnSuccess() {
    return this.getNumberAttribute('pktcapture_with_conn_success');
  }
  public set pktcaptureWithConnSuccess(value: number) {
    this._pktcaptureWithConnSuccess = value;
  }
  public resetPktcaptureWithConnSuccess() {
    this._pktcaptureWithConnSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktcaptureWithConnSuccessInput() {
    return this._pktcaptureWithConnSuccess;
  }

  // pktcapture_with_conn_success_global - computed: false, optional: true, required: false
  private _pktcaptureWithConnSuccessGlobal?: number; 
  public get pktcaptureWithConnSuccessGlobal() {
    return this.getNumberAttribute('pktcapture_with_conn_success_global');
  }
  public set pktcaptureWithConnSuccessGlobal(value: number) {
    this._pktcaptureWithConnSuccessGlobal = value;
  }
  public resetPktcaptureWithConnSuccessGlobal() {
    this._pktcaptureWithConnSuccessGlobal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktcaptureWithConnSuccessGlobalInput() {
    return this._pktcaptureWithConnSuccessGlobal;
  }

  // pktcapture_with_no_conn_failure - computed: false, optional: true, required: false
  private _pktcaptureWithNoConnFailure?: number; 
  public get pktcaptureWithNoConnFailure() {
    return this.getNumberAttribute('pktcapture_with_no_conn_failure');
  }
  public set pktcaptureWithNoConnFailure(value: number) {
    this._pktcaptureWithNoConnFailure = value;
  }
  public resetPktcaptureWithNoConnFailure() {
    this._pktcaptureWithNoConnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktcaptureWithNoConnFailureInput() {
    return this._pktcaptureWithNoConnFailure;
  }

  // pktcapture_with_no_conn_success - computed: false, optional: true, required: false
  private _pktcaptureWithNoConnSuccess?: number; 
  public get pktcaptureWithNoConnSuccess() {
    return this.getNumberAttribute('pktcapture_with_no_conn_success');
  }
  public set pktcaptureWithNoConnSuccess(value: number) {
    this._pktcaptureWithNoConnSuccess = value;
  }
  public resetPktcaptureWithNoConnSuccess() {
    this._pktcaptureWithNoConnSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktcaptureWithNoConnSuccessInput() {
    return this._pktcaptureWithNoConnSuccess;
  }

  // skip_as_conn_already_recapture - computed: false, optional: true, required: false
  private _skipAsConnAlreadyRecapture?: number; 
  public get skipAsConnAlreadyRecapture() {
    return this.getNumberAttribute('skip_as_conn_already_recapture');
  }
  public set skipAsConnAlreadyRecapture(value: number) {
    this._skipAsConnAlreadyRecapture = value;
  }
  public resetSkipAsConnAlreadyRecapture() {
    this._skipAsConnAlreadyRecapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipAsConnAlreadyRecaptureInput() {
    return this._skipAsConnAlreadyRecapture;
  }

  // skip_capture_as_conn_created_before_smp - computed: false, optional: true, required: false
  private _skipCaptureAsConnCreatedBeforeSmp?: number; 
  public get skipCaptureAsConnCreatedBeforeSmp() {
    return this.getNumberAttribute('skip_capture_as_conn_created_before_smp');
  }
  public set skipCaptureAsConnCreatedBeforeSmp(value: number) {
    this._skipCaptureAsConnCreatedBeforeSmp = value;
  }
  public resetSkipCaptureAsConnCreatedBeforeSmp() {
    this._skipCaptureAsConnCreatedBeforeSmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCaptureAsConnCreatedBeforeSmpInput() {
    return this._skipCaptureAsConnCreatedBeforeSmp;
  }

  // wrong_ctr_incremented - computed: false, optional: true, required: false
  private _wrongCtrIncremented?: number; 
  public get wrongCtrIncremented() {
    return this.getNumberAttribute('wrong_ctr_incremented');
  }
  public set wrongCtrIncremented(value: number) {
    this._wrongCtrIncremented = value;
  }
  public resetWrongCtrIncremented() {
    this._wrongCtrIncremented = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wrongCtrIncrementedInput() {
    return this._wrongCtrIncremented;
  }
}
export interface DataThunderVisibilityStatsPacketCapture {
  /**
  * automated_captures block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#automated_captures DataThunderVisibilityStats#automated_captures}
  */
  readonly automatedCaptures?: DataThunderVisibilityStatsPacketCaptureAutomatedCaptures;
  /**
  * capture_config_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#capture_config_list DataThunderVisibilityStats#capture_config_list}
  */
  readonly captureConfigList?: DataThunderVisibilityStatsPacketCaptureCaptureConfigListStruct[] | cdktf.IResolvable;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#stats DataThunderVisibilityStats#stats}
  */
  readonly stats?: DataThunderVisibilityStatsPacketCaptureStats;
}

export function dataThunderVisibilityStatsPacketCaptureToTerraform(struct?: DataThunderVisibilityStatsPacketCaptureOutputReference | DataThunderVisibilityStatsPacketCapture): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automated_captures: dataThunderVisibilityStatsPacketCaptureAutomatedCapturesToTerraform(struct!.automatedCaptures),
    capture_config_list: cdktf.listMapper(dataThunderVisibilityStatsPacketCaptureCaptureConfigListStructToTerraform, true)(struct!.captureConfigList),
    stats: dataThunderVisibilityStatsPacketCaptureStatsToTerraform(struct!.stats),
  }
}


export function dataThunderVisibilityStatsPacketCaptureToHclTerraform(struct?: DataThunderVisibilityStatsPacketCaptureOutputReference | DataThunderVisibilityStatsPacketCapture): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automated_captures: {
      value: dataThunderVisibilityStatsPacketCaptureAutomatedCapturesToHclTerraform(struct!.automatedCaptures),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityStatsPacketCaptureAutomatedCapturesList",
    },
    capture_config_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityStatsPacketCaptureCaptureConfigListStructToHclTerraform, true)(struct!.captureConfigList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityStatsPacketCaptureCaptureConfigListStructList",
    },
    stats: {
      value: dataThunderVisibilityStatsPacketCaptureStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityStatsPacketCaptureStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityStatsPacketCaptureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityStatsPacketCapture | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automatedCaptures?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.automatedCaptures = this._automatedCaptures?.internalValue;
    }
    if (this._captureConfigList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureConfigList = this._captureConfigList?.internalValue;
    }
    if (this._stats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stats = this._stats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityStatsPacketCapture | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automatedCaptures.internalValue = undefined;
      this._captureConfigList.internalValue = undefined;
      this._stats.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automatedCaptures.internalValue = value.automatedCaptures;
      this._captureConfigList.internalValue = value.captureConfigList;
      this._stats.internalValue = value.stats;
    }
  }

  // automated_captures - computed: false, optional: true, required: false
  private _automatedCaptures = new DataThunderVisibilityStatsPacketCaptureAutomatedCapturesOutputReference(this, "automated_captures");
  public get automatedCaptures() {
    return this._automatedCaptures;
  }
  public putAutomatedCaptures(value: DataThunderVisibilityStatsPacketCaptureAutomatedCaptures) {
    this._automatedCaptures.internalValue = value;
  }
  public resetAutomatedCaptures() {
    this._automatedCaptures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automatedCapturesInput() {
    return this._automatedCaptures.internalValue;
  }

  // capture_config_list - computed: false, optional: true, required: false
  private _captureConfigList = new DataThunderVisibilityStatsPacketCaptureCaptureConfigListStructList(this, "capture_config_list", false);
  public get captureConfigList() {
    return this._captureConfigList;
  }
  public putCaptureConfigList(value: DataThunderVisibilityStatsPacketCaptureCaptureConfigListStruct[] | cdktf.IResolvable) {
    this._captureConfigList.internalValue = value;
  }
  public resetCaptureConfigList() {
    this._captureConfigList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureConfigListInput() {
    return this._captureConfigList.internalValue;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderVisibilityStatsPacketCaptureStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderVisibilityStatsPacketCaptureStats) {
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
export interface DataThunderVisibilityStatsReportingStats {
  /**
  * Total reporting buffer allocation failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#buffer_alloc_failure DataThunderVisibilityStats#buffer_alloc_failure}
  */
  readonly bufferAllocFailure?: number;
  /**
  * Total jobs dequeued
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#dequeued DataThunderVisibilityStats#dequeued}
  */
  readonly dequeued?: number;
  /**
  * Total enqueue jobs failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#enqueue_fail DataThunderVisibilityStats#enqueue_fail}
  */
  readonly enqueueFail?: number;
  /**
  * Total enqueue jobs passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#enqueue_pass DataThunderVisibilityStats#enqueue_pass}
  */
  readonly enqueuePass?: number;
  /**
  * Total log transmit failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#log_transmit_failure DataThunderVisibilityStats#log_transmit_failure}
  */
  readonly logTransmitFailure?: number;
  /**
  * Total notification jobs in queue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#notif_jobs_in_queue DataThunderVisibilityStats#notif_jobs_in_queue}
  */
  readonly notifJobsInQueue?: number;
}

export function dataThunderVisibilityStatsReportingStatsToTerraform(struct?: DataThunderVisibilityStatsReportingStatsOutputReference | DataThunderVisibilityStatsReportingStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer_alloc_failure: cdktf.numberToTerraform(struct!.bufferAllocFailure),
    dequeued: cdktf.numberToTerraform(struct!.dequeued),
    enqueue_fail: cdktf.numberToTerraform(struct!.enqueueFail),
    enqueue_pass: cdktf.numberToTerraform(struct!.enqueuePass),
    log_transmit_failure: cdktf.numberToTerraform(struct!.logTransmitFailure),
    notif_jobs_in_queue: cdktf.numberToTerraform(struct!.notifJobsInQueue),
  }
}


export function dataThunderVisibilityStatsReportingStatsToHclTerraform(struct?: DataThunderVisibilityStatsReportingStatsOutputReference | DataThunderVisibilityStatsReportingStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer_alloc_failure: {
      value: cdktf.numberToHclTerraform(struct!.bufferAllocFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dequeued: {
      value: cdktf.numberToHclTerraform(struct!.dequeued),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enqueue_fail: {
      value: cdktf.numberToHclTerraform(struct!.enqueueFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enqueue_pass: {
      value: cdktf.numberToHclTerraform(struct!.enqueuePass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_transmit_failure: {
      value: cdktf.numberToHclTerraform(struct!.logTransmitFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    notif_jobs_in_queue: {
      value: cdktf.numberToHclTerraform(struct!.notifJobsInQueue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityStatsReportingStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityStatsReportingStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bufferAllocFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferAllocFailure = this._bufferAllocFailure;
    }
    if (this._dequeued !== undefined) {
      hasAnyValues = true;
      internalValueResult.dequeued = this._dequeued;
    }
    if (this._enqueueFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.enqueueFail = this._enqueueFail;
    }
    if (this._enqueuePass !== undefined) {
      hasAnyValues = true;
      internalValueResult.enqueuePass = this._enqueuePass;
    }
    if (this._logTransmitFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTransmitFailure = this._logTransmitFailure;
    }
    if (this._notifJobsInQueue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifJobsInQueue = this._notifJobsInQueue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityStatsReportingStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bufferAllocFailure = undefined;
      this._dequeued = undefined;
      this._enqueueFail = undefined;
      this._enqueuePass = undefined;
      this._logTransmitFailure = undefined;
      this._notifJobsInQueue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bufferAllocFailure = value.bufferAllocFailure;
      this._dequeued = value.dequeued;
      this._enqueueFail = value.enqueueFail;
      this._enqueuePass = value.enqueuePass;
      this._logTransmitFailure = value.logTransmitFailure;
      this._notifJobsInQueue = value.notifJobsInQueue;
    }
  }

  // buffer_alloc_failure - computed: false, optional: true, required: false
  private _bufferAllocFailure?: number; 
  public get bufferAllocFailure() {
    return this.getNumberAttribute('buffer_alloc_failure');
  }
  public set bufferAllocFailure(value: number) {
    this._bufferAllocFailure = value;
  }
  public resetBufferAllocFailure() {
    this._bufferAllocFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferAllocFailureInput() {
    return this._bufferAllocFailure;
  }

  // dequeued - computed: false, optional: true, required: false
  private _dequeued?: number; 
  public get dequeued() {
    return this.getNumberAttribute('dequeued');
  }
  public set dequeued(value: number) {
    this._dequeued = value;
  }
  public resetDequeued() {
    this._dequeued = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dequeuedInput() {
    return this._dequeued;
  }

  // enqueue_fail - computed: false, optional: true, required: false
  private _enqueueFail?: number; 
  public get enqueueFail() {
    return this.getNumberAttribute('enqueue_fail');
  }
  public set enqueueFail(value: number) {
    this._enqueueFail = value;
  }
  public resetEnqueueFail() {
    this._enqueueFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enqueueFailInput() {
    return this._enqueueFail;
  }

  // enqueue_pass - computed: false, optional: true, required: false
  private _enqueuePass?: number; 
  public get enqueuePass() {
    return this.getNumberAttribute('enqueue_pass');
  }
  public set enqueuePass(value: number) {
    this._enqueuePass = value;
  }
  public resetEnqueuePass() {
    this._enqueuePass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enqueuePassInput() {
    return this._enqueuePass;
  }

  // log_transmit_failure - computed: false, optional: true, required: false
  private _logTransmitFailure?: number; 
  public get logTransmitFailure() {
    return this.getNumberAttribute('log_transmit_failure');
  }
  public set logTransmitFailure(value: number) {
    this._logTransmitFailure = value;
  }
  public resetLogTransmitFailure() {
    this._logTransmitFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTransmitFailureInput() {
    return this._logTransmitFailure;
  }

  // notif_jobs_in_queue - computed: false, optional: true, required: false
  private _notifJobsInQueue?: number; 
  public get notifJobsInQueue() {
    return this.getNumberAttribute('notif_jobs_in_queue');
  }
  public set notifJobsInQueue(value: number) {
    this._notifJobsInQueue = value;
  }
  public resetNotifJobsInQueue() {
    this._notifJobsInQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifJobsInQueueInput() {
    return this._notifJobsInQueue;
  }
}
export interface DataThunderVisibilityStatsReporting {
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#stats DataThunderVisibilityStats#stats}
  */
  readonly stats?: DataThunderVisibilityStatsReportingStats;
}

export function dataThunderVisibilityStatsReportingToTerraform(struct?: DataThunderVisibilityStatsReportingOutputReference | DataThunderVisibilityStatsReporting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stats: dataThunderVisibilityStatsReportingStatsToTerraform(struct!.stats),
  }
}


export function dataThunderVisibilityStatsReportingToHclTerraform(struct?: DataThunderVisibilityStatsReportingOutputReference | DataThunderVisibilityStatsReporting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stats: {
      value: dataThunderVisibilityStatsReportingStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityStatsReportingStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityStatsReportingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityStatsReporting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stats = this._stats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityStatsReporting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stats.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stats.internalValue = value.stats;
    }
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderVisibilityStatsReportingStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderVisibilityStatsReportingStats) {
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
export interface DataThunderVisibilityStatsStats {
  /**
  * Total anomaly off HA messages sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#ha_entity_anomaly_off_sent DataThunderVisibilityStats#ha_entity_anomaly_off_sent}
  */
  readonly haEntityAnomalyOffSent?: number;
  /**
  * Total anomaly on HA messages sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#ha_entity_anomaly_on_sent DataThunderVisibilityStats#ha_entity_anomaly_on_sent}
  */
  readonly haEntityAnomalyOnSent?: number;
  /**
  * Total montior entity HA create messages sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#ha_entity_create_sent DataThunderVisibilityStats#ha_entity_create_sent}
  */
  readonly haEntityCreateSent?: number;
  /**
  * Total montior entity HA delete messages sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#ha_entity_delete_sent DataThunderVisibilityStats#ha_entity_delete_sent}
  */
  readonly haEntityDeleteSent?: number;
  /**
  * Total monitor entity periodic sync messages sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#ha_entity_periodic_sync_sent DataThunderVisibilityStats#ha_entity_periodic_sync_sent}
  */
  readonly haEntityPeriodicSyncSent?: number;
  /**
  * Total Light-weight entities created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#lw_mon_entity_created DataThunderVisibilityStats#lw_mon_entity_created}
  */
  readonly lwMonEntityCreated?: number;
  /**
  * Total Light-weight entities deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#lw_mon_entity_deleted DataThunderVisibilityStats#lw_mon_entity_deleted}
  */
  readonly lwMonEntityDeleted?: number;
  /**
  * Light weight limit exceeded errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#lw_mon_entity_limit_exceed DataThunderVisibilityStats#lw_mon_entity_limit_exceed}
  */
  readonly lwMonEntityLimitExceed?: number;
  /**
  * Light Weight Out-of-memory allocation failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#lw_out_of_memory_alloc_failures DataThunderVisibilityStats#lw_out_of_memory_alloc_failures}
  */
  readonly lwOutOfMemoryAllocFailures?: number;
  /**
  * Total monitor entity limit exceed failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#mon_entity_limit_exceed DataThunderVisibilityStats#mon_entity_limit_exceed}
  */
  readonly monEntityLimitExceed?: number;
  /**
  * Total monitor entity rrd file create error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#mon_entity_rrd_file_create_err DataThunderVisibilityStats#mon_entity_rrd_file_create_err}
  */
  readonly monEntityRrdFileCreateErr?: number;
  /**
  * Total monitor entity rrd file timestamp errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#mon_entity_rrd_file_timestamp_err DataThunderVisibilityStats#mon_entity_rrd_file_timestamp_err}
  */
  readonly monEntityRrdFileTimestampErr?: number;
  /**
  * Total monitor entity rrd last update fetch failed error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#mon_entity_rrd_last_update_fetch_failed_err DataThunderVisibilityStats#mon_entity_rrd_last_update_fetch_failed_err}
  */
  readonly monEntityRrdLastUpdateFetchFailedErr?: number;
  /**
  * Total monitor entity rrd load failed, out of memory error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#mon_entity_rrd_out_of_memory_err DataThunderVisibilityStats#mon_entity_rrd_out_of_memory_err}
  */
  readonly monEntityRrdOutOfMemoryErr?: number;
  /**
  * Total monitor entity rrd tune error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#mon_entity_rrd_tune_err DataThunderVisibilityStats#mon_entity_rrd_tune_err}
  */
  readonly monEntityRrdTuneErr?: number;
  /**
  * Total monitor entity rrd update error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#mon_entity_rrd_update_err DataThunderVisibilityStats#mon_entity_rrd_update_err}
  */
  readonly monEntityRrdUpdateErr?: number;
  /**
  * Out of memory allocation failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#out_of_memory_alloc_failures DataThunderVisibilityStats#out_of_memory_alloc_failures}
  */
  readonly outOfMemoryAllocFailures?: number;
}

export function dataThunderVisibilityStatsStatsToTerraform(struct?: DataThunderVisibilityStatsStatsOutputReference | DataThunderVisibilityStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ha_entity_anomaly_off_sent: cdktf.numberToTerraform(struct!.haEntityAnomalyOffSent),
    ha_entity_anomaly_on_sent: cdktf.numberToTerraform(struct!.haEntityAnomalyOnSent),
    ha_entity_create_sent: cdktf.numberToTerraform(struct!.haEntityCreateSent),
    ha_entity_delete_sent: cdktf.numberToTerraform(struct!.haEntityDeleteSent),
    ha_entity_periodic_sync_sent: cdktf.numberToTerraform(struct!.haEntityPeriodicSyncSent),
    lw_mon_entity_created: cdktf.numberToTerraform(struct!.lwMonEntityCreated),
    lw_mon_entity_deleted: cdktf.numberToTerraform(struct!.lwMonEntityDeleted),
    lw_mon_entity_limit_exceed: cdktf.numberToTerraform(struct!.lwMonEntityLimitExceed),
    lw_out_of_memory_alloc_failures: cdktf.numberToTerraform(struct!.lwOutOfMemoryAllocFailures),
    mon_entity_limit_exceed: cdktf.numberToTerraform(struct!.monEntityLimitExceed),
    mon_entity_rrd_file_create_err: cdktf.numberToTerraform(struct!.monEntityRrdFileCreateErr),
    mon_entity_rrd_file_timestamp_err: cdktf.numberToTerraform(struct!.monEntityRrdFileTimestampErr),
    mon_entity_rrd_last_update_fetch_failed_err: cdktf.numberToTerraform(struct!.monEntityRrdLastUpdateFetchFailedErr),
    mon_entity_rrd_out_of_memory_err: cdktf.numberToTerraform(struct!.monEntityRrdOutOfMemoryErr),
    mon_entity_rrd_tune_err: cdktf.numberToTerraform(struct!.monEntityRrdTuneErr),
    mon_entity_rrd_update_err: cdktf.numberToTerraform(struct!.monEntityRrdUpdateErr),
    out_of_memory_alloc_failures: cdktf.numberToTerraform(struct!.outOfMemoryAllocFailures),
  }
}


export function dataThunderVisibilityStatsStatsToHclTerraform(struct?: DataThunderVisibilityStatsStatsOutputReference | DataThunderVisibilityStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ha_entity_anomaly_off_sent: {
      value: cdktf.numberToHclTerraform(struct!.haEntityAnomalyOffSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ha_entity_anomaly_on_sent: {
      value: cdktf.numberToHclTerraform(struct!.haEntityAnomalyOnSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ha_entity_create_sent: {
      value: cdktf.numberToHclTerraform(struct!.haEntityCreateSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ha_entity_delete_sent: {
      value: cdktf.numberToHclTerraform(struct!.haEntityDeleteSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ha_entity_periodic_sync_sent: {
      value: cdktf.numberToHclTerraform(struct!.haEntityPeriodicSyncSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lw_mon_entity_created: {
      value: cdktf.numberToHclTerraform(struct!.lwMonEntityCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lw_mon_entity_deleted: {
      value: cdktf.numberToHclTerraform(struct!.lwMonEntityDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lw_mon_entity_limit_exceed: {
      value: cdktf.numberToHclTerraform(struct!.lwMonEntityLimitExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lw_out_of_memory_alloc_failures: {
      value: cdktf.numberToHclTerraform(struct!.lwOutOfMemoryAllocFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mon_entity_limit_exceed: {
      value: cdktf.numberToHclTerraform(struct!.monEntityLimitExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mon_entity_rrd_file_create_err: {
      value: cdktf.numberToHclTerraform(struct!.monEntityRrdFileCreateErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mon_entity_rrd_file_timestamp_err: {
      value: cdktf.numberToHclTerraform(struct!.monEntityRrdFileTimestampErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mon_entity_rrd_last_update_fetch_failed_err: {
      value: cdktf.numberToHclTerraform(struct!.monEntityRrdLastUpdateFetchFailedErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mon_entity_rrd_out_of_memory_err: {
      value: cdktf.numberToHclTerraform(struct!.monEntityRrdOutOfMemoryErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mon_entity_rrd_tune_err: {
      value: cdktf.numberToHclTerraform(struct!.monEntityRrdTuneErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mon_entity_rrd_update_err: {
      value: cdktf.numberToHclTerraform(struct!.monEntityRrdUpdateErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out_of_memory_alloc_failures: {
      value: cdktf.numberToHclTerraform(struct!.outOfMemoryAllocFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._haEntityAnomalyOffSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.haEntityAnomalyOffSent = this._haEntityAnomalyOffSent;
    }
    if (this._haEntityAnomalyOnSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.haEntityAnomalyOnSent = this._haEntityAnomalyOnSent;
    }
    if (this._haEntityCreateSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.haEntityCreateSent = this._haEntityCreateSent;
    }
    if (this._haEntityDeleteSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.haEntityDeleteSent = this._haEntityDeleteSent;
    }
    if (this._haEntityPeriodicSyncSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.haEntityPeriodicSyncSent = this._haEntityPeriodicSyncSent;
    }
    if (this._lwMonEntityCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.lwMonEntityCreated = this._lwMonEntityCreated;
    }
    if (this._lwMonEntityDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.lwMonEntityDeleted = this._lwMonEntityDeleted;
    }
    if (this._lwMonEntityLimitExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.lwMonEntityLimitExceed = this._lwMonEntityLimitExceed;
    }
    if (this._lwOutOfMemoryAllocFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.lwOutOfMemoryAllocFailures = this._lwOutOfMemoryAllocFailures;
    }
    if (this._monEntityLimitExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.monEntityLimitExceed = this._monEntityLimitExceed;
    }
    if (this._monEntityRrdFileCreateErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.monEntityRrdFileCreateErr = this._monEntityRrdFileCreateErr;
    }
    if (this._monEntityRrdFileTimestampErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.monEntityRrdFileTimestampErr = this._monEntityRrdFileTimestampErr;
    }
    if (this._monEntityRrdLastUpdateFetchFailedErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.monEntityRrdLastUpdateFetchFailedErr = this._monEntityRrdLastUpdateFetchFailedErr;
    }
    if (this._monEntityRrdOutOfMemoryErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.monEntityRrdOutOfMemoryErr = this._monEntityRrdOutOfMemoryErr;
    }
    if (this._monEntityRrdTuneErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.monEntityRrdTuneErr = this._monEntityRrdTuneErr;
    }
    if (this._monEntityRrdUpdateErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.monEntityRrdUpdateErr = this._monEntityRrdUpdateErr;
    }
    if (this._outOfMemoryAllocFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.outOfMemoryAllocFailures = this._outOfMemoryAllocFailures;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._haEntityAnomalyOffSent = undefined;
      this._haEntityAnomalyOnSent = undefined;
      this._haEntityCreateSent = undefined;
      this._haEntityDeleteSent = undefined;
      this._haEntityPeriodicSyncSent = undefined;
      this._lwMonEntityCreated = undefined;
      this._lwMonEntityDeleted = undefined;
      this._lwMonEntityLimitExceed = undefined;
      this._lwOutOfMemoryAllocFailures = undefined;
      this._monEntityLimitExceed = undefined;
      this._monEntityRrdFileCreateErr = undefined;
      this._monEntityRrdFileTimestampErr = undefined;
      this._monEntityRrdLastUpdateFetchFailedErr = undefined;
      this._monEntityRrdOutOfMemoryErr = undefined;
      this._monEntityRrdTuneErr = undefined;
      this._monEntityRrdUpdateErr = undefined;
      this._outOfMemoryAllocFailures = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._haEntityAnomalyOffSent = value.haEntityAnomalyOffSent;
      this._haEntityAnomalyOnSent = value.haEntityAnomalyOnSent;
      this._haEntityCreateSent = value.haEntityCreateSent;
      this._haEntityDeleteSent = value.haEntityDeleteSent;
      this._haEntityPeriodicSyncSent = value.haEntityPeriodicSyncSent;
      this._lwMonEntityCreated = value.lwMonEntityCreated;
      this._lwMonEntityDeleted = value.lwMonEntityDeleted;
      this._lwMonEntityLimitExceed = value.lwMonEntityLimitExceed;
      this._lwOutOfMemoryAllocFailures = value.lwOutOfMemoryAllocFailures;
      this._monEntityLimitExceed = value.monEntityLimitExceed;
      this._monEntityRrdFileCreateErr = value.monEntityRrdFileCreateErr;
      this._monEntityRrdFileTimestampErr = value.monEntityRrdFileTimestampErr;
      this._monEntityRrdLastUpdateFetchFailedErr = value.monEntityRrdLastUpdateFetchFailedErr;
      this._monEntityRrdOutOfMemoryErr = value.monEntityRrdOutOfMemoryErr;
      this._monEntityRrdTuneErr = value.monEntityRrdTuneErr;
      this._monEntityRrdUpdateErr = value.monEntityRrdUpdateErr;
      this._outOfMemoryAllocFailures = value.outOfMemoryAllocFailures;
    }
  }

  // ha_entity_anomaly_off_sent - computed: false, optional: true, required: false
  private _haEntityAnomalyOffSent?: number; 
  public get haEntityAnomalyOffSent() {
    return this.getNumberAttribute('ha_entity_anomaly_off_sent');
  }
  public set haEntityAnomalyOffSent(value: number) {
    this._haEntityAnomalyOffSent = value;
  }
  public resetHaEntityAnomalyOffSent() {
    this._haEntityAnomalyOffSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haEntityAnomalyOffSentInput() {
    return this._haEntityAnomalyOffSent;
  }

  // ha_entity_anomaly_on_sent - computed: false, optional: true, required: false
  private _haEntityAnomalyOnSent?: number; 
  public get haEntityAnomalyOnSent() {
    return this.getNumberAttribute('ha_entity_anomaly_on_sent');
  }
  public set haEntityAnomalyOnSent(value: number) {
    this._haEntityAnomalyOnSent = value;
  }
  public resetHaEntityAnomalyOnSent() {
    this._haEntityAnomalyOnSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haEntityAnomalyOnSentInput() {
    return this._haEntityAnomalyOnSent;
  }

  // ha_entity_create_sent - computed: false, optional: true, required: false
  private _haEntityCreateSent?: number; 
  public get haEntityCreateSent() {
    return this.getNumberAttribute('ha_entity_create_sent');
  }
  public set haEntityCreateSent(value: number) {
    this._haEntityCreateSent = value;
  }
  public resetHaEntityCreateSent() {
    this._haEntityCreateSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haEntityCreateSentInput() {
    return this._haEntityCreateSent;
  }

  // ha_entity_delete_sent - computed: false, optional: true, required: false
  private _haEntityDeleteSent?: number; 
  public get haEntityDeleteSent() {
    return this.getNumberAttribute('ha_entity_delete_sent');
  }
  public set haEntityDeleteSent(value: number) {
    this._haEntityDeleteSent = value;
  }
  public resetHaEntityDeleteSent() {
    this._haEntityDeleteSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haEntityDeleteSentInput() {
    return this._haEntityDeleteSent;
  }

  // ha_entity_periodic_sync_sent - computed: false, optional: true, required: false
  private _haEntityPeriodicSyncSent?: number; 
  public get haEntityPeriodicSyncSent() {
    return this.getNumberAttribute('ha_entity_periodic_sync_sent');
  }
  public set haEntityPeriodicSyncSent(value: number) {
    this._haEntityPeriodicSyncSent = value;
  }
  public resetHaEntityPeriodicSyncSent() {
    this._haEntityPeriodicSyncSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haEntityPeriodicSyncSentInput() {
    return this._haEntityPeriodicSyncSent;
  }

  // lw_mon_entity_created - computed: false, optional: true, required: false
  private _lwMonEntityCreated?: number; 
  public get lwMonEntityCreated() {
    return this.getNumberAttribute('lw_mon_entity_created');
  }
  public set lwMonEntityCreated(value: number) {
    this._lwMonEntityCreated = value;
  }
  public resetLwMonEntityCreated() {
    this._lwMonEntityCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lwMonEntityCreatedInput() {
    return this._lwMonEntityCreated;
  }

  // lw_mon_entity_deleted - computed: false, optional: true, required: false
  private _lwMonEntityDeleted?: number; 
  public get lwMonEntityDeleted() {
    return this.getNumberAttribute('lw_mon_entity_deleted');
  }
  public set lwMonEntityDeleted(value: number) {
    this._lwMonEntityDeleted = value;
  }
  public resetLwMonEntityDeleted() {
    this._lwMonEntityDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lwMonEntityDeletedInput() {
    return this._lwMonEntityDeleted;
  }

  // lw_mon_entity_limit_exceed - computed: false, optional: true, required: false
  private _lwMonEntityLimitExceed?: number; 
  public get lwMonEntityLimitExceed() {
    return this.getNumberAttribute('lw_mon_entity_limit_exceed');
  }
  public set lwMonEntityLimitExceed(value: number) {
    this._lwMonEntityLimitExceed = value;
  }
  public resetLwMonEntityLimitExceed() {
    this._lwMonEntityLimitExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lwMonEntityLimitExceedInput() {
    return this._lwMonEntityLimitExceed;
  }

  // lw_out_of_memory_alloc_failures - computed: false, optional: true, required: false
  private _lwOutOfMemoryAllocFailures?: number; 
  public get lwOutOfMemoryAllocFailures() {
    return this.getNumberAttribute('lw_out_of_memory_alloc_failures');
  }
  public set lwOutOfMemoryAllocFailures(value: number) {
    this._lwOutOfMemoryAllocFailures = value;
  }
  public resetLwOutOfMemoryAllocFailures() {
    this._lwOutOfMemoryAllocFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lwOutOfMemoryAllocFailuresInput() {
    return this._lwOutOfMemoryAllocFailures;
  }

  // mon_entity_limit_exceed - computed: false, optional: true, required: false
  private _monEntityLimitExceed?: number; 
  public get monEntityLimitExceed() {
    return this.getNumberAttribute('mon_entity_limit_exceed');
  }
  public set monEntityLimitExceed(value: number) {
    this._monEntityLimitExceed = value;
  }
  public resetMonEntityLimitExceed() {
    this._monEntityLimitExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monEntityLimitExceedInput() {
    return this._monEntityLimitExceed;
  }

  // mon_entity_rrd_file_create_err - computed: false, optional: true, required: false
  private _monEntityRrdFileCreateErr?: number; 
  public get monEntityRrdFileCreateErr() {
    return this.getNumberAttribute('mon_entity_rrd_file_create_err');
  }
  public set monEntityRrdFileCreateErr(value: number) {
    this._monEntityRrdFileCreateErr = value;
  }
  public resetMonEntityRrdFileCreateErr() {
    this._monEntityRrdFileCreateErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monEntityRrdFileCreateErrInput() {
    return this._monEntityRrdFileCreateErr;
  }

  // mon_entity_rrd_file_timestamp_err - computed: false, optional: true, required: false
  private _monEntityRrdFileTimestampErr?: number; 
  public get monEntityRrdFileTimestampErr() {
    return this.getNumberAttribute('mon_entity_rrd_file_timestamp_err');
  }
  public set monEntityRrdFileTimestampErr(value: number) {
    this._monEntityRrdFileTimestampErr = value;
  }
  public resetMonEntityRrdFileTimestampErr() {
    this._monEntityRrdFileTimestampErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monEntityRrdFileTimestampErrInput() {
    return this._monEntityRrdFileTimestampErr;
  }

  // mon_entity_rrd_last_update_fetch_failed_err - computed: false, optional: true, required: false
  private _monEntityRrdLastUpdateFetchFailedErr?: number; 
  public get monEntityRrdLastUpdateFetchFailedErr() {
    return this.getNumberAttribute('mon_entity_rrd_last_update_fetch_failed_err');
  }
  public set monEntityRrdLastUpdateFetchFailedErr(value: number) {
    this._monEntityRrdLastUpdateFetchFailedErr = value;
  }
  public resetMonEntityRrdLastUpdateFetchFailedErr() {
    this._monEntityRrdLastUpdateFetchFailedErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monEntityRrdLastUpdateFetchFailedErrInput() {
    return this._monEntityRrdLastUpdateFetchFailedErr;
  }

  // mon_entity_rrd_out_of_memory_err - computed: false, optional: true, required: false
  private _monEntityRrdOutOfMemoryErr?: number; 
  public get monEntityRrdOutOfMemoryErr() {
    return this.getNumberAttribute('mon_entity_rrd_out_of_memory_err');
  }
  public set monEntityRrdOutOfMemoryErr(value: number) {
    this._monEntityRrdOutOfMemoryErr = value;
  }
  public resetMonEntityRrdOutOfMemoryErr() {
    this._monEntityRrdOutOfMemoryErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monEntityRrdOutOfMemoryErrInput() {
    return this._monEntityRrdOutOfMemoryErr;
  }

  // mon_entity_rrd_tune_err - computed: false, optional: true, required: false
  private _monEntityRrdTuneErr?: number; 
  public get monEntityRrdTuneErr() {
    return this.getNumberAttribute('mon_entity_rrd_tune_err');
  }
  public set monEntityRrdTuneErr(value: number) {
    this._monEntityRrdTuneErr = value;
  }
  public resetMonEntityRrdTuneErr() {
    this._monEntityRrdTuneErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monEntityRrdTuneErrInput() {
    return this._monEntityRrdTuneErr;
  }

  // mon_entity_rrd_update_err - computed: false, optional: true, required: false
  private _monEntityRrdUpdateErr?: number; 
  public get monEntityRrdUpdateErr() {
    return this.getNumberAttribute('mon_entity_rrd_update_err');
  }
  public set monEntityRrdUpdateErr(value: number) {
    this._monEntityRrdUpdateErr = value;
  }
  public resetMonEntityRrdUpdateErr() {
    this._monEntityRrdUpdateErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monEntityRrdUpdateErrInput() {
    return this._monEntityRrdUpdateErr;
  }

  // out_of_memory_alloc_failures - computed: false, optional: true, required: false
  private _outOfMemoryAllocFailures?: number; 
  public get outOfMemoryAllocFailures() {
    return this.getNumberAttribute('out_of_memory_alloc_failures');
  }
  public set outOfMemoryAllocFailures(value: number) {
    this._outOfMemoryAllocFailures = value;
  }
  public resetOutOfMemoryAllocFailures() {
    this._outOfMemoryAllocFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfMemoryAllocFailuresInput() {
    return this._outOfMemoryAllocFailures;
  }
}
export interface DataThunderVisibilityStatsTopnStats {
  /**
  * Total heap node alloc failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#heap_alloc_failed DataThunderVisibilityStats#heap_alloc_failed}
  */
  readonly heapAllocFailed?: number;
  /**
  * Total heap node alloc failed Out of Memory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#heap_alloc_oom DataThunderVisibilityStats#heap_alloc_oom}
  */
  readonly heapAllocOom?: number;
  /**
  * Total heap node allocated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#heap_alloc_success DataThunderVisibilityStats#heap_alloc_success}
  */
  readonly heapAllocSuccess?: number;
  /**
  * Total Heap node deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#heap_deleted DataThunderVisibilityStats#heap_deleted}
  */
  readonly heapDeleted?: number;
  /**
  * Total Object node deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#obj_deleted DataThunderVisibilityStats#obj_deleted}
  */
  readonly objDeleted?: number;
  /**
  * Total object node alloc failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#obj_reg_failed DataThunderVisibilityStats#obj_reg_failed}
  */
  readonly objRegFailed?: number;
  /**
  * Total object node alloc failed Out of Memory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#obj_reg_oom DataThunderVisibilityStats#obj_reg_oom}
  */
  readonly objRegOom?: number;
  /**
  * Total object node allocated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#obj_reg_success DataThunderVisibilityStats#obj_reg_success}
  */
  readonly objRegSuccess?: number;
}

export function dataThunderVisibilityStatsTopnStatsToTerraform(struct?: DataThunderVisibilityStatsTopnStatsOutputReference | DataThunderVisibilityStatsTopnStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    heap_alloc_failed: cdktf.numberToTerraform(struct!.heapAllocFailed),
    heap_alloc_oom: cdktf.numberToTerraform(struct!.heapAllocOom),
    heap_alloc_success: cdktf.numberToTerraform(struct!.heapAllocSuccess),
    heap_deleted: cdktf.numberToTerraform(struct!.heapDeleted),
    obj_deleted: cdktf.numberToTerraform(struct!.objDeleted),
    obj_reg_failed: cdktf.numberToTerraform(struct!.objRegFailed),
    obj_reg_oom: cdktf.numberToTerraform(struct!.objRegOom),
    obj_reg_success: cdktf.numberToTerraform(struct!.objRegSuccess),
  }
}


export function dataThunderVisibilityStatsTopnStatsToHclTerraform(struct?: DataThunderVisibilityStatsTopnStatsOutputReference | DataThunderVisibilityStatsTopnStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    heap_alloc_failed: {
      value: cdktf.numberToHclTerraform(struct!.heapAllocFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    heap_alloc_oom: {
      value: cdktf.numberToHclTerraform(struct!.heapAllocOom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    heap_alloc_success: {
      value: cdktf.numberToHclTerraform(struct!.heapAllocSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    heap_deleted: {
      value: cdktf.numberToHclTerraform(struct!.heapDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    obj_deleted: {
      value: cdktf.numberToHclTerraform(struct!.objDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    obj_reg_failed: {
      value: cdktf.numberToHclTerraform(struct!.objRegFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    obj_reg_oom: {
      value: cdktf.numberToHclTerraform(struct!.objRegOom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    obj_reg_success: {
      value: cdktf.numberToHclTerraform(struct!.objRegSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityStatsTopnStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityStatsTopnStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._heapAllocFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.heapAllocFailed = this._heapAllocFailed;
    }
    if (this._heapAllocOom !== undefined) {
      hasAnyValues = true;
      internalValueResult.heapAllocOom = this._heapAllocOom;
    }
    if (this._heapAllocSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.heapAllocSuccess = this._heapAllocSuccess;
    }
    if (this._heapDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.heapDeleted = this._heapDeleted;
    }
    if (this._objDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.objDeleted = this._objDeleted;
    }
    if (this._objRegFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.objRegFailed = this._objRegFailed;
    }
    if (this._objRegOom !== undefined) {
      hasAnyValues = true;
      internalValueResult.objRegOom = this._objRegOom;
    }
    if (this._objRegSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.objRegSuccess = this._objRegSuccess;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityStatsTopnStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._heapAllocFailed = undefined;
      this._heapAllocOom = undefined;
      this._heapAllocSuccess = undefined;
      this._heapDeleted = undefined;
      this._objDeleted = undefined;
      this._objRegFailed = undefined;
      this._objRegOom = undefined;
      this._objRegSuccess = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._heapAllocFailed = value.heapAllocFailed;
      this._heapAllocOom = value.heapAllocOom;
      this._heapAllocSuccess = value.heapAllocSuccess;
      this._heapDeleted = value.heapDeleted;
      this._objDeleted = value.objDeleted;
      this._objRegFailed = value.objRegFailed;
      this._objRegOom = value.objRegOom;
      this._objRegSuccess = value.objRegSuccess;
    }
  }

  // heap_alloc_failed - computed: false, optional: true, required: false
  private _heapAllocFailed?: number; 
  public get heapAllocFailed() {
    return this.getNumberAttribute('heap_alloc_failed');
  }
  public set heapAllocFailed(value: number) {
    this._heapAllocFailed = value;
  }
  public resetHeapAllocFailed() {
    this._heapAllocFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heapAllocFailedInput() {
    return this._heapAllocFailed;
  }

  // heap_alloc_oom - computed: false, optional: true, required: false
  private _heapAllocOom?: number; 
  public get heapAllocOom() {
    return this.getNumberAttribute('heap_alloc_oom');
  }
  public set heapAllocOom(value: number) {
    this._heapAllocOom = value;
  }
  public resetHeapAllocOom() {
    this._heapAllocOom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heapAllocOomInput() {
    return this._heapAllocOom;
  }

  // heap_alloc_success - computed: false, optional: true, required: false
  private _heapAllocSuccess?: number; 
  public get heapAllocSuccess() {
    return this.getNumberAttribute('heap_alloc_success');
  }
  public set heapAllocSuccess(value: number) {
    this._heapAllocSuccess = value;
  }
  public resetHeapAllocSuccess() {
    this._heapAllocSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heapAllocSuccessInput() {
    return this._heapAllocSuccess;
  }

  // heap_deleted - computed: false, optional: true, required: false
  private _heapDeleted?: number; 
  public get heapDeleted() {
    return this.getNumberAttribute('heap_deleted');
  }
  public set heapDeleted(value: number) {
    this._heapDeleted = value;
  }
  public resetHeapDeleted() {
    this._heapDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heapDeletedInput() {
    return this._heapDeleted;
  }

  // obj_deleted - computed: false, optional: true, required: false
  private _objDeleted?: number; 
  public get objDeleted() {
    return this.getNumberAttribute('obj_deleted');
  }
  public set objDeleted(value: number) {
    this._objDeleted = value;
  }
  public resetObjDeleted() {
    this._objDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objDeletedInput() {
    return this._objDeleted;
  }

  // obj_reg_failed - computed: false, optional: true, required: false
  private _objRegFailed?: number; 
  public get objRegFailed() {
    return this.getNumberAttribute('obj_reg_failed');
  }
  public set objRegFailed(value: number) {
    this._objRegFailed = value;
  }
  public resetObjRegFailed() {
    this._objRegFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objRegFailedInput() {
    return this._objRegFailed;
  }

  // obj_reg_oom - computed: false, optional: true, required: false
  private _objRegOom?: number; 
  public get objRegOom() {
    return this.getNumberAttribute('obj_reg_oom');
  }
  public set objRegOom(value: number) {
    this._objRegOom = value;
  }
  public resetObjRegOom() {
    this._objRegOom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objRegOomInput() {
    return this._objRegOom;
  }

  // obj_reg_success - computed: false, optional: true, required: false
  private _objRegSuccess?: number; 
  public get objRegSuccess() {
    return this.getNumberAttribute('obj_reg_success');
  }
  public set objRegSuccess(value: number) {
    this._objRegSuccess = value;
  }
  public resetObjRegSuccess() {
    this._objRegSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objRegSuccessInput() {
    return this._objRegSuccess;
  }
}
export interface DataThunderVisibilityStatsTopn {
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#stats DataThunderVisibilityStats#stats}
  */
  readonly stats?: DataThunderVisibilityStatsTopnStats;
}

export function dataThunderVisibilityStatsTopnToTerraform(struct?: DataThunderVisibilityStatsTopnOutputReference | DataThunderVisibilityStatsTopn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stats: dataThunderVisibilityStatsTopnStatsToTerraform(struct!.stats),
  }
}


export function dataThunderVisibilityStatsTopnToHclTerraform(struct?: DataThunderVisibilityStatsTopnOutputReference | DataThunderVisibilityStatsTopn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stats: {
      value: dataThunderVisibilityStatsTopnStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityStatsTopnStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityStatsTopnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityStatsTopn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stats = this._stats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityStatsTopn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stats.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stats.internalValue = value.stats;
    }
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderVisibilityStatsTopnStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderVisibilityStatsTopnStats) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats thunder_visibility_stats}
*/
export class DataThunderVisibilityStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVisibilityStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVisibilityStats to import
  * @param importFromId The id of the existing DataThunderVisibilityStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVisibilityStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_stats thunder_visibility_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVisibilityStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVisibilityStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_stats',
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
    this._monEntityTelemetryData.internalValue = config.monEntityTelemetryData;
    this._packetCapture.internalValue = config.packetCapture;
    this._reporting.internalValue = config.reporting;
    this._stats.internalValue = config.stats;
    this._topn.internalValue = config.topn;
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

  // mon_entity_telemetry_data - computed: false, optional: true, required: false
  private _monEntityTelemetryData = new DataThunderVisibilityStatsMonEntityTelemetryDataOutputReference(this, "mon_entity_telemetry_data");
  public get monEntityTelemetryData() {
    return this._monEntityTelemetryData;
  }
  public putMonEntityTelemetryData(value: DataThunderVisibilityStatsMonEntityTelemetryData) {
    this._monEntityTelemetryData.internalValue = value;
  }
  public resetMonEntityTelemetryData() {
    this._monEntityTelemetryData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monEntityTelemetryDataInput() {
    return this._monEntityTelemetryData.internalValue;
  }

  // packet_capture - computed: false, optional: true, required: false
  private _packetCapture = new DataThunderVisibilityStatsPacketCaptureOutputReference(this, "packet_capture");
  public get packetCapture() {
    return this._packetCapture;
  }
  public putPacketCapture(value: DataThunderVisibilityStatsPacketCapture) {
    this._packetCapture.internalValue = value;
  }
  public resetPacketCapture() {
    this._packetCapture.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetCaptureInput() {
    return this._packetCapture.internalValue;
  }

  // reporting - computed: false, optional: true, required: false
  private _reporting = new DataThunderVisibilityStatsReportingOutputReference(this, "reporting");
  public get reporting() {
    return this._reporting;
  }
  public putReporting(value: DataThunderVisibilityStatsReporting) {
    this._reporting.internalValue = value;
  }
  public resetReporting() {
    this._reporting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportingInput() {
    return this._reporting.internalValue;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderVisibilityStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderVisibilityStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // topn - computed: false, optional: true, required: false
  private _topn = new DataThunderVisibilityStatsTopnOutputReference(this, "topn");
  public get topn() {
    return this._topn;
  }
  public putTopn(value: DataThunderVisibilityStatsTopn) {
    this._topn.internalValue = value;
  }
  public resetTopn() {
    this._topn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topnInput() {
    return this._topn.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      mon_entity_telemetry_data: dataThunderVisibilityStatsMonEntityTelemetryDataToTerraform(this._monEntityTelemetryData.internalValue),
      packet_capture: dataThunderVisibilityStatsPacketCaptureToTerraform(this._packetCapture.internalValue),
      reporting: dataThunderVisibilityStatsReportingToTerraform(this._reporting.internalValue),
      stats: dataThunderVisibilityStatsStatsToTerraform(this._stats.internalValue),
      topn: dataThunderVisibilityStatsTopnToTerraform(this._topn.internalValue),
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
      mon_entity_telemetry_data: {
        value: dataThunderVisibilityStatsMonEntityTelemetryDataToHclTerraform(this._monEntityTelemetryData.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityStatsMonEntityTelemetryDataList",
      },
      packet_capture: {
        value: dataThunderVisibilityStatsPacketCaptureToHclTerraform(this._packetCapture.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityStatsPacketCaptureList",
      },
      reporting: {
        value: dataThunderVisibilityStatsReportingToHclTerraform(this._reporting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityStatsReportingList",
      },
      stats: {
        value: dataThunderVisibilityStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityStatsStatsList",
      },
      topn: {
        value: dataThunderVisibilityStatsTopnToHclTerraform(this._topn.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityStatsTopnList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
