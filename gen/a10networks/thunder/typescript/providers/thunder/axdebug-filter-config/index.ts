// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AxdebugFilterConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * value to compare
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#comp_hex AxdebugFilterConfig#comp_hex}
  */
  readonly compHex?: string;
  /**
  * Destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#dst AxdebugFilterConfig#dst}
  */
  readonly dst?: number;
  /**
  * dest IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#dst_ip AxdebugFilterConfig#dst_ip}
  */
  readonly dstIp?: number;
  /**
  * dest ip address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#dst_ipv4_address AxdebugFilterConfig#dst_ipv4_address}
  */
  readonly dstIpv4Address?: string;
  /**
  * dest mac address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#dst_mac AxdebugFilterConfig#dst_mac}
  */
  readonly dstMac?: number;
  /**
  * dest mac address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#dst_mac_addr AxdebugFilterConfig#dst_mac_addr}
  */
  readonly dstMacAddr?: string;
  /**
  * dest port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#dst_port AxdebugFilterConfig#dst_port}
  */
  readonly dstPort?: number;
  /**
  * dest Port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#dst_port_num AxdebugFilterConfig#dst_port_num}
  */
  readonly dstPortNum?: number;
  /**
  * Define hex value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#hex AxdebugFilterConfig#hex}
  */
  readonly hex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#id AxdebugFilterConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Define decimal value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#integer AxdebugFilterConfig#integer}
  */
  readonly integer?: number;
  /**
  * value to compare
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#integer_comp AxdebugFilterConfig#integer_comp}
  */
  readonly integerComp?: number;
  /**
  * max value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#integer_max AxdebugFilterConfig#integer_max}
  */
  readonly integerMax?: number;
  /**
  * min value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#integer_min AxdebugFilterConfig#integer_min}
  */
  readonly integerMin?: number;
  /**
  * IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#ip AxdebugFilterConfig#ip}
  */
  readonly ip?: number;
  /**
  * ip address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#ipv4_address AxdebugFilterConfig#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * IP subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#ipv4_netmask AxdebugFilterConfig#ipv4_netmask}
  */
  readonly ipv4Netmask?: string;
  /**
  * IPV6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#ipv6 AxdebugFilterConfig#ipv6}
  */
  readonly ipv6?: number;
  /**
  * ipv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#ipv6_address AxdebugFilterConfig#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * 'arp': arp; 'neighbor': neighbor;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#l3_proto AxdebugFilterConfig#l3_proto}
  */
  readonly l3Proto?: string;
  /**
  * byte length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#length AxdebugFilterConfig#length}
  */
  readonly length?: number;
  /**
  * mac address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#mac AxdebugFilterConfig#mac}
  */
  readonly mac?: number;
  /**
  * mac address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#mac_addr AxdebugFilterConfig#mac_addr}
  */
  readonly macAddr?: string;
  /**
  * max value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#max_hex AxdebugFilterConfig#max_hex}
  */
  readonly maxHex?: string;
  /**
  * min value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#min_hex AxdebugFilterConfig#min_hex}
  */
  readonly minHex?: string;
  /**
  * Specify filter id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#number AxdebugFilterConfig#number}
  */
  readonly number: number;
  /**
  * byte offset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#offset AxdebugFilterConfig#offset}
  */
  readonly offset?: number;
  /**
  * 'gt': greater than; 'gte': greater than or equal to; 'se': smaller than or equal to; 'st': smaller than; 'eq': equal to; 'range': select a range;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#oper_range AxdebugFilterConfig#oper_range}
  */
  readonly operRange?: string;
  /**
  * port configurations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#port AxdebugFilterConfig#port}
  */
  readonly port?: number;
  /**
  * max port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#port_num_max AxdebugFilterConfig#port_num_max}
  */
  readonly portNumMax?: number;
  /**
  * min port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#port_num_min AxdebugFilterConfig#port_num_min}
  */
  readonly portNumMin?: number;
  /**
  * protocol number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#prot_num AxdebugFilterConfig#prot_num}
  */
  readonly protNum?: number;
  /**
  * ip protocol number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#proto AxdebugFilterConfig#proto}
  */
  readonly proto?: number;
  /**
  * 'icmp': icmp; 'icmpv6': icmpv6; 'tcp': tcp; 'udp': udp;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#proto_val AxdebugFilterConfig#proto_val}
  */
  readonly protoVal?: string;
  /**
  * Src
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#src AxdebugFilterConfig#src}
  */
  readonly src?: number;
  /**
  * src IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#src_ip AxdebugFilterConfig#src_ip}
  */
  readonly srcIp?: number;
  /**
  * src ip address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#src_ipv4_address AxdebugFilterConfig#src_ipv4_address}
  */
  readonly srcIpv4Address?: string;
  /**
  * src mac address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#src_mac AxdebugFilterConfig#src_mac}
  */
  readonly srcMac?: number;
  /**
  * src mac address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#src_mac_addr AxdebugFilterConfig#src_mac_addr}
  */
  readonly srcMacAddr?: string;
  /**
  * src port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#src_port AxdebugFilterConfig#src_port}
  */
  readonly srcPort?: number;
  /**
  * src Port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#src_port_num AxdebugFilterConfig#src_port_num}
  */
  readonly srcPortNum?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#user_tag AxdebugFilterConfig#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#uuid AxdebugFilterConfig#uuid}
  */
  readonly uuid?: string;
  /**
  * Define hex value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#word AxdebugFilterConfig#word}
  */
  readonly word?: number;
  /**
  * WORD0 to compare
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#word0 AxdebugFilterConfig#word0}
  */
  readonly word0?: string;
  /**
  * WORD min value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#word1 AxdebugFilterConfig#word1}
  */
  readonly word1?: string;
  /**
  * WORD max value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#word2 AxdebugFilterConfig#word2}
  */
  readonly word2?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config thunder_axdebug_filter_config}
*/
export class AxdebugFilterConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_axdebug_filter_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AxdebugFilterConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AxdebugFilterConfig to import
  * @param importFromId The id of the existing AxdebugFilterConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AxdebugFilterConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_axdebug_filter_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_filter_config thunder_axdebug_filter_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AxdebugFilterConfigConfig
  */
  public constructor(scope: Construct, id: string, config: AxdebugFilterConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_axdebug_filter_config',
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
    this._compHex = config.compHex;
    this._dst = config.dst;
    this._dstIp = config.dstIp;
    this._dstIpv4Address = config.dstIpv4Address;
    this._dstMac = config.dstMac;
    this._dstMacAddr = config.dstMacAddr;
    this._dstPort = config.dstPort;
    this._dstPortNum = config.dstPortNum;
    this._hex = config.hex;
    this._id = config.id;
    this._integer = config.integer;
    this._integerComp = config.integerComp;
    this._integerMax = config.integerMax;
    this._integerMin = config.integerMin;
    this._ip = config.ip;
    this._ipv4Address = config.ipv4Address;
    this._ipv4Netmask = config.ipv4Netmask;
    this._ipv6 = config.ipv6;
    this._ipv6Address = config.ipv6Address;
    this._l3Proto = config.l3Proto;
    this._length = config.length;
    this._mac = config.mac;
    this._macAddr = config.macAddr;
    this._maxHex = config.maxHex;
    this._minHex = config.minHex;
    this._number = config.number;
    this._offset = config.offset;
    this._operRange = config.operRange;
    this._port = config.port;
    this._portNumMax = config.portNumMax;
    this._portNumMin = config.portNumMin;
    this._protNum = config.protNum;
    this._proto = config.proto;
    this._protoVal = config.protoVal;
    this._src = config.src;
    this._srcIp = config.srcIp;
    this._srcIpv4Address = config.srcIpv4Address;
    this._srcMac = config.srcMac;
    this._srcMacAddr = config.srcMacAddr;
    this._srcPort = config.srcPort;
    this._srcPortNum = config.srcPortNum;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._word = config.word;
    this._word0 = config.word0;
    this._word1 = config.word1;
    this._word2 = config.word2;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comp_hex - computed: false, optional: true, required: false
  private _compHex?: string; 
  public get compHex() {
    return this.getStringAttribute('comp_hex');
  }
  public set compHex(value: string) {
    this._compHex = value;
  }
  public resetCompHex() {
    this._compHex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compHexInput() {
    return this._compHex;
  }

  // dst - computed: false, optional: true, required: false
  private _dst?: number; 
  public get dst() {
    return this.getNumberAttribute('dst');
  }
  public set dst(value: number) {
    this._dst = value;
  }
  public resetDst() {
    this._dst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstInput() {
    return this._dst;
  }

  // dst_ip - computed: false, optional: true, required: false
  private _dstIp?: number; 
  public get dstIp() {
    return this.getNumberAttribute('dst_ip');
  }
  public set dstIp(value: number) {
    this._dstIp = value;
  }
  public resetDstIp() {
    this._dstIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpInput() {
    return this._dstIp;
  }

  // dst_ipv4_address - computed: false, optional: true, required: false
  private _dstIpv4Address?: string; 
  public get dstIpv4Address() {
    return this.getStringAttribute('dst_ipv4_address');
  }
  public set dstIpv4Address(value: string) {
    this._dstIpv4Address = value;
  }
  public resetDstIpv4Address() {
    this._dstIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpv4AddressInput() {
    return this._dstIpv4Address;
  }

  // dst_mac - computed: false, optional: true, required: false
  private _dstMac?: number; 
  public get dstMac() {
    return this.getNumberAttribute('dst_mac');
  }
  public set dstMac(value: number) {
    this._dstMac = value;
  }
  public resetDstMac() {
    this._dstMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstMacInput() {
    return this._dstMac;
  }

  // dst_mac_addr - computed: false, optional: true, required: false
  private _dstMacAddr?: string; 
  public get dstMacAddr() {
    return this.getStringAttribute('dst_mac_addr');
  }
  public set dstMacAddr(value: string) {
    this._dstMacAddr = value;
  }
  public resetDstMacAddr() {
    this._dstMacAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstMacAddrInput() {
    return this._dstMacAddr;
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

  // dst_port_num - computed: false, optional: true, required: false
  private _dstPortNum?: number; 
  public get dstPortNum() {
    return this.getNumberAttribute('dst_port_num');
  }
  public set dstPortNum(value: number) {
    this._dstPortNum = value;
  }
  public resetDstPortNum() {
    this._dstPortNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortNumInput() {
    return this._dstPortNum;
  }

  // hex - computed: false, optional: true, required: false
  private _hex?: number; 
  public get hex() {
    return this.getNumberAttribute('hex');
  }
  public set hex(value: number) {
    this._hex = value;
  }
  public resetHex() {
    this._hex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hexInput() {
    return this._hex;
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

  // integer - computed: false, optional: true, required: false
  private _integer?: number; 
  public get integer() {
    return this.getNumberAttribute('integer');
  }
  public set integer(value: number) {
    this._integer = value;
  }
  public resetInteger() {
    this._integer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerInput() {
    return this._integer;
  }

  // integer_comp - computed: false, optional: true, required: false
  private _integerComp?: number; 
  public get integerComp() {
    return this.getNumberAttribute('integer_comp');
  }
  public set integerComp(value: number) {
    this._integerComp = value;
  }
  public resetIntegerComp() {
    this._integerComp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerCompInput() {
    return this._integerComp;
  }

  // integer_max - computed: false, optional: true, required: false
  private _integerMax?: number; 
  public get integerMax() {
    return this.getNumberAttribute('integer_max');
  }
  public set integerMax(value: number) {
    this._integerMax = value;
  }
  public resetIntegerMax() {
    this._integerMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerMaxInput() {
    return this._integerMax;
  }

  // integer_min - computed: false, optional: true, required: false
  private _integerMin?: number; 
  public get integerMin() {
    return this.getNumberAttribute('integer_min');
  }
  public set integerMin(value: number) {
    this._integerMin = value;
  }
  public resetIntegerMin() {
    this._integerMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerMinInput() {
    return this._integerMin;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: number; 
  public get ip() {
    return this.getNumberAttribute('ip');
  }
  public set ip(value: number) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv4_netmask - computed: false, optional: true, required: false
  private _ipv4Netmask?: string; 
  public get ipv4Netmask() {
    return this.getStringAttribute('ipv4_netmask');
  }
  public set ipv4Netmask(value: string) {
    this._ipv4Netmask = value;
  }
  public resetIpv4Netmask() {
    this._ipv4Netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NetmaskInput() {
    return this._ipv4Netmask;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: number; 
  public get ipv6() {
    return this.getNumberAttribute('ipv6');
  }
  public set ipv6(value: number) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // l3_proto - computed: false, optional: true, required: false
  private _l3Proto?: string; 
  public get l3Proto() {
    return this.getStringAttribute('l3_proto');
  }
  public set l3Proto(value: string) {
    this._l3Proto = value;
  }
  public resetL3Proto() {
    this._l3Proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3ProtoInput() {
    return this._l3Proto;
  }

  // length - computed: false, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // mac - computed: false, optional: true, required: false
  private _mac?: number; 
  public get mac() {
    return this.getNumberAttribute('mac');
  }
  public set mac(value: number) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }

  // mac_addr - computed: false, optional: true, required: false
  private _macAddr?: string; 
  public get macAddr() {
    return this.getStringAttribute('mac_addr');
  }
  public set macAddr(value: string) {
    this._macAddr = value;
  }
  public resetMacAddr() {
    this._macAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddrInput() {
    return this._macAddr;
  }

  // max_hex - computed: false, optional: true, required: false
  private _maxHex?: string; 
  public get maxHex() {
    return this.getStringAttribute('max_hex');
  }
  public set maxHex(value: string) {
    this._maxHex = value;
  }
  public resetMaxHex() {
    this._maxHex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHexInput() {
    return this._maxHex;
  }

  // min_hex - computed: false, optional: true, required: false
  private _minHex?: string; 
  public get minHex() {
    return this.getStringAttribute('min_hex');
  }
  public set minHex(value: string) {
    this._minHex = value;
  }
  public resetMinHex() {
    this._minHex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minHexInput() {
    return this._minHex;
  }

  // number - computed: false, optional: false, required: true
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // oper_range - computed: false, optional: true, required: false
  private _operRange?: string; 
  public get operRange() {
    return this.getStringAttribute('oper_range');
  }
  public set operRange(value: string) {
    this._operRange = value;
  }
  public resetOperRange() {
    this._operRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operRangeInput() {
    return this._operRange;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // port_num_max - computed: false, optional: true, required: false
  private _portNumMax?: number; 
  public get portNumMax() {
    return this.getNumberAttribute('port_num_max');
  }
  public set portNumMax(value: number) {
    this._portNumMax = value;
  }
  public resetPortNumMax() {
    this._portNumMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumMaxInput() {
    return this._portNumMax;
  }

  // port_num_min - computed: false, optional: true, required: false
  private _portNumMin?: number; 
  public get portNumMin() {
    return this.getNumberAttribute('port_num_min');
  }
  public set portNumMin(value: number) {
    this._portNumMin = value;
  }
  public resetPortNumMin() {
    this._portNumMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumMinInput() {
    return this._portNumMin;
  }

  // prot_num - computed: false, optional: true, required: false
  private _protNum?: number; 
  public get protNum() {
    return this.getNumberAttribute('prot_num');
  }
  public set protNum(value: number) {
    this._protNum = value;
  }
  public resetProtNum() {
    this._protNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protNumInput() {
    return this._protNum;
  }

  // proto - computed: false, optional: true, required: false
  private _proto?: number; 
  public get proto() {
    return this.getNumberAttribute('proto');
  }
  public set proto(value: number) {
    this._proto = value;
  }
  public resetProto() {
    this._proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
  }

  // proto_val - computed: false, optional: true, required: false
  private _protoVal?: string; 
  public get protoVal() {
    return this.getStringAttribute('proto_val');
  }
  public set protoVal(value: string) {
    this._protoVal = value;
  }
  public resetProtoVal() {
    this._protoVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoValInput() {
    return this._protoVal;
  }

  // src - computed: false, optional: true, required: false
  private _src?: number; 
  public get src() {
    return this.getNumberAttribute('src');
  }
  public set src(value: number) {
    this._src = value;
  }
  public resetSrc() {
    this._src = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcInput() {
    return this._src;
  }

  // src_ip - computed: false, optional: true, required: false
  private _srcIp?: number; 
  public get srcIp() {
    return this.getNumberAttribute('src_ip');
  }
  public set srcIp(value: number) {
    this._srcIp = value;
  }
  public resetSrcIp() {
    this._srcIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpInput() {
    return this._srcIp;
  }

  // src_ipv4_address - computed: false, optional: true, required: false
  private _srcIpv4Address?: string; 
  public get srcIpv4Address() {
    return this.getStringAttribute('src_ipv4_address');
  }
  public set srcIpv4Address(value: string) {
    this._srcIpv4Address = value;
  }
  public resetSrcIpv4Address() {
    this._srcIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpv4AddressInput() {
    return this._srcIpv4Address;
  }

  // src_mac - computed: false, optional: true, required: false
  private _srcMac?: number; 
  public get srcMac() {
    return this.getNumberAttribute('src_mac');
  }
  public set srcMac(value: number) {
    this._srcMac = value;
  }
  public resetSrcMac() {
    this._srcMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcMacInput() {
    return this._srcMac;
  }

  // src_mac_addr - computed: false, optional: true, required: false
  private _srcMacAddr?: string; 
  public get srcMacAddr() {
    return this.getStringAttribute('src_mac_addr');
  }
  public set srcMacAddr(value: string) {
    this._srcMacAddr = value;
  }
  public resetSrcMacAddr() {
    this._srcMacAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcMacAddrInput() {
    return this._srcMacAddr;
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

  // src_port_num - computed: false, optional: true, required: false
  private _srcPortNum?: number; 
  public get srcPortNum() {
    return this.getNumberAttribute('src_port_num');
  }
  public set srcPortNum(value: number) {
    this._srcPortNum = value;
  }
  public resetSrcPortNum() {
    this._srcPortNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortNumInput() {
    return this._srcPortNum;
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

  // word - computed: false, optional: true, required: false
  private _word?: number; 
  public get word() {
    return this.getNumberAttribute('word');
  }
  public set word(value: number) {
    this._word = value;
  }
  public resetWord() {
    this._word = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wordInput() {
    return this._word;
  }

  // word0 - computed: false, optional: true, required: false
  private _word0?: string; 
  public get word0() {
    return this.getStringAttribute('word0');
  }
  public set word0(value: string) {
    this._word0 = value;
  }
  public resetWord0() {
    this._word0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get word0Input() {
    return this._word0;
  }

  // word1 - computed: false, optional: true, required: false
  private _word1?: string; 
  public get word1() {
    return this.getStringAttribute('word1');
  }
  public set word1(value: string) {
    this._word1 = value;
  }
  public resetWord1() {
    this._word1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get word1Input() {
    return this._word1;
  }

  // word2 - computed: false, optional: true, required: false
  private _word2?: string; 
  public get word2() {
    return this.getStringAttribute('word2');
  }
  public set word2(value: string) {
    this._word2 = value;
  }
  public resetWord2() {
    this._word2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get word2Input() {
    return this._word2;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comp_hex: cdktf.stringToTerraform(this._compHex),
      dst: cdktf.numberToTerraform(this._dst),
      dst_ip: cdktf.numberToTerraform(this._dstIp),
      dst_ipv4_address: cdktf.stringToTerraform(this._dstIpv4Address),
      dst_mac: cdktf.numberToTerraform(this._dstMac),
      dst_mac_addr: cdktf.stringToTerraform(this._dstMacAddr),
      dst_port: cdktf.numberToTerraform(this._dstPort),
      dst_port_num: cdktf.numberToTerraform(this._dstPortNum),
      hex: cdktf.numberToTerraform(this._hex),
      id: cdktf.stringToTerraform(this._id),
      integer: cdktf.numberToTerraform(this._integer),
      integer_comp: cdktf.numberToTerraform(this._integerComp),
      integer_max: cdktf.numberToTerraform(this._integerMax),
      integer_min: cdktf.numberToTerraform(this._integerMin),
      ip: cdktf.numberToTerraform(this._ip),
      ipv4_address: cdktf.stringToTerraform(this._ipv4Address),
      ipv4_netmask: cdktf.stringToTerraform(this._ipv4Netmask),
      ipv6: cdktf.numberToTerraform(this._ipv6),
      ipv6_address: cdktf.stringToTerraform(this._ipv6Address),
      l3_proto: cdktf.stringToTerraform(this._l3Proto),
      length: cdktf.numberToTerraform(this._length),
      mac: cdktf.numberToTerraform(this._mac),
      mac_addr: cdktf.stringToTerraform(this._macAddr),
      max_hex: cdktf.stringToTerraform(this._maxHex),
      min_hex: cdktf.stringToTerraform(this._minHex),
      number: cdktf.numberToTerraform(this._number),
      offset: cdktf.numberToTerraform(this._offset),
      oper_range: cdktf.stringToTerraform(this._operRange),
      port: cdktf.numberToTerraform(this._port),
      port_num_max: cdktf.numberToTerraform(this._portNumMax),
      port_num_min: cdktf.numberToTerraform(this._portNumMin),
      prot_num: cdktf.numberToTerraform(this._protNum),
      proto: cdktf.numberToTerraform(this._proto),
      proto_val: cdktf.stringToTerraform(this._protoVal),
      src: cdktf.numberToTerraform(this._src),
      src_ip: cdktf.numberToTerraform(this._srcIp),
      src_ipv4_address: cdktf.stringToTerraform(this._srcIpv4Address),
      src_mac: cdktf.numberToTerraform(this._srcMac),
      src_mac_addr: cdktf.stringToTerraform(this._srcMacAddr),
      src_port: cdktf.numberToTerraform(this._srcPort),
      src_port_num: cdktf.numberToTerraform(this._srcPortNum),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      word: cdktf.numberToTerraform(this._word),
      word0: cdktf.stringToTerraform(this._word0),
      word1: cdktf.stringToTerraform(this._word1),
      word2: cdktf.stringToTerraform(this._word2),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comp_hex: {
        value: cdktf.stringToHclTerraform(this._compHex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst: {
        value: cdktf.numberToHclTerraform(this._dst),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dst_ip: {
        value: cdktf.numberToHclTerraform(this._dstIp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dst_ipv4_address: {
        value: cdktf.stringToHclTerraform(this._dstIpv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_mac: {
        value: cdktf.numberToHclTerraform(this._dstMac),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dst_mac_addr: {
        value: cdktf.stringToHclTerraform(this._dstMacAddr),
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
      dst_port_num: {
        value: cdktf.numberToHclTerraform(this._dstPortNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hex: {
        value: cdktf.numberToHclTerraform(this._hex),
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
      integer: {
        value: cdktf.numberToHclTerraform(this._integer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      integer_comp: {
        value: cdktf.numberToHclTerraform(this._integerComp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      integer_max: {
        value: cdktf.numberToHclTerraform(this._integerMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      integer_min: {
        value: cdktf.numberToHclTerraform(this._integerMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip: {
        value: cdktf.numberToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv4_address: {
        value: cdktf.stringToHclTerraform(this._ipv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_netmask: {
        value: cdktf.stringToHclTerraform(this._ipv4Netmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6: {
        value: cdktf.numberToHclTerraform(this._ipv6),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_address: {
        value: cdktf.stringToHclTerraform(this._ipv6Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l3_proto: {
        value: cdktf.stringToHclTerraform(this._l3Proto),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      length: {
        value: cdktf.numberToHclTerraform(this._length),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mac: {
        value: cdktf.numberToHclTerraform(this._mac),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mac_addr: {
        value: cdktf.stringToHclTerraform(this._macAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_hex: {
        value: cdktf.stringToHclTerraform(this._maxHex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_hex: {
        value: cdktf.stringToHclTerraform(this._minHex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      number: {
        value: cdktf.numberToHclTerraform(this._number),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      oper_range: {
        value: cdktf.stringToHclTerraform(this._operRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_num_max: {
        value: cdktf.numberToHclTerraform(this._portNumMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_num_min: {
        value: cdktf.numberToHclTerraform(this._portNumMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prot_num: {
        value: cdktf.numberToHclTerraform(this._protNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proto: {
        value: cdktf.numberToHclTerraform(this._proto),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proto_val: {
        value: cdktf.stringToHclTerraform(this._protoVal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src: {
        value: cdktf.numberToHclTerraform(this._src),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      src_ip: {
        value: cdktf.numberToHclTerraform(this._srcIp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      src_ipv4_address: {
        value: cdktf.stringToHclTerraform(this._srcIpv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_mac: {
        value: cdktf.numberToHclTerraform(this._srcMac),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      src_mac_addr: {
        value: cdktf.stringToHclTerraform(this._srcMacAddr),
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
      src_port_num: {
        value: cdktf.numberToHclTerraform(this._srcPortNum),
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
      word: {
        value: cdktf.numberToHclTerraform(this._word),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      word0: {
        value: cdktf.stringToHclTerraform(this._word0),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      word1: {
        value: cdktf.stringToHclTerraform(this._word1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      word2: {
        value: cdktf.stringToHclTerraform(this._word2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
