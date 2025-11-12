// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#allow_arp_monitor SwitchInterface#allow_arp_monitor}
  */
  readonly allowArpMonitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#allowed_sub_vlans SwitchInterface#allowed_sub_vlans}
  */
  readonly allowedSubVlans?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#allowed_vlans SwitchInterface#allowed_vlans}
  */
  readonly allowedVlans?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#arp_inspection_trust SwitchInterface#arp_inspection_trust}
  */
  readonly arpInspectionTrust?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#auto_discovery_fortilink SwitchInterface#auto_discovery_fortilink}
  */
  readonly autoDiscoveryFortilink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#auto_discovery_fortilink_packet_interval SwitchInterface#auto_discovery_fortilink_packet_interval}
  */
  readonly autoDiscoveryFortilinkPacketInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#default_cos SwitchInterface#default_cos}
  */
  readonly defaultCos?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#description SwitchInterface#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#dhcp_snoop_learning_limit SwitchInterface#dhcp_snoop_learning_limit}
  */
  readonly dhcpSnoopLearningLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#dhcp_snoop_learning_limit_check SwitchInterface#dhcp_snoop_learning_limit_check}
  */
  readonly dhcpSnoopLearningLimitCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#dhcp_snoop_option82_trust SwitchInterface#dhcp_snoop_option82_trust}
  */
  readonly dhcpSnoopOption82Trust?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#dhcp_snooping SwitchInterface#dhcp_snooping}
  */
  readonly dhcpSnooping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#discard_mode SwitchInterface#discard_mode}
  */
  readonly discardMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#dynamic_sort_subtable SwitchInterface#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#edge_port SwitchInterface#edge_port}
  */
  readonly edgePort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#filter_sub_vlans SwitchInterface#filter_sub_vlans}
  */
  readonly filterSubVlans?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#fortilink_l3_mode SwitchInterface#fortilink_l3_mode}
  */
  readonly fortilinkL3Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#id SwitchInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#igmp_snooping_flood_reports SwitchInterface#igmp_snooping_flood_reports}
  */
  readonly igmpSnoopingFloodReports?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#interface_mode SwitchInterface#interface_mode}
  */
  readonly interfaceMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#ip_mac_binding SwitchInterface#ip_mac_binding}
  */
  readonly ipMacBinding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#learning_limit SwitchInterface#learning_limit}
  */
  readonly learningLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#learning_limit_action SwitchInterface#learning_limit_action}
  */
  readonly learningLimitAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#log_mac_event SwitchInterface#log_mac_event}
  */
  readonly logMacEvent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#loop_guard SwitchInterface#loop_guard}
  */
  readonly loopGuard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#loop_guard_mac_move_threshold SwitchInterface#loop_guard_mac_move_threshold}
  */
  readonly loopGuardMacMoveThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#loop_guard_timeout SwitchInterface#loop_guard_timeout}
  */
  readonly loopGuardTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#mcast_snooping_flood_traffic SwitchInterface#mcast_snooping_flood_traffic}
  */
  readonly mcastSnoopingFloodTraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#mld_snooping_flood_reports SwitchInterface#mld_snooping_flood_reports}
  */
  readonly mldSnoopingFloodReports?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#nac SwitchInterface#nac}
  */
  readonly nac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#name SwitchInterface#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#native_vlan SwitchInterface#native_vlan}
  */
  readonly nativeVlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#packet_sample_rate SwitchInterface#packet_sample_rate}
  */
  readonly packetSampleRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#packet_sampler SwitchInterface#packet_sampler}
  */
  readonly packetSampler?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#primary_vlan SwitchInterface#primary_vlan}
  */
  readonly primaryVlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#private_vlan SwitchInterface#private_vlan}
  */
  readonly privateVlan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#private_vlan_port_type SwitchInterface#private_vlan_port_type}
  */
  readonly privateVlanPortType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#ptp_policy SwitchInterface#ptp_policy}
  */
  readonly ptpPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#ptp_status SwitchInterface#ptp_status}
  */
  readonly ptpStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#qos_policy SwitchInterface#qos_policy}
  */
  readonly qosPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#rpvst_port SwitchInterface#rpvst_port}
  */
  readonly rpvstPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#sample_direction SwitchInterface#sample_direction}
  */
  readonly sampleDirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#sflow_counter_interval SwitchInterface#sflow_counter_interval}
  */
  readonly sflowCounterInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#snmp_index SwitchInterface#snmp_index}
  */
  readonly snmpIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#sticky_mac SwitchInterface#sticky_mac}
  */
  readonly stickyMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#stp_bpdu_guard SwitchInterface#stp_bpdu_guard}
  */
  readonly stpBpduGuard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#stp_bpdu_guard_timeout SwitchInterface#stp_bpdu_guard_timeout}
  */
  readonly stpBpduGuardTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#stp_loop_protection SwitchInterface#stp_loop_protection}
  */
  readonly stpLoopProtection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#stp_root_guard SwitchInterface#stp_root_guard}
  */
  readonly stpRootGuard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#stp_state SwitchInterface#stp_state}
  */
  readonly stpState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#sub_vlan SwitchInterface#sub_vlan}
  */
  readonly subVlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#switch_port_mode SwitchInterface#switch_port_mode}
  */
  readonly switchPortMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#trust_dot1p_map SwitchInterface#trust_dot1p_map}
  */
  readonly trustDot1PMap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#trust_ip_dscp_map SwitchInterface#trust_ip_dscp_map}
  */
  readonly trustIpDscpMap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#type SwitchInterface#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#untagged_vlans SwitchInterface#untagged_vlans}
  */
  readonly untaggedVlans?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#vlan_mapping_miss_drop SwitchInterface#vlan_mapping_miss_drop}
  */
  readonly vlanMappingMissDrop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#vlan_tpid SwitchInterface#vlan_tpid}
  */
  readonly vlanTpid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#vlan_traffic_type SwitchInterface#vlan_traffic_type}
  */
  readonly vlanTrafficType?: string;
  /**
  * dhcp_snoop_option82_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#dhcp_snoop_option82_override SwitchInterface#dhcp_snoop_option82_override}
  */
  readonly dhcpSnoopOption82Override?: SwitchInterfaceDhcpSnoopOption82Override[] | cdktf.IResolvable;
  /**
  * port_security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#port_security SwitchInterface#port_security}
  */
  readonly portSecurity?: SwitchInterfacePortSecurity;
  /**
  * qnq block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#qnq SwitchInterface#qnq}
  */
  readonly qnq?: SwitchInterfaceQnq;
  /**
  * raguard block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#raguard SwitchInterface#raguard}
  */
  readonly raguard?: SwitchInterfaceRaguard[] | cdktf.IResolvable;
  /**
  * security_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#security_groups SwitchInterface#security_groups}
  */
  readonly securityGroups?: SwitchInterfaceSecurityGroups[] | cdktf.IResolvable;
  /**
  * vlan_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#vlan_mapping SwitchInterface#vlan_mapping}
  */
  readonly vlanMapping?: SwitchInterfaceVlanMapping[] | cdktf.IResolvable;
}
export interface SwitchInterfaceDhcpSnoopOption82Override {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#circuit_id SwitchInterface#circuit_id}
  */
  readonly circuitId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#id SwitchInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#remote_id SwitchInterface#remote_id}
  */
  readonly remoteId?: string;
}

export function switchInterfaceDhcpSnoopOption82OverrideToTerraform(struct?: SwitchInterfaceDhcpSnoopOption82Override | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    circuit_id: cdktf.stringToTerraform(struct!.circuitId),
    id: cdktf.numberToTerraform(struct!.id),
    remote_id: cdktf.stringToTerraform(struct!.remoteId),
  }
}


export function switchInterfaceDhcpSnoopOption82OverrideToHclTerraform(struct?: SwitchInterfaceDhcpSnoopOption82Override | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    circuit_id: {
      value: cdktf.stringToHclTerraform(struct!.circuitId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remote_id: {
      value: cdktf.stringToHclTerraform(struct!.remoteId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchInterfaceDhcpSnoopOption82OverrideOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchInterfaceDhcpSnoopOption82Override | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._circuitId !== undefined) {
      hasAnyValues = true;
      internalValueResult.circuitId = this._circuitId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._remoteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteId = this._remoteId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchInterfaceDhcpSnoopOption82Override | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._circuitId = undefined;
      this._id = undefined;
      this._remoteId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._circuitId = value.circuitId;
      this._id = value.id;
      this._remoteId = value.remoteId;
    }
  }

  // circuit_id - computed: true, optional: true, required: false
  private _circuitId?: string; 
  public get circuitId() {
    return this.getStringAttribute('circuit_id');
  }
  public set circuitId(value: string) {
    this._circuitId = value;
  }
  public resetCircuitId() {
    this._circuitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitIdInput() {
    return this._circuitId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // remote_id - computed: true, optional: true, required: false
  private _remoteId?: string; 
  public get remoteId() {
    return this.getStringAttribute('remote_id');
  }
  public set remoteId(value: string) {
    this._remoteId = value;
  }
  public resetRemoteId() {
    this._remoteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIdInput() {
    return this._remoteId;
  }
}

export class SwitchInterfaceDhcpSnoopOption82OverrideList extends cdktf.ComplexList {
  public internalValue? : SwitchInterfaceDhcpSnoopOption82Override[] | cdktf.IResolvable

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
  public get(index: number): SwitchInterfaceDhcpSnoopOption82OverrideOutputReference {
    return new SwitchInterfaceDhcpSnoopOption82OverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchInterfacePortSecurity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#allow_mac_move SwitchInterface#allow_mac_move}
  */
  readonly allowMacMove?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#allow_mac_move_to SwitchInterface#allow_mac_move_to}
  */
  readonly allowMacMoveTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#auth_fail_vlan SwitchInterface#auth_fail_vlan}
  */
  readonly authFailVlan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#auth_fail_vlanid SwitchInterface#auth_fail_vlanid}
  */
  readonly authFailVlanid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#auth_order SwitchInterface#auth_order}
  */
  readonly authOrder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#auth_priority SwitchInterface#auth_priority}
  */
  readonly authPriority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#authserver_timeout_period SwitchInterface#authserver_timeout_period}
  */
  readonly authserverTimeoutPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#authserver_timeout_tagged SwitchInterface#authserver_timeout_tagged}
  */
  readonly authserverTimeoutTagged?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#authserver_timeout_tagged_lldp_voice_vlanid SwitchInterface#authserver_timeout_tagged_lldp_voice_vlanid}
  */
  readonly authserverTimeoutTaggedLldpVoiceVlanid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#authserver_timeout_tagged_vlanid SwitchInterface#authserver_timeout_tagged_vlanid}
  */
  readonly authserverTimeoutTaggedVlanid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#authserver_timeout_vlan SwitchInterface#authserver_timeout_vlan}
  */
  readonly authserverTimeoutVlan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#authserver_timeout_vlanid SwitchInterface#authserver_timeout_vlanid}
  */
  readonly authserverTimeoutVlanid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#client_limit SwitchInterface#client_limit}
  */
  readonly clientLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#dacl SwitchInterface#dacl}
  */
  readonly dacl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#eap_auto_untagged_vlans SwitchInterface#eap_auto_untagged_vlans}
  */
  readonly eapAutoUntaggedVlans?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#eap_egress_tagged SwitchInterface#eap_egress_tagged}
  */
  readonly eapEgressTagged?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#eap_passthru SwitchInterface#eap_passthru}
  */
  readonly eapPassthru?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#framevid_apply SwitchInterface#framevid_apply}
  */
  readonly framevidApply?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#guest_auth_delay SwitchInterface#guest_auth_delay}
  */
  readonly guestAuthDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#guest_vlan SwitchInterface#guest_vlan}
  */
  readonly guestVlan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#guest_vlanid SwitchInterface#guest_vlanid}
  */
  readonly guestVlanid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#mab_eapol_request SwitchInterface#mab_eapol_request}
  */
  readonly mabEapolRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#mac_auth_bypass SwitchInterface#mac_auth_bypass}
  */
  readonly macAuthBypass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#macsec_pae_mode SwitchInterface#macsec_pae_mode}
  */
  readonly macsecPaeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#macsec_profile SwitchInterface#macsec_profile}
  */
  readonly macsecProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#open_auth SwitchInterface#open_auth}
  */
  readonly openAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#port_security_mode SwitchInterface#port_security_mode}
  */
  readonly portSecurityMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#quarantine_vlan SwitchInterface#quarantine_vlan}
  */
  readonly quarantineVlan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#radius_timeout_overwrite SwitchInterface#radius_timeout_overwrite}
  */
  readonly radiusTimeoutOverwrite?: string;
}

export function switchInterfacePortSecurityToTerraform(struct?: SwitchInterfacePortSecurityOutputReference | SwitchInterfacePortSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_mac_move: cdktf.stringToTerraform(struct!.allowMacMove),
    allow_mac_move_to: cdktf.stringToTerraform(struct!.allowMacMoveTo),
    auth_fail_vlan: cdktf.stringToTerraform(struct!.authFailVlan),
    auth_fail_vlanid: cdktf.numberToTerraform(struct!.authFailVlanid),
    auth_order: cdktf.stringToTerraform(struct!.authOrder),
    auth_priority: cdktf.stringToTerraform(struct!.authPriority),
    authserver_timeout_period: cdktf.numberToTerraform(struct!.authserverTimeoutPeriod),
    authserver_timeout_tagged: cdktf.stringToTerraform(struct!.authserverTimeoutTagged),
    authserver_timeout_tagged_lldp_voice_vlanid: cdktf.numberToTerraform(struct!.authserverTimeoutTaggedLldpVoiceVlanid),
    authserver_timeout_tagged_vlanid: cdktf.numberToTerraform(struct!.authserverTimeoutTaggedVlanid),
    authserver_timeout_vlan: cdktf.stringToTerraform(struct!.authserverTimeoutVlan),
    authserver_timeout_vlanid: cdktf.numberToTerraform(struct!.authserverTimeoutVlanid),
    client_limit: cdktf.numberToTerraform(struct!.clientLimit),
    dacl: cdktf.stringToTerraform(struct!.dacl),
    eap_auto_untagged_vlans: cdktf.stringToTerraform(struct!.eapAutoUntaggedVlans),
    eap_egress_tagged: cdktf.stringToTerraform(struct!.eapEgressTagged),
    eap_passthru: cdktf.stringToTerraform(struct!.eapPassthru),
    framevid_apply: cdktf.stringToTerraform(struct!.framevidApply),
    guest_auth_delay: cdktf.numberToTerraform(struct!.guestAuthDelay),
    guest_vlan: cdktf.stringToTerraform(struct!.guestVlan),
    guest_vlanid: cdktf.numberToTerraform(struct!.guestVlanid),
    mab_eapol_request: cdktf.numberToTerraform(struct!.mabEapolRequest),
    mac_auth_bypass: cdktf.stringToTerraform(struct!.macAuthBypass),
    macsec_pae_mode: cdktf.stringToTerraform(struct!.macsecPaeMode),
    macsec_profile: cdktf.stringToTerraform(struct!.macsecProfile),
    open_auth: cdktf.stringToTerraform(struct!.openAuth),
    port_security_mode: cdktf.stringToTerraform(struct!.portSecurityMode),
    quarantine_vlan: cdktf.stringToTerraform(struct!.quarantineVlan),
    radius_timeout_overwrite: cdktf.stringToTerraform(struct!.radiusTimeoutOverwrite),
  }
}


export function switchInterfacePortSecurityToHclTerraform(struct?: SwitchInterfacePortSecurityOutputReference | SwitchInterfacePortSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_mac_move: {
      value: cdktf.stringToHclTerraform(struct!.allowMacMove),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_mac_move_to: {
      value: cdktf.stringToHclTerraform(struct!.allowMacMoveTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_fail_vlan: {
      value: cdktf.stringToHclTerraform(struct!.authFailVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_fail_vlanid: {
      value: cdktf.numberToHclTerraform(struct!.authFailVlanid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_order: {
      value: cdktf.stringToHclTerraform(struct!.authOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_priority: {
      value: cdktf.stringToHclTerraform(struct!.authPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authserver_timeout_period: {
      value: cdktf.numberToHclTerraform(struct!.authserverTimeoutPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authserver_timeout_tagged: {
      value: cdktf.stringToHclTerraform(struct!.authserverTimeoutTagged),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authserver_timeout_tagged_lldp_voice_vlanid: {
      value: cdktf.numberToHclTerraform(struct!.authserverTimeoutTaggedLldpVoiceVlanid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authserver_timeout_tagged_vlanid: {
      value: cdktf.numberToHclTerraform(struct!.authserverTimeoutTaggedVlanid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authserver_timeout_vlan: {
      value: cdktf.stringToHclTerraform(struct!.authserverTimeoutVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authserver_timeout_vlanid: {
      value: cdktf.numberToHclTerraform(struct!.authserverTimeoutVlanid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_limit: {
      value: cdktf.numberToHclTerraform(struct!.clientLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dacl: {
      value: cdktf.stringToHclTerraform(struct!.dacl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eap_auto_untagged_vlans: {
      value: cdktf.stringToHclTerraform(struct!.eapAutoUntaggedVlans),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eap_egress_tagged: {
      value: cdktf.stringToHclTerraform(struct!.eapEgressTagged),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eap_passthru: {
      value: cdktf.stringToHclTerraform(struct!.eapPassthru),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    framevid_apply: {
      value: cdktf.stringToHclTerraform(struct!.framevidApply),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    guest_auth_delay: {
      value: cdktf.numberToHclTerraform(struct!.guestAuthDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    guest_vlan: {
      value: cdktf.stringToHclTerraform(struct!.guestVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    guest_vlanid: {
      value: cdktf.numberToHclTerraform(struct!.guestVlanid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mab_eapol_request: {
      value: cdktf.numberToHclTerraform(struct!.mabEapolRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_auth_bypass: {
      value: cdktf.stringToHclTerraform(struct!.macAuthBypass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    macsec_pae_mode: {
      value: cdktf.stringToHclTerraform(struct!.macsecPaeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    macsec_profile: {
      value: cdktf.stringToHclTerraform(struct!.macsecProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    open_auth: {
      value: cdktf.stringToHclTerraform(struct!.openAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_security_mode: {
      value: cdktf.stringToHclTerraform(struct!.portSecurityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quarantine_vlan: {
      value: cdktf.stringToHclTerraform(struct!.quarantineVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    radius_timeout_overwrite: {
      value: cdktf.stringToHclTerraform(struct!.radiusTimeoutOverwrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchInterfacePortSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwitchInterfacePortSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowMacMove !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowMacMove = this._allowMacMove;
    }
    if (this._allowMacMoveTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowMacMoveTo = this._allowMacMoveTo;
    }
    if (this._authFailVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.authFailVlan = this._authFailVlan;
    }
    if (this._authFailVlanid !== undefined) {
      hasAnyValues = true;
      internalValueResult.authFailVlanid = this._authFailVlanid;
    }
    if (this._authOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.authOrder = this._authOrder;
    }
    if (this._authPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPriority = this._authPriority;
    }
    if (this._authserverTimeoutPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authserverTimeoutPeriod = this._authserverTimeoutPeriod;
    }
    if (this._authserverTimeoutTagged !== undefined) {
      hasAnyValues = true;
      internalValueResult.authserverTimeoutTagged = this._authserverTimeoutTagged;
    }
    if (this._authserverTimeoutTaggedLldpVoiceVlanid !== undefined) {
      hasAnyValues = true;
      internalValueResult.authserverTimeoutTaggedLldpVoiceVlanid = this._authserverTimeoutTaggedLldpVoiceVlanid;
    }
    if (this._authserverTimeoutTaggedVlanid !== undefined) {
      hasAnyValues = true;
      internalValueResult.authserverTimeoutTaggedVlanid = this._authserverTimeoutTaggedVlanid;
    }
    if (this._authserverTimeoutVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.authserverTimeoutVlan = this._authserverTimeoutVlan;
    }
    if (this._authserverTimeoutVlanid !== undefined) {
      hasAnyValues = true;
      internalValueResult.authserverTimeoutVlanid = this._authserverTimeoutVlanid;
    }
    if (this._clientLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientLimit = this._clientLimit;
    }
    if (this._dacl !== undefined) {
      hasAnyValues = true;
      internalValueResult.dacl = this._dacl;
    }
    if (this._eapAutoUntaggedVlans !== undefined) {
      hasAnyValues = true;
      internalValueResult.eapAutoUntaggedVlans = this._eapAutoUntaggedVlans;
    }
    if (this._eapEgressTagged !== undefined) {
      hasAnyValues = true;
      internalValueResult.eapEgressTagged = this._eapEgressTagged;
    }
    if (this._eapPassthru !== undefined) {
      hasAnyValues = true;
      internalValueResult.eapPassthru = this._eapPassthru;
    }
    if (this._framevidApply !== undefined) {
      hasAnyValues = true;
      internalValueResult.framevidApply = this._framevidApply;
    }
    if (this._guestAuthDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestAuthDelay = this._guestAuthDelay;
    }
    if (this._guestVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestVlan = this._guestVlan;
    }
    if (this._guestVlanid !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestVlanid = this._guestVlanid;
    }
    if (this._mabEapolRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.mabEapolRequest = this._mabEapolRequest;
    }
    if (this._macAuthBypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAuthBypass = this._macAuthBypass;
    }
    if (this._macsecPaeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.macsecPaeMode = this._macsecPaeMode;
    }
    if (this._macsecProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.macsecProfile = this._macsecProfile;
    }
    if (this._openAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.openAuth = this._openAuth;
    }
    if (this._portSecurityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.portSecurityMode = this._portSecurityMode;
    }
    if (this._quarantineVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.quarantineVlan = this._quarantineVlan;
    }
    if (this._radiusTimeoutOverwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusTimeoutOverwrite = this._radiusTimeoutOverwrite;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchInterfacePortSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowMacMove = undefined;
      this._allowMacMoveTo = undefined;
      this._authFailVlan = undefined;
      this._authFailVlanid = undefined;
      this._authOrder = undefined;
      this._authPriority = undefined;
      this._authserverTimeoutPeriod = undefined;
      this._authserverTimeoutTagged = undefined;
      this._authserverTimeoutTaggedLldpVoiceVlanid = undefined;
      this._authserverTimeoutTaggedVlanid = undefined;
      this._authserverTimeoutVlan = undefined;
      this._authserverTimeoutVlanid = undefined;
      this._clientLimit = undefined;
      this._dacl = undefined;
      this._eapAutoUntaggedVlans = undefined;
      this._eapEgressTagged = undefined;
      this._eapPassthru = undefined;
      this._framevidApply = undefined;
      this._guestAuthDelay = undefined;
      this._guestVlan = undefined;
      this._guestVlanid = undefined;
      this._mabEapolRequest = undefined;
      this._macAuthBypass = undefined;
      this._macsecPaeMode = undefined;
      this._macsecProfile = undefined;
      this._openAuth = undefined;
      this._portSecurityMode = undefined;
      this._quarantineVlan = undefined;
      this._radiusTimeoutOverwrite = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowMacMove = value.allowMacMove;
      this._allowMacMoveTo = value.allowMacMoveTo;
      this._authFailVlan = value.authFailVlan;
      this._authFailVlanid = value.authFailVlanid;
      this._authOrder = value.authOrder;
      this._authPriority = value.authPriority;
      this._authserverTimeoutPeriod = value.authserverTimeoutPeriod;
      this._authserverTimeoutTagged = value.authserverTimeoutTagged;
      this._authserverTimeoutTaggedLldpVoiceVlanid = value.authserverTimeoutTaggedLldpVoiceVlanid;
      this._authserverTimeoutTaggedVlanid = value.authserverTimeoutTaggedVlanid;
      this._authserverTimeoutVlan = value.authserverTimeoutVlan;
      this._authserverTimeoutVlanid = value.authserverTimeoutVlanid;
      this._clientLimit = value.clientLimit;
      this._dacl = value.dacl;
      this._eapAutoUntaggedVlans = value.eapAutoUntaggedVlans;
      this._eapEgressTagged = value.eapEgressTagged;
      this._eapPassthru = value.eapPassthru;
      this._framevidApply = value.framevidApply;
      this._guestAuthDelay = value.guestAuthDelay;
      this._guestVlan = value.guestVlan;
      this._guestVlanid = value.guestVlanid;
      this._mabEapolRequest = value.mabEapolRequest;
      this._macAuthBypass = value.macAuthBypass;
      this._macsecPaeMode = value.macsecPaeMode;
      this._macsecProfile = value.macsecProfile;
      this._openAuth = value.openAuth;
      this._portSecurityMode = value.portSecurityMode;
      this._quarantineVlan = value.quarantineVlan;
      this._radiusTimeoutOverwrite = value.radiusTimeoutOverwrite;
    }
  }

  // allow_mac_move - computed: true, optional: true, required: false
  private _allowMacMove?: string; 
  public get allowMacMove() {
    return this.getStringAttribute('allow_mac_move');
  }
  public set allowMacMove(value: string) {
    this._allowMacMove = value;
  }
  public resetAllowMacMove() {
    this._allowMacMove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMacMoveInput() {
    return this._allowMacMove;
  }

  // allow_mac_move_to - computed: true, optional: true, required: false
  private _allowMacMoveTo?: string; 
  public get allowMacMoveTo() {
    return this.getStringAttribute('allow_mac_move_to');
  }
  public set allowMacMoveTo(value: string) {
    this._allowMacMoveTo = value;
  }
  public resetAllowMacMoveTo() {
    this._allowMacMoveTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMacMoveToInput() {
    return this._allowMacMoveTo;
  }

  // auth_fail_vlan - computed: true, optional: true, required: false
  private _authFailVlan?: string; 
  public get authFailVlan() {
    return this.getStringAttribute('auth_fail_vlan');
  }
  public set authFailVlan(value: string) {
    this._authFailVlan = value;
  }
  public resetAuthFailVlan() {
    this._authFailVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authFailVlanInput() {
    return this._authFailVlan;
  }

  // auth_fail_vlanid - computed: true, optional: true, required: false
  private _authFailVlanid?: number; 
  public get authFailVlanid() {
    return this.getNumberAttribute('auth_fail_vlanid');
  }
  public set authFailVlanid(value: number) {
    this._authFailVlanid = value;
  }
  public resetAuthFailVlanid() {
    this._authFailVlanid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authFailVlanidInput() {
    return this._authFailVlanid;
  }

  // auth_order - computed: true, optional: true, required: false
  private _authOrder?: string; 
  public get authOrder() {
    return this.getStringAttribute('auth_order');
  }
  public set authOrder(value: string) {
    this._authOrder = value;
  }
  public resetAuthOrder() {
    this._authOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authOrderInput() {
    return this._authOrder;
  }

  // auth_priority - computed: true, optional: true, required: false
  private _authPriority?: string; 
  public get authPriority() {
    return this.getStringAttribute('auth_priority');
  }
  public set authPriority(value: string) {
    this._authPriority = value;
  }
  public resetAuthPriority() {
    this._authPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPriorityInput() {
    return this._authPriority;
  }

  // authserver_timeout_period - computed: true, optional: true, required: false
  private _authserverTimeoutPeriod?: number; 
  public get authserverTimeoutPeriod() {
    return this.getNumberAttribute('authserver_timeout_period');
  }
  public set authserverTimeoutPeriod(value: number) {
    this._authserverTimeoutPeriod = value;
  }
  public resetAuthserverTimeoutPeriod() {
    this._authserverTimeoutPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authserverTimeoutPeriodInput() {
    return this._authserverTimeoutPeriod;
  }

  // authserver_timeout_tagged - computed: true, optional: true, required: false
  private _authserverTimeoutTagged?: string; 
  public get authserverTimeoutTagged() {
    return this.getStringAttribute('authserver_timeout_tagged');
  }
  public set authserverTimeoutTagged(value: string) {
    this._authserverTimeoutTagged = value;
  }
  public resetAuthserverTimeoutTagged() {
    this._authserverTimeoutTagged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authserverTimeoutTaggedInput() {
    return this._authserverTimeoutTagged;
  }

  // authserver_timeout_tagged_lldp_voice_vlanid - computed: true, optional: true, required: false
  private _authserverTimeoutTaggedLldpVoiceVlanid?: number; 
  public get authserverTimeoutTaggedLldpVoiceVlanid() {
    return this.getNumberAttribute('authserver_timeout_tagged_lldp_voice_vlanid');
  }
  public set authserverTimeoutTaggedLldpVoiceVlanid(value: number) {
    this._authserverTimeoutTaggedLldpVoiceVlanid = value;
  }
  public resetAuthserverTimeoutTaggedLldpVoiceVlanid() {
    this._authserverTimeoutTaggedLldpVoiceVlanid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authserverTimeoutTaggedLldpVoiceVlanidInput() {
    return this._authserverTimeoutTaggedLldpVoiceVlanid;
  }

  // authserver_timeout_tagged_vlanid - computed: true, optional: true, required: false
  private _authserverTimeoutTaggedVlanid?: number; 
  public get authserverTimeoutTaggedVlanid() {
    return this.getNumberAttribute('authserver_timeout_tagged_vlanid');
  }
  public set authserverTimeoutTaggedVlanid(value: number) {
    this._authserverTimeoutTaggedVlanid = value;
  }
  public resetAuthserverTimeoutTaggedVlanid() {
    this._authserverTimeoutTaggedVlanid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authserverTimeoutTaggedVlanidInput() {
    return this._authserverTimeoutTaggedVlanid;
  }

  // authserver_timeout_vlan - computed: true, optional: true, required: false
  private _authserverTimeoutVlan?: string; 
  public get authserverTimeoutVlan() {
    return this.getStringAttribute('authserver_timeout_vlan');
  }
  public set authserverTimeoutVlan(value: string) {
    this._authserverTimeoutVlan = value;
  }
  public resetAuthserverTimeoutVlan() {
    this._authserverTimeoutVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authserverTimeoutVlanInput() {
    return this._authserverTimeoutVlan;
  }

  // authserver_timeout_vlanid - computed: true, optional: true, required: false
  private _authserverTimeoutVlanid?: number; 
  public get authserverTimeoutVlanid() {
    return this.getNumberAttribute('authserver_timeout_vlanid');
  }
  public set authserverTimeoutVlanid(value: number) {
    this._authserverTimeoutVlanid = value;
  }
  public resetAuthserverTimeoutVlanid() {
    this._authserverTimeoutVlanid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authserverTimeoutVlanidInput() {
    return this._authserverTimeoutVlanid;
  }

  // client_limit - computed: true, optional: true, required: false
  private _clientLimit?: number; 
  public get clientLimit() {
    return this.getNumberAttribute('client_limit');
  }
  public set clientLimit(value: number) {
    this._clientLimit = value;
  }
  public resetClientLimit() {
    this._clientLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientLimitInput() {
    return this._clientLimit;
  }

  // dacl - computed: true, optional: true, required: false
  private _dacl?: string; 
  public get dacl() {
    return this.getStringAttribute('dacl');
  }
  public set dacl(value: string) {
    this._dacl = value;
  }
  public resetDacl() {
    this._dacl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daclInput() {
    return this._dacl;
  }

  // eap_auto_untagged_vlans - computed: true, optional: true, required: false
  private _eapAutoUntaggedVlans?: string; 
  public get eapAutoUntaggedVlans() {
    return this.getStringAttribute('eap_auto_untagged_vlans');
  }
  public set eapAutoUntaggedVlans(value: string) {
    this._eapAutoUntaggedVlans = value;
  }
  public resetEapAutoUntaggedVlans() {
    this._eapAutoUntaggedVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapAutoUntaggedVlansInput() {
    return this._eapAutoUntaggedVlans;
  }

  // eap_egress_tagged - computed: true, optional: true, required: false
  private _eapEgressTagged?: string; 
  public get eapEgressTagged() {
    return this.getStringAttribute('eap_egress_tagged');
  }
  public set eapEgressTagged(value: string) {
    this._eapEgressTagged = value;
  }
  public resetEapEgressTagged() {
    this._eapEgressTagged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapEgressTaggedInput() {
    return this._eapEgressTagged;
  }

  // eap_passthru - computed: true, optional: true, required: false
  private _eapPassthru?: string; 
  public get eapPassthru() {
    return this.getStringAttribute('eap_passthru');
  }
  public set eapPassthru(value: string) {
    this._eapPassthru = value;
  }
  public resetEapPassthru() {
    this._eapPassthru = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapPassthruInput() {
    return this._eapPassthru;
  }

  // framevid_apply - computed: true, optional: true, required: false
  private _framevidApply?: string; 
  public get framevidApply() {
    return this.getStringAttribute('framevid_apply');
  }
  public set framevidApply(value: string) {
    this._framevidApply = value;
  }
  public resetFramevidApply() {
    this._framevidApply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get framevidApplyInput() {
    return this._framevidApply;
  }

  // guest_auth_delay - computed: true, optional: true, required: false
  private _guestAuthDelay?: number; 
  public get guestAuthDelay() {
    return this.getNumberAttribute('guest_auth_delay');
  }
  public set guestAuthDelay(value: number) {
    this._guestAuthDelay = value;
  }
  public resetGuestAuthDelay() {
    this._guestAuthDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestAuthDelayInput() {
    return this._guestAuthDelay;
  }

  // guest_vlan - computed: true, optional: true, required: false
  private _guestVlan?: string; 
  public get guestVlan() {
    return this.getStringAttribute('guest_vlan');
  }
  public set guestVlan(value: string) {
    this._guestVlan = value;
  }
  public resetGuestVlan() {
    this._guestVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestVlanInput() {
    return this._guestVlan;
  }

  // guest_vlanid - computed: true, optional: true, required: false
  private _guestVlanid?: number; 
  public get guestVlanid() {
    return this.getNumberAttribute('guest_vlanid');
  }
  public set guestVlanid(value: number) {
    this._guestVlanid = value;
  }
  public resetGuestVlanid() {
    this._guestVlanid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestVlanidInput() {
    return this._guestVlanid;
  }

  // mab_eapol_request - computed: true, optional: true, required: false
  private _mabEapolRequest?: number; 
  public get mabEapolRequest() {
    return this.getNumberAttribute('mab_eapol_request');
  }
  public set mabEapolRequest(value: number) {
    this._mabEapolRequest = value;
  }
  public resetMabEapolRequest() {
    this._mabEapolRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mabEapolRequestInput() {
    return this._mabEapolRequest;
  }

  // mac_auth_bypass - computed: true, optional: true, required: false
  private _macAuthBypass?: string; 
  public get macAuthBypass() {
    return this.getStringAttribute('mac_auth_bypass');
  }
  public set macAuthBypass(value: string) {
    this._macAuthBypass = value;
  }
  public resetMacAuthBypass() {
    this._macAuthBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAuthBypassInput() {
    return this._macAuthBypass;
  }

  // macsec_pae_mode - computed: true, optional: true, required: false
  private _macsecPaeMode?: string; 
  public get macsecPaeMode() {
    return this.getStringAttribute('macsec_pae_mode');
  }
  public set macsecPaeMode(value: string) {
    this._macsecPaeMode = value;
  }
  public resetMacsecPaeMode() {
    this._macsecPaeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macsecPaeModeInput() {
    return this._macsecPaeMode;
  }

  // macsec_profile - computed: true, optional: true, required: false
  private _macsecProfile?: string; 
  public get macsecProfile() {
    return this.getStringAttribute('macsec_profile');
  }
  public set macsecProfile(value: string) {
    this._macsecProfile = value;
  }
  public resetMacsecProfile() {
    this._macsecProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macsecProfileInput() {
    return this._macsecProfile;
  }

  // open_auth - computed: true, optional: true, required: false
  private _openAuth?: string; 
  public get openAuth() {
    return this.getStringAttribute('open_auth');
  }
  public set openAuth(value: string) {
    this._openAuth = value;
  }
  public resetOpenAuth() {
    this._openAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openAuthInput() {
    return this._openAuth;
  }

  // port_security_mode - computed: true, optional: true, required: false
  private _portSecurityMode?: string; 
  public get portSecurityMode() {
    return this.getStringAttribute('port_security_mode');
  }
  public set portSecurityMode(value: string) {
    this._portSecurityMode = value;
  }
  public resetPortSecurityMode() {
    this._portSecurityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSecurityModeInput() {
    return this._portSecurityMode;
  }

  // quarantine_vlan - computed: true, optional: true, required: false
  private _quarantineVlan?: string; 
  public get quarantineVlan() {
    return this.getStringAttribute('quarantine_vlan');
  }
  public set quarantineVlan(value: string) {
    this._quarantineVlan = value;
  }
  public resetQuarantineVlan() {
    this._quarantineVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineVlanInput() {
    return this._quarantineVlan;
  }

  // radius_timeout_overwrite - computed: true, optional: true, required: false
  private _radiusTimeoutOverwrite?: string; 
  public get radiusTimeoutOverwrite() {
    return this.getStringAttribute('radius_timeout_overwrite');
  }
  public set radiusTimeoutOverwrite(value: string) {
    this._radiusTimeoutOverwrite = value;
  }
  public resetRadiusTimeoutOverwrite() {
    this._radiusTimeoutOverwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusTimeoutOverwriteInput() {
    return this._radiusTimeoutOverwrite;
  }
}
export interface SwitchInterfaceQnqVlanMapping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#description SwitchInterface#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#id SwitchInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#match_c_vlan SwitchInterface#match_c_vlan}
  */
  readonly matchCVlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#new_s_vlan SwitchInterface#new_s_vlan}
  */
  readonly newSVlan?: number;
}

export function switchInterfaceQnqVlanMappingToTerraform(struct?: SwitchInterfaceQnqVlanMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.numberToTerraform(struct!.id),
    match_c_vlan: cdktf.numberToTerraform(struct!.matchCVlan),
    new_s_vlan: cdktf.numberToTerraform(struct!.newSVlan),
  }
}


export function switchInterfaceQnqVlanMappingToHclTerraform(struct?: SwitchInterfaceQnqVlanMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_c_vlan: {
      value: cdktf.numberToHclTerraform(struct!.matchCVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_s_vlan: {
      value: cdktf.numberToHclTerraform(struct!.newSVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchInterfaceQnqVlanMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchInterfaceQnqVlanMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._matchCVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCVlan = this._matchCVlan;
    }
    if (this._newSVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.newSVlan = this._newSVlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchInterfaceQnqVlanMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._id = undefined;
      this._matchCVlan = undefined;
      this._newSVlan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._id = value.id;
      this._matchCVlan = value.matchCVlan;
      this._newSVlan = value.newSVlan;
    }
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // match_c_vlan - computed: true, optional: true, required: false
  private _matchCVlan?: number; 
  public get matchCVlan() {
    return this.getNumberAttribute('match_c_vlan');
  }
  public set matchCVlan(value: number) {
    this._matchCVlan = value;
  }
  public resetMatchCVlan() {
    this._matchCVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCVlanInput() {
    return this._matchCVlan;
  }

  // new_s_vlan - computed: true, optional: true, required: false
  private _newSVlan?: number; 
  public get newSVlan() {
    return this.getNumberAttribute('new_s_vlan');
  }
  public set newSVlan(value: number) {
    this._newSVlan = value;
  }
  public resetNewSVlan() {
    this._newSVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newSVlanInput() {
    return this._newSVlan;
  }
}

export class SwitchInterfaceQnqVlanMappingList extends cdktf.ComplexList {
  public internalValue? : SwitchInterfaceQnqVlanMapping[] | cdktf.IResolvable

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
  public get(index: number): SwitchInterfaceQnqVlanMappingOutputReference {
    return new SwitchInterfaceQnqVlanMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchInterfaceQnq {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#add_inner SwitchInterface#add_inner}
  */
  readonly addInner?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#allowed_c_vlan SwitchInterface#allowed_c_vlan}
  */
  readonly allowedCVlan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#edge_type SwitchInterface#edge_type}
  */
  readonly edgeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#native_c_vlan SwitchInterface#native_c_vlan}
  */
  readonly nativeCVlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#priority SwitchInterface#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#remove_inner SwitchInterface#remove_inner}
  */
  readonly removeInner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#s_tag_priority SwitchInterface#s_tag_priority}
  */
  readonly sTagPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#status SwitchInterface#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#stp_qnq_admin SwitchInterface#stp_qnq_admin}
  */
  readonly stpQnqAdmin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#untagged_s_vlan SwitchInterface#untagged_s_vlan}
  */
  readonly untaggedSVlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#vlan_mapping_miss_drop SwitchInterface#vlan_mapping_miss_drop}
  */
  readonly vlanMappingMissDrop?: string;
  /**
  * vlan_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#vlan_mapping SwitchInterface#vlan_mapping}
  */
  readonly vlanMapping?: SwitchInterfaceQnqVlanMapping[] | cdktf.IResolvable;
}

export function switchInterfaceQnqToTerraform(struct?: SwitchInterfaceQnqOutputReference | SwitchInterfaceQnq): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_inner: cdktf.numberToTerraform(struct!.addInner),
    allowed_c_vlan: cdktf.stringToTerraform(struct!.allowedCVlan),
    edge_type: cdktf.stringToTerraform(struct!.edgeType),
    native_c_vlan: cdktf.numberToTerraform(struct!.nativeCVlan),
    priority: cdktf.stringToTerraform(struct!.priority),
    remove_inner: cdktf.stringToTerraform(struct!.removeInner),
    s_tag_priority: cdktf.numberToTerraform(struct!.sTagPriority),
    status: cdktf.stringToTerraform(struct!.status),
    stp_qnq_admin: cdktf.stringToTerraform(struct!.stpQnqAdmin),
    untagged_s_vlan: cdktf.numberToTerraform(struct!.untaggedSVlan),
    vlan_mapping_miss_drop: cdktf.stringToTerraform(struct!.vlanMappingMissDrop),
    vlan_mapping: cdktf.listMapper(switchInterfaceQnqVlanMappingToTerraform, true)(struct!.vlanMapping),
  }
}


export function switchInterfaceQnqToHclTerraform(struct?: SwitchInterfaceQnqOutputReference | SwitchInterfaceQnq): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_inner: {
      value: cdktf.numberToHclTerraform(struct!.addInner),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allowed_c_vlan: {
      value: cdktf.stringToHclTerraform(struct!.allowedCVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    edge_type: {
      value: cdktf.stringToHclTerraform(struct!.edgeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    native_c_vlan: {
      value: cdktf.numberToHclTerraform(struct!.nativeCVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_inner: {
      value: cdktf.stringToHclTerraform(struct!.removeInner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s_tag_priority: {
      value: cdktf.numberToHclTerraform(struct!.sTagPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stp_qnq_admin: {
      value: cdktf.stringToHclTerraform(struct!.stpQnqAdmin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    untagged_s_vlan: {
      value: cdktf.numberToHclTerraform(struct!.untaggedSVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan_mapping_miss_drop: {
      value: cdktf.stringToHclTerraform(struct!.vlanMappingMissDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_mapping: {
      value: cdktf.listMapperHcl(switchInterfaceQnqVlanMappingToHclTerraform, true)(struct!.vlanMapping),
      isBlock: true,
      type: "list",
      storageClassType: "SwitchInterfaceQnqVlanMappingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchInterfaceQnqOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwitchInterfaceQnq | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addInner !== undefined) {
      hasAnyValues = true;
      internalValueResult.addInner = this._addInner;
    }
    if (this._allowedCVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedCVlan = this._allowedCVlan;
    }
    if (this._edgeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeType = this._edgeType;
    }
    if (this._nativeCVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.nativeCVlan = this._nativeCVlan;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._removeInner !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeInner = this._removeInner;
    }
    if (this._sTagPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.sTagPriority = this._sTagPriority;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._stpQnqAdmin !== undefined) {
      hasAnyValues = true;
      internalValueResult.stpQnqAdmin = this._stpQnqAdmin;
    }
    if (this._untaggedSVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.untaggedSVlan = this._untaggedSVlan;
    }
    if (this._vlanMappingMissDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanMappingMissDrop = this._vlanMappingMissDrop;
    }
    if (this._vlanMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanMapping = this._vlanMapping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchInterfaceQnq | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addInner = undefined;
      this._allowedCVlan = undefined;
      this._edgeType = undefined;
      this._nativeCVlan = undefined;
      this._priority = undefined;
      this._removeInner = undefined;
      this._sTagPriority = undefined;
      this._status = undefined;
      this._stpQnqAdmin = undefined;
      this._untaggedSVlan = undefined;
      this._vlanMappingMissDrop = undefined;
      this._vlanMapping.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addInner = value.addInner;
      this._allowedCVlan = value.allowedCVlan;
      this._edgeType = value.edgeType;
      this._nativeCVlan = value.nativeCVlan;
      this._priority = value.priority;
      this._removeInner = value.removeInner;
      this._sTagPriority = value.sTagPriority;
      this._status = value.status;
      this._stpQnqAdmin = value.stpQnqAdmin;
      this._untaggedSVlan = value.untaggedSVlan;
      this._vlanMappingMissDrop = value.vlanMappingMissDrop;
      this._vlanMapping.internalValue = value.vlanMapping;
    }
  }

  // add_inner - computed: true, optional: true, required: false
  private _addInner?: number; 
  public get addInner() {
    return this.getNumberAttribute('add_inner');
  }
  public set addInner(value: number) {
    this._addInner = value;
  }
  public resetAddInner() {
    this._addInner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInnerInput() {
    return this._addInner;
  }

  // allowed_c_vlan - computed: true, optional: true, required: false
  private _allowedCVlan?: string; 
  public get allowedCVlan() {
    return this.getStringAttribute('allowed_c_vlan');
  }
  public set allowedCVlan(value: string) {
    this._allowedCVlan = value;
  }
  public resetAllowedCVlan() {
    this._allowedCVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCVlanInput() {
    return this._allowedCVlan;
  }

  // edge_type - computed: true, optional: true, required: false
  private _edgeType?: string; 
  public get edgeType() {
    return this.getStringAttribute('edge_type');
  }
  public set edgeType(value: string) {
    this._edgeType = value;
  }
  public resetEdgeType() {
    this._edgeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeTypeInput() {
    return this._edgeType;
  }

  // native_c_vlan - computed: true, optional: true, required: false
  private _nativeCVlan?: number; 
  public get nativeCVlan() {
    return this.getNumberAttribute('native_c_vlan');
  }
  public set nativeCVlan(value: number) {
    this._nativeCVlan = value;
  }
  public resetNativeCVlan() {
    this._nativeCVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeCVlanInput() {
    return this._nativeCVlan;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // remove_inner - computed: true, optional: true, required: false
  private _removeInner?: string; 
  public get removeInner() {
    return this.getStringAttribute('remove_inner');
  }
  public set removeInner(value: string) {
    this._removeInner = value;
  }
  public resetRemoveInner() {
    this._removeInner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInnerInput() {
    return this._removeInner;
  }

  // s_tag_priority - computed: true, optional: true, required: false
  private _sTagPriority?: number; 
  public get sTagPriority() {
    return this.getNumberAttribute('s_tag_priority');
  }
  public set sTagPriority(value: number) {
    this._sTagPriority = value;
  }
  public resetSTagPriority() {
    this._sTagPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sTagPriorityInput() {
    return this._sTagPriority;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // stp_qnq_admin - computed: true, optional: true, required: false
  private _stpQnqAdmin?: string; 
  public get stpQnqAdmin() {
    return this.getStringAttribute('stp_qnq_admin');
  }
  public set stpQnqAdmin(value: string) {
    this._stpQnqAdmin = value;
  }
  public resetStpQnqAdmin() {
    this._stpQnqAdmin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpQnqAdminInput() {
    return this._stpQnqAdmin;
  }

  // untagged_s_vlan - computed: true, optional: true, required: false
  private _untaggedSVlan?: number; 
  public get untaggedSVlan() {
    return this.getNumberAttribute('untagged_s_vlan');
  }
  public set untaggedSVlan(value: number) {
    this._untaggedSVlan = value;
  }
  public resetUntaggedSVlan() {
    this._untaggedSVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untaggedSVlanInput() {
    return this._untaggedSVlan;
  }

  // vlan_mapping_miss_drop - computed: true, optional: true, required: false
  private _vlanMappingMissDrop?: string; 
  public get vlanMappingMissDrop() {
    return this.getStringAttribute('vlan_mapping_miss_drop');
  }
  public set vlanMappingMissDrop(value: string) {
    this._vlanMappingMissDrop = value;
  }
  public resetVlanMappingMissDrop() {
    this._vlanMappingMissDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanMappingMissDropInput() {
    return this._vlanMappingMissDrop;
  }

  // vlan_mapping - computed: false, optional: true, required: false
  private _vlanMapping = new SwitchInterfaceQnqVlanMappingList(this, "vlan_mapping", false);
  public get vlanMapping() {
    return this._vlanMapping;
  }
  public putVlanMapping(value: SwitchInterfaceQnqVlanMapping[] | cdktf.IResolvable) {
    this._vlanMapping.internalValue = value;
  }
  public resetVlanMapping() {
    this._vlanMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanMappingInput() {
    return this._vlanMapping.internalValue;
  }
}
export interface SwitchInterfaceRaguard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#id SwitchInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#raguard_policy SwitchInterface#raguard_policy}
  */
  readonly raguardPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#vlan_list SwitchInterface#vlan_list}
  */
  readonly vlanList?: string;
}

export function switchInterfaceRaguardToTerraform(struct?: SwitchInterfaceRaguard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    raguard_policy: cdktf.stringToTerraform(struct!.raguardPolicy),
    vlan_list: cdktf.stringToTerraform(struct!.vlanList),
  }
}


export function switchInterfaceRaguardToHclTerraform(struct?: SwitchInterfaceRaguard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    raguard_policy: {
      value: cdktf.stringToHclTerraform(struct!.raguardPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_list: {
      value: cdktf.stringToHclTerraform(struct!.vlanList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchInterfaceRaguardOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchInterfaceRaguard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._raguardPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.raguardPolicy = this._raguardPolicy;
    }
    if (this._vlanList !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanList = this._vlanList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchInterfaceRaguard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._raguardPolicy = undefined;
      this._vlanList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._raguardPolicy = value.raguardPolicy;
      this._vlanList = value.vlanList;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // raguard_policy - computed: true, optional: true, required: false
  private _raguardPolicy?: string; 
  public get raguardPolicy() {
    return this.getStringAttribute('raguard_policy');
  }
  public set raguardPolicy(value: string) {
    this._raguardPolicy = value;
  }
  public resetRaguardPolicy() {
    this._raguardPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get raguardPolicyInput() {
    return this._raguardPolicy;
  }

  // vlan_list - computed: true, optional: true, required: false
  private _vlanList?: string; 
  public get vlanList() {
    return this.getStringAttribute('vlan_list');
  }
  public set vlanList(value: string) {
    this._vlanList = value;
  }
  public resetVlanList() {
    this._vlanList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanListInput() {
    return this._vlanList;
  }
}

export class SwitchInterfaceRaguardList extends cdktf.ComplexList {
  public internalValue? : SwitchInterfaceRaguard[] | cdktf.IResolvable

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
  public get(index: number): SwitchInterfaceRaguardOutputReference {
    return new SwitchInterfaceRaguardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchInterfaceSecurityGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#name SwitchInterface#name}
  */
  readonly name?: string;
}

export function switchInterfaceSecurityGroupsToTerraform(struct?: SwitchInterfaceSecurityGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function switchInterfaceSecurityGroupsToHclTerraform(struct?: SwitchInterfaceSecurityGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchInterfaceSecurityGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchInterfaceSecurityGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchInterfaceSecurityGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: true, optional: true, required: false
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
}

export class SwitchInterfaceSecurityGroupsList extends cdktf.ComplexList {
  public internalValue? : SwitchInterfaceSecurityGroups[] | cdktf.IResolvable

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
  public get(index: number): SwitchInterfaceSecurityGroupsOutputReference {
    return new SwitchInterfaceSecurityGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchInterfaceVlanMapping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#action SwitchInterface#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#description SwitchInterface#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#direction SwitchInterface#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#id SwitchInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#match_c_vlan SwitchInterface#match_c_vlan}
  */
  readonly matchCVlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#match_s_vlan SwitchInterface#match_s_vlan}
  */
  readonly matchSVlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#new_s_vlan SwitchInterface#new_s_vlan}
  */
  readonly newSVlan?: number;
}

export function switchInterfaceVlanMappingToTerraform(struct?: SwitchInterfaceVlanMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    description: cdktf.stringToTerraform(struct!.description),
    direction: cdktf.stringToTerraform(struct!.direction),
    id: cdktf.numberToTerraform(struct!.id),
    match_c_vlan: cdktf.numberToTerraform(struct!.matchCVlan),
    match_s_vlan: cdktf.numberToTerraform(struct!.matchSVlan),
    new_s_vlan: cdktf.numberToTerraform(struct!.newSVlan),
  }
}


export function switchInterfaceVlanMappingToHclTerraform(struct?: SwitchInterfaceVlanMapping | cdktf.IResolvable): any {
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
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_c_vlan: {
      value: cdktf.numberToHclTerraform(struct!.matchCVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_s_vlan: {
      value: cdktf.numberToHclTerraform(struct!.matchSVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_s_vlan: {
      value: cdktf.numberToHclTerraform(struct!.newSVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchInterfaceVlanMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchInterfaceVlanMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._matchCVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCVlan = this._matchCVlan;
    }
    if (this._matchSVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchSVlan = this._matchSVlan;
    }
    if (this._newSVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.newSVlan = this._newSVlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchInterfaceVlanMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._description = undefined;
      this._direction = undefined;
      this._id = undefined;
      this._matchCVlan = undefined;
      this._matchSVlan = undefined;
      this._newSVlan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._description = value.description;
      this._direction = value.direction;
      this._id = value.id;
      this._matchCVlan = value.matchCVlan;
      this._matchSVlan = value.matchSVlan;
      this._newSVlan = value.newSVlan;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // direction - computed: true, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // match_c_vlan - computed: true, optional: true, required: false
  private _matchCVlan?: number; 
  public get matchCVlan() {
    return this.getNumberAttribute('match_c_vlan');
  }
  public set matchCVlan(value: number) {
    this._matchCVlan = value;
  }
  public resetMatchCVlan() {
    this._matchCVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCVlanInput() {
    return this._matchCVlan;
  }

  // match_s_vlan - computed: true, optional: true, required: false
  private _matchSVlan?: number; 
  public get matchSVlan() {
    return this.getNumberAttribute('match_s_vlan');
  }
  public set matchSVlan(value: number) {
    this._matchSVlan = value;
  }
  public resetMatchSVlan() {
    this._matchSVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchSVlanInput() {
    return this._matchSVlan;
  }

  // new_s_vlan - computed: true, optional: true, required: false
  private _newSVlan?: number; 
  public get newSVlan() {
    return this.getNumberAttribute('new_s_vlan');
  }
  public set newSVlan(value: number) {
    this._newSVlan = value;
  }
  public resetNewSVlan() {
    this._newSVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newSVlanInput() {
    return this._newSVlan;
  }
}

export class SwitchInterfaceVlanMappingList extends cdktf.ComplexList {
  public internalValue? : SwitchInterfaceVlanMapping[] | cdktf.IResolvable

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
  public get(index: number): SwitchInterfaceVlanMappingOutputReference {
    return new SwitchInterfaceVlanMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface fortiswitch_switch_interface}
*/
export class SwitchInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_switch_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchInterface to import
  * @param importFromId The id of the existing SwitchInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_switch_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_interface fortiswitch_switch_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchInterfaceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchInterfaceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_switch_interface',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6',
        providerVersionConstraint: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowArpMonitor = config.allowArpMonitor;
    this._allowedSubVlans = config.allowedSubVlans;
    this._allowedVlans = config.allowedVlans;
    this._arpInspectionTrust = config.arpInspectionTrust;
    this._autoDiscoveryFortilink = config.autoDiscoveryFortilink;
    this._autoDiscoveryFortilinkPacketInterval = config.autoDiscoveryFortilinkPacketInterval;
    this._defaultCos = config.defaultCos;
    this._description = config.description;
    this._dhcpSnoopLearningLimit = config.dhcpSnoopLearningLimit;
    this._dhcpSnoopLearningLimitCheck = config.dhcpSnoopLearningLimitCheck;
    this._dhcpSnoopOption82Trust = config.dhcpSnoopOption82Trust;
    this._dhcpSnooping = config.dhcpSnooping;
    this._discardMode = config.discardMode;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._edgePort = config.edgePort;
    this._filterSubVlans = config.filterSubVlans;
    this._fortilinkL3Mode = config.fortilinkL3Mode;
    this._id = config.id;
    this._igmpSnoopingFloodReports = config.igmpSnoopingFloodReports;
    this._interfaceMode = config.interfaceMode;
    this._ipMacBinding = config.ipMacBinding;
    this._learningLimit = config.learningLimit;
    this._learningLimitAction = config.learningLimitAction;
    this._logMacEvent = config.logMacEvent;
    this._loopGuard = config.loopGuard;
    this._loopGuardMacMoveThreshold = config.loopGuardMacMoveThreshold;
    this._loopGuardTimeout = config.loopGuardTimeout;
    this._mcastSnoopingFloodTraffic = config.mcastSnoopingFloodTraffic;
    this._mldSnoopingFloodReports = config.mldSnoopingFloodReports;
    this._nac = config.nac;
    this._name = config.name;
    this._nativeVlan = config.nativeVlan;
    this._packetSampleRate = config.packetSampleRate;
    this._packetSampler = config.packetSampler;
    this._primaryVlan = config.primaryVlan;
    this._privateVlan = config.privateVlan;
    this._privateVlanPortType = config.privateVlanPortType;
    this._ptpPolicy = config.ptpPolicy;
    this._ptpStatus = config.ptpStatus;
    this._qosPolicy = config.qosPolicy;
    this._rpvstPort = config.rpvstPort;
    this._sampleDirection = config.sampleDirection;
    this._sflowCounterInterval = config.sflowCounterInterval;
    this._snmpIndex = config.snmpIndex;
    this._stickyMac = config.stickyMac;
    this._stpBpduGuard = config.stpBpduGuard;
    this._stpBpduGuardTimeout = config.stpBpduGuardTimeout;
    this._stpLoopProtection = config.stpLoopProtection;
    this._stpRootGuard = config.stpRootGuard;
    this._stpState = config.stpState;
    this._subVlan = config.subVlan;
    this._switchPortMode = config.switchPortMode;
    this._trustDot1PMap = config.trustDot1PMap;
    this._trustIpDscpMap = config.trustIpDscpMap;
    this._type = config.type;
    this._untaggedVlans = config.untaggedVlans;
    this._vlanMappingMissDrop = config.vlanMappingMissDrop;
    this._vlanTpid = config.vlanTpid;
    this._vlanTrafficType = config.vlanTrafficType;
    this._dhcpSnoopOption82Override.internalValue = config.dhcpSnoopOption82Override;
    this._portSecurity.internalValue = config.portSecurity;
    this._qnq.internalValue = config.qnq;
    this._raguard.internalValue = config.raguard;
    this._securityGroups.internalValue = config.securityGroups;
    this._vlanMapping.internalValue = config.vlanMapping;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_arp_monitor - computed: true, optional: true, required: false
  private _allowArpMonitor?: string; 
  public get allowArpMonitor() {
    return this.getStringAttribute('allow_arp_monitor');
  }
  public set allowArpMonitor(value: string) {
    this._allowArpMonitor = value;
  }
  public resetAllowArpMonitor() {
    this._allowArpMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowArpMonitorInput() {
    return this._allowArpMonitor;
  }

  // allowed_sub_vlans - computed: true, optional: true, required: false
  private _allowedSubVlans?: string; 
  public get allowedSubVlans() {
    return this.getStringAttribute('allowed_sub_vlans');
  }
  public set allowedSubVlans(value: string) {
    this._allowedSubVlans = value;
  }
  public resetAllowedSubVlans() {
    this._allowedSubVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedSubVlansInput() {
    return this._allowedSubVlans;
  }

  // allowed_vlans - computed: true, optional: true, required: false
  private _allowedVlans?: string; 
  public get allowedVlans() {
    return this.getStringAttribute('allowed_vlans');
  }
  public set allowedVlans(value: string) {
    this._allowedVlans = value;
  }
  public resetAllowedVlans() {
    this._allowedVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedVlansInput() {
    return this._allowedVlans;
  }

  // arp_inspection_trust - computed: true, optional: true, required: false
  private _arpInspectionTrust?: string; 
  public get arpInspectionTrust() {
    return this.getStringAttribute('arp_inspection_trust');
  }
  public set arpInspectionTrust(value: string) {
    this._arpInspectionTrust = value;
  }
  public resetArpInspectionTrust() {
    this._arpInspectionTrust = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpInspectionTrustInput() {
    return this._arpInspectionTrust;
  }

  // auto_discovery_fortilink - computed: true, optional: true, required: false
  private _autoDiscoveryFortilink?: string; 
  public get autoDiscoveryFortilink() {
    return this.getStringAttribute('auto_discovery_fortilink');
  }
  public set autoDiscoveryFortilink(value: string) {
    this._autoDiscoveryFortilink = value;
  }
  public resetAutoDiscoveryFortilink() {
    this._autoDiscoveryFortilink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDiscoveryFortilinkInput() {
    return this._autoDiscoveryFortilink;
  }

  // auto_discovery_fortilink_packet_interval - computed: true, optional: true, required: false
  private _autoDiscoveryFortilinkPacketInterval?: number; 
  public get autoDiscoveryFortilinkPacketInterval() {
    return this.getNumberAttribute('auto_discovery_fortilink_packet_interval');
  }
  public set autoDiscoveryFortilinkPacketInterval(value: number) {
    this._autoDiscoveryFortilinkPacketInterval = value;
  }
  public resetAutoDiscoveryFortilinkPacketInterval() {
    this._autoDiscoveryFortilinkPacketInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDiscoveryFortilinkPacketIntervalInput() {
    return this._autoDiscoveryFortilinkPacketInterval;
  }

  // default_cos - computed: true, optional: true, required: false
  private _defaultCos?: number; 
  public get defaultCos() {
    return this.getNumberAttribute('default_cos');
  }
  public set defaultCos(value: number) {
    this._defaultCos = value;
  }
  public resetDefaultCos() {
    this._defaultCos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCosInput() {
    return this._defaultCos;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // dhcp_snoop_learning_limit - computed: true, optional: true, required: false
  private _dhcpSnoopLearningLimit?: number; 
  public get dhcpSnoopLearningLimit() {
    return this.getNumberAttribute('dhcp_snoop_learning_limit');
  }
  public set dhcpSnoopLearningLimit(value: number) {
    this._dhcpSnoopLearningLimit = value;
  }
  public resetDhcpSnoopLearningLimit() {
    this._dhcpSnoopLearningLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpSnoopLearningLimitInput() {
    return this._dhcpSnoopLearningLimit;
  }

  // dhcp_snoop_learning_limit_check - computed: true, optional: true, required: false
  private _dhcpSnoopLearningLimitCheck?: string; 
  public get dhcpSnoopLearningLimitCheck() {
    return this.getStringAttribute('dhcp_snoop_learning_limit_check');
  }
  public set dhcpSnoopLearningLimitCheck(value: string) {
    this._dhcpSnoopLearningLimitCheck = value;
  }
  public resetDhcpSnoopLearningLimitCheck() {
    this._dhcpSnoopLearningLimitCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpSnoopLearningLimitCheckInput() {
    return this._dhcpSnoopLearningLimitCheck;
  }

  // dhcp_snoop_option82_trust - computed: true, optional: true, required: false
  private _dhcpSnoopOption82Trust?: string; 
  public get dhcpSnoopOption82Trust() {
    return this.getStringAttribute('dhcp_snoop_option82_trust');
  }
  public set dhcpSnoopOption82Trust(value: string) {
    this._dhcpSnoopOption82Trust = value;
  }
  public resetDhcpSnoopOption82Trust() {
    this._dhcpSnoopOption82Trust = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpSnoopOption82TrustInput() {
    return this._dhcpSnoopOption82Trust;
  }

  // dhcp_snooping - computed: true, optional: true, required: false
  private _dhcpSnooping?: string; 
  public get dhcpSnooping() {
    return this.getStringAttribute('dhcp_snooping');
  }
  public set dhcpSnooping(value: string) {
    this._dhcpSnooping = value;
  }
  public resetDhcpSnooping() {
    this._dhcpSnooping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpSnoopingInput() {
    return this._dhcpSnooping;
  }

  // discard_mode - computed: true, optional: true, required: false
  private _discardMode?: string; 
  public get discardMode() {
    return this.getStringAttribute('discard_mode');
  }
  public set discardMode(value: string) {
    this._discardMode = value;
  }
  public resetDiscardMode() {
    this._discardMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discardModeInput() {
    return this._discardMode;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // edge_port - computed: true, optional: true, required: false
  private _edgePort?: string; 
  public get edgePort() {
    return this.getStringAttribute('edge_port');
  }
  public set edgePort(value: string) {
    this._edgePort = value;
  }
  public resetEdgePort() {
    this._edgePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgePortInput() {
    return this._edgePort;
  }

  // filter_sub_vlans - computed: true, optional: true, required: false
  private _filterSubVlans?: string; 
  public get filterSubVlans() {
    return this.getStringAttribute('filter_sub_vlans');
  }
  public set filterSubVlans(value: string) {
    this._filterSubVlans = value;
  }
  public resetFilterSubVlans() {
    this._filterSubVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSubVlansInput() {
    return this._filterSubVlans;
  }

  // fortilink_l3_mode - computed: true, optional: true, required: false
  private _fortilinkL3Mode?: string; 
  public get fortilinkL3Mode() {
    return this.getStringAttribute('fortilink_l3_mode');
  }
  public set fortilinkL3Mode(value: string) {
    this._fortilinkL3Mode = value;
  }
  public resetFortilinkL3Mode() {
    this._fortilinkL3Mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortilinkL3ModeInput() {
    return this._fortilinkL3Mode;
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

  // igmp_snooping_flood_reports - computed: true, optional: true, required: false
  private _igmpSnoopingFloodReports?: string; 
  public get igmpSnoopingFloodReports() {
    return this.getStringAttribute('igmp_snooping_flood_reports');
  }
  public set igmpSnoopingFloodReports(value: string) {
    this._igmpSnoopingFloodReports = value;
  }
  public resetIgmpSnoopingFloodReports() {
    this._igmpSnoopingFloodReports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpSnoopingFloodReportsInput() {
    return this._igmpSnoopingFloodReports;
  }

  // interface_mode - computed: true, optional: true, required: false
  private _interfaceMode?: string; 
  public get interfaceMode() {
    return this.getStringAttribute('interface_mode');
  }
  public set interfaceMode(value: string) {
    this._interfaceMode = value;
  }
  public resetInterfaceMode() {
    this._interfaceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceModeInput() {
    return this._interfaceMode;
  }

  // ip_mac_binding - computed: true, optional: true, required: false
  private _ipMacBinding?: string; 
  public get ipMacBinding() {
    return this.getStringAttribute('ip_mac_binding');
  }
  public set ipMacBinding(value: string) {
    this._ipMacBinding = value;
  }
  public resetIpMacBinding() {
    this._ipMacBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMacBindingInput() {
    return this._ipMacBinding;
  }

  // learning_limit - computed: true, optional: true, required: false
  private _learningLimit?: number; 
  public get learningLimit() {
    return this.getNumberAttribute('learning_limit');
  }
  public set learningLimit(value: number) {
    this._learningLimit = value;
  }
  public resetLearningLimit() {
    this._learningLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learningLimitInput() {
    return this._learningLimit;
  }

  // learning_limit_action - computed: true, optional: true, required: false
  private _learningLimitAction?: string; 
  public get learningLimitAction() {
    return this.getStringAttribute('learning_limit_action');
  }
  public set learningLimitAction(value: string) {
    this._learningLimitAction = value;
  }
  public resetLearningLimitAction() {
    this._learningLimitAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learningLimitActionInput() {
    return this._learningLimitAction;
  }

  // log_mac_event - computed: true, optional: true, required: false
  private _logMacEvent?: string; 
  public get logMacEvent() {
    return this.getStringAttribute('log_mac_event');
  }
  public set logMacEvent(value: string) {
    this._logMacEvent = value;
  }
  public resetLogMacEvent() {
    this._logMacEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logMacEventInput() {
    return this._logMacEvent;
  }

  // loop_guard - computed: true, optional: true, required: false
  private _loopGuard?: string; 
  public get loopGuard() {
    return this.getStringAttribute('loop_guard');
  }
  public set loopGuard(value: string) {
    this._loopGuard = value;
  }
  public resetLoopGuard() {
    this._loopGuard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopGuardInput() {
    return this._loopGuard;
  }

  // loop_guard_mac_move_threshold - computed: true, optional: true, required: false
  private _loopGuardMacMoveThreshold?: number; 
  public get loopGuardMacMoveThreshold() {
    return this.getNumberAttribute('loop_guard_mac_move_threshold');
  }
  public set loopGuardMacMoveThreshold(value: number) {
    this._loopGuardMacMoveThreshold = value;
  }
  public resetLoopGuardMacMoveThreshold() {
    this._loopGuardMacMoveThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopGuardMacMoveThresholdInput() {
    return this._loopGuardMacMoveThreshold;
  }

  // loop_guard_timeout - computed: true, optional: true, required: false
  private _loopGuardTimeout?: number; 
  public get loopGuardTimeout() {
    return this.getNumberAttribute('loop_guard_timeout');
  }
  public set loopGuardTimeout(value: number) {
    this._loopGuardTimeout = value;
  }
  public resetLoopGuardTimeout() {
    this._loopGuardTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopGuardTimeoutInput() {
    return this._loopGuardTimeout;
  }

  // mcast_snooping_flood_traffic - computed: true, optional: true, required: false
  private _mcastSnoopingFloodTraffic?: string; 
  public get mcastSnoopingFloodTraffic() {
    return this.getStringAttribute('mcast_snooping_flood_traffic');
  }
  public set mcastSnoopingFloodTraffic(value: string) {
    this._mcastSnoopingFloodTraffic = value;
  }
  public resetMcastSnoopingFloodTraffic() {
    this._mcastSnoopingFloodTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcastSnoopingFloodTrafficInput() {
    return this._mcastSnoopingFloodTraffic;
  }

  // mld_snooping_flood_reports - computed: true, optional: true, required: false
  private _mldSnoopingFloodReports?: string; 
  public get mldSnoopingFloodReports() {
    return this.getStringAttribute('mld_snooping_flood_reports');
  }
  public set mldSnoopingFloodReports(value: string) {
    this._mldSnoopingFloodReports = value;
  }
  public resetMldSnoopingFloodReports() {
    this._mldSnoopingFloodReports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mldSnoopingFloodReportsInput() {
    return this._mldSnoopingFloodReports;
  }

  // nac - computed: true, optional: true, required: false
  private _nac?: string; 
  public get nac() {
    return this.getStringAttribute('nac');
  }
  public set nac(value: string) {
    this._nac = value;
  }
  public resetNac() {
    this._nac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nacInput() {
    return this._nac;
  }

  // name - computed: true, optional: true, required: false
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

  // native_vlan - computed: true, optional: true, required: false
  private _nativeVlan?: number; 
  public get nativeVlan() {
    return this.getNumberAttribute('native_vlan');
  }
  public set nativeVlan(value: number) {
    this._nativeVlan = value;
  }
  public resetNativeVlan() {
    this._nativeVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeVlanInput() {
    return this._nativeVlan;
  }

  // packet_sample_rate - computed: true, optional: true, required: false
  private _packetSampleRate?: number; 
  public get packetSampleRate() {
    return this.getNumberAttribute('packet_sample_rate');
  }
  public set packetSampleRate(value: number) {
    this._packetSampleRate = value;
  }
  public resetPacketSampleRate() {
    this._packetSampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetSampleRateInput() {
    return this._packetSampleRate;
  }

  // packet_sampler - computed: true, optional: true, required: false
  private _packetSampler?: string; 
  public get packetSampler() {
    return this.getStringAttribute('packet_sampler');
  }
  public set packetSampler(value: string) {
    this._packetSampler = value;
  }
  public resetPacketSampler() {
    this._packetSampler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetSamplerInput() {
    return this._packetSampler;
  }

  // primary_vlan - computed: true, optional: true, required: false
  private _primaryVlan?: number; 
  public get primaryVlan() {
    return this.getNumberAttribute('primary_vlan');
  }
  public set primaryVlan(value: number) {
    this._primaryVlan = value;
  }
  public resetPrimaryVlan() {
    this._primaryVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryVlanInput() {
    return this._primaryVlan;
  }

  // private_vlan - computed: true, optional: true, required: false
  private _privateVlan?: string; 
  public get privateVlan() {
    return this.getStringAttribute('private_vlan');
  }
  public set privateVlan(value: string) {
    this._privateVlan = value;
  }
  public resetPrivateVlan() {
    this._privateVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateVlanInput() {
    return this._privateVlan;
  }

  // private_vlan_port_type - computed: true, optional: true, required: false
  private _privateVlanPortType?: number; 
  public get privateVlanPortType() {
    return this.getNumberAttribute('private_vlan_port_type');
  }
  public set privateVlanPortType(value: number) {
    this._privateVlanPortType = value;
  }
  public resetPrivateVlanPortType() {
    this._privateVlanPortType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateVlanPortTypeInput() {
    return this._privateVlanPortType;
  }

  // ptp_policy - computed: true, optional: true, required: false
  private _ptpPolicy?: string; 
  public get ptpPolicy() {
    return this.getStringAttribute('ptp_policy');
  }
  public set ptpPolicy(value: string) {
    this._ptpPolicy = value;
  }
  public resetPtpPolicy() {
    this._ptpPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ptpPolicyInput() {
    return this._ptpPolicy;
  }

  // ptp_status - computed: true, optional: true, required: false
  private _ptpStatus?: string; 
  public get ptpStatus() {
    return this.getStringAttribute('ptp_status');
  }
  public set ptpStatus(value: string) {
    this._ptpStatus = value;
  }
  public resetPtpStatus() {
    this._ptpStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ptpStatusInput() {
    return this._ptpStatus;
  }

  // qos_policy - computed: true, optional: true, required: false
  private _qosPolicy?: string; 
  public get qosPolicy() {
    return this.getStringAttribute('qos_policy');
  }
  public set qosPolicy(value: string) {
    this._qosPolicy = value;
  }
  public resetQosPolicy() {
    this._qosPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosPolicyInput() {
    return this._qosPolicy;
  }

  // rpvst_port - computed: true, optional: true, required: false
  private _rpvstPort?: string; 
  public get rpvstPort() {
    return this.getStringAttribute('rpvst_port');
  }
  public set rpvstPort(value: string) {
    this._rpvstPort = value;
  }
  public resetRpvstPort() {
    this._rpvstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpvstPortInput() {
    return this._rpvstPort;
  }

  // sample_direction - computed: true, optional: true, required: false
  private _sampleDirection?: string; 
  public get sampleDirection() {
    return this.getStringAttribute('sample_direction');
  }
  public set sampleDirection(value: string) {
    this._sampleDirection = value;
  }
  public resetSampleDirection() {
    this._sampleDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleDirectionInput() {
    return this._sampleDirection;
  }

  // sflow_counter_interval - computed: true, optional: true, required: false
  private _sflowCounterInterval?: number; 
  public get sflowCounterInterval() {
    return this.getNumberAttribute('sflow_counter_interval');
  }
  public set sflowCounterInterval(value: number) {
    this._sflowCounterInterval = value;
  }
  public resetSflowCounterInterval() {
    this._sflowCounterInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowCounterIntervalInput() {
    return this._sflowCounterInterval;
  }

  // snmp_index - computed: true, optional: true, required: false
  private _snmpIndex?: number; 
  public get snmpIndex() {
    return this.getNumberAttribute('snmp_index');
  }
  public set snmpIndex(value: number) {
    this._snmpIndex = value;
  }
  public resetSnmpIndex() {
    this._snmpIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpIndexInput() {
    return this._snmpIndex;
  }

  // sticky_mac - computed: true, optional: true, required: false
  private _stickyMac?: string; 
  public get stickyMac() {
    return this.getStringAttribute('sticky_mac');
  }
  public set stickyMac(value: string) {
    this._stickyMac = value;
  }
  public resetStickyMac() {
    this._stickyMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickyMacInput() {
    return this._stickyMac;
  }

  // stp_bpdu_guard - computed: true, optional: true, required: false
  private _stpBpduGuard?: string; 
  public get stpBpduGuard() {
    return this.getStringAttribute('stp_bpdu_guard');
  }
  public set stpBpduGuard(value: string) {
    this._stpBpduGuard = value;
  }
  public resetStpBpduGuard() {
    this._stpBpduGuard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpBpduGuardInput() {
    return this._stpBpduGuard;
  }

  // stp_bpdu_guard_timeout - computed: true, optional: true, required: false
  private _stpBpduGuardTimeout?: number; 
  public get stpBpduGuardTimeout() {
    return this.getNumberAttribute('stp_bpdu_guard_timeout');
  }
  public set stpBpduGuardTimeout(value: number) {
    this._stpBpduGuardTimeout = value;
  }
  public resetStpBpduGuardTimeout() {
    this._stpBpduGuardTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpBpduGuardTimeoutInput() {
    return this._stpBpduGuardTimeout;
  }

  // stp_loop_protection - computed: true, optional: true, required: false
  private _stpLoopProtection?: string; 
  public get stpLoopProtection() {
    return this.getStringAttribute('stp_loop_protection');
  }
  public set stpLoopProtection(value: string) {
    this._stpLoopProtection = value;
  }
  public resetStpLoopProtection() {
    this._stpLoopProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpLoopProtectionInput() {
    return this._stpLoopProtection;
  }

  // stp_root_guard - computed: true, optional: true, required: false
  private _stpRootGuard?: string; 
  public get stpRootGuard() {
    return this.getStringAttribute('stp_root_guard');
  }
  public set stpRootGuard(value: string) {
    this._stpRootGuard = value;
  }
  public resetStpRootGuard() {
    this._stpRootGuard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpRootGuardInput() {
    return this._stpRootGuard;
  }

  // stp_state - computed: true, optional: true, required: false
  private _stpState?: string; 
  public get stpState() {
    return this.getStringAttribute('stp_state');
  }
  public set stpState(value: string) {
    this._stpState = value;
  }
  public resetStpState() {
    this._stpState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpStateInput() {
    return this._stpState;
  }

  // sub_vlan - computed: true, optional: true, required: false
  private _subVlan?: number; 
  public get subVlan() {
    return this.getNumberAttribute('sub_vlan');
  }
  public set subVlan(value: number) {
    this._subVlan = value;
  }
  public resetSubVlan() {
    this._subVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subVlanInput() {
    return this._subVlan;
  }

  // switch_port_mode - computed: true, optional: true, required: false
  private _switchPortMode?: string; 
  public get switchPortMode() {
    return this.getStringAttribute('switch_port_mode');
  }
  public set switchPortMode(value: string) {
    this._switchPortMode = value;
  }
  public resetSwitchPortMode() {
    this._switchPortMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchPortModeInput() {
    return this._switchPortMode;
  }

  // trust_dot1p_map - computed: true, optional: true, required: false
  private _trustDot1PMap?: string; 
  public get trustDot1PMap() {
    return this.getStringAttribute('trust_dot1p_map');
  }
  public set trustDot1PMap(value: string) {
    this._trustDot1PMap = value;
  }
  public resetTrustDot1PMap() {
    this._trustDot1PMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustDot1PMapInput() {
    return this._trustDot1PMap;
  }

  // trust_ip_dscp_map - computed: true, optional: true, required: false
  private _trustIpDscpMap?: string; 
  public get trustIpDscpMap() {
    return this.getStringAttribute('trust_ip_dscp_map');
  }
  public set trustIpDscpMap(value: string) {
    this._trustIpDscpMap = value;
  }
  public resetTrustIpDscpMap() {
    this._trustIpDscpMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustIpDscpMapInput() {
    return this._trustIpDscpMap;
  }

  // type - computed: true, optional: true, required: false
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

  // untagged_vlans - computed: true, optional: true, required: false
  private _untaggedVlans?: string; 
  public get untaggedVlans() {
    return this.getStringAttribute('untagged_vlans');
  }
  public set untaggedVlans(value: string) {
    this._untaggedVlans = value;
  }
  public resetUntaggedVlans() {
    this._untaggedVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untaggedVlansInput() {
    return this._untaggedVlans;
  }

  // vlan_mapping_miss_drop - computed: true, optional: true, required: false
  private _vlanMappingMissDrop?: string; 
  public get vlanMappingMissDrop() {
    return this.getStringAttribute('vlan_mapping_miss_drop');
  }
  public set vlanMappingMissDrop(value: string) {
    this._vlanMappingMissDrop = value;
  }
  public resetVlanMappingMissDrop() {
    this._vlanMappingMissDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanMappingMissDropInput() {
    return this._vlanMappingMissDrop;
  }

  // vlan_tpid - computed: true, optional: true, required: false
  private _vlanTpid?: string; 
  public get vlanTpid() {
    return this.getStringAttribute('vlan_tpid');
  }
  public set vlanTpid(value: string) {
    this._vlanTpid = value;
  }
  public resetVlanTpid() {
    this._vlanTpid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanTpidInput() {
    return this._vlanTpid;
  }

  // vlan_traffic_type - computed: true, optional: true, required: false
  private _vlanTrafficType?: string; 
  public get vlanTrafficType() {
    return this.getStringAttribute('vlan_traffic_type');
  }
  public set vlanTrafficType(value: string) {
    this._vlanTrafficType = value;
  }
  public resetVlanTrafficType() {
    this._vlanTrafficType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanTrafficTypeInput() {
    return this._vlanTrafficType;
  }

  // dhcp_snoop_option82_override - computed: false, optional: true, required: false
  private _dhcpSnoopOption82Override = new SwitchInterfaceDhcpSnoopOption82OverrideList(this, "dhcp_snoop_option82_override", false);
  public get dhcpSnoopOption82Override() {
    return this._dhcpSnoopOption82Override;
  }
  public putDhcpSnoopOption82Override(value: SwitchInterfaceDhcpSnoopOption82Override[] | cdktf.IResolvable) {
    this._dhcpSnoopOption82Override.internalValue = value;
  }
  public resetDhcpSnoopOption82Override() {
    this._dhcpSnoopOption82Override.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpSnoopOption82OverrideInput() {
    return this._dhcpSnoopOption82Override.internalValue;
  }

  // port_security - computed: false, optional: true, required: false
  private _portSecurity = new SwitchInterfacePortSecurityOutputReference(this, "port_security");
  public get portSecurity() {
    return this._portSecurity;
  }
  public putPortSecurity(value: SwitchInterfacePortSecurity) {
    this._portSecurity.internalValue = value;
  }
  public resetPortSecurity() {
    this._portSecurity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSecurityInput() {
    return this._portSecurity.internalValue;
  }

  // qnq - computed: false, optional: true, required: false
  private _qnq = new SwitchInterfaceQnqOutputReference(this, "qnq");
  public get qnq() {
    return this._qnq;
  }
  public putQnq(value: SwitchInterfaceQnq) {
    this._qnq.internalValue = value;
  }
  public resetQnq() {
    this._qnq.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qnqInput() {
    return this._qnq.internalValue;
  }

  // raguard - computed: false, optional: true, required: false
  private _raguard = new SwitchInterfaceRaguardList(this, "raguard", false);
  public get raguard() {
    return this._raguard;
  }
  public putRaguard(value: SwitchInterfaceRaguard[] | cdktf.IResolvable) {
    this._raguard.internalValue = value;
  }
  public resetRaguard() {
    this._raguard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get raguardInput() {
    return this._raguard.internalValue;
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups = new SwitchInterfaceSecurityGroupsList(this, "security_groups", false);
  public get securityGroups() {
    return this._securityGroups;
  }
  public putSecurityGroups(value: SwitchInterfaceSecurityGroups[] | cdktf.IResolvable) {
    this._securityGroups.internalValue = value;
  }
  public resetSecurityGroups() {
    this._securityGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups.internalValue;
  }

  // vlan_mapping - computed: false, optional: true, required: false
  private _vlanMapping = new SwitchInterfaceVlanMappingList(this, "vlan_mapping", false);
  public get vlanMapping() {
    return this._vlanMapping;
  }
  public putVlanMapping(value: SwitchInterfaceVlanMapping[] | cdktf.IResolvable) {
    this._vlanMapping.internalValue = value;
  }
  public resetVlanMapping() {
    this._vlanMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanMappingInput() {
    return this._vlanMapping.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_arp_monitor: cdktf.stringToTerraform(this._allowArpMonitor),
      allowed_sub_vlans: cdktf.stringToTerraform(this._allowedSubVlans),
      allowed_vlans: cdktf.stringToTerraform(this._allowedVlans),
      arp_inspection_trust: cdktf.stringToTerraform(this._arpInspectionTrust),
      auto_discovery_fortilink: cdktf.stringToTerraform(this._autoDiscoveryFortilink),
      auto_discovery_fortilink_packet_interval: cdktf.numberToTerraform(this._autoDiscoveryFortilinkPacketInterval),
      default_cos: cdktf.numberToTerraform(this._defaultCos),
      description: cdktf.stringToTerraform(this._description),
      dhcp_snoop_learning_limit: cdktf.numberToTerraform(this._dhcpSnoopLearningLimit),
      dhcp_snoop_learning_limit_check: cdktf.stringToTerraform(this._dhcpSnoopLearningLimitCheck),
      dhcp_snoop_option82_trust: cdktf.stringToTerraform(this._dhcpSnoopOption82Trust),
      dhcp_snooping: cdktf.stringToTerraform(this._dhcpSnooping),
      discard_mode: cdktf.stringToTerraform(this._discardMode),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      edge_port: cdktf.stringToTerraform(this._edgePort),
      filter_sub_vlans: cdktf.stringToTerraform(this._filterSubVlans),
      fortilink_l3_mode: cdktf.stringToTerraform(this._fortilinkL3Mode),
      id: cdktf.stringToTerraform(this._id),
      igmp_snooping_flood_reports: cdktf.stringToTerraform(this._igmpSnoopingFloodReports),
      interface_mode: cdktf.stringToTerraform(this._interfaceMode),
      ip_mac_binding: cdktf.stringToTerraform(this._ipMacBinding),
      learning_limit: cdktf.numberToTerraform(this._learningLimit),
      learning_limit_action: cdktf.stringToTerraform(this._learningLimitAction),
      log_mac_event: cdktf.stringToTerraform(this._logMacEvent),
      loop_guard: cdktf.stringToTerraform(this._loopGuard),
      loop_guard_mac_move_threshold: cdktf.numberToTerraform(this._loopGuardMacMoveThreshold),
      loop_guard_timeout: cdktf.numberToTerraform(this._loopGuardTimeout),
      mcast_snooping_flood_traffic: cdktf.stringToTerraform(this._mcastSnoopingFloodTraffic),
      mld_snooping_flood_reports: cdktf.stringToTerraform(this._mldSnoopingFloodReports),
      nac: cdktf.stringToTerraform(this._nac),
      name: cdktf.stringToTerraform(this._name),
      native_vlan: cdktf.numberToTerraform(this._nativeVlan),
      packet_sample_rate: cdktf.numberToTerraform(this._packetSampleRate),
      packet_sampler: cdktf.stringToTerraform(this._packetSampler),
      primary_vlan: cdktf.numberToTerraform(this._primaryVlan),
      private_vlan: cdktf.stringToTerraform(this._privateVlan),
      private_vlan_port_type: cdktf.numberToTerraform(this._privateVlanPortType),
      ptp_policy: cdktf.stringToTerraform(this._ptpPolicy),
      ptp_status: cdktf.stringToTerraform(this._ptpStatus),
      qos_policy: cdktf.stringToTerraform(this._qosPolicy),
      rpvst_port: cdktf.stringToTerraform(this._rpvstPort),
      sample_direction: cdktf.stringToTerraform(this._sampleDirection),
      sflow_counter_interval: cdktf.numberToTerraform(this._sflowCounterInterval),
      snmp_index: cdktf.numberToTerraform(this._snmpIndex),
      sticky_mac: cdktf.stringToTerraform(this._stickyMac),
      stp_bpdu_guard: cdktf.stringToTerraform(this._stpBpduGuard),
      stp_bpdu_guard_timeout: cdktf.numberToTerraform(this._stpBpduGuardTimeout),
      stp_loop_protection: cdktf.stringToTerraform(this._stpLoopProtection),
      stp_root_guard: cdktf.stringToTerraform(this._stpRootGuard),
      stp_state: cdktf.stringToTerraform(this._stpState),
      sub_vlan: cdktf.numberToTerraform(this._subVlan),
      switch_port_mode: cdktf.stringToTerraform(this._switchPortMode),
      trust_dot1p_map: cdktf.stringToTerraform(this._trustDot1PMap),
      trust_ip_dscp_map: cdktf.stringToTerraform(this._trustIpDscpMap),
      type: cdktf.stringToTerraform(this._type),
      untagged_vlans: cdktf.stringToTerraform(this._untaggedVlans),
      vlan_mapping_miss_drop: cdktf.stringToTerraform(this._vlanMappingMissDrop),
      vlan_tpid: cdktf.stringToTerraform(this._vlanTpid),
      vlan_traffic_type: cdktf.stringToTerraform(this._vlanTrafficType),
      dhcp_snoop_option82_override: cdktf.listMapper(switchInterfaceDhcpSnoopOption82OverrideToTerraform, true)(this._dhcpSnoopOption82Override.internalValue),
      port_security: switchInterfacePortSecurityToTerraform(this._portSecurity.internalValue),
      qnq: switchInterfaceQnqToTerraform(this._qnq.internalValue),
      raguard: cdktf.listMapper(switchInterfaceRaguardToTerraform, true)(this._raguard.internalValue),
      security_groups: cdktf.listMapper(switchInterfaceSecurityGroupsToTerraform, true)(this._securityGroups.internalValue),
      vlan_mapping: cdktf.listMapper(switchInterfaceVlanMappingToTerraform, true)(this._vlanMapping.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_arp_monitor: {
        value: cdktf.stringToHclTerraform(this._allowArpMonitor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_sub_vlans: {
        value: cdktf.stringToHclTerraform(this._allowedSubVlans),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_vlans: {
        value: cdktf.stringToHclTerraform(this._allowedVlans),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arp_inspection_trust: {
        value: cdktf.stringToHclTerraform(this._arpInspectionTrust),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_discovery_fortilink: {
        value: cdktf.stringToHclTerraform(this._autoDiscoveryFortilink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_discovery_fortilink_packet_interval: {
        value: cdktf.numberToHclTerraform(this._autoDiscoveryFortilinkPacketInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_cos: {
        value: cdktf.numberToHclTerraform(this._defaultCos),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_snoop_learning_limit: {
        value: cdktf.numberToHclTerraform(this._dhcpSnoopLearningLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dhcp_snoop_learning_limit_check: {
        value: cdktf.stringToHclTerraform(this._dhcpSnoopLearningLimitCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_snoop_option82_trust: {
        value: cdktf.stringToHclTerraform(this._dhcpSnoopOption82Trust),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_snooping: {
        value: cdktf.stringToHclTerraform(this._dhcpSnooping),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      discard_mode: {
        value: cdktf.stringToHclTerraform(this._discardMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edge_port: {
        value: cdktf.stringToHclTerraform(this._edgePort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_sub_vlans: {
        value: cdktf.stringToHclTerraform(this._filterSubVlans),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortilink_l3_mode: {
        value: cdktf.stringToHclTerraform(this._fortilinkL3Mode),
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
      igmp_snooping_flood_reports: {
        value: cdktf.stringToHclTerraform(this._igmpSnoopingFloodReports),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_mode: {
        value: cdktf.stringToHclTerraform(this._interfaceMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_mac_binding: {
        value: cdktf.stringToHclTerraform(this._ipMacBinding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      learning_limit: {
        value: cdktf.numberToHclTerraform(this._learningLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      learning_limit_action: {
        value: cdktf.stringToHclTerraform(this._learningLimitAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_mac_event: {
        value: cdktf.stringToHclTerraform(this._logMacEvent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loop_guard: {
        value: cdktf.stringToHclTerraform(this._loopGuard),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loop_guard_mac_move_threshold: {
        value: cdktf.numberToHclTerraform(this._loopGuardMacMoveThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      loop_guard_timeout: {
        value: cdktf.numberToHclTerraform(this._loopGuardTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mcast_snooping_flood_traffic: {
        value: cdktf.stringToHclTerraform(this._mcastSnoopingFloodTraffic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mld_snooping_flood_reports: {
        value: cdktf.stringToHclTerraform(this._mldSnoopingFloodReports),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nac: {
        value: cdktf.stringToHclTerraform(this._nac),
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
      native_vlan: {
        value: cdktf.numberToHclTerraform(this._nativeVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      packet_sample_rate: {
        value: cdktf.numberToHclTerraform(this._packetSampleRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      packet_sampler: {
        value: cdktf.stringToHclTerraform(this._packetSampler),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_vlan: {
        value: cdktf.numberToHclTerraform(this._primaryVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      private_vlan: {
        value: cdktf.stringToHclTerraform(this._privateVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_vlan_port_type: {
        value: cdktf.numberToHclTerraform(this._privateVlanPortType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ptp_policy: {
        value: cdktf.stringToHclTerraform(this._ptpPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ptp_status: {
        value: cdktf.stringToHclTerraform(this._ptpStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qos_policy: {
        value: cdktf.stringToHclTerraform(this._qosPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rpvst_port: {
        value: cdktf.stringToHclTerraform(this._rpvstPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sample_direction: {
        value: cdktf.stringToHclTerraform(this._sampleDirection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sflow_counter_interval: {
        value: cdktf.numberToHclTerraform(this._sflowCounterInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snmp_index: {
        value: cdktf.numberToHclTerraform(this._snmpIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sticky_mac: {
        value: cdktf.stringToHclTerraform(this._stickyMac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stp_bpdu_guard: {
        value: cdktf.stringToHclTerraform(this._stpBpduGuard),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stp_bpdu_guard_timeout: {
        value: cdktf.numberToHclTerraform(this._stpBpduGuardTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stp_loop_protection: {
        value: cdktf.stringToHclTerraform(this._stpLoopProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stp_root_guard: {
        value: cdktf.stringToHclTerraform(this._stpRootGuard),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stp_state: {
        value: cdktf.stringToHclTerraform(this._stpState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sub_vlan: {
        value: cdktf.numberToHclTerraform(this._subVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      switch_port_mode: {
        value: cdktf.stringToHclTerraform(this._switchPortMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_dot1p_map: {
        value: cdktf.stringToHclTerraform(this._trustDot1PMap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_ip_dscp_map: {
        value: cdktf.stringToHclTerraform(this._trustIpDscpMap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      untagged_vlans: {
        value: cdktf.stringToHclTerraform(this._untaggedVlans),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_mapping_miss_drop: {
        value: cdktf.stringToHclTerraform(this._vlanMappingMissDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_tpid: {
        value: cdktf.stringToHclTerraform(this._vlanTpid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_traffic_type: {
        value: cdktf.stringToHclTerraform(this._vlanTrafficType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_snoop_option82_override: {
        value: cdktf.listMapperHcl(switchInterfaceDhcpSnoopOption82OverrideToHclTerraform, true)(this._dhcpSnoopOption82Override.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchInterfaceDhcpSnoopOption82OverrideList",
      },
      port_security: {
        value: switchInterfacePortSecurityToHclTerraform(this._portSecurity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchInterfacePortSecurityList",
      },
      qnq: {
        value: switchInterfaceQnqToHclTerraform(this._qnq.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchInterfaceQnqList",
      },
      raguard: {
        value: cdktf.listMapperHcl(switchInterfaceRaguardToHclTerraform, true)(this._raguard.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchInterfaceRaguardList",
      },
      security_groups: {
        value: cdktf.listMapperHcl(switchInterfaceSecurityGroupsToHclTerraform, true)(this._securityGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchInterfaceSecurityGroupsList",
      },
      vlan_mapping: {
        value: cdktf.listMapperHcl(switchInterfaceVlanMappingToHclTerraform, true)(this._vlanMapping.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchInterfaceVlanMappingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
