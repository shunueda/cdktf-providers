// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchcontrollerManagedswitchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#access_profile SwitchcontrollerManagedswitch#access_profile}
  */
  readonly accessProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#delayed_restart_trigger SwitchcontrollerManagedswitch#delayed_restart_trigger}
  */
  readonly delayedRestartTrigger?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#description SwitchcontrollerManagedswitch#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#dhcp_server_access_list SwitchcontrollerManagedswitch#dhcp_server_access_list}
  */
  readonly dhcpServerAccessList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#directly_connected SwitchcontrollerManagedswitch#directly_connected}
  */
  readonly directlyConnected?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#dynamic_capability SwitchcontrollerManagedswitch#dynamic_capability}
  */
  readonly dynamicCapability?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#dynamic_sort_subtable SwitchcontrollerManagedswitch#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#dynamically_discovered SwitchcontrollerManagedswitch#dynamically_discovered}
  */
  readonly dynamicallyDiscovered?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#firmware_provision SwitchcontrollerManagedswitch#firmware_provision}
  */
  readonly firmwareProvision?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#firmware_provision_latest SwitchcontrollerManagedswitch#firmware_provision_latest}
  */
  readonly firmwareProvisionLatest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#firmware_provision_version SwitchcontrollerManagedswitch#firmware_provision_version}
  */
  readonly firmwareProvisionVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#flow_identity SwitchcontrollerManagedswitch#flow_identity}
  */
  readonly flowIdentity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#fsw_wan1_admin SwitchcontrollerManagedswitch#fsw_wan1_admin}
  */
  readonly fswWan1Admin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#fsw_wan1_peer SwitchcontrollerManagedswitch#fsw_wan1_peer}
  */
  readonly fswWan1Peer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#fsw_wan2_admin SwitchcontrollerManagedswitch#fsw_wan2_admin}
  */
  readonly fswWan2Admin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#fsw_wan2_peer SwitchcontrollerManagedswitch#fsw_wan2_peer}
  */
  readonly fswWan2Peer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#get_all_tables SwitchcontrollerManagedswitch#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#id SwitchcontrollerManagedswitch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#l3_discovered SwitchcontrollerManagedswitch#l3_discovered}
  */
  readonly l3Discovered?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#max_allowed_trunk_members SwitchcontrollerManagedswitch#max_allowed_trunk_members}
  */
  readonly maxAllowedTrunkMembers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#mclag_igmp_snooping_aware SwitchcontrollerManagedswitch#mclag_igmp_snooping_aware}
  */
  readonly mclagIgmpSnoopingAware?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#mgmt_mode SwitchcontrollerManagedswitch#mgmt_mode}
  */
  readonly mgmtMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#name SwitchcontrollerManagedswitch#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#override_snmp_community SwitchcontrollerManagedswitch#override_snmp_community}
  */
  readonly overrideSnmpCommunity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#override_snmp_sysinfo SwitchcontrollerManagedswitch#override_snmp_sysinfo}
  */
  readonly overrideSnmpSysinfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#override_snmp_trap_threshold SwitchcontrollerManagedswitch#override_snmp_trap_threshold}
  */
  readonly overrideSnmpTrapThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#override_snmp_user SwitchcontrollerManagedswitch#override_snmp_user}
  */
  readonly overrideSnmpUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#owner_vdom SwitchcontrollerManagedswitch#owner_vdom}
  */
  readonly ownerVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#poe_detection_type SwitchcontrollerManagedswitch#poe_detection_type}
  */
  readonly poeDetectionType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#poe_lldp_detection SwitchcontrollerManagedswitch#poe_lldp_detection}
  */
  readonly poeLldpDetection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#poe_pre_standard_detection SwitchcontrollerManagedswitch#poe_pre_standard_detection}
  */
  readonly poePreStandardDetection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#pre_provisioned SwitchcontrollerManagedswitch#pre_provisioned}
  */
  readonly preProvisioned?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#ptp_profile SwitchcontrollerManagedswitch#ptp_profile}
  */
  readonly ptpProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#ptp_status SwitchcontrollerManagedswitch#ptp_status}
  */
  readonly ptpStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#purdue_level SwitchcontrollerManagedswitch#purdue_level}
  */
  readonly purdueLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#qos_drop_policy SwitchcontrollerManagedswitch#qos_drop_policy}
  */
  readonly qosDropPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#qos_red_probability SwitchcontrollerManagedswitch#qos_red_probability}
  */
  readonly qosRedProbability?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#radius_nas_ip SwitchcontrollerManagedswitch#radius_nas_ip}
  */
  readonly radiusNasIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#radius_nas_ip_override SwitchcontrollerManagedswitch#radius_nas_ip_override}
  */
  readonly radiusNasIpOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#route_offload SwitchcontrollerManagedswitch#route_offload}
  */
  readonly routeOffload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#route_offload_mclag SwitchcontrollerManagedswitch#route_offload_mclag}
  */
  readonly routeOffloadMclag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#sn SwitchcontrollerManagedswitch#sn}
  */
  readonly sn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#staged_image_version SwitchcontrollerManagedswitch#staged_image_version}
  */
  readonly stagedImageVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#switch_device_tag SwitchcontrollerManagedswitch#switch_device_tag}
  */
  readonly switchDeviceTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#switch_dhcp_opt43_key SwitchcontrollerManagedswitch#switch_dhcp_opt43_key}
  */
  readonly switchDhcpOpt43Key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#switch_id SwitchcontrollerManagedswitch#switch_id}
  */
  readonly switchId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#switch_profile SwitchcontrollerManagedswitch#switch_profile}
  */
  readonly switchProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#tdr_supported SwitchcontrollerManagedswitch#tdr_supported}
  */
  readonly tdrSupported?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#tunnel_discovered SwitchcontrollerManagedswitch#tunnel_discovered}
  */
  readonly tunnelDiscovered?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#type SwitchcontrollerManagedswitch#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#vdomparam SwitchcontrollerManagedswitch#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#version SwitchcontrollerManagedswitch#version}
  */
  readonly version?: number;
  /**
  * custom_command block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#custom_command SwitchcontrollerManagedswitch#custom_command}
  */
  readonly customCommand?: SwitchcontrollerManagedswitchCustomCommand[] | cdktf.IResolvable;
  /**
  * dhcp_snooping_static_client block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#dhcp_snooping_static_client SwitchcontrollerManagedswitch#dhcp_snooping_static_client}
  */
  readonly dhcpSnoopingStaticClient?: SwitchcontrollerManagedswitchDhcpSnoopingStaticClient[] | cdktf.IResolvable;
  /**
  * igmp_snooping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#igmp_snooping SwitchcontrollerManagedswitch#igmp_snooping}
  */
  readonly igmpSnooping?: SwitchcontrollerManagedswitchIgmpSnooping;
  /**
  * ip_source_guard block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#ip_source_guard SwitchcontrollerManagedswitch#ip_source_guard}
  */
  readonly ipSourceGuard?: SwitchcontrollerManagedswitchIpSourceGuard[] | cdktf.IResolvable;
  /**
  * mirror block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#mirror SwitchcontrollerManagedswitch#mirror}
  */
  readonly mirror?: SwitchcontrollerManagedswitchMirror[] | cdktf.IResolvable;
  /**
  * n802_1x_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#n802_1x_settings SwitchcontrollerManagedswitch#n802_1x_settings}
  */
  readonly n8021XSettings?: SwitchcontrollerManagedswitchN8021XSettings;
  /**
  * ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#ports SwitchcontrollerManagedswitch#ports}
  */
  readonly ports?: SwitchcontrollerManagedswitchPorts[] | cdktf.IResolvable;
  /**
  * remote_log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#remote_log SwitchcontrollerManagedswitch#remote_log}
  */
  readonly remoteLog?: SwitchcontrollerManagedswitchRemoteLog[] | cdktf.IResolvable;
  /**
  * route_offload_router block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#route_offload_router SwitchcontrollerManagedswitch#route_offload_router}
  */
  readonly routeOffloadRouter?: SwitchcontrollerManagedswitchRouteOffloadRouter[] | cdktf.IResolvable;
  /**
  * router_static block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#router_static SwitchcontrollerManagedswitch#router_static}
  */
  readonly routerStatic?: SwitchcontrollerManagedswitchRouterStatic[] | cdktf.IResolvable;
  /**
  * router_vrf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#router_vrf SwitchcontrollerManagedswitch#router_vrf}
  */
  readonly routerVrf?: SwitchcontrollerManagedswitchRouterVrf[] | cdktf.IResolvable;
  /**
  * snmp_community block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#snmp_community SwitchcontrollerManagedswitch#snmp_community}
  */
  readonly snmpCommunity?: SwitchcontrollerManagedswitchSnmpCommunity[] | cdktf.IResolvable;
  /**
  * snmp_sysinfo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#snmp_sysinfo SwitchcontrollerManagedswitch#snmp_sysinfo}
  */
  readonly snmpSysinfo?: SwitchcontrollerManagedswitchSnmpSysinfo;
  /**
  * snmp_trap_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#snmp_trap_threshold SwitchcontrollerManagedswitch#snmp_trap_threshold}
  */
  readonly snmpTrapThreshold?: SwitchcontrollerManagedswitchSnmpTrapThreshold;
  /**
  * snmp_user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#snmp_user SwitchcontrollerManagedswitch#snmp_user}
  */
  readonly snmpUser?: SwitchcontrollerManagedswitchSnmpUser[] | cdktf.IResolvable;
  /**
  * static_mac block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#static_mac SwitchcontrollerManagedswitch#static_mac}
  */
  readonly staticMac?: SwitchcontrollerManagedswitchStaticMac[] | cdktf.IResolvable;
  /**
  * storm_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#storm_control SwitchcontrollerManagedswitch#storm_control}
  */
  readonly stormControl?: SwitchcontrollerManagedswitchStormControl;
  /**
  * stp_instance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#stp_instance SwitchcontrollerManagedswitch#stp_instance}
  */
  readonly stpInstance?: SwitchcontrollerManagedswitchStpInstance[] | cdktf.IResolvable;
  /**
  * stp_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#stp_settings SwitchcontrollerManagedswitch#stp_settings}
  */
  readonly stpSettings?: SwitchcontrollerManagedswitchStpSettings;
  /**
  * switch_log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#switch_log SwitchcontrollerManagedswitch#switch_log}
  */
  readonly switchLog?: SwitchcontrollerManagedswitchSwitchLog;
  /**
  * switch_stp_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#switch_stp_settings SwitchcontrollerManagedswitch#switch_stp_settings}
  */
  readonly switchStpSettings?: SwitchcontrollerManagedswitchSwitchStpSettings;
  /**
  * system_dhcp_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#system_dhcp_server SwitchcontrollerManagedswitch#system_dhcp_server}
  */
  readonly systemDhcpServer?: SwitchcontrollerManagedswitchSystemDhcpServer[] | cdktf.IResolvable;
  /**
  * system_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#system_interface SwitchcontrollerManagedswitch#system_interface}
  */
  readonly systemInterface?: SwitchcontrollerManagedswitchSystemInterface[] | cdktf.IResolvable;
  /**
  * vlan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#vlan SwitchcontrollerManagedswitch#vlan}
  */
  readonly vlan?: SwitchcontrollerManagedswitchVlan[] | cdktf.IResolvable;
}
export interface SwitchcontrollerManagedswitchCustomCommand {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#command_entry SwitchcontrollerManagedswitch#command_entry}
  */
  readonly commandEntry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#command_name SwitchcontrollerManagedswitch#command_name}
  */
  readonly commandName?: string;
}

export function switchcontrollerManagedswitchCustomCommandToTerraform(struct?: SwitchcontrollerManagedswitchCustomCommand | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command_entry: cdktf.stringToTerraform(struct!.commandEntry),
    command_name: cdktf.stringToTerraform(struct!.commandName),
  }
}


export function switchcontrollerManagedswitchCustomCommandToHclTerraform(struct?: SwitchcontrollerManagedswitchCustomCommand | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command_entry: {
      value: cdktf.stringToHclTerraform(struct!.commandEntry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    command_name: {
      value: cdktf.stringToHclTerraform(struct!.commandName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerManagedswitchCustomCommandOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerManagedswitchCustomCommand | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commandEntry !== undefined) {
      hasAnyValues = true;
      internalValueResult.commandEntry = this._commandEntry;
    }
    if (this._commandName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commandName = this._commandName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerManagedswitchCustomCommand | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commandEntry = undefined;
      this._commandName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commandEntry = value.commandEntry;
      this._commandName = value.commandName;
    }
  }

  // command_entry - computed: false, optional: true, required: false
  private _commandEntry?: string; 
  public get commandEntry() {
    return this.getStringAttribute('command_entry');
  }
  public set commandEntry(value: string) {
    this._commandEntry = value;
  }
  public resetCommandEntry() {
    this._commandEntry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandEntryInput() {
    return this._commandEntry;
  }

  // command_name - computed: false, optional: true, required: false
  private _commandName?: string; 
  public get commandName() {
    return this.getStringAttribute('command_name');
  }
  public set commandName(value: string) {
    this._commandName = value;
  }
  public resetCommandName() {
    this._commandName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandNameInput() {
    return this._commandName;
  }
}

export class SwitchcontrollerManagedswitchCustomCommandList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerManagedswitchCustomCommand[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerManagedswitchCustomCommandOutputReference {
    return new SwitchcontrollerManagedswitchCustomCommandOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchcontrollerManagedswitchDhcpSnoopingStaticClient {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#ip SwitchcontrollerManagedswitch#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#mac SwitchcontrollerManagedswitch#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#name SwitchcontrollerManagedswitch#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#port SwitchcontrollerManagedswitch#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#vlan SwitchcontrollerManagedswitch#vlan}
  */
  readonly vlan?: string;
}

export function switchcontrollerManagedswitchDhcpSnoopingStaticClientToTerraform(struct?: SwitchcontrollerManagedswitchDhcpSnoopingStaticClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    mac: cdktf.stringToTerraform(struct!.mac),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.stringToTerraform(struct!.port),
    vlan: cdktf.stringToTerraform(struct!.vlan),
  }
}


export function switchcontrollerManagedswitchDhcpSnoopingStaticClientToHclTerraform(struct?: SwitchcontrollerManagedswitchDhcpSnoopingStaticClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan: {
      value: cdktf.stringToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerManagedswitchDhcpSnoopingStaticClientOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerManagedswitchDhcpSnoopingStaticClient | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerManagedswitchDhcpSnoopingStaticClient | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._mac = undefined;
      this._name = undefined;
      this._port = undefined;
      this._vlan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._mac = value.mac;
      this._name = value.name;
      this._port = value.port;
      this._vlan = value.vlan;
    }
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // mac - computed: true, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
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

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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
}

export class SwitchcontrollerManagedswitchDhcpSnoopingStaticClientList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerManagedswitchDhcpSnoopingStaticClient[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerManagedswitchDhcpSnoopingStaticClientOutputReference {
    return new SwitchcontrollerManagedswitchDhcpSnoopingStaticClientOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchcontrollerManagedswitchIgmpSnoopingVlans {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#proxy SwitchcontrollerManagedswitch#proxy}
  */
  readonly proxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#querier SwitchcontrollerManagedswitch#querier}
  */
  readonly querier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#querier_addr SwitchcontrollerManagedswitch#querier_addr}
  */
  readonly querierAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#version SwitchcontrollerManagedswitch#version}
  */
  readonly version?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#vlan_name SwitchcontrollerManagedswitch#vlan_name}
  */
  readonly vlanName?: string;
}

export function switchcontrollerManagedswitchIgmpSnoopingVlansToTerraform(struct?: SwitchcontrollerManagedswitchIgmpSnoopingVlans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    proxy: cdktf.stringToTerraform(struct!.proxy),
    querier: cdktf.stringToTerraform(struct!.querier),
    querier_addr: cdktf.stringToTerraform(struct!.querierAddr),
    version: cdktf.numberToTerraform(struct!.version),
    vlan_name: cdktf.stringToTerraform(struct!.vlanName),
  }
}


export function switchcontrollerManagedswitchIgmpSnoopingVlansToHclTerraform(struct?: SwitchcontrollerManagedswitchIgmpSnoopingVlans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    proxy: {
      value: cdktf.stringToHclTerraform(struct!.proxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    querier: {
      value: cdktf.stringToHclTerraform(struct!.querier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    querier_addr: {
      value: cdktf.stringToHclTerraform(struct!.querierAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class SwitchcontrollerManagedswitchIgmpSnoopingVlansOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerManagedswitchIgmpSnoopingVlans | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._proxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy;
    }
    if (this._querier !== undefined) {
      hasAnyValues = true;
      internalValueResult.querier = this._querier;
    }
    if (this._querierAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.querierAddr = this._querierAddr;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._vlanName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanName = this._vlanName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerManagedswitchIgmpSnoopingVlans | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._proxy = undefined;
      this._querier = undefined;
      this._querierAddr = undefined;
      this._version = undefined;
      this._vlanName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._proxy = value.proxy;
      this._querier = value.querier;
      this._querierAddr = value.querierAddr;
      this._version = value.version;
      this._vlanName = value.vlanName;
    }
  }

  // proxy - computed: true, optional: true, required: false
  private _proxy?: string; 
  public get proxy() {
    return this.getStringAttribute('proxy');
  }
  public set proxy(value: string) {
    this._proxy = value;
  }
  public resetProxy() {
    this._proxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy;
  }

  // querier - computed: true, optional: true, required: false
  private _querier?: string; 
  public get querier() {
    return this.getStringAttribute('querier');
  }
  public set querier(value: string) {
    this._querier = value;
  }
  public resetQuerier() {
    this._querier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get querierInput() {
    return this._querier;
  }

  // querier_addr - computed: true, optional: true, required: false
  private _querierAddr?: string; 
  public get querierAddr() {
    return this.getStringAttribute('querier_addr');
  }
  public set querierAddr(value: string) {
    this._querierAddr = value;
  }
  public resetQuerierAddr() {
    this._querierAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get querierAddrInput() {
    return this._querierAddr;
  }

  // version - computed: true, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // vlan_name - computed: true, optional: true, required: false
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

export class SwitchcontrollerManagedswitchIgmpSnoopingVlansList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerManagedswitchIgmpSnoopingVlans[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerManagedswitchIgmpSnoopingVlansOutputReference {
    return new SwitchcontrollerManagedswitchIgmpSnoopingVlansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchcontrollerManagedswitchIgmpSnooping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#aging_time SwitchcontrollerManagedswitch#aging_time}
  */
  readonly agingTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#flood_unknown_multicast SwitchcontrollerManagedswitch#flood_unknown_multicast}
  */
  readonly floodUnknownMulticast?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#local_override SwitchcontrollerManagedswitch#local_override}
  */
  readonly localOverride?: string;
  /**
  * vlans block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#vlans SwitchcontrollerManagedswitch#vlans}
  */
  readonly vlans?: SwitchcontrollerManagedswitchIgmpSnoopingVlans[] | cdktf.IResolvable;
}

export function switchcontrollerManagedswitchIgmpSnoopingToTerraform(struct?: SwitchcontrollerManagedswitchIgmpSnoopingOutputReference | SwitchcontrollerManagedswitchIgmpSnooping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aging_time: cdktf.numberToTerraform(struct!.agingTime),
    flood_unknown_multicast: cdktf.stringToTerraform(struct!.floodUnknownMulticast),
    local_override: cdktf.stringToTerraform(struct!.localOverride),
    vlans: cdktf.listMapper(switchcontrollerManagedswitchIgmpSnoopingVlansToTerraform, true)(struct!.vlans),
  }
}


export function switchcontrollerManagedswitchIgmpSnoopingToHclTerraform(struct?: SwitchcontrollerManagedswitchIgmpSnoopingOutputReference | SwitchcontrollerManagedswitchIgmpSnooping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aging_time: {
      value: cdktf.numberToHclTerraform(struct!.agingTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    flood_unknown_multicast: {
      value: cdktf.stringToHclTerraform(struct!.floodUnknownMulticast),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_override: {
      value: cdktf.stringToHclTerraform(struct!.localOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlans: {
      value: cdktf.listMapperHcl(switchcontrollerManagedswitchIgmpSnoopingVlansToHclTerraform, true)(struct!.vlans),
      isBlock: true,
      type: "list",
      storageClassType: "SwitchcontrollerManagedswitchIgmpSnoopingVlansList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerManagedswitchIgmpSnoopingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwitchcontrollerManagedswitchIgmpSnooping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agingTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.agingTime = this._agingTime;
    }
    if (this._floodUnknownMulticast !== undefined) {
      hasAnyValues = true;
      internalValueResult.floodUnknownMulticast = this._floodUnknownMulticast;
    }
    if (this._localOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.localOverride = this._localOverride;
    }
    if (this._vlans?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlans = this._vlans?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerManagedswitchIgmpSnooping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agingTime = undefined;
      this._floodUnknownMulticast = undefined;
      this._localOverride = undefined;
      this._vlans.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agingTime = value.agingTime;
      this._floodUnknownMulticast = value.floodUnknownMulticast;
      this._localOverride = value.localOverride;
      this._vlans.internalValue = value.vlans;
    }
  }

  // aging_time - computed: true, optional: true, required: false
  private _agingTime?: number; 
  public get agingTime() {
    return this.getNumberAttribute('aging_time');
  }
  public set agingTime(value: number) {
    this._agingTime = value;
  }
  public resetAgingTime() {
    this._agingTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agingTimeInput() {
    return this._agingTime;
  }

  // flood_unknown_multicast - computed: true, optional: true, required: false
  private _floodUnknownMulticast?: string; 
  public get floodUnknownMulticast() {
    return this.getStringAttribute('flood_unknown_multicast');
  }
  public set floodUnknownMulticast(value: string) {
    this._floodUnknownMulticast = value;
  }
  public resetFloodUnknownMulticast() {
    this._floodUnknownMulticast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floodUnknownMulticastInput() {
    return this._floodUnknownMulticast;
  }

  // local_override - computed: true, optional: true, required: false
  private _localOverride?: string; 
  public get localOverride() {
    return this.getStringAttribute('local_override');
  }
  public set localOverride(value: string) {
    this._localOverride = value;
  }
  public resetLocalOverride() {
    this._localOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localOverrideInput() {
    return this._localOverride;
  }

  // vlans - computed: false, optional: true, required: false
  private _vlans = new SwitchcontrollerManagedswitchIgmpSnoopingVlansList(this, "vlans", false);
  public get vlans() {
    return this._vlans;
  }
  public putVlans(value: SwitchcontrollerManagedswitchIgmpSnoopingVlans[] | cdktf.IResolvable) {
    this._vlans.internalValue = value;
  }
  public resetVlans() {
    this._vlans.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlansInput() {
    return this._vlans.internalValue;
  }
}
export interface SwitchcontrollerManagedswitchIpSourceGuardBindingEntry {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#entry_name SwitchcontrollerManagedswitch#entry_name}
  */
  readonly entryName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#ip SwitchcontrollerManagedswitch#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#mac SwitchcontrollerManagedswitch#mac}
  */
  readonly mac?: string;
}

export function switchcontrollerManagedswitchIpSourceGuardBindingEntryToTerraform(struct?: SwitchcontrollerManagedswitchIpSourceGuardBindingEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry_name: cdktf.stringToTerraform(struct!.entryName),
    ip: cdktf.stringToTerraform(struct!.ip),
    mac: cdktf.stringToTerraform(struct!.mac),
  }
}


export function switchcontrollerManagedswitchIpSourceGuardBindingEntryToHclTerraform(struct?: SwitchcontrollerManagedswitchIpSourceGuardBindingEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entry_name: {
      value: cdktf.stringToHclTerraform(struct!.entryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerManagedswitchIpSourceGuardBindingEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerManagedswitchIpSourceGuardBindingEntry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryName = this._entryName;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerManagedswitchIpSourceGuardBindingEntry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entryName = undefined;
      this._ip = undefined;
      this._mac = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entryName = value.entryName;
      this._ip = value.ip;
      this._mac = value.mac;
    }
  }

  // entry_name - computed: false, optional: true, required: false
  private _entryName?: string; 
  public get entryName() {
    return this.getStringAttribute('entry_name');
  }
  public set entryName(value: string) {
    this._entryName = value;
  }
  public resetEntryName() {
    this._entryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryNameInput() {
    return this._entryName;
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // mac - computed: true, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }
}

export class SwitchcontrollerManagedswitchIpSourceGuardBindingEntryList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerManagedswitchIpSourceGuardBindingEntry[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerManagedswitchIpSourceGuardBindingEntryOutputReference {
    return new SwitchcontrollerManagedswitchIpSourceGuardBindingEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchcontrollerManagedswitchIpSourceGuard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#description SwitchcontrollerManagedswitch#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#port SwitchcontrollerManagedswitch#port}
  */
  readonly port?: string;
  /**
  * binding_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#binding_entry SwitchcontrollerManagedswitch#binding_entry}
  */
  readonly bindingEntry?: SwitchcontrollerManagedswitchIpSourceGuardBindingEntry[] | cdktf.IResolvable;
}

export function switchcontrollerManagedswitchIpSourceGuardToTerraform(struct?: SwitchcontrollerManagedswitchIpSourceGuard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    port: cdktf.stringToTerraform(struct!.port),
    binding_entry: cdktf.listMapper(switchcontrollerManagedswitchIpSourceGuardBindingEntryToTerraform, true)(struct!.bindingEntry),
  }
}


export function switchcontrollerManagedswitchIpSourceGuardToHclTerraform(struct?: SwitchcontrollerManagedswitchIpSourceGuard | cdktf.IResolvable): any {
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
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    binding_entry: {
      value: cdktf.listMapperHcl(switchcontrollerManagedswitchIpSourceGuardBindingEntryToHclTerraform, true)(struct!.bindingEntry),
      isBlock: true,
      type: "list",
      storageClassType: "SwitchcontrollerManagedswitchIpSourceGuardBindingEntryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerManagedswitchIpSourceGuardOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerManagedswitchIpSourceGuard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._bindingEntry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindingEntry = this._bindingEntry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerManagedswitchIpSourceGuard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._port = undefined;
      this._bindingEntry.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._port = value.port;
      this._bindingEntry.internalValue = value.bindingEntry;
    }
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

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // binding_entry - computed: false, optional: true, required: false
  private _bindingEntry = new SwitchcontrollerManagedswitchIpSourceGuardBindingEntryList(this, "binding_entry", false);
  public get bindingEntry() {
    return this._bindingEntry;
  }
  public putBindingEntry(value: SwitchcontrollerManagedswitchIpSourceGuardBindingEntry[] | cdktf.IResolvable) {
    this._bindingEntry.internalValue = value;
  }
  public resetBindingEntry() {
    this._bindingEntry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingEntryInput() {
    return this._bindingEntry.internalValue;
  }
}

export class SwitchcontrollerManagedswitchIpSourceGuardList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerManagedswitchIpSourceGuard[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerManagedswitchIpSourceGuardOutputReference {
    return new SwitchcontrollerManagedswitchIpSourceGuardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchcontrollerManagedswitchMirrorSrcEgress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#name SwitchcontrollerManagedswitch#name}
  */
  readonly name?: string;
}

export function switchcontrollerManagedswitchMirrorSrcEgressToTerraform(struct?: SwitchcontrollerManagedswitchMirrorSrcEgress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function switchcontrollerManagedswitchMirrorSrcEgressToHclTerraform(struct?: SwitchcontrollerManagedswitchMirrorSrcEgress | cdktf.IResolvable): any {
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

export class SwitchcontrollerManagedswitchMirrorSrcEgressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerManagedswitchMirrorSrcEgress | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SwitchcontrollerManagedswitchMirrorSrcEgress | cdktf.IResolvable | undefined) {
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
}

export class SwitchcontrollerManagedswitchMirrorSrcEgressList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerManagedswitchMirrorSrcEgress[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerManagedswitchMirrorSrcEgressOutputReference {
    return new SwitchcontrollerManagedswitchMirrorSrcEgressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchcontrollerManagedswitchMirrorSrcIngress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#name SwitchcontrollerManagedswitch#name}
  */
  readonly name?: string;
}

export function switchcontrollerManagedswitchMirrorSrcIngressToTerraform(struct?: SwitchcontrollerManagedswitchMirrorSrcIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function switchcontrollerManagedswitchMirrorSrcIngressToHclTerraform(struct?: SwitchcontrollerManagedswitchMirrorSrcIngress | cdktf.IResolvable): any {
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

export class SwitchcontrollerManagedswitchMirrorSrcIngressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerManagedswitchMirrorSrcIngress | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SwitchcontrollerManagedswitchMirrorSrcIngress | cdktf.IResolvable | undefined) {
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
}

export class SwitchcontrollerManagedswitchMirrorSrcIngressList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerManagedswitchMirrorSrcIngress[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerManagedswitchMirrorSrcIngressOutputReference {
    return new SwitchcontrollerManagedswitchMirrorSrcIngressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchcontrollerManagedswitchMirror {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#dst SwitchcontrollerManagedswitch#dst}
  */
  readonly dst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#name SwitchcontrollerManagedswitch#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#status SwitchcontrollerManagedswitch#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#switching_packet SwitchcontrollerManagedswitch#switching_packet}
  */
  readonly switchingPacket?: string;
  /**
  * src_egress block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#src_egress SwitchcontrollerManagedswitch#src_egress}
  */
  readonly srcEgress?: SwitchcontrollerManagedswitchMirrorSrcEgress[] | cdktf.IResolvable;
  /**
  * src_ingress block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#src_ingress SwitchcontrollerManagedswitch#src_ingress}
  */
  readonly srcIngress?: SwitchcontrollerManagedswitchMirrorSrcIngress[] | cdktf.IResolvable;
}

export function switchcontrollerManagedswitchMirrorToTerraform(struct?: SwitchcontrollerManagedswitchMirror | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst: cdktf.stringToTerraform(struct!.dst),
    name: cdktf.stringToTerraform(struct!.name),
    status: cdktf.stringToTerraform(struct!.status),
    switching_packet: cdktf.stringToTerraform(struct!.switchingPacket),
    src_egress: cdktf.listMapper(switchcontrollerManagedswitchMirrorSrcEgressToTerraform, true)(struct!.srcEgress),
    src_ingress: cdktf.listMapper(switchcontrollerManagedswitchMirrorSrcIngressToTerraform, true)(struct!.srcIngress),
  }
}


export function switchcontrollerManagedswitchMirrorToHclTerraform(struct?: SwitchcontrollerManagedswitchMirror | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst: {
      value: cdktf.stringToHclTerraform(struct!.dst),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switching_packet: {
      value: cdktf.stringToHclTerraform(struct!.switchingPacket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_egress: {
      value: cdktf.listMapperHcl(switchcontrollerManagedswitchMirrorSrcEgressToHclTerraform, true)(struct!.srcEgress),
      isBlock: true,
      type: "set",
      storageClassType: "SwitchcontrollerManagedswitchMirrorSrcEgressList",
    },
    src_ingress: {
      value: cdktf.listMapperHcl(switchcontrollerManagedswitchMirrorSrcIngressToHclTerraform, true)(struct!.srcIngress),
      isBlock: true,
      type: "set",
      storageClassType: "SwitchcontrollerManagedswitchMirrorSrcIngressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerManagedswitchMirrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerManagedswitchMirror | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dst !== undefined) {
      hasAnyValues = true;
      internalValueResult.dst = this._dst;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._switchingPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchingPacket = this._switchingPacket;
    }
    if (this._srcEgress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcEgress = this._srcEgress?.internalValue;
    }
    if (this._srcIngress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIngress = this._srcIngress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerManagedswitchMirror | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dst = undefined;
      this._name = undefined;
      this._status = undefined;
      this._switchingPacket = undefined;
      this._srcEgress.internalValue = undefined;
      this._srcIngress.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dst = value.dst;
      this._name = value.name;
      this._status = value.status;
      this._switchingPacket = value.switchingPacket;
      this._srcEgress.internalValue = value.srcEgress;
      this._srcIngress.internalValue = value.srcIngress;
    }
  }

  // dst - computed: false, optional: true, required: false
  private _dst?: string; 
  public get dst() {
    return this.getStringAttribute('dst');
  }
  public set dst(value: string) {
    this._dst = value;
  }
  public resetDst() {
    this._dst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstInput() {
    return this._dst;
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

  // switching_packet - computed: true, optional: true, required: false
  private _switchingPacket?: string; 
  public get switchingPacket() {
    return this.getStringAttribute('switching_packet');
  }
  public set switchingPacket(value: string) {
    this._switchingPacket = value;
  }
  public resetSwitchingPacket() {
    this._switchingPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchingPacketInput() {
    return this._switchingPacket;
  }

  // src_egress - computed: false, optional: true, required: false
  private _srcEgress = new SwitchcontrollerManagedswitchMirrorSrcEgressList(this, "src_egress", true);
  public get srcEgress() {
    return this._srcEgress;
  }
  public putSrcEgress(value: SwitchcontrollerManagedswitchMirrorSrcEgress[] | cdktf.IResolvable) {
    this._srcEgress.internalValue = value;
  }
  public resetSrcEgress() {
    this._srcEgress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcEgressInput() {
    return this._srcEgress.internalValue;
  }

  // src_ingress - computed: false, optional: true, required: false
  private _srcIngress = new SwitchcontrollerManagedswitchMirrorSrcIngressList(this, "src_ingress", true);
  public get srcIngress() {
    return this._srcIngress;
  }
  public putSrcIngress(value: SwitchcontrollerManagedswitchMirrorSrcIngress[] | cdktf.IResolvable) {
    this._srcIngress.internalValue = value;
  }
  public resetSrcIngress() {
    this._srcIngress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIngressInput() {
    return this._srcIngress.internalValue;
  }
}

export class SwitchcontrollerManagedswitchMirrorList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerManagedswitchMirror[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerManagedswitchMirrorOutputReference {
    return new SwitchcontrollerManagedswitchMirrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchcontrollerManagedswitchN8021XSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#link_down_auth SwitchcontrollerManagedswitch#link_down_auth}
  */
  readonly linkDownAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#local_override SwitchcontrollerManagedswitch#local_override}
  */
  readonly localOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#mab_reauth SwitchcontrollerManagedswitch#mab_reauth}
  */
  readonly mabReauth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#mac_called_station_delimiter SwitchcontrollerManagedswitch#mac_called_station_delimiter}
  */
  readonly macCalledStationDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#mac_calling_station_delimiter SwitchcontrollerManagedswitch#mac_calling_station_delimiter}
  */
  readonly macCallingStationDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#mac_case SwitchcontrollerManagedswitch#mac_case}
  */
  readonly macCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#mac_password_delimiter SwitchcontrollerManagedswitch#mac_password_delimiter}
  */
  readonly macPasswordDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#mac_username_delimiter SwitchcontrollerManagedswitch#mac_username_delimiter}
  */
  readonly macUsernameDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#max_reauth_attempt SwitchcontrollerManagedswitch#max_reauth_attempt}
  */
  readonly maxReauthAttempt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#reauth_period SwitchcontrollerManagedswitch#reauth_period}
  */
  readonly reauthPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#tx_period SwitchcontrollerManagedswitch#tx_period}
  */
  readonly txPeriod?: number;
}

export function switchcontrollerManagedswitchN8021XSettingsToTerraform(struct?: SwitchcontrollerManagedswitchN8021XSettingsOutputReference | SwitchcontrollerManagedswitchN8021XSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    link_down_auth: cdktf.stringToTerraform(struct!.linkDownAuth),
    local_override: cdktf.stringToTerraform(struct!.localOverride),
    mab_reauth: cdktf.stringToTerraform(struct!.mabReauth),
    mac_called_station_delimiter: cdktf.stringToTerraform(struct!.macCalledStationDelimiter),
    mac_calling_station_delimiter: cdktf.stringToTerraform(struct!.macCallingStationDelimiter),
    mac_case: cdktf.stringToTerraform(struct!.macCase),
    mac_password_delimiter: cdktf.stringToTerraform(struct!.macPasswordDelimiter),
    mac_username_delimiter: cdktf.stringToTerraform(struct!.macUsernameDelimiter),
    max_reauth_attempt: cdktf.numberToTerraform(struct!.maxReauthAttempt),
    reauth_period: cdktf.numberToTerraform(struct!.reauthPeriod),
    tx_period: cdktf.numberToTerraform(struct!.txPeriod),
  }
}


export function switchcontrollerManagedswitchN8021XSettingsToHclTerraform(struct?: SwitchcontrollerManagedswitchN8021XSettingsOutputReference | SwitchcontrollerManagedswitchN8021XSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    link_down_auth: {
      value: cdktf.stringToHclTerraform(struct!.linkDownAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_override: {
      value: cdktf.stringToHclTerraform(struct!.localOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mab_reauth: {
      value: cdktf.stringToHclTerraform(struct!.mabReauth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_called_station_delimiter: {
      value: cdktf.stringToHclTerraform(struct!.macCalledStationDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_calling_station_delimiter: {
      value: cdktf.stringToHclTerraform(struct!.macCallingStationDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_case: {
      value: cdktf.stringToHclTerraform(struct!.macCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_password_delimiter: {
      value: cdktf.stringToHclTerraform(struct!.macPasswordDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_username_delimiter: {
      value: cdktf.stringToHclTerraform(struct!.macUsernameDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_reauth_attempt: {
      value: cdktf.numberToHclTerraform(struct!.maxReauthAttempt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reauth_period: {
      value: cdktf.numberToHclTerraform(struct!.reauthPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tx_period: {
      value: cdktf.numberToHclTerraform(struct!.txPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerManagedswitchN8021XSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwitchcontrollerManagedswitchN8021XSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._linkDownAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkDownAuth = this._linkDownAuth;
    }
    if (this._localOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.localOverride = this._localOverride;
    }
    if (this._mabReauth !== undefined) {
      hasAnyValues = true;
      internalValueResult.mabReauth = this._mabReauth;
    }
    if (this._macCalledStationDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.macCalledStationDelimiter = this._macCalledStationDelimiter;
    }
    if (this._macCallingStationDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.macCallingStationDelimiter = this._macCallingStationDelimiter;
    }
    if (this._macCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.macCase = this._macCase;
    }
    if (this._macPasswordDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.macPasswordDelimiter = this._macPasswordDelimiter;
    }
    if (this._macUsernameDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.macUsernameDelimiter = this._macUsernameDelimiter;
    }
    if (this._maxReauthAttempt !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReauthAttempt = this._maxReauthAttempt;
    }
    if (this._reauthPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.reauthPeriod = this._reauthPeriod;
    }
    if (this._txPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.txPeriod = this._txPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerManagedswitchN8021XSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._linkDownAuth = undefined;
      this._localOverride = undefined;
      this._mabReauth = undefined;
      this._macCalledStationDelimiter = undefined;
      this._macCallingStationDelimiter = undefined;
      this._macCase = undefined;
      this._macPasswordDelimiter = undefined;
      this._macUsernameDelimiter = undefined;
      this._maxReauthAttempt = undefined;
      this._reauthPeriod = undefined;
      this._txPeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._linkDownAuth = value.linkDownAuth;
      this._localOverride = value.localOverride;
      this._mabReauth = value.mabReauth;
      this._macCalledStationDelimiter = value.macCalledStationDelimiter;
      this._macCallingStationDelimiter = value.macCallingStationDelimiter;
      this._macCase = value.macCase;
      this._macPasswordDelimiter = value.macPasswordDelimiter;
      this._macUsernameDelimiter = value.macUsernameDelimiter;
      this._maxReauthAttempt = value.maxReauthAttempt;
      this._reauthPeriod = value.reauthPeriod;
      this._txPeriod = value.txPeriod;
    }
  }

  // link_down_auth - computed: true, optional: true, required: false
  private _linkDownAuth?: string; 
  public get linkDownAuth() {
    return this.getStringAttribute('link_down_auth');
  }
  public set linkDownAuth(value: string) {
    this._linkDownAuth = value;
  }
  public resetLinkDownAuth() {
    this._linkDownAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkDownAuthInput() {
    return this._linkDownAuth;
  }

  // local_override - computed: true, optional: true, required: false
  private _localOverride?: string; 
  public get localOverride() {
    return this.getStringAttribute('local_override');
  }
  public set localOverride(value: string) {
    this._localOverride = value;
  }
  public resetLocalOverride() {
    this._localOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localOverrideInput() {
    return this._localOverride;
  }

  // mab_reauth - computed: true, optional: true, required: false
  private _mabReauth?: string; 
  public get mabReauth() {
    return this.getStringAttribute('mab_reauth');
  }
  public set mabReauth(value: string) {
    this._mabReauth = value;
  }
  public resetMabReauth() {
    this._mabReauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mabReauthInput() {
    return this._mabReauth;
  }

  // mac_called_station_delimiter - computed: true, optional: true, required: false
  private _macCalledStationDelimiter?: string; 
  public get macCalledStationDelimiter() {
    return this.getStringAttribute('mac_called_station_delimiter');
  }
  public set macCalledStationDelimiter(value: string) {
    this._macCalledStationDelimiter = value;
  }
  public resetMacCalledStationDelimiter() {
    this._macCalledStationDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macCalledStationDelimiterInput() {
    return this._macCalledStationDelimiter;
  }

  // mac_calling_station_delimiter - computed: true, optional: true, required: false
  private _macCallingStationDelimiter?: string; 
  public get macCallingStationDelimiter() {
    return this.getStringAttribute('mac_calling_station_delimiter');
  }
  public set macCallingStationDelimiter(value: string) {
    this._macCallingStationDelimiter = value;
  }
  public resetMacCallingStationDelimiter() {
    this._macCallingStationDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macCallingStationDelimiterInput() {
    return this._macCallingStationDelimiter;
  }

  // mac_case - computed: true, optional: true, required: false
  private _macCase?: string; 
  public get macCase() {
    return this.getStringAttribute('mac_case');
  }
  public set macCase(value: string) {
    this._macCase = value;
  }
  public resetMacCase() {
    this._macCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macCaseInput() {
    return this._macCase;
  }

  // mac_password_delimiter - computed: true, optional: true, required: false
  private _macPasswordDelimiter?: string; 
  public get macPasswordDelimiter() {
    return this.getStringAttribute('mac_password_delimiter');
  }
  public set macPasswordDelimiter(value: string) {
    this._macPasswordDelimiter = value;
  }
  public resetMacPasswordDelimiter() {
    this._macPasswordDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macPasswordDelimiterInput() {
    return this._macPasswordDelimiter;
  }

  // mac_username_delimiter - computed: true, optional: true, required: false
  private _macUsernameDelimiter?: string; 
  public get macUsernameDelimiter() {
    return this.getStringAttribute('mac_username_delimiter');
  }
  public set macUsernameDelimiter(value: string) {
    this._macUsernameDelimiter = value;
  }
  public resetMacUsernameDelimiter() {
    this._macUsernameDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macUsernameDelimiterInput() {
    return this._macUsernameDelimiter;
  }

  // max_reauth_attempt - computed: true, optional: true, required: false
  private _maxReauthAttempt?: number; 
  public get maxReauthAttempt() {
    return this.getNumberAttribute('max_reauth_attempt');
  }
  public set maxReauthAttempt(value: number) {
    this._maxReauthAttempt = value;
  }
  public resetMaxReauthAttempt() {
    this._maxReauthAttempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReauthAttemptInput() {
    return this._maxReauthAttempt;
  }

  // reauth_period - computed: true, optional: true, required: false
  private _reauthPeriod?: number; 
  public get reauthPeriod() {
    return this.getNumberAttribute('reauth_period');
  }
  public set reauthPeriod(value: number) {
    this._reauthPeriod = value;
  }
  public resetReauthPeriod() {
    this._reauthPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reauthPeriodInput() {
    return this._reauthPeriod;
  }

  // tx_period - computed: true, optional: true, required: false
  private _txPeriod?: number; 
  public get txPeriod() {
    return this.getNumberAttribute('tx_period');
  }
  public set txPeriod(value: number) {
    this._txPeriod = value;
  }
  public resetTxPeriod() {
    this._txPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txPeriodInput() {
    return this._txPeriod;
  }
}
export interface SwitchcontrollerManagedswitchPortsAclGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#name SwitchcontrollerManagedswitch#name}
  */
  readonly name?: string;
}

export function switchcontrollerManagedswitchPortsAclGroupToTerraform(struct?: SwitchcontrollerManagedswitchPortsAclGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function switchcontrollerManagedswitchPortsAclGroupToHclTerraform(struct?: SwitchcontrollerManagedswitchPortsAclGroup | cdktf.IResolvable): any {
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

export class SwitchcontrollerManagedswitchPortsAclGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerManagedswitchPortsAclGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SwitchcontrollerManagedswitchPortsAclGroup | cdktf.IResolvable | undefined) {
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
}

export class SwitchcontrollerManagedswitchPortsAclGroupList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerManagedswitchPortsAclGroup[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerManagedswitchPortsAclGroupOutputReference {
    return new SwitchcontrollerManagedswitchPortsAclGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchcontrollerManagedswitchPortsAllowedVlans {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#vlan_name SwitchcontrollerManagedswitch#vlan_name}
  */
  readonly vlanName?: string;
}

export function switchcontrollerManagedswitchPortsAllowedVlansToTerraform(struct?: SwitchcontrollerManagedswitchPortsAllowedVlans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vlan_name: cdktf.stringToTerraform(struct!.vlanName),
  }
}


export function switchcontrollerManagedswitchPortsAllowedVlansToHclTerraform(struct?: SwitchcontrollerManagedswitchPortsAllowedVlans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SwitchcontrollerManagedswitchPortsAllowedVlansOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerManagedswitchPortsAllowedVlans | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vlanName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanName = this._vlanName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerManagedswitchPortsAllowedVlans | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vlanName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vlanName = value.vlanName;
    }
  }

  // vlan_name - computed: true, optional: true, required: false
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

export class SwitchcontrollerManagedswitchPortsAllowedVlansList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerManagedswitchPortsAllowedVlans[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerManagedswitchPortsAllowedVlansOutputReference {
    return new SwitchcontrollerManagedswitchPortsAllowedVlansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchcontrollerManagedswitchPortsDhcpSnoopOption82Override {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#circuit_id SwitchcontrollerManagedswitch#circuit_id}
  */
  readonly circuitId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#remote_id SwitchcontrollerManagedswitch#remote_id}
  */
  readonly remoteId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#vlan_name SwitchcontrollerManagedswitch#vlan_name}
  */
  readonly vlanName?: string;
}

export function switchcontrollerManagedswitchPortsDhcpSnoopOption82OverrideToTerraform(struct?: SwitchcontrollerManagedswitchPortsDhcpSnoopOption82Override | cdktf.IResolvable): any {
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


export function switchcontrollerManagedswitchPortsDhcpSnoopOption82OverrideToHclTerraform(struct?: SwitchcontrollerManagedswitchPortsDhcpSnoopOption82Override | cdktf.IResolvable): any {
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

export class SwitchcontrollerManagedswitchPortsDhcpSnoopOption82OverrideOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerManagedswitchPortsDhcpSnoopOption82Override | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SwitchcontrollerManagedswitchPortsDhcpSnoopOption82Override | cdktf.IResolvable | undefined) {
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

export class SwitchcontrollerManagedswitchPortsDhcpSnoopOption82OverrideList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerManagedswitchPortsDhcpSnoopOption82Override[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerManagedswitchPortsDhcpSnoopOption82OverrideOutputReference {
    return new SwitchcontrollerManagedswitchPortsDhcpSnoopOption82OverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchcontrollerManagedswitchPortsExportTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#tag_name SwitchcontrollerManagedswitch#tag_name}
  */
  readonly tagName?: string;
}

export function switchcontrollerManagedswitchPortsExportTagsToTerraform(struct?: SwitchcontrollerManagedswitchPortsExportTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_name: cdktf.stringToTerraform(struct!.tagName),
  }
}


export function switchcontrollerManagedswitchPortsExportTagsToHclTerraform(struct?: SwitchcontrollerManagedswitchPortsExportTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_name: {
      value: cdktf.stringToHclTerraform(struct!.tagName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerManagedswitchPortsExportTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerManagedswitchPortsExportTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagName = this._tagName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerManagedswitchPortsExportTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagName = value.tagName;
    }
  }

  // tag_name - computed: false, optional: true, required: false
  private _tagName?: string; 
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }
  public set tagName(value: string) {
    this._tagName = value;
  }
  public resetTagName() {
    this._tagName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNameInput() {
    return this._tagName;
  }
}

export class SwitchcontrollerManagedswitchPortsExportTagsList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerManagedswitchPortsExportTags[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerManagedswitchPortsExportTagsOutputReference {
    return new SwitchcontrollerManagedswitchPortsExportTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchcontrollerManagedswitchPortsFortiswitchAcls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#id SwitchcontrollerManagedswitch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function switchcontrollerManagedswitchPortsFortiswitchAclsToTerraform(struct?: SwitchcontrollerManagedswitchPortsFortiswitchAcls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function switchcontrollerManagedswitchPortsFortiswitchAclsToHclTerraform(struct?: SwitchcontrollerManagedswitchPortsFortiswitchAcls | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerManagedswitchPortsFortiswitchAclsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerManagedswitchPortsFortiswitchAcls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerManagedswitchPortsFortiswitchAcls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
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
}

export class SwitchcontrollerManagedswitchPortsFortiswitchAclsList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerManagedswitchPortsFortiswitchAcls[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerManagedswitchPortsFortiswitchAclsOutputReference {
    return new SwitchcontrollerManagedswitchPortsFortiswitchAclsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchcontrollerManagedswitchPortsInterfaceTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#tag_name SwitchcontrollerManagedswitch#tag_name}
  */
  readonly tagName?: string;
}

export function switchcontrollerManagedswitchPortsInterfaceTagsToTerraform(struct?: SwitchcontrollerManagedswitchPortsInterfaceTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_name: cdktf.stringToTerraform(struct!.tagName),
  }
}


export function switchcontrollerManagedswitchPortsInterfaceTagsToHclTerraform(struct?: SwitchcontrollerManagedswitchPortsInterfaceTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_name: {
      value: cdktf.stringToHclTerraform(struct!.tagName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerManagedswitchPortsInterfaceTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerManagedswitchPortsInterfaceTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagName = this._tagName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerManagedswitchPortsInterfaceTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagName = value.tagName;
    }
  }

  // tag_name - computed: false, optional: true, required: false
  private _tagName?: string; 
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }
  public set tagName(value: string) {
    this._tagName = value;
  }
  public resetTagName() {
    this._tagName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNameInput() {
    return this._tagName;
  }
}

export class SwitchcontrollerManagedswitchPortsInterfaceTagsList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerManagedswitchPortsInterfaceTags[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerManagedswitchPortsInterfaceTagsOutputReference {
    return new SwitchcontrollerManagedswitchPortsInterfaceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchcontrollerManagedswitchPortsMembers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#member_name SwitchcontrollerManagedswitch#member_name}
  */
  readonly memberName?: string;
}

export function switchcontrollerManagedswitchPortsMembersToTerraform(struct?: SwitchcontrollerManagedswitchPortsMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    member_name: cdktf.stringToTerraform(struct!.memberName),
  }
}


export function switchcontrollerManagedswitchPortsMembersToHclTerraform(struct?: SwitchcontrollerManagedswitchPortsMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    member_name: {
      value: cdktf.stringToHclTerraform(struct!.memberName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerManagedswitchPortsMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerManagedswitchPortsMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memberName !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberName = this._memberName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerManagedswitchPortsMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._memberName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._memberName = value.memberName;
    }
  }

  // member_name - computed: false, optional: true, required: false
  private _memberName?: string; 
  public get memberName() {
    return this.getStringAttribute('member_name');
  }
  public set memberName(value: string) {
    this._memberName = value;
  }
  public resetMemberName() {
    this._memberName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberNameInput() {
    return this._memberName;
  }
}

export class SwitchcontrollerManagedswitchPortsMembersList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerManagedswitchPortsMembers[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerManagedswitchPortsMembersOutputReference {
    return new SwitchcontrollerManagedswitchPortsMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchcontrollerManagedswitchPortsUntaggedVlans {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#vlan_name SwitchcontrollerManagedswitch#vlan_name}
  */
  readonly vlanName?: string;
}

export function switchcontrollerManagedswitchPortsUntaggedVlansToTerraform(struct?: SwitchcontrollerManagedswitchPortsUntaggedVlans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vlan_name: cdktf.stringToTerraform(struct!.vlanName),
  }
}


export function switchcontrollerManagedswitchPortsUntaggedVlansToHclTerraform(struct?: SwitchcontrollerManagedswitchPortsUntaggedVlans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SwitchcontrollerManagedswitchPortsUntaggedVlansOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerManagedswitchPortsUntaggedVlans | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vlanName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanName = this._vlanName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerManagedswitchPortsUntaggedVlans | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vlanName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vlanName = value.vlanName;
    }
  }

  // vlan_name - computed: true, optional: true, required: false
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

export class SwitchcontrollerManagedswitchPortsUntaggedVlansList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerManagedswitchPortsUntaggedVlans[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerManagedswitchPortsUntaggedVlansOutputReference {
    return new SwitchcontrollerManagedswitchPortsUntaggedVlansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchcontrollerManagedswitchPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#access_mode SwitchcontrollerManagedswitch#access_mode}
  */
  readonly accessMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#aggregator_mode SwitchcontrollerManagedswitch#aggregator_mode}
  */
  readonly aggregatorMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#allow_arp_monitor SwitchcontrollerManagedswitch#allow_arp_monitor}
  */
  readonly allowArpMonitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#allowed_vlans_all SwitchcontrollerManagedswitch#allowed_vlans_all}
  */
  readonly allowedVlansAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#arp_inspection_trust SwitchcontrollerManagedswitch#arp_inspection_trust}
  */
  readonly arpInspectionTrust?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#authenticated_port SwitchcontrollerManagedswitch#authenticated_port}
  */
  readonly authenticatedPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#bundle SwitchcontrollerManagedswitch#bundle}
  */
  readonly bundle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#description SwitchcontrollerManagedswitch#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#dhcp_snoop_option82_trust SwitchcontrollerManagedswitch#dhcp_snoop_option82_trust}
  */
  readonly dhcpSnoopOption82Trust?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#dhcp_snooping SwitchcontrollerManagedswitch#dhcp_snooping}
  */
  readonly dhcpSnooping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#discard_mode SwitchcontrollerManagedswitch#discard_mode}
  */
  readonly discardMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#edge_port SwitchcontrollerManagedswitch#edge_port}
  */
  readonly edgePort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#encrypted_port SwitchcontrollerManagedswitch#encrypted_port}
  */
  readonly encryptedPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#export_to SwitchcontrollerManagedswitch#export_to}
  */
  readonly exportTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#export_to_pool SwitchcontrollerManagedswitch#export_to_pool}
  */
  readonly exportToPool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#export_to_pool_flag SwitchcontrollerManagedswitch#export_to_pool_flag}
  */
  readonly exportToPoolFlag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#fallback_port SwitchcontrollerManagedswitch#fallback_port}
  */
  readonly fallbackPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#fec_capable SwitchcontrollerManagedswitch#fec_capable}
  */
  readonly fecCapable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#fec_state SwitchcontrollerManagedswitch#fec_state}
  */
  readonly fecState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#fgt_peer_device_name SwitchcontrollerManagedswitch#fgt_peer_device_name}
  */
  readonly fgtPeerDeviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#fgt_peer_port_name SwitchcontrollerManagedswitch#fgt_peer_port_name}
  */
  readonly fgtPeerPortName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#fiber_port SwitchcontrollerManagedswitch#fiber_port}
  */
  readonly fiberPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#flags SwitchcontrollerManagedswitch#flags}
  */
  readonly flags?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#flap_duration SwitchcontrollerManagedswitch#flap_duration}
  */
  readonly flapDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#flap_rate SwitchcontrollerManagedswitch#flap_rate}
  */
  readonly flapRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#flap_timeout SwitchcontrollerManagedswitch#flap_timeout}
  */
  readonly flapTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#flapguard SwitchcontrollerManagedswitch#flapguard}
  */
  readonly flapguard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#flow_control SwitchcontrollerManagedswitch#flow_control}
  */
  readonly flowControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#fortilink_port SwitchcontrollerManagedswitch#fortilink_port}
  */
  readonly fortilinkPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#igmp_snooping SwitchcontrollerManagedswitch#igmp_snooping}
  */
  readonly igmpSnooping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#igmp_snooping_flood_reports SwitchcontrollerManagedswitch#igmp_snooping_flood_reports}
  */
  readonly igmpSnoopingFloodReports?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#igmps_flood_reports SwitchcontrollerManagedswitch#igmps_flood_reports}
  */
  readonly igmpsFloodReports?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#igmps_flood_traffic SwitchcontrollerManagedswitch#igmps_flood_traffic}
  */
  readonly igmpsFloodTraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#ip_source_guard SwitchcontrollerManagedswitch#ip_source_guard}
  */
  readonly ipSourceGuard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#isl_local_trunk_name SwitchcontrollerManagedswitch#isl_local_trunk_name}
  */
  readonly islLocalTrunkName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#isl_peer_device_name SwitchcontrollerManagedswitch#isl_peer_device_name}
  */
  readonly islPeerDeviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#isl_peer_device_sn SwitchcontrollerManagedswitch#isl_peer_device_sn}
  */
  readonly islPeerDeviceSn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#isl_peer_port_name SwitchcontrollerManagedswitch#isl_peer_port_name}
  */
  readonly islPeerPortName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#lacp_speed SwitchcontrollerManagedswitch#lacp_speed}
  */
  readonly lacpSpeed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#learning_limit SwitchcontrollerManagedswitch#learning_limit}
  */
  readonly learningLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#link_status SwitchcontrollerManagedswitch#link_status}
  */
  readonly linkStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#lldp_profile SwitchcontrollerManagedswitch#lldp_profile}
  */
  readonly lldpProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#lldp_status SwitchcontrollerManagedswitch#lldp_status}
  */
  readonly lldpStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#log_mac_event SwitchcontrollerManagedswitch#log_mac_event}
  */
  readonly logMacEvent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#loop_guard SwitchcontrollerManagedswitch#loop_guard}
  */
  readonly loopGuard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#loop_guard_timeout SwitchcontrollerManagedswitch#loop_guard_timeout}
  */
  readonly loopGuardTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#mac_addr SwitchcontrollerManagedswitch#mac_addr}
  */
  readonly macAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#matched_dpp_intf_tags SwitchcontrollerManagedswitch#matched_dpp_intf_tags}
  */
  readonly matchedDppIntfTags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#matched_dpp_policy SwitchcontrollerManagedswitch#matched_dpp_policy}
  */
  readonly matchedDppPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#max_bundle SwitchcontrollerManagedswitch#max_bundle}
  */
  readonly maxBundle?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#mcast_snooping_flood_traffic SwitchcontrollerManagedswitch#mcast_snooping_flood_traffic}
  */
  readonly mcastSnoopingFloodTraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#mclag SwitchcontrollerManagedswitch#mclag}
  */
  readonly mclag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#mclag_icl_port SwitchcontrollerManagedswitch#mclag_icl_port}
  */
  readonly mclagIclPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#media_type SwitchcontrollerManagedswitch#media_type}
  */
  readonly mediaType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#member_withdrawal_behavior SwitchcontrollerManagedswitch#member_withdrawal_behavior}
  */
  readonly memberWithdrawalBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#min_bundle SwitchcontrollerManagedswitch#min_bundle}
  */
  readonly minBundle?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#mode SwitchcontrollerManagedswitch#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#p2p_port SwitchcontrollerManagedswitch#p2p_port}
  */
  readonly p2PPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#packet_sample_rate SwitchcontrollerManagedswitch#packet_sample_rate}
  */
  readonly packetSampleRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#packet_sampler SwitchcontrollerManagedswitch#packet_sampler}
  */
  readonly packetSampler?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#pause_meter SwitchcontrollerManagedswitch#pause_meter}
  */
  readonly pauseMeter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#pause_meter_resume SwitchcontrollerManagedswitch#pause_meter_resume}
  */
  readonly pauseMeterResume?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#pd_capable SwitchcontrollerManagedswitch#pd_capable}
  */
  readonly pdCapable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#poe_capable SwitchcontrollerManagedswitch#poe_capable}
  */
  readonly poeCapable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#poe_max_power SwitchcontrollerManagedswitch#poe_max_power}
  */
  readonly poeMaxPower?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#poe_mode_bt_cabable SwitchcontrollerManagedswitch#poe_mode_bt_cabable}
  */
  readonly poeModeBtCabable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#poe_port_mode SwitchcontrollerManagedswitch#poe_port_mode}
  */
  readonly poePortMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#poe_port_power SwitchcontrollerManagedswitch#poe_port_power}
  */
  readonly poePortPower?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#poe_port_priority SwitchcontrollerManagedswitch#poe_port_priority}
  */
  readonly poePortPriority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#poe_pre_standard_detection SwitchcontrollerManagedswitch#poe_pre_standard_detection}
  */
  readonly poePreStandardDetection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#poe_standard SwitchcontrollerManagedswitch#poe_standard}
  */
  readonly poeStandard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#poe_status SwitchcontrollerManagedswitch#poe_status}
  */
  readonly poeStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#port_name SwitchcontrollerManagedswitch#port_name}
  */
  readonly portName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#port_number SwitchcontrollerManagedswitch#port_number}
  */
  readonly portNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#port_owner SwitchcontrollerManagedswitch#port_owner}
  */
  readonly portOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#port_policy SwitchcontrollerManagedswitch#port_policy}
  */
  readonly portPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#port_prefix_type SwitchcontrollerManagedswitch#port_prefix_type}
  */
  readonly portPrefixType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#port_security_policy SwitchcontrollerManagedswitch#port_security_policy}
  */
  readonly portSecurityPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#port_selection_criteria SwitchcontrollerManagedswitch#port_selection_criteria}
  */
  readonly portSelectionCriteria?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#ptp_policy SwitchcontrollerManagedswitch#ptp_policy}
  */
  readonly ptpPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#ptp_status SwitchcontrollerManagedswitch#ptp_status}
  */
  readonly ptpStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#qnq SwitchcontrollerManagedswitch#qnq}
  */
  readonly qnq?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#qos_policy SwitchcontrollerManagedswitch#qos_policy}
  */
  readonly qosPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#restricted_auth_port SwitchcontrollerManagedswitch#restricted_auth_port}
  */
  readonly restrictedAuthPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#rpvst_port SwitchcontrollerManagedswitch#rpvst_port}
  */
  readonly rpvstPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#sample_direction SwitchcontrollerManagedswitch#sample_direction}
  */
  readonly sampleDirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#sflow_counter_interval SwitchcontrollerManagedswitch#sflow_counter_interval}
  */
  readonly sflowCounterInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#sflow_sample_rate SwitchcontrollerManagedswitch#sflow_sample_rate}
  */
  readonly sflowSampleRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#sflow_sampler SwitchcontrollerManagedswitch#sflow_sampler}
  */
  readonly sflowSampler?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#speed SwitchcontrollerManagedswitch#speed}
  */
  readonly speed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#speed_mask SwitchcontrollerManagedswitch#speed_mask}
  */
  readonly speedMask?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#stacking_port SwitchcontrollerManagedswitch#stacking_port}
  */
  readonly stackingPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#status SwitchcontrollerManagedswitch#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#sticky_mac SwitchcontrollerManagedswitch#sticky_mac}
  */
  readonly stickyMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#storm_control_policy SwitchcontrollerManagedswitch#storm_control_policy}
  */
  readonly stormControlPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#stp_bpdu_guard SwitchcontrollerManagedswitch#stp_bpdu_guard}
  */
  readonly stpBpduGuard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#stp_bpdu_guard_timeout SwitchcontrollerManagedswitch#stp_bpdu_guard_timeout}
  */
  readonly stpBpduGuardTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#stp_root_guard SwitchcontrollerManagedswitch#stp_root_guard}
  */
  readonly stpRootGuard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#stp_state SwitchcontrollerManagedswitch#stp_state}
  */
  readonly stpState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#switch_id SwitchcontrollerManagedswitch#switch_id}
  */
  readonly switchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#type SwitchcontrollerManagedswitch#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#virtual_port SwitchcontrollerManagedswitch#virtual_port}
  */
  readonly virtualPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#vlan SwitchcontrollerManagedswitch#vlan}
  */
  readonly vlan?: string;
  /**
  * acl_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#acl_group SwitchcontrollerManagedswitch#acl_group}
  */
  readonly aclGroup?: SwitchcontrollerManagedswitchPortsAclGroup[] | cdktf.IResolvable;
  /**
  * allowed_vlans block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#allowed_vlans SwitchcontrollerManagedswitch#allowed_vlans}
  */
  readonly allowedVlans?: SwitchcontrollerManagedswitchPortsAllowedVlans[] | cdktf.IResolvable;
  /**
  * dhcp_snoop_option82_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#dhcp_snoop_option82_override SwitchcontrollerManagedswitch#dhcp_snoop_option82_override}
  */
  readonly dhcpSnoopOption82Override?: SwitchcontrollerManagedswitchPortsDhcpSnoopOption82Override[] | cdktf.IResolvable;
  /**
  * export_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#export_tags SwitchcontrollerManagedswitch#export_tags}
  */
  readonly exportTags?: SwitchcontrollerManagedswitchPortsExportTags[] | cdktf.IResolvable;
  /**
  * fortiswitch_acls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#fortiswitch_acls SwitchcontrollerManagedswitch#fortiswitch_acls}
  */
  readonly fortiswitchAcls?: SwitchcontrollerManagedswitchPortsFortiswitchAcls[] | cdktf.IResolvable;
  /**
  * interface_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#interface_tags SwitchcontrollerManagedswitch#interface_tags}
  */
  readonly interfaceTags?: SwitchcontrollerManagedswitchPortsInterfaceTags[] | cdktf.IResolvable;
  /**
  * members block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#members SwitchcontrollerManagedswitch#members}
  */
  readonly members?: SwitchcontrollerManagedswitchPortsMembers[] | cdktf.IResolvable;
  /**
  * untagged_vlans block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#untagged_vlans SwitchcontrollerManagedswitch#untagged_vlans}
  */
  readonly untaggedVlans?: SwitchcontrollerManagedswitchPortsUntaggedVlans[] | cdktf.IResolvable;
}

export function switchcontrollerManagedswitchPortsToTerraform(struct?: SwitchcontrollerManagedswitchPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_mode: cdktf.stringToTerraform(struct!.accessMode),
    aggregator_mode: cdktf.stringToTerraform(struct!.aggregatorMode),
    allow_arp_monitor: cdktf.stringToTerraform(struct!.allowArpMonitor),
    allowed_vlans_all: cdktf.stringToTerraform(struct!.allowedVlansAll),
    arp_inspection_trust: cdktf.stringToTerraform(struct!.arpInspectionTrust),
    authenticated_port: cdktf.numberToTerraform(struct!.authenticatedPort),
    bundle: cdktf.stringToTerraform(struct!.bundle),
    description: cdktf.stringToTerraform(struct!.description),
    dhcp_snoop_option82_trust: cdktf.stringToTerraform(struct!.dhcpSnoopOption82Trust),
    dhcp_snooping: cdktf.stringToTerraform(struct!.dhcpSnooping),
    discard_mode: cdktf.stringToTerraform(struct!.discardMode),
    edge_port: cdktf.stringToTerraform(struct!.edgePort),
    encrypted_port: cdktf.numberToTerraform(struct!.encryptedPort),
    export_to: cdktf.stringToTerraform(struct!.exportTo),
    export_to_pool: cdktf.stringToTerraform(struct!.exportToPool),
    export_to_pool_flag: cdktf.numberToTerraform(struct!.exportToPoolFlag),
    fallback_port: cdktf.stringToTerraform(struct!.fallbackPort),
    fec_capable: cdktf.numberToTerraform(struct!.fecCapable),
    fec_state: cdktf.stringToTerraform(struct!.fecState),
    fgt_peer_device_name: cdktf.stringToTerraform(struct!.fgtPeerDeviceName),
    fgt_peer_port_name: cdktf.stringToTerraform(struct!.fgtPeerPortName),
    fiber_port: cdktf.numberToTerraform(struct!.fiberPort),
    flags: cdktf.numberToTerraform(struct!.flags),
    flap_duration: cdktf.numberToTerraform(struct!.flapDuration),
    flap_rate: cdktf.numberToTerraform(struct!.flapRate),
    flap_timeout: cdktf.numberToTerraform(struct!.flapTimeout),
    flapguard: cdktf.stringToTerraform(struct!.flapguard),
    flow_control: cdktf.stringToTerraform(struct!.flowControl),
    fortilink_port: cdktf.numberToTerraform(struct!.fortilinkPort),
    igmp_snooping: cdktf.stringToTerraform(struct!.igmpSnooping),
    igmp_snooping_flood_reports: cdktf.stringToTerraform(struct!.igmpSnoopingFloodReports),
    igmps_flood_reports: cdktf.stringToTerraform(struct!.igmpsFloodReports),
    igmps_flood_traffic: cdktf.stringToTerraform(struct!.igmpsFloodTraffic),
    ip_source_guard: cdktf.stringToTerraform(struct!.ipSourceGuard),
    isl_local_trunk_name: cdktf.stringToTerraform(struct!.islLocalTrunkName),
    isl_peer_device_name: cdktf.stringToTerraform(struct!.islPeerDeviceName),
    isl_peer_device_sn: cdktf.stringToTerraform(struct!.islPeerDeviceSn),
    isl_peer_port_name: cdktf.stringToTerraform(struct!.islPeerPortName),
    lacp_speed: cdktf.stringToTerraform(struct!.lacpSpeed),
    learning_limit: cdktf.numberToTerraform(struct!.learningLimit),
    link_status: cdktf.stringToTerraform(struct!.linkStatus),
    lldp_profile: cdktf.stringToTerraform(struct!.lldpProfile),
    lldp_status: cdktf.stringToTerraform(struct!.lldpStatus),
    log_mac_event: cdktf.stringToTerraform(struct!.logMacEvent),
    loop_guard: cdktf.stringToTerraform(struct!.loopGuard),
    loop_guard_timeout: cdktf.numberToTerraform(struct!.loopGuardTimeout),
    mac_addr: cdktf.stringToTerraform(struct!.macAddr),
    matched_dpp_intf_tags: cdktf.stringToTerraform(struct!.matchedDppIntfTags),
    matched_dpp_policy: cdktf.stringToTerraform(struct!.matchedDppPolicy),
    max_bundle: cdktf.numberToTerraform(struct!.maxBundle),
    mcast_snooping_flood_traffic: cdktf.stringToTerraform(struct!.mcastSnoopingFloodTraffic),
    mclag: cdktf.stringToTerraform(struct!.mclag),
    mclag_icl_port: cdktf.numberToTerraform(struct!.mclagIclPort),
    media_type: cdktf.stringToTerraform(struct!.mediaType),
    member_withdrawal_behavior: cdktf.stringToTerraform(struct!.memberWithdrawalBehavior),
    min_bundle: cdktf.numberToTerraform(struct!.minBundle),
    mode: cdktf.stringToTerraform(struct!.mode),
    p2p_port: cdktf.numberToTerraform(struct!.p2PPort),
    packet_sample_rate: cdktf.numberToTerraform(struct!.packetSampleRate),
    packet_sampler: cdktf.stringToTerraform(struct!.packetSampler),
    pause_meter: cdktf.numberToTerraform(struct!.pauseMeter),
    pause_meter_resume: cdktf.stringToTerraform(struct!.pauseMeterResume),
    pd_capable: cdktf.numberToTerraform(struct!.pdCapable),
    poe_capable: cdktf.numberToTerraform(struct!.poeCapable),
    poe_max_power: cdktf.stringToTerraform(struct!.poeMaxPower),
    poe_mode_bt_cabable: cdktf.numberToTerraform(struct!.poeModeBtCabable),
    poe_port_mode: cdktf.stringToTerraform(struct!.poePortMode),
    poe_port_power: cdktf.stringToTerraform(struct!.poePortPower),
    poe_port_priority: cdktf.stringToTerraform(struct!.poePortPriority),
    poe_pre_standard_detection: cdktf.stringToTerraform(struct!.poePreStandardDetection),
    poe_standard: cdktf.stringToTerraform(struct!.poeStandard),
    poe_status: cdktf.stringToTerraform(struct!.poeStatus),
    port_name: cdktf.stringToTerraform(struct!.portName),
    port_number: cdktf.numberToTerraform(struct!.portNumber),
    port_owner: cdktf.stringToTerraform(struct!.portOwner),
    port_policy: cdktf.stringToTerraform(struct!.portPolicy),
    port_prefix_type: cdktf.numberToTerraform(struct!.portPrefixType),
    port_security_policy: cdktf.stringToTerraform(struct!.portSecurityPolicy),
    port_selection_criteria: cdktf.stringToTerraform(struct!.portSelectionCriteria),
    ptp_policy: cdktf.stringToTerraform(struct!.ptpPolicy),
    ptp_status: cdktf.stringToTerraform(struct!.ptpStatus),
    qnq: cdktf.stringToTerraform(struct!.qnq),
    qos_policy: cdktf.stringToTerraform(struct!.qosPolicy),
    restricted_auth_port: cdktf.numberToTerraform(struct!.restrictedAuthPort),
    rpvst_port: cdktf.stringToTerraform(struct!.rpvstPort),
    sample_direction: cdktf.stringToTerraform(struct!.sampleDirection),
    sflow_counter_interval: cdktf.numberToTerraform(struct!.sflowCounterInterval),
    sflow_sample_rate: cdktf.numberToTerraform(struct!.sflowSampleRate),
    sflow_sampler: cdktf.stringToTerraform(struct!.sflowSampler),
    speed: cdktf.stringToTerraform(struct!.speed),
    speed_mask: cdktf.numberToTerraform(struct!.speedMask),
    stacking_port: cdktf.numberToTerraform(struct!.stackingPort),
    status: cdktf.stringToTerraform(struct!.status),
    sticky_mac: cdktf.stringToTerraform(struct!.stickyMac),
    storm_control_policy: cdktf.stringToTerraform(struct!.stormControlPolicy),
    stp_bpdu_guard: cdktf.stringToTerraform(struct!.stpBpduGuard),
    stp_bpdu_guard_timeout: cdktf.numberToTerraform(struct!.stpBpduGuardTimeout),
    stp_root_guard: cdktf.stringToTerraform(struct!.stpRootGuard),
    stp_state: cdktf.stringToTerraform(struct!.stpState),
    switch_id: cdktf.stringToTerraform(struct!.switchId),
    type: cdktf.stringToTerraform(struct!.type),
    virtual_port: cdktf.numberToTerraform(struct!.virtualPort),
    vlan: cdktf.stringToTerraform(struct!.vlan),
    acl_group: cdktf.listMapper(switchcontrollerManagedswitchPortsAclGroupToTerraform, true)(struct!.aclGroup),
    allowed_vlans: cdktf.listMapper(switchcontrollerManagedswitchPortsAllowedVlansToTerraform, true)(struct!.allowedVlans),
    dhcp_snoop_option82_override: cdktf.listMapper(switchcontrollerManagedswitchPortsDhcpSnoopOption82OverrideToTerraform, true)(struct!.dhcpSnoopOption82Override),
    export_tags: cdktf.listMapper(switchcontrollerManagedswitchPortsExportTagsToTerraform, true)(struct!.exportTags),
    fortiswitch_acls: cdktf.listMapper(switchcontrollerManagedswitchPortsFortiswitchAclsToTerraform, true)(struct!.fortiswitchAcls),
    interface_tags: cdktf.listMapper(switchcontrollerManagedswitchPortsInterfaceTagsToTerraform, true)(struct!.interfaceTags),
    members: cdktf.listMapper(switchcontrollerManagedswitchPortsMembersToTerraform, true)(struct!.members),
    untagged_vlans: cdktf.listMapper(switchcontrollerManagedswitchPortsUntaggedVlansToTerraform, true)(struct!.untaggedVlans),
  }
}


export function switchcontrollerManagedswitchPortsToHclTerraform(struct?: SwitchcontrollerManagedswitchPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_mode: {
      value: cdktf.stringToHclTerraform(struct!.accessMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aggregator_mode: {
      value: cdktf.stringToHclTerraform(struct!.aggregatorMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_arp_monitor: {
      value: cdktf.stringToHclTerraform(struct!.allowArpMonitor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowed_vlans_all: {
      value: cdktf.stringToHclTerraform(struct!.allowedVlansAll),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arp_inspection_trust: {
      value: cdktf.stringToHclTerraform(struct!.arpInspectionTrust),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authenticated_port: {
      value: cdktf.numberToHclTerraform(struct!.authenticatedPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bundle: {
      value: cdktf.stringToHclTerraform(struct!.bundle),
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
    dhcp_snoop_option82_trust: {
      value: cdktf.stringToHclTerraform(struct!.dhcpSnoopOption82Trust),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_snooping: {
      value: cdktf.stringToHclTerraform(struct!.dhcpSnooping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    discard_mode: {
      value: cdktf.stringToHclTerraform(struct!.discardMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    edge_port: {
      value: cdktf.stringToHclTerraform(struct!.edgePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encrypted_port: {
      value: cdktf.numberToHclTerraform(struct!.encryptedPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    export_to: {
      value: cdktf.stringToHclTerraform(struct!.exportTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    export_to_pool: {
      value: cdktf.stringToHclTerraform(struct!.exportToPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    export_to_pool_flag: {
      value: cdktf.numberToHclTerraform(struct!.exportToPoolFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fallback_port: {
      value: cdktf.stringToHclTerraform(struct!.fallbackPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fec_capable: {
      value: cdktf.numberToHclTerraform(struct!.fecCapable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fec_state: {
      value: cdktf.stringToHclTerraform(struct!.fecState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fgt_peer_device_name: {
      value: cdktf.stringToHclTerraform(struct!.fgtPeerDeviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fgt_peer_port_name: {
      value: cdktf.stringToHclTerraform(struct!.fgtPeerPortName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fiber_port: {
      value: cdktf.numberToHclTerraform(struct!.fiberPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    flags: {
      value: cdktf.numberToHclTerraform(struct!.flags),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    flap_duration: {
      value: cdktf.numberToHclTerraform(struct!.flapDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    flap_rate: {
      value: cdktf.numberToHclTerraform(struct!.flapRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    flap_timeout: {
      value: cdktf.numberToHclTerraform(struct!.flapTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    flapguard: {
      value: cdktf.stringToHclTerraform(struct!.flapguard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flow_control: {
      value: cdktf.stringToHclTerraform(struct!.flowControl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortilink_port: {
      value: cdktf.numberToHclTerraform(struct!.fortilinkPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    igmp_snooping: {
      value: cdktf.stringToHclTerraform(struct!.igmpSnooping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    igmp_snooping_flood_reports: {
      value: cdktf.stringToHclTerraform(struct!.igmpSnoopingFloodReports),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    igmps_flood_reports: {
      value: cdktf.stringToHclTerraform(struct!.igmpsFloodReports),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    igmps_flood_traffic: {
      value: cdktf.stringToHclTerraform(struct!.igmpsFloodTraffic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_source_guard: {
      value: cdktf.stringToHclTerraform(struct!.ipSourceGuard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    isl_local_trunk_name: {
      value: cdktf.stringToHclTerraform(struct!.islLocalTrunkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    isl_peer_device_name: {
      value: cdktf.stringToHclTerraform(struct!.islPeerDeviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    isl_peer_device_sn: {
      value: cdktf.stringToHclTerraform(struct!.islPeerDeviceSn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    isl_peer_port_name: {
      value: cdktf.stringToHclTerraform(struct!.islPeerPortName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lacp_speed: {
      value: cdktf.stringToHclTerraform(struct!.lacpSpeed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    learning_limit: {
      value: cdktf.numberToHclTerraform(struct!.learningLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    link_status: {
      value: cdktf.stringToHclTerraform(struct!.linkStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lldp_profile: {
      value: cdktf.stringToHclTerraform(struct!.lldpProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lldp_status: {
      value: cdktf.stringToHclTerraform(struct!.lldpStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_mac_event: {
      value: cdktf.stringToHclTerraform(struct!.logMacEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    loop_guard: {
      value: cdktf.stringToHclTerraform(struct!.loopGuard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    loop_guard_timeout: {
      value: cdktf.numberToHclTerraform(struct!.loopGuardTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_addr: {
      value: cdktf.stringToHclTerraform(struct!.macAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    matched_dpp_intf_tags: {
      value: cdktf.stringToHclTerraform(struct!.matchedDppIntfTags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    matched_dpp_policy: {
      value: cdktf.stringToHclTerraform(struct!.matchedDppPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_bundle: {
      value: cdktf.numberToHclTerraform(struct!.maxBundle),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mcast_snooping_flood_traffic: {
      value: cdktf.stringToHclTerraform(struct!.mcastSnoopingFloodTraffic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mclag: {
      value: cdktf.stringToHclTerraform(struct!.mclag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mclag_icl_port: {
      value: cdktf.numberToHclTerraform(struct!.mclagIclPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    media_type: {
      value: cdktf.stringToHclTerraform(struct!.mediaType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    member_withdrawal_behavior: {
      value: cdktf.stringToHclTerraform(struct!.memberWithdrawalBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_bundle: {
      value: cdktf.numberToHclTerraform(struct!.minBundle),
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
    p2p_port: {
      value: cdktf.numberToHclTerraform(struct!.p2PPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_sample_rate: {
      value: cdktf.numberToHclTerraform(struct!.packetSampleRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_sampler: {
      value: cdktf.stringToHclTerraform(struct!.packetSampler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pause_meter: {
      value: cdktf.numberToHclTerraform(struct!.pauseMeter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pause_meter_resume: {
      value: cdktf.stringToHclTerraform(struct!.pauseMeterResume),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pd_capable: {
      value: cdktf.numberToHclTerraform(struct!.pdCapable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    poe_capable: {
      value: cdktf.numberToHclTerraform(struct!.poeCapable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    poe_max_power: {
      value: cdktf.stringToHclTerraform(struct!.poeMaxPower),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    poe_mode_bt_cabable: {
      value: cdktf.numberToHclTerraform(struct!.poeModeBtCabable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    poe_port_mode: {
      value: cdktf.stringToHclTerraform(struct!.poePortMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    poe_port_power: {
      value: cdktf.stringToHclTerraform(struct!.poePortPower),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    poe_port_priority: {
      value: cdktf.stringToHclTerraform(struct!.poePortPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    poe_pre_standard_detection: {
      value: cdktf.stringToHclTerraform(struct!.poePreStandardDetection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    poe_standard: {
      value: cdktf.stringToHclTerraform(struct!.poeStandard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    poe_status: {
      value: cdktf.stringToHclTerraform(struct!.poeStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_name: {
      value: cdktf.stringToHclTerraform(struct!.portName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_number: {
      value: cdktf.numberToHclTerraform(struct!.portNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_owner: {
      value: cdktf.stringToHclTerraform(struct!.portOwner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_policy: {
      value: cdktf.stringToHclTerraform(struct!.portPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_prefix_type: {
      value: cdktf.numberToHclTerraform(struct!.portPrefixType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_security_policy: {
      value: cdktf.stringToHclTerraform(struct!.portSecurityPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_selection_criteria: {
      value: cdktf.stringToHclTerraform(struct!.portSelectionCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ptp_policy: {
      value: cdktf.stringToHclTerraform(struct!.ptpPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ptp_status: {
      value: cdktf.stringToHclTerraform(struct!.ptpStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qnq: {
      value: cdktf.stringToHclTerraform(struct!.qnq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qos_policy: {
      value: cdktf.stringToHclTerraform(struct!.qosPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restricted_auth_port: {
      value: cdktf.numberToHclTerraform(struct!.restrictedAuthPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rpvst_port: {
      value: cdktf.stringToHclTerraform(struct!.rpvstPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sample_direction: {
      value: cdktf.stringToHclTerraform(struct!.sampleDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sflow_counter_interval: {
      value: cdktf.numberToHclTerraform(struct!.sflowCounterInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_sample_rate: {
      value: cdktf.numberToHclTerraform(struct!.sflowSampleRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_sampler: {
      value: cdktf.stringToHclTerraform(struct!.sflowSampler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    speed: {
      value: cdktf.stringToHclTerraform(struct!.speed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    speed_mask: {
      value: cdktf.numberToHclTerraform(struct!.speedMask),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stacking_port: {
      value: cdktf.numberToHclTerraform(struct!.stackingPort),
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
    sticky_mac: {
      value: cdktf.stringToHclTerraform(struct!.stickyMac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storm_control_policy: {
      value: cdktf.stringToHclTerraform(struct!.stormControlPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stp_bpdu_guard: {
      value: cdktf.stringToHclTerraform(struct!.stpBpduGuard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stp_bpdu_guard_timeout: {
      value: cdktf.numberToHclTerraform(struct!.stpBpduGuardTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stp_root_guard: {
      value: cdktf.stringToHclTerraform(struct!.stpRootGuard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stp_state: {
      value: cdktf.stringToHclTerraform(struct!.stpState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_id: {
      value: cdktf.stringToHclTerraform(struct!.switchId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_port: {
      value: cdktf.numberToHclTerraform(struct!.virtualPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan: {
      value: cdktf.stringToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acl_group: {
      value: cdktf.listMapperHcl(switchcontrollerManagedswitchPortsAclGroupToHclTerraform, true)(struct!.aclGroup),
      isBlock: true,
      type: "set",
      storageClassType: "SwitchcontrollerManagedswitchPortsAclGroupList",
    },
    allowed_vlans: {
      value: cdktf.listMapperHcl(switchcontrollerManagedswitchPortsAllowedVlansToHclTerraform, true)(struct!.allowedVlans),
      isBlock: true,
      type: "set",
      storageClassType: "SwitchcontrollerManagedswitchPortsAllowedVlansList",
    },
    dhcp_snoop_option82_override: {
      value: cdktf.listMapperHcl(switchcontrollerManagedswitchPortsDhcpSnoopOption82OverrideToHclTerraform, true)(struct!.dhcpSnoopOption82Override),
      isBlock: true,
      type: "list",
      storageClassType: "SwitchcontrollerManagedswitchPortsDhcpSnoopOption82OverrideList",
    },
    export_tags: {
      value: cdktf.listMapperHcl(switchcontrollerManagedswitchPortsExportTagsToHclTerraform, true)(struct!.exportTags),
      isBlock: true,
      type: "set",
      storageClassType: "SwitchcontrollerManagedswitchPortsExportTagsList",
    },
    fortiswitch_acls: {
      value: cdktf.listMapperHcl(switchcontrollerManagedswitchPortsFortiswitchAclsToHclTerraform, true)(struct!.fortiswitchAcls),
      isBlock: true,
      type: "set",
      storageClassType: "SwitchcontrollerManagedswitchPortsFortiswitchAclsList",
    },
    interface_tags: {
      value: cdktf.listMapperHcl(switchcontrollerManagedswitchPortsInterfaceTagsToHclTerraform, true)(struct!.interfaceTags),
      isBlock: true,
      type: "set",
      storageClassType: "SwitchcontrollerManagedswitchPortsInterfaceTagsList",
    },
    members: {
      value: cdktf.listMapperHcl(switchcontrollerManagedswitchPortsMembersToHclTerraform, true)(struct!.members),
      isBlock: true,
      type: "set",
      storageClassType: "SwitchcontrollerManagedswitchPortsMembersList",
    },
    untagged_vlans: {
      value: cdktf.listMapperHcl(switchcontrollerManagedswitchPortsUntaggedVlansToHclTerraform, true)(struct!.untaggedVlans),
      isBlock: true,
      type: "set",
      storageClassType: "SwitchcontrollerManagedswitchPortsUntaggedVlansList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerManagedswitchPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerManagedswitchPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessMode = this._accessMode;
    }
    if (this._aggregatorMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregatorMode = this._aggregatorMode;
    }
    if (this._allowArpMonitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowArpMonitor = this._allowArpMonitor;
    }
    if (this._allowedVlansAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedVlansAll = this._allowedVlansAll;
    }
    if (this._arpInspectionTrust !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpInspectionTrust = this._arpInspectionTrust;
    }
    if (this._authenticatedPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticatedPort = this._authenticatedPort;
    }
    if (this._bundle !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundle = this._bundle;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._dhcpSnoopOption82Trust !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpSnoopOption82Trust = this._dhcpSnoopOption82Trust;
    }
    if (this._dhcpSnooping !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpSnooping = this._dhcpSnooping;
    }
    if (this._discardMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.discardMode = this._discardMode;
    }
    if (this._edgePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgePort = this._edgePort;
    }
    if (this._encryptedPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptedPort = this._encryptedPort;
    }
    if (this._exportTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportTo = this._exportTo;
    }
    if (this._exportToPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportToPool = this._exportToPool;
    }
    if (this._exportToPoolFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportToPoolFlag = this._exportToPoolFlag;
    }
    if (this._fallbackPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackPort = this._fallbackPort;
    }
    if (this._fecCapable !== undefined) {
      hasAnyValues = true;
      internalValueResult.fecCapable = this._fecCapable;
    }
    if (this._fecState !== undefined) {
      hasAnyValues = true;
      internalValueResult.fecState = this._fecState;
    }
    if (this._fgtPeerDeviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fgtPeerDeviceName = this._fgtPeerDeviceName;
    }
    if (this._fgtPeerPortName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fgtPeerPortName = this._fgtPeerPortName;
    }
    if (this._fiberPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fiberPort = this._fiberPort;
    }
    if (this._flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.flags = this._flags;
    }
    if (this._flapDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.flapDuration = this._flapDuration;
    }
    if (this._flapRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.flapRate = this._flapRate;
    }
    if (this._flapTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.flapTimeout = this._flapTimeout;
    }
    if (this._flapguard !== undefined) {
      hasAnyValues = true;
      internalValueResult.flapguard = this._flapguard;
    }
    if (this._flowControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowControl = this._flowControl;
    }
    if (this._fortilinkPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortilinkPort = this._fortilinkPort;
    }
    if (this._igmpSnooping !== undefined) {
      hasAnyValues = true;
      internalValueResult.igmpSnooping = this._igmpSnooping;
    }
    if (this._igmpSnoopingFloodReports !== undefined) {
      hasAnyValues = true;
      internalValueResult.igmpSnoopingFloodReports = this._igmpSnoopingFloodReports;
    }
    if (this._igmpsFloodReports !== undefined) {
      hasAnyValues = true;
      internalValueResult.igmpsFloodReports = this._igmpsFloodReports;
    }
    if (this._igmpsFloodTraffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.igmpsFloodTraffic = this._igmpsFloodTraffic;
    }
    if (this._ipSourceGuard !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSourceGuard = this._ipSourceGuard;
    }
    if (this._islLocalTrunkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.islLocalTrunkName = this._islLocalTrunkName;
    }
    if (this._islPeerDeviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.islPeerDeviceName = this._islPeerDeviceName;
    }
    if (this._islPeerDeviceSn !== undefined) {
      hasAnyValues = true;
      internalValueResult.islPeerDeviceSn = this._islPeerDeviceSn;
    }
    if (this._islPeerPortName !== undefined) {
      hasAnyValues = true;
      internalValueResult.islPeerPortName = this._islPeerPortName;
    }
    if (this._lacpSpeed !== undefined) {
      hasAnyValues = true;
      internalValueResult.lacpSpeed = this._lacpSpeed;
    }
    if (this._learningLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.learningLimit = this._learningLimit;
    }
    if (this._linkStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkStatus = this._linkStatus;
    }
    if (this._lldpProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.lldpProfile = this._lldpProfile;
    }
    if (this._lldpStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.lldpStatus = this._lldpStatus;
    }
    if (this._logMacEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.logMacEvent = this._logMacEvent;
    }
    if (this._loopGuard !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopGuard = this._loopGuard;
    }
    if (this._loopGuardTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopGuardTimeout = this._loopGuardTimeout;
    }
    if (this._macAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddr = this._macAddr;
    }
    if (this._matchedDppIntfTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchedDppIntfTags = this._matchedDppIntfTags;
    }
    if (this._matchedDppPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchedDppPolicy = this._matchedDppPolicy;
    }
    if (this._maxBundle !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBundle = this._maxBundle;
    }
    if (this._mcastSnoopingFloodTraffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcastSnoopingFloodTraffic = this._mcastSnoopingFloodTraffic;
    }
    if (this._mclag !== undefined) {
      hasAnyValues = true;
      internalValueResult.mclag = this._mclag;
    }
    if (this._mclagIclPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.mclagIclPort = this._mclagIclPort;
    }
    if (this._mediaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaType = this._mediaType;
    }
    if (this._memberWithdrawalBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberWithdrawalBehavior = this._memberWithdrawalBehavior;
    }
    if (this._minBundle !== undefined) {
      hasAnyValues = true;
      internalValueResult.minBundle = this._minBundle;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._p2PPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.p2PPort = this._p2PPort;
    }
    if (this._packetSampleRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetSampleRate = this._packetSampleRate;
    }
    if (this._packetSampler !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetSampler = this._packetSampler;
    }
    if (this._pauseMeter !== undefined) {
      hasAnyValues = true;
      internalValueResult.pauseMeter = this._pauseMeter;
    }
    if (this._pauseMeterResume !== undefined) {
      hasAnyValues = true;
      internalValueResult.pauseMeterResume = this._pauseMeterResume;
    }
    if (this._pdCapable !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdCapable = this._pdCapable;
    }
    if (this._poeCapable !== undefined) {
      hasAnyValues = true;
      internalValueResult.poeCapable = this._poeCapable;
    }
    if (this._poeMaxPower !== undefined) {
      hasAnyValues = true;
      internalValueResult.poeMaxPower = this._poeMaxPower;
    }
    if (this._poeModeBtCabable !== undefined) {
      hasAnyValues = true;
      internalValueResult.poeModeBtCabable = this._poeModeBtCabable;
    }
    if (this._poePortMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.poePortMode = this._poePortMode;
    }
    if (this._poePortPower !== undefined) {
      hasAnyValues = true;
      internalValueResult.poePortPower = this._poePortPower;
    }
    if (this._poePortPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.poePortPriority = this._poePortPriority;
    }
    if (this._poePreStandardDetection !== undefined) {
      hasAnyValues = true;
      internalValueResult.poePreStandardDetection = this._poePreStandardDetection;
    }
    if (this._poeStandard !== undefined) {
      hasAnyValues = true;
      internalValueResult.poeStandard = this._poeStandard;
    }
    if (this._poeStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.poeStatus = this._poeStatus;
    }
    if (this._portName !== undefined) {
      hasAnyValues = true;
      internalValueResult.portName = this._portName;
    }
    if (this._portNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNumber = this._portNumber;
    }
    if (this._portOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.portOwner = this._portOwner;
    }
    if (this._portPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.portPolicy = this._portPolicy;
    }
    if (this._portPrefixType !== undefined) {
      hasAnyValues = true;
      internalValueResult.portPrefixType = this._portPrefixType;
    }
    if (this._portSecurityPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.portSecurityPolicy = this._portSecurityPolicy;
    }
    if (this._portSelectionCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.portSelectionCriteria = this._portSelectionCriteria;
    }
    if (this._ptpPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.ptpPolicy = this._ptpPolicy;
    }
    if (this._ptpStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ptpStatus = this._ptpStatus;
    }
    if (this._qnq !== undefined) {
      hasAnyValues = true;
      internalValueResult.qnq = this._qnq;
    }
    if (this._qosPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.qosPolicy = this._qosPolicy;
    }
    if (this._restrictedAuthPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedAuthPort = this._restrictedAuthPort;
    }
    if (this._rpvstPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpvstPort = this._rpvstPort;
    }
    if (this._sampleDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleDirection = this._sampleDirection;
    }
    if (this._sflowCounterInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowCounterInterval = this._sflowCounterInterval;
    }
    if (this._sflowSampleRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowSampleRate = this._sflowSampleRate;
    }
    if (this._sflowSampler !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowSampler = this._sflowSampler;
    }
    if (this._speed !== undefined) {
      hasAnyValues = true;
      internalValueResult.speed = this._speed;
    }
    if (this._speedMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.speedMask = this._speedMask;
    }
    if (this._stackingPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.stackingPort = this._stackingPort;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._stickyMac !== undefined) {
      hasAnyValues = true;
      internalValueResult.stickyMac = this._stickyMac;
    }
    if (this._stormControlPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.stormControlPolicy = this._stormControlPolicy;
    }
    if (this._stpBpduGuard !== undefined) {
      hasAnyValues = true;
      internalValueResult.stpBpduGuard = this._stpBpduGuard;
    }
    if (this._stpBpduGuardTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.stpBpduGuardTimeout = this._stpBpduGuardTimeout;
    }
    if (this._stpRootGuard !== undefined) {
      hasAnyValues = true;
      internalValueResult.stpRootGuard = this._stpRootGuard;
    }
    if (this._stpState !== undefined) {
      hasAnyValues = true;
      internalValueResult.stpState = this._stpState;
    }
    if (this._switchId !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchId = this._switchId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._virtualPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualPort = this._virtualPort;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    if (this._aclGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclGroup = this._aclGroup?.internalValue;
    }
    if (this._allowedVlans?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedVlans = this._allowedVlans?.internalValue;
    }
    if (this._dhcpSnoopOption82Override?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpSnoopOption82Override = this._dhcpSnoopOption82Override?.internalValue;
    }
    if (this._exportTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportTags = this._exportTags?.internalValue;
    }
    if (this._fortiswitchAcls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortiswitchAcls = this._fortiswitchAcls?.internalValue;
    }
    if (this._interfaceTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceTags = this._interfaceTags?.internalValue;
    }
    if (this._members?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.members = this._members?.internalValue;
    }
    if (this._untaggedVlans?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.untaggedVlans = this._untaggedVlans?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerManagedswitchPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessMode = undefined;
      this._aggregatorMode = undefined;
      this._allowArpMonitor = undefined;
      this._allowedVlansAll = undefined;
      this._arpInspectionTrust = undefined;
      this._authenticatedPort = undefined;
      this._bundle = undefined;
      this._description = undefined;
      this._dhcpSnoopOption82Trust = undefined;
      this._dhcpSnooping = undefined;
      this._discardMode = undefined;
      this._edgePort = undefined;
      this._encryptedPort = undefined;
      this._exportTo = undefined;
      this._exportToPool = undefined;
      this._exportToPoolFlag = undefined;
      this._fallbackPort = undefined;
      this._fecCapable = undefined;
      this._fecState = undefined;
      this._fgtPeerDeviceName = undefined;
      this._fgtPeerPortName = undefined;
      this._fiberPort = undefined;
      this._flags = undefined;
      this._flapDuration = undefined;
      this._flapRate = undefined;
      this._flapTimeout = undefined;
      this._flapguard = undefined;
      this._flowControl = undefined;
      this._fortilinkPort = undefined;
      this._igmpSnooping = undefined;
      this._igmpSnoopingFloodReports = undefined;
      this._igmpsFloodReports = undefined;
      this._igmpsFloodTraffic = undefined;
      this._ipSourceGuard = undefined;
      this._islLocalTrunkName = undefined;
      this._islPeerDeviceName = undefined;
      this._islPeerDeviceSn = undefined;
      this._islPeerPortName = undefined;
      this._lacpSpeed = undefined;
      this._learningLimit = undefined;
      this._linkStatus = undefined;
      this._lldpProfile = undefined;
      this._lldpStatus = undefined;
      this._logMacEvent = undefined;
      this._loopGuard = undefined;
      this._loopGuardTimeout = undefined;
      this._macAddr = undefined;
      this._matchedDppIntfTags = undefined;
      this._matchedDppPolicy = undefined;
      this._maxBundle = undefined;
      this._mcastSnoopingFloodTraffic = undefined;
      this._mclag = undefined;
      this._mclagIclPort = undefined;
      this._mediaType = undefined;
      this._memberWithdrawalBehavior = undefined;
      this._minBundle = undefined;
      this._mode = undefined;
      this._p2PPort = undefined;
      this._packetSampleRate = undefined;
      this._packetSampler = undefined;
      this._pauseMeter = undefined;
      this._pauseMeterResume = undefined;
      this._pdCapable = undefined;
      this._poeCapable = undefined;
      this._poeMaxPower = undefined;
      this._poeModeBtCabable = undefined;
      this._poePortMode = undefined;
      this._poePortPower = undefined;
      this._poePortPriority = undefined;
      this._poePreStandardDetection = undefined;
      this._poeStandard = undefined;
      this._poeStatus = undefined;
      this._portName = undefined;
      this._portNumber = undefined;
      this._portOwner = undefined;
      this._portPolicy = undefined;
      this._portPrefixType = undefined;
      this._portSecurityPolicy = undefined;
      this._portSelectionCriteria = undefined;
      this._ptpPolicy = undefined;
      this._ptpStatus = undefined;
      this._qnq = undefined;
      this._qosPolicy = undefined;
      this._restrictedAuthPort = undefined;
      this._rpvstPort = undefined;
      this._sampleDirection = undefined;
      this._sflowCounterInterval = undefined;
      this._sflowSampleRate = undefined;
      this._sflowSampler = undefined;
      this._speed = undefined;
      this._speedMask = undefined;
      this._stackingPort = undefined;
      this._status = undefined;
      this._stickyMac = undefined;
      this._stormControlPolicy = undefined;
      this._stpBpduGuard = undefined;
      this._stpBpduGuardTimeout = undefined;
      this._stpRootGuard = undefined;
      this._stpState = undefined;
      this._switchId = undefined;
      this._type = undefined;
      this._virtualPort = undefined;
      this._vlan = undefined;
      this._aclGroup.internalValue = undefined;
      this._allowedVlans.internalValue = undefined;
      this._dhcpSnoopOption82Override.internalValue = undefined;
      this._exportTags.internalValue = undefined;
      this._fortiswitchAcls.internalValue = undefined;
      this._interfaceTags.internalValue = undefined;
      this._members.internalValue = undefined;
      this._untaggedVlans.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessMode = value.accessMode;
      this._aggregatorMode = value.aggregatorMode;
      this._allowArpMonitor = value.allowArpMonitor;
      this._allowedVlansAll = value.allowedVlansAll;
      this._arpInspectionTrust = value.arpInspectionTrust;
      this._authenticatedPort = value.authenticatedPort;
      this._bundle = value.bundle;
      this._description = value.description;
      this._dhcpSnoopOption82Trust = value.dhcpSnoopOption82Trust;
      this._dhcpSnooping = value.dhcpSnooping;
      this._discardMode = value.discardMode;
      this._edgePort = value.edgePort;
      this._encryptedPort = value.encryptedPort;
      this._exportTo = value.exportTo;
      this._exportToPool = value.exportToPool;
      this._exportToPoolFlag = value.exportToPoolFlag;
      this._fallbackPort = value.fallbackPort;
      this._fecCapable = value.fecCapable;
      this._fecState = value.fecState;
      this._fgtPeerDeviceName = value.fgtPeerDeviceName;
      this._fgtPeerPortName = value.fgtPeerPortName;
      this._fiberPort = value.fiberPort;
      this._flags = value.flags;
      this._flapDuration = value.flapDuration;
      this._flapRate = value.flapRate;
      this._flapTimeout = value.flapTimeout;
      this._flapguard = value.flapguard;
      this._flowControl = value.flowControl;
      this._fortilinkPort = value.fortilinkPort;
      this._igmpSnooping = value.igmpSnooping;
      this._igmpSnoopingFloodReports = value.igmpSnoopingFloodReports;
      this._igmpsFloodReports = value.igmpsFloodReports;
      this._igmpsFloodTraffic = value.igmpsFloodTraffic;
      this._ipSourceGuard = value.ipSourceGuard;
      this._islLocalTrunkName = value.islLocalTrunkName;
      this._islPeerDeviceName = value.islPeerDeviceName;
      this._islPeerDeviceSn = value.islPeerDeviceSn;
      this._islPeerPortName = value.islPeerPortName;
      this._lacpSpeed = value.lacpSpeed;
      this._learningLimit = value.learningLimit;
      this._linkStatus = value.linkStatus;
      this._lldpProfile = value.lldpProfile;
      this._lldpStatus = value.lldpStatus;
      this._logMacEvent = value.logMacEvent;
      this._loopGuard = value.loopGuard;
      this._loopGuardTimeout = value.loopGuardTimeout;
      this._macAddr = value.macAddr;
      this._matchedDppIntfTags = value.matchedDppIntfTags;
      this._matchedDppPolicy = value.matchedDppPolicy;
      this._maxBundle = value.maxBundle;
      this._mcastSnoopingFloodTraffic = value.mcastSnoopingFloodTraffic;
      this._mclag = value.mclag;
      this._mclagIclPort = value.mclagIclPort;
      this._mediaType = value.mediaType;
      this._memberWithdrawalBehavior = value.memberWithdrawalBehavior;
      this._minBundle = value.minBundle;
      this._mode = value.mode;
      this._p2PPort = value.p2PPort;
      this._packetSampleRate = value.packetSampleRate;
      this._packetSampler = value.packetSampler;
      this._pauseMeter = value.pauseMeter;
      this._pauseMeterResume = value.pauseMeterResume;
      this._pdCapable = value.pdCapable;
      this._poeCapable = value.poeCapable;
      this._poeMaxPower = value.poeMaxPower;
      this._poeModeBtCabable = value.poeModeBtCabable;
      this._poePortMode = value.poePortMode;
      this._poePortPower = value.poePortPower;
      this._poePortPriority = value.poePortPriority;
      this._poePreStandardDetection = value.poePreStandardDetection;
      this._poeStandard = value.poeStandard;
      this._poeStatus = value.poeStatus;
      this._portName = value.portName;
      this._portNumber = value.portNumber;
      this._portOwner = value.portOwner;
      this._portPolicy = value.portPolicy;
      this._portPrefixType = value.portPrefixType;
      this._portSecurityPolicy = value.portSecurityPolicy;
      this._portSelectionCriteria = value.portSelectionCriteria;
      this._ptpPolicy = value.ptpPolicy;
      this._ptpStatus = value.ptpStatus;
      this._qnq = value.qnq;
      this._qosPolicy = value.qosPolicy;
      this._restrictedAuthPort = value.restrictedAuthPort;
      this._rpvstPort = value.rpvstPort;
      this._sampleDirection = value.sampleDirection;
      this._sflowCounterInterval = value.sflowCounterInterval;
      this._sflowSampleRate = value.sflowSampleRate;
      this._sflowSampler = value.sflowSampler;
      this._speed = value.speed;
      this._speedMask = value.speedMask;
      this._stackingPort = value.stackingPort;
      this._status = value.status;
      this._stickyMac = value.stickyMac;
      this._stormControlPolicy = value.stormControlPolicy;
      this._stpBpduGuard = value.stpBpduGuard;
      this._stpBpduGuardTimeout = value.stpBpduGuardTimeout;
      this._stpRootGuard = value.stpRootGuard;
      this._stpState = value.stpState;
      this._switchId = value.switchId;
      this._type = value.type;
      this._virtualPort = value.virtualPort;
      this._vlan = value.vlan;
      this._aclGroup.internalValue = value.aclGroup;
      this._allowedVlans.internalValue = value.allowedVlans;
      this._dhcpSnoopOption82Override.internalValue = value.dhcpSnoopOption82Override;
      this._exportTags.internalValue = value.exportTags;
      this._fortiswitchAcls.internalValue = value.fortiswitchAcls;
      this._interfaceTags.internalValue = value.interfaceTags;
      this._members.internalValue = value.members;
      this._untaggedVlans.internalValue = value.untaggedVlans;
    }
  }

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

  // aggregator_mode - computed: true, optional: true, required: false
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

  // bundle - computed: true, optional: true, required: false
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

  // export_to - computed: true, optional: true, required: false
  private _exportTo?: string; 
  public get exportTo() {
    return this.getStringAttribute('export_to');
  }
  public set exportTo(value: string) {
    this._exportTo = value;
  }
  public resetExportTo() {
    this._exportTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportToInput() {
    return this._exportTo;
  }

  // export_to_pool - computed: false, optional: true, required: false
  private _exportToPool?: string; 
  public get exportToPool() {
    return this.getStringAttribute('export_to_pool');
  }
  public set exportToPool(value: string) {
    this._exportToPool = value;
  }
  public resetExportToPool() {
    this._exportToPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportToPoolInput() {
    return this._exportToPool;
  }

  // export_to_pool_flag - computed: false, optional: true, required: false
  private _exportToPoolFlag?: number; 
  public get exportToPoolFlag() {
    return this.getNumberAttribute('export_to_pool_flag');
  }
  public set exportToPoolFlag(value: number) {
    this._exportToPoolFlag = value;
  }
  public resetExportToPoolFlag() {
    this._exportToPoolFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportToPoolFlagInput() {
    return this._exportToPoolFlag;
  }

  // fallback_port - computed: false, optional: true, required: false
  private _fallbackPort?: string; 
  public get fallbackPort() {
    return this.getStringAttribute('fallback_port');
  }
  public set fallbackPort(value: string) {
    this._fallbackPort = value;
  }
  public resetFallbackPort() {
    this._fallbackPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackPortInput() {
    return this._fallbackPort;
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

  // fgt_peer_device_name - computed: false, optional: true, required: false
  private _fgtPeerDeviceName?: string; 
  public get fgtPeerDeviceName() {
    return this.getStringAttribute('fgt_peer_device_name');
  }
  public set fgtPeerDeviceName(value: string) {
    this._fgtPeerDeviceName = value;
  }
  public resetFgtPeerDeviceName() {
    this._fgtPeerDeviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgtPeerDeviceNameInput() {
    return this._fgtPeerDeviceName;
  }

  // fgt_peer_port_name - computed: false, optional: true, required: false
  private _fgtPeerPortName?: string; 
  public get fgtPeerPortName() {
    return this.getStringAttribute('fgt_peer_port_name');
  }
  public set fgtPeerPortName(value: string) {
    this._fgtPeerPortName = value;
  }
  public resetFgtPeerPortName() {
    this._fgtPeerPortName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgtPeerPortNameInput() {
    return this._fgtPeerPortName;
  }

  // fiber_port - computed: false, optional: true, required: false
  private _fiberPort?: number; 
  public get fiberPort() {
    return this.getNumberAttribute('fiber_port');
  }
  public set fiberPort(value: number) {
    this._fiberPort = value;
  }
  public resetFiberPort() {
    this._fiberPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fiberPortInput() {
    return this._fiberPort;
  }

  // flags - computed: false, optional: true, required: false
  private _flags?: number; 
  public get flags() {
    return this.getNumberAttribute('flags');
  }
  public set flags(value: number) {
    this._flags = value;
  }
  public resetFlags() {
    this._flags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagsInput() {
    return this._flags;
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

  // fortilink_port - computed: false, optional: true, required: false
  private _fortilinkPort?: number; 
  public get fortilinkPort() {
    return this.getNumberAttribute('fortilink_port');
  }
  public set fortilinkPort(value: number) {
    this._fortilinkPort = value;
  }
  public resetFortilinkPort() {
    this._fortilinkPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortilinkPortInput() {
    return this._fortilinkPort;
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

  // isl_local_trunk_name - computed: false, optional: true, required: false
  private _islLocalTrunkName?: string; 
  public get islLocalTrunkName() {
    return this.getStringAttribute('isl_local_trunk_name');
  }
  public set islLocalTrunkName(value: string) {
    this._islLocalTrunkName = value;
  }
  public resetIslLocalTrunkName() {
    this._islLocalTrunkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get islLocalTrunkNameInput() {
    return this._islLocalTrunkName;
  }

  // isl_peer_device_name - computed: false, optional: true, required: false
  private _islPeerDeviceName?: string; 
  public get islPeerDeviceName() {
    return this.getStringAttribute('isl_peer_device_name');
  }
  public set islPeerDeviceName(value: string) {
    this._islPeerDeviceName = value;
  }
  public resetIslPeerDeviceName() {
    this._islPeerDeviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get islPeerDeviceNameInput() {
    return this._islPeerDeviceName;
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

  // isl_peer_port_name - computed: false, optional: true, required: false
  private _islPeerPortName?: string; 
  public get islPeerPortName() {
    return this.getStringAttribute('isl_peer_port_name');
  }
  public set islPeerPortName(value: string) {
    this._islPeerPortName = value;
  }
  public resetIslPeerPortName() {
    this._islPeerPortName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get islPeerPortNameInput() {
    return this._islPeerPortName;
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

  // mac_addr - computed: true, optional: true, required: false
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

  // max_bundle - computed: true, optional: true, required: false
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

  // mclag - computed: true, optional: true, required: false
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

  // min_bundle - computed: true, optional: true, required: false
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

  // mode - computed: true, optional: true, required: false
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

  // pause_meter_resume - computed: true, optional: true, required: false
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

  // pd_capable - computed: false, optional: true, required: false
  private _pdCapable?: number; 
  public get pdCapable() {
    return this.getNumberAttribute('pd_capable');
  }
  public set pdCapable(value: number) {
    this._pdCapable = value;
  }
  public resetPdCapable() {
    this._pdCapable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdCapableInput() {
    return this._pdCapable;
  }

  // poe_capable - computed: false, optional: true, required: false
  private _poeCapable?: number; 
  public get poeCapable() {
    return this.getNumberAttribute('poe_capable');
  }
  public set poeCapable(value: number) {
    this._poeCapable = value;
  }
  public resetPoeCapable() {
    this._poeCapable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poeCapableInput() {
    return this._poeCapable;
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

  // poe_pre_standard_detection - computed: true, optional: true, required: false
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

  // poe_status - computed: true, optional: true, required: false
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

  // port_number - computed: false, optional: true, required: false
  private _portNumber?: number; 
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }
  public set portNumber(value: number) {
    this._portNumber = value;
  }
  public resetPortNumber() {
    this._portNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumberInput() {
    return this._portNumber;
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

  // port_prefix_type - computed: false, optional: true, required: false
  private _portPrefixType?: number; 
  public get portPrefixType() {
    return this.getNumberAttribute('port_prefix_type');
  }
  public set portPrefixType(value: number) {
    this._portPrefixType = value;
  }
  public resetPortPrefixType() {
    this._portPrefixType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portPrefixTypeInput() {
    return this._portPrefixType;
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

  // port_selection_criteria - computed: true, optional: true, required: false
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

  // qnq - computed: false, optional: true, required: false
  private _qnq?: string; 
  public get qnq() {
    return this.getStringAttribute('qnq');
  }
  public set qnq(value: string) {
    this._qnq = value;
  }
  public resetQnq() {
    this._qnq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qnqInput() {
    return this._qnq;
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

  // speed - computed: true, optional: true, required: false
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

  // speed_mask - computed: false, optional: true, required: false
  private _speedMask?: number; 
  public get speedMask() {
    return this.getNumberAttribute('speed_mask');
  }
  public set speedMask(value: number) {
    this._speedMask = value;
  }
  public resetSpeedMask() {
    this._speedMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedMaskInput() {
    return this._speedMask;
  }

  // stacking_port - computed: false, optional: true, required: false
  private _stackingPort?: number; 
  public get stackingPort() {
    return this.getNumberAttribute('stacking_port');
  }
  public set stackingPort(value: number) {
    this._stackingPort = value;
  }
  public resetStackingPort() {
    this._stackingPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackingPortInput() {
    return this._stackingPort;
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

  // storm_control_policy - computed: true, optional: true, required: false
  private _stormControlPolicy?: string; 
  public get stormControlPolicy() {
    return this.getStringAttribute('storm_control_policy');
  }
  public set stormControlPolicy(value: string) {
    this._stormControlPolicy = value;
  }
  public resetStormControlPolicy() {
    this._stormControlPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stormControlPolicyInput() {
    return this._stormControlPolicy;
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

  // switch_id - computed: true, optional: true, required: false
  private _switchId?: string; 
  public get switchId() {
    return this.getStringAttribute('switch_id');
  }
  public set switchId(value: string) {
    this._switchId = value;
  }
  public resetSwitchId() {
    this._switchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchIdInput() {
    return this._switchId;
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

  // virtual_port - computed: false, optional: true, required: false
  private _virtualPort?: number; 
  public get virtualPort() {
    return this.getNumberAttribute('virtual_port');
  }
  public set virtualPort(value: number) {
    this._virtualPort = value;
  }
  public resetVirtualPort() {
    this._virtualPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualPortInput() {
    return this._virtualPort;
  }

  // vlan - computed: true, optional: true, required: false
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

  // acl_group - computed: false, optional: true, required: false
  private _aclGroup = new SwitchcontrollerManagedswitchPortsAclGroupList(this, "acl_group", true);
  public get aclGroup() {
    return this._aclGroup;
  }
  public putAclGroup(value: SwitchcontrollerManagedswitchPortsAclGroup[] | cdktf.IResolvable) {
    this._aclGroup.internalValue = value;
  }
  public resetAclGroup() {
    this._aclGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclGroupInput() {
    return this._aclGroup.internalValue;
  }

  // allowed_vlans - computed: false, optional: true, required: false
  private _allowedVlans = new SwitchcontrollerManagedswitchPortsAllowedVlansList(this, "allowed_vlans", true);
  public get allowedVlans() {
    return this._allowedVlans;
  }
  public putAllowedVlans(value: SwitchcontrollerManagedswitchPortsAllowedVlans[] | cdktf.IResolvable) {
    this._allowedVlans.internalValue = value;
  }
  public resetAllowedVlans() {
    this._allowedVlans.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedVlansInput() {
    return this._allowedVlans.internalValue;
  }

  // dhcp_snoop_option82_override - computed: false, optional: true, required: false
  private _dhcpSnoopOption82Override = new SwitchcontrollerManagedswitchPortsDhcpSnoopOption82OverrideList(this, "dhcp_snoop_option82_override", false);
  public get dhcpSnoopOption82Override() {
    return this._dhcpSnoopOption82Override;
  }
  public putDhcpSnoopOption82Override(value: SwitchcontrollerManagedswitchPortsDhcpSnoopOption82Override[] | cdktf.IResolvable) {
    this._dhcpSnoopOption82Override.internalValue = value;
  }
  public resetDhcpSnoopOption82Override() {
    this._dhcpSnoopOption82Override.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpSnoopOption82OverrideInput() {
    return this._dhcpSnoopOption82Override.internalValue;
  }

  // export_tags - computed: false, optional: true, required: false
  private _exportTags = new SwitchcontrollerManagedswitchPortsExportTagsList(this, "export_tags", true);
  public get exportTags() {
    return this._exportTags;
  }
  public putExportTags(value: SwitchcontrollerManagedswitchPortsExportTags[] | cdktf.IResolvable) {
    this._exportTags.internalValue = value;
  }
  public resetExportTags() {
    this._exportTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportTagsInput() {
    return this._exportTags.internalValue;
  }

  // fortiswitch_acls - computed: false, optional: true, required: false
  private _fortiswitchAcls = new SwitchcontrollerManagedswitchPortsFortiswitchAclsList(this, "fortiswitch_acls", true);
  public get fortiswitchAcls() {
    return this._fortiswitchAcls;
  }
  public putFortiswitchAcls(value: SwitchcontrollerManagedswitchPortsFortiswitchAcls[] | cdktf.IResolvable) {
    this._fortiswitchAcls.internalValue = value;
  }
  public resetFortiswitchAcls() {
    this._fortiswitchAcls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiswitchAclsInput() {
    return this._fortiswitchAcls.internalValue;
  }

  // interface_tags - computed: false, optional: true, required: false
  private _interfaceTags = new SwitchcontrollerManagedswitchPortsInterfaceTagsList(this, "interface_tags", true);
  public get interfaceTags() {
    return this._interfaceTags;
  }
  public putInterfaceTags(value: SwitchcontrollerManagedswitchPortsInterfaceTags[] | cdktf.IResolvable) {
    this._interfaceTags.internalValue = value;
  }
  public resetInterfaceTags() {
    this._interfaceTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceTagsInput() {
    return this._interfaceTags.internalValue;
  }

  // members - computed: false, optional: true, required: false
  private _members = new SwitchcontrollerManagedswitchPortsMembersList(this, "members", true);
  public get members() {
    return this._members;
  }
  public putMembers(value: SwitchcontrollerManagedswitchPortsMembers[] | cdktf.IResolvable) {
    this._members.internalValue = value;
  }
  public resetMembers() {
    this._members.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members.internalValue;
  }

  // untagged_vlans - computed: false, optional: true, required: false
  private _untaggedVlans = new SwitchcontrollerManagedswitchPortsUntaggedVlansList(this, "untagged_vlans", true);
  public get untaggedVlans() {
    return this._untaggedVlans;
  }
  public putUntaggedVlans(value: SwitchcontrollerManagedswitchPortsUntaggedVlans[] | cdktf.IResolvable) {
    this._untaggedVlans.internalValue = value;
  }
  public resetUntaggedVlans() {
    this._untaggedVlans.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untaggedVlansInput() {
    return this._untaggedVlans.internalValue;
  }
}

export class SwitchcontrollerManagedswitchPortsList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerManagedswitchPorts[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerManagedswitchPortsOutputReference {
    return new SwitchcontrollerManagedswitchPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchcontrollerManagedswitchRemoteLog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#csv SwitchcontrollerManagedswitch#csv}
  */
  readonly csv?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#facility SwitchcontrollerManagedswitch#facility}
  */
  readonly facility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#name SwitchcontrollerManagedswitch#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#port SwitchcontrollerManagedswitch#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#server SwitchcontrollerManagedswitch#server}
  */
  readonly server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#severity SwitchcontrollerManagedswitch#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#status SwitchcontrollerManagedswitch#status}
  */
  readonly status?: string;
}

export function switchcontrollerManagedswitchRemoteLogToTerraform(struct?: SwitchcontrollerManagedswitchRemoteLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    csv: cdktf.stringToTerraform(struct!.csv),
    facility: cdktf.stringToTerraform(struct!.facility),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    server: cdktf.stringToTerraform(struct!.server),
    severity: cdktf.stringToTerraform(struct!.severity),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function switchcontrollerManagedswitchRemoteLogToHclTerraform(struct?: SwitchcontrollerManagedswitchRemoteLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    csv: {
      value: cdktf.stringToHclTerraform(struct!.csv),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    facility: {
      value: cdktf.stringToHclTerraform(struct!.facility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerManagedswitchRemoteLogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerManagedswitchRemoteLog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._csv !== undefined) {
      hasAnyValues = true;
      internalValueResult.csv = this._csv;
    }
    if (this._facility !== undefined) {
      hasAnyValues = true;
      internalValueResult.facility = this._facility;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerManagedswitchRemoteLog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._csv = undefined;
      this._facility = undefined;
      this._name = undefined;
      this._port = undefined;
      this._server = undefined;
      this._severity = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._csv = value.csv;
      this._facility = value.facility;
      this._name = value.name;
      this._port = value.port;
      this._server = value.server;
      this._severity = value.severity;
      this._status = value.status;
    }
  }

  // csv - computed: true, optional: true, required: false
  private _csv?: string; 
  public get csv() {
    return this.getStringAttribute('csv');
  }
  public set csv(value: string) {
    this._csv = value;
  }
  public resetCsv() {
    this._csv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvInput() {
    return this._csv;
  }

  // facility - computed: true, optional: true, required: false
  private _facility?: string; 
  public get facility() {
    return this.getStringAttribute('facility');
  }
  public set facility(value: string) {
    this._facility = value;
  }
  public resetFacility() {
    this._facility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facilityInput() {
    return this._facility;
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

  // port - computed: true, optional: true, required: false
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

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
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
}

export class SwitchcontrollerManagedswitchRemoteLogList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerManagedswitchRemoteLog[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerManagedswitchRemoteLogOutputReference {
    return new SwitchcontrollerManagedswitchRemoteLogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchcontrollerManagedswitchRouteOffloadRouter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#router_ip SwitchcontrollerManagedswitch#router_ip}
  */
  readonly routerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#vlan_name SwitchcontrollerManagedswitch#vlan_name}
  */
  readonly vlanName?: string;
}

export function switchcontrollerManagedswitchRouteOffloadRouterToTerraform(struct?: SwitchcontrollerManagedswitchRouteOffloadRouter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    router_ip: cdktf.stringToTerraform(struct!.routerIp),
    vlan_name: cdktf.stringToTerraform(struct!.vlanName),
  }
}


export function switchcontrollerManagedswitchRouteOffloadRouterToHclTerraform(struct?: SwitchcontrollerManagedswitchRouteOffloadRouter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    router_ip: {
      value: cdktf.stringToHclTerraform(struct!.routerIp),
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

export class SwitchcontrollerManagedswitchRouteOffloadRouterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerManagedswitchRouteOffloadRouter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerIp = this._routerIp;
    }
    if (this._vlanName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanName = this._vlanName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerManagedswitchRouteOffloadRouter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routerIp = undefined;
      this._vlanName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routerIp = value.routerIp;
      this._vlanName = value.vlanName;
    }
  }

  // router_ip - computed: true, optional: true, required: false
  private _routerIp?: string; 
  public get routerIp() {
    return this.getStringAttribute('router_ip');
  }
  public set routerIp(value: string) {
    this._routerIp = value;
  }
  public resetRouterIp() {
    this._routerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIpInput() {
    return this._routerIp;
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

export class SwitchcontrollerManagedswitchRouteOffloadRouterList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerManagedswitchRouteOffloadRouter[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerManagedswitchRouteOffloadRouterOutputReference {
    return new SwitchcontrollerManagedswitchRouteOffloadRouterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchcontrollerManagedswitchRouterStatic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#blackhole SwitchcontrollerManagedswitch#blackhole}
  */
  readonly blackhole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#comment SwitchcontrollerManagedswitch#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#device SwitchcontrollerManagedswitch#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#distance SwitchcontrollerManagedswitch#distance}
  */
  readonly distance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#dst SwitchcontrollerManagedswitch#dst}
  */
  readonly dst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#dynamic_gateway SwitchcontrollerManagedswitch#dynamic_gateway}
  */
  readonly dynamicGateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#gateway SwitchcontrollerManagedswitch#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#id SwitchcontrollerManagedswitch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#status SwitchcontrollerManagedswitch#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#switch_id SwitchcontrollerManagedswitch#switch_id}
  */
  readonly switchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#vrf SwitchcontrollerManagedswitch#vrf}
  */
  readonly vrf?: string;
}

export function switchcontrollerManagedswitchRouterStaticToTerraform(struct?: SwitchcontrollerManagedswitchRouterStatic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blackhole: cdktf.stringToTerraform(struct!.blackhole),
    comment: cdktf.stringToTerraform(struct!.comment),
    device: cdktf.stringToTerraform(struct!.device),
    distance: cdktf.numberToTerraform(struct!.distance),
    dst: cdktf.stringToTerraform(struct!.dst),
    dynamic_gateway: cdktf.stringToTerraform(struct!.dynamicGateway),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    id: cdktf.numberToTerraform(struct!.id),
    status: cdktf.stringToTerraform(struct!.status),
    switch_id: cdktf.stringToTerraform(struct!.switchId),
    vrf: cdktf.stringToTerraform(struct!.vrf),
  }
}


export function switchcontrollerManagedswitchRouterStaticToHclTerraform(struct?: SwitchcontrollerManagedswitchRouterStatic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blackhole: {
      value: cdktf.stringToHclTerraform(struct!.blackhole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    distance: {
      value: cdktf.numberToHclTerraform(struct!.distance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst: {
      value: cdktf.stringToHclTerraform(struct!.dst),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_gateway: {
      value: cdktf.stringToHclTerraform(struct!.dynamicGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
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
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_id: {
      value: cdktf.stringToHclTerraform(struct!.switchId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf: {
      value: cdktf.stringToHclTerraform(struct!.vrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerManagedswitchRouterStaticOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerManagedswitchRouterStatic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blackhole !== undefined) {
      hasAnyValues = true;
      internalValueResult.blackhole = this._blackhole;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._distance !== undefined) {
      hasAnyValues = true;
      internalValueResult.distance = this._distance;
    }
    if (this._dst !== undefined) {
      hasAnyValues = true;
      internalValueResult.dst = this._dst;
    }
    if (this._dynamicGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicGateway = this._dynamicGateway;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._switchId !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchId = this._switchId;
    }
    if (this._vrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrf = this._vrf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerManagedswitchRouterStatic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blackhole = undefined;
      this._comment = undefined;
      this._device = undefined;
      this._distance = undefined;
      this._dst = undefined;
      this._dynamicGateway = undefined;
      this._gateway = undefined;
      this._id = undefined;
      this._status = undefined;
      this._switchId = undefined;
      this._vrf = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blackhole = value.blackhole;
      this._comment = value.comment;
      this._device = value.device;
      this._distance = value.distance;
      this._dst = value.dst;
      this._dynamicGateway = value.dynamicGateway;
      this._gateway = value.gateway;
      this._id = value.id;
      this._status = value.status;
      this._switchId = value.switchId;
      this._vrf = value.vrf;
    }
  }

  // blackhole - computed: true, optional: true, required: false
  private _blackhole?: string; 
  public get blackhole() {
    return this.getStringAttribute('blackhole');
  }
  public set blackhole(value: string) {
    this._blackhole = value;
  }
  public resetBlackhole() {
    this._blackhole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blackholeInput() {
    return this._blackhole;
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

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // distance - computed: true, optional: true, required: false
  private _distance?: number; 
  public get distance() {
    return this.getNumberAttribute('distance');
  }
  public set distance(value: number) {
    this._distance = value;
  }
  public resetDistance() {
    this._distance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceInput() {
    return this._distance;
  }

  // dst - computed: true, optional: true, required: false
  private _dst?: string; 
  public get dst() {
    return this.getStringAttribute('dst');
  }
  public set dst(value: string) {
    this._dst = value;
  }
  public resetDst() {
    this._dst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstInput() {
    return this._dst;
  }

  // dynamic_gateway - computed: true, optional: true, required: false
  private _dynamicGateway?: string; 
  public get dynamicGateway() {
    return this.getStringAttribute('dynamic_gateway');
  }
  public set dynamicGateway(value: string) {
    this._dynamicGateway = value;
  }
  public resetDynamicGateway() {
    this._dynamicGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicGatewayInput() {
    return this._dynamicGateway;
  }

  // gateway - computed: true, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
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

  // switch_id - computed: false, optional: true, required: false
  private _switchId?: string; 
  public get switchId() {
    return this.getStringAttribute('switch_id');
  }
  public set switchId(value: string) {
    this._switchId = value;
  }
  public resetSwitchId() {
    this._switchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchIdInput() {
    return this._switchId;
  }

  // vrf - computed: false, optional: true, required: false
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  public resetVrf() {
    this._vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }
}

export class SwitchcontrollerManagedswitchRouterStaticList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerManagedswitchRouterStatic[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerManagedswitchRouterStaticOutputReference {
    return new SwitchcontrollerManagedswitchRouterStaticOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchcontrollerManagedswitchRouterVrf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#name SwitchcontrollerManagedswitch#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#switch_id SwitchcontrollerManagedswitch#switch_id}
  */
  readonly switchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#vrfid SwitchcontrollerManagedswitch#vrfid}
  */
  readonly vrfid?: number;
}

export function switchcontrollerManagedswitchRouterVrfToTerraform(struct?: SwitchcontrollerManagedswitchRouterVrf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    switch_id: cdktf.stringToTerraform(struct!.switchId),
    vrfid: cdktf.numberToTerraform(struct!.vrfid),
  }
}


export function switchcontrollerManagedswitchRouterVrfToHclTerraform(struct?: SwitchcontrollerManagedswitchRouterVrf | cdktf.IResolvable): any {
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
    switch_id: {
      value: cdktf.stringToHclTerraform(struct!.switchId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrfid: {
      value: cdktf.numberToHclTerraform(struct!.vrfid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerManagedswitchRouterVrfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerManagedswitchRouterVrf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._switchId !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchId = this._switchId;
    }
    if (this._vrfid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfid = this._vrfid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerManagedswitchRouterVrf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._switchId = undefined;
      this._vrfid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._switchId = value.switchId;
      this._vrfid = value.vrfid;
    }
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

  // switch_id - computed: false, optional: true, required: false
  private _switchId?: string; 
  public get switchId() {
    return this.getStringAttribute('switch_id');
  }
  public set switchId(value: string) {
    this._switchId = value;
  }
  public resetSwitchId() {
    this._switchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchIdInput() {
    return this._switchId;
  }

  // vrfid - computed: false, optional: true, required: false
  private _vrfid?: number; 
  public get vrfid() {
    return this.getNumberAttribute('vrfid');
  }
  public set vrfid(value: number) {
    this._vrfid = value;
  }
  public resetVrfid() {
    this._vrfid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfidInput() {
    return this._vrfid;
  }
}

export class SwitchcontrollerManagedswitchRouterVrfList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerManagedswitchRouterVrf[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerManagedswitchRouterVrfOutputReference {
    return new SwitchcontrollerManagedswitchRouterVrfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchcontrollerManagedswitchSnmpCommunityHosts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#id SwitchcontrollerManagedswitch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#ip SwitchcontrollerManagedswitch#ip}
  */
  readonly ip?: string;
}

export function switchcontrollerManagedswitchSnmpCommunityHostsToTerraform(struct?: SwitchcontrollerManagedswitchSnmpCommunityHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function switchcontrollerManagedswitchSnmpCommunityHostsToHclTerraform(struct?: SwitchcontrollerManagedswitchSnmpCommunityHosts | cdktf.IResolvable): any {
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
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerManagedswitchSnmpCommunityHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerManagedswitchSnmpCommunityHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerManagedswitchSnmpCommunityHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._ip = value.ip;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}

export class SwitchcontrollerManagedswitchSnmpCommunityHostsList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerManagedswitchSnmpCommunityHosts[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerManagedswitchSnmpCommunityHostsOutputReference {
    return new SwitchcontrollerManagedswitchSnmpCommunityHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchcontrollerManagedswitchSnmpCommunity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#events SwitchcontrollerManagedswitch#events}
  */
  readonly events?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#id SwitchcontrollerManagedswitch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#name SwitchcontrollerManagedswitch#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#query_v1_port SwitchcontrollerManagedswitch#query_v1_port}
  */
  readonly queryV1Port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#query_v1_status SwitchcontrollerManagedswitch#query_v1_status}
  */
  readonly queryV1Status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#query_v2c_port SwitchcontrollerManagedswitch#query_v2c_port}
  */
  readonly queryV2CPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#query_v2c_status SwitchcontrollerManagedswitch#query_v2c_status}
  */
  readonly queryV2CStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#status SwitchcontrollerManagedswitch#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#trap_v1_lport SwitchcontrollerManagedswitch#trap_v1_lport}
  */
  readonly trapV1Lport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#trap_v1_rport SwitchcontrollerManagedswitch#trap_v1_rport}
  */
  readonly trapV1Rport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#trap_v1_status SwitchcontrollerManagedswitch#trap_v1_status}
  */
  readonly trapV1Status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#trap_v2c_lport SwitchcontrollerManagedswitch#trap_v2c_lport}
  */
  readonly trapV2CLport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#trap_v2c_rport SwitchcontrollerManagedswitch#trap_v2c_rport}
  */
  readonly trapV2CRport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#trap_v2c_status SwitchcontrollerManagedswitch#trap_v2c_status}
  */
  readonly trapV2CStatus?: string;
  /**
  * hosts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#hosts SwitchcontrollerManagedswitch#hosts}
  */
  readonly hosts?: SwitchcontrollerManagedswitchSnmpCommunityHosts[] | cdktf.IResolvable;
}

export function switchcontrollerManagedswitchSnmpCommunityToTerraform(struct?: SwitchcontrollerManagedswitchSnmpCommunity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    events: cdktf.stringToTerraform(struct!.events),
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    query_v1_port: cdktf.numberToTerraform(struct!.queryV1Port),
    query_v1_status: cdktf.stringToTerraform(struct!.queryV1Status),
    query_v2c_port: cdktf.numberToTerraform(struct!.queryV2CPort),
    query_v2c_status: cdktf.stringToTerraform(struct!.queryV2CStatus),
    status: cdktf.stringToTerraform(struct!.status),
    trap_v1_lport: cdktf.numberToTerraform(struct!.trapV1Lport),
    trap_v1_rport: cdktf.numberToTerraform(struct!.trapV1Rport),
    trap_v1_status: cdktf.stringToTerraform(struct!.trapV1Status),
    trap_v2c_lport: cdktf.numberToTerraform(struct!.trapV2CLport),
    trap_v2c_rport: cdktf.numberToTerraform(struct!.trapV2CRport),
    trap_v2c_status: cdktf.stringToTerraform(struct!.trapV2CStatus),
    hosts: cdktf.listMapper(switchcontrollerManagedswitchSnmpCommunityHostsToTerraform, true)(struct!.hosts),
  }
}


export function switchcontrollerManagedswitchSnmpCommunityToHclTerraform(struct?: SwitchcontrollerManagedswitchSnmpCommunity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    events: {
      value: cdktf.stringToHclTerraform(struct!.events),
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_v1_port: {
      value: cdktf.numberToHclTerraform(struct!.queryV1Port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_v1_status: {
      value: cdktf.stringToHclTerraform(struct!.queryV1Status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_v2c_port: {
      value: cdktf.numberToHclTerraform(struct!.queryV2CPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_v2c_status: {
      value: cdktf.stringToHclTerraform(struct!.queryV2CStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trap_v1_lport: {
      value: cdktf.numberToHclTerraform(struct!.trapV1Lport),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trap_v1_rport: {
      value: cdktf.numberToHclTerraform(struct!.trapV1Rport),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trap_v1_status: {
      value: cdktf.stringToHclTerraform(struct!.trapV1Status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trap_v2c_lport: {
      value: cdktf.numberToHclTerraform(struct!.trapV2CLport),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trap_v2c_rport: {
      value: cdktf.numberToHclTerraform(struct!.trapV2CRport),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trap_v2c_status: {
      value: cdktf.stringToHclTerraform(struct!.trapV2CStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hosts: {
      value: cdktf.listMapperHcl(switchcontrollerManagedswitchSnmpCommunityHostsToHclTerraform, true)(struct!.hosts),
      isBlock: true,
      type: "list",
      storageClassType: "SwitchcontrollerManagedswitchSnmpCommunityHostsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerManagedswitchSnmpCommunityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerManagedswitchSnmpCommunity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._events !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._queryV1Port !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryV1Port = this._queryV1Port;
    }
    if (this._queryV1Status !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryV1Status = this._queryV1Status;
    }
    if (this._queryV2CPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryV2CPort = this._queryV2CPort;
    }
    if (this._queryV2CStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryV2CStatus = this._queryV2CStatus;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._trapV1Lport !== undefined) {
      hasAnyValues = true;
      internalValueResult.trapV1Lport = this._trapV1Lport;
    }
    if (this._trapV1Rport !== undefined) {
      hasAnyValues = true;
      internalValueResult.trapV1Rport = this._trapV1Rport;
    }
    if (this._trapV1Status !== undefined) {
      hasAnyValues = true;
      internalValueResult.trapV1Status = this._trapV1Status;
    }
    if (this._trapV2CLport !== undefined) {
      hasAnyValues = true;
      internalValueResult.trapV2CLport = this._trapV2CLport;
    }
    if (this._trapV2CRport !== undefined) {
      hasAnyValues = true;
      internalValueResult.trapV2CRport = this._trapV2CRport;
    }
    if (this._trapV2CStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.trapV2CStatus = this._trapV2CStatus;
    }
    if (this._hosts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerManagedswitchSnmpCommunity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._events = undefined;
      this._id = undefined;
      this._name = undefined;
      this._queryV1Port = undefined;
      this._queryV1Status = undefined;
      this._queryV2CPort = undefined;
      this._queryV2CStatus = undefined;
      this._status = undefined;
      this._trapV1Lport = undefined;
      this._trapV1Rport = undefined;
      this._trapV1Status = undefined;
      this._trapV2CLport = undefined;
      this._trapV2CRport = undefined;
      this._trapV2CStatus = undefined;
      this._hosts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._events = value.events;
      this._id = value.id;
      this._name = value.name;
      this._queryV1Port = value.queryV1Port;
      this._queryV1Status = value.queryV1Status;
      this._queryV2CPort = value.queryV2CPort;
      this._queryV2CStatus = value.queryV2CStatus;
      this._status = value.status;
      this._trapV1Lport = value.trapV1Lport;
      this._trapV1Rport = value.trapV1Rport;
      this._trapV1Status = value.trapV1Status;
      this._trapV2CLport = value.trapV2CLport;
      this._trapV2CRport = value.trapV2CRport;
      this._trapV2CStatus = value.trapV2CStatus;
      this._hosts.internalValue = value.hosts;
    }
  }

  // events - computed: true, optional: true, required: false
  private _events?: string; 
  public get events() {
    return this.getStringAttribute('events');
  }
  public set events(value: string) {
    this._events = value;
  }
  public resetEvents() {
    this._events = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }

  // id - computed: false, optional: true, required: false
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

  // query_v1_port - computed: true, optional: true, required: false
  private _queryV1Port?: number; 
  public get queryV1Port() {
    return this.getNumberAttribute('query_v1_port');
  }
  public set queryV1Port(value: number) {
    this._queryV1Port = value;
  }
  public resetQueryV1Port() {
    this._queryV1Port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryV1PortInput() {
    return this._queryV1Port;
  }

  // query_v1_status - computed: true, optional: true, required: false
  private _queryV1Status?: string; 
  public get queryV1Status() {
    return this.getStringAttribute('query_v1_status');
  }
  public set queryV1Status(value: string) {
    this._queryV1Status = value;
  }
  public resetQueryV1Status() {
    this._queryV1Status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryV1StatusInput() {
    return this._queryV1Status;
  }

  // query_v2c_port - computed: true, optional: true, required: false
  private _queryV2CPort?: number; 
  public get queryV2CPort() {
    return this.getNumberAttribute('query_v2c_port');
  }
  public set queryV2CPort(value: number) {
    this._queryV2CPort = value;
  }
  public resetQueryV2CPort() {
    this._queryV2CPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryV2CPortInput() {
    return this._queryV2CPort;
  }

  // query_v2c_status - computed: true, optional: true, required: false
  private _queryV2CStatus?: string; 
  public get queryV2CStatus() {
    return this.getStringAttribute('query_v2c_status');
  }
  public set queryV2CStatus(value: string) {
    this._queryV2CStatus = value;
  }
  public resetQueryV2CStatus() {
    this._queryV2CStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryV2CStatusInput() {
    return this._queryV2CStatus;
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

  // trap_v1_lport - computed: true, optional: true, required: false
  private _trapV1Lport?: number; 
  public get trapV1Lport() {
    return this.getNumberAttribute('trap_v1_lport');
  }
  public set trapV1Lport(value: number) {
    this._trapV1Lport = value;
  }
  public resetTrapV1Lport() {
    this._trapV1Lport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapV1LportInput() {
    return this._trapV1Lport;
  }

  // trap_v1_rport - computed: true, optional: true, required: false
  private _trapV1Rport?: number; 
  public get trapV1Rport() {
    return this.getNumberAttribute('trap_v1_rport');
  }
  public set trapV1Rport(value: number) {
    this._trapV1Rport = value;
  }
  public resetTrapV1Rport() {
    this._trapV1Rport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapV1RportInput() {
    return this._trapV1Rport;
  }

  // trap_v1_status - computed: true, optional: true, required: false
  private _trapV1Status?: string; 
  public get trapV1Status() {
    return this.getStringAttribute('trap_v1_status');
  }
  public set trapV1Status(value: string) {
    this._trapV1Status = value;
  }
  public resetTrapV1Status() {
    this._trapV1Status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapV1StatusInput() {
    return this._trapV1Status;
  }

  // trap_v2c_lport - computed: true, optional: true, required: false
  private _trapV2CLport?: number; 
  public get trapV2CLport() {
    return this.getNumberAttribute('trap_v2c_lport');
  }
  public set trapV2CLport(value: number) {
    this._trapV2CLport = value;
  }
  public resetTrapV2CLport() {
    this._trapV2CLport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapV2CLportInput() {
    return this._trapV2CLport;
  }

  // trap_v2c_rport - computed: true, optional: true, required: false
  private _trapV2CRport?: number; 
  public get trapV2CRport() {
    return this.getNumberAttribute('trap_v2c_rport');
  }
  public set trapV2CRport(value: number) {
    this._trapV2CRport = value;
  }
  public resetTrapV2CRport() {
    this._trapV2CRport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapV2CRportInput() {
    return this._trapV2CRport;
  }

  // trap_v2c_status - computed: true, optional: true, required: false
  private _trapV2CStatus?: string; 
  public get trapV2CStatus() {
    return this.getStringAttribute('trap_v2c_status');
  }
  public set trapV2CStatus(value: string) {
    this._trapV2CStatus = value;
  }
  public resetTrapV2CStatus() {
    this._trapV2CStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapV2CStatusInput() {
    return this._trapV2CStatus;
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts = new SwitchcontrollerManagedswitchSnmpCommunityHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }
  public putHosts(value: SwitchcontrollerManagedswitchSnmpCommunityHosts[] | cdktf.IResolvable) {
    this._hosts.internalValue = value;
  }
  public resetHosts() {
    this._hosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts.internalValue;
  }
}

export class SwitchcontrollerManagedswitchSnmpCommunityList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerManagedswitchSnmpCommunity[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerManagedswitchSnmpCommunityOutputReference {
    return new SwitchcontrollerManagedswitchSnmpCommunityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchcontrollerManagedswitchSnmpSysinfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#contact_info SwitchcontrollerManagedswitch#contact_info}
  */
  readonly contactInfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#description SwitchcontrollerManagedswitch#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#engine_id SwitchcontrollerManagedswitch#engine_id}
  */
  readonly engineId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#location SwitchcontrollerManagedswitch#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#status SwitchcontrollerManagedswitch#status}
  */
  readonly status?: string;
}

export function switchcontrollerManagedswitchSnmpSysinfoToTerraform(struct?: SwitchcontrollerManagedswitchSnmpSysinfoOutputReference | SwitchcontrollerManagedswitchSnmpSysinfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contact_info: cdktf.stringToTerraform(struct!.contactInfo),
    description: cdktf.stringToTerraform(struct!.description),
    engine_id: cdktf.stringToTerraform(struct!.engineId),
    location: cdktf.stringToTerraform(struct!.location),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function switchcontrollerManagedswitchSnmpSysinfoToHclTerraform(struct?: SwitchcontrollerManagedswitchSnmpSysinfoOutputReference | SwitchcontrollerManagedswitchSnmpSysinfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contact_info: {
      value: cdktf.stringToHclTerraform(struct!.contactInfo),
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
    engine_id: {
      value: cdktf.stringToHclTerraform(struct!.engineId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerManagedswitchSnmpSysinfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwitchcontrollerManagedswitchSnmpSysinfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contactInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactInfo = this._contactInfo;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._engineId !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineId = this._engineId;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerManagedswitchSnmpSysinfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contactInfo = undefined;
      this._description = undefined;
      this._engineId = undefined;
      this._location = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contactInfo = value.contactInfo;
      this._description = value.description;
      this._engineId = value.engineId;
      this._location = value.location;
      this._status = value.status;
    }
  }

  // contact_info - computed: false, optional: true, required: false
  private _contactInfo?: string; 
  public get contactInfo() {
    return this.getStringAttribute('contact_info');
  }
  public set contactInfo(value: string) {
    this._contactInfo = value;
  }
  public resetContactInfo() {
    this._contactInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactInfoInput() {
    return this._contactInfo;
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

  // engine_id - computed: false, optional: true, required: false
  private _engineId?: string; 
  public get engineId() {
    return this.getStringAttribute('engine_id');
  }
  public set engineId(value: string) {
    this._engineId = value;
  }
  public resetEngineId() {
    this._engineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineIdInput() {
    return this._engineId;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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
}
export interface SwitchcontrollerManagedswitchSnmpTrapThreshold {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#trap_high_cpu_threshold SwitchcontrollerManagedswitch#trap_high_cpu_threshold}
  */
  readonly trapHighCpuThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#trap_log_full_threshold SwitchcontrollerManagedswitch#trap_log_full_threshold}
  */
  readonly trapLogFullThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#trap_low_memory_threshold SwitchcontrollerManagedswitch#trap_low_memory_threshold}
  */
  readonly trapLowMemoryThreshold?: number;
}

export function switchcontrollerManagedswitchSnmpTrapThresholdToTerraform(struct?: SwitchcontrollerManagedswitchSnmpTrapThresholdOutputReference | SwitchcontrollerManagedswitchSnmpTrapThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trap_high_cpu_threshold: cdktf.numberToTerraform(struct!.trapHighCpuThreshold),
    trap_log_full_threshold: cdktf.numberToTerraform(struct!.trapLogFullThreshold),
    trap_low_memory_threshold: cdktf.numberToTerraform(struct!.trapLowMemoryThreshold),
  }
}


export function switchcontrollerManagedswitchSnmpTrapThresholdToHclTerraform(struct?: SwitchcontrollerManagedswitchSnmpTrapThresholdOutputReference | SwitchcontrollerManagedswitchSnmpTrapThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    trap_high_cpu_threshold: {
      value: cdktf.numberToHclTerraform(struct!.trapHighCpuThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trap_log_full_threshold: {
      value: cdktf.numberToHclTerraform(struct!.trapLogFullThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trap_low_memory_threshold: {
      value: cdktf.numberToHclTerraform(struct!.trapLowMemoryThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerManagedswitchSnmpTrapThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwitchcontrollerManagedswitchSnmpTrapThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trapHighCpuThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.trapHighCpuThreshold = this._trapHighCpuThreshold;
    }
    if (this._trapLogFullThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.trapLogFullThreshold = this._trapLogFullThreshold;
    }
    if (this._trapLowMemoryThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.trapLowMemoryThreshold = this._trapLowMemoryThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerManagedswitchSnmpTrapThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._trapHighCpuThreshold = undefined;
      this._trapLogFullThreshold = undefined;
      this._trapLowMemoryThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._trapHighCpuThreshold = value.trapHighCpuThreshold;
      this._trapLogFullThreshold = value.trapLogFullThreshold;
      this._trapLowMemoryThreshold = value.trapLowMemoryThreshold;
    }
  }

  // trap_high_cpu_threshold - computed: true, optional: true, required: false
  private _trapHighCpuThreshold?: number; 
  public get trapHighCpuThreshold() {
    return this.getNumberAttribute('trap_high_cpu_threshold');
  }
  public set trapHighCpuThreshold(value: number) {
    this._trapHighCpuThreshold = value;
  }
  public resetTrapHighCpuThreshold() {
    this._trapHighCpuThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapHighCpuThresholdInput() {
    return this._trapHighCpuThreshold;
  }

  // trap_log_full_threshold - computed: true, optional: true, required: false
  private _trapLogFullThreshold?: number; 
  public get trapLogFullThreshold() {
    return this.getNumberAttribute('trap_log_full_threshold');
  }
  public set trapLogFullThreshold(value: number) {
    this._trapLogFullThreshold = value;
  }
  public resetTrapLogFullThreshold() {
    this._trapLogFullThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapLogFullThresholdInput() {
    return this._trapLogFullThreshold;
  }

  // trap_low_memory_threshold - computed: true, optional: true, required: false
  private _trapLowMemoryThreshold?: number; 
  public get trapLowMemoryThreshold() {
    return this.getNumberAttribute('trap_low_memory_threshold');
  }
  public set trapLowMemoryThreshold(value: number) {
    this._trapLowMemoryThreshold = value;
  }
  public resetTrapLowMemoryThreshold() {
    this._trapLowMemoryThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapLowMemoryThresholdInput() {
    return this._trapLowMemoryThreshold;
  }
}
export interface SwitchcontrollerManagedswitchSnmpUser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#auth_proto SwitchcontrollerManagedswitch#auth_proto}
  */
  readonly authProto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#auth_pwd SwitchcontrollerManagedswitch#auth_pwd}
  */
  readonly authPwd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#name SwitchcontrollerManagedswitch#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#priv_proto SwitchcontrollerManagedswitch#priv_proto}
  */
  readonly privProto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#priv_pwd SwitchcontrollerManagedswitch#priv_pwd}
  */
  readonly privPwd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#queries SwitchcontrollerManagedswitch#queries}
  */
  readonly queries?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#query_port SwitchcontrollerManagedswitch#query_port}
  */
  readonly queryPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#security_level SwitchcontrollerManagedswitch#security_level}
  */
  readonly securityLevel?: string;
}

export function switchcontrollerManagedswitchSnmpUserToTerraform(struct?: SwitchcontrollerManagedswitchSnmpUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_proto: cdktf.stringToTerraform(struct!.authProto),
    auth_pwd: cdktf.stringToTerraform(struct!.authPwd),
    name: cdktf.stringToTerraform(struct!.name),
    priv_proto: cdktf.stringToTerraform(struct!.privProto),
    priv_pwd: cdktf.stringToTerraform(struct!.privPwd),
    queries: cdktf.stringToTerraform(struct!.queries),
    query_port: cdktf.numberToTerraform(struct!.queryPort),
    security_level: cdktf.stringToTerraform(struct!.securityLevel),
  }
}


export function switchcontrollerManagedswitchSnmpUserToHclTerraform(struct?: SwitchcontrollerManagedswitchSnmpUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_proto: {
      value: cdktf.stringToHclTerraform(struct!.authProto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_pwd: {
      value: cdktf.stringToHclTerraform(struct!.authPwd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priv_proto: {
      value: cdktf.stringToHclTerraform(struct!.privProto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priv_pwd: {
      value: cdktf.stringToHclTerraform(struct!.privPwd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queries: {
      value: cdktf.stringToHclTerraform(struct!.queries),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_port: {
      value: cdktf.numberToHclTerraform(struct!.queryPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    security_level: {
      value: cdktf.stringToHclTerraform(struct!.securityLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerManagedswitchSnmpUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerManagedswitchSnmpUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authProto !== undefined) {
      hasAnyValues = true;
      internalValueResult.authProto = this._authProto;
    }
    if (this._authPwd !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPwd = this._authPwd;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._privProto !== undefined) {
      hasAnyValues = true;
      internalValueResult.privProto = this._privProto;
    }
    if (this._privPwd !== undefined) {
      hasAnyValues = true;
      internalValueResult.privPwd = this._privPwd;
    }
    if (this._queries !== undefined) {
      hasAnyValues = true;
      internalValueResult.queries = this._queries;
    }
    if (this._queryPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryPort = this._queryPort;
    }
    if (this._securityLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityLevel = this._securityLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerManagedswitchSnmpUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authProto = undefined;
      this._authPwd = undefined;
      this._name = undefined;
      this._privProto = undefined;
      this._privPwd = undefined;
      this._queries = undefined;
      this._queryPort = undefined;
      this._securityLevel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authProto = value.authProto;
      this._authPwd = value.authPwd;
      this._name = value.name;
      this._privProto = value.privProto;
      this._privPwd = value.privPwd;
      this._queries = value.queries;
      this._queryPort = value.queryPort;
      this._securityLevel = value.securityLevel;
    }
  }

  // auth_proto - computed: true, optional: true, required: false
  private _authProto?: string; 
  public get authProto() {
    return this.getStringAttribute('auth_proto');
  }
  public set authProto(value: string) {
    this._authProto = value;
  }
  public resetAuthProto() {
    this._authProto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authProtoInput() {
    return this._authProto;
  }

  // auth_pwd - computed: false, optional: true, required: false
  private _authPwd?: string; 
  public get authPwd() {
    return this.getStringAttribute('auth_pwd');
  }
  public set authPwd(value: string) {
    this._authPwd = value;
  }
  public resetAuthPwd() {
    this._authPwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPwdInput() {
    return this._authPwd;
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

  // priv_proto - computed: true, optional: true, required: false
  private _privProto?: string; 
  public get privProto() {
    return this.getStringAttribute('priv_proto');
  }
  public set privProto(value: string) {
    this._privProto = value;
  }
  public resetPrivProto() {
    this._privProto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privProtoInput() {
    return this._privProto;
  }

  // priv_pwd - computed: false, optional: true, required: false
  private _privPwd?: string; 
  public get privPwd() {
    return this.getStringAttribute('priv_pwd');
  }
  public set privPwd(value: string) {
    this._privPwd = value;
  }
  public resetPrivPwd() {
    this._privPwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privPwdInput() {
    return this._privPwd;
  }

  // queries - computed: true, optional: true, required: false
  private _queries?: string; 
  public get queries() {
    return this.getStringAttribute('queries');
  }
  public set queries(value: string) {
    this._queries = value;
  }
  public resetQueries() {
    this._queries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queriesInput() {
    return this._queries;
  }

  // query_port - computed: true, optional: true, required: false
  private _queryPort?: number; 
  public get queryPort() {
    return this.getNumberAttribute('query_port');
  }
  public set queryPort(value: number) {
    this._queryPort = value;
  }
  public resetQueryPort() {
    this._queryPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryPortInput() {
    return this._queryPort;
  }

  // security_level - computed: true, optional: true, required: false
  private _securityLevel?: string; 
  public get securityLevel() {
    return this.getStringAttribute('security_level');
  }
  public set securityLevel(value: string) {
    this._securityLevel = value;
  }
  public resetSecurityLevel() {
    this._securityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityLevelInput() {
    return this._securityLevel;
  }
}

export class SwitchcontrollerManagedswitchSnmpUserList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerManagedswitchSnmpUser[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerManagedswitchSnmpUserOutputReference {
    return new SwitchcontrollerManagedswitchSnmpUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchcontrollerManagedswitchStaticMac {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#description SwitchcontrollerManagedswitch#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#id SwitchcontrollerManagedswitch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#interface SwitchcontrollerManagedswitch#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#mac SwitchcontrollerManagedswitch#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#type SwitchcontrollerManagedswitch#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#vlan SwitchcontrollerManagedswitch#vlan}
  */
  readonly vlan?: string;
}

export function switchcontrollerManagedswitchStaticMacToTerraform(struct?: SwitchcontrollerManagedswitchStaticMac | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.numberToTerraform(struct!.id),
    interface: cdktf.stringToTerraform(struct!.interface),
    mac: cdktf.stringToTerraform(struct!.mac),
    type: cdktf.stringToTerraform(struct!.type),
    vlan: cdktf.stringToTerraform(struct!.vlan),
  }
}


export function switchcontrollerManagedswitchStaticMacToHclTerraform(struct?: SwitchcontrollerManagedswitchStaticMac | cdktf.IResolvable): any {
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
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan: {
      value: cdktf.stringToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerManagedswitchStaticMacOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerManagedswitchStaticMac | cdktf.IResolvable | undefined {
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
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerManagedswitchStaticMac | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._id = undefined;
      this._interface = undefined;
      this._mac = undefined;
      this._type = undefined;
      this._vlan = undefined;
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
      this._interface = value.interface;
      this._mac = value.mac;
      this._type = value.type;
      this._vlan = value.vlan;
    }
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

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // mac - computed: true, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
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
}

export class SwitchcontrollerManagedswitchStaticMacList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerManagedswitchStaticMac[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerManagedswitchStaticMacOutputReference {
    return new SwitchcontrollerManagedswitchStaticMacOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchcontrollerManagedswitchStormControl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#broadcast SwitchcontrollerManagedswitch#broadcast}
  */
  readonly broadcast?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#burst_size_level SwitchcontrollerManagedswitch#burst_size_level}
  */
  readonly burstSizeLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#local_override SwitchcontrollerManagedswitch#local_override}
  */
  readonly localOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#rate SwitchcontrollerManagedswitch#rate}
  */
  readonly rate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#unknown_multicast SwitchcontrollerManagedswitch#unknown_multicast}
  */
  readonly unknownMulticast?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#unknown_unicast SwitchcontrollerManagedswitch#unknown_unicast}
  */
  readonly unknownUnicast?: string;
}

export function switchcontrollerManagedswitchStormControlToTerraform(struct?: SwitchcontrollerManagedswitchStormControlOutputReference | SwitchcontrollerManagedswitchStormControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    broadcast: cdktf.stringToTerraform(struct!.broadcast),
    burst_size_level: cdktf.numberToTerraform(struct!.burstSizeLevel),
    local_override: cdktf.stringToTerraform(struct!.localOverride),
    rate: cdktf.numberToTerraform(struct!.rate),
    unknown_multicast: cdktf.stringToTerraform(struct!.unknownMulticast),
    unknown_unicast: cdktf.stringToTerraform(struct!.unknownUnicast),
  }
}


export function switchcontrollerManagedswitchStormControlToHclTerraform(struct?: SwitchcontrollerManagedswitchStormControlOutputReference | SwitchcontrollerManagedswitchStormControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    broadcast: {
      value: cdktf.stringToHclTerraform(struct!.broadcast),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    burst_size_level: {
      value: cdktf.numberToHclTerraform(struct!.burstSizeLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_override: {
      value: cdktf.stringToHclTerraform(struct!.localOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate: {
      value: cdktf.numberToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknown_multicast: {
      value: cdktf.stringToHclTerraform(struct!.unknownMulticast),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknown_unicast: {
      value: cdktf.stringToHclTerraform(struct!.unknownUnicast),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerManagedswitchStormControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwitchcontrollerManagedswitchStormControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._broadcast !== undefined) {
      hasAnyValues = true;
      internalValueResult.broadcast = this._broadcast;
    }
    if (this._burstSizeLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstSizeLevel = this._burstSizeLevel;
    }
    if (this._localOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.localOverride = this._localOverride;
    }
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    if (this._unknownMulticast !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownMulticast = this._unknownMulticast;
    }
    if (this._unknownUnicast !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownUnicast = this._unknownUnicast;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerManagedswitchStormControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._broadcast = undefined;
      this._burstSizeLevel = undefined;
      this._localOverride = undefined;
      this._rate = undefined;
      this._unknownMulticast = undefined;
      this._unknownUnicast = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._broadcast = value.broadcast;
      this._burstSizeLevel = value.burstSizeLevel;
      this._localOverride = value.localOverride;
      this._rate = value.rate;
      this._unknownMulticast = value.unknownMulticast;
      this._unknownUnicast = value.unknownUnicast;
    }
  }

  // broadcast - computed: true, optional: true, required: false
  private _broadcast?: string; 
  public get broadcast() {
    return this.getStringAttribute('broadcast');
  }
  public set broadcast(value: string) {
    this._broadcast = value;
  }
  public resetBroadcast() {
    this._broadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastInput() {
    return this._broadcast;
  }

  // burst_size_level - computed: false, optional: true, required: false
  private _burstSizeLevel?: number; 
  public get burstSizeLevel() {
    return this.getNumberAttribute('burst_size_level');
  }
  public set burstSizeLevel(value: number) {
    this._burstSizeLevel = value;
  }
  public resetBurstSizeLevel() {
    this._burstSizeLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstSizeLevelInput() {
    return this._burstSizeLevel;
  }

  // local_override - computed: true, optional: true, required: false
  private _localOverride?: string; 
  public get localOverride() {
    return this.getStringAttribute('local_override');
  }
  public set localOverride(value: string) {
    this._localOverride = value;
  }
  public resetLocalOverride() {
    this._localOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localOverrideInput() {
    return this._localOverride;
  }

  // rate - computed: true, optional: true, required: false
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

  // unknown_multicast - computed: true, optional: true, required: false
  private _unknownMulticast?: string; 
  public get unknownMulticast() {
    return this.getStringAttribute('unknown_multicast');
  }
  public set unknownMulticast(value: string) {
    this._unknownMulticast = value;
  }
  public resetUnknownMulticast() {
    this._unknownMulticast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownMulticastInput() {
    return this._unknownMulticast;
  }

  // unknown_unicast - computed: true, optional: true, required: false
  private _unknownUnicast?: string; 
  public get unknownUnicast() {
    return this.getStringAttribute('unknown_unicast');
  }
  public set unknownUnicast(value: string) {
    this._unknownUnicast = value;
  }
  public resetUnknownUnicast() {
    this._unknownUnicast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownUnicastInput() {
    return this._unknownUnicast;
  }
}
export interface SwitchcontrollerManagedswitchStpInstance {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#id SwitchcontrollerManagedswitch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#priority SwitchcontrollerManagedswitch#priority}
  */
  readonly priority?: string;
}

export function switchcontrollerManagedswitchStpInstanceToTerraform(struct?: SwitchcontrollerManagedswitchStpInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    priority: cdktf.stringToTerraform(struct!.priority),
  }
}


export function switchcontrollerManagedswitchStpInstanceToHclTerraform(struct?: SwitchcontrollerManagedswitchStpInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerManagedswitchStpInstanceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerManagedswitchStpInstance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerManagedswitchStpInstance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._priority = value.priority;
    }
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
}

export class SwitchcontrollerManagedswitchStpInstanceList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerManagedswitchStpInstance[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerManagedswitchStpInstanceOutputReference {
    return new SwitchcontrollerManagedswitchStpInstanceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchcontrollerManagedswitchStpSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#forward_time SwitchcontrollerManagedswitch#forward_time}
  */
  readonly forwardTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#hello_time SwitchcontrollerManagedswitch#hello_time}
  */
  readonly helloTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#local_override SwitchcontrollerManagedswitch#local_override}
  */
  readonly localOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#max_age SwitchcontrollerManagedswitch#max_age}
  */
  readonly maxAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#max_hops SwitchcontrollerManagedswitch#max_hops}
  */
  readonly maxHops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#name SwitchcontrollerManagedswitch#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#pending_timer SwitchcontrollerManagedswitch#pending_timer}
  */
  readonly pendingTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#revision SwitchcontrollerManagedswitch#revision}
  */
  readonly revision?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#status SwitchcontrollerManagedswitch#status}
  */
  readonly status?: string;
}

export function switchcontrollerManagedswitchStpSettingsToTerraform(struct?: SwitchcontrollerManagedswitchStpSettingsOutputReference | SwitchcontrollerManagedswitchStpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forward_time: cdktf.numberToTerraform(struct!.forwardTime),
    hello_time: cdktf.numberToTerraform(struct!.helloTime),
    local_override: cdktf.stringToTerraform(struct!.localOverride),
    max_age: cdktf.numberToTerraform(struct!.maxAge),
    max_hops: cdktf.numberToTerraform(struct!.maxHops),
    name: cdktf.stringToTerraform(struct!.name),
    pending_timer: cdktf.numberToTerraform(struct!.pendingTimer),
    revision: cdktf.numberToTerraform(struct!.revision),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function switchcontrollerManagedswitchStpSettingsToHclTerraform(struct?: SwitchcontrollerManagedswitchStpSettingsOutputReference | SwitchcontrollerManagedswitchStpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forward_time: {
      value: cdktf.numberToHclTerraform(struct!.forwardTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hello_time: {
      value: cdktf.numberToHclTerraform(struct!.helloTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_override: {
      value: cdktf.stringToHclTerraform(struct!.localOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_age: {
      value: cdktf.numberToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_hops: {
      value: cdktf.numberToHclTerraform(struct!.maxHops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pending_timer: {
      value: cdktf.numberToHclTerraform(struct!.pendingTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    revision: {
      value: cdktf.numberToHclTerraform(struct!.revision),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerManagedswitchStpSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwitchcontrollerManagedswitchStpSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardTime = this._forwardTime;
    }
    if (this._helloTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloTime = this._helloTime;
    }
    if (this._localOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.localOverride = this._localOverride;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    if (this._maxHops !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHops = this._maxHops;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pendingTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.pendingTimer = this._pendingTimer;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerManagedswitchStpSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forwardTime = undefined;
      this._helloTime = undefined;
      this._localOverride = undefined;
      this._maxAge = undefined;
      this._maxHops = undefined;
      this._name = undefined;
      this._pendingTimer = undefined;
      this._revision = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forwardTime = value.forwardTime;
      this._helloTime = value.helloTime;
      this._localOverride = value.localOverride;
      this._maxAge = value.maxAge;
      this._maxHops = value.maxHops;
      this._name = value.name;
      this._pendingTimer = value.pendingTimer;
      this._revision = value.revision;
      this._status = value.status;
    }
  }

  // forward_time - computed: true, optional: true, required: false
  private _forwardTime?: number; 
  public get forwardTime() {
    return this.getNumberAttribute('forward_time');
  }
  public set forwardTime(value: number) {
    this._forwardTime = value;
  }
  public resetForwardTime() {
    this._forwardTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardTimeInput() {
    return this._forwardTime;
  }

  // hello_time - computed: true, optional: true, required: false
  private _helloTime?: number; 
  public get helloTime() {
    return this.getNumberAttribute('hello_time');
  }
  public set helloTime(value: number) {
    this._helloTime = value;
  }
  public resetHelloTime() {
    this._helloTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloTimeInput() {
    return this._helloTime;
  }

  // local_override - computed: true, optional: true, required: false
  private _localOverride?: string; 
  public get localOverride() {
    return this.getStringAttribute('local_override');
  }
  public set localOverride(value: string) {
    this._localOverride = value;
  }
  public resetLocalOverride() {
    this._localOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localOverrideInput() {
    return this._localOverride;
  }

  // max_age - computed: true, optional: true, required: false
  private _maxAge?: number; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }

  // max_hops - computed: true, optional: true, required: false
  private _maxHops?: number; 
  public get maxHops() {
    return this.getNumberAttribute('max_hops');
  }
  public set maxHops(value: number) {
    this._maxHops = value;
  }
  public resetMaxHops() {
    this._maxHops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHopsInput() {
    return this._maxHops;
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

  // pending_timer - computed: true, optional: true, required: false
  private _pendingTimer?: number; 
  public get pendingTimer() {
    return this.getNumberAttribute('pending_timer');
  }
  public set pendingTimer(value: number) {
    this._pendingTimer = value;
  }
  public resetPendingTimer() {
    this._pendingTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pendingTimerInput() {
    return this._pendingTimer;
  }

  // revision - computed: false, optional: true, required: false
  private _revision?: number; 
  public get revision() {
    return this.getNumberAttribute('revision');
  }
  public set revision(value: number) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }

  // status - computed: false, optional: true, required: false
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
}
export interface SwitchcontrollerManagedswitchSwitchLog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#local_override SwitchcontrollerManagedswitch#local_override}
  */
  readonly localOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#severity SwitchcontrollerManagedswitch#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#status SwitchcontrollerManagedswitch#status}
  */
  readonly status?: string;
}

export function switchcontrollerManagedswitchSwitchLogToTerraform(struct?: SwitchcontrollerManagedswitchSwitchLogOutputReference | SwitchcontrollerManagedswitchSwitchLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_override: cdktf.stringToTerraform(struct!.localOverride),
    severity: cdktf.stringToTerraform(struct!.severity),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function switchcontrollerManagedswitchSwitchLogToHclTerraform(struct?: SwitchcontrollerManagedswitchSwitchLogOutputReference | SwitchcontrollerManagedswitchSwitchLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_override: {
      value: cdktf.stringToHclTerraform(struct!.localOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerManagedswitchSwitchLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwitchcontrollerManagedswitchSwitchLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.localOverride = this._localOverride;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerManagedswitchSwitchLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localOverride = undefined;
      this._severity = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localOverride = value.localOverride;
      this._severity = value.severity;
      this._status = value.status;
    }
  }

  // local_override - computed: true, optional: true, required: false
  private _localOverride?: string; 
  public get localOverride() {
    return this.getStringAttribute('local_override');
  }
  public set localOverride(value: string) {
    this._localOverride = value;
  }
  public resetLocalOverride() {
    this._localOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localOverrideInput() {
    return this._localOverride;
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
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
}
export interface SwitchcontrollerManagedswitchSwitchStpSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#status SwitchcontrollerManagedswitch#status}
  */
  readonly status?: string;
}

export function switchcontrollerManagedswitchSwitchStpSettingsToTerraform(struct?: SwitchcontrollerManagedswitchSwitchStpSettingsOutputReference | SwitchcontrollerManagedswitchSwitchStpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function switchcontrollerManagedswitchSwitchStpSettingsToHclTerraform(struct?: SwitchcontrollerManagedswitchSwitchStpSettingsOutputReference | SwitchcontrollerManagedswitchSwitchStpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerManagedswitchSwitchStpSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwitchcontrollerManagedswitchSwitchStpSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerManagedswitchSwitchStpSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._status = value.status;
    }
  }

  // status - computed: false, optional: true, required: false
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
}
export interface SwitchcontrollerManagedswitchSystemDhcpServerIpRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#end_ip SwitchcontrollerManagedswitch#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#id SwitchcontrollerManagedswitch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#start_ip SwitchcontrollerManagedswitch#start_ip}
  */
  readonly startIp?: string;
}

export function switchcontrollerManagedswitchSystemDhcpServerIpRangeToTerraform(struct?: SwitchcontrollerManagedswitchSystemDhcpServerIpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_ip: cdktf.stringToTerraform(struct!.endIp),
    id: cdktf.numberToTerraform(struct!.id),
    start_ip: cdktf.stringToTerraform(struct!.startIp),
  }
}


export function switchcontrollerManagedswitchSystemDhcpServerIpRangeToHclTerraform(struct?: SwitchcontrollerManagedswitchSystemDhcpServerIpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_ip: {
      value: cdktf.stringToHclTerraform(struct!.endIp),
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
    start_ip: {
      value: cdktf.stringToHclTerraform(struct!.startIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerManagedswitchSystemDhcpServerIpRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerManagedswitchSystemDhcpServerIpRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIp = this._endIp;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._startIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIp = this._startIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerManagedswitchSystemDhcpServerIpRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIp = undefined;
      this._id = undefined;
      this._startIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIp = value.endIp;
      this._id = value.id;
      this._startIp = value.startIp;
    }
  }

  // end_ip - computed: true, optional: true, required: false
  private _endIp?: string; 
  public get endIp() {
    return this.getStringAttribute('end_ip');
  }
  public set endIp(value: string) {
    this._endIp = value;
  }
  public resetEndIp() {
    this._endIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIpInput() {
    return this._endIp;
  }

  // id - computed: false, optional: true, required: false
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

  // start_ip - computed: true, optional: true, required: false
  private _startIp?: string; 
  public get startIp() {
    return this.getStringAttribute('start_ip');
  }
  public set startIp(value: string) {
    this._startIp = value;
  }
  public resetStartIp() {
    this._startIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIpInput() {
    return this._startIp;
  }
}

export class SwitchcontrollerManagedswitchSystemDhcpServerIpRangeList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerManagedswitchSystemDhcpServerIpRange[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerManagedswitchSystemDhcpServerIpRangeOutputReference {
    return new SwitchcontrollerManagedswitchSystemDhcpServerIpRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchcontrollerManagedswitchSystemDhcpServerOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#code SwitchcontrollerManagedswitch#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#id SwitchcontrollerManagedswitch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#ip SwitchcontrollerManagedswitch#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#type SwitchcontrollerManagedswitch#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#value SwitchcontrollerManagedswitch#value}
  */
  readonly value?: string;
}

export function switchcontrollerManagedswitchSystemDhcpServerOptionsToTerraform(struct?: SwitchcontrollerManagedswitchSystemDhcpServerOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    id: cdktf.numberToTerraform(struct!.id),
    ip: cdktf.stringToTerraform(struct!.ip),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function switchcontrollerManagedswitchSystemDhcpServerOptionsToHclTerraform(struct?: SwitchcontrollerManagedswitchSystemDhcpServerOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerManagedswitchSystemDhcpServerOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerManagedswitchSystemDhcpServerOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerManagedswitchSystemDhcpServerOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._id = undefined;
      this._ip = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._id = value.id;
      this._ip = value.ip;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // id - computed: false, optional: true, required: false
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

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
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

export class SwitchcontrollerManagedswitchSystemDhcpServerOptionsList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerManagedswitchSystemDhcpServerOptions[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerManagedswitchSystemDhcpServerOptionsOutputReference {
    return new SwitchcontrollerManagedswitchSystemDhcpServerOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchcontrollerManagedswitchSystemDhcpServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#default_gateway SwitchcontrollerManagedswitch#default_gateway}
  */
  readonly defaultGateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#dns_server1 SwitchcontrollerManagedswitch#dns_server1}
  */
  readonly dnsServer1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#dns_server2 SwitchcontrollerManagedswitch#dns_server2}
  */
  readonly dnsServer2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#dns_server3 SwitchcontrollerManagedswitch#dns_server3}
  */
  readonly dnsServer3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#dns_service SwitchcontrollerManagedswitch#dns_service}
  */
  readonly dnsService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#id SwitchcontrollerManagedswitch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#interface SwitchcontrollerManagedswitch#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#lease_time SwitchcontrollerManagedswitch#lease_time}
  */
  readonly leaseTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#netmask SwitchcontrollerManagedswitch#netmask}
  */
  readonly netmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#ntp_server1 SwitchcontrollerManagedswitch#ntp_server1}
  */
  readonly ntpServer1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#ntp_server2 SwitchcontrollerManagedswitch#ntp_server2}
  */
  readonly ntpServer2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#ntp_server3 SwitchcontrollerManagedswitch#ntp_server3}
  */
  readonly ntpServer3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#ntp_service SwitchcontrollerManagedswitch#ntp_service}
  */
  readonly ntpService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#status SwitchcontrollerManagedswitch#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#switch_id SwitchcontrollerManagedswitch#switch_id}
  */
  readonly switchId?: string;
  /**
  * ip_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#ip_range SwitchcontrollerManagedswitch#ip_range}
  */
  readonly ipRange?: SwitchcontrollerManagedswitchSystemDhcpServerIpRange[] | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#options SwitchcontrollerManagedswitch#options}
  */
  readonly options?: SwitchcontrollerManagedswitchSystemDhcpServerOptions[] | cdktf.IResolvable;
}

export function switchcontrollerManagedswitchSystemDhcpServerToTerraform(struct?: SwitchcontrollerManagedswitchSystemDhcpServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gateway: cdktf.stringToTerraform(struct!.defaultGateway),
    dns_server1: cdktf.stringToTerraform(struct!.dnsServer1),
    dns_server2: cdktf.stringToTerraform(struct!.dnsServer2),
    dns_server3: cdktf.stringToTerraform(struct!.dnsServer3),
    dns_service: cdktf.stringToTerraform(struct!.dnsService),
    id: cdktf.numberToTerraform(struct!.id),
    interface: cdktf.stringToTerraform(struct!.interface),
    lease_time: cdktf.numberToTerraform(struct!.leaseTime),
    netmask: cdktf.stringToTerraform(struct!.netmask),
    ntp_server1: cdktf.stringToTerraform(struct!.ntpServer1),
    ntp_server2: cdktf.stringToTerraform(struct!.ntpServer2),
    ntp_server3: cdktf.stringToTerraform(struct!.ntpServer3),
    ntp_service: cdktf.stringToTerraform(struct!.ntpService),
    status: cdktf.stringToTerraform(struct!.status),
    switch_id: cdktf.stringToTerraform(struct!.switchId),
    ip_range: cdktf.listMapper(switchcontrollerManagedswitchSystemDhcpServerIpRangeToTerraform, true)(struct!.ipRange),
    options: cdktf.listMapper(switchcontrollerManagedswitchSystemDhcpServerOptionsToTerraform, true)(struct!.options),
  }
}


export function switchcontrollerManagedswitchSystemDhcpServerToHclTerraform(struct?: SwitchcontrollerManagedswitchSystemDhcpServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gateway: {
      value: cdktf.stringToHclTerraform(struct!.defaultGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server1: {
      value: cdktf.stringToHclTerraform(struct!.dnsServer1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server2: {
      value: cdktf.stringToHclTerraform(struct!.dnsServer2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server3: {
      value: cdktf.stringToHclTerraform(struct!.dnsServer3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_service: {
      value: cdktf.stringToHclTerraform(struct!.dnsService),
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
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lease_time: {
      value: cdktf.numberToHclTerraform(struct!.leaseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    netmask: {
      value: cdktf.stringToHclTerraform(struct!.netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ntp_server1: {
      value: cdktf.stringToHclTerraform(struct!.ntpServer1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ntp_server2: {
      value: cdktf.stringToHclTerraform(struct!.ntpServer2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ntp_server3: {
      value: cdktf.stringToHclTerraform(struct!.ntpServer3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ntp_service: {
      value: cdktf.stringToHclTerraform(struct!.ntpService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_id: {
      value: cdktf.stringToHclTerraform(struct!.switchId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_range: {
      value: cdktf.listMapperHcl(switchcontrollerManagedswitchSystemDhcpServerIpRangeToHclTerraform, true)(struct!.ipRange),
      isBlock: true,
      type: "list",
      storageClassType: "SwitchcontrollerManagedswitchSystemDhcpServerIpRangeList",
    },
    options: {
      value: cdktf.listMapperHcl(switchcontrollerManagedswitchSystemDhcpServerOptionsToHclTerraform, true)(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "SwitchcontrollerManagedswitchSystemDhcpServerOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerManagedswitchSystemDhcpServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerManagedswitchSystemDhcpServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGateway = this._defaultGateway;
    }
    if (this._dnsServer1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer1 = this._dnsServer1;
    }
    if (this._dnsServer2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer2 = this._dnsServer2;
    }
    if (this._dnsServer3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer3 = this._dnsServer3;
    }
    if (this._dnsService !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsService = this._dnsService;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._leaseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseTime = this._leaseTime;
    }
    if (this._netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmask = this._netmask;
    }
    if (this._ntpServer1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpServer1 = this._ntpServer1;
    }
    if (this._ntpServer2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpServer2 = this._ntpServer2;
    }
    if (this._ntpServer3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpServer3 = this._ntpServer3;
    }
    if (this._ntpService !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpService = this._ntpService;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._switchId !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchId = this._switchId;
    }
    if (this._ipRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRange = this._ipRange?.internalValue;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerManagedswitchSystemDhcpServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultGateway = undefined;
      this._dnsServer1 = undefined;
      this._dnsServer2 = undefined;
      this._dnsServer3 = undefined;
      this._dnsService = undefined;
      this._id = undefined;
      this._interface = undefined;
      this._leaseTime = undefined;
      this._netmask = undefined;
      this._ntpServer1 = undefined;
      this._ntpServer2 = undefined;
      this._ntpServer3 = undefined;
      this._ntpService = undefined;
      this._status = undefined;
      this._switchId = undefined;
      this._ipRange.internalValue = undefined;
      this._options.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultGateway = value.defaultGateway;
      this._dnsServer1 = value.dnsServer1;
      this._dnsServer2 = value.dnsServer2;
      this._dnsServer3 = value.dnsServer3;
      this._dnsService = value.dnsService;
      this._id = value.id;
      this._interface = value.interface;
      this._leaseTime = value.leaseTime;
      this._netmask = value.netmask;
      this._ntpServer1 = value.ntpServer1;
      this._ntpServer2 = value.ntpServer2;
      this._ntpServer3 = value.ntpServer3;
      this._ntpService = value.ntpService;
      this._status = value.status;
      this._switchId = value.switchId;
      this._ipRange.internalValue = value.ipRange;
      this._options.internalValue = value.options;
    }
  }

  // default_gateway - computed: true, optional: true, required: false
  private _defaultGateway?: string; 
  public get defaultGateway() {
    return this.getStringAttribute('default_gateway');
  }
  public set defaultGateway(value: string) {
    this._defaultGateway = value;
  }
  public resetDefaultGateway() {
    this._defaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
  }

  // dns_server1 - computed: true, optional: true, required: false
  private _dnsServer1?: string; 
  public get dnsServer1() {
    return this.getStringAttribute('dns_server1');
  }
  public set dnsServer1(value: string) {
    this._dnsServer1 = value;
  }
  public resetDnsServer1() {
    this._dnsServer1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServer1Input() {
    return this._dnsServer1;
  }

  // dns_server2 - computed: true, optional: true, required: false
  private _dnsServer2?: string; 
  public get dnsServer2() {
    return this.getStringAttribute('dns_server2');
  }
  public set dnsServer2(value: string) {
    this._dnsServer2 = value;
  }
  public resetDnsServer2() {
    this._dnsServer2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServer2Input() {
    return this._dnsServer2;
  }

  // dns_server3 - computed: true, optional: true, required: false
  private _dnsServer3?: string; 
  public get dnsServer3() {
    return this.getStringAttribute('dns_server3');
  }
  public set dnsServer3(value: string) {
    this._dnsServer3 = value;
  }
  public resetDnsServer3() {
    this._dnsServer3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServer3Input() {
    return this._dnsServer3;
  }

  // dns_service - computed: true, optional: true, required: false
  private _dnsService?: string; 
  public get dnsService() {
    return this.getStringAttribute('dns_service');
  }
  public set dnsService(value: string) {
    this._dnsService = value;
  }
  public resetDnsService() {
    this._dnsService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServiceInput() {
    return this._dnsService;
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

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // lease_time - computed: true, optional: true, required: false
  private _leaseTime?: number; 
  public get leaseTime() {
    return this.getNumberAttribute('lease_time');
  }
  public set leaseTime(value: number) {
    this._leaseTime = value;
  }
  public resetLeaseTime() {
    this._leaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseTimeInput() {
    return this._leaseTime;
  }

  // netmask - computed: true, optional: true, required: false
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // ntp_server1 - computed: true, optional: true, required: false
  private _ntpServer1?: string; 
  public get ntpServer1() {
    return this.getStringAttribute('ntp_server1');
  }
  public set ntpServer1(value: string) {
    this._ntpServer1 = value;
  }
  public resetNtpServer1() {
    this._ntpServer1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServer1Input() {
    return this._ntpServer1;
  }

  // ntp_server2 - computed: true, optional: true, required: false
  private _ntpServer2?: string; 
  public get ntpServer2() {
    return this.getStringAttribute('ntp_server2');
  }
  public set ntpServer2(value: string) {
    this._ntpServer2 = value;
  }
  public resetNtpServer2() {
    this._ntpServer2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServer2Input() {
    return this._ntpServer2;
  }

  // ntp_server3 - computed: true, optional: true, required: false
  private _ntpServer3?: string; 
  public get ntpServer3() {
    return this.getStringAttribute('ntp_server3');
  }
  public set ntpServer3(value: string) {
    this._ntpServer3 = value;
  }
  public resetNtpServer3() {
    this._ntpServer3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServer3Input() {
    return this._ntpServer3;
  }

  // ntp_service - computed: true, optional: true, required: false
  private _ntpService?: string; 
  public get ntpService() {
    return this.getStringAttribute('ntp_service');
  }
  public set ntpService(value: string) {
    this._ntpService = value;
  }
  public resetNtpService() {
    this._ntpService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServiceInput() {
    return this._ntpService;
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

  // switch_id - computed: false, optional: true, required: false
  private _switchId?: string; 
  public get switchId() {
    return this.getStringAttribute('switch_id');
  }
  public set switchId(value: string) {
    this._switchId = value;
  }
  public resetSwitchId() {
    this._switchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchIdInput() {
    return this._switchId;
  }

  // ip_range - computed: false, optional: true, required: false
  private _ipRange = new SwitchcontrollerManagedswitchSystemDhcpServerIpRangeList(this, "ip_range", false);
  public get ipRange() {
    return this._ipRange;
  }
  public putIpRange(value: SwitchcontrollerManagedswitchSystemDhcpServerIpRange[] | cdktf.IResolvable) {
    this._ipRange.internalValue = value;
  }
  public resetIpRange() {
    this._ipRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeInput() {
    return this._ipRange.internalValue;
  }

  // options - computed: false, optional: true, required: false
  private _options = new SwitchcontrollerManagedswitchSystemDhcpServerOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: SwitchcontrollerManagedswitchSystemDhcpServerOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }
}

export class SwitchcontrollerManagedswitchSystemDhcpServerList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerManagedswitchSystemDhcpServer[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerManagedswitchSystemDhcpServerOutputReference {
    return new SwitchcontrollerManagedswitchSystemDhcpServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchcontrollerManagedswitchSystemInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#allowaccess SwitchcontrollerManagedswitch#allowaccess}
  */
  readonly allowaccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#interface SwitchcontrollerManagedswitch#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#ip SwitchcontrollerManagedswitch#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#mode SwitchcontrollerManagedswitch#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#name SwitchcontrollerManagedswitch#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#status SwitchcontrollerManagedswitch#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#switch_id SwitchcontrollerManagedswitch#switch_id}
  */
  readonly switchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#type SwitchcontrollerManagedswitch#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#vlan SwitchcontrollerManagedswitch#vlan}
  */
  readonly vlan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#vrf SwitchcontrollerManagedswitch#vrf}
  */
  readonly vrf?: string;
}

export function switchcontrollerManagedswitchSystemInterfaceToTerraform(struct?: SwitchcontrollerManagedswitchSystemInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowaccess: cdktf.stringToTerraform(struct!.allowaccess),
    interface: cdktf.stringToTerraform(struct!.interface),
    ip: cdktf.stringToTerraform(struct!.ip),
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
    status: cdktf.stringToTerraform(struct!.status),
    switch_id: cdktf.stringToTerraform(struct!.switchId),
    type: cdktf.stringToTerraform(struct!.type),
    vlan: cdktf.stringToTerraform(struct!.vlan),
    vrf: cdktf.stringToTerraform(struct!.vrf),
  }
}


export function switchcontrollerManagedswitchSystemInterfaceToHclTerraform(struct?: SwitchcontrollerManagedswitchSystemInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowaccess: {
      value: cdktf.stringToHclTerraform(struct!.allowaccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_id: {
      value: cdktf.stringToHclTerraform(struct!.switchId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan: {
      value: cdktf.stringToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf: {
      value: cdktf.stringToHclTerraform(struct!.vrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerManagedswitchSystemInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerManagedswitchSystemInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowaccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowaccess = this._allowaccess;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._switchId !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchId = this._switchId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    if (this._vrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrf = this._vrf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerManagedswitchSystemInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowaccess = undefined;
      this._interface = undefined;
      this._ip = undefined;
      this._mode = undefined;
      this._name = undefined;
      this._status = undefined;
      this._switchId = undefined;
      this._type = undefined;
      this._vlan = undefined;
      this._vrf = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowaccess = value.allowaccess;
      this._interface = value.interface;
      this._ip = value.ip;
      this._mode = value.mode;
      this._name = value.name;
      this._status = value.status;
      this._switchId = value.switchId;
      this._type = value.type;
      this._vlan = value.vlan;
      this._vrf = value.vrf;
    }
  }

  // allowaccess - computed: false, optional: true, required: false
  private _allowaccess?: string; 
  public get allowaccess() {
    return this.getStringAttribute('allowaccess');
  }
  public set allowaccess(value: string) {
    this._allowaccess = value;
  }
  public resetAllowaccess() {
    this._allowaccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowaccessInput() {
    return this._allowaccess;
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // mode - computed: true, optional: true, required: false
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

  // switch_id - computed: false, optional: true, required: false
  private _switchId?: string; 
  public get switchId() {
    return this.getStringAttribute('switch_id');
  }
  public set switchId(value: string) {
    this._switchId = value;
  }
  public resetSwitchId() {
    this._switchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchIdInput() {
    return this._switchId;
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

  // vrf - computed: false, optional: true, required: false
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  public resetVrf() {
    this._vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }
}

export class SwitchcontrollerManagedswitchSystemInterfaceList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerManagedswitchSystemInterface[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerManagedswitchSystemInterfaceOutputReference {
    return new SwitchcontrollerManagedswitchSystemInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchcontrollerManagedswitchVlan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#assignment_priority SwitchcontrollerManagedswitch#assignment_priority}
  */
  readonly assignmentPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#vlan_name SwitchcontrollerManagedswitch#vlan_name}
  */
  readonly vlanName?: string;
}

export function switchcontrollerManagedswitchVlanToTerraform(struct?: SwitchcontrollerManagedswitchVlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assignment_priority: cdktf.numberToTerraform(struct!.assignmentPriority),
    vlan_name: cdktf.stringToTerraform(struct!.vlanName),
  }
}


export function switchcontrollerManagedswitchVlanToHclTerraform(struct?: SwitchcontrollerManagedswitchVlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assignment_priority: {
      value: cdktf.numberToHclTerraform(struct!.assignmentPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class SwitchcontrollerManagedswitchVlanOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerManagedswitchVlan | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignmentPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignmentPriority = this._assignmentPriority;
    }
    if (this._vlanName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanName = this._vlanName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerManagedswitchVlan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignmentPriority = undefined;
      this._vlanName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assignmentPriority = value.assignmentPriority;
      this._vlanName = value.vlanName;
    }
  }

  // assignment_priority - computed: true, optional: true, required: false
  private _assignmentPriority?: number; 
  public get assignmentPriority() {
    return this.getNumberAttribute('assignment_priority');
  }
  public set assignmentPriority(value: number) {
    this._assignmentPriority = value;
  }
  public resetAssignmentPriority() {
    this._assignmentPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentPriorityInput() {
    return this._assignmentPriority;
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

export class SwitchcontrollerManagedswitchVlanList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerManagedswitchVlan[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerManagedswitchVlanOutputReference {
    return new SwitchcontrollerManagedswitchVlanOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch fortios_switchcontroller_managedswitch}
*/
export class SwitchcontrollerManagedswitch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_switchcontroller_managedswitch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchcontrollerManagedswitch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchcontrollerManagedswitch to import
  * @param importFromId The id of the existing SwitchcontrollerManagedswitch that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchcontrollerManagedswitch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_switchcontroller_managedswitch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_managedswitch fortios_switchcontroller_managedswitch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchcontrollerManagedswitchConfig
  */
  public constructor(scope: Construct, id: string, config: SwitchcontrollerManagedswitchConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_switchcontroller_managedswitch',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessProfile = config.accessProfile;
    this._delayedRestartTrigger = config.delayedRestartTrigger;
    this._description = config.description;
    this._dhcpServerAccessList = config.dhcpServerAccessList;
    this._directlyConnected = config.directlyConnected;
    this._dynamicCapability = config.dynamicCapability;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._dynamicallyDiscovered = config.dynamicallyDiscovered;
    this._firmwareProvision = config.firmwareProvision;
    this._firmwareProvisionLatest = config.firmwareProvisionLatest;
    this._firmwareProvisionVersion = config.firmwareProvisionVersion;
    this._flowIdentity = config.flowIdentity;
    this._fswWan1Admin = config.fswWan1Admin;
    this._fswWan1Peer = config.fswWan1Peer;
    this._fswWan2Admin = config.fswWan2Admin;
    this._fswWan2Peer = config.fswWan2Peer;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._l3Discovered = config.l3Discovered;
    this._maxAllowedTrunkMembers = config.maxAllowedTrunkMembers;
    this._mclagIgmpSnoopingAware = config.mclagIgmpSnoopingAware;
    this._mgmtMode = config.mgmtMode;
    this._name = config.name;
    this._overrideSnmpCommunity = config.overrideSnmpCommunity;
    this._overrideSnmpSysinfo = config.overrideSnmpSysinfo;
    this._overrideSnmpTrapThreshold = config.overrideSnmpTrapThreshold;
    this._overrideSnmpUser = config.overrideSnmpUser;
    this._ownerVdom = config.ownerVdom;
    this._poeDetectionType = config.poeDetectionType;
    this._poeLldpDetection = config.poeLldpDetection;
    this._poePreStandardDetection = config.poePreStandardDetection;
    this._preProvisioned = config.preProvisioned;
    this._ptpProfile = config.ptpProfile;
    this._ptpStatus = config.ptpStatus;
    this._purdueLevel = config.purdueLevel;
    this._qosDropPolicy = config.qosDropPolicy;
    this._qosRedProbability = config.qosRedProbability;
    this._radiusNasIp = config.radiusNasIp;
    this._radiusNasIpOverride = config.radiusNasIpOverride;
    this._routeOffload = config.routeOffload;
    this._routeOffloadMclag = config.routeOffloadMclag;
    this._sn = config.sn;
    this._stagedImageVersion = config.stagedImageVersion;
    this._switchDeviceTag = config.switchDeviceTag;
    this._switchDhcpOpt43Key = config.switchDhcpOpt43Key;
    this._switchId = config.switchId;
    this._switchProfile = config.switchProfile;
    this._tdrSupported = config.tdrSupported;
    this._tunnelDiscovered = config.tunnelDiscovered;
    this._type = config.type;
    this._vdomparam = config.vdomparam;
    this._version = config.version;
    this._customCommand.internalValue = config.customCommand;
    this._dhcpSnoopingStaticClient.internalValue = config.dhcpSnoopingStaticClient;
    this._igmpSnooping.internalValue = config.igmpSnooping;
    this._ipSourceGuard.internalValue = config.ipSourceGuard;
    this._mirror.internalValue = config.mirror;
    this._n8021XSettings.internalValue = config.n8021XSettings;
    this._ports.internalValue = config.ports;
    this._remoteLog.internalValue = config.remoteLog;
    this._routeOffloadRouter.internalValue = config.routeOffloadRouter;
    this._routerStatic.internalValue = config.routerStatic;
    this._routerVrf.internalValue = config.routerVrf;
    this._snmpCommunity.internalValue = config.snmpCommunity;
    this._snmpSysinfo.internalValue = config.snmpSysinfo;
    this._snmpTrapThreshold.internalValue = config.snmpTrapThreshold;
    this._snmpUser.internalValue = config.snmpUser;
    this._staticMac.internalValue = config.staticMac;
    this._stormControl.internalValue = config.stormControl;
    this._stpInstance.internalValue = config.stpInstance;
    this._stpSettings.internalValue = config.stpSettings;
    this._switchLog.internalValue = config.switchLog;
    this._switchStpSettings.internalValue = config.switchStpSettings;
    this._systemDhcpServer.internalValue = config.systemDhcpServer;
    this._systemInterface.internalValue = config.systemInterface;
    this._vlan.internalValue = config.vlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_profile - computed: true, optional: true, required: false
  private _accessProfile?: string; 
  public get accessProfile() {
    return this.getStringAttribute('access_profile');
  }
  public set accessProfile(value: string) {
    this._accessProfile = value;
  }
  public resetAccessProfile() {
    this._accessProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessProfileInput() {
    return this._accessProfile;
  }

  // delayed_restart_trigger - computed: false, optional: true, required: false
  private _delayedRestartTrigger?: number; 
  public get delayedRestartTrigger() {
    return this.getNumberAttribute('delayed_restart_trigger');
  }
  public set delayedRestartTrigger(value: number) {
    this._delayedRestartTrigger = value;
  }
  public resetDelayedRestartTrigger() {
    this._delayedRestartTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayedRestartTriggerInput() {
    return this._delayedRestartTrigger;
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

  // dhcp_server_access_list - computed: true, optional: true, required: false
  private _dhcpServerAccessList?: string; 
  public get dhcpServerAccessList() {
    return this.getStringAttribute('dhcp_server_access_list');
  }
  public set dhcpServerAccessList(value: string) {
    this._dhcpServerAccessList = value;
  }
  public resetDhcpServerAccessList() {
    this._dhcpServerAccessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServerAccessListInput() {
    return this._dhcpServerAccessList;
  }

  // directly_connected - computed: false, optional: true, required: false
  private _directlyConnected?: number; 
  public get directlyConnected() {
    return this.getNumberAttribute('directly_connected');
  }
  public set directlyConnected(value: number) {
    this._directlyConnected = value;
  }
  public resetDirectlyConnected() {
    this._directlyConnected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directlyConnectedInput() {
    return this._directlyConnected;
  }

  // dynamic_capability - computed: false, optional: true, required: false
  private _dynamicCapability?: number; 
  public get dynamicCapability() {
    return this.getNumberAttribute('dynamic_capability');
  }
  public set dynamicCapability(value: number) {
    this._dynamicCapability = value;
  }
  public resetDynamicCapability() {
    this._dynamicCapability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicCapabilityInput() {
    return this._dynamicCapability;
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

  // dynamically_discovered - computed: false, optional: true, required: false
  private _dynamicallyDiscovered?: number; 
  public get dynamicallyDiscovered() {
    return this.getNumberAttribute('dynamically_discovered');
  }
  public set dynamicallyDiscovered(value: number) {
    this._dynamicallyDiscovered = value;
  }
  public resetDynamicallyDiscovered() {
    this._dynamicallyDiscovered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicallyDiscoveredInput() {
    return this._dynamicallyDiscovered;
  }

  // firmware_provision - computed: true, optional: true, required: false
  private _firmwareProvision?: string; 
  public get firmwareProvision() {
    return this.getStringAttribute('firmware_provision');
  }
  public set firmwareProvision(value: string) {
    this._firmwareProvision = value;
  }
  public resetFirmwareProvision() {
    this._firmwareProvision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firmwareProvisionInput() {
    return this._firmwareProvision;
  }

  // firmware_provision_latest - computed: true, optional: true, required: false
  private _firmwareProvisionLatest?: string; 
  public get firmwareProvisionLatest() {
    return this.getStringAttribute('firmware_provision_latest');
  }
  public set firmwareProvisionLatest(value: string) {
    this._firmwareProvisionLatest = value;
  }
  public resetFirmwareProvisionLatest() {
    this._firmwareProvisionLatest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firmwareProvisionLatestInput() {
    return this._firmwareProvisionLatest;
  }

  // firmware_provision_version - computed: false, optional: true, required: false
  private _firmwareProvisionVersion?: string; 
  public get firmwareProvisionVersion() {
    return this.getStringAttribute('firmware_provision_version');
  }
  public set firmwareProvisionVersion(value: string) {
    this._firmwareProvisionVersion = value;
  }
  public resetFirmwareProvisionVersion() {
    this._firmwareProvisionVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firmwareProvisionVersionInput() {
    return this._firmwareProvisionVersion;
  }

  // flow_identity - computed: true, optional: true, required: false
  private _flowIdentity?: string; 
  public get flowIdentity() {
    return this.getStringAttribute('flow_identity');
  }
  public set flowIdentity(value: string) {
    this._flowIdentity = value;
  }
  public resetFlowIdentity() {
    this._flowIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowIdentityInput() {
    return this._flowIdentity;
  }

  // fsw_wan1_admin - computed: true, optional: true, required: false
  private _fswWan1Admin?: string; 
  public get fswWan1Admin() {
    return this.getStringAttribute('fsw_wan1_admin');
  }
  public set fswWan1Admin(value: string) {
    this._fswWan1Admin = value;
  }
  public resetFswWan1Admin() {
    this._fswWan1Admin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fswWan1AdminInput() {
    return this._fswWan1Admin;
  }

  // fsw_wan1_peer - computed: false, optional: false, required: true
  private _fswWan1Peer?: string; 
  public get fswWan1Peer() {
    return this.getStringAttribute('fsw_wan1_peer');
  }
  public set fswWan1Peer(value: string) {
    this._fswWan1Peer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fswWan1PeerInput() {
    return this._fswWan1Peer;
  }

  // fsw_wan2_admin - computed: true, optional: true, required: false
  private _fswWan2Admin?: string; 
  public get fswWan2Admin() {
    return this.getStringAttribute('fsw_wan2_admin');
  }
  public set fswWan2Admin(value: string) {
    this._fswWan2Admin = value;
  }
  public resetFswWan2Admin() {
    this._fswWan2Admin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fswWan2AdminInput() {
    return this._fswWan2Admin;
  }

  // fsw_wan2_peer - computed: false, optional: true, required: false
  private _fswWan2Peer?: string; 
  public get fswWan2Peer() {
    return this.getStringAttribute('fsw_wan2_peer');
  }
  public set fswWan2Peer(value: string) {
    this._fswWan2Peer = value;
  }
  public resetFswWan2Peer() {
    this._fswWan2Peer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fswWan2PeerInput() {
    return this._fswWan2Peer;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // l3_discovered - computed: false, optional: true, required: false
  private _l3Discovered?: number; 
  public get l3Discovered() {
    return this.getNumberAttribute('l3_discovered');
  }
  public set l3Discovered(value: number) {
    this._l3Discovered = value;
  }
  public resetL3Discovered() {
    this._l3Discovered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3DiscoveredInput() {
    return this._l3Discovered;
  }

  // max_allowed_trunk_members - computed: true, optional: true, required: false
  private _maxAllowedTrunkMembers?: number; 
  public get maxAllowedTrunkMembers() {
    return this.getNumberAttribute('max_allowed_trunk_members');
  }
  public set maxAllowedTrunkMembers(value: number) {
    this._maxAllowedTrunkMembers = value;
  }
  public resetMaxAllowedTrunkMembers() {
    this._maxAllowedTrunkMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAllowedTrunkMembersInput() {
    return this._maxAllowedTrunkMembers;
  }

  // mclag_igmp_snooping_aware - computed: true, optional: true, required: false
  private _mclagIgmpSnoopingAware?: string; 
  public get mclagIgmpSnoopingAware() {
    return this.getStringAttribute('mclag_igmp_snooping_aware');
  }
  public set mclagIgmpSnoopingAware(value: string) {
    this._mclagIgmpSnoopingAware = value;
  }
  public resetMclagIgmpSnoopingAware() {
    this._mclagIgmpSnoopingAware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mclagIgmpSnoopingAwareInput() {
    return this._mclagIgmpSnoopingAware;
  }

  // mgmt_mode - computed: false, optional: true, required: false
  private _mgmtMode?: number; 
  public get mgmtMode() {
    return this.getNumberAttribute('mgmt_mode');
  }
  public set mgmtMode(value: number) {
    this._mgmtMode = value;
  }
  public resetMgmtMode() {
    this._mgmtMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtModeInput() {
    return this._mgmtMode;
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

  // override_snmp_community - computed: true, optional: true, required: false
  private _overrideSnmpCommunity?: string; 
  public get overrideSnmpCommunity() {
    return this.getStringAttribute('override_snmp_community');
  }
  public set overrideSnmpCommunity(value: string) {
    this._overrideSnmpCommunity = value;
  }
  public resetOverrideSnmpCommunity() {
    this._overrideSnmpCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideSnmpCommunityInput() {
    return this._overrideSnmpCommunity;
  }

  // override_snmp_sysinfo - computed: true, optional: true, required: false
  private _overrideSnmpSysinfo?: string; 
  public get overrideSnmpSysinfo() {
    return this.getStringAttribute('override_snmp_sysinfo');
  }
  public set overrideSnmpSysinfo(value: string) {
    this._overrideSnmpSysinfo = value;
  }
  public resetOverrideSnmpSysinfo() {
    this._overrideSnmpSysinfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideSnmpSysinfoInput() {
    return this._overrideSnmpSysinfo;
  }

  // override_snmp_trap_threshold - computed: true, optional: true, required: false
  private _overrideSnmpTrapThreshold?: string; 
  public get overrideSnmpTrapThreshold() {
    return this.getStringAttribute('override_snmp_trap_threshold');
  }
  public set overrideSnmpTrapThreshold(value: string) {
    this._overrideSnmpTrapThreshold = value;
  }
  public resetOverrideSnmpTrapThreshold() {
    this._overrideSnmpTrapThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideSnmpTrapThresholdInput() {
    return this._overrideSnmpTrapThreshold;
  }

  // override_snmp_user - computed: true, optional: true, required: false
  private _overrideSnmpUser?: string; 
  public get overrideSnmpUser() {
    return this.getStringAttribute('override_snmp_user');
  }
  public set overrideSnmpUser(value: string) {
    this._overrideSnmpUser = value;
  }
  public resetOverrideSnmpUser() {
    this._overrideSnmpUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideSnmpUserInput() {
    return this._overrideSnmpUser;
  }

  // owner_vdom - computed: false, optional: true, required: false
  private _ownerVdom?: string; 
  public get ownerVdom() {
    return this.getStringAttribute('owner_vdom');
  }
  public set ownerVdom(value: string) {
    this._ownerVdom = value;
  }
  public resetOwnerVdom() {
    this._ownerVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerVdomInput() {
    return this._ownerVdom;
  }

  // poe_detection_type - computed: true, optional: true, required: false
  private _poeDetectionType?: number; 
  public get poeDetectionType() {
    return this.getNumberAttribute('poe_detection_type');
  }
  public set poeDetectionType(value: number) {
    this._poeDetectionType = value;
  }
  public resetPoeDetectionType() {
    this._poeDetectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poeDetectionTypeInput() {
    return this._poeDetectionType;
  }

  // poe_lldp_detection - computed: false, optional: true, required: false
  private _poeLldpDetection?: string; 
  public get poeLldpDetection() {
    return this.getStringAttribute('poe_lldp_detection');
  }
  public set poeLldpDetection(value: string) {
    this._poeLldpDetection = value;
  }
  public resetPoeLldpDetection() {
    this._poeLldpDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poeLldpDetectionInput() {
    return this._poeLldpDetection;
  }

  // poe_pre_standard_detection - computed: true, optional: true, required: false
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

  // pre_provisioned - computed: true, optional: true, required: false
  private _preProvisioned?: number; 
  public get preProvisioned() {
    return this.getNumberAttribute('pre_provisioned');
  }
  public set preProvisioned(value: number) {
    this._preProvisioned = value;
  }
  public resetPreProvisioned() {
    this._preProvisioned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preProvisionedInput() {
    return this._preProvisioned;
  }

  // ptp_profile - computed: true, optional: true, required: false
  private _ptpProfile?: string; 
  public get ptpProfile() {
    return this.getStringAttribute('ptp_profile');
  }
  public set ptpProfile(value: string) {
    this._ptpProfile = value;
  }
  public resetPtpProfile() {
    this._ptpProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ptpProfileInput() {
    return this._ptpProfile;
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

  // purdue_level - computed: true, optional: true, required: false
  private _purdueLevel?: string; 
  public get purdueLevel() {
    return this.getStringAttribute('purdue_level');
  }
  public set purdueLevel(value: string) {
    this._purdueLevel = value;
  }
  public resetPurdueLevel() {
    this._purdueLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purdueLevelInput() {
    return this._purdueLevel;
  }

  // qos_drop_policy - computed: true, optional: true, required: false
  private _qosDropPolicy?: string; 
  public get qosDropPolicy() {
    return this.getStringAttribute('qos_drop_policy');
  }
  public set qosDropPolicy(value: string) {
    this._qosDropPolicy = value;
  }
  public resetQosDropPolicy() {
    this._qosDropPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosDropPolicyInput() {
    return this._qosDropPolicy;
  }

  // qos_red_probability - computed: true, optional: true, required: false
  private _qosRedProbability?: number; 
  public get qosRedProbability() {
    return this.getNumberAttribute('qos_red_probability');
  }
  public set qosRedProbability(value: number) {
    this._qosRedProbability = value;
  }
  public resetQosRedProbability() {
    this._qosRedProbability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosRedProbabilityInput() {
    return this._qosRedProbability;
  }

  // radius_nas_ip - computed: true, optional: true, required: false
  private _radiusNasIp?: string; 
  public get radiusNasIp() {
    return this.getStringAttribute('radius_nas_ip');
  }
  public set radiusNasIp(value: string) {
    this._radiusNasIp = value;
  }
  public resetRadiusNasIp() {
    this._radiusNasIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusNasIpInput() {
    return this._radiusNasIp;
  }

  // radius_nas_ip_override - computed: true, optional: true, required: false
  private _radiusNasIpOverride?: string; 
  public get radiusNasIpOverride() {
    return this.getStringAttribute('radius_nas_ip_override');
  }
  public set radiusNasIpOverride(value: string) {
    this._radiusNasIpOverride = value;
  }
  public resetRadiusNasIpOverride() {
    this._radiusNasIpOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusNasIpOverrideInput() {
    return this._radiusNasIpOverride;
  }

  // route_offload - computed: true, optional: true, required: false
  private _routeOffload?: string; 
  public get routeOffload() {
    return this.getStringAttribute('route_offload');
  }
  public set routeOffload(value: string) {
    this._routeOffload = value;
  }
  public resetRouteOffload() {
    this._routeOffload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeOffloadInput() {
    return this._routeOffload;
  }

  // route_offload_mclag - computed: true, optional: true, required: false
  private _routeOffloadMclag?: string; 
  public get routeOffloadMclag() {
    return this.getStringAttribute('route_offload_mclag');
  }
  public set routeOffloadMclag(value: string) {
    this._routeOffloadMclag = value;
  }
  public resetRouteOffloadMclag() {
    this._routeOffloadMclag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeOffloadMclagInput() {
    return this._routeOffloadMclag;
  }

  // sn - computed: false, optional: true, required: false
  private _sn?: string; 
  public get sn() {
    return this.getStringAttribute('sn');
  }
  public set sn(value: string) {
    this._sn = value;
  }
  public resetSn() {
    this._sn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snInput() {
    return this._sn;
  }

  // staged_image_version - computed: false, optional: true, required: false
  private _stagedImageVersion?: string; 
  public get stagedImageVersion() {
    return this.getStringAttribute('staged_image_version');
  }
  public set stagedImageVersion(value: string) {
    this._stagedImageVersion = value;
  }
  public resetStagedImageVersion() {
    this._stagedImageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagedImageVersionInput() {
    return this._stagedImageVersion;
  }

  // switch_device_tag - computed: false, optional: true, required: false
  private _switchDeviceTag?: string; 
  public get switchDeviceTag() {
    return this.getStringAttribute('switch_device_tag');
  }
  public set switchDeviceTag(value: string) {
    this._switchDeviceTag = value;
  }
  public resetSwitchDeviceTag() {
    this._switchDeviceTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchDeviceTagInput() {
    return this._switchDeviceTag;
  }

  // switch_dhcp_opt43_key - computed: false, optional: true, required: false
  private _switchDhcpOpt43Key?: string; 
  public get switchDhcpOpt43Key() {
    return this.getStringAttribute('switch_dhcp_opt43_key');
  }
  public set switchDhcpOpt43Key(value: string) {
    this._switchDhcpOpt43Key = value;
  }
  public resetSwitchDhcpOpt43Key() {
    this._switchDhcpOpt43Key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchDhcpOpt43KeyInput() {
    return this._switchDhcpOpt43Key;
  }

  // switch_id - computed: false, optional: false, required: true
  private _switchId?: string; 
  public get switchId() {
    return this.getStringAttribute('switch_id');
  }
  public set switchId(value: string) {
    this._switchId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchIdInput() {
    return this._switchId;
  }

  // switch_profile - computed: true, optional: true, required: false
  private _switchProfile?: string; 
  public get switchProfile() {
    return this.getStringAttribute('switch_profile');
  }
  public set switchProfile(value: string) {
    this._switchProfile = value;
  }
  public resetSwitchProfile() {
    this._switchProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchProfileInput() {
    return this._switchProfile;
  }

  // tdr_supported - computed: false, optional: true, required: false
  private _tdrSupported?: string; 
  public get tdrSupported() {
    return this.getStringAttribute('tdr_supported');
  }
  public set tdrSupported(value: string) {
    this._tdrSupported = value;
  }
  public resetTdrSupported() {
    this._tdrSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tdrSupportedInput() {
    return this._tdrSupported;
  }

  // tunnel_discovered - computed: false, optional: true, required: false
  private _tunnelDiscovered?: number; 
  public get tunnelDiscovered() {
    return this.getNumberAttribute('tunnel_discovered');
  }
  public set tunnelDiscovered(value: number) {
    this._tunnelDiscovered = value;
  }
  public resetTunnelDiscovered() {
    this._tunnelDiscovered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelDiscoveredInput() {
    return this._tunnelDiscovered;
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

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // version - computed: true, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // custom_command - computed: false, optional: true, required: false
  private _customCommand = new SwitchcontrollerManagedswitchCustomCommandList(this, "custom_command", false);
  public get customCommand() {
    return this._customCommand;
  }
  public putCustomCommand(value: SwitchcontrollerManagedswitchCustomCommand[] | cdktf.IResolvable) {
    this._customCommand.internalValue = value;
  }
  public resetCustomCommand() {
    this._customCommand.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCommandInput() {
    return this._customCommand.internalValue;
  }

  // dhcp_snooping_static_client - computed: false, optional: true, required: false
  private _dhcpSnoopingStaticClient = new SwitchcontrollerManagedswitchDhcpSnoopingStaticClientList(this, "dhcp_snooping_static_client", false);
  public get dhcpSnoopingStaticClient() {
    return this._dhcpSnoopingStaticClient;
  }
  public putDhcpSnoopingStaticClient(value: SwitchcontrollerManagedswitchDhcpSnoopingStaticClient[] | cdktf.IResolvable) {
    this._dhcpSnoopingStaticClient.internalValue = value;
  }
  public resetDhcpSnoopingStaticClient() {
    this._dhcpSnoopingStaticClient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpSnoopingStaticClientInput() {
    return this._dhcpSnoopingStaticClient.internalValue;
  }

  // igmp_snooping - computed: false, optional: true, required: false
  private _igmpSnooping = new SwitchcontrollerManagedswitchIgmpSnoopingOutputReference(this, "igmp_snooping");
  public get igmpSnooping() {
    return this._igmpSnooping;
  }
  public putIgmpSnooping(value: SwitchcontrollerManagedswitchIgmpSnooping) {
    this._igmpSnooping.internalValue = value;
  }
  public resetIgmpSnooping() {
    this._igmpSnooping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpSnoopingInput() {
    return this._igmpSnooping.internalValue;
  }

  // ip_source_guard - computed: false, optional: true, required: false
  private _ipSourceGuard = new SwitchcontrollerManagedswitchIpSourceGuardList(this, "ip_source_guard", false);
  public get ipSourceGuard() {
    return this._ipSourceGuard;
  }
  public putIpSourceGuard(value: SwitchcontrollerManagedswitchIpSourceGuard[] | cdktf.IResolvable) {
    this._ipSourceGuard.internalValue = value;
  }
  public resetIpSourceGuard() {
    this._ipSourceGuard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSourceGuardInput() {
    return this._ipSourceGuard.internalValue;
  }

  // mirror - computed: false, optional: true, required: false
  private _mirror = new SwitchcontrollerManagedswitchMirrorList(this, "mirror", false);
  public get mirror() {
    return this._mirror;
  }
  public putMirror(value: SwitchcontrollerManagedswitchMirror[] | cdktf.IResolvable) {
    this._mirror.internalValue = value;
  }
  public resetMirror() {
    this._mirror.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorInput() {
    return this._mirror.internalValue;
  }

  // n802_1x_settings - computed: false, optional: true, required: false
  private _n8021XSettings = new SwitchcontrollerManagedswitchN8021XSettingsOutputReference(this, "n802_1x_settings");
  public get n8021XSettings() {
    return this._n8021XSettings;
  }
  public putN8021XSettings(value: SwitchcontrollerManagedswitchN8021XSettings) {
    this._n8021XSettings.internalValue = value;
  }
  public resetN8021XSettings() {
    this._n8021XSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get n8021XSettingsInput() {
    return this._n8021XSettings.internalValue;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new SwitchcontrollerManagedswitchPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: SwitchcontrollerManagedswitchPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }

  // remote_log - computed: false, optional: true, required: false
  private _remoteLog = new SwitchcontrollerManagedswitchRemoteLogList(this, "remote_log", false);
  public get remoteLog() {
    return this._remoteLog;
  }
  public putRemoteLog(value: SwitchcontrollerManagedswitchRemoteLog[] | cdktf.IResolvable) {
    this._remoteLog.internalValue = value;
  }
  public resetRemoteLog() {
    this._remoteLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteLogInput() {
    return this._remoteLog.internalValue;
  }

  // route_offload_router - computed: false, optional: true, required: false
  private _routeOffloadRouter = new SwitchcontrollerManagedswitchRouteOffloadRouterList(this, "route_offload_router", false);
  public get routeOffloadRouter() {
    return this._routeOffloadRouter;
  }
  public putRouteOffloadRouter(value: SwitchcontrollerManagedswitchRouteOffloadRouter[] | cdktf.IResolvable) {
    this._routeOffloadRouter.internalValue = value;
  }
  public resetRouteOffloadRouter() {
    this._routeOffloadRouter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeOffloadRouterInput() {
    return this._routeOffloadRouter.internalValue;
  }

  // router_static - computed: false, optional: true, required: false
  private _routerStatic = new SwitchcontrollerManagedswitchRouterStaticList(this, "router_static", false);
  public get routerStatic() {
    return this._routerStatic;
  }
  public putRouterStatic(value: SwitchcontrollerManagedswitchRouterStatic[] | cdktf.IResolvable) {
    this._routerStatic.internalValue = value;
  }
  public resetRouterStatic() {
    this._routerStatic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerStaticInput() {
    return this._routerStatic.internalValue;
  }

  // router_vrf - computed: false, optional: true, required: false
  private _routerVrf = new SwitchcontrollerManagedswitchRouterVrfList(this, "router_vrf", false);
  public get routerVrf() {
    return this._routerVrf;
  }
  public putRouterVrf(value: SwitchcontrollerManagedswitchRouterVrf[] | cdktf.IResolvable) {
    this._routerVrf.internalValue = value;
  }
  public resetRouterVrf() {
    this._routerVrf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerVrfInput() {
    return this._routerVrf.internalValue;
  }

  // snmp_community - computed: false, optional: true, required: false
  private _snmpCommunity = new SwitchcontrollerManagedswitchSnmpCommunityList(this, "snmp_community", false);
  public get snmpCommunity() {
    return this._snmpCommunity;
  }
  public putSnmpCommunity(value: SwitchcontrollerManagedswitchSnmpCommunity[] | cdktf.IResolvable) {
    this._snmpCommunity.internalValue = value;
  }
  public resetSnmpCommunity() {
    this._snmpCommunity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpCommunityInput() {
    return this._snmpCommunity.internalValue;
  }

  // snmp_sysinfo - computed: false, optional: true, required: false
  private _snmpSysinfo = new SwitchcontrollerManagedswitchSnmpSysinfoOutputReference(this, "snmp_sysinfo");
  public get snmpSysinfo() {
    return this._snmpSysinfo;
  }
  public putSnmpSysinfo(value: SwitchcontrollerManagedswitchSnmpSysinfo) {
    this._snmpSysinfo.internalValue = value;
  }
  public resetSnmpSysinfo() {
    this._snmpSysinfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpSysinfoInput() {
    return this._snmpSysinfo.internalValue;
  }

  // snmp_trap_threshold - computed: false, optional: true, required: false
  private _snmpTrapThreshold = new SwitchcontrollerManagedswitchSnmpTrapThresholdOutputReference(this, "snmp_trap_threshold");
  public get snmpTrapThreshold() {
    return this._snmpTrapThreshold;
  }
  public putSnmpTrapThreshold(value: SwitchcontrollerManagedswitchSnmpTrapThreshold) {
    this._snmpTrapThreshold.internalValue = value;
  }
  public resetSnmpTrapThreshold() {
    this._snmpTrapThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpTrapThresholdInput() {
    return this._snmpTrapThreshold.internalValue;
  }

  // snmp_user - computed: false, optional: true, required: false
  private _snmpUser = new SwitchcontrollerManagedswitchSnmpUserList(this, "snmp_user", false);
  public get snmpUser() {
    return this._snmpUser;
  }
  public putSnmpUser(value: SwitchcontrollerManagedswitchSnmpUser[] | cdktf.IResolvable) {
    this._snmpUser.internalValue = value;
  }
  public resetSnmpUser() {
    this._snmpUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpUserInput() {
    return this._snmpUser.internalValue;
  }

  // static_mac - computed: false, optional: true, required: false
  private _staticMac = new SwitchcontrollerManagedswitchStaticMacList(this, "static_mac", false);
  public get staticMac() {
    return this._staticMac;
  }
  public putStaticMac(value: SwitchcontrollerManagedswitchStaticMac[] | cdktf.IResolvable) {
    this._staticMac.internalValue = value;
  }
  public resetStaticMac() {
    this._staticMac.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticMacInput() {
    return this._staticMac.internalValue;
  }

  // storm_control - computed: false, optional: true, required: false
  private _stormControl = new SwitchcontrollerManagedswitchStormControlOutputReference(this, "storm_control");
  public get stormControl() {
    return this._stormControl;
  }
  public putStormControl(value: SwitchcontrollerManagedswitchStormControl) {
    this._stormControl.internalValue = value;
  }
  public resetStormControl() {
    this._stormControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stormControlInput() {
    return this._stormControl.internalValue;
  }

  // stp_instance - computed: false, optional: true, required: false
  private _stpInstance = new SwitchcontrollerManagedswitchStpInstanceList(this, "stp_instance", false);
  public get stpInstance() {
    return this._stpInstance;
  }
  public putStpInstance(value: SwitchcontrollerManagedswitchStpInstance[] | cdktf.IResolvable) {
    this._stpInstance.internalValue = value;
  }
  public resetStpInstance() {
    this._stpInstance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpInstanceInput() {
    return this._stpInstance.internalValue;
  }

  // stp_settings - computed: false, optional: true, required: false
  private _stpSettings = new SwitchcontrollerManagedswitchStpSettingsOutputReference(this, "stp_settings");
  public get stpSettings() {
    return this._stpSettings;
  }
  public putStpSettings(value: SwitchcontrollerManagedswitchStpSettings) {
    this._stpSettings.internalValue = value;
  }
  public resetStpSettings() {
    this._stpSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpSettingsInput() {
    return this._stpSettings.internalValue;
  }

  // switch_log - computed: false, optional: true, required: false
  private _switchLog = new SwitchcontrollerManagedswitchSwitchLogOutputReference(this, "switch_log");
  public get switchLog() {
    return this._switchLog;
  }
  public putSwitchLog(value: SwitchcontrollerManagedswitchSwitchLog) {
    this._switchLog.internalValue = value;
  }
  public resetSwitchLog() {
    this._switchLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchLogInput() {
    return this._switchLog.internalValue;
  }

  // switch_stp_settings - computed: false, optional: true, required: false
  private _switchStpSettings = new SwitchcontrollerManagedswitchSwitchStpSettingsOutputReference(this, "switch_stp_settings");
  public get switchStpSettings() {
    return this._switchStpSettings;
  }
  public putSwitchStpSettings(value: SwitchcontrollerManagedswitchSwitchStpSettings) {
    this._switchStpSettings.internalValue = value;
  }
  public resetSwitchStpSettings() {
    this._switchStpSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchStpSettingsInput() {
    return this._switchStpSettings.internalValue;
  }

  // system_dhcp_server - computed: false, optional: true, required: false
  private _systemDhcpServer = new SwitchcontrollerManagedswitchSystemDhcpServerList(this, "system_dhcp_server", false);
  public get systemDhcpServer() {
    return this._systemDhcpServer;
  }
  public putSystemDhcpServer(value: SwitchcontrollerManagedswitchSystemDhcpServer[] | cdktf.IResolvable) {
    this._systemDhcpServer.internalValue = value;
  }
  public resetSystemDhcpServer() {
    this._systemDhcpServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDhcpServerInput() {
    return this._systemDhcpServer.internalValue;
  }

  // system_interface - computed: false, optional: true, required: false
  private _systemInterface = new SwitchcontrollerManagedswitchSystemInterfaceList(this, "system_interface", false);
  public get systemInterface() {
    return this._systemInterface;
  }
  public putSystemInterface(value: SwitchcontrollerManagedswitchSystemInterface[] | cdktf.IResolvable) {
    this._systemInterface.internalValue = value;
  }
  public resetSystemInterface() {
    this._systemInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemInterfaceInput() {
    return this._systemInterface.internalValue;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan = new SwitchcontrollerManagedswitchVlanList(this, "vlan", false);
  public get vlan() {
    return this._vlan;
  }
  public putVlan(value: SwitchcontrollerManagedswitchVlan[] | cdktf.IResolvable) {
    this._vlan.internalValue = value;
  }
  public resetVlan() {
    this._vlan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_profile: cdktf.stringToTerraform(this._accessProfile),
      delayed_restart_trigger: cdktf.numberToTerraform(this._delayedRestartTrigger),
      description: cdktf.stringToTerraform(this._description),
      dhcp_server_access_list: cdktf.stringToTerraform(this._dhcpServerAccessList),
      directly_connected: cdktf.numberToTerraform(this._directlyConnected),
      dynamic_capability: cdktf.numberToTerraform(this._dynamicCapability),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      dynamically_discovered: cdktf.numberToTerraform(this._dynamicallyDiscovered),
      firmware_provision: cdktf.stringToTerraform(this._firmwareProvision),
      firmware_provision_latest: cdktf.stringToTerraform(this._firmwareProvisionLatest),
      firmware_provision_version: cdktf.stringToTerraform(this._firmwareProvisionVersion),
      flow_identity: cdktf.stringToTerraform(this._flowIdentity),
      fsw_wan1_admin: cdktf.stringToTerraform(this._fswWan1Admin),
      fsw_wan1_peer: cdktf.stringToTerraform(this._fswWan1Peer),
      fsw_wan2_admin: cdktf.stringToTerraform(this._fswWan2Admin),
      fsw_wan2_peer: cdktf.stringToTerraform(this._fswWan2Peer),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      l3_discovered: cdktf.numberToTerraform(this._l3Discovered),
      max_allowed_trunk_members: cdktf.numberToTerraform(this._maxAllowedTrunkMembers),
      mclag_igmp_snooping_aware: cdktf.stringToTerraform(this._mclagIgmpSnoopingAware),
      mgmt_mode: cdktf.numberToTerraform(this._mgmtMode),
      name: cdktf.stringToTerraform(this._name),
      override_snmp_community: cdktf.stringToTerraform(this._overrideSnmpCommunity),
      override_snmp_sysinfo: cdktf.stringToTerraform(this._overrideSnmpSysinfo),
      override_snmp_trap_threshold: cdktf.stringToTerraform(this._overrideSnmpTrapThreshold),
      override_snmp_user: cdktf.stringToTerraform(this._overrideSnmpUser),
      owner_vdom: cdktf.stringToTerraform(this._ownerVdom),
      poe_detection_type: cdktf.numberToTerraform(this._poeDetectionType),
      poe_lldp_detection: cdktf.stringToTerraform(this._poeLldpDetection),
      poe_pre_standard_detection: cdktf.stringToTerraform(this._poePreStandardDetection),
      pre_provisioned: cdktf.numberToTerraform(this._preProvisioned),
      ptp_profile: cdktf.stringToTerraform(this._ptpProfile),
      ptp_status: cdktf.stringToTerraform(this._ptpStatus),
      purdue_level: cdktf.stringToTerraform(this._purdueLevel),
      qos_drop_policy: cdktf.stringToTerraform(this._qosDropPolicy),
      qos_red_probability: cdktf.numberToTerraform(this._qosRedProbability),
      radius_nas_ip: cdktf.stringToTerraform(this._radiusNasIp),
      radius_nas_ip_override: cdktf.stringToTerraform(this._radiusNasIpOverride),
      route_offload: cdktf.stringToTerraform(this._routeOffload),
      route_offload_mclag: cdktf.stringToTerraform(this._routeOffloadMclag),
      sn: cdktf.stringToTerraform(this._sn),
      staged_image_version: cdktf.stringToTerraform(this._stagedImageVersion),
      switch_device_tag: cdktf.stringToTerraform(this._switchDeviceTag),
      switch_dhcp_opt43_key: cdktf.stringToTerraform(this._switchDhcpOpt43Key),
      switch_id: cdktf.stringToTerraform(this._switchId),
      switch_profile: cdktf.stringToTerraform(this._switchProfile),
      tdr_supported: cdktf.stringToTerraform(this._tdrSupported),
      tunnel_discovered: cdktf.numberToTerraform(this._tunnelDiscovered),
      type: cdktf.stringToTerraform(this._type),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      version: cdktf.numberToTerraform(this._version),
      custom_command: cdktf.listMapper(switchcontrollerManagedswitchCustomCommandToTerraform, true)(this._customCommand.internalValue),
      dhcp_snooping_static_client: cdktf.listMapper(switchcontrollerManagedswitchDhcpSnoopingStaticClientToTerraform, true)(this._dhcpSnoopingStaticClient.internalValue),
      igmp_snooping: switchcontrollerManagedswitchIgmpSnoopingToTerraform(this._igmpSnooping.internalValue),
      ip_source_guard: cdktf.listMapper(switchcontrollerManagedswitchIpSourceGuardToTerraform, true)(this._ipSourceGuard.internalValue),
      mirror: cdktf.listMapper(switchcontrollerManagedswitchMirrorToTerraform, true)(this._mirror.internalValue),
      n802_1x_settings: switchcontrollerManagedswitchN8021XSettingsToTerraform(this._n8021XSettings.internalValue),
      ports: cdktf.listMapper(switchcontrollerManagedswitchPortsToTerraform, true)(this._ports.internalValue),
      remote_log: cdktf.listMapper(switchcontrollerManagedswitchRemoteLogToTerraform, true)(this._remoteLog.internalValue),
      route_offload_router: cdktf.listMapper(switchcontrollerManagedswitchRouteOffloadRouterToTerraform, true)(this._routeOffloadRouter.internalValue),
      router_static: cdktf.listMapper(switchcontrollerManagedswitchRouterStaticToTerraform, true)(this._routerStatic.internalValue),
      router_vrf: cdktf.listMapper(switchcontrollerManagedswitchRouterVrfToTerraform, true)(this._routerVrf.internalValue),
      snmp_community: cdktf.listMapper(switchcontrollerManagedswitchSnmpCommunityToTerraform, true)(this._snmpCommunity.internalValue),
      snmp_sysinfo: switchcontrollerManagedswitchSnmpSysinfoToTerraform(this._snmpSysinfo.internalValue),
      snmp_trap_threshold: switchcontrollerManagedswitchSnmpTrapThresholdToTerraform(this._snmpTrapThreshold.internalValue),
      snmp_user: cdktf.listMapper(switchcontrollerManagedswitchSnmpUserToTerraform, true)(this._snmpUser.internalValue),
      static_mac: cdktf.listMapper(switchcontrollerManagedswitchStaticMacToTerraform, true)(this._staticMac.internalValue),
      storm_control: switchcontrollerManagedswitchStormControlToTerraform(this._stormControl.internalValue),
      stp_instance: cdktf.listMapper(switchcontrollerManagedswitchStpInstanceToTerraform, true)(this._stpInstance.internalValue),
      stp_settings: switchcontrollerManagedswitchStpSettingsToTerraform(this._stpSettings.internalValue),
      switch_log: switchcontrollerManagedswitchSwitchLogToTerraform(this._switchLog.internalValue),
      switch_stp_settings: switchcontrollerManagedswitchSwitchStpSettingsToTerraform(this._switchStpSettings.internalValue),
      system_dhcp_server: cdktf.listMapper(switchcontrollerManagedswitchSystemDhcpServerToTerraform, true)(this._systemDhcpServer.internalValue),
      system_interface: cdktf.listMapper(switchcontrollerManagedswitchSystemInterfaceToTerraform, true)(this._systemInterface.internalValue),
      vlan: cdktf.listMapper(switchcontrollerManagedswitchVlanToTerraform, true)(this._vlan.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_profile: {
        value: cdktf.stringToHclTerraform(this._accessProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delayed_restart_trigger: {
        value: cdktf.numberToHclTerraform(this._delayedRestartTrigger),
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
      dhcp_server_access_list: {
        value: cdktf.stringToHclTerraform(this._dhcpServerAccessList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      directly_connected: {
        value: cdktf.numberToHclTerraform(this._directlyConnected),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dynamic_capability: {
        value: cdktf.numberToHclTerraform(this._dynamicCapability),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamically_discovered: {
        value: cdktf.numberToHclTerraform(this._dynamicallyDiscovered),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      firmware_provision: {
        value: cdktf.stringToHclTerraform(this._firmwareProvision),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firmware_provision_latest: {
        value: cdktf.stringToHclTerraform(this._firmwareProvisionLatest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firmware_provision_version: {
        value: cdktf.stringToHclTerraform(this._firmwareProvisionVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flow_identity: {
        value: cdktf.stringToHclTerraform(this._flowIdentity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fsw_wan1_admin: {
        value: cdktf.stringToHclTerraform(this._fswWan1Admin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fsw_wan1_peer: {
        value: cdktf.stringToHclTerraform(this._fswWan1Peer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fsw_wan2_admin: {
        value: cdktf.stringToHclTerraform(this._fswWan2Admin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fsw_wan2_peer: {
        value: cdktf.stringToHclTerraform(this._fswWan2Peer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      l3_discovered: {
        value: cdktf.numberToHclTerraform(this._l3Discovered),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_allowed_trunk_members: {
        value: cdktf.numberToHclTerraform(this._maxAllowedTrunkMembers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mclag_igmp_snooping_aware: {
        value: cdktf.stringToHclTerraform(this._mclagIgmpSnoopingAware),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mgmt_mode: {
        value: cdktf.numberToHclTerraform(this._mgmtMode),
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
      override_snmp_community: {
        value: cdktf.stringToHclTerraform(this._overrideSnmpCommunity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_snmp_sysinfo: {
        value: cdktf.stringToHclTerraform(this._overrideSnmpSysinfo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_snmp_trap_threshold: {
        value: cdktf.stringToHclTerraform(this._overrideSnmpTrapThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_snmp_user: {
        value: cdktf.stringToHclTerraform(this._overrideSnmpUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_vdom: {
        value: cdktf.stringToHclTerraform(this._ownerVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      poe_detection_type: {
        value: cdktf.numberToHclTerraform(this._poeDetectionType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      poe_lldp_detection: {
        value: cdktf.stringToHclTerraform(this._poeLldpDetection),
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
      pre_provisioned: {
        value: cdktf.numberToHclTerraform(this._preProvisioned),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ptp_profile: {
        value: cdktf.stringToHclTerraform(this._ptpProfile),
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
      purdue_level: {
        value: cdktf.stringToHclTerraform(this._purdueLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qos_drop_policy: {
        value: cdktf.stringToHclTerraform(this._qosDropPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qos_red_probability: {
        value: cdktf.numberToHclTerraform(this._qosRedProbability),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radius_nas_ip: {
        value: cdktf.stringToHclTerraform(this._radiusNasIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_nas_ip_override: {
        value: cdktf.stringToHclTerraform(this._radiusNasIpOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_offload: {
        value: cdktf.stringToHclTerraform(this._routeOffload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_offload_mclag: {
        value: cdktf.stringToHclTerraform(this._routeOffloadMclag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sn: {
        value: cdktf.stringToHclTerraform(this._sn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      staged_image_version: {
        value: cdktf.stringToHclTerraform(this._stagedImageVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_device_tag: {
        value: cdktf.stringToHclTerraform(this._switchDeviceTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_dhcp_opt43_key: {
        value: cdktf.stringToHclTerraform(this._switchDhcpOpt43Key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_id: {
        value: cdktf.stringToHclTerraform(this._switchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_profile: {
        value: cdktf.stringToHclTerraform(this._switchProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tdr_supported: {
        value: cdktf.stringToHclTerraform(this._tdrSupported),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_discovered: {
        value: cdktf.numberToHclTerraform(this._tunnelDiscovered),
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.numberToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_command: {
        value: cdktf.listMapperHcl(switchcontrollerManagedswitchCustomCommandToHclTerraform, true)(this._customCommand.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchcontrollerManagedswitchCustomCommandList",
      },
      dhcp_snooping_static_client: {
        value: cdktf.listMapperHcl(switchcontrollerManagedswitchDhcpSnoopingStaticClientToHclTerraform, true)(this._dhcpSnoopingStaticClient.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchcontrollerManagedswitchDhcpSnoopingStaticClientList",
      },
      igmp_snooping: {
        value: switchcontrollerManagedswitchIgmpSnoopingToHclTerraform(this._igmpSnooping.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchcontrollerManagedswitchIgmpSnoopingList",
      },
      ip_source_guard: {
        value: cdktf.listMapperHcl(switchcontrollerManagedswitchIpSourceGuardToHclTerraform, true)(this._ipSourceGuard.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchcontrollerManagedswitchIpSourceGuardList",
      },
      mirror: {
        value: cdktf.listMapperHcl(switchcontrollerManagedswitchMirrorToHclTerraform, true)(this._mirror.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchcontrollerManagedswitchMirrorList",
      },
      n802_1x_settings: {
        value: switchcontrollerManagedswitchN8021XSettingsToHclTerraform(this._n8021XSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchcontrollerManagedswitchN8021XSettingsList",
      },
      ports: {
        value: cdktf.listMapperHcl(switchcontrollerManagedswitchPortsToHclTerraform, true)(this._ports.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchcontrollerManagedswitchPortsList",
      },
      remote_log: {
        value: cdktf.listMapperHcl(switchcontrollerManagedswitchRemoteLogToHclTerraform, true)(this._remoteLog.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchcontrollerManagedswitchRemoteLogList",
      },
      route_offload_router: {
        value: cdktf.listMapperHcl(switchcontrollerManagedswitchRouteOffloadRouterToHclTerraform, true)(this._routeOffloadRouter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchcontrollerManagedswitchRouteOffloadRouterList",
      },
      router_static: {
        value: cdktf.listMapperHcl(switchcontrollerManagedswitchRouterStaticToHclTerraform, true)(this._routerStatic.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchcontrollerManagedswitchRouterStaticList",
      },
      router_vrf: {
        value: cdktf.listMapperHcl(switchcontrollerManagedswitchRouterVrfToHclTerraform, true)(this._routerVrf.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchcontrollerManagedswitchRouterVrfList",
      },
      snmp_community: {
        value: cdktf.listMapperHcl(switchcontrollerManagedswitchSnmpCommunityToHclTerraform, true)(this._snmpCommunity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchcontrollerManagedswitchSnmpCommunityList",
      },
      snmp_sysinfo: {
        value: switchcontrollerManagedswitchSnmpSysinfoToHclTerraform(this._snmpSysinfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchcontrollerManagedswitchSnmpSysinfoList",
      },
      snmp_trap_threshold: {
        value: switchcontrollerManagedswitchSnmpTrapThresholdToHclTerraform(this._snmpTrapThreshold.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchcontrollerManagedswitchSnmpTrapThresholdList",
      },
      snmp_user: {
        value: cdktf.listMapperHcl(switchcontrollerManagedswitchSnmpUserToHclTerraform, true)(this._snmpUser.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchcontrollerManagedswitchSnmpUserList",
      },
      static_mac: {
        value: cdktf.listMapperHcl(switchcontrollerManagedswitchStaticMacToHclTerraform, true)(this._staticMac.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchcontrollerManagedswitchStaticMacList",
      },
      storm_control: {
        value: switchcontrollerManagedswitchStormControlToHclTerraform(this._stormControl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchcontrollerManagedswitchStormControlList",
      },
      stp_instance: {
        value: cdktf.listMapperHcl(switchcontrollerManagedswitchStpInstanceToHclTerraform, true)(this._stpInstance.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchcontrollerManagedswitchStpInstanceList",
      },
      stp_settings: {
        value: switchcontrollerManagedswitchStpSettingsToHclTerraform(this._stpSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchcontrollerManagedswitchStpSettingsList",
      },
      switch_log: {
        value: switchcontrollerManagedswitchSwitchLogToHclTerraform(this._switchLog.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchcontrollerManagedswitchSwitchLogList",
      },
      switch_stp_settings: {
        value: switchcontrollerManagedswitchSwitchStpSettingsToHclTerraform(this._switchStpSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchcontrollerManagedswitchSwitchStpSettingsList",
      },
      system_dhcp_server: {
        value: cdktf.listMapperHcl(switchcontrollerManagedswitchSystemDhcpServerToHclTerraform, true)(this._systemDhcpServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchcontrollerManagedswitchSystemDhcpServerList",
      },
      system_interface: {
        value: cdktf.listMapperHcl(switchcontrollerManagedswitchSystemInterfaceToHclTerraform, true)(this._systemInterface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchcontrollerManagedswitchSystemInterfaceList",
      },
      vlan: {
        value: cdktf.listMapperHcl(switchcontrollerManagedswitchVlanToHclTerraform, true)(this._vlan.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchcontrollerManagedswitchVlanList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
