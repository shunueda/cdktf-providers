// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceEthernetConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'enable': Enable; 'disable': Disable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#action InterfaceEthernet#action}
  */
  readonly action?: string;
  /**
  * enable auto-negotiation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#auto_neg_enable InterfaceEthernet#auto_neg_enable}
  */
  readonly autoNegEnable?: number;
  /**
  * All Packets to this port are processed by CPU
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#cpu_process InterfaceEthernet#cpu_process}
  */
  readonly cpuProcess?: number;
  /**
  * 'primary': Primary board; 'blade': blade board; 'hash-dip': Hash based on the Destination IP; 'hash-sip': Hash based on the Source IP; 'hash-dmac': Hash based on the Destination MAC; 'hash-smac': Hash based on the Source MAC;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#cpu_process_dir InterfaceEthernet#cpu_process_dir}
  */
  readonly cpuProcessDir?: string;
  /**
  * 'Full': Full; 'Half': Half; 'auto': auto;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#duplexity InterfaceEthernet#duplexity}
  */
  readonly duplexity?: string;
  /**
  * turn off the FEC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#fec_forced_off InterfaceEthernet#fec_forced_off}
  */
  readonly fecForcedOff?: number;
  /**
  * turn on the FEC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#fec_forced_on InterfaceEthernet#fec_forced_on}
  */
  readonly fecForcedOn?: number;
  /**
  * Enable 802.3x flow control on full duplex port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#flow_control InterfaceEthernet#flow_control}
  */
  readonly flowControl?: number;
  /**
  * Enable Gaming Protocol Compliance Check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#gaming_protocol_compliance InterfaceEthernet#gaming_protocol_compliance}
  */
  readonly gamingProtocolCompliance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#id InterfaceEthernet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ethernet interface number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#ifnum InterfaceEthernet#ifnum}
  */
  readonly ifnum: number;
  /**
  * Set Inter-packet-gap interval in bit timing, default is 96
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#ipg_bit_time InterfaceEthernet#ipg_bit_time}
  */
  readonly ipgBitTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#l3_vlan_fwd_disable InterfaceEthernet#l3_vlan_fwd_disable}
  */
  readonly l3VlanFwdDisable?: number;
  /**
  * Configure Load Interval (Seconds (5-300, Multiple of 5), default 300)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#load_interval InterfaceEthernet#load_interval}
  */
  readonly loadInterval?: number;
  /**
  * 'enable': Enable MAC learning; 'disable': Disable MAC learning; 'dmac-only': Enable destination MAC learning only;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#mac_learning InterfaceEthernet#mac_learning}
  */
  readonly macLearning?: string;
  /**
  * Set the media type to copper
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#media_type_copper InterfaceEthernet#media_type_copper}
  */
  readonly mediaTypeCopper?: number;
  /**
  * Interface mtu (Interface MTU, default 1 (min MTU is 1280 for IPv6))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#mtu InterfaceEthernet#mtu}
  */
  readonly mtu?: number;
  /**
  * Name for the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#name InterfaceEthernet#name}
  */
  readonly name?: string;
  /**
  * Name of the packet capture template to be bind with this object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#packet_capture_template InterfaceEthernet#packet_capture_template}
  */
  readonly packetCaptureTemplate?: string;
  /**
  * 'enable': Enabl ping sweep detection; 'disable': Disable ping sweep detection(default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#ping_sweep_detection InterfaceEthernet#ping_sweep_detection}
  */
  readonly pingSweepDetection?: string;
  /**
  * '4x10G': Breakout 100G/40G ports into 4x10G ports; '4x25G': Breakout 100G ports into 4x25G ports; '2x50G': Breakout 100G ports into 2x50G ports;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#port_breakout InterfaceEthernet#port_breakout}
  */
  readonly portBreakout?: string;
  /**
  * 'enable': Enable port scan detection; 'disable': Disable port scan detection(default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#port_scan_detection InterfaceEthernet#port_scan_detection}
  */
  readonly portScanDetection?: string;
  /**
  * Remove the vlan tag for egressing packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#remove_vlan_tag InterfaceEthernet#remove_vlan_tag}
  */
  readonly removeVlanTag?: number;
  /**
  * '10': 10; '100': 100; '1000': 1000; 'auto': auto;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#speed InterfaceEthernet#speed}
  */
  readonly speed?: string;
  /**
  * force the speed to be 10G on 25G link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#speed_forced_10g InterfaceEthernet#speed_forced_10g}
  */
  readonly speedForced10G?: number;
  /**
  * force the speed to be 1G on 25G link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#speed_forced_1g InterfaceEthernet#speed_forced_1g}
  */
  readonly speedForced1G?: number;
  /**
  * force the speed to be 40G on 100G link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#speed_forced_40g InterfaceEthernet#speed_forced_40g}
  */
  readonly speedForced40G?: number;
  /**
  * 'sip': sip; 'dip': dip; 'primary': primary; 'blade': blade; 'l4-src-port': l4-src-port; 'l4-dst-port': l4-dst-port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#traffic_distribution_mode InterfaceEthernet#traffic_distribution_mode}
  */
  readonly trafficDistributionMode?: string;
  /**
  * The trap source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#trap_source InterfaceEthernet#trap_source}
  */
  readonly trapSource?: number;
  /**
  * Update and use received L2 information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#update_l2_info InterfaceEthernet#update_l2_info}
  */
  readonly updateL2Info?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#user_tag InterfaceEthernet#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#uuid InterfaceEthernet#uuid}
  */
  readonly uuid?: string;
  /**
  * Mark ethernet as a virtual wire interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#virtual_wire InterfaceEthernet#virtual_wire}
  */
  readonly virtualWire?: number;
  /**
  * 'enable': Enable VLAN learning; 'disable': Disable VLAN learning;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#vlan_learning InterfaceEthernet#vlan_learning}
  */
  readonly vlanLearning?: string;
  /**
  * access_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#access_list InterfaceEthernet#access_list}
  */
  readonly accessList?: InterfaceEthernetAccessListStruct;
  /**
  * bfd block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#bfd InterfaceEthernet#bfd}
  */
  readonly bfd?: InterfaceEthernetBfd;
  /**
  * ddos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#ddos InterfaceEthernet#ddos}
  */
  readonly ddos?: InterfaceEthernetDdos;
  /**
  * icmp_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#icmp_rate_limit InterfaceEthernet#icmp_rate_limit}
  */
  readonly icmpRateLimit?: InterfaceEthernetIcmpRateLimit;
  /**
  * icmpv6_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#icmpv6_rate_limit InterfaceEthernet#icmpv6_rate_limit}
  */
  readonly icmpv6RateLimit?: InterfaceEthernetIcmpv6RateLimit;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#ip InterfaceEthernet#ip}
  */
  readonly ip?: InterfaceEthernetIp;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#ipv6 InterfaceEthernet#ipv6}
  */
  readonly ipv6?: InterfaceEthernetIpv6;
  /**
  * isis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#isis InterfaceEthernet#isis}
  */
  readonly isis?: InterfaceEthernetIsis;
  /**
  * lldp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#lldp InterfaceEthernet#lldp}
  */
  readonly lldp?: InterfaceEthernetLldp;
  /**
  * lw_4o6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#lw_4o6 InterfaceEthernet#lw_4o6}
  */
  readonly lw4O6?: InterfaceEthernetLw4O6;
  /**
  * map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#map InterfaceEthernet#map}
  */
  readonly map?: InterfaceEthernetMap;
  /**
  * monitor_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#monitor_list InterfaceEthernet#monitor_list}
  */
  readonly monitorList?: InterfaceEthernetMonitorListStruct[] | cdktf.IResolvable;
  /**
  * nptv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#nptv6 InterfaceEthernet#nptv6}
  */
  readonly nptv6?: InterfaceEthernetNptv6;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#sampling_enable InterfaceEthernet#sampling_enable}
  */
  readonly samplingEnable?: InterfaceEthernetSamplingEnable[] | cdktf.IResolvable;
  /**
  * spanning_tree block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#spanning_tree InterfaceEthernet#spanning_tree}
  */
  readonly spanningTree?: InterfaceEthernetSpanningTree;
  /**
  * trunk_group_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#trunk_group_list InterfaceEthernet#trunk_group_list}
  */
  readonly trunkGroupList?: InterfaceEthernetTrunkGroupListStruct[] | cdktf.IResolvable;
}
export interface InterfaceEthernetAccessListStruct {
  /**
  * ACL id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#acl_id InterfaceEthernet#acl_id}
  */
  readonly aclId?: number;
  /**
  * Apply an access list (Named Access List)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#acl_name InterfaceEthernet#acl_name}
  */
  readonly aclName?: string;
}

export function interfaceEthernetAccessListStructToTerraform(struct?: InterfaceEthernetAccessListStructOutputReference | InterfaceEthernetAccessListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl_id: cdktf.numberToTerraform(struct!.aclId),
    acl_name: cdktf.stringToTerraform(struct!.aclName),
  }
}


export function interfaceEthernetAccessListStructToHclTerraform(struct?: InterfaceEthernetAccessListStructOutputReference | InterfaceEthernetAccessListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl_id: {
      value: cdktf.numberToHclTerraform(struct!.aclId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acl_name: {
      value: cdktf.stringToHclTerraform(struct!.aclName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetAccessListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetAccessListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aclId !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclId = this._aclId;
    }
    if (this._aclName !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclName = this._aclName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetAccessListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aclId = undefined;
      this._aclName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aclId = value.aclId;
      this._aclName = value.aclName;
    }
  }

  // acl_id - computed: false, optional: true, required: false
  private _aclId?: number; 
  public get aclId() {
    return this.getNumberAttribute('acl_id');
  }
  public set aclId(value: number) {
    this._aclId = value;
  }
  public resetAclId() {
    this._aclId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclIdInput() {
    return this._aclId;
  }

  // acl_name - computed: false, optional: true, required: false
  private _aclName?: string; 
  public get aclName() {
    return this.getStringAttribute('acl_name');
  }
  public set aclName(value: string) {
    this._aclName = value;
  }
  public resetAclName() {
    this._aclName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclNameInput() {
    return this._aclName;
  }
}
export interface InterfaceEthernetBfdAuthentication {
  /**
  * Key ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#key_id InterfaceEthernet#key_id}
  */
  readonly keyId?: number;
  /**
  * 'md5': Keyed MD5; 'meticulous-md5': Meticulous Keyed MD5; 'meticulous-sha1': Meticulous Keyed SHA1; 'sha1': Keyed SHA1; 'simple': Simple Password;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#method InterfaceEthernet#method}
  */
  readonly method?: string;
  /**
  * Key String
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#password InterfaceEthernet#password}
  */
  readonly password?: string;
}

export function interfaceEthernetBfdAuthenticationToTerraform(struct?: InterfaceEthernetBfdAuthenticationOutputReference | InterfaceEthernetBfdAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_id: cdktf.numberToTerraform(struct!.keyId),
    method: cdktf.stringToTerraform(struct!.method),
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function interfaceEthernetBfdAuthenticationToHclTerraform(struct?: InterfaceEthernetBfdAuthenticationOutputReference | InterfaceEthernetBfdAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_id: {
      value: cdktf.numberToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetBfdAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetBfdAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetBfdAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyId = undefined;
      this._method = undefined;
      this._password = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyId = value.keyId;
      this._method = value.method;
      this._password = value.password;
    }
  }

  // key_id - computed: false, optional: true, required: false
  private _keyId?: number; 
  public get keyId() {
    return this.getNumberAttribute('key_id');
  }
  public set keyId(value: number) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }
}
export interface InterfaceEthernetBfdIntervalCfg {
  /**
  * Transmit interval between BFD packets (Milliseconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#interval InterfaceEthernet#interval}
  */
  readonly interval?: number;
  /**
  * Minimum receive interval capability (Milliseconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#min_rx InterfaceEthernet#min_rx}
  */
  readonly minRx?: number;
  /**
  * Multiplier value used to compute holddown (value used to multiply the interval)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#multiplier InterfaceEthernet#multiplier}
  */
  readonly multiplier?: number;
}

export function interfaceEthernetBfdIntervalCfgToTerraform(struct?: InterfaceEthernetBfdIntervalCfgOutputReference | InterfaceEthernetBfdIntervalCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
    min_rx: cdktf.numberToTerraform(struct!.minRx),
    multiplier: cdktf.numberToTerraform(struct!.multiplier),
  }
}


export function interfaceEthernetBfdIntervalCfgToHclTerraform(struct?: InterfaceEthernetBfdIntervalCfgOutputReference | InterfaceEthernetBfdIntervalCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_rx: {
      value: cdktf.numberToHclTerraform(struct!.minRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multiplier: {
      value: cdktf.numberToHclTerraform(struct!.multiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetBfdIntervalCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetBfdIntervalCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._minRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.minRx = this._minRx;
    }
    if (this._multiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiplier = this._multiplier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetBfdIntervalCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._minRx = undefined;
      this._multiplier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._minRx = value.minRx;
      this._multiplier = value.multiplier;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // min_rx - computed: false, optional: true, required: false
  private _minRx?: number; 
  public get minRx() {
    return this.getNumberAttribute('min_rx');
  }
  public set minRx(value: number) {
    this._minRx = value;
  }
  public resetMinRx() {
    this._minRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRxInput() {
    return this._minRx;
  }

  // multiplier - computed: false, optional: true, required: false
  private _multiplier?: number; 
  public get multiplier() {
    return this.getNumberAttribute('multiplier');
  }
  public set multiplier(value: number) {
    this._multiplier = value;
  }
  public resetMultiplier() {
    this._multiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplierInput() {
    return this._multiplier;
  }
}
export interface InterfaceEthernetBfd {
  /**
  * Demand mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#demand InterfaceEthernet#demand}
  */
  readonly demand?: number;
  /**
  * Enable BFD Echo
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#echo InterfaceEthernet#echo}
  */
  readonly echo?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#uuid InterfaceEthernet#uuid}
  */
  readonly uuid?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#authentication InterfaceEthernet#authentication}
  */
  readonly authentication?: InterfaceEthernetBfdAuthentication;
  /**
  * interval_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#interval_cfg InterfaceEthernet#interval_cfg}
  */
  readonly intervalCfg?: InterfaceEthernetBfdIntervalCfg;
}

export function interfaceEthernetBfdToTerraform(struct?: InterfaceEthernetBfdOutputReference | InterfaceEthernetBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    demand: cdktf.numberToTerraform(struct!.demand),
    echo: cdktf.numberToTerraform(struct!.echo),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    authentication: interfaceEthernetBfdAuthenticationToTerraform(struct!.authentication),
    interval_cfg: interfaceEthernetBfdIntervalCfgToTerraform(struct!.intervalCfg),
  }
}


export function interfaceEthernetBfdToHclTerraform(struct?: InterfaceEthernetBfdOutputReference | InterfaceEthernetBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    demand: {
      value: cdktf.numberToHclTerraform(struct!.demand),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    echo: {
      value: cdktf.numberToHclTerraform(struct!.echo),
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
    authentication: {
      value: interfaceEthernetBfdAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetBfdAuthenticationList",
    },
    interval_cfg: {
      value: interfaceEthernetBfdIntervalCfgToHclTerraform(struct!.intervalCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetBfdIntervalCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetBfd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._demand !== undefined) {
      hasAnyValues = true;
      internalValueResult.demand = this._demand;
    }
    if (this._echo !== undefined) {
      hasAnyValues = true;
      internalValueResult.echo = this._echo;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._intervalCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalCfg = this._intervalCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetBfd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._demand = undefined;
      this._echo = undefined;
      this._uuid = undefined;
      this._authentication.internalValue = undefined;
      this._intervalCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._demand = value.demand;
      this._echo = value.echo;
      this._uuid = value.uuid;
      this._authentication.internalValue = value.authentication;
      this._intervalCfg.internalValue = value.intervalCfg;
    }
  }

  // demand - computed: false, optional: true, required: false
  private _demand?: number; 
  public get demand() {
    return this.getNumberAttribute('demand');
  }
  public set demand(value: number) {
    this._demand = value;
  }
  public resetDemand() {
    this._demand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get demandInput() {
    return this._demand;
  }

  // echo - computed: false, optional: true, required: false
  private _echo?: number; 
  public get echo() {
    return this.getNumberAttribute('echo');
  }
  public set echo(value: number) {
    this._echo = value;
  }
  public resetEcho() {
    this._echo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get echoInput() {
    return this._echo;
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

  // authentication - computed: false, optional: true, required: false
  private _authentication = new InterfaceEthernetBfdAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: InterfaceEthernetBfdAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // interval_cfg - computed: false, optional: true, required: false
  private _intervalCfg = new InterfaceEthernetBfdIntervalCfgOutputReference(this, "interval_cfg");
  public get intervalCfg() {
    return this._intervalCfg;
  }
  public putIntervalCfg(value: InterfaceEthernetBfdIntervalCfg) {
    this._intervalCfg.internalValue = value;
  }
  public resetIntervalCfg() {
    this._intervalCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalCfgInput() {
    return this._intervalCfg.internalValue;
  }
}
export interface InterfaceEthernetDdos {
  /**
  * DDoS inside (trusted) interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#inside InterfaceEthernet#inside}
  */
  readonly inside?: number;
  /**
  * DDoS outside (untrusted) interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#outside InterfaceEthernet#outside}
  */
  readonly outside?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#uuid InterfaceEthernet#uuid}
  */
  readonly uuid?: string;
}

export function interfaceEthernetDdosToTerraform(struct?: InterfaceEthernetDdosOutputReference | InterfaceEthernetDdos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inside: cdktf.numberToTerraform(struct!.inside),
    outside: cdktf.numberToTerraform(struct!.outside),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function interfaceEthernetDdosToHclTerraform(struct?: InterfaceEthernetDdosOutputReference | InterfaceEthernetDdos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inside: {
      value: cdktf.numberToHclTerraform(struct!.inside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outside: {
      value: cdktf.numberToHclTerraform(struct!.outside),
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

export class InterfaceEthernetDdosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetDdos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inside !== undefined) {
      hasAnyValues = true;
      internalValueResult.inside = this._inside;
    }
    if (this._outside !== undefined) {
      hasAnyValues = true;
      internalValueResult.outside = this._outside;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetDdos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inside = undefined;
      this._outside = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inside = value.inside;
      this._outside = value.outside;
      this._uuid = value.uuid;
    }
  }

  // inside - computed: false, optional: true, required: false
  private _inside?: number; 
  public get inside() {
    return this.getNumberAttribute('inside');
  }
  public set inside(value: number) {
    this._inside = value;
  }
  public resetInside() {
    this._inside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideInput() {
    return this._inside;
  }

  // outside - computed: false, optional: true, required: false
  private _outside?: number; 
  public get outside() {
    return this.getNumberAttribute('outside');
  }
  public set outside(value: number) {
    this._outside = value;
  }
  public resetOutside() {
    this._outside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideInput() {
    return this._outside;
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
export interface InterfaceEthernetIcmpRateLimit {
  /**
  * Enter lockup state when ICMP rate exceeds lockup rate limit (Maximum rate limit. If exceeds this limit, drop all ICMP packet for a time period)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#lockup InterfaceEthernet#lockup}
  */
  readonly lockup?: number;
  /**
  * Lockup period (second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#lockup_period InterfaceEthernet#lockup_period}
  */
  readonly lockupPeriod?: number;
  /**
  * Normal rate limit. If exceeds this limit, drop the ICMP packet that goes over the limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#normal InterfaceEthernet#normal}
  */
  readonly normal?: number;
}

export function interfaceEthernetIcmpRateLimitToTerraform(struct?: InterfaceEthernetIcmpRateLimitOutputReference | InterfaceEthernetIcmpRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lockup: cdktf.numberToTerraform(struct!.lockup),
    lockup_period: cdktf.numberToTerraform(struct!.lockupPeriod),
    normal: cdktf.numberToTerraform(struct!.normal),
  }
}


export function interfaceEthernetIcmpRateLimitToHclTerraform(struct?: InterfaceEthernetIcmpRateLimitOutputReference | InterfaceEthernetIcmpRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lockup: {
      value: cdktf.numberToHclTerraform(struct!.lockup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lockup_period: {
      value: cdktf.numberToHclTerraform(struct!.lockupPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    normal: {
      value: cdktf.numberToHclTerraform(struct!.normal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIcmpRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIcmpRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lockup !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockup = this._lockup;
    }
    if (this._lockupPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockupPeriod = this._lockupPeriod;
    }
    if (this._normal !== undefined) {
      hasAnyValues = true;
      internalValueResult.normal = this._normal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIcmpRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lockup = undefined;
      this._lockupPeriod = undefined;
      this._normal = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lockup = value.lockup;
      this._lockupPeriod = value.lockupPeriod;
      this._normal = value.normal;
    }
  }

  // lockup - computed: false, optional: true, required: false
  private _lockup?: number; 
  public get lockup() {
    return this.getNumberAttribute('lockup');
  }
  public set lockup(value: number) {
    this._lockup = value;
  }
  public resetLockup() {
    this._lockup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockupInput() {
    return this._lockup;
  }

  // lockup_period - computed: false, optional: true, required: false
  private _lockupPeriod?: number; 
  public get lockupPeriod() {
    return this.getNumberAttribute('lockup_period');
  }
  public set lockupPeriod(value: number) {
    this._lockupPeriod = value;
  }
  public resetLockupPeriod() {
    this._lockupPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockupPeriodInput() {
    return this._lockupPeriod;
  }

  // normal - computed: false, optional: true, required: false
  private _normal?: number; 
  public get normal() {
    return this.getNumberAttribute('normal');
  }
  public set normal(value: number) {
    this._normal = value;
  }
  public resetNormal() {
    this._normal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalInput() {
    return this._normal;
  }
}
export interface InterfaceEthernetIcmpv6RateLimit {
  /**
  * Lockup period (second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#lockup_period_v6 InterfaceEthernet#lockup_period_v6}
  */
  readonly lockupPeriodV6?: number;
  /**
  * Enter lockup state when ICMP rate exceeds lockup rate limit (Maximum rate limit. If exceeds this limit, drop all ICMP packet for a time period)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#lockup_v6 InterfaceEthernet#lockup_v6}
  */
  readonly lockupV6?: number;
  /**
  * Normal rate limit. If exceeds this limit, drop the ICMP packet that goes over the limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#normal_v6 InterfaceEthernet#normal_v6}
  */
  readonly normalV6?: number;
}

export function interfaceEthernetIcmpv6RateLimitToTerraform(struct?: InterfaceEthernetIcmpv6RateLimitOutputReference | InterfaceEthernetIcmpv6RateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lockup_period_v6: cdktf.numberToTerraform(struct!.lockupPeriodV6),
    lockup_v6: cdktf.numberToTerraform(struct!.lockupV6),
    normal_v6: cdktf.numberToTerraform(struct!.normalV6),
  }
}


export function interfaceEthernetIcmpv6RateLimitToHclTerraform(struct?: InterfaceEthernetIcmpv6RateLimitOutputReference | InterfaceEthernetIcmpv6RateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lockup_period_v6: {
      value: cdktf.numberToHclTerraform(struct!.lockupPeriodV6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lockup_v6: {
      value: cdktf.numberToHclTerraform(struct!.lockupV6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    normal_v6: {
      value: cdktf.numberToHclTerraform(struct!.normalV6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIcmpv6RateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIcmpv6RateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lockupPeriodV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockupPeriodV6 = this._lockupPeriodV6;
    }
    if (this._lockupV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockupV6 = this._lockupV6;
    }
    if (this._normalV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.normalV6 = this._normalV6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIcmpv6RateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lockupPeriodV6 = undefined;
      this._lockupV6 = undefined;
      this._normalV6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lockupPeriodV6 = value.lockupPeriodV6;
      this._lockupV6 = value.lockupV6;
      this._normalV6 = value.normalV6;
    }
  }

  // lockup_period_v6 - computed: false, optional: true, required: false
  private _lockupPeriodV6?: number; 
  public get lockupPeriodV6() {
    return this.getNumberAttribute('lockup_period_v6');
  }
  public set lockupPeriodV6(value: number) {
    this._lockupPeriodV6 = value;
  }
  public resetLockupPeriodV6() {
    this._lockupPeriodV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockupPeriodV6Input() {
    return this._lockupPeriodV6;
  }

  // lockup_v6 - computed: false, optional: true, required: false
  private _lockupV6?: number; 
  public get lockupV6() {
    return this.getNumberAttribute('lockup_v6');
  }
  public set lockupV6(value: number) {
    this._lockupV6 = value;
  }
  public resetLockupV6() {
    this._lockupV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockupV6Input() {
    return this._lockupV6;
  }

  // normal_v6 - computed: false, optional: true, required: false
  private _normalV6?: number; 
  public get normalV6() {
    return this.getNumberAttribute('normal_v6');
  }
  public set normalV6(value: number) {
    this._normalV6 = value;
  }
  public resetNormalV6() {
    this._normalV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalV6Input() {
    return this._normalV6;
  }
}
export interface InterfaceEthernetIpAddressListStruct {
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#ipv4_address InterfaceEthernet#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * IP subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#ipv4_netmask InterfaceEthernet#ipv4_netmask}
  */
  readonly ipv4Netmask?: string;
}

export function interfaceEthernetIpAddressListStructToTerraform(struct?: InterfaceEthernetIpAddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_netmask: cdktf.stringToTerraform(struct!.ipv4Netmask),
  }
}


export function interfaceEthernetIpAddressListStructToHclTerraform(struct?: InterfaceEthernetIpAddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_netmask: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpAddressListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIpAddressListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv4Netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Netmask = this._ipv4Netmask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpAddressListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Address = undefined;
      this._ipv4Netmask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Address = value.ipv4Address;
      this._ipv4Netmask = value.ipv4Netmask;
    }
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
}

export class InterfaceEthernetIpAddressListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIpAddressListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIpAddressListStructOutputReference {
    return new InterfaceEthernetIpAddressListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIpHelperAddressListStruct {
  /**
  * Helper address for DHCP packets (IP address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#helper_address InterfaceEthernet#helper_address}
  */
  readonly helperAddress?: string;
}

export function interfaceEthernetIpHelperAddressListStructToTerraform(struct?: InterfaceEthernetIpHelperAddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    helper_address: cdktf.stringToTerraform(struct!.helperAddress),
  }
}


export function interfaceEthernetIpHelperAddressListStructToHclTerraform(struct?: InterfaceEthernetIpHelperAddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    helper_address: {
      value: cdktf.stringToHclTerraform(struct!.helperAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpHelperAddressListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIpHelperAddressListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._helperAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.helperAddress = this._helperAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpHelperAddressListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._helperAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._helperAddress = value.helperAddress;
    }
  }

  // helper_address - computed: false, optional: true, required: false
  private _helperAddress?: string; 
  public get helperAddress() {
    return this.getStringAttribute('helper_address');
  }
  public set helperAddress(value: string) {
    this._helperAddress = value;
  }
  public resetHelperAddress() {
    this._helperAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helperAddressInput() {
    return this._helperAddress;
  }
}

export class InterfaceEthernetIpHelperAddressListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIpHelperAddressListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIpHelperAddressListStructOutputReference {
    return new InterfaceEthernetIpHelperAddressListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIpOspfOspfGlobalAuthenticationCfg {
  /**
  * Enable authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#authentication InterfaceEthernet#authentication}
  */
  readonly authentication?: number;
  /**
  * 'message-digest': Use message-digest authentication; 'null': Use no authentication;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#value InterfaceEthernet#value}
  */
  readonly value?: string;
}

export function interfaceEthernetIpOspfOspfGlobalAuthenticationCfgToTerraform(struct?: InterfaceEthernetIpOspfOspfGlobalAuthenticationCfgOutputReference | InterfaceEthernetIpOspfOspfGlobalAuthenticationCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.numberToTerraform(struct!.authentication),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function interfaceEthernetIpOspfOspfGlobalAuthenticationCfgToHclTerraform(struct?: InterfaceEthernetIpOspfOspfGlobalAuthenticationCfgOutputReference | InterfaceEthernetIpOspfOspfGlobalAuthenticationCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: cdktf.numberToHclTerraform(struct!.authentication),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpOspfOspfGlobalAuthenticationCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpOspfOspfGlobalAuthenticationCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpOspfOspfGlobalAuthenticationCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authentication = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authentication = value.authentication;
      this._value = value.value;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication?: number; 
  public get authentication() {
    return this.getNumberAttribute('authentication');
  }
  public set authentication(value: number) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface InterfaceEthernetIpOspfOspfGlobalBfdCfg {
  /**
  * Bidirectional Forwarding Detection (BFD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#bfd InterfaceEthernet#bfd}
  */
  readonly bfd?: number;
  /**
  * Disable BFD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#disable InterfaceEthernet#disable}
  */
  readonly disable?: number;
}

export function interfaceEthernetIpOspfOspfGlobalBfdCfgToTerraform(struct?: InterfaceEthernetIpOspfOspfGlobalBfdCfgOutputReference | InterfaceEthernetIpOspfOspfGlobalBfdCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bfd: cdktf.numberToTerraform(struct!.bfd),
    disable: cdktf.numberToTerraform(struct!.disable),
  }
}


export function interfaceEthernetIpOspfOspfGlobalBfdCfgToHclTerraform(struct?: InterfaceEthernetIpOspfOspfGlobalBfdCfgOutputReference | InterfaceEthernetIpOspfOspfGlobalBfdCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bfd: {
      value: cdktf.numberToHclTerraform(struct!.bfd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable: {
      value: cdktf.numberToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpOspfOspfGlobalBfdCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpOspfOspfGlobalBfdCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bfd !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfd = this._bfd;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpOspfOspfGlobalBfdCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bfd = undefined;
      this._disable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bfd = value.bfd;
      this._disable = value.disable;
    }
  }

  // bfd - computed: false, optional: true, required: false
  private _bfd?: number; 
  public get bfd() {
    return this.getNumberAttribute('bfd');
  }
  public set bfd(value: number) {
    this._bfd = value;
  }
  public resetBfd() {
    this._bfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }
}
export interface InterfaceEthernetIpOspfOspfGlobalDatabaseFilterCfg {
  /**
  * 'all': Filter all LSA;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#database_filter InterfaceEthernet#database_filter}
  */
  readonly databaseFilter?: string;
  /**
  * Outgoing LSA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#out InterfaceEthernet#out}
  */
  readonly out?: number;
}

export function interfaceEthernetIpOspfOspfGlobalDatabaseFilterCfgToTerraform(struct?: InterfaceEthernetIpOspfOspfGlobalDatabaseFilterCfgOutputReference | InterfaceEthernetIpOspfOspfGlobalDatabaseFilterCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_filter: cdktf.stringToTerraform(struct!.databaseFilter),
    out: cdktf.numberToTerraform(struct!.out),
  }
}


export function interfaceEthernetIpOspfOspfGlobalDatabaseFilterCfgToHclTerraform(struct?: InterfaceEthernetIpOspfOspfGlobalDatabaseFilterCfgOutputReference | InterfaceEthernetIpOspfOspfGlobalDatabaseFilterCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_filter: {
      value: cdktf.stringToHclTerraform(struct!.databaseFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    out: {
      value: cdktf.numberToHclTerraform(struct!.out),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpOspfOspfGlobalDatabaseFilterCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpOspfOspfGlobalDatabaseFilterCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseFilter = this._databaseFilter;
    }
    if (this._out !== undefined) {
      hasAnyValues = true;
      internalValueResult.out = this._out;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpOspfOspfGlobalDatabaseFilterCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databaseFilter = undefined;
      this._out = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databaseFilter = value.databaseFilter;
      this._out = value.out;
    }
  }

  // database_filter - computed: false, optional: true, required: false
  private _databaseFilter?: string; 
  public get databaseFilter() {
    return this.getStringAttribute('database_filter');
  }
  public set databaseFilter(value: string) {
    this._databaseFilter = value;
  }
  public resetDatabaseFilter() {
    this._databaseFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseFilterInput() {
    return this._databaseFilter;
  }

  // out - computed: false, optional: true, required: false
  private _out?: number; 
  public get out() {
    return this.getNumberAttribute('out');
  }
  public set out(value: number) {
    this._out = value;
  }
  public resetOut() {
    this._out = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outInput() {
    return this._out;
  }
}
export interface InterfaceEthernetIpOspfOspfGlobalMessageDigestCfgMd5 {
  /**
  * The OSPF password (1-16)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#md5_value InterfaceEthernet#md5_value}
  */
  readonly md5Value?: string;
}

export function interfaceEthernetIpOspfOspfGlobalMessageDigestCfgMd5ToTerraform(struct?: InterfaceEthernetIpOspfOspfGlobalMessageDigestCfgMd5OutputReference | InterfaceEthernetIpOspfOspfGlobalMessageDigestCfgMd5): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    md5_value: cdktf.stringToTerraform(struct!.md5Value),
  }
}


export function interfaceEthernetIpOspfOspfGlobalMessageDigestCfgMd5ToHclTerraform(struct?: InterfaceEthernetIpOspfOspfGlobalMessageDigestCfgMd5OutputReference | InterfaceEthernetIpOspfOspfGlobalMessageDigestCfgMd5): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    md5_value: {
      value: cdktf.stringToHclTerraform(struct!.md5Value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpOspfOspfGlobalMessageDigestCfgMd5OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpOspfOspfGlobalMessageDigestCfgMd5 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._md5Value !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5Value = this._md5Value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpOspfOspfGlobalMessageDigestCfgMd5 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._md5Value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._md5Value = value.md5Value;
    }
  }

  // md5_value - computed: false, optional: true, required: false
  private _md5Value?: string; 
  public get md5Value() {
    return this.getStringAttribute('md5_value');
  }
  public set md5Value(value: string) {
    this._md5Value = value;
  }
  public resetMd5Value() {
    this._md5Value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5ValueInput() {
    return this._md5Value;
  }
}
export interface InterfaceEthernetIpOspfOspfGlobalMessageDigestCfg {
  /**
  * Message digest authentication password (key) (Key id)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#message_digest_key InterfaceEthernet#message_digest_key}
  */
  readonly messageDigestKey?: number;
  /**
  * md5 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#md5 InterfaceEthernet#md5}
  */
  readonly md5?: InterfaceEthernetIpOspfOspfGlobalMessageDigestCfgMd5;
}

export function interfaceEthernetIpOspfOspfGlobalMessageDigestCfgToTerraform(struct?: InterfaceEthernetIpOspfOspfGlobalMessageDigestCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message_digest_key: cdktf.numberToTerraform(struct!.messageDigestKey),
    md5: interfaceEthernetIpOspfOspfGlobalMessageDigestCfgMd5ToTerraform(struct!.md5),
  }
}


export function interfaceEthernetIpOspfOspfGlobalMessageDigestCfgToHclTerraform(struct?: InterfaceEthernetIpOspfOspfGlobalMessageDigestCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message_digest_key: {
      value: cdktf.numberToHclTerraform(struct!.messageDigestKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    md5: {
      value: interfaceEthernetIpOspfOspfGlobalMessageDigestCfgMd5ToHclTerraform(struct!.md5),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpOspfOspfGlobalMessageDigestCfgMd5List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpOspfOspfGlobalMessageDigestCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIpOspfOspfGlobalMessageDigestCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messageDigestKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageDigestKey = this._messageDigestKey;
    }
    if (this._md5?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5 = this._md5?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpOspfOspfGlobalMessageDigestCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._messageDigestKey = undefined;
      this._md5.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._messageDigestKey = value.messageDigestKey;
      this._md5.internalValue = value.md5;
    }
  }

  // message_digest_key - computed: false, optional: true, required: false
  private _messageDigestKey?: number; 
  public get messageDigestKey() {
    return this.getNumberAttribute('message_digest_key');
  }
  public set messageDigestKey(value: number) {
    this._messageDigestKey = value;
  }
  public resetMessageDigestKey() {
    this._messageDigestKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageDigestKeyInput() {
    return this._messageDigestKey;
  }

  // md5 - computed: false, optional: true, required: false
  private _md5 = new InterfaceEthernetIpOspfOspfGlobalMessageDigestCfgMd5OutputReference(this, "md5");
  public get md5() {
    return this._md5;
  }
  public putMd5(value: InterfaceEthernetIpOspfOspfGlobalMessageDigestCfgMd5) {
    this._md5.internalValue = value;
  }
  public resetMd5() {
    this._md5.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5Input() {
    return this._md5.internalValue;
  }
}

export class InterfaceEthernetIpOspfOspfGlobalMessageDigestCfgList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIpOspfOspfGlobalMessageDigestCfg[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIpOspfOspfGlobalMessageDigestCfgOutputReference {
    return new InterfaceEthernetIpOspfOspfGlobalMessageDigestCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIpOspfOspfGlobalNetwork {
  /**
  * Specify OSPF broadcast multi-access network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#broadcast InterfaceEthernet#broadcast}
  */
  readonly broadcast?: number;
  /**
  * Specify OSPF NBMA network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#non_broadcast InterfaceEthernet#non_broadcast}
  */
  readonly nonBroadcast?: number;
  /**
  * Specify non-broadcast point-to-multipoint network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#p2mp_nbma InterfaceEthernet#p2mp_nbma}
  */
  readonly p2MpNbma?: number;
  /**
  * Specify OSPF point-to-multipoint network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#point_to_multipoint InterfaceEthernet#point_to_multipoint}
  */
  readonly pointToMultipoint?: number;
  /**
  * Specify OSPF point-to-point network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#point_to_point InterfaceEthernet#point_to_point}
  */
  readonly pointToPoint?: number;
}

export function interfaceEthernetIpOspfOspfGlobalNetworkToTerraform(struct?: InterfaceEthernetIpOspfOspfGlobalNetworkOutputReference | InterfaceEthernetIpOspfOspfGlobalNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    broadcast: cdktf.numberToTerraform(struct!.broadcast),
    non_broadcast: cdktf.numberToTerraform(struct!.nonBroadcast),
    p2mp_nbma: cdktf.numberToTerraform(struct!.p2MpNbma),
    point_to_multipoint: cdktf.numberToTerraform(struct!.pointToMultipoint),
    point_to_point: cdktf.numberToTerraform(struct!.pointToPoint),
  }
}


export function interfaceEthernetIpOspfOspfGlobalNetworkToHclTerraform(struct?: InterfaceEthernetIpOspfOspfGlobalNetworkOutputReference | InterfaceEthernetIpOspfOspfGlobalNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    broadcast: {
      value: cdktf.numberToHclTerraform(struct!.broadcast),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    non_broadcast: {
      value: cdktf.numberToHclTerraform(struct!.nonBroadcast),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    p2mp_nbma: {
      value: cdktf.numberToHclTerraform(struct!.p2MpNbma),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    point_to_multipoint: {
      value: cdktf.numberToHclTerraform(struct!.pointToMultipoint),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    point_to_point: {
      value: cdktf.numberToHclTerraform(struct!.pointToPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpOspfOspfGlobalNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpOspfOspfGlobalNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._broadcast !== undefined) {
      hasAnyValues = true;
      internalValueResult.broadcast = this._broadcast;
    }
    if (this._nonBroadcast !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonBroadcast = this._nonBroadcast;
    }
    if (this._p2MpNbma !== undefined) {
      hasAnyValues = true;
      internalValueResult.p2MpNbma = this._p2MpNbma;
    }
    if (this._pointToMultipoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.pointToMultipoint = this._pointToMultipoint;
    }
    if (this._pointToPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.pointToPoint = this._pointToPoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpOspfOspfGlobalNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._broadcast = undefined;
      this._nonBroadcast = undefined;
      this._p2MpNbma = undefined;
      this._pointToMultipoint = undefined;
      this._pointToPoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._broadcast = value.broadcast;
      this._nonBroadcast = value.nonBroadcast;
      this._p2MpNbma = value.p2MpNbma;
      this._pointToMultipoint = value.pointToMultipoint;
      this._pointToPoint = value.pointToPoint;
    }
  }

  // broadcast - computed: false, optional: true, required: false
  private _broadcast?: number; 
  public get broadcast() {
    return this.getNumberAttribute('broadcast');
  }
  public set broadcast(value: number) {
    this._broadcast = value;
  }
  public resetBroadcast() {
    this._broadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastInput() {
    return this._broadcast;
  }

  // non_broadcast - computed: false, optional: true, required: false
  private _nonBroadcast?: number; 
  public get nonBroadcast() {
    return this.getNumberAttribute('non_broadcast');
  }
  public set nonBroadcast(value: number) {
    this._nonBroadcast = value;
  }
  public resetNonBroadcast() {
    this._nonBroadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonBroadcastInput() {
    return this._nonBroadcast;
  }

  // p2mp_nbma - computed: false, optional: true, required: false
  private _p2MpNbma?: number; 
  public get p2MpNbma() {
    return this.getNumberAttribute('p2mp_nbma');
  }
  public set p2MpNbma(value: number) {
    this._p2MpNbma = value;
  }
  public resetP2MpNbma() {
    this._p2MpNbma = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p2MpNbmaInput() {
    return this._p2MpNbma;
  }

  // point_to_multipoint - computed: false, optional: true, required: false
  private _pointToMultipoint?: number; 
  public get pointToMultipoint() {
    return this.getNumberAttribute('point_to_multipoint');
  }
  public set pointToMultipoint(value: number) {
    this._pointToMultipoint = value;
  }
  public resetPointToMultipoint() {
    this._pointToMultipoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointToMultipointInput() {
    return this._pointToMultipoint;
  }

  // point_to_point - computed: false, optional: true, required: false
  private _pointToPoint?: number; 
  public get pointToPoint() {
    return this.getNumberAttribute('point_to_point');
  }
  public set pointToPoint(value: number) {
    this._pointToPoint = value;
  }
  public resetPointToPoint() {
    this._pointToPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointToPointInput() {
    return this._pointToPoint;
  }
}
export interface InterfaceEthernetIpOspfOspfGlobal {
  /**
  * Authentication password (key) (The OSPF password (key))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#authentication_key InterfaceEthernet#authentication_key}
  */
  readonly authenticationKey?: string;
  /**
  * Interface cost
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#cost InterfaceEthernet#cost}
  */
  readonly cost?: number;
  /**
  * Interval after which a neighbor is declared dead (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#dead_interval InterfaceEthernet#dead_interval}
  */
  readonly deadInterval?: number;
  /**
  * 'all': All functionality;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#disable InterfaceEthernet#disable}
  */
  readonly disable?: string;
  /**
  * Time between HELLO packets (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#hello_interval InterfaceEthernet#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * OSPF interface MTU (MTU size)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#mtu InterfaceEthernet#mtu}
  */
  readonly mtu?: number;
  /**
  * Ignores the MTU in DBD packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#mtu_ignore InterfaceEthernet#mtu_ignore}
  */
  readonly mtuIgnore?: number;
  /**
  * Router priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#priority InterfaceEthernet#priority}
  */
  readonly priority?: number;
  /**
  * Time between retransmitting lost link state advertisements (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#retransmit_interval InterfaceEthernet#retransmit_interval}
  */
  readonly retransmitInterval?: number;
  /**
  * Link state transmit delay (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#transmit_delay InterfaceEthernet#transmit_delay}
  */
  readonly transmitDelay?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#uuid InterfaceEthernet#uuid}
  */
  readonly uuid?: string;
  /**
  * authentication_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#authentication_cfg InterfaceEthernet#authentication_cfg}
  */
  readonly authenticationCfg?: InterfaceEthernetIpOspfOspfGlobalAuthenticationCfg;
  /**
  * bfd_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#bfd_cfg InterfaceEthernet#bfd_cfg}
  */
  readonly bfdCfg?: InterfaceEthernetIpOspfOspfGlobalBfdCfg;
  /**
  * database_filter_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#database_filter_cfg InterfaceEthernet#database_filter_cfg}
  */
  readonly databaseFilterCfg?: InterfaceEthernetIpOspfOspfGlobalDatabaseFilterCfg;
  /**
  * message_digest_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#message_digest_cfg InterfaceEthernet#message_digest_cfg}
  */
  readonly messageDigestCfg?: InterfaceEthernetIpOspfOspfGlobalMessageDigestCfg[] | cdktf.IResolvable;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#network InterfaceEthernet#network}
  */
  readonly network?: InterfaceEthernetIpOspfOspfGlobalNetwork;
}

export function interfaceEthernetIpOspfOspfGlobalToTerraform(struct?: InterfaceEthernetIpOspfOspfGlobalOutputReference | InterfaceEthernetIpOspfOspfGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_key: cdktf.stringToTerraform(struct!.authenticationKey),
    cost: cdktf.numberToTerraform(struct!.cost),
    dead_interval: cdktf.numberToTerraform(struct!.deadInterval),
    disable: cdktf.stringToTerraform(struct!.disable),
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    mtu_ignore: cdktf.numberToTerraform(struct!.mtuIgnore),
    priority: cdktf.numberToTerraform(struct!.priority),
    retransmit_interval: cdktf.numberToTerraform(struct!.retransmitInterval),
    transmit_delay: cdktf.numberToTerraform(struct!.transmitDelay),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    authentication_cfg: interfaceEthernetIpOspfOspfGlobalAuthenticationCfgToTerraform(struct!.authenticationCfg),
    bfd_cfg: interfaceEthernetIpOspfOspfGlobalBfdCfgToTerraform(struct!.bfdCfg),
    database_filter_cfg: interfaceEthernetIpOspfOspfGlobalDatabaseFilterCfgToTerraform(struct!.databaseFilterCfg),
    message_digest_cfg: cdktf.listMapper(interfaceEthernetIpOspfOspfGlobalMessageDigestCfgToTerraform, true)(struct!.messageDigestCfg),
    network: interfaceEthernetIpOspfOspfGlobalNetworkToTerraform(struct!.network),
  }
}


export function interfaceEthernetIpOspfOspfGlobalToHclTerraform(struct?: InterfaceEthernetIpOspfOspfGlobalOutputReference | InterfaceEthernetIpOspfOspfGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_key: {
      value: cdktf.stringToHclTerraform(struct!.authenticationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cost: {
      value: cdktf.numberToHclTerraform(struct!.cost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dead_interval: {
      value: cdktf.numberToHclTerraform(struct!.deadInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable: {
      value: cdktf.stringToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hello_interval: {
      value: cdktf.numberToHclTerraform(struct!.helloInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mtu_ignore: {
      value: cdktf.numberToHclTerraform(struct!.mtuIgnore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retransmit_interval: {
      value: cdktf.numberToHclTerraform(struct!.retransmitInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transmit_delay: {
      value: cdktf.numberToHclTerraform(struct!.transmitDelay),
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
    authentication_cfg: {
      value: interfaceEthernetIpOspfOspfGlobalAuthenticationCfgToHclTerraform(struct!.authenticationCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpOspfOspfGlobalAuthenticationCfgList",
    },
    bfd_cfg: {
      value: interfaceEthernetIpOspfOspfGlobalBfdCfgToHclTerraform(struct!.bfdCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpOspfOspfGlobalBfdCfgList",
    },
    database_filter_cfg: {
      value: interfaceEthernetIpOspfOspfGlobalDatabaseFilterCfgToHclTerraform(struct!.databaseFilterCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpOspfOspfGlobalDatabaseFilterCfgList",
    },
    message_digest_cfg: {
      value: cdktf.listMapperHcl(interfaceEthernetIpOspfOspfGlobalMessageDigestCfgToHclTerraform, true)(struct!.messageDigestCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpOspfOspfGlobalMessageDigestCfgList",
    },
    network: {
      value: interfaceEthernetIpOspfOspfGlobalNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpOspfOspfGlobalNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpOspfOspfGlobalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpOspfOspfGlobal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationKey = this._authenticationKey;
    }
    if (this._cost !== undefined) {
      hasAnyValues = true;
      internalValueResult.cost = this._cost;
    }
    if (this._deadInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadInterval = this._deadInterval;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._helloInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloInterval = this._helloInterval;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._mtuIgnore !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtuIgnore = this._mtuIgnore;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._retransmitInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitInterval = this._retransmitInterval;
    }
    if (this._transmitDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitDelay = this._transmitDelay;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._authenticationCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationCfg = this._authenticationCfg?.internalValue;
    }
    if (this._bfdCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdCfg = this._bfdCfg?.internalValue;
    }
    if (this._databaseFilterCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseFilterCfg = this._databaseFilterCfg?.internalValue;
    }
    if (this._messageDigestCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageDigestCfg = this._messageDigestCfg?.internalValue;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpOspfOspfGlobal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationKey = undefined;
      this._cost = undefined;
      this._deadInterval = undefined;
      this._disable = undefined;
      this._helloInterval = undefined;
      this._mtu = undefined;
      this._mtuIgnore = undefined;
      this._priority = undefined;
      this._retransmitInterval = undefined;
      this._transmitDelay = undefined;
      this._uuid = undefined;
      this._authenticationCfg.internalValue = undefined;
      this._bfdCfg.internalValue = undefined;
      this._databaseFilterCfg.internalValue = undefined;
      this._messageDigestCfg.internalValue = undefined;
      this._network.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationKey = value.authenticationKey;
      this._cost = value.cost;
      this._deadInterval = value.deadInterval;
      this._disable = value.disable;
      this._helloInterval = value.helloInterval;
      this._mtu = value.mtu;
      this._mtuIgnore = value.mtuIgnore;
      this._priority = value.priority;
      this._retransmitInterval = value.retransmitInterval;
      this._transmitDelay = value.transmitDelay;
      this._uuid = value.uuid;
      this._authenticationCfg.internalValue = value.authenticationCfg;
      this._bfdCfg.internalValue = value.bfdCfg;
      this._databaseFilterCfg.internalValue = value.databaseFilterCfg;
      this._messageDigestCfg.internalValue = value.messageDigestCfg;
      this._network.internalValue = value.network;
    }
  }

  // authentication_key - computed: false, optional: true, required: false
  private _authenticationKey?: string; 
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }
  public set authenticationKey(value: string) {
    this._authenticationKey = value;
  }
  public resetAuthenticationKey() {
    this._authenticationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyInput() {
    return this._authenticationKey;
  }

  // cost - computed: false, optional: true, required: false
  private _cost?: number; 
  public get cost() {
    return this.getNumberAttribute('cost');
  }
  public set cost(value: number) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
  }

  // dead_interval - computed: false, optional: true, required: false
  private _deadInterval?: number; 
  public get deadInterval() {
    return this.getNumberAttribute('dead_interval');
  }
  public set deadInterval(value: number) {
    this._deadInterval = value;
  }
  public resetDeadInterval() {
    this._deadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadIntervalInput() {
    return this._deadInterval;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: string; 
  public get disable() {
    return this.getStringAttribute('disable');
  }
  public set disable(value: string) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // hello_interval - computed: false, optional: true, required: false
  private _helloInterval?: number; 
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }
  public set helloInterval(value: number) {
    this._helloInterval = value;
  }
  public resetHelloInterval() {
    this._helloInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalInput() {
    return this._helloInterval;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // mtu_ignore - computed: false, optional: true, required: false
  private _mtuIgnore?: number; 
  public get mtuIgnore() {
    return this.getNumberAttribute('mtu_ignore');
  }
  public set mtuIgnore(value: number) {
    this._mtuIgnore = value;
  }
  public resetMtuIgnore() {
    this._mtuIgnore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuIgnoreInput() {
    return this._mtuIgnore;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // retransmit_interval - computed: false, optional: true, required: false
  private _retransmitInterval?: number; 
  public get retransmitInterval() {
    return this.getNumberAttribute('retransmit_interval');
  }
  public set retransmitInterval(value: number) {
    this._retransmitInterval = value;
  }
  public resetRetransmitInterval() {
    this._retransmitInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitIntervalInput() {
    return this._retransmitInterval;
  }

  // transmit_delay - computed: false, optional: true, required: false
  private _transmitDelay?: number; 
  public get transmitDelay() {
    return this.getNumberAttribute('transmit_delay');
  }
  public set transmitDelay(value: number) {
    this._transmitDelay = value;
  }
  public resetTransmitDelay() {
    this._transmitDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitDelayInput() {
    return this._transmitDelay;
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

  // authentication_cfg - computed: false, optional: true, required: false
  private _authenticationCfg = new InterfaceEthernetIpOspfOspfGlobalAuthenticationCfgOutputReference(this, "authentication_cfg");
  public get authenticationCfg() {
    return this._authenticationCfg;
  }
  public putAuthenticationCfg(value: InterfaceEthernetIpOspfOspfGlobalAuthenticationCfg) {
    this._authenticationCfg.internalValue = value;
  }
  public resetAuthenticationCfg() {
    this._authenticationCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationCfgInput() {
    return this._authenticationCfg.internalValue;
  }

  // bfd_cfg - computed: false, optional: true, required: false
  private _bfdCfg = new InterfaceEthernetIpOspfOspfGlobalBfdCfgOutputReference(this, "bfd_cfg");
  public get bfdCfg() {
    return this._bfdCfg;
  }
  public putBfdCfg(value: InterfaceEthernetIpOspfOspfGlobalBfdCfg) {
    this._bfdCfg.internalValue = value;
  }
  public resetBfdCfg() {
    this._bfdCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdCfgInput() {
    return this._bfdCfg.internalValue;
  }

  // database_filter_cfg - computed: false, optional: true, required: false
  private _databaseFilterCfg = new InterfaceEthernetIpOspfOspfGlobalDatabaseFilterCfgOutputReference(this, "database_filter_cfg");
  public get databaseFilterCfg() {
    return this._databaseFilterCfg;
  }
  public putDatabaseFilterCfg(value: InterfaceEthernetIpOspfOspfGlobalDatabaseFilterCfg) {
    this._databaseFilterCfg.internalValue = value;
  }
  public resetDatabaseFilterCfg() {
    this._databaseFilterCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseFilterCfgInput() {
    return this._databaseFilterCfg.internalValue;
  }

  // message_digest_cfg - computed: false, optional: true, required: false
  private _messageDigestCfg = new InterfaceEthernetIpOspfOspfGlobalMessageDigestCfgList(this, "message_digest_cfg", false);
  public get messageDigestCfg() {
    return this._messageDigestCfg;
  }
  public putMessageDigestCfg(value: InterfaceEthernetIpOspfOspfGlobalMessageDigestCfg[] | cdktf.IResolvable) {
    this._messageDigestCfg.internalValue = value;
  }
  public resetMessageDigestCfg() {
    this._messageDigestCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageDigestCfgInput() {
    return this._messageDigestCfg.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new InterfaceEthernetIpOspfOspfGlobalNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: InterfaceEthernetIpOspfOspfGlobalNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }
}
export interface InterfaceEthernetIpOspfOspfIpListMessageDigestCfg {
  /**
  * The OSPF password (1-16)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#md5_value InterfaceEthernet#md5_value}
  */
  readonly md5Value?: string;
  /**
  * Message digest authentication password (key) (Key id)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#message_digest_key InterfaceEthernet#message_digest_key}
  */
  readonly messageDigestKey?: number;
}

export function interfaceEthernetIpOspfOspfIpListMessageDigestCfgToTerraform(struct?: InterfaceEthernetIpOspfOspfIpListMessageDigestCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    md5_value: cdktf.stringToTerraform(struct!.md5Value),
    message_digest_key: cdktf.numberToTerraform(struct!.messageDigestKey),
  }
}


export function interfaceEthernetIpOspfOspfIpListMessageDigestCfgToHclTerraform(struct?: InterfaceEthernetIpOspfOspfIpListMessageDigestCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    md5_value: {
      value: cdktf.stringToHclTerraform(struct!.md5Value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_digest_key: {
      value: cdktf.numberToHclTerraform(struct!.messageDigestKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpOspfOspfIpListMessageDigestCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIpOspfOspfIpListMessageDigestCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._md5Value !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5Value = this._md5Value;
    }
    if (this._messageDigestKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageDigestKey = this._messageDigestKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpOspfOspfIpListMessageDigestCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._md5Value = undefined;
      this._messageDigestKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._md5Value = value.md5Value;
      this._messageDigestKey = value.messageDigestKey;
    }
  }

  // md5_value - computed: false, optional: true, required: false
  private _md5Value?: string; 
  public get md5Value() {
    return this.getStringAttribute('md5_value');
  }
  public set md5Value(value: string) {
    this._md5Value = value;
  }
  public resetMd5Value() {
    this._md5Value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5ValueInput() {
    return this._md5Value;
  }

  // message_digest_key - computed: false, optional: true, required: false
  private _messageDigestKey?: number; 
  public get messageDigestKey() {
    return this.getNumberAttribute('message_digest_key');
  }
  public set messageDigestKey(value: number) {
    this._messageDigestKey = value;
  }
  public resetMessageDigestKey() {
    this._messageDigestKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageDigestKeyInput() {
    return this._messageDigestKey;
  }
}

export class InterfaceEthernetIpOspfOspfIpListMessageDigestCfgList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIpOspfOspfIpListMessageDigestCfg[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIpOspfOspfIpListMessageDigestCfgOutputReference {
    return new InterfaceEthernetIpOspfOspfIpListMessageDigestCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIpOspfOspfIpListStruct {
  /**
  * Enable authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#authentication InterfaceEthernet#authentication}
  */
  readonly authentication?: number;
  /**
  * Authentication password (key) (The OSPF password (key))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#authentication_key InterfaceEthernet#authentication_key}
  */
  readonly authenticationKey?: string;
  /**
  * Interface cost
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#cost InterfaceEthernet#cost}
  */
  readonly cost?: number;
  /**
  * 'all': Filter all LSA;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#database_filter InterfaceEthernet#database_filter}
  */
  readonly databaseFilter?: string;
  /**
  * Interval after which a neighbor is declared dead (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#dead_interval InterfaceEthernet#dead_interval}
  */
  readonly deadInterval?: number;
  /**
  * Time between HELLO packets (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#hello_interval InterfaceEthernet#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * Address of interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#ip_addr InterfaceEthernet#ip_addr}
  */
  readonly ipAddr: string;
  /**
  * Ignores the MTU in DBD packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#mtu_ignore InterfaceEthernet#mtu_ignore}
  */
  readonly mtuIgnore?: number;
  /**
  * Outgoing LSA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#out InterfaceEthernet#out}
  */
  readonly out?: number;
  /**
  * Router priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#priority InterfaceEthernet#priority}
  */
  readonly priority?: number;
  /**
  * Time between retransmitting lost link state advertisements (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#retransmit_interval InterfaceEthernet#retransmit_interval}
  */
  readonly retransmitInterval?: number;
  /**
  * Link state transmit delay (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#transmit_delay InterfaceEthernet#transmit_delay}
  */
  readonly transmitDelay?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#uuid InterfaceEthernet#uuid}
  */
  readonly uuid?: string;
  /**
  * 'message-digest': Use message-digest authentication; 'null': Use no authentication;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#value InterfaceEthernet#value}
  */
  readonly value?: string;
  /**
  * message_digest_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#message_digest_cfg InterfaceEthernet#message_digest_cfg}
  */
  readonly messageDigestCfg?: InterfaceEthernetIpOspfOspfIpListMessageDigestCfg[] | cdktf.IResolvable;
}

export function interfaceEthernetIpOspfOspfIpListStructToTerraform(struct?: InterfaceEthernetIpOspfOspfIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.numberToTerraform(struct!.authentication),
    authentication_key: cdktf.stringToTerraform(struct!.authenticationKey),
    cost: cdktf.numberToTerraform(struct!.cost),
    database_filter: cdktf.stringToTerraform(struct!.databaseFilter),
    dead_interval: cdktf.numberToTerraform(struct!.deadInterval),
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    ip_addr: cdktf.stringToTerraform(struct!.ipAddr),
    mtu_ignore: cdktf.numberToTerraform(struct!.mtuIgnore),
    out: cdktf.numberToTerraform(struct!.out),
    priority: cdktf.numberToTerraform(struct!.priority),
    retransmit_interval: cdktf.numberToTerraform(struct!.retransmitInterval),
    transmit_delay: cdktf.numberToTerraform(struct!.transmitDelay),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    value: cdktf.stringToTerraform(struct!.value),
    message_digest_cfg: cdktf.listMapper(interfaceEthernetIpOspfOspfIpListMessageDigestCfgToTerraform, true)(struct!.messageDigestCfg),
  }
}


export function interfaceEthernetIpOspfOspfIpListStructToHclTerraform(struct?: InterfaceEthernetIpOspfOspfIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: cdktf.numberToHclTerraform(struct!.authentication),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authentication_key: {
      value: cdktf.stringToHclTerraform(struct!.authenticationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cost: {
      value: cdktf.numberToHclTerraform(struct!.cost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    database_filter: {
      value: cdktf.stringToHclTerraform(struct!.databaseFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dead_interval: {
      value: cdktf.numberToHclTerraform(struct!.deadInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hello_interval: {
      value: cdktf.numberToHclTerraform(struct!.helloInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtu_ignore: {
      value: cdktf.numberToHclTerraform(struct!.mtuIgnore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out: {
      value: cdktf.numberToHclTerraform(struct!.out),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retransmit_interval: {
      value: cdktf.numberToHclTerraform(struct!.retransmitInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transmit_delay: {
      value: cdktf.numberToHclTerraform(struct!.transmitDelay),
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_digest_cfg: {
      value: cdktf.listMapperHcl(interfaceEthernetIpOspfOspfIpListMessageDigestCfgToHclTerraform, true)(struct!.messageDigestCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpOspfOspfIpListMessageDigestCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpOspfOspfIpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIpOspfOspfIpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    if (this._authenticationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationKey = this._authenticationKey;
    }
    if (this._cost !== undefined) {
      hasAnyValues = true;
      internalValueResult.cost = this._cost;
    }
    if (this._databaseFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseFilter = this._databaseFilter;
    }
    if (this._deadInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadInterval = this._deadInterval;
    }
    if (this._helloInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloInterval = this._helloInterval;
    }
    if (this._ipAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr;
    }
    if (this._mtuIgnore !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtuIgnore = this._mtuIgnore;
    }
    if (this._out !== undefined) {
      hasAnyValues = true;
      internalValueResult.out = this._out;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._retransmitInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitInterval = this._retransmitInterval;
    }
    if (this._transmitDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitDelay = this._transmitDelay;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._messageDigestCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageDigestCfg = this._messageDigestCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpOspfOspfIpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication = undefined;
      this._authenticationKey = undefined;
      this._cost = undefined;
      this._databaseFilter = undefined;
      this._deadInterval = undefined;
      this._helloInterval = undefined;
      this._ipAddr = undefined;
      this._mtuIgnore = undefined;
      this._out = undefined;
      this._priority = undefined;
      this._retransmitInterval = undefined;
      this._transmitDelay = undefined;
      this._uuid = undefined;
      this._value = undefined;
      this._messageDigestCfg.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication = value.authentication;
      this._authenticationKey = value.authenticationKey;
      this._cost = value.cost;
      this._databaseFilter = value.databaseFilter;
      this._deadInterval = value.deadInterval;
      this._helloInterval = value.helloInterval;
      this._ipAddr = value.ipAddr;
      this._mtuIgnore = value.mtuIgnore;
      this._out = value.out;
      this._priority = value.priority;
      this._retransmitInterval = value.retransmitInterval;
      this._transmitDelay = value.transmitDelay;
      this._uuid = value.uuid;
      this._value = value.value;
      this._messageDigestCfg.internalValue = value.messageDigestCfg;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication?: number; 
  public get authentication() {
    return this.getNumberAttribute('authentication');
  }
  public set authentication(value: number) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // authentication_key - computed: false, optional: true, required: false
  private _authenticationKey?: string; 
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }
  public set authenticationKey(value: string) {
    this._authenticationKey = value;
  }
  public resetAuthenticationKey() {
    this._authenticationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyInput() {
    return this._authenticationKey;
  }

  // cost - computed: false, optional: true, required: false
  private _cost?: number; 
  public get cost() {
    return this.getNumberAttribute('cost');
  }
  public set cost(value: number) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
  }

  // database_filter - computed: false, optional: true, required: false
  private _databaseFilter?: string; 
  public get databaseFilter() {
    return this.getStringAttribute('database_filter');
  }
  public set databaseFilter(value: string) {
    this._databaseFilter = value;
  }
  public resetDatabaseFilter() {
    this._databaseFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseFilterInput() {
    return this._databaseFilter;
  }

  // dead_interval - computed: false, optional: true, required: false
  private _deadInterval?: number; 
  public get deadInterval() {
    return this.getNumberAttribute('dead_interval');
  }
  public set deadInterval(value: number) {
    this._deadInterval = value;
  }
  public resetDeadInterval() {
    this._deadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadIntervalInput() {
    return this._deadInterval;
  }

  // hello_interval - computed: false, optional: true, required: false
  private _helloInterval?: number; 
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }
  public set helloInterval(value: number) {
    this._helloInterval = value;
  }
  public resetHelloInterval() {
    this._helloInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalInput() {
    return this._helloInterval;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr?: string; 
  public get ipAddr() {
    return this.getStringAttribute('ip_addr');
  }
  public set ipAddr(value: string) {
    this._ipAddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr;
  }

  // mtu_ignore - computed: false, optional: true, required: false
  private _mtuIgnore?: number; 
  public get mtuIgnore() {
    return this.getNumberAttribute('mtu_ignore');
  }
  public set mtuIgnore(value: number) {
    this._mtuIgnore = value;
  }
  public resetMtuIgnore() {
    this._mtuIgnore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuIgnoreInput() {
    return this._mtuIgnore;
  }

  // out - computed: false, optional: true, required: false
  private _out?: number; 
  public get out() {
    return this.getNumberAttribute('out');
  }
  public set out(value: number) {
    this._out = value;
  }
  public resetOut() {
    this._out = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outInput() {
    return this._out;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // retransmit_interval - computed: false, optional: true, required: false
  private _retransmitInterval?: number; 
  public get retransmitInterval() {
    return this.getNumberAttribute('retransmit_interval');
  }
  public set retransmitInterval(value: number) {
    this._retransmitInterval = value;
  }
  public resetRetransmitInterval() {
    this._retransmitInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitIntervalInput() {
    return this._retransmitInterval;
  }

  // transmit_delay - computed: false, optional: true, required: false
  private _transmitDelay?: number; 
  public get transmitDelay() {
    return this.getNumberAttribute('transmit_delay');
  }
  public set transmitDelay(value: number) {
    this._transmitDelay = value;
  }
  public resetTransmitDelay() {
    this._transmitDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitDelayInput() {
    return this._transmitDelay;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // message_digest_cfg - computed: false, optional: true, required: false
  private _messageDigestCfg = new InterfaceEthernetIpOspfOspfIpListMessageDigestCfgList(this, "message_digest_cfg", false);
  public get messageDigestCfg() {
    return this._messageDigestCfg;
  }
  public putMessageDigestCfg(value: InterfaceEthernetIpOspfOspfIpListMessageDigestCfg[] | cdktf.IResolvable) {
    this._messageDigestCfg.internalValue = value;
  }
  public resetMessageDigestCfg() {
    this._messageDigestCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageDigestCfgInput() {
    return this._messageDigestCfg.internalValue;
  }
}

export class InterfaceEthernetIpOspfOspfIpListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIpOspfOspfIpListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIpOspfOspfIpListStructOutputReference {
    return new InterfaceEthernetIpOspfOspfIpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIpOspf {
  /**
  * ospf_global block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#ospf_global InterfaceEthernet#ospf_global}
  */
  readonly ospfGlobal?: InterfaceEthernetIpOspfOspfGlobal;
  /**
  * ospf_ip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#ospf_ip_list InterfaceEthernet#ospf_ip_list}
  */
  readonly ospfIpList?: InterfaceEthernetIpOspfOspfIpListStruct[] | cdktf.IResolvable;
}

export function interfaceEthernetIpOspfToTerraform(struct?: InterfaceEthernetIpOspfOutputReference | InterfaceEthernetIpOspf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ospf_global: interfaceEthernetIpOspfOspfGlobalToTerraform(struct!.ospfGlobal),
    ospf_ip_list: cdktf.listMapper(interfaceEthernetIpOspfOspfIpListStructToTerraform, true)(struct!.ospfIpList),
  }
}


export function interfaceEthernetIpOspfToHclTerraform(struct?: InterfaceEthernetIpOspfOutputReference | InterfaceEthernetIpOspf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ospf_global: {
      value: interfaceEthernetIpOspfOspfGlobalToHclTerraform(struct!.ospfGlobal),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpOspfOspfGlobalList",
    },
    ospf_ip_list: {
      value: cdktf.listMapperHcl(interfaceEthernetIpOspfOspfIpListStructToHclTerraform, true)(struct!.ospfIpList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpOspfOspfIpListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpOspfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpOspf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ospfGlobal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfGlobal = this._ospfGlobal?.internalValue;
    }
    if (this._ospfIpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfIpList = this._ospfIpList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpOspf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ospfGlobal.internalValue = undefined;
      this._ospfIpList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ospfGlobal.internalValue = value.ospfGlobal;
      this._ospfIpList.internalValue = value.ospfIpList;
    }
  }

  // ospf_global - computed: false, optional: true, required: false
  private _ospfGlobal = new InterfaceEthernetIpOspfOspfGlobalOutputReference(this, "ospf_global");
  public get ospfGlobal() {
    return this._ospfGlobal;
  }
  public putOspfGlobal(value: InterfaceEthernetIpOspfOspfGlobal) {
    this._ospfGlobal.internalValue = value;
  }
  public resetOspfGlobal() {
    this._ospfGlobal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfGlobalInput() {
    return this._ospfGlobal.internalValue;
  }

  // ospf_ip_list - computed: false, optional: true, required: false
  private _ospfIpList = new InterfaceEthernetIpOspfOspfIpListStructList(this, "ospf_ip_list", false);
  public get ospfIpList() {
    return this._ospfIpList;
  }
  public putOspfIpList(value: InterfaceEthernetIpOspfOspfIpListStruct[] | cdktf.IResolvable) {
    this._ospfIpList.internalValue = value;
  }
  public resetOspfIpList() {
    this._ospfIpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfIpListInput() {
    return this._ospfIpList.internalValue;
  }
}
export interface InterfaceEthernetIpRipAuthenticationKeyChain {
  /**
  * Authentication key-chain (Name of key-chain)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#key_chain InterfaceEthernet#key_chain}
  */
  readonly keyChain?: string;
}

export function interfaceEthernetIpRipAuthenticationKeyChainToTerraform(struct?: InterfaceEthernetIpRipAuthenticationKeyChainOutputReference | InterfaceEthernetIpRipAuthenticationKeyChain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_chain: cdktf.stringToTerraform(struct!.keyChain),
  }
}


export function interfaceEthernetIpRipAuthenticationKeyChainToHclTerraform(struct?: InterfaceEthernetIpRipAuthenticationKeyChainOutputReference | InterfaceEthernetIpRipAuthenticationKeyChain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_chain: {
      value: cdktf.stringToHclTerraform(struct!.keyChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpRipAuthenticationKeyChainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpRipAuthenticationKeyChain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyChain = this._keyChain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpRipAuthenticationKeyChain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyChain = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyChain = value.keyChain;
    }
  }

  // key_chain - computed: false, optional: true, required: false
  private _keyChain?: string; 
  public get keyChain() {
    return this.getStringAttribute('key_chain');
  }
  public set keyChain(value: string) {
    this._keyChain = value;
  }
  public resetKeyChain() {
    this._keyChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyChainInput() {
    return this._keyChain;
  }
}
export interface InterfaceEthernetIpRipAuthenticationMode {
  /**
  * 'md5': Keyed message digest; 'text': Clear text authentication;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#mode InterfaceEthernet#mode}
  */
  readonly mode?: string;
}

export function interfaceEthernetIpRipAuthenticationModeToTerraform(struct?: InterfaceEthernetIpRipAuthenticationModeOutputReference | InterfaceEthernetIpRipAuthenticationMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function interfaceEthernetIpRipAuthenticationModeToHclTerraform(struct?: InterfaceEthernetIpRipAuthenticationModeOutputReference | InterfaceEthernetIpRipAuthenticationMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpRipAuthenticationModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpRipAuthenticationMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpRipAuthenticationMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface InterfaceEthernetIpRipAuthenticationStr {
  /**
  * The RIP authentication string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#string InterfaceEthernet#string}
  */
  readonly string?: string;
}

export function interfaceEthernetIpRipAuthenticationStrToTerraform(struct?: InterfaceEthernetIpRipAuthenticationStrOutputReference | InterfaceEthernetIpRipAuthenticationStr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    string: cdktf.stringToTerraform(struct!.string),
  }
}


export function interfaceEthernetIpRipAuthenticationStrToHclTerraform(struct?: InterfaceEthernetIpRipAuthenticationStrOutputReference | InterfaceEthernetIpRipAuthenticationStr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    string: {
      value: cdktf.stringToHclTerraform(struct!.string),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpRipAuthenticationStrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpRipAuthenticationStr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._string !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpRipAuthenticationStr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._string = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._string = value.string;
    }
  }

  // string - computed: false, optional: true, required: false
  private _string?: string; 
  public get string() {
    return this.getStringAttribute('string');
  }
  public set string(value: string) {
    this._string = value;
  }
  public resetString() {
    this._string = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string;
  }
}
export interface InterfaceEthernetIpRipAuthentication {
  /**
  * key_chain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#key_chain InterfaceEthernet#key_chain}
  */
  readonly keyChain?: InterfaceEthernetIpRipAuthenticationKeyChain;
  /**
  * mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#mode InterfaceEthernet#mode}
  */
  readonly mode?: InterfaceEthernetIpRipAuthenticationMode;
  /**
  * str block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#str InterfaceEthernet#str}
  */
  readonly str?: InterfaceEthernetIpRipAuthenticationStr;
}

export function interfaceEthernetIpRipAuthenticationToTerraform(struct?: InterfaceEthernetIpRipAuthenticationOutputReference | InterfaceEthernetIpRipAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_chain: interfaceEthernetIpRipAuthenticationKeyChainToTerraform(struct!.keyChain),
    mode: interfaceEthernetIpRipAuthenticationModeToTerraform(struct!.mode),
    str: interfaceEthernetIpRipAuthenticationStrToTerraform(struct!.str),
  }
}


export function interfaceEthernetIpRipAuthenticationToHclTerraform(struct?: InterfaceEthernetIpRipAuthenticationOutputReference | InterfaceEthernetIpRipAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_chain: {
      value: interfaceEthernetIpRipAuthenticationKeyChainToHclTerraform(struct!.keyChain),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpRipAuthenticationKeyChainList",
    },
    mode: {
      value: interfaceEthernetIpRipAuthenticationModeToHclTerraform(struct!.mode),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpRipAuthenticationModeList",
    },
    str: {
      value: interfaceEthernetIpRipAuthenticationStrToHclTerraform(struct!.str),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpRipAuthenticationStrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpRipAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpRipAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyChain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyChain = this._keyChain?.internalValue;
    }
    if (this._mode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode?.internalValue;
    }
    if (this._str?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.str = this._str?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpRipAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyChain.internalValue = undefined;
      this._mode.internalValue = undefined;
      this._str.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyChain.internalValue = value.keyChain;
      this._mode.internalValue = value.mode;
      this._str.internalValue = value.str;
    }
  }

  // key_chain - computed: false, optional: true, required: false
  private _keyChain = new InterfaceEthernetIpRipAuthenticationKeyChainOutputReference(this, "key_chain");
  public get keyChain() {
    return this._keyChain;
  }
  public putKeyChain(value: InterfaceEthernetIpRipAuthenticationKeyChain) {
    this._keyChain.internalValue = value;
  }
  public resetKeyChain() {
    this._keyChain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyChainInput() {
    return this._keyChain.internalValue;
  }

  // mode - computed: false, optional: true, required: false
  private _mode = new InterfaceEthernetIpRipAuthenticationModeOutputReference(this, "mode");
  public get mode() {
    return this._mode;
  }
  public putMode(value: InterfaceEthernetIpRipAuthenticationMode) {
    this._mode.internalValue = value;
  }
  public resetMode() {
    this._mode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode.internalValue;
  }

  // str - computed: false, optional: true, required: false
  private _str = new InterfaceEthernetIpRipAuthenticationStrOutputReference(this, "str");
  public get str() {
    return this._str;
  }
  public putStr(value: InterfaceEthernetIpRipAuthenticationStr) {
    this._str.internalValue = value;
  }
  public resetStr() {
    this._str.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strInput() {
    return this._str.internalValue;
  }
}
export interface InterfaceEthernetIpRipReceiveCfg {
  /**
  * Advertisement reception
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#receive InterfaceEthernet#receive}
  */
  readonly receive?: number;
  /**
  * '1': RIP version 1; '2': RIP version 2; '1-2': RIP version 1 & 2;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#version InterfaceEthernet#version}
  */
  readonly version?: string;
}

export function interfaceEthernetIpRipReceiveCfgToTerraform(struct?: InterfaceEthernetIpRipReceiveCfgOutputReference | InterfaceEthernetIpRipReceiveCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    receive: cdktf.numberToTerraform(struct!.receive),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function interfaceEthernetIpRipReceiveCfgToHclTerraform(struct?: InterfaceEthernetIpRipReceiveCfgOutputReference | InterfaceEthernetIpRipReceiveCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    receive: {
      value: cdktf.numberToHclTerraform(struct!.receive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpRipReceiveCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpRipReceiveCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._receive !== undefined) {
      hasAnyValues = true;
      internalValueResult.receive = this._receive;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpRipReceiveCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._receive = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._receive = value.receive;
      this._version = value.version;
    }
  }

  // receive - computed: false, optional: true, required: false
  private _receive?: number; 
  public get receive() {
    return this.getNumberAttribute('receive');
  }
  public set receive(value: number) {
    this._receive = value;
  }
  public resetReceive() {
    this._receive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveInput() {
    return this._receive;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface InterfaceEthernetIpRipSendCfg {
  /**
  * Advertisement transmission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#send InterfaceEthernet#send}
  */
  readonly send?: number;
  /**
  * '1': RIP version 1; '2': RIP version 2; '1-compatible': RIPv1-compatible; '1-2': RIP version 1 & 2;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#version InterfaceEthernet#version}
  */
  readonly version?: string;
}

export function interfaceEthernetIpRipSendCfgToTerraform(struct?: InterfaceEthernetIpRipSendCfgOutputReference | InterfaceEthernetIpRipSendCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    send: cdktf.numberToTerraform(struct!.send),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function interfaceEthernetIpRipSendCfgToHclTerraform(struct?: InterfaceEthernetIpRipSendCfgOutputReference | InterfaceEthernetIpRipSendCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    send: {
      value: cdktf.numberToHclTerraform(struct!.send),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpRipSendCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpRipSendCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._send !== undefined) {
      hasAnyValues = true;
      internalValueResult.send = this._send;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpRipSendCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._send = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._send = value.send;
      this._version = value.version;
    }
  }

  // send - computed: false, optional: true, required: false
  private _send?: number; 
  public get send() {
    return this.getNumberAttribute('send');
  }
  public set send(value: number) {
    this._send = value;
  }
  public resetSend() {
    this._send = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendInput() {
    return this._send;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface InterfaceEthernetIpRipSplitHorizonCfg {
  /**
  * 'poisoned': Perform split horizon with poisoned reverse; 'disable': Disable split horizon; 'enable': Perform split horizon without poisoned reverse;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#state InterfaceEthernet#state}
  */
  readonly state?: string;
}

export function interfaceEthernetIpRipSplitHorizonCfgToTerraform(struct?: InterfaceEthernetIpRipSplitHorizonCfgOutputReference | InterfaceEthernetIpRipSplitHorizonCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function interfaceEthernetIpRipSplitHorizonCfgToHclTerraform(struct?: InterfaceEthernetIpRipSplitHorizonCfgOutputReference | InterfaceEthernetIpRipSplitHorizonCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpRipSplitHorizonCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpRipSplitHorizonCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpRipSplitHorizonCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._state = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._state = value.state;
    }
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface InterfaceEthernetIpRip {
  /**
  * Enable receiving packet through the specified interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#receive_packet InterfaceEthernet#receive_packet}
  */
  readonly receivePacket?: number;
  /**
  * Enable sending packets through the specified interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#send_packet InterfaceEthernet#send_packet}
  */
  readonly sendPacket?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#uuid InterfaceEthernet#uuid}
  */
  readonly uuid?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#authentication InterfaceEthernet#authentication}
  */
  readonly authentication?: InterfaceEthernetIpRipAuthentication;
  /**
  * receive_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#receive_cfg InterfaceEthernet#receive_cfg}
  */
  readonly receiveCfg?: InterfaceEthernetIpRipReceiveCfg;
  /**
  * send_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#send_cfg InterfaceEthernet#send_cfg}
  */
  readonly sendCfg?: InterfaceEthernetIpRipSendCfg;
  /**
  * split_horizon_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#split_horizon_cfg InterfaceEthernet#split_horizon_cfg}
  */
  readonly splitHorizonCfg?: InterfaceEthernetIpRipSplitHorizonCfg;
}

export function interfaceEthernetIpRipToTerraform(struct?: InterfaceEthernetIpRipOutputReference | InterfaceEthernetIpRip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    receive_packet: cdktf.numberToTerraform(struct!.receivePacket),
    send_packet: cdktf.numberToTerraform(struct!.sendPacket),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    authentication: interfaceEthernetIpRipAuthenticationToTerraform(struct!.authentication),
    receive_cfg: interfaceEthernetIpRipReceiveCfgToTerraform(struct!.receiveCfg),
    send_cfg: interfaceEthernetIpRipSendCfgToTerraform(struct!.sendCfg),
    split_horizon_cfg: interfaceEthernetIpRipSplitHorizonCfgToTerraform(struct!.splitHorizonCfg),
  }
}


export function interfaceEthernetIpRipToHclTerraform(struct?: InterfaceEthernetIpRipOutputReference | InterfaceEthernetIpRip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    receive_packet: {
      value: cdktf.numberToHclTerraform(struct!.receivePacket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_packet: {
      value: cdktf.numberToHclTerraform(struct!.sendPacket),
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
    authentication: {
      value: interfaceEthernetIpRipAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpRipAuthenticationList",
    },
    receive_cfg: {
      value: interfaceEthernetIpRipReceiveCfgToHclTerraform(struct!.receiveCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpRipReceiveCfgList",
    },
    send_cfg: {
      value: interfaceEthernetIpRipSendCfgToHclTerraform(struct!.sendCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpRipSendCfgList",
    },
    split_horizon_cfg: {
      value: interfaceEthernetIpRipSplitHorizonCfgToHclTerraform(struct!.splitHorizonCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpRipSplitHorizonCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpRipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpRip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._receivePacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.receivePacket = this._receivePacket;
    }
    if (this._sendPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendPacket = this._sendPacket;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._receiveCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiveCfg = this._receiveCfg?.internalValue;
    }
    if (this._sendCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendCfg = this._sendCfg?.internalValue;
    }
    if (this._splitHorizonCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitHorizonCfg = this._splitHorizonCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpRip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._receivePacket = undefined;
      this._sendPacket = undefined;
      this._uuid = undefined;
      this._authentication.internalValue = undefined;
      this._receiveCfg.internalValue = undefined;
      this._sendCfg.internalValue = undefined;
      this._splitHorizonCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._receivePacket = value.receivePacket;
      this._sendPacket = value.sendPacket;
      this._uuid = value.uuid;
      this._authentication.internalValue = value.authentication;
      this._receiveCfg.internalValue = value.receiveCfg;
      this._sendCfg.internalValue = value.sendCfg;
      this._splitHorizonCfg.internalValue = value.splitHorizonCfg;
    }
  }

  // receive_packet - computed: false, optional: true, required: false
  private _receivePacket?: number; 
  public get receivePacket() {
    return this.getNumberAttribute('receive_packet');
  }
  public set receivePacket(value: number) {
    this._receivePacket = value;
  }
  public resetReceivePacket() {
    this._receivePacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receivePacketInput() {
    return this._receivePacket;
  }

  // send_packet - computed: false, optional: true, required: false
  private _sendPacket?: number; 
  public get sendPacket() {
    return this.getNumberAttribute('send_packet');
  }
  public set sendPacket(value: number) {
    this._sendPacket = value;
  }
  public resetSendPacket() {
    this._sendPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendPacketInput() {
    return this._sendPacket;
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

  // authentication - computed: false, optional: true, required: false
  private _authentication = new InterfaceEthernetIpRipAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: InterfaceEthernetIpRipAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // receive_cfg - computed: false, optional: true, required: false
  private _receiveCfg = new InterfaceEthernetIpRipReceiveCfgOutputReference(this, "receive_cfg");
  public get receiveCfg() {
    return this._receiveCfg;
  }
  public putReceiveCfg(value: InterfaceEthernetIpRipReceiveCfg) {
    this._receiveCfg.internalValue = value;
  }
  public resetReceiveCfg() {
    this._receiveCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveCfgInput() {
    return this._receiveCfg.internalValue;
  }

  // send_cfg - computed: false, optional: true, required: false
  private _sendCfg = new InterfaceEthernetIpRipSendCfgOutputReference(this, "send_cfg");
  public get sendCfg() {
    return this._sendCfg;
  }
  public putSendCfg(value: InterfaceEthernetIpRipSendCfg) {
    this._sendCfg.internalValue = value;
  }
  public resetSendCfg() {
    this._sendCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCfgInput() {
    return this._sendCfg.internalValue;
  }

  // split_horizon_cfg - computed: false, optional: true, required: false
  private _splitHorizonCfg = new InterfaceEthernetIpRipSplitHorizonCfgOutputReference(this, "split_horizon_cfg");
  public get splitHorizonCfg() {
    return this._splitHorizonCfg;
  }
  public putSplitHorizonCfg(value: InterfaceEthernetIpRipSplitHorizonCfg) {
    this._splitHorizonCfg.internalValue = value;
  }
  public resetSplitHorizonCfg() {
    this._splitHorizonCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitHorizonCfgInput() {
    return this._splitHorizonCfg.internalValue;
  }
}
export interface InterfaceEthernetIpRouterIsis {
  /**
  * ISO routing area tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#tag InterfaceEthernet#tag}
  */
  readonly tag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#uuid InterfaceEthernet#uuid}
  */
  readonly uuid?: string;
}

export function interfaceEthernetIpRouterIsisToTerraform(struct?: InterfaceEthernetIpRouterIsisOutputReference | InterfaceEthernetIpRouterIsis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag: cdktf.stringToTerraform(struct!.tag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function interfaceEthernetIpRouterIsisToHclTerraform(struct?: InterfaceEthernetIpRouterIsisOutputReference | InterfaceEthernetIpRouterIsis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
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

export class InterfaceEthernetIpRouterIsisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpRouterIsis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpRouterIsis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tag = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tag = value.tag;
      this._uuid = value.uuid;
    }
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
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
export interface InterfaceEthernetIpRouter {
  /**
  * isis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#isis InterfaceEthernet#isis}
  */
  readonly isis?: InterfaceEthernetIpRouterIsis;
}

export function interfaceEthernetIpRouterToTerraform(struct?: InterfaceEthernetIpRouterOutputReference | InterfaceEthernetIpRouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    isis: interfaceEthernetIpRouterIsisToTerraform(struct!.isis),
  }
}


export function interfaceEthernetIpRouterToHclTerraform(struct?: InterfaceEthernetIpRouterOutputReference | InterfaceEthernetIpRouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    isis: {
      value: interfaceEthernetIpRouterIsisToHclTerraform(struct!.isis),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpRouterIsisList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpRouterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpRouter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.isis = this._isis?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpRouter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isis.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isis.internalValue = value.isis;
    }
  }

  // isis - computed: false, optional: true, required: false
  private _isis = new InterfaceEthernetIpRouterIsisOutputReference(this, "isis");
  public get isis() {
    return this._isis;
  }
  public putIsis(value: InterfaceEthernetIpRouterIsis) {
    this._isis.internalValue = value;
  }
  public resetIsis() {
    this._isis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisInput() {
    return this._isis.internalValue;
  }
}
export interface InterfaceEthernetIpStatefulFirewall {
  /**
  * Access-list for traffic from the outside
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#access_list InterfaceEthernet#access_list}
  */
  readonly accessList?: number;
  /**
  * ACL id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#acl_id InterfaceEthernet#acl_id}
  */
  readonly aclId?: number;
  /**
  * Class List (Class List Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#class_list InterfaceEthernet#class_list}
  */
  readonly classList?: string;
  /**
  * Inside (private) interface for stateful firewall
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#inside InterfaceEthernet#inside}
  */
  readonly inside?: number;
  /**
  * Outside (public) interface for stateful firewall
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#outside InterfaceEthernet#outside}
  */
  readonly outside?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#uuid InterfaceEthernet#uuid}
  */
  readonly uuid?: string;
}

export function interfaceEthernetIpStatefulFirewallToTerraform(struct?: InterfaceEthernetIpStatefulFirewallOutputReference | InterfaceEthernetIpStatefulFirewall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.numberToTerraform(struct!.accessList),
    acl_id: cdktf.numberToTerraform(struct!.aclId),
    class_list: cdktf.stringToTerraform(struct!.classList),
    inside: cdktf.numberToTerraform(struct!.inside),
    outside: cdktf.numberToTerraform(struct!.outside),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function interfaceEthernetIpStatefulFirewallToHclTerraform(struct?: InterfaceEthernetIpStatefulFirewallOutputReference | InterfaceEthernetIpStatefulFirewall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_list: {
      value: cdktf.numberToHclTerraform(struct!.accessList),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acl_id: {
      value: cdktf.numberToHclTerraform(struct!.aclId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    class_list: {
      value: cdktf.stringToHclTerraform(struct!.classList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inside: {
      value: cdktf.numberToHclTerraform(struct!.inside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outside: {
      value: cdktf.numberToHclTerraform(struct!.outside),
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

export class InterfaceEthernetIpStatefulFirewallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpStatefulFirewall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList;
    }
    if (this._aclId !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclId = this._aclId;
    }
    if (this._classList !== undefined) {
      hasAnyValues = true;
      internalValueResult.classList = this._classList;
    }
    if (this._inside !== undefined) {
      hasAnyValues = true;
      internalValueResult.inside = this._inside;
    }
    if (this._outside !== undefined) {
      hasAnyValues = true;
      internalValueResult.outside = this._outside;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpStatefulFirewall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessList = undefined;
      this._aclId = undefined;
      this._classList = undefined;
      this._inside = undefined;
      this._outside = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessList = value.accessList;
      this._aclId = value.aclId;
      this._classList = value.classList;
      this._inside = value.inside;
      this._outside = value.outside;
      this._uuid = value.uuid;
    }
  }

  // access_list - computed: false, optional: true, required: false
  private _accessList?: number; 
  public get accessList() {
    return this.getNumberAttribute('access_list');
  }
  public set accessList(value: number) {
    this._accessList = value;
  }
  public resetAccessList() {
    this._accessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList;
  }

  // acl_id - computed: false, optional: true, required: false
  private _aclId?: number; 
  public get aclId() {
    return this.getNumberAttribute('acl_id');
  }
  public set aclId(value: number) {
    this._aclId = value;
  }
  public resetAclId() {
    this._aclId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclIdInput() {
    return this._aclId;
  }

  // class_list - computed: false, optional: true, required: false
  private _classList?: string; 
  public get classList() {
    return this.getStringAttribute('class_list');
  }
  public set classList(value: string) {
    this._classList = value;
  }
  public resetClassList() {
    this._classList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListInput() {
    return this._classList;
  }

  // inside - computed: false, optional: true, required: false
  private _inside?: number; 
  public get inside() {
    return this.getNumberAttribute('inside');
  }
  public set inside(value: number) {
    this._inside = value;
  }
  public resetInside() {
    this._inside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideInput() {
    return this._inside;
  }

  // outside - computed: false, optional: true, required: false
  private _outside?: number; 
  public get outside() {
    return this.getNumberAttribute('outside');
  }
  public set outside(value: number) {
    this._outside = value;
  }
  public resetOutside() {
    this._outside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideInput() {
    return this._outside;
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
export interface InterfaceEthernetIp {
  /**
  * Allow traffic to be associated with promiscuous VIP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#allow_promiscuous_vip InterfaceEthernet#allow_promiscuous_vip}
  */
  readonly allowPromiscuousVip?: number;
  /**
  * This interface connects to spoofing cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#cache_spoofing_port InterfaceEthernet#cache_spoofing_port}
  */
  readonly cacheSpoofingPort?: number;
  /**
  * Client facing interface for IPv4/v6 traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#client InterfaceEthernet#client}
  */
  readonly client?: number;
  /**
  * Use DHCP to configure IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#dhcp InterfaceEthernet#dhcp}
  */
  readonly dhcp?: number;
  /**
  * Enable Membership Query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#generate_membership_query InterfaceEthernet#generate_membership_query}
  */
  readonly generateMembershipQuery?: number;
  /**
  * Configure interface as inside
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#inside InterfaceEthernet#inside}
  */
  readonly inside?: number;
  /**
  * Maximum Response Time (Max Response Time (Default is 100))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#max_resp_time InterfaceEthernet#max_resp_time}
  */
  readonly maxRespTime?: number;
  /**
  * Configure interface as outside
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#outside InterfaceEthernet#outside}
  */
  readonly outside?: number;
  /**
  * 1 - 255 (Default is 125)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#query_interval InterfaceEthernet#query_interval}
  */
  readonly queryInterval?: number;
  /**
  * Server facing interface for IPv4/v6 traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#server InterfaceEthernet#server}
  */
  readonly server?: number;
  /**
  * Redirect SLB traffic across partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#slb_partition_redirect InterfaceEthernet#slb_partition_redirect}
  */
  readonly slbPartitionRedirect?: number;
  /**
  * Configure Enable SYN-cookie on the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#syn_cookie InterfaceEthernet#syn_cookie}
  */
  readonly synCookie?: number;
  /**
  * Ignore TTL decrement for a received packet before sending out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#ttl_ignore InterfaceEthernet#ttl_ignore}
  */
  readonly ttlIgnore?: number;
  /**
  * Set the interface as unnumbered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#unnumbered InterfaceEthernet#unnumbered}
  */
  readonly unnumbered?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#uuid InterfaceEthernet#uuid}
  */
  readonly uuid?: string;
  /**
  * address_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#address_list InterfaceEthernet#address_list}
  */
  readonly addressList?: InterfaceEthernetIpAddressListStruct[] | cdktf.IResolvable;
  /**
  * helper_address_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#helper_address_list InterfaceEthernet#helper_address_list}
  */
  readonly helperAddressList?: InterfaceEthernetIpHelperAddressListStruct[] | cdktf.IResolvable;
  /**
  * ospf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#ospf InterfaceEthernet#ospf}
  */
  readonly ospf?: InterfaceEthernetIpOspf;
  /**
  * rip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#rip InterfaceEthernet#rip}
  */
  readonly rip?: InterfaceEthernetIpRip;
  /**
  * router block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#router InterfaceEthernet#router}
  */
  readonly router?: InterfaceEthernetIpRouter;
  /**
  * stateful_firewall block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#stateful_firewall InterfaceEthernet#stateful_firewall}
  */
  readonly statefulFirewall?: InterfaceEthernetIpStatefulFirewall;
}

export function interfaceEthernetIpToTerraform(struct?: InterfaceEthernetIpOutputReference | InterfaceEthernetIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_promiscuous_vip: cdktf.numberToTerraform(struct!.allowPromiscuousVip),
    cache_spoofing_port: cdktf.numberToTerraform(struct!.cacheSpoofingPort),
    client: cdktf.numberToTerraform(struct!.client),
    dhcp: cdktf.numberToTerraform(struct!.dhcp),
    generate_membership_query: cdktf.numberToTerraform(struct!.generateMembershipQuery),
    inside: cdktf.numberToTerraform(struct!.inside),
    max_resp_time: cdktf.numberToTerraform(struct!.maxRespTime),
    outside: cdktf.numberToTerraform(struct!.outside),
    query_interval: cdktf.numberToTerraform(struct!.queryInterval),
    server: cdktf.numberToTerraform(struct!.server),
    slb_partition_redirect: cdktf.numberToTerraform(struct!.slbPartitionRedirect),
    syn_cookie: cdktf.numberToTerraform(struct!.synCookie),
    ttl_ignore: cdktf.numberToTerraform(struct!.ttlIgnore),
    unnumbered: cdktf.numberToTerraform(struct!.unnumbered),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    address_list: cdktf.listMapper(interfaceEthernetIpAddressListStructToTerraform, true)(struct!.addressList),
    helper_address_list: cdktf.listMapper(interfaceEthernetIpHelperAddressListStructToTerraform, true)(struct!.helperAddressList),
    ospf: interfaceEthernetIpOspfToTerraform(struct!.ospf),
    rip: interfaceEthernetIpRipToTerraform(struct!.rip),
    router: interfaceEthernetIpRouterToTerraform(struct!.router),
    stateful_firewall: interfaceEthernetIpStatefulFirewallToTerraform(struct!.statefulFirewall),
  }
}


export function interfaceEthernetIpToHclTerraform(struct?: InterfaceEthernetIpOutputReference | InterfaceEthernetIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_promiscuous_vip: {
      value: cdktf.numberToHclTerraform(struct!.allowPromiscuousVip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_spoofing_port: {
      value: cdktf.numberToHclTerraform(struct!.cacheSpoofingPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client: {
      value: cdktf.numberToHclTerraform(struct!.client),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dhcp: {
      value: cdktf.numberToHclTerraform(struct!.dhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    generate_membership_query: {
      value: cdktf.numberToHclTerraform(struct!.generateMembershipQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inside: {
      value: cdktf.numberToHclTerraform(struct!.inside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_resp_time: {
      value: cdktf.numberToHclTerraform(struct!.maxRespTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outside: {
      value: cdktf.numberToHclTerraform(struct!.outside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_interval: {
      value: cdktf.numberToHclTerraform(struct!.queryInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server: {
      value: cdktf.numberToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_partition_redirect: {
      value: cdktf.numberToHclTerraform(struct!.slbPartitionRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_cookie: {
      value: cdktf.numberToHclTerraform(struct!.synCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl_ignore: {
      value: cdktf.numberToHclTerraform(struct!.ttlIgnore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unnumbered: {
      value: cdktf.numberToHclTerraform(struct!.unnumbered),
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
    address_list: {
      value: cdktf.listMapperHcl(interfaceEthernetIpAddressListStructToHclTerraform, true)(struct!.addressList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpAddressListStructList",
    },
    helper_address_list: {
      value: cdktf.listMapperHcl(interfaceEthernetIpHelperAddressListStructToHclTerraform, true)(struct!.helperAddressList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpHelperAddressListStructList",
    },
    ospf: {
      value: interfaceEthernetIpOspfToHclTerraform(struct!.ospf),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpOspfList",
    },
    rip: {
      value: interfaceEthernetIpRipToHclTerraform(struct!.rip),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpRipList",
    },
    router: {
      value: interfaceEthernetIpRouterToHclTerraform(struct!.router),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpRouterList",
    },
    stateful_firewall: {
      value: interfaceEthernetIpStatefulFirewallToHclTerraform(struct!.statefulFirewall),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpStatefulFirewallList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowPromiscuousVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPromiscuousVip = this._allowPromiscuousVip;
    }
    if (this._cacheSpoofingPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheSpoofingPort = this._cacheSpoofingPort;
    }
    if (this._client !== undefined) {
      hasAnyValues = true;
      internalValueResult.client = this._client;
    }
    if (this._dhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp = this._dhcp;
    }
    if (this._generateMembershipQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateMembershipQuery = this._generateMembershipQuery;
    }
    if (this._inside !== undefined) {
      hasAnyValues = true;
      internalValueResult.inside = this._inside;
    }
    if (this._maxRespTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRespTime = this._maxRespTime;
    }
    if (this._outside !== undefined) {
      hasAnyValues = true;
      internalValueResult.outside = this._outside;
    }
    if (this._queryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryInterval = this._queryInterval;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._slbPartitionRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbPartitionRedirect = this._slbPartitionRedirect;
    }
    if (this._synCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.synCookie = this._synCookie;
    }
    if (this._ttlIgnore !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttlIgnore = this._ttlIgnore;
    }
    if (this._unnumbered !== undefined) {
      hasAnyValues = true;
      internalValueResult.unnumbered = this._unnumbered;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._addressList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressList = this._addressList?.internalValue;
    }
    if (this._helperAddressList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helperAddressList = this._helperAddressList?.internalValue;
    }
    if (this._ospf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospf = this._ospf?.internalValue;
    }
    if (this._rip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rip = this._rip?.internalValue;
    }
    if (this._router?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.router = this._router?.internalValue;
    }
    if (this._statefulFirewall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statefulFirewall = this._statefulFirewall?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowPromiscuousVip = undefined;
      this._cacheSpoofingPort = undefined;
      this._client = undefined;
      this._dhcp = undefined;
      this._generateMembershipQuery = undefined;
      this._inside = undefined;
      this._maxRespTime = undefined;
      this._outside = undefined;
      this._queryInterval = undefined;
      this._server = undefined;
      this._slbPartitionRedirect = undefined;
      this._synCookie = undefined;
      this._ttlIgnore = undefined;
      this._unnumbered = undefined;
      this._uuid = undefined;
      this._addressList.internalValue = undefined;
      this._helperAddressList.internalValue = undefined;
      this._ospf.internalValue = undefined;
      this._rip.internalValue = undefined;
      this._router.internalValue = undefined;
      this._statefulFirewall.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowPromiscuousVip = value.allowPromiscuousVip;
      this._cacheSpoofingPort = value.cacheSpoofingPort;
      this._client = value.client;
      this._dhcp = value.dhcp;
      this._generateMembershipQuery = value.generateMembershipQuery;
      this._inside = value.inside;
      this._maxRespTime = value.maxRespTime;
      this._outside = value.outside;
      this._queryInterval = value.queryInterval;
      this._server = value.server;
      this._slbPartitionRedirect = value.slbPartitionRedirect;
      this._synCookie = value.synCookie;
      this._ttlIgnore = value.ttlIgnore;
      this._unnumbered = value.unnumbered;
      this._uuid = value.uuid;
      this._addressList.internalValue = value.addressList;
      this._helperAddressList.internalValue = value.helperAddressList;
      this._ospf.internalValue = value.ospf;
      this._rip.internalValue = value.rip;
      this._router.internalValue = value.router;
      this._statefulFirewall.internalValue = value.statefulFirewall;
    }
  }

  // allow_promiscuous_vip - computed: false, optional: true, required: false
  private _allowPromiscuousVip?: number; 
  public get allowPromiscuousVip() {
    return this.getNumberAttribute('allow_promiscuous_vip');
  }
  public set allowPromiscuousVip(value: number) {
    this._allowPromiscuousVip = value;
  }
  public resetAllowPromiscuousVip() {
    this._allowPromiscuousVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPromiscuousVipInput() {
    return this._allowPromiscuousVip;
  }

  // cache_spoofing_port - computed: false, optional: true, required: false
  private _cacheSpoofingPort?: number; 
  public get cacheSpoofingPort() {
    return this.getNumberAttribute('cache_spoofing_port');
  }
  public set cacheSpoofingPort(value: number) {
    this._cacheSpoofingPort = value;
  }
  public resetCacheSpoofingPort() {
    this._cacheSpoofingPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheSpoofingPortInput() {
    return this._cacheSpoofingPort;
  }

  // client - computed: false, optional: true, required: false
  private _client?: number; 
  public get client() {
    return this.getNumberAttribute('client');
  }
  public set client(value: number) {
    this._client = value;
  }
  public resetClient() {
    this._client = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client;
  }

  // dhcp - computed: false, optional: true, required: false
  private _dhcp?: number; 
  public get dhcp() {
    return this.getNumberAttribute('dhcp');
  }
  public set dhcp(value: number) {
    this._dhcp = value;
  }
  public resetDhcp() {
    this._dhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp;
  }

  // generate_membership_query - computed: false, optional: true, required: false
  private _generateMembershipQuery?: number; 
  public get generateMembershipQuery() {
    return this.getNumberAttribute('generate_membership_query');
  }
  public set generateMembershipQuery(value: number) {
    this._generateMembershipQuery = value;
  }
  public resetGenerateMembershipQuery() {
    this._generateMembershipQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateMembershipQueryInput() {
    return this._generateMembershipQuery;
  }

  // inside - computed: false, optional: true, required: false
  private _inside?: number; 
  public get inside() {
    return this.getNumberAttribute('inside');
  }
  public set inside(value: number) {
    this._inside = value;
  }
  public resetInside() {
    this._inside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideInput() {
    return this._inside;
  }

  // max_resp_time - computed: false, optional: true, required: false
  private _maxRespTime?: number; 
  public get maxRespTime() {
    return this.getNumberAttribute('max_resp_time');
  }
  public set maxRespTime(value: number) {
    this._maxRespTime = value;
  }
  public resetMaxRespTime() {
    this._maxRespTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRespTimeInput() {
    return this._maxRespTime;
  }

  // outside - computed: false, optional: true, required: false
  private _outside?: number; 
  public get outside() {
    return this.getNumberAttribute('outside');
  }
  public set outside(value: number) {
    this._outside = value;
  }
  public resetOutside() {
    this._outside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideInput() {
    return this._outside;
  }

  // query_interval - computed: false, optional: true, required: false
  private _queryInterval?: number; 
  public get queryInterval() {
    return this.getNumberAttribute('query_interval');
  }
  public set queryInterval(value: number) {
    this._queryInterval = value;
  }
  public resetQueryInterval() {
    this._queryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryIntervalInput() {
    return this._queryInterval;
  }

  // server - computed: false, optional: true, required: false
  private _server?: number; 
  public get server() {
    return this.getNumberAttribute('server');
  }
  public set server(value: number) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // slb_partition_redirect - computed: false, optional: true, required: false
  private _slbPartitionRedirect?: number; 
  public get slbPartitionRedirect() {
    return this.getNumberAttribute('slb_partition_redirect');
  }
  public set slbPartitionRedirect(value: number) {
    this._slbPartitionRedirect = value;
  }
  public resetSlbPartitionRedirect() {
    this._slbPartitionRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbPartitionRedirectInput() {
    return this._slbPartitionRedirect;
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

  // ttl_ignore - computed: false, optional: true, required: false
  private _ttlIgnore?: number; 
  public get ttlIgnore() {
    return this.getNumberAttribute('ttl_ignore');
  }
  public set ttlIgnore(value: number) {
    this._ttlIgnore = value;
  }
  public resetTtlIgnore() {
    this._ttlIgnore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlIgnoreInput() {
    return this._ttlIgnore;
  }

  // unnumbered - computed: false, optional: true, required: false
  private _unnumbered?: number; 
  public get unnumbered() {
    return this.getNumberAttribute('unnumbered');
  }
  public set unnumbered(value: number) {
    this._unnumbered = value;
  }
  public resetUnnumbered() {
    this._unnumbered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unnumberedInput() {
    return this._unnumbered;
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

  // address_list - computed: false, optional: true, required: false
  private _addressList = new InterfaceEthernetIpAddressListStructList(this, "address_list", false);
  public get addressList() {
    return this._addressList;
  }
  public putAddressList(value: InterfaceEthernetIpAddressListStruct[] | cdktf.IResolvable) {
    this._addressList.internalValue = value;
  }
  public resetAddressList() {
    this._addressList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressListInput() {
    return this._addressList.internalValue;
  }

  // helper_address_list - computed: false, optional: true, required: false
  private _helperAddressList = new InterfaceEthernetIpHelperAddressListStructList(this, "helper_address_list", false);
  public get helperAddressList() {
    return this._helperAddressList;
  }
  public putHelperAddressList(value: InterfaceEthernetIpHelperAddressListStruct[] | cdktf.IResolvable) {
    this._helperAddressList.internalValue = value;
  }
  public resetHelperAddressList() {
    this._helperAddressList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helperAddressListInput() {
    return this._helperAddressList.internalValue;
  }

  // ospf - computed: false, optional: true, required: false
  private _ospf = new InterfaceEthernetIpOspfOutputReference(this, "ospf");
  public get ospf() {
    return this._ospf;
  }
  public putOspf(value: InterfaceEthernetIpOspf) {
    this._ospf.internalValue = value;
  }
  public resetOspf() {
    this._ospf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfInput() {
    return this._ospf.internalValue;
  }

  // rip - computed: false, optional: true, required: false
  private _rip = new InterfaceEthernetIpRipOutputReference(this, "rip");
  public get rip() {
    return this._rip;
  }
  public putRip(value: InterfaceEthernetIpRip) {
    this._rip.internalValue = value;
  }
  public resetRip() {
    this._rip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripInput() {
    return this._rip.internalValue;
  }

  // router - computed: false, optional: true, required: false
  private _router = new InterfaceEthernetIpRouterOutputReference(this, "router");
  public get router() {
    return this._router;
  }
  public putRouter(value: InterfaceEthernetIpRouter) {
    this._router.internalValue = value;
  }
  public resetRouter() {
    this._router.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerInput() {
    return this._router.internalValue;
  }

  // stateful_firewall - computed: false, optional: true, required: false
  private _statefulFirewall = new InterfaceEthernetIpStatefulFirewallOutputReference(this, "stateful_firewall");
  public get statefulFirewall() {
    return this._statefulFirewall;
  }
  public putStatefulFirewall(value: InterfaceEthernetIpStatefulFirewall) {
    this._statefulFirewall.internalValue = value;
  }
  public resetStatefulFirewall() {
    this._statefulFirewall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulFirewallInput() {
    return this._statefulFirewall.internalValue;
  }
}
export interface InterfaceEthernetIpv6AccessListCfg {
  /**
  * ACL applied on incoming packets to this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#inbound InterfaceEthernet#inbound}
  */
  readonly inbound?: number;
  /**
  * Apply ACL rules to incoming packets on this interface (Named Access List)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#v6_acl_name InterfaceEthernet#v6_acl_name}
  */
  readonly v6AclName?: string;
}

export function interfaceEthernetIpv6AccessListCfgToTerraform(struct?: InterfaceEthernetIpv6AccessListCfgOutputReference | InterfaceEthernetIpv6AccessListCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inbound: cdktf.numberToTerraform(struct!.inbound),
    v6_acl_name: cdktf.stringToTerraform(struct!.v6AclName),
  }
}


export function interfaceEthernetIpv6AccessListCfgToHclTerraform(struct?: InterfaceEthernetIpv6AccessListCfgOutputReference | InterfaceEthernetIpv6AccessListCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inbound: {
      value: cdktf.numberToHclTerraform(struct!.inbound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v6_acl_name: {
      value: cdktf.stringToHclTerraform(struct!.v6AclName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpv6AccessListCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpv6AccessListCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inbound !== undefined) {
      hasAnyValues = true;
      internalValueResult.inbound = this._inbound;
    }
    if (this._v6AclName !== undefined) {
      hasAnyValues = true;
      internalValueResult.v6AclName = this._v6AclName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpv6AccessListCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inbound = undefined;
      this._v6AclName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inbound = value.inbound;
      this._v6AclName = value.v6AclName;
    }
  }

  // inbound - computed: false, optional: true, required: false
  private _inbound?: number; 
  public get inbound() {
    return this.getNumberAttribute('inbound');
  }
  public set inbound(value: number) {
    this._inbound = value;
  }
  public resetInbound() {
    this._inbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundInput() {
    return this._inbound;
  }

  // v6_acl_name - computed: false, optional: true, required: false
  private _v6AclName?: string; 
  public get v6AclName() {
    return this.getStringAttribute('v6_acl_name');
  }
  public set v6AclName(value: string) {
    this._v6AclName = value;
  }
  public resetV6AclName() {
    this._v6AclName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6AclNameInput() {
    return this._v6AclName;
  }
}
export interface InterfaceEthernetIpv6AddressListStruct {
  /**
  * 'anycast': Configure an IPv6 anycast address; 'link-local': Configure an IPv6 link local address;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#address_type InterfaceEthernet#address_type}
  */
  readonly addressType?: string;
  /**
  * Set the IPv6 address of an interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#ipv6_addr InterfaceEthernet#ipv6_addr}
  */
  readonly ipv6Addr?: string;
}

export function interfaceEthernetIpv6AddressListStructToTerraform(struct?: InterfaceEthernetIpv6AddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_type: cdktf.stringToTerraform(struct!.addressType),
    ipv6_addr: cdktf.stringToTerraform(struct!.ipv6Addr),
  }
}


export function interfaceEthernetIpv6AddressListStructToHclTerraform(struct?: InterfaceEthernetIpv6AddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_type: {
      value: cdktf.stringToHclTerraform(struct!.addressType),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpv6AddressListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIpv6AddressListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressType = this._addressType;
    }
    if (this._ipv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr = this._ipv6Addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpv6AddressListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressType = undefined;
      this._ipv6Addr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressType = value.addressType;
      this._ipv6Addr = value.ipv6Addr;
    }
  }

  // address_type - computed: false, optional: true, required: false
  private _addressType?: string; 
  public get addressType() {
    return this.getStringAttribute('address_type');
  }
  public set addressType(value: string) {
    this._addressType = value;
  }
  public resetAddressType() {
    this._addressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressTypeInput() {
    return this._addressType;
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
}

export class InterfaceEthernetIpv6AddressListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIpv6AddressListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIpv6AddressListStructOutputReference {
    return new InterfaceEthernetIpv6AddressListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIpv6OspfCostCfg {
  /**
  * Interface cost
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#cost InterfaceEthernet#cost}
  */
  readonly cost?: number;
  /**
  * Specify the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#instance_id InterfaceEthernet#instance_id}
  */
  readonly instanceId?: number;
}

export function interfaceEthernetIpv6OspfCostCfgToTerraform(struct?: InterfaceEthernetIpv6OspfCostCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cost: cdktf.numberToTerraform(struct!.cost),
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
  }
}


export function interfaceEthernetIpv6OspfCostCfgToHclTerraform(struct?: InterfaceEthernetIpv6OspfCostCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cost: {
      value: cdktf.numberToHclTerraform(struct!.cost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpv6OspfCostCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIpv6OspfCostCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cost !== undefined) {
      hasAnyValues = true;
      internalValueResult.cost = this._cost;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpv6OspfCostCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cost = undefined;
      this._instanceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cost = value.cost;
      this._instanceId = value.instanceId;
    }
  }

  // cost - computed: false, optional: true, required: false
  private _cost?: number; 
  public get cost() {
    return this.getNumberAttribute('cost');
  }
  public set cost(value: number) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }
}

export class InterfaceEthernetIpv6OspfCostCfgList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIpv6OspfCostCfg[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIpv6OspfCostCfgOutputReference {
    return new InterfaceEthernetIpv6OspfCostCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIpv6OspfDeadIntervalCfg {
  /**
  * Interval after which a neighbor is declared dead (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#dead_interval InterfaceEthernet#dead_interval}
  */
  readonly deadInterval?: number;
  /**
  * Specify the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#instance_id InterfaceEthernet#instance_id}
  */
  readonly instanceId?: number;
}

export function interfaceEthernetIpv6OspfDeadIntervalCfgToTerraform(struct?: InterfaceEthernetIpv6OspfDeadIntervalCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dead_interval: cdktf.numberToTerraform(struct!.deadInterval),
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
  }
}


export function interfaceEthernetIpv6OspfDeadIntervalCfgToHclTerraform(struct?: InterfaceEthernetIpv6OspfDeadIntervalCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dead_interval: {
      value: cdktf.numberToHclTerraform(struct!.deadInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpv6OspfDeadIntervalCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIpv6OspfDeadIntervalCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deadInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadInterval = this._deadInterval;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpv6OspfDeadIntervalCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deadInterval = undefined;
      this._instanceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deadInterval = value.deadInterval;
      this._instanceId = value.instanceId;
    }
  }

  // dead_interval - computed: false, optional: true, required: false
  private _deadInterval?: number; 
  public get deadInterval() {
    return this.getNumberAttribute('dead_interval');
  }
  public set deadInterval(value: number) {
    this._deadInterval = value;
  }
  public resetDeadInterval() {
    this._deadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadIntervalInput() {
    return this._deadInterval;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }
}

export class InterfaceEthernetIpv6OspfDeadIntervalCfgList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIpv6OspfDeadIntervalCfg[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIpv6OspfDeadIntervalCfgOutputReference {
    return new InterfaceEthernetIpv6OspfDeadIntervalCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIpv6OspfHelloIntervalCfg {
  /**
  * Time between HELLO packets (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#hello_interval InterfaceEthernet#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * Specify the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#instance_id InterfaceEthernet#instance_id}
  */
  readonly instanceId?: number;
}

export function interfaceEthernetIpv6OspfHelloIntervalCfgToTerraform(struct?: InterfaceEthernetIpv6OspfHelloIntervalCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
  }
}


export function interfaceEthernetIpv6OspfHelloIntervalCfgToHclTerraform(struct?: InterfaceEthernetIpv6OspfHelloIntervalCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hello_interval: {
      value: cdktf.numberToHclTerraform(struct!.helloInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpv6OspfHelloIntervalCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIpv6OspfHelloIntervalCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._helloInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloInterval = this._helloInterval;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpv6OspfHelloIntervalCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._helloInterval = undefined;
      this._instanceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._helloInterval = value.helloInterval;
      this._instanceId = value.instanceId;
    }
  }

  // hello_interval - computed: false, optional: true, required: false
  private _helloInterval?: number; 
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }
  public set helloInterval(value: number) {
    this._helloInterval = value;
  }
  public resetHelloInterval() {
    this._helloInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalInput() {
    return this._helloInterval;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }
}

export class InterfaceEthernetIpv6OspfHelloIntervalCfgList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIpv6OspfHelloIntervalCfg[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIpv6OspfHelloIntervalCfgOutputReference {
    return new InterfaceEthernetIpv6OspfHelloIntervalCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIpv6OspfMtuIgnoreCfg {
  /**
  * Specify the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#instance_id InterfaceEthernet#instance_id}
  */
  readonly instanceId?: number;
  /**
  * Ignores the MTU in DBD packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#mtu_ignore InterfaceEthernet#mtu_ignore}
  */
  readonly mtuIgnore?: number;
}

export function interfaceEthernetIpv6OspfMtuIgnoreCfgToTerraform(struct?: InterfaceEthernetIpv6OspfMtuIgnoreCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
    mtu_ignore: cdktf.numberToTerraform(struct!.mtuIgnore),
  }
}


export function interfaceEthernetIpv6OspfMtuIgnoreCfgToHclTerraform(struct?: InterfaceEthernetIpv6OspfMtuIgnoreCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mtu_ignore: {
      value: cdktf.numberToHclTerraform(struct!.mtuIgnore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpv6OspfMtuIgnoreCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIpv6OspfMtuIgnoreCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._mtuIgnore !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtuIgnore = this._mtuIgnore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpv6OspfMtuIgnoreCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceId = undefined;
      this._mtuIgnore = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceId = value.instanceId;
      this._mtuIgnore = value.mtuIgnore;
    }
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // mtu_ignore - computed: false, optional: true, required: false
  private _mtuIgnore?: number; 
  public get mtuIgnore() {
    return this.getNumberAttribute('mtu_ignore');
  }
  public set mtuIgnore(value: number) {
    this._mtuIgnore = value;
  }
  public resetMtuIgnore() {
    this._mtuIgnore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuIgnoreInput() {
    return this._mtuIgnore;
  }
}

export class InterfaceEthernetIpv6OspfMtuIgnoreCfgList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIpv6OspfMtuIgnoreCfg[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIpv6OspfMtuIgnoreCfgOutputReference {
    return new InterfaceEthernetIpv6OspfMtuIgnoreCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIpv6OspfNeighborCfg {
  /**
  * Specify the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#neig_inst InterfaceEthernet#neig_inst}
  */
  readonly neigInst?: number;
  /**
  * OSPFv3 neighbor (Neighbor IPv6 address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#neighbor InterfaceEthernet#neighbor}
  */
  readonly neighbor?: string;
  /**
  * OSPF cost for point-to-multipoint neighbor (metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#neighbor_cost InterfaceEthernet#neighbor_cost}
  */
  readonly neighborCost?: number;
  /**
  * OSPF dead-router polling interval (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#neighbor_poll_interval InterfaceEthernet#neighbor_poll_interval}
  */
  readonly neighborPollInterval?: number;
  /**
  * OSPF priority of non-broadcast neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#neighbor_priority InterfaceEthernet#neighbor_priority}
  */
  readonly neighborPriority?: number;
}

export function interfaceEthernetIpv6OspfNeighborCfgToTerraform(struct?: InterfaceEthernetIpv6OspfNeighborCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    neig_inst: cdktf.numberToTerraform(struct!.neigInst),
    neighbor: cdktf.stringToTerraform(struct!.neighbor),
    neighbor_cost: cdktf.numberToTerraform(struct!.neighborCost),
    neighbor_poll_interval: cdktf.numberToTerraform(struct!.neighborPollInterval),
    neighbor_priority: cdktf.numberToTerraform(struct!.neighborPriority),
  }
}


export function interfaceEthernetIpv6OspfNeighborCfgToHclTerraform(struct?: InterfaceEthernetIpv6OspfNeighborCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    neig_inst: {
      value: cdktf.numberToHclTerraform(struct!.neigInst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    neighbor: {
      value: cdktf.stringToHclTerraform(struct!.neighbor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neighbor_cost: {
      value: cdktf.numberToHclTerraform(struct!.neighborCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    neighbor_poll_interval: {
      value: cdktf.numberToHclTerraform(struct!.neighborPollInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    neighbor_priority: {
      value: cdktf.numberToHclTerraform(struct!.neighborPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpv6OspfNeighborCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIpv6OspfNeighborCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._neigInst !== undefined) {
      hasAnyValues = true;
      internalValueResult.neigInst = this._neigInst;
    }
    if (this._neighbor !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighbor = this._neighbor;
    }
    if (this._neighborCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborCost = this._neighborCost;
    }
    if (this._neighborPollInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborPollInterval = this._neighborPollInterval;
    }
    if (this._neighborPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborPriority = this._neighborPriority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpv6OspfNeighborCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._neigInst = undefined;
      this._neighbor = undefined;
      this._neighborCost = undefined;
      this._neighborPollInterval = undefined;
      this._neighborPriority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._neigInst = value.neigInst;
      this._neighbor = value.neighbor;
      this._neighborCost = value.neighborCost;
      this._neighborPollInterval = value.neighborPollInterval;
      this._neighborPriority = value.neighborPriority;
    }
  }

  // neig_inst - computed: false, optional: true, required: false
  private _neigInst?: number; 
  public get neigInst() {
    return this.getNumberAttribute('neig_inst');
  }
  public set neigInst(value: number) {
    this._neigInst = value;
  }
  public resetNeigInst() {
    this._neigInst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neigInstInput() {
    return this._neigInst;
  }

  // neighbor - computed: false, optional: true, required: false
  private _neighbor?: string; 
  public get neighbor() {
    return this.getStringAttribute('neighbor');
  }
  public set neighbor(value: string) {
    this._neighbor = value;
  }
  public resetNeighbor() {
    this._neighbor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborInput() {
    return this._neighbor;
  }

  // neighbor_cost - computed: false, optional: true, required: false
  private _neighborCost?: number; 
  public get neighborCost() {
    return this.getNumberAttribute('neighbor_cost');
  }
  public set neighborCost(value: number) {
    this._neighborCost = value;
  }
  public resetNeighborCost() {
    this._neighborCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborCostInput() {
    return this._neighborCost;
  }

  // neighbor_poll_interval - computed: false, optional: true, required: false
  private _neighborPollInterval?: number; 
  public get neighborPollInterval() {
    return this.getNumberAttribute('neighbor_poll_interval');
  }
  public set neighborPollInterval(value: number) {
    this._neighborPollInterval = value;
  }
  public resetNeighborPollInterval() {
    this._neighborPollInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborPollIntervalInput() {
    return this._neighborPollInterval;
  }

  // neighbor_priority - computed: false, optional: true, required: false
  private _neighborPriority?: number; 
  public get neighborPriority() {
    return this.getNumberAttribute('neighbor_priority');
  }
  public set neighborPriority(value: number) {
    this._neighborPriority = value;
  }
  public resetNeighborPriority() {
    this._neighborPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborPriorityInput() {
    return this._neighborPriority;
  }
}

export class InterfaceEthernetIpv6OspfNeighborCfgList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIpv6OspfNeighborCfg[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIpv6OspfNeighborCfgOutputReference {
    return new InterfaceEthernetIpv6OspfNeighborCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIpv6OspfNetworkListStruct {
  /**
  * 'broadcast': Specify OSPF broadcast multi-access network; 'non-broadcast': Specify OSPF NBMA network; 'point-to-point': Specify OSPF point-to-point network; 'point-to-multipoint': Specify OSPF point-to-multipoint network;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#broadcast_type InterfaceEthernet#broadcast_type}
  */
  readonly broadcastType?: string;
  /**
  * Specify the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#network_instance_id InterfaceEthernet#network_instance_id}
  */
  readonly networkInstanceId?: number;
  /**
  * Specify non-broadcast point-to-multipoint network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#p2mp_nbma InterfaceEthernet#p2mp_nbma}
  */
  readonly p2MpNbma?: number;
}

export function interfaceEthernetIpv6OspfNetworkListStructToTerraform(struct?: InterfaceEthernetIpv6OspfNetworkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    broadcast_type: cdktf.stringToTerraform(struct!.broadcastType),
    network_instance_id: cdktf.numberToTerraform(struct!.networkInstanceId),
    p2mp_nbma: cdktf.numberToTerraform(struct!.p2MpNbma),
  }
}


export function interfaceEthernetIpv6OspfNetworkListStructToHclTerraform(struct?: InterfaceEthernetIpv6OspfNetworkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    broadcast_type: {
      value: cdktf.stringToHclTerraform(struct!.broadcastType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_instance_id: {
      value: cdktf.numberToHclTerraform(struct!.networkInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    p2mp_nbma: {
      value: cdktf.numberToHclTerraform(struct!.p2MpNbma),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpv6OspfNetworkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIpv6OspfNetworkListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._broadcastType !== undefined) {
      hasAnyValues = true;
      internalValueResult.broadcastType = this._broadcastType;
    }
    if (this._networkInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInstanceId = this._networkInstanceId;
    }
    if (this._p2MpNbma !== undefined) {
      hasAnyValues = true;
      internalValueResult.p2MpNbma = this._p2MpNbma;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpv6OspfNetworkListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._broadcastType = undefined;
      this._networkInstanceId = undefined;
      this._p2MpNbma = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._broadcastType = value.broadcastType;
      this._networkInstanceId = value.networkInstanceId;
      this._p2MpNbma = value.p2MpNbma;
    }
  }

  // broadcast_type - computed: false, optional: true, required: false
  private _broadcastType?: string; 
  public get broadcastType() {
    return this.getStringAttribute('broadcast_type');
  }
  public set broadcastType(value: string) {
    this._broadcastType = value;
  }
  public resetBroadcastType() {
    this._broadcastType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastTypeInput() {
    return this._broadcastType;
  }

  // network_instance_id - computed: false, optional: true, required: false
  private _networkInstanceId?: number; 
  public get networkInstanceId() {
    return this.getNumberAttribute('network_instance_id');
  }
  public set networkInstanceId(value: number) {
    this._networkInstanceId = value;
  }
  public resetNetworkInstanceId() {
    this._networkInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInstanceIdInput() {
    return this._networkInstanceId;
  }

  // p2mp_nbma - computed: false, optional: true, required: false
  private _p2MpNbma?: number; 
  public get p2MpNbma() {
    return this.getNumberAttribute('p2mp_nbma');
  }
  public set p2MpNbma(value: number) {
    this._p2MpNbma = value;
  }
  public resetP2MpNbma() {
    this._p2MpNbma = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p2MpNbmaInput() {
    return this._p2MpNbma;
  }
}

export class InterfaceEthernetIpv6OspfNetworkListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIpv6OspfNetworkListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIpv6OspfNetworkListStructOutputReference {
    return new InterfaceEthernetIpv6OspfNetworkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIpv6OspfPriorityCfg {
  /**
  * Specify the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#instance_id InterfaceEthernet#instance_id}
  */
  readonly instanceId?: number;
  /**
  * Router priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#priority InterfaceEthernet#priority}
  */
  readonly priority?: number;
}

export function interfaceEthernetIpv6OspfPriorityCfgToTerraform(struct?: InterfaceEthernetIpv6OspfPriorityCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function interfaceEthernetIpv6OspfPriorityCfgToHclTerraform(struct?: InterfaceEthernetIpv6OspfPriorityCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpv6OspfPriorityCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIpv6OspfPriorityCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpv6OspfPriorityCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceId = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceId = value.instanceId;
      this._priority = value.priority;
    }
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

export class InterfaceEthernetIpv6OspfPriorityCfgList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIpv6OspfPriorityCfg[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIpv6OspfPriorityCfgOutputReference {
    return new InterfaceEthernetIpv6OspfPriorityCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIpv6OspfRetransmitIntervalCfg {
  /**
  * Specify the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#instance_id InterfaceEthernet#instance_id}
  */
  readonly instanceId?: number;
  /**
  * Time between retransmitting lost link state advertisements (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#retransmit_interval InterfaceEthernet#retransmit_interval}
  */
  readonly retransmitInterval?: number;
}

export function interfaceEthernetIpv6OspfRetransmitIntervalCfgToTerraform(struct?: InterfaceEthernetIpv6OspfRetransmitIntervalCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
    retransmit_interval: cdktf.numberToTerraform(struct!.retransmitInterval),
  }
}


export function interfaceEthernetIpv6OspfRetransmitIntervalCfgToHclTerraform(struct?: InterfaceEthernetIpv6OspfRetransmitIntervalCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retransmit_interval: {
      value: cdktf.numberToHclTerraform(struct!.retransmitInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpv6OspfRetransmitIntervalCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIpv6OspfRetransmitIntervalCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._retransmitInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitInterval = this._retransmitInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpv6OspfRetransmitIntervalCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceId = undefined;
      this._retransmitInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceId = value.instanceId;
      this._retransmitInterval = value.retransmitInterval;
    }
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // retransmit_interval - computed: false, optional: true, required: false
  private _retransmitInterval?: number; 
  public get retransmitInterval() {
    return this.getNumberAttribute('retransmit_interval');
  }
  public set retransmitInterval(value: number) {
    this._retransmitInterval = value;
  }
  public resetRetransmitInterval() {
    this._retransmitInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitIntervalInput() {
    return this._retransmitInterval;
  }
}

export class InterfaceEthernetIpv6OspfRetransmitIntervalCfgList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIpv6OspfRetransmitIntervalCfg[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIpv6OspfRetransmitIntervalCfgOutputReference {
    return new InterfaceEthernetIpv6OspfRetransmitIntervalCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIpv6OspfTransmitDelayCfg {
  /**
  * Specify the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#instance_id InterfaceEthernet#instance_id}
  */
  readonly instanceId?: number;
  /**
  * Link state transmit delay (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#transmit_delay InterfaceEthernet#transmit_delay}
  */
  readonly transmitDelay?: number;
}

export function interfaceEthernetIpv6OspfTransmitDelayCfgToTerraform(struct?: InterfaceEthernetIpv6OspfTransmitDelayCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
    transmit_delay: cdktf.numberToTerraform(struct!.transmitDelay),
  }
}


export function interfaceEthernetIpv6OspfTransmitDelayCfgToHclTerraform(struct?: InterfaceEthernetIpv6OspfTransmitDelayCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transmit_delay: {
      value: cdktf.numberToHclTerraform(struct!.transmitDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpv6OspfTransmitDelayCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIpv6OspfTransmitDelayCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._transmitDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitDelay = this._transmitDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpv6OspfTransmitDelayCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceId = undefined;
      this._transmitDelay = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceId = value.instanceId;
      this._transmitDelay = value.transmitDelay;
    }
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // transmit_delay - computed: false, optional: true, required: false
  private _transmitDelay?: number; 
  public get transmitDelay() {
    return this.getNumberAttribute('transmit_delay');
  }
  public set transmitDelay(value: number) {
    this._transmitDelay = value;
  }
  public resetTransmitDelay() {
    this._transmitDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitDelayInput() {
    return this._transmitDelay;
  }
}

export class InterfaceEthernetIpv6OspfTransmitDelayCfgList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIpv6OspfTransmitDelayCfg[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIpv6OspfTransmitDelayCfgOutputReference {
    return new InterfaceEthernetIpv6OspfTransmitDelayCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIpv6Ospf {
  /**
  * Bidirectional Forwarding Detection (BFD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#bfd InterfaceEthernet#bfd}
  */
  readonly bfd?: number;
  /**
  * Disable BFD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#disable InterfaceEthernet#disable}
  */
  readonly disable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#uuid InterfaceEthernet#uuid}
  */
  readonly uuid?: string;
  /**
  * cost_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#cost_cfg InterfaceEthernet#cost_cfg}
  */
  readonly costCfg?: InterfaceEthernetIpv6OspfCostCfg[] | cdktf.IResolvable;
  /**
  * dead_interval_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#dead_interval_cfg InterfaceEthernet#dead_interval_cfg}
  */
  readonly deadIntervalCfg?: InterfaceEthernetIpv6OspfDeadIntervalCfg[] | cdktf.IResolvable;
  /**
  * hello_interval_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#hello_interval_cfg InterfaceEthernet#hello_interval_cfg}
  */
  readonly helloIntervalCfg?: InterfaceEthernetIpv6OspfHelloIntervalCfg[] | cdktf.IResolvable;
  /**
  * mtu_ignore_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#mtu_ignore_cfg InterfaceEthernet#mtu_ignore_cfg}
  */
  readonly mtuIgnoreCfg?: InterfaceEthernetIpv6OspfMtuIgnoreCfg[] | cdktf.IResolvable;
  /**
  * neighbor_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#neighbor_cfg InterfaceEthernet#neighbor_cfg}
  */
  readonly neighborCfg?: InterfaceEthernetIpv6OspfNeighborCfg[] | cdktf.IResolvable;
  /**
  * network_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#network_list InterfaceEthernet#network_list}
  */
  readonly networkList?: InterfaceEthernetIpv6OspfNetworkListStruct[] | cdktf.IResolvable;
  /**
  * priority_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#priority_cfg InterfaceEthernet#priority_cfg}
  */
  readonly priorityCfg?: InterfaceEthernetIpv6OspfPriorityCfg[] | cdktf.IResolvable;
  /**
  * retransmit_interval_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#retransmit_interval_cfg InterfaceEthernet#retransmit_interval_cfg}
  */
  readonly retransmitIntervalCfg?: InterfaceEthernetIpv6OspfRetransmitIntervalCfg[] | cdktf.IResolvable;
  /**
  * transmit_delay_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#transmit_delay_cfg InterfaceEthernet#transmit_delay_cfg}
  */
  readonly transmitDelayCfg?: InterfaceEthernetIpv6OspfTransmitDelayCfg[] | cdktf.IResolvable;
}

export function interfaceEthernetIpv6OspfToTerraform(struct?: InterfaceEthernetIpv6OspfOutputReference | InterfaceEthernetIpv6Ospf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bfd: cdktf.numberToTerraform(struct!.bfd),
    disable: cdktf.numberToTerraform(struct!.disable),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    cost_cfg: cdktf.listMapper(interfaceEthernetIpv6OspfCostCfgToTerraform, true)(struct!.costCfg),
    dead_interval_cfg: cdktf.listMapper(interfaceEthernetIpv6OspfDeadIntervalCfgToTerraform, true)(struct!.deadIntervalCfg),
    hello_interval_cfg: cdktf.listMapper(interfaceEthernetIpv6OspfHelloIntervalCfgToTerraform, true)(struct!.helloIntervalCfg),
    mtu_ignore_cfg: cdktf.listMapper(interfaceEthernetIpv6OspfMtuIgnoreCfgToTerraform, true)(struct!.mtuIgnoreCfg),
    neighbor_cfg: cdktf.listMapper(interfaceEthernetIpv6OspfNeighborCfgToTerraform, true)(struct!.neighborCfg),
    network_list: cdktf.listMapper(interfaceEthernetIpv6OspfNetworkListStructToTerraform, true)(struct!.networkList),
    priority_cfg: cdktf.listMapper(interfaceEthernetIpv6OspfPriorityCfgToTerraform, true)(struct!.priorityCfg),
    retransmit_interval_cfg: cdktf.listMapper(interfaceEthernetIpv6OspfRetransmitIntervalCfgToTerraform, true)(struct!.retransmitIntervalCfg),
    transmit_delay_cfg: cdktf.listMapper(interfaceEthernetIpv6OspfTransmitDelayCfgToTerraform, true)(struct!.transmitDelayCfg),
  }
}


export function interfaceEthernetIpv6OspfToHclTerraform(struct?: InterfaceEthernetIpv6OspfOutputReference | InterfaceEthernetIpv6Ospf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bfd: {
      value: cdktf.numberToHclTerraform(struct!.bfd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable: {
      value: cdktf.numberToHclTerraform(struct!.disable),
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
    cost_cfg: {
      value: cdktf.listMapperHcl(interfaceEthernetIpv6OspfCostCfgToHclTerraform, true)(struct!.costCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpv6OspfCostCfgList",
    },
    dead_interval_cfg: {
      value: cdktf.listMapperHcl(interfaceEthernetIpv6OspfDeadIntervalCfgToHclTerraform, true)(struct!.deadIntervalCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpv6OspfDeadIntervalCfgList",
    },
    hello_interval_cfg: {
      value: cdktf.listMapperHcl(interfaceEthernetIpv6OspfHelloIntervalCfgToHclTerraform, true)(struct!.helloIntervalCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpv6OspfHelloIntervalCfgList",
    },
    mtu_ignore_cfg: {
      value: cdktf.listMapperHcl(interfaceEthernetIpv6OspfMtuIgnoreCfgToHclTerraform, true)(struct!.mtuIgnoreCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpv6OspfMtuIgnoreCfgList",
    },
    neighbor_cfg: {
      value: cdktf.listMapperHcl(interfaceEthernetIpv6OspfNeighborCfgToHclTerraform, true)(struct!.neighborCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpv6OspfNeighborCfgList",
    },
    network_list: {
      value: cdktf.listMapperHcl(interfaceEthernetIpv6OspfNetworkListStructToHclTerraform, true)(struct!.networkList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpv6OspfNetworkListStructList",
    },
    priority_cfg: {
      value: cdktf.listMapperHcl(interfaceEthernetIpv6OspfPriorityCfgToHclTerraform, true)(struct!.priorityCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpv6OspfPriorityCfgList",
    },
    retransmit_interval_cfg: {
      value: cdktf.listMapperHcl(interfaceEthernetIpv6OspfRetransmitIntervalCfgToHclTerraform, true)(struct!.retransmitIntervalCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpv6OspfRetransmitIntervalCfgList",
    },
    transmit_delay_cfg: {
      value: cdktf.listMapperHcl(interfaceEthernetIpv6OspfTransmitDelayCfgToHclTerraform, true)(struct!.transmitDelayCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpv6OspfTransmitDelayCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpv6OspfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpv6Ospf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bfd !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfd = this._bfd;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._costCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCfg = this._costCfg?.internalValue;
    }
    if (this._deadIntervalCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadIntervalCfg = this._deadIntervalCfg?.internalValue;
    }
    if (this._helloIntervalCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloIntervalCfg = this._helloIntervalCfg?.internalValue;
    }
    if (this._mtuIgnoreCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtuIgnoreCfg = this._mtuIgnoreCfg?.internalValue;
    }
    if (this._neighborCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborCfg = this._neighborCfg?.internalValue;
    }
    if (this._networkList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkList = this._networkList?.internalValue;
    }
    if (this._priorityCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityCfg = this._priorityCfg?.internalValue;
    }
    if (this._retransmitIntervalCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitIntervalCfg = this._retransmitIntervalCfg?.internalValue;
    }
    if (this._transmitDelayCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitDelayCfg = this._transmitDelayCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpv6Ospf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bfd = undefined;
      this._disable = undefined;
      this._uuid = undefined;
      this._costCfg.internalValue = undefined;
      this._deadIntervalCfg.internalValue = undefined;
      this._helloIntervalCfg.internalValue = undefined;
      this._mtuIgnoreCfg.internalValue = undefined;
      this._neighborCfg.internalValue = undefined;
      this._networkList.internalValue = undefined;
      this._priorityCfg.internalValue = undefined;
      this._retransmitIntervalCfg.internalValue = undefined;
      this._transmitDelayCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bfd = value.bfd;
      this._disable = value.disable;
      this._uuid = value.uuid;
      this._costCfg.internalValue = value.costCfg;
      this._deadIntervalCfg.internalValue = value.deadIntervalCfg;
      this._helloIntervalCfg.internalValue = value.helloIntervalCfg;
      this._mtuIgnoreCfg.internalValue = value.mtuIgnoreCfg;
      this._neighborCfg.internalValue = value.neighborCfg;
      this._networkList.internalValue = value.networkList;
      this._priorityCfg.internalValue = value.priorityCfg;
      this._retransmitIntervalCfg.internalValue = value.retransmitIntervalCfg;
      this._transmitDelayCfg.internalValue = value.transmitDelayCfg;
    }
  }

  // bfd - computed: false, optional: true, required: false
  private _bfd?: number; 
  public get bfd() {
    return this.getNumberAttribute('bfd');
  }
  public set bfd(value: number) {
    this._bfd = value;
  }
  public resetBfd() {
    this._bfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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

  // cost_cfg - computed: false, optional: true, required: false
  private _costCfg = new InterfaceEthernetIpv6OspfCostCfgList(this, "cost_cfg", false);
  public get costCfg() {
    return this._costCfg;
  }
  public putCostCfg(value: InterfaceEthernetIpv6OspfCostCfg[] | cdktf.IResolvable) {
    this._costCfg.internalValue = value;
  }
  public resetCostCfg() {
    this._costCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCfgInput() {
    return this._costCfg.internalValue;
  }

  // dead_interval_cfg - computed: false, optional: true, required: false
  private _deadIntervalCfg = new InterfaceEthernetIpv6OspfDeadIntervalCfgList(this, "dead_interval_cfg", false);
  public get deadIntervalCfg() {
    return this._deadIntervalCfg;
  }
  public putDeadIntervalCfg(value: InterfaceEthernetIpv6OspfDeadIntervalCfg[] | cdktf.IResolvable) {
    this._deadIntervalCfg.internalValue = value;
  }
  public resetDeadIntervalCfg() {
    this._deadIntervalCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadIntervalCfgInput() {
    return this._deadIntervalCfg.internalValue;
  }

  // hello_interval_cfg - computed: false, optional: true, required: false
  private _helloIntervalCfg = new InterfaceEthernetIpv6OspfHelloIntervalCfgList(this, "hello_interval_cfg", false);
  public get helloIntervalCfg() {
    return this._helloIntervalCfg;
  }
  public putHelloIntervalCfg(value: InterfaceEthernetIpv6OspfHelloIntervalCfg[] | cdktf.IResolvable) {
    this._helloIntervalCfg.internalValue = value;
  }
  public resetHelloIntervalCfg() {
    this._helloIntervalCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalCfgInput() {
    return this._helloIntervalCfg.internalValue;
  }

  // mtu_ignore_cfg - computed: false, optional: true, required: false
  private _mtuIgnoreCfg = new InterfaceEthernetIpv6OspfMtuIgnoreCfgList(this, "mtu_ignore_cfg", false);
  public get mtuIgnoreCfg() {
    return this._mtuIgnoreCfg;
  }
  public putMtuIgnoreCfg(value: InterfaceEthernetIpv6OspfMtuIgnoreCfg[] | cdktf.IResolvable) {
    this._mtuIgnoreCfg.internalValue = value;
  }
  public resetMtuIgnoreCfg() {
    this._mtuIgnoreCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuIgnoreCfgInput() {
    return this._mtuIgnoreCfg.internalValue;
  }

  // neighbor_cfg - computed: false, optional: true, required: false
  private _neighborCfg = new InterfaceEthernetIpv6OspfNeighborCfgList(this, "neighbor_cfg", false);
  public get neighborCfg() {
    return this._neighborCfg;
  }
  public putNeighborCfg(value: InterfaceEthernetIpv6OspfNeighborCfg[] | cdktf.IResolvable) {
    this._neighborCfg.internalValue = value;
  }
  public resetNeighborCfg() {
    this._neighborCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborCfgInput() {
    return this._neighborCfg.internalValue;
  }

  // network_list - computed: false, optional: true, required: false
  private _networkList = new InterfaceEthernetIpv6OspfNetworkListStructList(this, "network_list", false);
  public get networkList() {
    return this._networkList;
  }
  public putNetworkList(value: InterfaceEthernetIpv6OspfNetworkListStruct[] | cdktf.IResolvable) {
    this._networkList.internalValue = value;
  }
  public resetNetworkList() {
    this._networkList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkListInput() {
    return this._networkList.internalValue;
  }

  // priority_cfg - computed: false, optional: true, required: false
  private _priorityCfg = new InterfaceEthernetIpv6OspfPriorityCfgList(this, "priority_cfg", false);
  public get priorityCfg() {
    return this._priorityCfg;
  }
  public putPriorityCfg(value: InterfaceEthernetIpv6OspfPriorityCfg[] | cdktf.IResolvable) {
    this._priorityCfg.internalValue = value;
  }
  public resetPriorityCfg() {
    this._priorityCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityCfgInput() {
    return this._priorityCfg.internalValue;
  }

  // retransmit_interval_cfg - computed: false, optional: true, required: false
  private _retransmitIntervalCfg = new InterfaceEthernetIpv6OspfRetransmitIntervalCfgList(this, "retransmit_interval_cfg", false);
  public get retransmitIntervalCfg() {
    return this._retransmitIntervalCfg;
  }
  public putRetransmitIntervalCfg(value: InterfaceEthernetIpv6OspfRetransmitIntervalCfg[] | cdktf.IResolvable) {
    this._retransmitIntervalCfg.internalValue = value;
  }
  public resetRetransmitIntervalCfg() {
    this._retransmitIntervalCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitIntervalCfgInput() {
    return this._retransmitIntervalCfg.internalValue;
  }

  // transmit_delay_cfg - computed: false, optional: true, required: false
  private _transmitDelayCfg = new InterfaceEthernetIpv6OspfTransmitDelayCfgList(this, "transmit_delay_cfg", false);
  public get transmitDelayCfg() {
    return this._transmitDelayCfg;
  }
  public putTransmitDelayCfg(value: InterfaceEthernetIpv6OspfTransmitDelayCfg[] | cdktf.IResolvable) {
    this._transmitDelayCfg.internalValue = value;
  }
  public resetTransmitDelayCfg() {
    this._transmitDelayCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitDelayCfgInput() {
    return this._transmitDelayCfg.internalValue;
  }
}
export interface InterfaceEthernetIpv6RipSplitHorizonCfg {
  /**
  * 'poisoned': Perform split horizon with poisoned reverse; 'disable': Disable split horizon; 'enable': Perform split horizon without poisoned reverse;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#state InterfaceEthernet#state}
  */
  readonly state?: string;
}

export function interfaceEthernetIpv6RipSplitHorizonCfgToTerraform(struct?: InterfaceEthernetIpv6RipSplitHorizonCfgOutputReference | InterfaceEthernetIpv6RipSplitHorizonCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function interfaceEthernetIpv6RipSplitHorizonCfgToHclTerraform(struct?: InterfaceEthernetIpv6RipSplitHorizonCfgOutputReference | InterfaceEthernetIpv6RipSplitHorizonCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpv6RipSplitHorizonCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpv6RipSplitHorizonCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpv6RipSplitHorizonCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._state = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._state = value.state;
    }
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface InterfaceEthernetIpv6Rip {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#uuid InterfaceEthernet#uuid}
  */
  readonly uuid?: string;
  /**
  * split_horizon_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#split_horizon_cfg InterfaceEthernet#split_horizon_cfg}
  */
  readonly splitHorizonCfg?: InterfaceEthernetIpv6RipSplitHorizonCfg;
}

export function interfaceEthernetIpv6RipToTerraform(struct?: InterfaceEthernetIpv6RipOutputReference | InterfaceEthernetIpv6Rip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    split_horizon_cfg: interfaceEthernetIpv6RipSplitHorizonCfgToTerraform(struct!.splitHorizonCfg),
  }
}


export function interfaceEthernetIpv6RipToHclTerraform(struct?: InterfaceEthernetIpv6RipOutputReference | InterfaceEthernetIpv6Rip): any {
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
    split_horizon_cfg: {
      value: interfaceEthernetIpv6RipSplitHorizonCfgToHclTerraform(struct!.splitHorizonCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpv6RipSplitHorizonCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpv6RipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpv6Rip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._splitHorizonCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitHorizonCfg = this._splitHorizonCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpv6Rip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._splitHorizonCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._splitHorizonCfg.internalValue = value.splitHorizonCfg;
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

  // split_horizon_cfg - computed: false, optional: true, required: false
  private _splitHorizonCfg = new InterfaceEthernetIpv6RipSplitHorizonCfgOutputReference(this, "split_horizon_cfg");
  public get splitHorizonCfg() {
    return this._splitHorizonCfg;
  }
  public putSplitHorizonCfg(value: InterfaceEthernetIpv6RipSplitHorizonCfg) {
    this._splitHorizonCfg.internalValue = value;
  }
  public resetSplitHorizonCfg() {
    this._splitHorizonCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitHorizonCfgInput() {
    return this._splitHorizonCfg.internalValue;
  }
}
export interface InterfaceEthernetIpv6RouterIsis {
  /**
  * ISO routing area tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#tag InterfaceEthernet#tag}
  */
  readonly tag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#uuid InterfaceEthernet#uuid}
  */
  readonly uuid?: string;
}

export function interfaceEthernetIpv6RouterIsisToTerraform(struct?: InterfaceEthernetIpv6RouterIsisOutputReference | InterfaceEthernetIpv6RouterIsis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag: cdktf.stringToTerraform(struct!.tag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function interfaceEthernetIpv6RouterIsisToHclTerraform(struct?: InterfaceEthernetIpv6RouterIsisOutputReference | InterfaceEthernetIpv6RouterIsis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
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

export class InterfaceEthernetIpv6RouterIsisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpv6RouterIsis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpv6RouterIsis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tag = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tag = value.tag;
      this._uuid = value.uuid;
    }
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
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
export interface InterfaceEthernetIpv6RouterOspfAreaListStruct {
  /**
  * OSPF area ID in IP address format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#area_id_addr InterfaceEthernet#area_id_addr}
  */
  readonly areaIdAddr?: string;
  /**
  * OSPF area ID as a decimal value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#area_id_num InterfaceEthernet#area_id_num}
  */
  readonly areaIdNum?: number;
  /**
  * Set the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#instance_id InterfaceEthernet#instance_id}
  */
  readonly instanceId?: number;
  /**
  * Set the OSPFv3 process tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#tag InterfaceEthernet#tag}
  */
  readonly tag?: string;
}

export function interfaceEthernetIpv6RouterOspfAreaListStructToTerraform(struct?: InterfaceEthernetIpv6RouterOspfAreaListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    area_id_addr: cdktf.stringToTerraform(struct!.areaIdAddr),
    area_id_num: cdktf.numberToTerraform(struct!.areaIdNum),
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function interfaceEthernetIpv6RouterOspfAreaListStructToHclTerraform(struct?: InterfaceEthernetIpv6RouterOspfAreaListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    area_id_addr: {
      value: cdktf.stringToHclTerraform(struct!.areaIdAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    area_id_num: {
      value: cdktf.numberToHclTerraform(struct!.areaIdNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpv6RouterOspfAreaListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIpv6RouterOspfAreaListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._areaIdAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaIdAddr = this._areaIdAddr;
    }
    if (this._areaIdNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaIdNum = this._areaIdNum;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpv6RouterOspfAreaListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._areaIdAddr = undefined;
      this._areaIdNum = undefined;
      this._instanceId = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._areaIdAddr = value.areaIdAddr;
      this._areaIdNum = value.areaIdNum;
      this._instanceId = value.instanceId;
      this._tag = value.tag;
    }
  }

  // area_id_addr - computed: false, optional: true, required: false
  private _areaIdAddr?: string; 
  public get areaIdAddr() {
    return this.getStringAttribute('area_id_addr');
  }
  public set areaIdAddr(value: string) {
    this._areaIdAddr = value;
  }
  public resetAreaIdAddr() {
    this._areaIdAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaIdAddrInput() {
    return this._areaIdAddr;
  }

  // area_id_num - computed: false, optional: true, required: false
  private _areaIdNum?: number; 
  public get areaIdNum() {
    return this.getNumberAttribute('area_id_num');
  }
  public set areaIdNum(value: number) {
    this._areaIdNum = value;
  }
  public resetAreaIdNum() {
    this._areaIdNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaIdNumInput() {
    return this._areaIdNum;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class InterfaceEthernetIpv6RouterOspfAreaListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIpv6RouterOspfAreaListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIpv6RouterOspfAreaListStructOutputReference {
    return new InterfaceEthernetIpv6RouterOspfAreaListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIpv6RouterOspf {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#uuid InterfaceEthernet#uuid}
  */
  readonly uuid?: string;
  /**
  * area_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#area_list InterfaceEthernet#area_list}
  */
  readonly areaList?: InterfaceEthernetIpv6RouterOspfAreaListStruct[] | cdktf.IResolvable;
}

export function interfaceEthernetIpv6RouterOspfToTerraform(struct?: InterfaceEthernetIpv6RouterOspfOutputReference | InterfaceEthernetIpv6RouterOspf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    area_list: cdktf.listMapper(interfaceEthernetIpv6RouterOspfAreaListStructToTerraform, true)(struct!.areaList),
  }
}


export function interfaceEthernetIpv6RouterOspfToHclTerraform(struct?: InterfaceEthernetIpv6RouterOspfOutputReference | InterfaceEthernetIpv6RouterOspf): any {
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
    area_list: {
      value: cdktf.listMapperHcl(interfaceEthernetIpv6RouterOspfAreaListStructToHclTerraform, true)(struct!.areaList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpv6RouterOspfAreaListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpv6RouterOspfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpv6RouterOspf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._areaList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaList = this._areaList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpv6RouterOspf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._areaList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._areaList.internalValue = value.areaList;
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

  // area_list - computed: false, optional: true, required: false
  private _areaList = new InterfaceEthernetIpv6RouterOspfAreaListStructList(this, "area_list", false);
  public get areaList() {
    return this._areaList;
  }
  public putAreaList(value: InterfaceEthernetIpv6RouterOspfAreaListStruct[] | cdktf.IResolvable) {
    this._areaList.internalValue = value;
  }
  public resetAreaList() {
    this._areaList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaListInput() {
    return this._areaList.internalValue;
  }
}
export interface InterfaceEthernetIpv6RouterRipng {
  /**
  * RIP Routing for IPv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#rip InterfaceEthernet#rip}
  */
  readonly rip?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#uuid InterfaceEthernet#uuid}
  */
  readonly uuid?: string;
}

export function interfaceEthernetIpv6RouterRipngToTerraform(struct?: InterfaceEthernetIpv6RouterRipngOutputReference | InterfaceEthernetIpv6RouterRipng): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rip: cdktf.numberToTerraform(struct!.rip),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function interfaceEthernetIpv6RouterRipngToHclTerraform(struct?: InterfaceEthernetIpv6RouterRipngOutputReference | InterfaceEthernetIpv6RouterRipng): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rip: {
      value: cdktf.numberToHclTerraform(struct!.rip),
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

export class InterfaceEthernetIpv6RouterRipngOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpv6RouterRipng | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rip !== undefined) {
      hasAnyValues = true;
      internalValueResult.rip = this._rip;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpv6RouterRipng | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rip = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rip = value.rip;
      this._uuid = value.uuid;
    }
  }

  // rip - computed: false, optional: true, required: false
  private _rip?: number; 
  public get rip() {
    return this.getNumberAttribute('rip');
  }
  public set rip(value: number) {
    this._rip = value;
  }
  public resetRip() {
    this._rip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripInput() {
    return this._rip;
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
export interface InterfaceEthernetIpv6Router {
  /**
  * isis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#isis InterfaceEthernet#isis}
  */
  readonly isis?: InterfaceEthernetIpv6RouterIsis;
  /**
  * ospf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#ospf InterfaceEthernet#ospf}
  */
  readonly ospf?: InterfaceEthernetIpv6RouterOspf;
  /**
  * ripng block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#ripng InterfaceEthernet#ripng}
  */
  readonly ripng?: InterfaceEthernetIpv6RouterRipng;
}

export function interfaceEthernetIpv6RouterToTerraform(struct?: InterfaceEthernetIpv6RouterOutputReference | InterfaceEthernetIpv6Router): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    isis: interfaceEthernetIpv6RouterIsisToTerraform(struct!.isis),
    ospf: interfaceEthernetIpv6RouterOspfToTerraform(struct!.ospf),
    ripng: interfaceEthernetIpv6RouterRipngToTerraform(struct!.ripng),
  }
}


export function interfaceEthernetIpv6RouterToHclTerraform(struct?: InterfaceEthernetIpv6RouterOutputReference | InterfaceEthernetIpv6Router): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    isis: {
      value: interfaceEthernetIpv6RouterIsisToHclTerraform(struct!.isis),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpv6RouterIsisList",
    },
    ospf: {
      value: interfaceEthernetIpv6RouterOspfToHclTerraform(struct!.ospf),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpv6RouterOspfList",
    },
    ripng: {
      value: interfaceEthernetIpv6RouterRipngToHclTerraform(struct!.ripng),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpv6RouterRipngList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpv6RouterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpv6Router | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.isis = this._isis?.internalValue;
    }
    if (this._ospf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospf = this._ospf?.internalValue;
    }
    if (this._ripng?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ripng = this._ripng?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpv6Router | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isis.internalValue = undefined;
      this._ospf.internalValue = undefined;
      this._ripng.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isis.internalValue = value.isis;
      this._ospf.internalValue = value.ospf;
      this._ripng.internalValue = value.ripng;
    }
  }

  // isis - computed: false, optional: true, required: false
  private _isis = new InterfaceEthernetIpv6RouterIsisOutputReference(this, "isis");
  public get isis() {
    return this._isis;
  }
  public putIsis(value: InterfaceEthernetIpv6RouterIsis) {
    this._isis.internalValue = value;
  }
  public resetIsis() {
    this._isis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisInput() {
    return this._isis.internalValue;
  }

  // ospf - computed: false, optional: true, required: false
  private _ospf = new InterfaceEthernetIpv6RouterOspfOutputReference(this, "ospf");
  public get ospf() {
    return this._ospf;
  }
  public putOspf(value: InterfaceEthernetIpv6RouterOspf) {
    this._ospf.internalValue = value;
  }
  public resetOspf() {
    this._ospf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfInput() {
    return this._ospf.internalValue;
  }

  // ripng - computed: false, optional: true, required: false
  private _ripng = new InterfaceEthernetIpv6RouterRipngOutputReference(this, "ripng");
  public get ripng() {
    return this._ripng;
  }
  public putRipng(value: InterfaceEthernetIpv6RouterRipng) {
    this._ripng.internalValue = value;
  }
  public resetRipng() {
    this._ripng.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripngInput() {
    return this._ripng.internalValue;
  }
}
export interface InterfaceEthernetIpv6RouterAdverPrefixListStruct {
  /**
  * Specify that the Prefix is not usable for autoconfiguration (default:autonomous)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#not_autonomous InterfaceEthernet#not_autonomous}
  */
  readonly notAutonomous?: number;
  /**
  * Specify that the Prefix is not On-Link (default: on-link)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#not_on_link InterfaceEthernet#not_on_link}
  */
  readonly notOnLink?: number;
  /**
  * Specify Prefix Preferred Lifetime (default:604800) (Prefix Advertised Preferred Lifetime (default: 604800))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#preferred_lifetime InterfaceEthernet#preferred_lifetime}
  */
  readonly preferredLifetime?: number;
  /**
  * Set Router Advertisement On-Link Prefix (IPv6 On-Link Prefix)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#prefix InterfaceEthernet#prefix}
  */
  readonly prefix?: string;
  /**
  * Specify Valid Lifetime (default:2592000) (Prefix Advertised Valid Lifetime (default: 2592000))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#valid_lifetime InterfaceEthernet#valid_lifetime}
  */
  readonly validLifetime?: number;
}

export function interfaceEthernetIpv6RouterAdverPrefixListStructToTerraform(struct?: InterfaceEthernetIpv6RouterAdverPrefixListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    not_autonomous: cdktf.numberToTerraform(struct!.notAutonomous),
    not_on_link: cdktf.numberToTerraform(struct!.notOnLink),
    preferred_lifetime: cdktf.numberToTerraform(struct!.preferredLifetime),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    valid_lifetime: cdktf.numberToTerraform(struct!.validLifetime),
  }
}


export function interfaceEthernetIpv6RouterAdverPrefixListStructToHclTerraform(struct?: InterfaceEthernetIpv6RouterAdverPrefixListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    not_autonomous: {
      value: cdktf.numberToHclTerraform(struct!.notAutonomous),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    not_on_link: {
      value: cdktf.numberToHclTerraform(struct!.notOnLink),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preferred_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.preferredLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    valid_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.validLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpv6RouterAdverPrefixListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIpv6RouterAdverPrefixListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notAutonomous !== undefined) {
      hasAnyValues = true;
      internalValueResult.notAutonomous = this._notAutonomous;
    }
    if (this._notOnLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.notOnLink = this._notOnLink;
    }
    if (this._preferredLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredLifetime = this._preferredLifetime;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._validLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.validLifetime = this._validLifetime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpv6RouterAdverPrefixListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notAutonomous = undefined;
      this._notOnLink = undefined;
      this._preferredLifetime = undefined;
      this._prefix = undefined;
      this._validLifetime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notAutonomous = value.notAutonomous;
      this._notOnLink = value.notOnLink;
      this._preferredLifetime = value.preferredLifetime;
      this._prefix = value.prefix;
      this._validLifetime = value.validLifetime;
    }
  }

  // not_autonomous - computed: false, optional: true, required: false
  private _notAutonomous?: number; 
  public get notAutonomous() {
    return this.getNumberAttribute('not_autonomous');
  }
  public set notAutonomous(value: number) {
    this._notAutonomous = value;
  }
  public resetNotAutonomous() {
    this._notAutonomous = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notAutonomousInput() {
    return this._notAutonomous;
  }

  // not_on_link - computed: false, optional: true, required: false
  private _notOnLink?: number; 
  public get notOnLink() {
    return this.getNumberAttribute('not_on_link');
  }
  public set notOnLink(value: number) {
    this._notOnLink = value;
  }
  public resetNotOnLink() {
    this._notOnLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notOnLinkInput() {
    return this._notOnLink;
  }

  // preferred_lifetime - computed: false, optional: true, required: false
  private _preferredLifetime?: number; 
  public get preferredLifetime() {
    return this.getNumberAttribute('preferred_lifetime');
  }
  public set preferredLifetime(value: number) {
    this._preferredLifetime = value;
  }
  public resetPreferredLifetime() {
    this._preferredLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredLifetimeInput() {
    return this._preferredLifetime;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // valid_lifetime - computed: false, optional: true, required: false
  private _validLifetime?: number; 
  public get validLifetime() {
    return this.getNumberAttribute('valid_lifetime');
  }
  public set validLifetime(value: number) {
    this._validLifetime = value;
  }
  public resetValidLifetime() {
    this._validLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validLifetimeInput() {
    return this._validLifetime;
  }
}

export class InterfaceEthernetIpv6RouterAdverPrefixListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIpv6RouterAdverPrefixListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIpv6RouterAdverPrefixListStructOutputReference {
    return new InterfaceEthernetIpv6RouterAdverPrefixListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIpv6RouterAdver {
  /**
  * 'enable': Enable Router Advertisements on this interface; 'disable': Disable Router Advertisements on this interface;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#action InterfaceEthernet#action}
  */
  readonly action?: string;
  /**
  * Set Router Advertisement MTU Option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#adver_mtu InterfaceEthernet#adver_mtu}
  */
  readonly adverMtu?: number;
  /**
  * Disable Router Advertisement MTU Option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#adver_mtu_disable InterfaceEthernet#adver_mtu_disable}
  */
  readonly adverMtuDisable?: number;
  /**
  * Specify ha VRRP-A vrid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#adver_vrid InterfaceEthernet#adver_vrid}
  */
  readonly adverVrid?: number;
  /**
  * Default VRRP-A vrid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#adver_vrid_default InterfaceEthernet#adver_vrid_default}
  */
  readonly adverVridDefault?: number;
  /**
  * Set Router Advertisement Default Lifetime (default: 1800) (Default Lifetime (seconds))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#default_lifetime InterfaceEthernet#default_lifetime}
  */
  readonly defaultLifetime?: number;
  /**
  * Use a floating IP as the source address for Router advertisements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#floating_ip InterfaceEthernet#floating_ip}
  */
  readonly floatingIp?: string;
  /**
  * Use a floating IP as the source address for Router advertisements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#floating_ip_default_vrid InterfaceEthernet#floating_ip_default_vrid}
  */
  readonly floatingIpDefaultVrid?: string;
  /**
  * Set Router Advertisement Hop Limit (default: 255)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#hop_limit InterfaceEthernet#hop_limit}
  */
  readonly hopLimit?: number;
  /**
  * 'enable': Enable the Managed Address Configuration flag; 'disable': Disable the Managed Address Configuration flag (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#managed_config_action InterfaceEthernet#managed_config_action}
  */
  readonly managedConfigAction?: string;
  /**
  * Set Router Advertisement Max Interval (default: 600) (Max Router Advertisement Interval (seconds))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#max_interval InterfaceEthernet#max_interval}
  */
  readonly maxInterval?: number;
  /**
  * Set Router Advertisement Min Interval (default: 200) (Min Router Advertisement Interval (seconds))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#min_interval InterfaceEthernet#min_interval}
  */
  readonly minInterval?: number;
  /**
  * 'enable': Enable the Other Stateful Configuration flag; 'disable': Disable the Other Stateful Configuration flag (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#other_config_action InterfaceEthernet#other_config_action}
  */
  readonly otherConfigAction?: string;
  /**
  * Rate Limit the processing of incoming Router Solicitations (Max Number of Router Solicitations to process per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#rate_limit InterfaceEthernet#rate_limit}
  */
  readonly rateLimit?: number;
  /**
  * Set Router Advertisement Reachable ime (default: 0) (Reachable Time (milliseconds))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#reachable_time InterfaceEthernet#reachable_time}
  */
  readonly reachableTime?: number;
  /**
  * Set Router Advertisement Retransmit Timer (default: 0)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#retransmit_timer InterfaceEthernet#retransmit_timer}
  */
  readonly retransmitTimer?: number;
  /**
  * Use a floating IP as the source address for Router advertisements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#use_floating_ip InterfaceEthernet#use_floating_ip}
  */
  readonly useFloatingIp?: number;
  /**
  * Use a floating IP as the source address for Router advertisements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#use_floating_ip_default_vrid InterfaceEthernet#use_floating_ip_default_vrid}
  */
  readonly useFloatingIpDefaultVrid?: number;
  /**
  * prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#prefix_list InterfaceEthernet#prefix_list}
  */
  readonly prefixList?: InterfaceEthernetIpv6RouterAdverPrefixListStruct[] | cdktf.IResolvable;
}

export function interfaceEthernetIpv6RouterAdverToTerraform(struct?: InterfaceEthernetIpv6RouterAdverOutputReference | InterfaceEthernetIpv6RouterAdver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    adver_mtu: cdktf.numberToTerraform(struct!.adverMtu),
    adver_mtu_disable: cdktf.numberToTerraform(struct!.adverMtuDisable),
    adver_vrid: cdktf.numberToTerraform(struct!.adverVrid),
    adver_vrid_default: cdktf.numberToTerraform(struct!.adverVridDefault),
    default_lifetime: cdktf.numberToTerraform(struct!.defaultLifetime),
    floating_ip: cdktf.stringToTerraform(struct!.floatingIp),
    floating_ip_default_vrid: cdktf.stringToTerraform(struct!.floatingIpDefaultVrid),
    hop_limit: cdktf.numberToTerraform(struct!.hopLimit),
    managed_config_action: cdktf.stringToTerraform(struct!.managedConfigAction),
    max_interval: cdktf.numberToTerraform(struct!.maxInterval),
    min_interval: cdktf.numberToTerraform(struct!.minInterval),
    other_config_action: cdktf.stringToTerraform(struct!.otherConfigAction),
    rate_limit: cdktf.numberToTerraform(struct!.rateLimit),
    reachable_time: cdktf.numberToTerraform(struct!.reachableTime),
    retransmit_timer: cdktf.numberToTerraform(struct!.retransmitTimer),
    use_floating_ip: cdktf.numberToTerraform(struct!.useFloatingIp),
    use_floating_ip_default_vrid: cdktf.numberToTerraform(struct!.useFloatingIpDefaultVrid),
    prefix_list: cdktf.listMapper(interfaceEthernetIpv6RouterAdverPrefixListStructToTerraform, true)(struct!.prefixList),
  }
}


export function interfaceEthernetIpv6RouterAdverToHclTerraform(struct?: InterfaceEthernetIpv6RouterAdverOutputReference | InterfaceEthernetIpv6RouterAdver): any {
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
    adver_mtu: {
      value: cdktf.numberToHclTerraform(struct!.adverMtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    adver_mtu_disable: {
      value: cdktf.numberToHclTerraform(struct!.adverMtuDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    adver_vrid: {
      value: cdktf.numberToHclTerraform(struct!.adverVrid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    adver_vrid_default: {
      value: cdktf.numberToHclTerraform(struct!.adverVridDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.defaultLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    floating_ip: {
      value: cdktf.stringToHclTerraform(struct!.floatingIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    floating_ip_default_vrid: {
      value: cdktf.stringToHclTerraform(struct!.floatingIpDefaultVrid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hop_limit: {
      value: cdktf.numberToHclTerraform(struct!.hopLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    managed_config_action: {
      value: cdktf.stringToHclTerraform(struct!.managedConfigAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_interval: {
      value: cdktf.numberToHclTerraform(struct!.maxInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_interval: {
      value: cdktf.numberToHclTerraform(struct!.minInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_config_action: {
      value: cdktf.stringToHclTerraform(struct!.otherConfigAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.rateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reachable_time: {
      value: cdktf.numberToHclTerraform(struct!.reachableTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retransmit_timer: {
      value: cdktf.numberToHclTerraform(struct!.retransmitTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_floating_ip: {
      value: cdktf.numberToHclTerraform(struct!.useFloatingIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_floating_ip_default_vrid: {
      value: cdktf.numberToHclTerraform(struct!.useFloatingIpDefaultVrid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix_list: {
      value: cdktf.listMapperHcl(interfaceEthernetIpv6RouterAdverPrefixListStructToHclTerraform, true)(struct!.prefixList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpv6RouterAdverPrefixListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpv6RouterAdverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpv6RouterAdver | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._adverMtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.adverMtu = this._adverMtu;
    }
    if (this._adverMtuDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.adverMtuDisable = this._adverMtuDisable;
    }
    if (this._adverVrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.adverVrid = this._adverVrid;
    }
    if (this._adverVridDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.adverVridDefault = this._adverVridDefault;
    }
    if (this._defaultLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultLifetime = this._defaultLifetime;
    }
    if (this._floatingIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIp = this._floatingIp;
    }
    if (this._floatingIpDefaultVrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIpDefaultVrid = this._floatingIpDefaultVrid;
    }
    if (this._hopLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.hopLimit = this._hopLimit;
    }
    if (this._managedConfigAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedConfigAction = this._managedConfigAction;
    }
    if (this._maxInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInterval = this._maxInterval;
    }
    if (this._minInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInterval = this._minInterval;
    }
    if (this._otherConfigAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherConfigAction = this._otherConfigAction;
    }
    if (this._rateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit;
    }
    if (this._reachableTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.reachableTime = this._reachableTime;
    }
    if (this._retransmitTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitTimer = this._retransmitTimer;
    }
    if (this._useFloatingIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.useFloatingIp = this._useFloatingIp;
    }
    if (this._useFloatingIpDefaultVrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.useFloatingIpDefaultVrid = this._useFloatingIpDefaultVrid;
    }
    if (this._prefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpv6RouterAdver | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._adverMtu = undefined;
      this._adverMtuDisable = undefined;
      this._adverVrid = undefined;
      this._adverVridDefault = undefined;
      this._defaultLifetime = undefined;
      this._floatingIp = undefined;
      this._floatingIpDefaultVrid = undefined;
      this._hopLimit = undefined;
      this._managedConfigAction = undefined;
      this._maxInterval = undefined;
      this._minInterval = undefined;
      this._otherConfigAction = undefined;
      this._rateLimit = undefined;
      this._reachableTime = undefined;
      this._retransmitTimer = undefined;
      this._useFloatingIp = undefined;
      this._useFloatingIpDefaultVrid = undefined;
      this._prefixList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._adverMtu = value.adverMtu;
      this._adverMtuDisable = value.adverMtuDisable;
      this._adverVrid = value.adverVrid;
      this._adverVridDefault = value.adverVridDefault;
      this._defaultLifetime = value.defaultLifetime;
      this._floatingIp = value.floatingIp;
      this._floatingIpDefaultVrid = value.floatingIpDefaultVrid;
      this._hopLimit = value.hopLimit;
      this._managedConfigAction = value.managedConfigAction;
      this._maxInterval = value.maxInterval;
      this._minInterval = value.minInterval;
      this._otherConfigAction = value.otherConfigAction;
      this._rateLimit = value.rateLimit;
      this._reachableTime = value.reachableTime;
      this._retransmitTimer = value.retransmitTimer;
      this._useFloatingIp = value.useFloatingIp;
      this._useFloatingIpDefaultVrid = value.useFloatingIpDefaultVrid;
      this._prefixList.internalValue = value.prefixList;
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

  // adver_mtu - computed: false, optional: true, required: false
  private _adverMtu?: number; 
  public get adverMtu() {
    return this.getNumberAttribute('adver_mtu');
  }
  public set adverMtu(value: number) {
    this._adverMtu = value;
  }
  public resetAdverMtu() {
    this._adverMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adverMtuInput() {
    return this._adverMtu;
  }

  // adver_mtu_disable - computed: false, optional: true, required: false
  private _adverMtuDisable?: number; 
  public get adverMtuDisable() {
    return this.getNumberAttribute('adver_mtu_disable');
  }
  public set adverMtuDisable(value: number) {
    this._adverMtuDisable = value;
  }
  public resetAdverMtuDisable() {
    this._adverMtuDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adverMtuDisableInput() {
    return this._adverMtuDisable;
  }

  // adver_vrid - computed: false, optional: true, required: false
  private _adverVrid?: number; 
  public get adverVrid() {
    return this.getNumberAttribute('adver_vrid');
  }
  public set adverVrid(value: number) {
    this._adverVrid = value;
  }
  public resetAdverVrid() {
    this._adverVrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adverVridInput() {
    return this._adverVrid;
  }

  // adver_vrid_default - computed: false, optional: true, required: false
  private _adverVridDefault?: number; 
  public get adverVridDefault() {
    return this.getNumberAttribute('adver_vrid_default');
  }
  public set adverVridDefault(value: number) {
    this._adverVridDefault = value;
  }
  public resetAdverVridDefault() {
    this._adverVridDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adverVridDefaultInput() {
    return this._adverVridDefault;
  }

  // default_lifetime - computed: false, optional: true, required: false
  private _defaultLifetime?: number; 
  public get defaultLifetime() {
    return this.getNumberAttribute('default_lifetime');
  }
  public set defaultLifetime(value: number) {
    this._defaultLifetime = value;
  }
  public resetDefaultLifetime() {
    this._defaultLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLifetimeInput() {
    return this._defaultLifetime;
  }

  // floating_ip - computed: false, optional: true, required: false
  private _floatingIp?: string; 
  public get floatingIp() {
    return this.getStringAttribute('floating_ip');
  }
  public set floatingIp(value: string) {
    this._floatingIp = value;
  }
  public resetFloatingIp() {
    this._floatingIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpInput() {
    return this._floatingIp;
  }

  // floating_ip_default_vrid - computed: false, optional: true, required: false
  private _floatingIpDefaultVrid?: string; 
  public get floatingIpDefaultVrid() {
    return this.getStringAttribute('floating_ip_default_vrid');
  }
  public set floatingIpDefaultVrid(value: string) {
    this._floatingIpDefaultVrid = value;
  }
  public resetFloatingIpDefaultVrid() {
    this._floatingIpDefaultVrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpDefaultVridInput() {
    return this._floatingIpDefaultVrid;
  }

  // hop_limit - computed: false, optional: true, required: false
  private _hopLimit?: number; 
  public get hopLimit() {
    return this.getNumberAttribute('hop_limit');
  }
  public set hopLimit(value: number) {
    this._hopLimit = value;
  }
  public resetHopLimit() {
    this._hopLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hopLimitInput() {
    return this._hopLimit;
  }

  // managed_config_action - computed: false, optional: true, required: false
  private _managedConfigAction?: string; 
  public get managedConfigAction() {
    return this.getStringAttribute('managed_config_action');
  }
  public set managedConfigAction(value: string) {
    this._managedConfigAction = value;
  }
  public resetManagedConfigAction() {
    this._managedConfigAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedConfigActionInput() {
    return this._managedConfigAction;
  }

  // max_interval - computed: false, optional: true, required: false
  private _maxInterval?: number; 
  public get maxInterval() {
    return this.getNumberAttribute('max_interval');
  }
  public set maxInterval(value: number) {
    this._maxInterval = value;
  }
  public resetMaxInterval() {
    this._maxInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIntervalInput() {
    return this._maxInterval;
  }

  // min_interval - computed: false, optional: true, required: false
  private _minInterval?: number; 
  public get minInterval() {
    return this.getNumberAttribute('min_interval');
  }
  public set minInterval(value: number) {
    this._minInterval = value;
  }
  public resetMinInterval() {
    this._minInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minIntervalInput() {
    return this._minInterval;
  }

  // other_config_action - computed: false, optional: true, required: false
  private _otherConfigAction?: string; 
  public get otherConfigAction() {
    return this.getStringAttribute('other_config_action');
  }
  public set otherConfigAction(value: string) {
    this._otherConfigAction = value;
  }
  public resetOtherConfigAction() {
    this._otherConfigAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherConfigActionInput() {
    return this._otherConfigAction;
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit?: number; 
  public get rateLimit() {
    return this.getNumberAttribute('rate_limit');
  }
  public set rateLimit(value: number) {
    this._rateLimit = value;
  }
  public resetRateLimit() {
    this._rateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit;
  }

  // reachable_time - computed: false, optional: true, required: false
  private _reachableTime?: number; 
  public get reachableTime() {
    return this.getNumberAttribute('reachable_time');
  }
  public set reachableTime(value: number) {
    this._reachableTime = value;
  }
  public resetReachableTime() {
    this._reachableTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachableTimeInput() {
    return this._reachableTime;
  }

  // retransmit_timer - computed: false, optional: true, required: false
  private _retransmitTimer?: number; 
  public get retransmitTimer() {
    return this.getNumberAttribute('retransmit_timer');
  }
  public set retransmitTimer(value: number) {
    this._retransmitTimer = value;
  }
  public resetRetransmitTimer() {
    this._retransmitTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitTimerInput() {
    return this._retransmitTimer;
  }

  // use_floating_ip - computed: false, optional: true, required: false
  private _useFloatingIp?: number; 
  public get useFloatingIp() {
    return this.getNumberAttribute('use_floating_ip');
  }
  public set useFloatingIp(value: number) {
    this._useFloatingIp = value;
  }
  public resetUseFloatingIp() {
    this._useFloatingIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useFloatingIpInput() {
    return this._useFloatingIp;
  }

  // use_floating_ip_default_vrid - computed: false, optional: true, required: false
  private _useFloatingIpDefaultVrid?: number; 
  public get useFloatingIpDefaultVrid() {
    return this.getNumberAttribute('use_floating_ip_default_vrid');
  }
  public set useFloatingIpDefaultVrid(value: number) {
    this._useFloatingIpDefaultVrid = value;
  }
  public resetUseFloatingIpDefaultVrid() {
    this._useFloatingIpDefaultVrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useFloatingIpDefaultVridInput() {
    return this._useFloatingIpDefaultVrid;
  }

  // prefix_list - computed: false, optional: true, required: false
  private _prefixList = new InterfaceEthernetIpv6RouterAdverPrefixListStructList(this, "prefix_list", false);
  public get prefixList() {
    return this._prefixList;
  }
  public putPrefixList(value: InterfaceEthernetIpv6RouterAdverPrefixListStruct[] | cdktf.IResolvable) {
    this._prefixList.internalValue = value;
  }
  public resetPrefixList() {
    this._prefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList.internalValue;
  }
}
export interface InterfaceEthernetIpv6StatefulFirewall {
  /**
  * Access-list for traffic from the outside
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#access_list InterfaceEthernet#access_list}
  */
  readonly accessList?: number;
  /**
  * Access-list Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#acl_name InterfaceEthernet#acl_name}
  */
  readonly aclName?: string;
  /**
  * Class List (Class List Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#class_list InterfaceEthernet#class_list}
  */
  readonly classList?: string;
  /**
  * Inside (private) interface for stateful firewall
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#inside InterfaceEthernet#inside}
  */
  readonly inside?: number;
  /**
  * Outside (public) interface for stateful firewall
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#outside InterfaceEthernet#outside}
  */
  readonly outside?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#uuid InterfaceEthernet#uuid}
  */
  readonly uuid?: string;
}

export function interfaceEthernetIpv6StatefulFirewallToTerraform(struct?: InterfaceEthernetIpv6StatefulFirewallOutputReference | InterfaceEthernetIpv6StatefulFirewall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.numberToTerraform(struct!.accessList),
    acl_name: cdktf.stringToTerraform(struct!.aclName),
    class_list: cdktf.stringToTerraform(struct!.classList),
    inside: cdktf.numberToTerraform(struct!.inside),
    outside: cdktf.numberToTerraform(struct!.outside),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function interfaceEthernetIpv6StatefulFirewallToHclTerraform(struct?: InterfaceEthernetIpv6StatefulFirewallOutputReference | InterfaceEthernetIpv6StatefulFirewall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_list: {
      value: cdktf.numberToHclTerraform(struct!.accessList),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acl_name: {
      value: cdktf.stringToHclTerraform(struct!.aclName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_list: {
      value: cdktf.stringToHclTerraform(struct!.classList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inside: {
      value: cdktf.numberToHclTerraform(struct!.inside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outside: {
      value: cdktf.numberToHclTerraform(struct!.outside),
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

export class InterfaceEthernetIpv6StatefulFirewallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpv6StatefulFirewall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList;
    }
    if (this._aclName !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclName = this._aclName;
    }
    if (this._classList !== undefined) {
      hasAnyValues = true;
      internalValueResult.classList = this._classList;
    }
    if (this._inside !== undefined) {
      hasAnyValues = true;
      internalValueResult.inside = this._inside;
    }
    if (this._outside !== undefined) {
      hasAnyValues = true;
      internalValueResult.outside = this._outside;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpv6StatefulFirewall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessList = undefined;
      this._aclName = undefined;
      this._classList = undefined;
      this._inside = undefined;
      this._outside = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessList = value.accessList;
      this._aclName = value.aclName;
      this._classList = value.classList;
      this._inside = value.inside;
      this._outside = value.outside;
      this._uuid = value.uuid;
    }
  }

  // access_list - computed: false, optional: true, required: false
  private _accessList?: number; 
  public get accessList() {
    return this.getNumberAttribute('access_list');
  }
  public set accessList(value: number) {
    this._accessList = value;
  }
  public resetAccessList() {
    this._accessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList;
  }

  // acl_name - computed: false, optional: true, required: false
  private _aclName?: string; 
  public get aclName() {
    return this.getStringAttribute('acl_name');
  }
  public set aclName(value: string) {
    this._aclName = value;
  }
  public resetAclName() {
    this._aclName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclNameInput() {
    return this._aclName;
  }

  // class_list - computed: false, optional: true, required: false
  private _classList?: string; 
  public get classList() {
    return this.getStringAttribute('class_list');
  }
  public set classList(value: string) {
    this._classList = value;
  }
  public resetClassList() {
    this._classList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListInput() {
    return this._classList;
  }

  // inside - computed: false, optional: true, required: false
  private _inside?: number; 
  public get inside() {
    return this.getNumberAttribute('inside');
  }
  public set inside(value: number) {
    this._inside = value;
  }
  public resetInside() {
    this._inside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideInput() {
    return this._inside;
  }

  // outside - computed: false, optional: true, required: false
  private _outside?: number; 
  public get outside() {
    return this.getNumberAttribute('outside');
  }
  public set outside(value: number) {
    this._outside = value;
  }
  public resetOutside() {
    this._outside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideInput() {
    return this._outside;
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
export interface InterfaceEthernetIpv6 {
  /**
  * Configure interface as inside
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#inside InterfaceEthernet#inside}
  */
  readonly inside?: number;
  /**
  * Enable IPv6 processing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#ipv6_enable InterfaceEthernet#ipv6_enable}
  */
  readonly ipv6Enable?: number;
  /**
  * Configure interface as outside
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#outside InterfaceEthernet#outside}
  */
  readonly outside?: number;
  /**
  * Ignore TTL decrement for a received packet before sending out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#ttl_ignore InterfaceEthernet#ttl_ignore}
  */
  readonly ttlIgnore?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#uuid InterfaceEthernet#uuid}
  */
  readonly uuid?: string;
  /**
  * access_list_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#access_list_cfg InterfaceEthernet#access_list_cfg}
  */
  readonly accessListCfg?: InterfaceEthernetIpv6AccessListCfg;
  /**
  * address_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#address_list InterfaceEthernet#address_list}
  */
  readonly addressList?: InterfaceEthernetIpv6AddressListStruct[] | cdktf.IResolvable;
  /**
  * ospf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#ospf InterfaceEthernet#ospf}
  */
  readonly ospf?: InterfaceEthernetIpv6Ospf;
  /**
  * rip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#rip InterfaceEthernet#rip}
  */
  readonly rip?: InterfaceEthernetIpv6Rip;
  /**
  * router block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#router InterfaceEthernet#router}
  */
  readonly router?: InterfaceEthernetIpv6Router;
  /**
  * router_adver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#router_adver InterfaceEthernet#router_adver}
  */
  readonly routerAdver?: InterfaceEthernetIpv6RouterAdver;
  /**
  * stateful_firewall block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#stateful_firewall InterfaceEthernet#stateful_firewall}
  */
  readonly statefulFirewall?: InterfaceEthernetIpv6StatefulFirewall;
}

export function interfaceEthernetIpv6ToTerraform(struct?: InterfaceEthernetIpv6OutputReference | InterfaceEthernetIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inside: cdktf.numberToTerraform(struct!.inside),
    ipv6_enable: cdktf.numberToTerraform(struct!.ipv6Enable),
    outside: cdktf.numberToTerraform(struct!.outside),
    ttl_ignore: cdktf.numberToTerraform(struct!.ttlIgnore),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    access_list_cfg: interfaceEthernetIpv6AccessListCfgToTerraform(struct!.accessListCfg),
    address_list: cdktf.listMapper(interfaceEthernetIpv6AddressListStructToTerraform, true)(struct!.addressList),
    ospf: interfaceEthernetIpv6OspfToTerraform(struct!.ospf),
    rip: interfaceEthernetIpv6RipToTerraform(struct!.rip),
    router: interfaceEthernetIpv6RouterToTerraform(struct!.router),
    router_adver: interfaceEthernetIpv6RouterAdverToTerraform(struct!.routerAdver),
    stateful_firewall: interfaceEthernetIpv6StatefulFirewallToTerraform(struct!.statefulFirewall),
  }
}


export function interfaceEthernetIpv6ToHclTerraform(struct?: InterfaceEthernetIpv6OutputReference | InterfaceEthernetIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inside: {
      value: cdktf.numberToHclTerraform(struct!.inside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_enable: {
      value: cdktf.numberToHclTerraform(struct!.ipv6Enable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outside: {
      value: cdktf.numberToHclTerraform(struct!.outside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl_ignore: {
      value: cdktf.numberToHclTerraform(struct!.ttlIgnore),
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
    access_list_cfg: {
      value: interfaceEthernetIpv6AccessListCfgToHclTerraform(struct!.accessListCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpv6AccessListCfgList",
    },
    address_list: {
      value: cdktf.listMapperHcl(interfaceEthernetIpv6AddressListStructToHclTerraform, true)(struct!.addressList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpv6AddressListStructList",
    },
    ospf: {
      value: interfaceEthernetIpv6OspfToHclTerraform(struct!.ospf),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpv6OspfList",
    },
    rip: {
      value: interfaceEthernetIpv6RipToHclTerraform(struct!.rip),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpv6RipList",
    },
    router: {
      value: interfaceEthernetIpv6RouterToHclTerraform(struct!.router),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpv6RouterList",
    },
    router_adver: {
      value: interfaceEthernetIpv6RouterAdverToHclTerraform(struct!.routerAdver),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpv6RouterAdverList",
    },
    stateful_firewall: {
      value: interfaceEthernetIpv6StatefulFirewallToHclTerraform(struct!.statefulFirewall),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpv6StatefulFirewallList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inside !== undefined) {
      hasAnyValues = true;
      internalValueResult.inside = this._inside;
    }
    if (this._ipv6Enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Enable = this._ipv6Enable;
    }
    if (this._outside !== undefined) {
      hasAnyValues = true;
      internalValueResult.outside = this._outside;
    }
    if (this._ttlIgnore !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttlIgnore = this._ttlIgnore;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._accessListCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessListCfg = this._accessListCfg?.internalValue;
    }
    if (this._addressList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressList = this._addressList?.internalValue;
    }
    if (this._ospf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospf = this._ospf?.internalValue;
    }
    if (this._rip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rip = this._rip?.internalValue;
    }
    if (this._router?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.router = this._router?.internalValue;
    }
    if (this._routerAdver?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerAdver = this._routerAdver?.internalValue;
    }
    if (this._statefulFirewall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statefulFirewall = this._statefulFirewall?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inside = undefined;
      this._ipv6Enable = undefined;
      this._outside = undefined;
      this._ttlIgnore = undefined;
      this._uuid = undefined;
      this._accessListCfg.internalValue = undefined;
      this._addressList.internalValue = undefined;
      this._ospf.internalValue = undefined;
      this._rip.internalValue = undefined;
      this._router.internalValue = undefined;
      this._routerAdver.internalValue = undefined;
      this._statefulFirewall.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inside = value.inside;
      this._ipv6Enable = value.ipv6Enable;
      this._outside = value.outside;
      this._ttlIgnore = value.ttlIgnore;
      this._uuid = value.uuid;
      this._accessListCfg.internalValue = value.accessListCfg;
      this._addressList.internalValue = value.addressList;
      this._ospf.internalValue = value.ospf;
      this._rip.internalValue = value.rip;
      this._router.internalValue = value.router;
      this._routerAdver.internalValue = value.routerAdver;
      this._statefulFirewall.internalValue = value.statefulFirewall;
    }
  }

  // inside - computed: false, optional: true, required: false
  private _inside?: number; 
  public get inside() {
    return this.getNumberAttribute('inside');
  }
  public set inside(value: number) {
    this._inside = value;
  }
  public resetInside() {
    this._inside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideInput() {
    return this._inside;
  }

  // ipv6_enable - computed: false, optional: true, required: false
  private _ipv6Enable?: number; 
  public get ipv6Enable() {
    return this.getNumberAttribute('ipv6_enable');
  }
  public set ipv6Enable(value: number) {
    this._ipv6Enable = value;
  }
  public resetIpv6Enable() {
    this._ipv6Enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EnableInput() {
    return this._ipv6Enable;
  }

  // outside - computed: false, optional: true, required: false
  private _outside?: number; 
  public get outside() {
    return this.getNumberAttribute('outside');
  }
  public set outside(value: number) {
    this._outside = value;
  }
  public resetOutside() {
    this._outside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideInput() {
    return this._outside;
  }

  // ttl_ignore - computed: false, optional: true, required: false
  private _ttlIgnore?: number; 
  public get ttlIgnore() {
    return this.getNumberAttribute('ttl_ignore');
  }
  public set ttlIgnore(value: number) {
    this._ttlIgnore = value;
  }
  public resetTtlIgnore() {
    this._ttlIgnore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlIgnoreInput() {
    return this._ttlIgnore;
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

  // access_list_cfg - computed: false, optional: true, required: false
  private _accessListCfg = new InterfaceEthernetIpv6AccessListCfgOutputReference(this, "access_list_cfg");
  public get accessListCfg() {
    return this._accessListCfg;
  }
  public putAccessListCfg(value: InterfaceEthernetIpv6AccessListCfg) {
    this._accessListCfg.internalValue = value;
  }
  public resetAccessListCfg() {
    this._accessListCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListCfgInput() {
    return this._accessListCfg.internalValue;
  }

  // address_list - computed: false, optional: true, required: false
  private _addressList = new InterfaceEthernetIpv6AddressListStructList(this, "address_list", false);
  public get addressList() {
    return this._addressList;
  }
  public putAddressList(value: InterfaceEthernetIpv6AddressListStruct[] | cdktf.IResolvable) {
    this._addressList.internalValue = value;
  }
  public resetAddressList() {
    this._addressList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressListInput() {
    return this._addressList.internalValue;
  }

  // ospf - computed: false, optional: true, required: false
  private _ospf = new InterfaceEthernetIpv6OspfOutputReference(this, "ospf");
  public get ospf() {
    return this._ospf;
  }
  public putOspf(value: InterfaceEthernetIpv6Ospf) {
    this._ospf.internalValue = value;
  }
  public resetOspf() {
    this._ospf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfInput() {
    return this._ospf.internalValue;
  }

  // rip - computed: false, optional: true, required: false
  private _rip = new InterfaceEthernetIpv6RipOutputReference(this, "rip");
  public get rip() {
    return this._rip;
  }
  public putRip(value: InterfaceEthernetIpv6Rip) {
    this._rip.internalValue = value;
  }
  public resetRip() {
    this._rip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripInput() {
    return this._rip.internalValue;
  }

  // router - computed: false, optional: true, required: false
  private _router = new InterfaceEthernetIpv6RouterOutputReference(this, "router");
  public get router() {
    return this._router;
  }
  public putRouter(value: InterfaceEthernetIpv6Router) {
    this._router.internalValue = value;
  }
  public resetRouter() {
    this._router.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerInput() {
    return this._router.internalValue;
  }

  // router_adver - computed: false, optional: true, required: false
  private _routerAdver = new InterfaceEthernetIpv6RouterAdverOutputReference(this, "router_adver");
  public get routerAdver() {
    return this._routerAdver;
  }
  public putRouterAdver(value: InterfaceEthernetIpv6RouterAdver) {
    this._routerAdver.internalValue = value;
  }
  public resetRouterAdver() {
    this._routerAdver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerAdverInput() {
    return this._routerAdver.internalValue;
  }

  // stateful_firewall - computed: false, optional: true, required: false
  private _statefulFirewall = new InterfaceEthernetIpv6StatefulFirewallOutputReference(this, "stateful_firewall");
  public get statefulFirewall() {
    return this._statefulFirewall;
  }
  public putStatefulFirewall(value: InterfaceEthernetIpv6StatefulFirewall) {
    this._statefulFirewall.internalValue = value;
  }
  public resetStatefulFirewall() {
    this._statefulFirewall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulFirewallInput() {
    return this._statefulFirewall.internalValue;
  }
}
export interface InterfaceEthernetIsisAuthenticationKeyChainListStruct {
  /**
  * Authentication key-chain (Name of key-chain)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#key_chain InterfaceEthernet#key_chain}
  */
  readonly keyChain?: string;
  /**
  * 'level-1': Specify authentication key-chain for level-1 PDUs; 'level-2': Specify authentication key-chain for level-2 PDUs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#level InterfaceEthernet#level}
  */
  readonly level?: string;
}

export function interfaceEthernetIsisAuthenticationKeyChainListStructToTerraform(struct?: InterfaceEthernetIsisAuthenticationKeyChainListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_chain: cdktf.stringToTerraform(struct!.keyChain),
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function interfaceEthernetIsisAuthenticationKeyChainListStructToHclTerraform(struct?: InterfaceEthernetIsisAuthenticationKeyChainListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_chain: {
      value: cdktf.stringToHclTerraform(struct!.keyChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIsisAuthenticationKeyChainListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIsisAuthenticationKeyChainListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyChain = this._keyChain;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIsisAuthenticationKeyChainListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyChain = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyChain = value.keyChain;
      this._level = value.level;
    }
  }

  // key_chain - computed: false, optional: true, required: false
  private _keyChain?: string; 
  public get keyChain() {
    return this.getStringAttribute('key_chain');
  }
  public set keyChain(value: string) {
    this._keyChain = value;
  }
  public resetKeyChain() {
    this._keyChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyChainInput() {
    return this._keyChain;
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}

export class InterfaceEthernetIsisAuthenticationKeyChainListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIsisAuthenticationKeyChainListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIsisAuthenticationKeyChainListStructOutputReference {
    return new InterfaceEthernetIsisAuthenticationKeyChainListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIsisAuthenticationModeListStruct {
  /**
  * 'level-1': Specify authentication mode for level-1 PDUs; 'level-2': Specify authentication mode for level-2 PDUs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#level InterfaceEthernet#level}
  */
  readonly level?: string;
  /**
  * 'md5': Keyed message digest;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#mode InterfaceEthernet#mode}
  */
  readonly mode?: string;
}

export function interfaceEthernetIsisAuthenticationModeListStructToTerraform(struct?: InterfaceEthernetIsisAuthenticationModeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function interfaceEthernetIsisAuthenticationModeListStructToHclTerraform(struct?: InterfaceEthernetIsisAuthenticationModeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIsisAuthenticationModeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIsisAuthenticationModeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIsisAuthenticationModeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._mode = value.mode;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}

export class InterfaceEthernetIsisAuthenticationModeListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIsisAuthenticationModeListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIsisAuthenticationModeListStructOutputReference {
    return new InterfaceEthernetIsisAuthenticationModeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIsisAuthenticationSendOnlyListStruct {
  /**
  * 'level-1': Specify authentication send-only for level-1 PDUs; 'level-2': Specify authentication send-only for level-2 PDUs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#level InterfaceEthernet#level}
  */
  readonly level?: string;
  /**
  * Authentication send-only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#send_only InterfaceEthernet#send_only}
  */
  readonly sendOnly?: number;
}

export function interfaceEthernetIsisAuthenticationSendOnlyListStructToTerraform(struct?: InterfaceEthernetIsisAuthenticationSendOnlyListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    send_only: cdktf.numberToTerraform(struct!.sendOnly),
  }
}


export function interfaceEthernetIsisAuthenticationSendOnlyListStructToHclTerraform(struct?: InterfaceEthernetIsisAuthenticationSendOnlyListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_only: {
      value: cdktf.numberToHclTerraform(struct!.sendOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIsisAuthenticationSendOnlyListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIsisAuthenticationSendOnlyListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._sendOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendOnly = this._sendOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIsisAuthenticationSendOnlyListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._sendOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._sendOnly = value.sendOnly;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // send_only - computed: false, optional: true, required: false
  private _sendOnly?: number; 
  public get sendOnly() {
    return this.getNumberAttribute('send_only');
  }
  public set sendOnly(value: number) {
    this._sendOnly = value;
  }
  public resetSendOnly() {
    this._sendOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendOnlyInput() {
    return this._sendOnly;
  }
}

export class InterfaceEthernetIsisAuthenticationSendOnlyListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIsisAuthenticationSendOnlyListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIsisAuthenticationSendOnlyListStructOutputReference {
    return new InterfaceEthernetIsisAuthenticationSendOnlyListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIsisAuthentication {
  /**
  * key_chain_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#key_chain_list InterfaceEthernet#key_chain_list}
  */
  readonly keyChainList?: InterfaceEthernetIsisAuthenticationKeyChainListStruct[] | cdktf.IResolvable;
  /**
  * mode_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#mode_list InterfaceEthernet#mode_list}
  */
  readonly modeList?: InterfaceEthernetIsisAuthenticationModeListStruct[] | cdktf.IResolvable;
  /**
  * send_only_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#send_only_list InterfaceEthernet#send_only_list}
  */
  readonly sendOnlyList?: InterfaceEthernetIsisAuthenticationSendOnlyListStruct[] | cdktf.IResolvable;
}

export function interfaceEthernetIsisAuthenticationToTerraform(struct?: InterfaceEthernetIsisAuthenticationOutputReference | InterfaceEthernetIsisAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_chain_list: cdktf.listMapper(interfaceEthernetIsisAuthenticationKeyChainListStructToTerraform, true)(struct!.keyChainList),
    mode_list: cdktf.listMapper(interfaceEthernetIsisAuthenticationModeListStructToTerraform, true)(struct!.modeList),
    send_only_list: cdktf.listMapper(interfaceEthernetIsisAuthenticationSendOnlyListStructToTerraform, true)(struct!.sendOnlyList),
  }
}


export function interfaceEthernetIsisAuthenticationToHclTerraform(struct?: InterfaceEthernetIsisAuthenticationOutputReference | InterfaceEthernetIsisAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_chain_list: {
      value: cdktf.listMapperHcl(interfaceEthernetIsisAuthenticationKeyChainListStructToHclTerraform, true)(struct!.keyChainList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIsisAuthenticationKeyChainListStructList",
    },
    mode_list: {
      value: cdktf.listMapperHcl(interfaceEthernetIsisAuthenticationModeListStructToHclTerraform, true)(struct!.modeList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIsisAuthenticationModeListStructList",
    },
    send_only_list: {
      value: cdktf.listMapperHcl(interfaceEthernetIsisAuthenticationSendOnlyListStructToHclTerraform, true)(struct!.sendOnlyList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIsisAuthenticationSendOnlyListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIsisAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIsisAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyChainList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyChainList = this._keyChainList?.internalValue;
    }
    if (this._modeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modeList = this._modeList?.internalValue;
    }
    if (this._sendOnlyList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendOnlyList = this._sendOnlyList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIsisAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyChainList.internalValue = undefined;
      this._modeList.internalValue = undefined;
      this._sendOnlyList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyChainList.internalValue = value.keyChainList;
      this._modeList.internalValue = value.modeList;
      this._sendOnlyList.internalValue = value.sendOnlyList;
    }
  }

  // key_chain_list - computed: false, optional: true, required: false
  private _keyChainList = new InterfaceEthernetIsisAuthenticationKeyChainListStructList(this, "key_chain_list", false);
  public get keyChainList() {
    return this._keyChainList;
  }
  public putKeyChainList(value: InterfaceEthernetIsisAuthenticationKeyChainListStruct[] | cdktf.IResolvable) {
    this._keyChainList.internalValue = value;
  }
  public resetKeyChainList() {
    this._keyChainList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyChainListInput() {
    return this._keyChainList.internalValue;
  }

  // mode_list - computed: false, optional: true, required: false
  private _modeList = new InterfaceEthernetIsisAuthenticationModeListStructList(this, "mode_list", false);
  public get modeList() {
    return this._modeList;
  }
  public putModeList(value: InterfaceEthernetIsisAuthenticationModeListStruct[] | cdktf.IResolvable) {
    this._modeList.internalValue = value;
  }
  public resetModeList() {
    this._modeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeListInput() {
    return this._modeList.internalValue;
  }

  // send_only_list - computed: false, optional: true, required: false
  private _sendOnlyList = new InterfaceEthernetIsisAuthenticationSendOnlyListStructList(this, "send_only_list", false);
  public get sendOnlyList() {
    return this._sendOnlyList;
  }
  public putSendOnlyList(value: InterfaceEthernetIsisAuthenticationSendOnlyListStruct[] | cdktf.IResolvable) {
    this._sendOnlyList.internalValue = value;
  }
  public resetSendOnlyList() {
    this._sendOnlyList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendOnlyListInput() {
    return this._sendOnlyList.internalValue;
  }
}
export interface InterfaceEthernetIsisBfdCfg {
  /**
  * Bidirectional Forwarding Detection (BFD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#bfd InterfaceEthernet#bfd}
  */
  readonly bfd?: number;
  /**
  * Disable BFD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#disable InterfaceEthernet#disable}
  */
  readonly disable?: number;
}

export function interfaceEthernetIsisBfdCfgToTerraform(struct?: InterfaceEthernetIsisBfdCfgOutputReference | InterfaceEthernetIsisBfdCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bfd: cdktf.numberToTerraform(struct!.bfd),
    disable: cdktf.numberToTerraform(struct!.disable),
  }
}


export function interfaceEthernetIsisBfdCfgToHclTerraform(struct?: InterfaceEthernetIsisBfdCfgOutputReference | InterfaceEthernetIsisBfdCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bfd: {
      value: cdktf.numberToHclTerraform(struct!.bfd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable: {
      value: cdktf.numberToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIsisBfdCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIsisBfdCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bfd !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfd = this._bfd;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIsisBfdCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bfd = undefined;
      this._disable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bfd = value.bfd;
      this._disable = value.disable;
    }
  }

  // bfd - computed: false, optional: true, required: false
  private _bfd?: number; 
  public get bfd() {
    return this.getNumberAttribute('bfd');
  }
  public set bfd(value: number) {
    this._bfd = value;
  }
  public resetBfd() {
    this._bfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }
}
export interface InterfaceEthernetIsisCsnpIntervalListStruct {
  /**
  * Set CSNP interval in seconds (CSNP interval value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#csnp_interval InterfaceEthernet#csnp_interval}
  */
  readonly csnpInterval?: number;
  /**
  * 'level-1': Speficy interval for level-1 CSNPs; 'level-2': Specify interval for level-2 CSNPs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#level InterfaceEthernet#level}
  */
  readonly level?: string;
}

export function interfaceEthernetIsisCsnpIntervalListStructToTerraform(struct?: InterfaceEthernetIsisCsnpIntervalListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    csnp_interval: cdktf.numberToTerraform(struct!.csnpInterval),
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function interfaceEthernetIsisCsnpIntervalListStructToHclTerraform(struct?: InterfaceEthernetIsisCsnpIntervalListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    csnp_interval: {
      value: cdktf.numberToHclTerraform(struct!.csnpInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIsisCsnpIntervalListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIsisCsnpIntervalListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._csnpInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.csnpInterval = this._csnpInterval;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIsisCsnpIntervalListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._csnpInterval = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._csnpInterval = value.csnpInterval;
      this._level = value.level;
    }
  }

  // csnp_interval - computed: false, optional: true, required: false
  private _csnpInterval?: number; 
  public get csnpInterval() {
    return this.getNumberAttribute('csnp_interval');
  }
  public set csnpInterval(value: number) {
    this._csnpInterval = value;
  }
  public resetCsnpInterval() {
    this._csnpInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csnpIntervalInput() {
    return this._csnpInterval;
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}

export class InterfaceEthernetIsisCsnpIntervalListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIsisCsnpIntervalListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIsisCsnpIntervalListStructOutputReference {
    return new InterfaceEthernetIsisCsnpIntervalListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIsisHelloIntervalListStruct {
  /**
  * Set Hello interval in seconds (Hello interval value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#hello_interval InterfaceEthernet#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * 'level-1': Specify hello-interval for level-1 IIHs; 'level-2': Specify hello-interval for level-2 IIHs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#level InterfaceEthernet#level}
  */
  readonly level?: string;
}

export function interfaceEthernetIsisHelloIntervalListStructToTerraform(struct?: InterfaceEthernetIsisHelloIntervalListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function interfaceEthernetIsisHelloIntervalListStructToHclTerraform(struct?: InterfaceEthernetIsisHelloIntervalListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hello_interval: {
      value: cdktf.numberToHclTerraform(struct!.helloInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIsisHelloIntervalListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIsisHelloIntervalListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._helloInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloInterval = this._helloInterval;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIsisHelloIntervalListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._helloInterval = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._helloInterval = value.helloInterval;
      this._level = value.level;
    }
  }

  // hello_interval - computed: false, optional: true, required: false
  private _helloInterval?: number; 
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }
  public set helloInterval(value: number) {
    this._helloInterval = value;
  }
  public resetHelloInterval() {
    this._helloInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalInput() {
    return this._helloInterval;
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}

export class InterfaceEthernetIsisHelloIntervalListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIsisHelloIntervalListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIsisHelloIntervalListStructOutputReference {
    return new InterfaceEthernetIsisHelloIntervalListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIsisHelloIntervalMinimalListStruct {
  /**
  * Set Hello holdtime 1 second, interval depends on multiplier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#hello_interval_minimal InterfaceEthernet#hello_interval_minimal}
  */
  readonly helloIntervalMinimal?: number;
  /**
  * 'level-1': Specify hello-interval for level-1 IIHs; 'level-2': Specify hello-interval for level-2 IIHs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#level InterfaceEthernet#level}
  */
  readonly level?: string;
}

export function interfaceEthernetIsisHelloIntervalMinimalListStructToTerraform(struct?: InterfaceEthernetIsisHelloIntervalMinimalListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hello_interval_minimal: cdktf.numberToTerraform(struct!.helloIntervalMinimal),
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function interfaceEthernetIsisHelloIntervalMinimalListStructToHclTerraform(struct?: InterfaceEthernetIsisHelloIntervalMinimalListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hello_interval_minimal: {
      value: cdktf.numberToHclTerraform(struct!.helloIntervalMinimal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIsisHelloIntervalMinimalListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIsisHelloIntervalMinimalListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._helloIntervalMinimal !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloIntervalMinimal = this._helloIntervalMinimal;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIsisHelloIntervalMinimalListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._helloIntervalMinimal = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._helloIntervalMinimal = value.helloIntervalMinimal;
      this._level = value.level;
    }
  }

  // hello_interval_minimal - computed: false, optional: true, required: false
  private _helloIntervalMinimal?: number; 
  public get helloIntervalMinimal() {
    return this.getNumberAttribute('hello_interval_minimal');
  }
  public set helloIntervalMinimal(value: number) {
    this._helloIntervalMinimal = value;
  }
  public resetHelloIntervalMinimal() {
    this._helloIntervalMinimal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalMinimalInput() {
    return this._helloIntervalMinimal;
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}

export class InterfaceEthernetIsisHelloIntervalMinimalListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIsisHelloIntervalMinimalListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIsisHelloIntervalMinimalListStructOutputReference {
    return new InterfaceEthernetIsisHelloIntervalMinimalListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIsisHelloMultiplierListStruct {
  /**
  * Set multiplier for Hello holding time (Hello multiplier value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#hello_multiplier InterfaceEthernet#hello_multiplier}
  */
  readonly helloMultiplier?: number;
  /**
  * 'level-1': Specify hello multiplier for level-1 IIHs; 'level-2': Specify hello multiplier for level-2 IIHs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#level InterfaceEthernet#level}
  */
  readonly level?: string;
}

export function interfaceEthernetIsisHelloMultiplierListStructToTerraform(struct?: InterfaceEthernetIsisHelloMultiplierListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hello_multiplier: cdktf.numberToTerraform(struct!.helloMultiplier),
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function interfaceEthernetIsisHelloMultiplierListStructToHclTerraform(struct?: InterfaceEthernetIsisHelloMultiplierListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hello_multiplier: {
      value: cdktf.numberToHclTerraform(struct!.helloMultiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIsisHelloMultiplierListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIsisHelloMultiplierListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._helloMultiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloMultiplier = this._helloMultiplier;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIsisHelloMultiplierListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._helloMultiplier = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._helloMultiplier = value.helloMultiplier;
      this._level = value.level;
    }
  }

  // hello_multiplier - computed: false, optional: true, required: false
  private _helloMultiplier?: number; 
  public get helloMultiplier() {
    return this.getNumberAttribute('hello_multiplier');
  }
  public set helloMultiplier(value: number) {
    this._helloMultiplier = value;
  }
  public resetHelloMultiplier() {
    this._helloMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloMultiplierInput() {
    return this._helloMultiplier;
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}

export class InterfaceEthernetIsisHelloMultiplierListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIsisHelloMultiplierListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIsisHelloMultiplierListStructOutputReference {
    return new InterfaceEthernetIsisHelloMultiplierListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIsisMeshGroup {
  /**
  * Block LSPs on this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#blocked InterfaceEthernet#blocked}
  */
  readonly blocked?: number;
  /**
  * Mesh group number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#value InterfaceEthernet#value}
  */
  readonly value?: number;
}

export function interfaceEthernetIsisMeshGroupToTerraform(struct?: InterfaceEthernetIsisMeshGroupOutputReference | InterfaceEthernetIsisMeshGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blocked: cdktf.numberToTerraform(struct!.blocked),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function interfaceEthernetIsisMeshGroupToHclTerraform(struct?: InterfaceEthernetIsisMeshGroupOutputReference | InterfaceEthernetIsisMeshGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blocked: {
      value: cdktf.numberToHclTerraform(struct!.blocked),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIsisMeshGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIsisMeshGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blocked !== undefined) {
      hasAnyValues = true;
      internalValueResult.blocked = this._blocked;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIsisMeshGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blocked = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blocked = value.blocked;
      this._value = value.value;
    }
  }

  // blocked - computed: false, optional: true, required: false
  private _blocked?: number; 
  public get blocked() {
    return this.getNumberAttribute('blocked');
  }
  public set blocked(value: number) {
    this._blocked = value;
  }
  public resetBlocked() {
    this._blocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedInput() {
    return this._blocked;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface InterfaceEthernetIsisMetricListStruct {
  /**
  * 'level-1': Apply metric to level-1 links; 'level-2': Apply metric to level-2 links;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#level InterfaceEthernet#level}
  */
  readonly level?: string;
  /**
  * Configure the metric for interface (Default metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#metric InterfaceEthernet#metric}
  */
  readonly metric?: number;
}

export function interfaceEthernetIsisMetricListStructToTerraform(struct?: InterfaceEthernetIsisMetricListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    metric: cdktf.numberToTerraform(struct!.metric),
  }
}


export function interfaceEthernetIsisMetricListStructToHclTerraform(struct?: InterfaceEthernetIsisMetricListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIsisMetricListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIsisMetricListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIsisMetricListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._metric = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._metric = value.metric;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }
}

export class InterfaceEthernetIsisMetricListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIsisMetricListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIsisMetricListStructOutputReference {
    return new InterfaceEthernetIsisMetricListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIsisPasswordListStruct {
  /**
  * 'level-1': Specify password for level-1 PDUs; 'level-2': Specify password for level-2 PDUs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#level InterfaceEthernet#level}
  */
  readonly level?: string;
  /**
  * Configure the authentication password for interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#password InterfaceEthernet#password}
  */
  readonly password?: string;
}

export function interfaceEthernetIsisPasswordListStructToTerraform(struct?: InterfaceEthernetIsisPasswordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function interfaceEthernetIsisPasswordListStructToHclTerraform(struct?: InterfaceEthernetIsisPasswordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIsisPasswordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIsisPasswordListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIsisPasswordListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._password = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._password = value.password;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }
}

export class InterfaceEthernetIsisPasswordListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIsisPasswordListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIsisPasswordListStructOutputReference {
    return new InterfaceEthernetIsisPasswordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIsisPriorityListStruct {
  /**
  * 'level-1': Specify priority for level-1 routing; 'level-2': Specify priority for level-2 routing;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#level InterfaceEthernet#level}
  */
  readonly level?: string;
  /**
  * Set priority for Designated Router election (Priority value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#priority InterfaceEthernet#priority}
  */
  readonly priority?: number;
}

export function interfaceEthernetIsisPriorityListStructToTerraform(struct?: InterfaceEthernetIsisPriorityListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function interfaceEthernetIsisPriorityListStructToHclTerraform(struct?: InterfaceEthernetIsisPriorityListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIsisPriorityListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIsisPriorityListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIsisPriorityListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._priority = value.priority;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

export class InterfaceEthernetIsisPriorityListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIsisPriorityListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIsisPriorityListStructOutputReference {
    return new InterfaceEthernetIsisPriorityListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIsisWideMetricListStruct {
  /**
  * 'level-1': Apply metric to level-1 links; 'level-2': Apply metric to level-2 links;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#level InterfaceEthernet#level}
  */
  readonly level?: string;
  /**
  * Configure the wide metric for interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#wide_metric InterfaceEthernet#wide_metric}
  */
  readonly wideMetric?: number;
}

export function interfaceEthernetIsisWideMetricListStructToTerraform(struct?: InterfaceEthernetIsisWideMetricListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    wide_metric: cdktf.numberToTerraform(struct!.wideMetric),
  }
}


export function interfaceEthernetIsisWideMetricListStructToHclTerraform(struct?: InterfaceEthernetIsisWideMetricListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wide_metric: {
      value: cdktf.numberToHclTerraform(struct!.wideMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIsisWideMetricListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIsisWideMetricListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._wideMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.wideMetric = this._wideMetric;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIsisWideMetricListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._wideMetric = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._wideMetric = value.wideMetric;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // wide_metric - computed: false, optional: true, required: false
  private _wideMetric?: number; 
  public get wideMetric() {
    return this.getNumberAttribute('wide_metric');
  }
  public set wideMetric(value: number) {
    this._wideMetric = value;
  }
  public resetWideMetric() {
    this._wideMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wideMetricInput() {
    return this._wideMetric;
  }
}

export class InterfaceEthernetIsisWideMetricListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIsisWideMetricListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIsisWideMetricListStructOutputReference {
    return new InterfaceEthernetIsisWideMetricListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIsis {
  /**
  * 'level-1': Level-1 only adjacencies are formed; 'level-1-2': Level-1-2 adjacencies are formed; 'level-2-only': Level-2 only adjacencies are formed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#circuit_type InterfaceEthernet#circuit_type}
  */
  readonly circuitType?: string;
  /**
  * Set LSP transmission interval (LSP transmission interval (milliseconds))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#lsp_interval InterfaceEthernet#lsp_interval}
  */
  readonly lspInterval?: number;
  /**
  * 'broadcast': Specify IS-IS broadcast multi-access network; 'point-to-point': Specify IS-IS point-to-point network;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#network InterfaceEthernet#network}
  */
  readonly network?: string;
  /**
  * Add padding to IS-IS hello packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#padding InterfaceEthernet#padding}
  */
  readonly padding?: number;
  /**
  * Set per-LSP retransmission interval (Interval between retransmissions of the same LSP (seconds))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#retransmit_interval InterfaceEthernet#retransmit_interval}
  */
  readonly retransmitInterval?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#uuid InterfaceEthernet#uuid}
  */
  readonly uuid?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#authentication InterfaceEthernet#authentication}
  */
  readonly authentication?: InterfaceEthernetIsisAuthentication;
  /**
  * bfd_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#bfd_cfg InterfaceEthernet#bfd_cfg}
  */
  readonly bfdCfg?: InterfaceEthernetIsisBfdCfg;
  /**
  * csnp_interval_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#csnp_interval_list InterfaceEthernet#csnp_interval_list}
  */
  readonly csnpIntervalList?: InterfaceEthernetIsisCsnpIntervalListStruct[] | cdktf.IResolvable;
  /**
  * hello_interval_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#hello_interval_list InterfaceEthernet#hello_interval_list}
  */
  readonly helloIntervalList?: InterfaceEthernetIsisHelloIntervalListStruct[] | cdktf.IResolvable;
  /**
  * hello_interval_minimal_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#hello_interval_minimal_list InterfaceEthernet#hello_interval_minimal_list}
  */
  readonly helloIntervalMinimalList?: InterfaceEthernetIsisHelloIntervalMinimalListStruct[] | cdktf.IResolvable;
  /**
  * hello_multiplier_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#hello_multiplier_list InterfaceEthernet#hello_multiplier_list}
  */
  readonly helloMultiplierList?: InterfaceEthernetIsisHelloMultiplierListStruct[] | cdktf.IResolvable;
  /**
  * mesh_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#mesh_group InterfaceEthernet#mesh_group}
  */
  readonly meshGroup?: InterfaceEthernetIsisMeshGroup;
  /**
  * metric_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#metric_list InterfaceEthernet#metric_list}
  */
  readonly metricList?: InterfaceEthernetIsisMetricListStruct[] | cdktf.IResolvable;
  /**
  * password_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#password_list InterfaceEthernet#password_list}
  */
  readonly passwordList?: InterfaceEthernetIsisPasswordListStruct[] | cdktf.IResolvable;
  /**
  * priority_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#priority_list InterfaceEthernet#priority_list}
  */
  readonly priorityList?: InterfaceEthernetIsisPriorityListStruct[] | cdktf.IResolvable;
  /**
  * wide_metric_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#wide_metric_list InterfaceEthernet#wide_metric_list}
  */
  readonly wideMetricList?: InterfaceEthernetIsisWideMetricListStruct[] | cdktf.IResolvable;
}

export function interfaceEthernetIsisToTerraform(struct?: InterfaceEthernetIsisOutputReference | InterfaceEthernetIsis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    circuit_type: cdktf.stringToTerraform(struct!.circuitType),
    lsp_interval: cdktf.numberToTerraform(struct!.lspInterval),
    network: cdktf.stringToTerraform(struct!.network),
    padding: cdktf.numberToTerraform(struct!.padding),
    retransmit_interval: cdktf.numberToTerraform(struct!.retransmitInterval),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    authentication: interfaceEthernetIsisAuthenticationToTerraform(struct!.authentication),
    bfd_cfg: interfaceEthernetIsisBfdCfgToTerraform(struct!.bfdCfg),
    csnp_interval_list: cdktf.listMapper(interfaceEthernetIsisCsnpIntervalListStructToTerraform, true)(struct!.csnpIntervalList),
    hello_interval_list: cdktf.listMapper(interfaceEthernetIsisHelloIntervalListStructToTerraform, true)(struct!.helloIntervalList),
    hello_interval_minimal_list: cdktf.listMapper(interfaceEthernetIsisHelloIntervalMinimalListStructToTerraform, true)(struct!.helloIntervalMinimalList),
    hello_multiplier_list: cdktf.listMapper(interfaceEthernetIsisHelloMultiplierListStructToTerraform, true)(struct!.helloMultiplierList),
    mesh_group: interfaceEthernetIsisMeshGroupToTerraform(struct!.meshGroup),
    metric_list: cdktf.listMapper(interfaceEthernetIsisMetricListStructToTerraform, true)(struct!.metricList),
    password_list: cdktf.listMapper(interfaceEthernetIsisPasswordListStructToTerraform, true)(struct!.passwordList),
    priority_list: cdktf.listMapper(interfaceEthernetIsisPriorityListStructToTerraform, true)(struct!.priorityList),
    wide_metric_list: cdktf.listMapper(interfaceEthernetIsisWideMetricListStructToTerraform, true)(struct!.wideMetricList),
  }
}


export function interfaceEthernetIsisToHclTerraform(struct?: InterfaceEthernetIsisOutputReference | InterfaceEthernetIsis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    circuit_type: {
      value: cdktf.stringToHclTerraform(struct!.circuitType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lsp_interval: {
      value: cdktf.numberToHclTerraform(struct!.lspInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    padding: {
      value: cdktf.numberToHclTerraform(struct!.padding),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retransmit_interval: {
      value: cdktf.numberToHclTerraform(struct!.retransmitInterval),
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
    authentication: {
      value: interfaceEthernetIsisAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIsisAuthenticationList",
    },
    bfd_cfg: {
      value: interfaceEthernetIsisBfdCfgToHclTerraform(struct!.bfdCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIsisBfdCfgList",
    },
    csnp_interval_list: {
      value: cdktf.listMapperHcl(interfaceEthernetIsisCsnpIntervalListStructToHclTerraform, true)(struct!.csnpIntervalList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIsisCsnpIntervalListStructList",
    },
    hello_interval_list: {
      value: cdktf.listMapperHcl(interfaceEthernetIsisHelloIntervalListStructToHclTerraform, true)(struct!.helloIntervalList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIsisHelloIntervalListStructList",
    },
    hello_interval_minimal_list: {
      value: cdktf.listMapperHcl(interfaceEthernetIsisHelloIntervalMinimalListStructToHclTerraform, true)(struct!.helloIntervalMinimalList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIsisHelloIntervalMinimalListStructList",
    },
    hello_multiplier_list: {
      value: cdktf.listMapperHcl(interfaceEthernetIsisHelloMultiplierListStructToHclTerraform, true)(struct!.helloMultiplierList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIsisHelloMultiplierListStructList",
    },
    mesh_group: {
      value: interfaceEthernetIsisMeshGroupToHclTerraform(struct!.meshGroup),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIsisMeshGroupList",
    },
    metric_list: {
      value: cdktf.listMapperHcl(interfaceEthernetIsisMetricListStructToHclTerraform, true)(struct!.metricList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIsisMetricListStructList",
    },
    password_list: {
      value: cdktf.listMapperHcl(interfaceEthernetIsisPasswordListStructToHclTerraform, true)(struct!.passwordList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIsisPasswordListStructList",
    },
    priority_list: {
      value: cdktf.listMapperHcl(interfaceEthernetIsisPriorityListStructToHclTerraform, true)(struct!.priorityList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIsisPriorityListStructList",
    },
    wide_metric_list: {
      value: cdktf.listMapperHcl(interfaceEthernetIsisWideMetricListStructToHclTerraform, true)(struct!.wideMetricList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIsisWideMetricListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIsisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIsis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._circuitType !== undefined) {
      hasAnyValues = true;
      internalValueResult.circuitType = this._circuitType;
    }
    if (this._lspInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.lspInterval = this._lspInterval;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._padding !== undefined) {
      hasAnyValues = true;
      internalValueResult.padding = this._padding;
    }
    if (this._retransmitInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitInterval = this._retransmitInterval;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._bfdCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdCfg = this._bfdCfg?.internalValue;
    }
    if (this._csnpIntervalList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csnpIntervalList = this._csnpIntervalList?.internalValue;
    }
    if (this._helloIntervalList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloIntervalList = this._helloIntervalList?.internalValue;
    }
    if (this._helloIntervalMinimalList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloIntervalMinimalList = this._helloIntervalMinimalList?.internalValue;
    }
    if (this._helloMultiplierList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloMultiplierList = this._helloMultiplierList?.internalValue;
    }
    if (this._meshGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.meshGroup = this._meshGroup?.internalValue;
    }
    if (this._metricList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricList = this._metricList?.internalValue;
    }
    if (this._passwordList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordList = this._passwordList?.internalValue;
    }
    if (this._priorityList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityList = this._priorityList?.internalValue;
    }
    if (this._wideMetricList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wideMetricList = this._wideMetricList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIsis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._circuitType = undefined;
      this._lspInterval = undefined;
      this._network = undefined;
      this._padding = undefined;
      this._retransmitInterval = undefined;
      this._uuid = undefined;
      this._authentication.internalValue = undefined;
      this._bfdCfg.internalValue = undefined;
      this._csnpIntervalList.internalValue = undefined;
      this._helloIntervalList.internalValue = undefined;
      this._helloIntervalMinimalList.internalValue = undefined;
      this._helloMultiplierList.internalValue = undefined;
      this._meshGroup.internalValue = undefined;
      this._metricList.internalValue = undefined;
      this._passwordList.internalValue = undefined;
      this._priorityList.internalValue = undefined;
      this._wideMetricList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._circuitType = value.circuitType;
      this._lspInterval = value.lspInterval;
      this._network = value.network;
      this._padding = value.padding;
      this._retransmitInterval = value.retransmitInterval;
      this._uuid = value.uuid;
      this._authentication.internalValue = value.authentication;
      this._bfdCfg.internalValue = value.bfdCfg;
      this._csnpIntervalList.internalValue = value.csnpIntervalList;
      this._helloIntervalList.internalValue = value.helloIntervalList;
      this._helloIntervalMinimalList.internalValue = value.helloIntervalMinimalList;
      this._helloMultiplierList.internalValue = value.helloMultiplierList;
      this._meshGroup.internalValue = value.meshGroup;
      this._metricList.internalValue = value.metricList;
      this._passwordList.internalValue = value.passwordList;
      this._priorityList.internalValue = value.priorityList;
      this._wideMetricList.internalValue = value.wideMetricList;
    }
  }

  // circuit_type - computed: false, optional: true, required: false
  private _circuitType?: string; 
  public get circuitType() {
    return this.getStringAttribute('circuit_type');
  }
  public set circuitType(value: string) {
    this._circuitType = value;
  }
  public resetCircuitType() {
    this._circuitType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitTypeInput() {
    return this._circuitType;
  }

  // lsp_interval - computed: false, optional: true, required: false
  private _lspInterval?: number; 
  public get lspInterval() {
    return this.getNumberAttribute('lsp_interval');
  }
  public set lspInterval(value: number) {
    this._lspInterval = value;
  }
  public resetLspInterval() {
    this._lspInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lspIntervalInput() {
    return this._lspInterval;
  }

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // padding - computed: false, optional: true, required: false
  private _padding?: number; 
  public get padding() {
    return this.getNumberAttribute('padding');
  }
  public set padding(value: number) {
    this._padding = value;
  }
  public resetPadding() {
    this._padding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paddingInput() {
    return this._padding;
  }

  // retransmit_interval - computed: false, optional: true, required: false
  private _retransmitInterval?: number; 
  public get retransmitInterval() {
    return this.getNumberAttribute('retransmit_interval');
  }
  public set retransmitInterval(value: number) {
    this._retransmitInterval = value;
  }
  public resetRetransmitInterval() {
    this._retransmitInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitIntervalInput() {
    return this._retransmitInterval;
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

  // authentication - computed: false, optional: true, required: false
  private _authentication = new InterfaceEthernetIsisAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: InterfaceEthernetIsisAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // bfd_cfg - computed: false, optional: true, required: false
  private _bfdCfg = new InterfaceEthernetIsisBfdCfgOutputReference(this, "bfd_cfg");
  public get bfdCfg() {
    return this._bfdCfg;
  }
  public putBfdCfg(value: InterfaceEthernetIsisBfdCfg) {
    this._bfdCfg.internalValue = value;
  }
  public resetBfdCfg() {
    this._bfdCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdCfgInput() {
    return this._bfdCfg.internalValue;
  }

  // csnp_interval_list - computed: false, optional: true, required: false
  private _csnpIntervalList = new InterfaceEthernetIsisCsnpIntervalListStructList(this, "csnp_interval_list", false);
  public get csnpIntervalList() {
    return this._csnpIntervalList;
  }
  public putCsnpIntervalList(value: InterfaceEthernetIsisCsnpIntervalListStruct[] | cdktf.IResolvable) {
    this._csnpIntervalList.internalValue = value;
  }
  public resetCsnpIntervalList() {
    this._csnpIntervalList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csnpIntervalListInput() {
    return this._csnpIntervalList.internalValue;
  }

  // hello_interval_list - computed: false, optional: true, required: false
  private _helloIntervalList = new InterfaceEthernetIsisHelloIntervalListStructList(this, "hello_interval_list", false);
  public get helloIntervalList() {
    return this._helloIntervalList;
  }
  public putHelloIntervalList(value: InterfaceEthernetIsisHelloIntervalListStruct[] | cdktf.IResolvable) {
    this._helloIntervalList.internalValue = value;
  }
  public resetHelloIntervalList() {
    this._helloIntervalList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalListInput() {
    return this._helloIntervalList.internalValue;
  }

  // hello_interval_minimal_list - computed: false, optional: true, required: false
  private _helloIntervalMinimalList = new InterfaceEthernetIsisHelloIntervalMinimalListStructList(this, "hello_interval_minimal_list", false);
  public get helloIntervalMinimalList() {
    return this._helloIntervalMinimalList;
  }
  public putHelloIntervalMinimalList(value: InterfaceEthernetIsisHelloIntervalMinimalListStruct[] | cdktf.IResolvable) {
    this._helloIntervalMinimalList.internalValue = value;
  }
  public resetHelloIntervalMinimalList() {
    this._helloIntervalMinimalList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalMinimalListInput() {
    return this._helloIntervalMinimalList.internalValue;
  }

  // hello_multiplier_list - computed: false, optional: true, required: false
  private _helloMultiplierList = new InterfaceEthernetIsisHelloMultiplierListStructList(this, "hello_multiplier_list", false);
  public get helloMultiplierList() {
    return this._helloMultiplierList;
  }
  public putHelloMultiplierList(value: InterfaceEthernetIsisHelloMultiplierListStruct[] | cdktf.IResolvable) {
    this._helloMultiplierList.internalValue = value;
  }
  public resetHelloMultiplierList() {
    this._helloMultiplierList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloMultiplierListInput() {
    return this._helloMultiplierList.internalValue;
  }

  // mesh_group - computed: false, optional: true, required: false
  private _meshGroup = new InterfaceEthernetIsisMeshGroupOutputReference(this, "mesh_group");
  public get meshGroup() {
    return this._meshGroup;
  }
  public putMeshGroup(value: InterfaceEthernetIsisMeshGroup) {
    this._meshGroup.internalValue = value;
  }
  public resetMeshGroup() {
    this._meshGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshGroupInput() {
    return this._meshGroup.internalValue;
  }

  // metric_list - computed: false, optional: true, required: false
  private _metricList = new InterfaceEthernetIsisMetricListStructList(this, "metric_list", false);
  public get metricList() {
    return this._metricList;
  }
  public putMetricList(value: InterfaceEthernetIsisMetricListStruct[] | cdktf.IResolvable) {
    this._metricList.internalValue = value;
  }
  public resetMetricList() {
    this._metricList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricListInput() {
    return this._metricList.internalValue;
  }

  // password_list - computed: false, optional: true, required: false
  private _passwordList = new InterfaceEthernetIsisPasswordListStructList(this, "password_list", false);
  public get passwordList() {
    return this._passwordList;
  }
  public putPasswordList(value: InterfaceEthernetIsisPasswordListStruct[] | cdktf.IResolvable) {
    this._passwordList.internalValue = value;
  }
  public resetPasswordList() {
    this._passwordList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordListInput() {
    return this._passwordList.internalValue;
  }

  // priority_list - computed: false, optional: true, required: false
  private _priorityList = new InterfaceEthernetIsisPriorityListStructList(this, "priority_list", false);
  public get priorityList() {
    return this._priorityList;
  }
  public putPriorityList(value: InterfaceEthernetIsisPriorityListStruct[] | cdktf.IResolvable) {
    this._priorityList.internalValue = value;
  }
  public resetPriorityList() {
    this._priorityList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityListInput() {
    return this._priorityList.internalValue;
  }

  // wide_metric_list - computed: false, optional: true, required: false
  private _wideMetricList = new InterfaceEthernetIsisWideMetricListStructList(this, "wide_metric_list", false);
  public get wideMetricList() {
    return this._wideMetricList;
  }
  public putWideMetricList(value: InterfaceEthernetIsisWideMetricListStruct[] | cdktf.IResolvable) {
    this._wideMetricList.internalValue = value;
  }
  public resetWideMetricList() {
    this._wideMetricList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wideMetricListInput() {
    return this._wideMetricList.internalValue;
  }
}
export interface InterfaceEthernetLldpEnableCfg {
  /**
  * Interface lldp enable/disable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#rt_enable InterfaceEthernet#rt_enable}
  */
  readonly rtEnable?: number;
  /**
  * Enable lldp rx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#rx InterfaceEthernet#rx}
  */
  readonly rx?: number;
  /**
  * Enable lldp tx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#tx InterfaceEthernet#tx}
  */
  readonly tx?: number;
}

export function interfaceEthernetLldpEnableCfgToTerraform(struct?: InterfaceEthernetLldpEnableCfgOutputReference | InterfaceEthernetLldpEnableCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rt_enable: cdktf.numberToTerraform(struct!.rtEnable),
    rx: cdktf.numberToTerraform(struct!.rx),
    tx: cdktf.numberToTerraform(struct!.tx),
  }
}


export function interfaceEthernetLldpEnableCfgToHclTerraform(struct?: InterfaceEthernetLldpEnableCfgOutputReference | InterfaceEthernetLldpEnableCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rt_enable: {
      value: cdktf.numberToHclTerraform(struct!.rtEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rx: {
      value: cdktf.numberToHclTerraform(struct!.rx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tx: {
      value: cdktf.numberToHclTerraform(struct!.tx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetLldpEnableCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetLldpEnableCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rtEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtEnable = this._rtEnable;
    }
    if (this._rx !== undefined) {
      hasAnyValues = true;
      internalValueResult.rx = this._rx;
    }
    if (this._tx !== undefined) {
      hasAnyValues = true;
      internalValueResult.tx = this._tx;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetLldpEnableCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rtEnable = undefined;
      this._rx = undefined;
      this._tx = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rtEnable = value.rtEnable;
      this._rx = value.rx;
      this._tx = value.tx;
    }
  }

  // rt_enable - computed: false, optional: true, required: false
  private _rtEnable?: number; 
  public get rtEnable() {
    return this.getNumberAttribute('rt_enable');
  }
  public set rtEnable(value: number) {
    this._rtEnable = value;
  }
  public resetRtEnable() {
    this._rtEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtEnableInput() {
    return this._rtEnable;
  }

  // rx - computed: false, optional: true, required: false
  private _rx?: number; 
  public get rx() {
    return this.getNumberAttribute('rx');
  }
  public set rx(value: number) {
    this._rx = value;
  }
  public resetRx() {
    this._rx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxInput() {
    return this._rx;
  }

  // tx - computed: false, optional: true, required: false
  private _tx?: number; 
  public get tx() {
    return this.getNumberAttribute('tx');
  }
  public set tx(value: number) {
    this._tx = value;
  }
  public resetTx() {
    this._tx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txInput() {
    return this._tx;
  }
}
export interface InterfaceEthernetLldpNotificationCfg {
  /**
  * Interface lldp notification enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#notif_enable InterfaceEthernet#notif_enable}
  */
  readonly notifEnable?: number;
  /**
  * Interface lldp notification configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#notification InterfaceEthernet#notification}
  */
  readonly notification?: number;
}

export function interfaceEthernetLldpNotificationCfgToTerraform(struct?: InterfaceEthernetLldpNotificationCfgOutputReference | InterfaceEthernetLldpNotificationCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notif_enable: cdktf.numberToTerraform(struct!.notifEnable),
    notification: cdktf.numberToTerraform(struct!.notification),
  }
}


export function interfaceEthernetLldpNotificationCfgToHclTerraform(struct?: InterfaceEthernetLldpNotificationCfgOutputReference | InterfaceEthernetLldpNotificationCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notif_enable: {
      value: cdktf.numberToHclTerraform(struct!.notifEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    notification: {
      value: cdktf.numberToHclTerraform(struct!.notification),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetLldpNotificationCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetLldpNotificationCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notifEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifEnable = this._notifEnable;
    }
    if (this._notification !== undefined) {
      hasAnyValues = true;
      internalValueResult.notification = this._notification;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetLldpNotificationCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._notifEnable = undefined;
      this._notification = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._notifEnable = value.notifEnable;
      this._notification = value.notification;
    }
  }

  // notif_enable - computed: false, optional: true, required: false
  private _notifEnable?: number; 
  public get notifEnable() {
    return this.getNumberAttribute('notif_enable');
  }
  public set notifEnable(value: number) {
    this._notifEnable = value;
  }
  public resetNotifEnable() {
    this._notifEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifEnableInput() {
    return this._notifEnable;
  }

  // notification - computed: false, optional: true, required: false
  private _notification?: number; 
  public get notification() {
    return this.getNumberAttribute('notification');
  }
  public set notification(value: number) {
    this._notification = value;
  }
  public resetNotification() {
    this._notification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification;
  }
}
export interface InterfaceEthernetLldpTxDot1Cfg {
  /**
  * Interface link aggregation information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#link_aggregation InterfaceEthernet#link_aggregation}
  */
  readonly linkAggregation?: number;
  /**
  * Interface lldp tx IEEE 802.1 Organizationally specific TLVs configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#tx_dot1_tlvs InterfaceEthernet#tx_dot1_tlvs}
  */
  readonly txDot1Tlvs?: number;
  /**
  * Interface vlan information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#vlan InterfaceEthernet#vlan}
  */
  readonly vlan?: number;
}

export function interfaceEthernetLldpTxDot1CfgToTerraform(struct?: InterfaceEthernetLldpTxDot1CfgOutputReference | InterfaceEthernetLldpTxDot1Cfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    link_aggregation: cdktf.numberToTerraform(struct!.linkAggregation),
    tx_dot1_tlvs: cdktf.numberToTerraform(struct!.txDot1Tlvs),
    vlan: cdktf.numberToTerraform(struct!.vlan),
  }
}


export function interfaceEthernetLldpTxDot1CfgToHclTerraform(struct?: InterfaceEthernetLldpTxDot1CfgOutputReference | InterfaceEthernetLldpTxDot1Cfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    link_aggregation: {
      value: cdktf.numberToHclTerraform(struct!.linkAggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tx_dot1_tlvs: {
      value: cdktf.numberToHclTerraform(struct!.txDot1Tlvs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan: {
      value: cdktf.numberToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetLldpTxDot1CfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetLldpTxDot1Cfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._linkAggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkAggregation = this._linkAggregation;
    }
    if (this._txDot1Tlvs !== undefined) {
      hasAnyValues = true;
      internalValueResult.txDot1Tlvs = this._txDot1Tlvs;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetLldpTxDot1Cfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._linkAggregation = undefined;
      this._txDot1Tlvs = undefined;
      this._vlan = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._linkAggregation = value.linkAggregation;
      this._txDot1Tlvs = value.txDot1Tlvs;
      this._vlan = value.vlan;
    }
  }

  // link_aggregation - computed: false, optional: true, required: false
  private _linkAggregation?: number; 
  public get linkAggregation() {
    return this.getNumberAttribute('link_aggregation');
  }
  public set linkAggregation(value: number) {
    this._linkAggregation = value;
  }
  public resetLinkAggregation() {
    this._linkAggregation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkAggregationInput() {
    return this._linkAggregation;
  }

  // tx_dot1_tlvs - computed: false, optional: true, required: false
  private _txDot1Tlvs?: number; 
  public get txDot1Tlvs() {
    return this.getNumberAttribute('tx_dot1_tlvs');
  }
  public set txDot1Tlvs(value: number) {
    this._txDot1Tlvs = value;
  }
  public resetTxDot1Tlvs() {
    this._txDot1Tlvs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txDot1TlvsInput() {
    return this._txDot1Tlvs;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }
}
export interface InterfaceEthernetLldpTxTlvsCfg {
  /**
  * Configure which TLVs excluded. All basic TLVs will be included by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#exclude InterfaceEthernet#exclude}
  */
  readonly exclude?: number;
  /**
  * Interface lldp management address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#management_address InterfaceEthernet#management_address}
  */
  readonly managementAddress?: number;
  /**
  * Interface lldp port description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#port_description InterfaceEthernet#port_description}
  */
  readonly portDescription?: number;
  /**
  * Interface lldp system capabilities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#system_capabilities InterfaceEthernet#system_capabilities}
  */
  readonly systemCapabilities?: number;
  /**
  * Interface lldp system description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#system_description InterfaceEthernet#system_description}
  */
  readonly systemDescription?: number;
  /**
  * Interface lldp system name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#system_name InterfaceEthernet#system_name}
  */
  readonly systemName?: number;
  /**
  * Interface lldp tx TLVs configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#tx_tlvs InterfaceEthernet#tx_tlvs}
  */
  readonly txTlvs?: number;
}

export function interfaceEthernetLldpTxTlvsCfgToTerraform(struct?: InterfaceEthernetLldpTxTlvsCfgOutputReference | InterfaceEthernetLldpTxTlvsCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.numberToTerraform(struct!.exclude),
    management_address: cdktf.numberToTerraform(struct!.managementAddress),
    port_description: cdktf.numberToTerraform(struct!.portDescription),
    system_capabilities: cdktf.numberToTerraform(struct!.systemCapabilities),
    system_description: cdktf.numberToTerraform(struct!.systemDescription),
    system_name: cdktf.numberToTerraform(struct!.systemName),
    tx_tlvs: cdktf.numberToTerraform(struct!.txTlvs),
  }
}


export function interfaceEthernetLldpTxTlvsCfgToHclTerraform(struct?: InterfaceEthernetLldpTxTlvsCfgOutputReference | InterfaceEthernetLldpTxTlvsCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.numberToHclTerraform(struct!.exclude),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    management_address: {
      value: cdktf.numberToHclTerraform(struct!.managementAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_description: {
      value: cdktf.numberToHclTerraform(struct!.portDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    system_capabilities: {
      value: cdktf.numberToHclTerraform(struct!.systemCapabilities),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    system_description: {
      value: cdktf.numberToHclTerraform(struct!.systemDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    system_name: {
      value: cdktf.numberToHclTerraform(struct!.systemName),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tx_tlvs: {
      value: cdktf.numberToHclTerraform(struct!.txTlvs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetLldpTxTlvsCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetLldpTxTlvsCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._managementAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementAddress = this._managementAddress;
    }
    if (this._portDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.portDescription = this._portDescription;
    }
    if (this._systemCapabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemCapabilities = this._systemCapabilities;
    }
    if (this._systemDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemDescription = this._systemDescription;
    }
    if (this._systemName !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemName = this._systemName;
    }
    if (this._txTlvs !== undefined) {
      hasAnyValues = true;
      internalValueResult.txTlvs = this._txTlvs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetLldpTxTlvsCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclude = undefined;
      this._managementAddress = undefined;
      this._portDescription = undefined;
      this._systemCapabilities = undefined;
      this._systemDescription = undefined;
      this._systemName = undefined;
      this._txTlvs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclude = value.exclude;
      this._managementAddress = value.managementAddress;
      this._portDescription = value.portDescription;
      this._systemCapabilities = value.systemCapabilities;
      this._systemDescription = value.systemDescription;
      this._systemName = value.systemName;
      this._txTlvs = value.txTlvs;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: number; 
  public get exclude() {
    return this.getNumberAttribute('exclude');
  }
  public set exclude(value: number) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // management_address - computed: false, optional: true, required: false
  private _managementAddress?: number; 
  public get managementAddress() {
    return this.getNumberAttribute('management_address');
  }
  public set managementAddress(value: number) {
    this._managementAddress = value;
  }
  public resetManagementAddress() {
    this._managementAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementAddressInput() {
    return this._managementAddress;
  }

  // port_description - computed: false, optional: true, required: false
  private _portDescription?: number; 
  public get portDescription() {
    return this.getNumberAttribute('port_description');
  }
  public set portDescription(value: number) {
    this._portDescription = value;
  }
  public resetPortDescription() {
    this._portDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portDescriptionInput() {
    return this._portDescription;
  }

  // system_capabilities - computed: false, optional: true, required: false
  private _systemCapabilities?: number; 
  public get systemCapabilities() {
    return this.getNumberAttribute('system_capabilities');
  }
  public set systemCapabilities(value: number) {
    this._systemCapabilities = value;
  }
  public resetSystemCapabilities() {
    this._systemCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemCapabilitiesInput() {
    return this._systemCapabilities;
  }

  // system_description - computed: false, optional: true, required: false
  private _systemDescription?: number; 
  public get systemDescription() {
    return this.getNumberAttribute('system_description');
  }
  public set systemDescription(value: number) {
    this._systemDescription = value;
  }
  public resetSystemDescription() {
    this._systemDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDescriptionInput() {
    return this._systemDescription;
  }

  // system_name - computed: false, optional: true, required: false
  private _systemName?: number; 
  public get systemName() {
    return this.getNumberAttribute('system_name');
  }
  public set systemName(value: number) {
    this._systemName = value;
  }
  public resetSystemName() {
    this._systemName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemNameInput() {
    return this._systemName;
  }

  // tx_tlvs - computed: false, optional: true, required: false
  private _txTlvs?: number; 
  public get txTlvs() {
    return this.getNumberAttribute('tx_tlvs');
  }
  public set txTlvs(value: number) {
    this._txTlvs = value;
  }
  public resetTxTlvs() {
    this._txTlvs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txTlvsInput() {
    return this._txTlvs;
  }
}
export interface InterfaceEthernetLldp {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#uuid InterfaceEthernet#uuid}
  */
  readonly uuid?: string;
  /**
  * enable_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#enable_cfg InterfaceEthernet#enable_cfg}
  */
  readonly enableCfg?: InterfaceEthernetLldpEnableCfg;
  /**
  * notification_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#notification_cfg InterfaceEthernet#notification_cfg}
  */
  readonly notificationCfg?: InterfaceEthernetLldpNotificationCfg;
  /**
  * tx_dot1_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#tx_dot1_cfg InterfaceEthernet#tx_dot1_cfg}
  */
  readonly txDot1Cfg?: InterfaceEthernetLldpTxDot1Cfg;
  /**
  * tx_tlvs_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#tx_tlvs_cfg InterfaceEthernet#tx_tlvs_cfg}
  */
  readonly txTlvsCfg?: InterfaceEthernetLldpTxTlvsCfg;
}

export function interfaceEthernetLldpToTerraform(struct?: InterfaceEthernetLldpOutputReference | InterfaceEthernetLldp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    enable_cfg: interfaceEthernetLldpEnableCfgToTerraform(struct!.enableCfg),
    notification_cfg: interfaceEthernetLldpNotificationCfgToTerraform(struct!.notificationCfg),
    tx_dot1_cfg: interfaceEthernetLldpTxDot1CfgToTerraform(struct!.txDot1Cfg),
    tx_tlvs_cfg: interfaceEthernetLldpTxTlvsCfgToTerraform(struct!.txTlvsCfg),
  }
}


export function interfaceEthernetLldpToHclTerraform(struct?: InterfaceEthernetLldpOutputReference | InterfaceEthernetLldp): any {
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
    enable_cfg: {
      value: interfaceEthernetLldpEnableCfgToHclTerraform(struct!.enableCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetLldpEnableCfgList",
    },
    notification_cfg: {
      value: interfaceEthernetLldpNotificationCfgToHclTerraform(struct!.notificationCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetLldpNotificationCfgList",
    },
    tx_dot1_cfg: {
      value: interfaceEthernetLldpTxDot1CfgToHclTerraform(struct!.txDot1Cfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetLldpTxDot1CfgList",
    },
    tx_tlvs_cfg: {
      value: interfaceEthernetLldpTxTlvsCfgToHclTerraform(struct!.txTlvsCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetLldpTxTlvsCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetLldpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetLldp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._enableCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCfg = this._enableCfg?.internalValue;
    }
    if (this._notificationCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationCfg = this._notificationCfg?.internalValue;
    }
    if (this._txDot1Cfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.txDot1Cfg = this._txDot1Cfg?.internalValue;
    }
    if (this._txTlvsCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.txTlvsCfg = this._txTlvsCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetLldp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._enableCfg.internalValue = undefined;
      this._notificationCfg.internalValue = undefined;
      this._txDot1Cfg.internalValue = undefined;
      this._txTlvsCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._enableCfg.internalValue = value.enableCfg;
      this._notificationCfg.internalValue = value.notificationCfg;
      this._txDot1Cfg.internalValue = value.txDot1Cfg;
      this._txTlvsCfg.internalValue = value.txTlvsCfg;
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

  // enable_cfg - computed: false, optional: true, required: false
  private _enableCfg = new InterfaceEthernetLldpEnableCfgOutputReference(this, "enable_cfg");
  public get enableCfg() {
    return this._enableCfg;
  }
  public putEnableCfg(value: InterfaceEthernetLldpEnableCfg) {
    this._enableCfg.internalValue = value;
  }
  public resetEnableCfg() {
    this._enableCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCfgInput() {
    return this._enableCfg.internalValue;
  }

  // notification_cfg - computed: false, optional: true, required: false
  private _notificationCfg = new InterfaceEthernetLldpNotificationCfgOutputReference(this, "notification_cfg");
  public get notificationCfg() {
    return this._notificationCfg;
  }
  public putNotificationCfg(value: InterfaceEthernetLldpNotificationCfg) {
    this._notificationCfg.internalValue = value;
  }
  public resetNotificationCfg() {
    this._notificationCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationCfgInput() {
    return this._notificationCfg.internalValue;
  }

  // tx_dot1_cfg - computed: false, optional: true, required: false
  private _txDot1Cfg = new InterfaceEthernetLldpTxDot1CfgOutputReference(this, "tx_dot1_cfg");
  public get txDot1Cfg() {
    return this._txDot1Cfg;
  }
  public putTxDot1Cfg(value: InterfaceEthernetLldpTxDot1Cfg) {
    this._txDot1Cfg.internalValue = value;
  }
  public resetTxDot1Cfg() {
    this._txDot1Cfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txDot1CfgInput() {
    return this._txDot1Cfg.internalValue;
  }

  // tx_tlvs_cfg - computed: false, optional: true, required: false
  private _txTlvsCfg = new InterfaceEthernetLldpTxTlvsCfgOutputReference(this, "tx_tlvs_cfg");
  public get txTlvsCfg() {
    return this._txTlvsCfg;
  }
  public putTxTlvsCfg(value: InterfaceEthernetLldpTxTlvsCfg) {
    this._txTlvsCfg.internalValue = value;
  }
  public resetTxTlvsCfg() {
    this._txTlvsCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txTlvsCfgInput() {
    return this._txTlvsCfg.internalValue;
  }
}
export interface InterfaceEthernetLw4O6 {
  /**
  * Configure LW-4over6 outside interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#inside InterfaceEthernet#inside}
  */
  readonly inside?: number;
  /**
  * Configure LW-4over6 inside interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#outside InterfaceEthernet#outside}
  */
  readonly outside?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#uuid InterfaceEthernet#uuid}
  */
  readonly uuid?: string;
}

export function interfaceEthernetLw4O6ToTerraform(struct?: InterfaceEthernetLw4O6OutputReference | InterfaceEthernetLw4O6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inside: cdktf.numberToTerraform(struct!.inside),
    outside: cdktf.numberToTerraform(struct!.outside),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function interfaceEthernetLw4O6ToHclTerraform(struct?: InterfaceEthernetLw4O6OutputReference | InterfaceEthernetLw4O6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inside: {
      value: cdktf.numberToHclTerraform(struct!.inside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outside: {
      value: cdktf.numberToHclTerraform(struct!.outside),
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

export class InterfaceEthernetLw4O6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetLw4O6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inside !== undefined) {
      hasAnyValues = true;
      internalValueResult.inside = this._inside;
    }
    if (this._outside !== undefined) {
      hasAnyValues = true;
      internalValueResult.outside = this._outside;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetLw4O6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inside = undefined;
      this._outside = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inside = value.inside;
      this._outside = value.outside;
      this._uuid = value.uuid;
    }
  }

  // inside - computed: false, optional: true, required: false
  private _inside?: number; 
  public get inside() {
    return this.getNumberAttribute('inside');
  }
  public set inside(value: number) {
    this._inside = value;
  }
  public resetInside() {
    this._inside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideInput() {
    return this._inside;
  }

  // outside - computed: false, optional: true, required: false
  private _outside?: number; 
  public get outside() {
    return this.getNumberAttribute('outside');
  }
  public set outside(value: number) {
    this._outside = value;
  }
  public resetOutside() {
    this._outside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideInput() {
    return this._outside;
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
export interface InterfaceEthernetMap {
  /**
  * Configure MAP inside interface (connected to MAP domains)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#inside InterfaceEthernet#inside}
  */
  readonly inside?: number;
  /**
  * Configure MAP inside interface (connected to MAP domains)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#map_t_inside InterfaceEthernet#map_t_inside}
  */
  readonly mapTInside?: number;
  /**
  * Configure MAP outside interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#map_t_outside InterfaceEthernet#map_t_outside}
  */
  readonly mapTOutside?: number;
  /**
  * Configure MAP outside interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#outside InterfaceEthernet#outside}
  */
  readonly outside?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#uuid InterfaceEthernet#uuid}
  */
  readonly uuid?: string;
}

export function interfaceEthernetMapToTerraform(struct?: InterfaceEthernetMapOutputReference | InterfaceEthernetMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inside: cdktf.numberToTerraform(struct!.inside),
    map_t_inside: cdktf.numberToTerraform(struct!.mapTInside),
    map_t_outside: cdktf.numberToTerraform(struct!.mapTOutside),
    outside: cdktf.numberToTerraform(struct!.outside),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function interfaceEthernetMapToHclTerraform(struct?: InterfaceEthernetMapOutputReference | InterfaceEthernetMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inside: {
      value: cdktf.numberToHclTerraform(struct!.inside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    map_t_inside: {
      value: cdktf.numberToHclTerraform(struct!.mapTInside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    map_t_outside: {
      value: cdktf.numberToHclTerraform(struct!.mapTOutside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outside: {
      value: cdktf.numberToHclTerraform(struct!.outside),
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

export class InterfaceEthernetMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inside !== undefined) {
      hasAnyValues = true;
      internalValueResult.inside = this._inside;
    }
    if (this._mapTInside !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapTInside = this._mapTInside;
    }
    if (this._mapTOutside !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapTOutside = this._mapTOutside;
    }
    if (this._outside !== undefined) {
      hasAnyValues = true;
      internalValueResult.outside = this._outside;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inside = undefined;
      this._mapTInside = undefined;
      this._mapTOutside = undefined;
      this._outside = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inside = value.inside;
      this._mapTInside = value.mapTInside;
      this._mapTOutside = value.mapTOutside;
      this._outside = value.outside;
      this._uuid = value.uuid;
    }
  }

  // inside - computed: false, optional: true, required: false
  private _inside?: number; 
  public get inside() {
    return this.getNumberAttribute('inside');
  }
  public set inside(value: number) {
    this._inside = value;
  }
  public resetInside() {
    this._inside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideInput() {
    return this._inside;
  }

  // map_t_inside - computed: false, optional: true, required: false
  private _mapTInside?: number; 
  public get mapTInside() {
    return this.getNumberAttribute('map_t_inside');
  }
  public set mapTInside(value: number) {
    this._mapTInside = value;
  }
  public resetMapTInside() {
    this._mapTInside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapTInsideInput() {
    return this._mapTInside;
  }

  // map_t_outside - computed: false, optional: true, required: false
  private _mapTOutside?: number; 
  public get mapTOutside() {
    return this.getNumberAttribute('map_t_outside');
  }
  public set mapTOutside(value: number) {
    this._mapTOutside = value;
  }
  public resetMapTOutside() {
    this._mapTOutside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapTOutsideInput() {
    return this._mapTOutside;
  }

  // outside - computed: false, optional: true, required: false
  private _outside?: number; 
  public get outside() {
    return this.getNumberAttribute('outside');
  }
  public set outside(value: number) {
    this._outside = value;
  }
  public resetOutside() {
    this._outside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideInput() {
    return this._outside;
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
export interface InterfaceEthernetMonitorListStruct {
  /**
  * Mirror index
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#mirror_index InterfaceEthernet#mirror_index}
  */
  readonly mirrorIndex?: number;
  /**
  * 'input': Incoming packets; 'output': Outgoing packets; 'both': Both incoming and outgoing packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#monitor InterfaceEthernet#monitor}
  */
  readonly monitor?: string;
  /**
  * VLAN number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#monitor_vlan InterfaceEthernet#monitor_vlan}
  */
  readonly monitorVlan?: number;
}

export function interfaceEthernetMonitorListStructToTerraform(struct?: InterfaceEthernetMonitorListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mirror_index: cdktf.numberToTerraform(struct!.mirrorIndex),
    monitor: cdktf.stringToTerraform(struct!.monitor),
    monitor_vlan: cdktf.numberToTerraform(struct!.monitorVlan),
  }
}


export function interfaceEthernetMonitorListStructToHclTerraform(struct?: InterfaceEthernetMonitorListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mirror_index: {
      value: cdktf.numberToHclTerraform(struct!.mirrorIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monitor: {
      value: cdktf.stringToHclTerraform(struct!.monitor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitor_vlan: {
      value: cdktf.numberToHclTerraform(struct!.monitorVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetMonitorListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetMonitorListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mirrorIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrorIndex = this._mirrorIndex;
    }
    if (this._monitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitor = this._monitor;
    }
    if (this._monitorVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorVlan = this._monitorVlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetMonitorListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mirrorIndex = undefined;
      this._monitor = undefined;
      this._monitorVlan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mirrorIndex = value.mirrorIndex;
      this._monitor = value.monitor;
      this._monitorVlan = value.monitorVlan;
    }
  }

  // mirror_index - computed: false, optional: true, required: false
  private _mirrorIndex?: number; 
  public get mirrorIndex() {
    return this.getNumberAttribute('mirror_index');
  }
  public set mirrorIndex(value: number) {
    this._mirrorIndex = value;
  }
  public resetMirrorIndex() {
    this._mirrorIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorIndexInput() {
    return this._mirrorIndex;
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor?: string; 
  public get monitor() {
    return this.getStringAttribute('monitor');
  }
  public set monitor(value: string) {
    this._monitor = value;
  }
  public resetMonitor() {
    this._monitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor;
  }

  // monitor_vlan - computed: false, optional: true, required: false
  private _monitorVlan?: number; 
  public get monitorVlan() {
    return this.getNumberAttribute('monitor_vlan');
  }
  public set monitorVlan(value: number) {
    this._monitorVlan = value;
  }
  public resetMonitorVlan() {
    this._monitorVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorVlanInput() {
    return this._monitorVlan;
  }
}

export class InterfaceEthernetMonitorListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetMonitorListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetMonitorListStructOutputReference {
    return new InterfaceEthernetMonitorListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetNptv6DomainListStruct {
  /**
  * 'inside': This interface is connected to NPTv6 inside networks; 'outside': This interface is connected to NPTv6 outside networks;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#bind_type InterfaceEthernet#bind_type}
  */
  readonly bindType: string;
  /**
  * NPTv6 domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#domain_name InterfaceEthernet#domain_name}
  */
  readonly domainName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#uuid InterfaceEthernet#uuid}
  */
  readonly uuid?: string;
}

export function interfaceEthernetNptv6DomainListStructToTerraform(struct?: InterfaceEthernetNptv6DomainListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bind_type: cdktf.stringToTerraform(struct!.bindType),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function interfaceEthernetNptv6DomainListStructToHclTerraform(struct?: InterfaceEthernetNptv6DomainListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bind_type: {
      value: cdktf.stringToHclTerraform(struct!.bindType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
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

export class InterfaceEthernetNptv6DomainListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetNptv6DomainListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bindType !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindType = this._bindType;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetNptv6DomainListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bindType = undefined;
      this._domainName = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bindType = value.bindType;
      this._domainName = value.domainName;
      this._uuid = value.uuid;
    }
  }

  // bind_type - computed: false, optional: false, required: true
  private _bindType?: string; 
  public get bindType() {
    return this.getStringAttribute('bind_type');
  }
  public set bindType(value: string) {
    this._bindType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindTypeInput() {
    return this._bindType;
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
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

export class InterfaceEthernetNptv6DomainListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetNptv6DomainListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetNptv6DomainListStructOutputReference {
    return new InterfaceEthernetNptv6DomainListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetNptv6 {
  /**
  * domain_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#domain_list InterfaceEthernet#domain_list}
  */
  readonly domainList?: InterfaceEthernetNptv6DomainListStruct[] | cdktf.IResolvable;
}

export function interfaceEthernetNptv6ToTerraform(struct?: InterfaceEthernetNptv6OutputReference | InterfaceEthernetNptv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_list: cdktf.listMapper(interfaceEthernetNptv6DomainListStructToTerraform, true)(struct!.domainList),
  }
}


export function interfaceEthernetNptv6ToHclTerraform(struct?: InterfaceEthernetNptv6OutputReference | InterfaceEthernetNptv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_list: {
      value: cdktf.listMapperHcl(interfaceEthernetNptv6DomainListStructToHclTerraform, true)(struct!.domainList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetNptv6DomainListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetNptv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetNptv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainList = this._domainList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetNptv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domainList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domainList.internalValue = value.domainList;
    }
  }

  // domain_list - computed: false, optional: true, required: false
  private _domainList = new InterfaceEthernetNptv6DomainListStructList(this, "domain_list", false);
  public get domainList() {
    return this._domainList;
  }
  public putDomainList(value: InterfaceEthernetNptv6DomainListStruct[] | cdktf.IResolvable) {
    this._domainList.internalValue = value;
  }
  public resetDomainList() {
    this._domainList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainListInput() {
    return this._domainList.internalValue;
  }
}
export interface InterfaceEthernetSamplingEnable {
  /**
  * 'all': all; 'packets_input': Input packets; 'bytes_input': Input bytes; 'received_broadcasts': Received broadcasts; 'received_multicasts': Received multicasts; 'received_unicasts': Received unicasts; 'input_errors': Input errors; 'crc': CRC; 'frame': Frames; 'runts': Runts; 'giants': Giants; 'packets_output': Output packets; 'bytes_output': Output bytes; 'transmitted_broadcasts': Transmitted broadcasts; 'transmitted_multicasts': Transmitted multicasts; 'transmitted_unicasts': Transmitted unicasts; 'output_errors': Output errors; 'collisions': Collisions; 'giants_output': Output Giants; 'rate_pkt_sent': Packet sent rate packets/sec; 'rate_byte_sent': Byte sent rate bits/sec; 'rate_pkt_rcvd': Packet received rate packets/sec; 'rate_byte_rcvd': Byte received rate bits/sec; 'load_interval': Load Interval; 'drops': Drops; 'input_utilization': Input Utilization; 'output_utilization': Output Utilization;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#counters1 InterfaceEthernet#counters1}
  */
  readonly counters1?: string;
}

export function interfaceEthernetSamplingEnableToTerraform(struct?: InterfaceEthernetSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function interfaceEthernetSamplingEnableToHclTerraform(struct?: InterfaceEthernetSamplingEnable | cdktf.IResolvable): any {
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

export class InterfaceEthernetSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfaceEthernetSamplingEnable | cdktf.IResolvable | undefined) {
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

export class InterfaceEthernetSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetSamplingEnableOutputReference {
    return new InterfaceEthernetSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetSpanningTreeInstanceListStruct {
  /**
  * Instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#instance_start InterfaceEthernet#instance_start}
  */
  readonly instanceStart?: number;
  /**
  * Path cost (Limit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#mstp_path_cost InterfaceEthernet#mstp_path_cost}
  */
  readonly mstpPathCost?: number;
}

export function interfaceEthernetSpanningTreeInstanceListStructToTerraform(struct?: InterfaceEthernetSpanningTreeInstanceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_start: cdktf.numberToTerraform(struct!.instanceStart),
    mstp_path_cost: cdktf.numberToTerraform(struct!.mstpPathCost),
  }
}


export function interfaceEthernetSpanningTreeInstanceListStructToHclTerraform(struct?: InterfaceEthernetSpanningTreeInstanceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_start: {
      value: cdktf.numberToHclTerraform(struct!.instanceStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mstp_path_cost: {
      value: cdktf.numberToHclTerraform(struct!.mstpPathCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetSpanningTreeInstanceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetSpanningTreeInstanceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceStart = this._instanceStart;
    }
    if (this._mstpPathCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.mstpPathCost = this._mstpPathCost;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetSpanningTreeInstanceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceStart = undefined;
      this._mstpPathCost = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceStart = value.instanceStart;
      this._mstpPathCost = value.mstpPathCost;
    }
  }

  // instance_start - computed: false, optional: true, required: false
  private _instanceStart?: number; 
  public get instanceStart() {
    return this.getNumberAttribute('instance_start');
  }
  public set instanceStart(value: number) {
    this._instanceStart = value;
  }
  public resetInstanceStart() {
    this._instanceStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceStartInput() {
    return this._instanceStart;
  }

  // mstp_path_cost - computed: false, optional: true, required: false
  private _mstpPathCost?: number; 
  public get mstpPathCost() {
    return this.getNumberAttribute('mstp_path_cost');
  }
  public set mstpPathCost(value: number) {
    this._mstpPathCost = value;
  }
  public resetMstpPathCost() {
    this._mstpPathCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mstpPathCostInput() {
    return this._mstpPathCost;
  }
}

export class InterfaceEthernetSpanningTreeInstanceListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetSpanningTreeInstanceListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetSpanningTreeInstanceListStructOutputReference {
    return new InterfaceEthernetSpanningTreeInstanceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetSpanningTree {
  /**
  * Enable admin-edge
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#admin_edge InterfaceEthernet#admin_edge}
  */
  readonly adminEdge?: number;
  /**
  * Enable auto-edge
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#auto_edge InterfaceEthernet#auto_edge}
  */
  readonly autoEdge?: number;
  /**
  * Path cost (Limit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#path_cost InterfaceEthernet#path_cost}
  */
  readonly pathCost?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#uuid InterfaceEthernet#uuid}
  */
  readonly uuid?: string;
  /**
  * instance_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#instance_list InterfaceEthernet#instance_list}
  */
  readonly instanceList?: InterfaceEthernetSpanningTreeInstanceListStruct[] | cdktf.IResolvable;
}

export function interfaceEthernetSpanningTreeToTerraform(struct?: InterfaceEthernetSpanningTreeOutputReference | InterfaceEthernetSpanningTree): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_edge: cdktf.numberToTerraform(struct!.adminEdge),
    auto_edge: cdktf.numberToTerraform(struct!.autoEdge),
    path_cost: cdktf.numberToTerraform(struct!.pathCost),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    instance_list: cdktf.listMapper(interfaceEthernetSpanningTreeInstanceListStructToTerraform, true)(struct!.instanceList),
  }
}


export function interfaceEthernetSpanningTreeToHclTerraform(struct?: InterfaceEthernetSpanningTreeOutputReference | InterfaceEthernetSpanningTree): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_edge: {
      value: cdktf.numberToHclTerraform(struct!.adminEdge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auto_edge: {
      value: cdktf.numberToHclTerraform(struct!.autoEdge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path_cost: {
      value: cdktf.numberToHclTerraform(struct!.pathCost),
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
    instance_list: {
      value: cdktf.listMapperHcl(interfaceEthernetSpanningTreeInstanceListStructToHclTerraform, true)(struct!.instanceList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetSpanningTreeInstanceListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetSpanningTreeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetSpanningTree | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminEdge !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminEdge = this._adminEdge;
    }
    if (this._autoEdge !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoEdge = this._autoEdge;
    }
    if (this._pathCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathCost = this._pathCost;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._instanceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceList = this._instanceList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetSpanningTree | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminEdge = undefined;
      this._autoEdge = undefined;
      this._pathCost = undefined;
      this._uuid = undefined;
      this._instanceList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminEdge = value.adminEdge;
      this._autoEdge = value.autoEdge;
      this._pathCost = value.pathCost;
      this._uuid = value.uuid;
      this._instanceList.internalValue = value.instanceList;
    }
  }

  // admin_edge - computed: false, optional: true, required: false
  private _adminEdge?: number; 
  public get adminEdge() {
    return this.getNumberAttribute('admin_edge');
  }
  public set adminEdge(value: number) {
    this._adminEdge = value;
  }
  public resetAdminEdge() {
    this._adminEdge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminEdgeInput() {
    return this._adminEdge;
  }

  // auto_edge - computed: false, optional: true, required: false
  private _autoEdge?: number; 
  public get autoEdge() {
    return this.getNumberAttribute('auto_edge');
  }
  public set autoEdge(value: number) {
    this._autoEdge = value;
  }
  public resetAutoEdge() {
    this._autoEdge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoEdgeInput() {
    return this._autoEdge;
  }

  // path_cost - computed: false, optional: true, required: false
  private _pathCost?: number; 
  public get pathCost() {
    return this.getNumberAttribute('path_cost');
  }
  public set pathCost(value: number) {
    this._pathCost = value;
  }
  public resetPathCost() {
    this._pathCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathCostInput() {
    return this._pathCost;
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

  // instance_list - computed: false, optional: true, required: false
  private _instanceList = new InterfaceEthernetSpanningTreeInstanceListStructList(this, "instance_list", false);
  public get instanceList() {
    return this._instanceList;
  }
  public putInstanceList(value: InterfaceEthernetSpanningTreeInstanceListStruct[] | cdktf.IResolvable) {
    this._instanceList.internalValue = value;
  }
  public resetInstanceList() {
    this._instanceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceListInput() {
    return this._instanceList.internalValue;
  }
}
export interface InterfaceEthernetTrunkGroupListUdldTimeoutCfg {
  /**
  * fast timeout in unit of milli-seconds(default 1000)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#fast InterfaceEthernet#fast}
  */
  readonly fast?: number;
  /**
  * slow timeout in unit of seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#slow InterfaceEthernet#slow}
  */
  readonly slow?: number;
}

export function interfaceEthernetTrunkGroupListUdldTimeoutCfgToTerraform(struct?: InterfaceEthernetTrunkGroupListUdldTimeoutCfgOutputReference | InterfaceEthernetTrunkGroupListUdldTimeoutCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fast: cdktf.numberToTerraform(struct!.fast),
    slow: cdktf.numberToTerraform(struct!.slow),
  }
}


export function interfaceEthernetTrunkGroupListUdldTimeoutCfgToHclTerraform(struct?: InterfaceEthernetTrunkGroupListUdldTimeoutCfgOutputReference | InterfaceEthernetTrunkGroupListUdldTimeoutCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fast: {
      value: cdktf.numberToHclTerraform(struct!.fast),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slow: {
      value: cdktf.numberToHclTerraform(struct!.slow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetTrunkGroupListUdldTimeoutCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetTrunkGroupListUdldTimeoutCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fast !== undefined) {
      hasAnyValues = true;
      internalValueResult.fast = this._fast;
    }
    if (this._slow !== undefined) {
      hasAnyValues = true;
      internalValueResult.slow = this._slow;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetTrunkGroupListUdldTimeoutCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fast = undefined;
      this._slow = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fast = value.fast;
      this._slow = value.slow;
    }
  }

  // fast - computed: false, optional: true, required: false
  private _fast?: number; 
  public get fast() {
    return this.getNumberAttribute('fast');
  }
  public set fast(value: number) {
    this._fast = value;
  }
  public resetFast() {
    this._fast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastInput() {
    return this._fast;
  }

  // slow - computed: false, optional: true, required: false
  private _slow?: number; 
  public get slow() {
    return this.getNumberAttribute('slow');
  }
  public set slow(value: number) {
    this._slow = value;
  }
  public resetSlow() {
    this._slow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowInput() {
    return this._slow;
  }
}
export interface InterfaceEthernetTrunkGroupListStruct {
  /**
  * LACP admin key (Admin key value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#admin_key InterfaceEthernet#admin_key}
  */
  readonly adminKey?: number;
  /**
  * 'active': enable initiation of LACP negotiation on a port(default); 'passive': disable initiation of LACP negotiation on a port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#mode InterfaceEthernet#mode}
  */
  readonly mode?: string;
  /**
  * Set LACP priority for a port (LACP port priority)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#port_priority InterfaceEthernet#port_priority}
  */
  readonly portPriority?: number;
  /**
  * 'long': Set LACP long timeout (default); 'short': Set LACP short timeout;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#timeout InterfaceEthernet#timeout}
  */
  readonly timeout?: string;
  /**
  * Trunk Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#trunk_number InterfaceEthernet#trunk_number}
  */
  readonly trunkNumber: number;
  /**
  * 'static': Static (default); 'lacp': lacp; 'lacp-udld': lacp-udld;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#type InterfaceEthernet#type}
  */
  readonly type?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#user_tag InterfaceEthernet#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#uuid InterfaceEthernet#uuid}
  */
  readonly uuid?: string;
  /**
  * udld_timeout_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#udld_timeout_cfg InterfaceEthernet#udld_timeout_cfg}
  */
  readonly udldTimeoutCfg?: InterfaceEthernetTrunkGroupListUdldTimeoutCfg;
}

export function interfaceEthernetTrunkGroupListStructToTerraform(struct?: InterfaceEthernetTrunkGroupListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_key: cdktf.numberToTerraform(struct!.adminKey),
    mode: cdktf.stringToTerraform(struct!.mode),
    port_priority: cdktf.numberToTerraform(struct!.portPriority),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    trunk_number: cdktf.numberToTerraform(struct!.trunkNumber),
    type: cdktf.stringToTerraform(struct!.type),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    udld_timeout_cfg: interfaceEthernetTrunkGroupListUdldTimeoutCfgToTerraform(struct!.udldTimeoutCfg),
  }
}


export function interfaceEthernetTrunkGroupListStructToHclTerraform(struct?: InterfaceEthernetTrunkGroupListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_key: {
      value: cdktf.numberToHclTerraform(struct!.adminKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_priority: {
      value: cdktf.numberToHclTerraform(struct!.portPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trunk_number: {
      value: cdktf.numberToHclTerraform(struct!.trunkNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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
    udld_timeout_cfg: {
      value: interfaceEthernetTrunkGroupListUdldTimeoutCfgToHclTerraform(struct!.udldTimeoutCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetTrunkGroupListUdldTimeoutCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetTrunkGroupListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetTrunkGroupListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminKey = this._adminKey;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._portPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.portPriority = this._portPriority;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._trunkNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunkNumber = this._trunkNumber;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._udldTimeoutCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udldTimeoutCfg = this._udldTimeoutCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetTrunkGroupListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminKey = undefined;
      this._mode = undefined;
      this._portPriority = undefined;
      this._timeout = undefined;
      this._trunkNumber = undefined;
      this._type = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._udldTimeoutCfg.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminKey = value.adminKey;
      this._mode = value.mode;
      this._portPriority = value.portPriority;
      this._timeout = value.timeout;
      this._trunkNumber = value.trunkNumber;
      this._type = value.type;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._udldTimeoutCfg.internalValue = value.udldTimeoutCfg;
    }
  }

  // admin_key - computed: false, optional: true, required: false
  private _adminKey?: number; 
  public get adminKey() {
    return this.getNumberAttribute('admin_key');
  }
  public set adminKey(value: number) {
    this._adminKey = value;
  }
  public resetAdminKey() {
    this._adminKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminKeyInput() {
    return this._adminKey;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // port_priority - computed: false, optional: true, required: false
  private _portPriority?: number; 
  public get portPriority() {
    return this.getNumberAttribute('port_priority');
  }
  public set portPriority(value: number) {
    this._portPriority = value;
  }
  public resetPortPriority() {
    this._portPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portPriorityInput() {
    return this._portPriority;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // trunk_number - computed: false, optional: false, required: true
  private _trunkNumber?: number; 
  public get trunkNumber() {
    return this.getNumberAttribute('trunk_number');
  }
  public set trunkNumber(value: number) {
    this._trunkNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkNumberInput() {
    return this._trunkNumber;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

  // udld_timeout_cfg - computed: false, optional: true, required: false
  private _udldTimeoutCfg = new InterfaceEthernetTrunkGroupListUdldTimeoutCfgOutputReference(this, "udld_timeout_cfg");
  public get udldTimeoutCfg() {
    return this._udldTimeoutCfg;
  }
  public putUdldTimeoutCfg(value: InterfaceEthernetTrunkGroupListUdldTimeoutCfg) {
    this._udldTimeoutCfg.internalValue = value;
  }
  public resetUdldTimeoutCfg() {
    this._udldTimeoutCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udldTimeoutCfgInput() {
    return this._udldTimeoutCfg.internalValue;
  }
}

export class InterfaceEthernetTrunkGroupListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetTrunkGroupListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetTrunkGroupListStructOutputReference {
    return new InterfaceEthernetTrunkGroupListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet thunder_interface_ethernet}
*/
export class InterfaceEthernet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_interface_ethernet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceEthernet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceEthernet to import
  * @param importFromId The id of the existing InterfaceEthernet that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceEthernet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_interface_ethernet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet thunder_interface_ethernet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceEthernetConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceEthernetConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_interface_ethernet',
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
    this._action = config.action;
    this._autoNegEnable = config.autoNegEnable;
    this._cpuProcess = config.cpuProcess;
    this._cpuProcessDir = config.cpuProcessDir;
    this._duplexity = config.duplexity;
    this._fecForcedOff = config.fecForcedOff;
    this._fecForcedOn = config.fecForcedOn;
    this._flowControl = config.flowControl;
    this._gamingProtocolCompliance = config.gamingProtocolCompliance;
    this._id = config.id;
    this._ifnum = config.ifnum;
    this._ipgBitTime = config.ipgBitTime;
    this._l3VlanFwdDisable = config.l3VlanFwdDisable;
    this._loadInterval = config.loadInterval;
    this._macLearning = config.macLearning;
    this._mediaTypeCopper = config.mediaTypeCopper;
    this._mtu = config.mtu;
    this._name = config.name;
    this._packetCaptureTemplate = config.packetCaptureTemplate;
    this._pingSweepDetection = config.pingSweepDetection;
    this._portBreakout = config.portBreakout;
    this._portScanDetection = config.portScanDetection;
    this._removeVlanTag = config.removeVlanTag;
    this._speed = config.speed;
    this._speedForced10G = config.speedForced10G;
    this._speedForced1G = config.speedForced1G;
    this._speedForced40G = config.speedForced40G;
    this._trafficDistributionMode = config.trafficDistributionMode;
    this._trapSource = config.trapSource;
    this._updateL2Info = config.updateL2Info;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._virtualWire = config.virtualWire;
    this._vlanLearning = config.vlanLearning;
    this._accessList.internalValue = config.accessList;
    this._bfd.internalValue = config.bfd;
    this._ddos.internalValue = config.ddos;
    this._icmpRateLimit.internalValue = config.icmpRateLimit;
    this._icmpv6RateLimit.internalValue = config.icmpv6RateLimit;
    this._ip.internalValue = config.ip;
    this._ipv6.internalValue = config.ipv6;
    this._isis.internalValue = config.isis;
    this._lldp.internalValue = config.lldp;
    this._lw4O6.internalValue = config.lw4O6;
    this._map.internalValue = config.map;
    this._monitorList.internalValue = config.monitorList;
    this._nptv6.internalValue = config.nptv6;
    this._samplingEnable.internalValue = config.samplingEnable;
    this._spanningTree.internalValue = config.spanningTree;
    this._trunkGroupList.internalValue = config.trunkGroupList;
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

  // auto_neg_enable - computed: false, optional: true, required: false
  private _autoNegEnable?: number; 
  public get autoNegEnable() {
    return this.getNumberAttribute('auto_neg_enable');
  }
  public set autoNegEnable(value: number) {
    this._autoNegEnable = value;
  }
  public resetAutoNegEnable() {
    this._autoNegEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoNegEnableInput() {
    return this._autoNegEnable;
  }

  // cpu_process - computed: false, optional: true, required: false
  private _cpuProcess?: number; 
  public get cpuProcess() {
    return this.getNumberAttribute('cpu_process');
  }
  public set cpuProcess(value: number) {
    this._cpuProcess = value;
  }
  public resetCpuProcess() {
    this._cpuProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuProcessInput() {
    return this._cpuProcess;
  }

  // cpu_process_dir - computed: false, optional: true, required: false
  private _cpuProcessDir?: string; 
  public get cpuProcessDir() {
    return this.getStringAttribute('cpu_process_dir');
  }
  public set cpuProcessDir(value: string) {
    this._cpuProcessDir = value;
  }
  public resetCpuProcessDir() {
    this._cpuProcessDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuProcessDirInput() {
    return this._cpuProcessDir;
  }

  // duplexity - computed: false, optional: true, required: false
  private _duplexity?: string; 
  public get duplexity() {
    return this.getStringAttribute('duplexity');
  }
  public set duplexity(value: string) {
    this._duplexity = value;
  }
  public resetDuplexity() {
    this._duplexity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplexityInput() {
    return this._duplexity;
  }

  // fec_forced_off - computed: false, optional: true, required: false
  private _fecForcedOff?: number; 
  public get fecForcedOff() {
    return this.getNumberAttribute('fec_forced_off');
  }
  public set fecForcedOff(value: number) {
    this._fecForcedOff = value;
  }
  public resetFecForcedOff() {
    this._fecForcedOff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fecForcedOffInput() {
    return this._fecForcedOff;
  }

  // fec_forced_on - computed: false, optional: true, required: false
  private _fecForcedOn?: number; 
  public get fecForcedOn() {
    return this.getNumberAttribute('fec_forced_on');
  }
  public set fecForcedOn(value: number) {
    this._fecForcedOn = value;
  }
  public resetFecForcedOn() {
    this._fecForcedOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fecForcedOnInput() {
    return this._fecForcedOn;
  }

  // flow_control - computed: false, optional: true, required: false
  private _flowControl?: number; 
  public get flowControl() {
    return this.getNumberAttribute('flow_control');
  }
  public set flowControl(value: number) {
    this._flowControl = value;
  }
  public resetFlowControl() {
    this._flowControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowControlInput() {
    return this._flowControl;
  }

  // gaming_protocol_compliance - computed: false, optional: true, required: false
  private _gamingProtocolCompliance?: number; 
  public get gamingProtocolCompliance() {
    return this.getNumberAttribute('gaming_protocol_compliance');
  }
  public set gamingProtocolCompliance(value: number) {
    this._gamingProtocolCompliance = value;
  }
  public resetGamingProtocolCompliance() {
    this._gamingProtocolCompliance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gamingProtocolComplianceInput() {
    return this._gamingProtocolCompliance;
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

  // ifnum - computed: false, optional: false, required: true
  private _ifnum?: number; 
  public get ifnum() {
    return this.getNumberAttribute('ifnum');
  }
  public set ifnum(value: number) {
    this._ifnum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ifnumInput() {
    return this._ifnum;
  }

  // ipg_bit_time - computed: false, optional: true, required: false
  private _ipgBitTime?: number; 
  public get ipgBitTime() {
    return this.getNumberAttribute('ipg_bit_time');
  }
  public set ipgBitTime(value: number) {
    this._ipgBitTime = value;
  }
  public resetIpgBitTime() {
    this._ipgBitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipgBitTimeInput() {
    return this._ipgBitTime;
  }

  // l3_vlan_fwd_disable - computed: false, optional: true, required: false
  private _l3VlanFwdDisable?: number; 
  public get l3VlanFwdDisable() {
    return this.getNumberAttribute('l3_vlan_fwd_disable');
  }
  public set l3VlanFwdDisable(value: number) {
    this._l3VlanFwdDisable = value;
  }
  public resetL3VlanFwdDisable() {
    this._l3VlanFwdDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3VlanFwdDisableInput() {
    return this._l3VlanFwdDisable;
  }

  // load_interval - computed: false, optional: true, required: false
  private _loadInterval?: number; 
  public get loadInterval() {
    return this.getNumberAttribute('load_interval');
  }
  public set loadInterval(value: number) {
    this._loadInterval = value;
  }
  public resetLoadInterval() {
    this._loadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadIntervalInput() {
    return this._loadInterval;
  }

  // mac_learning - computed: false, optional: true, required: false
  private _macLearning?: string; 
  public get macLearning() {
    return this.getStringAttribute('mac_learning');
  }
  public set macLearning(value: string) {
    this._macLearning = value;
  }
  public resetMacLearning() {
    this._macLearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macLearningInput() {
    return this._macLearning;
  }

  // media_type_copper - computed: false, optional: true, required: false
  private _mediaTypeCopper?: number; 
  public get mediaTypeCopper() {
    return this.getNumberAttribute('media_type_copper');
  }
  public set mediaTypeCopper(value: number) {
    this._mediaTypeCopper = value;
  }
  public resetMediaTypeCopper() {
    this._mediaTypeCopper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaTypeCopperInput() {
    return this._mediaTypeCopper;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // packet_capture_template - computed: false, optional: true, required: false
  private _packetCaptureTemplate?: string; 
  public get packetCaptureTemplate() {
    return this.getStringAttribute('packet_capture_template');
  }
  public set packetCaptureTemplate(value: string) {
    this._packetCaptureTemplate = value;
  }
  public resetPacketCaptureTemplate() {
    this._packetCaptureTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetCaptureTemplateInput() {
    return this._packetCaptureTemplate;
  }

  // ping_sweep_detection - computed: false, optional: true, required: false
  private _pingSweepDetection?: string; 
  public get pingSweepDetection() {
    return this.getStringAttribute('ping_sweep_detection');
  }
  public set pingSweepDetection(value: string) {
    this._pingSweepDetection = value;
  }
  public resetPingSweepDetection() {
    this._pingSweepDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingSweepDetectionInput() {
    return this._pingSweepDetection;
  }

  // port_breakout - computed: false, optional: true, required: false
  private _portBreakout?: string; 
  public get portBreakout() {
    return this.getStringAttribute('port_breakout');
  }
  public set portBreakout(value: string) {
    this._portBreakout = value;
  }
  public resetPortBreakout() {
    this._portBreakout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBreakoutInput() {
    return this._portBreakout;
  }

  // port_scan_detection - computed: false, optional: true, required: false
  private _portScanDetection?: string; 
  public get portScanDetection() {
    return this.getStringAttribute('port_scan_detection');
  }
  public set portScanDetection(value: string) {
    this._portScanDetection = value;
  }
  public resetPortScanDetection() {
    this._portScanDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portScanDetectionInput() {
    return this._portScanDetection;
  }

  // remove_vlan_tag - computed: false, optional: true, required: false
  private _removeVlanTag?: number; 
  public get removeVlanTag() {
    return this.getNumberAttribute('remove_vlan_tag');
  }
  public set removeVlanTag(value: number) {
    this._removeVlanTag = value;
  }
  public resetRemoveVlanTag() {
    this._removeVlanTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeVlanTagInput() {
    return this._removeVlanTag;
  }

  // speed - computed: false, optional: true, required: false
  private _speed?: string; 
  public get speed() {
    return this.getStringAttribute('speed');
  }
  public set speed(value: string) {
    this._speed = value;
  }
  public resetSpeed() {
    this._speed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInput() {
    return this._speed;
  }

  // speed_forced_10g - computed: false, optional: true, required: false
  private _speedForced10G?: number; 
  public get speedForced10G() {
    return this.getNumberAttribute('speed_forced_10g');
  }
  public set speedForced10G(value: number) {
    this._speedForced10G = value;
  }
  public resetSpeedForced10G() {
    this._speedForced10G = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedForced10GInput() {
    return this._speedForced10G;
  }

  // speed_forced_1g - computed: false, optional: true, required: false
  private _speedForced1G?: number; 
  public get speedForced1G() {
    return this.getNumberAttribute('speed_forced_1g');
  }
  public set speedForced1G(value: number) {
    this._speedForced1G = value;
  }
  public resetSpeedForced1G() {
    this._speedForced1G = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedForced1GInput() {
    return this._speedForced1G;
  }

  // speed_forced_40g - computed: false, optional: true, required: false
  private _speedForced40G?: number; 
  public get speedForced40G() {
    return this.getNumberAttribute('speed_forced_40g');
  }
  public set speedForced40G(value: number) {
    this._speedForced40G = value;
  }
  public resetSpeedForced40G() {
    this._speedForced40G = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedForced40GInput() {
    return this._speedForced40G;
  }

  // traffic_distribution_mode - computed: false, optional: true, required: false
  private _trafficDistributionMode?: string; 
  public get trafficDistributionMode() {
    return this.getStringAttribute('traffic_distribution_mode');
  }
  public set trafficDistributionMode(value: string) {
    this._trafficDistributionMode = value;
  }
  public resetTrafficDistributionMode() {
    this._trafficDistributionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficDistributionModeInput() {
    return this._trafficDistributionMode;
  }

  // trap_source - computed: false, optional: true, required: false
  private _trapSource?: number; 
  public get trapSource() {
    return this.getNumberAttribute('trap_source');
  }
  public set trapSource(value: number) {
    this._trapSource = value;
  }
  public resetTrapSource() {
    this._trapSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapSourceInput() {
    return this._trapSource;
  }

  // update_l2_info - computed: false, optional: true, required: false
  private _updateL2Info?: number; 
  public get updateL2Info() {
    return this.getNumberAttribute('update_l2_info');
  }
  public set updateL2Info(value: number) {
    this._updateL2Info = value;
  }
  public resetUpdateL2Info() {
    this._updateL2Info = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateL2InfoInput() {
    return this._updateL2Info;
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

  // virtual_wire - computed: false, optional: true, required: false
  private _virtualWire?: number; 
  public get virtualWire() {
    return this.getNumberAttribute('virtual_wire');
  }
  public set virtualWire(value: number) {
    this._virtualWire = value;
  }
  public resetVirtualWire() {
    this._virtualWire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualWireInput() {
    return this._virtualWire;
  }

  // vlan_learning - computed: false, optional: true, required: false
  private _vlanLearning?: string; 
  public get vlanLearning() {
    return this.getStringAttribute('vlan_learning');
  }
  public set vlanLearning(value: string) {
    this._vlanLearning = value;
  }
  public resetVlanLearning() {
    this._vlanLearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanLearningInput() {
    return this._vlanLearning;
  }

  // access_list - computed: false, optional: true, required: false
  private _accessList = new InterfaceEthernetAccessListStructOutputReference(this, "access_list");
  public get accessList() {
    return this._accessList;
  }
  public putAccessList(value: InterfaceEthernetAccessListStruct) {
    this._accessList.internalValue = value;
  }
  public resetAccessList() {
    this._accessList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList.internalValue;
  }

  // bfd - computed: false, optional: true, required: false
  private _bfd = new InterfaceEthernetBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }
  public putBfd(value: InterfaceEthernetBfd) {
    this._bfd.internalValue = value;
  }
  public resetBfd() {
    this._bfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd.internalValue;
  }

  // ddos - computed: false, optional: true, required: false
  private _ddos = new InterfaceEthernetDdosOutputReference(this, "ddos");
  public get ddos() {
    return this._ddos;
  }
  public putDdos(value: InterfaceEthernetDdos) {
    this._ddos.internalValue = value;
  }
  public resetDdos() {
    this._ddos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosInput() {
    return this._ddos.internalValue;
  }

  // icmp_rate_limit - computed: false, optional: true, required: false
  private _icmpRateLimit = new InterfaceEthernetIcmpRateLimitOutputReference(this, "icmp_rate_limit");
  public get icmpRateLimit() {
    return this._icmpRateLimit;
  }
  public putIcmpRateLimit(value: InterfaceEthernetIcmpRateLimit) {
    this._icmpRateLimit.internalValue = value;
  }
  public resetIcmpRateLimit() {
    this._icmpRateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpRateLimitInput() {
    return this._icmpRateLimit.internalValue;
  }

  // icmpv6_rate_limit - computed: false, optional: true, required: false
  private _icmpv6RateLimit = new InterfaceEthernetIcmpv6RateLimitOutputReference(this, "icmpv6_rate_limit");
  public get icmpv6RateLimit() {
    return this._icmpv6RateLimit;
  }
  public putIcmpv6RateLimit(value: InterfaceEthernetIcmpv6RateLimit) {
    this._icmpv6RateLimit.internalValue = value;
  }
  public resetIcmpv6RateLimit() {
    this._icmpv6RateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6RateLimitInput() {
    return this._icmpv6RateLimit.internalValue;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new InterfaceEthernetIpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }
  public putIp(value: InterfaceEthernetIp) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new InterfaceEthernetIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: InterfaceEthernetIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }

  // isis - computed: false, optional: true, required: false
  private _isis = new InterfaceEthernetIsisOutputReference(this, "isis");
  public get isis() {
    return this._isis;
  }
  public putIsis(value: InterfaceEthernetIsis) {
    this._isis.internalValue = value;
  }
  public resetIsis() {
    this._isis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisInput() {
    return this._isis.internalValue;
  }

  // lldp - computed: false, optional: true, required: false
  private _lldp = new InterfaceEthernetLldpOutputReference(this, "lldp");
  public get lldp() {
    return this._lldp;
  }
  public putLldp(value: InterfaceEthernetLldp) {
    this._lldp.internalValue = value;
  }
  public resetLldp() {
    this._lldp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpInput() {
    return this._lldp.internalValue;
  }

  // lw_4o6 - computed: false, optional: true, required: false
  private _lw4O6 = new InterfaceEthernetLw4O6OutputReference(this, "lw_4o6");
  public get lw4O6() {
    return this._lw4O6;
  }
  public putLw4O6(value: InterfaceEthernetLw4O6) {
    this._lw4O6.internalValue = value;
  }
  public resetLw4O6() {
    this._lw4O6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lw4O6Input() {
    return this._lw4O6.internalValue;
  }

  // map - computed: false, optional: true, required: false
  private _map = new InterfaceEthernetMapOutputReference(this, "map");
  public get map() {
    return this._map;
  }
  public putMap(value: InterfaceEthernetMap) {
    this._map.internalValue = value;
  }
  public resetMap() {
    this._map.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapInput() {
    return this._map.internalValue;
  }

  // monitor_list - computed: false, optional: true, required: false
  private _monitorList = new InterfaceEthernetMonitorListStructList(this, "monitor_list", false);
  public get monitorList() {
    return this._monitorList;
  }
  public putMonitorList(value: InterfaceEthernetMonitorListStruct[] | cdktf.IResolvable) {
    this._monitorList.internalValue = value;
  }
  public resetMonitorList() {
    this._monitorList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorListInput() {
    return this._monitorList.internalValue;
  }

  // nptv6 - computed: false, optional: true, required: false
  private _nptv6 = new InterfaceEthernetNptv6OutputReference(this, "nptv6");
  public get nptv6() {
    return this._nptv6;
  }
  public putNptv6(value: InterfaceEthernetNptv6) {
    this._nptv6.internalValue = value;
  }
  public resetNptv6() {
    this._nptv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nptv6Input() {
    return this._nptv6.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new InterfaceEthernetSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: InterfaceEthernetSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // spanning_tree - computed: false, optional: true, required: false
  private _spanningTree = new InterfaceEthernetSpanningTreeOutputReference(this, "spanning_tree");
  public get spanningTree() {
    return this._spanningTree;
  }
  public putSpanningTree(value: InterfaceEthernetSpanningTree) {
    this._spanningTree.internalValue = value;
  }
  public resetSpanningTree() {
    this._spanningTree.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanningTreeInput() {
    return this._spanningTree.internalValue;
  }

  // trunk_group_list - computed: false, optional: true, required: false
  private _trunkGroupList = new InterfaceEthernetTrunkGroupListStructList(this, "trunk_group_list", false);
  public get trunkGroupList() {
    return this._trunkGroupList;
  }
  public putTrunkGroupList(value: InterfaceEthernetTrunkGroupListStruct[] | cdktf.IResolvable) {
    this._trunkGroupList.internalValue = value;
  }
  public resetTrunkGroupList() {
    this._trunkGroupList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkGroupListInput() {
    return this._trunkGroupList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      auto_neg_enable: cdktf.numberToTerraform(this._autoNegEnable),
      cpu_process: cdktf.numberToTerraform(this._cpuProcess),
      cpu_process_dir: cdktf.stringToTerraform(this._cpuProcessDir),
      duplexity: cdktf.stringToTerraform(this._duplexity),
      fec_forced_off: cdktf.numberToTerraform(this._fecForcedOff),
      fec_forced_on: cdktf.numberToTerraform(this._fecForcedOn),
      flow_control: cdktf.numberToTerraform(this._flowControl),
      gaming_protocol_compliance: cdktf.numberToTerraform(this._gamingProtocolCompliance),
      id: cdktf.stringToTerraform(this._id),
      ifnum: cdktf.numberToTerraform(this._ifnum),
      ipg_bit_time: cdktf.numberToTerraform(this._ipgBitTime),
      l3_vlan_fwd_disable: cdktf.numberToTerraform(this._l3VlanFwdDisable),
      load_interval: cdktf.numberToTerraform(this._loadInterval),
      mac_learning: cdktf.stringToTerraform(this._macLearning),
      media_type_copper: cdktf.numberToTerraform(this._mediaTypeCopper),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      packet_capture_template: cdktf.stringToTerraform(this._packetCaptureTemplate),
      ping_sweep_detection: cdktf.stringToTerraform(this._pingSweepDetection),
      port_breakout: cdktf.stringToTerraform(this._portBreakout),
      port_scan_detection: cdktf.stringToTerraform(this._portScanDetection),
      remove_vlan_tag: cdktf.numberToTerraform(this._removeVlanTag),
      speed: cdktf.stringToTerraform(this._speed),
      speed_forced_10g: cdktf.numberToTerraform(this._speedForced10G),
      speed_forced_1g: cdktf.numberToTerraform(this._speedForced1G),
      speed_forced_40g: cdktf.numberToTerraform(this._speedForced40G),
      traffic_distribution_mode: cdktf.stringToTerraform(this._trafficDistributionMode),
      trap_source: cdktf.numberToTerraform(this._trapSource),
      update_l2_info: cdktf.numberToTerraform(this._updateL2Info),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      virtual_wire: cdktf.numberToTerraform(this._virtualWire),
      vlan_learning: cdktf.stringToTerraform(this._vlanLearning),
      access_list: interfaceEthernetAccessListStructToTerraform(this._accessList.internalValue),
      bfd: interfaceEthernetBfdToTerraform(this._bfd.internalValue),
      ddos: interfaceEthernetDdosToTerraform(this._ddos.internalValue),
      icmp_rate_limit: interfaceEthernetIcmpRateLimitToTerraform(this._icmpRateLimit.internalValue),
      icmpv6_rate_limit: interfaceEthernetIcmpv6RateLimitToTerraform(this._icmpv6RateLimit.internalValue),
      ip: interfaceEthernetIpToTerraform(this._ip.internalValue),
      ipv6: interfaceEthernetIpv6ToTerraform(this._ipv6.internalValue),
      isis: interfaceEthernetIsisToTerraform(this._isis.internalValue),
      lldp: interfaceEthernetLldpToTerraform(this._lldp.internalValue),
      lw_4o6: interfaceEthernetLw4O6ToTerraform(this._lw4O6.internalValue),
      map: interfaceEthernetMapToTerraform(this._map.internalValue),
      monitor_list: cdktf.listMapper(interfaceEthernetMonitorListStructToTerraform, true)(this._monitorList.internalValue),
      nptv6: interfaceEthernetNptv6ToTerraform(this._nptv6.internalValue),
      sampling_enable: cdktf.listMapper(interfaceEthernetSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
      spanning_tree: interfaceEthernetSpanningTreeToTerraform(this._spanningTree.internalValue),
      trunk_group_list: cdktf.listMapper(interfaceEthernetTrunkGroupListStructToTerraform, true)(this._trunkGroupList.internalValue),
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
      auto_neg_enable: {
        value: cdktf.numberToHclTerraform(this._autoNegEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpu_process: {
        value: cdktf.numberToHclTerraform(this._cpuProcess),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpu_process_dir: {
        value: cdktf.stringToHclTerraform(this._cpuProcessDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      duplexity: {
        value: cdktf.stringToHclTerraform(this._duplexity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fec_forced_off: {
        value: cdktf.numberToHclTerraform(this._fecForcedOff),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fec_forced_on: {
        value: cdktf.numberToHclTerraform(this._fecForcedOn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      flow_control: {
        value: cdktf.numberToHclTerraform(this._flowControl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gaming_protocol_compliance: {
        value: cdktf.numberToHclTerraform(this._gamingProtocolCompliance),
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
      ifnum: {
        value: cdktf.numberToHclTerraform(this._ifnum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipg_bit_time: {
        value: cdktf.numberToHclTerraform(this._ipgBitTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l3_vlan_fwd_disable: {
        value: cdktf.numberToHclTerraform(this._l3VlanFwdDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      load_interval: {
        value: cdktf.numberToHclTerraform(this._loadInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mac_learning: {
        value: cdktf.stringToHclTerraform(this._macLearning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      media_type_copper: {
        value: cdktf.numberToHclTerraform(this._mediaTypeCopper),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
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
      packet_capture_template: {
        value: cdktf.stringToHclTerraform(this._packetCaptureTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ping_sweep_detection: {
        value: cdktf.stringToHclTerraform(this._pingSweepDetection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_breakout: {
        value: cdktf.stringToHclTerraform(this._portBreakout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_scan_detection: {
        value: cdktf.stringToHclTerraform(this._portScanDetection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remove_vlan_tag: {
        value: cdktf.numberToHclTerraform(this._removeVlanTag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      speed: {
        value: cdktf.stringToHclTerraform(this._speed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      speed_forced_10g: {
        value: cdktf.numberToHclTerraform(this._speedForced10G),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      speed_forced_1g: {
        value: cdktf.numberToHclTerraform(this._speedForced1G),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      speed_forced_40g: {
        value: cdktf.numberToHclTerraform(this._speedForced40G),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      traffic_distribution_mode: {
        value: cdktf.stringToHclTerraform(this._trafficDistributionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trap_source: {
        value: cdktf.numberToHclTerraform(this._trapSource),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      update_l2_info: {
        value: cdktf.numberToHclTerraform(this._updateL2Info),
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
      virtual_wire: {
        value: cdktf.numberToHclTerraform(this._virtualWire),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan_learning: {
        value: cdktf.stringToHclTerraform(this._vlanLearning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_list: {
        value: interfaceEthernetAccessListStructToHclTerraform(this._accessList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceEthernetAccessListStructList",
      },
      bfd: {
        value: interfaceEthernetBfdToHclTerraform(this._bfd.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceEthernetBfdList",
      },
      ddos: {
        value: interfaceEthernetDdosToHclTerraform(this._ddos.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceEthernetDdosList",
      },
      icmp_rate_limit: {
        value: interfaceEthernetIcmpRateLimitToHclTerraform(this._icmpRateLimit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceEthernetIcmpRateLimitList",
      },
      icmpv6_rate_limit: {
        value: interfaceEthernetIcmpv6RateLimitToHclTerraform(this._icmpv6RateLimit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceEthernetIcmpv6RateLimitList",
      },
      ip: {
        value: interfaceEthernetIpToHclTerraform(this._ip.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceEthernetIpList",
      },
      ipv6: {
        value: interfaceEthernetIpv6ToHclTerraform(this._ipv6.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceEthernetIpv6List",
      },
      isis: {
        value: interfaceEthernetIsisToHclTerraform(this._isis.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceEthernetIsisList",
      },
      lldp: {
        value: interfaceEthernetLldpToHclTerraform(this._lldp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceEthernetLldpList",
      },
      lw_4o6: {
        value: interfaceEthernetLw4O6ToHclTerraform(this._lw4O6.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceEthernetLw4O6List",
      },
      map: {
        value: interfaceEthernetMapToHclTerraform(this._map.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceEthernetMapList",
      },
      monitor_list: {
        value: cdktf.listMapperHcl(interfaceEthernetMonitorListStructToHclTerraform, true)(this._monitorList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceEthernetMonitorListStructList",
      },
      nptv6: {
        value: interfaceEthernetNptv6ToHclTerraform(this._nptv6.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceEthernetNptv6List",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(interfaceEthernetSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceEthernetSamplingEnableList",
      },
      spanning_tree: {
        value: interfaceEthernetSpanningTreeToHclTerraform(this._spanningTree.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceEthernetSpanningTreeList",
      },
      trunk_group_list: {
        value: cdktf.listMapperHcl(interfaceEthernetTrunkGroupListStructToHclTerraform, true)(this._trunkGroupList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceEthernetTrunkGroupListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
