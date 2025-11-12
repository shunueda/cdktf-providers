// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_tcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LtmProfileTcpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Number of seconds (default 5) connection will remain in LAST-ACK state before exiting. Value -1 means indefinite, limited by maximum retransmission timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_tcp#close_wait_timeout LtmProfileTcp#close_wait_timeout}
  */
  readonly closeWaitTimeout?: number;
  /**
  * Specifies the algorithm to use to share network resources among competing users to reduce congestion. The default is High Speed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_tcp#congestion_control LtmProfileTcp#congestion_control}
  */
  readonly congestionControl?: string;
  /**
  * Use the parent tcp profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_tcp#defaults_from LtmProfileTcp#defaults_from}
  */
  readonly defaultsFrom?: string;
  /**
  * If enabled, ADC will defer allocating resources to a connection until some payload data has arrived from the client (default false). This may help minimize the impact of certain DoS attacks but adds undesirable latency under normal conditions. Note: ‘deferredAccept’ is incompatible with server-speaks-first application protocols,Default : disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_tcp#deferred_accept LtmProfileTcp#deferred_accept}
  */
  readonly deferredAccept?: string;
  /**
  * Specifies, when checked (enabled), that the system can send fewer than one ACK (acknowledgment) segment per data segment received. By default, this setting is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_tcp#delayed_acks LtmProfileTcp#delayed_acks}
  */
  readonly delayedAcks?: string;
  /**
  * Enabling this setting allows TCP to assume a packet is lost after fewer than the standard number of duplicate ACKs, if there is no way to send new data and generate more duplicate ACKs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_tcp#early_retransmit LtmProfileTcp#early_retransmit}
  */
  readonly earlyRetransmit?: string;
  /**
  * If enabled (default), the system can use the TCP Fast Open protocol extension to reduce latency by sending payload data with initial SYN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_tcp#fast_open LtmProfileTcp#fast_open}
  */
  readonly fastOpen?: string;
  /**
  * Number of seconds (default 300) connection will remain in LAST-ACK state before closing. Value -1 means indefinite, limited by maximum retransmission timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_tcp#finwait_2timeout LtmProfileTcp#finwait_2timeout}
  */
  readonly finwait2Timeout?: number;
  /**
  * Number of seconds (default 5) connection will remain in FIN-WAIT-1 or closing state before exiting. Value -1 means indefinite, limited by maximum retransmission timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_tcp#finwait_timeout LtmProfileTcp#finwait_timeout}
  */
  readonly finwaitTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_tcp#id LtmProfileTcp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Number of seconds (default 300; may not be 0) connection may remain idle before it becomes eligible for deletion. Value -1 (not recommended) means infinite
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_tcp#idle_timeout LtmProfileTcp#idle_timeout}
  */
  readonly idleTimeout?: number;
  /**
  * Specifies the initial congestion window size for connections to this destination. Actual window size is this value multiplied by the MSS (Maximum Segment Size) for the same connection. The default is 10. Valid values range from 0 to 64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_tcp#initial_congestion_windowsize LtmProfileTcp#initial_congestion_windowsize}
  */
  readonly initialCongestionWindowsize?: number;
  /**
  * Number of seconds (default 1800) between keep-alive probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_tcp#keepalive_interval LtmProfileTcp#keepalive_interval}
  */
  readonly keepaliveInterval?: number;
  /**
  * Specifies whether the system applies Nagle's algorithm to reduce the number of short segments on the network.If you select Auto, the system determines whether to use Nagle's algorithm based on network conditions. By default, this setting is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_tcp#nagle LtmProfileTcp#nagle}
  */
  readonly nagle?: string;
  /**
  * Name of the TCP Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_tcp#name LtmProfileTcp#name}
  */
  readonly name: string;
  /**
  * name of partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_tcp#partition LtmProfileTcp#partition}
  */
  readonly partition?: string;
  /**
  * Specifies the proxy buffer level, in bytes, at which the receive window is closed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_tcp#proxybuffer_high LtmProfileTcp#proxybuffer_high}
  */
  readonly proxybufferHigh?: number;
  /**
  * Specifies the maximum advertised RECEIVE window size. This value represents the maximum number of bytes to which the RECEIVE window can scale. The default is 65535 bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_tcp#receive_windowsize LtmProfileTcp#receive_windowsize}
  */
  readonly receiveWindowsize?: number;
  /**
  * Specifies the SEND window size. The default is 131072 bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_tcp#send_buffersize LtmProfileTcp#send_buffersize}
  */
  readonly sendBuffersize?: number;
  /**
  * Enabling this setting allows TCP to send a probe segment to trigger fast recovery instead of recovering a loss via a retransmission timeout,By default, this setting is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_tcp#tailloss_probe LtmProfileTcp#tailloss_probe}
  */
  readonly taillossProbe?: string;
  /**
  * Using this setting enabled, the system can recycle a wait-state connection immediately upon receipt of a new connection request instead of having to wait until the connection times out of the wait state. By default, this setting is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_tcp#timewait_recycle LtmProfileTcp#timewait_recycle}
  */
  readonly timewaitRecycle?: string;
  /**
  * Specifies, when checked (enabled), that the system can actually communicate with the server before establishing a client connection. To determine this, the system sends the server a SYN packet before responding to the client's SYN with a SYN-ACK. When unchecked, the system accepts the client connection before selecting a server to talk to. By default, this setting is disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_tcp#verified_accept LtmProfileTcp#verified_accept}
  */
  readonly verifiedAccept?: string;
  /**
  * Specifies the timeout in milliseconds for terminating a connection with an effective zero length TCP transmit window
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_tcp#zerowindow_timeout LtmProfileTcp#zerowindow_timeout}
  */
  readonly zerowindowTimeout?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_tcp bigip_ltm_profile_tcp}
*/
export class LtmProfileTcp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_ltm_profile_tcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LtmProfileTcp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LtmProfileTcp to import
  * @param importFromId The id of the existing LtmProfileTcp that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_tcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LtmProfileTcp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_ltm_profile_tcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_tcp bigip_ltm_profile_tcp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LtmProfileTcpConfig
  */
  public constructor(scope: Construct, id: string, config: LtmProfileTcpConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_ltm_profile_tcp',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1',
        providerVersionConstraint: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._closeWaitTimeout = config.closeWaitTimeout;
    this._congestionControl = config.congestionControl;
    this._defaultsFrom = config.defaultsFrom;
    this._deferredAccept = config.deferredAccept;
    this._delayedAcks = config.delayedAcks;
    this._earlyRetransmit = config.earlyRetransmit;
    this._fastOpen = config.fastOpen;
    this._finwait2Timeout = config.finwait2Timeout;
    this._finwaitTimeout = config.finwaitTimeout;
    this._id = config.id;
    this._idleTimeout = config.idleTimeout;
    this._initialCongestionWindowsize = config.initialCongestionWindowsize;
    this._keepaliveInterval = config.keepaliveInterval;
    this._nagle = config.nagle;
    this._name = config.name;
    this._partition = config.partition;
    this._proxybufferHigh = config.proxybufferHigh;
    this._receiveWindowsize = config.receiveWindowsize;
    this._sendBuffersize = config.sendBuffersize;
    this._taillossProbe = config.taillossProbe;
    this._timewaitRecycle = config.timewaitRecycle;
    this._verifiedAccept = config.verifiedAccept;
    this._zerowindowTimeout = config.zerowindowTimeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // close_wait_timeout - computed: true, optional: true, required: false
  private _closeWaitTimeout?: number; 
  public get closeWaitTimeout() {
    return this.getNumberAttribute('close_wait_timeout');
  }
  public set closeWaitTimeout(value: number) {
    this._closeWaitTimeout = value;
  }
  public resetCloseWaitTimeout() {
    this._closeWaitTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closeWaitTimeoutInput() {
    return this._closeWaitTimeout;
  }

  // congestion_control - computed: false, optional: true, required: false
  private _congestionControl?: string; 
  public get congestionControl() {
    return this.getStringAttribute('congestion_control');
  }
  public set congestionControl(value: string) {
    this._congestionControl = value;
  }
  public resetCongestionControl() {
    this._congestionControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get congestionControlInput() {
    return this._congestionControl;
  }

  // defaults_from - computed: true, optional: true, required: false
  private _defaultsFrom?: string; 
  public get defaultsFrom() {
    return this.getStringAttribute('defaults_from');
  }
  public set defaultsFrom(value: string) {
    this._defaultsFrom = value;
  }
  public resetDefaultsFrom() {
    this._defaultsFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultsFromInput() {
    return this._defaultsFrom;
  }

  // deferred_accept - computed: true, optional: true, required: false
  private _deferredAccept?: string; 
  public get deferredAccept() {
    return this.getStringAttribute('deferred_accept');
  }
  public set deferredAccept(value: string) {
    this._deferredAccept = value;
  }
  public resetDeferredAccept() {
    this._deferredAccept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deferredAcceptInput() {
    return this._deferredAccept;
  }

  // delayed_acks - computed: false, optional: true, required: false
  private _delayedAcks?: string; 
  public get delayedAcks() {
    return this.getStringAttribute('delayed_acks');
  }
  public set delayedAcks(value: string) {
    this._delayedAcks = value;
  }
  public resetDelayedAcks() {
    this._delayedAcks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayedAcksInput() {
    return this._delayedAcks;
  }

  // early_retransmit - computed: false, optional: true, required: false
  private _earlyRetransmit?: string; 
  public get earlyRetransmit() {
    return this.getStringAttribute('early_retransmit');
  }
  public set earlyRetransmit(value: string) {
    this._earlyRetransmit = value;
  }
  public resetEarlyRetransmit() {
    this._earlyRetransmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get earlyRetransmitInput() {
    return this._earlyRetransmit;
  }

  // fast_open - computed: true, optional: true, required: false
  private _fastOpen?: string; 
  public get fastOpen() {
    return this.getStringAttribute('fast_open');
  }
  public set fastOpen(value: string) {
    this._fastOpen = value;
  }
  public resetFastOpen() {
    this._fastOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastOpenInput() {
    return this._fastOpen;
  }

  // finwait_2timeout - computed: true, optional: true, required: false
  private _finwait2Timeout?: number; 
  public get finwait2Timeout() {
    return this.getNumberAttribute('finwait_2timeout');
  }
  public set finwait2Timeout(value: number) {
    this._finwait2Timeout = value;
  }
  public resetFinwait2Timeout() {
    this._finwait2Timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finwait2TimeoutInput() {
    return this._finwait2Timeout;
  }

  // finwait_timeout - computed: true, optional: true, required: false
  private _finwaitTimeout?: number; 
  public get finwaitTimeout() {
    return this.getNumberAttribute('finwait_timeout');
  }
  public set finwaitTimeout(value: number) {
    this._finwaitTimeout = value;
  }
  public resetFinwaitTimeout() {
    this._finwaitTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finwaitTimeoutInput() {
    return this._finwaitTimeout;
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

  // idle_timeout - computed: true, optional: true, required: false
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

  // initial_congestion_windowsize - computed: false, optional: true, required: false
  private _initialCongestionWindowsize?: number; 
  public get initialCongestionWindowsize() {
    return this.getNumberAttribute('initial_congestion_windowsize');
  }
  public set initialCongestionWindowsize(value: number) {
    this._initialCongestionWindowsize = value;
  }
  public resetInitialCongestionWindowsize() {
    this._initialCongestionWindowsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialCongestionWindowsizeInput() {
    return this._initialCongestionWindowsize;
  }

  // keepalive_interval - computed: true, optional: true, required: false
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

  // nagle - computed: false, optional: true, required: false
  private _nagle?: string; 
  public get nagle() {
    return this.getStringAttribute('nagle');
  }
  public set nagle(value: string) {
    this._nagle = value;
  }
  public resetNagle() {
    this._nagle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nagleInput() {
    return this._nagle;
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

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // proxybuffer_high - computed: false, optional: true, required: false
  private _proxybufferHigh?: number; 
  public get proxybufferHigh() {
    return this.getNumberAttribute('proxybuffer_high');
  }
  public set proxybufferHigh(value: number) {
    this._proxybufferHigh = value;
  }
  public resetProxybufferHigh() {
    this._proxybufferHigh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxybufferHighInput() {
    return this._proxybufferHigh;
  }

  // receive_windowsize - computed: false, optional: true, required: false
  private _receiveWindowsize?: number; 
  public get receiveWindowsize() {
    return this.getNumberAttribute('receive_windowsize');
  }
  public set receiveWindowsize(value: number) {
    this._receiveWindowsize = value;
  }
  public resetReceiveWindowsize() {
    this._receiveWindowsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveWindowsizeInput() {
    return this._receiveWindowsize;
  }

  // send_buffersize - computed: false, optional: true, required: false
  private _sendBuffersize?: number; 
  public get sendBuffersize() {
    return this.getNumberAttribute('send_buffersize');
  }
  public set sendBuffersize(value: number) {
    this._sendBuffersize = value;
  }
  public resetSendBuffersize() {
    this._sendBuffersize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendBuffersizeInput() {
    return this._sendBuffersize;
  }

  // tailloss_probe - computed: false, optional: true, required: false
  private _taillossProbe?: string; 
  public get taillossProbe() {
    return this.getStringAttribute('tailloss_probe');
  }
  public set taillossProbe(value: string) {
    this._taillossProbe = value;
  }
  public resetTaillossProbe() {
    this._taillossProbe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taillossProbeInput() {
    return this._taillossProbe;
  }

  // timewait_recycle - computed: false, optional: true, required: false
  private _timewaitRecycle?: string; 
  public get timewaitRecycle() {
    return this.getStringAttribute('timewait_recycle');
  }
  public set timewaitRecycle(value: string) {
    this._timewaitRecycle = value;
  }
  public resetTimewaitRecycle() {
    this._timewaitRecycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timewaitRecycleInput() {
    return this._timewaitRecycle;
  }

  // verified_accept - computed: false, optional: true, required: false
  private _verifiedAccept?: string; 
  public get verifiedAccept() {
    return this.getStringAttribute('verified_accept');
  }
  public set verifiedAccept(value: string) {
    this._verifiedAccept = value;
  }
  public resetVerifiedAccept() {
    this._verifiedAccept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifiedAcceptInput() {
    return this._verifiedAccept;
  }

  // zerowindow_timeout - computed: false, optional: true, required: false
  private _zerowindowTimeout?: number; 
  public get zerowindowTimeout() {
    return this.getNumberAttribute('zerowindow_timeout');
  }
  public set zerowindowTimeout(value: number) {
    this._zerowindowTimeout = value;
  }
  public resetZerowindowTimeout() {
    this._zerowindowTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zerowindowTimeoutInput() {
    return this._zerowindowTimeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      close_wait_timeout: cdktf.numberToTerraform(this._closeWaitTimeout),
      congestion_control: cdktf.stringToTerraform(this._congestionControl),
      defaults_from: cdktf.stringToTerraform(this._defaultsFrom),
      deferred_accept: cdktf.stringToTerraform(this._deferredAccept),
      delayed_acks: cdktf.stringToTerraform(this._delayedAcks),
      early_retransmit: cdktf.stringToTerraform(this._earlyRetransmit),
      fast_open: cdktf.stringToTerraform(this._fastOpen),
      finwait_2timeout: cdktf.numberToTerraform(this._finwait2Timeout),
      finwait_timeout: cdktf.numberToTerraform(this._finwaitTimeout),
      id: cdktf.stringToTerraform(this._id),
      idle_timeout: cdktf.numberToTerraform(this._idleTimeout),
      initial_congestion_windowsize: cdktf.numberToTerraform(this._initialCongestionWindowsize),
      keepalive_interval: cdktf.numberToTerraform(this._keepaliveInterval),
      nagle: cdktf.stringToTerraform(this._nagle),
      name: cdktf.stringToTerraform(this._name),
      partition: cdktf.stringToTerraform(this._partition),
      proxybuffer_high: cdktf.numberToTerraform(this._proxybufferHigh),
      receive_windowsize: cdktf.numberToTerraform(this._receiveWindowsize),
      send_buffersize: cdktf.numberToTerraform(this._sendBuffersize),
      tailloss_probe: cdktf.stringToTerraform(this._taillossProbe),
      timewait_recycle: cdktf.stringToTerraform(this._timewaitRecycle),
      verified_accept: cdktf.stringToTerraform(this._verifiedAccept),
      zerowindow_timeout: cdktf.numberToTerraform(this._zerowindowTimeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      close_wait_timeout: {
        value: cdktf.numberToHclTerraform(this._closeWaitTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      congestion_control: {
        value: cdktf.stringToHclTerraform(this._congestionControl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defaults_from: {
        value: cdktf.stringToHclTerraform(this._defaultsFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deferred_accept: {
        value: cdktf.stringToHclTerraform(this._deferredAccept),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delayed_acks: {
        value: cdktf.stringToHclTerraform(this._delayedAcks),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      early_retransmit: {
        value: cdktf.stringToHclTerraform(this._earlyRetransmit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fast_open: {
        value: cdktf.stringToHclTerraform(this._fastOpen),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      finwait_2timeout: {
        value: cdktf.numberToHclTerraform(this._finwait2Timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      finwait_timeout: {
        value: cdktf.numberToHclTerraform(this._finwaitTimeout),
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
      initial_congestion_windowsize: {
        value: cdktf.numberToHclTerraform(this._initialCongestionWindowsize),
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
      nagle: {
        value: cdktf.stringToHclTerraform(this._nagle),
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
      partition: {
        value: cdktf.stringToHclTerraform(this._partition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxybuffer_high: {
        value: cdktf.numberToHclTerraform(this._proxybufferHigh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      receive_windowsize: {
        value: cdktf.numberToHclTerraform(this._receiveWindowsize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      send_buffersize: {
        value: cdktf.numberToHclTerraform(this._sendBuffersize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tailloss_probe: {
        value: cdktf.stringToHclTerraform(this._taillossProbe),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timewait_recycle: {
        value: cdktf.stringToHclTerraform(this._timewaitRecycle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verified_accept: {
        value: cdktf.stringToHclTerraform(this._verifiedAccept),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zerowindow_timeout: {
        value: cdktf.numberToHclTerraform(this._zerowindowTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
