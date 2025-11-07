// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectSwitchcontrollerManagedswitchPortsAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#access_mode ObjectSwitchcontrollerManagedswitchPortsA#access_mode}
  */
  readonly accessMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#acl_group ObjectSwitchcontrollerManagedswitchPortsA#acl_group}
  */
  readonly aclGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#adom ObjectSwitchcontrollerManagedswitchPortsA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#aggregator_mode ObjectSwitchcontrollerManagedswitchPortsA#aggregator_mode}
  */
  readonly aggregatorMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#allowed_vlans ObjectSwitchcontrollerManagedswitchPortsA#allowed_vlans}
  */
  readonly allowedVlans?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#allowed_vlans_all ObjectSwitchcontrollerManagedswitchPortsA#allowed_vlans_all}
  */
  readonly allowedVlansAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#arp_inspection_trust ObjectSwitchcontrollerManagedswitchPortsA#arp_inspection_trust}
  */
  readonly arpInspectionTrust?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#authenticated_port ObjectSwitchcontrollerManagedswitchPortsA#authenticated_port}
  */
  readonly authenticatedPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#bundle ObjectSwitchcontrollerManagedswitchPortsA#bundle}
  */
  readonly bundle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#description ObjectSwitchcontrollerManagedswitchPortsA#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#dhcp_snoop_option82_trust ObjectSwitchcontrollerManagedswitchPortsA#dhcp_snoop_option82_trust}
  */
  readonly dhcpSnoopOption82Trust?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#dhcp_snooping ObjectSwitchcontrollerManagedswitchPortsA#dhcp_snooping}
  */
  readonly dhcpSnooping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#discard_mode ObjectSwitchcontrollerManagedswitchPortsA#discard_mode}
  */
  readonly discardMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#dsl_profile ObjectSwitchcontrollerManagedswitchPortsA#dsl_profile}
  */
  readonly dslProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#dynamic_sort_subtable ObjectSwitchcontrollerManagedswitchPortsA#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#edge_port ObjectSwitchcontrollerManagedswitchPortsA#edge_port}
  */
  readonly edgePort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#encrypted_port ObjectSwitchcontrollerManagedswitchPortsA#encrypted_port}
  */
  readonly encryptedPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#fec_capable ObjectSwitchcontrollerManagedswitchPortsA#fec_capable}
  */
  readonly fecCapable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#fec_state ObjectSwitchcontrollerManagedswitchPortsA#fec_state}
  */
  readonly fecState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#flap_duration ObjectSwitchcontrollerManagedswitchPortsA#flap_duration}
  */
  readonly flapDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#flap_rate ObjectSwitchcontrollerManagedswitchPortsA#flap_rate}
  */
  readonly flapRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#flap_timeout ObjectSwitchcontrollerManagedswitchPortsA#flap_timeout}
  */
  readonly flapTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#flapguard ObjectSwitchcontrollerManagedswitchPortsA#flapguard}
  */
  readonly flapguard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#flow_control ObjectSwitchcontrollerManagedswitchPortsA#flow_control}
  */
  readonly flowControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#fortiswitch_acls ObjectSwitchcontrollerManagedswitchPortsA#fortiswitch_acls}
  */
  readonly fortiswitchAcls?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#id ObjectSwitchcontrollerManagedswitchPortsA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#igmp_snooping ObjectSwitchcontrollerManagedswitchPortsA#igmp_snooping}
  */
  readonly igmpSnooping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#igmp_snooping_flood_reports ObjectSwitchcontrollerManagedswitchPortsA#igmp_snooping_flood_reports}
  */
  readonly igmpSnoopingFloodReports?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#igmps_flood_reports ObjectSwitchcontrollerManagedswitchPortsA#igmps_flood_reports}
  */
  readonly igmpsFloodReports?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#igmps_flood_traffic ObjectSwitchcontrollerManagedswitchPortsA#igmps_flood_traffic}
  */
  readonly igmpsFloodTraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#interface_tags ObjectSwitchcontrollerManagedswitchPortsA#interface_tags}
  */
  readonly interfaceTags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#ip_source_guard ObjectSwitchcontrollerManagedswitchPortsA#ip_source_guard}
  */
  readonly ipSourceGuard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#isl_peer_device_sn ObjectSwitchcontrollerManagedswitchPortsA#isl_peer_device_sn}
  */
  readonly islPeerDeviceSn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#lacp_speed ObjectSwitchcontrollerManagedswitchPortsA#lacp_speed}
  */
  readonly lacpSpeed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#learning_limit ObjectSwitchcontrollerManagedswitchPortsA#learning_limit}
  */
  readonly learningLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#link_status ObjectSwitchcontrollerManagedswitchPortsA#link_status}
  */
  readonly linkStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#lldp_profile ObjectSwitchcontrollerManagedswitchPortsA#lldp_profile}
  */
  readonly lldpProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#lldp_status ObjectSwitchcontrollerManagedswitchPortsA#lldp_status}
  */
  readonly lldpStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#loop_guard ObjectSwitchcontrollerManagedswitchPortsA#loop_guard}
  */
  readonly loopGuard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#loop_guard_timeout ObjectSwitchcontrollerManagedswitchPortsA#loop_guard_timeout}
  */
  readonly loopGuardTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#managed_switch ObjectSwitchcontrollerManagedswitchPortsA#managed_switch}
  */
  readonly managedSwitch: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#matched_dpp_intf_tags ObjectSwitchcontrollerManagedswitchPortsA#matched_dpp_intf_tags}
  */
  readonly matchedDppIntfTags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#matched_dpp_policy ObjectSwitchcontrollerManagedswitchPortsA#matched_dpp_policy}
  */
  readonly matchedDppPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#max_bundle ObjectSwitchcontrollerManagedswitchPortsA#max_bundle}
  */
  readonly maxBundle?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#mcast_snooping_flood_traffic ObjectSwitchcontrollerManagedswitchPortsA#mcast_snooping_flood_traffic}
  */
  readonly mcastSnoopingFloodTraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#mclag ObjectSwitchcontrollerManagedswitchPortsA#mclag}
  */
  readonly mclag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#mclag_icl_port ObjectSwitchcontrollerManagedswitchPortsA#mclag_icl_port}
  */
  readonly mclagIclPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#media_type ObjectSwitchcontrollerManagedswitchPortsA#media_type}
  */
  readonly mediaType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#member_withdrawal_behavior ObjectSwitchcontrollerManagedswitchPortsA#member_withdrawal_behavior}
  */
  readonly memberWithdrawalBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#members ObjectSwitchcontrollerManagedswitchPortsA#members}
  */
  readonly members?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#min_bundle ObjectSwitchcontrollerManagedswitchPortsA#min_bundle}
  */
  readonly minBundle?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#mode ObjectSwitchcontrollerManagedswitchPortsA#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#p2p_port ObjectSwitchcontrollerManagedswitchPortsA#p2p_port}
  */
  readonly p2PPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#packet_sample_rate ObjectSwitchcontrollerManagedswitchPortsA#packet_sample_rate}
  */
  readonly packetSampleRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#packet_sampler ObjectSwitchcontrollerManagedswitchPortsA#packet_sampler}
  */
  readonly packetSampler?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#pause_meter ObjectSwitchcontrollerManagedswitchPortsA#pause_meter}
  */
  readonly pauseMeter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#pause_meter_resume ObjectSwitchcontrollerManagedswitchPortsA#pause_meter_resume}
  */
  readonly pauseMeterResume?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#poe_max_power ObjectSwitchcontrollerManagedswitchPortsA#poe_max_power}
  */
  readonly poeMaxPower?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#poe_mode_bt_cabable ObjectSwitchcontrollerManagedswitchPortsA#poe_mode_bt_cabable}
  */
  readonly poeModeBtCabable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#poe_port_mode ObjectSwitchcontrollerManagedswitchPortsA#poe_port_mode}
  */
  readonly poePortMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#poe_port_power ObjectSwitchcontrollerManagedswitchPortsA#poe_port_power}
  */
  readonly poePortPower?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#poe_port_priority ObjectSwitchcontrollerManagedswitchPortsA#poe_port_priority}
  */
  readonly poePortPriority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#poe_pre_standard_detection ObjectSwitchcontrollerManagedswitchPortsA#poe_pre_standard_detection}
  */
  readonly poePreStandardDetection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#poe_standard ObjectSwitchcontrollerManagedswitchPortsA#poe_standard}
  */
  readonly poeStandard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#poe_status ObjectSwitchcontrollerManagedswitchPortsA#poe_status}
  */
  readonly poeStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#port_name ObjectSwitchcontrollerManagedswitchPortsA#port_name}
  */
  readonly portName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#port_owner ObjectSwitchcontrollerManagedswitchPortsA#port_owner}
  */
  readonly portOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#port_policy ObjectSwitchcontrollerManagedswitchPortsA#port_policy}
  */
  readonly portPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#port_security_policy ObjectSwitchcontrollerManagedswitchPortsA#port_security_policy}
  */
  readonly portSecurityPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#port_selection_criteria ObjectSwitchcontrollerManagedswitchPortsA#port_selection_criteria}
  */
  readonly portSelectionCriteria?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#ptp_status ObjectSwitchcontrollerManagedswitchPortsA#ptp_status}
  */
  readonly ptpStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#qos_policy ObjectSwitchcontrollerManagedswitchPortsA#qos_policy}
  */
  readonly qosPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#restricted_auth_port ObjectSwitchcontrollerManagedswitchPortsA#restricted_auth_port}
  */
  readonly restrictedAuthPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#rpvst_port ObjectSwitchcontrollerManagedswitchPortsA#rpvst_port}
  */
  readonly rpvstPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#sample_direction ObjectSwitchcontrollerManagedswitchPortsA#sample_direction}
  */
  readonly sampleDirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#scopetype ObjectSwitchcontrollerManagedswitchPortsA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#sflow_counter_interval ObjectSwitchcontrollerManagedswitchPortsA#sflow_counter_interval}
  */
  readonly sflowCounterInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#sflow_sample_rate ObjectSwitchcontrollerManagedswitchPortsA#sflow_sample_rate}
  */
  readonly sflowSampleRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#sflow_sampler ObjectSwitchcontrollerManagedswitchPortsA#sflow_sampler}
  */
  readonly sflowSampler?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#status ObjectSwitchcontrollerManagedswitchPortsA#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#sticky_mac ObjectSwitchcontrollerManagedswitchPortsA#sticky_mac}
  */
  readonly stickyMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#stp_bpdu_guard ObjectSwitchcontrollerManagedswitchPortsA#stp_bpdu_guard}
  */
  readonly stpBpduGuard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#stp_bpdu_guard_timeout ObjectSwitchcontrollerManagedswitchPortsA#stp_bpdu_guard_timeout}
  */
  readonly stpBpduGuardTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#stp_root_guard ObjectSwitchcontrollerManagedswitchPortsA#stp_root_guard}
  */
  readonly stpRootGuard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#stp_state ObjectSwitchcontrollerManagedswitchPortsA#stp_state}
  */
  readonly stpState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#trunk_member ObjectSwitchcontrollerManagedswitchPortsA#trunk_member}
  */
  readonly trunkMember?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#type ObjectSwitchcontrollerManagedswitchPortsA#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#untagged_vlans ObjectSwitchcontrollerManagedswitchPortsA#untagged_vlans}
  */
  readonly untaggedVlans?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#vlan ObjectSwitchcontrollerManagedswitchPortsA#vlan}
  */
  readonly vlan?: string;
  /**
  * dhcp_snoop_option82_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#dhcp_snoop_option82_override ObjectSwitchcontrollerManagedswitchPortsA#dhcp_snoop_option82_override}
  */
  readonly dhcpSnoopOption82Override?: ObjectSwitchcontrollerManagedswitchPortsDhcpSnoopOption82OverrideA[] | cdktf.IResolvable;
}
export interface ObjectSwitchcontrollerManagedswitchPortsDhcpSnoopOption82OverrideA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#circuit_id ObjectSwitchcontrollerManagedswitchPortsA#circuit_id}
  */
  readonly circuitId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#remote_id ObjectSwitchcontrollerManagedswitchPortsA#remote_id}
  */
  readonly remoteId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#vlan_name ObjectSwitchcontrollerManagedswitchPortsA#vlan_name}
  */
  readonly vlanName?: string;
}

export function objectSwitchcontrollerManagedswitchPortsDhcpSnoopOption82OverrideAToTerraform(struct?: ObjectSwitchcontrollerManagedswitchPortsDhcpSnoopOption82OverrideA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    circuit_id: cdktf.stringToTerraform(struct!.circuitId),
    remote_id: cdktf.stringToTerraform(struct!.remoteId),
    vlan_name: cdktf.stringToTerraform(struct!.vlanName),
  }
}


export function objectSwitchcontrollerManagedswitchPortsDhcpSnoopOption82OverrideAToHclTerraform(struct?: ObjectSwitchcontrollerManagedswitchPortsDhcpSnoopOption82OverrideA | cdktf.IResolvable): any {
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
    remote_id: {
      value: cdktf.stringToHclTerraform(struct!.remoteId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_name: {
      value: cdktf.stringToHclTerraform(struct!.vlanName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSwitchcontrollerManagedswitchPortsDhcpSnoopOption82OverrideAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSwitchcontrollerManagedswitchPortsDhcpSnoopOption82OverrideA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._circuitId !== undefined) {
      hasAnyValues = true;
      internalValueResult.circuitId = this._circuitId;
    }
    if (this._remoteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteId = this._remoteId;
    }
    if (this._vlanName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanName = this._vlanName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSwitchcontrollerManagedswitchPortsDhcpSnoopOption82OverrideA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._circuitId = undefined;
      this._remoteId = undefined;
      this._vlanName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._circuitId = value.circuitId;
      this._remoteId = value.remoteId;
      this._vlanName = value.vlanName;
    }
  }

  // circuit_id - computed: false, optional: true, required: false
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

  // remote_id - computed: false, optional: true, required: false
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

  // vlan_name - computed: false, optional: true, required: false
  private _vlanName?: string; 
  public get vlanName() {
    return this.getStringAttribute('vlan_name');
  }
  public set vlanName(value: string) {
    this._vlanName = value;
  }
  public resetVlanName() {
    this._vlanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanNameInput() {
    return this._vlanName;
  }
}

export class ObjectSwitchcontrollerManagedswitchPortsDhcpSnoopOption82OverrideAList extends cdktf.ComplexList {
  public internalValue? : ObjectSwitchcontrollerManagedswitchPortsDhcpSnoopOption82OverrideA[] | cdktf.IResolvable

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
  public get(index: number): ObjectSwitchcontrollerManagedswitchPortsDhcpSnoopOption82OverrideAOutputReference {
    return new ObjectSwitchcontrollerManagedswitchPortsDhcpSnoopOption82OverrideAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports fortimanager_object_switchcontroller_managedswitch_ports}
*/
export class ObjectSwitchcontrollerManagedswitchPortsA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_switchcontroller_managedswitch_ports";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectSwitchcontrollerManagedswitchPortsA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectSwitchcontrollerManagedswitchPortsA to import
  * @param importFromId The id of the existing ObjectSwitchcontrollerManagedswitchPortsA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectSwitchcontrollerManagedswitchPortsA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_switchcontroller_managedswitch_ports", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_ports fortimanager_object_switchcontroller_managedswitch_ports} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectSwitchcontrollerManagedswitchPortsAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectSwitchcontrollerManagedswitchPortsAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_switchcontroller_managedswitch_ports',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessMode = config.accessMode;
    this._aclGroup = config.aclGroup;
    this._adom = config.adom;
    this._aggregatorMode = config.aggregatorMode;
    this._allowedVlans = config.allowedVlans;
    this._allowedVlansAll = config.allowedVlansAll;
    this._arpInspectionTrust = config.arpInspectionTrust;
    this._authenticatedPort = config.authenticatedPort;
    this._bundle = config.bundle;
    this._description = config.description;
    this._dhcpSnoopOption82Trust = config.dhcpSnoopOption82Trust;
    this._dhcpSnooping = config.dhcpSnooping;
    this._discardMode = config.discardMode;
    this._dslProfile = config.dslProfile;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._edgePort = config.edgePort;
    this._encryptedPort = config.encryptedPort;
    this._fecCapable = config.fecCapable;
    this._fecState = config.fecState;
    this._flapDuration = config.flapDuration;
    this._flapRate = config.flapRate;
    this._flapTimeout = config.flapTimeout;
    this._flapguard = config.flapguard;
    this._flowControl = config.flowControl;
    this._fortiswitchAcls = config.fortiswitchAcls;
    this._id = config.id;
    this._igmpSnooping = config.igmpSnooping;
    this._igmpSnoopingFloodReports = config.igmpSnoopingFloodReports;
    this._igmpsFloodReports = config.igmpsFloodReports;
    this._igmpsFloodTraffic = config.igmpsFloodTraffic;
    this._interfaceTags = config.interfaceTags;
    this._ipSourceGuard = config.ipSourceGuard;
    this._islPeerDeviceSn = config.islPeerDeviceSn;
    this._lacpSpeed = config.lacpSpeed;
    this._learningLimit = config.learningLimit;
    this._linkStatus = config.linkStatus;
    this._lldpProfile = config.lldpProfile;
    this._lldpStatus = config.lldpStatus;
    this._loopGuard = config.loopGuard;
    this._loopGuardTimeout = config.loopGuardTimeout;
    this._managedSwitch = config.managedSwitch;
    this._matchedDppIntfTags = config.matchedDppIntfTags;
    this._matchedDppPolicy = config.matchedDppPolicy;
    this._maxBundle = config.maxBundle;
    this._mcastSnoopingFloodTraffic = config.mcastSnoopingFloodTraffic;
    this._mclag = config.mclag;
    this._mclagIclPort = config.mclagIclPort;
    this._mediaType = config.mediaType;
    this._memberWithdrawalBehavior = config.memberWithdrawalBehavior;
    this._members = config.members;
    this._minBundle = config.minBundle;
    this._mode = config.mode;
    this._p2PPort = config.p2PPort;
    this._packetSampleRate = config.packetSampleRate;
    this._packetSampler = config.packetSampler;
    this._pauseMeter = config.pauseMeter;
    this._pauseMeterResume = config.pauseMeterResume;
    this._poeMaxPower = config.poeMaxPower;
    this._poeModeBtCabable = config.poeModeBtCabable;
    this._poePortMode = config.poePortMode;
    this._poePortPower = config.poePortPower;
    this._poePortPriority = config.poePortPriority;
    this._poePreStandardDetection = config.poePreStandardDetection;
    this._poeStandard = config.poeStandard;
    this._poeStatus = config.poeStatus;
    this._portName = config.portName;
    this._portOwner = config.portOwner;
    this._portPolicy = config.portPolicy;
    this._portSecurityPolicy = config.portSecurityPolicy;
    this._portSelectionCriteria = config.portSelectionCriteria;
    this._ptpStatus = config.ptpStatus;
    this._qosPolicy = config.qosPolicy;
    this._restrictedAuthPort = config.restrictedAuthPort;
    this._rpvstPort = config.rpvstPort;
    this._sampleDirection = config.sampleDirection;
    this._scopetype = config.scopetype;
    this._sflowCounterInterval = config.sflowCounterInterval;
    this._sflowSampleRate = config.sflowSampleRate;
    this._sflowSampler = config.sflowSampler;
    this._status = config.status;
    this._stickyMac = config.stickyMac;
    this._stpBpduGuard = config.stpBpduGuard;
    this._stpBpduGuardTimeout = config.stpBpduGuardTimeout;
    this._stpRootGuard = config.stpRootGuard;
    this._stpState = config.stpState;
    this._trunkMember = config.trunkMember;
    this._type = config.type;
    this._untaggedVlans = config.untaggedVlans;
    this._vlan = config.vlan;
    this._dhcpSnoopOption82Override.internalValue = config.dhcpSnoopOption82Override;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_mode - computed: true, optional: true, required: false
  private _accessMode?: string; 
  public get accessMode() {
    return this.getStringAttribute('access_mode');
  }
  public set accessMode(value: string) {
    this._accessMode = value;
  }
  public resetAccessMode() {
    this._accessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModeInput() {
    return this._accessMode;
  }

  // acl_group - computed: true, optional: true, required: false
  private _aclGroup?: string[]; 
  public get aclGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('acl_group'));
  }
  public set aclGroup(value: string[]) {
    this._aclGroup = value;
  }
  public resetAclGroup() {
    this._aclGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclGroupInput() {
    return this._aclGroup;
  }

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // aggregator_mode - computed: false, optional: true, required: false
  private _aggregatorMode?: string; 
  public get aggregatorMode() {
    return this.getStringAttribute('aggregator_mode');
  }
  public set aggregatorMode(value: string) {
    this._aggregatorMode = value;
  }
  public resetAggregatorMode() {
    this._aggregatorMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatorModeInput() {
    return this._aggregatorMode;
  }

  // allowed_vlans - computed: false, optional: true, required: false
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

  // allowed_vlans_all - computed: true, optional: true, required: false
  private _allowedVlansAll?: string; 
  public get allowedVlansAll() {
    return this.getStringAttribute('allowed_vlans_all');
  }
  public set allowedVlansAll(value: string) {
    this._allowedVlansAll = value;
  }
  public resetAllowedVlansAll() {
    this._allowedVlansAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedVlansAllInput() {
    return this._allowedVlansAll;
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

  // authenticated_port - computed: false, optional: true, required: false
  private _authenticatedPort?: number; 
  public get authenticatedPort() {
    return this.getNumberAttribute('authenticated_port');
  }
  public set authenticatedPort(value: number) {
    this._authenticatedPort = value;
  }
  public resetAuthenticatedPort() {
    this._authenticatedPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatedPortInput() {
    return this._authenticatedPort;
  }

  // bundle - computed: false, optional: true, required: false
  private _bundle?: string; 
  public get bundle() {
    return this.getStringAttribute('bundle');
  }
  public set bundle(value: string) {
    this._bundle = value;
  }
  public resetBundle() {
    this._bundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleInput() {
    return this._bundle;
  }

  // description - computed: false, optional: true, required: false
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

  // dsl_profile - computed: true, optional: true, required: false
  private _dslProfile?: string; 
  public get dslProfile() {
    return this.getStringAttribute('dsl_profile');
  }
  public set dslProfile(value: string) {
    this._dslProfile = value;
  }
  public resetDslProfile() {
    this._dslProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dslProfileInput() {
    return this._dslProfile;
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

  // encrypted_port - computed: false, optional: true, required: false
  private _encryptedPort?: number; 
  public get encryptedPort() {
    return this.getNumberAttribute('encrypted_port');
  }
  public set encryptedPort(value: number) {
    this._encryptedPort = value;
  }
  public resetEncryptedPort() {
    this._encryptedPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedPortInput() {
    return this._encryptedPort;
  }

  // fec_capable - computed: false, optional: true, required: false
  private _fecCapable?: number; 
  public get fecCapable() {
    return this.getNumberAttribute('fec_capable');
  }
  public set fecCapable(value: number) {
    this._fecCapable = value;
  }
  public resetFecCapable() {
    this._fecCapable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fecCapableInput() {
    return this._fecCapable;
  }

  // fec_state - computed: true, optional: true, required: false
  private _fecState?: string; 
  public get fecState() {
    return this.getStringAttribute('fec_state');
  }
  public set fecState(value: string) {
    this._fecState = value;
  }
  public resetFecState() {
    this._fecState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fecStateInput() {
    return this._fecState;
  }

  // flap_duration - computed: true, optional: true, required: false
  private _flapDuration?: number; 
  public get flapDuration() {
    return this.getNumberAttribute('flap_duration');
  }
  public set flapDuration(value: number) {
    this._flapDuration = value;
  }
  public resetFlapDuration() {
    this._flapDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flapDurationInput() {
    return this._flapDuration;
  }

  // flap_rate - computed: true, optional: true, required: false
  private _flapRate?: number; 
  public get flapRate() {
    return this.getNumberAttribute('flap_rate');
  }
  public set flapRate(value: number) {
    this._flapRate = value;
  }
  public resetFlapRate() {
    this._flapRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flapRateInput() {
    return this._flapRate;
  }

  // flap_timeout - computed: false, optional: true, required: false
  private _flapTimeout?: number; 
  public get flapTimeout() {
    return this.getNumberAttribute('flap_timeout');
  }
  public set flapTimeout(value: number) {
    this._flapTimeout = value;
  }
  public resetFlapTimeout() {
    this._flapTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flapTimeoutInput() {
    return this._flapTimeout;
  }

  // flapguard - computed: true, optional: true, required: false
  private _flapguard?: string; 
  public get flapguard() {
    return this.getStringAttribute('flapguard');
  }
  public set flapguard(value: string) {
    this._flapguard = value;
  }
  public resetFlapguard() {
    this._flapguard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flapguardInput() {
    return this._flapguard;
  }

  // flow_control - computed: true, optional: true, required: false
  private _flowControl?: string; 
  public get flowControl() {
    return this.getStringAttribute('flow_control');
  }
  public set flowControl(value: string) {
    this._flowControl = value;
  }
  public resetFlowControl() {
    this._flowControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowControlInput() {
    return this._flowControl;
  }

  // fortiswitch_acls - computed: true, optional: true, required: false
  private _fortiswitchAcls?: number[]; 
  public get fortiswitchAcls() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('fortiswitch_acls')));
  }
  public set fortiswitchAcls(value: number[]) {
    this._fortiswitchAcls = value;
  }
  public resetFortiswitchAcls() {
    this._fortiswitchAcls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiswitchAclsInput() {
    return this._fortiswitchAcls;
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

  // igmp_snooping - computed: false, optional: true, required: false
  private _igmpSnooping?: string; 
  public get igmpSnooping() {
    return this.getStringAttribute('igmp_snooping');
  }
  public set igmpSnooping(value: string) {
    this._igmpSnooping = value;
  }
  public resetIgmpSnooping() {
    this._igmpSnooping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpSnoopingInput() {
    return this._igmpSnooping;
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

  // igmps_flood_reports - computed: true, optional: true, required: false
  private _igmpsFloodReports?: string; 
  public get igmpsFloodReports() {
    return this.getStringAttribute('igmps_flood_reports');
  }
  public set igmpsFloodReports(value: string) {
    this._igmpsFloodReports = value;
  }
  public resetIgmpsFloodReports() {
    this._igmpsFloodReports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpsFloodReportsInput() {
    return this._igmpsFloodReports;
  }

  // igmps_flood_traffic - computed: true, optional: true, required: false
  private _igmpsFloodTraffic?: string; 
  public get igmpsFloodTraffic() {
    return this.getStringAttribute('igmps_flood_traffic');
  }
  public set igmpsFloodTraffic(value: string) {
    this._igmpsFloodTraffic = value;
  }
  public resetIgmpsFloodTraffic() {
    this._igmpsFloodTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpsFloodTrafficInput() {
    return this._igmpsFloodTraffic;
  }

  // interface_tags - computed: false, optional: true, required: false
  private _interfaceTags?: string; 
  public get interfaceTags() {
    return this.getStringAttribute('interface_tags');
  }
  public set interfaceTags(value: string) {
    this._interfaceTags = value;
  }
  public resetInterfaceTags() {
    this._interfaceTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceTagsInput() {
    return this._interfaceTags;
  }

  // ip_source_guard - computed: true, optional: true, required: false
  private _ipSourceGuard?: string; 
  public get ipSourceGuard() {
    return this.getStringAttribute('ip_source_guard');
  }
  public set ipSourceGuard(value: string) {
    this._ipSourceGuard = value;
  }
  public resetIpSourceGuard() {
    this._ipSourceGuard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSourceGuardInput() {
    return this._ipSourceGuard;
  }

  // isl_peer_device_sn - computed: false, optional: true, required: false
  private _islPeerDeviceSn?: string; 
  public get islPeerDeviceSn() {
    return this.getStringAttribute('isl_peer_device_sn');
  }
  public set islPeerDeviceSn(value: string) {
    this._islPeerDeviceSn = value;
  }
  public resetIslPeerDeviceSn() {
    this._islPeerDeviceSn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get islPeerDeviceSnInput() {
    return this._islPeerDeviceSn;
  }

  // lacp_speed - computed: true, optional: true, required: false
  private _lacpSpeed?: string; 
  public get lacpSpeed() {
    return this.getStringAttribute('lacp_speed');
  }
  public set lacpSpeed(value: string) {
    this._lacpSpeed = value;
  }
  public resetLacpSpeed() {
    this._lacpSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lacpSpeedInput() {
    return this._lacpSpeed;
  }

  // learning_limit - computed: false, optional: true, required: false
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

  // link_status - computed: true, optional: true, required: false
  private _linkStatus?: string; 
  public get linkStatus() {
    return this.getStringAttribute('link_status');
  }
  public set linkStatus(value: string) {
    this._linkStatus = value;
  }
  public resetLinkStatus() {
    this._linkStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkStatusInput() {
    return this._linkStatus;
  }

  // lldp_profile - computed: true, optional: true, required: false
  private _lldpProfile?: string; 
  public get lldpProfile() {
    return this.getStringAttribute('lldp_profile');
  }
  public set lldpProfile(value: string) {
    this._lldpProfile = value;
  }
  public resetLldpProfile() {
    this._lldpProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpProfileInput() {
    return this._lldpProfile;
  }

  // lldp_status - computed: true, optional: true, required: false
  private _lldpStatus?: string; 
  public get lldpStatus() {
    return this.getStringAttribute('lldp_status');
  }
  public set lldpStatus(value: string) {
    this._lldpStatus = value;
  }
  public resetLldpStatus() {
    this._lldpStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpStatusInput() {
    return this._lldpStatus;
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

  // managed_switch - computed: false, optional: false, required: true
  private _managedSwitch?: string; 
  public get managedSwitch() {
    return this.getStringAttribute('managed_switch');
  }
  public set managedSwitch(value: string) {
    this._managedSwitch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedSwitchInput() {
    return this._managedSwitch;
  }

  // matched_dpp_intf_tags - computed: false, optional: true, required: false
  private _matchedDppIntfTags?: string; 
  public get matchedDppIntfTags() {
    return this.getStringAttribute('matched_dpp_intf_tags');
  }
  public set matchedDppIntfTags(value: string) {
    this._matchedDppIntfTags = value;
  }
  public resetMatchedDppIntfTags() {
    this._matchedDppIntfTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchedDppIntfTagsInput() {
    return this._matchedDppIntfTags;
  }

  // matched_dpp_policy - computed: false, optional: true, required: false
  private _matchedDppPolicy?: string; 
  public get matchedDppPolicy() {
    return this.getStringAttribute('matched_dpp_policy');
  }
  public set matchedDppPolicy(value: string) {
    this._matchedDppPolicy = value;
  }
  public resetMatchedDppPolicy() {
    this._matchedDppPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchedDppPolicyInput() {
    return this._matchedDppPolicy;
  }

  // max_bundle - computed: false, optional: true, required: false
  private _maxBundle?: number; 
  public get maxBundle() {
    return this.getNumberAttribute('max_bundle');
  }
  public set maxBundle(value: number) {
    this._maxBundle = value;
  }
  public resetMaxBundle() {
    this._maxBundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBundleInput() {
    return this._maxBundle;
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

  // mclag - computed: false, optional: true, required: false
  private _mclag?: string; 
  public get mclag() {
    return this.getStringAttribute('mclag');
  }
  public set mclag(value: string) {
    this._mclag = value;
  }
  public resetMclag() {
    this._mclag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mclagInput() {
    return this._mclag;
  }

  // mclag_icl_port - computed: false, optional: true, required: false
  private _mclagIclPort?: number; 
  public get mclagIclPort() {
    return this.getNumberAttribute('mclag_icl_port');
  }
  public set mclagIclPort(value: number) {
    this._mclagIclPort = value;
  }
  public resetMclagIclPort() {
    this._mclagIclPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mclagIclPortInput() {
    return this._mclagIclPort;
  }

  // media_type - computed: false, optional: true, required: false
  private _mediaType?: string; 
  public get mediaType() {
    return this.getStringAttribute('media_type');
  }
  public set mediaType(value: string) {
    this._mediaType = value;
  }
  public resetMediaType() {
    this._mediaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaTypeInput() {
    return this._mediaType;
  }

  // member_withdrawal_behavior - computed: true, optional: true, required: false
  private _memberWithdrawalBehavior?: string; 
  public get memberWithdrawalBehavior() {
    return this.getStringAttribute('member_withdrawal_behavior');
  }
  public set memberWithdrawalBehavior(value: string) {
    this._memberWithdrawalBehavior = value;
  }
  public resetMemberWithdrawalBehavior() {
    this._memberWithdrawalBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberWithdrawalBehaviorInput() {
    return this._memberWithdrawalBehavior;
  }

  // members - computed: true, optional: true, required: false
  private _members?: string[]; 
  public get members() {
    return cdktf.Fn.tolist(this.getListAttribute('members'));
  }
  public set members(value: string[]) {
    this._members = value;
  }
  public resetMembers() {
    this._members = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members;
  }

  // min_bundle - computed: false, optional: true, required: false
  private _minBundle?: number; 
  public get minBundle() {
    return this.getNumberAttribute('min_bundle');
  }
  public set minBundle(value: number) {
    this._minBundle = value;
  }
  public resetMinBundle() {
    this._minBundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minBundleInput() {
    return this._minBundle;
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

  // p2p_port - computed: false, optional: true, required: false
  private _p2PPort?: number; 
  public get p2PPort() {
    return this.getNumberAttribute('p2p_port');
  }
  public set p2PPort(value: number) {
    this._p2PPort = value;
  }
  public resetP2PPort() {
    this._p2PPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p2PPortInput() {
    return this._p2PPort;
  }

  // packet_sample_rate - computed: false, optional: true, required: false
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

  // pause_meter - computed: false, optional: true, required: false
  private _pauseMeter?: number; 
  public get pauseMeter() {
    return this.getNumberAttribute('pause_meter');
  }
  public set pauseMeter(value: number) {
    this._pauseMeter = value;
  }
  public resetPauseMeter() {
    this._pauseMeter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseMeterInput() {
    return this._pauseMeter;
  }

  // pause_meter_resume - computed: false, optional: true, required: false
  private _pauseMeterResume?: string; 
  public get pauseMeterResume() {
    return this.getStringAttribute('pause_meter_resume');
  }
  public set pauseMeterResume(value: string) {
    this._pauseMeterResume = value;
  }
  public resetPauseMeterResume() {
    this._pauseMeterResume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseMeterResumeInput() {
    return this._pauseMeterResume;
  }

  // poe_max_power - computed: false, optional: true, required: false
  private _poeMaxPower?: string; 
  public get poeMaxPower() {
    return this.getStringAttribute('poe_max_power');
  }
  public set poeMaxPower(value: string) {
    this._poeMaxPower = value;
  }
  public resetPoeMaxPower() {
    this._poeMaxPower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poeMaxPowerInput() {
    return this._poeMaxPower;
  }

  // poe_mode_bt_cabable - computed: false, optional: true, required: false
  private _poeModeBtCabable?: number; 
  public get poeModeBtCabable() {
    return this.getNumberAttribute('poe_mode_bt_cabable');
  }
  public set poeModeBtCabable(value: number) {
    this._poeModeBtCabable = value;
  }
  public resetPoeModeBtCabable() {
    this._poeModeBtCabable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poeModeBtCabableInput() {
    return this._poeModeBtCabable;
  }

  // poe_port_mode - computed: true, optional: true, required: false
  private _poePortMode?: string; 
  public get poePortMode() {
    return this.getStringAttribute('poe_port_mode');
  }
  public set poePortMode(value: string) {
    this._poePortMode = value;
  }
  public resetPoePortMode() {
    this._poePortMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poePortModeInput() {
    return this._poePortMode;
  }

  // poe_port_power - computed: true, optional: true, required: false
  private _poePortPower?: string; 
  public get poePortPower() {
    return this.getStringAttribute('poe_port_power');
  }
  public set poePortPower(value: string) {
    this._poePortPower = value;
  }
  public resetPoePortPower() {
    this._poePortPower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poePortPowerInput() {
    return this._poePortPower;
  }

  // poe_port_priority - computed: true, optional: true, required: false
  private _poePortPriority?: string; 
  public get poePortPriority() {
    return this.getStringAttribute('poe_port_priority');
  }
  public set poePortPriority(value: string) {
    this._poePortPriority = value;
  }
  public resetPoePortPriority() {
    this._poePortPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poePortPriorityInput() {
    return this._poePortPriority;
  }

  // poe_pre_standard_detection - computed: false, optional: true, required: false
  private _poePreStandardDetection?: string; 
  public get poePreStandardDetection() {
    return this.getStringAttribute('poe_pre_standard_detection');
  }
  public set poePreStandardDetection(value: string) {
    this._poePreStandardDetection = value;
  }
  public resetPoePreStandardDetection() {
    this._poePreStandardDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poePreStandardDetectionInput() {
    return this._poePreStandardDetection;
  }

  // poe_standard - computed: false, optional: true, required: false
  private _poeStandard?: string; 
  public get poeStandard() {
    return this.getStringAttribute('poe_standard');
  }
  public set poeStandard(value: string) {
    this._poeStandard = value;
  }
  public resetPoeStandard() {
    this._poeStandard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poeStandardInput() {
    return this._poeStandard;
  }

  // poe_status - computed: false, optional: true, required: false
  private _poeStatus?: string; 
  public get poeStatus() {
    return this.getStringAttribute('poe_status');
  }
  public set poeStatus(value: string) {
    this._poeStatus = value;
  }
  public resetPoeStatus() {
    this._poeStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poeStatusInput() {
    return this._poeStatus;
  }

  // port_name - computed: false, optional: true, required: false
  private _portName?: string; 
  public get portName() {
    return this.getStringAttribute('port_name');
  }
  public set portName(value: string) {
    this._portName = value;
  }
  public resetPortName() {
    this._portName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNameInput() {
    return this._portName;
  }

  // port_owner - computed: false, optional: true, required: false
  private _portOwner?: string; 
  public get portOwner() {
    return this.getStringAttribute('port_owner');
  }
  public set portOwner(value: string) {
    this._portOwner = value;
  }
  public resetPortOwner() {
    this._portOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portOwnerInput() {
    return this._portOwner;
  }

  // port_policy - computed: false, optional: true, required: false
  private _portPolicy?: string; 
  public get portPolicy() {
    return this.getStringAttribute('port_policy');
  }
  public set portPolicy(value: string) {
    this._portPolicy = value;
  }
  public resetPortPolicy() {
    this._portPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portPolicyInput() {
    return this._portPolicy;
  }

  // port_security_policy - computed: false, optional: true, required: false
  private _portSecurityPolicy?: string; 
  public get portSecurityPolicy() {
    return this.getStringAttribute('port_security_policy');
  }
  public set portSecurityPolicy(value: string) {
    this._portSecurityPolicy = value;
  }
  public resetPortSecurityPolicy() {
    this._portSecurityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSecurityPolicyInput() {
    return this._portSecurityPolicy;
  }

  // port_selection_criteria - computed: false, optional: true, required: false
  private _portSelectionCriteria?: string; 
  public get portSelectionCriteria() {
    return this.getStringAttribute('port_selection_criteria');
  }
  public set portSelectionCriteria(value: string) {
    this._portSelectionCriteria = value;
  }
  public resetPortSelectionCriteria() {
    this._portSelectionCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSelectionCriteriaInput() {
    return this._portSelectionCriteria;
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

  // restricted_auth_port - computed: false, optional: true, required: false
  private _restrictedAuthPort?: number; 
  public get restrictedAuthPort() {
    return this.getNumberAttribute('restricted_auth_port');
  }
  public set restrictedAuthPort(value: number) {
    this._restrictedAuthPort = value;
  }
  public resetRestrictedAuthPort() {
    this._restrictedAuthPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedAuthPortInput() {
    return this._restrictedAuthPort;
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

  // sample_direction - computed: false, optional: true, required: false
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

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // sflow_counter_interval - computed: false, optional: true, required: false
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

  // sflow_sample_rate - computed: false, optional: true, required: false
  private _sflowSampleRate?: number; 
  public get sflowSampleRate() {
    return this.getNumberAttribute('sflow_sample_rate');
  }
  public set sflowSampleRate(value: number) {
    this._sflowSampleRate = value;
  }
  public resetSflowSampleRate() {
    this._sflowSampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowSampleRateInput() {
    return this._sflowSampleRate;
  }

  // sflow_sampler - computed: false, optional: true, required: false
  private _sflowSampler?: string; 
  public get sflowSampler() {
    return this.getStringAttribute('sflow_sampler');
  }
  public set sflowSampler(value: string) {
    this._sflowSampler = value;
  }
  public resetSflowSampler() {
    this._sflowSampler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowSamplerInput() {
    return this._sflowSampler;
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

  // stp_bpdu_guard_timeout - computed: false, optional: true, required: false
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

  // trunk_member - computed: false, optional: true, required: false
  private _trunkMember?: number; 
  public get trunkMember() {
    return this.getNumberAttribute('trunk_member');
  }
  public set trunkMember(value: number) {
    this._trunkMember = value;
  }
  public resetTrunkMember() {
    this._trunkMember = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkMemberInput() {
    return this._trunkMember;
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

  // untagged_vlans - computed: false, optional: true, required: false
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

  // vlan - computed: false, optional: true, required: false
  private _vlan?: string; 
  public get vlan() {
    return this.getStringAttribute('vlan');
  }
  public set vlan(value: string) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // dhcp_snoop_option82_override - computed: false, optional: true, required: false
  private _dhcpSnoopOption82Override = new ObjectSwitchcontrollerManagedswitchPortsDhcpSnoopOption82OverrideAList(this, "dhcp_snoop_option82_override", false);
  public get dhcpSnoopOption82Override() {
    return this._dhcpSnoopOption82Override;
  }
  public putDhcpSnoopOption82Override(value: ObjectSwitchcontrollerManagedswitchPortsDhcpSnoopOption82OverrideA[] | cdktf.IResolvable) {
    this._dhcpSnoopOption82Override.internalValue = value;
  }
  public resetDhcpSnoopOption82Override() {
    this._dhcpSnoopOption82Override.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpSnoopOption82OverrideInput() {
    return this._dhcpSnoopOption82Override.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_mode: cdktf.stringToTerraform(this._accessMode),
      acl_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._aclGroup),
      adom: cdktf.stringToTerraform(this._adom),
      aggregator_mode: cdktf.stringToTerraform(this._aggregatorMode),
      allowed_vlans: cdktf.stringToTerraform(this._allowedVlans),
      allowed_vlans_all: cdktf.stringToTerraform(this._allowedVlansAll),
      arp_inspection_trust: cdktf.stringToTerraform(this._arpInspectionTrust),
      authenticated_port: cdktf.numberToTerraform(this._authenticatedPort),
      bundle: cdktf.stringToTerraform(this._bundle),
      description: cdktf.stringToTerraform(this._description),
      dhcp_snoop_option82_trust: cdktf.stringToTerraform(this._dhcpSnoopOption82Trust),
      dhcp_snooping: cdktf.stringToTerraform(this._dhcpSnooping),
      discard_mode: cdktf.stringToTerraform(this._discardMode),
      dsl_profile: cdktf.stringToTerraform(this._dslProfile),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      edge_port: cdktf.stringToTerraform(this._edgePort),
      encrypted_port: cdktf.numberToTerraform(this._encryptedPort),
      fec_capable: cdktf.numberToTerraform(this._fecCapable),
      fec_state: cdktf.stringToTerraform(this._fecState),
      flap_duration: cdktf.numberToTerraform(this._flapDuration),
      flap_rate: cdktf.numberToTerraform(this._flapRate),
      flap_timeout: cdktf.numberToTerraform(this._flapTimeout),
      flapguard: cdktf.stringToTerraform(this._flapguard),
      flow_control: cdktf.stringToTerraform(this._flowControl),
      fortiswitch_acls: cdktf.listMapper(cdktf.numberToTerraform, false)(this._fortiswitchAcls),
      id: cdktf.stringToTerraform(this._id),
      igmp_snooping: cdktf.stringToTerraform(this._igmpSnooping),
      igmp_snooping_flood_reports: cdktf.stringToTerraform(this._igmpSnoopingFloodReports),
      igmps_flood_reports: cdktf.stringToTerraform(this._igmpsFloodReports),
      igmps_flood_traffic: cdktf.stringToTerraform(this._igmpsFloodTraffic),
      interface_tags: cdktf.stringToTerraform(this._interfaceTags),
      ip_source_guard: cdktf.stringToTerraform(this._ipSourceGuard),
      isl_peer_device_sn: cdktf.stringToTerraform(this._islPeerDeviceSn),
      lacp_speed: cdktf.stringToTerraform(this._lacpSpeed),
      learning_limit: cdktf.numberToTerraform(this._learningLimit),
      link_status: cdktf.stringToTerraform(this._linkStatus),
      lldp_profile: cdktf.stringToTerraform(this._lldpProfile),
      lldp_status: cdktf.stringToTerraform(this._lldpStatus),
      loop_guard: cdktf.stringToTerraform(this._loopGuard),
      loop_guard_timeout: cdktf.numberToTerraform(this._loopGuardTimeout),
      managed_switch: cdktf.stringToTerraform(this._managedSwitch),
      matched_dpp_intf_tags: cdktf.stringToTerraform(this._matchedDppIntfTags),
      matched_dpp_policy: cdktf.stringToTerraform(this._matchedDppPolicy),
      max_bundle: cdktf.numberToTerraform(this._maxBundle),
      mcast_snooping_flood_traffic: cdktf.stringToTerraform(this._mcastSnoopingFloodTraffic),
      mclag: cdktf.stringToTerraform(this._mclag),
      mclag_icl_port: cdktf.numberToTerraform(this._mclagIclPort),
      media_type: cdktf.stringToTerraform(this._mediaType),
      member_withdrawal_behavior: cdktf.stringToTerraform(this._memberWithdrawalBehavior),
      members: cdktf.listMapper(cdktf.stringToTerraform, false)(this._members),
      min_bundle: cdktf.numberToTerraform(this._minBundle),
      mode: cdktf.stringToTerraform(this._mode),
      p2p_port: cdktf.numberToTerraform(this._p2PPort),
      packet_sample_rate: cdktf.numberToTerraform(this._packetSampleRate),
      packet_sampler: cdktf.stringToTerraform(this._packetSampler),
      pause_meter: cdktf.numberToTerraform(this._pauseMeter),
      pause_meter_resume: cdktf.stringToTerraform(this._pauseMeterResume),
      poe_max_power: cdktf.stringToTerraform(this._poeMaxPower),
      poe_mode_bt_cabable: cdktf.numberToTerraform(this._poeModeBtCabable),
      poe_port_mode: cdktf.stringToTerraform(this._poePortMode),
      poe_port_power: cdktf.stringToTerraform(this._poePortPower),
      poe_port_priority: cdktf.stringToTerraform(this._poePortPriority),
      poe_pre_standard_detection: cdktf.stringToTerraform(this._poePreStandardDetection),
      poe_standard: cdktf.stringToTerraform(this._poeStandard),
      poe_status: cdktf.stringToTerraform(this._poeStatus),
      port_name: cdktf.stringToTerraform(this._portName),
      port_owner: cdktf.stringToTerraform(this._portOwner),
      port_policy: cdktf.stringToTerraform(this._portPolicy),
      port_security_policy: cdktf.stringToTerraform(this._portSecurityPolicy),
      port_selection_criteria: cdktf.stringToTerraform(this._portSelectionCriteria),
      ptp_status: cdktf.stringToTerraform(this._ptpStatus),
      qos_policy: cdktf.stringToTerraform(this._qosPolicy),
      restricted_auth_port: cdktf.numberToTerraform(this._restrictedAuthPort),
      rpvst_port: cdktf.stringToTerraform(this._rpvstPort),
      sample_direction: cdktf.stringToTerraform(this._sampleDirection),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      sflow_counter_interval: cdktf.numberToTerraform(this._sflowCounterInterval),
      sflow_sample_rate: cdktf.numberToTerraform(this._sflowSampleRate),
      sflow_sampler: cdktf.stringToTerraform(this._sflowSampler),
      status: cdktf.stringToTerraform(this._status),
      sticky_mac: cdktf.stringToTerraform(this._stickyMac),
      stp_bpdu_guard: cdktf.stringToTerraform(this._stpBpduGuard),
      stp_bpdu_guard_timeout: cdktf.numberToTerraform(this._stpBpduGuardTimeout),
      stp_root_guard: cdktf.stringToTerraform(this._stpRootGuard),
      stp_state: cdktf.stringToTerraform(this._stpState),
      trunk_member: cdktf.numberToTerraform(this._trunkMember),
      type: cdktf.stringToTerraform(this._type),
      untagged_vlans: cdktf.stringToTerraform(this._untaggedVlans),
      vlan: cdktf.stringToTerraform(this._vlan),
      dhcp_snoop_option82_override: cdktf.listMapper(objectSwitchcontrollerManagedswitchPortsDhcpSnoopOption82OverrideAToTerraform, true)(this._dhcpSnoopOption82Override.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_mode: {
        value: cdktf.stringToHclTerraform(this._accessMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acl_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._aclGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aggregator_mode: {
        value: cdktf.stringToHclTerraform(this._aggregatorMode),
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
      allowed_vlans_all: {
        value: cdktf.stringToHclTerraform(this._allowedVlansAll),
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
      authenticated_port: {
        value: cdktf.numberToHclTerraform(this._authenticatedPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bundle: {
        value: cdktf.stringToHclTerraform(this._bundle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      dsl_profile: {
        value: cdktf.stringToHclTerraform(this._dslProfile),
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
      encrypted_port: {
        value: cdktf.numberToHclTerraform(this._encryptedPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fec_capable: {
        value: cdktf.numberToHclTerraform(this._fecCapable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fec_state: {
        value: cdktf.stringToHclTerraform(this._fecState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flap_duration: {
        value: cdktf.numberToHclTerraform(this._flapDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      flap_rate: {
        value: cdktf.numberToHclTerraform(this._flapRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      flap_timeout: {
        value: cdktf.numberToHclTerraform(this._flapTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      flapguard: {
        value: cdktf.stringToHclTerraform(this._flapguard),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flow_control: {
        value: cdktf.stringToHclTerraform(this._flowControl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortiswitch_acls: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._fortiswitchAcls),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      igmp_snooping: {
        value: cdktf.stringToHclTerraform(this._igmpSnooping),
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
      igmps_flood_reports: {
        value: cdktf.stringToHclTerraform(this._igmpsFloodReports),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      igmps_flood_traffic: {
        value: cdktf.stringToHclTerraform(this._igmpsFloodTraffic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_tags: {
        value: cdktf.stringToHclTerraform(this._interfaceTags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_source_guard: {
        value: cdktf.stringToHclTerraform(this._ipSourceGuard),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      isl_peer_device_sn: {
        value: cdktf.stringToHclTerraform(this._islPeerDeviceSn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lacp_speed: {
        value: cdktf.stringToHclTerraform(this._lacpSpeed),
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
      link_status: {
        value: cdktf.stringToHclTerraform(this._linkStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lldp_profile: {
        value: cdktf.stringToHclTerraform(this._lldpProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lldp_status: {
        value: cdktf.stringToHclTerraform(this._lldpStatus),
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
      loop_guard_timeout: {
        value: cdktf.numberToHclTerraform(this._loopGuardTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      managed_switch: {
        value: cdktf.stringToHclTerraform(this._managedSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      matched_dpp_intf_tags: {
        value: cdktf.stringToHclTerraform(this._matchedDppIntfTags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      matched_dpp_policy: {
        value: cdktf.stringToHclTerraform(this._matchedDppPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_bundle: {
        value: cdktf.numberToHclTerraform(this._maxBundle),
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
      mclag: {
        value: cdktf.stringToHclTerraform(this._mclag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mclag_icl_port: {
        value: cdktf.numberToHclTerraform(this._mclagIclPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      media_type: {
        value: cdktf.stringToHclTerraform(this._mediaType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_withdrawal_behavior: {
        value: cdktf.stringToHclTerraform(this._memberWithdrawalBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      members: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._members),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      min_bundle: {
        value: cdktf.numberToHclTerraform(this._minBundle),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      p2p_port: {
        value: cdktf.numberToHclTerraform(this._p2PPort),
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
      pause_meter: {
        value: cdktf.numberToHclTerraform(this._pauseMeter),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pause_meter_resume: {
        value: cdktf.stringToHclTerraform(this._pauseMeterResume),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      poe_max_power: {
        value: cdktf.stringToHclTerraform(this._poeMaxPower),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      poe_mode_bt_cabable: {
        value: cdktf.numberToHclTerraform(this._poeModeBtCabable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      poe_port_mode: {
        value: cdktf.stringToHclTerraform(this._poePortMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      poe_port_power: {
        value: cdktf.stringToHclTerraform(this._poePortPower),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      poe_port_priority: {
        value: cdktf.stringToHclTerraform(this._poePortPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      poe_pre_standard_detection: {
        value: cdktf.stringToHclTerraform(this._poePreStandardDetection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      poe_standard: {
        value: cdktf.stringToHclTerraform(this._poeStandard),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      poe_status: {
        value: cdktf.stringToHclTerraform(this._poeStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_name: {
        value: cdktf.stringToHclTerraform(this._portName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_owner: {
        value: cdktf.stringToHclTerraform(this._portOwner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_policy: {
        value: cdktf.stringToHclTerraform(this._portPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_security_policy: {
        value: cdktf.stringToHclTerraform(this._portSecurityPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_selection_criteria: {
        value: cdktf.stringToHclTerraform(this._portSelectionCriteria),
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
      restricted_auth_port: {
        value: cdktf.numberToHclTerraform(this._restrictedAuthPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
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
      sflow_sample_rate: {
        value: cdktf.numberToHclTerraform(this._sflowSampleRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sflow_sampler: {
        value: cdktf.stringToHclTerraform(this._sflowSampler),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      trunk_member: {
        value: cdktf.numberToHclTerraform(this._trunkMember),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      vlan: {
        value: cdktf.stringToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_snoop_option82_override: {
        value: cdktf.listMapperHcl(objectSwitchcontrollerManagedswitchPortsDhcpSnoopOption82OverrideAToHclTerraform, true)(this._dhcpSnoopOption82Override.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSwitchcontrollerManagedswitchPortsDhcpSnoopOption82OverrideAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
