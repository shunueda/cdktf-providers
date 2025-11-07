// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFirewallVipConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#add_nat46_route ObjectFirewallVip#add_nat46_route}
  */
  readonly addNat46Route?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#adom ObjectFirewallVip#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#arp_reply ObjectFirewallVip#arp_reply}
  */
  readonly arpReply?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#client_cert ObjectFirewallVip#client_cert}
  */
  readonly clientCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#color ObjectFirewallVip#color}
  */
  readonly color?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#comment ObjectFirewallVip#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#dns_mapping_ttl ObjectFirewallVip#dns_mapping_ttl}
  */
  readonly dnsMappingTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#dynamic_sort_subtable ObjectFirewallVip#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#empty_cert_action ObjectFirewallVip#empty_cert_action}
  */
  readonly emptyCertAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#extaddr ObjectFirewallVip#extaddr}
  */
  readonly extaddr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#extintf ObjectFirewallVip#extintf}
  */
  readonly extintf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#extip ObjectFirewallVip#extip}
  */
  readonly extip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#extport ObjectFirewallVip#extport}
  */
  readonly extport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#fosid ObjectFirewallVip#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#gratuitous_arp_interval ObjectFirewallVip#gratuitous_arp_interval}
  */
  readonly gratuitousArpInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#gslb_domain_name ObjectFirewallVip#gslb_domain_name}
  */
  readonly gslbDomainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#gslb_hostname ObjectFirewallVip#gslb_hostname}
  */
  readonly gslbHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#h2_support ObjectFirewallVip#h2_support}
  */
  readonly h2Support?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#h3_support ObjectFirewallVip#h3_support}
  */
  readonly h3Support?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#http_cookie_age ObjectFirewallVip#http_cookie_age}
  */
  readonly httpCookieAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#http_cookie_domain ObjectFirewallVip#http_cookie_domain}
  */
  readonly httpCookieDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#http_cookie_domain_from_host ObjectFirewallVip#http_cookie_domain_from_host}
  */
  readonly httpCookieDomainFromHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#http_cookie_generation ObjectFirewallVip#http_cookie_generation}
  */
  readonly httpCookieGeneration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#http_cookie_path ObjectFirewallVip#http_cookie_path}
  */
  readonly httpCookiePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#http_cookie_share ObjectFirewallVip#http_cookie_share}
  */
  readonly httpCookieShare?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#http_ip_header ObjectFirewallVip#http_ip_header}
  */
  readonly httpIpHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#http_ip_header_name ObjectFirewallVip#http_ip_header_name}
  */
  readonly httpIpHeaderName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#http_multiplex ObjectFirewallVip#http_multiplex}
  */
  readonly httpMultiplex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#http_multiplex_max_concurrent_request ObjectFirewallVip#http_multiplex_max_concurrent_request}
  */
  readonly httpMultiplexMaxConcurrentRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#http_multiplex_max_request ObjectFirewallVip#http_multiplex_max_request}
  */
  readonly httpMultiplexMaxRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#http_multiplex_ttl ObjectFirewallVip#http_multiplex_ttl}
  */
  readonly httpMultiplexTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#http_redirect ObjectFirewallVip#http_redirect}
  */
  readonly httpRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#http_supported_max_version ObjectFirewallVip#http_supported_max_version}
  */
  readonly httpSupportedMaxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#https_cookie_secure ObjectFirewallVip#https_cookie_secure}
  */
  readonly httpsCookieSecure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#id ObjectFirewallVip#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ipv6_mappedip ObjectFirewallVip#ipv6_mappedip}
  */
  readonly ipv6Mappedip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ipv6_mappedport ObjectFirewallVip#ipv6_mappedport}
  */
  readonly ipv6Mappedport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ldb_method ObjectFirewallVip#ldb_method}
  */
  readonly ldbMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#mapped_addr ObjectFirewallVip#mapped_addr}
  */
  readonly mappedAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#mappedip ObjectFirewallVip#mappedip}
  */
  readonly mappedip?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#mappedport ObjectFirewallVip#mappedport}
  */
  readonly mappedport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#max_embryonic_connections ObjectFirewallVip#max_embryonic_connections}
  */
  readonly maxEmbryonicConnections?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#monitor ObjectFirewallVip#monitor}
  */
  readonly monitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#name ObjectFirewallVip#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#nat44 ObjectFirewallVip#nat44}
  */
  readonly nat44?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#nat46 ObjectFirewallVip#nat46}
  */
  readonly nat46?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#nat_source_vip ObjectFirewallVip#nat_source_vip}
  */
  readonly natSourceVip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#one_click_gslb_server ObjectFirewallVip#one_click_gslb_server}
  */
  readonly oneClickGslbServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#outlook_web_access ObjectFirewallVip#outlook_web_access}
  */
  readonly outlookWebAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#persistence ObjectFirewallVip#persistence}
  */
  readonly persistence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#portforward ObjectFirewallVip#portforward}
  */
  readonly portforward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#portmapping_type ObjectFirewallVip#portmapping_type}
  */
  readonly portmappingType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#protocol ObjectFirewallVip#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#scopetype ObjectFirewallVip#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#server_type ObjectFirewallVip#server_type}
  */
  readonly serverType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#service ObjectFirewallVip#service}
  */
  readonly service?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#src_filter ObjectFirewallVip#src_filter}
  */
  readonly srcFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#src_vip_filter ObjectFirewallVip#src_vip_filter}
  */
  readonly srcVipFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#srcintf_filter ObjectFirewallVip#srcintf_filter}
  */
  readonly srcintfFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_accept_ffdhe_groups ObjectFirewallVip#ssl_accept_ffdhe_groups}
  */
  readonly sslAcceptFfdheGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_algorithm ObjectFirewallVip#ssl_algorithm}
  */
  readonly sslAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_certificate ObjectFirewallVip#ssl_certificate}
  */
  readonly sslCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_client_fallback ObjectFirewallVip#ssl_client_fallback}
  */
  readonly sslClientFallback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_client_rekey_count ObjectFirewallVip#ssl_client_rekey_count}
  */
  readonly sslClientRekeyCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_client_renegotiation ObjectFirewallVip#ssl_client_renegotiation}
  */
  readonly sslClientRenegotiation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_client_session_state_max ObjectFirewallVip#ssl_client_session_state_max}
  */
  readonly sslClientSessionStateMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_client_session_state_timeout ObjectFirewallVip#ssl_client_session_state_timeout}
  */
  readonly sslClientSessionStateTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_client_session_state_type ObjectFirewallVip#ssl_client_session_state_type}
  */
  readonly sslClientSessionStateType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_dh_bits ObjectFirewallVip#ssl_dh_bits}
  */
  readonly sslDhBits?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_hpkp ObjectFirewallVip#ssl_hpkp}
  */
  readonly sslHpkp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_hpkp_age ObjectFirewallVip#ssl_hpkp_age}
  */
  readonly sslHpkpAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_hpkp_backup ObjectFirewallVip#ssl_hpkp_backup}
  */
  readonly sslHpkpBackup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_hpkp_include_subdomains ObjectFirewallVip#ssl_hpkp_include_subdomains}
  */
  readonly sslHpkpIncludeSubdomains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_hpkp_primary ObjectFirewallVip#ssl_hpkp_primary}
  */
  readonly sslHpkpPrimary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_hpkp_report_uri ObjectFirewallVip#ssl_hpkp_report_uri}
  */
  readonly sslHpkpReportUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_hsts ObjectFirewallVip#ssl_hsts}
  */
  readonly sslHsts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_hsts_age ObjectFirewallVip#ssl_hsts_age}
  */
  readonly sslHstsAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_hsts_include_subdomains ObjectFirewallVip#ssl_hsts_include_subdomains}
  */
  readonly sslHstsIncludeSubdomains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_http_location_conversion ObjectFirewallVip#ssl_http_location_conversion}
  */
  readonly sslHttpLocationConversion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_http_match_host ObjectFirewallVip#ssl_http_match_host}
  */
  readonly sslHttpMatchHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_max_version ObjectFirewallVip#ssl_max_version}
  */
  readonly sslMaxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_min_version ObjectFirewallVip#ssl_min_version}
  */
  readonly sslMinVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_mode ObjectFirewallVip#ssl_mode}
  */
  readonly sslMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_pfs ObjectFirewallVip#ssl_pfs}
  */
  readonly sslPfs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_send_empty_frags ObjectFirewallVip#ssl_send_empty_frags}
  */
  readonly sslSendEmptyFrags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_server_algorithm ObjectFirewallVip#ssl_server_algorithm}
  */
  readonly sslServerAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_server_max_version ObjectFirewallVip#ssl_server_max_version}
  */
  readonly sslServerMaxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_server_min_version ObjectFirewallVip#ssl_server_min_version}
  */
  readonly sslServerMinVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_server_renegotiation ObjectFirewallVip#ssl_server_renegotiation}
  */
  readonly sslServerRenegotiation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_server_session_state_max ObjectFirewallVip#ssl_server_session_state_max}
  */
  readonly sslServerSessionStateMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_server_session_state_timeout ObjectFirewallVip#ssl_server_session_state_timeout}
  */
  readonly sslServerSessionStateTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_server_session_state_type ObjectFirewallVip#ssl_server_session_state_type}
  */
  readonly sslServerSessionStateType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#status ObjectFirewallVip#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#type ObjectFirewallVip#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#user_agent_detect ObjectFirewallVip#user_agent_detect}
  */
  readonly userAgentDetect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#uuid ObjectFirewallVip#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#weblogic_server ObjectFirewallVip#weblogic_server}
  */
  readonly weblogicServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#websphere_server ObjectFirewallVip#websphere_server}
  */
  readonly websphereServer?: string;
  /**
  * dynamic_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#dynamic_mapping ObjectFirewallVip#dynamic_mapping}
  */
  readonly dynamicMapping?: ObjectFirewallVipDynamicMapping[] | cdktf.IResolvable;
  /**
  * gslb_public_ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#gslb_public_ips ObjectFirewallVip#gslb_public_ips}
  */
  readonly gslbPublicIps?: ObjectFirewallVipGslbPublicIps[] | cdktf.IResolvable;
  /**
  * quic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#quic ObjectFirewallVip#quic}
  */
  readonly quic?: ObjectFirewallVipQuic;
  /**
  * realservers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#realservers ObjectFirewallVip#realservers}
  */
  readonly realservers?: ObjectFirewallVipRealservers[] | cdktf.IResolvable;
  /**
  * ssl_cipher_suites block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_cipher_suites ObjectFirewallVip#ssl_cipher_suites}
  */
  readonly sslCipherSuites?: ObjectFirewallVipSslCipherSuites[] | cdktf.IResolvable;
  /**
  * ssl_server_cipher_suites block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_server_cipher_suites ObjectFirewallVip#ssl_server_cipher_suites}
  */
  readonly sslServerCipherSuites?: ObjectFirewallVipSslServerCipherSuites[] | cdktf.IResolvable;
}
export interface ObjectFirewallVipDynamicMappingScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#name ObjectFirewallVip#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#vdom ObjectFirewallVip#vdom}
  */
  readonly vdom?: string;
}

export function objectFirewallVipDynamicMappingScopeToTerraform(struct?: ObjectFirewallVipDynamicMappingScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    vdom: cdktf.stringToTerraform(struct!.vdom),
  }
}


export function objectFirewallVipDynamicMappingScopeToHclTerraform(struct?: ObjectFirewallVipDynamicMappingScope | cdktf.IResolvable): any {
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

export class ObjectFirewallVipDynamicMappingScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallVipDynamicMappingScope | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectFirewallVipDynamicMappingScope | cdktf.IResolvable | undefined) {
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

export class ObjectFirewallVipDynamicMappingScopeList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallVipDynamicMappingScope[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallVipDynamicMappingScopeOutputReference {
    return new ObjectFirewallVipDynamicMappingScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFirewallVipDynamicMappingRealservers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#address ObjectFirewallVip#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#client_ip ObjectFirewallVip#client_ip}
  */
  readonly clientIp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#health_check_proto ObjectFirewallVip#health_check_proto}
  */
  readonly healthCheckProto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#healthcheck ObjectFirewallVip#healthcheck}
  */
  readonly healthcheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#holddown_interval ObjectFirewallVip#holddown_interval}
  */
  readonly holddownInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#http_host ObjectFirewallVip#http_host}
  */
  readonly httpHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#id ObjectFirewallVip#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ip ObjectFirewallVip#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#max_connections ObjectFirewallVip#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#monitor ObjectFirewallVip#monitor}
  */
  readonly monitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#port ObjectFirewallVip#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#seq ObjectFirewallVip#seq}
  */
  readonly seq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#status ObjectFirewallVip#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#translate_host ObjectFirewallVip#translate_host}
  */
  readonly translateHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#type ObjectFirewallVip#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#weight ObjectFirewallVip#weight}
  */
  readonly weight?: number;
}

export function objectFirewallVipDynamicMappingRealserversToTerraform(struct?: ObjectFirewallVipDynamicMappingRealservers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    client_ip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clientIp),
    health_check_proto: cdktf.stringToTerraform(struct!.healthCheckProto),
    healthcheck: cdktf.stringToTerraform(struct!.healthcheck),
    holddown_interval: cdktf.numberToTerraform(struct!.holddownInterval),
    http_host: cdktf.stringToTerraform(struct!.httpHost),
    id: cdktf.numberToTerraform(struct!.id),
    ip: cdktf.stringToTerraform(struct!.ip),
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    monitor: cdktf.stringToTerraform(struct!.monitor),
    port: cdktf.numberToTerraform(struct!.port),
    seq: cdktf.numberToTerraform(struct!.seq),
    status: cdktf.stringToTerraform(struct!.status),
    translate_host: cdktf.stringToTerraform(struct!.translateHost),
    type: cdktf.stringToTerraform(struct!.type),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function objectFirewallVipDynamicMappingRealserversToHclTerraform(struct?: ObjectFirewallVipDynamicMappingRealservers | cdktf.IResolvable): any {
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
    client_ip: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clientIp),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    health_check_proto: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckProto),
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
    seq: {
      value: cdktf.numberToHclTerraform(struct!.seq),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class ObjectFirewallVipDynamicMappingRealserversOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallVipDynamicMappingRealservers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._clientIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIp = this._clientIp;
    }
    if (this._healthCheckProto !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckProto = this._healthCheckProto;
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
    if (this._seq !== undefined) {
      hasAnyValues = true;
      internalValueResult.seq = this._seq;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._translateHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.translateHost = this._translateHost;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallVipDynamicMappingRealservers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._clientIp = undefined;
      this._healthCheckProto = undefined;
      this._healthcheck = undefined;
      this._holddownInterval = undefined;
      this._httpHost = undefined;
      this._id = undefined;
      this._ip = undefined;
      this._maxConnections = undefined;
      this._monitor = undefined;
      this._port = undefined;
      this._seq = undefined;
      this._status = undefined;
      this._translateHost = undefined;
      this._type = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._clientIp = value.clientIp;
      this._healthCheckProto = value.healthCheckProto;
      this._healthcheck = value.healthcheck;
      this._holddownInterval = value.holddownInterval;
      this._httpHost = value.httpHost;
      this._id = value.id;
      this._ip = value.ip;
      this._maxConnections = value.maxConnections;
      this._monitor = value.monitor;
      this._port = value.port;
      this._seq = value.seq;
      this._status = value.status;
      this._translateHost = value.translateHost;
      this._type = value.type;
      this._weight = value.weight;
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

  // client_ip - computed: true, optional: true, required: false
  private _clientIp?: string[]; 
  public get clientIp() {
    return cdktf.Fn.tolist(this.getListAttribute('client_ip'));
  }
  public set clientIp(value: string[]) {
    this._clientIp = value;
  }
  public resetClientIp() {
    this._clientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpInput() {
    return this._clientIp;
  }

  // health_check_proto - computed: false, optional: true, required: false
  private _healthCheckProto?: string; 
  public get healthCheckProto() {
    return this.getStringAttribute('health_check_proto');
  }
  public set healthCheckProto(value: string) {
    this._healthCheckProto = value;
  }
  public resetHealthCheckProto() {
    this._healthCheckProto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckProtoInput() {
    return this._healthCheckProto;
  }

  // healthcheck - computed: false, optional: true, required: false
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

  // holddown_interval - computed: false, optional: true, required: false
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
}

export class ObjectFirewallVipDynamicMappingRealserversList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallVipDynamicMappingRealservers[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallVipDynamicMappingRealserversOutputReference {
    return new ObjectFirewallVipDynamicMappingRealserversOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFirewallVipDynamicMappingSslCipherSuites {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#cipher ObjectFirewallVip#cipher}
  */
  readonly cipher?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#id ObjectFirewallVip#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#priority ObjectFirewallVip#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#versions ObjectFirewallVip#versions}
  */
  readonly versions?: string[];
}

export function objectFirewallVipDynamicMappingSslCipherSuitesToTerraform(struct?: ObjectFirewallVipDynamicMappingSslCipherSuites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher: cdktf.stringToTerraform(struct!.cipher),
    id: cdktf.numberToTerraform(struct!.id),
    priority: cdktf.numberToTerraform(struct!.priority),
    versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.versions),
  }
}


export function objectFirewallVipDynamicMappingSslCipherSuitesToHclTerraform(struct?: ObjectFirewallVipDynamicMappingSslCipherSuites | cdktf.IResolvable): any {
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
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class ObjectFirewallVipDynamicMappingSslCipherSuitesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallVipDynamicMappingSslCipherSuites | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipher !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipher = this._cipher;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
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

  public set internalValue(value: ObjectFirewallVipDynamicMappingSslCipherSuites | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cipher = undefined;
      this._id = undefined;
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
      this._id = value.id;
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

export class ObjectFirewallVipDynamicMappingSslCipherSuitesList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallVipDynamicMappingSslCipherSuites[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallVipDynamicMappingSslCipherSuitesOutputReference {
    return new ObjectFirewallVipDynamicMappingSslCipherSuitesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFirewallVipDynamicMapping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#add_nat46_route ObjectFirewallVip#add_nat46_route}
  */
  readonly addNat46Route?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#arp_reply ObjectFirewallVip#arp_reply}
  */
  readonly arpReply?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#client_cert ObjectFirewallVip#client_cert}
  */
  readonly clientCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#color ObjectFirewallVip#color}
  */
  readonly color?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#comment ObjectFirewallVip#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#dns_mapping_ttl ObjectFirewallVip#dns_mapping_ttl}
  */
  readonly dnsMappingTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#empty_cert_action ObjectFirewallVip#empty_cert_action}
  */
  readonly emptyCertAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#extaddr ObjectFirewallVip#extaddr}
  */
  readonly extaddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#extintf ObjectFirewallVip#extintf}
  */
  readonly extintf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#extip ObjectFirewallVip#extip}
  */
  readonly extip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#extport ObjectFirewallVip#extport}
  */
  readonly extport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#gratuitous_arp_interval ObjectFirewallVip#gratuitous_arp_interval}
  */
  readonly gratuitousArpInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#gslb_domain_name ObjectFirewallVip#gslb_domain_name}
  */
  readonly gslbDomainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#gslb_hostname ObjectFirewallVip#gslb_hostname}
  */
  readonly gslbHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#h2_support ObjectFirewallVip#h2_support}
  */
  readonly h2Support?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#h3_support ObjectFirewallVip#h3_support}
  */
  readonly h3Support?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#http_cookie_age ObjectFirewallVip#http_cookie_age}
  */
  readonly httpCookieAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#http_cookie_domain ObjectFirewallVip#http_cookie_domain}
  */
  readonly httpCookieDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#http_cookie_domain_from_host ObjectFirewallVip#http_cookie_domain_from_host}
  */
  readonly httpCookieDomainFromHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#http_cookie_generation ObjectFirewallVip#http_cookie_generation}
  */
  readonly httpCookieGeneration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#http_cookie_path ObjectFirewallVip#http_cookie_path}
  */
  readonly httpCookiePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#http_cookie_share ObjectFirewallVip#http_cookie_share}
  */
  readonly httpCookieShare?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#http_ip_header ObjectFirewallVip#http_ip_header}
  */
  readonly httpIpHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#http_ip_header_name ObjectFirewallVip#http_ip_header_name}
  */
  readonly httpIpHeaderName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#http_multiplex ObjectFirewallVip#http_multiplex}
  */
  readonly httpMultiplex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#http_multiplex_max_concurrent_request ObjectFirewallVip#http_multiplex_max_concurrent_request}
  */
  readonly httpMultiplexMaxConcurrentRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#http_multiplex_max_request ObjectFirewallVip#http_multiplex_max_request}
  */
  readonly httpMultiplexMaxRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#http_multiplex_ttl ObjectFirewallVip#http_multiplex_ttl}
  */
  readonly httpMultiplexTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#http_redirect ObjectFirewallVip#http_redirect}
  */
  readonly httpRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#http_supported_max_version ObjectFirewallVip#http_supported_max_version}
  */
  readonly httpSupportedMaxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#https_cookie_secure ObjectFirewallVip#https_cookie_secure}
  */
  readonly httpsCookieSecure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#id ObjectFirewallVip#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ipv6_mappedip ObjectFirewallVip#ipv6_mappedip}
  */
  readonly ipv6Mappedip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ipv6_mappedport ObjectFirewallVip#ipv6_mappedport}
  */
  readonly ipv6Mappedport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ldb_method ObjectFirewallVip#ldb_method}
  */
  readonly ldbMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#mapped_addr ObjectFirewallVip#mapped_addr}
  */
  readonly mappedAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#mappedip ObjectFirewallVip#mappedip}
  */
  readonly mappedip?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#mappedport ObjectFirewallVip#mappedport}
  */
  readonly mappedport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#max_embryonic_connections ObjectFirewallVip#max_embryonic_connections}
  */
  readonly maxEmbryonicConnections?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#monitor ObjectFirewallVip#monitor}
  */
  readonly monitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#nat44 ObjectFirewallVip#nat44}
  */
  readonly nat44?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#nat46 ObjectFirewallVip#nat46}
  */
  readonly nat46?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#nat_source_vip ObjectFirewallVip#nat_source_vip}
  */
  readonly natSourceVip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#one_click_gslb_server ObjectFirewallVip#one_click_gslb_server}
  */
  readonly oneClickGslbServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#outlook_web_access ObjectFirewallVip#outlook_web_access}
  */
  readonly outlookWebAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#persistence ObjectFirewallVip#persistence}
  */
  readonly persistence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#portforward ObjectFirewallVip#portforward}
  */
  readonly portforward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#portmapping_type ObjectFirewallVip#portmapping_type}
  */
  readonly portmappingType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#protocol ObjectFirewallVip#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#server_type ObjectFirewallVip#server_type}
  */
  readonly serverType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#service ObjectFirewallVip#service}
  */
  readonly service?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#src_filter ObjectFirewallVip#src_filter}
  */
  readonly srcFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#src_vip_filter ObjectFirewallVip#src_vip_filter}
  */
  readonly srcVipFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#srcintf_filter ObjectFirewallVip#srcintf_filter}
  */
  readonly srcintfFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_accept_ffdhe_groups ObjectFirewallVip#ssl_accept_ffdhe_groups}
  */
  readonly sslAcceptFfdheGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_algorithm ObjectFirewallVip#ssl_algorithm}
  */
  readonly sslAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_certificate ObjectFirewallVip#ssl_certificate}
  */
  readonly sslCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_client_fallback ObjectFirewallVip#ssl_client_fallback}
  */
  readonly sslClientFallback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_client_rekey_count ObjectFirewallVip#ssl_client_rekey_count}
  */
  readonly sslClientRekeyCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_client_renegotiation ObjectFirewallVip#ssl_client_renegotiation}
  */
  readonly sslClientRenegotiation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_client_session_state_max ObjectFirewallVip#ssl_client_session_state_max}
  */
  readonly sslClientSessionStateMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_client_session_state_timeout ObjectFirewallVip#ssl_client_session_state_timeout}
  */
  readonly sslClientSessionStateTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_client_session_state_type ObjectFirewallVip#ssl_client_session_state_type}
  */
  readonly sslClientSessionStateType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_dh_bits ObjectFirewallVip#ssl_dh_bits}
  */
  readonly sslDhBits?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_hpkp ObjectFirewallVip#ssl_hpkp}
  */
  readonly sslHpkp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_hpkp_age ObjectFirewallVip#ssl_hpkp_age}
  */
  readonly sslHpkpAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_hpkp_backup ObjectFirewallVip#ssl_hpkp_backup}
  */
  readonly sslHpkpBackup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_hpkp_include_subdomains ObjectFirewallVip#ssl_hpkp_include_subdomains}
  */
  readonly sslHpkpIncludeSubdomains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_hpkp_primary ObjectFirewallVip#ssl_hpkp_primary}
  */
  readonly sslHpkpPrimary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_hpkp_report_uri ObjectFirewallVip#ssl_hpkp_report_uri}
  */
  readonly sslHpkpReportUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_hsts ObjectFirewallVip#ssl_hsts}
  */
  readonly sslHsts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_hsts_age ObjectFirewallVip#ssl_hsts_age}
  */
  readonly sslHstsAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_hsts_include_subdomains ObjectFirewallVip#ssl_hsts_include_subdomains}
  */
  readonly sslHstsIncludeSubdomains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_http_location_conversion ObjectFirewallVip#ssl_http_location_conversion}
  */
  readonly sslHttpLocationConversion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_http_match_host ObjectFirewallVip#ssl_http_match_host}
  */
  readonly sslHttpMatchHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_max_version ObjectFirewallVip#ssl_max_version}
  */
  readonly sslMaxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_min_version ObjectFirewallVip#ssl_min_version}
  */
  readonly sslMinVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_mode ObjectFirewallVip#ssl_mode}
  */
  readonly sslMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_pfs ObjectFirewallVip#ssl_pfs}
  */
  readonly sslPfs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_send_empty_frags ObjectFirewallVip#ssl_send_empty_frags}
  */
  readonly sslSendEmptyFrags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_server_algorithm ObjectFirewallVip#ssl_server_algorithm}
  */
  readonly sslServerAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_server_max_version ObjectFirewallVip#ssl_server_max_version}
  */
  readonly sslServerMaxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_server_min_version ObjectFirewallVip#ssl_server_min_version}
  */
  readonly sslServerMinVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_server_renegotiation ObjectFirewallVip#ssl_server_renegotiation}
  */
  readonly sslServerRenegotiation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_server_session_state_max ObjectFirewallVip#ssl_server_session_state_max}
  */
  readonly sslServerSessionStateMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_server_session_state_timeout ObjectFirewallVip#ssl_server_session_state_timeout}
  */
  readonly sslServerSessionStateTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_server_session_state_type ObjectFirewallVip#ssl_server_session_state_type}
  */
  readonly sslServerSessionStateType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#status ObjectFirewallVip#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#type ObjectFirewallVip#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#user_agent_detect ObjectFirewallVip#user_agent_detect}
  */
  readonly userAgentDetect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#uuid ObjectFirewallVip#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#weblogic_server ObjectFirewallVip#weblogic_server}
  */
  readonly weblogicServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#websphere_server ObjectFirewallVip#websphere_server}
  */
  readonly websphereServer?: string;
  /**
  * _scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#_scope ObjectFirewallVip#_scope}
  */
  readonly scope?: ObjectFirewallVipDynamicMappingScope[] | cdktf.IResolvable;
  /**
  * realservers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#realservers ObjectFirewallVip#realservers}
  */
  readonly realservers?: ObjectFirewallVipDynamicMappingRealservers[] | cdktf.IResolvable;
  /**
  * ssl_cipher_suites block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ssl_cipher_suites ObjectFirewallVip#ssl_cipher_suites}
  */
  readonly sslCipherSuites?: ObjectFirewallVipDynamicMappingSslCipherSuites[] | cdktf.IResolvable;
}

export function objectFirewallVipDynamicMappingToTerraform(struct?: ObjectFirewallVipDynamicMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_nat46_route: cdktf.stringToTerraform(struct!.addNat46Route),
    arp_reply: cdktf.stringToTerraform(struct!.arpReply),
    client_cert: cdktf.stringToTerraform(struct!.clientCert),
    color: cdktf.numberToTerraform(struct!.color),
    comment: cdktf.stringToTerraform(struct!.comment),
    dns_mapping_ttl: cdktf.numberToTerraform(struct!.dnsMappingTtl),
    empty_cert_action: cdktf.stringToTerraform(struct!.emptyCertAction),
    extaddr: cdktf.stringToTerraform(struct!.extaddr),
    extintf: cdktf.stringToTerraform(struct!.extintf),
    extip: cdktf.stringToTerraform(struct!.extip),
    extport: cdktf.stringToTerraform(struct!.extport),
    gratuitous_arp_interval: cdktf.numberToTerraform(struct!.gratuitousArpInterval),
    gslb_domain_name: cdktf.stringToTerraform(struct!.gslbDomainName),
    gslb_hostname: cdktf.stringToTerraform(struct!.gslbHostname),
    h2_support: cdktf.stringToTerraform(struct!.h2Support),
    h3_support: cdktf.stringToTerraform(struct!.h3Support),
    http_cookie_age: cdktf.numberToTerraform(struct!.httpCookieAge),
    http_cookie_domain: cdktf.stringToTerraform(struct!.httpCookieDomain),
    http_cookie_domain_from_host: cdktf.stringToTerraform(struct!.httpCookieDomainFromHost),
    http_cookie_generation: cdktf.numberToTerraform(struct!.httpCookieGeneration),
    http_cookie_path: cdktf.stringToTerraform(struct!.httpCookiePath),
    http_cookie_share: cdktf.stringToTerraform(struct!.httpCookieShare),
    http_ip_header: cdktf.stringToTerraform(struct!.httpIpHeader),
    http_ip_header_name: cdktf.stringToTerraform(struct!.httpIpHeaderName),
    http_multiplex: cdktf.stringToTerraform(struct!.httpMultiplex),
    http_multiplex_max_concurrent_request: cdktf.numberToTerraform(struct!.httpMultiplexMaxConcurrentRequest),
    http_multiplex_max_request: cdktf.numberToTerraform(struct!.httpMultiplexMaxRequest),
    http_multiplex_ttl: cdktf.numberToTerraform(struct!.httpMultiplexTtl),
    http_redirect: cdktf.stringToTerraform(struct!.httpRedirect),
    http_supported_max_version: cdktf.stringToTerraform(struct!.httpSupportedMaxVersion),
    https_cookie_secure: cdktf.stringToTerraform(struct!.httpsCookieSecure),
    id: cdktf.numberToTerraform(struct!.id),
    ipv6_mappedip: cdktf.stringToTerraform(struct!.ipv6Mappedip),
    ipv6_mappedport: cdktf.stringToTerraform(struct!.ipv6Mappedport),
    ldb_method: cdktf.stringToTerraform(struct!.ldbMethod),
    mapped_addr: cdktf.stringToTerraform(struct!.mappedAddr),
    mappedip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mappedip),
    mappedport: cdktf.stringToTerraform(struct!.mappedport),
    max_embryonic_connections: cdktf.numberToTerraform(struct!.maxEmbryonicConnections),
    monitor: cdktf.stringToTerraform(struct!.monitor),
    nat44: cdktf.stringToTerraform(struct!.nat44),
    nat46: cdktf.stringToTerraform(struct!.nat46),
    nat_source_vip: cdktf.stringToTerraform(struct!.natSourceVip),
    one_click_gslb_server: cdktf.stringToTerraform(struct!.oneClickGslbServer),
    outlook_web_access: cdktf.stringToTerraform(struct!.outlookWebAccess),
    persistence: cdktf.stringToTerraform(struct!.persistence),
    portforward: cdktf.stringToTerraform(struct!.portforward),
    portmapping_type: cdktf.stringToTerraform(struct!.portmappingType),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    server_type: cdktf.stringToTerraform(struct!.serverType),
    service: cdktf.stringToTerraform(struct!.service),
    src_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.srcFilter),
    src_vip_filter: cdktf.stringToTerraform(struct!.srcVipFilter),
    srcintf_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.srcintfFilter),
    ssl_accept_ffdhe_groups: cdktf.stringToTerraform(struct!.sslAcceptFfdheGroups),
    ssl_algorithm: cdktf.stringToTerraform(struct!.sslAlgorithm),
    ssl_certificate: cdktf.stringToTerraform(struct!.sslCertificate),
    ssl_client_fallback: cdktf.stringToTerraform(struct!.sslClientFallback),
    ssl_client_rekey_count: cdktf.numberToTerraform(struct!.sslClientRekeyCount),
    ssl_client_renegotiation: cdktf.stringToTerraform(struct!.sslClientRenegotiation),
    ssl_client_session_state_max: cdktf.numberToTerraform(struct!.sslClientSessionStateMax),
    ssl_client_session_state_timeout: cdktf.numberToTerraform(struct!.sslClientSessionStateTimeout),
    ssl_client_session_state_type: cdktf.stringToTerraform(struct!.sslClientSessionStateType),
    ssl_dh_bits: cdktf.stringToTerraform(struct!.sslDhBits),
    ssl_hpkp: cdktf.stringToTerraform(struct!.sslHpkp),
    ssl_hpkp_age: cdktf.numberToTerraform(struct!.sslHpkpAge),
    ssl_hpkp_backup: cdktf.stringToTerraform(struct!.sslHpkpBackup),
    ssl_hpkp_include_subdomains: cdktf.stringToTerraform(struct!.sslHpkpIncludeSubdomains),
    ssl_hpkp_primary: cdktf.stringToTerraform(struct!.sslHpkpPrimary),
    ssl_hpkp_report_uri: cdktf.stringToTerraform(struct!.sslHpkpReportUri),
    ssl_hsts: cdktf.stringToTerraform(struct!.sslHsts),
    ssl_hsts_age: cdktf.numberToTerraform(struct!.sslHstsAge),
    ssl_hsts_include_subdomains: cdktf.stringToTerraform(struct!.sslHstsIncludeSubdomains),
    ssl_http_location_conversion: cdktf.stringToTerraform(struct!.sslHttpLocationConversion),
    ssl_http_match_host: cdktf.stringToTerraform(struct!.sslHttpMatchHost),
    ssl_max_version: cdktf.stringToTerraform(struct!.sslMaxVersion),
    ssl_min_version: cdktf.stringToTerraform(struct!.sslMinVersion),
    ssl_mode: cdktf.stringToTerraform(struct!.sslMode),
    ssl_pfs: cdktf.stringToTerraform(struct!.sslPfs),
    ssl_send_empty_frags: cdktf.stringToTerraform(struct!.sslSendEmptyFrags),
    ssl_server_algorithm: cdktf.stringToTerraform(struct!.sslServerAlgorithm),
    ssl_server_max_version: cdktf.stringToTerraform(struct!.sslServerMaxVersion),
    ssl_server_min_version: cdktf.stringToTerraform(struct!.sslServerMinVersion),
    ssl_server_renegotiation: cdktf.stringToTerraform(struct!.sslServerRenegotiation),
    ssl_server_session_state_max: cdktf.numberToTerraform(struct!.sslServerSessionStateMax),
    ssl_server_session_state_timeout: cdktf.numberToTerraform(struct!.sslServerSessionStateTimeout),
    ssl_server_session_state_type: cdktf.stringToTerraform(struct!.sslServerSessionStateType),
    status: cdktf.stringToTerraform(struct!.status),
    type: cdktf.stringToTerraform(struct!.type),
    user_agent_detect: cdktf.stringToTerraform(struct!.userAgentDetect),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    weblogic_server: cdktf.stringToTerraform(struct!.weblogicServer),
    websphere_server: cdktf.stringToTerraform(struct!.websphereServer),
    _scope: cdktf.listMapper(objectFirewallVipDynamicMappingScopeToTerraform, true)(struct!.scope),
    realservers: cdktf.listMapper(objectFirewallVipDynamicMappingRealserversToTerraform, true)(struct!.realservers),
    ssl_cipher_suites: cdktf.listMapper(objectFirewallVipDynamicMappingSslCipherSuitesToTerraform, true)(struct!.sslCipherSuites),
  }
}


export function objectFirewallVipDynamicMappingToHclTerraform(struct?: ObjectFirewallVipDynamicMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_nat46_route: {
      value: cdktf.stringToHclTerraform(struct!.addNat46Route),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arp_reply: {
      value: cdktf.stringToHclTerraform(struct!.arpReply),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_cert: {
      value: cdktf.stringToHclTerraform(struct!.clientCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    color: {
      value: cdktf.numberToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_mapping_ttl: {
      value: cdktf.numberToHclTerraform(struct!.dnsMappingTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    empty_cert_action: {
      value: cdktf.stringToHclTerraform(struct!.emptyCertAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extaddr: {
      value: cdktf.stringToHclTerraform(struct!.extaddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extintf: {
      value: cdktf.stringToHclTerraform(struct!.extintf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extip: {
      value: cdktf.stringToHclTerraform(struct!.extip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extport: {
      value: cdktf.stringToHclTerraform(struct!.extport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gratuitous_arp_interval: {
      value: cdktf.numberToHclTerraform(struct!.gratuitousArpInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_domain_name: {
      value: cdktf.stringToHclTerraform(struct!.gslbDomainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gslb_hostname: {
      value: cdktf.stringToHclTerraform(struct!.gslbHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    h2_support: {
      value: cdktf.stringToHclTerraform(struct!.h2Support),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    h3_support: {
      value: cdktf.stringToHclTerraform(struct!.h3Support),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_cookie_age: {
      value: cdktf.numberToHclTerraform(struct!.httpCookieAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_cookie_domain: {
      value: cdktf.stringToHclTerraform(struct!.httpCookieDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_cookie_domain_from_host: {
      value: cdktf.stringToHclTerraform(struct!.httpCookieDomainFromHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_cookie_generation: {
      value: cdktf.numberToHclTerraform(struct!.httpCookieGeneration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_cookie_path: {
      value: cdktf.stringToHclTerraform(struct!.httpCookiePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_cookie_share: {
      value: cdktf.stringToHclTerraform(struct!.httpCookieShare),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_ip_header: {
      value: cdktf.stringToHclTerraform(struct!.httpIpHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_ip_header_name: {
      value: cdktf.stringToHclTerraform(struct!.httpIpHeaderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_multiplex: {
      value: cdktf.stringToHclTerraform(struct!.httpMultiplex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_multiplex_max_concurrent_request: {
      value: cdktf.numberToHclTerraform(struct!.httpMultiplexMaxConcurrentRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_multiplex_max_request: {
      value: cdktf.numberToHclTerraform(struct!.httpMultiplexMaxRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_multiplex_ttl: {
      value: cdktf.numberToHclTerraform(struct!.httpMultiplexTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_redirect: {
      value: cdktf.stringToHclTerraform(struct!.httpRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_supported_max_version: {
      value: cdktf.stringToHclTerraform(struct!.httpSupportedMaxVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_cookie_secure: {
      value: cdktf.stringToHclTerraform(struct!.httpsCookieSecure),
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
    ipv6_mappedip: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Mappedip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_mappedport: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Mappedport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ldb_method: {
      value: cdktf.stringToHclTerraform(struct!.ldbMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mapped_addr: {
      value: cdktf.stringToHclTerraform(struct!.mappedAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mappedip: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mappedip),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    mappedport: {
      value: cdktf.stringToHclTerraform(struct!.mappedport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_embryonic_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxEmbryonicConnections),
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
    nat44: {
      value: cdktf.stringToHclTerraform(struct!.nat44),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat46: {
      value: cdktf.stringToHclTerraform(struct!.nat46),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_source_vip: {
      value: cdktf.stringToHclTerraform(struct!.natSourceVip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    one_click_gslb_server: {
      value: cdktf.stringToHclTerraform(struct!.oneClickGslbServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outlook_web_access: {
      value: cdktf.stringToHclTerraform(struct!.outlookWebAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persistence: {
      value: cdktf.stringToHclTerraform(struct!.persistence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    portforward: {
      value: cdktf.stringToHclTerraform(struct!.portforward),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    portmapping_type: {
      value: cdktf.stringToHclTerraform(struct!.portmappingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_type: {
      value: cdktf.stringToHclTerraform(struct!.serverType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.srcFilter),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    src_vip_filter: {
      value: cdktf.stringToHclTerraform(struct!.srcVipFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    srcintf_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.srcintfFilter),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ssl_accept_ffdhe_groups: {
      value: cdktf.stringToHclTerraform(struct!.sslAcceptFfdheGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.sslAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_certificate: {
      value: cdktf.stringToHclTerraform(struct!.sslCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_client_fallback: {
      value: cdktf.stringToHclTerraform(struct!.sslClientFallback),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_client_rekey_count: {
      value: cdktf.numberToHclTerraform(struct!.sslClientRekeyCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_client_renegotiation: {
      value: cdktf.stringToHclTerraform(struct!.sslClientRenegotiation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_client_session_state_max: {
      value: cdktf.numberToHclTerraform(struct!.sslClientSessionStateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_client_session_state_timeout: {
      value: cdktf.numberToHclTerraform(struct!.sslClientSessionStateTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_client_session_state_type: {
      value: cdktf.stringToHclTerraform(struct!.sslClientSessionStateType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_dh_bits: {
      value: cdktf.stringToHclTerraform(struct!.sslDhBits),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_hpkp: {
      value: cdktf.stringToHclTerraform(struct!.sslHpkp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_hpkp_age: {
      value: cdktf.numberToHclTerraform(struct!.sslHpkpAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_hpkp_backup: {
      value: cdktf.stringToHclTerraform(struct!.sslHpkpBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_hpkp_include_subdomains: {
      value: cdktf.stringToHclTerraform(struct!.sslHpkpIncludeSubdomains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_hpkp_primary: {
      value: cdktf.stringToHclTerraform(struct!.sslHpkpPrimary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_hpkp_report_uri: {
      value: cdktf.stringToHclTerraform(struct!.sslHpkpReportUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_hsts: {
      value: cdktf.stringToHclTerraform(struct!.sslHsts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_hsts_age: {
      value: cdktf.numberToHclTerraform(struct!.sslHstsAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_hsts_include_subdomains: {
      value: cdktf.stringToHclTerraform(struct!.sslHstsIncludeSubdomains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_http_location_conversion: {
      value: cdktf.stringToHclTerraform(struct!.sslHttpLocationConversion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_http_match_host: {
      value: cdktf.stringToHclTerraform(struct!.sslHttpMatchHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_max_version: {
      value: cdktf.stringToHclTerraform(struct!.sslMaxVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_min_version: {
      value: cdktf.stringToHclTerraform(struct!.sslMinVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_mode: {
      value: cdktf.stringToHclTerraform(struct!.sslMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_pfs: {
      value: cdktf.stringToHclTerraform(struct!.sslPfs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_send_empty_frags: {
      value: cdktf.stringToHclTerraform(struct!.sslSendEmptyFrags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_server_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.sslServerAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_server_max_version: {
      value: cdktf.stringToHclTerraform(struct!.sslServerMaxVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_server_min_version: {
      value: cdktf.stringToHclTerraform(struct!.sslServerMinVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_server_renegotiation: {
      value: cdktf.stringToHclTerraform(struct!.sslServerRenegotiation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_server_session_state_max: {
      value: cdktf.numberToHclTerraform(struct!.sslServerSessionStateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_server_session_state_timeout: {
      value: cdktf.numberToHclTerraform(struct!.sslServerSessionStateTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_server_session_state_type: {
      value: cdktf.stringToHclTerraform(struct!.sslServerSessionStateType),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_agent_detect: {
      value: cdktf.stringToHclTerraform(struct!.userAgentDetect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weblogic_server: {
      value: cdktf.stringToHclTerraform(struct!.weblogicServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    websphere_server: {
      value: cdktf.stringToHclTerraform(struct!.websphereServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    _scope: {
      value: cdktf.listMapperHcl(objectFirewallVipDynamicMappingScopeToHclTerraform, true)(struct!.scope),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFirewallVipDynamicMappingScopeList",
    },
    realservers: {
      value: cdktf.listMapperHcl(objectFirewallVipDynamicMappingRealserversToHclTerraform, true)(struct!.realservers),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFirewallVipDynamicMappingRealserversList",
    },
    ssl_cipher_suites: {
      value: cdktf.listMapperHcl(objectFirewallVipDynamicMappingSslCipherSuitesToHclTerraform, true)(struct!.sslCipherSuites),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFirewallVipDynamicMappingSslCipherSuitesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallVipDynamicMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallVipDynamicMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addNat46Route !== undefined) {
      hasAnyValues = true;
      internalValueResult.addNat46Route = this._addNat46Route;
    }
    if (this._arpReply !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpReply = this._arpReply;
    }
    if (this._clientCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCert = this._clientCert;
    }
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._dnsMappingTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsMappingTtl = this._dnsMappingTtl;
    }
    if (this._emptyCertAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyCertAction = this._emptyCertAction;
    }
    if (this._extaddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.extaddr = this._extaddr;
    }
    if (this._extintf !== undefined) {
      hasAnyValues = true;
      internalValueResult.extintf = this._extintf;
    }
    if (this._extip !== undefined) {
      hasAnyValues = true;
      internalValueResult.extip = this._extip;
    }
    if (this._extport !== undefined) {
      hasAnyValues = true;
      internalValueResult.extport = this._extport;
    }
    if (this._gratuitousArpInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.gratuitousArpInterval = this._gratuitousArpInterval;
    }
    if (this._gslbDomainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbDomainName = this._gslbDomainName;
    }
    if (this._gslbHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbHostname = this._gslbHostname;
    }
    if (this._h2Support !== undefined) {
      hasAnyValues = true;
      internalValueResult.h2Support = this._h2Support;
    }
    if (this._h3Support !== undefined) {
      hasAnyValues = true;
      internalValueResult.h3Support = this._h3Support;
    }
    if (this._httpCookieAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCookieAge = this._httpCookieAge;
    }
    if (this._httpCookieDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCookieDomain = this._httpCookieDomain;
    }
    if (this._httpCookieDomainFromHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCookieDomainFromHost = this._httpCookieDomainFromHost;
    }
    if (this._httpCookieGeneration !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCookieGeneration = this._httpCookieGeneration;
    }
    if (this._httpCookiePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCookiePath = this._httpCookiePath;
    }
    if (this._httpCookieShare !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCookieShare = this._httpCookieShare;
    }
    if (this._httpIpHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpIpHeader = this._httpIpHeader;
    }
    if (this._httpIpHeaderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpIpHeaderName = this._httpIpHeaderName;
    }
    if (this._httpMultiplex !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMultiplex = this._httpMultiplex;
    }
    if (this._httpMultiplexMaxConcurrentRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMultiplexMaxConcurrentRequest = this._httpMultiplexMaxConcurrentRequest;
    }
    if (this._httpMultiplexMaxRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMultiplexMaxRequest = this._httpMultiplexMaxRequest;
    }
    if (this._httpMultiplexTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMultiplexTtl = this._httpMultiplexTtl;
    }
    if (this._httpRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRedirect = this._httpRedirect;
    }
    if (this._httpSupportedMaxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpSupportedMaxVersion = this._httpSupportedMaxVersion;
    }
    if (this._httpsCookieSecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsCookieSecure = this._httpsCookieSecure;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ipv6Mappedip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Mappedip = this._ipv6Mappedip;
    }
    if (this._ipv6Mappedport !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Mappedport = this._ipv6Mappedport;
    }
    if (this._ldbMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldbMethod = this._ldbMethod;
    }
    if (this._mappedAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappedAddr = this._mappedAddr;
    }
    if (this._mappedip !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappedip = this._mappedip;
    }
    if (this._mappedport !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappedport = this._mappedport;
    }
    if (this._maxEmbryonicConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEmbryonicConnections = this._maxEmbryonicConnections;
    }
    if (this._monitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitor = this._monitor;
    }
    if (this._nat44 !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat44 = this._nat44;
    }
    if (this._nat46 !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat46 = this._nat46;
    }
    if (this._natSourceVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.natSourceVip = this._natSourceVip;
    }
    if (this._oneClickGslbServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.oneClickGslbServer = this._oneClickGslbServer;
    }
    if (this._outlookWebAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.outlookWebAccess = this._outlookWebAccess;
    }
    if (this._persistence !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistence = this._persistence;
    }
    if (this._portforward !== undefined) {
      hasAnyValues = true;
      internalValueResult.portforward = this._portforward;
    }
    if (this._portmappingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.portmappingType = this._portmappingType;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._serverType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverType = this._serverType;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._srcFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFilter = this._srcFilter;
    }
    if (this._srcVipFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcVipFilter = this._srcVipFilter;
    }
    if (this._srcintfFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcintfFilter = this._srcintfFilter;
    }
    if (this._sslAcceptFfdheGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslAcceptFfdheGroups = this._sslAcceptFfdheGroups;
    }
    if (this._sslAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslAlgorithm = this._sslAlgorithm;
    }
    if (this._sslCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCertificate = this._sslCertificate;
    }
    if (this._sslClientFallback !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslClientFallback = this._sslClientFallback;
    }
    if (this._sslClientRekeyCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslClientRekeyCount = this._sslClientRekeyCount;
    }
    if (this._sslClientRenegotiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslClientRenegotiation = this._sslClientRenegotiation;
    }
    if (this._sslClientSessionStateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslClientSessionStateMax = this._sslClientSessionStateMax;
    }
    if (this._sslClientSessionStateTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslClientSessionStateTimeout = this._sslClientSessionStateTimeout;
    }
    if (this._sslClientSessionStateType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslClientSessionStateType = this._sslClientSessionStateType;
    }
    if (this._sslDhBits !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslDhBits = this._sslDhBits;
    }
    if (this._sslHpkp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslHpkp = this._sslHpkp;
    }
    if (this._sslHpkpAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslHpkpAge = this._sslHpkpAge;
    }
    if (this._sslHpkpBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslHpkpBackup = this._sslHpkpBackup;
    }
    if (this._sslHpkpIncludeSubdomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslHpkpIncludeSubdomains = this._sslHpkpIncludeSubdomains;
    }
    if (this._sslHpkpPrimary !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslHpkpPrimary = this._sslHpkpPrimary;
    }
    if (this._sslHpkpReportUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslHpkpReportUri = this._sslHpkpReportUri;
    }
    if (this._sslHsts !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslHsts = this._sslHsts;
    }
    if (this._sslHstsAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslHstsAge = this._sslHstsAge;
    }
    if (this._sslHstsIncludeSubdomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslHstsIncludeSubdomains = this._sslHstsIncludeSubdomains;
    }
    if (this._sslHttpLocationConversion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslHttpLocationConversion = this._sslHttpLocationConversion;
    }
    if (this._sslHttpMatchHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslHttpMatchHost = this._sslHttpMatchHost;
    }
    if (this._sslMaxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslMaxVersion = this._sslMaxVersion;
    }
    if (this._sslMinVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslMinVersion = this._sslMinVersion;
    }
    if (this._sslMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslMode = this._sslMode;
    }
    if (this._sslPfs !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslPfs = this._sslPfs;
    }
    if (this._sslSendEmptyFrags !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslSendEmptyFrags = this._sslSendEmptyFrags;
    }
    if (this._sslServerAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslServerAlgorithm = this._sslServerAlgorithm;
    }
    if (this._sslServerMaxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslServerMaxVersion = this._sslServerMaxVersion;
    }
    if (this._sslServerMinVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslServerMinVersion = this._sslServerMinVersion;
    }
    if (this._sslServerRenegotiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslServerRenegotiation = this._sslServerRenegotiation;
    }
    if (this._sslServerSessionStateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslServerSessionStateMax = this._sslServerSessionStateMax;
    }
    if (this._sslServerSessionStateTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslServerSessionStateTimeout = this._sslServerSessionStateTimeout;
    }
    if (this._sslServerSessionStateType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslServerSessionStateType = this._sslServerSessionStateType;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userAgentDetect !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAgentDetect = this._userAgentDetect;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._weblogicServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.weblogicServer = this._weblogicServer;
    }
    if (this._websphereServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.websphereServer = this._websphereServer;
    }
    if (this._scope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope?.internalValue;
    }
    if (this._realservers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.realservers = this._realservers?.internalValue;
    }
    if (this._sslCipherSuites?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCipherSuites = this._sslCipherSuites?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallVipDynamicMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addNat46Route = undefined;
      this._arpReply = undefined;
      this._clientCert = undefined;
      this._color = undefined;
      this._comment = undefined;
      this._dnsMappingTtl = undefined;
      this._emptyCertAction = undefined;
      this._extaddr = undefined;
      this._extintf = undefined;
      this._extip = undefined;
      this._extport = undefined;
      this._gratuitousArpInterval = undefined;
      this._gslbDomainName = undefined;
      this._gslbHostname = undefined;
      this._h2Support = undefined;
      this._h3Support = undefined;
      this._httpCookieAge = undefined;
      this._httpCookieDomain = undefined;
      this._httpCookieDomainFromHost = undefined;
      this._httpCookieGeneration = undefined;
      this._httpCookiePath = undefined;
      this._httpCookieShare = undefined;
      this._httpIpHeader = undefined;
      this._httpIpHeaderName = undefined;
      this._httpMultiplex = undefined;
      this._httpMultiplexMaxConcurrentRequest = undefined;
      this._httpMultiplexMaxRequest = undefined;
      this._httpMultiplexTtl = undefined;
      this._httpRedirect = undefined;
      this._httpSupportedMaxVersion = undefined;
      this._httpsCookieSecure = undefined;
      this._id = undefined;
      this._ipv6Mappedip = undefined;
      this._ipv6Mappedport = undefined;
      this._ldbMethod = undefined;
      this._mappedAddr = undefined;
      this._mappedip = undefined;
      this._mappedport = undefined;
      this._maxEmbryonicConnections = undefined;
      this._monitor = undefined;
      this._nat44 = undefined;
      this._nat46 = undefined;
      this._natSourceVip = undefined;
      this._oneClickGslbServer = undefined;
      this._outlookWebAccess = undefined;
      this._persistence = undefined;
      this._portforward = undefined;
      this._portmappingType = undefined;
      this._protocol = undefined;
      this._serverType = undefined;
      this._service = undefined;
      this._srcFilter = undefined;
      this._srcVipFilter = undefined;
      this._srcintfFilter = undefined;
      this._sslAcceptFfdheGroups = undefined;
      this._sslAlgorithm = undefined;
      this._sslCertificate = undefined;
      this._sslClientFallback = undefined;
      this._sslClientRekeyCount = undefined;
      this._sslClientRenegotiation = undefined;
      this._sslClientSessionStateMax = undefined;
      this._sslClientSessionStateTimeout = undefined;
      this._sslClientSessionStateType = undefined;
      this._sslDhBits = undefined;
      this._sslHpkp = undefined;
      this._sslHpkpAge = undefined;
      this._sslHpkpBackup = undefined;
      this._sslHpkpIncludeSubdomains = undefined;
      this._sslHpkpPrimary = undefined;
      this._sslHpkpReportUri = undefined;
      this._sslHsts = undefined;
      this._sslHstsAge = undefined;
      this._sslHstsIncludeSubdomains = undefined;
      this._sslHttpLocationConversion = undefined;
      this._sslHttpMatchHost = undefined;
      this._sslMaxVersion = undefined;
      this._sslMinVersion = undefined;
      this._sslMode = undefined;
      this._sslPfs = undefined;
      this._sslSendEmptyFrags = undefined;
      this._sslServerAlgorithm = undefined;
      this._sslServerMaxVersion = undefined;
      this._sslServerMinVersion = undefined;
      this._sslServerRenegotiation = undefined;
      this._sslServerSessionStateMax = undefined;
      this._sslServerSessionStateTimeout = undefined;
      this._sslServerSessionStateType = undefined;
      this._status = undefined;
      this._type = undefined;
      this._userAgentDetect = undefined;
      this._uuid = undefined;
      this._weblogicServer = undefined;
      this._websphereServer = undefined;
      this._scope.internalValue = undefined;
      this._realservers.internalValue = undefined;
      this._sslCipherSuites.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addNat46Route = value.addNat46Route;
      this._arpReply = value.arpReply;
      this._clientCert = value.clientCert;
      this._color = value.color;
      this._comment = value.comment;
      this._dnsMappingTtl = value.dnsMappingTtl;
      this._emptyCertAction = value.emptyCertAction;
      this._extaddr = value.extaddr;
      this._extintf = value.extintf;
      this._extip = value.extip;
      this._extport = value.extport;
      this._gratuitousArpInterval = value.gratuitousArpInterval;
      this._gslbDomainName = value.gslbDomainName;
      this._gslbHostname = value.gslbHostname;
      this._h2Support = value.h2Support;
      this._h3Support = value.h3Support;
      this._httpCookieAge = value.httpCookieAge;
      this._httpCookieDomain = value.httpCookieDomain;
      this._httpCookieDomainFromHost = value.httpCookieDomainFromHost;
      this._httpCookieGeneration = value.httpCookieGeneration;
      this._httpCookiePath = value.httpCookiePath;
      this._httpCookieShare = value.httpCookieShare;
      this._httpIpHeader = value.httpIpHeader;
      this._httpIpHeaderName = value.httpIpHeaderName;
      this._httpMultiplex = value.httpMultiplex;
      this._httpMultiplexMaxConcurrentRequest = value.httpMultiplexMaxConcurrentRequest;
      this._httpMultiplexMaxRequest = value.httpMultiplexMaxRequest;
      this._httpMultiplexTtl = value.httpMultiplexTtl;
      this._httpRedirect = value.httpRedirect;
      this._httpSupportedMaxVersion = value.httpSupportedMaxVersion;
      this._httpsCookieSecure = value.httpsCookieSecure;
      this._id = value.id;
      this._ipv6Mappedip = value.ipv6Mappedip;
      this._ipv6Mappedport = value.ipv6Mappedport;
      this._ldbMethod = value.ldbMethod;
      this._mappedAddr = value.mappedAddr;
      this._mappedip = value.mappedip;
      this._mappedport = value.mappedport;
      this._maxEmbryonicConnections = value.maxEmbryonicConnections;
      this._monitor = value.monitor;
      this._nat44 = value.nat44;
      this._nat46 = value.nat46;
      this._natSourceVip = value.natSourceVip;
      this._oneClickGslbServer = value.oneClickGslbServer;
      this._outlookWebAccess = value.outlookWebAccess;
      this._persistence = value.persistence;
      this._portforward = value.portforward;
      this._portmappingType = value.portmappingType;
      this._protocol = value.protocol;
      this._serverType = value.serverType;
      this._service = value.service;
      this._srcFilter = value.srcFilter;
      this._srcVipFilter = value.srcVipFilter;
      this._srcintfFilter = value.srcintfFilter;
      this._sslAcceptFfdheGroups = value.sslAcceptFfdheGroups;
      this._sslAlgorithm = value.sslAlgorithm;
      this._sslCertificate = value.sslCertificate;
      this._sslClientFallback = value.sslClientFallback;
      this._sslClientRekeyCount = value.sslClientRekeyCount;
      this._sslClientRenegotiation = value.sslClientRenegotiation;
      this._sslClientSessionStateMax = value.sslClientSessionStateMax;
      this._sslClientSessionStateTimeout = value.sslClientSessionStateTimeout;
      this._sslClientSessionStateType = value.sslClientSessionStateType;
      this._sslDhBits = value.sslDhBits;
      this._sslHpkp = value.sslHpkp;
      this._sslHpkpAge = value.sslHpkpAge;
      this._sslHpkpBackup = value.sslHpkpBackup;
      this._sslHpkpIncludeSubdomains = value.sslHpkpIncludeSubdomains;
      this._sslHpkpPrimary = value.sslHpkpPrimary;
      this._sslHpkpReportUri = value.sslHpkpReportUri;
      this._sslHsts = value.sslHsts;
      this._sslHstsAge = value.sslHstsAge;
      this._sslHstsIncludeSubdomains = value.sslHstsIncludeSubdomains;
      this._sslHttpLocationConversion = value.sslHttpLocationConversion;
      this._sslHttpMatchHost = value.sslHttpMatchHost;
      this._sslMaxVersion = value.sslMaxVersion;
      this._sslMinVersion = value.sslMinVersion;
      this._sslMode = value.sslMode;
      this._sslPfs = value.sslPfs;
      this._sslSendEmptyFrags = value.sslSendEmptyFrags;
      this._sslServerAlgorithm = value.sslServerAlgorithm;
      this._sslServerMaxVersion = value.sslServerMaxVersion;
      this._sslServerMinVersion = value.sslServerMinVersion;
      this._sslServerRenegotiation = value.sslServerRenegotiation;
      this._sslServerSessionStateMax = value.sslServerSessionStateMax;
      this._sslServerSessionStateTimeout = value.sslServerSessionStateTimeout;
      this._sslServerSessionStateType = value.sslServerSessionStateType;
      this._status = value.status;
      this._type = value.type;
      this._userAgentDetect = value.userAgentDetect;
      this._uuid = value.uuid;
      this._weblogicServer = value.weblogicServer;
      this._websphereServer = value.websphereServer;
      this._scope.internalValue = value.scope;
      this._realservers.internalValue = value.realservers;
      this._sslCipherSuites.internalValue = value.sslCipherSuites;
    }
  }

  // add_nat46_route - computed: false, optional: true, required: false
  private _addNat46Route?: string; 
  public get addNat46Route() {
    return this.getStringAttribute('add_nat46_route');
  }
  public set addNat46Route(value: string) {
    this._addNat46Route = value;
  }
  public resetAddNat46Route() {
    this._addNat46Route = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addNat46RouteInput() {
    return this._addNat46Route;
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

  // dns_mapping_ttl - computed: false, optional: true, required: false
  private _dnsMappingTtl?: number; 
  public get dnsMappingTtl() {
    return this.getNumberAttribute('dns_mapping_ttl');
  }
  public set dnsMappingTtl(value: number) {
    this._dnsMappingTtl = value;
  }
  public resetDnsMappingTtl() {
    this._dnsMappingTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsMappingTtlInput() {
    return this._dnsMappingTtl;
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

  // extaddr - computed: false, optional: true, required: false
  private _extaddr?: string; 
  public get extaddr() {
    return this.getStringAttribute('extaddr');
  }
  public set extaddr(value: string) {
    this._extaddr = value;
  }
  public resetExtaddr() {
    this._extaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extaddrInput() {
    return this._extaddr;
  }

  // extintf - computed: false, optional: true, required: false
  private _extintf?: string; 
  public get extintf() {
    return this.getStringAttribute('extintf');
  }
  public set extintf(value: string) {
    this._extintf = value;
  }
  public resetExtintf() {
    this._extintf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extintfInput() {
    return this._extintf;
  }

  // extip - computed: true, optional: true, required: false
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

  // extport - computed: false, optional: true, required: false
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

  // gratuitous_arp_interval - computed: false, optional: true, required: false
  private _gratuitousArpInterval?: number; 
  public get gratuitousArpInterval() {
    return this.getNumberAttribute('gratuitous_arp_interval');
  }
  public set gratuitousArpInterval(value: number) {
    this._gratuitousArpInterval = value;
  }
  public resetGratuitousArpInterval() {
    this._gratuitousArpInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gratuitousArpIntervalInput() {
    return this._gratuitousArpInterval;
  }

  // gslb_domain_name - computed: false, optional: true, required: false
  private _gslbDomainName?: string; 
  public get gslbDomainName() {
    return this.getStringAttribute('gslb_domain_name');
  }
  public set gslbDomainName(value: string) {
    this._gslbDomainName = value;
  }
  public resetGslbDomainName() {
    this._gslbDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbDomainNameInput() {
    return this._gslbDomainName;
  }

  // gslb_hostname - computed: false, optional: true, required: false
  private _gslbHostname?: string; 
  public get gslbHostname() {
    return this.getStringAttribute('gslb_hostname');
  }
  public set gslbHostname(value: string) {
    this._gslbHostname = value;
  }
  public resetGslbHostname() {
    this._gslbHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbHostnameInput() {
    return this._gslbHostname;
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

  // http_cookie_age - computed: false, optional: true, required: false
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

  // http_cookie_domain_from_host - computed: false, optional: true, required: false
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

  // http_cookie_share - computed: false, optional: true, required: false
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

  // http_ip_header - computed: false, optional: true, required: false
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

  // http_multiplex - computed: false, optional: true, required: false
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

  // http_multiplex_max_concurrent_request - computed: false, optional: true, required: false
  private _httpMultiplexMaxConcurrentRequest?: number; 
  public get httpMultiplexMaxConcurrentRequest() {
    return this.getNumberAttribute('http_multiplex_max_concurrent_request');
  }
  public set httpMultiplexMaxConcurrentRequest(value: number) {
    this._httpMultiplexMaxConcurrentRequest = value;
  }
  public resetHttpMultiplexMaxConcurrentRequest() {
    this._httpMultiplexMaxConcurrentRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMultiplexMaxConcurrentRequestInput() {
    return this._httpMultiplexMaxConcurrentRequest;
  }

  // http_multiplex_max_request - computed: false, optional: true, required: false
  private _httpMultiplexMaxRequest?: number; 
  public get httpMultiplexMaxRequest() {
    return this.getNumberAttribute('http_multiplex_max_request');
  }
  public set httpMultiplexMaxRequest(value: number) {
    this._httpMultiplexMaxRequest = value;
  }
  public resetHttpMultiplexMaxRequest() {
    this._httpMultiplexMaxRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMultiplexMaxRequestInput() {
    return this._httpMultiplexMaxRequest;
  }

  // http_multiplex_ttl - computed: true, optional: true, required: false
  private _httpMultiplexTtl?: number; 
  public get httpMultiplexTtl() {
    return this.getNumberAttribute('http_multiplex_ttl');
  }
  public set httpMultiplexTtl(value: number) {
    this._httpMultiplexTtl = value;
  }
  public resetHttpMultiplexTtl() {
    this._httpMultiplexTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMultiplexTtlInput() {
    return this._httpMultiplexTtl;
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

  // http_supported_max_version - computed: true, optional: true, required: false
  private _httpSupportedMaxVersion?: string; 
  public get httpSupportedMaxVersion() {
    return this.getStringAttribute('http_supported_max_version');
  }
  public set httpSupportedMaxVersion(value: string) {
    this._httpSupportedMaxVersion = value;
  }
  public resetHttpSupportedMaxVersion() {
    this._httpSupportedMaxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpSupportedMaxVersionInput() {
    return this._httpSupportedMaxVersion;
  }

  // https_cookie_secure - computed: false, optional: true, required: false
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

  // ipv6_mappedip - computed: true, optional: true, required: false
  private _ipv6Mappedip?: string; 
  public get ipv6Mappedip() {
    return this.getStringAttribute('ipv6_mappedip');
  }
  public set ipv6Mappedip(value: string) {
    this._ipv6Mappedip = value;
  }
  public resetIpv6Mappedip() {
    this._ipv6Mappedip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6MappedipInput() {
    return this._ipv6Mappedip;
  }

  // ipv6_mappedport - computed: false, optional: true, required: false
  private _ipv6Mappedport?: string; 
  public get ipv6Mappedport() {
    return this.getStringAttribute('ipv6_mappedport');
  }
  public set ipv6Mappedport(value: string) {
    this._ipv6Mappedport = value;
  }
  public resetIpv6Mappedport() {
    this._ipv6Mappedport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6MappedportInput() {
    return this._ipv6Mappedport;
  }

  // ldb_method - computed: false, optional: true, required: false
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

  // mapped_addr - computed: false, optional: true, required: false
  private _mappedAddr?: string; 
  public get mappedAddr() {
    return this.getStringAttribute('mapped_addr');
  }
  public set mappedAddr(value: string) {
    this._mappedAddr = value;
  }
  public resetMappedAddr() {
    this._mappedAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappedAddrInput() {
    return this._mappedAddr;
  }

  // mappedip - computed: true, optional: true, required: false
  private _mappedip?: string[]; 
  public get mappedip() {
    return cdktf.Fn.tolist(this.getListAttribute('mappedip'));
  }
  public set mappedip(value: string[]) {
    this._mappedip = value;
  }
  public resetMappedip() {
    this._mappedip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappedipInput() {
    return this._mappedip;
  }

  // mappedport - computed: false, optional: true, required: false
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

  // max_embryonic_connections - computed: false, optional: true, required: false
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

  // nat44 - computed: true, optional: true, required: false
  private _nat44?: string; 
  public get nat44() {
    return this.getStringAttribute('nat44');
  }
  public set nat44(value: string) {
    this._nat44 = value;
  }
  public resetNat44() {
    this._nat44 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat44Input() {
    return this._nat44;
  }

  // nat46 - computed: true, optional: true, required: false
  private _nat46?: string; 
  public get nat46() {
    return this.getStringAttribute('nat46');
  }
  public set nat46(value: string) {
    this._nat46 = value;
  }
  public resetNat46() {
    this._nat46 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat46Input() {
    return this._nat46;
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

  // one_click_gslb_server - computed: true, optional: true, required: false
  private _oneClickGslbServer?: string; 
  public get oneClickGslbServer() {
    return this.getStringAttribute('one_click_gslb_server');
  }
  public set oneClickGslbServer(value: string) {
    this._oneClickGslbServer = value;
  }
  public resetOneClickGslbServer() {
    this._oneClickGslbServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneClickGslbServerInput() {
    return this._oneClickGslbServer;
  }

  // outlook_web_access - computed: false, optional: true, required: false
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

  // persistence - computed: false, optional: true, required: false
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

  // portmapping_type - computed: false, optional: true, required: false
  private _portmappingType?: string; 
  public get portmappingType() {
    return this.getStringAttribute('portmapping_type');
  }
  public set portmappingType(value: string) {
    this._portmappingType = value;
  }
  public resetPortmappingType() {
    this._portmappingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portmappingTypeInput() {
    return this._portmappingType;
  }

  // protocol - computed: false, optional: true, required: false
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

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
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

  // srcintf_filter - computed: true, optional: true, required: false
  private _srcintfFilter?: string[]; 
  public get srcintfFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('srcintf_filter'));
  }
  public set srcintfFilter(value: string[]) {
    this._srcintfFilter = value;
  }
  public resetSrcintfFilter() {
    this._srcintfFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcintfFilterInput() {
    return this._srcintfFilter;
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

  // ssl_hsts - computed: false, optional: true, required: false
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

  // ssl_hsts_age - computed: false, optional: true, required: false
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

  // ssl_hsts_include_subdomains - computed: false, optional: true, required: false
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

  // ssl_http_location_conversion - computed: false, optional: true, required: false
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

  // ssl_server_session_state_type - computed: false, optional: true, required: false
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

  // weblogic_server - computed: false, optional: true, required: false
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

  // websphere_server - computed: false, optional: true, required: false
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
  private _scope = new ObjectFirewallVipDynamicMappingScopeList(this, "_scope", false);
  public get scope() {
    return this._scope;
  }
  public putScope(value: ObjectFirewallVipDynamicMappingScope[] | cdktf.IResolvable) {
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
  private _realservers = new ObjectFirewallVipDynamicMappingRealserversList(this, "realservers", false);
  public get realservers() {
    return this._realservers;
  }
  public putRealservers(value: ObjectFirewallVipDynamicMappingRealservers[] | cdktf.IResolvable) {
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
  private _sslCipherSuites = new ObjectFirewallVipDynamicMappingSslCipherSuitesList(this, "ssl_cipher_suites", false);
  public get sslCipherSuites() {
    return this._sslCipherSuites;
  }
  public putSslCipherSuites(value: ObjectFirewallVipDynamicMappingSslCipherSuites[] | cdktf.IResolvable) {
    this._sslCipherSuites.internalValue = value;
  }
  public resetSslCipherSuites() {
    this._sslCipherSuites.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCipherSuitesInput() {
    return this._sslCipherSuites.internalValue;
  }
}

export class ObjectFirewallVipDynamicMappingList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallVipDynamicMapping[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallVipDynamicMappingOutputReference {
    return new ObjectFirewallVipDynamicMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFirewallVipGslbPublicIps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#index ObjectFirewallVip#index}
  */
  readonly index?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ip ObjectFirewallVip#ip}
  */
  readonly ip?: string;
}

export function objectFirewallVipGslbPublicIpsToTerraform(struct?: ObjectFirewallVipGslbPublicIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.numberToTerraform(struct!.index),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function objectFirewallVipGslbPublicIpsToHclTerraform(struct?: ObjectFirewallVipGslbPublicIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
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

export class ObjectFirewallVipGslbPublicIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallVipGslbPublicIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallVipGslbPublicIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._index = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._index = value.index;
      this._ip = value.ip;
    }
  }

  // index - computed: true, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
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

export class ObjectFirewallVipGslbPublicIpsList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallVipGslbPublicIps[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallVipGslbPublicIpsOutputReference {
    return new ObjectFirewallVipGslbPublicIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFirewallVipQuic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ack_delay_exponent ObjectFirewallVip#ack_delay_exponent}
  */
  readonly ackDelayExponent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#active_connection_id_limit ObjectFirewallVip#active_connection_id_limit}
  */
  readonly activeConnectionIdLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#active_migration ObjectFirewallVip#active_migration}
  */
  readonly activeMigration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#grease_quic_bit ObjectFirewallVip#grease_quic_bit}
  */
  readonly greaseQuicBit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#max_ack_delay ObjectFirewallVip#max_ack_delay}
  */
  readonly maxAckDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#max_datagram_frame_size ObjectFirewallVip#max_datagram_frame_size}
  */
  readonly maxDatagramFrameSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#max_idle_timeout ObjectFirewallVip#max_idle_timeout}
  */
  readonly maxIdleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#max_udp_payload_size ObjectFirewallVip#max_udp_payload_size}
  */
  readonly maxUdpPayloadSize?: number;
}

export function objectFirewallVipQuicToTerraform(struct?: ObjectFirewallVipQuicOutputReference | ObjectFirewallVipQuic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ack_delay_exponent: cdktf.numberToTerraform(struct!.ackDelayExponent),
    active_connection_id_limit: cdktf.numberToTerraform(struct!.activeConnectionIdLimit),
    active_migration: cdktf.stringToTerraform(struct!.activeMigration),
    grease_quic_bit: cdktf.stringToTerraform(struct!.greaseQuicBit),
    max_ack_delay: cdktf.numberToTerraform(struct!.maxAckDelay),
    max_datagram_frame_size: cdktf.numberToTerraform(struct!.maxDatagramFrameSize),
    max_idle_timeout: cdktf.numberToTerraform(struct!.maxIdleTimeout),
    max_udp_payload_size: cdktf.numberToTerraform(struct!.maxUdpPayloadSize),
  }
}


export function objectFirewallVipQuicToHclTerraform(struct?: ObjectFirewallVipQuicOutputReference | ObjectFirewallVipQuic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ack_delay_exponent: {
      value: cdktf.numberToHclTerraform(struct!.ackDelayExponent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    active_connection_id_limit: {
      value: cdktf.numberToHclTerraform(struct!.activeConnectionIdLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    active_migration: {
      value: cdktf.stringToHclTerraform(struct!.activeMigration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grease_quic_bit: {
      value: cdktf.stringToHclTerraform(struct!.greaseQuicBit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_ack_delay: {
      value: cdktf.numberToHclTerraform(struct!.maxAckDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_datagram_frame_size: {
      value: cdktf.numberToHclTerraform(struct!.maxDatagramFrameSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.maxIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_udp_payload_size: {
      value: cdktf.numberToHclTerraform(struct!.maxUdpPayloadSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallVipQuicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectFirewallVipQuic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ackDelayExponent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackDelayExponent = this._ackDelayExponent;
    }
    if (this._activeConnectionIdLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeConnectionIdLimit = this._activeConnectionIdLimit;
    }
    if (this._activeMigration !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeMigration = this._activeMigration;
    }
    if (this._greaseQuicBit !== undefined) {
      hasAnyValues = true;
      internalValueResult.greaseQuicBit = this._greaseQuicBit;
    }
    if (this._maxAckDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAckDelay = this._maxAckDelay;
    }
    if (this._maxDatagramFrameSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDatagramFrameSize = this._maxDatagramFrameSize;
    }
    if (this._maxIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdleTimeout = this._maxIdleTimeout;
    }
    if (this._maxUdpPayloadSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUdpPayloadSize = this._maxUdpPayloadSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallVipQuic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ackDelayExponent = undefined;
      this._activeConnectionIdLimit = undefined;
      this._activeMigration = undefined;
      this._greaseQuicBit = undefined;
      this._maxAckDelay = undefined;
      this._maxDatagramFrameSize = undefined;
      this._maxIdleTimeout = undefined;
      this._maxUdpPayloadSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ackDelayExponent = value.ackDelayExponent;
      this._activeConnectionIdLimit = value.activeConnectionIdLimit;
      this._activeMigration = value.activeMigration;
      this._greaseQuicBit = value.greaseQuicBit;
      this._maxAckDelay = value.maxAckDelay;
      this._maxDatagramFrameSize = value.maxDatagramFrameSize;
      this._maxIdleTimeout = value.maxIdleTimeout;
      this._maxUdpPayloadSize = value.maxUdpPayloadSize;
    }
  }

  // ack_delay_exponent - computed: true, optional: true, required: false
  private _ackDelayExponent?: number; 
  public get ackDelayExponent() {
    return this.getNumberAttribute('ack_delay_exponent');
  }
  public set ackDelayExponent(value: number) {
    this._ackDelayExponent = value;
  }
  public resetAckDelayExponent() {
    this._ackDelayExponent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackDelayExponentInput() {
    return this._ackDelayExponent;
  }

  // active_connection_id_limit - computed: true, optional: true, required: false
  private _activeConnectionIdLimit?: number; 
  public get activeConnectionIdLimit() {
    return this.getNumberAttribute('active_connection_id_limit');
  }
  public set activeConnectionIdLimit(value: number) {
    this._activeConnectionIdLimit = value;
  }
  public resetActiveConnectionIdLimit() {
    this._activeConnectionIdLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeConnectionIdLimitInput() {
    return this._activeConnectionIdLimit;
  }

  // active_migration - computed: true, optional: true, required: false
  private _activeMigration?: string; 
  public get activeMigration() {
    return this.getStringAttribute('active_migration');
  }
  public set activeMigration(value: string) {
    this._activeMigration = value;
  }
  public resetActiveMigration() {
    this._activeMigration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeMigrationInput() {
    return this._activeMigration;
  }

  // grease_quic_bit - computed: true, optional: true, required: false
  private _greaseQuicBit?: string; 
  public get greaseQuicBit() {
    return this.getStringAttribute('grease_quic_bit');
  }
  public set greaseQuicBit(value: string) {
    this._greaseQuicBit = value;
  }
  public resetGreaseQuicBit() {
    this._greaseQuicBit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greaseQuicBitInput() {
    return this._greaseQuicBit;
  }

  // max_ack_delay - computed: true, optional: true, required: false
  private _maxAckDelay?: number; 
  public get maxAckDelay() {
    return this.getNumberAttribute('max_ack_delay');
  }
  public set maxAckDelay(value: number) {
    this._maxAckDelay = value;
  }
  public resetMaxAckDelay() {
    this._maxAckDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAckDelayInput() {
    return this._maxAckDelay;
  }

  // max_datagram_frame_size - computed: true, optional: true, required: false
  private _maxDatagramFrameSize?: number; 
  public get maxDatagramFrameSize() {
    return this.getNumberAttribute('max_datagram_frame_size');
  }
  public set maxDatagramFrameSize(value: number) {
    this._maxDatagramFrameSize = value;
  }
  public resetMaxDatagramFrameSize() {
    this._maxDatagramFrameSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDatagramFrameSizeInput() {
    return this._maxDatagramFrameSize;
  }

  // max_idle_timeout - computed: true, optional: true, required: false
  private _maxIdleTimeout?: number; 
  public get maxIdleTimeout() {
    return this.getNumberAttribute('max_idle_timeout');
  }
  public set maxIdleTimeout(value: number) {
    this._maxIdleTimeout = value;
  }
  public resetMaxIdleTimeout() {
    this._maxIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleTimeoutInput() {
    return this._maxIdleTimeout;
  }

  // max_udp_payload_size - computed: true, optional: true, required: false
  private _maxUdpPayloadSize?: number; 
  public get maxUdpPayloadSize() {
    return this.getNumberAttribute('max_udp_payload_size');
  }
  public set maxUdpPayloadSize(value: number) {
    this._maxUdpPayloadSize = value;
  }
  public resetMaxUdpPayloadSize() {
    this._maxUdpPayloadSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUdpPayloadSizeInput() {
    return this._maxUdpPayloadSize;
  }
}
export interface ObjectFirewallVipRealservers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#address ObjectFirewallVip#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#client_ip ObjectFirewallVip#client_ip}
  */
  readonly clientIp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#healthcheck ObjectFirewallVip#healthcheck}
  */
  readonly healthcheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#holddown_interval ObjectFirewallVip#holddown_interval}
  */
  readonly holddownInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#http_host ObjectFirewallVip#http_host}
  */
  readonly httpHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#id ObjectFirewallVip#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#ip ObjectFirewallVip#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#max_connections ObjectFirewallVip#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#monitor ObjectFirewallVip#monitor}
  */
  readonly monitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#port ObjectFirewallVip#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#seq ObjectFirewallVip#seq}
  */
  readonly seq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#status ObjectFirewallVip#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#translate_host ObjectFirewallVip#translate_host}
  */
  readonly translateHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#type ObjectFirewallVip#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#weight ObjectFirewallVip#weight}
  */
  readonly weight?: number;
}

export function objectFirewallVipRealserversToTerraform(struct?: ObjectFirewallVipRealservers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    client_ip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clientIp),
    healthcheck: cdktf.stringToTerraform(struct!.healthcheck),
    holddown_interval: cdktf.numberToTerraform(struct!.holddownInterval),
    http_host: cdktf.stringToTerraform(struct!.httpHost),
    id: cdktf.numberToTerraform(struct!.id),
    ip: cdktf.stringToTerraform(struct!.ip),
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    monitor: cdktf.stringToTerraform(struct!.monitor),
    port: cdktf.numberToTerraform(struct!.port),
    seq: cdktf.numberToTerraform(struct!.seq),
    status: cdktf.stringToTerraform(struct!.status),
    translate_host: cdktf.stringToTerraform(struct!.translateHost),
    type: cdktf.stringToTerraform(struct!.type),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function objectFirewallVipRealserversToHclTerraform(struct?: ObjectFirewallVipRealservers | cdktf.IResolvable): any {
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
    client_ip: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clientIp),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
    seq: {
      value: cdktf.numberToHclTerraform(struct!.seq),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class ObjectFirewallVipRealserversOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallVipRealservers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
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
    if (this._seq !== undefined) {
      hasAnyValues = true;
      internalValueResult.seq = this._seq;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._translateHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.translateHost = this._translateHost;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallVipRealservers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._clientIp = undefined;
      this._healthcheck = undefined;
      this._holddownInterval = undefined;
      this._httpHost = undefined;
      this._id = undefined;
      this._ip = undefined;
      this._maxConnections = undefined;
      this._monitor = undefined;
      this._port = undefined;
      this._seq = undefined;
      this._status = undefined;
      this._translateHost = undefined;
      this._type = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._clientIp = value.clientIp;
      this._healthcheck = value.healthcheck;
      this._holddownInterval = value.holddownInterval;
      this._httpHost = value.httpHost;
      this._id = value.id;
      this._ip = value.ip;
      this._maxConnections = value.maxConnections;
      this._monitor = value.monitor;
      this._port = value.port;
      this._seq = value.seq;
      this._status = value.status;
      this._translateHost = value.translateHost;
      this._type = value.type;
      this._weight = value.weight;
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

  // client_ip - computed: true, optional: true, required: false
  private _clientIp?: string[]; 
  public get clientIp() {
    return cdktf.Fn.tolist(this.getListAttribute('client_ip'));
  }
  public set clientIp(value: string[]) {
    this._clientIp = value;
  }
  public resetClientIp() {
    this._clientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpInput() {
    return this._clientIp;
  }

  // healthcheck - computed: false, optional: true, required: false
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

  // holddown_interval - computed: false, optional: true, required: false
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
}

export class ObjectFirewallVipRealserversList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallVipRealservers[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallVipRealserversOutputReference {
    return new ObjectFirewallVipRealserversOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFirewallVipSslCipherSuites {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#cipher ObjectFirewallVip#cipher}
  */
  readonly cipher?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#id ObjectFirewallVip#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#priority ObjectFirewallVip#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#versions ObjectFirewallVip#versions}
  */
  readonly versions?: string[];
}

export function objectFirewallVipSslCipherSuitesToTerraform(struct?: ObjectFirewallVipSslCipherSuites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher: cdktf.stringToTerraform(struct!.cipher),
    id: cdktf.numberToTerraform(struct!.id),
    priority: cdktf.numberToTerraform(struct!.priority),
    versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.versions),
  }
}


export function objectFirewallVipSslCipherSuitesToHclTerraform(struct?: ObjectFirewallVipSslCipherSuites | cdktf.IResolvable): any {
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
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class ObjectFirewallVipSslCipherSuitesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallVipSslCipherSuites | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipher !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipher = this._cipher;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
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

  public set internalValue(value: ObjectFirewallVipSslCipherSuites | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cipher = undefined;
      this._id = undefined;
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
      this._id = value.id;
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

export class ObjectFirewallVipSslCipherSuitesList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallVipSslCipherSuites[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallVipSslCipherSuitesOutputReference {
    return new ObjectFirewallVipSslCipherSuitesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFirewallVipSslServerCipherSuites {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#cipher ObjectFirewallVip#cipher}
  */
  readonly cipher?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#priority ObjectFirewallVip#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#versions ObjectFirewallVip#versions}
  */
  readonly versions?: string[];
}

export function objectFirewallVipSslServerCipherSuitesToTerraform(struct?: ObjectFirewallVipSslServerCipherSuites | cdktf.IResolvable): any {
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


export function objectFirewallVipSslServerCipherSuitesToHclTerraform(struct?: ObjectFirewallVipSslServerCipherSuites | cdktf.IResolvable): any {
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

export class ObjectFirewallVipSslServerCipherSuitesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallVipSslServerCipherSuites | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectFirewallVipSslServerCipherSuites | cdktf.IResolvable | undefined) {
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

export class ObjectFirewallVipSslServerCipherSuitesList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallVipSslServerCipherSuites[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallVipSslServerCipherSuitesOutputReference {
    return new ObjectFirewallVipSslServerCipherSuitesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip fortimanager_object_firewall_vip}
*/
export class ObjectFirewallVip extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_firewall_vip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFirewallVip resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFirewallVip to import
  * @param importFromId The id of the existing ObjectFirewallVip that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFirewallVip to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_firewall_vip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_vip fortimanager_object_firewall_vip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFirewallVipConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectFirewallVipConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_firewall_vip',
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
    this._addNat46Route = config.addNat46Route;
    this._adom = config.adom;
    this._arpReply = config.arpReply;
    this._clientCert = config.clientCert;
    this._color = config.color;
    this._comment = config.comment;
    this._dnsMappingTtl = config.dnsMappingTtl;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._emptyCertAction = config.emptyCertAction;
    this._extaddr = config.extaddr;
    this._extintf = config.extintf;
    this._extip = config.extip;
    this._extport = config.extport;
    this._fosid = config.fosid;
    this._gratuitousArpInterval = config.gratuitousArpInterval;
    this._gslbDomainName = config.gslbDomainName;
    this._gslbHostname = config.gslbHostname;
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
    this._httpMultiplexMaxConcurrentRequest = config.httpMultiplexMaxConcurrentRequest;
    this._httpMultiplexMaxRequest = config.httpMultiplexMaxRequest;
    this._httpMultiplexTtl = config.httpMultiplexTtl;
    this._httpRedirect = config.httpRedirect;
    this._httpSupportedMaxVersion = config.httpSupportedMaxVersion;
    this._httpsCookieSecure = config.httpsCookieSecure;
    this._id = config.id;
    this._ipv6Mappedip = config.ipv6Mappedip;
    this._ipv6Mappedport = config.ipv6Mappedport;
    this._ldbMethod = config.ldbMethod;
    this._mappedAddr = config.mappedAddr;
    this._mappedip = config.mappedip;
    this._mappedport = config.mappedport;
    this._maxEmbryonicConnections = config.maxEmbryonicConnections;
    this._monitor = config.monitor;
    this._name = config.name;
    this._nat44 = config.nat44;
    this._nat46 = config.nat46;
    this._natSourceVip = config.natSourceVip;
    this._oneClickGslbServer = config.oneClickGslbServer;
    this._outlookWebAccess = config.outlookWebAccess;
    this._persistence = config.persistence;
    this._portforward = config.portforward;
    this._portmappingType = config.portmappingType;
    this._protocol = config.protocol;
    this._scopetype = config.scopetype;
    this._serverType = config.serverType;
    this._service = config.service;
    this._srcFilter = config.srcFilter;
    this._srcVipFilter = config.srcVipFilter;
    this._srcintfFilter = config.srcintfFilter;
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
    this._status = config.status;
    this._type = config.type;
    this._userAgentDetect = config.userAgentDetect;
    this._uuid = config.uuid;
    this._weblogicServer = config.weblogicServer;
    this._websphereServer = config.websphereServer;
    this._dynamicMapping.internalValue = config.dynamicMapping;
    this._gslbPublicIps.internalValue = config.gslbPublicIps;
    this._quic.internalValue = config.quic;
    this._realservers.internalValue = config.realservers;
    this._sslCipherSuites.internalValue = config.sslCipherSuites;
    this._sslServerCipherSuites.internalValue = config.sslServerCipherSuites;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_nat46_route - computed: false, optional: true, required: false
  private _addNat46Route?: string; 
  public get addNat46Route() {
    return this.getStringAttribute('add_nat46_route');
  }
  public set addNat46Route(value: string) {
    this._addNat46Route = value;
  }
  public resetAddNat46Route() {
    this._addNat46Route = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addNat46RouteInput() {
    return this._addNat46Route;
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

  // dns_mapping_ttl - computed: false, optional: true, required: false
  private _dnsMappingTtl?: number; 
  public get dnsMappingTtl() {
    return this.getNumberAttribute('dns_mapping_ttl');
  }
  public set dnsMappingTtl(value: number) {
    this._dnsMappingTtl = value;
  }
  public resetDnsMappingTtl() {
    this._dnsMappingTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsMappingTtlInput() {
    return this._dnsMappingTtl;
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

  // extaddr - computed: true, optional: true, required: false
  private _extaddr?: string[]; 
  public get extaddr() {
    return cdktf.Fn.tolist(this.getListAttribute('extaddr'));
  }
  public set extaddr(value: string[]) {
    this._extaddr = value;
  }
  public resetExtaddr() {
    this._extaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extaddrInput() {
    return this._extaddr;
  }

  // extintf - computed: false, optional: true, required: false
  private _extintf?: string; 
  public get extintf() {
    return this.getStringAttribute('extintf');
  }
  public set extintf(value: string) {
    this._extintf = value;
  }
  public resetExtintf() {
    this._extintf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extintfInput() {
    return this._extintf;
  }

  // extip - computed: true, optional: true, required: false
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

  // extport - computed: false, optional: true, required: false
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

  // gratuitous_arp_interval - computed: false, optional: true, required: false
  private _gratuitousArpInterval?: number; 
  public get gratuitousArpInterval() {
    return this.getNumberAttribute('gratuitous_arp_interval');
  }
  public set gratuitousArpInterval(value: number) {
    this._gratuitousArpInterval = value;
  }
  public resetGratuitousArpInterval() {
    this._gratuitousArpInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gratuitousArpIntervalInput() {
    return this._gratuitousArpInterval;
  }

  // gslb_domain_name - computed: false, optional: true, required: false
  private _gslbDomainName?: string; 
  public get gslbDomainName() {
    return this.getStringAttribute('gslb_domain_name');
  }
  public set gslbDomainName(value: string) {
    this._gslbDomainName = value;
  }
  public resetGslbDomainName() {
    this._gslbDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbDomainNameInput() {
    return this._gslbDomainName;
  }

  // gslb_hostname - computed: false, optional: true, required: false
  private _gslbHostname?: string; 
  public get gslbHostname() {
    return this.getStringAttribute('gslb_hostname');
  }
  public set gslbHostname(value: string) {
    this._gslbHostname = value;
  }
  public resetGslbHostname() {
    this._gslbHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbHostnameInput() {
    return this._gslbHostname;
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

  // http_cookie_age - computed: false, optional: true, required: false
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

  // http_cookie_domain_from_host - computed: false, optional: true, required: false
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

  // http_cookie_share - computed: false, optional: true, required: false
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

  // http_ip_header - computed: false, optional: true, required: false
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

  // http_multiplex - computed: false, optional: true, required: false
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

  // http_multiplex_max_concurrent_request - computed: false, optional: true, required: false
  private _httpMultiplexMaxConcurrentRequest?: number; 
  public get httpMultiplexMaxConcurrentRequest() {
    return this.getNumberAttribute('http_multiplex_max_concurrent_request');
  }
  public set httpMultiplexMaxConcurrentRequest(value: number) {
    this._httpMultiplexMaxConcurrentRequest = value;
  }
  public resetHttpMultiplexMaxConcurrentRequest() {
    this._httpMultiplexMaxConcurrentRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMultiplexMaxConcurrentRequestInput() {
    return this._httpMultiplexMaxConcurrentRequest;
  }

  // http_multiplex_max_request - computed: false, optional: true, required: false
  private _httpMultiplexMaxRequest?: number; 
  public get httpMultiplexMaxRequest() {
    return this.getNumberAttribute('http_multiplex_max_request');
  }
  public set httpMultiplexMaxRequest(value: number) {
    this._httpMultiplexMaxRequest = value;
  }
  public resetHttpMultiplexMaxRequest() {
    this._httpMultiplexMaxRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMultiplexMaxRequestInput() {
    return this._httpMultiplexMaxRequest;
  }

  // http_multiplex_ttl - computed: true, optional: true, required: false
  private _httpMultiplexTtl?: number; 
  public get httpMultiplexTtl() {
    return this.getNumberAttribute('http_multiplex_ttl');
  }
  public set httpMultiplexTtl(value: number) {
    this._httpMultiplexTtl = value;
  }
  public resetHttpMultiplexTtl() {
    this._httpMultiplexTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMultiplexTtlInput() {
    return this._httpMultiplexTtl;
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

  // http_supported_max_version - computed: true, optional: true, required: false
  private _httpSupportedMaxVersion?: string; 
  public get httpSupportedMaxVersion() {
    return this.getStringAttribute('http_supported_max_version');
  }
  public set httpSupportedMaxVersion(value: string) {
    this._httpSupportedMaxVersion = value;
  }
  public resetHttpSupportedMaxVersion() {
    this._httpSupportedMaxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpSupportedMaxVersionInput() {
    return this._httpSupportedMaxVersion;
  }

  // https_cookie_secure - computed: false, optional: true, required: false
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

  // ipv6_mappedip - computed: true, optional: true, required: false
  private _ipv6Mappedip?: string; 
  public get ipv6Mappedip() {
    return this.getStringAttribute('ipv6_mappedip');
  }
  public set ipv6Mappedip(value: string) {
    this._ipv6Mappedip = value;
  }
  public resetIpv6Mappedip() {
    this._ipv6Mappedip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6MappedipInput() {
    return this._ipv6Mappedip;
  }

  // ipv6_mappedport - computed: false, optional: true, required: false
  private _ipv6Mappedport?: string; 
  public get ipv6Mappedport() {
    return this.getStringAttribute('ipv6_mappedport');
  }
  public set ipv6Mappedport(value: string) {
    this._ipv6Mappedport = value;
  }
  public resetIpv6Mappedport() {
    this._ipv6Mappedport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6MappedportInput() {
    return this._ipv6Mappedport;
  }

  // ldb_method - computed: false, optional: true, required: false
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

  // mapped_addr - computed: false, optional: true, required: false
  private _mappedAddr?: string; 
  public get mappedAddr() {
    return this.getStringAttribute('mapped_addr');
  }
  public set mappedAddr(value: string) {
    this._mappedAddr = value;
  }
  public resetMappedAddr() {
    this._mappedAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappedAddrInput() {
    return this._mappedAddr;
  }

  // mappedip - computed: true, optional: true, required: false
  private _mappedip?: string[]; 
  public get mappedip() {
    return cdktf.Fn.tolist(this.getListAttribute('mappedip'));
  }
  public set mappedip(value: string[]) {
    this._mappedip = value;
  }
  public resetMappedip() {
    this._mappedip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappedipInput() {
    return this._mappedip;
  }

  // mappedport - computed: false, optional: true, required: false
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

  // max_embryonic_connections - computed: false, optional: true, required: false
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

  // nat44 - computed: true, optional: true, required: false
  private _nat44?: string; 
  public get nat44() {
    return this.getStringAttribute('nat44');
  }
  public set nat44(value: string) {
    this._nat44 = value;
  }
  public resetNat44() {
    this._nat44 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat44Input() {
    return this._nat44;
  }

  // nat46 - computed: true, optional: true, required: false
  private _nat46?: string; 
  public get nat46() {
    return this.getStringAttribute('nat46');
  }
  public set nat46(value: string) {
    this._nat46 = value;
  }
  public resetNat46() {
    this._nat46 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat46Input() {
    return this._nat46;
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

  // one_click_gslb_server - computed: true, optional: true, required: false
  private _oneClickGslbServer?: string; 
  public get oneClickGslbServer() {
    return this.getStringAttribute('one_click_gslb_server');
  }
  public set oneClickGslbServer(value: string) {
    this._oneClickGslbServer = value;
  }
  public resetOneClickGslbServer() {
    this._oneClickGslbServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneClickGslbServerInput() {
    return this._oneClickGslbServer;
  }

  // outlook_web_access - computed: false, optional: true, required: false
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

  // persistence - computed: false, optional: true, required: false
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

  // portmapping_type - computed: false, optional: true, required: false
  private _portmappingType?: string; 
  public get portmappingType() {
    return this.getStringAttribute('portmapping_type');
  }
  public set portmappingType(value: string) {
    this._portmappingType = value;
  }
  public resetPortmappingType() {
    this._portmappingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portmappingTypeInput() {
    return this._portmappingType;
  }

  // protocol - computed: false, optional: true, required: false
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

  // service - computed: true, optional: true, required: false
  private _service?: string[]; 
  public get service() {
    return cdktf.Fn.tolist(this.getListAttribute('service'));
  }
  public set service(value: string[]) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
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

  // srcintf_filter - computed: true, optional: true, required: false
  private _srcintfFilter?: string[]; 
  public get srcintfFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('srcintf_filter'));
  }
  public set srcintfFilter(value: string[]) {
    this._srcintfFilter = value;
  }
  public resetSrcintfFilter() {
    this._srcintfFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcintfFilterInput() {
    return this._srcintfFilter;
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

  // ssl_hsts - computed: false, optional: true, required: false
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

  // ssl_hsts_age - computed: false, optional: true, required: false
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

  // ssl_hsts_include_subdomains - computed: false, optional: true, required: false
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

  // ssl_http_location_conversion - computed: false, optional: true, required: false
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

  // ssl_server_session_state_type - computed: false, optional: true, required: false
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

  // weblogic_server - computed: false, optional: true, required: false
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

  // websphere_server - computed: false, optional: true, required: false
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

  // dynamic_mapping - computed: false, optional: true, required: false
  private _dynamicMapping = new ObjectFirewallVipDynamicMappingList(this, "dynamic_mapping", false);
  public get dynamicMapping() {
    return this._dynamicMapping;
  }
  public putDynamicMapping(value: ObjectFirewallVipDynamicMapping[] | cdktf.IResolvable) {
    this._dynamicMapping.internalValue = value;
  }
  public resetDynamicMapping() {
    this._dynamicMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicMappingInput() {
    return this._dynamicMapping.internalValue;
  }

  // gslb_public_ips - computed: false, optional: true, required: false
  private _gslbPublicIps = new ObjectFirewallVipGslbPublicIpsList(this, "gslb_public_ips", false);
  public get gslbPublicIps() {
    return this._gslbPublicIps;
  }
  public putGslbPublicIps(value: ObjectFirewallVipGslbPublicIps[] | cdktf.IResolvable) {
    this._gslbPublicIps.internalValue = value;
  }
  public resetGslbPublicIps() {
    this._gslbPublicIps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbPublicIpsInput() {
    return this._gslbPublicIps.internalValue;
  }

  // quic - computed: false, optional: true, required: false
  private _quic = new ObjectFirewallVipQuicOutputReference(this, "quic");
  public get quic() {
    return this._quic;
  }
  public putQuic(value: ObjectFirewallVipQuic) {
    this._quic.internalValue = value;
  }
  public resetQuic() {
    this._quic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicInput() {
    return this._quic.internalValue;
  }

  // realservers - computed: false, optional: true, required: false
  private _realservers = new ObjectFirewallVipRealserversList(this, "realservers", false);
  public get realservers() {
    return this._realservers;
  }
  public putRealservers(value: ObjectFirewallVipRealservers[] | cdktf.IResolvable) {
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
  private _sslCipherSuites = new ObjectFirewallVipSslCipherSuitesList(this, "ssl_cipher_suites", false);
  public get sslCipherSuites() {
    return this._sslCipherSuites;
  }
  public putSslCipherSuites(value: ObjectFirewallVipSslCipherSuites[] | cdktf.IResolvable) {
    this._sslCipherSuites.internalValue = value;
  }
  public resetSslCipherSuites() {
    this._sslCipherSuites.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCipherSuitesInput() {
    return this._sslCipherSuites.internalValue;
  }

  // ssl_server_cipher_suites - computed: false, optional: true, required: false
  private _sslServerCipherSuites = new ObjectFirewallVipSslServerCipherSuitesList(this, "ssl_server_cipher_suites", false);
  public get sslServerCipherSuites() {
    return this._sslServerCipherSuites;
  }
  public putSslServerCipherSuites(value: ObjectFirewallVipSslServerCipherSuites[] | cdktf.IResolvable) {
    this._sslServerCipherSuites.internalValue = value;
  }
  public resetSslServerCipherSuites() {
    this._sslServerCipherSuites.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslServerCipherSuitesInput() {
    return this._sslServerCipherSuites.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_nat46_route: cdktf.stringToTerraform(this._addNat46Route),
      adom: cdktf.stringToTerraform(this._adom),
      arp_reply: cdktf.stringToTerraform(this._arpReply),
      client_cert: cdktf.stringToTerraform(this._clientCert),
      color: cdktf.numberToTerraform(this._color),
      comment: cdktf.stringToTerraform(this._comment),
      dns_mapping_ttl: cdktf.numberToTerraform(this._dnsMappingTtl),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      empty_cert_action: cdktf.stringToTerraform(this._emptyCertAction),
      extaddr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extaddr),
      extintf: cdktf.stringToTerraform(this._extintf),
      extip: cdktf.stringToTerraform(this._extip),
      extport: cdktf.stringToTerraform(this._extport),
      fosid: cdktf.numberToTerraform(this._fosid),
      gratuitous_arp_interval: cdktf.numberToTerraform(this._gratuitousArpInterval),
      gslb_domain_name: cdktf.stringToTerraform(this._gslbDomainName),
      gslb_hostname: cdktf.stringToTerraform(this._gslbHostname),
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
      http_multiplex_max_concurrent_request: cdktf.numberToTerraform(this._httpMultiplexMaxConcurrentRequest),
      http_multiplex_max_request: cdktf.numberToTerraform(this._httpMultiplexMaxRequest),
      http_multiplex_ttl: cdktf.numberToTerraform(this._httpMultiplexTtl),
      http_redirect: cdktf.stringToTerraform(this._httpRedirect),
      http_supported_max_version: cdktf.stringToTerraform(this._httpSupportedMaxVersion),
      https_cookie_secure: cdktf.stringToTerraform(this._httpsCookieSecure),
      id: cdktf.stringToTerraform(this._id),
      ipv6_mappedip: cdktf.stringToTerraform(this._ipv6Mappedip),
      ipv6_mappedport: cdktf.stringToTerraform(this._ipv6Mappedport),
      ldb_method: cdktf.stringToTerraform(this._ldbMethod),
      mapped_addr: cdktf.stringToTerraform(this._mappedAddr),
      mappedip: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mappedip),
      mappedport: cdktf.stringToTerraform(this._mappedport),
      max_embryonic_connections: cdktf.numberToTerraform(this._maxEmbryonicConnections),
      monitor: cdktf.stringToTerraform(this._monitor),
      name: cdktf.stringToTerraform(this._name),
      nat44: cdktf.stringToTerraform(this._nat44),
      nat46: cdktf.stringToTerraform(this._nat46),
      nat_source_vip: cdktf.stringToTerraform(this._natSourceVip),
      one_click_gslb_server: cdktf.stringToTerraform(this._oneClickGslbServer),
      outlook_web_access: cdktf.stringToTerraform(this._outlookWebAccess),
      persistence: cdktf.stringToTerraform(this._persistence),
      portforward: cdktf.stringToTerraform(this._portforward),
      portmapping_type: cdktf.stringToTerraform(this._portmappingType),
      protocol: cdktf.stringToTerraform(this._protocol),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      server_type: cdktf.stringToTerraform(this._serverType),
      service: cdktf.listMapper(cdktf.stringToTerraform, false)(this._service),
      src_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcFilter),
      src_vip_filter: cdktf.stringToTerraform(this._srcVipFilter),
      srcintf_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcintfFilter),
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
      status: cdktf.stringToTerraform(this._status),
      type: cdktf.stringToTerraform(this._type),
      user_agent_detect: cdktf.stringToTerraform(this._userAgentDetect),
      uuid: cdktf.stringToTerraform(this._uuid),
      weblogic_server: cdktf.stringToTerraform(this._weblogicServer),
      websphere_server: cdktf.stringToTerraform(this._websphereServer),
      dynamic_mapping: cdktf.listMapper(objectFirewallVipDynamicMappingToTerraform, true)(this._dynamicMapping.internalValue),
      gslb_public_ips: cdktf.listMapper(objectFirewallVipGslbPublicIpsToTerraform, true)(this._gslbPublicIps.internalValue),
      quic: objectFirewallVipQuicToTerraform(this._quic.internalValue),
      realservers: cdktf.listMapper(objectFirewallVipRealserversToTerraform, true)(this._realservers.internalValue),
      ssl_cipher_suites: cdktf.listMapper(objectFirewallVipSslCipherSuitesToTerraform, true)(this._sslCipherSuites.internalValue),
      ssl_server_cipher_suites: cdktf.listMapper(objectFirewallVipSslServerCipherSuitesToTerraform, true)(this._sslServerCipherSuites.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_nat46_route: {
        value: cdktf.stringToHclTerraform(this._addNat46Route),
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
      dns_mapping_ttl: {
        value: cdktf.numberToHclTerraform(this._dnsMappingTtl),
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
      empty_cert_action: {
        value: cdktf.stringToHclTerraform(this._emptyCertAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extaddr: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._extaddr),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      extintf: {
        value: cdktf.stringToHclTerraform(this._extintf),
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
      gratuitous_arp_interval: {
        value: cdktf.numberToHclTerraform(this._gratuitousArpInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gslb_domain_name: {
        value: cdktf.stringToHclTerraform(this._gslbDomainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gslb_hostname: {
        value: cdktf.stringToHclTerraform(this._gslbHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      http_multiplex_max_concurrent_request: {
        value: cdktf.numberToHclTerraform(this._httpMultiplexMaxConcurrentRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_multiplex_max_request: {
        value: cdktf.numberToHclTerraform(this._httpMultiplexMaxRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_multiplex_ttl: {
        value: cdktf.numberToHclTerraform(this._httpMultiplexTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_redirect: {
        value: cdktf.stringToHclTerraform(this._httpRedirect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_supported_max_version: {
        value: cdktf.stringToHclTerraform(this._httpSupportedMaxVersion),
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
      ipv6_mappedip: {
        value: cdktf.stringToHclTerraform(this._ipv6Mappedip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_mappedport: {
        value: cdktf.stringToHclTerraform(this._ipv6Mappedport),
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
      mapped_addr: {
        value: cdktf.stringToHclTerraform(this._mappedAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mappedip: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mappedip),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat44: {
        value: cdktf.stringToHclTerraform(this._nat44),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat46: {
        value: cdktf.stringToHclTerraform(this._nat46),
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
      one_click_gslb_server: {
        value: cdktf.stringToHclTerraform(this._oneClickGslbServer),
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
      portmapping_type: {
        value: cdktf.stringToHclTerraform(this._portmappingType),
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
      service: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._service),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      srcintf_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._srcintfFilter),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
      dynamic_mapping: {
        value: cdktf.listMapperHcl(objectFirewallVipDynamicMappingToHclTerraform, true)(this._dynamicMapping.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallVipDynamicMappingList",
      },
      gslb_public_ips: {
        value: cdktf.listMapperHcl(objectFirewallVipGslbPublicIpsToHclTerraform, true)(this._gslbPublicIps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallVipGslbPublicIpsList",
      },
      quic: {
        value: objectFirewallVipQuicToHclTerraform(this._quic.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallVipQuicList",
      },
      realservers: {
        value: cdktf.listMapperHcl(objectFirewallVipRealserversToHclTerraform, true)(this._realservers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallVipRealserversList",
      },
      ssl_cipher_suites: {
        value: cdktf.listMapperHcl(objectFirewallVipSslCipherSuitesToHclTerraform, true)(this._sslCipherSuites.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallVipSslCipherSuitesList",
      },
      ssl_server_cipher_suites: {
        value: cdktf.listMapperHcl(objectFirewallVipSslServerCipherSuitesToHclTerraform, true)(this._sslServerCipherSuites.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallVipSslServerCipherSuitesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
