// https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceEthernetSwitchCrsConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs#___path___ InterfaceEthernetSwitchCrs#___path___}
  */
  readonly path?: string;
  /**
  * The bridge type defines which VLAN tag is used as Lookup-VID. Lookup-VID serves as the VLAN key for all VLAN-based lookups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs#bridge_type InterfaceEthernetSwitchCrs#bridge_type}
  */
  readonly bridgeType?: string;
  /**
  * Protocols that are excluded from Ingress Port Policing. (arp, dhcpv4, dhcpv6, eapol, igmp, mld, nd, pppoe-discovery, ripv1).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs#bypass_ingress_port_policing_for InterfaceEthernetSwitchCrs#bypass_ingress_port_policing_for}
  */
  readonly bypassIngressPortPolicingFor?: string[];
  /**
  * Protocols that are excluded from Policy rule security check. (arp, dhcpv4, dhcpv6, eapol, igmp, mld, nd, pppoe-discovery, ripv1).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs#bypass_l2_security_check_filter_for InterfaceEthernetSwitchCrs#bypass_l2_security_check_filter_for}
  */
  readonly bypassL2SecurityCheckFilterFor?: string[];
  /**
  * Protocols that are excluded from Ingress VLAN filtering. These protocols are not dropped if they have invalid VLAN. (arp, dhcpv4, dhcpv6,eapol, igmp, mld, nd, pppoe-discovery, ripv1).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs#bypass_vlan_ingress_filter_for InterfaceEthernetSwitchCrs#bypass_vlan_ingress_filter_for}
  */
  readonly bypassVlanIngressFilterFor?: string[];
  /**
  * Ports that drop invalid and other port VLAN ID frames.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs#drop_if_invalid_or_src_port_not_member_of_vlan_on_ports InterfaceEthernetSwitchCrs#drop_if_invalid_or_src_port_not_member_of_vlan_on_ports}
  */
  readonly dropIfInvalidOrSrcPortNotMemberOfVlanOnPorts?: string[];
  /**
  * Ports which drop frames if no MAC-based, Protocol-based VLAN assignment or Ingress VLAN Translation is applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs#drop_if_no_vlan_assignment_on_ports InterfaceEthernetSwitchCrs#drop_if_no_vlan_assignment_on_ports}
  */
  readonly dropIfNoVlanAssignmentOnPorts?: string[];
  /**
  * The first egress mirroring analyzer port or trunk and mirroring format:analyzer-configured - The packet is the same as the packet to the destination. VLAN format is modified based on the VLAN configurations of the analyzer port.modified - The packet is the same as the packet to the destination. VLAN format is modified based on the VLAN configurations of the egress port.original - Traffic is mirrored without any change to the original incoming packet format. But the service VLAN tag is stripped in the edge port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs#egress_mirror0 InterfaceEthernetSwitchCrs#egress_mirror0}
  */
  readonly egressMirror0?: string[];
  /**
  * The second egress mirroring analyzer port or trunk and mirroring format:analyzer-configured - The packet is the same as the packet to the destination. VLAN format is modified based on the VLAN configurations of the analyzer port.modified - The packet is the same as the packet to the destination. VLAN format is modified based on the VLAN configurations of the egress port.original - Traffic is mirrored without any change to the original incoming packet format. But the service VLAN tag is stripped in the edge port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs#egress_mirror1 InterfaceEthernetSwitchCrs#egress_mirror1}
  */
  readonly egressMirror1?: string[];
  /**
  * Proportion of egress mirrored packets compared to all packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs#egress_mirror_ratio InterfaceEthernetSwitchCrs#egress_mirror_ratio}
  */
  readonly egressMirrorRatio?: string;
  /**
  * Analyzer port used for FDB-based mirroring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs#fdb_uses InterfaceEthernetSwitchCrs#fdb_uses}
  */
  readonly fdbUses?: string;
  /**
  * Whether to allow forwarding VLANs that are not members of the VLAN table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs#forward_unknown_vlan InterfaceEthernetSwitchCrs#forward_unknown_vlan}
  */
  readonly forwardUnknownVlan?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs#id InterfaceEthernetSwitchCrs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The first ingress mirroring analyzer port or trunk and mirroring format:analyzer-configured - The packet is the same as the packet to the destination. VLAN format is modified based on the VLAN configurations of the analyzer port.modified - The packet is the same as the packet to the destination. VLAN format is modified based on the VLAN configurations of the egress port.original - Traffic is mirrored without any change to the original incoming packet format. But the service VLAN tag is stripped in the edge port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs#ingress_mirror0 InterfaceEthernetSwitchCrs#ingress_mirror0}
  */
  readonly ingressMirror0?: string[];
  /**
  * The second ingress mirroring analyzer port or trunk and mirroring format:analyzer-configured - The packet is the same as the packet to the destination. VLAN format is modified based on the VLAN configurations of the analyzer port.modified - The packet is the same as the packet to the destination. VLAN format is modified based on the VLAN configurations of the egress port.original - Traffic is mirrored without any change to the original incoming packet format. But the service VLAN tag is stripped in the edge port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs#ingress_mirror1 InterfaceEthernetSwitchCrs#ingress_mirror1}
  */
  readonly ingressMirror1?: string[];
  /**
  * The proportion of ingress mirrored packets compared to all packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs#ingress_mirror_ratio InterfaceEthernetSwitchCrs#ingress_mirror_ratio}
  */
  readonly ingressMirrorRatio?: string;
  /**
  * Globally enables or disables MAC level isolation. Once enabled, the switch will check the source and destination MAC address entries and their isolation-profile from the unicast forwarding table. By default, the switch will learn MAC addresses and place them into a promiscuous isolation profile. Other isolation profiles can be used when creating static unicast entries. If the source or destination MAC address is located on a promiscuous isolation profile, the packet is forwarded. If both source and destination MAC addresses are located on the same community1 or community2 isolation profile, the packet is forwarded. The packet is dropped when the source and destination MAC address isolation profile is isolated, or when the source and destination MAC address isolation profiles are from different communities (e.g. source MAC address is community1 and destination MAC address is community2). When MAC level isolation is globally disabled, the isolation is bypassed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs#mac_level_isolation InterfaceEthernetSwitchCrs#mac_level_isolation}
  */
  readonly macLevelIsolation?: boolean | cdktf.IResolvable;
  /**
  * When a packet is applied to both ingress and egress mirroring, only ingress mirroring is performed on the packet, if this setting is disabled. If this setting is enabled both mirroring types are applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs#mirror_egress_if_ingress_mirrored InterfaceEthernetSwitchCrs#mirror_egress_if_ingress_mirrored}
  */
  readonly mirrorEgressIfIngressMirrored?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs#mirror_tx_on_mirror_port InterfaceEthernetSwitchCrs#mirror_tx_on_mirror_port}
  */
  readonly mirrorTxOnMirrorPort?: boolean | cdktf.IResolvable;
  /**
  * Remarked drop precedence in mirrored packets. This QoS attribute is used for mirrored packet enqueuing or dropping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs#mirrored_packet_drop_precedence InterfaceEthernetSwitchCrs#mirrored_packet_drop_precedence}
  */
  readonly mirroredPacketDropPrecedence?: string;
  /**
  * Remarked priority in mirrored packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs#mirrored_packet_qos_priority InterfaceEthernetSwitchCrs#mirrored_packet_qos_priority}
  */
  readonly mirroredPacketQosPriority?: number;
  /**
  * Lookup mode for IPv4 multicast bridging.dst-mac-and-vid-always - For all packet types lookup key is the destination MAC and VLAN ID.dst-ip-and-vid-for-ipv4 - For IPv4 packets lookup key is the destination IP and VLAN ID. For other packet types, the lookup key is the destination MAC and VLAN ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs#multicast_lookup_mode InterfaceEthernetSwitchCrs#multicast_lookup_mode}
  */
  readonly multicastLookupMode?: string;
  /**
  * Name of the switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs#name InterfaceEthernetSwitchCrs#name}
  */
  readonly name: string;
  /**
  * Enable or disable to override existing entry which has the lowest aging value when UFDB is full.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs#override_existing_when_ufdb_full InterfaceEthernetSwitchCrs#override_existing_when_ufdb_full}
  */
  readonly overrideExistingWhenUfdbFull?: boolean | cdktf.IResolvable;
  /**
  * Timeout for Unicast FDB entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs#unicast_fdb_timeout InterfaceEthernetSwitchCrs#unicast_fdb_timeout}
  */
  readonly unicastFdbTimeout?: string;
  /**
  * Lookup and learning mode for packets with invalid VLAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs#unknown_vlan_lookup_mode InterfaceEthernetSwitchCrs#unknown_vlan_lookup_mode}
  */
  readonly unknownVlanLookupMode?: string;
  /**
  * Whether to use customer VLAN ID for 1:1 VLAN switching lookup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs#use_cvid_in_one2one_vlan_lookup InterfaceEthernetSwitchCrs#use_cvid_in_one2one_vlan_lookup}
  */
  readonly useCvidInOne2OneVlanLookup?: boolean | cdktf.IResolvable;
  /**
  * Whether to use service VLAN ID for 1:1 VLAN switching lookup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs#use_svid_in_one2one_vlan_lookup InterfaceEthernetSwitchCrs#use_svid_in_one2one_vlan_lookup}
  */
  readonly useSvidInOne2OneVlanLookup?: boolean | cdktf.IResolvable;
  /**
  * Analyzer port used for VLAN-based mirroring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs#vlan_uses InterfaceEthernetSwitchCrs#vlan_uses}
  */
  readonly vlanUses?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs routeros_interface_ethernet_switch_crs}
*/
export class InterfaceEthernetSwitchCrs extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_interface_ethernet_switch_crs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceEthernetSwitchCrs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceEthernetSwitchCrs to import
  * @param importFromId The id of the existing InterfaceEthernetSwitchCrs that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceEthernetSwitchCrs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_interface_ethernet_switch_crs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet_switch_crs routeros_interface_ethernet_switch_crs} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceEthernetSwitchCrsConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceEthernetSwitchCrsConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_interface_ethernet_switch_crs',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.95.0',
        providerVersionConstraint: '1.95.0'
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
    this._bridgeType = config.bridgeType;
    this._bypassIngressPortPolicingFor = config.bypassIngressPortPolicingFor;
    this._bypassL2SecurityCheckFilterFor = config.bypassL2SecurityCheckFilterFor;
    this._bypassVlanIngressFilterFor = config.bypassVlanIngressFilterFor;
    this._dropIfInvalidOrSrcPortNotMemberOfVlanOnPorts = config.dropIfInvalidOrSrcPortNotMemberOfVlanOnPorts;
    this._dropIfNoVlanAssignmentOnPorts = config.dropIfNoVlanAssignmentOnPorts;
    this._egressMirror0 = config.egressMirror0;
    this._egressMirror1 = config.egressMirror1;
    this._egressMirrorRatio = config.egressMirrorRatio;
    this._fdbUses = config.fdbUses;
    this._forwardUnknownVlan = config.forwardUnknownVlan;
    this._id = config.id;
    this._ingressMirror0 = config.ingressMirror0;
    this._ingressMirror1 = config.ingressMirror1;
    this._ingressMirrorRatio = config.ingressMirrorRatio;
    this._macLevelIsolation = config.macLevelIsolation;
    this._mirrorEgressIfIngressMirrored = config.mirrorEgressIfIngressMirrored;
    this._mirrorTxOnMirrorPort = config.mirrorTxOnMirrorPort;
    this._mirroredPacketDropPrecedence = config.mirroredPacketDropPrecedence;
    this._mirroredPacketQosPriority = config.mirroredPacketQosPriority;
    this._multicastLookupMode = config.multicastLookupMode;
    this._name = config.name;
    this._overrideExistingWhenUfdbFull = config.overrideExistingWhenUfdbFull;
    this._unicastFdbTimeout = config.unicastFdbTimeout;
    this._unknownVlanLookupMode = config.unknownVlanLookupMode;
    this._useCvidInOne2OneVlanLookup = config.useCvidInOne2OneVlanLookup;
    this._useSvidInOne2OneVlanLookup = config.useSvidInOne2OneVlanLookup;
    this._vlanUses = config.vlanUses;
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

  // bridge_type - computed: false, optional: true, required: false
  private _bridgeType?: string; 
  public get bridgeType() {
    return this.getStringAttribute('bridge_type');
  }
  public set bridgeType(value: string) {
    this._bridgeType = value;
  }
  public resetBridgeType() {
    this._bridgeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeTypeInput() {
    return this._bridgeType;
  }

  // bypass_ingress_port_policing_for - computed: false, optional: true, required: false
  private _bypassIngressPortPolicingFor?: string[]; 
  public get bypassIngressPortPolicingFor() {
    return cdktf.Fn.tolist(this.getListAttribute('bypass_ingress_port_policing_for'));
  }
  public set bypassIngressPortPolicingFor(value: string[]) {
    this._bypassIngressPortPolicingFor = value;
  }
  public resetBypassIngressPortPolicingFor() {
    this._bypassIngressPortPolicingFor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassIngressPortPolicingForInput() {
    return this._bypassIngressPortPolicingFor;
  }

  // bypass_l2_security_check_filter_for - computed: false, optional: true, required: false
  private _bypassL2SecurityCheckFilterFor?: string[]; 
  public get bypassL2SecurityCheckFilterFor() {
    return cdktf.Fn.tolist(this.getListAttribute('bypass_l2_security_check_filter_for'));
  }
  public set bypassL2SecurityCheckFilterFor(value: string[]) {
    this._bypassL2SecurityCheckFilterFor = value;
  }
  public resetBypassL2SecurityCheckFilterFor() {
    this._bypassL2SecurityCheckFilterFor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassL2SecurityCheckFilterForInput() {
    return this._bypassL2SecurityCheckFilterFor;
  }

  // bypass_vlan_ingress_filter_for - computed: false, optional: true, required: false
  private _bypassVlanIngressFilterFor?: string[]; 
  public get bypassVlanIngressFilterFor() {
    return cdktf.Fn.tolist(this.getListAttribute('bypass_vlan_ingress_filter_for'));
  }
  public set bypassVlanIngressFilterFor(value: string[]) {
    this._bypassVlanIngressFilterFor = value;
  }
  public resetBypassVlanIngressFilterFor() {
    this._bypassVlanIngressFilterFor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassVlanIngressFilterForInput() {
    return this._bypassVlanIngressFilterFor;
  }

  // drop_if_invalid_or_src_port_not_member_of_vlan_on_ports - computed: false, optional: true, required: false
  private _dropIfInvalidOrSrcPortNotMemberOfVlanOnPorts?: string[]; 
  public get dropIfInvalidOrSrcPortNotMemberOfVlanOnPorts() {
    return cdktf.Fn.tolist(this.getListAttribute('drop_if_invalid_or_src_port_not_member_of_vlan_on_ports'));
  }
  public set dropIfInvalidOrSrcPortNotMemberOfVlanOnPorts(value: string[]) {
    this._dropIfInvalidOrSrcPortNotMemberOfVlanOnPorts = value;
  }
  public resetDropIfInvalidOrSrcPortNotMemberOfVlanOnPorts() {
    this._dropIfInvalidOrSrcPortNotMemberOfVlanOnPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropIfInvalidOrSrcPortNotMemberOfVlanOnPortsInput() {
    return this._dropIfInvalidOrSrcPortNotMemberOfVlanOnPorts;
  }

  // drop_if_no_vlan_assignment_on_ports - computed: false, optional: true, required: false
  private _dropIfNoVlanAssignmentOnPorts?: string[]; 
  public get dropIfNoVlanAssignmentOnPorts() {
    return cdktf.Fn.tolist(this.getListAttribute('drop_if_no_vlan_assignment_on_ports'));
  }
  public set dropIfNoVlanAssignmentOnPorts(value: string[]) {
    this._dropIfNoVlanAssignmentOnPorts = value;
  }
  public resetDropIfNoVlanAssignmentOnPorts() {
    this._dropIfNoVlanAssignmentOnPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropIfNoVlanAssignmentOnPortsInput() {
    return this._dropIfNoVlanAssignmentOnPorts;
  }

  // egress_mirror0 - computed: false, optional: true, required: false
  private _egressMirror0?: string[]; 
  public get egressMirror0() {
    return cdktf.Fn.tolist(this.getListAttribute('egress_mirror0'));
  }
  public set egressMirror0(value: string[]) {
    this._egressMirror0 = value;
  }
  public resetEgressMirror0() {
    this._egressMirror0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressMirror0Input() {
    return this._egressMirror0;
  }

  // egress_mirror1 - computed: false, optional: true, required: false
  private _egressMirror1?: string[]; 
  public get egressMirror1() {
    return cdktf.Fn.tolist(this.getListAttribute('egress_mirror1'));
  }
  public set egressMirror1(value: string[]) {
    this._egressMirror1 = value;
  }
  public resetEgressMirror1() {
    this._egressMirror1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressMirror1Input() {
    return this._egressMirror1;
  }

  // egress_mirror_ratio - computed: false, optional: true, required: false
  private _egressMirrorRatio?: string; 
  public get egressMirrorRatio() {
    return this.getStringAttribute('egress_mirror_ratio');
  }
  public set egressMirrorRatio(value: string) {
    this._egressMirrorRatio = value;
  }
  public resetEgressMirrorRatio() {
    this._egressMirrorRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressMirrorRatioInput() {
    return this._egressMirrorRatio;
  }

  // fdb_uses - computed: false, optional: true, required: false
  private _fdbUses?: string; 
  public get fdbUses() {
    return this.getStringAttribute('fdb_uses');
  }
  public set fdbUses(value: string) {
    this._fdbUses = value;
  }
  public resetFdbUses() {
    this._fdbUses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fdbUsesInput() {
    return this._fdbUses;
  }

  // forward_unknown_vlan - computed: false, optional: true, required: false
  private _forwardUnknownVlan?: boolean | cdktf.IResolvable; 
  public get forwardUnknownVlan() {
    return this.getBooleanAttribute('forward_unknown_vlan');
  }
  public set forwardUnknownVlan(value: boolean | cdktf.IResolvable) {
    this._forwardUnknownVlan = value;
  }
  public resetForwardUnknownVlan() {
    this._forwardUnknownVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardUnknownVlanInput() {
    return this._forwardUnknownVlan;
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

  // ingress_mirror0 - computed: false, optional: true, required: false
  private _ingressMirror0?: string[]; 
  public get ingressMirror0() {
    return cdktf.Fn.tolist(this.getListAttribute('ingress_mirror0'));
  }
  public set ingressMirror0(value: string[]) {
    this._ingressMirror0 = value;
  }
  public resetIngressMirror0() {
    this._ingressMirror0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressMirror0Input() {
    return this._ingressMirror0;
  }

  // ingress_mirror1 - computed: false, optional: true, required: false
  private _ingressMirror1?: string[]; 
  public get ingressMirror1() {
    return cdktf.Fn.tolist(this.getListAttribute('ingress_mirror1'));
  }
  public set ingressMirror1(value: string[]) {
    this._ingressMirror1 = value;
  }
  public resetIngressMirror1() {
    this._ingressMirror1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressMirror1Input() {
    return this._ingressMirror1;
  }

  // ingress_mirror_ratio - computed: false, optional: true, required: false
  private _ingressMirrorRatio?: string; 
  public get ingressMirrorRatio() {
    return this.getStringAttribute('ingress_mirror_ratio');
  }
  public set ingressMirrorRatio(value: string) {
    this._ingressMirrorRatio = value;
  }
  public resetIngressMirrorRatio() {
    this._ingressMirrorRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressMirrorRatioInput() {
    return this._ingressMirrorRatio;
  }

  // mac_level_isolation - computed: false, optional: true, required: false
  private _macLevelIsolation?: boolean | cdktf.IResolvable; 
  public get macLevelIsolation() {
    return this.getBooleanAttribute('mac_level_isolation');
  }
  public set macLevelIsolation(value: boolean | cdktf.IResolvable) {
    this._macLevelIsolation = value;
  }
  public resetMacLevelIsolation() {
    this._macLevelIsolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macLevelIsolationInput() {
    return this._macLevelIsolation;
  }

  // mirror_egress_if_ingress_mirrored - computed: false, optional: true, required: false
  private _mirrorEgressIfIngressMirrored?: boolean | cdktf.IResolvable; 
  public get mirrorEgressIfIngressMirrored() {
    return this.getBooleanAttribute('mirror_egress_if_ingress_mirrored');
  }
  public set mirrorEgressIfIngressMirrored(value: boolean | cdktf.IResolvable) {
    this._mirrorEgressIfIngressMirrored = value;
  }
  public resetMirrorEgressIfIngressMirrored() {
    this._mirrorEgressIfIngressMirrored = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorEgressIfIngressMirroredInput() {
    return this._mirrorEgressIfIngressMirrored;
  }

  // mirror_tx_on_mirror_port - computed: false, optional: true, required: false
  private _mirrorTxOnMirrorPort?: boolean | cdktf.IResolvable; 
  public get mirrorTxOnMirrorPort() {
    return this.getBooleanAttribute('mirror_tx_on_mirror_port');
  }
  public set mirrorTxOnMirrorPort(value: boolean | cdktf.IResolvable) {
    this._mirrorTxOnMirrorPort = value;
  }
  public resetMirrorTxOnMirrorPort() {
    this._mirrorTxOnMirrorPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorTxOnMirrorPortInput() {
    return this._mirrorTxOnMirrorPort;
  }

  // mirrored_packet_drop_precedence - computed: false, optional: true, required: false
  private _mirroredPacketDropPrecedence?: string; 
  public get mirroredPacketDropPrecedence() {
    return this.getStringAttribute('mirrored_packet_drop_precedence');
  }
  public set mirroredPacketDropPrecedence(value: string) {
    this._mirroredPacketDropPrecedence = value;
  }
  public resetMirroredPacketDropPrecedence() {
    this._mirroredPacketDropPrecedence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirroredPacketDropPrecedenceInput() {
    return this._mirroredPacketDropPrecedence;
  }

  // mirrored_packet_qos_priority - computed: false, optional: true, required: false
  private _mirroredPacketQosPriority?: number; 
  public get mirroredPacketQosPriority() {
    return this.getNumberAttribute('mirrored_packet_qos_priority');
  }
  public set mirroredPacketQosPriority(value: number) {
    this._mirroredPacketQosPriority = value;
  }
  public resetMirroredPacketQosPriority() {
    this._mirroredPacketQosPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirroredPacketQosPriorityInput() {
    return this._mirroredPacketQosPriority;
  }

  // multicast_lookup_mode - computed: false, optional: true, required: false
  private _multicastLookupMode?: string; 
  public get multicastLookupMode() {
    return this.getStringAttribute('multicast_lookup_mode');
  }
  public set multicastLookupMode(value: string) {
    this._multicastLookupMode = value;
  }
  public resetMulticastLookupMode() {
    this._multicastLookupMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastLookupModeInput() {
    return this._multicastLookupMode;
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

  // override_existing_when_ufdb_full - computed: false, optional: true, required: false
  private _overrideExistingWhenUfdbFull?: boolean | cdktf.IResolvable; 
  public get overrideExistingWhenUfdbFull() {
    return this.getBooleanAttribute('override_existing_when_ufdb_full');
  }
  public set overrideExistingWhenUfdbFull(value: boolean | cdktf.IResolvable) {
    this._overrideExistingWhenUfdbFull = value;
  }
  public resetOverrideExistingWhenUfdbFull() {
    this._overrideExistingWhenUfdbFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideExistingWhenUfdbFullInput() {
    return this._overrideExistingWhenUfdbFull;
  }

  // unicast_fdb_timeout - computed: false, optional: true, required: false
  private _unicastFdbTimeout?: string; 
  public get unicastFdbTimeout() {
    return this.getStringAttribute('unicast_fdb_timeout');
  }
  public set unicastFdbTimeout(value: string) {
    this._unicastFdbTimeout = value;
  }
  public resetUnicastFdbTimeout() {
    this._unicastFdbTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unicastFdbTimeoutInput() {
    return this._unicastFdbTimeout;
  }

  // unknown_vlan_lookup_mode - computed: false, optional: true, required: false
  private _unknownVlanLookupMode?: string; 
  public get unknownVlanLookupMode() {
    return this.getStringAttribute('unknown_vlan_lookup_mode');
  }
  public set unknownVlanLookupMode(value: string) {
    this._unknownVlanLookupMode = value;
  }
  public resetUnknownVlanLookupMode() {
    this._unknownVlanLookupMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownVlanLookupModeInput() {
    return this._unknownVlanLookupMode;
  }

  // use_cvid_in_one2one_vlan_lookup - computed: false, optional: true, required: false
  private _useCvidInOne2OneVlanLookup?: boolean | cdktf.IResolvable; 
  public get useCvidInOne2OneVlanLookup() {
    return this.getBooleanAttribute('use_cvid_in_one2one_vlan_lookup');
  }
  public set useCvidInOne2OneVlanLookup(value: boolean | cdktf.IResolvable) {
    this._useCvidInOne2OneVlanLookup = value;
  }
  public resetUseCvidInOne2OneVlanLookup() {
    this._useCvidInOne2OneVlanLookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCvidInOne2OneVlanLookupInput() {
    return this._useCvidInOne2OneVlanLookup;
  }

  // use_svid_in_one2one_vlan_lookup - computed: false, optional: true, required: false
  private _useSvidInOne2OneVlanLookup?: boolean | cdktf.IResolvable; 
  public get useSvidInOne2OneVlanLookup() {
    return this.getBooleanAttribute('use_svid_in_one2one_vlan_lookup');
  }
  public set useSvidInOne2OneVlanLookup(value: boolean | cdktf.IResolvable) {
    this._useSvidInOne2OneVlanLookup = value;
  }
  public resetUseSvidInOne2OneVlanLookup() {
    this._useSvidInOne2OneVlanLookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSvidInOne2OneVlanLookupInput() {
    return this._useSvidInOne2OneVlanLookup;
  }

  // vlan_uses - computed: false, optional: true, required: false
  private _vlanUses?: string; 
  public get vlanUses() {
    return this.getStringAttribute('vlan_uses');
  }
  public set vlanUses(value: string) {
    this._vlanUses = value;
  }
  public resetVlanUses() {
    this._vlanUses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanUsesInput() {
    return this._vlanUses;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      bridge_type: cdktf.stringToTerraform(this._bridgeType),
      bypass_ingress_port_policing_for: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bypassIngressPortPolicingFor),
      bypass_l2_security_check_filter_for: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bypassL2SecurityCheckFilterFor),
      bypass_vlan_ingress_filter_for: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bypassVlanIngressFilterFor),
      drop_if_invalid_or_src_port_not_member_of_vlan_on_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dropIfInvalidOrSrcPortNotMemberOfVlanOnPorts),
      drop_if_no_vlan_assignment_on_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dropIfNoVlanAssignmentOnPorts),
      egress_mirror0: cdktf.listMapper(cdktf.stringToTerraform, false)(this._egressMirror0),
      egress_mirror1: cdktf.listMapper(cdktf.stringToTerraform, false)(this._egressMirror1),
      egress_mirror_ratio: cdktf.stringToTerraform(this._egressMirrorRatio),
      fdb_uses: cdktf.stringToTerraform(this._fdbUses),
      forward_unknown_vlan: cdktf.booleanToTerraform(this._forwardUnknownVlan),
      id: cdktf.stringToTerraform(this._id),
      ingress_mirror0: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ingressMirror0),
      ingress_mirror1: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ingressMirror1),
      ingress_mirror_ratio: cdktf.stringToTerraform(this._ingressMirrorRatio),
      mac_level_isolation: cdktf.booleanToTerraform(this._macLevelIsolation),
      mirror_egress_if_ingress_mirrored: cdktf.booleanToTerraform(this._mirrorEgressIfIngressMirrored),
      mirror_tx_on_mirror_port: cdktf.booleanToTerraform(this._mirrorTxOnMirrorPort),
      mirrored_packet_drop_precedence: cdktf.stringToTerraform(this._mirroredPacketDropPrecedence),
      mirrored_packet_qos_priority: cdktf.numberToTerraform(this._mirroredPacketQosPriority),
      multicast_lookup_mode: cdktf.stringToTerraform(this._multicastLookupMode),
      name: cdktf.stringToTerraform(this._name),
      override_existing_when_ufdb_full: cdktf.booleanToTerraform(this._overrideExistingWhenUfdbFull),
      unicast_fdb_timeout: cdktf.stringToTerraform(this._unicastFdbTimeout),
      unknown_vlan_lookup_mode: cdktf.stringToTerraform(this._unknownVlanLookupMode),
      use_cvid_in_one2one_vlan_lookup: cdktf.booleanToTerraform(this._useCvidInOne2OneVlanLookup),
      use_svid_in_one2one_vlan_lookup: cdktf.booleanToTerraform(this._useSvidInOne2OneVlanLookup),
      vlan_uses: cdktf.stringToTerraform(this._vlanUses),
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
      bridge_type: {
        value: cdktf.stringToHclTerraform(this._bridgeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bypass_ingress_port_policing_for: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bypassIngressPortPolicingFor),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bypass_l2_security_check_filter_for: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bypassL2SecurityCheckFilterFor),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bypass_vlan_ingress_filter_for: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bypassVlanIngressFilterFor),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      drop_if_invalid_or_src_port_not_member_of_vlan_on_ports: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dropIfInvalidOrSrcPortNotMemberOfVlanOnPorts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      drop_if_no_vlan_assignment_on_ports: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dropIfNoVlanAssignmentOnPorts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      egress_mirror0: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._egressMirror0),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      egress_mirror1: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._egressMirror1),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      egress_mirror_ratio: {
        value: cdktf.stringToHclTerraform(this._egressMirrorRatio),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fdb_uses: {
        value: cdktf.stringToHclTerraform(this._fdbUses),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_unknown_vlan: {
        value: cdktf.booleanToHclTerraform(this._forwardUnknownVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ingress_mirror0: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ingressMirror0),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ingress_mirror1: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ingressMirror1),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ingress_mirror_ratio: {
        value: cdktf.stringToHclTerraform(this._ingressMirrorRatio),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_level_isolation: {
        value: cdktf.booleanToHclTerraform(this._macLevelIsolation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mirror_egress_if_ingress_mirrored: {
        value: cdktf.booleanToHclTerraform(this._mirrorEgressIfIngressMirrored),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mirror_tx_on_mirror_port: {
        value: cdktf.booleanToHclTerraform(this._mirrorTxOnMirrorPort),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mirrored_packet_drop_precedence: {
        value: cdktf.stringToHclTerraform(this._mirroredPacketDropPrecedence),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mirrored_packet_qos_priority: {
        value: cdktf.numberToHclTerraform(this._mirroredPacketQosPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multicast_lookup_mode: {
        value: cdktf.stringToHclTerraform(this._multicastLookupMode),
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
      override_existing_when_ufdb_full: {
        value: cdktf.booleanToHclTerraform(this._overrideExistingWhenUfdbFull),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      unicast_fdb_timeout: {
        value: cdktf.stringToHclTerraform(this._unicastFdbTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unknown_vlan_lookup_mode: {
        value: cdktf.stringToHclTerraform(this._unknownVlanLookupMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_cvid_in_one2one_vlan_lookup: {
        value: cdktf.booleanToHclTerraform(this._useCvidInOne2OneVlanLookup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_svid_in_one2one_vlan_lookup: {
        value: cdktf.booleanToHclTerraform(this._useSvidInOne2OneVlanLookup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vlan_uses: {
        value: cdktf.stringToHclTerraform(this._vlanUses),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
