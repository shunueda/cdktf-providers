// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelesscontrollerVapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#access_control_list WirelesscontrollerVap#access_control_list}
  */
  readonly accessControlList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#acct_interim_interval WirelesscontrollerVap#acct_interim_interval}
  */
  readonly acctInterimInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#additional_akms WirelesscontrollerVap#additional_akms}
  */
  readonly additionalAkms?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#address_group WirelesscontrollerVap#address_group}
  */
  readonly addressGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#address_group_policy WirelesscontrollerVap#address_group_policy}
  */
  readonly addressGroupPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#akm24_only WirelesscontrollerVap#akm24_only}
  */
  readonly akm24Only?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#alias WirelesscontrollerVap#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#antivirus_profile WirelesscontrollerVap#antivirus_profile}
  */
  readonly antivirusProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#application_detection_engine WirelesscontrollerVap#application_detection_engine}
  */
  readonly applicationDetectionEngine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#application_dscp_marking WirelesscontrollerVap#application_dscp_marking}
  */
  readonly applicationDscpMarking?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#application_list WirelesscontrollerVap#application_list}
  */
  readonly applicationList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#application_report_intv WirelesscontrollerVap#application_report_intv}
  */
  readonly applicationReportIntv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#atf_weight WirelesscontrollerVap#atf_weight}
  */
  readonly atfWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#auth WirelesscontrollerVap#auth}
  */
  readonly auth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#auth_cert WirelesscontrollerVap#auth_cert}
  */
  readonly authCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#auth_portal_addr WirelesscontrollerVap#auth_portal_addr}
  */
  readonly authPortalAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#beacon_advertising WirelesscontrollerVap#beacon_advertising}
  */
  readonly beaconAdvertising?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#beacon_protection WirelesscontrollerVap#beacon_protection}
  */
  readonly beaconProtection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#broadcast_ssid WirelesscontrollerVap#broadcast_ssid}
  */
  readonly broadcastSsid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#broadcast_suppression WirelesscontrollerVap#broadcast_suppression}
  */
  readonly broadcastSuppression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#bss_color_partial WirelesscontrollerVap#bss_color_partial}
  */
  readonly bssColorPartial?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#bstm_disassociation_imminent WirelesscontrollerVap#bstm_disassociation_imminent}
  */
  readonly bstmDisassociationImminent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#bstm_load_balancing_disassoc_timer WirelesscontrollerVap#bstm_load_balancing_disassoc_timer}
  */
  readonly bstmLoadBalancingDisassocTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#bstm_rssi_disassoc_timer WirelesscontrollerVap#bstm_rssi_disassoc_timer}
  */
  readonly bstmRssiDisassocTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#called_station_id_type WirelesscontrollerVap#called_station_id_type}
  */
  readonly calledStationIdType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#captive_network_assistant_bypass WirelesscontrollerVap#captive_network_assistant_bypass}
  */
  readonly captiveNetworkAssistantBypass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#captive_portal WirelesscontrollerVap#captive_portal}
  */
  readonly captivePortal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#captive_portal_ac_name WirelesscontrollerVap#captive_portal_ac_name}
  */
  readonly captivePortalAcName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#captive_portal_auth_timeout WirelesscontrollerVap#captive_portal_auth_timeout}
  */
  readonly captivePortalAuthTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#captive_portal_fw_accounting WirelesscontrollerVap#captive_portal_fw_accounting}
  */
  readonly captivePortalFwAccounting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#captive_portal_macauth_radius_secret WirelesscontrollerVap#captive_portal_macauth_radius_secret}
  */
  readonly captivePortalMacauthRadiusSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#captive_portal_macauth_radius_server WirelesscontrollerVap#captive_portal_macauth_radius_server}
  */
  readonly captivePortalMacauthRadiusServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#captive_portal_radius_secret WirelesscontrollerVap#captive_portal_radius_secret}
  */
  readonly captivePortalRadiusSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#captive_portal_radius_server WirelesscontrollerVap#captive_portal_radius_server}
  */
  readonly captivePortalRadiusServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#captive_portal_session_timeout_interval WirelesscontrollerVap#captive_portal_session_timeout_interval}
  */
  readonly captivePortalSessionTimeoutInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#dhcp_address_enforcement WirelesscontrollerVap#dhcp_address_enforcement}
  */
  readonly dhcpAddressEnforcement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#dhcp_lease_time WirelesscontrollerVap#dhcp_lease_time}
  */
  readonly dhcpLeaseTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#dhcp_option43_insertion WirelesscontrollerVap#dhcp_option43_insertion}
  */
  readonly dhcpOption43Insertion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#dhcp_option82_circuit_id_insertion WirelesscontrollerVap#dhcp_option82_circuit_id_insertion}
  */
  readonly dhcpOption82CircuitIdInsertion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#dhcp_option82_insertion WirelesscontrollerVap#dhcp_option82_insertion}
  */
  readonly dhcpOption82Insertion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#dhcp_option82_remote_id_insertion WirelesscontrollerVap#dhcp_option82_remote_id_insertion}
  */
  readonly dhcpOption82RemoteIdInsertion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#domain_name_stripping WirelesscontrollerVap#domain_name_stripping}
  */
  readonly domainNameStripping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#dynamic_sort_subtable WirelesscontrollerVap#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#dynamic_vlan WirelesscontrollerVap#dynamic_vlan}
  */
  readonly dynamicVlan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#eap_reauth WirelesscontrollerVap#eap_reauth}
  */
  readonly eapReauth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#eap_reauth_intv WirelesscontrollerVap#eap_reauth_intv}
  */
  readonly eapReauthIntv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#eapol_key_retries WirelesscontrollerVap#eapol_key_retries}
  */
  readonly eapolKeyRetries?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#encrypt WirelesscontrollerVap#encrypt}
  */
  readonly encrypt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#external_fast_roaming WirelesscontrollerVap#external_fast_roaming}
  */
  readonly externalFastRoaming?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#external_logout WirelesscontrollerVap#external_logout}
  */
  readonly externalLogout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#external_pre_auth WirelesscontrollerVap#external_pre_auth}
  */
  readonly externalPreAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#external_web WirelesscontrollerVap#external_web}
  */
  readonly externalWeb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#external_web_format WirelesscontrollerVap#external_web_format}
  */
  readonly externalWebFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#fast_bss_transition WirelesscontrollerVap#fast_bss_transition}
  */
  readonly fastBssTransition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#fast_roaming WirelesscontrollerVap#fast_roaming}
  */
  readonly fastRoaming?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#ft_mobility_domain WirelesscontrollerVap#ft_mobility_domain}
  */
  readonly ftMobilityDomain?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#ft_over_ds WirelesscontrollerVap#ft_over_ds}
  */
  readonly ftOverDs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#ft_r0_key_lifetime WirelesscontrollerVap#ft_r0_key_lifetime}
  */
  readonly ftR0KeyLifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#gas_comeback_delay WirelesscontrollerVap#gas_comeback_delay}
  */
  readonly gasComebackDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#gas_fragmentation_limit WirelesscontrollerVap#gas_fragmentation_limit}
  */
  readonly gasFragmentationLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#get_all_tables WirelesscontrollerVap#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#gtk_rekey WirelesscontrollerVap#gtk_rekey}
  */
  readonly gtkRekey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#gtk_rekey_intv WirelesscontrollerVap#gtk_rekey_intv}
  */
  readonly gtkRekeyIntv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#high_efficiency WirelesscontrollerVap#high_efficiency}
  */
  readonly highEfficiency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#hotspot20_profile WirelesscontrollerVap#hotspot20_profile}
  */
  readonly hotspot20Profile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#id WirelesscontrollerVap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#igmp_snooping WirelesscontrollerVap#igmp_snooping}
  */
  readonly igmpSnooping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#intra_vap_privacy WirelesscontrollerVap#intra_vap_privacy}
  */
  readonly intraVapPrivacy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#ip WirelesscontrollerVap#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#ips_sensor WirelesscontrollerVap#ips_sensor}
  */
  readonly ipsSensor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#ipv6_rules WirelesscontrollerVap#ipv6_rules}
  */
  readonly ipv6Rules?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#key WirelesscontrollerVap#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#keyindex WirelesscontrollerVap#keyindex}
  */
  readonly keyindex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#l3_roaming WirelesscontrollerVap#l3_roaming}
  */
  readonly l3Roaming?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#l3_roaming_mode WirelesscontrollerVap#l3_roaming_mode}
  */
  readonly l3RoamingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#ldpc WirelesscontrollerVap#ldpc}
  */
  readonly ldpc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#local_authentication WirelesscontrollerVap#local_authentication}
  */
  readonly localAuthentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#local_bridging WirelesscontrollerVap#local_bridging}
  */
  readonly localBridging?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#local_lan WirelesscontrollerVap#local_lan}
  */
  readonly localLan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#local_lan_partition WirelesscontrollerVap#local_lan_partition}
  */
  readonly localLanPartition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#local_standalone WirelesscontrollerVap#local_standalone}
  */
  readonly localStandalone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#local_standalone_dns WirelesscontrollerVap#local_standalone_dns}
  */
  readonly localStandaloneDns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#local_standalone_dns_ip WirelesscontrollerVap#local_standalone_dns_ip}
  */
  readonly localStandaloneDnsIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#local_standalone_nat WirelesscontrollerVap#local_standalone_nat}
  */
  readonly localStandaloneNat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#mac_auth_bypass WirelesscontrollerVap#mac_auth_bypass}
  */
  readonly macAuthBypass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#mac_called_station_delimiter WirelesscontrollerVap#mac_called_station_delimiter}
  */
  readonly macCalledStationDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#mac_calling_station_delimiter WirelesscontrollerVap#mac_calling_station_delimiter}
  */
  readonly macCallingStationDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#mac_case WirelesscontrollerVap#mac_case}
  */
  readonly macCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#mac_filter WirelesscontrollerVap#mac_filter}
  */
  readonly macFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#mac_filter_policy_other WirelesscontrollerVap#mac_filter_policy_other}
  */
  readonly macFilterPolicyOther?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#mac_password_delimiter WirelesscontrollerVap#mac_password_delimiter}
  */
  readonly macPasswordDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#mac_username_delimiter WirelesscontrollerVap#mac_username_delimiter}
  */
  readonly macUsernameDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#max_clients WirelesscontrollerVap#max_clients}
  */
  readonly maxClients?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#max_clients_ap WirelesscontrollerVap#max_clients_ap}
  */
  readonly maxClientsAp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#mbo WirelesscontrollerVap#mbo}
  */
  readonly mbo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#mbo_cell_data_conn_pref WirelesscontrollerVap#mbo_cell_data_conn_pref}
  */
  readonly mboCellDataConnPref?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#me_disable_thresh WirelesscontrollerVap#me_disable_thresh}
  */
  readonly meDisableThresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#mesh_backhaul WirelesscontrollerVap#mesh_backhaul}
  */
  readonly meshBackhaul?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#mpsk WirelesscontrollerVap#mpsk}
  */
  readonly mpsk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#mpsk_concurrent_clients WirelesscontrollerVap#mpsk_concurrent_clients}
  */
  readonly mpskConcurrentClients?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#mpsk_profile WirelesscontrollerVap#mpsk_profile}
  */
  readonly mpskProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#mu_mimo WirelesscontrollerVap#mu_mimo}
  */
  readonly muMimo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#multicast_enhance WirelesscontrollerVap#multicast_enhance}
  */
  readonly multicastEnhance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#multicast_rate WirelesscontrollerVap#multicast_rate}
  */
  readonly multicastRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#n80211k WirelesscontrollerVap#n80211k}
  */
  readonly n80211K?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#n80211v WirelesscontrollerVap#n80211v}
  */
  readonly n80211V?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#nac WirelesscontrollerVap#nac}
  */
  readonly nac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#nac_profile WirelesscontrollerVap#nac_profile}
  */
  readonly nacProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#name WirelesscontrollerVap#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#nas_filter_rule WirelesscontrollerVap#nas_filter_rule}
  */
  readonly nasFilterRule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#neighbor_report_dual_band WirelesscontrollerVap#neighbor_report_dual_band}
  */
  readonly neighborReportDualBand?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#okc WirelesscontrollerVap#okc}
  */
  readonly okc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#osen WirelesscontrollerVap#osen}
  */
  readonly osen?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#owe_groups WirelesscontrollerVap#owe_groups}
  */
  readonly oweGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#owe_transition WirelesscontrollerVap#owe_transition}
  */
  readonly oweTransition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#owe_transition_ssid WirelesscontrollerVap#owe_transition_ssid}
  */
  readonly oweTransitionSsid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#passphrase WirelesscontrollerVap#passphrase}
  */
  readonly passphrase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#pmf WirelesscontrollerVap#pmf}
  */
  readonly pmf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#pmf_assoc_comeback_timeout WirelesscontrollerVap#pmf_assoc_comeback_timeout}
  */
  readonly pmfAssocComebackTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#pmf_sa_query_retry_timeout WirelesscontrollerVap#pmf_sa_query_retry_timeout}
  */
  readonly pmfSaQueryRetryTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#port_macauth WirelesscontrollerVap#port_macauth}
  */
  readonly portMacauth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#port_macauth_reauth_timeout WirelesscontrollerVap#port_macauth_reauth_timeout}
  */
  readonly portMacauthReauthTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#port_macauth_timeout WirelesscontrollerVap#port_macauth_timeout}
  */
  readonly portMacauthTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#portal_message_override_group WirelesscontrollerVap#portal_message_override_group}
  */
  readonly portalMessageOverrideGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#portal_type WirelesscontrollerVap#portal_type}
  */
  readonly portalType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#pre_auth WirelesscontrollerVap#pre_auth}
  */
  readonly preAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#primary_wag_profile WirelesscontrollerVap#primary_wag_profile}
  */
  readonly primaryWagProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#probe_resp_suppression WirelesscontrollerVap#probe_resp_suppression}
  */
  readonly probeRespSuppression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#probe_resp_threshold WirelesscontrollerVap#probe_resp_threshold}
  */
  readonly probeRespThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#ptk_rekey WirelesscontrollerVap#ptk_rekey}
  */
  readonly ptkRekey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#ptk_rekey_intv WirelesscontrollerVap#ptk_rekey_intv}
  */
  readonly ptkRekeyIntv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#qos_profile WirelesscontrollerVap#qos_profile}
  */
  readonly qosProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#quarantine WirelesscontrollerVap#quarantine}
  */
  readonly quarantine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#radio_2g_threshold WirelesscontrollerVap#radio_2g_threshold}
  */
  readonly radio2GThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#radio_5g_threshold WirelesscontrollerVap#radio_5g_threshold}
  */
  readonly radio5GThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#radio_sensitivity WirelesscontrollerVap#radio_sensitivity}
  */
  readonly radioSensitivity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#radius_mac_auth WirelesscontrollerVap#radius_mac_auth}
  */
  readonly radiusMacAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#radius_mac_auth_block_interval WirelesscontrollerVap#radius_mac_auth_block_interval}
  */
  readonly radiusMacAuthBlockInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#radius_mac_auth_server WirelesscontrollerVap#radius_mac_auth_server}
  */
  readonly radiusMacAuthServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#radius_mac_mpsk_auth WirelesscontrollerVap#radius_mac_mpsk_auth}
  */
  readonly radiusMacMpskAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#radius_mac_mpsk_timeout WirelesscontrollerVap#radius_mac_mpsk_timeout}
  */
  readonly radiusMacMpskTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#radius_server WirelesscontrollerVap#radius_server}
  */
  readonly radiusServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#rates_11a WirelesscontrollerVap#rates_11a}
  */
  readonly rates11A?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#rates_11ac_mcs_map WirelesscontrollerVap#rates_11ac_mcs_map}
  */
  readonly rates11AcMcsMap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#rates_11ac_ss12 WirelesscontrollerVap#rates_11ac_ss12}
  */
  readonly rates11AcSs12?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#rates_11ac_ss34 WirelesscontrollerVap#rates_11ac_ss34}
  */
  readonly rates11AcSs34?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#rates_11ax_mcs_map WirelesscontrollerVap#rates_11ax_mcs_map}
  */
  readonly rates11AxMcsMap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#rates_11ax_ss12 WirelesscontrollerVap#rates_11ax_ss12}
  */
  readonly rates11AxSs12?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#rates_11ax_ss34 WirelesscontrollerVap#rates_11ax_ss34}
  */
  readonly rates11AxSs34?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#rates_11be_mcs_map WirelesscontrollerVap#rates_11be_mcs_map}
  */
  readonly rates11BeMcsMap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#rates_11be_mcs_map_160 WirelesscontrollerVap#rates_11be_mcs_map_160}
  */
  readonly rates11BeMcsMap160?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#rates_11be_mcs_map_320 WirelesscontrollerVap#rates_11be_mcs_map_320}
  */
  readonly rates11BeMcsMap320?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#rates_11bg WirelesscontrollerVap#rates_11bg}
  */
  readonly rates11Bg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#rates_11n_ss12 WirelesscontrollerVap#rates_11n_ss12}
  */
  readonly rates11NSs12?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#rates_11n_ss34 WirelesscontrollerVap#rates_11n_ss34}
  */
  readonly rates11NSs34?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#roaming_acct_interim_update WirelesscontrollerVap#roaming_acct_interim_update}
  */
  readonly roamingAcctInterimUpdate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#sae_groups WirelesscontrollerVap#sae_groups}
  */
  readonly saeGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#sae_h2e_only WirelesscontrollerVap#sae_h2e_only}
  */
  readonly saeH2EOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#sae_hnp_only WirelesscontrollerVap#sae_hnp_only}
  */
  readonly saeHnpOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#sae_password WirelesscontrollerVap#sae_password}
  */
  readonly saePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#sae_pk WirelesscontrollerVap#sae_pk}
  */
  readonly saePk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#sae_private_key WirelesscontrollerVap#sae_private_key}
  */
  readonly saePrivateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#scan_botnet_connections WirelesscontrollerVap#scan_botnet_connections}
  */
  readonly scanBotnetConnections?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#schedule WirelesscontrollerVap#schedule}
  */
  readonly schedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#secondary_wag_profile WirelesscontrollerVap#secondary_wag_profile}
  */
  readonly secondaryWagProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#security WirelesscontrollerVap#security}
  */
  readonly security?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#security_exempt_list WirelesscontrollerVap#security_exempt_list}
  */
  readonly securityExemptList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#security_obsolete_option WirelesscontrollerVap#security_obsolete_option}
  */
  readonly securityObsoleteOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#security_redirect_url WirelesscontrollerVap#security_redirect_url}
  */
  readonly securityRedirectUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#split_tunneling WirelesscontrollerVap#split_tunneling}
  */
  readonly splitTunneling?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#ssid WirelesscontrollerVap#ssid}
  */
  readonly ssid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#sticky_client_remove WirelesscontrollerVap#sticky_client_remove}
  */
  readonly stickyClientRemove?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#sticky_client_threshold_2g WirelesscontrollerVap#sticky_client_threshold_2g}
  */
  readonly stickyClientThreshold2G?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#sticky_client_threshold_5g WirelesscontrollerVap#sticky_client_threshold_5g}
  */
  readonly stickyClientThreshold5G?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#sticky_client_threshold_6g WirelesscontrollerVap#sticky_client_threshold_6g}
  */
  readonly stickyClientThreshold6G?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#target_wake_time WirelesscontrollerVap#target_wake_time}
  */
  readonly targetWakeTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#tkip_counter_measure WirelesscontrollerVap#tkip_counter_measure}
  */
  readonly tkipCounterMeasure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#tunnel_echo_interval WirelesscontrollerVap#tunnel_echo_interval}
  */
  readonly tunnelEchoInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#tunnel_fallback_interval WirelesscontrollerVap#tunnel_fallback_interval}
  */
  readonly tunnelFallbackInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#utm_log WirelesscontrollerVap#utm_log}
  */
  readonly utmLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#utm_profile WirelesscontrollerVap#utm_profile}
  */
  readonly utmProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#utm_status WirelesscontrollerVap#utm_status}
  */
  readonly utmStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#vdomparam WirelesscontrollerVap#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#vlan_auto WirelesscontrollerVap#vlan_auto}
  */
  readonly vlanAuto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#vlan_pooling WirelesscontrollerVap#vlan_pooling}
  */
  readonly vlanPooling?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#vlanid WirelesscontrollerVap#vlanid}
  */
  readonly vlanid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#voice_enterprise WirelesscontrollerVap#voice_enterprise}
  */
  readonly voiceEnterprise?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#webfilter_profile WirelesscontrollerVap#webfilter_profile}
  */
  readonly webfilterProfile?: string;
  /**
  * mac_filter_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#mac_filter_list WirelesscontrollerVap#mac_filter_list}
  */
  readonly macFilterList?: WirelesscontrollerVapMacFilterListStruct[] | cdktf.IResolvable;
  /**
  * mpsk_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#mpsk_key WirelesscontrollerVap#mpsk_key}
  */
  readonly mpskKey?: WirelesscontrollerVapMpskKey[] | cdktf.IResolvable;
  /**
  * portal_message_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#portal_message_overrides WirelesscontrollerVap#portal_message_overrides}
  */
  readonly portalMessageOverrides?: WirelesscontrollerVapPortalMessageOverrides;
  /**
  * radius_mac_auth_usergroups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#radius_mac_auth_usergroups WirelesscontrollerVap#radius_mac_auth_usergroups}
  */
  readonly radiusMacAuthUsergroups?: WirelesscontrollerVapRadiusMacAuthUsergroups[] | cdktf.IResolvable;
  /**
  * selected_usergroups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#selected_usergroups WirelesscontrollerVap#selected_usergroups}
  */
  readonly selectedUsergroups?: WirelesscontrollerVapSelectedUsergroups[] | cdktf.IResolvable;
  /**
  * usergroup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#usergroup WirelesscontrollerVap#usergroup}
  */
  readonly usergroup?: WirelesscontrollerVapUsergroup[] | cdktf.IResolvable;
  /**
  * vlan_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#vlan_name WirelesscontrollerVap#vlan_name}
  */
  readonly vlanName?: WirelesscontrollerVapVlanName[] | cdktf.IResolvable;
  /**
  * vlan_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#vlan_pool WirelesscontrollerVap#vlan_pool}
  */
  readonly vlanPool?: WirelesscontrollerVapVlanPool[] | cdktf.IResolvable;
}
export interface WirelesscontrollerVapMacFilterListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#id WirelesscontrollerVap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#mac WirelesscontrollerVap#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#mac_filter_policy WirelesscontrollerVap#mac_filter_policy}
  */
  readonly macFilterPolicy?: string;
}

export function wirelesscontrollerVapMacFilterListStructToTerraform(struct?: WirelesscontrollerVapMacFilterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    mac: cdktf.stringToTerraform(struct!.mac),
    mac_filter_policy: cdktf.stringToTerraform(struct!.macFilterPolicy),
  }
}


export function wirelesscontrollerVapMacFilterListStructToHclTerraform(struct?: WirelesscontrollerVapMacFilterListStruct | cdktf.IResolvable): any {
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
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_filter_policy: {
      value: cdktf.stringToHclTerraform(struct!.macFilterPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelesscontrollerVapMacFilterListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelesscontrollerVapMacFilterListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    if (this._macFilterPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.macFilterPolicy = this._macFilterPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelesscontrollerVapMacFilterListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._mac = undefined;
      this._macFilterPolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._mac = value.mac;
      this._macFilterPolicy = value.macFilterPolicy;
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

  // mac_filter_policy - computed: true, optional: true, required: false
  private _macFilterPolicy?: string; 
  public get macFilterPolicy() {
    return this.getStringAttribute('mac_filter_policy');
  }
  public set macFilterPolicy(value: string) {
    this._macFilterPolicy = value;
  }
  public resetMacFilterPolicy() {
    this._macFilterPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macFilterPolicyInput() {
    return this._macFilterPolicy;
  }
}

export class WirelesscontrollerVapMacFilterListStructList extends cdktf.ComplexList {
  public internalValue? : WirelesscontrollerVapMacFilterListStruct[] | cdktf.IResolvable

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
  public get(index: number): WirelesscontrollerVapMacFilterListStructOutputReference {
    return new WirelesscontrollerVapMacFilterListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelesscontrollerVapMpskKeyMpskSchedules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#name WirelesscontrollerVap#name}
  */
  readonly name?: string;
}

export function wirelesscontrollerVapMpskKeyMpskSchedulesToTerraform(struct?: WirelesscontrollerVapMpskKeyMpskSchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function wirelesscontrollerVapMpskKeyMpskSchedulesToHclTerraform(struct?: WirelesscontrollerVapMpskKeyMpskSchedules | cdktf.IResolvable): any {
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

export class WirelesscontrollerVapMpskKeyMpskSchedulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelesscontrollerVapMpskKeyMpskSchedules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WirelesscontrollerVapMpskKeyMpskSchedules | cdktf.IResolvable | undefined) {
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

export class WirelesscontrollerVapMpskKeyMpskSchedulesList extends cdktf.ComplexList {
  public internalValue? : WirelesscontrollerVapMpskKeyMpskSchedules[] | cdktf.IResolvable

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
  public get(index: number): WirelesscontrollerVapMpskKeyMpskSchedulesOutputReference {
    return new WirelesscontrollerVapMpskKeyMpskSchedulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelesscontrollerVapMpskKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#comment WirelesscontrollerVap#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#concurrent_clients WirelesscontrollerVap#concurrent_clients}
  */
  readonly concurrentClients?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#key_name WirelesscontrollerVap#key_name}
  */
  readonly keyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#passphrase WirelesscontrollerVap#passphrase}
  */
  readonly passphrase?: string;
  /**
  * mpsk_schedules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#mpsk_schedules WirelesscontrollerVap#mpsk_schedules}
  */
  readonly mpskSchedules?: WirelesscontrollerVapMpskKeyMpskSchedules[] | cdktf.IResolvable;
}

export function wirelesscontrollerVapMpskKeyToTerraform(struct?: WirelesscontrollerVapMpskKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    concurrent_clients: cdktf.stringToTerraform(struct!.concurrentClients),
    key_name: cdktf.stringToTerraform(struct!.keyName),
    passphrase: cdktf.stringToTerraform(struct!.passphrase),
    mpsk_schedules: cdktf.listMapper(wirelesscontrollerVapMpskKeyMpskSchedulesToTerraform, true)(struct!.mpskSchedules),
  }
}


export function wirelesscontrollerVapMpskKeyToHclTerraform(struct?: WirelesscontrollerVapMpskKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    concurrent_clients: {
      value: cdktf.stringToHclTerraform(struct!.concurrentClients),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_name: {
      value: cdktf.stringToHclTerraform(struct!.keyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passphrase: {
      value: cdktf.stringToHclTerraform(struct!.passphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mpsk_schedules: {
      value: cdktf.listMapperHcl(wirelesscontrollerVapMpskKeyMpskSchedulesToHclTerraform, true)(struct!.mpskSchedules),
      isBlock: true,
      type: "set",
      storageClassType: "WirelesscontrollerVapMpskKeyMpskSchedulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelesscontrollerVapMpskKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelesscontrollerVapMpskKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._concurrentClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentClients = this._concurrentClients;
    }
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._passphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphrase = this._passphrase;
    }
    if (this._mpskSchedules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mpskSchedules = this._mpskSchedules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelesscontrollerVapMpskKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._concurrentClients = undefined;
      this._keyName = undefined;
      this._passphrase = undefined;
      this._mpskSchedules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._concurrentClients = value.concurrentClients;
      this._keyName = value.keyName;
      this._passphrase = value.passphrase;
      this._mpskSchedules.internalValue = value.mpskSchedules;
    }
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

  // concurrent_clients - computed: false, optional: true, required: false
  private _concurrentClients?: string; 
  public get concurrentClients() {
    return this.getStringAttribute('concurrent_clients');
  }
  public set concurrentClients(value: string) {
    this._concurrentClients = value;
  }
  public resetConcurrentClients() {
    this._concurrentClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentClientsInput() {
    return this._concurrentClients;
  }

  // key_name - computed: false, optional: true, required: false
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  public resetKeyName() {
    this._keyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // passphrase - computed: false, optional: true, required: false
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }

  // mpsk_schedules - computed: false, optional: true, required: false
  private _mpskSchedules = new WirelesscontrollerVapMpskKeyMpskSchedulesList(this, "mpsk_schedules", true);
  public get mpskSchedules() {
    return this._mpskSchedules;
  }
  public putMpskSchedules(value: WirelesscontrollerVapMpskKeyMpskSchedules[] | cdktf.IResolvable) {
    this._mpskSchedules.internalValue = value;
  }
  public resetMpskSchedules() {
    this._mpskSchedules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mpskSchedulesInput() {
    return this._mpskSchedules.internalValue;
  }
}

export class WirelesscontrollerVapMpskKeyList extends cdktf.ComplexList {
  public internalValue? : WirelesscontrollerVapMpskKey[] | cdktf.IResolvable

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
  public get(index: number): WirelesscontrollerVapMpskKeyOutputReference {
    return new WirelesscontrollerVapMpskKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelesscontrollerVapPortalMessageOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#auth_disclaimer_page WirelesscontrollerVap#auth_disclaimer_page}
  */
  readonly authDisclaimerPage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#auth_login_failed_page WirelesscontrollerVap#auth_login_failed_page}
  */
  readonly authLoginFailedPage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#auth_login_page WirelesscontrollerVap#auth_login_page}
  */
  readonly authLoginPage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#auth_reject_page WirelesscontrollerVap#auth_reject_page}
  */
  readonly authRejectPage?: string;
}

export function wirelesscontrollerVapPortalMessageOverridesToTerraform(struct?: WirelesscontrollerVapPortalMessageOverridesOutputReference | WirelesscontrollerVapPortalMessageOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_disclaimer_page: cdktf.stringToTerraform(struct!.authDisclaimerPage),
    auth_login_failed_page: cdktf.stringToTerraform(struct!.authLoginFailedPage),
    auth_login_page: cdktf.stringToTerraform(struct!.authLoginPage),
    auth_reject_page: cdktf.stringToTerraform(struct!.authRejectPage),
  }
}


export function wirelesscontrollerVapPortalMessageOverridesToHclTerraform(struct?: WirelesscontrollerVapPortalMessageOverridesOutputReference | WirelesscontrollerVapPortalMessageOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_disclaimer_page: {
      value: cdktf.stringToHclTerraform(struct!.authDisclaimerPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_login_failed_page: {
      value: cdktf.stringToHclTerraform(struct!.authLoginFailedPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_login_page: {
      value: cdktf.stringToHclTerraform(struct!.authLoginPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_reject_page: {
      value: cdktf.stringToHclTerraform(struct!.authRejectPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelesscontrollerVapPortalMessageOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WirelesscontrollerVapPortalMessageOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authDisclaimerPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.authDisclaimerPage = this._authDisclaimerPage;
    }
    if (this._authLoginFailedPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.authLoginFailedPage = this._authLoginFailedPage;
    }
    if (this._authLoginPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.authLoginPage = this._authLoginPage;
    }
    if (this._authRejectPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.authRejectPage = this._authRejectPage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelesscontrollerVapPortalMessageOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authDisclaimerPage = undefined;
      this._authLoginFailedPage = undefined;
      this._authLoginPage = undefined;
      this._authRejectPage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authDisclaimerPage = value.authDisclaimerPage;
      this._authLoginFailedPage = value.authLoginFailedPage;
      this._authLoginPage = value.authLoginPage;
      this._authRejectPage = value.authRejectPage;
    }
  }

  // auth_disclaimer_page - computed: false, optional: true, required: false
  private _authDisclaimerPage?: string; 
  public get authDisclaimerPage() {
    return this.getStringAttribute('auth_disclaimer_page');
  }
  public set authDisclaimerPage(value: string) {
    this._authDisclaimerPage = value;
  }
  public resetAuthDisclaimerPage() {
    this._authDisclaimerPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authDisclaimerPageInput() {
    return this._authDisclaimerPage;
  }

  // auth_login_failed_page - computed: false, optional: true, required: false
  private _authLoginFailedPage?: string; 
  public get authLoginFailedPage() {
    return this.getStringAttribute('auth_login_failed_page');
  }
  public set authLoginFailedPage(value: string) {
    this._authLoginFailedPage = value;
  }
  public resetAuthLoginFailedPage() {
    this._authLoginFailedPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authLoginFailedPageInput() {
    return this._authLoginFailedPage;
  }

  // auth_login_page - computed: false, optional: true, required: false
  private _authLoginPage?: string; 
  public get authLoginPage() {
    return this.getStringAttribute('auth_login_page');
  }
  public set authLoginPage(value: string) {
    this._authLoginPage = value;
  }
  public resetAuthLoginPage() {
    this._authLoginPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authLoginPageInput() {
    return this._authLoginPage;
  }

  // auth_reject_page - computed: false, optional: true, required: false
  private _authRejectPage?: string; 
  public get authRejectPage() {
    return this.getStringAttribute('auth_reject_page');
  }
  public set authRejectPage(value: string) {
    this._authRejectPage = value;
  }
  public resetAuthRejectPage() {
    this._authRejectPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authRejectPageInput() {
    return this._authRejectPage;
  }
}
export interface WirelesscontrollerVapRadiusMacAuthUsergroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#name WirelesscontrollerVap#name}
  */
  readonly name?: string;
}

export function wirelesscontrollerVapRadiusMacAuthUsergroupsToTerraform(struct?: WirelesscontrollerVapRadiusMacAuthUsergroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function wirelesscontrollerVapRadiusMacAuthUsergroupsToHclTerraform(struct?: WirelesscontrollerVapRadiusMacAuthUsergroups | cdktf.IResolvable): any {
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

export class WirelesscontrollerVapRadiusMacAuthUsergroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelesscontrollerVapRadiusMacAuthUsergroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WirelesscontrollerVapRadiusMacAuthUsergroups | cdktf.IResolvable | undefined) {
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

export class WirelesscontrollerVapRadiusMacAuthUsergroupsList extends cdktf.ComplexList {
  public internalValue? : WirelesscontrollerVapRadiusMacAuthUsergroups[] | cdktf.IResolvable

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
  public get(index: number): WirelesscontrollerVapRadiusMacAuthUsergroupsOutputReference {
    return new WirelesscontrollerVapRadiusMacAuthUsergroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelesscontrollerVapSelectedUsergroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#name WirelesscontrollerVap#name}
  */
  readonly name?: string;
}

export function wirelesscontrollerVapSelectedUsergroupsToTerraform(struct?: WirelesscontrollerVapSelectedUsergroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function wirelesscontrollerVapSelectedUsergroupsToHclTerraform(struct?: WirelesscontrollerVapSelectedUsergroups | cdktf.IResolvable): any {
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

export class WirelesscontrollerVapSelectedUsergroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelesscontrollerVapSelectedUsergroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WirelesscontrollerVapSelectedUsergroups | cdktf.IResolvable | undefined) {
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

export class WirelesscontrollerVapSelectedUsergroupsList extends cdktf.ComplexList {
  public internalValue? : WirelesscontrollerVapSelectedUsergroups[] | cdktf.IResolvable

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
  public get(index: number): WirelesscontrollerVapSelectedUsergroupsOutputReference {
    return new WirelesscontrollerVapSelectedUsergroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelesscontrollerVapUsergroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#name WirelesscontrollerVap#name}
  */
  readonly name?: string;
}

export function wirelesscontrollerVapUsergroupToTerraform(struct?: WirelesscontrollerVapUsergroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function wirelesscontrollerVapUsergroupToHclTerraform(struct?: WirelesscontrollerVapUsergroup | cdktf.IResolvable): any {
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

export class WirelesscontrollerVapUsergroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelesscontrollerVapUsergroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WirelesscontrollerVapUsergroup | cdktf.IResolvable | undefined) {
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

export class WirelesscontrollerVapUsergroupList extends cdktf.ComplexList {
  public internalValue? : WirelesscontrollerVapUsergroup[] | cdktf.IResolvable

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
  public get(index: number): WirelesscontrollerVapUsergroupOutputReference {
    return new WirelesscontrollerVapUsergroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelesscontrollerVapVlanName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#name WirelesscontrollerVap#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#vlan_id WirelesscontrollerVap#vlan_id}
  */
  readonly vlanId?: number;
}

export function wirelesscontrollerVapVlanNameToTerraform(struct?: WirelesscontrollerVapVlanName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
  }
}


export function wirelesscontrollerVapVlanNameToHclTerraform(struct?: WirelesscontrollerVapVlanName | cdktf.IResolvable): any {
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
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelesscontrollerVapVlanNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelesscontrollerVapVlanName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelesscontrollerVapVlanName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._vlanId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._vlanId = value.vlanId;
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
}

export class WirelesscontrollerVapVlanNameList extends cdktf.ComplexList {
  public internalValue? : WirelesscontrollerVapVlanName[] | cdktf.IResolvable

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
  public get(index: number): WirelesscontrollerVapVlanNameOutputReference {
    return new WirelesscontrollerVapVlanNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelesscontrollerVapVlanPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#id WirelesscontrollerVap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#wtp_group WirelesscontrollerVap#wtp_group}
  */
  readonly wtpGroup?: string;
}

export function wirelesscontrollerVapVlanPoolToTerraform(struct?: WirelesscontrollerVapVlanPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    wtp_group: cdktf.stringToTerraform(struct!.wtpGroup),
  }
}


export function wirelesscontrollerVapVlanPoolToHclTerraform(struct?: WirelesscontrollerVapVlanPool | cdktf.IResolvable): any {
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
    wtp_group: {
      value: cdktf.stringToHclTerraform(struct!.wtpGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelesscontrollerVapVlanPoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelesscontrollerVapVlanPool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._wtpGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.wtpGroup = this._wtpGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelesscontrollerVapVlanPool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._wtpGroup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._wtpGroup = value.wtpGroup;
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

  // wtp_group - computed: false, optional: true, required: false
  private _wtpGroup?: string; 
  public get wtpGroup() {
    return this.getStringAttribute('wtp_group');
  }
  public set wtpGroup(value: string) {
    this._wtpGroup = value;
  }
  public resetWtpGroup() {
    this._wtpGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wtpGroupInput() {
    return this._wtpGroup;
  }
}

export class WirelesscontrollerVapVlanPoolList extends cdktf.ComplexList {
  public internalValue? : WirelesscontrollerVapVlanPool[] | cdktf.IResolvable

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
  public get(index: number): WirelesscontrollerVapVlanPoolOutputReference {
    return new WirelesscontrollerVapVlanPoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap fortios_wirelesscontroller_vap}
*/
export class WirelesscontrollerVap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_wirelesscontroller_vap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelesscontrollerVap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelesscontrollerVap to import
  * @param importFromId The id of the existing WirelesscontrollerVap that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelesscontrollerVap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_wirelesscontroller_vap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_vap fortios_wirelesscontroller_vap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelesscontrollerVapConfig
  */
  public constructor(scope: Construct, id: string, config: WirelesscontrollerVapConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_wirelesscontroller_vap',
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
    this._accessControlList = config.accessControlList;
    this._acctInterimInterval = config.acctInterimInterval;
    this._additionalAkms = config.additionalAkms;
    this._addressGroup = config.addressGroup;
    this._addressGroupPolicy = config.addressGroupPolicy;
    this._akm24Only = config.akm24Only;
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
    this._beaconProtection = config.beaconProtection;
    this._broadcastSsid = config.broadcastSsid;
    this._broadcastSuppression = config.broadcastSuppression;
    this._bssColorPartial = config.bssColorPartial;
    this._bstmDisassociationImminent = config.bstmDisassociationImminent;
    this._bstmLoadBalancingDisassocTimer = config.bstmLoadBalancingDisassocTimer;
    this._bstmRssiDisassocTimer = config.bstmRssiDisassocTimer;
    this._calledStationIdType = config.calledStationIdType;
    this._captiveNetworkAssistantBypass = config.captiveNetworkAssistantBypass;
    this._captivePortal = config.captivePortal;
    this._captivePortalAcName = config.captivePortalAcName;
    this._captivePortalAuthTimeout = config.captivePortalAuthTimeout;
    this._captivePortalFwAccounting = config.captivePortalFwAccounting;
    this._captivePortalMacauthRadiusSecret = config.captivePortalMacauthRadiusSecret;
    this._captivePortalMacauthRadiusServer = config.captivePortalMacauthRadiusServer;
    this._captivePortalRadiusSecret = config.captivePortalRadiusSecret;
    this._captivePortalRadiusServer = config.captivePortalRadiusServer;
    this._captivePortalSessionTimeoutInterval = config.captivePortalSessionTimeoutInterval;
    this._dhcpAddressEnforcement = config.dhcpAddressEnforcement;
    this._dhcpLeaseTime = config.dhcpLeaseTime;
    this._dhcpOption43Insertion = config.dhcpOption43Insertion;
    this._dhcpOption82CircuitIdInsertion = config.dhcpOption82CircuitIdInsertion;
    this._dhcpOption82Insertion = config.dhcpOption82Insertion;
    this._dhcpOption82RemoteIdInsertion = config.dhcpOption82RemoteIdInsertion;
    this._domainNameStripping = config.domainNameStripping;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._dynamicVlan = config.dynamicVlan;
    this._eapReauth = config.eapReauth;
    this._eapReauthIntv = config.eapReauthIntv;
    this._eapolKeyRetries = config.eapolKeyRetries;
    this._encrypt = config.encrypt;
    this._externalFastRoaming = config.externalFastRoaming;
    this._externalLogout = config.externalLogout;
    this._externalPreAuth = config.externalPreAuth;
    this._externalWeb = config.externalWeb;
    this._externalWebFormat = config.externalWebFormat;
    this._fastBssTransition = config.fastBssTransition;
    this._fastRoaming = config.fastRoaming;
    this._ftMobilityDomain = config.ftMobilityDomain;
    this._ftOverDs = config.ftOverDs;
    this._ftR0KeyLifetime = config.ftR0KeyLifetime;
    this._gasComebackDelay = config.gasComebackDelay;
    this._gasFragmentationLimit = config.gasFragmentationLimit;
    this._getAllTables = config.fetchAllTables;
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
    this._localLanPartition = config.localLanPartition;
    this._localStandalone = config.localStandalone;
    this._localStandaloneDns = config.localStandaloneDns;
    this._localStandaloneDnsIp = config.localStandaloneDnsIp;
    this._localStandaloneNat = config.localStandaloneNat;
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
    this._name = config.name;
    this._nasFilterRule = config.nasFilterRule;
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
    this._preAuth = config.preAuth;
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
    this._rates11BeMcsMap = config.rates11BeMcsMap;
    this._rates11BeMcsMap160 = config.rates11BeMcsMap160;
    this._rates11BeMcsMap320 = config.rates11BeMcsMap320;
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
    this._secondaryWagProfile = config.secondaryWagProfile;
    this._security = config.security;
    this._securityExemptList = config.securityExemptList;
    this._securityObsoleteOption = config.securityObsoleteOption;
    this._securityRedirectUrl = config.securityRedirectUrl;
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
    this._utmLog = config.utmLog;
    this._utmProfile = config.utmProfile;
    this._utmStatus = config.utmStatus;
    this._vdomparam = config.vdomparam;
    this._vlanAuto = config.vlanAuto;
    this._vlanPooling = config.vlanPooling;
    this._vlanid = config.vlanid;
    this._voiceEnterprise = config.voiceEnterprise;
    this._webfilterProfile = config.webfilterProfile;
    this._macFilterList.internalValue = config.macFilterList;
    this._mpskKey.internalValue = config.mpskKey;
    this._portalMessageOverrides.internalValue = config.portalMessageOverrides;
    this._radiusMacAuthUsergroups.internalValue = config.radiusMacAuthUsergroups;
    this._selectedUsergroups.internalValue = config.selectedUsergroups;
    this._usergroup.internalValue = config.usergroup;
    this._vlanName.internalValue = config.vlanName;
    this._vlanPool.internalValue = config.vlanPool;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // additional_akms - computed: false, optional: true, required: false
  private _additionalAkms?: string; 
  public get additionalAkms() {
    return this.getStringAttribute('additional_akms');
  }
  public set additionalAkms(value: string) {
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

  // akm24_only - computed: true, optional: true, required: false
  private _akm24Only?: string; 
  public get akm24Only() {
    return this.getStringAttribute('akm24_only');
  }
  public set akm24Only(value: string) {
    this._akm24Only = value;
  }
  public resetAkm24Only() {
    this._akm24Only = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get akm24OnlyInput() {
    return this._akm24Only;
  }

  // alias - computed: true, optional: true, required: false
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

  // auth - computed: true, optional: true, required: false
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

  // beacon_advertising - computed: false, optional: true, required: false
  private _beaconAdvertising?: string; 
  public get beaconAdvertising() {
    return this.getStringAttribute('beacon_advertising');
  }
  public set beaconAdvertising(value: string) {
    this._beaconAdvertising = value;
  }
  public resetBeaconAdvertising() {
    this._beaconAdvertising = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beaconAdvertisingInput() {
    return this._beaconAdvertising;
  }

  // beacon_protection - computed: true, optional: true, required: false
  private _beaconProtection?: string; 
  public get beaconProtection() {
    return this.getStringAttribute('beacon_protection');
  }
  public set beaconProtection(value: string) {
    this._beaconProtection = value;
  }
  public resetBeaconProtection() {
    this._beaconProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beaconProtectionInput() {
    return this._beaconProtection;
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
  private _broadcastSuppression?: string; 
  public get broadcastSuppression() {
    return this.getStringAttribute('broadcast_suppression');
  }
  public set broadcastSuppression(value: string) {
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

  // called_station_id_type - computed: true, optional: true, required: false
  private _calledStationIdType?: string; 
  public get calledStationIdType() {
    return this.getStringAttribute('called_station_id_type');
  }
  public set calledStationIdType(value: string) {
    this._calledStationIdType = value;
  }
  public resetCalledStationIdType() {
    this._calledStationIdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calledStationIdTypeInput() {
    return this._calledStationIdType;
  }

  // captive_network_assistant_bypass - computed: true, optional: true, required: false
  private _captiveNetworkAssistantBypass?: string; 
  public get captiveNetworkAssistantBypass() {
    return this.getStringAttribute('captive_network_assistant_bypass');
  }
  public set captiveNetworkAssistantBypass(value: string) {
    this._captiveNetworkAssistantBypass = value;
  }
  public resetCaptiveNetworkAssistantBypass() {
    this._captiveNetworkAssistantBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captiveNetworkAssistantBypassInput() {
    return this._captiveNetworkAssistantBypass;
  }

  // captive_portal - computed: true, optional: true, required: false
  private _captivePortal?: string; 
  public get captivePortal() {
    return this.getStringAttribute('captive_portal');
  }
  public set captivePortal(value: string) {
    this._captivePortal = value;
  }
  public resetCaptivePortal() {
    this._captivePortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captivePortalInput() {
    return this._captivePortal;
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

  // captive_portal_macauth_radius_secret - computed: false, optional: true, required: false
  private _captivePortalMacauthRadiusSecret?: string; 
  public get captivePortalMacauthRadiusSecret() {
    return this.getStringAttribute('captive_portal_macauth_radius_secret');
  }
  public set captivePortalMacauthRadiusSecret(value: string) {
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

  // captive_portal_radius_secret - computed: false, optional: true, required: false
  private _captivePortalRadiusSecret?: string; 
  public get captivePortalRadiusSecret() {
    return this.getStringAttribute('captive_portal_radius_secret');
  }
  public set captivePortalRadiusSecret(value: string) {
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

  // dhcp_lease_time - computed: true, optional: true, required: false
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

  // domain_name_stripping - computed: true, optional: true, required: false
  private _domainNameStripping?: string; 
  public get domainNameStripping() {
    return this.getStringAttribute('domain_name_stripping');
  }
  public set domainNameStripping(value: string) {
    this._domainNameStripping = value;
  }
  public resetDomainNameStripping() {
    this._domainNameStripping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameStrippingInput() {
    return this._domainNameStripping;
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

  // dynamic_vlan - computed: true, optional: true, required: false
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

  // external_pre_auth - computed: true, optional: true, required: false
  private _externalPreAuth?: string; 
  public get externalPreAuth() {
    return this.getStringAttribute('external_pre_auth');
  }
  public set externalPreAuth(value: string) {
    this._externalPreAuth = value;
  }
  public resetExternalPreAuth() {
    this._externalPreAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalPreAuthInput() {
    return this._externalPreAuth;
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

  // external_web_format - computed: true, optional: true, required: false
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

  // ft_mobility_domain - computed: true, optional: true, required: false
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

  // ft_over_ds - computed: true, optional: true, required: false
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

  // ft_r0_key_lifetime - computed: true, optional: true, required: false
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
  private _ipv6Rules?: string; 
  public get ipv6Rules() {
    return this.getStringAttribute('ipv6_rules');
  }
  public set ipv6Rules(value: string) {
    this._ipv6Rules = value;
  }
  public resetIpv6Rules() {
    this._ipv6Rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6RulesInput() {
    return this._ipv6Rules;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // keyindex - computed: true, optional: true, required: false
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

  // local_authentication - computed: true, optional: true, required: false
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

  // local_lan_partition - computed: true, optional: true, required: false
  private _localLanPartition?: string; 
  public get localLanPartition() {
    return this.getStringAttribute('local_lan_partition');
  }
  public set localLanPartition(value: string) {
    this._localLanPartition = value;
  }
  public resetLocalLanPartition() {
    this._localLanPartition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localLanPartitionInput() {
    return this._localLanPartition;
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

  // local_standalone_dns_ip - computed: false, optional: true, required: false
  private _localStandaloneDnsIp?: string; 
  public get localStandaloneDnsIp() {
    return this.getStringAttribute('local_standalone_dns_ip');
  }
  public set localStandaloneDnsIp(value: string) {
    this._localStandaloneDnsIp = value;
  }
  public resetLocalStandaloneDnsIp() {
    this._localStandaloneDnsIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localStandaloneDnsIpInput() {
    return this._localStandaloneDnsIp;
  }

  // local_standalone_nat - computed: true, optional: true, required: false
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

  // nas_filter_rule - computed: true, optional: true, required: false
  private _nasFilterRule?: string; 
  public get nasFilterRule() {
    return this.getStringAttribute('nas_filter_rule');
  }
  public set nasFilterRule(value: string) {
    this._nasFilterRule = value;
  }
  public resetNasFilterRule() {
    this._nasFilterRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nasFilterRuleInput() {
    return this._nasFilterRule;
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

  // owe_groups - computed: false, optional: true, required: false
  private _oweGroups?: string; 
  public get oweGroups() {
    return this.getStringAttribute('owe_groups');
  }
  public set oweGroups(value: string) {
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

  // passphrase - computed: false, optional: true, required: false
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
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

  // portal_type - computed: true, optional: true, required: false
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

  // pre_auth - computed: true, optional: true, required: false
  private _preAuth?: string; 
  public get preAuth() {
    return this.getStringAttribute('pre_auth');
  }
  public set preAuth(value: string) {
    this._preAuth = value;
  }
  public resetPreAuth() {
    this._preAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preAuthInput() {
    return this._preAuth;
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

  // rates_11a - computed: false, optional: true, required: false
  private _rates11A?: string; 
  public get rates11A() {
    return this.getStringAttribute('rates_11a');
  }
  public set rates11A(value: string) {
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

  // rates_11ac_ss12 - computed: false, optional: true, required: false
  private _rates11AcSs12?: string; 
  public get rates11AcSs12() {
    return this.getStringAttribute('rates_11ac_ss12');
  }
  public set rates11AcSs12(value: string) {
    this._rates11AcSs12 = value;
  }
  public resetRates11AcSs12() {
    this._rates11AcSs12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rates11AcSs12Input() {
    return this._rates11AcSs12;
  }

  // rates_11ac_ss34 - computed: false, optional: true, required: false
  private _rates11AcSs34?: string; 
  public get rates11AcSs34() {
    return this.getStringAttribute('rates_11ac_ss34');
  }
  public set rates11AcSs34(value: string) {
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

  // rates_11ax_ss12 - computed: false, optional: true, required: false
  private _rates11AxSs12?: string; 
  public get rates11AxSs12() {
    return this.getStringAttribute('rates_11ax_ss12');
  }
  public set rates11AxSs12(value: string) {
    this._rates11AxSs12 = value;
  }
  public resetRates11AxSs12() {
    this._rates11AxSs12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rates11AxSs12Input() {
    return this._rates11AxSs12;
  }

  // rates_11ax_ss34 - computed: false, optional: true, required: false
  private _rates11AxSs34?: string; 
  public get rates11AxSs34() {
    return this.getStringAttribute('rates_11ax_ss34');
  }
  public set rates11AxSs34(value: string) {
    this._rates11AxSs34 = value;
  }
  public resetRates11AxSs34() {
    this._rates11AxSs34 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rates11AxSs34Input() {
    return this._rates11AxSs34;
  }

  // rates_11be_mcs_map - computed: false, optional: true, required: false
  private _rates11BeMcsMap?: string; 
  public get rates11BeMcsMap() {
    return this.getStringAttribute('rates_11be_mcs_map');
  }
  public set rates11BeMcsMap(value: string) {
    this._rates11BeMcsMap = value;
  }
  public resetRates11BeMcsMap() {
    this._rates11BeMcsMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rates11BeMcsMapInput() {
    return this._rates11BeMcsMap;
  }

  // rates_11be_mcs_map_160 - computed: false, optional: true, required: false
  private _rates11BeMcsMap160?: string; 
  public get rates11BeMcsMap160() {
    return this.getStringAttribute('rates_11be_mcs_map_160');
  }
  public set rates11BeMcsMap160(value: string) {
    this._rates11BeMcsMap160 = value;
  }
  public resetRates11BeMcsMap160() {
    this._rates11BeMcsMap160 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rates11BeMcsMap160Input() {
    return this._rates11BeMcsMap160;
  }

  // rates_11be_mcs_map_320 - computed: false, optional: true, required: false
  private _rates11BeMcsMap320?: string; 
  public get rates11BeMcsMap320() {
    return this.getStringAttribute('rates_11be_mcs_map_320');
  }
  public set rates11BeMcsMap320(value: string) {
    this._rates11BeMcsMap320 = value;
  }
  public resetRates11BeMcsMap320() {
    this._rates11BeMcsMap320 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rates11BeMcsMap320Input() {
    return this._rates11BeMcsMap320;
  }

  // rates_11bg - computed: false, optional: true, required: false
  private _rates11Bg?: string; 
  public get rates11Bg() {
    return this.getStringAttribute('rates_11bg');
  }
  public set rates11Bg(value: string) {
    this._rates11Bg = value;
  }
  public resetRates11Bg() {
    this._rates11Bg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rates11BgInput() {
    return this._rates11Bg;
  }

  // rates_11n_ss12 - computed: false, optional: true, required: false
  private _rates11NSs12?: string; 
  public get rates11NSs12() {
    return this.getStringAttribute('rates_11n_ss12');
  }
  public set rates11NSs12(value: string) {
    this._rates11NSs12 = value;
  }
  public resetRates11NSs12() {
    this._rates11NSs12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rates11NSs12Input() {
    return this._rates11NSs12;
  }

  // rates_11n_ss34 - computed: false, optional: true, required: false
  private _rates11NSs34?: string; 
  public get rates11NSs34() {
    return this.getStringAttribute('rates_11n_ss34');
  }
  public set rates11NSs34(value: string) {
    this._rates11NSs34 = value;
  }
  public resetRates11NSs34() {
    this._rates11NSs34 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rates11NSs34Input() {
    return this._rates11NSs34;
  }

  // roaming_acct_interim_update - computed: true, optional: true, required: false
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

  // sae_groups - computed: false, optional: true, required: false
  private _saeGroups?: string; 
  public get saeGroups() {
    return this.getStringAttribute('sae_groups');
  }
  public set saeGroups(value: string) {
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

  // sae_hnp_only - computed: true, optional: true, required: false
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

  // sae_password - computed: false, optional: true, required: false
  private _saePassword?: string; 
  public get saePassword() {
    return this.getStringAttribute('sae_password');
  }
  public set saePassword(value: string) {
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

  // tunnel_echo_interval - computed: true, optional: true, required: false
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

  // tunnel_fallback_interval - computed: true, optional: true, required: false
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

  // mac_filter_list - computed: false, optional: true, required: false
  private _macFilterList = new WirelesscontrollerVapMacFilterListStructList(this, "mac_filter_list", false);
  public get macFilterList() {
    return this._macFilterList;
  }
  public putMacFilterList(value: WirelesscontrollerVapMacFilterListStruct[] | cdktf.IResolvable) {
    this._macFilterList.internalValue = value;
  }
  public resetMacFilterList() {
    this._macFilterList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macFilterListInput() {
    return this._macFilterList.internalValue;
  }

  // mpsk_key - computed: false, optional: true, required: false
  private _mpskKey = new WirelesscontrollerVapMpskKeyList(this, "mpsk_key", false);
  public get mpskKey() {
    return this._mpskKey;
  }
  public putMpskKey(value: WirelesscontrollerVapMpskKey[] | cdktf.IResolvable) {
    this._mpskKey.internalValue = value;
  }
  public resetMpskKey() {
    this._mpskKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mpskKeyInput() {
    return this._mpskKey.internalValue;
  }

  // portal_message_overrides - computed: false, optional: true, required: false
  private _portalMessageOverrides = new WirelesscontrollerVapPortalMessageOverridesOutputReference(this, "portal_message_overrides");
  public get portalMessageOverrides() {
    return this._portalMessageOverrides;
  }
  public putPortalMessageOverrides(value: WirelesscontrollerVapPortalMessageOverrides) {
    this._portalMessageOverrides.internalValue = value;
  }
  public resetPortalMessageOverrides() {
    this._portalMessageOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalMessageOverridesInput() {
    return this._portalMessageOverrides.internalValue;
  }

  // radius_mac_auth_usergroups - computed: false, optional: true, required: false
  private _radiusMacAuthUsergroups = new WirelesscontrollerVapRadiusMacAuthUsergroupsList(this, "radius_mac_auth_usergroups", true);
  public get radiusMacAuthUsergroups() {
    return this._radiusMacAuthUsergroups;
  }
  public putRadiusMacAuthUsergroups(value: WirelesscontrollerVapRadiusMacAuthUsergroups[] | cdktf.IResolvable) {
    this._radiusMacAuthUsergroups.internalValue = value;
  }
  public resetRadiusMacAuthUsergroups() {
    this._radiusMacAuthUsergroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusMacAuthUsergroupsInput() {
    return this._radiusMacAuthUsergroups.internalValue;
  }

  // selected_usergroups - computed: false, optional: true, required: false
  private _selectedUsergroups = new WirelesscontrollerVapSelectedUsergroupsList(this, "selected_usergroups", true);
  public get selectedUsergroups() {
    return this._selectedUsergroups;
  }
  public putSelectedUsergroups(value: WirelesscontrollerVapSelectedUsergroups[] | cdktf.IResolvable) {
    this._selectedUsergroups.internalValue = value;
  }
  public resetSelectedUsergroups() {
    this._selectedUsergroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedUsergroupsInput() {
    return this._selectedUsergroups.internalValue;
  }

  // usergroup - computed: false, optional: true, required: false
  private _usergroup = new WirelesscontrollerVapUsergroupList(this, "usergroup", true);
  public get usergroup() {
    return this._usergroup;
  }
  public putUsergroup(value: WirelesscontrollerVapUsergroup[] | cdktf.IResolvable) {
    this._usergroup.internalValue = value;
  }
  public resetUsergroup() {
    this._usergroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usergroupInput() {
    return this._usergroup.internalValue;
  }

  // vlan_name - computed: false, optional: true, required: false
  private _vlanName = new WirelesscontrollerVapVlanNameList(this, "vlan_name", false);
  public get vlanName() {
    return this._vlanName;
  }
  public putVlanName(value: WirelesscontrollerVapVlanName[] | cdktf.IResolvable) {
    this._vlanName.internalValue = value;
  }
  public resetVlanName() {
    this._vlanName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanNameInput() {
    return this._vlanName.internalValue;
  }

  // vlan_pool - computed: false, optional: true, required: false
  private _vlanPool = new WirelesscontrollerVapVlanPoolList(this, "vlan_pool", false);
  public get vlanPool() {
    return this._vlanPool;
  }
  public putVlanPool(value: WirelesscontrollerVapVlanPool[] | cdktf.IResolvable) {
    this._vlanPool.internalValue = value;
  }
  public resetVlanPool() {
    this._vlanPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanPoolInput() {
    return this._vlanPool.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_control_list: cdktf.stringToTerraform(this._accessControlList),
      acct_interim_interval: cdktf.numberToTerraform(this._acctInterimInterval),
      additional_akms: cdktf.stringToTerraform(this._additionalAkms),
      address_group: cdktf.stringToTerraform(this._addressGroup),
      address_group_policy: cdktf.stringToTerraform(this._addressGroupPolicy),
      akm24_only: cdktf.stringToTerraform(this._akm24Only),
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
      beacon_advertising: cdktf.stringToTerraform(this._beaconAdvertising),
      beacon_protection: cdktf.stringToTerraform(this._beaconProtection),
      broadcast_ssid: cdktf.stringToTerraform(this._broadcastSsid),
      broadcast_suppression: cdktf.stringToTerraform(this._broadcastSuppression),
      bss_color_partial: cdktf.stringToTerraform(this._bssColorPartial),
      bstm_disassociation_imminent: cdktf.stringToTerraform(this._bstmDisassociationImminent),
      bstm_load_balancing_disassoc_timer: cdktf.numberToTerraform(this._bstmLoadBalancingDisassocTimer),
      bstm_rssi_disassoc_timer: cdktf.numberToTerraform(this._bstmRssiDisassocTimer),
      called_station_id_type: cdktf.stringToTerraform(this._calledStationIdType),
      captive_network_assistant_bypass: cdktf.stringToTerraform(this._captiveNetworkAssistantBypass),
      captive_portal: cdktf.stringToTerraform(this._captivePortal),
      captive_portal_ac_name: cdktf.stringToTerraform(this._captivePortalAcName),
      captive_portal_auth_timeout: cdktf.numberToTerraform(this._captivePortalAuthTimeout),
      captive_portal_fw_accounting: cdktf.stringToTerraform(this._captivePortalFwAccounting),
      captive_portal_macauth_radius_secret: cdktf.stringToTerraform(this._captivePortalMacauthRadiusSecret),
      captive_portal_macauth_radius_server: cdktf.stringToTerraform(this._captivePortalMacauthRadiusServer),
      captive_portal_radius_secret: cdktf.stringToTerraform(this._captivePortalRadiusSecret),
      captive_portal_radius_server: cdktf.stringToTerraform(this._captivePortalRadiusServer),
      captive_portal_session_timeout_interval: cdktf.numberToTerraform(this._captivePortalSessionTimeoutInterval),
      dhcp_address_enforcement: cdktf.stringToTerraform(this._dhcpAddressEnforcement),
      dhcp_lease_time: cdktf.numberToTerraform(this._dhcpLeaseTime),
      dhcp_option43_insertion: cdktf.stringToTerraform(this._dhcpOption43Insertion),
      dhcp_option82_circuit_id_insertion: cdktf.stringToTerraform(this._dhcpOption82CircuitIdInsertion),
      dhcp_option82_insertion: cdktf.stringToTerraform(this._dhcpOption82Insertion),
      dhcp_option82_remote_id_insertion: cdktf.stringToTerraform(this._dhcpOption82RemoteIdInsertion),
      domain_name_stripping: cdktf.stringToTerraform(this._domainNameStripping),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      dynamic_vlan: cdktf.stringToTerraform(this._dynamicVlan),
      eap_reauth: cdktf.stringToTerraform(this._eapReauth),
      eap_reauth_intv: cdktf.numberToTerraform(this._eapReauthIntv),
      eapol_key_retries: cdktf.stringToTerraform(this._eapolKeyRetries),
      encrypt: cdktf.stringToTerraform(this._encrypt),
      external_fast_roaming: cdktf.stringToTerraform(this._externalFastRoaming),
      external_logout: cdktf.stringToTerraform(this._externalLogout),
      external_pre_auth: cdktf.stringToTerraform(this._externalPreAuth),
      external_web: cdktf.stringToTerraform(this._externalWeb),
      external_web_format: cdktf.stringToTerraform(this._externalWebFormat),
      fast_bss_transition: cdktf.stringToTerraform(this._fastBssTransition),
      fast_roaming: cdktf.stringToTerraform(this._fastRoaming),
      ft_mobility_domain: cdktf.numberToTerraform(this._ftMobilityDomain),
      ft_over_ds: cdktf.stringToTerraform(this._ftOverDs),
      ft_r0_key_lifetime: cdktf.numberToTerraform(this._ftR0KeyLifetime),
      gas_comeback_delay: cdktf.numberToTerraform(this._gasComebackDelay),
      gas_fragmentation_limit: cdktf.numberToTerraform(this._gasFragmentationLimit),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      gtk_rekey: cdktf.stringToTerraform(this._gtkRekey),
      gtk_rekey_intv: cdktf.numberToTerraform(this._gtkRekeyIntv),
      high_efficiency: cdktf.stringToTerraform(this._highEfficiency),
      hotspot20_profile: cdktf.stringToTerraform(this._hotspot20Profile),
      id: cdktf.stringToTerraform(this._id),
      igmp_snooping: cdktf.stringToTerraform(this._igmpSnooping),
      intra_vap_privacy: cdktf.stringToTerraform(this._intraVapPrivacy),
      ip: cdktf.stringToTerraform(this._ip),
      ips_sensor: cdktf.stringToTerraform(this._ipsSensor),
      ipv6_rules: cdktf.stringToTerraform(this._ipv6Rules),
      key: cdktf.stringToTerraform(this._key),
      keyindex: cdktf.numberToTerraform(this._keyindex),
      l3_roaming: cdktf.stringToTerraform(this._l3Roaming),
      l3_roaming_mode: cdktf.stringToTerraform(this._l3RoamingMode),
      ldpc: cdktf.stringToTerraform(this._ldpc),
      local_authentication: cdktf.stringToTerraform(this._localAuthentication),
      local_bridging: cdktf.stringToTerraform(this._localBridging),
      local_lan: cdktf.stringToTerraform(this._localLan),
      local_lan_partition: cdktf.stringToTerraform(this._localLanPartition),
      local_standalone: cdktf.stringToTerraform(this._localStandalone),
      local_standalone_dns: cdktf.stringToTerraform(this._localStandaloneDns),
      local_standalone_dns_ip: cdktf.stringToTerraform(this._localStandaloneDnsIp),
      local_standalone_nat: cdktf.stringToTerraform(this._localStandaloneNat),
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
      name: cdktf.stringToTerraform(this._name),
      nas_filter_rule: cdktf.stringToTerraform(this._nasFilterRule),
      neighbor_report_dual_band: cdktf.stringToTerraform(this._neighborReportDualBand),
      okc: cdktf.stringToTerraform(this._okc),
      osen: cdktf.stringToTerraform(this._osen),
      owe_groups: cdktf.stringToTerraform(this._oweGroups),
      owe_transition: cdktf.stringToTerraform(this._oweTransition),
      owe_transition_ssid: cdktf.stringToTerraform(this._oweTransitionSsid),
      passphrase: cdktf.stringToTerraform(this._passphrase),
      pmf: cdktf.stringToTerraform(this._pmf),
      pmf_assoc_comeback_timeout: cdktf.numberToTerraform(this._pmfAssocComebackTimeout),
      pmf_sa_query_retry_timeout: cdktf.numberToTerraform(this._pmfSaQueryRetryTimeout),
      port_macauth: cdktf.stringToTerraform(this._portMacauth),
      port_macauth_reauth_timeout: cdktf.numberToTerraform(this._portMacauthReauthTimeout),
      port_macauth_timeout: cdktf.numberToTerraform(this._portMacauthTimeout),
      portal_message_override_group: cdktf.stringToTerraform(this._portalMessageOverrideGroup),
      portal_type: cdktf.stringToTerraform(this._portalType),
      pre_auth: cdktf.stringToTerraform(this._preAuth),
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
      radius_mac_mpsk_auth: cdktf.stringToTerraform(this._radiusMacMpskAuth),
      radius_mac_mpsk_timeout: cdktf.numberToTerraform(this._radiusMacMpskTimeout),
      radius_server: cdktf.stringToTerraform(this._radiusServer),
      rates_11a: cdktf.stringToTerraform(this._rates11A),
      rates_11ac_mcs_map: cdktf.stringToTerraform(this._rates11AcMcsMap),
      rates_11ac_ss12: cdktf.stringToTerraform(this._rates11AcSs12),
      rates_11ac_ss34: cdktf.stringToTerraform(this._rates11AcSs34),
      rates_11ax_mcs_map: cdktf.stringToTerraform(this._rates11AxMcsMap),
      rates_11ax_ss12: cdktf.stringToTerraform(this._rates11AxSs12),
      rates_11ax_ss34: cdktf.stringToTerraform(this._rates11AxSs34),
      rates_11be_mcs_map: cdktf.stringToTerraform(this._rates11BeMcsMap),
      rates_11be_mcs_map_160: cdktf.stringToTerraform(this._rates11BeMcsMap160),
      rates_11be_mcs_map_320: cdktf.stringToTerraform(this._rates11BeMcsMap320),
      rates_11bg: cdktf.stringToTerraform(this._rates11Bg),
      rates_11n_ss12: cdktf.stringToTerraform(this._rates11NSs12),
      rates_11n_ss34: cdktf.stringToTerraform(this._rates11NSs34),
      roaming_acct_interim_update: cdktf.stringToTerraform(this._roamingAcctInterimUpdate),
      sae_groups: cdktf.stringToTerraform(this._saeGroups),
      sae_h2e_only: cdktf.stringToTerraform(this._saeH2EOnly),
      sae_hnp_only: cdktf.stringToTerraform(this._saeHnpOnly),
      sae_password: cdktf.stringToTerraform(this._saePassword),
      sae_pk: cdktf.stringToTerraform(this._saePk),
      sae_private_key: cdktf.stringToTerraform(this._saePrivateKey),
      scan_botnet_connections: cdktf.stringToTerraform(this._scanBotnetConnections),
      schedule: cdktf.stringToTerraform(this._schedule),
      secondary_wag_profile: cdktf.stringToTerraform(this._secondaryWagProfile),
      security: cdktf.stringToTerraform(this._security),
      security_exempt_list: cdktf.stringToTerraform(this._securityExemptList),
      security_obsolete_option: cdktf.stringToTerraform(this._securityObsoleteOption),
      security_redirect_url: cdktf.stringToTerraform(this._securityRedirectUrl),
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
      utm_log: cdktf.stringToTerraform(this._utmLog),
      utm_profile: cdktf.stringToTerraform(this._utmProfile),
      utm_status: cdktf.stringToTerraform(this._utmStatus),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      vlan_auto: cdktf.stringToTerraform(this._vlanAuto),
      vlan_pooling: cdktf.stringToTerraform(this._vlanPooling),
      vlanid: cdktf.numberToTerraform(this._vlanid),
      voice_enterprise: cdktf.stringToTerraform(this._voiceEnterprise),
      webfilter_profile: cdktf.stringToTerraform(this._webfilterProfile),
      mac_filter_list: cdktf.listMapper(wirelesscontrollerVapMacFilterListStructToTerraform, true)(this._macFilterList.internalValue),
      mpsk_key: cdktf.listMapper(wirelesscontrollerVapMpskKeyToTerraform, true)(this._mpskKey.internalValue),
      portal_message_overrides: wirelesscontrollerVapPortalMessageOverridesToTerraform(this._portalMessageOverrides.internalValue),
      radius_mac_auth_usergroups: cdktf.listMapper(wirelesscontrollerVapRadiusMacAuthUsergroupsToTerraform, true)(this._radiusMacAuthUsergroups.internalValue),
      selected_usergroups: cdktf.listMapper(wirelesscontrollerVapSelectedUsergroupsToTerraform, true)(this._selectedUsergroups.internalValue),
      usergroup: cdktf.listMapper(wirelesscontrollerVapUsergroupToTerraform, true)(this._usergroup.internalValue),
      vlan_name: cdktf.listMapper(wirelesscontrollerVapVlanNameToTerraform, true)(this._vlanName.internalValue),
      vlan_pool: cdktf.listMapper(wirelesscontrollerVapVlanPoolToTerraform, true)(this._vlanPool.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
        value: cdktf.stringToHclTerraform(this._additionalAkms),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      akm24_only: {
        value: cdktf.stringToHclTerraform(this._akm24Only),
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
        value: cdktf.stringToHclTerraform(this._beaconAdvertising),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      beacon_protection: {
        value: cdktf.stringToHclTerraform(this._beaconProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      broadcast_ssid: {
        value: cdktf.stringToHclTerraform(this._broadcastSsid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      broadcast_suppression: {
        value: cdktf.stringToHclTerraform(this._broadcastSuppression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      called_station_id_type: {
        value: cdktf.stringToHclTerraform(this._calledStationIdType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      captive_network_assistant_bypass: {
        value: cdktf.stringToHclTerraform(this._captiveNetworkAssistantBypass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      captive_portal: {
        value: cdktf.stringToHclTerraform(this._captivePortal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
        value: cdktf.stringToHclTerraform(this._captivePortalMacauthRadiusSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      captive_portal_macauth_radius_server: {
        value: cdktf.stringToHclTerraform(this._captivePortalMacauthRadiusServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      captive_portal_radius_secret: {
        value: cdktf.stringToHclTerraform(this._captivePortalRadiusSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      domain_name_stripping: {
        value: cdktf.stringToHclTerraform(this._domainNameStripping),
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
      external_pre_auth: {
        value: cdktf.stringToHclTerraform(this._externalPreAuth),
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
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
        value: cdktf.stringToHclTerraform(this._ipv6Rules),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      local_lan_partition: {
        value: cdktf.stringToHclTerraform(this._localLanPartition),
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
        value: cdktf.stringToHclTerraform(this._localStandaloneDnsIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_standalone_nat: {
        value: cdktf.stringToHclTerraform(this._localStandaloneNat),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nas_filter_rule: {
        value: cdktf.stringToHclTerraform(this._nasFilterRule),
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
        value: cdktf.stringToHclTerraform(this._oweGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
        value: cdktf.stringToHclTerraform(this._passphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      pre_auth: {
        value: cdktf.stringToHclTerraform(this._preAuth),
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
        value: cdktf.stringToHclTerraform(this._rates11A),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rates_11ac_mcs_map: {
        value: cdktf.stringToHclTerraform(this._rates11AcMcsMap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rates_11ac_ss12: {
        value: cdktf.stringToHclTerraform(this._rates11AcSs12),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rates_11ac_ss34: {
        value: cdktf.stringToHclTerraform(this._rates11AcSs34),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rates_11ax_mcs_map: {
        value: cdktf.stringToHclTerraform(this._rates11AxMcsMap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rates_11ax_ss12: {
        value: cdktf.stringToHclTerraform(this._rates11AxSs12),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rates_11ax_ss34: {
        value: cdktf.stringToHclTerraform(this._rates11AxSs34),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rates_11be_mcs_map: {
        value: cdktf.stringToHclTerraform(this._rates11BeMcsMap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rates_11be_mcs_map_160: {
        value: cdktf.stringToHclTerraform(this._rates11BeMcsMap160),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rates_11be_mcs_map_320: {
        value: cdktf.stringToHclTerraform(this._rates11BeMcsMap320),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rates_11bg: {
        value: cdktf.stringToHclTerraform(this._rates11Bg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rates_11n_ss12: {
        value: cdktf.stringToHclTerraform(this._rates11NSs12),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rates_11n_ss34: {
        value: cdktf.stringToHclTerraform(this._rates11NSs34),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      roaming_acct_interim_update: {
        value: cdktf.stringToHclTerraform(this._roamingAcctInterimUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sae_groups: {
        value: cdktf.stringToHclTerraform(this._saeGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
        value: cdktf.stringToHclTerraform(this._saePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
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
      mac_filter_list: {
        value: cdktf.listMapperHcl(wirelesscontrollerVapMacFilterListStructToHclTerraform, true)(this._macFilterList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelesscontrollerVapMacFilterListStructList",
      },
      mpsk_key: {
        value: cdktf.listMapperHcl(wirelesscontrollerVapMpskKeyToHclTerraform, true)(this._mpskKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelesscontrollerVapMpskKeyList",
      },
      portal_message_overrides: {
        value: wirelesscontrollerVapPortalMessageOverridesToHclTerraform(this._portalMessageOverrides.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelesscontrollerVapPortalMessageOverridesList",
      },
      radius_mac_auth_usergroups: {
        value: cdktf.listMapperHcl(wirelesscontrollerVapRadiusMacAuthUsergroupsToHclTerraform, true)(this._radiusMacAuthUsergroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WirelesscontrollerVapRadiusMacAuthUsergroupsList",
      },
      selected_usergroups: {
        value: cdktf.listMapperHcl(wirelesscontrollerVapSelectedUsergroupsToHclTerraform, true)(this._selectedUsergroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WirelesscontrollerVapSelectedUsergroupsList",
      },
      usergroup: {
        value: cdktf.listMapperHcl(wirelesscontrollerVapUsergroupToHclTerraform, true)(this._usergroup.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WirelesscontrollerVapUsergroupList",
      },
      vlan_name: {
        value: cdktf.listMapperHcl(wirelesscontrollerVapVlanNameToHclTerraform, true)(this._vlanName.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelesscontrollerVapVlanNameList",
      },
      vlan_pool: {
        value: cdktf.listMapperHcl(wirelesscontrollerVapVlanPoolToHclTerraform, true)(this._vlanPool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelesscontrollerVapVlanPoolList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
