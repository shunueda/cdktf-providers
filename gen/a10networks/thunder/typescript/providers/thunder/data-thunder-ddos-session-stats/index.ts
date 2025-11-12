// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_session_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosSessionStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_session_stats#id DataThunderDdosSessionStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_session_stats#stats DataThunderDdosSessionStats#stats}
  */
  readonly stats?: DataThunderDdosSessionStatsStats;
}
export interface DataThunderDdosSessionStatsStats {
  /**
  * Conn Entry Mismatch Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_session_stats#conn_entry_mismatch DataThunderDdosSessionStats#conn_entry_mismatch}
  */
  readonly connEntryMismatch?: number;
  /**
  * TCP Conn Closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_session_stats#conn_tcp_close DataThunderDdosSessionStats#conn_tcp_close}
  */
  readonly connTcpClose?: number;
  /**
  * TCP Conn Closed With FIN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_session_stats#conn_tcp_close_w_fin DataThunderDdosSessionStats#conn_tcp_close_w_fin}
  */
  readonly connTcpCloseWFin?: number;
  /**
  * TCP Conn Closed With Half Open
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_session_stats#conn_tcp_close_w_half_open DataThunderDdosSessionStats#conn_tcp_close_w_half_open}
  */
  readonly connTcpCloseWHalfOpen?: number;
  /**
  * TCP Conn Closed With Idle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_session_stats#conn_tcp_close_w_idle DataThunderDdosSessionStats#conn_tcp_close_w_idle}
  */
  readonly connTcpCloseWIdle?: number;
  /**
  * TCP Conn Closed With RST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_session_stats#conn_tcp_close_w_rst DataThunderDdosSessionStats#conn_tcp_close_w_rst}
  */
  readonly connTcpCloseWRst?: number;
  /**
  * TCP Conn Created From ACK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_session_stats#conn_tcp_create_from_ack DataThunderDdosSessionStats#conn_tcp_create_from_ack}
  */
  readonly connTcpCreateFromAck?: number;
  /**
  * TCP Conn Created From SYN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_session_stats#conn_tcp_create_from_syn DataThunderDdosSessionStats#conn_tcp_create_from_syn}
  */
  readonly connTcpCreateFromSyn?: number;
  /**
  * TCP Conn Established
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_session_stats#conn_tcp_est DataThunderDdosSessionStats#conn_tcp_est}
  */
  readonly connTcpEst?: number;
  /**
  * TCP Conn Established With ACK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_session_stats#conn_tcp_est_w_ack DataThunderDdosSessionStats#conn_tcp_est_w_ack}
  */
  readonly connTcpEstWAck?: number;
  /**
  * TCP Conn Established With SYN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_session_stats#conn_tcp_est_w_syn DataThunderDdosSessionStats#conn_tcp_est_w_syn}
  */
  readonly connTcpEstWSyn?: number;
  /**
  * UDP Conn Closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_session_stats#conn_udp_close DataThunderDdosSessionStats#conn_udp_close}
  */
  readonly connUdpClose?: number;
  /**
  * UDP Conn Established
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_session_stats#conn_udp_est DataThunderDdosSessionStats#conn_udp_est}
  */
  readonly connUdpEst?: number;
  /**
  * Session Aged Out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_session_stats#sess_aged_out DataThunderDdosSessionStats#sess_aged_out}
  */
  readonly sessAgedOut?: number;
  /**
  * UDP Helper Auth Sessions Aged Out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_session_stats#sess_aged_udp_auth DataThunderDdosSessionStats#sess_aged_udp_auth}
  */
  readonly sessAgedUdpAuth?: number;
  /**
  * IPv4 Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_session_stats#sess_create_ip DataThunderDdosSessionStats#sess_create_ip}
  */
  readonly sessCreateIp?: number;
  /**
  * IPv6 Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_session_stats#sess_create_ip6 DataThunderDdosSessionStats#sess_create_ip6}
  */
  readonly sessCreateIp6?: number;
  /**
  * TCP Sessions Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_session_stats#sess_create_tcp DataThunderDdosSessionStats#sess_create_tcp}
  */
  readonly sessCreateTcp?: number;
  /**
  * UDP Sessions Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_session_stats#sess_create_udp DataThunderDdosSessionStats#sess_create_udp}
  */
  readonly sessCreateUdp?: number;
  /**
  * UDP Helper Auth Sessions Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_session_stats#sess_create_udp_auth DataThunderDdosSessionStats#sess_create_udp_auth}
  */
  readonly sessCreateUdpAuth?: number;
  /**
  * Out of Session Memory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_session_stats#sess_oom DataThunderDdosSessionStats#sess_oom}
  */
  readonly sessOom?: number;
  /**
  * Session Source NAT Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_session_stats#sess_snat_failed DataThunderDdosSessionStats#sess_snat_failed}
  */
  readonly sessSnatFailed?: number;
}

export function dataThunderDdosSessionStatsStatsToTerraform(struct?: DataThunderDdosSessionStatsStatsOutputReference | DataThunderDdosSessionStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conn_entry_mismatch: cdktf.numberToTerraform(struct!.connEntryMismatch),
    conn_tcp_close: cdktf.numberToTerraform(struct!.connTcpClose),
    conn_tcp_close_w_fin: cdktf.numberToTerraform(struct!.connTcpCloseWFin),
    conn_tcp_close_w_half_open: cdktf.numberToTerraform(struct!.connTcpCloseWHalfOpen),
    conn_tcp_close_w_idle: cdktf.numberToTerraform(struct!.connTcpCloseWIdle),
    conn_tcp_close_w_rst: cdktf.numberToTerraform(struct!.connTcpCloseWRst),
    conn_tcp_create_from_ack: cdktf.numberToTerraform(struct!.connTcpCreateFromAck),
    conn_tcp_create_from_syn: cdktf.numberToTerraform(struct!.connTcpCreateFromSyn),
    conn_tcp_est: cdktf.numberToTerraform(struct!.connTcpEst),
    conn_tcp_est_w_ack: cdktf.numberToTerraform(struct!.connTcpEstWAck),
    conn_tcp_est_w_syn: cdktf.numberToTerraform(struct!.connTcpEstWSyn),
    conn_udp_close: cdktf.numberToTerraform(struct!.connUdpClose),
    conn_udp_est: cdktf.numberToTerraform(struct!.connUdpEst),
    sess_aged_out: cdktf.numberToTerraform(struct!.sessAgedOut),
    sess_aged_udp_auth: cdktf.numberToTerraform(struct!.sessAgedUdpAuth),
    sess_create_ip: cdktf.numberToTerraform(struct!.sessCreateIp),
    sess_create_ip6: cdktf.numberToTerraform(struct!.sessCreateIp6),
    sess_create_tcp: cdktf.numberToTerraform(struct!.sessCreateTcp),
    sess_create_udp: cdktf.numberToTerraform(struct!.sessCreateUdp),
    sess_create_udp_auth: cdktf.numberToTerraform(struct!.sessCreateUdpAuth),
    sess_oom: cdktf.numberToTerraform(struct!.sessOom),
    sess_snat_failed: cdktf.numberToTerraform(struct!.sessSnatFailed),
  }
}


export function dataThunderDdosSessionStatsStatsToHclTerraform(struct?: DataThunderDdosSessionStatsStatsOutputReference | DataThunderDdosSessionStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conn_entry_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.connEntryMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_tcp_close: {
      value: cdktf.numberToHclTerraform(struct!.connTcpClose),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_tcp_close_w_fin: {
      value: cdktf.numberToHclTerraform(struct!.connTcpCloseWFin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_tcp_close_w_half_open: {
      value: cdktf.numberToHclTerraform(struct!.connTcpCloseWHalfOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_tcp_close_w_idle: {
      value: cdktf.numberToHclTerraform(struct!.connTcpCloseWIdle),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_tcp_close_w_rst: {
      value: cdktf.numberToHclTerraform(struct!.connTcpCloseWRst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_tcp_create_from_ack: {
      value: cdktf.numberToHclTerraform(struct!.connTcpCreateFromAck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_tcp_create_from_syn: {
      value: cdktf.numberToHclTerraform(struct!.connTcpCreateFromSyn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_tcp_est: {
      value: cdktf.numberToHclTerraform(struct!.connTcpEst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_tcp_est_w_ack: {
      value: cdktf.numberToHclTerraform(struct!.connTcpEstWAck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_tcp_est_w_syn: {
      value: cdktf.numberToHclTerraform(struct!.connTcpEstWSyn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_udp_close: {
      value: cdktf.numberToHclTerraform(struct!.connUdpClose),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_udp_est: {
      value: cdktf.numberToHclTerraform(struct!.connUdpEst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sess_aged_out: {
      value: cdktf.numberToHclTerraform(struct!.sessAgedOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sess_aged_udp_auth: {
      value: cdktf.numberToHclTerraform(struct!.sessAgedUdpAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sess_create_ip: {
      value: cdktf.numberToHclTerraform(struct!.sessCreateIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sess_create_ip6: {
      value: cdktf.numberToHclTerraform(struct!.sessCreateIp6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sess_create_tcp: {
      value: cdktf.numberToHclTerraform(struct!.sessCreateTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sess_create_udp: {
      value: cdktf.numberToHclTerraform(struct!.sessCreateUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sess_create_udp_auth: {
      value: cdktf.numberToHclTerraform(struct!.sessCreateUdpAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sess_oom: {
      value: cdktf.numberToHclTerraform(struct!.sessOom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sess_snat_failed: {
      value: cdktf.numberToHclTerraform(struct!.sessSnatFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosSessionStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosSessionStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connEntryMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.connEntryMismatch = this._connEntryMismatch;
    }
    if (this._connTcpClose !== undefined) {
      hasAnyValues = true;
      internalValueResult.connTcpClose = this._connTcpClose;
    }
    if (this._connTcpCloseWFin !== undefined) {
      hasAnyValues = true;
      internalValueResult.connTcpCloseWFin = this._connTcpCloseWFin;
    }
    if (this._connTcpCloseWHalfOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.connTcpCloseWHalfOpen = this._connTcpCloseWHalfOpen;
    }
    if (this._connTcpCloseWIdle !== undefined) {
      hasAnyValues = true;
      internalValueResult.connTcpCloseWIdle = this._connTcpCloseWIdle;
    }
    if (this._connTcpCloseWRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.connTcpCloseWRst = this._connTcpCloseWRst;
    }
    if (this._connTcpCreateFromAck !== undefined) {
      hasAnyValues = true;
      internalValueResult.connTcpCreateFromAck = this._connTcpCreateFromAck;
    }
    if (this._connTcpCreateFromSyn !== undefined) {
      hasAnyValues = true;
      internalValueResult.connTcpCreateFromSyn = this._connTcpCreateFromSyn;
    }
    if (this._connTcpEst !== undefined) {
      hasAnyValues = true;
      internalValueResult.connTcpEst = this._connTcpEst;
    }
    if (this._connTcpEstWAck !== undefined) {
      hasAnyValues = true;
      internalValueResult.connTcpEstWAck = this._connTcpEstWAck;
    }
    if (this._connTcpEstWSyn !== undefined) {
      hasAnyValues = true;
      internalValueResult.connTcpEstWSyn = this._connTcpEstWSyn;
    }
    if (this._connUdpClose !== undefined) {
      hasAnyValues = true;
      internalValueResult.connUdpClose = this._connUdpClose;
    }
    if (this._connUdpEst !== undefined) {
      hasAnyValues = true;
      internalValueResult.connUdpEst = this._connUdpEst;
    }
    if (this._sessAgedOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessAgedOut = this._sessAgedOut;
    }
    if (this._sessAgedUdpAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessAgedUdpAuth = this._sessAgedUdpAuth;
    }
    if (this._sessCreateIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessCreateIp = this._sessCreateIp;
    }
    if (this._sessCreateIp6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessCreateIp6 = this._sessCreateIp6;
    }
    if (this._sessCreateTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessCreateTcp = this._sessCreateTcp;
    }
    if (this._sessCreateUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessCreateUdp = this._sessCreateUdp;
    }
    if (this._sessCreateUdpAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessCreateUdpAuth = this._sessCreateUdpAuth;
    }
    if (this._sessOom !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessOom = this._sessOom;
    }
    if (this._sessSnatFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessSnatFailed = this._sessSnatFailed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosSessionStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connEntryMismatch = undefined;
      this._connTcpClose = undefined;
      this._connTcpCloseWFin = undefined;
      this._connTcpCloseWHalfOpen = undefined;
      this._connTcpCloseWIdle = undefined;
      this._connTcpCloseWRst = undefined;
      this._connTcpCreateFromAck = undefined;
      this._connTcpCreateFromSyn = undefined;
      this._connTcpEst = undefined;
      this._connTcpEstWAck = undefined;
      this._connTcpEstWSyn = undefined;
      this._connUdpClose = undefined;
      this._connUdpEst = undefined;
      this._sessAgedOut = undefined;
      this._sessAgedUdpAuth = undefined;
      this._sessCreateIp = undefined;
      this._sessCreateIp6 = undefined;
      this._sessCreateTcp = undefined;
      this._sessCreateUdp = undefined;
      this._sessCreateUdpAuth = undefined;
      this._sessOom = undefined;
      this._sessSnatFailed = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connEntryMismatch = value.connEntryMismatch;
      this._connTcpClose = value.connTcpClose;
      this._connTcpCloseWFin = value.connTcpCloseWFin;
      this._connTcpCloseWHalfOpen = value.connTcpCloseWHalfOpen;
      this._connTcpCloseWIdle = value.connTcpCloseWIdle;
      this._connTcpCloseWRst = value.connTcpCloseWRst;
      this._connTcpCreateFromAck = value.connTcpCreateFromAck;
      this._connTcpCreateFromSyn = value.connTcpCreateFromSyn;
      this._connTcpEst = value.connTcpEst;
      this._connTcpEstWAck = value.connTcpEstWAck;
      this._connTcpEstWSyn = value.connTcpEstWSyn;
      this._connUdpClose = value.connUdpClose;
      this._connUdpEst = value.connUdpEst;
      this._sessAgedOut = value.sessAgedOut;
      this._sessAgedUdpAuth = value.sessAgedUdpAuth;
      this._sessCreateIp = value.sessCreateIp;
      this._sessCreateIp6 = value.sessCreateIp6;
      this._sessCreateTcp = value.sessCreateTcp;
      this._sessCreateUdp = value.sessCreateUdp;
      this._sessCreateUdpAuth = value.sessCreateUdpAuth;
      this._sessOom = value.sessOom;
      this._sessSnatFailed = value.sessSnatFailed;
    }
  }

  // conn_entry_mismatch - computed: false, optional: true, required: false
  private _connEntryMismatch?: number; 
  public get connEntryMismatch() {
    return this.getNumberAttribute('conn_entry_mismatch');
  }
  public set connEntryMismatch(value: number) {
    this._connEntryMismatch = value;
  }
  public resetConnEntryMismatch() {
    this._connEntryMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connEntryMismatchInput() {
    return this._connEntryMismatch;
  }

  // conn_tcp_close - computed: false, optional: true, required: false
  private _connTcpClose?: number; 
  public get connTcpClose() {
    return this.getNumberAttribute('conn_tcp_close');
  }
  public set connTcpClose(value: number) {
    this._connTcpClose = value;
  }
  public resetConnTcpClose() {
    this._connTcpClose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connTcpCloseInput() {
    return this._connTcpClose;
  }

  // conn_tcp_close_w_fin - computed: false, optional: true, required: false
  private _connTcpCloseWFin?: number; 
  public get connTcpCloseWFin() {
    return this.getNumberAttribute('conn_tcp_close_w_fin');
  }
  public set connTcpCloseWFin(value: number) {
    this._connTcpCloseWFin = value;
  }
  public resetConnTcpCloseWFin() {
    this._connTcpCloseWFin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connTcpCloseWFinInput() {
    return this._connTcpCloseWFin;
  }

  // conn_tcp_close_w_half_open - computed: false, optional: true, required: false
  private _connTcpCloseWHalfOpen?: number; 
  public get connTcpCloseWHalfOpen() {
    return this.getNumberAttribute('conn_tcp_close_w_half_open');
  }
  public set connTcpCloseWHalfOpen(value: number) {
    this._connTcpCloseWHalfOpen = value;
  }
  public resetConnTcpCloseWHalfOpen() {
    this._connTcpCloseWHalfOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connTcpCloseWHalfOpenInput() {
    return this._connTcpCloseWHalfOpen;
  }

  // conn_tcp_close_w_idle - computed: false, optional: true, required: false
  private _connTcpCloseWIdle?: number; 
  public get connTcpCloseWIdle() {
    return this.getNumberAttribute('conn_tcp_close_w_idle');
  }
  public set connTcpCloseWIdle(value: number) {
    this._connTcpCloseWIdle = value;
  }
  public resetConnTcpCloseWIdle() {
    this._connTcpCloseWIdle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connTcpCloseWIdleInput() {
    return this._connTcpCloseWIdle;
  }

  // conn_tcp_close_w_rst - computed: false, optional: true, required: false
  private _connTcpCloseWRst?: number; 
  public get connTcpCloseWRst() {
    return this.getNumberAttribute('conn_tcp_close_w_rst');
  }
  public set connTcpCloseWRst(value: number) {
    this._connTcpCloseWRst = value;
  }
  public resetConnTcpCloseWRst() {
    this._connTcpCloseWRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connTcpCloseWRstInput() {
    return this._connTcpCloseWRst;
  }

  // conn_tcp_create_from_ack - computed: false, optional: true, required: false
  private _connTcpCreateFromAck?: number; 
  public get connTcpCreateFromAck() {
    return this.getNumberAttribute('conn_tcp_create_from_ack');
  }
  public set connTcpCreateFromAck(value: number) {
    this._connTcpCreateFromAck = value;
  }
  public resetConnTcpCreateFromAck() {
    this._connTcpCreateFromAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connTcpCreateFromAckInput() {
    return this._connTcpCreateFromAck;
  }

  // conn_tcp_create_from_syn - computed: false, optional: true, required: false
  private _connTcpCreateFromSyn?: number; 
  public get connTcpCreateFromSyn() {
    return this.getNumberAttribute('conn_tcp_create_from_syn');
  }
  public set connTcpCreateFromSyn(value: number) {
    this._connTcpCreateFromSyn = value;
  }
  public resetConnTcpCreateFromSyn() {
    this._connTcpCreateFromSyn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connTcpCreateFromSynInput() {
    return this._connTcpCreateFromSyn;
  }

  // conn_tcp_est - computed: false, optional: true, required: false
  private _connTcpEst?: number; 
  public get connTcpEst() {
    return this.getNumberAttribute('conn_tcp_est');
  }
  public set connTcpEst(value: number) {
    this._connTcpEst = value;
  }
  public resetConnTcpEst() {
    this._connTcpEst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connTcpEstInput() {
    return this._connTcpEst;
  }

  // conn_tcp_est_w_ack - computed: false, optional: true, required: false
  private _connTcpEstWAck?: number; 
  public get connTcpEstWAck() {
    return this.getNumberAttribute('conn_tcp_est_w_ack');
  }
  public set connTcpEstWAck(value: number) {
    this._connTcpEstWAck = value;
  }
  public resetConnTcpEstWAck() {
    this._connTcpEstWAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connTcpEstWAckInput() {
    return this._connTcpEstWAck;
  }

  // conn_tcp_est_w_syn - computed: false, optional: true, required: false
  private _connTcpEstWSyn?: number; 
  public get connTcpEstWSyn() {
    return this.getNumberAttribute('conn_tcp_est_w_syn');
  }
  public set connTcpEstWSyn(value: number) {
    this._connTcpEstWSyn = value;
  }
  public resetConnTcpEstWSyn() {
    this._connTcpEstWSyn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connTcpEstWSynInput() {
    return this._connTcpEstWSyn;
  }

  // conn_udp_close - computed: false, optional: true, required: false
  private _connUdpClose?: number; 
  public get connUdpClose() {
    return this.getNumberAttribute('conn_udp_close');
  }
  public set connUdpClose(value: number) {
    this._connUdpClose = value;
  }
  public resetConnUdpClose() {
    this._connUdpClose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connUdpCloseInput() {
    return this._connUdpClose;
  }

  // conn_udp_est - computed: false, optional: true, required: false
  private _connUdpEst?: number; 
  public get connUdpEst() {
    return this.getNumberAttribute('conn_udp_est');
  }
  public set connUdpEst(value: number) {
    this._connUdpEst = value;
  }
  public resetConnUdpEst() {
    this._connUdpEst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connUdpEstInput() {
    return this._connUdpEst;
  }

  // sess_aged_out - computed: false, optional: true, required: false
  private _sessAgedOut?: number; 
  public get sessAgedOut() {
    return this.getNumberAttribute('sess_aged_out');
  }
  public set sessAgedOut(value: number) {
    this._sessAgedOut = value;
  }
  public resetSessAgedOut() {
    this._sessAgedOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessAgedOutInput() {
    return this._sessAgedOut;
  }

  // sess_aged_udp_auth - computed: false, optional: true, required: false
  private _sessAgedUdpAuth?: number; 
  public get sessAgedUdpAuth() {
    return this.getNumberAttribute('sess_aged_udp_auth');
  }
  public set sessAgedUdpAuth(value: number) {
    this._sessAgedUdpAuth = value;
  }
  public resetSessAgedUdpAuth() {
    this._sessAgedUdpAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessAgedUdpAuthInput() {
    return this._sessAgedUdpAuth;
  }

  // sess_create_ip - computed: false, optional: true, required: false
  private _sessCreateIp?: number; 
  public get sessCreateIp() {
    return this.getNumberAttribute('sess_create_ip');
  }
  public set sessCreateIp(value: number) {
    this._sessCreateIp = value;
  }
  public resetSessCreateIp() {
    this._sessCreateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessCreateIpInput() {
    return this._sessCreateIp;
  }

  // sess_create_ip6 - computed: false, optional: true, required: false
  private _sessCreateIp6?: number; 
  public get sessCreateIp6() {
    return this.getNumberAttribute('sess_create_ip6');
  }
  public set sessCreateIp6(value: number) {
    this._sessCreateIp6 = value;
  }
  public resetSessCreateIp6() {
    this._sessCreateIp6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessCreateIp6Input() {
    return this._sessCreateIp6;
  }

  // sess_create_tcp - computed: false, optional: true, required: false
  private _sessCreateTcp?: number; 
  public get sessCreateTcp() {
    return this.getNumberAttribute('sess_create_tcp');
  }
  public set sessCreateTcp(value: number) {
    this._sessCreateTcp = value;
  }
  public resetSessCreateTcp() {
    this._sessCreateTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessCreateTcpInput() {
    return this._sessCreateTcp;
  }

  // sess_create_udp - computed: false, optional: true, required: false
  private _sessCreateUdp?: number; 
  public get sessCreateUdp() {
    return this.getNumberAttribute('sess_create_udp');
  }
  public set sessCreateUdp(value: number) {
    this._sessCreateUdp = value;
  }
  public resetSessCreateUdp() {
    this._sessCreateUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessCreateUdpInput() {
    return this._sessCreateUdp;
  }

  // sess_create_udp_auth - computed: false, optional: true, required: false
  private _sessCreateUdpAuth?: number; 
  public get sessCreateUdpAuth() {
    return this.getNumberAttribute('sess_create_udp_auth');
  }
  public set sessCreateUdpAuth(value: number) {
    this._sessCreateUdpAuth = value;
  }
  public resetSessCreateUdpAuth() {
    this._sessCreateUdpAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessCreateUdpAuthInput() {
    return this._sessCreateUdpAuth;
  }

  // sess_oom - computed: false, optional: true, required: false
  private _sessOom?: number; 
  public get sessOom() {
    return this.getNumberAttribute('sess_oom');
  }
  public set sessOom(value: number) {
    this._sessOom = value;
  }
  public resetSessOom() {
    this._sessOom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessOomInput() {
    return this._sessOom;
  }

  // sess_snat_failed - computed: false, optional: true, required: false
  private _sessSnatFailed?: number; 
  public get sessSnatFailed() {
    return this.getNumberAttribute('sess_snat_failed');
  }
  public set sessSnatFailed(value: number) {
    this._sessSnatFailed = value;
  }
  public resetSessSnatFailed() {
    this._sessSnatFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessSnatFailedInput() {
    return this._sessSnatFailed;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_session_stats thunder_ddos_session_stats}
*/
export class DataThunderDdosSessionStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_session_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosSessionStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosSessionStats to import
  * @param importFromId The id of the existing DataThunderDdosSessionStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_session_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosSessionStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_session_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_session_stats thunder_ddos_session_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosSessionStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosSessionStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_session_stats',
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
  private _stats = new DataThunderDdosSessionStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderDdosSessionStatsStats) {
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
      stats: dataThunderDdosSessionStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderDdosSessionStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosSessionStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
