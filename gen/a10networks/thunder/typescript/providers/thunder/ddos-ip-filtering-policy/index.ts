// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosIpFilteringPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy#id DdosIpFilteringPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * DDOS ip-filtering-policy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy#name DdosIpFilteringPolicy#name}
  */
  readonly name: string;
  /**
  * 'drop': Drop all the packets not meet any rule; 'permit': Forward all the packets not meet any rule (Default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy#no_rule_match_action DdosIpFilteringPolicy#no_rule_match_action}
  */
  readonly noRuleMatchAction?: string;
  /**
  * 'enable': Enable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy#rule_statistics DdosIpFilteringPolicy#rule_statistics}
  */
  readonly ruleStatistics?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy#user_tag DdosIpFilteringPolicy#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy#uuid DdosIpFilteringPolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * rule_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy#rule_list DdosIpFilteringPolicy#rule_list}
  */
  readonly ruleList?: DdosIpFilteringPolicyRuleListStruct[] | cdktf.IResolvable;
}
export interface DdosIpFilteringPolicyRuleListStruct {
  /**
  * 'drop': Drop the packet (default); 'permit': Skip afterword rules and continue other ddos process; 'blacklist': Blacklist source hosts with glid; 'bypass': Bypass all other ddos process rules and forward;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy#action DdosIpFilteringPolicy#action}
  */
  readonly action?: string;
  /**
  * IPv4 Subnet address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy#dst_ip DdosIpFilteringPolicy#dst_ip}
  */
  readonly dstIp?: string;
  /**
  * IPv6 Subnet address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy#dst_ipv6 DdosIpFilteringPolicy#dst_ipv6}
  */
  readonly dstIpv6?: string;
  /**
  * Match only packets with the port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy#dst_port DdosIpFilteringPolicy#dst_port}
  */
  readonly dstPort?: number;
  /**
  * Ending Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy#dst_port_end DdosIpFilteringPolicy#dst_port_end}
  */
  readonly dstPortEnd?: number;
  /**
  * Match only packets in the range of port numbers (Starting Port Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy#dst_port_start DdosIpFilteringPolicy#dst_port_start}
  */
  readonly dstPortStart?: number;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy#glid DdosIpFilteringPolicy#glid}
  */
  readonly glid?: string;
  /**
  * ICMP code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy#icmp_code DdosIpFilteringPolicy#icmp_code}
  */
  readonly icmpCode?: number;
  /**
  * ICMP message type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy#icmp_type DdosIpFilteringPolicy#icmp_type}
  */
  readonly icmpType?: number;
  /**
  * IP proto number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy#proto_num DdosIpFilteringPolicy#proto_num}
  */
  readonly protoNum?: number;
  /**
  * 'tcp': TCP; 'udp': UDP; 'icmp-v4': ICMP; 'icmp-v6': ICMPv6; 'number': Specify IP protocol number;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy#protocol DdosIpFilteringPolicy#protocol}
  */
  readonly protocol?: string;
  /**
  * Sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy#seq DdosIpFilteringPolicy#seq}
  */
  readonly seq: number;
  /**
  * IPv4 Subnet address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy#src_ip DdosIpFilteringPolicy#src_ip}
  */
  readonly srcIp?: string;
  /**
  * IPv6 Subnet address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy#src_ipv6 DdosIpFilteringPolicy#src_ipv6}
  */
  readonly srcIpv6?: string;
  /**
  * Match only packets with the port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy#src_port DdosIpFilteringPolicy#src_port}
  */
  readonly srcPort?: number;
  /**
  * Ending Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy#src_port_end DdosIpFilteringPolicy#src_port_end}
  */
  readonly srcPortEnd?: number;
  /**
  * Match only packets in the range of port numbers (Starting Port Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy#src_port_start DdosIpFilteringPolicy#src_port_start}
  */
  readonly srcPortStart?: number;
  /**
  * 'match-all': not = 0 match = 1; 'none-of': not = 1 match = 0; 'match-any': not = 0 match = 0;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy#tcp_flag DdosIpFilteringPolicy#tcp_flag}
  */
  readonly tcpFlag?: string;
  /**
  * Bitmask in Hex
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy#tcp_flags_bitmask DdosIpFilteringPolicy#tcp_flags_bitmask}
  */
  readonly tcpFlagsBitmask?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy#user_tag DdosIpFilteringPolicy#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy#uuid DdosIpFilteringPolicy#uuid}
  */
  readonly uuid?: string;
}

export function ddosIpFilteringPolicyRuleListStructToTerraform(struct?: DdosIpFilteringPolicyRuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    dst_ip: cdktf.stringToTerraform(struct!.dstIp),
    dst_ipv6: cdktf.stringToTerraform(struct!.dstIpv6),
    dst_port: cdktf.numberToTerraform(struct!.dstPort),
    dst_port_end: cdktf.numberToTerraform(struct!.dstPortEnd),
    dst_port_start: cdktf.numberToTerraform(struct!.dstPortStart),
    glid: cdktf.stringToTerraform(struct!.glid),
    icmp_code: cdktf.numberToTerraform(struct!.icmpCode),
    icmp_type: cdktf.numberToTerraform(struct!.icmpType),
    proto_num: cdktf.numberToTerraform(struct!.protoNum),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    seq: cdktf.numberToTerraform(struct!.seq),
    src_ip: cdktf.stringToTerraform(struct!.srcIp),
    src_ipv6: cdktf.stringToTerraform(struct!.srcIpv6),
    src_port: cdktf.numberToTerraform(struct!.srcPort),
    src_port_end: cdktf.numberToTerraform(struct!.srcPortEnd),
    src_port_start: cdktf.numberToTerraform(struct!.srcPortStart),
    tcp_flag: cdktf.stringToTerraform(struct!.tcpFlag),
    tcp_flags_bitmask: cdktf.stringToTerraform(struct!.tcpFlagsBitmask),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosIpFilteringPolicyRuleListStructToHclTerraform(struct?: DdosIpFilteringPolicyRuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_ip: {
      value: cdktf.stringToHclTerraform(struct!.dstIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.dstIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_port: {
      value: cdktf.numberToHclTerraform(struct!.dstPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_port_end: {
      value: cdktf.numberToHclTerraform(struct!.dstPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_port_start: {
      value: cdktf.numberToHclTerraform(struct!.dstPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    glid: {
      value: cdktf.stringToHclTerraform(struct!.glid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp_code: {
      value: cdktf.numberToHclTerraform(struct!.icmpCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_type: {
      value: cdktf.numberToHclTerraform(struct!.icmpType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proto_num: {
      value: cdktf.numberToHclTerraform(struct!.protoNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seq: {
      value: cdktf.numberToHclTerraform(struct!.seq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ip: {
      value: cdktf.stringToHclTerraform(struct!.srcIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.srcIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_port: {
      value: cdktf.numberToHclTerraform(struct!.srcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_port_end: {
      value: cdktf.numberToHclTerraform(struct!.srcPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_port_start: {
      value: cdktf.numberToHclTerraform(struct!.srcPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_flag: {
      value: cdktf.stringToHclTerraform(struct!.tcpFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_flags_bitmask: {
      value: cdktf.stringToHclTerraform(struct!.tcpFlagsBitmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DdosIpFilteringPolicyRuleListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosIpFilteringPolicyRuleListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._dstIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIp = this._dstIp;
    }
    if (this._dstIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpv6 = this._dstIpv6;
    }
    if (this._dstPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPort = this._dstPort;
    }
    if (this._dstPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPortEnd = this._dstPortEnd;
    }
    if (this._dstPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPortStart = this._dstPortStart;
    }
    if (this._glid !== undefined) {
      hasAnyValues = true;
      internalValueResult.glid = this._glid;
    }
    if (this._icmpCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpCode = this._icmpCode;
    }
    if (this._icmpType !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpType = this._icmpType;
    }
    if (this._protoNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.protoNum = this._protoNum;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._seq !== undefined) {
      hasAnyValues = true;
      internalValueResult.seq = this._seq;
    }
    if (this._srcIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIp = this._srcIp;
    }
    if (this._srcIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpv6 = this._srcIpv6;
    }
    if (this._srcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPort = this._srcPort;
    }
    if (this._srcPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPortEnd = this._srcPortEnd;
    }
    if (this._srcPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPortStart = this._srcPortStart;
    }
    if (this._tcpFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFlag = this._tcpFlag;
    }
    if (this._tcpFlagsBitmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFlagsBitmask = this._tcpFlagsBitmask;
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

  public set internalValue(value: DdosIpFilteringPolicyRuleListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._dstIp = undefined;
      this._dstIpv6 = undefined;
      this._dstPort = undefined;
      this._dstPortEnd = undefined;
      this._dstPortStart = undefined;
      this._glid = undefined;
      this._icmpCode = undefined;
      this._icmpType = undefined;
      this._protoNum = undefined;
      this._protocol = undefined;
      this._seq = undefined;
      this._srcIp = undefined;
      this._srcIpv6 = undefined;
      this._srcPort = undefined;
      this._srcPortEnd = undefined;
      this._srcPortStart = undefined;
      this._tcpFlag = undefined;
      this._tcpFlagsBitmask = undefined;
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
      this._action = value.action;
      this._dstIp = value.dstIp;
      this._dstIpv6 = value.dstIpv6;
      this._dstPort = value.dstPort;
      this._dstPortEnd = value.dstPortEnd;
      this._dstPortStart = value.dstPortStart;
      this._glid = value.glid;
      this._icmpCode = value.icmpCode;
      this._icmpType = value.icmpType;
      this._protoNum = value.protoNum;
      this._protocol = value.protocol;
      this._seq = value.seq;
      this._srcIp = value.srcIp;
      this._srcIpv6 = value.srcIpv6;
      this._srcPort = value.srcPort;
      this._srcPortEnd = value.srcPortEnd;
      this._srcPortStart = value.srcPortStart;
      this._tcpFlag = value.tcpFlag;
      this._tcpFlagsBitmask = value.tcpFlagsBitmask;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // dst_ip - computed: false, optional: true, required: false
  private _dstIp?: string; 
  public get dstIp() {
    return this.getStringAttribute('dst_ip');
  }
  public set dstIp(value: string) {
    this._dstIp = value;
  }
  public resetDstIp() {
    this._dstIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpInput() {
    return this._dstIp;
  }

  // dst_ipv6 - computed: false, optional: true, required: false
  private _dstIpv6?: string; 
  public get dstIpv6() {
    return this.getStringAttribute('dst_ipv6');
  }
  public set dstIpv6(value: string) {
    this._dstIpv6 = value;
  }
  public resetDstIpv6() {
    this._dstIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpv6Input() {
    return this._dstIpv6;
  }

  // dst_port - computed: false, optional: true, required: false
  private _dstPort?: number; 
  public get dstPort() {
    return this.getNumberAttribute('dst_port');
  }
  public set dstPort(value: number) {
    this._dstPort = value;
  }
  public resetDstPort() {
    this._dstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortInput() {
    return this._dstPort;
  }

  // dst_port_end - computed: false, optional: true, required: false
  private _dstPortEnd?: number; 
  public get dstPortEnd() {
    return this.getNumberAttribute('dst_port_end');
  }
  public set dstPortEnd(value: number) {
    this._dstPortEnd = value;
  }
  public resetDstPortEnd() {
    this._dstPortEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortEndInput() {
    return this._dstPortEnd;
  }

  // dst_port_start - computed: false, optional: true, required: false
  private _dstPortStart?: number; 
  public get dstPortStart() {
    return this.getNumberAttribute('dst_port_start');
  }
  public set dstPortStart(value: number) {
    this._dstPortStart = value;
  }
  public resetDstPortStart() {
    this._dstPortStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortStartInput() {
    return this._dstPortStart;
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

  // icmp_code - computed: false, optional: true, required: false
  private _icmpCode?: number; 
  public get icmpCode() {
    return this.getNumberAttribute('icmp_code');
  }
  public set icmpCode(value: number) {
    this._icmpCode = value;
  }
  public resetIcmpCode() {
    this._icmpCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpCodeInput() {
    return this._icmpCode;
  }

  // icmp_type - computed: false, optional: true, required: false
  private _icmpType?: number; 
  public get icmpType() {
    return this.getNumberAttribute('icmp_type');
  }
  public set icmpType(value: number) {
    this._icmpType = value;
  }
  public resetIcmpType() {
    this._icmpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeInput() {
    return this._icmpType;
  }

  // proto_num - computed: false, optional: true, required: false
  private _protoNum?: number; 
  public get protoNum() {
    return this.getNumberAttribute('proto_num');
  }
  public set protoNum(value: number) {
    this._protoNum = value;
  }
  public resetProtoNum() {
    this._protoNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoNumInput() {
    return this._protoNum;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // seq - computed: false, optional: false, required: true
  private _seq?: number; 
  public get seq() {
    return this.getNumberAttribute('seq');
  }
  public set seq(value: number) {
    this._seq = value;
  }
  // Temporarily expose input value. Use with caution.
  public get seqInput() {
    return this._seq;
  }

  // src_ip - computed: false, optional: true, required: false
  private _srcIp?: string; 
  public get srcIp() {
    return this.getStringAttribute('src_ip');
  }
  public set srcIp(value: string) {
    this._srcIp = value;
  }
  public resetSrcIp() {
    this._srcIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpInput() {
    return this._srcIp;
  }

  // src_ipv6 - computed: false, optional: true, required: false
  private _srcIpv6?: string; 
  public get srcIpv6() {
    return this.getStringAttribute('src_ipv6');
  }
  public set srcIpv6(value: string) {
    this._srcIpv6 = value;
  }
  public resetSrcIpv6() {
    this._srcIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpv6Input() {
    return this._srcIpv6;
  }

  // src_port - computed: false, optional: true, required: false
  private _srcPort?: number; 
  public get srcPort() {
    return this.getNumberAttribute('src_port');
  }
  public set srcPort(value: number) {
    this._srcPort = value;
  }
  public resetSrcPort() {
    this._srcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortInput() {
    return this._srcPort;
  }

  // src_port_end - computed: false, optional: true, required: false
  private _srcPortEnd?: number; 
  public get srcPortEnd() {
    return this.getNumberAttribute('src_port_end');
  }
  public set srcPortEnd(value: number) {
    this._srcPortEnd = value;
  }
  public resetSrcPortEnd() {
    this._srcPortEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortEndInput() {
    return this._srcPortEnd;
  }

  // src_port_start - computed: false, optional: true, required: false
  private _srcPortStart?: number; 
  public get srcPortStart() {
    return this.getNumberAttribute('src_port_start');
  }
  public set srcPortStart(value: number) {
    this._srcPortStart = value;
  }
  public resetSrcPortStart() {
    this._srcPortStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortStartInput() {
    return this._srcPortStart;
  }

  // tcp_flag - computed: false, optional: true, required: false
  private _tcpFlag?: string; 
  public get tcpFlag() {
    return this.getStringAttribute('tcp_flag');
  }
  public set tcpFlag(value: string) {
    this._tcpFlag = value;
  }
  public resetTcpFlag() {
    this._tcpFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFlagInput() {
    return this._tcpFlag;
  }

  // tcp_flags_bitmask - computed: false, optional: true, required: false
  private _tcpFlagsBitmask?: string; 
  public get tcpFlagsBitmask() {
    return this.getStringAttribute('tcp_flags_bitmask');
  }
  public set tcpFlagsBitmask(value: string) {
    this._tcpFlagsBitmask = value;
  }
  public resetTcpFlagsBitmask() {
    this._tcpFlagsBitmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFlagsBitmaskInput() {
    return this._tcpFlagsBitmask;
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

export class DdosIpFilteringPolicyRuleListStructList extends cdktf.ComplexList {
  public internalValue? : DdosIpFilteringPolicyRuleListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosIpFilteringPolicyRuleListStructOutputReference {
    return new DdosIpFilteringPolicyRuleListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy thunder_ddos_ip_filtering_policy}
*/
export class DdosIpFilteringPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_ip_filtering_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosIpFilteringPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosIpFilteringPolicy to import
  * @param importFromId The id of the existing DdosIpFilteringPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosIpFilteringPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_ip_filtering_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy thunder_ddos_ip_filtering_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosIpFilteringPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DdosIpFilteringPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_ip_filtering_policy',
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
    this._name = config.name;
    this._noRuleMatchAction = config.noRuleMatchAction;
    this._ruleStatistics = config.ruleStatistics;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._ruleList.internalValue = config.ruleList;
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

  // no_rule_match_action - computed: false, optional: true, required: false
  private _noRuleMatchAction?: string; 
  public get noRuleMatchAction() {
    return this.getStringAttribute('no_rule_match_action');
  }
  public set noRuleMatchAction(value: string) {
    this._noRuleMatchAction = value;
  }
  public resetNoRuleMatchAction() {
    this._noRuleMatchAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRuleMatchActionInput() {
    return this._noRuleMatchAction;
  }

  // rule_statistics - computed: false, optional: true, required: false
  private _ruleStatistics?: string; 
  public get ruleStatistics() {
    return this.getStringAttribute('rule_statistics');
  }
  public set ruleStatistics(value: string) {
    this._ruleStatistics = value;
  }
  public resetRuleStatistics() {
    this._ruleStatistics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleStatisticsInput() {
    return this._ruleStatistics;
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

  // rule_list - computed: false, optional: true, required: false
  private _ruleList = new DdosIpFilteringPolicyRuleListStructList(this, "rule_list", false);
  public get ruleList() {
    return this._ruleList;
  }
  public putRuleList(value: DdosIpFilteringPolicyRuleListStruct[] | cdktf.IResolvable) {
    this._ruleList.internalValue = value;
  }
  public resetRuleList() {
    this._ruleList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleListInput() {
    return this._ruleList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      no_rule_match_action: cdktf.stringToTerraform(this._noRuleMatchAction),
      rule_statistics: cdktf.stringToTerraform(this._ruleStatistics),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      rule_list: cdktf.listMapper(ddosIpFilteringPolicyRuleListStructToTerraform, true)(this._ruleList.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_rule_match_action: {
        value: cdktf.stringToHclTerraform(this._noRuleMatchAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_statistics: {
        value: cdktf.stringToHclTerraform(this._ruleStatistics),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      rule_list: {
        value: cdktf.listMapperHcl(ddosIpFilteringPolicyRuleListStructToHclTerraform, true)(this._ruleList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosIpFilteringPolicyRuleListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
