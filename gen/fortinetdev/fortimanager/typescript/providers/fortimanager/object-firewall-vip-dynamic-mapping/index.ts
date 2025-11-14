// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFirewallVipDynamicMappingAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#add_nat46_route ObjectFirewallVipDynamicMappingA#add_nat46_route}
  */
  readonly addNat46Route?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#adom ObjectFirewallVipDynamicMappingA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#arp_reply ObjectFirewallVipDynamicMappingA#arp_reply}
  */
  readonly arpReply?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#client_cert ObjectFirewallVipDynamicMappingA#client_cert}
  */
  readonly clientCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#color ObjectFirewallVipDynamicMappingA#color}
  */
  readonly color?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#comment ObjectFirewallVipDynamicMappingA#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#dns_mapping_ttl ObjectFirewallVipDynamicMappingA#dns_mapping_ttl}
  */
  readonly dnsMappingTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#dynamic_sort_subtable ObjectFirewallVipDynamicMappingA#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#empty_cert_action ObjectFirewallVipDynamicMappingA#empty_cert_action}
  */
  readonly emptyCertAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#extaddr ObjectFirewallVipDynamicMappingA#extaddr}
  */
  readonly extaddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#extintf ObjectFirewallVipDynamicMappingA#extintf}
  */
  readonly extintf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#extip ObjectFirewallVipDynamicMappingA#extip}
  */
  readonly extip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#extport ObjectFirewallVipDynamicMappingA#extport}
  */
  readonly extport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#fosid ObjectFirewallVipDynamicMappingA#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#gratuitous_arp_interval ObjectFirewallVipDynamicMappingA#gratuitous_arp_interval}
  */
  readonly gratuitousArpInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#gslb_domain_name ObjectFirewallVipDynamicMappingA#gslb_domain_name}
  */
  readonly gslbDomainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#gslb_hostname ObjectFirewallVipDynamicMappingA#gslb_hostname}
  */
  readonly gslbHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#h2_support ObjectFirewallVipDynamicMappingA#h2_support}
  */
  readonly h2Support?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#h3_support ObjectFirewallVipDynamicMappingA#h3_support}
  */
  readonly h3Support?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#http_cookie_age ObjectFirewallVipDynamicMappingA#http_cookie_age}
  */
  readonly httpCookieAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#http_cookie_domain ObjectFirewallVipDynamicMappingA#http_cookie_domain}
  */
  readonly httpCookieDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#http_cookie_domain_from_host ObjectFirewallVipDynamicMappingA#http_cookie_domain_from_host}
  */
  readonly httpCookieDomainFromHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#http_cookie_generation ObjectFirewallVipDynamicMappingA#http_cookie_generation}
  */
  readonly httpCookieGeneration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#http_cookie_path ObjectFirewallVipDynamicMappingA#http_cookie_path}
  */
  readonly httpCookiePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#http_cookie_share ObjectFirewallVipDynamicMappingA#http_cookie_share}
  */
  readonly httpCookieShare?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#http_ip_header ObjectFirewallVipDynamicMappingA#http_ip_header}
  */
  readonly httpIpHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#http_ip_header_name ObjectFirewallVipDynamicMappingA#http_ip_header_name}
  */
  readonly httpIpHeaderName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#http_multiplex ObjectFirewallVipDynamicMappingA#http_multiplex}
  */
  readonly httpMultiplex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#http_multiplex_max_concurrent_request ObjectFirewallVipDynamicMappingA#http_multiplex_max_concurrent_request}
  */
  readonly httpMultiplexMaxConcurrentRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#http_multiplex_max_request ObjectFirewallVipDynamicMappingA#http_multiplex_max_request}
  */
  readonly httpMultiplexMaxRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#http_multiplex_ttl ObjectFirewallVipDynamicMappingA#http_multiplex_ttl}
  */
  readonly httpMultiplexTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#http_redirect ObjectFirewallVipDynamicMappingA#http_redirect}
  */
  readonly httpRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#http_supported_max_version ObjectFirewallVipDynamicMappingA#http_supported_max_version}
  */
  readonly httpSupportedMaxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#https_cookie_secure ObjectFirewallVipDynamicMappingA#https_cookie_secure}
  */
  readonly httpsCookieSecure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#id ObjectFirewallVipDynamicMappingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#ipv6_mappedip ObjectFirewallVipDynamicMappingA#ipv6_mappedip}
  */
  readonly ipv6Mappedip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#ipv6_mappedport ObjectFirewallVipDynamicMappingA#ipv6_mappedport}
  */
  readonly ipv6Mappedport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#ldb_method ObjectFirewallVipDynamicMappingA#ldb_method}
  */
  readonly ldbMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#mapped_addr ObjectFirewallVipDynamicMappingA#mapped_addr}
  */
  readonly mappedAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#mappedip ObjectFirewallVipDynamicMappingA#mappedip}
  */
  readonly mappedip?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#mappedport ObjectFirewallVipDynamicMappingA#mappedport}
  */
  readonly mappedport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#max_embryonic_connections ObjectFirewallVipDynamicMappingA#max_embryonic_connections}
  */
  readonly maxEmbryonicConnections?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#monitor ObjectFirewallVipDynamicMappingA#monitor}
  */
  readonly monitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#nat44 ObjectFirewallVipDynamicMappingA#nat44}
  */
  readonly nat44?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#nat46 ObjectFirewallVipDynamicMappingA#nat46}
  */
  readonly nat46?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#nat_source_vip ObjectFirewallVipDynamicMappingA#nat_source_vip}
  */
  readonly natSourceVip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#one_click_gslb_server ObjectFirewallVipDynamicMappingA#one_click_gslb_server}
  */
  readonly oneClickGslbServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#outlook_web_access ObjectFirewallVipDynamicMappingA#outlook_web_access}
  */
  readonly outlookWebAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#persistence ObjectFirewallVipDynamicMappingA#persistence}
  */
  readonly persistence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#portforward ObjectFirewallVipDynamicMappingA#portforward}
  */
  readonly portforward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#portmapping_type ObjectFirewallVipDynamicMappingA#portmapping_type}
  */
  readonly portmappingType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#protocol ObjectFirewallVipDynamicMappingA#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#scopetype ObjectFirewallVipDynamicMappingA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#server_type ObjectFirewallVipDynamicMappingA#server_type}
  */
  readonly serverType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#service ObjectFirewallVipDynamicMappingA#service}
  */
  readonly service?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#src_filter ObjectFirewallVipDynamicMappingA#src_filter}
  */
  readonly srcFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#src_vip_filter ObjectFirewallVipDynamicMappingA#src_vip_filter}
  */
  readonly srcVipFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#srcintf_filter ObjectFirewallVipDynamicMappingA#srcintf_filter}
  */
  readonly srcintfFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#ssl_accept_ffdhe_groups ObjectFirewallVipDynamicMappingA#ssl_accept_ffdhe_groups}
  */
  readonly sslAcceptFfdheGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#ssl_algorithm ObjectFirewallVipDynamicMappingA#ssl_algorithm}
  */
  readonly sslAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#ssl_certificate ObjectFirewallVipDynamicMappingA#ssl_certificate}
  */
  readonly sslCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#ssl_client_fallback ObjectFirewallVipDynamicMappingA#ssl_client_fallback}
  */
  readonly sslClientFallback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#ssl_client_rekey_count ObjectFirewallVipDynamicMappingA#ssl_client_rekey_count}
  */
  readonly sslClientRekeyCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#ssl_client_renegotiation ObjectFirewallVipDynamicMappingA#ssl_client_renegotiation}
  */
  readonly sslClientRenegotiation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#ssl_client_session_state_max ObjectFirewallVipDynamicMappingA#ssl_client_session_state_max}
  */
  readonly sslClientSessionStateMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#ssl_client_session_state_timeout ObjectFirewallVipDynamicMappingA#ssl_client_session_state_timeout}
  */
  readonly sslClientSessionStateTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#ssl_client_session_state_type ObjectFirewallVipDynamicMappingA#ssl_client_session_state_type}
  */
  readonly sslClientSessionStateType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#ssl_dh_bits ObjectFirewallVipDynamicMappingA#ssl_dh_bits}
  */
  readonly sslDhBits?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#ssl_hpkp ObjectFirewallVipDynamicMappingA#ssl_hpkp}
  */
  readonly sslHpkp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#ssl_hpkp_age ObjectFirewallVipDynamicMappingA#ssl_hpkp_age}
  */
  readonly sslHpkpAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#ssl_hpkp_backup ObjectFirewallVipDynamicMappingA#ssl_hpkp_backup}
  */
  readonly sslHpkpBackup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#ssl_hpkp_include_subdomains ObjectFirewallVipDynamicMappingA#ssl_hpkp_include_subdomains}
  */
  readonly sslHpkpIncludeSubdomains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#ssl_hpkp_primary ObjectFirewallVipDynamicMappingA#ssl_hpkp_primary}
  */
  readonly sslHpkpPrimary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#ssl_hpkp_report_uri ObjectFirewallVipDynamicMappingA#ssl_hpkp_report_uri}
  */
  readonly sslHpkpReportUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#ssl_hsts ObjectFirewallVipDynamicMappingA#ssl_hsts}
  */
  readonly sslHsts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#ssl_hsts_age ObjectFirewallVipDynamicMappingA#ssl_hsts_age}
  */
  readonly sslHstsAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#ssl_hsts_include_subdomains ObjectFirewallVipDynamicMappingA#ssl_hsts_include_subdomains}
  */
  readonly sslHstsIncludeSubdomains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#ssl_http_location_conversion ObjectFirewallVipDynamicMappingA#ssl_http_location_conversion}
  */
  readonly sslHttpLocationConversion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#ssl_http_match_host ObjectFirewallVipDynamicMappingA#ssl_http_match_host}
  */
  readonly sslHttpMatchHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#ssl_max_version ObjectFirewallVipDynamicMappingA#ssl_max_version}
  */
  readonly sslMaxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#ssl_min_version ObjectFirewallVipDynamicMappingA#ssl_min_version}
  */
  readonly sslMinVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#ssl_mode ObjectFirewallVipDynamicMappingA#ssl_mode}
  */
  readonly sslMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#ssl_pfs ObjectFirewallVipDynamicMappingA#ssl_pfs}
  */
  readonly sslPfs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#ssl_send_empty_frags ObjectFirewallVipDynamicMappingA#ssl_send_empty_frags}
  */
  readonly sslSendEmptyFrags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#ssl_server_algorithm ObjectFirewallVipDynamicMappingA#ssl_server_algorithm}
  */
  readonly sslServerAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#ssl_server_max_version ObjectFirewallVipDynamicMappingA#ssl_server_max_version}
  */
  readonly sslServerMaxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#ssl_server_min_version ObjectFirewallVipDynamicMappingA#ssl_server_min_version}
  */
  readonly sslServerMinVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#ssl_server_renegotiation ObjectFirewallVipDynamicMappingA#ssl_server_renegotiation}
  */
  readonly sslServerRenegotiation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#ssl_server_session_state_max ObjectFirewallVipDynamicMappingA#ssl_server_session_state_max}
  */
  readonly sslServerSessionStateMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#ssl_server_session_state_timeout ObjectFirewallVipDynamicMappingA#ssl_server_session_state_timeout}
  */
  readonly sslServerSessionStateTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#ssl_server_session_state_type ObjectFirewallVipDynamicMappingA#ssl_server_session_state_type}
  */
  readonly sslServerSessionStateType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#status ObjectFirewallVipDynamicMappingA#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#type ObjectFirewallVipDynamicMappingA#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#user_agent_detect ObjectFirewallVipDynamicMappingA#user_agent_detect}
  */
  readonly userAgentDetect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#uuid ObjectFirewallVipDynamicMappingA#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#vip ObjectFirewallVipDynamicMappingA#vip}
  */
  readonly vip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#weblogic_server ObjectFirewallVipDynamicMappingA#weblogic_server}
  */
  readonly weblogicServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#websphere_server ObjectFirewallVipDynamicMappingA#websphere_server}
  */
  readonly websphereServer?: string;
  /**
  * _scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#_scope ObjectFirewallVipDynamicMappingA#_scope}
  */
  readonly scope?: ObjectFirewallVipDynamicMappingScopeA[] | cdktf.IResolvable;
  /**
  * realservers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#realservers ObjectFirewallVipDynamicMappingA#realservers}
  */
  readonly realservers?: ObjectFirewallVipDynamicMappingRealserversA[] | cdktf.IResolvable;
  /**
  * ssl_cipher_suites block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#ssl_cipher_suites ObjectFirewallVipDynamicMappingA#ssl_cipher_suites}
  */
  readonly sslCipherSuites?: ObjectFirewallVipDynamicMappingSslCipherSuitesA[] | cdktf.IResolvable;
}
export interface ObjectFirewallVipDynamicMappingScopeA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#name ObjectFirewallVipDynamicMappingA#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#vdom ObjectFirewallVipDynamicMappingA#vdom}
  */
  readonly vdom?: string;
}

export function objectFirewallVipDynamicMappingScopeAToTerraform(struct?: ObjectFirewallVipDynamicMappingScopeA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    vdom: cdktf.stringToTerraform(struct!.vdom),
  }
}


export function objectFirewallVipDynamicMappingScopeAToHclTerraform(struct?: ObjectFirewallVipDynamicMappingScopeA | cdktf.IResolvable): any {
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

export class ObjectFirewallVipDynamicMappingScopeAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallVipDynamicMappingScopeA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectFirewallVipDynamicMappingScopeA | cdktf.IResolvable | undefined) {
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

export class ObjectFirewallVipDynamicMappingScopeAList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallVipDynamicMappingScopeA[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallVipDynamicMappingScopeAOutputReference {
    return new ObjectFirewallVipDynamicMappingScopeAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFirewallVipDynamicMappingRealserversA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#address ObjectFirewallVipDynamicMappingA#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#client_ip ObjectFirewallVipDynamicMappingA#client_ip}
  */
  readonly clientIp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#health_check_proto ObjectFirewallVipDynamicMappingA#health_check_proto}
  */
  readonly healthCheckProto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#healthcheck ObjectFirewallVipDynamicMappingA#healthcheck}
  */
  readonly healthcheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#holddown_interval ObjectFirewallVipDynamicMappingA#holddown_interval}
  */
  readonly holddownInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#http_host ObjectFirewallVipDynamicMappingA#http_host}
  */
  readonly httpHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#id ObjectFirewallVipDynamicMappingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#ip ObjectFirewallVipDynamicMappingA#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#max_connections ObjectFirewallVipDynamicMappingA#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#monitor ObjectFirewallVipDynamicMappingA#monitor}
  */
  readonly monitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#port ObjectFirewallVipDynamicMappingA#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#seq ObjectFirewallVipDynamicMappingA#seq}
  */
  readonly seq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#status ObjectFirewallVipDynamicMappingA#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#translate_host ObjectFirewallVipDynamicMappingA#translate_host}
  */
  readonly translateHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#type ObjectFirewallVipDynamicMappingA#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#verify_cert ObjectFirewallVipDynamicMappingA#verify_cert}
  */
  readonly verifyCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#weight ObjectFirewallVipDynamicMappingA#weight}
  */
  readonly weight?: number;
}

export function objectFirewallVipDynamicMappingRealserversAToTerraform(struct?: ObjectFirewallVipDynamicMappingRealserversA | cdktf.IResolvable): any {
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
    verify_cert: cdktf.stringToTerraform(struct!.verifyCert),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function objectFirewallVipDynamicMappingRealserversAToHclTerraform(struct?: ObjectFirewallVipDynamicMappingRealserversA | cdktf.IResolvable): any {
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

export class ObjectFirewallVipDynamicMappingRealserversAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallVipDynamicMappingRealserversA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectFirewallVipDynamicMappingRealserversA | cdktf.IResolvable | undefined) {
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
      this._verifyCert = value.verifyCert;
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

export class ObjectFirewallVipDynamicMappingRealserversAList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallVipDynamicMappingRealserversA[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallVipDynamicMappingRealserversAOutputReference {
    return new ObjectFirewallVipDynamicMappingRealserversAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFirewallVipDynamicMappingSslCipherSuitesA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#cipher ObjectFirewallVipDynamicMappingA#cipher}
  */
  readonly cipher?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#id ObjectFirewallVipDynamicMappingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#priority ObjectFirewallVipDynamicMappingA#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#versions ObjectFirewallVipDynamicMappingA#versions}
  */
  readonly versions?: string[];
}

export function objectFirewallVipDynamicMappingSslCipherSuitesAToTerraform(struct?: ObjectFirewallVipDynamicMappingSslCipherSuitesA | cdktf.IResolvable): any {
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


export function objectFirewallVipDynamicMappingSslCipherSuitesAToHclTerraform(struct?: ObjectFirewallVipDynamicMappingSslCipherSuitesA | cdktf.IResolvable): any {
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

export class ObjectFirewallVipDynamicMappingSslCipherSuitesAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallVipDynamicMappingSslCipherSuitesA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectFirewallVipDynamicMappingSslCipherSuitesA | cdktf.IResolvable | undefined) {
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

export class ObjectFirewallVipDynamicMappingSslCipherSuitesAList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallVipDynamicMappingSslCipherSuitesA[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallVipDynamicMappingSslCipherSuitesAOutputReference {
    return new ObjectFirewallVipDynamicMappingSslCipherSuitesAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping fortimanager_object_firewall_vip_dynamic_mapping}
*/
export class ObjectFirewallVipDynamicMappingA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_firewall_vip_dynamic_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFirewallVipDynamicMappingA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFirewallVipDynamicMappingA to import
  * @param importFromId The id of the existing ObjectFirewallVipDynamicMappingA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFirewallVipDynamicMappingA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_firewall_vip_dynamic_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_vip_dynamic_mapping fortimanager_object_firewall_vip_dynamic_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFirewallVipDynamicMappingAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectFirewallVipDynamicMappingAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_firewall_vip_dynamic_mapping',
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
    this._vip = config.vip;
    this._weblogicServer = config.weblogicServer;
    this._websphereServer = config.websphereServer;
    this._scope.internalValue = config.scope;
    this._realservers.internalValue = config.realservers;
    this._sslCipherSuites.internalValue = config.sslCipherSuites;
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

  // vip - computed: false, optional: false, required: true
  private _vip?: string; 
  public get vip() {
    return this.getStringAttribute('vip');
  }
  public set vip(value: string) {
    this._vip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vipInput() {
    return this._vip;
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
  private _scope = new ObjectFirewallVipDynamicMappingScopeAList(this, "_scope", false);
  public get scope() {
    return this._scope;
  }
  public putScope(value: ObjectFirewallVipDynamicMappingScopeA[] | cdktf.IResolvable) {
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
  private _realservers = new ObjectFirewallVipDynamicMappingRealserversAList(this, "realservers", false);
  public get realservers() {
    return this._realservers;
  }
  public putRealservers(value: ObjectFirewallVipDynamicMappingRealserversA[] | cdktf.IResolvable) {
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
  private _sslCipherSuites = new ObjectFirewallVipDynamicMappingSslCipherSuitesAList(this, "ssl_cipher_suites", false);
  public get sslCipherSuites() {
    return this._sslCipherSuites;
  }
  public putSslCipherSuites(value: ObjectFirewallVipDynamicMappingSslCipherSuitesA[] | cdktf.IResolvable) {
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
      add_nat46_route: cdktf.stringToTerraform(this._addNat46Route),
      adom: cdktf.stringToTerraform(this._adom),
      arp_reply: cdktf.stringToTerraform(this._arpReply),
      client_cert: cdktf.stringToTerraform(this._clientCert),
      color: cdktf.numberToTerraform(this._color),
      comment: cdktf.stringToTerraform(this._comment),
      dns_mapping_ttl: cdktf.numberToTerraform(this._dnsMappingTtl),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      empty_cert_action: cdktf.stringToTerraform(this._emptyCertAction),
      extaddr: cdktf.stringToTerraform(this._extaddr),
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
      service: cdktf.stringToTerraform(this._service),
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
      vip: cdktf.stringToTerraform(this._vip),
      weblogic_server: cdktf.stringToTerraform(this._weblogicServer),
      websphere_server: cdktf.stringToTerraform(this._websphereServer),
      _scope: cdktf.listMapper(objectFirewallVipDynamicMappingScopeAToTerraform, true)(this._scope.internalValue),
      realservers: cdktf.listMapper(objectFirewallVipDynamicMappingRealserversAToTerraform, true)(this._realservers.internalValue),
      ssl_cipher_suites: cdktf.listMapper(objectFirewallVipDynamicMappingSslCipherSuitesAToTerraform, true)(this._sslCipherSuites.internalValue),
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
        value: cdktf.stringToHclTerraform(this._extaddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
        value: cdktf.stringToHclTerraform(this._service),
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
      vip: {
        value: cdktf.stringToHclTerraform(this._vip),
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
        value: cdktf.listMapperHcl(objectFirewallVipDynamicMappingScopeAToHclTerraform, true)(this._scope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallVipDynamicMappingScopeAList",
      },
      realservers: {
        value: cdktf.listMapperHcl(objectFirewallVipDynamicMappingRealserversAToHclTerraform, true)(this._realservers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallVipDynamicMappingRealserversAList",
      },
      ssl_cipher_suites: {
        value: cdktf.listMapperHcl(objectFirewallVipDynamicMappingSslCipherSuitesAToHclTerraform, true)(this._sslCipherSuites.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallVipDynamicMappingSslCipherSuitesAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
