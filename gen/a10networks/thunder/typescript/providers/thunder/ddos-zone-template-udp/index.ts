// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosZoneTemplateUdpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure session age(in minutes) for UDP sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#age DdosZoneTemplateUdp#age}
  */
  readonly age?: number;
  /**
  * 'default': Stop matching on drop/blacklist action; 'stop-on-first-match': Stop matching on first match;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#filter_match_type DdosZoneTemplateUdp#filter_match_type}
  */
  readonly filterMatchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#id DdosZoneTemplateUdp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * DDOS UDP Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#name DdosZoneTemplateUdp#name}
  */
  readonly name: string;
  /**
  * '100ms': 100ms; '1sec': 1sec;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#per_conn_rate_interval DdosZoneTemplateUdp#per_conn_rate_interval}
  */
  readonly perConnRateInterval?: string;
  /**
  * Token-Authentication previous salt-prefix timeout in minutes, default is 1 min
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#previous_salt_timeout DdosZoneTemplateUdp#previous_salt_timeout}
  */
  readonly previousSaltTimeout?: number;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#public_ipv4_addr DdosZoneTemplateUdp#public_ipv4_addr}
  */
  readonly publicIpv4Addr?: string;
  /**
  * IPV6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#public_ipv6_addr DdosZoneTemplateUdp#public_ipv6_addr}
  */
  readonly publicIpv6Addr?: string;
  /**
  * 'drop': Drop packets (Default); 'blacklist-src': Blacklist-src for spoof-detect fail;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#spoof_detect_fail_action DdosZoneTemplateUdp#spoof_detect_fail_action}
  */
  readonly spoofDetectFailAction?: string;
  /**
  * Configure action-list to take for failing the authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#spoof_detect_fail_action_list_name DdosZoneTemplateUdp#spoof_detect_fail_action_list_name}
  */
  readonly spoofDetectFailActionListName?: string;
  /**
  * Optional minimum delay between UDP retransmits for authentication to pass, unit is specified by min-delay-interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#spoof_detect_min_delay DdosZoneTemplateUdp#spoof_detect_min_delay}
  */
  readonly spoofDetectMinDelay?: number;
  /**
  * '100ms': 100ms; '1sec': 1sec;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#spoof_detect_min_delay_interval DdosZoneTemplateUdp#spoof_detect_min_delay_interval}
  */
  readonly spoofDetectMinDelayInterval?: string;
  /**
  * 'authenticate-src': authenticate-src (Default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#spoof_detect_pass_action DdosZoneTemplateUdp#spoof_detect_pass_action}
  */
  readonly spoofDetectPassAction?: string;
  /**
  * Configure action-list to take for passing the authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#spoof_detect_pass_action_list_name DdosZoneTemplateUdp#spoof_detect_pass_action_list_name}
  */
  readonly spoofDetectPassActionListName?: string;
  /**
  * Timeout in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#spoof_detect_retry_timeout DdosZoneTemplateUdp#spoof_detect_retry_timeout}
  */
  readonly spoofDetectRetryTimeout?: number;
  /**
  * Enable Token Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#token_authentication DdosZoneTemplateUdp#token_authentication}
  */
  readonly tokenAuthentication?: number;
  /**
  * 'md5_Salt-SrcIp-SrcPort-DstIp-DstPort': md5 of Salt-SrcIp-SrcPort-DstIp-DstPort; 'md5_Salt-DstIp-DstPort': md5 of Salt-DstIp-DstPort; 'md5_Salt-SrcIp-DstIp': md5 of Salt-SrcIp-DstIp; 'md5_Salt-SrcPort-DstPort': md5 of Salt-SrcPort-DstPort; 'md5_Salt-UintDstIp-DstPort': Using the uint value of IP for md5 of Salt-DstIp-DstPort; 'sha1_Salt-SrcIp-SrcPort-DstIp-DstPort': sha1 of Salt-SrcIp-SrcPort-DstIp-DstPort; 'sha1_Salt-DstIp-DstPort': sha1 of Salt-DstIp-DstPort; 'sha1_Salt-SrcIp-DstIp': sha1 of Salt-SrcIp-DstIp; 'sha1_Salt-SrcPort-DstPort': sha1 of Salt-SrcPort-DstPort; 'sha1_Salt-UintDstIp-DstPort': Using the uint value of IP for sha1 of Salt-DstIp-DstPort;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#token_authentication_formula DdosZoneTemplateUdp#token_authentication_formula}
  */
  readonly tokenAuthenticationFormula?: string;
  /**
  * token-authentication disable hardware assistance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#token_authentication_hw_assist_disable DdosZoneTemplateUdp#token_authentication_hw_assist_disable}
  */
  readonly tokenAuthenticationHwAssistDisable?: number;
  /**
  * The server public IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#token_authentication_public_address DdosZoneTemplateUdp#token_authentication_public_address}
  */
  readonly tokenAuthenticationPublicAddress?: number;
  /**
  * token-authentication salt-prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#token_authentication_salt_prefix DdosZoneTemplateUdp#token_authentication_salt_prefix}
  */
  readonly tokenAuthenticationSaltPrefix?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#token_authentication_salt_prefix_curr DdosZoneTemplateUdp#token_authentication_salt_prefix_curr}
  */
  readonly tokenAuthenticationSaltPrefixCurr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#token_authentication_salt_prefix_prev DdosZoneTemplateUdp#token_authentication_salt_prefix_prev}
  */
  readonly tokenAuthenticationSaltPrefixPrev?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#user_tag DdosZoneTemplateUdp#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#uuid DdosZoneTemplateUdp#uuid}
  */
  readonly uuid?: string;
  /**
  * filter_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#filter_list DdosZoneTemplateUdp#filter_list}
  */
  readonly filterList?: DdosZoneTemplateUdpFilterListStruct[] | cdktf.IResolvable;
  /**
  * known_resp_src_port_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#known_resp_src_port_cfg DdosZoneTemplateUdp#known_resp_src_port_cfg}
  */
  readonly knownRespSrcPortCfg?: DdosZoneTemplateUdpKnownRespSrcPortCfg;
  /**
  * max_payload_size_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#max_payload_size_cfg DdosZoneTemplateUdp#max_payload_size_cfg}
  */
  readonly maxPayloadSizeCfg?: DdosZoneTemplateUdpMaxPayloadSizeCfg;
  /**
  * min_payload_size_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#min_payload_size_cfg DdosZoneTemplateUdp#min_payload_size_cfg}
  */
  readonly minPayloadSizeCfg?: DdosZoneTemplateUdpMinPayloadSizeCfg;
  /**
  * ntp_monlist_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#ntp_monlist_cfg DdosZoneTemplateUdp#ntp_monlist_cfg}
  */
  readonly ntpMonlistCfg?: DdosZoneTemplateUdpNtpMonlistCfg;
  /**
  * per_conn_pkt_rate_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#per_conn_pkt_rate_cfg DdosZoneTemplateUdp#per_conn_pkt_rate_cfg}
  */
  readonly perConnPktRateCfg?: DdosZoneTemplateUdpPerConnPktRateCfg;
}
export interface DdosZoneTemplateUdpFilterListStruct {
  /**
  * Filter using Berkeley Packet Filter syntax
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#byte_offset_filter DdosZoneTemplateUdp#byte_offset_filter}
  */
  readonly byteOffsetFilter?: string;
  /**
  * 'drop': Drop packets (Default); 'ignore': Take no action; 'blacklist-src': Blacklist-src; 'authenticate-src': Authenticate-src;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#udp_filter_action DdosZoneTemplateUdp#udp_filter_action}
  */
  readonly udpFilterAction?: string;
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#udp_filter_action_list_name DdosZoneTemplateUdp#udp_filter_action_list_name}
  */
  readonly udpFilterActionListName?: string;
  /**
  * Inverse the result of the matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#udp_filter_inverse_match DdosZoneTemplateUdp#udp_filter_inverse_match}
  */
  readonly udpFilterInverseMatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#udp_filter_name DdosZoneTemplateUdp#udp_filter_name}
  */
  readonly udpFilterName: string;
  /**
  * Regex Expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#udp_filter_regex DdosZoneTemplateUdp#udp_filter_regex}
  */
  readonly udpFilterRegex?: string;
  /**
  * Sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#udp_filter_seq DdosZoneTemplateUdp#udp_filter_seq}
  */
  readonly udpFilterSeq?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#user_tag DdosZoneTemplateUdp#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#uuid DdosZoneTemplateUdp#uuid}
  */
  readonly uuid?: string;
}

export function ddosZoneTemplateUdpFilterListStructToTerraform(struct?: DdosZoneTemplateUdpFilterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    byte_offset_filter: cdktf.stringToTerraform(struct!.byteOffsetFilter),
    udp_filter_action: cdktf.stringToTerraform(struct!.udpFilterAction),
    udp_filter_action_list_name: cdktf.stringToTerraform(struct!.udpFilterActionListName),
    udp_filter_inverse_match: cdktf.numberToTerraform(struct!.udpFilterInverseMatch),
    udp_filter_name: cdktf.stringToTerraform(struct!.udpFilterName),
    udp_filter_regex: cdktf.stringToTerraform(struct!.udpFilterRegex),
    udp_filter_seq: cdktf.numberToTerraform(struct!.udpFilterSeq),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosZoneTemplateUdpFilterListStructToHclTerraform(struct?: DdosZoneTemplateUdpFilterListStruct | cdktf.IResolvable): any {
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
    udp_filter_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.udpFilterActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    udp_filter_inverse_match: {
      value: cdktf.numberToHclTerraform(struct!.udpFilterInverseMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_filter_name: {
      value: cdktf.stringToHclTerraform(struct!.udpFilterName),
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

export class DdosZoneTemplateUdpFilterListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneTemplateUdpFilterListStruct | cdktf.IResolvable | undefined {
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
    if (this._udpFilterActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpFilterActionListName = this._udpFilterActionListName;
    }
    if (this._udpFilterInverseMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpFilterInverseMatch = this._udpFilterInverseMatch;
    }
    if (this._udpFilterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpFilterName = this._udpFilterName;
    }
    if (this._udpFilterRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpFilterRegex = this._udpFilterRegex;
    }
    if (this._udpFilterSeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpFilterSeq = this._udpFilterSeq;
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

  public set internalValue(value: DdosZoneTemplateUdpFilterListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._byteOffsetFilter = undefined;
      this._udpFilterAction = undefined;
      this._udpFilterActionListName = undefined;
      this._udpFilterInverseMatch = undefined;
      this._udpFilterName = undefined;
      this._udpFilterRegex = undefined;
      this._udpFilterSeq = undefined;
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
      this._udpFilterActionListName = value.udpFilterActionListName;
      this._udpFilterInverseMatch = value.udpFilterInverseMatch;
      this._udpFilterName = value.udpFilterName;
      this._udpFilterRegex = value.udpFilterRegex;
      this._udpFilterSeq = value.udpFilterSeq;
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

  // udp_filter_action_list_name - computed: false, optional: true, required: false
  private _udpFilterActionListName?: string; 
  public get udpFilterActionListName() {
    return this.getStringAttribute('udp_filter_action_list_name');
  }
  public set udpFilterActionListName(value: string) {
    this._udpFilterActionListName = value;
  }
  public resetUdpFilterActionListName() {
    this._udpFilterActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpFilterActionListNameInput() {
    return this._udpFilterActionListName;
  }

  // udp_filter_inverse_match - computed: false, optional: true, required: false
  private _udpFilterInverseMatch?: number; 
  public get udpFilterInverseMatch() {
    return this.getNumberAttribute('udp_filter_inverse_match');
  }
  public set udpFilterInverseMatch(value: number) {
    this._udpFilterInverseMatch = value;
  }
  public resetUdpFilterInverseMatch() {
    this._udpFilterInverseMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpFilterInverseMatchInput() {
    return this._udpFilterInverseMatch;
  }

  // udp_filter_name - computed: false, optional: false, required: true
  private _udpFilterName?: string; 
  public get udpFilterName() {
    return this.getStringAttribute('udp_filter_name');
  }
  public set udpFilterName(value: string) {
    this._udpFilterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get udpFilterNameInput() {
    return this._udpFilterName;
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

  // udp_filter_seq - computed: false, optional: true, required: false
  private _udpFilterSeq?: number; 
  public get udpFilterSeq() {
    return this.getNumberAttribute('udp_filter_seq');
  }
  public set udpFilterSeq(value: number) {
    this._udpFilterSeq = value;
  }
  public resetUdpFilterSeq() {
    this._udpFilterSeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpFilterSeqInput() {
    return this._udpFilterSeq;
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

export class DdosZoneTemplateUdpFilterListStructList extends cdktf.ComplexList {
  public internalValue? : DdosZoneTemplateUdpFilterListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneTemplateUdpFilterListStructOutputReference {
    return new DdosZoneTemplateUdpFilterListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosZoneTemplateUdpKnownRespSrcPortCfg {
  /**
  * Exclude src port equal to dst port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#exclude_src_resp_port DdosZoneTemplateUdp#exclude_src_resp_port}
  */
  readonly excludeSrcRespPort?: number;
  /**
  * Take action if src-port is less than 1024
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#known_resp_src_port DdosZoneTemplateUdp#known_resp_src_port}
  */
  readonly knownRespSrcPort?: number;
  /**
  * 'drop': Drop packets from well-known src-port(Default); 'blacklist-src': Blacklist-src from well-known src-port; 'ignore': Ignore well-known src-port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#known_resp_src_port_action DdosZoneTemplateUdp#known_resp_src_port_action}
  */
  readonly knownRespSrcPortAction?: string;
  /**
  * Configure action-list to take for well-known src-port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#known_resp_src_port_action_list_name DdosZoneTemplateUdp#known_resp_src_port_action_list_name}
  */
  readonly knownRespSrcPortActionListName?: string;
}

export function ddosZoneTemplateUdpKnownRespSrcPortCfgToTerraform(struct?: DdosZoneTemplateUdpKnownRespSrcPortCfgOutputReference | DdosZoneTemplateUdpKnownRespSrcPortCfg): any {
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


export function ddosZoneTemplateUdpKnownRespSrcPortCfgToHclTerraform(struct?: DdosZoneTemplateUdpKnownRespSrcPortCfgOutputReference | DdosZoneTemplateUdpKnownRespSrcPortCfg): any {
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

export class DdosZoneTemplateUdpKnownRespSrcPortCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateUdpKnownRespSrcPortCfg | undefined {
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

  public set internalValue(value: DdosZoneTemplateUdpKnownRespSrcPortCfg | undefined) {
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
export interface DdosZoneTemplateUdpMaxPayloadSizeCfg {
  /**
  * Maximum UDP payload size for each single packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#max_payload_size DdosZoneTemplateUdp#max_payload_size}
  */
  readonly maxPayloadSize?: number;
  /**
  * 'drop': Drop packets for max-payload-size exceed (Default); 'blacklist-src': Blacklist-src for max-payload-size exceed; 'ignore': Do nothing for max-payload-size exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#max_payload_size_action DdosZoneTemplateUdp#max_payload_size_action}
  */
  readonly maxPayloadSizeAction?: string;
  /**
  * Configure action-list to take for max-payload-size exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#max_payload_size_action_list_name DdosZoneTemplateUdp#max_payload_size_action_list_name}
  */
  readonly maxPayloadSizeActionListName?: string;
}

export function ddosZoneTemplateUdpMaxPayloadSizeCfgToTerraform(struct?: DdosZoneTemplateUdpMaxPayloadSizeCfgOutputReference | DdosZoneTemplateUdpMaxPayloadSizeCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_payload_size: cdktf.numberToTerraform(struct!.maxPayloadSize),
    max_payload_size_action: cdktf.stringToTerraform(struct!.maxPayloadSizeAction),
    max_payload_size_action_list_name: cdktf.stringToTerraform(struct!.maxPayloadSizeActionListName),
  }
}


export function ddosZoneTemplateUdpMaxPayloadSizeCfgToHclTerraform(struct?: DdosZoneTemplateUdpMaxPayloadSizeCfgOutputReference | DdosZoneTemplateUdpMaxPayloadSizeCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_payload_size: {
      value: cdktf.numberToHclTerraform(struct!.maxPayloadSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_payload_size_action: {
      value: cdktf.stringToHclTerraform(struct!.maxPayloadSizeAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_payload_size_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.maxPayloadSizeActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateUdpMaxPayloadSizeCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateUdpMaxPayloadSizeCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxPayloadSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPayloadSize = this._maxPayloadSize;
    }
    if (this._maxPayloadSizeAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPayloadSizeAction = this._maxPayloadSizeAction;
    }
    if (this._maxPayloadSizeActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPayloadSizeActionListName = this._maxPayloadSizeActionListName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateUdpMaxPayloadSizeCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxPayloadSize = undefined;
      this._maxPayloadSizeAction = undefined;
      this._maxPayloadSizeActionListName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxPayloadSize = value.maxPayloadSize;
      this._maxPayloadSizeAction = value.maxPayloadSizeAction;
      this._maxPayloadSizeActionListName = value.maxPayloadSizeActionListName;
    }
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

  // max_payload_size_action - computed: false, optional: true, required: false
  private _maxPayloadSizeAction?: string; 
  public get maxPayloadSizeAction() {
    return this.getStringAttribute('max_payload_size_action');
  }
  public set maxPayloadSizeAction(value: string) {
    this._maxPayloadSizeAction = value;
  }
  public resetMaxPayloadSizeAction() {
    this._maxPayloadSizeAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPayloadSizeActionInput() {
    return this._maxPayloadSizeAction;
  }

  // max_payload_size_action_list_name - computed: false, optional: true, required: false
  private _maxPayloadSizeActionListName?: string; 
  public get maxPayloadSizeActionListName() {
    return this.getStringAttribute('max_payload_size_action_list_name');
  }
  public set maxPayloadSizeActionListName(value: string) {
    this._maxPayloadSizeActionListName = value;
  }
  public resetMaxPayloadSizeActionListName() {
    this._maxPayloadSizeActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPayloadSizeActionListNameInput() {
    return this._maxPayloadSizeActionListName;
  }
}
export interface DdosZoneTemplateUdpMinPayloadSizeCfg {
  /**
  * Minimum UDP payload size for each single packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#min_payload_size DdosZoneTemplateUdp#min_payload_size}
  */
  readonly minPayloadSize?: number;
  /**
  * 'drop': Drop packets for min-payload-size (Default); 'blacklist-src': Blacklist-src for min-payload-size; 'ignore': Do nothing for min-payload-size exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#min_payload_size_action DdosZoneTemplateUdp#min_payload_size_action}
  */
  readonly minPayloadSizeAction?: string;
  /**
  * Configure action-list to take for min-payload-size exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#min_payload_size_action_list_name DdosZoneTemplateUdp#min_payload_size_action_list_name}
  */
  readonly minPayloadSizeActionListName?: string;
}

export function ddosZoneTemplateUdpMinPayloadSizeCfgToTerraform(struct?: DdosZoneTemplateUdpMinPayloadSizeCfgOutputReference | DdosZoneTemplateUdpMinPayloadSizeCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_payload_size: cdktf.numberToTerraform(struct!.minPayloadSize),
    min_payload_size_action: cdktf.stringToTerraform(struct!.minPayloadSizeAction),
    min_payload_size_action_list_name: cdktf.stringToTerraform(struct!.minPayloadSizeActionListName),
  }
}


export function ddosZoneTemplateUdpMinPayloadSizeCfgToHclTerraform(struct?: DdosZoneTemplateUdpMinPayloadSizeCfgOutputReference | DdosZoneTemplateUdpMinPayloadSizeCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_payload_size: {
      value: cdktf.numberToHclTerraform(struct!.minPayloadSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_payload_size_action: {
      value: cdktf.stringToHclTerraform(struct!.minPayloadSizeAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_payload_size_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.minPayloadSizeActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateUdpMinPayloadSizeCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateUdpMinPayloadSizeCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minPayloadSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minPayloadSize = this._minPayloadSize;
    }
    if (this._minPayloadSizeAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.minPayloadSizeAction = this._minPayloadSizeAction;
    }
    if (this._minPayloadSizeActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.minPayloadSizeActionListName = this._minPayloadSizeActionListName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateUdpMinPayloadSizeCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minPayloadSize = undefined;
      this._minPayloadSizeAction = undefined;
      this._minPayloadSizeActionListName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minPayloadSize = value.minPayloadSize;
      this._minPayloadSizeAction = value.minPayloadSizeAction;
      this._minPayloadSizeActionListName = value.minPayloadSizeActionListName;
    }
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

  // min_payload_size_action - computed: false, optional: true, required: false
  private _minPayloadSizeAction?: string; 
  public get minPayloadSizeAction() {
    return this.getStringAttribute('min_payload_size_action');
  }
  public set minPayloadSizeAction(value: string) {
    this._minPayloadSizeAction = value;
  }
  public resetMinPayloadSizeAction() {
    this._minPayloadSizeAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPayloadSizeActionInput() {
    return this._minPayloadSizeAction;
  }

  // min_payload_size_action_list_name - computed: false, optional: true, required: false
  private _minPayloadSizeActionListName?: string; 
  public get minPayloadSizeActionListName() {
    return this.getStringAttribute('min_payload_size_action_list_name');
  }
  public set minPayloadSizeActionListName(value: string) {
    this._minPayloadSizeActionListName = value;
  }
  public resetMinPayloadSizeActionListName() {
    this._minPayloadSizeActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPayloadSizeActionListNameInput() {
    return this._minPayloadSizeActionListName;
  }
}
export interface DdosZoneTemplateUdpNtpMonlistCfg {
  /**
  * Take action for ntp monlist request/response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#ntp_monlist DdosZoneTemplateUdp#ntp_monlist}
  */
  readonly ntpMonlist?: number;
  /**
  * 'drop': Drop packets for ntp-monlist (Default); 'blacklist-src': Blacklist-src for ntp-monlist; 'ignore': Ignore ntp-monlist;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#ntp_monlist_action DdosZoneTemplateUdp#ntp_monlist_action}
  */
  readonly ntpMonlistAction?: string;
  /**
  * Configure action-list to take for ntp-monlist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#ntp_monlist_action_list_name DdosZoneTemplateUdp#ntp_monlist_action_list_name}
  */
  readonly ntpMonlistActionListName?: string;
}

export function ddosZoneTemplateUdpNtpMonlistCfgToTerraform(struct?: DdosZoneTemplateUdpNtpMonlistCfgOutputReference | DdosZoneTemplateUdpNtpMonlistCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ntp_monlist: cdktf.numberToTerraform(struct!.ntpMonlist),
    ntp_monlist_action: cdktf.stringToTerraform(struct!.ntpMonlistAction),
    ntp_monlist_action_list_name: cdktf.stringToTerraform(struct!.ntpMonlistActionListName),
  }
}


export function ddosZoneTemplateUdpNtpMonlistCfgToHclTerraform(struct?: DdosZoneTemplateUdpNtpMonlistCfgOutputReference | DdosZoneTemplateUdpNtpMonlistCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ntp_monlist: {
      value: cdktf.numberToHclTerraform(struct!.ntpMonlist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntp_monlist_action: {
      value: cdktf.stringToHclTerraform(struct!.ntpMonlistAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ntp_monlist_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.ntpMonlistActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateUdpNtpMonlistCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateUdpNtpMonlistCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ntpMonlist !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpMonlist = this._ntpMonlist;
    }
    if (this._ntpMonlistAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpMonlistAction = this._ntpMonlistAction;
    }
    if (this._ntpMonlistActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpMonlistActionListName = this._ntpMonlistActionListName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateUdpNtpMonlistCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ntpMonlist = undefined;
      this._ntpMonlistAction = undefined;
      this._ntpMonlistActionListName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ntpMonlist = value.ntpMonlist;
      this._ntpMonlistAction = value.ntpMonlistAction;
      this._ntpMonlistActionListName = value.ntpMonlistActionListName;
    }
  }

  // ntp_monlist - computed: false, optional: true, required: false
  private _ntpMonlist?: number; 
  public get ntpMonlist() {
    return this.getNumberAttribute('ntp_monlist');
  }
  public set ntpMonlist(value: number) {
    this._ntpMonlist = value;
  }
  public resetNtpMonlist() {
    this._ntpMonlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpMonlistInput() {
    return this._ntpMonlist;
  }

  // ntp_monlist_action - computed: false, optional: true, required: false
  private _ntpMonlistAction?: string; 
  public get ntpMonlistAction() {
    return this.getStringAttribute('ntp_monlist_action');
  }
  public set ntpMonlistAction(value: string) {
    this._ntpMonlistAction = value;
  }
  public resetNtpMonlistAction() {
    this._ntpMonlistAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpMonlistActionInput() {
    return this._ntpMonlistAction;
  }

  // ntp_monlist_action_list_name - computed: false, optional: true, required: false
  private _ntpMonlistActionListName?: string; 
  public get ntpMonlistActionListName() {
    return this.getStringAttribute('ntp_monlist_action_list_name');
  }
  public set ntpMonlistActionListName(value: string) {
    this._ntpMonlistActionListName = value;
  }
  public resetNtpMonlistActionListName() {
    this._ntpMonlistActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpMonlistActionListNameInput() {
    return this._ntpMonlistActionListName;
  }
}
export interface DdosZoneTemplateUdpPerConnPktRateCfg {
  /**
  * 'drop': Drop packets for per-conn-pkt-rate exceed (Default); 'blacklist-src': help Blacklist-src for per-conn-pkt-rate exceed; 'ignore': Ignore per-conn-pkt-rate-exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#per_conn_pkt_rate_action DdosZoneTemplateUdp#per_conn_pkt_rate_action}
  */
  readonly perConnPktRateAction?: string;
  /**
  * Configure action-list to take for per-conn-pkt-rate exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#per_conn_pkt_rate_action_list_name DdosZoneTemplateUdp#per_conn_pkt_rate_action_list_name}
  */
  readonly perConnPktRateActionListName?: string;
  /**
  * Packet rate limit per connection per rate-interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#per_conn_pkt_rate_limit DdosZoneTemplateUdp#per_conn_pkt_rate_limit}
  */
  readonly perConnPktRateLimit?: number;
}

export function ddosZoneTemplateUdpPerConnPktRateCfgToTerraform(struct?: DdosZoneTemplateUdpPerConnPktRateCfgOutputReference | DdosZoneTemplateUdpPerConnPktRateCfg): any {
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


export function ddosZoneTemplateUdpPerConnPktRateCfgToHclTerraform(struct?: DdosZoneTemplateUdpPerConnPktRateCfgOutputReference | DdosZoneTemplateUdpPerConnPktRateCfg): any {
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

export class DdosZoneTemplateUdpPerConnPktRateCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateUdpPerConnPktRateCfg | undefined {
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

  public set internalValue(value: DdosZoneTemplateUdpPerConnPktRateCfg | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp thunder_ddos_zone_template_udp}
*/
export class DdosZoneTemplateUdp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_zone_template_udp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosZoneTemplateUdp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosZoneTemplateUdp to import
  * @param importFromId The id of the existing DdosZoneTemplateUdp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosZoneTemplateUdp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_zone_template_udp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_udp thunder_ddos_zone_template_udp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosZoneTemplateUdpConfig
  */
  public constructor(scope: Construct, id: string, config: DdosZoneTemplateUdpConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_zone_template_udp',
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
    this._age = config.age;
    this._filterMatchType = config.filterMatchType;
    this._id = config.id;
    this._name = config.name;
    this._perConnRateInterval = config.perConnRateInterval;
    this._previousSaltTimeout = config.previousSaltTimeout;
    this._publicIpv4Addr = config.publicIpv4Addr;
    this._publicIpv6Addr = config.publicIpv6Addr;
    this._spoofDetectFailAction = config.spoofDetectFailAction;
    this._spoofDetectFailActionListName = config.spoofDetectFailActionListName;
    this._spoofDetectMinDelay = config.spoofDetectMinDelay;
    this._spoofDetectMinDelayInterval = config.spoofDetectMinDelayInterval;
    this._spoofDetectPassAction = config.spoofDetectPassAction;
    this._spoofDetectPassActionListName = config.spoofDetectPassActionListName;
    this._spoofDetectRetryTimeout = config.spoofDetectRetryTimeout;
    this._tokenAuthentication = config.tokenAuthentication;
    this._tokenAuthenticationFormula = config.tokenAuthenticationFormula;
    this._tokenAuthenticationHwAssistDisable = config.tokenAuthenticationHwAssistDisable;
    this._tokenAuthenticationPublicAddress = config.tokenAuthenticationPublicAddress;
    this._tokenAuthenticationSaltPrefix = config.tokenAuthenticationSaltPrefix;
    this._tokenAuthenticationSaltPrefixCurr = config.tokenAuthenticationSaltPrefixCurr;
    this._tokenAuthenticationSaltPrefixPrev = config.tokenAuthenticationSaltPrefixPrev;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._filterList.internalValue = config.filterList;
    this._knownRespSrcPortCfg.internalValue = config.knownRespSrcPortCfg;
    this._maxPayloadSizeCfg.internalValue = config.maxPayloadSizeCfg;
    this._minPayloadSizeCfg.internalValue = config.minPayloadSizeCfg;
    this._ntpMonlistCfg.internalValue = config.ntpMonlistCfg;
    this._perConnPktRateCfg.internalValue = config.perConnPktRateCfg;
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

  // spoof_detect_fail_action - computed: false, optional: true, required: false
  private _spoofDetectFailAction?: string; 
  public get spoofDetectFailAction() {
    return this.getStringAttribute('spoof_detect_fail_action');
  }
  public set spoofDetectFailAction(value: string) {
    this._spoofDetectFailAction = value;
  }
  public resetSpoofDetectFailAction() {
    this._spoofDetectFailAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spoofDetectFailActionInput() {
    return this._spoofDetectFailAction;
  }

  // spoof_detect_fail_action_list_name - computed: false, optional: true, required: false
  private _spoofDetectFailActionListName?: string; 
  public get spoofDetectFailActionListName() {
    return this.getStringAttribute('spoof_detect_fail_action_list_name');
  }
  public set spoofDetectFailActionListName(value: string) {
    this._spoofDetectFailActionListName = value;
  }
  public resetSpoofDetectFailActionListName() {
    this._spoofDetectFailActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spoofDetectFailActionListNameInput() {
    return this._spoofDetectFailActionListName;
  }

  // spoof_detect_min_delay - computed: false, optional: true, required: false
  private _spoofDetectMinDelay?: number; 
  public get spoofDetectMinDelay() {
    return this.getNumberAttribute('spoof_detect_min_delay');
  }
  public set spoofDetectMinDelay(value: number) {
    this._spoofDetectMinDelay = value;
  }
  public resetSpoofDetectMinDelay() {
    this._spoofDetectMinDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spoofDetectMinDelayInput() {
    return this._spoofDetectMinDelay;
  }

  // spoof_detect_min_delay_interval - computed: false, optional: true, required: false
  private _spoofDetectMinDelayInterval?: string; 
  public get spoofDetectMinDelayInterval() {
    return this.getStringAttribute('spoof_detect_min_delay_interval');
  }
  public set spoofDetectMinDelayInterval(value: string) {
    this._spoofDetectMinDelayInterval = value;
  }
  public resetSpoofDetectMinDelayInterval() {
    this._spoofDetectMinDelayInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spoofDetectMinDelayIntervalInput() {
    return this._spoofDetectMinDelayInterval;
  }

  // spoof_detect_pass_action - computed: false, optional: true, required: false
  private _spoofDetectPassAction?: string; 
  public get spoofDetectPassAction() {
    return this.getStringAttribute('spoof_detect_pass_action');
  }
  public set spoofDetectPassAction(value: string) {
    this._spoofDetectPassAction = value;
  }
  public resetSpoofDetectPassAction() {
    this._spoofDetectPassAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spoofDetectPassActionInput() {
    return this._spoofDetectPassAction;
  }

  // spoof_detect_pass_action_list_name - computed: false, optional: true, required: false
  private _spoofDetectPassActionListName?: string; 
  public get spoofDetectPassActionListName() {
    return this.getStringAttribute('spoof_detect_pass_action_list_name');
  }
  public set spoofDetectPassActionListName(value: string) {
    this._spoofDetectPassActionListName = value;
  }
  public resetSpoofDetectPassActionListName() {
    this._spoofDetectPassActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spoofDetectPassActionListNameInput() {
    return this._spoofDetectPassActionListName;
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

  // filter_list - computed: false, optional: true, required: false
  private _filterList = new DdosZoneTemplateUdpFilterListStructList(this, "filter_list", false);
  public get filterList() {
    return this._filterList;
  }
  public putFilterList(value: DdosZoneTemplateUdpFilterListStruct[] | cdktf.IResolvable) {
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
  private _knownRespSrcPortCfg = new DdosZoneTemplateUdpKnownRespSrcPortCfgOutputReference(this, "known_resp_src_port_cfg");
  public get knownRespSrcPortCfg() {
    return this._knownRespSrcPortCfg;
  }
  public putKnownRespSrcPortCfg(value: DdosZoneTemplateUdpKnownRespSrcPortCfg) {
    this._knownRespSrcPortCfg.internalValue = value;
  }
  public resetKnownRespSrcPortCfg() {
    this._knownRespSrcPortCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knownRespSrcPortCfgInput() {
    return this._knownRespSrcPortCfg.internalValue;
  }

  // max_payload_size_cfg - computed: false, optional: true, required: false
  private _maxPayloadSizeCfg = new DdosZoneTemplateUdpMaxPayloadSizeCfgOutputReference(this, "max_payload_size_cfg");
  public get maxPayloadSizeCfg() {
    return this._maxPayloadSizeCfg;
  }
  public putMaxPayloadSizeCfg(value: DdosZoneTemplateUdpMaxPayloadSizeCfg) {
    this._maxPayloadSizeCfg.internalValue = value;
  }
  public resetMaxPayloadSizeCfg() {
    this._maxPayloadSizeCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPayloadSizeCfgInput() {
    return this._maxPayloadSizeCfg.internalValue;
  }

  // min_payload_size_cfg - computed: false, optional: true, required: false
  private _minPayloadSizeCfg = new DdosZoneTemplateUdpMinPayloadSizeCfgOutputReference(this, "min_payload_size_cfg");
  public get minPayloadSizeCfg() {
    return this._minPayloadSizeCfg;
  }
  public putMinPayloadSizeCfg(value: DdosZoneTemplateUdpMinPayloadSizeCfg) {
    this._minPayloadSizeCfg.internalValue = value;
  }
  public resetMinPayloadSizeCfg() {
    this._minPayloadSizeCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPayloadSizeCfgInput() {
    return this._minPayloadSizeCfg.internalValue;
  }

  // ntp_monlist_cfg - computed: false, optional: true, required: false
  private _ntpMonlistCfg = new DdosZoneTemplateUdpNtpMonlistCfgOutputReference(this, "ntp_monlist_cfg");
  public get ntpMonlistCfg() {
    return this._ntpMonlistCfg;
  }
  public putNtpMonlistCfg(value: DdosZoneTemplateUdpNtpMonlistCfg) {
    this._ntpMonlistCfg.internalValue = value;
  }
  public resetNtpMonlistCfg() {
    this._ntpMonlistCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpMonlistCfgInput() {
    return this._ntpMonlistCfg.internalValue;
  }

  // per_conn_pkt_rate_cfg - computed: false, optional: true, required: false
  private _perConnPktRateCfg = new DdosZoneTemplateUdpPerConnPktRateCfgOutputReference(this, "per_conn_pkt_rate_cfg");
  public get perConnPktRateCfg() {
    return this._perConnPktRateCfg;
  }
  public putPerConnPktRateCfg(value: DdosZoneTemplateUdpPerConnPktRateCfg) {
    this._perConnPktRateCfg.internalValue = value;
  }
  public resetPerConnPktRateCfg() {
    this._perConnPktRateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perConnPktRateCfgInput() {
    return this._perConnPktRateCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      age: cdktf.numberToTerraform(this._age),
      filter_match_type: cdktf.stringToTerraform(this._filterMatchType),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      per_conn_rate_interval: cdktf.stringToTerraform(this._perConnRateInterval),
      previous_salt_timeout: cdktf.numberToTerraform(this._previousSaltTimeout),
      public_ipv4_addr: cdktf.stringToTerraform(this._publicIpv4Addr),
      public_ipv6_addr: cdktf.stringToTerraform(this._publicIpv6Addr),
      spoof_detect_fail_action: cdktf.stringToTerraform(this._spoofDetectFailAction),
      spoof_detect_fail_action_list_name: cdktf.stringToTerraform(this._spoofDetectFailActionListName),
      spoof_detect_min_delay: cdktf.numberToTerraform(this._spoofDetectMinDelay),
      spoof_detect_min_delay_interval: cdktf.stringToTerraform(this._spoofDetectMinDelayInterval),
      spoof_detect_pass_action: cdktf.stringToTerraform(this._spoofDetectPassAction),
      spoof_detect_pass_action_list_name: cdktf.stringToTerraform(this._spoofDetectPassActionListName),
      spoof_detect_retry_timeout: cdktf.numberToTerraform(this._spoofDetectRetryTimeout),
      token_authentication: cdktf.numberToTerraform(this._tokenAuthentication),
      token_authentication_formula: cdktf.stringToTerraform(this._tokenAuthenticationFormula),
      token_authentication_hw_assist_disable: cdktf.numberToTerraform(this._tokenAuthenticationHwAssistDisable),
      token_authentication_public_address: cdktf.numberToTerraform(this._tokenAuthenticationPublicAddress),
      token_authentication_salt_prefix: cdktf.numberToTerraform(this._tokenAuthenticationSaltPrefix),
      token_authentication_salt_prefix_curr: cdktf.numberToTerraform(this._tokenAuthenticationSaltPrefixCurr),
      token_authentication_salt_prefix_prev: cdktf.numberToTerraform(this._tokenAuthenticationSaltPrefixPrev),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      filter_list: cdktf.listMapper(ddosZoneTemplateUdpFilterListStructToTerraform, true)(this._filterList.internalValue),
      known_resp_src_port_cfg: ddosZoneTemplateUdpKnownRespSrcPortCfgToTerraform(this._knownRespSrcPortCfg.internalValue),
      max_payload_size_cfg: ddosZoneTemplateUdpMaxPayloadSizeCfgToTerraform(this._maxPayloadSizeCfg.internalValue),
      min_payload_size_cfg: ddosZoneTemplateUdpMinPayloadSizeCfgToTerraform(this._minPayloadSizeCfg.internalValue),
      ntp_monlist_cfg: ddosZoneTemplateUdpNtpMonlistCfgToTerraform(this._ntpMonlistCfg.internalValue),
      per_conn_pkt_rate_cfg: ddosZoneTemplateUdpPerConnPktRateCfgToTerraform(this._perConnPktRateCfg.internalValue),
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
      spoof_detect_fail_action: {
        value: cdktf.stringToHclTerraform(this._spoofDetectFailAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spoof_detect_fail_action_list_name: {
        value: cdktf.stringToHclTerraform(this._spoofDetectFailActionListName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spoof_detect_min_delay: {
        value: cdktf.numberToHclTerraform(this._spoofDetectMinDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spoof_detect_min_delay_interval: {
        value: cdktf.stringToHclTerraform(this._spoofDetectMinDelayInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spoof_detect_pass_action: {
        value: cdktf.stringToHclTerraform(this._spoofDetectPassAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spoof_detect_pass_action_list_name: {
        value: cdktf.stringToHclTerraform(this._spoofDetectPassActionListName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spoof_detect_retry_timeout: {
        value: cdktf.numberToHclTerraform(this._spoofDetectRetryTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      filter_list: {
        value: cdktf.listMapperHcl(ddosZoneTemplateUdpFilterListStructToHclTerraform, true)(this._filterList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateUdpFilterListStructList",
      },
      known_resp_src_port_cfg: {
        value: ddosZoneTemplateUdpKnownRespSrcPortCfgToHclTerraform(this._knownRespSrcPortCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateUdpKnownRespSrcPortCfgList",
      },
      max_payload_size_cfg: {
        value: ddosZoneTemplateUdpMaxPayloadSizeCfgToHclTerraform(this._maxPayloadSizeCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateUdpMaxPayloadSizeCfgList",
      },
      min_payload_size_cfg: {
        value: ddosZoneTemplateUdpMinPayloadSizeCfgToHclTerraform(this._minPayloadSizeCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateUdpMinPayloadSizeCfgList",
      },
      ntp_monlist_cfg: {
        value: ddosZoneTemplateUdpNtpMonlistCfgToHclTerraform(this._ntpMonlistCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateUdpNtpMonlistCfgList",
      },
      per_conn_pkt_rate_cfg: {
        value: ddosZoneTemplateUdpPerConnPktRateCfgToHclTerraform(this._perConnPktRateCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateUdpPerConnPktRateCfgList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
