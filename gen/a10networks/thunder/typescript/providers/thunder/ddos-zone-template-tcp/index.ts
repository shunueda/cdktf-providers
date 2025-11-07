// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosZoneTemplateTcpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Reset client TCP SYN+ACK for authentication (DST support only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#ack_authentication_synack_reset DdosZoneTemplateTcp#ack_authentication_synack_reset}
  */
  readonly ackAuthenticationSynackReset?: number;
  /**
  * Take action if ack-auth RTO-authentication fail over retry time(default:5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#action_on_ack_rto_retry_count DdosZoneTemplateTcp#action_on_ack_rto_retry_count}
  */
  readonly actionOnAckRtoRetryCount?: number;
  /**
  * Take action if syn-auth RTO-authentication fail over retry time(default:5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#action_on_syn_rto_retry_count DdosZoneTemplateTcp#action_on_syn_rto_retry_count}
  */
  readonly actionOnSynRtoRetryCount?: number;
  /**
  * Session age in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#age DdosZoneTemplateTcp#age}
  */
  readonly age?: number;
  /**
  * Treat TCP SYN+PSH as a TCP SYN (DST tcp ports support only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#allow_syn_otherflags DdosZoneTemplateTcp#allow_syn_otherflags}
  */
  readonly allowSynOtherflags?: number;
  /**
  * Allow create sessions on SYNACK without syn-auth and ack-auth (ASYM Mode only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#allow_synack_skip_authentications DdosZoneTemplateTcp#allow_synack_skip_authentications}
  */
  readonly allowSynackSkipAuthentications?: number;
  /**
  * Allow TCP Fast Open
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#allow_tcp_tfo DdosZoneTemplateTcp#allow_tcp_tfo}
  */
  readonly allowTcpTfo?: number;
  /**
  * Enable concurrent port access for non-matching ports (DST support only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#concurrent DdosZoneTemplateTcp#concurrent}
  */
  readonly concurrent?: number;
  /**
  * Only count SYN-initiated connections towards connection-rate tracking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#conn_rate_limit_on_syn_only DdosZoneTemplateTcp#conn_rate_limit_on_syn_only}
  */
  readonly connRateLimitOnSynOnly?: number;
  /**
  * Enable connection establishment on SYN only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#create_conn_on_syn_only DdosZoneTemplateTcp#create_conn_on_syn_only}
  */
  readonly createConnOnSynOnly?: number;
  /**
  * 'default': Stop matching on drop/blacklist action; 'stop-on-first-match': Stop matching on first match;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#filter_match_type DdosZoneTemplateTcp#filter_match_type}
  */
  readonly filterMatchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#id DdosZoneTemplateTcp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#name DdosZoneTemplateTcp#name}
  */
  readonly name: string;
  /**
  * '100ms': 100ms; '1sec': 1sec; '10sec': 10sec;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#per_conn_rate_interval DdosZoneTemplateTcp#per_conn_rate_interval}
  */
  readonly perConnRateInterval?: string;
  /**
  * Enable SYN Cookie
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#syn_cookie DdosZoneTemplateTcp#syn_cookie}
  */
  readonly synCookie?: number;
  /**
  * Config SYNACK rate limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#synack_rate_limit DdosZoneTemplateTcp#synack_rate_limit}
  */
  readonly synackRateLimit?: number;
  /**
  * SYNACK will be counted in Dst Syn-rate limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#track_together_with_syn DdosZoneTemplateTcp#track_together_with_syn}
  */
  readonly trackTogetherWithSyn?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#user_tag DdosZoneTemplateTcp#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#uuid DdosZoneTemplateTcp#uuid}
  */
  readonly uuid?: string;
  /**
  * ack_authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#ack_authentication DdosZoneTemplateTcp#ack_authentication}
  */
  readonly ackAuthentication?: DdosZoneTemplateTcpAckAuthentication;
  /**
  * dst block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#dst DdosZoneTemplateTcp#dst}
  */
  readonly dst?: DdosZoneTemplateTcpDst;
  /**
  * filter_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#filter_list DdosZoneTemplateTcp#filter_list}
  */
  readonly filterList?: DdosZoneTemplateTcpFilterListStruct[] | cdktf.IResolvable;
  /**
  * known_resp_src_port_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#known_resp_src_port_cfg DdosZoneTemplateTcp#known_resp_src_port_cfg}
  */
  readonly knownRespSrcPortCfg?: DdosZoneTemplateTcpKnownRespSrcPortCfg;
  /**
  * max_rexmit_syn_per_flow_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#max_rexmit_syn_per_flow_cfg DdosZoneTemplateTcp#max_rexmit_syn_per_flow_cfg}
  */
  readonly maxRexmitSynPerFlowCfg?: DdosZoneTemplateTcpMaxRexmitSynPerFlowCfg;
  /**
  * out_of_seq_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#out_of_seq_cfg DdosZoneTemplateTcp#out_of_seq_cfg}
  */
  readonly outOfSeqCfg?: DdosZoneTemplateTcpOutOfSeqCfg;
  /**
  * per_conn_out_of_seq_rate_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#per_conn_out_of_seq_rate_cfg DdosZoneTemplateTcp#per_conn_out_of_seq_rate_cfg}
  */
  readonly perConnOutOfSeqRateCfg?: DdosZoneTemplateTcpPerConnOutOfSeqRateCfg;
  /**
  * per_conn_pkt_rate_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#per_conn_pkt_rate_cfg DdosZoneTemplateTcp#per_conn_pkt_rate_cfg}
  */
  readonly perConnPktRateCfg?: DdosZoneTemplateTcpPerConnPktRateCfg;
  /**
  * per_conn_retransmit_rate_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#per_conn_retransmit_rate_cfg DdosZoneTemplateTcp#per_conn_retransmit_rate_cfg}
  */
  readonly perConnRetransmitRateCfg?: DdosZoneTemplateTcpPerConnRetransmitRateCfg;
  /**
  * per_conn_zero_win_rate_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#per_conn_zero_win_rate_cfg DdosZoneTemplateTcp#per_conn_zero_win_rate_cfg}
  */
  readonly perConnZeroWinRateCfg?: DdosZoneTemplateTcpPerConnZeroWinRateCfg;
  /**
  * progression_tracking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#progression_tracking DdosZoneTemplateTcp#progression_tracking}
  */
  readonly progressionTracking?: DdosZoneTemplateTcpProgressionTracking;
  /**
  * retransmit_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#retransmit_cfg DdosZoneTemplateTcp#retransmit_cfg}
  */
  readonly retransmitCfg?: DdosZoneTemplateTcpRetransmitCfg;
  /**
  * src block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#src DdosZoneTemplateTcp#src}
  */
  readonly src?: DdosZoneTemplateTcpSrc;
  /**
  * syn_authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#syn_authentication DdosZoneTemplateTcp#syn_authentication}
  */
  readonly synAuthentication?: DdosZoneTemplateTcpSynAuthentication;
  /**
  * zero_win_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#zero_win_cfg DdosZoneTemplateTcp#zero_win_cfg}
  */
  readonly zeroWinCfg?: DdosZoneTemplateTcpZeroWinCfg;
}
export interface DdosZoneTemplateTcpAckAuthentication {
  /**
  * 'drop': Drop packets (Default); 'blacklist-src': Blacklist-src; 'reset': Send reset to client;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#ack_auth_fail_action DdosZoneTemplateTcp#ack_auth_fail_action}
  */
  readonly ackAuthFailAction?: string;
  /**
  * Configure action-list to take for failing the authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#ack_auth_fail_action_list_name DdosZoneTemplateTcp#ack_auth_fail_action_list_name}
  */
  readonly ackAuthFailActionListName?: string;
  /**
  * Minimum delay (in 100ms intervals) between ACK retransmits for retransmit-check to pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#ack_auth_min_delay DdosZoneTemplateTcp#ack_auth_min_delay}
  */
  readonly ackAuthMinDelay?: number;
  /**
  * Apply retransmit-check only once per source address for authentication purpose
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#ack_auth_only DdosZoneTemplateTcp#ack_auth_only}
  */
  readonly ackAuthOnly?: number;
  /**
  * 'authenticate-src': authenticate-src (Default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#ack_auth_pass_action DdosZoneTemplateTcp#ack_auth_pass_action}
  */
  readonly ackAuthPassAction?: string;
  /**
  * Configure action-list to take for passing the authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#ack_auth_pass_action_list_name DdosZoneTemplateTcp#ack_auth_pass_action_list_name}
  */
  readonly ackAuthPassActionListName?: string;
  /**
  * Estimate the RTO and apply the exponential back-off for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#ack_auth_rto DdosZoneTemplateTcp#ack_auth_rto}
  */
  readonly ackAuthRto?: number;
  /**
  * ack retransmit timeout in seconds(default timeout: 5 seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#ack_auth_timeout DdosZoneTemplateTcp#ack_auth_timeout}
  */
  readonly ackAuthTimeout?: number;
}

export function ddosZoneTemplateTcpAckAuthenticationToTerraform(struct?: DdosZoneTemplateTcpAckAuthenticationOutputReference | DdosZoneTemplateTcpAckAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ack_auth_fail_action: cdktf.stringToTerraform(struct!.ackAuthFailAction),
    ack_auth_fail_action_list_name: cdktf.stringToTerraform(struct!.ackAuthFailActionListName),
    ack_auth_min_delay: cdktf.numberToTerraform(struct!.ackAuthMinDelay),
    ack_auth_only: cdktf.numberToTerraform(struct!.ackAuthOnly),
    ack_auth_pass_action: cdktf.stringToTerraform(struct!.ackAuthPassAction),
    ack_auth_pass_action_list_name: cdktf.stringToTerraform(struct!.ackAuthPassActionListName),
    ack_auth_rto: cdktf.numberToTerraform(struct!.ackAuthRto),
    ack_auth_timeout: cdktf.numberToTerraform(struct!.ackAuthTimeout),
  }
}


export function ddosZoneTemplateTcpAckAuthenticationToHclTerraform(struct?: DdosZoneTemplateTcpAckAuthenticationOutputReference | DdosZoneTemplateTcpAckAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ack_auth_fail_action: {
      value: cdktf.stringToHclTerraform(struct!.ackAuthFailAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ack_auth_fail_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.ackAuthFailActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ack_auth_min_delay: {
      value: cdktf.numberToHclTerraform(struct!.ackAuthMinDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ack_auth_only: {
      value: cdktf.numberToHclTerraform(struct!.ackAuthOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ack_auth_pass_action: {
      value: cdktf.stringToHclTerraform(struct!.ackAuthPassAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ack_auth_pass_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.ackAuthPassActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ack_auth_rto: {
      value: cdktf.numberToHclTerraform(struct!.ackAuthRto),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ack_auth_timeout: {
      value: cdktf.numberToHclTerraform(struct!.ackAuthTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateTcpAckAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateTcpAckAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ackAuthFailAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackAuthFailAction = this._ackAuthFailAction;
    }
    if (this._ackAuthFailActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackAuthFailActionListName = this._ackAuthFailActionListName;
    }
    if (this._ackAuthMinDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackAuthMinDelay = this._ackAuthMinDelay;
    }
    if (this._ackAuthOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackAuthOnly = this._ackAuthOnly;
    }
    if (this._ackAuthPassAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackAuthPassAction = this._ackAuthPassAction;
    }
    if (this._ackAuthPassActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackAuthPassActionListName = this._ackAuthPassActionListName;
    }
    if (this._ackAuthRto !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackAuthRto = this._ackAuthRto;
    }
    if (this._ackAuthTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackAuthTimeout = this._ackAuthTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateTcpAckAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ackAuthFailAction = undefined;
      this._ackAuthFailActionListName = undefined;
      this._ackAuthMinDelay = undefined;
      this._ackAuthOnly = undefined;
      this._ackAuthPassAction = undefined;
      this._ackAuthPassActionListName = undefined;
      this._ackAuthRto = undefined;
      this._ackAuthTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ackAuthFailAction = value.ackAuthFailAction;
      this._ackAuthFailActionListName = value.ackAuthFailActionListName;
      this._ackAuthMinDelay = value.ackAuthMinDelay;
      this._ackAuthOnly = value.ackAuthOnly;
      this._ackAuthPassAction = value.ackAuthPassAction;
      this._ackAuthPassActionListName = value.ackAuthPassActionListName;
      this._ackAuthRto = value.ackAuthRto;
      this._ackAuthTimeout = value.ackAuthTimeout;
    }
  }

  // ack_auth_fail_action - computed: false, optional: true, required: false
  private _ackAuthFailAction?: string; 
  public get ackAuthFailAction() {
    return this.getStringAttribute('ack_auth_fail_action');
  }
  public set ackAuthFailAction(value: string) {
    this._ackAuthFailAction = value;
  }
  public resetAckAuthFailAction() {
    this._ackAuthFailAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackAuthFailActionInput() {
    return this._ackAuthFailAction;
  }

  // ack_auth_fail_action_list_name - computed: false, optional: true, required: false
  private _ackAuthFailActionListName?: string; 
  public get ackAuthFailActionListName() {
    return this.getStringAttribute('ack_auth_fail_action_list_name');
  }
  public set ackAuthFailActionListName(value: string) {
    this._ackAuthFailActionListName = value;
  }
  public resetAckAuthFailActionListName() {
    this._ackAuthFailActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackAuthFailActionListNameInput() {
    return this._ackAuthFailActionListName;
  }

  // ack_auth_min_delay - computed: false, optional: true, required: false
  private _ackAuthMinDelay?: number; 
  public get ackAuthMinDelay() {
    return this.getNumberAttribute('ack_auth_min_delay');
  }
  public set ackAuthMinDelay(value: number) {
    this._ackAuthMinDelay = value;
  }
  public resetAckAuthMinDelay() {
    this._ackAuthMinDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackAuthMinDelayInput() {
    return this._ackAuthMinDelay;
  }

  // ack_auth_only - computed: false, optional: true, required: false
  private _ackAuthOnly?: number; 
  public get ackAuthOnly() {
    return this.getNumberAttribute('ack_auth_only');
  }
  public set ackAuthOnly(value: number) {
    this._ackAuthOnly = value;
  }
  public resetAckAuthOnly() {
    this._ackAuthOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackAuthOnlyInput() {
    return this._ackAuthOnly;
  }

  // ack_auth_pass_action - computed: false, optional: true, required: false
  private _ackAuthPassAction?: string; 
  public get ackAuthPassAction() {
    return this.getStringAttribute('ack_auth_pass_action');
  }
  public set ackAuthPassAction(value: string) {
    this._ackAuthPassAction = value;
  }
  public resetAckAuthPassAction() {
    this._ackAuthPassAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackAuthPassActionInput() {
    return this._ackAuthPassAction;
  }

  // ack_auth_pass_action_list_name - computed: false, optional: true, required: false
  private _ackAuthPassActionListName?: string; 
  public get ackAuthPassActionListName() {
    return this.getStringAttribute('ack_auth_pass_action_list_name');
  }
  public set ackAuthPassActionListName(value: string) {
    this._ackAuthPassActionListName = value;
  }
  public resetAckAuthPassActionListName() {
    this._ackAuthPassActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackAuthPassActionListNameInput() {
    return this._ackAuthPassActionListName;
  }

  // ack_auth_rto - computed: false, optional: true, required: false
  private _ackAuthRto?: number; 
  public get ackAuthRto() {
    return this.getNumberAttribute('ack_auth_rto');
  }
  public set ackAuthRto(value: number) {
    this._ackAuthRto = value;
  }
  public resetAckAuthRto() {
    this._ackAuthRto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackAuthRtoInput() {
    return this._ackAuthRto;
  }

  // ack_auth_timeout - computed: false, optional: true, required: false
  private _ackAuthTimeout?: number; 
  public get ackAuthTimeout() {
    return this.getNumberAttribute('ack_auth_timeout');
  }
  public set ackAuthTimeout(value: number) {
    this._ackAuthTimeout = value;
  }
  public resetAckAuthTimeout() {
    this._ackAuthTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackAuthTimeoutInput() {
    return this._ackAuthTimeout;
  }
}
export interface DdosZoneTemplateTcpDstRateLimitSynRateLimit {
  /**
  * 'drop': Drop packets for syn-rate exceed (Default); 'ignore': Ignore syn-rate-exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#dst_syn_rate_action DdosZoneTemplateTcp#dst_syn_rate_action}
  */
  readonly dstSynRateAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#dst_syn_rate_limit DdosZoneTemplateTcp#dst_syn_rate_limit}
  */
  readonly dstSynRateLimit?: number;
}

export function ddosZoneTemplateTcpDstRateLimitSynRateLimitToTerraform(struct?: DdosZoneTemplateTcpDstRateLimitSynRateLimitOutputReference | DdosZoneTemplateTcpDstRateLimitSynRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_syn_rate_action: cdktf.stringToTerraform(struct!.dstSynRateAction),
    dst_syn_rate_limit: cdktf.numberToTerraform(struct!.dstSynRateLimit),
  }
}


export function ddosZoneTemplateTcpDstRateLimitSynRateLimitToHclTerraform(struct?: DdosZoneTemplateTcpDstRateLimitSynRateLimitOutputReference | DdosZoneTemplateTcpDstRateLimitSynRateLimit): any {
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

export class DdosZoneTemplateTcpDstRateLimitSynRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateTcpDstRateLimitSynRateLimit | undefined {
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

  public set internalValue(value: DdosZoneTemplateTcpDstRateLimitSynRateLimit | undefined) {
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
export interface DdosZoneTemplateTcpDstRateLimit {
  /**
  * syn_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#syn_rate_limit DdosZoneTemplateTcp#syn_rate_limit}
  */
  readonly synRateLimit?: DdosZoneTemplateTcpDstRateLimitSynRateLimit;
}

export function ddosZoneTemplateTcpDstRateLimitToTerraform(struct?: DdosZoneTemplateTcpDstRateLimitOutputReference | DdosZoneTemplateTcpDstRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    syn_rate_limit: ddosZoneTemplateTcpDstRateLimitSynRateLimitToTerraform(struct!.synRateLimit),
  }
}


export function ddosZoneTemplateTcpDstRateLimitToHclTerraform(struct?: DdosZoneTemplateTcpDstRateLimitOutputReference | DdosZoneTemplateTcpDstRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    syn_rate_limit: {
      value: ddosZoneTemplateTcpDstRateLimitSynRateLimitToHclTerraform(struct!.synRateLimit),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateTcpDstRateLimitSynRateLimitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateTcpDstRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateTcpDstRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._synRateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.synRateLimit = this._synRateLimit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateTcpDstRateLimit | undefined) {
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
  private _synRateLimit = new DdosZoneTemplateTcpDstRateLimitSynRateLimitOutputReference(this, "syn_rate_limit");
  public get synRateLimit() {
    return this._synRateLimit;
  }
  public putSynRateLimit(value: DdosZoneTemplateTcpDstRateLimitSynRateLimit) {
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
export interface DdosZoneTemplateTcpDst {
  /**
  * rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#rate_limit DdosZoneTemplateTcp#rate_limit}
  */
  readonly rateLimit?: DdosZoneTemplateTcpDstRateLimit;
}

export function ddosZoneTemplateTcpDstToTerraform(struct?: DdosZoneTemplateTcpDstOutputReference | DdosZoneTemplateTcpDst): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rate_limit: ddosZoneTemplateTcpDstRateLimitToTerraform(struct!.rateLimit),
  }
}


export function ddosZoneTemplateTcpDstToHclTerraform(struct?: DdosZoneTemplateTcpDstOutputReference | DdosZoneTemplateTcpDst): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rate_limit: {
      value: ddosZoneTemplateTcpDstRateLimitToHclTerraform(struct!.rateLimit),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateTcpDstRateLimitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateTcpDstOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateTcpDst | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateTcpDst | undefined) {
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
  private _rateLimit = new DdosZoneTemplateTcpDstRateLimitOutputReference(this, "rate_limit");
  public get rateLimit() {
    return this._rateLimit;
  }
  public putRateLimit(value: DdosZoneTemplateTcpDstRateLimit) {
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
export interface DdosZoneTemplateTcpFilterListStruct {
  /**
  * Filter using Berkeley Packet Filter syntax
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#byte_offset_filter DdosZoneTemplateTcp#byte_offset_filter}
  */
  readonly byteOffsetFilter?: string;
  /**
  * 'drop': Drop packets (Default); 'ignore': Take no action; 'blacklist-src': Blacklist-src; 'authenticate-src': Authenticate-src;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#tcp_filter_action DdosZoneTemplateTcp#tcp_filter_action}
  */
  readonly tcpFilterAction?: string;
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#tcp_filter_action_list_name DdosZoneTemplateTcp#tcp_filter_action_list_name}
  */
  readonly tcpFilterActionListName?: string;
  /**
  * Inverse the result of the matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#tcp_filter_inverse_match DdosZoneTemplateTcp#tcp_filter_inverse_match}
  */
  readonly tcpFilterInverseMatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#tcp_filter_name DdosZoneTemplateTcp#tcp_filter_name}
  */
  readonly tcpFilterName: string;
  /**
  * Regex Expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#tcp_filter_regex DdosZoneTemplateTcp#tcp_filter_regex}
  */
  readonly tcpFilterRegex?: string;
  /**
  * Sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#tcp_filter_seq DdosZoneTemplateTcp#tcp_filter_seq}
  */
  readonly tcpFilterSeq?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#user_tag DdosZoneTemplateTcp#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#uuid DdosZoneTemplateTcp#uuid}
  */
  readonly uuid?: string;
}

export function ddosZoneTemplateTcpFilterListStructToTerraform(struct?: DdosZoneTemplateTcpFilterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    byte_offset_filter: cdktf.stringToTerraform(struct!.byteOffsetFilter),
    tcp_filter_action: cdktf.stringToTerraform(struct!.tcpFilterAction),
    tcp_filter_action_list_name: cdktf.stringToTerraform(struct!.tcpFilterActionListName),
    tcp_filter_inverse_match: cdktf.numberToTerraform(struct!.tcpFilterInverseMatch),
    tcp_filter_name: cdktf.stringToTerraform(struct!.tcpFilterName),
    tcp_filter_regex: cdktf.stringToTerraform(struct!.tcpFilterRegex),
    tcp_filter_seq: cdktf.numberToTerraform(struct!.tcpFilterSeq),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosZoneTemplateTcpFilterListStructToHclTerraform(struct?: DdosZoneTemplateTcpFilterListStruct | cdktf.IResolvable): any {
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
    tcp_filter_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.tcpFilterActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_filter_inverse_match: {
      value: cdktf.numberToHclTerraform(struct!.tcpFilterInverseMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_filter_name: {
      value: cdktf.stringToHclTerraform(struct!.tcpFilterName),
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

export class DdosZoneTemplateTcpFilterListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneTemplateTcpFilterListStruct | cdktf.IResolvable | undefined {
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
    if (this._tcpFilterActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFilterActionListName = this._tcpFilterActionListName;
    }
    if (this._tcpFilterInverseMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFilterInverseMatch = this._tcpFilterInverseMatch;
    }
    if (this._tcpFilterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFilterName = this._tcpFilterName;
    }
    if (this._tcpFilterRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFilterRegex = this._tcpFilterRegex;
    }
    if (this._tcpFilterSeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFilterSeq = this._tcpFilterSeq;
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

  public set internalValue(value: DdosZoneTemplateTcpFilterListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._byteOffsetFilter = undefined;
      this._tcpFilterAction = undefined;
      this._tcpFilterActionListName = undefined;
      this._tcpFilterInverseMatch = undefined;
      this._tcpFilterName = undefined;
      this._tcpFilterRegex = undefined;
      this._tcpFilterSeq = undefined;
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
      this._tcpFilterActionListName = value.tcpFilterActionListName;
      this._tcpFilterInverseMatch = value.tcpFilterInverseMatch;
      this._tcpFilterName = value.tcpFilterName;
      this._tcpFilterRegex = value.tcpFilterRegex;
      this._tcpFilterSeq = value.tcpFilterSeq;
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

  // tcp_filter_action_list_name - computed: false, optional: true, required: false
  private _tcpFilterActionListName?: string; 
  public get tcpFilterActionListName() {
    return this.getStringAttribute('tcp_filter_action_list_name');
  }
  public set tcpFilterActionListName(value: string) {
    this._tcpFilterActionListName = value;
  }
  public resetTcpFilterActionListName() {
    this._tcpFilterActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFilterActionListNameInput() {
    return this._tcpFilterActionListName;
  }

  // tcp_filter_inverse_match - computed: false, optional: true, required: false
  private _tcpFilterInverseMatch?: number; 
  public get tcpFilterInverseMatch() {
    return this.getNumberAttribute('tcp_filter_inverse_match');
  }
  public set tcpFilterInverseMatch(value: number) {
    this._tcpFilterInverseMatch = value;
  }
  public resetTcpFilterInverseMatch() {
    this._tcpFilterInverseMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFilterInverseMatchInput() {
    return this._tcpFilterInverseMatch;
  }

  // tcp_filter_name - computed: false, optional: false, required: true
  private _tcpFilterName?: string; 
  public get tcpFilterName() {
    return this.getStringAttribute('tcp_filter_name');
  }
  public set tcpFilterName(value: string) {
    this._tcpFilterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFilterNameInput() {
    return this._tcpFilterName;
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

  // tcp_filter_seq - computed: false, optional: true, required: false
  private _tcpFilterSeq?: number; 
  public get tcpFilterSeq() {
    return this.getNumberAttribute('tcp_filter_seq');
  }
  public set tcpFilterSeq(value: number) {
    this._tcpFilterSeq = value;
  }
  public resetTcpFilterSeq() {
    this._tcpFilterSeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFilterSeqInput() {
    return this._tcpFilterSeq;
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

export class DdosZoneTemplateTcpFilterListStructList extends cdktf.ComplexList {
  public internalValue? : DdosZoneTemplateTcpFilterListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneTemplateTcpFilterListStructOutputReference {
    return new DdosZoneTemplateTcpFilterListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosZoneTemplateTcpKnownRespSrcPortCfg {
  /**
  * Exclude src port equal to dst port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#exclude_src_resp_port DdosZoneTemplateTcp#exclude_src_resp_port}
  */
  readonly excludeSrcRespPort?: number;
  /**
  * Take action if src-port is less than 1024
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#known_resp_src_port DdosZoneTemplateTcp#known_resp_src_port}
  */
  readonly knownRespSrcPort?: number;
  /**
  * 'drop': Drop packets from well-known src-port(Default); 'blacklist-src': Blacklist-src from well-known src-port; 'ignore': Ignore well-known src-port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#known_resp_src_port_action DdosZoneTemplateTcp#known_resp_src_port_action}
  */
  readonly knownRespSrcPortAction?: string;
  /**
  * Configure action-list to take for well-known src-port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#known_resp_src_port_action_list_name DdosZoneTemplateTcp#known_resp_src_port_action_list_name}
  */
  readonly knownRespSrcPortActionListName?: string;
}

export function ddosZoneTemplateTcpKnownRespSrcPortCfgToTerraform(struct?: DdosZoneTemplateTcpKnownRespSrcPortCfgOutputReference | DdosZoneTemplateTcpKnownRespSrcPortCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_src_resp_port: cdktf.numberToTerraform(struct!.excludeSrcRespPort),
    known_resp_src_port: cdktf.numberToTerraform(struct!.knownRespSrcPort),
    known_resp_src_port_action: cdktf.stringToTerraform(struct!.knownRespSrcPortAction),
    known_resp_src_port_action_list_name: cdktf.stringToTerraform(struct!.knownRespSrcPortActionListName),
  }
}


export function ddosZoneTemplateTcpKnownRespSrcPortCfgToHclTerraform(struct?: DdosZoneTemplateTcpKnownRespSrcPortCfgOutputReference | DdosZoneTemplateTcpKnownRespSrcPortCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_src_resp_port: {
      value: cdktf.numberToHclTerraform(struct!.excludeSrcRespPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    known_resp_src_port: {
      value: cdktf.numberToHclTerraform(struct!.knownRespSrcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    known_resp_src_port_action: {
      value: cdktf.stringToHclTerraform(struct!.knownRespSrcPortAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    known_resp_src_port_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.knownRespSrcPortActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateTcpKnownRespSrcPortCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateTcpKnownRespSrcPortCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeSrcRespPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeSrcRespPort = this._excludeSrcRespPort;
    }
    if (this._knownRespSrcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.knownRespSrcPort = this._knownRespSrcPort;
    }
    if (this._knownRespSrcPortAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.knownRespSrcPortAction = this._knownRespSrcPortAction;
    }
    if (this._knownRespSrcPortActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.knownRespSrcPortActionListName = this._knownRespSrcPortActionListName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateTcpKnownRespSrcPortCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeSrcRespPort = undefined;
      this._knownRespSrcPort = undefined;
      this._knownRespSrcPortAction = undefined;
      this._knownRespSrcPortActionListName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeSrcRespPort = value.excludeSrcRespPort;
      this._knownRespSrcPort = value.knownRespSrcPort;
      this._knownRespSrcPortAction = value.knownRespSrcPortAction;
      this._knownRespSrcPortActionListName = value.knownRespSrcPortActionListName;
    }
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

  // known_resp_src_port - computed: false, optional: true, required: false
  private _knownRespSrcPort?: number; 
  public get knownRespSrcPort() {
    return this.getNumberAttribute('known_resp_src_port');
  }
  public set knownRespSrcPort(value: number) {
    this._knownRespSrcPort = value;
  }
  public resetKnownRespSrcPort() {
    this._knownRespSrcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knownRespSrcPortInput() {
    return this._knownRespSrcPort;
  }

  // known_resp_src_port_action - computed: false, optional: true, required: false
  private _knownRespSrcPortAction?: string; 
  public get knownRespSrcPortAction() {
    return this.getStringAttribute('known_resp_src_port_action');
  }
  public set knownRespSrcPortAction(value: string) {
    this._knownRespSrcPortAction = value;
  }
  public resetKnownRespSrcPortAction() {
    this._knownRespSrcPortAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knownRespSrcPortActionInput() {
    return this._knownRespSrcPortAction;
  }

  // known_resp_src_port_action_list_name - computed: false, optional: true, required: false
  private _knownRespSrcPortActionListName?: string; 
  public get knownRespSrcPortActionListName() {
    return this.getStringAttribute('known_resp_src_port_action_list_name');
  }
  public set knownRespSrcPortActionListName(value: string) {
    this._knownRespSrcPortActionListName = value;
  }
  public resetKnownRespSrcPortActionListName() {
    this._knownRespSrcPortActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knownRespSrcPortActionListNameInput() {
    return this._knownRespSrcPortActionListName;
  }
}
export interface DdosZoneTemplateTcpMaxRexmitSynPerFlowCfg {
  /**
  * Maximum number of re-transmit SYN per flow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#max_rexmit_syn_per_flow DdosZoneTemplateTcp#max_rexmit_syn_per_flow}
  */
  readonly maxRexmitSynPerFlow?: number;
  /**
  * 'drop': Drop SYN packets for max-rexmit-syn-per-flow exceed (Default); 'blacklist-src': help Blacklist-src for max-rexmit-syn-per-flow exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#max_rexmit_syn_per_flow_action DdosZoneTemplateTcp#max_rexmit_syn_per_flow_action}
  */
  readonly maxRexmitSynPerFlowAction?: string;
  /**
  * Configure action-list to take for max-rexmit-syn-per-flow exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#max_rexmit_syn_per_flow_action_list_name DdosZoneTemplateTcp#max_rexmit_syn_per_flow_action_list_name}
  */
  readonly maxRexmitSynPerFlowActionListName?: string;
}

export function ddosZoneTemplateTcpMaxRexmitSynPerFlowCfgToTerraform(struct?: DdosZoneTemplateTcpMaxRexmitSynPerFlowCfgOutputReference | DdosZoneTemplateTcpMaxRexmitSynPerFlowCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_rexmit_syn_per_flow: cdktf.numberToTerraform(struct!.maxRexmitSynPerFlow),
    max_rexmit_syn_per_flow_action: cdktf.stringToTerraform(struct!.maxRexmitSynPerFlowAction),
    max_rexmit_syn_per_flow_action_list_name: cdktf.stringToTerraform(struct!.maxRexmitSynPerFlowActionListName),
  }
}


export function ddosZoneTemplateTcpMaxRexmitSynPerFlowCfgToHclTerraform(struct?: DdosZoneTemplateTcpMaxRexmitSynPerFlowCfgOutputReference | DdosZoneTemplateTcpMaxRexmitSynPerFlowCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_rexmit_syn_per_flow: {
      value: cdktf.numberToHclTerraform(struct!.maxRexmitSynPerFlow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_rexmit_syn_per_flow_action: {
      value: cdktf.stringToHclTerraform(struct!.maxRexmitSynPerFlowAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_rexmit_syn_per_flow_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.maxRexmitSynPerFlowActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateTcpMaxRexmitSynPerFlowCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateTcpMaxRexmitSynPerFlowCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxRexmitSynPerFlow !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRexmitSynPerFlow = this._maxRexmitSynPerFlow;
    }
    if (this._maxRexmitSynPerFlowAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRexmitSynPerFlowAction = this._maxRexmitSynPerFlowAction;
    }
    if (this._maxRexmitSynPerFlowActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRexmitSynPerFlowActionListName = this._maxRexmitSynPerFlowActionListName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateTcpMaxRexmitSynPerFlowCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxRexmitSynPerFlow = undefined;
      this._maxRexmitSynPerFlowAction = undefined;
      this._maxRexmitSynPerFlowActionListName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxRexmitSynPerFlow = value.maxRexmitSynPerFlow;
      this._maxRexmitSynPerFlowAction = value.maxRexmitSynPerFlowAction;
      this._maxRexmitSynPerFlowActionListName = value.maxRexmitSynPerFlowActionListName;
    }
  }

  // max_rexmit_syn_per_flow - computed: false, optional: true, required: false
  private _maxRexmitSynPerFlow?: number; 
  public get maxRexmitSynPerFlow() {
    return this.getNumberAttribute('max_rexmit_syn_per_flow');
  }
  public set maxRexmitSynPerFlow(value: number) {
    this._maxRexmitSynPerFlow = value;
  }
  public resetMaxRexmitSynPerFlow() {
    this._maxRexmitSynPerFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRexmitSynPerFlowInput() {
    return this._maxRexmitSynPerFlow;
  }

  // max_rexmit_syn_per_flow_action - computed: false, optional: true, required: false
  private _maxRexmitSynPerFlowAction?: string; 
  public get maxRexmitSynPerFlowAction() {
    return this.getStringAttribute('max_rexmit_syn_per_flow_action');
  }
  public set maxRexmitSynPerFlowAction(value: string) {
    this._maxRexmitSynPerFlowAction = value;
  }
  public resetMaxRexmitSynPerFlowAction() {
    this._maxRexmitSynPerFlowAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRexmitSynPerFlowActionInput() {
    return this._maxRexmitSynPerFlowAction;
  }

  // max_rexmit_syn_per_flow_action_list_name - computed: false, optional: true, required: false
  private _maxRexmitSynPerFlowActionListName?: string; 
  public get maxRexmitSynPerFlowActionListName() {
    return this.getStringAttribute('max_rexmit_syn_per_flow_action_list_name');
  }
  public set maxRexmitSynPerFlowActionListName(value: string) {
    this._maxRexmitSynPerFlowActionListName = value;
  }
  public resetMaxRexmitSynPerFlowActionListName() {
    this._maxRexmitSynPerFlowActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRexmitSynPerFlowActionListNameInput() {
    return this._maxRexmitSynPerFlowActionListName;
  }
}
export interface DdosZoneTemplateTcpOutOfSeqCfg {
  /**
  * Take action if out-of-seq pkts exceed configured threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#out_of_seq DdosZoneTemplateTcp#out_of_seq}
  */
  readonly outOfSeq?: number;
  /**
  * 'drop': Drop packets for out-of-seq exceed (Default); 'blacklist-src': help Blacklist-src for out-of-seq exceed; 'ignore': help Ignore out-of-seq exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#out_of_seq_action DdosZoneTemplateTcp#out_of_seq_action}
  */
  readonly outOfSeqAction?: string;
  /**
  * Configure action-list to take for out-of-seq exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#out_of_seq_action_list_name DdosZoneTemplateTcp#out_of_seq_action_list_name}
  */
  readonly outOfSeqActionListName?: string;
}

export function ddosZoneTemplateTcpOutOfSeqCfgToTerraform(struct?: DdosZoneTemplateTcpOutOfSeqCfgOutputReference | DdosZoneTemplateTcpOutOfSeqCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    out_of_seq: cdktf.numberToTerraform(struct!.outOfSeq),
    out_of_seq_action: cdktf.stringToTerraform(struct!.outOfSeqAction),
    out_of_seq_action_list_name: cdktf.stringToTerraform(struct!.outOfSeqActionListName),
  }
}


export function ddosZoneTemplateTcpOutOfSeqCfgToHclTerraform(struct?: DdosZoneTemplateTcpOutOfSeqCfgOutputReference | DdosZoneTemplateTcpOutOfSeqCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    out_of_seq: {
      value: cdktf.numberToHclTerraform(struct!.outOfSeq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out_of_seq_action: {
      value: cdktf.stringToHclTerraform(struct!.outOfSeqAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    out_of_seq_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.outOfSeqActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateTcpOutOfSeqCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateTcpOutOfSeqCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outOfSeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.outOfSeq = this._outOfSeq;
    }
    if (this._outOfSeqAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.outOfSeqAction = this._outOfSeqAction;
    }
    if (this._outOfSeqActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.outOfSeqActionListName = this._outOfSeqActionListName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateTcpOutOfSeqCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._outOfSeq = undefined;
      this._outOfSeqAction = undefined;
      this._outOfSeqActionListName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._outOfSeq = value.outOfSeq;
      this._outOfSeqAction = value.outOfSeqAction;
      this._outOfSeqActionListName = value.outOfSeqActionListName;
    }
  }

  // out_of_seq - computed: false, optional: true, required: false
  private _outOfSeq?: number; 
  public get outOfSeq() {
    return this.getNumberAttribute('out_of_seq');
  }
  public set outOfSeq(value: number) {
    this._outOfSeq = value;
  }
  public resetOutOfSeq() {
    this._outOfSeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfSeqInput() {
    return this._outOfSeq;
  }

  // out_of_seq_action - computed: false, optional: true, required: false
  private _outOfSeqAction?: string; 
  public get outOfSeqAction() {
    return this.getStringAttribute('out_of_seq_action');
  }
  public set outOfSeqAction(value: string) {
    this._outOfSeqAction = value;
  }
  public resetOutOfSeqAction() {
    this._outOfSeqAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfSeqActionInput() {
    return this._outOfSeqAction;
  }

  // out_of_seq_action_list_name - computed: false, optional: true, required: false
  private _outOfSeqActionListName?: string; 
  public get outOfSeqActionListName() {
    return this.getStringAttribute('out_of_seq_action_list_name');
  }
  public set outOfSeqActionListName(value: string) {
    this._outOfSeqActionListName = value;
  }
  public resetOutOfSeqActionListName() {
    this._outOfSeqActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfSeqActionListNameInput() {
    return this._outOfSeqActionListName;
  }
}
export interface DdosZoneTemplateTcpPerConnOutOfSeqRateCfg {
  /**
  * 'drop': Drop packets for out-of-seq rate exceed (Default); 'blacklist-src': help Blacklist-src for out-of-seq rate exceed; 'ignore': help Ignore out-of-seq rate exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#per_conn_out_of_seq_rate_action DdosZoneTemplateTcp#per_conn_out_of_seq_rate_action}
  */
  readonly perConnOutOfSeqRateAction?: string;
  /**
  * Configure action-list to take for out-of-seq rate exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#per_conn_out_of_seq_rate_action_list_name DdosZoneTemplateTcp#per_conn_out_of_seq_rate_action_list_name}
  */
  readonly perConnOutOfSeqRateActionListName?: string;
  /**
  * Take action if out-of-seq pkt rate exceed configured threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#per_conn_out_of_seq_rate_limit DdosZoneTemplateTcp#per_conn_out_of_seq_rate_limit}
  */
  readonly perConnOutOfSeqRateLimit?: number;
}

export function ddosZoneTemplateTcpPerConnOutOfSeqRateCfgToTerraform(struct?: DdosZoneTemplateTcpPerConnOutOfSeqRateCfgOutputReference | DdosZoneTemplateTcpPerConnOutOfSeqRateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    per_conn_out_of_seq_rate_action: cdktf.stringToTerraform(struct!.perConnOutOfSeqRateAction),
    per_conn_out_of_seq_rate_action_list_name: cdktf.stringToTerraform(struct!.perConnOutOfSeqRateActionListName),
    per_conn_out_of_seq_rate_limit: cdktf.numberToTerraform(struct!.perConnOutOfSeqRateLimit),
  }
}


export function ddosZoneTemplateTcpPerConnOutOfSeqRateCfgToHclTerraform(struct?: DdosZoneTemplateTcpPerConnOutOfSeqRateCfgOutputReference | DdosZoneTemplateTcpPerConnOutOfSeqRateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    per_conn_out_of_seq_rate_action: {
      value: cdktf.stringToHclTerraform(struct!.perConnOutOfSeqRateAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    per_conn_out_of_seq_rate_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.perConnOutOfSeqRateActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    per_conn_out_of_seq_rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.perConnOutOfSeqRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateTcpPerConnOutOfSeqRateCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateTcpPerConnOutOfSeqRateCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._perConnOutOfSeqRateAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.perConnOutOfSeqRateAction = this._perConnOutOfSeqRateAction;
    }
    if (this._perConnOutOfSeqRateActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.perConnOutOfSeqRateActionListName = this._perConnOutOfSeqRateActionListName;
    }
    if (this._perConnOutOfSeqRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.perConnOutOfSeqRateLimit = this._perConnOutOfSeqRateLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateTcpPerConnOutOfSeqRateCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._perConnOutOfSeqRateAction = undefined;
      this._perConnOutOfSeqRateActionListName = undefined;
      this._perConnOutOfSeqRateLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._perConnOutOfSeqRateAction = value.perConnOutOfSeqRateAction;
      this._perConnOutOfSeqRateActionListName = value.perConnOutOfSeqRateActionListName;
      this._perConnOutOfSeqRateLimit = value.perConnOutOfSeqRateLimit;
    }
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

  // per_conn_out_of_seq_rate_action_list_name - computed: false, optional: true, required: false
  private _perConnOutOfSeqRateActionListName?: string; 
  public get perConnOutOfSeqRateActionListName() {
    return this.getStringAttribute('per_conn_out_of_seq_rate_action_list_name');
  }
  public set perConnOutOfSeqRateActionListName(value: string) {
    this._perConnOutOfSeqRateActionListName = value;
  }
  public resetPerConnOutOfSeqRateActionListName() {
    this._perConnOutOfSeqRateActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perConnOutOfSeqRateActionListNameInput() {
    return this._perConnOutOfSeqRateActionListName;
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
}
export interface DdosZoneTemplateTcpPerConnPktRateCfg {
  /**
  * 'drop': Drop packets for per-conn-pkt-rate exceed (Default); 'blacklist-src': help Blacklist-src for per-conn-pkt-rate exceed; 'ignore': Ignore per-conn-pkt-rate-exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#per_conn_pkt_rate_action DdosZoneTemplateTcp#per_conn_pkt_rate_action}
  */
  readonly perConnPktRateAction?: string;
  /**
  * Configure action-list to take for per-conn-pkt-rate exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#per_conn_pkt_rate_action_list_name DdosZoneTemplateTcp#per_conn_pkt_rate_action_list_name}
  */
  readonly perConnPktRateActionListName?: string;
  /**
  * Packet rate limit per connection per rate-interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#per_conn_pkt_rate_limit DdosZoneTemplateTcp#per_conn_pkt_rate_limit}
  */
  readonly perConnPktRateLimit?: number;
}

export function ddosZoneTemplateTcpPerConnPktRateCfgToTerraform(struct?: DdosZoneTemplateTcpPerConnPktRateCfgOutputReference | DdosZoneTemplateTcpPerConnPktRateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    per_conn_pkt_rate_action: cdktf.stringToTerraform(struct!.perConnPktRateAction),
    per_conn_pkt_rate_action_list_name: cdktf.stringToTerraform(struct!.perConnPktRateActionListName),
    per_conn_pkt_rate_limit: cdktf.numberToTerraform(struct!.perConnPktRateLimit),
  }
}


export function ddosZoneTemplateTcpPerConnPktRateCfgToHclTerraform(struct?: DdosZoneTemplateTcpPerConnPktRateCfgOutputReference | DdosZoneTemplateTcpPerConnPktRateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    per_conn_pkt_rate_action: {
      value: cdktf.stringToHclTerraform(struct!.perConnPktRateAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    per_conn_pkt_rate_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.perConnPktRateActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    per_conn_pkt_rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.perConnPktRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateTcpPerConnPktRateCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateTcpPerConnPktRateCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._perConnPktRateAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.perConnPktRateAction = this._perConnPktRateAction;
    }
    if (this._perConnPktRateActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.perConnPktRateActionListName = this._perConnPktRateActionListName;
    }
    if (this._perConnPktRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.perConnPktRateLimit = this._perConnPktRateLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateTcpPerConnPktRateCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._perConnPktRateAction = undefined;
      this._perConnPktRateActionListName = undefined;
      this._perConnPktRateLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._perConnPktRateAction = value.perConnPktRateAction;
      this._perConnPktRateActionListName = value.perConnPktRateActionListName;
      this._perConnPktRateLimit = value.perConnPktRateLimit;
    }
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

  // per_conn_pkt_rate_action_list_name - computed: false, optional: true, required: false
  private _perConnPktRateActionListName?: string; 
  public get perConnPktRateActionListName() {
    return this.getStringAttribute('per_conn_pkt_rate_action_list_name');
  }
  public set perConnPktRateActionListName(value: string) {
    this._perConnPktRateActionListName = value;
  }
  public resetPerConnPktRateActionListName() {
    this._perConnPktRateActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perConnPktRateActionListNameInput() {
    return this._perConnPktRateActionListName;
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
}
export interface DdosZoneTemplateTcpPerConnRetransmitRateCfg {
  /**
  * 'drop': Drop packets for retrans rate exceed (Default); 'blacklist-src': help Blacklist-src for retrans rate exceed; 'ignore': help Ignore retrans rate exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#per_conn_retransmit_rate_action DdosZoneTemplateTcp#per_conn_retransmit_rate_action}
  */
  readonly perConnRetransmitRateAction?: string;
  /**
  * Configure action-list to take for retransmit rate exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#per_conn_retransmit_rate_action_list_name DdosZoneTemplateTcp#per_conn_retransmit_rate_action_list_name}
  */
  readonly perConnRetransmitRateActionListName?: string;
  /**
  * Take action if retransmit pkt rate exceed configured threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#per_conn_retransmit_rate_limit DdosZoneTemplateTcp#per_conn_retransmit_rate_limit}
  */
  readonly perConnRetransmitRateLimit?: number;
}

export function ddosZoneTemplateTcpPerConnRetransmitRateCfgToTerraform(struct?: DdosZoneTemplateTcpPerConnRetransmitRateCfgOutputReference | DdosZoneTemplateTcpPerConnRetransmitRateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    per_conn_retransmit_rate_action: cdktf.stringToTerraform(struct!.perConnRetransmitRateAction),
    per_conn_retransmit_rate_action_list_name: cdktf.stringToTerraform(struct!.perConnRetransmitRateActionListName),
    per_conn_retransmit_rate_limit: cdktf.numberToTerraform(struct!.perConnRetransmitRateLimit),
  }
}


export function ddosZoneTemplateTcpPerConnRetransmitRateCfgToHclTerraform(struct?: DdosZoneTemplateTcpPerConnRetransmitRateCfgOutputReference | DdosZoneTemplateTcpPerConnRetransmitRateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    per_conn_retransmit_rate_action: {
      value: cdktf.stringToHclTerraform(struct!.perConnRetransmitRateAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    per_conn_retransmit_rate_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.perConnRetransmitRateActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    per_conn_retransmit_rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.perConnRetransmitRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateTcpPerConnRetransmitRateCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateTcpPerConnRetransmitRateCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._perConnRetransmitRateAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.perConnRetransmitRateAction = this._perConnRetransmitRateAction;
    }
    if (this._perConnRetransmitRateActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.perConnRetransmitRateActionListName = this._perConnRetransmitRateActionListName;
    }
    if (this._perConnRetransmitRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.perConnRetransmitRateLimit = this._perConnRetransmitRateLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateTcpPerConnRetransmitRateCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._perConnRetransmitRateAction = undefined;
      this._perConnRetransmitRateActionListName = undefined;
      this._perConnRetransmitRateLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._perConnRetransmitRateAction = value.perConnRetransmitRateAction;
      this._perConnRetransmitRateActionListName = value.perConnRetransmitRateActionListName;
      this._perConnRetransmitRateLimit = value.perConnRetransmitRateLimit;
    }
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

  // per_conn_retransmit_rate_action_list_name - computed: false, optional: true, required: false
  private _perConnRetransmitRateActionListName?: string; 
  public get perConnRetransmitRateActionListName() {
    return this.getStringAttribute('per_conn_retransmit_rate_action_list_name');
  }
  public set perConnRetransmitRateActionListName(value: string) {
    this._perConnRetransmitRateActionListName = value;
  }
  public resetPerConnRetransmitRateActionListName() {
    this._perConnRetransmitRateActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perConnRetransmitRateActionListNameInput() {
    return this._perConnRetransmitRateActionListName;
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
}
export interface DdosZoneTemplateTcpPerConnZeroWinRateCfg {
  /**
  * 'drop': Drop packets for zero-win rate exceed (Default); 'blacklist-src': help Blacklist-src for zero-win rate exceed; 'ignore': Ignore zero-win rate exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#per_conn_zero_win_rate_action DdosZoneTemplateTcp#per_conn_zero_win_rate_action}
  */
  readonly perConnZeroWinRateAction?: string;
  /**
  * Configure action-list to take for zero window rate exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#per_conn_zero_win_rate_action_list_name DdosZoneTemplateTcp#per_conn_zero_win_rate_action_list_name}
  */
  readonly perConnZeroWinRateActionListName?: string;
  /**
  * Take action if zero window pkt rate exceed configured threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#per_conn_zero_win_rate_limit DdosZoneTemplateTcp#per_conn_zero_win_rate_limit}
  */
  readonly perConnZeroWinRateLimit?: number;
}

export function ddosZoneTemplateTcpPerConnZeroWinRateCfgToTerraform(struct?: DdosZoneTemplateTcpPerConnZeroWinRateCfgOutputReference | DdosZoneTemplateTcpPerConnZeroWinRateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    per_conn_zero_win_rate_action: cdktf.stringToTerraform(struct!.perConnZeroWinRateAction),
    per_conn_zero_win_rate_action_list_name: cdktf.stringToTerraform(struct!.perConnZeroWinRateActionListName),
    per_conn_zero_win_rate_limit: cdktf.numberToTerraform(struct!.perConnZeroWinRateLimit),
  }
}


export function ddosZoneTemplateTcpPerConnZeroWinRateCfgToHclTerraform(struct?: DdosZoneTemplateTcpPerConnZeroWinRateCfgOutputReference | DdosZoneTemplateTcpPerConnZeroWinRateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    per_conn_zero_win_rate_action: {
      value: cdktf.stringToHclTerraform(struct!.perConnZeroWinRateAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    per_conn_zero_win_rate_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.perConnZeroWinRateActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    per_conn_zero_win_rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.perConnZeroWinRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateTcpPerConnZeroWinRateCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateTcpPerConnZeroWinRateCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._perConnZeroWinRateAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.perConnZeroWinRateAction = this._perConnZeroWinRateAction;
    }
    if (this._perConnZeroWinRateActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.perConnZeroWinRateActionListName = this._perConnZeroWinRateActionListName;
    }
    if (this._perConnZeroWinRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.perConnZeroWinRateLimit = this._perConnZeroWinRateLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateTcpPerConnZeroWinRateCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._perConnZeroWinRateAction = undefined;
      this._perConnZeroWinRateActionListName = undefined;
      this._perConnZeroWinRateLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._perConnZeroWinRateAction = value.perConnZeroWinRateAction;
      this._perConnZeroWinRateActionListName = value.perConnZeroWinRateActionListName;
      this._perConnZeroWinRateLimit = value.perConnZeroWinRateLimit;
    }
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

  // per_conn_zero_win_rate_action_list_name - computed: false, optional: true, required: false
  private _perConnZeroWinRateActionListName?: string; 
  public get perConnZeroWinRateActionListName() {
    return this.getStringAttribute('per_conn_zero_win_rate_action_list_name');
  }
  public set perConnZeroWinRateActionListName(value: string) {
    this._perConnZeroWinRateActionListName = value;
  }
  public resetPerConnZeroWinRateActionListName() {
    this._perConnZeroWinRateActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perConnZeroWinRateActionListNameInput() {
    return this._perConnZeroWinRateActionListName;
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
}
export interface DdosZoneTemplateTcpProgressionTrackingConnectionTracking {
  /**
  * Set the maximum duration time (in unit of 100ms, up to 24 hours)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#conn_duration_max DdosZoneTemplateTcp#conn_duration_max}
  */
  readonly connDurationMax?: number;
  /**
  * Set the minimum duration time (in unit of 100ms, up to 24 hours)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#conn_duration_min DdosZoneTemplateTcp#conn_duration_min}
  */
  readonly connDurationMin?: number;
  /**
  * Set the maximum total received byte
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#conn_rcvd_max DdosZoneTemplateTcp#conn_rcvd_max}
  */
  readonly connRcvdMax?: number;
  /**
  * Set the minimum total received byte
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#conn_rcvd_min DdosZoneTemplateTcp#conn_rcvd_min}
  */
  readonly connRcvdMin?: number;
  /**
  * Set the maximum received to sent ratio (in unit of milli-, 0.001)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#conn_rcvd_sent_ratio_max DdosZoneTemplateTcp#conn_rcvd_sent_ratio_max}
  */
  readonly connRcvdSentRatioMax?: number;
  /**
  * Set the minimum received to sent ratio (in unit of milli-, 0.001)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#conn_rcvd_sent_ratio_min DdosZoneTemplateTcp#conn_rcvd_sent_ratio_min}
  */
  readonly connRcvdSentRatioMin?: number;
  /**
  * Set the maximum total sent byte
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#conn_sent_max DdosZoneTemplateTcp#conn_sent_max}
  */
  readonly connSentMax?: number;
  /**
  * Set the minimum total sent byte
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#conn_sent_min DdosZoneTemplateTcp#conn_sent_min}
  */
  readonly connSentMin?: number;
  /**
  * Set the violation threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#conn_violation DdosZoneTemplateTcp#conn_violation}
  */
  readonly connViolation?: number;
  /**
  * 'drop': Drop packets for progression tracking violation exceed (Default); 'blacklist-src': Blacklist-src for progression tracking violation exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#progression_tracking_conn_action DdosZoneTemplateTcp#progression_tracking_conn_action}
  */
  readonly progressionTrackingConnAction?: string;
  /**
  * Configure action-list to take when progression tracking violation exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#progression_tracking_conn_action_list_name DdosZoneTemplateTcp#progression_tracking_conn_action_list_name}
  */
  readonly progressionTrackingConnActionListName?: string;
  /**
  * 'enable-check': Enable General Progression Tracking per Connection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#progression_tracking_conn_enabled DdosZoneTemplateTcp#progression_tracking_conn_enabled}
  */
  readonly progressionTrackingConnEnabled?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#uuid DdosZoneTemplateTcp#uuid}
  */
  readonly uuid?: string;
}

export function ddosZoneTemplateTcpProgressionTrackingConnectionTrackingToTerraform(struct?: DdosZoneTemplateTcpProgressionTrackingConnectionTrackingOutputReference | DdosZoneTemplateTcpProgressionTrackingConnectionTracking): any {
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


export function ddosZoneTemplateTcpProgressionTrackingConnectionTrackingToHclTerraform(struct?: DdosZoneTemplateTcpProgressionTrackingConnectionTrackingOutputReference | DdosZoneTemplateTcpProgressionTrackingConnectionTracking): any {
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

export class DdosZoneTemplateTcpProgressionTrackingConnectionTrackingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateTcpProgressionTrackingConnectionTracking | undefined {
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

  public set internalValue(value: DdosZoneTemplateTcpProgressionTrackingConnectionTracking | undefined) {
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
export interface DdosZoneTemplateTcpProgressionTrackingTimeWindowTracking {
  /**
  * 'enable-check': Enable Progression Tracking per Time Window;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#progression_tracking_win_enabled DdosZoneTemplateTcp#progression_tracking_win_enabled}
  */
  readonly progressionTrackingWinEnabled?: string;
  /**
  * 'drop': Drop packets for progression tracking violation exceed (Default); 'blacklist-src': Blacklist-src for progression tracking violation exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#progression_tracking_windows_action DdosZoneTemplateTcp#progression_tracking_windows_action}
  */
  readonly progressionTrackingWindowsAction?: string;
  /**
  * Configure action-list to take when progression tracking violation exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#progression_tracking_windows_action_list_name DdosZoneTemplateTcp#progression_tracking_windows_action_list_name}
  */
  readonly progressionTrackingWindowsActionListName?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#uuid DdosZoneTemplateTcp#uuid}
  */
  readonly uuid?: string;
  /**
  * Set the maximum total received byte
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#window_rcvd_max DdosZoneTemplateTcp#window_rcvd_max}
  */
  readonly windowRcvdMax?: number;
  /**
  * Set the minimum total received byte
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#window_rcvd_min DdosZoneTemplateTcp#window_rcvd_min}
  */
  readonly windowRcvdMin?: number;
  /**
  * Set the maximum received to sent ratio (in unit of 0.1% [1:1000])
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#window_rcvd_sent_ratio_max DdosZoneTemplateTcp#window_rcvd_sent_ratio_max}
  */
  readonly windowRcvdSentRatioMax?: number;
  /**
  * Set the minimum received to sent ratio (in unit of 0.1% [1:1000])
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#window_rcvd_sent_ratio_min DdosZoneTemplateTcp#window_rcvd_sent_ratio_min}
  */
  readonly windowRcvdSentRatioMin?: number;
  /**
  * Set the maximum total sent byte
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#window_sent_max DdosZoneTemplateTcp#window_sent_max}
  */
  readonly windowSentMax?: number;
  /**
  * Set the minimum total sent byte
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#window_sent_min DdosZoneTemplateTcp#window_sent_min}
  */
  readonly windowSentMin?: number;
  /**
  * Set the violation threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#window_violation DdosZoneTemplateTcp#window_violation}
  */
  readonly windowViolation?: number;
}

export function ddosZoneTemplateTcpProgressionTrackingTimeWindowTrackingToTerraform(struct?: DdosZoneTemplateTcpProgressionTrackingTimeWindowTrackingOutputReference | DdosZoneTemplateTcpProgressionTrackingTimeWindowTracking): any {
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


export function ddosZoneTemplateTcpProgressionTrackingTimeWindowTrackingToHclTerraform(struct?: DdosZoneTemplateTcpProgressionTrackingTimeWindowTrackingOutputReference | DdosZoneTemplateTcpProgressionTrackingTimeWindowTracking): any {
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

export class DdosZoneTemplateTcpProgressionTrackingTimeWindowTrackingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateTcpProgressionTrackingTimeWindowTracking | undefined {
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

  public set internalValue(value: DdosZoneTemplateTcpProgressionTrackingTimeWindowTracking | undefined) {
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
export interface DdosZoneTemplateTcpProgressionTracking {
  /**
  * Set the maximum wait time from connection creation until the first data is transmitted over the connection (100 ms)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#first_request_max_time DdosZoneTemplateTcp#first_request_max_time}
  */
  readonly firstRequestMaxTime?: number;
  /**
  * Ignore TLS handshake
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#ignore_tls_handshake DdosZoneTemplateTcp#ignore_tls_handshake}
  */
  readonly ignoreTlsHandshake?: number;
  /**
  * Enable auto-config progression tracking learning for connection model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#profiling_connection_life_model DdosZoneTemplateTcp#profiling_connection_life_model}
  */
  readonly profilingConnectionLifeModel?: number;
  /**
  * Enable auto-config progression tracking learning for Request Response model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#profiling_request_response_model DdosZoneTemplateTcp#profiling_request_response_model}
  */
  readonly profilingRequestResponseModel?: number;
  /**
  * Enable auto-config progression tracking learning for time window model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#profiling_time_window_model DdosZoneTemplateTcp#profiling_time_window_model}
  */
  readonly profilingTimeWindowModel?: number;
  /**
  * 'drop': Drop packets for progression tracking violation exceed (Default); 'blacklist-src': Blacklist-src for progression tracking violation exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#progression_tracking_action DdosZoneTemplateTcp#progression_tracking_action}
  */
  readonly progressionTrackingAction?: string;
  /**
  * Configure action-list to take when progression tracking violation exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#progression_tracking_action_list_name DdosZoneTemplateTcp#progression_tracking_action_list_name}
  */
  readonly progressionTrackingActionListName?: string;
  /**
  * 'enable-check': Enable Progression Tracking Check;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#progression_tracking_enabled DdosZoneTemplateTcp#progression_tracking_enabled}
  */
  readonly progressionTrackingEnabled?: string;
  /**
  * Set the maximum request length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#request_length_max DdosZoneTemplateTcp#request_length_max}
  */
  readonly requestLengthMax?: number;
  /**
  * Set the minimum request length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#request_length_min DdosZoneTemplateTcp#request_length_min}
  */
  readonly requestLengthMin?: number;
  /**
  * 'enable': Enable Request Response Model; 'disable': Disable Request Response Model;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#request_response_model DdosZoneTemplateTcp#request_response_model}
  */
  readonly requestResponseModel?: string;
  /**
  * Set the maximum request to response time (100 ms)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#request_to_response_max_time DdosZoneTemplateTcp#request_to_response_max_time}
  */
  readonly requestToResponseMaxTime?: number;
  /**
  * Set the maximum response length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#response_length_max DdosZoneTemplateTcp#response_length_max}
  */
  readonly responseLengthMax?: number;
  /**
  * Set the minimum response length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#response_length_min DdosZoneTemplateTcp#response_length_min}
  */
  readonly responseLengthMin?: number;
  /**
  * Set the maximum response to request ratio (in unit of 0.1% [1:1000])
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#response_request_max_ratio DdosZoneTemplateTcp#response_request_max_ratio}
  */
  readonly responseRequestMaxRatio?: number;
  /**
  * Set the minimum response to request ratio (in unit of 0.1% [1:1000])
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#response_request_min_ratio DdosZoneTemplateTcp#response_request_min_ratio}
  */
  readonly responseRequestMinRatio?: number;
  /**
  * Set the maximum response to request time (100 ms)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#response_to_request_max_time DdosZoneTemplateTcp#response_to_request_max_time}
  */
  readonly responseToRequestMaxTime?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#uuid DdosZoneTemplateTcp#uuid}
  */
  readonly uuid?: string;
  /**
  * Set the violation threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#violation DdosZoneTemplateTcp#violation}
  */
  readonly violation?: number;
  /**
  * connection_tracking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#connection_tracking DdosZoneTemplateTcp#connection_tracking}
  */
  readonly connectionTracking?: DdosZoneTemplateTcpProgressionTrackingConnectionTracking;
  /**
  * time_window_tracking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#time_window_tracking DdosZoneTemplateTcp#time_window_tracking}
  */
  readonly timeWindowTracking?: DdosZoneTemplateTcpProgressionTrackingTimeWindowTracking;
}

export function ddosZoneTemplateTcpProgressionTrackingToTerraform(struct?: DdosZoneTemplateTcpProgressionTrackingOutputReference | DdosZoneTemplateTcpProgressionTracking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    first_request_max_time: cdktf.numberToTerraform(struct!.firstRequestMaxTime),
    ignore_tls_handshake: cdktf.numberToTerraform(struct!.ignoreTlsHandshake),
    profiling_connection_life_model: cdktf.numberToTerraform(struct!.profilingConnectionLifeModel),
    profiling_request_response_model: cdktf.numberToTerraform(struct!.profilingRequestResponseModel),
    profiling_time_window_model: cdktf.numberToTerraform(struct!.profilingTimeWindowModel),
    progression_tracking_action: cdktf.stringToTerraform(struct!.progressionTrackingAction),
    progression_tracking_action_list_name: cdktf.stringToTerraform(struct!.progressionTrackingActionListName),
    progression_tracking_enabled: cdktf.stringToTerraform(struct!.progressionTrackingEnabled),
    request_length_max: cdktf.numberToTerraform(struct!.requestLengthMax),
    request_length_min: cdktf.numberToTerraform(struct!.requestLengthMin),
    request_response_model: cdktf.stringToTerraform(struct!.requestResponseModel),
    request_to_response_max_time: cdktf.numberToTerraform(struct!.requestToResponseMaxTime),
    response_length_max: cdktf.numberToTerraform(struct!.responseLengthMax),
    response_length_min: cdktf.numberToTerraform(struct!.responseLengthMin),
    response_request_max_ratio: cdktf.numberToTerraform(struct!.responseRequestMaxRatio),
    response_request_min_ratio: cdktf.numberToTerraform(struct!.responseRequestMinRatio),
    response_to_request_max_time: cdktf.numberToTerraform(struct!.responseToRequestMaxTime),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    violation: cdktf.numberToTerraform(struct!.violation),
    connection_tracking: ddosZoneTemplateTcpProgressionTrackingConnectionTrackingToTerraform(struct!.connectionTracking),
    time_window_tracking: ddosZoneTemplateTcpProgressionTrackingTimeWindowTrackingToTerraform(struct!.timeWindowTracking),
  }
}


export function ddosZoneTemplateTcpProgressionTrackingToHclTerraform(struct?: DdosZoneTemplateTcpProgressionTrackingOutputReference | DdosZoneTemplateTcpProgressionTracking): any {
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
    ignore_tls_handshake: {
      value: cdktf.numberToHclTerraform(struct!.ignoreTlsHandshake),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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
    progression_tracking_action: {
      value: cdktf.stringToHclTerraform(struct!.progressionTrackingAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    progression_tracking_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.progressionTrackingActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    progression_tracking_enabled: {
      value: cdktf.stringToHclTerraform(struct!.progressionTrackingEnabled),
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
    response_request_max_ratio: {
      value: cdktf.numberToHclTerraform(struct!.responseRequestMaxRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_request_min_ratio: {
      value: cdktf.numberToHclTerraform(struct!.responseRequestMinRatio),
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
    connection_tracking: {
      value: ddosZoneTemplateTcpProgressionTrackingConnectionTrackingToHclTerraform(struct!.connectionTracking),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateTcpProgressionTrackingConnectionTrackingList",
    },
    time_window_tracking: {
      value: ddosZoneTemplateTcpProgressionTrackingTimeWindowTrackingToHclTerraform(struct!.timeWindowTracking),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateTcpProgressionTrackingTimeWindowTrackingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateTcpProgressionTrackingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateTcpProgressionTracking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._firstRequestMaxTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstRequestMaxTime = this._firstRequestMaxTime;
    }
    if (this._ignoreTlsHandshake !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreTlsHandshake = this._ignoreTlsHandshake;
    }
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
    if (this._progressionTrackingAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.progressionTrackingAction = this._progressionTrackingAction;
    }
    if (this._progressionTrackingActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.progressionTrackingActionListName = this._progressionTrackingActionListName;
    }
    if (this._progressionTrackingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.progressionTrackingEnabled = this._progressionTrackingEnabled;
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
    if (this._responseRequestMaxRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseRequestMaxRatio = this._responseRequestMaxRatio;
    }
    if (this._responseRequestMinRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseRequestMinRatio = this._responseRequestMinRatio;
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
    if (this._connectionTracking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionTracking = this._connectionTracking?.internalValue;
    }
    if (this._timeWindowTracking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindowTracking = this._timeWindowTracking?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateTcpProgressionTracking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._firstRequestMaxTime = undefined;
      this._ignoreTlsHandshake = undefined;
      this._profilingConnectionLifeModel = undefined;
      this._profilingRequestResponseModel = undefined;
      this._profilingTimeWindowModel = undefined;
      this._progressionTrackingAction = undefined;
      this._progressionTrackingActionListName = undefined;
      this._progressionTrackingEnabled = undefined;
      this._requestLengthMax = undefined;
      this._requestLengthMin = undefined;
      this._requestResponseModel = undefined;
      this._requestToResponseMaxTime = undefined;
      this._responseLengthMax = undefined;
      this._responseLengthMin = undefined;
      this._responseRequestMaxRatio = undefined;
      this._responseRequestMinRatio = undefined;
      this._responseToRequestMaxTime = undefined;
      this._uuid = undefined;
      this._violation = undefined;
      this._connectionTracking.internalValue = undefined;
      this._timeWindowTracking.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._firstRequestMaxTime = value.firstRequestMaxTime;
      this._ignoreTlsHandshake = value.ignoreTlsHandshake;
      this._profilingConnectionLifeModel = value.profilingConnectionLifeModel;
      this._profilingRequestResponseModel = value.profilingRequestResponseModel;
      this._profilingTimeWindowModel = value.profilingTimeWindowModel;
      this._progressionTrackingAction = value.progressionTrackingAction;
      this._progressionTrackingActionListName = value.progressionTrackingActionListName;
      this._progressionTrackingEnabled = value.progressionTrackingEnabled;
      this._requestLengthMax = value.requestLengthMax;
      this._requestLengthMin = value.requestLengthMin;
      this._requestResponseModel = value.requestResponseModel;
      this._requestToResponseMaxTime = value.requestToResponseMaxTime;
      this._responseLengthMax = value.responseLengthMax;
      this._responseLengthMin = value.responseLengthMin;
      this._responseRequestMaxRatio = value.responseRequestMaxRatio;
      this._responseRequestMinRatio = value.responseRequestMinRatio;
      this._responseToRequestMaxTime = value.responseToRequestMaxTime;
      this._uuid = value.uuid;
      this._violation = value.violation;
      this._connectionTracking.internalValue = value.connectionTracking;
      this._timeWindowTracking.internalValue = value.timeWindowTracking;
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

  // progression_tracking_action - computed: false, optional: true, required: false
  private _progressionTrackingAction?: string; 
  public get progressionTrackingAction() {
    return this.getStringAttribute('progression_tracking_action');
  }
  public set progressionTrackingAction(value: string) {
    this._progressionTrackingAction = value;
  }
  public resetProgressionTrackingAction() {
    this._progressionTrackingAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingActionInput() {
    return this._progressionTrackingAction;
  }

  // progression_tracking_action_list_name - computed: false, optional: true, required: false
  private _progressionTrackingActionListName?: string; 
  public get progressionTrackingActionListName() {
    return this.getStringAttribute('progression_tracking_action_list_name');
  }
  public set progressionTrackingActionListName(value: string) {
    this._progressionTrackingActionListName = value;
  }
  public resetProgressionTrackingActionListName() {
    this._progressionTrackingActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingActionListNameInput() {
    return this._progressionTrackingActionListName;
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

  // response_request_max_ratio - computed: false, optional: true, required: false
  private _responseRequestMaxRatio?: number; 
  public get responseRequestMaxRatio() {
    return this.getNumberAttribute('response_request_max_ratio');
  }
  public set responseRequestMaxRatio(value: number) {
    this._responseRequestMaxRatio = value;
  }
  public resetResponseRequestMaxRatio() {
    this._responseRequestMaxRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseRequestMaxRatioInput() {
    return this._responseRequestMaxRatio;
  }

  // response_request_min_ratio - computed: false, optional: true, required: false
  private _responseRequestMinRatio?: number; 
  public get responseRequestMinRatio() {
    return this.getNumberAttribute('response_request_min_ratio');
  }
  public set responseRequestMinRatio(value: number) {
    this._responseRequestMinRatio = value;
  }
  public resetResponseRequestMinRatio() {
    this._responseRequestMinRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseRequestMinRatioInput() {
    return this._responseRequestMinRatio;
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

  // connection_tracking - computed: false, optional: true, required: false
  private _connectionTracking = new DdosZoneTemplateTcpProgressionTrackingConnectionTrackingOutputReference(this, "connection_tracking");
  public get connectionTracking() {
    return this._connectionTracking;
  }
  public putConnectionTracking(value: DdosZoneTemplateTcpProgressionTrackingConnectionTracking) {
    this._connectionTracking.internalValue = value;
  }
  public resetConnectionTracking() {
    this._connectionTracking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTrackingInput() {
    return this._connectionTracking.internalValue;
  }

  // time_window_tracking - computed: false, optional: true, required: false
  private _timeWindowTracking = new DdosZoneTemplateTcpProgressionTrackingTimeWindowTrackingOutputReference(this, "time_window_tracking");
  public get timeWindowTracking() {
    return this._timeWindowTracking;
  }
  public putTimeWindowTracking(value: DdosZoneTemplateTcpProgressionTrackingTimeWindowTracking) {
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
export interface DdosZoneTemplateTcpRetransmitCfg {
  /**
  * Take action if retransmit pkts exceed configured threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#retransmit DdosZoneTemplateTcp#retransmit}
  */
  readonly retransmit?: number;
  /**
  * 'drop': Drop packets for retrans exceed (Default); 'blacklist-src': help Blacklist-src for retrans exceed; 'ignore': help Ignore retrans exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#retransmit_action DdosZoneTemplateTcp#retransmit_action}
  */
  readonly retransmitAction?: string;
  /**
  * Configure action-list to take for retransmit exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#retransmit_action_list_name DdosZoneTemplateTcp#retransmit_action_list_name}
  */
  readonly retransmitActionListName?: string;
}

export function ddosZoneTemplateTcpRetransmitCfgToTerraform(struct?: DdosZoneTemplateTcpRetransmitCfgOutputReference | DdosZoneTemplateTcpRetransmitCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retransmit: cdktf.numberToTerraform(struct!.retransmit),
    retransmit_action: cdktf.stringToTerraform(struct!.retransmitAction),
    retransmit_action_list_name: cdktf.stringToTerraform(struct!.retransmitActionListName),
  }
}


export function ddosZoneTemplateTcpRetransmitCfgToHclTerraform(struct?: DdosZoneTemplateTcpRetransmitCfgOutputReference | DdosZoneTemplateTcpRetransmitCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retransmit: {
      value: cdktf.numberToHclTerraform(struct!.retransmit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retransmit_action: {
      value: cdktf.stringToHclTerraform(struct!.retransmitAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retransmit_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.retransmitActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateTcpRetransmitCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateTcpRetransmitCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retransmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmit = this._retransmit;
    }
    if (this._retransmitAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitAction = this._retransmitAction;
    }
    if (this._retransmitActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitActionListName = this._retransmitActionListName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateTcpRetransmitCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retransmit = undefined;
      this._retransmitAction = undefined;
      this._retransmitActionListName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retransmit = value.retransmit;
      this._retransmitAction = value.retransmitAction;
      this._retransmitActionListName = value.retransmitActionListName;
    }
  }

  // retransmit - computed: false, optional: true, required: false
  private _retransmit?: number; 
  public get retransmit() {
    return this.getNumberAttribute('retransmit');
  }
  public set retransmit(value: number) {
    this._retransmit = value;
  }
  public resetRetransmit() {
    this._retransmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitInput() {
    return this._retransmit;
  }

  // retransmit_action - computed: false, optional: true, required: false
  private _retransmitAction?: string; 
  public get retransmitAction() {
    return this.getStringAttribute('retransmit_action');
  }
  public set retransmitAction(value: string) {
    this._retransmitAction = value;
  }
  public resetRetransmitAction() {
    this._retransmitAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitActionInput() {
    return this._retransmitAction;
  }

  // retransmit_action_list_name - computed: false, optional: true, required: false
  private _retransmitActionListName?: string; 
  public get retransmitActionListName() {
    return this.getStringAttribute('retransmit_action_list_name');
  }
  public set retransmitActionListName(value: string) {
    this._retransmitActionListName = value;
  }
  public resetRetransmitActionListName() {
    this._retransmitActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitActionListNameInput() {
    return this._retransmitActionListName;
  }
}
export interface DdosZoneTemplateTcpSrcRateLimitSynRateLimit {
  /**
  * 'drop': Drop packets for syn-rate exceed (Default); 'blacklist-src': Blacklist-src for syn-rate exceed; 'ignore': Ignore syn-rate-exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#src_syn_rate_action DdosZoneTemplateTcp#src_syn_rate_action}
  */
  readonly srcSynRateAction?: string;
  /**
  * Configure action-list to take for syn-rate exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#src_syn_rate_action_list_name DdosZoneTemplateTcp#src_syn_rate_action_list_name}
  */
  readonly srcSynRateActionListName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#src_syn_rate_limit DdosZoneTemplateTcp#src_syn_rate_limit}
  */
  readonly srcSynRateLimit?: number;
}

export function ddosZoneTemplateTcpSrcRateLimitSynRateLimitToTerraform(struct?: DdosZoneTemplateTcpSrcRateLimitSynRateLimitOutputReference | DdosZoneTemplateTcpSrcRateLimitSynRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_syn_rate_action: cdktf.stringToTerraform(struct!.srcSynRateAction),
    src_syn_rate_action_list_name: cdktf.stringToTerraform(struct!.srcSynRateActionListName),
    src_syn_rate_limit: cdktf.numberToTerraform(struct!.srcSynRateLimit),
  }
}


export function ddosZoneTemplateTcpSrcRateLimitSynRateLimitToHclTerraform(struct?: DdosZoneTemplateTcpSrcRateLimitSynRateLimitOutputReference | DdosZoneTemplateTcpSrcRateLimitSynRateLimit): any {
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
    src_syn_rate_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.srcSynRateActionListName),
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

export class DdosZoneTemplateTcpSrcRateLimitSynRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateTcpSrcRateLimitSynRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcSynRateAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSynRateAction = this._srcSynRateAction;
    }
    if (this._srcSynRateActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSynRateActionListName = this._srcSynRateActionListName;
    }
    if (this._srcSynRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSynRateLimit = this._srcSynRateLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateTcpSrcRateLimitSynRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._srcSynRateAction = undefined;
      this._srcSynRateActionListName = undefined;
      this._srcSynRateLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._srcSynRateAction = value.srcSynRateAction;
      this._srcSynRateActionListName = value.srcSynRateActionListName;
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

  // src_syn_rate_action_list_name - computed: false, optional: true, required: false
  private _srcSynRateActionListName?: string; 
  public get srcSynRateActionListName() {
    return this.getStringAttribute('src_syn_rate_action_list_name');
  }
  public set srcSynRateActionListName(value: string) {
    this._srcSynRateActionListName = value;
  }
  public resetSrcSynRateActionListName() {
    this._srcSynRateActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSynRateActionListNameInput() {
    return this._srcSynRateActionListName;
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
export interface DdosZoneTemplateTcpSrcRateLimit {
  /**
  * syn_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#syn_rate_limit DdosZoneTemplateTcp#syn_rate_limit}
  */
  readonly synRateLimit?: DdosZoneTemplateTcpSrcRateLimitSynRateLimit;
}

export function ddosZoneTemplateTcpSrcRateLimitToTerraform(struct?: DdosZoneTemplateTcpSrcRateLimitOutputReference | DdosZoneTemplateTcpSrcRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    syn_rate_limit: ddosZoneTemplateTcpSrcRateLimitSynRateLimitToTerraform(struct!.synRateLimit),
  }
}


export function ddosZoneTemplateTcpSrcRateLimitToHclTerraform(struct?: DdosZoneTemplateTcpSrcRateLimitOutputReference | DdosZoneTemplateTcpSrcRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    syn_rate_limit: {
      value: ddosZoneTemplateTcpSrcRateLimitSynRateLimitToHclTerraform(struct!.synRateLimit),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateTcpSrcRateLimitSynRateLimitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateTcpSrcRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateTcpSrcRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._synRateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.synRateLimit = this._synRateLimit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateTcpSrcRateLimit | undefined) {
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
  private _synRateLimit = new DdosZoneTemplateTcpSrcRateLimitSynRateLimitOutputReference(this, "syn_rate_limit");
  public get synRateLimit() {
    return this._synRateLimit;
  }
  public putSynRateLimit(value: DdosZoneTemplateTcpSrcRateLimitSynRateLimit) {
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
export interface DdosZoneTemplateTcpSrc {
  /**
  * rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#rate_limit DdosZoneTemplateTcp#rate_limit}
  */
  readonly rateLimit?: DdosZoneTemplateTcpSrcRateLimit;
}

export function ddosZoneTemplateTcpSrcToTerraform(struct?: DdosZoneTemplateTcpSrcOutputReference | DdosZoneTemplateTcpSrc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rate_limit: ddosZoneTemplateTcpSrcRateLimitToTerraform(struct!.rateLimit),
  }
}


export function ddosZoneTemplateTcpSrcToHclTerraform(struct?: DdosZoneTemplateTcpSrcOutputReference | DdosZoneTemplateTcpSrc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rate_limit: {
      value: ddosZoneTemplateTcpSrcRateLimitToHclTerraform(struct!.rateLimit),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateTcpSrcRateLimitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateTcpSrcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateTcpSrc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateTcpSrc | undefined) {
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
  private _rateLimit = new DdosZoneTemplateTcpSrcRateLimitOutputReference(this, "rate_limit");
  public get rateLimit() {
    return this._rateLimit;
  }
  public putRateLimit(value: DdosZoneTemplateTcpSrcRateLimit) {
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
export interface DdosZoneTemplateTcpSynAuthentication {
  /**
  * Allow RA packets to be used for auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#allow_ra DdosZoneTemplateTcp#allow_ra}
  */
  readonly allowRa?: number;
  /**
  * 'drop': Drop packets (Default); 'blacklist-src': Blacklist-src; 'reset': Send reset to client (Applicable to retransmit-check only);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#syn_auth_fail_action DdosZoneTemplateTcp#syn_auth_fail_action}
  */
  readonly synAuthFailAction?: string;
  /**
  * Configure action-list to take for failing the authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#syn_auth_fail_action_list_name DdosZoneTemplateTcp#syn_auth_fail_action_list_name}
  */
  readonly synAuthFailActionListName?: string;
  /**
  * Minimum delay (in 100ms intervals) between SYN retransmits for retransmit-check to pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#syn_auth_min_delay DdosZoneTemplateTcp#syn_auth_min_delay}
  */
  readonly synAuthMinDelay?: number;
  /**
  * 'authenticate-src': authenticate-src (Default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#syn_auth_pass_action DdosZoneTemplateTcp#syn_auth_pass_action}
  */
  readonly synAuthPassAction?: string;
  /**
  * Configure action-list to take for passing the authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#syn_auth_pass_action_list_name DdosZoneTemplateTcp#syn_auth_pass_action_list_name}
  */
  readonly synAuthPassActionListName?: string;
  /**
  * Estimate the RTO and apply the exponential back-off for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#syn_auth_rto DdosZoneTemplateTcp#syn_auth_rto}
  */
  readonly synAuthRto?: number;
  /**
  * syn retransmit timeout in seconds(default timeout: 5 seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#syn_auth_timeout DdosZoneTemplateTcp#syn_auth_timeout}
  */
  readonly synAuthTimeout?: number;
  /**
  * 'send-rst': Send reset to all concurrent client auth attempts after syn cookie check pass; 'force-rst-by-ack': Send client a bad ack after syn cookie check pass; 'force-rst-by-synack': Send client a bad synack after syn cookie check pass; 'send-rst-once': Send RST to one client concurrent auth attempts;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#syn_auth_type DdosZoneTemplateTcp#syn_auth_type}
  */
  readonly synAuthType?: string;
}

export function ddosZoneTemplateTcpSynAuthenticationToTerraform(struct?: DdosZoneTemplateTcpSynAuthenticationOutputReference | DdosZoneTemplateTcpSynAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_ra: cdktf.numberToTerraform(struct!.allowRa),
    syn_auth_fail_action: cdktf.stringToTerraform(struct!.synAuthFailAction),
    syn_auth_fail_action_list_name: cdktf.stringToTerraform(struct!.synAuthFailActionListName),
    syn_auth_min_delay: cdktf.numberToTerraform(struct!.synAuthMinDelay),
    syn_auth_pass_action: cdktf.stringToTerraform(struct!.synAuthPassAction),
    syn_auth_pass_action_list_name: cdktf.stringToTerraform(struct!.synAuthPassActionListName),
    syn_auth_rto: cdktf.numberToTerraform(struct!.synAuthRto),
    syn_auth_timeout: cdktf.numberToTerraform(struct!.synAuthTimeout),
    syn_auth_type: cdktf.stringToTerraform(struct!.synAuthType),
  }
}


export function ddosZoneTemplateTcpSynAuthenticationToHclTerraform(struct?: DdosZoneTemplateTcpSynAuthenticationOutputReference | DdosZoneTemplateTcpSynAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_ra: {
      value: cdktf.numberToHclTerraform(struct!.allowRa),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_auth_fail_action: {
      value: cdktf.stringToHclTerraform(struct!.synAuthFailAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    syn_auth_fail_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.synAuthFailActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    syn_auth_min_delay: {
      value: cdktf.numberToHclTerraform(struct!.synAuthMinDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_auth_pass_action: {
      value: cdktf.stringToHclTerraform(struct!.synAuthPassAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    syn_auth_pass_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.synAuthPassActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    syn_auth_rto: {
      value: cdktf.numberToHclTerraform(struct!.synAuthRto),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_auth_timeout: {
      value: cdktf.numberToHclTerraform(struct!.synAuthTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_auth_type: {
      value: cdktf.stringToHclTerraform(struct!.synAuthType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateTcpSynAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateTcpSynAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRa !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRa = this._allowRa;
    }
    if (this._synAuthFailAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.synAuthFailAction = this._synAuthFailAction;
    }
    if (this._synAuthFailActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.synAuthFailActionListName = this._synAuthFailActionListName;
    }
    if (this._synAuthMinDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.synAuthMinDelay = this._synAuthMinDelay;
    }
    if (this._synAuthPassAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.synAuthPassAction = this._synAuthPassAction;
    }
    if (this._synAuthPassActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.synAuthPassActionListName = this._synAuthPassActionListName;
    }
    if (this._synAuthRto !== undefined) {
      hasAnyValues = true;
      internalValueResult.synAuthRto = this._synAuthRto;
    }
    if (this._synAuthTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.synAuthTimeout = this._synAuthTimeout;
    }
    if (this._synAuthType !== undefined) {
      hasAnyValues = true;
      internalValueResult.synAuthType = this._synAuthType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateTcpSynAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowRa = undefined;
      this._synAuthFailAction = undefined;
      this._synAuthFailActionListName = undefined;
      this._synAuthMinDelay = undefined;
      this._synAuthPassAction = undefined;
      this._synAuthPassActionListName = undefined;
      this._synAuthRto = undefined;
      this._synAuthTimeout = undefined;
      this._synAuthType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowRa = value.allowRa;
      this._synAuthFailAction = value.synAuthFailAction;
      this._synAuthFailActionListName = value.synAuthFailActionListName;
      this._synAuthMinDelay = value.synAuthMinDelay;
      this._synAuthPassAction = value.synAuthPassAction;
      this._synAuthPassActionListName = value.synAuthPassActionListName;
      this._synAuthRto = value.synAuthRto;
      this._synAuthTimeout = value.synAuthTimeout;
      this._synAuthType = value.synAuthType;
    }
  }

  // allow_ra - computed: false, optional: true, required: false
  private _allowRa?: number; 
  public get allowRa() {
    return this.getNumberAttribute('allow_ra');
  }
  public set allowRa(value: number) {
    this._allowRa = value;
  }
  public resetAllowRa() {
    this._allowRa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRaInput() {
    return this._allowRa;
  }

  // syn_auth_fail_action - computed: false, optional: true, required: false
  private _synAuthFailAction?: string; 
  public get synAuthFailAction() {
    return this.getStringAttribute('syn_auth_fail_action');
  }
  public set synAuthFailAction(value: string) {
    this._synAuthFailAction = value;
  }
  public resetSynAuthFailAction() {
    this._synAuthFailAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synAuthFailActionInput() {
    return this._synAuthFailAction;
  }

  // syn_auth_fail_action_list_name - computed: false, optional: true, required: false
  private _synAuthFailActionListName?: string; 
  public get synAuthFailActionListName() {
    return this.getStringAttribute('syn_auth_fail_action_list_name');
  }
  public set synAuthFailActionListName(value: string) {
    this._synAuthFailActionListName = value;
  }
  public resetSynAuthFailActionListName() {
    this._synAuthFailActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synAuthFailActionListNameInput() {
    return this._synAuthFailActionListName;
  }

  // syn_auth_min_delay - computed: false, optional: true, required: false
  private _synAuthMinDelay?: number; 
  public get synAuthMinDelay() {
    return this.getNumberAttribute('syn_auth_min_delay');
  }
  public set synAuthMinDelay(value: number) {
    this._synAuthMinDelay = value;
  }
  public resetSynAuthMinDelay() {
    this._synAuthMinDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synAuthMinDelayInput() {
    return this._synAuthMinDelay;
  }

  // syn_auth_pass_action - computed: false, optional: true, required: false
  private _synAuthPassAction?: string; 
  public get synAuthPassAction() {
    return this.getStringAttribute('syn_auth_pass_action');
  }
  public set synAuthPassAction(value: string) {
    this._synAuthPassAction = value;
  }
  public resetSynAuthPassAction() {
    this._synAuthPassAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synAuthPassActionInput() {
    return this._synAuthPassAction;
  }

  // syn_auth_pass_action_list_name - computed: false, optional: true, required: false
  private _synAuthPassActionListName?: string; 
  public get synAuthPassActionListName() {
    return this.getStringAttribute('syn_auth_pass_action_list_name');
  }
  public set synAuthPassActionListName(value: string) {
    this._synAuthPassActionListName = value;
  }
  public resetSynAuthPassActionListName() {
    this._synAuthPassActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synAuthPassActionListNameInput() {
    return this._synAuthPassActionListName;
  }

  // syn_auth_rto - computed: false, optional: true, required: false
  private _synAuthRto?: number; 
  public get synAuthRto() {
    return this.getNumberAttribute('syn_auth_rto');
  }
  public set synAuthRto(value: number) {
    this._synAuthRto = value;
  }
  public resetSynAuthRto() {
    this._synAuthRto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synAuthRtoInput() {
    return this._synAuthRto;
  }

  // syn_auth_timeout - computed: false, optional: true, required: false
  private _synAuthTimeout?: number; 
  public get synAuthTimeout() {
    return this.getNumberAttribute('syn_auth_timeout');
  }
  public set synAuthTimeout(value: number) {
    this._synAuthTimeout = value;
  }
  public resetSynAuthTimeout() {
    this._synAuthTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synAuthTimeoutInput() {
    return this._synAuthTimeout;
  }

  // syn_auth_type - computed: false, optional: true, required: false
  private _synAuthType?: string; 
  public get synAuthType() {
    return this.getStringAttribute('syn_auth_type');
  }
  public set synAuthType(value: string) {
    this._synAuthType = value;
  }
  public resetSynAuthType() {
    this._synAuthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synAuthTypeInput() {
    return this._synAuthType;
  }
}
export interface DdosZoneTemplateTcpZeroWinCfg {
  /**
  * Take action if zero window pkts exceed configured threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#zero_win DdosZoneTemplateTcp#zero_win}
  */
  readonly zeroWin?: number;
  /**
  * 'drop': Drop packets for zero-win exceed (Default); 'blacklist-src': help Blacklist-src for zero-win exceed; 'ignore': Ignore zero-win exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#zero_win_action DdosZoneTemplateTcp#zero_win_action}
  */
  readonly zeroWinAction?: string;
  /**
  * Configure action-list to take for zero window exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#zero_win_action_list_name DdosZoneTemplateTcp#zero_win_action_list_name}
  */
  readonly zeroWinActionListName?: string;
}

export function ddosZoneTemplateTcpZeroWinCfgToTerraform(struct?: DdosZoneTemplateTcpZeroWinCfgOutputReference | DdosZoneTemplateTcpZeroWinCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    zero_win: cdktf.numberToTerraform(struct!.zeroWin),
    zero_win_action: cdktf.stringToTerraform(struct!.zeroWinAction),
    zero_win_action_list_name: cdktf.stringToTerraform(struct!.zeroWinActionListName),
  }
}


export function ddosZoneTemplateTcpZeroWinCfgToHclTerraform(struct?: DdosZoneTemplateTcpZeroWinCfgOutputReference | DdosZoneTemplateTcpZeroWinCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    zero_win: {
      value: cdktf.numberToHclTerraform(struct!.zeroWin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zero_win_action: {
      value: cdktf.stringToHclTerraform(struct!.zeroWinAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zero_win_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.zeroWinActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateTcpZeroWinCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateTcpZeroWinCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._zeroWin !== undefined) {
      hasAnyValues = true;
      internalValueResult.zeroWin = this._zeroWin;
    }
    if (this._zeroWinAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.zeroWinAction = this._zeroWinAction;
    }
    if (this._zeroWinActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.zeroWinActionListName = this._zeroWinActionListName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateTcpZeroWinCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._zeroWin = undefined;
      this._zeroWinAction = undefined;
      this._zeroWinActionListName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._zeroWin = value.zeroWin;
      this._zeroWinAction = value.zeroWinAction;
      this._zeroWinActionListName = value.zeroWinActionListName;
    }
  }

  // zero_win - computed: false, optional: true, required: false
  private _zeroWin?: number; 
  public get zeroWin() {
    return this.getNumberAttribute('zero_win');
  }
  public set zeroWin(value: number) {
    this._zeroWin = value;
  }
  public resetZeroWin() {
    this._zeroWin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroWinInput() {
    return this._zeroWin;
  }

  // zero_win_action - computed: false, optional: true, required: false
  private _zeroWinAction?: string; 
  public get zeroWinAction() {
    return this.getStringAttribute('zero_win_action');
  }
  public set zeroWinAction(value: string) {
    this._zeroWinAction = value;
  }
  public resetZeroWinAction() {
    this._zeroWinAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroWinActionInput() {
    return this._zeroWinAction;
  }

  // zero_win_action_list_name - computed: false, optional: true, required: false
  private _zeroWinActionListName?: string; 
  public get zeroWinActionListName() {
    return this.getStringAttribute('zero_win_action_list_name');
  }
  public set zeroWinActionListName(value: string) {
    this._zeroWinActionListName = value;
  }
  public resetZeroWinActionListName() {
    this._zeroWinActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroWinActionListNameInput() {
    return this._zeroWinActionListName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp thunder_ddos_zone_template_tcp}
*/
export class DdosZoneTemplateTcp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_zone_template_tcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosZoneTemplateTcp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosZoneTemplateTcp to import
  * @param importFromId The id of the existing DdosZoneTemplateTcp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosZoneTemplateTcp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_zone_template_tcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_tcp thunder_ddos_zone_template_tcp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosZoneTemplateTcpConfig
  */
  public constructor(scope: Construct, id: string, config: DdosZoneTemplateTcpConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_zone_template_tcp',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._concurrent = config.concurrent;
    this._connRateLimitOnSynOnly = config.connRateLimitOnSynOnly;
    this._createConnOnSynOnly = config.createConnOnSynOnly;
    this._filterMatchType = config.filterMatchType;
    this._id = config.id;
    this._name = config.name;
    this._perConnRateInterval = config.perConnRateInterval;
    this._synCookie = config.synCookie;
    this._synackRateLimit = config.synackRateLimit;
    this._trackTogetherWithSyn = config.trackTogetherWithSyn;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._ackAuthentication.internalValue = config.ackAuthentication;
    this._dst.internalValue = config.dst;
    this._filterList.internalValue = config.filterList;
    this._knownRespSrcPortCfg.internalValue = config.knownRespSrcPortCfg;
    this._maxRexmitSynPerFlowCfg.internalValue = config.maxRexmitSynPerFlowCfg;
    this._outOfSeqCfg.internalValue = config.outOfSeqCfg;
    this._perConnOutOfSeqRateCfg.internalValue = config.perConnOutOfSeqRateCfg;
    this._perConnPktRateCfg.internalValue = config.perConnPktRateCfg;
    this._perConnRetransmitRateCfg.internalValue = config.perConnRetransmitRateCfg;
    this._perConnZeroWinRateCfg.internalValue = config.perConnZeroWinRateCfg;
    this._progressionTracking.internalValue = config.progressionTracking;
    this._retransmitCfg.internalValue = config.retransmitCfg;
    this._src.internalValue = config.src;
    this._synAuthentication.internalValue = config.synAuthentication;
    this._zeroWinCfg.internalValue = config.zeroWinCfg;
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

  // concurrent - computed: false, optional: true, required: false
  private _concurrent?: number; 
  public get concurrent() {
    return this.getNumberAttribute('concurrent');
  }
  public set concurrent(value: number) {
    this._concurrent = value;
  }
  public resetConcurrent() {
    this._concurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentInput() {
    return this._concurrent;
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

  // filter_match_type - computed: false, optional: true, required: false
  private _filterMatchType?: string; 
  public get filterMatchType() {
    return this.getStringAttribute('filter_match_type');
  }
  public set filterMatchType(value: string) {
    this._filterMatchType = value;
  }
  public resetFilterMatchType() {
    this._filterMatchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterMatchTypeInput() {
    return this._filterMatchType;
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

  // ack_authentication - computed: false, optional: true, required: false
  private _ackAuthentication = new DdosZoneTemplateTcpAckAuthenticationOutputReference(this, "ack_authentication");
  public get ackAuthentication() {
    return this._ackAuthentication;
  }
  public putAckAuthentication(value: DdosZoneTemplateTcpAckAuthentication) {
    this._ackAuthentication.internalValue = value;
  }
  public resetAckAuthentication() {
    this._ackAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackAuthenticationInput() {
    return this._ackAuthentication.internalValue;
  }

  // dst - computed: false, optional: true, required: false
  private _dst = new DdosZoneTemplateTcpDstOutputReference(this, "dst");
  public get dst() {
    return this._dst;
  }
  public putDst(value: DdosZoneTemplateTcpDst) {
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
  private _filterList = new DdosZoneTemplateTcpFilterListStructList(this, "filter_list", false);
  public get filterList() {
    return this._filterList;
  }
  public putFilterList(value: DdosZoneTemplateTcpFilterListStruct[] | cdktf.IResolvable) {
    this._filterList.internalValue = value;
  }
  public resetFilterList() {
    this._filterList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListInput() {
    return this._filterList.internalValue;
  }

  // known_resp_src_port_cfg - computed: false, optional: true, required: false
  private _knownRespSrcPortCfg = new DdosZoneTemplateTcpKnownRespSrcPortCfgOutputReference(this, "known_resp_src_port_cfg");
  public get knownRespSrcPortCfg() {
    return this._knownRespSrcPortCfg;
  }
  public putKnownRespSrcPortCfg(value: DdosZoneTemplateTcpKnownRespSrcPortCfg) {
    this._knownRespSrcPortCfg.internalValue = value;
  }
  public resetKnownRespSrcPortCfg() {
    this._knownRespSrcPortCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knownRespSrcPortCfgInput() {
    return this._knownRespSrcPortCfg.internalValue;
  }

  // max_rexmit_syn_per_flow_cfg - computed: false, optional: true, required: false
  private _maxRexmitSynPerFlowCfg = new DdosZoneTemplateTcpMaxRexmitSynPerFlowCfgOutputReference(this, "max_rexmit_syn_per_flow_cfg");
  public get maxRexmitSynPerFlowCfg() {
    return this._maxRexmitSynPerFlowCfg;
  }
  public putMaxRexmitSynPerFlowCfg(value: DdosZoneTemplateTcpMaxRexmitSynPerFlowCfg) {
    this._maxRexmitSynPerFlowCfg.internalValue = value;
  }
  public resetMaxRexmitSynPerFlowCfg() {
    this._maxRexmitSynPerFlowCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRexmitSynPerFlowCfgInput() {
    return this._maxRexmitSynPerFlowCfg.internalValue;
  }

  // out_of_seq_cfg - computed: false, optional: true, required: false
  private _outOfSeqCfg = new DdosZoneTemplateTcpOutOfSeqCfgOutputReference(this, "out_of_seq_cfg");
  public get outOfSeqCfg() {
    return this._outOfSeqCfg;
  }
  public putOutOfSeqCfg(value: DdosZoneTemplateTcpOutOfSeqCfg) {
    this._outOfSeqCfg.internalValue = value;
  }
  public resetOutOfSeqCfg() {
    this._outOfSeqCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfSeqCfgInput() {
    return this._outOfSeqCfg.internalValue;
  }

  // per_conn_out_of_seq_rate_cfg - computed: false, optional: true, required: false
  private _perConnOutOfSeqRateCfg = new DdosZoneTemplateTcpPerConnOutOfSeqRateCfgOutputReference(this, "per_conn_out_of_seq_rate_cfg");
  public get perConnOutOfSeqRateCfg() {
    return this._perConnOutOfSeqRateCfg;
  }
  public putPerConnOutOfSeqRateCfg(value: DdosZoneTemplateTcpPerConnOutOfSeqRateCfg) {
    this._perConnOutOfSeqRateCfg.internalValue = value;
  }
  public resetPerConnOutOfSeqRateCfg() {
    this._perConnOutOfSeqRateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perConnOutOfSeqRateCfgInput() {
    return this._perConnOutOfSeqRateCfg.internalValue;
  }

  // per_conn_pkt_rate_cfg - computed: false, optional: true, required: false
  private _perConnPktRateCfg = new DdosZoneTemplateTcpPerConnPktRateCfgOutputReference(this, "per_conn_pkt_rate_cfg");
  public get perConnPktRateCfg() {
    return this._perConnPktRateCfg;
  }
  public putPerConnPktRateCfg(value: DdosZoneTemplateTcpPerConnPktRateCfg) {
    this._perConnPktRateCfg.internalValue = value;
  }
  public resetPerConnPktRateCfg() {
    this._perConnPktRateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perConnPktRateCfgInput() {
    return this._perConnPktRateCfg.internalValue;
  }

  // per_conn_retransmit_rate_cfg - computed: false, optional: true, required: false
  private _perConnRetransmitRateCfg = new DdosZoneTemplateTcpPerConnRetransmitRateCfgOutputReference(this, "per_conn_retransmit_rate_cfg");
  public get perConnRetransmitRateCfg() {
    return this._perConnRetransmitRateCfg;
  }
  public putPerConnRetransmitRateCfg(value: DdosZoneTemplateTcpPerConnRetransmitRateCfg) {
    this._perConnRetransmitRateCfg.internalValue = value;
  }
  public resetPerConnRetransmitRateCfg() {
    this._perConnRetransmitRateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perConnRetransmitRateCfgInput() {
    return this._perConnRetransmitRateCfg.internalValue;
  }

  // per_conn_zero_win_rate_cfg - computed: false, optional: true, required: false
  private _perConnZeroWinRateCfg = new DdosZoneTemplateTcpPerConnZeroWinRateCfgOutputReference(this, "per_conn_zero_win_rate_cfg");
  public get perConnZeroWinRateCfg() {
    return this._perConnZeroWinRateCfg;
  }
  public putPerConnZeroWinRateCfg(value: DdosZoneTemplateTcpPerConnZeroWinRateCfg) {
    this._perConnZeroWinRateCfg.internalValue = value;
  }
  public resetPerConnZeroWinRateCfg() {
    this._perConnZeroWinRateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perConnZeroWinRateCfgInput() {
    return this._perConnZeroWinRateCfg.internalValue;
  }

  // progression_tracking - computed: false, optional: true, required: false
  private _progressionTracking = new DdosZoneTemplateTcpProgressionTrackingOutputReference(this, "progression_tracking");
  public get progressionTracking() {
    return this._progressionTracking;
  }
  public putProgressionTracking(value: DdosZoneTemplateTcpProgressionTracking) {
    this._progressionTracking.internalValue = value;
  }
  public resetProgressionTracking() {
    this._progressionTracking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingInput() {
    return this._progressionTracking.internalValue;
  }

  // retransmit_cfg - computed: false, optional: true, required: false
  private _retransmitCfg = new DdosZoneTemplateTcpRetransmitCfgOutputReference(this, "retransmit_cfg");
  public get retransmitCfg() {
    return this._retransmitCfg;
  }
  public putRetransmitCfg(value: DdosZoneTemplateTcpRetransmitCfg) {
    this._retransmitCfg.internalValue = value;
  }
  public resetRetransmitCfg() {
    this._retransmitCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitCfgInput() {
    return this._retransmitCfg.internalValue;
  }

  // src - computed: false, optional: true, required: false
  private _src = new DdosZoneTemplateTcpSrcOutputReference(this, "src");
  public get src() {
    return this._src;
  }
  public putSrc(value: DdosZoneTemplateTcpSrc) {
    this._src.internalValue = value;
  }
  public resetSrc() {
    this._src.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcInput() {
    return this._src.internalValue;
  }

  // syn_authentication - computed: false, optional: true, required: false
  private _synAuthentication = new DdosZoneTemplateTcpSynAuthenticationOutputReference(this, "syn_authentication");
  public get synAuthentication() {
    return this._synAuthentication;
  }
  public putSynAuthentication(value: DdosZoneTemplateTcpSynAuthentication) {
    this._synAuthentication.internalValue = value;
  }
  public resetSynAuthentication() {
    this._synAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synAuthenticationInput() {
    return this._synAuthentication.internalValue;
  }

  // zero_win_cfg - computed: false, optional: true, required: false
  private _zeroWinCfg = new DdosZoneTemplateTcpZeroWinCfgOutputReference(this, "zero_win_cfg");
  public get zeroWinCfg() {
    return this._zeroWinCfg;
  }
  public putZeroWinCfg(value: DdosZoneTemplateTcpZeroWinCfg) {
    this._zeroWinCfg.internalValue = value;
  }
  public resetZeroWinCfg() {
    this._zeroWinCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroWinCfgInput() {
    return this._zeroWinCfg.internalValue;
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
      concurrent: cdktf.numberToTerraform(this._concurrent),
      conn_rate_limit_on_syn_only: cdktf.numberToTerraform(this._connRateLimitOnSynOnly),
      create_conn_on_syn_only: cdktf.numberToTerraform(this._createConnOnSynOnly),
      filter_match_type: cdktf.stringToTerraform(this._filterMatchType),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      per_conn_rate_interval: cdktf.stringToTerraform(this._perConnRateInterval),
      syn_cookie: cdktf.numberToTerraform(this._synCookie),
      synack_rate_limit: cdktf.numberToTerraform(this._synackRateLimit),
      track_together_with_syn: cdktf.numberToTerraform(this._trackTogetherWithSyn),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      ack_authentication: ddosZoneTemplateTcpAckAuthenticationToTerraform(this._ackAuthentication.internalValue),
      dst: ddosZoneTemplateTcpDstToTerraform(this._dst.internalValue),
      filter_list: cdktf.listMapper(ddosZoneTemplateTcpFilterListStructToTerraform, true)(this._filterList.internalValue),
      known_resp_src_port_cfg: ddosZoneTemplateTcpKnownRespSrcPortCfgToTerraform(this._knownRespSrcPortCfg.internalValue),
      max_rexmit_syn_per_flow_cfg: ddosZoneTemplateTcpMaxRexmitSynPerFlowCfgToTerraform(this._maxRexmitSynPerFlowCfg.internalValue),
      out_of_seq_cfg: ddosZoneTemplateTcpOutOfSeqCfgToTerraform(this._outOfSeqCfg.internalValue),
      per_conn_out_of_seq_rate_cfg: ddosZoneTemplateTcpPerConnOutOfSeqRateCfgToTerraform(this._perConnOutOfSeqRateCfg.internalValue),
      per_conn_pkt_rate_cfg: ddosZoneTemplateTcpPerConnPktRateCfgToTerraform(this._perConnPktRateCfg.internalValue),
      per_conn_retransmit_rate_cfg: ddosZoneTemplateTcpPerConnRetransmitRateCfgToTerraform(this._perConnRetransmitRateCfg.internalValue),
      per_conn_zero_win_rate_cfg: ddosZoneTemplateTcpPerConnZeroWinRateCfgToTerraform(this._perConnZeroWinRateCfg.internalValue),
      progression_tracking: ddosZoneTemplateTcpProgressionTrackingToTerraform(this._progressionTracking.internalValue),
      retransmit_cfg: ddosZoneTemplateTcpRetransmitCfgToTerraform(this._retransmitCfg.internalValue),
      src: ddosZoneTemplateTcpSrcToTerraform(this._src.internalValue),
      syn_authentication: ddosZoneTemplateTcpSynAuthenticationToTerraform(this._synAuthentication.internalValue),
      zero_win_cfg: ddosZoneTemplateTcpZeroWinCfgToTerraform(this._zeroWinCfg.internalValue),
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
      concurrent: {
        value: cdktf.numberToHclTerraform(this._concurrent),
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
      filter_match_type: {
        value: cdktf.stringToHclTerraform(this._filterMatchType),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      per_conn_rate_interval: {
        value: cdktf.stringToHclTerraform(this._perConnRateInterval),
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
      ack_authentication: {
        value: ddosZoneTemplateTcpAckAuthenticationToHclTerraform(this._ackAuthentication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateTcpAckAuthenticationList",
      },
      dst: {
        value: ddosZoneTemplateTcpDstToHclTerraform(this._dst.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateTcpDstList",
      },
      filter_list: {
        value: cdktf.listMapperHcl(ddosZoneTemplateTcpFilterListStructToHclTerraform, true)(this._filterList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateTcpFilterListStructList",
      },
      known_resp_src_port_cfg: {
        value: ddosZoneTemplateTcpKnownRespSrcPortCfgToHclTerraform(this._knownRespSrcPortCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateTcpKnownRespSrcPortCfgList",
      },
      max_rexmit_syn_per_flow_cfg: {
        value: ddosZoneTemplateTcpMaxRexmitSynPerFlowCfgToHclTerraform(this._maxRexmitSynPerFlowCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateTcpMaxRexmitSynPerFlowCfgList",
      },
      out_of_seq_cfg: {
        value: ddosZoneTemplateTcpOutOfSeqCfgToHclTerraform(this._outOfSeqCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateTcpOutOfSeqCfgList",
      },
      per_conn_out_of_seq_rate_cfg: {
        value: ddosZoneTemplateTcpPerConnOutOfSeqRateCfgToHclTerraform(this._perConnOutOfSeqRateCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateTcpPerConnOutOfSeqRateCfgList",
      },
      per_conn_pkt_rate_cfg: {
        value: ddosZoneTemplateTcpPerConnPktRateCfgToHclTerraform(this._perConnPktRateCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateTcpPerConnPktRateCfgList",
      },
      per_conn_retransmit_rate_cfg: {
        value: ddosZoneTemplateTcpPerConnRetransmitRateCfgToHclTerraform(this._perConnRetransmitRateCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateTcpPerConnRetransmitRateCfgList",
      },
      per_conn_zero_win_rate_cfg: {
        value: ddosZoneTemplateTcpPerConnZeroWinRateCfgToHclTerraform(this._perConnZeroWinRateCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateTcpPerConnZeroWinRateCfgList",
      },
      progression_tracking: {
        value: ddosZoneTemplateTcpProgressionTrackingToHclTerraform(this._progressionTracking.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateTcpProgressionTrackingList",
      },
      retransmit_cfg: {
        value: ddosZoneTemplateTcpRetransmitCfgToHclTerraform(this._retransmitCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateTcpRetransmitCfgList",
      },
      src: {
        value: ddosZoneTemplateTcpSrcToHclTerraform(this._src.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateTcpSrcList",
      },
      syn_authentication: {
        value: ddosZoneTemplateTcpSynAuthenticationToHclTerraform(this._synAuthentication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateTcpSynAuthenticationList",
      },
      zero_win_cfg: {
        value: ddosZoneTemplateTcpZeroWinCfgToHclTerraform(this._zeroWinCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateTcpZeroWinCfgList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
