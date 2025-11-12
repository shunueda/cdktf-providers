// https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/advanced_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZiaAdvancedSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/advanced_settings#id DataZiaAdvancedSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/advanced_settings zia_advanced_settings}
*/
export class DataZiaAdvancedSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_advanced_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZiaAdvancedSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZiaAdvancedSettings to import
  * @param importFromId The id of the existing DataZiaAdvancedSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/advanced_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZiaAdvancedSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_advanced_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/advanced_settings zia_advanced_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZiaAdvancedSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZiaAdvancedSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_advanced_settings',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.5.3',
        providerVersionConstraint: '4.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_bypass_apps - computed: true, optional: false, required: false
  public get authBypassApps() {
    return cdktf.Fn.tolist(this.getListAttribute('auth_bypass_apps'));
  }

  // auth_bypass_url_categories - computed: true, optional: false, required: false
  public get authBypassUrlCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('auth_bypass_url_categories'));
  }

  // auth_bypass_urls - computed: true, optional: false, required: false
  public get authBypassUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('auth_bypass_urls'));
  }

  // basic_bypass_apps - computed: true, optional: false, required: false
  public get basicBypassApps() {
    return cdktf.Fn.tolist(this.getListAttribute('basic_bypass_apps'));
  }

  // basic_bypass_url_categories - computed: true, optional: false, required: false
  public get basicBypassUrlCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('basic_bypass_url_categories'));
  }

  // block_connect_host_sni_mismatch - computed: true, optional: false, required: false
  public get blockConnectHostSniMismatch() {
    return this.getBooleanAttribute('block_connect_host_sni_mismatch');
  }

  // block_domain_fronting_apps - computed: true, optional: false, required: false
  public get blockDomainFrontingApps() {
    return cdktf.Fn.tolist(this.getListAttribute('block_domain_fronting_apps'));
  }

  // block_domain_fronting_on_host_header - computed: true, optional: false, required: false
  public get blockDomainFrontingOnHostHeader() {
    return this.getBooleanAttribute('block_domain_fronting_on_host_header');
  }

  // block_http_tunnel_on_non_http_ports - computed: true, optional: false, required: false
  public get blockHttpTunnelOnNonHttpPorts() {
    return this.getBooleanAttribute('block_http_tunnel_on_non_http_ports');
  }

  // block_non_compliant_http_request_on_http_ports - computed: true, optional: false, required: false
  public get blockNonCompliantHttpRequestOnHttpPorts() {
    return this.getBooleanAttribute('block_non_compliant_http_request_on_http_ports');
  }

  // block_non_http_on_http_port_enabled - computed: true, optional: false, required: false
  public get blockNonHttpOnHttpPortEnabled() {
    return this.getBooleanAttribute('block_non_http_on_http_port_enabled');
  }

  // cascade_url_filtering - computed: true, optional: false, required: false
  public get cascadeUrlFiltering() {
    return this.getBooleanAttribute('cascade_url_filtering');
  }

  // digest_auth_bypass_apps - computed: true, optional: false, required: false
  public get digestAuthBypassApps() {
    return cdktf.Fn.tolist(this.getListAttribute('digest_auth_bypass_apps'));
  }

  // digest_auth_bypass_url_categories - computed: true, optional: false, required: false
  public get digestAuthBypassUrlCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('digest_auth_bypass_url_categories'));
  }

  // digest_auth_bypass_urls - computed: true, optional: false, required: false
  public get digestAuthBypassUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('digest_auth_bypass_urls'));
  }

  // dns_resolution_on_transparent_proxy_apps - computed: true, optional: false, required: false
  public get dnsResolutionOnTransparentProxyApps() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_resolution_on_transparent_proxy_apps'));
  }

  // dns_resolution_on_transparent_proxy_exempt_apps - computed: true, optional: false, required: false
  public get dnsResolutionOnTransparentProxyExemptApps() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_resolution_on_transparent_proxy_exempt_apps'));
  }

  // dns_resolution_on_transparent_proxy_exempt_url_categories - computed: true, optional: false, required: false
  public get dnsResolutionOnTransparentProxyExemptUrlCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_resolution_on_transparent_proxy_exempt_url_categories'));
  }

  // dns_resolution_on_transparent_proxy_exempt_urls - computed: true, optional: false, required: false
  public get dnsResolutionOnTransparentProxyExemptUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_resolution_on_transparent_proxy_exempt_urls'));
  }

  // dns_resolution_on_transparent_proxy_ipv6_apps - computed: true, optional: false, required: false
  public get dnsResolutionOnTransparentProxyIpv6Apps() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_resolution_on_transparent_proxy_ipv6_apps'));
  }

  // dns_resolution_on_transparent_proxy_ipv6_exempt_apps - computed: true, optional: false, required: false
  public get dnsResolutionOnTransparentProxyIpv6ExemptApps() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_resolution_on_transparent_proxy_ipv6_exempt_apps'));
  }

  // dns_resolution_on_transparent_proxy_ipv6_exempt_url_categories - computed: true, optional: false, required: false
  public get dnsResolutionOnTransparentProxyIpv6ExemptUrlCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_resolution_on_transparent_proxy_ipv6_exempt_url_categories'));
  }

  // dns_resolution_on_transparent_proxy_ipv6_url_categories - computed: true, optional: false, required: false
  public get dnsResolutionOnTransparentProxyIpv6UrlCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_resolution_on_transparent_proxy_ipv6_url_categories'));
  }

  // dns_resolution_on_transparent_proxy_url_categories - computed: true, optional: false, required: false
  public get dnsResolutionOnTransparentProxyUrlCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_resolution_on_transparent_proxy_url_categories'));
  }

  // dns_resolution_on_transparent_proxy_urls - computed: true, optional: false, required: false
  public get dnsResolutionOnTransparentProxyUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_resolution_on_transparent_proxy_urls'));
  }

  // domain_fronting_bypass_url_categories - computed: true, optional: false, required: false
  public get domainFrontingBypassUrlCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('domain_fronting_bypass_url_categories'));
  }

  // dynamic_user_risk_enabled - computed: true, optional: false, required: false
  public get dynamicUserRiskEnabled() {
    return this.getBooleanAttribute('dynamic_user_risk_enabled');
  }

  // ecs_for_all_enabled - computed: true, optional: false, required: false
  public get ecsForAllEnabled() {
    return this.getBooleanAttribute('ecs_for_all_enabled');
  }

  // enable_admin_rank_access - computed: true, optional: false, required: false
  public get enableAdminRankAccess() {
    return this.getBooleanAttribute('enable_admin_rank_access');
  }

  // enable_dns_resolution_on_transparent_proxy - computed: true, optional: false, required: false
  public get enableDnsResolutionOnTransparentProxy() {
    return this.getBooleanAttribute('enable_dns_resolution_on_transparent_proxy');
  }

  // enable_evaluate_policy_on_global_ssl_bypass - computed: true, optional: false, required: false
  public get enableEvaluatePolicyOnGlobalSslBypass() {
    return this.getBooleanAttribute('enable_evaluate_policy_on_global_ssl_bypass');
  }

  // enable_ipv6_dns_optimization_on_all_transparent_proxy - computed: true, optional: false, required: false
  public get enableIpv6DnsOptimizationOnAllTransparentProxy() {
    return this.getBooleanAttribute('enable_ipv6_dns_optimization_on_all_transparent_proxy');
  }

  // enable_ipv6_dns_resolution_on_transparent_proxy - computed: true, optional: false, required: false
  public get enableIpv6DnsResolutionOnTransparentProxy() {
    return this.getBooleanAttribute('enable_ipv6_dns_resolution_on_transparent_proxy');
  }

  // enable_office365 - computed: true, optional: false, required: false
  public get enableOffice365() {
    return this.getBooleanAttribute('enable_office365');
  }

  // enable_policy_for_unauthenticated_traffic - computed: true, optional: false, required: false
  public get enablePolicyForUnauthenticatedTraffic() {
    return this.getBooleanAttribute('enable_policy_for_unauthenticated_traffic');
  }

  // enforce_surrogate_ip_for_windows_app - computed: true, optional: false, required: false
  public get enforceSurrogateIpForWindowsApp() {
    return this.getBooleanAttribute('enforce_surrogate_ip_for_windows_app');
  }

  // http2_nonbrowser_traffic_enabled - computed: true, optional: false, required: false
  public get http2NonbrowserTrafficEnabled() {
    return this.getBooleanAttribute('http2_nonbrowser_traffic_enabled');
  }

  // http_range_header_remove_url_categories - computed: true, optional: false, required: false
  public get httpRangeHeaderRemoveUrlCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('http_range_header_remove_url_categories'));
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

  // kerberos_bypass_apps - computed: true, optional: false, required: false
  public get kerberosBypassApps() {
    return cdktf.Fn.tolist(this.getListAttribute('kerberos_bypass_apps'));
  }

  // kerberos_bypass_url_categories - computed: true, optional: false, required: false
  public get kerberosBypassUrlCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('kerberos_bypass_url_categories'));
  }

  // kerberos_bypass_urls - computed: true, optional: false, required: false
  public get kerberosBypassUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('kerberos_bypass_urls'));
  }

  // log_internal_ip - computed: true, optional: false, required: false
  public get logInternalIp() {
    return this.getBooleanAttribute('log_internal_ip');
  }

  // prefer_sni_over_conn_host - computed: true, optional: false, required: false
  public get preferSniOverConnHost() {
    return this.getBooleanAttribute('prefer_sni_over_conn_host');
  }

  // prefer_sni_over_conn_host_apps - computed: true, optional: false, required: false
  public get preferSniOverConnHostApps() {
    return cdktf.Fn.tolist(this.getListAttribute('prefer_sni_over_conn_host_apps'));
  }

  // sipa_xff_header_enabled - computed: true, optional: false, required: false
  public get sipaXffHeaderEnabled() {
    return this.getBooleanAttribute('sipa_xff_header_enabled');
  }

  // sni_dns_optimization_bypass_url_categories - computed: true, optional: false, required: false
  public get sniDnsOptimizationBypassUrlCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('sni_dns_optimization_bypass_url_categories'));
  }

  // track_http_tunnel_on_http_ports - computed: true, optional: false, required: false
  public get trackHttpTunnelOnHttpPorts() {
    return this.getBooleanAttribute('track_http_tunnel_on_http_ports');
  }

  // ui_session_timeout - computed: true, optional: false, required: false
  public get uiSessionTimeout() {
    return this.getNumberAttribute('ui_session_timeout');
  }

  // zscaler_client_connector_1_and_pac_road_warrior_in_firewall - computed: true, optional: false, required: false
  public get zscalerClientConnector1AndPacRoadWarriorInFirewall() {
    return this.getBooleanAttribute('zscaler_client_connector_1_and_pac_road_warrior_in_firewall');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
