// generated from terraform resource schema

import { VirtualserviceAnalyticsPolicy, 
virtualserviceAnalyticsPolicyToTerraform, 
virtualserviceAnalyticsPolicyToHclTerraform, 
VirtualserviceAnalyticsPolicyList, 
VirtualserviceConfigpbAttributes, 
virtualserviceConfigpbAttributesToTerraform, 
virtualserviceConfigpbAttributesToHclTerraform, 
VirtualserviceConfigpbAttributesList, 
VirtualserviceConnectionsRateLimit, 
virtualserviceConnectionsRateLimitToTerraform, 
virtualserviceConnectionsRateLimitToHclTerraform, 
VirtualserviceConnectionsRateLimitList, 
VirtualserviceContentRewrite, 
virtualserviceContentRewriteToTerraform, 
virtualserviceContentRewriteToHclTerraform, 
VirtualserviceContentRewriteList, 
VirtualserviceDnsInfo, 
virtualserviceDnsInfoToTerraform, 
virtualserviceDnsInfoToHclTerraform, 
VirtualserviceDnsInfoList, 
VirtualserviceDnsPolicies, 
virtualserviceDnsPoliciesToTerraform, 
virtualserviceDnsPoliciesToHclTerraform, 
VirtualserviceDnsPoliciesList, 
VirtualserviceHttpPolicies, 
virtualserviceHttpPoliciesToTerraform, 
virtualserviceHttpPoliciesToHclTerraform, 
VirtualserviceHttpPoliciesList, 
VirtualserviceJwtConfig, 
virtualserviceJwtConfigToTerraform, 
virtualserviceJwtConfigToHclTerraform, 
VirtualserviceJwtConfigList, 
VirtualserviceL4Policies, 
virtualserviceL4PoliciesToTerraform, 
virtualserviceL4PoliciesToHclTerraform, 
VirtualserviceL4PoliciesList, 
VirtualserviceLdapVsConfig, 
virtualserviceLdapVsConfigToTerraform, 
virtualserviceLdapVsConfigToHclTerraform, 
VirtualserviceLdapVsConfigList, 
VirtualserviceMarkers, 
virtualserviceMarkersToTerraform, 
virtualserviceMarkersToHclTerraform, 
VirtualserviceMarkersList, 
VirtualserviceOauthVsConfig, 
virtualserviceOauthVsConfigToTerraform, 
virtualserviceOauthVsConfigToHclTerraform, 
VirtualserviceOauthVsConfigList, 
VirtualservicePerformanceLimits, 
virtualservicePerformanceLimitsToTerraform, 
virtualservicePerformanceLimitsToHclTerraform, 
VirtualservicePerformanceLimitsList, 
VirtualserviceRequestsRateLimit, 
virtualserviceRequestsRateLimitToTerraform, 
virtualserviceRequestsRateLimitToHclTerraform, 
VirtualserviceRequestsRateLimitList, 
VirtualserviceSamlSpConfig, 
virtualserviceSamlSpConfigToTerraform, 
virtualserviceSamlSpConfigToHclTerraform, 
VirtualserviceSamlSpConfigList, 
VirtualserviceServicePoolSelect, 
virtualserviceServicePoolSelectToTerraform, 
virtualserviceServicePoolSelectToHclTerraform, 
VirtualserviceServicePoolSelectList, 
VirtualserviceServices, 
virtualserviceServicesToTerraform, 
virtualserviceServicesToHclTerraform, 
VirtualserviceServicesList, 
VirtualserviceSidebandProfile, 
virtualserviceSidebandProfileToTerraform, 
virtualserviceSidebandProfileToHclTerraform, 
VirtualserviceSidebandProfileList, 
VirtualserviceSnatIp, 
virtualserviceSnatIpToTerraform, 
virtualserviceSnatIpToHclTerraform, 
VirtualserviceSnatIpList, 
VirtualserviceSnatIp6Addresses, 
virtualserviceSnatIp6AddressesToTerraform, 
virtualserviceSnatIp6AddressesToHclTerraform, 
VirtualserviceSnatIp6AddressesList, 
VirtualserviceSslProfileSelectors, 
virtualserviceSslProfileSelectorsToTerraform, 
virtualserviceSslProfileSelectorsToHclTerraform, 
VirtualserviceSslProfileSelectorsList, 
VirtualserviceStaticDnsRecords, 
virtualserviceStaticDnsRecordsToTerraform, 
virtualserviceStaticDnsRecordsToHclTerraform, 
VirtualserviceStaticDnsRecordsList, 
VirtualserviceTopologyPolicies, 
virtualserviceTopologyPoliciesToTerraform, 
virtualserviceTopologyPoliciesToHclTerraform, 
VirtualserviceTopologyPoliciesList, 
VirtualserviceVhMatches, 
virtualserviceVhMatchesToTerraform, 
virtualserviceVhMatchesToHclTerraform, 
VirtualserviceVhMatchesList, 
VirtualserviceVip, 
virtualserviceVipToTerraform, 
virtualserviceVipToHclTerraform, 
VirtualserviceVipList, 
VirtualserviceVsDatascripts, 
virtualserviceVsDatascriptsToTerraform, 
virtualserviceVsDatascriptsToHclTerraform, 
VirtualserviceVsDatascriptsList} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VirtualserviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#active_standby_se_tag Virtualservice#active_standby_se_tag}
  */
  readonly activeStandbySeTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#advertise_down_vs Virtualservice#advertise_down_vs}
  */
  readonly advertiseDownVs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#allow_invalid_client_cert Virtualservice#allow_invalid_client_cert}
  */
  readonly allowInvalidClientCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#analytics_profile_ref Virtualservice#analytics_profile_ref}
  */
  readonly analyticsProfileRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#application_insights_ref Virtualservice#application_insights_ref}
  */
  readonly applicationInsightsRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#application_profile_ref Virtualservice#application_profile_ref}
  */
  readonly applicationProfileRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#azure_availability_set Virtualservice#azure_availability_set}
  */
  readonly azureAvailabilitySet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#bgp_local_preference Virtualservice#bgp_local_preference}
  */
  readonly bgpLocalPreference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#bgp_num_as_path_prepend Virtualservice#bgp_num_as_path_prepend}
  */
  readonly bgpNumAsPathPrepend?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#bgp_peer_labels Virtualservice#bgp_peer_labels}
  */
  readonly bgpPeerLabels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#bot_policy_ref Virtualservice#bot_policy_ref}
  */
  readonly botPolicyRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#bulk_sync_kvcache Virtualservice#bulk_sync_kvcache}
  */
  readonly bulkSyncKvcache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#close_client_conn_on_config_update Virtualservice#close_client_conn_on_config_update}
  */
  readonly closeClientConnOnConfigUpdate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#cloud_config_cksum Virtualservice#cloud_config_cksum}
  */
  readonly cloudConfigCksum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#cloud_ref Virtualservice#cloud_ref}
  */
  readonly cloudRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#cloud_type Virtualservice#cloud_type}
  */
  readonly cloudType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#created_by Virtualservice#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#csrf_policy_ref Virtualservice#csrf_policy_ref}
  */
  readonly csrfPolicyRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#delay_fairness Virtualservice#delay_fairness}
  */
  readonly delayFairness?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#description Virtualservice#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#east_west_placement Virtualservice#east_west_placement}
  */
  readonly eastWestPlacement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#enable_autogw Virtualservice#enable_autogw}
  */
  readonly enableAutogw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#enable_rhi Virtualservice#enable_rhi}
  */
  readonly enableRhi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#enable_rhi_snat Virtualservice#enable_rhi_snat}
  */
  readonly enableRhiSnat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#enable_session Virtualservice#enable_session}
  */
  readonly enableSession?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#enabled Virtualservice#enabled}
  */
  readonly enabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#error_page_profile_ref Virtualservice#error_page_profile_ref}
  */
  readonly errorPageProfileRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#flow_dist Virtualservice#flow_dist}
  */
  readonly flowDist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#flow_label_type Virtualservice#flow_label_type}
  */
  readonly flowLabelType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#fqdn Virtualservice#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#host_name_xlate Virtualservice#host_name_xlate}
  */
  readonly hostNameXlate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#icap_request_profile_refs Virtualservice#icap_request_profile_refs}
  */
  readonly icapRequestProfileRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#id Virtualservice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#ign_pool_net_reach Virtualservice#ign_pool_net_reach}
  */
  readonly ignPoolNetReach?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#limit_doser Virtualservice#limit_doser}
  */
  readonly limitDoser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#max_cps_per_client Virtualservice#max_cps_per_client}
  */
  readonly maxCpsPerClient?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#microservice_ref Virtualservice#microservice_ref}
  */
  readonly microserviceRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#min_pools_up Virtualservice#min_pools_up}
  */
  readonly minPoolsUp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#name Virtualservice#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#network_profile_ref Virtualservice#network_profile_ref}
  */
  readonly networkProfileRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#network_security_policy_ref Virtualservice#network_security_policy_ref}
  */
  readonly networkSecurityPolicyRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#pool_group_ref Virtualservice#pool_group_ref}
  */
  readonly poolGroupRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#pool_ref Virtualservice#pool_ref}
  */
  readonly poolRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#positive_security_ref Virtualservice#positive_security_ref}
  */
  readonly positiveSecurityRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#remove_listening_port_on_vs_down Virtualservice#remove_listening_port_on_vs_down}
  */
  readonly removeListeningPortOnVsDown?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#revoke_vip_route Virtualservice#revoke_vip_route}
  */
  readonly revokeVipRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#scaleout_ecmp Virtualservice#scaleout_ecmp}
  */
  readonly scaleoutEcmp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#se_group_ref Virtualservice#se_group_ref}
  */
  readonly seGroupRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#security_policy_ref Virtualservice#security_policy_ref}
  */
  readonly securityPolicyRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#server_network_profile_ref Virtualservice#server_network_profile_ref}
  */
  readonly serverNetworkProfileRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#service_metadata Virtualservice#service_metadata}
  */
  readonly serviceMetadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#sp_pool_refs Virtualservice#sp_pool_refs}
  */
  readonly spPoolRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#ssl_key_and_certificate_refs Virtualservice#ssl_key_and_certificate_refs}
  */
  readonly sslKeyAndCertificateRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#ssl_profile_ref Virtualservice#ssl_profile_ref}
  */
  readonly sslProfileRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#ssl_sess_cache_avg_size Virtualservice#ssl_sess_cache_avg_size}
  */
  readonly sslSessCacheAvgSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#sso_policy_ref Virtualservice#sso_policy_ref}
  */
  readonly ssoPolicyRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#tenant_ref Virtualservice#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#test_se_datastore_level_1_ref Virtualservice#test_se_datastore_level_1_ref}
  */
  readonly testSeDatastoreLevel1Ref?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#traffic_clone_profile_ref Virtualservice#traffic_clone_profile_ref}
  */
  readonly trafficCloneProfileRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#traffic_enabled Virtualservice#traffic_enabled}
  */
  readonly trafficEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#type Virtualservice#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#use_bridge_ip_as_vip Virtualservice#use_bridge_ip_as_vip}
  */
  readonly useBridgeIpAsVip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#use_vip_as_snat Virtualservice#use_vip_as_snat}
  */
  readonly useVipAsSnat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#uuid Virtualservice#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#vh_domain_name Virtualservice#vh_domain_name}
  */
  readonly vhDomainName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#vh_parent_vs_ref Virtualservice#vh_parent_vs_ref}
  */
  readonly vhParentVsRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#vh_type Virtualservice#vh_type}
  */
  readonly vhType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#vrf_context_ref Virtualservice#vrf_context_ref}
  */
  readonly vrfContextRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#vsvip_cloud_config_cksum Virtualservice#vsvip_cloud_config_cksum}
  */
  readonly vsvipCloudConfigCksum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#vsvip_ref Virtualservice#vsvip_ref}
  */
  readonly vsvipRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#waf_policy_ref Virtualservice#waf_policy_ref}
  */
  readonly wafPolicyRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#weight Virtualservice#weight}
  */
  readonly weight?: string;
  /**
  * analytics_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#analytics_policy Virtualservice#analytics_policy}
  */
  readonly analyticsPolicy?: VirtualserviceAnalyticsPolicy[] | cdktf.IResolvable;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#configpb_attributes Virtualservice#configpb_attributes}
  */
  readonly configpbAttributes?: VirtualserviceConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * connections_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#connections_rate_limit Virtualservice#connections_rate_limit}
  */
  readonly connectionsRateLimit?: VirtualserviceConnectionsRateLimit[] | cdktf.IResolvable;
  /**
  * content_rewrite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#content_rewrite Virtualservice#content_rewrite}
  */
  readonly contentRewrite?: VirtualserviceContentRewrite[] | cdktf.IResolvable;
  /**
  * dns_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#dns_info Virtualservice#dns_info}
  */
  readonly dnsInfo?: VirtualserviceDnsInfo[] | cdktf.IResolvable;
  /**
  * dns_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#dns_policies Virtualservice#dns_policies}
  */
  readonly dnsPolicies?: VirtualserviceDnsPolicies[] | cdktf.IResolvable;
  /**
  * http_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#http_policies Virtualservice#http_policies}
  */
  readonly httpPolicies?: VirtualserviceHttpPolicies[] | cdktf.IResolvable;
  /**
  * jwt_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#jwt_config Virtualservice#jwt_config}
  */
  readonly jwtConfig?: VirtualserviceJwtConfig[] | cdktf.IResolvable;
  /**
  * l4_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#l4_policies Virtualservice#l4_policies}
  */
  readonly l4Policies?: VirtualserviceL4Policies[] | cdktf.IResolvable;
  /**
  * ldap_vs_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#ldap_vs_config Virtualservice#ldap_vs_config}
  */
  readonly ldapVsConfig?: VirtualserviceLdapVsConfig[] | cdktf.IResolvable;
  /**
  * markers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#markers Virtualservice#markers}
  */
  readonly markers?: VirtualserviceMarkers[] | cdktf.IResolvable;
  /**
  * oauth_vs_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#oauth_vs_config Virtualservice#oauth_vs_config}
  */
  readonly oauthVsConfig?: VirtualserviceOauthVsConfig[] | cdktf.IResolvable;
  /**
  * performance_limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#performance_limits Virtualservice#performance_limits}
  */
  readonly performanceLimits?: VirtualservicePerformanceLimits[] | cdktf.IResolvable;
  /**
  * requests_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#requests_rate_limit Virtualservice#requests_rate_limit}
  */
  readonly requestsRateLimit?: VirtualserviceRequestsRateLimit[] | cdktf.IResolvable;
  /**
  * saml_sp_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#saml_sp_config Virtualservice#saml_sp_config}
  */
  readonly samlSpConfig?: VirtualserviceSamlSpConfig[] | cdktf.IResolvable;
  /**
  * service_pool_select block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#service_pool_select Virtualservice#service_pool_select}
  */
  readonly servicePoolSelect?: VirtualserviceServicePoolSelect[] | cdktf.IResolvable;
  /**
  * services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#services Virtualservice#services}
  */
  readonly services?: VirtualserviceServices[] | cdktf.IResolvable;
  /**
  * sideband_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#sideband_profile Virtualservice#sideband_profile}
  */
  readonly sidebandProfile?: VirtualserviceSidebandProfile[] | cdktf.IResolvable;
  /**
  * snat_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#snat_ip Virtualservice#snat_ip}
  */
  readonly snatIp?: VirtualserviceSnatIp[] | cdktf.IResolvable;
  /**
  * snat_ip6_addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#snat_ip6_addresses Virtualservice#snat_ip6_addresses}
  */
  readonly snatIp6Addresses?: VirtualserviceSnatIp6Addresses[] | cdktf.IResolvable;
  /**
  * ssl_profile_selectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#ssl_profile_selectors Virtualservice#ssl_profile_selectors}
  */
  readonly sslProfileSelectors?: VirtualserviceSslProfileSelectors[] | cdktf.IResolvable;
  /**
  * static_dns_records block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#static_dns_records Virtualservice#static_dns_records}
  */
  readonly staticDnsRecords?: VirtualserviceStaticDnsRecords[] | cdktf.IResolvable;
  /**
  * topology_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#topology_policies Virtualservice#topology_policies}
  */
  readonly topologyPolicies?: VirtualserviceTopologyPolicies[] | cdktf.IResolvable;
  /**
  * vh_matches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#vh_matches Virtualservice#vh_matches}
  */
  readonly vhMatches?: VirtualserviceVhMatches[] | cdktf.IResolvable;
  /**
  * vip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#vip Virtualservice#vip}
  */
  readonly vip?: VirtualserviceVip[] | cdktf.IResolvable;
  /**
  * vs_datascripts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#vs_datascripts Virtualservice#vs_datascripts}
  */
  readonly vsDatascripts?: VirtualserviceVsDatascripts[] | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice avi_virtualservice}
*/
export class Virtualservice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_virtualservice";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Virtualservice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Virtualservice to import
  * @param importFromId The id of the existing Virtualservice that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Virtualservice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_virtualservice", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/virtualservice avi_virtualservice} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualserviceConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualserviceConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_virtualservice',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.2.1',
        providerVersionConstraint: '31.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activeStandbySeTag = config.activeStandbySeTag;
    this._advertiseDownVs = config.advertiseDownVs;
    this._allowInvalidClientCert = config.allowInvalidClientCert;
    this._analyticsProfileRef = config.analyticsProfileRef;
    this._applicationInsightsRef = config.applicationInsightsRef;
    this._applicationProfileRef = config.applicationProfileRef;
    this._azureAvailabilitySet = config.azureAvailabilitySet;
    this._bgpLocalPreference = config.bgpLocalPreference;
    this._bgpNumAsPathPrepend = config.bgpNumAsPathPrepend;
    this._bgpPeerLabels = config.bgpPeerLabels;
    this._botPolicyRef = config.botPolicyRef;
    this._bulkSyncKvcache = config.bulkSyncKvcache;
    this._closeClientConnOnConfigUpdate = config.closeClientConnOnConfigUpdate;
    this._cloudConfigCksum = config.cloudConfigCksum;
    this._cloudRef = config.cloudRef;
    this._cloudType = config.cloudType;
    this._createdBy = config.createdBy;
    this._csrfPolicyRef = config.csrfPolicyRef;
    this._delayFairness = config.delayFairness;
    this._description = config.description;
    this._eastWestPlacement = config.eastWestPlacement;
    this._enableAutogw = config.enableAutogw;
    this._enableRhi = config.enableRhi;
    this._enableRhiSnat = config.enableRhiSnat;
    this._enableSession = config.enableSession;
    this._enabled = config.enabled;
    this._errorPageProfileRef = config.errorPageProfileRef;
    this._flowDist = config.flowDist;
    this._flowLabelType = config.flowLabelType;
    this._fqdn = config.fqdn;
    this._hostNameXlate = config.hostNameXlate;
    this._icapRequestProfileRefs = config.icapRequestProfileRefs;
    this._id = config.id;
    this._ignPoolNetReach = config.ignPoolNetReach;
    this._limitDoser = config.limitDoser;
    this._maxCpsPerClient = config.maxCpsPerClient;
    this._microserviceRef = config.microserviceRef;
    this._minPoolsUp = config.minPoolsUp;
    this._name = config.name;
    this._networkProfileRef = config.networkProfileRef;
    this._networkSecurityPolicyRef = config.networkSecurityPolicyRef;
    this._poolGroupRef = config.poolGroupRef;
    this._poolRef = config.poolRef;
    this._positiveSecurityRef = config.positiveSecurityRef;
    this._removeListeningPortOnVsDown = config.removeListeningPortOnVsDown;
    this._revokeVipRoute = config.revokeVipRoute;
    this._scaleoutEcmp = config.scaleoutEcmp;
    this._seGroupRef = config.seGroupRef;
    this._securityPolicyRef = config.securityPolicyRef;
    this._serverNetworkProfileRef = config.serverNetworkProfileRef;
    this._serviceMetadata = config.serviceMetadata;
    this._spPoolRefs = config.spPoolRefs;
    this._sslKeyAndCertificateRefs = config.sslKeyAndCertificateRefs;
    this._sslProfileRef = config.sslProfileRef;
    this._sslSessCacheAvgSize = config.sslSessCacheAvgSize;
    this._ssoPolicyRef = config.ssoPolicyRef;
    this._tenantRef = config.tenantRef;
    this._testSeDatastoreLevel1Ref = config.testSeDatastoreLevel1Ref;
    this._trafficCloneProfileRef = config.trafficCloneProfileRef;
    this._trafficEnabled = config.trafficEnabled;
    this._type = config.type;
    this._useBridgeIpAsVip = config.useBridgeIpAsVip;
    this._useVipAsSnat = config.useVipAsSnat;
    this._uuid = config.uuid;
    this._vhDomainName = config.vhDomainName;
    this._vhParentVsRef = config.vhParentVsRef;
    this._vhType = config.vhType;
    this._vrfContextRef = config.vrfContextRef;
    this._vsvipCloudConfigCksum = config.vsvipCloudConfigCksum;
    this._vsvipRef = config.vsvipRef;
    this._wafPolicyRef = config.wafPolicyRef;
    this._weight = config.weight;
    this._analyticsPolicy.internalValue = config.analyticsPolicy;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._connectionsRateLimit.internalValue = config.connectionsRateLimit;
    this._contentRewrite.internalValue = config.contentRewrite;
    this._dnsInfo.internalValue = config.dnsInfo;
    this._dnsPolicies.internalValue = config.dnsPolicies;
    this._httpPolicies.internalValue = config.httpPolicies;
    this._jwtConfig.internalValue = config.jwtConfig;
    this._l4Policies.internalValue = config.l4Policies;
    this._ldapVsConfig.internalValue = config.ldapVsConfig;
    this._markers.internalValue = config.markers;
    this._oauthVsConfig.internalValue = config.oauthVsConfig;
    this._performanceLimits.internalValue = config.performanceLimits;
    this._requestsRateLimit.internalValue = config.requestsRateLimit;
    this._samlSpConfig.internalValue = config.samlSpConfig;
    this._servicePoolSelect.internalValue = config.servicePoolSelect;
    this._services.internalValue = config.services;
    this._sidebandProfile.internalValue = config.sidebandProfile;
    this._snatIp.internalValue = config.snatIp;
    this._snatIp6Addresses.internalValue = config.snatIp6Addresses;
    this._sslProfileSelectors.internalValue = config.sslProfileSelectors;
    this._staticDnsRecords.internalValue = config.staticDnsRecords;
    this._topologyPolicies.internalValue = config.topologyPolicies;
    this._vhMatches.internalValue = config.vhMatches;
    this._vip.internalValue = config.vip;
    this._vsDatascripts.internalValue = config.vsDatascripts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_standby_se_tag - computed: false, optional: true, required: false
  private _activeStandbySeTag?: string; 
  public get activeStandbySeTag() {
    return this.getStringAttribute('active_standby_se_tag');
  }
  public set activeStandbySeTag(value: string) {
    this._activeStandbySeTag = value;
  }
  public resetActiveStandbySeTag() {
    this._activeStandbySeTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeStandbySeTagInput() {
    return this._activeStandbySeTag;
  }

  // advertise_down_vs - computed: false, optional: true, required: false
  private _advertiseDownVs?: string; 
  public get advertiseDownVs() {
    return this.getStringAttribute('advertise_down_vs');
  }
  public set advertiseDownVs(value: string) {
    this._advertiseDownVs = value;
  }
  public resetAdvertiseDownVs() {
    this._advertiseDownVs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseDownVsInput() {
    return this._advertiseDownVs;
  }

  // allow_invalid_client_cert - computed: false, optional: true, required: false
  private _allowInvalidClientCert?: string; 
  public get allowInvalidClientCert() {
    return this.getStringAttribute('allow_invalid_client_cert');
  }
  public set allowInvalidClientCert(value: string) {
    this._allowInvalidClientCert = value;
  }
  public resetAllowInvalidClientCert() {
    this._allowInvalidClientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInvalidClientCertInput() {
    return this._allowInvalidClientCert;
  }

  // analytics_profile_ref - computed: true, optional: true, required: false
  private _analyticsProfileRef?: string; 
  public get analyticsProfileRef() {
    return this.getStringAttribute('analytics_profile_ref');
  }
  public set analyticsProfileRef(value: string) {
    this._analyticsProfileRef = value;
  }
  public resetAnalyticsProfileRef() {
    this._analyticsProfileRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsProfileRefInput() {
    return this._analyticsProfileRef;
  }

  // application_insights_ref - computed: true, optional: true, required: false
  private _applicationInsightsRef?: string; 
  public get applicationInsightsRef() {
    return this.getStringAttribute('application_insights_ref');
  }
  public set applicationInsightsRef(value: string) {
    this._applicationInsightsRef = value;
  }
  public resetApplicationInsightsRef() {
    this._applicationInsightsRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInsightsRefInput() {
    return this._applicationInsightsRef;
  }

  // application_profile_ref - computed: true, optional: true, required: false
  private _applicationProfileRef?: string; 
  public get applicationProfileRef() {
    return this.getStringAttribute('application_profile_ref');
  }
  public set applicationProfileRef(value: string) {
    this._applicationProfileRef = value;
  }
  public resetApplicationProfileRef() {
    this._applicationProfileRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationProfileRefInput() {
    return this._applicationProfileRef;
  }

  // azure_availability_set - computed: true, optional: true, required: false
  private _azureAvailabilitySet?: string; 
  public get azureAvailabilitySet() {
    return this.getStringAttribute('azure_availability_set');
  }
  public set azureAvailabilitySet(value: string) {
    this._azureAvailabilitySet = value;
  }
  public resetAzureAvailabilitySet() {
    this._azureAvailabilitySet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAvailabilitySetInput() {
    return this._azureAvailabilitySet;
  }

  // bgp_local_preference - computed: true, optional: true, required: false
  private _bgpLocalPreference?: string; 
  public get bgpLocalPreference() {
    return this.getStringAttribute('bgp_local_preference');
  }
  public set bgpLocalPreference(value: string) {
    this._bgpLocalPreference = value;
  }
  public resetBgpLocalPreference() {
    this._bgpLocalPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpLocalPreferenceInput() {
    return this._bgpLocalPreference;
  }

  // bgp_num_as_path_prepend - computed: true, optional: true, required: false
  private _bgpNumAsPathPrepend?: string; 
  public get bgpNumAsPathPrepend() {
    return this.getStringAttribute('bgp_num_as_path_prepend');
  }
  public set bgpNumAsPathPrepend(value: string) {
    this._bgpNumAsPathPrepend = value;
  }
  public resetBgpNumAsPathPrepend() {
    this._bgpNumAsPathPrepend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpNumAsPathPrependInput() {
    return this._bgpNumAsPathPrepend;
  }

  // bgp_peer_labels - computed: false, optional: true, required: false
  private _bgpPeerLabels?: string[]; 
  public get bgpPeerLabels() {
    return this.getListAttribute('bgp_peer_labels');
  }
  public set bgpPeerLabels(value: string[]) {
    this._bgpPeerLabels = value;
  }
  public resetBgpPeerLabels() {
    this._bgpPeerLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpPeerLabelsInput() {
    return this._bgpPeerLabels;
  }

  // bot_policy_ref - computed: true, optional: true, required: false
  private _botPolicyRef?: string; 
  public get botPolicyRef() {
    return this.getStringAttribute('bot_policy_ref');
  }
  public set botPolicyRef(value: string) {
    this._botPolicyRef = value;
  }
  public resetBotPolicyRef() {
    this._botPolicyRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botPolicyRefInput() {
    return this._botPolicyRef;
  }

  // bulk_sync_kvcache - computed: false, optional: true, required: false
  private _bulkSyncKvcache?: string; 
  public get bulkSyncKvcache() {
    return this.getStringAttribute('bulk_sync_kvcache');
  }
  public set bulkSyncKvcache(value: string) {
    this._bulkSyncKvcache = value;
  }
  public resetBulkSyncKvcache() {
    this._bulkSyncKvcache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bulkSyncKvcacheInput() {
    return this._bulkSyncKvcache;
  }

  // close_client_conn_on_config_update - computed: false, optional: true, required: false
  private _closeClientConnOnConfigUpdate?: string; 
  public get closeClientConnOnConfigUpdate() {
    return this.getStringAttribute('close_client_conn_on_config_update');
  }
  public set closeClientConnOnConfigUpdate(value: string) {
    this._closeClientConnOnConfigUpdate = value;
  }
  public resetCloseClientConnOnConfigUpdate() {
    this._closeClientConnOnConfigUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closeClientConnOnConfigUpdateInput() {
    return this._closeClientConnOnConfigUpdate;
  }

  // cloud_config_cksum - computed: true, optional: true, required: false
  private _cloudConfigCksum?: string; 
  public get cloudConfigCksum() {
    return this.getStringAttribute('cloud_config_cksum');
  }
  public set cloudConfigCksum(value: string) {
    this._cloudConfigCksum = value;
  }
  public resetCloudConfigCksum() {
    this._cloudConfigCksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudConfigCksumInput() {
    return this._cloudConfigCksum;
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

  // cloud_type - computed: false, optional: true, required: false
  private _cloudType?: string; 
  public get cloudType() {
    return this.getStringAttribute('cloud_type');
  }
  public set cloudType(value: string) {
    this._cloudType = value;
  }
  public resetCloudType() {
    this._cloudType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudTypeInput() {
    return this._cloudType;
  }

  // created_by - computed: true, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
  }

  // csrf_policy_ref - computed: true, optional: true, required: false
  private _csrfPolicyRef?: string; 
  public get csrfPolicyRef() {
    return this.getStringAttribute('csrf_policy_ref');
  }
  public set csrfPolicyRef(value: string) {
    this._csrfPolicyRef = value;
  }
  public resetCsrfPolicyRef() {
    this._csrfPolicyRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrfPolicyRefInput() {
    return this._csrfPolicyRef;
  }

  // delay_fairness - computed: false, optional: true, required: false
  private _delayFairness?: string; 
  public get delayFairness() {
    return this.getStringAttribute('delay_fairness');
  }
  public set delayFairness(value: string) {
    this._delayFairness = value;
  }
  public resetDelayFairness() {
    this._delayFairness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayFairnessInput() {
    return this._delayFairness;
  }

  // description - computed: true, optional: true, required: false
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

  // east_west_placement - computed: false, optional: true, required: false
  private _eastWestPlacement?: string; 
  public get eastWestPlacement() {
    return this.getStringAttribute('east_west_placement');
  }
  public set eastWestPlacement(value: string) {
    this._eastWestPlacement = value;
  }
  public resetEastWestPlacement() {
    this._eastWestPlacement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eastWestPlacementInput() {
    return this._eastWestPlacement;
  }

  // enable_autogw - computed: false, optional: true, required: false
  private _enableAutogw?: string; 
  public get enableAutogw() {
    return this.getStringAttribute('enable_autogw');
  }
  public set enableAutogw(value: string) {
    this._enableAutogw = value;
  }
  public resetEnableAutogw() {
    this._enableAutogw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutogwInput() {
    return this._enableAutogw;
  }

  // enable_rhi - computed: true, optional: true, required: false
  private _enableRhi?: string; 
  public get enableRhi() {
    return this.getStringAttribute('enable_rhi');
  }
  public set enableRhi(value: string) {
    this._enableRhi = value;
  }
  public resetEnableRhi() {
    this._enableRhi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRhiInput() {
    return this._enableRhi;
  }

  // enable_rhi_snat - computed: true, optional: true, required: false
  private _enableRhiSnat?: string; 
  public get enableRhiSnat() {
    return this.getStringAttribute('enable_rhi_snat');
  }
  public set enableRhiSnat(value: string) {
    this._enableRhiSnat = value;
  }
  public resetEnableRhiSnat() {
    this._enableRhiSnat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRhiSnatInput() {
    return this._enableRhiSnat;
  }

  // enable_session - computed: false, optional: true, required: false
  private _enableSession?: string; 
  public get enableSession() {
    return this.getStringAttribute('enable_session');
  }
  public set enableSession(value: string) {
    this._enableSession = value;
  }
  public resetEnableSession() {
    this._enableSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSessionInput() {
    return this._enableSession;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // error_page_profile_ref - computed: true, optional: true, required: false
  private _errorPageProfileRef?: string; 
  public get errorPageProfileRef() {
    return this.getStringAttribute('error_page_profile_ref');
  }
  public set errorPageProfileRef(value: string) {
    this._errorPageProfileRef = value;
  }
  public resetErrorPageProfileRef() {
    this._errorPageProfileRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorPageProfileRefInput() {
    return this._errorPageProfileRef;
  }

  // flow_dist - computed: false, optional: true, required: false
  private _flowDist?: string; 
  public get flowDist() {
    return this.getStringAttribute('flow_dist');
  }
  public set flowDist(value: string) {
    this._flowDist = value;
  }
  public resetFlowDist() {
    this._flowDist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowDistInput() {
    return this._flowDist;
  }

  // flow_label_type - computed: false, optional: true, required: false
  private _flowLabelType?: string; 
  public get flowLabelType() {
    return this.getStringAttribute('flow_label_type');
  }
  public set flowLabelType(value: string) {
    this._flowLabelType = value;
  }
  public resetFlowLabelType() {
    this._flowLabelType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowLabelTypeInput() {
    return this._flowLabelType;
  }

  // fqdn - computed: true, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // host_name_xlate - computed: true, optional: true, required: false
  private _hostNameXlate?: string; 
  public get hostNameXlate() {
    return this.getStringAttribute('host_name_xlate');
  }
  public set hostNameXlate(value: string) {
    this._hostNameXlate = value;
  }
  public resetHostNameXlate() {
    this._hostNameXlate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameXlateInput() {
    return this._hostNameXlate;
  }

  // icap_request_profile_refs - computed: false, optional: true, required: false
  private _icapRequestProfileRefs?: string[]; 
  public get icapRequestProfileRefs() {
    return this.getListAttribute('icap_request_profile_refs');
  }
  public set icapRequestProfileRefs(value: string[]) {
    this._icapRequestProfileRefs = value;
  }
  public resetIcapRequestProfileRefs() {
    this._icapRequestProfileRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icapRequestProfileRefsInput() {
    return this._icapRequestProfileRefs;
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

  // ign_pool_net_reach - computed: false, optional: true, required: false
  private _ignPoolNetReach?: string; 
  public get ignPoolNetReach() {
    return this.getStringAttribute('ign_pool_net_reach');
  }
  public set ignPoolNetReach(value: string) {
    this._ignPoolNetReach = value;
  }
  public resetIgnPoolNetReach() {
    this._ignPoolNetReach = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignPoolNetReachInput() {
    return this._ignPoolNetReach;
  }

  // limit_doser - computed: false, optional: true, required: false
  private _limitDoser?: string; 
  public get limitDoser() {
    return this.getStringAttribute('limit_doser');
  }
  public set limitDoser(value: string) {
    this._limitDoser = value;
  }
  public resetLimitDoser() {
    this._limitDoser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitDoserInput() {
    return this._limitDoser;
  }

  // max_cps_per_client - computed: false, optional: true, required: false
  private _maxCpsPerClient?: string; 
  public get maxCpsPerClient() {
    return this.getStringAttribute('max_cps_per_client');
  }
  public set maxCpsPerClient(value: string) {
    this._maxCpsPerClient = value;
  }
  public resetMaxCpsPerClient() {
    this._maxCpsPerClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCpsPerClientInput() {
    return this._maxCpsPerClient;
  }

  // microservice_ref - computed: true, optional: true, required: false
  private _microserviceRef?: string; 
  public get microserviceRef() {
    return this.getStringAttribute('microservice_ref');
  }
  public set microserviceRef(value: string) {
    this._microserviceRef = value;
  }
  public resetMicroserviceRef() {
    this._microserviceRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microserviceRefInput() {
    return this._microserviceRef;
  }

  // min_pools_up - computed: true, optional: true, required: false
  private _minPoolsUp?: string; 
  public get minPoolsUp() {
    return this.getStringAttribute('min_pools_up');
  }
  public set minPoolsUp(value: string) {
    this._minPoolsUp = value;
  }
  public resetMinPoolsUp() {
    this._minPoolsUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPoolsUpInput() {
    return this._minPoolsUp;
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

  // network_profile_ref - computed: true, optional: true, required: false
  private _networkProfileRef?: string; 
  public get networkProfileRef() {
    return this.getStringAttribute('network_profile_ref');
  }
  public set networkProfileRef(value: string) {
    this._networkProfileRef = value;
  }
  public resetNetworkProfileRef() {
    this._networkProfileRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProfileRefInput() {
    return this._networkProfileRef;
  }

  // network_security_policy_ref - computed: true, optional: true, required: false
  private _networkSecurityPolicyRef?: string; 
  public get networkSecurityPolicyRef() {
    return this.getStringAttribute('network_security_policy_ref');
  }
  public set networkSecurityPolicyRef(value: string) {
    this._networkSecurityPolicyRef = value;
  }
  public resetNetworkSecurityPolicyRef() {
    this._networkSecurityPolicyRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSecurityPolicyRefInput() {
    return this._networkSecurityPolicyRef;
  }

  // pool_group_ref - computed: true, optional: true, required: false
  private _poolGroupRef?: string; 
  public get poolGroupRef() {
    return this.getStringAttribute('pool_group_ref');
  }
  public set poolGroupRef(value: string) {
    this._poolGroupRef = value;
  }
  public resetPoolGroupRef() {
    this._poolGroupRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolGroupRefInput() {
    return this._poolGroupRef;
  }

  // pool_ref - computed: true, optional: true, required: false
  private _poolRef?: string; 
  public get poolRef() {
    return this.getStringAttribute('pool_ref');
  }
  public set poolRef(value: string) {
    this._poolRef = value;
  }
  public resetPoolRef() {
    this._poolRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolRefInput() {
    return this._poolRef;
  }

  // positive_security_ref - computed: true, optional: true, required: false
  private _positiveSecurityRef?: string; 
  public get positiveSecurityRef() {
    return this.getStringAttribute('positive_security_ref');
  }
  public set positiveSecurityRef(value: string) {
    this._positiveSecurityRef = value;
  }
  public resetPositiveSecurityRef() {
    this._positiveSecurityRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positiveSecurityRefInput() {
    return this._positiveSecurityRef;
  }

  // remove_listening_port_on_vs_down - computed: false, optional: true, required: false
  private _removeListeningPortOnVsDown?: string; 
  public get removeListeningPortOnVsDown() {
    return this.getStringAttribute('remove_listening_port_on_vs_down');
  }
  public set removeListeningPortOnVsDown(value: string) {
    this._removeListeningPortOnVsDown = value;
  }
  public resetRemoveListeningPortOnVsDown() {
    this._removeListeningPortOnVsDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeListeningPortOnVsDownInput() {
    return this._removeListeningPortOnVsDown;
  }

  // revoke_vip_route - computed: false, optional: true, required: false
  private _revokeVipRoute?: string; 
  public get revokeVipRoute() {
    return this.getStringAttribute('revoke_vip_route');
  }
  public set revokeVipRoute(value: string) {
    this._revokeVipRoute = value;
  }
  public resetRevokeVipRoute() {
    this._revokeVipRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokeVipRouteInput() {
    return this._revokeVipRoute;
  }

  // scaleout_ecmp - computed: false, optional: true, required: false
  private _scaleoutEcmp?: string; 
  public get scaleoutEcmp() {
    return this.getStringAttribute('scaleout_ecmp');
  }
  public set scaleoutEcmp(value: string) {
    this._scaleoutEcmp = value;
  }
  public resetScaleoutEcmp() {
    this._scaleoutEcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleoutEcmpInput() {
    return this._scaleoutEcmp;
  }

  // se_group_ref - computed: true, optional: true, required: false
  private _seGroupRef?: string; 
  public get seGroupRef() {
    return this.getStringAttribute('se_group_ref');
  }
  public set seGroupRef(value: string) {
    this._seGroupRef = value;
  }
  public resetSeGroupRef() {
    this._seGroupRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seGroupRefInput() {
    return this._seGroupRef;
  }

  // security_policy_ref - computed: true, optional: true, required: false
  private _securityPolicyRef?: string; 
  public get securityPolicyRef() {
    return this.getStringAttribute('security_policy_ref');
  }
  public set securityPolicyRef(value: string) {
    this._securityPolicyRef = value;
  }
  public resetSecurityPolicyRef() {
    this._securityPolicyRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyRefInput() {
    return this._securityPolicyRef;
  }

  // server_network_profile_ref - computed: true, optional: true, required: false
  private _serverNetworkProfileRef?: string; 
  public get serverNetworkProfileRef() {
    return this.getStringAttribute('server_network_profile_ref');
  }
  public set serverNetworkProfileRef(value: string) {
    this._serverNetworkProfileRef = value;
  }
  public resetServerNetworkProfileRef() {
    this._serverNetworkProfileRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNetworkProfileRefInput() {
    return this._serverNetworkProfileRef;
  }

  // service_metadata - computed: true, optional: true, required: false
  private _serviceMetadata?: string; 
  public get serviceMetadata() {
    return this.getStringAttribute('service_metadata');
  }
  public set serviceMetadata(value: string) {
    this._serviceMetadata = value;
  }
  public resetServiceMetadata() {
    this._serviceMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceMetadataInput() {
    return this._serviceMetadata;
  }

  // sp_pool_refs - computed: false, optional: true, required: false
  private _spPoolRefs?: string[]; 
  public get spPoolRefs() {
    return this.getListAttribute('sp_pool_refs');
  }
  public set spPoolRefs(value: string[]) {
    this._spPoolRefs = value;
  }
  public resetSpPoolRefs() {
    this._spPoolRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spPoolRefsInput() {
    return this._spPoolRefs;
  }

  // ssl_key_and_certificate_refs - computed: false, optional: true, required: false
  private _sslKeyAndCertificateRefs?: string[]; 
  public get sslKeyAndCertificateRefs() {
    return this.getListAttribute('ssl_key_and_certificate_refs');
  }
  public set sslKeyAndCertificateRefs(value: string[]) {
    this._sslKeyAndCertificateRefs = value;
  }
  public resetSslKeyAndCertificateRefs() {
    this._sslKeyAndCertificateRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyAndCertificateRefsInput() {
    return this._sslKeyAndCertificateRefs;
  }

  // ssl_profile_ref - computed: true, optional: true, required: false
  private _sslProfileRef?: string; 
  public get sslProfileRef() {
    return this.getStringAttribute('ssl_profile_ref');
  }
  public set sslProfileRef(value: string) {
    this._sslProfileRef = value;
  }
  public resetSslProfileRef() {
    this._sslProfileRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProfileRefInput() {
    return this._sslProfileRef;
  }

  // ssl_sess_cache_avg_size - computed: false, optional: true, required: false
  private _sslSessCacheAvgSize?: string; 
  public get sslSessCacheAvgSize() {
    return this.getStringAttribute('ssl_sess_cache_avg_size');
  }
  public set sslSessCacheAvgSize(value: string) {
    this._sslSessCacheAvgSize = value;
  }
  public resetSslSessCacheAvgSize() {
    this._sslSessCacheAvgSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSessCacheAvgSizeInput() {
    return this._sslSessCacheAvgSize;
  }

  // sso_policy_ref - computed: true, optional: true, required: false
  private _ssoPolicyRef?: string; 
  public get ssoPolicyRef() {
    return this.getStringAttribute('sso_policy_ref');
  }
  public set ssoPolicyRef(value: string) {
    this._ssoPolicyRef = value;
  }
  public resetSsoPolicyRef() {
    this._ssoPolicyRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoPolicyRefInput() {
    return this._ssoPolicyRef;
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

  // test_se_datastore_level_1_ref - computed: true, optional: true, required: false
  private _testSeDatastoreLevel1Ref?: string; 
  public get testSeDatastoreLevel1Ref() {
    return this.getStringAttribute('test_se_datastore_level_1_ref');
  }
  public set testSeDatastoreLevel1Ref(value: string) {
    this._testSeDatastoreLevel1Ref = value;
  }
  public resetTestSeDatastoreLevel1Ref() {
    this._testSeDatastoreLevel1Ref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testSeDatastoreLevel1RefInput() {
    return this._testSeDatastoreLevel1Ref;
  }

  // traffic_clone_profile_ref - computed: true, optional: true, required: false
  private _trafficCloneProfileRef?: string; 
  public get trafficCloneProfileRef() {
    return this.getStringAttribute('traffic_clone_profile_ref');
  }
  public set trafficCloneProfileRef(value: string) {
    this._trafficCloneProfileRef = value;
  }
  public resetTrafficCloneProfileRef() {
    this._trafficCloneProfileRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficCloneProfileRefInput() {
    return this._trafficCloneProfileRef;
  }

  // traffic_enabled - computed: false, optional: true, required: false
  private _trafficEnabled?: string; 
  public get trafficEnabled() {
    return this.getStringAttribute('traffic_enabled');
  }
  public set trafficEnabled(value: string) {
    this._trafficEnabled = value;
  }
  public resetTrafficEnabled() {
    this._trafficEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficEnabledInput() {
    return this._trafficEnabled;
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

  // use_bridge_ip_as_vip - computed: false, optional: true, required: false
  private _useBridgeIpAsVip?: string; 
  public get useBridgeIpAsVip() {
    return this.getStringAttribute('use_bridge_ip_as_vip');
  }
  public set useBridgeIpAsVip(value: string) {
    this._useBridgeIpAsVip = value;
  }
  public resetUseBridgeIpAsVip() {
    this._useBridgeIpAsVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useBridgeIpAsVipInput() {
    return this._useBridgeIpAsVip;
  }

  // use_vip_as_snat - computed: false, optional: true, required: false
  private _useVipAsSnat?: string; 
  public get useVipAsSnat() {
    return this.getStringAttribute('use_vip_as_snat');
  }
  public set useVipAsSnat(value: string) {
    this._useVipAsSnat = value;
  }
  public resetUseVipAsSnat() {
    this._useVipAsSnat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useVipAsSnatInput() {
    return this._useVipAsSnat;
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

  // vh_domain_name - computed: false, optional: true, required: false
  private _vhDomainName?: string[]; 
  public get vhDomainName() {
    return this.getListAttribute('vh_domain_name');
  }
  public set vhDomainName(value: string[]) {
    this._vhDomainName = value;
  }
  public resetVhDomainName() {
    this._vhDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vhDomainNameInput() {
    return this._vhDomainName;
  }

  // vh_parent_vs_ref - computed: true, optional: true, required: false
  private _vhParentVsRef?: string; 
  public get vhParentVsRef() {
    return this.getStringAttribute('vh_parent_vs_ref');
  }
  public set vhParentVsRef(value: string) {
    this._vhParentVsRef = value;
  }
  public resetVhParentVsRef() {
    this._vhParentVsRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vhParentVsRefInput() {
    return this._vhParentVsRef;
  }

  // vh_type - computed: false, optional: true, required: false
  private _vhType?: string; 
  public get vhType() {
    return this.getStringAttribute('vh_type');
  }
  public set vhType(value: string) {
    this._vhType = value;
  }
  public resetVhType() {
    this._vhType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vhTypeInput() {
    return this._vhType;
  }

  // vrf_context_ref - computed: true, optional: true, required: false
  private _vrfContextRef?: string; 
  public get vrfContextRef() {
    return this.getStringAttribute('vrf_context_ref');
  }
  public set vrfContextRef(value: string) {
    this._vrfContextRef = value;
  }
  public resetVrfContextRef() {
    this._vrfContextRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfContextRefInput() {
    return this._vrfContextRef;
  }

  // vsvip_cloud_config_cksum - computed: true, optional: true, required: false
  private _vsvipCloudConfigCksum?: string; 
  public get vsvipCloudConfigCksum() {
    return this.getStringAttribute('vsvip_cloud_config_cksum');
  }
  public set vsvipCloudConfigCksum(value: string) {
    this._vsvipCloudConfigCksum = value;
  }
  public resetVsvipCloudConfigCksum() {
    this._vsvipCloudConfigCksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsvipCloudConfigCksumInput() {
    return this._vsvipCloudConfigCksum;
  }

  // vsvip_ref - computed: true, optional: true, required: false
  private _vsvipRef?: string; 
  public get vsvipRef() {
    return this.getStringAttribute('vsvip_ref');
  }
  public set vsvipRef(value: string) {
    this._vsvipRef = value;
  }
  public resetVsvipRef() {
    this._vsvipRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsvipRefInput() {
    return this._vsvipRef;
  }

  // waf_policy_ref - computed: true, optional: true, required: false
  private _wafPolicyRef?: string; 
  public get wafPolicyRef() {
    return this.getStringAttribute('waf_policy_ref');
  }
  public set wafPolicyRef(value: string) {
    this._wafPolicyRef = value;
  }
  public resetWafPolicyRef() {
    this._wafPolicyRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafPolicyRefInput() {
    return this._wafPolicyRef;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: string; 
  public get weight() {
    return this.getStringAttribute('weight');
  }
  public set weight(value: string) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // analytics_policy - computed: false, optional: true, required: false
  private _analyticsPolicy = new VirtualserviceAnalyticsPolicyList(this, "analytics_policy", true);
  public get analyticsPolicy() {
    return this._analyticsPolicy;
  }
  public putAnalyticsPolicy(value: VirtualserviceAnalyticsPolicy[] | cdktf.IResolvable) {
    this._analyticsPolicy.internalValue = value;
  }
  public resetAnalyticsPolicy() {
    this._analyticsPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsPolicyInput() {
    return this._analyticsPolicy.internalValue;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new VirtualserviceConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: VirtualserviceConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // connections_rate_limit - computed: false, optional: true, required: false
  private _connectionsRateLimit = new VirtualserviceConnectionsRateLimitList(this, "connections_rate_limit", true);
  public get connectionsRateLimit() {
    return this._connectionsRateLimit;
  }
  public putConnectionsRateLimit(value: VirtualserviceConnectionsRateLimit[] | cdktf.IResolvable) {
    this._connectionsRateLimit.internalValue = value;
  }
  public resetConnectionsRateLimit() {
    this._connectionsRateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionsRateLimitInput() {
    return this._connectionsRateLimit.internalValue;
  }

  // content_rewrite - computed: false, optional: true, required: false
  private _contentRewrite = new VirtualserviceContentRewriteList(this, "content_rewrite", true);
  public get contentRewrite() {
    return this._contentRewrite;
  }
  public putContentRewrite(value: VirtualserviceContentRewrite[] | cdktf.IResolvable) {
    this._contentRewrite.internalValue = value;
  }
  public resetContentRewrite() {
    this._contentRewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentRewriteInput() {
    return this._contentRewrite.internalValue;
  }

  // dns_info - computed: false, optional: true, required: false
  private _dnsInfo = new VirtualserviceDnsInfoList(this, "dns_info", false);
  public get dnsInfo() {
    return this._dnsInfo;
  }
  public putDnsInfo(value: VirtualserviceDnsInfo[] | cdktf.IResolvable) {
    this._dnsInfo.internalValue = value;
  }
  public resetDnsInfo() {
    this._dnsInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInfoInput() {
    return this._dnsInfo.internalValue;
  }

  // dns_policies - computed: false, optional: true, required: false
  private _dnsPolicies = new VirtualserviceDnsPoliciesList(this, "dns_policies", false);
  public get dnsPolicies() {
    return this._dnsPolicies;
  }
  public putDnsPolicies(value: VirtualserviceDnsPolicies[] | cdktf.IResolvable) {
    this._dnsPolicies.internalValue = value;
  }
  public resetDnsPolicies() {
    this._dnsPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPoliciesInput() {
    return this._dnsPolicies.internalValue;
  }

  // http_policies - computed: false, optional: true, required: false
  private _httpPolicies = new VirtualserviceHttpPoliciesList(this, "http_policies", false);
  public get httpPolicies() {
    return this._httpPolicies;
  }
  public putHttpPolicies(value: VirtualserviceHttpPolicies[] | cdktf.IResolvable) {
    this._httpPolicies.internalValue = value;
  }
  public resetHttpPolicies() {
    this._httpPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPoliciesInput() {
    return this._httpPolicies.internalValue;
  }

  // jwt_config - computed: false, optional: true, required: false
  private _jwtConfig = new VirtualserviceJwtConfigList(this, "jwt_config", true);
  public get jwtConfig() {
    return this._jwtConfig;
  }
  public putJwtConfig(value: VirtualserviceJwtConfig[] | cdktf.IResolvable) {
    this._jwtConfig.internalValue = value;
  }
  public resetJwtConfig() {
    this._jwtConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtConfigInput() {
    return this._jwtConfig.internalValue;
  }

  // l4_policies - computed: false, optional: true, required: false
  private _l4Policies = new VirtualserviceL4PoliciesList(this, "l4_policies", false);
  public get l4Policies() {
    return this._l4Policies;
  }
  public putL4Policies(value: VirtualserviceL4Policies[] | cdktf.IResolvable) {
    this._l4Policies.internalValue = value;
  }
  public resetL4Policies() {
    this._l4Policies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4PoliciesInput() {
    return this._l4Policies.internalValue;
  }

  // ldap_vs_config - computed: false, optional: true, required: false
  private _ldapVsConfig = new VirtualserviceLdapVsConfigList(this, "ldap_vs_config", true);
  public get ldapVsConfig() {
    return this._ldapVsConfig;
  }
  public putLdapVsConfig(value: VirtualserviceLdapVsConfig[] | cdktf.IResolvable) {
    this._ldapVsConfig.internalValue = value;
  }
  public resetLdapVsConfig() {
    this._ldapVsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapVsConfigInput() {
    return this._ldapVsConfig.internalValue;
  }

  // markers - computed: false, optional: true, required: false
  private _markers = new VirtualserviceMarkersList(this, "markers", false);
  public get markers() {
    return this._markers;
  }
  public putMarkers(value: VirtualserviceMarkers[] | cdktf.IResolvable) {
    this._markers.internalValue = value;
  }
  public resetMarkers() {
    this._markers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markersInput() {
    return this._markers.internalValue;
  }

  // oauth_vs_config - computed: false, optional: true, required: false
  private _oauthVsConfig = new VirtualserviceOauthVsConfigList(this, "oauth_vs_config", true);
  public get oauthVsConfig() {
    return this._oauthVsConfig;
  }
  public putOauthVsConfig(value: VirtualserviceOauthVsConfig[] | cdktf.IResolvable) {
    this._oauthVsConfig.internalValue = value;
  }
  public resetOauthVsConfig() {
    this._oauthVsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthVsConfigInput() {
    return this._oauthVsConfig.internalValue;
  }

  // performance_limits - computed: false, optional: true, required: false
  private _performanceLimits = new VirtualservicePerformanceLimitsList(this, "performance_limits", true);
  public get performanceLimits() {
    return this._performanceLimits;
  }
  public putPerformanceLimits(value: VirtualservicePerformanceLimits[] | cdktf.IResolvable) {
    this._performanceLimits.internalValue = value;
  }
  public resetPerformanceLimits() {
    this._performanceLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceLimitsInput() {
    return this._performanceLimits.internalValue;
  }

  // requests_rate_limit - computed: false, optional: true, required: false
  private _requestsRateLimit = new VirtualserviceRequestsRateLimitList(this, "requests_rate_limit", true);
  public get requestsRateLimit() {
    return this._requestsRateLimit;
  }
  public putRequestsRateLimit(value: VirtualserviceRequestsRateLimit[] | cdktf.IResolvable) {
    this._requestsRateLimit.internalValue = value;
  }
  public resetRequestsRateLimit() {
    this._requestsRateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsRateLimitInput() {
    return this._requestsRateLimit.internalValue;
  }

  // saml_sp_config - computed: false, optional: true, required: false
  private _samlSpConfig = new VirtualserviceSamlSpConfigList(this, "saml_sp_config", true);
  public get samlSpConfig() {
    return this._samlSpConfig;
  }
  public putSamlSpConfig(value: VirtualserviceSamlSpConfig[] | cdktf.IResolvable) {
    this._samlSpConfig.internalValue = value;
  }
  public resetSamlSpConfig() {
    this._samlSpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlSpConfigInput() {
    return this._samlSpConfig.internalValue;
  }

  // service_pool_select - computed: false, optional: true, required: false
  private _servicePoolSelect = new VirtualserviceServicePoolSelectList(this, "service_pool_select", false);
  public get servicePoolSelect() {
    return this._servicePoolSelect;
  }
  public putServicePoolSelect(value: VirtualserviceServicePoolSelect[] | cdktf.IResolvable) {
    this._servicePoolSelect.internalValue = value;
  }
  public resetServicePoolSelect() {
    this._servicePoolSelect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePoolSelectInput() {
    return this._servicePoolSelect.internalValue;
  }

  // services - computed: false, optional: true, required: false
  private _services = new VirtualserviceServicesList(this, "services", false);
  public get services() {
    return this._services;
  }
  public putServices(value: VirtualserviceServices[] | cdktf.IResolvable) {
    this._services.internalValue = value;
  }
  public resetServices() {
    this._services.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }

  // sideband_profile - computed: false, optional: true, required: false
  private _sidebandProfile = new VirtualserviceSidebandProfileList(this, "sideband_profile", true);
  public get sidebandProfile() {
    return this._sidebandProfile;
  }
  public putSidebandProfile(value: VirtualserviceSidebandProfile[] | cdktf.IResolvable) {
    this._sidebandProfile.internalValue = value;
  }
  public resetSidebandProfile() {
    this._sidebandProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sidebandProfileInput() {
    return this._sidebandProfile.internalValue;
  }

  // snat_ip - computed: false, optional: true, required: false
  private _snatIp = new VirtualserviceSnatIpList(this, "snat_ip", false);
  public get snatIp() {
    return this._snatIp;
  }
  public putSnatIp(value: VirtualserviceSnatIp[] | cdktf.IResolvable) {
    this._snatIp.internalValue = value;
  }
  public resetSnatIp() {
    this._snatIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatIpInput() {
    return this._snatIp.internalValue;
  }

  // snat_ip6_addresses - computed: false, optional: true, required: false
  private _snatIp6Addresses = new VirtualserviceSnatIp6AddressesList(this, "snat_ip6_addresses", false);
  public get snatIp6Addresses() {
    return this._snatIp6Addresses;
  }
  public putSnatIp6Addresses(value: VirtualserviceSnatIp6Addresses[] | cdktf.IResolvable) {
    this._snatIp6Addresses.internalValue = value;
  }
  public resetSnatIp6Addresses() {
    this._snatIp6Addresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatIp6AddressesInput() {
    return this._snatIp6Addresses.internalValue;
  }

  // ssl_profile_selectors - computed: false, optional: true, required: false
  private _sslProfileSelectors = new VirtualserviceSslProfileSelectorsList(this, "ssl_profile_selectors", false);
  public get sslProfileSelectors() {
    return this._sslProfileSelectors;
  }
  public putSslProfileSelectors(value: VirtualserviceSslProfileSelectors[] | cdktf.IResolvable) {
    this._sslProfileSelectors.internalValue = value;
  }
  public resetSslProfileSelectors() {
    this._sslProfileSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProfileSelectorsInput() {
    return this._sslProfileSelectors.internalValue;
  }

  // static_dns_records - computed: false, optional: true, required: false
  private _staticDnsRecords = new VirtualserviceStaticDnsRecordsList(this, "static_dns_records", false);
  public get staticDnsRecords() {
    return this._staticDnsRecords;
  }
  public putStaticDnsRecords(value: VirtualserviceStaticDnsRecords[] | cdktf.IResolvable) {
    this._staticDnsRecords.internalValue = value;
  }
  public resetStaticDnsRecords() {
    this._staticDnsRecords.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticDnsRecordsInput() {
    return this._staticDnsRecords.internalValue;
  }

  // topology_policies - computed: false, optional: true, required: false
  private _topologyPolicies = new VirtualserviceTopologyPoliciesList(this, "topology_policies", false);
  public get topologyPolicies() {
    return this._topologyPolicies;
  }
  public putTopologyPolicies(value: VirtualserviceTopologyPolicies[] | cdktf.IResolvable) {
    this._topologyPolicies.internalValue = value;
  }
  public resetTopologyPolicies() {
    this._topologyPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyPoliciesInput() {
    return this._topologyPolicies.internalValue;
  }

  // vh_matches - computed: false, optional: true, required: false
  private _vhMatches = new VirtualserviceVhMatchesList(this, "vh_matches", false);
  public get vhMatches() {
    return this._vhMatches;
  }
  public putVhMatches(value: VirtualserviceVhMatches[] | cdktf.IResolvable) {
    this._vhMatches.internalValue = value;
  }
  public resetVhMatches() {
    this._vhMatches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vhMatchesInput() {
    return this._vhMatches.internalValue;
  }

  // vip - computed: false, optional: true, required: false
  private _vip = new VirtualserviceVipList(this, "vip", false);
  public get vip() {
    return this._vip;
  }
  public putVip(value: VirtualserviceVip[] | cdktf.IResolvable) {
    this._vip.internalValue = value;
  }
  public resetVip() {
    this._vip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipInput() {
    return this._vip.internalValue;
  }

  // vs_datascripts - computed: false, optional: true, required: false
  private _vsDatascripts = new VirtualserviceVsDatascriptsList(this, "vs_datascripts", false);
  public get vsDatascripts() {
    return this._vsDatascripts;
  }
  public putVsDatascripts(value: VirtualserviceVsDatascripts[] | cdktf.IResolvable) {
    this._vsDatascripts.internalValue = value;
  }
  public resetVsDatascripts() {
    this._vsDatascripts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsDatascriptsInput() {
    return this._vsDatascripts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_standby_se_tag: cdktf.stringToTerraform(this._activeStandbySeTag),
      advertise_down_vs: cdktf.stringToTerraform(this._advertiseDownVs),
      allow_invalid_client_cert: cdktf.stringToTerraform(this._allowInvalidClientCert),
      analytics_profile_ref: cdktf.stringToTerraform(this._analyticsProfileRef),
      application_insights_ref: cdktf.stringToTerraform(this._applicationInsightsRef),
      application_profile_ref: cdktf.stringToTerraform(this._applicationProfileRef),
      azure_availability_set: cdktf.stringToTerraform(this._azureAvailabilitySet),
      bgp_local_preference: cdktf.stringToTerraform(this._bgpLocalPreference),
      bgp_num_as_path_prepend: cdktf.stringToTerraform(this._bgpNumAsPathPrepend),
      bgp_peer_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bgpPeerLabels),
      bot_policy_ref: cdktf.stringToTerraform(this._botPolicyRef),
      bulk_sync_kvcache: cdktf.stringToTerraform(this._bulkSyncKvcache),
      close_client_conn_on_config_update: cdktf.stringToTerraform(this._closeClientConnOnConfigUpdate),
      cloud_config_cksum: cdktf.stringToTerraform(this._cloudConfigCksum),
      cloud_ref: cdktf.stringToTerraform(this._cloudRef),
      cloud_type: cdktf.stringToTerraform(this._cloudType),
      created_by: cdktf.stringToTerraform(this._createdBy),
      csrf_policy_ref: cdktf.stringToTerraform(this._csrfPolicyRef),
      delay_fairness: cdktf.stringToTerraform(this._delayFairness),
      description: cdktf.stringToTerraform(this._description),
      east_west_placement: cdktf.stringToTerraform(this._eastWestPlacement),
      enable_autogw: cdktf.stringToTerraform(this._enableAutogw),
      enable_rhi: cdktf.stringToTerraform(this._enableRhi),
      enable_rhi_snat: cdktf.stringToTerraform(this._enableRhiSnat),
      enable_session: cdktf.stringToTerraform(this._enableSession),
      enabled: cdktf.stringToTerraform(this._enabled),
      error_page_profile_ref: cdktf.stringToTerraform(this._errorPageProfileRef),
      flow_dist: cdktf.stringToTerraform(this._flowDist),
      flow_label_type: cdktf.stringToTerraform(this._flowLabelType),
      fqdn: cdktf.stringToTerraform(this._fqdn),
      host_name_xlate: cdktf.stringToTerraform(this._hostNameXlate),
      icap_request_profile_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._icapRequestProfileRefs),
      id: cdktf.stringToTerraform(this._id),
      ign_pool_net_reach: cdktf.stringToTerraform(this._ignPoolNetReach),
      limit_doser: cdktf.stringToTerraform(this._limitDoser),
      max_cps_per_client: cdktf.stringToTerraform(this._maxCpsPerClient),
      microservice_ref: cdktf.stringToTerraform(this._microserviceRef),
      min_pools_up: cdktf.stringToTerraform(this._minPoolsUp),
      name: cdktf.stringToTerraform(this._name),
      network_profile_ref: cdktf.stringToTerraform(this._networkProfileRef),
      network_security_policy_ref: cdktf.stringToTerraform(this._networkSecurityPolicyRef),
      pool_group_ref: cdktf.stringToTerraform(this._poolGroupRef),
      pool_ref: cdktf.stringToTerraform(this._poolRef),
      positive_security_ref: cdktf.stringToTerraform(this._positiveSecurityRef),
      remove_listening_port_on_vs_down: cdktf.stringToTerraform(this._removeListeningPortOnVsDown),
      revoke_vip_route: cdktf.stringToTerraform(this._revokeVipRoute),
      scaleout_ecmp: cdktf.stringToTerraform(this._scaleoutEcmp),
      se_group_ref: cdktf.stringToTerraform(this._seGroupRef),
      security_policy_ref: cdktf.stringToTerraform(this._securityPolicyRef),
      server_network_profile_ref: cdktf.stringToTerraform(this._serverNetworkProfileRef),
      service_metadata: cdktf.stringToTerraform(this._serviceMetadata),
      sp_pool_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._spPoolRefs),
      ssl_key_and_certificate_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sslKeyAndCertificateRefs),
      ssl_profile_ref: cdktf.stringToTerraform(this._sslProfileRef),
      ssl_sess_cache_avg_size: cdktf.stringToTerraform(this._sslSessCacheAvgSize),
      sso_policy_ref: cdktf.stringToTerraform(this._ssoPolicyRef),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      test_se_datastore_level_1_ref: cdktf.stringToTerraform(this._testSeDatastoreLevel1Ref),
      traffic_clone_profile_ref: cdktf.stringToTerraform(this._trafficCloneProfileRef),
      traffic_enabled: cdktf.stringToTerraform(this._trafficEnabled),
      type: cdktf.stringToTerraform(this._type),
      use_bridge_ip_as_vip: cdktf.stringToTerraform(this._useBridgeIpAsVip),
      use_vip_as_snat: cdktf.stringToTerraform(this._useVipAsSnat),
      uuid: cdktf.stringToTerraform(this._uuid),
      vh_domain_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vhDomainName),
      vh_parent_vs_ref: cdktf.stringToTerraform(this._vhParentVsRef),
      vh_type: cdktf.stringToTerraform(this._vhType),
      vrf_context_ref: cdktf.stringToTerraform(this._vrfContextRef),
      vsvip_cloud_config_cksum: cdktf.stringToTerraform(this._vsvipCloudConfigCksum),
      vsvip_ref: cdktf.stringToTerraform(this._vsvipRef),
      waf_policy_ref: cdktf.stringToTerraform(this._wafPolicyRef),
      weight: cdktf.stringToTerraform(this._weight),
      analytics_policy: cdktf.listMapper(virtualserviceAnalyticsPolicyToTerraform, true)(this._analyticsPolicy.internalValue),
      configpb_attributes: cdktf.listMapper(virtualserviceConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      connections_rate_limit: cdktf.listMapper(virtualserviceConnectionsRateLimitToTerraform, true)(this._connectionsRateLimit.internalValue),
      content_rewrite: cdktf.listMapper(virtualserviceContentRewriteToTerraform, true)(this._contentRewrite.internalValue),
      dns_info: cdktf.listMapper(virtualserviceDnsInfoToTerraform, true)(this._dnsInfo.internalValue),
      dns_policies: cdktf.listMapper(virtualserviceDnsPoliciesToTerraform, true)(this._dnsPolicies.internalValue),
      http_policies: cdktf.listMapper(virtualserviceHttpPoliciesToTerraform, true)(this._httpPolicies.internalValue),
      jwt_config: cdktf.listMapper(virtualserviceJwtConfigToTerraform, true)(this._jwtConfig.internalValue),
      l4_policies: cdktf.listMapper(virtualserviceL4PoliciesToTerraform, true)(this._l4Policies.internalValue),
      ldap_vs_config: cdktf.listMapper(virtualserviceLdapVsConfigToTerraform, true)(this._ldapVsConfig.internalValue),
      markers: cdktf.listMapper(virtualserviceMarkersToTerraform, true)(this._markers.internalValue),
      oauth_vs_config: cdktf.listMapper(virtualserviceOauthVsConfigToTerraform, true)(this._oauthVsConfig.internalValue),
      performance_limits: cdktf.listMapper(virtualservicePerformanceLimitsToTerraform, true)(this._performanceLimits.internalValue),
      requests_rate_limit: cdktf.listMapper(virtualserviceRequestsRateLimitToTerraform, true)(this._requestsRateLimit.internalValue),
      saml_sp_config: cdktf.listMapper(virtualserviceSamlSpConfigToTerraform, true)(this._samlSpConfig.internalValue),
      service_pool_select: cdktf.listMapper(virtualserviceServicePoolSelectToTerraform, true)(this._servicePoolSelect.internalValue),
      services: cdktf.listMapper(virtualserviceServicesToTerraform, true)(this._services.internalValue),
      sideband_profile: cdktf.listMapper(virtualserviceSidebandProfileToTerraform, true)(this._sidebandProfile.internalValue),
      snat_ip: cdktf.listMapper(virtualserviceSnatIpToTerraform, true)(this._snatIp.internalValue),
      snat_ip6_addresses: cdktf.listMapper(virtualserviceSnatIp6AddressesToTerraform, true)(this._snatIp6Addresses.internalValue),
      ssl_profile_selectors: cdktf.listMapper(virtualserviceSslProfileSelectorsToTerraform, true)(this._sslProfileSelectors.internalValue),
      static_dns_records: cdktf.listMapper(virtualserviceStaticDnsRecordsToTerraform, true)(this._staticDnsRecords.internalValue),
      topology_policies: cdktf.listMapper(virtualserviceTopologyPoliciesToTerraform, true)(this._topologyPolicies.internalValue),
      vh_matches: cdktf.listMapper(virtualserviceVhMatchesToTerraform, true)(this._vhMatches.internalValue),
      vip: cdktf.listMapper(virtualserviceVipToTerraform, true)(this._vip.internalValue),
      vs_datascripts: cdktf.listMapper(virtualserviceVsDatascriptsToTerraform, true)(this._vsDatascripts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_standby_se_tag: {
        value: cdktf.stringToHclTerraform(this._activeStandbySeTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advertise_down_vs: {
        value: cdktf.stringToHclTerraform(this._advertiseDownVs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_invalid_client_cert: {
        value: cdktf.stringToHclTerraform(this._allowInvalidClientCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      analytics_profile_ref: {
        value: cdktf.stringToHclTerraform(this._analyticsProfileRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_insights_ref: {
        value: cdktf.stringToHclTerraform(this._applicationInsightsRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_profile_ref: {
        value: cdktf.stringToHclTerraform(this._applicationProfileRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_availability_set: {
        value: cdktf.stringToHclTerraform(this._azureAvailabilitySet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_local_preference: {
        value: cdktf.stringToHclTerraform(this._bgpLocalPreference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_num_as_path_prepend: {
        value: cdktf.stringToHclTerraform(this._bgpNumAsPathPrepend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_peer_labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bgpPeerLabels),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      bot_policy_ref: {
        value: cdktf.stringToHclTerraform(this._botPolicyRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bulk_sync_kvcache: {
        value: cdktf.stringToHclTerraform(this._bulkSyncKvcache),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      close_client_conn_on_config_update: {
        value: cdktf.stringToHclTerraform(this._closeClientConnOnConfigUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_config_cksum: {
        value: cdktf.stringToHclTerraform(this._cloudConfigCksum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_ref: {
        value: cdktf.stringToHclTerraform(this._cloudRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_type: {
        value: cdktf.stringToHclTerraform(this._cloudType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_by: {
        value: cdktf.stringToHclTerraform(this._createdBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csrf_policy_ref: {
        value: cdktf.stringToHclTerraform(this._csrfPolicyRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delay_fairness: {
        value: cdktf.stringToHclTerraform(this._delayFairness),
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
      east_west_placement: {
        value: cdktf.stringToHclTerraform(this._eastWestPlacement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_autogw: {
        value: cdktf.stringToHclTerraform(this._enableAutogw),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_rhi: {
        value: cdktf.stringToHclTerraform(this._enableRhi),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_rhi_snat: {
        value: cdktf.stringToHclTerraform(this._enableRhiSnat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_session: {
        value: cdktf.stringToHclTerraform(this._enableSession),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.stringToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error_page_profile_ref: {
        value: cdktf.stringToHclTerraform(this._errorPageProfileRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flow_dist: {
        value: cdktf.stringToHclTerraform(this._flowDist),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flow_label_type: {
        value: cdktf.stringToHclTerraform(this._flowLabelType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fqdn: {
        value: cdktf.stringToHclTerraform(this._fqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_name_xlate: {
        value: cdktf.stringToHclTerraform(this._hostNameXlate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icap_request_profile_refs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._icapRequestProfileRefs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ign_pool_net_reach: {
        value: cdktf.stringToHclTerraform(this._ignPoolNetReach),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit_doser: {
        value: cdktf.stringToHclTerraform(this._limitDoser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_cps_per_client: {
        value: cdktf.stringToHclTerraform(this._maxCpsPerClient),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      microservice_ref: {
        value: cdktf.stringToHclTerraform(this._microserviceRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_pools_up: {
        value: cdktf.stringToHclTerraform(this._minPoolsUp),
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
      network_profile_ref: {
        value: cdktf.stringToHclTerraform(this._networkProfileRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_security_policy_ref: {
        value: cdktf.stringToHclTerraform(this._networkSecurityPolicyRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool_group_ref: {
        value: cdktf.stringToHclTerraform(this._poolGroupRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool_ref: {
        value: cdktf.stringToHclTerraform(this._poolRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      positive_security_ref: {
        value: cdktf.stringToHclTerraform(this._positiveSecurityRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remove_listening_port_on_vs_down: {
        value: cdktf.stringToHclTerraform(this._removeListeningPortOnVsDown),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      revoke_vip_route: {
        value: cdktf.stringToHclTerraform(this._revokeVipRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scaleout_ecmp: {
        value: cdktf.stringToHclTerraform(this._scaleoutEcmp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_group_ref: {
        value: cdktf.stringToHclTerraform(this._seGroupRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_policy_ref: {
        value: cdktf.stringToHclTerraform(this._securityPolicyRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_network_profile_ref: {
        value: cdktf.stringToHclTerraform(this._serverNetworkProfileRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_metadata: {
        value: cdktf.stringToHclTerraform(this._serviceMetadata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sp_pool_refs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._spPoolRefs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ssl_key_and_certificate_refs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sslKeyAndCertificateRefs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ssl_profile_ref: {
        value: cdktf.stringToHclTerraform(this._sslProfileRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_sess_cache_avg_size: {
        value: cdktf.stringToHclTerraform(this._sslSessCacheAvgSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso_policy_ref: {
        value: cdktf.stringToHclTerraform(this._ssoPolicyRef),
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
      test_se_datastore_level_1_ref: {
        value: cdktf.stringToHclTerraform(this._testSeDatastoreLevel1Ref),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_clone_profile_ref: {
        value: cdktf.stringToHclTerraform(this._trafficCloneProfileRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_enabled: {
        value: cdktf.stringToHclTerraform(this._trafficEnabled),
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
      use_bridge_ip_as_vip: {
        value: cdktf.stringToHclTerraform(this._useBridgeIpAsVip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_vip_as_snat: {
        value: cdktf.stringToHclTerraform(this._useVipAsSnat),
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
      vh_domain_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vhDomainName),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      vh_parent_vs_ref: {
        value: cdktf.stringToHclTerraform(this._vhParentVsRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vh_type: {
        value: cdktf.stringToHclTerraform(this._vhType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_context_ref: {
        value: cdktf.stringToHclTerraform(this._vrfContextRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vsvip_cloud_config_cksum: {
        value: cdktf.stringToHclTerraform(this._vsvipCloudConfigCksum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vsvip_ref: {
        value: cdktf.stringToHclTerraform(this._vsvipRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      waf_policy_ref: {
        value: cdktf.stringToHclTerraform(this._wafPolicyRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weight: {
        value: cdktf.stringToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      analytics_policy: {
        value: cdktf.listMapperHcl(virtualserviceAnalyticsPolicyToHclTerraform, true)(this._analyticsPolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VirtualserviceAnalyticsPolicyList",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(virtualserviceConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VirtualserviceConfigpbAttributesList",
      },
      connections_rate_limit: {
        value: cdktf.listMapperHcl(virtualserviceConnectionsRateLimitToHclTerraform, true)(this._connectionsRateLimit.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VirtualserviceConnectionsRateLimitList",
      },
      content_rewrite: {
        value: cdktf.listMapperHcl(virtualserviceContentRewriteToHclTerraform, true)(this._contentRewrite.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VirtualserviceContentRewriteList",
      },
      dns_info: {
        value: cdktf.listMapperHcl(virtualserviceDnsInfoToHclTerraform, true)(this._dnsInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualserviceDnsInfoList",
      },
      dns_policies: {
        value: cdktf.listMapperHcl(virtualserviceDnsPoliciesToHclTerraform, true)(this._dnsPolicies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualserviceDnsPoliciesList",
      },
      http_policies: {
        value: cdktf.listMapperHcl(virtualserviceHttpPoliciesToHclTerraform, true)(this._httpPolicies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualserviceHttpPoliciesList",
      },
      jwt_config: {
        value: cdktf.listMapperHcl(virtualserviceJwtConfigToHclTerraform, true)(this._jwtConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VirtualserviceJwtConfigList",
      },
      l4_policies: {
        value: cdktf.listMapperHcl(virtualserviceL4PoliciesToHclTerraform, true)(this._l4Policies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualserviceL4PoliciesList",
      },
      ldap_vs_config: {
        value: cdktf.listMapperHcl(virtualserviceLdapVsConfigToHclTerraform, true)(this._ldapVsConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VirtualserviceLdapVsConfigList",
      },
      markers: {
        value: cdktf.listMapperHcl(virtualserviceMarkersToHclTerraform, true)(this._markers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualserviceMarkersList",
      },
      oauth_vs_config: {
        value: cdktf.listMapperHcl(virtualserviceOauthVsConfigToHclTerraform, true)(this._oauthVsConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VirtualserviceOauthVsConfigList",
      },
      performance_limits: {
        value: cdktf.listMapperHcl(virtualservicePerformanceLimitsToHclTerraform, true)(this._performanceLimits.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VirtualservicePerformanceLimitsList",
      },
      requests_rate_limit: {
        value: cdktf.listMapperHcl(virtualserviceRequestsRateLimitToHclTerraform, true)(this._requestsRateLimit.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VirtualserviceRequestsRateLimitList",
      },
      saml_sp_config: {
        value: cdktf.listMapperHcl(virtualserviceSamlSpConfigToHclTerraform, true)(this._samlSpConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VirtualserviceSamlSpConfigList",
      },
      service_pool_select: {
        value: cdktf.listMapperHcl(virtualserviceServicePoolSelectToHclTerraform, true)(this._servicePoolSelect.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualserviceServicePoolSelectList",
      },
      services: {
        value: cdktf.listMapperHcl(virtualserviceServicesToHclTerraform, true)(this._services.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualserviceServicesList",
      },
      sideband_profile: {
        value: cdktf.listMapperHcl(virtualserviceSidebandProfileToHclTerraform, true)(this._sidebandProfile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VirtualserviceSidebandProfileList",
      },
      snat_ip: {
        value: cdktf.listMapperHcl(virtualserviceSnatIpToHclTerraform, true)(this._snatIp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualserviceSnatIpList",
      },
      snat_ip6_addresses: {
        value: cdktf.listMapperHcl(virtualserviceSnatIp6AddressesToHclTerraform, true)(this._snatIp6Addresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualserviceSnatIp6AddressesList",
      },
      ssl_profile_selectors: {
        value: cdktf.listMapperHcl(virtualserviceSslProfileSelectorsToHclTerraform, true)(this._sslProfileSelectors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualserviceSslProfileSelectorsList",
      },
      static_dns_records: {
        value: cdktf.listMapperHcl(virtualserviceStaticDnsRecordsToHclTerraform, true)(this._staticDnsRecords.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualserviceStaticDnsRecordsList",
      },
      topology_policies: {
        value: cdktf.listMapperHcl(virtualserviceTopologyPoliciesToHclTerraform, true)(this._topologyPolicies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualserviceTopologyPoliciesList",
      },
      vh_matches: {
        value: cdktf.listMapperHcl(virtualserviceVhMatchesToHclTerraform, true)(this._vhMatches.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualserviceVhMatchesList",
      },
      vip: {
        value: cdktf.listMapperHcl(virtualserviceVipToHclTerraform, true)(this._vip.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualserviceVipList",
      },
      vs_datascripts: {
        value: cdktf.listMapperHcl(virtualserviceVsDatascriptsToHclTerraform, true)(this._vsDatascripts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualserviceVsDatascriptsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
