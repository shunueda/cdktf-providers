// https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AdvancedSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cloud applications that are exempted from cookie authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#auth_bypass_apps AdvancedSettings#auth_bypass_apps}
  */
  readonly authBypassApps?: string[];
  /**
  * URL categories that are exempted from cookie authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#auth_bypass_url_categories AdvancedSettings#auth_bypass_url_categories}
  */
  readonly authBypassUrlCategories?: string[];
  /**
  * Custom URLs that are exempted from cookie authentication for users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#auth_bypass_urls AdvancedSettings#auth_bypass_urls}
  */
  readonly authBypassUrls?: string[];
  /**
  * Cloud applications that are exempted from Basic authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#basic_bypass_apps AdvancedSettings#basic_bypass_apps}
  */
  readonly basicBypassApps?: string[];
  /**
  * URL categories that are exempted from Basic authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#basic_bypass_url_categories AdvancedSettings#basic_bypass_url_categories}
  */
  readonly basicBypassUrlCategories?: string[];
  /**
  * Value indicating whether CONNECT host and SNI mismatch (i.e., CONNECT host doesn't match the SSL/TLS client hello SNI) is blocked or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#block_connect_host_sni_mismatch AdvancedSettings#block_connect_host_sni_mismatch}
  */
  readonly blockConnectHostSniMismatch?: boolean | cdktf.IResolvable;
  /**
  * Applications which are subjected to Domain Fronting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#block_domain_fronting_apps AdvancedSettings#block_domain_fronting_apps}
  */
  readonly blockDomainFrontingApps?: string[];
  /**
  * Value indicating whether to block or allow HTTP/S transactions in which the FQDN of the request URL is different than the FQDN of the request's host header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#block_domain_fronting_on_host_header AdvancedSettings#block_domain_fronting_on_host_header}
  */
  readonly blockDomainFrontingOnHostHeader?: boolean | cdktf.IResolvable;
  /**
  * Value indicating whether HTTP CONNECT method requests to non-standard ports are allowed or not (i.e., requests directed to ports other than the standard HTTP/S ports 80 and 443)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#block_http_tunnel_on_non_http_ports AdvancedSettings#block_http_tunnel_on_non_http_ports}
  */
  readonly blockHttpTunnelOnNonHttpPorts?: boolean | cdktf.IResolvable;
  /**
  * Value indicating whether to allow or block traffic that is not compliant with RFC HTTP protocol standards
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#block_non_compliant_http_request_on_http_ports AdvancedSettings#block_non_compliant_http_request_on_http_ports}
  */
  readonly blockNonCompliantHttpRequestOnHttpPorts?: boolean | cdktf.IResolvable;
  /**
  * Value indicating whether non-HTTP Traffic on HTTP/S ports are allowed or blocked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#block_non_http_on_http_port_enabled AdvancedSettings#block_non_http_on_http_port_enabled}
  */
  readonly blockNonHttpOnHttpPortEnabled?: boolean | cdktf.IResolvable;
  /**
  * Value indicating whether to apply the URL Filtering policy even when the Cloud App Control policy already allows a transaction explicitly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#cascade_url_filtering AdvancedSettings#cascade_url_filtering}
  */
  readonly cascadeUrlFiltering?: boolean | cdktf.IResolvable;
  /**
  * Cloud applications that are exempted from Digest authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#digest_auth_bypass_apps AdvancedSettings#digest_auth_bypass_apps}
  */
  readonly digestAuthBypassApps?: string[];
  /**
  * URL categories that are exempted from Digest authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#digest_auth_bypass_url_categories AdvancedSettings#digest_auth_bypass_url_categories}
  */
  readonly digestAuthBypassUrlCategories?: string[];
  /**
  * Custom URLs that are exempted from Digest authentication. Cloud applications that are exempted from Digest authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#digest_auth_bypass_urls AdvancedSettings#digest_auth_bypass_urls}
  */
  readonly digestAuthBypassUrls?: string[];
  /**
  * Cloud applications to which DNS optimization on transparent proxy mode applies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#dns_resolution_on_transparent_proxy_apps AdvancedSettings#dns_resolution_on_transparent_proxy_apps}
  */
  readonly dnsResolutionOnTransparentProxyApps?: string[];
  /**
  * Cloud applications that are excluded from DNS optimization on transparent proxy mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#dns_resolution_on_transparent_proxy_exempt_apps AdvancedSettings#dns_resolution_on_transparent_proxy_exempt_apps}
  */
  readonly dnsResolutionOnTransparentProxyExemptApps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#dns_resolution_on_transparent_proxy_exempt_url_categories AdvancedSettings#dns_resolution_on_transparent_proxy_exempt_url_categories}
  */
  readonly dnsResolutionOnTransparentProxyExemptUrlCategories?: string[];
  /**
  * URLs that are excluded from DNS optimization on transparent proxy mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#dns_resolution_on_transparent_proxy_exempt_urls AdvancedSettings#dns_resolution_on_transparent_proxy_exempt_urls}
  */
  readonly dnsResolutionOnTransparentProxyExemptUrls?: string[];
  /**
  * Cloud applications to which DNS optimization for IPv6 addresses on transparent proxy mode applies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#dns_resolution_on_transparent_proxy_ipv6_apps AdvancedSettings#dns_resolution_on_transparent_proxy_ipv6_apps}
  */
  readonly dnsResolutionOnTransparentProxyIpv6Apps?: string[];
  /**
  * Cloud applications that are excluded from DNS optimization for IPv6 addresses on transparent proxy mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#dns_resolution_on_transparent_proxy_ipv6_exempt_apps AdvancedSettings#dns_resolution_on_transparent_proxy_ipv6_exempt_apps}
  */
  readonly dnsResolutionOnTransparentProxyIpv6ExemptApps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#dns_resolution_on_transparent_proxy_ipv6_exempt_url_categories AdvancedSettings#dns_resolution_on_transparent_proxy_ipv6_exempt_url_categories}
  */
  readonly dnsResolutionOnTransparentProxyIpv6ExemptUrlCategories?: string[];
  /**
  * IPv6 URL categories to which DNS optimization on transparent proxy mode applies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#dns_resolution_on_transparent_proxy_ipv6_url_categories AdvancedSettings#dns_resolution_on_transparent_proxy_ipv6_url_categories}
  */
  readonly dnsResolutionOnTransparentProxyIpv6UrlCategories?: string[];
  /**
  * URL categories to which DNS optimization on transparent proxy mode applies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#dns_resolution_on_transparent_proxy_url_categories AdvancedSettings#dns_resolution_on_transparent_proxy_url_categories}
  */
  readonly dnsResolutionOnTransparentProxyUrlCategories?: string[];
  /**
  * URLs to which DNS optimization on transparent proxy mode applies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#dns_resolution_on_transparent_proxy_urls AdvancedSettings#dns_resolution_on_transparent_proxy_urls}
  */
  readonly dnsResolutionOnTransparentProxyUrls?: string[];
  /**
  * URL categories that are exempted from domain fronting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#domain_fronting_bypass_url_categories AdvancedSettings#domain_fronting_bypass_url_categories}
  */
  readonly domainFrontingBypassUrlCategories?: string[];
  /**
  * Value indicating whether to dynamically update user risk score by tracking risky user activities in real time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#dynamic_user_risk_enabled AdvancedSettings#dynamic_user_risk_enabled}
  */
  readonly dynamicUserRiskEnabled?: boolean | cdktf.IResolvable;
  /**
  * Value indicating whether or not to include the ECS option in all DNS queries, originating from all locations and remote users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#ecs_for_all_enabled AdvancedSettings#ecs_for_all_enabled}
  */
  readonly ecsForAllEnabled?: boolean | cdktf.IResolvable;
  /**
  * Value indicating whether ranks are enabled for admins to allow admin ranks in policy configuration and management
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#enable_admin_rank_access AdvancedSettings#enable_admin_rank_access}
  */
  readonly enableAdminRankAccess?: boolean | cdktf.IResolvable;
  /**
  * Value indicating whether DNS optimization is enabled or disabled for Z-Tunnel 2.0 and transparent proxy mode traffic (e.g., traffic via GRE or IPSec tunnels without a PAC file).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#enable_dns_resolution_on_transparent_proxy AdvancedSettings#enable_dns_resolution_on_transparent_proxy}
  */
  readonly enableDnsResolutionOnTransparentProxy?: boolean | cdktf.IResolvable;
  /**
  * Enable/Disable DNS optimization for all IPv6 transparent proxy traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#enable_evaluate_policy_on_global_ssl_bypass AdvancedSettings#enable_evaluate_policy_on_global_ssl_bypass}
  */
  readonly enableEvaluatePolicyOnGlobalSslBypass?: boolean | cdktf.IResolvable;
  /**
  * Enable/Disable DNS optimization for all IPv6 transparent proxy traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#enable_ipv6_dns_optimization_on_all_transparent_proxy AdvancedSettings#enable_ipv6_dns_optimization_on_all_transparent_proxy}
  */
  readonly enableIpv6DnsOptimizationOnAllTransparentProxy?: boolean | cdktf.IResolvable;
  /**
  * Value indicating whether DNS optimization is enabled or disabled for IPv6 connections to dual-stack or IPv6-only destinations sent via Z-Tunnel 2.0 and transparent proxy proxy mode (e.g., traffic via GRE or IPSec tunnels without a PAC file).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#enable_ipv6_dns_resolution_on_transparent_proxy AdvancedSettings#enable_ipv6_dns_resolution_on_transparent_proxy}
  */
  readonly enableIpv6DnsResolutionOnTransparentProxy?: boolean | cdktf.IResolvable;
  /**
  * Value indicating whether Microsoft Office 365 One Click Configuration is enabled or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#enable_office365 AdvancedSettings#enable_office365}
  */
  readonly enableOffice365?: boolean | cdktf.IResolvable;
  /**
  * Value indicating whether policies that include user and department criteria can be configured and applied for unauthenticated traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#enable_policy_for_unauthenticated_traffic AdvancedSettings#enable_policy_for_unauthenticated_traffic}
  */
  readonly enablePolicyForUnauthenticatedTraffic?: boolean | cdktf.IResolvable;
  /**
  * Enforce Surrogate IP authentication for Windows app traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#enforce_surrogate_ip_for_windows_app AdvancedSettings#enforce_surrogate_ip_for_windows_app}
  */
  readonly enforceSurrogateIpForWindowsApp?: boolean | cdktf.IResolvable;
  /**
  * Value indicating whether or not HTTP/2 should be the default web protocol for accessing various applications at your organizational level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#http2_nonbrowser_traffic_enabled AdvancedSettings#http2_nonbrowser_traffic_enabled}
  */
  readonly http2NonbrowserTrafficEnabled?: boolean | cdktf.IResolvable;
  /**
  * URL categories for which HTTP range headers must be removed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#http_range_header_remove_url_categories AdvancedSettings#http_range_header_remove_url_categories}
  */
  readonly httpRangeHeaderRemoveUrlCategories?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#id AdvancedSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Cloud applications that are exempted from Kerberos authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#kerberos_bypass_apps AdvancedSettings#kerberos_bypass_apps}
  */
  readonly kerberosBypassApps?: string[];
  /**
  * URL categories that are exempted from Kerberos authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#kerberos_bypass_url_categories AdvancedSettings#kerberos_bypass_url_categories}
  */
  readonly kerberosBypassUrlCategories?: string[];
  /**
  * Custom URLs that are exempted from Kerberos authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#kerberos_bypass_urls AdvancedSettings#kerberos_bypass_urls}
  */
  readonly kerberosBypassUrls?: string[];
  /**
  * Value indicating whether to log internal IP address present in X-Forwarded-For (XFF) proxy header or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#log_internal_ip AdvancedSettings#log_internal_ip}
  */
  readonly logInternalIp?: boolean | cdktf.IResolvable;
  /**
  * Value indicating whether or not to use the SSL/TLS client hello SNI for DNS resolution instead of the CONNECT host for forward proxy connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#prefer_sni_over_conn_host AdvancedSettings#prefer_sni_over_conn_host}
  */
  readonly preferSniOverConnHost?: boolean | cdktf.IResolvable;
  /**
  * Applications that are exempted from the preferSniOverConnHost setting (i.e., prefer SSL/TLS client hello SNI for DNS resolution instead of the CONNECT host for forward proxy connections)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#prefer_sni_over_conn_host_apps AdvancedSettings#prefer_sni_over_conn_host_apps}
  */
  readonly preferSniOverConnHostApps?: string[];
  /**
  * Value indicating whether or not to insert XFF header to all traffic forwarded from ZIA to ZPA, including source IP-anchored and ZIA-inspected ZPA application traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#sipa_xff_header_enabled AdvancedSettings#sipa_xff_header_enabled}
  */
  readonly sipaXffHeaderEnabled?: boolean | cdktf.IResolvable;
  /**
  * URL categories that are excluded from the preferSniOverConnHost setting (i.e., prefer SSL/TLS client hello SNI for DNS resolution instead of the CONNECT host for forward proxy connections)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#sni_dns_optimization_bypass_url_categories AdvancedSettings#sni_dns_optimization_bypass_url_categories}
  */
  readonly sniDnsOptimizationBypassUrlCategories?: string[];
  /**
  * Value indicating whether to apply configured policies on tunneled HTTP traffic sent via a CONNECT method request on port 80
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#track_http_tunnel_on_http_ports AdvancedSettings#track_http_tunnel_on_http_ports}
  */
  readonly trackHttpTunnelOnHttpPorts?: boolean | cdktf.IResolvable;
  /**
  * Specifies the login session timeout for admins accessing the ZIA Admin Portal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#ui_session_timeout AdvancedSettings#ui_session_timeout}
  */
  readonly uiSessionTimeout?: number;
  /**
  * Value indicating whether to apply the Firewall rules configured without a specified location criteria (or with the Road Warrior location) to remote user traffic forwarded via Z-Tunnel 1.0 or PAC files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#zscaler_client_connector_1_and_pac_road_warrior_in_firewall AdvancedSettings#zscaler_client_connector_1_and_pac_road_warrior_in_firewall}
  */
  readonly zscalerClientConnector1AndPacRoadWarriorInFirewall?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings zia_advanced_settings}
*/
export class AdvancedSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_advanced_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AdvancedSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AdvancedSettings to import
  * @param importFromId The id of the existing AdvancedSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AdvancedSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_advanced_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_settings zia_advanced_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AdvancedSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AdvancedSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_advanced_settings',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authBypassApps = config.authBypassApps;
    this._authBypassUrlCategories = config.authBypassUrlCategories;
    this._authBypassUrls = config.authBypassUrls;
    this._basicBypassApps = config.basicBypassApps;
    this._basicBypassUrlCategories = config.basicBypassUrlCategories;
    this._blockConnectHostSniMismatch = config.blockConnectHostSniMismatch;
    this._blockDomainFrontingApps = config.blockDomainFrontingApps;
    this._blockDomainFrontingOnHostHeader = config.blockDomainFrontingOnHostHeader;
    this._blockHttpTunnelOnNonHttpPorts = config.blockHttpTunnelOnNonHttpPorts;
    this._blockNonCompliantHttpRequestOnHttpPorts = config.blockNonCompliantHttpRequestOnHttpPorts;
    this._blockNonHttpOnHttpPortEnabled = config.blockNonHttpOnHttpPortEnabled;
    this._cascadeUrlFiltering = config.cascadeUrlFiltering;
    this._digestAuthBypassApps = config.digestAuthBypassApps;
    this._digestAuthBypassUrlCategories = config.digestAuthBypassUrlCategories;
    this._digestAuthBypassUrls = config.digestAuthBypassUrls;
    this._dnsResolutionOnTransparentProxyApps = config.dnsResolutionOnTransparentProxyApps;
    this._dnsResolutionOnTransparentProxyExemptApps = config.dnsResolutionOnTransparentProxyExemptApps;
    this._dnsResolutionOnTransparentProxyExemptUrlCategories = config.dnsResolutionOnTransparentProxyExemptUrlCategories;
    this._dnsResolutionOnTransparentProxyExemptUrls = config.dnsResolutionOnTransparentProxyExemptUrls;
    this._dnsResolutionOnTransparentProxyIpv6Apps = config.dnsResolutionOnTransparentProxyIpv6Apps;
    this._dnsResolutionOnTransparentProxyIpv6ExemptApps = config.dnsResolutionOnTransparentProxyIpv6ExemptApps;
    this._dnsResolutionOnTransparentProxyIpv6ExemptUrlCategories = config.dnsResolutionOnTransparentProxyIpv6ExemptUrlCategories;
    this._dnsResolutionOnTransparentProxyIpv6UrlCategories = config.dnsResolutionOnTransparentProxyIpv6UrlCategories;
    this._dnsResolutionOnTransparentProxyUrlCategories = config.dnsResolutionOnTransparentProxyUrlCategories;
    this._dnsResolutionOnTransparentProxyUrls = config.dnsResolutionOnTransparentProxyUrls;
    this._domainFrontingBypassUrlCategories = config.domainFrontingBypassUrlCategories;
    this._dynamicUserRiskEnabled = config.dynamicUserRiskEnabled;
    this._ecsForAllEnabled = config.ecsForAllEnabled;
    this._enableAdminRankAccess = config.enableAdminRankAccess;
    this._enableDnsResolutionOnTransparentProxy = config.enableDnsResolutionOnTransparentProxy;
    this._enableEvaluatePolicyOnGlobalSslBypass = config.enableEvaluatePolicyOnGlobalSslBypass;
    this._enableIpv6DnsOptimizationOnAllTransparentProxy = config.enableIpv6DnsOptimizationOnAllTransparentProxy;
    this._enableIpv6DnsResolutionOnTransparentProxy = config.enableIpv6DnsResolutionOnTransparentProxy;
    this._enableOffice365 = config.enableOffice365;
    this._enablePolicyForUnauthenticatedTraffic = config.enablePolicyForUnauthenticatedTraffic;
    this._enforceSurrogateIpForWindowsApp = config.enforceSurrogateIpForWindowsApp;
    this._http2NonbrowserTrafficEnabled = config.http2NonbrowserTrafficEnabled;
    this._httpRangeHeaderRemoveUrlCategories = config.httpRangeHeaderRemoveUrlCategories;
    this._id = config.id;
    this._kerberosBypassApps = config.kerberosBypassApps;
    this._kerberosBypassUrlCategories = config.kerberosBypassUrlCategories;
    this._kerberosBypassUrls = config.kerberosBypassUrls;
    this._logInternalIp = config.logInternalIp;
    this._preferSniOverConnHost = config.preferSniOverConnHost;
    this._preferSniOverConnHostApps = config.preferSniOverConnHostApps;
    this._sipaXffHeaderEnabled = config.sipaXffHeaderEnabled;
    this._sniDnsOptimizationBypassUrlCategories = config.sniDnsOptimizationBypassUrlCategories;
    this._trackHttpTunnelOnHttpPorts = config.trackHttpTunnelOnHttpPorts;
    this._uiSessionTimeout = config.uiSessionTimeout;
    this._zscalerClientConnector1AndPacRoadWarriorInFirewall = config.zscalerClientConnector1AndPacRoadWarriorInFirewall;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_bypass_apps - computed: true, optional: true, required: false
  private _authBypassApps?: string[]; 
  public get authBypassApps() {
    return cdktf.Fn.tolist(this.getListAttribute('auth_bypass_apps'));
  }
  public set authBypassApps(value: string[]) {
    this._authBypassApps = value;
  }
  public resetAuthBypassApps() {
    this._authBypassApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authBypassAppsInput() {
    return this._authBypassApps;
  }

  // auth_bypass_url_categories - computed: true, optional: true, required: false
  private _authBypassUrlCategories?: string[]; 
  public get authBypassUrlCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('auth_bypass_url_categories'));
  }
  public set authBypassUrlCategories(value: string[]) {
    this._authBypassUrlCategories = value;
  }
  public resetAuthBypassUrlCategories() {
    this._authBypassUrlCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authBypassUrlCategoriesInput() {
    return this._authBypassUrlCategories;
  }

  // auth_bypass_urls - computed: true, optional: true, required: false
  private _authBypassUrls?: string[]; 
  public get authBypassUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('auth_bypass_urls'));
  }
  public set authBypassUrls(value: string[]) {
    this._authBypassUrls = value;
  }
  public resetAuthBypassUrls() {
    this._authBypassUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authBypassUrlsInput() {
    return this._authBypassUrls;
  }

  // basic_bypass_apps - computed: true, optional: true, required: false
  private _basicBypassApps?: string[]; 
  public get basicBypassApps() {
    return cdktf.Fn.tolist(this.getListAttribute('basic_bypass_apps'));
  }
  public set basicBypassApps(value: string[]) {
    this._basicBypassApps = value;
  }
  public resetBasicBypassApps() {
    this._basicBypassApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicBypassAppsInput() {
    return this._basicBypassApps;
  }

  // basic_bypass_url_categories - computed: true, optional: true, required: false
  private _basicBypassUrlCategories?: string[]; 
  public get basicBypassUrlCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('basic_bypass_url_categories'));
  }
  public set basicBypassUrlCategories(value: string[]) {
    this._basicBypassUrlCategories = value;
  }
  public resetBasicBypassUrlCategories() {
    this._basicBypassUrlCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicBypassUrlCategoriesInput() {
    return this._basicBypassUrlCategories;
  }

  // block_connect_host_sni_mismatch - computed: true, optional: true, required: false
  private _blockConnectHostSniMismatch?: boolean | cdktf.IResolvable; 
  public get blockConnectHostSniMismatch() {
    return this.getBooleanAttribute('block_connect_host_sni_mismatch');
  }
  public set blockConnectHostSniMismatch(value: boolean | cdktf.IResolvable) {
    this._blockConnectHostSniMismatch = value;
  }
  public resetBlockConnectHostSniMismatch() {
    this._blockConnectHostSniMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockConnectHostSniMismatchInput() {
    return this._blockConnectHostSniMismatch;
  }

  // block_domain_fronting_apps - computed: true, optional: true, required: false
  private _blockDomainFrontingApps?: string[]; 
  public get blockDomainFrontingApps() {
    return cdktf.Fn.tolist(this.getListAttribute('block_domain_fronting_apps'));
  }
  public set blockDomainFrontingApps(value: string[]) {
    this._blockDomainFrontingApps = value;
  }
  public resetBlockDomainFrontingApps() {
    this._blockDomainFrontingApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDomainFrontingAppsInput() {
    return this._blockDomainFrontingApps;
  }

  // block_domain_fronting_on_host_header - computed: true, optional: true, required: false
  private _blockDomainFrontingOnHostHeader?: boolean | cdktf.IResolvable; 
  public get blockDomainFrontingOnHostHeader() {
    return this.getBooleanAttribute('block_domain_fronting_on_host_header');
  }
  public set blockDomainFrontingOnHostHeader(value: boolean | cdktf.IResolvable) {
    this._blockDomainFrontingOnHostHeader = value;
  }
  public resetBlockDomainFrontingOnHostHeader() {
    this._blockDomainFrontingOnHostHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDomainFrontingOnHostHeaderInput() {
    return this._blockDomainFrontingOnHostHeader;
  }

  // block_http_tunnel_on_non_http_ports - computed: true, optional: true, required: false
  private _blockHttpTunnelOnNonHttpPorts?: boolean | cdktf.IResolvable; 
  public get blockHttpTunnelOnNonHttpPorts() {
    return this.getBooleanAttribute('block_http_tunnel_on_non_http_ports');
  }
  public set blockHttpTunnelOnNonHttpPorts(value: boolean | cdktf.IResolvable) {
    this._blockHttpTunnelOnNonHttpPorts = value;
  }
  public resetBlockHttpTunnelOnNonHttpPorts() {
    this._blockHttpTunnelOnNonHttpPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockHttpTunnelOnNonHttpPortsInput() {
    return this._blockHttpTunnelOnNonHttpPorts;
  }

  // block_non_compliant_http_request_on_http_ports - computed: true, optional: true, required: false
  private _blockNonCompliantHttpRequestOnHttpPorts?: boolean | cdktf.IResolvable; 
  public get blockNonCompliantHttpRequestOnHttpPorts() {
    return this.getBooleanAttribute('block_non_compliant_http_request_on_http_ports');
  }
  public set blockNonCompliantHttpRequestOnHttpPorts(value: boolean | cdktf.IResolvable) {
    this._blockNonCompliantHttpRequestOnHttpPorts = value;
  }
  public resetBlockNonCompliantHttpRequestOnHttpPorts() {
    this._blockNonCompliantHttpRequestOnHttpPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockNonCompliantHttpRequestOnHttpPortsInput() {
    return this._blockNonCompliantHttpRequestOnHttpPorts;
  }

  // block_non_http_on_http_port_enabled - computed: true, optional: true, required: false
  private _blockNonHttpOnHttpPortEnabled?: boolean | cdktf.IResolvable; 
  public get blockNonHttpOnHttpPortEnabled() {
    return this.getBooleanAttribute('block_non_http_on_http_port_enabled');
  }
  public set blockNonHttpOnHttpPortEnabled(value: boolean | cdktf.IResolvable) {
    this._blockNonHttpOnHttpPortEnabled = value;
  }
  public resetBlockNonHttpOnHttpPortEnabled() {
    this._blockNonHttpOnHttpPortEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockNonHttpOnHttpPortEnabledInput() {
    return this._blockNonHttpOnHttpPortEnabled;
  }

  // cascade_url_filtering - computed: true, optional: true, required: false
  private _cascadeUrlFiltering?: boolean | cdktf.IResolvable; 
  public get cascadeUrlFiltering() {
    return this.getBooleanAttribute('cascade_url_filtering');
  }
  public set cascadeUrlFiltering(value: boolean | cdktf.IResolvable) {
    this._cascadeUrlFiltering = value;
  }
  public resetCascadeUrlFiltering() {
    this._cascadeUrlFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cascadeUrlFilteringInput() {
    return this._cascadeUrlFiltering;
  }

  // digest_auth_bypass_apps - computed: true, optional: true, required: false
  private _digestAuthBypassApps?: string[]; 
  public get digestAuthBypassApps() {
    return cdktf.Fn.tolist(this.getListAttribute('digest_auth_bypass_apps'));
  }
  public set digestAuthBypassApps(value: string[]) {
    this._digestAuthBypassApps = value;
  }
  public resetDigestAuthBypassApps() {
    this._digestAuthBypassApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestAuthBypassAppsInput() {
    return this._digestAuthBypassApps;
  }

  // digest_auth_bypass_url_categories - computed: true, optional: true, required: false
  private _digestAuthBypassUrlCategories?: string[]; 
  public get digestAuthBypassUrlCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('digest_auth_bypass_url_categories'));
  }
  public set digestAuthBypassUrlCategories(value: string[]) {
    this._digestAuthBypassUrlCategories = value;
  }
  public resetDigestAuthBypassUrlCategories() {
    this._digestAuthBypassUrlCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestAuthBypassUrlCategoriesInput() {
    return this._digestAuthBypassUrlCategories;
  }

  // digest_auth_bypass_urls - computed: true, optional: true, required: false
  private _digestAuthBypassUrls?: string[]; 
  public get digestAuthBypassUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('digest_auth_bypass_urls'));
  }
  public set digestAuthBypassUrls(value: string[]) {
    this._digestAuthBypassUrls = value;
  }
  public resetDigestAuthBypassUrls() {
    this._digestAuthBypassUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestAuthBypassUrlsInput() {
    return this._digestAuthBypassUrls;
  }

  // dns_resolution_on_transparent_proxy_apps - computed: true, optional: true, required: false
  private _dnsResolutionOnTransparentProxyApps?: string[]; 
  public get dnsResolutionOnTransparentProxyApps() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_resolution_on_transparent_proxy_apps'));
  }
  public set dnsResolutionOnTransparentProxyApps(value: string[]) {
    this._dnsResolutionOnTransparentProxyApps = value;
  }
  public resetDnsResolutionOnTransparentProxyApps() {
    this._dnsResolutionOnTransparentProxyApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsResolutionOnTransparentProxyAppsInput() {
    return this._dnsResolutionOnTransparentProxyApps;
  }

  // dns_resolution_on_transparent_proxy_exempt_apps - computed: true, optional: true, required: false
  private _dnsResolutionOnTransparentProxyExemptApps?: string[]; 
  public get dnsResolutionOnTransparentProxyExemptApps() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_resolution_on_transparent_proxy_exempt_apps'));
  }
  public set dnsResolutionOnTransparentProxyExemptApps(value: string[]) {
    this._dnsResolutionOnTransparentProxyExemptApps = value;
  }
  public resetDnsResolutionOnTransparentProxyExemptApps() {
    this._dnsResolutionOnTransparentProxyExemptApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsResolutionOnTransparentProxyExemptAppsInput() {
    return this._dnsResolutionOnTransparentProxyExemptApps;
  }

  // dns_resolution_on_transparent_proxy_exempt_url_categories - computed: true, optional: true, required: false
  private _dnsResolutionOnTransparentProxyExemptUrlCategories?: string[]; 
  public get dnsResolutionOnTransparentProxyExemptUrlCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_resolution_on_transparent_proxy_exempt_url_categories'));
  }
  public set dnsResolutionOnTransparentProxyExemptUrlCategories(value: string[]) {
    this._dnsResolutionOnTransparentProxyExemptUrlCategories = value;
  }
  public resetDnsResolutionOnTransparentProxyExemptUrlCategories() {
    this._dnsResolutionOnTransparentProxyExemptUrlCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsResolutionOnTransparentProxyExemptUrlCategoriesInput() {
    return this._dnsResolutionOnTransparentProxyExemptUrlCategories;
  }

  // dns_resolution_on_transparent_proxy_exempt_urls - computed: true, optional: true, required: false
  private _dnsResolutionOnTransparentProxyExemptUrls?: string[]; 
  public get dnsResolutionOnTransparentProxyExemptUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_resolution_on_transparent_proxy_exempt_urls'));
  }
  public set dnsResolutionOnTransparentProxyExemptUrls(value: string[]) {
    this._dnsResolutionOnTransparentProxyExemptUrls = value;
  }
  public resetDnsResolutionOnTransparentProxyExemptUrls() {
    this._dnsResolutionOnTransparentProxyExemptUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsResolutionOnTransparentProxyExemptUrlsInput() {
    return this._dnsResolutionOnTransparentProxyExemptUrls;
  }

  // dns_resolution_on_transparent_proxy_ipv6_apps - computed: true, optional: true, required: false
  private _dnsResolutionOnTransparentProxyIpv6Apps?: string[]; 
  public get dnsResolutionOnTransparentProxyIpv6Apps() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_resolution_on_transparent_proxy_ipv6_apps'));
  }
  public set dnsResolutionOnTransparentProxyIpv6Apps(value: string[]) {
    this._dnsResolutionOnTransparentProxyIpv6Apps = value;
  }
  public resetDnsResolutionOnTransparentProxyIpv6Apps() {
    this._dnsResolutionOnTransparentProxyIpv6Apps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsResolutionOnTransparentProxyIpv6AppsInput() {
    return this._dnsResolutionOnTransparentProxyIpv6Apps;
  }

  // dns_resolution_on_transparent_proxy_ipv6_exempt_apps - computed: true, optional: true, required: false
  private _dnsResolutionOnTransparentProxyIpv6ExemptApps?: string[]; 
  public get dnsResolutionOnTransparentProxyIpv6ExemptApps() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_resolution_on_transparent_proxy_ipv6_exempt_apps'));
  }
  public set dnsResolutionOnTransparentProxyIpv6ExemptApps(value: string[]) {
    this._dnsResolutionOnTransparentProxyIpv6ExemptApps = value;
  }
  public resetDnsResolutionOnTransparentProxyIpv6ExemptApps() {
    this._dnsResolutionOnTransparentProxyIpv6ExemptApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsResolutionOnTransparentProxyIpv6ExemptAppsInput() {
    return this._dnsResolutionOnTransparentProxyIpv6ExemptApps;
  }

  // dns_resolution_on_transparent_proxy_ipv6_exempt_url_categories - computed: true, optional: true, required: false
  private _dnsResolutionOnTransparentProxyIpv6ExemptUrlCategories?: string[]; 
  public get dnsResolutionOnTransparentProxyIpv6ExemptUrlCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_resolution_on_transparent_proxy_ipv6_exempt_url_categories'));
  }
  public set dnsResolutionOnTransparentProxyIpv6ExemptUrlCategories(value: string[]) {
    this._dnsResolutionOnTransparentProxyIpv6ExemptUrlCategories = value;
  }
  public resetDnsResolutionOnTransparentProxyIpv6ExemptUrlCategories() {
    this._dnsResolutionOnTransparentProxyIpv6ExemptUrlCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsResolutionOnTransparentProxyIpv6ExemptUrlCategoriesInput() {
    return this._dnsResolutionOnTransparentProxyIpv6ExemptUrlCategories;
  }

  // dns_resolution_on_transparent_proxy_ipv6_url_categories - computed: true, optional: true, required: false
  private _dnsResolutionOnTransparentProxyIpv6UrlCategories?: string[]; 
  public get dnsResolutionOnTransparentProxyIpv6UrlCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_resolution_on_transparent_proxy_ipv6_url_categories'));
  }
  public set dnsResolutionOnTransparentProxyIpv6UrlCategories(value: string[]) {
    this._dnsResolutionOnTransparentProxyIpv6UrlCategories = value;
  }
  public resetDnsResolutionOnTransparentProxyIpv6UrlCategories() {
    this._dnsResolutionOnTransparentProxyIpv6UrlCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsResolutionOnTransparentProxyIpv6UrlCategoriesInput() {
    return this._dnsResolutionOnTransparentProxyIpv6UrlCategories;
  }

  // dns_resolution_on_transparent_proxy_url_categories - computed: true, optional: true, required: false
  private _dnsResolutionOnTransparentProxyUrlCategories?: string[]; 
  public get dnsResolutionOnTransparentProxyUrlCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_resolution_on_transparent_proxy_url_categories'));
  }
  public set dnsResolutionOnTransparentProxyUrlCategories(value: string[]) {
    this._dnsResolutionOnTransparentProxyUrlCategories = value;
  }
  public resetDnsResolutionOnTransparentProxyUrlCategories() {
    this._dnsResolutionOnTransparentProxyUrlCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsResolutionOnTransparentProxyUrlCategoriesInput() {
    return this._dnsResolutionOnTransparentProxyUrlCategories;
  }

  // dns_resolution_on_transparent_proxy_urls - computed: true, optional: true, required: false
  private _dnsResolutionOnTransparentProxyUrls?: string[]; 
  public get dnsResolutionOnTransparentProxyUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_resolution_on_transparent_proxy_urls'));
  }
  public set dnsResolutionOnTransparentProxyUrls(value: string[]) {
    this._dnsResolutionOnTransparentProxyUrls = value;
  }
  public resetDnsResolutionOnTransparentProxyUrls() {
    this._dnsResolutionOnTransparentProxyUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsResolutionOnTransparentProxyUrlsInput() {
    return this._dnsResolutionOnTransparentProxyUrls;
  }

  // domain_fronting_bypass_url_categories - computed: true, optional: true, required: false
  private _domainFrontingBypassUrlCategories?: string[]; 
  public get domainFrontingBypassUrlCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('domain_fronting_bypass_url_categories'));
  }
  public set domainFrontingBypassUrlCategories(value: string[]) {
    this._domainFrontingBypassUrlCategories = value;
  }
  public resetDomainFrontingBypassUrlCategories() {
    this._domainFrontingBypassUrlCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainFrontingBypassUrlCategoriesInput() {
    return this._domainFrontingBypassUrlCategories;
  }

  // dynamic_user_risk_enabled - computed: true, optional: true, required: false
  private _dynamicUserRiskEnabled?: boolean | cdktf.IResolvable; 
  public get dynamicUserRiskEnabled() {
    return this.getBooleanAttribute('dynamic_user_risk_enabled');
  }
  public set dynamicUserRiskEnabled(value: boolean | cdktf.IResolvable) {
    this._dynamicUserRiskEnabled = value;
  }
  public resetDynamicUserRiskEnabled() {
    this._dynamicUserRiskEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicUserRiskEnabledInput() {
    return this._dynamicUserRiskEnabled;
  }

  // ecs_for_all_enabled - computed: true, optional: true, required: false
  private _ecsForAllEnabled?: boolean | cdktf.IResolvable; 
  public get ecsForAllEnabled() {
    return this.getBooleanAttribute('ecs_for_all_enabled');
  }
  public set ecsForAllEnabled(value: boolean | cdktf.IResolvable) {
    this._ecsForAllEnabled = value;
  }
  public resetEcsForAllEnabled() {
    this._ecsForAllEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsForAllEnabledInput() {
    return this._ecsForAllEnabled;
  }

  // enable_admin_rank_access - computed: true, optional: true, required: false
  private _enableAdminRankAccess?: boolean | cdktf.IResolvable; 
  public get enableAdminRankAccess() {
    return this.getBooleanAttribute('enable_admin_rank_access');
  }
  public set enableAdminRankAccess(value: boolean | cdktf.IResolvable) {
    this._enableAdminRankAccess = value;
  }
  public resetEnableAdminRankAccess() {
    this._enableAdminRankAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAdminRankAccessInput() {
    return this._enableAdminRankAccess;
  }

  // enable_dns_resolution_on_transparent_proxy - computed: true, optional: true, required: false
  private _enableDnsResolutionOnTransparentProxy?: boolean | cdktf.IResolvable; 
  public get enableDnsResolutionOnTransparentProxy() {
    return this.getBooleanAttribute('enable_dns_resolution_on_transparent_proxy');
  }
  public set enableDnsResolutionOnTransparentProxy(value: boolean | cdktf.IResolvable) {
    this._enableDnsResolutionOnTransparentProxy = value;
  }
  public resetEnableDnsResolutionOnTransparentProxy() {
    this._enableDnsResolutionOnTransparentProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDnsResolutionOnTransparentProxyInput() {
    return this._enableDnsResolutionOnTransparentProxy;
  }

  // enable_evaluate_policy_on_global_ssl_bypass - computed: true, optional: true, required: false
  private _enableEvaluatePolicyOnGlobalSslBypass?: boolean | cdktf.IResolvable; 
  public get enableEvaluatePolicyOnGlobalSslBypass() {
    return this.getBooleanAttribute('enable_evaluate_policy_on_global_ssl_bypass');
  }
  public set enableEvaluatePolicyOnGlobalSslBypass(value: boolean | cdktf.IResolvable) {
    this._enableEvaluatePolicyOnGlobalSslBypass = value;
  }
  public resetEnableEvaluatePolicyOnGlobalSslBypass() {
    this._enableEvaluatePolicyOnGlobalSslBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEvaluatePolicyOnGlobalSslBypassInput() {
    return this._enableEvaluatePolicyOnGlobalSslBypass;
  }

  // enable_ipv6_dns_optimization_on_all_transparent_proxy - computed: true, optional: true, required: false
  private _enableIpv6DnsOptimizationOnAllTransparentProxy?: boolean | cdktf.IResolvable; 
  public get enableIpv6DnsOptimizationOnAllTransparentProxy() {
    return this.getBooleanAttribute('enable_ipv6_dns_optimization_on_all_transparent_proxy');
  }
  public set enableIpv6DnsOptimizationOnAllTransparentProxy(value: boolean | cdktf.IResolvable) {
    this._enableIpv6DnsOptimizationOnAllTransparentProxy = value;
  }
  public resetEnableIpv6DnsOptimizationOnAllTransparentProxy() {
    this._enableIpv6DnsOptimizationOnAllTransparentProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpv6DnsOptimizationOnAllTransparentProxyInput() {
    return this._enableIpv6DnsOptimizationOnAllTransparentProxy;
  }

  // enable_ipv6_dns_resolution_on_transparent_proxy - computed: true, optional: true, required: false
  private _enableIpv6DnsResolutionOnTransparentProxy?: boolean | cdktf.IResolvable; 
  public get enableIpv6DnsResolutionOnTransparentProxy() {
    return this.getBooleanAttribute('enable_ipv6_dns_resolution_on_transparent_proxy');
  }
  public set enableIpv6DnsResolutionOnTransparentProxy(value: boolean | cdktf.IResolvable) {
    this._enableIpv6DnsResolutionOnTransparentProxy = value;
  }
  public resetEnableIpv6DnsResolutionOnTransparentProxy() {
    this._enableIpv6DnsResolutionOnTransparentProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpv6DnsResolutionOnTransparentProxyInput() {
    return this._enableIpv6DnsResolutionOnTransparentProxy;
  }

  // enable_office365 - computed: true, optional: true, required: false
  private _enableOffice365?: boolean | cdktf.IResolvable; 
  public get enableOffice365() {
    return this.getBooleanAttribute('enable_office365');
  }
  public set enableOffice365(value: boolean | cdktf.IResolvable) {
    this._enableOffice365 = value;
  }
  public resetEnableOffice365() {
    this._enableOffice365 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOffice365Input() {
    return this._enableOffice365;
  }

  // enable_policy_for_unauthenticated_traffic - computed: true, optional: true, required: false
  private _enablePolicyForUnauthenticatedTraffic?: boolean | cdktf.IResolvable; 
  public get enablePolicyForUnauthenticatedTraffic() {
    return this.getBooleanAttribute('enable_policy_for_unauthenticated_traffic');
  }
  public set enablePolicyForUnauthenticatedTraffic(value: boolean | cdktf.IResolvable) {
    this._enablePolicyForUnauthenticatedTraffic = value;
  }
  public resetEnablePolicyForUnauthenticatedTraffic() {
    this._enablePolicyForUnauthenticatedTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePolicyForUnauthenticatedTrafficInput() {
    return this._enablePolicyForUnauthenticatedTraffic;
  }

  // enforce_surrogate_ip_for_windows_app - computed: true, optional: true, required: false
  private _enforceSurrogateIpForWindowsApp?: boolean | cdktf.IResolvable; 
  public get enforceSurrogateIpForWindowsApp() {
    return this.getBooleanAttribute('enforce_surrogate_ip_for_windows_app');
  }
  public set enforceSurrogateIpForWindowsApp(value: boolean | cdktf.IResolvable) {
    this._enforceSurrogateIpForWindowsApp = value;
  }
  public resetEnforceSurrogateIpForWindowsApp() {
    this._enforceSurrogateIpForWindowsApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceSurrogateIpForWindowsAppInput() {
    return this._enforceSurrogateIpForWindowsApp;
  }

  // http2_nonbrowser_traffic_enabled - computed: true, optional: true, required: false
  private _http2NonbrowserTrafficEnabled?: boolean | cdktf.IResolvable; 
  public get http2NonbrowserTrafficEnabled() {
    return this.getBooleanAttribute('http2_nonbrowser_traffic_enabled');
  }
  public set http2NonbrowserTrafficEnabled(value: boolean | cdktf.IResolvable) {
    this._http2NonbrowserTrafficEnabled = value;
  }
  public resetHttp2NonbrowserTrafficEnabled() {
    this._http2NonbrowserTrafficEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2NonbrowserTrafficEnabledInput() {
    return this._http2NonbrowserTrafficEnabled;
  }

  // http_range_header_remove_url_categories - computed: true, optional: true, required: false
  private _httpRangeHeaderRemoveUrlCategories?: string[]; 
  public get httpRangeHeaderRemoveUrlCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('http_range_header_remove_url_categories'));
  }
  public set httpRangeHeaderRemoveUrlCategories(value: string[]) {
    this._httpRangeHeaderRemoveUrlCategories = value;
  }
  public resetHttpRangeHeaderRemoveUrlCategories() {
    this._httpRangeHeaderRemoveUrlCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRangeHeaderRemoveUrlCategoriesInput() {
    return this._httpRangeHeaderRemoveUrlCategories;
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

  // kerberos_bypass_apps - computed: true, optional: true, required: false
  private _kerberosBypassApps?: string[]; 
  public get kerberosBypassApps() {
    return cdktf.Fn.tolist(this.getListAttribute('kerberos_bypass_apps'));
  }
  public set kerberosBypassApps(value: string[]) {
    this._kerberosBypassApps = value;
  }
  public resetKerberosBypassApps() {
    this._kerberosBypassApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosBypassAppsInput() {
    return this._kerberosBypassApps;
  }

  // kerberos_bypass_url_categories - computed: true, optional: true, required: false
  private _kerberosBypassUrlCategories?: string[]; 
  public get kerberosBypassUrlCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('kerberos_bypass_url_categories'));
  }
  public set kerberosBypassUrlCategories(value: string[]) {
    this._kerberosBypassUrlCategories = value;
  }
  public resetKerberosBypassUrlCategories() {
    this._kerberosBypassUrlCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosBypassUrlCategoriesInput() {
    return this._kerberosBypassUrlCategories;
  }

  // kerberos_bypass_urls - computed: true, optional: true, required: false
  private _kerberosBypassUrls?: string[]; 
  public get kerberosBypassUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('kerberos_bypass_urls'));
  }
  public set kerberosBypassUrls(value: string[]) {
    this._kerberosBypassUrls = value;
  }
  public resetKerberosBypassUrls() {
    this._kerberosBypassUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosBypassUrlsInput() {
    return this._kerberosBypassUrls;
  }

  // log_internal_ip - computed: true, optional: true, required: false
  private _logInternalIp?: boolean | cdktf.IResolvable; 
  public get logInternalIp() {
    return this.getBooleanAttribute('log_internal_ip');
  }
  public set logInternalIp(value: boolean | cdktf.IResolvable) {
    this._logInternalIp = value;
  }
  public resetLogInternalIp() {
    this._logInternalIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInternalIpInput() {
    return this._logInternalIp;
  }

  // prefer_sni_over_conn_host - computed: true, optional: true, required: false
  private _preferSniOverConnHost?: boolean | cdktf.IResolvable; 
  public get preferSniOverConnHost() {
    return this.getBooleanAttribute('prefer_sni_over_conn_host');
  }
  public set preferSniOverConnHost(value: boolean | cdktf.IResolvable) {
    this._preferSniOverConnHost = value;
  }
  public resetPreferSniOverConnHost() {
    this._preferSniOverConnHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferSniOverConnHostInput() {
    return this._preferSniOverConnHost;
  }

  // prefer_sni_over_conn_host_apps - computed: true, optional: true, required: false
  private _preferSniOverConnHostApps?: string[]; 
  public get preferSniOverConnHostApps() {
    return cdktf.Fn.tolist(this.getListAttribute('prefer_sni_over_conn_host_apps'));
  }
  public set preferSniOverConnHostApps(value: string[]) {
    this._preferSniOverConnHostApps = value;
  }
  public resetPreferSniOverConnHostApps() {
    this._preferSniOverConnHostApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferSniOverConnHostAppsInput() {
    return this._preferSniOverConnHostApps;
  }

  // sipa_xff_header_enabled - computed: true, optional: true, required: false
  private _sipaXffHeaderEnabled?: boolean | cdktf.IResolvable; 
  public get sipaXffHeaderEnabled() {
    return this.getBooleanAttribute('sipa_xff_header_enabled');
  }
  public set sipaXffHeaderEnabled(value: boolean | cdktf.IResolvable) {
    this._sipaXffHeaderEnabled = value;
  }
  public resetSipaXffHeaderEnabled() {
    this._sipaXffHeaderEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipaXffHeaderEnabledInput() {
    return this._sipaXffHeaderEnabled;
  }

  // sni_dns_optimization_bypass_url_categories - computed: true, optional: true, required: false
  private _sniDnsOptimizationBypassUrlCategories?: string[]; 
  public get sniDnsOptimizationBypassUrlCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('sni_dns_optimization_bypass_url_categories'));
  }
  public set sniDnsOptimizationBypassUrlCategories(value: string[]) {
    this._sniDnsOptimizationBypassUrlCategories = value;
  }
  public resetSniDnsOptimizationBypassUrlCategories() {
    this._sniDnsOptimizationBypassUrlCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniDnsOptimizationBypassUrlCategoriesInput() {
    return this._sniDnsOptimizationBypassUrlCategories;
  }

  // track_http_tunnel_on_http_ports - computed: true, optional: true, required: false
  private _trackHttpTunnelOnHttpPorts?: boolean | cdktf.IResolvable; 
  public get trackHttpTunnelOnHttpPorts() {
    return this.getBooleanAttribute('track_http_tunnel_on_http_ports');
  }
  public set trackHttpTunnelOnHttpPorts(value: boolean | cdktf.IResolvable) {
    this._trackHttpTunnelOnHttpPorts = value;
  }
  public resetTrackHttpTunnelOnHttpPorts() {
    this._trackHttpTunnelOnHttpPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackHttpTunnelOnHttpPortsInput() {
    return this._trackHttpTunnelOnHttpPorts;
  }

  // ui_session_timeout - computed: true, optional: true, required: false
  private _uiSessionTimeout?: number; 
  public get uiSessionTimeout() {
    return this.getNumberAttribute('ui_session_timeout');
  }
  public set uiSessionTimeout(value: number) {
    this._uiSessionTimeout = value;
  }
  public resetUiSessionTimeout() {
    this._uiSessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uiSessionTimeoutInput() {
    return this._uiSessionTimeout;
  }

  // zscaler_client_connector_1_and_pac_road_warrior_in_firewall - computed: true, optional: true, required: false
  private _zscalerClientConnector1AndPacRoadWarriorInFirewall?: boolean | cdktf.IResolvable; 
  public get zscalerClientConnector1AndPacRoadWarriorInFirewall() {
    return this.getBooleanAttribute('zscaler_client_connector_1_and_pac_road_warrior_in_firewall');
  }
  public set zscalerClientConnector1AndPacRoadWarriorInFirewall(value: boolean | cdktf.IResolvable) {
    this._zscalerClientConnector1AndPacRoadWarriorInFirewall = value;
  }
  public resetZscalerClientConnector1AndPacRoadWarriorInFirewall() {
    this._zscalerClientConnector1AndPacRoadWarriorInFirewall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zscalerClientConnector1AndPacRoadWarriorInFirewallInput() {
    return this._zscalerClientConnector1AndPacRoadWarriorInFirewall;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_bypass_apps: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authBypassApps),
      auth_bypass_url_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authBypassUrlCategories),
      auth_bypass_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authBypassUrls),
      basic_bypass_apps: cdktf.listMapper(cdktf.stringToTerraform, false)(this._basicBypassApps),
      basic_bypass_url_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._basicBypassUrlCategories),
      block_connect_host_sni_mismatch: cdktf.booleanToTerraform(this._blockConnectHostSniMismatch),
      block_domain_fronting_apps: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blockDomainFrontingApps),
      block_domain_fronting_on_host_header: cdktf.booleanToTerraform(this._blockDomainFrontingOnHostHeader),
      block_http_tunnel_on_non_http_ports: cdktf.booleanToTerraform(this._blockHttpTunnelOnNonHttpPorts),
      block_non_compliant_http_request_on_http_ports: cdktf.booleanToTerraform(this._blockNonCompliantHttpRequestOnHttpPorts),
      block_non_http_on_http_port_enabled: cdktf.booleanToTerraform(this._blockNonHttpOnHttpPortEnabled),
      cascade_url_filtering: cdktf.booleanToTerraform(this._cascadeUrlFiltering),
      digest_auth_bypass_apps: cdktf.listMapper(cdktf.stringToTerraform, false)(this._digestAuthBypassApps),
      digest_auth_bypass_url_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._digestAuthBypassUrlCategories),
      digest_auth_bypass_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._digestAuthBypassUrls),
      dns_resolution_on_transparent_proxy_apps: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsResolutionOnTransparentProxyApps),
      dns_resolution_on_transparent_proxy_exempt_apps: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsResolutionOnTransparentProxyExemptApps),
      dns_resolution_on_transparent_proxy_exempt_url_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsResolutionOnTransparentProxyExemptUrlCategories),
      dns_resolution_on_transparent_proxy_exempt_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsResolutionOnTransparentProxyExemptUrls),
      dns_resolution_on_transparent_proxy_ipv6_apps: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsResolutionOnTransparentProxyIpv6Apps),
      dns_resolution_on_transparent_proxy_ipv6_exempt_apps: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsResolutionOnTransparentProxyIpv6ExemptApps),
      dns_resolution_on_transparent_proxy_ipv6_exempt_url_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsResolutionOnTransparentProxyIpv6ExemptUrlCategories),
      dns_resolution_on_transparent_proxy_ipv6_url_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsResolutionOnTransparentProxyIpv6UrlCategories),
      dns_resolution_on_transparent_proxy_url_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsResolutionOnTransparentProxyUrlCategories),
      dns_resolution_on_transparent_proxy_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsResolutionOnTransparentProxyUrls),
      domain_fronting_bypass_url_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domainFrontingBypassUrlCategories),
      dynamic_user_risk_enabled: cdktf.booleanToTerraform(this._dynamicUserRiskEnabled),
      ecs_for_all_enabled: cdktf.booleanToTerraform(this._ecsForAllEnabled),
      enable_admin_rank_access: cdktf.booleanToTerraform(this._enableAdminRankAccess),
      enable_dns_resolution_on_transparent_proxy: cdktf.booleanToTerraform(this._enableDnsResolutionOnTransparentProxy),
      enable_evaluate_policy_on_global_ssl_bypass: cdktf.booleanToTerraform(this._enableEvaluatePolicyOnGlobalSslBypass),
      enable_ipv6_dns_optimization_on_all_transparent_proxy: cdktf.booleanToTerraform(this._enableIpv6DnsOptimizationOnAllTransparentProxy),
      enable_ipv6_dns_resolution_on_transparent_proxy: cdktf.booleanToTerraform(this._enableIpv6DnsResolutionOnTransparentProxy),
      enable_office365: cdktf.booleanToTerraform(this._enableOffice365),
      enable_policy_for_unauthenticated_traffic: cdktf.booleanToTerraform(this._enablePolicyForUnauthenticatedTraffic),
      enforce_surrogate_ip_for_windows_app: cdktf.booleanToTerraform(this._enforceSurrogateIpForWindowsApp),
      http2_nonbrowser_traffic_enabled: cdktf.booleanToTerraform(this._http2NonbrowserTrafficEnabled),
      http_range_header_remove_url_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._httpRangeHeaderRemoveUrlCategories),
      id: cdktf.stringToTerraform(this._id),
      kerberos_bypass_apps: cdktf.listMapper(cdktf.stringToTerraform, false)(this._kerberosBypassApps),
      kerberos_bypass_url_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._kerberosBypassUrlCategories),
      kerberos_bypass_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._kerberosBypassUrls),
      log_internal_ip: cdktf.booleanToTerraform(this._logInternalIp),
      prefer_sni_over_conn_host: cdktf.booleanToTerraform(this._preferSniOverConnHost),
      prefer_sni_over_conn_host_apps: cdktf.listMapper(cdktf.stringToTerraform, false)(this._preferSniOverConnHostApps),
      sipa_xff_header_enabled: cdktf.booleanToTerraform(this._sipaXffHeaderEnabled),
      sni_dns_optimization_bypass_url_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sniDnsOptimizationBypassUrlCategories),
      track_http_tunnel_on_http_ports: cdktf.booleanToTerraform(this._trackHttpTunnelOnHttpPorts),
      ui_session_timeout: cdktf.numberToTerraform(this._uiSessionTimeout),
      zscaler_client_connector_1_and_pac_road_warrior_in_firewall: cdktf.booleanToTerraform(this._zscalerClientConnector1AndPacRoadWarriorInFirewall),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_bypass_apps: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authBypassApps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      auth_bypass_url_categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authBypassUrlCategories),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      auth_bypass_urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authBypassUrls),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      basic_bypass_apps: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._basicBypassApps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      basic_bypass_url_categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._basicBypassUrlCategories),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      block_connect_host_sni_mismatch: {
        value: cdktf.booleanToHclTerraform(this._blockConnectHostSniMismatch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_domain_fronting_apps: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._blockDomainFrontingApps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      block_domain_fronting_on_host_header: {
        value: cdktf.booleanToHclTerraform(this._blockDomainFrontingOnHostHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_http_tunnel_on_non_http_ports: {
        value: cdktf.booleanToHclTerraform(this._blockHttpTunnelOnNonHttpPorts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_non_compliant_http_request_on_http_ports: {
        value: cdktf.booleanToHclTerraform(this._blockNonCompliantHttpRequestOnHttpPorts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_non_http_on_http_port_enabled: {
        value: cdktf.booleanToHclTerraform(this._blockNonHttpOnHttpPortEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cascade_url_filtering: {
        value: cdktf.booleanToHclTerraform(this._cascadeUrlFiltering),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      digest_auth_bypass_apps: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._digestAuthBypassApps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      digest_auth_bypass_url_categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._digestAuthBypassUrlCategories),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      digest_auth_bypass_urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._digestAuthBypassUrls),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dns_resolution_on_transparent_proxy_apps: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsResolutionOnTransparentProxyApps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dns_resolution_on_transparent_proxy_exempt_apps: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsResolutionOnTransparentProxyExemptApps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dns_resolution_on_transparent_proxy_exempt_url_categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsResolutionOnTransparentProxyExemptUrlCategories),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dns_resolution_on_transparent_proxy_exempt_urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsResolutionOnTransparentProxyExemptUrls),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dns_resolution_on_transparent_proxy_ipv6_apps: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsResolutionOnTransparentProxyIpv6Apps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dns_resolution_on_transparent_proxy_ipv6_exempt_apps: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsResolutionOnTransparentProxyIpv6ExemptApps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dns_resolution_on_transparent_proxy_ipv6_exempt_url_categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsResolutionOnTransparentProxyIpv6ExemptUrlCategories),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dns_resolution_on_transparent_proxy_ipv6_url_categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsResolutionOnTransparentProxyIpv6UrlCategories),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dns_resolution_on_transparent_proxy_url_categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsResolutionOnTransparentProxyUrlCategories),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dns_resolution_on_transparent_proxy_urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsResolutionOnTransparentProxyUrls),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      domain_fronting_bypass_url_categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domainFrontingBypassUrlCategories),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynamic_user_risk_enabled: {
        value: cdktf.booleanToHclTerraform(this._dynamicUserRiskEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ecs_for_all_enabled: {
        value: cdktf.booleanToHclTerraform(this._ecsForAllEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_admin_rank_access: {
        value: cdktf.booleanToHclTerraform(this._enableAdminRankAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_dns_resolution_on_transparent_proxy: {
        value: cdktf.booleanToHclTerraform(this._enableDnsResolutionOnTransparentProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_evaluate_policy_on_global_ssl_bypass: {
        value: cdktf.booleanToHclTerraform(this._enableEvaluatePolicyOnGlobalSslBypass),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_ipv6_dns_optimization_on_all_transparent_proxy: {
        value: cdktf.booleanToHclTerraform(this._enableIpv6DnsOptimizationOnAllTransparentProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_ipv6_dns_resolution_on_transparent_proxy: {
        value: cdktf.booleanToHclTerraform(this._enableIpv6DnsResolutionOnTransparentProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_office365: {
        value: cdktf.booleanToHclTerraform(this._enableOffice365),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_policy_for_unauthenticated_traffic: {
        value: cdktf.booleanToHclTerraform(this._enablePolicyForUnauthenticatedTraffic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enforce_surrogate_ip_for_windows_app: {
        value: cdktf.booleanToHclTerraform(this._enforceSurrogateIpForWindowsApp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      http2_nonbrowser_traffic_enabled: {
        value: cdktf.booleanToHclTerraform(this._http2NonbrowserTrafficEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      http_range_header_remove_url_categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._httpRangeHeaderRemoveUrlCategories),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kerberos_bypass_apps: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._kerberosBypassApps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      kerberos_bypass_url_categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._kerberosBypassUrlCategories),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      kerberos_bypass_urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._kerberosBypassUrls),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      log_internal_ip: {
        value: cdktf.booleanToHclTerraform(this._logInternalIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      prefer_sni_over_conn_host: {
        value: cdktf.booleanToHclTerraform(this._preferSniOverConnHost),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      prefer_sni_over_conn_host_apps: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._preferSniOverConnHostApps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sipa_xff_header_enabled: {
        value: cdktf.booleanToHclTerraform(this._sipaXffHeaderEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sni_dns_optimization_bypass_url_categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sniDnsOptimizationBypassUrlCategories),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      track_http_tunnel_on_http_ports: {
        value: cdktf.booleanToHclTerraform(this._trackHttpTunnelOnHttpPorts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ui_session_timeout: {
        value: cdktf.numberToHclTerraform(this._uiSessionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zscaler_client_connector_1_and_pac_road_warrior_in_firewall: {
        value: cdktf.booleanToHclTerraform(this._zscalerClientConnector1AndPacRoadWarriorInFirewall),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
