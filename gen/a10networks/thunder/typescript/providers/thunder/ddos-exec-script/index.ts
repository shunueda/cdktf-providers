// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_exec_script
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosExecScriptConfig extends cdktf.TerraformMetaArguments {
  /**
  * 1: UDP Pkt Rate 2: TCP Pkt Rate 3: ICMP Pkt Rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_exec_script#alert_type DdosExecScript#alert_type}
  */
  readonly alertType?: number;
  /**
  * 'icmp-v4': ip-proto icmp-v4; 'icmp-v6': ip-proto icmp-v6; 'other': ip-proto other; 'gre': ip-proto gre; 'ipv4-encap': ip-proto IPv4 Encapsulation; 'ipv6-encap': ip-proto IPv6 Encapsulation;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_exec_script#exec_script_ip_portocol DdosExecScript#exec_script_ip_portocol}
  */
  readonly execScriptIpPortocol?: string;
  /**
  * 'tcp': TCP Port; 'udp': UDP Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_exec_script#exec_script_port_other_protocol DdosExecScript#exec_script_port_other_protocol}
  */
  readonly execScriptPortOtherProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_exec_script#id DdosExecScript#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Current Level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_exec_script#level DdosExecScript#level}
  */
  readonly level?: number;
  /**
  * Use mock data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_exec_script#mock DdosExecScript#mock}
  */
  readonly mock?: number;
  /**
  * Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_exec_script#port_num DdosExecScript#port_num}
  */
  readonly portNum?: number;
  /**
  * 'other': other;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_exec_script#port_other DdosExecScript#port_other}
  */
  readonly portOther?: string;
  /**
  * 'dns-tcp': DNS-TCP Port; 'dns-udp': DNS-UDP Port; 'http': HTTP Port; 'tcp': TCP Port; 'udp': UDP Port; 'ssl-l4': SSL-L4 Port; 'sip-tcp': SIP-TCP Port; 'sip-udp': SIP-UDP Port; 'quic': QUIC Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_exec_script#protocol DdosExecScript#protocol}
  */
  readonly protocol?: string;
  /**
  * Protocol Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_exec_script#protocol_num DdosExecScript#protocol_num}
  */
  readonly protocolNum?: number;
  /**
  * Specify script to execute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_exec_script#script DdosExecScript#script}
  */
  readonly script?: string;
  /**
  * Threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_exec_script#threshold DdosExecScript#threshold}
  */
  readonly threshold?: number;
  /**
  * Timeout (Default: 10 seconds, Mock Default: 2 seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_exec_script#timeout DdosExecScript#timeout}
  */
  readonly timeout?: number;
  /**
  * DST Zone name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_exec_script#zone DdosExecScript#zone}
  */
  readonly zone?: string;
  /**
  * src_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_exec_script#src_ip DdosExecScript#src_ip}
  */
  readonly srcIp?: DdosExecScriptSrcIp[] | cdktf.IResolvable;
  /**
  * src_ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_exec_script#src_ipv6 DdosExecScript#src_ipv6}
  */
  readonly srcIpv6?: DdosExecScriptSrcIpv6[] | cdktf.IResolvable;
}
export interface DdosExecScriptSrcIp {
  /**
  * Specify IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_exec_script#ip_addr DdosExecScript#ip_addr}
  */
  readonly ipAddr?: string;
  /**
  * IP Subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_exec_script#subnet_ip_addr DdosExecScript#subnet_ip_addr}
  */
  readonly subnetIpAddr?: string;
}

export function ddosExecScriptSrcIpToTerraform(struct?: DdosExecScriptSrcIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_addr: cdktf.stringToTerraform(struct!.ipAddr),
    subnet_ip_addr: cdktf.stringToTerraform(struct!.subnetIpAddr),
  }
}


export function ddosExecScriptSrcIpToHclTerraform(struct?: DdosExecScriptSrcIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_ip_addr: {
      value: cdktf.stringToHclTerraform(struct!.subnetIpAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosExecScriptSrcIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosExecScriptSrcIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr;
    }
    if (this._subnetIpAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIpAddr = this._subnetIpAddr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosExecScriptSrcIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddr = undefined;
      this._subnetIpAddr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddr = value.ipAddr;
      this._subnetIpAddr = value.subnetIpAddr;
    }
  }

  // ip_addr - computed: false, optional: true, required: false
  private _ipAddr?: string; 
  public get ipAddr() {
    return this.getStringAttribute('ip_addr');
  }
  public set ipAddr(value: string) {
    this._ipAddr = value;
  }
  public resetIpAddr() {
    this._ipAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr;
  }

  // subnet_ip_addr - computed: false, optional: true, required: false
  private _subnetIpAddr?: string; 
  public get subnetIpAddr() {
    return this.getStringAttribute('subnet_ip_addr');
  }
  public set subnetIpAddr(value: string) {
    this._subnetIpAddr = value;
  }
  public resetSubnetIpAddr() {
    this._subnetIpAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIpAddrInput() {
    return this._subnetIpAddr;
  }
}

export class DdosExecScriptSrcIpList extends cdktf.ComplexList {
  public internalValue? : DdosExecScriptSrcIp[] | cdktf.IResolvable

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
  public get(index: number): DdosExecScriptSrcIpOutputReference {
    return new DdosExecScriptSrcIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosExecScriptSrcIpv6 {
  /**
  * Specify IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_exec_script#ip6_addr DdosExecScript#ip6_addr}
  */
  readonly ip6Addr?: string;
  /**
  * IPV6 Subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_exec_script#subnet_ipv6_addr DdosExecScript#subnet_ipv6_addr}
  */
  readonly subnetIpv6Addr?: string;
}

export function ddosExecScriptSrcIpv6ToTerraform(struct?: DdosExecScriptSrcIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip6_addr: cdktf.stringToTerraform(struct!.ip6Addr),
    subnet_ipv6_addr: cdktf.stringToTerraform(struct!.subnetIpv6Addr),
  }
}


export function ddosExecScriptSrcIpv6ToHclTerraform(struct?: DdosExecScriptSrcIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip6_addr: {
      value: cdktf.stringToHclTerraform(struct!.ip6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.subnetIpv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosExecScriptSrcIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosExecScriptSrcIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6Addr = this._ip6Addr;
    }
    if (this._subnetIpv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIpv6Addr = this._subnetIpv6Addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosExecScriptSrcIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip6Addr = undefined;
      this._subnetIpv6Addr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip6Addr = value.ip6Addr;
      this._subnetIpv6Addr = value.subnetIpv6Addr;
    }
  }

  // ip6_addr - computed: false, optional: true, required: false
  private _ip6Addr?: string; 
  public get ip6Addr() {
    return this.getStringAttribute('ip6_addr');
  }
  public set ip6Addr(value: string) {
    this._ip6Addr = value;
  }
  public resetIp6Addr() {
    this._ip6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6AddrInput() {
    return this._ip6Addr;
  }

  // subnet_ipv6_addr - computed: false, optional: true, required: false
  private _subnetIpv6Addr?: string; 
  public get subnetIpv6Addr() {
    return this.getStringAttribute('subnet_ipv6_addr');
  }
  public set subnetIpv6Addr(value: string) {
    this._subnetIpv6Addr = value;
  }
  public resetSubnetIpv6Addr() {
    this._subnetIpv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIpv6AddrInput() {
    return this._subnetIpv6Addr;
  }
}

export class DdosExecScriptSrcIpv6List extends cdktf.ComplexList {
  public internalValue? : DdosExecScriptSrcIpv6[] | cdktf.IResolvable

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
  public get(index: number): DdosExecScriptSrcIpv6OutputReference {
    return new DdosExecScriptSrcIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_exec_script thunder_ddos_exec_script}
*/
export class DdosExecScript extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_exec_script";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosExecScript resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosExecScript to import
  * @param importFromId The id of the existing DdosExecScript that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_exec_script#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosExecScript to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_exec_script", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_exec_script thunder_ddos_exec_script} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosExecScriptConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DdosExecScriptConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_exec_script',
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
    this._alertType = config.alertType;
    this._execScriptIpPortocol = config.execScriptIpPortocol;
    this._execScriptPortOtherProtocol = config.execScriptPortOtherProtocol;
    this._id = config.id;
    this._level = config.level;
    this._mock = config.mock;
    this._portNum = config.portNum;
    this._portOther = config.portOther;
    this._protocol = config.protocol;
    this._protocolNum = config.protocolNum;
    this._script = config.script;
    this._threshold = config.threshold;
    this._timeout = config.timeout;
    this._zone = config.zone;
    this._srcIp.internalValue = config.srcIp;
    this._srcIpv6.internalValue = config.srcIpv6;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_type - computed: false, optional: true, required: false
  private _alertType?: number; 
  public get alertType() {
    return this.getNumberAttribute('alert_type');
  }
  public set alertType(value: number) {
    this._alertType = value;
  }
  public resetAlertType() {
    this._alertType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertTypeInput() {
    return this._alertType;
  }

  // exec_script_ip_portocol - computed: false, optional: true, required: false
  private _execScriptIpPortocol?: string; 
  public get execScriptIpPortocol() {
    return this.getStringAttribute('exec_script_ip_portocol');
  }
  public set execScriptIpPortocol(value: string) {
    this._execScriptIpPortocol = value;
  }
  public resetExecScriptIpPortocol() {
    this._execScriptIpPortocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execScriptIpPortocolInput() {
    return this._execScriptIpPortocol;
  }

  // exec_script_port_other_protocol - computed: false, optional: true, required: false
  private _execScriptPortOtherProtocol?: string; 
  public get execScriptPortOtherProtocol() {
    return this.getStringAttribute('exec_script_port_other_protocol');
  }
  public set execScriptPortOtherProtocol(value: string) {
    this._execScriptPortOtherProtocol = value;
  }
  public resetExecScriptPortOtherProtocol() {
    this._execScriptPortOtherProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execScriptPortOtherProtocolInput() {
    return this._execScriptPortOtherProtocol;
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

  // level - computed: false, optional: true, required: false
  private _level?: number; 
  public get level() {
    return this.getNumberAttribute('level');
  }
  public set level(value: number) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // mock - computed: false, optional: true, required: false
  private _mock?: number; 
  public get mock() {
    return this.getNumberAttribute('mock');
  }
  public set mock(value: number) {
    this._mock = value;
  }
  public resetMock() {
    this._mock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mockInput() {
    return this._mock;
  }

  // port_num - computed: false, optional: true, required: false
  private _portNum?: number; 
  public get portNum() {
    return this.getNumberAttribute('port_num');
  }
  public set portNum(value: number) {
    this._portNum = value;
  }
  public resetPortNum() {
    this._portNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumInput() {
    return this._portNum;
  }

  // port_other - computed: false, optional: true, required: false
  private _portOther?: string; 
  public get portOther() {
    return this.getStringAttribute('port_other');
  }
  public set portOther(value: string) {
    this._portOther = value;
  }
  public resetPortOther() {
    this._portOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portOtherInput() {
    return this._portOther;
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

  // protocol_num - computed: false, optional: true, required: false
  private _protocolNum?: number; 
  public get protocolNum() {
    return this.getNumberAttribute('protocol_num');
  }
  public set protocolNum(value: number) {
    this._protocolNum = value;
  }
  public resetProtocolNum() {
    this._protocolNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolNumInput() {
    return this._protocolNum;
  }

  // script - computed: false, optional: true, required: false
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  public resetScript() {
    this._script = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
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

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // src_ip - computed: false, optional: true, required: false
  private _srcIp = new DdosExecScriptSrcIpList(this, "src_ip", false);
  public get srcIp() {
    return this._srcIp;
  }
  public putSrcIp(value: DdosExecScriptSrcIp[] | cdktf.IResolvable) {
    this._srcIp.internalValue = value;
  }
  public resetSrcIp() {
    this._srcIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpInput() {
    return this._srcIp.internalValue;
  }

  // src_ipv6 - computed: false, optional: true, required: false
  private _srcIpv6 = new DdosExecScriptSrcIpv6List(this, "src_ipv6", false);
  public get srcIpv6() {
    return this._srcIpv6;
  }
  public putSrcIpv6(value: DdosExecScriptSrcIpv6[] | cdktf.IResolvable) {
    this._srcIpv6.internalValue = value;
  }
  public resetSrcIpv6() {
    this._srcIpv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpv6Input() {
    return this._srcIpv6.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_type: cdktf.numberToTerraform(this._alertType),
      exec_script_ip_portocol: cdktf.stringToTerraform(this._execScriptIpPortocol),
      exec_script_port_other_protocol: cdktf.stringToTerraform(this._execScriptPortOtherProtocol),
      id: cdktf.stringToTerraform(this._id),
      level: cdktf.numberToTerraform(this._level),
      mock: cdktf.numberToTerraform(this._mock),
      port_num: cdktf.numberToTerraform(this._portNum),
      port_other: cdktf.stringToTerraform(this._portOther),
      protocol: cdktf.stringToTerraform(this._protocol),
      protocol_num: cdktf.numberToTerraform(this._protocolNum),
      script: cdktf.stringToTerraform(this._script),
      threshold: cdktf.numberToTerraform(this._threshold),
      timeout: cdktf.numberToTerraform(this._timeout),
      zone: cdktf.stringToTerraform(this._zone),
      src_ip: cdktf.listMapper(ddosExecScriptSrcIpToTerraform, true)(this._srcIp.internalValue),
      src_ipv6: cdktf.listMapper(ddosExecScriptSrcIpv6ToTerraform, true)(this._srcIpv6.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_type: {
        value: cdktf.numberToHclTerraform(this._alertType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      exec_script_ip_portocol: {
        value: cdktf.stringToHclTerraform(this._execScriptIpPortocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exec_script_port_other_protocol: {
        value: cdktf.stringToHclTerraform(this._execScriptPortOtherProtocol),
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
      level: {
        value: cdktf.numberToHclTerraform(this._level),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mock: {
        value: cdktf.numberToHclTerraform(this._mock),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_num: {
        value: cdktf.numberToHclTerraform(this._portNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_other: {
        value: cdktf.stringToHclTerraform(this._portOther),
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
      protocol_num: {
        value: cdktf.numberToHclTerraform(this._protocolNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      script: {
        value: cdktf.stringToHclTerraform(this._script),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threshold: {
        value: cdktf.numberToHclTerraform(this._threshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_ip: {
        value: cdktf.listMapperHcl(ddosExecScriptSrcIpToHclTerraform, true)(this._srcIp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosExecScriptSrcIpList",
      },
      src_ipv6: {
        value: cdktf.listMapperHcl(ddosExecScriptSrcIpv6ToHclTerraform, true)(this._srcIpv6.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosExecScriptSrcIpv6List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
