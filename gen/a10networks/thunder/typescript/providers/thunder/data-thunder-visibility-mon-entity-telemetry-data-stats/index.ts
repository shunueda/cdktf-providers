// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_mon_entity_telemetry_data_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVisibilityMonEntityTelemetryDataStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_mon_entity_telemetry_data_stats#id DataThunderVisibilityMonEntityTelemetryDataStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_mon_entity_telemetry_data_stats#stats DataThunderVisibilityMonEntityTelemetryDataStats#stats}
  */
  readonly stats?: DataThunderVisibilityMonEntityTelemetryDataStatsStats;
}
export interface DataThunderVisibilityMonEntityTelemetryDataStatsStats {
  /**
  * Monitored Entity telemetry Metric Average data CPU utilization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_mon_entity_telemetry_data_stats#avg_data_cpu_util DataThunderVisibilityMonEntityTelemetryDataStats#avg_data_cpu_util}
  */
  readonly avgDataCpuUtil?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_mon_entity_telemetry_data_stats#concurrent_conn DataThunderVisibilityMonEntityTelemetryDataStats#concurrent_conn}
  */
  readonly concurrentConn?: number;
  /**
  * Monitored Entity telemetry Metric Drop pkts per pkts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_mon_entity_telemetry_data_stats#drop_pkts_per_pkts DataThunderVisibilityMonEntityTelemetryDataStats#drop_pkts_per_pkts}
  */
  readonly dropPktsPerPkts?: number;
  /**
  * Monitored Entity telemetry Metric ERRORS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_mon_entity_telemetry_data_stats#errors DataThunderVisibilityMonEntityTelemetryDataStats#errors}
  */
  readonly errors?: number;
  /**
  * Monitored Entity telemetry Metric IN bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_mon_entity_telemetry_data_stats#in_bytes DataThunderVisibilityMonEntityTelemetryDataStats#in_bytes}
  */
  readonly inBytes?: number;
  /**
  * Monitored Entity telemetry Metric IN bytes per OUT bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_mon_entity_telemetry_data_stats#in_bytes_per_out_bytes DataThunderVisibilityMonEntityTelemetryDataStats#in_bytes_per_out_bytes}
  */
  readonly inBytesPerOutBytes?: number;
  /**
  * Monitored Entity telemetry Metric IN frag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_mon_entity_telemetry_data_stats#in_frag DataThunderVisibilityMonEntityTelemetryDataStats#in_frag}
  */
  readonly inFrag?: number;
  /**
  * Monitored Entity telemetry Metric IN pkts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_mon_entity_telemetry_data_stats#in_pkts DataThunderVisibilityMonEntityTelemetryDataStats#in_pkts}
  */
  readonly inPkts?: number;
  /**
  * Monitored Entity telemetry Metric IN SMALL pkt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_mon_entity_telemetry_data_stats#in_small_pkt DataThunderVisibilityMonEntityTelemetryDataStats#in_small_pkt}
  */
  readonly inSmallPkt?: number;
  /**
  * Monitored Entity telemetry Metric New Sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_mon_entity_telemetry_data_stats#new_conn DataThunderVisibilityMonEntityTelemetryDataStats#new_conn}
  */
  readonly newConn?: number;
  /**
  * Monitored Entity telemetry Metric OUT bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_mon_entity_telemetry_data_stats#out_bytes DataThunderVisibilityMonEntityTelemetryDataStats#out_bytes}
  */
  readonly outBytes?: number;
  /**
  * Monitored Entity telemetry Metric OUT frag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_mon_entity_telemetry_data_stats#out_frag DataThunderVisibilityMonEntityTelemetryDataStats#out_frag}
  */
  readonly outFrag?: number;
  /**
  * Monitored Entity telemetry Metric OUT pkts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_mon_entity_telemetry_data_stats#out_pkts DataThunderVisibilityMonEntityTelemetryDataStats#out_pkts}
  */
  readonly outPkts?: number;
  /**
  * Monitored Entity telemetry Metric OUT SMALL pkt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_mon_entity_telemetry_data_stats#out_small_pkt DataThunderVisibilityMonEntityTelemetryDataStats#out_small_pkt}
  */
  readonly outSmallPkt?: number;
  /**
  * Monitored Entity telemetry Metric Outside interface utilization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_mon_entity_telemetry_data_stats#outside_intf_util DataThunderVisibilityMonEntityTelemetryDataStats#outside_intf_util}
  */
  readonly outsideIntfUtil?: number;
  /**
  * Monitored Entity telemetry Metric TCP connection miss
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_mon_entity_telemetry_data_stats#tcp_conn_miss DataThunderVisibilityMonEntityTelemetryDataStats#tcp_conn_miss}
  */
  readonly tcpConnMiss?: number;
  /**
  * Monitored Entity telemetry Metric TCP FWD SYN per FIN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_mon_entity_telemetry_data_stats#tcp_fwd_syn_per_fin DataThunderVisibilityMonEntityTelemetryDataStats#tcp_fwd_syn_per_fin}
  */
  readonly tcpFwdSynPerFin?: number;
  /**
  * Monitored Entity telemetry Metric TCP_IN EMPTY ack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_mon_entity_telemetry_data_stats#tcp_in_empty_ack DataThunderVisibilityMonEntityTelemetryDataStats#tcp_in_empty_ack}
  */
  readonly tcpInEmptyAck?: number;
  /**
  * Monitored Entity telemetry Metric TCP IN fin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_mon_entity_telemetry_data_stats#tcp_in_fin DataThunderVisibilityMonEntityTelemetryDataStats#tcp_in_fin}
  */
  readonly tcpInFin?: number;
  /**
  * Monitored Entity telemetry Metric TCP IN payload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_mon_entity_telemetry_data_stats#tcp_in_payload DataThunderVisibilityMonEntityTelemetryDataStats#tcp_in_payload}
  */
  readonly tcpInPayload?: number;
  /**
  * Monitored Entity telemetry Metric TCP IN rexmit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_mon_entity_telemetry_data_stats#tcp_in_rexmit DataThunderVisibilityMonEntityTelemetryDataStats#tcp_in_rexmit}
  */
  readonly tcpInRexmit?: number;
  /**
  * Monitored Entity telemetry Metric TCP IN rst
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_mon_entity_telemetry_data_stats#tcp_in_rst DataThunderVisibilityMonEntityTelemetryDataStats#tcp_in_rst}
  */
  readonly tcpInRst?: number;
  /**
  * Monitored Entity telemetry Metric TCP IN syn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_mon_entity_telemetry_data_stats#tcp_in_syn DataThunderVisibilityMonEntityTelemetryDataStats#tcp_in_syn}
  */
  readonly tcpInSyn?: number;
  /**
  * Monitored Entity telemetry Metric TCP IN ZERO wnd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_mon_entity_telemetry_data_stats#tcp_in_zero_wnd DataThunderVisibilityMonEntityTelemetryDataStats#tcp_in_zero_wnd}
  */
  readonly tcpInZeroWnd?: number;
  /**
  * Monitored Entity telemetry Metric TCP OUT EMPTY ack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_mon_entity_telemetry_data_stats#tcp_out_empty_ack DataThunderVisibilityMonEntityTelemetryDataStats#tcp_out_empty_ack}
  */
  readonly tcpOutEmptyAck?: number;
  /**
  * Monitored Entity telemetry Metric TCP OUT fin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_mon_entity_telemetry_data_stats#tcp_out_fin DataThunderVisibilityMonEntityTelemetryDataStats#tcp_out_fin}
  */
  readonly tcpOutFin?: number;
  /**
  * Monitored Entity telemetry Metric TCP OUT payload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_mon_entity_telemetry_data_stats#tcp_out_payload DataThunderVisibilityMonEntityTelemetryDataStats#tcp_out_payload}
  */
  readonly tcpOutPayload?: number;
  /**
  * Monitored Entity telemetry Metric TCP OUT rexmit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_mon_entity_telemetry_data_stats#tcp_out_rexmit DataThunderVisibilityMonEntityTelemetryDataStats#tcp_out_rexmit}
  */
  readonly tcpOutRexmit?: number;
  /**
  * Monitored Entity telemetry Metric TCP OUT rst
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_mon_entity_telemetry_data_stats#tcp_out_rst DataThunderVisibilityMonEntityTelemetryDataStats#tcp_out_rst}
  */
  readonly tcpOutRst?: number;
  /**
  * Monitored Entity telemetry Metric TCP OUT syn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_mon_entity_telemetry_data_stats#tcp_out_syn DataThunderVisibilityMonEntityTelemetryDataStats#tcp_out_syn}
  */
  readonly tcpOutSyn?: number;
  /**
  * Monitored Entity telemetry Metric TCP OUT ZERO wnd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_mon_entity_telemetry_data_stats#tcp_out_zero_wnd DataThunderVisibilityMonEntityTelemetryDataStats#tcp_out_zero_wnd}
  */
  readonly tcpOutZeroWnd?: number;
}

export function dataThunderVisibilityMonEntityTelemetryDataStatsStatsToTerraform(struct?: DataThunderVisibilityMonEntityTelemetryDataStatsStatsOutputReference | DataThunderVisibilityMonEntityTelemetryDataStatsStats): any {
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


export function dataThunderVisibilityMonEntityTelemetryDataStatsStatsToHclTerraform(struct?: DataThunderVisibilityMonEntityTelemetryDataStatsStatsOutputReference | DataThunderVisibilityMonEntityTelemetryDataStatsStats): any {
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

export class DataThunderVisibilityMonEntityTelemetryDataStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityMonEntityTelemetryDataStatsStats | undefined {
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

  public set internalValue(value: DataThunderVisibilityMonEntityTelemetryDataStatsStats | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_mon_entity_telemetry_data_stats thunder_visibility_mon_entity_telemetry_data_stats}
*/
export class DataThunderVisibilityMonEntityTelemetryDataStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_mon_entity_telemetry_data_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVisibilityMonEntityTelemetryDataStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVisibilityMonEntityTelemetryDataStats to import
  * @param importFromId The id of the existing DataThunderVisibilityMonEntityTelemetryDataStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_mon_entity_telemetry_data_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVisibilityMonEntityTelemetryDataStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_mon_entity_telemetry_data_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_mon_entity_telemetry_data_stats thunder_visibility_mon_entity_telemetry_data_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVisibilityMonEntityTelemetryDataStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVisibilityMonEntityTelemetryDataStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_mon_entity_telemetry_data_stats',
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderVisibilityMonEntityTelemetryDataStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderVisibilityMonEntityTelemetryDataStatsStats) {
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
      stats: dataThunderVisibilityMonEntityTelemetryDataStatsStatsToTerraform(this._stats.internalValue),
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
      stats: {
        value: dataThunderVisibilityMonEntityTelemetryDataStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityMonEntityTelemetryDataStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
