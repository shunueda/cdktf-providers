// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosTemplateTcpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable Reset client TCP SYN+ACK for authentication (DST support only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#ack_authentication_synack_reset DdosTemplateTcp#ack_authentication_synack_reset}
  */
  readonly ackAuthenticationSynackReset?: number;
  /**
  * Take action if action-on-ack RTO-authentication fail over retry time(default:5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#action_on_ack_rto_retry_count DdosTemplateTcp#action_on_ack_rto_retry_count}
  */
  readonly actionOnAckRtoRetryCount?: number;
  /**
  * Take action if action-on-syn RTO-authentication fail over retry time(default:5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#action_on_syn_rto_retry_count DdosTemplateTcp#action_on_syn_rto_retry_count}
  */
  readonly actionOnSynRtoRetryCount?: number;
  /**
  * Session age in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#age DdosTemplateTcp#age}
  */
  readonly age?: number;
  /**
  * Treat TCP SYN+PSH as a TCP SYN (DST tcp ports support only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#allow_syn_otherflags DdosTemplateTcp#allow_syn_otherflags}
  */
  readonly allowSynOtherflags?: number;
  /**
  * Allow create sessions on SYNACK without syn-auth and ack-auth (ASYM Mode only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#allow_synack_skip_authentications DdosTemplateTcp#allow_synack_skip_authentications}
  */
  readonly allowSynackSkipAuthentications?: number;
  /**
  * Allow TCP Fast Open
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#allow_tcp_tfo DdosTemplateTcp#allow_tcp_tfo}
  */
  readonly allowTcpTfo?: number;
  /**
  * Black list Src IP if out of seq pkts exceed configured threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#black_list_out_of_seq DdosTemplateTcp#black_list_out_of_seq}
  */
  readonly blackListOutOfSeq?: number;
  /**
  * Black list Src IP if retransmit pkts exceed configured threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#black_list_retransmit DdosTemplateTcp#black_list_retransmit}
  */
  readonly blackListRetransmit?: number;
  /**
  * Black list Src IP if zero window pkts exceed configured threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#black_list_zero_win DdosTemplateTcp#black_list_zero_win}
  */
  readonly blackListZeroWin?: number;
  /**
  * Only count SYN-initiated connections towards connection-rate tracking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#conn_rate_limit_on_syn_only DdosTemplateTcp#conn_rate_limit_on_syn_only}
  */
  readonly connRateLimitOnSynOnly?: number;
  /**
  * Enable connection establishment on SYN only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#create_conn_on_syn_only DdosTemplateTcp#create_conn_on_syn_only}
  */
  readonly createConnOnSynOnly?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#id DdosTemplateTcp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#name DdosTemplateTcp#name}
  */
  readonly name: string;
  /**
  * 'drop': Drop packets for out-of-seq rate exceed (Default); 'blacklist-src': help Blacklist-src for out-of-seq rate exceed; 'ignore': help Ignore out-of-seq rate exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#per_conn_out_of_seq_rate_action DdosTemplateTcp#per_conn_out_of_seq_rate_action}
  */
  readonly perConnOutOfSeqRateAction?: string;
  /**
  * Take action if out-of-seq pkt rate exceed configured threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#per_conn_out_of_seq_rate_limit DdosTemplateTcp#per_conn_out_of_seq_rate_limit}
  */
  readonly perConnOutOfSeqRateLimit?: number;
  /**
  * 'drop': Drop packets for per-conn-pkt-rate exceed (Default); 'blacklist-src': help Blacklist-src for per-conn-pkt-rate exceed; 'ignore': Ignore per-conn-pkt-rate-exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#per_conn_pkt_rate_action DdosTemplateTcp#per_conn_pkt_rate_action}
  */
  readonly perConnPktRateAction?: string;
  /**
  * Packet rate limit per connection per rate-interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#per_conn_pkt_rate_limit DdosTemplateTcp#per_conn_pkt_rate_limit}
  */
  readonly perConnPktRateLimit?: number;
  /**
  * '100ms': 100ms; '1sec': 1sec; '10sec': 10sec;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#per_conn_rate_interval DdosTemplateTcp#per_conn_rate_interval}
  */
  readonly perConnRateInterval?: string;
  /**
  * 'drop': Drop packets for retransmit rate exceed (Default); 'blacklist-src': help Blacklist-src for retransmit rate exceed; 'ignore': help Ignore retransmit rate exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#per_conn_retransmit_rate_action DdosTemplateTcp#per_conn_retransmit_rate_action}
  */
  readonly perConnRetransmitRateAction?: string;
  /**
  * Take action if retransmit pkt rate exceed configured threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#per_conn_retransmit_rate_limit DdosTemplateTcp#per_conn_retransmit_rate_limit}
  */
  readonly perConnRetransmitRateLimit?: number;
  /**
  * 'drop': Drop packets for zero-win rate exceed (Default); 'blacklist-src': help Blacklist-src for zero-win rate exceed; 'ignore': help Ignore zero-win rate exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#per_conn_zero_win_rate_action DdosTemplateTcp#per_conn_zero_win_rate_action}
  */
  readonly perConnZeroWinRateAction?: string;
  /**
  * Take action if zero window pkt rate exceed configured threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#per_conn_zero_win_rate_limit DdosTemplateTcp#per_conn_zero_win_rate_limit}
  */
  readonly perConnZeroWinRateLimit?: number;
  /**
  * 'send-rst': Send RST to all client's concurrent auth attempts; 'force-rst-by-ack': Force client RST via the use of ACK; 'force-rst-by-synack': Force client RST via the use of bad SYN|ACK; 'disable': Disable TCP SYN Authentication; 'send-rst-once': Send RST to one client's concurrent auth attempts;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#syn_auth DdosTemplateTcp#syn_auth}
  */
  readonly synAuth?: string;
  /**
  * Enable SYN Cookie
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#syn_cookie DdosTemplateTcp#syn_cookie}
  */
  readonly synCookie?: number;
  /**
  * Config SYNACK rate limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#synack_rate_limit DdosTemplateTcp#synack_rate_limit}
  */
  readonly synackRateLimit?: number;
  /**
  * SYNACK will be counted in Dst Syn-rate limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#track_together_with_syn DdosTemplateTcp#track_together_with_syn}
  */
  readonly trackTogetherWithSyn?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#user_tag DdosTemplateTcp#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#uuid DdosTemplateTcp#uuid}
  */
  readonly uuid?: string;
  /**
  * action_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#action_cfg DdosTemplateTcp#action_cfg}
  */
  readonly actionCfg?: DdosTemplateTcpActionCfg;
  /**
  * action_syn_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#action_syn_cfg DdosTemplateTcp#action_syn_cfg}
  */
  readonly actionSynCfg?: DdosTemplateTcpActionSynCfg;
  /**
  * drop_known_resp_src_port_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#drop_known_resp_src_port_cfg DdosTemplateTcp#drop_known_resp_src_port_cfg}
  */
  readonly dropKnownRespSrcPortCfg?: DdosTemplateTcpDropKnownRespSrcPortCfg;
  /**
  * dst block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#dst DdosTemplateTcp#dst}
  */
  readonly dst?: DdosTemplateTcpDst;
  /**
  * filter_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#filter_list DdosTemplateTcp#filter_list}
  */
  readonly filterList?: DdosTemplateTcpFilterListStruct[] | cdktf.IResolvable;
  /**
  * progression_tracking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#progression_tracking DdosTemplateTcp#progression_tracking}
  */
  readonly progressionTracking?: DdosTemplateTcpProgressionTracking;
  /**
  * src block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#src DdosTemplateTcp#src}
  */
  readonly src?: DdosTemplateTcpSrc;
  /**
  * tunnel_encap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#tunnel_encap DdosTemplateTcp#tunnel_encap}
  */
  readonly tunnelEncap?: DdosTemplateTcpTunnelEncap;
}
export interface DdosTemplateTcpActionCfg {
  /**
  * Monitor tcp ack for age-out session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#action_on_ack DdosTemplateTcp#action_on_ack}
  */
  readonly actionOnAck?: number;
  /**
  * Apply action-on-ack once per source address for authentication purpose
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#authenticate_only DdosTemplateTcp#authenticate_only}
  */
  readonly authenticateOnly?: number;
  /**
  * Min gap between 2 ACKs for action-on-ack pass in 100ms interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#min_retry_gap DdosTemplateTcp#min_retry_gap}
  */
  readonly minRetryGap?: number;
  /**
  * Send RST to client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#reset DdosTemplateTcp#reset}
  */
  readonly reset?: number;
  /**
  * Estimate the RTO and apply the exponential back-off for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#rto_authentication DdosTemplateTcp#rto_authentication}
  */
  readonly rtoAuthentication?: number;
  /**
  * ACK retry timeout in sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#timeout DdosTemplateTcp#timeout}
  */
  readonly timeout?: number;
}

export function ddosTemplateTcpActionCfgToTerraform(struct?: DdosTemplateTcpActionCfgOutputReference | DdosTemplateTcpActionCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_on_ack: cdktf.numberToTerraform(struct!.actionOnAck),
    authenticate_only: cdktf.numberToTerraform(struct!.authenticateOnly),
    min_retry_gap: cdktf.numberToTerraform(struct!.minRetryGap),
    reset: cdktf.numberToTerraform(struct!.reset),
    rto_authentication: cdktf.numberToTerraform(struct!.rtoAuthentication),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function ddosTemplateTcpActionCfgToHclTerraform(struct?: DdosTemplateTcpActionCfgOutputReference | DdosTemplateTcpActionCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_on_ack: {
      value: cdktf.numberToHclTerraform(struct!.actionOnAck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authenticate_only: {
      value: cdktf.numberToHclTerraform(struct!.authenticateOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_retry_gap: {
      value: cdktf.numberToHclTerraform(struct!.minRetryGap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reset: {
      value: cdktf.numberToHclTerraform(struct!.reset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rto_authentication: {
      value: cdktf.numberToHclTerraform(struct!.rtoAuthentication),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateTcpActionCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateTcpActionCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionOnAck !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionOnAck = this._actionOnAck;
    }
    if (this._authenticateOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticateOnly = this._authenticateOnly;
    }
    if (this._minRetryGap !== undefined) {
      hasAnyValues = true;
      internalValueResult.minRetryGap = this._minRetryGap;
    }
    if (this._reset !== undefined) {
      hasAnyValues = true;
      internalValueResult.reset = this._reset;
    }
    if (this._rtoAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtoAuthentication = this._rtoAuthentication;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateTcpActionCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionOnAck = undefined;
      this._authenticateOnly = undefined;
      this._minRetryGap = undefined;
      this._reset = undefined;
      this._rtoAuthentication = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionOnAck = value.actionOnAck;
      this._authenticateOnly = value.authenticateOnly;
      this._minRetryGap = value.minRetryGap;
      this._reset = value.reset;
      this._rtoAuthentication = value.rtoAuthentication;
      this._timeout = value.timeout;
    }
  }

  // action_on_ack - computed: false, optional: true, required: false
  private _actionOnAck?: number; 
  public get actionOnAck() {
    return this.getNumberAttribute('action_on_ack');
  }
  public set actionOnAck(value: number) {
    this._actionOnAck = value;
  }
  public resetActionOnAck() {
    this._actionOnAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionOnAckInput() {
    return this._actionOnAck;
  }

  // authenticate_only - computed: false, optional: true, required: false
  private _authenticateOnly?: number; 
  public get authenticateOnly() {
    return this.getNumberAttribute('authenticate_only');
  }
  public set authenticateOnly(value: number) {
    this._authenticateOnly = value;
  }
  public resetAuthenticateOnly() {
    this._authenticateOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateOnlyInput() {
    return this._authenticateOnly;
  }

  // min_retry_gap - computed: false, optional: true, required: false
  private _minRetryGap?: number; 
  public get minRetryGap() {
    return this.getNumberAttribute('min_retry_gap');
  }
  public set minRetryGap(value: number) {
    this._minRetryGap = value;
  }
  public resetMinRetryGap() {
    this._minRetryGap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRetryGapInput() {
    return this._minRetryGap;
  }

  // reset - computed: false, optional: true, required: false
  private _reset?: number; 
  public get reset() {
    return this.getNumberAttribute('reset');
  }
  public set reset(value: number) {
    this._reset = value;
  }
  public resetReset() {
    this._reset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetInput() {
    return this._reset;
  }

  // rto_authentication - computed: false, optional: true, required: false
  private _rtoAuthentication?: number; 
  public get rtoAuthentication() {
    return this.getNumberAttribute('rto_authentication');
  }
  public set rtoAuthentication(value: number) {
    this._rtoAuthentication = value;
  }
  public resetRtoAuthentication() {
    this._rtoAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtoAuthenticationInput() {
    return this._rtoAuthentication;
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
}
export interface DdosTemplateTcpActionSynCfg {
  /**
  * Monitor tcp syn for age-out session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#action_on_syn DdosTemplateTcp#action_on_syn}
  */
  readonly actionOnSyn?: number;
  /**
  * Min gap between 2 SYNs for action-on-syn pass in 100ms interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#action_on_syn_gap DdosTemplateTcp#action_on_syn_gap}
  */
  readonly actionOnSynGap?: number;
  /**
  * Send RST to client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#action_on_syn_reset DdosTemplateTcp#action_on_syn_reset}
  */
  readonly actionOnSynReset?: number;
  /**
  * Estimate the RTO and apply the exponential back-off for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#action_on_syn_rto DdosTemplateTcp#action_on_syn_rto}
  */
  readonly actionOnSynRto?: number;
  /**
  * SYN retry timeout in sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#action_on_syn_timeout DdosTemplateTcp#action_on_syn_timeout}
  */
  readonly actionOnSynTimeout?: number;
}

export function ddosTemplateTcpActionSynCfgToTerraform(struct?: DdosTemplateTcpActionSynCfgOutputReference | DdosTemplateTcpActionSynCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_on_syn: cdktf.numberToTerraform(struct!.actionOnSyn),
    action_on_syn_gap: cdktf.numberToTerraform(struct!.actionOnSynGap),
    action_on_syn_reset: cdktf.numberToTerraform(struct!.actionOnSynReset),
    action_on_syn_rto: cdktf.numberToTerraform(struct!.actionOnSynRto),
    action_on_syn_timeout: cdktf.numberToTerraform(struct!.actionOnSynTimeout),
  }
}


export function ddosTemplateTcpActionSynCfgToHclTerraform(struct?: DdosTemplateTcpActionSynCfgOutputReference | DdosTemplateTcpActionSynCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_on_syn: {
      value: cdktf.numberToHclTerraform(struct!.actionOnSyn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    action_on_syn_gap: {
      value: cdktf.numberToHclTerraform(struct!.actionOnSynGap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    action_on_syn_reset: {
      value: cdktf.numberToHclTerraform(struct!.actionOnSynReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    action_on_syn_rto: {
      value: cdktf.numberToHclTerraform(struct!.actionOnSynRto),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    action_on_syn_timeout: {
      value: cdktf.numberToHclTerraform(struct!.actionOnSynTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateTcpActionSynCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateTcpActionSynCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionOnSyn !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionOnSyn = this._actionOnSyn;
    }
    if (this._actionOnSynGap !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionOnSynGap = this._actionOnSynGap;
    }
    if (this._actionOnSynReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionOnSynReset = this._actionOnSynReset;
    }
    if (this._actionOnSynRto !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionOnSynRto = this._actionOnSynRto;
    }
    if (this._actionOnSynTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionOnSynTimeout = this._actionOnSynTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateTcpActionSynCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionOnSyn = undefined;
      this._actionOnSynGap = undefined;
      this._actionOnSynReset = undefined;
      this._actionOnSynRto = undefined;
      this._actionOnSynTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionOnSyn = value.actionOnSyn;
      this._actionOnSynGap = value.actionOnSynGap;
      this._actionOnSynReset = value.actionOnSynReset;
      this._actionOnSynRto = value.actionOnSynRto;
      this._actionOnSynTimeout = value.actionOnSynTimeout;
    }
  }

  // action_on_syn - computed: false, optional: true, required: false
  private _actionOnSyn?: number; 
  public get actionOnSyn() {
    return this.getNumberAttribute('action_on_syn');
  }
  public set actionOnSyn(value: number) {
    this._actionOnSyn = value;
  }
  public resetActionOnSyn() {
    this._actionOnSyn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionOnSynInput() {
    return this._actionOnSyn;
  }

  // action_on_syn_gap - computed: false, optional: true, required: false
  private _actionOnSynGap?: number; 
  public get actionOnSynGap() {
    return this.getNumberAttribute('action_on_syn_gap');
  }
  public set actionOnSynGap(value: number) {
    this._actionOnSynGap = value;
  }
  public resetActionOnSynGap() {
    this._actionOnSynGap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionOnSynGapInput() {
    return this._actionOnSynGap;
  }

  // action_on_syn_reset - computed: false, optional: true, required: false
  private _actionOnSynReset?: number; 
  public get actionOnSynReset() {
    return this.getNumberAttribute('action_on_syn_reset');
  }
  public set actionOnSynReset(value: number) {
    this._actionOnSynReset = value;
  }
  public resetActionOnSynReset() {
    this._actionOnSynReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionOnSynResetInput() {
    return this._actionOnSynReset;
  }

  // action_on_syn_rto - computed: false, optional: true, required: false
  private _actionOnSynRto?: number; 
  public get actionOnSynRto() {
    return this.getNumberAttribute('action_on_syn_rto');
  }
  public set actionOnSynRto(value: number) {
    this._actionOnSynRto = value;
  }
  public resetActionOnSynRto() {
    this._actionOnSynRto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionOnSynRtoInput() {
    return this._actionOnSynRto;
  }

  // action_on_syn_timeout - computed: false, optional: true, required: false
  private _actionOnSynTimeout?: number; 
  public get actionOnSynTimeout() {
    return this.getNumberAttribute('action_on_syn_timeout');
  }
  public set actionOnSynTimeout(value: number) {
    this._actionOnSynTimeout = value;
  }
  public resetActionOnSynTimeout() {
    this._actionOnSynTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionOnSynTimeoutInput() {
    return this._actionOnSynTimeout;
  }
}
export interface DdosTemplateTcpDropKnownRespSrcPortCfg {
  /**
  * Drop well-known if src-port is less than 1024
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#drop_known_resp_src_port DdosTemplateTcp#drop_known_resp_src_port}
  */
  readonly dropKnownRespSrcPort?: number;
  /**
  * excluding src port equal destination port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#exclude_src_resp_port DdosTemplateTcp#exclude_src_resp_port}
  */
  readonly excludeSrcRespPort?: number;
}

export function ddosTemplateTcpDropKnownRespSrcPortCfgToTerraform(struct?: DdosTemplateTcpDropKnownRespSrcPortCfgOutputReference | DdosTemplateTcpDropKnownRespSrcPortCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drop_known_resp_src_port: cdktf.numberToTerraform(struct!.dropKnownRespSrcPort),
    exclude_src_resp_port: cdktf.numberToTerraform(struct!.excludeSrcRespPort),
  }
}


export function ddosTemplateTcpDropKnownRespSrcPortCfgToHclTerraform(struct?: DdosTemplateTcpDropKnownRespSrcPortCfgOutputReference | DdosTemplateTcpDropKnownRespSrcPortCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drop_known_resp_src_port: {
      value: cdktf.numberToHclTerraform(struct!.dropKnownRespSrcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exclude_src_resp_port: {
      value: cdktf.numberToHclTerraform(struct!.excludeSrcRespPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateTcpDropKnownRespSrcPortCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateTcpDropKnownRespSrcPortCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dropKnownRespSrcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropKnownRespSrcPort = this._dropKnownRespSrcPort;
    }
    if (this._excludeSrcRespPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeSrcRespPort = this._excludeSrcRespPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateTcpDropKnownRespSrcPortCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dropKnownRespSrcPort = undefined;
      this._excludeSrcRespPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dropKnownRespSrcPort = value.dropKnownRespSrcPort;
      this._excludeSrcRespPort = value.excludeSrcRespPort;
    }
  }

  // drop_known_resp_src_port - computed: false, optional: true, required: false
  private _dropKnownRespSrcPort?: number; 
  public get dropKnownRespSrcPort() {
    return this.getNumberAttribute('drop_known_resp_src_port');
  }
  public set dropKnownRespSrcPort(value: number) {
    this._dropKnownRespSrcPort = value;
  }
  public resetDropKnownRespSrcPort() {
    this._dropKnownRespSrcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropKnownRespSrcPortInput() {
    return this._dropKnownRespSrcPort;
  }

  // exclude_src_resp_port - computed: false, optional: true, required: false
  private _excludeSrcRespPort?: number; 
  public get excludeSrcRespPort() {
    return this.getNumberAttribute('exclude_src_resp_port');
  }
  public set excludeSrcRespPort(value: number) {
    this._excludeSrcRespPort = value;
  }
  public resetExcludeSrcRespPort() {
    this._excludeSrcRespPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeSrcRespPortInput() {
    return this._excludeSrcRespPort;
  }
}
export interface DdosTemplateTcpDstRateLimitSynRateLimit {
  /**
  * 'drop': Drop packets for syn-rate exceed (Default); 'ignore': Ignore syn-rate-exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#dst_syn_rate_action DdosTemplateTcp#dst_syn_rate_action}
  */
  readonly dstSynRateAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#dst_syn_rate_limit DdosTemplateTcp#dst_syn_rate_limit}
  */
  readonly dstSynRateLimit?: number;
}

export function ddosTemplateTcpDstRateLimitSynRateLimitToTerraform(struct?: DdosTemplateTcpDstRateLimitSynRateLimitOutputReference | DdosTemplateTcpDstRateLimitSynRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_syn_rate_action: cdktf.stringToTerraform(struct!.dstSynRateAction),
    dst_syn_rate_limit: cdktf.numberToTerraform(struct!.dstSynRateLimit),
  }
}


export function ddosTemplateTcpDstRateLimitSynRateLimitToHclTerraform(struct?: DdosTemplateTcpDstRateLimitSynRateLimitOutputReference | DdosTemplateTcpDstRateLimitSynRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_syn_rate_action: {
      value: cdktf.stringToHclTerraform(struct!.dstSynRateAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_syn_rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.dstSynRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateTcpDstRateLimitSynRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateTcpDstRateLimitSynRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstSynRateAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSynRateAction = this._dstSynRateAction;
    }
    if (this._dstSynRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSynRateLimit = this._dstSynRateLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateTcpDstRateLimitSynRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dstSynRateAction = undefined;
      this._dstSynRateLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dstSynRateAction = value.dstSynRateAction;
      this._dstSynRateLimit = value.dstSynRateLimit;
    }
  }

  // dst_syn_rate_action - computed: false, optional: true, required: false
  private _dstSynRateAction?: string; 
  public get dstSynRateAction() {
    return this.getStringAttribute('dst_syn_rate_action');
  }
  public set dstSynRateAction(value: string) {
    this._dstSynRateAction = value;
  }
  public resetDstSynRateAction() {
    this._dstSynRateAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSynRateActionInput() {
    return this._dstSynRateAction;
  }

  // dst_syn_rate_limit - computed: false, optional: true, required: false
  private _dstSynRateLimit?: number; 
  public get dstSynRateLimit() {
    return this.getNumberAttribute('dst_syn_rate_limit');
  }
  public set dstSynRateLimit(value: number) {
    this._dstSynRateLimit = value;
  }
  public resetDstSynRateLimit() {
    this._dstSynRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSynRateLimitInput() {
    return this._dstSynRateLimit;
  }
}
export interface DdosTemplateTcpDstRateLimit {
  /**
  * syn_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#syn_rate_limit DdosTemplateTcp#syn_rate_limit}
  */
  readonly synRateLimit?: DdosTemplateTcpDstRateLimitSynRateLimit;
}

export function ddosTemplateTcpDstRateLimitToTerraform(struct?: DdosTemplateTcpDstRateLimitOutputReference | DdosTemplateTcpDstRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    syn_rate_limit: ddosTemplateTcpDstRateLimitSynRateLimitToTerraform(struct!.synRateLimit),
  }
}


export function ddosTemplateTcpDstRateLimitToHclTerraform(struct?: DdosTemplateTcpDstRateLimitOutputReference | DdosTemplateTcpDstRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    syn_rate_limit: {
      value: ddosTemplateTcpDstRateLimitSynRateLimitToHclTerraform(struct!.synRateLimit),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateTcpDstRateLimitSynRateLimitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateTcpDstRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateTcpDstRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._synRateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.synRateLimit = this._synRateLimit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateTcpDstRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._synRateLimit.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._synRateLimit.internalValue = value.synRateLimit;
    }
  }

  // syn_rate_limit - computed: false, optional: true, required: false
  private _synRateLimit = new DdosTemplateTcpDstRateLimitSynRateLimitOutputReference(this, "syn_rate_limit");
  public get synRateLimit() {
    return this._synRateLimit;
  }
  public putSynRateLimit(value: DdosTemplateTcpDstRateLimitSynRateLimit) {
    this._synRateLimit.internalValue = value;
  }
  public resetSynRateLimit() {
    this._synRateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synRateLimitInput() {
    return this._synRateLimit.internalValue;
  }
}
export interface DdosTemplateTcpDst {
  /**
  * rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#rate_limit DdosTemplateTcp#rate_limit}
  */
  readonly rateLimit?: DdosTemplateTcpDstRateLimit;
}

export function ddosTemplateTcpDstToTerraform(struct?: DdosTemplateTcpDstOutputReference | DdosTemplateTcpDst): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rate_limit: ddosTemplateTcpDstRateLimitToTerraform(struct!.rateLimit),
  }
}


export function ddosTemplateTcpDstToHclTerraform(struct?: DdosTemplateTcpDstOutputReference | DdosTemplateTcpDst): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rate_limit: {
      value: ddosTemplateTcpDstRateLimitToHclTerraform(struct!.rateLimit),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateTcpDstRateLimitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateTcpDstOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateTcpDst | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateTcpDst | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rateLimit.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rateLimit.internalValue = value.rateLimit;
    }
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit = new DdosTemplateTcpDstRateLimitOutputReference(this, "rate_limit");
  public get rateLimit() {
    return this._rateLimit;
  }
  public putRateLimit(value: DdosTemplateTcpDstRateLimit) {
    this._rateLimit.internalValue = value;
  }
  public resetRateLimit() {
    this._rateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit.internalValue;
  }
}
export interface DdosTemplateTcpFilterListStruct {
  /**
  * Filter Expression using Berkeley Packet Filter syntax
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#byte_offset_filter DdosTemplateTcp#byte_offset_filter}
  */
  readonly byteOffsetFilter?: string;
  /**
  * 'blacklist-src': Also blacklist the source when action is taken; 'whitelist-src': Whitelist the source after filter passes, packets are dropped until then; 'count-only': Take no action and continue processing the next filter;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#tcp_filter_action DdosTemplateTcp#tcp_filter_action}
  */
  readonly tcpFilterAction?: string;
  /**
  * Regex Expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#tcp_filter_regex DdosTemplateTcp#tcp_filter_regex}
  */
  readonly tcpFilterRegex?: string;
  /**
  * Sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#tcp_filter_seq DdosTemplateTcp#tcp_filter_seq}
  */
  readonly tcpFilterSeq: number;
  /**
  * action taken when it does not match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#tcp_filter_unmatched DdosTemplateTcp#tcp_filter_unmatched}
  */
  readonly tcpFilterUnmatched?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#user_tag DdosTemplateTcp#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#uuid DdosTemplateTcp#uuid}
  */
  readonly uuid?: string;
}

export function ddosTemplateTcpFilterListStructToTerraform(struct?: DdosTemplateTcpFilterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    byte_offset_filter: cdktf.stringToTerraform(struct!.byteOffsetFilter),
    tcp_filter_action: cdktf.stringToTerraform(struct!.tcpFilterAction),
    tcp_filter_regex: cdktf.stringToTerraform(struct!.tcpFilterRegex),
    tcp_filter_seq: cdktf.numberToTerraform(struct!.tcpFilterSeq),
    tcp_filter_unmatched: cdktf.numberToTerraform(struct!.tcpFilterUnmatched),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosTemplateTcpFilterListStructToHclTerraform(struct?: DdosTemplateTcpFilterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    byte_offset_filter: {
      value: cdktf.stringToHclTerraform(struct!.byteOffsetFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_filter_action: {
      value: cdktf.stringToHclTerraform(struct!.tcpFilterAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_filter_regex: {
      value: cdktf.stringToHclTerraform(struct!.tcpFilterRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_filter_seq: {
      value: cdktf.numberToHclTerraform(struct!.tcpFilterSeq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_filter_unmatched: {
      value: cdktf.numberToHclTerraform(struct!.tcpFilterUnmatched),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateTcpFilterListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosTemplateTcpFilterListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._byteOffsetFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.byteOffsetFilter = this._byteOffsetFilter;
    }
    if (this._tcpFilterAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFilterAction = this._tcpFilterAction;
    }
    if (this._tcpFilterRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFilterRegex = this._tcpFilterRegex;
    }
    if (this._tcpFilterSeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFilterSeq = this._tcpFilterSeq;
    }
    if (this._tcpFilterUnmatched !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFilterUnmatched = this._tcpFilterUnmatched;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateTcpFilterListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._byteOffsetFilter = undefined;
      this._tcpFilterAction = undefined;
      this._tcpFilterRegex = undefined;
      this._tcpFilterSeq = undefined;
      this._tcpFilterUnmatched = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._byteOffsetFilter = value.byteOffsetFilter;
      this._tcpFilterAction = value.tcpFilterAction;
      this._tcpFilterRegex = value.tcpFilterRegex;
      this._tcpFilterSeq = value.tcpFilterSeq;
      this._tcpFilterUnmatched = value.tcpFilterUnmatched;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
    }
  }

  // byte_offset_filter - computed: false, optional: true, required: false
  private _byteOffsetFilter?: string; 
  public get byteOffsetFilter() {
    return this.getStringAttribute('byte_offset_filter');
  }
  public set byteOffsetFilter(value: string) {
    this._byteOffsetFilter = value;
  }
  public resetByteOffsetFilter() {
    this._byteOffsetFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byteOffsetFilterInput() {
    return this._byteOffsetFilter;
  }

  // tcp_filter_action - computed: false, optional: true, required: false
  private _tcpFilterAction?: string; 
  public get tcpFilterAction() {
    return this.getStringAttribute('tcp_filter_action');
  }
  public set tcpFilterAction(value: string) {
    this._tcpFilterAction = value;
  }
  public resetTcpFilterAction() {
    this._tcpFilterAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFilterActionInput() {
    return this._tcpFilterAction;
  }

  // tcp_filter_regex - computed: false, optional: true, required: false
  private _tcpFilterRegex?: string; 
  public get tcpFilterRegex() {
    return this.getStringAttribute('tcp_filter_regex');
  }
  public set tcpFilterRegex(value: string) {
    this._tcpFilterRegex = value;
  }
  public resetTcpFilterRegex() {
    this._tcpFilterRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFilterRegexInput() {
    return this._tcpFilterRegex;
  }

  // tcp_filter_seq - computed: false, optional: false, required: true
  private _tcpFilterSeq?: number; 
  public get tcpFilterSeq() {
    return this.getNumberAttribute('tcp_filter_seq');
  }
  public set tcpFilterSeq(value: number) {
    this._tcpFilterSeq = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFilterSeqInput() {
    return this._tcpFilterSeq;
  }

  // tcp_filter_unmatched - computed: false, optional: true, required: false
  private _tcpFilterUnmatched?: number; 
  public get tcpFilterUnmatched() {
    return this.getNumberAttribute('tcp_filter_unmatched');
  }
  public set tcpFilterUnmatched(value: number) {
    this._tcpFilterUnmatched = value;
  }
  public resetTcpFilterUnmatched() {
    this._tcpFilterUnmatched = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFilterUnmatchedInput() {
    return this._tcpFilterUnmatched;
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
}

export class DdosTemplateTcpFilterListStructList extends cdktf.ComplexList {
  public internalValue? : DdosTemplateTcpFilterListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosTemplateTcpFilterListStructOutputReference {
    return new DdosTemplateTcpFilterListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosTemplateTcpProgressionTrackingMitigationConnectionTracking {
  /**
  * Set the maximum duration time (in unit of 100ms, up to 24 hours)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#conn_duration_max DdosTemplateTcp#conn_duration_max}
  */
  readonly connDurationMax?: number;
  /**
  * Set the minimum duration time (in unit of 100ms, up to 24 hours)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#conn_duration_min DdosTemplateTcp#conn_duration_min}
  */
  readonly connDurationMin?: number;
  /**
  * Set the maximum total received byte
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#conn_rcvd_max DdosTemplateTcp#conn_rcvd_max}
  */
  readonly connRcvdMax?: number;
  /**
  * Set the minimum total received byte
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#conn_rcvd_min DdosTemplateTcp#conn_rcvd_min}
  */
  readonly connRcvdMin?: number;
  /**
  * Set the maximum received to sent ratio (in unit of 0.1% [1:1000])
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#conn_rcvd_sent_ratio_max DdosTemplateTcp#conn_rcvd_sent_ratio_max}
  */
  readonly connRcvdSentRatioMax?: number;
  /**
  * Set the minimum received to sent ratio (in unit of 0.1% [1:1000])
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#conn_rcvd_sent_ratio_min DdosTemplateTcp#conn_rcvd_sent_ratio_min}
  */
  readonly connRcvdSentRatioMin?: number;
  /**
  * Set the maximum total sent byte
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#conn_sent_max DdosTemplateTcp#conn_sent_max}
  */
  readonly connSentMax?: number;
  /**
  * Set the minimum total sent byte
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#conn_sent_min DdosTemplateTcp#conn_sent_min}
  */
  readonly connSentMin?: number;
  /**
  * Set the violation threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#conn_violation DdosTemplateTcp#conn_violation}
  */
  readonly connViolation?: number;
  /**
  * 'drop': Drop packets for progression tracking violation exceed (Default); 'blacklist-src': Blacklist-src for progression tracking violation exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#progression_tracking_conn_action DdosTemplateTcp#progression_tracking_conn_action}
  */
  readonly progressionTrackingConnAction?: string;
  /**
  * Configure action-list to take when progression tracking violation exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#progression_tracking_conn_action_list_name DdosTemplateTcp#progression_tracking_conn_action_list_name}
  */
  readonly progressionTrackingConnActionListName?: string;
  /**
  * 'enable-check': Enable General Progression Tracking per Connection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#progression_tracking_conn_enabled DdosTemplateTcp#progression_tracking_conn_enabled}
  */
  readonly progressionTrackingConnEnabled?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#uuid DdosTemplateTcp#uuid}
  */
  readonly uuid?: string;
}

export function ddosTemplateTcpProgressionTrackingMitigationConnectionTrackingToTerraform(struct?: DdosTemplateTcpProgressionTrackingMitigationConnectionTrackingOutputReference | DdosTemplateTcpProgressionTrackingMitigationConnectionTracking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conn_duration_max: cdktf.numberToTerraform(struct!.connDurationMax),
    conn_duration_min: cdktf.numberToTerraform(struct!.connDurationMin),
    conn_rcvd_max: cdktf.numberToTerraform(struct!.connRcvdMax),
    conn_rcvd_min: cdktf.numberToTerraform(struct!.connRcvdMin),
    conn_rcvd_sent_ratio_max: cdktf.numberToTerraform(struct!.connRcvdSentRatioMax),
    conn_rcvd_sent_ratio_min: cdktf.numberToTerraform(struct!.connRcvdSentRatioMin),
    conn_sent_max: cdktf.numberToTerraform(struct!.connSentMax),
    conn_sent_min: cdktf.numberToTerraform(struct!.connSentMin),
    conn_violation: cdktf.numberToTerraform(struct!.connViolation),
    progression_tracking_conn_action: cdktf.stringToTerraform(struct!.progressionTrackingConnAction),
    progression_tracking_conn_action_list_name: cdktf.stringToTerraform(struct!.progressionTrackingConnActionListName),
    progression_tracking_conn_enabled: cdktf.stringToTerraform(struct!.progressionTrackingConnEnabled),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosTemplateTcpProgressionTrackingMitigationConnectionTrackingToHclTerraform(struct?: DdosTemplateTcpProgressionTrackingMitigationConnectionTrackingOutputReference | DdosTemplateTcpProgressionTrackingMitigationConnectionTracking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conn_duration_max: {
      value: cdktf.numberToHclTerraform(struct!.connDurationMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_duration_min: {
      value: cdktf.numberToHclTerraform(struct!.connDurationMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_rcvd_max: {
      value: cdktf.numberToHclTerraform(struct!.connRcvdMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_rcvd_min: {
      value: cdktf.numberToHclTerraform(struct!.connRcvdMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_rcvd_sent_ratio_max: {
      value: cdktf.numberToHclTerraform(struct!.connRcvdSentRatioMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_rcvd_sent_ratio_min: {
      value: cdktf.numberToHclTerraform(struct!.connRcvdSentRatioMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_sent_max: {
      value: cdktf.numberToHclTerraform(struct!.connSentMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_sent_min: {
      value: cdktf.numberToHclTerraform(struct!.connSentMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_violation: {
      value: cdktf.numberToHclTerraform(struct!.connViolation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    progression_tracking_conn_action: {
      value: cdktf.stringToHclTerraform(struct!.progressionTrackingConnAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    progression_tracking_conn_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.progressionTrackingConnActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    progression_tracking_conn_enabled: {
      value: cdktf.stringToHclTerraform(struct!.progressionTrackingConnEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateTcpProgressionTrackingMitigationConnectionTrackingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateTcpProgressionTrackingMitigationConnectionTracking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connDurationMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.connDurationMax = this._connDurationMax;
    }
    if (this._connDurationMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.connDurationMin = this._connDurationMin;
    }
    if (this._connRcvdMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.connRcvdMax = this._connRcvdMax;
    }
    if (this._connRcvdMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.connRcvdMin = this._connRcvdMin;
    }
    if (this._connRcvdSentRatioMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.connRcvdSentRatioMax = this._connRcvdSentRatioMax;
    }
    if (this._connRcvdSentRatioMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.connRcvdSentRatioMin = this._connRcvdSentRatioMin;
    }
    if (this._connSentMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.connSentMax = this._connSentMax;
    }
    if (this._connSentMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.connSentMin = this._connSentMin;
    }
    if (this._connViolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.connViolation = this._connViolation;
    }
    if (this._progressionTrackingConnAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.progressionTrackingConnAction = this._progressionTrackingConnAction;
    }
    if (this._progressionTrackingConnActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.progressionTrackingConnActionListName = this._progressionTrackingConnActionListName;
    }
    if (this._progressionTrackingConnEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.progressionTrackingConnEnabled = this._progressionTrackingConnEnabled;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateTcpProgressionTrackingMitigationConnectionTracking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connDurationMax = undefined;
      this._connDurationMin = undefined;
      this._connRcvdMax = undefined;
      this._connRcvdMin = undefined;
      this._connRcvdSentRatioMax = undefined;
      this._connRcvdSentRatioMin = undefined;
      this._connSentMax = undefined;
      this._connSentMin = undefined;
      this._connViolation = undefined;
      this._progressionTrackingConnAction = undefined;
      this._progressionTrackingConnActionListName = undefined;
      this._progressionTrackingConnEnabled = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connDurationMax = value.connDurationMax;
      this._connDurationMin = value.connDurationMin;
      this._connRcvdMax = value.connRcvdMax;
      this._connRcvdMin = value.connRcvdMin;
      this._connRcvdSentRatioMax = value.connRcvdSentRatioMax;
      this._connRcvdSentRatioMin = value.connRcvdSentRatioMin;
      this._connSentMax = value.connSentMax;
      this._connSentMin = value.connSentMin;
      this._connViolation = value.connViolation;
      this._progressionTrackingConnAction = value.progressionTrackingConnAction;
      this._progressionTrackingConnActionListName = value.progressionTrackingConnActionListName;
      this._progressionTrackingConnEnabled = value.progressionTrackingConnEnabled;
      this._uuid = value.uuid;
    }
  }

  // conn_duration_max - computed: false, optional: true, required: false
  private _connDurationMax?: number; 
  public get connDurationMax() {
    return this.getNumberAttribute('conn_duration_max');
  }
  public set connDurationMax(value: number) {
    this._connDurationMax = value;
  }
  public resetConnDurationMax() {
    this._connDurationMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connDurationMaxInput() {
    return this._connDurationMax;
  }

  // conn_duration_min - computed: false, optional: true, required: false
  private _connDurationMin?: number; 
  public get connDurationMin() {
    return this.getNumberAttribute('conn_duration_min');
  }
  public set connDurationMin(value: number) {
    this._connDurationMin = value;
  }
  public resetConnDurationMin() {
    this._connDurationMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connDurationMinInput() {
    return this._connDurationMin;
  }

  // conn_rcvd_max - computed: false, optional: true, required: false
  private _connRcvdMax?: number; 
  public get connRcvdMax() {
    return this.getNumberAttribute('conn_rcvd_max');
  }
  public set connRcvdMax(value: number) {
    this._connRcvdMax = value;
  }
  public resetConnRcvdMax() {
    this._connRcvdMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connRcvdMaxInput() {
    return this._connRcvdMax;
  }

  // conn_rcvd_min - computed: false, optional: true, required: false
  private _connRcvdMin?: number; 
  public get connRcvdMin() {
    return this.getNumberAttribute('conn_rcvd_min');
  }
  public set connRcvdMin(value: number) {
    this._connRcvdMin = value;
  }
  public resetConnRcvdMin() {
    this._connRcvdMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connRcvdMinInput() {
    return this._connRcvdMin;
  }

  // conn_rcvd_sent_ratio_max - computed: false, optional: true, required: false
  private _connRcvdSentRatioMax?: number; 
  public get connRcvdSentRatioMax() {
    return this.getNumberAttribute('conn_rcvd_sent_ratio_max');
  }
  public set connRcvdSentRatioMax(value: number) {
    this._connRcvdSentRatioMax = value;
  }
  public resetConnRcvdSentRatioMax() {
    this._connRcvdSentRatioMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connRcvdSentRatioMaxInput() {
    return this._connRcvdSentRatioMax;
  }

  // conn_rcvd_sent_ratio_min - computed: false, optional: true, required: false
  private _connRcvdSentRatioMin?: number; 
  public get connRcvdSentRatioMin() {
    return this.getNumberAttribute('conn_rcvd_sent_ratio_min');
  }
  public set connRcvdSentRatioMin(value: number) {
    this._connRcvdSentRatioMin = value;
  }
  public resetConnRcvdSentRatioMin() {
    this._connRcvdSentRatioMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connRcvdSentRatioMinInput() {
    return this._connRcvdSentRatioMin;
  }

  // conn_sent_max - computed: false, optional: true, required: false
  private _connSentMax?: number; 
  public get connSentMax() {
    return this.getNumberAttribute('conn_sent_max');
  }
  public set connSentMax(value: number) {
    this._connSentMax = value;
  }
  public resetConnSentMax() {
    this._connSentMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connSentMaxInput() {
    return this._connSentMax;
  }

  // conn_sent_min - computed: false, optional: true, required: false
  private _connSentMin?: number; 
  public get connSentMin() {
    return this.getNumberAttribute('conn_sent_min');
  }
  public set connSentMin(value: number) {
    this._connSentMin = value;
  }
  public resetConnSentMin() {
    this._connSentMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connSentMinInput() {
    return this._connSentMin;
  }

  // conn_violation - computed: false, optional: true, required: false
  private _connViolation?: number; 
  public get connViolation() {
    return this.getNumberAttribute('conn_violation');
  }
  public set connViolation(value: number) {
    this._connViolation = value;
  }
  public resetConnViolation() {
    this._connViolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connViolationInput() {
    return this._connViolation;
  }

  // progression_tracking_conn_action - computed: false, optional: true, required: false
  private _progressionTrackingConnAction?: string; 
  public get progressionTrackingConnAction() {
    return this.getStringAttribute('progression_tracking_conn_action');
  }
  public set progressionTrackingConnAction(value: string) {
    this._progressionTrackingConnAction = value;
  }
  public resetProgressionTrackingConnAction() {
    this._progressionTrackingConnAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingConnActionInput() {
    return this._progressionTrackingConnAction;
  }

  // progression_tracking_conn_action_list_name - computed: false, optional: true, required: false
  private _progressionTrackingConnActionListName?: string; 
  public get progressionTrackingConnActionListName() {
    return this.getStringAttribute('progression_tracking_conn_action_list_name');
  }
  public set progressionTrackingConnActionListName(value: string) {
    this._progressionTrackingConnActionListName = value;
  }
  public resetProgressionTrackingConnActionListName() {
    this._progressionTrackingConnActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingConnActionListNameInput() {
    return this._progressionTrackingConnActionListName;
  }

  // progression_tracking_conn_enabled - computed: false, optional: true, required: false
  private _progressionTrackingConnEnabled?: string; 
  public get progressionTrackingConnEnabled() {
    return this.getStringAttribute('progression_tracking_conn_enabled');
  }
  public set progressionTrackingConnEnabled(value: string) {
    this._progressionTrackingConnEnabled = value;
  }
  public resetProgressionTrackingConnEnabled() {
    this._progressionTrackingConnEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingConnEnabledInput() {
    return this._progressionTrackingConnEnabled;
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
}
export interface DdosTemplateTcpProgressionTrackingMitigationRequestTracking {
  /**
  * Set the maximum idle time before the first request (in unit of 100ms)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#first_request_max_time DdosTemplateTcp#first_request_max_time}
  */
  readonly firstRequestMaxTime?: number;
  /**
  * 'drop': Drop packets for progression tracking violation exceed (Default); 'blacklist-src': Blacklist-src for progression tracking violation exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#progression_tracking_req_action DdosTemplateTcp#progression_tracking_req_action}
  */
  readonly progressionTrackingReqAction?: string;
  /**
  * Configure action-list to take when progression tracking violation exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#progression_tracking_req_action_list_name DdosTemplateTcp#progression_tracking_req_action_list_name}
  */
  readonly progressionTrackingReqActionListName?: string;
  /**
  * 'enable-check': Enable General Progression Tracking per Request Response;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#progression_tracking_req_enabled DdosTemplateTcp#progression_tracking_req_enabled}
  */
  readonly progressionTrackingReqEnabled?: string;
  /**
  * Set the maximum request length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#request_length_max DdosTemplateTcp#request_length_max}
  */
  readonly requestLengthMax?: number;
  /**
  * Set the minimum request length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#request_length_min DdosTemplateTcp#request_length_min}
  */
  readonly requestLengthMin?: number;
  /**
  * 'enable': Enable Request Response Model; 'disable': Disable Request Response Model;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#request_response_model DdosTemplateTcp#request_response_model}
  */
  readonly requestResponseModel?: string;
  /**
  * Set the maximum request to response time (in unit of 100ms)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#request_to_response_max_time DdosTemplateTcp#request_to_response_max_time}
  */
  readonly requestToResponseMaxTime?: number;
  /**
  * Set the maximum response length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#response_length_max DdosTemplateTcp#response_length_max}
  */
  readonly responseLengthMax?: number;
  /**
  * Set the minimum response length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#response_length_min DdosTemplateTcp#response_length_min}
  */
  readonly responseLengthMin?: number;
  /**
  * Set the maximum response to request time (in unit of 100ms)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#response_to_request_max_time DdosTemplateTcp#response_to_request_max_time}
  */
  readonly responseToRequestMaxTime?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#uuid DdosTemplateTcp#uuid}
  */
  readonly uuid?: string;
  /**
  * Set the violation threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#violation DdosTemplateTcp#violation}
  */
  readonly violation?: number;
}

export function ddosTemplateTcpProgressionTrackingMitigationRequestTrackingToTerraform(struct?: DdosTemplateTcpProgressionTrackingMitigationRequestTrackingOutputReference | DdosTemplateTcpProgressionTrackingMitigationRequestTracking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    first_request_max_time: cdktf.numberToTerraform(struct!.firstRequestMaxTime),
    progression_tracking_req_action: cdktf.stringToTerraform(struct!.progressionTrackingReqAction),
    progression_tracking_req_action_list_name: cdktf.stringToTerraform(struct!.progressionTrackingReqActionListName),
    progression_tracking_req_enabled: cdktf.stringToTerraform(struct!.progressionTrackingReqEnabled),
    request_length_max: cdktf.numberToTerraform(struct!.requestLengthMax),
    request_length_min: cdktf.numberToTerraform(struct!.requestLengthMin),
    request_response_model: cdktf.stringToTerraform(struct!.requestResponseModel),
    request_to_response_max_time: cdktf.numberToTerraform(struct!.requestToResponseMaxTime),
    response_length_max: cdktf.numberToTerraform(struct!.responseLengthMax),
    response_length_min: cdktf.numberToTerraform(struct!.responseLengthMin),
    response_to_request_max_time: cdktf.numberToTerraform(struct!.responseToRequestMaxTime),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    violation: cdktf.numberToTerraform(struct!.violation),
  }
}


export function ddosTemplateTcpProgressionTrackingMitigationRequestTrackingToHclTerraform(struct?: DdosTemplateTcpProgressionTrackingMitigationRequestTrackingOutputReference | DdosTemplateTcpProgressionTrackingMitigationRequestTracking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    first_request_max_time: {
      value: cdktf.numberToHclTerraform(struct!.firstRequestMaxTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    progression_tracking_req_action: {
      value: cdktf.stringToHclTerraform(struct!.progressionTrackingReqAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    progression_tracking_req_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.progressionTrackingReqActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    progression_tracking_req_enabled: {
      value: cdktf.stringToHclTerraform(struct!.progressionTrackingReqEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_length_max: {
      value: cdktf.numberToHclTerraform(struct!.requestLengthMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_length_min: {
      value: cdktf.numberToHclTerraform(struct!.requestLengthMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_response_model: {
      value: cdktf.stringToHclTerraform(struct!.requestResponseModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_to_response_max_time: {
      value: cdktf.numberToHclTerraform(struct!.requestToResponseMaxTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_length_max: {
      value: cdktf.numberToHclTerraform(struct!.responseLengthMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_length_min: {
      value: cdktf.numberToHclTerraform(struct!.responseLengthMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_to_request_max_time: {
      value: cdktf.numberToHclTerraform(struct!.responseToRequestMaxTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    violation: {
      value: cdktf.numberToHclTerraform(struct!.violation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateTcpProgressionTrackingMitigationRequestTrackingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateTcpProgressionTrackingMitigationRequestTracking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._firstRequestMaxTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstRequestMaxTime = this._firstRequestMaxTime;
    }
    if (this._progressionTrackingReqAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.progressionTrackingReqAction = this._progressionTrackingReqAction;
    }
    if (this._progressionTrackingReqActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.progressionTrackingReqActionListName = this._progressionTrackingReqActionListName;
    }
    if (this._progressionTrackingReqEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.progressionTrackingReqEnabled = this._progressionTrackingReqEnabled;
    }
    if (this._requestLengthMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestLengthMax = this._requestLengthMax;
    }
    if (this._requestLengthMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestLengthMin = this._requestLengthMin;
    }
    if (this._requestResponseModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestResponseModel = this._requestResponseModel;
    }
    if (this._requestToResponseMaxTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestToResponseMaxTime = this._requestToResponseMaxTime;
    }
    if (this._responseLengthMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseLengthMax = this._responseLengthMax;
    }
    if (this._responseLengthMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseLengthMin = this._responseLengthMin;
    }
    if (this._responseToRequestMaxTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseToRequestMaxTime = this._responseToRequestMaxTime;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._violation !== undefined) {
      hasAnyValues = true;
      internalValueResult.violation = this._violation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateTcpProgressionTrackingMitigationRequestTracking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._firstRequestMaxTime = undefined;
      this._progressionTrackingReqAction = undefined;
      this._progressionTrackingReqActionListName = undefined;
      this._progressionTrackingReqEnabled = undefined;
      this._requestLengthMax = undefined;
      this._requestLengthMin = undefined;
      this._requestResponseModel = undefined;
      this._requestToResponseMaxTime = undefined;
      this._responseLengthMax = undefined;
      this._responseLengthMin = undefined;
      this._responseToRequestMaxTime = undefined;
      this._uuid = undefined;
      this._violation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._firstRequestMaxTime = value.firstRequestMaxTime;
      this._progressionTrackingReqAction = value.progressionTrackingReqAction;
      this._progressionTrackingReqActionListName = value.progressionTrackingReqActionListName;
      this._progressionTrackingReqEnabled = value.progressionTrackingReqEnabled;
      this._requestLengthMax = value.requestLengthMax;
      this._requestLengthMin = value.requestLengthMin;
      this._requestResponseModel = value.requestResponseModel;
      this._requestToResponseMaxTime = value.requestToResponseMaxTime;
      this._responseLengthMax = value.responseLengthMax;
      this._responseLengthMin = value.responseLengthMin;
      this._responseToRequestMaxTime = value.responseToRequestMaxTime;
      this._uuid = value.uuid;
      this._violation = value.violation;
    }
  }

  // first_request_max_time - computed: false, optional: true, required: false
  private _firstRequestMaxTime?: number; 
  public get firstRequestMaxTime() {
    return this.getNumberAttribute('first_request_max_time');
  }
  public set firstRequestMaxTime(value: number) {
    this._firstRequestMaxTime = value;
  }
  public resetFirstRequestMaxTime() {
    this._firstRequestMaxTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstRequestMaxTimeInput() {
    return this._firstRequestMaxTime;
  }

  // progression_tracking_req_action - computed: false, optional: true, required: false
  private _progressionTrackingReqAction?: string; 
  public get progressionTrackingReqAction() {
    return this.getStringAttribute('progression_tracking_req_action');
  }
  public set progressionTrackingReqAction(value: string) {
    this._progressionTrackingReqAction = value;
  }
  public resetProgressionTrackingReqAction() {
    this._progressionTrackingReqAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingReqActionInput() {
    return this._progressionTrackingReqAction;
  }

  // progression_tracking_req_action_list_name - computed: false, optional: true, required: false
  private _progressionTrackingReqActionListName?: string; 
  public get progressionTrackingReqActionListName() {
    return this.getStringAttribute('progression_tracking_req_action_list_name');
  }
  public set progressionTrackingReqActionListName(value: string) {
    this._progressionTrackingReqActionListName = value;
  }
  public resetProgressionTrackingReqActionListName() {
    this._progressionTrackingReqActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingReqActionListNameInput() {
    return this._progressionTrackingReqActionListName;
  }

  // progression_tracking_req_enabled - computed: false, optional: true, required: false
  private _progressionTrackingReqEnabled?: string; 
  public get progressionTrackingReqEnabled() {
    return this.getStringAttribute('progression_tracking_req_enabled');
  }
  public set progressionTrackingReqEnabled(value: string) {
    this._progressionTrackingReqEnabled = value;
  }
  public resetProgressionTrackingReqEnabled() {
    this._progressionTrackingReqEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingReqEnabledInput() {
    return this._progressionTrackingReqEnabled;
  }

  // request_length_max - computed: false, optional: true, required: false
  private _requestLengthMax?: number; 
  public get requestLengthMax() {
    return this.getNumberAttribute('request_length_max');
  }
  public set requestLengthMax(value: number) {
    this._requestLengthMax = value;
  }
  public resetRequestLengthMax() {
    this._requestLengthMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestLengthMaxInput() {
    return this._requestLengthMax;
  }

  // request_length_min - computed: false, optional: true, required: false
  private _requestLengthMin?: number; 
  public get requestLengthMin() {
    return this.getNumberAttribute('request_length_min');
  }
  public set requestLengthMin(value: number) {
    this._requestLengthMin = value;
  }
  public resetRequestLengthMin() {
    this._requestLengthMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestLengthMinInput() {
    return this._requestLengthMin;
  }

  // request_response_model - computed: false, optional: true, required: false
  private _requestResponseModel?: string; 
  public get requestResponseModel() {
    return this.getStringAttribute('request_response_model');
  }
  public set requestResponseModel(value: string) {
    this._requestResponseModel = value;
  }
  public resetRequestResponseModel() {
    this._requestResponseModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestResponseModelInput() {
    return this._requestResponseModel;
  }

  // request_to_response_max_time - computed: false, optional: true, required: false
  private _requestToResponseMaxTime?: number; 
  public get requestToResponseMaxTime() {
    return this.getNumberAttribute('request_to_response_max_time');
  }
  public set requestToResponseMaxTime(value: number) {
    this._requestToResponseMaxTime = value;
  }
  public resetRequestToResponseMaxTime() {
    this._requestToResponseMaxTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestToResponseMaxTimeInput() {
    return this._requestToResponseMaxTime;
  }

  // response_length_max - computed: false, optional: true, required: false
  private _responseLengthMax?: number; 
  public get responseLengthMax() {
    return this.getNumberAttribute('response_length_max');
  }
  public set responseLengthMax(value: number) {
    this._responseLengthMax = value;
  }
  public resetResponseLengthMax() {
    this._responseLengthMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseLengthMaxInput() {
    return this._responseLengthMax;
  }

  // response_length_min - computed: false, optional: true, required: false
  private _responseLengthMin?: number; 
  public get responseLengthMin() {
    return this.getNumberAttribute('response_length_min');
  }
  public set responseLengthMin(value: number) {
    this._responseLengthMin = value;
  }
  public resetResponseLengthMin() {
    this._responseLengthMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseLengthMinInput() {
    return this._responseLengthMin;
  }

  // response_to_request_max_time - computed: false, optional: true, required: false
  private _responseToRequestMaxTime?: number; 
  public get responseToRequestMaxTime() {
    return this.getNumberAttribute('response_to_request_max_time');
  }
  public set responseToRequestMaxTime(value: number) {
    this._responseToRequestMaxTime = value;
  }
  public resetResponseToRequestMaxTime() {
    this._responseToRequestMaxTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseToRequestMaxTimeInput() {
    return this._responseToRequestMaxTime;
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

  // violation - computed: false, optional: true, required: false
  private _violation?: number; 
  public get violation() {
    return this.getNumberAttribute('violation');
  }
  public set violation(value: number) {
    this._violation = value;
  }
  public resetViolation() {
    this._violation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get violationInput() {
    return this._violation;
  }
}
export interface DdosTemplateTcpProgressionTrackingMitigationSlowAttack {
  /**
  * Set client query time (in unit of 100ms). Suggested value larger than 30 secs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#init_request_max_time DdosTemplateTcp#init_request_max_time}
  */
  readonly initRequestMaxTime?: number;
  /**
  * Set server think time (in unit of 100ms). Suggested value larger than 45 secs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#init_response_max_time DdosTemplateTcp#init_response_max_time}
  */
  readonly initResponseMaxTime?: number;
  /**
  * 'drop': Drop packets for progression tracking violation exceed (Default); 'reset': Reset client connection; 'blacklist-src': Blacklist-src for progression tracking violation exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#progression_tracking_slow_action DdosTemplateTcp#progression_tracking_slow_action}
  */
  readonly progressionTrackingSlowAction?: string;
  /**
  * Configure action-list to take when progression tracking violation exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#progression_tracking_slow_action_list_name DdosTemplateTcp#progression_tracking_slow_action_list_name}
  */
  readonly progressionTrackingSlowActionListName?: string;
  /**
  * Set the transferred packets per response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#response_pkt_rate_max DdosTemplateTcp#response_pkt_rate_max}
  */
  readonly responsePktRateMax?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#uuid DdosTemplateTcp#uuid}
  */
  readonly uuid?: string;
}

export function ddosTemplateTcpProgressionTrackingMitigationSlowAttackToTerraform(struct?: DdosTemplateTcpProgressionTrackingMitigationSlowAttackOutputReference | DdosTemplateTcpProgressionTrackingMitigationSlowAttack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    init_request_max_time: cdktf.numberToTerraform(struct!.initRequestMaxTime),
    init_response_max_time: cdktf.numberToTerraform(struct!.initResponseMaxTime),
    progression_tracking_slow_action: cdktf.stringToTerraform(struct!.progressionTrackingSlowAction),
    progression_tracking_slow_action_list_name: cdktf.stringToTerraform(struct!.progressionTrackingSlowActionListName),
    response_pkt_rate_max: cdktf.numberToTerraform(struct!.responsePktRateMax),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosTemplateTcpProgressionTrackingMitigationSlowAttackToHclTerraform(struct?: DdosTemplateTcpProgressionTrackingMitigationSlowAttackOutputReference | DdosTemplateTcpProgressionTrackingMitigationSlowAttack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    init_request_max_time: {
      value: cdktf.numberToHclTerraform(struct!.initRequestMaxTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    init_response_max_time: {
      value: cdktf.numberToHclTerraform(struct!.initResponseMaxTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    progression_tracking_slow_action: {
      value: cdktf.stringToHclTerraform(struct!.progressionTrackingSlowAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    progression_tracking_slow_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.progressionTrackingSlowActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_pkt_rate_max: {
      value: cdktf.numberToHclTerraform(struct!.responsePktRateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateTcpProgressionTrackingMitigationSlowAttackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateTcpProgressionTrackingMitigationSlowAttack | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._initRequestMaxTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.initRequestMaxTime = this._initRequestMaxTime;
    }
    if (this._initResponseMaxTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.initResponseMaxTime = this._initResponseMaxTime;
    }
    if (this._progressionTrackingSlowAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.progressionTrackingSlowAction = this._progressionTrackingSlowAction;
    }
    if (this._progressionTrackingSlowActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.progressionTrackingSlowActionListName = this._progressionTrackingSlowActionListName;
    }
    if (this._responsePktRateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.responsePktRateMax = this._responsePktRateMax;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateTcpProgressionTrackingMitigationSlowAttack | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._initRequestMaxTime = undefined;
      this._initResponseMaxTime = undefined;
      this._progressionTrackingSlowAction = undefined;
      this._progressionTrackingSlowActionListName = undefined;
      this._responsePktRateMax = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._initRequestMaxTime = value.initRequestMaxTime;
      this._initResponseMaxTime = value.initResponseMaxTime;
      this._progressionTrackingSlowAction = value.progressionTrackingSlowAction;
      this._progressionTrackingSlowActionListName = value.progressionTrackingSlowActionListName;
      this._responsePktRateMax = value.responsePktRateMax;
      this._uuid = value.uuid;
    }
  }

  // init_request_max_time - computed: false, optional: true, required: false
  private _initRequestMaxTime?: number; 
  public get initRequestMaxTime() {
    return this.getNumberAttribute('init_request_max_time');
  }
  public set initRequestMaxTime(value: number) {
    this._initRequestMaxTime = value;
  }
  public resetInitRequestMaxTime() {
    this._initRequestMaxTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initRequestMaxTimeInput() {
    return this._initRequestMaxTime;
  }

  // init_response_max_time - computed: false, optional: true, required: false
  private _initResponseMaxTime?: number; 
  public get initResponseMaxTime() {
    return this.getNumberAttribute('init_response_max_time');
  }
  public set initResponseMaxTime(value: number) {
    this._initResponseMaxTime = value;
  }
  public resetInitResponseMaxTime() {
    this._initResponseMaxTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initResponseMaxTimeInput() {
    return this._initResponseMaxTime;
  }

  // progression_tracking_slow_action - computed: false, optional: true, required: false
  private _progressionTrackingSlowAction?: string; 
  public get progressionTrackingSlowAction() {
    return this.getStringAttribute('progression_tracking_slow_action');
  }
  public set progressionTrackingSlowAction(value: string) {
    this._progressionTrackingSlowAction = value;
  }
  public resetProgressionTrackingSlowAction() {
    this._progressionTrackingSlowAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingSlowActionInput() {
    return this._progressionTrackingSlowAction;
  }

  // progression_tracking_slow_action_list_name - computed: false, optional: true, required: false
  private _progressionTrackingSlowActionListName?: string; 
  public get progressionTrackingSlowActionListName() {
    return this.getStringAttribute('progression_tracking_slow_action_list_name');
  }
  public set progressionTrackingSlowActionListName(value: string) {
    this._progressionTrackingSlowActionListName = value;
  }
  public resetProgressionTrackingSlowActionListName() {
    this._progressionTrackingSlowActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingSlowActionListNameInput() {
    return this._progressionTrackingSlowActionListName;
  }

  // response_pkt_rate_max - computed: false, optional: true, required: false
  private _responsePktRateMax?: number; 
  public get responsePktRateMax() {
    return this.getNumberAttribute('response_pkt_rate_max');
  }
  public set responsePktRateMax(value: number) {
    this._responsePktRateMax = value;
  }
  public resetResponsePktRateMax() {
    this._responsePktRateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responsePktRateMaxInput() {
    return this._responsePktRateMax;
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
}
export interface DdosTemplateTcpProgressionTrackingMitigationTimeWindowTracking {
  /**
  * 'enable-check': Enable Progression Tracking per Time Window;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#progression_tracking_win_enabled DdosTemplateTcp#progression_tracking_win_enabled}
  */
  readonly progressionTrackingWinEnabled?: string;
  /**
  * 'drop': Drop packets for progression tracking violation exceed (Default); 'blacklist-src': Blacklist-src for progression tracking violation exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#progression_tracking_windows_action DdosTemplateTcp#progression_tracking_windows_action}
  */
  readonly progressionTrackingWindowsAction?: string;
  /**
  * Configure action-list to take when progression tracking violation exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#progression_tracking_windows_action_list_name DdosTemplateTcp#progression_tracking_windows_action_list_name}
  */
  readonly progressionTrackingWindowsActionListName?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#uuid DdosTemplateTcp#uuid}
  */
  readonly uuid?: string;
  /**
  * Set the maximum total received byte
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#window_rcvd_max DdosTemplateTcp#window_rcvd_max}
  */
  readonly windowRcvdMax?: number;
  /**
  * Set the minimum total received byte
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#window_rcvd_min DdosTemplateTcp#window_rcvd_min}
  */
  readonly windowRcvdMin?: number;
  /**
  * Set the maximum received to sent ratio (in unit of 0.1% [1:1000])
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#window_rcvd_sent_ratio_max DdosTemplateTcp#window_rcvd_sent_ratio_max}
  */
  readonly windowRcvdSentRatioMax?: number;
  /**
  * Set the minimum received to sent ratio (in unit of 0.1% [1:1000])
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#window_rcvd_sent_ratio_min DdosTemplateTcp#window_rcvd_sent_ratio_min}
  */
  readonly windowRcvdSentRatioMin?: number;
  /**
  * Set the maximum total sent byte
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#window_sent_max DdosTemplateTcp#window_sent_max}
  */
  readonly windowSentMax?: number;
  /**
  * Set the minimum total sent byte
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#window_sent_min DdosTemplateTcp#window_sent_min}
  */
  readonly windowSentMin?: number;
  /**
  * Set the violation threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#window_violation DdosTemplateTcp#window_violation}
  */
  readonly windowViolation?: number;
}

export function ddosTemplateTcpProgressionTrackingMitigationTimeWindowTrackingToTerraform(struct?: DdosTemplateTcpProgressionTrackingMitigationTimeWindowTrackingOutputReference | DdosTemplateTcpProgressionTrackingMitigationTimeWindowTracking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    progression_tracking_win_enabled: cdktf.stringToTerraform(struct!.progressionTrackingWinEnabled),
    progression_tracking_windows_action: cdktf.stringToTerraform(struct!.progressionTrackingWindowsAction),
    progression_tracking_windows_action_list_name: cdktf.stringToTerraform(struct!.progressionTrackingWindowsActionListName),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    window_rcvd_max: cdktf.numberToTerraform(struct!.windowRcvdMax),
    window_rcvd_min: cdktf.numberToTerraform(struct!.windowRcvdMin),
    window_rcvd_sent_ratio_max: cdktf.numberToTerraform(struct!.windowRcvdSentRatioMax),
    window_rcvd_sent_ratio_min: cdktf.numberToTerraform(struct!.windowRcvdSentRatioMin),
    window_sent_max: cdktf.numberToTerraform(struct!.windowSentMax),
    window_sent_min: cdktf.numberToTerraform(struct!.windowSentMin),
    window_violation: cdktf.numberToTerraform(struct!.windowViolation),
  }
}


export function ddosTemplateTcpProgressionTrackingMitigationTimeWindowTrackingToHclTerraform(struct?: DdosTemplateTcpProgressionTrackingMitigationTimeWindowTrackingOutputReference | DdosTemplateTcpProgressionTrackingMitigationTimeWindowTracking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    progression_tracking_win_enabled: {
      value: cdktf.stringToHclTerraform(struct!.progressionTrackingWinEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    progression_tracking_windows_action: {
      value: cdktf.stringToHclTerraform(struct!.progressionTrackingWindowsAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    progression_tracking_windows_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.progressionTrackingWindowsActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    window_rcvd_max: {
      value: cdktf.numberToHclTerraform(struct!.windowRcvdMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window_rcvd_min: {
      value: cdktf.numberToHclTerraform(struct!.windowRcvdMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window_rcvd_sent_ratio_max: {
      value: cdktf.numberToHclTerraform(struct!.windowRcvdSentRatioMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window_rcvd_sent_ratio_min: {
      value: cdktf.numberToHclTerraform(struct!.windowRcvdSentRatioMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window_sent_max: {
      value: cdktf.numberToHclTerraform(struct!.windowSentMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window_sent_min: {
      value: cdktf.numberToHclTerraform(struct!.windowSentMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window_violation: {
      value: cdktf.numberToHclTerraform(struct!.windowViolation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateTcpProgressionTrackingMitigationTimeWindowTrackingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateTcpProgressionTrackingMitigationTimeWindowTracking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._progressionTrackingWinEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.progressionTrackingWinEnabled = this._progressionTrackingWinEnabled;
    }
    if (this._progressionTrackingWindowsAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.progressionTrackingWindowsAction = this._progressionTrackingWindowsAction;
    }
    if (this._progressionTrackingWindowsActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.progressionTrackingWindowsActionListName = this._progressionTrackingWindowsActionListName;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._windowRcvdMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowRcvdMax = this._windowRcvdMax;
    }
    if (this._windowRcvdMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowRcvdMin = this._windowRcvdMin;
    }
    if (this._windowRcvdSentRatioMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowRcvdSentRatioMax = this._windowRcvdSentRatioMax;
    }
    if (this._windowRcvdSentRatioMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowRcvdSentRatioMin = this._windowRcvdSentRatioMin;
    }
    if (this._windowSentMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowSentMax = this._windowSentMax;
    }
    if (this._windowSentMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowSentMin = this._windowSentMin;
    }
    if (this._windowViolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowViolation = this._windowViolation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateTcpProgressionTrackingMitigationTimeWindowTracking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._progressionTrackingWinEnabled = undefined;
      this._progressionTrackingWindowsAction = undefined;
      this._progressionTrackingWindowsActionListName = undefined;
      this._uuid = undefined;
      this._windowRcvdMax = undefined;
      this._windowRcvdMin = undefined;
      this._windowRcvdSentRatioMax = undefined;
      this._windowRcvdSentRatioMin = undefined;
      this._windowSentMax = undefined;
      this._windowSentMin = undefined;
      this._windowViolation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._progressionTrackingWinEnabled = value.progressionTrackingWinEnabled;
      this._progressionTrackingWindowsAction = value.progressionTrackingWindowsAction;
      this._progressionTrackingWindowsActionListName = value.progressionTrackingWindowsActionListName;
      this._uuid = value.uuid;
      this._windowRcvdMax = value.windowRcvdMax;
      this._windowRcvdMin = value.windowRcvdMin;
      this._windowRcvdSentRatioMax = value.windowRcvdSentRatioMax;
      this._windowRcvdSentRatioMin = value.windowRcvdSentRatioMin;
      this._windowSentMax = value.windowSentMax;
      this._windowSentMin = value.windowSentMin;
      this._windowViolation = value.windowViolation;
    }
  }

  // progression_tracking_win_enabled - computed: false, optional: true, required: false
  private _progressionTrackingWinEnabled?: string; 
  public get progressionTrackingWinEnabled() {
    return this.getStringAttribute('progression_tracking_win_enabled');
  }
  public set progressionTrackingWinEnabled(value: string) {
    this._progressionTrackingWinEnabled = value;
  }
  public resetProgressionTrackingWinEnabled() {
    this._progressionTrackingWinEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingWinEnabledInput() {
    return this._progressionTrackingWinEnabled;
  }

  // progression_tracking_windows_action - computed: false, optional: true, required: false
  private _progressionTrackingWindowsAction?: string; 
  public get progressionTrackingWindowsAction() {
    return this.getStringAttribute('progression_tracking_windows_action');
  }
  public set progressionTrackingWindowsAction(value: string) {
    this._progressionTrackingWindowsAction = value;
  }
  public resetProgressionTrackingWindowsAction() {
    this._progressionTrackingWindowsAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingWindowsActionInput() {
    return this._progressionTrackingWindowsAction;
  }

  // progression_tracking_windows_action_list_name - computed: false, optional: true, required: false
  private _progressionTrackingWindowsActionListName?: string; 
  public get progressionTrackingWindowsActionListName() {
    return this.getStringAttribute('progression_tracking_windows_action_list_name');
  }
  public set progressionTrackingWindowsActionListName(value: string) {
    this._progressionTrackingWindowsActionListName = value;
  }
  public resetProgressionTrackingWindowsActionListName() {
    this._progressionTrackingWindowsActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingWindowsActionListNameInput() {
    return this._progressionTrackingWindowsActionListName;
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

  // window_rcvd_max - computed: false, optional: true, required: false
  private _windowRcvdMax?: number; 
  public get windowRcvdMax() {
    return this.getNumberAttribute('window_rcvd_max');
  }
  public set windowRcvdMax(value: number) {
    this._windowRcvdMax = value;
  }
  public resetWindowRcvdMax() {
    this._windowRcvdMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowRcvdMaxInput() {
    return this._windowRcvdMax;
  }

  // window_rcvd_min - computed: false, optional: true, required: false
  private _windowRcvdMin?: number; 
  public get windowRcvdMin() {
    return this.getNumberAttribute('window_rcvd_min');
  }
  public set windowRcvdMin(value: number) {
    this._windowRcvdMin = value;
  }
  public resetWindowRcvdMin() {
    this._windowRcvdMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowRcvdMinInput() {
    return this._windowRcvdMin;
  }

  // window_rcvd_sent_ratio_max - computed: false, optional: true, required: false
  private _windowRcvdSentRatioMax?: number; 
  public get windowRcvdSentRatioMax() {
    return this.getNumberAttribute('window_rcvd_sent_ratio_max');
  }
  public set windowRcvdSentRatioMax(value: number) {
    this._windowRcvdSentRatioMax = value;
  }
  public resetWindowRcvdSentRatioMax() {
    this._windowRcvdSentRatioMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowRcvdSentRatioMaxInput() {
    return this._windowRcvdSentRatioMax;
  }

  // window_rcvd_sent_ratio_min - computed: false, optional: true, required: false
  private _windowRcvdSentRatioMin?: number; 
  public get windowRcvdSentRatioMin() {
    return this.getNumberAttribute('window_rcvd_sent_ratio_min');
  }
  public set windowRcvdSentRatioMin(value: number) {
    this._windowRcvdSentRatioMin = value;
  }
  public resetWindowRcvdSentRatioMin() {
    this._windowRcvdSentRatioMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowRcvdSentRatioMinInput() {
    return this._windowRcvdSentRatioMin;
  }

  // window_sent_max - computed: false, optional: true, required: false
  private _windowSentMax?: number; 
  public get windowSentMax() {
    return this.getNumberAttribute('window_sent_max');
  }
  public set windowSentMax(value: number) {
    this._windowSentMax = value;
  }
  public resetWindowSentMax() {
    this._windowSentMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowSentMaxInput() {
    return this._windowSentMax;
  }

  // window_sent_min - computed: false, optional: true, required: false
  private _windowSentMin?: number; 
  public get windowSentMin() {
    return this.getNumberAttribute('window_sent_min');
  }
  public set windowSentMin(value: number) {
    this._windowSentMin = value;
  }
  public resetWindowSentMin() {
    this._windowSentMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowSentMinInput() {
    return this._windowSentMin;
  }

  // window_violation - computed: false, optional: true, required: false
  private _windowViolation?: number; 
  public get windowViolation() {
    return this.getNumberAttribute('window_violation');
  }
  public set windowViolation(value: number) {
    this._windowViolation = value;
  }
  public resetWindowViolation() {
    this._windowViolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowViolationInput() {
    return this._windowViolation;
  }
}
export interface DdosTemplateTcpProgressionTrackingMitigation {
  /**
  * connection_tracking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#connection_tracking DdosTemplateTcp#connection_tracking}
  */
  readonly connectionTracking?: DdosTemplateTcpProgressionTrackingMitigationConnectionTracking;
  /**
  * request_tracking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#request_tracking DdosTemplateTcp#request_tracking}
  */
  readonly requestTracking?: DdosTemplateTcpProgressionTrackingMitigationRequestTracking;
  /**
  * slow_attack block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#slow_attack DdosTemplateTcp#slow_attack}
  */
  readonly slowAttack?: DdosTemplateTcpProgressionTrackingMitigationSlowAttack;
  /**
  * time_window_tracking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#time_window_tracking DdosTemplateTcp#time_window_tracking}
  */
  readonly timeWindowTracking?: DdosTemplateTcpProgressionTrackingMitigationTimeWindowTracking;
}

export function ddosTemplateTcpProgressionTrackingMitigationToTerraform(struct?: DdosTemplateTcpProgressionTrackingMitigationOutputReference | DdosTemplateTcpProgressionTrackingMitigation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_tracking: ddosTemplateTcpProgressionTrackingMitigationConnectionTrackingToTerraform(struct!.connectionTracking),
    request_tracking: ddosTemplateTcpProgressionTrackingMitigationRequestTrackingToTerraform(struct!.requestTracking),
    slow_attack: ddosTemplateTcpProgressionTrackingMitigationSlowAttackToTerraform(struct!.slowAttack),
    time_window_tracking: ddosTemplateTcpProgressionTrackingMitigationTimeWindowTrackingToTerraform(struct!.timeWindowTracking),
  }
}


export function ddosTemplateTcpProgressionTrackingMitigationToHclTerraform(struct?: DdosTemplateTcpProgressionTrackingMitigationOutputReference | DdosTemplateTcpProgressionTrackingMitigation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_tracking: {
      value: ddosTemplateTcpProgressionTrackingMitigationConnectionTrackingToHclTerraform(struct!.connectionTracking),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateTcpProgressionTrackingMitigationConnectionTrackingList",
    },
    request_tracking: {
      value: ddosTemplateTcpProgressionTrackingMitigationRequestTrackingToHclTerraform(struct!.requestTracking),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateTcpProgressionTrackingMitigationRequestTrackingList",
    },
    slow_attack: {
      value: ddosTemplateTcpProgressionTrackingMitigationSlowAttackToHclTerraform(struct!.slowAttack),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateTcpProgressionTrackingMitigationSlowAttackList",
    },
    time_window_tracking: {
      value: ddosTemplateTcpProgressionTrackingMitigationTimeWindowTrackingToHclTerraform(struct!.timeWindowTracking),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateTcpProgressionTrackingMitigationTimeWindowTrackingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateTcpProgressionTrackingMitigationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateTcpProgressionTrackingMitigation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionTracking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionTracking = this._connectionTracking?.internalValue;
    }
    if (this._requestTracking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTracking = this._requestTracking?.internalValue;
    }
    if (this._slowAttack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowAttack = this._slowAttack?.internalValue;
    }
    if (this._timeWindowTracking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindowTracking = this._timeWindowTracking?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateTcpProgressionTrackingMitigation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionTracking.internalValue = undefined;
      this._requestTracking.internalValue = undefined;
      this._slowAttack.internalValue = undefined;
      this._timeWindowTracking.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionTracking.internalValue = value.connectionTracking;
      this._requestTracking.internalValue = value.requestTracking;
      this._slowAttack.internalValue = value.slowAttack;
      this._timeWindowTracking.internalValue = value.timeWindowTracking;
    }
  }

  // connection_tracking - computed: false, optional: true, required: false
  private _connectionTracking = new DdosTemplateTcpProgressionTrackingMitigationConnectionTrackingOutputReference(this, "connection_tracking");
  public get connectionTracking() {
    return this._connectionTracking;
  }
  public putConnectionTracking(value: DdosTemplateTcpProgressionTrackingMitigationConnectionTracking) {
    this._connectionTracking.internalValue = value;
  }
  public resetConnectionTracking() {
    this._connectionTracking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTrackingInput() {
    return this._connectionTracking.internalValue;
  }

  // request_tracking - computed: false, optional: true, required: false
  private _requestTracking = new DdosTemplateTcpProgressionTrackingMitigationRequestTrackingOutputReference(this, "request_tracking");
  public get requestTracking() {
    return this._requestTracking;
  }
  public putRequestTracking(value: DdosTemplateTcpProgressionTrackingMitigationRequestTracking) {
    this._requestTracking.internalValue = value;
  }
  public resetRequestTracking() {
    this._requestTracking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTrackingInput() {
    return this._requestTracking.internalValue;
  }

  // slow_attack - computed: false, optional: true, required: false
  private _slowAttack = new DdosTemplateTcpProgressionTrackingMitigationSlowAttackOutputReference(this, "slow_attack");
  public get slowAttack() {
    return this._slowAttack;
  }
  public putSlowAttack(value: DdosTemplateTcpProgressionTrackingMitigationSlowAttack) {
    this._slowAttack.internalValue = value;
  }
  public resetSlowAttack() {
    this._slowAttack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowAttackInput() {
    return this._slowAttack.internalValue;
  }

  // time_window_tracking - computed: false, optional: true, required: false
  private _timeWindowTracking = new DdosTemplateTcpProgressionTrackingMitigationTimeWindowTrackingOutputReference(this, "time_window_tracking");
  public get timeWindowTracking() {
    return this._timeWindowTracking;
  }
  public putTimeWindowTracking(value: DdosTemplateTcpProgressionTrackingMitigationTimeWindowTracking) {
    this._timeWindowTracking.internalValue = value;
  }
  public resetTimeWindowTracking() {
    this._timeWindowTracking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowTrackingInput() {
    return this._timeWindowTracking.internalValue;
  }
}
export interface DdosTemplateTcpProgressionTrackingProfiling {
  /**
  * Enable auto-config progression tracking learning for connection model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#profiling_connection_life_model DdosTemplateTcp#profiling_connection_life_model}
  */
  readonly profilingConnectionLifeModel?: number;
  /**
  * Enable auto-config progression tracking learning for request response model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#profiling_request_response_model DdosTemplateTcp#profiling_request_response_model}
  */
  readonly profilingRequestResponseModel?: number;
  /**
  * Enable auto-config progression tracking learning for time window model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#profiling_time_window_model DdosTemplateTcp#profiling_time_window_model}
  */
  readonly profilingTimeWindowModel?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#uuid DdosTemplateTcp#uuid}
  */
  readonly uuid?: string;
}

export function ddosTemplateTcpProgressionTrackingProfilingToTerraform(struct?: DdosTemplateTcpProgressionTrackingProfilingOutputReference | DdosTemplateTcpProgressionTrackingProfiling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profiling_connection_life_model: cdktf.numberToTerraform(struct!.profilingConnectionLifeModel),
    profiling_request_response_model: cdktf.numberToTerraform(struct!.profilingRequestResponseModel),
    profiling_time_window_model: cdktf.numberToTerraform(struct!.profilingTimeWindowModel),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosTemplateTcpProgressionTrackingProfilingToHclTerraform(struct?: DdosTemplateTcpProgressionTrackingProfilingOutputReference | DdosTemplateTcpProgressionTrackingProfiling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profiling_connection_life_model: {
      value: cdktf.numberToHclTerraform(struct!.profilingConnectionLifeModel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    profiling_request_response_model: {
      value: cdktf.numberToHclTerraform(struct!.profilingRequestResponseModel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    profiling_time_window_model: {
      value: cdktf.numberToHclTerraform(struct!.profilingTimeWindowModel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateTcpProgressionTrackingProfilingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateTcpProgressionTrackingProfiling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profilingConnectionLifeModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.profilingConnectionLifeModel = this._profilingConnectionLifeModel;
    }
    if (this._profilingRequestResponseModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.profilingRequestResponseModel = this._profilingRequestResponseModel;
    }
    if (this._profilingTimeWindowModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.profilingTimeWindowModel = this._profilingTimeWindowModel;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateTcpProgressionTrackingProfiling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._profilingConnectionLifeModel = undefined;
      this._profilingRequestResponseModel = undefined;
      this._profilingTimeWindowModel = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._profilingConnectionLifeModel = value.profilingConnectionLifeModel;
      this._profilingRequestResponseModel = value.profilingRequestResponseModel;
      this._profilingTimeWindowModel = value.profilingTimeWindowModel;
      this._uuid = value.uuid;
    }
  }

  // profiling_connection_life_model - computed: false, optional: true, required: false
  private _profilingConnectionLifeModel?: number; 
  public get profilingConnectionLifeModel() {
    return this.getNumberAttribute('profiling_connection_life_model');
  }
  public set profilingConnectionLifeModel(value: number) {
    this._profilingConnectionLifeModel = value;
  }
  public resetProfilingConnectionLifeModel() {
    this._profilingConnectionLifeModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilingConnectionLifeModelInput() {
    return this._profilingConnectionLifeModel;
  }

  // profiling_request_response_model - computed: false, optional: true, required: false
  private _profilingRequestResponseModel?: number; 
  public get profilingRequestResponseModel() {
    return this.getNumberAttribute('profiling_request_response_model');
  }
  public set profilingRequestResponseModel(value: number) {
    this._profilingRequestResponseModel = value;
  }
  public resetProfilingRequestResponseModel() {
    this._profilingRequestResponseModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilingRequestResponseModelInput() {
    return this._profilingRequestResponseModel;
  }

  // profiling_time_window_model - computed: false, optional: true, required: false
  private _profilingTimeWindowModel?: number; 
  public get profilingTimeWindowModel() {
    return this.getNumberAttribute('profiling_time_window_model');
  }
  public set profilingTimeWindowModel(value: number) {
    this._profilingTimeWindowModel = value;
  }
  public resetProfilingTimeWindowModel() {
    this._profilingTimeWindowModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilingTimeWindowModelInput() {
    return this._profilingTimeWindowModel;
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
}
export interface DdosTemplateTcpProgressionTracking {
  /**
  * Ignore TLS handshake, support SSL-L4 port only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#ignore_tls_handshake DdosTemplateTcp#ignore_tls_handshake}
  */
  readonly ignoreTlsHandshake?: number;
  /**
  * 'enable-check': Enable Progression Tracking Check;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#progression_tracking_enabled DdosTemplateTcp#progression_tracking_enabled}
  */
  readonly progressionTrackingEnabled?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#uuid DdosTemplateTcp#uuid}
  */
  readonly uuid?: string;
  /**
  * mitigation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#mitigation DdosTemplateTcp#mitigation}
  */
  readonly mitigation?: DdosTemplateTcpProgressionTrackingMitigation;
  /**
  * profiling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#profiling DdosTemplateTcp#profiling}
  */
  readonly profiling?: DdosTemplateTcpProgressionTrackingProfiling;
}

export function ddosTemplateTcpProgressionTrackingToTerraform(struct?: DdosTemplateTcpProgressionTrackingOutputReference | DdosTemplateTcpProgressionTracking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_tls_handshake: cdktf.numberToTerraform(struct!.ignoreTlsHandshake),
    progression_tracking_enabled: cdktf.stringToTerraform(struct!.progressionTrackingEnabled),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    mitigation: ddosTemplateTcpProgressionTrackingMitigationToTerraform(struct!.mitigation),
    profiling: ddosTemplateTcpProgressionTrackingProfilingToTerraform(struct!.profiling),
  }
}


export function ddosTemplateTcpProgressionTrackingToHclTerraform(struct?: DdosTemplateTcpProgressionTrackingOutputReference | DdosTemplateTcpProgressionTracking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_tls_handshake: {
      value: cdktf.numberToHclTerraform(struct!.ignoreTlsHandshake),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    progression_tracking_enabled: {
      value: cdktf.stringToHclTerraform(struct!.progressionTrackingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mitigation: {
      value: ddosTemplateTcpProgressionTrackingMitigationToHclTerraform(struct!.mitigation),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateTcpProgressionTrackingMitigationList",
    },
    profiling: {
      value: ddosTemplateTcpProgressionTrackingProfilingToHclTerraform(struct!.profiling),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateTcpProgressionTrackingProfilingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateTcpProgressionTrackingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateTcpProgressionTracking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreTlsHandshake !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreTlsHandshake = this._ignoreTlsHandshake;
    }
    if (this._progressionTrackingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.progressionTrackingEnabled = this._progressionTrackingEnabled;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._mitigation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mitigation = this._mitigation?.internalValue;
    }
    if (this._profiling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.profiling = this._profiling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateTcpProgressionTracking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ignoreTlsHandshake = undefined;
      this._progressionTrackingEnabled = undefined;
      this._uuid = undefined;
      this._mitigation.internalValue = undefined;
      this._profiling.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ignoreTlsHandshake = value.ignoreTlsHandshake;
      this._progressionTrackingEnabled = value.progressionTrackingEnabled;
      this._uuid = value.uuid;
      this._mitigation.internalValue = value.mitigation;
      this._profiling.internalValue = value.profiling;
    }
  }

  // ignore_tls_handshake - computed: false, optional: true, required: false
  private _ignoreTlsHandshake?: number; 
  public get ignoreTlsHandshake() {
    return this.getNumberAttribute('ignore_tls_handshake');
  }
  public set ignoreTlsHandshake(value: number) {
    this._ignoreTlsHandshake = value;
  }
  public resetIgnoreTlsHandshake() {
    this._ignoreTlsHandshake = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTlsHandshakeInput() {
    return this._ignoreTlsHandshake;
  }

  // progression_tracking_enabled - computed: false, optional: true, required: false
  private _progressionTrackingEnabled?: string; 
  public get progressionTrackingEnabled() {
    return this.getStringAttribute('progression_tracking_enabled');
  }
  public set progressionTrackingEnabled(value: string) {
    this._progressionTrackingEnabled = value;
  }
  public resetProgressionTrackingEnabled() {
    this._progressionTrackingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingEnabledInput() {
    return this._progressionTrackingEnabled;
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

  // mitigation - computed: false, optional: true, required: false
  private _mitigation = new DdosTemplateTcpProgressionTrackingMitigationOutputReference(this, "mitigation");
  public get mitigation() {
    return this._mitigation;
  }
  public putMitigation(value: DdosTemplateTcpProgressionTrackingMitigation) {
    this._mitigation.internalValue = value;
  }
  public resetMitigation() {
    this._mitigation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mitigationInput() {
    return this._mitigation.internalValue;
  }

  // profiling - computed: false, optional: true, required: false
  private _profiling = new DdosTemplateTcpProgressionTrackingProfilingOutputReference(this, "profiling");
  public get profiling() {
    return this._profiling;
  }
  public putProfiling(value: DdosTemplateTcpProgressionTrackingProfiling) {
    this._profiling.internalValue = value;
  }
  public resetProfiling() {
    this._profiling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilingInput() {
    return this._profiling.internalValue;
  }
}
export interface DdosTemplateTcpSrcRateLimitSynRateLimit {
  /**
  * 'drop': Drop packets for syn-rate exceed (Default); 'blacklist-src': Blacklist-src for syn-rate exceed; 'ignore': Ignore syn-rate-exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#src_syn_rate_action DdosTemplateTcp#src_syn_rate_action}
  */
  readonly srcSynRateAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#src_syn_rate_limit DdosTemplateTcp#src_syn_rate_limit}
  */
  readonly srcSynRateLimit?: number;
}

export function ddosTemplateTcpSrcRateLimitSynRateLimitToTerraform(struct?: DdosTemplateTcpSrcRateLimitSynRateLimitOutputReference | DdosTemplateTcpSrcRateLimitSynRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_syn_rate_action: cdktf.stringToTerraform(struct!.srcSynRateAction),
    src_syn_rate_limit: cdktf.numberToTerraform(struct!.srcSynRateLimit),
  }
}


export function ddosTemplateTcpSrcRateLimitSynRateLimitToHclTerraform(struct?: DdosTemplateTcpSrcRateLimitSynRateLimitOutputReference | DdosTemplateTcpSrcRateLimitSynRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    src_syn_rate_action: {
      value: cdktf.stringToHclTerraform(struct!.srcSynRateAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_syn_rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.srcSynRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateTcpSrcRateLimitSynRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateTcpSrcRateLimitSynRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcSynRateAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSynRateAction = this._srcSynRateAction;
    }
    if (this._srcSynRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSynRateLimit = this._srcSynRateLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateTcpSrcRateLimitSynRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._srcSynRateAction = undefined;
      this._srcSynRateLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._srcSynRateAction = value.srcSynRateAction;
      this._srcSynRateLimit = value.srcSynRateLimit;
    }
  }

  // src_syn_rate_action - computed: false, optional: true, required: false
  private _srcSynRateAction?: string; 
  public get srcSynRateAction() {
    return this.getStringAttribute('src_syn_rate_action');
  }
  public set srcSynRateAction(value: string) {
    this._srcSynRateAction = value;
  }
  public resetSrcSynRateAction() {
    this._srcSynRateAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSynRateActionInput() {
    return this._srcSynRateAction;
  }

  // src_syn_rate_limit - computed: false, optional: true, required: false
  private _srcSynRateLimit?: number; 
  public get srcSynRateLimit() {
    return this.getNumberAttribute('src_syn_rate_limit');
  }
  public set srcSynRateLimit(value: number) {
    this._srcSynRateLimit = value;
  }
  public resetSrcSynRateLimit() {
    this._srcSynRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSynRateLimitInput() {
    return this._srcSynRateLimit;
  }
}
export interface DdosTemplateTcpSrcRateLimit {
  /**
  * syn_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#syn_rate_limit DdosTemplateTcp#syn_rate_limit}
  */
  readonly synRateLimit?: DdosTemplateTcpSrcRateLimitSynRateLimit;
}

export function ddosTemplateTcpSrcRateLimitToTerraform(struct?: DdosTemplateTcpSrcRateLimitOutputReference | DdosTemplateTcpSrcRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    syn_rate_limit: ddosTemplateTcpSrcRateLimitSynRateLimitToTerraform(struct!.synRateLimit),
  }
}


export function ddosTemplateTcpSrcRateLimitToHclTerraform(struct?: DdosTemplateTcpSrcRateLimitOutputReference | DdosTemplateTcpSrcRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    syn_rate_limit: {
      value: ddosTemplateTcpSrcRateLimitSynRateLimitToHclTerraform(struct!.synRateLimit),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateTcpSrcRateLimitSynRateLimitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateTcpSrcRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateTcpSrcRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._synRateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.synRateLimit = this._synRateLimit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateTcpSrcRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._synRateLimit.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._synRateLimit.internalValue = value.synRateLimit;
    }
  }

  // syn_rate_limit - computed: false, optional: true, required: false
  private _synRateLimit = new DdosTemplateTcpSrcRateLimitSynRateLimitOutputReference(this, "syn_rate_limit");
  public get synRateLimit() {
    return this._synRateLimit;
  }
  public putSynRateLimit(value: DdosTemplateTcpSrcRateLimitSynRateLimit) {
    this._synRateLimit.internalValue = value;
  }
  public resetSynRateLimit() {
    this._synRateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synRateLimitInput() {
    return this._synRateLimit.internalValue;
  }
}
export interface DdosTemplateTcpSrc {
  /**
  * rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#rate_limit DdosTemplateTcp#rate_limit}
  */
  readonly rateLimit?: DdosTemplateTcpSrcRateLimit;
}

export function ddosTemplateTcpSrcToTerraform(struct?: DdosTemplateTcpSrcOutputReference | DdosTemplateTcpSrc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rate_limit: ddosTemplateTcpSrcRateLimitToTerraform(struct!.rateLimit),
  }
}


export function ddosTemplateTcpSrcToHclTerraform(struct?: DdosTemplateTcpSrcOutputReference | DdosTemplateTcpSrc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rate_limit: {
      value: ddosTemplateTcpSrcRateLimitToHclTerraform(struct!.rateLimit),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateTcpSrcRateLimitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateTcpSrcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateTcpSrc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateTcpSrc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rateLimit.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rateLimit.internalValue = value.rateLimit;
    }
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit = new DdosTemplateTcpSrcRateLimitOutputReference(this, "rate_limit");
  public get rateLimit() {
    return this._rateLimit;
  }
  public putRateLimit(value: DdosTemplateTcpSrcRateLimit) {
    this._rateLimit.internalValue = value;
  }
  public resetRateLimit() {
    this._rateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit.internalValue;
  }
}
export interface DdosTemplateTcpTunnelEncapGreCfgGreAlways {
  /**
  * IPv4 address (IPv6-over-IPv4 / IPv4-over-IPv6 are not supported.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#gre_ipv4 DdosTemplateTcp#gre_ipv4}
  */
  readonly greIpv4?: string;
  /**
  * IPv6 address (IPv6-over-IPv4 / IPv4-over-IPv6 are not supported.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#gre_ipv6 DdosTemplateTcp#gre_ipv6}
  */
  readonly greIpv6?: string;
  /**
  * Encapsulate with key (Hexadecimal 0x0-0xFFFFFFFF,decimal 0-4294967295)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#key_ipv4 DdosTemplateTcp#key_ipv4}
  */
  readonly keyIpv4?: string;
  /**
  * Encapsulate with key (Hexadecimal 0x0-0xFFFFFFFF,decimal 0-4294967295)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#key_ipv6 DdosTemplateTcp#key_ipv6}
  */
  readonly keyIpv6?: string;
  /**
  * Use original source ip for encapsulation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#preserve_src_ipv4_gre DdosTemplateTcp#preserve_src_ipv4_gre}
  */
  readonly preserveSrcIpv4Gre?: number;
  /**
  * Use original source ip for encapsulation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#preserve_src_ipv6_gre DdosTemplateTcp#preserve_src_ipv6_gre}
  */
  readonly preserveSrcIpv6Gre?: number;
}

export function ddosTemplateTcpTunnelEncapGreCfgGreAlwaysToTerraform(struct?: DdosTemplateTcpTunnelEncapGreCfgGreAlwaysOutputReference | DdosTemplateTcpTunnelEncapGreCfgGreAlways): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gre_ipv4: cdktf.stringToTerraform(struct!.greIpv4),
    gre_ipv6: cdktf.stringToTerraform(struct!.greIpv6),
    key_ipv4: cdktf.stringToTerraform(struct!.keyIpv4),
    key_ipv6: cdktf.stringToTerraform(struct!.keyIpv6),
    preserve_src_ipv4_gre: cdktf.numberToTerraform(struct!.preserveSrcIpv4Gre),
    preserve_src_ipv6_gre: cdktf.numberToTerraform(struct!.preserveSrcIpv6Gre),
  }
}


export function ddosTemplateTcpTunnelEncapGreCfgGreAlwaysToHclTerraform(struct?: DdosTemplateTcpTunnelEncapGreCfgGreAlwaysOutputReference | DdosTemplateTcpTunnelEncapGreCfgGreAlways): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gre_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.greIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gre_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.greIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.keyIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.keyIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preserve_src_ipv4_gre: {
      value: cdktf.numberToHclTerraform(struct!.preserveSrcIpv4Gre),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preserve_src_ipv6_gre: {
      value: cdktf.numberToHclTerraform(struct!.preserveSrcIpv6Gre),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateTcpTunnelEncapGreCfgGreAlwaysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateTcpTunnelEncapGreCfgGreAlways | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._greIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.greIpv4 = this._greIpv4;
    }
    if (this._greIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.greIpv6 = this._greIpv6;
    }
    if (this._keyIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyIpv4 = this._keyIpv4;
    }
    if (this._keyIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyIpv6 = this._keyIpv6;
    }
    if (this._preserveSrcIpv4Gre !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveSrcIpv4Gre = this._preserveSrcIpv4Gre;
    }
    if (this._preserveSrcIpv6Gre !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveSrcIpv6Gre = this._preserveSrcIpv6Gre;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateTcpTunnelEncapGreCfgGreAlways | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._greIpv4 = undefined;
      this._greIpv6 = undefined;
      this._keyIpv4 = undefined;
      this._keyIpv6 = undefined;
      this._preserveSrcIpv4Gre = undefined;
      this._preserveSrcIpv6Gre = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._greIpv4 = value.greIpv4;
      this._greIpv6 = value.greIpv6;
      this._keyIpv4 = value.keyIpv4;
      this._keyIpv6 = value.keyIpv6;
      this._preserveSrcIpv4Gre = value.preserveSrcIpv4Gre;
      this._preserveSrcIpv6Gre = value.preserveSrcIpv6Gre;
    }
  }

  // gre_ipv4 - computed: false, optional: true, required: false
  private _greIpv4?: string; 
  public get greIpv4() {
    return this.getStringAttribute('gre_ipv4');
  }
  public set greIpv4(value: string) {
    this._greIpv4 = value;
  }
  public resetGreIpv4() {
    this._greIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greIpv4Input() {
    return this._greIpv4;
  }

  // gre_ipv6 - computed: false, optional: true, required: false
  private _greIpv6?: string; 
  public get greIpv6() {
    return this.getStringAttribute('gre_ipv6');
  }
  public set greIpv6(value: string) {
    this._greIpv6 = value;
  }
  public resetGreIpv6() {
    this._greIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greIpv6Input() {
    return this._greIpv6;
  }

  // key_ipv4 - computed: false, optional: true, required: false
  private _keyIpv4?: string; 
  public get keyIpv4() {
    return this.getStringAttribute('key_ipv4');
  }
  public set keyIpv4(value: string) {
    this._keyIpv4 = value;
  }
  public resetKeyIpv4() {
    this._keyIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIpv4Input() {
    return this._keyIpv4;
  }

  // key_ipv6 - computed: false, optional: true, required: false
  private _keyIpv6?: string; 
  public get keyIpv6() {
    return this.getStringAttribute('key_ipv6');
  }
  public set keyIpv6(value: string) {
    this._keyIpv6 = value;
  }
  public resetKeyIpv6() {
    this._keyIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIpv6Input() {
    return this._keyIpv6;
  }

  // preserve_src_ipv4_gre - computed: false, optional: true, required: false
  private _preserveSrcIpv4Gre?: number; 
  public get preserveSrcIpv4Gre() {
    return this.getNumberAttribute('preserve_src_ipv4_gre');
  }
  public set preserveSrcIpv4Gre(value: number) {
    this._preserveSrcIpv4Gre = value;
  }
  public resetPreserveSrcIpv4Gre() {
    this._preserveSrcIpv4Gre = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveSrcIpv4GreInput() {
    return this._preserveSrcIpv4Gre;
  }

  // preserve_src_ipv6_gre - computed: false, optional: true, required: false
  private _preserveSrcIpv6Gre?: number; 
  public get preserveSrcIpv6Gre() {
    return this.getNumberAttribute('preserve_src_ipv6_gre');
  }
  public set preserveSrcIpv6Gre(value: number) {
    this._preserveSrcIpv6Gre = value;
  }
  public resetPreserveSrcIpv6Gre() {
    this._preserveSrcIpv6Gre = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveSrcIpv6GreInput() {
    return this._preserveSrcIpv6Gre;
  }
}
export interface DdosTemplateTcpTunnelEncapGreCfg {
  /**
  * Enable Tunnel encapsulation using GRE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#gre_encap DdosTemplateTcp#gre_encap}
  */
  readonly greEncap?: number;
  /**
  * gre_always block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#gre_always DdosTemplateTcp#gre_always}
  */
  readonly greAlways?: DdosTemplateTcpTunnelEncapGreCfgGreAlways;
}

export function ddosTemplateTcpTunnelEncapGreCfgToTerraform(struct?: DdosTemplateTcpTunnelEncapGreCfgOutputReference | DdosTemplateTcpTunnelEncapGreCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gre_encap: cdktf.numberToTerraform(struct!.greEncap),
    gre_always: ddosTemplateTcpTunnelEncapGreCfgGreAlwaysToTerraform(struct!.greAlways),
  }
}


export function ddosTemplateTcpTunnelEncapGreCfgToHclTerraform(struct?: DdosTemplateTcpTunnelEncapGreCfgOutputReference | DdosTemplateTcpTunnelEncapGreCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gre_encap: {
      value: cdktf.numberToHclTerraform(struct!.greEncap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gre_always: {
      value: ddosTemplateTcpTunnelEncapGreCfgGreAlwaysToHclTerraform(struct!.greAlways),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateTcpTunnelEncapGreCfgGreAlwaysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateTcpTunnelEncapGreCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateTcpTunnelEncapGreCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._greEncap !== undefined) {
      hasAnyValues = true;
      internalValueResult.greEncap = this._greEncap;
    }
    if (this._greAlways?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.greAlways = this._greAlways?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateTcpTunnelEncapGreCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._greEncap = undefined;
      this._greAlways.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._greEncap = value.greEncap;
      this._greAlways.internalValue = value.greAlways;
    }
  }

  // gre_encap - computed: false, optional: true, required: false
  private _greEncap?: number; 
  public get greEncap() {
    return this.getNumberAttribute('gre_encap');
  }
  public set greEncap(value: number) {
    this._greEncap = value;
  }
  public resetGreEncap() {
    this._greEncap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greEncapInput() {
    return this._greEncap;
  }

  // gre_always - computed: false, optional: true, required: false
  private _greAlways = new DdosTemplateTcpTunnelEncapGreCfgGreAlwaysOutputReference(this, "gre_always");
  public get greAlways() {
    return this._greAlways;
  }
  public putGreAlways(value: DdosTemplateTcpTunnelEncapGreCfgGreAlways) {
    this._greAlways.internalValue = value;
  }
  public resetGreAlways() {
    this._greAlways.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greAlwaysInput() {
    return this._greAlways.internalValue;
  }
}
export interface DdosTemplateTcpTunnelEncapIpCfgAlways {
  /**
  * IPv4 address (IPv6-over-IPv4 / IPv4-over-IPv6 are not supported.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#ipv4_addr DdosTemplateTcp#ipv4_addr}
  */
  readonly ipv4Addr?: string;
  /**
  * IPv6 address (IPv6-over-IPv4 / IPv4-over-IPv6 are not supported.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#ipv6_addr DdosTemplateTcp#ipv6_addr}
  */
  readonly ipv6Addr?: string;
  /**
  * Use original source ip for encapsulation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#preserve_src_ipv4 DdosTemplateTcp#preserve_src_ipv4}
  */
  readonly preserveSrcIpv4?: number;
  /**
  * Use original source ip for encapsulation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#preserve_src_ipv6 DdosTemplateTcp#preserve_src_ipv6}
  */
  readonly preserveSrcIpv6?: number;
}

export function ddosTemplateTcpTunnelEncapIpCfgAlwaysToTerraform(struct?: DdosTemplateTcpTunnelEncapIpCfgAlwaysOutputReference | DdosTemplateTcpTunnelEncapIpCfgAlways): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    ipv6_addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    preserve_src_ipv4: cdktf.numberToTerraform(struct!.preserveSrcIpv4),
    preserve_src_ipv6: cdktf.numberToTerraform(struct!.preserveSrcIpv6),
  }
}


export function ddosTemplateTcpTunnelEncapIpCfgAlwaysToHclTerraform(struct?: DdosTemplateTcpTunnelEncapIpCfgAlwaysOutputReference | DdosTemplateTcpTunnelEncapIpCfgAlways): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preserve_src_ipv4: {
      value: cdktf.numberToHclTerraform(struct!.preserveSrcIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preserve_src_ipv6: {
      value: cdktf.numberToHclTerraform(struct!.preserveSrcIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateTcpTunnelEncapIpCfgAlwaysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateTcpTunnelEncapIpCfgAlways | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addr = this._ipv4Addr;
    }
    if (this._ipv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr = this._ipv6Addr;
    }
    if (this._preserveSrcIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveSrcIpv4 = this._preserveSrcIpv4;
    }
    if (this._preserveSrcIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveSrcIpv6 = this._preserveSrcIpv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateTcpTunnelEncapIpCfgAlways | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4Addr = undefined;
      this._ipv6Addr = undefined;
      this._preserveSrcIpv4 = undefined;
      this._preserveSrcIpv6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4Addr = value.ipv4Addr;
      this._ipv6Addr = value.ipv6Addr;
      this._preserveSrcIpv4 = value.preserveSrcIpv4;
      this._preserveSrcIpv6 = value.preserveSrcIpv6;
    }
  }

  // ipv4_addr - computed: false, optional: true, required: false
  private _ipv4Addr?: string; 
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4_addr');
  }
  public set ipv4Addr(value: string) {
    this._ipv4Addr = value;
  }
  public resetIpv4Addr() {
    this._ipv4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrInput() {
    return this._ipv4Addr;
  }

  // ipv6_addr - computed: false, optional: true, required: false
  private _ipv6Addr?: string; 
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6_addr');
  }
  public set ipv6Addr(value: string) {
    this._ipv6Addr = value;
  }
  public resetIpv6Addr() {
    this._ipv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrInput() {
    return this._ipv6Addr;
  }

  // preserve_src_ipv4 - computed: false, optional: true, required: false
  private _preserveSrcIpv4?: number; 
  public get preserveSrcIpv4() {
    return this.getNumberAttribute('preserve_src_ipv4');
  }
  public set preserveSrcIpv4(value: number) {
    this._preserveSrcIpv4 = value;
  }
  public resetPreserveSrcIpv4() {
    this._preserveSrcIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveSrcIpv4Input() {
    return this._preserveSrcIpv4;
  }

  // preserve_src_ipv6 - computed: false, optional: true, required: false
  private _preserveSrcIpv6?: number; 
  public get preserveSrcIpv6() {
    return this.getNumberAttribute('preserve_src_ipv6');
  }
  public set preserveSrcIpv6(value: number) {
    this._preserveSrcIpv6 = value;
  }
  public resetPreserveSrcIpv6() {
    this._preserveSrcIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveSrcIpv6Input() {
    return this._preserveSrcIpv6;
  }
}
export interface DdosTemplateTcpTunnelEncapIpCfg {
  /**
  * Enable Tunnel encapsulation using IP in IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#ip_encap DdosTemplateTcp#ip_encap}
  */
  readonly ipEncap?: number;
  /**
  * always block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#always DdosTemplateTcp#always}
  */
  readonly always?: DdosTemplateTcpTunnelEncapIpCfgAlways;
}

export function ddosTemplateTcpTunnelEncapIpCfgToTerraform(struct?: DdosTemplateTcpTunnelEncapIpCfgOutputReference | DdosTemplateTcpTunnelEncapIpCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_encap: cdktf.numberToTerraform(struct!.ipEncap),
    always: ddosTemplateTcpTunnelEncapIpCfgAlwaysToTerraform(struct!.always),
  }
}


export function ddosTemplateTcpTunnelEncapIpCfgToHclTerraform(struct?: DdosTemplateTcpTunnelEncapIpCfgOutputReference | DdosTemplateTcpTunnelEncapIpCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_encap: {
      value: cdktf.numberToHclTerraform(struct!.ipEncap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    always: {
      value: ddosTemplateTcpTunnelEncapIpCfgAlwaysToHclTerraform(struct!.always),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateTcpTunnelEncapIpCfgAlwaysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateTcpTunnelEncapIpCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateTcpTunnelEncapIpCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipEncap !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipEncap = this._ipEncap;
    }
    if (this._always?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.always = this._always?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateTcpTunnelEncapIpCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipEncap = undefined;
      this._always.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipEncap = value.ipEncap;
      this._always.internalValue = value.always;
    }
  }

  // ip_encap - computed: false, optional: true, required: false
  private _ipEncap?: number; 
  public get ipEncap() {
    return this.getNumberAttribute('ip_encap');
  }
  public set ipEncap(value: number) {
    this._ipEncap = value;
  }
  public resetIpEncap() {
    this._ipEncap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipEncapInput() {
    return this._ipEncap;
  }

  // always - computed: false, optional: true, required: false
  private _always = new DdosTemplateTcpTunnelEncapIpCfgAlwaysOutputReference(this, "always");
  public get always() {
    return this._always;
  }
  public putAlways(value: DdosTemplateTcpTunnelEncapIpCfgAlways) {
    this._always.internalValue = value;
  }
  public resetAlways() {
    this._always.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysInput() {
    return this._always.internalValue;
  }
}
export interface DdosTemplateTcpTunnelEncap {
  /**
  * gre_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#gre_cfg DdosTemplateTcp#gre_cfg}
  */
  readonly greCfg?: DdosTemplateTcpTunnelEncapGreCfg;
  /**
  * ip_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#ip_cfg DdosTemplateTcp#ip_cfg}
  */
  readonly ipCfg?: DdosTemplateTcpTunnelEncapIpCfg;
}

export function ddosTemplateTcpTunnelEncapToTerraform(struct?: DdosTemplateTcpTunnelEncapOutputReference | DdosTemplateTcpTunnelEncap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gre_cfg: ddosTemplateTcpTunnelEncapGreCfgToTerraform(struct!.greCfg),
    ip_cfg: ddosTemplateTcpTunnelEncapIpCfgToTerraform(struct!.ipCfg),
  }
}


export function ddosTemplateTcpTunnelEncapToHclTerraform(struct?: DdosTemplateTcpTunnelEncapOutputReference | DdosTemplateTcpTunnelEncap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gre_cfg: {
      value: ddosTemplateTcpTunnelEncapGreCfgToHclTerraform(struct!.greCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateTcpTunnelEncapGreCfgList",
    },
    ip_cfg: {
      value: ddosTemplateTcpTunnelEncapIpCfgToHclTerraform(struct!.ipCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateTcpTunnelEncapIpCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateTcpTunnelEncapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateTcpTunnelEncap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._greCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.greCfg = this._greCfg?.internalValue;
    }
    if (this._ipCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipCfg = this._ipCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateTcpTunnelEncap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._greCfg.internalValue = undefined;
      this._ipCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._greCfg.internalValue = value.greCfg;
      this._ipCfg.internalValue = value.ipCfg;
    }
  }

  // gre_cfg - computed: false, optional: true, required: false
  private _greCfg = new DdosTemplateTcpTunnelEncapGreCfgOutputReference(this, "gre_cfg");
  public get greCfg() {
    return this._greCfg;
  }
  public putGreCfg(value: DdosTemplateTcpTunnelEncapGreCfg) {
    this._greCfg.internalValue = value;
  }
  public resetGreCfg() {
    this._greCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greCfgInput() {
    return this._greCfg.internalValue;
  }

  // ip_cfg - computed: false, optional: true, required: false
  private _ipCfg = new DdosTemplateTcpTunnelEncapIpCfgOutputReference(this, "ip_cfg");
  public get ipCfg() {
    return this._ipCfg;
  }
  public putIpCfg(value: DdosTemplateTcpTunnelEncapIpCfg) {
    this._ipCfg.internalValue = value;
  }
  public resetIpCfg() {
    this._ipCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipCfgInput() {
    return this._ipCfg.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp thunder_ddos_template_tcp}
*/
export class DdosTemplateTcp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_template_tcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosTemplateTcp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosTemplateTcp to import
  * @param importFromId The id of the existing DdosTemplateTcp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosTemplateTcp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_template_tcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp thunder_ddos_template_tcp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosTemplateTcpConfig
  */
  public constructor(scope: Construct, id: string, config: DdosTemplateTcpConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_template_tcp',
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
    this._ackAuthenticationSynackReset = config.ackAuthenticationSynackReset;
    this._actionOnAckRtoRetryCount = config.actionOnAckRtoRetryCount;
    this._actionOnSynRtoRetryCount = config.actionOnSynRtoRetryCount;
    this._age = config.age;
    this._allowSynOtherflags = config.allowSynOtherflags;
    this._allowSynackSkipAuthentications = config.allowSynackSkipAuthentications;
    this._allowTcpTfo = config.allowTcpTfo;
    this._blackListOutOfSeq = config.blackListOutOfSeq;
    this._blackListRetransmit = config.blackListRetransmit;
    this._blackListZeroWin = config.blackListZeroWin;
    this._connRateLimitOnSynOnly = config.connRateLimitOnSynOnly;
    this._createConnOnSynOnly = config.createConnOnSynOnly;
    this._id = config.id;
    this._name = config.name;
    this._perConnOutOfSeqRateAction = config.perConnOutOfSeqRateAction;
    this._perConnOutOfSeqRateLimit = config.perConnOutOfSeqRateLimit;
    this._perConnPktRateAction = config.perConnPktRateAction;
    this._perConnPktRateLimit = config.perConnPktRateLimit;
    this._perConnRateInterval = config.perConnRateInterval;
    this._perConnRetransmitRateAction = config.perConnRetransmitRateAction;
    this._perConnRetransmitRateLimit = config.perConnRetransmitRateLimit;
    this._perConnZeroWinRateAction = config.perConnZeroWinRateAction;
    this._perConnZeroWinRateLimit = config.perConnZeroWinRateLimit;
    this._synAuth = config.synAuth;
    this._synCookie = config.synCookie;
    this._synackRateLimit = config.synackRateLimit;
    this._trackTogetherWithSyn = config.trackTogetherWithSyn;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._actionCfg.internalValue = config.actionCfg;
    this._actionSynCfg.internalValue = config.actionSynCfg;
    this._dropKnownRespSrcPortCfg.internalValue = config.dropKnownRespSrcPortCfg;
    this._dst.internalValue = config.dst;
    this._filterList.internalValue = config.filterList;
    this._progressionTracking.internalValue = config.progressionTracking;
    this._src.internalValue = config.src;
    this._tunnelEncap.internalValue = config.tunnelEncap;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ack_authentication_synack_reset - computed: false, optional: true, required: false
  private _ackAuthenticationSynackReset?: number; 
  public get ackAuthenticationSynackReset() {
    return this.getNumberAttribute('ack_authentication_synack_reset');
  }
  public set ackAuthenticationSynackReset(value: number) {
    this._ackAuthenticationSynackReset = value;
  }
  public resetAckAuthenticationSynackReset() {
    this._ackAuthenticationSynackReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackAuthenticationSynackResetInput() {
    return this._ackAuthenticationSynackReset;
  }

  // action_on_ack_rto_retry_count - computed: false, optional: true, required: false
  private _actionOnAckRtoRetryCount?: number; 
  public get actionOnAckRtoRetryCount() {
    return this.getNumberAttribute('action_on_ack_rto_retry_count');
  }
  public set actionOnAckRtoRetryCount(value: number) {
    this._actionOnAckRtoRetryCount = value;
  }
  public resetActionOnAckRtoRetryCount() {
    this._actionOnAckRtoRetryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionOnAckRtoRetryCountInput() {
    return this._actionOnAckRtoRetryCount;
  }

  // action_on_syn_rto_retry_count - computed: false, optional: true, required: false
  private _actionOnSynRtoRetryCount?: number; 
  public get actionOnSynRtoRetryCount() {
    return this.getNumberAttribute('action_on_syn_rto_retry_count');
  }
  public set actionOnSynRtoRetryCount(value: number) {
    this._actionOnSynRtoRetryCount = value;
  }
  public resetActionOnSynRtoRetryCount() {
    this._actionOnSynRtoRetryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionOnSynRtoRetryCountInput() {
    return this._actionOnSynRtoRetryCount;
  }

  // age - computed: false, optional: true, required: false
  private _age?: number; 
  public get age() {
    return this.getNumberAttribute('age');
  }
  public set age(value: number) {
    this._age = value;
  }
  public resetAge() {
    this._age = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ageInput() {
    return this._age;
  }

  // allow_syn_otherflags - computed: false, optional: true, required: false
  private _allowSynOtherflags?: number; 
  public get allowSynOtherflags() {
    return this.getNumberAttribute('allow_syn_otherflags');
  }
  public set allowSynOtherflags(value: number) {
    this._allowSynOtherflags = value;
  }
  public resetAllowSynOtherflags() {
    this._allowSynOtherflags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSynOtherflagsInput() {
    return this._allowSynOtherflags;
  }

  // allow_synack_skip_authentications - computed: false, optional: true, required: false
  private _allowSynackSkipAuthentications?: number; 
  public get allowSynackSkipAuthentications() {
    return this.getNumberAttribute('allow_synack_skip_authentications');
  }
  public set allowSynackSkipAuthentications(value: number) {
    this._allowSynackSkipAuthentications = value;
  }
  public resetAllowSynackSkipAuthentications() {
    this._allowSynackSkipAuthentications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSynackSkipAuthenticationsInput() {
    return this._allowSynackSkipAuthentications;
  }

  // allow_tcp_tfo - computed: false, optional: true, required: false
  private _allowTcpTfo?: number; 
  public get allowTcpTfo() {
    return this.getNumberAttribute('allow_tcp_tfo');
  }
  public set allowTcpTfo(value: number) {
    this._allowTcpTfo = value;
  }
  public resetAllowTcpTfo() {
    this._allowTcpTfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowTcpTfoInput() {
    return this._allowTcpTfo;
  }

  // black_list_out_of_seq - computed: false, optional: true, required: false
  private _blackListOutOfSeq?: number; 
  public get blackListOutOfSeq() {
    return this.getNumberAttribute('black_list_out_of_seq');
  }
  public set blackListOutOfSeq(value: number) {
    this._blackListOutOfSeq = value;
  }
  public resetBlackListOutOfSeq() {
    this._blackListOutOfSeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blackListOutOfSeqInput() {
    return this._blackListOutOfSeq;
  }

  // black_list_retransmit - computed: false, optional: true, required: false
  private _blackListRetransmit?: number; 
  public get blackListRetransmit() {
    return this.getNumberAttribute('black_list_retransmit');
  }
  public set blackListRetransmit(value: number) {
    this._blackListRetransmit = value;
  }
  public resetBlackListRetransmit() {
    this._blackListRetransmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blackListRetransmitInput() {
    return this._blackListRetransmit;
  }

  // black_list_zero_win - computed: false, optional: true, required: false
  private _blackListZeroWin?: number; 
  public get blackListZeroWin() {
    return this.getNumberAttribute('black_list_zero_win');
  }
  public set blackListZeroWin(value: number) {
    this._blackListZeroWin = value;
  }
  public resetBlackListZeroWin() {
    this._blackListZeroWin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blackListZeroWinInput() {
    return this._blackListZeroWin;
  }

  // conn_rate_limit_on_syn_only - computed: false, optional: true, required: false
  private _connRateLimitOnSynOnly?: number; 
  public get connRateLimitOnSynOnly() {
    return this.getNumberAttribute('conn_rate_limit_on_syn_only');
  }
  public set connRateLimitOnSynOnly(value: number) {
    this._connRateLimitOnSynOnly = value;
  }
  public resetConnRateLimitOnSynOnly() {
    this._connRateLimitOnSynOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connRateLimitOnSynOnlyInput() {
    return this._connRateLimitOnSynOnly;
  }

  // create_conn_on_syn_only - computed: false, optional: true, required: false
  private _createConnOnSynOnly?: number; 
  public get createConnOnSynOnly() {
    return this.getNumberAttribute('create_conn_on_syn_only');
  }
  public set createConnOnSynOnly(value: number) {
    this._createConnOnSynOnly = value;
  }
  public resetCreateConnOnSynOnly() {
    this._createConnOnSynOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createConnOnSynOnlyInput() {
    return this._createConnOnSynOnly;
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

  // per_conn_out_of_seq_rate_action - computed: false, optional: true, required: false
  private _perConnOutOfSeqRateAction?: string; 
  public get perConnOutOfSeqRateAction() {
    return this.getStringAttribute('per_conn_out_of_seq_rate_action');
  }
  public set perConnOutOfSeqRateAction(value: string) {
    this._perConnOutOfSeqRateAction = value;
  }
  public resetPerConnOutOfSeqRateAction() {
    this._perConnOutOfSeqRateAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perConnOutOfSeqRateActionInput() {
    return this._perConnOutOfSeqRateAction;
  }

  // per_conn_out_of_seq_rate_limit - computed: false, optional: true, required: false
  private _perConnOutOfSeqRateLimit?: number; 
  public get perConnOutOfSeqRateLimit() {
    return this.getNumberAttribute('per_conn_out_of_seq_rate_limit');
  }
  public set perConnOutOfSeqRateLimit(value: number) {
    this._perConnOutOfSeqRateLimit = value;
  }
  public resetPerConnOutOfSeqRateLimit() {
    this._perConnOutOfSeqRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perConnOutOfSeqRateLimitInput() {
    return this._perConnOutOfSeqRateLimit;
  }

  // per_conn_pkt_rate_action - computed: false, optional: true, required: false
  private _perConnPktRateAction?: string; 
  public get perConnPktRateAction() {
    return this.getStringAttribute('per_conn_pkt_rate_action');
  }
  public set perConnPktRateAction(value: string) {
    this._perConnPktRateAction = value;
  }
  public resetPerConnPktRateAction() {
    this._perConnPktRateAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perConnPktRateActionInput() {
    return this._perConnPktRateAction;
  }

  // per_conn_pkt_rate_limit - computed: false, optional: true, required: false
  private _perConnPktRateLimit?: number; 
  public get perConnPktRateLimit() {
    return this.getNumberAttribute('per_conn_pkt_rate_limit');
  }
  public set perConnPktRateLimit(value: number) {
    this._perConnPktRateLimit = value;
  }
  public resetPerConnPktRateLimit() {
    this._perConnPktRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perConnPktRateLimitInput() {
    return this._perConnPktRateLimit;
  }

  // per_conn_rate_interval - computed: false, optional: true, required: false
  private _perConnRateInterval?: string; 
  public get perConnRateInterval() {
    return this.getStringAttribute('per_conn_rate_interval');
  }
  public set perConnRateInterval(value: string) {
    this._perConnRateInterval = value;
  }
  public resetPerConnRateInterval() {
    this._perConnRateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perConnRateIntervalInput() {
    return this._perConnRateInterval;
  }

  // per_conn_retransmit_rate_action - computed: false, optional: true, required: false
  private _perConnRetransmitRateAction?: string; 
  public get perConnRetransmitRateAction() {
    return this.getStringAttribute('per_conn_retransmit_rate_action');
  }
  public set perConnRetransmitRateAction(value: string) {
    this._perConnRetransmitRateAction = value;
  }
  public resetPerConnRetransmitRateAction() {
    this._perConnRetransmitRateAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perConnRetransmitRateActionInput() {
    return this._perConnRetransmitRateAction;
  }

  // per_conn_retransmit_rate_limit - computed: false, optional: true, required: false
  private _perConnRetransmitRateLimit?: number; 
  public get perConnRetransmitRateLimit() {
    return this.getNumberAttribute('per_conn_retransmit_rate_limit');
  }
  public set perConnRetransmitRateLimit(value: number) {
    this._perConnRetransmitRateLimit = value;
  }
  public resetPerConnRetransmitRateLimit() {
    this._perConnRetransmitRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perConnRetransmitRateLimitInput() {
    return this._perConnRetransmitRateLimit;
  }

  // per_conn_zero_win_rate_action - computed: false, optional: true, required: false
  private _perConnZeroWinRateAction?: string; 
  public get perConnZeroWinRateAction() {
    return this.getStringAttribute('per_conn_zero_win_rate_action');
  }
  public set perConnZeroWinRateAction(value: string) {
    this._perConnZeroWinRateAction = value;
  }
  public resetPerConnZeroWinRateAction() {
    this._perConnZeroWinRateAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perConnZeroWinRateActionInput() {
    return this._perConnZeroWinRateAction;
  }

  // per_conn_zero_win_rate_limit - computed: false, optional: true, required: false
  private _perConnZeroWinRateLimit?: number; 
  public get perConnZeroWinRateLimit() {
    return this.getNumberAttribute('per_conn_zero_win_rate_limit');
  }
  public set perConnZeroWinRateLimit(value: number) {
    this._perConnZeroWinRateLimit = value;
  }
  public resetPerConnZeroWinRateLimit() {
    this._perConnZeroWinRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perConnZeroWinRateLimitInput() {
    return this._perConnZeroWinRateLimit;
  }

  // syn_auth - computed: false, optional: true, required: false
  private _synAuth?: string; 
  public get synAuth() {
    return this.getStringAttribute('syn_auth');
  }
  public set synAuth(value: string) {
    this._synAuth = value;
  }
  public resetSynAuth() {
    this._synAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synAuthInput() {
    return this._synAuth;
  }

  // syn_cookie - computed: false, optional: true, required: false
  private _synCookie?: number; 
  public get synCookie() {
    return this.getNumberAttribute('syn_cookie');
  }
  public set synCookie(value: number) {
    this._synCookie = value;
  }
  public resetSynCookie() {
    this._synCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synCookieInput() {
    return this._synCookie;
  }

  // synack_rate_limit - computed: false, optional: true, required: false
  private _synackRateLimit?: number; 
  public get synackRateLimit() {
    return this.getNumberAttribute('synack_rate_limit');
  }
  public set synackRateLimit(value: number) {
    this._synackRateLimit = value;
  }
  public resetSynackRateLimit() {
    this._synackRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synackRateLimitInput() {
    return this._synackRateLimit;
  }

  // track_together_with_syn - computed: false, optional: true, required: false
  private _trackTogetherWithSyn?: number; 
  public get trackTogetherWithSyn() {
    return this.getNumberAttribute('track_together_with_syn');
  }
  public set trackTogetherWithSyn(value: number) {
    this._trackTogetherWithSyn = value;
  }
  public resetTrackTogetherWithSyn() {
    this._trackTogetherWithSyn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackTogetherWithSynInput() {
    return this._trackTogetherWithSyn;
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

  // action_cfg - computed: false, optional: true, required: false
  private _actionCfg = new DdosTemplateTcpActionCfgOutputReference(this, "action_cfg");
  public get actionCfg() {
    return this._actionCfg;
  }
  public putActionCfg(value: DdosTemplateTcpActionCfg) {
    this._actionCfg.internalValue = value;
  }
  public resetActionCfg() {
    this._actionCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionCfgInput() {
    return this._actionCfg.internalValue;
  }

  // action_syn_cfg - computed: false, optional: true, required: false
  private _actionSynCfg = new DdosTemplateTcpActionSynCfgOutputReference(this, "action_syn_cfg");
  public get actionSynCfg() {
    return this._actionSynCfg;
  }
  public putActionSynCfg(value: DdosTemplateTcpActionSynCfg) {
    this._actionSynCfg.internalValue = value;
  }
  public resetActionSynCfg() {
    this._actionSynCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionSynCfgInput() {
    return this._actionSynCfg.internalValue;
  }

  // drop_known_resp_src_port_cfg - computed: false, optional: true, required: false
  private _dropKnownRespSrcPortCfg = new DdosTemplateTcpDropKnownRespSrcPortCfgOutputReference(this, "drop_known_resp_src_port_cfg");
  public get dropKnownRespSrcPortCfg() {
    return this._dropKnownRespSrcPortCfg;
  }
  public putDropKnownRespSrcPortCfg(value: DdosTemplateTcpDropKnownRespSrcPortCfg) {
    this._dropKnownRespSrcPortCfg.internalValue = value;
  }
  public resetDropKnownRespSrcPortCfg() {
    this._dropKnownRespSrcPortCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropKnownRespSrcPortCfgInput() {
    return this._dropKnownRespSrcPortCfg.internalValue;
  }

  // dst - computed: false, optional: true, required: false
  private _dst = new DdosTemplateTcpDstOutputReference(this, "dst");
  public get dst() {
    return this._dst;
  }
  public putDst(value: DdosTemplateTcpDst) {
    this._dst.internalValue = value;
  }
  public resetDst() {
    this._dst.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstInput() {
    return this._dst.internalValue;
  }

  // filter_list - computed: false, optional: true, required: false
  private _filterList = new DdosTemplateTcpFilterListStructList(this, "filter_list", false);
  public get filterList() {
    return this._filterList;
  }
  public putFilterList(value: DdosTemplateTcpFilterListStruct[] | cdktf.IResolvable) {
    this._filterList.internalValue = value;
  }
  public resetFilterList() {
    this._filterList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListInput() {
    return this._filterList.internalValue;
  }

  // progression_tracking - computed: false, optional: true, required: false
  private _progressionTracking = new DdosTemplateTcpProgressionTrackingOutputReference(this, "progression_tracking");
  public get progressionTracking() {
    return this._progressionTracking;
  }
  public putProgressionTracking(value: DdosTemplateTcpProgressionTracking) {
    this._progressionTracking.internalValue = value;
  }
  public resetProgressionTracking() {
    this._progressionTracking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingInput() {
    return this._progressionTracking.internalValue;
  }

  // src - computed: false, optional: true, required: false
  private _src = new DdosTemplateTcpSrcOutputReference(this, "src");
  public get src() {
    return this._src;
  }
  public putSrc(value: DdosTemplateTcpSrc) {
    this._src.internalValue = value;
  }
  public resetSrc() {
    this._src.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcInput() {
    return this._src.internalValue;
  }

  // tunnel_encap - computed: false, optional: true, required: false
  private _tunnelEncap = new DdosTemplateTcpTunnelEncapOutputReference(this, "tunnel_encap");
  public get tunnelEncap() {
    return this._tunnelEncap;
  }
  public putTunnelEncap(value: DdosTemplateTcpTunnelEncap) {
    this._tunnelEncap.internalValue = value;
  }
  public resetTunnelEncap() {
    this._tunnelEncap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelEncapInput() {
    return this._tunnelEncap.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ack_authentication_synack_reset: cdktf.numberToTerraform(this._ackAuthenticationSynackReset),
      action_on_ack_rto_retry_count: cdktf.numberToTerraform(this._actionOnAckRtoRetryCount),
      action_on_syn_rto_retry_count: cdktf.numberToTerraform(this._actionOnSynRtoRetryCount),
      age: cdktf.numberToTerraform(this._age),
      allow_syn_otherflags: cdktf.numberToTerraform(this._allowSynOtherflags),
      allow_synack_skip_authentications: cdktf.numberToTerraform(this._allowSynackSkipAuthentications),
      allow_tcp_tfo: cdktf.numberToTerraform(this._allowTcpTfo),
      black_list_out_of_seq: cdktf.numberToTerraform(this._blackListOutOfSeq),
      black_list_retransmit: cdktf.numberToTerraform(this._blackListRetransmit),
      black_list_zero_win: cdktf.numberToTerraform(this._blackListZeroWin),
      conn_rate_limit_on_syn_only: cdktf.numberToTerraform(this._connRateLimitOnSynOnly),
      create_conn_on_syn_only: cdktf.numberToTerraform(this._createConnOnSynOnly),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      per_conn_out_of_seq_rate_action: cdktf.stringToTerraform(this._perConnOutOfSeqRateAction),
      per_conn_out_of_seq_rate_limit: cdktf.numberToTerraform(this._perConnOutOfSeqRateLimit),
      per_conn_pkt_rate_action: cdktf.stringToTerraform(this._perConnPktRateAction),
      per_conn_pkt_rate_limit: cdktf.numberToTerraform(this._perConnPktRateLimit),
      per_conn_rate_interval: cdktf.stringToTerraform(this._perConnRateInterval),
      per_conn_retransmit_rate_action: cdktf.stringToTerraform(this._perConnRetransmitRateAction),
      per_conn_retransmit_rate_limit: cdktf.numberToTerraform(this._perConnRetransmitRateLimit),
      per_conn_zero_win_rate_action: cdktf.stringToTerraform(this._perConnZeroWinRateAction),
      per_conn_zero_win_rate_limit: cdktf.numberToTerraform(this._perConnZeroWinRateLimit),
      syn_auth: cdktf.stringToTerraform(this._synAuth),
      syn_cookie: cdktf.numberToTerraform(this._synCookie),
      synack_rate_limit: cdktf.numberToTerraform(this._synackRateLimit),
      track_together_with_syn: cdktf.numberToTerraform(this._trackTogetherWithSyn),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      action_cfg: ddosTemplateTcpActionCfgToTerraform(this._actionCfg.internalValue),
      action_syn_cfg: ddosTemplateTcpActionSynCfgToTerraform(this._actionSynCfg.internalValue),
      drop_known_resp_src_port_cfg: ddosTemplateTcpDropKnownRespSrcPortCfgToTerraform(this._dropKnownRespSrcPortCfg.internalValue),
      dst: ddosTemplateTcpDstToTerraform(this._dst.internalValue),
      filter_list: cdktf.listMapper(ddosTemplateTcpFilterListStructToTerraform, true)(this._filterList.internalValue),
      progression_tracking: ddosTemplateTcpProgressionTrackingToTerraform(this._progressionTracking.internalValue),
      src: ddosTemplateTcpSrcToTerraform(this._src.internalValue),
      tunnel_encap: ddosTemplateTcpTunnelEncapToTerraform(this._tunnelEncap.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ack_authentication_synack_reset: {
        value: cdktf.numberToHclTerraform(this._ackAuthenticationSynackReset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      action_on_ack_rto_retry_count: {
        value: cdktf.numberToHclTerraform(this._actionOnAckRtoRetryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      action_on_syn_rto_retry_count: {
        value: cdktf.numberToHclTerraform(this._actionOnSynRtoRetryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      age: {
        value: cdktf.numberToHclTerraform(this._age),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      allow_syn_otherflags: {
        value: cdktf.numberToHclTerraform(this._allowSynOtherflags),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      allow_synack_skip_authentications: {
        value: cdktf.numberToHclTerraform(this._allowSynackSkipAuthentications),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      allow_tcp_tfo: {
        value: cdktf.numberToHclTerraform(this._allowTcpTfo),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      black_list_out_of_seq: {
        value: cdktf.numberToHclTerraform(this._blackListOutOfSeq),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      black_list_retransmit: {
        value: cdktf.numberToHclTerraform(this._blackListRetransmit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      black_list_zero_win: {
        value: cdktf.numberToHclTerraform(this._blackListZeroWin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conn_rate_limit_on_syn_only: {
        value: cdktf.numberToHclTerraform(this._connRateLimitOnSynOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      create_conn_on_syn_only: {
        value: cdktf.numberToHclTerraform(this._createConnOnSynOnly),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      per_conn_out_of_seq_rate_action: {
        value: cdktf.stringToHclTerraform(this._perConnOutOfSeqRateAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      per_conn_out_of_seq_rate_limit: {
        value: cdktf.numberToHclTerraform(this._perConnOutOfSeqRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      per_conn_pkt_rate_action: {
        value: cdktf.stringToHclTerraform(this._perConnPktRateAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      per_conn_pkt_rate_limit: {
        value: cdktf.numberToHclTerraform(this._perConnPktRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      per_conn_rate_interval: {
        value: cdktf.stringToHclTerraform(this._perConnRateInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      per_conn_retransmit_rate_action: {
        value: cdktf.stringToHclTerraform(this._perConnRetransmitRateAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      per_conn_retransmit_rate_limit: {
        value: cdktf.numberToHclTerraform(this._perConnRetransmitRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      per_conn_zero_win_rate_action: {
        value: cdktf.stringToHclTerraform(this._perConnZeroWinRateAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      per_conn_zero_win_rate_limit: {
        value: cdktf.numberToHclTerraform(this._perConnZeroWinRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      syn_auth: {
        value: cdktf.stringToHclTerraform(this._synAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      syn_cookie: {
        value: cdktf.numberToHclTerraform(this._synCookie),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      synack_rate_limit: {
        value: cdktf.numberToHclTerraform(this._synackRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      track_together_with_syn: {
        value: cdktf.numberToHclTerraform(this._trackTogetherWithSyn),
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
      action_cfg: {
        value: ddosTemplateTcpActionCfgToHclTerraform(this._actionCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateTcpActionCfgList",
      },
      action_syn_cfg: {
        value: ddosTemplateTcpActionSynCfgToHclTerraform(this._actionSynCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateTcpActionSynCfgList",
      },
      drop_known_resp_src_port_cfg: {
        value: ddosTemplateTcpDropKnownRespSrcPortCfgToHclTerraform(this._dropKnownRespSrcPortCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateTcpDropKnownRespSrcPortCfgList",
      },
      dst: {
        value: ddosTemplateTcpDstToHclTerraform(this._dst.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateTcpDstList",
      },
      filter_list: {
        value: cdktf.listMapperHcl(ddosTemplateTcpFilterListStructToHclTerraform, true)(this._filterList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateTcpFilterListStructList",
      },
      progression_tracking: {
        value: ddosTemplateTcpProgressionTrackingToHclTerraform(this._progressionTracking.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateTcpProgressionTrackingList",
      },
      src: {
        value: ddosTemplateTcpSrcToHclTerraform(this._src.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateTcpSrcList",
      },
      tunnel_encap: {
        value: ddosTemplateTcpTunnelEncapToHclTerraform(this._tunnelEncap.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateTcpTunnelEncapList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
