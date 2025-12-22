// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmpServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * String to uniquely identify this chassis
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#chassis_id SnmpServer#chassis_id}
  */
  readonly chassisId?: string;
  /**
  * Text for mib object sysContact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#contact SnmpServer#contact}
  */
  readonly contact?: string;
  /**
  * Create/Delete a context apart from default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#contexts SnmpServer#contexts}
  */
  readonly contexts?: SnmpServerContexts[] | cdktf.IResolvable;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#delete_mode SnmpServer#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#device SnmpServer#device}
  */
  readonly device?: string;
  /**
  * Enable SNMP Informs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_informs SnmpServer#enable_informs}
  */
  readonly enableInforms?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP GET Operation logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_logging_getop SnmpServer#enable_logging_getop}
  */
  readonly enableLoggingGetop?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP SET Operation logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_logging_setop SnmpServer#enable_logging_setop}
  */
  readonly enableLoggingSetop?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP Traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps SnmpServer#enable_traps}
  */
  readonly enableTraps?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP AAA Server traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_aaa_server SnmpServer#enable_traps_aaa_server}
  */
  readonly enableTrapsAaaServer?: boolean | cdktf.IResolvable;
  /**
  * Enable ADSL Line-MIB traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_adslline SnmpServer#enable_traps_adslline}
  */
  readonly enableTrapsAdslline?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_alarm_type SnmpServer#enable_traps_alarm_type}
  */
  readonly enableTrapsAlarmType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_auth_framework_sec_violation SnmpServer#enable_traps_auth_framework_sec_violation}
  */
  readonly enableTrapsAuthFrameworkSecViolation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_bfd SnmpServer#enable_traps_bfd}
  */
  readonly enableTrapsBfd?: boolean | cdktf.IResolvable;
  /**
  * Allow BGP state change traps (OBSOLETE)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_bgp SnmpServer#enable_traps_bgp}
  */
  readonly enableTrapsBgp?: boolean | cdktf.IResolvable;
  /**
  * Enable BGP MIBv2 traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_bgp_cbgp2 SnmpServer#enable_traps_bgp_cbgp2}
  */
  readonly enableTrapsBgpCbgp2?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_bgp_cbgp2_state_changes SnmpServer#enable_traps_bgp_cbgp2_state_changes}
  */
  readonly enableTrapsBgpCbgp2StateChanges?: string[];
  /**
  * CISCO specific trap for prefix threshold events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_bgp_cbgp2_threshold_prefix SnmpServer#enable_traps_bgp_cbgp2_threshold_prefix}
  */
  readonly enableTrapsBgpCbgp2ThresholdPrefix?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_bridge_newroot SnmpServer#enable_traps_bridge_newroot}
  */
  readonly enableTrapsBridgeNewroot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_bridge_topologychange SnmpServer#enable_traps_bridge_topologychange}
  */
  readonly enableTrapsBridgeTopologychange?: boolean | cdktf.IResolvable;
  /**
  * Enable Data-Collection-MIB Collection notifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_bulkstat_collection SnmpServer#enable_traps_bulkstat_collection}
  */
  readonly enableTrapsBulkstatCollection?: boolean | cdktf.IResolvable;
  /**
  * Enable Data-Collection-MIB Transfer notifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_bulkstat_transfer SnmpServer#enable_traps_bulkstat_transfer}
  */
  readonly enableTrapsBulkstatTransfer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_call_home_message_send_fail SnmpServer#enable_traps_call_home_message_send_fail}
  */
  readonly enableTrapsCallHomeMessageSendFail?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_call_home_server_fail SnmpServer#enable_traps_call_home_server_fail}
  */
  readonly enableTrapsCallHomeServerFail?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP casa traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_casa SnmpServer#enable_traps_casa}
  */
  readonly enableTrapsCasa?: boolean | cdktf.IResolvable;
  /**
  * Enable BGP MIBv2 traps (OBSOLETE - please use snmp configuration in Cisco-IOS-XE-bgp.yang)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_cbgp2 SnmpServer#enable_traps_cbgp2}
  */
  readonly enableTrapsCbgp2?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_cef_inconsistency SnmpServer#enable_traps_cef_inconsistency}
  */
  readonly enableTrapsCefInconsistency?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_cef_peer_fib_state_change SnmpServer#enable_traps_cef_peer_fib_state_change}
  */
  readonly enableTrapsCefPeerFibStateChange?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_cef_peer_state_change SnmpServer#enable_traps_cef_peer_state_change}
  */
  readonly enableTrapsCefPeerStateChange?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_cef_resource_failure SnmpServer#enable_traps_cef_resource_failure}
  */
  readonly enableTrapsCefResourceFailure?: boolean | cdktf.IResolvable;
  /**
  * Enable NBAR Protocol Discovery traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_cnpd SnmpServer#enable_traps_cnpd}
  */
  readonly enableTrapsCnpd?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP config traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_config SnmpServer#enable_traps_config}
  */
  readonly enableTrapsConfig?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP config-copy traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_config_copy SnmpServer#enable_traps_config_copy}
  */
  readonly enableTrapsConfigCopy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_config_ctid SnmpServer#enable_traps_config_ctid}
  */
  readonly enableTrapsConfigCtid?: boolean | cdktf.IResolvable;
  /**
  * Allow CPU utilization threshold violation traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_cpu_threshold SnmpServer#enable_traps_cpu_threshold}
  */
  readonly enableTrapsCpuThreshold?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP dhcp traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_dhcp SnmpServer#enable_traps_dhcp}
  */
  readonly enableTrapsDhcp?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP dial control traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_dial SnmpServer#enable_traps_dial}
  */
  readonly enableTrapsDial?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP dlsw traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_dlsw SnmpServer#enable_traps_dlsw}
  */
  readonly enableTrapsDlsw?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP DS1 traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_ds1 SnmpServer#enable_traps_ds1}
  */
  readonly enableTrapsDs1?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP card status of dsp traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_dsp_card_status SnmpServer#enable_traps_dsp_card_status}
  */
  readonly enableTrapsDspCardStatus?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_dsp_oper_state SnmpServer#enable_traps_dsp_oper_state}
  */
  readonly enableTrapsDspOperState?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP EIGRP traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_eigrp SnmpServer#enable_traps_eigrp}
  */
  readonly enableTrapsEigrp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_energywise SnmpServer#enable_traps_energywise}
  */
  readonly enableTrapsEnergywise?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP entity traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_entity SnmpServer#enable_traps_entity}
  */
  readonly enableTrapsEntity?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP ceDiagBootUpFailedNotif traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_entity_diag_boot_up_fail SnmpServer#enable_traps_entity_diag_boot_up_fail}
  */
  readonly enableTrapsEntityDiagBootUpFail?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP ceDiagHMTestRecoverNotif traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_entity_diag_hm_test_recover SnmpServer#enable_traps_entity_diag_hm_test_recover}
  */
  readonly enableTrapsEntityDiagHmTestRecover?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP ceDiagHMThresholdReachedNotif traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_entity_diag_hm_thresh_reached SnmpServer#enable_traps_entity_diag_hm_thresh_reached}
  */
  readonly enableTrapsEntityDiagHmThreshReached?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP ceDiagScheduledTestFailedNotif traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_entity_diag_scheduled_test_fail SnmpServer#enable_traps_entity_diag_scheduled_test_fail}
  */
  readonly enableTrapsEntityDiagScheduledTestFail?: boolean | cdktf.IResolvable;
  /**
  * Enable ENTITY PERFORMANCE MIB throughput traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_entity_perf_throughput_notif SnmpServer#enable_traps_entity_perf_throughput_notif}
  */
  readonly enableTrapsEntityPerfThroughputNotif?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP ENTITY-QFP MEM-RES-THRESH notifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_entity_qfp_mem_res_thresh SnmpServer#enable_traps_entity_qfp_mem_res_thresh}
  */
  readonly enableTrapsEntityQfpMemResThresh?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP ENTITY-QFP THROUGHPUT-NOTIF notifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_entity_qfp_throughput_notif SnmpServer#enable_traps_entity_qfp_throughput_notif}
  */
  readonly enableTrapsEntityQfpThroughputNotif?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP entity-sensor traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_entity_sensor SnmpServer#enable_traps_entity_sensor}
  */
  readonly enableTrapsEntitySensor?: boolean | cdktf.IResolvable;
  /**
  * Allow SNMP entity-state traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_entity_state SnmpServer#enable_traps_entity_state}
  */
  readonly enableTrapsEntityState?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP environmental monitor traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_envmon SnmpServer#enable_traps_envmon}
  */
  readonly enableTrapsEnvmon?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP errdisable notifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_errdisable SnmpServer#enable_traps_errdisable}
  */
  readonly enableTrapsErrdisable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_ether_oam SnmpServer#enable_traps_ether_oam}
  */
  readonly enableTrapsEtherOam?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP Ethernet CFM fault alarm trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_ethernet_cfm_alarm SnmpServer#enable_traps_ethernet_cfm_alarm}
  */
  readonly enableTrapsEthernetCfmAlarm?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_ethernet_cfm_cc_config SnmpServer#enable_traps_ethernet_cfm_cc_config}
  */
  readonly enableTrapsEthernetCfmCcConfig?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_ethernet_cfm_cc_cross_connect SnmpServer#enable_traps_ethernet_cfm_cc_cross_connect}
  */
  readonly enableTrapsEthernetCfmCcCrossConnect?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_ethernet_cfm_cc_loop SnmpServer#enable_traps_ethernet_cfm_cc_loop}
  */
  readonly enableTrapsEthernetCfmCcLoop?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_ethernet_cfm_cc_mep_down SnmpServer#enable_traps_ethernet_cfm_cc_mep_down}
  */
  readonly enableTrapsEthernetCfmCcMepDown?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_ethernet_cfm_cc_mep_up SnmpServer#enable_traps_ethernet_cfm_cc_mep_up}
  */
  readonly enableTrapsEthernetCfmCcMepUp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_ethernet_cfm_crosscheck_mep_missing SnmpServer#enable_traps_ethernet_cfm_crosscheck_mep_missing}
  */
  readonly enableTrapsEthernetCfmCrosscheckMepMissing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_ethernet_cfm_crosscheck_mep_unknown SnmpServer#enable_traps_ethernet_cfm_crosscheck_mep_unknown}
  */
  readonly enableTrapsEthernetCfmCrosscheckMepUnknown?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_ethernet_cfm_crosscheck_service_up SnmpServer#enable_traps_ethernet_cfm_crosscheck_service_up}
  */
  readonly enableTrapsEthernetCfmCrosscheckServiceUp?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP Ethernet EVC create traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_ethernet_evc_create SnmpServer#enable_traps_ethernet_evc_create}
  */
  readonly enableTrapsEthernetEvcCreate?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP Ethernet EVC delete traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_ethernet_evc_delete SnmpServer#enable_traps_ethernet_evc_delete}
  */
  readonly enableTrapsEthernetEvcDelete?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP Ethernet EVC status traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_ethernet_evc_status SnmpServer#enable_traps_ethernet_evc_status}
  */
  readonly enableTrapsEthernetEvcStatus?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP Embedded Event Manager traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_event_manager SnmpServer#enable_traps_event_manager}
  */
  readonly enableTrapsEventManager?: boolean | cdktf.IResolvable;
  /**
  * Enable MPLS fast reroute protection traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_fast_reroute_protected SnmpServer#enable_traps_fast_reroute_protected}
  */
  readonly enableTrapsFastRerouteProtected?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_firewall_serverstatus SnmpServer#enable_traps_firewall_serverstatus}
  */
  readonly enableTrapsFirewallServerstatus?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP Flash Insertion notifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_flash_insertion SnmpServer#enable_traps_flash_insertion}
  */
  readonly enableTrapsFlashInsertion?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP Flash Lowspace notifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_flash_lowspace SnmpServer#enable_traps_flash_lowspace}
  */
  readonly enableTrapsFlashLowspace?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP Flash Removal notifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_flash_removal SnmpServer#enable_traps_flash_removal}
  */
  readonly enableTrapsFlashRemoval?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP flowmon notifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_flowmon SnmpServer#enable_traps_flowmon}
  */
  readonly enableTrapsFlowmon?: boolean | cdktf.IResolvable;
  /**
  * Enable MFR trap for inconsistent bundle event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_frame_relay_config_bundle_mismatch SnmpServer#enable_traps_frame_relay_config_bundle_mismatch}
  */
  readonly enableTrapsFrameRelayConfigBundleMismatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_frame_relay_config_only SnmpServer#enable_traps_frame_relay_config_only}
  */
  readonly enableTrapsFrameRelayConfigOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_frame_relay_config_subif_configs SnmpServer#enable_traps_frame_relay_config_subif_configs}
  */
  readonly enableTrapsFrameRelayConfigSubifConfigs?: boolean | cdktf.IResolvable;
  /**
  * Enable MFR trap for inconsistent bundle event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_frame_relay_multilink_bundle_mismatch SnmpServer#enable_traps_frame_relay_multilink_bundle_mismatch}
  */
  readonly enableTrapsFrameRelayMultilinkBundleMismatch?: boolean | cdktf.IResolvable;
  /**
  * Maximum number of traps sent per interval
  *   - Range: `1`-`1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_frame_relay_subif_count SnmpServer#enable_traps_frame_relay_subif_count}
  */
  readonly enableTrapsFrameRelaySubifCount?: number;
  /**
  * Interval duration in which to limit the number of traps sent
  *   - Range: `1`-`3600`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_frame_relay_subif_interval SnmpServer#enable_traps_frame_relay_subif_interval}
  */
  readonly enableTrapsFrameRelaySubifInterval?: number;
  /**
  * Enable SNMP entity FRU control traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_fru_ctrl SnmpServer#enable_traps_fru_ctrl}
  */
  readonly enableTrapsFruCtrl?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP HSRP traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_hsrp SnmpServer#enable_traps_hsrp}
  */
  readonly enableTrapsHsrp?: boolean | cdktf.IResolvable;
  /**
  * Enable IKE Policy add trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_ike_policy_add SnmpServer#enable_traps_ike_policy_add}
  */
  readonly enableTrapsIkePolicyAdd?: boolean | cdktf.IResolvable;
  /**
  * Enable IKE Policy delete trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_ike_policy_delete SnmpServer#enable_traps_ike_policy_delete}
  */
  readonly enableTrapsIkePolicyDelete?: boolean | cdktf.IResolvable;
  /**
  * Enable IKE Tunnel start trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_ike_tunnel_start SnmpServer#enable_traps_ike_tunnel_start}
  */
  readonly enableTrapsIkeTunnelStart?: boolean | cdktf.IResolvable;
  /**
  * Enable IKE Tunnel stop trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_ike_tunnel_stop SnmpServer#enable_traps_ike_tunnel_stop}
  */
  readonly enableTrapsIkeTunnelStop?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP IP LOCAL POOL traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_ip_local_pool SnmpServer#enable_traps_ip_local_pool}
  */
  readonly enableTrapsIpLocalPool?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP ipmulticast traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_ipmulticast SnmpServer#enable_traps_ipmulticast}
  */
  readonly enableTrapsIpmulticast?: boolean | cdktf.IResolvable;
  /**
  * Enable IPsec Cryptomap add trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_ipsec_cryptomap_add SnmpServer#enable_traps_ipsec_cryptomap_add}
  */
  readonly enableTrapsIpsecCryptomapAdd?: boolean | cdktf.IResolvable;
  /**
  * Enable IPsec Cryptomap Attach trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_ipsec_cryptomap_attach SnmpServer#enable_traps_ipsec_cryptomap_attach}
  */
  readonly enableTrapsIpsecCryptomapAttach?: boolean | cdktf.IResolvable;
  /**
  * Enable IPsec Cryptomap delete trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_ipsec_cryptomap_delete SnmpServer#enable_traps_ipsec_cryptomap_delete}
  */
  readonly enableTrapsIpsecCryptomapDelete?: boolean | cdktf.IResolvable;
  /**
  * Enable IPsec Cryptomap Detach trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_ipsec_cryptomap_detach SnmpServer#enable_traps_ipsec_cryptomap_detach}
  */
  readonly enableTrapsIpsecCryptomapDetach?: boolean | cdktf.IResolvable;
  /**
  * Enable IPsec Tunnel Start trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_ipsec_too_many_sas SnmpServer#enable_traps_ipsec_too_many_sas}
  */
  readonly enableTrapsIpsecTooManySas?: boolean | cdktf.IResolvable;
  /**
  * Enable IPsec Tunnel Start trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_ipsec_tunnel_start SnmpServer#enable_traps_ipsec_tunnel_start}
  */
  readonly enableTrapsIpsecTunnelStart?: boolean | cdktf.IResolvable;
  /**
  * Enable IPsec Tunnel Stop trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_ipsec_tunnel_stop SnmpServer#enable_traps_ipsec_tunnel_stop}
  */
  readonly enableTrapsIpsecTunnelStop?: boolean | cdktf.IResolvable;
  /**
  * Enable IPSLA traps traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_ipsla SnmpServer#enable_traps_ipsla}
  */
  readonly enableTrapsIpsla?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP isdn call information traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_isdn_call_information SnmpServer#enable_traps_isdn_call_information}
  */
  readonly enableTrapsIsdnCallInformation?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP isdn channel not avail traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_isdn_chan_not_avail SnmpServer#enable_traps_isdn_chan_not_avail}
  */
  readonly enableTrapsIsdnChanNotAvail?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP isdn ietf traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_isdn_ietf SnmpServer#enable_traps_isdn_ietf}
  */
  readonly enableTrapsIsdnIetf?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP isdn layer2 transition traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_isdn_layer2 SnmpServer#enable_traps_isdn_layer2}
  */
  readonly enableTrapsIsdnLayer2?: boolean | cdktf.IResolvable;
  /**
  * Enable ISIS traps traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_isis SnmpServer#enable_traps_isis}
  */
  readonly enableTrapsIsis?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_l2tun_pseudowire_status SnmpServer#enable_traps_l2tun_pseudowire_status}
  */
  readonly enableTrapsL2TunPseudowireStatus?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP l2tun session traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_l2tun_session SnmpServer#enable_traps_l2tun_session}
  */
  readonly enableTrapsL2TunSession?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP l2tun tunnel traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_l2tun_tunnel SnmpServer#enable_traps_l2tun_tunnel}
  */
  readonly enableTrapsL2TunTunnel?: boolean | cdktf.IResolvable;
  /**
  * Enable license traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_license SnmpServer#enable_traps_license}
  */
  readonly enableTrapsLicense?: boolean | cdktf.IResolvable;
  /**
  * Allow SNMP LISP MIB traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_lisp SnmpServer#enable_traps_lisp}
  */
  readonly enableTrapsLisp?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP local auth traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_local_auth SnmpServer#enable_traps_local_auth}
  */
  readonly enableTrapsLocalAuth?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP Change traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_mac_notification_change SnmpServer#enable_traps_mac_notification_change}
  */
  readonly enableTrapsMacNotificationChange?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP Move traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_mac_notification_move SnmpServer#enable_traps_mac_notification_move}
  */
  readonly enableTrapsMacNotificationMove?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP Threshold traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_mac_notification_threshold SnmpServer#enable_traps_mac_notification_threshold}
  */
  readonly enableTrapsMacNotificationThreshold?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP Memory Bufferpeak traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_memory_bufferpeak SnmpServer#enable_traps_memory_bufferpeak}
  */
  readonly enableTrapsMemoryBufferpeak?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP MPLS traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_mpls SnmpServer#enable_traps_mpls}
  */
  readonly enableTrapsMpls?: boolean | cdktf.IResolvable;
  /**
  * Allow SNMP MPLS label distribution protocol traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_mpls_ldp SnmpServer#enable_traps_mpls_ldp}
  */
  readonly enableTrapsMplsLdp?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP MPLS RFC traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_mpls_rfc SnmpServer#enable_traps_mpls_rfc}
  */
  readonly enableTrapsMplsRfc?: boolean | cdktf.IResolvable;
  /**
  * Allow SNMP MPLS label distribution protocol RFC traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_mpls_rfc_ldp SnmpServer#enable_traps_mpls_rfc_ldp}
  */
  readonly enableTrapsMplsRfcLdp?: boolean | cdktf.IResolvable;
  /**
  * Allow SNMP MPLS traffic engineering traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_mpls_traffic_eng SnmpServer#enable_traps_mpls_traffic_eng}
  */
  readonly enableTrapsMplsTrafficEng?: boolean | cdktf.IResolvable;
  /**
  * Allow SNMP MPLS Virtual Private Network traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_mpls_vpn SnmpServer#enable_traps_mpls_vpn}
  */
  readonly enableTrapsMplsVpn?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP MSDP traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_msdp SnmpServer#enable_traps_msdp}
  */
  readonly enableTrapsMsdp?: boolean | cdktf.IResolvable;
  /**
  * Enable Multicast Virtual Private Networks traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_mvpn SnmpServer#enable_traps_mvpn}
  */
  readonly enableTrapsMvpn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_nhrp_nhc SnmpServer#enable_traps_nhrp_nhc}
  */
  readonly enableTrapsNhrpNhc?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_nhrp_nhp SnmpServer#enable_traps_nhrp_nhp}
  */
  readonly enableTrapsNhrpNhp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_nhrp_nhs SnmpServer#enable_traps_nhrp_nhs}
  */
  readonly enableTrapsNhrpNhs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_nhrp_quota_exceeded SnmpServer#enable_traps_nhrp_quota_exceeded}
  */
  readonly enableTrapsNhrpQuotaExceeded?: boolean | cdktf.IResolvable;
  /**
  * Enable all traps of errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_ospf_config_errors SnmpServer#enable_traps_ospf_config_errors}
  */
  readonly enableTrapsOspfConfigErrors?: boolean | cdktf.IResolvable;
  /**
  * Enable all traps of lsa
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_ospf_config_lsa SnmpServer#enable_traps_ospf_config_lsa}
  */
  readonly enableTrapsOspfConfigLsa?: boolean | cdktf.IResolvable;
  /**
  * Enable all traps of retransmit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_ospf_config_retransmit SnmpServer#enable_traps_ospf_config_retransmit}
  */
  readonly enableTrapsOspfConfigRetransmit?: boolean | cdktf.IResolvable;
  /**
  * Enable all traps of state-change
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_ospf_config_state_change SnmpServer#enable_traps_ospf_config_state_change}
  */
  readonly enableTrapsOspfConfigStateChange?: boolean | cdktf.IResolvable;
  /**
  * Enable all traps of errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_ospf_errors_enable SnmpServer#enable_traps_ospf_errors_enable}
  */
  readonly enableTrapsOspfErrorsEnable?: boolean | cdktf.IResolvable;
  /**
  * Enable all traps of lsa
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_ospf_lsa_enable SnmpServer#enable_traps_ospf_lsa_enable}
  */
  readonly enableTrapsOspfLsaEnable?: boolean | cdktf.IResolvable;
  /**
  * Nssa translator state changes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_ospf_nssa_trans_change SnmpServer#enable_traps_ospf_nssa_trans_change}
  */
  readonly enableTrapsOspfNssaTransChange?: boolean | cdktf.IResolvable;
  /**
  * Enable all traps of retransmit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_ospf_retransmit_enable SnmpServer#enable_traps_ospf_retransmit_enable}
  */
  readonly enableTrapsOspfRetransmitEnable?: boolean | cdktf.IResolvable;
  /**
  * Sham link interface state changes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_ospf_shamlink_interface SnmpServer#enable_traps_ospf_shamlink_interface}
  */
  readonly enableTrapsOspfShamlinkInterface?: boolean | cdktf.IResolvable;
  /**
  * Sham link neighbor state changes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_ospf_shamlink_neighbor SnmpServer#enable_traps_ospf_shamlink_neighbor}
  */
  readonly enableTrapsOspfShamlinkNeighbor?: boolean | cdktf.IResolvable;
  /**
  * Enable all traps of errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_ospfv3_config_errors SnmpServer#enable_traps_ospfv3_config_errors}
  */
  readonly enableTrapsOspfv3ConfigErrors?: boolean | cdktf.IResolvable;
  /**
  * Enable all traps of state-change
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_ospfv3_config_state_change SnmpServer#enable_traps_ospfv3_config_state_change}
  */
  readonly enableTrapsOspfv3ConfigStateChange?: boolean | cdktf.IResolvable;
  /**
  * Error traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_ospfv3_errors SnmpServer#enable_traps_ospfv3_errors}
  */
  readonly enableTrapsOspfv3Errors?: boolean | cdktf.IResolvable;
  /**
  * State change traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_ospfv3_state_change SnmpServer#enable_traps_ospfv3_state_change}
  */
  readonly enableTrapsOspfv3StateChange?: boolean | cdktf.IResolvable;
  /**
  * Allow SNMP PFR traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_pfr SnmpServer#enable_traps_pfr}
  */
  readonly enableTrapsPfr?: boolean | cdktf.IResolvable;
  /**
  * Enable invalid pim message trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_pim_invalid_pim_message SnmpServer#enable_traps_pim_invalid_pim_message}
  */
  readonly enableTrapsPimInvalidPimMessage?: boolean | cdktf.IResolvable;
  /**
  * Enable neighbor change trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_pim_neighbor_change SnmpServer#enable_traps_pim_neighbor_change}
  */
  readonly enableTrapsPimNeighborChange?: boolean | cdktf.IResolvable;
  /**
  * Enable rp mapping change trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_pim_rp_mapping_change SnmpServer#enable_traps_pim_rp_mapping_change}
  */
  readonly enableTrapsPimRpMappingChange?: boolean | cdktf.IResolvable;
  /**
  * Enable interface-election traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_pimstdmib_interface_election SnmpServer#enable_traps_pimstdmib_interface_election}
  */
  readonly enableTrapsPimstdmibInterfaceElection?: boolean | cdktf.IResolvable;
  /**
  * Enable invalid-join-prune traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_pimstdmib_invalid_join_prune SnmpServer#enable_traps_pimstdmib_invalid_join_prune}
  */
  readonly enableTrapsPimstdmibInvalidJoinPrune?: boolean | cdktf.IResolvable;
  /**
  * Enable invalid-register traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_pimstdmib_invalid_register SnmpServer#enable_traps_pimstdmib_invalid_register}
  */
  readonly enableTrapsPimstdmibInvalidRegister?: boolean | cdktf.IResolvable;
  /**
  * Enable neighbor-loss traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_pimstdmib_neighbor_loss SnmpServer#enable_traps_pimstdmib_neighbor_loss}
  */
  readonly enableTrapsPimstdmibNeighborLoss?: boolean | cdktf.IResolvable;
  /**
  * Enable invalid rp-mapping-change
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_pimstdmib_rp_mapping_change SnmpServer#enable_traps_pimstdmib_rp_mapping_change}
  */
  readonly enableTrapsPimstdmibRpMappingChange?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP PKI Traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_pki SnmpServer#enable_traps_pki}
  */
  readonly enableTrapsPki?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP port security traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_port_security SnmpServer#enable_traps_port_security}
  */
  readonly enableTrapsPortSecurity?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP inline power group based traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_power_ethernet_group SnmpServer#enable_traps_power_ethernet_group}
  */
  readonly enableTrapsPowerEthernetGroup?: string;
  /**
  * Enable Policing Trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_power_ethernet_police SnmpServer#enable_traps_power_ethernet_police}
  */
  readonly enableTrapsPowerEthernetPolice?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP pppoe traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_pppoe SnmpServer#enable_traps_pppoe}
  */
  readonly enableTrapsPppoe?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_pw_vc SnmpServer#enable_traps_pw_vc}
  */
  readonly enableTrapsPwVc?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_rep SnmpServer#enable_traps_rep}
  */
  readonly enableTrapsRep?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_resource_policy SnmpServer#enable_traps_resource_policy}
  */
  readonly enableTrapsResourcePolicy?: boolean | cdktf.IResolvable;
  /**
  * Enable all SNMP traps defined in CISCO-RF-MIB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_rf SnmpServer#enable_traps_rf}
  */
  readonly enableTrapsRf?: boolean | cdktf.IResolvable;
  /**
  * Enable RSVP flow change traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_rsvp SnmpServer#enable_traps_rsvp}
  */
  readonly enableTrapsRsvp?: boolean | cdktf.IResolvable;
  /**
  * Enable smart license traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_smart_license SnmpServer#enable_traps_smart_license}
  */
  readonly enableTrapsSmartLicense?: boolean | cdktf.IResolvable;
  /**
  * Enable authentication trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_snmp_authentication SnmpServer#enable_traps_snmp_authentication}
  */
  readonly enableTrapsSnmpAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Enable coldStart trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_snmp_coldstart SnmpServer#enable_traps_snmp_coldstart}
  */
  readonly enableTrapsSnmpColdstart?: boolean | cdktf.IResolvable;
  /**
  * Enable linkDown trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_snmp_linkdown SnmpServer#enable_traps_snmp_linkdown}
  */
  readonly enableTrapsSnmpLinkdown?: boolean | cdktf.IResolvable;
  /**
  * Enable linkUp trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_snmp_linkup SnmpServer#enable_traps_snmp_linkup}
  */
  readonly enableTrapsSnmpLinkup?: boolean | cdktf.IResolvable;
  /**
  * Enable warmStart trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_snmp_warmstart SnmpServer#enable_traps_snmp_warmstart}
  */
  readonly enableTrapsSnmpWarmstart?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP SONET traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_sonet SnmpServer#enable_traps_sonet}
  */
  readonly enableTrapsSonet?: boolean | cdktf.IResolvable;
  /**
  * Enable SRP protocol traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_srp SnmpServer#enable_traps_srp}
  */
  readonly enableTrapsSrp?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP stackwise traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_stackwise SnmpServer#enable_traps_stackwise}
  */
  readonly enableTrapsStackwise?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_stpx_inconsistency SnmpServer#enable_traps_stpx_inconsistency}
  */
  readonly enableTrapsStpxInconsistency?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_stpx_loop_inconsistency SnmpServer#enable_traps_stpx_loop_inconsistency}
  */
  readonly enableTrapsStpxLoopInconsistency?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_stpx_root_inconsistency SnmpServer#enable_traps_stpx_root_inconsistency}
  */
  readonly enableTrapsStpxRootInconsistency?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP syslog traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_syslog SnmpServer#enable_traps_syslog}
  */
  readonly enableTrapsSyslog?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_transceiver_all SnmpServer#enable_traps_transceiver_all}
  */
  readonly enableTrapsTransceiverAll?: boolean | cdktf.IResolvable;
  /**
  * Enable TCP connection traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_tty SnmpServer#enable_traps_tty}
  */
  readonly enableTrapsTty?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP cudldpFastHelloLinkFailRptNotification traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_udld_link_fail_rpt SnmpServer#enable_traps_udld_link_fail_rpt}
  */
  readonly enableTrapsUdldLinkFailRpt?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP cudldpFastHelloStatusChangeNotification traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_udld_status_change SnmpServer#enable_traps_udld_status_change}
  */
  readonly enableTrapsUdldStatusChange?: boolean | cdktf.IResolvable;
  /**
  * Enable VDSL2 Line-MIB traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_vdsl2line SnmpServer#enable_traps_vdsl2line}
  */
  readonly enableTrapsVdsl2Line?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_vlan_membership SnmpServer#enable_traps_vlan_membership}
  */
  readonly enableTrapsVlanMembership?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_vlancreate SnmpServer#enable_traps_vlancreate}
  */
  readonly enableTrapsVlancreate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_vlandelete SnmpServer#enable_traps_vlandelete}
  */
  readonly enableTrapsVlandelete?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP voice traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_voice SnmpServer#enable_traps_voice}
  */
  readonly enableTrapsVoice?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_vrfmib_vnet_trunk_down SnmpServer#enable_traps_vrfmib_vnet_trunk_down}
  */
  readonly enableTrapsVrfmibVnetTrunkDown?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_vrfmib_vnet_trunk_up SnmpServer#enable_traps_vrfmib_vnet_trunk_up}
  */
  readonly enableTrapsVrfmibVnetTrunkUp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_vrfmib_vrf_down SnmpServer#enable_traps_vrfmib_vrf_down}
  */
  readonly enableTrapsVrfmibVrfDown?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_vrfmib_vrf_up SnmpServer#enable_traps_vrfmib_vrf_up}
  */
  readonly enableTrapsVrfmibVrfUp?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP vrrp traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_vrrp SnmpServer#enable_traps_vrrp}
  */
  readonly enableTrapsVrrp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#enable_traps_vtp SnmpServer#enable_traps_vtp}
  */
  readonly enableTrapsVtp?: boolean | cdktf.IResolvable;
  /**
  * Define a User Security Model group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#groups SnmpServer#groups}
  */
  readonly groups?: SnmpServerGroups[] | cdktf.IResolvable;
  /**
  * Specify hosts keyed by (ip-address, community-or-user)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#hosts SnmpServer#hosts}
  */
  readonly hosts?: SnmpServerHosts[] | cdktf.IResolvable;
  /**
  * Persist interface indices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#ifindex_persist SnmpServer#ifindex_persist}
  */
  readonly ifindexPersist?: boolean | cdktf.IResolvable;
  /**
  * Text for mib object sysLocation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#location SnmpServer#location}
  */
  readonly location?: string;
  /**
  * Largest SNMP packet size
  *   - Range: `484`-`17892`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#packetsize SnmpServer#packetsize}
  */
  readonly packetsize?: number;
  /**
  * Message queue length for each TRAP host
  *   - Range: `1`-`5000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#queue_length SnmpServer#queue_length}
  */
  readonly queueLength?: number;
  /**
  * Enable SNMP; set community string and access privs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#snmp_communities SnmpServer#snmp_communities}
  */
  readonly snmpCommunities?: SnmpServerSnmpCommunities[] | cdktf.IResolvable;
  /**
  * Forty GigabitEthernet 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#source_interface_informs_forty_gigabit_ethernet SnmpServer#source_interface_informs_forty_gigabit_ethernet}
  */
  readonly sourceInterfaceInformsFortyGigabitEthernet?: string;
  /**
  * GigabitEthernet IEEE 802.3z
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#source_interface_informs_gigabit_ethernet SnmpServer#source_interface_informs_gigabit_ethernet}
  */
  readonly sourceInterfaceInformsGigabitEthernet?: string;
  /**
  * Hundred GigabitEthernet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#source_interface_informs_hundred_gig_e SnmpServer#source_interface_informs_hundred_gig_e}
  */
  readonly sourceInterfaceInformsHundredGigE?: string;
  /**
  * Loopback interface
  *   - Range: `0`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#source_interface_informs_loopback SnmpServer#source_interface_informs_loopback}
  */
  readonly sourceInterfaceInformsLoopback?: number;
  /**
  * Ethernet Channel of interfaces
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#source_interface_informs_port_channel SnmpServer#source_interface_informs_port_channel}
  */
  readonly sourceInterfaceInformsPortChannel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#source_interface_informs_port_channel_subinterface SnmpServer#source_interface_informs_port_channel_subinterface}
  */
  readonly sourceInterfaceInformsPortChannelSubinterface?: string;
  /**
  * Ten Gigabit Ethernet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#source_interface_informs_ten_gigabit_ethernet SnmpServer#source_interface_informs_ten_gigabit_ethernet}
  */
  readonly sourceInterfaceInformsTenGigabitEthernet?: string;
  /**
  * Iosxr Vlans
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#source_interface_informs_vlan SnmpServer#source_interface_informs_vlan}
  */
  readonly sourceInterfaceInformsVlan?: number;
  /**
  * Forty GigabitEthernet 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#source_interface_traps_forty_gigabit_ethernet SnmpServer#source_interface_traps_forty_gigabit_ethernet}
  */
  readonly sourceInterfaceTrapsFortyGigabitEthernet?: string;
  /**
  * GigabitEthernet IEEE 802.3z
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#source_interface_traps_gigabit_ethernet SnmpServer#source_interface_traps_gigabit_ethernet}
  */
  readonly sourceInterfaceTrapsGigabitEthernet?: string;
  /**
  * Hundred GigabitEthernet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#source_interface_traps_hundred_gig_e SnmpServer#source_interface_traps_hundred_gig_e}
  */
  readonly sourceInterfaceTrapsHundredGigE?: string;
  /**
  * Loopback interface
  *   - Range: `0`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#source_interface_traps_loopback SnmpServer#source_interface_traps_loopback}
  */
  readonly sourceInterfaceTrapsLoopback?: number;
  /**
  * Ethernet Channel of interfaces
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#source_interface_traps_port_channel SnmpServer#source_interface_traps_port_channel}
  */
  readonly sourceInterfaceTrapsPortChannel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#source_interface_traps_port_channel_subinterface SnmpServer#source_interface_traps_port_channel_subinterface}
  */
  readonly sourceInterfaceTrapsPortChannelSubinterface?: string;
  /**
  * Ten Gigabit Ethernet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#source_interface_traps_ten_gigabit_ethernet SnmpServer#source_interface_traps_ten_gigabit_ethernet}
  */
  readonly sourceInterfaceTrapsTenGigabitEthernet?: string;
  /**
  * Iosxr Vlans
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#source_interface_traps_vlan SnmpServer#source_interface_traps_vlan}
  */
  readonly sourceInterfaceTrapsVlan?: number;
  /**
  * Enable use of the SNMP reload command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#system_shutdown SnmpServer#system_shutdown}
  */
  readonly systemShutdown?: boolean | cdktf.IResolvable;
  /**
  * Forty GigabitEthernet 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#trap_source_forty_gigabit_ethernet SnmpServer#trap_source_forty_gigabit_ethernet}
  */
  readonly trapSourceFortyGigabitEthernet?: string;
  /**
  * GigabitEthernet IEEE 802.3z
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#trap_source_gigabit_ethernet SnmpServer#trap_source_gigabit_ethernet}
  */
  readonly trapSourceGigabitEthernet?: string;
  /**
  * Hundred GigabitEthernet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#trap_source_hundred_gig_e SnmpServer#trap_source_hundred_gig_e}
  */
  readonly trapSourceHundredGigE?: string;
  /**
  * Loopback interface
  *   - Range: `0`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#trap_source_loopback SnmpServer#trap_source_loopback}
  */
  readonly trapSourceLoopback?: number;
  /**
  * Ethernet Channel of interfaces
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#trap_source_port_channel SnmpServer#trap_source_port_channel}
  */
  readonly trapSourcePortChannel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#trap_source_port_channel_subinterface SnmpServer#trap_source_port_channel_subinterface}
  */
  readonly trapSourcePortChannelSubinterface?: string;
  /**
  * Ten Gigabit Ethernet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#trap_source_ten_gigabit_ethernet SnmpServer#trap_source_ten_gigabit_ethernet}
  */
  readonly trapSourceTenGigabitEthernet?: string;
  /**
  * Iosxr Vlans
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#trap_source_vlan SnmpServer#trap_source_vlan}
  */
  readonly trapSourceVlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#users SnmpServer#users}
  */
  readonly users?: SnmpServerUsers[] | cdktf.IResolvable;
  /**
  * Define an SNMPv2 MIB view
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#views SnmpServer#views}
  */
  readonly views?: SnmpServerViews[] | cdktf.IResolvable;
  /**
  * Specify hosts keyed by (ip-address, vrf, community-or-user)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#vrf_hosts SnmpServer#vrf_hosts}
  */
  readonly vrfHosts?: SnmpServerVrfHosts[] | cdktf.IResolvable;
}
export interface SnmpServerContexts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#name SnmpServer#name}
  */
  readonly name: string;
}

export function snmpServerContextsToTerraform(struct?: SnmpServerContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function snmpServerContextsToHclTerraform(struct?: SnmpServerContexts | cdktf.IResolvable): any {
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

export class SnmpServerContextsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SnmpServerContexts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SnmpServerContexts | cdktf.IResolvable | undefined) {
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
}

export class SnmpServerContextsList extends cdktf.ComplexList {
  public internalValue? : SnmpServerContexts[] | cdktf.IResolvable

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
  public get(index: number): SnmpServerContextsOutputReference {
    return new SnmpServerContextsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SnmpServerGroupsV3Security {
  /**
  * Access-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#access_acl_name SnmpServer#access_acl_name}
  */
  readonly accessAclName?: string;
  /**
  * Specify IPv6 Named Access-List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#access_ipv6_acl SnmpServer#access_ipv6_acl}
  */
  readonly accessIpv6Acl?: string;
  /**
  * Standard IP Access-list allowing access with this community string
  *   - Range: `1`-`99`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#access_standard_acl SnmpServer#access_standard_acl}
  */
  readonly accessStandardAcl?: number;
  /**
  * DEPRECATED specify a context to associate these views for the group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#context_node SnmpServer#context_node}
  */
  readonly contextNode?: string;
  /**
  * DEPRECATED context name match criteria
  *   - Choices: `exact`, `prefix`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#match_node SnmpServer#match_node}
  */
  readonly matchNode?: string;
  /**
  * DEPRECATED specify a notify view for the group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#notify_node SnmpServer#notify_node}
  */
  readonly notifyNode?: string;
  /**
  * DEPRECATED specify a read view for the group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#read_node SnmpServer#read_node}
  */
  readonly readNode?: string;
  /**
  * DEPRECATED security level type
  *   - Choices: `auth`, `noauth`, `priv`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#security_level SnmpServer#security_level}
  */
  readonly securityLevel: string;
  /**
  * DEPRECATED specify a write view for the group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#write_node SnmpServer#write_node}
  */
  readonly writeNode?: string;
}

export function snmpServerGroupsV3SecurityToTerraform(struct?: SnmpServerGroupsV3Security | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_acl_name: cdktf.stringToTerraform(struct!.accessAclName),
    access_ipv6_acl: cdktf.stringToTerraform(struct!.accessIpv6Acl),
    access_standard_acl: cdktf.numberToTerraform(struct!.accessStandardAcl),
    context_node: cdktf.stringToTerraform(struct!.contextNode),
    match_node: cdktf.stringToTerraform(struct!.matchNode),
    notify_node: cdktf.stringToTerraform(struct!.notifyNode),
    read_node: cdktf.stringToTerraform(struct!.readNode),
    security_level: cdktf.stringToTerraform(struct!.securityLevel),
    write_node: cdktf.stringToTerraform(struct!.writeNode),
  }
}


export function snmpServerGroupsV3SecurityToHclTerraform(struct?: SnmpServerGroupsV3Security | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_acl_name: {
      value: cdktf.stringToHclTerraform(struct!.accessAclName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_ipv6_acl: {
      value: cdktf.stringToHclTerraform(struct!.accessIpv6Acl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_standard_acl: {
      value: cdktf.numberToHclTerraform(struct!.accessStandardAcl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    context_node: {
      value: cdktf.stringToHclTerraform(struct!.contextNode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_node: {
      value: cdktf.stringToHclTerraform(struct!.matchNode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify_node: {
      value: cdktf.stringToHclTerraform(struct!.notifyNode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_node: {
      value: cdktf.stringToHclTerraform(struct!.readNode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_level: {
      value: cdktf.stringToHclTerraform(struct!.securityLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    write_node: {
      value: cdktf.stringToHclTerraform(struct!.writeNode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerGroupsV3SecurityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SnmpServerGroupsV3Security | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessAclName !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessAclName = this._accessAclName;
    }
    if (this._accessIpv6Acl !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessIpv6Acl = this._accessIpv6Acl;
    }
    if (this._accessStandardAcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessStandardAcl = this._accessStandardAcl;
    }
    if (this._contextNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextNode = this._contextNode;
    }
    if (this._matchNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchNode = this._matchNode;
    }
    if (this._notifyNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyNode = this._notifyNode;
    }
    if (this._readNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.readNode = this._readNode;
    }
    if (this._securityLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityLevel = this._securityLevel;
    }
    if (this._writeNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeNode = this._writeNode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerGroupsV3Security | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessAclName = undefined;
      this._accessIpv6Acl = undefined;
      this._accessStandardAcl = undefined;
      this._contextNode = undefined;
      this._matchNode = undefined;
      this._notifyNode = undefined;
      this._readNode = undefined;
      this._securityLevel = undefined;
      this._writeNode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessAclName = value.accessAclName;
      this._accessIpv6Acl = value.accessIpv6Acl;
      this._accessStandardAcl = value.accessStandardAcl;
      this._contextNode = value.contextNode;
      this._matchNode = value.matchNode;
      this._notifyNode = value.notifyNode;
      this._readNode = value.readNode;
      this._securityLevel = value.securityLevel;
      this._writeNode = value.writeNode;
    }
  }

  // access_acl_name - computed: false, optional: true, required: false
  private _accessAclName?: string; 
  public get accessAclName() {
    return this.getStringAttribute('access_acl_name');
  }
  public set accessAclName(value: string) {
    this._accessAclName = value;
  }
  public resetAccessAclName() {
    this._accessAclName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessAclNameInput() {
    return this._accessAclName;
  }

  // access_ipv6_acl - computed: false, optional: true, required: false
  private _accessIpv6Acl?: string; 
  public get accessIpv6Acl() {
    return this.getStringAttribute('access_ipv6_acl');
  }
  public set accessIpv6Acl(value: string) {
    this._accessIpv6Acl = value;
  }
  public resetAccessIpv6Acl() {
    this._accessIpv6Acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessIpv6AclInput() {
    return this._accessIpv6Acl;
  }

  // access_standard_acl - computed: false, optional: true, required: false
  private _accessStandardAcl?: number; 
  public get accessStandardAcl() {
    return this.getNumberAttribute('access_standard_acl');
  }
  public set accessStandardAcl(value: number) {
    this._accessStandardAcl = value;
  }
  public resetAccessStandardAcl() {
    this._accessStandardAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessStandardAclInput() {
    return this._accessStandardAcl;
  }

  // context_node - computed: false, optional: true, required: false
  private _contextNode?: string; 
  public get contextNode() {
    return this.getStringAttribute('context_node');
  }
  public set contextNode(value: string) {
    this._contextNode = value;
  }
  public resetContextNode() {
    this._contextNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextNodeInput() {
    return this._contextNode;
  }

  // match_node - computed: false, optional: true, required: false
  private _matchNode?: string; 
  public get matchNode() {
    return this.getStringAttribute('match_node');
  }
  public set matchNode(value: string) {
    this._matchNode = value;
  }
  public resetMatchNode() {
    this._matchNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchNodeInput() {
    return this._matchNode;
  }

  // notify_node - computed: false, optional: true, required: false
  private _notifyNode?: string; 
  public get notifyNode() {
    return this.getStringAttribute('notify_node');
  }
  public set notifyNode(value: string) {
    this._notifyNode = value;
  }
  public resetNotifyNode() {
    this._notifyNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyNodeInput() {
    return this._notifyNode;
  }

  // read_node - computed: false, optional: true, required: false
  private _readNode?: string; 
  public get readNode() {
    return this.getStringAttribute('read_node');
  }
  public set readNode(value: string) {
    this._readNode = value;
  }
  public resetReadNode() {
    this._readNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readNodeInput() {
    return this._readNode;
  }

  // security_level - computed: false, optional: false, required: true
  private _securityLevel?: string; 
  public get securityLevel() {
    return this.getStringAttribute('security_level');
  }
  public set securityLevel(value: string) {
    this._securityLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityLevelInput() {
    return this._securityLevel;
  }

  // write_node - computed: false, optional: true, required: false
  private _writeNode?: string; 
  public get writeNode() {
    return this.getStringAttribute('write_node');
  }
  public set writeNode(value: string) {
    this._writeNode = value;
  }
  public resetWriteNode() {
    this._writeNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeNodeInput() {
    return this._writeNode;
  }
}

export class SnmpServerGroupsV3SecurityList extends cdktf.ComplexList {
  public internalValue? : SnmpServerGroupsV3Security[] | cdktf.IResolvable

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
  public get(index: number): SnmpServerGroupsV3SecurityOutputReference {
    return new SnmpServerGroupsV3SecurityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SnmpServerGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#name SnmpServer#name}
  */
  readonly name: string;
  /**
  * DEPRECATED group using security Level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#v3_security SnmpServer#v3_security}
  */
  readonly v3Security?: SnmpServerGroupsV3Security[] | cdktf.IResolvable;
}

export function snmpServerGroupsToTerraform(struct?: SnmpServerGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    v3_security: cdktf.listMapper(snmpServerGroupsV3SecurityToTerraform, false)(struct!.v3Security),
  }
}


export function snmpServerGroupsToHclTerraform(struct?: SnmpServerGroups | cdktf.IResolvable): any {
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
    v3_security: {
      value: cdktf.listMapperHcl(snmpServerGroupsV3SecurityToHclTerraform, false)(struct!.v3Security),
      isBlock: true,
      type: "list",
      storageClassType: "SnmpServerGroupsV3SecurityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SnmpServerGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._v3Security?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3Security = this._v3Security?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._v3Security.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._v3Security.internalValue = value.v3Security;
    }
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

  // v3_security - computed: false, optional: true, required: false
  private _v3Security = new SnmpServerGroupsV3SecurityList(this, "v3_security", false);
  public get v3Security() {
    return this._v3Security;
  }
  public putV3Security(value: SnmpServerGroupsV3Security[] | cdktf.IResolvable) {
    this._v3Security.internalValue = value;
  }
  public resetV3Security() {
    this._v3Security.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3SecurityInput() {
    return this._v3Security.internalValue;
  }
}

export class SnmpServerGroupsList extends cdktf.ComplexList {
  public internalValue? : SnmpServerGroups[] | cdktf.IResolvable

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
  public get(index: number): SnmpServerGroupsOutputReference {
    return new SnmpServerGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SnmpServerHosts {
  /**
  * SNMPv1/v2c community string or SNMPv3 user name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#community_or_user SnmpServer#community_or_user}
  */
  readonly communityOrUser: string;
  /**
  * Specifies an encryption type for community string
  *   - Choices: `0`, `6`, `7`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#encryption SnmpServer#encryption}
  */
  readonly encryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#ip_address SnmpServer#ip_address}
  */
  readonly ipAddress: string;
  /**
  * 
  *   - Choices: `auth`, `noauth`, `priv`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#security_level SnmpServer#security_level}
  */
  readonly securityLevel?: string;
  /**
  * SNMP version to use for notification messages
  *   - Choices: `1`, `2c`, `3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#version SnmpServer#version}
  */
  readonly version?: string;
}

export function snmpServerHostsToTerraform(struct?: SnmpServerHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    community_or_user: cdktf.stringToTerraform(struct!.communityOrUser),
    encryption: cdktf.stringToTerraform(struct!.encryption),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    security_level: cdktf.stringToTerraform(struct!.securityLevel),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function snmpServerHostsToHclTerraform(struct?: SnmpServerHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    community_or_user: {
      value: cdktf.stringToHclTerraform(struct!.communityOrUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption: {
      value: cdktf.stringToHclTerraform(struct!.encryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_level: {
      value: cdktf.stringToHclTerraform(struct!.securityLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class SnmpServerHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SnmpServerHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._communityOrUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.communityOrUser = this._communityOrUser;
    }
    if (this._encryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._securityLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityLevel = this._securityLevel;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._communityOrUser = undefined;
      this._encryption = undefined;
      this._ipAddress = undefined;
      this._securityLevel = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._communityOrUser = value.communityOrUser;
      this._encryption = value.encryption;
      this._ipAddress = value.ipAddress;
      this._securityLevel = value.securityLevel;
      this._version = value.version;
    }
  }

  // community_or_user - computed: false, optional: false, required: true
  private _communityOrUser?: string; 
  public get communityOrUser() {
    return this.getStringAttribute('community_or_user');
  }
  public set communityOrUser(value: string) {
    this._communityOrUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get communityOrUserInput() {
    return this._communityOrUser;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption?: string; 
  public get encryption() {
    return this.getStringAttribute('encryption');
  }
  public set encryption(value: string) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // security_level - computed: false, optional: true, required: false
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

export class SnmpServerHostsList extends cdktf.ComplexList {
  public internalValue? : SnmpServerHosts[] | cdktf.IResolvable

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
  public get(index: number): SnmpServerHostsOutputReference {
    return new SnmpServerHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SnmpServerSnmpCommunities {
  /**
  * Access-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#access_list_name SnmpServer#access_list_name}
  */
  readonly accessListName?: string;
  /**
  * Specify IPv6 Named Access-List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#ipv6 SnmpServer#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#name SnmpServer#name}
  */
  readonly name: string;
  /**
  * 
  *   - Choices: `ro`, `rw`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#permission SnmpServer#permission}
  */
  readonly permission?: string;
  /**
  * Restrict this community to a named MIB view
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#view SnmpServer#view}
  */
  readonly view?: string;
}

export function snmpServerSnmpCommunitiesToTerraform(struct?: SnmpServerSnmpCommunities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list_name: cdktf.stringToTerraform(struct!.accessListName),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    name: cdktf.stringToTerraform(struct!.name),
    permission: cdktf.stringToTerraform(struct!.permission),
    view: cdktf.stringToTerraform(struct!.view),
  }
}


export function snmpServerSnmpCommunitiesToHclTerraform(struct?: SnmpServerSnmpCommunities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_list_name: {
      value: cdktf.stringToHclTerraform(struct!.accessListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
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
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    view: {
      value: cdktf.stringToHclTerraform(struct!.view),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerSnmpCommunitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SnmpServerSnmpCommunities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessListName = this._accessListName;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    if (this._view !== undefined) {
      hasAnyValues = true;
      internalValueResult.view = this._view;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerSnmpCommunities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessListName = undefined;
      this._ipv6 = undefined;
      this._name = undefined;
      this._permission = undefined;
      this._view = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessListName = value.accessListName;
      this._ipv6 = value.ipv6;
      this._name = value.name;
      this._permission = value.permission;
      this._view = value.view;
    }
  }

  // access_list_name - computed: false, optional: true, required: false
  private _accessListName?: string; 
  public get accessListName() {
    return this.getStringAttribute('access_list_name');
  }
  public set accessListName(value: string) {
    this._accessListName = value;
  }
  public resetAccessListName() {
    this._accessListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListNameInput() {
    return this._accessListName;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
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

  // permission - computed: false, optional: true, required: false
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  public resetPermission() {
    this._permission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }

  // view - computed: false, optional: true, required: false
  private _view?: string; 
  public get view() {
    return this.getStringAttribute('view');
  }
  public set view(value: string) {
    this._view = value;
  }
  public resetView() {
    this._view = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view;
  }
}

export class SnmpServerSnmpCommunitiesList extends cdktf.ComplexList {
  public internalValue? : SnmpServerSnmpCommunities[] | cdktf.IResolvable

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
  public get(index: number): SnmpServerSnmpCommunitiesOutputReference {
    return new SnmpServerSnmpCommunitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SnmpServerUsers {
  /**
  * Group to which the user belongs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#grpname SnmpServer#grpname}
  */
  readonly grpname: string;
  /**
  * Name of the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#username SnmpServer#username}
  */
  readonly username: string;
  /**
  * Access-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#v3_auth_access_acl_name SnmpServer#v3_auth_access_acl_name}
  */
  readonly v3AuthAccessAclName?: string;
  /**
  * Specify IPv6 Named Access-List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#v3_auth_access_ipv6_acl SnmpServer#v3_auth_access_ipv6_acl}
  */
  readonly v3AuthAccessIpv6Acl?: string;
  /**
  * Standard IP Access-list allowing access with this community string
  *   - Range: `1`-`99`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#v3_auth_access_standard_acl SnmpServer#v3_auth_access_standard_acl}
  */
  readonly v3AuthAccessStandardAcl?: number;
  /**
  * Use HMAC SHA/MD5 algorithm for authentication
  *   - Choices: `md5`, `sha`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#v3_auth_algorithm SnmpServer#v3_auth_algorithm}
  */
  readonly v3AuthAlgorithm?: string;
  /**
  * Authentication password for user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#v3_auth_password SnmpServer#v3_auth_password}
  */
  readonly v3AuthPassword: string;
  /**
  * Access-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#v3_auth_priv_aes_access_acl_name SnmpServer#v3_auth_priv_aes_access_acl_name}
  */
  readonly v3AuthPrivAesAccessAclName?: string;
  /**
  * Specify IPv6 Named Access-List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#v3_auth_priv_aes_access_ipv6_acl SnmpServer#v3_auth_priv_aes_access_ipv6_acl}
  */
  readonly v3AuthPrivAesAccessIpv6Acl?: string;
  /**
  * Standard IP Access-list allowing access with this community string
  *   - Range: `1`-`99`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#v3_auth_priv_aes_access_standard_acl SnmpServer#v3_auth_priv_aes_access_standard_acl}
  */
  readonly v3AuthPrivAesAccessStandardAcl?: number;
  /**
  * 
  *   - Choices: `128`, `192`, `256`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#v3_auth_priv_aes_algorithm SnmpServer#v3_auth_priv_aes_algorithm}
  */
  readonly v3AuthPrivAesAlgorithm?: string;
  /**
  * Authentication password for user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#v3_auth_priv_aes_password SnmpServer#v3_auth_priv_aes_password}
  */
  readonly v3AuthPrivAesPassword?: string;
  /**
  * Access-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#v3_auth_priv_des3_access_acl_name SnmpServer#v3_auth_priv_des3_access_acl_name}
  */
  readonly v3AuthPrivDes3AccessAclName?: string;
  /**
  * Specify IPv6 Named Access-List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#v3_auth_priv_des3_access_ipv6_acl SnmpServer#v3_auth_priv_des3_access_ipv6_acl}
  */
  readonly v3AuthPrivDes3AccessIpv6Acl?: string;
  /**
  * Standard IP Access-list allowing access with this community string
  *   - Range: `1`-`99`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#v3_auth_priv_des3_access_standard_acl SnmpServer#v3_auth_priv_des3_access_standard_acl}
  */
  readonly v3AuthPrivDes3AccessStandardAcl?: number;
  /**
  * Authentication password for user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#v3_auth_priv_des3_password SnmpServer#v3_auth_priv_des3_password}
  */
  readonly v3AuthPrivDes3Password?: string;
  /**
  * Access-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#v3_auth_priv_des_access_acl_name SnmpServer#v3_auth_priv_des_access_acl_name}
  */
  readonly v3AuthPrivDesAccessAclName?: string;
  /**
  * Specify IPv6 Named Access-List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#v3_auth_priv_des_access_ipv6_acl SnmpServer#v3_auth_priv_des_access_ipv6_acl}
  */
  readonly v3AuthPrivDesAccessIpv6Acl?: string;
  /**
  * Standard IP Access-list allowing access with this community string
  *   - Range: `1`-`99`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#v3_auth_priv_des_access_standard_acl SnmpServer#v3_auth_priv_des_access_standard_acl}
  */
  readonly v3AuthPrivDesAccessStandardAcl?: number;
  /**
  * Authentication password for user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#v3_auth_priv_des_password SnmpServer#v3_auth_priv_des_password}
  */
  readonly v3AuthPrivDesPassword?: string;
}

export function snmpServerUsersToTerraform(struct?: SnmpServerUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grpname: cdktf.stringToTerraform(struct!.grpname),
    username: cdktf.stringToTerraform(struct!.username),
    v3_auth_access_acl_name: cdktf.stringToTerraform(struct!.v3AuthAccessAclName),
    v3_auth_access_ipv6_acl: cdktf.stringToTerraform(struct!.v3AuthAccessIpv6Acl),
    v3_auth_access_standard_acl: cdktf.numberToTerraform(struct!.v3AuthAccessStandardAcl),
    v3_auth_algorithm: cdktf.stringToTerraform(struct!.v3AuthAlgorithm),
    v3_auth_password: cdktf.stringToTerraform(struct!.v3AuthPassword),
    v3_auth_priv_aes_access_acl_name: cdktf.stringToTerraform(struct!.v3AuthPrivAesAccessAclName),
    v3_auth_priv_aes_access_ipv6_acl: cdktf.stringToTerraform(struct!.v3AuthPrivAesAccessIpv6Acl),
    v3_auth_priv_aes_access_standard_acl: cdktf.numberToTerraform(struct!.v3AuthPrivAesAccessStandardAcl),
    v3_auth_priv_aes_algorithm: cdktf.stringToTerraform(struct!.v3AuthPrivAesAlgorithm),
    v3_auth_priv_aes_password: cdktf.stringToTerraform(struct!.v3AuthPrivAesPassword),
    v3_auth_priv_des3_access_acl_name: cdktf.stringToTerraform(struct!.v3AuthPrivDes3AccessAclName),
    v3_auth_priv_des3_access_ipv6_acl: cdktf.stringToTerraform(struct!.v3AuthPrivDes3AccessIpv6Acl),
    v3_auth_priv_des3_access_standard_acl: cdktf.numberToTerraform(struct!.v3AuthPrivDes3AccessStandardAcl),
    v3_auth_priv_des3_password: cdktf.stringToTerraform(struct!.v3AuthPrivDes3Password),
    v3_auth_priv_des_access_acl_name: cdktf.stringToTerraform(struct!.v3AuthPrivDesAccessAclName),
    v3_auth_priv_des_access_ipv6_acl: cdktf.stringToTerraform(struct!.v3AuthPrivDesAccessIpv6Acl),
    v3_auth_priv_des_access_standard_acl: cdktf.numberToTerraform(struct!.v3AuthPrivDesAccessStandardAcl),
    v3_auth_priv_des_password: cdktf.stringToTerraform(struct!.v3AuthPrivDesPassword),
  }
}


export function snmpServerUsersToHclTerraform(struct?: SnmpServerUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grpname: {
      value: cdktf.stringToHclTerraform(struct!.grpname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v3_auth_access_acl_name: {
      value: cdktf.stringToHclTerraform(struct!.v3AuthAccessAclName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v3_auth_access_ipv6_acl: {
      value: cdktf.stringToHclTerraform(struct!.v3AuthAccessIpv6Acl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v3_auth_access_standard_acl: {
      value: cdktf.numberToHclTerraform(struct!.v3AuthAccessStandardAcl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v3_auth_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.v3AuthAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v3_auth_password: {
      value: cdktf.stringToHclTerraform(struct!.v3AuthPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v3_auth_priv_aes_access_acl_name: {
      value: cdktf.stringToHclTerraform(struct!.v3AuthPrivAesAccessAclName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v3_auth_priv_aes_access_ipv6_acl: {
      value: cdktf.stringToHclTerraform(struct!.v3AuthPrivAesAccessIpv6Acl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v3_auth_priv_aes_access_standard_acl: {
      value: cdktf.numberToHclTerraform(struct!.v3AuthPrivAesAccessStandardAcl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v3_auth_priv_aes_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.v3AuthPrivAesAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v3_auth_priv_aes_password: {
      value: cdktf.stringToHclTerraform(struct!.v3AuthPrivAesPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v3_auth_priv_des3_access_acl_name: {
      value: cdktf.stringToHclTerraform(struct!.v3AuthPrivDes3AccessAclName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v3_auth_priv_des3_access_ipv6_acl: {
      value: cdktf.stringToHclTerraform(struct!.v3AuthPrivDes3AccessIpv6Acl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v3_auth_priv_des3_access_standard_acl: {
      value: cdktf.numberToHclTerraform(struct!.v3AuthPrivDes3AccessStandardAcl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v3_auth_priv_des3_password: {
      value: cdktf.stringToHclTerraform(struct!.v3AuthPrivDes3Password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v3_auth_priv_des_access_acl_name: {
      value: cdktf.stringToHclTerraform(struct!.v3AuthPrivDesAccessAclName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v3_auth_priv_des_access_ipv6_acl: {
      value: cdktf.stringToHclTerraform(struct!.v3AuthPrivDesAccessIpv6Acl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v3_auth_priv_des_access_standard_acl: {
      value: cdktf.numberToHclTerraform(struct!.v3AuthPrivDesAccessStandardAcl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v3_auth_priv_des_password: {
      value: cdktf.stringToHclTerraform(struct!.v3AuthPrivDesPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SnmpServerUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grpname !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpname = this._grpname;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._v3AuthAccessAclName !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3AuthAccessAclName = this._v3AuthAccessAclName;
    }
    if (this._v3AuthAccessIpv6Acl !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3AuthAccessIpv6Acl = this._v3AuthAccessIpv6Acl;
    }
    if (this._v3AuthAccessStandardAcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3AuthAccessStandardAcl = this._v3AuthAccessStandardAcl;
    }
    if (this._v3AuthAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3AuthAlgorithm = this._v3AuthAlgorithm;
    }
    if (this._v3AuthPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3AuthPassword = this._v3AuthPassword;
    }
    if (this._v3AuthPrivAesAccessAclName !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3AuthPrivAesAccessAclName = this._v3AuthPrivAesAccessAclName;
    }
    if (this._v3AuthPrivAesAccessIpv6Acl !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3AuthPrivAesAccessIpv6Acl = this._v3AuthPrivAesAccessIpv6Acl;
    }
    if (this._v3AuthPrivAesAccessStandardAcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3AuthPrivAesAccessStandardAcl = this._v3AuthPrivAesAccessStandardAcl;
    }
    if (this._v3AuthPrivAesAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3AuthPrivAesAlgorithm = this._v3AuthPrivAesAlgorithm;
    }
    if (this._v3AuthPrivAesPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3AuthPrivAesPassword = this._v3AuthPrivAesPassword;
    }
    if (this._v3AuthPrivDes3AccessAclName !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3AuthPrivDes3AccessAclName = this._v3AuthPrivDes3AccessAclName;
    }
    if (this._v3AuthPrivDes3AccessIpv6Acl !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3AuthPrivDes3AccessIpv6Acl = this._v3AuthPrivDes3AccessIpv6Acl;
    }
    if (this._v3AuthPrivDes3AccessStandardAcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3AuthPrivDes3AccessStandardAcl = this._v3AuthPrivDes3AccessStandardAcl;
    }
    if (this._v3AuthPrivDes3Password !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3AuthPrivDes3Password = this._v3AuthPrivDes3Password;
    }
    if (this._v3AuthPrivDesAccessAclName !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3AuthPrivDesAccessAclName = this._v3AuthPrivDesAccessAclName;
    }
    if (this._v3AuthPrivDesAccessIpv6Acl !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3AuthPrivDesAccessIpv6Acl = this._v3AuthPrivDesAccessIpv6Acl;
    }
    if (this._v3AuthPrivDesAccessStandardAcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3AuthPrivDesAccessStandardAcl = this._v3AuthPrivDesAccessStandardAcl;
    }
    if (this._v3AuthPrivDesPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3AuthPrivDesPassword = this._v3AuthPrivDesPassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._grpname = undefined;
      this._username = undefined;
      this._v3AuthAccessAclName = undefined;
      this._v3AuthAccessIpv6Acl = undefined;
      this._v3AuthAccessStandardAcl = undefined;
      this._v3AuthAlgorithm = undefined;
      this._v3AuthPassword = undefined;
      this._v3AuthPrivAesAccessAclName = undefined;
      this._v3AuthPrivAesAccessIpv6Acl = undefined;
      this._v3AuthPrivAesAccessStandardAcl = undefined;
      this._v3AuthPrivAesAlgorithm = undefined;
      this._v3AuthPrivAesPassword = undefined;
      this._v3AuthPrivDes3AccessAclName = undefined;
      this._v3AuthPrivDes3AccessIpv6Acl = undefined;
      this._v3AuthPrivDes3AccessStandardAcl = undefined;
      this._v3AuthPrivDes3Password = undefined;
      this._v3AuthPrivDesAccessAclName = undefined;
      this._v3AuthPrivDesAccessIpv6Acl = undefined;
      this._v3AuthPrivDesAccessStandardAcl = undefined;
      this._v3AuthPrivDesPassword = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._grpname = value.grpname;
      this._username = value.username;
      this._v3AuthAccessAclName = value.v3AuthAccessAclName;
      this._v3AuthAccessIpv6Acl = value.v3AuthAccessIpv6Acl;
      this._v3AuthAccessStandardAcl = value.v3AuthAccessStandardAcl;
      this._v3AuthAlgorithm = value.v3AuthAlgorithm;
      this._v3AuthPassword = value.v3AuthPassword;
      this._v3AuthPrivAesAccessAclName = value.v3AuthPrivAesAccessAclName;
      this._v3AuthPrivAesAccessIpv6Acl = value.v3AuthPrivAesAccessIpv6Acl;
      this._v3AuthPrivAesAccessStandardAcl = value.v3AuthPrivAesAccessStandardAcl;
      this._v3AuthPrivAesAlgorithm = value.v3AuthPrivAesAlgorithm;
      this._v3AuthPrivAesPassword = value.v3AuthPrivAesPassword;
      this._v3AuthPrivDes3AccessAclName = value.v3AuthPrivDes3AccessAclName;
      this._v3AuthPrivDes3AccessIpv6Acl = value.v3AuthPrivDes3AccessIpv6Acl;
      this._v3AuthPrivDes3AccessStandardAcl = value.v3AuthPrivDes3AccessStandardAcl;
      this._v3AuthPrivDes3Password = value.v3AuthPrivDes3Password;
      this._v3AuthPrivDesAccessAclName = value.v3AuthPrivDesAccessAclName;
      this._v3AuthPrivDesAccessIpv6Acl = value.v3AuthPrivDesAccessIpv6Acl;
      this._v3AuthPrivDesAccessStandardAcl = value.v3AuthPrivDesAccessStandardAcl;
      this._v3AuthPrivDesPassword = value.v3AuthPrivDesPassword;
    }
  }

  // grpname - computed: false, optional: false, required: true
  private _grpname?: string; 
  public get grpname() {
    return this.getStringAttribute('grpname');
  }
  public set grpname(value: string) {
    this._grpname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grpnameInput() {
    return this._grpname;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // v3_auth_access_acl_name - computed: false, optional: true, required: false
  private _v3AuthAccessAclName?: string; 
  public get v3AuthAccessAclName() {
    return this.getStringAttribute('v3_auth_access_acl_name');
  }
  public set v3AuthAccessAclName(value: string) {
    this._v3AuthAccessAclName = value;
  }
  public resetV3AuthAccessAclName() {
    this._v3AuthAccessAclName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3AuthAccessAclNameInput() {
    return this._v3AuthAccessAclName;
  }

  // v3_auth_access_ipv6_acl - computed: false, optional: true, required: false
  private _v3AuthAccessIpv6Acl?: string; 
  public get v3AuthAccessIpv6Acl() {
    return this.getStringAttribute('v3_auth_access_ipv6_acl');
  }
  public set v3AuthAccessIpv6Acl(value: string) {
    this._v3AuthAccessIpv6Acl = value;
  }
  public resetV3AuthAccessIpv6Acl() {
    this._v3AuthAccessIpv6Acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3AuthAccessIpv6AclInput() {
    return this._v3AuthAccessIpv6Acl;
  }

  // v3_auth_access_standard_acl - computed: false, optional: true, required: false
  private _v3AuthAccessStandardAcl?: number; 
  public get v3AuthAccessStandardAcl() {
    return this.getNumberAttribute('v3_auth_access_standard_acl');
  }
  public set v3AuthAccessStandardAcl(value: number) {
    this._v3AuthAccessStandardAcl = value;
  }
  public resetV3AuthAccessStandardAcl() {
    this._v3AuthAccessStandardAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3AuthAccessStandardAclInput() {
    return this._v3AuthAccessStandardAcl;
  }

  // v3_auth_algorithm - computed: false, optional: true, required: false
  private _v3AuthAlgorithm?: string; 
  public get v3AuthAlgorithm() {
    return this.getStringAttribute('v3_auth_algorithm');
  }
  public set v3AuthAlgorithm(value: string) {
    this._v3AuthAlgorithm = value;
  }
  public resetV3AuthAlgorithm() {
    this._v3AuthAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3AuthAlgorithmInput() {
    return this._v3AuthAlgorithm;
  }

  // v3_auth_password - computed: false, optional: false, required: true
  private _v3AuthPassword?: string; 
  public get v3AuthPassword() {
    return this.getStringAttribute('v3_auth_password');
  }
  public set v3AuthPassword(value: string) {
    this._v3AuthPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get v3AuthPasswordInput() {
    return this._v3AuthPassword;
  }

  // v3_auth_priv_aes_access_acl_name - computed: false, optional: true, required: false
  private _v3AuthPrivAesAccessAclName?: string; 
  public get v3AuthPrivAesAccessAclName() {
    return this.getStringAttribute('v3_auth_priv_aes_access_acl_name');
  }
  public set v3AuthPrivAesAccessAclName(value: string) {
    this._v3AuthPrivAesAccessAclName = value;
  }
  public resetV3AuthPrivAesAccessAclName() {
    this._v3AuthPrivAesAccessAclName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3AuthPrivAesAccessAclNameInput() {
    return this._v3AuthPrivAesAccessAclName;
  }

  // v3_auth_priv_aes_access_ipv6_acl - computed: false, optional: true, required: false
  private _v3AuthPrivAesAccessIpv6Acl?: string; 
  public get v3AuthPrivAesAccessIpv6Acl() {
    return this.getStringAttribute('v3_auth_priv_aes_access_ipv6_acl');
  }
  public set v3AuthPrivAesAccessIpv6Acl(value: string) {
    this._v3AuthPrivAesAccessIpv6Acl = value;
  }
  public resetV3AuthPrivAesAccessIpv6Acl() {
    this._v3AuthPrivAesAccessIpv6Acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3AuthPrivAesAccessIpv6AclInput() {
    return this._v3AuthPrivAesAccessIpv6Acl;
  }

  // v3_auth_priv_aes_access_standard_acl - computed: false, optional: true, required: false
  private _v3AuthPrivAesAccessStandardAcl?: number; 
  public get v3AuthPrivAesAccessStandardAcl() {
    return this.getNumberAttribute('v3_auth_priv_aes_access_standard_acl');
  }
  public set v3AuthPrivAesAccessStandardAcl(value: number) {
    this._v3AuthPrivAesAccessStandardAcl = value;
  }
  public resetV3AuthPrivAesAccessStandardAcl() {
    this._v3AuthPrivAesAccessStandardAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3AuthPrivAesAccessStandardAclInput() {
    return this._v3AuthPrivAesAccessStandardAcl;
  }

  // v3_auth_priv_aes_algorithm - computed: false, optional: true, required: false
  private _v3AuthPrivAesAlgorithm?: string; 
  public get v3AuthPrivAesAlgorithm() {
    return this.getStringAttribute('v3_auth_priv_aes_algorithm');
  }
  public set v3AuthPrivAesAlgorithm(value: string) {
    this._v3AuthPrivAesAlgorithm = value;
  }
  public resetV3AuthPrivAesAlgorithm() {
    this._v3AuthPrivAesAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3AuthPrivAesAlgorithmInput() {
    return this._v3AuthPrivAesAlgorithm;
  }

  // v3_auth_priv_aes_password - computed: false, optional: true, required: false
  private _v3AuthPrivAesPassword?: string; 
  public get v3AuthPrivAesPassword() {
    return this.getStringAttribute('v3_auth_priv_aes_password');
  }
  public set v3AuthPrivAesPassword(value: string) {
    this._v3AuthPrivAesPassword = value;
  }
  public resetV3AuthPrivAesPassword() {
    this._v3AuthPrivAesPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3AuthPrivAesPasswordInput() {
    return this._v3AuthPrivAesPassword;
  }

  // v3_auth_priv_des3_access_acl_name - computed: false, optional: true, required: false
  private _v3AuthPrivDes3AccessAclName?: string; 
  public get v3AuthPrivDes3AccessAclName() {
    return this.getStringAttribute('v3_auth_priv_des3_access_acl_name');
  }
  public set v3AuthPrivDes3AccessAclName(value: string) {
    this._v3AuthPrivDes3AccessAclName = value;
  }
  public resetV3AuthPrivDes3AccessAclName() {
    this._v3AuthPrivDes3AccessAclName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3AuthPrivDes3AccessAclNameInput() {
    return this._v3AuthPrivDes3AccessAclName;
  }

  // v3_auth_priv_des3_access_ipv6_acl - computed: false, optional: true, required: false
  private _v3AuthPrivDes3AccessIpv6Acl?: string; 
  public get v3AuthPrivDes3AccessIpv6Acl() {
    return this.getStringAttribute('v3_auth_priv_des3_access_ipv6_acl');
  }
  public set v3AuthPrivDes3AccessIpv6Acl(value: string) {
    this._v3AuthPrivDes3AccessIpv6Acl = value;
  }
  public resetV3AuthPrivDes3AccessIpv6Acl() {
    this._v3AuthPrivDes3AccessIpv6Acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3AuthPrivDes3AccessIpv6AclInput() {
    return this._v3AuthPrivDes3AccessIpv6Acl;
  }

  // v3_auth_priv_des3_access_standard_acl - computed: false, optional: true, required: false
  private _v3AuthPrivDes3AccessStandardAcl?: number; 
  public get v3AuthPrivDes3AccessStandardAcl() {
    return this.getNumberAttribute('v3_auth_priv_des3_access_standard_acl');
  }
  public set v3AuthPrivDes3AccessStandardAcl(value: number) {
    this._v3AuthPrivDes3AccessStandardAcl = value;
  }
  public resetV3AuthPrivDes3AccessStandardAcl() {
    this._v3AuthPrivDes3AccessStandardAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3AuthPrivDes3AccessStandardAclInput() {
    return this._v3AuthPrivDes3AccessStandardAcl;
  }

  // v3_auth_priv_des3_password - computed: false, optional: true, required: false
  private _v3AuthPrivDes3Password?: string; 
  public get v3AuthPrivDes3Password() {
    return this.getStringAttribute('v3_auth_priv_des3_password');
  }
  public set v3AuthPrivDes3Password(value: string) {
    this._v3AuthPrivDes3Password = value;
  }
  public resetV3AuthPrivDes3Password() {
    this._v3AuthPrivDes3Password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3AuthPrivDes3PasswordInput() {
    return this._v3AuthPrivDes3Password;
  }

  // v3_auth_priv_des_access_acl_name - computed: false, optional: true, required: false
  private _v3AuthPrivDesAccessAclName?: string; 
  public get v3AuthPrivDesAccessAclName() {
    return this.getStringAttribute('v3_auth_priv_des_access_acl_name');
  }
  public set v3AuthPrivDesAccessAclName(value: string) {
    this._v3AuthPrivDesAccessAclName = value;
  }
  public resetV3AuthPrivDesAccessAclName() {
    this._v3AuthPrivDesAccessAclName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3AuthPrivDesAccessAclNameInput() {
    return this._v3AuthPrivDesAccessAclName;
  }

  // v3_auth_priv_des_access_ipv6_acl - computed: false, optional: true, required: false
  private _v3AuthPrivDesAccessIpv6Acl?: string; 
  public get v3AuthPrivDesAccessIpv6Acl() {
    return this.getStringAttribute('v3_auth_priv_des_access_ipv6_acl');
  }
  public set v3AuthPrivDesAccessIpv6Acl(value: string) {
    this._v3AuthPrivDesAccessIpv6Acl = value;
  }
  public resetV3AuthPrivDesAccessIpv6Acl() {
    this._v3AuthPrivDesAccessIpv6Acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3AuthPrivDesAccessIpv6AclInput() {
    return this._v3AuthPrivDesAccessIpv6Acl;
  }

  // v3_auth_priv_des_access_standard_acl - computed: false, optional: true, required: false
  private _v3AuthPrivDesAccessStandardAcl?: number; 
  public get v3AuthPrivDesAccessStandardAcl() {
    return this.getNumberAttribute('v3_auth_priv_des_access_standard_acl');
  }
  public set v3AuthPrivDesAccessStandardAcl(value: number) {
    this._v3AuthPrivDesAccessStandardAcl = value;
  }
  public resetV3AuthPrivDesAccessStandardAcl() {
    this._v3AuthPrivDesAccessStandardAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3AuthPrivDesAccessStandardAclInput() {
    return this._v3AuthPrivDesAccessStandardAcl;
  }

  // v3_auth_priv_des_password - computed: false, optional: true, required: false
  private _v3AuthPrivDesPassword?: string; 
  public get v3AuthPrivDesPassword() {
    return this.getStringAttribute('v3_auth_priv_des_password');
  }
  public set v3AuthPrivDesPassword(value: string) {
    this._v3AuthPrivDesPassword = value;
  }
  public resetV3AuthPrivDesPassword() {
    this._v3AuthPrivDesPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3AuthPrivDesPasswordInput() {
    return this._v3AuthPrivDesPassword;
  }
}

export class SnmpServerUsersList extends cdktf.ComplexList {
  public internalValue? : SnmpServerUsers[] | cdktf.IResolvable

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
  public get(index: number): SnmpServerUsersOutputReference {
    return new SnmpServerUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SnmpServerViews {
  /**
  * 
  *   - Choices: `excluded`, `included`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#inc_exl SnmpServer#inc_exl}
  */
  readonly incExl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#mib SnmpServer#mib}
  */
  readonly mib: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#name SnmpServer#name}
  */
  readonly name: string;
}

export function snmpServerViewsToTerraform(struct?: SnmpServerViews | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inc_exl: cdktf.stringToTerraform(struct!.incExl),
    mib: cdktf.stringToTerraform(struct!.mib),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function snmpServerViewsToHclTerraform(struct?: SnmpServerViews | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inc_exl: {
      value: cdktf.stringToHclTerraform(struct!.incExl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mib: {
      value: cdktf.stringToHclTerraform(struct!.mib),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerViewsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SnmpServerViews | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._incExl !== undefined) {
      hasAnyValues = true;
      internalValueResult.incExl = this._incExl;
    }
    if (this._mib !== undefined) {
      hasAnyValues = true;
      internalValueResult.mib = this._mib;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerViews | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._incExl = undefined;
      this._mib = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._incExl = value.incExl;
      this._mib = value.mib;
      this._name = value.name;
    }
  }

  // inc_exl - computed: false, optional: true, required: false
  private _incExl?: string; 
  public get incExl() {
    return this.getStringAttribute('inc_exl');
  }
  public set incExl(value: string) {
    this._incExl = value;
  }
  public resetIncExl() {
    this._incExl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incExlInput() {
    return this._incExl;
  }

  // mib - computed: false, optional: false, required: true
  private _mib?: string; 
  public get mib() {
    return this.getStringAttribute('mib');
  }
  public set mib(value: string) {
    this._mib = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mibInput() {
    return this._mib;
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
}

export class SnmpServerViewsList extends cdktf.ComplexList {
  public internalValue? : SnmpServerViews[] | cdktf.IResolvable

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
  public get(index: number): SnmpServerViewsOutputReference {
    return new SnmpServerViewsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SnmpServerVrfHosts {
  /**
  * SNMPv1/v2c community string or SNMPv3 user name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#community_or_user SnmpServer#community_or_user}
  */
  readonly communityOrUser: string;
  /**
  * Specifies an encryption type for community string
  *   - Choices: `0`, `6`, `7`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#encryption SnmpServer#encryption}
  */
  readonly encryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#ip_address SnmpServer#ip_address}
  */
  readonly ipAddress: string;
  /**
  * 
  *   - Choices: `auth`, `noauth`, `priv`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#security_level SnmpServer#security_level}
  */
  readonly securityLevel?: string;
  /**
  * SNMP version to use for notification messages
  *   - Choices: `1`, `2c`, `3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#version SnmpServer#version}
  */
  readonly version?: string;
  /**
  * VPN Routing instance for this host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#vrf SnmpServer#vrf}
  */
  readonly vrf: string;
}

export function snmpServerVrfHostsToTerraform(struct?: SnmpServerVrfHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    community_or_user: cdktf.stringToTerraform(struct!.communityOrUser),
    encryption: cdktf.stringToTerraform(struct!.encryption),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    security_level: cdktf.stringToTerraform(struct!.securityLevel),
    version: cdktf.stringToTerraform(struct!.version),
    vrf: cdktf.stringToTerraform(struct!.vrf),
  }
}


export function snmpServerVrfHostsToHclTerraform(struct?: SnmpServerVrfHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    community_or_user: {
      value: cdktf.stringToHclTerraform(struct!.communityOrUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption: {
      value: cdktf.stringToHclTerraform(struct!.encryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_level: {
      value: cdktf.stringToHclTerraform(struct!.securityLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
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

export class SnmpServerVrfHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SnmpServerVrfHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._communityOrUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.communityOrUser = this._communityOrUser;
    }
    if (this._encryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._securityLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityLevel = this._securityLevel;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._vrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrf = this._vrf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerVrfHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._communityOrUser = undefined;
      this._encryption = undefined;
      this._ipAddress = undefined;
      this._securityLevel = undefined;
      this._version = undefined;
      this._vrf = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._communityOrUser = value.communityOrUser;
      this._encryption = value.encryption;
      this._ipAddress = value.ipAddress;
      this._securityLevel = value.securityLevel;
      this._version = value.version;
      this._vrf = value.vrf;
    }
  }

  // community_or_user - computed: false, optional: false, required: true
  private _communityOrUser?: string; 
  public get communityOrUser() {
    return this.getStringAttribute('community_or_user');
  }
  public set communityOrUser(value: string) {
    this._communityOrUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get communityOrUserInput() {
    return this._communityOrUser;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption?: string; 
  public get encryption() {
    return this.getStringAttribute('encryption');
  }
  public set encryption(value: string) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // security_level - computed: false, optional: true, required: false
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

  // vrf - computed: false, optional: false, required: true
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }
}

export class SnmpServerVrfHostsList extends cdktf.ComplexList {
  public internalValue? : SnmpServerVrfHosts[] | cdktf.IResolvable

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
  public get(index: number): SnmpServerVrfHostsOutputReference {
    return new SnmpServerVrfHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server iosxe_snmp_server}
*/
export class SnmpServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_snmp_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnmpServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnmpServer to import
  * @param importFromId The id of the existing SnmpServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnmpServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_snmp_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/snmp_server iosxe_snmp_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmpServerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SnmpServerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_snmp_server',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.15.0',
        providerVersionConstraint: '0.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._chassisId = config.chassisId;
    this._contact = config.contact;
    this._contexts.internalValue = config.contexts;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._enableInforms = config.enableInforms;
    this._enableLoggingGetop = config.enableLoggingGetop;
    this._enableLoggingSetop = config.enableLoggingSetop;
    this._enableTraps = config.enableTraps;
    this._enableTrapsAaaServer = config.enableTrapsAaaServer;
    this._enableTrapsAdslline = config.enableTrapsAdslline;
    this._enableTrapsAlarmType = config.enableTrapsAlarmType;
    this._enableTrapsAuthFrameworkSecViolation = config.enableTrapsAuthFrameworkSecViolation;
    this._enableTrapsBfd = config.enableTrapsBfd;
    this._enableTrapsBgp = config.enableTrapsBgp;
    this._enableTrapsBgpCbgp2 = config.enableTrapsBgpCbgp2;
    this._enableTrapsBgpCbgp2StateChanges = config.enableTrapsBgpCbgp2StateChanges;
    this._enableTrapsBgpCbgp2ThresholdPrefix = config.enableTrapsBgpCbgp2ThresholdPrefix;
    this._enableTrapsBridgeNewroot = config.enableTrapsBridgeNewroot;
    this._enableTrapsBridgeTopologychange = config.enableTrapsBridgeTopologychange;
    this._enableTrapsBulkstatCollection = config.enableTrapsBulkstatCollection;
    this._enableTrapsBulkstatTransfer = config.enableTrapsBulkstatTransfer;
    this._enableTrapsCallHomeMessageSendFail = config.enableTrapsCallHomeMessageSendFail;
    this._enableTrapsCallHomeServerFail = config.enableTrapsCallHomeServerFail;
    this._enableTrapsCasa = config.enableTrapsCasa;
    this._enableTrapsCbgp2 = config.enableTrapsCbgp2;
    this._enableTrapsCefInconsistency = config.enableTrapsCefInconsistency;
    this._enableTrapsCefPeerFibStateChange = config.enableTrapsCefPeerFibStateChange;
    this._enableTrapsCefPeerStateChange = config.enableTrapsCefPeerStateChange;
    this._enableTrapsCefResourceFailure = config.enableTrapsCefResourceFailure;
    this._enableTrapsCnpd = config.enableTrapsCnpd;
    this._enableTrapsConfig = config.enableTrapsConfig;
    this._enableTrapsConfigCopy = config.enableTrapsConfigCopy;
    this._enableTrapsConfigCtid = config.enableTrapsConfigCtid;
    this._enableTrapsCpuThreshold = config.enableTrapsCpuThreshold;
    this._enableTrapsDhcp = config.enableTrapsDhcp;
    this._enableTrapsDial = config.enableTrapsDial;
    this._enableTrapsDlsw = config.enableTrapsDlsw;
    this._enableTrapsDs1 = config.enableTrapsDs1;
    this._enableTrapsDspCardStatus = config.enableTrapsDspCardStatus;
    this._enableTrapsDspOperState = config.enableTrapsDspOperState;
    this._enableTrapsEigrp = config.enableTrapsEigrp;
    this._enableTrapsEnergywise = config.enableTrapsEnergywise;
    this._enableTrapsEntity = config.enableTrapsEntity;
    this._enableTrapsEntityDiagBootUpFail = config.enableTrapsEntityDiagBootUpFail;
    this._enableTrapsEntityDiagHmTestRecover = config.enableTrapsEntityDiagHmTestRecover;
    this._enableTrapsEntityDiagHmThreshReached = config.enableTrapsEntityDiagHmThreshReached;
    this._enableTrapsEntityDiagScheduledTestFail = config.enableTrapsEntityDiagScheduledTestFail;
    this._enableTrapsEntityPerfThroughputNotif = config.enableTrapsEntityPerfThroughputNotif;
    this._enableTrapsEntityQfpMemResThresh = config.enableTrapsEntityQfpMemResThresh;
    this._enableTrapsEntityQfpThroughputNotif = config.enableTrapsEntityQfpThroughputNotif;
    this._enableTrapsEntitySensor = config.enableTrapsEntitySensor;
    this._enableTrapsEntityState = config.enableTrapsEntityState;
    this._enableTrapsEnvmon = config.enableTrapsEnvmon;
    this._enableTrapsErrdisable = config.enableTrapsErrdisable;
    this._enableTrapsEtherOam = config.enableTrapsEtherOam;
    this._enableTrapsEthernetCfmAlarm = config.enableTrapsEthernetCfmAlarm;
    this._enableTrapsEthernetCfmCcConfig = config.enableTrapsEthernetCfmCcConfig;
    this._enableTrapsEthernetCfmCcCrossConnect = config.enableTrapsEthernetCfmCcCrossConnect;
    this._enableTrapsEthernetCfmCcLoop = config.enableTrapsEthernetCfmCcLoop;
    this._enableTrapsEthernetCfmCcMepDown = config.enableTrapsEthernetCfmCcMepDown;
    this._enableTrapsEthernetCfmCcMepUp = config.enableTrapsEthernetCfmCcMepUp;
    this._enableTrapsEthernetCfmCrosscheckMepMissing = config.enableTrapsEthernetCfmCrosscheckMepMissing;
    this._enableTrapsEthernetCfmCrosscheckMepUnknown = config.enableTrapsEthernetCfmCrosscheckMepUnknown;
    this._enableTrapsEthernetCfmCrosscheckServiceUp = config.enableTrapsEthernetCfmCrosscheckServiceUp;
    this._enableTrapsEthernetEvcCreate = config.enableTrapsEthernetEvcCreate;
    this._enableTrapsEthernetEvcDelete = config.enableTrapsEthernetEvcDelete;
    this._enableTrapsEthernetEvcStatus = config.enableTrapsEthernetEvcStatus;
    this._enableTrapsEventManager = config.enableTrapsEventManager;
    this._enableTrapsFastRerouteProtected = config.enableTrapsFastRerouteProtected;
    this._enableTrapsFirewallServerstatus = config.enableTrapsFirewallServerstatus;
    this._enableTrapsFlashInsertion = config.enableTrapsFlashInsertion;
    this._enableTrapsFlashLowspace = config.enableTrapsFlashLowspace;
    this._enableTrapsFlashRemoval = config.enableTrapsFlashRemoval;
    this._enableTrapsFlowmon = config.enableTrapsFlowmon;
    this._enableTrapsFrameRelayConfigBundleMismatch = config.enableTrapsFrameRelayConfigBundleMismatch;
    this._enableTrapsFrameRelayConfigOnly = config.enableTrapsFrameRelayConfigOnly;
    this._enableTrapsFrameRelayConfigSubifConfigs = config.enableTrapsFrameRelayConfigSubifConfigs;
    this._enableTrapsFrameRelayMultilinkBundleMismatch = config.enableTrapsFrameRelayMultilinkBundleMismatch;
    this._enableTrapsFrameRelaySubifCount = config.enableTrapsFrameRelaySubifCount;
    this._enableTrapsFrameRelaySubifInterval = config.enableTrapsFrameRelaySubifInterval;
    this._enableTrapsFruCtrl = config.enableTrapsFruCtrl;
    this._enableTrapsHsrp = config.enableTrapsHsrp;
    this._enableTrapsIkePolicyAdd = config.enableTrapsIkePolicyAdd;
    this._enableTrapsIkePolicyDelete = config.enableTrapsIkePolicyDelete;
    this._enableTrapsIkeTunnelStart = config.enableTrapsIkeTunnelStart;
    this._enableTrapsIkeTunnelStop = config.enableTrapsIkeTunnelStop;
    this._enableTrapsIpLocalPool = config.enableTrapsIpLocalPool;
    this._enableTrapsIpmulticast = config.enableTrapsIpmulticast;
    this._enableTrapsIpsecCryptomapAdd = config.enableTrapsIpsecCryptomapAdd;
    this._enableTrapsIpsecCryptomapAttach = config.enableTrapsIpsecCryptomapAttach;
    this._enableTrapsIpsecCryptomapDelete = config.enableTrapsIpsecCryptomapDelete;
    this._enableTrapsIpsecCryptomapDetach = config.enableTrapsIpsecCryptomapDetach;
    this._enableTrapsIpsecTooManySas = config.enableTrapsIpsecTooManySas;
    this._enableTrapsIpsecTunnelStart = config.enableTrapsIpsecTunnelStart;
    this._enableTrapsIpsecTunnelStop = config.enableTrapsIpsecTunnelStop;
    this._enableTrapsIpsla = config.enableTrapsIpsla;
    this._enableTrapsIsdnCallInformation = config.enableTrapsIsdnCallInformation;
    this._enableTrapsIsdnChanNotAvail = config.enableTrapsIsdnChanNotAvail;
    this._enableTrapsIsdnIetf = config.enableTrapsIsdnIetf;
    this._enableTrapsIsdnLayer2 = config.enableTrapsIsdnLayer2;
    this._enableTrapsIsis = config.enableTrapsIsis;
    this._enableTrapsL2TunPseudowireStatus = config.enableTrapsL2TunPseudowireStatus;
    this._enableTrapsL2TunSession = config.enableTrapsL2TunSession;
    this._enableTrapsL2TunTunnel = config.enableTrapsL2TunTunnel;
    this._enableTrapsLicense = config.enableTrapsLicense;
    this._enableTrapsLisp = config.enableTrapsLisp;
    this._enableTrapsLocalAuth = config.enableTrapsLocalAuth;
    this._enableTrapsMacNotificationChange = config.enableTrapsMacNotificationChange;
    this._enableTrapsMacNotificationMove = config.enableTrapsMacNotificationMove;
    this._enableTrapsMacNotificationThreshold = config.enableTrapsMacNotificationThreshold;
    this._enableTrapsMemoryBufferpeak = config.enableTrapsMemoryBufferpeak;
    this._enableTrapsMpls = config.enableTrapsMpls;
    this._enableTrapsMplsLdp = config.enableTrapsMplsLdp;
    this._enableTrapsMplsRfc = config.enableTrapsMplsRfc;
    this._enableTrapsMplsRfcLdp = config.enableTrapsMplsRfcLdp;
    this._enableTrapsMplsTrafficEng = config.enableTrapsMplsTrafficEng;
    this._enableTrapsMplsVpn = config.enableTrapsMplsVpn;
    this._enableTrapsMsdp = config.enableTrapsMsdp;
    this._enableTrapsMvpn = config.enableTrapsMvpn;
    this._enableTrapsNhrpNhc = config.enableTrapsNhrpNhc;
    this._enableTrapsNhrpNhp = config.enableTrapsNhrpNhp;
    this._enableTrapsNhrpNhs = config.enableTrapsNhrpNhs;
    this._enableTrapsNhrpQuotaExceeded = config.enableTrapsNhrpQuotaExceeded;
    this._enableTrapsOspfConfigErrors = config.enableTrapsOspfConfigErrors;
    this._enableTrapsOspfConfigLsa = config.enableTrapsOspfConfigLsa;
    this._enableTrapsOspfConfigRetransmit = config.enableTrapsOspfConfigRetransmit;
    this._enableTrapsOspfConfigStateChange = config.enableTrapsOspfConfigStateChange;
    this._enableTrapsOspfErrorsEnable = config.enableTrapsOspfErrorsEnable;
    this._enableTrapsOspfLsaEnable = config.enableTrapsOspfLsaEnable;
    this._enableTrapsOspfNssaTransChange = config.enableTrapsOspfNssaTransChange;
    this._enableTrapsOspfRetransmitEnable = config.enableTrapsOspfRetransmitEnable;
    this._enableTrapsOspfShamlinkInterface = config.enableTrapsOspfShamlinkInterface;
    this._enableTrapsOspfShamlinkNeighbor = config.enableTrapsOspfShamlinkNeighbor;
    this._enableTrapsOspfv3ConfigErrors = config.enableTrapsOspfv3ConfigErrors;
    this._enableTrapsOspfv3ConfigStateChange = config.enableTrapsOspfv3ConfigStateChange;
    this._enableTrapsOspfv3Errors = config.enableTrapsOspfv3Errors;
    this._enableTrapsOspfv3StateChange = config.enableTrapsOspfv3StateChange;
    this._enableTrapsPfr = config.enableTrapsPfr;
    this._enableTrapsPimInvalidPimMessage = config.enableTrapsPimInvalidPimMessage;
    this._enableTrapsPimNeighborChange = config.enableTrapsPimNeighborChange;
    this._enableTrapsPimRpMappingChange = config.enableTrapsPimRpMappingChange;
    this._enableTrapsPimstdmibInterfaceElection = config.enableTrapsPimstdmibInterfaceElection;
    this._enableTrapsPimstdmibInvalidJoinPrune = config.enableTrapsPimstdmibInvalidJoinPrune;
    this._enableTrapsPimstdmibInvalidRegister = config.enableTrapsPimstdmibInvalidRegister;
    this._enableTrapsPimstdmibNeighborLoss = config.enableTrapsPimstdmibNeighborLoss;
    this._enableTrapsPimstdmibRpMappingChange = config.enableTrapsPimstdmibRpMappingChange;
    this._enableTrapsPki = config.enableTrapsPki;
    this._enableTrapsPortSecurity = config.enableTrapsPortSecurity;
    this._enableTrapsPowerEthernetGroup = config.enableTrapsPowerEthernetGroup;
    this._enableTrapsPowerEthernetPolice = config.enableTrapsPowerEthernetPolice;
    this._enableTrapsPppoe = config.enableTrapsPppoe;
    this._enableTrapsPwVc = config.enableTrapsPwVc;
    this._enableTrapsRep = config.enableTrapsRep;
    this._enableTrapsResourcePolicy = config.enableTrapsResourcePolicy;
    this._enableTrapsRf = config.enableTrapsRf;
    this._enableTrapsRsvp = config.enableTrapsRsvp;
    this._enableTrapsSmartLicense = config.enableTrapsSmartLicense;
    this._enableTrapsSnmpAuthentication = config.enableTrapsSnmpAuthentication;
    this._enableTrapsSnmpColdstart = config.enableTrapsSnmpColdstart;
    this._enableTrapsSnmpLinkdown = config.enableTrapsSnmpLinkdown;
    this._enableTrapsSnmpLinkup = config.enableTrapsSnmpLinkup;
    this._enableTrapsSnmpWarmstart = config.enableTrapsSnmpWarmstart;
    this._enableTrapsSonet = config.enableTrapsSonet;
    this._enableTrapsSrp = config.enableTrapsSrp;
    this._enableTrapsStackwise = config.enableTrapsStackwise;
    this._enableTrapsStpxInconsistency = config.enableTrapsStpxInconsistency;
    this._enableTrapsStpxLoopInconsistency = config.enableTrapsStpxLoopInconsistency;
    this._enableTrapsStpxRootInconsistency = config.enableTrapsStpxRootInconsistency;
    this._enableTrapsSyslog = config.enableTrapsSyslog;
    this._enableTrapsTransceiverAll = config.enableTrapsTransceiverAll;
    this._enableTrapsTty = config.enableTrapsTty;
    this._enableTrapsUdldLinkFailRpt = config.enableTrapsUdldLinkFailRpt;
    this._enableTrapsUdldStatusChange = config.enableTrapsUdldStatusChange;
    this._enableTrapsVdsl2Line = config.enableTrapsVdsl2Line;
    this._enableTrapsVlanMembership = config.enableTrapsVlanMembership;
    this._enableTrapsVlancreate = config.enableTrapsVlancreate;
    this._enableTrapsVlandelete = config.enableTrapsVlandelete;
    this._enableTrapsVoice = config.enableTrapsVoice;
    this._enableTrapsVrfmibVnetTrunkDown = config.enableTrapsVrfmibVnetTrunkDown;
    this._enableTrapsVrfmibVnetTrunkUp = config.enableTrapsVrfmibVnetTrunkUp;
    this._enableTrapsVrfmibVrfDown = config.enableTrapsVrfmibVrfDown;
    this._enableTrapsVrfmibVrfUp = config.enableTrapsVrfmibVrfUp;
    this._enableTrapsVrrp = config.enableTrapsVrrp;
    this._enableTrapsVtp = config.enableTrapsVtp;
    this._groups.internalValue = config.groups;
    this._hosts.internalValue = config.hosts;
    this._ifindexPersist = config.ifindexPersist;
    this._location = config.location;
    this._packetsize = config.packetsize;
    this._queueLength = config.queueLength;
    this._snmpCommunities.internalValue = config.snmpCommunities;
    this._sourceInterfaceInformsFortyGigabitEthernet = config.sourceInterfaceInformsFortyGigabitEthernet;
    this._sourceInterfaceInformsGigabitEthernet = config.sourceInterfaceInformsGigabitEthernet;
    this._sourceInterfaceInformsHundredGigE = config.sourceInterfaceInformsHundredGigE;
    this._sourceInterfaceInformsLoopback = config.sourceInterfaceInformsLoopback;
    this._sourceInterfaceInformsPortChannel = config.sourceInterfaceInformsPortChannel;
    this._sourceInterfaceInformsPortChannelSubinterface = config.sourceInterfaceInformsPortChannelSubinterface;
    this._sourceInterfaceInformsTenGigabitEthernet = config.sourceInterfaceInformsTenGigabitEthernet;
    this._sourceInterfaceInformsVlan = config.sourceInterfaceInformsVlan;
    this._sourceInterfaceTrapsFortyGigabitEthernet = config.sourceInterfaceTrapsFortyGigabitEthernet;
    this._sourceInterfaceTrapsGigabitEthernet = config.sourceInterfaceTrapsGigabitEthernet;
    this._sourceInterfaceTrapsHundredGigE = config.sourceInterfaceTrapsHundredGigE;
    this._sourceInterfaceTrapsLoopback = config.sourceInterfaceTrapsLoopback;
    this._sourceInterfaceTrapsPortChannel = config.sourceInterfaceTrapsPortChannel;
    this._sourceInterfaceTrapsPortChannelSubinterface = config.sourceInterfaceTrapsPortChannelSubinterface;
    this._sourceInterfaceTrapsTenGigabitEthernet = config.sourceInterfaceTrapsTenGigabitEthernet;
    this._sourceInterfaceTrapsVlan = config.sourceInterfaceTrapsVlan;
    this._systemShutdown = config.systemShutdown;
    this._trapSourceFortyGigabitEthernet = config.trapSourceFortyGigabitEthernet;
    this._trapSourceGigabitEthernet = config.trapSourceGigabitEthernet;
    this._trapSourceHundredGigE = config.trapSourceHundredGigE;
    this._trapSourceLoopback = config.trapSourceLoopback;
    this._trapSourcePortChannel = config.trapSourcePortChannel;
    this._trapSourcePortChannelSubinterface = config.trapSourcePortChannelSubinterface;
    this._trapSourceTenGigabitEthernet = config.trapSourceTenGigabitEthernet;
    this._trapSourceVlan = config.trapSourceVlan;
    this._users.internalValue = config.users;
    this._views.internalValue = config.views;
    this._vrfHosts.internalValue = config.vrfHosts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // chassis_id - computed: false, optional: true, required: false
  private _chassisId?: string; 
  public get chassisId() {
    return this.getStringAttribute('chassis_id');
  }
  public set chassisId(value: string) {
    this._chassisId = value;
  }
  public resetChassisId() {
    this._chassisId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chassisIdInput() {
    return this._chassisId;
  }

  // contact - computed: false, optional: true, required: false
  private _contact?: string; 
  public get contact() {
    return this.getStringAttribute('contact');
  }
  public set contact(value: string) {
    this._contact = value;
  }
  public resetContact() {
    this._contact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactInput() {
    return this._contact;
  }

  // contexts - computed: false, optional: true, required: false
  private _contexts = new SnmpServerContextsList(this, "contexts", false);
  public get contexts() {
    return this._contexts;
  }
  public putContexts(value: SnmpServerContexts[] | cdktf.IResolvable) {
    this._contexts.internalValue = value;
  }
  public resetContexts() {
    this._contexts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextsInput() {
    return this._contexts.internalValue;
  }

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
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

  // enable_informs - computed: false, optional: true, required: false
  private _enableInforms?: boolean | cdktf.IResolvable; 
  public get enableInforms() {
    return this.getBooleanAttribute('enable_informs');
  }
  public set enableInforms(value: boolean | cdktf.IResolvable) {
    this._enableInforms = value;
  }
  public resetEnableInforms() {
    this._enableInforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInformsInput() {
    return this._enableInforms;
  }

  // enable_logging_getop - computed: false, optional: true, required: false
  private _enableLoggingGetop?: boolean | cdktf.IResolvable; 
  public get enableLoggingGetop() {
    return this.getBooleanAttribute('enable_logging_getop');
  }
  public set enableLoggingGetop(value: boolean | cdktf.IResolvable) {
    this._enableLoggingGetop = value;
  }
  public resetEnableLoggingGetop() {
    this._enableLoggingGetop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLoggingGetopInput() {
    return this._enableLoggingGetop;
  }

  // enable_logging_setop - computed: false, optional: true, required: false
  private _enableLoggingSetop?: boolean | cdktf.IResolvable; 
  public get enableLoggingSetop() {
    return this.getBooleanAttribute('enable_logging_setop');
  }
  public set enableLoggingSetop(value: boolean | cdktf.IResolvable) {
    this._enableLoggingSetop = value;
  }
  public resetEnableLoggingSetop() {
    this._enableLoggingSetop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLoggingSetopInput() {
    return this._enableLoggingSetop;
  }

  // enable_traps - computed: false, optional: true, required: false
  private _enableTraps?: boolean | cdktf.IResolvable; 
  public get enableTraps() {
    return this.getBooleanAttribute('enable_traps');
  }
  public set enableTraps(value: boolean | cdktf.IResolvable) {
    this._enableTraps = value;
  }
  public resetEnableTraps() {
    this._enableTraps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsInput() {
    return this._enableTraps;
  }

  // enable_traps_aaa_server - computed: false, optional: true, required: false
  private _enableTrapsAaaServer?: boolean | cdktf.IResolvable; 
  public get enableTrapsAaaServer() {
    return this.getBooleanAttribute('enable_traps_aaa_server');
  }
  public set enableTrapsAaaServer(value: boolean | cdktf.IResolvable) {
    this._enableTrapsAaaServer = value;
  }
  public resetEnableTrapsAaaServer() {
    this._enableTrapsAaaServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsAaaServerInput() {
    return this._enableTrapsAaaServer;
  }

  // enable_traps_adslline - computed: false, optional: true, required: false
  private _enableTrapsAdslline?: boolean | cdktf.IResolvable; 
  public get enableTrapsAdslline() {
    return this.getBooleanAttribute('enable_traps_adslline');
  }
  public set enableTrapsAdslline(value: boolean | cdktf.IResolvable) {
    this._enableTrapsAdslline = value;
  }
  public resetEnableTrapsAdslline() {
    this._enableTrapsAdslline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsAdsllineInput() {
    return this._enableTrapsAdslline;
  }

  // enable_traps_alarm_type - computed: false, optional: true, required: false
  private _enableTrapsAlarmType?: string; 
  public get enableTrapsAlarmType() {
    return this.getStringAttribute('enable_traps_alarm_type');
  }
  public set enableTrapsAlarmType(value: string) {
    this._enableTrapsAlarmType = value;
  }
  public resetEnableTrapsAlarmType() {
    this._enableTrapsAlarmType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsAlarmTypeInput() {
    return this._enableTrapsAlarmType;
  }

  // enable_traps_auth_framework_sec_violation - computed: false, optional: true, required: false
  private _enableTrapsAuthFrameworkSecViolation?: boolean | cdktf.IResolvable; 
  public get enableTrapsAuthFrameworkSecViolation() {
    return this.getBooleanAttribute('enable_traps_auth_framework_sec_violation');
  }
  public set enableTrapsAuthFrameworkSecViolation(value: boolean | cdktf.IResolvable) {
    this._enableTrapsAuthFrameworkSecViolation = value;
  }
  public resetEnableTrapsAuthFrameworkSecViolation() {
    this._enableTrapsAuthFrameworkSecViolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsAuthFrameworkSecViolationInput() {
    return this._enableTrapsAuthFrameworkSecViolation;
  }

  // enable_traps_bfd - computed: false, optional: true, required: false
  private _enableTrapsBfd?: boolean | cdktf.IResolvable; 
  public get enableTrapsBfd() {
    return this.getBooleanAttribute('enable_traps_bfd');
  }
  public set enableTrapsBfd(value: boolean | cdktf.IResolvable) {
    this._enableTrapsBfd = value;
  }
  public resetEnableTrapsBfd() {
    this._enableTrapsBfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsBfdInput() {
    return this._enableTrapsBfd;
  }

  // enable_traps_bgp - computed: false, optional: true, required: false
  private _enableTrapsBgp?: boolean | cdktf.IResolvable; 
  public get enableTrapsBgp() {
    return this.getBooleanAttribute('enable_traps_bgp');
  }
  public set enableTrapsBgp(value: boolean | cdktf.IResolvable) {
    this._enableTrapsBgp = value;
  }
  public resetEnableTrapsBgp() {
    this._enableTrapsBgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsBgpInput() {
    return this._enableTrapsBgp;
  }

  // enable_traps_bgp_cbgp2 - computed: false, optional: true, required: false
  private _enableTrapsBgpCbgp2?: boolean | cdktf.IResolvable; 
  public get enableTrapsBgpCbgp2() {
    return this.getBooleanAttribute('enable_traps_bgp_cbgp2');
  }
  public set enableTrapsBgpCbgp2(value: boolean | cdktf.IResolvable) {
    this._enableTrapsBgpCbgp2 = value;
  }
  public resetEnableTrapsBgpCbgp2() {
    this._enableTrapsBgpCbgp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsBgpCbgp2Input() {
    return this._enableTrapsBgpCbgp2;
  }

  // enable_traps_bgp_cbgp2_state_changes - computed: false, optional: true, required: false
  private _enableTrapsBgpCbgp2StateChanges?: string[]; 
  public get enableTrapsBgpCbgp2StateChanges() {
    return this.getListAttribute('enable_traps_bgp_cbgp2_state_changes');
  }
  public set enableTrapsBgpCbgp2StateChanges(value: string[]) {
    this._enableTrapsBgpCbgp2StateChanges = value;
  }
  public resetEnableTrapsBgpCbgp2StateChanges() {
    this._enableTrapsBgpCbgp2StateChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsBgpCbgp2StateChangesInput() {
    return this._enableTrapsBgpCbgp2StateChanges;
  }

  // enable_traps_bgp_cbgp2_threshold_prefix - computed: false, optional: true, required: false
  private _enableTrapsBgpCbgp2ThresholdPrefix?: boolean | cdktf.IResolvable; 
  public get enableTrapsBgpCbgp2ThresholdPrefix() {
    return this.getBooleanAttribute('enable_traps_bgp_cbgp2_threshold_prefix');
  }
  public set enableTrapsBgpCbgp2ThresholdPrefix(value: boolean | cdktf.IResolvable) {
    this._enableTrapsBgpCbgp2ThresholdPrefix = value;
  }
  public resetEnableTrapsBgpCbgp2ThresholdPrefix() {
    this._enableTrapsBgpCbgp2ThresholdPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsBgpCbgp2ThresholdPrefixInput() {
    return this._enableTrapsBgpCbgp2ThresholdPrefix;
  }

  // enable_traps_bridge_newroot - computed: false, optional: true, required: false
  private _enableTrapsBridgeNewroot?: boolean | cdktf.IResolvable; 
  public get enableTrapsBridgeNewroot() {
    return this.getBooleanAttribute('enable_traps_bridge_newroot');
  }
  public set enableTrapsBridgeNewroot(value: boolean | cdktf.IResolvable) {
    this._enableTrapsBridgeNewroot = value;
  }
  public resetEnableTrapsBridgeNewroot() {
    this._enableTrapsBridgeNewroot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsBridgeNewrootInput() {
    return this._enableTrapsBridgeNewroot;
  }

  // enable_traps_bridge_topologychange - computed: false, optional: true, required: false
  private _enableTrapsBridgeTopologychange?: boolean | cdktf.IResolvable; 
  public get enableTrapsBridgeTopologychange() {
    return this.getBooleanAttribute('enable_traps_bridge_topologychange');
  }
  public set enableTrapsBridgeTopologychange(value: boolean | cdktf.IResolvable) {
    this._enableTrapsBridgeTopologychange = value;
  }
  public resetEnableTrapsBridgeTopologychange() {
    this._enableTrapsBridgeTopologychange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsBridgeTopologychangeInput() {
    return this._enableTrapsBridgeTopologychange;
  }

  // enable_traps_bulkstat_collection - computed: false, optional: true, required: false
  private _enableTrapsBulkstatCollection?: boolean | cdktf.IResolvable; 
  public get enableTrapsBulkstatCollection() {
    return this.getBooleanAttribute('enable_traps_bulkstat_collection');
  }
  public set enableTrapsBulkstatCollection(value: boolean | cdktf.IResolvable) {
    this._enableTrapsBulkstatCollection = value;
  }
  public resetEnableTrapsBulkstatCollection() {
    this._enableTrapsBulkstatCollection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsBulkstatCollectionInput() {
    return this._enableTrapsBulkstatCollection;
  }

  // enable_traps_bulkstat_transfer - computed: false, optional: true, required: false
  private _enableTrapsBulkstatTransfer?: boolean | cdktf.IResolvable; 
  public get enableTrapsBulkstatTransfer() {
    return this.getBooleanAttribute('enable_traps_bulkstat_transfer');
  }
  public set enableTrapsBulkstatTransfer(value: boolean | cdktf.IResolvable) {
    this._enableTrapsBulkstatTransfer = value;
  }
  public resetEnableTrapsBulkstatTransfer() {
    this._enableTrapsBulkstatTransfer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsBulkstatTransferInput() {
    return this._enableTrapsBulkstatTransfer;
  }

  // enable_traps_call_home_message_send_fail - computed: false, optional: true, required: false
  private _enableTrapsCallHomeMessageSendFail?: boolean | cdktf.IResolvable; 
  public get enableTrapsCallHomeMessageSendFail() {
    return this.getBooleanAttribute('enable_traps_call_home_message_send_fail');
  }
  public set enableTrapsCallHomeMessageSendFail(value: boolean | cdktf.IResolvable) {
    this._enableTrapsCallHomeMessageSendFail = value;
  }
  public resetEnableTrapsCallHomeMessageSendFail() {
    this._enableTrapsCallHomeMessageSendFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsCallHomeMessageSendFailInput() {
    return this._enableTrapsCallHomeMessageSendFail;
  }

  // enable_traps_call_home_server_fail - computed: false, optional: true, required: false
  private _enableTrapsCallHomeServerFail?: boolean | cdktf.IResolvable; 
  public get enableTrapsCallHomeServerFail() {
    return this.getBooleanAttribute('enable_traps_call_home_server_fail');
  }
  public set enableTrapsCallHomeServerFail(value: boolean | cdktf.IResolvable) {
    this._enableTrapsCallHomeServerFail = value;
  }
  public resetEnableTrapsCallHomeServerFail() {
    this._enableTrapsCallHomeServerFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsCallHomeServerFailInput() {
    return this._enableTrapsCallHomeServerFail;
  }

  // enable_traps_casa - computed: false, optional: true, required: false
  private _enableTrapsCasa?: boolean | cdktf.IResolvable; 
  public get enableTrapsCasa() {
    return this.getBooleanAttribute('enable_traps_casa');
  }
  public set enableTrapsCasa(value: boolean | cdktf.IResolvable) {
    this._enableTrapsCasa = value;
  }
  public resetEnableTrapsCasa() {
    this._enableTrapsCasa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsCasaInput() {
    return this._enableTrapsCasa;
  }

  // enable_traps_cbgp2 - computed: false, optional: true, required: false
  private _enableTrapsCbgp2?: boolean | cdktf.IResolvable; 
  public get enableTrapsCbgp2() {
    return this.getBooleanAttribute('enable_traps_cbgp2');
  }
  public set enableTrapsCbgp2(value: boolean | cdktf.IResolvable) {
    this._enableTrapsCbgp2 = value;
  }
  public resetEnableTrapsCbgp2() {
    this._enableTrapsCbgp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsCbgp2Input() {
    return this._enableTrapsCbgp2;
  }

  // enable_traps_cef_inconsistency - computed: false, optional: true, required: false
  private _enableTrapsCefInconsistency?: boolean | cdktf.IResolvable; 
  public get enableTrapsCefInconsistency() {
    return this.getBooleanAttribute('enable_traps_cef_inconsistency');
  }
  public set enableTrapsCefInconsistency(value: boolean | cdktf.IResolvable) {
    this._enableTrapsCefInconsistency = value;
  }
  public resetEnableTrapsCefInconsistency() {
    this._enableTrapsCefInconsistency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsCefInconsistencyInput() {
    return this._enableTrapsCefInconsistency;
  }

  // enable_traps_cef_peer_fib_state_change - computed: false, optional: true, required: false
  private _enableTrapsCefPeerFibStateChange?: boolean | cdktf.IResolvable; 
  public get enableTrapsCefPeerFibStateChange() {
    return this.getBooleanAttribute('enable_traps_cef_peer_fib_state_change');
  }
  public set enableTrapsCefPeerFibStateChange(value: boolean | cdktf.IResolvable) {
    this._enableTrapsCefPeerFibStateChange = value;
  }
  public resetEnableTrapsCefPeerFibStateChange() {
    this._enableTrapsCefPeerFibStateChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsCefPeerFibStateChangeInput() {
    return this._enableTrapsCefPeerFibStateChange;
  }

  // enable_traps_cef_peer_state_change - computed: false, optional: true, required: false
  private _enableTrapsCefPeerStateChange?: boolean | cdktf.IResolvable; 
  public get enableTrapsCefPeerStateChange() {
    return this.getBooleanAttribute('enable_traps_cef_peer_state_change');
  }
  public set enableTrapsCefPeerStateChange(value: boolean | cdktf.IResolvable) {
    this._enableTrapsCefPeerStateChange = value;
  }
  public resetEnableTrapsCefPeerStateChange() {
    this._enableTrapsCefPeerStateChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsCefPeerStateChangeInput() {
    return this._enableTrapsCefPeerStateChange;
  }

  // enable_traps_cef_resource_failure - computed: false, optional: true, required: false
  private _enableTrapsCefResourceFailure?: boolean | cdktf.IResolvable; 
  public get enableTrapsCefResourceFailure() {
    return this.getBooleanAttribute('enable_traps_cef_resource_failure');
  }
  public set enableTrapsCefResourceFailure(value: boolean | cdktf.IResolvable) {
    this._enableTrapsCefResourceFailure = value;
  }
  public resetEnableTrapsCefResourceFailure() {
    this._enableTrapsCefResourceFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsCefResourceFailureInput() {
    return this._enableTrapsCefResourceFailure;
  }

  // enable_traps_cnpd - computed: false, optional: true, required: false
  private _enableTrapsCnpd?: boolean | cdktf.IResolvable; 
  public get enableTrapsCnpd() {
    return this.getBooleanAttribute('enable_traps_cnpd');
  }
  public set enableTrapsCnpd(value: boolean | cdktf.IResolvable) {
    this._enableTrapsCnpd = value;
  }
  public resetEnableTrapsCnpd() {
    this._enableTrapsCnpd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsCnpdInput() {
    return this._enableTrapsCnpd;
  }

  // enable_traps_config - computed: false, optional: true, required: false
  private _enableTrapsConfig?: boolean | cdktf.IResolvable; 
  public get enableTrapsConfig() {
    return this.getBooleanAttribute('enable_traps_config');
  }
  public set enableTrapsConfig(value: boolean | cdktf.IResolvable) {
    this._enableTrapsConfig = value;
  }
  public resetEnableTrapsConfig() {
    this._enableTrapsConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsConfigInput() {
    return this._enableTrapsConfig;
  }

  // enable_traps_config_copy - computed: false, optional: true, required: false
  private _enableTrapsConfigCopy?: boolean | cdktf.IResolvable; 
  public get enableTrapsConfigCopy() {
    return this.getBooleanAttribute('enable_traps_config_copy');
  }
  public set enableTrapsConfigCopy(value: boolean | cdktf.IResolvable) {
    this._enableTrapsConfigCopy = value;
  }
  public resetEnableTrapsConfigCopy() {
    this._enableTrapsConfigCopy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsConfigCopyInput() {
    return this._enableTrapsConfigCopy;
  }

  // enable_traps_config_ctid - computed: false, optional: true, required: false
  private _enableTrapsConfigCtid?: boolean | cdktf.IResolvable; 
  public get enableTrapsConfigCtid() {
    return this.getBooleanAttribute('enable_traps_config_ctid');
  }
  public set enableTrapsConfigCtid(value: boolean | cdktf.IResolvable) {
    this._enableTrapsConfigCtid = value;
  }
  public resetEnableTrapsConfigCtid() {
    this._enableTrapsConfigCtid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsConfigCtidInput() {
    return this._enableTrapsConfigCtid;
  }

  // enable_traps_cpu_threshold - computed: false, optional: true, required: false
  private _enableTrapsCpuThreshold?: boolean | cdktf.IResolvable; 
  public get enableTrapsCpuThreshold() {
    return this.getBooleanAttribute('enable_traps_cpu_threshold');
  }
  public set enableTrapsCpuThreshold(value: boolean | cdktf.IResolvable) {
    this._enableTrapsCpuThreshold = value;
  }
  public resetEnableTrapsCpuThreshold() {
    this._enableTrapsCpuThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsCpuThresholdInput() {
    return this._enableTrapsCpuThreshold;
  }

  // enable_traps_dhcp - computed: false, optional: true, required: false
  private _enableTrapsDhcp?: boolean | cdktf.IResolvable; 
  public get enableTrapsDhcp() {
    return this.getBooleanAttribute('enable_traps_dhcp');
  }
  public set enableTrapsDhcp(value: boolean | cdktf.IResolvable) {
    this._enableTrapsDhcp = value;
  }
  public resetEnableTrapsDhcp() {
    this._enableTrapsDhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsDhcpInput() {
    return this._enableTrapsDhcp;
  }

  // enable_traps_dial - computed: false, optional: true, required: false
  private _enableTrapsDial?: boolean | cdktf.IResolvable; 
  public get enableTrapsDial() {
    return this.getBooleanAttribute('enable_traps_dial');
  }
  public set enableTrapsDial(value: boolean | cdktf.IResolvable) {
    this._enableTrapsDial = value;
  }
  public resetEnableTrapsDial() {
    this._enableTrapsDial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsDialInput() {
    return this._enableTrapsDial;
  }

  // enable_traps_dlsw - computed: false, optional: true, required: false
  private _enableTrapsDlsw?: boolean | cdktf.IResolvable; 
  public get enableTrapsDlsw() {
    return this.getBooleanAttribute('enable_traps_dlsw');
  }
  public set enableTrapsDlsw(value: boolean | cdktf.IResolvable) {
    this._enableTrapsDlsw = value;
  }
  public resetEnableTrapsDlsw() {
    this._enableTrapsDlsw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsDlswInput() {
    return this._enableTrapsDlsw;
  }

  // enable_traps_ds1 - computed: false, optional: true, required: false
  private _enableTrapsDs1?: boolean | cdktf.IResolvable; 
  public get enableTrapsDs1() {
    return this.getBooleanAttribute('enable_traps_ds1');
  }
  public set enableTrapsDs1(value: boolean | cdktf.IResolvable) {
    this._enableTrapsDs1 = value;
  }
  public resetEnableTrapsDs1() {
    this._enableTrapsDs1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsDs1Input() {
    return this._enableTrapsDs1;
  }

  // enable_traps_dsp_card_status - computed: false, optional: true, required: false
  private _enableTrapsDspCardStatus?: boolean | cdktf.IResolvable; 
  public get enableTrapsDspCardStatus() {
    return this.getBooleanAttribute('enable_traps_dsp_card_status');
  }
  public set enableTrapsDspCardStatus(value: boolean | cdktf.IResolvable) {
    this._enableTrapsDspCardStatus = value;
  }
  public resetEnableTrapsDspCardStatus() {
    this._enableTrapsDspCardStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsDspCardStatusInput() {
    return this._enableTrapsDspCardStatus;
  }

  // enable_traps_dsp_oper_state - computed: false, optional: true, required: false
  private _enableTrapsDspOperState?: boolean | cdktf.IResolvable; 
  public get enableTrapsDspOperState() {
    return this.getBooleanAttribute('enable_traps_dsp_oper_state');
  }
  public set enableTrapsDspOperState(value: boolean | cdktf.IResolvable) {
    this._enableTrapsDspOperState = value;
  }
  public resetEnableTrapsDspOperState() {
    this._enableTrapsDspOperState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsDspOperStateInput() {
    return this._enableTrapsDspOperState;
  }

  // enable_traps_eigrp - computed: false, optional: true, required: false
  private _enableTrapsEigrp?: boolean | cdktf.IResolvable; 
  public get enableTrapsEigrp() {
    return this.getBooleanAttribute('enable_traps_eigrp');
  }
  public set enableTrapsEigrp(value: boolean | cdktf.IResolvable) {
    this._enableTrapsEigrp = value;
  }
  public resetEnableTrapsEigrp() {
    this._enableTrapsEigrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsEigrpInput() {
    return this._enableTrapsEigrp;
  }

  // enable_traps_energywise - computed: false, optional: true, required: false
  private _enableTrapsEnergywise?: boolean | cdktf.IResolvable; 
  public get enableTrapsEnergywise() {
    return this.getBooleanAttribute('enable_traps_energywise');
  }
  public set enableTrapsEnergywise(value: boolean | cdktf.IResolvable) {
    this._enableTrapsEnergywise = value;
  }
  public resetEnableTrapsEnergywise() {
    this._enableTrapsEnergywise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsEnergywiseInput() {
    return this._enableTrapsEnergywise;
  }

  // enable_traps_entity - computed: false, optional: true, required: false
  private _enableTrapsEntity?: boolean | cdktf.IResolvable; 
  public get enableTrapsEntity() {
    return this.getBooleanAttribute('enable_traps_entity');
  }
  public set enableTrapsEntity(value: boolean | cdktf.IResolvable) {
    this._enableTrapsEntity = value;
  }
  public resetEnableTrapsEntity() {
    this._enableTrapsEntity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsEntityInput() {
    return this._enableTrapsEntity;
  }

  // enable_traps_entity_diag_boot_up_fail - computed: false, optional: true, required: false
  private _enableTrapsEntityDiagBootUpFail?: boolean | cdktf.IResolvable; 
  public get enableTrapsEntityDiagBootUpFail() {
    return this.getBooleanAttribute('enable_traps_entity_diag_boot_up_fail');
  }
  public set enableTrapsEntityDiagBootUpFail(value: boolean | cdktf.IResolvable) {
    this._enableTrapsEntityDiagBootUpFail = value;
  }
  public resetEnableTrapsEntityDiagBootUpFail() {
    this._enableTrapsEntityDiagBootUpFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsEntityDiagBootUpFailInput() {
    return this._enableTrapsEntityDiagBootUpFail;
  }

  // enable_traps_entity_diag_hm_test_recover - computed: false, optional: true, required: false
  private _enableTrapsEntityDiagHmTestRecover?: boolean | cdktf.IResolvable; 
  public get enableTrapsEntityDiagHmTestRecover() {
    return this.getBooleanAttribute('enable_traps_entity_diag_hm_test_recover');
  }
  public set enableTrapsEntityDiagHmTestRecover(value: boolean | cdktf.IResolvable) {
    this._enableTrapsEntityDiagHmTestRecover = value;
  }
  public resetEnableTrapsEntityDiagHmTestRecover() {
    this._enableTrapsEntityDiagHmTestRecover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsEntityDiagHmTestRecoverInput() {
    return this._enableTrapsEntityDiagHmTestRecover;
  }

  // enable_traps_entity_diag_hm_thresh_reached - computed: false, optional: true, required: false
  private _enableTrapsEntityDiagHmThreshReached?: boolean | cdktf.IResolvable; 
  public get enableTrapsEntityDiagHmThreshReached() {
    return this.getBooleanAttribute('enable_traps_entity_diag_hm_thresh_reached');
  }
  public set enableTrapsEntityDiagHmThreshReached(value: boolean | cdktf.IResolvable) {
    this._enableTrapsEntityDiagHmThreshReached = value;
  }
  public resetEnableTrapsEntityDiagHmThreshReached() {
    this._enableTrapsEntityDiagHmThreshReached = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsEntityDiagHmThreshReachedInput() {
    return this._enableTrapsEntityDiagHmThreshReached;
  }

  // enable_traps_entity_diag_scheduled_test_fail - computed: false, optional: true, required: false
  private _enableTrapsEntityDiagScheduledTestFail?: boolean | cdktf.IResolvable; 
  public get enableTrapsEntityDiagScheduledTestFail() {
    return this.getBooleanAttribute('enable_traps_entity_diag_scheduled_test_fail');
  }
  public set enableTrapsEntityDiagScheduledTestFail(value: boolean | cdktf.IResolvable) {
    this._enableTrapsEntityDiagScheduledTestFail = value;
  }
  public resetEnableTrapsEntityDiagScheduledTestFail() {
    this._enableTrapsEntityDiagScheduledTestFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsEntityDiagScheduledTestFailInput() {
    return this._enableTrapsEntityDiagScheduledTestFail;
  }

  // enable_traps_entity_perf_throughput_notif - computed: false, optional: true, required: false
  private _enableTrapsEntityPerfThroughputNotif?: boolean | cdktf.IResolvable; 
  public get enableTrapsEntityPerfThroughputNotif() {
    return this.getBooleanAttribute('enable_traps_entity_perf_throughput_notif');
  }
  public set enableTrapsEntityPerfThroughputNotif(value: boolean | cdktf.IResolvable) {
    this._enableTrapsEntityPerfThroughputNotif = value;
  }
  public resetEnableTrapsEntityPerfThroughputNotif() {
    this._enableTrapsEntityPerfThroughputNotif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsEntityPerfThroughputNotifInput() {
    return this._enableTrapsEntityPerfThroughputNotif;
  }

  // enable_traps_entity_qfp_mem_res_thresh - computed: false, optional: true, required: false
  private _enableTrapsEntityQfpMemResThresh?: boolean | cdktf.IResolvable; 
  public get enableTrapsEntityQfpMemResThresh() {
    return this.getBooleanAttribute('enable_traps_entity_qfp_mem_res_thresh');
  }
  public set enableTrapsEntityQfpMemResThresh(value: boolean | cdktf.IResolvable) {
    this._enableTrapsEntityQfpMemResThresh = value;
  }
  public resetEnableTrapsEntityQfpMemResThresh() {
    this._enableTrapsEntityQfpMemResThresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsEntityQfpMemResThreshInput() {
    return this._enableTrapsEntityQfpMemResThresh;
  }

  // enable_traps_entity_qfp_throughput_notif - computed: false, optional: true, required: false
  private _enableTrapsEntityQfpThroughputNotif?: boolean | cdktf.IResolvable; 
  public get enableTrapsEntityQfpThroughputNotif() {
    return this.getBooleanAttribute('enable_traps_entity_qfp_throughput_notif');
  }
  public set enableTrapsEntityQfpThroughputNotif(value: boolean | cdktf.IResolvable) {
    this._enableTrapsEntityQfpThroughputNotif = value;
  }
  public resetEnableTrapsEntityQfpThroughputNotif() {
    this._enableTrapsEntityQfpThroughputNotif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsEntityQfpThroughputNotifInput() {
    return this._enableTrapsEntityQfpThroughputNotif;
  }

  // enable_traps_entity_sensor - computed: false, optional: true, required: false
  private _enableTrapsEntitySensor?: boolean | cdktf.IResolvable; 
  public get enableTrapsEntitySensor() {
    return this.getBooleanAttribute('enable_traps_entity_sensor');
  }
  public set enableTrapsEntitySensor(value: boolean | cdktf.IResolvable) {
    this._enableTrapsEntitySensor = value;
  }
  public resetEnableTrapsEntitySensor() {
    this._enableTrapsEntitySensor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsEntitySensorInput() {
    return this._enableTrapsEntitySensor;
  }

  // enable_traps_entity_state - computed: false, optional: true, required: false
  private _enableTrapsEntityState?: boolean | cdktf.IResolvable; 
  public get enableTrapsEntityState() {
    return this.getBooleanAttribute('enable_traps_entity_state');
  }
  public set enableTrapsEntityState(value: boolean | cdktf.IResolvable) {
    this._enableTrapsEntityState = value;
  }
  public resetEnableTrapsEntityState() {
    this._enableTrapsEntityState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsEntityStateInput() {
    return this._enableTrapsEntityState;
  }

  // enable_traps_envmon - computed: false, optional: true, required: false
  private _enableTrapsEnvmon?: boolean | cdktf.IResolvable; 
  public get enableTrapsEnvmon() {
    return this.getBooleanAttribute('enable_traps_envmon');
  }
  public set enableTrapsEnvmon(value: boolean | cdktf.IResolvable) {
    this._enableTrapsEnvmon = value;
  }
  public resetEnableTrapsEnvmon() {
    this._enableTrapsEnvmon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsEnvmonInput() {
    return this._enableTrapsEnvmon;
  }

  // enable_traps_errdisable - computed: false, optional: true, required: false
  private _enableTrapsErrdisable?: boolean | cdktf.IResolvable; 
  public get enableTrapsErrdisable() {
    return this.getBooleanAttribute('enable_traps_errdisable');
  }
  public set enableTrapsErrdisable(value: boolean | cdktf.IResolvable) {
    this._enableTrapsErrdisable = value;
  }
  public resetEnableTrapsErrdisable() {
    this._enableTrapsErrdisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsErrdisableInput() {
    return this._enableTrapsErrdisable;
  }

  // enable_traps_ether_oam - computed: false, optional: true, required: false
  private _enableTrapsEtherOam?: boolean | cdktf.IResolvable; 
  public get enableTrapsEtherOam() {
    return this.getBooleanAttribute('enable_traps_ether_oam');
  }
  public set enableTrapsEtherOam(value: boolean | cdktf.IResolvable) {
    this._enableTrapsEtherOam = value;
  }
  public resetEnableTrapsEtherOam() {
    this._enableTrapsEtherOam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsEtherOamInput() {
    return this._enableTrapsEtherOam;
  }

  // enable_traps_ethernet_cfm_alarm - computed: false, optional: true, required: false
  private _enableTrapsEthernetCfmAlarm?: boolean | cdktf.IResolvable; 
  public get enableTrapsEthernetCfmAlarm() {
    return this.getBooleanAttribute('enable_traps_ethernet_cfm_alarm');
  }
  public set enableTrapsEthernetCfmAlarm(value: boolean | cdktf.IResolvable) {
    this._enableTrapsEthernetCfmAlarm = value;
  }
  public resetEnableTrapsEthernetCfmAlarm() {
    this._enableTrapsEthernetCfmAlarm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsEthernetCfmAlarmInput() {
    return this._enableTrapsEthernetCfmAlarm;
  }

  // enable_traps_ethernet_cfm_cc_config - computed: false, optional: true, required: false
  private _enableTrapsEthernetCfmCcConfig?: boolean | cdktf.IResolvable; 
  public get enableTrapsEthernetCfmCcConfig() {
    return this.getBooleanAttribute('enable_traps_ethernet_cfm_cc_config');
  }
  public set enableTrapsEthernetCfmCcConfig(value: boolean | cdktf.IResolvable) {
    this._enableTrapsEthernetCfmCcConfig = value;
  }
  public resetEnableTrapsEthernetCfmCcConfig() {
    this._enableTrapsEthernetCfmCcConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsEthernetCfmCcConfigInput() {
    return this._enableTrapsEthernetCfmCcConfig;
  }

  // enable_traps_ethernet_cfm_cc_cross_connect - computed: false, optional: true, required: false
  private _enableTrapsEthernetCfmCcCrossConnect?: boolean | cdktf.IResolvable; 
  public get enableTrapsEthernetCfmCcCrossConnect() {
    return this.getBooleanAttribute('enable_traps_ethernet_cfm_cc_cross_connect');
  }
  public set enableTrapsEthernetCfmCcCrossConnect(value: boolean | cdktf.IResolvable) {
    this._enableTrapsEthernetCfmCcCrossConnect = value;
  }
  public resetEnableTrapsEthernetCfmCcCrossConnect() {
    this._enableTrapsEthernetCfmCcCrossConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsEthernetCfmCcCrossConnectInput() {
    return this._enableTrapsEthernetCfmCcCrossConnect;
  }

  // enable_traps_ethernet_cfm_cc_loop - computed: false, optional: true, required: false
  private _enableTrapsEthernetCfmCcLoop?: boolean | cdktf.IResolvable; 
  public get enableTrapsEthernetCfmCcLoop() {
    return this.getBooleanAttribute('enable_traps_ethernet_cfm_cc_loop');
  }
  public set enableTrapsEthernetCfmCcLoop(value: boolean | cdktf.IResolvable) {
    this._enableTrapsEthernetCfmCcLoop = value;
  }
  public resetEnableTrapsEthernetCfmCcLoop() {
    this._enableTrapsEthernetCfmCcLoop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsEthernetCfmCcLoopInput() {
    return this._enableTrapsEthernetCfmCcLoop;
  }

  // enable_traps_ethernet_cfm_cc_mep_down - computed: false, optional: true, required: false
  private _enableTrapsEthernetCfmCcMepDown?: boolean | cdktf.IResolvable; 
  public get enableTrapsEthernetCfmCcMepDown() {
    return this.getBooleanAttribute('enable_traps_ethernet_cfm_cc_mep_down');
  }
  public set enableTrapsEthernetCfmCcMepDown(value: boolean | cdktf.IResolvable) {
    this._enableTrapsEthernetCfmCcMepDown = value;
  }
  public resetEnableTrapsEthernetCfmCcMepDown() {
    this._enableTrapsEthernetCfmCcMepDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsEthernetCfmCcMepDownInput() {
    return this._enableTrapsEthernetCfmCcMepDown;
  }

  // enable_traps_ethernet_cfm_cc_mep_up - computed: false, optional: true, required: false
  private _enableTrapsEthernetCfmCcMepUp?: boolean | cdktf.IResolvable; 
  public get enableTrapsEthernetCfmCcMepUp() {
    return this.getBooleanAttribute('enable_traps_ethernet_cfm_cc_mep_up');
  }
  public set enableTrapsEthernetCfmCcMepUp(value: boolean | cdktf.IResolvable) {
    this._enableTrapsEthernetCfmCcMepUp = value;
  }
  public resetEnableTrapsEthernetCfmCcMepUp() {
    this._enableTrapsEthernetCfmCcMepUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsEthernetCfmCcMepUpInput() {
    return this._enableTrapsEthernetCfmCcMepUp;
  }

  // enable_traps_ethernet_cfm_crosscheck_mep_missing - computed: false, optional: true, required: false
  private _enableTrapsEthernetCfmCrosscheckMepMissing?: boolean | cdktf.IResolvable; 
  public get enableTrapsEthernetCfmCrosscheckMepMissing() {
    return this.getBooleanAttribute('enable_traps_ethernet_cfm_crosscheck_mep_missing');
  }
  public set enableTrapsEthernetCfmCrosscheckMepMissing(value: boolean | cdktf.IResolvable) {
    this._enableTrapsEthernetCfmCrosscheckMepMissing = value;
  }
  public resetEnableTrapsEthernetCfmCrosscheckMepMissing() {
    this._enableTrapsEthernetCfmCrosscheckMepMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsEthernetCfmCrosscheckMepMissingInput() {
    return this._enableTrapsEthernetCfmCrosscheckMepMissing;
  }

  // enable_traps_ethernet_cfm_crosscheck_mep_unknown - computed: false, optional: true, required: false
  private _enableTrapsEthernetCfmCrosscheckMepUnknown?: boolean | cdktf.IResolvable; 
  public get enableTrapsEthernetCfmCrosscheckMepUnknown() {
    return this.getBooleanAttribute('enable_traps_ethernet_cfm_crosscheck_mep_unknown');
  }
  public set enableTrapsEthernetCfmCrosscheckMepUnknown(value: boolean | cdktf.IResolvable) {
    this._enableTrapsEthernetCfmCrosscheckMepUnknown = value;
  }
  public resetEnableTrapsEthernetCfmCrosscheckMepUnknown() {
    this._enableTrapsEthernetCfmCrosscheckMepUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsEthernetCfmCrosscheckMepUnknownInput() {
    return this._enableTrapsEthernetCfmCrosscheckMepUnknown;
  }

  // enable_traps_ethernet_cfm_crosscheck_service_up - computed: false, optional: true, required: false
  private _enableTrapsEthernetCfmCrosscheckServiceUp?: boolean | cdktf.IResolvable; 
  public get enableTrapsEthernetCfmCrosscheckServiceUp() {
    return this.getBooleanAttribute('enable_traps_ethernet_cfm_crosscheck_service_up');
  }
  public set enableTrapsEthernetCfmCrosscheckServiceUp(value: boolean | cdktf.IResolvable) {
    this._enableTrapsEthernetCfmCrosscheckServiceUp = value;
  }
  public resetEnableTrapsEthernetCfmCrosscheckServiceUp() {
    this._enableTrapsEthernetCfmCrosscheckServiceUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsEthernetCfmCrosscheckServiceUpInput() {
    return this._enableTrapsEthernetCfmCrosscheckServiceUp;
  }

  // enable_traps_ethernet_evc_create - computed: false, optional: true, required: false
  private _enableTrapsEthernetEvcCreate?: boolean | cdktf.IResolvable; 
  public get enableTrapsEthernetEvcCreate() {
    return this.getBooleanAttribute('enable_traps_ethernet_evc_create');
  }
  public set enableTrapsEthernetEvcCreate(value: boolean | cdktf.IResolvable) {
    this._enableTrapsEthernetEvcCreate = value;
  }
  public resetEnableTrapsEthernetEvcCreate() {
    this._enableTrapsEthernetEvcCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsEthernetEvcCreateInput() {
    return this._enableTrapsEthernetEvcCreate;
  }

  // enable_traps_ethernet_evc_delete - computed: false, optional: true, required: false
  private _enableTrapsEthernetEvcDelete?: boolean | cdktf.IResolvable; 
  public get enableTrapsEthernetEvcDelete() {
    return this.getBooleanAttribute('enable_traps_ethernet_evc_delete');
  }
  public set enableTrapsEthernetEvcDelete(value: boolean | cdktf.IResolvable) {
    this._enableTrapsEthernetEvcDelete = value;
  }
  public resetEnableTrapsEthernetEvcDelete() {
    this._enableTrapsEthernetEvcDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsEthernetEvcDeleteInput() {
    return this._enableTrapsEthernetEvcDelete;
  }

  // enable_traps_ethernet_evc_status - computed: false, optional: true, required: false
  private _enableTrapsEthernetEvcStatus?: boolean | cdktf.IResolvable; 
  public get enableTrapsEthernetEvcStatus() {
    return this.getBooleanAttribute('enable_traps_ethernet_evc_status');
  }
  public set enableTrapsEthernetEvcStatus(value: boolean | cdktf.IResolvable) {
    this._enableTrapsEthernetEvcStatus = value;
  }
  public resetEnableTrapsEthernetEvcStatus() {
    this._enableTrapsEthernetEvcStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsEthernetEvcStatusInput() {
    return this._enableTrapsEthernetEvcStatus;
  }

  // enable_traps_event_manager - computed: false, optional: true, required: false
  private _enableTrapsEventManager?: boolean | cdktf.IResolvable; 
  public get enableTrapsEventManager() {
    return this.getBooleanAttribute('enable_traps_event_manager');
  }
  public set enableTrapsEventManager(value: boolean | cdktf.IResolvable) {
    this._enableTrapsEventManager = value;
  }
  public resetEnableTrapsEventManager() {
    this._enableTrapsEventManager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsEventManagerInput() {
    return this._enableTrapsEventManager;
  }

  // enable_traps_fast_reroute_protected - computed: false, optional: true, required: false
  private _enableTrapsFastRerouteProtected?: boolean | cdktf.IResolvable; 
  public get enableTrapsFastRerouteProtected() {
    return this.getBooleanAttribute('enable_traps_fast_reroute_protected');
  }
  public set enableTrapsFastRerouteProtected(value: boolean | cdktf.IResolvable) {
    this._enableTrapsFastRerouteProtected = value;
  }
  public resetEnableTrapsFastRerouteProtected() {
    this._enableTrapsFastRerouteProtected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsFastRerouteProtectedInput() {
    return this._enableTrapsFastRerouteProtected;
  }

  // enable_traps_firewall_serverstatus - computed: false, optional: true, required: false
  private _enableTrapsFirewallServerstatus?: boolean | cdktf.IResolvable; 
  public get enableTrapsFirewallServerstatus() {
    return this.getBooleanAttribute('enable_traps_firewall_serverstatus');
  }
  public set enableTrapsFirewallServerstatus(value: boolean | cdktf.IResolvable) {
    this._enableTrapsFirewallServerstatus = value;
  }
  public resetEnableTrapsFirewallServerstatus() {
    this._enableTrapsFirewallServerstatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsFirewallServerstatusInput() {
    return this._enableTrapsFirewallServerstatus;
  }

  // enable_traps_flash_insertion - computed: false, optional: true, required: false
  private _enableTrapsFlashInsertion?: boolean | cdktf.IResolvable; 
  public get enableTrapsFlashInsertion() {
    return this.getBooleanAttribute('enable_traps_flash_insertion');
  }
  public set enableTrapsFlashInsertion(value: boolean | cdktf.IResolvable) {
    this._enableTrapsFlashInsertion = value;
  }
  public resetEnableTrapsFlashInsertion() {
    this._enableTrapsFlashInsertion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsFlashInsertionInput() {
    return this._enableTrapsFlashInsertion;
  }

  // enable_traps_flash_lowspace - computed: false, optional: true, required: false
  private _enableTrapsFlashLowspace?: boolean | cdktf.IResolvable; 
  public get enableTrapsFlashLowspace() {
    return this.getBooleanAttribute('enable_traps_flash_lowspace');
  }
  public set enableTrapsFlashLowspace(value: boolean | cdktf.IResolvable) {
    this._enableTrapsFlashLowspace = value;
  }
  public resetEnableTrapsFlashLowspace() {
    this._enableTrapsFlashLowspace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsFlashLowspaceInput() {
    return this._enableTrapsFlashLowspace;
  }

  // enable_traps_flash_removal - computed: false, optional: true, required: false
  private _enableTrapsFlashRemoval?: boolean | cdktf.IResolvable; 
  public get enableTrapsFlashRemoval() {
    return this.getBooleanAttribute('enable_traps_flash_removal');
  }
  public set enableTrapsFlashRemoval(value: boolean | cdktf.IResolvable) {
    this._enableTrapsFlashRemoval = value;
  }
  public resetEnableTrapsFlashRemoval() {
    this._enableTrapsFlashRemoval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsFlashRemovalInput() {
    return this._enableTrapsFlashRemoval;
  }

  // enable_traps_flowmon - computed: false, optional: true, required: false
  private _enableTrapsFlowmon?: boolean | cdktf.IResolvable; 
  public get enableTrapsFlowmon() {
    return this.getBooleanAttribute('enable_traps_flowmon');
  }
  public set enableTrapsFlowmon(value: boolean | cdktf.IResolvable) {
    this._enableTrapsFlowmon = value;
  }
  public resetEnableTrapsFlowmon() {
    this._enableTrapsFlowmon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsFlowmonInput() {
    return this._enableTrapsFlowmon;
  }

  // enable_traps_frame_relay_config_bundle_mismatch - computed: false, optional: true, required: false
  private _enableTrapsFrameRelayConfigBundleMismatch?: boolean | cdktf.IResolvable; 
  public get enableTrapsFrameRelayConfigBundleMismatch() {
    return this.getBooleanAttribute('enable_traps_frame_relay_config_bundle_mismatch');
  }
  public set enableTrapsFrameRelayConfigBundleMismatch(value: boolean | cdktf.IResolvable) {
    this._enableTrapsFrameRelayConfigBundleMismatch = value;
  }
  public resetEnableTrapsFrameRelayConfigBundleMismatch() {
    this._enableTrapsFrameRelayConfigBundleMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsFrameRelayConfigBundleMismatchInput() {
    return this._enableTrapsFrameRelayConfigBundleMismatch;
  }

  // enable_traps_frame_relay_config_only - computed: false, optional: true, required: false
  private _enableTrapsFrameRelayConfigOnly?: boolean | cdktf.IResolvable; 
  public get enableTrapsFrameRelayConfigOnly() {
    return this.getBooleanAttribute('enable_traps_frame_relay_config_only');
  }
  public set enableTrapsFrameRelayConfigOnly(value: boolean | cdktf.IResolvable) {
    this._enableTrapsFrameRelayConfigOnly = value;
  }
  public resetEnableTrapsFrameRelayConfigOnly() {
    this._enableTrapsFrameRelayConfigOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsFrameRelayConfigOnlyInput() {
    return this._enableTrapsFrameRelayConfigOnly;
  }

  // enable_traps_frame_relay_config_subif_configs - computed: false, optional: true, required: false
  private _enableTrapsFrameRelayConfigSubifConfigs?: boolean | cdktf.IResolvable; 
  public get enableTrapsFrameRelayConfigSubifConfigs() {
    return this.getBooleanAttribute('enable_traps_frame_relay_config_subif_configs');
  }
  public set enableTrapsFrameRelayConfigSubifConfigs(value: boolean | cdktf.IResolvable) {
    this._enableTrapsFrameRelayConfigSubifConfigs = value;
  }
  public resetEnableTrapsFrameRelayConfigSubifConfigs() {
    this._enableTrapsFrameRelayConfigSubifConfigs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsFrameRelayConfigSubifConfigsInput() {
    return this._enableTrapsFrameRelayConfigSubifConfigs;
  }

  // enable_traps_frame_relay_multilink_bundle_mismatch - computed: false, optional: true, required: false
  private _enableTrapsFrameRelayMultilinkBundleMismatch?: boolean | cdktf.IResolvable; 
  public get enableTrapsFrameRelayMultilinkBundleMismatch() {
    return this.getBooleanAttribute('enable_traps_frame_relay_multilink_bundle_mismatch');
  }
  public set enableTrapsFrameRelayMultilinkBundleMismatch(value: boolean | cdktf.IResolvable) {
    this._enableTrapsFrameRelayMultilinkBundleMismatch = value;
  }
  public resetEnableTrapsFrameRelayMultilinkBundleMismatch() {
    this._enableTrapsFrameRelayMultilinkBundleMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsFrameRelayMultilinkBundleMismatchInput() {
    return this._enableTrapsFrameRelayMultilinkBundleMismatch;
  }

  // enable_traps_frame_relay_subif_count - computed: false, optional: true, required: false
  private _enableTrapsFrameRelaySubifCount?: number; 
  public get enableTrapsFrameRelaySubifCount() {
    return this.getNumberAttribute('enable_traps_frame_relay_subif_count');
  }
  public set enableTrapsFrameRelaySubifCount(value: number) {
    this._enableTrapsFrameRelaySubifCount = value;
  }
  public resetEnableTrapsFrameRelaySubifCount() {
    this._enableTrapsFrameRelaySubifCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsFrameRelaySubifCountInput() {
    return this._enableTrapsFrameRelaySubifCount;
  }

  // enable_traps_frame_relay_subif_interval - computed: false, optional: true, required: false
  private _enableTrapsFrameRelaySubifInterval?: number; 
  public get enableTrapsFrameRelaySubifInterval() {
    return this.getNumberAttribute('enable_traps_frame_relay_subif_interval');
  }
  public set enableTrapsFrameRelaySubifInterval(value: number) {
    this._enableTrapsFrameRelaySubifInterval = value;
  }
  public resetEnableTrapsFrameRelaySubifInterval() {
    this._enableTrapsFrameRelaySubifInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsFrameRelaySubifIntervalInput() {
    return this._enableTrapsFrameRelaySubifInterval;
  }

  // enable_traps_fru_ctrl - computed: false, optional: true, required: false
  private _enableTrapsFruCtrl?: boolean | cdktf.IResolvable; 
  public get enableTrapsFruCtrl() {
    return this.getBooleanAttribute('enable_traps_fru_ctrl');
  }
  public set enableTrapsFruCtrl(value: boolean | cdktf.IResolvable) {
    this._enableTrapsFruCtrl = value;
  }
  public resetEnableTrapsFruCtrl() {
    this._enableTrapsFruCtrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsFruCtrlInput() {
    return this._enableTrapsFruCtrl;
  }

  // enable_traps_hsrp - computed: false, optional: true, required: false
  private _enableTrapsHsrp?: boolean | cdktf.IResolvable; 
  public get enableTrapsHsrp() {
    return this.getBooleanAttribute('enable_traps_hsrp');
  }
  public set enableTrapsHsrp(value: boolean | cdktf.IResolvable) {
    this._enableTrapsHsrp = value;
  }
  public resetEnableTrapsHsrp() {
    this._enableTrapsHsrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsHsrpInput() {
    return this._enableTrapsHsrp;
  }

  // enable_traps_ike_policy_add - computed: false, optional: true, required: false
  private _enableTrapsIkePolicyAdd?: boolean | cdktf.IResolvable; 
  public get enableTrapsIkePolicyAdd() {
    return this.getBooleanAttribute('enable_traps_ike_policy_add');
  }
  public set enableTrapsIkePolicyAdd(value: boolean | cdktf.IResolvable) {
    this._enableTrapsIkePolicyAdd = value;
  }
  public resetEnableTrapsIkePolicyAdd() {
    this._enableTrapsIkePolicyAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsIkePolicyAddInput() {
    return this._enableTrapsIkePolicyAdd;
  }

  // enable_traps_ike_policy_delete - computed: false, optional: true, required: false
  private _enableTrapsIkePolicyDelete?: boolean | cdktf.IResolvable; 
  public get enableTrapsIkePolicyDelete() {
    return this.getBooleanAttribute('enable_traps_ike_policy_delete');
  }
  public set enableTrapsIkePolicyDelete(value: boolean | cdktf.IResolvable) {
    this._enableTrapsIkePolicyDelete = value;
  }
  public resetEnableTrapsIkePolicyDelete() {
    this._enableTrapsIkePolicyDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsIkePolicyDeleteInput() {
    return this._enableTrapsIkePolicyDelete;
  }

  // enable_traps_ike_tunnel_start - computed: false, optional: true, required: false
  private _enableTrapsIkeTunnelStart?: boolean | cdktf.IResolvable; 
  public get enableTrapsIkeTunnelStart() {
    return this.getBooleanAttribute('enable_traps_ike_tunnel_start');
  }
  public set enableTrapsIkeTunnelStart(value: boolean | cdktf.IResolvable) {
    this._enableTrapsIkeTunnelStart = value;
  }
  public resetEnableTrapsIkeTunnelStart() {
    this._enableTrapsIkeTunnelStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsIkeTunnelStartInput() {
    return this._enableTrapsIkeTunnelStart;
  }

  // enable_traps_ike_tunnel_stop - computed: false, optional: true, required: false
  private _enableTrapsIkeTunnelStop?: boolean | cdktf.IResolvable; 
  public get enableTrapsIkeTunnelStop() {
    return this.getBooleanAttribute('enable_traps_ike_tunnel_stop');
  }
  public set enableTrapsIkeTunnelStop(value: boolean | cdktf.IResolvable) {
    this._enableTrapsIkeTunnelStop = value;
  }
  public resetEnableTrapsIkeTunnelStop() {
    this._enableTrapsIkeTunnelStop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsIkeTunnelStopInput() {
    return this._enableTrapsIkeTunnelStop;
  }

  // enable_traps_ip_local_pool - computed: false, optional: true, required: false
  private _enableTrapsIpLocalPool?: boolean | cdktf.IResolvable; 
  public get enableTrapsIpLocalPool() {
    return this.getBooleanAttribute('enable_traps_ip_local_pool');
  }
  public set enableTrapsIpLocalPool(value: boolean | cdktf.IResolvable) {
    this._enableTrapsIpLocalPool = value;
  }
  public resetEnableTrapsIpLocalPool() {
    this._enableTrapsIpLocalPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsIpLocalPoolInput() {
    return this._enableTrapsIpLocalPool;
  }

  // enable_traps_ipmulticast - computed: false, optional: true, required: false
  private _enableTrapsIpmulticast?: boolean | cdktf.IResolvable; 
  public get enableTrapsIpmulticast() {
    return this.getBooleanAttribute('enable_traps_ipmulticast');
  }
  public set enableTrapsIpmulticast(value: boolean | cdktf.IResolvable) {
    this._enableTrapsIpmulticast = value;
  }
  public resetEnableTrapsIpmulticast() {
    this._enableTrapsIpmulticast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsIpmulticastInput() {
    return this._enableTrapsIpmulticast;
  }

  // enable_traps_ipsec_cryptomap_add - computed: false, optional: true, required: false
  private _enableTrapsIpsecCryptomapAdd?: boolean | cdktf.IResolvable; 
  public get enableTrapsIpsecCryptomapAdd() {
    return this.getBooleanAttribute('enable_traps_ipsec_cryptomap_add');
  }
  public set enableTrapsIpsecCryptomapAdd(value: boolean | cdktf.IResolvable) {
    this._enableTrapsIpsecCryptomapAdd = value;
  }
  public resetEnableTrapsIpsecCryptomapAdd() {
    this._enableTrapsIpsecCryptomapAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsIpsecCryptomapAddInput() {
    return this._enableTrapsIpsecCryptomapAdd;
  }

  // enable_traps_ipsec_cryptomap_attach - computed: false, optional: true, required: false
  private _enableTrapsIpsecCryptomapAttach?: boolean | cdktf.IResolvable; 
  public get enableTrapsIpsecCryptomapAttach() {
    return this.getBooleanAttribute('enable_traps_ipsec_cryptomap_attach');
  }
  public set enableTrapsIpsecCryptomapAttach(value: boolean | cdktf.IResolvable) {
    this._enableTrapsIpsecCryptomapAttach = value;
  }
  public resetEnableTrapsIpsecCryptomapAttach() {
    this._enableTrapsIpsecCryptomapAttach = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsIpsecCryptomapAttachInput() {
    return this._enableTrapsIpsecCryptomapAttach;
  }

  // enable_traps_ipsec_cryptomap_delete - computed: false, optional: true, required: false
  private _enableTrapsIpsecCryptomapDelete?: boolean | cdktf.IResolvable; 
  public get enableTrapsIpsecCryptomapDelete() {
    return this.getBooleanAttribute('enable_traps_ipsec_cryptomap_delete');
  }
  public set enableTrapsIpsecCryptomapDelete(value: boolean | cdktf.IResolvable) {
    this._enableTrapsIpsecCryptomapDelete = value;
  }
  public resetEnableTrapsIpsecCryptomapDelete() {
    this._enableTrapsIpsecCryptomapDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsIpsecCryptomapDeleteInput() {
    return this._enableTrapsIpsecCryptomapDelete;
  }

  // enable_traps_ipsec_cryptomap_detach - computed: false, optional: true, required: false
  private _enableTrapsIpsecCryptomapDetach?: boolean | cdktf.IResolvable; 
  public get enableTrapsIpsecCryptomapDetach() {
    return this.getBooleanAttribute('enable_traps_ipsec_cryptomap_detach');
  }
  public set enableTrapsIpsecCryptomapDetach(value: boolean | cdktf.IResolvable) {
    this._enableTrapsIpsecCryptomapDetach = value;
  }
  public resetEnableTrapsIpsecCryptomapDetach() {
    this._enableTrapsIpsecCryptomapDetach = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsIpsecCryptomapDetachInput() {
    return this._enableTrapsIpsecCryptomapDetach;
  }

  // enable_traps_ipsec_too_many_sas - computed: false, optional: true, required: false
  private _enableTrapsIpsecTooManySas?: boolean | cdktf.IResolvable; 
  public get enableTrapsIpsecTooManySas() {
    return this.getBooleanAttribute('enable_traps_ipsec_too_many_sas');
  }
  public set enableTrapsIpsecTooManySas(value: boolean | cdktf.IResolvable) {
    this._enableTrapsIpsecTooManySas = value;
  }
  public resetEnableTrapsIpsecTooManySas() {
    this._enableTrapsIpsecTooManySas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsIpsecTooManySasInput() {
    return this._enableTrapsIpsecTooManySas;
  }

  // enable_traps_ipsec_tunnel_start - computed: false, optional: true, required: false
  private _enableTrapsIpsecTunnelStart?: boolean | cdktf.IResolvable; 
  public get enableTrapsIpsecTunnelStart() {
    return this.getBooleanAttribute('enable_traps_ipsec_tunnel_start');
  }
  public set enableTrapsIpsecTunnelStart(value: boolean | cdktf.IResolvable) {
    this._enableTrapsIpsecTunnelStart = value;
  }
  public resetEnableTrapsIpsecTunnelStart() {
    this._enableTrapsIpsecTunnelStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsIpsecTunnelStartInput() {
    return this._enableTrapsIpsecTunnelStart;
  }

  // enable_traps_ipsec_tunnel_stop - computed: false, optional: true, required: false
  private _enableTrapsIpsecTunnelStop?: boolean | cdktf.IResolvable; 
  public get enableTrapsIpsecTunnelStop() {
    return this.getBooleanAttribute('enable_traps_ipsec_tunnel_stop');
  }
  public set enableTrapsIpsecTunnelStop(value: boolean | cdktf.IResolvable) {
    this._enableTrapsIpsecTunnelStop = value;
  }
  public resetEnableTrapsIpsecTunnelStop() {
    this._enableTrapsIpsecTunnelStop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsIpsecTunnelStopInput() {
    return this._enableTrapsIpsecTunnelStop;
  }

  // enable_traps_ipsla - computed: false, optional: true, required: false
  private _enableTrapsIpsla?: boolean | cdktf.IResolvable; 
  public get enableTrapsIpsla() {
    return this.getBooleanAttribute('enable_traps_ipsla');
  }
  public set enableTrapsIpsla(value: boolean | cdktf.IResolvable) {
    this._enableTrapsIpsla = value;
  }
  public resetEnableTrapsIpsla() {
    this._enableTrapsIpsla = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsIpslaInput() {
    return this._enableTrapsIpsla;
  }

  // enable_traps_isdn_call_information - computed: false, optional: true, required: false
  private _enableTrapsIsdnCallInformation?: boolean | cdktf.IResolvable; 
  public get enableTrapsIsdnCallInformation() {
    return this.getBooleanAttribute('enable_traps_isdn_call_information');
  }
  public set enableTrapsIsdnCallInformation(value: boolean | cdktf.IResolvable) {
    this._enableTrapsIsdnCallInformation = value;
  }
  public resetEnableTrapsIsdnCallInformation() {
    this._enableTrapsIsdnCallInformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsIsdnCallInformationInput() {
    return this._enableTrapsIsdnCallInformation;
  }

  // enable_traps_isdn_chan_not_avail - computed: false, optional: true, required: false
  private _enableTrapsIsdnChanNotAvail?: boolean | cdktf.IResolvable; 
  public get enableTrapsIsdnChanNotAvail() {
    return this.getBooleanAttribute('enable_traps_isdn_chan_not_avail');
  }
  public set enableTrapsIsdnChanNotAvail(value: boolean | cdktf.IResolvable) {
    this._enableTrapsIsdnChanNotAvail = value;
  }
  public resetEnableTrapsIsdnChanNotAvail() {
    this._enableTrapsIsdnChanNotAvail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsIsdnChanNotAvailInput() {
    return this._enableTrapsIsdnChanNotAvail;
  }

  // enable_traps_isdn_ietf - computed: false, optional: true, required: false
  private _enableTrapsIsdnIetf?: boolean | cdktf.IResolvable; 
  public get enableTrapsIsdnIetf() {
    return this.getBooleanAttribute('enable_traps_isdn_ietf');
  }
  public set enableTrapsIsdnIetf(value: boolean | cdktf.IResolvable) {
    this._enableTrapsIsdnIetf = value;
  }
  public resetEnableTrapsIsdnIetf() {
    this._enableTrapsIsdnIetf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsIsdnIetfInput() {
    return this._enableTrapsIsdnIetf;
  }

  // enable_traps_isdn_layer2 - computed: false, optional: true, required: false
  private _enableTrapsIsdnLayer2?: boolean | cdktf.IResolvable; 
  public get enableTrapsIsdnLayer2() {
    return this.getBooleanAttribute('enable_traps_isdn_layer2');
  }
  public set enableTrapsIsdnLayer2(value: boolean | cdktf.IResolvable) {
    this._enableTrapsIsdnLayer2 = value;
  }
  public resetEnableTrapsIsdnLayer2() {
    this._enableTrapsIsdnLayer2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsIsdnLayer2Input() {
    return this._enableTrapsIsdnLayer2;
  }

  // enable_traps_isis - computed: false, optional: true, required: false
  private _enableTrapsIsis?: boolean | cdktf.IResolvable; 
  public get enableTrapsIsis() {
    return this.getBooleanAttribute('enable_traps_isis');
  }
  public set enableTrapsIsis(value: boolean | cdktf.IResolvable) {
    this._enableTrapsIsis = value;
  }
  public resetEnableTrapsIsis() {
    this._enableTrapsIsis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsIsisInput() {
    return this._enableTrapsIsis;
  }

  // enable_traps_l2tun_pseudowire_status - computed: false, optional: true, required: false
  private _enableTrapsL2TunPseudowireStatus?: boolean | cdktf.IResolvable; 
  public get enableTrapsL2TunPseudowireStatus() {
    return this.getBooleanAttribute('enable_traps_l2tun_pseudowire_status');
  }
  public set enableTrapsL2TunPseudowireStatus(value: boolean | cdktf.IResolvable) {
    this._enableTrapsL2TunPseudowireStatus = value;
  }
  public resetEnableTrapsL2TunPseudowireStatus() {
    this._enableTrapsL2TunPseudowireStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsL2TunPseudowireStatusInput() {
    return this._enableTrapsL2TunPseudowireStatus;
  }

  // enable_traps_l2tun_session - computed: false, optional: true, required: false
  private _enableTrapsL2TunSession?: boolean | cdktf.IResolvable; 
  public get enableTrapsL2TunSession() {
    return this.getBooleanAttribute('enable_traps_l2tun_session');
  }
  public set enableTrapsL2TunSession(value: boolean | cdktf.IResolvable) {
    this._enableTrapsL2TunSession = value;
  }
  public resetEnableTrapsL2TunSession() {
    this._enableTrapsL2TunSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsL2TunSessionInput() {
    return this._enableTrapsL2TunSession;
  }

  // enable_traps_l2tun_tunnel - computed: false, optional: true, required: false
  private _enableTrapsL2TunTunnel?: boolean | cdktf.IResolvable; 
  public get enableTrapsL2TunTunnel() {
    return this.getBooleanAttribute('enable_traps_l2tun_tunnel');
  }
  public set enableTrapsL2TunTunnel(value: boolean | cdktf.IResolvable) {
    this._enableTrapsL2TunTunnel = value;
  }
  public resetEnableTrapsL2TunTunnel() {
    this._enableTrapsL2TunTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsL2TunTunnelInput() {
    return this._enableTrapsL2TunTunnel;
  }

  // enable_traps_license - computed: false, optional: true, required: false
  private _enableTrapsLicense?: boolean | cdktf.IResolvable; 
  public get enableTrapsLicense() {
    return this.getBooleanAttribute('enable_traps_license');
  }
  public set enableTrapsLicense(value: boolean | cdktf.IResolvable) {
    this._enableTrapsLicense = value;
  }
  public resetEnableTrapsLicense() {
    this._enableTrapsLicense = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsLicenseInput() {
    return this._enableTrapsLicense;
  }

  // enable_traps_lisp - computed: false, optional: true, required: false
  private _enableTrapsLisp?: boolean | cdktf.IResolvable; 
  public get enableTrapsLisp() {
    return this.getBooleanAttribute('enable_traps_lisp');
  }
  public set enableTrapsLisp(value: boolean | cdktf.IResolvable) {
    this._enableTrapsLisp = value;
  }
  public resetEnableTrapsLisp() {
    this._enableTrapsLisp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsLispInput() {
    return this._enableTrapsLisp;
  }

  // enable_traps_local_auth - computed: false, optional: true, required: false
  private _enableTrapsLocalAuth?: boolean | cdktf.IResolvable; 
  public get enableTrapsLocalAuth() {
    return this.getBooleanAttribute('enable_traps_local_auth');
  }
  public set enableTrapsLocalAuth(value: boolean | cdktf.IResolvable) {
    this._enableTrapsLocalAuth = value;
  }
  public resetEnableTrapsLocalAuth() {
    this._enableTrapsLocalAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsLocalAuthInput() {
    return this._enableTrapsLocalAuth;
  }

  // enable_traps_mac_notification_change - computed: false, optional: true, required: false
  private _enableTrapsMacNotificationChange?: boolean | cdktf.IResolvable; 
  public get enableTrapsMacNotificationChange() {
    return this.getBooleanAttribute('enable_traps_mac_notification_change');
  }
  public set enableTrapsMacNotificationChange(value: boolean | cdktf.IResolvable) {
    this._enableTrapsMacNotificationChange = value;
  }
  public resetEnableTrapsMacNotificationChange() {
    this._enableTrapsMacNotificationChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsMacNotificationChangeInput() {
    return this._enableTrapsMacNotificationChange;
  }

  // enable_traps_mac_notification_move - computed: false, optional: true, required: false
  private _enableTrapsMacNotificationMove?: boolean | cdktf.IResolvable; 
  public get enableTrapsMacNotificationMove() {
    return this.getBooleanAttribute('enable_traps_mac_notification_move');
  }
  public set enableTrapsMacNotificationMove(value: boolean | cdktf.IResolvable) {
    this._enableTrapsMacNotificationMove = value;
  }
  public resetEnableTrapsMacNotificationMove() {
    this._enableTrapsMacNotificationMove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsMacNotificationMoveInput() {
    return this._enableTrapsMacNotificationMove;
  }

  // enable_traps_mac_notification_threshold - computed: false, optional: true, required: false
  private _enableTrapsMacNotificationThreshold?: boolean | cdktf.IResolvable; 
  public get enableTrapsMacNotificationThreshold() {
    return this.getBooleanAttribute('enable_traps_mac_notification_threshold');
  }
  public set enableTrapsMacNotificationThreshold(value: boolean | cdktf.IResolvable) {
    this._enableTrapsMacNotificationThreshold = value;
  }
  public resetEnableTrapsMacNotificationThreshold() {
    this._enableTrapsMacNotificationThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsMacNotificationThresholdInput() {
    return this._enableTrapsMacNotificationThreshold;
  }

  // enable_traps_memory_bufferpeak - computed: false, optional: true, required: false
  private _enableTrapsMemoryBufferpeak?: boolean | cdktf.IResolvable; 
  public get enableTrapsMemoryBufferpeak() {
    return this.getBooleanAttribute('enable_traps_memory_bufferpeak');
  }
  public set enableTrapsMemoryBufferpeak(value: boolean | cdktf.IResolvable) {
    this._enableTrapsMemoryBufferpeak = value;
  }
  public resetEnableTrapsMemoryBufferpeak() {
    this._enableTrapsMemoryBufferpeak = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsMemoryBufferpeakInput() {
    return this._enableTrapsMemoryBufferpeak;
  }

  // enable_traps_mpls - computed: false, optional: true, required: false
  private _enableTrapsMpls?: boolean | cdktf.IResolvable; 
  public get enableTrapsMpls() {
    return this.getBooleanAttribute('enable_traps_mpls');
  }
  public set enableTrapsMpls(value: boolean | cdktf.IResolvable) {
    this._enableTrapsMpls = value;
  }
  public resetEnableTrapsMpls() {
    this._enableTrapsMpls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsMplsInput() {
    return this._enableTrapsMpls;
  }

  // enable_traps_mpls_ldp - computed: false, optional: true, required: false
  private _enableTrapsMplsLdp?: boolean | cdktf.IResolvable; 
  public get enableTrapsMplsLdp() {
    return this.getBooleanAttribute('enable_traps_mpls_ldp');
  }
  public set enableTrapsMplsLdp(value: boolean | cdktf.IResolvable) {
    this._enableTrapsMplsLdp = value;
  }
  public resetEnableTrapsMplsLdp() {
    this._enableTrapsMplsLdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsMplsLdpInput() {
    return this._enableTrapsMplsLdp;
  }

  // enable_traps_mpls_rfc - computed: false, optional: true, required: false
  private _enableTrapsMplsRfc?: boolean | cdktf.IResolvable; 
  public get enableTrapsMplsRfc() {
    return this.getBooleanAttribute('enable_traps_mpls_rfc');
  }
  public set enableTrapsMplsRfc(value: boolean | cdktf.IResolvable) {
    this._enableTrapsMplsRfc = value;
  }
  public resetEnableTrapsMplsRfc() {
    this._enableTrapsMplsRfc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsMplsRfcInput() {
    return this._enableTrapsMplsRfc;
  }

  // enable_traps_mpls_rfc_ldp - computed: false, optional: true, required: false
  private _enableTrapsMplsRfcLdp?: boolean | cdktf.IResolvable; 
  public get enableTrapsMplsRfcLdp() {
    return this.getBooleanAttribute('enable_traps_mpls_rfc_ldp');
  }
  public set enableTrapsMplsRfcLdp(value: boolean | cdktf.IResolvable) {
    this._enableTrapsMplsRfcLdp = value;
  }
  public resetEnableTrapsMplsRfcLdp() {
    this._enableTrapsMplsRfcLdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsMplsRfcLdpInput() {
    return this._enableTrapsMplsRfcLdp;
  }

  // enable_traps_mpls_traffic_eng - computed: false, optional: true, required: false
  private _enableTrapsMplsTrafficEng?: boolean | cdktf.IResolvable; 
  public get enableTrapsMplsTrafficEng() {
    return this.getBooleanAttribute('enable_traps_mpls_traffic_eng');
  }
  public set enableTrapsMplsTrafficEng(value: boolean | cdktf.IResolvable) {
    this._enableTrapsMplsTrafficEng = value;
  }
  public resetEnableTrapsMplsTrafficEng() {
    this._enableTrapsMplsTrafficEng = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsMplsTrafficEngInput() {
    return this._enableTrapsMplsTrafficEng;
  }

  // enable_traps_mpls_vpn - computed: false, optional: true, required: false
  private _enableTrapsMplsVpn?: boolean | cdktf.IResolvable; 
  public get enableTrapsMplsVpn() {
    return this.getBooleanAttribute('enable_traps_mpls_vpn');
  }
  public set enableTrapsMplsVpn(value: boolean | cdktf.IResolvable) {
    this._enableTrapsMplsVpn = value;
  }
  public resetEnableTrapsMplsVpn() {
    this._enableTrapsMplsVpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsMplsVpnInput() {
    return this._enableTrapsMplsVpn;
  }

  // enable_traps_msdp - computed: false, optional: true, required: false
  private _enableTrapsMsdp?: boolean | cdktf.IResolvable; 
  public get enableTrapsMsdp() {
    return this.getBooleanAttribute('enable_traps_msdp');
  }
  public set enableTrapsMsdp(value: boolean | cdktf.IResolvable) {
    this._enableTrapsMsdp = value;
  }
  public resetEnableTrapsMsdp() {
    this._enableTrapsMsdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsMsdpInput() {
    return this._enableTrapsMsdp;
  }

  // enable_traps_mvpn - computed: false, optional: true, required: false
  private _enableTrapsMvpn?: boolean | cdktf.IResolvable; 
  public get enableTrapsMvpn() {
    return this.getBooleanAttribute('enable_traps_mvpn');
  }
  public set enableTrapsMvpn(value: boolean | cdktf.IResolvable) {
    this._enableTrapsMvpn = value;
  }
  public resetEnableTrapsMvpn() {
    this._enableTrapsMvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsMvpnInput() {
    return this._enableTrapsMvpn;
  }

  // enable_traps_nhrp_nhc - computed: false, optional: true, required: false
  private _enableTrapsNhrpNhc?: boolean | cdktf.IResolvable; 
  public get enableTrapsNhrpNhc() {
    return this.getBooleanAttribute('enable_traps_nhrp_nhc');
  }
  public set enableTrapsNhrpNhc(value: boolean | cdktf.IResolvable) {
    this._enableTrapsNhrpNhc = value;
  }
  public resetEnableTrapsNhrpNhc() {
    this._enableTrapsNhrpNhc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsNhrpNhcInput() {
    return this._enableTrapsNhrpNhc;
  }

  // enable_traps_nhrp_nhp - computed: false, optional: true, required: false
  private _enableTrapsNhrpNhp?: boolean | cdktf.IResolvable; 
  public get enableTrapsNhrpNhp() {
    return this.getBooleanAttribute('enable_traps_nhrp_nhp');
  }
  public set enableTrapsNhrpNhp(value: boolean | cdktf.IResolvable) {
    this._enableTrapsNhrpNhp = value;
  }
  public resetEnableTrapsNhrpNhp() {
    this._enableTrapsNhrpNhp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsNhrpNhpInput() {
    return this._enableTrapsNhrpNhp;
  }

  // enable_traps_nhrp_nhs - computed: false, optional: true, required: false
  private _enableTrapsNhrpNhs?: boolean | cdktf.IResolvable; 
  public get enableTrapsNhrpNhs() {
    return this.getBooleanAttribute('enable_traps_nhrp_nhs');
  }
  public set enableTrapsNhrpNhs(value: boolean | cdktf.IResolvable) {
    this._enableTrapsNhrpNhs = value;
  }
  public resetEnableTrapsNhrpNhs() {
    this._enableTrapsNhrpNhs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsNhrpNhsInput() {
    return this._enableTrapsNhrpNhs;
  }

  // enable_traps_nhrp_quota_exceeded - computed: false, optional: true, required: false
  private _enableTrapsNhrpQuotaExceeded?: boolean | cdktf.IResolvable; 
  public get enableTrapsNhrpQuotaExceeded() {
    return this.getBooleanAttribute('enable_traps_nhrp_quota_exceeded');
  }
  public set enableTrapsNhrpQuotaExceeded(value: boolean | cdktf.IResolvable) {
    this._enableTrapsNhrpQuotaExceeded = value;
  }
  public resetEnableTrapsNhrpQuotaExceeded() {
    this._enableTrapsNhrpQuotaExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsNhrpQuotaExceededInput() {
    return this._enableTrapsNhrpQuotaExceeded;
  }

  // enable_traps_ospf_config_errors - computed: false, optional: true, required: false
  private _enableTrapsOspfConfigErrors?: boolean | cdktf.IResolvable; 
  public get enableTrapsOspfConfigErrors() {
    return this.getBooleanAttribute('enable_traps_ospf_config_errors');
  }
  public set enableTrapsOspfConfigErrors(value: boolean | cdktf.IResolvable) {
    this._enableTrapsOspfConfigErrors = value;
  }
  public resetEnableTrapsOspfConfigErrors() {
    this._enableTrapsOspfConfigErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsOspfConfigErrorsInput() {
    return this._enableTrapsOspfConfigErrors;
  }

  // enable_traps_ospf_config_lsa - computed: false, optional: true, required: false
  private _enableTrapsOspfConfigLsa?: boolean | cdktf.IResolvable; 
  public get enableTrapsOspfConfigLsa() {
    return this.getBooleanAttribute('enable_traps_ospf_config_lsa');
  }
  public set enableTrapsOspfConfigLsa(value: boolean | cdktf.IResolvable) {
    this._enableTrapsOspfConfigLsa = value;
  }
  public resetEnableTrapsOspfConfigLsa() {
    this._enableTrapsOspfConfigLsa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsOspfConfigLsaInput() {
    return this._enableTrapsOspfConfigLsa;
  }

  // enable_traps_ospf_config_retransmit - computed: false, optional: true, required: false
  private _enableTrapsOspfConfigRetransmit?: boolean | cdktf.IResolvable; 
  public get enableTrapsOspfConfigRetransmit() {
    return this.getBooleanAttribute('enable_traps_ospf_config_retransmit');
  }
  public set enableTrapsOspfConfigRetransmit(value: boolean | cdktf.IResolvable) {
    this._enableTrapsOspfConfigRetransmit = value;
  }
  public resetEnableTrapsOspfConfigRetransmit() {
    this._enableTrapsOspfConfigRetransmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsOspfConfigRetransmitInput() {
    return this._enableTrapsOspfConfigRetransmit;
  }

  // enable_traps_ospf_config_state_change - computed: false, optional: true, required: false
  private _enableTrapsOspfConfigStateChange?: boolean | cdktf.IResolvable; 
  public get enableTrapsOspfConfigStateChange() {
    return this.getBooleanAttribute('enable_traps_ospf_config_state_change');
  }
  public set enableTrapsOspfConfigStateChange(value: boolean | cdktf.IResolvable) {
    this._enableTrapsOspfConfigStateChange = value;
  }
  public resetEnableTrapsOspfConfigStateChange() {
    this._enableTrapsOspfConfigStateChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsOspfConfigStateChangeInput() {
    return this._enableTrapsOspfConfigStateChange;
  }

  // enable_traps_ospf_errors_enable - computed: false, optional: true, required: false
  private _enableTrapsOspfErrorsEnable?: boolean | cdktf.IResolvable; 
  public get enableTrapsOspfErrorsEnable() {
    return this.getBooleanAttribute('enable_traps_ospf_errors_enable');
  }
  public set enableTrapsOspfErrorsEnable(value: boolean | cdktf.IResolvable) {
    this._enableTrapsOspfErrorsEnable = value;
  }
  public resetEnableTrapsOspfErrorsEnable() {
    this._enableTrapsOspfErrorsEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsOspfErrorsEnableInput() {
    return this._enableTrapsOspfErrorsEnable;
  }

  // enable_traps_ospf_lsa_enable - computed: false, optional: true, required: false
  private _enableTrapsOspfLsaEnable?: boolean | cdktf.IResolvable; 
  public get enableTrapsOspfLsaEnable() {
    return this.getBooleanAttribute('enable_traps_ospf_lsa_enable');
  }
  public set enableTrapsOspfLsaEnable(value: boolean | cdktf.IResolvable) {
    this._enableTrapsOspfLsaEnable = value;
  }
  public resetEnableTrapsOspfLsaEnable() {
    this._enableTrapsOspfLsaEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsOspfLsaEnableInput() {
    return this._enableTrapsOspfLsaEnable;
  }

  // enable_traps_ospf_nssa_trans_change - computed: false, optional: true, required: false
  private _enableTrapsOspfNssaTransChange?: boolean | cdktf.IResolvable; 
  public get enableTrapsOspfNssaTransChange() {
    return this.getBooleanAttribute('enable_traps_ospf_nssa_trans_change');
  }
  public set enableTrapsOspfNssaTransChange(value: boolean | cdktf.IResolvable) {
    this._enableTrapsOspfNssaTransChange = value;
  }
  public resetEnableTrapsOspfNssaTransChange() {
    this._enableTrapsOspfNssaTransChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsOspfNssaTransChangeInput() {
    return this._enableTrapsOspfNssaTransChange;
  }

  // enable_traps_ospf_retransmit_enable - computed: false, optional: true, required: false
  private _enableTrapsOspfRetransmitEnable?: boolean | cdktf.IResolvable; 
  public get enableTrapsOspfRetransmitEnable() {
    return this.getBooleanAttribute('enable_traps_ospf_retransmit_enable');
  }
  public set enableTrapsOspfRetransmitEnable(value: boolean | cdktf.IResolvable) {
    this._enableTrapsOspfRetransmitEnable = value;
  }
  public resetEnableTrapsOspfRetransmitEnable() {
    this._enableTrapsOspfRetransmitEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsOspfRetransmitEnableInput() {
    return this._enableTrapsOspfRetransmitEnable;
  }

  // enable_traps_ospf_shamlink_interface - computed: false, optional: true, required: false
  private _enableTrapsOspfShamlinkInterface?: boolean | cdktf.IResolvable; 
  public get enableTrapsOspfShamlinkInterface() {
    return this.getBooleanAttribute('enable_traps_ospf_shamlink_interface');
  }
  public set enableTrapsOspfShamlinkInterface(value: boolean | cdktf.IResolvable) {
    this._enableTrapsOspfShamlinkInterface = value;
  }
  public resetEnableTrapsOspfShamlinkInterface() {
    this._enableTrapsOspfShamlinkInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsOspfShamlinkInterfaceInput() {
    return this._enableTrapsOspfShamlinkInterface;
  }

  // enable_traps_ospf_shamlink_neighbor - computed: false, optional: true, required: false
  private _enableTrapsOspfShamlinkNeighbor?: boolean | cdktf.IResolvable; 
  public get enableTrapsOspfShamlinkNeighbor() {
    return this.getBooleanAttribute('enable_traps_ospf_shamlink_neighbor');
  }
  public set enableTrapsOspfShamlinkNeighbor(value: boolean | cdktf.IResolvable) {
    this._enableTrapsOspfShamlinkNeighbor = value;
  }
  public resetEnableTrapsOspfShamlinkNeighbor() {
    this._enableTrapsOspfShamlinkNeighbor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsOspfShamlinkNeighborInput() {
    return this._enableTrapsOspfShamlinkNeighbor;
  }

  // enable_traps_ospfv3_config_errors - computed: false, optional: true, required: false
  private _enableTrapsOspfv3ConfigErrors?: boolean | cdktf.IResolvable; 
  public get enableTrapsOspfv3ConfigErrors() {
    return this.getBooleanAttribute('enable_traps_ospfv3_config_errors');
  }
  public set enableTrapsOspfv3ConfigErrors(value: boolean | cdktf.IResolvable) {
    this._enableTrapsOspfv3ConfigErrors = value;
  }
  public resetEnableTrapsOspfv3ConfigErrors() {
    this._enableTrapsOspfv3ConfigErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsOspfv3ConfigErrorsInput() {
    return this._enableTrapsOspfv3ConfigErrors;
  }

  // enable_traps_ospfv3_config_state_change - computed: false, optional: true, required: false
  private _enableTrapsOspfv3ConfigStateChange?: boolean | cdktf.IResolvable; 
  public get enableTrapsOspfv3ConfigStateChange() {
    return this.getBooleanAttribute('enable_traps_ospfv3_config_state_change');
  }
  public set enableTrapsOspfv3ConfigStateChange(value: boolean | cdktf.IResolvable) {
    this._enableTrapsOspfv3ConfigStateChange = value;
  }
  public resetEnableTrapsOspfv3ConfigStateChange() {
    this._enableTrapsOspfv3ConfigStateChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsOspfv3ConfigStateChangeInput() {
    return this._enableTrapsOspfv3ConfigStateChange;
  }

  // enable_traps_ospfv3_errors - computed: false, optional: true, required: false
  private _enableTrapsOspfv3Errors?: boolean | cdktf.IResolvable; 
  public get enableTrapsOspfv3Errors() {
    return this.getBooleanAttribute('enable_traps_ospfv3_errors');
  }
  public set enableTrapsOspfv3Errors(value: boolean | cdktf.IResolvable) {
    this._enableTrapsOspfv3Errors = value;
  }
  public resetEnableTrapsOspfv3Errors() {
    this._enableTrapsOspfv3Errors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsOspfv3ErrorsInput() {
    return this._enableTrapsOspfv3Errors;
  }

  // enable_traps_ospfv3_state_change - computed: false, optional: true, required: false
  private _enableTrapsOspfv3StateChange?: boolean | cdktf.IResolvable; 
  public get enableTrapsOspfv3StateChange() {
    return this.getBooleanAttribute('enable_traps_ospfv3_state_change');
  }
  public set enableTrapsOspfv3StateChange(value: boolean | cdktf.IResolvable) {
    this._enableTrapsOspfv3StateChange = value;
  }
  public resetEnableTrapsOspfv3StateChange() {
    this._enableTrapsOspfv3StateChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsOspfv3StateChangeInput() {
    return this._enableTrapsOspfv3StateChange;
  }

  // enable_traps_pfr - computed: false, optional: true, required: false
  private _enableTrapsPfr?: boolean | cdktf.IResolvable; 
  public get enableTrapsPfr() {
    return this.getBooleanAttribute('enable_traps_pfr');
  }
  public set enableTrapsPfr(value: boolean | cdktf.IResolvable) {
    this._enableTrapsPfr = value;
  }
  public resetEnableTrapsPfr() {
    this._enableTrapsPfr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsPfrInput() {
    return this._enableTrapsPfr;
  }

  // enable_traps_pim_invalid_pim_message - computed: false, optional: true, required: false
  private _enableTrapsPimInvalidPimMessage?: boolean | cdktf.IResolvable; 
  public get enableTrapsPimInvalidPimMessage() {
    return this.getBooleanAttribute('enable_traps_pim_invalid_pim_message');
  }
  public set enableTrapsPimInvalidPimMessage(value: boolean | cdktf.IResolvable) {
    this._enableTrapsPimInvalidPimMessage = value;
  }
  public resetEnableTrapsPimInvalidPimMessage() {
    this._enableTrapsPimInvalidPimMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsPimInvalidPimMessageInput() {
    return this._enableTrapsPimInvalidPimMessage;
  }

  // enable_traps_pim_neighbor_change - computed: false, optional: true, required: false
  private _enableTrapsPimNeighborChange?: boolean | cdktf.IResolvable; 
  public get enableTrapsPimNeighborChange() {
    return this.getBooleanAttribute('enable_traps_pim_neighbor_change');
  }
  public set enableTrapsPimNeighborChange(value: boolean | cdktf.IResolvable) {
    this._enableTrapsPimNeighborChange = value;
  }
  public resetEnableTrapsPimNeighborChange() {
    this._enableTrapsPimNeighborChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsPimNeighborChangeInput() {
    return this._enableTrapsPimNeighborChange;
  }

  // enable_traps_pim_rp_mapping_change - computed: false, optional: true, required: false
  private _enableTrapsPimRpMappingChange?: boolean | cdktf.IResolvable; 
  public get enableTrapsPimRpMappingChange() {
    return this.getBooleanAttribute('enable_traps_pim_rp_mapping_change');
  }
  public set enableTrapsPimRpMappingChange(value: boolean | cdktf.IResolvable) {
    this._enableTrapsPimRpMappingChange = value;
  }
  public resetEnableTrapsPimRpMappingChange() {
    this._enableTrapsPimRpMappingChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsPimRpMappingChangeInput() {
    return this._enableTrapsPimRpMappingChange;
  }

  // enable_traps_pimstdmib_interface_election - computed: false, optional: true, required: false
  private _enableTrapsPimstdmibInterfaceElection?: boolean | cdktf.IResolvable; 
  public get enableTrapsPimstdmibInterfaceElection() {
    return this.getBooleanAttribute('enable_traps_pimstdmib_interface_election');
  }
  public set enableTrapsPimstdmibInterfaceElection(value: boolean | cdktf.IResolvable) {
    this._enableTrapsPimstdmibInterfaceElection = value;
  }
  public resetEnableTrapsPimstdmibInterfaceElection() {
    this._enableTrapsPimstdmibInterfaceElection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsPimstdmibInterfaceElectionInput() {
    return this._enableTrapsPimstdmibInterfaceElection;
  }

  // enable_traps_pimstdmib_invalid_join_prune - computed: false, optional: true, required: false
  private _enableTrapsPimstdmibInvalidJoinPrune?: boolean | cdktf.IResolvable; 
  public get enableTrapsPimstdmibInvalidJoinPrune() {
    return this.getBooleanAttribute('enable_traps_pimstdmib_invalid_join_prune');
  }
  public set enableTrapsPimstdmibInvalidJoinPrune(value: boolean | cdktf.IResolvable) {
    this._enableTrapsPimstdmibInvalidJoinPrune = value;
  }
  public resetEnableTrapsPimstdmibInvalidJoinPrune() {
    this._enableTrapsPimstdmibInvalidJoinPrune = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsPimstdmibInvalidJoinPruneInput() {
    return this._enableTrapsPimstdmibInvalidJoinPrune;
  }

  // enable_traps_pimstdmib_invalid_register - computed: false, optional: true, required: false
  private _enableTrapsPimstdmibInvalidRegister?: boolean | cdktf.IResolvable; 
  public get enableTrapsPimstdmibInvalidRegister() {
    return this.getBooleanAttribute('enable_traps_pimstdmib_invalid_register');
  }
  public set enableTrapsPimstdmibInvalidRegister(value: boolean | cdktf.IResolvable) {
    this._enableTrapsPimstdmibInvalidRegister = value;
  }
  public resetEnableTrapsPimstdmibInvalidRegister() {
    this._enableTrapsPimstdmibInvalidRegister = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsPimstdmibInvalidRegisterInput() {
    return this._enableTrapsPimstdmibInvalidRegister;
  }

  // enable_traps_pimstdmib_neighbor_loss - computed: false, optional: true, required: false
  private _enableTrapsPimstdmibNeighborLoss?: boolean | cdktf.IResolvable; 
  public get enableTrapsPimstdmibNeighborLoss() {
    return this.getBooleanAttribute('enable_traps_pimstdmib_neighbor_loss');
  }
  public set enableTrapsPimstdmibNeighborLoss(value: boolean | cdktf.IResolvable) {
    this._enableTrapsPimstdmibNeighborLoss = value;
  }
  public resetEnableTrapsPimstdmibNeighborLoss() {
    this._enableTrapsPimstdmibNeighborLoss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsPimstdmibNeighborLossInput() {
    return this._enableTrapsPimstdmibNeighborLoss;
  }

  // enable_traps_pimstdmib_rp_mapping_change - computed: false, optional: true, required: false
  private _enableTrapsPimstdmibRpMappingChange?: boolean | cdktf.IResolvable; 
  public get enableTrapsPimstdmibRpMappingChange() {
    return this.getBooleanAttribute('enable_traps_pimstdmib_rp_mapping_change');
  }
  public set enableTrapsPimstdmibRpMappingChange(value: boolean | cdktf.IResolvable) {
    this._enableTrapsPimstdmibRpMappingChange = value;
  }
  public resetEnableTrapsPimstdmibRpMappingChange() {
    this._enableTrapsPimstdmibRpMappingChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsPimstdmibRpMappingChangeInput() {
    return this._enableTrapsPimstdmibRpMappingChange;
  }

  // enable_traps_pki - computed: false, optional: true, required: false
  private _enableTrapsPki?: boolean | cdktf.IResolvable; 
  public get enableTrapsPki() {
    return this.getBooleanAttribute('enable_traps_pki');
  }
  public set enableTrapsPki(value: boolean | cdktf.IResolvable) {
    this._enableTrapsPki = value;
  }
  public resetEnableTrapsPki() {
    this._enableTrapsPki = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsPkiInput() {
    return this._enableTrapsPki;
  }

  // enable_traps_port_security - computed: false, optional: true, required: false
  private _enableTrapsPortSecurity?: boolean | cdktf.IResolvable; 
  public get enableTrapsPortSecurity() {
    return this.getBooleanAttribute('enable_traps_port_security');
  }
  public set enableTrapsPortSecurity(value: boolean | cdktf.IResolvable) {
    this._enableTrapsPortSecurity = value;
  }
  public resetEnableTrapsPortSecurity() {
    this._enableTrapsPortSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsPortSecurityInput() {
    return this._enableTrapsPortSecurity;
  }

  // enable_traps_power_ethernet_group - computed: false, optional: true, required: false
  private _enableTrapsPowerEthernetGroup?: string; 
  public get enableTrapsPowerEthernetGroup() {
    return this.getStringAttribute('enable_traps_power_ethernet_group');
  }
  public set enableTrapsPowerEthernetGroup(value: string) {
    this._enableTrapsPowerEthernetGroup = value;
  }
  public resetEnableTrapsPowerEthernetGroup() {
    this._enableTrapsPowerEthernetGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsPowerEthernetGroupInput() {
    return this._enableTrapsPowerEthernetGroup;
  }

  // enable_traps_power_ethernet_police - computed: false, optional: true, required: false
  private _enableTrapsPowerEthernetPolice?: boolean | cdktf.IResolvable; 
  public get enableTrapsPowerEthernetPolice() {
    return this.getBooleanAttribute('enable_traps_power_ethernet_police');
  }
  public set enableTrapsPowerEthernetPolice(value: boolean | cdktf.IResolvable) {
    this._enableTrapsPowerEthernetPolice = value;
  }
  public resetEnableTrapsPowerEthernetPolice() {
    this._enableTrapsPowerEthernetPolice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsPowerEthernetPoliceInput() {
    return this._enableTrapsPowerEthernetPolice;
  }

  // enable_traps_pppoe - computed: false, optional: true, required: false
  private _enableTrapsPppoe?: boolean | cdktf.IResolvable; 
  public get enableTrapsPppoe() {
    return this.getBooleanAttribute('enable_traps_pppoe');
  }
  public set enableTrapsPppoe(value: boolean | cdktf.IResolvable) {
    this._enableTrapsPppoe = value;
  }
  public resetEnableTrapsPppoe() {
    this._enableTrapsPppoe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsPppoeInput() {
    return this._enableTrapsPppoe;
  }

  // enable_traps_pw_vc - computed: false, optional: true, required: false
  private _enableTrapsPwVc?: boolean | cdktf.IResolvable; 
  public get enableTrapsPwVc() {
    return this.getBooleanAttribute('enable_traps_pw_vc');
  }
  public set enableTrapsPwVc(value: boolean | cdktf.IResolvable) {
    this._enableTrapsPwVc = value;
  }
  public resetEnableTrapsPwVc() {
    this._enableTrapsPwVc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsPwVcInput() {
    return this._enableTrapsPwVc;
  }

  // enable_traps_rep - computed: false, optional: true, required: false
  private _enableTrapsRep?: boolean | cdktf.IResolvable; 
  public get enableTrapsRep() {
    return this.getBooleanAttribute('enable_traps_rep');
  }
  public set enableTrapsRep(value: boolean | cdktf.IResolvable) {
    this._enableTrapsRep = value;
  }
  public resetEnableTrapsRep() {
    this._enableTrapsRep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsRepInput() {
    return this._enableTrapsRep;
  }

  // enable_traps_resource_policy - computed: false, optional: true, required: false
  private _enableTrapsResourcePolicy?: boolean | cdktf.IResolvable; 
  public get enableTrapsResourcePolicy() {
    return this.getBooleanAttribute('enable_traps_resource_policy');
  }
  public set enableTrapsResourcePolicy(value: boolean | cdktf.IResolvable) {
    this._enableTrapsResourcePolicy = value;
  }
  public resetEnableTrapsResourcePolicy() {
    this._enableTrapsResourcePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsResourcePolicyInput() {
    return this._enableTrapsResourcePolicy;
  }

  // enable_traps_rf - computed: false, optional: true, required: false
  private _enableTrapsRf?: boolean | cdktf.IResolvable; 
  public get enableTrapsRf() {
    return this.getBooleanAttribute('enable_traps_rf');
  }
  public set enableTrapsRf(value: boolean | cdktf.IResolvable) {
    this._enableTrapsRf = value;
  }
  public resetEnableTrapsRf() {
    this._enableTrapsRf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsRfInput() {
    return this._enableTrapsRf;
  }

  // enable_traps_rsvp - computed: false, optional: true, required: false
  private _enableTrapsRsvp?: boolean | cdktf.IResolvable; 
  public get enableTrapsRsvp() {
    return this.getBooleanAttribute('enable_traps_rsvp');
  }
  public set enableTrapsRsvp(value: boolean | cdktf.IResolvable) {
    this._enableTrapsRsvp = value;
  }
  public resetEnableTrapsRsvp() {
    this._enableTrapsRsvp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsRsvpInput() {
    return this._enableTrapsRsvp;
  }

  // enable_traps_smart_license - computed: false, optional: true, required: false
  private _enableTrapsSmartLicense?: boolean | cdktf.IResolvable; 
  public get enableTrapsSmartLicense() {
    return this.getBooleanAttribute('enable_traps_smart_license');
  }
  public set enableTrapsSmartLicense(value: boolean | cdktf.IResolvable) {
    this._enableTrapsSmartLicense = value;
  }
  public resetEnableTrapsSmartLicense() {
    this._enableTrapsSmartLicense = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsSmartLicenseInput() {
    return this._enableTrapsSmartLicense;
  }

  // enable_traps_snmp_authentication - computed: false, optional: true, required: false
  private _enableTrapsSnmpAuthentication?: boolean | cdktf.IResolvable; 
  public get enableTrapsSnmpAuthentication() {
    return this.getBooleanAttribute('enable_traps_snmp_authentication');
  }
  public set enableTrapsSnmpAuthentication(value: boolean | cdktf.IResolvable) {
    this._enableTrapsSnmpAuthentication = value;
  }
  public resetEnableTrapsSnmpAuthentication() {
    this._enableTrapsSnmpAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsSnmpAuthenticationInput() {
    return this._enableTrapsSnmpAuthentication;
  }

  // enable_traps_snmp_coldstart - computed: false, optional: true, required: false
  private _enableTrapsSnmpColdstart?: boolean | cdktf.IResolvable; 
  public get enableTrapsSnmpColdstart() {
    return this.getBooleanAttribute('enable_traps_snmp_coldstart');
  }
  public set enableTrapsSnmpColdstart(value: boolean | cdktf.IResolvable) {
    this._enableTrapsSnmpColdstart = value;
  }
  public resetEnableTrapsSnmpColdstart() {
    this._enableTrapsSnmpColdstart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsSnmpColdstartInput() {
    return this._enableTrapsSnmpColdstart;
  }

  // enable_traps_snmp_linkdown - computed: false, optional: true, required: false
  private _enableTrapsSnmpLinkdown?: boolean | cdktf.IResolvable; 
  public get enableTrapsSnmpLinkdown() {
    return this.getBooleanAttribute('enable_traps_snmp_linkdown');
  }
  public set enableTrapsSnmpLinkdown(value: boolean | cdktf.IResolvable) {
    this._enableTrapsSnmpLinkdown = value;
  }
  public resetEnableTrapsSnmpLinkdown() {
    this._enableTrapsSnmpLinkdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsSnmpLinkdownInput() {
    return this._enableTrapsSnmpLinkdown;
  }

  // enable_traps_snmp_linkup - computed: false, optional: true, required: false
  private _enableTrapsSnmpLinkup?: boolean | cdktf.IResolvable; 
  public get enableTrapsSnmpLinkup() {
    return this.getBooleanAttribute('enable_traps_snmp_linkup');
  }
  public set enableTrapsSnmpLinkup(value: boolean | cdktf.IResolvable) {
    this._enableTrapsSnmpLinkup = value;
  }
  public resetEnableTrapsSnmpLinkup() {
    this._enableTrapsSnmpLinkup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsSnmpLinkupInput() {
    return this._enableTrapsSnmpLinkup;
  }

  // enable_traps_snmp_warmstart - computed: false, optional: true, required: false
  private _enableTrapsSnmpWarmstart?: boolean | cdktf.IResolvable; 
  public get enableTrapsSnmpWarmstart() {
    return this.getBooleanAttribute('enable_traps_snmp_warmstart');
  }
  public set enableTrapsSnmpWarmstart(value: boolean | cdktf.IResolvable) {
    this._enableTrapsSnmpWarmstart = value;
  }
  public resetEnableTrapsSnmpWarmstart() {
    this._enableTrapsSnmpWarmstart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsSnmpWarmstartInput() {
    return this._enableTrapsSnmpWarmstart;
  }

  // enable_traps_sonet - computed: false, optional: true, required: false
  private _enableTrapsSonet?: boolean | cdktf.IResolvable; 
  public get enableTrapsSonet() {
    return this.getBooleanAttribute('enable_traps_sonet');
  }
  public set enableTrapsSonet(value: boolean | cdktf.IResolvable) {
    this._enableTrapsSonet = value;
  }
  public resetEnableTrapsSonet() {
    this._enableTrapsSonet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsSonetInput() {
    return this._enableTrapsSonet;
  }

  // enable_traps_srp - computed: false, optional: true, required: false
  private _enableTrapsSrp?: boolean | cdktf.IResolvable; 
  public get enableTrapsSrp() {
    return this.getBooleanAttribute('enable_traps_srp');
  }
  public set enableTrapsSrp(value: boolean | cdktf.IResolvable) {
    this._enableTrapsSrp = value;
  }
  public resetEnableTrapsSrp() {
    this._enableTrapsSrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsSrpInput() {
    return this._enableTrapsSrp;
  }

  // enable_traps_stackwise - computed: false, optional: true, required: false
  private _enableTrapsStackwise?: boolean | cdktf.IResolvable; 
  public get enableTrapsStackwise() {
    return this.getBooleanAttribute('enable_traps_stackwise');
  }
  public set enableTrapsStackwise(value: boolean | cdktf.IResolvable) {
    this._enableTrapsStackwise = value;
  }
  public resetEnableTrapsStackwise() {
    this._enableTrapsStackwise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsStackwiseInput() {
    return this._enableTrapsStackwise;
  }

  // enable_traps_stpx_inconsistency - computed: false, optional: true, required: false
  private _enableTrapsStpxInconsistency?: boolean | cdktf.IResolvable; 
  public get enableTrapsStpxInconsistency() {
    return this.getBooleanAttribute('enable_traps_stpx_inconsistency');
  }
  public set enableTrapsStpxInconsistency(value: boolean | cdktf.IResolvable) {
    this._enableTrapsStpxInconsistency = value;
  }
  public resetEnableTrapsStpxInconsistency() {
    this._enableTrapsStpxInconsistency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsStpxInconsistencyInput() {
    return this._enableTrapsStpxInconsistency;
  }

  // enable_traps_stpx_loop_inconsistency - computed: false, optional: true, required: false
  private _enableTrapsStpxLoopInconsistency?: boolean | cdktf.IResolvable; 
  public get enableTrapsStpxLoopInconsistency() {
    return this.getBooleanAttribute('enable_traps_stpx_loop_inconsistency');
  }
  public set enableTrapsStpxLoopInconsistency(value: boolean | cdktf.IResolvable) {
    this._enableTrapsStpxLoopInconsistency = value;
  }
  public resetEnableTrapsStpxLoopInconsistency() {
    this._enableTrapsStpxLoopInconsistency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsStpxLoopInconsistencyInput() {
    return this._enableTrapsStpxLoopInconsistency;
  }

  // enable_traps_stpx_root_inconsistency - computed: false, optional: true, required: false
  private _enableTrapsStpxRootInconsistency?: boolean | cdktf.IResolvable; 
  public get enableTrapsStpxRootInconsistency() {
    return this.getBooleanAttribute('enable_traps_stpx_root_inconsistency');
  }
  public set enableTrapsStpxRootInconsistency(value: boolean | cdktf.IResolvable) {
    this._enableTrapsStpxRootInconsistency = value;
  }
  public resetEnableTrapsStpxRootInconsistency() {
    this._enableTrapsStpxRootInconsistency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsStpxRootInconsistencyInput() {
    return this._enableTrapsStpxRootInconsistency;
  }

  // enable_traps_syslog - computed: false, optional: true, required: false
  private _enableTrapsSyslog?: boolean | cdktf.IResolvable; 
  public get enableTrapsSyslog() {
    return this.getBooleanAttribute('enable_traps_syslog');
  }
  public set enableTrapsSyslog(value: boolean | cdktf.IResolvable) {
    this._enableTrapsSyslog = value;
  }
  public resetEnableTrapsSyslog() {
    this._enableTrapsSyslog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsSyslogInput() {
    return this._enableTrapsSyslog;
  }

  // enable_traps_transceiver_all - computed: false, optional: true, required: false
  private _enableTrapsTransceiverAll?: boolean | cdktf.IResolvable; 
  public get enableTrapsTransceiverAll() {
    return this.getBooleanAttribute('enable_traps_transceiver_all');
  }
  public set enableTrapsTransceiverAll(value: boolean | cdktf.IResolvable) {
    this._enableTrapsTransceiverAll = value;
  }
  public resetEnableTrapsTransceiverAll() {
    this._enableTrapsTransceiverAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsTransceiverAllInput() {
    return this._enableTrapsTransceiverAll;
  }

  // enable_traps_tty - computed: false, optional: true, required: false
  private _enableTrapsTty?: boolean | cdktf.IResolvable; 
  public get enableTrapsTty() {
    return this.getBooleanAttribute('enable_traps_tty');
  }
  public set enableTrapsTty(value: boolean | cdktf.IResolvable) {
    this._enableTrapsTty = value;
  }
  public resetEnableTrapsTty() {
    this._enableTrapsTty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsTtyInput() {
    return this._enableTrapsTty;
  }

  // enable_traps_udld_link_fail_rpt - computed: false, optional: true, required: false
  private _enableTrapsUdldLinkFailRpt?: boolean | cdktf.IResolvable; 
  public get enableTrapsUdldLinkFailRpt() {
    return this.getBooleanAttribute('enable_traps_udld_link_fail_rpt');
  }
  public set enableTrapsUdldLinkFailRpt(value: boolean | cdktf.IResolvable) {
    this._enableTrapsUdldLinkFailRpt = value;
  }
  public resetEnableTrapsUdldLinkFailRpt() {
    this._enableTrapsUdldLinkFailRpt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsUdldLinkFailRptInput() {
    return this._enableTrapsUdldLinkFailRpt;
  }

  // enable_traps_udld_status_change - computed: false, optional: true, required: false
  private _enableTrapsUdldStatusChange?: boolean | cdktf.IResolvable; 
  public get enableTrapsUdldStatusChange() {
    return this.getBooleanAttribute('enable_traps_udld_status_change');
  }
  public set enableTrapsUdldStatusChange(value: boolean | cdktf.IResolvable) {
    this._enableTrapsUdldStatusChange = value;
  }
  public resetEnableTrapsUdldStatusChange() {
    this._enableTrapsUdldStatusChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsUdldStatusChangeInput() {
    return this._enableTrapsUdldStatusChange;
  }

  // enable_traps_vdsl2line - computed: false, optional: true, required: false
  private _enableTrapsVdsl2Line?: boolean | cdktf.IResolvable; 
  public get enableTrapsVdsl2Line() {
    return this.getBooleanAttribute('enable_traps_vdsl2line');
  }
  public set enableTrapsVdsl2Line(value: boolean | cdktf.IResolvable) {
    this._enableTrapsVdsl2Line = value;
  }
  public resetEnableTrapsVdsl2Line() {
    this._enableTrapsVdsl2Line = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsVdsl2LineInput() {
    return this._enableTrapsVdsl2Line;
  }

  // enable_traps_vlan_membership - computed: false, optional: true, required: false
  private _enableTrapsVlanMembership?: boolean | cdktf.IResolvable; 
  public get enableTrapsVlanMembership() {
    return this.getBooleanAttribute('enable_traps_vlan_membership');
  }
  public set enableTrapsVlanMembership(value: boolean | cdktf.IResolvable) {
    this._enableTrapsVlanMembership = value;
  }
  public resetEnableTrapsVlanMembership() {
    this._enableTrapsVlanMembership = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsVlanMembershipInput() {
    return this._enableTrapsVlanMembership;
  }

  // enable_traps_vlancreate - computed: false, optional: true, required: false
  private _enableTrapsVlancreate?: boolean | cdktf.IResolvable; 
  public get enableTrapsVlancreate() {
    return this.getBooleanAttribute('enable_traps_vlancreate');
  }
  public set enableTrapsVlancreate(value: boolean | cdktf.IResolvable) {
    this._enableTrapsVlancreate = value;
  }
  public resetEnableTrapsVlancreate() {
    this._enableTrapsVlancreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsVlancreateInput() {
    return this._enableTrapsVlancreate;
  }

  // enable_traps_vlandelete - computed: false, optional: true, required: false
  private _enableTrapsVlandelete?: boolean | cdktf.IResolvable; 
  public get enableTrapsVlandelete() {
    return this.getBooleanAttribute('enable_traps_vlandelete');
  }
  public set enableTrapsVlandelete(value: boolean | cdktf.IResolvable) {
    this._enableTrapsVlandelete = value;
  }
  public resetEnableTrapsVlandelete() {
    this._enableTrapsVlandelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsVlandeleteInput() {
    return this._enableTrapsVlandelete;
  }

  // enable_traps_voice - computed: false, optional: true, required: false
  private _enableTrapsVoice?: boolean | cdktf.IResolvable; 
  public get enableTrapsVoice() {
    return this.getBooleanAttribute('enable_traps_voice');
  }
  public set enableTrapsVoice(value: boolean | cdktf.IResolvable) {
    this._enableTrapsVoice = value;
  }
  public resetEnableTrapsVoice() {
    this._enableTrapsVoice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsVoiceInput() {
    return this._enableTrapsVoice;
  }

  // enable_traps_vrfmib_vnet_trunk_down - computed: false, optional: true, required: false
  private _enableTrapsVrfmibVnetTrunkDown?: boolean | cdktf.IResolvable; 
  public get enableTrapsVrfmibVnetTrunkDown() {
    return this.getBooleanAttribute('enable_traps_vrfmib_vnet_trunk_down');
  }
  public set enableTrapsVrfmibVnetTrunkDown(value: boolean | cdktf.IResolvable) {
    this._enableTrapsVrfmibVnetTrunkDown = value;
  }
  public resetEnableTrapsVrfmibVnetTrunkDown() {
    this._enableTrapsVrfmibVnetTrunkDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsVrfmibVnetTrunkDownInput() {
    return this._enableTrapsVrfmibVnetTrunkDown;
  }

  // enable_traps_vrfmib_vnet_trunk_up - computed: false, optional: true, required: false
  private _enableTrapsVrfmibVnetTrunkUp?: boolean | cdktf.IResolvable; 
  public get enableTrapsVrfmibVnetTrunkUp() {
    return this.getBooleanAttribute('enable_traps_vrfmib_vnet_trunk_up');
  }
  public set enableTrapsVrfmibVnetTrunkUp(value: boolean | cdktf.IResolvable) {
    this._enableTrapsVrfmibVnetTrunkUp = value;
  }
  public resetEnableTrapsVrfmibVnetTrunkUp() {
    this._enableTrapsVrfmibVnetTrunkUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsVrfmibVnetTrunkUpInput() {
    return this._enableTrapsVrfmibVnetTrunkUp;
  }

  // enable_traps_vrfmib_vrf_down - computed: false, optional: true, required: false
  private _enableTrapsVrfmibVrfDown?: boolean | cdktf.IResolvable; 
  public get enableTrapsVrfmibVrfDown() {
    return this.getBooleanAttribute('enable_traps_vrfmib_vrf_down');
  }
  public set enableTrapsVrfmibVrfDown(value: boolean | cdktf.IResolvable) {
    this._enableTrapsVrfmibVrfDown = value;
  }
  public resetEnableTrapsVrfmibVrfDown() {
    this._enableTrapsVrfmibVrfDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsVrfmibVrfDownInput() {
    return this._enableTrapsVrfmibVrfDown;
  }

  // enable_traps_vrfmib_vrf_up - computed: false, optional: true, required: false
  private _enableTrapsVrfmibVrfUp?: boolean | cdktf.IResolvable; 
  public get enableTrapsVrfmibVrfUp() {
    return this.getBooleanAttribute('enable_traps_vrfmib_vrf_up');
  }
  public set enableTrapsVrfmibVrfUp(value: boolean | cdktf.IResolvable) {
    this._enableTrapsVrfmibVrfUp = value;
  }
  public resetEnableTrapsVrfmibVrfUp() {
    this._enableTrapsVrfmibVrfUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsVrfmibVrfUpInput() {
    return this._enableTrapsVrfmibVrfUp;
  }

  // enable_traps_vrrp - computed: false, optional: true, required: false
  private _enableTrapsVrrp?: boolean | cdktf.IResolvable; 
  public get enableTrapsVrrp() {
    return this.getBooleanAttribute('enable_traps_vrrp');
  }
  public set enableTrapsVrrp(value: boolean | cdktf.IResolvable) {
    this._enableTrapsVrrp = value;
  }
  public resetEnableTrapsVrrp() {
    this._enableTrapsVrrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsVrrpInput() {
    return this._enableTrapsVrrp;
  }

  // enable_traps_vtp - computed: false, optional: true, required: false
  private _enableTrapsVtp?: boolean | cdktf.IResolvable; 
  public get enableTrapsVtp() {
    return this.getBooleanAttribute('enable_traps_vtp');
  }
  public set enableTrapsVtp(value: boolean | cdktf.IResolvable) {
    this._enableTrapsVtp = value;
  }
  public resetEnableTrapsVtp() {
    this._enableTrapsVtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrapsVtpInput() {
    return this._enableTrapsVtp;
  }

  // groups - computed: false, optional: true, required: false
  private _groups = new SnmpServerGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: SnmpServerGroups[] | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  public resetGroups() {
    this._groups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts = new SnmpServerHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }
  public putHosts(value: SnmpServerHosts[] | cdktf.IResolvable) {
    this._hosts.internalValue = value;
  }
  public resetHosts() {
    this._hosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ifindex_persist - computed: false, optional: true, required: false
  private _ifindexPersist?: boolean | cdktf.IResolvable; 
  public get ifindexPersist() {
    return this.getBooleanAttribute('ifindex_persist');
  }
  public set ifindexPersist(value: boolean | cdktf.IResolvable) {
    this._ifindexPersist = value;
  }
  public resetIfindexPersist() {
    this._ifindexPersist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifindexPersistInput() {
    return this._ifindexPersist;
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

  // packetsize - computed: false, optional: true, required: false
  private _packetsize?: number; 
  public get packetsize() {
    return this.getNumberAttribute('packetsize');
  }
  public set packetsize(value: number) {
    this._packetsize = value;
  }
  public resetPacketsize() {
    this._packetsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsizeInput() {
    return this._packetsize;
  }

  // queue_length - computed: false, optional: true, required: false
  private _queueLength?: number; 
  public get queueLength() {
    return this.getNumberAttribute('queue_length');
  }
  public set queueLength(value: number) {
    this._queueLength = value;
  }
  public resetQueueLength() {
    this._queueLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueLengthInput() {
    return this._queueLength;
  }

  // snmp_communities - computed: false, optional: true, required: false
  private _snmpCommunities = new SnmpServerSnmpCommunitiesList(this, "snmp_communities", false);
  public get snmpCommunities() {
    return this._snmpCommunities;
  }
  public putSnmpCommunities(value: SnmpServerSnmpCommunities[] | cdktf.IResolvable) {
    this._snmpCommunities.internalValue = value;
  }
  public resetSnmpCommunities() {
    this._snmpCommunities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpCommunitiesInput() {
    return this._snmpCommunities.internalValue;
  }

  // source_interface_informs_forty_gigabit_ethernet - computed: false, optional: true, required: false
  private _sourceInterfaceInformsFortyGigabitEthernet?: string; 
  public get sourceInterfaceInformsFortyGigabitEthernet() {
    return this.getStringAttribute('source_interface_informs_forty_gigabit_ethernet');
  }
  public set sourceInterfaceInformsFortyGigabitEthernet(value: string) {
    this._sourceInterfaceInformsFortyGigabitEthernet = value;
  }
  public resetSourceInterfaceInformsFortyGigabitEthernet() {
    this._sourceInterfaceInformsFortyGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceInformsFortyGigabitEthernetInput() {
    return this._sourceInterfaceInformsFortyGigabitEthernet;
  }

  // source_interface_informs_gigabit_ethernet - computed: false, optional: true, required: false
  private _sourceInterfaceInformsGigabitEthernet?: string; 
  public get sourceInterfaceInformsGigabitEthernet() {
    return this.getStringAttribute('source_interface_informs_gigabit_ethernet');
  }
  public set sourceInterfaceInformsGigabitEthernet(value: string) {
    this._sourceInterfaceInformsGigabitEthernet = value;
  }
  public resetSourceInterfaceInformsGigabitEthernet() {
    this._sourceInterfaceInformsGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceInformsGigabitEthernetInput() {
    return this._sourceInterfaceInformsGigabitEthernet;
  }

  // source_interface_informs_hundred_gig_e - computed: false, optional: true, required: false
  private _sourceInterfaceInformsHundredGigE?: string; 
  public get sourceInterfaceInformsHundredGigE() {
    return this.getStringAttribute('source_interface_informs_hundred_gig_e');
  }
  public set sourceInterfaceInformsHundredGigE(value: string) {
    this._sourceInterfaceInformsHundredGigE = value;
  }
  public resetSourceInterfaceInformsHundredGigE() {
    this._sourceInterfaceInformsHundredGigE = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceInformsHundredGigEInput() {
    return this._sourceInterfaceInformsHundredGigE;
  }

  // source_interface_informs_loopback - computed: false, optional: true, required: false
  private _sourceInterfaceInformsLoopback?: number; 
  public get sourceInterfaceInformsLoopback() {
    return this.getNumberAttribute('source_interface_informs_loopback');
  }
  public set sourceInterfaceInformsLoopback(value: number) {
    this._sourceInterfaceInformsLoopback = value;
  }
  public resetSourceInterfaceInformsLoopback() {
    this._sourceInterfaceInformsLoopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceInformsLoopbackInput() {
    return this._sourceInterfaceInformsLoopback;
  }

  // source_interface_informs_port_channel - computed: false, optional: true, required: false
  private _sourceInterfaceInformsPortChannel?: number; 
  public get sourceInterfaceInformsPortChannel() {
    return this.getNumberAttribute('source_interface_informs_port_channel');
  }
  public set sourceInterfaceInformsPortChannel(value: number) {
    this._sourceInterfaceInformsPortChannel = value;
  }
  public resetSourceInterfaceInformsPortChannel() {
    this._sourceInterfaceInformsPortChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceInformsPortChannelInput() {
    return this._sourceInterfaceInformsPortChannel;
  }

  // source_interface_informs_port_channel_subinterface - computed: false, optional: true, required: false
  private _sourceInterfaceInformsPortChannelSubinterface?: string; 
  public get sourceInterfaceInformsPortChannelSubinterface() {
    return this.getStringAttribute('source_interface_informs_port_channel_subinterface');
  }
  public set sourceInterfaceInformsPortChannelSubinterface(value: string) {
    this._sourceInterfaceInformsPortChannelSubinterface = value;
  }
  public resetSourceInterfaceInformsPortChannelSubinterface() {
    this._sourceInterfaceInformsPortChannelSubinterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceInformsPortChannelSubinterfaceInput() {
    return this._sourceInterfaceInformsPortChannelSubinterface;
  }

  // source_interface_informs_ten_gigabit_ethernet - computed: false, optional: true, required: false
  private _sourceInterfaceInformsTenGigabitEthernet?: string; 
  public get sourceInterfaceInformsTenGigabitEthernet() {
    return this.getStringAttribute('source_interface_informs_ten_gigabit_ethernet');
  }
  public set sourceInterfaceInformsTenGigabitEthernet(value: string) {
    this._sourceInterfaceInformsTenGigabitEthernet = value;
  }
  public resetSourceInterfaceInformsTenGigabitEthernet() {
    this._sourceInterfaceInformsTenGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceInformsTenGigabitEthernetInput() {
    return this._sourceInterfaceInformsTenGigabitEthernet;
  }

  // source_interface_informs_vlan - computed: false, optional: true, required: false
  private _sourceInterfaceInformsVlan?: number; 
  public get sourceInterfaceInformsVlan() {
    return this.getNumberAttribute('source_interface_informs_vlan');
  }
  public set sourceInterfaceInformsVlan(value: number) {
    this._sourceInterfaceInformsVlan = value;
  }
  public resetSourceInterfaceInformsVlan() {
    this._sourceInterfaceInformsVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceInformsVlanInput() {
    return this._sourceInterfaceInformsVlan;
  }

  // source_interface_traps_forty_gigabit_ethernet - computed: false, optional: true, required: false
  private _sourceInterfaceTrapsFortyGigabitEthernet?: string; 
  public get sourceInterfaceTrapsFortyGigabitEthernet() {
    return this.getStringAttribute('source_interface_traps_forty_gigabit_ethernet');
  }
  public set sourceInterfaceTrapsFortyGigabitEthernet(value: string) {
    this._sourceInterfaceTrapsFortyGigabitEthernet = value;
  }
  public resetSourceInterfaceTrapsFortyGigabitEthernet() {
    this._sourceInterfaceTrapsFortyGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceTrapsFortyGigabitEthernetInput() {
    return this._sourceInterfaceTrapsFortyGigabitEthernet;
  }

  // source_interface_traps_gigabit_ethernet - computed: false, optional: true, required: false
  private _sourceInterfaceTrapsGigabitEthernet?: string; 
  public get sourceInterfaceTrapsGigabitEthernet() {
    return this.getStringAttribute('source_interface_traps_gigabit_ethernet');
  }
  public set sourceInterfaceTrapsGigabitEthernet(value: string) {
    this._sourceInterfaceTrapsGigabitEthernet = value;
  }
  public resetSourceInterfaceTrapsGigabitEthernet() {
    this._sourceInterfaceTrapsGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceTrapsGigabitEthernetInput() {
    return this._sourceInterfaceTrapsGigabitEthernet;
  }

  // source_interface_traps_hundred_gig_e - computed: false, optional: true, required: false
  private _sourceInterfaceTrapsHundredGigE?: string; 
  public get sourceInterfaceTrapsHundredGigE() {
    return this.getStringAttribute('source_interface_traps_hundred_gig_e');
  }
  public set sourceInterfaceTrapsHundredGigE(value: string) {
    this._sourceInterfaceTrapsHundredGigE = value;
  }
  public resetSourceInterfaceTrapsHundredGigE() {
    this._sourceInterfaceTrapsHundredGigE = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceTrapsHundredGigEInput() {
    return this._sourceInterfaceTrapsHundredGigE;
  }

  // source_interface_traps_loopback - computed: false, optional: true, required: false
  private _sourceInterfaceTrapsLoopback?: number; 
  public get sourceInterfaceTrapsLoopback() {
    return this.getNumberAttribute('source_interface_traps_loopback');
  }
  public set sourceInterfaceTrapsLoopback(value: number) {
    this._sourceInterfaceTrapsLoopback = value;
  }
  public resetSourceInterfaceTrapsLoopback() {
    this._sourceInterfaceTrapsLoopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceTrapsLoopbackInput() {
    return this._sourceInterfaceTrapsLoopback;
  }

  // source_interface_traps_port_channel - computed: false, optional: true, required: false
  private _sourceInterfaceTrapsPortChannel?: number; 
  public get sourceInterfaceTrapsPortChannel() {
    return this.getNumberAttribute('source_interface_traps_port_channel');
  }
  public set sourceInterfaceTrapsPortChannel(value: number) {
    this._sourceInterfaceTrapsPortChannel = value;
  }
  public resetSourceInterfaceTrapsPortChannel() {
    this._sourceInterfaceTrapsPortChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceTrapsPortChannelInput() {
    return this._sourceInterfaceTrapsPortChannel;
  }

  // source_interface_traps_port_channel_subinterface - computed: false, optional: true, required: false
  private _sourceInterfaceTrapsPortChannelSubinterface?: string; 
  public get sourceInterfaceTrapsPortChannelSubinterface() {
    return this.getStringAttribute('source_interface_traps_port_channel_subinterface');
  }
  public set sourceInterfaceTrapsPortChannelSubinterface(value: string) {
    this._sourceInterfaceTrapsPortChannelSubinterface = value;
  }
  public resetSourceInterfaceTrapsPortChannelSubinterface() {
    this._sourceInterfaceTrapsPortChannelSubinterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceTrapsPortChannelSubinterfaceInput() {
    return this._sourceInterfaceTrapsPortChannelSubinterface;
  }

  // source_interface_traps_ten_gigabit_ethernet - computed: false, optional: true, required: false
  private _sourceInterfaceTrapsTenGigabitEthernet?: string; 
  public get sourceInterfaceTrapsTenGigabitEthernet() {
    return this.getStringAttribute('source_interface_traps_ten_gigabit_ethernet');
  }
  public set sourceInterfaceTrapsTenGigabitEthernet(value: string) {
    this._sourceInterfaceTrapsTenGigabitEthernet = value;
  }
  public resetSourceInterfaceTrapsTenGigabitEthernet() {
    this._sourceInterfaceTrapsTenGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceTrapsTenGigabitEthernetInput() {
    return this._sourceInterfaceTrapsTenGigabitEthernet;
  }

  // source_interface_traps_vlan - computed: false, optional: true, required: false
  private _sourceInterfaceTrapsVlan?: number; 
  public get sourceInterfaceTrapsVlan() {
    return this.getNumberAttribute('source_interface_traps_vlan');
  }
  public set sourceInterfaceTrapsVlan(value: number) {
    this._sourceInterfaceTrapsVlan = value;
  }
  public resetSourceInterfaceTrapsVlan() {
    this._sourceInterfaceTrapsVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceTrapsVlanInput() {
    return this._sourceInterfaceTrapsVlan;
  }

  // system_shutdown - computed: false, optional: true, required: false
  private _systemShutdown?: boolean | cdktf.IResolvable; 
  public get systemShutdown() {
    return this.getBooleanAttribute('system_shutdown');
  }
  public set systemShutdown(value: boolean | cdktf.IResolvable) {
    this._systemShutdown = value;
  }
  public resetSystemShutdown() {
    this._systemShutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemShutdownInput() {
    return this._systemShutdown;
  }

  // trap_source_forty_gigabit_ethernet - computed: false, optional: true, required: false
  private _trapSourceFortyGigabitEthernet?: string; 
  public get trapSourceFortyGigabitEthernet() {
    return this.getStringAttribute('trap_source_forty_gigabit_ethernet');
  }
  public set trapSourceFortyGigabitEthernet(value: string) {
    this._trapSourceFortyGigabitEthernet = value;
  }
  public resetTrapSourceFortyGigabitEthernet() {
    this._trapSourceFortyGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapSourceFortyGigabitEthernetInput() {
    return this._trapSourceFortyGigabitEthernet;
  }

  // trap_source_gigabit_ethernet - computed: false, optional: true, required: false
  private _trapSourceGigabitEthernet?: string; 
  public get trapSourceGigabitEthernet() {
    return this.getStringAttribute('trap_source_gigabit_ethernet');
  }
  public set trapSourceGigabitEthernet(value: string) {
    this._trapSourceGigabitEthernet = value;
  }
  public resetTrapSourceGigabitEthernet() {
    this._trapSourceGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapSourceGigabitEthernetInput() {
    return this._trapSourceGigabitEthernet;
  }

  // trap_source_hundred_gig_e - computed: false, optional: true, required: false
  private _trapSourceHundredGigE?: string; 
  public get trapSourceHundredGigE() {
    return this.getStringAttribute('trap_source_hundred_gig_e');
  }
  public set trapSourceHundredGigE(value: string) {
    this._trapSourceHundredGigE = value;
  }
  public resetTrapSourceHundredGigE() {
    this._trapSourceHundredGigE = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapSourceHundredGigEInput() {
    return this._trapSourceHundredGigE;
  }

  // trap_source_loopback - computed: false, optional: true, required: false
  private _trapSourceLoopback?: number; 
  public get trapSourceLoopback() {
    return this.getNumberAttribute('trap_source_loopback');
  }
  public set trapSourceLoopback(value: number) {
    this._trapSourceLoopback = value;
  }
  public resetTrapSourceLoopback() {
    this._trapSourceLoopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapSourceLoopbackInput() {
    return this._trapSourceLoopback;
  }

  // trap_source_port_channel - computed: false, optional: true, required: false
  private _trapSourcePortChannel?: number; 
  public get trapSourcePortChannel() {
    return this.getNumberAttribute('trap_source_port_channel');
  }
  public set trapSourcePortChannel(value: number) {
    this._trapSourcePortChannel = value;
  }
  public resetTrapSourcePortChannel() {
    this._trapSourcePortChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapSourcePortChannelInput() {
    return this._trapSourcePortChannel;
  }

  // trap_source_port_channel_subinterface - computed: false, optional: true, required: false
  private _trapSourcePortChannelSubinterface?: string; 
  public get trapSourcePortChannelSubinterface() {
    return this.getStringAttribute('trap_source_port_channel_subinterface');
  }
  public set trapSourcePortChannelSubinterface(value: string) {
    this._trapSourcePortChannelSubinterface = value;
  }
  public resetTrapSourcePortChannelSubinterface() {
    this._trapSourcePortChannelSubinterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapSourcePortChannelSubinterfaceInput() {
    return this._trapSourcePortChannelSubinterface;
  }

  // trap_source_ten_gigabit_ethernet - computed: false, optional: true, required: false
  private _trapSourceTenGigabitEthernet?: string; 
  public get trapSourceTenGigabitEthernet() {
    return this.getStringAttribute('trap_source_ten_gigabit_ethernet');
  }
  public set trapSourceTenGigabitEthernet(value: string) {
    this._trapSourceTenGigabitEthernet = value;
  }
  public resetTrapSourceTenGigabitEthernet() {
    this._trapSourceTenGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapSourceTenGigabitEthernetInput() {
    return this._trapSourceTenGigabitEthernet;
  }

  // trap_source_vlan - computed: false, optional: true, required: false
  private _trapSourceVlan?: number; 
  public get trapSourceVlan() {
    return this.getNumberAttribute('trap_source_vlan');
  }
  public set trapSourceVlan(value: number) {
    this._trapSourceVlan = value;
  }
  public resetTrapSourceVlan() {
    this._trapSourceVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapSourceVlanInput() {
    return this._trapSourceVlan;
  }

  // users - computed: false, optional: true, required: false
  private _users = new SnmpServerUsersList(this, "users", false);
  public get users() {
    return this._users;
  }
  public putUsers(value: SnmpServerUsers[] | cdktf.IResolvable) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }

  // views - computed: false, optional: true, required: false
  private _views = new SnmpServerViewsList(this, "views", false);
  public get views() {
    return this._views;
  }
  public putViews(value: SnmpServerViews[] | cdktf.IResolvable) {
    this._views.internalValue = value;
  }
  public resetViews() {
    this._views.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewsInput() {
    return this._views.internalValue;
  }

  // vrf_hosts - computed: false, optional: true, required: false
  private _vrfHosts = new SnmpServerVrfHostsList(this, "vrf_hosts", false);
  public get vrfHosts() {
    return this._vrfHosts;
  }
  public putVrfHosts(value: SnmpServerVrfHosts[] | cdktf.IResolvable) {
    this._vrfHosts.internalValue = value;
  }
  public resetVrfHosts() {
    this._vrfHosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfHostsInput() {
    return this._vrfHosts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      chassis_id: cdktf.stringToTerraform(this._chassisId),
      contact: cdktf.stringToTerraform(this._contact),
      contexts: cdktf.listMapper(snmpServerContextsToTerraform, false)(this._contexts.internalValue),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      enable_informs: cdktf.booleanToTerraform(this._enableInforms),
      enable_logging_getop: cdktf.booleanToTerraform(this._enableLoggingGetop),
      enable_logging_setop: cdktf.booleanToTerraform(this._enableLoggingSetop),
      enable_traps: cdktf.booleanToTerraform(this._enableTraps),
      enable_traps_aaa_server: cdktf.booleanToTerraform(this._enableTrapsAaaServer),
      enable_traps_adslline: cdktf.booleanToTerraform(this._enableTrapsAdslline),
      enable_traps_alarm_type: cdktf.stringToTerraform(this._enableTrapsAlarmType),
      enable_traps_auth_framework_sec_violation: cdktf.booleanToTerraform(this._enableTrapsAuthFrameworkSecViolation),
      enable_traps_bfd: cdktf.booleanToTerraform(this._enableTrapsBfd),
      enable_traps_bgp: cdktf.booleanToTerraform(this._enableTrapsBgp),
      enable_traps_bgp_cbgp2: cdktf.booleanToTerraform(this._enableTrapsBgpCbgp2),
      enable_traps_bgp_cbgp2_state_changes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._enableTrapsBgpCbgp2StateChanges),
      enable_traps_bgp_cbgp2_threshold_prefix: cdktf.booleanToTerraform(this._enableTrapsBgpCbgp2ThresholdPrefix),
      enable_traps_bridge_newroot: cdktf.booleanToTerraform(this._enableTrapsBridgeNewroot),
      enable_traps_bridge_topologychange: cdktf.booleanToTerraform(this._enableTrapsBridgeTopologychange),
      enable_traps_bulkstat_collection: cdktf.booleanToTerraform(this._enableTrapsBulkstatCollection),
      enable_traps_bulkstat_transfer: cdktf.booleanToTerraform(this._enableTrapsBulkstatTransfer),
      enable_traps_call_home_message_send_fail: cdktf.booleanToTerraform(this._enableTrapsCallHomeMessageSendFail),
      enable_traps_call_home_server_fail: cdktf.booleanToTerraform(this._enableTrapsCallHomeServerFail),
      enable_traps_casa: cdktf.booleanToTerraform(this._enableTrapsCasa),
      enable_traps_cbgp2: cdktf.booleanToTerraform(this._enableTrapsCbgp2),
      enable_traps_cef_inconsistency: cdktf.booleanToTerraform(this._enableTrapsCefInconsistency),
      enable_traps_cef_peer_fib_state_change: cdktf.booleanToTerraform(this._enableTrapsCefPeerFibStateChange),
      enable_traps_cef_peer_state_change: cdktf.booleanToTerraform(this._enableTrapsCefPeerStateChange),
      enable_traps_cef_resource_failure: cdktf.booleanToTerraform(this._enableTrapsCefResourceFailure),
      enable_traps_cnpd: cdktf.booleanToTerraform(this._enableTrapsCnpd),
      enable_traps_config: cdktf.booleanToTerraform(this._enableTrapsConfig),
      enable_traps_config_copy: cdktf.booleanToTerraform(this._enableTrapsConfigCopy),
      enable_traps_config_ctid: cdktf.booleanToTerraform(this._enableTrapsConfigCtid),
      enable_traps_cpu_threshold: cdktf.booleanToTerraform(this._enableTrapsCpuThreshold),
      enable_traps_dhcp: cdktf.booleanToTerraform(this._enableTrapsDhcp),
      enable_traps_dial: cdktf.booleanToTerraform(this._enableTrapsDial),
      enable_traps_dlsw: cdktf.booleanToTerraform(this._enableTrapsDlsw),
      enable_traps_ds1: cdktf.booleanToTerraform(this._enableTrapsDs1),
      enable_traps_dsp_card_status: cdktf.booleanToTerraform(this._enableTrapsDspCardStatus),
      enable_traps_dsp_oper_state: cdktf.booleanToTerraform(this._enableTrapsDspOperState),
      enable_traps_eigrp: cdktf.booleanToTerraform(this._enableTrapsEigrp),
      enable_traps_energywise: cdktf.booleanToTerraform(this._enableTrapsEnergywise),
      enable_traps_entity: cdktf.booleanToTerraform(this._enableTrapsEntity),
      enable_traps_entity_diag_boot_up_fail: cdktf.booleanToTerraform(this._enableTrapsEntityDiagBootUpFail),
      enable_traps_entity_diag_hm_test_recover: cdktf.booleanToTerraform(this._enableTrapsEntityDiagHmTestRecover),
      enable_traps_entity_diag_hm_thresh_reached: cdktf.booleanToTerraform(this._enableTrapsEntityDiagHmThreshReached),
      enable_traps_entity_diag_scheduled_test_fail: cdktf.booleanToTerraform(this._enableTrapsEntityDiagScheduledTestFail),
      enable_traps_entity_perf_throughput_notif: cdktf.booleanToTerraform(this._enableTrapsEntityPerfThroughputNotif),
      enable_traps_entity_qfp_mem_res_thresh: cdktf.booleanToTerraform(this._enableTrapsEntityQfpMemResThresh),
      enable_traps_entity_qfp_throughput_notif: cdktf.booleanToTerraform(this._enableTrapsEntityQfpThroughputNotif),
      enable_traps_entity_sensor: cdktf.booleanToTerraform(this._enableTrapsEntitySensor),
      enable_traps_entity_state: cdktf.booleanToTerraform(this._enableTrapsEntityState),
      enable_traps_envmon: cdktf.booleanToTerraform(this._enableTrapsEnvmon),
      enable_traps_errdisable: cdktf.booleanToTerraform(this._enableTrapsErrdisable),
      enable_traps_ether_oam: cdktf.booleanToTerraform(this._enableTrapsEtherOam),
      enable_traps_ethernet_cfm_alarm: cdktf.booleanToTerraform(this._enableTrapsEthernetCfmAlarm),
      enable_traps_ethernet_cfm_cc_config: cdktf.booleanToTerraform(this._enableTrapsEthernetCfmCcConfig),
      enable_traps_ethernet_cfm_cc_cross_connect: cdktf.booleanToTerraform(this._enableTrapsEthernetCfmCcCrossConnect),
      enable_traps_ethernet_cfm_cc_loop: cdktf.booleanToTerraform(this._enableTrapsEthernetCfmCcLoop),
      enable_traps_ethernet_cfm_cc_mep_down: cdktf.booleanToTerraform(this._enableTrapsEthernetCfmCcMepDown),
      enable_traps_ethernet_cfm_cc_mep_up: cdktf.booleanToTerraform(this._enableTrapsEthernetCfmCcMepUp),
      enable_traps_ethernet_cfm_crosscheck_mep_missing: cdktf.booleanToTerraform(this._enableTrapsEthernetCfmCrosscheckMepMissing),
      enable_traps_ethernet_cfm_crosscheck_mep_unknown: cdktf.booleanToTerraform(this._enableTrapsEthernetCfmCrosscheckMepUnknown),
      enable_traps_ethernet_cfm_crosscheck_service_up: cdktf.booleanToTerraform(this._enableTrapsEthernetCfmCrosscheckServiceUp),
      enable_traps_ethernet_evc_create: cdktf.booleanToTerraform(this._enableTrapsEthernetEvcCreate),
      enable_traps_ethernet_evc_delete: cdktf.booleanToTerraform(this._enableTrapsEthernetEvcDelete),
      enable_traps_ethernet_evc_status: cdktf.booleanToTerraform(this._enableTrapsEthernetEvcStatus),
      enable_traps_event_manager: cdktf.booleanToTerraform(this._enableTrapsEventManager),
      enable_traps_fast_reroute_protected: cdktf.booleanToTerraform(this._enableTrapsFastRerouteProtected),
      enable_traps_firewall_serverstatus: cdktf.booleanToTerraform(this._enableTrapsFirewallServerstatus),
      enable_traps_flash_insertion: cdktf.booleanToTerraform(this._enableTrapsFlashInsertion),
      enable_traps_flash_lowspace: cdktf.booleanToTerraform(this._enableTrapsFlashLowspace),
      enable_traps_flash_removal: cdktf.booleanToTerraform(this._enableTrapsFlashRemoval),
      enable_traps_flowmon: cdktf.booleanToTerraform(this._enableTrapsFlowmon),
      enable_traps_frame_relay_config_bundle_mismatch: cdktf.booleanToTerraform(this._enableTrapsFrameRelayConfigBundleMismatch),
      enable_traps_frame_relay_config_only: cdktf.booleanToTerraform(this._enableTrapsFrameRelayConfigOnly),
      enable_traps_frame_relay_config_subif_configs: cdktf.booleanToTerraform(this._enableTrapsFrameRelayConfigSubifConfigs),
      enable_traps_frame_relay_multilink_bundle_mismatch: cdktf.booleanToTerraform(this._enableTrapsFrameRelayMultilinkBundleMismatch),
      enable_traps_frame_relay_subif_count: cdktf.numberToTerraform(this._enableTrapsFrameRelaySubifCount),
      enable_traps_frame_relay_subif_interval: cdktf.numberToTerraform(this._enableTrapsFrameRelaySubifInterval),
      enable_traps_fru_ctrl: cdktf.booleanToTerraform(this._enableTrapsFruCtrl),
      enable_traps_hsrp: cdktf.booleanToTerraform(this._enableTrapsHsrp),
      enable_traps_ike_policy_add: cdktf.booleanToTerraform(this._enableTrapsIkePolicyAdd),
      enable_traps_ike_policy_delete: cdktf.booleanToTerraform(this._enableTrapsIkePolicyDelete),
      enable_traps_ike_tunnel_start: cdktf.booleanToTerraform(this._enableTrapsIkeTunnelStart),
      enable_traps_ike_tunnel_stop: cdktf.booleanToTerraform(this._enableTrapsIkeTunnelStop),
      enable_traps_ip_local_pool: cdktf.booleanToTerraform(this._enableTrapsIpLocalPool),
      enable_traps_ipmulticast: cdktf.booleanToTerraform(this._enableTrapsIpmulticast),
      enable_traps_ipsec_cryptomap_add: cdktf.booleanToTerraform(this._enableTrapsIpsecCryptomapAdd),
      enable_traps_ipsec_cryptomap_attach: cdktf.booleanToTerraform(this._enableTrapsIpsecCryptomapAttach),
      enable_traps_ipsec_cryptomap_delete: cdktf.booleanToTerraform(this._enableTrapsIpsecCryptomapDelete),
      enable_traps_ipsec_cryptomap_detach: cdktf.booleanToTerraform(this._enableTrapsIpsecCryptomapDetach),
      enable_traps_ipsec_too_many_sas: cdktf.booleanToTerraform(this._enableTrapsIpsecTooManySas),
      enable_traps_ipsec_tunnel_start: cdktf.booleanToTerraform(this._enableTrapsIpsecTunnelStart),
      enable_traps_ipsec_tunnel_stop: cdktf.booleanToTerraform(this._enableTrapsIpsecTunnelStop),
      enable_traps_ipsla: cdktf.booleanToTerraform(this._enableTrapsIpsla),
      enable_traps_isdn_call_information: cdktf.booleanToTerraform(this._enableTrapsIsdnCallInformation),
      enable_traps_isdn_chan_not_avail: cdktf.booleanToTerraform(this._enableTrapsIsdnChanNotAvail),
      enable_traps_isdn_ietf: cdktf.booleanToTerraform(this._enableTrapsIsdnIetf),
      enable_traps_isdn_layer2: cdktf.booleanToTerraform(this._enableTrapsIsdnLayer2),
      enable_traps_isis: cdktf.booleanToTerraform(this._enableTrapsIsis),
      enable_traps_l2tun_pseudowire_status: cdktf.booleanToTerraform(this._enableTrapsL2TunPseudowireStatus),
      enable_traps_l2tun_session: cdktf.booleanToTerraform(this._enableTrapsL2TunSession),
      enable_traps_l2tun_tunnel: cdktf.booleanToTerraform(this._enableTrapsL2TunTunnel),
      enable_traps_license: cdktf.booleanToTerraform(this._enableTrapsLicense),
      enable_traps_lisp: cdktf.booleanToTerraform(this._enableTrapsLisp),
      enable_traps_local_auth: cdktf.booleanToTerraform(this._enableTrapsLocalAuth),
      enable_traps_mac_notification_change: cdktf.booleanToTerraform(this._enableTrapsMacNotificationChange),
      enable_traps_mac_notification_move: cdktf.booleanToTerraform(this._enableTrapsMacNotificationMove),
      enable_traps_mac_notification_threshold: cdktf.booleanToTerraform(this._enableTrapsMacNotificationThreshold),
      enable_traps_memory_bufferpeak: cdktf.booleanToTerraform(this._enableTrapsMemoryBufferpeak),
      enable_traps_mpls: cdktf.booleanToTerraform(this._enableTrapsMpls),
      enable_traps_mpls_ldp: cdktf.booleanToTerraform(this._enableTrapsMplsLdp),
      enable_traps_mpls_rfc: cdktf.booleanToTerraform(this._enableTrapsMplsRfc),
      enable_traps_mpls_rfc_ldp: cdktf.booleanToTerraform(this._enableTrapsMplsRfcLdp),
      enable_traps_mpls_traffic_eng: cdktf.booleanToTerraform(this._enableTrapsMplsTrafficEng),
      enable_traps_mpls_vpn: cdktf.booleanToTerraform(this._enableTrapsMplsVpn),
      enable_traps_msdp: cdktf.booleanToTerraform(this._enableTrapsMsdp),
      enable_traps_mvpn: cdktf.booleanToTerraform(this._enableTrapsMvpn),
      enable_traps_nhrp_nhc: cdktf.booleanToTerraform(this._enableTrapsNhrpNhc),
      enable_traps_nhrp_nhp: cdktf.booleanToTerraform(this._enableTrapsNhrpNhp),
      enable_traps_nhrp_nhs: cdktf.booleanToTerraform(this._enableTrapsNhrpNhs),
      enable_traps_nhrp_quota_exceeded: cdktf.booleanToTerraform(this._enableTrapsNhrpQuotaExceeded),
      enable_traps_ospf_config_errors: cdktf.booleanToTerraform(this._enableTrapsOspfConfigErrors),
      enable_traps_ospf_config_lsa: cdktf.booleanToTerraform(this._enableTrapsOspfConfigLsa),
      enable_traps_ospf_config_retransmit: cdktf.booleanToTerraform(this._enableTrapsOspfConfigRetransmit),
      enable_traps_ospf_config_state_change: cdktf.booleanToTerraform(this._enableTrapsOspfConfigStateChange),
      enable_traps_ospf_errors_enable: cdktf.booleanToTerraform(this._enableTrapsOspfErrorsEnable),
      enable_traps_ospf_lsa_enable: cdktf.booleanToTerraform(this._enableTrapsOspfLsaEnable),
      enable_traps_ospf_nssa_trans_change: cdktf.booleanToTerraform(this._enableTrapsOspfNssaTransChange),
      enable_traps_ospf_retransmit_enable: cdktf.booleanToTerraform(this._enableTrapsOspfRetransmitEnable),
      enable_traps_ospf_shamlink_interface: cdktf.booleanToTerraform(this._enableTrapsOspfShamlinkInterface),
      enable_traps_ospf_shamlink_neighbor: cdktf.booleanToTerraform(this._enableTrapsOspfShamlinkNeighbor),
      enable_traps_ospfv3_config_errors: cdktf.booleanToTerraform(this._enableTrapsOspfv3ConfigErrors),
      enable_traps_ospfv3_config_state_change: cdktf.booleanToTerraform(this._enableTrapsOspfv3ConfigStateChange),
      enable_traps_ospfv3_errors: cdktf.booleanToTerraform(this._enableTrapsOspfv3Errors),
      enable_traps_ospfv3_state_change: cdktf.booleanToTerraform(this._enableTrapsOspfv3StateChange),
      enable_traps_pfr: cdktf.booleanToTerraform(this._enableTrapsPfr),
      enable_traps_pim_invalid_pim_message: cdktf.booleanToTerraform(this._enableTrapsPimInvalidPimMessage),
      enable_traps_pim_neighbor_change: cdktf.booleanToTerraform(this._enableTrapsPimNeighborChange),
      enable_traps_pim_rp_mapping_change: cdktf.booleanToTerraform(this._enableTrapsPimRpMappingChange),
      enable_traps_pimstdmib_interface_election: cdktf.booleanToTerraform(this._enableTrapsPimstdmibInterfaceElection),
      enable_traps_pimstdmib_invalid_join_prune: cdktf.booleanToTerraform(this._enableTrapsPimstdmibInvalidJoinPrune),
      enable_traps_pimstdmib_invalid_register: cdktf.booleanToTerraform(this._enableTrapsPimstdmibInvalidRegister),
      enable_traps_pimstdmib_neighbor_loss: cdktf.booleanToTerraform(this._enableTrapsPimstdmibNeighborLoss),
      enable_traps_pimstdmib_rp_mapping_change: cdktf.booleanToTerraform(this._enableTrapsPimstdmibRpMappingChange),
      enable_traps_pki: cdktf.booleanToTerraform(this._enableTrapsPki),
      enable_traps_port_security: cdktf.booleanToTerraform(this._enableTrapsPortSecurity),
      enable_traps_power_ethernet_group: cdktf.stringToTerraform(this._enableTrapsPowerEthernetGroup),
      enable_traps_power_ethernet_police: cdktf.booleanToTerraform(this._enableTrapsPowerEthernetPolice),
      enable_traps_pppoe: cdktf.booleanToTerraform(this._enableTrapsPppoe),
      enable_traps_pw_vc: cdktf.booleanToTerraform(this._enableTrapsPwVc),
      enable_traps_rep: cdktf.booleanToTerraform(this._enableTrapsRep),
      enable_traps_resource_policy: cdktf.booleanToTerraform(this._enableTrapsResourcePolicy),
      enable_traps_rf: cdktf.booleanToTerraform(this._enableTrapsRf),
      enable_traps_rsvp: cdktf.booleanToTerraform(this._enableTrapsRsvp),
      enable_traps_smart_license: cdktf.booleanToTerraform(this._enableTrapsSmartLicense),
      enable_traps_snmp_authentication: cdktf.booleanToTerraform(this._enableTrapsSnmpAuthentication),
      enable_traps_snmp_coldstart: cdktf.booleanToTerraform(this._enableTrapsSnmpColdstart),
      enable_traps_snmp_linkdown: cdktf.booleanToTerraform(this._enableTrapsSnmpLinkdown),
      enable_traps_snmp_linkup: cdktf.booleanToTerraform(this._enableTrapsSnmpLinkup),
      enable_traps_snmp_warmstart: cdktf.booleanToTerraform(this._enableTrapsSnmpWarmstart),
      enable_traps_sonet: cdktf.booleanToTerraform(this._enableTrapsSonet),
      enable_traps_srp: cdktf.booleanToTerraform(this._enableTrapsSrp),
      enable_traps_stackwise: cdktf.booleanToTerraform(this._enableTrapsStackwise),
      enable_traps_stpx_inconsistency: cdktf.booleanToTerraform(this._enableTrapsStpxInconsistency),
      enable_traps_stpx_loop_inconsistency: cdktf.booleanToTerraform(this._enableTrapsStpxLoopInconsistency),
      enable_traps_stpx_root_inconsistency: cdktf.booleanToTerraform(this._enableTrapsStpxRootInconsistency),
      enable_traps_syslog: cdktf.booleanToTerraform(this._enableTrapsSyslog),
      enable_traps_transceiver_all: cdktf.booleanToTerraform(this._enableTrapsTransceiverAll),
      enable_traps_tty: cdktf.booleanToTerraform(this._enableTrapsTty),
      enable_traps_udld_link_fail_rpt: cdktf.booleanToTerraform(this._enableTrapsUdldLinkFailRpt),
      enable_traps_udld_status_change: cdktf.booleanToTerraform(this._enableTrapsUdldStatusChange),
      enable_traps_vdsl2line: cdktf.booleanToTerraform(this._enableTrapsVdsl2Line),
      enable_traps_vlan_membership: cdktf.booleanToTerraform(this._enableTrapsVlanMembership),
      enable_traps_vlancreate: cdktf.booleanToTerraform(this._enableTrapsVlancreate),
      enable_traps_vlandelete: cdktf.booleanToTerraform(this._enableTrapsVlandelete),
      enable_traps_voice: cdktf.booleanToTerraform(this._enableTrapsVoice),
      enable_traps_vrfmib_vnet_trunk_down: cdktf.booleanToTerraform(this._enableTrapsVrfmibVnetTrunkDown),
      enable_traps_vrfmib_vnet_trunk_up: cdktf.booleanToTerraform(this._enableTrapsVrfmibVnetTrunkUp),
      enable_traps_vrfmib_vrf_down: cdktf.booleanToTerraform(this._enableTrapsVrfmibVrfDown),
      enable_traps_vrfmib_vrf_up: cdktf.booleanToTerraform(this._enableTrapsVrfmibVrfUp),
      enable_traps_vrrp: cdktf.booleanToTerraform(this._enableTrapsVrrp),
      enable_traps_vtp: cdktf.booleanToTerraform(this._enableTrapsVtp),
      groups: cdktf.listMapper(snmpServerGroupsToTerraform, false)(this._groups.internalValue),
      hosts: cdktf.listMapper(snmpServerHostsToTerraform, false)(this._hosts.internalValue),
      ifindex_persist: cdktf.booleanToTerraform(this._ifindexPersist),
      location: cdktf.stringToTerraform(this._location),
      packetsize: cdktf.numberToTerraform(this._packetsize),
      queue_length: cdktf.numberToTerraform(this._queueLength),
      snmp_communities: cdktf.listMapper(snmpServerSnmpCommunitiesToTerraform, false)(this._snmpCommunities.internalValue),
      source_interface_informs_forty_gigabit_ethernet: cdktf.stringToTerraform(this._sourceInterfaceInformsFortyGigabitEthernet),
      source_interface_informs_gigabit_ethernet: cdktf.stringToTerraform(this._sourceInterfaceInformsGigabitEthernet),
      source_interface_informs_hundred_gig_e: cdktf.stringToTerraform(this._sourceInterfaceInformsHundredGigE),
      source_interface_informs_loopback: cdktf.numberToTerraform(this._sourceInterfaceInformsLoopback),
      source_interface_informs_port_channel: cdktf.numberToTerraform(this._sourceInterfaceInformsPortChannel),
      source_interface_informs_port_channel_subinterface: cdktf.stringToTerraform(this._sourceInterfaceInformsPortChannelSubinterface),
      source_interface_informs_ten_gigabit_ethernet: cdktf.stringToTerraform(this._sourceInterfaceInformsTenGigabitEthernet),
      source_interface_informs_vlan: cdktf.numberToTerraform(this._sourceInterfaceInformsVlan),
      source_interface_traps_forty_gigabit_ethernet: cdktf.stringToTerraform(this._sourceInterfaceTrapsFortyGigabitEthernet),
      source_interface_traps_gigabit_ethernet: cdktf.stringToTerraform(this._sourceInterfaceTrapsGigabitEthernet),
      source_interface_traps_hundred_gig_e: cdktf.stringToTerraform(this._sourceInterfaceTrapsHundredGigE),
      source_interface_traps_loopback: cdktf.numberToTerraform(this._sourceInterfaceTrapsLoopback),
      source_interface_traps_port_channel: cdktf.numberToTerraform(this._sourceInterfaceTrapsPortChannel),
      source_interface_traps_port_channel_subinterface: cdktf.stringToTerraform(this._sourceInterfaceTrapsPortChannelSubinterface),
      source_interface_traps_ten_gigabit_ethernet: cdktf.stringToTerraform(this._sourceInterfaceTrapsTenGigabitEthernet),
      source_interface_traps_vlan: cdktf.numberToTerraform(this._sourceInterfaceTrapsVlan),
      system_shutdown: cdktf.booleanToTerraform(this._systemShutdown),
      trap_source_forty_gigabit_ethernet: cdktf.stringToTerraform(this._trapSourceFortyGigabitEthernet),
      trap_source_gigabit_ethernet: cdktf.stringToTerraform(this._trapSourceGigabitEthernet),
      trap_source_hundred_gig_e: cdktf.stringToTerraform(this._trapSourceHundredGigE),
      trap_source_loopback: cdktf.numberToTerraform(this._trapSourceLoopback),
      trap_source_port_channel: cdktf.numberToTerraform(this._trapSourcePortChannel),
      trap_source_port_channel_subinterface: cdktf.stringToTerraform(this._trapSourcePortChannelSubinterface),
      trap_source_ten_gigabit_ethernet: cdktf.stringToTerraform(this._trapSourceTenGigabitEthernet),
      trap_source_vlan: cdktf.numberToTerraform(this._trapSourceVlan),
      users: cdktf.listMapper(snmpServerUsersToTerraform, false)(this._users.internalValue),
      views: cdktf.listMapper(snmpServerViewsToTerraform, false)(this._views.internalValue),
      vrf_hosts: cdktf.listMapper(snmpServerVrfHostsToTerraform, false)(this._vrfHosts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      chassis_id: {
        value: cdktf.stringToHclTerraform(this._chassisId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contact: {
        value: cdktf.stringToHclTerraform(this._contact),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contexts: {
        value: cdktf.listMapperHcl(snmpServerContextsToHclTerraform, false)(this._contexts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SnmpServerContextsList",
      },
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_informs: {
        value: cdktf.booleanToHclTerraform(this._enableInforms),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_logging_getop: {
        value: cdktf.booleanToHclTerraform(this._enableLoggingGetop),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_logging_setop: {
        value: cdktf.booleanToHclTerraform(this._enableLoggingSetop),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps: {
        value: cdktf.booleanToHclTerraform(this._enableTraps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_aaa_server: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsAaaServer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_adslline: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsAdslline),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_alarm_type: {
        value: cdktf.stringToHclTerraform(this._enableTrapsAlarmType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_traps_auth_framework_sec_violation: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsAuthFrameworkSecViolation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_bfd: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsBfd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_bgp: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsBgp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_bgp_cbgp2: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsBgpCbgp2),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_bgp_cbgp2_state_changes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._enableTrapsBgpCbgp2StateChanges),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      enable_traps_bgp_cbgp2_threshold_prefix: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsBgpCbgp2ThresholdPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_bridge_newroot: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsBridgeNewroot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_bridge_topologychange: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsBridgeTopologychange),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_bulkstat_collection: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsBulkstatCollection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_bulkstat_transfer: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsBulkstatTransfer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_call_home_message_send_fail: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsCallHomeMessageSendFail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_call_home_server_fail: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsCallHomeServerFail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_casa: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsCasa),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_cbgp2: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsCbgp2),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_cef_inconsistency: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsCefInconsistency),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_cef_peer_fib_state_change: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsCefPeerFibStateChange),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_cef_peer_state_change: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsCefPeerStateChange),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_cef_resource_failure: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsCefResourceFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_cnpd: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsCnpd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_config: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_config_copy: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsConfigCopy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_config_ctid: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsConfigCtid),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_cpu_threshold: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsCpuThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_dhcp: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsDhcp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_dial: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsDial),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_dlsw: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsDlsw),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_ds1: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsDs1),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_dsp_card_status: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsDspCardStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_dsp_oper_state: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsDspOperState),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_eigrp: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsEigrp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_energywise: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsEnergywise),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_entity: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsEntity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_entity_diag_boot_up_fail: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsEntityDiagBootUpFail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_entity_diag_hm_test_recover: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsEntityDiagHmTestRecover),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_entity_diag_hm_thresh_reached: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsEntityDiagHmThreshReached),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_entity_diag_scheduled_test_fail: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsEntityDiagScheduledTestFail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_entity_perf_throughput_notif: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsEntityPerfThroughputNotif),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_entity_qfp_mem_res_thresh: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsEntityQfpMemResThresh),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_entity_qfp_throughput_notif: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsEntityQfpThroughputNotif),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_entity_sensor: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsEntitySensor),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_entity_state: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsEntityState),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_envmon: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsEnvmon),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_errdisable: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsErrdisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_ether_oam: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsEtherOam),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_ethernet_cfm_alarm: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsEthernetCfmAlarm),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_ethernet_cfm_cc_config: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsEthernetCfmCcConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_ethernet_cfm_cc_cross_connect: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsEthernetCfmCcCrossConnect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_ethernet_cfm_cc_loop: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsEthernetCfmCcLoop),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_ethernet_cfm_cc_mep_down: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsEthernetCfmCcMepDown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_ethernet_cfm_cc_mep_up: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsEthernetCfmCcMepUp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_ethernet_cfm_crosscheck_mep_missing: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsEthernetCfmCrosscheckMepMissing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_ethernet_cfm_crosscheck_mep_unknown: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsEthernetCfmCrosscheckMepUnknown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_ethernet_cfm_crosscheck_service_up: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsEthernetCfmCrosscheckServiceUp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_ethernet_evc_create: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsEthernetEvcCreate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_ethernet_evc_delete: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsEthernetEvcDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_ethernet_evc_status: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsEthernetEvcStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_event_manager: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsEventManager),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_fast_reroute_protected: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsFastRerouteProtected),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_firewall_serverstatus: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsFirewallServerstatus),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_flash_insertion: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsFlashInsertion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_flash_lowspace: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsFlashLowspace),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_flash_removal: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsFlashRemoval),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_flowmon: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsFlowmon),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_frame_relay_config_bundle_mismatch: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsFrameRelayConfigBundleMismatch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_frame_relay_config_only: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsFrameRelayConfigOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_frame_relay_config_subif_configs: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsFrameRelayConfigSubifConfigs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_frame_relay_multilink_bundle_mismatch: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsFrameRelayMultilinkBundleMismatch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_frame_relay_subif_count: {
        value: cdktf.numberToHclTerraform(this._enableTrapsFrameRelaySubifCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_traps_frame_relay_subif_interval: {
        value: cdktf.numberToHclTerraform(this._enableTrapsFrameRelaySubifInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_traps_fru_ctrl: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsFruCtrl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_hsrp: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsHsrp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_ike_policy_add: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsIkePolicyAdd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_ike_policy_delete: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsIkePolicyDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_ike_tunnel_start: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsIkeTunnelStart),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_ike_tunnel_stop: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsIkeTunnelStop),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_ip_local_pool: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsIpLocalPool),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_ipmulticast: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsIpmulticast),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_ipsec_cryptomap_add: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsIpsecCryptomapAdd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_ipsec_cryptomap_attach: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsIpsecCryptomapAttach),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_ipsec_cryptomap_delete: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsIpsecCryptomapDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_ipsec_cryptomap_detach: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsIpsecCryptomapDetach),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_ipsec_too_many_sas: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsIpsecTooManySas),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_ipsec_tunnel_start: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsIpsecTunnelStart),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_ipsec_tunnel_stop: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsIpsecTunnelStop),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_ipsla: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsIpsla),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_isdn_call_information: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsIsdnCallInformation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_isdn_chan_not_avail: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsIsdnChanNotAvail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_isdn_ietf: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsIsdnIetf),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_isdn_layer2: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsIsdnLayer2),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_isis: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsIsis),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_l2tun_pseudowire_status: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsL2TunPseudowireStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_l2tun_session: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsL2TunSession),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_l2tun_tunnel: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsL2TunTunnel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_license: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsLicense),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_lisp: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsLisp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_local_auth: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsLocalAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_mac_notification_change: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsMacNotificationChange),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_mac_notification_move: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsMacNotificationMove),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_mac_notification_threshold: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsMacNotificationThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_memory_bufferpeak: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsMemoryBufferpeak),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_mpls: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsMpls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_mpls_ldp: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsMplsLdp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_mpls_rfc: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsMplsRfc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_mpls_rfc_ldp: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsMplsRfcLdp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_mpls_traffic_eng: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsMplsTrafficEng),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_mpls_vpn: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsMplsVpn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_msdp: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsMsdp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_mvpn: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsMvpn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_nhrp_nhc: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsNhrpNhc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_nhrp_nhp: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsNhrpNhp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_nhrp_nhs: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsNhrpNhs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_nhrp_quota_exceeded: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsNhrpQuotaExceeded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_ospf_config_errors: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsOspfConfigErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_ospf_config_lsa: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsOspfConfigLsa),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_ospf_config_retransmit: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsOspfConfigRetransmit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_ospf_config_state_change: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsOspfConfigStateChange),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_ospf_errors_enable: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsOspfErrorsEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_ospf_lsa_enable: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsOspfLsaEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_ospf_nssa_trans_change: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsOspfNssaTransChange),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_ospf_retransmit_enable: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsOspfRetransmitEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_ospf_shamlink_interface: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsOspfShamlinkInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_ospf_shamlink_neighbor: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsOspfShamlinkNeighbor),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_ospfv3_config_errors: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsOspfv3ConfigErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_ospfv3_config_state_change: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsOspfv3ConfigStateChange),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_ospfv3_errors: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsOspfv3Errors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_ospfv3_state_change: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsOspfv3StateChange),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_pfr: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsPfr),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_pim_invalid_pim_message: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsPimInvalidPimMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_pim_neighbor_change: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsPimNeighborChange),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_pim_rp_mapping_change: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsPimRpMappingChange),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_pimstdmib_interface_election: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsPimstdmibInterfaceElection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_pimstdmib_invalid_join_prune: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsPimstdmibInvalidJoinPrune),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_pimstdmib_invalid_register: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsPimstdmibInvalidRegister),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_pimstdmib_neighbor_loss: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsPimstdmibNeighborLoss),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_pimstdmib_rp_mapping_change: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsPimstdmibRpMappingChange),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_pki: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsPki),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_port_security: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsPortSecurity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_power_ethernet_group: {
        value: cdktf.stringToHclTerraform(this._enableTrapsPowerEthernetGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_traps_power_ethernet_police: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsPowerEthernetPolice),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_pppoe: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsPppoe),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_pw_vc: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsPwVc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_rep: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsRep),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_resource_policy: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsResourcePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_rf: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsRf),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_rsvp: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsRsvp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_smart_license: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsSmartLicense),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_snmp_authentication: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsSnmpAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_snmp_coldstart: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsSnmpColdstart),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_snmp_linkdown: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsSnmpLinkdown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_snmp_linkup: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsSnmpLinkup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_snmp_warmstart: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsSnmpWarmstart),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_sonet: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsSonet),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_srp: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsSrp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_stackwise: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsStackwise),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_stpx_inconsistency: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsStpxInconsistency),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_stpx_loop_inconsistency: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsStpxLoopInconsistency),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_stpx_root_inconsistency: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsStpxRootInconsistency),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_syslog: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsSyslog),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_transceiver_all: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsTransceiverAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_tty: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsTty),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_udld_link_fail_rpt: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsUdldLinkFailRpt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_udld_status_change: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsUdldStatusChange),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_vdsl2line: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsVdsl2Line),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_vlan_membership: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsVlanMembership),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_vlancreate: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsVlancreate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_vlandelete: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsVlandelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_voice: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsVoice),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_vrfmib_vnet_trunk_down: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsVrfmibVnetTrunkDown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_vrfmib_vnet_trunk_up: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsVrfmibVnetTrunkUp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_vrfmib_vrf_down: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsVrfmibVrfDown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_vrfmib_vrf_up: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsVrfmibVrfUp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_vrrp: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsVrrp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_traps_vtp: {
        value: cdktf.booleanToHclTerraform(this._enableTrapsVtp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      groups: {
        value: cdktf.listMapperHcl(snmpServerGroupsToHclTerraform, false)(this._groups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SnmpServerGroupsList",
      },
      hosts: {
        value: cdktf.listMapperHcl(snmpServerHostsToHclTerraform, false)(this._hosts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SnmpServerHostsList",
      },
      ifindex_persist: {
        value: cdktf.booleanToHclTerraform(this._ifindexPersist),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packetsize: {
        value: cdktf.numberToHclTerraform(this._packetsize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      queue_length: {
        value: cdktf.numberToHclTerraform(this._queueLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snmp_communities: {
        value: cdktf.listMapperHcl(snmpServerSnmpCommunitiesToHclTerraform, false)(this._snmpCommunities.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SnmpServerSnmpCommunitiesList",
      },
      source_interface_informs_forty_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._sourceInterfaceInformsFortyGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_interface_informs_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._sourceInterfaceInformsGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_interface_informs_hundred_gig_e: {
        value: cdktf.stringToHclTerraform(this._sourceInterfaceInformsHundredGigE),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_interface_informs_loopback: {
        value: cdktf.numberToHclTerraform(this._sourceInterfaceInformsLoopback),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_interface_informs_port_channel: {
        value: cdktf.numberToHclTerraform(this._sourceInterfaceInformsPortChannel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_interface_informs_port_channel_subinterface: {
        value: cdktf.stringToHclTerraform(this._sourceInterfaceInformsPortChannelSubinterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_interface_informs_ten_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._sourceInterfaceInformsTenGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_interface_informs_vlan: {
        value: cdktf.numberToHclTerraform(this._sourceInterfaceInformsVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_interface_traps_forty_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._sourceInterfaceTrapsFortyGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_interface_traps_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._sourceInterfaceTrapsGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_interface_traps_hundred_gig_e: {
        value: cdktf.stringToHclTerraform(this._sourceInterfaceTrapsHundredGigE),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_interface_traps_loopback: {
        value: cdktf.numberToHclTerraform(this._sourceInterfaceTrapsLoopback),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_interface_traps_port_channel: {
        value: cdktf.numberToHclTerraform(this._sourceInterfaceTrapsPortChannel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_interface_traps_port_channel_subinterface: {
        value: cdktf.stringToHclTerraform(this._sourceInterfaceTrapsPortChannelSubinterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_interface_traps_ten_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._sourceInterfaceTrapsTenGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_interface_traps_vlan: {
        value: cdktf.numberToHclTerraform(this._sourceInterfaceTrapsVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      system_shutdown: {
        value: cdktf.booleanToHclTerraform(this._systemShutdown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      trap_source_forty_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._trapSourceFortyGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trap_source_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._trapSourceGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trap_source_hundred_gig_e: {
        value: cdktf.stringToHclTerraform(this._trapSourceHundredGigE),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trap_source_loopback: {
        value: cdktf.numberToHclTerraform(this._trapSourceLoopback),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trap_source_port_channel: {
        value: cdktf.numberToHclTerraform(this._trapSourcePortChannel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trap_source_port_channel_subinterface: {
        value: cdktf.stringToHclTerraform(this._trapSourcePortChannelSubinterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trap_source_ten_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._trapSourceTenGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trap_source_vlan: {
        value: cdktf.numberToHclTerraform(this._trapSourceVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      users: {
        value: cdktf.listMapperHcl(snmpServerUsersToHclTerraform, false)(this._users.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SnmpServerUsersList",
      },
      views: {
        value: cdktf.listMapperHcl(snmpServerViewsToHclTerraform, false)(this._views.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SnmpServerViewsList",
      },
      vrf_hosts: {
        value: cdktf.listMapperHcl(snmpServerVrfHostsToHclTerraform, false)(this._vrfHosts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SnmpServerVrfHostsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
