// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDstEntryL4TypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Blacklist and Drop all incoming packets for protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#deny DdosDstEntryL4Type#deny}
  */
  readonly deny?: number;
  /**
  * Enable ddos detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#detection_enable DdosDstEntryL4Type#detection_enable}
  */
  readonly detectionEnable?: number;
  /**
  * Disable TCP SYN Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#disable_syn_auth DdosDstEntryL4Type#disable_syn_auth}
  */
  readonly disableSynAuth?: number;
  /**
  * Drop fragmented packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#drop_frag_pkt DdosDstEntryL4Type#drop_frag_pkt}
  */
  readonly dropFragPkt?: number;
  /**
  * 'disable': disable; 'enable': enable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#drop_on_no_port_match DdosDstEntryL4Type#drop_on_no_port_match}
  */
  readonly dropOnNoPortMatch?: string;
  /**
  * DstEntryName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#dst_entry_name DdosDstEntryL4Type#dst_entry_name}
  */
  readonly dstEntryName: string;
  /**
  * Enable ddos top-k entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#enable_top_k DdosDstEntryL4Type#enable_top_k}
  */
  readonly enableTopK?: number;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#glid DdosDstEntryL4Type#glid}
  */
  readonly glid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#id DdosDstEntryL4Type#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Configure IP Filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#ip_filtering_policy DdosDstEntryL4Type#ip_filtering_policy}
  */
  readonly ipFilteringPolicy?: string;
  /**
  * Maximum number of re-transmit SYN per flow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#max_rexmit_syn_per_flow DdosDstEntryL4Type#max_rexmit_syn_per_flow}
  */
  readonly maxRexmitSynPerFlow?: number;
  /**
  * 'drop': Drop the packet; 'black-list': Add the source IP into black list;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#max_rexmit_syn_per_flow_exceed_action DdosDstEntryL4Type#max_rexmit_syn_per_flow_exceed_action}
  */
  readonly maxRexmitSynPerFlowExceedAction?: string;
  /**
  * 'tcp': L4-Type TCP; 'udp': L4-Type UDP; 'icmp': L4-Type ICMP; 'other': L4-Type OTHER;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#protocol DdosDstEntryL4Type#protocol}
  */
  readonly protocol: string;
  /**
  * Set T2 counter value of current context to specified value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#set_counter_base_val DdosDstEntryL4Type#set_counter_base_val}
  */
  readonly setCounterBaseVal?: number;
  /**
  * Enable stateful tracking of sessions (Default is stateless)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#stateful DdosDstEntryL4Type#stateful}
  */
  readonly stateful?: number;
  /**
  * 'send-rst': Send RST to client upon client ACK; 'force-rst-by-ack': Force client RST via the use of ACK; 'force-rst-by-synack': Force client RST via the use of bad SYN|ACK; 'disable': Disable TCP SYN Authentication;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#syn_auth DdosDstEntryL4Type#syn_auth}
  */
  readonly synAuth?: string;
  /**
  * Enable SYN Cookie
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#syn_cookie DdosDstEntryL4Type#syn_cookie}
  */
  readonly synCookie?: number;
  /**
  * Send reset to client when rate exceeds or session ages out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#tcp_reset_client DdosDstEntryL4Type#tcp_reset_client}
  */
  readonly tcpResetClient?: number;
  /**
  * Send reset to server when rate exceeds or session ages out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#tcp_reset_server DdosDstEntryL4Type#tcp_reset_server}
  */
  readonly tcpResetServer?: number;
  /**
  * Maximum number of records to show in topk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#topk_num_records DdosDstEntryL4Type#topk_num_records}
  */
  readonly topkNumRecords?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#user_tag DdosDstEntryL4Type#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#uuid DdosDstEntryL4Type#uuid}
  */
  readonly uuid?: string;
  /**
  * glid_exceed_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#glid_exceed_action DdosDstEntryL4Type#glid_exceed_action}
  */
  readonly glidExceedAction?: DdosDstEntryL4TypeGlidExceedAction;
  /**
  * ip_filtering_policy_oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#ip_filtering_policy_oper DdosDstEntryL4Type#ip_filtering_policy_oper}
  */
  readonly ipFilteringPolicyOper?: DdosDstEntryL4TypeIpFilteringPolicyOper;
  /**
  * port_ind block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#port_ind DdosDstEntryL4Type#port_ind}
  */
  readonly portInd?: DdosDstEntryL4TypePortInd;
  /**
  * progression_tracking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#progression_tracking DdosDstEntryL4Type#progression_tracking}
  */
  readonly progressionTracking?: DdosDstEntryL4TypeProgressionTracking;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#template DdosDstEntryL4Type#template}
  */
  readonly template?: DdosDstEntryL4TypeTemplate;
  /**
  * topk_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#topk_sources DdosDstEntryL4Type#topk_sources}
  */
  readonly topkSources?: DdosDstEntryL4TypeTopkSources;
  /**
  * tunnel_decap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#tunnel_decap DdosDstEntryL4Type#tunnel_decap}
  */
  readonly tunnelDecap?: DdosDstEntryL4TypeTunnelDecap;
  /**
  * tunnel_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#tunnel_rate_limit DdosDstEntryL4Type#tunnel_rate_limit}
  */
  readonly tunnelRateLimit?: DdosDstEntryL4TypeTunnelRateLimit;
  /**
  * undefined_port_hit_statistics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#undefined_port_hit_statistics DdosDstEntryL4Type#undefined_port_hit_statistics}
  */
  readonly undefinedPortHitStatistics?: DdosDstEntryL4TypeUndefinedPortHitStatistics;
}
export interface DdosDstEntryL4TypeGlidExceedActionStatelessEncapActionCfg {
  /**
  * Apply legacy encap template for encap action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#encap_template DdosDstEntryL4Type#encap_template}
  */
  readonly encapTemplate?: string;
  /**
  * 'stateless-tunnel-encap': Encapsulate all packets; 'stateless-tunnel-encap-scrubbed': Encapsulate all packets and allow packets to go through other DDoS checks before sent (conn-limit exceeded packet can not be scrubbed, it will default to stateless-tunnel-encap);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#stateless_encap_action DdosDstEntryL4Type#stateless_encap_action}
  */
  readonly statelessEncapAction?: string;
}

export function ddosDstEntryL4TypeGlidExceedActionStatelessEncapActionCfgToTerraform(struct?: DdosDstEntryL4TypeGlidExceedActionStatelessEncapActionCfgOutputReference | DdosDstEntryL4TypeGlidExceedActionStatelessEncapActionCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encap_template: cdktf.stringToTerraform(struct!.encapTemplate),
    stateless_encap_action: cdktf.stringToTerraform(struct!.statelessEncapAction),
  }
}


export function ddosDstEntryL4TypeGlidExceedActionStatelessEncapActionCfgToHclTerraform(struct?: DdosDstEntryL4TypeGlidExceedActionStatelessEncapActionCfgOutputReference | DdosDstEntryL4TypeGlidExceedActionStatelessEncapActionCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encap_template: {
      value: cdktf.stringToHclTerraform(struct!.encapTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stateless_encap_action: {
      value: cdktf.stringToHclTerraform(struct!.statelessEncapAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryL4TypeGlidExceedActionStatelessEncapActionCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryL4TypeGlidExceedActionStatelessEncapActionCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encapTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.encapTemplate = this._encapTemplate;
    }
    if (this._statelessEncapAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.statelessEncapAction = this._statelessEncapAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryL4TypeGlidExceedActionStatelessEncapActionCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encapTemplate = undefined;
      this._statelessEncapAction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encapTemplate = value.encapTemplate;
      this._statelessEncapAction = value.statelessEncapAction;
    }
  }

  // encap_template - computed: false, optional: true, required: false
  private _encapTemplate?: string; 
  public get encapTemplate() {
    return this.getStringAttribute('encap_template');
  }
  public set encapTemplate(value: string) {
    this._encapTemplate = value;
  }
  public resetEncapTemplate() {
    this._encapTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapTemplateInput() {
    return this._encapTemplate;
  }

  // stateless_encap_action - computed: false, optional: true, required: false
  private _statelessEncapAction?: string; 
  public get statelessEncapAction() {
    return this.getStringAttribute('stateless_encap_action');
  }
  public set statelessEncapAction(value: string) {
    this._statelessEncapAction = value;
  }
  public resetStatelessEncapAction() {
    this._statelessEncapAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessEncapActionInput() {
    return this._statelessEncapAction;
  }
}
export interface DdosDstEntryL4TypeGlidExceedAction {
  /**
  * stateless_encap_action_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#stateless_encap_action_cfg DdosDstEntryL4Type#stateless_encap_action_cfg}
  */
  readonly statelessEncapActionCfg?: DdosDstEntryL4TypeGlidExceedActionStatelessEncapActionCfg;
}

export function ddosDstEntryL4TypeGlidExceedActionToTerraform(struct?: DdosDstEntryL4TypeGlidExceedActionOutputReference | DdosDstEntryL4TypeGlidExceedAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stateless_encap_action_cfg: ddosDstEntryL4TypeGlidExceedActionStatelessEncapActionCfgToTerraform(struct!.statelessEncapActionCfg),
  }
}


export function ddosDstEntryL4TypeGlidExceedActionToHclTerraform(struct?: DdosDstEntryL4TypeGlidExceedActionOutputReference | DdosDstEntryL4TypeGlidExceedAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stateless_encap_action_cfg: {
      value: ddosDstEntryL4TypeGlidExceedActionStatelessEncapActionCfgToHclTerraform(struct!.statelessEncapActionCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryL4TypeGlidExceedActionStatelessEncapActionCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryL4TypeGlidExceedActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryL4TypeGlidExceedAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statelessEncapActionCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statelessEncapActionCfg = this._statelessEncapActionCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryL4TypeGlidExceedAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._statelessEncapActionCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._statelessEncapActionCfg.internalValue = value.statelessEncapActionCfg;
    }
  }

  // stateless_encap_action_cfg - computed: false, optional: true, required: false
  private _statelessEncapActionCfg = new DdosDstEntryL4TypeGlidExceedActionStatelessEncapActionCfgOutputReference(this, "stateless_encap_action_cfg");
  public get statelessEncapActionCfg() {
    return this._statelessEncapActionCfg;
  }
  public putStatelessEncapActionCfg(value: DdosDstEntryL4TypeGlidExceedActionStatelessEncapActionCfg) {
    this._statelessEncapActionCfg.internalValue = value;
  }
  public resetStatelessEncapActionCfg() {
    this._statelessEncapActionCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessEncapActionCfgInput() {
    return this._statelessEncapActionCfg.internalValue;
  }
}
export interface DdosDstEntryL4TypeIpFilteringPolicyOper {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#uuid DdosDstEntryL4Type#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstEntryL4TypeIpFilteringPolicyOperToTerraform(struct?: DdosDstEntryL4TypeIpFilteringPolicyOperOutputReference | DdosDstEntryL4TypeIpFilteringPolicyOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstEntryL4TypeIpFilteringPolicyOperToHclTerraform(struct?: DdosDstEntryL4TypeIpFilteringPolicyOperOutputReference | DdosDstEntryL4TypeIpFilteringPolicyOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DdosDstEntryL4TypeIpFilteringPolicyOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryL4TypeIpFilteringPolicyOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryL4TypeIpFilteringPolicyOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface DdosDstEntryL4TypePortIndSamplingEnable {
  /**
  * 'all': all; 'ip-proto-type': IP Protocol Type; 'ddet_ind_pkt_rate_current': Pkt Rate Current; 'ddet_ind_pkt_rate_min': Pkt Rate Min; 'ddet_ind_pkt_rate_max': Pkt Rate Max; 'ddet_ind_pkt_drop_rate_current': Pkt Drop Rate Current; 'ddet_ind_pkt_drop_rate_min': Pkt Drop Rate Min; 'ddet_ind_pkt_drop_rate_max': Pkt Drop Rate Max; 'ddet_ind_syn_rate_current': TCP SYN Rate Current; 'ddet_ind_syn_rate_min': TCP SYN Rate Min; 'ddet_ind_syn_rate_max': TCP SYN Rate Max; 'ddet_ind_fin_rate_current': TCP FIN Rate Current; 'ddet_ind_fin_rate_min': TCP FIN Rate Min; 'ddet_ind_fin_rate_max': TCP FIN Rate Max; 'ddet_ind_rst_rate_current': TCP RST Rate Current; 'ddet_ind_rst_rate_min': TCP RST Rate Min; 'ddet_ind_rst_rate_max': TCP RST Rate Max; 'ddet_ind_small_window_ack_rate_current': TCP Small Window ACK Rate Current; 'ddet_ind_small_window_ack_rate_min': TCP Small Window ACK Rate Min; 'ddet_ind_small_window_ack_rate_max': TCP Small Window ACK Rate Max; 'ddet_ind_empty_ack_rate_current': TCP Empty ACK Rate Current; 'ddet_ind_empty_ack_rate_min': TCP Empty ACK Rate Min; 'ddet_ind_empty_ack_rate_max': TCP Empty ACK Rate Max; 'ddet_ind_small_payload_rate_current': TCP Small Payload Rate Current; 'ddet_ind_small_payload_rate_min': TCP Small Payload Rate Min; 'ddet_ind_small_payload_rate_max': TCP Small Payload Rate Max; 'ddet_ind_pkt_drop_ratio_current': Pkt Drop / Pkt Rcvd Current; 'ddet_ind_pkt_drop_ratio_min': Pkt Drop / Pkt Rcvd Min; 'ddet_ind_pkt_drop_ratio_max': Pkt Drop / Pkt Rcvd Max; 'ddet_ind_inb_per_outb_current': Bytes-to / Bytes-from Current; 'ddet_ind_inb_per_outb_min': Bytes-to / Bytes-from Min; 'ddet_ind_inb_per_outb_max': Bytes-to / Bytes-from Max; 'ddet_ind_syn_per_fin_rate_current': TCP SYN Rate / FIN Rate Current; 'ddet_ind_syn_per_fin_rate_min': TCP SYN Rate / FIN Rate Min; 'ddet_ind_syn_per_fin_rate_max': TCP SYN Rate / FIN Rate Max; 'ddet_ind_conn_miss_rate_current': TCP Session Miss Rate Current; 'ddet_ind_conn_miss_rate_min': TCP Session Miss Rate Min; 'ddet_ind_conn_miss_rate_max': TCP Session Miss Rate Max; 'ddet_ind_concurrent_conns_current': TCP/UDP Concurrent Sessions Current; 'ddet_ind_concurrent_conns_min': TCP/UDP Concurrent Sessions Min; 'ddet_ind_concurrent_conns_max': TCP/UDP Concurrent Sessions Max; 'ddet_ind_data_cpu_util_current': Data CPU Utilization Current; 'ddet_ind_data_cpu_util_min': Data CPU Utilization Min; 'ddet_ind_data_cpu_util_max': Data CPU Utilization Max; 'ddet_ind_outside_intf_util_current': Outside Interface Utilization Current; 'ddet_ind_outside_intf_util_min': Outside Interface Utilization Min; 'ddet_ind_outside_intf_util_max': Outside Interface Utilization Max; 'ddet_ind_frag_rate_current': Frag Pkt Rate Current; 'ddet_ind_frag_rate_min': Frag Pkt Rate Min; 'ddet_ind_frag_rate_max': Frag Pkt Rate Max; 'ddet_ind_bit_rate_current': Bit Rate Current; 'ddet_ind_bit_rate_min': Bit Rate Min; 'ddet_ind_bit_rate_max': Bit Rate Max;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#counters1 DdosDstEntryL4Type#counters1}
  */
  readonly counters1?: string;
}

export function ddosDstEntryL4TypePortIndSamplingEnableToTerraform(struct?: DdosDstEntryL4TypePortIndSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function ddosDstEntryL4TypePortIndSamplingEnableToHclTerraform(struct?: DdosDstEntryL4TypePortIndSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryL4TypePortIndSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstEntryL4TypePortIndSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryL4TypePortIndSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class DdosDstEntryL4TypePortIndSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : DdosDstEntryL4TypePortIndSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): DdosDstEntryL4TypePortIndSamplingEnableOutputReference {
    return new DdosDstEntryL4TypePortIndSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstEntryL4TypePortInd {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#uuid DdosDstEntryL4Type#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#sampling_enable DdosDstEntryL4Type#sampling_enable}
  */
  readonly samplingEnable?: DdosDstEntryL4TypePortIndSamplingEnable[] | cdktf.IResolvable;
}

export function ddosDstEntryL4TypePortIndToTerraform(struct?: DdosDstEntryL4TypePortIndOutputReference | DdosDstEntryL4TypePortInd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(ddosDstEntryL4TypePortIndSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function ddosDstEntryL4TypePortIndToHclTerraform(struct?: DdosDstEntryL4TypePortIndOutputReference | DdosDstEntryL4TypePortInd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(ddosDstEntryL4TypePortIndSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryL4TypePortIndSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryL4TypePortIndOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryL4TypePortInd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryL4TypePortInd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new DdosDstEntryL4TypePortIndSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: DdosDstEntryL4TypePortIndSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface DdosDstEntryL4TypeProgressionTracking {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#uuid DdosDstEntryL4Type#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstEntryL4TypeProgressionTrackingToTerraform(struct?: DdosDstEntryL4TypeProgressionTrackingOutputReference | DdosDstEntryL4TypeProgressionTracking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstEntryL4TypeProgressionTrackingToHclTerraform(struct?: DdosDstEntryL4TypeProgressionTrackingOutputReference | DdosDstEntryL4TypeProgressionTracking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DdosDstEntryL4TypeProgressionTrackingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryL4TypeProgressionTracking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryL4TypeProgressionTracking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface DdosDstEntryL4TypeTemplate {
  /**
  * DDOS icmp-v4 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#template_icmp_v4 DdosDstEntryL4Type#template_icmp_v4}
  */
  readonly templateIcmpV4?: string;
  /**
  * DDOS icmp-v6 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#template_icmp_v6 DdosDstEntryL4Type#template_icmp_v6}
  */
  readonly templateIcmpV6?: string;
}

export function ddosDstEntryL4TypeTemplateToTerraform(struct?: DdosDstEntryL4TypeTemplateOutputReference | DdosDstEntryL4TypeTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template_icmp_v4: cdktf.stringToTerraform(struct!.templateIcmpV4),
    template_icmp_v6: cdktf.stringToTerraform(struct!.templateIcmpV6),
  }
}


export function ddosDstEntryL4TypeTemplateToHclTerraform(struct?: DdosDstEntryL4TypeTemplateOutputReference | DdosDstEntryL4TypeTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template_icmp_v4: {
      value: cdktf.stringToHclTerraform(struct!.templateIcmpV4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_icmp_v6: {
      value: cdktf.stringToHclTerraform(struct!.templateIcmpV6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryL4TypeTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryL4TypeTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._templateIcmpV4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateIcmpV4 = this._templateIcmpV4;
    }
    if (this._templateIcmpV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateIcmpV6 = this._templateIcmpV6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryL4TypeTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._templateIcmpV4 = undefined;
      this._templateIcmpV6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._templateIcmpV4 = value.templateIcmpV4;
      this._templateIcmpV6 = value.templateIcmpV6;
    }
  }

  // template_icmp_v4 - computed: false, optional: true, required: false
  private _templateIcmpV4?: string; 
  public get templateIcmpV4() {
    return this.getStringAttribute('template_icmp_v4');
  }
  public set templateIcmpV4(value: string) {
    this._templateIcmpV4 = value;
  }
  public resetTemplateIcmpV4() {
    this._templateIcmpV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIcmpV4Input() {
    return this._templateIcmpV4;
  }

  // template_icmp_v6 - computed: false, optional: true, required: false
  private _templateIcmpV6?: string; 
  public get templateIcmpV6() {
    return this.getStringAttribute('template_icmp_v6');
  }
  public set templateIcmpV6(value: string) {
    this._templateIcmpV6 = value;
  }
  public resetTemplateIcmpV6() {
    this._templateIcmpV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIcmpV6Input() {
    return this._templateIcmpV6;
  }
}
export interface DdosDstEntryL4TypeTopkSources {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#uuid DdosDstEntryL4Type#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstEntryL4TypeTopkSourcesToTerraform(struct?: DdosDstEntryL4TypeTopkSourcesOutputReference | DdosDstEntryL4TypeTopkSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstEntryL4TypeTopkSourcesToHclTerraform(struct?: DdosDstEntryL4TypeTopkSourcesOutputReference | DdosDstEntryL4TypeTopkSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DdosDstEntryL4TypeTopkSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryL4TypeTopkSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryL4TypeTopkSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface DdosDstEntryL4TypeTunnelDecapKeyCfg {
  /**
  * Only decapsulate GRE packet with this key (Hexadecimal 0x0-0xFFFFFFFF,decimal 0-4294967295)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#key DdosDstEntryL4Type#key}
  */
  readonly key?: string;
}

export function ddosDstEntryL4TypeTunnelDecapKeyCfgToTerraform(struct?: DdosDstEntryL4TypeTunnelDecapKeyCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function ddosDstEntryL4TypeTunnelDecapKeyCfgToHclTerraform(struct?: DdosDstEntryL4TypeTunnelDecapKeyCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryL4TypeTunnelDecapKeyCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstEntryL4TypeTunnelDecapKeyCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryL4TypeTunnelDecapKeyCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}

export class DdosDstEntryL4TypeTunnelDecapKeyCfgList extends cdktf.ComplexList {
  public internalValue? : DdosDstEntryL4TypeTunnelDecapKeyCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosDstEntryL4TypeTunnelDecapKeyCfgOutputReference {
    return new DdosDstEntryL4TypeTunnelDecapKeyCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstEntryL4TypeTunnelDecap {
  /**
  * Enable GRE Tunnel decapsulation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#gre_decap DdosDstEntryL4Type#gre_decap}
  */
  readonly greDecap?: number;
  /**
  * Enable IP Tunnel decapsulation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#ip_decap DdosDstEntryL4Type#ip_decap}
  */
  readonly ipDecap?: number;
  /**
  * key_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#key_cfg DdosDstEntryL4Type#key_cfg}
  */
  readonly keyCfg?: DdosDstEntryL4TypeTunnelDecapKeyCfg[] | cdktf.IResolvable;
}

export function ddosDstEntryL4TypeTunnelDecapToTerraform(struct?: DdosDstEntryL4TypeTunnelDecapOutputReference | DdosDstEntryL4TypeTunnelDecap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gre_decap: cdktf.numberToTerraform(struct!.greDecap),
    ip_decap: cdktf.numberToTerraform(struct!.ipDecap),
    key_cfg: cdktf.listMapper(ddosDstEntryL4TypeTunnelDecapKeyCfgToTerraform, true)(struct!.keyCfg),
  }
}


export function ddosDstEntryL4TypeTunnelDecapToHclTerraform(struct?: DdosDstEntryL4TypeTunnelDecapOutputReference | DdosDstEntryL4TypeTunnelDecap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gre_decap: {
      value: cdktf.numberToHclTerraform(struct!.greDecap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_decap: {
      value: cdktf.numberToHclTerraform(struct!.ipDecap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key_cfg: {
      value: cdktf.listMapperHcl(ddosDstEntryL4TypeTunnelDecapKeyCfgToHclTerraform, true)(struct!.keyCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryL4TypeTunnelDecapKeyCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryL4TypeTunnelDecapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryL4TypeTunnelDecap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._greDecap !== undefined) {
      hasAnyValues = true;
      internalValueResult.greDecap = this._greDecap;
    }
    if (this._ipDecap !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipDecap = this._ipDecap;
    }
    if (this._keyCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyCfg = this._keyCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryL4TypeTunnelDecap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._greDecap = undefined;
      this._ipDecap = undefined;
      this._keyCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._greDecap = value.greDecap;
      this._ipDecap = value.ipDecap;
      this._keyCfg.internalValue = value.keyCfg;
    }
  }

  // gre_decap - computed: false, optional: true, required: false
  private _greDecap?: number; 
  public get greDecap() {
    return this.getNumberAttribute('gre_decap');
  }
  public set greDecap(value: number) {
    this._greDecap = value;
  }
  public resetGreDecap() {
    this._greDecap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greDecapInput() {
    return this._greDecap;
  }

  // ip_decap - computed: false, optional: true, required: false
  private _ipDecap?: number; 
  public get ipDecap() {
    return this.getNumberAttribute('ip_decap');
  }
  public set ipDecap(value: number) {
    this._ipDecap = value;
  }
  public resetIpDecap() {
    this._ipDecap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDecapInput() {
    return this._ipDecap;
  }

  // key_cfg - computed: false, optional: true, required: false
  private _keyCfg = new DdosDstEntryL4TypeTunnelDecapKeyCfgList(this, "key_cfg", false);
  public get keyCfg() {
    return this._keyCfg;
  }
  public putKeyCfg(value: DdosDstEntryL4TypeTunnelDecapKeyCfg[] | cdktf.IResolvable) {
    this._keyCfg.internalValue = value;
  }
  public resetKeyCfg() {
    this._keyCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyCfgInput() {
    return this._keyCfg.internalValue;
  }
}
export interface DdosDstEntryL4TypeTunnelRateLimit {
  /**
  * Enable inner IP rate limiting on GRE traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#gre_rate_limit DdosDstEntryL4Type#gre_rate_limit}
  */
  readonly greRateLimit?: number;
  /**
  * Enable inner IP rate limiting on IPinIP traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#ip_rate_limit DdosDstEntryL4Type#ip_rate_limit}
  */
  readonly ipRateLimit?: number;
}

export function ddosDstEntryL4TypeTunnelRateLimitToTerraform(struct?: DdosDstEntryL4TypeTunnelRateLimitOutputReference | DdosDstEntryL4TypeTunnelRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gre_rate_limit: cdktf.numberToTerraform(struct!.greRateLimit),
    ip_rate_limit: cdktf.numberToTerraform(struct!.ipRateLimit),
  }
}


export function ddosDstEntryL4TypeTunnelRateLimitToHclTerraform(struct?: DdosDstEntryL4TypeTunnelRateLimitOutputReference | DdosDstEntryL4TypeTunnelRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gre_rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.greRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.ipRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryL4TypeTunnelRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryL4TypeTunnelRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._greRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.greRateLimit = this._greRateLimit;
    }
    if (this._ipRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRateLimit = this._ipRateLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryL4TypeTunnelRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._greRateLimit = undefined;
      this._ipRateLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._greRateLimit = value.greRateLimit;
      this._ipRateLimit = value.ipRateLimit;
    }
  }

  // gre_rate_limit - computed: false, optional: true, required: false
  private _greRateLimit?: number; 
  public get greRateLimit() {
    return this.getNumberAttribute('gre_rate_limit');
  }
  public set greRateLimit(value: number) {
    this._greRateLimit = value;
  }
  public resetGreRateLimit() {
    this._greRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greRateLimitInput() {
    return this._greRateLimit;
  }

  // ip_rate_limit - computed: false, optional: true, required: false
  private _ipRateLimit?: number; 
  public get ipRateLimit() {
    return this.getNumberAttribute('ip_rate_limit');
  }
  public set ipRateLimit(value: number) {
    this._ipRateLimit = value;
  }
  public resetIpRateLimit() {
    this._ipRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRateLimitInput() {
    return this._ipRateLimit;
  }
}
export interface DdosDstEntryL4TypeUndefinedPortHitStatistics {
  /**
  * Configure port scanning counter reset interval (minutes), Default 60 mins
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#reset_interval DdosDstEntryL4Type#reset_interval}
  */
  readonly resetInterval?: number;
  /**
  * Enable port scanning statistics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#undefined_port_hit_statistics DdosDstEntryL4Type#undefined_port_hit_statistics}
  */
  readonly undefinedPortHitStatistics?: number;
}

export function ddosDstEntryL4TypeUndefinedPortHitStatisticsToTerraform(struct?: DdosDstEntryL4TypeUndefinedPortHitStatisticsOutputReference | DdosDstEntryL4TypeUndefinedPortHitStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reset_interval: cdktf.numberToTerraform(struct!.resetInterval),
    undefined_port_hit_statistics: cdktf.numberToTerraform(struct!.undefinedPortHitStatistics),
  }
}


export function ddosDstEntryL4TypeUndefinedPortHitStatisticsToHclTerraform(struct?: DdosDstEntryL4TypeUndefinedPortHitStatisticsOutputReference | DdosDstEntryL4TypeUndefinedPortHitStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reset_interval: {
      value: cdktf.numberToHclTerraform(struct!.resetInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    undefined_port_hit_statistics: {
      value: cdktf.numberToHclTerraform(struct!.undefinedPortHitStatistics),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryL4TypeUndefinedPortHitStatisticsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryL4TypeUndefinedPortHitStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resetInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetInterval = this._resetInterval;
    }
    if (this._undefinedPortHitStatistics !== undefined) {
      hasAnyValues = true;
      internalValueResult.undefinedPortHitStatistics = this._undefinedPortHitStatistics;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryL4TypeUndefinedPortHitStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resetInterval = undefined;
      this._undefinedPortHitStatistics = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resetInterval = value.resetInterval;
      this._undefinedPortHitStatistics = value.undefinedPortHitStatistics;
    }
  }

  // reset_interval - computed: false, optional: true, required: false
  private _resetInterval?: number; 
  public get resetInterval() {
    return this.getNumberAttribute('reset_interval');
  }
  public set resetInterval(value: number) {
    this._resetInterval = value;
  }
  public resetResetInterval() {
    this._resetInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetIntervalInput() {
    return this._resetInterval;
  }

  // undefined_port_hit_statistics - computed: false, optional: true, required: false
  private _undefinedPortHitStatistics?: number; 
  public get undefinedPortHitStatistics() {
    return this.getNumberAttribute('undefined_port_hit_statistics');
  }
  public set undefinedPortHitStatistics(value: number) {
    this._undefinedPortHitStatistics = value;
  }
  public resetUndefinedPortHitStatistics() {
    this._undefinedPortHitStatistics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get undefinedPortHitStatisticsInput() {
    return this._undefinedPortHitStatistics;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type thunder_ddos_dst_entry_l4_type}
*/
export class DdosDstEntryL4Type extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_entry_l4_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDstEntryL4Type resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDstEntryL4Type to import
  * @param importFromId The id of the existing DdosDstEntryL4Type that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDstEntryL4Type to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_entry_l4_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_l4_type thunder_ddos_dst_entry_l4_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDstEntryL4TypeConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDstEntryL4TypeConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_entry_l4_type',
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
    this._deny = config.deny;
    this._detectionEnable = config.detectionEnable;
    this._disableSynAuth = config.disableSynAuth;
    this._dropFragPkt = config.dropFragPkt;
    this._dropOnNoPortMatch = config.dropOnNoPortMatch;
    this._dstEntryName = config.dstEntryName;
    this._enableTopK = config.enableTopK;
    this._glid = config.glid;
    this._id = config.id;
    this._ipFilteringPolicy = config.ipFilteringPolicy;
    this._maxRexmitSynPerFlow = config.maxRexmitSynPerFlow;
    this._maxRexmitSynPerFlowExceedAction = config.maxRexmitSynPerFlowExceedAction;
    this._protocol = config.protocol;
    this._setCounterBaseVal = config.setCounterBaseVal;
    this._stateful = config.stateful;
    this._synAuth = config.synAuth;
    this._synCookie = config.synCookie;
    this._tcpResetClient = config.tcpResetClient;
    this._tcpResetServer = config.tcpResetServer;
    this._topkNumRecords = config.topkNumRecords;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._glidExceedAction.internalValue = config.glidExceedAction;
    this._ipFilteringPolicyOper.internalValue = config.ipFilteringPolicyOper;
    this._portInd.internalValue = config.portInd;
    this._progressionTracking.internalValue = config.progressionTracking;
    this._template.internalValue = config.template;
    this._topkSources.internalValue = config.topkSources;
    this._tunnelDecap.internalValue = config.tunnelDecap;
    this._tunnelRateLimit.internalValue = config.tunnelRateLimit;
    this._undefinedPortHitStatistics.internalValue = config.undefinedPortHitStatistics;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deny - computed: false, optional: true, required: false
  private _deny?: number; 
  public get deny() {
    return this.getNumberAttribute('deny');
  }
  public set deny(value: number) {
    this._deny = value;
  }
  public resetDeny() {
    this._deny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny;
  }

  // detection_enable - computed: false, optional: true, required: false
  private _detectionEnable?: number; 
  public get detectionEnable() {
    return this.getNumberAttribute('detection_enable');
  }
  public set detectionEnable(value: number) {
    this._detectionEnable = value;
  }
  public resetDetectionEnable() {
    this._detectionEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionEnableInput() {
    return this._detectionEnable;
  }

  // disable_syn_auth - computed: false, optional: true, required: false
  private _disableSynAuth?: number; 
  public get disableSynAuth() {
    return this.getNumberAttribute('disable_syn_auth');
  }
  public set disableSynAuth(value: number) {
    this._disableSynAuth = value;
  }
  public resetDisableSynAuth() {
    this._disableSynAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSynAuthInput() {
    return this._disableSynAuth;
  }

  // drop_frag_pkt - computed: false, optional: true, required: false
  private _dropFragPkt?: number; 
  public get dropFragPkt() {
    return this.getNumberAttribute('drop_frag_pkt');
  }
  public set dropFragPkt(value: number) {
    this._dropFragPkt = value;
  }
  public resetDropFragPkt() {
    this._dropFragPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropFragPktInput() {
    return this._dropFragPkt;
  }

  // drop_on_no_port_match - computed: false, optional: true, required: false
  private _dropOnNoPortMatch?: string; 
  public get dropOnNoPortMatch() {
    return this.getStringAttribute('drop_on_no_port_match');
  }
  public set dropOnNoPortMatch(value: string) {
    this._dropOnNoPortMatch = value;
  }
  public resetDropOnNoPortMatch() {
    this._dropOnNoPortMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropOnNoPortMatchInput() {
    return this._dropOnNoPortMatch;
  }

  // dst_entry_name - computed: false, optional: false, required: true
  private _dstEntryName?: string; 
  public get dstEntryName() {
    return this.getStringAttribute('dst_entry_name');
  }
  public set dstEntryName(value: string) {
    this._dstEntryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEntryNameInput() {
    return this._dstEntryName;
  }

  // enable_top_k - computed: false, optional: true, required: false
  private _enableTopK?: number; 
  public get enableTopK() {
    return this.getNumberAttribute('enable_top_k');
  }
  public set enableTopK(value: number) {
    this._enableTopK = value;
  }
  public resetEnableTopK() {
    this._enableTopK = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTopKInput() {
    return this._enableTopK;
  }

  // glid - computed: false, optional: true, required: false
  private _glid?: string; 
  public get glid() {
    return this.getStringAttribute('glid');
  }
  public set glid(value: string) {
    this._glid = value;
  }
  public resetGlid() {
    this._glid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidInput() {
    return this._glid;
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

  // ip_filtering_policy - computed: false, optional: true, required: false
  private _ipFilteringPolicy?: string; 
  public get ipFilteringPolicy() {
    return this.getStringAttribute('ip_filtering_policy');
  }
  public set ipFilteringPolicy(value: string) {
    this._ipFilteringPolicy = value;
  }
  public resetIpFilteringPolicy() {
    this._ipFilteringPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilteringPolicyInput() {
    return this._ipFilteringPolicy;
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

  // max_rexmit_syn_per_flow_exceed_action - computed: false, optional: true, required: false
  private _maxRexmitSynPerFlowExceedAction?: string; 
  public get maxRexmitSynPerFlowExceedAction() {
    return this.getStringAttribute('max_rexmit_syn_per_flow_exceed_action');
  }
  public set maxRexmitSynPerFlowExceedAction(value: string) {
    this._maxRexmitSynPerFlowExceedAction = value;
  }
  public resetMaxRexmitSynPerFlowExceedAction() {
    this._maxRexmitSynPerFlowExceedAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRexmitSynPerFlowExceedActionInput() {
    return this._maxRexmitSynPerFlowExceedAction;
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

  // set_counter_base_val - computed: false, optional: true, required: false
  private _setCounterBaseVal?: number; 
  public get setCounterBaseVal() {
    return this.getNumberAttribute('set_counter_base_val');
  }
  public set setCounterBaseVal(value: number) {
    this._setCounterBaseVal = value;
  }
  public resetSetCounterBaseVal() {
    this._setCounterBaseVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCounterBaseValInput() {
    return this._setCounterBaseVal;
  }

  // stateful - computed: false, optional: true, required: false
  private _stateful?: number; 
  public get stateful() {
    return this.getNumberAttribute('stateful');
  }
  public set stateful(value: number) {
    this._stateful = value;
  }
  public resetStateful() {
    this._stateful = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulInput() {
    return this._stateful;
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

  // tcp_reset_client - computed: false, optional: true, required: false
  private _tcpResetClient?: number; 
  public get tcpResetClient() {
    return this.getNumberAttribute('tcp_reset_client');
  }
  public set tcpResetClient(value: number) {
    this._tcpResetClient = value;
  }
  public resetTcpResetClient() {
    this._tcpResetClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpResetClientInput() {
    return this._tcpResetClient;
  }

  // tcp_reset_server - computed: false, optional: true, required: false
  private _tcpResetServer?: number; 
  public get tcpResetServer() {
    return this.getNumberAttribute('tcp_reset_server');
  }
  public set tcpResetServer(value: number) {
    this._tcpResetServer = value;
  }
  public resetTcpResetServer() {
    this._tcpResetServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpResetServerInput() {
    return this._tcpResetServer;
  }

  // topk_num_records - computed: false, optional: true, required: false
  private _topkNumRecords?: number; 
  public get topkNumRecords() {
    return this.getNumberAttribute('topk_num_records');
  }
  public set topkNumRecords(value: number) {
    this._topkNumRecords = value;
  }
  public resetTopkNumRecords() {
    this._topkNumRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkNumRecordsInput() {
    return this._topkNumRecords;
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

  // glid_exceed_action - computed: false, optional: true, required: false
  private _glidExceedAction = new DdosDstEntryL4TypeGlidExceedActionOutputReference(this, "glid_exceed_action");
  public get glidExceedAction() {
    return this._glidExceedAction;
  }
  public putGlidExceedAction(value: DdosDstEntryL4TypeGlidExceedAction) {
    this._glidExceedAction.internalValue = value;
  }
  public resetGlidExceedAction() {
    this._glidExceedAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidExceedActionInput() {
    return this._glidExceedAction.internalValue;
  }

  // ip_filtering_policy_oper - computed: false, optional: true, required: false
  private _ipFilteringPolicyOper = new DdosDstEntryL4TypeIpFilteringPolicyOperOutputReference(this, "ip_filtering_policy_oper");
  public get ipFilteringPolicyOper() {
    return this._ipFilteringPolicyOper;
  }
  public putIpFilteringPolicyOper(value: DdosDstEntryL4TypeIpFilteringPolicyOper) {
    this._ipFilteringPolicyOper.internalValue = value;
  }
  public resetIpFilteringPolicyOper() {
    this._ipFilteringPolicyOper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilteringPolicyOperInput() {
    return this._ipFilteringPolicyOper.internalValue;
  }

  // port_ind - computed: false, optional: true, required: false
  private _portInd = new DdosDstEntryL4TypePortIndOutputReference(this, "port_ind");
  public get portInd() {
    return this._portInd;
  }
  public putPortInd(value: DdosDstEntryL4TypePortInd) {
    this._portInd.internalValue = value;
  }
  public resetPortInd() {
    this._portInd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portIndInput() {
    return this._portInd.internalValue;
  }

  // progression_tracking - computed: false, optional: true, required: false
  private _progressionTracking = new DdosDstEntryL4TypeProgressionTrackingOutputReference(this, "progression_tracking");
  public get progressionTracking() {
    return this._progressionTracking;
  }
  public putProgressionTracking(value: DdosDstEntryL4TypeProgressionTracking) {
    this._progressionTracking.internalValue = value;
  }
  public resetProgressionTracking() {
    this._progressionTracking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingInput() {
    return this._progressionTracking.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new DdosDstEntryL4TypeTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosDstEntryL4TypeTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // topk_sources - computed: false, optional: true, required: false
  private _topkSources = new DdosDstEntryL4TypeTopkSourcesOutputReference(this, "topk_sources");
  public get topkSources() {
    return this._topkSources;
  }
  public putTopkSources(value: DdosDstEntryL4TypeTopkSources) {
    this._topkSources.internalValue = value;
  }
  public resetTopkSources() {
    this._topkSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkSourcesInput() {
    return this._topkSources.internalValue;
  }

  // tunnel_decap - computed: false, optional: true, required: false
  private _tunnelDecap = new DdosDstEntryL4TypeTunnelDecapOutputReference(this, "tunnel_decap");
  public get tunnelDecap() {
    return this._tunnelDecap;
  }
  public putTunnelDecap(value: DdosDstEntryL4TypeTunnelDecap) {
    this._tunnelDecap.internalValue = value;
  }
  public resetTunnelDecap() {
    this._tunnelDecap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelDecapInput() {
    return this._tunnelDecap.internalValue;
  }

  // tunnel_rate_limit - computed: false, optional: true, required: false
  private _tunnelRateLimit = new DdosDstEntryL4TypeTunnelRateLimitOutputReference(this, "tunnel_rate_limit");
  public get tunnelRateLimit() {
    return this._tunnelRateLimit;
  }
  public putTunnelRateLimit(value: DdosDstEntryL4TypeTunnelRateLimit) {
    this._tunnelRateLimit.internalValue = value;
  }
  public resetTunnelRateLimit() {
    this._tunnelRateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelRateLimitInput() {
    return this._tunnelRateLimit.internalValue;
  }

  // undefined_port_hit_statistics - computed: false, optional: true, required: false
  private _undefinedPortHitStatistics = new DdosDstEntryL4TypeUndefinedPortHitStatisticsOutputReference(this, "undefined_port_hit_statistics");
  public get undefinedPortHitStatistics() {
    return this._undefinedPortHitStatistics;
  }
  public putUndefinedPortHitStatistics(value: DdosDstEntryL4TypeUndefinedPortHitStatistics) {
    this._undefinedPortHitStatistics.internalValue = value;
  }
  public resetUndefinedPortHitStatistics() {
    this._undefinedPortHitStatistics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get undefinedPortHitStatisticsInput() {
    return this._undefinedPortHitStatistics.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deny: cdktf.numberToTerraform(this._deny),
      detection_enable: cdktf.numberToTerraform(this._detectionEnable),
      disable_syn_auth: cdktf.numberToTerraform(this._disableSynAuth),
      drop_frag_pkt: cdktf.numberToTerraform(this._dropFragPkt),
      drop_on_no_port_match: cdktf.stringToTerraform(this._dropOnNoPortMatch),
      dst_entry_name: cdktf.stringToTerraform(this._dstEntryName),
      enable_top_k: cdktf.numberToTerraform(this._enableTopK),
      glid: cdktf.stringToTerraform(this._glid),
      id: cdktf.stringToTerraform(this._id),
      ip_filtering_policy: cdktf.stringToTerraform(this._ipFilteringPolicy),
      max_rexmit_syn_per_flow: cdktf.numberToTerraform(this._maxRexmitSynPerFlow),
      max_rexmit_syn_per_flow_exceed_action: cdktf.stringToTerraform(this._maxRexmitSynPerFlowExceedAction),
      protocol: cdktf.stringToTerraform(this._protocol),
      set_counter_base_val: cdktf.numberToTerraform(this._setCounterBaseVal),
      stateful: cdktf.numberToTerraform(this._stateful),
      syn_auth: cdktf.stringToTerraform(this._synAuth),
      syn_cookie: cdktf.numberToTerraform(this._synCookie),
      tcp_reset_client: cdktf.numberToTerraform(this._tcpResetClient),
      tcp_reset_server: cdktf.numberToTerraform(this._tcpResetServer),
      topk_num_records: cdktf.numberToTerraform(this._topkNumRecords),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      glid_exceed_action: ddosDstEntryL4TypeGlidExceedActionToTerraform(this._glidExceedAction.internalValue),
      ip_filtering_policy_oper: ddosDstEntryL4TypeIpFilteringPolicyOperToTerraform(this._ipFilteringPolicyOper.internalValue),
      port_ind: ddosDstEntryL4TypePortIndToTerraform(this._portInd.internalValue),
      progression_tracking: ddosDstEntryL4TypeProgressionTrackingToTerraform(this._progressionTracking.internalValue),
      template: ddosDstEntryL4TypeTemplateToTerraform(this._template.internalValue),
      topk_sources: ddosDstEntryL4TypeTopkSourcesToTerraform(this._topkSources.internalValue),
      tunnel_decap: ddosDstEntryL4TypeTunnelDecapToTerraform(this._tunnelDecap.internalValue),
      tunnel_rate_limit: ddosDstEntryL4TypeTunnelRateLimitToTerraform(this._tunnelRateLimit.internalValue),
      undefined_port_hit_statistics: ddosDstEntryL4TypeUndefinedPortHitStatisticsToTerraform(this._undefinedPortHitStatistics.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deny: {
        value: cdktf.numberToHclTerraform(this._deny),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      detection_enable: {
        value: cdktf.numberToHclTerraform(this._detectionEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_syn_auth: {
        value: cdktf.numberToHclTerraform(this._disableSynAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_frag_pkt: {
        value: cdktf.numberToHclTerraform(this._dropFragPkt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_on_no_port_match: {
        value: cdktf.stringToHclTerraform(this._dropOnNoPortMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_entry_name: {
        value: cdktf.stringToHclTerraform(this._dstEntryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_top_k: {
        value: cdktf.numberToHclTerraform(this._enableTopK),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      glid: {
        value: cdktf.stringToHclTerraform(this._glid),
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
      ip_filtering_policy: {
        value: cdktf.stringToHclTerraform(this._ipFilteringPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_rexmit_syn_per_flow: {
        value: cdktf.numberToHclTerraform(this._maxRexmitSynPerFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_rexmit_syn_per_flow_exceed_action: {
        value: cdktf.stringToHclTerraform(this._maxRexmitSynPerFlowExceedAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_counter_base_val: {
        value: cdktf.numberToHclTerraform(this._setCounterBaseVal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stateful: {
        value: cdktf.numberToHclTerraform(this._stateful),
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
      tcp_reset_client: {
        value: cdktf.numberToHclTerraform(this._tcpResetClient),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_reset_server: {
        value: cdktf.numberToHclTerraform(this._tcpResetServer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      topk_num_records: {
        value: cdktf.numberToHclTerraform(this._topkNumRecords),
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
      glid_exceed_action: {
        value: ddosDstEntryL4TypeGlidExceedActionToHclTerraform(this._glidExceedAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntryL4TypeGlidExceedActionList",
      },
      ip_filtering_policy_oper: {
        value: ddosDstEntryL4TypeIpFilteringPolicyOperToHclTerraform(this._ipFilteringPolicyOper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntryL4TypeIpFilteringPolicyOperList",
      },
      port_ind: {
        value: ddosDstEntryL4TypePortIndToHclTerraform(this._portInd.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntryL4TypePortIndList",
      },
      progression_tracking: {
        value: ddosDstEntryL4TypeProgressionTrackingToHclTerraform(this._progressionTracking.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntryL4TypeProgressionTrackingList",
      },
      template: {
        value: ddosDstEntryL4TypeTemplateToHclTerraform(this._template.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntryL4TypeTemplateList",
      },
      topk_sources: {
        value: ddosDstEntryL4TypeTopkSourcesToHclTerraform(this._topkSources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntryL4TypeTopkSourcesList",
      },
      tunnel_decap: {
        value: ddosDstEntryL4TypeTunnelDecapToHclTerraform(this._tunnelDecap.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntryL4TypeTunnelDecapList",
      },
      tunnel_rate_limit: {
        value: ddosDstEntryL4TypeTunnelRateLimitToHclTerraform(this._tunnelRateLimit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntryL4TypeTunnelRateLimitList",
      },
      undefined_port_hit_statistics: {
        value: ddosDstEntryL4TypeUndefinedPortHitStatisticsToHclTerraform(this._undefinedPortHitStatistics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntryL4TypeUndefinedPortHitStatisticsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
