// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectWirelesscontrollerVapDynamicMappingAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#_centmgmt ObjectWirelesscontrollerVapDynamicMappingA#_centmgmt}
  */
  readonly centmgmt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#_dhcp_svr_id ObjectWirelesscontrollerVapDynamicMappingA#_dhcp_svr_id}
  */
  readonly dhcpSvrId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#_intf_allowaccess ObjectWirelesscontrollerVapDynamicMappingA#_intf_allowaccess}
  */
  readonly intfAllowaccess?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#_intf_device_access_list ObjectWirelesscontrollerVapDynamicMappingA#_intf_device_access_list}
  */
  readonly intfDeviceAccessList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#_intf_device_identification ObjectWirelesscontrollerVapDynamicMappingA#_intf_device_identification}
  */
  readonly intfDeviceIdentification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#_intf_device_netscan ObjectWirelesscontrollerVapDynamicMappingA#_intf_device_netscan}
  */
  readonly intfDeviceNetscan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#_intf_dhcp6_relay_ip ObjectWirelesscontrollerVapDynamicMappingA#_intf_dhcp6_relay_ip}
  */
  readonly intfDhcp6RelayIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#_intf_dhcp6_relay_service ObjectWirelesscontrollerVapDynamicMappingA#_intf_dhcp6_relay_service}
  */
  readonly intfDhcp6RelayService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#_intf_dhcp6_relay_type ObjectWirelesscontrollerVapDynamicMappingA#_intf_dhcp6_relay_type}
  */
  readonly intfDhcp6RelayType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#_intf_dhcp_relay_ip ObjectWirelesscontrollerVapDynamicMappingA#_intf_dhcp_relay_ip}
  */
  readonly intfDhcpRelayIp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#_intf_dhcp_relay_service ObjectWirelesscontrollerVapDynamicMappingA#_intf_dhcp_relay_service}
  */
  readonly intfDhcpRelayService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#_intf_dhcp_relay_type ObjectWirelesscontrollerVapDynamicMappingA#_intf_dhcp_relay_type}
  */
  readonly intfDhcpRelayType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#_intf_ip ObjectWirelesscontrollerVapDynamicMappingA#_intf_ip}
  */
  readonly intfIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#_intf_ip6_address ObjectWirelesscontrollerVapDynamicMappingA#_intf_ip6_address}
  */
  readonly intfIp6Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#_intf_ip6_allowaccess ObjectWirelesscontrollerVapDynamicMappingA#_intf_ip6_allowaccess}
  */
  readonly intfIp6Allowaccess?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#_intf_listen_forticlient_connection ObjectWirelesscontrollerVapDynamicMappingA#_intf_listen_forticlient_connection}
  */
  readonly intfListenForticlientConnection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#_is_factory_setting ObjectWirelesscontrollerVapDynamicMappingA#_is_factory_setting}
  */
  readonly isFactorySetting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#access_control_list ObjectWirelesscontrollerVapDynamicMappingA#access_control_list}
  */
  readonly accessControlList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#acct_interim_interval ObjectWirelesscontrollerVapDynamicMappingA#acct_interim_interval}
  */
  readonly acctInterimInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#additional_akms ObjectWirelesscontrollerVapDynamicMappingA#additional_akms}
  */
  readonly additionalAkms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#address_group ObjectWirelesscontrollerVapDynamicMappingA#address_group}
  */
  readonly addressGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#address_group_policy ObjectWirelesscontrollerVapDynamicMappingA#address_group_policy}
  */
  readonly addressGroupPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#adom ObjectWirelesscontrollerVapDynamicMappingA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#alias ObjectWirelesscontrollerVapDynamicMappingA#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#antivirus_profile ObjectWirelesscontrollerVapDynamicMappingA#antivirus_profile}
  */
  readonly antivirusProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#application_detection_engine ObjectWirelesscontrollerVapDynamicMappingA#application_detection_engine}
  */
  readonly applicationDetectionEngine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#application_dscp_marking ObjectWirelesscontrollerVapDynamicMappingA#application_dscp_marking}
  */
  readonly applicationDscpMarking?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#application_list ObjectWirelesscontrollerVapDynamicMappingA#application_list}
  */
  readonly applicationList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#application_report_intv ObjectWirelesscontrollerVapDynamicMappingA#application_report_intv}
  */
  readonly applicationReportIntv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#atf_weight ObjectWirelesscontrollerVapDynamicMappingA#atf_weight}
  */
  readonly atfWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#auth ObjectWirelesscontrollerVapDynamicMappingA#auth}
  */
  readonly auth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#auth_cert ObjectWirelesscontrollerVapDynamicMappingA#auth_cert}
  */
  readonly authCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#auth_portal_addr ObjectWirelesscontrollerVapDynamicMappingA#auth_portal_addr}
  */
  readonly authPortalAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#beacon_advertising ObjectWirelesscontrollerVapDynamicMappingA#beacon_advertising}
  */
  readonly beaconAdvertising?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#broadcast_ssid ObjectWirelesscontrollerVapDynamicMappingA#broadcast_ssid}
  */
  readonly broadcastSsid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#broadcast_suppression ObjectWirelesscontrollerVapDynamicMappingA#broadcast_suppression}
  */
  readonly broadcastSuppression?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#bss_color_partial ObjectWirelesscontrollerVapDynamicMappingA#bss_color_partial}
  */
  readonly bssColorPartial?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#bstm_disassociation_imminent ObjectWirelesscontrollerVapDynamicMappingA#bstm_disassociation_imminent}
  */
  readonly bstmDisassociationImminent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#bstm_load_balancing_disassoc_timer ObjectWirelesscontrollerVapDynamicMappingA#bstm_load_balancing_disassoc_timer}
  */
  readonly bstmLoadBalancingDisassocTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#bstm_rssi_disassoc_timer ObjectWirelesscontrollerVapDynamicMappingA#bstm_rssi_disassoc_timer}
  */
  readonly bstmRssiDisassocTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#captive_portal_ac_name ObjectWirelesscontrollerVapDynamicMappingA#captive_portal_ac_name}
  */
  readonly captivePortalAcName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#captive_portal_auth_timeout ObjectWirelesscontrollerVapDynamicMappingA#captive_portal_auth_timeout}
  */
  readonly captivePortalAuthTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#captive_portal_fw_accounting ObjectWirelesscontrollerVapDynamicMappingA#captive_portal_fw_accounting}
  */
  readonly captivePortalFwAccounting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#captive_portal_macauth_radius_secret ObjectWirelesscontrollerVapDynamicMappingA#captive_portal_macauth_radius_secret}
  */
  readonly captivePortalMacauthRadiusSecret?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#captive_portal_macauth_radius_server ObjectWirelesscontrollerVapDynamicMappingA#captive_portal_macauth_radius_server}
  */
  readonly captivePortalMacauthRadiusServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#captive_portal_radius_secret ObjectWirelesscontrollerVapDynamicMappingA#captive_portal_radius_secret}
  */
  readonly captivePortalRadiusSecret?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#captive_portal_radius_server ObjectWirelesscontrollerVapDynamicMappingA#captive_portal_radius_server}
  */
  readonly captivePortalRadiusServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#captive_portal_session_timeout_interval ObjectWirelesscontrollerVapDynamicMappingA#captive_portal_session_timeout_interval}
  */
  readonly captivePortalSessionTimeoutInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#client_count ObjectWirelesscontrollerVapDynamicMappingA#client_count}
  */
  readonly clientCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#dhcp_address_enforcement ObjectWirelesscontrollerVapDynamicMappingA#dhcp_address_enforcement}
  */
  readonly dhcpAddressEnforcement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#dhcp_lease_time ObjectWirelesscontrollerVapDynamicMappingA#dhcp_lease_time}
  */
  readonly dhcpLeaseTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#dhcp_option43_insertion ObjectWirelesscontrollerVapDynamicMappingA#dhcp_option43_insertion}
  */
  readonly dhcpOption43Insertion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#dhcp_option82_circuit_id_insertion ObjectWirelesscontrollerVapDynamicMappingA#dhcp_option82_circuit_id_insertion}
  */
  readonly dhcpOption82CircuitIdInsertion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#dhcp_option82_insertion ObjectWirelesscontrollerVapDynamicMappingA#dhcp_option82_insertion}
  */
  readonly dhcpOption82Insertion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#dhcp_option82_remote_id_insertion ObjectWirelesscontrollerVapDynamicMappingA#dhcp_option82_remote_id_insertion}
  */
  readonly dhcpOption82RemoteIdInsertion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#dynamic_sort_subtable ObjectWirelesscontrollerVapDynamicMappingA#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#dynamic_vlan ObjectWirelesscontrollerVapDynamicMappingA#dynamic_vlan}
  */
  readonly dynamicVlan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#eap_reauth ObjectWirelesscontrollerVapDynamicMappingA#eap_reauth}
  */
  readonly eapReauth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#eap_reauth_intv ObjectWirelesscontrollerVapDynamicMappingA#eap_reauth_intv}
  */
  readonly eapReauthIntv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#eapol_key_retries ObjectWirelesscontrollerVapDynamicMappingA#eapol_key_retries}
  */
  readonly eapolKeyRetries?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#encrypt ObjectWirelesscontrollerVapDynamicMappingA#encrypt}
  */
  readonly encrypt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#external_fast_roaming ObjectWirelesscontrollerVapDynamicMappingA#external_fast_roaming}
  */
  readonly externalFastRoaming?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#external_logout ObjectWirelesscontrollerVapDynamicMappingA#external_logout}
  */
  readonly externalLogout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#external_web ObjectWirelesscontrollerVapDynamicMappingA#external_web}
  */
  readonly externalWeb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#external_web_format ObjectWirelesscontrollerVapDynamicMappingA#external_web_format}
  */
  readonly externalWebFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#fast_bss_transition ObjectWirelesscontrollerVapDynamicMappingA#fast_bss_transition}
  */
  readonly fastBssTransition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#fast_roaming ObjectWirelesscontrollerVapDynamicMappingA#fast_roaming}
  */
  readonly fastRoaming?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#ft_mobility_domain ObjectWirelesscontrollerVapDynamicMappingA#ft_mobility_domain}
  */
  readonly ftMobilityDomain?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#ft_over_ds ObjectWirelesscontrollerVapDynamicMappingA#ft_over_ds}
  */
  readonly ftOverDs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#ft_r0_key_lifetime ObjectWirelesscontrollerVapDynamicMappingA#ft_r0_key_lifetime}
  */
  readonly ftR0KeyLifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#gas_comeback_delay ObjectWirelesscontrollerVapDynamicMappingA#gas_comeback_delay}
  */
  readonly gasComebackDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#gas_fragmentation_limit ObjectWirelesscontrollerVapDynamicMappingA#gas_fragmentation_limit}
  */
  readonly gasFragmentationLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#gtk_rekey ObjectWirelesscontrollerVapDynamicMappingA#gtk_rekey}
  */
  readonly gtkRekey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#gtk_rekey_intv ObjectWirelesscontrollerVapDynamicMappingA#gtk_rekey_intv}
  */
  readonly gtkRekeyIntv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#high_efficiency ObjectWirelesscontrollerVapDynamicMappingA#high_efficiency}
  */
  readonly highEfficiency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#hotspot20_profile ObjectWirelesscontrollerVapDynamicMappingA#hotspot20_profile}
  */
  readonly hotspot20Profile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#id ObjectWirelesscontrollerVapDynamicMappingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#igmp_snooping ObjectWirelesscontrollerVapDynamicMappingA#igmp_snooping}
  */
  readonly igmpSnooping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#intra_vap_privacy ObjectWirelesscontrollerVapDynamicMappingA#intra_vap_privacy}
  */
  readonly intraVapPrivacy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#ip ObjectWirelesscontrollerVapDynamicMappingA#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#ips_sensor ObjectWirelesscontrollerVapDynamicMappingA#ips_sensor}
  */
  readonly ipsSensor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#ipv6_rules ObjectWirelesscontrollerVapDynamicMappingA#ipv6_rules}
  */
  readonly ipv6Rules?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#key ObjectWirelesscontrollerVapDynamicMappingA#key}
  */
  readonly key?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#keyindex ObjectWirelesscontrollerVapDynamicMappingA#keyindex}
  */
  readonly keyindex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#l3_roaming ObjectWirelesscontrollerVapDynamicMappingA#l3_roaming}
  */
  readonly l3Roaming?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#l3_roaming_mode ObjectWirelesscontrollerVapDynamicMappingA#l3_roaming_mode}
  */
  readonly l3RoamingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#ldpc ObjectWirelesscontrollerVapDynamicMappingA#ldpc}
  */
  readonly ldpc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#local_authentication ObjectWirelesscontrollerVapDynamicMappingA#local_authentication}
  */
  readonly localAuthentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#local_bridging ObjectWirelesscontrollerVapDynamicMappingA#local_bridging}
  */
  readonly localBridging?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#local_lan ObjectWirelesscontrollerVapDynamicMappingA#local_lan}
  */
  readonly localLan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#local_standalone ObjectWirelesscontrollerVapDynamicMappingA#local_standalone}
  */
  readonly localStandalone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#local_standalone_dns ObjectWirelesscontrollerVapDynamicMappingA#local_standalone_dns}
  */
  readonly localStandaloneDns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#local_standalone_dns_ip ObjectWirelesscontrollerVapDynamicMappingA#local_standalone_dns_ip}
  */
  readonly localStandaloneDnsIp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#local_standalone_nat ObjectWirelesscontrollerVapDynamicMappingA#local_standalone_nat}
  */
  readonly localStandaloneNat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#local_switching ObjectWirelesscontrollerVapDynamicMappingA#local_switching}
  */
  readonly localSwitching?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#mac_auth_bypass ObjectWirelesscontrollerVapDynamicMappingA#mac_auth_bypass}
  */
  readonly macAuthBypass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#mac_called_station_delimiter ObjectWirelesscontrollerVapDynamicMappingA#mac_called_station_delimiter}
  */
  readonly macCalledStationDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#mac_calling_station_delimiter ObjectWirelesscontrollerVapDynamicMappingA#mac_calling_station_delimiter}
  */
  readonly macCallingStationDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#mac_case ObjectWirelesscontrollerVapDynamicMappingA#mac_case}
  */
  readonly macCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#mac_filter ObjectWirelesscontrollerVapDynamicMappingA#mac_filter}
  */
  readonly macFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#mac_filter_policy_other ObjectWirelesscontrollerVapDynamicMappingA#mac_filter_policy_other}
  */
  readonly macFilterPolicyOther?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#mac_password_delimiter ObjectWirelesscontrollerVapDynamicMappingA#mac_password_delimiter}
  */
  readonly macPasswordDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#mac_username_delimiter ObjectWirelesscontrollerVapDynamicMappingA#mac_username_delimiter}
  */
  readonly macUsernameDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#max_clients ObjectWirelesscontrollerVapDynamicMappingA#max_clients}
  */
  readonly maxClients?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#max_clients_ap ObjectWirelesscontrollerVapDynamicMappingA#max_clients_ap}
  */
  readonly maxClientsAp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#mbo ObjectWirelesscontrollerVapDynamicMappingA#mbo}
  */
  readonly mbo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#mbo_cell_data_conn_pref ObjectWirelesscontrollerVapDynamicMappingA#mbo_cell_data_conn_pref}
  */
  readonly mboCellDataConnPref?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#me_disable_thresh ObjectWirelesscontrollerVapDynamicMappingA#me_disable_thresh}
  */
  readonly meDisableThresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#mesh_backhaul ObjectWirelesscontrollerVapDynamicMappingA#mesh_backhaul}
  */
  readonly meshBackhaul?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#mpsk ObjectWirelesscontrollerVapDynamicMappingA#mpsk}
  */
  readonly mpsk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#mpsk_concurrent_clients ObjectWirelesscontrollerVapDynamicMappingA#mpsk_concurrent_clients}
  */
  readonly mpskConcurrentClients?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#mpsk_profile ObjectWirelesscontrollerVapDynamicMappingA#mpsk_profile}
  */
  readonly mpskProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#mu_mimo ObjectWirelesscontrollerVapDynamicMappingA#mu_mimo}
  */
  readonly muMimo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#multicast_enhance ObjectWirelesscontrollerVapDynamicMappingA#multicast_enhance}
  */
  readonly multicastEnhance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#multicast_rate ObjectWirelesscontrollerVapDynamicMappingA#multicast_rate}
  */
  readonly multicastRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#n80211k ObjectWirelesscontrollerVapDynamicMappingA#n80211k}
  */
  readonly n80211K?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#n80211v ObjectWirelesscontrollerVapDynamicMappingA#n80211v}
  */
  readonly n80211V?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#nac ObjectWirelesscontrollerVapDynamicMappingA#nac}
  */
  readonly nac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#nac_profile ObjectWirelesscontrollerVapDynamicMappingA#nac_profile}
  */
  readonly nacProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#neighbor_report_dual_band ObjectWirelesscontrollerVapDynamicMappingA#neighbor_report_dual_band}
  */
  readonly neighborReportDualBand?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#okc ObjectWirelesscontrollerVapDynamicMappingA#okc}
  */
  readonly okc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#osen ObjectWirelesscontrollerVapDynamicMappingA#osen}
  */
  readonly osen?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#owe_groups ObjectWirelesscontrollerVapDynamicMappingA#owe_groups}
  */
  readonly oweGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#owe_transition ObjectWirelesscontrollerVapDynamicMappingA#owe_transition}
  */
  readonly oweTransition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#owe_transition_ssid ObjectWirelesscontrollerVapDynamicMappingA#owe_transition_ssid}
  */
  readonly oweTransitionSsid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#passphrase ObjectWirelesscontrollerVapDynamicMappingA#passphrase}
  */
  readonly passphrase?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#pmf ObjectWirelesscontrollerVapDynamicMappingA#pmf}
  */
  readonly pmf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#pmf_assoc_comeback_timeout ObjectWirelesscontrollerVapDynamicMappingA#pmf_assoc_comeback_timeout}
  */
  readonly pmfAssocComebackTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#pmf_sa_query_retry_timeout ObjectWirelesscontrollerVapDynamicMappingA#pmf_sa_query_retry_timeout}
  */
  readonly pmfSaQueryRetryTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#port_macauth ObjectWirelesscontrollerVapDynamicMappingA#port_macauth}
  */
  readonly portMacauth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#port_macauth_reauth_timeout ObjectWirelesscontrollerVapDynamicMappingA#port_macauth_reauth_timeout}
  */
  readonly portMacauthReauthTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#port_macauth_timeout ObjectWirelesscontrollerVapDynamicMappingA#port_macauth_timeout}
  */
  readonly portMacauthTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#portal_message_override_group ObjectWirelesscontrollerVapDynamicMappingA#portal_message_override_group}
  */
  readonly portalMessageOverrideGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#portal_type ObjectWirelesscontrollerVapDynamicMappingA#portal_type}
  */
  readonly portalType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#primary_wag_profile ObjectWirelesscontrollerVapDynamicMappingA#primary_wag_profile}
  */
  readonly primaryWagProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#probe_resp_suppression ObjectWirelesscontrollerVapDynamicMappingA#probe_resp_suppression}
  */
  readonly probeRespSuppression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#probe_resp_threshold ObjectWirelesscontrollerVapDynamicMappingA#probe_resp_threshold}
  */
  readonly probeRespThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#ptk_rekey ObjectWirelesscontrollerVapDynamicMappingA#ptk_rekey}
  */
  readonly ptkRekey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#ptk_rekey_intv ObjectWirelesscontrollerVapDynamicMappingA#ptk_rekey_intv}
  */
  readonly ptkRekeyIntv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#qos_profile ObjectWirelesscontrollerVapDynamicMappingA#qos_profile}
  */
  readonly qosProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#quarantine ObjectWirelesscontrollerVapDynamicMappingA#quarantine}
  */
  readonly quarantine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#radio_2g_threshold ObjectWirelesscontrollerVapDynamicMappingA#radio_2g_threshold}
  */
  readonly radio2GThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#radio_5g_threshold ObjectWirelesscontrollerVapDynamicMappingA#radio_5g_threshold}
  */
  readonly radio5GThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#radio_sensitivity ObjectWirelesscontrollerVapDynamicMappingA#radio_sensitivity}
  */
  readonly radioSensitivity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#radius_mac_auth ObjectWirelesscontrollerVapDynamicMappingA#radius_mac_auth}
  */
  readonly radiusMacAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#radius_mac_auth_block_interval ObjectWirelesscontrollerVapDynamicMappingA#radius_mac_auth_block_interval}
  */
  readonly radiusMacAuthBlockInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#radius_mac_auth_server ObjectWirelesscontrollerVapDynamicMappingA#radius_mac_auth_server}
  */
  readonly radiusMacAuthServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#radius_mac_auth_usergroups ObjectWirelesscontrollerVapDynamicMappingA#radius_mac_auth_usergroups}
  */
  readonly radiusMacAuthUsergroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#radius_mac_mpsk_auth ObjectWirelesscontrollerVapDynamicMappingA#radius_mac_mpsk_auth}
  */
  readonly radiusMacMpskAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#radius_mac_mpsk_timeout ObjectWirelesscontrollerVapDynamicMappingA#radius_mac_mpsk_timeout}
  */
  readonly radiusMacMpskTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#radius_server ObjectWirelesscontrollerVapDynamicMappingA#radius_server}
  */
  readonly radiusServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#rates_11a ObjectWirelesscontrollerVapDynamicMappingA#rates_11a}
  */
  readonly rates11A?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#rates_11ac_mcs_map ObjectWirelesscontrollerVapDynamicMappingA#rates_11ac_mcs_map}
  */
  readonly rates11AcMcsMap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#rates_11ac_ss12 ObjectWirelesscontrollerVapDynamicMappingA#rates_11ac_ss12}
  */
  readonly rates11AcSs12?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#rates_11ac_ss34 ObjectWirelesscontrollerVapDynamicMappingA#rates_11ac_ss34}
  */
  readonly rates11AcSs34?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#rates_11ax_mcs_map ObjectWirelesscontrollerVapDynamicMappingA#rates_11ax_mcs_map}
  */
  readonly rates11AxMcsMap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#rates_11ax_ss12 ObjectWirelesscontrollerVapDynamicMappingA#rates_11ax_ss12}
  */
  readonly rates11AxSs12?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#rates_11ax_ss34 ObjectWirelesscontrollerVapDynamicMappingA#rates_11ax_ss34}
  */
  readonly rates11AxSs34?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#rates_11bg ObjectWirelesscontrollerVapDynamicMappingA#rates_11bg}
  */
  readonly rates11Bg?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#rates_11n_ss12 ObjectWirelesscontrollerVapDynamicMappingA#rates_11n_ss12}
  */
  readonly rates11NSs12?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#rates_11n_ss34 ObjectWirelesscontrollerVapDynamicMappingA#rates_11n_ss34}
  */
  readonly rates11NSs34?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#roaming_acct_interim_update ObjectWirelesscontrollerVapDynamicMappingA#roaming_acct_interim_update}
  */
  readonly roamingAcctInterimUpdate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#sae_groups ObjectWirelesscontrollerVapDynamicMappingA#sae_groups}
  */
  readonly saeGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#sae_h2e_only ObjectWirelesscontrollerVapDynamicMappingA#sae_h2e_only}
  */
  readonly saeH2EOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#sae_hnp_only ObjectWirelesscontrollerVapDynamicMappingA#sae_hnp_only}
  */
  readonly saeHnpOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#sae_password ObjectWirelesscontrollerVapDynamicMappingA#sae_password}
  */
  readonly saePassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#sae_pk ObjectWirelesscontrollerVapDynamicMappingA#sae_pk}
  */
  readonly saePk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#sae_private_key ObjectWirelesscontrollerVapDynamicMappingA#sae_private_key}
  */
  readonly saePrivateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#scan_botnet_connections ObjectWirelesscontrollerVapDynamicMappingA#scan_botnet_connections}
  */
  readonly scanBotnetConnections?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#schedule ObjectWirelesscontrollerVapDynamicMappingA#schedule}
  */
  readonly schedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#scopetype ObjectWirelesscontrollerVapDynamicMappingA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#secondary_wag_profile ObjectWirelesscontrollerVapDynamicMappingA#secondary_wag_profile}
  */
  readonly secondaryWagProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#security ObjectWirelesscontrollerVapDynamicMappingA#security}
  */
  readonly security?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#security_exempt_list ObjectWirelesscontrollerVapDynamicMappingA#security_exempt_list}
  */
  readonly securityExemptList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#security_obsolete_option ObjectWirelesscontrollerVapDynamicMappingA#security_obsolete_option}
  */
  readonly securityObsoleteOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#security_redirect_url ObjectWirelesscontrollerVapDynamicMappingA#security_redirect_url}
  */
  readonly securityRedirectUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#selected_usergroups ObjectWirelesscontrollerVapDynamicMappingA#selected_usergroups}
  */
  readonly selectedUsergroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#split_tunneling ObjectWirelesscontrollerVapDynamicMappingA#split_tunneling}
  */
  readonly splitTunneling?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#ssid ObjectWirelesscontrollerVapDynamicMappingA#ssid}
  */
  readonly ssid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#sticky_client_remove ObjectWirelesscontrollerVapDynamicMappingA#sticky_client_remove}
  */
  readonly stickyClientRemove?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#sticky_client_threshold_2g ObjectWirelesscontrollerVapDynamicMappingA#sticky_client_threshold_2g}
  */
  readonly stickyClientThreshold2G?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#sticky_client_threshold_5g ObjectWirelesscontrollerVapDynamicMappingA#sticky_client_threshold_5g}
  */
  readonly stickyClientThreshold5G?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#sticky_client_threshold_6g ObjectWirelesscontrollerVapDynamicMappingA#sticky_client_threshold_6g}
  */
  readonly stickyClientThreshold6G?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#target_wake_time ObjectWirelesscontrollerVapDynamicMappingA#target_wake_time}
  */
  readonly targetWakeTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#tkip_counter_measure ObjectWirelesscontrollerVapDynamicMappingA#tkip_counter_measure}
  */
  readonly tkipCounterMeasure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#tunnel_echo_interval ObjectWirelesscontrollerVapDynamicMappingA#tunnel_echo_interval}
  */
  readonly tunnelEchoInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#tunnel_fallback_interval ObjectWirelesscontrollerVapDynamicMappingA#tunnel_fallback_interval}
  */
  readonly tunnelFallbackInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#usergroup ObjectWirelesscontrollerVapDynamicMappingA#usergroup}
  */
  readonly usergroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#utm_log ObjectWirelesscontrollerVapDynamicMappingA#utm_log}
  */
  readonly utmLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#utm_profile ObjectWirelesscontrollerVapDynamicMappingA#utm_profile}
  */
  readonly utmProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#utm_status ObjectWirelesscontrollerVapDynamicMappingA#utm_status}
  */
  readonly utmStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#vap ObjectWirelesscontrollerVapDynamicMappingA#vap}
  */
  readonly vap: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#vdom ObjectWirelesscontrollerVapDynamicMappingA#vdom}
  */
  readonly vdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#vlan_auto ObjectWirelesscontrollerVapDynamicMappingA#vlan_auto}
  */
  readonly vlanAuto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#vlan_pooling ObjectWirelesscontrollerVapDynamicMappingA#vlan_pooling}
  */
  readonly vlanPooling?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#vlanid ObjectWirelesscontrollerVapDynamicMappingA#vlanid}
  */
  readonly vlanid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#voice_enterprise ObjectWirelesscontrollerVapDynamicMappingA#voice_enterprise}
  */
  readonly voiceEnterprise?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#webfilter_profile ObjectWirelesscontrollerVapDynamicMappingA#webfilter_profile}
  */
  readonly webfilterProfile?: string;
  /**
  * _scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#_scope ObjectWirelesscontrollerVapDynamicMappingA#_scope}
  */
  readonly scope?: ObjectWirelesscontrollerVapDynamicMappingScopeA[] | cdktf.IResolvable;
}
export interface ObjectWirelesscontrollerVapDynamicMappingScopeA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#name ObjectWirelesscontrollerVapDynamicMappingA#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#vdom ObjectWirelesscontrollerVapDynamicMappingA#vdom}
  */
  readonly vdom?: string;
}

export function objectWirelesscontrollerVapDynamicMappingScopeAToTerraform(struct?: ObjectWirelesscontrollerVapDynamicMappingScopeA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    vdom: cdktf.stringToTerraform(struct!.vdom),
  }
}


export function objectWirelesscontrollerVapDynamicMappingScopeAToHclTerraform(struct?: ObjectWirelesscontrollerVapDynamicMappingScopeA | cdktf.IResolvable): any {
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
    vdom: {
      value: cdktf.stringToHclTerraform(struct!.vdom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectWirelesscontrollerVapDynamicMappingScopeAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectWirelesscontrollerVapDynamicMappingScopeA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._vdom !== undefined) {
      hasAnyValues = true;
      internalValueResult.vdom = this._vdom;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectWirelesscontrollerVapDynamicMappingScopeA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._vdom = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._vdom = value.vdom;
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

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }
}

export class ObjectWirelesscontrollerVapDynamicMappingScopeAList extends cdktf.ComplexList {
  public internalValue? : ObjectWirelesscontrollerVapDynamicMappingScopeA[] | cdktf.IResolvable

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
  public get(index: number): ObjectWirelesscontrollerVapDynamicMappingScopeAOutputReference {
    return new ObjectWirelesscontrollerVapDynamicMappingScopeAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping fortimanager_object_wirelesscontroller_vap_dynamic_mapping}
*/
export class ObjectWirelesscontrollerVapDynamicMappingA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_wirelesscontroller_vap_dynamic_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectWirelesscontrollerVapDynamicMappingA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectWirelesscontrollerVapDynamicMappingA to import
  * @param importFromId The id of the existing ObjectWirelesscontrollerVapDynamicMappingA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectWirelesscontrollerVapDynamicMappingA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_wirelesscontroller_vap_dynamic_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_vap_dynamic_mapping fortimanager_object_wirelesscontroller_vap_dynamic_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectWirelesscontrollerVapDynamicMappingAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectWirelesscontrollerVapDynamicMappingAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_wirelesscontroller_vap_dynamic_mapping',
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
    this._centmgmt = config.centmgmt;
    this._dhcpSvrId = config.dhcpSvrId;
    this._intfAllowaccess = config.intfAllowaccess;
    this._intfDeviceAccessList = config.intfDeviceAccessList;
    this._intfDeviceIdentification = config.intfDeviceIdentification;
    this._intfDeviceNetscan = config.intfDeviceNetscan;
    this._intfDhcp6RelayIp = config.intfDhcp6RelayIp;
    this._intfDhcp6RelayService = config.intfDhcp6RelayService;
    this._intfDhcp6RelayType = config.intfDhcp6RelayType;
    this._intfDhcpRelayIp = config.intfDhcpRelayIp;
    this._intfDhcpRelayService = config.intfDhcpRelayService;
    this._intfDhcpRelayType = config.intfDhcpRelayType;
    this._intfIp = config.intfIp;
    this._intfIp6Address = config.intfIp6Address;
    this._intfIp6Allowaccess = config.intfIp6Allowaccess;
    this._intfListenForticlientConnection = config.intfListenForticlientConnection;
    this._isFactorySetting = config.isFactorySetting;
    this._accessControlList = config.accessControlList;
    this._acctInterimInterval = config.acctInterimInterval;
    this._additionalAkms = config.additionalAkms;
    this._addressGroup = config.addressGroup;
    this._addressGroupPolicy = config.addressGroupPolicy;
    this._adom = config.adom;
    this._alias = config.alias;
    this._antivirusProfile = config.antivirusProfile;
    this._applicationDetectionEngine = config.applicationDetectionEngine;
    this._applicationDscpMarking = config.applicationDscpMarking;
    this._applicationList = config.applicationList;
    this._applicationReportIntv = config.applicationReportIntv;
    this._atfWeight = config.atfWeight;
    this._auth = config.auth;
    this._authCert = config.authCert;
    this._authPortalAddr = config.authPortalAddr;
    this._beaconAdvertising = config.beaconAdvertising;
    this._broadcastSsid = config.broadcastSsid;
    this._broadcastSuppression = config.broadcastSuppression;
    this._bssColorPartial = config.bssColorPartial;
    this._bstmDisassociationImminent = config.bstmDisassociationImminent;
    this._bstmLoadBalancingDisassocTimer = config.bstmLoadBalancingDisassocTimer;
    this._bstmRssiDisassocTimer = config.bstmRssiDisassocTimer;
    this._captivePortalAcName = config.captivePortalAcName;
    this._captivePortalAuthTimeout = config.captivePortalAuthTimeout;
    this._captivePortalFwAccounting = config.captivePortalFwAccounting;
    this._captivePortalMacauthRadiusSecret = config.captivePortalMacauthRadiusSecret;
    this._captivePortalMacauthRadiusServer = config.captivePortalMacauthRadiusServer;
    this._captivePortalRadiusSecret = config.captivePortalRadiusSecret;
    this._captivePortalRadiusServer = config.captivePortalRadiusServer;
    this._captivePortalSessionTimeoutInterval = config.captivePortalSessionTimeoutInterval;
    this._clientCount = config.clientCount;
    this._dhcpAddressEnforcement = config.dhcpAddressEnforcement;
    this._dhcpLeaseTime = config.dhcpLeaseTime;
    this._dhcpOption43Insertion = config.dhcpOption43Insertion;
    this._dhcpOption82CircuitIdInsertion = config.dhcpOption82CircuitIdInsertion;
    this._dhcpOption82Insertion = config.dhcpOption82Insertion;
    this._dhcpOption82RemoteIdInsertion = config.dhcpOption82RemoteIdInsertion;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._dynamicVlan = config.dynamicVlan;
    this._eapReauth = config.eapReauth;
    this._eapReauthIntv = config.eapReauthIntv;
    this._eapolKeyRetries = config.eapolKeyRetries;
    this._encrypt = config.encrypt;
    this._externalFastRoaming = config.externalFastRoaming;
    this._externalLogout = config.externalLogout;
    this._externalWeb = config.externalWeb;
    this._externalWebFormat = config.externalWebFormat;
    this._fastBssTransition = config.fastBssTransition;
    this._fastRoaming = config.fastRoaming;
    this._ftMobilityDomain = config.ftMobilityDomain;
    this._ftOverDs = config.ftOverDs;
    this._ftR0KeyLifetime = config.ftR0KeyLifetime;
    this._gasComebackDelay = config.gasComebackDelay;
    this._gasFragmentationLimit = config.gasFragmentationLimit;
    this._gtkRekey = config.gtkRekey;
    this._gtkRekeyIntv = config.gtkRekeyIntv;
    this._highEfficiency = config.highEfficiency;
    this._hotspot20Profile = config.hotspot20Profile;
    this._id = config.id;
    this._igmpSnooping = config.igmpSnooping;
    this._intraVapPrivacy = config.intraVapPrivacy;
    this._ip = config.ip;
    this._ipsSensor = config.ipsSensor;
    this._ipv6Rules = config.ipv6Rules;
    this._key = config.key;
    this._keyindex = config.keyindex;
    this._l3Roaming = config.l3Roaming;
    this._l3RoamingMode = config.l3RoamingMode;
    this._ldpc = config.ldpc;
    this._localAuthentication = config.localAuthentication;
    this._localBridging = config.localBridging;
    this._localLan = config.localLan;
    this._localStandalone = config.localStandalone;
    this._localStandaloneDns = config.localStandaloneDns;
    this._localStandaloneDnsIp = config.localStandaloneDnsIp;
    this._localStandaloneNat = config.localStandaloneNat;
    this._localSwitching = config.localSwitching;
    this._macAuthBypass = config.macAuthBypass;
    this._macCalledStationDelimiter = config.macCalledStationDelimiter;
    this._macCallingStationDelimiter = config.macCallingStationDelimiter;
    this._macCase = config.macCase;
    this._macFilter = config.macFilter;
    this._macFilterPolicyOther = config.macFilterPolicyOther;
    this._macPasswordDelimiter = config.macPasswordDelimiter;
    this._macUsernameDelimiter = config.macUsernameDelimiter;
    this._maxClients = config.maxClients;
    this._maxClientsAp = config.maxClientsAp;
    this._mbo = config.mbo;
    this._mboCellDataConnPref = config.mboCellDataConnPref;
    this._meDisableThresh = config.meDisableThresh;
    this._meshBackhaul = config.meshBackhaul;
    this._mpsk = config.mpsk;
    this._mpskConcurrentClients = config.mpskConcurrentClients;
    this._mpskProfile = config.mpskProfile;
    this._muMimo = config.muMimo;
    this._multicastEnhance = config.multicastEnhance;
    this._multicastRate = config.multicastRate;
    this._n80211K = config.n80211K;
    this._n80211V = config.n80211V;
    this._nac = config.nac;
    this._nacProfile = config.nacProfile;
    this._neighborReportDualBand = config.neighborReportDualBand;
    this._okc = config.okc;
    this._osen = config.osen;
    this._oweGroups = config.oweGroups;
    this._oweTransition = config.oweTransition;
    this._oweTransitionSsid = config.oweTransitionSsid;
    this._passphrase = config.passphrase;
    this._pmf = config.pmf;
    this._pmfAssocComebackTimeout = config.pmfAssocComebackTimeout;
    this._pmfSaQueryRetryTimeout = config.pmfSaQueryRetryTimeout;
    this._portMacauth = config.portMacauth;
    this._portMacauthReauthTimeout = config.portMacauthReauthTimeout;
    this._portMacauthTimeout = config.portMacauthTimeout;
    this._portalMessageOverrideGroup = config.portalMessageOverrideGroup;
    this._portalType = config.portalType;
    this._primaryWagProfile = config.primaryWagProfile;
    this._probeRespSuppression = config.probeRespSuppression;
    this._probeRespThreshold = config.probeRespThreshold;
    this._ptkRekey = config.ptkRekey;
    this._ptkRekeyIntv = config.ptkRekeyIntv;
    this._qosProfile = config.qosProfile;
    this._quarantine = config.quarantine;
    this._radio2GThreshold = config.radio2GThreshold;
    this._radio5GThreshold = config.radio5GThreshold;
    this._radioSensitivity = config.radioSensitivity;
    this._radiusMacAuth = config.radiusMacAuth;
    this._radiusMacAuthBlockInterval = config.radiusMacAuthBlockInterval;
    this._radiusMacAuthServer = config.radiusMacAuthServer;
    this._radiusMacAuthUsergroups = config.radiusMacAuthUsergroups;
    this._radiusMacMpskAuth = config.radiusMacMpskAuth;
    this._radiusMacMpskTimeout = config.radiusMacMpskTimeout;
    this._radiusServer = config.radiusServer;
    this._rates11A = config.rates11A;
    this._rates11AcMcsMap = config.rates11AcMcsMap;
    this._rates11AcSs12 = config.rates11AcSs12;
    this._rates11AcSs34 = config.rates11AcSs34;
    this._rates11AxMcsMap = config.rates11AxMcsMap;
    this._rates11AxSs12 = config.rates11AxSs12;
    this._rates11AxSs34 = config.rates11AxSs34;
    this._rates11Bg = config.rates11Bg;
    this._rates11NSs12 = config.rates11NSs12;
    this._rates11NSs34 = config.rates11NSs34;
    this._roamingAcctInterimUpdate = config.roamingAcctInterimUpdate;
    this._saeGroups = config.saeGroups;
    this._saeH2EOnly = config.saeH2EOnly;
    this._saeHnpOnly = config.saeHnpOnly;
    this._saePassword = config.saePassword;
    this._saePk = config.saePk;
    this._saePrivateKey = config.saePrivateKey;
    this._scanBotnetConnections = config.scanBotnetConnections;
    this._schedule = config.schedule;
    this._scopetype = config.scopetype;
    this._secondaryWagProfile = config.secondaryWagProfile;
    this._security = config.security;
    this._securityExemptList = config.securityExemptList;
    this._securityObsoleteOption = config.securityObsoleteOption;
    this._securityRedirectUrl = config.securityRedirectUrl;
    this._selectedUsergroups = config.selectedUsergroups;
    this._splitTunneling = config.splitTunneling;
    this._ssid = config.ssid;
    this._stickyClientRemove = config.stickyClientRemove;
    this._stickyClientThreshold2G = config.stickyClientThreshold2G;
    this._stickyClientThreshold5G = config.stickyClientThreshold5G;
    this._stickyClientThreshold6G = config.stickyClientThreshold6G;
    this._targetWakeTime = config.targetWakeTime;
    this._tkipCounterMeasure = config.tkipCounterMeasure;
    this._tunnelEchoInterval = config.tunnelEchoInterval;
    this._tunnelFallbackInterval = config.tunnelFallbackInterval;
    this._usergroup = config.usergroup;
    this._utmLog = config.utmLog;
    this._utmProfile = config.utmProfile;
    this._utmStatus = config.utmStatus;
    this._vap = config.vap;
    this._vdom = config.vdom;
    this._vlanAuto = config.vlanAuto;
    this._vlanPooling = config.vlanPooling;
    this._vlanid = config.vlanid;
    this._voiceEnterprise = config.voiceEnterprise;
    this._webfilterProfile = config.webfilterProfile;
    this._scope.internalValue = config.scope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // _centmgmt - computed: true, optional: true, required: false
  private _centmgmt?: string; 
  public get centmgmt() {
    return this.getStringAttribute('_centmgmt');
  }
  public set centmgmt(value: string) {
    this._centmgmt = value;
  }
  public resetCentmgmt() {
    this._centmgmt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get centmgmtInput() {
    return this._centmgmt;
  }

  // _dhcp_svr_id - computed: false, optional: true, required: false
  private _dhcpSvrId?: string; 
  public get dhcpSvrId() {
    return this.getStringAttribute('_dhcp_svr_id');
  }
  public set dhcpSvrId(value: string) {
    this._dhcpSvrId = value;
  }
  public resetDhcpSvrId() {
    this._dhcpSvrId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpSvrIdInput() {
    return this._dhcpSvrId;
  }

  // _intf_allowaccess - computed: true, optional: true, required: false
  private _intfAllowaccess?: string[]; 
  public get intfAllowaccess() {
    return cdktf.Fn.tolist(this.getListAttribute('_intf_allowaccess'));
  }
  public set intfAllowaccess(value: string[]) {
    this._intfAllowaccess = value;
  }
  public resetIntfAllowaccess() {
    this._intfAllowaccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intfAllowaccessInput() {
    return this._intfAllowaccess;
  }

  // _intf_device_access_list - computed: false, optional: true, required: false
  private _intfDeviceAccessList?: string; 
  public get intfDeviceAccessList() {
    return this.getStringAttribute('_intf_device_access_list');
  }
  public set intfDeviceAccessList(value: string) {
    this._intfDeviceAccessList = value;
  }
  public resetIntfDeviceAccessList() {
    this._intfDeviceAccessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intfDeviceAccessListInput() {
    return this._intfDeviceAccessList;
  }

  // _intf_device_identification - computed: true, optional: true, required: false
  private _intfDeviceIdentification?: string; 
  public get intfDeviceIdentification() {
    return this.getStringAttribute('_intf_device_identification');
  }
  public set intfDeviceIdentification(value: string) {
    this._intfDeviceIdentification = value;
  }
  public resetIntfDeviceIdentification() {
    this._intfDeviceIdentification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intfDeviceIdentificationInput() {
    return this._intfDeviceIdentification;
  }

  // _intf_device_netscan - computed: true, optional: true, required: false
  private _intfDeviceNetscan?: string; 
  public get intfDeviceNetscan() {
    return this.getStringAttribute('_intf_device_netscan');
  }
  public set intfDeviceNetscan(value: string) {
    this._intfDeviceNetscan = value;
  }
  public resetIntfDeviceNetscan() {
    this._intfDeviceNetscan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intfDeviceNetscanInput() {
    return this._intfDeviceNetscan;
  }

  // _intf_dhcp6_relay_ip - computed: false, optional: true, required: false
  private _intfDhcp6RelayIp?: string; 
  public get intfDhcp6RelayIp() {
    return this.getStringAttribute('_intf_dhcp6_relay_ip');
  }
  public set intfDhcp6RelayIp(value: string) {
    this._intfDhcp6RelayIp = value;
  }
  public resetIntfDhcp6RelayIp() {
    this._intfDhcp6RelayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intfDhcp6RelayIpInput() {
    return this._intfDhcp6RelayIp;
  }

  // _intf_dhcp6_relay_service - computed: true, optional: true, required: false
  private _intfDhcp6RelayService?: string; 
  public get intfDhcp6RelayService() {
    return this.getStringAttribute('_intf_dhcp6_relay_service');
  }
  public set intfDhcp6RelayService(value: string) {
    this._intfDhcp6RelayService = value;
  }
  public resetIntfDhcp6RelayService() {
    this._intfDhcp6RelayService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intfDhcp6RelayServiceInput() {
    return this._intfDhcp6RelayService;
  }

  // _intf_dhcp6_relay_type - computed: true, optional: true, required: false
  private _intfDhcp6RelayType?: string; 
  public get intfDhcp6RelayType() {
    return this.getStringAttribute('_intf_dhcp6_relay_type');
  }
  public set intfDhcp6RelayType(value: string) {
    this._intfDhcp6RelayType = value;
  }
  public resetIntfDhcp6RelayType() {
    this._intfDhcp6RelayType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intfDhcp6RelayTypeInput() {
    return this._intfDhcp6RelayType;
  }

  // _intf_dhcp_relay_ip - computed: true, optional: true, required: false
  private _intfDhcpRelayIp?: string[]; 
  public get intfDhcpRelayIp() {
    return cdktf.Fn.tolist(this.getListAttribute('_intf_dhcp_relay_ip'));
  }
  public set intfDhcpRelayIp(value: string[]) {
    this._intfDhcpRelayIp = value;
  }
  public resetIntfDhcpRelayIp() {
    this._intfDhcpRelayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intfDhcpRelayIpInput() {
    return this._intfDhcpRelayIp;
  }

  // _intf_dhcp_relay_service - computed: true, optional: true, required: false
  private _intfDhcpRelayService?: string; 
  public get intfDhcpRelayService() {
    return this.getStringAttribute('_intf_dhcp_relay_service');
  }
  public set intfDhcpRelayService(value: string) {
    this._intfDhcpRelayService = value;
  }
  public resetIntfDhcpRelayService() {
    this._intfDhcpRelayService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intfDhcpRelayServiceInput() {
    return this._intfDhcpRelayService;
  }

  // _intf_dhcp_relay_type - computed: true, optional: true, required: false
  private _intfDhcpRelayType?: string; 
  public get intfDhcpRelayType() {
    return this.getStringAttribute('_intf_dhcp_relay_type');
  }
  public set intfDhcpRelayType(value: string) {
    this._intfDhcpRelayType = value;
  }
  public resetIntfDhcpRelayType() {
    this._intfDhcpRelayType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intfDhcpRelayTypeInput() {
    return this._intfDhcpRelayType;
  }

  // _intf_ip - computed: false, optional: true, required: false
  private _intfIp?: string; 
  public get intfIp() {
    return this.getStringAttribute('_intf_ip');
  }
  public set intfIp(value: string) {
    this._intfIp = value;
  }
  public resetIntfIp() {
    this._intfIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intfIpInput() {
    return this._intfIp;
  }

  // _intf_ip6_address - computed: false, optional: true, required: false
  private _intfIp6Address?: string; 
  public get intfIp6Address() {
    return this.getStringAttribute('_intf_ip6_address');
  }
  public set intfIp6Address(value: string) {
    this._intfIp6Address = value;
  }
  public resetIntfIp6Address() {
    this._intfIp6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intfIp6AddressInput() {
    return this._intfIp6Address;
  }

  // _intf_ip6_allowaccess - computed: true, optional: true, required: false
  private _intfIp6Allowaccess?: string[]; 
  public get intfIp6Allowaccess() {
    return cdktf.Fn.tolist(this.getListAttribute('_intf_ip6_allowaccess'));
  }
  public set intfIp6Allowaccess(value: string[]) {
    this._intfIp6Allowaccess = value;
  }
  public resetIntfIp6Allowaccess() {
    this._intfIp6Allowaccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intfIp6AllowaccessInput() {
    return this._intfIp6Allowaccess;
  }

  // _intf_listen_forticlient_connection - computed: true, optional: true, required: false
  private _intfListenForticlientConnection?: string; 
  public get intfListenForticlientConnection() {
    return this.getStringAttribute('_intf_listen_forticlient_connection');
  }
  public set intfListenForticlientConnection(value: string) {
    this._intfListenForticlientConnection = value;
  }
  public resetIntfListenForticlientConnection() {
    this._intfListenForticlientConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intfListenForticlientConnectionInput() {
    return this._intfListenForticlientConnection;
  }

  // _is_factory_setting - computed: true, optional: true, required: false
  private _isFactorySetting?: string; 
  public get isFactorySetting() {
    return this.getStringAttribute('_is_factory_setting');
  }
  public set isFactorySetting(value: string) {
    this._isFactorySetting = value;
  }
  public resetIsFactorySetting() {
    this._isFactorySetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFactorySettingInput() {
    return this._isFactorySetting;
  }

  // access_control_list - computed: false, optional: true, required: false
  private _accessControlList?: string; 
  public get accessControlList() {
    return this.getStringAttribute('access_control_list');
  }
  public set accessControlList(value: string) {
    this._accessControlList = value;
  }
  public resetAccessControlList() {
    this._accessControlList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlListInput() {
    return this._accessControlList;
  }

  // acct_interim_interval - computed: false, optional: true, required: false
  private _acctInterimInterval?: number; 
  public get acctInterimInterval() {
    return this.getNumberAttribute('acct_interim_interval');
  }
  public set acctInterimInterval(value: number) {
    this._acctInterimInterval = value;
  }
  public resetAcctInterimInterval() {
    this._acctInterimInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acctInterimIntervalInput() {
    return this._acctInterimInterval;
  }

  // additional_akms - computed: true, optional: true, required: false
  private _additionalAkms?: string[]; 
  public get additionalAkms() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_akms'));
  }
  public set additionalAkms(value: string[]) {
    this._additionalAkms = value;
  }
  public resetAdditionalAkms() {
    this._additionalAkms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalAkmsInput() {
    return this._additionalAkms;
  }

  // address_group - computed: false, optional: true, required: false
  private _addressGroup?: string; 
  public get addressGroup() {
    return this.getStringAttribute('address_group');
  }
  public set addressGroup(value: string) {
    this._addressGroup = value;
  }
  public resetAddressGroup() {
    this._addressGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressGroupInput() {
    return this._addressGroup;
  }

  // address_group_policy - computed: true, optional: true, required: false
  private _addressGroupPolicy?: string; 
  public get addressGroupPolicy() {
    return this.getStringAttribute('address_group_policy');
  }
  public set addressGroupPolicy(value: string) {
    this._addressGroupPolicy = value;
  }
  public resetAddressGroupPolicy() {
    this._addressGroupPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressGroupPolicyInput() {
    return this._addressGroupPolicy;
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

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // antivirus_profile - computed: false, optional: true, required: false
  private _antivirusProfile?: string; 
  public get antivirusProfile() {
    return this.getStringAttribute('antivirus_profile');
  }
  public set antivirusProfile(value: string) {
    this._antivirusProfile = value;
  }
  public resetAntivirusProfile() {
    this._antivirusProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antivirusProfileInput() {
    return this._antivirusProfile;
  }

  // application_detection_engine - computed: true, optional: true, required: false
  private _applicationDetectionEngine?: string; 
  public get applicationDetectionEngine() {
    return this.getStringAttribute('application_detection_engine');
  }
  public set applicationDetectionEngine(value: string) {
    this._applicationDetectionEngine = value;
  }
  public resetApplicationDetectionEngine() {
    this._applicationDetectionEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationDetectionEngineInput() {
    return this._applicationDetectionEngine;
  }

  // application_dscp_marking - computed: true, optional: true, required: false
  private _applicationDscpMarking?: string; 
  public get applicationDscpMarking() {
    return this.getStringAttribute('application_dscp_marking');
  }
  public set applicationDscpMarking(value: string) {
    this._applicationDscpMarking = value;
  }
  public resetApplicationDscpMarking() {
    this._applicationDscpMarking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationDscpMarkingInput() {
    return this._applicationDscpMarking;
  }

  // application_list - computed: false, optional: true, required: false
  private _applicationList?: string; 
  public get applicationList() {
    return this.getStringAttribute('application_list');
  }
  public set applicationList(value: string) {
    this._applicationList = value;
  }
  public resetApplicationList() {
    this._applicationList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationListInput() {
    return this._applicationList;
  }

  // application_report_intv - computed: true, optional: true, required: false
  private _applicationReportIntv?: number; 
  public get applicationReportIntv() {
    return this.getNumberAttribute('application_report_intv');
  }
  public set applicationReportIntv(value: number) {
    this._applicationReportIntv = value;
  }
  public resetApplicationReportIntv() {
    this._applicationReportIntv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationReportIntvInput() {
    return this._applicationReportIntv;
  }

  // atf_weight - computed: true, optional: true, required: false
  private _atfWeight?: number; 
  public get atfWeight() {
    return this.getNumberAttribute('atf_weight');
  }
  public set atfWeight(value: number) {
    this._atfWeight = value;
  }
  public resetAtfWeight() {
    this._atfWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atfWeightInput() {
    return this._atfWeight;
  }

  // auth - computed: false, optional: true, required: false
  private _auth?: string; 
  public get auth() {
    return this.getStringAttribute('auth');
  }
  public set auth(value: string) {
    this._auth = value;
  }
  public resetAuth() {
    this._auth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth;
  }

  // auth_cert - computed: false, optional: true, required: false
  private _authCert?: string; 
  public get authCert() {
    return this.getStringAttribute('auth_cert');
  }
  public set authCert(value: string) {
    this._authCert = value;
  }
  public resetAuthCert() {
    this._authCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCertInput() {
    return this._authCert;
  }

  // auth_portal_addr - computed: false, optional: true, required: false
  private _authPortalAddr?: string; 
  public get authPortalAddr() {
    return this.getStringAttribute('auth_portal_addr');
  }
  public set authPortalAddr(value: string) {
    this._authPortalAddr = value;
  }
  public resetAuthPortalAddr() {
    this._authPortalAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPortalAddrInput() {
    return this._authPortalAddr;
  }

  // beacon_advertising - computed: true, optional: true, required: false
  private _beaconAdvertising?: string[]; 
  public get beaconAdvertising() {
    return cdktf.Fn.tolist(this.getListAttribute('beacon_advertising'));
  }
  public set beaconAdvertising(value: string[]) {
    this._beaconAdvertising = value;
  }
  public resetBeaconAdvertising() {
    this._beaconAdvertising = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beaconAdvertisingInput() {
    return this._beaconAdvertising;
  }

  // broadcast_ssid - computed: true, optional: true, required: false
  private _broadcastSsid?: string; 
  public get broadcastSsid() {
    return this.getStringAttribute('broadcast_ssid');
  }
  public set broadcastSsid(value: string) {
    this._broadcastSsid = value;
  }
  public resetBroadcastSsid() {
    this._broadcastSsid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastSsidInput() {
    return this._broadcastSsid;
  }

  // broadcast_suppression - computed: true, optional: true, required: false
  private _broadcastSuppression?: string[]; 
  public get broadcastSuppression() {
    return cdktf.Fn.tolist(this.getListAttribute('broadcast_suppression'));
  }
  public set broadcastSuppression(value: string[]) {
    this._broadcastSuppression = value;
  }
  public resetBroadcastSuppression() {
    this._broadcastSuppression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastSuppressionInput() {
    return this._broadcastSuppression;
  }

  // bss_color_partial - computed: true, optional: true, required: false
  private _bssColorPartial?: string; 
  public get bssColorPartial() {
    return this.getStringAttribute('bss_color_partial');
  }
  public set bssColorPartial(value: string) {
    this._bssColorPartial = value;
  }
  public resetBssColorPartial() {
    this._bssColorPartial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bssColorPartialInput() {
    return this._bssColorPartial;
  }

  // bstm_disassociation_imminent - computed: true, optional: true, required: false
  private _bstmDisassociationImminent?: string; 
  public get bstmDisassociationImminent() {
    return this.getStringAttribute('bstm_disassociation_imminent');
  }
  public set bstmDisassociationImminent(value: string) {
    this._bstmDisassociationImminent = value;
  }
  public resetBstmDisassociationImminent() {
    this._bstmDisassociationImminent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bstmDisassociationImminentInput() {
    return this._bstmDisassociationImminent;
  }

  // bstm_load_balancing_disassoc_timer - computed: true, optional: true, required: false
  private _bstmLoadBalancingDisassocTimer?: number; 
  public get bstmLoadBalancingDisassocTimer() {
    return this.getNumberAttribute('bstm_load_balancing_disassoc_timer');
  }
  public set bstmLoadBalancingDisassocTimer(value: number) {
    this._bstmLoadBalancingDisassocTimer = value;
  }
  public resetBstmLoadBalancingDisassocTimer() {
    this._bstmLoadBalancingDisassocTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bstmLoadBalancingDisassocTimerInput() {
    return this._bstmLoadBalancingDisassocTimer;
  }

  // bstm_rssi_disassoc_timer - computed: true, optional: true, required: false
  private _bstmRssiDisassocTimer?: number; 
  public get bstmRssiDisassocTimer() {
    return this.getNumberAttribute('bstm_rssi_disassoc_timer');
  }
  public set bstmRssiDisassocTimer(value: number) {
    this._bstmRssiDisassocTimer = value;
  }
  public resetBstmRssiDisassocTimer() {
    this._bstmRssiDisassocTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bstmRssiDisassocTimerInput() {
    return this._bstmRssiDisassocTimer;
  }

  // captive_portal_ac_name - computed: false, optional: true, required: false
  private _captivePortalAcName?: string; 
  public get captivePortalAcName() {
    return this.getStringAttribute('captive_portal_ac_name');
  }
  public set captivePortalAcName(value: string) {
    this._captivePortalAcName = value;
  }
  public resetCaptivePortalAcName() {
    this._captivePortalAcName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captivePortalAcNameInput() {
    return this._captivePortalAcName;
  }

  // captive_portal_auth_timeout - computed: false, optional: true, required: false
  private _captivePortalAuthTimeout?: number; 
  public get captivePortalAuthTimeout() {
    return this.getNumberAttribute('captive_portal_auth_timeout');
  }
  public set captivePortalAuthTimeout(value: number) {
    this._captivePortalAuthTimeout = value;
  }
  public resetCaptivePortalAuthTimeout() {
    this._captivePortalAuthTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captivePortalAuthTimeoutInput() {
    return this._captivePortalAuthTimeout;
  }

  // captive_portal_fw_accounting - computed: true, optional: true, required: false
  private _captivePortalFwAccounting?: string; 
  public get captivePortalFwAccounting() {
    return this.getStringAttribute('captive_portal_fw_accounting');
  }
  public set captivePortalFwAccounting(value: string) {
    this._captivePortalFwAccounting = value;
  }
  public resetCaptivePortalFwAccounting() {
    this._captivePortalFwAccounting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captivePortalFwAccountingInput() {
    return this._captivePortalFwAccounting;
  }

  // captive_portal_macauth_radius_secret - computed: true, optional: true, required: false
  private _captivePortalMacauthRadiusSecret?: string[]; 
  public get captivePortalMacauthRadiusSecret() {
    return cdktf.Fn.tolist(this.getListAttribute('captive_portal_macauth_radius_secret'));
  }
  public set captivePortalMacauthRadiusSecret(value: string[]) {
    this._captivePortalMacauthRadiusSecret = value;
  }
  public resetCaptivePortalMacauthRadiusSecret() {
    this._captivePortalMacauthRadiusSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captivePortalMacauthRadiusSecretInput() {
    return this._captivePortalMacauthRadiusSecret;
  }

  // captive_portal_macauth_radius_server - computed: false, optional: true, required: false
  private _captivePortalMacauthRadiusServer?: string; 
  public get captivePortalMacauthRadiusServer() {
    return this.getStringAttribute('captive_portal_macauth_radius_server');
  }
  public set captivePortalMacauthRadiusServer(value: string) {
    this._captivePortalMacauthRadiusServer = value;
  }
  public resetCaptivePortalMacauthRadiusServer() {
    this._captivePortalMacauthRadiusServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captivePortalMacauthRadiusServerInput() {
    return this._captivePortalMacauthRadiusServer;
  }

  // captive_portal_radius_secret - computed: true, optional: true, required: false
  private _captivePortalRadiusSecret?: string[]; 
  public get captivePortalRadiusSecret() {
    return cdktf.Fn.tolist(this.getListAttribute('captive_portal_radius_secret'));
  }
  public set captivePortalRadiusSecret(value: string[]) {
    this._captivePortalRadiusSecret = value;
  }
  public resetCaptivePortalRadiusSecret() {
    this._captivePortalRadiusSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captivePortalRadiusSecretInput() {
    return this._captivePortalRadiusSecret;
  }

  // captive_portal_radius_server - computed: false, optional: true, required: false
  private _captivePortalRadiusServer?: string; 
  public get captivePortalRadiusServer() {
    return this.getStringAttribute('captive_portal_radius_server');
  }
  public set captivePortalRadiusServer(value: string) {
    this._captivePortalRadiusServer = value;
  }
  public resetCaptivePortalRadiusServer() {
    this._captivePortalRadiusServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captivePortalRadiusServerInput() {
    return this._captivePortalRadiusServer;
  }

  // captive_portal_session_timeout_interval - computed: false, optional: true, required: false
  private _captivePortalSessionTimeoutInterval?: number; 
  public get captivePortalSessionTimeoutInterval() {
    return this.getNumberAttribute('captive_portal_session_timeout_interval');
  }
  public set captivePortalSessionTimeoutInterval(value: number) {
    this._captivePortalSessionTimeoutInterval = value;
  }
  public resetCaptivePortalSessionTimeoutInterval() {
    this._captivePortalSessionTimeoutInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captivePortalSessionTimeoutIntervalInput() {
    return this._captivePortalSessionTimeoutInterval;
  }

  // client_count - computed: false, optional: true, required: false
  private _clientCount?: number; 
  public get clientCount() {
    return this.getNumberAttribute('client_count');
  }
  public set clientCount(value: number) {
    this._clientCount = value;
  }
  public resetClientCount() {
    this._clientCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCountInput() {
    return this._clientCount;
  }

  // dhcp_address_enforcement - computed: true, optional: true, required: false
  private _dhcpAddressEnforcement?: string; 
  public get dhcpAddressEnforcement() {
    return this.getStringAttribute('dhcp_address_enforcement');
  }
  public set dhcpAddressEnforcement(value: string) {
    this._dhcpAddressEnforcement = value;
  }
  public resetDhcpAddressEnforcement() {
    this._dhcpAddressEnforcement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpAddressEnforcementInput() {
    return this._dhcpAddressEnforcement;
  }

  // dhcp_lease_time - computed: false, optional: true, required: false
  private _dhcpLeaseTime?: number; 
  public get dhcpLeaseTime() {
    return this.getNumberAttribute('dhcp_lease_time');
  }
  public set dhcpLeaseTime(value: number) {
    this._dhcpLeaseTime = value;
  }
  public resetDhcpLeaseTime() {
    this._dhcpLeaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpLeaseTimeInput() {
    return this._dhcpLeaseTime;
  }

  // dhcp_option43_insertion - computed: true, optional: true, required: false
  private _dhcpOption43Insertion?: string; 
  public get dhcpOption43Insertion() {
    return this.getStringAttribute('dhcp_option43_insertion');
  }
  public set dhcpOption43Insertion(value: string) {
    this._dhcpOption43Insertion = value;
  }
  public resetDhcpOption43Insertion() {
    this._dhcpOption43Insertion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOption43InsertionInput() {
    return this._dhcpOption43Insertion;
  }

  // dhcp_option82_circuit_id_insertion - computed: true, optional: true, required: false
  private _dhcpOption82CircuitIdInsertion?: string; 
  public get dhcpOption82CircuitIdInsertion() {
    return this.getStringAttribute('dhcp_option82_circuit_id_insertion');
  }
  public set dhcpOption82CircuitIdInsertion(value: string) {
    this._dhcpOption82CircuitIdInsertion = value;
  }
  public resetDhcpOption82CircuitIdInsertion() {
    this._dhcpOption82CircuitIdInsertion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOption82CircuitIdInsertionInput() {
    return this._dhcpOption82CircuitIdInsertion;
  }

  // dhcp_option82_insertion - computed: true, optional: true, required: false
  private _dhcpOption82Insertion?: string; 
  public get dhcpOption82Insertion() {
    return this.getStringAttribute('dhcp_option82_insertion');
  }
  public set dhcpOption82Insertion(value: string) {
    this._dhcpOption82Insertion = value;
  }
  public resetDhcpOption82Insertion() {
    this._dhcpOption82Insertion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOption82InsertionInput() {
    return this._dhcpOption82Insertion;
  }

  // dhcp_option82_remote_id_insertion - computed: true, optional: true, required: false
  private _dhcpOption82RemoteIdInsertion?: string; 
  public get dhcpOption82RemoteIdInsertion() {
    return this.getStringAttribute('dhcp_option82_remote_id_insertion');
  }
  public set dhcpOption82RemoteIdInsertion(value: string) {
    this._dhcpOption82RemoteIdInsertion = value;
  }
  public resetDhcpOption82RemoteIdInsertion() {
    this._dhcpOption82RemoteIdInsertion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOption82RemoteIdInsertionInput() {
    return this._dhcpOption82RemoteIdInsertion;
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

  // dynamic_vlan - computed: false, optional: true, required: false
  private _dynamicVlan?: string; 
  public get dynamicVlan() {
    return this.getStringAttribute('dynamic_vlan');
  }
  public set dynamicVlan(value: string) {
    this._dynamicVlan = value;
  }
  public resetDynamicVlan() {
    this._dynamicVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicVlanInput() {
    return this._dynamicVlan;
  }

  // eap_reauth - computed: true, optional: true, required: false
  private _eapReauth?: string; 
  public get eapReauth() {
    return this.getStringAttribute('eap_reauth');
  }
  public set eapReauth(value: string) {
    this._eapReauth = value;
  }
  public resetEapReauth() {
    this._eapReauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapReauthInput() {
    return this._eapReauth;
  }

  // eap_reauth_intv - computed: true, optional: true, required: false
  private _eapReauthIntv?: number; 
  public get eapReauthIntv() {
    return this.getNumberAttribute('eap_reauth_intv');
  }
  public set eapReauthIntv(value: number) {
    this._eapReauthIntv = value;
  }
  public resetEapReauthIntv() {
    this._eapReauthIntv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapReauthIntvInput() {
    return this._eapReauthIntv;
  }

  // eapol_key_retries - computed: true, optional: true, required: false
  private _eapolKeyRetries?: string; 
  public get eapolKeyRetries() {
    return this.getStringAttribute('eapol_key_retries');
  }
  public set eapolKeyRetries(value: string) {
    this._eapolKeyRetries = value;
  }
  public resetEapolKeyRetries() {
    this._eapolKeyRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapolKeyRetriesInput() {
    return this._eapolKeyRetries;
  }

  // encrypt - computed: true, optional: true, required: false
  private _encrypt?: string; 
  public get encrypt() {
    return this.getStringAttribute('encrypt');
  }
  public set encrypt(value: string) {
    this._encrypt = value;
  }
  public resetEncrypt() {
    this._encrypt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptInput() {
    return this._encrypt;
  }

  // external_fast_roaming - computed: true, optional: true, required: false
  private _externalFastRoaming?: string; 
  public get externalFastRoaming() {
    return this.getStringAttribute('external_fast_roaming');
  }
  public set externalFastRoaming(value: string) {
    this._externalFastRoaming = value;
  }
  public resetExternalFastRoaming() {
    this._externalFastRoaming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalFastRoamingInput() {
    return this._externalFastRoaming;
  }

  // external_logout - computed: false, optional: true, required: false
  private _externalLogout?: string; 
  public get externalLogout() {
    return this.getStringAttribute('external_logout');
  }
  public set externalLogout(value: string) {
    this._externalLogout = value;
  }
  public resetExternalLogout() {
    this._externalLogout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalLogoutInput() {
    return this._externalLogout;
  }

  // external_web - computed: false, optional: true, required: false
  private _externalWeb?: string; 
  public get externalWeb() {
    return this.getStringAttribute('external_web');
  }
  public set externalWeb(value: string) {
    this._externalWeb = value;
  }
  public resetExternalWeb() {
    this._externalWeb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalWebInput() {
    return this._externalWeb;
  }

  // external_web_format - computed: false, optional: true, required: false
  private _externalWebFormat?: string; 
  public get externalWebFormat() {
    return this.getStringAttribute('external_web_format');
  }
  public set externalWebFormat(value: string) {
    this._externalWebFormat = value;
  }
  public resetExternalWebFormat() {
    this._externalWebFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalWebFormatInput() {
    return this._externalWebFormat;
  }

  // fast_bss_transition - computed: true, optional: true, required: false
  private _fastBssTransition?: string; 
  public get fastBssTransition() {
    return this.getStringAttribute('fast_bss_transition');
  }
  public set fastBssTransition(value: string) {
    this._fastBssTransition = value;
  }
  public resetFastBssTransition() {
    this._fastBssTransition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastBssTransitionInput() {
    return this._fastBssTransition;
  }

  // fast_roaming - computed: true, optional: true, required: false
  private _fastRoaming?: string; 
  public get fastRoaming() {
    return this.getStringAttribute('fast_roaming');
  }
  public set fastRoaming(value: string) {
    this._fastRoaming = value;
  }
  public resetFastRoaming() {
    this._fastRoaming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastRoamingInput() {
    return this._fastRoaming;
  }

  // ft_mobility_domain - computed: false, optional: true, required: false
  private _ftMobilityDomain?: number; 
  public get ftMobilityDomain() {
    return this.getNumberAttribute('ft_mobility_domain');
  }
  public set ftMobilityDomain(value: number) {
    this._ftMobilityDomain = value;
  }
  public resetFtMobilityDomain() {
    this._ftMobilityDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftMobilityDomainInput() {
    return this._ftMobilityDomain;
  }

  // ft_over_ds - computed: false, optional: true, required: false
  private _ftOverDs?: string; 
  public get ftOverDs() {
    return this.getStringAttribute('ft_over_ds');
  }
  public set ftOverDs(value: string) {
    this._ftOverDs = value;
  }
  public resetFtOverDs() {
    this._ftOverDs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftOverDsInput() {
    return this._ftOverDs;
  }

  // ft_r0_key_lifetime - computed: false, optional: true, required: false
  private _ftR0KeyLifetime?: number; 
  public get ftR0KeyLifetime() {
    return this.getNumberAttribute('ft_r0_key_lifetime');
  }
  public set ftR0KeyLifetime(value: number) {
    this._ftR0KeyLifetime = value;
  }
  public resetFtR0KeyLifetime() {
    this._ftR0KeyLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftR0KeyLifetimeInput() {
    return this._ftR0KeyLifetime;
  }

  // gas_comeback_delay - computed: true, optional: true, required: false
  private _gasComebackDelay?: number; 
  public get gasComebackDelay() {
    return this.getNumberAttribute('gas_comeback_delay');
  }
  public set gasComebackDelay(value: number) {
    this._gasComebackDelay = value;
  }
  public resetGasComebackDelay() {
    this._gasComebackDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gasComebackDelayInput() {
    return this._gasComebackDelay;
  }

  // gas_fragmentation_limit - computed: true, optional: true, required: false
  private _gasFragmentationLimit?: number; 
  public get gasFragmentationLimit() {
    return this.getNumberAttribute('gas_fragmentation_limit');
  }
  public set gasFragmentationLimit(value: number) {
    this._gasFragmentationLimit = value;
  }
  public resetGasFragmentationLimit() {
    this._gasFragmentationLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gasFragmentationLimitInput() {
    return this._gasFragmentationLimit;
  }

  // gtk_rekey - computed: true, optional: true, required: false
  private _gtkRekey?: string; 
  public get gtkRekey() {
    return this.getStringAttribute('gtk_rekey');
  }
  public set gtkRekey(value: string) {
    this._gtkRekey = value;
  }
  public resetGtkRekey() {
    this._gtkRekey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtkRekeyInput() {
    return this._gtkRekey;
  }

  // gtk_rekey_intv - computed: true, optional: true, required: false
  private _gtkRekeyIntv?: number; 
  public get gtkRekeyIntv() {
    return this.getNumberAttribute('gtk_rekey_intv');
  }
  public set gtkRekeyIntv(value: number) {
    this._gtkRekeyIntv = value;
  }
  public resetGtkRekeyIntv() {
    this._gtkRekeyIntv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtkRekeyIntvInput() {
    return this._gtkRekeyIntv;
  }

  // high_efficiency - computed: true, optional: true, required: false
  private _highEfficiency?: string; 
  public get highEfficiency() {
    return this.getStringAttribute('high_efficiency');
  }
  public set highEfficiency(value: string) {
    this._highEfficiency = value;
  }
  public resetHighEfficiency() {
    this._highEfficiency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highEfficiencyInput() {
    return this._highEfficiency;
  }

  // hotspot20_profile - computed: false, optional: true, required: false
  private _hotspot20Profile?: string; 
  public get hotspot20Profile() {
    return this.getStringAttribute('hotspot20_profile');
  }
  public set hotspot20Profile(value: string) {
    this._hotspot20Profile = value;
  }
  public resetHotspot20Profile() {
    this._hotspot20Profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hotspot20ProfileInput() {
    return this._hotspot20Profile;
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

  // igmp_snooping - computed: true, optional: true, required: false
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

  // intra_vap_privacy - computed: true, optional: true, required: false
  private _intraVapPrivacy?: string; 
  public get intraVapPrivacy() {
    return this.getStringAttribute('intra_vap_privacy');
  }
  public set intraVapPrivacy(value: string) {
    this._intraVapPrivacy = value;
  }
  public resetIntraVapPrivacy() {
    this._intraVapPrivacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intraVapPrivacyInput() {
    return this._intraVapPrivacy;
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

  // ips_sensor - computed: false, optional: true, required: false
  private _ipsSensor?: string; 
  public get ipsSensor() {
    return this.getStringAttribute('ips_sensor');
  }
  public set ipsSensor(value: string) {
    this._ipsSensor = value;
  }
  public resetIpsSensor() {
    this._ipsSensor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsSensorInput() {
    return this._ipsSensor;
  }

  // ipv6_rules - computed: true, optional: true, required: false
  private _ipv6Rules?: string[]; 
  public get ipv6Rules() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv6_rules'));
  }
  public set ipv6Rules(value: string[]) {
    this._ipv6Rules = value;
  }
  public resetIpv6Rules() {
    this._ipv6Rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6RulesInput() {
    return this._ipv6Rules;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string[]; 
  public get key() {
    return cdktf.Fn.tolist(this.getListAttribute('key'));
  }
  public set key(value: string[]) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // keyindex - computed: false, optional: true, required: false
  private _keyindex?: number; 
  public get keyindex() {
    return this.getNumberAttribute('keyindex');
  }
  public set keyindex(value: number) {
    this._keyindex = value;
  }
  public resetKeyindex() {
    this._keyindex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyindexInput() {
    return this._keyindex;
  }

  // l3_roaming - computed: true, optional: true, required: false
  private _l3Roaming?: string; 
  public get l3Roaming() {
    return this.getStringAttribute('l3_roaming');
  }
  public set l3Roaming(value: string) {
    this._l3Roaming = value;
  }
  public resetL3Roaming() {
    this._l3Roaming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3RoamingInput() {
    return this._l3Roaming;
  }

  // l3_roaming_mode - computed: true, optional: true, required: false
  private _l3RoamingMode?: string; 
  public get l3RoamingMode() {
    return this.getStringAttribute('l3_roaming_mode');
  }
  public set l3RoamingMode(value: string) {
    this._l3RoamingMode = value;
  }
  public resetL3RoamingMode() {
    this._l3RoamingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3RoamingModeInput() {
    return this._l3RoamingMode;
  }

  // ldpc - computed: true, optional: true, required: false
  private _ldpc?: string; 
  public get ldpc() {
    return this.getStringAttribute('ldpc');
  }
  public set ldpc(value: string) {
    this._ldpc = value;
  }
  public resetLdpc() {
    this._ldpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldpcInput() {
    return this._ldpc;
  }

  // local_authentication - computed: false, optional: true, required: false
  private _localAuthentication?: string; 
  public get localAuthentication() {
    return this.getStringAttribute('local_authentication');
  }
  public set localAuthentication(value: string) {
    this._localAuthentication = value;
  }
  public resetLocalAuthentication() {
    this._localAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAuthenticationInput() {
    return this._localAuthentication;
  }

  // local_bridging - computed: true, optional: true, required: false
  private _localBridging?: string; 
  public get localBridging() {
    return this.getStringAttribute('local_bridging');
  }
  public set localBridging(value: string) {
    this._localBridging = value;
  }
  public resetLocalBridging() {
    this._localBridging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localBridgingInput() {
    return this._localBridging;
  }

  // local_lan - computed: true, optional: true, required: false
  private _localLan?: string; 
  public get localLan() {
    return this.getStringAttribute('local_lan');
  }
  public set localLan(value: string) {
    this._localLan = value;
  }
  public resetLocalLan() {
    this._localLan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localLanInput() {
    return this._localLan;
  }

  // local_standalone - computed: true, optional: true, required: false
  private _localStandalone?: string; 
  public get localStandalone() {
    return this.getStringAttribute('local_standalone');
  }
  public set localStandalone(value: string) {
    this._localStandalone = value;
  }
  public resetLocalStandalone() {
    this._localStandalone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localStandaloneInput() {
    return this._localStandalone;
  }

  // local_standalone_dns - computed: true, optional: true, required: false
  private _localStandaloneDns?: string; 
  public get localStandaloneDns() {
    return this.getStringAttribute('local_standalone_dns');
  }
  public set localStandaloneDns(value: string) {
    this._localStandaloneDns = value;
  }
  public resetLocalStandaloneDns() {
    this._localStandaloneDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localStandaloneDnsInput() {
    return this._localStandaloneDns;
  }

  // local_standalone_dns_ip - computed: true, optional: true, required: false
  private _localStandaloneDnsIp?: string[]; 
  public get localStandaloneDnsIp() {
    return cdktf.Fn.tolist(this.getListAttribute('local_standalone_dns_ip'));
  }
  public set localStandaloneDnsIp(value: string[]) {
    this._localStandaloneDnsIp = value;
  }
  public resetLocalStandaloneDnsIp() {
    this._localStandaloneDnsIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localStandaloneDnsIpInput() {
    return this._localStandaloneDnsIp;
  }

  // local_standalone_nat - computed: false, optional: true, required: false
  private _localStandaloneNat?: string; 
  public get localStandaloneNat() {
    return this.getStringAttribute('local_standalone_nat');
  }
  public set localStandaloneNat(value: string) {
    this._localStandaloneNat = value;
  }
  public resetLocalStandaloneNat() {
    this._localStandaloneNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localStandaloneNatInput() {
    return this._localStandaloneNat;
  }

  // local_switching - computed: false, optional: true, required: false
  private _localSwitching?: string; 
  public get localSwitching() {
    return this.getStringAttribute('local_switching');
  }
  public set localSwitching(value: string) {
    this._localSwitching = value;
  }
  public resetLocalSwitching() {
    this._localSwitching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSwitchingInput() {
    return this._localSwitching;
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

  // mac_filter - computed: true, optional: true, required: false
  private _macFilter?: string; 
  public get macFilter() {
    return this.getStringAttribute('mac_filter');
  }
  public set macFilter(value: string) {
    this._macFilter = value;
  }
  public resetMacFilter() {
    this._macFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macFilterInput() {
    return this._macFilter;
  }

  // mac_filter_policy_other - computed: true, optional: true, required: false
  private _macFilterPolicyOther?: string; 
  public get macFilterPolicyOther() {
    return this.getStringAttribute('mac_filter_policy_other');
  }
  public set macFilterPolicyOther(value: string) {
    this._macFilterPolicyOther = value;
  }
  public resetMacFilterPolicyOther() {
    this._macFilterPolicyOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macFilterPolicyOtherInput() {
    return this._macFilterPolicyOther;
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

  // max_clients - computed: false, optional: true, required: false
  private _maxClients?: number; 
  public get maxClients() {
    return this.getNumberAttribute('max_clients');
  }
  public set maxClients(value: number) {
    this._maxClients = value;
  }
  public resetMaxClients() {
    this._maxClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxClientsInput() {
    return this._maxClients;
  }

  // max_clients_ap - computed: false, optional: true, required: false
  private _maxClientsAp?: number; 
  public get maxClientsAp() {
    return this.getNumberAttribute('max_clients_ap');
  }
  public set maxClientsAp(value: number) {
    this._maxClientsAp = value;
  }
  public resetMaxClientsAp() {
    this._maxClientsAp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxClientsApInput() {
    return this._maxClientsAp;
  }

  // mbo - computed: true, optional: true, required: false
  private _mbo?: string; 
  public get mbo() {
    return this.getStringAttribute('mbo');
  }
  public set mbo(value: string) {
    this._mbo = value;
  }
  public resetMbo() {
    this._mbo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mboInput() {
    return this._mbo;
  }

  // mbo_cell_data_conn_pref - computed: true, optional: true, required: false
  private _mboCellDataConnPref?: string; 
  public get mboCellDataConnPref() {
    return this.getStringAttribute('mbo_cell_data_conn_pref');
  }
  public set mboCellDataConnPref(value: string) {
    this._mboCellDataConnPref = value;
  }
  public resetMboCellDataConnPref() {
    this._mboCellDataConnPref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mboCellDataConnPrefInput() {
    return this._mboCellDataConnPref;
  }

  // me_disable_thresh - computed: true, optional: true, required: false
  private _meDisableThresh?: number; 
  public get meDisableThresh() {
    return this.getNumberAttribute('me_disable_thresh');
  }
  public set meDisableThresh(value: number) {
    this._meDisableThresh = value;
  }
  public resetMeDisableThresh() {
    this._meDisableThresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meDisableThreshInput() {
    return this._meDisableThresh;
  }

  // mesh_backhaul - computed: true, optional: true, required: false
  private _meshBackhaul?: string; 
  public get meshBackhaul() {
    return this.getStringAttribute('mesh_backhaul');
  }
  public set meshBackhaul(value: string) {
    this._meshBackhaul = value;
  }
  public resetMeshBackhaul() {
    this._meshBackhaul = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshBackhaulInput() {
    return this._meshBackhaul;
  }

  // mpsk - computed: false, optional: true, required: false
  private _mpsk?: string; 
  public get mpsk() {
    return this.getStringAttribute('mpsk');
  }
  public set mpsk(value: string) {
    this._mpsk = value;
  }
  public resetMpsk() {
    this._mpsk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mpskInput() {
    return this._mpsk;
  }

  // mpsk_concurrent_clients - computed: false, optional: true, required: false
  private _mpskConcurrentClients?: number; 
  public get mpskConcurrentClients() {
    return this.getNumberAttribute('mpsk_concurrent_clients');
  }
  public set mpskConcurrentClients(value: number) {
    this._mpskConcurrentClients = value;
  }
  public resetMpskConcurrentClients() {
    this._mpskConcurrentClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mpskConcurrentClientsInput() {
    return this._mpskConcurrentClients;
  }

  // mpsk_profile - computed: false, optional: true, required: false
  private _mpskProfile?: string; 
  public get mpskProfile() {
    return this.getStringAttribute('mpsk_profile');
  }
  public set mpskProfile(value: string) {
    this._mpskProfile = value;
  }
  public resetMpskProfile() {
    this._mpskProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mpskProfileInput() {
    return this._mpskProfile;
  }

  // mu_mimo - computed: true, optional: true, required: false
  private _muMimo?: string; 
  public get muMimo() {
    return this.getStringAttribute('mu_mimo');
  }
  public set muMimo(value: string) {
    this._muMimo = value;
  }
  public resetMuMimo() {
    this._muMimo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get muMimoInput() {
    return this._muMimo;
  }

  // multicast_enhance - computed: true, optional: true, required: false
  private _multicastEnhance?: string; 
  public get multicastEnhance() {
    return this.getStringAttribute('multicast_enhance');
  }
  public set multicastEnhance(value: string) {
    this._multicastEnhance = value;
  }
  public resetMulticastEnhance() {
    this._multicastEnhance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastEnhanceInput() {
    return this._multicastEnhance;
  }

  // multicast_rate - computed: true, optional: true, required: false
  private _multicastRate?: string; 
  public get multicastRate() {
    return this.getStringAttribute('multicast_rate');
  }
  public set multicastRate(value: string) {
    this._multicastRate = value;
  }
  public resetMulticastRate() {
    this._multicastRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastRateInput() {
    return this._multicastRate;
  }

  // n80211k - computed: true, optional: true, required: false
  private _n80211K?: string; 
  public get n80211K() {
    return this.getStringAttribute('n80211k');
  }
  public set n80211K(value: string) {
    this._n80211K = value;
  }
  public resetN80211K() {
    this._n80211K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get n80211KInput() {
    return this._n80211K;
  }

  // n80211v - computed: true, optional: true, required: false
  private _n80211V?: string; 
  public get n80211V() {
    return this.getStringAttribute('n80211v');
  }
  public set n80211V(value: string) {
    this._n80211V = value;
  }
  public resetN80211V() {
    this._n80211V = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get n80211VInput() {
    return this._n80211V;
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

  // nac_profile - computed: false, optional: true, required: false
  private _nacProfile?: string; 
  public get nacProfile() {
    return this.getStringAttribute('nac_profile');
  }
  public set nacProfile(value: string) {
    this._nacProfile = value;
  }
  public resetNacProfile() {
    this._nacProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nacProfileInput() {
    return this._nacProfile;
  }

  // neighbor_report_dual_band - computed: true, optional: true, required: false
  private _neighborReportDualBand?: string; 
  public get neighborReportDualBand() {
    return this.getStringAttribute('neighbor_report_dual_band');
  }
  public set neighborReportDualBand(value: string) {
    this._neighborReportDualBand = value;
  }
  public resetNeighborReportDualBand() {
    this._neighborReportDualBand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborReportDualBandInput() {
    return this._neighborReportDualBand;
  }

  // okc - computed: true, optional: true, required: false
  private _okc?: string; 
  public get okc() {
    return this.getStringAttribute('okc');
  }
  public set okc(value: string) {
    this._okc = value;
  }
  public resetOkc() {
    this._okc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get okcInput() {
    return this._okc;
  }

  // osen - computed: true, optional: true, required: false
  private _osen?: string; 
  public get osen() {
    return this.getStringAttribute('osen');
  }
  public set osen(value: string) {
    this._osen = value;
  }
  public resetOsen() {
    this._osen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osenInput() {
    return this._osen;
  }

  // owe_groups - computed: true, optional: true, required: false
  private _oweGroups?: string[]; 
  public get oweGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('owe_groups'));
  }
  public set oweGroups(value: string[]) {
    this._oweGroups = value;
  }
  public resetOweGroups() {
    this._oweGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oweGroupsInput() {
    return this._oweGroups;
  }

  // owe_transition - computed: true, optional: true, required: false
  private _oweTransition?: string; 
  public get oweTransition() {
    return this.getStringAttribute('owe_transition');
  }
  public set oweTransition(value: string) {
    this._oweTransition = value;
  }
  public resetOweTransition() {
    this._oweTransition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oweTransitionInput() {
    return this._oweTransition;
  }

  // owe_transition_ssid - computed: false, optional: true, required: false
  private _oweTransitionSsid?: string; 
  public get oweTransitionSsid() {
    return this.getStringAttribute('owe_transition_ssid');
  }
  public set oweTransitionSsid(value: string) {
    this._oweTransitionSsid = value;
  }
  public resetOweTransitionSsid() {
    this._oweTransitionSsid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oweTransitionSsidInput() {
    return this._oweTransitionSsid;
  }

  // passphrase - computed: true, optional: true, required: false
  private _passphrase?: string[]; 
  public get passphrase() {
    return cdktf.Fn.tolist(this.getListAttribute('passphrase'));
  }
  public set passphrase(value: string[]) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }

  // pmf - computed: true, optional: true, required: false
  private _pmf?: string; 
  public get pmf() {
    return this.getStringAttribute('pmf');
  }
  public set pmf(value: string) {
    this._pmf = value;
  }
  public resetPmf() {
    this._pmf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmfInput() {
    return this._pmf;
  }

  // pmf_assoc_comeback_timeout - computed: true, optional: true, required: false
  private _pmfAssocComebackTimeout?: number; 
  public get pmfAssocComebackTimeout() {
    return this.getNumberAttribute('pmf_assoc_comeback_timeout');
  }
  public set pmfAssocComebackTimeout(value: number) {
    this._pmfAssocComebackTimeout = value;
  }
  public resetPmfAssocComebackTimeout() {
    this._pmfAssocComebackTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmfAssocComebackTimeoutInput() {
    return this._pmfAssocComebackTimeout;
  }

  // pmf_sa_query_retry_timeout - computed: true, optional: true, required: false
  private _pmfSaQueryRetryTimeout?: number; 
  public get pmfSaQueryRetryTimeout() {
    return this.getNumberAttribute('pmf_sa_query_retry_timeout');
  }
  public set pmfSaQueryRetryTimeout(value: number) {
    this._pmfSaQueryRetryTimeout = value;
  }
  public resetPmfSaQueryRetryTimeout() {
    this._pmfSaQueryRetryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmfSaQueryRetryTimeoutInput() {
    return this._pmfSaQueryRetryTimeout;
  }

  // port_macauth - computed: true, optional: true, required: false
  private _portMacauth?: string; 
  public get portMacauth() {
    return this.getStringAttribute('port_macauth');
  }
  public set portMacauth(value: string) {
    this._portMacauth = value;
  }
  public resetPortMacauth() {
    this._portMacauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portMacauthInput() {
    return this._portMacauth;
  }

  // port_macauth_reauth_timeout - computed: true, optional: true, required: false
  private _portMacauthReauthTimeout?: number; 
  public get portMacauthReauthTimeout() {
    return this.getNumberAttribute('port_macauth_reauth_timeout');
  }
  public set portMacauthReauthTimeout(value: number) {
    this._portMacauthReauthTimeout = value;
  }
  public resetPortMacauthReauthTimeout() {
    this._portMacauthReauthTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portMacauthReauthTimeoutInput() {
    return this._portMacauthReauthTimeout;
  }

  // port_macauth_timeout - computed: true, optional: true, required: false
  private _portMacauthTimeout?: number; 
  public get portMacauthTimeout() {
    return this.getNumberAttribute('port_macauth_timeout');
  }
  public set portMacauthTimeout(value: number) {
    this._portMacauthTimeout = value;
  }
  public resetPortMacauthTimeout() {
    this._portMacauthTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portMacauthTimeoutInput() {
    return this._portMacauthTimeout;
  }

  // portal_message_override_group - computed: false, optional: true, required: false
  private _portalMessageOverrideGroup?: string; 
  public get portalMessageOverrideGroup() {
    return this.getStringAttribute('portal_message_override_group');
  }
  public set portalMessageOverrideGroup(value: string) {
    this._portalMessageOverrideGroup = value;
  }
  public resetPortalMessageOverrideGroup() {
    this._portalMessageOverrideGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalMessageOverrideGroupInput() {
    return this._portalMessageOverrideGroup;
  }

  // portal_type - computed: false, optional: true, required: false
  private _portalType?: string; 
  public get portalType() {
    return this.getStringAttribute('portal_type');
  }
  public set portalType(value: string) {
    this._portalType = value;
  }
  public resetPortalType() {
    this._portalType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalTypeInput() {
    return this._portalType;
  }

  // primary_wag_profile - computed: false, optional: true, required: false
  private _primaryWagProfile?: string; 
  public get primaryWagProfile() {
    return this.getStringAttribute('primary_wag_profile');
  }
  public set primaryWagProfile(value: string) {
    this._primaryWagProfile = value;
  }
  public resetPrimaryWagProfile() {
    this._primaryWagProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryWagProfileInput() {
    return this._primaryWagProfile;
  }

  // probe_resp_suppression - computed: true, optional: true, required: false
  private _probeRespSuppression?: string; 
  public get probeRespSuppression() {
    return this.getStringAttribute('probe_resp_suppression');
  }
  public set probeRespSuppression(value: string) {
    this._probeRespSuppression = value;
  }
  public resetProbeRespSuppression() {
    this._probeRespSuppression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeRespSuppressionInput() {
    return this._probeRespSuppression;
  }

  // probe_resp_threshold - computed: true, optional: true, required: false
  private _probeRespThreshold?: string; 
  public get probeRespThreshold() {
    return this.getStringAttribute('probe_resp_threshold');
  }
  public set probeRespThreshold(value: string) {
    this._probeRespThreshold = value;
  }
  public resetProbeRespThreshold() {
    this._probeRespThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeRespThresholdInput() {
    return this._probeRespThreshold;
  }

  // ptk_rekey - computed: true, optional: true, required: false
  private _ptkRekey?: string; 
  public get ptkRekey() {
    return this.getStringAttribute('ptk_rekey');
  }
  public set ptkRekey(value: string) {
    this._ptkRekey = value;
  }
  public resetPtkRekey() {
    this._ptkRekey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ptkRekeyInput() {
    return this._ptkRekey;
  }

  // ptk_rekey_intv - computed: true, optional: true, required: false
  private _ptkRekeyIntv?: number; 
  public get ptkRekeyIntv() {
    return this.getNumberAttribute('ptk_rekey_intv');
  }
  public set ptkRekeyIntv(value: number) {
    this._ptkRekeyIntv = value;
  }
  public resetPtkRekeyIntv() {
    this._ptkRekeyIntv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ptkRekeyIntvInput() {
    return this._ptkRekeyIntv;
  }

  // qos_profile - computed: false, optional: true, required: false
  private _qosProfile?: string; 
  public get qosProfile() {
    return this.getStringAttribute('qos_profile');
  }
  public set qosProfile(value: string) {
    this._qosProfile = value;
  }
  public resetQosProfile() {
    this._qosProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosProfileInput() {
    return this._qosProfile;
  }

  // quarantine - computed: true, optional: true, required: false
  private _quarantine?: string; 
  public get quarantine() {
    return this.getStringAttribute('quarantine');
  }
  public set quarantine(value: string) {
    this._quarantine = value;
  }
  public resetQuarantine() {
    this._quarantine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineInput() {
    return this._quarantine;
  }

  // radio_2g_threshold - computed: true, optional: true, required: false
  private _radio2GThreshold?: string; 
  public get radio2GThreshold() {
    return this.getStringAttribute('radio_2g_threshold');
  }
  public set radio2GThreshold(value: string) {
    this._radio2GThreshold = value;
  }
  public resetRadio2GThreshold() {
    this._radio2GThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radio2GThresholdInput() {
    return this._radio2GThreshold;
  }

  // radio_5g_threshold - computed: true, optional: true, required: false
  private _radio5GThreshold?: string; 
  public get radio5GThreshold() {
    return this.getStringAttribute('radio_5g_threshold');
  }
  public set radio5GThreshold(value: string) {
    this._radio5GThreshold = value;
  }
  public resetRadio5GThreshold() {
    this._radio5GThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radio5GThresholdInput() {
    return this._radio5GThreshold;
  }

  // radio_sensitivity - computed: true, optional: true, required: false
  private _radioSensitivity?: string; 
  public get radioSensitivity() {
    return this.getStringAttribute('radio_sensitivity');
  }
  public set radioSensitivity(value: string) {
    this._radioSensitivity = value;
  }
  public resetRadioSensitivity() {
    this._radioSensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioSensitivityInput() {
    return this._radioSensitivity;
  }

  // radius_mac_auth - computed: true, optional: true, required: false
  private _radiusMacAuth?: string; 
  public get radiusMacAuth() {
    return this.getStringAttribute('radius_mac_auth');
  }
  public set radiusMacAuth(value: string) {
    this._radiusMacAuth = value;
  }
  public resetRadiusMacAuth() {
    this._radiusMacAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusMacAuthInput() {
    return this._radiusMacAuth;
  }

  // radius_mac_auth_block_interval - computed: false, optional: true, required: false
  private _radiusMacAuthBlockInterval?: number; 
  public get radiusMacAuthBlockInterval() {
    return this.getNumberAttribute('radius_mac_auth_block_interval');
  }
  public set radiusMacAuthBlockInterval(value: number) {
    this._radiusMacAuthBlockInterval = value;
  }
  public resetRadiusMacAuthBlockInterval() {
    this._radiusMacAuthBlockInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusMacAuthBlockIntervalInput() {
    return this._radiusMacAuthBlockInterval;
  }

  // radius_mac_auth_server - computed: false, optional: true, required: false
  private _radiusMacAuthServer?: string; 
  public get radiusMacAuthServer() {
    return this.getStringAttribute('radius_mac_auth_server');
  }
  public set radiusMacAuthServer(value: string) {
    this._radiusMacAuthServer = value;
  }
  public resetRadiusMacAuthServer() {
    this._radiusMacAuthServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusMacAuthServerInput() {
    return this._radiusMacAuthServer;
  }

  // radius_mac_auth_usergroups - computed: true, optional: true, required: false
  private _radiusMacAuthUsergroups?: string[]; 
  public get radiusMacAuthUsergroups() {
    return cdktf.Fn.tolist(this.getListAttribute('radius_mac_auth_usergroups'));
  }
  public set radiusMacAuthUsergroups(value: string[]) {
    this._radiusMacAuthUsergroups = value;
  }
  public resetRadiusMacAuthUsergroups() {
    this._radiusMacAuthUsergroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusMacAuthUsergroupsInput() {
    return this._radiusMacAuthUsergroups;
  }

  // radius_mac_mpsk_auth - computed: true, optional: true, required: false
  private _radiusMacMpskAuth?: string; 
  public get radiusMacMpskAuth() {
    return this.getStringAttribute('radius_mac_mpsk_auth');
  }
  public set radiusMacMpskAuth(value: string) {
    this._radiusMacMpskAuth = value;
  }
  public resetRadiusMacMpskAuth() {
    this._radiusMacMpskAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusMacMpskAuthInput() {
    return this._radiusMacMpskAuth;
  }

  // radius_mac_mpsk_timeout - computed: true, optional: true, required: false
  private _radiusMacMpskTimeout?: number; 
  public get radiusMacMpskTimeout() {
    return this.getNumberAttribute('radius_mac_mpsk_timeout');
  }
  public set radiusMacMpskTimeout(value: number) {
    this._radiusMacMpskTimeout = value;
  }
  public resetRadiusMacMpskTimeout() {
    this._radiusMacMpskTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusMacMpskTimeoutInput() {
    return this._radiusMacMpskTimeout;
  }

  // radius_server - computed: false, optional: true, required: false
  private _radiusServer?: string; 
  public get radiusServer() {
    return this.getStringAttribute('radius_server');
  }
  public set radiusServer(value: string) {
    this._radiusServer = value;
  }
  public resetRadiusServer() {
    this._radiusServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusServerInput() {
    return this._radiusServer;
  }

  // rates_11a - computed: true, optional: true, required: false
  private _rates11A?: string[]; 
  public get rates11A() {
    return cdktf.Fn.tolist(this.getListAttribute('rates_11a'));
  }
  public set rates11A(value: string[]) {
    this._rates11A = value;
  }
  public resetRates11A() {
    this._rates11A = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rates11AInput() {
    return this._rates11A;
  }

  // rates_11ac_mcs_map - computed: false, optional: true, required: false
  private _rates11AcMcsMap?: string; 
  public get rates11AcMcsMap() {
    return this.getStringAttribute('rates_11ac_mcs_map');
  }
  public set rates11AcMcsMap(value: string) {
    this._rates11AcMcsMap = value;
  }
  public resetRates11AcMcsMap() {
    this._rates11AcMcsMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rates11AcMcsMapInput() {
    return this._rates11AcMcsMap;
  }

  // rates_11ac_ss12 - computed: true, optional: true, required: false
  private _rates11AcSs12?: string[]; 
  public get rates11AcSs12() {
    return cdktf.Fn.tolist(this.getListAttribute('rates_11ac_ss12'));
  }
  public set rates11AcSs12(value: string[]) {
    this._rates11AcSs12 = value;
  }
  public resetRates11AcSs12() {
    this._rates11AcSs12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rates11AcSs12Input() {
    return this._rates11AcSs12;
  }

  // rates_11ac_ss34 - computed: true, optional: true, required: false
  private _rates11AcSs34?: string[]; 
  public get rates11AcSs34() {
    return cdktf.Fn.tolist(this.getListAttribute('rates_11ac_ss34'));
  }
  public set rates11AcSs34(value: string[]) {
    this._rates11AcSs34 = value;
  }
  public resetRates11AcSs34() {
    this._rates11AcSs34 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rates11AcSs34Input() {
    return this._rates11AcSs34;
  }

  // rates_11ax_mcs_map - computed: false, optional: true, required: false
  private _rates11AxMcsMap?: string; 
  public get rates11AxMcsMap() {
    return this.getStringAttribute('rates_11ax_mcs_map');
  }
  public set rates11AxMcsMap(value: string) {
    this._rates11AxMcsMap = value;
  }
  public resetRates11AxMcsMap() {
    this._rates11AxMcsMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rates11AxMcsMapInput() {
    return this._rates11AxMcsMap;
  }

  // rates_11ax_ss12 - computed: true, optional: true, required: false
  private _rates11AxSs12?: string[]; 
  public get rates11AxSs12() {
    return cdktf.Fn.tolist(this.getListAttribute('rates_11ax_ss12'));
  }
  public set rates11AxSs12(value: string[]) {
    this._rates11AxSs12 = value;
  }
  public resetRates11AxSs12() {
    this._rates11AxSs12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rates11AxSs12Input() {
    return this._rates11AxSs12;
  }

  // rates_11ax_ss34 - computed: true, optional: true, required: false
  private _rates11AxSs34?: string[]; 
  public get rates11AxSs34() {
    return cdktf.Fn.tolist(this.getListAttribute('rates_11ax_ss34'));
  }
  public set rates11AxSs34(value: string[]) {
    this._rates11AxSs34 = value;
  }
  public resetRates11AxSs34() {
    this._rates11AxSs34 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rates11AxSs34Input() {
    return this._rates11AxSs34;
  }

  // rates_11bg - computed: true, optional: true, required: false
  private _rates11Bg?: string[]; 
  public get rates11Bg() {
    return cdktf.Fn.tolist(this.getListAttribute('rates_11bg'));
  }
  public set rates11Bg(value: string[]) {
    this._rates11Bg = value;
  }
  public resetRates11Bg() {
    this._rates11Bg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rates11BgInput() {
    return this._rates11Bg;
  }

  // rates_11n_ss12 - computed: true, optional: true, required: false
  private _rates11NSs12?: string[]; 
  public get rates11NSs12() {
    return cdktf.Fn.tolist(this.getListAttribute('rates_11n_ss12'));
  }
  public set rates11NSs12(value: string[]) {
    this._rates11NSs12 = value;
  }
  public resetRates11NSs12() {
    this._rates11NSs12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rates11NSs12Input() {
    return this._rates11NSs12;
  }

  // rates_11n_ss34 - computed: true, optional: true, required: false
  private _rates11NSs34?: string[]; 
  public get rates11NSs34() {
    return cdktf.Fn.tolist(this.getListAttribute('rates_11n_ss34'));
  }
  public set rates11NSs34(value: string[]) {
    this._rates11NSs34 = value;
  }
  public resetRates11NSs34() {
    this._rates11NSs34 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rates11NSs34Input() {
    return this._rates11NSs34;
  }

  // roaming_acct_interim_update - computed: false, optional: true, required: false
  private _roamingAcctInterimUpdate?: string; 
  public get roamingAcctInterimUpdate() {
    return this.getStringAttribute('roaming_acct_interim_update');
  }
  public set roamingAcctInterimUpdate(value: string) {
    this._roamingAcctInterimUpdate = value;
  }
  public resetRoamingAcctInterimUpdate() {
    this._roamingAcctInterimUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roamingAcctInterimUpdateInput() {
    return this._roamingAcctInterimUpdate;
  }

  // sae_groups - computed: true, optional: true, required: false
  private _saeGroups?: string[]; 
  public get saeGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('sae_groups'));
  }
  public set saeGroups(value: string[]) {
    this._saeGroups = value;
  }
  public resetSaeGroups() {
    this._saeGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saeGroupsInput() {
    return this._saeGroups;
  }

  // sae_h2e_only - computed: true, optional: true, required: false
  private _saeH2EOnly?: string; 
  public get saeH2EOnly() {
    return this.getStringAttribute('sae_h2e_only');
  }
  public set saeH2EOnly(value: string) {
    this._saeH2EOnly = value;
  }
  public resetSaeH2EOnly() {
    this._saeH2EOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saeH2EOnlyInput() {
    return this._saeH2EOnly;
  }

  // sae_hnp_only - computed: false, optional: true, required: false
  private _saeHnpOnly?: string; 
  public get saeHnpOnly() {
    return this.getStringAttribute('sae_hnp_only');
  }
  public set saeHnpOnly(value: string) {
    this._saeHnpOnly = value;
  }
  public resetSaeHnpOnly() {
    this._saeHnpOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saeHnpOnlyInput() {
    return this._saeHnpOnly;
  }

  // sae_password - computed: true, optional: true, required: false
  private _saePassword?: string[]; 
  public get saePassword() {
    return cdktf.Fn.tolist(this.getListAttribute('sae_password'));
  }
  public set saePassword(value: string[]) {
    this._saePassword = value;
  }
  public resetSaePassword() {
    this._saePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saePasswordInput() {
    return this._saePassword;
  }

  // sae_pk - computed: true, optional: true, required: false
  private _saePk?: string; 
  public get saePk() {
    return this.getStringAttribute('sae_pk');
  }
  public set saePk(value: string) {
    this._saePk = value;
  }
  public resetSaePk() {
    this._saePk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saePkInput() {
    return this._saePk;
  }

  // sae_private_key - computed: false, optional: true, required: false
  private _saePrivateKey?: string; 
  public get saePrivateKey() {
    return this.getStringAttribute('sae_private_key');
  }
  public set saePrivateKey(value: string) {
    this._saePrivateKey = value;
  }
  public resetSaePrivateKey() {
    this._saePrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saePrivateKeyInput() {
    return this._saePrivateKey;
  }

  // scan_botnet_connections - computed: true, optional: true, required: false
  private _scanBotnetConnections?: string; 
  public get scanBotnetConnections() {
    return this.getStringAttribute('scan_botnet_connections');
  }
  public set scanBotnetConnections(value: string) {
    this._scanBotnetConnections = value;
  }
  public resetScanBotnetConnections() {
    this._scanBotnetConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanBotnetConnectionsInput() {
    return this._scanBotnetConnections;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
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

  // secondary_wag_profile - computed: false, optional: true, required: false
  private _secondaryWagProfile?: string; 
  public get secondaryWagProfile() {
    return this.getStringAttribute('secondary_wag_profile');
  }
  public set secondaryWagProfile(value: string) {
    this._secondaryWagProfile = value;
  }
  public resetSecondaryWagProfile() {
    this._secondaryWagProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryWagProfileInput() {
    return this._secondaryWagProfile;
  }

  // security - computed: true, optional: true, required: false
  private _security?: string; 
  public get security() {
    return this.getStringAttribute('security');
  }
  public set security(value: string) {
    this._security = value;
  }
  public resetSecurity() {
    this._security = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security;
  }

  // security_exempt_list - computed: false, optional: true, required: false
  private _securityExemptList?: string; 
  public get securityExemptList() {
    return this.getStringAttribute('security_exempt_list');
  }
  public set securityExemptList(value: string) {
    this._securityExemptList = value;
  }
  public resetSecurityExemptList() {
    this._securityExemptList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityExemptListInput() {
    return this._securityExemptList;
  }

  // security_obsolete_option - computed: true, optional: true, required: false
  private _securityObsoleteOption?: string; 
  public get securityObsoleteOption() {
    return this.getStringAttribute('security_obsolete_option');
  }
  public set securityObsoleteOption(value: string) {
    this._securityObsoleteOption = value;
  }
  public resetSecurityObsoleteOption() {
    this._securityObsoleteOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityObsoleteOptionInput() {
    return this._securityObsoleteOption;
  }

  // security_redirect_url - computed: false, optional: true, required: false
  private _securityRedirectUrl?: string; 
  public get securityRedirectUrl() {
    return this.getStringAttribute('security_redirect_url');
  }
  public set securityRedirectUrl(value: string) {
    this._securityRedirectUrl = value;
  }
  public resetSecurityRedirectUrl() {
    this._securityRedirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityRedirectUrlInput() {
    return this._securityRedirectUrl;
  }

  // selected_usergroups - computed: false, optional: true, required: false
  private _selectedUsergroups?: string; 
  public get selectedUsergroups() {
    return this.getStringAttribute('selected_usergroups');
  }
  public set selectedUsergroups(value: string) {
    this._selectedUsergroups = value;
  }
  public resetSelectedUsergroups() {
    this._selectedUsergroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedUsergroupsInput() {
    return this._selectedUsergroups;
  }

  // split_tunneling - computed: true, optional: true, required: false
  private _splitTunneling?: string; 
  public get splitTunneling() {
    return this.getStringAttribute('split_tunneling');
  }
  public set splitTunneling(value: string) {
    this._splitTunneling = value;
  }
  public resetSplitTunneling() {
    this._splitTunneling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitTunnelingInput() {
    return this._splitTunneling;
  }

  // ssid - computed: true, optional: true, required: false
  private _ssid?: string; 
  public get ssid() {
    return this.getStringAttribute('ssid');
  }
  public set ssid(value: string) {
    this._ssid = value;
  }
  public resetSsid() {
    this._ssid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssidInput() {
    return this._ssid;
  }

  // sticky_client_remove - computed: true, optional: true, required: false
  private _stickyClientRemove?: string; 
  public get stickyClientRemove() {
    return this.getStringAttribute('sticky_client_remove');
  }
  public set stickyClientRemove(value: string) {
    this._stickyClientRemove = value;
  }
  public resetStickyClientRemove() {
    this._stickyClientRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickyClientRemoveInput() {
    return this._stickyClientRemove;
  }

  // sticky_client_threshold_2g - computed: true, optional: true, required: false
  private _stickyClientThreshold2G?: string; 
  public get stickyClientThreshold2G() {
    return this.getStringAttribute('sticky_client_threshold_2g');
  }
  public set stickyClientThreshold2G(value: string) {
    this._stickyClientThreshold2G = value;
  }
  public resetStickyClientThreshold2G() {
    this._stickyClientThreshold2G = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickyClientThreshold2GInput() {
    return this._stickyClientThreshold2G;
  }

  // sticky_client_threshold_5g - computed: true, optional: true, required: false
  private _stickyClientThreshold5G?: string; 
  public get stickyClientThreshold5G() {
    return this.getStringAttribute('sticky_client_threshold_5g');
  }
  public set stickyClientThreshold5G(value: string) {
    this._stickyClientThreshold5G = value;
  }
  public resetStickyClientThreshold5G() {
    this._stickyClientThreshold5G = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickyClientThreshold5GInput() {
    return this._stickyClientThreshold5G;
  }

  // sticky_client_threshold_6g - computed: true, optional: true, required: false
  private _stickyClientThreshold6G?: string; 
  public get stickyClientThreshold6G() {
    return this.getStringAttribute('sticky_client_threshold_6g');
  }
  public set stickyClientThreshold6G(value: string) {
    this._stickyClientThreshold6G = value;
  }
  public resetStickyClientThreshold6G() {
    this._stickyClientThreshold6G = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickyClientThreshold6GInput() {
    return this._stickyClientThreshold6G;
  }

  // target_wake_time - computed: true, optional: true, required: false
  private _targetWakeTime?: string; 
  public get targetWakeTime() {
    return this.getStringAttribute('target_wake_time');
  }
  public set targetWakeTime(value: string) {
    this._targetWakeTime = value;
  }
  public resetTargetWakeTime() {
    this._targetWakeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetWakeTimeInput() {
    return this._targetWakeTime;
  }

  // tkip_counter_measure - computed: true, optional: true, required: false
  private _tkipCounterMeasure?: string; 
  public get tkipCounterMeasure() {
    return this.getStringAttribute('tkip_counter_measure');
  }
  public set tkipCounterMeasure(value: string) {
    this._tkipCounterMeasure = value;
  }
  public resetTkipCounterMeasure() {
    this._tkipCounterMeasure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tkipCounterMeasureInput() {
    return this._tkipCounterMeasure;
  }

  // tunnel_echo_interval - computed: false, optional: true, required: false
  private _tunnelEchoInterval?: number; 
  public get tunnelEchoInterval() {
    return this.getNumberAttribute('tunnel_echo_interval');
  }
  public set tunnelEchoInterval(value: number) {
    this._tunnelEchoInterval = value;
  }
  public resetTunnelEchoInterval() {
    this._tunnelEchoInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelEchoIntervalInput() {
    return this._tunnelEchoInterval;
  }

  // tunnel_fallback_interval - computed: false, optional: true, required: false
  private _tunnelFallbackInterval?: number; 
  public get tunnelFallbackInterval() {
    return this.getNumberAttribute('tunnel_fallback_interval');
  }
  public set tunnelFallbackInterval(value: number) {
    this._tunnelFallbackInterval = value;
  }
  public resetTunnelFallbackInterval() {
    this._tunnelFallbackInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelFallbackIntervalInput() {
    return this._tunnelFallbackInterval;
  }

  // usergroup - computed: false, optional: true, required: false
  private _usergroup?: string; 
  public get usergroup() {
    return this.getStringAttribute('usergroup');
  }
  public set usergroup(value: string) {
    this._usergroup = value;
  }
  public resetUsergroup() {
    this._usergroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usergroupInput() {
    return this._usergroup;
  }

  // utm_log - computed: true, optional: true, required: false
  private _utmLog?: string; 
  public get utmLog() {
    return this.getStringAttribute('utm_log');
  }
  public set utmLog(value: string) {
    this._utmLog = value;
  }
  public resetUtmLog() {
    this._utmLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utmLogInput() {
    return this._utmLog;
  }

  // utm_profile - computed: false, optional: true, required: false
  private _utmProfile?: string; 
  public get utmProfile() {
    return this.getStringAttribute('utm_profile');
  }
  public set utmProfile(value: string) {
    this._utmProfile = value;
  }
  public resetUtmProfile() {
    this._utmProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utmProfileInput() {
    return this._utmProfile;
  }

  // utm_status - computed: true, optional: true, required: false
  private _utmStatus?: string; 
  public get utmStatus() {
    return this.getStringAttribute('utm_status');
  }
  public set utmStatus(value: string) {
    this._utmStatus = value;
  }
  public resetUtmStatus() {
    this._utmStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utmStatusInput() {
    return this._utmStatus;
  }

  // vap - computed: false, optional: false, required: true
  private _vap?: string; 
  public get vap() {
    return this.getStringAttribute('vap');
  }
  public set vap(value: string) {
    this._vap = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vapInput() {
    return this._vap;
  }

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // vlan_auto - computed: true, optional: true, required: false
  private _vlanAuto?: string; 
  public get vlanAuto() {
    return this.getStringAttribute('vlan_auto');
  }
  public set vlanAuto(value: string) {
    this._vlanAuto = value;
  }
  public resetVlanAuto() {
    this._vlanAuto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanAutoInput() {
    return this._vlanAuto;
  }

  // vlan_pooling - computed: true, optional: true, required: false
  private _vlanPooling?: string; 
  public get vlanPooling() {
    return this.getStringAttribute('vlan_pooling');
  }
  public set vlanPooling(value: string) {
    this._vlanPooling = value;
  }
  public resetVlanPooling() {
    this._vlanPooling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanPoolingInput() {
    return this._vlanPooling;
  }

  // vlanid - computed: false, optional: true, required: false
  private _vlanid?: number; 
  public get vlanid() {
    return this.getNumberAttribute('vlanid');
  }
  public set vlanid(value: number) {
    this._vlanid = value;
  }
  public resetVlanid() {
    this._vlanid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanidInput() {
    return this._vlanid;
  }

  // voice_enterprise - computed: true, optional: true, required: false
  private _voiceEnterprise?: string; 
  public get voiceEnterprise() {
    return this.getStringAttribute('voice_enterprise');
  }
  public set voiceEnterprise(value: string) {
    this._voiceEnterprise = value;
  }
  public resetVoiceEnterprise() {
    this._voiceEnterprise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceEnterpriseInput() {
    return this._voiceEnterprise;
  }

  // webfilter_profile - computed: false, optional: true, required: false
  private _webfilterProfile?: string; 
  public get webfilterProfile() {
    return this.getStringAttribute('webfilter_profile');
  }
  public set webfilterProfile(value: string) {
    this._webfilterProfile = value;
  }
  public resetWebfilterProfile() {
    this._webfilterProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webfilterProfileInput() {
    return this._webfilterProfile;
  }

  // _scope - computed: false, optional: true, required: false
  private _scope = new ObjectWirelesscontrollerVapDynamicMappingScopeAList(this, "_scope", false);
  public get scope() {
    return this._scope;
  }
  public putScope(value: ObjectWirelesscontrollerVapDynamicMappingScopeA[] | cdktf.IResolvable) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      _centmgmt: cdktf.stringToTerraform(this._centmgmt),
      _dhcp_svr_id: cdktf.stringToTerraform(this._dhcpSvrId),
      _intf_allowaccess: cdktf.listMapper(cdktf.stringToTerraform, false)(this._intfAllowaccess),
      _intf_device_access_list: cdktf.stringToTerraform(this._intfDeviceAccessList),
      _intf_device_identification: cdktf.stringToTerraform(this._intfDeviceIdentification),
      _intf_device_netscan: cdktf.stringToTerraform(this._intfDeviceNetscan),
      _intf_dhcp6_relay_ip: cdktf.stringToTerraform(this._intfDhcp6RelayIp),
      _intf_dhcp6_relay_service: cdktf.stringToTerraform(this._intfDhcp6RelayService),
      _intf_dhcp6_relay_type: cdktf.stringToTerraform(this._intfDhcp6RelayType),
      _intf_dhcp_relay_ip: cdktf.listMapper(cdktf.stringToTerraform, false)(this._intfDhcpRelayIp),
      _intf_dhcp_relay_service: cdktf.stringToTerraform(this._intfDhcpRelayService),
      _intf_dhcp_relay_type: cdktf.stringToTerraform(this._intfDhcpRelayType),
      _intf_ip: cdktf.stringToTerraform(this._intfIp),
      _intf_ip6_address: cdktf.stringToTerraform(this._intfIp6Address),
      _intf_ip6_allowaccess: cdktf.listMapper(cdktf.stringToTerraform, false)(this._intfIp6Allowaccess),
      _intf_listen_forticlient_connection: cdktf.stringToTerraform(this._intfListenForticlientConnection),
      _is_factory_setting: cdktf.stringToTerraform(this._isFactorySetting),
      access_control_list: cdktf.stringToTerraform(this._accessControlList),
      acct_interim_interval: cdktf.numberToTerraform(this._acctInterimInterval),
      additional_akms: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additionalAkms),
      address_group: cdktf.stringToTerraform(this._addressGroup),
      address_group_policy: cdktf.stringToTerraform(this._addressGroupPolicy),
      adom: cdktf.stringToTerraform(this._adom),
      alias: cdktf.stringToTerraform(this._alias),
      antivirus_profile: cdktf.stringToTerraform(this._antivirusProfile),
      application_detection_engine: cdktf.stringToTerraform(this._applicationDetectionEngine),
      application_dscp_marking: cdktf.stringToTerraform(this._applicationDscpMarking),
      application_list: cdktf.stringToTerraform(this._applicationList),
      application_report_intv: cdktf.numberToTerraform(this._applicationReportIntv),
      atf_weight: cdktf.numberToTerraform(this._atfWeight),
      auth: cdktf.stringToTerraform(this._auth),
      auth_cert: cdktf.stringToTerraform(this._authCert),
      auth_portal_addr: cdktf.stringToTerraform(this._authPortalAddr),
      beacon_advertising: cdktf.listMapper(cdktf.stringToTerraform, false)(this._beaconAdvertising),
      broadcast_ssid: cdktf.stringToTerraform(this._broadcastSsid),
      broadcast_suppression: cdktf.listMapper(cdktf.stringToTerraform, false)(this._broadcastSuppression),
      bss_color_partial: cdktf.stringToTerraform(this._bssColorPartial),
      bstm_disassociation_imminent: cdktf.stringToTerraform(this._bstmDisassociationImminent),
      bstm_load_balancing_disassoc_timer: cdktf.numberToTerraform(this._bstmLoadBalancingDisassocTimer),
      bstm_rssi_disassoc_timer: cdktf.numberToTerraform(this._bstmRssiDisassocTimer),
      captive_portal_ac_name: cdktf.stringToTerraform(this._captivePortalAcName),
      captive_portal_auth_timeout: cdktf.numberToTerraform(this._captivePortalAuthTimeout),
      captive_portal_fw_accounting: cdktf.stringToTerraform(this._captivePortalFwAccounting),
      captive_portal_macauth_radius_secret: cdktf.listMapper(cdktf.stringToTerraform, false)(this._captivePortalMacauthRadiusSecret),
      captive_portal_macauth_radius_server: cdktf.stringToTerraform(this._captivePortalMacauthRadiusServer),
      captive_portal_radius_secret: cdktf.listMapper(cdktf.stringToTerraform, false)(this._captivePortalRadiusSecret),
      captive_portal_radius_server: cdktf.stringToTerraform(this._captivePortalRadiusServer),
      captive_portal_session_timeout_interval: cdktf.numberToTerraform(this._captivePortalSessionTimeoutInterval),
      client_count: cdktf.numberToTerraform(this._clientCount),
      dhcp_address_enforcement: cdktf.stringToTerraform(this._dhcpAddressEnforcement),
      dhcp_lease_time: cdktf.numberToTerraform(this._dhcpLeaseTime),
      dhcp_option43_insertion: cdktf.stringToTerraform(this._dhcpOption43Insertion),
      dhcp_option82_circuit_id_insertion: cdktf.stringToTerraform(this._dhcpOption82CircuitIdInsertion),
      dhcp_option82_insertion: cdktf.stringToTerraform(this._dhcpOption82Insertion),
      dhcp_option82_remote_id_insertion: cdktf.stringToTerraform(this._dhcpOption82RemoteIdInsertion),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      dynamic_vlan: cdktf.stringToTerraform(this._dynamicVlan),
      eap_reauth: cdktf.stringToTerraform(this._eapReauth),
      eap_reauth_intv: cdktf.numberToTerraform(this._eapReauthIntv),
      eapol_key_retries: cdktf.stringToTerraform(this._eapolKeyRetries),
      encrypt: cdktf.stringToTerraform(this._encrypt),
      external_fast_roaming: cdktf.stringToTerraform(this._externalFastRoaming),
      external_logout: cdktf.stringToTerraform(this._externalLogout),
      external_web: cdktf.stringToTerraform(this._externalWeb),
      external_web_format: cdktf.stringToTerraform(this._externalWebFormat),
      fast_bss_transition: cdktf.stringToTerraform(this._fastBssTransition),
      fast_roaming: cdktf.stringToTerraform(this._fastRoaming),
      ft_mobility_domain: cdktf.numberToTerraform(this._ftMobilityDomain),
      ft_over_ds: cdktf.stringToTerraform(this._ftOverDs),
      ft_r0_key_lifetime: cdktf.numberToTerraform(this._ftR0KeyLifetime),
      gas_comeback_delay: cdktf.numberToTerraform(this._gasComebackDelay),
      gas_fragmentation_limit: cdktf.numberToTerraform(this._gasFragmentationLimit),
      gtk_rekey: cdktf.stringToTerraform(this._gtkRekey),
      gtk_rekey_intv: cdktf.numberToTerraform(this._gtkRekeyIntv),
      high_efficiency: cdktf.stringToTerraform(this._highEfficiency),
      hotspot20_profile: cdktf.stringToTerraform(this._hotspot20Profile),
      id: cdktf.stringToTerraform(this._id),
      igmp_snooping: cdktf.stringToTerraform(this._igmpSnooping),
      intra_vap_privacy: cdktf.stringToTerraform(this._intraVapPrivacy),
      ip: cdktf.stringToTerraform(this._ip),
      ips_sensor: cdktf.stringToTerraform(this._ipsSensor),
      ipv6_rules: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv6Rules),
      key: cdktf.listMapper(cdktf.stringToTerraform, false)(this._key),
      keyindex: cdktf.numberToTerraform(this._keyindex),
      l3_roaming: cdktf.stringToTerraform(this._l3Roaming),
      l3_roaming_mode: cdktf.stringToTerraform(this._l3RoamingMode),
      ldpc: cdktf.stringToTerraform(this._ldpc),
      local_authentication: cdktf.stringToTerraform(this._localAuthentication),
      local_bridging: cdktf.stringToTerraform(this._localBridging),
      local_lan: cdktf.stringToTerraform(this._localLan),
      local_standalone: cdktf.stringToTerraform(this._localStandalone),
      local_standalone_dns: cdktf.stringToTerraform(this._localStandaloneDns),
      local_standalone_dns_ip: cdktf.listMapper(cdktf.stringToTerraform, false)(this._localStandaloneDnsIp),
      local_standalone_nat: cdktf.stringToTerraform(this._localStandaloneNat),
      local_switching: cdktf.stringToTerraform(this._localSwitching),
      mac_auth_bypass: cdktf.stringToTerraform(this._macAuthBypass),
      mac_called_station_delimiter: cdktf.stringToTerraform(this._macCalledStationDelimiter),
      mac_calling_station_delimiter: cdktf.stringToTerraform(this._macCallingStationDelimiter),
      mac_case: cdktf.stringToTerraform(this._macCase),
      mac_filter: cdktf.stringToTerraform(this._macFilter),
      mac_filter_policy_other: cdktf.stringToTerraform(this._macFilterPolicyOther),
      mac_password_delimiter: cdktf.stringToTerraform(this._macPasswordDelimiter),
      mac_username_delimiter: cdktf.stringToTerraform(this._macUsernameDelimiter),
      max_clients: cdktf.numberToTerraform(this._maxClients),
      max_clients_ap: cdktf.numberToTerraform(this._maxClientsAp),
      mbo: cdktf.stringToTerraform(this._mbo),
      mbo_cell_data_conn_pref: cdktf.stringToTerraform(this._mboCellDataConnPref),
      me_disable_thresh: cdktf.numberToTerraform(this._meDisableThresh),
      mesh_backhaul: cdktf.stringToTerraform(this._meshBackhaul),
      mpsk: cdktf.stringToTerraform(this._mpsk),
      mpsk_concurrent_clients: cdktf.numberToTerraform(this._mpskConcurrentClients),
      mpsk_profile: cdktf.stringToTerraform(this._mpskProfile),
      mu_mimo: cdktf.stringToTerraform(this._muMimo),
      multicast_enhance: cdktf.stringToTerraform(this._multicastEnhance),
      multicast_rate: cdktf.stringToTerraform(this._multicastRate),
      n80211k: cdktf.stringToTerraform(this._n80211K),
      n80211v: cdktf.stringToTerraform(this._n80211V),
      nac: cdktf.stringToTerraform(this._nac),
      nac_profile: cdktf.stringToTerraform(this._nacProfile),
      neighbor_report_dual_band: cdktf.stringToTerraform(this._neighborReportDualBand),
      okc: cdktf.stringToTerraform(this._okc),
      osen: cdktf.stringToTerraform(this._osen),
      owe_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._oweGroups),
      owe_transition: cdktf.stringToTerraform(this._oweTransition),
      owe_transition_ssid: cdktf.stringToTerraform(this._oweTransitionSsid),
      passphrase: cdktf.listMapper(cdktf.stringToTerraform, false)(this._passphrase),
      pmf: cdktf.stringToTerraform(this._pmf),
      pmf_assoc_comeback_timeout: cdktf.numberToTerraform(this._pmfAssocComebackTimeout),
      pmf_sa_query_retry_timeout: cdktf.numberToTerraform(this._pmfSaQueryRetryTimeout),
      port_macauth: cdktf.stringToTerraform(this._portMacauth),
      port_macauth_reauth_timeout: cdktf.numberToTerraform(this._portMacauthReauthTimeout),
      port_macauth_timeout: cdktf.numberToTerraform(this._portMacauthTimeout),
      portal_message_override_group: cdktf.stringToTerraform(this._portalMessageOverrideGroup),
      portal_type: cdktf.stringToTerraform(this._portalType),
      primary_wag_profile: cdktf.stringToTerraform(this._primaryWagProfile),
      probe_resp_suppression: cdktf.stringToTerraform(this._probeRespSuppression),
      probe_resp_threshold: cdktf.stringToTerraform(this._probeRespThreshold),
      ptk_rekey: cdktf.stringToTerraform(this._ptkRekey),
      ptk_rekey_intv: cdktf.numberToTerraform(this._ptkRekeyIntv),
      qos_profile: cdktf.stringToTerraform(this._qosProfile),
      quarantine: cdktf.stringToTerraform(this._quarantine),
      radio_2g_threshold: cdktf.stringToTerraform(this._radio2GThreshold),
      radio_5g_threshold: cdktf.stringToTerraform(this._radio5GThreshold),
      radio_sensitivity: cdktf.stringToTerraform(this._radioSensitivity),
      radius_mac_auth: cdktf.stringToTerraform(this._radiusMacAuth),
      radius_mac_auth_block_interval: cdktf.numberToTerraform(this._radiusMacAuthBlockInterval),
      radius_mac_auth_server: cdktf.stringToTerraform(this._radiusMacAuthServer),
      radius_mac_auth_usergroups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._radiusMacAuthUsergroups),
      radius_mac_mpsk_auth: cdktf.stringToTerraform(this._radiusMacMpskAuth),
      radius_mac_mpsk_timeout: cdktf.numberToTerraform(this._radiusMacMpskTimeout),
      radius_server: cdktf.stringToTerraform(this._radiusServer),
      rates_11a: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rates11A),
      rates_11ac_mcs_map: cdktf.stringToTerraform(this._rates11AcMcsMap),
      rates_11ac_ss12: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rates11AcSs12),
      rates_11ac_ss34: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rates11AcSs34),
      rates_11ax_mcs_map: cdktf.stringToTerraform(this._rates11AxMcsMap),
      rates_11ax_ss12: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rates11AxSs12),
      rates_11ax_ss34: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rates11AxSs34),
      rates_11bg: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rates11Bg),
      rates_11n_ss12: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rates11NSs12),
      rates_11n_ss34: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rates11NSs34),
      roaming_acct_interim_update: cdktf.stringToTerraform(this._roamingAcctInterimUpdate),
      sae_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._saeGroups),
      sae_h2e_only: cdktf.stringToTerraform(this._saeH2EOnly),
      sae_hnp_only: cdktf.stringToTerraform(this._saeHnpOnly),
      sae_password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._saePassword),
      sae_pk: cdktf.stringToTerraform(this._saePk),
      sae_private_key: cdktf.stringToTerraform(this._saePrivateKey),
      scan_botnet_connections: cdktf.stringToTerraform(this._scanBotnetConnections),
      schedule: cdktf.stringToTerraform(this._schedule),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      secondary_wag_profile: cdktf.stringToTerraform(this._secondaryWagProfile),
      security: cdktf.stringToTerraform(this._security),
      security_exempt_list: cdktf.stringToTerraform(this._securityExemptList),
      security_obsolete_option: cdktf.stringToTerraform(this._securityObsoleteOption),
      security_redirect_url: cdktf.stringToTerraform(this._securityRedirectUrl),
      selected_usergroups: cdktf.stringToTerraform(this._selectedUsergroups),
      split_tunneling: cdktf.stringToTerraform(this._splitTunneling),
      ssid: cdktf.stringToTerraform(this._ssid),
      sticky_client_remove: cdktf.stringToTerraform(this._stickyClientRemove),
      sticky_client_threshold_2g: cdktf.stringToTerraform(this._stickyClientThreshold2G),
      sticky_client_threshold_5g: cdktf.stringToTerraform(this._stickyClientThreshold5G),
      sticky_client_threshold_6g: cdktf.stringToTerraform(this._stickyClientThreshold6G),
      target_wake_time: cdktf.stringToTerraform(this._targetWakeTime),
      tkip_counter_measure: cdktf.stringToTerraform(this._tkipCounterMeasure),
      tunnel_echo_interval: cdktf.numberToTerraform(this._tunnelEchoInterval),
      tunnel_fallback_interval: cdktf.numberToTerraform(this._tunnelFallbackInterval),
      usergroup: cdktf.stringToTerraform(this._usergroup),
      utm_log: cdktf.stringToTerraform(this._utmLog),
      utm_profile: cdktf.stringToTerraform(this._utmProfile),
      utm_status: cdktf.stringToTerraform(this._utmStatus),
      vap: cdktf.stringToTerraform(this._vap),
      vdom: cdktf.stringToTerraform(this._vdom),
      vlan_auto: cdktf.stringToTerraform(this._vlanAuto),
      vlan_pooling: cdktf.stringToTerraform(this._vlanPooling),
      vlanid: cdktf.numberToTerraform(this._vlanid),
      voice_enterprise: cdktf.stringToTerraform(this._voiceEnterprise),
      webfilter_profile: cdktf.stringToTerraform(this._webfilterProfile),
      _scope: cdktf.listMapper(objectWirelesscontrollerVapDynamicMappingScopeAToTerraform, true)(this._scope.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      _centmgmt: {
        value: cdktf.stringToHclTerraform(this._centmgmt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      _dhcp_svr_id: {
        value: cdktf.stringToHclTerraform(this._dhcpSvrId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      _intf_allowaccess: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._intfAllowaccess),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      _intf_device_access_list: {
        value: cdktf.stringToHclTerraform(this._intfDeviceAccessList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      _intf_device_identification: {
        value: cdktf.stringToHclTerraform(this._intfDeviceIdentification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      _intf_device_netscan: {
        value: cdktf.stringToHclTerraform(this._intfDeviceNetscan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      _intf_dhcp6_relay_ip: {
        value: cdktf.stringToHclTerraform(this._intfDhcp6RelayIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      _intf_dhcp6_relay_service: {
        value: cdktf.stringToHclTerraform(this._intfDhcp6RelayService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      _intf_dhcp6_relay_type: {
        value: cdktf.stringToHclTerraform(this._intfDhcp6RelayType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      _intf_dhcp_relay_ip: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._intfDhcpRelayIp),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      _intf_dhcp_relay_service: {
        value: cdktf.stringToHclTerraform(this._intfDhcpRelayService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      _intf_dhcp_relay_type: {
        value: cdktf.stringToHclTerraform(this._intfDhcpRelayType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      _intf_ip: {
        value: cdktf.stringToHclTerraform(this._intfIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      _intf_ip6_address: {
        value: cdktf.stringToHclTerraform(this._intfIp6Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      _intf_ip6_allowaccess: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._intfIp6Allowaccess),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      _intf_listen_forticlient_connection: {
        value: cdktf.stringToHclTerraform(this._intfListenForticlientConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      _is_factory_setting: {
        value: cdktf.stringToHclTerraform(this._isFactorySetting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_control_list: {
        value: cdktf.stringToHclTerraform(this._accessControlList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acct_interim_interval: {
        value: cdktf.numberToHclTerraform(this._acctInterimInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      additional_akms: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additionalAkms),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      address_group: {
        value: cdktf.stringToHclTerraform(this._addressGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address_group_policy: {
        value: cdktf.stringToHclTerraform(this._addressGroupPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      antivirus_profile: {
        value: cdktf.stringToHclTerraform(this._antivirusProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_detection_engine: {
        value: cdktf.stringToHclTerraform(this._applicationDetectionEngine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_dscp_marking: {
        value: cdktf.stringToHclTerraform(this._applicationDscpMarking),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_list: {
        value: cdktf.stringToHclTerraform(this._applicationList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_report_intv: {
        value: cdktf.numberToHclTerraform(this._applicationReportIntv),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      atf_weight: {
        value: cdktf.numberToHclTerraform(this._atfWeight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auth: {
        value: cdktf.stringToHclTerraform(this._auth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_cert: {
        value: cdktf.stringToHclTerraform(this._authCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_portal_addr: {
        value: cdktf.stringToHclTerraform(this._authPortalAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      beacon_advertising: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._beaconAdvertising),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      broadcast_ssid: {
        value: cdktf.stringToHclTerraform(this._broadcastSsid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      broadcast_suppression: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._broadcastSuppression),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bss_color_partial: {
        value: cdktf.stringToHclTerraform(this._bssColorPartial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bstm_disassociation_imminent: {
        value: cdktf.stringToHclTerraform(this._bstmDisassociationImminent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bstm_load_balancing_disassoc_timer: {
        value: cdktf.numberToHclTerraform(this._bstmLoadBalancingDisassocTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bstm_rssi_disassoc_timer: {
        value: cdktf.numberToHclTerraform(this._bstmRssiDisassocTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      captive_portal_ac_name: {
        value: cdktf.stringToHclTerraform(this._captivePortalAcName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      captive_portal_auth_timeout: {
        value: cdktf.numberToHclTerraform(this._captivePortalAuthTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      captive_portal_fw_accounting: {
        value: cdktf.stringToHclTerraform(this._captivePortalFwAccounting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      captive_portal_macauth_radius_secret: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._captivePortalMacauthRadiusSecret),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      captive_portal_macauth_radius_server: {
        value: cdktf.stringToHclTerraform(this._captivePortalMacauthRadiusServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      captive_portal_radius_secret: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._captivePortalRadiusSecret),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      captive_portal_radius_server: {
        value: cdktf.stringToHclTerraform(this._captivePortalRadiusServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      captive_portal_session_timeout_interval: {
        value: cdktf.numberToHclTerraform(this._captivePortalSessionTimeoutInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_count: {
        value: cdktf.numberToHclTerraform(this._clientCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dhcp_address_enforcement: {
        value: cdktf.stringToHclTerraform(this._dhcpAddressEnforcement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_lease_time: {
        value: cdktf.numberToHclTerraform(this._dhcpLeaseTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dhcp_option43_insertion: {
        value: cdktf.stringToHclTerraform(this._dhcpOption43Insertion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_option82_circuit_id_insertion: {
        value: cdktf.stringToHclTerraform(this._dhcpOption82CircuitIdInsertion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_option82_insertion: {
        value: cdktf.stringToHclTerraform(this._dhcpOption82Insertion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_option82_remote_id_insertion: {
        value: cdktf.stringToHclTerraform(this._dhcpOption82RemoteIdInsertion),
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
      dynamic_vlan: {
        value: cdktf.stringToHclTerraform(this._dynamicVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eap_reauth: {
        value: cdktf.stringToHclTerraform(this._eapReauth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eap_reauth_intv: {
        value: cdktf.numberToHclTerraform(this._eapReauthIntv),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eapol_key_retries: {
        value: cdktf.stringToHclTerraform(this._eapolKeyRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encrypt: {
        value: cdktf.stringToHclTerraform(this._encrypt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_fast_roaming: {
        value: cdktf.stringToHclTerraform(this._externalFastRoaming),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_logout: {
        value: cdktf.stringToHclTerraform(this._externalLogout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_web: {
        value: cdktf.stringToHclTerraform(this._externalWeb),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_web_format: {
        value: cdktf.stringToHclTerraform(this._externalWebFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fast_bss_transition: {
        value: cdktf.stringToHclTerraform(this._fastBssTransition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fast_roaming: {
        value: cdktf.stringToHclTerraform(this._fastRoaming),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ft_mobility_domain: {
        value: cdktf.numberToHclTerraform(this._ftMobilityDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ft_over_ds: {
        value: cdktf.stringToHclTerraform(this._ftOverDs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ft_r0_key_lifetime: {
        value: cdktf.numberToHclTerraform(this._ftR0KeyLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gas_comeback_delay: {
        value: cdktf.numberToHclTerraform(this._gasComebackDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gas_fragmentation_limit: {
        value: cdktf.numberToHclTerraform(this._gasFragmentationLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtk_rekey: {
        value: cdktf.stringToHclTerraform(this._gtkRekey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gtk_rekey_intv: {
        value: cdktf.numberToHclTerraform(this._gtkRekeyIntv),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      high_efficiency: {
        value: cdktf.stringToHclTerraform(this._highEfficiency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hotspot20_profile: {
        value: cdktf.stringToHclTerraform(this._hotspot20Profile),
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
      igmp_snooping: {
        value: cdktf.stringToHclTerraform(this._igmpSnooping),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intra_vap_privacy: {
        value: cdktf.stringToHclTerraform(this._intraVapPrivacy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ips_sensor: {
        value: cdktf.stringToHclTerraform(this._ipsSensor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_rules: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv6Rules),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      key: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._key),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      keyindex: {
        value: cdktf.numberToHclTerraform(this._keyindex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l3_roaming: {
        value: cdktf.stringToHclTerraform(this._l3Roaming),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l3_roaming_mode: {
        value: cdktf.stringToHclTerraform(this._l3RoamingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldpc: {
        value: cdktf.stringToHclTerraform(this._ldpc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_authentication: {
        value: cdktf.stringToHclTerraform(this._localAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_bridging: {
        value: cdktf.stringToHclTerraform(this._localBridging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_lan: {
        value: cdktf.stringToHclTerraform(this._localLan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_standalone: {
        value: cdktf.stringToHclTerraform(this._localStandalone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_standalone_dns: {
        value: cdktf.stringToHclTerraform(this._localStandaloneDns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_standalone_dns_ip: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._localStandaloneDnsIp),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      local_standalone_nat: {
        value: cdktf.stringToHclTerraform(this._localStandaloneNat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_switching: {
        value: cdktf.stringToHclTerraform(this._localSwitching),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_auth_bypass: {
        value: cdktf.stringToHclTerraform(this._macAuthBypass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_called_station_delimiter: {
        value: cdktf.stringToHclTerraform(this._macCalledStationDelimiter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_calling_station_delimiter: {
        value: cdktf.stringToHclTerraform(this._macCallingStationDelimiter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_case: {
        value: cdktf.stringToHclTerraform(this._macCase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_filter: {
        value: cdktf.stringToHclTerraform(this._macFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_filter_policy_other: {
        value: cdktf.stringToHclTerraform(this._macFilterPolicyOther),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_password_delimiter: {
        value: cdktf.stringToHclTerraform(this._macPasswordDelimiter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_username_delimiter: {
        value: cdktf.stringToHclTerraform(this._macUsernameDelimiter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_clients: {
        value: cdktf.numberToHclTerraform(this._maxClients),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_clients_ap: {
        value: cdktf.numberToHclTerraform(this._maxClientsAp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mbo: {
        value: cdktf.stringToHclTerraform(this._mbo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mbo_cell_data_conn_pref: {
        value: cdktf.stringToHclTerraform(this._mboCellDataConnPref),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      me_disable_thresh: {
        value: cdktf.numberToHclTerraform(this._meDisableThresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mesh_backhaul: {
        value: cdktf.stringToHclTerraform(this._meshBackhaul),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mpsk: {
        value: cdktf.stringToHclTerraform(this._mpsk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mpsk_concurrent_clients: {
        value: cdktf.numberToHclTerraform(this._mpskConcurrentClients),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mpsk_profile: {
        value: cdktf.stringToHclTerraform(this._mpskProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mu_mimo: {
        value: cdktf.stringToHclTerraform(this._muMimo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multicast_enhance: {
        value: cdktf.stringToHclTerraform(this._multicastEnhance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multicast_rate: {
        value: cdktf.stringToHclTerraform(this._multicastRate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      n80211k: {
        value: cdktf.stringToHclTerraform(this._n80211K),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      n80211v: {
        value: cdktf.stringToHclTerraform(this._n80211V),
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
      nac_profile: {
        value: cdktf.stringToHclTerraform(this._nacProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      neighbor_report_dual_band: {
        value: cdktf.stringToHclTerraform(this._neighborReportDualBand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      okc: {
        value: cdktf.stringToHclTerraform(this._okc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      osen: {
        value: cdktf.stringToHclTerraform(this._osen),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owe_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._oweGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      owe_transition: {
        value: cdktf.stringToHclTerraform(this._oweTransition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owe_transition_ssid: {
        value: cdktf.stringToHclTerraform(this._oweTransitionSsid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passphrase: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._passphrase),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      pmf: {
        value: cdktf.stringToHclTerraform(this._pmf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pmf_assoc_comeback_timeout: {
        value: cdktf.numberToHclTerraform(this._pmfAssocComebackTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pmf_sa_query_retry_timeout: {
        value: cdktf.numberToHclTerraform(this._pmfSaQueryRetryTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_macauth: {
        value: cdktf.stringToHclTerraform(this._portMacauth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_macauth_reauth_timeout: {
        value: cdktf.numberToHclTerraform(this._portMacauthReauthTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_macauth_timeout: {
        value: cdktf.numberToHclTerraform(this._portMacauthTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      portal_message_override_group: {
        value: cdktf.stringToHclTerraform(this._portalMessageOverrideGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      portal_type: {
        value: cdktf.stringToHclTerraform(this._portalType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_wag_profile: {
        value: cdktf.stringToHclTerraform(this._primaryWagProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      probe_resp_suppression: {
        value: cdktf.stringToHclTerraform(this._probeRespSuppression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      probe_resp_threshold: {
        value: cdktf.stringToHclTerraform(this._probeRespThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ptk_rekey: {
        value: cdktf.stringToHclTerraform(this._ptkRekey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ptk_rekey_intv: {
        value: cdktf.numberToHclTerraform(this._ptkRekeyIntv),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      qos_profile: {
        value: cdktf.stringToHclTerraform(this._qosProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quarantine: {
        value: cdktf.stringToHclTerraform(this._quarantine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radio_2g_threshold: {
        value: cdktf.stringToHclTerraform(this._radio2GThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radio_5g_threshold: {
        value: cdktf.stringToHclTerraform(this._radio5GThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radio_sensitivity: {
        value: cdktf.stringToHclTerraform(this._radioSensitivity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_mac_auth: {
        value: cdktf.stringToHclTerraform(this._radiusMacAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_mac_auth_block_interval: {
        value: cdktf.numberToHclTerraform(this._radiusMacAuthBlockInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radius_mac_auth_server: {
        value: cdktf.stringToHclTerraform(this._radiusMacAuthServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_mac_auth_usergroups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._radiusMacAuthUsergroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      radius_mac_mpsk_auth: {
        value: cdktf.stringToHclTerraform(this._radiusMacMpskAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_mac_mpsk_timeout: {
        value: cdktf.numberToHclTerraform(this._radiusMacMpskTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radius_server: {
        value: cdktf.stringToHclTerraform(this._radiusServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rates_11a: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rates11A),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      rates_11ac_mcs_map: {
        value: cdktf.stringToHclTerraform(this._rates11AcMcsMap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rates_11ac_ss12: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rates11AcSs12),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      rates_11ac_ss34: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rates11AcSs34),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      rates_11ax_mcs_map: {
        value: cdktf.stringToHclTerraform(this._rates11AxMcsMap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rates_11ax_ss12: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rates11AxSs12),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      rates_11ax_ss34: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rates11AxSs34),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      rates_11bg: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rates11Bg),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      rates_11n_ss12: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rates11NSs12),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      rates_11n_ss34: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rates11NSs34),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      roaming_acct_interim_update: {
        value: cdktf.stringToHclTerraform(this._roamingAcctInterimUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sae_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._saeGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sae_h2e_only: {
        value: cdktf.stringToHclTerraform(this._saeH2EOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sae_hnp_only: {
        value: cdktf.stringToHclTerraform(this._saeHnpOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sae_password: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._saePassword),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sae_pk: {
        value: cdktf.stringToHclTerraform(this._saePk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sae_private_key: {
        value: cdktf.stringToHclTerraform(this._saePrivateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scan_botnet_connections: {
        value: cdktf.stringToHclTerraform(this._scanBotnetConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: cdktf.stringToHclTerraform(this._schedule),
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
      secondary_wag_profile: {
        value: cdktf.stringToHclTerraform(this._secondaryWagProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security: {
        value: cdktf.stringToHclTerraform(this._security),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_exempt_list: {
        value: cdktf.stringToHclTerraform(this._securityExemptList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_obsolete_option: {
        value: cdktf.stringToHclTerraform(this._securityObsoleteOption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_redirect_url: {
        value: cdktf.stringToHclTerraform(this._securityRedirectUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      selected_usergroups: {
        value: cdktf.stringToHclTerraform(this._selectedUsergroups),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      split_tunneling: {
        value: cdktf.stringToHclTerraform(this._splitTunneling),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssid: {
        value: cdktf.stringToHclTerraform(this._ssid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sticky_client_remove: {
        value: cdktf.stringToHclTerraform(this._stickyClientRemove),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sticky_client_threshold_2g: {
        value: cdktf.stringToHclTerraform(this._stickyClientThreshold2G),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sticky_client_threshold_5g: {
        value: cdktf.stringToHclTerraform(this._stickyClientThreshold5G),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sticky_client_threshold_6g: {
        value: cdktf.stringToHclTerraform(this._stickyClientThreshold6G),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_wake_time: {
        value: cdktf.stringToHclTerraform(this._targetWakeTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tkip_counter_measure: {
        value: cdktf.stringToHclTerraform(this._tkipCounterMeasure),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_echo_interval: {
        value: cdktf.numberToHclTerraform(this._tunnelEchoInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tunnel_fallback_interval: {
        value: cdktf.numberToHclTerraform(this._tunnelFallbackInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      usergroup: {
        value: cdktf.stringToHclTerraform(this._usergroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      utm_log: {
        value: cdktf.stringToHclTerraform(this._utmLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      utm_profile: {
        value: cdktf.stringToHclTerraform(this._utmProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      utm_status: {
        value: cdktf.stringToHclTerraform(this._utmStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vap: {
        value: cdktf.stringToHclTerraform(this._vap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_auto: {
        value: cdktf.stringToHclTerraform(this._vlanAuto),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_pooling: {
        value: cdktf.stringToHclTerraform(this._vlanPooling),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlanid: {
        value: cdktf.numberToHclTerraform(this._vlanid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      voice_enterprise: {
        value: cdktf.stringToHclTerraform(this._voiceEnterprise),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webfilter_profile: {
        value: cdktf.stringToHclTerraform(this._webfilterProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      _scope: {
        value: cdktf.listMapperHcl(objectWirelesscontrollerVapDynamicMappingScopeAToHclTerraform, true)(this._scope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWirelesscontrollerVapDynamicMappingScopeAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
