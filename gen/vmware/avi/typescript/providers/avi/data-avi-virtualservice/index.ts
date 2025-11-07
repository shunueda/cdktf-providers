// generated from terraform resource schema

import { DataAviVirtualserviceAnalyticsPolicyList, 
DataAviVirtualserviceConfigpbAttributesList, 
DataAviVirtualserviceConnectionsRateLimitList, 
DataAviVirtualserviceContentRewriteList, 
DataAviVirtualserviceDnsInfoList, 
DataAviVirtualserviceDnsPoliciesList, 
DataAviVirtualserviceHttpPoliciesList, 
DataAviVirtualserviceJwtConfigList, 
DataAviVirtualserviceL4PoliciesList, 
DataAviVirtualserviceLdapVsConfigList, 
DataAviVirtualserviceMarkersList, 
DataAviVirtualserviceOauthVsConfigList, 
DataAviVirtualservicePerformanceLimitsList, 
DataAviVirtualserviceRequestsRateLimitList, 
DataAviVirtualserviceSamlSpConfigList, 
DataAviVirtualserviceServicePoolSelectList, 
DataAviVirtualserviceServicesList, 
DataAviVirtualserviceSidebandProfileList, 
DataAviVirtualserviceSnatIpList, 
DataAviVirtualserviceSnatIp6AddressesList, 
DataAviVirtualserviceSslProfileSelectorsList, 
DataAviVirtualserviceStaticDnsRecordsList, 
DataAviVirtualserviceTopologyPoliciesList, 
DataAviVirtualserviceVhMatchesList, 
DataAviVirtualserviceVipList, 
DataAviVirtualserviceVsDatascriptsList} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAviVirtualserviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/virtualservice#cloud_ref DataAviVirtualservice#cloud_ref}
  */
  readonly cloudRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/virtualservice#id DataAviVirtualservice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/virtualservice#name DataAviVirtualservice#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/virtualservice#tenant_ref DataAviVirtualservice#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/virtualservice#uuid DataAviVirtualservice#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/virtualservice avi_virtualservice}
*/
export class DataAviVirtualservice extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_virtualservice";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAviVirtualservice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAviVirtualservice to import
  * @param importFromId The id of the existing DataAviVirtualservice that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/virtualservice#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAviVirtualservice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_virtualservice", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/virtualservice avi_virtualservice} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAviVirtualserviceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAviVirtualserviceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_virtualservice',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.1.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudRef = config.cloudRef;
    this._id = config.id;
    this._name = config.name;
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_standby_se_tag - computed: true, optional: false, required: false
  public get activeStandbySeTag() {
    return this.getStringAttribute('active_standby_se_tag');
  }

  // advertise_down_vs - computed: true, optional: false, required: false
  public get advertiseDownVs() {
    return this.getStringAttribute('advertise_down_vs');
  }

  // allow_invalid_client_cert - computed: true, optional: false, required: false
  public get allowInvalidClientCert() {
    return this.getStringAttribute('allow_invalid_client_cert');
  }

  // analytics_policy - computed: true, optional: false, required: false
  private _analyticsPolicy = new DataAviVirtualserviceAnalyticsPolicyList(this, "analytics_policy", true);
  public get analyticsPolicy() {
    return this._analyticsPolicy;
  }

  // analytics_profile_ref - computed: true, optional: false, required: false
  public get analyticsProfileRef() {
    return this.getStringAttribute('analytics_profile_ref');
  }

  // application_profile_ref - computed: true, optional: false, required: false
  public get applicationProfileRef() {
    return this.getStringAttribute('application_profile_ref');
  }

  // azure_availability_set - computed: true, optional: false, required: false
  public get azureAvailabilitySet() {
    return this.getStringAttribute('azure_availability_set');
  }

  // bgp_local_preference - computed: true, optional: false, required: false
  public get bgpLocalPreference() {
    return this.getStringAttribute('bgp_local_preference');
  }

  // bgp_num_as_path_prepend - computed: true, optional: false, required: false
  public get bgpNumAsPathPrepend() {
    return this.getStringAttribute('bgp_num_as_path_prepend');
  }

  // bgp_peer_labels - computed: true, optional: false, required: false
  public get bgpPeerLabels() {
    return this.getListAttribute('bgp_peer_labels');
  }

  // bot_policy_ref - computed: true, optional: false, required: false
  public get botPolicyRef() {
    return this.getStringAttribute('bot_policy_ref');
  }

  // bulk_sync_kvcache - computed: true, optional: false, required: false
  public get bulkSyncKvcache() {
    return this.getStringAttribute('bulk_sync_kvcache');
  }

  // close_client_conn_on_config_update - computed: true, optional: false, required: false
  public get closeClientConnOnConfigUpdate() {
    return this.getStringAttribute('close_client_conn_on_config_update');
  }

  // cloud_config_cksum - computed: true, optional: false, required: false
  public get cloudConfigCksum() {
    return this.getStringAttribute('cloud_config_cksum');
  }

  // cloud_ref - computed: true, optional: true, required: false
  private _cloudRef?: string; 
  public get cloudRef() {
    return this.getStringAttribute('cloud_ref');
  }
  public set cloudRef(value: string) {
    this._cloudRef = value;
  }
  public resetCloudRef() {
    this._cloudRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudRefInput() {
    return this._cloudRef;
  }

  // cloud_type - computed: true, optional: false, required: false
  public get cloudType() {
    return this.getStringAttribute('cloud_type');
  }

  // configpb_attributes - computed: true, optional: false, required: false
  private _configpbAttributes = new DataAviVirtualserviceConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }

  // connections_rate_limit - computed: true, optional: false, required: false
  private _connectionsRateLimit = new DataAviVirtualserviceConnectionsRateLimitList(this, "connections_rate_limit", true);
  public get connectionsRateLimit() {
    return this._connectionsRateLimit;
  }

  // content_rewrite - computed: true, optional: false, required: false
  private _contentRewrite = new DataAviVirtualserviceContentRewriteList(this, "content_rewrite", true);
  public get contentRewrite() {
    return this._contentRewrite;
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // csrf_policy_ref - computed: true, optional: false, required: false
  public get csrfPolicyRef() {
    return this.getStringAttribute('csrf_policy_ref');
  }

  // delay_fairness - computed: true, optional: false, required: false
  public get delayFairness() {
    return this.getStringAttribute('delay_fairness');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dns_info - computed: true, optional: false, required: false
  private _dnsInfo = new DataAviVirtualserviceDnsInfoList(this, "dns_info", false);
  public get dnsInfo() {
    return this._dnsInfo;
  }

  // dns_policies - computed: true, optional: false, required: false
  private _dnsPolicies = new DataAviVirtualserviceDnsPoliciesList(this, "dns_policies", false);
  public get dnsPolicies() {
    return this._dnsPolicies;
  }

  // east_west_placement - computed: true, optional: false, required: false
  public get eastWestPlacement() {
    return this.getStringAttribute('east_west_placement');
  }

  // enable_autogw - computed: true, optional: false, required: false
  public get enableAutogw() {
    return this.getStringAttribute('enable_autogw');
  }

  // enable_rhi - computed: true, optional: false, required: false
  public get enableRhi() {
    return this.getStringAttribute('enable_rhi');
  }

  // enable_rhi_snat - computed: true, optional: false, required: false
  public get enableRhiSnat() {
    return this.getStringAttribute('enable_rhi_snat');
  }

  // enable_session - computed: true, optional: false, required: false
  public get enableSession() {
    return this.getStringAttribute('enable_session');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getStringAttribute('enabled');
  }

  // error_page_profile_ref - computed: true, optional: false, required: false
  public get errorPageProfileRef() {
    return this.getStringAttribute('error_page_profile_ref');
  }

  // flow_dist - computed: true, optional: false, required: false
  public get flowDist() {
    return this.getStringAttribute('flow_dist');
  }

  // flow_label_type - computed: true, optional: false, required: false
  public get flowLabelType() {
    return this.getStringAttribute('flow_label_type');
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // host_name_xlate - computed: true, optional: false, required: false
  public get hostNameXlate() {
    return this.getStringAttribute('host_name_xlate');
  }

  // http_policies - computed: true, optional: false, required: false
  private _httpPolicies = new DataAviVirtualserviceHttpPoliciesList(this, "http_policies", false);
  public get httpPolicies() {
    return this._httpPolicies;
  }

  // icap_request_profile_refs - computed: true, optional: false, required: false
  public get icapRequestProfileRefs() {
    return this.getListAttribute('icap_request_profile_refs');
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

  // ign_pool_net_reach - computed: true, optional: false, required: false
  public get ignPoolNetReach() {
    return this.getStringAttribute('ign_pool_net_reach');
  }

  // jwt_config - computed: true, optional: false, required: false
  private _jwtConfig = new DataAviVirtualserviceJwtConfigList(this, "jwt_config", true);
  public get jwtConfig() {
    return this._jwtConfig;
  }

  // l4_policies - computed: true, optional: false, required: false
  private _l4Policies = new DataAviVirtualserviceL4PoliciesList(this, "l4_policies", false);
  public get l4Policies() {
    return this._l4Policies;
  }

  // ldap_vs_config - computed: true, optional: false, required: false
  private _ldapVsConfig = new DataAviVirtualserviceLdapVsConfigList(this, "ldap_vs_config", true);
  public get ldapVsConfig() {
    return this._ldapVsConfig;
  }

  // limit_doser - computed: true, optional: false, required: false
  public get limitDoser() {
    return this.getStringAttribute('limit_doser');
  }

  // markers - computed: true, optional: false, required: false
  private _markers = new DataAviVirtualserviceMarkersList(this, "markers", false);
  public get markers() {
    return this._markers;
  }

  // max_cps_per_client - computed: true, optional: false, required: false
  public get maxCpsPerClient() {
    return this.getStringAttribute('max_cps_per_client');
  }

  // microservice_ref - computed: true, optional: false, required: false
  public get microserviceRef() {
    return this.getStringAttribute('microservice_ref');
  }

  // min_pools_up - computed: true, optional: false, required: false
  public get minPoolsUp() {
    return this.getStringAttribute('min_pools_up');
  }

  // name - computed: true, optional: true, required: false
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

  // network_profile_ref - computed: true, optional: false, required: false
  public get networkProfileRef() {
    return this.getStringAttribute('network_profile_ref');
  }

  // network_security_policy_ref - computed: true, optional: false, required: false
  public get networkSecurityPolicyRef() {
    return this.getStringAttribute('network_security_policy_ref');
  }

  // nsx_securitygroup - computed: true, optional: false, required: false
  public get nsxSecuritygroup() {
    return this.getListAttribute('nsx_securitygroup');
  }

  // oauth_vs_config - computed: true, optional: false, required: false
  private _oauthVsConfig = new DataAviVirtualserviceOauthVsConfigList(this, "oauth_vs_config", true);
  public get oauthVsConfig() {
    return this._oauthVsConfig;
  }

  // performance_limits - computed: true, optional: false, required: false
  private _performanceLimits = new DataAviVirtualservicePerformanceLimitsList(this, "performance_limits", true);
  public get performanceLimits() {
    return this._performanceLimits;
  }

  // pool_group_ref - computed: true, optional: false, required: false
  public get poolGroupRef() {
    return this.getStringAttribute('pool_group_ref');
  }

  // pool_ref - computed: true, optional: false, required: false
  public get poolRef() {
    return this.getStringAttribute('pool_ref');
  }

  // remove_listening_port_on_vs_down - computed: true, optional: false, required: false
  public get removeListeningPortOnVsDown() {
    return this.getStringAttribute('remove_listening_port_on_vs_down');
  }

  // requests_rate_limit - computed: true, optional: false, required: false
  private _requestsRateLimit = new DataAviVirtualserviceRequestsRateLimitList(this, "requests_rate_limit", true);
  public get requestsRateLimit() {
    return this._requestsRateLimit;
  }

  // revoke_vip_route - computed: true, optional: false, required: false
  public get revokeVipRoute() {
    return this.getStringAttribute('revoke_vip_route');
  }

  // saml_sp_config - computed: true, optional: false, required: false
  private _samlSpConfig = new DataAviVirtualserviceSamlSpConfigList(this, "saml_sp_config", true);
  public get samlSpConfig() {
    return this._samlSpConfig;
  }

  // scaleout_ecmp - computed: true, optional: false, required: false
  public get scaleoutEcmp() {
    return this.getStringAttribute('scaleout_ecmp');
  }

  // se_group_ref - computed: true, optional: false, required: false
  public get seGroupRef() {
    return this.getStringAttribute('se_group_ref');
  }

  // security_policy_ref - computed: true, optional: false, required: false
  public get securityPolicyRef() {
    return this.getStringAttribute('security_policy_ref');
  }

  // server_network_profile_ref - computed: true, optional: false, required: false
  public get serverNetworkProfileRef() {
    return this.getStringAttribute('server_network_profile_ref');
  }

  // service_metadata - computed: true, optional: false, required: false
  public get serviceMetadata() {
    return this.getStringAttribute('service_metadata');
  }

  // service_pool_select - computed: true, optional: false, required: false
  private _servicePoolSelect = new DataAviVirtualserviceServicePoolSelectList(this, "service_pool_select", false);
  public get servicePoolSelect() {
    return this._servicePoolSelect;
  }

  // services - computed: true, optional: false, required: false
  private _services = new DataAviVirtualserviceServicesList(this, "services", false);
  public get services() {
    return this._services;
  }

  // sideband_profile - computed: true, optional: false, required: false
  private _sidebandProfile = new DataAviVirtualserviceSidebandProfileList(this, "sideband_profile", true);
  public get sidebandProfile() {
    return this._sidebandProfile;
  }

  // snat_ip - computed: true, optional: false, required: false
  private _snatIp = new DataAviVirtualserviceSnatIpList(this, "snat_ip", false);
  public get snatIp() {
    return this._snatIp;
  }

  // snat_ip6_addresses - computed: true, optional: false, required: false
  private _snatIp6Addresses = new DataAviVirtualserviceSnatIp6AddressesList(this, "snat_ip6_addresses", false);
  public get snatIp6Addresses() {
    return this._snatIp6Addresses;
  }

  // sp_pool_refs - computed: true, optional: false, required: false
  public get spPoolRefs() {
    return this.getListAttribute('sp_pool_refs');
  }

  // ssl_key_and_certificate_refs - computed: true, optional: false, required: false
  public get sslKeyAndCertificateRefs() {
    return this.getListAttribute('ssl_key_and_certificate_refs');
  }

  // ssl_profile_ref - computed: true, optional: false, required: false
  public get sslProfileRef() {
    return this.getStringAttribute('ssl_profile_ref');
  }

  // ssl_profile_selectors - computed: true, optional: false, required: false
  private _sslProfileSelectors = new DataAviVirtualserviceSslProfileSelectorsList(this, "ssl_profile_selectors", false);
  public get sslProfileSelectors() {
    return this._sslProfileSelectors;
  }

  // ssl_sess_cache_avg_size - computed: true, optional: false, required: false
  public get sslSessCacheAvgSize() {
    return this.getStringAttribute('ssl_sess_cache_avg_size');
  }

  // sso_policy_ref - computed: true, optional: false, required: false
  public get ssoPolicyRef() {
    return this.getStringAttribute('sso_policy_ref');
  }

  // static_dns_records - computed: true, optional: false, required: false
  private _staticDnsRecords = new DataAviVirtualserviceStaticDnsRecordsList(this, "static_dns_records", false);
  public get staticDnsRecords() {
    return this._staticDnsRecords;
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // test_se_datastore_level_1_ref - computed: true, optional: false, required: false
  public get testSeDatastoreLevel1Ref() {
    return this.getStringAttribute('test_se_datastore_level_1_ref');
  }

  // topology_policies - computed: true, optional: false, required: false
  private _topologyPolicies = new DataAviVirtualserviceTopologyPoliciesList(this, "topology_policies", false);
  public get topologyPolicies() {
    return this._topologyPolicies;
  }

  // traffic_clone_profile_ref - computed: true, optional: false, required: false
  public get trafficCloneProfileRef() {
    return this.getStringAttribute('traffic_clone_profile_ref');
  }

  // traffic_enabled - computed: true, optional: false, required: false
  public get trafficEnabled() {
    return this.getStringAttribute('traffic_enabled');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_bridge_ip_as_vip - computed: true, optional: false, required: false
  public get useBridgeIpAsVip() {
    return this.getStringAttribute('use_bridge_ip_as_vip');
  }

  // use_vip_as_snat - computed: true, optional: false, required: false
  public get useVipAsSnat() {
    return this.getStringAttribute('use_vip_as_snat');
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

  // vh_domain_name - computed: true, optional: false, required: false
  public get vhDomainName() {
    return this.getListAttribute('vh_domain_name');
  }

  // vh_matches - computed: true, optional: false, required: false
  private _vhMatches = new DataAviVirtualserviceVhMatchesList(this, "vh_matches", false);
  public get vhMatches() {
    return this._vhMatches;
  }

  // vh_parent_vs_ref - computed: true, optional: false, required: false
  public get vhParentVsRef() {
    return this.getStringAttribute('vh_parent_vs_ref');
  }

  // vh_type - computed: true, optional: false, required: false
  public get vhType() {
    return this.getStringAttribute('vh_type');
  }

  // vip - computed: true, optional: false, required: false
  private _vip = new DataAviVirtualserviceVipList(this, "vip", false);
  public get vip() {
    return this._vip;
  }

  // vrf_context_ref - computed: true, optional: false, required: false
  public get vrfContextRef() {
    return this.getStringAttribute('vrf_context_ref');
  }

  // vs_datascripts - computed: true, optional: false, required: false
  private _vsDatascripts = new DataAviVirtualserviceVsDatascriptsList(this, "vs_datascripts", false);
  public get vsDatascripts() {
    return this._vsDatascripts;
  }

  // vsvip_cloud_config_cksum - computed: true, optional: false, required: false
  public get vsvipCloudConfigCksum() {
    return this.getStringAttribute('vsvip_cloud_config_cksum');
  }

  // vsvip_ref - computed: true, optional: false, required: false
  public get vsvipRef() {
    return this.getStringAttribute('vsvip_ref');
  }

  // waf_policy_ref - computed: true, optional: false, required: false
  public get wafPolicyRef() {
    return this.getStringAttribute('waf_policy_ref');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getStringAttribute('weight');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_ref: cdktf.stringToTerraform(this._cloudRef),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_ref: {
        value: cdktf.stringToHclTerraform(this._cloudRef),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
