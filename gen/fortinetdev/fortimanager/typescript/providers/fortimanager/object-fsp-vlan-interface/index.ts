// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFspVlanInterfaceAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ac_name ObjectFspVlanInterfaceA#ac_name}
  */
  readonly acName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#adom ObjectFspVlanInterfaceA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#aggregate ObjectFspVlanInterfaceA#aggregate}
  */
  readonly aggregate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#aggregate_type ObjectFspVlanInterfaceA#aggregate_type}
  */
  readonly aggregateType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#algorithm ObjectFspVlanInterfaceA#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#alias ObjectFspVlanInterfaceA#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#allowaccess ObjectFspVlanInterfaceA#allowaccess}
  */
  readonly allowaccess?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#annex ObjectFspVlanInterfaceA#annex}
  */
  readonly annex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ap_discover ObjectFspVlanInterfaceA#ap_discover}
  */
  readonly apDiscover?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#arpforward ObjectFspVlanInterfaceA#arpforward}
  */
  readonly arpforward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#atm_protocol ObjectFspVlanInterfaceA#atm_protocol}
  */
  readonly atmProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#auth_cert ObjectFspVlanInterfaceA#auth_cert}
  */
  readonly authCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#auth_portal_addr ObjectFspVlanInterfaceA#auth_portal_addr}
  */
  readonly authPortalAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#auth_type ObjectFspVlanInterfaceA#auth_type}
  */
  readonly authType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#auto_auth_extension_device ObjectFspVlanInterfaceA#auto_auth_extension_device}
  */
  readonly autoAuthExtensionDevice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#bandwidth_measure_time ObjectFspVlanInterfaceA#bandwidth_measure_time}
  */
  readonly bandwidthMeasureTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#bfd ObjectFspVlanInterfaceA#bfd}
  */
  readonly bfd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#bfd_desired_min_tx ObjectFspVlanInterfaceA#bfd_desired_min_tx}
  */
  readonly bfdDesiredMinTx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#bfd_detect_mult ObjectFspVlanInterfaceA#bfd_detect_mult}
  */
  readonly bfdDetectMult?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#bfd_required_min_rx ObjectFspVlanInterfaceA#bfd_required_min_rx}
  */
  readonly bfdRequiredMinRx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#broadcast_forticlient_discovery ObjectFspVlanInterfaceA#broadcast_forticlient_discovery}
  */
  readonly broadcastForticlientDiscovery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#broadcast_forward ObjectFspVlanInterfaceA#broadcast_forward}
  */
  readonly broadcastForward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#captive_portal ObjectFspVlanInterfaceA#captive_portal}
  */
  readonly captivePortal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#cli_conn_status ObjectFspVlanInterfaceA#cli_conn_status}
  */
  readonly cliConnStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#color ObjectFspVlanInterfaceA#color}
  */
  readonly color?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ddns ObjectFspVlanInterfaceA#ddns}
  */
  readonly ddns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ddns_auth ObjectFspVlanInterfaceA#ddns_auth}
  */
  readonly ddnsAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ddns_domain ObjectFspVlanInterfaceA#ddns_domain}
  */
  readonly ddnsDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ddns_key ObjectFspVlanInterfaceA#ddns_key}
  */
  readonly ddnsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ddns_keyname ObjectFspVlanInterfaceA#ddns_keyname}
  */
  readonly ddnsKeyname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ddns_password ObjectFspVlanInterfaceA#ddns_password}
  */
  readonly ddnsPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ddns_server ObjectFspVlanInterfaceA#ddns_server}
  */
  readonly ddnsServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ddns_server_ip ObjectFspVlanInterfaceA#ddns_server_ip}
  */
  readonly ddnsServerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ddns_sn ObjectFspVlanInterfaceA#ddns_sn}
  */
  readonly ddnsSn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ddns_ttl ObjectFspVlanInterfaceA#ddns_ttl}
  */
  readonly ddnsTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ddns_username ObjectFspVlanInterfaceA#ddns_username}
  */
  readonly ddnsUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ddns_zone ObjectFspVlanInterfaceA#ddns_zone}
  */
  readonly ddnsZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#dedicated_to ObjectFspVlanInterfaceA#dedicated_to}
  */
  readonly dedicatedTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#default_purdue_level ObjectFspVlanInterfaceA#default_purdue_level}
  */
  readonly defaultPurdueLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#defaultgw ObjectFspVlanInterfaceA#defaultgw}
  */
  readonly defaultgw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#description ObjectFspVlanInterfaceA#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#detected_peer_mtu ObjectFspVlanInterfaceA#detected_peer_mtu}
  */
  readonly detectedPeerMtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#detectprotocol ObjectFspVlanInterfaceA#detectprotocol}
  */
  readonly detectprotocol?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#detectserver ObjectFspVlanInterfaceA#detectserver}
  */
  readonly detectserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#device_access_list ObjectFspVlanInterfaceA#device_access_list}
  */
  readonly deviceAccessList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#device_identification ObjectFspVlanInterfaceA#device_identification}
  */
  readonly deviceIdentification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#device_identification_active_scan ObjectFspVlanInterfaceA#device_identification_active_scan}
  */
  readonly deviceIdentificationActiveScan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#device_netscan ObjectFspVlanInterfaceA#device_netscan}
  */
  readonly deviceNetscan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#device_user_identification ObjectFspVlanInterfaceA#device_user_identification}
  */
  readonly deviceUserIdentification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#devindex ObjectFspVlanInterfaceA#devindex}
  */
  readonly devindex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#dhcp_broadcast_flag ObjectFspVlanInterfaceA#dhcp_broadcast_flag}
  */
  readonly dhcpBroadcastFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#dhcp_classless_route_addition ObjectFspVlanInterfaceA#dhcp_classless_route_addition}
  */
  readonly dhcpClasslessRouteAddition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#dhcp_client_identifier ObjectFspVlanInterfaceA#dhcp_client_identifier}
  */
  readonly dhcpClientIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#dhcp_relay_agent_option ObjectFspVlanInterfaceA#dhcp_relay_agent_option}
  */
  readonly dhcpRelayAgentOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#dhcp_relay_circuit_id ObjectFspVlanInterfaceA#dhcp_relay_circuit_id}
  */
  readonly dhcpRelayCircuitId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#dhcp_relay_interface ObjectFspVlanInterfaceA#dhcp_relay_interface}
  */
  readonly dhcpRelayInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#dhcp_relay_interface_select_method ObjectFspVlanInterfaceA#dhcp_relay_interface_select_method}
  */
  readonly dhcpRelayInterfaceSelectMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#dhcp_relay_ip ObjectFspVlanInterfaceA#dhcp_relay_ip}
  */
  readonly dhcpRelayIp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#dhcp_relay_link_selection ObjectFspVlanInterfaceA#dhcp_relay_link_selection}
  */
  readonly dhcpRelayLinkSelection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#dhcp_relay_request_all_server ObjectFspVlanInterfaceA#dhcp_relay_request_all_server}
  */
  readonly dhcpRelayRequestAllServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#dhcp_relay_service ObjectFspVlanInterfaceA#dhcp_relay_service}
  */
  readonly dhcpRelayService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#dhcp_relay_source_ip ObjectFspVlanInterfaceA#dhcp_relay_source_ip}
  */
  readonly dhcpRelaySourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#dhcp_relay_type ObjectFspVlanInterfaceA#dhcp_relay_type}
  */
  readonly dhcpRelayType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#dhcp_renew_time ObjectFspVlanInterfaceA#dhcp_renew_time}
  */
  readonly dhcpRenewTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#dhcp_smart_relay ObjectFspVlanInterfaceA#dhcp_smart_relay}
  */
  readonly dhcpSmartRelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#disc_retry_timeout ObjectFspVlanInterfaceA#disc_retry_timeout}
  */
  readonly discRetryTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#disconnect_threshold ObjectFspVlanInterfaceA#disconnect_threshold}
  */
  readonly disconnectThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#distance ObjectFspVlanInterfaceA#distance}
  */
  readonly distance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#dns_query ObjectFspVlanInterfaceA#dns_query}
  */
  readonly dnsQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#dns_server_override ObjectFspVlanInterfaceA#dns_server_override}
  */
  readonly dnsServerOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#dns_server_protocol ObjectFspVlanInterfaceA#dns_server_protocol}
  */
  readonly dnsServerProtocol?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#drop_fragment ObjectFspVlanInterfaceA#drop_fragment}
  */
  readonly dropFragment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#drop_overlapped_fragment ObjectFspVlanInterfaceA#drop_overlapped_fragment}
  */
  readonly dropOverlappedFragment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#dynamic_sort_subtable ObjectFspVlanInterfaceA#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#eap_ca_cert ObjectFspVlanInterfaceA#eap_ca_cert}
  */
  readonly eapCaCert?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#eap_identity ObjectFspVlanInterfaceA#eap_identity}
  */
  readonly eapIdentity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#eap_method ObjectFspVlanInterfaceA#eap_method}
  */
  readonly eapMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#eap_password ObjectFspVlanInterfaceA#eap_password}
  */
  readonly eapPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#eap_supplicant ObjectFspVlanInterfaceA#eap_supplicant}
  */
  readonly eapSupplicant?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#eap_user_cert ObjectFspVlanInterfaceA#eap_user_cert}
  */
  readonly eapUserCert?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#egress_cos ObjectFspVlanInterfaceA#egress_cos}
  */
  readonly egressCos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#egress_shaping_profile ObjectFspVlanInterfaceA#egress_shaping_profile}
  */
  readonly egressShapingProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#eip ObjectFspVlanInterfaceA#eip}
  */
  readonly eip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#endpoint_compliance ObjectFspVlanInterfaceA#endpoint_compliance}
  */
  readonly endpointCompliance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#estimated_downstream_bandwidth ObjectFspVlanInterfaceA#estimated_downstream_bandwidth}
  */
  readonly estimatedDownstreamBandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#estimated_upstream_bandwidth ObjectFspVlanInterfaceA#estimated_upstream_bandwidth}
  */
  readonly estimatedUpstreamBandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#explicit_ftp_proxy ObjectFspVlanInterfaceA#explicit_ftp_proxy}
  */
  readonly explicitFtpProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#explicit_web_proxy ObjectFspVlanInterfaceA#explicit_web_proxy}
  */
  readonly explicitWebProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#external ObjectFspVlanInterfaceA#external}
  */
  readonly external?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#fail_action_on_extender ObjectFspVlanInterfaceA#fail_action_on_extender}
  */
  readonly failActionOnExtender?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#fail_alert_interfaces ObjectFspVlanInterfaceA#fail_alert_interfaces}
  */
  readonly failAlertInterfaces?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#fail_alert_method ObjectFspVlanInterfaceA#fail_alert_method}
  */
  readonly failAlertMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#fail_detect ObjectFspVlanInterfaceA#fail_detect}
  */
  readonly failDetect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#fail_detect_option ObjectFspVlanInterfaceA#fail_detect_option}
  */
  readonly failDetectOption?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#fdp ObjectFspVlanInterfaceA#fdp}
  */
  readonly fdp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#fortiheartbeat ObjectFspVlanInterfaceA#fortiheartbeat}
  */
  readonly fortiheartbeat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#fortilink ObjectFspVlanInterfaceA#fortilink}
  */
  readonly fortilink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#fortilink_backup_link ObjectFspVlanInterfaceA#fortilink_backup_link}
  */
  readonly fortilinkBackupLink?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#fortilink_neighbor_detect ObjectFspVlanInterfaceA#fortilink_neighbor_detect}
  */
  readonly fortilinkNeighborDetect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#fortilink_split_interface ObjectFspVlanInterfaceA#fortilink_split_interface}
  */
  readonly fortilinkSplitInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#fortilink_stacking ObjectFspVlanInterfaceA#fortilink_stacking}
  */
  readonly fortilinkStacking?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#forward_domain ObjectFspVlanInterfaceA#forward_domain}
  */
  readonly forwardDomain?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#forward_error_correction ObjectFspVlanInterfaceA#forward_error_correction}
  */
  readonly forwardErrorCorrection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#fp_anomaly ObjectFspVlanInterfaceA#fp_anomaly}
  */
  readonly fpAnomaly?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#fp_disable ObjectFspVlanInterfaceA#fp_disable}
  */
  readonly fpDisable?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#gateway_address ObjectFspVlanInterfaceA#gateway_address}
  */
  readonly gatewayAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#generic_receive_offload ObjectFspVlanInterfaceA#generic_receive_offload}
  */
  readonly genericReceiveOffload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#gi_gk ObjectFspVlanInterfaceA#gi_gk}
  */
  readonly giGk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#gwaddr ObjectFspVlanInterfaceA#gwaddr}
  */
  readonly gwaddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#gwdetect ObjectFspVlanInterfaceA#gwdetect}
  */
  readonly gwdetect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ha_priority ObjectFspVlanInterfaceA#ha_priority}
  */
  readonly haPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#icmp_accept_redirect ObjectFspVlanInterfaceA#icmp_accept_redirect}
  */
  readonly icmpAcceptRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#icmp_redirect ObjectFspVlanInterfaceA#icmp_redirect}
  */
  readonly icmpRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#icmp_send_redirect ObjectFspVlanInterfaceA#icmp_send_redirect}
  */
  readonly icmpSendRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#id ObjectFspVlanInterfaceA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ident_accept ObjectFspVlanInterfaceA#ident_accept}
  */
  readonly identAccept?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#idle_timeout ObjectFspVlanInterfaceA#idle_timeout}
  */
  readonly idleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#if_mdix ObjectFspVlanInterfaceA#if_mdix}
  */
  readonly ifMdix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#if_media ObjectFspVlanInterfaceA#if_media}
  */
  readonly ifMedia?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ike_saml_server ObjectFspVlanInterfaceA#ike_saml_server}
  */
  readonly ikeSamlServer?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#in_force_vlan_cos ObjectFspVlanInterfaceA#in_force_vlan_cos}
  */
  readonly inForceVlanCos?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#inbandwidth ObjectFspVlanInterfaceA#inbandwidth}
  */
  readonly inbandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ingress_cos ObjectFspVlanInterfaceA#ingress_cos}
  */
  readonly ingressCos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ingress_shaping_profile ObjectFspVlanInterfaceA#ingress_shaping_profile}
  */
  readonly ingressShapingProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ingress_spillover_threshold ObjectFspVlanInterfaceA#ingress_spillover_threshold}
  */
  readonly ingressSpilloverThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#interconnect_profile ObjectFspVlanInterfaceA#interconnect_profile}
  */
  readonly interconnectProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#internal ObjectFspVlanInterfaceA#internal}
  */
  readonly internal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ip ObjectFspVlanInterfaceA#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ip_managed_by_fortiipam ObjectFspVlanInterfaceA#ip_managed_by_fortiipam}
  */
  readonly ipManagedByFortiipam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ipmac ObjectFspVlanInterfaceA#ipmac}
  */
  readonly ipmac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ips_sniffer_mode ObjectFspVlanInterfaceA#ips_sniffer_mode}
  */
  readonly ipsSnifferMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ipunnumbered ObjectFspVlanInterfaceA#ipunnumbered}
  */
  readonly ipunnumbered?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#l2forward ObjectFspVlanInterfaceA#l2forward}
  */
  readonly l2Forward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#l2tp_client ObjectFspVlanInterfaceA#l2tp_client}
  */
  readonly l2TpClient?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#lacp_ha_secondary ObjectFspVlanInterfaceA#lacp_ha_secondary}
  */
  readonly lacpHaSecondary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#lacp_ha_slave ObjectFspVlanInterfaceA#lacp_ha_slave}
  */
  readonly lacpHaSlave?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#lacp_mode ObjectFspVlanInterfaceA#lacp_mode}
  */
  readonly lacpMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#lacp_speed ObjectFspVlanInterfaceA#lacp_speed}
  */
  readonly lacpSpeed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#large_receive_offload ObjectFspVlanInterfaceA#large_receive_offload}
  */
  readonly largeReceiveOffload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#lcp_echo_interval ObjectFspVlanInterfaceA#lcp_echo_interval}
  */
  readonly lcpEchoInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#lcp_max_echo_fails ObjectFspVlanInterfaceA#lcp_max_echo_fails}
  */
  readonly lcpMaxEchoFails?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#link_up_delay ObjectFspVlanInterfaceA#link_up_delay}
  */
  readonly linkUpDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#listen_forticlient_connection ObjectFspVlanInterfaceA#listen_forticlient_connection}
  */
  readonly listenForticlientConnection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#lldp_network_policy ObjectFspVlanInterfaceA#lldp_network_policy}
  */
  readonly lldpNetworkPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#lldp_reception ObjectFspVlanInterfaceA#lldp_reception}
  */
  readonly lldpReception?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#lldp_transmission ObjectFspVlanInterfaceA#lldp_transmission}
  */
  readonly lldpTransmission?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#log ObjectFspVlanInterfaceA#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#macaddr ObjectFspVlanInterfaceA#macaddr}
  */
  readonly macaddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#managed_subnetwork_size ObjectFspVlanInterfaceA#managed_subnetwork_size}
  */
  readonly managedSubnetworkSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#management_ip ObjectFspVlanInterfaceA#management_ip}
  */
  readonly managementIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#max_egress_burst_rate ObjectFspVlanInterfaceA#max_egress_burst_rate}
  */
  readonly maxEgressBurstRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#max_egress_rate ObjectFspVlanInterfaceA#max_egress_rate}
  */
  readonly maxEgressRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#measured_downstream_bandwidth ObjectFspVlanInterfaceA#measured_downstream_bandwidth}
  */
  readonly measuredDownstreamBandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#measured_upstream_bandwidth ObjectFspVlanInterfaceA#measured_upstream_bandwidth}
  */
  readonly measuredUpstreamBandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#mediatype ObjectFspVlanInterfaceA#mediatype}
  */
  readonly mediatype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#member ObjectFspVlanInterfaceA#member}
  */
  readonly member?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#min_links ObjectFspVlanInterfaceA#min_links}
  */
  readonly minLinks?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#min_links_down ObjectFspVlanInterfaceA#min_links_down}
  */
  readonly minLinksDown?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#mirroring_direction ObjectFspVlanInterfaceA#mirroring_direction}
  */
  readonly mirroringDirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#mirroring_port ObjectFspVlanInterfaceA#mirroring_port}
  */
  readonly mirroringPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#mode ObjectFspVlanInterfaceA#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#monitor_bandwidth ObjectFspVlanInterfaceA#monitor_bandwidth}
  */
  readonly monitorBandwidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#mtu ObjectFspVlanInterfaceA#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#mtu_override ObjectFspVlanInterfaceA#mtu_override}
  */
  readonly mtuOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#mux_type ObjectFspVlanInterfaceA#mux_type}
  */
  readonly muxType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#name ObjectFspVlanInterfaceA#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ndiscforward ObjectFspVlanInterfaceA#ndiscforward}
  */
  readonly ndiscforward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#netbios_forward ObjectFspVlanInterfaceA#netbios_forward}
  */
  readonly netbiosForward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#netflow_sampler ObjectFspVlanInterfaceA#netflow_sampler}
  */
  readonly netflowSampler?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#np_qos_profile ObjectFspVlanInterfaceA#np_qos_profile}
  */
  readonly npQosProfile?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#npu_fastpath ObjectFspVlanInterfaceA#npu_fastpath}
  */
  readonly npuFastpath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#nst ObjectFspVlanInterfaceA#nst}
  */
  readonly nst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#out_force_vlan_cos ObjectFspVlanInterfaceA#out_force_vlan_cos}
  */
  readonly outForceVlanCos?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#outbandwidth ObjectFspVlanInterfaceA#outbandwidth}
  */
  readonly outbandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#padt_retry_timeout ObjectFspVlanInterfaceA#padt_retry_timeout}
  */
  readonly padtRetryTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#password ObjectFspVlanInterfaceA#password}
  */
  readonly password?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#peer_interface ObjectFspVlanInterfaceA#peer_interface}
  */
  readonly peerInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#phy_mode ObjectFspVlanInterfaceA#phy_mode}
  */
  readonly phyMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ping_serv_status ObjectFspVlanInterfaceA#ping_serv_status}
  */
  readonly pingServStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#poe ObjectFspVlanInterfaceA#poe}
  */
  readonly poe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#polling_interval ObjectFspVlanInterfaceA#polling_interval}
  */
  readonly pollingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#port_mirroring ObjectFspVlanInterfaceA#port_mirroring}
  */
  readonly portMirroring?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#pppoe_unnumbered_negotiate ObjectFspVlanInterfaceA#pppoe_unnumbered_negotiate}
  */
  readonly pppoeUnnumberedNegotiate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#pptp_auth_type ObjectFspVlanInterfaceA#pptp_auth_type}
  */
  readonly pptpAuthType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#pptp_client ObjectFspVlanInterfaceA#pptp_client}
  */
  readonly pptpClient?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#pptp_password ObjectFspVlanInterfaceA#pptp_password}
  */
  readonly pptpPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#pptp_server_ip ObjectFspVlanInterfaceA#pptp_server_ip}
  */
  readonly pptpServerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#pptp_timeout ObjectFspVlanInterfaceA#pptp_timeout}
  */
  readonly pptpTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#pptp_user ObjectFspVlanInterfaceA#pptp_user}
  */
  readonly pptpUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#preserve_session_route ObjectFspVlanInterfaceA#preserve_session_route}
  */
  readonly preserveSessionRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#priority ObjectFspVlanInterfaceA#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#priority_override ObjectFspVlanInterfaceA#priority_override}
  */
  readonly priorityOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#proxy_captive_portal ObjectFspVlanInterfaceA#proxy_captive_portal}
  */
  readonly proxyCaptivePortal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#pvc_atm_qos ObjectFspVlanInterfaceA#pvc_atm_qos}
  */
  readonly pvcAtmQos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#pvc_chan ObjectFspVlanInterfaceA#pvc_chan}
  */
  readonly pvcChan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#pvc_crc ObjectFspVlanInterfaceA#pvc_crc}
  */
  readonly pvcCrc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#pvc_pcr ObjectFspVlanInterfaceA#pvc_pcr}
  */
  readonly pvcPcr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#pvc_scr ObjectFspVlanInterfaceA#pvc_scr}
  */
  readonly pvcScr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#pvc_vlan_id ObjectFspVlanInterfaceA#pvc_vlan_id}
  */
  readonly pvcVlanId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#pvc_vlan_rx_id ObjectFspVlanInterfaceA#pvc_vlan_rx_id}
  */
  readonly pvcVlanRxId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#pvc_vlan_rx_op ObjectFspVlanInterfaceA#pvc_vlan_rx_op}
  */
  readonly pvcVlanRxOp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#pvc_vlan_tx_id ObjectFspVlanInterfaceA#pvc_vlan_tx_id}
  */
  readonly pvcVlanTxId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#pvc_vlan_tx_op ObjectFspVlanInterfaceA#pvc_vlan_tx_op}
  */
  readonly pvcVlanTxOp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#reachable_time ObjectFspVlanInterfaceA#reachable_time}
  */
  readonly reachableTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#redundant_interface ObjectFspVlanInterfaceA#redundant_interface}
  */
  readonly redundantInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#remote_ip ObjectFspVlanInterfaceA#remote_ip}
  */
  readonly remoteIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#replacemsg_override_group ObjectFspVlanInterfaceA#replacemsg_override_group}
  */
  readonly replacemsgOverrideGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#retransmission ObjectFspVlanInterfaceA#retransmission}
  */
  readonly retransmission?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ring_rx ObjectFspVlanInterfaceA#ring_rx}
  */
  readonly ringRx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ring_tx ObjectFspVlanInterfaceA#ring_tx}
  */
  readonly ringTx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#role ObjectFspVlanInterfaceA#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#sample_direction ObjectFspVlanInterfaceA#sample_direction}
  */
  readonly sampleDirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#sample_rate ObjectFspVlanInterfaceA#sample_rate}
  */
  readonly sampleRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#scan_botnet_connections ObjectFspVlanInterfaceA#scan_botnet_connections}
  */
  readonly scanBotnetConnections?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#scopetype ObjectFspVlanInterfaceA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#secondary_ip ObjectFspVlanInterfaceA#secondary_ip}
  */
  readonly secondaryIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#security_8021x_dynamic_vlan_id ObjectFspVlanInterfaceA#security_8021x_dynamic_vlan_id}
  */
  readonly security8021XDynamicVlanId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#security_8021x_master ObjectFspVlanInterfaceA#security_8021x_master}
  */
  readonly security8021XMaster?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#security_8021x_member_mode ObjectFspVlanInterfaceA#security_8021x_member_mode}
  */
  readonly security8021XMemberMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#security_8021x_mode ObjectFspVlanInterfaceA#security_8021x_mode}
  */
  readonly security8021XMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#security_exempt_list ObjectFspVlanInterfaceA#security_exempt_list}
  */
  readonly securityExemptList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#security_external_logout ObjectFspVlanInterfaceA#security_external_logout}
  */
  readonly securityExternalLogout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#security_external_web ObjectFspVlanInterfaceA#security_external_web}
  */
  readonly securityExternalWeb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#security_groups ObjectFspVlanInterfaceA#security_groups}
  */
  readonly securityGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#security_mac_auth_bypass ObjectFspVlanInterfaceA#security_mac_auth_bypass}
  */
  readonly securityMacAuthBypass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#security_mode ObjectFspVlanInterfaceA#security_mode}
  */
  readonly securityMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#security_redirect_url ObjectFspVlanInterfaceA#security_redirect_url}
  */
  readonly securityRedirectUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#select_profile_30a_35b ObjectFspVlanInterfaceA#select_profile_30a_35b}
  */
  readonly selectProfile30A35B?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#service_name ObjectFspVlanInterfaceA#service_name}
  */
  readonly serviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#sflow_sampler ObjectFspVlanInterfaceA#sflow_sampler}
  */
  readonly sflowSampler?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#sfp_dsl ObjectFspVlanInterfaceA#sfp_dsl}
  */
  readonly sfpDsl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#sfp_dsl_adsl_fallback ObjectFspVlanInterfaceA#sfp_dsl_adsl_fallback}
  */
  readonly sfpDslAdslFallback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#sfp_dsl_autodetect ObjectFspVlanInterfaceA#sfp_dsl_autodetect}
  */
  readonly sfpDslAutodetect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#sfp_dsl_mac ObjectFspVlanInterfaceA#sfp_dsl_mac}
  */
  readonly sfpDslMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#speed ObjectFspVlanInterfaceA#speed}
  */
  readonly speed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#spillover_threshold ObjectFspVlanInterfaceA#spillover_threshold}
  */
  readonly spilloverThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#src_check ObjectFspVlanInterfaceA#src_check}
  */
  readonly srcCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#status ObjectFspVlanInterfaceA#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#stp ObjectFspVlanInterfaceA#stp}
  */
  readonly stp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#stp_edge ObjectFspVlanInterfaceA#stp_edge}
  */
  readonly stpEdge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#stp_ha_secondary ObjectFspVlanInterfaceA#stp_ha_secondary}
  */
  readonly stpHaSecondary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#stp_ha_slave ObjectFspVlanInterfaceA#stp_ha_slave}
  */
  readonly stpHaSlave?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#stpforward ObjectFspVlanInterfaceA#stpforward}
  */
  readonly stpforward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#stpforward_mode ObjectFspVlanInterfaceA#stpforward_mode}
  */
  readonly stpforwardMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#strip_priority_vlan_tag ObjectFspVlanInterfaceA#strip_priority_vlan_tag}
  */
  readonly stripPriorityVlanTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#subst ObjectFspVlanInterfaceA#subst}
  */
  readonly subst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#substitute_dst_mac ObjectFspVlanInterfaceA#substitute_dst_mac}
  */
  readonly substituteDstMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#sw_algorithm ObjectFspVlanInterfaceA#sw_algorithm}
  */
  readonly swAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#swc_first_create ObjectFspVlanInterfaceA#swc_first_create}
  */
  readonly swcFirstCreate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#swc_vlan ObjectFspVlanInterfaceA#swc_vlan}
  */
  readonly swcVlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#switch ObjectFspVlanInterfaceA#switch}
  */
  readonly switch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#switch_controller_access_vlan ObjectFspVlanInterfaceA#switch_controller_access_vlan}
  */
  readonly switchControllerAccessVlan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#switch_controller_arp_inspection ObjectFspVlanInterfaceA#switch_controller_arp_inspection}
  */
  readonly switchControllerArpInspection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#switch_controller_auth ObjectFspVlanInterfaceA#switch_controller_auth}
  */
  readonly switchControllerAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#switch_controller_dhcp_snooping ObjectFspVlanInterfaceA#switch_controller_dhcp_snooping}
  */
  readonly switchControllerDhcpSnooping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#switch_controller_dhcp_snooping_option82 ObjectFspVlanInterfaceA#switch_controller_dhcp_snooping_option82}
  */
  readonly switchControllerDhcpSnoopingOption82?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#switch_controller_dhcp_snooping_verify_mac ObjectFspVlanInterfaceA#switch_controller_dhcp_snooping_verify_mac}
  */
  readonly switchControllerDhcpSnoopingVerifyMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#switch_controller_dynamic ObjectFspVlanInterfaceA#switch_controller_dynamic}
  */
  readonly switchControllerDynamic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#switch_controller_feature ObjectFspVlanInterfaceA#switch_controller_feature}
  */
  readonly switchControllerFeature?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#switch_controller_igmp_snooping ObjectFspVlanInterfaceA#switch_controller_igmp_snooping}
  */
  readonly switchControllerIgmpSnooping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#switch_controller_igmp_snooping_fast_leave ObjectFspVlanInterfaceA#switch_controller_igmp_snooping_fast_leave}
  */
  readonly switchControllerIgmpSnoopingFastLeave?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#switch_controller_igmp_snooping_proxy ObjectFspVlanInterfaceA#switch_controller_igmp_snooping_proxy}
  */
  readonly switchControllerIgmpSnoopingProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#switch_controller_iot_scanning ObjectFspVlanInterfaceA#switch_controller_iot_scanning}
  */
  readonly switchControllerIotScanning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#switch_controller_learning_limit ObjectFspVlanInterfaceA#switch_controller_learning_limit}
  */
  readonly switchControllerLearningLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#switch_controller_mgmt_vlan ObjectFspVlanInterfaceA#switch_controller_mgmt_vlan}
  */
  readonly switchControllerMgmtVlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#switch_controller_nac ObjectFspVlanInterfaceA#switch_controller_nac}
  */
  readonly switchControllerNac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#switch_controller_netflow_collect ObjectFspVlanInterfaceA#switch_controller_netflow_collect}
  */
  readonly switchControllerNetflowCollect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#switch_controller_offload ObjectFspVlanInterfaceA#switch_controller_offload}
  */
  readonly switchControllerOffload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#switch_controller_offload_gw ObjectFspVlanInterfaceA#switch_controller_offload_gw}
  */
  readonly switchControllerOffloadGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#switch_controller_offload_ip ObjectFspVlanInterfaceA#switch_controller_offload_ip}
  */
  readonly switchControllerOffloadIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#switch_controller_offloading ObjectFspVlanInterfaceA#switch_controller_offloading}
  */
  readonly switchControllerOffloading?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#switch_controller_offloading_gw ObjectFspVlanInterfaceA#switch_controller_offloading_gw}
  */
  readonly switchControllerOffloadingGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#switch_controller_offloading_ip ObjectFspVlanInterfaceA#switch_controller_offloading_ip}
  */
  readonly switchControllerOffloadingIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#switch_controller_radius_server ObjectFspVlanInterfaceA#switch_controller_radius_server}
  */
  readonly switchControllerRadiusServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#switch_controller_rspan_mode ObjectFspVlanInterfaceA#switch_controller_rspan_mode}
  */
  readonly switchControllerRspanMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#switch_controller_source_ip ObjectFspVlanInterfaceA#switch_controller_source_ip}
  */
  readonly switchControllerSourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#switch_controller_traffic_policy ObjectFspVlanInterfaceA#switch_controller_traffic_policy}
  */
  readonly switchControllerTrafficPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#system_id ObjectFspVlanInterfaceA#system_id}
  */
  readonly systemId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#system_id_type ObjectFspVlanInterfaceA#system_id_type}
  */
  readonly systemIdType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#tc_mode ObjectFspVlanInterfaceA#tc_mode}
  */
  readonly tcMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#tcp_mss ObjectFspVlanInterfaceA#tcp_mss}
  */
  readonly tcpMss?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#trunk ObjectFspVlanInterfaceA#trunk}
  */
  readonly trunk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#trust_ip6_1 ObjectFspVlanInterfaceA#trust_ip6_1}
  */
  readonly trustIp61?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#trust_ip6_2 ObjectFspVlanInterfaceA#trust_ip6_2}
  */
  readonly trustIp62?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#trust_ip6_3 ObjectFspVlanInterfaceA#trust_ip6_3}
  */
  readonly trustIp63?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#trust_ip_1 ObjectFspVlanInterfaceA#trust_ip_1}
  */
  readonly trustIp1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#trust_ip_2 ObjectFspVlanInterfaceA#trust_ip_2}
  */
  readonly trustIp2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#trust_ip_3 ObjectFspVlanInterfaceA#trust_ip_3}
  */
  readonly trustIp3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#type ObjectFspVlanInterfaceA#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#username ObjectFspVlanInterfaceA#username}
  */
  readonly username?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#vci ObjectFspVlanInterfaceA#vci}
  */
  readonly vci?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#vectoring ObjectFspVlanInterfaceA#vectoring}
  */
  readonly vectoring?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#vindex ObjectFspVlanInterfaceA#vindex}
  */
  readonly vindex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#vlan ObjectFspVlanInterfaceA#vlan}
  */
  readonly vlan: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#vlan_op_mode ObjectFspVlanInterfaceA#vlan_op_mode}
  */
  readonly vlanOpMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#vlan_protocol ObjectFspVlanInterfaceA#vlan_protocol}
  */
  readonly vlanProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#vlanforward ObjectFspVlanInterfaceA#vlanforward}
  */
  readonly vlanforward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#vlanid ObjectFspVlanInterfaceA#vlanid}
  */
  readonly vlanid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#vpi ObjectFspVlanInterfaceA#vpi}
  */
  readonly vpi?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#vrf ObjectFspVlanInterfaceA#vrf}
  */
  readonly vrf?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#vrrp_virtual_mac ObjectFspVlanInterfaceA#vrrp_virtual_mac}
  */
  readonly vrrpVirtualMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#wccp ObjectFspVlanInterfaceA#wccp}
  */
  readonly wccp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#weight ObjectFspVlanInterfaceA#weight}
  */
  readonly weight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#wifi_5g_threshold ObjectFspVlanInterfaceA#wifi_5g_threshold}
  */
  readonly wifi5GThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#wifi_acl ObjectFspVlanInterfaceA#wifi_acl}
  */
  readonly wifiAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#wifi_ap_band ObjectFspVlanInterfaceA#wifi_ap_band}
  */
  readonly wifiApBand?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#wifi_auth ObjectFspVlanInterfaceA#wifi_auth}
  */
  readonly wifiAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#wifi_auto_connect ObjectFspVlanInterfaceA#wifi_auto_connect}
  */
  readonly wifiAutoConnect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#wifi_auto_save ObjectFspVlanInterfaceA#wifi_auto_save}
  */
  readonly wifiAutoSave?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#wifi_broadcast_ssid ObjectFspVlanInterfaceA#wifi_broadcast_ssid}
  */
  readonly wifiBroadcastSsid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#wifi_dns_server1 ObjectFspVlanInterfaceA#wifi_dns_server1}
  */
  readonly wifiDnsServer1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#wifi_dns_server2 ObjectFspVlanInterfaceA#wifi_dns_server2}
  */
  readonly wifiDnsServer2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#wifi_encrypt ObjectFspVlanInterfaceA#wifi_encrypt}
  */
  readonly wifiEncrypt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#wifi_fragment_threshold ObjectFspVlanInterfaceA#wifi_fragment_threshold}
  */
  readonly wifiFragmentThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#wifi_gateway ObjectFspVlanInterfaceA#wifi_gateway}
  */
  readonly wifiGateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#wifi_key ObjectFspVlanInterfaceA#wifi_key}
  */
  readonly wifiKey?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#wifi_keyindex ObjectFspVlanInterfaceA#wifi_keyindex}
  */
  readonly wifiKeyindex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#wifi_mac_filter ObjectFspVlanInterfaceA#wifi_mac_filter}
  */
  readonly wifiMacFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#wifi_passphrase ObjectFspVlanInterfaceA#wifi_passphrase}
  */
  readonly wifiPassphrase?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#wifi_radius_server ObjectFspVlanInterfaceA#wifi_radius_server}
  */
  readonly wifiRadiusServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#wifi_rts_threshold ObjectFspVlanInterfaceA#wifi_rts_threshold}
  */
  readonly wifiRtsThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#wifi_security ObjectFspVlanInterfaceA#wifi_security}
  */
  readonly wifiSecurity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#wifi_ssid ObjectFspVlanInterfaceA#wifi_ssid}
  */
  readonly wifiSsid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#wifi_usergroup ObjectFspVlanInterfaceA#wifi_usergroup}
  */
  readonly wifiUsergroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#wins_ip ObjectFspVlanInterfaceA#wins_ip}
  */
  readonly winsIp?: string;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ipv6 ObjectFspVlanInterfaceA#ipv6}
  */
  readonly ipv6?: ObjectFspVlanInterfaceIpv6A;
  /**
  * secondaryip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#secondaryip ObjectFspVlanInterfaceA#secondaryip}
  */
  readonly secondaryip?: ObjectFspVlanInterfaceSecondaryipA[] | cdktf.IResolvable;
  /**
  * vrrp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#vrrp ObjectFspVlanInterfaceA#vrrp}
  */
  readonly vrrp?: ObjectFspVlanInterfaceVrrpA[] | cdktf.IResolvable;
}
export interface ObjectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#autonomous_flag ObjectFspVlanInterfaceA#autonomous_flag}
  */
  readonly autonomousFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#delegated_prefix_iaid ObjectFspVlanInterfaceA#delegated_prefix_iaid}
  */
  readonly delegatedPrefixIaid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#onlink_flag ObjectFspVlanInterfaceA#onlink_flag}
  */
  readonly onlinkFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#prefix_id ObjectFspVlanInterfaceA#prefix_id}
  */
  readonly prefixId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#rdnss ObjectFspVlanInterfaceA#rdnss}
  */
  readonly rdnss?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#rdnss_service ObjectFspVlanInterfaceA#rdnss_service}
  */
  readonly rdnssService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#subnet ObjectFspVlanInterfaceA#subnet}
  */
  readonly subnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#upstream_interface ObjectFspVlanInterfaceA#upstream_interface}
  */
  readonly upstreamInterface?: string;
}

export function objectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructAToTerraform(struct?: ObjectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autonomous_flag: cdktf.stringToTerraform(struct!.autonomousFlag),
    delegated_prefix_iaid: cdktf.numberToTerraform(struct!.delegatedPrefixIaid),
    onlink_flag: cdktf.stringToTerraform(struct!.onlinkFlag),
    prefix_id: cdktf.numberToTerraform(struct!.prefixId),
    rdnss: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rdnss),
    rdnss_service: cdktf.stringToTerraform(struct!.rdnssService),
    subnet: cdktf.stringToTerraform(struct!.subnet),
    upstream_interface: cdktf.stringToTerraform(struct!.upstreamInterface),
  }
}


export function objectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructAToHclTerraform(struct?: ObjectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autonomous_flag: {
      value: cdktf.stringToHclTerraform(struct!.autonomousFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delegated_prefix_iaid: {
      value: cdktf.numberToHclTerraform(struct!.delegatedPrefixIaid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    onlink_flag: {
      value: cdktf.stringToHclTerraform(struct!.onlinkFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_id: {
      value: cdktf.numberToHclTerraform(struct!.prefixId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rdnss: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rdnss),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    rdnss_service: {
      value: cdktf.stringToHclTerraform(struct!.rdnssService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream_interface: {
      value: cdktf.stringToHclTerraform(struct!.upstreamInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autonomousFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.autonomousFlag = this._autonomousFlag;
    }
    if (this._delegatedPrefixIaid !== undefined) {
      hasAnyValues = true;
      internalValueResult.delegatedPrefixIaid = this._delegatedPrefixIaid;
    }
    if (this._onlinkFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlinkFlag = this._onlinkFlag;
    }
    if (this._prefixId !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixId = this._prefixId;
    }
    if (this._rdnss !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdnss = this._rdnss;
    }
    if (this._rdnssService !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdnssService = this._rdnssService;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    if (this._upstreamInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamInterface = this._upstreamInterface;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autonomousFlag = undefined;
      this._delegatedPrefixIaid = undefined;
      this._onlinkFlag = undefined;
      this._prefixId = undefined;
      this._rdnss = undefined;
      this._rdnssService = undefined;
      this._subnet = undefined;
      this._upstreamInterface = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autonomousFlag = value.autonomousFlag;
      this._delegatedPrefixIaid = value.delegatedPrefixIaid;
      this._onlinkFlag = value.onlinkFlag;
      this._prefixId = value.prefixId;
      this._rdnss = value.rdnss;
      this._rdnssService = value.rdnssService;
      this._subnet = value.subnet;
      this._upstreamInterface = value.upstreamInterface;
    }
  }

  // autonomous_flag - computed: false, optional: true, required: false
  private _autonomousFlag?: string; 
  public get autonomousFlag() {
    return this.getStringAttribute('autonomous_flag');
  }
  public set autonomousFlag(value: string) {
    this._autonomousFlag = value;
  }
  public resetAutonomousFlag() {
    this._autonomousFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousFlagInput() {
    return this._autonomousFlag;
  }

  // delegated_prefix_iaid - computed: false, optional: true, required: false
  private _delegatedPrefixIaid?: number; 
  public get delegatedPrefixIaid() {
    return this.getNumberAttribute('delegated_prefix_iaid');
  }
  public set delegatedPrefixIaid(value: number) {
    this._delegatedPrefixIaid = value;
  }
  public resetDelegatedPrefixIaid() {
    this._delegatedPrefixIaid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatedPrefixIaidInput() {
    return this._delegatedPrefixIaid;
  }

  // onlink_flag - computed: false, optional: true, required: false
  private _onlinkFlag?: string; 
  public get onlinkFlag() {
    return this.getStringAttribute('onlink_flag');
  }
  public set onlinkFlag(value: string) {
    this._onlinkFlag = value;
  }
  public resetOnlinkFlag() {
    this._onlinkFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlinkFlagInput() {
    return this._onlinkFlag;
  }

  // prefix_id - computed: false, optional: true, required: false
  private _prefixId?: number; 
  public get prefixId() {
    return this.getNumberAttribute('prefix_id');
  }
  public set prefixId(value: number) {
    this._prefixId = value;
  }
  public resetPrefixId() {
    this._prefixId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixIdInput() {
    return this._prefixId;
  }

  // rdnss - computed: true, optional: true, required: false
  private _rdnss?: string[]; 
  public get rdnss() {
    return cdktf.Fn.tolist(this.getListAttribute('rdnss'));
  }
  public set rdnss(value: string[]) {
    this._rdnss = value;
  }
  public resetRdnss() {
    this._rdnss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdnssInput() {
    return this._rdnss;
  }

  // rdnss_service - computed: false, optional: true, required: false
  private _rdnssService?: string; 
  public get rdnssService() {
    return this.getStringAttribute('rdnss_service');
  }
  public set rdnssService(value: string) {
    this._rdnssService = value;
  }
  public resetRdnssService() {
    this._rdnssService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdnssServiceInput() {
    return this._rdnssService;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // upstream_interface - computed: false, optional: true, required: false
  private _upstreamInterface?: string; 
  public get upstreamInterface() {
    return this.getStringAttribute('upstream_interface');
  }
  public set upstreamInterface(value: string) {
    this._upstreamInterface = value;
  }
  public resetUpstreamInterface() {
    this._upstreamInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamInterfaceInput() {
    return this._upstreamInterface;
  }
}

export class ObjectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructAList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructA[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructAOutputReference {
    return new ObjectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFspVlanInterfaceIpv6Ip6ExtraAddrA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#prefix ObjectFspVlanInterfaceA#prefix}
  */
  readonly prefix?: string;
}

export function objectFspVlanInterfaceIpv6Ip6ExtraAddrAToTerraform(struct?: ObjectFspVlanInterfaceIpv6Ip6ExtraAddrA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function objectFspVlanInterfaceIpv6Ip6ExtraAddrAToHclTerraform(struct?: ObjectFspVlanInterfaceIpv6Ip6ExtraAddrA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFspVlanInterfaceIpv6Ip6ExtraAddrAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanInterfaceIpv6Ip6ExtraAddrA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFspVlanInterfaceIpv6Ip6ExtraAddrA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefix = value.prefix;
    }
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
}

export class ObjectFspVlanInterfaceIpv6Ip6ExtraAddrAList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanInterfaceIpv6Ip6ExtraAddrA[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanInterfaceIpv6Ip6ExtraAddrAOutputReference {
    return new ObjectFspVlanInterfaceIpv6Ip6ExtraAddrAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFspVlanInterfaceIpv6Ip6PrefixListStructA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#autonomous_flag ObjectFspVlanInterfaceA#autonomous_flag}
  */
  readonly autonomousFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#dnssl ObjectFspVlanInterfaceA#dnssl}
  */
  readonly dnssl?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#onlink_flag ObjectFspVlanInterfaceA#onlink_flag}
  */
  readonly onlinkFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#preferred_life_time ObjectFspVlanInterfaceA#preferred_life_time}
  */
  readonly preferredLifeTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#prefix ObjectFspVlanInterfaceA#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#rdnss ObjectFspVlanInterfaceA#rdnss}
  */
  readonly rdnss?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#valid_life_time ObjectFspVlanInterfaceA#valid_life_time}
  */
  readonly validLifeTime?: number;
}

export function objectFspVlanInterfaceIpv6Ip6PrefixListStructAToTerraform(struct?: ObjectFspVlanInterfaceIpv6Ip6PrefixListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autonomous_flag: cdktf.stringToTerraform(struct!.autonomousFlag),
    dnssl: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnssl),
    onlink_flag: cdktf.stringToTerraform(struct!.onlinkFlag),
    preferred_life_time: cdktf.numberToTerraform(struct!.preferredLifeTime),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    rdnss: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rdnss),
    valid_life_time: cdktf.numberToTerraform(struct!.validLifeTime),
  }
}


export function objectFspVlanInterfaceIpv6Ip6PrefixListStructAToHclTerraform(struct?: ObjectFspVlanInterfaceIpv6Ip6PrefixListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autonomous_flag: {
      value: cdktf.stringToHclTerraform(struct!.autonomousFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dnssl: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnssl),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    onlink_flag: {
      value: cdktf.stringToHclTerraform(struct!.onlinkFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preferred_life_time: {
      value: cdktf.numberToHclTerraform(struct!.preferredLifeTime),
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
    rdnss: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rdnss),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    valid_life_time: {
      value: cdktf.numberToHclTerraform(struct!.validLifeTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFspVlanInterfaceIpv6Ip6PrefixListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanInterfaceIpv6Ip6PrefixListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autonomousFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.autonomousFlag = this._autonomousFlag;
    }
    if (this._dnssl !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnssl = this._dnssl;
    }
    if (this._onlinkFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlinkFlag = this._onlinkFlag;
    }
    if (this._preferredLifeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredLifeTime = this._preferredLifeTime;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._rdnss !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdnss = this._rdnss;
    }
    if (this._validLifeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.validLifeTime = this._validLifeTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFspVlanInterfaceIpv6Ip6PrefixListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autonomousFlag = undefined;
      this._dnssl = undefined;
      this._onlinkFlag = undefined;
      this._preferredLifeTime = undefined;
      this._prefix = undefined;
      this._rdnss = undefined;
      this._validLifeTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autonomousFlag = value.autonomousFlag;
      this._dnssl = value.dnssl;
      this._onlinkFlag = value.onlinkFlag;
      this._preferredLifeTime = value.preferredLifeTime;
      this._prefix = value.prefix;
      this._rdnss = value.rdnss;
      this._validLifeTime = value.validLifeTime;
    }
  }

  // autonomous_flag - computed: false, optional: true, required: false
  private _autonomousFlag?: string; 
  public get autonomousFlag() {
    return this.getStringAttribute('autonomous_flag');
  }
  public set autonomousFlag(value: string) {
    this._autonomousFlag = value;
  }
  public resetAutonomousFlag() {
    this._autonomousFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousFlagInput() {
    return this._autonomousFlag;
  }

  // dnssl - computed: true, optional: true, required: false
  private _dnssl?: string[]; 
  public get dnssl() {
    return cdktf.Fn.tolist(this.getListAttribute('dnssl'));
  }
  public set dnssl(value: string[]) {
    this._dnssl = value;
  }
  public resetDnssl() {
    this._dnssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsslInput() {
    return this._dnssl;
  }

  // onlink_flag - computed: false, optional: true, required: false
  private _onlinkFlag?: string; 
  public get onlinkFlag() {
    return this.getStringAttribute('onlink_flag');
  }
  public set onlinkFlag(value: string) {
    this._onlinkFlag = value;
  }
  public resetOnlinkFlag() {
    this._onlinkFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlinkFlagInput() {
    return this._onlinkFlag;
  }

  // preferred_life_time - computed: false, optional: true, required: false
  private _preferredLifeTime?: number; 
  public get preferredLifeTime() {
    return this.getNumberAttribute('preferred_life_time');
  }
  public set preferredLifeTime(value: number) {
    this._preferredLifeTime = value;
  }
  public resetPreferredLifeTime() {
    this._preferredLifeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredLifeTimeInput() {
    return this._preferredLifeTime;
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

  // rdnss - computed: true, optional: true, required: false
  private _rdnss?: string[]; 
  public get rdnss() {
    return cdktf.Fn.tolist(this.getListAttribute('rdnss'));
  }
  public set rdnss(value: string[]) {
    this._rdnss = value;
  }
  public resetRdnss() {
    this._rdnss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdnssInput() {
    return this._rdnss;
  }

  // valid_life_time - computed: false, optional: true, required: false
  private _validLifeTime?: number; 
  public get validLifeTime() {
    return this.getNumberAttribute('valid_life_time');
  }
  public set validLifeTime(value: number) {
    this._validLifeTime = value;
  }
  public resetValidLifeTime() {
    this._validLifeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validLifeTimeInput() {
    return this._validLifeTime;
  }
}

export class ObjectFspVlanInterfaceIpv6Ip6PrefixListStructAList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanInterfaceIpv6Ip6PrefixListStructA[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanInterfaceIpv6Ip6PrefixListStructAOutputReference {
    return new ObjectFspVlanInterfaceIpv6Ip6PrefixListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFspVlanInterfaceIpv6Vrrp6A {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#accept_mode ObjectFspVlanInterfaceA#accept_mode}
  */
  readonly acceptMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#adv_interval ObjectFspVlanInterfaceA#adv_interval}
  */
  readonly advInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ignore_default_route ObjectFspVlanInterfaceA#ignore_default_route}
  */
  readonly ignoreDefaultRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#preempt ObjectFspVlanInterfaceA#preempt}
  */
  readonly preempt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#priority ObjectFspVlanInterfaceA#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#start_time ObjectFspVlanInterfaceA#start_time}
  */
  readonly startTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#status ObjectFspVlanInterfaceA#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#vrdst6 ObjectFspVlanInterfaceA#vrdst6}
  */
  readonly vrdst6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#vrgrp ObjectFspVlanInterfaceA#vrgrp}
  */
  readonly vrgrp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#vrid ObjectFspVlanInterfaceA#vrid}
  */
  readonly vrid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#vrip6 ObjectFspVlanInterfaceA#vrip6}
  */
  readonly vrip6?: string;
}

export function objectFspVlanInterfaceIpv6Vrrp6AToTerraform(struct?: ObjectFspVlanInterfaceIpv6Vrrp6A | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_mode: cdktf.stringToTerraform(struct!.acceptMode),
    adv_interval: cdktf.numberToTerraform(struct!.advInterval),
    ignore_default_route: cdktf.stringToTerraform(struct!.ignoreDefaultRoute),
    preempt: cdktf.stringToTerraform(struct!.preempt),
    priority: cdktf.numberToTerraform(struct!.priority),
    start_time: cdktf.numberToTerraform(struct!.startTime),
    status: cdktf.stringToTerraform(struct!.status),
    vrdst6: cdktf.stringToTerraform(struct!.vrdst6),
    vrgrp: cdktf.numberToTerraform(struct!.vrgrp),
    vrid: cdktf.numberToTerraform(struct!.vrid),
    vrip6: cdktf.stringToTerraform(struct!.vrip6),
  }
}


export function objectFspVlanInterfaceIpv6Vrrp6AToHclTerraform(struct?: ObjectFspVlanInterfaceIpv6Vrrp6A | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_mode: {
      value: cdktf.stringToHclTerraform(struct!.acceptMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    adv_interval: {
      value: cdktf.numberToHclTerraform(struct!.advInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_default_route: {
      value: cdktf.stringToHclTerraform(struct!.ignoreDefaultRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preempt: {
      value: cdktf.stringToHclTerraform(struct!.preempt),
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
    start_time: {
      value: cdktf.numberToHclTerraform(struct!.startTime),
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
    vrdst6: {
      value: cdktf.stringToHclTerraform(struct!.vrdst6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrgrp: {
      value: cdktf.numberToHclTerraform(struct!.vrgrp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrid: {
      value: cdktf.numberToHclTerraform(struct!.vrid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrip6: {
      value: cdktf.stringToHclTerraform(struct!.vrip6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFspVlanInterfaceIpv6Vrrp6AOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanInterfaceIpv6Vrrp6A | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptMode = this._acceptMode;
    }
    if (this._advInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.advInterval = this._advInterval;
    }
    if (this._ignoreDefaultRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreDefaultRoute = this._ignoreDefaultRoute;
    }
    if (this._preempt !== undefined) {
      hasAnyValues = true;
      internalValueResult.preempt = this._preempt;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._vrdst6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrdst6 = this._vrdst6;
    }
    if (this._vrgrp !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrgrp = this._vrgrp;
    }
    if (this._vrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrid = this._vrid;
    }
    if (this._vrip6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrip6 = this._vrip6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFspVlanInterfaceIpv6Vrrp6A | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptMode = undefined;
      this._advInterval = undefined;
      this._ignoreDefaultRoute = undefined;
      this._preempt = undefined;
      this._priority = undefined;
      this._startTime = undefined;
      this._status = undefined;
      this._vrdst6 = undefined;
      this._vrgrp = undefined;
      this._vrid = undefined;
      this._vrip6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceptMode = value.acceptMode;
      this._advInterval = value.advInterval;
      this._ignoreDefaultRoute = value.ignoreDefaultRoute;
      this._preempt = value.preempt;
      this._priority = value.priority;
      this._startTime = value.startTime;
      this._status = value.status;
      this._vrdst6 = value.vrdst6;
      this._vrgrp = value.vrgrp;
      this._vrid = value.vrid;
      this._vrip6 = value.vrip6;
    }
  }

  // accept_mode - computed: true, optional: true, required: false
  private _acceptMode?: string; 
  public get acceptMode() {
    return this.getStringAttribute('accept_mode');
  }
  public set acceptMode(value: string) {
    this._acceptMode = value;
  }
  public resetAcceptMode() {
    this._acceptMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptModeInput() {
    return this._acceptMode;
  }

  // adv_interval - computed: true, optional: true, required: false
  private _advInterval?: number; 
  public get advInterval() {
    return this.getNumberAttribute('adv_interval');
  }
  public set advInterval(value: number) {
    this._advInterval = value;
  }
  public resetAdvInterval() {
    this._advInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advIntervalInput() {
    return this._advInterval;
  }

  // ignore_default_route - computed: true, optional: true, required: false
  private _ignoreDefaultRoute?: string; 
  public get ignoreDefaultRoute() {
    return this.getStringAttribute('ignore_default_route');
  }
  public set ignoreDefaultRoute(value: string) {
    this._ignoreDefaultRoute = value;
  }
  public resetIgnoreDefaultRoute() {
    this._ignoreDefaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDefaultRouteInput() {
    return this._ignoreDefaultRoute;
  }

  // preempt - computed: true, optional: true, required: false
  private _preempt?: string; 
  public get preempt() {
    return this.getStringAttribute('preempt');
  }
  public set preempt(value: string) {
    this._preempt = value;
  }
  public resetPreempt() {
    this._preempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptInput() {
    return this._preempt;
  }

  // priority - computed: true, optional: true, required: false
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

  // start_time - computed: true, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
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

  // vrdst6 - computed: false, optional: true, required: false
  private _vrdst6?: string; 
  public get vrdst6() {
    return this.getStringAttribute('vrdst6');
  }
  public set vrdst6(value: string) {
    this._vrdst6 = value;
  }
  public resetVrdst6() {
    this._vrdst6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrdst6Input() {
    return this._vrdst6;
  }

  // vrgrp - computed: false, optional: true, required: false
  private _vrgrp?: number; 
  public get vrgrp() {
    return this.getNumberAttribute('vrgrp');
  }
  public set vrgrp(value: number) {
    this._vrgrp = value;
  }
  public resetVrgrp() {
    this._vrgrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrgrpInput() {
    return this._vrgrp;
  }

  // vrid - computed: false, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }

  // vrip6 - computed: true, optional: true, required: false
  private _vrip6?: string; 
  public get vrip6() {
    return this.getStringAttribute('vrip6');
  }
  public set vrip6(value: string) {
    this._vrip6 = value;
  }
  public resetVrip6() {
    this._vrip6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrip6Input() {
    return this._vrip6;
  }
}

export class ObjectFspVlanInterfaceIpv6Vrrp6AList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanInterfaceIpv6Vrrp6A[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanInterfaceIpv6Vrrp6AOutputReference {
    return new ObjectFspVlanInterfaceIpv6Vrrp6AOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFspVlanInterfaceIpv6A {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#autoconf ObjectFspVlanInterfaceA#autoconf}
  */
  readonly autoconf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#cli_conn6_status ObjectFspVlanInterfaceA#cli_conn6_status}
  */
  readonly cliConn6Status?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#dhcp6_client_options ObjectFspVlanInterfaceA#dhcp6_client_options}
  */
  readonly dhcp6ClientOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#dhcp6_information_request ObjectFspVlanInterfaceA#dhcp6_information_request}
  */
  readonly dhcp6InformationRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#dhcp6_prefix_delegation ObjectFspVlanInterfaceA#dhcp6_prefix_delegation}
  */
  readonly dhcp6PrefixDelegation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#dhcp6_prefix_hint ObjectFspVlanInterfaceA#dhcp6_prefix_hint}
  */
  readonly dhcp6PrefixHint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#dhcp6_prefix_hint_plt ObjectFspVlanInterfaceA#dhcp6_prefix_hint_plt}
  */
  readonly dhcp6PrefixHintPlt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#dhcp6_prefix_hint_vlt ObjectFspVlanInterfaceA#dhcp6_prefix_hint_vlt}
  */
  readonly dhcp6PrefixHintVlt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#dhcp6_relay_interface_id ObjectFspVlanInterfaceA#dhcp6_relay_interface_id}
  */
  readonly dhcp6RelayInterfaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#dhcp6_relay_ip ObjectFspVlanInterfaceA#dhcp6_relay_ip}
  */
  readonly dhcp6RelayIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#dhcp6_relay_service ObjectFspVlanInterfaceA#dhcp6_relay_service}
  */
  readonly dhcp6RelayService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#dhcp6_relay_source_interface ObjectFspVlanInterfaceA#dhcp6_relay_source_interface}
  */
  readonly dhcp6RelaySourceInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#dhcp6_relay_source_ip ObjectFspVlanInterfaceA#dhcp6_relay_source_ip}
  */
  readonly dhcp6RelaySourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#dhcp6_relay_type ObjectFspVlanInterfaceA#dhcp6_relay_type}
  */
  readonly dhcp6RelayType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#icmp6_send_redirect ObjectFspVlanInterfaceA#icmp6_send_redirect}
  */
  readonly icmp6SendRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#interface_identifier ObjectFspVlanInterfaceA#interface_identifier}
  */
  readonly interfaceIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ip6_address ObjectFspVlanInterfaceA#ip6_address}
  */
  readonly ip6Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ip6_allowaccess ObjectFspVlanInterfaceA#ip6_allowaccess}
  */
  readonly ip6Allowaccess?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ip6_default_life ObjectFspVlanInterfaceA#ip6_default_life}
  */
  readonly ip6DefaultLife?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ip6_delegated_prefix_iaid ObjectFspVlanInterfaceA#ip6_delegated_prefix_iaid}
  */
  readonly ip6DelegatedPrefixIaid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ip6_dns_server_override ObjectFspVlanInterfaceA#ip6_dns_server_override}
  */
  readonly ip6DnsServerOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ip6_hop_limit ObjectFspVlanInterfaceA#ip6_hop_limit}
  */
  readonly ip6HopLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ip6_link_mtu ObjectFspVlanInterfaceA#ip6_link_mtu}
  */
  readonly ip6LinkMtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ip6_manage_flag ObjectFspVlanInterfaceA#ip6_manage_flag}
  */
  readonly ip6ManageFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ip6_max_interval ObjectFspVlanInterfaceA#ip6_max_interval}
  */
  readonly ip6MaxInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ip6_min_interval ObjectFspVlanInterfaceA#ip6_min_interval}
  */
  readonly ip6MinInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ip6_mode ObjectFspVlanInterfaceA#ip6_mode}
  */
  readonly ip6Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ip6_other_flag ObjectFspVlanInterfaceA#ip6_other_flag}
  */
  readonly ip6OtherFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ip6_prefix_mode ObjectFspVlanInterfaceA#ip6_prefix_mode}
  */
  readonly ip6PrefixMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ip6_reachable_time ObjectFspVlanInterfaceA#ip6_reachable_time}
  */
  readonly ip6ReachableTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ip6_retrans_time ObjectFspVlanInterfaceA#ip6_retrans_time}
  */
  readonly ip6RetransTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ip6_send_adv ObjectFspVlanInterfaceA#ip6_send_adv}
  */
  readonly ip6SendAdv?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ip6_subnet ObjectFspVlanInterfaceA#ip6_subnet}
  */
  readonly ip6Subnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ip6_upstream_interface ObjectFspVlanInterfaceA#ip6_upstream_interface}
  */
  readonly ip6UpstreamInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#nd_cert ObjectFspVlanInterfaceA#nd_cert}
  */
  readonly ndCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#nd_cga_modifier ObjectFspVlanInterfaceA#nd_cga_modifier}
  */
  readonly ndCgaModifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#nd_mode ObjectFspVlanInterfaceA#nd_mode}
  */
  readonly ndMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#nd_security_level ObjectFspVlanInterfaceA#nd_security_level}
  */
  readonly ndSecurityLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#nd_timestamp_delta ObjectFspVlanInterfaceA#nd_timestamp_delta}
  */
  readonly ndTimestampDelta?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#nd_timestamp_fuzz ObjectFspVlanInterfaceA#nd_timestamp_fuzz}
  */
  readonly ndTimestampFuzz?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ra_send_mtu ObjectFspVlanInterfaceA#ra_send_mtu}
  */
  readonly raSendMtu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#unique_autoconf_addr ObjectFspVlanInterfaceA#unique_autoconf_addr}
  */
  readonly uniqueAutoconfAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#vrip6_link_local ObjectFspVlanInterfaceA#vrip6_link_local}
  */
  readonly vrip6LinkLocal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#vrrp_virtual_mac6 ObjectFspVlanInterfaceA#vrrp_virtual_mac6}
  */
  readonly vrrpVirtualMac6?: string;
  /**
  * ip6_delegated_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ip6_delegated_prefix_list ObjectFspVlanInterfaceA#ip6_delegated_prefix_list}
  */
  readonly ip6DelegatedPrefixList?: ObjectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructA[] | cdktf.IResolvable;
  /**
  * ip6_extra_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ip6_extra_addr ObjectFspVlanInterfaceA#ip6_extra_addr}
  */
  readonly ip6ExtraAddr?: ObjectFspVlanInterfaceIpv6Ip6ExtraAddrA[] | cdktf.IResolvable;
  /**
  * ip6_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ip6_prefix_list ObjectFspVlanInterfaceA#ip6_prefix_list}
  */
  readonly ip6PrefixList?: ObjectFspVlanInterfaceIpv6Ip6PrefixListStructA[] | cdktf.IResolvable;
  /**
  * vrrp6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#vrrp6 ObjectFspVlanInterfaceA#vrrp6}
  */
  readonly vrrp6?: ObjectFspVlanInterfaceIpv6Vrrp6A[] | cdktf.IResolvable;
}

export function objectFspVlanInterfaceIpv6AToTerraform(struct?: ObjectFspVlanInterfaceIpv6AOutputReference | ObjectFspVlanInterfaceIpv6A): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoconf: cdktf.stringToTerraform(struct!.autoconf),
    cli_conn6_status: cdktf.numberToTerraform(struct!.cliConn6Status),
    dhcp6_client_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dhcp6ClientOptions),
    dhcp6_information_request: cdktf.stringToTerraform(struct!.dhcp6InformationRequest),
    dhcp6_prefix_delegation: cdktf.stringToTerraform(struct!.dhcp6PrefixDelegation),
    dhcp6_prefix_hint: cdktf.stringToTerraform(struct!.dhcp6PrefixHint),
    dhcp6_prefix_hint_plt: cdktf.numberToTerraform(struct!.dhcp6PrefixHintPlt),
    dhcp6_prefix_hint_vlt: cdktf.numberToTerraform(struct!.dhcp6PrefixHintVlt),
    dhcp6_relay_interface_id: cdktf.stringToTerraform(struct!.dhcp6RelayInterfaceId),
    dhcp6_relay_ip: cdktf.stringToTerraform(struct!.dhcp6RelayIp),
    dhcp6_relay_service: cdktf.stringToTerraform(struct!.dhcp6RelayService),
    dhcp6_relay_source_interface: cdktf.stringToTerraform(struct!.dhcp6RelaySourceInterface),
    dhcp6_relay_source_ip: cdktf.stringToTerraform(struct!.dhcp6RelaySourceIp),
    dhcp6_relay_type: cdktf.stringToTerraform(struct!.dhcp6RelayType),
    icmp6_send_redirect: cdktf.stringToTerraform(struct!.icmp6SendRedirect),
    interface_identifier: cdktf.stringToTerraform(struct!.interfaceIdentifier),
    ip6_address: cdktf.stringToTerraform(struct!.ip6Address),
    ip6_allowaccess: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ip6Allowaccess),
    ip6_default_life: cdktf.numberToTerraform(struct!.ip6DefaultLife),
    ip6_delegated_prefix_iaid: cdktf.numberToTerraform(struct!.ip6DelegatedPrefixIaid),
    ip6_dns_server_override: cdktf.stringToTerraform(struct!.ip6DnsServerOverride),
    ip6_hop_limit: cdktf.numberToTerraform(struct!.ip6HopLimit),
    ip6_link_mtu: cdktf.numberToTerraform(struct!.ip6LinkMtu),
    ip6_manage_flag: cdktf.stringToTerraform(struct!.ip6ManageFlag),
    ip6_max_interval: cdktf.numberToTerraform(struct!.ip6MaxInterval),
    ip6_min_interval: cdktf.numberToTerraform(struct!.ip6MinInterval),
    ip6_mode: cdktf.stringToTerraform(struct!.ip6Mode),
    ip6_other_flag: cdktf.stringToTerraform(struct!.ip6OtherFlag),
    ip6_prefix_mode: cdktf.stringToTerraform(struct!.ip6PrefixMode),
    ip6_reachable_time: cdktf.numberToTerraform(struct!.ip6ReachableTime),
    ip6_retrans_time: cdktf.numberToTerraform(struct!.ip6RetransTime),
    ip6_send_adv: cdktf.stringToTerraform(struct!.ip6SendAdv),
    ip6_subnet: cdktf.stringToTerraform(struct!.ip6Subnet),
    ip6_upstream_interface: cdktf.stringToTerraform(struct!.ip6UpstreamInterface),
    nd_cert: cdktf.stringToTerraform(struct!.ndCert),
    nd_cga_modifier: cdktf.stringToTerraform(struct!.ndCgaModifier),
    nd_mode: cdktf.stringToTerraform(struct!.ndMode),
    nd_security_level: cdktf.numberToTerraform(struct!.ndSecurityLevel),
    nd_timestamp_delta: cdktf.numberToTerraform(struct!.ndTimestampDelta),
    nd_timestamp_fuzz: cdktf.numberToTerraform(struct!.ndTimestampFuzz),
    ra_send_mtu: cdktf.stringToTerraform(struct!.raSendMtu),
    unique_autoconf_addr: cdktf.stringToTerraform(struct!.uniqueAutoconfAddr),
    vrip6_link_local: cdktf.stringToTerraform(struct!.vrip6LinkLocal),
    vrrp_virtual_mac6: cdktf.stringToTerraform(struct!.vrrpVirtualMac6),
    ip6_delegated_prefix_list: cdktf.listMapper(objectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructAToTerraform, true)(struct!.ip6DelegatedPrefixList),
    ip6_extra_addr: cdktf.listMapper(objectFspVlanInterfaceIpv6Ip6ExtraAddrAToTerraform, true)(struct!.ip6ExtraAddr),
    ip6_prefix_list: cdktf.listMapper(objectFspVlanInterfaceIpv6Ip6PrefixListStructAToTerraform, true)(struct!.ip6PrefixList),
    vrrp6: cdktf.listMapper(objectFspVlanInterfaceIpv6Vrrp6AToTerraform, true)(struct!.vrrp6),
  }
}


export function objectFspVlanInterfaceIpv6AToHclTerraform(struct?: ObjectFspVlanInterfaceIpv6AOutputReference | ObjectFspVlanInterfaceIpv6A): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoconf: {
      value: cdktf.stringToHclTerraform(struct!.autoconf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cli_conn6_status: {
      value: cdktf.numberToHclTerraform(struct!.cliConn6Status),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dhcp6_client_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dhcp6ClientOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    dhcp6_information_request: {
      value: cdktf.stringToHclTerraform(struct!.dhcp6InformationRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp6_prefix_delegation: {
      value: cdktf.stringToHclTerraform(struct!.dhcp6PrefixDelegation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp6_prefix_hint: {
      value: cdktf.stringToHclTerraform(struct!.dhcp6PrefixHint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp6_prefix_hint_plt: {
      value: cdktf.numberToHclTerraform(struct!.dhcp6PrefixHintPlt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dhcp6_prefix_hint_vlt: {
      value: cdktf.numberToHclTerraform(struct!.dhcp6PrefixHintVlt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dhcp6_relay_interface_id: {
      value: cdktf.stringToHclTerraform(struct!.dhcp6RelayInterfaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp6_relay_ip: {
      value: cdktf.stringToHclTerraform(struct!.dhcp6RelayIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp6_relay_service: {
      value: cdktf.stringToHclTerraform(struct!.dhcp6RelayService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp6_relay_source_interface: {
      value: cdktf.stringToHclTerraform(struct!.dhcp6RelaySourceInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp6_relay_source_ip: {
      value: cdktf.stringToHclTerraform(struct!.dhcp6RelaySourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp6_relay_type: {
      value: cdktf.stringToHclTerraform(struct!.dhcp6RelayType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp6_send_redirect: {
      value: cdktf.stringToHclTerraform(struct!.icmp6SendRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_identifier: {
      value: cdktf.stringToHclTerraform(struct!.interfaceIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6_address: {
      value: cdktf.stringToHclTerraform(struct!.ip6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6_allowaccess: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ip6Allowaccess),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ip6_default_life: {
      value: cdktf.numberToHclTerraform(struct!.ip6DefaultLife),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_delegated_prefix_iaid: {
      value: cdktf.numberToHclTerraform(struct!.ip6DelegatedPrefixIaid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_dns_server_override: {
      value: cdktf.stringToHclTerraform(struct!.ip6DnsServerOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6_hop_limit: {
      value: cdktf.numberToHclTerraform(struct!.ip6HopLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_link_mtu: {
      value: cdktf.numberToHclTerraform(struct!.ip6LinkMtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_manage_flag: {
      value: cdktf.stringToHclTerraform(struct!.ip6ManageFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6_max_interval: {
      value: cdktf.numberToHclTerraform(struct!.ip6MaxInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_min_interval: {
      value: cdktf.numberToHclTerraform(struct!.ip6MinInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_mode: {
      value: cdktf.stringToHclTerraform(struct!.ip6Mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6_other_flag: {
      value: cdktf.stringToHclTerraform(struct!.ip6OtherFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6_prefix_mode: {
      value: cdktf.stringToHclTerraform(struct!.ip6PrefixMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6_reachable_time: {
      value: cdktf.numberToHclTerraform(struct!.ip6ReachableTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_retrans_time: {
      value: cdktf.numberToHclTerraform(struct!.ip6RetransTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_send_adv: {
      value: cdktf.stringToHclTerraform(struct!.ip6SendAdv),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6_subnet: {
      value: cdktf.stringToHclTerraform(struct!.ip6Subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6_upstream_interface: {
      value: cdktf.stringToHclTerraform(struct!.ip6UpstreamInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nd_cert: {
      value: cdktf.stringToHclTerraform(struct!.ndCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nd_cga_modifier: {
      value: cdktf.stringToHclTerraform(struct!.ndCgaModifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nd_mode: {
      value: cdktf.stringToHclTerraform(struct!.ndMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nd_security_level: {
      value: cdktf.numberToHclTerraform(struct!.ndSecurityLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd_timestamp_delta: {
      value: cdktf.numberToHclTerraform(struct!.ndTimestampDelta),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd_timestamp_fuzz: {
      value: cdktf.numberToHclTerraform(struct!.ndTimestampFuzz),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ra_send_mtu: {
      value: cdktf.stringToHclTerraform(struct!.raSendMtu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unique_autoconf_addr: {
      value: cdktf.stringToHclTerraform(struct!.uniqueAutoconfAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrip6_link_local: {
      value: cdktf.stringToHclTerraform(struct!.vrip6LinkLocal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrrp_virtual_mac6: {
      value: cdktf.stringToHclTerraform(struct!.vrrpVirtualMac6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6_delegated_prefix_list: {
      value: cdktf.listMapperHcl(objectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructAToHclTerraform, true)(struct!.ip6DelegatedPrefixList),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructAList",
    },
    ip6_extra_addr: {
      value: cdktf.listMapperHcl(objectFspVlanInterfaceIpv6Ip6ExtraAddrAToHclTerraform, true)(struct!.ip6ExtraAddr),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFspVlanInterfaceIpv6Ip6ExtraAddrAList",
    },
    ip6_prefix_list: {
      value: cdktf.listMapperHcl(objectFspVlanInterfaceIpv6Ip6PrefixListStructAToHclTerraform, true)(struct!.ip6PrefixList),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFspVlanInterfaceIpv6Ip6PrefixListStructAList",
    },
    vrrp6: {
      value: cdktf.listMapperHcl(objectFspVlanInterfaceIpv6Vrrp6AToHclTerraform, true)(struct!.vrrp6),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFspVlanInterfaceIpv6Vrrp6AList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFspVlanInterfaceIpv6AOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectFspVlanInterfaceIpv6A | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoconf !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoconf = this._autoconf;
    }
    if (this._cliConn6Status !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliConn6Status = this._cliConn6Status;
    }
    if (this._dhcp6ClientOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp6ClientOptions = this._dhcp6ClientOptions;
    }
    if (this._dhcp6InformationRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp6InformationRequest = this._dhcp6InformationRequest;
    }
    if (this._dhcp6PrefixDelegation !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp6PrefixDelegation = this._dhcp6PrefixDelegation;
    }
    if (this._dhcp6PrefixHint !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp6PrefixHint = this._dhcp6PrefixHint;
    }
    if (this._dhcp6PrefixHintPlt !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp6PrefixHintPlt = this._dhcp6PrefixHintPlt;
    }
    if (this._dhcp6PrefixHintVlt !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp6PrefixHintVlt = this._dhcp6PrefixHintVlt;
    }
    if (this._dhcp6RelayInterfaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp6RelayInterfaceId = this._dhcp6RelayInterfaceId;
    }
    if (this._dhcp6RelayIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp6RelayIp = this._dhcp6RelayIp;
    }
    if (this._dhcp6RelayService !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp6RelayService = this._dhcp6RelayService;
    }
    if (this._dhcp6RelaySourceInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp6RelaySourceInterface = this._dhcp6RelaySourceInterface;
    }
    if (this._dhcp6RelaySourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp6RelaySourceIp = this._dhcp6RelaySourceIp;
    }
    if (this._dhcp6RelayType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp6RelayType = this._dhcp6RelayType;
    }
    if (this._icmp6SendRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmp6SendRedirect = this._icmp6SendRedirect;
    }
    if (this._interfaceIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIdentifier = this._interfaceIdentifier;
    }
    if (this._ip6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6Address = this._ip6Address;
    }
    if (this._ip6Allowaccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6Allowaccess = this._ip6Allowaccess;
    }
    if (this._ip6DefaultLife !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6DefaultLife = this._ip6DefaultLife;
    }
    if (this._ip6DelegatedPrefixIaid !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6DelegatedPrefixIaid = this._ip6DelegatedPrefixIaid;
    }
    if (this._ip6DnsServerOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6DnsServerOverride = this._ip6DnsServerOverride;
    }
    if (this._ip6HopLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6HopLimit = this._ip6HopLimit;
    }
    if (this._ip6LinkMtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6LinkMtu = this._ip6LinkMtu;
    }
    if (this._ip6ManageFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6ManageFlag = this._ip6ManageFlag;
    }
    if (this._ip6MaxInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6MaxInterval = this._ip6MaxInterval;
    }
    if (this._ip6MinInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6MinInterval = this._ip6MinInterval;
    }
    if (this._ip6Mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6Mode = this._ip6Mode;
    }
    if (this._ip6OtherFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6OtherFlag = this._ip6OtherFlag;
    }
    if (this._ip6PrefixMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6PrefixMode = this._ip6PrefixMode;
    }
    if (this._ip6ReachableTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6ReachableTime = this._ip6ReachableTime;
    }
    if (this._ip6RetransTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6RetransTime = this._ip6RetransTime;
    }
    if (this._ip6SendAdv !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6SendAdv = this._ip6SendAdv;
    }
    if (this._ip6Subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6Subnet = this._ip6Subnet;
    }
    if (this._ip6UpstreamInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6UpstreamInterface = this._ip6UpstreamInterface;
    }
    if (this._ndCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.ndCert = this._ndCert;
    }
    if (this._ndCgaModifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.ndCgaModifier = this._ndCgaModifier;
    }
    if (this._ndMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ndMode = this._ndMode;
    }
    if (this._ndSecurityLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.ndSecurityLevel = this._ndSecurityLevel;
    }
    if (this._ndTimestampDelta !== undefined) {
      hasAnyValues = true;
      internalValueResult.ndTimestampDelta = this._ndTimestampDelta;
    }
    if (this._ndTimestampFuzz !== undefined) {
      hasAnyValues = true;
      internalValueResult.ndTimestampFuzz = this._ndTimestampFuzz;
    }
    if (this._raSendMtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.raSendMtu = this._raSendMtu;
    }
    if (this._uniqueAutoconfAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueAutoconfAddr = this._uniqueAutoconfAddr;
    }
    if (this._vrip6LinkLocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrip6LinkLocal = this._vrip6LinkLocal;
    }
    if (this._vrrpVirtualMac6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrrpVirtualMac6 = this._vrrpVirtualMac6;
    }
    if (this._ip6DelegatedPrefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6DelegatedPrefixList = this._ip6DelegatedPrefixList?.internalValue;
    }
    if (this._ip6ExtraAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6ExtraAddr = this._ip6ExtraAddr?.internalValue;
    }
    if (this._ip6PrefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6PrefixList = this._ip6PrefixList?.internalValue;
    }
    if (this._vrrp6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrrp6 = this._vrrp6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFspVlanInterfaceIpv6A | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoconf = undefined;
      this._cliConn6Status = undefined;
      this._dhcp6ClientOptions = undefined;
      this._dhcp6InformationRequest = undefined;
      this._dhcp6PrefixDelegation = undefined;
      this._dhcp6PrefixHint = undefined;
      this._dhcp6PrefixHintPlt = undefined;
      this._dhcp6PrefixHintVlt = undefined;
      this._dhcp6RelayInterfaceId = undefined;
      this._dhcp6RelayIp = undefined;
      this._dhcp6RelayService = undefined;
      this._dhcp6RelaySourceInterface = undefined;
      this._dhcp6RelaySourceIp = undefined;
      this._dhcp6RelayType = undefined;
      this._icmp6SendRedirect = undefined;
      this._interfaceIdentifier = undefined;
      this._ip6Address = undefined;
      this._ip6Allowaccess = undefined;
      this._ip6DefaultLife = undefined;
      this._ip6DelegatedPrefixIaid = undefined;
      this._ip6DnsServerOverride = undefined;
      this._ip6HopLimit = undefined;
      this._ip6LinkMtu = undefined;
      this._ip6ManageFlag = undefined;
      this._ip6MaxInterval = undefined;
      this._ip6MinInterval = undefined;
      this._ip6Mode = undefined;
      this._ip6OtherFlag = undefined;
      this._ip6PrefixMode = undefined;
      this._ip6ReachableTime = undefined;
      this._ip6RetransTime = undefined;
      this._ip6SendAdv = undefined;
      this._ip6Subnet = undefined;
      this._ip6UpstreamInterface = undefined;
      this._ndCert = undefined;
      this._ndCgaModifier = undefined;
      this._ndMode = undefined;
      this._ndSecurityLevel = undefined;
      this._ndTimestampDelta = undefined;
      this._ndTimestampFuzz = undefined;
      this._raSendMtu = undefined;
      this._uniqueAutoconfAddr = undefined;
      this._vrip6LinkLocal = undefined;
      this._vrrpVirtualMac6 = undefined;
      this._ip6DelegatedPrefixList.internalValue = undefined;
      this._ip6ExtraAddr.internalValue = undefined;
      this._ip6PrefixList.internalValue = undefined;
      this._vrrp6.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoconf = value.autoconf;
      this._cliConn6Status = value.cliConn6Status;
      this._dhcp6ClientOptions = value.dhcp6ClientOptions;
      this._dhcp6InformationRequest = value.dhcp6InformationRequest;
      this._dhcp6PrefixDelegation = value.dhcp6PrefixDelegation;
      this._dhcp6PrefixHint = value.dhcp6PrefixHint;
      this._dhcp6PrefixHintPlt = value.dhcp6PrefixHintPlt;
      this._dhcp6PrefixHintVlt = value.dhcp6PrefixHintVlt;
      this._dhcp6RelayInterfaceId = value.dhcp6RelayInterfaceId;
      this._dhcp6RelayIp = value.dhcp6RelayIp;
      this._dhcp6RelayService = value.dhcp6RelayService;
      this._dhcp6RelaySourceInterface = value.dhcp6RelaySourceInterface;
      this._dhcp6RelaySourceIp = value.dhcp6RelaySourceIp;
      this._dhcp6RelayType = value.dhcp6RelayType;
      this._icmp6SendRedirect = value.icmp6SendRedirect;
      this._interfaceIdentifier = value.interfaceIdentifier;
      this._ip6Address = value.ip6Address;
      this._ip6Allowaccess = value.ip6Allowaccess;
      this._ip6DefaultLife = value.ip6DefaultLife;
      this._ip6DelegatedPrefixIaid = value.ip6DelegatedPrefixIaid;
      this._ip6DnsServerOverride = value.ip6DnsServerOverride;
      this._ip6HopLimit = value.ip6HopLimit;
      this._ip6LinkMtu = value.ip6LinkMtu;
      this._ip6ManageFlag = value.ip6ManageFlag;
      this._ip6MaxInterval = value.ip6MaxInterval;
      this._ip6MinInterval = value.ip6MinInterval;
      this._ip6Mode = value.ip6Mode;
      this._ip6OtherFlag = value.ip6OtherFlag;
      this._ip6PrefixMode = value.ip6PrefixMode;
      this._ip6ReachableTime = value.ip6ReachableTime;
      this._ip6RetransTime = value.ip6RetransTime;
      this._ip6SendAdv = value.ip6SendAdv;
      this._ip6Subnet = value.ip6Subnet;
      this._ip6UpstreamInterface = value.ip6UpstreamInterface;
      this._ndCert = value.ndCert;
      this._ndCgaModifier = value.ndCgaModifier;
      this._ndMode = value.ndMode;
      this._ndSecurityLevel = value.ndSecurityLevel;
      this._ndTimestampDelta = value.ndTimestampDelta;
      this._ndTimestampFuzz = value.ndTimestampFuzz;
      this._raSendMtu = value.raSendMtu;
      this._uniqueAutoconfAddr = value.uniqueAutoconfAddr;
      this._vrip6LinkLocal = value.vrip6LinkLocal;
      this._vrrpVirtualMac6 = value.vrrpVirtualMac6;
      this._ip6DelegatedPrefixList.internalValue = value.ip6DelegatedPrefixList;
      this._ip6ExtraAddr.internalValue = value.ip6ExtraAddr;
      this._ip6PrefixList.internalValue = value.ip6PrefixList;
      this._vrrp6.internalValue = value.vrrp6;
    }
  }

  // autoconf - computed: true, optional: true, required: false
  private _autoconf?: string; 
  public get autoconf() {
    return this.getStringAttribute('autoconf');
  }
  public set autoconf(value: string) {
    this._autoconf = value;
  }
  public resetAutoconf() {
    this._autoconf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoconfInput() {
    return this._autoconf;
  }

  // cli_conn6_status - computed: false, optional: true, required: false
  private _cliConn6Status?: number; 
  public get cliConn6Status() {
    return this.getNumberAttribute('cli_conn6_status');
  }
  public set cliConn6Status(value: number) {
    this._cliConn6Status = value;
  }
  public resetCliConn6Status() {
    this._cliConn6Status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliConn6StatusInput() {
    return this._cliConn6Status;
  }

  // dhcp6_client_options - computed: true, optional: true, required: false
  private _dhcp6ClientOptions?: string[]; 
  public get dhcp6ClientOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('dhcp6_client_options'));
  }
  public set dhcp6ClientOptions(value: string[]) {
    this._dhcp6ClientOptions = value;
  }
  public resetDhcp6ClientOptions() {
    this._dhcp6ClientOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6ClientOptionsInput() {
    return this._dhcp6ClientOptions;
  }

  // dhcp6_information_request - computed: true, optional: true, required: false
  private _dhcp6InformationRequest?: string; 
  public get dhcp6InformationRequest() {
    return this.getStringAttribute('dhcp6_information_request');
  }
  public set dhcp6InformationRequest(value: string) {
    this._dhcp6InformationRequest = value;
  }
  public resetDhcp6InformationRequest() {
    this._dhcp6InformationRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6InformationRequestInput() {
    return this._dhcp6InformationRequest;
  }

  // dhcp6_prefix_delegation - computed: true, optional: true, required: false
  private _dhcp6PrefixDelegation?: string; 
  public get dhcp6PrefixDelegation() {
    return this.getStringAttribute('dhcp6_prefix_delegation');
  }
  public set dhcp6PrefixDelegation(value: string) {
    this._dhcp6PrefixDelegation = value;
  }
  public resetDhcp6PrefixDelegation() {
    this._dhcp6PrefixDelegation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6PrefixDelegationInput() {
    return this._dhcp6PrefixDelegation;
  }

  // dhcp6_prefix_hint - computed: true, optional: true, required: false
  private _dhcp6PrefixHint?: string; 
  public get dhcp6PrefixHint() {
    return this.getStringAttribute('dhcp6_prefix_hint');
  }
  public set dhcp6PrefixHint(value: string) {
    this._dhcp6PrefixHint = value;
  }
  public resetDhcp6PrefixHint() {
    this._dhcp6PrefixHint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6PrefixHintInput() {
    return this._dhcp6PrefixHint;
  }

  // dhcp6_prefix_hint_plt - computed: true, optional: true, required: false
  private _dhcp6PrefixHintPlt?: number; 
  public get dhcp6PrefixHintPlt() {
    return this.getNumberAttribute('dhcp6_prefix_hint_plt');
  }
  public set dhcp6PrefixHintPlt(value: number) {
    this._dhcp6PrefixHintPlt = value;
  }
  public resetDhcp6PrefixHintPlt() {
    this._dhcp6PrefixHintPlt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6PrefixHintPltInput() {
    return this._dhcp6PrefixHintPlt;
  }

  // dhcp6_prefix_hint_vlt - computed: true, optional: true, required: false
  private _dhcp6PrefixHintVlt?: number; 
  public get dhcp6PrefixHintVlt() {
    return this.getNumberAttribute('dhcp6_prefix_hint_vlt');
  }
  public set dhcp6PrefixHintVlt(value: number) {
    this._dhcp6PrefixHintVlt = value;
  }
  public resetDhcp6PrefixHintVlt() {
    this._dhcp6PrefixHintVlt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6PrefixHintVltInput() {
    return this._dhcp6PrefixHintVlt;
  }

  // dhcp6_relay_interface_id - computed: false, optional: true, required: false
  private _dhcp6RelayInterfaceId?: string; 
  public get dhcp6RelayInterfaceId() {
    return this.getStringAttribute('dhcp6_relay_interface_id');
  }
  public set dhcp6RelayInterfaceId(value: string) {
    this._dhcp6RelayInterfaceId = value;
  }
  public resetDhcp6RelayInterfaceId() {
    this._dhcp6RelayInterfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6RelayInterfaceIdInput() {
    return this._dhcp6RelayInterfaceId;
  }

  // dhcp6_relay_ip - computed: false, optional: true, required: false
  private _dhcp6RelayIp?: string; 
  public get dhcp6RelayIp() {
    return this.getStringAttribute('dhcp6_relay_ip');
  }
  public set dhcp6RelayIp(value: string) {
    this._dhcp6RelayIp = value;
  }
  public resetDhcp6RelayIp() {
    this._dhcp6RelayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6RelayIpInput() {
    return this._dhcp6RelayIp;
  }

  // dhcp6_relay_service - computed: true, optional: true, required: false
  private _dhcp6RelayService?: string; 
  public get dhcp6RelayService() {
    return this.getStringAttribute('dhcp6_relay_service');
  }
  public set dhcp6RelayService(value: string) {
    this._dhcp6RelayService = value;
  }
  public resetDhcp6RelayService() {
    this._dhcp6RelayService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6RelayServiceInput() {
    return this._dhcp6RelayService;
  }

  // dhcp6_relay_source_interface - computed: true, optional: true, required: false
  private _dhcp6RelaySourceInterface?: string; 
  public get dhcp6RelaySourceInterface() {
    return this.getStringAttribute('dhcp6_relay_source_interface');
  }
  public set dhcp6RelaySourceInterface(value: string) {
    this._dhcp6RelaySourceInterface = value;
  }
  public resetDhcp6RelaySourceInterface() {
    this._dhcp6RelaySourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6RelaySourceInterfaceInput() {
    return this._dhcp6RelaySourceInterface;
  }

  // dhcp6_relay_source_ip - computed: true, optional: true, required: false
  private _dhcp6RelaySourceIp?: string; 
  public get dhcp6RelaySourceIp() {
    return this.getStringAttribute('dhcp6_relay_source_ip');
  }
  public set dhcp6RelaySourceIp(value: string) {
    this._dhcp6RelaySourceIp = value;
  }
  public resetDhcp6RelaySourceIp() {
    this._dhcp6RelaySourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6RelaySourceIpInput() {
    return this._dhcp6RelaySourceIp;
  }

  // dhcp6_relay_type - computed: true, optional: true, required: false
  private _dhcp6RelayType?: string; 
  public get dhcp6RelayType() {
    return this.getStringAttribute('dhcp6_relay_type');
  }
  public set dhcp6RelayType(value: string) {
    this._dhcp6RelayType = value;
  }
  public resetDhcp6RelayType() {
    this._dhcp6RelayType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6RelayTypeInput() {
    return this._dhcp6RelayType;
  }

  // icmp6_send_redirect - computed: true, optional: true, required: false
  private _icmp6SendRedirect?: string; 
  public get icmp6SendRedirect() {
    return this.getStringAttribute('icmp6_send_redirect');
  }
  public set icmp6SendRedirect(value: string) {
    this._icmp6SendRedirect = value;
  }
  public resetIcmp6SendRedirect() {
    this._icmp6SendRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmp6SendRedirectInput() {
    return this._icmp6SendRedirect;
  }

  // interface_identifier - computed: true, optional: true, required: false
  private _interfaceIdentifier?: string; 
  public get interfaceIdentifier() {
    return this.getStringAttribute('interface_identifier');
  }
  public set interfaceIdentifier(value: string) {
    this._interfaceIdentifier = value;
  }
  public resetInterfaceIdentifier() {
    this._interfaceIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIdentifierInput() {
    return this._interfaceIdentifier;
  }

  // ip6_address - computed: true, optional: true, required: false
  private _ip6Address?: string; 
  public get ip6Address() {
    return this.getStringAttribute('ip6_address');
  }
  public set ip6Address(value: string) {
    this._ip6Address = value;
  }
  public resetIp6Address() {
    this._ip6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6AddressInput() {
    return this._ip6Address;
  }

  // ip6_allowaccess - computed: true, optional: true, required: false
  private _ip6Allowaccess?: string[]; 
  public get ip6Allowaccess() {
    return cdktf.Fn.tolist(this.getListAttribute('ip6_allowaccess'));
  }
  public set ip6Allowaccess(value: string[]) {
    this._ip6Allowaccess = value;
  }
  public resetIp6Allowaccess() {
    this._ip6Allowaccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6AllowaccessInput() {
    return this._ip6Allowaccess;
  }

  // ip6_default_life - computed: true, optional: true, required: false
  private _ip6DefaultLife?: number; 
  public get ip6DefaultLife() {
    return this.getNumberAttribute('ip6_default_life');
  }
  public set ip6DefaultLife(value: number) {
    this._ip6DefaultLife = value;
  }
  public resetIp6DefaultLife() {
    this._ip6DefaultLife = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6DefaultLifeInput() {
    return this._ip6DefaultLife;
  }

  // ip6_delegated_prefix_iaid - computed: false, optional: true, required: false
  private _ip6DelegatedPrefixIaid?: number; 
  public get ip6DelegatedPrefixIaid() {
    return this.getNumberAttribute('ip6_delegated_prefix_iaid');
  }
  public set ip6DelegatedPrefixIaid(value: number) {
    this._ip6DelegatedPrefixIaid = value;
  }
  public resetIp6DelegatedPrefixIaid() {
    this._ip6DelegatedPrefixIaid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6DelegatedPrefixIaidInput() {
    return this._ip6DelegatedPrefixIaid;
  }

  // ip6_dns_server_override - computed: true, optional: true, required: false
  private _ip6DnsServerOverride?: string; 
  public get ip6DnsServerOverride() {
    return this.getStringAttribute('ip6_dns_server_override');
  }
  public set ip6DnsServerOverride(value: string) {
    this._ip6DnsServerOverride = value;
  }
  public resetIp6DnsServerOverride() {
    this._ip6DnsServerOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6DnsServerOverrideInput() {
    return this._ip6DnsServerOverride;
  }

  // ip6_hop_limit - computed: false, optional: true, required: false
  private _ip6HopLimit?: number; 
  public get ip6HopLimit() {
    return this.getNumberAttribute('ip6_hop_limit');
  }
  public set ip6HopLimit(value: number) {
    this._ip6HopLimit = value;
  }
  public resetIp6HopLimit() {
    this._ip6HopLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6HopLimitInput() {
    return this._ip6HopLimit;
  }

  // ip6_link_mtu - computed: false, optional: true, required: false
  private _ip6LinkMtu?: number; 
  public get ip6LinkMtu() {
    return this.getNumberAttribute('ip6_link_mtu');
  }
  public set ip6LinkMtu(value: number) {
    this._ip6LinkMtu = value;
  }
  public resetIp6LinkMtu() {
    this._ip6LinkMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6LinkMtuInput() {
    return this._ip6LinkMtu;
  }

  // ip6_manage_flag - computed: true, optional: true, required: false
  private _ip6ManageFlag?: string; 
  public get ip6ManageFlag() {
    return this.getStringAttribute('ip6_manage_flag');
  }
  public set ip6ManageFlag(value: string) {
    this._ip6ManageFlag = value;
  }
  public resetIp6ManageFlag() {
    this._ip6ManageFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6ManageFlagInput() {
    return this._ip6ManageFlag;
  }

  // ip6_max_interval - computed: true, optional: true, required: false
  private _ip6MaxInterval?: number; 
  public get ip6MaxInterval() {
    return this.getNumberAttribute('ip6_max_interval');
  }
  public set ip6MaxInterval(value: number) {
    this._ip6MaxInterval = value;
  }
  public resetIp6MaxInterval() {
    this._ip6MaxInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6MaxIntervalInput() {
    return this._ip6MaxInterval;
  }

  // ip6_min_interval - computed: true, optional: true, required: false
  private _ip6MinInterval?: number; 
  public get ip6MinInterval() {
    return this.getNumberAttribute('ip6_min_interval');
  }
  public set ip6MinInterval(value: number) {
    this._ip6MinInterval = value;
  }
  public resetIp6MinInterval() {
    this._ip6MinInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6MinIntervalInput() {
    return this._ip6MinInterval;
  }

  // ip6_mode - computed: true, optional: true, required: false
  private _ip6Mode?: string; 
  public get ip6Mode() {
    return this.getStringAttribute('ip6_mode');
  }
  public set ip6Mode(value: string) {
    this._ip6Mode = value;
  }
  public resetIp6Mode() {
    this._ip6Mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6ModeInput() {
    return this._ip6Mode;
  }

  // ip6_other_flag - computed: true, optional: true, required: false
  private _ip6OtherFlag?: string; 
  public get ip6OtherFlag() {
    return this.getStringAttribute('ip6_other_flag');
  }
  public set ip6OtherFlag(value: string) {
    this._ip6OtherFlag = value;
  }
  public resetIp6OtherFlag() {
    this._ip6OtherFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6OtherFlagInput() {
    return this._ip6OtherFlag;
  }

  // ip6_prefix_mode - computed: true, optional: true, required: false
  private _ip6PrefixMode?: string; 
  public get ip6PrefixMode() {
    return this.getStringAttribute('ip6_prefix_mode');
  }
  public set ip6PrefixMode(value: string) {
    this._ip6PrefixMode = value;
  }
  public resetIp6PrefixMode() {
    this._ip6PrefixMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6PrefixModeInput() {
    return this._ip6PrefixMode;
  }

  // ip6_reachable_time - computed: false, optional: true, required: false
  private _ip6ReachableTime?: number; 
  public get ip6ReachableTime() {
    return this.getNumberAttribute('ip6_reachable_time');
  }
  public set ip6ReachableTime(value: number) {
    this._ip6ReachableTime = value;
  }
  public resetIp6ReachableTime() {
    this._ip6ReachableTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6ReachableTimeInput() {
    return this._ip6ReachableTime;
  }

  // ip6_retrans_time - computed: false, optional: true, required: false
  private _ip6RetransTime?: number; 
  public get ip6RetransTime() {
    return this.getNumberAttribute('ip6_retrans_time');
  }
  public set ip6RetransTime(value: number) {
    this._ip6RetransTime = value;
  }
  public resetIp6RetransTime() {
    this._ip6RetransTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6RetransTimeInput() {
    return this._ip6RetransTime;
  }

  // ip6_send_adv - computed: true, optional: true, required: false
  private _ip6SendAdv?: string; 
  public get ip6SendAdv() {
    return this.getStringAttribute('ip6_send_adv');
  }
  public set ip6SendAdv(value: string) {
    this._ip6SendAdv = value;
  }
  public resetIp6SendAdv() {
    this._ip6SendAdv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6SendAdvInput() {
    return this._ip6SendAdv;
  }

  // ip6_subnet - computed: true, optional: true, required: false
  private _ip6Subnet?: string; 
  public get ip6Subnet() {
    return this.getStringAttribute('ip6_subnet');
  }
  public set ip6Subnet(value: string) {
    this._ip6Subnet = value;
  }
  public resetIp6Subnet() {
    this._ip6Subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6SubnetInput() {
    return this._ip6Subnet;
  }

  // ip6_upstream_interface - computed: false, optional: true, required: false
  private _ip6UpstreamInterface?: string; 
  public get ip6UpstreamInterface() {
    return this.getStringAttribute('ip6_upstream_interface');
  }
  public set ip6UpstreamInterface(value: string) {
    this._ip6UpstreamInterface = value;
  }
  public resetIp6UpstreamInterface() {
    this._ip6UpstreamInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6UpstreamInterfaceInput() {
    return this._ip6UpstreamInterface;
  }

  // nd_cert - computed: false, optional: true, required: false
  private _ndCert?: string; 
  public get ndCert() {
    return this.getStringAttribute('nd_cert');
  }
  public set ndCert(value: string) {
    this._ndCert = value;
  }
  public resetNdCert() {
    this._ndCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndCertInput() {
    return this._ndCert;
  }

  // nd_cga_modifier - computed: false, optional: true, required: false
  private _ndCgaModifier?: string; 
  public get ndCgaModifier() {
    return this.getStringAttribute('nd_cga_modifier');
  }
  public set ndCgaModifier(value: string) {
    this._ndCgaModifier = value;
  }
  public resetNdCgaModifier() {
    this._ndCgaModifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndCgaModifierInput() {
    return this._ndCgaModifier;
  }

  // nd_mode - computed: true, optional: true, required: false
  private _ndMode?: string; 
  public get ndMode() {
    return this.getStringAttribute('nd_mode');
  }
  public set ndMode(value: string) {
    this._ndMode = value;
  }
  public resetNdMode() {
    this._ndMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndModeInput() {
    return this._ndMode;
  }

  // nd_security_level - computed: false, optional: true, required: false
  private _ndSecurityLevel?: number; 
  public get ndSecurityLevel() {
    return this.getNumberAttribute('nd_security_level');
  }
  public set ndSecurityLevel(value: number) {
    this._ndSecurityLevel = value;
  }
  public resetNdSecurityLevel() {
    this._ndSecurityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndSecurityLevelInput() {
    return this._ndSecurityLevel;
  }

  // nd_timestamp_delta - computed: false, optional: true, required: false
  private _ndTimestampDelta?: number; 
  public get ndTimestampDelta() {
    return this.getNumberAttribute('nd_timestamp_delta');
  }
  public set ndTimestampDelta(value: number) {
    this._ndTimestampDelta = value;
  }
  public resetNdTimestampDelta() {
    this._ndTimestampDelta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndTimestampDeltaInput() {
    return this._ndTimestampDelta;
  }

  // nd_timestamp_fuzz - computed: false, optional: true, required: false
  private _ndTimestampFuzz?: number; 
  public get ndTimestampFuzz() {
    return this.getNumberAttribute('nd_timestamp_fuzz');
  }
  public set ndTimestampFuzz(value: number) {
    this._ndTimestampFuzz = value;
  }
  public resetNdTimestampFuzz() {
    this._ndTimestampFuzz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndTimestampFuzzInput() {
    return this._ndTimestampFuzz;
  }

  // ra_send_mtu - computed: true, optional: true, required: false
  private _raSendMtu?: string; 
  public get raSendMtu() {
    return this.getStringAttribute('ra_send_mtu');
  }
  public set raSendMtu(value: string) {
    this._raSendMtu = value;
  }
  public resetRaSendMtu() {
    this._raSendMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get raSendMtuInput() {
    return this._raSendMtu;
  }

  // unique_autoconf_addr - computed: true, optional: true, required: false
  private _uniqueAutoconfAddr?: string; 
  public get uniqueAutoconfAddr() {
    return this.getStringAttribute('unique_autoconf_addr');
  }
  public set uniqueAutoconfAddr(value: string) {
    this._uniqueAutoconfAddr = value;
  }
  public resetUniqueAutoconfAddr() {
    this._uniqueAutoconfAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueAutoconfAddrInput() {
    return this._uniqueAutoconfAddr;
  }

  // vrip6_link_local - computed: true, optional: true, required: false
  private _vrip6LinkLocal?: string; 
  public get vrip6LinkLocal() {
    return this.getStringAttribute('vrip6_link_local');
  }
  public set vrip6LinkLocal(value: string) {
    this._vrip6LinkLocal = value;
  }
  public resetVrip6LinkLocal() {
    this._vrip6LinkLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrip6LinkLocalInput() {
    return this._vrip6LinkLocal;
  }

  // vrrp_virtual_mac6 - computed: true, optional: true, required: false
  private _vrrpVirtualMac6?: string; 
  public get vrrpVirtualMac6() {
    return this.getStringAttribute('vrrp_virtual_mac6');
  }
  public set vrrpVirtualMac6(value: string) {
    this._vrrpVirtualMac6 = value;
  }
  public resetVrrpVirtualMac6() {
    this._vrrpVirtualMac6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrrpVirtualMac6Input() {
    return this._vrrpVirtualMac6;
  }

  // ip6_delegated_prefix_list - computed: false, optional: true, required: false
  private _ip6DelegatedPrefixList = new ObjectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructAList(this, "ip6_delegated_prefix_list", false);
  public get ip6DelegatedPrefixList() {
    return this._ip6DelegatedPrefixList;
  }
  public putIp6DelegatedPrefixList(value: ObjectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructA[] | cdktf.IResolvable) {
    this._ip6DelegatedPrefixList.internalValue = value;
  }
  public resetIp6DelegatedPrefixList() {
    this._ip6DelegatedPrefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6DelegatedPrefixListInput() {
    return this._ip6DelegatedPrefixList.internalValue;
  }

  // ip6_extra_addr - computed: false, optional: true, required: false
  private _ip6ExtraAddr = new ObjectFspVlanInterfaceIpv6Ip6ExtraAddrAList(this, "ip6_extra_addr", false);
  public get ip6ExtraAddr() {
    return this._ip6ExtraAddr;
  }
  public putIp6ExtraAddr(value: ObjectFspVlanInterfaceIpv6Ip6ExtraAddrA[] | cdktf.IResolvable) {
    this._ip6ExtraAddr.internalValue = value;
  }
  public resetIp6ExtraAddr() {
    this._ip6ExtraAddr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6ExtraAddrInput() {
    return this._ip6ExtraAddr.internalValue;
  }

  // ip6_prefix_list - computed: false, optional: true, required: false
  private _ip6PrefixList = new ObjectFspVlanInterfaceIpv6Ip6PrefixListStructAList(this, "ip6_prefix_list", false);
  public get ip6PrefixList() {
    return this._ip6PrefixList;
  }
  public putIp6PrefixList(value: ObjectFspVlanInterfaceIpv6Ip6PrefixListStructA[] | cdktf.IResolvable) {
    this._ip6PrefixList.internalValue = value;
  }
  public resetIp6PrefixList() {
    this._ip6PrefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6PrefixListInput() {
    return this._ip6PrefixList.internalValue;
  }

  // vrrp6 - computed: false, optional: true, required: false
  private _vrrp6 = new ObjectFspVlanInterfaceIpv6Vrrp6AList(this, "vrrp6", false);
  public get vrrp6() {
    return this._vrrp6;
  }
  public putVrrp6(value: ObjectFspVlanInterfaceIpv6Vrrp6A[] | cdktf.IResolvable) {
    this._vrrp6.internalValue = value;
  }
  public resetVrrp6() {
    this._vrrp6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrrp6Input() {
    return this._vrrp6.internalValue;
  }
}
export interface ObjectFspVlanInterfaceSecondaryipA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#allowaccess ObjectFspVlanInterfaceA#allowaccess}
  */
  readonly allowaccess?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#detectprotocol ObjectFspVlanInterfaceA#detectprotocol}
  */
  readonly detectprotocol?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#detectserver ObjectFspVlanInterfaceA#detectserver}
  */
  readonly detectserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#gwdetect ObjectFspVlanInterfaceA#gwdetect}
  */
  readonly gwdetect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ha_priority ObjectFspVlanInterfaceA#ha_priority}
  */
  readonly haPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#id ObjectFspVlanInterfaceA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ip ObjectFspVlanInterfaceA#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ping_serv_status ObjectFspVlanInterfaceA#ping_serv_status}
  */
  readonly pingServStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#secip_relay_ip ObjectFspVlanInterfaceA#secip_relay_ip}
  */
  readonly secipRelayIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#seq ObjectFspVlanInterfaceA#seq}
  */
  readonly seq?: number;
}

export function objectFspVlanInterfaceSecondaryipAToTerraform(struct?: ObjectFspVlanInterfaceSecondaryipA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowaccess: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowaccess),
    detectprotocol: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.detectprotocol),
    detectserver: cdktf.stringToTerraform(struct!.detectserver),
    gwdetect: cdktf.stringToTerraform(struct!.gwdetect),
    ha_priority: cdktf.numberToTerraform(struct!.haPriority),
    id: cdktf.numberToTerraform(struct!.id),
    ip: cdktf.stringToTerraform(struct!.ip),
    ping_serv_status: cdktf.numberToTerraform(struct!.pingServStatus),
    secip_relay_ip: cdktf.stringToTerraform(struct!.secipRelayIp),
    seq: cdktf.numberToTerraform(struct!.seq),
  }
}


export function objectFspVlanInterfaceSecondaryipAToHclTerraform(struct?: ObjectFspVlanInterfaceSecondaryipA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowaccess: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowaccess),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    detectprotocol: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.detectprotocol),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    detectserver: {
      value: cdktf.stringToHclTerraform(struct!.detectserver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gwdetect: {
      value: cdktf.stringToHclTerraform(struct!.gwdetect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ha_priority: {
      value: cdktf.numberToHclTerraform(struct!.haPriority),
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
    ping_serv_status: {
      value: cdktf.numberToHclTerraform(struct!.pingServStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secip_relay_ip: {
      value: cdktf.stringToHclTerraform(struct!.secipRelayIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seq: {
      value: cdktf.numberToHclTerraform(struct!.seq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFspVlanInterfaceSecondaryipAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanInterfaceSecondaryipA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowaccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowaccess = this._allowaccess;
    }
    if (this._detectprotocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectprotocol = this._detectprotocol;
    }
    if (this._detectserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectserver = this._detectserver;
    }
    if (this._gwdetect !== undefined) {
      hasAnyValues = true;
      internalValueResult.gwdetect = this._gwdetect;
    }
    if (this._haPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.haPriority = this._haPriority;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._pingServStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingServStatus = this._pingServStatus;
    }
    if (this._secipRelayIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.secipRelayIp = this._secipRelayIp;
    }
    if (this._seq !== undefined) {
      hasAnyValues = true;
      internalValueResult.seq = this._seq;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFspVlanInterfaceSecondaryipA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowaccess = undefined;
      this._detectprotocol = undefined;
      this._detectserver = undefined;
      this._gwdetect = undefined;
      this._haPriority = undefined;
      this._id = undefined;
      this._ip = undefined;
      this._pingServStatus = undefined;
      this._secipRelayIp = undefined;
      this._seq = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowaccess = value.allowaccess;
      this._detectprotocol = value.detectprotocol;
      this._detectserver = value.detectserver;
      this._gwdetect = value.gwdetect;
      this._haPriority = value.haPriority;
      this._id = value.id;
      this._ip = value.ip;
      this._pingServStatus = value.pingServStatus;
      this._secipRelayIp = value.secipRelayIp;
      this._seq = value.seq;
    }
  }

  // allowaccess - computed: true, optional: true, required: false
  private _allowaccess?: string[]; 
  public get allowaccess() {
    return cdktf.Fn.tolist(this.getListAttribute('allowaccess'));
  }
  public set allowaccess(value: string[]) {
    this._allowaccess = value;
  }
  public resetAllowaccess() {
    this._allowaccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowaccessInput() {
    return this._allowaccess;
  }

  // detectprotocol - computed: true, optional: true, required: false
  private _detectprotocol?: string[]; 
  public get detectprotocol() {
    return cdktf.Fn.tolist(this.getListAttribute('detectprotocol'));
  }
  public set detectprotocol(value: string[]) {
    this._detectprotocol = value;
  }
  public resetDetectprotocol() {
    this._detectprotocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectprotocolInput() {
    return this._detectprotocol;
  }

  // detectserver - computed: false, optional: true, required: false
  private _detectserver?: string; 
  public get detectserver() {
    return this.getStringAttribute('detectserver');
  }
  public set detectserver(value: string) {
    this._detectserver = value;
  }
  public resetDetectserver() {
    this._detectserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectserverInput() {
    return this._detectserver;
  }

  // gwdetect - computed: false, optional: true, required: false
  private _gwdetect?: string; 
  public get gwdetect() {
    return this.getStringAttribute('gwdetect');
  }
  public set gwdetect(value: string) {
    this._gwdetect = value;
  }
  public resetGwdetect() {
    this._gwdetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gwdetectInput() {
    return this._gwdetect;
  }

  // ha_priority - computed: false, optional: true, required: false
  private _haPriority?: number; 
  public get haPriority() {
    return this.getNumberAttribute('ha_priority');
  }
  public set haPriority(value: number) {
    this._haPriority = value;
  }
  public resetHaPriority() {
    this._haPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haPriorityInput() {
    return this._haPriority;
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

  // ping_serv_status - computed: false, optional: true, required: false
  private _pingServStatus?: number; 
  public get pingServStatus() {
    return this.getNumberAttribute('ping_serv_status');
  }
  public set pingServStatus(value: number) {
    this._pingServStatus = value;
  }
  public resetPingServStatus() {
    this._pingServStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingServStatusInput() {
    return this._pingServStatus;
  }

  // secip_relay_ip - computed: false, optional: true, required: false
  private _secipRelayIp?: string; 
  public get secipRelayIp() {
    return this.getStringAttribute('secip_relay_ip');
  }
  public set secipRelayIp(value: string) {
    this._secipRelayIp = value;
  }
  public resetSecipRelayIp() {
    this._secipRelayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secipRelayIpInput() {
    return this._secipRelayIp;
  }

  // seq - computed: false, optional: true, required: false
  private _seq?: number; 
  public get seq() {
    return this.getNumberAttribute('seq');
  }
  public set seq(value: number) {
    this._seq = value;
  }
  public resetSeq() {
    this._seq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seqInput() {
    return this._seq;
  }
}

export class ObjectFspVlanInterfaceSecondaryipAList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanInterfaceSecondaryipA[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanInterfaceSecondaryipAOutputReference {
    return new ObjectFspVlanInterfaceSecondaryipAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFspVlanInterfaceVrrpProxyArpA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#id ObjectFspVlanInterfaceA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ip ObjectFspVlanInterfaceA#ip}
  */
  readonly ip?: string;
}

export function objectFspVlanInterfaceVrrpProxyArpAToTerraform(struct?: ObjectFspVlanInterfaceVrrpProxyArpA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function objectFspVlanInterfaceVrrpProxyArpAToHclTerraform(struct?: ObjectFspVlanInterfaceVrrpProxyArpA | cdktf.IResolvable): any {
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

export class ObjectFspVlanInterfaceVrrpProxyArpAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanInterfaceVrrpProxyArpA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectFspVlanInterfaceVrrpProxyArpA | cdktf.IResolvable | undefined) {
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
}

export class ObjectFspVlanInterfaceVrrpProxyArpAList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanInterfaceVrrpProxyArpA[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanInterfaceVrrpProxyArpAOutputReference {
    return new ObjectFspVlanInterfaceVrrpProxyArpAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFspVlanInterfaceVrrpA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#accept_mode ObjectFspVlanInterfaceA#accept_mode}
  */
  readonly acceptMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#adv_interval ObjectFspVlanInterfaceA#adv_interval}
  */
  readonly advInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#ignore_default_route ObjectFspVlanInterfaceA#ignore_default_route}
  */
  readonly ignoreDefaultRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#preempt ObjectFspVlanInterfaceA#preempt}
  */
  readonly preempt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#priority ObjectFspVlanInterfaceA#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#start_time ObjectFspVlanInterfaceA#start_time}
  */
  readonly startTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#status ObjectFspVlanInterfaceA#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#version ObjectFspVlanInterfaceA#version}
  */
  readonly version?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#vrdst ObjectFspVlanInterfaceA#vrdst}
  */
  readonly vrdst?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#vrdst_priority ObjectFspVlanInterfaceA#vrdst_priority}
  */
  readonly vrdstPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#vrgrp ObjectFspVlanInterfaceA#vrgrp}
  */
  readonly vrgrp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#vrid ObjectFspVlanInterfaceA#vrid}
  */
  readonly vrid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#vrip ObjectFspVlanInterfaceA#vrip}
  */
  readonly vrip?: string;
  /**
  * proxy_arp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#proxy_arp ObjectFspVlanInterfaceA#proxy_arp}
  */
  readonly proxyArp?: ObjectFspVlanInterfaceVrrpProxyArpA[] | cdktf.IResolvable;
}

export function objectFspVlanInterfaceVrrpAToTerraform(struct?: ObjectFspVlanInterfaceVrrpA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_mode: cdktf.stringToTerraform(struct!.acceptMode),
    adv_interval: cdktf.numberToTerraform(struct!.advInterval),
    ignore_default_route: cdktf.stringToTerraform(struct!.ignoreDefaultRoute),
    preempt: cdktf.stringToTerraform(struct!.preempt),
    priority: cdktf.numberToTerraform(struct!.priority),
    start_time: cdktf.numberToTerraform(struct!.startTime),
    status: cdktf.stringToTerraform(struct!.status),
    version: cdktf.stringToTerraform(struct!.version),
    vrdst: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vrdst),
    vrdst_priority: cdktf.numberToTerraform(struct!.vrdstPriority),
    vrgrp: cdktf.numberToTerraform(struct!.vrgrp),
    vrid: cdktf.numberToTerraform(struct!.vrid),
    vrip: cdktf.stringToTerraform(struct!.vrip),
    proxy_arp: cdktf.listMapper(objectFspVlanInterfaceVrrpProxyArpAToTerraform, true)(struct!.proxyArp),
  }
}


export function objectFspVlanInterfaceVrrpAToHclTerraform(struct?: ObjectFspVlanInterfaceVrrpA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_mode: {
      value: cdktf.stringToHclTerraform(struct!.acceptMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    adv_interval: {
      value: cdktf.numberToHclTerraform(struct!.advInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_default_route: {
      value: cdktf.stringToHclTerraform(struct!.ignoreDefaultRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preempt: {
      value: cdktf.stringToHclTerraform(struct!.preempt),
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
    start_time: {
      value: cdktf.numberToHclTerraform(struct!.startTime),
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
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrdst: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vrdst),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vrdst_priority: {
      value: cdktf.numberToHclTerraform(struct!.vrdstPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrgrp: {
      value: cdktf.numberToHclTerraform(struct!.vrgrp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrid: {
      value: cdktf.numberToHclTerraform(struct!.vrid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrip: {
      value: cdktf.stringToHclTerraform(struct!.vrip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_arp: {
      value: cdktf.listMapperHcl(objectFspVlanInterfaceVrrpProxyArpAToHclTerraform, true)(struct!.proxyArp),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFspVlanInterfaceVrrpProxyArpAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFspVlanInterfaceVrrpAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanInterfaceVrrpA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptMode = this._acceptMode;
    }
    if (this._advInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.advInterval = this._advInterval;
    }
    if (this._ignoreDefaultRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreDefaultRoute = this._ignoreDefaultRoute;
    }
    if (this._preempt !== undefined) {
      hasAnyValues = true;
      internalValueResult.preempt = this._preempt;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._vrdst !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrdst = this._vrdst;
    }
    if (this._vrdstPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrdstPriority = this._vrdstPriority;
    }
    if (this._vrgrp !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrgrp = this._vrgrp;
    }
    if (this._vrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrid = this._vrid;
    }
    if (this._vrip !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrip = this._vrip;
    }
    if (this._proxyArp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyArp = this._proxyArp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFspVlanInterfaceVrrpA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptMode = undefined;
      this._advInterval = undefined;
      this._ignoreDefaultRoute = undefined;
      this._preempt = undefined;
      this._priority = undefined;
      this._startTime = undefined;
      this._status = undefined;
      this._version = undefined;
      this._vrdst = undefined;
      this._vrdstPriority = undefined;
      this._vrgrp = undefined;
      this._vrid = undefined;
      this._vrip = undefined;
      this._proxyArp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceptMode = value.acceptMode;
      this._advInterval = value.advInterval;
      this._ignoreDefaultRoute = value.ignoreDefaultRoute;
      this._preempt = value.preempt;
      this._priority = value.priority;
      this._startTime = value.startTime;
      this._status = value.status;
      this._version = value.version;
      this._vrdst = value.vrdst;
      this._vrdstPriority = value.vrdstPriority;
      this._vrgrp = value.vrgrp;
      this._vrid = value.vrid;
      this._vrip = value.vrip;
      this._proxyArp.internalValue = value.proxyArp;
    }
  }

  // accept_mode - computed: true, optional: true, required: false
  private _acceptMode?: string; 
  public get acceptMode() {
    return this.getStringAttribute('accept_mode');
  }
  public set acceptMode(value: string) {
    this._acceptMode = value;
  }
  public resetAcceptMode() {
    this._acceptMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptModeInput() {
    return this._acceptMode;
  }

  // adv_interval - computed: true, optional: true, required: false
  private _advInterval?: number; 
  public get advInterval() {
    return this.getNumberAttribute('adv_interval');
  }
  public set advInterval(value: number) {
    this._advInterval = value;
  }
  public resetAdvInterval() {
    this._advInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advIntervalInput() {
    return this._advInterval;
  }

  // ignore_default_route - computed: true, optional: true, required: false
  private _ignoreDefaultRoute?: string; 
  public get ignoreDefaultRoute() {
    return this.getStringAttribute('ignore_default_route');
  }
  public set ignoreDefaultRoute(value: string) {
    this._ignoreDefaultRoute = value;
  }
  public resetIgnoreDefaultRoute() {
    this._ignoreDefaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDefaultRouteInput() {
    return this._ignoreDefaultRoute;
  }

  // preempt - computed: true, optional: true, required: false
  private _preempt?: string; 
  public get preempt() {
    return this.getStringAttribute('preempt');
  }
  public set preempt(value: string) {
    this._preempt = value;
  }
  public resetPreempt() {
    this._preempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptInput() {
    return this._preempt;
  }

  // priority - computed: true, optional: true, required: false
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

  // start_time - computed: true, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
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

  // version - computed: true, optional: true, required: false
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

  // vrdst - computed: true, optional: true, required: false
  private _vrdst?: string[]; 
  public get vrdst() {
    return cdktf.Fn.tolist(this.getListAttribute('vrdst'));
  }
  public set vrdst(value: string[]) {
    this._vrdst = value;
  }
  public resetVrdst() {
    this._vrdst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrdstInput() {
    return this._vrdst;
  }

  // vrdst_priority - computed: false, optional: true, required: false
  private _vrdstPriority?: number; 
  public get vrdstPriority() {
    return this.getNumberAttribute('vrdst_priority');
  }
  public set vrdstPriority(value: number) {
    this._vrdstPriority = value;
  }
  public resetVrdstPriority() {
    this._vrdstPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrdstPriorityInput() {
    return this._vrdstPriority;
  }

  // vrgrp - computed: false, optional: true, required: false
  private _vrgrp?: number; 
  public get vrgrp() {
    return this.getNumberAttribute('vrgrp');
  }
  public set vrgrp(value: number) {
    this._vrgrp = value;
  }
  public resetVrgrp() {
    this._vrgrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrgrpInput() {
    return this._vrgrp;
  }

  // vrid - computed: false, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }

  // vrip - computed: true, optional: true, required: false
  private _vrip?: string; 
  public get vrip() {
    return this.getStringAttribute('vrip');
  }
  public set vrip(value: string) {
    this._vrip = value;
  }
  public resetVrip() {
    this._vrip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vripInput() {
    return this._vrip;
  }

  // proxy_arp - computed: false, optional: true, required: false
  private _proxyArp = new ObjectFspVlanInterfaceVrrpProxyArpAList(this, "proxy_arp", false);
  public get proxyArp() {
    return this._proxyArp;
  }
  public putProxyArp(value: ObjectFspVlanInterfaceVrrpProxyArpA[] | cdktf.IResolvable) {
    this._proxyArp.internalValue = value;
  }
  public resetProxyArp() {
    this._proxyArp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyArpInput() {
    return this._proxyArp.internalValue;
  }
}

export class ObjectFspVlanInterfaceVrrpAList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanInterfaceVrrpA[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanInterfaceVrrpAOutputReference {
    return new ObjectFspVlanInterfaceVrrpAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface fortimanager_object_fsp_vlan_interface}
*/
export class ObjectFspVlanInterfaceA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_fsp_vlan_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFspVlanInterfaceA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFspVlanInterfaceA to import
  * @param importFromId The id of the existing ObjectFspVlanInterfaceA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFspVlanInterfaceA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_fsp_vlan_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface fortimanager_object_fsp_vlan_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFspVlanInterfaceAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectFspVlanInterfaceAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_fsp_vlan_interface',
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
    this._acName = config.acName;
    this._adom = config.adom;
    this._aggregate = config.aggregate;
    this._aggregateType = config.aggregateType;
    this._algorithm = config.algorithm;
    this._alias = config.alias;
    this._allowaccess = config.allowaccess;
    this._annex = config.annex;
    this._apDiscover = config.apDiscover;
    this._arpforward = config.arpforward;
    this._atmProtocol = config.atmProtocol;
    this._authCert = config.authCert;
    this._authPortalAddr = config.authPortalAddr;
    this._authType = config.authType;
    this._autoAuthExtensionDevice = config.autoAuthExtensionDevice;
    this._bandwidthMeasureTime = config.bandwidthMeasureTime;
    this._bfd = config.bfd;
    this._bfdDesiredMinTx = config.bfdDesiredMinTx;
    this._bfdDetectMult = config.bfdDetectMult;
    this._bfdRequiredMinRx = config.bfdRequiredMinRx;
    this._broadcastForticlientDiscovery = config.broadcastForticlientDiscovery;
    this._broadcastForward = config.broadcastForward;
    this._captivePortal = config.captivePortal;
    this._cliConnStatus = config.cliConnStatus;
    this._color = config.color;
    this._ddns = config.ddns;
    this._ddnsAuth = config.ddnsAuth;
    this._ddnsDomain = config.ddnsDomain;
    this._ddnsKey = config.ddnsKey;
    this._ddnsKeyname = config.ddnsKeyname;
    this._ddnsPassword = config.ddnsPassword;
    this._ddnsServer = config.ddnsServer;
    this._ddnsServerIp = config.ddnsServerIp;
    this._ddnsSn = config.ddnsSn;
    this._ddnsTtl = config.ddnsTtl;
    this._ddnsUsername = config.ddnsUsername;
    this._ddnsZone = config.ddnsZone;
    this._dedicatedTo = config.dedicatedTo;
    this._defaultPurdueLevel = config.defaultPurdueLevel;
    this._defaultgw = config.defaultgw;
    this._description = config.description;
    this._detectedPeerMtu = config.detectedPeerMtu;
    this._detectprotocol = config.detectprotocol;
    this._detectserver = config.detectserver;
    this._deviceAccessList = config.deviceAccessList;
    this._deviceIdentification = config.deviceIdentification;
    this._deviceIdentificationActiveScan = config.deviceIdentificationActiveScan;
    this._deviceNetscan = config.deviceNetscan;
    this._deviceUserIdentification = config.deviceUserIdentification;
    this._devindex = config.devindex;
    this._dhcpBroadcastFlag = config.dhcpBroadcastFlag;
    this._dhcpClasslessRouteAddition = config.dhcpClasslessRouteAddition;
    this._dhcpClientIdentifier = config.dhcpClientIdentifier;
    this._dhcpRelayAgentOption = config.dhcpRelayAgentOption;
    this._dhcpRelayCircuitId = config.dhcpRelayCircuitId;
    this._dhcpRelayInterface = config.dhcpRelayInterface;
    this._dhcpRelayInterfaceSelectMethod = config.dhcpRelayInterfaceSelectMethod;
    this._dhcpRelayIp = config.dhcpRelayIp;
    this._dhcpRelayLinkSelection = config.dhcpRelayLinkSelection;
    this._dhcpRelayRequestAllServer = config.dhcpRelayRequestAllServer;
    this._dhcpRelayService = config.dhcpRelayService;
    this._dhcpRelaySourceIp = config.dhcpRelaySourceIp;
    this._dhcpRelayType = config.dhcpRelayType;
    this._dhcpRenewTime = config.dhcpRenewTime;
    this._dhcpSmartRelay = config.dhcpSmartRelay;
    this._discRetryTimeout = config.discRetryTimeout;
    this._disconnectThreshold = config.disconnectThreshold;
    this._distance = config.distance;
    this._dnsQuery = config.dnsQuery;
    this._dnsServerOverride = config.dnsServerOverride;
    this._dnsServerProtocol = config.dnsServerProtocol;
    this._dropFragment = config.dropFragment;
    this._dropOverlappedFragment = config.dropOverlappedFragment;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._eapCaCert = config.eapCaCert;
    this._eapIdentity = config.eapIdentity;
    this._eapMethod = config.eapMethod;
    this._eapPassword = config.eapPassword;
    this._eapSupplicant = config.eapSupplicant;
    this._eapUserCert = config.eapUserCert;
    this._egressCos = config.egressCos;
    this._egressShapingProfile = config.egressShapingProfile;
    this._eip = config.eip;
    this._endpointCompliance = config.endpointCompliance;
    this._estimatedDownstreamBandwidth = config.estimatedDownstreamBandwidth;
    this._estimatedUpstreamBandwidth = config.estimatedUpstreamBandwidth;
    this._explicitFtpProxy = config.explicitFtpProxy;
    this._explicitWebProxy = config.explicitWebProxy;
    this._external = config.external;
    this._failActionOnExtender = config.failActionOnExtender;
    this._failAlertInterfaces = config.failAlertInterfaces;
    this._failAlertMethod = config.failAlertMethod;
    this._failDetect = config.failDetect;
    this._failDetectOption = config.failDetectOption;
    this._fdp = config.fdp;
    this._fortiheartbeat = config.fortiheartbeat;
    this._fortilink = config.fortilink;
    this._fortilinkBackupLink = config.fortilinkBackupLink;
    this._fortilinkNeighborDetect = config.fortilinkNeighborDetect;
    this._fortilinkSplitInterface = config.fortilinkSplitInterface;
    this._fortilinkStacking = config.fortilinkStacking;
    this._forwardDomain = config.forwardDomain;
    this._forwardErrorCorrection = config.forwardErrorCorrection;
    this._fpAnomaly = config.fpAnomaly;
    this._fpDisable = config.fpDisable;
    this._gatewayAddress = config.gatewayAddress;
    this._genericReceiveOffload = config.genericReceiveOffload;
    this._giGk = config.giGk;
    this._gwaddr = config.gwaddr;
    this._gwdetect = config.gwdetect;
    this._haPriority = config.haPriority;
    this._icmpAcceptRedirect = config.icmpAcceptRedirect;
    this._icmpRedirect = config.icmpRedirect;
    this._icmpSendRedirect = config.icmpSendRedirect;
    this._id = config.id;
    this._identAccept = config.identAccept;
    this._idleTimeout = config.idleTimeout;
    this._ifMdix = config.ifMdix;
    this._ifMedia = config.ifMedia;
    this._ikeSamlServer = config.ikeSamlServer;
    this._inForceVlanCos = config.inForceVlanCos;
    this._inbandwidth = config.inbandwidth;
    this._ingressCos = config.ingressCos;
    this._ingressShapingProfile = config.ingressShapingProfile;
    this._ingressSpilloverThreshold = config.ingressSpilloverThreshold;
    this._interconnectProfile = config.interconnectProfile;
    this._internal = config.internal;
    this._ip = config.ip;
    this._ipManagedByFortiipam = config.ipManagedByFortiipam;
    this._ipmac = config.ipmac;
    this._ipsSnifferMode = config.ipsSnifferMode;
    this._ipunnumbered = config.ipunnumbered;
    this._l2Forward = config.l2Forward;
    this._l2TpClient = config.l2TpClient;
    this._lacpHaSecondary = config.lacpHaSecondary;
    this._lacpHaSlave = config.lacpHaSlave;
    this._lacpMode = config.lacpMode;
    this._lacpSpeed = config.lacpSpeed;
    this._largeReceiveOffload = config.largeReceiveOffload;
    this._lcpEchoInterval = config.lcpEchoInterval;
    this._lcpMaxEchoFails = config.lcpMaxEchoFails;
    this._linkUpDelay = config.linkUpDelay;
    this._listenForticlientConnection = config.listenForticlientConnection;
    this._lldpNetworkPolicy = config.lldpNetworkPolicy;
    this._lldpReception = config.lldpReception;
    this._lldpTransmission = config.lldpTransmission;
    this._log = config.log;
    this._macaddr = config.macaddr;
    this._managedSubnetworkSize = config.managedSubnetworkSize;
    this._managementIp = config.managementIp;
    this._maxEgressBurstRate = config.maxEgressBurstRate;
    this._maxEgressRate = config.maxEgressRate;
    this._measuredDownstreamBandwidth = config.measuredDownstreamBandwidth;
    this._measuredUpstreamBandwidth = config.measuredUpstreamBandwidth;
    this._mediatype = config.mediatype;
    this._member = config.member;
    this._minLinks = config.minLinks;
    this._minLinksDown = config.minLinksDown;
    this._mirroringDirection = config.mirroringDirection;
    this._mirroringPort = config.mirroringPort;
    this._mode = config.mode;
    this._monitorBandwidth = config.monitorBandwidth;
    this._mtu = config.mtu;
    this._mtuOverride = config.mtuOverride;
    this._muxType = config.muxType;
    this._name = config.name;
    this._ndiscforward = config.ndiscforward;
    this._netbiosForward = config.netbiosForward;
    this._netflowSampler = config.netflowSampler;
    this._npQosProfile = config.npQosProfile;
    this._npuFastpath = config.npuFastpath;
    this._nst = config.nst;
    this._outForceVlanCos = config.outForceVlanCos;
    this._outbandwidth = config.outbandwidth;
    this._padtRetryTimeout = config.padtRetryTimeout;
    this._password = config.password;
    this._peerInterface = config.peerInterface;
    this._phyMode = config.phyMode;
    this._pingServStatus = config.pingServStatus;
    this._poe = config.poe;
    this._pollingInterval = config.pollingInterval;
    this._portMirroring = config.portMirroring;
    this._pppoeUnnumberedNegotiate = config.pppoeUnnumberedNegotiate;
    this._pptpAuthType = config.pptpAuthType;
    this._pptpClient = config.pptpClient;
    this._pptpPassword = config.pptpPassword;
    this._pptpServerIp = config.pptpServerIp;
    this._pptpTimeout = config.pptpTimeout;
    this._pptpUser = config.pptpUser;
    this._preserveSessionRoute = config.preserveSessionRoute;
    this._priority = config.priority;
    this._priorityOverride = config.priorityOverride;
    this._proxyCaptivePortal = config.proxyCaptivePortal;
    this._pvcAtmQos = config.pvcAtmQos;
    this._pvcChan = config.pvcChan;
    this._pvcCrc = config.pvcCrc;
    this._pvcPcr = config.pvcPcr;
    this._pvcScr = config.pvcScr;
    this._pvcVlanId = config.pvcVlanId;
    this._pvcVlanRxId = config.pvcVlanRxId;
    this._pvcVlanRxOp = config.pvcVlanRxOp;
    this._pvcVlanTxId = config.pvcVlanTxId;
    this._pvcVlanTxOp = config.pvcVlanTxOp;
    this._reachableTime = config.reachableTime;
    this._redundantInterface = config.redundantInterface;
    this._remoteIp = config.remoteIp;
    this._replacemsgOverrideGroup = config.replacemsgOverrideGroup;
    this._retransmission = config.retransmission;
    this._ringRx = config.ringRx;
    this._ringTx = config.ringTx;
    this._role = config.role;
    this._sampleDirection = config.sampleDirection;
    this._sampleRate = config.sampleRate;
    this._scanBotnetConnections = config.scanBotnetConnections;
    this._scopetype = config.scopetype;
    this._secondaryIp = config.secondaryIp;
    this._security8021XDynamicVlanId = config.security8021XDynamicVlanId;
    this._security8021XMaster = config.security8021XMaster;
    this._security8021XMemberMode = config.security8021XMemberMode;
    this._security8021XMode = config.security8021XMode;
    this._securityExemptList = config.securityExemptList;
    this._securityExternalLogout = config.securityExternalLogout;
    this._securityExternalWeb = config.securityExternalWeb;
    this._securityGroups = config.securityGroups;
    this._securityMacAuthBypass = config.securityMacAuthBypass;
    this._securityMode = config.securityMode;
    this._securityRedirectUrl = config.securityRedirectUrl;
    this._selectProfile30A35B = config.selectProfile30A35B;
    this._serviceName = config.serviceName;
    this._sflowSampler = config.sflowSampler;
    this._sfpDsl = config.sfpDsl;
    this._sfpDslAdslFallback = config.sfpDslAdslFallback;
    this._sfpDslAutodetect = config.sfpDslAutodetect;
    this._sfpDslMac = config.sfpDslMac;
    this._speed = config.speed;
    this._spilloverThreshold = config.spilloverThreshold;
    this._srcCheck = config.srcCheck;
    this._status = config.status;
    this._stp = config.stp;
    this._stpEdge = config.stpEdge;
    this._stpHaSecondary = config.stpHaSecondary;
    this._stpHaSlave = config.stpHaSlave;
    this._stpforward = config.stpforward;
    this._stpforwardMode = config.stpforwardMode;
    this._stripPriorityVlanTag = config.stripPriorityVlanTag;
    this._subst = config.subst;
    this._substituteDstMac = config.substituteDstMac;
    this._swAlgorithm = config.swAlgorithm;
    this._swcFirstCreate = config.swcFirstCreate;
    this._swcVlan = config.swcVlan;
    this._switch = config.switch;
    this._switchControllerAccessVlan = config.switchControllerAccessVlan;
    this._switchControllerArpInspection = config.switchControllerArpInspection;
    this._switchControllerAuth = config.switchControllerAuth;
    this._switchControllerDhcpSnooping = config.switchControllerDhcpSnooping;
    this._switchControllerDhcpSnoopingOption82 = config.switchControllerDhcpSnoopingOption82;
    this._switchControllerDhcpSnoopingVerifyMac = config.switchControllerDhcpSnoopingVerifyMac;
    this._switchControllerDynamic = config.switchControllerDynamic;
    this._switchControllerFeature = config.switchControllerFeature;
    this._switchControllerIgmpSnooping = config.switchControllerIgmpSnooping;
    this._switchControllerIgmpSnoopingFastLeave = config.switchControllerIgmpSnoopingFastLeave;
    this._switchControllerIgmpSnoopingProxy = config.switchControllerIgmpSnoopingProxy;
    this._switchControllerIotScanning = config.switchControllerIotScanning;
    this._switchControllerLearningLimit = config.switchControllerLearningLimit;
    this._switchControllerMgmtVlan = config.switchControllerMgmtVlan;
    this._switchControllerNac = config.switchControllerNac;
    this._switchControllerNetflowCollect = config.switchControllerNetflowCollect;
    this._switchControllerOffload = config.switchControllerOffload;
    this._switchControllerOffloadGw = config.switchControllerOffloadGw;
    this._switchControllerOffloadIp = config.switchControllerOffloadIp;
    this._switchControllerOffloading = config.switchControllerOffloading;
    this._switchControllerOffloadingGw = config.switchControllerOffloadingGw;
    this._switchControllerOffloadingIp = config.switchControllerOffloadingIp;
    this._switchControllerRadiusServer = config.switchControllerRadiusServer;
    this._switchControllerRspanMode = config.switchControllerRspanMode;
    this._switchControllerSourceIp = config.switchControllerSourceIp;
    this._switchControllerTrafficPolicy = config.switchControllerTrafficPolicy;
    this._systemId = config.systemId;
    this._systemIdType = config.systemIdType;
    this._tcMode = config.tcMode;
    this._tcpMss = config.tcpMss;
    this._trunk = config.trunk;
    this._trustIp61 = config.trustIp61;
    this._trustIp62 = config.trustIp62;
    this._trustIp63 = config.trustIp63;
    this._trustIp1 = config.trustIp1;
    this._trustIp2 = config.trustIp2;
    this._trustIp3 = config.trustIp3;
    this._type = config.type;
    this._username = config.username;
    this._vci = config.vci;
    this._vectoring = config.vectoring;
    this._vindex = config.vindex;
    this._vlan = config.vlan;
    this._vlanOpMode = config.vlanOpMode;
    this._vlanProtocol = config.vlanProtocol;
    this._vlanforward = config.vlanforward;
    this._vlanid = config.vlanid;
    this._vpi = config.vpi;
    this._vrf = config.vrf;
    this._vrrpVirtualMac = config.vrrpVirtualMac;
    this._wccp = config.wccp;
    this._weight = config.weight;
    this._wifi5GThreshold = config.wifi5GThreshold;
    this._wifiAcl = config.wifiAcl;
    this._wifiApBand = config.wifiApBand;
    this._wifiAuth = config.wifiAuth;
    this._wifiAutoConnect = config.wifiAutoConnect;
    this._wifiAutoSave = config.wifiAutoSave;
    this._wifiBroadcastSsid = config.wifiBroadcastSsid;
    this._wifiDnsServer1 = config.wifiDnsServer1;
    this._wifiDnsServer2 = config.wifiDnsServer2;
    this._wifiEncrypt = config.wifiEncrypt;
    this._wifiFragmentThreshold = config.wifiFragmentThreshold;
    this._wifiGateway = config.wifiGateway;
    this._wifiKey = config.wifiKey;
    this._wifiKeyindex = config.wifiKeyindex;
    this._wifiMacFilter = config.wifiMacFilter;
    this._wifiPassphrase = config.wifiPassphrase;
    this._wifiRadiusServer = config.wifiRadiusServer;
    this._wifiRtsThreshold = config.wifiRtsThreshold;
    this._wifiSecurity = config.wifiSecurity;
    this._wifiSsid = config.wifiSsid;
    this._wifiUsergroup = config.wifiUsergroup;
    this._winsIp = config.winsIp;
    this._ipv6.internalValue = config.ipv6;
    this._secondaryip.internalValue = config.secondaryip;
    this._vrrp.internalValue = config.vrrp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ac_name - computed: false, optional: true, required: false
  private _acName?: string; 
  public get acName() {
    return this.getStringAttribute('ac_name');
  }
  public set acName(value: string) {
    this._acName = value;
  }
  public resetAcName() {
    this._acName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acNameInput() {
    return this._acName;
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

  // aggregate - computed: false, optional: true, required: false
  private _aggregate?: string; 
  public get aggregate() {
    return this.getStringAttribute('aggregate');
  }
  public set aggregate(value: string) {
    this._aggregate = value;
  }
  public resetAggregate() {
    this._aggregate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateInput() {
    return this._aggregate;
  }

  // aggregate_type - computed: true, optional: true, required: false
  private _aggregateType?: string; 
  public get aggregateType() {
    return this.getStringAttribute('aggregate_type');
  }
  public set aggregateType(value: string) {
    this._aggregateType = value;
  }
  public resetAggregateType() {
    this._aggregateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateTypeInput() {
    return this._aggregateType;
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
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

  // allowaccess - computed: true, optional: true, required: false
  private _allowaccess?: string[]; 
  public get allowaccess() {
    return cdktf.Fn.tolist(this.getListAttribute('allowaccess'));
  }
  public set allowaccess(value: string[]) {
    this._allowaccess = value;
  }
  public resetAllowaccess() {
    this._allowaccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowaccessInput() {
    return this._allowaccess;
  }

  // annex - computed: true, optional: true, required: false
  private _annex?: string; 
  public get annex() {
    return this.getStringAttribute('annex');
  }
  public set annex(value: string) {
    this._annex = value;
  }
  public resetAnnex() {
    this._annex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annexInput() {
    return this._annex;
  }

  // ap_discover - computed: true, optional: true, required: false
  private _apDiscover?: string; 
  public get apDiscover() {
    return this.getStringAttribute('ap_discover');
  }
  public set apDiscover(value: string) {
    this._apDiscover = value;
  }
  public resetApDiscover() {
    this._apDiscover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apDiscoverInput() {
    return this._apDiscover;
  }

  // arpforward - computed: true, optional: true, required: false
  private _arpforward?: string; 
  public get arpforward() {
    return this.getStringAttribute('arpforward');
  }
  public set arpforward(value: string) {
    this._arpforward = value;
  }
  public resetArpforward() {
    this._arpforward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpforwardInput() {
    return this._arpforward;
  }

  // atm_protocol - computed: false, optional: true, required: false
  private _atmProtocol?: string; 
  public get atmProtocol() {
    return this.getStringAttribute('atm_protocol');
  }
  public set atmProtocol(value: string) {
    this._atmProtocol = value;
  }
  public resetAtmProtocol() {
    this._atmProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atmProtocolInput() {
    return this._atmProtocol;
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

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // auto_auth_extension_device - computed: true, optional: true, required: false
  private _autoAuthExtensionDevice?: string; 
  public get autoAuthExtensionDevice() {
    return this.getStringAttribute('auto_auth_extension_device');
  }
  public set autoAuthExtensionDevice(value: string) {
    this._autoAuthExtensionDevice = value;
  }
  public resetAutoAuthExtensionDevice() {
    this._autoAuthExtensionDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAuthExtensionDeviceInput() {
    return this._autoAuthExtensionDevice;
  }

  // bandwidth_measure_time - computed: false, optional: true, required: false
  private _bandwidthMeasureTime?: number; 
  public get bandwidthMeasureTime() {
    return this.getNumberAttribute('bandwidth_measure_time');
  }
  public set bandwidthMeasureTime(value: number) {
    this._bandwidthMeasureTime = value;
  }
  public resetBandwidthMeasureTime() {
    this._bandwidthMeasureTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthMeasureTimeInput() {
    return this._bandwidthMeasureTime;
  }

  // bfd - computed: true, optional: true, required: false
  private _bfd?: string; 
  public get bfd() {
    return this.getStringAttribute('bfd');
  }
  public set bfd(value: string) {
    this._bfd = value;
  }
  public resetBfd() {
    this._bfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd;
  }

  // bfd_desired_min_tx - computed: false, optional: true, required: false
  private _bfdDesiredMinTx?: number; 
  public get bfdDesiredMinTx() {
    return this.getNumberAttribute('bfd_desired_min_tx');
  }
  public set bfdDesiredMinTx(value: number) {
    this._bfdDesiredMinTx = value;
  }
  public resetBfdDesiredMinTx() {
    this._bfdDesiredMinTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdDesiredMinTxInput() {
    return this._bfdDesiredMinTx;
  }

  // bfd_detect_mult - computed: false, optional: true, required: false
  private _bfdDetectMult?: number; 
  public get bfdDetectMult() {
    return this.getNumberAttribute('bfd_detect_mult');
  }
  public set bfdDetectMult(value: number) {
    this._bfdDetectMult = value;
  }
  public resetBfdDetectMult() {
    this._bfdDetectMult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdDetectMultInput() {
    return this._bfdDetectMult;
  }

  // bfd_required_min_rx - computed: false, optional: true, required: false
  private _bfdRequiredMinRx?: number; 
  public get bfdRequiredMinRx() {
    return this.getNumberAttribute('bfd_required_min_rx');
  }
  public set bfdRequiredMinRx(value: number) {
    this._bfdRequiredMinRx = value;
  }
  public resetBfdRequiredMinRx() {
    this._bfdRequiredMinRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdRequiredMinRxInput() {
    return this._bfdRequiredMinRx;
  }

  // broadcast_forticlient_discovery - computed: false, optional: true, required: false
  private _broadcastForticlientDiscovery?: string; 
  public get broadcastForticlientDiscovery() {
    return this.getStringAttribute('broadcast_forticlient_discovery');
  }
  public set broadcastForticlientDiscovery(value: string) {
    this._broadcastForticlientDiscovery = value;
  }
  public resetBroadcastForticlientDiscovery() {
    this._broadcastForticlientDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastForticlientDiscoveryInput() {
    return this._broadcastForticlientDiscovery;
  }

  // broadcast_forward - computed: true, optional: true, required: false
  private _broadcastForward?: string; 
  public get broadcastForward() {
    return this.getStringAttribute('broadcast_forward');
  }
  public set broadcastForward(value: string) {
    this._broadcastForward = value;
  }
  public resetBroadcastForward() {
    this._broadcastForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastForwardInput() {
    return this._broadcastForward;
  }

  // captive_portal - computed: false, optional: true, required: false
  private _captivePortal?: number; 
  public get captivePortal() {
    return this.getNumberAttribute('captive_portal');
  }
  public set captivePortal(value: number) {
    this._captivePortal = value;
  }
  public resetCaptivePortal() {
    this._captivePortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captivePortalInput() {
    return this._captivePortal;
  }

  // cli_conn_status - computed: false, optional: true, required: false
  private _cliConnStatus?: number; 
  public get cliConnStatus() {
    return this.getNumberAttribute('cli_conn_status');
  }
  public set cliConnStatus(value: number) {
    this._cliConnStatus = value;
  }
  public resetCliConnStatus() {
    this._cliConnStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliConnStatusInput() {
    return this._cliConnStatus;
  }

  // color - computed: false, optional: true, required: false
  private _color?: number; 
  public get color() {
    return this.getNumberAttribute('color');
  }
  public set color(value: number) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // ddns - computed: false, optional: true, required: false
  private _ddns?: string; 
  public get ddns() {
    return this.getStringAttribute('ddns');
  }
  public set ddns(value: string) {
    this._ddns = value;
  }
  public resetDdns() {
    this._ddns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsInput() {
    return this._ddns;
  }

  // ddns_auth - computed: false, optional: true, required: false
  private _ddnsAuth?: string; 
  public get ddnsAuth() {
    return this.getStringAttribute('ddns_auth');
  }
  public set ddnsAuth(value: string) {
    this._ddnsAuth = value;
  }
  public resetDdnsAuth() {
    this._ddnsAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsAuthInput() {
    return this._ddnsAuth;
  }

  // ddns_domain - computed: false, optional: true, required: false
  private _ddnsDomain?: string; 
  public get ddnsDomain() {
    return this.getStringAttribute('ddns_domain');
  }
  public set ddnsDomain(value: string) {
    this._ddnsDomain = value;
  }
  public resetDdnsDomain() {
    this._ddnsDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsDomainInput() {
    return this._ddnsDomain;
  }

  // ddns_key - computed: false, optional: true, required: false
  private _ddnsKey?: string; 
  public get ddnsKey() {
    return this.getStringAttribute('ddns_key');
  }
  public set ddnsKey(value: string) {
    this._ddnsKey = value;
  }
  public resetDdnsKey() {
    this._ddnsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsKeyInput() {
    return this._ddnsKey;
  }

  // ddns_keyname - computed: false, optional: true, required: false
  private _ddnsKeyname?: string; 
  public get ddnsKeyname() {
    return this.getStringAttribute('ddns_keyname');
  }
  public set ddnsKeyname(value: string) {
    this._ddnsKeyname = value;
  }
  public resetDdnsKeyname() {
    this._ddnsKeyname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsKeynameInput() {
    return this._ddnsKeyname;
  }

  // ddns_password - computed: true, optional: true, required: false
  private _ddnsPassword?: string[]; 
  public get ddnsPassword() {
    return cdktf.Fn.tolist(this.getListAttribute('ddns_password'));
  }
  public set ddnsPassword(value: string[]) {
    this._ddnsPassword = value;
  }
  public resetDdnsPassword() {
    this._ddnsPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsPasswordInput() {
    return this._ddnsPassword;
  }

  // ddns_server - computed: false, optional: true, required: false
  private _ddnsServer?: string; 
  public get ddnsServer() {
    return this.getStringAttribute('ddns_server');
  }
  public set ddnsServer(value: string) {
    this._ddnsServer = value;
  }
  public resetDdnsServer() {
    this._ddnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsServerInput() {
    return this._ddnsServer;
  }

  // ddns_server_ip - computed: false, optional: true, required: false
  private _ddnsServerIp?: string; 
  public get ddnsServerIp() {
    return this.getStringAttribute('ddns_server_ip');
  }
  public set ddnsServerIp(value: string) {
    this._ddnsServerIp = value;
  }
  public resetDdnsServerIp() {
    this._ddnsServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsServerIpInput() {
    return this._ddnsServerIp;
  }

  // ddns_sn - computed: false, optional: true, required: false
  private _ddnsSn?: string; 
  public get ddnsSn() {
    return this.getStringAttribute('ddns_sn');
  }
  public set ddnsSn(value: string) {
    this._ddnsSn = value;
  }
  public resetDdnsSn() {
    this._ddnsSn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsSnInput() {
    return this._ddnsSn;
  }

  // ddns_ttl - computed: false, optional: true, required: false
  private _ddnsTtl?: number; 
  public get ddnsTtl() {
    return this.getNumberAttribute('ddns_ttl');
  }
  public set ddnsTtl(value: number) {
    this._ddnsTtl = value;
  }
  public resetDdnsTtl() {
    this._ddnsTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsTtlInput() {
    return this._ddnsTtl;
  }

  // ddns_username - computed: false, optional: true, required: false
  private _ddnsUsername?: string; 
  public get ddnsUsername() {
    return this.getStringAttribute('ddns_username');
  }
  public set ddnsUsername(value: string) {
    this._ddnsUsername = value;
  }
  public resetDdnsUsername() {
    this._ddnsUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsUsernameInput() {
    return this._ddnsUsername;
  }

  // ddns_zone - computed: false, optional: true, required: false
  private _ddnsZone?: string; 
  public get ddnsZone() {
    return this.getStringAttribute('ddns_zone');
  }
  public set ddnsZone(value: string) {
    this._ddnsZone = value;
  }
  public resetDdnsZone() {
    this._ddnsZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsZoneInput() {
    return this._ddnsZone;
  }

  // dedicated_to - computed: true, optional: true, required: false
  private _dedicatedTo?: string; 
  public get dedicatedTo() {
    return this.getStringAttribute('dedicated_to');
  }
  public set dedicatedTo(value: string) {
    this._dedicatedTo = value;
  }
  public resetDedicatedTo() {
    this._dedicatedTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedToInput() {
    return this._dedicatedTo;
  }

  // default_purdue_level - computed: true, optional: true, required: false
  private _defaultPurdueLevel?: string; 
  public get defaultPurdueLevel() {
    return this.getStringAttribute('default_purdue_level');
  }
  public set defaultPurdueLevel(value: string) {
    this._defaultPurdueLevel = value;
  }
  public resetDefaultPurdueLevel() {
    this._defaultPurdueLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPurdueLevelInput() {
    return this._defaultPurdueLevel;
  }

  // defaultgw - computed: false, optional: true, required: false
  private _defaultgw?: string; 
  public get defaultgw() {
    return this.getStringAttribute('defaultgw');
  }
  public set defaultgw(value: string) {
    this._defaultgw = value;
  }
  public resetDefaultgw() {
    this._defaultgw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultgwInput() {
    return this._defaultgw;
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

  // detected_peer_mtu - computed: false, optional: true, required: false
  private _detectedPeerMtu?: number; 
  public get detectedPeerMtu() {
    return this.getNumberAttribute('detected_peer_mtu');
  }
  public set detectedPeerMtu(value: number) {
    this._detectedPeerMtu = value;
  }
  public resetDetectedPeerMtu() {
    this._detectedPeerMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectedPeerMtuInput() {
    return this._detectedPeerMtu;
  }

  // detectprotocol - computed: true, optional: true, required: false
  private _detectprotocol?: string[]; 
  public get detectprotocol() {
    return cdktf.Fn.tolist(this.getListAttribute('detectprotocol'));
  }
  public set detectprotocol(value: string[]) {
    this._detectprotocol = value;
  }
  public resetDetectprotocol() {
    this._detectprotocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectprotocolInput() {
    return this._detectprotocol;
  }

  // detectserver - computed: false, optional: true, required: false
  private _detectserver?: string; 
  public get detectserver() {
    return this.getStringAttribute('detectserver');
  }
  public set detectserver(value: string) {
    this._detectserver = value;
  }
  public resetDetectserver() {
    this._detectserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectserverInput() {
    return this._detectserver;
  }

  // device_access_list - computed: false, optional: true, required: false
  private _deviceAccessList?: string; 
  public get deviceAccessList() {
    return this.getStringAttribute('device_access_list');
  }
  public set deviceAccessList(value: string) {
    this._deviceAccessList = value;
  }
  public resetDeviceAccessList() {
    this._deviceAccessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceAccessListInput() {
    return this._deviceAccessList;
  }

  // device_identification - computed: true, optional: true, required: false
  private _deviceIdentification?: string; 
  public get deviceIdentification() {
    return this.getStringAttribute('device_identification');
  }
  public set deviceIdentification(value: string) {
    this._deviceIdentification = value;
  }
  public resetDeviceIdentification() {
    this._deviceIdentification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdentificationInput() {
    return this._deviceIdentification;
  }

  // device_identification_active_scan - computed: false, optional: true, required: false
  private _deviceIdentificationActiveScan?: string; 
  public get deviceIdentificationActiveScan() {
    return this.getStringAttribute('device_identification_active_scan');
  }
  public set deviceIdentificationActiveScan(value: string) {
    this._deviceIdentificationActiveScan = value;
  }
  public resetDeviceIdentificationActiveScan() {
    this._deviceIdentificationActiveScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdentificationActiveScanInput() {
    return this._deviceIdentificationActiveScan;
  }

  // device_netscan - computed: false, optional: true, required: false
  private _deviceNetscan?: string; 
  public get deviceNetscan() {
    return this.getStringAttribute('device_netscan');
  }
  public set deviceNetscan(value: string) {
    this._deviceNetscan = value;
  }
  public resetDeviceNetscan() {
    this._deviceNetscan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNetscanInput() {
    return this._deviceNetscan;
  }

  // device_user_identification - computed: false, optional: true, required: false
  private _deviceUserIdentification?: string; 
  public get deviceUserIdentification() {
    return this.getStringAttribute('device_user_identification');
  }
  public set deviceUserIdentification(value: string) {
    this._deviceUserIdentification = value;
  }
  public resetDeviceUserIdentification() {
    this._deviceUserIdentification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceUserIdentificationInput() {
    return this._deviceUserIdentification;
  }

  // devindex - computed: false, optional: true, required: false
  private _devindex?: number; 
  public get devindex() {
    return this.getNumberAttribute('devindex');
  }
  public set devindex(value: number) {
    this._devindex = value;
  }
  public resetDevindex() {
    this._devindex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devindexInput() {
    return this._devindex;
  }

  // dhcp_broadcast_flag - computed: true, optional: true, required: false
  private _dhcpBroadcastFlag?: string; 
  public get dhcpBroadcastFlag() {
    return this.getStringAttribute('dhcp_broadcast_flag');
  }
  public set dhcpBroadcastFlag(value: string) {
    this._dhcpBroadcastFlag = value;
  }
  public resetDhcpBroadcastFlag() {
    this._dhcpBroadcastFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpBroadcastFlagInput() {
    return this._dhcpBroadcastFlag;
  }

  // dhcp_classless_route_addition - computed: true, optional: true, required: false
  private _dhcpClasslessRouteAddition?: string; 
  public get dhcpClasslessRouteAddition() {
    return this.getStringAttribute('dhcp_classless_route_addition');
  }
  public set dhcpClasslessRouteAddition(value: string) {
    this._dhcpClasslessRouteAddition = value;
  }
  public resetDhcpClasslessRouteAddition() {
    this._dhcpClasslessRouteAddition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpClasslessRouteAdditionInput() {
    return this._dhcpClasslessRouteAddition;
  }

  // dhcp_client_identifier - computed: false, optional: true, required: false
  private _dhcpClientIdentifier?: string; 
  public get dhcpClientIdentifier() {
    return this.getStringAttribute('dhcp_client_identifier');
  }
  public set dhcpClientIdentifier(value: string) {
    this._dhcpClientIdentifier = value;
  }
  public resetDhcpClientIdentifier() {
    this._dhcpClientIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpClientIdentifierInput() {
    return this._dhcpClientIdentifier;
  }

  // dhcp_relay_agent_option - computed: false, optional: true, required: false
  private _dhcpRelayAgentOption?: string; 
  public get dhcpRelayAgentOption() {
    return this.getStringAttribute('dhcp_relay_agent_option');
  }
  public set dhcpRelayAgentOption(value: string) {
    this._dhcpRelayAgentOption = value;
  }
  public resetDhcpRelayAgentOption() {
    this._dhcpRelayAgentOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRelayAgentOptionInput() {
    return this._dhcpRelayAgentOption;
  }

  // dhcp_relay_circuit_id - computed: false, optional: true, required: false
  private _dhcpRelayCircuitId?: string; 
  public get dhcpRelayCircuitId() {
    return this.getStringAttribute('dhcp_relay_circuit_id');
  }
  public set dhcpRelayCircuitId(value: string) {
    this._dhcpRelayCircuitId = value;
  }
  public resetDhcpRelayCircuitId() {
    this._dhcpRelayCircuitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRelayCircuitIdInput() {
    return this._dhcpRelayCircuitId;
  }

  // dhcp_relay_interface - computed: false, optional: true, required: false
  private _dhcpRelayInterface?: string; 
  public get dhcpRelayInterface() {
    return this.getStringAttribute('dhcp_relay_interface');
  }
  public set dhcpRelayInterface(value: string) {
    this._dhcpRelayInterface = value;
  }
  public resetDhcpRelayInterface() {
    this._dhcpRelayInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRelayInterfaceInput() {
    return this._dhcpRelayInterface;
  }

  // dhcp_relay_interface_select_method - computed: true, optional: true, required: false
  private _dhcpRelayInterfaceSelectMethod?: string; 
  public get dhcpRelayInterfaceSelectMethod() {
    return this.getStringAttribute('dhcp_relay_interface_select_method');
  }
  public set dhcpRelayInterfaceSelectMethod(value: string) {
    this._dhcpRelayInterfaceSelectMethod = value;
  }
  public resetDhcpRelayInterfaceSelectMethod() {
    this._dhcpRelayInterfaceSelectMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRelayInterfaceSelectMethodInput() {
    return this._dhcpRelayInterfaceSelectMethod;
  }

  // dhcp_relay_ip - computed: true, optional: true, required: false
  private _dhcpRelayIp?: string[]; 
  public get dhcpRelayIp() {
    return cdktf.Fn.tolist(this.getListAttribute('dhcp_relay_ip'));
  }
  public set dhcpRelayIp(value: string[]) {
    this._dhcpRelayIp = value;
  }
  public resetDhcpRelayIp() {
    this._dhcpRelayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRelayIpInput() {
    return this._dhcpRelayIp;
  }

  // dhcp_relay_link_selection - computed: true, optional: true, required: false
  private _dhcpRelayLinkSelection?: string; 
  public get dhcpRelayLinkSelection() {
    return this.getStringAttribute('dhcp_relay_link_selection');
  }
  public set dhcpRelayLinkSelection(value: string) {
    this._dhcpRelayLinkSelection = value;
  }
  public resetDhcpRelayLinkSelection() {
    this._dhcpRelayLinkSelection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRelayLinkSelectionInput() {
    return this._dhcpRelayLinkSelection;
  }

  // dhcp_relay_request_all_server - computed: true, optional: true, required: false
  private _dhcpRelayRequestAllServer?: string; 
  public get dhcpRelayRequestAllServer() {
    return this.getStringAttribute('dhcp_relay_request_all_server');
  }
  public set dhcpRelayRequestAllServer(value: string) {
    this._dhcpRelayRequestAllServer = value;
  }
  public resetDhcpRelayRequestAllServer() {
    this._dhcpRelayRequestAllServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRelayRequestAllServerInput() {
    return this._dhcpRelayRequestAllServer;
  }

  // dhcp_relay_service - computed: true, optional: true, required: false
  private _dhcpRelayService?: string; 
  public get dhcpRelayService() {
    return this.getStringAttribute('dhcp_relay_service');
  }
  public set dhcpRelayService(value: string) {
    this._dhcpRelayService = value;
  }
  public resetDhcpRelayService() {
    this._dhcpRelayService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRelayServiceInput() {
    return this._dhcpRelayService;
  }

  // dhcp_relay_source_ip - computed: true, optional: true, required: false
  private _dhcpRelaySourceIp?: string; 
  public get dhcpRelaySourceIp() {
    return this.getStringAttribute('dhcp_relay_source_ip');
  }
  public set dhcpRelaySourceIp(value: string) {
    this._dhcpRelaySourceIp = value;
  }
  public resetDhcpRelaySourceIp() {
    this._dhcpRelaySourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRelaySourceIpInput() {
    return this._dhcpRelaySourceIp;
  }

  // dhcp_relay_type - computed: false, optional: true, required: false
  private _dhcpRelayType?: string; 
  public get dhcpRelayType() {
    return this.getStringAttribute('dhcp_relay_type');
  }
  public set dhcpRelayType(value: string) {
    this._dhcpRelayType = value;
  }
  public resetDhcpRelayType() {
    this._dhcpRelayType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRelayTypeInput() {
    return this._dhcpRelayType;
  }

  // dhcp_renew_time - computed: false, optional: true, required: false
  private _dhcpRenewTime?: number; 
  public get dhcpRenewTime() {
    return this.getNumberAttribute('dhcp_renew_time');
  }
  public set dhcpRenewTime(value: number) {
    this._dhcpRenewTime = value;
  }
  public resetDhcpRenewTime() {
    this._dhcpRenewTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRenewTimeInput() {
    return this._dhcpRenewTime;
  }

  // dhcp_smart_relay - computed: true, optional: true, required: false
  private _dhcpSmartRelay?: string; 
  public get dhcpSmartRelay() {
    return this.getStringAttribute('dhcp_smart_relay');
  }
  public set dhcpSmartRelay(value: string) {
    this._dhcpSmartRelay = value;
  }
  public resetDhcpSmartRelay() {
    this._dhcpSmartRelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpSmartRelayInput() {
    return this._dhcpSmartRelay;
  }

  // disc_retry_timeout - computed: false, optional: true, required: false
  private _discRetryTimeout?: number; 
  public get discRetryTimeout() {
    return this.getNumberAttribute('disc_retry_timeout');
  }
  public set discRetryTimeout(value: number) {
    this._discRetryTimeout = value;
  }
  public resetDiscRetryTimeout() {
    this._discRetryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discRetryTimeoutInput() {
    return this._discRetryTimeout;
  }

  // disconnect_threshold - computed: false, optional: true, required: false
  private _disconnectThreshold?: number; 
  public get disconnectThreshold() {
    return this.getNumberAttribute('disconnect_threshold');
  }
  public set disconnectThreshold(value: number) {
    this._disconnectThreshold = value;
  }
  public resetDisconnectThreshold() {
    this._disconnectThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disconnectThresholdInput() {
    return this._disconnectThreshold;
  }

  // distance - computed: false, optional: true, required: false
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

  // dns_query - computed: false, optional: true, required: false
  private _dnsQuery?: string; 
  public get dnsQuery() {
    return this.getStringAttribute('dns_query');
  }
  public set dnsQuery(value: string) {
    this._dnsQuery = value;
  }
  public resetDnsQuery() {
    this._dnsQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsQueryInput() {
    return this._dnsQuery;
  }

  // dns_server_override - computed: false, optional: true, required: false
  private _dnsServerOverride?: string; 
  public get dnsServerOverride() {
    return this.getStringAttribute('dns_server_override');
  }
  public set dnsServerOverride(value: string) {
    this._dnsServerOverride = value;
  }
  public resetDnsServerOverride() {
    this._dnsServerOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerOverrideInput() {
    return this._dnsServerOverride;
  }

  // dns_server_protocol - computed: true, optional: true, required: false
  private _dnsServerProtocol?: string[]; 
  public get dnsServerProtocol() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_server_protocol'));
  }
  public set dnsServerProtocol(value: string[]) {
    this._dnsServerProtocol = value;
  }
  public resetDnsServerProtocol() {
    this._dnsServerProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerProtocolInput() {
    return this._dnsServerProtocol;
  }

  // drop_fragment - computed: true, optional: true, required: false
  private _dropFragment?: string; 
  public get dropFragment() {
    return this.getStringAttribute('drop_fragment');
  }
  public set dropFragment(value: string) {
    this._dropFragment = value;
  }
  public resetDropFragment() {
    this._dropFragment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropFragmentInput() {
    return this._dropFragment;
  }

  // drop_overlapped_fragment - computed: true, optional: true, required: false
  private _dropOverlappedFragment?: string; 
  public get dropOverlappedFragment() {
    return this.getStringAttribute('drop_overlapped_fragment');
  }
  public set dropOverlappedFragment(value: string) {
    this._dropOverlappedFragment = value;
  }
  public resetDropOverlappedFragment() {
    this._dropOverlappedFragment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropOverlappedFragmentInput() {
    return this._dropOverlappedFragment;
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

  // eap_ca_cert - computed: true, optional: true, required: false
  private _eapCaCert?: string[]; 
  public get eapCaCert() {
    return cdktf.Fn.tolist(this.getListAttribute('eap_ca_cert'));
  }
  public set eapCaCert(value: string[]) {
    this._eapCaCert = value;
  }
  public resetEapCaCert() {
    this._eapCaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapCaCertInput() {
    return this._eapCaCert;
  }

  // eap_identity - computed: false, optional: true, required: false
  private _eapIdentity?: string; 
  public get eapIdentity() {
    return this.getStringAttribute('eap_identity');
  }
  public set eapIdentity(value: string) {
    this._eapIdentity = value;
  }
  public resetEapIdentity() {
    this._eapIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapIdentityInput() {
    return this._eapIdentity;
  }

  // eap_method - computed: false, optional: true, required: false
  private _eapMethod?: string; 
  public get eapMethod() {
    return this.getStringAttribute('eap_method');
  }
  public set eapMethod(value: string) {
    this._eapMethod = value;
  }
  public resetEapMethod() {
    this._eapMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapMethodInput() {
    return this._eapMethod;
  }

  // eap_password - computed: true, optional: true, required: false
  private _eapPassword?: string[]; 
  public get eapPassword() {
    return cdktf.Fn.tolist(this.getListAttribute('eap_password'));
  }
  public set eapPassword(value: string[]) {
    this._eapPassword = value;
  }
  public resetEapPassword() {
    this._eapPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapPasswordInput() {
    return this._eapPassword;
  }

  // eap_supplicant - computed: true, optional: true, required: false
  private _eapSupplicant?: string; 
  public get eapSupplicant() {
    return this.getStringAttribute('eap_supplicant');
  }
  public set eapSupplicant(value: string) {
    this._eapSupplicant = value;
  }
  public resetEapSupplicant() {
    this._eapSupplicant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapSupplicantInput() {
    return this._eapSupplicant;
  }

  // eap_user_cert - computed: true, optional: true, required: false
  private _eapUserCert?: string[]; 
  public get eapUserCert() {
    return cdktf.Fn.tolist(this.getListAttribute('eap_user_cert'));
  }
  public set eapUserCert(value: string[]) {
    this._eapUserCert = value;
  }
  public resetEapUserCert() {
    this._eapUserCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapUserCertInput() {
    return this._eapUserCert;
  }

  // egress_cos - computed: true, optional: true, required: false
  private _egressCos?: string; 
  public get egressCos() {
    return this.getStringAttribute('egress_cos');
  }
  public set egressCos(value: string) {
    this._egressCos = value;
  }
  public resetEgressCos() {
    this._egressCos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressCosInput() {
    return this._egressCos;
  }

  // egress_shaping_profile - computed: false, optional: true, required: false
  private _egressShapingProfile?: string; 
  public get egressShapingProfile() {
    return this.getStringAttribute('egress_shaping_profile');
  }
  public set egressShapingProfile(value: string) {
    this._egressShapingProfile = value;
  }
  public resetEgressShapingProfile() {
    this._egressShapingProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressShapingProfileInput() {
    return this._egressShapingProfile;
  }

  // eip - computed: true, optional: true, required: false
  private _eip?: string; 
  public get eip() {
    return this.getStringAttribute('eip');
  }
  public set eip(value: string) {
    this._eip = value;
  }
  public resetEip() {
    this._eip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eipInput() {
    return this._eip;
  }

  // endpoint_compliance - computed: false, optional: true, required: false
  private _endpointCompliance?: string; 
  public get endpointCompliance() {
    return this.getStringAttribute('endpoint_compliance');
  }
  public set endpointCompliance(value: string) {
    this._endpointCompliance = value;
  }
  public resetEndpointCompliance() {
    this._endpointCompliance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointComplianceInput() {
    return this._endpointCompliance;
  }

  // estimated_downstream_bandwidth - computed: false, optional: true, required: false
  private _estimatedDownstreamBandwidth?: number; 
  public get estimatedDownstreamBandwidth() {
    return this.getNumberAttribute('estimated_downstream_bandwidth');
  }
  public set estimatedDownstreamBandwidth(value: number) {
    this._estimatedDownstreamBandwidth = value;
  }
  public resetEstimatedDownstreamBandwidth() {
    this._estimatedDownstreamBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estimatedDownstreamBandwidthInput() {
    return this._estimatedDownstreamBandwidth;
  }

  // estimated_upstream_bandwidth - computed: false, optional: true, required: false
  private _estimatedUpstreamBandwidth?: number; 
  public get estimatedUpstreamBandwidth() {
    return this.getNumberAttribute('estimated_upstream_bandwidth');
  }
  public set estimatedUpstreamBandwidth(value: number) {
    this._estimatedUpstreamBandwidth = value;
  }
  public resetEstimatedUpstreamBandwidth() {
    this._estimatedUpstreamBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estimatedUpstreamBandwidthInput() {
    return this._estimatedUpstreamBandwidth;
  }

  // explicit_ftp_proxy - computed: true, optional: true, required: false
  private _explicitFtpProxy?: string; 
  public get explicitFtpProxy() {
    return this.getStringAttribute('explicit_ftp_proxy');
  }
  public set explicitFtpProxy(value: string) {
    this._explicitFtpProxy = value;
  }
  public resetExplicitFtpProxy() {
    this._explicitFtpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitFtpProxyInput() {
    return this._explicitFtpProxy;
  }

  // explicit_web_proxy - computed: true, optional: true, required: false
  private _explicitWebProxy?: string; 
  public get explicitWebProxy() {
    return this.getStringAttribute('explicit_web_proxy');
  }
  public set explicitWebProxy(value: string) {
    this._explicitWebProxy = value;
  }
  public resetExplicitWebProxy() {
    this._explicitWebProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitWebProxyInput() {
    return this._explicitWebProxy;
  }

  // external - computed: true, optional: true, required: false
  private _external?: string; 
  public get external() {
    return this.getStringAttribute('external');
  }
  public set external(value: string) {
    this._external = value;
  }
  public resetExternal() {
    this._external = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external;
  }

  // fail_action_on_extender - computed: true, optional: true, required: false
  private _failActionOnExtender?: string; 
  public get failActionOnExtender() {
    return this.getStringAttribute('fail_action_on_extender');
  }
  public set failActionOnExtender(value: string) {
    this._failActionOnExtender = value;
  }
  public resetFailActionOnExtender() {
    this._failActionOnExtender = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failActionOnExtenderInput() {
    return this._failActionOnExtender;
  }

  // fail_alert_interfaces - computed: false, optional: true, required: false
  private _failAlertInterfaces?: string; 
  public get failAlertInterfaces() {
    return this.getStringAttribute('fail_alert_interfaces');
  }
  public set failAlertInterfaces(value: string) {
    this._failAlertInterfaces = value;
  }
  public resetFailAlertInterfaces() {
    this._failAlertInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failAlertInterfacesInput() {
    return this._failAlertInterfaces;
  }

  // fail_alert_method - computed: false, optional: true, required: false
  private _failAlertMethod?: string; 
  public get failAlertMethod() {
    return this.getStringAttribute('fail_alert_method');
  }
  public set failAlertMethod(value: string) {
    this._failAlertMethod = value;
  }
  public resetFailAlertMethod() {
    this._failAlertMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failAlertMethodInput() {
    return this._failAlertMethod;
  }

  // fail_detect - computed: true, optional: true, required: false
  private _failDetect?: string; 
  public get failDetect() {
    return this.getStringAttribute('fail_detect');
  }
  public set failDetect(value: string) {
    this._failDetect = value;
  }
  public resetFailDetect() {
    this._failDetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failDetectInput() {
    return this._failDetect;
  }

  // fail_detect_option - computed: true, optional: true, required: false
  private _failDetectOption?: string[]; 
  public get failDetectOption() {
    return cdktf.Fn.tolist(this.getListAttribute('fail_detect_option'));
  }
  public set failDetectOption(value: string[]) {
    this._failDetectOption = value;
  }
  public resetFailDetectOption() {
    this._failDetectOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failDetectOptionInput() {
    return this._failDetectOption;
  }

  // fdp - computed: false, optional: true, required: false
  private _fdp?: string; 
  public get fdp() {
    return this.getStringAttribute('fdp');
  }
  public set fdp(value: string) {
    this._fdp = value;
  }
  public resetFdp() {
    this._fdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fdpInput() {
    return this._fdp;
  }

  // fortiheartbeat - computed: false, optional: true, required: false
  private _fortiheartbeat?: string; 
  public get fortiheartbeat() {
    return this.getStringAttribute('fortiheartbeat');
  }
  public set fortiheartbeat(value: string) {
    this._fortiheartbeat = value;
  }
  public resetFortiheartbeat() {
    this._fortiheartbeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiheartbeatInput() {
    return this._fortiheartbeat;
  }

  // fortilink - computed: true, optional: true, required: false
  private _fortilink?: string; 
  public get fortilink() {
    return this.getStringAttribute('fortilink');
  }
  public set fortilink(value: string) {
    this._fortilink = value;
  }
  public resetFortilink() {
    this._fortilink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortilinkInput() {
    return this._fortilink;
  }

  // fortilink_backup_link - computed: false, optional: true, required: false
  private _fortilinkBackupLink?: number; 
  public get fortilinkBackupLink() {
    return this.getNumberAttribute('fortilink_backup_link');
  }
  public set fortilinkBackupLink(value: number) {
    this._fortilinkBackupLink = value;
  }
  public resetFortilinkBackupLink() {
    this._fortilinkBackupLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortilinkBackupLinkInput() {
    return this._fortilinkBackupLink;
  }

  // fortilink_neighbor_detect - computed: true, optional: true, required: false
  private _fortilinkNeighborDetect?: string; 
  public get fortilinkNeighborDetect() {
    return this.getStringAttribute('fortilink_neighbor_detect');
  }
  public set fortilinkNeighborDetect(value: string) {
    this._fortilinkNeighborDetect = value;
  }
  public resetFortilinkNeighborDetect() {
    this._fortilinkNeighborDetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortilinkNeighborDetectInput() {
    return this._fortilinkNeighborDetect;
  }

  // fortilink_split_interface - computed: false, optional: true, required: false
  private _fortilinkSplitInterface?: string; 
  public get fortilinkSplitInterface() {
    return this.getStringAttribute('fortilink_split_interface');
  }
  public set fortilinkSplitInterface(value: string) {
    this._fortilinkSplitInterface = value;
  }
  public resetFortilinkSplitInterface() {
    this._fortilinkSplitInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortilinkSplitInterfaceInput() {
    return this._fortilinkSplitInterface;
  }

  // fortilink_stacking - computed: true, optional: true, required: false
  private _fortilinkStacking?: string; 
  public get fortilinkStacking() {
    return this.getStringAttribute('fortilink_stacking');
  }
  public set fortilinkStacking(value: string) {
    this._fortilinkStacking = value;
  }
  public resetFortilinkStacking() {
    this._fortilinkStacking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortilinkStackingInput() {
    return this._fortilinkStacking;
  }

  // forward_domain - computed: false, optional: true, required: false
  private _forwardDomain?: number; 
  public get forwardDomain() {
    return this.getNumberAttribute('forward_domain');
  }
  public set forwardDomain(value: number) {
    this._forwardDomain = value;
  }
  public resetForwardDomain() {
    this._forwardDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardDomainInput() {
    return this._forwardDomain;
  }

  // forward_error_correction - computed: true, optional: true, required: false
  private _forwardErrorCorrection?: string; 
  public get forwardErrorCorrection() {
    return this.getStringAttribute('forward_error_correction');
  }
  public set forwardErrorCorrection(value: string) {
    this._forwardErrorCorrection = value;
  }
  public resetForwardErrorCorrection() {
    this._forwardErrorCorrection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardErrorCorrectionInput() {
    return this._forwardErrorCorrection;
  }

  // fp_anomaly - computed: true, optional: true, required: false
  private _fpAnomaly?: string[]; 
  public get fpAnomaly() {
    return cdktf.Fn.tolist(this.getListAttribute('fp_anomaly'));
  }
  public set fpAnomaly(value: string[]) {
    this._fpAnomaly = value;
  }
  public resetFpAnomaly() {
    this._fpAnomaly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpAnomalyInput() {
    return this._fpAnomaly;
  }

  // fp_disable - computed: true, optional: true, required: false
  private _fpDisable?: string[]; 
  public get fpDisable() {
    return cdktf.Fn.tolist(this.getListAttribute('fp_disable'));
  }
  public set fpDisable(value: string[]) {
    this._fpDisable = value;
  }
  public resetFpDisable() {
    this._fpDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpDisableInput() {
    return this._fpDisable;
  }

  // gateway_address - computed: false, optional: true, required: false
  private _gatewayAddress?: string; 
  public get gatewayAddress() {
    return this.getStringAttribute('gateway_address');
  }
  public set gatewayAddress(value: string) {
    this._gatewayAddress = value;
  }
  public resetGatewayAddress() {
    this._gatewayAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayAddressInput() {
    return this._gatewayAddress;
  }

  // generic_receive_offload - computed: false, optional: true, required: false
  private _genericReceiveOffload?: string; 
  public get genericReceiveOffload() {
    return this.getStringAttribute('generic_receive_offload');
  }
  public set genericReceiveOffload(value: string) {
    this._genericReceiveOffload = value;
  }
  public resetGenericReceiveOffload() {
    this._genericReceiveOffload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genericReceiveOffloadInput() {
    return this._genericReceiveOffload;
  }

  // gi_gk - computed: true, optional: true, required: false
  private _giGk?: string; 
  public get giGk() {
    return this.getStringAttribute('gi_gk');
  }
  public set giGk(value: string) {
    this._giGk = value;
  }
  public resetGiGk() {
    this._giGk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get giGkInput() {
    return this._giGk;
  }

  // gwaddr - computed: false, optional: true, required: false
  private _gwaddr?: string; 
  public get gwaddr() {
    return this.getStringAttribute('gwaddr');
  }
  public set gwaddr(value: string) {
    this._gwaddr = value;
  }
  public resetGwaddr() {
    this._gwaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gwaddrInput() {
    return this._gwaddr;
  }

  // gwdetect - computed: false, optional: true, required: false
  private _gwdetect?: string; 
  public get gwdetect() {
    return this.getStringAttribute('gwdetect');
  }
  public set gwdetect(value: string) {
    this._gwdetect = value;
  }
  public resetGwdetect() {
    this._gwdetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gwdetectInput() {
    return this._gwdetect;
  }

  // ha_priority - computed: false, optional: true, required: false
  private _haPriority?: number; 
  public get haPriority() {
    return this.getNumberAttribute('ha_priority');
  }
  public set haPriority(value: number) {
    this._haPriority = value;
  }
  public resetHaPriority() {
    this._haPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haPriorityInput() {
    return this._haPriority;
  }

  // icmp_accept_redirect - computed: true, optional: true, required: false
  private _icmpAcceptRedirect?: string; 
  public get icmpAcceptRedirect() {
    return this.getStringAttribute('icmp_accept_redirect');
  }
  public set icmpAcceptRedirect(value: string) {
    this._icmpAcceptRedirect = value;
  }
  public resetIcmpAcceptRedirect() {
    this._icmpAcceptRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpAcceptRedirectInput() {
    return this._icmpAcceptRedirect;
  }

  // icmp_redirect - computed: false, optional: true, required: false
  private _icmpRedirect?: string; 
  public get icmpRedirect() {
    return this.getStringAttribute('icmp_redirect');
  }
  public set icmpRedirect(value: string) {
    this._icmpRedirect = value;
  }
  public resetIcmpRedirect() {
    this._icmpRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpRedirectInput() {
    return this._icmpRedirect;
  }

  // icmp_send_redirect - computed: true, optional: true, required: false
  private _icmpSendRedirect?: string; 
  public get icmpSendRedirect() {
    return this.getStringAttribute('icmp_send_redirect');
  }
  public set icmpSendRedirect(value: string) {
    this._icmpSendRedirect = value;
  }
  public resetIcmpSendRedirect() {
    this._icmpSendRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpSendRedirectInput() {
    return this._icmpSendRedirect;
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

  // ident_accept - computed: true, optional: true, required: false
  private _identAccept?: string; 
  public get identAccept() {
    return this.getStringAttribute('ident_accept');
  }
  public set identAccept(value: string) {
    this._identAccept = value;
  }
  public resetIdentAccept() {
    this._identAccept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identAcceptInput() {
    return this._identAccept;
  }

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: number; 
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }
  public set idleTimeout(value: number) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // if_mdix - computed: false, optional: true, required: false
  private _ifMdix?: string; 
  public get ifMdix() {
    return this.getStringAttribute('if_mdix');
  }
  public set ifMdix(value: string) {
    this._ifMdix = value;
  }
  public resetIfMdix() {
    this._ifMdix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifMdixInput() {
    return this._ifMdix;
  }

  // if_media - computed: false, optional: true, required: false
  private _ifMedia?: string; 
  public get ifMedia() {
    return this.getStringAttribute('if_media');
  }
  public set ifMedia(value: string) {
    this._ifMedia = value;
  }
  public resetIfMedia() {
    this._ifMedia = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifMediaInput() {
    return this._ifMedia;
  }

  // ike_saml_server - computed: true, optional: true, required: false
  private _ikeSamlServer?: string[]; 
  public get ikeSamlServer() {
    return cdktf.Fn.tolist(this.getListAttribute('ike_saml_server'));
  }
  public set ikeSamlServer(value: string[]) {
    this._ikeSamlServer = value;
  }
  public resetIkeSamlServer() {
    this._ikeSamlServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeSamlServerInput() {
    return this._ikeSamlServer;
  }

  // in_force_vlan_cos - computed: false, optional: true, required: false
  private _inForceVlanCos?: number; 
  public get inForceVlanCos() {
    return this.getNumberAttribute('in_force_vlan_cos');
  }
  public set inForceVlanCos(value: number) {
    this._inForceVlanCos = value;
  }
  public resetInForceVlanCos() {
    this._inForceVlanCos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inForceVlanCosInput() {
    return this._inForceVlanCos;
  }

  // inbandwidth - computed: false, optional: true, required: false
  private _inbandwidth?: number; 
  public get inbandwidth() {
    return this.getNumberAttribute('inbandwidth');
  }
  public set inbandwidth(value: number) {
    this._inbandwidth = value;
  }
  public resetInbandwidth() {
    this._inbandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inbandwidthInput() {
    return this._inbandwidth;
  }

  // ingress_cos - computed: true, optional: true, required: false
  private _ingressCos?: string; 
  public get ingressCos() {
    return this.getStringAttribute('ingress_cos');
  }
  public set ingressCos(value: string) {
    this._ingressCos = value;
  }
  public resetIngressCos() {
    this._ingressCos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressCosInput() {
    return this._ingressCos;
  }

  // ingress_shaping_profile - computed: false, optional: true, required: false
  private _ingressShapingProfile?: string; 
  public get ingressShapingProfile() {
    return this.getStringAttribute('ingress_shaping_profile');
  }
  public set ingressShapingProfile(value: string) {
    this._ingressShapingProfile = value;
  }
  public resetIngressShapingProfile() {
    this._ingressShapingProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressShapingProfileInput() {
    return this._ingressShapingProfile;
  }

  // ingress_spillover_threshold - computed: false, optional: true, required: false
  private _ingressSpilloverThreshold?: number; 
  public get ingressSpilloverThreshold() {
    return this.getNumberAttribute('ingress_spillover_threshold');
  }
  public set ingressSpilloverThreshold(value: number) {
    this._ingressSpilloverThreshold = value;
  }
  public resetIngressSpilloverThreshold() {
    this._ingressSpilloverThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressSpilloverThresholdInput() {
    return this._ingressSpilloverThreshold;
  }

  // interconnect_profile - computed: true, optional: true, required: false
  private _interconnectProfile?: string; 
  public get interconnectProfile() {
    return this.getStringAttribute('interconnect_profile');
  }
  public set interconnectProfile(value: string) {
    this._interconnectProfile = value;
  }
  public resetInterconnectProfile() {
    this._interconnectProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interconnectProfileInput() {
    return this._interconnectProfile;
  }

  // internal - computed: false, optional: true, required: false
  private _internal?: number; 
  public get internal() {
    return this.getNumberAttribute('internal');
  }
  public set internal(value: number) {
    this._internal = value;
  }
  public resetInternal() {
    this._internal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalInput() {
    return this._internal;
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

  // ip_managed_by_fortiipam - computed: true, optional: true, required: false
  private _ipManagedByFortiipam?: string; 
  public get ipManagedByFortiipam() {
    return this.getStringAttribute('ip_managed_by_fortiipam');
  }
  public set ipManagedByFortiipam(value: string) {
    this._ipManagedByFortiipam = value;
  }
  public resetIpManagedByFortiipam() {
    this._ipManagedByFortiipam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipManagedByFortiipamInput() {
    return this._ipManagedByFortiipam;
  }

  // ipmac - computed: true, optional: true, required: false
  private _ipmac?: string; 
  public get ipmac() {
    return this.getStringAttribute('ipmac');
  }
  public set ipmac(value: string) {
    this._ipmac = value;
  }
  public resetIpmac() {
    this._ipmac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipmacInput() {
    return this._ipmac;
  }

  // ips_sniffer_mode - computed: true, optional: true, required: false
  private _ipsSnifferMode?: string; 
  public get ipsSnifferMode() {
    return this.getStringAttribute('ips_sniffer_mode');
  }
  public set ipsSnifferMode(value: string) {
    this._ipsSnifferMode = value;
  }
  public resetIpsSnifferMode() {
    this._ipsSnifferMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsSnifferModeInput() {
    return this._ipsSnifferMode;
  }

  // ipunnumbered - computed: false, optional: true, required: false
  private _ipunnumbered?: string; 
  public get ipunnumbered() {
    return this.getStringAttribute('ipunnumbered');
  }
  public set ipunnumbered(value: string) {
    this._ipunnumbered = value;
  }
  public resetIpunnumbered() {
    this._ipunnumbered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipunnumberedInput() {
    return this._ipunnumbered;
  }

  // l2forward - computed: true, optional: true, required: false
  private _l2Forward?: string; 
  public get l2Forward() {
    return this.getStringAttribute('l2forward');
  }
  public set l2Forward(value: string) {
    this._l2Forward = value;
  }
  public resetL2Forward() {
    this._l2Forward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2ForwardInput() {
    return this._l2Forward;
  }

  // l2tp_client - computed: true, optional: true, required: false
  private _l2TpClient?: string; 
  public get l2TpClient() {
    return this.getStringAttribute('l2tp_client');
  }
  public set l2TpClient(value: string) {
    this._l2TpClient = value;
  }
  public resetL2TpClient() {
    this._l2TpClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2TpClientInput() {
    return this._l2TpClient;
  }

  // lacp_ha_secondary - computed: true, optional: true, required: false
  private _lacpHaSecondary?: string; 
  public get lacpHaSecondary() {
    return this.getStringAttribute('lacp_ha_secondary');
  }
  public set lacpHaSecondary(value: string) {
    this._lacpHaSecondary = value;
  }
  public resetLacpHaSecondary() {
    this._lacpHaSecondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lacpHaSecondaryInput() {
    return this._lacpHaSecondary;
  }

  // lacp_ha_slave - computed: false, optional: true, required: false
  private _lacpHaSlave?: string; 
  public get lacpHaSlave() {
    return this.getStringAttribute('lacp_ha_slave');
  }
  public set lacpHaSlave(value: string) {
    this._lacpHaSlave = value;
  }
  public resetLacpHaSlave() {
    this._lacpHaSlave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lacpHaSlaveInput() {
    return this._lacpHaSlave;
  }

  // lacp_mode - computed: false, optional: true, required: false
  private _lacpMode?: string; 
  public get lacpMode() {
    return this.getStringAttribute('lacp_mode');
  }
  public set lacpMode(value: string) {
    this._lacpMode = value;
  }
  public resetLacpMode() {
    this._lacpMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lacpModeInput() {
    return this._lacpMode;
  }

  // lacp_speed - computed: false, optional: true, required: false
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

  // large_receive_offload - computed: false, optional: true, required: false
  private _largeReceiveOffload?: string; 
  public get largeReceiveOffload() {
    return this.getStringAttribute('large_receive_offload');
  }
  public set largeReceiveOffload(value: string) {
    this._largeReceiveOffload = value;
  }
  public resetLargeReceiveOffload() {
    this._largeReceiveOffload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeReceiveOffloadInput() {
    return this._largeReceiveOffload;
  }

  // lcp_echo_interval - computed: false, optional: true, required: false
  private _lcpEchoInterval?: number; 
  public get lcpEchoInterval() {
    return this.getNumberAttribute('lcp_echo_interval');
  }
  public set lcpEchoInterval(value: number) {
    this._lcpEchoInterval = value;
  }
  public resetLcpEchoInterval() {
    this._lcpEchoInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lcpEchoIntervalInput() {
    return this._lcpEchoInterval;
  }

  // lcp_max_echo_fails - computed: false, optional: true, required: false
  private _lcpMaxEchoFails?: number; 
  public get lcpMaxEchoFails() {
    return this.getNumberAttribute('lcp_max_echo_fails');
  }
  public set lcpMaxEchoFails(value: number) {
    this._lcpMaxEchoFails = value;
  }
  public resetLcpMaxEchoFails() {
    this._lcpMaxEchoFails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lcpMaxEchoFailsInput() {
    return this._lcpMaxEchoFails;
  }

  // link_up_delay - computed: false, optional: true, required: false
  private _linkUpDelay?: number; 
  public get linkUpDelay() {
    return this.getNumberAttribute('link_up_delay');
  }
  public set linkUpDelay(value: number) {
    this._linkUpDelay = value;
  }
  public resetLinkUpDelay() {
    this._linkUpDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkUpDelayInput() {
    return this._linkUpDelay;
  }

  // listen_forticlient_connection - computed: false, optional: true, required: false
  private _listenForticlientConnection?: string; 
  public get listenForticlientConnection() {
    return this.getStringAttribute('listen_forticlient_connection');
  }
  public set listenForticlientConnection(value: string) {
    this._listenForticlientConnection = value;
  }
  public resetListenForticlientConnection() {
    this._listenForticlientConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenForticlientConnectionInput() {
    return this._listenForticlientConnection;
  }

  // lldp_network_policy - computed: false, optional: true, required: false
  private _lldpNetworkPolicy?: string; 
  public get lldpNetworkPolicy() {
    return this.getStringAttribute('lldp_network_policy');
  }
  public set lldpNetworkPolicy(value: string) {
    this._lldpNetworkPolicy = value;
  }
  public resetLldpNetworkPolicy() {
    this._lldpNetworkPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpNetworkPolicyInput() {
    return this._lldpNetworkPolicy;
  }

  // lldp_reception - computed: false, optional: true, required: false
  private _lldpReception?: string; 
  public get lldpReception() {
    return this.getStringAttribute('lldp_reception');
  }
  public set lldpReception(value: string) {
    this._lldpReception = value;
  }
  public resetLldpReception() {
    this._lldpReception = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpReceptionInput() {
    return this._lldpReception;
  }

  // lldp_transmission - computed: false, optional: true, required: false
  private _lldpTransmission?: string; 
  public get lldpTransmission() {
    return this.getStringAttribute('lldp_transmission');
  }
  public set lldpTransmission(value: string) {
    this._lldpTransmission = value;
  }
  public resetLldpTransmission() {
    this._lldpTransmission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpTransmissionInput() {
    return this._lldpTransmission;
  }

  // log - computed: false, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // macaddr - computed: true, optional: true, required: false
  private _macaddr?: string; 
  public get macaddr() {
    return this.getStringAttribute('macaddr');
  }
  public set macaddr(value: string) {
    this._macaddr = value;
  }
  public resetMacaddr() {
    this._macaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macaddrInput() {
    return this._macaddr;
  }

  // managed_subnetwork_size - computed: true, optional: true, required: false
  private _managedSubnetworkSize?: string; 
  public get managedSubnetworkSize() {
    return this.getStringAttribute('managed_subnetwork_size');
  }
  public set managedSubnetworkSize(value: string) {
    this._managedSubnetworkSize = value;
  }
  public resetManagedSubnetworkSize() {
    this._managedSubnetworkSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedSubnetworkSizeInput() {
    return this._managedSubnetworkSize;
  }

  // management_ip - computed: true, optional: true, required: false
  private _managementIp?: string; 
  public get managementIp() {
    return this.getStringAttribute('management_ip');
  }
  public set managementIp(value: string) {
    this._managementIp = value;
  }
  public resetManagementIp() {
    this._managementIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementIpInput() {
    return this._managementIp;
  }

  // max_egress_burst_rate - computed: false, optional: true, required: false
  private _maxEgressBurstRate?: number; 
  public get maxEgressBurstRate() {
    return this.getNumberAttribute('max_egress_burst_rate');
  }
  public set maxEgressBurstRate(value: number) {
    this._maxEgressBurstRate = value;
  }
  public resetMaxEgressBurstRate() {
    this._maxEgressBurstRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEgressBurstRateInput() {
    return this._maxEgressBurstRate;
  }

  // max_egress_rate - computed: false, optional: true, required: false
  private _maxEgressRate?: number; 
  public get maxEgressRate() {
    return this.getNumberAttribute('max_egress_rate');
  }
  public set maxEgressRate(value: number) {
    this._maxEgressRate = value;
  }
  public resetMaxEgressRate() {
    this._maxEgressRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEgressRateInput() {
    return this._maxEgressRate;
  }

  // measured_downstream_bandwidth - computed: false, optional: true, required: false
  private _measuredDownstreamBandwidth?: number; 
  public get measuredDownstreamBandwidth() {
    return this.getNumberAttribute('measured_downstream_bandwidth');
  }
  public set measuredDownstreamBandwidth(value: number) {
    this._measuredDownstreamBandwidth = value;
  }
  public resetMeasuredDownstreamBandwidth() {
    this._measuredDownstreamBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get measuredDownstreamBandwidthInput() {
    return this._measuredDownstreamBandwidth;
  }

  // measured_upstream_bandwidth - computed: false, optional: true, required: false
  private _measuredUpstreamBandwidth?: number; 
  public get measuredUpstreamBandwidth() {
    return this.getNumberAttribute('measured_upstream_bandwidth');
  }
  public set measuredUpstreamBandwidth(value: number) {
    this._measuredUpstreamBandwidth = value;
  }
  public resetMeasuredUpstreamBandwidth() {
    this._measuredUpstreamBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get measuredUpstreamBandwidthInput() {
    return this._measuredUpstreamBandwidth;
  }

  // mediatype - computed: false, optional: true, required: false
  private _mediatype?: string; 
  public get mediatype() {
    return this.getStringAttribute('mediatype');
  }
  public set mediatype(value: string) {
    this._mediatype = value;
  }
  public resetMediatype() {
    this._mediatype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediatypeInput() {
    return this._mediatype;
  }

  // member - computed: false, optional: true, required: false
  private _member?: string; 
  public get member() {
    return this.getStringAttribute('member');
  }
  public set member(value: string) {
    this._member = value;
  }
  public resetMember() {
    this._member = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member;
  }

  // min_links - computed: true, optional: true, required: false
  private _minLinks?: number; 
  public get minLinks() {
    return this.getNumberAttribute('min_links');
  }
  public set minLinks(value: number) {
    this._minLinks = value;
  }
  public resetMinLinks() {
    this._minLinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLinksInput() {
    return this._minLinks;
  }

  // min_links_down - computed: true, optional: true, required: false
  private _minLinksDown?: string; 
  public get minLinksDown() {
    return this.getStringAttribute('min_links_down');
  }
  public set minLinksDown(value: string) {
    this._minLinksDown = value;
  }
  public resetMinLinksDown() {
    this._minLinksDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLinksDownInput() {
    return this._minLinksDown;
  }

  // mirroring_direction - computed: false, optional: true, required: false
  private _mirroringDirection?: string; 
  public get mirroringDirection() {
    return this.getStringAttribute('mirroring_direction');
  }
  public set mirroringDirection(value: string) {
    this._mirroringDirection = value;
  }
  public resetMirroringDirection() {
    this._mirroringDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirroringDirectionInput() {
    return this._mirroringDirection;
  }

  // mirroring_port - computed: false, optional: true, required: false
  private _mirroringPort?: string; 
  public get mirroringPort() {
    return this.getStringAttribute('mirroring_port');
  }
  public set mirroringPort(value: string) {
    this._mirroringPort = value;
  }
  public resetMirroringPort() {
    this._mirroringPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirroringPortInput() {
    return this._mirroringPort;
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

  // monitor_bandwidth - computed: true, optional: true, required: false
  private _monitorBandwidth?: string; 
  public get monitorBandwidth() {
    return this.getStringAttribute('monitor_bandwidth');
  }
  public set monitorBandwidth(value: string) {
    this._monitorBandwidth = value;
  }
  public resetMonitorBandwidth() {
    this._monitorBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorBandwidthInput() {
    return this._monitorBandwidth;
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

  // mtu_override - computed: true, optional: true, required: false
  private _mtuOverride?: string; 
  public get mtuOverride() {
    return this.getStringAttribute('mtu_override');
  }
  public set mtuOverride(value: string) {
    this._mtuOverride = value;
  }
  public resetMtuOverride() {
    this._mtuOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuOverrideInput() {
    return this._mtuOverride;
  }

  // mux_type - computed: false, optional: true, required: false
  private _muxType?: string; 
  public get muxType() {
    return this.getStringAttribute('mux_type');
  }
  public set muxType(value: string) {
    this._muxType = value;
  }
  public resetMuxType() {
    this._muxType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get muxTypeInput() {
    return this._muxType;
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

  // ndiscforward - computed: true, optional: true, required: false
  private _ndiscforward?: string; 
  public get ndiscforward() {
    return this.getStringAttribute('ndiscforward');
  }
  public set ndiscforward(value: string) {
    this._ndiscforward = value;
  }
  public resetNdiscforward() {
    this._ndiscforward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndiscforwardInput() {
    return this._ndiscforward;
  }

  // netbios_forward - computed: true, optional: true, required: false
  private _netbiosForward?: string; 
  public get netbiosForward() {
    return this.getStringAttribute('netbios_forward');
  }
  public set netbiosForward(value: string) {
    this._netbiosForward = value;
  }
  public resetNetbiosForward() {
    this._netbiosForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netbiosForwardInput() {
    return this._netbiosForward;
  }

  // netflow_sampler - computed: true, optional: true, required: false
  private _netflowSampler?: string; 
  public get netflowSampler() {
    return this.getStringAttribute('netflow_sampler');
  }
  public set netflowSampler(value: string) {
    this._netflowSampler = value;
  }
  public resetNetflowSampler() {
    this._netflowSampler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowSamplerInput() {
    return this._netflowSampler;
  }

  // np_qos_profile - computed: false, optional: true, required: false
  private _npQosProfile?: number; 
  public get npQosProfile() {
    return this.getNumberAttribute('np_qos_profile');
  }
  public set npQosProfile(value: number) {
    this._npQosProfile = value;
  }
  public resetNpQosProfile() {
    this._npQosProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get npQosProfileInput() {
    return this._npQosProfile;
  }

  // npu_fastpath - computed: false, optional: true, required: false
  private _npuFastpath?: string; 
  public get npuFastpath() {
    return this.getStringAttribute('npu_fastpath');
  }
  public set npuFastpath(value: string) {
    this._npuFastpath = value;
  }
  public resetNpuFastpath() {
    this._npuFastpath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get npuFastpathInput() {
    return this._npuFastpath;
  }

  // nst - computed: false, optional: true, required: false
  private _nst?: string; 
  public get nst() {
    return this.getStringAttribute('nst');
  }
  public set nst(value: string) {
    this._nst = value;
  }
  public resetNst() {
    this._nst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nstInput() {
    return this._nst;
  }

  // out_force_vlan_cos - computed: false, optional: true, required: false
  private _outForceVlanCos?: number; 
  public get outForceVlanCos() {
    return this.getNumberAttribute('out_force_vlan_cos');
  }
  public set outForceVlanCos(value: number) {
    this._outForceVlanCos = value;
  }
  public resetOutForceVlanCos() {
    this._outForceVlanCos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outForceVlanCosInput() {
    return this._outForceVlanCos;
  }

  // outbandwidth - computed: false, optional: true, required: false
  private _outbandwidth?: number; 
  public get outbandwidth() {
    return this.getNumberAttribute('outbandwidth');
  }
  public set outbandwidth(value: number) {
    this._outbandwidth = value;
  }
  public resetOutbandwidth() {
    this._outbandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outbandwidthInput() {
    return this._outbandwidth;
  }

  // padt_retry_timeout - computed: false, optional: true, required: false
  private _padtRetryTimeout?: number; 
  public get padtRetryTimeout() {
    return this.getNumberAttribute('padt_retry_timeout');
  }
  public set padtRetryTimeout(value: number) {
    this._padtRetryTimeout = value;
  }
  public resetPadtRetryTimeout() {
    this._padtRetryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get padtRetryTimeoutInput() {
    return this._padtRetryTimeout;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string[]; 
  public get password() {
    return cdktf.Fn.tolist(this.getListAttribute('password'));
  }
  public set password(value: string[]) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // peer_interface - computed: false, optional: true, required: false
  private _peerInterface?: string; 
  public get peerInterface() {
    return this.getStringAttribute('peer_interface');
  }
  public set peerInterface(value: string) {
    this._peerInterface = value;
  }
  public resetPeerInterface() {
    this._peerInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerInterfaceInput() {
    return this._peerInterface;
  }

  // phy_mode - computed: false, optional: true, required: false
  private _phyMode?: string; 
  public get phyMode() {
    return this.getStringAttribute('phy_mode');
  }
  public set phyMode(value: string) {
    this._phyMode = value;
  }
  public resetPhyMode() {
    this._phyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phyModeInput() {
    return this._phyMode;
  }

  // ping_serv_status - computed: false, optional: true, required: false
  private _pingServStatus?: number; 
  public get pingServStatus() {
    return this.getNumberAttribute('ping_serv_status');
  }
  public set pingServStatus(value: number) {
    this._pingServStatus = value;
  }
  public resetPingServStatus() {
    this._pingServStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingServStatusInput() {
    return this._pingServStatus;
  }

  // poe - computed: true, optional: true, required: false
  private _poe?: string; 
  public get poe() {
    return this.getStringAttribute('poe');
  }
  public set poe(value: string) {
    this._poe = value;
  }
  public resetPoe() {
    this._poe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poeInput() {
    return this._poe;
  }

  // polling_interval - computed: true, optional: true, required: false
  private _pollingInterval?: number; 
  public get pollingInterval() {
    return this.getNumberAttribute('polling_interval');
  }
  public set pollingInterval(value: number) {
    this._pollingInterval = value;
  }
  public resetPollingInterval() {
    this._pollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingIntervalInput() {
    return this._pollingInterval;
  }

  // port_mirroring - computed: true, optional: true, required: false
  private _portMirroring?: string; 
  public get portMirroring() {
    return this.getStringAttribute('port_mirroring');
  }
  public set portMirroring(value: string) {
    this._portMirroring = value;
  }
  public resetPortMirroring() {
    this._portMirroring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portMirroringInput() {
    return this._portMirroring;
  }

  // pppoe_unnumbered_negotiate - computed: true, optional: true, required: false
  private _pppoeUnnumberedNegotiate?: string; 
  public get pppoeUnnumberedNegotiate() {
    return this.getStringAttribute('pppoe_unnumbered_negotiate');
  }
  public set pppoeUnnumberedNegotiate(value: string) {
    this._pppoeUnnumberedNegotiate = value;
  }
  public resetPppoeUnnumberedNegotiate() {
    this._pppoeUnnumberedNegotiate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pppoeUnnumberedNegotiateInput() {
    return this._pppoeUnnumberedNegotiate;
  }

  // pptp_auth_type - computed: true, optional: true, required: false
  private _pptpAuthType?: string; 
  public get pptpAuthType() {
    return this.getStringAttribute('pptp_auth_type');
  }
  public set pptpAuthType(value: string) {
    this._pptpAuthType = value;
  }
  public resetPptpAuthType() {
    this._pptpAuthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pptpAuthTypeInput() {
    return this._pptpAuthType;
  }

  // pptp_client - computed: true, optional: true, required: false
  private _pptpClient?: string; 
  public get pptpClient() {
    return this.getStringAttribute('pptp_client');
  }
  public set pptpClient(value: string) {
    this._pptpClient = value;
  }
  public resetPptpClient() {
    this._pptpClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pptpClientInput() {
    return this._pptpClient;
  }

  // pptp_password - computed: true, optional: true, required: false
  private _pptpPassword?: string[]; 
  public get pptpPassword() {
    return cdktf.Fn.tolist(this.getListAttribute('pptp_password'));
  }
  public set pptpPassword(value: string[]) {
    this._pptpPassword = value;
  }
  public resetPptpPassword() {
    this._pptpPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pptpPasswordInput() {
    return this._pptpPassword;
  }

  // pptp_server_ip - computed: true, optional: true, required: false
  private _pptpServerIp?: string; 
  public get pptpServerIp() {
    return this.getStringAttribute('pptp_server_ip');
  }
  public set pptpServerIp(value: string) {
    this._pptpServerIp = value;
  }
  public resetPptpServerIp() {
    this._pptpServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pptpServerIpInput() {
    return this._pptpServerIp;
  }

  // pptp_timeout - computed: false, optional: true, required: false
  private _pptpTimeout?: number; 
  public get pptpTimeout() {
    return this.getNumberAttribute('pptp_timeout');
  }
  public set pptpTimeout(value: number) {
    this._pptpTimeout = value;
  }
  public resetPptpTimeout() {
    this._pptpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pptpTimeoutInput() {
    return this._pptpTimeout;
  }

  // pptp_user - computed: false, optional: true, required: false
  private _pptpUser?: string; 
  public get pptpUser() {
    return this.getStringAttribute('pptp_user');
  }
  public set pptpUser(value: string) {
    this._pptpUser = value;
  }
  public resetPptpUser() {
    this._pptpUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pptpUserInput() {
    return this._pptpUser;
  }

  // preserve_session_route - computed: true, optional: true, required: false
  private _preserveSessionRoute?: string; 
  public get preserveSessionRoute() {
    return this.getStringAttribute('preserve_session_route');
  }
  public set preserveSessionRoute(value: string) {
    this._preserveSessionRoute = value;
  }
  public resetPreserveSessionRoute() {
    this._preserveSessionRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveSessionRouteInput() {
    return this._preserveSessionRoute;
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

  // priority_override - computed: true, optional: true, required: false
  private _priorityOverride?: string; 
  public get priorityOverride() {
    return this.getStringAttribute('priority_override');
  }
  public set priorityOverride(value: string) {
    this._priorityOverride = value;
  }
  public resetPriorityOverride() {
    this._priorityOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityOverrideInput() {
    return this._priorityOverride;
  }

  // proxy_captive_portal - computed: true, optional: true, required: false
  private _proxyCaptivePortal?: string; 
  public get proxyCaptivePortal() {
    return this.getStringAttribute('proxy_captive_portal');
  }
  public set proxyCaptivePortal(value: string) {
    this._proxyCaptivePortal = value;
  }
  public resetProxyCaptivePortal() {
    this._proxyCaptivePortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyCaptivePortalInput() {
    return this._proxyCaptivePortal;
  }

  // pvc_atm_qos - computed: false, optional: true, required: false
  private _pvcAtmQos?: string; 
  public get pvcAtmQos() {
    return this.getStringAttribute('pvc_atm_qos');
  }
  public set pvcAtmQos(value: string) {
    this._pvcAtmQos = value;
  }
  public resetPvcAtmQos() {
    this._pvcAtmQos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcAtmQosInput() {
    return this._pvcAtmQos;
  }

  // pvc_chan - computed: false, optional: true, required: false
  private _pvcChan?: number; 
  public get pvcChan() {
    return this.getNumberAttribute('pvc_chan');
  }
  public set pvcChan(value: number) {
    this._pvcChan = value;
  }
  public resetPvcChan() {
    this._pvcChan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcChanInput() {
    return this._pvcChan;
  }

  // pvc_crc - computed: false, optional: true, required: false
  private _pvcCrc?: number; 
  public get pvcCrc() {
    return this.getNumberAttribute('pvc_crc');
  }
  public set pvcCrc(value: number) {
    this._pvcCrc = value;
  }
  public resetPvcCrc() {
    this._pvcCrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcCrcInput() {
    return this._pvcCrc;
  }

  // pvc_pcr - computed: false, optional: true, required: false
  private _pvcPcr?: number; 
  public get pvcPcr() {
    return this.getNumberAttribute('pvc_pcr');
  }
  public set pvcPcr(value: number) {
    this._pvcPcr = value;
  }
  public resetPvcPcr() {
    this._pvcPcr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcPcrInput() {
    return this._pvcPcr;
  }

  // pvc_scr - computed: false, optional: true, required: false
  private _pvcScr?: number; 
  public get pvcScr() {
    return this.getNumberAttribute('pvc_scr');
  }
  public set pvcScr(value: number) {
    this._pvcScr = value;
  }
  public resetPvcScr() {
    this._pvcScr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcScrInput() {
    return this._pvcScr;
  }

  // pvc_vlan_id - computed: false, optional: true, required: false
  private _pvcVlanId?: number; 
  public get pvcVlanId() {
    return this.getNumberAttribute('pvc_vlan_id');
  }
  public set pvcVlanId(value: number) {
    this._pvcVlanId = value;
  }
  public resetPvcVlanId() {
    this._pvcVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcVlanIdInput() {
    return this._pvcVlanId;
  }

  // pvc_vlan_rx_id - computed: false, optional: true, required: false
  private _pvcVlanRxId?: number; 
  public get pvcVlanRxId() {
    return this.getNumberAttribute('pvc_vlan_rx_id');
  }
  public set pvcVlanRxId(value: number) {
    this._pvcVlanRxId = value;
  }
  public resetPvcVlanRxId() {
    this._pvcVlanRxId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcVlanRxIdInput() {
    return this._pvcVlanRxId;
  }

  // pvc_vlan_rx_op - computed: false, optional: true, required: false
  private _pvcVlanRxOp?: string; 
  public get pvcVlanRxOp() {
    return this.getStringAttribute('pvc_vlan_rx_op');
  }
  public set pvcVlanRxOp(value: string) {
    this._pvcVlanRxOp = value;
  }
  public resetPvcVlanRxOp() {
    this._pvcVlanRxOp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcVlanRxOpInput() {
    return this._pvcVlanRxOp;
  }

  // pvc_vlan_tx_id - computed: false, optional: true, required: false
  private _pvcVlanTxId?: number; 
  public get pvcVlanTxId() {
    return this.getNumberAttribute('pvc_vlan_tx_id');
  }
  public set pvcVlanTxId(value: number) {
    this._pvcVlanTxId = value;
  }
  public resetPvcVlanTxId() {
    this._pvcVlanTxId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcVlanTxIdInput() {
    return this._pvcVlanTxId;
  }

  // pvc_vlan_tx_op - computed: false, optional: true, required: false
  private _pvcVlanTxOp?: string; 
  public get pvcVlanTxOp() {
    return this.getStringAttribute('pvc_vlan_tx_op');
  }
  public set pvcVlanTxOp(value: string) {
    this._pvcVlanTxOp = value;
  }
  public resetPvcVlanTxOp() {
    this._pvcVlanTxOp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcVlanTxOpInput() {
    return this._pvcVlanTxOp;
  }

  // reachable_time - computed: true, optional: true, required: false
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

  // redundant_interface - computed: false, optional: true, required: false
  private _redundantInterface?: string; 
  public get redundantInterface() {
    return this.getStringAttribute('redundant_interface');
  }
  public set redundantInterface(value: string) {
    this._redundantInterface = value;
  }
  public resetRedundantInterface() {
    this._redundantInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redundantInterfaceInput() {
    return this._redundantInterface;
  }

  // remote_ip - computed: false, optional: true, required: false
  private _remoteIp?: string; 
  public get remoteIp() {
    return this.getStringAttribute('remote_ip');
  }
  public set remoteIp(value: string) {
    this._remoteIp = value;
  }
  public resetRemoteIp() {
    this._remoteIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpInput() {
    return this._remoteIp;
  }

  // replacemsg_override_group - computed: false, optional: true, required: false
  private _replacemsgOverrideGroup?: string; 
  public get replacemsgOverrideGroup() {
    return this.getStringAttribute('replacemsg_override_group');
  }
  public set replacemsgOverrideGroup(value: string) {
    this._replacemsgOverrideGroup = value;
  }
  public resetReplacemsgOverrideGroup() {
    this._replacemsgOverrideGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacemsgOverrideGroupInput() {
    return this._replacemsgOverrideGroup;
  }

  // retransmission - computed: true, optional: true, required: false
  private _retransmission?: string; 
  public get retransmission() {
    return this.getStringAttribute('retransmission');
  }
  public set retransmission(value: string) {
    this._retransmission = value;
  }
  public resetRetransmission() {
    this._retransmission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmissionInput() {
    return this._retransmission;
  }

  // ring_rx - computed: false, optional: true, required: false
  private _ringRx?: number; 
  public get ringRx() {
    return this.getNumberAttribute('ring_rx');
  }
  public set ringRx(value: number) {
    this._ringRx = value;
  }
  public resetRingRx() {
    this._ringRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ringRxInput() {
    return this._ringRx;
  }

  // ring_tx - computed: false, optional: true, required: false
  private _ringTx?: number; 
  public get ringTx() {
    return this.getNumberAttribute('ring_tx');
  }
  public set ringTx(value: number) {
    this._ringTx = value;
  }
  public resetRingTx() {
    this._ringTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ringTxInput() {
    return this._ringTx;
  }

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
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

  // sample_rate - computed: true, optional: true, required: false
  private _sampleRate?: number; 
  public get sampleRate() {
    return this.getNumberAttribute('sample_rate');
  }
  public set sampleRate(value: number) {
    this._sampleRate = value;
  }
  public resetSampleRate() {
    this._sampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleRateInput() {
    return this._sampleRate;
  }

  // scan_botnet_connections - computed: false, optional: true, required: false
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

  // secondary_ip - computed: true, optional: true, required: false
  private _secondaryIp?: string; 
  public get secondaryIp() {
    return this.getStringAttribute('secondary_ip');
  }
  public set secondaryIp(value: string) {
    this._secondaryIp = value;
  }
  public resetSecondaryIp() {
    this._secondaryIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryIpInput() {
    return this._secondaryIp;
  }

  // security_8021x_dynamic_vlan_id - computed: false, optional: true, required: false
  private _security8021XDynamicVlanId?: number; 
  public get security8021XDynamicVlanId() {
    return this.getNumberAttribute('security_8021x_dynamic_vlan_id');
  }
  public set security8021XDynamicVlanId(value: number) {
    this._security8021XDynamicVlanId = value;
  }
  public resetSecurity8021XDynamicVlanId() {
    this._security8021XDynamicVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get security8021XDynamicVlanIdInput() {
    return this._security8021XDynamicVlanId;
  }

  // security_8021x_master - computed: false, optional: true, required: false
  private _security8021XMaster?: string; 
  public get security8021XMaster() {
    return this.getStringAttribute('security_8021x_master');
  }
  public set security8021XMaster(value: string) {
    this._security8021XMaster = value;
  }
  public resetSecurity8021XMaster() {
    this._security8021XMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get security8021XMasterInput() {
    return this._security8021XMaster;
  }

  // security_8021x_member_mode - computed: true, optional: true, required: false
  private _security8021XMemberMode?: string; 
  public get security8021XMemberMode() {
    return this.getStringAttribute('security_8021x_member_mode');
  }
  public set security8021XMemberMode(value: string) {
    this._security8021XMemberMode = value;
  }
  public resetSecurity8021XMemberMode() {
    this._security8021XMemberMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get security8021XMemberModeInput() {
    return this._security8021XMemberMode;
  }

  // security_8021x_mode - computed: false, optional: true, required: false
  private _security8021XMode?: string; 
  public get security8021XMode() {
    return this.getStringAttribute('security_8021x_mode');
  }
  public set security8021XMode(value: string) {
    this._security8021XMode = value;
  }
  public resetSecurity8021XMode() {
    this._security8021XMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get security8021XModeInput() {
    return this._security8021XMode;
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

  // security_external_logout - computed: false, optional: true, required: false
  private _securityExternalLogout?: string; 
  public get securityExternalLogout() {
    return this.getStringAttribute('security_external_logout');
  }
  public set securityExternalLogout(value: string) {
    this._securityExternalLogout = value;
  }
  public resetSecurityExternalLogout() {
    this._securityExternalLogout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityExternalLogoutInput() {
    return this._securityExternalLogout;
  }

  // security_external_web - computed: false, optional: true, required: false
  private _securityExternalWeb?: string; 
  public get securityExternalWeb() {
    return this.getStringAttribute('security_external_web');
  }
  public set securityExternalWeb(value: string) {
    this._securityExternalWeb = value;
  }
  public resetSecurityExternalWeb() {
    this._securityExternalWeb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityExternalWebInput() {
    return this._securityExternalWeb;
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string; 
  public get securityGroups() {
    return this.getStringAttribute('security_groups');
  }
  public set securityGroups(value: string) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // security_mac_auth_bypass - computed: true, optional: true, required: false
  private _securityMacAuthBypass?: string; 
  public get securityMacAuthBypass() {
    return this.getStringAttribute('security_mac_auth_bypass');
  }
  public set securityMacAuthBypass(value: string) {
    this._securityMacAuthBypass = value;
  }
  public resetSecurityMacAuthBypass() {
    this._securityMacAuthBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityMacAuthBypassInput() {
    return this._securityMacAuthBypass;
  }

  // security_mode - computed: true, optional: true, required: false
  private _securityMode?: string; 
  public get securityMode() {
    return this.getStringAttribute('security_mode');
  }
  public set securityMode(value: string) {
    this._securityMode = value;
  }
  public resetSecurityMode() {
    this._securityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityModeInput() {
    return this._securityMode;
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

  // select_profile_30a_35b - computed: true, optional: true, required: false
  private _selectProfile30A35B?: string; 
  public get selectProfile30A35B() {
    return this.getStringAttribute('select_profile_30a_35b');
  }
  public set selectProfile30A35B(value: string) {
    this._selectProfile30A35B = value;
  }
  public resetSelectProfile30A35B() {
    this._selectProfile30A35B = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectProfile30A35BInput() {
    return this._selectProfile30A35B;
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // sflow_sampler - computed: true, optional: true, required: false
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

  // sfp_dsl - computed: true, optional: true, required: false
  private _sfpDsl?: string; 
  public get sfpDsl() {
    return this.getStringAttribute('sfp_dsl');
  }
  public set sfpDsl(value: string) {
    this._sfpDsl = value;
  }
  public resetSfpDsl() {
    this._sfpDsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sfpDslInput() {
    return this._sfpDsl;
  }

  // sfp_dsl_adsl_fallback - computed: true, optional: true, required: false
  private _sfpDslAdslFallback?: string; 
  public get sfpDslAdslFallback() {
    return this.getStringAttribute('sfp_dsl_adsl_fallback');
  }
  public set sfpDslAdslFallback(value: string) {
    this._sfpDslAdslFallback = value;
  }
  public resetSfpDslAdslFallback() {
    this._sfpDslAdslFallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sfpDslAdslFallbackInput() {
    return this._sfpDslAdslFallback;
  }

  // sfp_dsl_autodetect - computed: true, optional: true, required: false
  private _sfpDslAutodetect?: string; 
  public get sfpDslAutodetect() {
    return this.getStringAttribute('sfp_dsl_autodetect');
  }
  public set sfpDslAutodetect(value: string) {
    this._sfpDslAutodetect = value;
  }
  public resetSfpDslAutodetect() {
    this._sfpDslAutodetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sfpDslAutodetectInput() {
    return this._sfpDslAutodetect;
  }

  // sfp_dsl_mac - computed: true, optional: true, required: false
  private _sfpDslMac?: string; 
  public get sfpDslMac() {
    return this.getStringAttribute('sfp_dsl_mac');
  }
  public set sfpDslMac(value: string) {
    this._sfpDslMac = value;
  }
  public resetSfpDslMac() {
    this._sfpDslMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sfpDslMacInput() {
    return this._sfpDslMac;
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

  // spillover_threshold - computed: false, optional: true, required: false
  private _spilloverThreshold?: number; 
  public get spilloverThreshold() {
    return this.getNumberAttribute('spillover_threshold');
  }
  public set spilloverThreshold(value: number) {
    this._spilloverThreshold = value;
  }
  public resetSpilloverThreshold() {
    this._spilloverThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spilloverThresholdInput() {
    return this._spilloverThreshold;
  }

  // src_check - computed: true, optional: true, required: false
  private _srcCheck?: string; 
  public get srcCheck() {
    return this.getStringAttribute('src_check');
  }
  public set srcCheck(value: string) {
    this._srcCheck = value;
  }
  public resetSrcCheck() {
    this._srcCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcCheckInput() {
    return this._srcCheck;
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

  // stp - computed: true, optional: true, required: false
  private _stp?: string; 
  public get stp() {
    return this.getStringAttribute('stp');
  }
  public set stp(value: string) {
    this._stp = value;
  }
  public resetStp() {
    this._stp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpInput() {
    return this._stp;
  }

  // stp_edge - computed: true, optional: true, required: false
  private _stpEdge?: string; 
  public get stpEdge() {
    return this.getStringAttribute('stp_edge');
  }
  public set stpEdge(value: string) {
    this._stpEdge = value;
  }
  public resetStpEdge() {
    this._stpEdge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpEdgeInput() {
    return this._stpEdge;
  }

  // stp_ha_secondary - computed: true, optional: true, required: false
  private _stpHaSecondary?: string; 
  public get stpHaSecondary() {
    return this.getStringAttribute('stp_ha_secondary');
  }
  public set stpHaSecondary(value: string) {
    this._stpHaSecondary = value;
  }
  public resetStpHaSecondary() {
    this._stpHaSecondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpHaSecondaryInput() {
    return this._stpHaSecondary;
  }

  // stp_ha_slave - computed: true, optional: true, required: false
  private _stpHaSlave?: string; 
  public get stpHaSlave() {
    return this.getStringAttribute('stp_ha_slave');
  }
  public set stpHaSlave(value: string) {
    this._stpHaSlave = value;
  }
  public resetStpHaSlave() {
    this._stpHaSlave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpHaSlaveInput() {
    return this._stpHaSlave;
  }

  // stpforward - computed: true, optional: true, required: false
  private _stpforward?: string; 
  public get stpforward() {
    return this.getStringAttribute('stpforward');
  }
  public set stpforward(value: string) {
    this._stpforward = value;
  }
  public resetStpforward() {
    this._stpforward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpforwardInput() {
    return this._stpforward;
  }

  // stpforward_mode - computed: true, optional: true, required: false
  private _stpforwardMode?: string; 
  public get stpforwardMode() {
    return this.getStringAttribute('stpforward_mode');
  }
  public set stpforwardMode(value: string) {
    this._stpforwardMode = value;
  }
  public resetStpforwardMode() {
    this._stpforwardMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpforwardModeInput() {
    return this._stpforwardMode;
  }

  // strip_priority_vlan_tag - computed: false, optional: true, required: false
  private _stripPriorityVlanTag?: string; 
  public get stripPriorityVlanTag() {
    return this.getStringAttribute('strip_priority_vlan_tag');
  }
  public set stripPriorityVlanTag(value: string) {
    this._stripPriorityVlanTag = value;
  }
  public resetStripPriorityVlanTag() {
    this._stripPriorityVlanTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripPriorityVlanTagInput() {
    return this._stripPriorityVlanTag;
  }

  // subst - computed: true, optional: true, required: false
  private _subst?: string; 
  public get subst() {
    return this.getStringAttribute('subst');
  }
  public set subst(value: string) {
    this._subst = value;
  }
  public resetSubst() {
    this._subst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substInput() {
    return this._subst;
  }

  // substitute_dst_mac - computed: true, optional: true, required: false
  private _substituteDstMac?: string; 
  public get substituteDstMac() {
    return this.getStringAttribute('substitute_dst_mac');
  }
  public set substituteDstMac(value: string) {
    this._substituteDstMac = value;
  }
  public resetSubstituteDstMac() {
    this._substituteDstMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substituteDstMacInput() {
    return this._substituteDstMac;
  }

  // sw_algorithm - computed: true, optional: true, required: false
  private _swAlgorithm?: string; 
  public get swAlgorithm() {
    return this.getStringAttribute('sw_algorithm');
  }
  public set swAlgorithm(value: string) {
    this._swAlgorithm = value;
  }
  public resetSwAlgorithm() {
    this._swAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swAlgorithmInput() {
    return this._swAlgorithm;
  }

  // swc_first_create - computed: false, optional: true, required: false
  private _swcFirstCreate?: number; 
  public get swcFirstCreate() {
    return this.getNumberAttribute('swc_first_create');
  }
  public set swcFirstCreate(value: number) {
    this._swcFirstCreate = value;
  }
  public resetSwcFirstCreate() {
    this._swcFirstCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swcFirstCreateInput() {
    return this._swcFirstCreate;
  }

  // swc_vlan - computed: false, optional: true, required: false
  private _swcVlan?: number; 
  public get swcVlan() {
    return this.getNumberAttribute('swc_vlan');
  }
  public set swcVlan(value: number) {
    this._swcVlan = value;
  }
  public resetSwcVlan() {
    this._swcVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swcVlanInput() {
    return this._swcVlan;
  }

  // switch - computed: false, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }

  // switch_controller_access_vlan - computed: true, optional: true, required: false
  private _switchControllerAccessVlan?: string; 
  public get switchControllerAccessVlan() {
    return this.getStringAttribute('switch_controller_access_vlan');
  }
  public set switchControllerAccessVlan(value: string) {
    this._switchControllerAccessVlan = value;
  }
  public resetSwitchControllerAccessVlan() {
    this._switchControllerAccessVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerAccessVlanInput() {
    return this._switchControllerAccessVlan;
  }

  // switch_controller_arp_inspection - computed: true, optional: true, required: false
  private _switchControllerArpInspection?: string; 
  public get switchControllerArpInspection() {
    return this.getStringAttribute('switch_controller_arp_inspection');
  }
  public set switchControllerArpInspection(value: string) {
    this._switchControllerArpInspection = value;
  }
  public resetSwitchControllerArpInspection() {
    this._switchControllerArpInspection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerArpInspectionInput() {
    return this._switchControllerArpInspection;
  }

  // switch_controller_auth - computed: false, optional: true, required: false
  private _switchControllerAuth?: string; 
  public get switchControllerAuth() {
    return this.getStringAttribute('switch_controller_auth');
  }
  public set switchControllerAuth(value: string) {
    this._switchControllerAuth = value;
  }
  public resetSwitchControllerAuth() {
    this._switchControllerAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerAuthInput() {
    return this._switchControllerAuth;
  }

  // switch_controller_dhcp_snooping - computed: true, optional: true, required: false
  private _switchControllerDhcpSnooping?: string; 
  public get switchControllerDhcpSnooping() {
    return this.getStringAttribute('switch_controller_dhcp_snooping');
  }
  public set switchControllerDhcpSnooping(value: string) {
    this._switchControllerDhcpSnooping = value;
  }
  public resetSwitchControllerDhcpSnooping() {
    this._switchControllerDhcpSnooping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerDhcpSnoopingInput() {
    return this._switchControllerDhcpSnooping;
  }

  // switch_controller_dhcp_snooping_option82 - computed: true, optional: true, required: false
  private _switchControllerDhcpSnoopingOption82?: string; 
  public get switchControllerDhcpSnoopingOption82() {
    return this.getStringAttribute('switch_controller_dhcp_snooping_option82');
  }
  public set switchControllerDhcpSnoopingOption82(value: string) {
    this._switchControllerDhcpSnoopingOption82 = value;
  }
  public resetSwitchControllerDhcpSnoopingOption82() {
    this._switchControllerDhcpSnoopingOption82 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerDhcpSnoopingOption82Input() {
    return this._switchControllerDhcpSnoopingOption82;
  }

  // switch_controller_dhcp_snooping_verify_mac - computed: true, optional: true, required: false
  private _switchControllerDhcpSnoopingVerifyMac?: string; 
  public get switchControllerDhcpSnoopingVerifyMac() {
    return this.getStringAttribute('switch_controller_dhcp_snooping_verify_mac');
  }
  public set switchControllerDhcpSnoopingVerifyMac(value: string) {
    this._switchControllerDhcpSnoopingVerifyMac = value;
  }
  public resetSwitchControllerDhcpSnoopingVerifyMac() {
    this._switchControllerDhcpSnoopingVerifyMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerDhcpSnoopingVerifyMacInput() {
    return this._switchControllerDhcpSnoopingVerifyMac;
  }

  // switch_controller_dynamic - computed: false, optional: true, required: false
  private _switchControllerDynamic?: string; 
  public get switchControllerDynamic() {
    return this.getStringAttribute('switch_controller_dynamic');
  }
  public set switchControllerDynamic(value: string) {
    this._switchControllerDynamic = value;
  }
  public resetSwitchControllerDynamic() {
    this._switchControllerDynamic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerDynamicInput() {
    return this._switchControllerDynamic;
  }

  // switch_controller_feature - computed: true, optional: true, required: false
  private _switchControllerFeature?: string; 
  public get switchControllerFeature() {
    return this.getStringAttribute('switch_controller_feature');
  }
  public set switchControllerFeature(value: string) {
    this._switchControllerFeature = value;
  }
  public resetSwitchControllerFeature() {
    this._switchControllerFeature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerFeatureInput() {
    return this._switchControllerFeature;
  }

  // switch_controller_igmp_snooping - computed: true, optional: true, required: false
  private _switchControllerIgmpSnooping?: string; 
  public get switchControllerIgmpSnooping() {
    return this.getStringAttribute('switch_controller_igmp_snooping');
  }
  public set switchControllerIgmpSnooping(value: string) {
    this._switchControllerIgmpSnooping = value;
  }
  public resetSwitchControllerIgmpSnooping() {
    this._switchControllerIgmpSnooping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerIgmpSnoopingInput() {
    return this._switchControllerIgmpSnooping;
  }

  // switch_controller_igmp_snooping_fast_leave - computed: true, optional: true, required: false
  private _switchControllerIgmpSnoopingFastLeave?: string; 
  public get switchControllerIgmpSnoopingFastLeave() {
    return this.getStringAttribute('switch_controller_igmp_snooping_fast_leave');
  }
  public set switchControllerIgmpSnoopingFastLeave(value: string) {
    this._switchControllerIgmpSnoopingFastLeave = value;
  }
  public resetSwitchControllerIgmpSnoopingFastLeave() {
    this._switchControllerIgmpSnoopingFastLeave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerIgmpSnoopingFastLeaveInput() {
    return this._switchControllerIgmpSnoopingFastLeave;
  }

  // switch_controller_igmp_snooping_proxy - computed: true, optional: true, required: false
  private _switchControllerIgmpSnoopingProxy?: string; 
  public get switchControllerIgmpSnoopingProxy() {
    return this.getStringAttribute('switch_controller_igmp_snooping_proxy');
  }
  public set switchControllerIgmpSnoopingProxy(value: string) {
    this._switchControllerIgmpSnoopingProxy = value;
  }
  public resetSwitchControllerIgmpSnoopingProxy() {
    this._switchControllerIgmpSnoopingProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerIgmpSnoopingProxyInput() {
    return this._switchControllerIgmpSnoopingProxy;
  }

  // switch_controller_iot_scanning - computed: true, optional: true, required: false
  private _switchControllerIotScanning?: string; 
  public get switchControllerIotScanning() {
    return this.getStringAttribute('switch_controller_iot_scanning');
  }
  public set switchControllerIotScanning(value: string) {
    this._switchControllerIotScanning = value;
  }
  public resetSwitchControllerIotScanning() {
    this._switchControllerIotScanning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerIotScanningInput() {
    return this._switchControllerIotScanning;
  }

  // switch_controller_learning_limit - computed: false, optional: true, required: false
  private _switchControllerLearningLimit?: number; 
  public get switchControllerLearningLimit() {
    return this.getNumberAttribute('switch_controller_learning_limit');
  }
  public set switchControllerLearningLimit(value: number) {
    this._switchControllerLearningLimit = value;
  }
  public resetSwitchControllerLearningLimit() {
    this._switchControllerLearningLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerLearningLimitInput() {
    return this._switchControllerLearningLimit;
  }

  // switch_controller_mgmt_vlan - computed: true, optional: true, required: false
  private _switchControllerMgmtVlan?: number; 
  public get switchControllerMgmtVlan() {
    return this.getNumberAttribute('switch_controller_mgmt_vlan');
  }
  public set switchControllerMgmtVlan(value: number) {
    this._switchControllerMgmtVlan = value;
  }
  public resetSwitchControllerMgmtVlan() {
    this._switchControllerMgmtVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerMgmtVlanInput() {
    return this._switchControllerMgmtVlan;
  }

  // switch_controller_nac - computed: false, optional: true, required: false
  private _switchControllerNac?: string; 
  public get switchControllerNac() {
    return this.getStringAttribute('switch_controller_nac');
  }
  public set switchControllerNac(value: string) {
    this._switchControllerNac = value;
  }
  public resetSwitchControllerNac() {
    this._switchControllerNac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerNacInput() {
    return this._switchControllerNac;
  }

  // switch_controller_netflow_collect - computed: true, optional: true, required: false
  private _switchControllerNetflowCollect?: string; 
  public get switchControllerNetflowCollect() {
    return this.getStringAttribute('switch_controller_netflow_collect');
  }
  public set switchControllerNetflowCollect(value: string) {
    this._switchControllerNetflowCollect = value;
  }
  public resetSwitchControllerNetflowCollect() {
    this._switchControllerNetflowCollect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerNetflowCollectInput() {
    return this._switchControllerNetflowCollect;
  }

  // switch_controller_offload - computed: true, optional: true, required: false
  private _switchControllerOffload?: string; 
  public get switchControllerOffload() {
    return this.getStringAttribute('switch_controller_offload');
  }
  public set switchControllerOffload(value: string) {
    this._switchControllerOffload = value;
  }
  public resetSwitchControllerOffload() {
    this._switchControllerOffload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerOffloadInput() {
    return this._switchControllerOffload;
  }

  // switch_controller_offload_gw - computed: true, optional: true, required: false
  private _switchControllerOffloadGw?: string; 
  public get switchControllerOffloadGw() {
    return this.getStringAttribute('switch_controller_offload_gw');
  }
  public set switchControllerOffloadGw(value: string) {
    this._switchControllerOffloadGw = value;
  }
  public resetSwitchControllerOffloadGw() {
    this._switchControllerOffloadGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerOffloadGwInput() {
    return this._switchControllerOffloadGw;
  }

  // switch_controller_offload_ip - computed: true, optional: true, required: false
  private _switchControllerOffloadIp?: string; 
  public get switchControllerOffloadIp() {
    return this.getStringAttribute('switch_controller_offload_ip');
  }
  public set switchControllerOffloadIp(value: string) {
    this._switchControllerOffloadIp = value;
  }
  public resetSwitchControllerOffloadIp() {
    this._switchControllerOffloadIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerOffloadIpInput() {
    return this._switchControllerOffloadIp;
  }

  // switch_controller_offloading - computed: false, optional: true, required: false
  private _switchControllerOffloading?: string; 
  public get switchControllerOffloading() {
    return this.getStringAttribute('switch_controller_offloading');
  }
  public set switchControllerOffloading(value: string) {
    this._switchControllerOffloading = value;
  }
  public resetSwitchControllerOffloading() {
    this._switchControllerOffloading = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerOffloadingInput() {
    return this._switchControllerOffloading;
  }

  // switch_controller_offloading_gw - computed: false, optional: true, required: false
  private _switchControllerOffloadingGw?: string; 
  public get switchControllerOffloadingGw() {
    return this.getStringAttribute('switch_controller_offloading_gw');
  }
  public set switchControllerOffloadingGw(value: string) {
    this._switchControllerOffloadingGw = value;
  }
  public resetSwitchControllerOffloadingGw() {
    this._switchControllerOffloadingGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerOffloadingGwInput() {
    return this._switchControllerOffloadingGw;
  }

  // switch_controller_offloading_ip - computed: false, optional: true, required: false
  private _switchControllerOffloadingIp?: string; 
  public get switchControllerOffloadingIp() {
    return this.getStringAttribute('switch_controller_offloading_ip');
  }
  public set switchControllerOffloadingIp(value: string) {
    this._switchControllerOffloadingIp = value;
  }
  public resetSwitchControllerOffloadingIp() {
    this._switchControllerOffloadingIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerOffloadingIpInput() {
    return this._switchControllerOffloadingIp;
  }

  // switch_controller_radius_server - computed: false, optional: true, required: false
  private _switchControllerRadiusServer?: string; 
  public get switchControllerRadiusServer() {
    return this.getStringAttribute('switch_controller_radius_server');
  }
  public set switchControllerRadiusServer(value: string) {
    this._switchControllerRadiusServer = value;
  }
  public resetSwitchControllerRadiusServer() {
    this._switchControllerRadiusServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerRadiusServerInput() {
    return this._switchControllerRadiusServer;
  }

  // switch_controller_rspan_mode - computed: true, optional: true, required: false
  private _switchControllerRspanMode?: string; 
  public get switchControllerRspanMode() {
    return this.getStringAttribute('switch_controller_rspan_mode');
  }
  public set switchControllerRspanMode(value: string) {
    this._switchControllerRspanMode = value;
  }
  public resetSwitchControllerRspanMode() {
    this._switchControllerRspanMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerRspanModeInput() {
    return this._switchControllerRspanMode;
  }

  // switch_controller_source_ip - computed: true, optional: true, required: false
  private _switchControllerSourceIp?: string; 
  public get switchControllerSourceIp() {
    return this.getStringAttribute('switch_controller_source_ip');
  }
  public set switchControllerSourceIp(value: string) {
    this._switchControllerSourceIp = value;
  }
  public resetSwitchControllerSourceIp() {
    this._switchControllerSourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerSourceIpInput() {
    return this._switchControllerSourceIp;
  }

  // switch_controller_traffic_policy - computed: false, optional: true, required: false
  private _switchControllerTrafficPolicy?: string; 
  public get switchControllerTrafficPolicy() {
    return this.getStringAttribute('switch_controller_traffic_policy');
  }
  public set switchControllerTrafficPolicy(value: string) {
    this._switchControllerTrafficPolicy = value;
  }
  public resetSwitchControllerTrafficPolicy() {
    this._switchControllerTrafficPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerTrafficPolicyInput() {
    return this._switchControllerTrafficPolicy;
  }

  // system_id - computed: true, optional: true, required: false
  private _systemId?: string; 
  public get systemId() {
    return this.getStringAttribute('system_id');
  }
  public set systemId(value: string) {
    this._systemId = value;
  }
  public resetSystemId() {
    this._systemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIdInput() {
    return this._systemId;
  }

  // system_id_type - computed: true, optional: true, required: false
  private _systemIdType?: string; 
  public get systemIdType() {
    return this.getStringAttribute('system_id_type');
  }
  public set systemIdType(value: string) {
    this._systemIdType = value;
  }
  public resetSystemIdType() {
    this._systemIdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIdTypeInput() {
    return this._systemIdType;
  }

  // tc_mode - computed: false, optional: true, required: false
  private _tcMode?: string; 
  public get tcMode() {
    return this.getStringAttribute('tc_mode');
  }
  public set tcMode(value: string) {
    this._tcMode = value;
  }
  public resetTcMode() {
    this._tcMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcModeInput() {
    return this._tcMode;
  }

  // tcp_mss - computed: false, optional: true, required: false
  private _tcpMss?: number; 
  public get tcpMss() {
    return this.getNumberAttribute('tcp_mss');
  }
  public set tcpMss(value: number) {
    this._tcpMss = value;
  }
  public resetTcpMss() {
    this._tcpMss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMssInput() {
    return this._tcpMss;
  }

  // trunk - computed: true, optional: true, required: false
  private _trunk?: string; 
  public get trunk() {
    return this.getStringAttribute('trunk');
  }
  public set trunk(value: string) {
    this._trunk = value;
  }
  public resetTrunk() {
    this._trunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkInput() {
    return this._trunk;
  }

  // trust_ip6_1 - computed: true, optional: true, required: false
  private _trustIp61?: string; 
  public get trustIp61() {
    return this.getStringAttribute('trust_ip6_1');
  }
  public set trustIp61(value: string) {
    this._trustIp61 = value;
  }
  public resetTrustIp61() {
    this._trustIp61 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustIp61Input() {
    return this._trustIp61;
  }

  // trust_ip6_2 - computed: true, optional: true, required: false
  private _trustIp62?: string; 
  public get trustIp62() {
    return this.getStringAttribute('trust_ip6_2');
  }
  public set trustIp62(value: string) {
    this._trustIp62 = value;
  }
  public resetTrustIp62() {
    this._trustIp62 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustIp62Input() {
    return this._trustIp62;
  }

  // trust_ip6_3 - computed: true, optional: true, required: false
  private _trustIp63?: string; 
  public get trustIp63() {
    return this.getStringAttribute('trust_ip6_3');
  }
  public set trustIp63(value: string) {
    this._trustIp63 = value;
  }
  public resetTrustIp63() {
    this._trustIp63 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustIp63Input() {
    return this._trustIp63;
  }

  // trust_ip_1 - computed: false, optional: true, required: false
  private _trustIp1?: string; 
  public get trustIp1() {
    return this.getStringAttribute('trust_ip_1');
  }
  public set trustIp1(value: string) {
    this._trustIp1 = value;
  }
  public resetTrustIp1() {
    this._trustIp1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustIp1Input() {
    return this._trustIp1;
  }

  // trust_ip_2 - computed: false, optional: true, required: false
  private _trustIp2?: string; 
  public get trustIp2() {
    return this.getStringAttribute('trust_ip_2');
  }
  public set trustIp2(value: string) {
    this._trustIp2 = value;
  }
  public resetTrustIp2() {
    this._trustIp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustIp2Input() {
    return this._trustIp2;
  }

  // trust_ip_3 - computed: false, optional: true, required: false
  private _trustIp3?: string; 
  public get trustIp3() {
    return this.getStringAttribute('trust_ip_3');
  }
  public set trustIp3(value: string) {
    this._trustIp3 = value;
  }
  public resetTrustIp3() {
    this._trustIp3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustIp3Input() {
    return this._trustIp3;
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

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // vci - computed: false, optional: true, required: false
  private _vci?: number; 
  public get vci() {
    return this.getNumberAttribute('vci');
  }
  public set vci(value: number) {
    this._vci = value;
  }
  public resetVci() {
    this._vci = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vciInput() {
    return this._vci;
  }

  // vectoring - computed: true, optional: true, required: false
  private _vectoring?: string; 
  public get vectoring() {
    return this.getStringAttribute('vectoring');
  }
  public set vectoring(value: string) {
    this._vectoring = value;
  }
  public resetVectoring() {
    this._vectoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectoringInput() {
    return this._vectoring;
  }

  // vindex - computed: false, optional: true, required: false
  private _vindex?: number; 
  public get vindex() {
    return this.getNumberAttribute('vindex');
  }
  public set vindex(value: number) {
    this._vindex = value;
  }
  public resetVindex() {
    this._vindex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vindexInput() {
    return this._vindex;
  }

  // vlan - computed: false, optional: false, required: true
  private _vlan?: string; 
  public get vlan() {
    return this.getStringAttribute('vlan');
  }
  public set vlan(value: string) {
    this._vlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // vlan_op_mode - computed: true, optional: true, required: false
  private _vlanOpMode?: string; 
  public get vlanOpMode() {
    return this.getStringAttribute('vlan_op_mode');
  }
  public set vlanOpMode(value: string) {
    this._vlanOpMode = value;
  }
  public resetVlanOpMode() {
    this._vlanOpMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanOpModeInput() {
    return this._vlanOpMode;
  }

  // vlan_protocol - computed: true, optional: true, required: false
  private _vlanProtocol?: string; 
  public get vlanProtocol() {
    return this.getStringAttribute('vlan_protocol');
  }
  public set vlanProtocol(value: string) {
    this._vlanProtocol = value;
  }
  public resetVlanProtocol() {
    this._vlanProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanProtocolInput() {
    return this._vlanProtocol;
  }

  // vlanforward - computed: true, optional: true, required: false
  private _vlanforward?: string; 
  public get vlanforward() {
    return this.getStringAttribute('vlanforward');
  }
  public set vlanforward(value: string) {
    this._vlanforward = value;
  }
  public resetVlanforward() {
    this._vlanforward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanforwardInput() {
    return this._vlanforward;
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

  // vpi - computed: false, optional: true, required: false
  private _vpi?: number; 
  public get vpi() {
    return this.getNumberAttribute('vpi');
  }
  public set vpi(value: number) {
    this._vpi = value;
  }
  public resetVpi() {
    this._vpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpiInput() {
    return this._vpi;
  }

  // vrf - computed: false, optional: true, required: false
  private _vrf?: number; 
  public get vrf() {
    return this.getNumberAttribute('vrf');
  }
  public set vrf(value: number) {
    this._vrf = value;
  }
  public resetVrf() {
    this._vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }

  // vrrp_virtual_mac - computed: true, optional: true, required: false
  private _vrrpVirtualMac?: string; 
  public get vrrpVirtualMac() {
    return this.getStringAttribute('vrrp_virtual_mac');
  }
  public set vrrpVirtualMac(value: string) {
    this._vrrpVirtualMac = value;
  }
  public resetVrrpVirtualMac() {
    this._vrrpVirtualMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrrpVirtualMacInput() {
    return this._vrrpVirtualMac;
  }

  // wccp - computed: true, optional: true, required: false
  private _wccp?: string; 
  public get wccp() {
    return this.getStringAttribute('wccp');
  }
  public set wccp(value: string) {
    this._wccp = value;
  }
  public resetWccp() {
    this._wccp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wccpInput() {
    return this._wccp;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // wifi_5g_threshold - computed: true, optional: true, required: false
  private _wifi5GThreshold?: string; 
  public get wifi5GThreshold() {
    return this.getStringAttribute('wifi_5g_threshold');
  }
  public set wifi5GThreshold(value: string) {
    this._wifi5GThreshold = value;
  }
  public resetWifi5GThreshold() {
    this._wifi5GThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifi5GThresholdInput() {
    return this._wifi5GThreshold;
  }

  // wifi_acl - computed: false, optional: true, required: false
  private _wifiAcl?: string; 
  public get wifiAcl() {
    return this.getStringAttribute('wifi_acl');
  }
  public set wifiAcl(value: string) {
    this._wifiAcl = value;
  }
  public resetWifiAcl() {
    this._wifiAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiAclInput() {
    return this._wifiAcl;
  }

  // wifi_ap_band - computed: true, optional: true, required: false
  private _wifiApBand?: string; 
  public get wifiApBand() {
    return this.getStringAttribute('wifi_ap_band');
  }
  public set wifiApBand(value: string) {
    this._wifiApBand = value;
  }
  public resetWifiApBand() {
    this._wifiApBand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiApBandInput() {
    return this._wifiApBand;
  }

  // wifi_auth - computed: true, optional: true, required: false
  private _wifiAuth?: string; 
  public get wifiAuth() {
    return this.getStringAttribute('wifi_auth');
  }
  public set wifiAuth(value: string) {
    this._wifiAuth = value;
  }
  public resetWifiAuth() {
    this._wifiAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiAuthInput() {
    return this._wifiAuth;
  }

  // wifi_auto_connect - computed: true, optional: true, required: false
  private _wifiAutoConnect?: string; 
  public get wifiAutoConnect() {
    return this.getStringAttribute('wifi_auto_connect');
  }
  public set wifiAutoConnect(value: string) {
    this._wifiAutoConnect = value;
  }
  public resetWifiAutoConnect() {
    this._wifiAutoConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiAutoConnectInput() {
    return this._wifiAutoConnect;
  }

  // wifi_auto_save - computed: true, optional: true, required: false
  private _wifiAutoSave?: string; 
  public get wifiAutoSave() {
    return this.getStringAttribute('wifi_auto_save');
  }
  public set wifiAutoSave(value: string) {
    this._wifiAutoSave = value;
  }
  public resetWifiAutoSave() {
    this._wifiAutoSave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiAutoSaveInput() {
    return this._wifiAutoSave;
  }

  // wifi_broadcast_ssid - computed: false, optional: true, required: false
  private _wifiBroadcastSsid?: string; 
  public get wifiBroadcastSsid() {
    return this.getStringAttribute('wifi_broadcast_ssid');
  }
  public set wifiBroadcastSsid(value: string) {
    this._wifiBroadcastSsid = value;
  }
  public resetWifiBroadcastSsid() {
    this._wifiBroadcastSsid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiBroadcastSsidInput() {
    return this._wifiBroadcastSsid;
  }

  // wifi_dns_server1 - computed: true, optional: true, required: false
  private _wifiDnsServer1?: string; 
  public get wifiDnsServer1() {
    return this.getStringAttribute('wifi_dns_server1');
  }
  public set wifiDnsServer1(value: string) {
    this._wifiDnsServer1 = value;
  }
  public resetWifiDnsServer1() {
    this._wifiDnsServer1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiDnsServer1Input() {
    return this._wifiDnsServer1;
  }

  // wifi_dns_server2 - computed: true, optional: true, required: false
  private _wifiDnsServer2?: string; 
  public get wifiDnsServer2() {
    return this.getStringAttribute('wifi_dns_server2');
  }
  public set wifiDnsServer2(value: string) {
    this._wifiDnsServer2 = value;
  }
  public resetWifiDnsServer2() {
    this._wifiDnsServer2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiDnsServer2Input() {
    return this._wifiDnsServer2;
  }

  // wifi_encrypt - computed: true, optional: true, required: false
  private _wifiEncrypt?: string; 
  public get wifiEncrypt() {
    return this.getStringAttribute('wifi_encrypt');
  }
  public set wifiEncrypt(value: string) {
    this._wifiEncrypt = value;
  }
  public resetWifiEncrypt() {
    this._wifiEncrypt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiEncryptInput() {
    return this._wifiEncrypt;
  }

  // wifi_fragment_threshold - computed: false, optional: true, required: false
  private _wifiFragmentThreshold?: number; 
  public get wifiFragmentThreshold() {
    return this.getNumberAttribute('wifi_fragment_threshold');
  }
  public set wifiFragmentThreshold(value: number) {
    this._wifiFragmentThreshold = value;
  }
  public resetWifiFragmentThreshold() {
    this._wifiFragmentThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiFragmentThresholdInput() {
    return this._wifiFragmentThreshold;
  }

  // wifi_gateway - computed: true, optional: true, required: false
  private _wifiGateway?: string; 
  public get wifiGateway() {
    return this.getStringAttribute('wifi_gateway');
  }
  public set wifiGateway(value: string) {
    this._wifiGateway = value;
  }
  public resetWifiGateway() {
    this._wifiGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiGatewayInput() {
    return this._wifiGateway;
  }

  // wifi_key - computed: true, optional: true, required: false
  private _wifiKey?: string[]; 
  public get wifiKey() {
    return cdktf.Fn.tolist(this.getListAttribute('wifi_key'));
  }
  public set wifiKey(value: string[]) {
    this._wifiKey = value;
  }
  public resetWifiKey() {
    this._wifiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiKeyInput() {
    return this._wifiKey;
  }

  // wifi_keyindex - computed: false, optional: true, required: false
  private _wifiKeyindex?: number; 
  public get wifiKeyindex() {
    return this.getNumberAttribute('wifi_keyindex');
  }
  public set wifiKeyindex(value: number) {
    this._wifiKeyindex = value;
  }
  public resetWifiKeyindex() {
    this._wifiKeyindex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiKeyindexInput() {
    return this._wifiKeyindex;
  }

  // wifi_mac_filter - computed: false, optional: true, required: false
  private _wifiMacFilter?: string; 
  public get wifiMacFilter() {
    return this.getStringAttribute('wifi_mac_filter');
  }
  public set wifiMacFilter(value: string) {
    this._wifiMacFilter = value;
  }
  public resetWifiMacFilter() {
    this._wifiMacFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiMacFilterInput() {
    return this._wifiMacFilter;
  }

  // wifi_passphrase - computed: true, optional: true, required: false
  private _wifiPassphrase?: string[]; 
  public get wifiPassphrase() {
    return cdktf.Fn.tolist(this.getListAttribute('wifi_passphrase'));
  }
  public set wifiPassphrase(value: string[]) {
    this._wifiPassphrase = value;
  }
  public resetWifiPassphrase() {
    this._wifiPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiPassphraseInput() {
    return this._wifiPassphrase;
  }

  // wifi_radius_server - computed: false, optional: true, required: false
  private _wifiRadiusServer?: string; 
  public get wifiRadiusServer() {
    return this.getStringAttribute('wifi_radius_server');
  }
  public set wifiRadiusServer(value: string) {
    this._wifiRadiusServer = value;
  }
  public resetWifiRadiusServer() {
    this._wifiRadiusServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiRadiusServerInput() {
    return this._wifiRadiusServer;
  }

  // wifi_rts_threshold - computed: false, optional: true, required: false
  private _wifiRtsThreshold?: number; 
  public get wifiRtsThreshold() {
    return this.getNumberAttribute('wifi_rts_threshold');
  }
  public set wifiRtsThreshold(value: number) {
    this._wifiRtsThreshold = value;
  }
  public resetWifiRtsThreshold() {
    this._wifiRtsThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiRtsThresholdInput() {
    return this._wifiRtsThreshold;
  }

  // wifi_security - computed: false, optional: true, required: false
  private _wifiSecurity?: string; 
  public get wifiSecurity() {
    return this.getStringAttribute('wifi_security');
  }
  public set wifiSecurity(value: string) {
    this._wifiSecurity = value;
  }
  public resetWifiSecurity() {
    this._wifiSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiSecurityInput() {
    return this._wifiSecurity;
  }

  // wifi_ssid - computed: false, optional: true, required: false
  private _wifiSsid?: string; 
  public get wifiSsid() {
    return this.getStringAttribute('wifi_ssid');
  }
  public set wifiSsid(value: string) {
    this._wifiSsid = value;
  }
  public resetWifiSsid() {
    this._wifiSsid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiSsidInput() {
    return this._wifiSsid;
  }

  // wifi_usergroup - computed: false, optional: true, required: false
  private _wifiUsergroup?: string; 
  public get wifiUsergroup() {
    return this.getStringAttribute('wifi_usergroup');
  }
  public set wifiUsergroup(value: string) {
    this._wifiUsergroup = value;
  }
  public resetWifiUsergroup() {
    this._wifiUsergroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiUsergroupInput() {
    return this._wifiUsergroup;
  }

  // wins_ip - computed: true, optional: true, required: false
  private _winsIp?: string; 
  public get winsIp() {
    return this.getStringAttribute('wins_ip');
  }
  public set winsIp(value: string) {
    this._winsIp = value;
  }
  public resetWinsIp() {
    this._winsIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get winsIpInput() {
    return this._winsIp;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new ObjectFspVlanInterfaceIpv6AOutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: ObjectFspVlanInterfaceIpv6A) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }

  // secondaryip - computed: false, optional: true, required: false
  private _secondaryip = new ObjectFspVlanInterfaceSecondaryipAList(this, "secondaryip", false);
  public get secondaryip() {
    return this._secondaryip;
  }
  public putSecondaryip(value: ObjectFspVlanInterfaceSecondaryipA[] | cdktf.IResolvable) {
    this._secondaryip.internalValue = value;
  }
  public resetSecondaryip() {
    this._secondaryip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryipInput() {
    return this._secondaryip.internalValue;
  }

  // vrrp - computed: false, optional: true, required: false
  private _vrrp = new ObjectFspVlanInterfaceVrrpAList(this, "vrrp", false);
  public get vrrp() {
    return this._vrrp;
  }
  public putVrrp(value: ObjectFspVlanInterfaceVrrpA[] | cdktf.IResolvable) {
    this._vrrp.internalValue = value;
  }
  public resetVrrp() {
    this._vrrp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrrpInput() {
    return this._vrrp.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ac_name: cdktf.stringToTerraform(this._acName),
      adom: cdktf.stringToTerraform(this._adom),
      aggregate: cdktf.stringToTerraform(this._aggregate),
      aggregate_type: cdktf.stringToTerraform(this._aggregateType),
      algorithm: cdktf.stringToTerraform(this._algorithm),
      alias: cdktf.stringToTerraform(this._alias),
      allowaccess: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowaccess),
      annex: cdktf.stringToTerraform(this._annex),
      ap_discover: cdktf.stringToTerraform(this._apDiscover),
      arpforward: cdktf.stringToTerraform(this._arpforward),
      atm_protocol: cdktf.stringToTerraform(this._atmProtocol),
      auth_cert: cdktf.stringToTerraform(this._authCert),
      auth_portal_addr: cdktf.stringToTerraform(this._authPortalAddr),
      auth_type: cdktf.stringToTerraform(this._authType),
      auto_auth_extension_device: cdktf.stringToTerraform(this._autoAuthExtensionDevice),
      bandwidth_measure_time: cdktf.numberToTerraform(this._bandwidthMeasureTime),
      bfd: cdktf.stringToTerraform(this._bfd),
      bfd_desired_min_tx: cdktf.numberToTerraform(this._bfdDesiredMinTx),
      bfd_detect_mult: cdktf.numberToTerraform(this._bfdDetectMult),
      bfd_required_min_rx: cdktf.numberToTerraform(this._bfdRequiredMinRx),
      broadcast_forticlient_discovery: cdktf.stringToTerraform(this._broadcastForticlientDiscovery),
      broadcast_forward: cdktf.stringToTerraform(this._broadcastForward),
      captive_portal: cdktf.numberToTerraform(this._captivePortal),
      cli_conn_status: cdktf.numberToTerraform(this._cliConnStatus),
      color: cdktf.numberToTerraform(this._color),
      ddns: cdktf.stringToTerraform(this._ddns),
      ddns_auth: cdktf.stringToTerraform(this._ddnsAuth),
      ddns_domain: cdktf.stringToTerraform(this._ddnsDomain),
      ddns_key: cdktf.stringToTerraform(this._ddnsKey),
      ddns_keyname: cdktf.stringToTerraform(this._ddnsKeyname),
      ddns_password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ddnsPassword),
      ddns_server: cdktf.stringToTerraform(this._ddnsServer),
      ddns_server_ip: cdktf.stringToTerraform(this._ddnsServerIp),
      ddns_sn: cdktf.stringToTerraform(this._ddnsSn),
      ddns_ttl: cdktf.numberToTerraform(this._ddnsTtl),
      ddns_username: cdktf.stringToTerraform(this._ddnsUsername),
      ddns_zone: cdktf.stringToTerraform(this._ddnsZone),
      dedicated_to: cdktf.stringToTerraform(this._dedicatedTo),
      default_purdue_level: cdktf.stringToTerraform(this._defaultPurdueLevel),
      defaultgw: cdktf.stringToTerraform(this._defaultgw),
      description: cdktf.stringToTerraform(this._description),
      detected_peer_mtu: cdktf.numberToTerraform(this._detectedPeerMtu),
      detectprotocol: cdktf.listMapper(cdktf.stringToTerraform, false)(this._detectprotocol),
      detectserver: cdktf.stringToTerraform(this._detectserver),
      device_access_list: cdktf.stringToTerraform(this._deviceAccessList),
      device_identification: cdktf.stringToTerraform(this._deviceIdentification),
      device_identification_active_scan: cdktf.stringToTerraform(this._deviceIdentificationActiveScan),
      device_netscan: cdktf.stringToTerraform(this._deviceNetscan),
      device_user_identification: cdktf.stringToTerraform(this._deviceUserIdentification),
      devindex: cdktf.numberToTerraform(this._devindex),
      dhcp_broadcast_flag: cdktf.stringToTerraform(this._dhcpBroadcastFlag),
      dhcp_classless_route_addition: cdktf.stringToTerraform(this._dhcpClasslessRouteAddition),
      dhcp_client_identifier: cdktf.stringToTerraform(this._dhcpClientIdentifier),
      dhcp_relay_agent_option: cdktf.stringToTerraform(this._dhcpRelayAgentOption),
      dhcp_relay_circuit_id: cdktf.stringToTerraform(this._dhcpRelayCircuitId),
      dhcp_relay_interface: cdktf.stringToTerraform(this._dhcpRelayInterface),
      dhcp_relay_interface_select_method: cdktf.stringToTerraform(this._dhcpRelayInterfaceSelectMethod),
      dhcp_relay_ip: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dhcpRelayIp),
      dhcp_relay_link_selection: cdktf.stringToTerraform(this._dhcpRelayLinkSelection),
      dhcp_relay_request_all_server: cdktf.stringToTerraform(this._dhcpRelayRequestAllServer),
      dhcp_relay_service: cdktf.stringToTerraform(this._dhcpRelayService),
      dhcp_relay_source_ip: cdktf.stringToTerraform(this._dhcpRelaySourceIp),
      dhcp_relay_type: cdktf.stringToTerraform(this._dhcpRelayType),
      dhcp_renew_time: cdktf.numberToTerraform(this._dhcpRenewTime),
      dhcp_smart_relay: cdktf.stringToTerraform(this._dhcpSmartRelay),
      disc_retry_timeout: cdktf.numberToTerraform(this._discRetryTimeout),
      disconnect_threshold: cdktf.numberToTerraform(this._disconnectThreshold),
      distance: cdktf.numberToTerraform(this._distance),
      dns_query: cdktf.stringToTerraform(this._dnsQuery),
      dns_server_override: cdktf.stringToTerraform(this._dnsServerOverride),
      dns_server_protocol: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsServerProtocol),
      drop_fragment: cdktf.stringToTerraform(this._dropFragment),
      drop_overlapped_fragment: cdktf.stringToTerraform(this._dropOverlappedFragment),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      eap_ca_cert: cdktf.listMapper(cdktf.stringToTerraform, false)(this._eapCaCert),
      eap_identity: cdktf.stringToTerraform(this._eapIdentity),
      eap_method: cdktf.stringToTerraform(this._eapMethod),
      eap_password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._eapPassword),
      eap_supplicant: cdktf.stringToTerraform(this._eapSupplicant),
      eap_user_cert: cdktf.listMapper(cdktf.stringToTerraform, false)(this._eapUserCert),
      egress_cos: cdktf.stringToTerraform(this._egressCos),
      egress_shaping_profile: cdktf.stringToTerraform(this._egressShapingProfile),
      eip: cdktf.stringToTerraform(this._eip),
      endpoint_compliance: cdktf.stringToTerraform(this._endpointCompliance),
      estimated_downstream_bandwidth: cdktf.numberToTerraform(this._estimatedDownstreamBandwidth),
      estimated_upstream_bandwidth: cdktf.numberToTerraform(this._estimatedUpstreamBandwidth),
      explicit_ftp_proxy: cdktf.stringToTerraform(this._explicitFtpProxy),
      explicit_web_proxy: cdktf.stringToTerraform(this._explicitWebProxy),
      external: cdktf.stringToTerraform(this._external),
      fail_action_on_extender: cdktf.stringToTerraform(this._failActionOnExtender),
      fail_alert_interfaces: cdktf.stringToTerraform(this._failAlertInterfaces),
      fail_alert_method: cdktf.stringToTerraform(this._failAlertMethod),
      fail_detect: cdktf.stringToTerraform(this._failDetect),
      fail_detect_option: cdktf.listMapper(cdktf.stringToTerraform, false)(this._failDetectOption),
      fdp: cdktf.stringToTerraform(this._fdp),
      fortiheartbeat: cdktf.stringToTerraform(this._fortiheartbeat),
      fortilink: cdktf.stringToTerraform(this._fortilink),
      fortilink_backup_link: cdktf.numberToTerraform(this._fortilinkBackupLink),
      fortilink_neighbor_detect: cdktf.stringToTerraform(this._fortilinkNeighborDetect),
      fortilink_split_interface: cdktf.stringToTerraform(this._fortilinkSplitInterface),
      fortilink_stacking: cdktf.stringToTerraform(this._fortilinkStacking),
      forward_domain: cdktf.numberToTerraform(this._forwardDomain),
      forward_error_correction: cdktf.stringToTerraform(this._forwardErrorCorrection),
      fp_anomaly: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fpAnomaly),
      fp_disable: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fpDisable),
      gateway_address: cdktf.stringToTerraform(this._gatewayAddress),
      generic_receive_offload: cdktf.stringToTerraform(this._genericReceiveOffload),
      gi_gk: cdktf.stringToTerraform(this._giGk),
      gwaddr: cdktf.stringToTerraform(this._gwaddr),
      gwdetect: cdktf.stringToTerraform(this._gwdetect),
      ha_priority: cdktf.numberToTerraform(this._haPriority),
      icmp_accept_redirect: cdktf.stringToTerraform(this._icmpAcceptRedirect),
      icmp_redirect: cdktf.stringToTerraform(this._icmpRedirect),
      icmp_send_redirect: cdktf.stringToTerraform(this._icmpSendRedirect),
      id: cdktf.stringToTerraform(this._id),
      ident_accept: cdktf.stringToTerraform(this._identAccept),
      idle_timeout: cdktf.numberToTerraform(this._idleTimeout),
      if_mdix: cdktf.stringToTerraform(this._ifMdix),
      if_media: cdktf.stringToTerraform(this._ifMedia),
      ike_saml_server: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ikeSamlServer),
      in_force_vlan_cos: cdktf.numberToTerraform(this._inForceVlanCos),
      inbandwidth: cdktf.numberToTerraform(this._inbandwidth),
      ingress_cos: cdktf.stringToTerraform(this._ingressCos),
      ingress_shaping_profile: cdktf.stringToTerraform(this._ingressShapingProfile),
      ingress_spillover_threshold: cdktf.numberToTerraform(this._ingressSpilloverThreshold),
      interconnect_profile: cdktf.stringToTerraform(this._interconnectProfile),
      internal: cdktf.numberToTerraform(this._internal),
      ip: cdktf.stringToTerraform(this._ip),
      ip_managed_by_fortiipam: cdktf.stringToTerraform(this._ipManagedByFortiipam),
      ipmac: cdktf.stringToTerraform(this._ipmac),
      ips_sniffer_mode: cdktf.stringToTerraform(this._ipsSnifferMode),
      ipunnumbered: cdktf.stringToTerraform(this._ipunnumbered),
      l2forward: cdktf.stringToTerraform(this._l2Forward),
      l2tp_client: cdktf.stringToTerraform(this._l2TpClient),
      lacp_ha_secondary: cdktf.stringToTerraform(this._lacpHaSecondary),
      lacp_ha_slave: cdktf.stringToTerraform(this._lacpHaSlave),
      lacp_mode: cdktf.stringToTerraform(this._lacpMode),
      lacp_speed: cdktf.stringToTerraform(this._lacpSpeed),
      large_receive_offload: cdktf.stringToTerraform(this._largeReceiveOffload),
      lcp_echo_interval: cdktf.numberToTerraform(this._lcpEchoInterval),
      lcp_max_echo_fails: cdktf.numberToTerraform(this._lcpMaxEchoFails),
      link_up_delay: cdktf.numberToTerraform(this._linkUpDelay),
      listen_forticlient_connection: cdktf.stringToTerraform(this._listenForticlientConnection),
      lldp_network_policy: cdktf.stringToTerraform(this._lldpNetworkPolicy),
      lldp_reception: cdktf.stringToTerraform(this._lldpReception),
      lldp_transmission: cdktf.stringToTerraform(this._lldpTransmission),
      log: cdktf.stringToTerraform(this._log),
      macaddr: cdktf.stringToTerraform(this._macaddr),
      managed_subnetwork_size: cdktf.stringToTerraform(this._managedSubnetworkSize),
      management_ip: cdktf.stringToTerraform(this._managementIp),
      max_egress_burst_rate: cdktf.numberToTerraform(this._maxEgressBurstRate),
      max_egress_rate: cdktf.numberToTerraform(this._maxEgressRate),
      measured_downstream_bandwidth: cdktf.numberToTerraform(this._measuredDownstreamBandwidth),
      measured_upstream_bandwidth: cdktf.numberToTerraform(this._measuredUpstreamBandwidth),
      mediatype: cdktf.stringToTerraform(this._mediatype),
      member: cdktf.stringToTerraform(this._member),
      min_links: cdktf.numberToTerraform(this._minLinks),
      min_links_down: cdktf.stringToTerraform(this._minLinksDown),
      mirroring_direction: cdktf.stringToTerraform(this._mirroringDirection),
      mirroring_port: cdktf.stringToTerraform(this._mirroringPort),
      mode: cdktf.stringToTerraform(this._mode),
      monitor_bandwidth: cdktf.stringToTerraform(this._monitorBandwidth),
      mtu: cdktf.numberToTerraform(this._mtu),
      mtu_override: cdktf.stringToTerraform(this._mtuOverride),
      mux_type: cdktf.stringToTerraform(this._muxType),
      name: cdktf.stringToTerraform(this._name),
      ndiscforward: cdktf.stringToTerraform(this._ndiscforward),
      netbios_forward: cdktf.stringToTerraform(this._netbiosForward),
      netflow_sampler: cdktf.stringToTerraform(this._netflowSampler),
      np_qos_profile: cdktf.numberToTerraform(this._npQosProfile),
      npu_fastpath: cdktf.stringToTerraform(this._npuFastpath),
      nst: cdktf.stringToTerraform(this._nst),
      out_force_vlan_cos: cdktf.numberToTerraform(this._outForceVlanCos),
      outbandwidth: cdktf.numberToTerraform(this._outbandwidth),
      padt_retry_timeout: cdktf.numberToTerraform(this._padtRetryTimeout),
      password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._password),
      peer_interface: cdktf.stringToTerraform(this._peerInterface),
      phy_mode: cdktf.stringToTerraform(this._phyMode),
      ping_serv_status: cdktf.numberToTerraform(this._pingServStatus),
      poe: cdktf.stringToTerraform(this._poe),
      polling_interval: cdktf.numberToTerraform(this._pollingInterval),
      port_mirroring: cdktf.stringToTerraform(this._portMirroring),
      pppoe_unnumbered_negotiate: cdktf.stringToTerraform(this._pppoeUnnumberedNegotiate),
      pptp_auth_type: cdktf.stringToTerraform(this._pptpAuthType),
      pptp_client: cdktf.stringToTerraform(this._pptpClient),
      pptp_password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pptpPassword),
      pptp_server_ip: cdktf.stringToTerraform(this._pptpServerIp),
      pptp_timeout: cdktf.numberToTerraform(this._pptpTimeout),
      pptp_user: cdktf.stringToTerraform(this._pptpUser),
      preserve_session_route: cdktf.stringToTerraform(this._preserveSessionRoute),
      priority: cdktf.numberToTerraform(this._priority),
      priority_override: cdktf.stringToTerraform(this._priorityOverride),
      proxy_captive_portal: cdktf.stringToTerraform(this._proxyCaptivePortal),
      pvc_atm_qos: cdktf.stringToTerraform(this._pvcAtmQos),
      pvc_chan: cdktf.numberToTerraform(this._pvcChan),
      pvc_crc: cdktf.numberToTerraform(this._pvcCrc),
      pvc_pcr: cdktf.numberToTerraform(this._pvcPcr),
      pvc_scr: cdktf.numberToTerraform(this._pvcScr),
      pvc_vlan_id: cdktf.numberToTerraform(this._pvcVlanId),
      pvc_vlan_rx_id: cdktf.numberToTerraform(this._pvcVlanRxId),
      pvc_vlan_rx_op: cdktf.stringToTerraform(this._pvcVlanRxOp),
      pvc_vlan_tx_id: cdktf.numberToTerraform(this._pvcVlanTxId),
      pvc_vlan_tx_op: cdktf.stringToTerraform(this._pvcVlanTxOp),
      reachable_time: cdktf.numberToTerraform(this._reachableTime),
      redundant_interface: cdktf.stringToTerraform(this._redundantInterface),
      remote_ip: cdktf.stringToTerraform(this._remoteIp),
      replacemsg_override_group: cdktf.stringToTerraform(this._replacemsgOverrideGroup),
      retransmission: cdktf.stringToTerraform(this._retransmission),
      ring_rx: cdktf.numberToTerraform(this._ringRx),
      ring_tx: cdktf.numberToTerraform(this._ringTx),
      role: cdktf.stringToTerraform(this._role),
      sample_direction: cdktf.stringToTerraform(this._sampleDirection),
      sample_rate: cdktf.numberToTerraform(this._sampleRate),
      scan_botnet_connections: cdktf.stringToTerraform(this._scanBotnetConnections),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      secondary_ip: cdktf.stringToTerraform(this._secondaryIp),
      security_8021x_dynamic_vlan_id: cdktf.numberToTerraform(this._security8021XDynamicVlanId),
      security_8021x_master: cdktf.stringToTerraform(this._security8021XMaster),
      security_8021x_member_mode: cdktf.stringToTerraform(this._security8021XMemberMode),
      security_8021x_mode: cdktf.stringToTerraform(this._security8021XMode),
      security_exempt_list: cdktf.stringToTerraform(this._securityExemptList),
      security_external_logout: cdktf.stringToTerraform(this._securityExternalLogout),
      security_external_web: cdktf.stringToTerraform(this._securityExternalWeb),
      security_groups: cdktf.stringToTerraform(this._securityGroups),
      security_mac_auth_bypass: cdktf.stringToTerraform(this._securityMacAuthBypass),
      security_mode: cdktf.stringToTerraform(this._securityMode),
      security_redirect_url: cdktf.stringToTerraform(this._securityRedirectUrl),
      select_profile_30a_35b: cdktf.stringToTerraform(this._selectProfile30A35B),
      service_name: cdktf.stringToTerraform(this._serviceName),
      sflow_sampler: cdktf.stringToTerraform(this._sflowSampler),
      sfp_dsl: cdktf.stringToTerraform(this._sfpDsl),
      sfp_dsl_adsl_fallback: cdktf.stringToTerraform(this._sfpDslAdslFallback),
      sfp_dsl_autodetect: cdktf.stringToTerraform(this._sfpDslAutodetect),
      sfp_dsl_mac: cdktf.stringToTerraform(this._sfpDslMac),
      speed: cdktf.stringToTerraform(this._speed),
      spillover_threshold: cdktf.numberToTerraform(this._spilloverThreshold),
      src_check: cdktf.stringToTerraform(this._srcCheck),
      status: cdktf.stringToTerraform(this._status),
      stp: cdktf.stringToTerraform(this._stp),
      stp_edge: cdktf.stringToTerraform(this._stpEdge),
      stp_ha_secondary: cdktf.stringToTerraform(this._stpHaSecondary),
      stp_ha_slave: cdktf.stringToTerraform(this._stpHaSlave),
      stpforward: cdktf.stringToTerraform(this._stpforward),
      stpforward_mode: cdktf.stringToTerraform(this._stpforwardMode),
      strip_priority_vlan_tag: cdktf.stringToTerraform(this._stripPriorityVlanTag),
      subst: cdktf.stringToTerraform(this._subst),
      substitute_dst_mac: cdktf.stringToTerraform(this._substituteDstMac),
      sw_algorithm: cdktf.stringToTerraform(this._swAlgorithm),
      swc_first_create: cdktf.numberToTerraform(this._swcFirstCreate),
      swc_vlan: cdktf.numberToTerraform(this._swcVlan),
      switch: cdktf.stringToTerraform(this._switch),
      switch_controller_access_vlan: cdktf.stringToTerraform(this._switchControllerAccessVlan),
      switch_controller_arp_inspection: cdktf.stringToTerraform(this._switchControllerArpInspection),
      switch_controller_auth: cdktf.stringToTerraform(this._switchControllerAuth),
      switch_controller_dhcp_snooping: cdktf.stringToTerraform(this._switchControllerDhcpSnooping),
      switch_controller_dhcp_snooping_option82: cdktf.stringToTerraform(this._switchControllerDhcpSnoopingOption82),
      switch_controller_dhcp_snooping_verify_mac: cdktf.stringToTerraform(this._switchControllerDhcpSnoopingVerifyMac),
      switch_controller_dynamic: cdktf.stringToTerraform(this._switchControllerDynamic),
      switch_controller_feature: cdktf.stringToTerraform(this._switchControllerFeature),
      switch_controller_igmp_snooping: cdktf.stringToTerraform(this._switchControllerIgmpSnooping),
      switch_controller_igmp_snooping_fast_leave: cdktf.stringToTerraform(this._switchControllerIgmpSnoopingFastLeave),
      switch_controller_igmp_snooping_proxy: cdktf.stringToTerraform(this._switchControllerIgmpSnoopingProxy),
      switch_controller_iot_scanning: cdktf.stringToTerraform(this._switchControllerIotScanning),
      switch_controller_learning_limit: cdktf.numberToTerraform(this._switchControllerLearningLimit),
      switch_controller_mgmt_vlan: cdktf.numberToTerraform(this._switchControllerMgmtVlan),
      switch_controller_nac: cdktf.stringToTerraform(this._switchControllerNac),
      switch_controller_netflow_collect: cdktf.stringToTerraform(this._switchControllerNetflowCollect),
      switch_controller_offload: cdktf.stringToTerraform(this._switchControllerOffload),
      switch_controller_offload_gw: cdktf.stringToTerraform(this._switchControllerOffloadGw),
      switch_controller_offload_ip: cdktf.stringToTerraform(this._switchControllerOffloadIp),
      switch_controller_offloading: cdktf.stringToTerraform(this._switchControllerOffloading),
      switch_controller_offloading_gw: cdktf.stringToTerraform(this._switchControllerOffloadingGw),
      switch_controller_offloading_ip: cdktf.stringToTerraform(this._switchControllerOffloadingIp),
      switch_controller_radius_server: cdktf.stringToTerraform(this._switchControllerRadiusServer),
      switch_controller_rspan_mode: cdktf.stringToTerraform(this._switchControllerRspanMode),
      switch_controller_source_ip: cdktf.stringToTerraform(this._switchControllerSourceIp),
      switch_controller_traffic_policy: cdktf.stringToTerraform(this._switchControllerTrafficPolicy),
      system_id: cdktf.stringToTerraform(this._systemId),
      system_id_type: cdktf.stringToTerraform(this._systemIdType),
      tc_mode: cdktf.stringToTerraform(this._tcMode),
      tcp_mss: cdktf.numberToTerraform(this._tcpMss),
      trunk: cdktf.stringToTerraform(this._trunk),
      trust_ip6_1: cdktf.stringToTerraform(this._trustIp61),
      trust_ip6_2: cdktf.stringToTerraform(this._trustIp62),
      trust_ip6_3: cdktf.stringToTerraform(this._trustIp63),
      trust_ip_1: cdktf.stringToTerraform(this._trustIp1),
      trust_ip_2: cdktf.stringToTerraform(this._trustIp2),
      trust_ip_3: cdktf.stringToTerraform(this._trustIp3),
      type: cdktf.stringToTerraform(this._type),
      username: cdktf.stringToTerraform(this._username),
      vci: cdktf.numberToTerraform(this._vci),
      vectoring: cdktf.stringToTerraform(this._vectoring),
      vindex: cdktf.numberToTerraform(this._vindex),
      vlan: cdktf.stringToTerraform(this._vlan),
      vlan_op_mode: cdktf.stringToTerraform(this._vlanOpMode),
      vlan_protocol: cdktf.stringToTerraform(this._vlanProtocol),
      vlanforward: cdktf.stringToTerraform(this._vlanforward),
      vlanid: cdktf.numberToTerraform(this._vlanid),
      vpi: cdktf.numberToTerraform(this._vpi),
      vrf: cdktf.numberToTerraform(this._vrf),
      vrrp_virtual_mac: cdktf.stringToTerraform(this._vrrpVirtualMac),
      wccp: cdktf.stringToTerraform(this._wccp),
      weight: cdktf.numberToTerraform(this._weight),
      wifi_5g_threshold: cdktf.stringToTerraform(this._wifi5GThreshold),
      wifi_acl: cdktf.stringToTerraform(this._wifiAcl),
      wifi_ap_band: cdktf.stringToTerraform(this._wifiApBand),
      wifi_auth: cdktf.stringToTerraform(this._wifiAuth),
      wifi_auto_connect: cdktf.stringToTerraform(this._wifiAutoConnect),
      wifi_auto_save: cdktf.stringToTerraform(this._wifiAutoSave),
      wifi_broadcast_ssid: cdktf.stringToTerraform(this._wifiBroadcastSsid),
      wifi_dns_server1: cdktf.stringToTerraform(this._wifiDnsServer1),
      wifi_dns_server2: cdktf.stringToTerraform(this._wifiDnsServer2),
      wifi_encrypt: cdktf.stringToTerraform(this._wifiEncrypt),
      wifi_fragment_threshold: cdktf.numberToTerraform(this._wifiFragmentThreshold),
      wifi_gateway: cdktf.stringToTerraform(this._wifiGateway),
      wifi_key: cdktf.listMapper(cdktf.stringToTerraform, false)(this._wifiKey),
      wifi_keyindex: cdktf.numberToTerraform(this._wifiKeyindex),
      wifi_mac_filter: cdktf.stringToTerraform(this._wifiMacFilter),
      wifi_passphrase: cdktf.listMapper(cdktf.stringToTerraform, false)(this._wifiPassphrase),
      wifi_radius_server: cdktf.stringToTerraform(this._wifiRadiusServer),
      wifi_rts_threshold: cdktf.numberToTerraform(this._wifiRtsThreshold),
      wifi_security: cdktf.stringToTerraform(this._wifiSecurity),
      wifi_ssid: cdktf.stringToTerraform(this._wifiSsid),
      wifi_usergroup: cdktf.stringToTerraform(this._wifiUsergroup),
      wins_ip: cdktf.stringToTerraform(this._winsIp),
      ipv6: objectFspVlanInterfaceIpv6AToTerraform(this._ipv6.internalValue),
      secondaryip: cdktf.listMapper(objectFspVlanInterfaceSecondaryipAToTerraform, true)(this._secondaryip.internalValue),
      vrrp: cdktf.listMapper(objectFspVlanInterfaceVrrpAToTerraform, true)(this._vrrp.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ac_name: {
        value: cdktf.stringToHclTerraform(this._acName),
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
      aggregate: {
        value: cdktf.stringToHclTerraform(this._aggregate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aggregate_type: {
        value: cdktf.stringToHclTerraform(this._aggregateType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      algorithm: {
        value: cdktf.stringToHclTerraform(this._algorithm),
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
      allowaccess: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowaccess),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      annex: {
        value: cdktf.stringToHclTerraform(this._annex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ap_discover: {
        value: cdktf.stringToHclTerraform(this._apDiscover),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arpforward: {
        value: cdktf.stringToHclTerraform(this._arpforward),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      atm_protocol: {
        value: cdktf.stringToHclTerraform(this._atmProtocol),
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
      auth_type: {
        value: cdktf.stringToHclTerraform(this._authType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_auth_extension_device: {
        value: cdktf.stringToHclTerraform(this._autoAuthExtensionDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bandwidth_measure_time: {
        value: cdktf.numberToHclTerraform(this._bandwidthMeasureTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bfd: {
        value: cdktf.stringToHclTerraform(this._bfd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bfd_desired_min_tx: {
        value: cdktf.numberToHclTerraform(this._bfdDesiredMinTx),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bfd_detect_mult: {
        value: cdktf.numberToHclTerraform(this._bfdDetectMult),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bfd_required_min_rx: {
        value: cdktf.numberToHclTerraform(this._bfdRequiredMinRx),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      broadcast_forticlient_discovery: {
        value: cdktf.stringToHclTerraform(this._broadcastForticlientDiscovery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      broadcast_forward: {
        value: cdktf.stringToHclTerraform(this._broadcastForward),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      captive_portal: {
        value: cdktf.numberToHclTerraform(this._captivePortal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cli_conn_status: {
        value: cdktf.numberToHclTerraform(this._cliConnStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      color: {
        value: cdktf.numberToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ddns: {
        value: cdktf.stringToHclTerraform(this._ddns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_auth: {
        value: cdktf.stringToHclTerraform(this._ddnsAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_domain: {
        value: cdktf.stringToHclTerraform(this._ddnsDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_key: {
        value: cdktf.stringToHclTerraform(this._ddnsKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_keyname: {
        value: cdktf.stringToHclTerraform(this._ddnsKeyname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_password: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ddnsPassword),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ddns_server: {
        value: cdktf.stringToHclTerraform(this._ddnsServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_server_ip: {
        value: cdktf.stringToHclTerraform(this._ddnsServerIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_sn: {
        value: cdktf.stringToHclTerraform(this._ddnsSn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_ttl: {
        value: cdktf.numberToHclTerraform(this._ddnsTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ddns_username: {
        value: cdktf.stringToHclTerraform(this._ddnsUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_zone: {
        value: cdktf.stringToHclTerraform(this._ddnsZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dedicated_to: {
        value: cdktf.stringToHclTerraform(this._dedicatedTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_purdue_level: {
        value: cdktf.stringToHclTerraform(this._defaultPurdueLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defaultgw: {
        value: cdktf.stringToHclTerraform(this._defaultgw),
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
      detected_peer_mtu: {
        value: cdktf.numberToHclTerraform(this._detectedPeerMtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      detectprotocol: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._detectprotocol),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      detectserver: {
        value: cdktf.stringToHclTerraform(this._detectserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_access_list: {
        value: cdktf.stringToHclTerraform(this._deviceAccessList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_identification: {
        value: cdktf.stringToHclTerraform(this._deviceIdentification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_identification_active_scan: {
        value: cdktf.stringToHclTerraform(this._deviceIdentificationActiveScan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_netscan: {
        value: cdktf.stringToHclTerraform(this._deviceNetscan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_user_identification: {
        value: cdktf.stringToHclTerraform(this._deviceUserIdentification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      devindex: {
        value: cdktf.numberToHclTerraform(this._devindex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dhcp_broadcast_flag: {
        value: cdktf.stringToHclTerraform(this._dhcpBroadcastFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_classless_route_addition: {
        value: cdktf.stringToHclTerraform(this._dhcpClasslessRouteAddition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_client_identifier: {
        value: cdktf.stringToHclTerraform(this._dhcpClientIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_relay_agent_option: {
        value: cdktf.stringToHclTerraform(this._dhcpRelayAgentOption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_relay_circuit_id: {
        value: cdktf.stringToHclTerraform(this._dhcpRelayCircuitId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_relay_interface: {
        value: cdktf.stringToHclTerraform(this._dhcpRelayInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_relay_interface_select_method: {
        value: cdktf.stringToHclTerraform(this._dhcpRelayInterfaceSelectMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_relay_ip: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dhcpRelayIp),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dhcp_relay_link_selection: {
        value: cdktf.stringToHclTerraform(this._dhcpRelayLinkSelection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_relay_request_all_server: {
        value: cdktf.stringToHclTerraform(this._dhcpRelayRequestAllServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_relay_service: {
        value: cdktf.stringToHclTerraform(this._dhcpRelayService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_relay_source_ip: {
        value: cdktf.stringToHclTerraform(this._dhcpRelaySourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_relay_type: {
        value: cdktf.stringToHclTerraform(this._dhcpRelayType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_renew_time: {
        value: cdktf.numberToHclTerraform(this._dhcpRenewTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dhcp_smart_relay: {
        value: cdktf.stringToHclTerraform(this._dhcpSmartRelay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disc_retry_timeout: {
        value: cdktf.numberToHclTerraform(this._discRetryTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disconnect_threshold: {
        value: cdktf.numberToHclTerraform(this._disconnectThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      distance: {
        value: cdktf.numberToHclTerraform(this._distance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_query: {
        value: cdktf.stringToHclTerraform(this._dnsQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_server_override: {
        value: cdktf.stringToHclTerraform(this._dnsServerOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_server_protocol: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsServerProtocol),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      drop_fragment: {
        value: cdktf.stringToHclTerraform(this._dropFragment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drop_overlapped_fragment: {
        value: cdktf.stringToHclTerraform(this._dropOverlappedFragment),
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
      eap_ca_cert: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._eapCaCert),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      eap_identity: {
        value: cdktf.stringToHclTerraform(this._eapIdentity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eap_method: {
        value: cdktf.stringToHclTerraform(this._eapMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eap_password: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._eapPassword),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      eap_supplicant: {
        value: cdktf.stringToHclTerraform(this._eapSupplicant),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eap_user_cert: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._eapUserCert),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      egress_cos: {
        value: cdktf.stringToHclTerraform(this._egressCos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      egress_shaping_profile: {
        value: cdktf.stringToHclTerraform(this._egressShapingProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eip: {
        value: cdktf.stringToHclTerraform(this._eip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_compliance: {
        value: cdktf.stringToHclTerraform(this._endpointCompliance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      estimated_downstream_bandwidth: {
        value: cdktf.numberToHclTerraform(this._estimatedDownstreamBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      estimated_upstream_bandwidth: {
        value: cdktf.numberToHclTerraform(this._estimatedUpstreamBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      explicit_ftp_proxy: {
        value: cdktf.stringToHclTerraform(this._explicitFtpProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      explicit_web_proxy: {
        value: cdktf.stringToHclTerraform(this._explicitWebProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external: {
        value: cdktf.stringToHclTerraform(this._external),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fail_action_on_extender: {
        value: cdktf.stringToHclTerraform(this._failActionOnExtender),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fail_alert_interfaces: {
        value: cdktf.stringToHclTerraform(this._failAlertInterfaces),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fail_alert_method: {
        value: cdktf.stringToHclTerraform(this._failAlertMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fail_detect: {
        value: cdktf.stringToHclTerraform(this._failDetect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fail_detect_option: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._failDetectOption),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      fdp: {
        value: cdktf.stringToHclTerraform(this._fdp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortiheartbeat: {
        value: cdktf.stringToHclTerraform(this._fortiheartbeat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortilink: {
        value: cdktf.stringToHclTerraform(this._fortilink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortilink_backup_link: {
        value: cdktf.numberToHclTerraform(this._fortilinkBackupLink),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fortilink_neighbor_detect: {
        value: cdktf.stringToHclTerraform(this._fortilinkNeighborDetect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortilink_split_interface: {
        value: cdktf.stringToHclTerraform(this._fortilinkSplitInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortilink_stacking: {
        value: cdktf.stringToHclTerraform(this._fortilinkStacking),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_domain: {
        value: cdktf.numberToHclTerraform(this._forwardDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forward_error_correction: {
        value: cdktf.stringToHclTerraform(this._forwardErrorCorrection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fp_anomaly: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fpAnomaly),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      fp_disable: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fpDisable),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      gateway_address: {
        value: cdktf.stringToHclTerraform(this._gatewayAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      generic_receive_offload: {
        value: cdktf.stringToHclTerraform(this._genericReceiveOffload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gi_gk: {
        value: cdktf.stringToHclTerraform(this._giGk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gwaddr: {
        value: cdktf.stringToHclTerraform(this._gwaddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gwdetect: {
        value: cdktf.stringToHclTerraform(this._gwdetect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_priority: {
        value: cdktf.numberToHclTerraform(this._haPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icmp_accept_redirect: {
        value: cdktf.stringToHclTerraform(this._icmpAcceptRedirect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmp_redirect: {
        value: cdktf.stringToHclTerraform(this._icmpRedirect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmp_send_redirect: {
        value: cdktf.stringToHclTerraform(this._icmpSendRedirect),
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
      ident_accept: {
        value: cdktf.stringToHclTerraform(this._identAccept),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idle_timeout: {
        value: cdktf.numberToHclTerraform(this._idleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      if_mdix: {
        value: cdktf.stringToHclTerraform(this._ifMdix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      if_media: {
        value: cdktf.stringToHclTerraform(this._ifMedia),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_saml_server: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ikeSamlServer),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      in_force_vlan_cos: {
        value: cdktf.numberToHclTerraform(this._inForceVlanCos),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      inbandwidth: {
        value: cdktf.numberToHclTerraform(this._inbandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ingress_cos: {
        value: cdktf.stringToHclTerraform(this._ingressCos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ingress_shaping_profile: {
        value: cdktf.stringToHclTerraform(this._ingressShapingProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ingress_spillover_threshold: {
        value: cdktf.numberToHclTerraform(this._ingressSpilloverThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      interconnect_profile: {
        value: cdktf.stringToHclTerraform(this._interconnectProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internal: {
        value: cdktf.numberToHclTerraform(this._internal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_managed_by_fortiipam: {
        value: cdktf.stringToHclTerraform(this._ipManagedByFortiipam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipmac: {
        value: cdktf.stringToHclTerraform(this._ipmac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ips_sniffer_mode: {
        value: cdktf.stringToHclTerraform(this._ipsSnifferMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipunnumbered: {
        value: cdktf.stringToHclTerraform(this._ipunnumbered),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l2forward: {
        value: cdktf.stringToHclTerraform(this._l2Forward),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l2tp_client: {
        value: cdktf.stringToHclTerraform(this._l2TpClient),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lacp_ha_secondary: {
        value: cdktf.stringToHclTerraform(this._lacpHaSecondary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lacp_ha_slave: {
        value: cdktf.stringToHclTerraform(this._lacpHaSlave),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lacp_mode: {
        value: cdktf.stringToHclTerraform(this._lacpMode),
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
      large_receive_offload: {
        value: cdktf.stringToHclTerraform(this._largeReceiveOffload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lcp_echo_interval: {
        value: cdktf.numberToHclTerraform(this._lcpEchoInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lcp_max_echo_fails: {
        value: cdktf.numberToHclTerraform(this._lcpMaxEchoFails),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      link_up_delay: {
        value: cdktf.numberToHclTerraform(this._linkUpDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      listen_forticlient_connection: {
        value: cdktf.stringToHclTerraform(this._listenForticlientConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lldp_network_policy: {
        value: cdktf.stringToHclTerraform(this._lldpNetworkPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lldp_reception: {
        value: cdktf.stringToHclTerraform(this._lldpReception),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lldp_transmission: {
        value: cdktf.stringToHclTerraform(this._lldpTransmission),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log: {
        value: cdktf.stringToHclTerraform(this._log),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      macaddr: {
        value: cdktf.stringToHclTerraform(this._macaddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_subnetwork_size: {
        value: cdktf.stringToHclTerraform(this._managedSubnetworkSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      management_ip: {
        value: cdktf.stringToHclTerraform(this._managementIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_egress_burst_rate: {
        value: cdktf.numberToHclTerraform(this._maxEgressBurstRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_egress_rate: {
        value: cdktf.numberToHclTerraform(this._maxEgressRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      measured_downstream_bandwidth: {
        value: cdktf.numberToHclTerraform(this._measuredDownstreamBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      measured_upstream_bandwidth: {
        value: cdktf.numberToHclTerraform(this._measuredUpstreamBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mediatype: {
        value: cdktf.stringToHclTerraform(this._mediatype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member: {
        value: cdktf.stringToHclTerraform(this._member),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_links: {
        value: cdktf.numberToHclTerraform(this._minLinks),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_links_down: {
        value: cdktf.stringToHclTerraform(this._minLinksDown),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mirroring_direction: {
        value: cdktf.stringToHclTerraform(this._mirroringDirection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mirroring_port: {
        value: cdktf.stringToHclTerraform(this._mirroringPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_bandwidth: {
        value: cdktf.stringToHclTerraform(this._monitorBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mtu_override: {
        value: cdktf.stringToHclTerraform(this._mtuOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mux_type: {
        value: cdktf.stringToHclTerraform(this._muxType),
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
      ndiscforward: {
        value: cdktf.stringToHclTerraform(this._ndiscforward),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netbios_forward: {
        value: cdktf.stringToHclTerraform(this._netbiosForward),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netflow_sampler: {
        value: cdktf.stringToHclTerraform(this._netflowSampler),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      np_qos_profile: {
        value: cdktf.numberToHclTerraform(this._npQosProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      npu_fastpath: {
        value: cdktf.stringToHclTerraform(this._npuFastpath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nst: {
        value: cdktf.stringToHclTerraform(this._nst),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      out_force_vlan_cos: {
        value: cdktf.numberToHclTerraform(this._outForceVlanCos),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      outbandwidth: {
        value: cdktf.numberToHclTerraform(this._outbandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      padt_retry_timeout: {
        value: cdktf.numberToHclTerraform(this._padtRetryTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._password),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      peer_interface: {
        value: cdktf.stringToHclTerraform(this._peerInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phy_mode: {
        value: cdktf.stringToHclTerraform(this._phyMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ping_serv_status: {
        value: cdktf.numberToHclTerraform(this._pingServStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      poe: {
        value: cdktf.stringToHclTerraform(this._poe),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      polling_interval: {
        value: cdktf.numberToHclTerraform(this._pollingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_mirroring: {
        value: cdktf.stringToHclTerraform(this._portMirroring),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pppoe_unnumbered_negotiate: {
        value: cdktf.stringToHclTerraform(this._pppoeUnnumberedNegotiate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pptp_auth_type: {
        value: cdktf.stringToHclTerraform(this._pptpAuthType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pptp_client: {
        value: cdktf.stringToHclTerraform(this._pptpClient),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pptp_password: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pptpPassword),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      pptp_server_ip: {
        value: cdktf.stringToHclTerraform(this._pptpServerIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pptp_timeout: {
        value: cdktf.numberToHclTerraform(this._pptpTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pptp_user: {
        value: cdktf.stringToHclTerraform(this._pptpUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preserve_session_route: {
        value: cdktf.stringToHclTerraform(this._preserveSessionRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      priority_override: {
        value: cdktf.stringToHclTerraform(this._priorityOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_captive_portal: {
        value: cdktf.stringToHclTerraform(this._proxyCaptivePortal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pvc_atm_qos: {
        value: cdktf.stringToHclTerraform(this._pvcAtmQos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pvc_chan: {
        value: cdktf.numberToHclTerraform(this._pvcChan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pvc_crc: {
        value: cdktf.numberToHclTerraform(this._pvcCrc),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pvc_pcr: {
        value: cdktf.numberToHclTerraform(this._pvcPcr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pvc_scr: {
        value: cdktf.numberToHclTerraform(this._pvcScr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pvc_vlan_id: {
        value: cdktf.numberToHclTerraform(this._pvcVlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pvc_vlan_rx_id: {
        value: cdktf.numberToHclTerraform(this._pvcVlanRxId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pvc_vlan_rx_op: {
        value: cdktf.stringToHclTerraform(this._pvcVlanRxOp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pvc_vlan_tx_id: {
        value: cdktf.numberToHclTerraform(this._pvcVlanTxId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pvc_vlan_tx_op: {
        value: cdktf.stringToHclTerraform(this._pvcVlanTxOp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reachable_time: {
        value: cdktf.numberToHclTerraform(this._reachableTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      redundant_interface: {
        value: cdktf.stringToHclTerraform(this._redundantInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_ip: {
        value: cdktf.stringToHclTerraform(this._remoteIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replacemsg_override_group: {
        value: cdktf.stringToHclTerraform(this._replacemsgOverrideGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retransmission: {
        value: cdktf.stringToHclTerraform(this._retransmission),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ring_rx: {
        value: cdktf.numberToHclTerraform(this._ringRx),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ring_tx: {
        value: cdktf.numberToHclTerraform(this._ringTx),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
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
      sample_rate: {
        value: cdktf.numberToHclTerraform(this._sampleRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scan_botnet_connections: {
        value: cdktf.stringToHclTerraform(this._scanBotnetConnections),
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
      secondary_ip: {
        value: cdktf.stringToHclTerraform(this._secondaryIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_8021x_dynamic_vlan_id: {
        value: cdktf.numberToHclTerraform(this._security8021XDynamicVlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_8021x_master: {
        value: cdktf.stringToHclTerraform(this._security8021XMaster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_8021x_member_mode: {
        value: cdktf.stringToHclTerraform(this._security8021XMemberMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_8021x_mode: {
        value: cdktf.stringToHclTerraform(this._security8021XMode),
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
      security_external_logout: {
        value: cdktf.stringToHclTerraform(this._securityExternalLogout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_external_web: {
        value: cdktf.stringToHclTerraform(this._securityExternalWeb),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_groups: {
        value: cdktf.stringToHclTerraform(this._securityGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_mac_auth_bypass: {
        value: cdktf.stringToHclTerraform(this._securityMacAuthBypass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_mode: {
        value: cdktf.stringToHclTerraform(this._securityMode),
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
      select_profile_30a_35b: {
        value: cdktf.stringToHclTerraform(this._selectProfile30A35B),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sflow_sampler: {
        value: cdktf.stringToHclTerraform(this._sflowSampler),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sfp_dsl: {
        value: cdktf.stringToHclTerraform(this._sfpDsl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sfp_dsl_adsl_fallback: {
        value: cdktf.stringToHclTerraform(this._sfpDslAdslFallback),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sfp_dsl_autodetect: {
        value: cdktf.stringToHclTerraform(this._sfpDslAutodetect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sfp_dsl_mac: {
        value: cdktf.stringToHclTerraform(this._sfpDslMac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      speed: {
        value: cdktf.stringToHclTerraform(this._speed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spillover_threshold: {
        value: cdktf.numberToHclTerraform(this._spilloverThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      src_check: {
        value: cdktf.stringToHclTerraform(this._srcCheck),
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
      stp: {
        value: cdktf.stringToHclTerraform(this._stp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stp_edge: {
        value: cdktf.stringToHclTerraform(this._stpEdge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stp_ha_secondary: {
        value: cdktf.stringToHclTerraform(this._stpHaSecondary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stp_ha_slave: {
        value: cdktf.stringToHclTerraform(this._stpHaSlave),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stpforward: {
        value: cdktf.stringToHclTerraform(this._stpforward),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stpforward_mode: {
        value: cdktf.stringToHclTerraform(this._stpforwardMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strip_priority_vlan_tag: {
        value: cdktf.stringToHclTerraform(this._stripPriorityVlanTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subst: {
        value: cdktf.stringToHclTerraform(this._subst),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      substitute_dst_mac: {
        value: cdktf.stringToHclTerraform(this._substituteDstMac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sw_algorithm: {
        value: cdktf.stringToHclTerraform(this._swAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      swc_first_create: {
        value: cdktf.numberToHclTerraform(this._swcFirstCreate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      swc_vlan: {
        value: cdktf.numberToHclTerraform(this._swcVlan),
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
      switch_controller_access_vlan: {
        value: cdktf.stringToHclTerraform(this._switchControllerAccessVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_controller_arp_inspection: {
        value: cdktf.stringToHclTerraform(this._switchControllerArpInspection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_controller_auth: {
        value: cdktf.stringToHclTerraform(this._switchControllerAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_controller_dhcp_snooping: {
        value: cdktf.stringToHclTerraform(this._switchControllerDhcpSnooping),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_controller_dhcp_snooping_option82: {
        value: cdktf.stringToHclTerraform(this._switchControllerDhcpSnoopingOption82),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_controller_dhcp_snooping_verify_mac: {
        value: cdktf.stringToHclTerraform(this._switchControllerDhcpSnoopingVerifyMac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_controller_dynamic: {
        value: cdktf.stringToHclTerraform(this._switchControllerDynamic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_controller_feature: {
        value: cdktf.stringToHclTerraform(this._switchControllerFeature),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_controller_igmp_snooping: {
        value: cdktf.stringToHclTerraform(this._switchControllerIgmpSnooping),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_controller_igmp_snooping_fast_leave: {
        value: cdktf.stringToHclTerraform(this._switchControllerIgmpSnoopingFastLeave),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_controller_igmp_snooping_proxy: {
        value: cdktf.stringToHclTerraform(this._switchControllerIgmpSnoopingProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_controller_iot_scanning: {
        value: cdktf.stringToHclTerraform(this._switchControllerIotScanning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_controller_learning_limit: {
        value: cdktf.numberToHclTerraform(this._switchControllerLearningLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      switch_controller_mgmt_vlan: {
        value: cdktf.numberToHclTerraform(this._switchControllerMgmtVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      switch_controller_nac: {
        value: cdktf.stringToHclTerraform(this._switchControllerNac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_controller_netflow_collect: {
        value: cdktf.stringToHclTerraform(this._switchControllerNetflowCollect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_controller_offload: {
        value: cdktf.stringToHclTerraform(this._switchControllerOffload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_controller_offload_gw: {
        value: cdktf.stringToHclTerraform(this._switchControllerOffloadGw),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_controller_offload_ip: {
        value: cdktf.stringToHclTerraform(this._switchControllerOffloadIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_controller_offloading: {
        value: cdktf.stringToHclTerraform(this._switchControllerOffloading),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_controller_offloading_gw: {
        value: cdktf.stringToHclTerraform(this._switchControllerOffloadingGw),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_controller_offloading_ip: {
        value: cdktf.stringToHclTerraform(this._switchControllerOffloadingIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_controller_radius_server: {
        value: cdktf.stringToHclTerraform(this._switchControllerRadiusServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_controller_rspan_mode: {
        value: cdktf.stringToHclTerraform(this._switchControllerRspanMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_controller_source_ip: {
        value: cdktf.stringToHclTerraform(this._switchControllerSourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_controller_traffic_policy: {
        value: cdktf.stringToHclTerraform(this._switchControllerTrafficPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_id: {
        value: cdktf.stringToHclTerraform(this._systemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_id_type: {
        value: cdktf.stringToHclTerraform(this._systemIdType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tc_mode: {
        value: cdktf.stringToHclTerraform(this._tcMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_mss: {
        value: cdktf.numberToHclTerraform(this._tcpMss),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trunk: {
        value: cdktf.stringToHclTerraform(this._trunk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_ip6_1: {
        value: cdktf.stringToHclTerraform(this._trustIp61),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_ip6_2: {
        value: cdktf.stringToHclTerraform(this._trustIp62),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_ip6_3: {
        value: cdktf.stringToHclTerraform(this._trustIp63),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_ip_1: {
        value: cdktf.stringToHclTerraform(this._trustIp1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_ip_2: {
        value: cdktf.stringToHclTerraform(this._trustIp2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_ip_3: {
        value: cdktf.stringToHclTerraform(this._trustIp3),
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
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vci: {
        value: cdktf.numberToHclTerraform(this._vci),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vectoring: {
        value: cdktf.stringToHclTerraform(this._vectoring),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vindex: {
        value: cdktf.numberToHclTerraform(this._vindex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan: {
        value: cdktf.stringToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_op_mode: {
        value: cdktf.stringToHclTerraform(this._vlanOpMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_protocol: {
        value: cdktf.stringToHclTerraform(this._vlanProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlanforward: {
        value: cdktf.stringToHclTerraform(this._vlanforward),
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
      vpi: {
        value: cdktf.numberToHclTerraform(this._vpi),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vrf: {
        value: cdktf.numberToHclTerraform(this._vrf),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vrrp_virtual_mac: {
        value: cdktf.stringToHclTerraform(this._vrrpVirtualMac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wccp: {
        value: cdktf.stringToHclTerraform(this._wccp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wifi_5g_threshold: {
        value: cdktf.stringToHclTerraform(this._wifi5GThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wifi_acl: {
        value: cdktf.stringToHclTerraform(this._wifiAcl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wifi_ap_band: {
        value: cdktf.stringToHclTerraform(this._wifiApBand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wifi_auth: {
        value: cdktf.stringToHclTerraform(this._wifiAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wifi_auto_connect: {
        value: cdktf.stringToHclTerraform(this._wifiAutoConnect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wifi_auto_save: {
        value: cdktf.stringToHclTerraform(this._wifiAutoSave),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wifi_broadcast_ssid: {
        value: cdktf.stringToHclTerraform(this._wifiBroadcastSsid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wifi_dns_server1: {
        value: cdktf.stringToHclTerraform(this._wifiDnsServer1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wifi_dns_server2: {
        value: cdktf.stringToHclTerraform(this._wifiDnsServer2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wifi_encrypt: {
        value: cdktf.stringToHclTerraform(this._wifiEncrypt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wifi_fragment_threshold: {
        value: cdktf.numberToHclTerraform(this._wifiFragmentThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wifi_gateway: {
        value: cdktf.stringToHclTerraform(this._wifiGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wifi_key: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._wifiKey),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      wifi_keyindex: {
        value: cdktf.numberToHclTerraform(this._wifiKeyindex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wifi_mac_filter: {
        value: cdktf.stringToHclTerraform(this._wifiMacFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wifi_passphrase: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._wifiPassphrase),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      wifi_radius_server: {
        value: cdktf.stringToHclTerraform(this._wifiRadiusServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wifi_rts_threshold: {
        value: cdktf.numberToHclTerraform(this._wifiRtsThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wifi_security: {
        value: cdktf.stringToHclTerraform(this._wifiSecurity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wifi_ssid: {
        value: cdktf.stringToHclTerraform(this._wifiSsid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wifi_usergroup: {
        value: cdktf.stringToHclTerraform(this._wifiUsergroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wins_ip: {
        value: cdktf.stringToHclTerraform(this._winsIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6: {
        value: objectFspVlanInterfaceIpv6AToHclTerraform(this._ipv6.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFspVlanInterfaceIpv6AList",
      },
      secondaryip: {
        value: cdktf.listMapperHcl(objectFspVlanInterfaceSecondaryipAToHclTerraform, true)(this._secondaryip.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFspVlanInterfaceSecondaryipAList",
      },
      vrrp: {
        value: cdktf.listMapperHcl(objectFspVlanInterfaceVrrpAToHclTerraform, true)(this._vrrp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFspVlanInterfaceVrrpAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
