// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_health_stat_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbHealthStatStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_health_stat_stats#id DataThunderSlbHealthStatStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_health_stat_stats#stats DataThunderSlbHealthStatStats#stats}
  */
  readonly stats?: DataThunderSlbHealthStatStatsStats;
}
export interface DataThunderSlbHealthStatStatsStats {
  /**
  * Average number of jiffies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_health_stat_stats#avg_jiffie DataThunderSlbHealthStatStats#avg_jiffie}
  */
  readonly avgJiffie?: number;
  /**
  * Number of closed sockets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_health_stat_stats#close_socket DataThunderSlbHealthStatStats#close_socket}
  */
  readonly closeSocket?: number;
  /**
  * Config health rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_health_stat_stats#config_health_rate DataThunderSlbHealthStatStats#config_health_rate}
  */
  readonly configHealthRate?: number;
  /**
  * Number of connection immediete success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_health_stat_stats#conn_imdt_succ DataThunderSlbHealthStatStats#conn_imdt_succ}
  */
  readonly connImdtSucc?: number;
  /**
  * Number of failed connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_health_stat_stats#connect_failed DataThunderSlbHealthStatStats#connect_failed}
  */
  readonly connectFailed?: number;
  /**
  * Current health rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_health_stat_stats#curr_health_rate DataThunderSlbHealthStatStats#curr_health_rate}
  */
  readonly currHealthRate?: number;
  /**
  * External health rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_health_stat_stats#ext_health_rate DataThunderSlbHealthStatStats#ext_health_rate}
  */
  readonly extHealthRate?: number;
  /**
  * External health rate value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_health_stat_stats#ext_health_rate_val DataThunderSlbHealthStatStats#ext_health_rate_val}
  */
  readonly extHealthRateVal?: number;
  /**
  * Maximum number of jiffies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_health_stat_stats#max_jiffie DataThunderSlbHealthStatStats#max_jiffie}
  */
  readonly maxJiffie?: number;
  /**
  * Minimum number of jiffies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_health_stat_stats#min_jiffie DataThunderSlbHealthStatStats#min_jiffie}
  */
  readonly minJiffie?: number;
  /**
  * Number of burst
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_health_stat_stats#num_burst DataThunderSlbHealthStatStats#num_burst}
  */
  readonly numBurst?: number;
  /**
  * Number of open sockets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_health_stat_stats#open_socket DataThunderSlbHealthStatStats#open_socket}
  */
  readonly openSocket?: number;
  /**
  * Number of failed open sockets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_health_stat_stats#open_socket_failed DataThunderSlbHealthStatStats#open_socket_failed}
  */
  readonly openSocketFailed?: number;
  /**
  * Number of received packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_health_stat_stats#recv_packet DataThunderSlbHealthStatStats#recv_packet}
  */
  readonly recvPacket?: number;
  /**
  * Number of failed packet receives
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_health_stat_stats#recv_packet_failed DataThunderSlbHealthStatStats#recv_packet_failed}
  */
  readonly recvPacketFailed?: number;
  /**
  * Retry times
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_health_stat_stats#retry_times DataThunderSlbHealthStatStats#retry_times}
  */
  readonly retryTimes?: number;
  /**
  * Running time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_health_stat_stats#running_time DataThunderSlbHealthStatStats#running_time}
  */
  readonly runningTime?: number;
  /**
  * Number of packets sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_health_stat_stats#send_packet DataThunderSlbHealthStatStats#send_packet}
  */
  readonly sendPacket?: number;
  /**
  * Number of packet send failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_health_stat_stats#send_packet_failed DataThunderSlbHealthStatStats#send_packet_failed}
  */
  readonly sendPacketFailed?: number;
  /**
  * Number of sockets closed before l7
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_health_stat_stats#sock_close_before_17 DataThunderSlbHealthStatStats#sock_close_before_17}
  */
  readonly sockCloseBefore17?: number;
  /**
  * Number of sockets closed without notify
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_health_stat_stats#sock_close_without_notify DataThunderSlbHealthStatStats#sock_close_without_notify}
  */
  readonly sockCloseWithoutNotify?: number;
  /**
  * Number of ssl post handshake packets before client sends request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_health_stat_stats#ssl_post_handshake_packet DataThunderSlbHealthStatStats#ssl_post_handshake_packet}
  */
  readonly sslPostHandshakePacket?: number;
  /**
  * Number of status downs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_health_stat_stats#status_down DataThunderSlbHealthStatStats#status_down}
  */
  readonly statusDown?: number;
  /**
  * Number of other status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_health_stat_stats#status_other DataThunderSlbHealthStatStats#status_other}
  */
  readonly statusOther?: number;
  /**
  * Number of status unknowns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_health_stat_stats#status_unkn DataThunderSlbHealthStatStats#status_unkn}
  */
  readonly statusUnkn?: number;
  /**
  * Number of status ups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_health_stat_stats#status_up DataThunderSlbHealthStatStats#status_up}
  */
  readonly statusUp?: number;
  /**
  * Timouet value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_health_stat_stats#timeout DataThunderSlbHealthStatStats#timeout}
  */
  readonly timeout?: number;
  /**
  * Number of pin timeouts while socket has packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_health_stat_stats#timeout_with_packet DataThunderSlbHealthStatStats#timeout_with_packet}
  */
  readonly timeoutWithPacket?: number;
  /**
  * Total number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_health_stat_stats#total_number DataThunderSlbHealthStatStats#total_number}
  */
  readonly totalNumber?: number;
  /**
  * Number of unexpected errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_health_stat_stats#unexpected_error DataThunderSlbHealthStatStats#unexpected_error}
  */
  readonly unexpectedError?: number;
}

export function dataThunderSlbHealthStatStatsStatsToTerraform(struct?: DataThunderSlbHealthStatStatsStatsOutputReference | DataThunderSlbHealthStatStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    avg_jiffie: cdktf.numberToTerraform(struct!.avgJiffie),
    close_socket: cdktf.numberToTerraform(struct!.closeSocket),
    config_health_rate: cdktf.numberToTerraform(struct!.configHealthRate),
    conn_imdt_succ: cdktf.numberToTerraform(struct!.connImdtSucc),
    connect_failed: cdktf.numberToTerraform(struct!.connectFailed),
    curr_health_rate: cdktf.numberToTerraform(struct!.currHealthRate),
    ext_health_rate: cdktf.numberToTerraform(struct!.extHealthRate),
    ext_health_rate_val: cdktf.numberToTerraform(struct!.extHealthRateVal),
    max_jiffie: cdktf.numberToTerraform(struct!.maxJiffie),
    min_jiffie: cdktf.numberToTerraform(struct!.minJiffie),
    num_burst: cdktf.numberToTerraform(struct!.numBurst),
    open_socket: cdktf.numberToTerraform(struct!.openSocket),
    open_socket_failed: cdktf.numberToTerraform(struct!.openSocketFailed),
    recv_packet: cdktf.numberToTerraform(struct!.recvPacket),
    recv_packet_failed: cdktf.numberToTerraform(struct!.recvPacketFailed),
    retry_times: cdktf.numberToTerraform(struct!.retryTimes),
    running_time: cdktf.numberToTerraform(struct!.runningTime),
    send_packet: cdktf.numberToTerraform(struct!.sendPacket),
    send_packet_failed: cdktf.numberToTerraform(struct!.sendPacketFailed),
    sock_close_before_17: cdktf.numberToTerraform(struct!.sockCloseBefore17),
    sock_close_without_notify: cdktf.numberToTerraform(struct!.sockCloseWithoutNotify),
    ssl_post_handshake_packet: cdktf.numberToTerraform(struct!.sslPostHandshakePacket),
    status_down: cdktf.numberToTerraform(struct!.statusDown),
    status_other: cdktf.numberToTerraform(struct!.statusOther),
    status_unkn: cdktf.numberToTerraform(struct!.statusUnkn),
    status_up: cdktf.numberToTerraform(struct!.statusUp),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    timeout_with_packet: cdktf.numberToTerraform(struct!.timeoutWithPacket),
    total_number: cdktf.numberToTerraform(struct!.totalNumber),
    unexpected_error: cdktf.numberToTerraform(struct!.unexpectedError),
  }
}


export function dataThunderSlbHealthStatStatsStatsToHclTerraform(struct?: DataThunderSlbHealthStatStatsStatsOutputReference | DataThunderSlbHealthStatStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    avg_jiffie: {
      value: cdktf.numberToHclTerraform(struct!.avgJiffie),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    close_socket: {
      value: cdktf.numberToHclTerraform(struct!.closeSocket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    config_health_rate: {
      value: cdktf.numberToHclTerraform(struct!.configHealthRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_imdt_succ: {
      value: cdktf.numberToHclTerraform(struct!.connImdtSucc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connect_failed: {
      value: cdktf.numberToHclTerraform(struct!.connectFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr_health_rate: {
      value: cdktf.numberToHclTerraform(struct!.currHealthRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ext_health_rate: {
      value: cdktf.numberToHclTerraform(struct!.extHealthRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ext_health_rate_val: {
      value: cdktf.numberToHclTerraform(struct!.extHealthRateVal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_jiffie: {
      value: cdktf.numberToHclTerraform(struct!.maxJiffie),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_jiffie: {
      value: cdktf.numberToHclTerraform(struct!.minJiffie),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_burst: {
      value: cdktf.numberToHclTerraform(struct!.numBurst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    open_socket: {
      value: cdktf.numberToHclTerraform(struct!.openSocket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    open_socket_failed: {
      value: cdktf.numberToHclTerraform(struct!.openSocketFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_packet: {
      value: cdktf.numberToHclTerraform(struct!.recvPacket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_packet_failed: {
      value: cdktf.numberToHclTerraform(struct!.recvPacketFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_times: {
      value: cdktf.numberToHclTerraform(struct!.retryTimes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    running_time: {
      value: cdktf.numberToHclTerraform(struct!.runningTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_packet: {
      value: cdktf.numberToHclTerraform(struct!.sendPacket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_packet_failed: {
      value: cdktf.numberToHclTerraform(struct!.sendPacketFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sock_close_before_17: {
      value: cdktf.numberToHclTerraform(struct!.sockCloseBefore17),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sock_close_without_notify: {
      value: cdktf.numberToHclTerraform(struct!.sockCloseWithoutNotify),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_post_handshake_packet: {
      value: cdktf.numberToHclTerraform(struct!.sslPostHandshakePacket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_down: {
      value: cdktf.numberToHclTerraform(struct!.statusDown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_other: {
      value: cdktf.numberToHclTerraform(struct!.statusOther),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_unkn: {
      value: cdktf.numberToHclTerraform(struct!.statusUnkn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_up: {
      value: cdktf.numberToHclTerraform(struct!.statusUp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_with_packet: {
      value: cdktf.numberToHclTerraform(struct!.timeoutWithPacket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_number: {
      value: cdktf.numberToHclTerraform(struct!.totalNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unexpected_error: {
      value: cdktf.numberToHclTerraform(struct!.unexpectedError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbHealthStatStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbHealthStatStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._avgJiffie !== undefined) {
      hasAnyValues = true;
      internalValueResult.avgJiffie = this._avgJiffie;
    }
    if (this._closeSocket !== undefined) {
      hasAnyValues = true;
      internalValueResult.closeSocket = this._closeSocket;
    }
    if (this._configHealthRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.configHealthRate = this._configHealthRate;
    }
    if (this._connImdtSucc !== undefined) {
      hasAnyValues = true;
      internalValueResult.connImdtSucc = this._connImdtSucc;
    }
    if (this._connectFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectFailed = this._connectFailed;
    }
    if (this._currHealthRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currHealthRate = this._currHealthRate;
    }
    if (this._extHealthRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.extHealthRate = this._extHealthRate;
    }
    if (this._extHealthRateVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.extHealthRateVal = this._extHealthRateVal;
    }
    if (this._maxJiffie !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxJiffie = this._maxJiffie;
    }
    if (this._minJiffie !== undefined) {
      hasAnyValues = true;
      internalValueResult.minJiffie = this._minJiffie;
    }
    if (this._numBurst !== undefined) {
      hasAnyValues = true;
      internalValueResult.numBurst = this._numBurst;
    }
    if (this._openSocket !== undefined) {
      hasAnyValues = true;
      internalValueResult.openSocket = this._openSocket;
    }
    if (this._openSocketFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.openSocketFailed = this._openSocketFailed;
    }
    if (this._recvPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvPacket = this._recvPacket;
    }
    if (this._recvPacketFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvPacketFailed = this._recvPacketFailed;
    }
    if (this._retryTimes !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryTimes = this._retryTimes;
    }
    if (this._runningTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.runningTime = this._runningTime;
    }
    if (this._sendPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendPacket = this._sendPacket;
    }
    if (this._sendPacketFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendPacketFailed = this._sendPacketFailed;
    }
    if (this._sockCloseBefore17 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sockCloseBefore17 = this._sockCloseBefore17;
    }
    if (this._sockCloseWithoutNotify !== undefined) {
      hasAnyValues = true;
      internalValueResult.sockCloseWithoutNotify = this._sockCloseWithoutNotify;
    }
    if (this._sslPostHandshakePacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslPostHandshakePacket = this._sslPostHandshakePacket;
    }
    if (this._statusDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusDown = this._statusDown;
    }
    if (this._statusOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusOther = this._statusOther;
    }
    if (this._statusUnkn !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusUnkn = this._statusUnkn;
    }
    if (this._statusUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusUp = this._statusUp;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._timeoutWithPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutWithPacket = this._timeoutWithPacket;
    }
    if (this._totalNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalNumber = this._totalNumber;
    }
    if (this._unexpectedError !== undefined) {
      hasAnyValues = true;
      internalValueResult.unexpectedError = this._unexpectedError;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbHealthStatStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._avgJiffie = undefined;
      this._closeSocket = undefined;
      this._configHealthRate = undefined;
      this._connImdtSucc = undefined;
      this._connectFailed = undefined;
      this._currHealthRate = undefined;
      this._extHealthRate = undefined;
      this._extHealthRateVal = undefined;
      this._maxJiffie = undefined;
      this._minJiffie = undefined;
      this._numBurst = undefined;
      this._openSocket = undefined;
      this._openSocketFailed = undefined;
      this._recvPacket = undefined;
      this._recvPacketFailed = undefined;
      this._retryTimes = undefined;
      this._runningTime = undefined;
      this._sendPacket = undefined;
      this._sendPacketFailed = undefined;
      this._sockCloseBefore17 = undefined;
      this._sockCloseWithoutNotify = undefined;
      this._sslPostHandshakePacket = undefined;
      this._statusDown = undefined;
      this._statusOther = undefined;
      this._statusUnkn = undefined;
      this._statusUp = undefined;
      this._timeout = undefined;
      this._timeoutWithPacket = undefined;
      this._totalNumber = undefined;
      this._unexpectedError = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._avgJiffie = value.avgJiffie;
      this._closeSocket = value.closeSocket;
      this._configHealthRate = value.configHealthRate;
      this._connImdtSucc = value.connImdtSucc;
      this._connectFailed = value.connectFailed;
      this._currHealthRate = value.currHealthRate;
      this._extHealthRate = value.extHealthRate;
      this._extHealthRateVal = value.extHealthRateVal;
      this._maxJiffie = value.maxJiffie;
      this._minJiffie = value.minJiffie;
      this._numBurst = value.numBurst;
      this._openSocket = value.openSocket;
      this._openSocketFailed = value.openSocketFailed;
      this._recvPacket = value.recvPacket;
      this._recvPacketFailed = value.recvPacketFailed;
      this._retryTimes = value.retryTimes;
      this._runningTime = value.runningTime;
      this._sendPacket = value.sendPacket;
      this._sendPacketFailed = value.sendPacketFailed;
      this._sockCloseBefore17 = value.sockCloseBefore17;
      this._sockCloseWithoutNotify = value.sockCloseWithoutNotify;
      this._sslPostHandshakePacket = value.sslPostHandshakePacket;
      this._statusDown = value.statusDown;
      this._statusOther = value.statusOther;
      this._statusUnkn = value.statusUnkn;
      this._statusUp = value.statusUp;
      this._timeout = value.timeout;
      this._timeoutWithPacket = value.timeoutWithPacket;
      this._totalNumber = value.totalNumber;
      this._unexpectedError = value.unexpectedError;
    }
  }

  // avg_jiffie - computed: false, optional: true, required: false
  private _avgJiffie?: number; 
  public get avgJiffie() {
    return this.getNumberAttribute('avg_jiffie');
  }
  public set avgJiffie(value: number) {
    this._avgJiffie = value;
  }
  public resetAvgJiffie() {
    this._avgJiffie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avgJiffieInput() {
    return this._avgJiffie;
  }

  // close_socket - computed: false, optional: true, required: false
  private _closeSocket?: number; 
  public get closeSocket() {
    return this.getNumberAttribute('close_socket');
  }
  public set closeSocket(value: number) {
    this._closeSocket = value;
  }
  public resetCloseSocket() {
    this._closeSocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closeSocketInput() {
    return this._closeSocket;
  }

  // config_health_rate - computed: false, optional: true, required: false
  private _configHealthRate?: number; 
  public get configHealthRate() {
    return this.getNumberAttribute('config_health_rate');
  }
  public set configHealthRate(value: number) {
    this._configHealthRate = value;
  }
  public resetConfigHealthRate() {
    this._configHealthRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configHealthRateInput() {
    return this._configHealthRate;
  }

  // conn_imdt_succ - computed: false, optional: true, required: false
  private _connImdtSucc?: number; 
  public get connImdtSucc() {
    return this.getNumberAttribute('conn_imdt_succ');
  }
  public set connImdtSucc(value: number) {
    this._connImdtSucc = value;
  }
  public resetConnImdtSucc() {
    this._connImdtSucc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connImdtSuccInput() {
    return this._connImdtSucc;
  }

  // connect_failed - computed: false, optional: true, required: false
  private _connectFailed?: number; 
  public get connectFailed() {
    return this.getNumberAttribute('connect_failed');
  }
  public set connectFailed(value: number) {
    this._connectFailed = value;
  }
  public resetConnectFailed() {
    this._connectFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectFailedInput() {
    return this._connectFailed;
  }

  // curr_health_rate - computed: false, optional: true, required: false
  private _currHealthRate?: number; 
  public get currHealthRate() {
    return this.getNumberAttribute('curr_health_rate');
  }
  public set currHealthRate(value: number) {
    this._currHealthRate = value;
  }
  public resetCurrHealthRate() {
    this._currHealthRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currHealthRateInput() {
    return this._currHealthRate;
  }

  // ext_health_rate - computed: false, optional: true, required: false
  private _extHealthRate?: number; 
  public get extHealthRate() {
    return this.getNumberAttribute('ext_health_rate');
  }
  public set extHealthRate(value: number) {
    this._extHealthRate = value;
  }
  public resetExtHealthRate() {
    this._extHealthRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extHealthRateInput() {
    return this._extHealthRate;
  }

  // ext_health_rate_val - computed: false, optional: true, required: false
  private _extHealthRateVal?: number; 
  public get extHealthRateVal() {
    return this.getNumberAttribute('ext_health_rate_val');
  }
  public set extHealthRateVal(value: number) {
    this._extHealthRateVal = value;
  }
  public resetExtHealthRateVal() {
    this._extHealthRateVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extHealthRateValInput() {
    return this._extHealthRateVal;
  }

  // max_jiffie - computed: false, optional: true, required: false
  private _maxJiffie?: number; 
  public get maxJiffie() {
    return this.getNumberAttribute('max_jiffie');
  }
  public set maxJiffie(value: number) {
    this._maxJiffie = value;
  }
  public resetMaxJiffie() {
    this._maxJiffie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxJiffieInput() {
    return this._maxJiffie;
  }

  // min_jiffie - computed: false, optional: true, required: false
  private _minJiffie?: number; 
  public get minJiffie() {
    return this.getNumberAttribute('min_jiffie');
  }
  public set minJiffie(value: number) {
    this._minJiffie = value;
  }
  public resetMinJiffie() {
    this._minJiffie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minJiffieInput() {
    return this._minJiffie;
  }

  // num_burst - computed: false, optional: true, required: false
  private _numBurst?: number; 
  public get numBurst() {
    return this.getNumberAttribute('num_burst');
  }
  public set numBurst(value: number) {
    this._numBurst = value;
  }
  public resetNumBurst() {
    this._numBurst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numBurstInput() {
    return this._numBurst;
  }

  // open_socket - computed: false, optional: true, required: false
  private _openSocket?: number; 
  public get openSocket() {
    return this.getNumberAttribute('open_socket');
  }
  public set openSocket(value: number) {
    this._openSocket = value;
  }
  public resetOpenSocket() {
    this._openSocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openSocketInput() {
    return this._openSocket;
  }

  // open_socket_failed - computed: false, optional: true, required: false
  private _openSocketFailed?: number; 
  public get openSocketFailed() {
    return this.getNumberAttribute('open_socket_failed');
  }
  public set openSocketFailed(value: number) {
    this._openSocketFailed = value;
  }
  public resetOpenSocketFailed() {
    this._openSocketFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openSocketFailedInput() {
    return this._openSocketFailed;
  }

  // recv_packet - computed: false, optional: true, required: false
  private _recvPacket?: number; 
  public get recvPacket() {
    return this.getNumberAttribute('recv_packet');
  }
  public set recvPacket(value: number) {
    this._recvPacket = value;
  }
  public resetRecvPacket() {
    this._recvPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvPacketInput() {
    return this._recvPacket;
  }

  // recv_packet_failed - computed: false, optional: true, required: false
  private _recvPacketFailed?: number; 
  public get recvPacketFailed() {
    return this.getNumberAttribute('recv_packet_failed');
  }
  public set recvPacketFailed(value: number) {
    this._recvPacketFailed = value;
  }
  public resetRecvPacketFailed() {
    this._recvPacketFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvPacketFailedInput() {
    return this._recvPacketFailed;
  }

  // retry_times - computed: false, optional: true, required: false
  private _retryTimes?: number; 
  public get retryTimes() {
    return this.getNumberAttribute('retry_times');
  }
  public set retryTimes(value: number) {
    this._retryTimes = value;
  }
  public resetRetryTimes() {
    this._retryTimes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryTimesInput() {
    return this._retryTimes;
  }

  // running_time - computed: false, optional: true, required: false
  private _runningTime?: number; 
  public get runningTime() {
    return this.getNumberAttribute('running_time');
  }
  public set runningTime(value: number) {
    this._runningTime = value;
  }
  public resetRunningTime() {
    this._runningTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningTimeInput() {
    return this._runningTime;
  }

  // send_packet - computed: false, optional: true, required: false
  private _sendPacket?: number; 
  public get sendPacket() {
    return this.getNumberAttribute('send_packet');
  }
  public set sendPacket(value: number) {
    this._sendPacket = value;
  }
  public resetSendPacket() {
    this._sendPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendPacketInput() {
    return this._sendPacket;
  }

  // send_packet_failed - computed: false, optional: true, required: false
  private _sendPacketFailed?: number; 
  public get sendPacketFailed() {
    return this.getNumberAttribute('send_packet_failed');
  }
  public set sendPacketFailed(value: number) {
    this._sendPacketFailed = value;
  }
  public resetSendPacketFailed() {
    this._sendPacketFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendPacketFailedInput() {
    return this._sendPacketFailed;
  }

  // sock_close_before_17 - computed: false, optional: true, required: false
  private _sockCloseBefore17?: number; 
  public get sockCloseBefore17() {
    return this.getNumberAttribute('sock_close_before_17');
  }
  public set sockCloseBefore17(value: number) {
    this._sockCloseBefore17 = value;
  }
  public resetSockCloseBefore17() {
    this._sockCloseBefore17 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sockCloseBefore17Input() {
    return this._sockCloseBefore17;
  }

  // sock_close_without_notify - computed: false, optional: true, required: false
  private _sockCloseWithoutNotify?: number; 
  public get sockCloseWithoutNotify() {
    return this.getNumberAttribute('sock_close_without_notify');
  }
  public set sockCloseWithoutNotify(value: number) {
    this._sockCloseWithoutNotify = value;
  }
  public resetSockCloseWithoutNotify() {
    this._sockCloseWithoutNotify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sockCloseWithoutNotifyInput() {
    return this._sockCloseWithoutNotify;
  }

  // ssl_post_handshake_packet - computed: false, optional: true, required: false
  private _sslPostHandshakePacket?: number; 
  public get sslPostHandshakePacket() {
    return this.getNumberAttribute('ssl_post_handshake_packet');
  }
  public set sslPostHandshakePacket(value: number) {
    this._sslPostHandshakePacket = value;
  }
  public resetSslPostHandshakePacket() {
    this._sslPostHandshakePacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslPostHandshakePacketInput() {
    return this._sslPostHandshakePacket;
  }

  // status_down - computed: false, optional: true, required: false
  private _statusDown?: number; 
  public get statusDown() {
    return this.getNumberAttribute('status_down');
  }
  public set statusDown(value: number) {
    this._statusDown = value;
  }
  public resetStatusDown() {
    this._statusDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusDownInput() {
    return this._statusDown;
  }

  // status_other - computed: false, optional: true, required: false
  private _statusOther?: number; 
  public get statusOther() {
    return this.getNumberAttribute('status_other');
  }
  public set statusOther(value: number) {
    this._statusOther = value;
  }
  public resetStatusOther() {
    this._statusOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusOtherInput() {
    return this._statusOther;
  }

  // status_unkn - computed: false, optional: true, required: false
  private _statusUnkn?: number; 
  public get statusUnkn() {
    return this.getNumberAttribute('status_unkn');
  }
  public set statusUnkn(value: number) {
    this._statusUnkn = value;
  }
  public resetStatusUnkn() {
    this._statusUnkn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusUnknInput() {
    return this._statusUnkn;
  }

  // status_up - computed: false, optional: true, required: false
  private _statusUp?: number; 
  public get statusUp() {
    return this.getNumberAttribute('status_up');
  }
  public set statusUp(value: number) {
    this._statusUp = value;
  }
  public resetStatusUp() {
    this._statusUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusUpInput() {
    return this._statusUp;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // timeout_with_packet - computed: false, optional: true, required: false
  private _timeoutWithPacket?: number; 
  public get timeoutWithPacket() {
    return this.getNumberAttribute('timeout_with_packet');
  }
  public set timeoutWithPacket(value: number) {
    this._timeoutWithPacket = value;
  }
  public resetTimeoutWithPacket() {
    this._timeoutWithPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutWithPacketInput() {
    return this._timeoutWithPacket;
  }

  // total_number - computed: false, optional: true, required: false
  private _totalNumber?: number; 
  public get totalNumber() {
    return this.getNumberAttribute('total_number');
  }
  public set totalNumber(value: number) {
    this._totalNumber = value;
  }
  public resetTotalNumber() {
    this._totalNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalNumberInput() {
    return this._totalNumber;
  }

  // unexpected_error - computed: false, optional: true, required: false
  private _unexpectedError?: number; 
  public get unexpectedError() {
    return this.getNumberAttribute('unexpected_error');
  }
  public set unexpectedError(value: number) {
    this._unexpectedError = value;
  }
  public resetUnexpectedError() {
    this._unexpectedError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unexpectedErrorInput() {
    return this._unexpectedError;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_health_stat_stats thunder_slb_health_stat_stats}
*/
export class DataThunderSlbHealthStatStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_health_stat_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbHealthStatStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbHealthStatStats to import
  * @param importFromId The id of the existing DataThunderSlbHealthStatStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_health_stat_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbHealthStatStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_health_stat_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_health_stat_stats thunder_slb_health_stat_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbHealthStatStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbHealthStatStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_health_stat_stats',
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
  private _stats = new DataThunderSlbHealthStatStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbHealthStatStatsStats) {
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
      stats: dataThunderSlbHealthStatStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSlbHealthStatStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbHealthStatStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
