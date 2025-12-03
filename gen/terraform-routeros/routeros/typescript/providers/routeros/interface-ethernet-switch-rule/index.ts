// https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceEthernetSwitchRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_rule#___path___ InterfaceEthernetSwitchRule#___path___}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_rule#comment InterfaceEthernetSwitchRule#comment}
  */
  readonly comment?: string;
  /**
  * Whether to send a frame copy to switch CPU port from a frame with matching MAC destination address (matching destination or source address for CRS3xx series switches).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_rule#copy_to_cpu InterfaceEthernetSwitchRule#copy_to_cpu}
  */
  readonly copyToCpu?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_rule#disabled InterfaceEthernetSwitchRule#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Matching DSCP field of the packet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_rule#dscp InterfaceEthernetSwitchRule#dscp}
  */
  readonly dscp?: number;
  /**
  * Matching destination IP address and mask.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_rule#dst_address InterfaceEthernetSwitchRule#dst_address}
  */
  readonly dstAddress?: string;
  /**
  * Matching destination IPv6 address and mask.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_rule#dst_address6 InterfaceEthernetSwitchRule#dst_address6}
  */
  readonly dstAddress6?: string;
  /**
  * Matching destination MAC address and mask.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_rule#dst_mac_address InterfaceEthernetSwitchRule#dst_mac_address}
  */
  readonly dstMacAddress?: string;
  /**
  * Matching destination protocol port number or range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_rule#dst_port InterfaceEthernetSwitchRule#dst_port}
  */
  readonly dstPort?: number;
  /**
  * Matching IPv6 flow label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_rule#flow_label InterfaceEthernetSwitchRule#flow_label}
  */
  readonly flowLabel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_rule#id InterfaceEthernetSwitchRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Matching particular MAC protocol specified by protocol name or number (skips VLAN tags if any).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_rule#mac_protocol InterfaceEthernetSwitchRule#mac_protocol}
  */
  readonly macProtocol?: string;
  /**
  * Whether to send a frame copy to mirror-target port from a frame with matching MAC destination address (matching destination or source address for CRS3xx series switches).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_rule#mirror InterfaceEthernetSwitchRule#mirror}
  */
  readonly mirror?: boolean | cdktf.IResolvable;
  /**
  * Selects multiple mirroring target ports, only available on 88E6393X switch chip. Matched packets in the ACL rule will be copied and sent to selected ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_rule#mirror_ports InterfaceEthernetSwitchRule#mirror_ports}
  */
  readonly mirrorPorts?: string[];
  /**
  * Changes the destination port as specified, multiple ports allowed, including a switch CPU port. An empty setting will drop the packet. When the parameter is not used, the packet will be accepted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_rule#new_dst_ports InterfaceEthernetSwitchRule#new_dst_ports}
  */
  readonly newDstPorts?: string[];
  /**
  * Changes the VLAN ID to the specified value or adds a new VLAN tag if one was not already present (the property only applies to the Atheros8316, and 88E6393X switch chips).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_rule#new_vlan_id InterfaceEthernetSwitchRule#new_vlan_id}
  */
  readonly newVlanId?: number;
  /**
  * Changes the VLAN priority field (priority code point, the property only applies to Atheros8327, QCA8337 and Atheros8316 switch chips).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_rule#new_vlan_priority InterfaceEthernetSwitchRule#new_vlan_priority}
  */
  readonly newVlanPriority?: number;
  /**
  * Name of the interface on which the rule will apply on the received traffic, multiple ports are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_rule#ports InterfaceEthernetSwitchRule#ports}
  */
  readonly ports: string[];
  /**
  * Matching particular IP protocol specified by protocol name or number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_rule#protocol InterfaceEthernetSwitchRule#protocol}
  */
  readonly protocol?: string;
  /**
  * Sets ingress traffic limitation (bits per second) for matched traffic, can only be applied to the first 32 rule slots (the property only applies to Atheros8327/QCA8337 switch chips).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_rule#rate InterfaceEthernetSwitchRule#rate}
  */
  readonly rate?: number;
  /**
  * Changes the destination port of a matching packet to the switch CPU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_rule#redirect_to_cpu InterfaceEthernetSwitchRule#redirect_to_cpu}
  */
  readonly redirectToCpu?: boolean | cdktf.IResolvable;
  /**
  * Matching source IP address and mask.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_rule#src_address InterfaceEthernetSwitchRule#src_address}
  */
  readonly srcAddress?: string;
  /**
  * Matching source IPv6 address and mask.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_rule#src_address6 InterfaceEthernetSwitchRule#src_address6}
  */
  readonly srcAddress6?: string;
  /**
  * Matching source MAC address and mask.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_rule#src_mac_address InterfaceEthernetSwitchRule#src_mac_address}
  */
  readonly srcMacAddress?: string;
  /**
  * Matching source protocol port number or range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_rule#src_port InterfaceEthernetSwitchRule#src_port}
  */
  readonly srcPort?: number;
  /**
  * Matching switch group on which will the rule apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_rule#switch InterfaceEthernetSwitchRule#switch}
  */
  readonly switch: string;
  /**
  * Matching IPv6 traffic class.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_rule#traffic_class InterfaceEthernetSwitchRule#traffic_class}
  */
  readonly trafficClass?: number;
  /**
  * Matching VLAN header, whether the VLAN header is present or not (the property only applies to the Atheros8316, Atheros8327, QCA8337, 88E6393X switch chips).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_rule#vlan_header InterfaceEthernetSwitchRule#vlan_header}
  */
  readonly vlanHeader?: string;
  /**
  * Matching VLAN ID (the property only applies to the Atheros8316, Atheros8327, QCA8337, 88E6393X switch chips).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_rule#vlan_id InterfaceEthernetSwitchRule#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * Matching VLAN priority (priority code point).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_rule#vlan_priority InterfaceEthernetSwitchRule#vlan_priority}
  */
  readonly vlanPriority?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_rule routeros_interface_ethernet_switch_rule}
*/
export class InterfaceEthernetSwitchRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_interface_ethernet_switch_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceEthernetSwitchRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceEthernetSwitchRule to import
  * @param importFromId The id of the existing InterfaceEthernetSwitchRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceEthernetSwitchRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_interface_ethernet_switch_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_rule routeros_interface_ethernet_switch_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceEthernetSwitchRuleConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceEthernetSwitchRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_interface_ethernet_switch_rule',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.96.0',
        providerVersionConstraint: '1.96.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._comment = config.comment;
    this._copyToCpu = config.copyToCpu;
    this._disabled = config.disabled;
    this._dscp = config.dscp;
    this._dstAddress = config.dstAddress;
    this._dstAddress6 = config.dstAddress6;
    this._dstMacAddress = config.dstMacAddress;
    this._dstPort = config.dstPort;
    this._flowLabel = config.flowLabel;
    this._id = config.id;
    this._macProtocol = config.macProtocol;
    this._mirror = config.mirror;
    this._mirrorPorts = config.mirrorPorts;
    this._newDstPorts = config.newDstPorts;
    this._newVlanId = config.newVlanId;
    this._newVlanPriority = config.newVlanPriority;
    this._ports = config.ports;
    this._protocol = config.protocol;
    this._rate = config.rate;
    this._redirectToCpu = config.redirectToCpu;
    this._srcAddress = config.srcAddress;
    this._srcAddress6 = config.srcAddress6;
    this._srcMacAddress = config.srcMacAddress;
    this._srcPort = config.srcPort;
    this._switch = config.switch;
    this._trafficClass = config.trafficClass;
    this._vlanHeader = config.vlanHeader;
    this._vlanId = config.vlanId;
    this._vlanPriority = config.vlanPriority;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // copy_to_cpu - computed: false, optional: true, required: false
  private _copyToCpu?: boolean | cdktf.IResolvable; 
  public get copyToCpu() {
    return this.getBooleanAttribute('copy_to_cpu');
  }
  public set copyToCpu(value: boolean | cdktf.IResolvable) {
    this._copyToCpu = value;
  }
  public resetCopyToCpu() {
    this._copyToCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyToCpuInput() {
    return this._copyToCpu;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // dscp - computed: false, optional: true, required: false
  private _dscp?: number; 
  public get dscp() {
    return this.getNumberAttribute('dscp');
  }
  public set dscp(value: number) {
    this._dscp = value;
  }
  public resetDscp() {
    this._dscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpInput() {
    return this._dscp;
  }

  // dst_address - computed: false, optional: true, required: false
  private _dstAddress?: string; 
  public get dstAddress() {
    return this.getStringAttribute('dst_address');
  }
  public set dstAddress(value: string) {
    this._dstAddress = value;
  }
  public resetDstAddress() {
    this._dstAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAddressInput() {
    return this._dstAddress;
  }

  // dst_address6 - computed: false, optional: true, required: false
  private _dstAddress6?: string; 
  public get dstAddress6() {
    return this.getStringAttribute('dst_address6');
  }
  public set dstAddress6(value: string) {
    this._dstAddress6 = value;
  }
  public resetDstAddress6() {
    this._dstAddress6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAddress6Input() {
    return this._dstAddress6;
  }

  // dst_mac_address - computed: false, optional: true, required: false
  private _dstMacAddress?: string; 
  public get dstMacAddress() {
    return this.getStringAttribute('dst_mac_address');
  }
  public set dstMacAddress(value: string) {
    this._dstMacAddress = value;
  }
  public resetDstMacAddress() {
    this._dstMacAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstMacAddressInput() {
    return this._dstMacAddress;
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

  // dynamic - computed: true, optional: false, required: false
  public get dynamic() {
    return this.getBooleanAttribute('dynamic');
  }

  // flow_label - computed: false, optional: true, required: false
  private _flowLabel?: number; 
  public get flowLabel() {
    return this.getNumberAttribute('flow_label');
  }
  public set flowLabel(value: number) {
    this._flowLabel = value;
  }
  public resetFlowLabel() {
    this._flowLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowLabelInput() {
    return this._flowLabel;
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

  // invalid - computed: true, optional: false, required: false
  public get invalid() {
    return this.getBooleanAttribute('invalid');
  }

  // mac_protocol - computed: false, optional: true, required: false
  private _macProtocol?: string; 
  public get macProtocol() {
    return this.getStringAttribute('mac_protocol');
  }
  public set macProtocol(value: string) {
    this._macProtocol = value;
  }
  public resetMacProtocol() {
    this._macProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macProtocolInput() {
    return this._macProtocol;
  }

  // mirror - computed: false, optional: true, required: false
  private _mirror?: boolean | cdktf.IResolvable; 
  public get mirror() {
    return this.getBooleanAttribute('mirror');
  }
  public set mirror(value: boolean | cdktf.IResolvable) {
    this._mirror = value;
  }
  public resetMirror() {
    this._mirror = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorInput() {
    return this._mirror;
  }

  // mirror_ports - computed: false, optional: true, required: false
  private _mirrorPorts?: string[]; 
  public get mirrorPorts() {
    return cdktf.Fn.tolist(this.getListAttribute('mirror_ports'));
  }
  public set mirrorPorts(value: string[]) {
    this._mirrorPorts = value;
  }
  public resetMirrorPorts() {
    this._mirrorPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorPortsInput() {
    return this._mirrorPorts;
  }

  // new_dst_ports - computed: false, optional: true, required: false
  private _newDstPorts?: string[]; 
  public get newDstPorts() {
    return cdktf.Fn.tolist(this.getListAttribute('new_dst_ports'));
  }
  public set newDstPorts(value: string[]) {
    this._newDstPorts = value;
  }
  public resetNewDstPorts() {
    this._newDstPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newDstPortsInput() {
    return this._newDstPorts;
  }

  // new_vlan_id - computed: false, optional: true, required: false
  private _newVlanId?: number; 
  public get newVlanId() {
    return this.getNumberAttribute('new_vlan_id');
  }
  public set newVlanId(value: number) {
    this._newVlanId = value;
  }
  public resetNewVlanId() {
    this._newVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newVlanIdInput() {
    return this._newVlanId;
  }

  // new_vlan_priority - computed: false, optional: true, required: false
  private _newVlanPriority?: number; 
  public get newVlanPriority() {
    return this.getNumberAttribute('new_vlan_priority');
  }
  public set newVlanPriority(value: number) {
    this._newVlanPriority = value;
  }
  public resetNewVlanPriority() {
    this._newVlanPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newVlanPriorityInput() {
    return this._newVlanPriority;
  }

  // ports - computed: false, optional: false, required: true
  private _ports?: string[]; 
  public get ports() {
    return this.getListAttribute('ports');
  }
  public set ports(value: string[]) {
    this._ports = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
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

  // rate - computed: false, optional: true, required: false
  private _rate?: number; 
  public get rate() {
    return this.getNumberAttribute('rate');
  }
  public set rate(value: number) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }

  // redirect_to_cpu - computed: false, optional: true, required: false
  private _redirectToCpu?: boolean | cdktf.IResolvable; 
  public get redirectToCpu() {
    return this.getBooleanAttribute('redirect_to_cpu');
  }
  public set redirectToCpu(value: boolean | cdktf.IResolvable) {
    this._redirectToCpu = value;
  }
  public resetRedirectToCpu() {
    this._redirectToCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectToCpuInput() {
    return this._redirectToCpu;
  }

  // src_address - computed: false, optional: true, required: false
  private _srcAddress?: string; 
  public get srcAddress() {
    return this.getStringAttribute('src_address');
  }
  public set srcAddress(value: string) {
    this._srcAddress = value;
  }
  public resetSrcAddress() {
    this._srcAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAddressInput() {
    return this._srcAddress;
  }

  // src_address6 - computed: false, optional: true, required: false
  private _srcAddress6?: string; 
  public get srcAddress6() {
    return this.getStringAttribute('src_address6');
  }
  public set srcAddress6(value: string) {
    this._srcAddress6 = value;
  }
  public resetSrcAddress6() {
    this._srcAddress6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAddress6Input() {
    return this._srcAddress6;
  }

  // src_mac_address - computed: false, optional: true, required: false
  private _srcMacAddress?: string; 
  public get srcMacAddress() {
    return this.getStringAttribute('src_mac_address');
  }
  public set srcMacAddress(value: string) {
    this._srcMacAddress = value;
  }
  public resetSrcMacAddress() {
    this._srcMacAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcMacAddressInput() {
    return this._srcMacAddress;
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

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }

  // traffic_class - computed: false, optional: true, required: false
  private _trafficClass?: number; 
  public get trafficClass() {
    return this.getNumberAttribute('traffic_class');
  }
  public set trafficClass(value: number) {
    this._trafficClass = value;
  }
  public resetTrafficClass() {
    this._trafficClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficClassInput() {
    return this._trafficClass;
  }

  // vlan_header - computed: false, optional: true, required: false
  private _vlanHeader?: string; 
  public get vlanHeader() {
    return this.getStringAttribute('vlan_header');
  }
  public set vlanHeader(value: string) {
    this._vlanHeader = value;
  }
  public resetVlanHeader() {
    this._vlanHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanHeaderInput() {
    return this._vlanHeader;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // vlan_priority - computed: false, optional: true, required: false
  private _vlanPriority?: number; 
  public get vlanPriority() {
    return this.getNumberAttribute('vlan_priority');
  }
  public set vlanPriority(value: number) {
    this._vlanPriority = value;
  }
  public resetVlanPriority() {
    this._vlanPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanPriorityInput() {
    return this._vlanPriority;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      comment: cdktf.stringToTerraform(this._comment),
      copy_to_cpu: cdktf.booleanToTerraform(this._copyToCpu),
      disabled: cdktf.booleanToTerraform(this._disabled),
      dscp: cdktf.numberToTerraform(this._dscp),
      dst_address: cdktf.stringToTerraform(this._dstAddress),
      dst_address6: cdktf.stringToTerraform(this._dstAddress6),
      dst_mac_address: cdktf.stringToTerraform(this._dstMacAddress),
      dst_port: cdktf.numberToTerraform(this._dstPort),
      flow_label: cdktf.numberToTerraform(this._flowLabel),
      id: cdktf.stringToTerraform(this._id),
      mac_protocol: cdktf.stringToTerraform(this._macProtocol),
      mirror: cdktf.booleanToTerraform(this._mirror),
      mirror_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mirrorPorts),
      new_dst_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._newDstPorts),
      new_vlan_id: cdktf.numberToTerraform(this._newVlanId),
      new_vlan_priority: cdktf.numberToTerraform(this._newVlanPriority),
      ports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ports),
      protocol: cdktf.stringToTerraform(this._protocol),
      rate: cdktf.numberToTerraform(this._rate),
      redirect_to_cpu: cdktf.booleanToTerraform(this._redirectToCpu),
      src_address: cdktf.stringToTerraform(this._srcAddress),
      src_address6: cdktf.stringToTerraform(this._srcAddress6),
      src_mac_address: cdktf.stringToTerraform(this._srcMacAddress),
      src_port: cdktf.numberToTerraform(this._srcPort),
      switch: cdktf.stringToTerraform(this._switch),
      traffic_class: cdktf.numberToTerraform(this._trafficClass),
      vlan_header: cdktf.stringToTerraform(this._vlanHeader),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
      vlan_priority: cdktf.numberToTerraform(this._vlanPriority),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      copy_to_cpu: {
        value: cdktf.booleanToHclTerraform(this._copyToCpu),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dscp: {
        value: cdktf.numberToHclTerraform(this._dscp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dst_address: {
        value: cdktf.stringToHclTerraform(this._dstAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_address6: {
        value: cdktf.stringToHclTerraform(this._dstAddress6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_mac_address: {
        value: cdktf.stringToHclTerraform(this._dstMacAddress),
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
      flow_label: {
        value: cdktf.numberToHclTerraform(this._flowLabel),
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
      mac_protocol: {
        value: cdktf.stringToHclTerraform(this._macProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mirror: {
        value: cdktf.booleanToHclTerraform(this._mirror),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mirror_ports: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mirrorPorts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      new_dst_ports: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._newDstPorts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      new_vlan_id: {
        value: cdktf.numberToHclTerraform(this._newVlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      new_vlan_priority: {
        value: cdktf.numberToHclTerraform(this._newVlanPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ports: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ports),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate: {
        value: cdktf.numberToHclTerraform(this._rate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      redirect_to_cpu: {
        value: cdktf.booleanToHclTerraform(this._redirectToCpu),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      src_address: {
        value: cdktf.stringToHclTerraform(this._srcAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_address6: {
        value: cdktf.stringToHclTerraform(this._srcAddress6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_mac_address: {
        value: cdktf.stringToHclTerraform(this._srcMacAddress),
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
      switch: {
        value: cdktf.stringToHclTerraform(this._switch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_class: {
        value: cdktf.numberToHclTerraform(this._trafficClass),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan_header: {
        value: cdktf.stringToHclTerraform(this._vlanHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_id: {
        value: cdktf.numberToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan_priority: {
        value: cdktf.numberToHclTerraform(this._vlanPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
