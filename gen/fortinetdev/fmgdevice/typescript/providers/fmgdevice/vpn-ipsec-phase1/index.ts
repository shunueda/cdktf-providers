// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnIpsecPhase1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#acct_verify VpnIpsecPhase1#acct_verify}
  */
  readonly acctVerify?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#add_gw_route VpnIpsecPhase1#add_gw_route}
  */
  readonly addGwRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#add_route VpnIpsecPhase1#add_route}
  */
  readonly addRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#addke1 VpnIpsecPhase1#addke1}
  */
  readonly addke1?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#addke2 VpnIpsecPhase1#addke2}
  */
  readonly addke2?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#addke3 VpnIpsecPhase1#addke3}
  */
  readonly addke3?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#addke4 VpnIpsecPhase1#addke4}
  */
  readonly addke4?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#addke5 VpnIpsecPhase1#addke5}
  */
  readonly addke5?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#addke6 VpnIpsecPhase1#addke6}
  */
  readonly addke6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#addke7 VpnIpsecPhase1#addke7}
  */
  readonly addke7?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#assign_ip VpnIpsecPhase1#assign_ip}
  */
  readonly assignIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#assign_ip_from VpnIpsecPhase1#assign_ip_from}
  */
  readonly assignIpFrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#authmethod VpnIpsecPhase1#authmethod}
  */
  readonly authmethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#authmethod_remote VpnIpsecPhase1#authmethod_remote}
  */
  readonly authmethodRemote?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#authpasswd VpnIpsecPhase1#authpasswd}
  */
  readonly authpasswd?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#authusr VpnIpsecPhase1#authusr}
  */
  readonly authusr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#authusrgrp VpnIpsecPhase1#authusrgrp}
  */
  readonly authusrgrp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#auto_negotiate VpnIpsecPhase1#auto_negotiate}
  */
  readonly autoNegotiate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#auto_transport_threshold VpnIpsecPhase1#auto_transport_threshold}
  */
  readonly autoTransportThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#azure_ad_autoconnect VpnIpsecPhase1#azure_ad_autoconnect}
  */
  readonly azureAdAutoconnect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#backup_gateway VpnIpsecPhase1#backup_gateway}
  */
  readonly backupGateway?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#banner VpnIpsecPhase1#banner}
  */
  readonly banner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#cert_id_validation VpnIpsecPhase1#cert_id_validation}
  */
  readonly certIdValidation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#cert_peer_username_strip VpnIpsecPhase1#cert_peer_username_strip}
  */
  readonly certPeerUsernameStrip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#cert_peer_username_validation VpnIpsecPhase1#cert_peer_username_validation}
  */
  readonly certPeerUsernameValidation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#cert_trust_store VpnIpsecPhase1#cert_trust_store}
  */
  readonly certTrustStore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#certificate VpnIpsecPhase1#certificate}
  */
  readonly certificate?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#childless_ike VpnIpsecPhase1#childless_ike}
  */
  readonly childlessIke?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#client_auto_negotiate VpnIpsecPhase1#client_auto_negotiate}
  */
  readonly clientAutoNegotiate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#client_keep_alive VpnIpsecPhase1#client_keep_alive}
  */
  readonly clientKeepAlive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#client_resume VpnIpsecPhase1#client_resume}
  */
  readonly clientResume?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#client_resume_interval VpnIpsecPhase1#client_resume_interval}
  */
  readonly clientResumeInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#comments VpnIpsecPhase1#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#dev_id VpnIpsecPhase1#dev_id}
  */
  readonly devId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#dev_id_notification VpnIpsecPhase1#dev_id_notification}
  */
  readonly devIdNotification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#device_name VpnIpsecPhase1#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#device_vdom VpnIpsecPhase1#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#dhcp6_ra_linkaddr VpnIpsecPhase1#dhcp6_ra_linkaddr}
  */
  readonly dhcp6RaLinkaddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#dhcp_ra_giaddr VpnIpsecPhase1#dhcp_ra_giaddr}
  */
  readonly dhcpRaGiaddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#dhgrp VpnIpsecPhase1#dhgrp}
  */
  readonly dhgrp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#digital_signature_auth VpnIpsecPhase1#digital_signature_auth}
  */
  readonly digitalSignatureAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#distance VpnIpsecPhase1#distance}
  */
  readonly distance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#dns_mode VpnIpsecPhase1#dns_mode}
  */
  readonly dnsMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#domain VpnIpsecPhase1#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#dpd VpnIpsecPhase1#dpd}
  */
  readonly dpd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#dpd_retrycount VpnIpsecPhase1#dpd_retrycount}
  */
  readonly dpdRetrycount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#dpd_retryinterval VpnIpsecPhase1#dpd_retryinterval}
  */
  readonly dpdRetryinterval?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#dynamic_sort_subtable VpnIpsecPhase1#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#eap VpnIpsecPhase1#eap}
  */
  readonly eap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#eap_cert_auth VpnIpsecPhase1#eap_cert_auth}
  */
  readonly eapCertAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#eap_exclude_peergrp VpnIpsecPhase1#eap_exclude_peergrp}
  */
  readonly eapExcludePeergrp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#eap_identity VpnIpsecPhase1#eap_identity}
  */
  readonly eapIdentity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#ems_sn_check VpnIpsecPhase1#ems_sn_check}
  */
  readonly emsSnCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#enforce_unique_id VpnIpsecPhase1#enforce_unique_id}
  */
  readonly enforceUniqueId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#esn VpnIpsecPhase1#esn}
  */
  readonly esn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#exchange_fgt_device_id VpnIpsecPhase1#exchange_fgt_device_id}
  */
  readonly exchangeFgtDeviceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#fallback_tcp_threshold VpnIpsecPhase1#fallback_tcp_threshold}
  */
  readonly fallbackTcpThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#fec_base VpnIpsecPhase1#fec_base}
  */
  readonly fecBase?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#fec_codec VpnIpsecPhase1#fec_codec}
  */
  readonly fecCodec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#fec_egress VpnIpsecPhase1#fec_egress}
  */
  readonly fecEgress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#fec_health_check VpnIpsecPhase1#fec_health_check}
  */
  readonly fecHealthCheck?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#fec_ingress VpnIpsecPhase1#fec_ingress}
  */
  readonly fecIngress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#fec_mapping_profile VpnIpsecPhase1#fec_mapping_profile}
  */
  readonly fecMappingProfile?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#fec_receive_timeout VpnIpsecPhase1#fec_receive_timeout}
  */
  readonly fecReceiveTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#fec_redundant VpnIpsecPhase1#fec_redundant}
  */
  readonly fecRedundant?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#fec_send_timeout VpnIpsecPhase1#fec_send_timeout}
  */
  readonly fecSendTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#fgsp_sync VpnIpsecPhase1#fgsp_sync}
  */
  readonly fgspSync?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#forticlient_enforcement VpnIpsecPhase1#forticlient_enforcement}
  */
  readonly forticlientEnforcement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#fortinet_esp VpnIpsecPhase1#fortinet_esp}
  */
  readonly fortinetEsp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#fragmentation VpnIpsecPhase1#fragmentation}
  */
  readonly fragmentation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#fragmentation_mtu VpnIpsecPhase1#fragmentation_mtu}
  */
  readonly fragmentationMtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#group_authentication VpnIpsecPhase1#group_authentication}
  */
  readonly groupAuthentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#group_authentication_secret VpnIpsecPhase1#group_authentication_secret}
  */
  readonly groupAuthenticationSecret?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#ha_sync_esp_seqno VpnIpsecPhase1#ha_sync_esp_seqno}
  */
  readonly haSyncEspSeqno?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#id VpnIpsecPhase1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#idle_timeout VpnIpsecPhase1#idle_timeout}
  */
  readonly idleTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#idle_timeoutinterval VpnIpsecPhase1#idle_timeoutinterval}
  */
  readonly idleTimeoutinterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#ike_version VpnIpsecPhase1#ike_version}
  */
  readonly ikeVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#inbound_dscp_copy VpnIpsecPhase1#inbound_dscp_copy}
  */
  readonly inboundDscpCopy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#include_local_lan VpnIpsecPhase1#include_local_lan}
  */
  readonly includeLocalLan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#interface VpnIpsecPhase1#interface}
  */
  readonly interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#internal_domain_list VpnIpsecPhase1#internal_domain_list}
  */
  readonly internalDomainList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#ip_delay_interval VpnIpsecPhase1#ip_delay_interval}
  */
  readonly ipDelayInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#ipv4_dns_server1 VpnIpsecPhase1#ipv4_dns_server1}
  */
  readonly ipv4DnsServer1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#ipv4_dns_server2 VpnIpsecPhase1#ipv4_dns_server2}
  */
  readonly ipv4DnsServer2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#ipv4_dns_server3 VpnIpsecPhase1#ipv4_dns_server3}
  */
  readonly ipv4DnsServer3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#ipv4_end_ip VpnIpsecPhase1#ipv4_end_ip}
  */
  readonly ipv4EndIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#ipv4_name VpnIpsecPhase1#ipv4_name}
  */
  readonly ipv4Name?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#ipv4_netmask VpnIpsecPhase1#ipv4_netmask}
  */
  readonly ipv4Netmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#ipv4_split_exclude VpnIpsecPhase1#ipv4_split_exclude}
  */
  readonly ipv4SplitExclude?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#ipv4_split_include VpnIpsecPhase1#ipv4_split_include}
  */
  readonly ipv4SplitInclude?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#ipv4_start_ip VpnIpsecPhase1#ipv4_start_ip}
  */
  readonly ipv4StartIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#ipv4_wins_server1 VpnIpsecPhase1#ipv4_wins_server1}
  */
  readonly ipv4WinsServer1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#ipv4_wins_server2 VpnIpsecPhase1#ipv4_wins_server2}
  */
  readonly ipv4WinsServer2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#ipv6_auto_linklocal VpnIpsecPhase1#ipv6_auto_linklocal}
  */
  readonly ipv6AutoLinklocal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#ipv6_dns_server1 VpnIpsecPhase1#ipv6_dns_server1}
  */
  readonly ipv6DnsServer1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#ipv6_dns_server2 VpnIpsecPhase1#ipv6_dns_server2}
  */
  readonly ipv6DnsServer2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#ipv6_dns_server3 VpnIpsecPhase1#ipv6_dns_server3}
  */
  readonly ipv6DnsServer3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#ipv6_end_ip VpnIpsecPhase1#ipv6_end_ip}
  */
  readonly ipv6EndIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#ipv6_name VpnIpsecPhase1#ipv6_name}
  */
  readonly ipv6Name?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#ipv6_prefix VpnIpsecPhase1#ipv6_prefix}
  */
  readonly ipv6Prefix?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#ipv6_split_exclude VpnIpsecPhase1#ipv6_split_exclude}
  */
  readonly ipv6SplitExclude?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#ipv6_split_include VpnIpsecPhase1#ipv6_split_include}
  */
  readonly ipv6SplitInclude?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#ipv6_start_ip VpnIpsecPhase1#ipv6_start_ip}
  */
  readonly ipv6StartIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#keepalive VpnIpsecPhase1#keepalive}
  */
  readonly keepalive?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#keylife VpnIpsecPhase1#keylife}
  */
  readonly keylife?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#kms VpnIpsecPhase1#kms}
  */
  readonly kms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#link_cost VpnIpsecPhase1#link_cost}
  */
  readonly linkCost?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#local_gw VpnIpsecPhase1#local_gw}
  */
  readonly localGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#localid VpnIpsecPhase1#localid}
  */
  readonly localid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#localid_type VpnIpsecPhase1#localid_type}
  */
  readonly localidType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#loopback_asymroute VpnIpsecPhase1#loopback_asymroute}
  */
  readonly loopbackAsymroute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#mesh_selector_type VpnIpsecPhase1#mesh_selector_type}
  */
  readonly meshSelectorType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#mode VpnIpsecPhase1#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#mode_cfg VpnIpsecPhase1#mode_cfg}
  */
  readonly modeCfg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#mode_cfg_allow_client_selector VpnIpsecPhase1#mode_cfg_allow_client_selector}
  */
  readonly modeCfgAllowClientSelector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#name VpnIpsecPhase1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#nattraversal VpnIpsecPhase1#nattraversal}
  */
  readonly nattraversal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#negotiate_timeout VpnIpsecPhase1#negotiate_timeout}
  */
  readonly negotiateTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#network_id VpnIpsecPhase1#network_id}
  */
  readonly networkId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#network_overlay VpnIpsecPhase1#network_overlay}
  */
  readonly networkOverlay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#npu_offload VpnIpsecPhase1#npu_offload}
  */
  readonly npuOffload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#peer VpnIpsecPhase1#peer}
  */
  readonly peer?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#peergrp VpnIpsecPhase1#peergrp}
  */
  readonly peergrp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#peerid VpnIpsecPhase1#peerid}
  */
  readonly peerid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#peertype VpnIpsecPhase1#peertype}
  */
  readonly peertype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#ppk VpnIpsecPhase1#ppk}
  */
  readonly ppk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#ppk_identity VpnIpsecPhase1#ppk_identity}
  */
  readonly ppkIdentity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#ppk_secret VpnIpsecPhase1#ppk_secret}
  */
  readonly ppkSecret?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#priority VpnIpsecPhase1#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#proposal VpnIpsecPhase1#proposal}
  */
  readonly proposal?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#psksecret VpnIpsecPhase1#psksecret}
  */
  readonly psksecret?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#psksecret_remote VpnIpsecPhase1#psksecret_remote}
  */
  readonly psksecretRemote?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#qkd VpnIpsecPhase1#qkd}
  */
  readonly qkd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#qkd_profile VpnIpsecPhase1#qkd_profile}
  */
  readonly qkdProfile?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#reauth VpnIpsecPhase1#reauth}
  */
  readonly reauth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#rekey VpnIpsecPhase1#rekey}
  */
  readonly rekey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#remote_gw VpnIpsecPhase1#remote_gw}
  */
  readonly remoteGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#remote_gw6_country VpnIpsecPhase1#remote_gw6_country}
  */
  readonly remoteGw6Country?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#remote_gw6_end_ip VpnIpsecPhase1#remote_gw6_end_ip}
  */
  readonly remoteGw6EndIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#remote_gw6_match VpnIpsecPhase1#remote_gw6_match}
  */
  readonly remoteGw6Match?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#remote_gw6_start_ip VpnIpsecPhase1#remote_gw6_start_ip}
  */
  readonly remoteGw6StartIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#remote_gw6_subnet VpnIpsecPhase1#remote_gw6_subnet}
  */
  readonly remoteGw6Subnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#remote_gw_country VpnIpsecPhase1#remote_gw_country}
  */
  readonly remoteGwCountry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#remote_gw_end_ip VpnIpsecPhase1#remote_gw_end_ip}
  */
  readonly remoteGwEndIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#remote_gw_match VpnIpsecPhase1#remote_gw_match}
  */
  readonly remoteGwMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#remote_gw_start_ip VpnIpsecPhase1#remote_gw_start_ip}
  */
  readonly remoteGwStartIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#remote_gw_subnet VpnIpsecPhase1#remote_gw_subnet}
  */
  readonly remoteGwSubnet?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#remote_gw_ztna_tags VpnIpsecPhase1#remote_gw_ztna_tags}
  */
  readonly remoteGwZtnaTags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#remotegw_ddns VpnIpsecPhase1#remotegw_ddns}
  */
  readonly remotegwDdns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#rsa_signature_format VpnIpsecPhase1#rsa_signature_format}
  */
  readonly rsaSignatureFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#rsa_signature_hash_override VpnIpsecPhase1#rsa_signature_hash_override}
  */
  readonly rsaSignatureHashOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#save_password VpnIpsecPhase1#save_password}
  */
  readonly savePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#send_cert_chain VpnIpsecPhase1#send_cert_chain}
  */
  readonly sendCertChain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#shared_idle_timeout VpnIpsecPhase1#shared_idle_timeout}
  */
  readonly sharedIdleTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#signature_hash_alg VpnIpsecPhase1#signature_hash_alg}
  */
  readonly signatureHashAlg?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#split_include_service VpnIpsecPhase1#split_include_service}
  */
  readonly splitIncludeService?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#suite_b VpnIpsecPhase1#suite_b}
  */
  readonly suiteB?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#transit_gateway VpnIpsecPhase1#transit_gateway}
  */
  readonly transitGateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#transport VpnIpsecPhase1#transport}
  */
  readonly transport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#type VpnIpsecPhase1#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#unity_support VpnIpsecPhase1#unity_support}
  */
  readonly unitySupport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#usrgrp VpnIpsecPhase1#usrgrp}
  */
  readonly usrgrp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#wizard_type VpnIpsecPhase1#wizard_type}
  */
  readonly wizardType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#xauthtype VpnIpsecPhase1#xauthtype}
  */
  readonly xauthtype?: string;
  /**
  * ipv4_exclude_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#ipv4_exclude_range VpnIpsecPhase1#ipv4_exclude_range}
  */
  readonly ipv4ExcludeRange?: VpnIpsecPhase1Ipv4ExcludeRange[] | cdktf.IResolvable;
  /**
  * ipv6_exclude_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#ipv6_exclude_range VpnIpsecPhase1#ipv6_exclude_range}
  */
  readonly ipv6ExcludeRange?: VpnIpsecPhase1Ipv6ExcludeRange[] | cdktf.IResolvable;
}
export interface VpnIpsecPhase1Ipv4ExcludeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#end_ip VpnIpsecPhase1#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#id VpnIpsecPhase1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#start_ip VpnIpsecPhase1#start_ip}
  */
  readonly startIp?: string;
}

export function vpnIpsecPhase1Ipv4ExcludeRangeToTerraform(struct?: VpnIpsecPhase1Ipv4ExcludeRange | cdktf.IResolvable): any {
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


export function vpnIpsecPhase1Ipv4ExcludeRangeToHclTerraform(struct?: VpnIpsecPhase1Ipv4ExcludeRange | cdktf.IResolvable): any {
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

export class VpnIpsecPhase1Ipv4ExcludeRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnIpsecPhase1Ipv4ExcludeRange | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpnIpsecPhase1Ipv4ExcludeRange | cdktf.IResolvable | undefined) {
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

  // end_ip - computed: false, optional: true, required: false
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

  // start_ip - computed: false, optional: true, required: false
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

export class VpnIpsecPhase1Ipv4ExcludeRangeList extends cdktf.ComplexList {
  public internalValue? : VpnIpsecPhase1Ipv4ExcludeRange[] | cdktf.IResolvable

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
  public get(index: number): VpnIpsecPhase1Ipv4ExcludeRangeOutputReference {
    return new VpnIpsecPhase1Ipv4ExcludeRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnIpsecPhase1Ipv6ExcludeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#end_ip VpnIpsecPhase1#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#id VpnIpsecPhase1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#start_ip VpnIpsecPhase1#start_ip}
  */
  readonly startIp?: string;
}

export function vpnIpsecPhase1Ipv6ExcludeRangeToTerraform(struct?: VpnIpsecPhase1Ipv6ExcludeRange | cdktf.IResolvable): any {
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


export function vpnIpsecPhase1Ipv6ExcludeRangeToHclTerraform(struct?: VpnIpsecPhase1Ipv6ExcludeRange | cdktf.IResolvable): any {
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

export class VpnIpsecPhase1Ipv6ExcludeRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnIpsecPhase1Ipv6ExcludeRange | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpnIpsecPhase1Ipv6ExcludeRange | cdktf.IResolvable | undefined) {
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

  // end_ip - computed: false, optional: true, required: false
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

  // start_ip - computed: false, optional: true, required: false
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

export class VpnIpsecPhase1Ipv6ExcludeRangeList extends cdktf.ComplexList {
  public internalValue? : VpnIpsecPhase1Ipv6ExcludeRange[] | cdktf.IResolvable

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
  public get(index: number): VpnIpsecPhase1Ipv6ExcludeRangeOutputReference {
    return new VpnIpsecPhase1Ipv6ExcludeRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1 fmgdevice_vpn_ipsec_phase1}
*/
export class VpnIpsecPhase1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_vpn_ipsec_phase1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnIpsecPhase1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnIpsecPhase1 to import
  * @param importFromId The id of the existing VpnIpsecPhase1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnIpsecPhase1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_vpn_ipsec_phase1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase1 fmgdevice_vpn_ipsec_phase1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnIpsecPhase1Config = {}
  */
  public constructor(scope: Construct, id: string, config: VpnIpsecPhase1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_vpn_ipsec_phase1',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
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
    this._backupGateway = config.backupGateway;
    this._banner = config.banner;
    this._certIdValidation = config.certIdValidation;
    this._certPeerUsernameStrip = config.certPeerUsernameStrip;
    this._certPeerUsernameValidation = config.certPeerUsernameValidation;
    this._certTrustStore = config.certTrustStore;
    this._certificate = config.certificate;
    this._childlessIke = config.childlessIke;
    this._clientAutoNegotiate = config.clientAutoNegotiate;
    this._clientKeepAlive = config.clientKeepAlive;
    this._clientResume = config.clientResume;
    this._clientResumeInterval = config.clientResumeInterval;
    this._comments = config.comments;
    this._devId = config.devId;
    this._devIdNotification = config.devIdNotification;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
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
    this._internalDomainList = config.internalDomainList;
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
    this._remoteGwZtnaTags = config.remoteGwZtnaTags;
    this._remotegwDdns = config.remotegwDdns;
    this._rsaSignatureFormat = config.rsaSignatureFormat;
    this._rsaSignatureHashOverride = config.rsaSignatureHashOverride;
    this._savePassword = config.savePassword;
    this._sendCertChain = config.sendCertChain;
    this._sharedIdleTimeout = config.sharedIdleTimeout;
    this._signatureHashAlg = config.signatureHashAlg;
    this._splitIncludeService = config.splitIncludeService;
    this._suiteB = config.suiteB;
    this._transitGateway = config.transitGateway;
    this._transport = config.transport;
    this._type = config.type;
    this._unitySupport = config.unitySupport;
    this._usrgrp = config.usrgrp;
    this._wizardType = config.wizardType;
    this._xauthtype = config.xauthtype;
    this._ipv4ExcludeRange.internalValue = config.ipv4ExcludeRange;
    this._ipv6ExcludeRange.internalValue = config.ipv6ExcludeRange;
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

  // addke1 - computed: true, optional: true, required: false
  private _addke1?: string[]; 
  public get addke1() {
    return cdktf.Fn.tolist(this.getListAttribute('addke1'));
  }
  public set addke1(value: string[]) {
    this._addke1 = value;
  }
  public resetAddke1() {
    this._addke1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addke1Input() {
    return this._addke1;
  }

  // addke2 - computed: true, optional: true, required: false
  private _addke2?: string[]; 
  public get addke2() {
    return cdktf.Fn.tolist(this.getListAttribute('addke2'));
  }
  public set addke2(value: string[]) {
    this._addke2 = value;
  }
  public resetAddke2() {
    this._addke2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addke2Input() {
    return this._addke2;
  }

  // addke3 - computed: true, optional: true, required: false
  private _addke3?: string[]; 
  public get addke3() {
    return cdktf.Fn.tolist(this.getListAttribute('addke3'));
  }
  public set addke3(value: string[]) {
    this._addke3 = value;
  }
  public resetAddke3() {
    this._addke3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addke3Input() {
    return this._addke3;
  }

  // addke4 - computed: true, optional: true, required: false
  private _addke4?: string[]; 
  public get addke4() {
    return cdktf.Fn.tolist(this.getListAttribute('addke4'));
  }
  public set addke4(value: string[]) {
    this._addke4 = value;
  }
  public resetAddke4() {
    this._addke4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addke4Input() {
    return this._addke4;
  }

  // addke5 - computed: true, optional: true, required: false
  private _addke5?: string[]; 
  public get addke5() {
    return cdktf.Fn.tolist(this.getListAttribute('addke5'));
  }
  public set addke5(value: string[]) {
    this._addke5 = value;
  }
  public resetAddke5() {
    this._addke5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addke5Input() {
    return this._addke5;
  }

  // addke6 - computed: true, optional: true, required: false
  private _addke6?: string[]; 
  public get addke6() {
    return cdktf.Fn.tolist(this.getListAttribute('addke6'));
  }
  public set addke6(value: string[]) {
    this._addke6 = value;
  }
  public resetAddke6() {
    this._addke6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addke6Input() {
    return this._addke6;
  }

  // addke7 - computed: true, optional: true, required: false
  private _addke7?: string[]; 
  public get addke7() {
    return cdktf.Fn.tolist(this.getListAttribute('addke7'));
  }
  public set addke7(value: string[]) {
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

  // assign_ip_from - computed: false, optional: true, required: false
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

  // authpasswd - computed: true, optional: true, required: false
  private _authpasswd?: string[]; 
  public get authpasswd() {
    return cdktf.Fn.tolist(this.getListAttribute('authpasswd'));
  }
  public set authpasswd(value: string[]) {
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

  // authusrgrp - computed: true, optional: true, required: false
  private _authusrgrp?: string[]; 
  public get authusrgrp() {
    return cdktf.Fn.tolist(this.getListAttribute('authusrgrp'));
  }
  public set authusrgrp(value: string[]) {
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

  // azure_ad_autoconnect - computed: false, optional: true, required: false
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

  // backup_gateway - computed: true, optional: true, required: false
  private _backupGateway?: string[]; 
  public get backupGateway() {
    return cdktf.Fn.tolist(this.getListAttribute('backup_gateway'));
  }
  public set backupGateway(value: string[]) {
    this._backupGateway = value;
  }
  public resetBackupGateway() {
    this._backupGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupGatewayInput() {
    return this._backupGateway;
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

  // cert_id_validation - computed: false, optional: true, required: false
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

  // cert_trust_store - computed: false, optional: true, required: false
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

  // certificate - computed: true, optional: true, required: false
  private _certificate?: string[]; 
  public get certificate() {
    return cdktf.Fn.tolist(this.getListAttribute('certificate'));
  }
  public set certificate(value: string[]) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
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

  // client_auto_negotiate - computed: false, optional: true, required: false
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

  // client_keep_alive - computed: false, optional: true, required: false
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

  // dev_id_notification - computed: false, optional: true, required: false
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

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // dhcp6_ra_linkaddr - computed: false, optional: true, required: false
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

  // dhcp_ra_giaddr - computed: false, optional: true, required: false
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
  private _dhgrp?: string[]; 
  public get dhgrp() {
    return cdktf.Fn.tolist(this.getListAttribute('dhgrp'));
  }
  public set dhgrp(value: string[]) {
    this._dhgrp = value;
  }
  public resetDhgrp() {
    this._dhgrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhgrpInput() {
    return this._dhgrp;
  }

  // digital_signature_auth - computed: false, optional: true, required: false
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

  // dns_mode - computed: false, optional: true, required: false
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
  private _dpdRetryinterval?: number[]; 
  public get dpdRetryinterval() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('dpd_retryinterval')));
  }
  public set dpdRetryinterval(value: number[]) {
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

  // eap - computed: false, optional: true, required: false
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

  // eap_exclude_peergrp - computed: true, optional: true, required: false
  private _eapExcludePeergrp?: string[]; 
  public get eapExcludePeergrp() {
    return cdktf.Fn.tolist(this.getListAttribute('eap_exclude_peergrp'));
  }
  public set eapExcludePeergrp(value: string[]) {
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

  // fec_base - computed: false, optional: true, required: false
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

  // fec_codec - computed: false, optional: true, required: false
  private _fecCodec?: string; 
  public get fecCodec() {
    return this.getStringAttribute('fec_codec');
  }
  public set fecCodec(value: string) {
    this._fecCodec = value;
  }
  public resetFecCodec() {
    this._fecCodec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fecCodecInput() {
    return this._fecCodec;
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

  // fec_health_check - computed: true, optional: true, required: false
  private _fecHealthCheck?: string[]; 
  public get fecHealthCheck() {
    return cdktf.Fn.tolist(this.getListAttribute('fec_health_check'));
  }
  public set fecHealthCheck(value: string[]) {
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

  // fec_mapping_profile - computed: true, optional: true, required: false
  private _fecMappingProfile?: string[]; 
  public get fecMappingProfile() {
    return cdktf.Fn.tolist(this.getListAttribute('fec_mapping_profile'));
  }
  public set fecMappingProfile(value: string[]) {
    this._fecMappingProfile = value;
  }
  public resetFecMappingProfile() {
    this._fecMappingProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fecMappingProfileInput() {
    return this._fecMappingProfile;
  }

  // fec_receive_timeout - computed: false, optional: true, required: false
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

  // fec_redundant - computed: false, optional: true, required: false
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

  // fec_send_timeout - computed: false, optional: true, required: false
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

  // forticlient_enforcement - computed: false, optional: true, required: false
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

  // group_authentication_secret - computed: true, optional: true, required: false
  private _groupAuthenticationSecret?: string[]; 
  public get groupAuthenticationSecret() {
    return cdktf.Fn.tolist(this.getListAttribute('group_authentication_secret'));
  }
  public set groupAuthenticationSecret(value: string[]) {
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

  // include_local_lan - computed: false, optional: true, required: false
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

  // interface - computed: true, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // internal_domain_list - computed: true, optional: true, required: false
  private _internalDomainList?: string[]; 
  public get internalDomainList() {
    return cdktf.Fn.tolist(this.getListAttribute('internal_domain_list'));
  }
  public set internalDomainList(value: string[]) {
    this._internalDomainList = value;
  }
  public resetInternalDomainList() {
    this._internalDomainList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalDomainListInput() {
    return this._internalDomainList;
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

  // ipv4_dns_server1 - computed: false, optional: true, required: false
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

  // ipv4_dns_server2 - computed: false, optional: true, required: false
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

  // ipv4_dns_server3 - computed: false, optional: true, required: false
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

  // ipv4_end_ip - computed: false, optional: true, required: false
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

  // ipv4_name - computed: true, optional: true, required: false
  private _ipv4Name?: string[]; 
  public get ipv4Name() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv4_name'));
  }
  public set ipv4Name(value: string[]) {
    this._ipv4Name = value;
  }
  public resetIpv4Name() {
    this._ipv4Name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NameInput() {
    return this._ipv4Name;
  }

  // ipv4_netmask - computed: false, optional: true, required: false
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

  // ipv4_split_exclude - computed: true, optional: true, required: false
  private _ipv4SplitExclude?: string[]; 
  public get ipv4SplitExclude() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv4_split_exclude'));
  }
  public set ipv4SplitExclude(value: string[]) {
    this._ipv4SplitExclude = value;
  }
  public resetIpv4SplitExclude() {
    this._ipv4SplitExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4SplitExcludeInput() {
    return this._ipv4SplitExclude;
  }

  // ipv4_split_include - computed: true, optional: true, required: false
  private _ipv4SplitInclude?: string[]; 
  public get ipv4SplitInclude() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv4_split_include'));
  }
  public set ipv4SplitInclude(value: string[]) {
    this._ipv4SplitInclude = value;
  }
  public resetIpv4SplitInclude() {
    this._ipv4SplitInclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4SplitIncludeInput() {
    return this._ipv4SplitInclude;
  }

  // ipv4_start_ip - computed: false, optional: true, required: false
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

  // ipv4_wins_server1 - computed: false, optional: true, required: false
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

  // ipv4_wins_server2 - computed: false, optional: true, required: false
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

  // ipv6_auto_linklocal - computed: false, optional: true, required: false
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

  // ipv6_dns_server1 - computed: false, optional: true, required: false
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

  // ipv6_dns_server2 - computed: false, optional: true, required: false
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

  // ipv6_dns_server3 - computed: false, optional: true, required: false
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

  // ipv6_end_ip - computed: false, optional: true, required: false
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

  // ipv6_name - computed: true, optional: true, required: false
  private _ipv6Name?: string[]; 
  public get ipv6Name() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv6_name'));
  }
  public set ipv6Name(value: string[]) {
    this._ipv6Name = value;
  }
  public resetIpv6Name() {
    this._ipv6Name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NameInput() {
    return this._ipv6Name;
  }

  // ipv6_prefix - computed: false, optional: true, required: false
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

  // ipv6_split_exclude - computed: true, optional: true, required: false
  private _ipv6SplitExclude?: string[]; 
  public get ipv6SplitExclude() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv6_split_exclude'));
  }
  public set ipv6SplitExclude(value: string[]) {
    this._ipv6SplitExclude = value;
  }
  public resetIpv6SplitExclude() {
    this._ipv6SplitExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SplitExcludeInput() {
    return this._ipv6SplitExclude;
  }

  // ipv6_split_include - computed: true, optional: true, required: false
  private _ipv6SplitInclude?: string[]; 
  public get ipv6SplitInclude() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv6_split_include'));
  }
  public set ipv6SplitInclude(value: string[]) {
    this._ipv6SplitInclude = value;
  }
  public resetIpv6SplitInclude() {
    this._ipv6SplitInclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SplitIncludeInput() {
    return this._ipv6SplitInclude;
  }

  // ipv6_start_ip - computed: false, optional: true, required: false
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

  // kms - computed: true, optional: true, required: false
  private _kms?: string[]; 
  public get kms() {
    return cdktf.Fn.tolist(this.getListAttribute('kms'));
  }
  public set kms(value: string[]) {
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

  // network_overlay - computed: false, optional: true, required: false
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

  // peer - computed: true, optional: true, required: false
  private _peer?: string[]; 
  public get peer() {
    return cdktf.Fn.tolist(this.getListAttribute('peer'));
  }
  public set peer(value: string[]) {
    this._peer = value;
  }
  public resetPeer() {
    this._peer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerInput() {
    return this._peer;
  }

  // peergrp - computed: true, optional: true, required: false
  private _peergrp?: string[]; 
  public get peergrp() {
    return cdktf.Fn.tolist(this.getListAttribute('peergrp'));
  }
  public set peergrp(value: string[]) {
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

  // peertype - computed: false, optional: true, required: false
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

  // ppk_secret - computed: true, optional: true, required: false
  private _ppkSecret?: string[]; 
  public get ppkSecret() {
    return cdktf.Fn.tolist(this.getListAttribute('ppk_secret'));
  }
  public set ppkSecret(value: string[]) {
    this._ppkSecret = value;
  }
  public resetPpkSecret() {
    this._ppkSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ppkSecretInput() {
    return this._ppkSecret;
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

  // proposal - computed: true, optional: true, required: false
  private _proposal?: string[]; 
  public get proposal() {
    return cdktf.Fn.tolist(this.getListAttribute('proposal'));
  }
  public set proposal(value: string[]) {
    this._proposal = value;
  }
  public resetProposal() {
    this._proposal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proposalInput() {
    return this._proposal;
  }

  // psksecret - computed: true, optional: true, required: false
  private _psksecret?: string[]; 
  public get psksecret() {
    return cdktf.Fn.tolist(this.getListAttribute('psksecret'));
  }
  public set psksecret(value: string[]) {
    this._psksecret = value;
  }
  public resetPsksecret() {
    this._psksecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get psksecretInput() {
    return this._psksecret;
  }

  // psksecret_remote - computed: true, optional: true, required: false
  private _psksecretRemote?: string[]; 
  public get psksecretRemote() {
    return cdktf.Fn.tolist(this.getListAttribute('psksecret_remote'));
  }
  public set psksecretRemote(value: string[]) {
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

  // qkd_profile - computed: true, optional: true, required: false
  private _qkdProfile?: string[]; 
  public get qkdProfile() {
    return cdktf.Fn.tolist(this.getListAttribute('qkd_profile'));
  }
  public set qkdProfile(value: string[]) {
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

  // remote_gw - computed: false, optional: true, required: false
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
  private _remoteGwSubnet?: string[]; 
  public get remoteGwSubnet() {
    return this.getListAttribute('remote_gw_subnet');
  }
  public set remoteGwSubnet(value: string[]) {
    this._remoteGwSubnet = value;
  }
  public resetRemoteGwSubnet() {
    this._remoteGwSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteGwSubnetInput() {
    return this._remoteGwSubnet;
  }

  // remote_gw_ztna_tags - computed: true, optional: true, required: false
  private _remoteGwZtnaTags?: string[]; 
  public get remoteGwZtnaTags() {
    return cdktf.Fn.tolist(this.getListAttribute('remote_gw_ztna_tags'));
  }
  public set remoteGwZtnaTags(value: string[]) {
    this._remoteGwZtnaTags = value;
  }
  public resetRemoteGwZtnaTags() {
    this._remoteGwZtnaTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteGwZtnaTagsInput() {
    return this._remoteGwZtnaTags;
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

  // send_cert_chain - computed: false, optional: true, required: false
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

  // shared_idle_timeout - computed: false, optional: true, required: false
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
  private _signatureHashAlg?: string[]; 
  public get signatureHashAlg() {
    return cdktf.Fn.tolist(this.getListAttribute('signature_hash_alg'));
  }
  public set signatureHashAlg(value: string[]) {
    this._signatureHashAlg = value;
  }
  public resetSignatureHashAlg() {
    this._signatureHashAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureHashAlgInput() {
    return this._signatureHashAlg;
  }

  // split_include_service - computed: true, optional: true, required: false
  private _splitIncludeService?: string[]; 
  public get splitIncludeService() {
    return cdktf.Fn.tolist(this.getListAttribute('split_include_service'));
  }
  public set splitIncludeService(value: string[]) {
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

  // transit_gateway - computed: false, optional: true, required: false
  private _transitGateway?: string; 
  public get transitGateway() {
    return this.getStringAttribute('transit_gateway');
  }
  public set transitGateway(value: string) {
    this._transitGateway = value;
  }
  public resetTransitGateway() {
    this._transitGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayInput() {
    return this._transitGateway;
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

  // type - computed: false, optional: true, required: false
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

  // unity_support - computed: false, optional: true, required: false
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

  // usrgrp - computed: true, optional: true, required: false
  private _usrgrp?: string[]; 
  public get usrgrp() {
    return cdktf.Fn.tolist(this.getListAttribute('usrgrp'));
  }
  public set usrgrp(value: string[]) {
    this._usrgrp = value;
  }
  public resetUsrgrp() {
    this._usrgrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usrgrpInput() {
    return this._usrgrp;
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

  // ipv4_exclude_range - computed: false, optional: true, required: false
  private _ipv4ExcludeRange = new VpnIpsecPhase1Ipv4ExcludeRangeList(this, "ipv4_exclude_range", false);
  public get ipv4ExcludeRange() {
    return this._ipv4ExcludeRange;
  }
  public putIpv4ExcludeRange(value: VpnIpsecPhase1Ipv4ExcludeRange[] | cdktf.IResolvable) {
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
  private _ipv6ExcludeRange = new VpnIpsecPhase1Ipv6ExcludeRangeList(this, "ipv6_exclude_range", false);
  public get ipv6ExcludeRange() {
    return this._ipv6ExcludeRange;
  }
  public putIpv6ExcludeRange(value: VpnIpsecPhase1Ipv6ExcludeRange[] | cdktf.IResolvable) {
    this._ipv6ExcludeRange.internalValue = value;
  }
  public resetIpv6ExcludeRange() {
    this._ipv6ExcludeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ExcludeRangeInput() {
    return this._ipv6ExcludeRange.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acct_verify: cdktf.stringToTerraform(this._acctVerify),
      add_gw_route: cdktf.stringToTerraform(this._addGwRoute),
      add_route: cdktf.stringToTerraform(this._addRoute),
      addke1: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addke1),
      addke2: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addke2),
      addke3: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addke3),
      addke4: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addke4),
      addke5: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addke5),
      addke6: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addke6),
      addke7: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addke7),
      assign_ip: cdktf.stringToTerraform(this._assignIp),
      assign_ip_from: cdktf.stringToTerraform(this._assignIpFrom),
      authmethod: cdktf.stringToTerraform(this._authmethod),
      authmethod_remote: cdktf.stringToTerraform(this._authmethodRemote),
      authpasswd: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authpasswd),
      authusr: cdktf.stringToTerraform(this._authusr),
      authusrgrp: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authusrgrp),
      auto_negotiate: cdktf.stringToTerraform(this._autoNegotiate),
      auto_transport_threshold: cdktf.numberToTerraform(this._autoTransportThreshold),
      azure_ad_autoconnect: cdktf.stringToTerraform(this._azureAdAutoconnect),
      backup_gateway: cdktf.listMapper(cdktf.stringToTerraform, false)(this._backupGateway),
      banner: cdktf.stringToTerraform(this._banner),
      cert_id_validation: cdktf.stringToTerraform(this._certIdValidation),
      cert_peer_username_strip: cdktf.stringToTerraform(this._certPeerUsernameStrip),
      cert_peer_username_validation: cdktf.stringToTerraform(this._certPeerUsernameValidation),
      cert_trust_store: cdktf.stringToTerraform(this._certTrustStore),
      certificate: cdktf.listMapper(cdktf.stringToTerraform, false)(this._certificate),
      childless_ike: cdktf.stringToTerraform(this._childlessIke),
      client_auto_negotiate: cdktf.stringToTerraform(this._clientAutoNegotiate),
      client_keep_alive: cdktf.stringToTerraform(this._clientKeepAlive),
      client_resume: cdktf.stringToTerraform(this._clientResume),
      client_resume_interval: cdktf.numberToTerraform(this._clientResumeInterval),
      comments: cdktf.stringToTerraform(this._comments),
      dev_id: cdktf.stringToTerraform(this._devId),
      dev_id_notification: cdktf.stringToTerraform(this._devIdNotification),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      dhcp6_ra_linkaddr: cdktf.stringToTerraform(this._dhcp6RaLinkaddr),
      dhcp_ra_giaddr: cdktf.stringToTerraform(this._dhcpRaGiaddr),
      dhgrp: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dhgrp),
      digital_signature_auth: cdktf.stringToTerraform(this._digitalSignatureAuth),
      distance: cdktf.numberToTerraform(this._distance),
      dns_mode: cdktf.stringToTerraform(this._dnsMode),
      domain: cdktf.stringToTerraform(this._domain),
      dpd: cdktf.stringToTerraform(this._dpd),
      dpd_retrycount: cdktf.numberToTerraform(this._dpdRetrycount),
      dpd_retryinterval: cdktf.listMapper(cdktf.numberToTerraform, false)(this._dpdRetryinterval),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      eap: cdktf.stringToTerraform(this._eap),
      eap_cert_auth: cdktf.stringToTerraform(this._eapCertAuth),
      eap_exclude_peergrp: cdktf.listMapper(cdktf.stringToTerraform, false)(this._eapExcludePeergrp),
      eap_identity: cdktf.stringToTerraform(this._eapIdentity),
      ems_sn_check: cdktf.stringToTerraform(this._emsSnCheck),
      enforce_unique_id: cdktf.stringToTerraform(this._enforceUniqueId),
      esn: cdktf.stringToTerraform(this._esn),
      exchange_fgt_device_id: cdktf.stringToTerraform(this._exchangeFgtDeviceId),
      fallback_tcp_threshold: cdktf.numberToTerraform(this._fallbackTcpThreshold),
      fec_base: cdktf.numberToTerraform(this._fecBase),
      fec_codec: cdktf.stringToTerraform(this._fecCodec),
      fec_egress: cdktf.stringToTerraform(this._fecEgress),
      fec_health_check: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fecHealthCheck),
      fec_ingress: cdktf.stringToTerraform(this._fecIngress),
      fec_mapping_profile: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fecMappingProfile),
      fec_receive_timeout: cdktf.numberToTerraform(this._fecReceiveTimeout),
      fec_redundant: cdktf.numberToTerraform(this._fecRedundant),
      fec_send_timeout: cdktf.numberToTerraform(this._fecSendTimeout),
      fgsp_sync: cdktf.stringToTerraform(this._fgspSync),
      forticlient_enforcement: cdktf.stringToTerraform(this._forticlientEnforcement),
      fortinet_esp: cdktf.stringToTerraform(this._fortinetEsp),
      fragmentation: cdktf.stringToTerraform(this._fragmentation),
      fragmentation_mtu: cdktf.numberToTerraform(this._fragmentationMtu),
      group_authentication: cdktf.stringToTerraform(this._groupAuthentication),
      group_authentication_secret: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupAuthenticationSecret),
      ha_sync_esp_seqno: cdktf.stringToTerraform(this._haSyncEspSeqno),
      id: cdktf.stringToTerraform(this._id),
      idle_timeout: cdktf.stringToTerraform(this._idleTimeout),
      idle_timeoutinterval: cdktf.numberToTerraform(this._idleTimeoutinterval),
      ike_version: cdktf.stringToTerraform(this._ikeVersion),
      inbound_dscp_copy: cdktf.stringToTerraform(this._inboundDscpCopy),
      include_local_lan: cdktf.stringToTerraform(this._includeLocalLan),
      interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interface),
      internal_domain_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internalDomainList),
      ip_delay_interval: cdktf.numberToTerraform(this._ipDelayInterval),
      ipv4_dns_server1: cdktf.stringToTerraform(this._ipv4DnsServer1),
      ipv4_dns_server2: cdktf.stringToTerraform(this._ipv4DnsServer2),
      ipv4_dns_server3: cdktf.stringToTerraform(this._ipv4DnsServer3),
      ipv4_end_ip: cdktf.stringToTerraform(this._ipv4EndIp),
      ipv4_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv4Name),
      ipv4_netmask: cdktf.stringToTerraform(this._ipv4Netmask),
      ipv4_split_exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv4SplitExclude),
      ipv4_split_include: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv4SplitInclude),
      ipv4_start_ip: cdktf.stringToTerraform(this._ipv4StartIp),
      ipv4_wins_server1: cdktf.stringToTerraform(this._ipv4WinsServer1),
      ipv4_wins_server2: cdktf.stringToTerraform(this._ipv4WinsServer2),
      ipv6_auto_linklocal: cdktf.stringToTerraform(this._ipv6AutoLinklocal),
      ipv6_dns_server1: cdktf.stringToTerraform(this._ipv6DnsServer1),
      ipv6_dns_server2: cdktf.stringToTerraform(this._ipv6DnsServer2),
      ipv6_dns_server3: cdktf.stringToTerraform(this._ipv6DnsServer3),
      ipv6_end_ip: cdktf.stringToTerraform(this._ipv6EndIp),
      ipv6_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv6Name),
      ipv6_prefix: cdktf.numberToTerraform(this._ipv6Prefix),
      ipv6_split_exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv6SplitExclude),
      ipv6_split_include: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv6SplitInclude),
      ipv6_start_ip: cdktf.stringToTerraform(this._ipv6StartIp),
      keepalive: cdktf.numberToTerraform(this._keepalive),
      keylife: cdktf.numberToTerraform(this._keylife),
      kms: cdktf.listMapper(cdktf.stringToTerraform, false)(this._kms),
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
      peer: cdktf.listMapper(cdktf.stringToTerraform, false)(this._peer),
      peergrp: cdktf.listMapper(cdktf.stringToTerraform, false)(this._peergrp),
      peerid: cdktf.stringToTerraform(this._peerid),
      peertype: cdktf.stringToTerraform(this._peertype),
      ppk: cdktf.stringToTerraform(this._ppk),
      ppk_identity: cdktf.stringToTerraform(this._ppkIdentity),
      ppk_secret: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ppkSecret),
      priority: cdktf.numberToTerraform(this._priority),
      proposal: cdktf.listMapper(cdktf.stringToTerraform, false)(this._proposal),
      psksecret: cdktf.listMapper(cdktf.stringToTerraform, false)(this._psksecret),
      psksecret_remote: cdktf.listMapper(cdktf.stringToTerraform, false)(this._psksecretRemote),
      qkd: cdktf.stringToTerraform(this._qkd),
      qkd_profile: cdktf.listMapper(cdktf.stringToTerraform, false)(this._qkdProfile),
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
      remote_gw_subnet: cdktf.listMapper(cdktf.stringToTerraform, false)(this._remoteGwSubnet),
      remote_gw_ztna_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._remoteGwZtnaTags),
      remotegw_ddns: cdktf.stringToTerraform(this._remotegwDdns),
      rsa_signature_format: cdktf.stringToTerraform(this._rsaSignatureFormat),
      rsa_signature_hash_override: cdktf.stringToTerraform(this._rsaSignatureHashOverride),
      save_password: cdktf.stringToTerraform(this._savePassword),
      send_cert_chain: cdktf.stringToTerraform(this._sendCertChain),
      shared_idle_timeout: cdktf.stringToTerraform(this._sharedIdleTimeout),
      signature_hash_alg: cdktf.listMapper(cdktf.stringToTerraform, false)(this._signatureHashAlg),
      split_include_service: cdktf.listMapper(cdktf.stringToTerraform, false)(this._splitIncludeService),
      suite_b: cdktf.stringToTerraform(this._suiteB),
      transit_gateway: cdktf.stringToTerraform(this._transitGateway),
      transport: cdktf.stringToTerraform(this._transport),
      type: cdktf.stringToTerraform(this._type),
      unity_support: cdktf.stringToTerraform(this._unitySupport),
      usrgrp: cdktf.listMapper(cdktf.stringToTerraform, false)(this._usrgrp),
      wizard_type: cdktf.stringToTerraform(this._wizardType),
      xauthtype: cdktf.stringToTerraform(this._xauthtype),
      ipv4_exclude_range: cdktf.listMapper(vpnIpsecPhase1Ipv4ExcludeRangeToTerraform, true)(this._ipv4ExcludeRange.internalValue),
      ipv6_exclude_range: cdktf.listMapper(vpnIpsecPhase1Ipv6ExcludeRangeToTerraform, true)(this._ipv6ExcludeRange.internalValue),
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
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addke1),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      addke2: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addke2),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      addke3: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addke3),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      addke4: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addke4),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      addke5: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addke5),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      addke6: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addke6),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      addke7: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addke7),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authpasswd),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      authusr: {
        value: cdktf.stringToHclTerraform(this._authusr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authusrgrp: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authusrgrp),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      backup_gateway: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._backupGateway),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      certificate: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._certificate),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
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
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dhgrp),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._dpdRetryinterval),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
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
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._eapExcludePeergrp),
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
        value: cdktf.stringToHclTerraform(this._fecCodec),
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
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fecHealthCheck),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      fec_ingress: {
        value: cdktf.stringToHclTerraform(this._fecIngress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fec_mapping_profile: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fecMappingProfile),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      group_authentication: {
        value: cdktf.stringToHclTerraform(this._groupAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_authentication_secret: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groupAuthenticationSecret),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      internal_domain_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internalDomainList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv4Name),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ipv4_netmask: {
        value: cdktf.stringToHclTerraform(this._ipv4Netmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_split_exclude: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv4SplitExclude),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ipv4_split_include: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv4SplitInclude),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv6Name),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ipv6_prefix: {
        value: cdktf.numberToHclTerraform(this._ipv6Prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_split_exclude: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv6SplitExclude),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ipv6_split_include: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv6SplitInclude),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._kms),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._peer),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      peergrp: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._peergrp),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ppkSecret),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proposal: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._proposal),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      psksecret: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._psksecret),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      psksecret_remote: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._psksecretRemote),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      qkd: {
        value: cdktf.stringToHclTerraform(this._qkd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qkd_profile: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._qkdProfile),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._remoteGwSubnet),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      remote_gw_ztna_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._remoteGwZtnaTags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._signatureHashAlg),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      split_include_service: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._splitIncludeService),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      suite_b: {
        value: cdktf.stringToHclTerraform(this._suiteB),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_gateway: {
        value: cdktf.stringToHclTerraform(this._transitGateway),
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
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._usrgrp),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      ipv4_exclude_range: {
        value: cdktf.listMapperHcl(vpnIpsecPhase1Ipv4ExcludeRangeToHclTerraform, true)(this._ipv4ExcludeRange.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnIpsecPhase1Ipv4ExcludeRangeList",
      },
      ipv6_exclude_range: {
        value: cdktf.listMapperHcl(vpnIpsecPhase1Ipv6ExcludeRangeToHclTerraform, true)(this._ipv6ExcludeRange.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnIpsecPhase1Ipv6ExcludeRangeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
