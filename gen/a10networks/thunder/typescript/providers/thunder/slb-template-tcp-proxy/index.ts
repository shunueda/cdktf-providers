// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateTcpProxyConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'low': Delayed ACK; 'medium': Delayed ACK, with ACK on each packet with PUSH flag; 'high': ACK on each packet;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#ack_aggressiveness SlbTemplateTcpProxy#ack_aggressiveness}
  */
  readonly ackAggressiveness?: string;
  /**
  * keep connection alive if active traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#alive_if_active SlbTemplateTcpProxy#alive_if_active}
  */
  readonly aliveIfActive?: number;
  /**
  * The TCP window scale used for the server side, default is off (number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#backend_wscale SlbTemplateTcpProxy#backend_wscale}
  */
  readonly backendWscale?: number;
  /**
  * Delete session if the server/port goes down (either disabled/hm down)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#del_session_on_server_down SlbTemplateTcpProxy#del_session_on_server_down}
  */
  readonly delSessionOnServerDown?: number;
  /**
  * send reset to client when server is disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#disable SlbTemplateTcpProxy#disable}
  */
  readonly disable?: number;
  /**
  * Appropriate Byte Counting RFC 3465 Disabled, default is enabled (Appropriate Byte Counting (ABC) is enabled by default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#disable_abc SlbTemplateTcpProxy#disable_abc}
  */
  readonly disableAbc?: number;
  /**
  * disable Selective Ack Option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#disable_sack SlbTemplateTcpProxy#disable_sack}
  */
  readonly disableSack?: number;
  /**
  * disable TCP Timestamps Option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#disable_tcp_timestamps SlbTemplateTcpProxy#disable_tcp_timestamps}
  */
  readonly disableTcpTimestamps?: number;
  /**
  * disable TCP Window-Scale Option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#disable_window_scale SlbTemplateTcpProxy#disable_window_scale}
  */
  readonly disableWindowScale?: number;
  /**
  * send reset to client when server is down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#down SlbTemplateTcpProxy#down}
  */
  readonly down?: number;
  /**
  * Optimally adjust the transmit and receive buffer sizes of TCP proxy while keeping their sum constant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#dynamic_buffer_allocation SlbTemplateTcpProxy#dynamic_buffer_allocation}
  */
  readonly dynamicBufferAllocation?: number;
  /**
  * Configure the Early-Retransmit Algorithm (RFC 5827) (Early-Retransmit is disabled by default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#early_retransmit SlbTemplateTcpProxy#early_retransmit}
  */
  readonly earlyRetransmit?: number;
  /**
  * FIN timeout (sec), default is disabled (number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#fin_timeout SlbTemplateTcpProxy#fin_timeout}
  */
  readonly finTimeout?: number;
  /**
  * The maximum time that a session can stay in the system before being deleted, default is off (number (second))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#force_delete_timeout SlbTemplateTcpProxy#force_delete_timeout}
  */
  readonly forceDeleteTimeout?: number;
  /**
  * The maximum time that a session can stay in the system before being deleted, default is off (number in 100ms)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#force_delete_timeout_100ms SlbTemplateTcpProxy#force_delete_timeout_100ms}
  */
  readonly forceDeleteTimeout100Ms?: number;
  /**
  * TCP Half Close Idle Timeout (sec), default is off (cmd is deprecated, use fin-timeout instead) (number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#half_close_idle_timeout SlbTemplateTcpProxy#half_close_idle_timeout}
  */
  readonly halfCloseIdleTimeout?: number;
  /**
  * TCP Half Open Idle Timeout (sec), default is off (number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#half_open_idle_timeout SlbTemplateTcpProxy#half_open_idle_timeout}
  */
  readonly halfOpenIdleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#id SlbTemplateTcpProxy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Idle Timeout (Interval of 60 seconds), default is 600 (idle timeout in second, default 600)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#idle_timeout SlbTemplateTcpProxy#idle_timeout}
  */
  readonly idleTimeout?: number;
  /**
  * The initial congestion control window size (packets), default is 10 (init-cwnd in packets, default 10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#init_cwnd SlbTemplateTcpProxy#init_cwnd}
  */
  readonly initCwnd?: number;
  /**
  * Set the initial window size, default is off (number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#initial_window_size SlbTemplateTcpProxy#initial_window_size}
  */
  readonly initialWindowSize?: number;
  /**
  * Insert client ip into TCP option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#insert_client_ip SlbTemplateTcpProxy#insert_client_ip}
  */
  readonly insertClientIp?: number;
  /**
  * Invalid Packet Response Rate Limit (ms), default is 500 (number default 500 challenges)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#invalid_rate_limit SlbTemplateTcpProxy#invalid_rate_limit}
  */
  readonly invalidRateLimit?: number;
  /**
  * Interval between keepalive probes (sec), default is off (number (seconds))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#keepalive_interval SlbTemplateTcpProxy#keepalive_interval}
  */
  readonly keepaliveInterval?: number;
  /**
  * Number of keepalive probes sent, default is off
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#keepalive_probes SlbTemplateTcpProxy#keepalive_probes}
  */
  readonly keepaliveProbes?: number;
  /**
  * RFC 3742 Limited Slow-Start for TCP with Large Congestion Windows (number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#limited_slowstart SlbTemplateTcpProxy#limited_slowstart}
  */
  readonly limitedSlowstart?: number;
  /**
  * The max packet count sent per transmission event (number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#maxburst SlbTemplateTcpProxy#maxburst}
  */
  readonly maxburst?: number;
  /**
  * The minmum retransmission timeout, default is 200ms (number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#min_rto SlbTemplateTcpProxy#min_rto}
  */
  readonly minRto?: number;
  /**
  * Responding MSS to use if client MSS is large, default is off (number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#mss SlbTemplateTcpProxy#mss}
  */
  readonly mss?: number;
  /**
  * Enable Nagle Algorithm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#nagle SlbTemplateTcpProxy#nagle}
  */
  readonly nagle?: number;
  /**
  * Send naked ack before data during 3-way handshake
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#naked_ack_on_handshake SlbTemplateTcpProxy#naked_ack_on_handshake}
  */
  readonly nakedAckOnHandshake?: number;
  /**
  * TCP Proxy Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#name SlbTemplateTcpProxy#name}
  */
  readonly name: string;
  /**
  * Enable Optimized PSH Flag Use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#psh_flag_optimization SlbTemplateTcpProxy#psh_flag_optimization}
  */
  readonly pshFlagOptimization?: number;
  /**
  * QOS level (number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#qos SlbTemplateTcpProxy#qos}
  */
  readonly qos?: number;
  /**
  * The reassembly queuing limit, default is 25 segments (number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#reassembly_limit SlbTemplateTcpProxy#reassembly_limit}
  */
  readonly reassemblyLimit?: number;
  /**
  * The reassembly timeout, default is 30sec (number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#reassembly_timeout SlbTemplateTcpProxy#reassembly_timeout}
  */
  readonly reassemblyTimeout?: number;
  /**
  * TCP Receive Buffer (default 200k) (number default 200000 bytes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#receive_buffer SlbTemplateTcpProxy#receive_buffer}
  */
  readonly receiveBuffer?: number;
  /**
  * Enable Reno Congestion Control Algorithm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#reno SlbTemplateTcpProxy#reno}
  */
  readonly reno?: number;
  /**
  * send reset to server if error happens
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#reset_fwd SlbTemplateTcpProxy#reset_fwd}
  */
  readonly resetFwd?: number;
  /**
  * send reset to client if error happens
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#reset_rev SlbTemplateTcpProxy#reset_rev}
  */
  readonly resetRev?: number;
  /**
  * Number of Retries for Retransmit, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#retransmit_retries SlbTemplateTcpProxy#retransmit_retries}
  */
  readonly retransmitRetries?: number;
  /**
  * 'FIN': FIN Connection; 'RST': Reset Connection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#server_down_action SlbTemplateTcpProxy#server_down_action}
  */
  readonly serverDownAction?: string;
  /**
  * SYN Retry Numbers, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#syn_retries SlbTemplateTcpProxy#syn_retries}
  */
  readonly synRetries?: number;
  /**
  * 'enable': Enable fast sack loss recovery; 'disable': Disable fast sack loss recovery; 'auto-select': Auto select fast sack loss recovery (disable);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#tcp_do_newsack SlbTemplateTcpProxy#tcp_do_newsack}
  */
  readonly tcpDoNewsack?: string;
  /**
  * Timewait Threshold (sec), default 5 (number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#timewait SlbTemplateTcpProxy#timewait}
  */
  readonly timewait?: number;
  /**
  * TCP Transmit Buffer (default 200k) (number default 200000 bytes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#transmit_buffer SlbTemplateTcpProxy#transmit_buffer}
  */
  readonly transmitBuffer?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#user_tag SlbTemplateTcpProxy#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#uuid SlbTemplateTcpProxy#uuid}
  */
  readonly uuid?: string;
  /**
  * proxy_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#proxy_header SlbTemplateTcpProxy#proxy_header}
  */
  readonly proxyHeader?: SlbTemplateTcpProxyProxyHeader;
}
export interface SlbTemplateTcpProxyProxyHeader {
  /**
  * 'insert': Insert proxy header;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#proxy_header_action SlbTemplateTcpProxy#proxy_header_action}
  */
  readonly proxyHeaderAction?: string;
  /**
  * 'v1': version 1; 'v2': version 2;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#version SlbTemplateTcpProxy#version}
  */
  readonly version?: string;
}

export function slbTemplateTcpProxyProxyHeaderToTerraform(struct?: SlbTemplateTcpProxyProxyHeaderOutputReference | SlbTemplateTcpProxyProxyHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    proxy_header_action: cdktf.stringToTerraform(struct!.proxyHeaderAction),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function slbTemplateTcpProxyProxyHeaderToHclTerraform(struct?: SlbTemplateTcpProxyProxyHeaderOutputReference | SlbTemplateTcpProxyProxyHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    proxy_header_action: {
      value: cdktf.stringToHclTerraform(struct!.proxyHeaderAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateTcpProxyProxyHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbTemplateTcpProxyProxyHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._proxyHeaderAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyHeaderAction = this._proxyHeaderAction;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateTcpProxyProxyHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._proxyHeaderAction = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._proxyHeaderAction = value.proxyHeaderAction;
      this._version = value.version;
    }
  }

  // proxy_header_action - computed: false, optional: true, required: false
  private _proxyHeaderAction?: string; 
  public get proxyHeaderAction() {
    return this.getStringAttribute('proxy_header_action');
  }
  public set proxyHeaderAction(value: string) {
    this._proxyHeaderAction = value;
  }
  public resetProxyHeaderAction() {
    this._proxyHeaderAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyHeaderActionInput() {
    return this._proxyHeaderAction;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy thunder_slb_template_tcp_proxy}
*/
export class SlbTemplateTcpProxy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_tcp_proxy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateTcpProxy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateTcpProxy to import
  * @param importFromId The id of the existing SlbTemplateTcpProxy that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateTcpProxy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_tcp_proxy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_tcp_proxy thunder_slb_template_tcp_proxy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateTcpProxyConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateTcpProxyConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_tcp_proxy',
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
    this._ackAggressiveness = config.ackAggressiveness;
    this._aliveIfActive = config.aliveIfActive;
    this._backendWscale = config.backendWscale;
    this._delSessionOnServerDown = config.delSessionOnServerDown;
    this._disable = config.disable;
    this._disableAbc = config.disableAbc;
    this._disableSack = config.disableSack;
    this._disableTcpTimestamps = config.disableTcpTimestamps;
    this._disableWindowScale = config.disableWindowScale;
    this._down = config.down;
    this._dynamicBufferAllocation = config.dynamicBufferAllocation;
    this._earlyRetransmit = config.earlyRetransmit;
    this._finTimeout = config.finTimeout;
    this._forceDeleteTimeout = config.forceDeleteTimeout;
    this._forceDeleteTimeout100Ms = config.forceDeleteTimeout100Ms;
    this._halfCloseIdleTimeout = config.halfCloseIdleTimeout;
    this._halfOpenIdleTimeout = config.halfOpenIdleTimeout;
    this._id = config.id;
    this._idleTimeout = config.idleTimeout;
    this._initCwnd = config.initCwnd;
    this._initialWindowSize = config.initialWindowSize;
    this._insertClientIp = config.insertClientIp;
    this._invalidRateLimit = config.invalidRateLimit;
    this._keepaliveInterval = config.keepaliveInterval;
    this._keepaliveProbes = config.keepaliveProbes;
    this._limitedSlowstart = config.limitedSlowstart;
    this._maxburst = config.maxburst;
    this._minRto = config.minRto;
    this._mss = config.mss;
    this._nagle = config.nagle;
    this._nakedAckOnHandshake = config.nakedAckOnHandshake;
    this._name = config.name;
    this._pshFlagOptimization = config.pshFlagOptimization;
    this._qos = config.qos;
    this._reassemblyLimit = config.reassemblyLimit;
    this._reassemblyTimeout = config.reassemblyTimeout;
    this._receiveBuffer = config.receiveBuffer;
    this._reno = config.reno;
    this._resetFwd = config.resetFwd;
    this._resetRev = config.resetRev;
    this._retransmitRetries = config.retransmitRetries;
    this._serverDownAction = config.serverDownAction;
    this._synRetries = config.synRetries;
    this._tcpDoNewsack = config.tcpDoNewsack;
    this._timewait = config.timewait;
    this._transmitBuffer = config.transmitBuffer;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._proxyHeader.internalValue = config.proxyHeader;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ack_aggressiveness - computed: false, optional: true, required: false
  private _ackAggressiveness?: string; 
  public get ackAggressiveness() {
    return this.getStringAttribute('ack_aggressiveness');
  }
  public set ackAggressiveness(value: string) {
    this._ackAggressiveness = value;
  }
  public resetAckAggressiveness() {
    this._ackAggressiveness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackAggressivenessInput() {
    return this._ackAggressiveness;
  }

  // alive_if_active - computed: false, optional: true, required: false
  private _aliveIfActive?: number; 
  public get aliveIfActive() {
    return this.getNumberAttribute('alive_if_active');
  }
  public set aliveIfActive(value: number) {
    this._aliveIfActive = value;
  }
  public resetAliveIfActive() {
    this._aliveIfActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliveIfActiveInput() {
    return this._aliveIfActive;
  }

  // backend_wscale - computed: false, optional: true, required: false
  private _backendWscale?: number; 
  public get backendWscale() {
    return this.getNumberAttribute('backend_wscale');
  }
  public set backendWscale(value: number) {
    this._backendWscale = value;
  }
  public resetBackendWscale() {
    this._backendWscale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendWscaleInput() {
    return this._backendWscale;
  }

  // del_session_on_server_down - computed: false, optional: true, required: false
  private _delSessionOnServerDown?: number; 
  public get delSessionOnServerDown() {
    return this.getNumberAttribute('del_session_on_server_down');
  }
  public set delSessionOnServerDown(value: number) {
    this._delSessionOnServerDown = value;
  }
  public resetDelSessionOnServerDown() {
    this._delSessionOnServerDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delSessionOnServerDownInput() {
    return this._delSessionOnServerDown;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // disable_abc - computed: false, optional: true, required: false
  private _disableAbc?: number; 
  public get disableAbc() {
    return this.getNumberAttribute('disable_abc');
  }
  public set disableAbc(value: number) {
    this._disableAbc = value;
  }
  public resetDisableAbc() {
    this._disableAbc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAbcInput() {
    return this._disableAbc;
  }

  // disable_sack - computed: false, optional: true, required: false
  private _disableSack?: number; 
  public get disableSack() {
    return this.getNumberAttribute('disable_sack');
  }
  public set disableSack(value: number) {
    this._disableSack = value;
  }
  public resetDisableSack() {
    this._disableSack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSackInput() {
    return this._disableSack;
  }

  // disable_tcp_timestamps - computed: false, optional: true, required: false
  private _disableTcpTimestamps?: number; 
  public get disableTcpTimestamps() {
    return this.getNumberAttribute('disable_tcp_timestamps');
  }
  public set disableTcpTimestamps(value: number) {
    this._disableTcpTimestamps = value;
  }
  public resetDisableTcpTimestamps() {
    this._disableTcpTimestamps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTcpTimestampsInput() {
    return this._disableTcpTimestamps;
  }

  // disable_window_scale - computed: false, optional: true, required: false
  private _disableWindowScale?: number; 
  public get disableWindowScale() {
    return this.getNumberAttribute('disable_window_scale');
  }
  public set disableWindowScale(value: number) {
    this._disableWindowScale = value;
  }
  public resetDisableWindowScale() {
    this._disableWindowScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableWindowScaleInput() {
    return this._disableWindowScale;
  }

  // down - computed: false, optional: true, required: false
  private _down?: number; 
  public get down() {
    return this.getNumberAttribute('down');
  }
  public set down(value: number) {
    this._down = value;
  }
  public resetDown() {
    this._down = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downInput() {
    return this._down;
  }

  // dynamic_buffer_allocation - computed: false, optional: true, required: false
  private _dynamicBufferAllocation?: number; 
  public get dynamicBufferAllocation() {
    return this.getNumberAttribute('dynamic_buffer_allocation');
  }
  public set dynamicBufferAllocation(value: number) {
    this._dynamicBufferAllocation = value;
  }
  public resetDynamicBufferAllocation() {
    this._dynamicBufferAllocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicBufferAllocationInput() {
    return this._dynamicBufferAllocation;
  }

  // early_retransmit - computed: false, optional: true, required: false
  private _earlyRetransmit?: number; 
  public get earlyRetransmit() {
    return this.getNumberAttribute('early_retransmit');
  }
  public set earlyRetransmit(value: number) {
    this._earlyRetransmit = value;
  }
  public resetEarlyRetransmit() {
    this._earlyRetransmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get earlyRetransmitInput() {
    return this._earlyRetransmit;
  }

  // fin_timeout - computed: false, optional: true, required: false
  private _finTimeout?: number; 
  public get finTimeout() {
    return this.getNumberAttribute('fin_timeout');
  }
  public set finTimeout(value: number) {
    this._finTimeout = value;
  }
  public resetFinTimeout() {
    this._finTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finTimeoutInput() {
    return this._finTimeout;
  }

  // force_delete_timeout - computed: false, optional: true, required: false
  private _forceDeleteTimeout?: number; 
  public get forceDeleteTimeout() {
    return this.getNumberAttribute('force_delete_timeout');
  }
  public set forceDeleteTimeout(value: number) {
    this._forceDeleteTimeout = value;
  }
  public resetForceDeleteTimeout() {
    this._forceDeleteTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteTimeoutInput() {
    return this._forceDeleteTimeout;
  }

  // force_delete_timeout_100ms - computed: false, optional: true, required: false
  private _forceDeleteTimeout100Ms?: number; 
  public get forceDeleteTimeout100Ms() {
    return this.getNumberAttribute('force_delete_timeout_100ms');
  }
  public set forceDeleteTimeout100Ms(value: number) {
    this._forceDeleteTimeout100Ms = value;
  }
  public resetForceDeleteTimeout100Ms() {
    this._forceDeleteTimeout100Ms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteTimeout100MsInput() {
    return this._forceDeleteTimeout100Ms;
  }

  // half_close_idle_timeout - computed: false, optional: true, required: false
  private _halfCloseIdleTimeout?: number; 
  public get halfCloseIdleTimeout() {
    return this.getNumberAttribute('half_close_idle_timeout');
  }
  public set halfCloseIdleTimeout(value: number) {
    this._halfCloseIdleTimeout = value;
  }
  public resetHalfCloseIdleTimeout() {
    this._halfCloseIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get halfCloseIdleTimeoutInput() {
    return this._halfCloseIdleTimeout;
  }

  // half_open_idle_timeout - computed: false, optional: true, required: false
  private _halfOpenIdleTimeout?: number; 
  public get halfOpenIdleTimeout() {
    return this.getNumberAttribute('half_open_idle_timeout');
  }
  public set halfOpenIdleTimeout(value: number) {
    this._halfOpenIdleTimeout = value;
  }
  public resetHalfOpenIdleTimeout() {
    this._halfOpenIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get halfOpenIdleTimeoutInput() {
    return this._halfOpenIdleTimeout;
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

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: number; 
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }
  public set idleTimeout(value: number) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // init_cwnd - computed: false, optional: true, required: false
  private _initCwnd?: number; 
  public get initCwnd() {
    return this.getNumberAttribute('init_cwnd');
  }
  public set initCwnd(value: number) {
    this._initCwnd = value;
  }
  public resetInitCwnd() {
    this._initCwnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initCwndInput() {
    return this._initCwnd;
  }

  // initial_window_size - computed: false, optional: true, required: false
  private _initialWindowSize?: number; 
  public get initialWindowSize() {
    return this.getNumberAttribute('initial_window_size');
  }
  public set initialWindowSize(value: number) {
    this._initialWindowSize = value;
  }
  public resetInitialWindowSize() {
    this._initialWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialWindowSizeInput() {
    return this._initialWindowSize;
  }

  // insert_client_ip - computed: false, optional: true, required: false
  private _insertClientIp?: number; 
  public get insertClientIp() {
    return this.getNumberAttribute('insert_client_ip');
  }
  public set insertClientIp(value: number) {
    this._insertClientIp = value;
  }
  public resetInsertClientIp() {
    this._insertClientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertClientIpInput() {
    return this._insertClientIp;
  }

  // invalid_rate_limit - computed: false, optional: true, required: false
  private _invalidRateLimit?: number; 
  public get invalidRateLimit() {
    return this.getNumberAttribute('invalid_rate_limit');
  }
  public set invalidRateLimit(value: number) {
    this._invalidRateLimit = value;
  }
  public resetInvalidRateLimit() {
    this._invalidRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidRateLimitInput() {
    return this._invalidRateLimit;
  }

  // keepalive_interval - computed: false, optional: true, required: false
  private _keepaliveInterval?: number; 
  public get keepaliveInterval() {
    return this.getNumberAttribute('keepalive_interval');
  }
  public set keepaliveInterval(value: number) {
    this._keepaliveInterval = value;
  }
  public resetKeepaliveInterval() {
    this._keepaliveInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveIntervalInput() {
    return this._keepaliveInterval;
  }

  // keepalive_probes - computed: false, optional: true, required: false
  private _keepaliveProbes?: number; 
  public get keepaliveProbes() {
    return this.getNumberAttribute('keepalive_probes');
  }
  public set keepaliveProbes(value: number) {
    this._keepaliveProbes = value;
  }
  public resetKeepaliveProbes() {
    this._keepaliveProbes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveProbesInput() {
    return this._keepaliveProbes;
  }

  // limited_slowstart - computed: false, optional: true, required: false
  private _limitedSlowstart?: number; 
  public get limitedSlowstart() {
    return this.getNumberAttribute('limited_slowstart');
  }
  public set limitedSlowstart(value: number) {
    this._limitedSlowstart = value;
  }
  public resetLimitedSlowstart() {
    this._limitedSlowstart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitedSlowstartInput() {
    return this._limitedSlowstart;
  }

  // maxburst - computed: false, optional: true, required: false
  private _maxburst?: number; 
  public get maxburst() {
    return this.getNumberAttribute('maxburst');
  }
  public set maxburst(value: number) {
    this._maxburst = value;
  }
  public resetMaxburst() {
    this._maxburst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxburstInput() {
    return this._maxburst;
  }

  // min_rto - computed: false, optional: true, required: false
  private _minRto?: number; 
  public get minRto() {
    return this.getNumberAttribute('min_rto');
  }
  public set minRto(value: number) {
    this._minRto = value;
  }
  public resetMinRto() {
    this._minRto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRtoInput() {
    return this._minRto;
  }

  // mss - computed: false, optional: true, required: false
  private _mss?: number; 
  public get mss() {
    return this.getNumberAttribute('mss');
  }
  public set mss(value: number) {
    this._mss = value;
  }
  public resetMss() {
    this._mss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssInput() {
    return this._mss;
  }

  // nagle - computed: false, optional: true, required: false
  private _nagle?: number; 
  public get nagle() {
    return this.getNumberAttribute('nagle');
  }
  public set nagle(value: number) {
    this._nagle = value;
  }
  public resetNagle() {
    this._nagle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nagleInput() {
    return this._nagle;
  }

  // naked_ack_on_handshake - computed: false, optional: true, required: false
  private _nakedAckOnHandshake?: number; 
  public get nakedAckOnHandshake() {
    return this.getNumberAttribute('naked_ack_on_handshake');
  }
  public set nakedAckOnHandshake(value: number) {
    this._nakedAckOnHandshake = value;
  }
  public resetNakedAckOnHandshake() {
    this._nakedAckOnHandshake = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nakedAckOnHandshakeInput() {
    return this._nakedAckOnHandshake;
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

  // psh_flag_optimization - computed: false, optional: true, required: false
  private _pshFlagOptimization?: number; 
  public get pshFlagOptimization() {
    return this.getNumberAttribute('psh_flag_optimization');
  }
  public set pshFlagOptimization(value: number) {
    this._pshFlagOptimization = value;
  }
  public resetPshFlagOptimization() {
    this._pshFlagOptimization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pshFlagOptimizationInput() {
    return this._pshFlagOptimization;
  }

  // qos - computed: false, optional: true, required: false
  private _qos?: number; 
  public get qos() {
    return this.getNumberAttribute('qos');
  }
  public set qos(value: number) {
    this._qos = value;
  }
  public resetQos() {
    this._qos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosInput() {
    return this._qos;
  }

  // reassembly_limit - computed: false, optional: true, required: false
  private _reassemblyLimit?: number; 
  public get reassemblyLimit() {
    return this.getNumberAttribute('reassembly_limit');
  }
  public set reassemblyLimit(value: number) {
    this._reassemblyLimit = value;
  }
  public resetReassemblyLimit() {
    this._reassemblyLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reassemblyLimitInput() {
    return this._reassemblyLimit;
  }

  // reassembly_timeout - computed: false, optional: true, required: false
  private _reassemblyTimeout?: number; 
  public get reassemblyTimeout() {
    return this.getNumberAttribute('reassembly_timeout');
  }
  public set reassemblyTimeout(value: number) {
    this._reassemblyTimeout = value;
  }
  public resetReassemblyTimeout() {
    this._reassemblyTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reassemblyTimeoutInput() {
    return this._reassemblyTimeout;
  }

  // receive_buffer - computed: false, optional: true, required: false
  private _receiveBuffer?: number; 
  public get receiveBuffer() {
    return this.getNumberAttribute('receive_buffer');
  }
  public set receiveBuffer(value: number) {
    this._receiveBuffer = value;
  }
  public resetReceiveBuffer() {
    this._receiveBuffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveBufferInput() {
    return this._receiveBuffer;
  }

  // reno - computed: false, optional: true, required: false
  private _reno?: number; 
  public get reno() {
    return this.getNumberAttribute('reno');
  }
  public set reno(value: number) {
    this._reno = value;
  }
  public resetReno() {
    this._reno = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renoInput() {
    return this._reno;
  }

  // reset_fwd - computed: false, optional: true, required: false
  private _resetFwd?: number; 
  public get resetFwd() {
    return this.getNumberAttribute('reset_fwd');
  }
  public set resetFwd(value: number) {
    this._resetFwd = value;
  }
  public resetResetFwd() {
    this._resetFwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetFwdInput() {
    return this._resetFwd;
  }

  // reset_rev - computed: false, optional: true, required: false
  private _resetRev?: number; 
  public get resetRev() {
    return this.getNumberAttribute('reset_rev');
  }
  public set resetRev(value: number) {
    this._resetRev = value;
  }
  public resetResetRev() {
    this._resetRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetRevInput() {
    return this._resetRev;
  }

  // retransmit_retries - computed: false, optional: true, required: false
  private _retransmitRetries?: number; 
  public get retransmitRetries() {
    return this.getNumberAttribute('retransmit_retries');
  }
  public set retransmitRetries(value: number) {
    this._retransmitRetries = value;
  }
  public resetRetransmitRetries() {
    this._retransmitRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitRetriesInput() {
    return this._retransmitRetries;
  }

  // server_down_action - computed: false, optional: true, required: false
  private _serverDownAction?: string; 
  public get serverDownAction() {
    return this.getStringAttribute('server_down_action');
  }
  public set serverDownAction(value: string) {
    this._serverDownAction = value;
  }
  public resetServerDownAction() {
    this._serverDownAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverDownActionInput() {
    return this._serverDownAction;
  }

  // syn_retries - computed: false, optional: true, required: false
  private _synRetries?: number; 
  public get synRetries() {
    return this.getNumberAttribute('syn_retries');
  }
  public set synRetries(value: number) {
    this._synRetries = value;
  }
  public resetSynRetries() {
    this._synRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synRetriesInput() {
    return this._synRetries;
  }

  // tcp_do_newsack - computed: false, optional: true, required: false
  private _tcpDoNewsack?: string; 
  public get tcpDoNewsack() {
    return this.getStringAttribute('tcp_do_newsack');
  }
  public set tcpDoNewsack(value: string) {
    this._tcpDoNewsack = value;
  }
  public resetTcpDoNewsack() {
    this._tcpDoNewsack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpDoNewsackInput() {
    return this._tcpDoNewsack;
  }

  // timewait - computed: false, optional: true, required: false
  private _timewait?: number; 
  public get timewait() {
    return this.getNumberAttribute('timewait');
  }
  public set timewait(value: number) {
    this._timewait = value;
  }
  public resetTimewait() {
    this._timewait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timewaitInput() {
    return this._timewait;
  }

  // transmit_buffer - computed: false, optional: true, required: false
  private _transmitBuffer?: number; 
  public get transmitBuffer() {
    return this.getNumberAttribute('transmit_buffer');
  }
  public set transmitBuffer(value: number) {
    this._transmitBuffer = value;
  }
  public resetTransmitBuffer() {
    this._transmitBuffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitBufferInput() {
    return this._transmitBuffer;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // proxy_header - computed: false, optional: true, required: false
  private _proxyHeader = new SlbTemplateTcpProxyProxyHeaderOutputReference(this, "proxy_header");
  public get proxyHeader() {
    return this._proxyHeader;
  }
  public putProxyHeader(value: SlbTemplateTcpProxyProxyHeader) {
    this._proxyHeader.internalValue = value;
  }
  public resetProxyHeader() {
    this._proxyHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyHeaderInput() {
    return this._proxyHeader.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ack_aggressiveness: cdktf.stringToTerraform(this._ackAggressiveness),
      alive_if_active: cdktf.numberToTerraform(this._aliveIfActive),
      backend_wscale: cdktf.numberToTerraform(this._backendWscale),
      del_session_on_server_down: cdktf.numberToTerraform(this._delSessionOnServerDown),
      disable: cdktf.numberToTerraform(this._disable),
      disable_abc: cdktf.numberToTerraform(this._disableAbc),
      disable_sack: cdktf.numberToTerraform(this._disableSack),
      disable_tcp_timestamps: cdktf.numberToTerraform(this._disableTcpTimestamps),
      disable_window_scale: cdktf.numberToTerraform(this._disableWindowScale),
      down: cdktf.numberToTerraform(this._down),
      dynamic_buffer_allocation: cdktf.numberToTerraform(this._dynamicBufferAllocation),
      early_retransmit: cdktf.numberToTerraform(this._earlyRetransmit),
      fin_timeout: cdktf.numberToTerraform(this._finTimeout),
      force_delete_timeout: cdktf.numberToTerraform(this._forceDeleteTimeout),
      force_delete_timeout_100ms: cdktf.numberToTerraform(this._forceDeleteTimeout100Ms),
      half_close_idle_timeout: cdktf.numberToTerraform(this._halfCloseIdleTimeout),
      half_open_idle_timeout: cdktf.numberToTerraform(this._halfOpenIdleTimeout),
      id: cdktf.stringToTerraform(this._id),
      idle_timeout: cdktf.numberToTerraform(this._idleTimeout),
      init_cwnd: cdktf.numberToTerraform(this._initCwnd),
      initial_window_size: cdktf.numberToTerraform(this._initialWindowSize),
      insert_client_ip: cdktf.numberToTerraform(this._insertClientIp),
      invalid_rate_limit: cdktf.numberToTerraform(this._invalidRateLimit),
      keepalive_interval: cdktf.numberToTerraform(this._keepaliveInterval),
      keepalive_probes: cdktf.numberToTerraform(this._keepaliveProbes),
      limited_slowstart: cdktf.numberToTerraform(this._limitedSlowstart),
      maxburst: cdktf.numberToTerraform(this._maxburst),
      min_rto: cdktf.numberToTerraform(this._minRto),
      mss: cdktf.numberToTerraform(this._mss),
      nagle: cdktf.numberToTerraform(this._nagle),
      naked_ack_on_handshake: cdktf.numberToTerraform(this._nakedAckOnHandshake),
      name: cdktf.stringToTerraform(this._name),
      psh_flag_optimization: cdktf.numberToTerraform(this._pshFlagOptimization),
      qos: cdktf.numberToTerraform(this._qos),
      reassembly_limit: cdktf.numberToTerraform(this._reassemblyLimit),
      reassembly_timeout: cdktf.numberToTerraform(this._reassemblyTimeout),
      receive_buffer: cdktf.numberToTerraform(this._receiveBuffer),
      reno: cdktf.numberToTerraform(this._reno),
      reset_fwd: cdktf.numberToTerraform(this._resetFwd),
      reset_rev: cdktf.numberToTerraform(this._resetRev),
      retransmit_retries: cdktf.numberToTerraform(this._retransmitRetries),
      server_down_action: cdktf.stringToTerraform(this._serverDownAction),
      syn_retries: cdktf.numberToTerraform(this._synRetries),
      tcp_do_newsack: cdktf.stringToTerraform(this._tcpDoNewsack),
      timewait: cdktf.numberToTerraform(this._timewait),
      transmit_buffer: cdktf.numberToTerraform(this._transmitBuffer),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      proxy_header: slbTemplateTcpProxyProxyHeaderToTerraform(this._proxyHeader.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ack_aggressiveness: {
        value: cdktf.stringToHclTerraform(this._ackAggressiveness),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alive_if_active: {
        value: cdktf.numberToHclTerraform(this._aliveIfActive),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backend_wscale: {
        value: cdktf.numberToHclTerraform(this._backendWscale),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      del_session_on_server_down: {
        value: cdktf.numberToHclTerraform(this._delSessionOnServerDown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable: {
        value: cdktf.numberToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_abc: {
        value: cdktf.numberToHclTerraform(this._disableAbc),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_sack: {
        value: cdktf.numberToHclTerraform(this._disableSack),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_tcp_timestamps: {
        value: cdktf.numberToHclTerraform(this._disableTcpTimestamps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_window_scale: {
        value: cdktf.numberToHclTerraform(this._disableWindowScale),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      down: {
        value: cdktf.numberToHclTerraform(this._down),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dynamic_buffer_allocation: {
        value: cdktf.numberToHclTerraform(this._dynamicBufferAllocation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      early_retransmit: {
        value: cdktf.numberToHclTerraform(this._earlyRetransmit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fin_timeout: {
        value: cdktf.numberToHclTerraform(this._finTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      force_delete_timeout: {
        value: cdktf.numberToHclTerraform(this._forceDeleteTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      force_delete_timeout_100ms: {
        value: cdktf.numberToHclTerraform(this._forceDeleteTimeout100Ms),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      half_close_idle_timeout: {
        value: cdktf.numberToHclTerraform(this._halfCloseIdleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      half_open_idle_timeout: {
        value: cdktf.numberToHclTerraform(this._halfOpenIdleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idle_timeout: {
        value: cdktf.numberToHclTerraform(this._idleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      init_cwnd: {
        value: cdktf.numberToHclTerraform(this._initCwnd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      initial_window_size: {
        value: cdktf.numberToHclTerraform(this._initialWindowSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      insert_client_ip: {
        value: cdktf.numberToHclTerraform(this._insertClientIp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      invalid_rate_limit: {
        value: cdktf.numberToHclTerraform(this._invalidRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      keepalive_interval: {
        value: cdktf.numberToHclTerraform(this._keepaliveInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      keepalive_probes: {
        value: cdktf.numberToHclTerraform(this._keepaliveProbes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      limited_slowstart: {
        value: cdktf.numberToHclTerraform(this._limitedSlowstart),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maxburst: {
        value: cdktf.numberToHclTerraform(this._maxburst),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_rto: {
        value: cdktf.numberToHclTerraform(this._minRto),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mss: {
        value: cdktf.numberToHclTerraform(this._mss),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nagle: {
        value: cdktf.numberToHclTerraform(this._nagle),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      naked_ack_on_handshake: {
        value: cdktf.numberToHclTerraform(this._nakedAckOnHandshake),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      psh_flag_optimization: {
        value: cdktf.numberToHclTerraform(this._pshFlagOptimization),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      qos: {
        value: cdktf.numberToHclTerraform(this._qos),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reassembly_limit: {
        value: cdktf.numberToHclTerraform(this._reassemblyLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reassembly_timeout: {
        value: cdktf.numberToHclTerraform(this._reassemblyTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      receive_buffer: {
        value: cdktf.numberToHclTerraform(this._receiveBuffer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reno: {
        value: cdktf.numberToHclTerraform(this._reno),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reset_fwd: {
        value: cdktf.numberToHclTerraform(this._resetFwd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reset_rev: {
        value: cdktf.numberToHclTerraform(this._resetRev),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retransmit_retries: {
        value: cdktf.numberToHclTerraform(this._retransmitRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_down_action: {
        value: cdktf.stringToHclTerraform(this._serverDownAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      syn_retries: {
        value: cdktf.numberToHclTerraform(this._synRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_do_newsack: {
        value: cdktf.stringToHclTerraform(this._tcpDoNewsack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timewait: {
        value: cdktf.numberToHclTerraform(this._timewait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      transmit_buffer: {
        value: cdktf.numberToHclTerraform(this._transmitBuffer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_header: {
        value: slbTemplateTcpProxyProxyHeaderToHclTerraform(this._proxyHeader.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateTcpProxyProxyHeaderList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
