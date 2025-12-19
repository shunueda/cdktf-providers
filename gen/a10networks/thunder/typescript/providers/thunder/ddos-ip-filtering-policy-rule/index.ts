// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosIpFilteringPolicyRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'drop': Drop the packet (default); 'permit': Skip afterword rules and continue other ddos process; 'blacklist': Blacklist source hosts with glid; 'bypass': Bypass all other ddos process rules and forward;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy_rule#action DdosIpFilteringPolicyRule#action}
  */
  readonly action?: string;
  /**
  * IPv4 Subnet address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy_rule#dst_ip DdosIpFilteringPolicyRule#dst_ip}
  */
  readonly dstIp?: string;
  /**
  * IPv6 Subnet address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy_rule#dst_ipv6 DdosIpFilteringPolicyRule#dst_ipv6}
  */
  readonly dstIpv6?: string;
  /**
  * Match only packets with the port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy_rule#dst_port DdosIpFilteringPolicyRule#dst_port}
  */
  readonly dstPort?: number;
  /**
  * Ending Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy_rule#dst_port_end DdosIpFilteringPolicyRule#dst_port_end}
  */
  readonly dstPortEnd?: number;
  /**
  * Match only packets in the range of port numbers (Starting Port Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy_rule#dst_port_start DdosIpFilteringPolicyRule#dst_port_start}
  */
  readonly dstPortStart?: number;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy_rule#glid DdosIpFilteringPolicyRule#glid}
  */
  readonly glid?: string;
  /**
  * ICMP code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy_rule#icmp_code DdosIpFilteringPolicyRule#icmp_code}
  */
  readonly icmpCode?: number;
  /**
  * ICMP message type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy_rule#icmp_type DdosIpFilteringPolicyRule#icmp_type}
  */
  readonly icmpType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy_rule#id DdosIpFilteringPolicyRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ip_filtering_policy_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy_rule#ip_filtering_policy_name DdosIpFilteringPolicyRule#ip_filtering_policy_name}
  */
  readonly ipFilteringPolicyName: string;
  /**
  * IP proto number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy_rule#proto_num DdosIpFilteringPolicyRule#proto_num}
  */
  readonly protoNum?: number;
  /**
  * 'tcp': TCP; 'udp': UDP; 'icmp-v4': ICMP; 'icmp-v6': ICMPv6; 'number': Specify IP protocol number;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy_rule#protocol DdosIpFilteringPolicyRule#protocol}
  */
  readonly protocol?: string;
  /**
  * Sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy_rule#seq DdosIpFilteringPolicyRule#seq}
  */
  readonly seq: number;
  /**
  * IPv4 Subnet address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy_rule#src_ip DdosIpFilteringPolicyRule#src_ip}
  */
  readonly srcIp?: string;
  /**
  * IPv6 Subnet address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy_rule#src_ipv6 DdosIpFilteringPolicyRule#src_ipv6}
  */
  readonly srcIpv6?: string;
  /**
  * Match only packets with the port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy_rule#src_port DdosIpFilteringPolicyRule#src_port}
  */
  readonly srcPort?: number;
  /**
  * Ending Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy_rule#src_port_end DdosIpFilteringPolicyRule#src_port_end}
  */
  readonly srcPortEnd?: number;
  /**
  * Match only packets in the range of port numbers (Starting Port Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy_rule#src_port_start DdosIpFilteringPolicyRule#src_port_start}
  */
  readonly srcPortStart?: number;
  /**
  * 'match-all': not = 0 match = 1; 'none-of': not = 1 match = 0; 'match-any': not = 0 match = 0;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy_rule#tcp_flag DdosIpFilteringPolicyRule#tcp_flag}
  */
  readonly tcpFlag?: string;
  /**
  * Bitmask in Hex
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy_rule#tcp_flags_bitmask DdosIpFilteringPolicyRule#tcp_flags_bitmask}
  */
  readonly tcpFlagsBitmask?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy_rule#user_tag DdosIpFilteringPolicyRule#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy_rule#uuid DdosIpFilteringPolicyRule#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy_rule thunder_ddos_ip_filtering_policy_rule}
*/
export class DdosIpFilteringPolicyRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_ip_filtering_policy_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosIpFilteringPolicyRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosIpFilteringPolicyRule to import
  * @param importFromId The id of the existing DdosIpFilteringPolicyRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosIpFilteringPolicyRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_ip_filtering_policy_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_ip_filtering_policy_rule thunder_ddos_ip_filtering_policy_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosIpFilteringPolicyRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DdosIpFilteringPolicyRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_ip_filtering_policy_rule',
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
    this._action = config.action;
    this._dstIp = config.dstIp;
    this._dstIpv6 = config.dstIpv6;
    this._dstPort = config.dstPort;
    this._dstPortEnd = config.dstPortEnd;
    this._dstPortStart = config.dstPortStart;
    this._glid = config.glid;
    this._icmpCode = config.icmpCode;
    this._icmpType = config.icmpType;
    this._id = config.id;
    this._ipFilteringPolicyName = config.ipFilteringPolicyName;
    this._protoNum = config.protoNum;
    this._protocol = config.protocol;
    this._seq = config.seq;
    this._srcIp = config.srcIp;
    this._srcIpv6 = config.srcIpv6;
    this._srcPort = config.srcPort;
    this._srcPortEnd = config.srcPortEnd;
    this._srcPortStart = config.srcPortStart;
    this._tcpFlag = config.tcpFlag;
    this._tcpFlagsBitmask = config.tcpFlagsBitmask;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ip_filtering_policy_name - computed: false, optional: false, required: true
  private _ipFilteringPolicyName?: string; 
  public get ipFilteringPolicyName() {
    return this.getStringAttribute('ip_filtering_policy_name');
  }
  public set ipFilteringPolicyName(value: string) {
    this._ipFilteringPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilteringPolicyNameInput() {
    return this._ipFilteringPolicyName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      dst_ip: cdktf.stringToTerraform(this._dstIp),
      dst_ipv6: cdktf.stringToTerraform(this._dstIpv6),
      dst_port: cdktf.numberToTerraform(this._dstPort),
      dst_port_end: cdktf.numberToTerraform(this._dstPortEnd),
      dst_port_start: cdktf.numberToTerraform(this._dstPortStart),
      glid: cdktf.stringToTerraform(this._glid),
      icmp_code: cdktf.numberToTerraform(this._icmpCode),
      icmp_type: cdktf.numberToTerraform(this._icmpType),
      id: cdktf.stringToTerraform(this._id),
      ip_filtering_policy_name: cdktf.stringToTerraform(this._ipFilteringPolicyName),
      proto_num: cdktf.numberToTerraform(this._protoNum),
      protocol: cdktf.stringToTerraform(this._protocol),
      seq: cdktf.numberToTerraform(this._seq),
      src_ip: cdktf.stringToTerraform(this._srcIp),
      src_ipv6: cdktf.stringToTerraform(this._srcIpv6),
      src_port: cdktf.numberToTerraform(this._srcPort),
      src_port_end: cdktf.numberToTerraform(this._srcPortEnd),
      src_port_start: cdktf.numberToTerraform(this._srcPortStart),
      tcp_flag: cdktf.stringToTerraform(this._tcpFlag),
      tcp_flags_bitmask: cdktf.stringToTerraform(this._tcpFlagsBitmask),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_ip: {
        value: cdktf.stringToHclTerraform(this._dstIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_ipv6: {
        value: cdktf.stringToHclTerraform(this._dstIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_port: {
        value: cdktf.numberToHclTerraform(this._dstPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dst_port_end: {
        value: cdktf.numberToHclTerraform(this._dstPortEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dst_port_start: {
        value: cdktf.numberToHclTerraform(this._dstPortStart),
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
      icmp_code: {
        value: cdktf.numberToHclTerraform(this._icmpCode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icmp_type: {
        value: cdktf.numberToHclTerraform(this._icmpType),
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
      ip_filtering_policy_name: {
        value: cdktf.stringToHclTerraform(this._ipFilteringPolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proto_num: {
        value: cdktf.numberToHclTerraform(this._protoNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      seq: {
        value: cdktf.numberToHclTerraform(this._seq),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      src_ip: {
        value: cdktf.stringToHclTerraform(this._srcIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_ipv6: {
        value: cdktf.stringToHclTerraform(this._srcIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_port: {
        value: cdktf.numberToHclTerraform(this._srcPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      src_port_end: {
        value: cdktf.numberToHclTerraform(this._srcPortEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      src_port_start: {
        value: cdktf.numberToHclTerraform(this._srcPortStart),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_flag: {
        value: cdktf.stringToHclTerraform(this._tcpFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_flags_bitmask: {
        value: cdktf.stringToHclTerraform(this._tcpFlagsBitmask),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
