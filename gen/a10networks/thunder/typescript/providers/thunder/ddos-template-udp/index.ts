// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosTemplateUdpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure session age(in minutes) for UDP sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#age DdosTemplateUdp#age}
  */
  readonly age?: number;
  /**
  * Drop NTP monlist request/response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#drop_ntp_monlist DdosTemplateUdp#drop_ntp_monlist}
  */
  readonly dropNtpMonlist?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#id DdosTemplateUdp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Maximum UDP payload size for each single packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#max_payload_size DdosTemplateUdp#max_payload_size}
  */
  readonly maxPayloadSize?: number;
  /**
  * Minimum UDP payload size for each single packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#min_payload_size DdosTemplateUdp#min_payload_size}
  */
  readonly minPayloadSize?: number;
  /**
  * DDOS UDP Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#name DdosTemplateUdp#name}
  */
  readonly name: string;
  /**
  * Packet rate limit per connection per rate-interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#per_conn_pkt_rate_limit DdosTemplateUdp#per_conn_pkt_rate_limit}
  */
  readonly perConnPktRateLimit?: number;
  /**
  * '100ms': 100ms; '1sec': 1sec;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#per_conn_rate_interval DdosTemplateUdp#per_conn_rate_interval}
  */
  readonly perConnRateInterval?: string;
  /**
  * Token-Authentication previous salt-prefix timeout in minutes, default is 1 min
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#previous_salt_timeout DdosTemplateUdp#previous_salt_timeout}
  */
  readonly previousSaltTimeout?: number;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#public_ipv4_addr DdosTemplateUdp#public_ipv4_addr}
  */
  readonly publicIpv4Addr?: string;
  /**
  * IPV6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#public_ipv6_addr DdosTemplateUdp#public_ipv6_addr}
  */
  readonly publicIpv6Addr?: string;
  /**
  * Enable Token Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#token_authentication DdosTemplateUdp#token_authentication}
  */
  readonly tokenAuthentication?: number;
  /**
  * 'md5_Salt-SrcIp-SrcPort-DstIp-DstPort': md5 of Salt-SrcIp-SrcPort-DstIp-DstPort; 'md5_Salt-DstIp-DstPort': md5 of Salt-DstIp-DstPort; 'md5_Salt-SrcIp-DstIp': md5 of Salt-SrcIp-DstIp; 'md5_Salt-SrcPort-DstPort': md5 of Salt-SrcPort-DstPort; 'md5_Salt-UintDstIp-DstPort': Using the uint value of IP for md5 of Salt-DstIp-DstPort; 'sha1_Salt-SrcIp-SrcPort-DstIp-DstPort': sha1 of Salt-SrcIp-SrcPort-DstIp-DstPort; 'sha1_Salt-DstIp-DstPort': sha1 of Salt-DstIp-DstPort; 'sha1_Salt-SrcIp-DstIp': sha1 of Salt-SrcIp-DstIp; 'sha1_Salt-SrcPort-DstPort': sha1 of Salt-SrcPort-DstPort; 'sha1_Salt-UintDstIp-DstPort': Using the uint value of IP for sha1 of Salt-DstIp-DstPort;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#token_authentication_formula DdosTemplateUdp#token_authentication_formula}
  */
  readonly tokenAuthenticationFormula?: string;
  /**
  * token-authentication disable hardware assistance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#token_authentication_hw_assist_disable DdosTemplateUdp#token_authentication_hw_assist_disable}
  */
  readonly tokenAuthenticationHwAssistDisable?: number;
  /**
  * The server public IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#token_authentication_public_address DdosTemplateUdp#token_authentication_public_address}
  */
  readonly tokenAuthenticationPublicAddress?: number;
  /**
  * token-authentication salt-prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#token_authentication_salt_prefix DdosTemplateUdp#token_authentication_salt_prefix}
  */
  readonly tokenAuthenticationSaltPrefix?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#token_authentication_salt_prefix_curr DdosTemplateUdp#token_authentication_salt_prefix_curr}
  */
  readonly tokenAuthenticationSaltPrefixCurr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#token_authentication_salt_prefix_prev DdosTemplateUdp#token_authentication_salt_prefix_prev}
  */
  readonly tokenAuthenticationSaltPrefixPrev?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#user_tag DdosTemplateUdp#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#uuid DdosTemplateUdp#uuid}
  */
  readonly uuid?: string;
  /**
  * drop_known_resp_src_port_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#drop_known_resp_src_port_cfg DdosTemplateUdp#drop_known_resp_src_port_cfg}
  */
  readonly dropKnownRespSrcPortCfg?: DdosTemplateUdpDropKnownRespSrcPortCfg;
  /**
  * filter_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#filter_list DdosTemplateUdp#filter_list}
  */
  readonly filterList?: DdosTemplateUdpFilterListStruct[] | cdktf.IResolvable;
  /**
  * spoof_detect_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#spoof_detect_cfg DdosTemplateUdp#spoof_detect_cfg}
  */
  readonly spoofDetectCfg?: DdosTemplateUdpSpoofDetectCfg;
  /**
  * tunnel_encap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#tunnel_encap DdosTemplateUdp#tunnel_encap}
  */
  readonly tunnelEncap?: DdosTemplateUdpTunnelEncap;
}
export interface DdosTemplateUdpDropKnownRespSrcPortCfg {
  /**
  * Drop well-known if src-port is less than 1024
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#drop_known_resp_src_port DdosTemplateUdp#drop_known_resp_src_port}
  */
  readonly dropKnownRespSrcPort?: number;
  /**
  * excluding src port equal destination port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#exclude_src_resp_port DdosTemplateUdp#exclude_src_resp_port}
  */
  readonly excludeSrcRespPort?: number;
}

export function ddosTemplateUdpDropKnownRespSrcPortCfgToTerraform(struct?: DdosTemplateUdpDropKnownRespSrcPortCfgOutputReference | DdosTemplateUdpDropKnownRespSrcPortCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drop_known_resp_src_port: cdktf.numberToTerraform(struct!.dropKnownRespSrcPort),
    exclude_src_resp_port: cdktf.numberToTerraform(struct!.excludeSrcRespPort),
  }
}


export function ddosTemplateUdpDropKnownRespSrcPortCfgToHclTerraform(struct?: DdosTemplateUdpDropKnownRespSrcPortCfgOutputReference | DdosTemplateUdpDropKnownRespSrcPortCfg): any {
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

export class DdosTemplateUdpDropKnownRespSrcPortCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateUdpDropKnownRespSrcPortCfg | undefined {
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

  public set internalValue(value: DdosTemplateUdpDropKnownRespSrcPortCfg | undefined) {
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
export interface DdosTemplateUdpFilterListStruct {
  /**
  * Filter Expression using Berkeley Packet Filter syntax
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#byte_offset_filter DdosTemplateUdp#byte_offset_filter}
  */
  readonly byteOffsetFilter?: string;
  /**
  * 'blacklist-src': Also blacklist the source when action is taken; 'whitelist-src': Whitelist the source after filter passes, packets are dropped until then; 'count-only': Take no action and continue processing the next filter;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#udp_filter_action DdosTemplateUdp#udp_filter_action}
  */
  readonly udpFilterAction?: string;
  /**
  * Regex Expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#udp_filter_regex DdosTemplateUdp#udp_filter_regex}
  */
  readonly udpFilterRegex?: string;
  /**
  * Sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#udp_filter_seq DdosTemplateUdp#udp_filter_seq}
  */
  readonly udpFilterSeq: number;
  /**
  * action taken when it does not match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#udp_filter_unmatched DdosTemplateUdp#udp_filter_unmatched}
  */
  readonly udpFilterUnmatched?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#user_tag DdosTemplateUdp#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#uuid DdosTemplateUdp#uuid}
  */
  readonly uuid?: string;
}

export function ddosTemplateUdpFilterListStructToTerraform(struct?: DdosTemplateUdpFilterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    byte_offset_filter: cdktf.stringToTerraform(struct!.byteOffsetFilter),
    udp_filter_action: cdktf.stringToTerraform(struct!.udpFilterAction),
    udp_filter_regex: cdktf.stringToTerraform(struct!.udpFilterRegex),
    udp_filter_seq: cdktf.numberToTerraform(struct!.udpFilterSeq),
    udp_filter_unmatched: cdktf.numberToTerraform(struct!.udpFilterUnmatched),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosTemplateUdpFilterListStructToHclTerraform(struct?: DdosTemplateUdpFilterListStruct | cdktf.IResolvable): any {
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
    udp_filter_action: {
      value: cdktf.stringToHclTerraform(struct!.udpFilterAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    udp_filter_regex: {
      value: cdktf.stringToHclTerraform(struct!.udpFilterRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    udp_filter_seq: {
      value: cdktf.numberToHclTerraform(struct!.udpFilterSeq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_filter_unmatched: {
      value: cdktf.numberToHclTerraform(struct!.udpFilterUnmatched),
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

export class DdosTemplateUdpFilterListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosTemplateUdpFilterListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._byteOffsetFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.byteOffsetFilter = this._byteOffsetFilter;
    }
    if (this._udpFilterAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpFilterAction = this._udpFilterAction;
    }
    if (this._udpFilterRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpFilterRegex = this._udpFilterRegex;
    }
    if (this._udpFilterSeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpFilterSeq = this._udpFilterSeq;
    }
    if (this._udpFilterUnmatched !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpFilterUnmatched = this._udpFilterUnmatched;
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

  public set internalValue(value: DdosTemplateUdpFilterListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._byteOffsetFilter = undefined;
      this._udpFilterAction = undefined;
      this._udpFilterRegex = undefined;
      this._udpFilterSeq = undefined;
      this._udpFilterUnmatched = undefined;
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
      this._udpFilterAction = value.udpFilterAction;
      this._udpFilterRegex = value.udpFilterRegex;
      this._udpFilterSeq = value.udpFilterSeq;
      this._udpFilterUnmatched = value.udpFilterUnmatched;
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

  // udp_filter_action - computed: false, optional: true, required: false
  private _udpFilterAction?: string; 
  public get udpFilterAction() {
    return this.getStringAttribute('udp_filter_action');
  }
  public set udpFilterAction(value: string) {
    this._udpFilterAction = value;
  }
  public resetUdpFilterAction() {
    this._udpFilterAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpFilterActionInput() {
    return this._udpFilterAction;
  }

  // udp_filter_regex - computed: false, optional: true, required: false
  private _udpFilterRegex?: string; 
  public get udpFilterRegex() {
    return this.getStringAttribute('udp_filter_regex');
  }
  public set udpFilterRegex(value: string) {
    this._udpFilterRegex = value;
  }
  public resetUdpFilterRegex() {
    this._udpFilterRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpFilterRegexInput() {
    return this._udpFilterRegex;
  }

  // udp_filter_seq - computed: false, optional: false, required: true
  private _udpFilterSeq?: number; 
  public get udpFilterSeq() {
    return this.getNumberAttribute('udp_filter_seq');
  }
  public set udpFilterSeq(value: number) {
    this._udpFilterSeq = value;
  }
  // Temporarily expose input value. Use with caution.
  public get udpFilterSeqInput() {
    return this._udpFilterSeq;
  }

  // udp_filter_unmatched - computed: false, optional: true, required: false
  private _udpFilterUnmatched?: number; 
  public get udpFilterUnmatched() {
    return this.getNumberAttribute('udp_filter_unmatched');
  }
  public set udpFilterUnmatched(value: number) {
    this._udpFilterUnmatched = value;
  }
  public resetUdpFilterUnmatched() {
    this._udpFilterUnmatched = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpFilterUnmatchedInput() {
    return this._udpFilterUnmatched;
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

export class DdosTemplateUdpFilterListStructList extends cdktf.ComplexList {
  public internalValue? : DdosTemplateUdpFilterListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosTemplateUdpFilterListStructOutputReference {
    return new DdosTemplateUdpFilterListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosTemplateUdpSpoofDetectCfg {
  /**
  * Optional minimum gap between 2 UDP packets for spoof-detect pass, unit is specified by min-retry-gap-interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#min_retry_gap DdosTemplateUdp#min_retry_gap}
  */
  readonly minRetryGap?: number;
  /**
  * '100ms': 100ms; '1sec': 1sec;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#min_retry_gap_interval DdosTemplateUdp#min_retry_gap_interval}
  */
  readonly minRetryGapInterval?: string;
  /**
  * Force client to retry on udp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#spoof_detect DdosTemplateUdp#spoof_detect}
  */
  readonly spoofDetect?: number;
  /**
  * timeout in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#spoof_detect_retry_timeout DdosTemplateUdp#spoof_detect_retry_timeout}
  */
  readonly spoofDetectRetryTimeout?: number;
  /**
  * timeout in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#spoof_detect_retry_timeout_val_only DdosTemplateUdp#spoof_detect_retry_timeout_val_only}
  */
  readonly spoofDetectRetryTimeoutValOnly?: number;
}

export function ddosTemplateUdpSpoofDetectCfgToTerraform(struct?: DdosTemplateUdpSpoofDetectCfgOutputReference | DdosTemplateUdpSpoofDetectCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_retry_gap: cdktf.numberToTerraform(struct!.minRetryGap),
    min_retry_gap_interval: cdktf.stringToTerraform(struct!.minRetryGapInterval),
    spoof_detect: cdktf.numberToTerraform(struct!.spoofDetect),
    spoof_detect_retry_timeout: cdktf.numberToTerraform(struct!.spoofDetectRetryTimeout),
    spoof_detect_retry_timeout_val_only: cdktf.numberToTerraform(struct!.spoofDetectRetryTimeoutValOnly),
  }
}


export function ddosTemplateUdpSpoofDetectCfgToHclTerraform(struct?: DdosTemplateUdpSpoofDetectCfgOutputReference | DdosTemplateUdpSpoofDetectCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_retry_gap: {
      value: cdktf.numberToHclTerraform(struct!.minRetryGap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_retry_gap_interval: {
      value: cdktf.stringToHclTerraform(struct!.minRetryGapInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spoof_detect: {
      value: cdktf.numberToHclTerraform(struct!.spoofDetect),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spoof_detect_retry_timeout: {
      value: cdktf.numberToHclTerraform(struct!.spoofDetectRetryTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spoof_detect_retry_timeout_val_only: {
      value: cdktf.numberToHclTerraform(struct!.spoofDetectRetryTimeoutValOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateUdpSpoofDetectCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateUdpSpoofDetectCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minRetryGap !== undefined) {
      hasAnyValues = true;
      internalValueResult.minRetryGap = this._minRetryGap;
    }
    if (this._minRetryGapInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.minRetryGapInterval = this._minRetryGapInterval;
    }
    if (this._spoofDetect !== undefined) {
      hasAnyValues = true;
      internalValueResult.spoofDetect = this._spoofDetect;
    }
    if (this._spoofDetectRetryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.spoofDetectRetryTimeout = this._spoofDetectRetryTimeout;
    }
    if (this._spoofDetectRetryTimeoutValOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.spoofDetectRetryTimeoutValOnly = this._spoofDetectRetryTimeoutValOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateUdpSpoofDetectCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minRetryGap = undefined;
      this._minRetryGapInterval = undefined;
      this._spoofDetect = undefined;
      this._spoofDetectRetryTimeout = undefined;
      this._spoofDetectRetryTimeoutValOnly = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minRetryGap = value.minRetryGap;
      this._minRetryGapInterval = value.minRetryGapInterval;
      this._spoofDetect = value.spoofDetect;
      this._spoofDetectRetryTimeout = value.spoofDetectRetryTimeout;
      this._spoofDetectRetryTimeoutValOnly = value.spoofDetectRetryTimeoutValOnly;
    }
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

  // min_retry_gap_interval - computed: false, optional: true, required: false
  private _minRetryGapInterval?: string; 
  public get minRetryGapInterval() {
    return this.getStringAttribute('min_retry_gap_interval');
  }
  public set minRetryGapInterval(value: string) {
    this._minRetryGapInterval = value;
  }
  public resetMinRetryGapInterval() {
    this._minRetryGapInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRetryGapIntervalInput() {
    return this._minRetryGapInterval;
  }

  // spoof_detect - computed: false, optional: true, required: false
  private _spoofDetect?: number; 
  public get spoofDetect() {
    return this.getNumberAttribute('spoof_detect');
  }
  public set spoofDetect(value: number) {
    this._spoofDetect = value;
  }
  public resetSpoofDetect() {
    this._spoofDetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spoofDetectInput() {
    return this._spoofDetect;
  }

  // spoof_detect_retry_timeout - computed: false, optional: true, required: false
  private _spoofDetectRetryTimeout?: number; 
  public get spoofDetectRetryTimeout() {
    return this.getNumberAttribute('spoof_detect_retry_timeout');
  }
  public set spoofDetectRetryTimeout(value: number) {
    this._spoofDetectRetryTimeout = value;
  }
  public resetSpoofDetectRetryTimeout() {
    this._spoofDetectRetryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spoofDetectRetryTimeoutInput() {
    return this._spoofDetectRetryTimeout;
  }

  // spoof_detect_retry_timeout_val_only - computed: false, optional: true, required: false
  private _spoofDetectRetryTimeoutValOnly?: number; 
  public get spoofDetectRetryTimeoutValOnly() {
    return this.getNumberAttribute('spoof_detect_retry_timeout_val_only');
  }
  public set spoofDetectRetryTimeoutValOnly(value: number) {
    this._spoofDetectRetryTimeoutValOnly = value;
  }
  public resetSpoofDetectRetryTimeoutValOnly() {
    this._spoofDetectRetryTimeoutValOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spoofDetectRetryTimeoutValOnlyInput() {
    return this._spoofDetectRetryTimeoutValOnly;
  }
}
export interface DdosTemplateUdpTunnelEncapAlways {
  /**
  * IPv4 address (IPv6-over-IPv4 / IPv4-over-IPv6 are not supported.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#ipv4_addr DdosTemplateUdp#ipv4_addr}
  */
  readonly ipv4Addr?: string;
  /**
  * IPv6 address (IPv6-over-IPv4 / IPv4-over-IPv6 are not supported.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#ipv6_addr DdosTemplateUdp#ipv6_addr}
  */
  readonly ipv6Addr?: string;
  /**
  * Use original source ip for encapsulation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#preserve_src_ipv4 DdosTemplateUdp#preserve_src_ipv4}
  */
  readonly preserveSrcIpv4?: number;
  /**
  * Use original source ip for encapsulation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#preserve_src_ipv6 DdosTemplateUdp#preserve_src_ipv6}
  */
  readonly preserveSrcIpv6?: number;
}

export function ddosTemplateUdpTunnelEncapAlwaysToTerraform(struct?: DdosTemplateUdpTunnelEncapAlwaysOutputReference | DdosTemplateUdpTunnelEncapAlways): any {
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


export function ddosTemplateUdpTunnelEncapAlwaysToHclTerraform(struct?: DdosTemplateUdpTunnelEncapAlwaysOutputReference | DdosTemplateUdpTunnelEncapAlways): any {
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

export class DdosTemplateUdpTunnelEncapAlwaysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateUdpTunnelEncapAlways | undefined {
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

  public set internalValue(value: DdosTemplateUdpTunnelEncapAlways | undefined) {
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
export interface DdosTemplateUdpTunnelEncapGreAlways {
  /**
  * IPv4 address (IPv6-over-IPv4 / IPv4-over-IPv6 are not supported.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#gre_ipv4 DdosTemplateUdp#gre_ipv4}
  */
  readonly greIpv4?: string;
  /**
  * IPv6 address (IPv6-over-IPv4 / IPv4-over-IPv6 are not supported.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#gre_ipv6 DdosTemplateUdp#gre_ipv6}
  */
  readonly greIpv6?: string;
  /**
  * Encapsulate with key (Hexadecimal 0x0-0xFFFFFFFF,decimal 0-4294967295)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#key_ipv4 DdosTemplateUdp#key_ipv4}
  */
  readonly keyIpv4?: string;
  /**
  * Encapsulate with key (Hexadecimal 0x0-0xFFFFFFFF,decimal 0-4294967295)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#key_ipv6 DdosTemplateUdp#key_ipv6}
  */
  readonly keyIpv6?: string;
  /**
  * Use original source ip for encapsulation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#preserve_src_ipv4_gre DdosTemplateUdp#preserve_src_ipv4_gre}
  */
  readonly preserveSrcIpv4Gre?: number;
  /**
  * Use original source ip for encapsulation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#preserve_src_ipv6_gre DdosTemplateUdp#preserve_src_ipv6_gre}
  */
  readonly preserveSrcIpv6Gre?: number;
}

export function ddosTemplateUdpTunnelEncapGreAlwaysToTerraform(struct?: DdosTemplateUdpTunnelEncapGreAlwaysOutputReference | DdosTemplateUdpTunnelEncapGreAlways): any {
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


export function ddosTemplateUdpTunnelEncapGreAlwaysToHclTerraform(struct?: DdosTemplateUdpTunnelEncapGreAlwaysOutputReference | DdosTemplateUdpTunnelEncapGreAlways): any {
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

export class DdosTemplateUdpTunnelEncapGreAlwaysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateUdpTunnelEncapGreAlways | undefined {
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

  public set internalValue(value: DdosTemplateUdpTunnelEncapGreAlways | undefined) {
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
export interface DdosTemplateUdpTunnelEncap {
  /**
  * Enable Tunnel encapsulation using GRE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#gre_encap DdosTemplateUdp#gre_encap}
  */
  readonly greEncap?: number;
  /**
  * Enable Tunnel encapsulation using IP in IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#ip_encap DdosTemplateUdp#ip_encap}
  */
  readonly ipEncap?: number;
  /**
  * always block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#always DdosTemplateUdp#always}
  */
  readonly always?: DdosTemplateUdpTunnelEncapAlways;
  /**
  * gre_always block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#gre_always DdosTemplateUdp#gre_always}
  */
  readonly greAlways?: DdosTemplateUdpTunnelEncapGreAlways;
}

export function ddosTemplateUdpTunnelEncapToTerraform(struct?: DdosTemplateUdpTunnelEncapOutputReference | DdosTemplateUdpTunnelEncap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gre_encap: cdktf.numberToTerraform(struct!.greEncap),
    ip_encap: cdktf.numberToTerraform(struct!.ipEncap),
    always: ddosTemplateUdpTunnelEncapAlwaysToTerraform(struct!.always),
    gre_always: ddosTemplateUdpTunnelEncapGreAlwaysToTerraform(struct!.greAlways),
  }
}


export function ddosTemplateUdpTunnelEncapToHclTerraform(struct?: DdosTemplateUdpTunnelEncapOutputReference | DdosTemplateUdpTunnelEncap): any {
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
    ip_encap: {
      value: cdktf.numberToHclTerraform(struct!.ipEncap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    always: {
      value: ddosTemplateUdpTunnelEncapAlwaysToHclTerraform(struct!.always),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateUdpTunnelEncapAlwaysList",
    },
    gre_always: {
      value: ddosTemplateUdpTunnelEncapGreAlwaysToHclTerraform(struct!.greAlways),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateUdpTunnelEncapGreAlwaysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateUdpTunnelEncapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateUdpTunnelEncap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._greEncap !== undefined) {
      hasAnyValues = true;
      internalValueResult.greEncap = this._greEncap;
    }
    if (this._ipEncap !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipEncap = this._ipEncap;
    }
    if (this._always?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.always = this._always?.internalValue;
    }
    if (this._greAlways?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.greAlways = this._greAlways?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateUdpTunnelEncap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._greEncap = undefined;
      this._ipEncap = undefined;
      this._always.internalValue = undefined;
      this._greAlways.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._greEncap = value.greEncap;
      this._ipEncap = value.ipEncap;
      this._always.internalValue = value.always;
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
  private _always = new DdosTemplateUdpTunnelEncapAlwaysOutputReference(this, "always");
  public get always() {
    return this._always;
  }
  public putAlways(value: DdosTemplateUdpTunnelEncapAlways) {
    this._always.internalValue = value;
  }
  public resetAlways() {
    this._always.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysInput() {
    return this._always.internalValue;
  }

  // gre_always - computed: false, optional: true, required: false
  private _greAlways = new DdosTemplateUdpTunnelEncapGreAlwaysOutputReference(this, "gre_always");
  public get greAlways() {
    return this._greAlways;
  }
  public putGreAlways(value: DdosTemplateUdpTunnelEncapGreAlways) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp thunder_ddos_template_udp}
*/
export class DdosTemplateUdp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_template_udp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosTemplateUdp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosTemplateUdp to import
  * @param importFromId The id of the existing DdosTemplateUdp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosTemplateUdp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_template_udp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_udp thunder_ddos_template_udp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosTemplateUdpConfig
  */
  public constructor(scope: Construct, id: string, config: DdosTemplateUdpConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_template_udp',
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
    this._age = config.age;
    this._dropNtpMonlist = config.dropNtpMonlist;
    this._id = config.id;
    this._maxPayloadSize = config.maxPayloadSize;
    this._minPayloadSize = config.minPayloadSize;
    this._name = config.name;
    this._perConnPktRateLimit = config.perConnPktRateLimit;
    this._perConnRateInterval = config.perConnRateInterval;
    this._previousSaltTimeout = config.previousSaltTimeout;
    this._publicIpv4Addr = config.publicIpv4Addr;
    this._publicIpv6Addr = config.publicIpv6Addr;
    this._tokenAuthentication = config.tokenAuthentication;
    this._tokenAuthenticationFormula = config.tokenAuthenticationFormula;
    this._tokenAuthenticationHwAssistDisable = config.tokenAuthenticationHwAssistDisable;
    this._tokenAuthenticationPublicAddress = config.tokenAuthenticationPublicAddress;
    this._tokenAuthenticationSaltPrefix = config.tokenAuthenticationSaltPrefix;
    this._tokenAuthenticationSaltPrefixCurr = config.tokenAuthenticationSaltPrefixCurr;
    this._tokenAuthenticationSaltPrefixPrev = config.tokenAuthenticationSaltPrefixPrev;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._dropKnownRespSrcPortCfg.internalValue = config.dropKnownRespSrcPortCfg;
    this._filterList.internalValue = config.filterList;
    this._spoofDetectCfg.internalValue = config.spoofDetectCfg;
    this._tunnelEncap.internalValue = config.tunnelEncap;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // drop_ntp_monlist - computed: false, optional: true, required: false
  private _dropNtpMonlist?: number; 
  public get dropNtpMonlist() {
    return this.getNumberAttribute('drop_ntp_monlist');
  }
  public set dropNtpMonlist(value: number) {
    this._dropNtpMonlist = value;
  }
  public resetDropNtpMonlist() {
    this._dropNtpMonlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropNtpMonlistInput() {
    return this._dropNtpMonlist;
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

  // max_payload_size - computed: false, optional: true, required: false
  private _maxPayloadSize?: number; 
  public get maxPayloadSize() {
    return this.getNumberAttribute('max_payload_size');
  }
  public set maxPayloadSize(value: number) {
    this._maxPayloadSize = value;
  }
  public resetMaxPayloadSize() {
    this._maxPayloadSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPayloadSizeInput() {
    return this._maxPayloadSize;
  }

  // min_payload_size - computed: false, optional: true, required: false
  private _minPayloadSize?: number; 
  public get minPayloadSize() {
    return this.getNumberAttribute('min_payload_size');
  }
  public set minPayloadSize(value: number) {
    this._minPayloadSize = value;
  }
  public resetMinPayloadSize() {
    this._minPayloadSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPayloadSizeInput() {
    return this._minPayloadSize;
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

  // previous_salt_timeout - computed: false, optional: true, required: false
  private _previousSaltTimeout?: number; 
  public get previousSaltTimeout() {
    return this.getNumberAttribute('previous_salt_timeout');
  }
  public set previousSaltTimeout(value: number) {
    this._previousSaltTimeout = value;
  }
  public resetPreviousSaltTimeout() {
    this._previousSaltTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previousSaltTimeoutInput() {
    return this._previousSaltTimeout;
  }

  // public_ipv4_addr - computed: false, optional: true, required: false
  private _publicIpv4Addr?: string; 
  public get publicIpv4Addr() {
    return this.getStringAttribute('public_ipv4_addr');
  }
  public set publicIpv4Addr(value: string) {
    this._publicIpv4Addr = value;
  }
  public resetPublicIpv4Addr() {
    this._publicIpv4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpv4AddrInput() {
    return this._publicIpv4Addr;
  }

  // public_ipv6_addr - computed: false, optional: true, required: false
  private _publicIpv6Addr?: string; 
  public get publicIpv6Addr() {
    return this.getStringAttribute('public_ipv6_addr');
  }
  public set publicIpv6Addr(value: string) {
    this._publicIpv6Addr = value;
  }
  public resetPublicIpv6Addr() {
    this._publicIpv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpv6AddrInput() {
    return this._publicIpv6Addr;
  }

  // token_authentication - computed: false, optional: true, required: false
  private _tokenAuthentication?: number; 
  public get tokenAuthentication() {
    return this.getNumberAttribute('token_authentication');
  }
  public set tokenAuthentication(value: number) {
    this._tokenAuthentication = value;
  }
  public resetTokenAuthentication() {
    this._tokenAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenAuthenticationInput() {
    return this._tokenAuthentication;
  }

  // token_authentication_formula - computed: false, optional: true, required: false
  private _tokenAuthenticationFormula?: string; 
  public get tokenAuthenticationFormula() {
    return this.getStringAttribute('token_authentication_formula');
  }
  public set tokenAuthenticationFormula(value: string) {
    this._tokenAuthenticationFormula = value;
  }
  public resetTokenAuthenticationFormula() {
    this._tokenAuthenticationFormula = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenAuthenticationFormulaInput() {
    return this._tokenAuthenticationFormula;
  }

  // token_authentication_hw_assist_disable - computed: false, optional: true, required: false
  private _tokenAuthenticationHwAssistDisable?: number; 
  public get tokenAuthenticationHwAssistDisable() {
    return this.getNumberAttribute('token_authentication_hw_assist_disable');
  }
  public set tokenAuthenticationHwAssistDisable(value: number) {
    this._tokenAuthenticationHwAssistDisable = value;
  }
  public resetTokenAuthenticationHwAssistDisable() {
    this._tokenAuthenticationHwAssistDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenAuthenticationHwAssistDisableInput() {
    return this._tokenAuthenticationHwAssistDisable;
  }

  // token_authentication_public_address - computed: false, optional: true, required: false
  private _tokenAuthenticationPublicAddress?: number; 
  public get tokenAuthenticationPublicAddress() {
    return this.getNumberAttribute('token_authentication_public_address');
  }
  public set tokenAuthenticationPublicAddress(value: number) {
    this._tokenAuthenticationPublicAddress = value;
  }
  public resetTokenAuthenticationPublicAddress() {
    this._tokenAuthenticationPublicAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenAuthenticationPublicAddressInput() {
    return this._tokenAuthenticationPublicAddress;
  }

  // token_authentication_salt_prefix - computed: false, optional: true, required: false
  private _tokenAuthenticationSaltPrefix?: number; 
  public get tokenAuthenticationSaltPrefix() {
    return this.getNumberAttribute('token_authentication_salt_prefix');
  }
  public set tokenAuthenticationSaltPrefix(value: number) {
    this._tokenAuthenticationSaltPrefix = value;
  }
  public resetTokenAuthenticationSaltPrefix() {
    this._tokenAuthenticationSaltPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenAuthenticationSaltPrefixInput() {
    return this._tokenAuthenticationSaltPrefix;
  }

  // token_authentication_salt_prefix_curr - computed: false, optional: true, required: false
  private _tokenAuthenticationSaltPrefixCurr?: number; 
  public get tokenAuthenticationSaltPrefixCurr() {
    return this.getNumberAttribute('token_authentication_salt_prefix_curr');
  }
  public set tokenAuthenticationSaltPrefixCurr(value: number) {
    this._tokenAuthenticationSaltPrefixCurr = value;
  }
  public resetTokenAuthenticationSaltPrefixCurr() {
    this._tokenAuthenticationSaltPrefixCurr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenAuthenticationSaltPrefixCurrInput() {
    return this._tokenAuthenticationSaltPrefixCurr;
  }

  // token_authentication_salt_prefix_prev - computed: false, optional: true, required: false
  private _tokenAuthenticationSaltPrefixPrev?: number; 
  public get tokenAuthenticationSaltPrefixPrev() {
    return this.getNumberAttribute('token_authentication_salt_prefix_prev');
  }
  public set tokenAuthenticationSaltPrefixPrev(value: number) {
    this._tokenAuthenticationSaltPrefixPrev = value;
  }
  public resetTokenAuthenticationSaltPrefixPrev() {
    this._tokenAuthenticationSaltPrefixPrev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenAuthenticationSaltPrefixPrevInput() {
    return this._tokenAuthenticationSaltPrefixPrev;
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

  // drop_known_resp_src_port_cfg - computed: false, optional: true, required: false
  private _dropKnownRespSrcPortCfg = new DdosTemplateUdpDropKnownRespSrcPortCfgOutputReference(this, "drop_known_resp_src_port_cfg");
  public get dropKnownRespSrcPortCfg() {
    return this._dropKnownRespSrcPortCfg;
  }
  public putDropKnownRespSrcPortCfg(value: DdosTemplateUdpDropKnownRespSrcPortCfg) {
    this._dropKnownRespSrcPortCfg.internalValue = value;
  }
  public resetDropKnownRespSrcPortCfg() {
    this._dropKnownRespSrcPortCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropKnownRespSrcPortCfgInput() {
    return this._dropKnownRespSrcPortCfg.internalValue;
  }

  // filter_list - computed: false, optional: true, required: false
  private _filterList = new DdosTemplateUdpFilterListStructList(this, "filter_list", false);
  public get filterList() {
    return this._filterList;
  }
  public putFilterList(value: DdosTemplateUdpFilterListStruct[] | cdktf.IResolvable) {
    this._filterList.internalValue = value;
  }
  public resetFilterList() {
    this._filterList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListInput() {
    return this._filterList.internalValue;
  }

  // spoof_detect_cfg - computed: false, optional: true, required: false
  private _spoofDetectCfg = new DdosTemplateUdpSpoofDetectCfgOutputReference(this, "spoof_detect_cfg");
  public get spoofDetectCfg() {
    return this._spoofDetectCfg;
  }
  public putSpoofDetectCfg(value: DdosTemplateUdpSpoofDetectCfg) {
    this._spoofDetectCfg.internalValue = value;
  }
  public resetSpoofDetectCfg() {
    this._spoofDetectCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spoofDetectCfgInput() {
    return this._spoofDetectCfg.internalValue;
  }

  // tunnel_encap - computed: false, optional: true, required: false
  private _tunnelEncap = new DdosTemplateUdpTunnelEncapOutputReference(this, "tunnel_encap");
  public get tunnelEncap() {
    return this._tunnelEncap;
  }
  public putTunnelEncap(value: DdosTemplateUdpTunnelEncap) {
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
      age: cdktf.numberToTerraform(this._age),
      drop_ntp_monlist: cdktf.numberToTerraform(this._dropNtpMonlist),
      id: cdktf.stringToTerraform(this._id),
      max_payload_size: cdktf.numberToTerraform(this._maxPayloadSize),
      min_payload_size: cdktf.numberToTerraform(this._minPayloadSize),
      name: cdktf.stringToTerraform(this._name),
      per_conn_pkt_rate_limit: cdktf.numberToTerraform(this._perConnPktRateLimit),
      per_conn_rate_interval: cdktf.stringToTerraform(this._perConnRateInterval),
      previous_salt_timeout: cdktf.numberToTerraform(this._previousSaltTimeout),
      public_ipv4_addr: cdktf.stringToTerraform(this._publicIpv4Addr),
      public_ipv6_addr: cdktf.stringToTerraform(this._publicIpv6Addr),
      token_authentication: cdktf.numberToTerraform(this._tokenAuthentication),
      token_authentication_formula: cdktf.stringToTerraform(this._tokenAuthenticationFormula),
      token_authentication_hw_assist_disable: cdktf.numberToTerraform(this._tokenAuthenticationHwAssistDisable),
      token_authentication_public_address: cdktf.numberToTerraform(this._tokenAuthenticationPublicAddress),
      token_authentication_salt_prefix: cdktf.numberToTerraform(this._tokenAuthenticationSaltPrefix),
      token_authentication_salt_prefix_curr: cdktf.numberToTerraform(this._tokenAuthenticationSaltPrefixCurr),
      token_authentication_salt_prefix_prev: cdktf.numberToTerraform(this._tokenAuthenticationSaltPrefixPrev),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      drop_known_resp_src_port_cfg: ddosTemplateUdpDropKnownRespSrcPortCfgToTerraform(this._dropKnownRespSrcPortCfg.internalValue),
      filter_list: cdktf.listMapper(ddosTemplateUdpFilterListStructToTerraform, true)(this._filterList.internalValue),
      spoof_detect_cfg: ddosTemplateUdpSpoofDetectCfgToTerraform(this._spoofDetectCfg.internalValue),
      tunnel_encap: ddosTemplateUdpTunnelEncapToTerraform(this._tunnelEncap.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      age: {
        value: cdktf.numberToHclTerraform(this._age),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_ntp_monlist: {
        value: cdktf.numberToHclTerraform(this._dropNtpMonlist),
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
      max_payload_size: {
        value: cdktf.numberToHclTerraform(this._maxPayloadSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_payload_size: {
        value: cdktf.numberToHclTerraform(this._minPayloadSize),
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
      previous_salt_timeout: {
        value: cdktf.numberToHclTerraform(this._previousSaltTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      public_ipv4_addr: {
        value: cdktf.stringToHclTerraform(this._publicIpv4Addr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_ipv6_addr: {
        value: cdktf.stringToHclTerraform(this._publicIpv6Addr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_authentication: {
        value: cdktf.numberToHclTerraform(this._tokenAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_authentication_formula: {
        value: cdktf.stringToHclTerraform(this._tokenAuthenticationFormula),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_authentication_hw_assist_disable: {
        value: cdktf.numberToHclTerraform(this._tokenAuthenticationHwAssistDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_authentication_public_address: {
        value: cdktf.numberToHclTerraform(this._tokenAuthenticationPublicAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_authentication_salt_prefix: {
        value: cdktf.numberToHclTerraform(this._tokenAuthenticationSaltPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_authentication_salt_prefix_curr: {
        value: cdktf.numberToHclTerraform(this._tokenAuthenticationSaltPrefixCurr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_authentication_salt_prefix_prev: {
        value: cdktf.numberToHclTerraform(this._tokenAuthenticationSaltPrefixPrev),
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
      drop_known_resp_src_port_cfg: {
        value: ddosTemplateUdpDropKnownRespSrcPortCfgToHclTerraform(this._dropKnownRespSrcPortCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateUdpDropKnownRespSrcPortCfgList",
      },
      filter_list: {
        value: cdktf.listMapperHcl(ddosTemplateUdpFilterListStructToHclTerraform, true)(this._filterList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateUdpFilterListStructList",
      },
      spoof_detect_cfg: {
        value: ddosTemplateUdpSpoofDetectCfgToHclTerraform(this._spoofDetectCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateUdpSpoofDetectCfgList",
      },
      tunnel_encap: {
        value: ddosTemplateUdpTunnelEncapToHclTerraform(this._tunnelEncap.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateUdpTunnelEncapList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
