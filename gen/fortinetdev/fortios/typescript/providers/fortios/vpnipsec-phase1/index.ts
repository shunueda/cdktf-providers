// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnipsecPhase1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#acct_verify VpnipsecPhase1#acct_verify}
  */
  readonly acctVerify?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#add_gw_route VpnipsecPhase1#add_gw_route}
  */
  readonly addGwRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#add_route VpnipsecPhase1#add_route}
  */
  readonly addRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#addke1 VpnipsecPhase1#addke1}
  */
  readonly addke1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#addke2 VpnipsecPhase1#addke2}
  */
  readonly addke2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#addke3 VpnipsecPhase1#addke3}
  */
  readonly addke3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#addke4 VpnipsecPhase1#addke4}
  */
  readonly addke4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#addke5 VpnipsecPhase1#addke5}
  */
  readonly addke5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#addke6 VpnipsecPhase1#addke6}
  */
  readonly addke6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#addke7 VpnipsecPhase1#addke7}
  */
  readonly addke7?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#assign_ip VpnipsecPhase1#assign_ip}
  */
  readonly assignIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#assign_ip_from VpnipsecPhase1#assign_ip_from}
  */
  readonly assignIpFrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#authmethod VpnipsecPhase1#authmethod}
  */
  readonly authmethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#authmethod_remote VpnipsecPhase1#authmethod_remote}
  */
  readonly authmethodRemote?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#authpasswd VpnipsecPhase1#authpasswd}
  */
  readonly authpasswd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#authusr VpnipsecPhase1#authusr}
  */
  readonly authusr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#authusrgrp VpnipsecPhase1#authusrgrp}
  */
  readonly authusrgrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#auto_negotiate VpnipsecPhase1#auto_negotiate}
  */
  readonly autoNegotiate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#auto_transport_threshold VpnipsecPhase1#auto_transport_threshold}
  */
  readonly autoTransportThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#azure_ad_autoconnect VpnipsecPhase1#azure_ad_autoconnect}
  */
  readonly azureAdAutoconnect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#banner VpnipsecPhase1#banner}
  */
  readonly banner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#cert_id_validation VpnipsecPhase1#cert_id_validation}
  */
  readonly certIdValidation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#cert_peer_username_strip VpnipsecPhase1#cert_peer_username_strip}
  */
  readonly certPeerUsernameStrip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#cert_peer_username_validation VpnipsecPhase1#cert_peer_username_validation}
  */
  readonly certPeerUsernameValidation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#cert_trust_store VpnipsecPhase1#cert_trust_store}
  */
  readonly certTrustStore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#childless_ike VpnipsecPhase1#childless_ike}
  */
  readonly childlessIke?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#client_auto_negotiate VpnipsecPhase1#client_auto_negotiate}
  */
  readonly clientAutoNegotiate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#client_keep_alive VpnipsecPhase1#client_keep_alive}
  */
  readonly clientKeepAlive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#client_resume VpnipsecPhase1#client_resume}
  */
  readonly clientResume?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#client_resume_interval VpnipsecPhase1#client_resume_interval}
  */
  readonly clientResumeInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#comments VpnipsecPhase1#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#dev_id VpnipsecPhase1#dev_id}
  */
  readonly devId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#dev_id_notification VpnipsecPhase1#dev_id_notification}
  */
  readonly devIdNotification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#dhcp6_ra_linkaddr VpnipsecPhase1#dhcp6_ra_linkaddr}
  */
  readonly dhcp6RaLinkaddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#dhcp_ra_giaddr VpnipsecPhase1#dhcp_ra_giaddr}
  */
  readonly dhcpRaGiaddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#dhgrp VpnipsecPhase1#dhgrp}
  */
  readonly dhgrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#digital_signature_auth VpnipsecPhase1#digital_signature_auth}
  */
  readonly digitalSignatureAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#distance VpnipsecPhase1#distance}
  */
  readonly distance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#dns_mode VpnipsecPhase1#dns_mode}
  */
  readonly dnsMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#domain VpnipsecPhase1#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#dpd VpnipsecPhase1#dpd}
  */
  readonly dpd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#dpd_retrycount VpnipsecPhase1#dpd_retrycount}
  */
  readonly dpdRetrycount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#dpd_retryinterval VpnipsecPhase1#dpd_retryinterval}
  */
  readonly dpdRetryinterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#dynamic_sort_subtable VpnipsecPhase1#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#eap VpnipsecPhase1#eap}
  */
  readonly eap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#eap_cert_auth VpnipsecPhase1#eap_cert_auth}
  */
  readonly eapCertAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#eap_exclude_peergrp VpnipsecPhase1#eap_exclude_peergrp}
  */
  readonly eapExcludePeergrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#eap_identity VpnipsecPhase1#eap_identity}
  */
  readonly eapIdentity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#ems_sn_check VpnipsecPhase1#ems_sn_check}
  */
  readonly emsSnCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#enforce_unique_id VpnipsecPhase1#enforce_unique_id}
  */
  readonly enforceUniqueId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#esn VpnipsecPhase1#esn}
  */
  readonly esn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#exchange_fgt_device_id VpnipsecPhase1#exchange_fgt_device_id}
  */
  readonly exchangeFgtDeviceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#fallback_tcp_threshold VpnipsecPhase1#fallback_tcp_threshold}
  */
  readonly fallbackTcpThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#fec_base VpnipsecPhase1#fec_base}
  */
  readonly fecBase?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#fec_codec VpnipsecPhase1#fec_codec}
  */
  readonly fecCodec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#fec_codec_string VpnipsecPhase1#fec_codec_string}
  */
  readonly fecCodecString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#fec_egress VpnipsecPhase1#fec_egress}
  */
  readonly fecEgress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#fec_health_check VpnipsecPhase1#fec_health_check}
  */
  readonly fecHealthCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#fec_ingress VpnipsecPhase1#fec_ingress}
  */
  readonly fecIngress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#fec_mapping_profile VpnipsecPhase1#fec_mapping_profile}
  */
  readonly fecMappingProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#fec_receive_timeout VpnipsecPhase1#fec_receive_timeout}
  */
  readonly fecReceiveTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#fec_redundant VpnipsecPhase1#fec_redundant}
  */
  readonly fecRedundant?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#fec_send_timeout VpnipsecPhase1#fec_send_timeout}
  */
  readonly fecSendTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#fgsp_sync VpnipsecPhase1#fgsp_sync}
  */
  readonly fgspSync?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#forticlient_enforcement VpnipsecPhase1#forticlient_enforcement}
  */
  readonly forticlientEnforcement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#fortinet_esp VpnipsecPhase1#fortinet_esp}
  */
  readonly fortinetEsp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#fragmentation VpnipsecPhase1#fragmentation}
  */
  readonly fragmentation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#fragmentation_mtu VpnipsecPhase1#fragmentation_mtu}
  */
  readonly fragmentationMtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#get_all_tables VpnipsecPhase1#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#group_authentication VpnipsecPhase1#group_authentication}
  */
  readonly groupAuthentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#group_authentication_secret VpnipsecPhase1#group_authentication_secret}
  */
  readonly groupAuthenticationSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#ha_sync_esp_seqno VpnipsecPhase1#ha_sync_esp_seqno}
  */
  readonly haSyncEspSeqno?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#id VpnipsecPhase1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#idle_timeout VpnipsecPhase1#idle_timeout}
  */
  readonly idleTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#idle_timeoutinterval VpnipsecPhase1#idle_timeoutinterval}
  */
  readonly idleTimeoutinterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#ike_version VpnipsecPhase1#ike_version}
  */
  readonly ikeVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#inbound_dscp_copy VpnipsecPhase1#inbound_dscp_copy}
  */
  readonly inboundDscpCopy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#include_local_lan VpnipsecPhase1#include_local_lan}
  */
  readonly includeLocalLan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#interface VpnipsecPhase1#interface}
  */
  readonly interface: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#ip_delay_interval VpnipsecPhase1#ip_delay_interval}
  */
  readonly ipDelayInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#ipv4_dns_server1 VpnipsecPhase1#ipv4_dns_server1}
  */
  readonly ipv4DnsServer1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#ipv4_dns_server2 VpnipsecPhase1#ipv4_dns_server2}
  */
  readonly ipv4DnsServer2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#ipv4_dns_server3 VpnipsecPhase1#ipv4_dns_server3}
  */
  readonly ipv4DnsServer3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#ipv4_end_ip VpnipsecPhase1#ipv4_end_ip}
  */
  readonly ipv4EndIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#ipv4_name VpnipsecPhase1#ipv4_name}
  */
  readonly ipv4Name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#ipv4_netmask VpnipsecPhase1#ipv4_netmask}
  */
  readonly ipv4Netmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#ipv4_split_exclude VpnipsecPhase1#ipv4_split_exclude}
  */
  readonly ipv4SplitExclude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#ipv4_split_include VpnipsecPhase1#ipv4_split_include}
  */
  readonly ipv4SplitInclude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#ipv4_start_ip VpnipsecPhase1#ipv4_start_ip}
  */
  readonly ipv4StartIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#ipv4_wins_server1 VpnipsecPhase1#ipv4_wins_server1}
  */
  readonly ipv4WinsServer1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#ipv4_wins_server2 VpnipsecPhase1#ipv4_wins_server2}
  */
  readonly ipv4WinsServer2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#ipv6_auto_linklocal VpnipsecPhase1#ipv6_auto_linklocal}
  */
  readonly ipv6AutoLinklocal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#ipv6_dns_server1 VpnipsecPhase1#ipv6_dns_server1}
  */
  readonly ipv6DnsServer1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#ipv6_dns_server2 VpnipsecPhase1#ipv6_dns_server2}
  */
  readonly ipv6DnsServer2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#ipv6_dns_server3 VpnipsecPhase1#ipv6_dns_server3}
  */
  readonly ipv6DnsServer3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#ipv6_end_ip VpnipsecPhase1#ipv6_end_ip}
  */
  readonly ipv6EndIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#ipv6_name VpnipsecPhase1#ipv6_name}
  */
  readonly ipv6Name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#ipv6_prefix VpnipsecPhase1#ipv6_prefix}
  */
  readonly ipv6Prefix?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#ipv6_split_exclude VpnipsecPhase1#ipv6_split_exclude}
  */
  readonly ipv6SplitExclude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#ipv6_split_include VpnipsecPhase1#ipv6_split_include}
  */
  readonly ipv6SplitInclude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#ipv6_start_ip VpnipsecPhase1#ipv6_start_ip}
  */
  readonly ipv6StartIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#keepalive VpnipsecPhase1#keepalive}
  */
  readonly keepalive?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#keylife VpnipsecPhase1#keylife}
  */
  readonly keylife?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#kms VpnipsecPhase1#kms}
  */
  readonly kms?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#link_cost VpnipsecPhase1#link_cost}
  */
  readonly linkCost?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#local_gw VpnipsecPhase1#local_gw}
  */
  readonly localGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#localid VpnipsecPhase1#localid}
  */
  readonly localid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#localid_type VpnipsecPhase1#localid_type}
  */
  readonly localidType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#loopback_asymroute VpnipsecPhase1#loopback_asymroute}
  */
  readonly loopbackAsymroute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#mesh_selector_type VpnipsecPhase1#mesh_selector_type}
  */
  readonly meshSelectorType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#mode VpnipsecPhase1#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#mode_cfg VpnipsecPhase1#mode_cfg}
  */
  readonly modeCfg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#mode_cfg_allow_client_selector VpnipsecPhase1#mode_cfg_allow_client_selector}
  */
  readonly modeCfgAllowClientSelector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#name VpnipsecPhase1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#nattraversal VpnipsecPhase1#nattraversal}
  */
  readonly nattraversal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#negotiate_timeout VpnipsecPhase1#negotiate_timeout}
  */
  readonly negotiateTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#network_id VpnipsecPhase1#network_id}
  */
  readonly networkId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#network_overlay VpnipsecPhase1#network_overlay}
  */
  readonly networkOverlay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#npu_offload VpnipsecPhase1#npu_offload}
  */
  readonly npuOffload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#peer VpnipsecPhase1#peer}
  */
  readonly peer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#peergrp VpnipsecPhase1#peergrp}
  */
  readonly peergrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#peerid VpnipsecPhase1#peerid}
  */
  readonly peerid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#peertype VpnipsecPhase1#peertype}
  */
  readonly peertype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#ppk VpnipsecPhase1#ppk}
  */
  readonly ppk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#ppk_identity VpnipsecPhase1#ppk_identity}
  */
  readonly ppkIdentity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#ppk_secret VpnipsecPhase1#ppk_secret}
  */
  readonly ppkSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#priority VpnipsecPhase1#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#proposal VpnipsecPhase1#proposal}
  */
  readonly proposal: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#psksecret VpnipsecPhase1#psksecret}
  */
  readonly psksecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#psksecret_remote VpnipsecPhase1#psksecret_remote}
  */
  readonly psksecretRemote?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#qkd VpnipsecPhase1#qkd}
  */
  readonly qkd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#qkd_hybrid VpnipsecPhase1#qkd_hybrid}
  */
  readonly qkdHybrid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#qkd_profile VpnipsecPhase1#qkd_profile}
  */
  readonly qkdProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#reauth VpnipsecPhase1#reauth}
  */
  readonly reauth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#rekey VpnipsecPhase1#rekey}
  */
  readonly rekey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#remote_gw VpnipsecPhase1#remote_gw}
  */
  readonly remoteGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#remote_gw6_country VpnipsecPhase1#remote_gw6_country}
  */
  readonly remoteGw6Country?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#remote_gw6_end_ip VpnipsecPhase1#remote_gw6_end_ip}
  */
  readonly remoteGw6EndIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#remote_gw6_match VpnipsecPhase1#remote_gw6_match}
  */
  readonly remoteGw6Match?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#remote_gw6_start_ip VpnipsecPhase1#remote_gw6_start_ip}
  */
  readonly remoteGw6StartIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#remote_gw6_subnet VpnipsecPhase1#remote_gw6_subnet}
  */
  readonly remoteGw6Subnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#remote_gw_country VpnipsecPhase1#remote_gw_country}
  */
  readonly remoteGwCountry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#remote_gw_end_ip VpnipsecPhase1#remote_gw_end_ip}
  */
  readonly remoteGwEndIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#remote_gw_match VpnipsecPhase1#remote_gw_match}
  */
  readonly remoteGwMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#remote_gw_start_ip VpnipsecPhase1#remote_gw_start_ip}
  */
  readonly remoteGwStartIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#remote_gw_subnet VpnipsecPhase1#remote_gw_subnet}
  */
  readonly remoteGwSubnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#remotegw_ddns VpnipsecPhase1#remotegw_ddns}
  */
  readonly remotegwDdns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#rsa_signature_format VpnipsecPhase1#rsa_signature_format}
  */
  readonly rsaSignatureFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#rsa_signature_hash_override VpnipsecPhase1#rsa_signature_hash_override}
  */
  readonly rsaSignatureHashOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#save_password VpnipsecPhase1#save_password}
  */
  readonly savePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#send_cert_chain VpnipsecPhase1#send_cert_chain}
  */
  readonly sendCertChain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#shared_idle_timeout VpnipsecPhase1#shared_idle_timeout}
  */
  readonly sharedIdleTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#signature_hash_alg VpnipsecPhase1#signature_hash_alg}
  */
  readonly signatureHashAlg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#split_include_service VpnipsecPhase1#split_include_service}
  */
  readonly splitIncludeService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#suite_b VpnipsecPhase1#suite_b}
  */
  readonly suiteB?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#transport VpnipsecPhase1#transport}
  */
  readonly transport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#type VpnipsecPhase1#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#unity_support VpnipsecPhase1#unity_support}
  */
  readonly unitySupport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#usrgrp VpnipsecPhase1#usrgrp}
  */
  readonly usrgrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#vdomparam VpnipsecPhase1#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#wizard_type VpnipsecPhase1#wizard_type}
  */
  readonly wizardType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#xauthtype VpnipsecPhase1#xauthtype}
  */
  readonly xauthtype?: string;
  /**
  * backup_gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#backup_gateway VpnipsecPhase1#backup_gateway}
  */
  readonly backupGateway?: VpnipsecPhase1BackupGateway[] | cdktf.IResolvable;
  /**
  * certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#certificate VpnipsecPhase1#certificate}
  */
  readonly certificate?: VpnipsecPhase1Certificate[] | cdktf.IResolvable;
  /**
  * dns_suffix_search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#dns_suffix_search VpnipsecPhase1#dns_suffix_search}
  */
  readonly dnsSuffixSearch?: VpnipsecPhase1DnsSuffixSearch[] | cdktf.IResolvable;
  /**
  * internal_domain_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#internal_domain_list VpnipsecPhase1#internal_domain_list}
  */
  readonly internalDomainList?: VpnipsecPhase1InternalDomainListStruct[] | cdktf.IResolvable;
  /**
  * ipv4_exclude_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#ipv4_exclude_range VpnipsecPhase1#ipv4_exclude_range}
  */
  readonly ipv4ExcludeRange?: VpnipsecPhase1Ipv4ExcludeRange[] | cdktf.IResolvable;
  /**
  * ipv6_exclude_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#ipv6_exclude_range VpnipsecPhase1#ipv6_exclude_range}
  */
  readonly ipv6ExcludeRange?: VpnipsecPhase1Ipv6ExcludeRange[] | cdktf.IResolvable;
  /**
  * remote_gw_ztna_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#remote_gw_ztna_tags VpnipsecPhase1#remote_gw_ztna_tags}
  */
  readonly remoteGwZtnaTags?: VpnipsecPhase1RemoteGwZtnaTags[] | cdktf.IResolvable;
}
export interface VpnipsecPhase1BackupGateway {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#address VpnipsecPhase1#address}
  */
  readonly address?: string;
}

export function vpnipsecPhase1BackupGatewayToTerraform(struct?: VpnipsecPhase1BackupGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
  }
}


export function vpnipsecPhase1BackupGatewayToHclTerraform(struct?: VpnipsecPhase1BackupGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnipsecPhase1BackupGatewayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnipsecPhase1BackupGateway | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnipsecPhase1BackupGateway | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }
}

export class VpnipsecPhase1BackupGatewayList extends cdktf.ComplexList {
  public internalValue? : VpnipsecPhase1BackupGateway[] | cdktf.IResolvable

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
  public get(index: number): VpnipsecPhase1BackupGatewayOutputReference {
    return new VpnipsecPhase1BackupGatewayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnipsecPhase1Certificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#name VpnipsecPhase1#name}
  */
  readonly name?: string;
}

export function vpnipsecPhase1CertificateToTerraform(struct?: VpnipsecPhase1Certificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vpnipsecPhase1CertificateToHclTerraform(struct?: VpnipsecPhase1Certificate | cdktf.IResolvable): any {
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

export class VpnipsecPhase1CertificateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnipsecPhase1Certificate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpnipsecPhase1Certificate | cdktf.IResolvable | undefined) {
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

export class VpnipsecPhase1CertificateList extends cdktf.ComplexList {
  public internalValue? : VpnipsecPhase1Certificate[] | cdktf.IResolvable

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
  public get(index: number): VpnipsecPhase1CertificateOutputReference {
    return new VpnipsecPhase1CertificateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnipsecPhase1DnsSuffixSearch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#dns_suffix VpnipsecPhase1#dns_suffix}
  */
  readonly dnsSuffix?: string;
}

export function vpnipsecPhase1DnsSuffixSearchToTerraform(struct?: VpnipsecPhase1DnsSuffixSearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_suffix: cdktf.stringToTerraform(struct!.dnsSuffix),
  }
}


export function vpnipsecPhase1DnsSuffixSearchToHclTerraform(struct?: VpnipsecPhase1DnsSuffixSearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_suffix: {
      value: cdktf.stringToHclTerraform(struct!.dnsSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnipsecPhase1DnsSuffixSearchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnipsecPhase1DnsSuffixSearch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsSuffix = this._dnsSuffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnipsecPhase1DnsSuffixSearch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsSuffix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsSuffix = value.dnsSuffix;
    }
  }

  // dns_suffix - computed: false, optional: true, required: false
  private _dnsSuffix?: string; 
  public get dnsSuffix() {
    return this.getStringAttribute('dns_suffix');
  }
  public set dnsSuffix(value: string) {
    this._dnsSuffix = value;
  }
  public resetDnsSuffix() {
    this._dnsSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSuffixInput() {
    return this._dnsSuffix;
  }
}

export class VpnipsecPhase1DnsSuffixSearchList extends cdktf.ComplexList {
  public internalValue? : VpnipsecPhase1DnsSuffixSearch[] | cdktf.IResolvable

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
  public get(index: number): VpnipsecPhase1DnsSuffixSearchOutputReference {
    return new VpnipsecPhase1DnsSuffixSearchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnipsecPhase1InternalDomainListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#domain_name VpnipsecPhase1#domain_name}
  */
  readonly domainName?: string;
}

export function vpnipsecPhase1InternalDomainListStructToTerraform(struct?: VpnipsecPhase1InternalDomainListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_name: cdktf.stringToTerraform(struct!.domainName),
  }
}


export function vpnipsecPhase1InternalDomainListStructToHclTerraform(struct?: VpnipsecPhase1InternalDomainListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnipsecPhase1InternalDomainListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnipsecPhase1InternalDomainListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnipsecPhase1InternalDomainListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainName = value.domainName;
    }
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }
}

export class VpnipsecPhase1InternalDomainListStructList extends cdktf.ComplexList {
  public internalValue? : VpnipsecPhase1InternalDomainListStruct[] | cdktf.IResolvable

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
  public get(index: number): VpnipsecPhase1InternalDomainListStructOutputReference {
    return new VpnipsecPhase1InternalDomainListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnipsecPhase1Ipv4ExcludeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#end_ip VpnipsecPhase1#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#id VpnipsecPhase1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#start_ip VpnipsecPhase1#start_ip}
  */
  readonly startIp?: string;
}

export function vpnipsecPhase1Ipv4ExcludeRangeToTerraform(struct?: VpnipsecPhase1Ipv4ExcludeRange | cdktf.IResolvable): any {
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


export function vpnipsecPhase1Ipv4ExcludeRangeToHclTerraform(struct?: VpnipsecPhase1Ipv4ExcludeRange | cdktf.IResolvable): any {
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

export class VpnipsecPhase1Ipv4ExcludeRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnipsecPhase1Ipv4ExcludeRange | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpnipsecPhase1Ipv4ExcludeRange | cdktf.IResolvable | undefined) {
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

export class VpnipsecPhase1Ipv4ExcludeRangeList extends cdktf.ComplexList {
  public internalValue? : VpnipsecPhase1Ipv4ExcludeRange[] | cdktf.IResolvable

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
  public get(index: number): VpnipsecPhase1Ipv4ExcludeRangeOutputReference {
    return new VpnipsecPhase1Ipv4ExcludeRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnipsecPhase1Ipv6ExcludeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#end_ip VpnipsecPhase1#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#id VpnipsecPhase1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#start_ip VpnipsecPhase1#start_ip}
  */
  readonly startIp?: string;
}

export function vpnipsecPhase1Ipv6ExcludeRangeToTerraform(struct?: VpnipsecPhase1Ipv6ExcludeRange | cdktf.IResolvable): any {
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


export function vpnipsecPhase1Ipv6ExcludeRangeToHclTerraform(struct?: VpnipsecPhase1Ipv6ExcludeRange | cdktf.IResolvable): any {
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

export class VpnipsecPhase1Ipv6ExcludeRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnipsecPhase1Ipv6ExcludeRange | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpnipsecPhase1Ipv6ExcludeRange | cdktf.IResolvable | undefined) {
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

export class VpnipsecPhase1Ipv6ExcludeRangeList extends cdktf.ComplexList {
  public internalValue? : VpnipsecPhase1Ipv6ExcludeRange[] | cdktf.IResolvable

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
  public get(index: number): VpnipsecPhase1Ipv6ExcludeRangeOutputReference {
    return new VpnipsecPhase1Ipv6ExcludeRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnipsecPhase1RemoteGwZtnaTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#name VpnipsecPhase1#name}
  */
  readonly name?: string;
}

export function vpnipsecPhase1RemoteGwZtnaTagsToTerraform(struct?: VpnipsecPhase1RemoteGwZtnaTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vpnipsecPhase1RemoteGwZtnaTagsToHclTerraform(struct?: VpnipsecPhase1RemoteGwZtnaTags | cdktf.IResolvable): any {
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

export class VpnipsecPhase1RemoteGwZtnaTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnipsecPhase1RemoteGwZtnaTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpnipsecPhase1RemoteGwZtnaTags | cdktf.IResolvable | undefined) {
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

export class VpnipsecPhase1RemoteGwZtnaTagsList extends cdktf.ComplexList {
  public internalValue? : VpnipsecPhase1RemoteGwZtnaTags[] | cdktf.IResolvable

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
  public get(index: number): VpnipsecPhase1RemoteGwZtnaTagsOutputReference {
    return new VpnipsecPhase1RemoteGwZtnaTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1 fortios_vpnipsec_phase1}
*/
export class VpnipsecPhase1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_vpnipsec_phase1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnipsecPhase1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnipsecPhase1 to import
  * @param importFromId The id of the existing VpnipsecPhase1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnipsecPhase1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_vpnipsec_phase1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_phase1 fortios_vpnipsec_phase1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnipsecPhase1Config
  */
  public constructor(scope: Construct, id: string, config: VpnipsecPhase1Config) {
    super(scope, id, {
      terraformResourceType: 'fortios_vpnipsec_phase1',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acctVerify = config.acctVerify;
    this._addGwRoute = config.addGwRoute;
    this._addRoute = config.addRoute;
    this._addke1 = config.addke1;
    this._addke2 = config.addke2;
    this._addke3 = config.addke3;
    this._addke4 = config.addke4;
    this._addke5 = config.addke5;
    this._addke6 = config.addke6;
    this._addke7 = config.addke7;
    this._assignIp = config.assignIp;
    this._assignIpFrom = config.assignIpFrom;
    this._authmethod = config.authmethod;
    this._authmethodRemote = config.authmethodRemote;
    this._authpasswd = config.authpasswd;
    this._authusr = config.authusr;
    this._authusrgrp = config.authusrgrp;
    this._autoNegotiate = config.autoNegotiate;
    this._autoTransportThreshold = config.autoTransportThreshold;
    this._azureAdAutoconnect = config.azureAdAutoconnect;
    this._banner = config.banner;
    this._certIdValidation = config.certIdValidation;
    this._certPeerUsernameStrip = config.certPeerUsernameStrip;
    this._certPeerUsernameValidation = config.certPeerUsernameValidation;
    this._certTrustStore = config.certTrustStore;
    this._childlessIke = config.childlessIke;
    this._clientAutoNegotiate = config.clientAutoNegotiate;
    this._clientKeepAlive = config.clientKeepAlive;
    this._clientResume = config.clientResume;
    this._clientResumeInterval = config.clientResumeInterval;
    this._comments = config.comments;
    this._devId = config.devId;
    this._devIdNotification = config.devIdNotification;
    this._dhcp6RaLinkaddr = config.dhcp6RaLinkaddr;
    this._dhcpRaGiaddr = config.dhcpRaGiaddr;
    this._dhgrp = config.dhgrp;
    this._digitalSignatureAuth = config.digitalSignatureAuth;
    this._distance = config.distance;
    this._dnsMode = config.dnsMode;
    this._domain = config.domain;
    this._dpd = config.dpd;
    this._dpdRetrycount = config.dpdRetrycount;
    this._dpdRetryinterval = config.dpdRetryinterval;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._eap = config.eap;
    this._eapCertAuth = config.eapCertAuth;
    this._eapExcludePeergrp = config.eapExcludePeergrp;
    this._eapIdentity = config.eapIdentity;
    this._emsSnCheck = config.emsSnCheck;
    this._enforceUniqueId = config.enforceUniqueId;
    this._esn = config.esn;
    this._exchangeFgtDeviceId = config.exchangeFgtDeviceId;
    this._fallbackTcpThreshold = config.fallbackTcpThreshold;
    this._fecBase = config.fecBase;
    this._fecCodec = config.fecCodec;
    this._fecCodecString = config.fecCodecString;
    this._fecEgress = config.fecEgress;
    this._fecHealthCheck = config.fecHealthCheck;
    this._fecIngress = config.fecIngress;
    this._fecMappingProfile = config.fecMappingProfile;
    this._fecReceiveTimeout = config.fecReceiveTimeout;
    this._fecRedundant = config.fecRedundant;
    this._fecSendTimeout = config.fecSendTimeout;
    this._fgspSync = config.fgspSync;
    this._forticlientEnforcement = config.forticlientEnforcement;
    this._fortinetEsp = config.fortinetEsp;
    this._fragmentation = config.fragmentation;
    this._fragmentationMtu = config.fragmentationMtu;
    this._getAllTables = config.fetchAllTables;
    this._groupAuthentication = config.groupAuthentication;
    this._groupAuthenticationSecret = config.groupAuthenticationSecret;
    this._haSyncEspSeqno = config.haSyncEspSeqno;
    this._id = config.id;
    this._idleTimeout = config.idleTimeout;
    this._idleTimeoutinterval = config.idleTimeoutinterval;
    this._ikeVersion = config.ikeVersion;
    this._inboundDscpCopy = config.inboundDscpCopy;
    this._includeLocalLan = config.includeLocalLan;
    this._interface = config.interface;
    this._ipDelayInterval = config.ipDelayInterval;
    this._ipv4DnsServer1 = config.ipv4DnsServer1;
    this._ipv4DnsServer2 = config.ipv4DnsServer2;
    this._ipv4DnsServer3 = config.ipv4DnsServer3;
    this._ipv4EndIp = config.ipv4EndIp;
    this._ipv4Name = config.ipv4Name;
    this._ipv4Netmask = config.ipv4Netmask;
    this._ipv4SplitExclude = config.ipv4SplitExclude;
    this._ipv4SplitInclude = config.ipv4SplitInclude;
    this._ipv4StartIp = config.ipv4StartIp;
    this._ipv4WinsServer1 = config.ipv4WinsServer1;
    this._ipv4WinsServer2 = config.ipv4WinsServer2;
    this._ipv6AutoLinklocal = config.ipv6AutoLinklocal;
    this._ipv6DnsServer1 = config.ipv6DnsServer1;
    this._ipv6DnsServer2 = config.ipv6DnsServer2;
    this._ipv6DnsServer3 = config.ipv6DnsServer3;
    this._ipv6EndIp = config.ipv6EndIp;
    this._ipv6Name = config.ipv6Name;
    this._ipv6Prefix = config.ipv6Prefix;
    this._ipv6SplitExclude = config.ipv6SplitExclude;
    this._ipv6SplitInclude = config.ipv6SplitInclude;
    this._ipv6StartIp = config.ipv6StartIp;
    this._keepalive = config.keepalive;
    this._keylife = config.keylife;
    this._kms = config.kms;
    this._linkCost = config.linkCost;
    this._localGw = config.localGw;
    this._localid = config.localid;
    this._localidType = config.localidType;
    this._loopbackAsymroute = config.loopbackAsymroute;
    this._meshSelectorType = config.meshSelectorType;
    this._mode = config.mode;
    this._modeCfg = config.modeCfg;
    this._modeCfgAllowClientSelector = config.modeCfgAllowClientSelector;
    this._name = config.name;
    this._nattraversal = config.nattraversal;
    this._negotiateTimeout = config.negotiateTimeout;
    this._networkId = config.networkId;
    this._networkOverlay = config.networkOverlay;
    this._npuOffload = config.npuOffload;
    this._peer = config.peer;
    this._peergrp = config.peergrp;
    this._peerid = config.peerid;
    this._peertype = config.peertype;
    this._ppk = config.ppk;
    this._ppkIdentity = config.ppkIdentity;
    this._ppkSecret = config.ppkSecret;
    this._priority = config.priority;
    this._proposal = config.proposal;
    this._psksecret = config.psksecret;
    this._psksecretRemote = config.psksecretRemote;
    this._qkd = config.qkd;
    this._qkdHybrid = config.qkdHybrid;
    this._qkdProfile = config.qkdProfile;
    this._reauth = config.reauth;
    this._rekey = config.rekey;
    this._remoteGw = config.remoteGw;
    this._remoteGw6Country = config.remoteGw6Country;
    this._remoteGw6EndIp = config.remoteGw6EndIp;
    this._remoteGw6Match = config.remoteGw6Match;
    this._remoteGw6StartIp = config.remoteGw6StartIp;
    this._remoteGw6Subnet = config.remoteGw6Subnet;
    this._remoteGwCountry = config.remoteGwCountry;
    this._remoteGwEndIp = config.remoteGwEndIp;
    this._remoteGwMatch = config.remoteGwMatch;
    this._remoteGwStartIp = config.remoteGwStartIp;
    this._remoteGwSubnet = config.remoteGwSubnet;
    this._remotegwDdns = config.remotegwDdns;
    this._rsaSignatureFormat = config.rsaSignatureFormat;
    this._rsaSignatureHashOverride = config.rsaSignatureHashOverride;
    this._savePassword = config.savePassword;
    this._sendCertChain = config.sendCertChain;
    this._sharedIdleTimeout = config.sharedIdleTimeout;
    this._signatureHashAlg = config.signatureHashAlg;
    this._splitIncludeService = config.splitIncludeService;
    this._suiteB = config.suiteB;
    this._transport = config.transport;
    this._type = config.type;
    this._unitySupport = config.unitySupport;
    this._usrgrp = config.usrgrp;
    this._vdomparam = config.vdomparam;
    this._wizardType = config.wizardType;
    this._xauthtype = config.xauthtype;
    this._backupGateway.internalValue = config.backupGateway;
    this._certificate.internalValue = config.certificate;
    this._dnsSuffixSearch.internalValue = config.dnsSuffixSearch;
    this._internalDomainList.internalValue = config.internalDomainList;
    this._ipv4ExcludeRange.internalValue = config.ipv4ExcludeRange;
    this._ipv6ExcludeRange.internalValue = config.ipv6ExcludeRange;
    this._remoteGwZtnaTags.internalValue = config.remoteGwZtnaTags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acct_verify - computed: true, optional: true, required: false
  private _acctVerify?: string; 
  public get acctVerify() {
    return this.getStringAttribute('acct_verify');
  }
  public set acctVerify(value: string) {
    this._acctVerify = value;
  }
  public resetAcctVerify() {
    this._acctVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acctVerifyInput() {
    return this._acctVerify;
  }

  // add_gw_route - computed: true, optional: true, required: false
  private _addGwRoute?: string; 
  public get addGwRoute() {
    return this.getStringAttribute('add_gw_route');
  }
  public set addGwRoute(value: string) {
    this._addGwRoute = value;
  }
  public resetAddGwRoute() {
    this._addGwRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addGwRouteInput() {
    return this._addGwRoute;
  }

  // add_route - computed: true, optional: true, required: false
  private _addRoute?: string; 
  public get addRoute() {
    return this.getStringAttribute('add_route');
  }
  public set addRoute(value: string) {
    this._addRoute = value;
  }
  public resetAddRoute() {
    this._addRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addRouteInput() {
    return this._addRoute;
  }

  // addke1 - computed: false, optional: true, required: false
  private _addke1?: string; 
  public get addke1() {
    return this.getStringAttribute('addke1');
  }
  public set addke1(value: string) {
    this._addke1 = value;
  }
  public resetAddke1() {
    this._addke1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addke1Input() {
    return this._addke1;
  }

  // addke2 - computed: false, optional: true, required: false
  private _addke2?: string; 
  public get addke2() {
    return this.getStringAttribute('addke2');
  }
  public set addke2(value: string) {
    this._addke2 = value;
  }
  public resetAddke2() {
    this._addke2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addke2Input() {
    return this._addke2;
  }

  // addke3 - computed: false, optional: true, required: false
  private _addke3?: string; 
  public get addke3() {
    return this.getStringAttribute('addke3');
  }
  public set addke3(value: string) {
    this._addke3 = value;
  }
  public resetAddke3() {
    this._addke3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addke3Input() {
    return this._addke3;
  }

  // addke4 - computed: false, optional: true, required: false
  private _addke4?: string; 
  public get addke4() {
    return this.getStringAttribute('addke4');
  }
  public set addke4(value: string) {
    this._addke4 = value;
  }
  public resetAddke4() {
    this._addke4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addke4Input() {
    return this._addke4;
  }

  // addke5 - computed: false, optional: true, required: false
  private _addke5?: string; 
  public get addke5() {
    return this.getStringAttribute('addke5');
  }
  public set addke5(value: string) {
    this._addke5 = value;
  }
  public resetAddke5() {
    this._addke5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addke5Input() {
    return this._addke5;
  }

  // addke6 - computed: false, optional: true, required: false
  private _addke6?: string; 
  public get addke6() {
    return this.getStringAttribute('addke6');
  }
  public set addke6(value: string) {
    this._addke6 = value;
  }
  public resetAddke6() {
    this._addke6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addke6Input() {
    return this._addke6;
  }

  // addke7 - computed: false, optional: true, required: false
  private _addke7?: string; 
  public get addke7() {
    return this.getStringAttribute('addke7');
  }
  public set addke7(value: string) {
    this._addke7 = value;
  }
  public resetAddke7() {
    this._addke7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addke7Input() {
    return this._addke7;
  }

  // assign_ip - computed: true, optional: true, required: false
  private _assignIp?: string; 
  public get assignIp() {
    return this.getStringAttribute('assign_ip');
  }
  public set assignIp(value: string) {
    this._assignIp = value;
  }
  public resetAssignIp() {
    this._assignIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignIpInput() {
    return this._assignIp;
  }

  // assign_ip_from - computed: true, optional: true, required: false
  private _assignIpFrom?: string; 
  public get assignIpFrom() {
    return this.getStringAttribute('assign_ip_from');
  }
  public set assignIpFrom(value: string) {
    this._assignIpFrom = value;
  }
  public resetAssignIpFrom() {
    this._assignIpFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignIpFromInput() {
    return this._assignIpFrom;
  }

  // authmethod - computed: true, optional: true, required: false
  private _authmethod?: string; 
  public get authmethod() {
    return this.getStringAttribute('authmethod');
  }
  public set authmethod(value: string) {
    this._authmethod = value;
  }
  public resetAuthmethod() {
    this._authmethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authmethodInput() {
    return this._authmethod;
  }

  // authmethod_remote - computed: false, optional: true, required: false
  private _authmethodRemote?: string; 
  public get authmethodRemote() {
    return this.getStringAttribute('authmethod_remote');
  }
  public set authmethodRemote(value: string) {
    this._authmethodRemote = value;
  }
  public resetAuthmethodRemote() {
    this._authmethodRemote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authmethodRemoteInput() {
    return this._authmethodRemote;
  }

  // authpasswd - computed: false, optional: true, required: false
  private _authpasswd?: string; 
  public get authpasswd() {
    return this.getStringAttribute('authpasswd');
  }
  public set authpasswd(value: string) {
    this._authpasswd = value;
  }
  public resetAuthpasswd() {
    this._authpasswd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authpasswdInput() {
    return this._authpasswd;
  }

  // authusr - computed: false, optional: true, required: false
  private _authusr?: string; 
  public get authusr() {
    return this.getStringAttribute('authusr');
  }
  public set authusr(value: string) {
    this._authusr = value;
  }
  public resetAuthusr() {
    this._authusr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authusrInput() {
    return this._authusr;
  }

  // authusrgrp - computed: false, optional: true, required: false
  private _authusrgrp?: string; 
  public get authusrgrp() {
    return this.getStringAttribute('authusrgrp');
  }
  public set authusrgrp(value: string) {
    this._authusrgrp = value;
  }
  public resetAuthusrgrp() {
    this._authusrgrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authusrgrpInput() {
    return this._authusrgrp;
  }

  // auto_negotiate - computed: true, optional: true, required: false
  private _autoNegotiate?: string; 
  public get autoNegotiate() {
    return this.getStringAttribute('auto_negotiate');
  }
  public set autoNegotiate(value: string) {
    this._autoNegotiate = value;
  }
  public resetAutoNegotiate() {
    this._autoNegotiate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoNegotiateInput() {
    return this._autoNegotiate;
  }

  // auto_transport_threshold - computed: true, optional: true, required: false
  private _autoTransportThreshold?: number; 
  public get autoTransportThreshold() {
    return this.getNumberAttribute('auto_transport_threshold');
  }
  public set autoTransportThreshold(value: number) {
    this._autoTransportThreshold = value;
  }
  public resetAutoTransportThreshold() {
    this._autoTransportThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoTransportThresholdInput() {
    return this._autoTransportThreshold;
  }

  // azure_ad_autoconnect - computed: true, optional: true, required: false
  private _azureAdAutoconnect?: string; 
  public get azureAdAutoconnect() {
    return this.getStringAttribute('azure_ad_autoconnect');
  }
  public set azureAdAutoconnect(value: string) {
    this._azureAdAutoconnect = value;
  }
  public resetAzureAdAutoconnect() {
    this._azureAdAutoconnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAdAutoconnectInput() {
    return this._azureAdAutoconnect;
  }

  // banner - computed: false, optional: true, required: false
  private _banner?: string; 
  public get banner() {
    return this.getStringAttribute('banner');
  }
  public set banner(value: string) {
    this._banner = value;
  }
  public resetBanner() {
    this._banner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bannerInput() {
    return this._banner;
  }

  // cert_id_validation - computed: true, optional: true, required: false
  private _certIdValidation?: string; 
  public get certIdValidation() {
    return this.getStringAttribute('cert_id_validation');
  }
  public set certIdValidation(value: string) {
    this._certIdValidation = value;
  }
  public resetCertIdValidation() {
    this._certIdValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certIdValidationInput() {
    return this._certIdValidation;
  }

  // cert_peer_username_strip - computed: true, optional: true, required: false
  private _certPeerUsernameStrip?: string; 
  public get certPeerUsernameStrip() {
    return this.getStringAttribute('cert_peer_username_strip');
  }
  public set certPeerUsernameStrip(value: string) {
    this._certPeerUsernameStrip = value;
  }
  public resetCertPeerUsernameStrip() {
    this._certPeerUsernameStrip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certPeerUsernameStripInput() {
    return this._certPeerUsernameStrip;
  }

  // cert_peer_username_validation - computed: true, optional: true, required: false
  private _certPeerUsernameValidation?: string; 
  public get certPeerUsernameValidation() {
    return this.getStringAttribute('cert_peer_username_validation');
  }
  public set certPeerUsernameValidation(value: string) {
    this._certPeerUsernameValidation = value;
  }
  public resetCertPeerUsernameValidation() {
    this._certPeerUsernameValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certPeerUsernameValidationInput() {
    return this._certPeerUsernameValidation;
  }

  // cert_trust_store - computed: true, optional: true, required: false
  private _certTrustStore?: string; 
  public get certTrustStore() {
    return this.getStringAttribute('cert_trust_store');
  }
  public set certTrustStore(value: string) {
    this._certTrustStore = value;
  }
  public resetCertTrustStore() {
    this._certTrustStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certTrustStoreInput() {
    return this._certTrustStore;
  }

  // childless_ike - computed: true, optional: true, required: false
  private _childlessIke?: string; 
  public get childlessIke() {
    return this.getStringAttribute('childless_ike');
  }
  public set childlessIke(value: string) {
    this._childlessIke = value;
  }
  public resetChildlessIke() {
    this._childlessIke = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childlessIkeInput() {
    return this._childlessIke;
  }

  // client_auto_negotiate - computed: true, optional: true, required: false
  private _clientAutoNegotiate?: string; 
  public get clientAutoNegotiate() {
    return this.getStringAttribute('client_auto_negotiate');
  }
  public set clientAutoNegotiate(value: string) {
    this._clientAutoNegotiate = value;
  }
  public resetClientAutoNegotiate() {
    this._clientAutoNegotiate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAutoNegotiateInput() {
    return this._clientAutoNegotiate;
  }

  // client_keep_alive - computed: true, optional: true, required: false
  private _clientKeepAlive?: string; 
  public get clientKeepAlive() {
    return this.getStringAttribute('client_keep_alive');
  }
  public set clientKeepAlive(value: string) {
    this._clientKeepAlive = value;
  }
  public resetClientKeepAlive() {
    this._clientKeepAlive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeepAliveInput() {
    return this._clientKeepAlive;
  }

  // client_resume - computed: true, optional: true, required: false
  private _clientResume?: string; 
  public get clientResume() {
    return this.getStringAttribute('client_resume');
  }
  public set clientResume(value: string) {
    this._clientResume = value;
  }
  public resetClientResume() {
    this._clientResume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientResumeInput() {
    return this._clientResume;
  }

  // client_resume_interval - computed: true, optional: true, required: false
  private _clientResumeInterval?: number; 
  public get clientResumeInterval() {
    return this.getNumberAttribute('client_resume_interval');
  }
  public set clientResumeInterval(value: number) {
    this._clientResumeInterval = value;
  }
  public resetClientResumeInterval() {
    this._clientResumeInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientResumeIntervalInput() {
    return this._clientResumeInterval;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // dev_id - computed: false, optional: true, required: false
  private _devId?: string; 
  public get devId() {
    return this.getStringAttribute('dev_id');
  }
  public set devId(value: string) {
    this._devId = value;
  }
  public resetDevId() {
    this._devId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devIdInput() {
    return this._devId;
  }

  // dev_id_notification - computed: true, optional: true, required: false
  private _devIdNotification?: string; 
  public get devIdNotification() {
    return this.getStringAttribute('dev_id_notification');
  }
  public set devIdNotification(value: string) {
    this._devIdNotification = value;
  }
  public resetDevIdNotification() {
    this._devIdNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devIdNotificationInput() {
    return this._devIdNotification;
  }

  // dhcp6_ra_linkaddr - computed: true, optional: true, required: false
  private _dhcp6RaLinkaddr?: string; 
  public get dhcp6RaLinkaddr() {
    return this.getStringAttribute('dhcp6_ra_linkaddr');
  }
  public set dhcp6RaLinkaddr(value: string) {
    this._dhcp6RaLinkaddr = value;
  }
  public resetDhcp6RaLinkaddr() {
    this._dhcp6RaLinkaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6RaLinkaddrInput() {
    return this._dhcp6RaLinkaddr;
  }

  // dhcp_ra_giaddr - computed: true, optional: true, required: false
  private _dhcpRaGiaddr?: string; 
  public get dhcpRaGiaddr() {
    return this.getStringAttribute('dhcp_ra_giaddr');
  }
  public set dhcpRaGiaddr(value: string) {
    this._dhcpRaGiaddr = value;
  }
  public resetDhcpRaGiaddr() {
    this._dhcpRaGiaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRaGiaddrInput() {
    return this._dhcpRaGiaddr;
  }

  // dhgrp - computed: true, optional: true, required: false
  private _dhgrp?: string; 
  public get dhgrp() {
    return this.getStringAttribute('dhgrp');
  }
  public set dhgrp(value: string) {
    this._dhgrp = value;
  }
  public resetDhgrp() {
    this._dhgrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhgrpInput() {
    return this._dhgrp;
  }

  // digital_signature_auth - computed: true, optional: true, required: false
  private _digitalSignatureAuth?: string; 
  public get digitalSignatureAuth() {
    return this.getStringAttribute('digital_signature_auth');
  }
  public set digitalSignatureAuth(value: string) {
    this._digitalSignatureAuth = value;
  }
  public resetDigitalSignatureAuth() {
    this._digitalSignatureAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitalSignatureAuthInput() {
    return this._digitalSignatureAuth;
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

  // dns_mode - computed: true, optional: true, required: false
  private _dnsMode?: string; 
  public get dnsMode() {
    return this.getStringAttribute('dns_mode');
  }
  public set dnsMode(value: string) {
    this._dnsMode = value;
  }
  public resetDnsMode() {
    this._dnsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsModeInput() {
    return this._dnsMode;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // dpd - computed: true, optional: true, required: false
  private _dpd?: string; 
  public get dpd() {
    return this.getStringAttribute('dpd');
  }
  public set dpd(value: string) {
    this._dpd = value;
  }
  public resetDpd() {
    this._dpd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpdInput() {
    return this._dpd;
  }

  // dpd_retrycount - computed: true, optional: true, required: false
  private _dpdRetrycount?: number; 
  public get dpdRetrycount() {
    return this.getNumberAttribute('dpd_retrycount');
  }
  public set dpdRetrycount(value: number) {
    this._dpdRetrycount = value;
  }
  public resetDpdRetrycount() {
    this._dpdRetrycount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpdRetrycountInput() {
    return this._dpdRetrycount;
  }

  // dpd_retryinterval - computed: true, optional: true, required: false
  private _dpdRetryinterval?: string; 
  public get dpdRetryinterval() {
    return this.getStringAttribute('dpd_retryinterval');
  }
  public set dpdRetryinterval(value: string) {
    this._dpdRetryinterval = value;
  }
  public resetDpdRetryinterval() {
    this._dpdRetryinterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpdRetryintervalInput() {
    return this._dpdRetryinterval;
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

  // eap - computed: true, optional: true, required: false
  private _eap?: string; 
  public get eap() {
    return this.getStringAttribute('eap');
  }
  public set eap(value: string) {
    this._eap = value;
  }
  public resetEap() {
    this._eap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapInput() {
    return this._eap;
  }

  // eap_cert_auth - computed: true, optional: true, required: false
  private _eapCertAuth?: string; 
  public get eapCertAuth() {
    return this.getStringAttribute('eap_cert_auth');
  }
  public set eapCertAuth(value: string) {
    this._eapCertAuth = value;
  }
  public resetEapCertAuth() {
    this._eapCertAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapCertAuthInput() {
    return this._eapCertAuth;
  }

  // eap_exclude_peergrp - computed: false, optional: true, required: false
  private _eapExcludePeergrp?: string; 
  public get eapExcludePeergrp() {
    return this.getStringAttribute('eap_exclude_peergrp');
  }
  public set eapExcludePeergrp(value: string) {
    this._eapExcludePeergrp = value;
  }
  public resetEapExcludePeergrp() {
    this._eapExcludePeergrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapExcludePeergrpInput() {
    return this._eapExcludePeergrp;
  }

  // eap_identity - computed: true, optional: true, required: false
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

  // ems_sn_check - computed: true, optional: true, required: false
  private _emsSnCheck?: string; 
  public get emsSnCheck() {
    return this.getStringAttribute('ems_sn_check');
  }
  public set emsSnCheck(value: string) {
    this._emsSnCheck = value;
  }
  public resetEmsSnCheck() {
    this._emsSnCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emsSnCheckInput() {
    return this._emsSnCheck;
  }

  // enforce_unique_id - computed: true, optional: true, required: false
  private _enforceUniqueId?: string; 
  public get enforceUniqueId() {
    return this.getStringAttribute('enforce_unique_id');
  }
  public set enforceUniqueId(value: string) {
    this._enforceUniqueId = value;
  }
  public resetEnforceUniqueId() {
    this._enforceUniqueId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceUniqueIdInput() {
    return this._enforceUniqueId;
  }

  // esn - computed: true, optional: true, required: false
  private _esn?: string; 
  public get esn() {
    return this.getStringAttribute('esn');
  }
  public set esn(value: string) {
    this._esn = value;
  }
  public resetEsn() {
    this._esn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esnInput() {
    return this._esn;
  }

  // exchange_fgt_device_id - computed: true, optional: true, required: false
  private _exchangeFgtDeviceId?: string; 
  public get exchangeFgtDeviceId() {
    return this.getStringAttribute('exchange_fgt_device_id');
  }
  public set exchangeFgtDeviceId(value: string) {
    this._exchangeFgtDeviceId = value;
  }
  public resetExchangeFgtDeviceId() {
    this._exchangeFgtDeviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exchangeFgtDeviceIdInput() {
    return this._exchangeFgtDeviceId;
  }

  // fallback_tcp_threshold - computed: true, optional: true, required: false
  private _fallbackTcpThreshold?: number; 
  public get fallbackTcpThreshold() {
    return this.getNumberAttribute('fallback_tcp_threshold');
  }
  public set fallbackTcpThreshold(value: number) {
    this._fallbackTcpThreshold = value;
  }
  public resetFallbackTcpThreshold() {
    this._fallbackTcpThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackTcpThresholdInput() {
    return this._fallbackTcpThreshold;
  }

  // fec_base - computed: true, optional: true, required: false
  private _fecBase?: number; 
  public get fecBase() {
    return this.getNumberAttribute('fec_base');
  }
  public set fecBase(value: number) {
    this._fecBase = value;
  }
  public resetFecBase() {
    this._fecBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fecBaseInput() {
    return this._fecBase;
  }

  // fec_codec - computed: true, optional: true, required: false
  private _fecCodec?: number; 
  public get fecCodec() {
    return this.getNumberAttribute('fec_codec');
  }
  public set fecCodec(value: number) {
    this._fecCodec = value;
  }
  public resetFecCodec() {
    this._fecCodec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fecCodecInput() {
    return this._fecCodec;
  }

  // fec_codec_string - computed: true, optional: true, required: false
  private _fecCodecString?: string; 
  public get fecCodecString() {
    return this.getStringAttribute('fec_codec_string');
  }
  public set fecCodecString(value: string) {
    this._fecCodecString = value;
  }
  public resetFecCodecString() {
    this._fecCodecString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fecCodecStringInput() {
    return this._fecCodecString;
  }

  // fec_egress - computed: true, optional: true, required: false
  private _fecEgress?: string; 
  public get fecEgress() {
    return this.getStringAttribute('fec_egress');
  }
  public set fecEgress(value: string) {
    this._fecEgress = value;
  }
  public resetFecEgress() {
    this._fecEgress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fecEgressInput() {
    return this._fecEgress;
  }

  // fec_health_check - computed: false, optional: true, required: false
  private _fecHealthCheck?: string; 
  public get fecHealthCheck() {
    return this.getStringAttribute('fec_health_check');
  }
  public set fecHealthCheck(value: string) {
    this._fecHealthCheck = value;
  }
  public resetFecHealthCheck() {
    this._fecHealthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fecHealthCheckInput() {
    return this._fecHealthCheck;
  }

  // fec_ingress - computed: true, optional: true, required: false
  private _fecIngress?: string; 
  public get fecIngress() {
    return this.getStringAttribute('fec_ingress');
  }
  public set fecIngress(value: string) {
    this._fecIngress = value;
  }
  public resetFecIngress() {
    this._fecIngress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fecIngressInput() {
    return this._fecIngress;
  }

  // fec_mapping_profile - computed: false, optional: true, required: false
  private _fecMappingProfile?: string; 
  public get fecMappingProfile() {
    return this.getStringAttribute('fec_mapping_profile');
  }
  public set fecMappingProfile(value: string) {
    this._fecMappingProfile = value;
  }
  public resetFecMappingProfile() {
    this._fecMappingProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fecMappingProfileInput() {
    return this._fecMappingProfile;
  }

  // fec_receive_timeout - computed: true, optional: true, required: false
  private _fecReceiveTimeout?: number; 
  public get fecReceiveTimeout() {
    return this.getNumberAttribute('fec_receive_timeout');
  }
  public set fecReceiveTimeout(value: number) {
    this._fecReceiveTimeout = value;
  }
  public resetFecReceiveTimeout() {
    this._fecReceiveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fecReceiveTimeoutInput() {
    return this._fecReceiveTimeout;
  }

  // fec_redundant - computed: true, optional: true, required: false
  private _fecRedundant?: number; 
  public get fecRedundant() {
    return this.getNumberAttribute('fec_redundant');
  }
  public set fecRedundant(value: number) {
    this._fecRedundant = value;
  }
  public resetFecRedundant() {
    this._fecRedundant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fecRedundantInput() {
    return this._fecRedundant;
  }

  // fec_send_timeout - computed: true, optional: true, required: false
  private _fecSendTimeout?: number; 
  public get fecSendTimeout() {
    return this.getNumberAttribute('fec_send_timeout');
  }
  public set fecSendTimeout(value: number) {
    this._fecSendTimeout = value;
  }
  public resetFecSendTimeout() {
    this._fecSendTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fecSendTimeoutInput() {
    return this._fecSendTimeout;
  }

  // fgsp_sync - computed: true, optional: true, required: false
  private _fgspSync?: string; 
  public get fgspSync() {
    return this.getStringAttribute('fgsp_sync');
  }
  public set fgspSync(value: string) {
    this._fgspSync = value;
  }
  public resetFgspSync() {
    this._fgspSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgspSyncInput() {
    return this._fgspSync;
  }

  // forticlient_enforcement - computed: true, optional: true, required: false
  private _forticlientEnforcement?: string; 
  public get forticlientEnforcement() {
    return this.getStringAttribute('forticlient_enforcement');
  }
  public set forticlientEnforcement(value: string) {
    this._forticlientEnforcement = value;
  }
  public resetForticlientEnforcement() {
    this._forticlientEnforcement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientEnforcementInput() {
    return this._forticlientEnforcement;
  }

  // fortinet_esp - computed: true, optional: true, required: false
  private _fortinetEsp?: string; 
  public get fortinetEsp() {
    return this.getStringAttribute('fortinet_esp');
  }
  public set fortinetEsp(value: string) {
    this._fortinetEsp = value;
  }
  public resetFortinetEsp() {
    this._fortinetEsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortinetEspInput() {
    return this._fortinetEsp;
  }

  // fragmentation - computed: true, optional: true, required: false
  private _fragmentation?: string; 
  public get fragmentation() {
    return this.getStringAttribute('fragmentation');
  }
  public set fragmentation(value: string) {
    this._fragmentation = value;
  }
  public resetFragmentation() {
    this._fragmentation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentationInput() {
    return this._fragmentation;
  }

  // fragmentation_mtu - computed: true, optional: true, required: false
  private _fragmentationMtu?: number; 
  public get fragmentationMtu() {
    return this.getNumberAttribute('fragmentation_mtu');
  }
  public set fragmentationMtu(value: number) {
    this._fragmentationMtu = value;
  }
  public resetFragmentationMtu() {
    this._fragmentationMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentationMtuInput() {
    return this._fragmentationMtu;
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

  // group_authentication - computed: true, optional: true, required: false
  private _groupAuthentication?: string; 
  public get groupAuthentication() {
    return this.getStringAttribute('group_authentication');
  }
  public set groupAuthentication(value: string) {
    this._groupAuthentication = value;
  }
  public resetGroupAuthentication() {
    this._groupAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAuthenticationInput() {
    return this._groupAuthentication;
  }

  // group_authentication_secret - computed: false, optional: true, required: false
  private _groupAuthenticationSecret?: string; 
  public get groupAuthenticationSecret() {
    return this.getStringAttribute('group_authentication_secret');
  }
  public set groupAuthenticationSecret(value: string) {
    this._groupAuthenticationSecret = value;
  }
  public resetGroupAuthenticationSecret() {
    this._groupAuthenticationSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAuthenticationSecretInput() {
    return this._groupAuthenticationSecret;
  }

  // ha_sync_esp_seqno - computed: true, optional: true, required: false
  private _haSyncEspSeqno?: string; 
  public get haSyncEspSeqno() {
    return this.getStringAttribute('ha_sync_esp_seqno');
  }
  public set haSyncEspSeqno(value: string) {
    this._haSyncEspSeqno = value;
  }
  public resetHaSyncEspSeqno() {
    this._haSyncEspSeqno = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haSyncEspSeqnoInput() {
    return this._haSyncEspSeqno;
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

  // idle_timeout - computed: true, optional: true, required: false
  private _idleTimeout?: string; 
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }
  public set idleTimeout(value: string) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // idle_timeoutinterval - computed: true, optional: true, required: false
  private _idleTimeoutinterval?: number; 
  public get idleTimeoutinterval() {
    return this.getNumberAttribute('idle_timeoutinterval');
  }
  public set idleTimeoutinterval(value: number) {
    this._idleTimeoutinterval = value;
  }
  public resetIdleTimeoutinterval() {
    this._idleTimeoutinterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutintervalInput() {
    return this._idleTimeoutinterval;
  }

  // ike_version - computed: true, optional: true, required: false
  private _ikeVersion?: string; 
  public get ikeVersion() {
    return this.getStringAttribute('ike_version');
  }
  public set ikeVersion(value: string) {
    this._ikeVersion = value;
  }
  public resetIkeVersion() {
    this._ikeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeVersionInput() {
    return this._ikeVersion;
  }

  // inbound_dscp_copy - computed: true, optional: true, required: false
  private _inboundDscpCopy?: string; 
  public get inboundDscpCopy() {
    return this.getStringAttribute('inbound_dscp_copy');
  }
  public set inboundDscpCopy(value: string) {
    this._inboundDscpCopy = value;
  }
  public resetInboundDscpCopy() {
    this._inboundDscpCopy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundDscpCopyInput() {
    return this._inboundDscpCopy;
  }

  // include_local_lan - computed: true, optional: true, required: false
  private _includeLocalLan?: string; 
  public get includeLocalLan() {
    return this.getStringAttribute('include_local_lan');
  }
  public set includeLocalLan(value: string) {
    this._includeLocalLan = value;
  }
  public resetIncludeLocalLan() {
    this._includeLocalLan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeLocalLanInput() {
    return this._includeLocalLan;
  }

  // interface - computed: false, optional: false, required: true
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // ip_delay_interval - computed: false, optional: true, required: false
  private _ipDelayInterval?: number; 
  public get ipDelayInterval() {
    return this.getNumberAttribute('ip_delay_interval');
  }
  public set ipDelayInterval(value: number) {
    this._ipDelayInterval = value;
  }
  public resetIpDelayInterval() {
    this._ipDelayInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDelayIntervalInput() {
    return this._ipDelayInterval;
  }

  // ipv4_dns_server1 - computed: true, optional: true, required: false
  private _ipv4DnsServer1?: string; 
  public get ipv4DnsServer1() {
    return this.getStringAttribute('ipv4_dns_server1');
  }
  public set ipv4DnsServer1(value: string) {
    this._ipv4DnsServer1 = value;
  }
  public resetIpv4DnsServer1() {
    this._ipv4DnsServer1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DnsServer1Input() {
    return this._ipv4DnsServer1;
  }

  // ipv4_dns_server2 - computed: true, optional: true, required: false
  private _ipv4DnsServer2?: string; 
  public get ipv4DnsServer2() {
    return this.getStringAttribute('ipv4_dns_server2');
  }
  public set ipv4DnsServer2(value: string) {
    this._ipv4DnsServer2 = value;
  }
  public resetIpv4DnsServer2() {
    this._ipv4DnsServer2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DnsServer2Input() {
    return this._ipv4DnsServer2;
  }

  // ipv4_dns_server3 - computed: true, optional: true, required: false
  private _ipv4DnsServer3?: string; 
  public get ipv4DnsServer3() {
    return this.getStringAttribute('ipv4_dns_server3');
  }
  public set ipv4DnsServer3(value: string) {
    this._ipv4DnsServer3 = value;
  }
  public resetIpv4DnsServer3() {
    this._ipv4DnsServer3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DnsServer3Input() {
    return this._ipv4DnsServer3;
  }

  // ipv4_end_ip - computed: true, optional: true, required: false
  private _ipv4EndIp?: string; 
  public get ipv4EndIp() {
    return this.getStringAttribute('ipv4_end_ip');
  }
  public set ipv4EndIp(value: string) {
    this._ipv4EndIp = value;
  }
  public resetIpv4EndIp() {
    this._ipv4EndIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4EndIpInput() {
    return this._ipv4EndIp;
  }

  // ipv4_name - computed: false, optional: true, required: false
  private _ipv4Name?: string; 
  public get ipv4Name() {
    return this.getStringAttribute('ipv4_name');
  }
  public set ipv4Name(value: string) {
    this._ipv4Name = value;
  }
  public resetIpv4Name() {
    this._ipv4Name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NameInput() {
    return this._ipv4Name;
  }

  // ipv4_netmask - computed: true, optional: true, required: false
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

  // ipv4_split_exclude - computed: false, optional: true, required: false
  private _ipv4SplitExclude?: string; 
  public get ipv4SplitExclude() {
    return this.getStringAttribute('ipv4_split_exclude');
  }
  public set ipv4SplitExclude(value: string) {
    this._ipv4SplitExclude = value;
  }
  public resetIpv4SplitExclude() {
    this._ipv4SplitExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4SplitExcludeInput() {
    return this._ipv4SplitExclude;
  }

  // ipv4_split_include - computed: false, optional: true, required: false
  private _ipv4SplitInclude?: string; 
  public get ipv4SplitInclude() {
    return this.getStringAttribute('ipv4_split_include');
  }
  public set ipv4SplitInclude(value: string) {
    this._ipv4SplitInclude = value;
  }
  public resetIpv4SplitInclude() {
    this._ipv4SplitInclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4SplitIncludeInput() {
    return this._ipv4SplitInclude;
  }

  // ipv4_start_ip - computed: true, optional: true, required: false
  private _ipv4StartIp?: string; 
  public get ipv4StartIp() {
    return this.getStringAttribute('ipv4_start_ip');
  }
  public set ipv4StartIp(value: string) {
    this._ipv4StartIp = value;
  }
  public resetIpv4StartIp() {
    this._ipv4StartIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4StartIpInput() {
    return this._ipv4StartIp;
  }

  // ipv4_wins_server1 - computed: true, optional: true, required: false
  private _ipv4WinsServer1?: string; 
  public get ipv4WinsServer1() {
    return this.getStringAttribute('ipv4_wins_server1');
  }
  public set ipv4WinsServer1(value: string) {
    this._ipv4WinsServer1 = value;
  }
  public resetIpv4WinsServer1() {
    this._ipv4WinsServer1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4WinsServer1Input() {
    return this._ipv4WinsServer1;
  }

  // ipv4_wins_server2 - computed: true, optional: true, required: false
  private _ipv4WinsServer2?: string; 
  public get ipv4WinsServer2() {
    return this.getStringAttribute('ipv4_wins_server2');
  }
  public set ipv4WinsServer2(value: string) {
    this._ipv4WinsServer2 = value;
  }
  public resetIpv4WinsServer2() {
    this._ipv4WinsServer2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4WinsServer2Input() {
    return this._ipv4WinsServer2;
  }

  // ipv6_auto_linklocal - computed: true, optional: true, required: false
  private _ipv6AutoLinklocal?: string; 
  public get ipv6AutoLinklocal() {
    return this.getStringAttribute('ipv6_auto_linklocal');
  }
  public set ipv6AutoLinklocal(value: string) {
    this._ipv6AutoLinklocal = value;
  }
  public resetIpv6AutoLinklocal() {
    this._ipv6AutoLinklocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AutoLinklocalInput() {
    return this._ipv6AutoLinklocal;
  }

  // ipv6_dns_server1 - computed: true, optional: true, required: false
  private _ipv6DnsServer1?: string; 
  public get ipv6DnsServer1() {
    return this.getStringAttribute('ipv6_dns_server1');
  }
  public set ipv6DnsServer1(value: string) {
    this._ipv6DnsServer1 = value;
  }
  public resetIpv6DnsServer1() {
    this._ipv6DnsServer1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DnsServer1Input() {
    return this._ipv6DnsServer1;
  }

  // ipv6_dns_server2 - computed: true, optional: true, required: false
  private _ipv6DnsServer2?: string; 
  public get ipv6DnsServer2() {
    return this.getStringAttribute('ipv6_dns_server2');
  }
  public set ipv6DnsServer2(value: string) {
    this._ipv6DnsServer2 = value;
  }
  public resetIpv6DnsServer2() {
    this._ipv6DnsServer2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DnsServer2Input() {
    return this._ipv6DnsServer2;
  }

  // ipv6_dns_server3 - computed: true, optional: true, required: false
  private _ipv6DnsServer3?: string; 
  public get ipv6DnsServer3() {
    return this.getStringAttribute('ipv6_dns_server3');
  }
  public set ipv6DnsServer3(value: string) {
    this._ipv6DnsServer3 = value;
  }
  public resetIpv6DnsServer3() {
    this._ipv6DnsServer3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DnsServer3Input() {
    return this._ipv6DnsServer3;
  }

  // ipv6_end_ip - computed: true, optional: true, required: false
  private _ipv6EndIp?: string; 
  public get ipv6EndIp() {
    return this.getStringAttribute('ipv6_end_ip');
  }
  public set ipv6EndIp(value: string) {
    this._ipv6EndIp = value;
  }
  public resetIpv6EndIp() {
    this._ipv6EndIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EndIpInput() {
    return this._ipv6EndIp;
  }

  // ipv6_name - computed: false, optional: true, required: false
  private _ipv6Name?: string; 
  public get ipv6Name() {
    return this.getStringAttribute('ipv6_name');
  }
  public set ipv6Name(value: string) {
    this._ipv6Name = value;
  }
  public resetIpv6Name() {
    this._ipv6Name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NameInput() {
    return this._ipv6Name;
  }

  // ipv6_prefix - computed: true, optional: true, required: false
  private _ipv6Prefix?: number; 
  public get ipv6Prefix() {
    return this.getNumberAttribute('ipv6_prefix');
  }
  public set ipv6Prefix(value: number) {
    this._ipv6Prefix = value;
  }
  public resetIpv6Prefix() {
    this._ipv6Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixInput() {
    return this._ipv6Prefix;
  }

  // ipv6_split_exclude - computed: false, optional: true, required: false
  private _ipv6SplitExclude?: string; 
  public get ipv6SplitExclude() {
    return this.getStringAttribute('ipv6_split_exclude');
  }
  public set ipv6SplitExclude(value: string) {
    this._ipv6SplitExclude = value;
  }
  public resetIpv6SplitExclude() {
    this._ipv6SplitExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SplitExcludeInput() {
    return this._ipv6SplitExclude;
  }

  // ipv6_split_include - computed: false, optional: true, required: false
  private _ipv6SplitInclude?: string; 
  public get ipv6SplitInclude() {
    return this.getStringAttribute('ipv6_split_include');
  }
  public set ipv6SplitInclude(value: string) {
    this._ipv6SplitInclude = value;
  }
  public resetIpv6SplitInclude() {
    this._ipv6SplitInclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SplitIncludeInput() {
    return this._ipv6SplitInclude;
  }

  // ipv6_start_ip - computed: true, optional: true, required: false
  private _ipv6StartIp?: string; 
  public get ipv6StartIp() {
    return this.getStringAttribute('ipv6_start_ip');
  }
  public set ipv6StartIp(value: string) {
    this._ipv6StartIp = value;
  }
  public resetIpv6StartIp() {
    this._ipv6StartIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6StartIpInput() {
    return this._ipv6StartIp;
  }

  // keepalive - computed: true, optional: true, required: false
  private _keepalive?: number; 
  public get keepalive() {
    return this.getNumberAttribute('keepalive');
  }
  public set keepalive(value: number) {
    this._keepalive = value;
  }
  public resetKeepalive() {
    this._keepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveInput() {
    return this._keepalive;
  }

  // keylife - computed: true, optional: true, required: false
  private _keylife?: number; 
  public get keylife() {
    return this.getNumberAttribute('keylife');
  }
  public set keylife(value: number) {
    this._keylife = value;
  }
  public resetKeylife() {
    this._keylife = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keylifeInput() {
    return this._keylife;
  }

  // kms - computed: false, optional: true, required: false
  private _kms?: string; 
  public get kms() {
    return this.getStringAttribute('kms');
  }
  public set kms(value: string) {
    this._kms = value;
  }
  public resetKms() {
    this._kms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsInput() {
    return this._kms;
  }

  // link_cost - computed: false, optional: true, required: false
  private _linkCost?: number; 
  public get linkCost() {
    return this.getNumberAttribute('link_cost');
  }
  public set linkCost(value: number) {
    this._linkCost = value;
  }
  public resetLinkCost() {
    this._linkCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkCostInput() {
    return this._linkCost;
  }

  // local_gw - computed: true, optional: true, required: false
  private _localGw?: string; 
  public get localGw() {
    return this.getStringAttribute('local_gw');
  }
  public set localGw(value: string) {
    this._localGw = value;
  }
  public resetLocalGw() {
    this._localGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localGwInput() {
    return this._localGw;
  }

  // localid - computed: false, optional: true, required: false
  private _localid?: string; 
  public get localid() {
    return this.getStringAttribute('localid');
  }
  public set localid(value: string) {
    this._localid = value;
  }
  public resetLocalid() {
    this._localid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localidInput() {
    return this._localid;
  }

  // localid_type - computed: true, optional: true, required: false
  private _localidType?: string; 
  public get localidType() {
    return this.getStringAttribute('localid_type');
  }
  public set localidType(value: string) {
    this._localidType = value;
  }
  public resetLocalidType() {
    this._localidType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localidTypeInput() {
    return this._localidType;
  }

  // loopback_asymroute - computed: true, optional: true, required: false
  private _loopbackAsymroute?: string; 
  public get loopbackAsymroute() {
    return this.getStringAttribute('loopback_asymroute');
  }
  public set loopbackAsymroute(value: string) {
    this._loopbackAsymroute = value;
  }
  public resetLoopbackAsymroute() {
    this._loopbackAsymroute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackAsymrouteInput() {
    return this._loopbackAsymroute;
  }

  // mesh_selector_type - computed: true, optional: true, required: false
  private _meshSelectorType?: string; 
  public get meshSelectorType() {
    return this.getStringAttribute('mesh_selector_type');
  }
  public set meshSelectorType(value: string) {
    this._meshSelectorType = value;
  }
  public resetMeshSelectorType() {
    this._meshSelectorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshSelectorTypeInput() {
    return this._meshSelectorType;
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

  // mode_cfg - computed: true, optional: true, required: false
  private _modeCfg?: string; 
  public get modeCfg() {
    return this.getStringAttribute('mode_cfg');
  }
  public set modeCfg(value: string) {
    this._modeCfg = value;
  }
  public resetModeCfg() {
    this._modeCfg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeCfgInput() {
    return this._modeCfg;
  }

  // mode_cfg_allow_client_selector - computed: true, optional: true, required: false
  private _modeCfgAllowClientSelector?: string; 
  public get modeCfgAllowClientSelector() {
    return this.getStringAttribute('mode_cfg_allow_client_selector');
  }
  public set modeCfgAllowClientSelector(value: string) {
    this._modeCfgAllowClientSelector = value;
  }
  public resetModeCfgAllowClientSelector() {
    this._modeCfgAllowClientSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeCfgAllowClientSelectorInput() {
    return this._modeCfgAllowClientSelector;
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

  // nattraversal - computed: true, optional: true, required: false
  private _nattraversal?: string; 
  public get nattraversal() {
    return this.getStringAttribute('nattraversal');
  }
  public set nattraversal(value: string) {
    this._nattraversal = value;
  }
  public resetNattraversal() {
    this._nattraversal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nattraversalInput() {
    return this._nattraversal;
  }

  // negotiate_timeout - computed: true, optional: true, required: false
  private _negotiateTimeout?: number; 
  public get negotiateTimeout() {
    return this.getNumberAttribute('negotiate_timeout');
  }
  public set negotiateTimeout(value: number) {
    this._negotiateTimeout = value;
  }
  public resetNegotiateTimeout() {
    this._negotiateTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negotiateTimeoutInput() {
    return this._negotiateTimeout;
  }

  // network_id - computed: false, optional: true, required: false
  private _networkId?: number; 
  public get networkId() {
    return this.getNumberAttribute('network_id');
  }
  public set networkId(value: number) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // network_overlay - computed: true, optional: true, required: false
  private _networkOverlay?: string; 
  public get networkOverlay() {
    return this.getStringAttribute('network_overlay');
  }
  public set networkOverlay(value: string) {
    this._networkOverlay = value;
  }
  public resetNetworkOverlay() {
    this._networkOverlay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkOverlayInput() {
    return this._networkOverlay;
  }

  // npu_offload - computed: true, optional: true, required: false
  private _npuOffload?: string; 
  public get npuOffload() {
    return this.getStringAttribute('npu_offload');
  }
  public set npuOffload(value: string) {
    this._npuOffload = value;
  }
  public resetNpuOffload() {
    this._npuOffload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get npuOffloadInput() {
    return this._npuOffload;
  }

  // peer - computed: false, optional: true, required: false
  private _peer?: string; 
  public get peer() {
    return this.getStringAttribute('peer');
  }
  public set peer(value: string) {
    this._peer = value;
  }
  public resetPeer() {
    this._peer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerInput() {
    return this._peer;
  }

  // peergrp - computed: false, optional: true, required: false
  private _peergrp?: string; 
  public get peergrp() {
    return this.getStringAttribute('peergrp');
  }
  public set peergrp(value: string) {
    this._peergrp = value;
  }
  public resetPeergrp() {
    this._peergrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peergrpInput() {
    return this._peergrp;
  }

  // peerid - computed: false, optional: true, required: false
  private _peerid?: string; 
  public get peerid() {
    return this.getStringAttribute('peerid');
  }
  public set peerid(value: string) {
    this._peerid = value;
  }
  public resetPeerid() {
    this._peerid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peeridInput() {
    return this._peerid;
  }

  // peertype - computed: true, optional: true, required: false
  private _peertype?: string; 
  public get peertype() {
    return this.getStringAttribute('peertype');
  }
  public set peertype(value: string) {
    this._peertype = value;
  }
  public resetPeertype() {
    this._peertype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peertypeInput() {
    return this._peertype;
  }

  // ppk - computed: true, optional: true, required: false
  private _ppk?: string; 
  public get ppk() {
    return this.getStringAttribute('ppk');
  }
  public set ppk(value: string) {
    this._ppk = value;
  }
  public resetPpk() {
    this._ppk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ppkInput() {
    return this._ppk;
  }

  // ppk_identity - computed: false, optional: true, required: false
  private _ppkIdentity?: string; 
  public get ppkIdentity() {
    return this.getStringAttribute('ppk_identity');
  }
  public set ppkIdentity(value: string) {
    this._ppkIdentity = value;
  }
  public resetPpkIdentity() {
    this._ppkIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ppkIdentityInput() {
    return this._ppkIdentity;
  }

  // ppk_secret - computed: false, optional: true, required: false
  private _ppkSecret?: string; 
  public get ppkSecret() {
    return this.getStringAttribute('ppk_secret');
  }
  public set ppkSecret(value: string) {
    this._ppkSecret = value;
  }
  public resetPpkSecret() {
    this._ppkSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ppkSecretInput() {
    return this._ppkSecret;
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

  // proposal - computed: false, optional: false, required: true
  private _proposal?: string; 
  public get proposal() {
    return this.getStringAttribute('proposal');
  }
  public set proposal(value: string) {
    this._proposal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proposalInput() {
    return this._proposal;
  }

  // psksecret - computed: false, optional: false, required: true
  private _psksecret?: string; 
  public get psksecret() {
    return this.getStringAttribute('psksecret');
  }
  public set psksecret(value: string) {
    this._psksecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get psksecretInput() {
    return this._psksecret;
  }

  // psksecret_remote - computed: false, optional: true, required: false
  private _psksecretRemote?: string; 
  public get psksecretRemote() {
    return this.getStringAttribute('psksecret_remote');
  }
  public set psksecretRemote(value: string) {
    this._psksecretRemote = value;
  }
  public resetPsksecretRemote() {
    this._psksecretRemote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get psksecretRemoteInput() {
    return this._psksecretRemote;
  }

  // qkd - computed: true, optional: true, required: false
  private _qkd?: string; 
  public get qkd() {
    return this.getStringAttribute('qkd');
  }
  public set qkd(value: string) {
    this._qkd = value;
  }
  public resetQkd() {
    this._qkd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qkdInput() {
    return this._qkd;
  }

  // qkd_hybrid - computed: true, optional: true, required: false
  private _qkdHybrid?: string; 
  public get qkdHybrid() {
    return this.getStringAttribute('qkd_hybrid');
  }
  public set qkdHybrid(value: string) {
    this._qkdHybrid = value;
  }
  public resetQkdHybrid() {
    this._qkdHybrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qkdHybridInput() {
    return this._qkdHybrid;
  }

  // qkd_profile - computed: false, optional: true, required: false
  private _qkdProfile?: string; 
  public get qkdProfile() {
    return this.getStringAttribute('qkd_profile');
  }
  public set qkdProfile(value: string) {
    this._qkdProfile = value;
  }
  public resetQkdProfile() {
    this._qkdProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qkdProfileInput() {
    return this._qkdProfile;
  }

  // reauth - computed: true, optional: true, required: false
  private _reauth?: string; 
  public get reauth() {
    return this.getStringAttribute('reauth');
  }
  public set reauth(value: string) {
    this._reauth = value;
  }
  public resetReauth() {
    this._reauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reauthInput() {
    return this._reauth;
  }

  // rekey - computed: true, optional: true, required: false
  private _rekey?: string; 
  public get rekey() {
    return this.getStringAttribute('rekey');
  }
  public set rekey(value: string) {
    this._rekey = value;
  }
  public resetRekey() {
    this._rekey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rekeyInput() {
    return this._rekey;
  }

  // remote_gw - computed: true, optional: true, required: false
  private _remoteGw?: string; 
  public get remoteGw() {
    return this.getStringAttribute('remote_gw');
  }
  public set remoteGw(value: string) {
    this._remoteGw = value;
  }
  public resetRemoteGw() {
    this._remoteGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteGwInput() {
    return this._remoteGw;
  }

  // remote_gw6_country - computed: false, optional: true, required: false
  private _remoteGw6Country?: string; 
  public get remoteGw6Country() {
    return this.getStringAttribute('remote_gw6_country');
  }
  public set remoteGw6Country(value: string) {
    this._remoteGw6Country = value;
  }
  public resetRemoteGw6Country() {
    this._remoteGw6Country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteGw6CountryInput() {
    return this._remoteGw6Country;
  }

  // remote_gw6_end_ip - computed: true, optional: true, required: false
  private _remoteGw6EndIp?: string; 
  public get remoteGw6EndIp() {
    return this.getStringAttribute('remote_gw6_end_ip');
  }
  public set remoteGw6EndIp(value: string) {
    this._remoteGw6EndIp = value;
  }
  public resetRemoteGw6EndIp() {
    this._remoteGw6EndIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteGw6EndIpInput() {
    return this._remoteGw6EndIp;
  }

  // remote_gw6_match - computed: true, optional: true, required: false
  private _remoteGw6Match?: string; 
  public get remoteGw6Match() {
    return this.getStringAttribute('remote_gw6_match');
  }
  public set remoteGw6Match(value: string) {
    this._remoteGw6Match = value;
  }
  public resetRemoteGw6Match() {
    this._remoteGw6Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteGw6MatchInput() {
    return this._remoteGw6Match;
  }

  // remote_gw6_start_ip - computed: true, optional: true, required: false
  private _remoteGw6StartIp?: string; 
  public get remoteGw6StartIp() {
    return this.getStringAttribute('remote_gw6_start_ip');
  }
  public set remoteGw6StartIp(value: string) {
    this._remoteGw6StartIp = value;
  }
  public resetRemoteGw6StartIp() {
    this._remoteGw6StartIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteGw6StartIpInput() {
    return this._remoteGw6StartIp;
  }

  // remote_gw6_subnet - computed: true, optional: true, required: false
  private _remoteGw6Subnet?: string; 
  public get remoteGw6Subnet() {
    return this.getStringAttribute('remote_gw6_subnet');
  }
  public set remoteGw6Subnet(value: string) {
    this._remoteGw6Subnet = value;
  }
  public resetRemoteGw6Subnet() {
    this._remoteGw6Subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteGw6SubnetInput() {
    return this._remoteGw6Subnet;
  }

  // remote_gw_country - computed: false, optional: true, required: false
  private _remoteGwCountry?: string; 
  public get remoteGwCountry() {
    return this.getStringAttribute('remote_gw_country');
  }
  public set remoteGwCountry(value: string) {
    this._remoteGwCountry = value;
  }
  public resetRemoteGwCountry() {
    this._remoteGwCountry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteGwCountryInput() {
    return this._remoteGwCountry;
  }

  // remote_gw_end_ip - computed: true, optional: true, required: false
  private _remoteGwEndIp?: string; 
  public get remoteGwEndIp() {
    return this.getStringAttribute('remote_gw_end_ip');
  }
  public set remoteGwEndIp(value: string) {
    this._remoteGwEndIp = value;
  }
  public resetRemoteGwEndIp() {
    this._remoteGwEndIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteGwEndIpInput() {
    return this._remoteGwEndIp;
  }

  // remote_gw_match - computed: true, optional: true, required: false
  private _remoteGwMatch?: string; 
  public get remoteGwMatch() {
    return this.getStringAttribute('remote_gw_match');
  }
  public set remoteGwMatch(value: string) {
    this._remoteGwMatch = value;
  }
  public resetRemoteGwMatch() {
    this._remoteGwMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteGwMatchInput() {
    return this._remoteGwMatch;
  }

  // remote_gw_start_ip - computed: true, optional: true, required: false
  private _remoteGwStartIp?: string; 
  public get remoteGwStartIp() {
    return this.getStringAttribute('remote_gw_start_ip');
  }
  public set remoteGwStartIp(value: string) {
    this._remoteGwStartIp = value;
  }
  public resetRemoteGwStartIp() {
    this._remoteGwStartIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteGwStartIpInput() {
    return this._remoteGwStartIp;
  }

  // remote_gw_subnet - computed: true, optional: true, required: false
  private _remoteGwSubnet?: string; 
  public get remoteGwSubnet() {
    return this.getStringAttribute('remote_gw_subnet');
  }
  public set remoteGwSubnet(value: string) {
    this._remoteGwSubnet = value;
  }
  public resetRemoteGwSubnet() {
    this._remoteGwSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteGwSubnetInput() {
    return this._remoteGwSubnet;
  }

  // remotegw_ddns - computed: false, optional: true, required: false
  private _remotegwDdns?: string; 
  public get remotegwDdns() {
    return this.getStringAttribute('remotegw_ddns');
  }
  public set remotegwDdns(value: string) {
    this._remotegwDdns = value;
  }
  public resetRemotegwDdns() {
    this._remotegwDdns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remotegwDdnsInput() {
    return this._remotegwDdns;
  }

  // rsa_signature_format - computed: true, optional: true, required: false
  private _rsaSignatureFormat?: string; 
  public get rsaSignatureFormat() {
    return this.getStringAttribute('rsa_signature_format');
  }
  public set rsaSignatureFormat(value: string) {
    this._rsaSignatureFormat = value;
  }
  public resetRsaSignatureFormat() {
    this._rsaSignatureFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaSignatureFormatInput() {
    return this._rsaSignatureFormat;
  }

  // rsa_signature_hash_override - computed: true, optional: true, required: false
  private _rsaSignatureHashOverride?: string; 
  public get rsaSignatureHashOverride() {
    return this.getStringAttribute('rsa_signature_hash_override');
  }
  public set rsaSignatureHashOverride(value: string) {
    this._rsaSignatureHashOverride = value;
  }
  public resetRsaSignatureHashOverride() {
    this._rsaSignatureHashOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaSignatureHashOverrideInput() {
    return this._rsaSignatureHashOverride;
  }

  // save_password - computed: true, optional: true, required: false
  private _savePassword?: string; 
  public get savePassword() {
    return this.getStringAttribute('save_password');
  }
  public set savePassword(value: string) {
    this._savePassword = value;
  }
  public resetSavePassword() {
    this._savePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get savePasswordInput() {
    return this._savePassword;
  }

  // send_cert_chain - computed: true, optional: true, required: false
  private _sendCertChain?: string; 
  public get sendCertChain() {
    return this.getStringAttribute('send_cert_chain');
  }
  public set sendCertChain(value: string) {
    this._sendCertChain = value;
  }
  public resetSendCertChain() {
    this._sendCertChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCertChainInput() {
    return this._sendCertChain;
  }

  // shared_idle_timeout - computed: true, optional: true, required: false
  private _sharedIdleTimeout?: string; 
  public get sharedIdleTimeout() {
    return this.getStringAttribute('shared_idle_timeout');
  }
  public set sharedIdleTimeout(value: string) {
    this._sharedIdleTimeout = value;
  }
  public resetSharedIdleTimeout() {
    this._sharedIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedIdleTimeoutInput() {
    return this._sharedIdleTimeout;
  }

  // signature_hash_alg - computed: true, optional: true, required: false
  private _signatureHashAlg?: string; 
  public get signatureHashAlg() {
    return this.getStringAttribute('signature_hash_alg');
  }
  public set signatureHashAlg(value: string) {
    this._signatureHashAlg = value;
  }
  public resetSignatureHashAlg() {
    this._signatureHashAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureHashAlgInput() {
    return this._signatureHashAlg;
  }

  // split_include_service - computed: false, optional: true, required: false
  private _splitIncludeService?: string; 
  public get splitIncludeService() {
    return this.getStringAttribute('split_include_service');
  }
  public set splitIncludeService(value: string) {
    this._splitIncludeService = value;
  }
  public resetSplitIncludeService() {
    this._splitIncludeService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitIncludeServiceInput() {
    return this._splitIncludeService;
  }

  // suite_b - computed: true, optional: true, required: false
  private _suiteB?: string; 
  public get suiteB() {
    return this.getStringAttribute('suite_b');
  }
  public set suiteB(value: string) {
    this._suiteB = value;
  }
  public resetSuiteB() {
    this._suiteB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suiteBInput() {
    return this._suiteB;
  }

  // transport - computed: true, optional: true, required: false
  private _transport?: string; 
  public get transport() {
    return this.getStringAttribute('transport');
  }
  public set transport(value: string) {
    this._transport = value;
  }
  public resetTransport() {
    this._transport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport;
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

  // unity_support - computed: true, optional: true, required: false
  private _unitySupport?: string; 
  public get unitySupport() {
    return this.getStringAttribute('unity_support');
  }
  public set unitySupport(value: string) {
    this._unitySupport = value;
  }
  public resetUnitySupport() {
    this._unitySupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitySupportInput() {
    return this._unitySupport;
  }

  // usrgrp - computed: false, optional: true, required: false
  private _usrgrp?: string; 
  public get usrgrp() {
    return this.getStringAttribute('usrgrp');
  }
  public set usrgrp(value: string) {
    this._usrgrp = value;
  }
  public resetUsrgrp() {
    this._usrgrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usrgrpInput() {
    return this._usrgrp;
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

  // wizard_type - computed: true, optional: true, required: false
  private _wizardType?: string; 
  public get wizardType() {
    return this.getStringAttribute('wizard_type');
  }
  public set wizardType(value: string) {
    this._wizardType = value;
  }
  public resetWizardType() {
    this._wizardType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wizardTypeInput() {
    return this._wizardType;
  }

  // xauthtype - computed: true, optional: true, required: false
  private _xauthtype?: string; 
  public get xauthtype() {
    return this.getStringAttribute('xauthtype');
  }
  public set xauthtype(value: string) {
    this._xauthtype = value;
  }
  public resetXauthtype() {
    this._xauthtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xauthtypeInput() {
    return this._xauthtype;
  }

  // backup_gateway - computed: false, optional: true, required: false
  private _backupGateway = new VpnipsecPhase1BackupGatewayList(this, "backup_gateway", true);
  public get backupGateway() {
    return this._backupGateway;
  }
  public putBackupGateway(value: VpnipsecPhase1BackupGateway[] | cdktf.IResolvable) {
    this._backupGateway.internalValue = value;
  }
  public resetBackupGateway() {
    this._backupGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupGatewayInput() {
    return this._backupGateway.internalValue;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate = new VpnipsecPhase1CertificateList(this, "certificate", true);
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: VpnipsecPhase1Certificate[] | cdktf.IResolvable) {
    this._certificate.internalValue = value;
  }
  public resetCertificate() {
    this._certificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }

  // dns_suffix_search - computed: false, optional: true, required: false
  private _dnsSuffixSearch = new VpnipsecPhase1DnsSuffixSearchList(this, "dns_suffix_search", true);
  public get dnsSuffixSearch() {
    return this._dnsSuffixSearch;
  }
  public putDnsSuffixSearch(value: VpnipsecPhase1DnsSuffixSearch[] | cdktf.IResolvable) {
    this._dnsSuffixSearch.internalValue = value;
  }
  public resetDnsSuffixSearch() {
    this._dnsSuffixSearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSuffixSearchInput() {
    return this._dnsSuffixSearch.internalValue;
  }

  // internal_domain_list - computed: false, optional: true, required: false
  private _internalDomainList = new VpnipsecPhase1InternalDomainListStructList(this, "internal_domain_list", true);
  public get internalDomainList() {
    return this._internalDomainList;
  }
  public putInternalDomainList(value: VpnipsecPhase1InternalDomainListStruct[] | cdktf.IResolvable) {
    this._internalDomainList.internalValue = value;
  }
  public resetInternalDomainList() {
    this._internalDomainList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalDomainListInput() {
    return this._internalDomainList.internalValue;
  }

  // ipv4_exclude_range - computed: false, optional: true, required: false
  private _ipv4ExcludeRange = new VpnipsecPhase1Ipv4ExcludeRangeList(this, "ipv4_exclude_range", false);
  public get ipv4ExcludeRange() {
    return this._ipv4ExcludeRange;
  }
  public putIpv4ExcludeRange(value: VpnipsecPhase1Ipv4ExcludeRange[] | cdktf.IResolvable) {
    this._ipv4ExcludeRange.internalValue = value;
  }
  public resetIpv4ExcludeRange() {
    this._ipv4ExcludeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ExcludeRangeInput() {
    return this._ipv4ExcludeRange.internalValue;
  }

  // ipv6_exclude_range - computed: false, optional: true, required: false
  private _ipv6ExcludeRange = new VpnipsecPhase1Ipv6ExcludeRangeList(this, "ipv6_exclude_range", false);
  public get ipv6ExcludeRange() {
    return this._ipv6ExcludeRange;
  }
  public putIpv6ExcludeRange(value: VpnipsecPhase1Ipv6ExcludeRange[] | cdktf.IResolvable) {
    this._ipv6ExcludeRange.internalValue = value;
  }
  public resetIpv6ExcludeRange() {
    this._ipv6ExcludeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ExcludeRangeInput() {
    return this._ipv6ExcludeRange.internalValue;
  }

  // remote_gw_ztna_tags - computed: false, optional: true, required: false
  private _remoteGwZtnaTags = new VpnipsecPhase1RemoteGwZtnaTagsList(this, "remote_gw_ztna_tags", true);
  public get remoteGwZtnaTags() {
    return this._remoteGwZtnaTags;
  }
  public putRemoteGwZtnaTags(value: VpnipsecPhase1RemoteGwZtnaTags[] | cdktf.IResolvable) {
    this._remoteGwZtnaTags.internalValue = value;
  }
  public resetRemoteGwZtnaTags() {
    this._remoteGwZtnaTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteGwZtnaTagsInput() {
    return this._remoteGwZtnaTags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acct_verify: cdktf.stringToTerraform(this._acctVerify),
      add_gw_route: cdktf.stringToTerraform(this._addGwRoute),
      add_route: cdktf.stringToTerraform(this._addRoute),
      addke1: cdktf.stringToTerraform(this._addke1),
      addke2: cdktf.stringToTerraform(this._addke2),
      addke3: cdktf.stringToTerraform(this._addke3),
      addke4: cdktf.stringToTerraform(this._addke4),
      addke5: cdktf.stringToTerraform(this._addke5),
      addke6: cdktf.stringToTerraform(this._addke6),
      addke7: cdktf.stringToTerraform(this._addke7),
      assign_ip: cdktf.stringToTerraform(this._assignIp),
      assign_ip_from: cdktf.stringToTerraform(this._assignIpFrom),
      authmethod: cdktf.stringToTerraform(this._authmethod),
      authmethod_remote: cdktf.stringToTerraform(this._authmethodRemote),
      authpasswd: cdktf.stringToTerraform(this._authpasswd),
      authusr: cdktf.stringToTerraform(this._authusr),
      authusrgrp: cdktf.stringToTerraform(this._authusrgrp),
      auto_negotiate: cdktf.stringToTerraform(this._autoNegotiate),
      auto_transport_threshold: cdktf.numberToTerraform(this._autoTransportThreshold),
      azure_ad_autoconnect: cdktf.stringToTerraform(this._azureAdAutoconnect),
      banner: cdktf.stringToTerraform(this._banner),
      cert_id_validation: cdktf.stringToTerraform(this._certIdValidation),
      cert_peer_username_strip: cdktf.stringToTerraform(this._certPeerUsernameStrip),
      cert_peer_username_validation: cdktf.stringToTerraform(this._certPeerUsernameValidation),
      cert_trust_store: cdktf.stringToTerraform(this._certTrustStore),
      childless_ike: cdktf.stringToTerraform(this._childlessIke),
      client_auto_negotiate: cdktf.stringToTerraform(this._clientAutoNegotiate),
      client_keep_alive: cdktf.stringToTerraform(this._clientKeepAlive),
      client_resume: cdktf.stringToTerraform(this._clientResume),
      client_resume_interval: cdktf.numberToTerraform(this._clientResumeInterval),
      comments: cdktf.stringToTerraform(this._comments),
      dev_id: cdktf.stringToTerraform(this._devId),
      dev_id_notification: cdktf.stringToTerraform(this._devIdNotification),
      dhcp6_ra_linkaddr: cdktf.stringToTerraform(this._dhcp6RaLinkaddr),
      dhcp_ra_giaddr: cdktf.stringToTerraform(this._dhcpRaGiaddr),
      dhgrp: cdktf.stringToTerraform(this._dhgrp),
      digital_signature_auth: cdktf.stringToTerraform(this._digitalSignatureAuth),
      distance: cdktf.numberToTerraform(this._distance),
      dns_mode: cdktf.stringToTerraform(this._dnsMode),
      domain: cdktf.stringToTerraform(this._domain),
      dpd: cdktf.stringToTerraform(this._dpd),
      dpd_retrycount: cdktf.numberToTerraform(this._dpdRetrycount),
      dpd_retryinterval: cdktf.stringToTerraform(this._dpdRetryinterval),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      eap: cdktf.stringToTerraform(this._eap),
      eap_cert_auth: cdktf.stringToTerraform(this._eapCertAuth),
      eap_exclude_peergrp: cdktf.stringToTerraform(this._eapExcludePeergrp),
      eap_identity: cdktf.stringToTerraform(this._eapIdentity),
      ems_sn_check: cdktf.stringToTerraform(this._emsSnCheck),
      enforce_unique_id: cdktf.stringToTerraform(this._enforceUniqueId),
      esn: cdktf.stringToTerraform(this._esn),
      exchange_fgt_device_id: cdktf.stringToTerraform(this._exchangeFgtDeviceId),
      fallback_tcp_threshold: cdktf.numberToTerraform(this._fallbackTcpThreshold),
      fec_base: cdktf.numberToTerraform(this._fecBase),
      fec_codec: cdktf.numberToTerraform(this._fecCodec),
      fec_codec_string: cdktf.stringToTerraform(this._fecCodecString),
      fec_egress: cdktf.stringToTerraform(this._fecEgress),
      fec_health_check: cdktf.stringToTerraform(this._fecHealthCheck),
      fec_ingress: cdktf.stringToTerraform(this._fecIngress),
      fec_mapping_profile: cdktf.stringToTerraform(this._fecMappingProfile),
      fec_receive_timeout: cdktf.numberToTerraform(this._fecReceiveTimeout),
      fec_redundant: cdktf.numberToTerraform(this._fecRedundant),
      fec_send_timeout: cdktf.numberToTerraform(this._fecSendTimeout),
      fgsp_sync: cdktf.stringToTerraform(this._fgspSync),
      forticlient_enforcement: cdktf.stringToTerraform(this._forticlientEnforcement),
      fortinet_esp: cdktf.stringToTerraform(this._fortinetEsp),
      fragmentation: cdktf.stringToTerraform(this._fragmentation),
      fragmentation_mtu: cdktf.numberToTerraform(this._fragmentationMtu),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      group_authentication: cdktf.stringToTerraform(this._groupAuthentication),
      group_authentication_secret: cdktf.stringToTerraform(this._groupAuthenticationSecret),
      ha_sync_esp_seqno: cdktf.stringToTerraform(this._haSyncEspSeqno),
      id: cdktf.stringToTerraform(this._id),
      idle_timeout: cdktf.stringToTerraform(this._idleTimeout),
      idle_timeoutinterval: cdktf.numberToTerraform(this._idleTimeoutinterval),
      ike_version: cdktf.stringToTerraform(this._ikeVersion),
      inbound_dscp_copy: cdktf.stringToTerraform(this._inboundDscpCopy),
      include_local_lan: cdktf.stringToTerraform(this._includeLocalLan),
      interface: cdktf.stringToTerraform(this._interface),
      ip_delay_interval: cdktf.numberToTerraform(this._ipDelayInterval),
      ipv4_dns_server1: cdktf.stringToTerraform(this._ipv4DnsServer1),
      ipv4_dns_server2: cdktf.stringToTerraform(this._ipv4DnsServer2),
      ipv4_dns_server3: cdktf.stringToTerraform(this._ipv4DnsServer3),
      ipv4_end_ip: cdktf.stringToTerraform(this._ipv4EndIp),
      ipv4_name: cdktf.stringToTerraform(this._ipv4Name),
      ipv4_netmask: cdktf.stringToTerraform(this._ipv4Netmask),
      ipv4_split_exclude: cdktf.stringToTerraform(this._ipv4SplitExclude),
      ipv4_split_include: cdktf.stringToTerraform(this._ipv4SplitInclude),
      ipv4_start_ip: cdktf.stringToTerraform(this._ipv4StartIp),
      ipv4_wins_server1: cdktf.stringToTerraform(this._ipv4WinsServer1),
      ipv4_wins_server2: cdktf.stringToTerraform(this._ipv4WinsServer2),
      ipv6_auto_linklocal: cdktf.stringToTerraform(this._ipv6AutoLinklocal),
      ipv6_dns_server1: cdktf.stringToTerraform(this._ipv6DnsServer1),
      ipv6_dns_server2: cdktf.stringToTerraform(this._ipv6DnsServer2),
      ipv6_dns_server3: cdktf.stringToTerraform(this._ipv6DnsServer3),
      ipv6_end_ip: cdktf.stringToTerraform(this._ipv6EndIp),
      ipv6_name: cdktf.stringToTerraform(this._ipv6Name),
      ipv6_prefix: cdktf.numberToTerraform(this._ipv6Prefix),
      ipv6_split_exclude: cdktf.stringToTerraform(this._ipv6SplitExclude),
      ipv6_split_include: cdktf.stringToTerraform(this._ipv6SplitInclude),
      ipv6_start_ip: cdktf.stringToTerraform(this._ipv6StartIp),
      keepalive: cdktf.numberToTerraform(this._keepalive),
      keylife: cdktf.numberToTerraform(this._keylife),
      kms: cdktf.stringToTerraform(this._kms),
      link_cost: cdktf.numberToTerraform(this._linkCost),
      local_gw: cdktf.stringToTerraform(this._localGw),
      localid: cdktf.stringToTerraform(this._localid),
      localid_type: cdktf.stringToTerraform(this._localidType),
      loopback_asymroute: cdktf.stringToTerraform(this._loopbackAsymroute),
      mesh_selector_type: cdktf.stringToTerraform(this._meshSelectorType),
      mode: cdktf.stringToTerraform(this._mode),
      mode_cfg: cdktf.stringToTerraform(this._modeCfg),
      mode_cfg_allow_client_selector: cdktf.stringToTerraform(this._modeCfgAllowClientSelector),
      name: cdktf.stringToTerraform(this._name),
      nattraversal: cdktf.stringToTerraform(this._nattraversal),
      negotiate_timeout: cdktf.numberToTerraform(this._negotiateTimeout),
      network_id: cdktf.numberToTerraform(this._networkId),
      network_overlay: cdktf.stringToTerraform(this._networkOverlay),
      npu_offload: cdktf.stringToTerraform(this._npuOffload),
      peer: cdktf.stringToTerraform(this._peer),
      peergrp: cdktf.stringToTerraform(this._peergrp),
      peerid: cdktf.stringToTerraform(this._peerid),
      peertype: cdktf.stringToTerraform(this._peertype),
      ppk: cdktf.stringToTerraform(this._ppk),
      ppk_identity: cdktf.stringToTerraform(this._ppkIdentity),
      ppk_secret: cdktf.stringToTerraform(this._ppkSecret),
      priority: cdktf.numberToTerraform(this._priority),
      proposal: cdktf.stringToTerraform(this._proposal),
      psksecret: cdktf.stringToTerraform(this._psksecret),
      psksecret_remote: cdktf.stringToTerraform(this._psksecretRemote),
      qkd: cdktf.stringToTerraform(this._qkd),
      qkd_hybrid: cdktf.stringToTerraform(this._qkdHybrid),
      qkd_profile: cdktf.stringToTerraform(this._qkdProfile),
      reauth: cdktf.stringToTerraform(this._reauth),
      rekey: cdktf.stringToTerraform(this._rekey),
      remote_gw: cdktf.stringToTerraform(this._remoteGw),
      remote_gw6_country: cdktf.stringToTerraform(this._remoteGw6Country),
      remote_gw6_end_ip: cdktf.stringToTerraform(this._remoteGw6EndIp),
      remote_gw6_match: cdktf.stringToTerraform(this._remoteGw6Match),
      remote_gw6_start_ip: cdktf.stringToTerraform(this._remoteGw6StartIp),
      remote_gw6_subnet: cdktf.stringToTerraform(this._remoteGw6Subnet),
      remote_gw_country: cdktf.stringToTerraform(this._remoteGwCountry),
      remote_gw_end_ip: cdktf.stringToTerraform(this._remoteGwEndIp),
      remote_gw_match: cdktf.stringToTerraform(this._remoteGwMatch),
      remote_gw_start_ip: cdktf.stringToTerraform(this._remoteGwStartIp),
      remote_gw_subnet: cdktf.stringToTerraform(this._remoteGwSubnet),
      remotegw_ddns: cdktf.stringToTerraform(this._remotegwDdns),
      rsa_signature_format: cdktf.stringToTerraform(this._rsaSignatureFormat),
      rsa_signature_hash_override: cdktf.stringToTerraform(this._rsaSignatureHashOverride),
      save_password: cdktf.stringToTerraform(this._savePassword),
      send_cert_chain: cdktf.stringToTerraform(this._sendCertChain),
      shared_idle_timeout: cdktf.stringToTerraform(this._sharedIdleTimeout),
      signature_hash_alg: cdktf.stringToTerraform(this._signatureHashAlg),
      split_include_service: cdktf.stringToTerraform(this._splitIncludeService),
      suite_b: cdktf.stringToTerraform(this._suiteB),
      transport: cdktf.stringToTerraform(this._transport),
      type: cdktf.stringToTerraform(this._type),
      unity_support: cdktf.stringToTerraform(this._unitySupport),
      usrgrp: cdktf.stringToTerraform(this._usrgrp),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      wizard_type: cdktf.stringToTerraform(this._wizardType),
      xauthtype: cdktf.stringToTerraform(this._xauthtype),
      backup_gateway: cdktf.listMapper(vpnipsecPhase1BackupGatewayToTerraform, true)(this._backupGateway.internalValue),
      certificate: cdktf.listMapper(vpnipsecPhase1CertificateToTerraform, true)(this._certificate.internalValue),
      dns_suffix_search: cdktf.listMapper(vpnipsecPhase1DnsSuffixSearchToTerraform, true)(this._dnsSuffixSearch.internalValue),
      internal_domain_list: cdktf.listMapper(vpnipsecPhase1InternalDomainListStructToTerraform, true)(this._internalDomainList.internalValue),
      ipv4_exclude_range: cdktf.listMapper(vpnipsecPhase1Ipv4ExcludeRangeToTerraform, true)(this._ipv4ExcludeRange.internalValue),
      ipv6_exclude_range: cdktf.listMapper(vpnipsecPhase1Ipv6ExcludeRangeToTerraform, true)(this._ipv6ExcludeRange.internalValue),
      remote_gw_ztna_tags: cdktf.listMapper(vpnipsecPhase1RemoteGwZtnaTagsToTerraform, true)(this._remoteGwZtnaTags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acct_verify: {
        value: cdktf.stringToHclTerraform(this._acctVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      add_gw_route: {
        value: cdktf.stringToHclTerraform(this._addGwRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      add_route: {
        value: cdktf.stringToHclTerraform(this._addRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      addke1: {
        value: cdktf.stringToHclTerraform(this._addke1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      addke2: {
        value: cdktf.stringToHclTerraform(this._addke2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      addke3: {
        value: cdktf.stringToHclTerraform(this._addke3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      addke4: {
        value: cdktf.stringToHclTerraform(this._addke4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      addke5: {
        value: cdktf.stringToHclTerraform(this._addke5),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      addke6: {
        value: cdktf.stringToHclTerraform(this._addke6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      addke7: {
        value: cdktf.stringToHclTerraform(this._addke7),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assign_ip: {
        value: cdktf.stringToHclTerraform(this._assignIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assign_ip_from: {
        value: cdktf.stringToHclTerraform(this._assignIpFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authmethod: {
        value: cdktf.stringToHclTerraform(this._authmethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authmethod_remote: {
        value: cdktf.stringToHclTerraform(this._authmethodRemote),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authpasswd: {
        value: cdktf.stringToHclTerraform(this._authpasswd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authusr: {
        value: cdktf.stringToHclTerraform(this._authusr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authusrgrp: {
        value: cdktf.stringToHclTerraform(this._authusrgrp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_negotiate: {
        value: cdktf.stringToHclTerraform(this._autoNegotiate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_transport_threshold: {
        value: cdktf.numberToHclTerraform(this._autoTransportThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      azure_ad_autoconnect: {
        value: cdktf.stringToHclTerraform(this._azureAdAutoconnect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      banner: {
        value: cdktf.stringToHclTerraform(this._banner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_id_validation: {
        value: cdktf.stringToHclTerraform(this._certIdValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_peer_username_strip: {
        value: cdktf.stringToHclTerraform(this._certPeerUsernameStrip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_peer_username_validation: {
        value: cdktf.stringToHclTerraform(this._certPeerUsernameValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_trust_store: {
        value: cdktf.stringToHclTerraform(this._certTrustStore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      childless_ike: {
        value: cdktf.stringToHclTerraform(this._childlessIke),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_auto_negotiate: {
        value: cdktf.stringToHclTerraform(this._clientAutoNegotiate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_keep_alive: {
        value: cdktf.stringToHclTerraform(this._clientKeepAlive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_resume: {
        value: cdktf.stringToHclTerraform(this._clientResume),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_resume_interval: {
        value: cdktf.numberToHclTerraform(this._clientResumeInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dev_id: {
        value: cdktf.stringToHclTerraform(this._devId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dev_id_notification: {
        value: cdktf.stringToHclTerraform(this._devIdNotification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp6_ra_linkaddr: {
        value: cdktf.stringToHclTerraform(this._dhcp6RaLinkaddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_ra_giaddr: {
        value: cdktf.stringToHclTerraform(this._dhcpRaGiaddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhgrp: {
        value: cdktf.stringToHclTerraform(this._dhgrp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      digital_signature_auth: {
        value: cdktf.stringToHclTerraform(this._digitalSignatureAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distance: {
        value: cdktf.numberToHclTerraform(this._distance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_mode: {
        value: cdktf.stringToHclTerraform(this._dnsMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dpd: {
        value: cdktf.stringToHclTerraform(this._dpd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dpd_retrycount: {
        value: cdktf.numberToHclTerraform(this._dpdRetrycount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dpd_retryinterval: {
        value: cdktf.stringToHclTerraform(this._dpdRetryinterval),
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
      eap: {
        value: cdktf.stringToHclTerraform(this._eap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eap_cert_auth: {
        value: cdktf.stringToHclTerraform(this._eapCertAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eap_exclude_peergrp: {
        value: cdktf.stringToHclTerraform(this._eapExcludePeergrp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eap_identity: {
        value: cdktf.stringToHclTerraform(this._eapIdentity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ems_sn_check: {
        value: cdktf.stringToHclTerraform(this._emsSnCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enforce_unique_id: {
        value: cdktf.stringToHclTerraform(this._enforceUniqueId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      esn: {
        value: cdktf.stringToHclTerraform(this._esn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exchange_fgt_device_id: {
        value: cdktf.stringToHclTerraform(this._exchangeFgtDeviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fallback_tcp_threshold: {
        value: cdktf.numberToHclTerraform(this._fallbackTcpThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fec_base: {
        value: cdktf.numberToHclTerraform(this._fecBase),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fec_codec: {
        value: cdktf.numberToHclTerraform(this._fecCodec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fec_codec_string: {
        value: cdktf.stringToHclTerraform(this._fecCodecString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fec_egress: {
        value: cdktf.stringToHclTerraform(this._fecEgress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fec_health_check: {
        value: cdktf.stringToHclTerraform(this._fecHealthCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fec_ingress: {
        value: cdktf.stringToHclTerraform(this._fecIngress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fec_mapping_profile: {
        value: cdktf.stringToHclTerraform(this._fecMappingProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fec_receive_timeout: {
        value: cdktf.numberToHclTerraform(this._fecReceiveTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fec_redundant: {
        value: cdktf.numberToHclTerraform(this._fecRedundant),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fec_send_timeout: {
        value: cdktf.numberToHclTerraform(this._fecSendTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fgsp_sync: {
        value: cdktf.stringToHclTerraform(this._fgspSync),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forticlient_enforcement: {
        value: cdktf.stringToHclTerraform(this._forticlientEnforcement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortinet_esp: {
        value: cdktf.stringToHclTerraform(this._fortinetEsp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fragmentation: {
        value: cdktf.stringToHclTerraform(this._fragmentation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fragmentation_mtu: {
        value: cdktf.numberToHclTerraform(this._fragmentationMtu),
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
      group_authentication: {
        value: cdktf.stringToHclTerraform(this._groupAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_authentication_secret: {
        value: cdktf.stringToHclTerraform(this._groupAuthenticationSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_sync_esp_seqno: {
        value: cdktf.stringToHclTerraform(this._haSyncEspSeqno),
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
      idle_timeout: {
        value: cdktf.stringToHclTerraform(this._idleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idle_timeoutinterval: {
        value: cdktf.numberToHclTerraform(this._idleTimeoutinterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ike_version: {
        value: cdktf.stringToHclTerraform(this._ikeVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inbound_dscp_copy: {
        value: cdktf.stringToHclTerraform(this._inboundDscpCopy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_local_lan: {
        value: cdktf.stringToHclTerraform(this._includeLocalLan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_delay_interval: {
        value: cdktf.numberToHclTerraform(this._ipDelayInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv4_dns_server1: {
        value: cdktf.stringToHclTerraform(this._ipv4DnsServer1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_dns_server2: {
        value: cdktf.stringToHclTerraform(this._ipv4DnsServer2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_dns_server3: {
        value: cdktf.stringToHclTerraform(this._ipv4DnsServer3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_end_ip: {
        value: cdktf.stringToHclTerraform(this._ipv4EndIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_name: {
        value: cdktf.stringToHclTerraform(this._ipv4Name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_netmask: {
        value: cdktf.stringToHclTerraform(this._ipv4Netmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_split_exclude: {
        value: cdktf.stringToHclTerraform(this._ipv4SplitExclude),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_split_include: {
        value: cdktf.stringToHclTerraform(this._ipv4SplitInclude),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_start_ip: {
        value: cdktf.stringToHclTerraform(this._ipv4StartIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_wins_server1: {
        value: cdktf.stringToHclTerraform(this._ipv4WinsServer1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_wins_server2: {
        value: cdktf.stringToHclTerraform(this._ipv4WinsServer2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_auto_linklocal: {
        value: cdktf.stringToHclTerraform(this._ipv6AutoLinklocal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_dns_server1: {
        value: cdktf.stringToHclTerraform(this._ipv6DnsServer1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_dns_server2: {
        value: cdktf.stringToHclTerraform(this._ipv6DnsServer2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_dns_server3: {
        value: cdktf.stringToHclTerraform(this._ipv6DnsServer3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_end_ip: {
        value: cdktf.stringToHclTerraform(this._ipv6EndIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_name: {
        value: cdktf.stringToHclTerraform(this._ipv6Name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_prefix: {
        value: cdktf.numberToHclTerraform(this._ipv6Prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_split_exclude: {
        value: cdktf.stringToHclTerraform(this._ipv6SplitExclude),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_split_include: {
        value: cdktf.stringToHclTerraform(this._ipv6SplitInclude),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_start_ip: {
        value: cdktf.stringToHclTerraform(this._ipv6StartIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keepalive: {
        value: cdktf.numberToHclTerraform(this._keepalive),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      keylife: {
        value: cdktf.numberToHclTerraform(this._keylife),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      kms: {
        value: cdktf.stringToHclTerraform(this._kms),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link_cost: {
        value: cdktf.numberToHclTerraform(this._linkCost),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      local_gw: {
        value: cdktf.stringToHclTerraform(this._localGw),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      localid: {
        value: cdktf.stringToHclTerraform(this._localid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      localid_type: {
        value: cdktf.stringToHclTerraform(this._localidType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loopback_asymroute: {
        value: cdktf.stringToHclTerraform(this._loopbackAsymroute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mesh_selector_type: {
        value: cdktf.stringToHclTerraform(this._meshSelectorType),
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
      mode_cfg: {
        value: cdktf.stringToHclTerraform(this._modeCfg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode_cfg_allow_client_selector: {
        value: cdktf.stringToHclTerraform(this._modeCfgAllowClientSelector),
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
      nattraversal: {
        value: cdktf.stringToHclTerraform(this._nattraversal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      negotiate_timeout: {
        value: cdktf.numberToHclTerraform(this._negotiateTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      network_id: {
        value: cdktf.numberToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      network_overlay: {
        value: cdktf.stringToHclTerraform(this._networkOverlay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      npu_offload: {
        value: cdktf.stringToHclTerraform(this._npuOffload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer: {
        value: cdktf.stringToHclTerraform(this._peer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peergrp: {
        value: cdktf.stringToHclTerraform(this._peergrp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peerid: {
        value: cdktf.stringToHclTerraform(this._peerid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peertype: {
        value: cdktf.stringToHclTerraform(this._peertype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ppk: {
        value: cdktf.stringToHclTerraform(this._ppk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ppk_identity: {
        value: cdktf.stringToHclTerraform(this._ppkIdentity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ppk_secret: {
        value: cdktf.stringToHclTerraform(this._ppkSecret),
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
      proposal: {
        value: cdktf.stringToHclTerraform(this._proposal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      psksecret: {
        value: cdktf.stringToHclTerraform(this._psksecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      psksecret_remote: {
        value: cdktf.stringToHclTerraform(this._psksecretRemote),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qkd: {
        value: cdktf.stringToHclTerraform(this._qkd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qkd_hybrid: {
        value: cdktf.stringToHclTerraform(this._qkdHybrid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qkd_profile: {
        value: cdktf.stringToHclTerraform(this._qkdProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reauth: {
        value: cdktf.stringToHclTerraform(this._reauth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rekey: {
        value: cdktf.stringToHclTerraform(this._rekey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_gw: {
        value: cdktf.stringToHclTerraform(this._remoteGw),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_gw6_country: {
        value: cdktf.stringToHclTerraform(this._remoteGw6Country),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_gw6_end_ip: {
        value: cdktf.stringToHclTerraform(this._remoteGw6EndIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_gw6_match: {
        value: cdktf.stringToHclTerraform(this._remoteGw6Match),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_gw6_start_ip: {
        value: cdktf.stringToHclTerraform(this._remoteGw6StartIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_gw6_subnet: {
        value: cdktf.stringToHclTerraform(this._remoteGw6Subnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_gw_country: {
        value: cdktf.stringToHclTerraform(this._remoteGwCountry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_gw_end_ip: {
        value: cdktf.stringToHclTerraform(this._remoteGwEndIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_gw_match: {
        value: cdktf.stringToHclTerraform(this._remoteGwMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_gw_start_ip: {
        value: cdktf.stringToHclTerraform(this._remoteGwStartIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_gw_subnet: {
        value: cdktf.stringToHclTerraform(this._remoteGwSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remotegw_ddns: {
        value: cdktf.stringToHclTerraform(this._remotegwDdns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rsa_signature_format: {
        value: cdktf.stringToHclTerraform(this._rsaSignatureFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rsa_signature_hash_override: {
        value: cdktf.stringToHclTerraform(this._rsaSignatureHashOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      save_password: {
        value: cdktf.stringToHclTerraform(this._savePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_cert_chain: {
        value: cdktf.stringToHclTerraform(this._sendCertChain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_idle_timeout: {
        value: cdktf.stringToHclTerraform(this._sharedIdleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signature_hash_alg: {
        value: cdktf.stringToHclTerraform(this._signatureHashAlg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      split_include_service: {
        value: cdktf.stringToHclTerraform(this._splitIncludeService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suite_b: {
        value: cdktf.stringToHclTerraform(this._suiteB),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transport: {
        value: cdktf.stringToHclTerraform(this._transport),
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
      unity_support: {
        value: cdktf.stringToHclTerraform(this._unitySupport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usrgrp: {
        value: cdktf.stringToHclTerraform(this._usrgrp),
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
      wizard_type: {
        value: cdktf.stringToHclTerraform(this._wizardType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xauthtype: {
        value: cdktf.stringToHclTerraform(this._xauthtype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_gateway: {
        value: cdktf.listMapperHcl(vpnipsecPhase1BackupGatewayToHclTerraform, true)(this._backupGateway.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VpnipsecPhase1BackupGatewayList",
      },
      certificate: {
        value: cdktf.listMapperHcl(vpnipsecPhase1CertificateToHclTerraform, true)(this._certificate.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VpnipsecPhase1CertificateList",
      },
      dns_suffix_search: {
        value: cdktf.listMapperHcl(vpnipsecPhase1DnsSuffixSearchToHclTerraform, true)(this._dnsSuffixSearch.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VpnipsecPhase1DnsSuffixSearchList",
      },
      internal_domain_list: {
        value: cdktf.listMapperHcl(vpnipsecPhase1InternalDomainListStructToHclTerraform, true)(this._internalDomainList.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VpnipsecPhase1InternalDomainListStructList",
      },
      ipv4_exclude_range: {
        value: cdktf.listMapperHcl(vpnipsecPhase1Ipv4ExcludeRangeToHclTerraform, true)(this._ipv4ExcludeRange.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnipsecPhase1Ipv4ExcludeRangeList",
      },
      ipv6_exclude_range: {
        value: cdktf.listMapperHcl(vpnipsecPhase1Ipv6ExcludeRangeToHclTerraform, true)(this._ipv6ExcludeRange.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnipsecPhase1Ipv6ExcludeRangeList",
      },
      remote_gw_ztna_tags: {
        value: cdktf.listMapperHcl(vpnipsecPhase1RemoteGwZtnaTagsToHclTerraform, true)(this._remoteGwZtnaTags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VpnipsecPhase1RemoteGwZtnaTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
