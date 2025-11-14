// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFirewallVip6DynamicMappingAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#add_nat64_route ObjectFirewallVip6DynamicMappingA#add_nat64_route}
  */
  readonly addNat64Route?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#adom ObjectFirewallVip6DynamicMappingA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#arp_reply ObjectFirewallVip6DynamicMappingA#arp_reply}
  */
  readonly arpReply?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#client_cert ObjectFirewallVip6DynamicMappingA#client_cert}
  */
  readonly clientCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#color ObjectFirewallVip6DynamicMappingA#color}
  */
  readonly color?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#comment ObjectFirewallVip6DynamicMappingA#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#dynamic_sort_subtable ObjectFirewallVip6DynamicMappingA#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#embedded_ipv4_address ObjectFirewallVip6DynamicMappingA#embedded_ipv4_address}
  */
  readonly embeddedIpv4Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#empty_cert_action ObjectFirewallVip6DynamicMappingA#empty_cert_action}
  */
  readonly emptyCertAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#extip ObjectFirewallVip6DynamicMappingA#extip}
  */
  readonly extip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#extport ObjectFirewallVip6DynamicMappingA#extport}
  */
  readonly extport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#fosid ObjectFirewallVip6DynamicMappingA#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#h2_support ObjectFirewallVip6DynamicMappingA#h2_support}
  */
  readonly h2Support?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#h3_support ObjectFirewallVip6DynamicMappingA#h3_support}
  */
  readonly h3Support?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#http_cookie_age ObjectFirewallVip6DynamicMappingA#http_cookie_age}
  */
  readonly httpCookieAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#http_cookie_domain ObjectFirewallVip6DynamicMappingA#http_cookie_domain}
  */
  readonly httpCookieDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#http_cookie_domain_from_host ObjectFirewallVip6DynamicMappingA#http_cookie_domain_from_host}
  */
  readonly httpCookieDomainFromHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#http_cookie_generation ObjectFirewallVip6DynamicMappingA#http_cookie_generation}
  */
  readonly httpCookieGeneration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#http_cookie_path ObjectFirewallVip6DynamicMappingA#http_cookie_path}
  */
  readonly httpCookiePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#http_cookie_share ObjectFirewallVip6DynamicMappingA#http_cookie_share}
  */
  readonly httpCookieShare?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#http_ip_header ObjectFirewallVip6DynamicMappingA#http_ip_header}
  */
  readonly httpIpHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#http_ip_header_name ObjectFirewallVip6DynamicMappingA#http_ip_header_name}
  */
  readonly httpIpHeaderName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#http_multiplex ObjectFirewallVip6DynamicMappingA#http_multiplex}
  */
  readonly httpMultiplex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#http_redirect ObjectFirewallVip6DynamicMappingA#http_redirect}
  */
  readonly httpRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#https_cookie_secure ObjectFirewallVip6DynamicMappingA#https_cookie_secure}
  */
  readonly httpsCookieSecure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#id ObjectFirewallVip6DynamicMappingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#ipv4_mappedip ObjectFirewallVip6DynamicMappingA#ipv4_mappedip}
  */
  readonly ipv4Mappedip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#ipv4_mappedport ObjectFirewallVip6DynamicMappingA#ipv4_mappedport}
  */
  readonly ipv4Mappedport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#ldb_method ObjectFirewallVip6DynamicMappingA#ldb_method}
  */
  readonly ldbMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#mappedip ObjectFirewallVip6DynamicMappingA#mappedip}
  */
  readonly mappedip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#mappedport ObjectFirewallVip6DynamicMappingA#mappedport}
  */
  readonly mappedport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#max_embryonic_connections ObjectFirewallVip6DynamicMappingA#max_embryonic_connections}
  */
  readonly maxEmbryonicConnections?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#monitor ObjectFirewallVip6DynamicMappingA#monitor}
  */
  readonly monitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#nat64 ObjectFirewallVip6DynamicMappingA#nat64}
  */
  readonly nat64?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#nat66 ObjectFirewallVip6DynamicMappingA#nat66}
  */
  readonly nat66?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#nat_source_vip ObjectFirewallVip6DynamicMappingA#nat_source_vip}
  */
  readonly natSourceVip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#ndp_reply ObjectFirewallVip6DynamicMappingA#ndp_reply}
  */
  readonly ndpReply?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#outlook_web_access ObjectFirewallVip6DynamicMappingA#outlook_web_access}
  */
  readonly outlookWebAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#persistence ObjectFirewallVip6DynamicMappingA#persistence}
  */
  readonly persistence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#portforward ObjectFirewallVip6DynamicMappingA#portforward}
  */
  readonly portforward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#protocol ObjectFirewallVip6DynamicMappingA#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#scopetype ObjectFirewallVip6DynamicMappingA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#server_type ObjectFirewallVip6DynamicMappingA#server_type}
  */
  readonly serverType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#src_filter ObjectFirewallVip6DynamicMappingA#src_filter}
  */
  readonly srcFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#src_vip_filter ObjectFirewallVip6DynamicMappingA#src_vip_filter}
  */
  readonly srcVipFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#ssl_accept_ffdhe_groups ObjectFirewallVip6DynamicMappingA#ssl_accept_ffdhe_groups}
  */
  readonly sslAcceptFfdheGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#ssl_algorithm ObjectFirewallVip6DynamicMappingA#ssl_algorithm}
  */
  readonly sslAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#ssl_certificate ObjectFirewallVip6DynamicMappingA#ssl_certificate}
  */
  readonly sslCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#ssl_client_fallback ObjectFirewallVip6DynamicMappingA#ssl_client_fallback}
  */
  readonly sslClientFallback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#ssl_client_rekey_count ObjectFirewallVip6DynamicMappingA#ssl_client_rekey_count}
  */
  readonly sslClientRekeyCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#ssl_client_renegotiation ObjectFirewallVip6DynamicMappingA#ssl_client_renegotiation}
  */
  readonly sslClientRenegotiation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#ssl_client_session_state_max ObjectFirewallVip6DynamicMappingA#ssl_client_session_state_max}
  */
  readonly sslClientSessionStateMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#ssl_client_session_state_timeout ObjectFirewallVip6DynamicMappingA#ssl_client_session_state_timeout}
  */
  readonly sslClientSessionStateTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#ssl_client_session_state_type ObjectFirewallVip6DynamicMappingA#ssl_client_session_state_type}
  */
  readonly sslClientSessionStateType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#ssl_dh_bits ObjectFirewallVip6DynamicMappingA#ssl_dh_bits}
  */
  readonly sslDhBits?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#ssl_hpkp ObjectFirewallVip6DynamicMappingA#ssl_hpkp}
  */
  readonly sslHpkp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#ssl_hpkp_age ObjectFirewallVip6DynamicMappingA#ssl_hpkp_age}
  */
  readonly sslHpkpAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#ssl_hpkp_backup ObjectFirewallVip6DynamicMappingA#ssl_hpkp_backup}
  */
  readonly sslHpkpBackup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#ssl_hpkp_include_subdomains ObjectFirewallVip6DynamicMappingA#ssl_hpkp_include_subdomains}
  */
  readonly sslHpkpIncludeSubdomains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#ssl_hpkp_primary ObjectFirewallVip6DynamicMappingA#ssl_hpkp_primary}
  */
  readonly sslHpkpPrimary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#ssl_hpkp_report_uri ObjectFirewallVip6DynamicMappingA#ssl_hpkp_report_uri}
  */
  readonly sslHpkpReportUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#ssl_hsts ObjectFirewallVip6DynamicMappingA#ssl_hsts}
  */
  readonly sslHsts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#ssl_hsts_age ObjectFirewallVip6DynamicMappingA#ssl_hsts_age}
  */
  readonly sslHstsAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#ssl_hsts_include_subdomains ObjectFirewallVip6DynamicMappingA#ssl_hsts_include_subdomains}
  */
  readonly sslHstsIncludeSubdomains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#ssl_http_location_conversion ObjectFirewallVip6DynamicMappingA#ssl_http_location_conversion}
  */
  readonly sslHttpLocationConversion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#ssl_http_match_host ObjectFirewallVip6DynamicMappingA#ssl_http_match_host}
  */
  readonly sslHttpMatchHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#ssl_max_version ObjectFirewallVip6DynamicMappingA#ssl_max_version}
  */
  readonly sslMaxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#ssl_min_version ObjectFirewallVip6DynamicMappingA#ssl_min_version}
  */
  readonly sslMinVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#ssl_mode ObjectFirewallVip6DynamicMappingA#ssl_mode}
  */
  readonly sslMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#ssl_pfs ObjectFirewallVip6DynamicMappingA#ssl_pfs}
  */
  readonly sslPfs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#ssl_send_empty_frags ObjectFirewallVip6DynamicMappingA#ssl_send_empty_frags}
  */
  readonly sslSendEmptyFrags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#ssl_server_algorithm ObjectFirewallVip6DynamicMappingA#ssl_server_algorithm}
  */
  readonly sslServerAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#ssl_server_max_version ObjectFirewallVip6DynamicMappingA#ssl_server_max_version}
  */
  readonly sslServerMaxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#ssl_server_min_version ObjectFirewallVip6DynamicMappingA#ssl_server_min_version}
  */
  readonly sslServerMinVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#ssl_server_renegotiation ObjectFirewallVip6DynamicMappingA#ssl_server_renegotiation}
  */
  readonly sslServerRenegotiation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#ssl_server_session_state_max ObjectFirewallVip6DynamicMappingA#ssl_server_session_state_max}
  */
  readonly sslServerSessionStateMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#ssl_server_session_state_timeout ObjectFirewallVip6DynamicMappingA#ssl_server_session_state_timeout}
  */
  readonly sslServerSessionStateTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#ssl_server_session_state_type ObjectFirewallVip6DynamicMappingA#ssl_server_session_state_type}
  */
  readonly sslServerSessionStateType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#type ObjectFirewallVip6DynamicMappingA#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#user_agent_detect ObjectFirewallVip6DynamicMappingA#user_agent_detect}
  */
  readonly userAgentDetect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#uuid ObjectFirewallVip6DynamicMappingA#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#vip6 ObjectFirewallVip6DynamicMappingA#vip6}
  */
  readonly vip6: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#weblogic_server ObjectFirewallVip6DynamicMappingA#weblogic_server}
  */
  readonly weblogicServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#websphere_server ObjectFirewallVip6DynamicMappingA#websphere_server}
  */
  readonly websphereServer?: string;
  /**
  * _scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#_scope ObjectFirewallVip6DynamicMappingA#_scope}
  */
  readonly scope?: ObjectFirewallVip6DynamicMappingScopeA[] | cdktf.IResolvable;
  /**
  * realservers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#realservers ObjectFirewallVip6DynamicMappingA#realservers}
  */
  readonly realservers?: ObjectFirewallVip6DynamicMappingRealserversA[] | cdktf.IResolvable;
  /**
  * ssl_cipher_suites block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#ssl_cipher_suites ObjectFirewallVip6DynamicMappingA#ssl_cipher_suites}
  */
  readonly sslCipherSuites?: ObjectFirewallVip6DynamicMappingSslCipherSuitesA[] | cdktf.IResolvable;
}
export interface ObjectFirewallVip6DynamicMappingScopeA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#name ObjectFirewallVip6DynamicMappingA#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#vdom ObjectFirewallVip6DynamicMappingA#vdom}
  */
  readonly vdom?: string;
}

export function objectFirewallVip6DynamicMappingScopeAToTerraform(struct?: ObjectFirewallVip6DynamicMappingScopeA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    vdom: cdktf.stringToTerraform(struct!.vdom),
  }
}


export function objectFirewallVip6DynamicMappingScopeAToHclTerraform(struct?: ObjectFirewallVip6DynamicMappingScopeA | cdktf.IResolvable): any {
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

export class ObjectFirewallVip6DynamicMappingScopeAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallVip6DynamicMappingScopeA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectFirewallVip6DynamicMappingScopeA | cdktf.IResolvable | undefined) {
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

export class ObjectFirewallVip6DynamicMappingScopeAList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallVip6DynamicMappingScopeA[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallVip6DynamicMappingScopeAOutputReference {
    return new ObjectFirewallVip6DynamicMappingScopeAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFirewallVip6DynamicMappingRealserversA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#client_ip ObjectFirewallVip6DynamicMappingA#client_ip}
  */
  readonly clientIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#healthcheck ObjectFirewallVip6DynamicMappingA#healthcheck}
  */
  readonly healthcheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#holddown_interval ObjectFirewallVip6DynamicMappingA#holddown_interval}
  */
  readonly holddownInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#http_host ObjectFirewallVip6DynamicMappingA#http_host}
  */
  readonly httpHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#id ObjectFirewallVip6DynamicMappingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#ip ObjectFirewallVip6DynamicMappingA#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#max_connections ObjectFirewallVip6DynamicMappingA#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#monitor ObjectFirewallVip6DynamicMappingA#monitor}
  */
  readonly monitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#port ObjectFirewallVip6DynamicMappingA#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#status ObjectFirewallVip6DynamicMappingA#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#translate_host ObjectFirewallVip6DynamicMappingA#translate_host}
  */
  readonly translateHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#verify_cert ObjectFirewallVip6DynamicMappingA#verify_cert}
  */
  readonly verifyCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#weight ObjectFirewallVip6DynamicMappingA#weight}
  */
  readonly weight?: number;
}

export function objectFirewallVip6DynamicMappingRealserversAToTerraform(struct?: ObjectFirewallVip6DynamicMappingRealserversA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_ip: cdktf.stringToTerraform(struct!.clientIp),
    healthcheck: cdktf.stringToTerraform(struct!.healthcheck),
    holddown_interval: cdktf.numberToTerraform(struct!.holddownInterval),
    http_host: cdktf.stringToTerraform(struct!.httpHost),
    id: cdktf.numberToTerraform(struct!.id),
    ip: cdktf.stringToTerraform(struct!.ip),
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    monitor: cdktf.stringToTerraform(struct!.monitor),
    port: cdktf.numberToTerraform(struct!.port),
    status: cdktf.stringToTerraform(struct!.status),
    translate_host: cdktf.stringToTerraform(struct!.translateHost),
    verify_cert: cdktf.stringToTerraform(struct!.verifyCert),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function objectFirewallVip6DynamicMappingRealserversAToHclTerraform(struct?: ObjectFirewallVip6DynamicMappingRealserversA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_ip: {
      value: cdktf.stringToHclTerraform(struct!.clientIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    healthcheck: {
      value: cdktf.stringToHclTerraform(struct!.healthcheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    holddown_interval: {
      value: cdktf.numberToHclTerraform(struct!.holddownInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_host: {
      value: cdktf.stringToHclTerraform(struct!.httpHost),
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
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monitor: {
      value: cdktf.stringToHclTerraform(struct!.monitor),
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
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translate_host: {
      value: cdktf.stringToHclTerraform(struct!.translateHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_cert: {
      value: cdktf.stringToHclTerraform(struct!.verifyCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallVip6DynamicMappingRealserversAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallVip6DynamicMappingRealserversA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIp = this._clientIp;
    }
    if (this._healthcheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthcheck = this._healthcheck;
    }
    if (this._holddownInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.holddownInterval = this._holddownInterval;
    }
    if (this._httpHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHost = this._httpHost;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._maxConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnections = this._maxConnections;
    }
    if (this._monitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitor = this._monitor;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._translateHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.translateHost = this._translateHost;
    }
    if (this._verifyCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyCert = this._verifyCert;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallVip6DynamicMappingRealserversA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientIp = undefined;
      this._healthcheck = undefined;
      this._holddownInterval = undefined;
      this._httpHost = undefined;
      this._id = undefined;
      this._ip = undefined;
      this._maxConnections = undefined;
      this._monitor = undefined;
      this._port = undefined;
      this._status = undefined;
      this._translateHost = undefined;
      this._verifyCert = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientIp = value.clientIp;
      this._healthcheck = value.healthcheck;
      this._holddownInterval = value.holddownInterval;
      this._httpHost = value.httpHost;
      this._id = value.id;
      this._ip = value.ip;
      this._maxConnections = value.maxConnections;
      this._monitor = value.monitor;
      this._port = value.port;
      this._status = value.status;
      this._translateHost = value.translateHost;
      this._verifyCert = value.verifyCert;
      this._weight = value.weight;
    }
  }

  // client_ip - computed: false, optional: true, required: false
  private _clientIp?: string; 
  public get clientIp() {
    return this.getStringAttribute('client_ip');
  }
  public set clientIp(value: string) {
    this._clientIp = value;
  }
  public resetClientIp() {
    this._clientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpInput() {
    return this._clientIp;
  }

  // healthcheck - computed: true, optional: true, required: false
  private _healthcheck?: string; 
  public get healthcheck() {
    return this.getStringAttribute('healthcheck');
  }
  public set healthcheck(value: string) {
    this._healthcheck = value;
  }
  public resetHealthcheck() {
    this._healthcheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthcheckInput() {
    return this._healthcheck;
  }

  // holddown_interval - computed: true, optional: true, required: false
  private _holddownInterval?: number; 
  public get holddownInterval() {
    return this.getNumberAttribute('holddown_interval');
  }
  public set holddownInterval(value: number) {
    this._holddownInterval = value;
  }
  public resetHolddownInterval() {
    this._holddownInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holddownIntervalInput() {
    return this._holddownInterval;
  }

  // http_host - computed: false, optional: true, required: false
  private _httpHost?: string; 
  public get httpHost() {
    return this.getStringAttribute('http_host');
  }
  public set httpHost(value: string) {
    this._httpHost = value;
  }
  public resetHttpHost() {
    this._httpHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHostInput() {
    return this._httpHost;
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

  // max_connections - computed: false, optional: true, required: false
  private _maxConnections?: number; 
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }
  public set maxConnections(value: number) {
    this._maxConnections = value;
  }
  public resetMaxConnections() {
    this._maxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor?: string; 
  public get monitor() {
    return this.getStringAttribute('monitor');
  }
  public set monitor(value: string) {
    this._monitor = value;
  }
  public resetMonitor() {
    this._monitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor;
  }

  // port - computed: false, optional: true, required: false
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

  // translate_host - computed: false, optional: true, required: false
  private _translateHost?: string; 
  public get translateHost() {
    return this.getStringAttribute('translate_host');
  }
  public set translateHost(value: string) {
    this._translateHost = value;
  }
  public resetTranslateHost() {
    this._translateHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translateHostInput() {
    return this._translateHost;
  }

  // verify_cert - computed: false, optional: true, required: false
  private _verifyCert?: string; 
  public get verifyCert() {
    return this.getStringAttribute('verify_cert');
  }
  public set verifyCert(value: string) {
    this._verifyCert = value;
  }
  public resetVerifyCert() {
    this._verifyCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyCertInput() {
    return this._verifyCert;
  }

  // weight - computed: true, optional: true, required: false
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
}

export class ObjectFirewallVip6DynamicMappingRealserversAList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallVip6DynamicMappingRealserversA[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallVip6DynamicMappingRealserversAOutputReference {
    return new ObjectFirewallVip6DynamicMappingRealserversAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFirewallVip6DynamicMappingSslCipherSuitesA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#cipher ObjectFirewallVip6DynamicMappingA#cipher}
  */
  readonly cipher?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#priority ObjectFirewallVip6DynamicMappingA#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#versions ObjectFirewallVip6DynamicMappingA#versions}
  */
  readonly versions?: string[];
}

export function objectFirewallVip6DynamicMappingSslCipherSuitesAToTerraform(struct?: ObjectFirewallVip6DynamicMappingSslCipherSuitesA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher: cdktf.stringToTerraform(struct!.cipher),
    priority: cdktf.numberToTerraform(struct!.priority),
    versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.versions),
  }
}


export function objectFirewallVip6DynamicMappingSslCipherSuitesAToHclTerraform(struct?: ObjectFirewallVip6DynamicMappingSslCipherSuitesA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cipher: {
      value: cdktf.stringToHclTerraform(struct!.cipher),
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
    versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.versions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallVip6DynamicMappingSslCipherSuitesAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallVip6DynamicMappingSslCipherSuitesA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipher !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipher = this._cipher;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._versions !== undefined) {
      hasAnyValues = true;
      internalValueResult.versions = this._versions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallVip6DynamicMappingSslCipherSuitesA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cipher = undefined;
      this._priority = undefined;
      this._versions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cipher = value.cipher;
      this._priority = value.priority;
      this._versions = value.versions;
    }
  }

  // cipher - computed: false, optional: true, required: false
  private _cipher?: string; 
  public get cipher() {
    return this.getStringAttribute('cipher');
  }
  public set cipher(value: string) {
    this._cipher = value;
  }
  public resetCipher() {
    this._cipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherInput() {
    return this._cipher;
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

  // versions - computed: true, optional: true, required: false
  private _versions?: string[]; 
  public get versions() {
    return cdktf.Fn.tolist(this.getListAttribute('versions'));
  }
  public set versions(value: string[]) {
    this._versions = value;
  }
  public resetVersions() {
    this._versions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionsInput() {
    return this._versions;
  }
}

export class ObjectFirewallVip6DynamicMappingSslCipherSuitesAList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallVip6DynamicMappingSslCipherSuitesA[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallVip6DynamicMappingSslCipherSuitesAOutputReference {
    return new ObjectFirewallVip6DynamicMappingSslCipherSuitesAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping fortimanager_object_firewall_vip6_dynamic_mapping}
*/
export class ObjectFirewallVip6DynamicMappingA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_firewall_vip6_dynamic_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFirewallVip6DynamicMappingA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFirewallVip6DynamicMappingA to import
  * @param importFromId The id of the existing ObjectFirewallVip6DynamicMappingA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFirewallVip6DynamicMappingA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_firewall_vip6_dynamic_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip6_dynamic_mapping fortimanager_object_firewall_vip6_dynamic_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFirewallVip6DynamicMappingAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectFirewallVip6DynamicMappingAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_firewall_vip6_dynamic_mapping',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addNat64Route = config.addNat64Route;
    this._adom = config.adom;
    this._arpReply = config.arpReply;
    this._clientCert = config.clientCert;
    this._color = config.color;
    this._comment = config.comment;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._embeddedIpv4Address = config.embeddedIpv4Address;
    this._emptyCertAction = config.emptyCertAction;
    this._extip = config.extip;
    this._extport = config.extport;
    this._fosid = config.fosid;
    this._h2Support = config.h2Support;
    this._h3Support = config.h3Support;
    this._httpCookieAge = config.httpCookieAge;
    this._httpCookieDomain = config.httpCookieDomain;
    this._httpCookieDomainFromHost = config.httpCookieDomainFromHost;
    this._httpCookieGeneration = config.httpCookieGeneration;
    this._httpCookiePath = config.httpCookiePath;
    this._httpCookieShare = config.httpCookieShare;
    this._httpIpHeader = config.httpIpHeader;
    this._httpIpHeaderName = config.httpIpHeaderName;
    this._httpMultiplex = config.httpMultiplex;
    this._httpRedirect = config.httpRedirect;
    this._httpsCookieSecure = config.httpsCookieSecure;
    this._id = config.id;
    this._ipv4Mappedip = config.ipv4Mappedip;
    this._ipv4Mappedport = config.ipv4Mappedport;
    this._ldbMethod = config.ldbMethod;
    this._mappedip = config.mappedip;
    this._mappedport = config.mappedport;
    this._maxEmbryonicConnections = config.maxEmbryonicConnections;
    this._monitor = config.monitor;
    this._nat64 = config.nat64;
    this._nat66 = config.nat66;
    this._natSourceVip = config.natSourceVip;
    this._ndpReply = config.ndpReply;
    this._outlookWebAccess = config.outlookWebAccess;
    this._persistence = config.persistence;
    this._portforward = config.portforward;
    this._protocol = config.protocol;
    this._scopetype = config.scopetype;
    this._serverType = config.serverType;
    this._srcFilter = config.srcFilter;
    this._srcVipFilter = config.srcVipFilter;
    this._sslAcceptFfdheGroups = config.sslAcceptFfdheGroups;
    this._sslAlgorithm = config.sslAlgorithm;
    this._sslCertificate = config.sslCertificate;
    this._sslClientFallback = config.sslClientFallback;
    this._sslClientRekeyCount = config.sslClientRekeyCount;
    this._sslClientRenegotiation = config.sslClientRenegotiation;
    this._sslClientSessionStateMax = config.sslClientSessionStateMax;
    this._sslClientSessionStateTimeout = config.sslClientSessionStateTimeout;
    this._sslClientSessionStateType = config.sslClientSessionStateType;
    this._sslDhBits = config.sslDhBits;
    this._sslHpkp = config.sslHpkp;
    this._sslHpkpAge = config.sslHpkpAge;
    this._sslHpkpBackup = config.sslHpkpBackup;
    this._sslHpkpIncludeSubdomains = config.sslHpkpIncludeSubdomains;
    this._sslHpkpPrimary = config.sslHpkpPrimary;
    this._sslHpkpReportUri = config.sslHpkpReportUri;
    this._sslHsts = config.sslHsts;
    this._sslHstsAge = config.sslHstsAge;
    this._sslHstsIncludeSubdomains = config.sslHstsIncludeSubdomains;
    this._sslHttpLocationConversion = config.sslHttpLocationConversion;
    this._sslHttpMatchHost = config.sslHttpMatchHost;
    this._sslMaxVersion = config.sslMaxVersion;
    this._sslMinVersion = config.sslMinVersion;
    this._sslMode = config.sslMode;
    this._sslPfs = config.sslPfs;
    this._sslSendEmptyFrags = config.sslSendEmptyFrags;
    this._sslServerAlgorithm = config.sslServerAlgorithm;
    this._sslServerMaxVersion = config.sslServerMaxVersion;
    this._sslServerMinVersion = config.sslServerMinVersion;
    this._sslServerRenegotiation = config.sslServerRenegotiation;
    this._sslServerSessionStateMax = config.sslServerSessionStateMax;
    this._sslServerSessionStateTimeout = config.sslServerSessionStateTimeout;
    this._sslServerSessionStateType = config.sslServerSessionStateType;
    this._type = config.type;
    this._userAgentDetect = config.userAgentDetect;
    this._uuid = config.uuid;
    this._vip6 = config.vip6;
    this._weblogicServer = config.weblogicServer;
    this._websphereServer = config.websphereServer;
    this._scope.internalValue = config.scope;
    this._realservers.internalValue = config.realservers;
    this._sslCipherSuites.internalValue = config.sslCipherSuites;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_nat64_route - computed: true, optional: true, required: false
  private _addNat64Route?: string; 
  public get addNat64Route() {
    return this.getStringAttribute('add_nat64_route');
  }
  public set addNat64Route(value: string) {
    this._addNat64Route = value;
  }
  public resetAddNat64Route() {
    this._addNat64Route = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addNat64RouteInput() {
    return this._addNat64Route;
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

  // arp_reply - computed: true, optional: true, required: false
  private _arpReply?: string; 
  public get arpReply() {
    return this.getStringAttribute('arp_reply');
  }
  public set arpReply(value: string) {
    this._arpReply = value;
  }
  public resetArpReply() {
    this._arpReply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpReplyInput() {
    return this._arpReply;
  }

  // client_cert - computed: true, optional: true, required: false
  private _clientCert?: string; 
  public get clientCert() {
    return this.getStringAttribute('client_cert');
  }
  public set clientCert(value: string) {
    this._clientCert = value;
  }
  public resetClientCert() {
    this._clientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertInput() {
    return this._clientCert;
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

  // embedded_ipv4_address - computed: true, optional: true, required: false
  private _embeddedIpv4Address?: string; 
  public get embeddedIpv4Address() {
    return this.getStringAttribute('embedded_ipv4_address');
  }
  public set embeddedIpv4Address(value: string) {
    this._embeddedIpv4Address = value;
  }
  public resetEmbeddedIpv4Address() {
    this._embeddedIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddedIpv4AddressInput() {
    return this._embeddedIpv4Address;
  }

  // empty_cert_action - computed: true, optional: true, required: false
  private _emptyCertAction?: string; 
  public get emptyCertAction() {
    return this.getStringAttribute('empty_cert_action');
  }
  public set emptyCertAction(value: string) {
    this._emptyCertAction = value;
  }
  public resetEmptyCertAction() {
    this._emptyCertAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyCertActionInput() {
    return this._emptyCertAction;
  }

  // extip - computed: false, optional: true, required: false
  private _extip?: string; 
  public get extip() {
    return this.getStringAttribute('extip');
  }
  public set extip(value: string) {
    this._extip = value;
  }
  public resetExtip() {
    this._extip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extipInput() {
    return this._extip;
  }

  // extport - computed: true, optional: true, required: false
  private _extport?: string; 
  public get extport() {
    return this.getStringAttribute('extport');
  }
  public set extport(value: string) {
    this._extport = value;
  }
  public resetExtport() {
    this._extport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extportInput() {
    return this._extport;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
  }

  // h2_support - computed: true, optional: true, required: false
  private _h2Support?: string; 
  public get h2Support() {
    return this.getStringAttribute('h2_support');
  }
  public set h2Support(value: string) {
    this._h2Support = value;
  }
  public resetH2Support() {
    this._h2Support = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h2SupportInput() {
    return this._h2Support;
  }

  // h3_support - computed: true, optional: true, required: false
  private _h3Support?: string; 
  public get h3Support() {
    return this.getStringAttribute('h3_support');
  }
  public set h3Support(value: string) {
    this._h3Support = value;
  }
  public resetH3Support() {
    this._h3Support = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h3SupportInput() {
    return this._h3Support;
  }

  // http_cookie_age - computed: true, optional: true, required: false
  private _httpCookieAge?: number; 
  public get httpCookieAge() {
    return this.getNumberAttribute('http_cookie_age');
  }
  public set httpCookieAge(value: number) {
    this._httpCookieAge = value;
  }
  public resetHttpCookieAge() {
    this._httpCookieAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCookieAgeInput() {
    return this._httpCookieAge;
  }

  // http_cookie_domain - computed: false, optional: true, required: false
  private _httpCookieDomain?: string; 
  public get httpCookieDomain() {
    return this.getStringAttribute('http_cookie_domain');
  }
  public set httpCookieDomain(value: string) {
    this._httpCookieDomain = value;
  }
  public resetHttpCookieDomain() {
    this._httpCookieDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCookieDomainInput() {
    return this._httpCookieDomain;
  }

  // http_cookie_domain_from_host - computed: true, optional: true, required: false
  private _httpCookieDomainFromHost?: string; 
  public get httpCookieDomainFromHost() {
    return this.getStringAttribute('http_cookie_domain_from_host');
  }
  public set httpCookieDomainFromHost(value: string) {
    this._httpCookieDomainFromHost = value;
  }
  public resetHttpCookieDomainFromHost() {
    this._httpCookieDomainFromHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCookieDomainFromHostInput() {
    return this._httpCookieDomainFromHost;
  }

  // http_cookie_generation - computed: false, optional: true, required: false
  private _httpCookieGeneration?: number; 
  public get httpCookieGeneration() {
    return this.getNumberAttribute('http_cookie_generation');
  }
  public set httpCookieGeneration(value: number) {
    this._httpCookieGeneration = value;
  }
  public resetHttpCookieGeneration() {
    this._httpCookieGeneration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCookieGenerationInput() {
    return this._httpCookieGeneration;
  }

  // http_cookie_path - computed: false, optional: true, required: false
  private _httpCookiePath?: string; 
  public get httpCookiePath() {
    return this.getStringAttribute('http_cookie_path');
  }
  public set httpCookiePath(value: string) {
    this._httpCookiePath = value;
  }
  public resetHttpCookiePath() {
    this._httpCookiePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCookiePathInput() {
    return this._httpCookiePath;
  }

  // http_cookie_share - computed: true, optional: true, required: false
  private _httpCookieShare?: string; 
  public get httpCookieShare() {
    return this.getStringAttribute('http_cookie_share');
  }
  public set httpCookieShare(value: string) {
    this._httpCookieShare = value;
  }
  public resetHttpCookieShare() {
    this._httpCookieShare = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCookieShareInput() {
    return this._httpCookieShare;
  }

  // http_ip_header - computed: true, optional: true, required: false
  private _httpIpHeader?: string; 
  public get httpIpHeader() {
    return this.getStringAttribute('http_ip_header');
  }
  public set httpIpHeader(value: string) {
    this._httpIpHeader = value;
  }
  public resetHttpIpHeader() {
    this._httpIpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpIpHeaderInput() {
    return this._httpIpHeader;
  }

  // http_ip_header_name - computed: false, optional: true, required: false
  private _httpIpHeaderName?: string; 
  public get httpIpHeaderName() {
    return this.getStringAttribute('http_ip_header_name');
  }
  public set httpIpHeaderName(value: string) {
    this._httpIpHeaderName = value;
  }
  public resetHttpIpHeaderName() {
    this._httpIpHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpIpHeaderNameInput() {
    return this._httpIpHeaderName;
  }

  // http_multiplex - computed: true, optional: true, required: false
  private _httpMultiplex?: string; 
  public get httpMultiplex() {
    return this.getStringAttribute('http_multiplex');
  }
  public set httpMultiplex(value: string) {
    this._httpMultiplex = value;
  }
  public resetHttpMultiplex() {
    this._httpMultiplex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMultiplexInput() {
    return this._httpMultiplex;
  }

  // http_redirect - computed: true, optional: true, required: false
  private _httpRedirect?: string; 
  public get httpRedirect() {
    return this.getStringAttribute('http_redirect');
  }
  public set httpRedirect(value: string) {
    this._httpRedirect = value;
  }
  public resetHttpRedirect() {
    this._httpRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRedirectInput() {
    return this._httpRedirect;
  }

  // https_cookie_secure - computed: true, optional: true, required: false
  private _httpsCookieSecure?: string; 
  public get httpsCookieSecure() {
    return this.getStringAttribute('https_cookie_secure');
  }
  public set httpsCookieSecure(value: string) {
    this._httpsCookieSecure = value;
  }
  public resetHttpsCookieSecure() {
    this._httpsCookieSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsCookieSecureInput() {
    return this._httpsCookieSecure;
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

  // ipv4_mappedip - computed: false, optional: true, required: false
  private _ipv4Mappedip?: string; 
  public get ipv4Mappedip() {
    return this.getStringAttribute('ipv4_mappedip');
  }
  public set ipv4Mappedip(value: string) {
    this._ipv4Mappedip = value;
  }
  public resetIpv4Mappedip() {
    this._ipv4Mappedip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4MappedipInput() {
    return this._ipv4Mappedip;
  }

  // ipv4_mappedport - computed: true, optional: true, required: false
  private _ipv4Mappedport?: string; 
  public get ipv4Mappedport() {
    return this.getStringAttribute('ipv4_mappedport');
  }
  public set ipv4Mappedport(value: string) {
    this._ipv4Mappedport = value;
  }
  public resetIpv4Mappedport() {
    this._ipv4Mappedport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4MappedportInput() {
    return this._ipv4Mappedport;
  }

  // ldb_method - computed: true, optional: true, required: false
  private _ldbMethod?: string; 
  public get ldbMethod() {
    return this.getStringAttribute('ldb_method');
  }
  public set ldbMethod(value: string) {
    this._ldbMethod = value;
  }
  public resetLdbMethod() {
    this._ldbMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldbMethodInput() {
    return this._ldbMethod;
  }

  // mappedip - computed: false, optional: true, required: false
  private _mappedip?: string; 
  public get mappedip() {
    return this.getStringAttribute('mappedip');
  }
  public set mappedip(value: string) {
    this._mappedip = value;
  }
  public resetMappedip() {
    this._mappedip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappedipInput() {
    return this._mappedip;
  }

  // mappedport - computed: true, optional: true, required: false
  private _mappedport?: string; 
  public get mappedport() {
    return this.getStringAttribute('mappedport');
  }
  public set mappedport(value: string) {
    this._mappedport = value;
  }
  public resetMappedport() {
    this._mappedport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappedportInput() {
    return this._mappedport;
  }

  // max_embryonic_connections - computed: true, optional: true, required: false
  private _maxEmbryonicConnections?: number; 
  public get maxEmbryonicConnections() {
    return this.getNumberAttribute('max_embryonic_connections');
  }
  public set maxEmbryonicConnections(value: number) {
    this._maxEmbryonicConnections = value;
  }
  public resetMaxEmbryonicConnections() {
    this._maxEmbryonicConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEmbryonicConnectionsInput() {
    return this._maxEmbryonicConnections;
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor?: string; 
  public get monitor() {
    return this.getStringAttribute('monitor');
  }
  public set monitor(value: string) {
    this._monitor = value;
  }
  public resetMonitor() {
    this._monitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor;
  }

  // nat64 - computed: true, optional: true, required: false
  private _nat64?: string; 
  public get nat64() {
    return this.getStringAttribute('nat64');
  }
  public set nat64(value: string) {
    this._nat64 = value;
  }
  public resetNat64() {
    this._nat64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64Input() {
    return this._nat64;
  }

  // nat66 - computed: true, optional: true, required: false
  private _nat66?: string; 
  public get nat66() {
    return this.getStringAttribute('nat66');
  }
  public set nat66(value: string) {
    this._nat66 = value;
  }
  public resetNat66() {
    this._nat66 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat66Input() {
    return this._nat66;
  }

  // nat_source_vip - computed: true, optional: true, required: false
  private _natSourceVip?: string; 
  public get natSourceVip() {
    return this.getStringAttribute('nat_source_vip');
  }
  public set natSourceVip(value: string) {
    this._natSourceVip = value;
  }
  public resetNatSourceVip() {
    this._natSourceVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natSourceVipInput() {
    return this._natSourceVip;
  }

  // ndp_reply - computed: true, optional: true, required: false
  private _ndpReply?: string; 
  public get ndpReply() {
    return this.getStringAttribute('ndp_reply');
  }
  public set ndpReply(value: string) {
    this._ndpReply = value;
  }
  public resetNdpReply() {
    this._ndpReply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndpReplyInput() {
    return this._ndpReply;
  }

  // outlook_web_access - computed: true, optional: true, required: false
  private _outlookWebAccess?: string; 
  public get outlookWebAccess() {
    return this.getStringAttribute('outlook_web_access');
  }
  public set outlookWebAccess(value: string) {
    this._outlookWebAccess = value;
  }
  public resetOutlookWebAccess() {
    this._outlookWebAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outlookWebAccessInput() {
    return this._outlookWebAccess;
  }

  // persistence - computed: true, optional: true, required: false
  private _persistence?: string; 
  public get persistence() {
    return this.getStringAttribute('persistence');
  }
  public set persistence(value: string) {
    this._persistence = value;
  }
  public resetPersistence() {
    this._persistence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceInput() {
    return this._persistence;
  }

  // portforward - computed: true, optional: true, required: false
  private _portforward?: string; 
  public get portforward() {
    return this.getStringAttribute('portforward');
  }
  public set portforward(value: string) {
    this._portforward = value;
  }
  public resetPortforward() {
    this._portforward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portforwardInput() {
    return this._portforward;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
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

  // server_type - computed: false, optional: true, required: false
  private _serverType?: string; 
  public get serverType() {
    return this.getStringAttribute('server_type');
  }
  public set serverType(value: string) {
    this._serverType = value;
  }
  public resetServerType() {
    this._serverType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTypeInput() {
    return this._serverType;
  }

  // src_filter - computed: true, optional: true, required: false
  private _srcFilter?: string[]; 
  public get srcFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('src_filter'));
  }
  public set srcFilter(value: string[]) {
    this._srcFilter = value;
  }
  public resetSrcFilter() {
    this._srcFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFilterInput() {
    return this._srcFilter;
  }

  // src_vip_filter - computed: true, optional: true, required: false
  private _srcVipFilter?: string; 
  public get srcVipFilter() {
    return this.getStringAttribute('src_vip_filter');
  }
  public set srcVipFilter(value: string) {
    this._srcVipFilter = value;
  }
  public resetSrcVipFilter() {
    this._srcVipFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcVipFilterInput() {
    return this._srcVipFilter;
  }

  // ssl_accept_ffdhe_groups - computed: true, optional: true, required: false
  private _sslAcceptFfdheGroups?: string; 
  public get sslAcceptFfdheGroups() {
    return this.getStringAttribute('ssl_accept_ffdhe_groups');
  }
  public set sslAcceptFfdheGroups(value: string) {
    this._sslAcceptFfdheGroups = value;
  }
  public resetSslAcceptFfdheGroups() {
    this._sslAcceptFfdheGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslAcceptFfdheGroupsInput() {
    return this._sslAcceptFfdheGroups;
  }

  // ssl_algorithm - computed: false, optional: true, required: false
  private _sslAlgorithm?: string; 
  public get sslAlgorithm() {
    return this.getStringAttribute('ssl_algorithm');
  }
  public set sslAlgorithm(value: string) {
    this._sslAlgorithm = value;
  }
  public resetSslAlgorithm() {
    this._sslAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslAlgorithmInput() {
    return this._sslAlgorithm;
  }

  // ssl_certificate - computed: false, optional: true, required: false
  private _sslCertificate?: string; 
  public get sslCertificate() {
    return this.getStringAttribute('ssl_certificate');
  }
  public set sslCertificate(value: string) {
    this._sslCertificate = value;
  }
  public resetSslCertificate() {
    this._sslCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertificateInput() {
    return this._sslCertificate;
  }

  // ssl_client_fallback - computed: true, optional: true, required: false
  private _sslClientFallback?: string; 
  public get sslClientFallback() {
    return this.getStringAttribute('ssl_client_fallback');
  }
  public set sslClientFallback(value: string) {
    this._sslClientFallback = value;
  }
  public resetSslClientFallback() {
    this._sslClientFallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslClientFallbackInput() {
    return this._sslClientFallback;
  }

  // ssl_client_rekey_count - computed: false, optional: true, required: false
  private _sslClientRekeyCount?: number; 
  public get sslClientRekeyCount() {
    return this.getNumberAttribute('ssl_client_rekey_count');
  }
  public set sslClientRekeyCount(value: number) {
    this._sslClientRekeyCount = value;
  }
  public resetSslClientRekeyCount() {
    this._sslClientRekeyCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslClientRekeyCountInput() {
    return this._sslClientRekeyCount;
  }

  // ssl_client_renegotiation - computed: false, optional: true, required: false
  private _sslClientRenegotiation?: string; 
  public get sslClientRenegotiation() {
    return this.getStringAttribute('ssl_client_renegotiation');
  }
  public set sslClientRenegotiation(value: string) {
    this._sslClientRenegotiation = value;
  }
  public resetSslClientRenegotiation() {
    this._sslClientRenegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslClientRenegotiationInput() {
    return this._sslClientRenegotiation;
  }

  // ssl_client_session_state_max - computed: false, optional: true, required: false
  private _sslClientSessionStateMax?: number; 
  public get sslClientSessionStateMax() {
    return this.getNumberAttribute('ssl_client_session_state_max');
  }
  public set sslClientSessionStateMax(value: number) {
    this._sslClientSessionStateMax = value;
  }
  public resetSslClientSessionStateMax() {
    this._sslClientSessionStateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslClientSessionStateMaxInput() {
    return this._sslClientSessionStateMax;
  }

  // ssl_client_session_state_timeout - computed: false, optional: true, required: false
  private _sslClientSessionStateTimeout?: number; 
  public get sslClientSessionStateTimeout() {
    return this.getNumberAttribute('ssl_client_session_state_timeout');
  }
  public set sslClientSessionStateTimeout(value: number) {
    this._sslClientSessionStateTimeout = value;
  }
  public resetSslClientSessionStateTimeout() {
    this._sslClientSessionStateTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslClientSessionStateTimeoutInput() {
    return this._sslClientSessionStateTimeout;
  }

  // ssl_client_session_state_type - computed: false, optional: true, required: false
  private _sslClientSessionStateType?: string; 
  public get sslClientSessionStateType() {
    return this.getStringAttribute('ssl_client_session_state_type');
  }
  public set sslClientSessionStateType(value: string) {
    this._sslClientSessionStateType = value;
  }
  public resetSslClientSessionStateType() {
    this._sslClientSessionStateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslClientSessionStateTypeInput() {
    return this._sslClientSessionStateType;
  }

  // ssl_dh_bits - computed: false, optional: true, required: false
  private _sslDhBits?: string; 
  public get sslDhBits() {
    return this.getStringAttribute('ssl_dh_bits');
  }
  public set sslDhBits(value: string) {
    this._sslDhBits = value;
  }
  public resetSslDhBits() {
    this._sslDhBits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslDhBitsInput() {
    return this._sslDhBits;
  }

  // ssl_hpkp - computed: false, optional: true, required: false
  private _sslHpkp?: string; 
  public get sslHpkp() {
    return this.getStringAttribute('ssl_hpkp');
  }
  public set sslHpkp(value: string) {
    this._sslHpkp = value;
  }
  public resetSslHpkp() {
    this._sslHpkp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslHpkpInput() {
    return this._sslHpkp;
  }

  // ssl_hpkp_age - computed: false, optional: true, required: false
  private _sslHpkpAge?: number; 
  public get sslHpkpAge() {
    return this.getNumberAttribute('ssl_hpkp_age');
  }
  public set sslHpkpAge(value: number) {
    this._sslHpkpAge = value;
  }
  public resetSslHpkpAge() {
    this._sslHpkpAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslHpkpAgeInput() {
    return this._sslHpkpAge;
  }

  // ssl_hpkp_backup - computed: false, optional: true, required: false
  private _sslHpkpBackup?: string; 
  public get sslHpkpBackup() {
    return this.getStringAttribute('ssl_hpkp_backup');
  }
  public set sslHpkpBackup(value: string) {
    this._sslHpkpBackup = value;
  }
  public resetSslHpkpBackup() {
    this._sslHpkpBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslHpkpBackupInput() {
    return this._sslHpkpBackup;
  }

  // ssl_hpkp_include_subdomains - computed: false, optional: true, required: false
  private _sslHpkpIncludeSubdomains?: string; 
  public get sslHpkpIncludeSubdomains() {
    return this.getStringAttribute('ssl_hpkp_include_subdomains');
  }
  public set sslHpkpIncludeSubdomains(value: string) {
    this._sslHpkpIncludeSubdomains = value;
  }
  public resetSslHpkpIncludeSubdomains() {
    this._sslHpkpIncludeSubdomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslHpkpIncludeSubdomainsInput() {
    return this._sslHpkpIncludeSubdomains;
  }

  // ssl_hpkp_primary - computed: false, optional: true, required: false
  private _sslHpkpPrimary?: string; 
  public get sslHpkpPrimary() {
    return this.getStringAttribute('ssl_hpkp_primary');
  }
  public set sslHpkpPrimary(value: string) {
    this._sslHpkpPrimary = value;
  }
  public resetSslHpkpPrimary() {
    this._sslHpkpPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslHpkpPrimaryInput() {
    return this._sslHpkpPrimary;
  }

  // ssl_hpkp_report_uri - computed: false, optional: true, required: false
  private _sslHpkpReportUri?: string; 
  public get sslHpkpReportUri() {
    return this.getStringAttribute('ssl_hpkp_report_uri');
  }
  public set sslHpkpReportUri(value: string) {
    this._sslHpkpReportUri = value;
  }
  public resetSslHpkpReportUri() {
    this._sslHpkpReportUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslHpkpReportUriInput() {
    return this._sslHpkpReportUri;
  }

  // ssl_hsts - computed: true, optional: true, required: false
  private _sslHsts?: string; 
  public get sslHsts() {
    return this.getStringAttribute('ssl_hsts');
  }
  public set sslHsts(value: string) {
    this._sslHsts = value;
  }
  public resetSslHsts() {
    this._sslHsts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslHstsInput() {
    return this._sslHsts;
  }

  // ssl_hsts_age - computed: true, optional: true, required: false
  private _sslHstsAge?: number; 
  public get sslHstsAge() {
    return this.getNumberAttribute('ssl_hsts_age');
  }
  public set sslHstsAge(value: number) {
    this._sslHstsAge = value;
  }
  public resetSslHstsAge() {
    this._sslHstsAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslHstsAgeInput() {
    return this._sslHstsAge;
  }

  // ssl_hsts_include_subdomains - computed: true, optional: true, required: false
  private _sslHstsIncludeSubdomains?: string; 
  public get sslHstsIncludeSubdomains() {
    return this.getStringAttribute('ssl_hsts_include_subdomains');
  }
  public set sslHstsIncludeSubdomains(value: string) {
    this._sslHstsIncludeSubdomains = value;
  }
  public resetSslHstsIncludeSubdomains() {
    this._sslHstsIncludeSubdomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslHstsIncludeSubdomainsInput() {
    return this._sslHstsIncludeSubdomains;
  }

  // ssl_http_location_conversion - computed: true, optional: true, required: false
  private _sslHttpLocationConversion?: string; 
  public get sslHttpLocationConversion() {
    return this.getStringAttribute('ssl_http_location_conversion');
  }
  public set sslHttpLocationConversion(value: string) {
    this._sslHttpLocationConversion = value;
  }
  public resetSslHttpLocationConversion() {
    this._sslHttpLocationConversion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslHttpLocationConversionInput() {
    return this._sslHttpLocationConversion;
  }

  // ssl_http_match_host - computed: false, optional: true, required: false
  private _sslHttpMatchHost?: string; 
  public get sslHttpMatchHost() {
    return this.getStringAttribute('ssl_http_match_host');
  }
  public set sslHttpMatchHost(value: string) {
    this._sslHttpMatchHost = value;
  }
  public resetSslHttpMatchHost() {
    this._sslHttpMatchHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslHttpMatchHostInput() {
    return this._sslHttpMatchHost;
  }

  // ssl_max_version - computed: false, optional: true, required: false
  private _sslMaxVersion?: string; 
  public get sslMaxVersion() {
    return this.getStringAttribute('ssl_max_version');
  }
  public set sslMaxVersion(value: string) {
    this._sslMaxVersion = value;
  }
  public resetSslMaxVersion() {
    this._sslMaxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslMaxVersionInput() {
    return this._sslMaxVersion;
  }

  // ssl_min_version - computed: false, optional: true, required: false
  private _sslMinVersion?: string; 
  public get sslMinVersion() {
    return this.getStringAttribute('ssl_min_version');
  }
  public set sslMinVersion(value: string) {
    this._sslMinVersion = value;
  }
  public resetSslMinVersion() {
    this._sslMinVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslMinVersionInput() {
    return this._sslMinVersion;
  }

  // ssl_mode - computed: false, optional: true, required: false
  private _sslMode?: string; 
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }
  public set sslMode(value: string) {
    this._sslMode = value;
  }
  public resetSslMode() {
    this._sslMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslModeInput() {
    return this._sslMode;
  }

  // ssl_pfs - computed: false, optional: true, required: false
  private _sslPfs?: string; 
  public get sslPfs() {
    return this.getStringAttribute('ssl_pfs');
  }
  public set sslPfs(value: string) {
    this._sslPfs = value;
  }
  public resetSslPfs() {
    this._sslPfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslPfsInput() {
    return this._sslPfs;
  }

  // ssl_send_empty_frags - computed: false, optional: true, required: false
  private _sslSendEmptyFrags?: string; 
  public get sslSendEmptyFrags() {
    return this.getStringAttribute('ssl_send_empty_frags');
  }
  public set sslSendEmptyFrags(value: string) {
    this._sslSendEmptyFrags = value;
  }
  public resetSslSendEmptyFrags() {
    this._sslSendEmptyFrags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSendEmptyFragsInput() {
    return this._sslSendEmptyFrags;
  }

  // ssl_server_algorithm - computed: true, optional: true, required: false
  private _sslServerAlgorithm?: string; 
  public get sslServerAlgorithm() {
    return this.getStringAttribute('ssl_server_algorithm');
  }
  public set sslServerAlgorithm(value: string) {
    this._sslServerAlgorithm = value;
  }
  public resetSslServerAlgorithm() {
    this._sslServerAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslServerAlgorithmInput() {
    return this._sslServerAlgorithm;
  }

  // ssl_server_max_version - computed: true, optional: true, required: false
  private _sslServerMaxVersion?: string; 
  public get sslServerMaxVersion() {
    return this.getStringAttribute('ssl_server_max_version');
  }
  public set sslServerMaxVersion(value: string) {
    this._sslServerMaxVersion = value;
  }
  public resetSslServerMaxVersion() {
    this._sslServerMaxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslServerMaxVersionInput() {
    return this._sslServerMaxVersion;
  }

  // ssl_server_min_version - computed: true, optional: true, required: false
  private _sslServerMinVersion?: string; 
  public get sslServerMinVersion() {
    return this.getStringAttribute('ssl_server_min_version');
  }
  public set sslServerMinVersion(value: string) {
    this._sslServerMinVersion = value;
  }
  public resetSslServerMinVersion() {
    this._sslServerMinVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslServerMinVersionInput() {
    return this._sslServerMinVersion;
  }

  // ssl_server_renegotiation - computed: true, optional: true, required: false
  private _sslServerRenegotiation?: string; 
  public get sslServerRenegotiation() {
    return this.getStringAttribute('ssl_server_renegotiation');
  }
  public set sslServerRenegotiation(value: string) {
    this._sslServerRenegotiation = value;
  }
  public resetSslServerRenegotiation() {
    this._sslServerRenegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslServerRenegotiationInput() {
    return this._sslServerRenegotiation;
  }

  // ssl_server_session_state_max - computed: false, optional: true, required: false
  private _sslServerSessionStateMax?: number; 
  public get sslServerSessionStateMax() {
    return this.getNumberAttribute('ssl_server_session_state_max');
  }
  public set sslServerSessionStateMax(value: number) {
    this._sslServerSessionStateMax = value;
  }
  public resetSslServerSessionStateMax() {
    this._sslServerSessionStateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslServerSessionStateMaxInput() {
    return this._sslServerSessionStateMax;
  }

  // ssl_server_session_state_timeout - computed: false, optional: true, required: false
  private _sslServerSessionStateTimeout?: number; 
  public get sslServerSessionStateTimeout() {
    return this.getNumberAttribute('ssl_server_session_state_timeout');
  }
  public set sslServerSessionStateTimeout(value: number) {
    this._sslServerSessionStateTimeout = value;
  }
  public resetSslServerSessionStateTimeout() {
    this._sslServerSessionStateTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslServerSessionStateTimeoutInput() {
    return this._sslServerSessionStateTimeout;
  }

  // ssl_server_session_state_type - computed: true, optional: true, required: false
  private _sslServerSessionStateType?: string; 
  public get sslServerSessionStateType() {
    return this.getStringAttribute('ssl_server_session_state_type');
  }
  public set sslServerSessionStateType(value: string) {
    this._sslServerSessionStateType = value;
  }
  public resetSslServerSessionStateType() {
    this._sslServerSessionStateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslServerSessionStateTypeInput() {
    return this._sslServerSessionStateType;
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

  // user_agent_detect - computed: true, optional: true, required: false
  private _userAgentDetect?: string; 
  public get userAgentDetect() {
    return this.getStringAttribute('user_agent_detect');
  }
  public set userAgentDetect(value: string) {
    this._userAgentDetect = value;
  }
  public resetUserAgentDetect() {
    this._userAgentDetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentDetectInput() {
    return this._userAgentDetect;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // vip6 - computed: false, optional: false, required: true
  private _vip6?: string; 
  public get vip6() {
    return this.getStringAttribute('vip6');
  }
  public set vip6(value: string) {
    this._vip6 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vip6Input() {
    return this._vip6;
  }

  // weblogic_server - computed: true, optional: true, required: false
  private _weblogicServer?: string; 
  public get weblogicServer() {
    return this.getStringAttribute('weblogic_server');
  }
  public set weblogicServer(value: string) {
    this._weblogicServer = value;
  }
  public resetWeblogicServer() {
    this._weblogicServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weblogicServerInput() {
    return this._weblogicServer;
  }

  // websphere_server - computed: true, optional: true, required: false
  private _websphereServer?: string; 
  public get websphereServer() {
    return this.getStringAttribute('websphere_server');
  }
  public set websphereServer(value: string) {
    this._websphereServer = value;
  }
  public resetWebsphereServer() {
    this._websphereServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websphereServerInput() {
    return this._websphereServer;
  }

  // _scope - computed: false, optional: true, required: false
  private _scope = new ObjectFirewallVip6DynamicMappingScopeAList(this, "_scope", false);
  public get scope() {
    return this._scope;
  }
  public putScope(value: ObjectFirewallVip6DynamicMappingScopeA[] | cdktf.IResolvable) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // realservers - computed: false, optional: true, required: false
  private _realservers = new ObjectFirewallVip6DynamicMappingRealserversAList(this, "realservers", false);
  public get realservers() {
    return this._realservers;
  }
  public putRealservers(value: ObjectFirewallVip6DynamicMappingRealserversA[] | cdktf.IResolvable) {
    this._realservers.internalValue = value;
  }
  public resetRealservers() {
    this._realservers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realserversInput() {
    return this._realservers.internalValue;
  }

  // ssl_cipher_suites - computed: false, optional: true, required: false
  private _sslCipherSuites = new ObjectFirewallVip6DynamicMappingSslCipherSuitesAList(this, "ssl_cipher_suites", false);
  public get sslCipherSuites() {
    return this._sslCipherSuites;
  }
  public putSslCipherSuites(value: ObjectFirewallVip6DynamicMappingSslCipherSuitesA[] | cdktf.IResolvable) {
    this._sslCipherSuites.internalValue = value;
  }
  public resetSslCipherSuites() {
    this._sslCipherSuites.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCipherSuitesInput() {
    return this._sslCipherSuites.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_nat64_route: cdktf.stringToTerraform(this._addNat64Route),
      adom: cdktf.stringToTerraform(this._adom),
      arp_reply: cdktf.stringToTerraform(this._arpReply),
      client_cert: cdktf.stringToTerraform(this._clientCert),
      color: cdktf.numberToTerraform(this._color),
      comment: cdktf.stringToTerraform(this._comment),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      embedded_ipv4_address: cdktf.stringToTerraform(this._embeddedIpv4Address),
      empty_cert_action: cdktf.stringToTerraform(this._emptyCertAction),
      extip: cdktf.stringToTerraform(this._extip),
      extport: cdktf.stringToTerraform(this._extport),
      fosid: cdktf.numberToTerraform(this._fosid),
      h2_support: cdktf.stringToTerraform(this._h2Support),
      h3_support: cdktf.stringToTerraform(this._h3Support),
      http_cookie_age: cdktf.numberToTerraform(this._httpCookieAge),
      http_cookie_domain: cdktf.stringToTerraform(this._httpCookieDomain),
      http_cookie_domain_from_host: cdktf.stringToTerraform(this._httpCookieDomainFromHost),
      http_cookie_generation: cdktf.numberToTerraform(this._httpCookieGeneration),
      http_cookie_path: cdktf.stringToTerraform(this._httpCookiePath),
      http_cookie_share: cdktf.stringToTerraform(this._httpCookieShare),
      http_ip_header: cdktf.stringToTerraform(this._httpIpHeader),
      http_ip_header_name: cdktf.stringToTerraform(this._httpIpHeaderName),
      http_multiplex: cdktf.stringToTerraform(this._httpMultiplex),
      http_redirect: cdktf.stringToTerraform(this._httpRedirect),
      https_cookie_secure: cdktf.stringToTerraform(this._httpsCookieSecure),
      id: cdktf.stringToTerraform(this._id),
      ipv4_mappedip: cdktf.stringToTerraform(this._ipv4Mappedip),
      ipv4_mappedport: cdktf.stringToTerraform(this._ipv4Mappedport),
      ldb_method: cdktf.stringToTerraform(this._ldbMethod),
      mappedip: cdktf.stringToTerraform(this._mappedip),
      mappedport: cdktf.stringToTerraform(this._mappedport),
      max_embryonic_connections: cdktf.numberToTerraform(this._maxEmbryonicConnections),
      monitor: cdktf.stringToTerraform(this._monitor),
      nat64: cdktf.stringToTerraform(this._nat64),
      nat66: cdktf.stringToTerraform(this._nat66),
      nat_source_vip: cdktf.stringToTerraform(this._natSourceVip),
      ndp_reply: cdktf.stringToTerraform(this._ndpReply),
      outlook_web_access: cdktf.stringToTerraform(this._outlookWebAccess),
      persistence: cdktf.stringToTerraform(this._persistence),
      portforward: cdktf.stringToTerraform(this._portforward),
      protocol: cdktf.stringToTerraform(this._protocol),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      server_type: cdktf.stringToTerraform(this._serverType),
      src_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcFilter),
      src_vip_filter: cdktf.stringToTerraform(this._srcVipFilter),
      ssl_accept_ffdhe_groups: cdktf.stringToTerraform(this._sslAcceptFfdheGroups),
      ssl_algorithm: cdktf.stringToTerraform(this._sslAlgorithm),
      ssl_certificate: cdktf.stringToTerraform(this._sslCertificate),
      ssl_client_fallback: cdktf.stringToTerraform(this._sslClientFallback),
      ssl_client_rekey_count: cdktf.numberToTerraform(this._sslClientRekeyCount),
      ssl_client_renegotiation: cdktf.stringToTerraform(this._sslClientRenegotiation),
      ssl_client_session_state_max: cdktf.numberToTerraform(this._sslClientSessionStateMax),
      ssl_client_session_state_timeout: cdktf.numberToTerraform(this._sslClientSessionStateTimeout),
      ssl_client_session_state_type: cdktf.stringToTerraform(this._sslClientSessionStateType),
      ssl_dh_bits: cdktf.stringToTerraform(this._sslDhBits),
      ssl_hpkp: cdktf.stringToTerraform(this._sslHpkp),
      ssl_hpkp_age: cdktf.numberToTerraform(this._sslHpkpAge),
      ssl_hpkp_backup: cdktf.stringToTerraform(this._sslHpkpBackup),
      ssl_hpkp_include_subdomains: cdktf.stringToTerraform(this._sslHpkpIncludeSubdomains),
      ssl_hpkp_primary: cdktf.stringToTerraform(this._sslHpkpPrimary),
      ssl_hpkp_report_uri: cdktf.stringToTerraform(this._sslHpkpReportUri),
      ssl_hsts: cdktf.stringToTerraform(this._sslHsts),
      ssl_hsts_age: cdktf.numberToTerraform(this._sslHstsAge),
      ssl_hsts_include_subdomains: cdktf.stringToTerraform(this._sslHstsIncludeSubdomains),
      ssl_http_location_conversion: cdktf.stringToTerraform(this._sslHttpLocationConversion),
      ssl_http_match_host: cdktf.stringToTerraform(this._sslHttpMatchHost),
      ssl_max_version: cdktf.stringToTerraform(this._sslMaxVersion),
      ssl_min_version: cdktf.stringToTerraform(this._sslMinVersion),
      ssl_mode: cdktf.stringToTerraform(this._sslMode),
      ssl_pfs: cdktf.stringToTerraform(this._sslPfs),
      ssl_send_empty_frags: cdktf.stringToTerraform(this._sslSendEmptyFrags),
      ssl_server_algorithm: cdktf.stringToTerraform(this._sslServerAlgorithm),
      ssl_server_max_version: cdktf.stringToTerraform(this._sslServerMaxVersion),
      ssl_server_min_version: cdktf.stringToTerraform(this._sslServerMinVersion),
      ssl_server_renegotiation: cdktf.stringToTerraform(this._sslServerRenegotiation),
      ssl_server_session_state_max: cdktf.numberToTerraform(this._sslServerSessionStateMax),
      ssl_server_session_state_timeout: cdktf.numberToTerraform(this._sslServerSessionStateTimeout),
      ssl_server_session_state_type: cdktf.stringToTerraform(this._sslServerSessionStateType),
      type: cdktf.stringToTerraform(this._type),
      user_agent_detect: cdktf.stringToTerraform(this._userAgentDetect),
      uuid: cdktf.stringToTerraform(this._uuid),
      vip6: cdktf.stringToTerraform(this._vip6),
      weblogic_server: cdktf.stringToTerraform(this._weblogicServer),
      websphere_server: cdktf.stringToTerraform(this._websphereServer),
      _scope: cdktf.listMapper(objectFirewallVip6DynamicMappingScopeAToTerraform, true)(this._scope.internalValue),
      realservers: cdktf.listMapper(objectFirewallVip6DynamicMappingRealserversAToTerraform, true)(this._realservers.internalValue),
      ssl_cipher_suites: cdktf.listMapper(objectFirewallVip6DynamicMappingSslCipherSuitesAToTerraform, true)(this._sslCipherSuites.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_nat64_route: {
        value: cdktf.stringToHclTerraform(this._addNat64Route),
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
      arp_reply: {
        value: cdktf.stringToHclTerraform(this._arpReply),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_cert: {
        value: cdktf.stringToHclTerraform(this._clientCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      color: {
        value: cdktf.numberToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
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
      embedded_ipv4_address: {
        value: cdktf.stringToHclTerraform(this._embeddedIpv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      empty_cert_action: {
        value: cdktf.stringToHclTerraform(this._emptyCertAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extip: {
        value: cdktf.stringToHclTerraform(this._extip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extport: {
        value: cdktf.stringToHclTerraform(this._extport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      h2_support: {
        value: cdktf.stringToHclTerraform(this._h2Support),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      h3_support: {
        value: cdktf.stringToHclTerraform(this._h3Support),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_cookie_age: {
        value: cdktf.numberToHclTerraform(this._httpCookieAge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_cookie_domain: {
        value: cdktf.stringToHclTerraform(this._httpCookieDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_cookie_domain_from_host: {
        value: cdktf.stringToHclTerraform(this._httpCookieDomainFromHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_cookie_generation: {
        value: cdktf.numberToHclTerraform(this._httpCookieGeneration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_cookie_path: {
        value: cdktf.stringToHclTerraform(this._httpCookiePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_cookie_share: {
        value: cdktf.stringToHclTerraform(this._httpCookieShare),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_ip_header: {
        value: cdktf.stringToHclTerraform(this._httpIpHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_ip_header_name: {
        value: cdktf.stringToHclTerraform(this._httpIpHeaderName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_multiplex: {
        value: cdktf.stringToHclTerraform(this._httpMultiplex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_redirect: {
        value: cdktf.stringToHclTerraform(this._httpRedirect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_cookie_secure: {
        value: cdktf.stringToHclTerraform(this._httpsCookieSecure),
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
      ipv4_mappedip: {
        value: cdktf.stringToHclTerraform(this._ipv4Mappedip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_mappedport: {
        value: cdktf.stringToHclTerraform(this._ipv4Mappedport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldb_method: {
        value: cdktf.stringToHclTerraform(this._ldbMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mappedip: {
        value: cdktf.stringToHclTerraform(this._mappedip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mappedport: {
        value: cdktf.stringToHclTerraform(this._mappedport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_embryonic_connections: {
        value: cdktf.numberToHclTerraform(this._maxEmbryonicConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitor: {
        value: cdktf.stringToHclTerraform(this._monitor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat64: {
        value: cdktf.stringToHclTerraform(this._nat64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat66: {
        value: cdktf.stringToHclTerraform(this._nat66),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_source_vip: {
        value: cdktf.stringToHclTerraform(this._natSourceVip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ndp_reply: {
        value: cdktf.stringToHclTerraform(this._ndpReply),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outlook_web_access: {
        value: cdktf.stringToHclTerraform(this._outlookWebAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persistence: {
        value: cdktf.stringToHclTerraform(this._persistence),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      portforward: {
        value: cdktf.stringToHclTerraform(this._portforward),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
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
      server_type: {
        value: cdktf.stringToHclTerraform(this._serverType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._srcFilter),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      src_vip_filter: {
        value: cdktf.stringToHclTerraform(this._srcVipFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_accept_ffdhe_groups: {
        value: cdktf.stringToHclTerraform(this._sslAcceptFfdheGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_algorithm: {
        value: cdktf.stringToHclTerraform(this._sslAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_certificate: {
        value: cdktf.stringToHclTerraform(this._sslCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_client_fallback: {
        value: cdktf.stringToHclTerraform(this._sslClientFallback),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_client_rekey_count: {
        value: cdktf.numberToHclTerraform(this._sslClientRekeyCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_client_renegotiation: {
        value: cdktf.stringToHclTerraform(this._sslClientRenegotiation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_client_session_state_max: {
        value: cdktf.numberToHclTerraform(this._sslClientSessionStateMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_client_session_state_timeout: {
        value: cdktf.numberToHclTerraform(this._sslClientSessionStateTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_client_session_state_type: {
        value: cdktf.stringToHclTerraform(this._sslClientSessionStateType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_dh_bits: {
        value: cdktf.stringToHclTerraform(this._sslDhBits),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_hpkp: {
        value: cdktf.stringToHclTerraform(this._sslHpkp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_hpkp_age: {
        value: cdktf.numberToHclTerraform(this._sslHpkpAge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_hpkp_backup: {
        value: cdktf.stringToHclTerraform(this._sslHpkpBackup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_hpkp_include_subdomains: {
        value: cdktf.stringToHclTerraform(this._sslHpkpIncludeSubdomains),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_hpkp_primary: {
        value: cdktf.stringToHclTerraform(this._sslHpkpPrimary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_hpkp_report_uri: {
        value: cdktf.stringToHclTerraform(this._sslHpkpReportUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_hsts: {
        value: cdktf.stringToHclTerraform(this._sslHsts),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_hsts_age: {
        value: cdktf.numberToHclTerraform(this._sslHstsAge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_hsts_include_subdomains: {
        value: cdktf.stringToHclTerraform(this._sslHstsIncludeSubdomains),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_http_location_conversion: {
        value: cdktf.stringToHclTerraform(this._sslHttpLocationConversion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_http_match_host: {
        value: cdktf.stringToHclTerraform(this._sslHttpMatchHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_max_version: {
        value: cdktf.stringToHclTerraform(this._sslMaxVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_min_version: {
        value: cdktf.stringToHclTerraform(this._sslMinVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_mode: {
        value: cdktf.stringToHclTerraform(this._sslMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_pfs: {
        value: cdktf.stringToHclTerraform(this._sslPfs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_send_empty_frags: {
        value: cdktf.stringToHclTerraform(this._sslSendEmptyFrags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_server_algorithm: {
        value: cdktf.stringToHclTerraform(this._sslServerAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_server_max_version: {
        value: cdktf.stringToHclTerraform(this._sslServerMaxVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_server_min_version: {
        value: cdktf.stringToHclTerraform(this._sslServerMinVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_server_renegotiation: {
        value: cdktf.stringToHclTerraform(this._sslServerRenegotiation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_server_session_state_max: {
        value: cdktf.numberToHclTerraform(this._sslServerSessionStateMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_server_session_state_timeout: {
        value: cdktf.numberToHclTerraform(this._sslServerSessionStateTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_server_session_state_type: {
        value: cdktf.stringToHclTerraform(this._sslServerSessionStateType),
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
      user_agent_detect: {
        value: cdktf.stringToHclTerraform(this._userAgentDetect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vip6: {
        value: cdktf.stringToHclTerraform(this._vip6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weblogic_server: {
        value: cdktf.stringToHclTerraform(this._weblogicServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      websphere_server: {
        value: cdktf.stringToHclTerraform(this._websphereServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      _scope: {
        value: cdktf.listMapperHcl(objectFirewallVip6DynamicMappingScopeAToHclTerraform, true)(this._scope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallVip6DynamicMappingScopeAList",
      },
      realservers: {
        value: cdktf.listMapperHcl(objectFirewallVip6DynamicMappingRealserversAToHclTerraform, true)(this._realservers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallVip6DynamicMappingRealserversAList",
      },
      ssl_cipher_suites: {
        value: cdktf.listMapperHcl(objectFirewallVip6DynamicMappingSslCipherSuitesAToHclTerraform, true)(this._sslCipherSuites.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallVip6DynamicMappingSslCipherSuitesAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
