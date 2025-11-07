// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadBalanceProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#allow_ssl_versions LoadBalanceProfile#allow_ssl_versions}
  */
  readonly allowSslVersions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#cert_verify LoadBalanceProfile#cert_verify}
  */
  readonly certVerify?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#client_address LoadBalanceProfile#client_address}
  */
  readonly clientAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#client_keepalive LoadBalanceProfile#client_keepalive}
  */
  readonly clientKeepalive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#client_protocol LoadBalanceProfile#client_protocol}
  */
  readonly clientProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#client_sni_required LoadBalanceProfile#client_sni_required}
  */
  readonly clientSniRequired?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#client_ssl LoadBalanceProfile#client_ssl}
  */
  readonly clientSsl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#client_timeout LoadBalanceProfile#client_timeout}
  */
  readonly clientTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#compression LoadBalanceProfile#compression}
  */
  readonly compression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#connect_timeout LoadBalanceProfile#connect_timeout}
  */
  readonly connectTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#customized_ssl_ciphers LoadBalanceProfile#customized_ssl_ciphers}
  */
  readonly customizedSslCiphers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#customized_ssl_ciphers_flag LoadBalanceProfile#customized_ssl_ciphers_flag}
  */
  readonly customizedSslCiphersFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#decompression LoadBalanceProfile#decompression}
  */
  readonly decompression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#deploy_mode LoadBalanceProfile#deploy_mode}
  */
  readonly deployMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#dns_authenticate_flag LoadBalanceProfile#dns_authenticate_flag}
  */
  readonly dnsAuthenticateFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#dns_cache_ageout_time LoadBalanceProfile#dns_cache_ageout_time}
  */
  readonly dnsCacheAgeoutTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#dns_cache_entry_size LoadBalanceProfile#dns_cache_entry_size}
  */
  readonly dnsCacheEntrySize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#dns_cache_flag LoadBalanceProfile#dns_cache_flag}
  */
  readonly dnsCacheFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#dns_cache_response_type LoadBalanceProfile#dns_cache_response_type}
  */
  readonly dnsCacheResponseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#dns_cache_size LoadBalanceProfile#dns_cache_size}
  */
  readonly dnsCacheSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#dns_malform_query_action LoadBalanceProfile#dns_malform_query_action}
  */
  readonly dnsMalformQueryAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#dns_max_query_length LoadBalanceProfile#dns_max_query_length}
  */
  readonly dnsMaxQueryLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#dynamic_auth LoadBalanceProfile#dynamic_auth}
  */
  readonly dynamicAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#dynamic_auth_port LoadBalanceProfile#dynamic_auth_port}
  */
  readonly dynamicAuthPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#failed_client_str LoadBalanceProfile#failed_client_str}
  */
  readonly failedClientStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#failed_client_type LoadBalanceProfile#failed_client_type}
  */
  readonly failedClientType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#failed_server_str LoadBalanceProfile#failed_server_str}
  */
  readonly failedServerStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#failed_server_type LoadBalanceProfile#failed_server_type}
  */
  readonly failedServerType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#forward_client_certificate LoadBalanceProfile#forward_client_certificate}
  */
  readonly forwardClientCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#forward_client_certificate_header LoadBalanceProfile#forward_client_certificate_header}
  */
  readonly forwardClientCertificateHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#geoip_list LoadBalanceProfile#geoip_list}
  */
  readonly geoipList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#geoip_redirect LoadBalanceProfile#geoip_redirect}
  */
  readonly geoipRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#http2_profile LoadBalanceProfile#http2_profile}
  */
  readonly http2Profile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#http_keepalive_timeout LoadBalanceProfile#http_keepalive_timeout}
  */
  readonly httpKeepaliveTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#http_mode LoadBalanceProfile#http_mode}
  */
  readonly httpMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#http_request_timeout LoadBalanceProfile#http_request_timeout}
  */
  readonly httpRequestTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#http_send_timeout LoadBalanceProfile#http_send_timeout}
  */
  readonly httpSendTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#http_x_forwarded_for LoadBalanceProfile#http_x_forwarded_for}
  */
  readonly httpXForwardedFor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#http_x_forwarded_for_header LoadBalanceProfile#http_x_forwarded_for_header}
  */
  readonly httpXForwardedForHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#id LoadBalanceProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#idle_time LoadBalanceProfile#idle_time}
  */
  readonly idleTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#idle_timeout LoadBalanceProfile#idle_timeout}
  */
  readonly idleTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#insert_client_ip LoadBalanceProfile#insert_client_ip}
  */
  readonly insertClientIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#intermediate_ca_group LoadBalanceProfile#intermediate_ca_group}
  */
  readonly intermediateCaGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#ip_reputation LoadBalanceProfile#ip_reputation}
  */
  readonly ipReputation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#ip_reputation_redirect LoadBalanceProfile#ip_reputation_redirect}
  */
  readonly ipReputationRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#length_indicator_shift LoadBalanceProfile#length_indicator_shift}
  */
  readonly lengthIndicatorShift?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#length_indicator_size LoadBalanceProfile#length_indicator_size}
  */
  readonly lengthIndicatorSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#length_indicator_type LoadBalanceProfile#length_indicator_type}
  */
  readonly lengthIndicatorType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#local_cert LoadBalanceProfile#local_cert}
  */
  readonly localCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#local_cert_group LoadBalanceProfile#local_cert_group}
  */
  readonly localCertGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#max_header_size LoadBalanceProfile#max_header_size}
  */
  readonly maxHeaderSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#max_http_headers LoadBalanceProfile#max_http_headers}
  */
  readonly maxHttpHeaders?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#media_address LoadBalanceProfile#media_address}
  */
  readonly mediaAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#mkey LoadBalanceProfile#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#msg_encode_type LoadBalanceProfile#msg_encode_type}
  */
  readonly msgEncodeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#mysql_mode LoadBalanceProfile#mysql_mode}
  */
  readonly mysqlMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#new_ssl_ciphers_long LoadBalanceProfile#new_ssl_ciphers_long}
  */
  readonly newSslCiphersLong?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#opt_header_length LoadBalanceProfile#opt_header_length}
  */
  readonly optHeaderLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#opt_trailer_hex LoadBalanceProfile#opt_trailer_hex}
  */
  readonly optTrailerHex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#origin_host LoadBalanceProfile#origin_host}
  */
  readonly originHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#origin_realm LoadBalanceProfile#origin_realm}
  */
  readonly originRealm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#product_name LoadBalanceProfile#product_name}
  */
  readonly productName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#queue_timeout LoadBalanceProfile#queue_timeout}
  */
  readonly queueTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#ram_caching LoadBalanceProfile#ram_caching}
  */
  readonly ramCaching?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#response_half_closed_request LoadBalanceProfile#response_half_closed_request}
  */
  readonly responseHalfClosedRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#security_mode LoadBalanceProfile#security_mode}
  */
  readonly securityMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#server_age LoadBalanceProfile#server_age}
  */
  readonly serverAge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#server_close_propagation LoadBalanceProfile#server_close_propagation}
  */
  readonly serverClosePropagation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#server_keepalive LoadBalanceProfile#server_keepalive}
  */
  readonly serverKeepalive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#server_keepalive_timeout LoadBalanceProfile#server_keepalive_timeout}
  */
  readonly serverKeepaliveTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#server_max_size LoadBalanceProfile#server_max_size}
  */
  readonly serverMaxSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#server_protocol LoadBalanceProfile#server_protocol}
  */
  readonly serverProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#server_timeout LoadBalanceProfile#server_timeout}
  */
  readonly serverTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#sip_dlg_timeout LoadBalanceProfile#sip_dlg_timeout}
  */
  readonly sipDlgTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#sip_max_size LoadBalanceProfile#sip_max_size}
  */
  readonly sipMaxSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#smtp_disable_command LoadBalanceProfile#smtp_disable_command}
  */
  readonly smtpDisableCommand?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#smtp_disable_command_status LoadBalanceProfile#smtp_disable_command_status}
  */
  readonly smtpDisableCommandStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#smtp_domain_name LoadBalanceProfile#smtp_domain_name}
  */
  readonly smtpDomainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#source_port LoadBalanceProfile#source_port}
  */
  readonly sourcePort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#ssl LoadBalanceProfile#ssl}
  */
  readonly ssl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#ssl_algorithm LoadBalanceProfile#ssl_algorithm}
  */
  readonly sslAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#ssl_ciphers LoadBalanceProfile#ssl_ciphers}
  */
  readonly sslCiphers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#ssl_proxy LoadBalanceProfile#ssl_proxy}
  */
  readonly sslProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#starttls_active_mode LoadBalanceProfile#starttls_active_mode}
  */
  readonly starttlsActiveMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#stateless LoadBalanceProfile#stateless}
  */
  readonly stateless?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#timeout_ip_session LoadBalanceProfile#timeout_ip_session}
  */
  readonly timeoutIpSession?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#timeout_radius_session LoadBalanceProfile#timeout_radius_session}
  */
  readonly timeoutRadiusSession?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#timeout_tcp_session LoadBalanceProfile#timeout_tcp_session}
  */
  readonly timeoutTcpSession?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#timeout_tcp_session_after_fin LoadBalanceProfile#timeout_tcp_session_after_fin}
  */
  readonly timeoutTcpSessionAfterFin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#timeout_udp_session LoadBalanceProfile#timeout_udp_session}
  */
  readonly timeoutUdpSession?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#tune_bufsize LoadBalanceProfile#tune_bufsize}
  */
  readonly tuneBufsize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#type LoadBalanceProfile#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#use_tls_tickets LoadBalanceProfile#use_tls_tickets}
  */
  readonly useTlsTickets?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#vdom LoadBalanceProfile#vdom}
  */
  readonly vdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#vendor_id LoadBalanceProfile#vendor_id}
  */
  readonly vendorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#whitelist LoadBalanceProfile#whitelist}
  */
  readonly whitelist?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile fortiadc_load_balance_profile}
*/
export class LoadBalanceProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_load_balance_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoadBalanceProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoadBalanceProfile to import
  * @param importFromId The id of the existing LoadBalanceProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoadBalanceProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_load_balance_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_profile fortiadc_load_balance_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadBalanceProfileConfig
  */
  public constructor(scope: Construct, id: string, config: LoadBalanceProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_load_balance_profile',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowSslVersions = config.allowSslVersions;
    this._certVerify = config.certVerify;
    this._clientAddress = config.clientAddress;
    this._clientKeepalive = config.clientKeepalive;
    this._clientProtocol = config.clientProtocol;
    this._clientSniRequired = config.clientSniRequired;
    this._clientSsl = config.clientSsl;
    this._clientTimeout = config.clientTimeout;
    this._compression = config.compression;
    this._connectTimeout = config.connectTimeout;
    this._customizedSslCiphers = config.customizedSslCiphers;
    this._customizedSslCiphersFlag = config.customizedSslCiphersFlag;
    this._decompression = config.decompression;
    this._deployMode = config.deployMode;
    this._dnsAuthenticateFlag = config.dnsAuthenticateFlag;
    this._dnsCacheAgeoutTime = config.dnsCacheAgeoutTime;
    this._dnsCacheEntrySize = config.dnsCacheEntrySize;
    this._dnsCacheFlag = config.dnsCacheFlag;
    this._dnsCacheResponseType = config.dnsCacheResponseType;
    this._dnsCacheSize = config.dnsCacheSize;
    this._dnsMalformQueryAction = config.dnsMalformQueryAction;
    this._dnsMaxQueryLength = config.dnsMaxQueryLength;
    this._dynamicAuth = config.dynamicAuth;
    this._dynamicAuthPort = config.dynamicAuthPort;
    this._failedClientStr = config.failedClientStr;
    this._failedClientType = config.failedClientType;
    this._failedServerStr = config.failedServerStr;
    this._failedServerType = config.failedServerType;
    this._forwardClientCertificate = config.forwardClientCertificate;
    this._forwardClientCertificateHeader = config.forwardClientCertificateHeader;
    this._geoipList = config.geoipList;
    this._geoipRedirect = config.geoipRedirect;
    this._http2Profile = config.http2Profile;
    this._httpKeepaliveTimeout = config.httpKeepaliveTimeout;
    this._httpMode = config.httpMode;
    this._httpRequestTimeout = config.httpRequestTimeout;
    this._httpSendTimeout = config.httpSendTimeout;
    this._httpXForwardedFor = config.httpXForwardedFor;
    this._httpXForwardedForHeader = config.httpXForwardedForHeader;
    this._id = config.id;
    this._idleTime = config.idleTime;
    this._idleTimeout = config.idleTimeout;
    this._insertClientIp = config.insertClientIp;
    this._intermediateCaGroup = config.intermediateCaGroup;
    this._ipReputation = config.ipReputation;
    this._ipReputationRedirect = config.ipReputationRedirect;
    this._lengthIndicatorShift = config.lengthIndicatorShift;
    this._lengthIndicatorSize = config.lengthIndicatorSize;
    this._lengthIndicatorType = config.lengthIndicatorType;
    this._localCert = config.localCert;
    this._localCertGroup = config.localCertGroup;
    this._maxHeaderSize = config.maxHeaderSize;
    this._maxHttpHeaders = config.maxHttpHeaders;
    this._mediaAddress = config.mediaAddress;
    this._mkey = config.mkey;
    this._msgEncodeType = config.msgEncodeType;
    this._mysqlMode = config.mysqlMode;
    this._newSslCiphersLong = config.newSslCiphersLong;
    this._optHeaderLength = config.optHeaderLength;
    this._optTrailerHex = config.optTrailerHex;
    this._originHost = config.originHost;
    this._originRealm = config.originRealm;
    this._productName = config.productName;
    this._queueTimeout = config.queueTimeout;
    this._ramCaching = config.ramCaching;
    this._responseHalfClosedRequest = config.responseHalfClosedRequest;
    this._securityMode = config.securityMode;
    this._serverAge = config.serverAge;
    this._serverClosePropagation = config.serverClosePropagation;
    this._serverKeepalive = config.serverKeepalive;
    this._serverKeepaliveTimeout = config.serverKeepaliveTimeout;
    this._serverMaxSize = config.serverMaxSize;
    this._serverProtocol = config.serverProtocol;
    this._serverTimeout = config.serverTimeout;
    this._sipDlgTimeout = config.sipDlgTimeout;
    this._sipMaxSize = config.sipMaxSize;
    this._smtpDisableCommand = config.smtpDisableCommand;
    this._smtpDisableCommandStatus = config.smtpDisableCommandStatus;
    this._smtpDomainName = config.smtpDomainName;
    this._sourcePort = config.sourcePort;
    this._ssl = config.ssl;
    this._sslAlgorithm = config.sslAlgorithm;
    this._sslCiphers = config.sslCiphers;
    this._sslProxy = config.sslProxy;
    this._starttlsActiveMode = config.starttlsActiveMode;
    this._stateless = config.stateless;
    this._timeoutIpSession = config.timeoutIpSession;
    this._timeoutRadiusSession = config.timeoutRadiusSession;
    this._timeoutTcpSession = config.timeoutTcpSession;
    this._timeoutTcpSessionAfterFin = config.timeoutTcpSessionAfterFin;
    this._timeoutUdpSession = config.timeoutUdpSession;
    this._tuneBufsize = config.tuneBufsize;
    this._type = config.type;
    this._useTlsTickets = config.useTlsTickets;
    this._vdom = config.vdom;
    this._vendorId = config.vendorId;
    this._whitelist = config.whitelist;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_ssl_versions - computed: true, optional: true, required: false
  private _allowSslVersions?: string; 
  public get allowSslVersions() {
    return this.getStringAttribute('allow_ssl_versions');
  }
  public set allowSslVersions(value: string) {
    this._allowSslVersions = value;
  }
  public resetAllowSslVersions() {
    this._allowSslVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSslVersionsInput() {
    return this._allowSslVersions;
  }

  // cert_verify - computed: true, optional: true, required: false
  private _certVerify?: string; 
  public get certVerify() {
    return this.getStringAttribute('cert_verify');
  }
  public set certVerify(value: string) {
    this._certVerify = value;
  }
  public resetCertVerify() {
    this._certVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certVerifyInput() {
    return this._certVerify;
  }

  // client_address - computed: true, optional: true, required: false
  private _clientAddress?: string; 
  public get clientAddress() {
    return this.getStringAttribute('client_address');
  }
  public set clientAddress(value: string) {
    this._clientAddress = value;
  }
  public resetClientAddress() {
    this._clientAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAddressInput() {
    return this._clientAddress;
  }

  // client_keepalive - computed: true, optional: true, required: false
  private _clientKeepalive?: string; 
  public get clientKeepalive() {
    return this.getStringAttribute('client_keepalive');
  }
  public set clientKeepalive(value: string) {
    this._clientKeepalive = value;
  }
  public resetClientKeepalive() {
    this._clientKeepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeepaliveInput() {
    return this._clientKeepalive;
  }

  // client_protocol - computed: true, optional: true, required: false
  private _clientProtocol?: string; 
  public get clientProtocol() {
    return this.getStringAttribute('client_protocol');
  }
  public set clientProtocol(value: string) {
    this._clientProtocol = value;
  }
  public resetClientProtocol() {
    this._clientProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientProtocolInput() {
    return this._clientProtocol;
  }

  // client_sni_required - computed: true, optional: true, required: false
  private _clientSniRequired?: string; 
  public get clientSniRequired() {
    return this.getStringAttribute('client_sni_required');
  }
  public set clientSniRequired(value: string) {
    this._clientSniRequired = value;
  }
  public resetClientSniRequired() {
    this._clientSniRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSniRequiredInput() {
    return this._clientSniRequired;
  }

  // client_ssl - computed: true, optional: true, required: false
  private _clientSsl?: string; 
  public get clientSsl() {
    return this.getStringAttribute('client_ssl');
  }
  public set clientSsl(value: string) {
    this._clientSsl = value;
  }
  public resetClientSsl() {
    this._clientSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSslInput() {
    return this._clientSsl;
  }

  // client_timeout - computed: true, optional: true, required: false
  private _clientTimeout?: string; 
  public get clientTimeout() {
    return this.getStringAttribute('client_timeout');
  }
  public set clientTimeout(value: string) {
    this._clientTimeout = value;
  }
  public resetClientTimeout() {
    this._clientTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTimeoutInput() {
    return this._clientTimeout;
  }

  // compression - computed: true, optional: true, required: false
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // connect_timeout - computed: true, optional: true, required: false
  private _connectTimeout?: string; 
  public get connectTimeout() {
    return this.getStringAttribute('connect_timeout');
  }
  public set connectTimeout(value: string) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // customized_ssl_ciphers - computed: true, optional: true, required: false
  private _customizedSslCiphers?: string; 
  public get customizedSslCiphers() {
    return this.getStringAttribute('customized_ssl_ciphers');
  }
  public set customizedSslCiphers(value: string) {
    this._customizedSslCiphers = value;
  }
  public resetCustomizedSslCiphers() {
    this._customizedSslCiphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizedSslCiphersInput() {
    return this._customizedSslCiphers;
  }

  // customized_ssl_ciphers_flag - computed: true, optional: true, required: false
  private _customizedSslCiphersFlag?: string; 
  public get customizedSslCiphersFlag() {
    return this.getStringAttribute('customized_ssl_ciphers_flag');
  }
  public set customizedSslCiphersFlag(value: string) {
    this._customizedSslCiphersFlag = value;
  }
  public resetCustomizedSslCiphersFlag() {
    this._customizedSslCiphersFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizedSslCiphersFlagInput() {
    return this._customizedSslCiphersFlag;
  }

  // decompression - computed: true, optional: true, required: false
  private _decompression?: string; 
  public get decompression() {
    return this.getStringAttribute('decompression');
  }
  public set decompression(value: string) {
    this._decompression = value;
  }
  public resetDecompression() {
    this._decompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decompressionInput() {
    return this._decompression;
  }

  // deploy_mode - computed: true, optional: true, required: false
  private _deployMode?: string; 
  public get deployMode() {
    return this.getStringAttribute('deploy_mode');
  }
  public set deployMode(value: string) {
    this._deployMode = value;
  }
  public resetDeployMode() {
    this._deployMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployModeInput() {
    return this._deployMode;
  }

  // dns_authenticate_flag - computed: true, optional: true, required: false
  private _dnsAuthenticateFlag?: string; 
  public get dnsAuthenticateFlag() {
    return this.getStringAttribute('dns_authenticate_flag');
  }
  public set dnsAuthenticateFlag(value: string) {
    this._dnsAuthenticateFlag = value;
  }
  public resetDnsAuthenticateFlag() {
    this._dnsAuthenticateFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsAuthenticateFlagInput() {
    return this._dnsAuthenticateFlag;
  }

  // dns_cache_ageout_time - computed: true, optional: true, required: false
  private _dnsCacheAgeoutTime?: string; 
  public get dnsCacheAgeoutTime() {
    return this.getStringAttribute('dns_cache_ageout_time');
  }
  public set dnsCacheAgeoutTime(value: string) {
    this._dnsCacheAgeoutTime = value;
  }
  public resetDnsCacheAgeoutTime() {
    this._dnsCacheAgeoutTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCacheAgeoutTimeInput() {
    return this._dnsCacheAgeoutTime;
  }

  // dns_cache_entry_size - computed: true, optional: true, required: false
  private _dnsCacheEntrySize?: string; 
  public get dnsCacheEntrySize() {
    return this.getStringAttribute('dns_cache_entry_size');
  }
  public set dnsCacheEntrySize(value: string) {
    this._dnsCacheEntrySize = value;
  }
  public resetDnsCacheEntrySize() {
    this._dnsCacheEntrySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCacheEntrySizeInput() {
    return this._dnsCacheEntrySize;
  }

  // dns_cache_flag - computed: true, optional: true, required: false
  private _dnsCacheFlag?: string; 
  public get dnsCacheFlag() {
    return this.getStringAttribute('dns_cache_flag');
  }
  public set dnsCacheFlag(value: string) {
    this._dnsCacheFlag = value;
  }
  public resetDnsCacheFlag() {
    this._dnsCacheFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCacheFlagInput() {
    return this._dnsCacheFlag;
  }

  // dns_cache_response_type - computed: true, optional: true, required: false
  private _dnsCacheResponseType?: string; 
  public get dnsCacheResponseType() {
    return this.getStringAttribute('dns_cache_response_type');
  }
  public set dnsCacheResponseType(value: string) {
    this._dnsCacheResponseType = value;
  }
  public resetDnsCacheResponseType() {
    this._dnsCacheResponseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCacheResponseTypeInput() {
    return this._dnsCacheResponseType;
  }

  // dns_cache_size - computed: true, optional: true, required: false
  private _dnsCacheSize?: string; 
  public get dnsCacheSize() {
    return this.getStringAttribute('dns_cache_size');
  }
  public set dnsCacheSize(value: string) {
    this._dnsCacheSize = value;
  }
  public resetDnsCacheSize() {
    this._dnsCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCacheSizeInput() {
    return this._dnsCacheSize;
  }

  // dns_malform_query_action - computed: true, optional: true, required: false
  private _dnsMalformQueryAction?: string; 
  public get dnsMalformQueryAction() {
    return this.getStringAttribute('dns_malform_query_action');
  }
  public set dnsMalformQueryAction(value: string) {
    this._dnsMalformQueryAction = value;
  }
  public resetDnsMalformQueryAction() {
    this._dnsMalformQueryAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsMalformQueryActionInput() {
    return this._dnsMalformQueryAction;
  }

  // dns_max_query_length - computed: true, optional: true, required: false
  private _dnsMaxQueryLength?: string; 
  public get dnsMaxQueryLength() {
    return this.getStringAttribute('dns_max_query_length');
  }
  public set dnsMaxQueryLength(value: string) {
    this._dnsMaxQueryLength = value;
  }
  public resetDnsMaxQueryLength() {
    this._dnsMaxQueryLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsMaxQueryLengthInput() {
    return this._dnsMaxQueryLength;
  }

  // dynamic_auth - computed: true, optional: true, required: false
  private _dynamicAuth?: string; 
  public get dynamicAuth() {
    return this.getStringAttribute('dynamic_auth');
  }
  public set dynamicAuth(value: string) {
    this._dynamicAuth = value;
  }
  public resetDynamicAuth() {
    this._dynamicAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicAuthInput() {
    return this._dynamicAuth;
  }

  // dynamic_auth_port - computed: true, optional: true, required: false
  private _dynamicAuthPort?: string; 
  public get dynamicAuthPort() {
    return this.getStringAttribute('dynamic_auth_port');
  }
  public set dynamicAuthPort(value: string) {
    this._dynamicAuthPort = value;
  }
  public resetDynamicAuthPort() {
    this._dynamicAuthPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicAuthPortInput() {
    return this._dynamicAuthPort;
  }

  // failed_client_str - computed: true, optional: true, required: false
  private _failedClientStr?: string; 
  public get failedClientStr() {
    return this.getStringAttribute('failed_client_str');
  }
  public set failedClientStr(value: string) {
    this._failedClientStr = value;
  }
  public resetFailedClientStr() {
    this._failedClientStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedClientStrInput() {
    return this._failedClientStr;
  }

  // failed_client_type - computed: true, optional: true, required: false
  private _failedClientType?: string; 
  public get failedClientType() {
    return this.getStringAttribute('failed_client_type');
  }
  public set failedClientType(value: string) {
    this._failedClientType = value;
  }
  public resetFailedClientType() {
    this._failedClientType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedClientTypeInput() {
    return this._failedClientType;
  }

  // failed_server_str - computed: true, optional: true, required: false
  private _failedServerStr?: string; 
  public get failedServerStr() {
    return this.getStringAttribute('failed_server_str');
  }
  public set failedServerStr(value: string) {
    this._failedServerStr = value;
  }
  public resetFailedServerStr() {
    this._failedServerStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedServerStrInput() {
    return this._failedServerStr;
  }

  // failed_server_type - computed: true, optional: true, required: false
  private _failedServerType?: string; 
  public get failedServerType() {
    return this.getStringAttribute('failed_server_type');
  }
  public set failedServerType(value: string) {
    this._failedServerType = value;
  }
  public resetFailedServerType() {
    this._failedServerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedServerTypeInput() {
    return this._failedServerType;
  }

  // forward_client_certificate - computed: true, optional: true, required: false
  private _forwardClientCertificate?: string; 
  public get forwardClientCertificate() {
    return this.getStringAttribute('forward_client_certificate');
  }
  public set forwardClientCertificate(value: string) {
    this._forwardClientCertificate = value;
  }
  public resetForwardClientCertificate() {
    this._forwardClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardClientCertificateInput() {
    return this._forwardClientCertificate;
  }

  // forward_client_certificate_header - computed: true, optional: true, required: false
  private _forwardClientCertificateHeader?: string; 
  public get forwardClientCertificateHeader() {
    return this.getStringAttribute('forward_client_certificate_header');
  }
  public set forwardClientCertificateHeader(value: string) {
    this._forwardClientCertificateHeader = value;
  }
  public resetForwardClientCertificateHeader() {
    this._forwardClientCertificateHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardClientCertificateHeaderInput() {
    return this._forwardClientCertificateHeader;
  }

  // geoip_list - computed: true, optional: true, required: false
  private _geoipList?: string; 
  public get geoipList() {
    return this.getStringAttribute('geoip_list');
  }
  public set geoipList(value: string) {
    this._geoipList = value;
  }
  public resetGeoipList() {
    this._geoipList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoipListInput() {
    return this._geoipList;
  }

  // geoip_redirect - computed: true, optional: true, required: false
  private _geoipRedirect?: string; 
  public get geoipRedirect() {
    return this.getStringAttribute('geoip_redirect');
  }
  public set geoipRedirect(value: string) {
    this._geoipRedirect = value;
  }
  public resetGeoipRedirect() {
    this._geoipRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoipRedirectInput() {
    return this._geoipRedirect;
  }

  // http2_profile - computed: true, optional: true, required: false
  private _http2Profile?: string; 
  public get http2Profile() {
    return this.getStringAttribute('http2_profile');
  }
  public set http2Profile(value: string) {
    this._http2Profile = value;
  }
  public resetHttp2Profile() {
    this._http2Profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2ProfileInput() {
    return this._http2Profile;
  }

  // http_keepalive_timeout - computed: true, optional: true, required: false
  private _httpKeepaliveTimeout?: string; 
  public get httpKeepaliveTimeout() {
    return this.getStringAttribute('http_keepalive_timeout');
  }
  public set httpKeepaliveTimeout(value: string) {
    this._httpKeepaliveTimeout = value;
  }
  public resetHttpKeepaliveTimeout() {
    this._httpKeepaliveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpKeepaliveTimeoutInput() {
    return this._httpKeepaliveTimeout;
  }

  // http_mode - computed: true, optional: true, required: false
  private _httpMode?: string; 
  public get httpMode() {
    return this.getStringAttribute('http_mode');
  }
  public set httpMode(value: string) {
    this._httpMode = value;
  }
  public resetHttpMode() {
    this._httpMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpModeInput() {
    return this._httpMode;
  }

  // http_request_timeout - computed: true, optional: true, required: false
  private _httpRequestTimeout?: string; 
  public get httpRequestTimeout() {
    return this.getStringAttribute('http_request_timeout');
  }
  public set httpRequestTimeout(value: string) {
    this._httpRequestTimeout = value;
  }
  public resetHttpRequestTimeout() {
    this._httpRequestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestTimeoutInput() {
    return this._httpRequestTimeout;
  }

  // http_send_timeout - computed: true, optional: true, required: false
  private _httpSendTimeout?: string; 
  public get httpSendTimeout() {
    return this.getStringAttribute('http_send_timeout');
  }
  public set httpSendTimeout(value: string) {
    this._httpSendTimeout = value;
  }
  public resetHttpSendTimeout() {
    this._httpSendTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpSendTimeoutInput() {
    return this._httpSendTimeout;
  }

  // http_x_forwarded_for - computed: true, optional: true, required: false
  private _httpXForwardedFor?: string; 
  public get httpXForwardedFor() {
    return this.getStringAttribute('http_x_forwarded_for');
  }
  public set httpXForwardedFor(value: string) {
    this._httpXForwardedFor = value;
  }
  public resetHttpXForwardedFor() {
    this._httpXForwardedFor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpXForwardedForInput() {
    return this._httpXForwardedFor;
  }

  // http_x_forwarded_for_header - computed: true, optional: true, required: false
  private _httpXForwardedForHeader?: string; 
  public get httpXForwardedForHeader() {
    return this.getStringAttribute('http_x_forwarded_for_header');
  }
  public set httpXForwardedForHeader(value: string) {
    this._httpXForwardedForHeader = value;
  }
  public resetHttpXForwardedForHeader() {
    this._httpXForwardedForHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpXForwardedForHeaderInput() {
    return this._httpXForwardedForHeader;
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

  // idle_time - computed: true, optional: true, required: false
  private _idleTime?: string; 
  public get idleTime() {
    return this.getStringAttribute('idle_time');
  }
  public set idleTime(value: string) {
    this._idleTime = value;
  }
  public resetIdleTime() {
    this._idleTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeInput() {
    return this._idleTime;
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

  // insert_client_ip - computed: true, optional: true, required: false
  private _insertClientIp?: string; 
  public get insertClientIp() {
    return this.getStringAttribute('insert_client_ip');
  }
  public set insertClientIp(value: string) {
    this._insertClientIp = value;
  }
  public resetInsertClientIp() {
    this._insertClientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertClientIpInput() {
    return this._insertClientIp;
  }

  // intermediate_ca_group - computed: true, optional: true, required: false
  private _intermediateCaGroup?: string; 
  public get intermediateCaGroup() {
    return this.getStringAttribute('intermediate_ca_group');
  }
  public set intermediateCaGroup(value: string) {
    this._intermediateCaGroup = value;
  }
  public resetIntermediateCaGroup() {
    this._intermediateCaGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intermediateCaGroupInput() {
    return this._intermediateCaGroup;
  }

  // ip_reputation - computed: true, optional: true, required: false
  private _ipReputation?: string; 
  public get ipReputation() {
    return this.getStringAttribute('ip_reputation');
  }
  public set ipReputation(value: string) {
    this._ipReputation = value;
  }
  public resetIpReputation() {
    this._ipReputation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipReputationInput() {
    return this._ipReputation;
  }

  // ip_reputation_redirect - computed: true, optional: true, required: false
  private _ipReputationRedirect?: string; 
  public get ipReputationRedirect() {
    return this.getStringAttribute('ip_reputation_redirect');
  }
  public set ipReputationRedirect(value: string) {
    this._ipReputationRedirect = value;
  }
  public resetIpReputationRedirect() {
    this._ipReputationRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipReputationRedirectInput() {
    return this._ipReputationRedirect;
  }

  // length_indicator_shift - computed: true, optional: true, required: false
  private _lengthIndicatorShift?: string; 
  public get lengthIndicatorShift() {
    return this.getStringAttribute('length_indicator_shift');
  }
  public set lengthIndicatorShift(value: string) {
    this._lengthIndicatorShift = value;
  }
  public resetLengthIndicatorShift() {
    this._lengthIndicatorShift = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthIndicatorShiftInput() {
    return this._lengthIndicatorShift;
  }

  // length_indicator_size - computed: true, optional: true, required: false
  private _lengthIndicatorSize?: string; 
  public get lengthIndicatorSize() {
    return this.getStringAttribute('length_indicator_size');
  }
  public set lengthIndicatorSize(value: string) {
    this._lengthIndicatorSize = value;
  }
  public resetLengthIndicatorSize() {
    this._lengthIndicatorSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthIndicatorSizeInput() {
    return this._lengthIndicatorSize;
  }

  // length_indicator_type - computed: true, optional: true, required: false
  private _lengthIndicatorType?: string; 
  public get lengthIndicatorType() {
    return this.getStringAttribute('length_indicator_type');
  }
  public set lengthIndicatorType(value: string) {
    this._lengthIndicatorType = value;
  }
  public resetLengthIndicatorType() {
    this._lengthIndicatorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthIndicatorTypeInput() {
    return this._lengthIndicatorType;
  }

  // local_cert - computed: true, optional: true, required: false
  private _localCert?: string; 
  public get localCert() {
    return this.getStringAttribute('local_cert');
  }
  public set localCert(value: string) {
    this._localCert = value;
  }
  public resetLocalCert() {
    this._localCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localCertInput() {
    return this._localCert;
  }

  // local_cert_group - computed: true, optional: true, required: false
  private _localCertGroup?: string; 
  public get localCertGroup() {
    return this.getStringAttribute('local_cert_group');
  }
  public set localCertGroup(value: string) {
    this._localCertGroup = value;
  }
  public resetLocalCertGroup() {
    this._localCertGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localCertGroupInput() {
    return this._localCertGroup;
  }

  // max_header_size - computed: true, optional: true, required: false
  private _maxHeaderSize?: string; 
  public get maxHeaderSize() {
    return this.getStringAttribute('max_header_size');
  }
  public set maxHeaderSize(value: string) {
    this._maxHeaderSize = value;
  }
  public resetMaxHeaderSize() {
    this._maxHeaderSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHeaderSizeInput() {
    return this._maxHeaderSize;
  }

  // max_http_headers - computed: true, optional: true, required: false
  private _maxHttpHeaders?: string; 
  public get maxHttpHeaders() {
    return this.getStringAttribute('max_http_headers');
  }
  public set maxHttpHeaders(value: string) {
    this._maxHttpHeaders = value;
  }
  public resetMaxHttpHeaders() {
    this._maxHttpHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHttpHeadersInput() {
    return this._maxHttpHeaders;
  }

  // media_address - computed: true, optional: true, required: false
  private _mediaAddress?: string; 
  public get mediaAddress() {
    return this.getStringAttribute('media_address');
  }
  public set mediaAddress(value: string) {
    this._mediaAddress = value;
  }
  public resetMediaAddress() {
    this._mediaAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaAddressInput() {
    return this._mediaAddress;
  }

  // mkey - computed: false, optional: false, required: true
  private _mkey?: string; 
  public get mkey() {
    return this.getStringAttribute('mkey');
  }
  public set mkey(value: string) {
    this._mkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mkeyInput() {
    return this._mkey;
  }

  // msg_encode_type - computed: true, optional: true, required: false
  private _msgEncodeType?: string; 
  public get msgEncodeType() {
    return this.getStringAttribute('msg_encode_type');
  }
  public set msgEncodeType(value: string) {
    this._msgEncodeType = value;
  }
  public resetMsgEncodeType() {
    this._msgEncodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgEncodeTypeInput() {
    return this._msgEncodeType;
  }

  // mysql_mode - computed: true, optional: true, required: false
  private _mysqlMode?: string; 
  public get mysqlMode() {
    return this.getStringAttribute('mysql_mode');
  }
  public set mysqlMode(value: string) {
    this._mysqlMode = value;
  }
  public resetMysqlMode() {
    this._mysqlMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlModeInput() {
    return this._mysqlMode;
  }

  // new_ssl_ciphers_long - computed: true, optional: true, required: false
  private _newSslCiphersLong?: string; 
  public get newSslCiphersLong() {
    return this.getStringAttribute('new_ssl_ciphers_long');
  }
  public set newSslCiphersLong(value: string) {
    this._newSslCiphersLong = value;
  }
  public resetNewSslCiphersLong() {
    this._newSslCiphersLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newSslCiphersLongInput() {
    return this._newSslCiphersLong;
  }

  // opt_header_length - computed: true, optional: true, required: false
  private _optHeaderLength?: string; 
  public get optHeaderLength() {
    return this.getStringAttribute('opt_header_length');
  }
  public set optHeaderLength(value: string) {
    this._optHeaderLength = value;
  }
  public resetOptHeaderLength() {
    this._optHeaderLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optHeaderLengthInput() {
    return this._optHeaderLength;
  }

  // opt_trailer_hex - computed: true, optional: true, required: false
  private _optTrailerHex?: string; 
  public get optTrailerHex() {
    return this.getStringAttribute('opt_trailer_hex');
  }
  public set optTrailerHex(value: string) {
    this._optTrailerHex = value;
  }
  public resetOptTrailerHex() {
    this._optTrailerHex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optTrailerHexInput() {
    return this._optTrailerHex;
  }

  // origin_host - computed: true, optional: true, required: false
  private _originHost?: string; 
  public get originHost() {
    return this.getStringAttribute('origin_host');
  }
  public set originHost(value: string) {
    this._originHost = value;
  }
  public resetOriginHost() {
    this._originHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originHostInput() {
    return this._originHost;
  }

  // origin_realm - computed: true, optional: true, required: false
  private _originRealm?: string; 
  public get originRealm() {
    return this.getStringAttribute('origin_realm');
  }
  public set originRealm(value: string) {
    this._originRealm = value;
  }
  public resetOriginRealm() {
    this._originRealm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originRealmInput() {
    return this._originRealm;
  }

  // product_name - computed: true, optional: true, required: false
  private _productName?: string; 
  public get productName() {
    return this.getStringAttribute('product_name');
  }
  public set productName(value: string) {
    this._productName = value;
  }
  public resetProductName() {
    this._productName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productNameInput() {
    return this._productName;
  }

  // queue_timeout - computed: true, optional: true, required: false
  private _queueTimeout?: string; 
  public get queueTimeout() {
    return this.getStringAttribute('queue_timeout');
  }
  public set queueTimeout(value: string) {
    this._queueTimeout = value;
  }
  public resetQueueTimeout() {
    this._queueTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueTimeoutInput() {
    return this._queueTimeout;
  }

  // ram_caching - computed: true, optional: true, required: false
  private _ramCaching?: string; 
  public get ramCaching() {
    return this.getStringAttribute('ram_caching');
  }
  public set ramCaching(value: string) {
    this._ramCaching = value;
  }
  public resetRamCaching() {
    this._ramCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ramCachingInput() {
    return this._ramCaching;
  }

  // response_half_closed_request - computed: true, optional: true, required: false
  private _responseHalfClosedRequest?: string; 
  public get responseHalfClosedRequest() {
    return this.getStringAttribute('response_half_closed_request');
  }
  public set responseHalfClosedRequest(value: string) {
    this._responseHalfClosedRequest = value;
  }
  public resetResponseHalfClosedRequest() {
    this._responseHalfClosedRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHalfClosedRequestInput() {
    return this._responseHalfClosedRequest;
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

  // server_age - computed: true, optional: true, required: false
  private _serverAge?: string; 
  public get serverAge() {
    return this.getStringAttribute('server_age');
  }
  public set serverAge(value: string) {
    this._serverAge = value;
  }
  public resetServerAge() {
    this._serverAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAgeInput() {
    return this._serverAge;
  }

  // server_close_propagation - computed: true, optional: true, required: false
  private _serverClosePropagation?: string; 
  public get serverClosePropagation() {
    return this.getStringAttribute('server_close_propagation');
  }
  public set serverClosePropagation(value: string) {
    this._serverClosePropagation = value;
  }
  public resetServerClosePropagation() {
    this._serverClosePropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverClosePropagationInput() {
    return this._serverClosePropagation;
  }

  // server_keepalive - computed: true, optional: true, required: false
  private _serverKeepalive?: string; 
  public get serverKeepalive() {
    return this.getStringAttribute('server_keepalive');
  }
  public set serverKeepalive(value: string) {
    this._serverKeepalive = value;
  }
  public resetServerKeepalive() {
    this._serverKeepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverKeepaliveInput() {
    return this._serverKeepalive;
  }

  // server_keepalive_timeout - computed: true, optional: true, required: false
  private _serverKeepaliveTimeout?: string; 
  public get serverKeepaliveTimeout() {
    return this.getStringAttribute('server_keepalive_timeout');
  }
  public set serverKeepaliveTimeout(value: string) {
    this._serverKeepaliveTimeout = value;
  }
  public resetServerKeepaliveTimeout() {
    this._serverKeepaliveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverKeepaliveTimeoutInput() {
    return this._serverKeepaliveTimeout;
  }

  // server_max_size - computed: true, optional: true, required: false
  private _serverMaxSize?: string; 
  public get serverMaxSize() {
    return this.getStringAttribute('server_max_size');
  }
  public set serverMaxSize(value: string) {
    this._serverMaxSize = value;
  }
  public resetServerMaxSize() {
    this._serverMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverMaxSizeInput() {
    return this._serverMaxSize;
  }

  // server_protocol - computed: true, optional: true, required: false
  private _serverProtocol?: string; 
  public get serverProtocol() {
    return this.getStringAttribute('server_protocol');
  }
  public set serverProtocol(value: string) {
    this._serverProtocol = value;
  }
  public resetServerProtocol() {
    this._serverProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverProtocolInput() {
    return this._serverProtocol;
  }

  // server_timeout - computed: true, optional: true, required: false
  private _serverTimeout?: string; 
  public get serverTimeout() {
    return this.getStringAttribute('server_timeout');
  }
  public set serverTimeout(value: string) {
    this._serverTimeout = value;
  }
  public resetServerTimeout() {
    this._serverTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTimeoutInput() {
    return this._serverTimeout;
  }

  // sip_dlg_timeout - computed: true, optional: true, required: false
  private _sipDlgTimeout?: string; 
  public get sipDlgTimeout() {
    return this.getStringAttribute('sip_dlg_timeout');
  }
  public set sipDlgTimeout(value: string) {
    this._sipDlgTimeout = value;
  }
  public resetSipDlgTimeout() {
    this._sipDlgTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipDlgTimeoutInput() {
    return this._sipDlgTimeout;
  }

  // sip_max_size - computed: true, optional: true, required: false
  private _sipMaxSize?: string; 
  public get sipMaxSize() {
    return this.getStringAttribute('sip_max_size');
  }
  public set sipMaxSize(value: string) {
    this._sipMaxSize = value;
  }
  public resetSipMaxSize() {
    this._sipMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipMaxSizeInput() {
    return this._sipMaxSize;
  }

  // smtp_disable_command - computed: true, optional: true, required: false
  private _smtpDisableCommand?: string; 
  public get smtpDisableCommand() {
    return this.getStringAttribute('smtp_disable_command');
  }
  public set smtpDisableCommand(value: string) {
    this._smtpDisableCommand = value;
  }
  public resetSmtpDisableCommand() {
    this._smtpDisableCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpDisableCommandInput() {
    return this._smtpDisableCommand;
  }

  // smtp_disable_command_status - computed: true, optional: true, required: false
  private _smtpDisableCommandStatus?: string; 
  public get smtpDisableCommandStatus() {
    return this.getStringAttribute('smtp_disable_command_status');
  }
  public set smtpDisableCommandStatus(value: string) {
    this._smtpDisableCommandStatus = value;
  }
  public resetSmtpDisableCommandStatus() {
    this._smtpDisableCommandStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpDisableCommandStatusInput() {
    return this._smtpDisableCommandStatus;
  }

  // smtp_domain_name - computed: true, optional: true, required: false
  private _smtpDomainName?: string; 
  public get smtpDomainName() {
    return this.getStringAttribute('smtp_domain_name');
  }
  public set smtpDomainName(value: string) {
    this._smtpDomainName = value;
  }
  public resetSmtpDomainName() {
    this._smtpDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpDomainNameInput() {
    return this._smtpDomainName;
  }

  // source_port - computed: true, optional: true, required: false
  private _sourcePort?: string; 
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }
  public set sourcePort(value: string) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }

  // ssl - computed: true, optional: true, required: false
  private _ssl?: string; 
  public get ssl() {
    return this.getStringAttribute('ssl');
  }
  public set ssl(value: string) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
  }

  // ssl_algorithm - computed: true, optional: true, required: false
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

  // ssl_ciphers - computed: true, optional: true, required: false
  private _sslCiphers?: string; 
  public get sslCiphers() {
    return this.getStringAttribute('ssl_ciphers');
  }
  public set sslCiphers(value: string) {
    this._sslCiphers = value;
  }
  public resetSslCiphers() {
    this._sslCiphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCiphersInput() {
    return this._sslCiphers;
  }

  // ssl_proxy - computed: true, optional: true, required: false
  private _sslProxy?: string; 
  public get sslProxy() {
    return this.getStringAttribute('ssl_proxy');
  }
  public set sslProxy(value: string) {
    this._sslProxy = value;
  }
  public resetSslProxy() {
    this._sslProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProxyInput() {
    return this._sslProxy;
  }

  // starttls_active_mode - computed: true, optional: true, required: false
  private _starttlsActiveMode?: string; 
  public get starttlsActiveMode() {
    return this.getStringAttribute('starttls_active_mode');
  }
  public set starttlsActiveMode(value: string) {
    this._starttlsActiveMode = value;
  }
  public resetStarttlsActiveMode() {
    this._starttlsActiveMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get starttlsActiveModeInput() {
    return this._starttlsActiveMode;
  }

  // stateless - computed: true, optional: true, required: false
  private _stateless?: string; 
  public get stateless() {
    return this.getStringAttribute('stateless');
  }
  public set stateless(value: string) {
    this._stateless = value;
  }
  public resetStateless() {
    this._stateless = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessInput() {
    return this._stateless;
  }

  // timeout_ip_session - computed: true, optional: true, required: false
  private _timeoutIpSession?: string; 
  public get timeoutIpSession() {
    return this.getStringAttribute('timeout_ip_session');
  }
  public set timeoutIpSession(value: string) {
    this._timeoutIpSession = value;
  }
  public resetTimeoutIpSession() {
    this._timeoutIpSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutIpSessionInput() {
    return this._timeoutIpSession;
  }

  // timeout_radius_session - computed: true, optional: true, required: false
  private _timeoutRadiusSession?: string; 
  public get timeoutRadiusSession() {
    return this.getStringAttribute('timeout_radius_session');
  }
  public set timeoutRadiusSession(value: string) {
    this._timeoutRadiusSession = value;
  }
  public resetTimeoutRadiusSession() {
    this._timeoutRadiusSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutRadiusSessionInput() {
    return this._timeoutRadiusSession;
  }

  // timeout_tcp_session - computed: true, optional: true, required: false
  private _timeoutTcpSession?: string; 
  public get timeoutTcpSession() {
    return this.getStringAttribute('timeout_tcp_session');
  }
  public set timeoutTcpSession(value: string) {
    this._timeoutTcpSession = value;
  }
  public resetTimeoutTcpSession() {
    this._timeoutTcpSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutTcpSessionInput() {
    return this._timeoutTcpSession;
  }

  // timeout_tcp_session_after_fin - computed: true, optional: true, required: false
  private _timeoutTcpSessionAfterFin?: string; 
  public get timeoutTcpSessionAfterFin() {
    return this.getStringAttribute('timeout_tcp_session_after_fin');
  }
  public set timeoutTcpSessionAfterFin(value: string) {
    this._timeoutTcpSessionAfterFin = value;
  }
  public resetTimeoutTcpSessionAfterFin() {
    this._timeoutTcpSessionAfterFin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutTcpSessionAfterFinInput() {
    return this._timeoutTcpSessionAfterFin;
  }

  // timeout_udp_session - computed: true, optional: true, required: false
  private _timeoutUdpSession?: string; 
  public get timeoutUdpSession() {
    return this.getStringAttribute('timeout_udp_session');
  }
  public set timeoutUdpSession(value: string) {
    this._timeoutUdpSession = value;
  }
  public resetTimeoutUdpSession() {
    this._timeoutUdpSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutUdpSessionInput() {
    return this._timeoutUdpSession;
  }

  // tune_bufsize - computed: true, optional: true, required: false
  private _tuneBufsize?: string; 
  public get tuneBufsize() {
    return this.getStringAttribute('tune_bufsize');
  }
  public set tuneBufsize(value: string) {
    this._tuneBufsize = value;
  }
  public resetTuneBufsize() {
    this._tuneBufsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tuneBufsizeInput() {
    return this._tuneBufsize;
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

  // use_tls_tickets - computed: true, optional: true, required: false
  private _useTlsTickets?: string; 
  public get useTlsTickets() {
    return this.getStringAttribute('use_tls_tickets');
  }
  public set useTlsTickets(value: string) {
    this._useTlsTickets = value;
  }
  public resetUseTlsTickets() {
    this._useTlsTickets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTlsTicketsInput() {
    return this._useTlsTickets;
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

  // vendor_id - computed: true, optional: true, required: false
  private _vendorId?: string; 
  public get vendorId() {
    return this.getStringAttribute('vendor_id');
  }
  public set vendorId(value: string) {
    this._vendorId = value;
  }
  public resetVendorId() {
    this._vendorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorIdInput() {
    return this._vendorId;
  }

  // whitelist - computed: true, optional: true, required: false
  private _whitelist?: string; 
  public get whitelist() {
    return this.getStringAttribute('whitelist');
  }
  public set whitelist(value: string) {
    this._whitelist = value;
  }
  public resetWhitelist() {
    this._whitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistInput() {
    return this._whitelist;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_ssl_versions: cdktf.stringToTerraform(this._allowSslVersions),
      cert_verify: cdktf.stringToTerraform(this._certVerify),
      client_address: cdktf.stringToTerraform(this._clientAddress),
      client_keepalive: cdktf.stringToTerraform(this._clientKeepalive),
      client_protocol: cdktf.stringToTerraform(this._clientProtocol),
      client_sni_required: cdktf.stringToTerraform(this._clientSniRequired),
      client_ssl: cdktf.stringToTerraform(this._clientSsl),
      client_timeout: cdktf.stringToTerraform(this._clientTimeout),
      compression: cdktf.stringToTerraform(this._compression),
      connect_timeout: cdktf.stringToTerraform(this._connectTimeout),
      customized_ssl_ciphers: cdktf.stringToTerraform(this._customizedSslCiphers),
      customized_ssl_ciphers_flag: cdktf.stringToTerraform(this._customizedSslCiphersFlag),
      decompression: cdktf.stringToTerraform(this._decompression),
      deploy_mode: cdktf.stringToTerraform(this._deployMode),
      dns_authenticate_flag: cdktf.stringToTerraform(this._dnsAuthenticateFlag),
      dns_cache_ageout_time: cdktf.stringToTerraform(this._dnsCacheAgeoutTime),
      dns_cache_entry_size: cdktf.stringToTerraform(this._dnsCacheEntrySize),
      dns_cache_flag: cdktf.stringToTerraform(this._dnsCacheFlag),
      dns_cache_response_type: cdktf.stringToTerraform(this._dnsCacheResponseType),
      dns_cache_size: cdktf.stringToTerraform(this._dnsCacheSize),
      dns_malform_query_action: cdktf.stringToTerraform(this._dnsMalformQueryAction),
      dns_max_query_length: cdktf.stringToTerraform(this._dnsMaxQueryLength),
      dynamic_auth: cdktf.stringToTerraform(this._dynamicAuth),
      dynamic_auth_port: cdktf.stringToTerraform(this._dynamicAuthPort),
      failed_client_str: cdktf.stringToTerraform(this._failedClientStr),
      failed_client_type: cdktf.stringToTerraform(this._failedClientType),
      failed_server_str: cdktf.stringToTerraform(this._failedServerStr),
      failed_server_type: cdktf.stringToTerraform(this._failedServerType),
      forward_client_certificate: cdktf.stringToTerraform(this._forwardClientCertificate),
      forward_client_certificate_header: cdktf.stringToTerraform(this._forwardClientCertificateHeader),
      geoip_list: cdktf.stringToTerraform(this._geoipList),
      geoip_redirect: cdktf.stringToTerraform(this._geoipRedirect),
      http2_profile: cdktf.stringToTerraform(this._http2Profile),
      http_keepalive_timeout: cdktf.stringToTerraform(this._httpKeepaliveTimeout),
      http_mode: cdktf.stringToTerraform(this._httpMode),
      http_request_timeout: cdktf.stringToTerraform(this._httpRequestTimeout),
      http_send_timeout: cdktf.stringToTerraform(this._httpSendTimeout),
      http_x_forwarded_for: cdktf.stringToTerraform(this._httpXForwardedFor),
      http_x_forwarded_for_header: cdktf.stringToTerraform(this._httpXForwardedForHeader),
      id: cdktf.stringToTerraform(this._id),
      idle_time: cdktf.stringToTerraform(this._idleTime),
      idle_timeout: cdktf.stringToTerraform(this._idleTimeout),
      insert_client_ip: cdktf.stringToTerraform(this._insertClientIp),
      intermediate_ca_group: cdktf.stringToTerraform(this._intermediateCaGroup),
      ip_reputation: cdktf.stringToTerraform(this._ipReputation),
      ip_reputation_redirect: cdktf.stringToTerraform(this._ipReputationRedirect),
      length_indicator_shift: cdktf.stringToTerraform(this._lengthIndicatorShift),
      length_indicator_size: cdktf.stringToTerraform(this._lengthIndicatorSize),
      length_indicator_type: cdktf.stringToTerraform(this._lengthIndicatorType),
      local_cert: cdktf.stringToTerraform(this._localCert),
      local_cert_group: cdktf.stringToTerraform(this._localCertGroup),
      max_header_size: cdktf.stringToTerraform(this._maxHeaderSize),
      max_http_headers: cdktf.stringToTerraform(this._maxHttpHeaders),
      media_address: cdktf.stringToTerraform(this._mediaAddress),
      mkey: cdktf.stringToTerraform(this._mkey),
      msg_encode_type: cdktf.stringToTerraform(this._msgEncodeType),
      mysql_mode: cdktf.stringToTerraform(this._mysqlMode),
      new_ssl_ciphers_long: cdktf.stringToTerraform(this._newSslCiphersLong),
      opt_header_length: cdktf.stringToTerraform(this._optHeaderLength),
      opt_trailer_hex: cdktf.stringToTerraform(this._optTrailerHex),
      origin_host: cdktf.stringToTerraform(this._originHost),
      origin_realm: cdktf.stringToTerraform(this._originRealm),
      product_name: cdktf.stringToTerraform(this._productName),
      queue_timeout: cdktf.stringToTerraform(this._queueTimeout),
      ram_caching: cdktf.stringToTerraform(this._ramCaching),
      response_half_closed_request: cdktf.stringToTerraform(this._responseHalfClosedRequest),
      security_mode: cdktf.stringToTerraform(this._securityMode),
      server_age: cdktf.stringToTerraform(this._serverAge),
      server_close_propagation: cdktf.stringToTerraform(this._serverClosePropagation),
      server_keepalive: cdktf.stringToTerraform(this._serverKeepalive),
      server_keepalive_timeout: cdktf.stringToTerraform(this._serverKeepaliveTimeout),
      server_max_size: cdktf.stringToTerraform(this._serverMaxSize),
      server_protocol: cdktf.stringToTerraform(this._serverProtocol),
      server_timeout: cdktf.stringToTerraform(this._serverTimeout),
      sip_dlg_timeout: cdktf.stringToTerraform(this._sipDlgTimeout),
      sip_max_size: cdktf.stringToTerraform(this._sipMaxSize),
      smtp_disable_command: cdktf.stringToTerraform(this._smtpDisableCommand),
      smtp_disable_command_status: cdktf.stringToTerraform(this._smtpDisableCommandStatus),
      smtp_domain_name: cdktf.stringToTerraform(this._smtpDomainName),
      source_port: cdktf.stringToTerraform(this._sourcePort),
      ssl: cdktf.stringToTerraform(this._ssl),
      ssl_algorithm: cdktf.stringToTerraform(this._sslAlgorithm),
      ssl_ciphers: cdktf.stringToTerraform(this._sslCiphers),
      ssl_proxy: cdktf.stringToTerraform(this._sslProxy),
      starttls_active_mode: cdktf.stringToTerraform(this._starttlsActiveMode),
      stateless: cdktf.stringToTerraform(this._stateless),
      timeout_ip_session: cdktf.stringToTerraform(this._timeoutIpSession),
      timeout_radius_session: cdktf.stringToTerraform(this._timeoutRadiusSession),
      timeout_tcp_session: cdktf.stringToTerraform(this._timeoutTcpSession),
      timeout_tcp_session_after_fin: cdktf.stringToTerraform(this._timeoutTcpSessionAfterFin),
      timeout_udp_session: cdktf.stringToTerraform(this._timeoutUdpSession),
      tune_bufsize: cdktf.stringToTerraform(this._tuneBufsize),
      type: cdktf.stringToTerraform(this._type),
      use_tls_tickets: cdktf.stringToTerraform(this._useTlsTickets),
      vdom: cdktf.stringToTerraform(this._vdom),
      vendor_id: cdktf.stringToTerraform(this._vendorId),
      whitelist: cdktf.stringToTerraform(this._whitelist),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_ssl_versions: {
        value: cdktf.stringToHclTerraform(this._allowSslVersions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_verify: {
        value: cdktf.stringToHclTerraform(this._certVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_address: {
        value: cdktf.stringToHclTerraform(this._clientAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_keepalive: {
        value: cdktf.stringToHclTerraform(this._clientKeepalive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_protocol: {
        value: cdktf.stringToHclTerraform(this._clientProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_sni_required: {
        value: cdktf.stringToHclTerraform(this._clientSniRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_ssl: {
        value: cdktf.stringToHclTerraform(this._clientSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_timeout: {
        value: cdktf.stringToHclTerraform(this._clientTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compression: {
        value: cdktf.stringToHclTerraform(this._compression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connect_timeout: {
        value: cdktf.stringToHclTerraform(this._connectTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customized_ssl_ciphers: {
        value: cdktf.stringToHclTerraform(this._customizedSslCiphers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customized_ssl_ciphers_flag: {
        value: cdktf.stringToHclTerraform(this._customizedSslCiphersFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      decompression: {
        value: cdktf.stringToHclTerraform(this._decompression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy_mode: {
        value: cdktf.stringToHclTerraform(this._deployMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_authenticate_flag: {
        value: cdktf.stringToHclTerraform(this._dnsAuthenticateFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_cache_ageout_time: {
        value: cdktf.stringToHclTerraform(this._dnsCacheAgeoutTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_cache_entry_size: {
        value: cdktf.stringToHclTerraform(this._dnsCacheEntrySize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_cache_flag: {
        value: cdktf.stringToHclTerraform(this._dnsCacheFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_cache_response_type: {
        value: cdktf.stringToHclTerraform(this._dnsCacheResponseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_cache_size: {
        value: cdktf.stringToHclTerraform(this._dnsCacheSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_malform_query_action: {
        value: cdktf.stringToHclTerraform(this._dnsMalformQueryAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_max_query_length: {
        value: cdktf.stringToHclTerraform(this._dnsMaxQueryLength),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_auth: {
        value: cdktf.stringToHclTerraform(this._dynamicAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_auth_port: {
        value: cdktf.stringToHclTerraform(this._dynamicAuthPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failed_client_str: {
        value: cdktf.stringToHclTerraform(this._failedClientStr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failed_client_type: {
        value: cdktf.stringToHclTerraform(this._failedClientType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failed_server_str: {
        value: cdktf.stringToHclTerraform(this._failedServerStr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failed_server_type: {
        value: cdktf.stringToHclTerraform(this._failedServerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_client_certificate: {
        value: cdktf.stringToHclTerraform(this._forwardClientCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_client_certificate_header: {
        value: cdktf.stringToHclTerraform(this._forwardClientCertificateHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      geoip_list: {
        value: cdktf.stringToHclTerraform(this._geoipList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      geoip_redirect: {
        value: cdktf.stringToHclTerraform(this._geoipRedirect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http2_profile: {
        value: cdktf.stringToHclTerraform(this._http2Profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_keepalive_timeout: {
        value: cdktf.stringToHclTerraform(this._httpKeepaliveTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_mode: {
        value: cdktf.stringToHclTerraform(this._httpMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_request_timeout: {
        value: cdktf.stringToHclTerraform(this._httpRequestTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_send_timeout: {
        value: cdktf.stringToHclTerraform(this._httpSendTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_x_forwarded_for: {
        value: cdktf.stringToHclTerraform(this._httpXForwardedFor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_x_forwarded_for_header: {
        value: cdktf.stringToHclTerraform(this._httpXForwardedForHeader),
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
      idle_time: {
        value: cdktf.stringToHclTerraform(this._idleTime),
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
      insert_client_ip: {
        value: cdktf.stringToHclTerraform(this._insertClientIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intermediate_ca_group: {
        value: cdktf.stringToHclTerraform(this._intermediateCaGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_reputation: {
        value: cdktf.stringToHclTerraform(this._ipReputation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_reputation_redirect: {
        value: cdktf.stringToHclTerraform(this._ipReputationRedirect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      length_indicator_shift: {
        value: cdktf.stringToHclTerraform(this._lengthIndicatorShift),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      length_indicator_size: {
        value: cdktf.stringToHclTerraform(this._lengthIndicatorSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      length_indicator_type: {
        value: cdktf.stringToHclTerraform(this._lengthIndicatorType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_cert: {
        value: cdktf.stringToHclTerraform(this._localCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_cert_group: {
        value: cdktf.stringToHclTerraform(this._localCertGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_header_size: {
        value: cdktf.stringToHclTerraform(this._maxHeaderSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_http_headers: {
        value: cdktf.stringToHclTerraform(this._maxHttpHeaders),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      media_address: {
        value: cdktf.stringToHclTerraform(this._mediaAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mkey: {
        value: cdktf.stringToHclTerraform(this._mkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      msg_encode_type: {
        value: cdktf.stringToHclTerraform(this._msgEncodeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mysql_mode: {
        value: cdktf.stringToHclTerraform(this._mysqlMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      new_ssl_ciphers_long: {
        value: cdktf.stringToHclTerraform(this._newSslCiphersLong),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opt_header_length: {
        value: cdktf.stringToHclTerraform(this._optHeaderLength),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opt_trailer_hex: {
        value: cdktf.stringToHclTerraform(this._optTrailerHex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin_host: {
        value: cdktf.stringToHclTerraform(this._originHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin_realm: {
        value: cdktf.stringToHclTerraform(this._originRealm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_name: {
        value: cdktf.stringToHclTerraform(this._productName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      queue_timeout: {
        value: cdktf.stringToHclTerraform(this._queueTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ram_caching: {
        value: cdktf.stringToHclTerraform(this._ramCaching),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_half_closed_request: {
        value: cdktf.stringToHclTerraform(this._responseHalfClosedRequest),
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
      server_age: {
        value: cdktf.stringToHclTerraform(this._serverAge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_close_propagation: {
        value: cdktf.stringToHclTerraform(this._serverClosePropagation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_keepalive: {
        value: cdktf.stringToHclTerraform(this._serverKeepalive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_keepalive_timeout: {
        value: cdktf.stringToHclTerraform(this._serverKeepaliveTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_max_size: {
        value: cdktf.stringToHclTerraform(this._serverMaxSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_protocol: {
        value: cdktf.stringToHclTerraform(this._serverProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_timeout: {
        value: cdktf.stringToHclTerraform(this._serverTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sip_dlg_timeout: {
        value: cdktf.stringToHclTerraform(this._sipDlgTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sip_max_size: {
        value: cdktf.stringToHclTerraform(this._sipMaxSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smtp_disable_command: {
        value: cdktf.stringToHclTerraform(this._smtpDisableCommand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smtp_disable_command_status: {
        value: cdktf.stringToHclTerraform(this._smtpDisableCommandStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smtp_domain_name: {
        value: cdktf.stringToHclTerraform(this._smtpDomainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_port: {
        value: cdktf.stringToHclTerraform(this._sourcePort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl: {
        value: cdktf.stringToHclTerraform(this._ssl),
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
      ssl_ciphers: {
        value: cdktf.stringToHclTerraform(this._sslCiphers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_proxy: {
        value: cdktf.stringToHclTerraform(this._sslProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      starttls_active_mode: {
        value: cdktf.stringToHclTerraform(this._starttlsActiveMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stateless: {
        value: cdktf.stringToHclTerraform(this._stateless),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout_ip_session: {
        value: cdktf.stringToHclTerraform(this._timeoutIpSession),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout_radius_session: {
        value: cdktf.stringToHclTerraform(this._timeoutRadiusSession),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout_tcp_session: {
        value: cdktf.stringToHclTerraform(this._timeoutTcpSession),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout_tcp_session_after_fin: {
        value: cdktf.stringToHclTerraform(this._timeoutTcpSessionAfterFin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout_udp_session: {
        value: cdktf.stringToHclTerraform(this._timeoutUdpSession),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tune_bufsize: {
        value: cdktf.stringToHclTerraform(this._tuneBufsize),
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
      use_tls_tickets: {
        value: cdktf.stringToHclTerraform(this._useTlsTickets),
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
      vendor_id: {
        value: cdktf.stringToHclTerraform(this._vendorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      whitelist: {
        value: cdktf.stringToHclTerraform(this._whitelist),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
