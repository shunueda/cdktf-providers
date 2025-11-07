// https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIntersightNiatelemetryNiaFeatureUsageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Returns the total number of AAA Ldap Providers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#aaa_ldap_provider_count DataIntersightNiatelemetryNiaFeatureUsage#aaa_ldap_provider_count}
  */
  readonly aaaLdapProviderCount?: number;
  /**
  * Returns the total number of AAA Radius Providers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#aaa_radius_provider_count DataIntersightNiatelemetryNiaFeatureUsage#aaa_radius_provider_count}
  */
  readonly aaaRadiusProviderCount?: number;
  /**
  * Returns the total number of AAA Tacacs Providers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#aaa_tacacs_provider_count DataIntersightNiatelemetryNiaFeatureUsage#aaa_tacacs_provider_count}
  */
  readonly aaaTacacsProviderCount?: number;
  /**
  * The Account ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#account_moid DataIntersightNiatelemetryNiaFeatureUsage#account_moid}
  */
  readonly accountMoid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#additional_properties DataIntersightNiatelemetryNiaFeatureUsage#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Cluster health for the APIC controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#apic_cluster_health DataIntersightNiatelemetryNiaFeatureUsage#apic_cluster_health}
  */
  readonly apicClusterHealth?: string;
  /**
  * Number of APIC controllers. This determines the value of controllers for the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#apic_count DataIntersightNiatelemetryNiaFeatureUsage#apic_count}
  */
  readonly apicCount?: number;
  /**
  * Returns if telnet is enabled on APIC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#apic_is_telnet_enabled DataIntersightNiatelemetryNiaFeatureUsage#apic_is_telnet_enabled}
  */
  readonly apicIsTelnetEnabled?: boolean | cdktf.IResolvable;
  /**
  * Count of NTP servers configured on APIC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#apic_ntp_count DataIntersightNiatelemetryNiaFeatureUsage#apic_ntp_count}
  */
  readonly apicNtpCount?: number;
  /**
  * Number of SNMP communities configured on APIC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#apic_snmp_community_count DataIntersightNiatelemetryNiaFeatureUsage#apic_snmp_community_count}
  */
  readonly apicSnmpCommunityCount?: number;
  /**
  * Number of logging groups configured on APIC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#apic_sys_log_grp_count DataIntersightNiatelemetryNiaFeatureUsage#apic_sys_log_grp_count}
  */
  readonly apicSysLogGrpCount?: number;
  /**
  * Number of logging sources configured on APIC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#apic_sys_log_src_count DataIntersightNiatelemetryNiaFeatureUsage#apic_sys_log_src_count}
  */
  readonly apicSysLogSrcCount?: number;
  /**
  * ACI APPs feature usage scale.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#app_center_count DataIntersightNiatelemetryNiaFeatureUsage#app_center_count}
  */
  readonly appCenterCount?: number;
  /**
  * AVE feature usage. This determines if ACI virtual edge feature is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#ave DataIntersightNiatelemetryNiaFeatureUsage#ave}
  */
  readonly ave?: string;
  /**
  * Number of BDs. This determines the total number of Broadcast Domains across the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#bd_count DataIntersightNiatelemetryNiaFeatureUsage#bd_count}
  */
  readonly bdCount?: number;
  /**
  * Number of call home smart monitoring policies on the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#callhome_smart_group_count DataIntersightNiatelemetryNiaFeatureUsage#callhome_smart_group_count}
  */
  readonly callhomeSmartGroupCount?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#class_id DataIntersightNiatelemetryNiaFeatureUsage#class_id}
  */
  readonly classId?: string;
  /**
  * Number of Cloudsec SA peers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#cloud_sec_peer_count DataIntersightNiatelemetryNiaFeatureUsage#cloud_sec_peer_count}
  */
  readonly cloudSecPeerCount?: number;
  /**
  * Returns the total number of tenants deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#cloud_tenant_count DataIntersightNiatelemetryNiaFeatureUsage#cloud_tenant_count}
  */
  readonly cloudTenantCount?: number;
  /**
  * Number of compute hypervisors on the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#comp_hv_count DataIntersightNiatelemetryNiaFeatureUsage#comp_hv_count}
  */
  readonly compHvCount?: number;
  /**
  * Number of system backup configure export policies on the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#config_exportp_count DataIntersightNiatelemetryNiaFeatureUsage#config_exportp_count}
  */
  readonly configExportpCount?: number;
  /**
  * Number of system backup configure jobs on the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#config_job_count DataIntersightNiatelemetryNiaFeatureUsage#config_job_count}
  */
  readonly configJobCount?: number;
  /**
  * Consistency checker application usage. This determines if the fabric has Consistency checker application installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#consistency_checker_app DataIntersightNiatelemetryNiaFeatureUsage#consistency_checker_app}
  */
  readonly consistencyCheckerApp?: string;
  /**
  * Number of contracts. This determines the total number of Contracts configured across the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#contract_count DataIntersightNiatelemetryNiaFeatureUsage#contract_count}
  */
  readonly contractCount?: number;
  /**
  * The time when this managed object was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#create_time DataIntersightNiatelemetryNiaFeatureUsage#create_time}
  */
  readonly createTime?: string;
  /**
  * DNS feature usage. This determines the total number of DNS configurations across the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#dns_count DataIntersightNiatelemetryNiaFeatureUsage#dns_count}
  */
  readonly dnsCount?: number;
  /**
  * The DomainGroup ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#domain_group_moid DataIntersightNiatelemetryNiaFeatureUsage#domain_group_moid}
  */
  readonly domainGroupMoid?: string;
  /**
  * Eigrp feature usage. This determines the total number of EIGRP sessions across the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#eigrp_count DataIntersightNiatelemetryNiaFeatureUsage#eigrp_count}
  */
  readonly eigrpCount?: number;
  /**
  * Number of End Point Groups. This determines the total number of End Point Groups across the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#epg_count DataIntersightNiatelemetryNiaFeatureUsage#epg_count}
  */
  readonly epgCount?: number;
  /**
  * Returns the total number of fabric module slots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#fabric_module_count DataIntersightNiatelemetryNiaFeatureUsage#fabric_module_count}
  */
  readonly fabricModuleCount?: number;
  /**
  * Number of Multi-Pods per fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#fabric_setupp_count DataIntersightNiatelemetryNiaFeatureUsage#fabric_setupp_count}
  */
  readonly fabricSetuppCount?: number;
  /**
  * Total number of FCoE N-Port for DOM, VSAn, and VLAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#fcoe_nport_count DataIntersightNiatelemetryNiaFeatureUsage#fcoe_nport_count}
  */
  readonly fcoeNportCount?: number;
  /**
  * Number of FCoE N-Port DOM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#fcoe_nport_dom_count DataIntersightNiatelemetryNiaFeatureUsage#fcoe_nport_dom_count}
  */
  readonly fcoeNportDomCount?: number;
  /**
  * Number of FCoE N-Port VLAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#fcoe_nport_vlan_count DataIntersightNiatelemetryNiaFeatureUsage#fcoe_nport_vlan_count}
  */
  readonly fcoeNportVlanCount?: number;
  /**
  * Number of FCoE N-Port VSAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#fcoe_nport_vsan_count DataIntersightNiatelemetryNiaFeatureUsage#fcoe_nport_vsan_count}
  */
  readonly fcoeNportVsanCount?: number;
  /**
  * Number of Internet Protocol Service Level Agreements Monitoring policy objects for object tracking.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#fv_sla_def_count DataIntersightNiatelemetryNiaFeatureUsage#fv_sla_def_count}
  */
  readonly fvSlaDefCount?: number;
  /**
  * Hsrp feature usage. This determines the total number of HSRP sessions across the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#hsrp_count DataIntersightNiatelemetryNiaFeatureUsage#hsrp_count}
  */
  readonly hsrpCount?: number;
  /**
  * Ibgp feature usage. This determines the total number of BGP sessions across the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#ibgp_count DataIntersightNiatelemetryNiaFeatureUsage#ibgp_count}
  */
  readonly ibgpCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#id DataIntersightNiatelemetryNiaFeatureUsage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IGMP Access List feature usage. This determines the total number of IGMP access lists configured across the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#igmp_access_list_count DataIntersightNiatelemetryNiaFeatureUsage#igmp_access_list_count}
  */
  readonly igmpAccessListCount?: number;
  /**
  * IGMP Snooping feature usage. This determines if this feature is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#igmp_snoop DataIntersightNiatelemetryNiaFeatureUsage#igmp_snoop}
  */
  readonly igmpSnoop?: string;
  /**
  * Number of IP based End Point Groups. This determines the total number of IP End Point Groups across the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#ip_epg_count DataIntersightNiatelemetryNiaFeatureUsage#ip_epg_count}
  */
  readonly ipEpgCount?: number;
  /**
  * BGP route reflector usage on APIC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#is_bgp_route_reflectors_feature_used DataIntersightNiatelemetryNiaFeatureUsage#is_bgp_route_reflectors_feature_used}
  */
  readonly isBgpRouteReflectorsFeatureUsed?: boolean | cdktf.IResolvable;
  /**
  * Brodge domains feature usage on APIC controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#is_bridge_domains_feature_used DataIntersightNiatelemetryNiaFeatureUsage#is_bridge_domains_feature_used}
  */
  readonly isBridgeDomainsFeatureUsed?: boolean | cdktf.IResolvable;
  /**
  * Returns value of isCommonLocalUserName field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#is_common_local_user_name DataIntersightNiatelemetryNiaFeatureUsage#is_common_local_user_name}
  */
  readonly isCommonLocalUserName?: boolean | cdktf.IResolvable;
  /**
  * Contracts feature usage on APIC controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#is_contracts_feature_used DataIntersightNiatelemetryNiaFeatureUsage#is_contracts_feature_used}
  */
  readonly isContractsFeatureUsed?: boolean | cdktf.IResolvable;
  /**
  * EPG feature usage on APIC controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#is_epg_feature_used DataIntersightNiatelemetryNiaFeatureUsage#is_epg_feature_used}
  */
  readonly isEpgFeatureUsed?: boolean | cdktf.IResolvable;
  /**
  * Filters feature usage on APIC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#is_filters_feature_used DataIntersightNiatelemetryNiaFeatureUsage#is_filters_feature_used}
  */
  readonly isFiltersFeatureUsed?: boolean | cdktf.IResolvable;
  /**
  * Returns if HTTP is configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#is_http_configured DataIntersightNiatelemetryNiaFeatureUsage#is_http_configured}
  */
  readonly isHttpConfigured?: boolean | cdktf.IResolvable;
  /**
  * Returns if HTTPS is configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#is_https_configured DataIntersightNiatelemetryNiaFeatureUsage#is_https_configured}
  */
  readonly isHttpsConfigured?: boolean | cdktf.IResolvable;
  /**
  * NTP feature usage on APIC controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#is_ntp_feature_used DataIntersightNiatelemetryNiaFeatureUsage#is_ntp_feature_used}
  */
  readonly isNtpFeatureUsed?: boolean | cdktf.IResolvable;
  /**
  * Ptp feature usage on APIC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#is_ptp_feature_used DataIntersightNiatelemetryNiaFeatureUsage#is_ptp_feature_used}
  */
  readonly isPtpFeatureUsed?: boolean | cdktf.IResolvable;
  /**
  * Synce feature usage on APIC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#is_synce_feature_used DataIntersightNiatelemetryNiaFeatureUsage#is_synce_feature_used}
  */
  readonly isSynceFeatureUsed?: boolean | cdktf.IResolvable;
  /**
  * Status of techsupport collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#is_tech_support_collected DataIntersightNiatelemetryNiaFeatureUsage#is_tech_support_collected}
  */
  readonly isTechSupportCollected?: string;
  /**
  * Tenants feature usage on APIC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#is_tenants_feature_used DataIntersightNiatelemetryNiaFeatureUsage#is_tenants_feature_used}
  */
  readonly isTenantsFeatureUsed?: boolean | cdktf.IResolvable;
  /**
  * VRF feature usage on APIC controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#is_vrfs_feature_used DataIntersightNiatelemetryNiaFeatureUsage#is_vrfs_feature_used}
  */
  readonly isVrfsFeatureUsed?: boolean | cdktf.IResolvable;
  /**
  * Isis feature usage. This determines the total number of ISIS sessions across the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#isis_count DataIntersightNiatelemetryNiaFeatureUsage#isis_count}
  */
  readonly isisCount?: number;
  /**
  * L2Multicast feature usage. This determines if this Layer 2 Multicast feature is being enabled / disabled on the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#l2_multicast DataIntersightNiatelemetryNiaFeatureUsage#l2_multicast}
  */
  readonly l2Multicast?: string;
  /**
  * Returns the Latency ptp mode for the controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#latency_ptp_mode DataIntersightNiatelemetryNiaFeatureUsage#latency_ptp_mode}
  */
  readonly latencyPtpMode?: string;
  /**
  * Number of Leafs. This determines the total number of Leaf switches in the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#leaf_count DataIntersightNiatelemetryNiaFeatureUsage#leaf_count}
  */
  readonly leafCount?: number;
  /**
  * Returns count of local users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#local_username_count DataIntersightNiatelemetryNiaFeatureUsage#local_username_count}
  */
  readonly localUsernameCount?: number;
  /**
  * Returns login block duration value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#login_block_duration DataIntersightNiatelemetryNiaFeatureUsage#login_block_duration}
  */
  readonly loginBlockDuration?: number;
  /**
  * Returns the maximum failed attempts on login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#login_max_failed_attempts DataIntersightNiatelemetryNiaFeatureUsage#login_max_failed_attempts}
  */
  readonly loginMaxFailedAttempts?: number;
  /**
  * Returns the maximum failed attempt windows on login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#login_max_failed_attempts_window DataIntersightNiatelemetryNiaFeatureUsage#login_max_failed_attempts_window}
  */
  readonly loginMaxFailedAttemptsWindow?: number;
  /**
  * Maintenance Mode feature usage. This determines the number of switches that are currently in maintenance mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#maintenance_mode_count DataIntersightNiatelemetryNiaFeatureUsage#maintenance_mode_count}
  */
  readonly maintenanceModeCount?: number;
  /**
  * Management over IPv6 feature usage. This determines the total number of IPv6 configurtaions in the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#management_over_v6_count DataIntersightNiatelemetryNiaFeatureUsage#management_over_v6_count}
  */
  readonly managementOverV6Count?: number;
  /**
  * Number of Microsoft microsegmentation VmmEpPD objects. Ensures that Microsoft was configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#microsoft_useg_vmm_ep_pd_count DataIntersightNiatelemetryNiaFeatureUsage#microsoft_useg_vmm_ep_pd_count}
  */
  readonly microsoftUsegVmmEpPdCount?: number;
  /**
  * The time when this managed object was last modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#mod_time DataIntersightNiatelemetryNiaFeatureUsage#mod_time}
  */
  readonly modTime?: string;
  /**
  * The unique identifier of this Managed Object instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#moid DataIntersightNiatelemetryNiaFeatureUsage#moid}
  */
  readonly moid?: string;
  /**
  * Number of Netflow monitor policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#net_flow_count DataIntersightNiatelemetryNiaFeatureUsage#net_flow_count}
  */
  readonly netFlowCount?: number;
  /**
  * NIR application usage. This determines if the fabric has NIR application installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#nir DataIntersightNiatelemetryNiaFeatureUsage#nir}
  */
  readonly nir?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#object_type DataIntersightNiatelemetryNiaFeatureUsage#object_type}
  */
  readonly objectType?: string;
  /**
  * Open stack feature usage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#open_stack DataIntersightNiatelemetryNiaFeatureUsage#open_stack}
  */
  readonly openStack?: string;
  /**
  * Opflex for Kubernetes feature usage. This determines the total number of VMM sessions of type kubernetes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#opflex_kubernetes_count DataIntersightNiatelemetryNiaFeatureUsage#opflex_kubernetes_count}
  */
  readonly opflexKubernetesCount?: number;
  /**
  * Ospf feature usage. This determines the total number of OSPF sessions across the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#ospf_count DataIntersightNiatelemetryNiaFeatureUsage#ospf_count}
  */
  readonly ospfCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#owners DataIntersightNiatelemetryNiaFeatureUsage#owners}
  */
  readonly owners?: string[];
  /**
  * Returns count of passwords.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#password_history_count DataIntersightNiatelemetryNiaFeatureUsage#password_history_count}
  */
  readonly passwordHistoryCount?: number;
  /**
  * Returns if the password is strong or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#password_strength_check DataIntersightNiatelemetryNiaFeatureUsage#password_strength_check}
  */
  readonly passwordStrengthCheck?: string;
  /**
  * Returns the number of password strength profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#password_strength_profile_count DataIntersightNiatelemetryNiaFeatureUsage#password_strength_profile_count}
  */
  readonly passwordStrengthProfileCount?: number;
  /**
  * POE feature usage. This determines the total number of POE configurations across the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#poe_count DataIntersightNiatelemetryNiaFeatureUsage#poe_count}
  */
  readonly poeCount?: number;
  /**
  * Number of objects with Port Security enabled. Non-Zero value indicates the object as enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#port_security_count DataIntersightNiatelemetryNiaFeatureUsage#port_security_count}
  */
  readonly portSecurityCount?: number;
  /**
  * QinVniTunnel feature usage. This determines if the qinVniTunnel feature is being used on the fabric and the scale of it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#qin_vni_tunnel_count DataIntersightNiatelemetryNiaFeatureUsage#qin_vni_tunnel_count}
  */
  readonly qinVniTunnelCount?: number;
  /**
  * Number of Quality Of Service congestion class.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#qos_cong_count DataIntersightNiatelemetryNiaFeatureUsage#qos_cong_count}
  */
  readonly qosCongCount?: number;
  /**
  * Number of Quality Of Service class.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#qos_pfc_pol_count DataIntersightNiatelemetryNiaFeatureUsage#qos_pfc_pol_count}
  */
  readonly qosPfcPolCount?: number;
  /**
  * Returns the value of count of realms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#realm_count DataIntersightNiatelemetryNiaFeatureUsage#realm_count}
  */
  readonly realmCount?: number;
  /**
  * Type of record DCNM / APIC / SE. This determines the type of platform where inventory was collected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#record_type DataIntersightNiatelemetryNiaFeatureUsage#record_type}
  */
  readonly recordType?: string;
  /**
  * Version of record being pushed. This determines what was the API version for data available from the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#record_version DataIntersightNiatelemetryNiaFeatureUsage#record_version}
  */
  readonly recordVersion?: string;
  /**
  * Number of remote Leafs. This determines the total number of remote leaf switches in the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#remote_leaf_count DataIntersightNiatelemetryNiaFeatureUsage#remote_leaf_count}
  */
  readonly remoteLeafCount?: number;
  /**
  * SCVMM feature usage. This determines the total number of SCVMM configurations in the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#scvmm_count DataIntersightNiatelemetryNiaFeatureUsage#scvmm_count}
  */
  readonly scvmmCount?: number;
  /**
  * SharedL3Out feature usage. This determines the total number of Shared L3 out configured across the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#shared_l3_out_count DataIntersightNiatelemetryNiaFeatureUsage#shared_l3_out_count}
  */
  readonly sharedL3OutCount?: number;
  /**
  * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs.
  * Objects that are made available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally available to all end users or restricted to end users based on their license entitlement. Users can use this property to differentiate the scope (global or a specific license tier) to which a shared MO belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#shared_scope DataIntersightNiatelemetryNiaFeatureUsage#shared_scope}
  */
  readonly sharedScope?: string;
  /**
  * The Site name represents an APIC cluster. Service Engine can onboard multiple APIC clusters / sites. There will be a feature usage object per site in Multi site scenario. In multi-site scenario the site name is available in all the requests being made.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#site_name DataIntersightNiatelemetryNiaFeatureUsage#site_name}
  */
  readonly siteName?: string;
  /**
  * Smart callhome feature usage. This determines if this feature is being enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#smart_call_home DataIntersightNiatelemetryNiaFeatureUsage#smart_call_home}
  */
  readonly smartCallHome?: string;
  /**
  * Returns count of snapshots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#snapshot_count DataIntersightNiatelemetryNiaFeatureUsage#snapshot_count}
  */
  readonly snapshotCount?: number;
  /**
  * SNMP feature usage. This determines if this feature is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#snmp DataIntersightNiatelemetryNiaFeatureUsage#snmp}
  */
  readonly snmp?: string;
  /**
  * Returns count of SNMP Community Access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#snmp_community_access_count DataIntersightNiatelemetryNiaFeatureUsage#snmp_community_access_count}
  */
  readonly snmpCommunityAccessCount?: number;
  /**
  * Number of SNMP monitoring policies on the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#snmp_group_count DataIntersightNiatelemetryNiaFeatureUsage#snmp_group_count}
  */
  readonly snmpGroupCount?: number;
  /**
  * Returns count of SNMP trap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#snmp_trap_count DataIntersightNiatelemetryNiaFeatureUsage#snmp_trap_count}
  */
  readonly snmpTrapCount?: number;
  /**
  * Returns count of SNMP V3 on the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#snmp_v3_count DataIntersightNiatelemetryNiaFeatureUsage#snmp_v3_count}
  */
  readonly snmpV3Count?: number;
  /**
  * Number of Span Sources and Destinations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#span_count DataIntersightNiatelemetryNiaFeatureUsage#span_count}
  */
  readonly spanCount?: number;
  /**
  * Number of Span Destinations with valid state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#span_dst_count DataIntersightNiatelemetryNiaFeatureUsage#span_dst_count}
  */
  readonly spanDstCount?: number;
  /**
  * Number of Span Sources with valid state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#span_src_count DataIntersightNiatelemetryNiaFeatureUsage#span_src_count}
  */
  readonly spanSrcCount?: number;
  /**
  * Number of Spines. This determines the total number of spine switches in the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#spine_count DataIntersightNiatelemetryNiaFeatureUsage#spine_count}
  */
  readonly spineCount?: number;
  /**
  * Ssh over IPv6 feature usage. This determines the total number of IPv6 configurtaions in the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#ssh_over_v6_count DataIntersightNiatelemetryNiaFeatureUsage#ssh_over_v6_count}
  */
  readonly sshOverV6Count?: number;
  /**
  * Returns count of ssh V2 on the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#ssh_v2_count DataIntersightNiatelemetryNiaFeatureUsage#ssh_v2_count}
  */
  readonly sshV2Count?: number;
  /**
  * Returns the total number of supervisor module slots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#supervisor_module_count DataIntersightNiatelemetryNiaFeatureUsage#supervisor_module_count}
  */
  readonly supervisorModuleCount?: number;
  /**
  * Number of syslog monitoring policies on the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#syslog_group_count DataIntersightNiatelemetryNiaFeatureUsage#syslog_group_count}
  */
  readonly syslogGroupCount?: number;
  /**
  * Syslog over IPv6 feature usage. This determines the total number of IPv6 configurtaions in the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#syslog_over_v6_count DataIntersightNiatelemetryNiaFeatureUsage#syslog_over_v6_count}
  */
  readonly syslogOverV6Count?: number;
  /**
  * Returns the total number of system controller slots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#system_controller_count DataIntersightNiatelemetryNiaFeatureUsage#system_controller_count}
  */
  readonly systemControllerCount?: number;
  /**
  * Number of tacacs monitoring policies on the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#tacacs_group_count DataIntersightNiatelemetryNiaFeatureUsage#tacacs_group_count}
  */
  readonly tacacsGroupCount?: number;
  /**
  * Number of tenants. This determines the total number of tenants configured across the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#tenant_count DataIntersightNiatelemetryNiaFeatureUsage#tenant_count}
  */
  readonly tenantCount?: number;
  /**
  * Number of tier 2 Leafs. This determines the total number of tier 2 Leaf switches in the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#tier_two_leaf_count DataIntersightNiatelemetryNiaFeatureUsage#tier_two_leaf_count}
  */
  readonly tierTwoLeafCount?: number;
  /**
  * Returns the total number of critical faults.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#total_critical_faults DataIntersightNiatelemetryNiaFeatureUsage#total_critical_faults}
  */
  readonly totalCriticalFaults?: number;
  /**
  * TWAMP feature usage. This determines if this feature is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#twamp DataIntersightNiatelemetryNiaFeatureUsage#twamp}
  */
  readonly twamp?: string;
  /**
  * VMM uSegmentation feature usage. This determines if microsegmentation feature is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#useg DataIntersightNiatelemetryNiaFeatureUsage#useg}
  */
  readonly useg?: string;
  /**
  * Number of objects with VmWare vCenter 6.5 support. Checks the controller revision value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#vm_ware_vds_count DataIntersightNiatelemetryNiaFeatureUsage#vm_ware_vds_count}
  */
  readonly vmWareVdsCount?: number;
  /**
  * Number of Virtual Machine Monitor controller policy objects for VMware vCenter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#vmm_ctrlrp_count DataIntersightNiatelemetryNiaFeatureUsage#vmm_ctrlrp_count}
  */
  readonly vmmCtrlrpCount?: number;
  /**
  * Number of Virtual Machine Monitor domain policy model objects for VMware vCenter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#vmm_domp_count DataIntersightNiatelemetryNiaFeatureUsage#vmm_domp_count}
  */
  readonly vmmDompCount?: number;
  /**
  * Microsegmentation Distributed Virtual Switch feature usage. Gets the number of objects associated to VMware vCenter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#vmm_ep_pd_count DataIntersightNiatelemetryNiaFeatureUsage#vmm_ep_pd_count}
  */
  readonly vmmEpPdCount?: number;
  /**
  * Number of objects with L4-L7 Device Package Import enabled. Checks for the vendor and the model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#vnsm_dev_count DataIntersightNiatelemetryNiaFeatureUsage#vnsm_dev_count}
  */
  readonly vnsmDevCount?: number;
  /**
  * Virtual pod feature usage. This determines the total number of virtual POD configurations in the fabrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#vpod_count DataIntersightNiatelemetryNiaFeatureUsage#vpod_count}
  */
  readonly vpodCount?: number;
  /**
  * Timeout for web token in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#webtoken_timeout_seconds DataIntersightNiatelemetryNiaFeatureUsage#webtoken_timeout_seconds}
  */
  readonly webtokenTimeoutSeconds?: number;
  /**
  * ancestors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#ancestors DataIntersightNiatelemetryNiaFeatureUsage#ancestors}
  */
  readonly ancestors?: DataIntersightNiatelemetryNiaFeatureUsageAncestors[] | cdktf.IResolvable;
  /**
  * parent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#parent DataIntersightNiatelemetryNiaFeatureUsage#parent}
  */
  readonly parent?: DataIntersightNiatelemetryNiaFeatureUsageParent;
  /**
  * permission_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#permission_resources DataIntersightNiatelemetryNiaFeatureUsage#permission_resources}
  */
  readonly permissionResources?: DataIntersightNiatelemetryNiaFeatureUsagePermissionResources[] | cdktf.IResolvable;
  /**
  * registered_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#registered_device DataIntersightNiatelemetryNiaFeatureUsage#registered_device}
  */
  readonly registeredDevice?: DataIntersightNiatelemetryNiaFeatureUsageRegisteredDevice;
  /**
  * smart_license block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#smart_license DataIntersightNiatelemetryNiaFeatureUsage#smart_license}
  */
  readonly smartLicense?: DataIntersightNiatelemetryNiaFeatureUsageSmartLicense;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#tags DataIntersightNiatelemetryNiaFeatureUsage#tags}
  */
  readonly tags?: DataIntersightNiatelemetryNiaFeatureUsageTags[] | cdktf.IResolvable;
  /**
  * version_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#version_context DataIntersightNiatelemetryNiaFeatureUsage#version_context}
  */
  readonly versionContext?: DataIntersightNiatelemetryNiaFeatureUsageVersionContext;
}
export interface DataIntersightNiatelemetryNiaFeatureUsageResultsAncestors {
}

export function dataIntersightNiatelemetryNiaFeatureUsageResultsAncestorsToTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsageResultsAncestors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaFeatureUsageResultsAncestorsToHclTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsageResultsAncestors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaFeatureUsageResultsAncestorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightNiatelemetryNiaFeatureUsageResultsAncestors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaFeatureUsageResultsAncestors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightNiatelemetryNiaFeatureUsageResultsAncestorsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaFeatureUsageResultsAncestorsOutputReference {
    return new DataIntersightNiatelemetryNiaFeatureUsageResultsAncestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaFeatureUsageResultsParent {
}

export function dataIntersightNiatelemetryNiaFeatureUsageResultsParentToTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsageResultsParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaFeatureUsageResultsParentToHclTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsageResultsParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaFeatureUsageResultsParentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightNiatelemetryNiaFeatureUsageResultsParent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaFeatureUsageResultsParent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightNiatelemetryNiaFeatureUsageResultsParentList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaFeatureUsageResultsParentOutputReference {
    return new DataIntersightNiatelemetryNiaFeatureUsageResultsParentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaFeatureUsageResultsPermissionResources {
}

export function dataIntersightNiatelemetryNiaFeatureUsageResultsPermissionResourcesToTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsageResultsPermissionResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaFeatureUsageResultsPermissionResourcesToHclTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsageResultsPermissionResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaFeatureUsageResultsPermissionResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightNiatelemetryNiaFeatureUsageResultsPermissionResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaFeatureUsageResultsPermissionResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightNiatelemetryNiaFeatureUsageResultsPermissionResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaFeatureUsageResultsPermissionResourcesOutputReference {
    return new DataIntersightNiatelemetryNiaFeatureUsageResultsPermissionResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaFeatureUsageResultsRegisteredDevice {
}

export function dataIntersightNiatelemetryNiaFeatureUsageResultsRegisteredDeviceToTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsageResultsRegisteredDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaFeatureUsageResultsRegisteredDeviceToHclTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsageResultsRegisteredDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaFeatureUsageResultsRegisteredDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightNiatelemetryNiaFeatureUsageResultsRegisteredDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaFeatureUsageResultsRegisteredDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightNiatelemetryNiaFeatureUsageResultsRegisteredDeviceList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaFeatureUsageResultsRegisteredDeviceOutputReference {
    return new DataIntersightNiatelemetryNiaFeatureUsageResultsRegisteredDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaFeatureUsageResultsSmartLicense {
}

export function dataIntersightNiatelemetryNiaFeatureUsageResultsSmartLicenseToTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsageResultsSmartLicense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaFeatureUsageResultsSmartLicenseToHclTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsageResultsSmartLicense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaFeatureUsageResultsSmartLicenseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightNiatelemetryNiaFeatureUsageResultsSmartLicense | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaFeatureUsageResultsSmartLicense | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_mode - computed: true, optional: false, required: false
  public get activeMode() {
    return this.getStringAttribute('active_mode');
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // auth_status - computed: true, optional: false, required: false
  public get authStatus() {
    return this.getStringAttribute('auth_status');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // license_udi - computed: true, optional: false, required: false
  public get licenseUdi() {
    return this.getStringAttribute('license_udi');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // smart_account - computed: true, optional: false, required: false
  public get smartAccount() {
    return this.getStringAttribute('smart_account');
  }
}

export class DataIntersightNiatelemetryNiaFeatureUsageResultsSmartLicenseList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaFeatureUsageResultsSmartLicenseOutputReference {
    return new DataIntersightNiatelemetryNiaFeatureUsageResultsSmartLicenseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaFeatureUsageResultsTagsAncestorDefinitions {
}

export function dataIntersightNiatelemetryNiaFeatureUsageResultsTagsAncestorDefinitionsToTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsageResultsTagsAncestorDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaFeatureUsageResultsTagsAncestorDefinitionsToHclTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsageResultsTagsAncestorDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaFeatureUsageResultsTagsAncestorDefinitionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightNiatelemetryNiaFeatureUsageResultsTagsAncestorDefinitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaFeatureUsageResultsTagsAncestorDefinitions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightNiatelemetryNiaFeatureUsageResultsTagsAncestorDefinitionsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaFeatureUsageResultsTagsAncestorDefinitionsOutputReference {
    return new DataIntersightNiatelemetryNiaFeatureUsageResultsTagsAncestorDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaFeatureUsageResultsTagsDefinition {
}

export function dataIntersightNiatelemetryNiaFeatureUsageResultsTagsDefinitionToTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsageResultsTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaFeatureUsageResultsTagsDefinitionToHclTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsageResultsTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaFeatureUsageResultsTagsDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightNiatelemetryNiaFeatureUsageResultsTagsDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaFeatureUsageResultsTagsDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightNiatelemetryNiaFeatureUsageResultsTagsDefinitionList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaFeatureUsageResultsTagsDefinitionOutputReference {
    return new DataIntersightNiatelemetryNiaFeatureUsageResultsTagsDefinitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaFeatureUsageResultsTags {
}

export function dataIntersightNiatelemetryNiaFeatureUsageResultsTagsToTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsageResultsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaFeatureUsageResultsTagsToHclTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsageResultsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaFeatureUsageResultsTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightNiatelemetryNiaFeatureUsageResultsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaFeatureUsageResultsTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // ancestor_definitions - computed: true, optional: false, required: false
  private _ancestorDefinitions = new DataIntersightNiatelemetryNiaFeatureUsageResultsTagsAncestorDefinitionsList(this, "ancestor_definitions", false);
  public get ancestorDefinitions() {
    return this._ancestorDefinitions;
  }

  // definition - computed: true, optional: false, required: false
  private _definition = new DataIntersightNiatelemetryNiaFeatureUsageResultsTagsDefinitionList(this, "definition", false);
  public get definition() {
    return this._definition;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // propagated - computed: true, optional: false, required: false
  public get propagated() {
    return this.getBooleanAttribute('propagated');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataIntersightNiatelemetryNiaFeatureUsageResultsTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaFeatureUsageResultsTagsOutputReference {
    return new DataIntersightNiatelemetryNiaFeatureUsageResultsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaFeatureUsageResultsVersionContextInterestedMos {
}

export function dataIntersightNiatelemetryNiaFeatureUsageResultsVersionContextInterestedMosToTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsageResultsVersionContextInterestedMos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaFeatureUsageResultsVersionContextInterestedMosToHclTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsageResultsVersionContextInterestedMos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaFeatureUsageResultsVersionContextInterestedMosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightNiatelemetryNiaFeatureUsageResultsVersionContextInterestedMos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaFeatureUsageResultsVersionContextInterestedMos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightNiatelemetryNiaFeatureUsageResultsVersionContextInterestedMosList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaFeatureUsageResultsVersionContextInterestedMosOutputReference {
    return new DataIntersightNiatelemetryNiaFeatureUsageResultsVersionContextInterestedMosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaFeatureUsageResultsVersionContextRefMo {
}

export function dataIntersightNiatelemetryNiaFeatureUsageResultsVersionContextRefMoToTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsageResultsVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaFeatureUsageResultsVersionContextRefMoToHclTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsageResultsVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaFeatureUsageResultsVersionContextRefMoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightNiatelemetryNiaFeatureUsageResultsVersionContextRefMo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaFeatureUsageResultsVersionContextRefMo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightNiatelemetryNiaFeatureUsageResultsVersionContextRefMoList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaFeatureUsageResultsVersionContextRefMoOutputReference {
    return new DataIntersightNiatelemetryNiaFeatureUsageResultsVersionContextRefMoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaFeatureUsageResultsVersionContext {
}

export function dataIntersightNiatelemetryNiaFeatureUsageResultsVersionContextToTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsageResultsVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaFeatureUsageResultsVersionContextToHclTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsageResultsVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaFeatureUsageResultsVersionContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightNiatelemetryNiaFeatureUsageResultsVersionContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaFeatureUsageResultsVersionContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // interested_mos - computed: true, optional: false, required: false
  private _interestedMos = new DataIntersightNiatelemetryNiaFeatureUsageResultsVersionContextInterestedMosList(this, "interested_mos", false);
  public get interestedMos() {
    return this._interestedMos;
  }

  // marked_for_deletion - computed: true, optional: false, required: false
  public get markedForDeletion() {
    return this.getBooleanAttribute('marked_for_deletion');
  }

  // nr_version - computed: true, optional: false, required: false
  public get nrVersion() {
    return this.getStringAttribute('nr_version');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // ref_mo - computed: true, optional: false, required: false
  private _refMo = new DataIntersightNiatelemetryNiaFeatureUsageResultsVersionContextRefMoList(this, "ref_mo", false);
  public get refMo() {
    return this._refMo;
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // version_type - computed: true, optional: false, required: false
  public get versionType() {
    return this.getStringAttribute('version_type');
  }
}

export class DataIntersightNiatelemetryNiaFeatureUsageResultsVersionContextList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaFeatureUsageResultsVersionContextOutputReference {
    return new DataIntersightNiatelemetryNiaFeatureUsageResultsVersionContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaFeatureUsageResults {
}

export function dataIntersightNiatelemetryNiaFeatureUsageResultsToTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsageResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaFeatureUsageResultsToHclTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsageResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaFeatureUsageResultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightNiatelemetryNiaFeatureUsageResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaFeatureUsageResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aaa_ldap_provider_count - computed: true, optional: false, required: false
  public get aaaLdapProviderCount() {
    return this.getNumberAttribute('aaa_ldap_provider_count');
  }

  // aaa_radius_provider_count - computed: true, optional: false, required: false
  public get aaaRadiusProviderCount() {
    return this.getNumberAttribute('aaa_radius_provider_count');
  }

  // aaa_tacacs_provider_count - computed: true, optional: false, required: false
  public get aaaTacacsProviderCount() {
    return this.getNumberAttribute('aaa_tacacs_provider_count');
  }

  // account_moid - computed: true, optional: false, required: false
  public get accountMoid() {
    return this.getStringAttribute('account_moid');
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // ancestors - computed: true, optional: false, required: false
  private _ancestors = new DataIntersightNiatelemetryNiaFeatureUsageResultsAncestorsList(this, "ancestors", false);
  public get ancestors() {
    return this._ancestors;
  }

  // apic_cluster_health - computed: true, optional: false, required: false
  public get apicClusterHealth() {
    return this.getStringAttribute('apic_cluster_health');
  }

  // apic_count - computed: true, optional: false, required: false
  public get apicCount() {
    return this.getNumberAttribute('apic_count');
  }

  // apic_is_telnet_enabled - computed: true, optional: false, required: false
  public get apicIsTelnetEnabled() {
    return this.getBooleanAttribute('apic_is_telnet_enabled');
  }

  // apic_ntp_count - computed: true, optional: false, required: false
  public get apicNtpCount() {
    return this.getNumberAttribute('apic_ntp_count');
  }

  // apic_snmp_community_count - computed: true, optional: false, required: false
  public get apicSnmpCommunityCount() {
    return this.getNumberAttribute('apic_snmp_community_count');
  }

  // apic_sys_log_grp_count - computed: true, optional: false, required: false
  public get apicSysLogGrpCount() {
    return this.getNumberAttribute('apic_sys_log_grp_count');
  }

  // apic_sys_log_src_count - computed: true, optional: false, required: false
  public get apicSysLogSrcCount() {
    return this.getNumberAttribute('apic_sys_log_src_count');
  }

  // app_center_count - computed: true, optional: false, required: false
  public get appCenterCount() {
    return this.getNumberAttribute('app_center_count');
  }

  // ave - computed: true, optional: false, required: false
  public get ave() {
    return this.getStringAttribute('ave');
  }

  // bd_count - computed: true, optional: false, required: false
  public get bdCount() {
    return this.getNumberAttribute('bd_count');
  }

  // callhome_smart_group_count - computed: true, optional: false, required: false
  public get callhomeSmartGroupCount() {
    return this.getNumberAttribute('callhome_smart_group_count');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // cloud_sec_peer_count - computed: true, optional: false, required: false
  public get cloudSecPeerCount() {
    return this.getNumberAttribute('cloud_sec_peer_count');
  }

  // cloud_tenant_count - computed: true, optional: false, required: false
  public get cloudTenantCount() {
    return this.getNumberAttribute('cloud_tenant_count');
  }

  // comp_hv_count - computed: true, optional: false, required: false
  public get compHvCount() {
    return this.getNumberAttribute('comp_hv_count');
  }

  // config_exportp_count - computed: true, optional: false, required: false
  public get configExportpCount() {
    return this.getNumberAttribute('config_exportp_count');
  }

  // config_job_count - computed: true, optional: false, required: false
  public get configJobCount() {
    return this.getNumberAttribute('config_job_count');
  }

  // consistency_checker_app - computed: true, optional: false, required: false
  public get consistencyCheckerApp() {
    return this.getStringAttribute('consistency_checker_app');
  }

  // contract_count - computed: true, optional: false, required: false
  public get contractCount() {
    return this.getNumberAttribute('contract_count');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // dns_count - computed: true, optional: false, required: false
  public get dnsCount() {
    return this.getNumberAttribute('dns_count');
  }

  // domain_group_moid - computed: true, optional: false, required: false
  public get domainGroupMoid() {
    return this.getStringAttribute('domain_group_moid');
  }

  // eigrp_count - computed: true, optional: false, required: false
  public get eigrpCount() {
    return this.getNumberAttribute('eigrp_count');
  }

  // epg_count - computed: true, optional: false, required: false
  public get epgCount() {
    return this.getNumberAttribute('epg_count');
  }

  // fabric_module_count - computed: true, optional: false, required: false
  public get fabricModuleCount() {
    return this.getNumberAttribute('fabric_module_count');
  }

  // fabric_setupp_count - computed: true, optional: false, required: false
  public get fabricSetuppCount() {
    return this.getNumberAttribute('fabric_setupp_count');
  }

  // fcoe_nport_count - computed: true, optional: false, required: false
  public get fcoeNportCount() {
    return this.getNumberAttribute('fcoe_nport_count');
  }

  // fcoe_nport_dom_count - computed: true, optional: false, required: false
  public get fcoeNportDomCount() {
    return this.getNumberAttribute('fcoe_nport_dom_count');
  }

  // fcoe_nport_vlan_count - computed: true, optional: false, required: false
  public get fcoeNportVlanCount() {
    return this.getNumberAttribute('fcoe_nport_vlan_count');
  }

  // fcoe_nport_vsan_count - computed: true, optional: false, required: false
  public get fcoeNportVsanCount() {
    return this.getNumberAttribute('fcoe_nport_vsan_count');
  }

  // fv_sla_def_count - computed: true, optional: false, required: false
  public get fvSlaDefCount() {
    return this.getNumberAttribute('fv_sla_def_count');
  }

  // hsrp_count - computed: true, optional: false, required: false
  public get hsrpCount() {
    return this.getNumberAttribute('hsrp_count');
  }

  // ibgp_count - computed: true, optional: false, required: false
  public get ibgpCount() {
    return this.getNumberAttribute('ibgp_count');
  }

  // igmp_access_list_count - computed: true, optional: false, required: false
  public get igmpAccessListCount() {
    return this.getNumberAttribute('igmp_access_list_count');
  }

  // igmp_snoop - computed: true, optional: false, required: false
  public get igmpSnoop() {
    return this.getStringAttribute('igmp_snoop');
  }

  // ip_epg_count - computed: true, optional: false, required: false
  public get ipEpgCount() {
    return this.getNumberAttribute('ip_epg_count');
  }

  // is_bgp_route_reflectors_feature_used - computed: true, optional: false, required: false
  public get isBgpRouteReflectorsFeatureUsed() {
    return this.getBooleanAttribute('is_bgp_route_reflectors_feature_used');
  }

  // is_bridge_domains_feature_used - computed: true, optional: false, required: false
  public get isBridgeDomainsFeatureUsed() {
    return this.getBooleanAttribute('is_bridge_domains_feature_used');
  }

  // is_common_local_user_name - computed: true, optional: false, required: false
  public get isCommonLocalUserName() {
    return this.getBooleanAttribute('is_common_local_user_name');
  }

  // is_contracts_feature_used - computed: true, optional: false, required: false
  public get isContractsFeatureUsed() {
    return this.getBooleanAttribute('is_contracts_feature_used');
  }

  // is_epg_feature_used - computed: true, optional: false, required: false
  public get isEpgFeatureUsed() {
    return this.getBooleanAttribute('is_epg_feature_used');
  }

  // is_filters_feature_used - computed: true, optional: false, required: false
  public get isFiltersFeatureUsed() {
    return this.getBooleanAttribute('is_filters_feature_used');
  }

  // is_http_configured - computed: true, optional: false, required: false
  public get isHttpConfigured() {
    return this.getBooleanAttribute('is_http_configured');
  }

  // is_https_configured - computed: true, optional: false, required: false
  public get isHttpsConfigured() {
    return this.getBooleanAttribute('is_https_configured');
  }

  // is_ntp_feature_used - computed: true, optional: false, required: false
  public get isNtpFeatureUsed() {
    return this.getBooleanAttribute('is_ntp_feature_used');
  }

  // is_ptp_feature_used - computed: true, optional: false, required: false
  public get isPtpFeatureUsed() {
    return this.getBooleanAttribute('is_ptp_feature_used');
  }

  // is_synce_feature_used - computed: true, optional: false, required: false
  public get isSynceFeatureUsed() {
    return this.getBooleanAttribute('is_synce_feature_used');
  }

  // is_tech_support_collected - computed: true, optional: false, required: false
  public get isTechSupportCollected() {
    return this.getStringAttribute('is_tech_support_collected');
  }

  // is_tenants_feature_used - computed: true, optional: false, required: false
  public get isTenantsFeatureUsed() {
    return this.getBooleanAttribute('is_tenants_feature_used');
  }

  // is_vrfs_feature_used - computed: true, optional: false, required: false
  public get isVrfsFeatureUsed() {
    return this.getBooleanAttribute('is_vrfs_feature_used');
  }

  // isis_count - computed: true, optional: false, required: false
  public get isisCount() {
    return this.getNumberAttribute('isis_count');
  }

  // l2_multicast - computed: true, optional: false, required: false
  public get l2Multicast() {
    return this.getStringAttribute('l2_multicast');
  }

  // latency_ptp_mode - computed: true, optional: false, required: false
  public get latencyPtpMode() {
    return this.getStringAttribute('latency_ptp_mode');
  }

  // leaf_count - computed: true, optional: false, required: false
  public get leafCount() {
    return this.getNumberAttribute('leaf_count');
  }

  // local_username_count - computed: true, optional: false, required: false
  public get localUsernameCount() {
    return this.getNumberAttribute('local_username_count');
  }

  // login_block_duration - computed: true, optional: false, required: false
  public get loginBlockDuration() {
    return this.getNumberAttribute('login_block_duration');
  }

  // login_max_failed_attempts - computed: true, optional: false, required: false
  public get loginMaxFailedAttempts() {
    return this.getNumberAttribute('login_max_failed_attempts');
  }

  // login_max_failed_attempts_window - computed: true, optional: false, required: false
  public get loginMaxFailedAttemptsWindow() {
    return this.getNumberAttribute('login_max_failed_attempts_window');
  }

  // maintenance_mode_count - computed: true, optional: false, required: false
  public get maintenanceModeCount() {
    return this.getNumberAttribute('maintenance_mode_count');
  }

  // management_over_v6_count - computed: true, optional: false, required: false
  public get managementOverV6Count() {
    return this.getNumberAttribute('management_over_v6_count');
  }

  // microsoft_useg_vmm_ep_pd_count - computed: true, optional: false, required: false
  public get microsoftUsegVmmEpPdCount() {
    return this.getNumberAttribute('microsoft_useg_vmm_ep_pd_count');
  }

  // mod_time - computed: true, optional: false, required: false
  public get modTime() {
    return this.getStringAttribute('mod_time');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // net_flow_count - computed: true, optional: false, required: false
  public get netFlowCount() {
    return this.getNumberAttribute('net_flow_count');
  }

  // nir - computed: true, optional: false, required: false
  public get nir() {
    return this.getStringAttribute('nir');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // open_stack - computed: true, optional: false, required: false
  public get openStack() {
    return this.getStringAttribute('open_stack');
  }

  // opflex_kubernetes_count - computed: true, optional: false, required: false
  public get opflexKubernetesCount() {
    return this.getNumberAttribute('opflex_kubernetes_count');
  }

  // ospf_count - computed: true, optional: false, required: false
  public get ospfCount() {
    return this.getNumberAttribute('ospf_count');
  }

  // owners - computed: true, optional: false, required: false
  public get owners() {
    return this.getListAttribute('owners');
  }

  // parent - computed: true, optional: false, required: false
  private _parent = new DataIntersightNiatelemetryNiaFeatureUsageResultsParentList(this, "parent", false);
  public get parent() {
    return this._parent;
  }

  // password_history_count - computed: true, optional: false, required: false
  public get passwordHistoryCount() {
    return this.getNumberAttribute('password_history_count');
  }

  // password_strength_check - computed: true, optional: false, required: false
  public get passwordStrengthCheck() {
    return this.getStringAttribute('password_strength_check');
  }

  // password_strength_profile_count - computed: true, optional: false, required: false
  public get passwordStrengthProfileCount() {
    return this.getNumberAttribute('password_strength_profile_count');
  }

  // permission_resources - computed: true, optional: false, required: false
  private _permissionResources = new DataIntersightNiatelemetryNiaFeatureUsageResultsPermissionResourcesList(this, "permission_resources", false);
  public get permissionResources() {
    return this._permissionResources;
  }

  // poe_count - computed: true, optional: false, required: false
  public get poeCount() {
    return this.getNumberAttribute('poe_count');
  }

  // port_security_count - computed: true, optional: false, required: false
  public get portSecurityCount() {
    return this.getNumberAttribute('port_security_count');
  }

  // qin_vni_tunnel_count - computed: true, optional: false, required: false
  public get qinVniTunnelCount() {
    return this.getNumberAttribute('qin_vni_tunnel_count');
  }

  // qos_cong_count - computed: true, optional: false, required: false
  public get qosCongCount() {
    return this.getNumberAttribute('qos_cong_count');
  }

  // qos_pfc_pol_count - computed: true, optional: false, required: false
  public get qosPfcPolCount() {
    return this.getNumberAttribute('qos_pfc_pol_count');
  }

  // realm_count - computed: true, optional: false, required: false
  public get realmCount() {
    return this.getNumberAttribute('realm_count');
  }

  // record_type - computed: true, optional: false, required: false
  public get recordType() {
    return this.getStringAttribute('record_type');
  }

  // record_version - computed: true, optional: false, required: false
  public get recordVersion() {
    return this.getStringAttribute('record_version');
  }

  // registered_device - computed: true, optional: false, required: false
  private _registeredDevice = new DataIntersightNiatelemetryNiaFeatureUsageResultsRegisteredDeviceList(this, "registered_device", false);
  public get registeredDevice() {
    return this._registeredDevice;
  }

  // remote_leaf_count - computed: true, optional: false, required: false
  public get remoteLeafCount() {
    return this.getNumberAttribute('remote_leaf_count');
  }

  // scvmm_count - computed: true, optional: false, required: false
  public get scvmmCount() {
    return this.getNumberAttribute('scvmm_count');
  }

  // shared_l3_out_count - computed: true, optional: false, required: false
  public get sharedL3OutCount() {
    return this.getNumberAttribute('shared_l3_out_count');
  }

  // shared_scope - computed: true, optional: false, required: false
  public get sharedScope() {
    return this.getStringAttribute('shared_scope');
  }

  // site_name - computed: true, optional: false, required: false
  public get siteName() {
    return this.getStringAttribute('site_name');
  }

  // smart_call_home - computed: true, optional: false, required: false
  public get smartCallHome() {
    return this.getStringAttribute('smart_call_home');
  }

  // smart_license - computed: true, optional: false, required: false
  private _smartLicense = new DataIntersightNiatelemetryNiaFeatureUsageResultsSmartLicenseList(this, "smart_license", false);
  public get smartLicense() {
    return this._smartLicense;
  }

  // snapshot_count - computed: true, optional: false, required: false
  public get snapshotCount() {
    return this.getNumberAttribute('snapshot_count');
  }

  // snmp - computed: true, optional: false, required: false
  public get snmp() {
    return this.getStringAttribute('snmp');
  }

  // snmp_community_access_count - computed: true, optional: false, required: false
  public get snmpCommunityAccessCount() {
    return this.getNumberAttribute('snmp_community_access_count');
  }

  // snmp_group_count - computed: true, optional: false, required: false
  public get snmpGroupCount() {
    return this.getNumberAttribute('snmp_group_count');
  }

  // snmp_trap_count - computed: true, optional: false, required: false
  public get snmpTrapCount() {
    return this.getNumberAttribute('snmp_trap_count');
  }

  // snmp_v3_count - computed: true, optional: false, required: false
  public get snmpV3Count() {
    return this.getNumberAttribute('snmp_v3_count');
  }

  // span_count - computed: true, optional: false, required: false
  public get spanCount() {
    return this.getNumberAttribute('span_count');
  }

  // span_dst_count - computed: true, optional: false, required: false
  public get spanDstCount() {
    return this.getNumberAttribute('span_dst_count');
  }

  // span_src_count - computed: true, optional: false, required: false
  public get spanSrcCount() {
    return this.getNumberAttribute('span_src_count');
  }

  // spine_count - computed: true, optional: false, required: false
  public get spineCount() {
    return this.getNumberAttribute('spine_count');
  }

  // ssh_over_v6_count - computed: true, optional: false, required: false
  public get sshOverV6Count() {
    return this.getNumberAttribute('ssh_over_v6_count');
  }

  // ssh_v2_count - computed: true, optional: false, required: false
  public get sshV2Count() {
    return this.getNumberAttribute('ssh_v2_count');
  }

  // supervisor_module_count - computed: true, optional: false, required: false
  public get supervisorModuleCount() {
    return this.getNumberAttribute('supervisor_module_count');
  }

  // syslog_group_count - computed: true, optional: false, required: false
  public get syslogGroupCount() {
    return this.getNumberAttribute('syslog_group_count');
  }

  // syslog_over_v6_count - computed: true, optional: false, required: false
  public get syslogOverV6Count() {
    return this.getNumberAttribute('syslog_over_v6_count');
  }

  // system_controller_count - computed: true, optional: false, required: false
  public get systemControllerCount() {
    return this.getNumberAttribute('system_controller_count');
  }

  // tacacs_group_count - computed: true, optional: false, required: false
  public get tacacsGroupCount() {
    return this.getNumberAttribute('tacacs_group_count');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataIntersightNiatelemetryNiaFeatureUsageResultsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // tenant_count - computed: true, optional: false, required: false
  public get tenantCount() {
    return this.getNumberAttribute('tenant_count');
  }

  // tier_two_leaf_count - computed: true, optional: false, required: false
  public get tierTwoLeafCount() {
    return this.getNumberAttribute('tier_two_leaf_count');
  }

  // total_critical_faults - computed: true, optional: false, required: false
  public get totalCriticalFaults() {
    return this.getNumberAttribute('total_critical_faults');
  }

  // twamp - computed: true, optional: false, required: false
  public get twamp() {
    return this.getStringAttribute('twamp');
  }

  // useg - computed: true, optional: false, required: false
  public get useg() {
    return this.getStringAttribute('useg');
  }

  // version_context - computed: true, optional: false, required: false
  private _versionContext = new DataIntersightNiatelemetryNiaFeatureUsageResultsVersionContextList(this, "version_context", false);
  public get versionContext() {
    return this._versionContext;
  }

  // vm_ware_vds_count - computed: true, optional: false, required: false
  public get vmWareVdsCount() {
    return this.getNumberAttribute('vm_ware_vds_count');
  }

  // vmm_ctrlrp_count - computed: true, optional: false, required: false
  public get vmmCtrlrpCount() {
    return this.getNumberAttribute('vmm_ctrlrp_count');
  }

  // vmm_domp_count - computed: true, optional: false, required: false
  public get vmmDompCount() {
    return this.getNumberAttribute('vmm_domp_count');
  }

  // vmm_ep_pd_count - computed: true, optional: false, required: false
  public get vmmEpPdCount() {
    return this.getNumberAttribute('vmm_ep_pd_count');
  }

  // vnsm_dev_count - computed: true, optional: false, required: false
  public get vnsmDevCount() {
    return this.getNumberAttribute('vnsm_dev_count');
  }

  // vpod_count - computed: true, optional: false, required: false
  public get vpodCount() {
    return this.getNumberAttribute('vpod_count');
  }

  // webtoken_timeout_seconds - computed: true, optional: false, required: false
  public get webtokenTimeoutSeconds() {
    return this.getNumberAttribute('webtoken_timeout_seconds');
  }
}

export class DataIntersightNiatelemetryNiaFeatureUsageResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaFeatureUsageResultsOutputReference {
    return new DataIntersightNiatelemetryNiaFeatureUsageResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaFeatureUsageAncestors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#additional_properties DataIntersightNiatelemetryNiaFeatureUsage#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#class_id DataIntersightNiatelemetryNiaFeatureUsage#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#moid DataIntersightNiatelemetryNiaFeatureUsage#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#object_type DataIntersightNiatelemetryNiaFeatureUsage#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#selector DataIntersightNiatelemetryNiaFeatureUsage#selector}
  */
  readonly selector?: string;
}

export function dataIntersightNiatelemetryNiaFeatureUsageAncestorsToTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsageAncestors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightNiatelemetryNiaFeatureUsageAncestorsToHclTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsageAncestors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightNiatelemetryNiaFeatureUsageAncestorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaFeatureUsageAncestors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaFeatureUsageAncestors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightNiatelemetryNiaFeatureUsageAncestorsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightNiatelemetryNiaFeatureUsageAncestors[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightNiatelemetryNiaFeatureUsageAncestorsOutputReference {
    return new DataIntersightNiatelemetryNiaFeatureUsageAncestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaFeatureUsageParent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#additional_properties DataIntersightNiatelemetryNiaFeatureUsage#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#class_id DataIntersightNiatelemetryNiaFeatureUsage#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#moid DataIntersightNiatelemetryNiaFeatureUsage#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#object_type DataIntersightNiatelemetryNiaFeatureUsage#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#selector DataIntersightNiatelemetryNiaFeatureUsage#selector}
  */
  readonly selector?: string;
}

export function dataIntersightNiatelemetryNiaFeatureUsageParentToTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsageParentOutputReference | DataIntersightNiatelemetryNiaFeatureUsageParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightNiatelemetryNiaFeatureUsageParentToHclTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsageParentOutputReference | DataIntersightNiatelemetryNiaFeatureUsageParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightNiatelemetryNiaFeatureUsageParentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightNiatelemetryNiaFeatureUsageParent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaFeatureUsageParent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightNiatelemetryNiaFeatureUsagePermissionResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#additional_properties DataIntersightNiatelemetryNiaFeatureUsage#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#class_id DataIntersightNiatelemetryNiaFeatureUsage#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#moid DataIntersightNiatelemetryNiaFeatureUsage#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#object_type DataIntersightNiatelemetryNiaFeatureUsage#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#selector DataIntersightNiatelemetryNiaFeatureUsage#selector}
  */
  readonly selector?: string;
}

export function dataIntersightNiatelemetryNiaFeatureUsagePermissionResourcesToTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsagePermissionResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightNiatelemetryNiaFeatureUsagePermissionResourcesToHclTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsagePermissionResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightNiatelemetryNiaFeatureUsagePermissionResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaFeatureUsagePermissionResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaFeatureUsagePermissionResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightNiatelemetryNiaFeatureUsagePermissionResourcesList extends cdktf.ComplexList {
  public internalValue? : DataIntersightNiatelemetryNiaFeatureUsagePermissionResources[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightNiatelemetryNiaFeatureUsagePermissionResourcesOutputReference {
    return new DataIntersightNiatelemetryNiaFeatureUsagePermissionResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaFeatureUsageRegisteredDevice {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#additional_properties DataIntersightNiatelemetryNiaFeatureUsage#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#class_id DataIntersightNiatelemetryNiaFeatureUsage#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#moid DataIntersightNiatelemetryNiaFeatureUsage#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#object_type DataIntersightNiatelemetryNiaFeatureUsage#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#selector DataIntersightNiatelemetryNiaFeatureUsage#selector}
  */
  readonly selector?: string;
}

export function dataIntersightNiatelemetryNiaFeatureUsageRegisteredDeviceToTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsageRegisteredDeviceOutputReference | DataIntersightNiatelemetryNiaFeatureUsageRegisteredDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightNiatelemetryNiaFeatureUsageRegisteredDeviceToHclTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsageRegisteredDeviceOutputReference | DataIntersightNiatelemetryNiaFeatureUsageRegisteredDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightNiatelemetryNiaFeatureUsageRegisteredDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightNiatelemetryNiaFeatureUsageRegisteredDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaFeatureUsageRegisteredDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightNiatelemetryNiaFeatureUsageSmartLicense {
  /**
  * Indicate the mode smart license is curerntly running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#active_mode DataIntersightNiatelemetryNiaFeatureUsage#active_mode}
  */
  readonly activeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#additional_properties DataIntersightNiatelemetryNiaFeatureUsage#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Authorization status of the smart license.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#auth_status DataIntersightNiatelemetryNiaFeatureUsage#auth_status}
  */
  readonly authStatus?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#class_id DataIntersightNiatelemetryNiaFeatureUsage#class_id}
  */
  readonly classId?: string;
  /**
  * License Udi of the smart license.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#license_udi DataIntersightNiatelemetryNiaFeatureUsage#license_udi}
  */
  readonly licenseUdi?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#object_type DataIntersightNiatelemetryNiaFeatureUsage#object_type}
  */
  readonly objectType?: string;
  /**
  * Smart licensing account name in CSSM and is retrieved from CSSM after regsitration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#smart_account DataIntersightNiatelemetryNiaFeatureUsage#smart_account}
  */
  readonly smartAccount?: string;
}

export function dataIntersightNiatelemetryNiaFeatureUsageSmartLicenseToTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsageSmartLicenseOutputReference | DataIntersightNiatelemetryNiaFeatureUsageSmartLicense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_mode: cdktf.stringToTerraform(struct!.activeMode),
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    auth_status: cdktf.stringToTerraform(struct!.authStatus),
    class_id: cdktf.stringToTerraform(struct!.classId),
    license_udi: cdktf.stringToTerraform(struct!.licenseUdi),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    smart_account: cdktf.stringToTerraform(struct!.smartAccount),
  }
}


export function dataIntersightNiatelemetryNiaFeatureUsageSmartLicenseToHclTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsageSmartLicenseOutputReference | DataIntersightNiatelemetryNiaFeatureUsageSmartLicense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_mode: {
      value: cdktf.stringToHclTerraform(struct!.activeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_status: {
      value: cdktf.stringToHclTerraform(struct!.authStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_udi: {
      value: cdktf.stringToHclTerraform(struct!.licenseUdi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smart_account: {
      value: cdktf.stringToHclTerraform(struct!.smartAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightNiatelemetryNiaFeatureUsageSmartLicenseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightNiatelemetryNiaFeatureUsageSmartLicense | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeMode = this._activeMode;
    }
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._authStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.authStatus = this._authStatus;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._licenseUdi !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseUdi = this._licenseUdi;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._smartAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.smartAccount = this._smartAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaFeatureUsageSmartLicense | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeMode = undefined;
      this._additionalProperties = undefined;
      this._authStatus = undefined;
      this._classId = undefined;
      this._licenseUdi = undefined;
      this._objectType = undefined;
      this._smartAccount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeMode = value.activeMode;
      this._additionalProperties = value.additionalProperties;
      this._authStatus = value.authStatus;
      this._classId = value.classId;
      this._licenseUdi = value.licenseUdi;
      this._objectType = value.objectType;
      this._smartAccount = value.smartAccount;
    }
  }

  // active_mode - computed: false, optional: true, required: false
  private _activeMode?: string; 
  public get activeMode() {
    return this.getStringAttribute('active_mode');
  }
  public set activeMode(value: string) {
    this._activeMode = value;
  }
  public resetActiveMode() {
    this._activeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeModeInput() {
    return this._activeMode;
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // auth_status - computed: false, optional: true, required: false
  private _authStatus?: string; 
  public get authStatus() {
    return this.getStringAttribute('auth_status');
  }
  public set authStatus(value: string) {
    this._authStatus = value;
  }
  public resetAuthStatus() {
    this._authStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authStatusInput() {
    return this._authStatus;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // license_udi - computed: false, optional: true, required: false
  private _licenseUdi?: string; 
  public get licenseUdi() {
    return this.getStringAttribute('license_udi');
  }
  public set licenseUdi(value: string) {
    this._licenseUdi = value;
  }
  public resetLicenseUdi() {
    this._licenseUdi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseUdiInput() {
    return this._licenseUdi;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // smart_account - computed: false, optional: true, required: false
  private _smartAccount?: string; 
  public get smartAccount() {
    return this.getStringAttribute('smart_account');
  }
  public set smartAccount(value: string) {
    this._smartAccount = value;
  }
  public resetSmartAccount() {
    this._smartAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartAccountInput() {
    return this._smartAccount;
  }
}
export interface DataIntersightNiatelemetryNiaFeatureUsageTagsAncestorDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#additional_properties DataIntersightNiatelemetryNiaFeatureUsage#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#class_id DataIntersightNiatelemetryNiaFeatureUsage#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#moid DataIntersightNiatelemetryNiaFeatureUsage#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#object_type DataIntersightNiatelemetryNiaFeatureUsage#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#selector DataIntersightNiatelemetryNiaFeatureUsage#selector}
  */
  readonly selector?: string;
}

export function dataIntersightNiatelemetryNiaFeatureUsageTagsAncestorDefinitionsToTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsageTagsAncestorDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightNiatelemetryNiaFeatureUsageTagsAncestorDefinitionsToHclTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsageTagsAncestorDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightNiatelemetryNiaFeatureUsageTagsAncestorDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaFeatureUsageTagsAncestorDefinitions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaFeatureUsageTagsAncestorDefinitions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightNiatelemetryNiaFeatureUsageTagsAncestorDefinitionsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightNiatelemetryNiaFeatureUsageTagsAncestorDefinitions[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightNiatelemetryNiaFeatureUsageTagsAncestorDefinitionsOutputReference {
    return new DataIntersightNiatelemetryNiaFeatureUsageTagsAncestorDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaFeatureUsageTagsDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#additional_properties DataIntersightNiatelemetryNiaFeatureUsage#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#class_id DataIntersightNiatelemetryNiaFeatureUsage#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#moid DataIntersightNiatelemetryNiaFeatureUsage#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#object_type DataIntersightNiatelemetryNiaFeatureUsage#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#selector DataIntersightNiatelemetryNiaFeatureUsage#selector}
  */
  readonly selector?: string;
}

export function dataIntersightNiatelemetryNiaFeatureUsageTagsDefinitionToTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsageTagsDefinitionOutputReference | DataIntersightNiatelemetryNiaFeatureUsageTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightNiatelemetryNiaFeatureUsageTagsDefinitionToHclTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsageTagsDefinitionOutputReference | DataIntersightNiatelemetryNiaFeatureUsageTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightNiatelemetryNiaFeatureUsageTagsDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightNiatelemetryNiaFeatureUsageTagsDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaFeatureUsageTagsDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightNiatelemetryNiaFeatureUsageTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#additional_properties DataIntersightNiatelemetryNiaFeatureUsage#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The string representation of a tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#key DataIntersightNiatelemetryNiaFeatureUsage#key}
  */
  readonly key?: string;
  /**
  * Propagated is a boolean flag that indicates whether the tag is propagated to the related managed objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#propagated DataIntersightNiatelemetryNiaFeatureUsage#propagated}
  */
  readonly propagated?: boolean | cdktf.IResolvable;
  /**
  * An enum type that defines the type of tag. Supported values are 'pathtag' and 'keyvalue'.
  * * `KeyValue` - KeyValue type of tag. Key is required for these tags. Value is optional.
  * * `PathTag` - Key contain path information. Value is not present for these tags. The path is created by using the '/' character as a delimiter.For example, if the tag is "A/B/C", then "A" is the parent tag, "B" is the child tag of "A" and "C" is the child tag of "B".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#type DataIntersightNiatelemetryNiaFeatureUsage#type}
  */
  readonly type?: string;
  /**
  * The string representation of a tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#value DataIntersightNiatelemetryNiaFeatureUsage#value}
  */
  readonly value?: string;
  /**
  * ancestor_definitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#ancestor_definitions DataIntersightNiatelemetryNiaFeatureUsage#ancestor_definitions}
  */
  readonly ancestorDefinitions?: DataIntersightNiatelemetryNiaFeatureUsageTagsAncestorDefinitions[] | cdktf.IResolvable;
  /**
  * definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#definition DataIntersightNiatelemetryNiaFeatureUsage#definition}
  */
  readonly definition?: DataIntersightNiatelemetryNiaFeatureUsageTagsDefinition;
}

export function dataIntersightNiatelemetryNiaFeatureUsageTagsToTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsageTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    key: cdktf.stringToTerraform(struct!.key),
    propagated: cdktf.booleanToTerraform(struct!.propagated),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    ancestor_definitions: cdktf.listMapper(dataIntersightNiatelemetryNiaFeatureUsageTagsAncestorDefinitionsToTerraform, true)(struct!.ancestorDefinitions),
    definition: dataIntersightNiatelemetryNiaFeatureUsageTagsDefinitionToTerraform(struct!.definition),
  }
}


export function dataIntersightNiatelemetryNiaFeatureUsageTagsToHclTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsageTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    propagated: {
      value: cdktf.booleanToHclTerraform(struct!.propagated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ancestor_definitions: {
      value: cdktf.listMapperHcl(dataIntersightNiatelemetryNiaFeatureUsageTagsAncestorDefinitionsToHclTerraform, true)(struct!.ancestorDefinitions),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightNiatelemetryNiaFeatureUsageTagsAncestorDefinitionsList",
    },
    definition: {
      value: dataIntersightNiatelemetryNiaFeatureUsageTagsDefinitionToHclTerraform(struct!.definition),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightNiatelemetryNiaFeatureUsageTagsDefinitionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightNiatelemetryNiaFeatureUsageTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaFeatureUsageTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._propagated !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagated = this._propagated;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._ancestorDefinitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ancestorDefinitions = this._ancestorDefinitions?.internalValue;
    }
    if (this._definition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaFeatureUsageTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._key = undefined;
      this._propagated = undefined;
      this._type = undefined;
      this._value = undefined;
      this._ancestorDefinitions.internalValue = undefined;
      this._definition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._key = value.key;
      this._propagated = value.propagated;
      this._type = value.type;
      this._value = value.value;
      this._ancestorDefinitions.internalValue = value.ancestorDefinitions;
      this._definition.internalValue = value.definition;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // propagated - computed: false, optional: true, required: false
  private _propagated?: boolean | cdktf.IResolvable; 
  public get propagated() {
    return this.getBooleanAttribute('propagated');
  }
  public set propagated(value: boolean | cdktf.IResolvable) {
    this._propagated = value;
  }
  public resetPropagated() {
    this._propagated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagatedInput() {
    return this._propagated;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // ancestor_definitions - computed: false, optional: true, required: false
  private _ancestorDefinitions = new DataIntersightNiatelemetryNiaFeatureUsageTagsAncestorDefinitionsList(this, "ancestor_definitions", false);
  public get ancestorDefinitions() {
    return this._ancestorDefinitions;
  }
  public putAncestorDefinitions(value: DataIntersightNiatelemetryNiaFeatureUsageTagsAncestorDefinitions[] | cdktf.IResolvable) {
    this._ancestorDefinitions.internalValue = value;
  }
  public resetAncestorDefinitions() {
    this._ancestorDefinitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorDefinitionsInput() {
    return this._ancestorDefinitions.internalValue;
  }

  // definition - computed: false, optional: true, required: false
  private _definition = new DataIntersightNiatelemetryNiaFeatureUsageTagsDefinitionOutputReference(this, "definition");
  public get definition() {
    return this._definition;
  }
  public putDefinition(value: DataIntersightNiatelemetryNiaFeatureUsageTagsDefinition) {
    this._definition.internalValue = value;
  }
  public resetDefinition() {
    this._definition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition.internalValue;
  }
}

export class DataIntersightNiatelemetryNiaFeatureUsageTagsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightNiatelemetryNiaFeatureUsageTags[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightNiatelemetryNiaFeatureUsageTagsOutputReference {
    return new DataIntersightNiatelemetryNiaFeatureUsageTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaFeatureUsageVersionContextInterestedMos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#additional_properties DataIntersightNiatelemetryNiaFeatureUsage#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#class_id DataIntersightNiatelemetryNiaFeatureUsage#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#moid DataIntersightNiatelemetryNiaFeatureUsage#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#object_type DataIntersightNiatelemetryNiaFeatureUsage#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#selector DataIntersightNiatelemetryNiaFeatureUsage#selector}
  */
  readonly selector?: string;
}

export function dataIntersightNiatelemetryNiaFeatureUsageVersionContextInterestedMosToTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsageVersionContextInterestedMos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightNiatelemetryNiaFeatureUsageVersionContextInterestedMosToHclTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsageVersionContextInterestedMos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightNiatelemetryNiaFeatureUsageVersionContextInterestedMosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaFeatureUsageVersionContextInterestedMos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaFeatureUsageVersionContextInterestedMos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightNiatelemetryNiaFeatureUsageVersionContextInterestedMosList extends cdktf.ComplexList {
  public internalValue? : DataIntersightNiatelemetryNiaFeatureUsageVersionContextInterestedMos[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightNiatelemetryNiaFeatureUsageVersionContextInterestedMosOutputReference {
    return new DataIntersightNiatelemetryNiaFeatureUsageVersionContextInterestedMosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaFeatureUsageVersionContextRefMo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#additional_properties DataIntersightNiatelemetryNiaFeatureUsage#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#class_id DataIntersightNiatelemetryNiaFeatureUsage#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#moid DataIntersightNiatelemetryNiaFeatureUsage#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#object_type DataIntersightNiatelemetryNiaFeatureUsage#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#selector DataIntersightNiatelemetryNiaFeatureUsage#selector}
  */
  readonly selector?: string;
}

export function dataIntersightNiatelemetryNiaFeatureUsageVersionContextRefMoToTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsageVersionContextRefMoOutputReference | DataIntersightNiatelemetryNiaFeatureUsageVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightNiatelemetryNiaFeatureUsageVersionContextRefMoToHclTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsageVersionContextRefMoOutputReference | DataIntersightNiatelemetryNiaFeatureUsageVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightNiatelemetryNiaFeatureUsageVersionContextRefMoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightNiatelemetryNiaFeatureUsageVersionContextRefMo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaFeatureUsageVersionContextRefMo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightNiatelemetryNiaFeatureUsageVersionContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#additional_properties DataIntersightNiatelemetryNiaFeatureUsage#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#class_id DataIntersightNiatelemetryNiaFeatureUsage#class_id}
  */
  readonly classId?: string;
  /**
  * The flag to indicate if snapshot is marked for deletion or not. If flag is set then snapshot will be removed after the successful deployment of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#marked_for_deletion DataIntersightNiatelemetryNiaFeatureUsage#marked_for_deletion}
  */
  readonly markedForDeletion?: boolean | cdktf.IResolvable;
  /**
  * The version of the Managed Object, e.g. an incrementing number or a hash id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#nr_version DataIntersightNiatelemetryNiaFeatureUsage#nr_version}
  */
  readonly nrVersion?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#object_type DataIntersightNiatelemetryNiaFeatureUsage#object_type}
  */
  readonly objectType?: string;
  /**
  * The time this versioned Managed Object was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#timestamp DataIntersightNiatelemetryNiaFeatureUsage#timestamp}
  */
  readonly timestamp?: string;
  /**
  * Specifies type of version. Currently the only supported value is "Configured"
  * that is used to keep track of snapshots of policies and profiles that are intended
  * to be configured to target endpoints.
  * * `Modified` - Version created every time an object is modified.
  * * `Configured` - Version created every time an object is configured to the service profile.
  * * `Deployed` - Version created for objects related to a service profile when it is deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#version_type DataIntersightNiatelemetryNiaFeatureUsage#version_type}
  */
  readonly versionType?: string;
  /**
  * interested_mos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#interested_mos DataIntersightNiatelemetryNiaFeatureUsage#interested_mos}
  */
  readonly interestedMos?: DataIntersightNiatelemetryNiaFeatureUsageVersionContextInterestedMos[] | cdktf.IResolvable;
  /**
  * ref_mo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#ref_mo DataIntersightNiatelemetryNiaFeatureUsage#ref_mo}
  */
  readonly refMo?: DataIntersightNiatelemetryNiaFeatureUsageVersionContextRefMo;
}

export function dataIntersightNiatelemetryNiaFeatureUsageVersionContextToTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsageVersionContextOutputReference | DataIntersightNiatelemetryNiaFeatureUsageVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    marked_for_deletion: cdktf.booleanToTerraform(struct!.markedForDeletion),
    nr_version: cdktf.stringToTerraform(struct!.nrVersion),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    timestamp: cdktf.stringToTerraform(struct!.timestamp),
    version_type: cdktf.stringToTerraform(struct!.versionType),
    interested_mos: cdktf.listMapper(dataIntersightNiatelemetryNiaFeatureUsageVersionContextInterestedMosToTerraform, true)(struct!.interestedMos),
    ref_mo: dataIntersightNiatelemetryNiaFeatureUsageVersionContextRefMoToTerraform(struct!.refMo),
  }
}


export function dataIntersightNiatelemetryNiaFeatureUsageVersionContextToHclTerraform(struct?: DataIntersightNiatelemetryNiaFeatureUsageVersionContextOutputReference | DataIntersightNiatelemetryNiaFeatureUsageVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    marked_for_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.markedForDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nr_version: {
      value: cdktf.stringToHclTerraform(struct!.nrVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp: {
      value: cdktf.stringToHclTerraform(struct!.timestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_type: {
      value: cdktf.stringToHclTerraform(struct!.versionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interested_mos: {
      value: cdktf.listMapperHcl(dataIntersightNiatelemetryNiaFeatureUsageVersionContextInterestedMosToHclTerraform, true)(struct!.interestedMos),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightNiatelemetryNiaFeatureUsageVersionContextInterestedMosList",
    },
    ref_mo: {
      value: dataIntersightNiatelemetryNiaFeatureUsageVersionContextRefMoToHclTerraform(struct!.refMo),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightNiatelemetryNiaFeatureUsageVersionContextRefMoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightNiatelemetryNiaFeatureUsageVersionContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightNiatelemetryNiaFeatureUsageVersionContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._markedForDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.markedForDeletion = this._markedForDeletion;
    }
    if (this._nrVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.nrVersion = this._nrVersion;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._timestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp;
    }
    if (this._versionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionType = this._versionType;
    }
    if (this._interestedMos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interestedMos = this._interestedMos?.internalValue;
    }
    if (this._refMo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refMo = this._refMo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaFeatureUsageVersionContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._markedForDeletion = undefined;
      this._nrVersion = undefined;
      this._objectType = undefined;
      this._timestamp = undefined;
      this._versionType = undefined;
      this._interestedMos.internalValue = undefined;
      this._refMo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._markedForDeletion = value.markedForDeletion;
      this._nrVersion = value.nrVersion;
      this._objectType = value.objectType;
      this._timestamp = value.timestamp;
      this._versionType = value.versionType;
      this._interestedMos.internalValue = value.interestedMos;
      this._refMo.internalValue = value.refMo;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // marked_for_deletion - computed: false, optional: true, required: false
  private _markedForDeletion?: boolean | cdktf.IResolvable; 
  public get markedForDeletion() {
    return this.getBooleanAttribute('marked_for_deletion');
  }
  public set markedForDeletion(value: boolean | cdktf.IResolvable) {
    this._markedForDeletion = value;
  }
  public resetMarkedForDeletion() {
    this._markedForDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markedForDeletionInput() {
    return this._markedForDeletion;
  }

  // nr_version - computed: false, optional: true, required: false
  private _nrVersion?: string; 
  public get nrVersion() {
    return this.getStringAttribute('nr_version');
  }
  public set nrVersion(value: string) {
    this._nrVersion = value;
  }
  public resetNrVersion() {
    this._nrVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nrVersionInput() {
    return this._nrVersion;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // timestamp - computed: false, optional: true, required: false
  private _timestamp?: string; 
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
  public set timestamp(value: string) {
    this._timestamp = value;
  }
  public resetTimestamp() {
    this._timestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp;
  }

  // version_type - computed: false, optional: true, required: false
  private _versionType?: string; 
  public get versionType() {
    return this.getStringAttribute('version_type');
  }
  public set versionType(value: string) {
    this._versionType = value;
  }
  public resetVersionType() {
    this._versionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionTypeInput() {
    return this._versionType;
  }

  // interested_mos - computed: false, optional: true, required: false
  private _interestedMos = new DataIntersightNiatelemetryNiaFeatureUsageVersionContextInterestedMosList(this, "interested_mos", false);
  public get interestedMos() {
    return this._interestedMos;
  }
  public putInterestedMos(value: DataIntersightNiatelemetryNiaFeatureUsageVersionContextInterestedMos[] | cdktf.IResolvable) {
    this._interestedMos.internalValue = value;
  }
  public resetInterestedMos() {
    this._interestedMos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interestedMosInput() {
    return this._interestedMos.internalValue;
  }

  // ref_mo - computed: false, optional: true, required: false
  private _refMo = new DataIntersightNiatelemetryNiaFeatureUsageVersionContextRefMoOutputReference(this, "ref_mo");
  public get refMo() {
    return this._refMo;
  }
  public putRefMo(value: DataIntersightNiatelemetryNiaFeatureUsageVersionContextRefMo) {
    this._refMo.internalValue = value;
  }
  public resetRefMo() {
    this._refMo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refMoInput() {
    return this._refMo.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage intersight_niatelemetry_nia_feature_usage}
*/
export class DataIntersightNiatelemetryNiaFeatureUsage extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "intersight_niatelemetry_nia_feature_usage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIntersightNiatelemetryNiaFeatureUsage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIntersightNiatelemetryNiaFeatureUsage to import
  * @param importFromId The id of the existing DataIntersightNiatelemetryNiaFeatureUsage that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIntersightNiatelemetryNiaFeatureUsage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "intersight_niatelemetry_nia_feature_usage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_feature_usage intersight_niatelemetry_nia_feature_usage} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIntersightNiatelemetryNiaFeatureUsageConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIntersightNiatelemetryNiaFeatureUsageConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'intersight_niatelemetry_nia_feature_usage',
      terraformGeneratorMetadata: {
        providerName: 'intersight',
        providerVersion: '1.0.72'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aaaLdapProviderCount = config.aaaLdapProviderCount;
    this._aaaRadiusProviderCount = config.aaaRadiusProviderCount;
    this._aaaTacacsProviderCount = config.aaaTacacsProviderCount;
    this._accountMoid = config.accountMoid;
    this._additionalProperties = config.additionalProperties;
    this._apicClusterHealth = config.apicClusterHealth;
    this._apicCount = config.apicCount;
    this._apicIsTelnetEnabled = config.apicIsTelnetEnabled;
    this._apicNtpCount = config.apicNtpCount;
    this._apicSnmpCommunityCount = config.apicSnmpCommunityCount;
    this._apicSysLogGrpCount = config.apicSysLogGrpCount;
    this._apicSysLogSrcCount = config.apicSysLogSrcCount;
    this._appCenterCount = config.appCenterCount;
    this._ave = config.ave;
    this._bdCount = config.bdCount;
    this._callhomeSmartGroupCount = config.callhomeSmartGroupCount;
    this._classId = config.classId;
    this._cloudSecPeerCount = config.cloudSecPeerCount;
    this._cloudTenantCount = config.cloudTenantCount;
    this._compHvCount = config.compHvCount;
    this._configExportpCount = config.configExportpCount;
    this._configJobCount = config.configJobCount;
    this._consistencyCheckerApp = config.consistencyCheckerApp;
    this._contractCount = config.contractCount;
    this._createTime = config.createTime;
    this._dnsCount = config.dnsCount;
    this._domainGroupMoid = config.domainGroupMoid;
    this._eigrpCount = config.eigrpCount;
    this._epgCount = config.epgCount;
    this._fabricModuleCount = config.fabricModuleCount;
    this._fabricSetuppCount = config.fabricSetuppCount;
    this._fcoeNportCount = config.fcoeNportCount;
    this._fcoeNportDomCount = config.fcoeNportDomCount;
    this._fcoeNportVlanCount = config.fcoeNportVlanCount;
    this._fcoeNportVsanCount = config.fcoeNportVsanCount;
    this._fvSlaDefCount = config.fvSlaDefCount;
    this._hsrpCount = config.hsrpCount;
    this._ibgpCount = config.ibgpCount;
    this._id = config.id;
    this._igmpAccessListCount = config.igmpAccessListCount;
    this._igmpSnoop = config.igmpSnoop;
    this._ipEpgCount = config.ipEpgCount;
    this._isBgpRouteReflectorsFeatureUsed = config.isBgpRouteReflectorsFeatureUsed;
    this._isBridgeDomainsFeatureUsed = config.isBridgeDomainsFeatureUsed;
    this._isCommonLocalUserName = config.isCommonLocalUserName;
    this._isContractsFeatureUsed = config.isContractsFeatureUsed;
    this._isEpgFeatureUsed = config.isEpgFeatureUsed;
    this._isFiltersFeatureUsed = config.isFiltersFeatureUsed;
    this._isHttpConfigured = config.isHttpConfigured;
    this._isHttpsConfigured = config.isHttpsConfigured;
    this._isNtpFeatureUsed = config.isNtpFeatureUsed;
    this._isPtpFeatureUsed = config.isPtpFeatureUsed;
    this._isSynceFeatureUsed = config.isSynceFeatureUsed;
    this._isTechSupportCollected = config.isTechSupportCollected;
    this._isTenantsFeatureUsed = config.isTenantsFeatureUsed;
    this._isVrfsFeatureUsed = config.isVrfsFeatureUsed;
    this._isisCount = config.isisCount;
    this._l2Multicast = config.l2Multicast;
    this._latencyPtpMode = config.latencyPtpMode;
    this._leafCount = config.leafCount;
    this._localUsernameCount = config.localUsernameCount;
    this._loginBlockDuration = config.loginBlockDuration;
    this._loginMaxFailedAttempts = config.loginMaxFailedAttempts;
    this._loginMaxFailedAttemptsWindow = config.loginMaxFailedAttemptsWindow;
    this._maintenanceModeCount = config.maintenanceModeCount;
    this._managementOverV6Count = config.managementOverV6Count;
    this._microsoftUsegVmmEpPdCount = config.microsoftUsegVmmEpPdCount;
    this._modTime = config.modTime;
    this._moid = config.moid;
    this._netFlowCount = config.netFlowCount;
    this._nir = config.nir;
    this._objectType = config.objectType;
    this._openStack = config.openStack;
    this._opflexKubernetesCount = config.opflexKubernetesCount;
    this._ospfCount = config.ospfCount;
    this._owners = config.owners;
    this._passwordHistoryCount = config.passwordHistoryCount;
    this._passwordStrengthCheck = config.passwordStrengthCheck;
    this._passwordStrengthProfileCount = config.passwordStrengthProfileCount;
    this._poeCount = config.poeCount;
    this._portSecurityCount = config.portSecurityCount;
    this._qinVniTunnelCount = config.qinVniTunnelCount;
    this._qosCongCount = config.qosCongCount;
    this._qosPfcPolCount = config.qosPfcPolCount;
    this._realmCount = config.realmCount;
    this._recordType = config.recordType;
    this._recordVersion = config.recordVersion;
    this._remoteLeafCount = config.remoteLeafCount;
    this._scvmmCount = config.scvmmCount;
    this._sharedL3OutCount = config.sharedL3OutCount;
    this._sharedScope = config.sharedScope;
    this._siteName = config.siteName;
    this._smartCallHome = config.smartCallHome;
    this._snapshotCount = config.snapshotCount;
    this._snmp = config.snmp;
    this._snmpCommunityAccessCount = config.snmpCommunityAccessCount;
    this._snmpGroupCount = config.snmpGroupCount;
    this._snmpTrapCount = config.snmpTrapCount;
    this._snmpV3Count = config.snmpV3Count;
    this._spanCount = config.spanCount;
    this._spanDstCount = config.spanDstCount;
    this._spanSrcCount = config.spanSrcCount;
    this._spineCount = config.spineCount;
    this._sshOverV6Count = config.sshOverV6Count;
    this._sshV2Count = config.sshV2Count;
    this._supervisorModuleCount = config.supervisorModuleCount;
    this._syslogGroupCount = config.syslogGroupCount;
    this._syslogOverV6Count = config.syslogOverV6Count;
    this._systemControllerCount = config.systemControllerCount;
    this._tacacsGroupCount = config.tacacsGroupCount;
    this._tenantCount = config.tenantCount;
    this._tierTwoLeafCount = config.tierTwoLeafCount;
    this._totalCriticalFaults = config.totalCriticalFaults;
    this._twamp = config.twamp;
    this._useg = config.useg;
    this._vmWareVdsCount = config.vmWareVdsCount;
    this._vmmCtrlrpCount = config.vmmCtrlrpCount;
    this._vmmDompCount = config.vmmDompCount;
    this._vmmEpPdCount = config.vmmEpPdCount;
    this._vnsmDevCount = config.vnsmDevCount;
    this._vpodCount = config.vpodCount;
    this._webtokenTimeoutSeconds = config.webtokenTimeoutSeconds;
    this._ancestors.internalValue = config.ancestors;
    this._parent.internalValue = config.parent;
    this._permissionResources.internalValue = config.permissionResources;
    this._registeredDevice.internalValue = config.registeredDevice;
    this._smartLicense.internalValue = config.smartLicense;
    this._tags.internalValue = config.tags;
    this._versionContext.internalValue = config.versionContext;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aaa_ldap_provider_count - computed: false, optional: true, required: false
  private _aaaLdapProviderCount?: number; 
  public get aaaLdapProviderCount() {
    return this.getNumberAttribute('aaa_ldap_provider_count');
  }
  public set aaaLdapProviderCount(value: number) {
    this._aaaLdapProviderCount = value;
  }
  public resetAaaLdapProviderCount() {
    this._aaaLdapProviderCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaaLdapProviderCountInput() {
    return this._aaaLdapProviderCount;
  }

  // aaa_radius_provider_count - computed: false, optional: true, required: false
  private _aaaRadiusProviderCount?: number; 
  public get aaaRadiusProviderCount() {
    return this.getNumberAttribute('aaa_radius_provider_count');
  }
  public set aaaRadiusProviderCount(value: number) {
    this._aaaRadiusProviderCount = value;
  }
  public resetAaaRadiusProviderCount() {
    this._aaaRadiusProviderCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaaRadiusProviderCountInput() {
    return this._aaaRadiusProviderCount;
  }

  // aaa_tacacs_provider_count - computed: false, optional: true, required: false
  private _aaaTacacsProviderCount?: number; 
  public get aaaTacacsProviderCount() {
    return this.getNumberAttribute('aaa_tacacs_provider_count');
  }
  public set aaaTacacsProviderCount(value: number) {
    this._aaaTacacsProviderCount = value;
  }
  public resetAaaTacacsProviderCount() {
    this._aaaTacacsProviderCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaaTacacsProviderCountInput() {
    return this._aaaTacacsProviderCount;
  }

  // account_moid - computed: false, optional: true, required: false
  private _accountMoid?: string; 
  public get accountMoid() {
    return this.getStringAttribute('account_moid');
  }
  public set accountMoid(value: string) {
    this._accountMoid = value;
  }
  public resetAccountMoid() {
    this._accountMoid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountMoidInput() {
    return this._accountMoid;
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // apic_cluster_health - computed: false, optional: true, required: false
  private _apicClusterHealth?: string; 
  public get apicClusterHealth() {
    return this.getStringAttribute('apic_cluster_health');
  }
  public set apicClusterHealth(value: string) {
    this._apicClusterHealth = value;
  }
  public resetApicClusterHealth() {
    this._apicClusterHealth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apicClusterHealthInput() {
    return this._apicClusterHealth;
  }

  // apic_count - computed: false, optional: true, required: false
  private _apicCount?: number; 
  public get apicCount() {
    return this.getNumberAttribute('apic_count');
  }
  public set apicCount(value: number) {
    this._apicCount = value;
  }
  public resetApicCount() {
    this._apicCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apicCountInput() {
    return this._apicCount;
  }

  // apic_is_telnet_enabled - computed: false, optional: true, required: false
  private _apicIsTelnetEnabled?: boolean | cdktf.IResolvable; 
  public get apicIsTelnetEnabled() {
    return this.getBooleanAttribute('apic_is_telnet_enabled');
  }
  public set apicIsTelnetEnabled(value: boolean | cdktf.IResolvable) {
    this._apicIsTelnetEnabled = value;
  }
  public resetApicIsTelnetEnabled() {
    this._apicIsTelnetEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apicIsTelnetEnabledInput() {
    return this._apicIsTelnetEnabled;
  }

  // apic_ntp_count - computed: false, optional: true, required: false
  private _apicNtpCount?: number; 
  public get apicNtpCount() {
    return this.getNumberAttribute('apic_ntp_count');
  }
  public set apicNtpCount(value: number) {
    this._apicNtpCount = value;
  }
  public resetApicNtpCount() {
    this._apicNtpCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apicNtpCountInput() {
    return this._apicNtpCount;
  }

  // apic_snmp_community_count - computed: false, optional: true, required: false
  private _apicSnmpCommunityCount?: number; 
  public get apicSnmpCommunityCount() {
    return this.getNumberAttribute('apic_snmp_community_count');
  }
  public set apicSnmpCommunityCount(value: number) {
    this._apicSnmpCommunityCount = value;
  }
  public resetApicSnmpCommunityCount() {
    this._apicSnmpCommunityCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apicSnmpCommunityCountInput() {
    return this._apicSnmpCommunityCount;
  }

  // apic_sys_log_grp_count - computed: false, optional: true, required: false
  private _apicSysLogGrpCount?: number; 
  public get apicSysLogGrpCount() {
    return this.getNumberAttribute('apic_sys_log_grp_count');
  }
  public set apicSysLogGrpCount(value: number) {
    this._apicSysLogGrpCount = value;
  }
  public resetApicSysLogGrpCount() {
    this._apicSysLogGrpCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apicSysLogGrpCountInput() {
    return this._apicSysLogGrpCount;
  }

  // apic_sys_log_src_count - computed: false, optional: true, required: false
  private _apicSysLogSrcCount?: number; 
  public get apicSysLogSrcCount() {
    return this.getNumberAttribute('apic_sys_log_src_count');
  }
  public set apicSysLogSrcCount(value: number) {
    this._apicSysLogSrcCount = value;
  }
  public resetApicSysLogSrcCount() {
    this._apicSysLogSrcCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apicSysLogSrcCountInput() {
    return this._apicSysLogSrcCount;
  }

  // app_center_count - computed: false, optional: true, required: false
  private _appCenterCount?: number; 
  public get appCenterCount() {
    return this.getNumberAttribute('app_center_count');
  }
  public set appCenterCount(value: number) {
    this._appCenterCount = value;
  }
  public resetAppCenterCount() {
    this._appCenterCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appCenterCountInput() {
    return this._appCenterCount;
  }

  // ave - computed: false, optional: true, required: false
  private _ave?: string; 
  public get ave() {
    return this.getStringAttribute('ave');
  }
  public set ave(value: string) {
    this._ave = value;
  }
  public resetAve() {
    this._ave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aveInput() {
    return this._ave;
  }

  // bd_count - computed: false, optional: true, required: false
  private _bdCount?: number; 
  public get bdCount() {
    return this.getNumberAttribute('bd_count');
  }
  public set bdCount(value: number) {
    this._bdCount = value;
  }
  public resetBdCount() {
    this._bdCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bdCountInput() {
    return this._bdCount;
  }

  // callhome_smart_group_count - computed: false, optional: true, required: false
  private _callhomeSmartGroupCount?: number; 
  public get callhomeSmartGroupCount() {
    return this.getNumberAttribute('callhome_smart_group_count');
  }
  public set callhomeSmartGroupCount(value: number) {
    this._callhomeSmartGroupCount = value;
  }
  public resetCallhomeSmartGroupCount() {
    this._callhomeSmartGroupCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callhomeSmartGroupCountInput() {
    return this._callhomeSmartGroupCount;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // cloud_sec_peer_count - computed: false, optional: true, required: false
  private _cloudSecPeerCount?: number; 
  public get cloudSecPeerCount() {
    return this.getNumberAttribute('cloud_sec_peer_count');
  }
  public set cloudSecPeerCount(value: number) {
    this._cloudSecPeerCount = value;
  }
  public resetCloudSecPeerCount() {
    this._cloudSecPeerCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudSecPeerCountInput() {
    return this._cloudSecPeerCount;
  }

  // cloud_tenant_count - computed: false, optional: true, required: false
  private _cloudTenantCount?: number; 
  public get cloudTenantCount() {
    return this.getNumberAttribute('cloud_tenant_count');
  }
  public set cloudTenantCount(value: number) {
    this._cloudTenantCount = value;
  }
  public resetCloudTenantCount() {
    this._cloudTenantCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudTenantCountInput() {
    return this._cloudTenantCount;
  }

  // comp_hv_count - computed: false, optional: true, required: false
  private _compHvCount?: number; 
  public get compHvCount() {
    return this.getNumberAttribute('comp_hv_count');
  }
  public set compHvCount(value: number) {
    this._compHvCount = value;
  }
  public resetCompHvCount() {
    this._compHvCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compHvCountInput() {
    return this._compHvCount;
  }

  // config_exportp_count - computed: false, optional: true, required: false
  private _configExportpCount?: number; 
  public get configExportpCount() {
    return this.getNumberAttribute('config_exportp_count');
  }
  public set configExportpCount(value: number) {
    this._configExportpCount = value;
  }
  public resetConfigExportpCount() {
    this._configExportpCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configExportpCountInput() {
    return this._configExportpCount;
  }

  // config_job_count - computed: false, optional: true, required: false
  private _configJobCount?: number; 
  public get configJobCount() {
    return this.getNumberAttribute('config_job_count');
  }
  public set configJobCount(value: number) {
    this._configJobCount = value;
  }
  public resetConfigJobCount() {
    this._configJobCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configJobCountInput() {
    return this._configJobCount;
  }

  // consistency_checker_app - computed: false, optional: true, required: false
  private _consistencyCheckerApp?: string; 
  public get consistencyCheckerApp() {
    return this.getStringAttribute('consistency_checker_app');
  }
  public set consistencyCheckerApp(value: string) {
    this._consistencyCheckerApp = value;
  }
  public resetConsistencyCheckerApp() {
    this._consistencyCheckerApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consistencyCheckerAppInput() {
    return this._consistencyCheckerApp;
  }

  // contract_count - computed: false, optional: true, required: false
  private _contractCount?: number; 
  public get contractCount() {
    return this.getNumberAttribute('contract_count');
  }
  public set contractCount(value: number) {
    this._contractCount = value;
  }
  public resetContractCount() {
    this._contractCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contractCountInput() {
    return this._contractCount;
  }

  // create_time - computed: false, optional: true, required: false
  private _createTime?: string; 
  public get createTime() {
    return this.getStringAttribute('create_time');
  }
  public set createTime(value: string) {
    this._createTime = value;
  }
  public resetCreateTime() {
    this._createTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeInput() {
    return this._createTime;
  }

  // dns_count - computed: false, optional: true, required: false
  private _dnsCount?: number; 
  public get dnsCount() {
    return this.getNumberAttribute('dns_count');
  }
  public set dnsCount(value: number) {
    this._dnsCount = value;
  }
  public resetDnsCount() {
    this._dnsCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCountInput() {
    return this._dnsCount;
  }

  // domain_group_moid - computed: false, optional: true, required: false
  private _domainGroupMoid?: string; 
  public get domainGroupMoid() {
    return this.getStringAttribute('domain_group_moid');
  }
  public set domainGroupMoid(value: string) {
    this._domainGroupMoid = value;
  }
  public resetDomainGroupMoid() {
    this._domainGroupMoid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainGroupMoidInput() {
    return this._domainGroupMoid;
  }

  // eigrp_count - computed: false, optional: true, required: false
  private _eigrpCount?: number; 
  public get eigrpCount() {
    return this.getNumberAttribute('eigrp_count');
  }
  public set eigrpCount(value: number) {
    this._eigrpCount = value;
  }
  public resetEigrpCount() {
    this._eigrpCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eigrpCountInput() {
    return this._eigrpCount;
  }

  // epg_count - computed: false, optional: true, required: false
  private _epgCount?: number; 
  public get epgCount() {
    return this.getNumberAttribute('epg_count');
  }
  public set epgCount(value: number) {
    this._epgCount = value;
  }
  public resetEpgCount() {
    this._epgCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epgCountInput() {
    return this._epgCount;
  }

  // fabric_module_count - computed: false, optional: true, required: false
  private _fabricModuleCount?: number; 
  public get fabricModuleCount() {
    return this.getNumberAttribute('fabric_module_count');
  }
  public set fabricModuleCount(value: number) {
    this._fabricModuleCount = value;
  }
  public resetFabricModuleCount() {
    this._fabricModuleCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricModuleCountInput() {
    return this._fabricModuleCount;
  }

  // fabric_setupp_count - computed: false, optional: true, required: false
  private _fabricSetuppCount?: number; 
  public get fabricSetuppCount() {
    return this.getNumberAttribute('fabric_setupp_count');
  }
  public set fabricSetuppCount(value: number) {
    this._fabricSetuppCount = value;
  }
  public resetFabricSetuppCount() {
    this._fabricSetuppCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricSetuppCountInput() {
    return this._fabricSetuppCount;
  }

  // fcoe_nport_count - computed: false, optional: true, required: false
  private _fcoeNportCount?: number; 
  public get fcoeNportCount() {
    return this.getNumberAttribute('fcoe_nport_count');
  }
  public set fcoeNportCount(value: number) {
    this._fcoeNportCount = value;
  }
  public resetFcoeNportCount() {
    this._fcoeNportCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fcoeNportCountInput() {
    return this._fcoeNportCount;
  }

  // fcoe_nport_dom_count - computed: false, optional: true, required: false
  private _fcoeNportDomCount?: number; 
  public get fcoeNportDomCount() {
    return this.getNumberAttribute('fcoe_nport_dom_count');
  }
  public set fcoeNportDomCount(value: number) {
    this._fcoeNportDomCount = value;
  }
  public resetFcoeNportDomCount() {
    this._fcoeNportDomCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fcoeNportDomCountInput() {
    return this._fcoeNportDomCount;
  }

  // fcoe_nport_vlan_count - computed: false, optional: true, required: false
  private _fcoeNportVlanCount?: number; 
  public get fcoeNportVlanCount() {
    return this.getNumberAttribute('fcoe_nport_vlan_count');
  }
  public set fcoeNportVlanCount(value: number) {
    this._fcoeNportVlanCount = value;
  }
  public resetFcoeNportVlanCount() {
    this._fcoeNportVlanCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fcoeNportVlanCountInput() {
    return this._fcoeNportVlanCount;
  }

  // fcoe_nport_vsan_count - computed: false, optional: true, required: false
  private _fcoeNportVsanCount?: number; 
  public get fcoeNportVsanCount() {
    return this.getNumberAttribute('fcoe_nport_vsan_count');
  }
  public set fcoeNportVsanCount(value: number) {
    this._fcoeNportVsanCount = value;
  }
  public resetFcoeNportVsanCount() {
    this._fcoeNportVsanCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fcoeNportVsanCountInput() {
    return this._fcoeNportVsanCount;
  }

  // fv_sla_def_count - computed: false, optional: true, required: false
  private _fvSlaDefCount?: number; 
  public get fvSlaDefCount() {
    return this.getNumberAttribute('fv_sla_def_count');
  }
  public set fvSlaDefCount(value: number) {
    this._fvSlaDefCount = value;
  }
  public resetFvSlaDefCount() {
    this._fvSlaDefCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fvSlaDefCountInput() {
    return this._fvSlaDefCount;
  }

  // hsrp_count - computed: false, optional: true, required: false
  private _hsrpCount?: number; 
  public get hsrpCount() {
    return this.getNumberAttribute('hsrp_count');
  }
  public set hsrpCount(value: number) {
    this._hsrpCount = value;
  }
  public resetHsrpCount() {
    this._hsrpCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsrpCountInput() {
    return this._hsrpCount;
  }

  // ibgp_count - computed: false, optional: true, required: false
  private _ibgpCount?: number; 
  public get ibgpCount() {
    return this.getNumberAttribute('ibgp_count');
  }
  public set ibgpCount(value: number) {
    this._ibgpCount = value;
  }
  public resetIbgpCount() {
    this._ibgpCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibgpCountInput() {
    return this._ibgpCount;
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

  // igmp_access_list_count - computed: false, optional: true, required: false
  private _igmpAccessListCount?: number; 
  public get igmpAccessListCount() {
    return this.getNumberAttribute('igmp_access_list_count');
  }
  public set igmpAccessListCount(value: number) {
    this._igmpAccessListCount = value;
  }
  public resetIgmpAccessListCount() {
    this._igmpAccessListCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpAccessListCountInput() {
    return this._igmpAccessListCount;
  }

  // igmp_snoop - computed: false, optional: true, required: false
  private _igmpSnoop?: string; 
  public get igmpSnoop() {
    return this.getStringAttribute('igmp_snoop');
  }
  public set igmpSnoop(value: string) {
    this._igmpSnoop = value;
  }
  public resetIgmpSnoop() {
    this._igmpSnoop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpSnoopInput() {
    return this._igmpSnoop;
  }

  // ip_epg_count - computed: false, optional: true, required: false
  private _ipEpgCount?: number; 
  public get ipEpgCount() {
    return this.getNumberAttribute('ip_epg_count');
  }
  public set ipEpgCount(value: number) {
    this._ipEpgCount = value;
  }
  public resetIpEpgCount() {
    this._ipEpgCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipEpgCountInput() {
    return this._ipEpgCount;
  }

  // is_bgp_route_reflectors_feature_used - computed: false, optional: true, required: false
  private _isBgpRouteReflectorsFeatureUsed?: boolean | cdktf.IResolvable; 
  public get isBgpRouteReflectorsFeatureUsed() {
    return this.getBooleanAttribute('is_bgp_route_reflectors_feature_used');
  }
  public set isBgpRouteReflectorsFeatureUsed(value: boolean | cdktf.IResolvable) {
    this._isBgpRouteReflectorsFeatureUsed = value;
  }
  public resetIsBgpRouteReflectorsFeatureUsed() {
    this._isBgpRouteReflectorsFeatureUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBgpRouteReflectorsFeatureUsedInput() {
    return this._isBgpRouteReflectorsFeatureUsed;
  }

  // is_bridge_domains_feature_used - computed: false, optional: true, required: false
  private _isBridgeDomainsFeatureUsed?: boolean | cdktf.IResolvable; 
  public get isBridgeDomainsFeatureUsed() {
    return this.getBooleanAttribute('is_bridge_domains_feature_used');
  }
  public set isBridgeDomainsFeatureUsed(value: boolean | cdktf.IResolvable) {
    this._isBridgeDomainsFeatureUsed = value;
  }
  public resetIsBridgeDomainsFeatureUsed() {
    this._isBridgeDomainsFeatureUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBridgeDomainsFeatureUsedInput() {
    return this._isBridgeDomainsFeatureUsed;
  }

  // is_common_local_user_name - computed: false, optional: true, required: false
  private _isCommonLocalUserName?: boolean | cdktf.IResolvable; 
  public get isCommonLocalUserName() {
    return this.getBooleanAttribute('is_common_local_user_name');
  }
  public set isCommonLocalUserName(value: boolean | cdktf.IResolvable) {
    this._isCommonLocalUserName = value;
  }
  public resetIsCommonLocalUserName() {
    this._isCommonLocalUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCommonLocalUserNameInput() {
    return this._isCommonLocalUserName;
  }

  // is_contracts_feature_used - computed: false, optional: true, required: false
  private _isContractsFeatureUsed?: boolean | cdktf.IResolvable; 
  public get isContractsFeatureUsed() {
    return this.getBooleanAttribute('is_contracts_feature_used');
  }
  public set isContractsFeatureUsed(value: boolean | cdktf.IResolvable) {
    this._isContractsFeatureUsed = value;
  }
  public resetIsContractsFeatureUsed() {
    this._isContractsFeatureUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isContractsFeatureUsedInput() {
    return this._isContractsFeatureUsed;
  }

  // is_epg_feature_used - computed: false, optional: true, required: false
  private _isEpgFeatureUsed?: boolean | cdktf.IResolvable; 
  public get isEpgFeatureUsed() {
    return this.getBooleanAttribute('is_epg_feature_used');
  }
  public set isEpgFeatureUsed(value: boolean | cdktf.IResolvable) {
    this._isEpgFeatureUsed = value;
  }
  public resetIsEpgFeatureUsed() {
    this._isEpgFeatureUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEpgFeatureUsedInput() {
    return this._isEpgFeatureUsed;
  }

  // is_filters_feature_used - computed: false, optional: true, required: false
  private _isFiltersFeatureUsed?: boolean | cdktf.IResolvable; 
  public get isFiltersFeatureUsed() {
    return this.getBooleanAttribute('is_filters_feature_used');
  }
  public set isFiltersFeatureUsed(value: boolean | cdktf.IResolvable) {
    this._isFiltersFeatureUsed = value;
  }
  public resetIsFiltersFeatureUsed() {
    this._isFiltersFeatureUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFiltersFeatureUsedInput() {
    return this._isFiltersFeatureUsed;
  }

  // is_http_configured - computed: false, optional: true, required: false
  private _isHttpConfigured?: boolean | cdktf.IResolvable; 
  public get isHttpConfigured() {
    return this.getBooleanAttribute('is_http_configured');
  }
  public set isHttpConfigured(value: boolean | cdktf.IResolvable) {
    this._isHttpConfigured = value;
  }
  public resetIsHttpConfigured() {
    this._isHttpConfigured = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHttpConfiguredInput() {
    return this._isHttpConfigured;
  }

  // is_https_configured - computed: false, optional: true, required: false
  private _isHttpsConfigured?: boolean | cdktf.IResolvable; 
  public get isHttpsConfigured() {
    return this.getBooleanAttribute('is_https_configured');
  }
  public set isHttpsConfigured(value: boolean | cdktf.IResolvable) {
    this._isHttpsConfigured = value;
  }
  public resetIsHttpsConfigured() {
    this._isHttpsConfigured = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHttpsConfiguredInput() {
    return this._isHttpsConfigured;
  }

  // is_ntp_feature_used - computed: false, optional: true, required: false
  private _isNtpFeatureUsed?: boolean | cdktf.IResolvable; 
  public get isNtpFeatureUsed() {
    return this.getBooleanAttribute('is_ntp_feature_used');
  }
  public set isNtpFeatureUsed(value: boolean | cdktf.IResolvable) {
    this._isNtpFeatureUsed = value;
  }
  public resetIsNtpFeatureUsed() {
    this._isNtpFeatureUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNtpFeatureUsedInput() {
    return this._isNtpFeatureUsed;
  }

  // is_ptp_feature_used - computed: false, optional: true, required: false
  private _isPtpFeatureUsed?: boolean | cdktf.IResolvable; 
  public get isPtpFeatureUsed() {
    return this.getBooleanAttribute('is_ptp_feature_used');
  }
  public set isPtpFeatureUsed(value: boolean | cdktf.IResolvable) {
    this._isPtpFeatureUsed = value;
  }
  public resetIsPtpFeatureUsed() {
    this._isPtpFeatureUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPtpFeatureUsedInput() {
    return this._isPtpFeatureUsed;
  }

  // is_synce_feature_used - computed: false, optional: true, required: false
  private _isSynceFeatureUsed?: boolean | cdktf.IResolvable; 
  public get isSynceFeatureUsed() {
    return this.getBooleanAttribute('is_synce_feature_used');
  }
  public set isSynceFeatureUsed(value: boolean | cdktf.IResolvable) {
    this._isSynceFeatureUsed = value;
  }
  public resetIsSynceFeatureUsed() {
    this._isSynceFeatureUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSynceFeatureUsedInput() {
    return this._isSynceFeatureUsed;
  }

  // is_tech_support_collected - computed: false, optional: true, required: false
  private _isTechSupportCollected?: string; 
  public get isTechSupportCollected() {
    return this.getStringAttribute('is_tech_support_collected');
  }
  public set isTechSupportCollected(value: string) {
    this._isTechSupportCollected = value;
  }
  public resetIsTechSupportCollected() {
    this._isTechSupportCollected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTechSupportCollectedInput() {
    return this._isTechSupportCollected;
  }

  // is_tenants_feature_used - computed: false, optional: true, required: false
  private _isTenantsFeatureUsed?: boolean | cdktf.IResolvable; 
  public get isTenantsFeatureUsed() {
    return this.getBooleanAttribute('is_tenants_feature_used');
  }
  public set isTenantsFeatureUsed(value: boolean | cdktf.IResolvable) {
    this._isTenantsFeatureUsed = value;
  }
  public resetIsTenantsFeatureUsed() {
    this._isTenantsFeatureUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTenantsFeatureUsedInput() {
    return this._isTenantsFeatureUsed;
  }

  // is_vrfs_feature_used - computed: false, optional: true, required: false
  private _isVrfsFeatureUsed?: boolean | cdktf.IResolvable; 
  public get isVrfsFeatureUsed() {
    return this.getBooleanAttribute('is_vrfs_feature_used');
  }
  public set isVrfsFeatureUsed(value: boolean | cdktf.IResolvable) {
    this._isVrfsFeatureUsed = value;
  }
  public resetIsVrfsFeatureUsed() {
    this._isVrfsFeatureUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isVrfsFeatureUsedInput() {
    return this._isVrfsFeatureUsed;
  }

  // isis_count - computed: false, optional: true, required: false
  private _isisCount?: number; 
  public get isisCount() {
    return this.getNumberAttribute('isis_count');
  }
  public set isisCount(value: number) {
    this._isisCount = value;
  }
  public resetIsisCount() {
    this._isisCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisCountInput() {
    return this._isisCount;
  }

  // l2_multicast - computed: false, optional: true, required: false
  private _l2Multicast?: string; 
  public get l2Multicast() {
    return this.getStringAttribute('l2_multicast');
  }
  public set l2Multicast(value: string) {
    this._l2Multicast = value;
  }
  public resetL2Multicast() {
    this._l2Multicast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2MulticastInput() {
    return this._l2Multicast;
  }

  // latency_ptp_mode - computed: false, optional: true, required: false
  private _latencyPtpMode?: string; 
  public get latencyPtpMode() {
    return this.getStringAttribute('latency_ptp_mode');
  }
  public set latencyPtpMode(value: string) {
    this._latencyPtpMode = value;
  }
  public resetLatencyPtpMode() {
    this._latencyPtpMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyPtpModeInput() {
    return this._latencyPtpMode;
  }

  // leaf_count - computed: false, optional: true, required: false
  private _leafCount?: number; 
  public get leafCount() {
    return this.getNumberAttribute('leaf_count');
  }
  public set leafCount(value: number) {
    this._leafCount = value;
  }
  public resetLeafCount() {
    this._leafCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leafCountInput() {
    return this._leafCount;
  }

  // local_username_count - computed: false, optional: true, required: false
  private _localUsernameCount?: number; 
  public get localUsernameCount() {
    return this.getNumberAttribute('local_username_count');
  }
  public set localUsernameCount(value: number) {
    this._localUsernameCount = value;
  }
  public resetLocalUsernameCount() {
    this._localUsernameCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localUsernameCountInput() {
    return this._localUsernameCount;
  }

  // login_block_duration - computed: false, optional: true, required: false
  private _loginBlockDuration?: number; 
  public get loginBlockDuration() {
    return this.getNumberAttribute('login_block_duration');
  }
  public set loginBlockDuration(value: number) {
    this._loginBlockDuration = value;
  }
  public resetLoginBlockDuration() {
    this._loginBlockDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginBlockDurationInput() {
    return this._loginBlockDuration;
  }

  // login_max_failed_attempts - computed: false, optional: true, required: false
  private _loginMaxFailedAttempts?: number; 
  public get loginMaxFailedAttempts() {
    return this.getNumberAttribute('login_max_failed_attempts');
  }
  public set loginMaxFailedAttempts(value: number) {
    this._loginMaxFailedAttempts = value;
  }
  public resetLoginMaxFailedAttempts() {
    this._loginMaxFailedAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginMaxFailedAttemptsInput() {
    return this._loginMaxFailedAttempts;
  }

  // login_max_failed_attempts_window - computed: false, optional: true, required: false
  private _loginMaxFailedAttemptsWindow?: number; 
  public get loginMaxFailedAttemptsWindow() {
    return this.getNumberAttribute('login_max_failed_attempts_window');
  }
  public set loginMaxFailedAttemptsWindow(value: number) {
    this._loginMaxFailedAttemptsWindow = value;
  }
  public resetLoginMaxFailedAttemptsWindow() {
    this._loginMaxFailedAttemptsWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginMaxFailedAttemptsWindowInput() {
    return this._loginMaxFailedAttemptsWindow;
  }

  // maintenance_mode_count - computed: false, optional: true, required: false
  private _maintenanceModeCount?: number; 
  public get maintenanceModeCount() {
    return this.getNumberAttribute('maintenance_mode_count');
  }
  public set maintenanceModeCount(value: number) {
    this._maintenanceModeCount = value;
  }
  public resetMaintenanceModeCount() {
    this._maintenanceModeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceModeCountInput() {
    return this._maintenanceModeCount;
  }

  // management_over_v6_count - computed: false, optional: true, required: false
  private _managementOverV6Count?: number; 
  public get managementOverV6Count() {
    return this.getNumberAttribute('management_over_v6_count');
  }
  public set managementOverV6Count(value: number) {
    this._managementOverV6Count = value;
  }
  public resetManagementOverV6Count() {
    this._managementOverV6Count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementOverV6CountInput() {
    return this._managementOverV6Count;
  }

  // microsoft_useg_vmm_ep_pd_count - computed: false, optional: true, required: false
  private _microsoftUsegVmmEpPdCount?: number; 
  public get microsoftUsegVmmEpPdCount() {
    return this.getNumberAttribute('microsoft_useg_vmm_ep_pd_count');
  }
  public set microsoftUsegVmmEpPdCount(value: number) {
    this._microsoftUsegVmmEpPdCount = value;
  }
  public resetMicrosoftUsegVmmEpPdCount() {
    this._microsoftUsegVmmEpPdCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftUsegVmmEpPdCountInput() {
    return this._microsoftUsegVmmEpPdCount;
  }

  // mod_time - computed: false, optional: true, required: false
  private _modTime?: string; 
  public get modTime() {
    return this.getStringAttribute('mod_time');
  }
  public set modTime(value: string) {
    this._modTime = value;
  }
  public resetModTime() {
    this._modTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modTimeInput() {
    return this._modTime;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // net_flow_count - computed: false, optional: true, required: false
  private _netFlowCount?: number; 
  public get netFlowCount() {
    return this.getNumberAttribute('net_flow_count');
  }
  public set netFlowCount(value: number) {
    this._netFlowCount = value;
  }
  public resetNetFlowCount() {
    this._netFlowCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netFlowCountInput() {
    return this._netFlowCount;
  }

  // nir - computed: false, optional: true, required: false
  private _nir?: string; 
  public get nir() {
    return this.getStringAttribute('nir');
  }
  public set nir(value: string) {
    this._nir = value;
  }
  public resetNir() {
    this._nir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nirInput() {
    return this._nir;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // open_stack - computed: false, optional: true, required: false
  private _openStack?: string; 
  public get openStack() {
    return this.getStringAttribute('open_stack');
  }
  public set openStack(value: string) {
    this._openStack = value;
  }
  public resetOpenStack() {
    this._openStack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openStackInput() {
    return this._openStack;
  }

  // opflex_kubernetes_count - computed: false, optional: true, required: false
  private _opflexKubernetesCount?: number; 
  public get opflexKubernetesCount() {
    return this.getNumberAttribute('opflex_kubernetes_count');
  }
  public set opflexKubernetesCount(value: number) {
    this._opflexKubernetesCount = value;
  }
  public resetOpflexKubernetesCount() {
    this._opflexKubernetesCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opflexKubernetesCountInput() {
    return this._opflexKubernetesCount;
  }

  // ospf_count - computed: false, optional: true, required: false
  private _ospfCount?: number; 
  public get ospfCount() {
    return this.getNumberAttribute('ospf_count');
  }
  public set ospfCount(value: number) {
    this._ospfCount = value;
  }
  public resetOspfCount() {
    this._ospfCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfCountInput() {
    return this._ospfCount;
  }

  // owners - computed: false, optional: true, required: false
  private _owners?: string[]; 
  public get owners() {
    return this.getListAttribute('owners');
  }
  public set owners(value: string[]) {
    this._owners = value;
  }
  public resetOwners() {
    this._owners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownersInput() {
    return this._owners;
  }

  // password_history_count - computed: false, optional: true, required: false
  private _passwordHistoryCount?: number; 
  public get passwordHistoryCount() {
    return this.getNumberAttribute('password_history_count');
  }
  public set passwordHistoryCount(value: number) {
    this._passwordHistoryCount = value;
  }
  public resetPasswordHistoryCount() {
    this._passwordHistoryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordHistoryCountInput() {
    return this._passwordHistoryCount;
  }

  // password_strength_check - computed: false, optional: true, required: false
  private _passwordStrengthCheck?: string; 
  public get passwordStrengthCheck() {
    return this.getStringAttribute('password_strength_check');
  }
  public set passwordStrengthCheck(value: string) {
    this._passwordStrengthCheck = value;
  }
  public resetPasswordStrengthCheck() {
    this._passwordStrengthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordStrengthCheckInput() {
    return this._passwordStrengthCheck;
  }

  // password_strength_profile_count - computed: false, optional: true, required: false
  private _passwordStrengthProfileCount?: number; 
  public get passwordStrengthProfileCount() {
    return this.getNumberAttribute('password_strength_profile_count');
  }
  public set passwordStrengthProfileCount(value: number) {
    this._passwordStrengthProfileCount = value;
  }
  public resetPasswordStrengthProfileCount() {
    this._passwordStrengthProfileCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordStrengthProfileCountInput() {
    return this._passwordStrengthProfileCount;
  }

  // poe_count - computed: false, optional: true, required: false
  private _poeCount?: number; 
  public get poeCount() {
    return this.getNumberAttribute('poe_count');
  }
  public set poeCount(value: number) {
    this._poeCount = value;
  }
  public resetPoeCount() {
    this._poeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poeCountInput() {
    return this._poeCount;
  }

  // port_security_count - computed: false, optional: true, required: false
  private _portSecurityCount?: number; 
  public get portSecurityCount() {
    return this.getNumberAttribute('port_security_count');
  }
  public set portSecurityCount(value: number) {
    this._portSecurityCount = value;
  }
  public resetPortSecurityCount() {
    this._portSecurityCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSecurityCountInput() {
    return this._portSecurityCount;
  }

  // qin_vni_tunnel_count - computed: false, optional: true, required: false
  private _qinVniTunnelCount?: number; 
  public get qinVniTunnelCount() {
    return this.getNumberAttribute('qin_vni_tunnel_count');
  }
  public set qinVniTunnelCount(value: number) {
    this._qinVniTunnelCount = value;
  }
  public resetQinVniTunnelCount() {
    this._qinVniTunnelCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qinVniTunnelCountInput() {
    return this._qinVniTunnelCount;
  }

  // qos_cong_count - computed: false, optional: true, required: false
  private _qosCongCount?: number; 
  public get qosCongCount() {
    return this.getNumberAttribute('qos_cong_count');
  }
  public set qosCongCount(value: number) {
    this._qosCongCount = value;
  }
  public resetQosCongCount() {
    this._qosCongCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosCongCountInput() {
    return this._qosCongCount;
  }

  // qos_pfc_pol_count - computed: false, optional: true, required: false
  private _qosPfcPolCount?: number; 
  public get qosPfcPolCount() {
    return this.getNumberAttribute('qos_pfc_pol_count');
  }
  public set qosPfcPolCount(value: number) {
    this._qosPfcPolCount = value;
  }
  public resetQosPfcPolCount() {
    this._qosPfcPolCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosPfcPolCountInput() {
    return this._qosPfcPolCount;
  }

  // realm_count - computed: false, optional: true, required: false
  private _realmCount?: number; 
  public get realmCount() {
    return this.getNumberAttribute('realm_count');
  }
  public set realmCount(value: number) {
    this._realmCount = value;
  }
  public resetRealmCount() {
    this._realmCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmCountInput() {
    return this._realmCount;
  }

  // record_type - computed: false, optional: true, required: false
  private _recordType?: string; 
  public get recordType() {
    return this.getStringAttribute('record_type');
  }
  public set recordType(value: string) {
    this._recordType = value;
  }
  public resetRecordType() {
    this._recordType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTypeInput() {
    return this._recordType;
  }

  // record_version - computed: false, optional: true, required: false
  private _recordVersion?: string; 
  public get recordVersion() {
    return this.getStringAttribute('record_version');
  }
  public set recordVersion(value: string) {
    this._recordVersion = value;
  }
  public resetRecordVersion() {
    this._recordVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordVersionInput() {
    return this._recordVersion;
  }

  // remote_leaf_count - computed: false, optional: true, required: false
  private _remoteLeafCount?: number; 
  public get remoteLeafCount() {
    return this.getNumberAttribute('remote_leaf_count');
  }
  public set remoteLeafCount(value: number) {
    this._remoteLeafCount = value;
  }
  public resetRemoteLeafCount() {
    this._remoteLeafCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteLeafCountInput() {
    return this._remoteLeafCount;
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataIntersightNiatelemetryNiaFeatureUsageResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // scvmm_count - computed: false, optional: true, required: false
  private _scvmmCount?: number; 
  public get scvmmCount() {
    return this.getNumberAttribute('scvmm_count');
  }
  public set scvmmCount(value: number) {
    this._scvmmCount = value;
  }
  public resetScvmmCount() {
    this._scvmmCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scvmmCountInput() {
    return this._scvmmCount;
  }

  // shared_l3_out_count - computed: false, optional: true, required: false
  private _sharedL3OutCount?: number; 
  public get sharedL3OutCount() {
    return this.getNumberAttribute('shared_l3_out_count');
  }
  public set sharedL3OutCount(value: number) {
    this._sharedL3OutCount = value;
  }
  public resetSharedL3OutCount() {
    this._sharedL3OutCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedL3OutCountInput() {
    return this._sharedL3OutCount;
  }

  // shared_scope - computed: false, optional: true, required: false
  private _sharedScope?: string; 
  public get sharedScope() {
    return this.getStringAttribute('shared_scope');
  }
  public set sharedScope(value: string) {
    this._sharedScope = value;
  }
  public resetSharedScope() {
    this._sharedScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedScopeInput() {
    return this._sharedScope;
  }

  // site_name - computed: false, optional: true, required: false
  private _siteName?: string; 
  public get siteName() {
    return this.getStringAttribute('site_name');
  }
  public set siteName(value: string) {
    this._siteName = value;
  }
  public resetSiteName() {
    this._siteName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteNameInput() {
    return this._siteName;
  }

  // smart_call_home - computed: false, optional: true, required: false
  private _smartCallHome?: string; 
  public get smartCallHome() {
    return this.getStringAttribute('smart_call_home');
  }
  public set smartCallHome(value: string) {
    this._smartCallHome = value;
  }
  public resetSmartCallHome() {
    this._smartCallHome = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartCallHomeInput() {
    return this._smartCallHome;
  }

  // snapshot_count - computed: false, optional: true, required: false
  private _snapshotCount?: number; 
  public get snapshotCount() {
    return this.getNumberAttribute('snapshot_count');
  }
  public set snapshotCount(value: number) {
    this._snapshotCount = value;
  }
  public resetSnapshotCount() {
    this._snapshotCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotCountInput() {
    return this._snapshotCount;
  }

  // snmp - computed: false, optional: true, required: false
  private _snmp?: string; 
  public get snmp() {
    return this.getStringAttribute('snmp');
  }
  public set snmp(value: string) {
    this._snmp = value;
  }
  public resetSnmp() {
    this._snmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpInput() {
    return this._snmp;
  }

  // snmp_community_access_count - computed: false, optional: true, required: false
  private _snmpCommunityAccessCount?: number; 
  public get snmpCommunityAccessCount() {
    return this.getNumberAttribute('snmp_community_access_count');
  }
  public set snmpCommunityAccessCount(value: number) {
    this._snmpCommunityAccessCount = value;
  }
  public resetSnmpCommunityAccessCount() {
    this._snmpCommunityAccessCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpCommunityAccessCountInput() {
    return this._snmpCommunityAccessCount;
  }

  // snmp_group_count - computed: false, optional: true, required: false
  private _snmpGroupCount?: number; 
  public get snmpGroupCount() {
    return this.getNumberAttribute('snmp_group_count');
  }
  public set snmpGroupCount(value: number) {
    this._snmpGroupCount = value;
  }
  public resetSnmpGroupCount() {
    this._snmpGroupCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpGroupCountInput() {
    return this._snmpGroupCount;
  }

  // snmp_trap_count - computed: false, optional: true, required: false
  private _snmpTrapCount?: number; 
  public get snmpTrapCount() {
    return this.getNumberAttribute('snmp_trap_count');
  }
  public set snmpTrapCount(value: number) {
    this._snmpTrapCount = value;
  }
  public resetSnmpTrapCount() {
    this._snmpTrapCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpTrapCountInput() {
    return this._snmpTrapCount;
  }

  // snmp_v3_count - computed: false, optional: true, required: false
  private _snmpV3Count?: number; 
  public get snmpV3Count() {
    return this.getNumberAttribute('snmp_v3_count');
  }
  public set snmpV3Count(value: number) {
    this._snmpV3Count = value;
  }
  public resetSnmpV3Count() {
    this._snmpV3Count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpV3CountInput() {
    return this._snmpV3Count;
  }

  // span_count - computed: false, optional: true, required: false
  private _spanCount?: number; 
  public get spanCount() {
    return this.getNumberAttribute('span_count');
  }
  public set spanCount(value: number) {
    this._spanCount = value;
  }
  public resetSpanCount() {
    this._spanCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanCountInput() {
    return this._spanCount;
  }

  // span_dst_count - computed: false, optional: true, required: false
  private _spanDstCount?: number; 
  public get spanDstCount() {
    return this.getNumberAttribute('span_dst_count');
  }
  public set spanDstCount(value: number) {
    this._spanDstCount = value;
  }
  public resetSpanDstCount() {
    this._spanDstCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanDstCountInput() {
    return this._spanDstCount;
  }

  // span_src_count - computed: false, optional: true, required: false
  private _spanSrcCount?: number; 
  public get spanSrcCount() {
    return this.getNumberAttribute('span_src_count');
  }
  public set spanSrcCount(value: number) {
    this._spanSrcCount = value;
  }
  public resetSpanSrcCount() {
    this._spanSrcCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanSrcCountInput() {
    return this._spanSrcCount;
  }

  // spine_count - computed: false, optional: true, required: false
  private _spineCount?: number; 
  public get spineCount() {
    return this.getNumberAttribute('spine_count');
  }
  public set spineCount(value: number) {
    this._spineCount = value;
  }
  public resetSpineCount() {
    this._spineCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spineCountInput() {
    return this._spineCount;
  }

  // ssh_over_v6_count - computed: false, optional: true, required: false
  private _sshOverV6Count?: number; 
  public get sshOverV6Count() {
    return this.getNumberAttribute('ssh_over_v6_count');
  }
  public set sshOverV6Count(value: number) {
    this._sshOverV6Count = value;
  }
  public resetSshOverV6Count() {
    this._sshOverV6Count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshOverV6CountInput() {
    return this._sshOverV6Count;
  }

  // ssh_v2_count - computed: false, optional: true, required: false
  private _sshV2Count?: number; 
  public get sshV2Count() {
    return this.getNumberAttribute('ssh_v2_count');
  }
  public set sshV2Count(value: number) {
    this._sshV2Count = value;
  }
  public resetSshV2Count() {
    this._sshV2Count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshV2CountInput() {
    return this._sshV2Count;
  }

  // supervisor_module_count - computed: false, optional: true, required: false
  private _supervisorModuleCount?: number; 
  public get supervisorModuleCount() {
    return this.getNumberAttribute('supervisor_module_count');
  }
  public set supervisorModuleCount(value: number) {
    this._supervisorModuleCount = value;
  }
  public resetSupervisorModuleCount() {
    this._supervisorModuleCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supervisorModuleCountInput() {
    return this._supervisorModuleCount;
  }

  // syslog_group_count - computed: false, optional: true, required: false
  private _syslogGroupCount?: number; 
  public get syslogGroupCount() {
    return this.getNumberAttribute('syslog_group_count');
  }
  public set syslogGroupCount(value: number) {
    this._syslogGroupCount = value;
  }
  public resetSyslogGroupCount() {
    this._syslogGroupCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogGroupCountInput() {
    return this._syslogGroupCount;
  }

  // syslog_over_v6_count - computed: false, optional: true, required: false
  private _syslogOverV6Count?: number; 
  public get syslogOverV6Count() {
    return this.getNumberAttribute('syslog_over_v6_count');
  }
  public set syslogOverV6Count(value: number) {
    this._syslogOverV6Count = value;
  }
  public resetSyslogOverV6Count() {
    this._syslogOverV6Count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogOverV6CountInput() {
    return this._syslogOverV6Count;
  }

  // system_controller_count - computed: false, optional: true, required: false
  private _systemControllerCount?: number; 
  public get systemControllerCount() {
    return this.getNumberAttribute('system_controller_count');
  }
  public set systemControllerCount(value: number) {
    this._systemControllerCount = value;
  }
  public resetSystemControllerCount() {
    this._systemControllerCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemControllerCountInput() {
    return this._systemControllerCount;
  }

  // tacacs_group_count - computed: false, optional: true, required: false
  private _tacacsGroupCount?: number; 
  public get tacacsGroupCount() {
    return this.getNumberAttribute('tacacs_group_count');
  }
  public set tacacsGroupCount(value: number) {
    this._tacacsGroupCount = value;
  }
  public resetTacacsGroupCount() {
    this._tacacsGroupCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacacsGroupCountInput() {
    return this._tacacsGroupCount;
  }

  // tenant_count - computed: false, optional: true, required: false
  private _tenantCount?: number; 
  public get tenantCount() {
    return this.getNumberAttribute('tenant_count');
  }
  public set tenantCount(value: number) {
    this._tenantCount = value;
  }
  public resetTenantCount() {
    this._tenantCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantCountInput() {
    return this._tenantCount;
  }

  // tier_two_leaf_count - computed: false, optional: true, required: false
  private _tierTwoLeafCount?: number; 
  public get tierTwoLeafCount() {
    return this.getNumberAttribute('tier_two_leaf_count');
  }
  public set tierTwoLeafCount(value: number) {
    this._tierTwoLeafCount = value;
  }
  public resetTierTwoLeafCount() {
    this._tierTwoLeafCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierTwoLeafCountInput() {
    return this._tierTwoLeafCount;
  }

  // total_critical_faults - computed: false, optional: true, required: false
  private _totalCriticalFaults?: number; 
  public get totalCriticalFaults() {
    return this.getNumberAttribute('total_critical_faults');
  }
  public set totalCriticalFaults(value: number) {
    this._totalCriticalFaults = value;
  }
  public resetTotalCriticalFaults() {
    this._totalCriticalFaults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalCriticalFaultsInput() {
    return this._totalCriticalFaults;
  }

  // twamp - computed: false, optional: true, required: false
  private _twamp?: string; 
  public get twamp() {
    return this.getStringAttribute('twamp');
  }
  public set twamp(value: string) {
    this._twamp = value;
  }
  public resetTwamp() {
    this._twamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twampInput() {
    return this._twamp;
  }

  // useg - computed: false, optional: true, required: false
  private _useg?: string; 
  public get useg() {
    return this.getStringAttribute('useg');
  }
  public set useg(value: string) {
    this._useg = value;
  }
  public resetUseg() {
    this._useg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usegInput() {
    return this._useg;
  }

  // vm_ware_vds_count - computed: false, optional: true, required: false
  private _vmWareVdsCount?: number; 
  public get vmWareVdsCount() {
    return this.getNumberAttribute('vm_ware_vds_count');
  }
  public set vmWareVdsCount(value: number) {
    this._vmWareVdsCount = value;
  }
  public resetVmWareVdsCount() {
    this._vmWareVdsCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmWareVdsCountInput() {
    return this._vmWareVdsCount;
  }

  // vmm_ctrlrp_count - computed: false, optional: true, required: false
  private _vmmCtrlrpCount?: number; 
  public get vmmCtrlrpCount() {
    return this.getNumberAttribute('vmm_ctrlrp_count');
  }
  public set vmmCtrlrpCount(value: number) {
    this._vmmCtrlrpCount = value;
  }
  public resetVmmCtrlrpCount() {
    this._vmmCtrlrpCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmmCtrlrpCountInput() {
    return this._vmmCtrlrpCount;
  }

  // vmm_domp_count - computed: false, optional: true, required: false
  private _vmmDompCount?: number; 
  public get vmmDompCount() {
    return this.getNumberAttribute('vmm_domp_count');
  }
  public set vmmDompCount(value: number) {
    this._vmmDompCount = value;
  }
  public resetVmmDompCount() {
    this._vmmDompCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmmDompCountInput() {
    return this._vmmDompCount;
  }

  // vmm_ep_pd_count - computed: false, optional: true, required: false
  private _vmmEpPdCount?: number; 
  public get vmmEpPdCount() {
    return this.getNumberAttribute('vmm_ep_pd_count');
  }
  public set vmmEpPdCount(value: number) {
    this._vmmEpPdCount = value;
  }
  public resetVmmEpPdCount() {
    this._vmmEpPdCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmmEpPdCountInput() {
    return this._vmmEpPdCount;
  }

  // vnsm_dev_count - computed: false, optional: true, required: false
  private _vnsmDevCount?: number; 
  public get vnsmDevCount() {
    return this.getNumberAttribute('vnsm_dev_count');
  }
  public set vnsmDevCount(value: number) {
    this._vnsmDevCount = value;
  }
  public resetVnsmDevCount() {
    this._vnsmDevCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnsmDevCountInput() {
    return this._vnsmDevCount;
  }

  // vpod_count - computed: false, optional: true, required: false
  private _vpodCount?: number; 
  public get vpodCount() {
    return this.getNumberAttribute('vpod_count');
  }
  public set vpodCount(value: number) {
    this._vpodCount = value;
  }
  public resetVpodCount() {
    this._vpodCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpodCountInput() {
    return this._vpodCount;
  }

  // webtoken_timeout_seconds - computed: false, optional: true, required: false
  private _webtokenTimeoutSeconds?: number; 
  public get webtokenTimeoutSeconds() {
    return this.getNumberAttribute('webtoken_timeout_seconds');
  }
  public set webtokenTimeoutSeconds(value: number) {
    this._webtokenTimeoutSeconds = value;
  }
  public resetWebtokenTimeoutSeconds() {
    this._webtokenTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webtokenTimeoutSecondsInput() {
    return this._webtokenTimeoutSeconds;
  }

  // ancestors - computed: false, optional: true, required: false
  private _ancestors = new DataIntersightNiatelemetryNiaFeatureUsageAncestorsList(this, "ancestors", false);
  public get ancestors() {
    return this._ancestors;
  }
  public putAncestors(value: DataIntersightNiatelemetryNiaFeatureUsageAncestors[] | cdktf.IResolvable) {
    this._ancestors.internalValue = value;
  }
  public resetAncestors() {
    this._ancestors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorsInput() {
    return this._ancestors.internalValue;
  }

  // parent - computed: false, optional: true, required: false
  private _parent = new DataIntersightNiatelemetryNiaFeatureUsageParentOutputReference(this, "parent");
  public get parent() {
    return this._parent;
  }
  public putParent(value: DataIntersightNiatelemetryNiaFeatureUsageParent) {
    this._parent.internalValue = value;
  }
  public resetParent() {
    this._parent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent.internalValue;
  }

  // permission_resources - computed: false, optional: true, required: false
  private _permissionResources = new DataIntersightNiatelemetryNiaFeatureUsagePermissionResourcesList(this, "permission_resources", false);
  public get permissionResources() {
    return this._permissionResources;
  }
  public putPermissionResources(value: DataIntersightNiatelemetryNiaFeatureUsagePermissionResources[] | cdktf.IResolvable) {
    this._permissionResources.internalValue = value;
  }
  public resetPermissionResources() {
    this._permissionResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionResourcesInput() {
    return this._permissionResources.internalValue;
  }

  // registered_device - computed: false, optional: true, required: false
  private _registeredDevice = new DataIntersightNiatelemetryNiaFeatureUsageRegisteredDeviceOutputReference(this, "registered_device");
  public get registeredDevice() {
    return this._registeredDevice;
  }
  public putRegisteredDevice(value: DataIntersightNiatelemetryNiaFeatureUsageRegisteredDevice) {
    this._registeredDevice.internalValue = value;
  }
  public resetRegisteredDevice() {
    this._registeredDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registeredDeviceInput() {
    return this._registeredDevice.internalValue;
  }

  // smart_license - computed: false, optional: true, required: false
  private _smartLicense = new DataIntersightNiatelemetryNiaFeatureUsageSmartLicenseOutputReference(this, "smart_license");
  public get smartLicense() {
    return this._smartLicense;
  }
  public putSmartLicense(value: DataIntersightNiatelemetryNiaFeatureUsageSmartLicense) {
    this._smartLicense.internalValue = value;
  }
  public resetSmartLicense() {
    this._smartLicense.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartLicenseInput() {
    return this._smartLicense.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataIntersightNiatelemetryNiaFeatureUsageTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataIntersightNiatelemetryNiaFeatureUsageTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // version_context - computed: false, optional: true, required: false
  private _versionContext = new DataIntersightNiatelemetryNiaFeatureUsageVersionContextOutputReference(this, "version_context");
  public get versionContext() {
    return this._versionContext;
  }
  public putVersionContext(value: DataIntersightNiatelemetryNiaFeatureUsageVersionContext) {
    this._versionContext.internalValue = value;
  }
  public resetVersionContext() {
    this._versionContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionContextInput() {
    return this._versionContext.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aaa_ldap_provider_count: cdktf.numberToTerraform(this._aaaLdapProviderCount),
      aaa_radius_provider_count: cdktf.numberToTerraform(this._aaaRadiusProviderCount),
      aaa_tacacs_provider_count: cdktf.numberToTerraform(this._aaaTacacsProviderCount),
      account_moid: cdktf.stringToTerraform(this._accountMoid),
      additional_properties: cdktf.stringToTerraform(this._additionalProperties),
      apic_cluster_health: cdktf.stringToTerraform(this._apicClusterHealth),
      apic_count: cdktf.numberToTerraform(this._apicCount),
      apic_is_telnet_enabled: cdktf.booleanToTerraform(this._apicIsTelnetEnabled),
      apic_ntp_count: cdktf.numberToTerraform(this._apicNtpCount),
      apic_snmp_community_count: cdktf.numberToTerraform(this._apicSnmpCommunityCount),
      apic_sys_log_grp_count: cdktf.numberToTerraform(this._apicSysLogGrpCount),
      apic_sys_log_src_count: cdktf.numberToTerraform(this._apicSysLogSrcCount),
      app_center_count: cdktf.numberToTerraform(this._appCenterCount),
      ave: cdktf.stringToTerraform(this._ave),
      bd_count: cdktf.numberToTerraform(this._bdCount),
      callhome_smart_group_count: cdktf.numberToTerraform(this._callhomeSmartGroupCount),
      class_id: cdktf.stringToTerraform(this._classId),
      cloud_sec_peer_count: cdktf.numberToTerraform(this._cloudSecPeerCount),
      cloud_tenant_count: cdktf.numberToTerraform(this._cloudTenantCount),
      comp_hv_count: cdktf.numberToTerraform(this._compHvCount),
      config_exportp_count: cdktf.numberToTerraform(this._configExportpCount),
      config_job_count: cdktf.numberToTerraform(this._configJobCount),
      consistency_checker_app: cdktf.stringToTerraform(this._consistencyCheckerApp),
      contract_count: cdktf.numberToTerraform(this._contractCount),
      create_time: cdktf.stringToTerraform(this._createTime),
      dns_count: cdktf.numberToTerraform(this._dnsCount),
      domain_group_moid: cdktf.stringToTerraform(this._domainGroupMoid),
      eigrp_count: cdktf.numberToTerraform(this._eigrpCount),
      epg_count: cdktf.numberToTerraform(this._epgCount),
      fabric_module_count: cdktf.numberToTerraform(this._fabricModuleCount),
      fabric_setupp_count: cdktf.numberToTerraform(this._fabricSetuppCount),
      fcoe_nport_count: cdktf.numberToTerraform(this._fcoeNportCount),
      fcoe_nport_dom_count: cdktf.numberToTerraform(this._fcoeNportDomCount),
      fcoe_nport_vlan_count: cdktf.numberToTerraform(this._fcoeNportVlanCount),
      fcoe_nport_vsan_count: cdktf.numberToTerraform(this._fcoeNportVsanCount),
      fv_sla_def_count: cdktf.numberToTerraform(this._fvSlaDefCount),
      hsrp_count: cdktf.numberToTerraform(this._hsrpCount),
      ibgp_count: cdktf.numberToTerraform(this._ibgpCount),
      id: cdktf.stringToTerraform(this._id),
      igmp_access_list_count: cdktf.numberToTerraform(this._igmpAccessListCount),
      igmp_snoop: cdktf.stringToTerraform(this._igmpSnoop),
      ip_epg_count: cdktf.numberToTerraform(this._ipEpgCount),
      is_bgp_route_reflectors_feature_used: cdktf.booleanToTerraform(this._isBgpRouteReflectorsFeatureUsed),
      is_bridge_domains_feature_used: cdktf.booleanToTerraform(this._isBridgeDomainsFeatureUsed),
      is_common_local_user_name: cdktf.booleanToTerraform(this._isCommonLocalUserName),
      is_contracts_feature_used: cdktf.booleanToTerraform(this._isContractsFeatureUsed),
      is_epg_feature_used: cdktf.booleanToTerraform(this._isEpgFeatureUsed),
      is_filters_feature_used: cdktf.booleanToTerraform(this._isFiltersFeatureUsed),
      is_http_configured: cdktf.booleanToTerraform(this._isHttpConfigured),
      is_https_configured: cdktf.booleanToTerraform(this._isHttpsConfigured),
      is_ntp_feature_used: cdktf.booleanToTerraform(this._isNtpFeatureUsed),
      is_ptp_feature_used: cdktf.booleanToTerraform(this._isPtpFeatureUsed),
      is_synce_feature_used: cdktf.booleanToTerraform(this._isSynceFeatureUsed),
      is_tech_support_collected: cdktf.stringToTerraform(this._isTechSupportCollected),
      is_tenants_feature_used: cdktf.booleanToTerraform(this._isTenantsFeatureUsed),
      is_vrfs_feature_used: cdktf.booleanToTerraform(this._isVrfsFeatureUsed),
      isis_count: cdktf.numberToTerraform(this._isisCount),
      l2_multicast: cdktf.stringToTerraform(this._l2Multicast),
      latency_ptp_mode: cdktf.stringToTerraform(this._latencyPtpMode),
      leaf_count: cdktf.numberToTerraform(this._leafCount),
      local_username_count: cdktf.numberToTerraform(this._localUsernameCount),
      login_block_duration: cdktf.numberToTerraform(this._loginBlockDuration),
      login_max_failed_attempts: cdktf.numberToTerraform(this._loginMaxFailedAttempts),
      login_max_failed_attempts_window: cdktf.numberToTerraform(this._loginMaxFailedAttemptsWindow),
      maintenance_mode_count: cdktf.numberToTerraform(this._maintenanceModeCount),
      management_over_v6_count: cdktf.numberToTerraform(this._managementOverV6Count),
      microsoft_useg_vmm_ep_pd_count: cdktf.numberToTerraform(this._microsoftUsegVmmEpPdCount),
      mod_time: cdktf.stringToTerraform(this._modTime),
      moid: cdktf.stringToTerraform(this._moid),
      net_flow_count: cdktf.numberToTerraform(this._netFlowCount),
      nir: cdktf.stringToTerraform(this._nir),
      object_type: cdktf.stringToTerraform(this._objectType),
      open_stack: cdktf.stringToTerraform(this._openStack),
      opflex_kubernetes_count: cdktf.numberToTerraform(this._opflexKubernetesCount),
      ospf_count: cdktf.numberToTerraform(this._ospfCount),
      owners: cdktf.listMapper(cdktf.stringToTerraform, false)(this._owners),
      password_history_count: cdktf.numberToTerraform(this._passwordHistoryCount),
      password_strength_check: cdktf.stringToTerraform(this._passwordStrengthCheck),
      password_strength_profile_count: cdktf.numberToTerraform(this._passwordStrengthProfileCount),
      poe_count: cdktf.numberToTerraform(this._poeCount),
      port_security_count: cdktf.numberToTerraform(this._portSecurityCount),
      qin_vni_tunnel_count: cdktf.numberToTerraform(this._qinVniTunnelCount),
      qos_cong_count: cdktf.numberToTerraform(this._qosCongCount),
      qos_pfc_pol_count: cdktf.numberToTerraform(this._qosPfcPolCount),
      realm_count: cdktf.numberToTerraform(this._realmCount),
      record_type: cdktf.stringToTerraform(this._recordType),
      record_version: cdktf.stringToTerraform(this._recordVersion),
      remote_leaf_count: cdktf.numberToTerraform(this._remoteLeafCount),
      scvmm_count: cdktf.numberToTerraform(this._scvmmCount),
      shared_l3_out_count: cdktf.numberToTerraform(this._sharedL3OutCount),
      shared_scope: cdktf.stringToTerraform(this._sharedScope),
      site_name: cdktf.stringToTerraform(this._siteName),
      smart_call_home: cdktf.stringToTerraform(this._smartCallHome),
      snapshot_count: cdktf.numberToTerraform(this._snapshotCount),
      snmp: cdktf.stringToTerraform(this._snmp),
      snmp_community_access_count: cdktf.numberToTerraform(this._snmpCommunityAccessCount),
      snmp_group_count: cdktf.numberToTerraform(this._snmpGroupCount),
      snmp_trap_count: cdktf.numberToTerraform(this._snmpTrapCount),
      snmp_v3_count: cdktf.numberToTerraform(this._snmpV3Count),
      span_count: cdktf.numberToTerraform(this._spanCount),
      span_dst_count: cdktf.numberToTerraform(this._spanDstCount),
      span_src_count: cdktf.numberToTerraform(this._spanSrcCount),
      spine_count: cdktf.numberToTerraform(this._spineCount),
      ssh_over_v6_count: cdktf.numberToTerraform(this._sshOverV6Count),
      ssh_v2_count: cdktf.numberToTerraform(this._sshV2Count),
      supervisor_module_count: cdktf.numberToTerraform(this._supervisorModuleCount),
      syslog_group_count: cdktf.numberToTerraform(this._syslogGroupCount),
      syslog_over_v6_count: cdktf.numberToTerraform(this._syslogOverV6Count),
      system_controller_count: cdktf.numberToTerraform(this._systemControllerCount),
      tacacs_group_count: cdktf.numberToTerraform(this._tacacsGroupCount),
      tenant_count: cdktf.numberToTerraform(this._tenantCount),
      tier_two_leaf_count: cdktf.numberToTerraform(this._tierTwoLeafCount),
      total_critical_faults: cdktf.numberToTerraform(this._totalCriticalFaults),
      twamp: cdktf.stringToTerraform(this._twamp),
      useg: cdktf.stringToTerraform(this._useg),
      vm_ware_vds_count: cdktf.numberToTerraform(this._vmWareVdsCount),
      vmm_ctrlrp_count: cdktf.numberToTerraform(this._vmmCtrlrpCount),
      vmm_domp_count: cdktf.numberToTerraform(this._vmmDompCount),
      vmm_ep_pd_count: cdktf.numberToTerraform(this._vmmEpPdCount),
      vnsm_dev_count: cdktf.numberToTerraform(this._vnsmDevCount),
      vpod_count: cdktf.numberToTerraform(this._vpodCount),
      webtoken_timeout_seconds: cdktf.numberToTerraform(this._webtokenTimeoutSeconds),
      ancestors: cdktf.listMapper(dataIntersightNiatelemetryNiaFeatureUsageAncestorsToTerraform, true)(this._ancestors.internalValue),
      parent: dataIntersightNiatelemetryNiaFeatureUsageParentToTerraform(this._parent.internalValue),
      permission_resources: cdktf.listMapper(dataIntersightNiatelemetryNiaFeatureUsagePermissionResourcesToTerraform, true)(this._permissionResources.internalValue),
      registered_device: dataIntersightNiatelemetryNiaFeatureUsageRegisteredDeviceToTerraform(this._registeredDevice.internalValue),
      smart_license: dataIntersightNiatelemetryNiaFeatureUsageSmartLicenseToTerraform(this._smartLicense.internalValue),
      tags: cdktf.listMapper(dataIntersightNiatelemetryNiaFeatureUsageTagsToTerraform, true)(this._tags.internalValue),
      version_context: dataIntersightNiatelemetryNiaFeatureUsageVersionContextToTerraform(this._versionContext.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aaa_ldap_provider_count: {
        value: cdktf.numberToHclTerraform(this._aaaLdapProviderCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      aaa_radius_provider_count: {
        value: cdktf.numberToHclTerraform(this._aaaRadiusProviderCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      aaa_tacacs_provider_count: {
        value: cdktf.numberToHclTerraform(this._aaaTacacsProviderCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      account_moid: {
        value: cdktf.stringToHclTerraform(this._accountMoid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      additional_properties: {
        value: cdktf.stringToHclTerraform(this._additionalProperties),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apic_cluster_health: {
        value: cdktf.stringToHclTerraform(this._apicClusterHealth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apic_count: {
        value: cdktf.numberToHclTerraform(this._apicCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      apic_is_telnet_enabled: {
        value: cdktf.booleanToHclTerraform(this._apicIsTelnetEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      apic_ntp_count: {
        value: cdktf.numberToHclTerraform(this._apicNtpCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      apic_snmp_community_count: {
        value: cdktf.numberToHclTerraform(this._apicSnmpCommunityCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      apic_sys_log_grp_count: {
        value: cdktf.numberToHclTerraform(this._apicSysLogGrpCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      apic_sys_log_src_count: {
        value: cdktf.numberToHclTerraform(this._apicSysLogSrcCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      app_center_count: {
        value: cdktf.numberToHclTerraform(this._appCenterCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ave: {
        value: cdktf.stringToHclTerraform(this._ave),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bd_count: {
        value: cdktf.numberToHclTerraform(this._bdCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      callhome_smart_group_count: {
        value: cdktf.numberToHclTerraform(this._callhomeSmartGroupCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      class_id: {
        value: cdktf.stringToHclTerraform(this._classId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_sec_peer_count: {
        value: cdktf.numberToHclTerraform(this._cloudSecPeerCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cloud_tenant_count: {
        value: cdktf.numberToHclTerraform(this._cloudTenantCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      comp_hv_count: {
        value: cdktf.numberToHclTerraform(this._compHvCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      config_exportp_count: {
        value: cdktf.numberToHclTerraform(this._configExportpCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      config_job_count: {
        value: cdktf.numberToHclTerraform(this._configJobCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      consistency_checker_app: {
        value: cdktf.stringToHclTerraform(this._consistencyCheckerApp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contract_count: {
        value: cdktf.numberToHclTerraform(this._contractCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      create_time: {
        value: cdktf.stringToHclTerraform(this._createTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_count: {
        value: cdktf.numberToHclTerraform(this._dnsCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domain_group_moid: {
        value: cdktf.stringToHclTerraform(this._domainGroupMoid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eigrp_count: {
        value: cdktf.numberToHclTerraform(this._eigrpCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      epg_count: {
        value: cdktf.numberToHclTerraform(this._epgCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fabric_module_count: {
        value: cdktf.numberToHclTerraform(this._fabricModuleCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fabric_setupp_count: {
        value: cdktf.numberToHclTerraform(this._fabricSetuppCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fcoe_nport_count: {
        value: cdktf.numberToHclTerraform(this._fcoeNportCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fcoe_nport_dom_count: {
        value: cdktf.numberToHclTerraform(this._fcoeNportDomCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fcoe_nport_vlan_count: {
        value: cdktf.numberToHclTerraform(this._fcoeNportVlanCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fcoe_nport_vsan_count: {
        value: cdktf.numberToHclTerraform(this._fcoeNportVsanCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fv_sla_def_count: {
        value: cdktf.numberToHclTerraform(this._fvSlaDefCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hsrp_count: {
        value: cdktf.numberToHclTerraform(this._hsrpCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ibgp_count: {
        value: cdktf.numberToHclTerraform(this._ibgpCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      igmp_access_list_count: {
        value: cdktf.numberToHclTerraform(this._igmpAccessListCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      igmp_snoop: {
        value: cdktf.stringToHclTerraform(this._igmpSnoop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_epg_count: {
        value: cdktf.numberToHclTerraform(this._ipEpgCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_bgp_route_reflectors_feature_used: {
        value: cdktf.booleanToHclTerraform(this._isBgpRouteReflectorsFeatureUsed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_bridge_domains_feature_used: {
        value: cdktf.booleanToHclTerraform(this._isBridgeDomainsFeatureUsed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_common_local_user_name: {
        value: cdktf.booleanToHclTerraform(this._isCommonLocalUserName),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_contracts_feature_used: {
        value: cdktf.booleanToHclTerraform(this._isContractsFeatureUsed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_epg_feature_used: {
        value: cdktf.booleanToHclTerraform(this._isEpgFeatureUsed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_filters_feature_used: {
        value: cdktf.booleanToHclTerraform(this._isFiltersFeatureUsed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_http_configured: {
        value: cdktf.booleanToHclTerraform(this._isHttpConfigured),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_https_configured: {
        value: cdktf.booleanToHclTerraform(this._isHttpsConfigured),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_ntp_feature_used: {
        value: cdktf.booleanToHclTerraform(this._isNtpFeatureUsed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_ptp_feature_used: {
        value: cdktf.booleanToHclTerraform(this._isPtpFeatureUsed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_synce_feature_used: {
        value: cdktf.booleanToHclTerraform(this._isSynceFeatureUsed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_tech_support_collected: {
        value: cdktf.stringToHclTerraform(this._isTechSupportCollected),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_tenants_feature_used: {
        value: cdktf.booleanToHclTerraform(this._isTenantsFeatureUsed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_vrfs_feature_used: {
        value: cdktf.booleanToHclTerraform(this._isVrfsFeatureUsed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      isis_count: {
        value: cdktf.numberToHclTerraform(this._isisCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l2_multicast: {
        value: cdktf.stringToHclTerraform(this._l2Multicast),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      latency_ptp_mode: {
        value: cdktf.stringToHclTerraform(this._latencyPtpMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      leaf_count: {
        value: cdktf.numberToHclTerraform(this._leafCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      local_username_count: {
        value: cdktf.numberToHclTerraform(this._localUsernameCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      login_block_duration: {
        value: cdktf.numberToHclTerraform(this._loginBlockDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      login_max_failed_attempts: {
        value: cdktf.numberToHclTerraform(this._loginMaxFailedAttempts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      login_max_failed_attempts_window: {
        value: cdktf.numberToHclTerraform(this._loginMaxFailedAttemptsWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maintenance_mode_count: {
        value: cdktf.numberToHclTerraform(this._maintenanceModeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      management_over_v6_count: {
        value: cdktf.numberToHclTerraform(this._managementOverV6Count),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      microsoft_useg_vmm_ep_pd_count: {
        value: cdktf.numberToHclTerraform(this._microsoftUsegVmmEpPdCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mod_time: {
        value: cdktf.stringToHclTerraform(this._modTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      moid: {
        value: cdktf.stringToHclTerraform(this._moid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      net_flow_count: {
        value: cdktf.numberToHclTerraform(this._netFlowCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nir: {
        value: cdktf.stringToHclTerraform(this._nir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_type: {
        value: cdktf.stringToHclTerraform(this._objectType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      open_stack: {
        value: cdktf.stringToHclTerraform(this._openStack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opflex_kubernetes_count: {
        value: cdktf.numberToHclTerraform(this._opflexKubernetesCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ospf_count: {
        value: cdktf.numberToHclTerraform(this._ospfCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      owners: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._owners),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      password_history_count: {
        value: cdktf.numberToHclTerraform(this._passwordHistoryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password_strength_check: {
        value: cdktf.stringToHclTerraform(this._passwordStrengthCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_strength_profile_count: {
        value: cdktf.numberToHclTerraform(this._passwordStrengthProfileCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      poe_count: {
        value: cdktf.numberToHclTerraform(this._poeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_security_count: {
        value: cdktf.numberToHclTerraform(this._portSecurityCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      qin_vni_tunnel_count: {
        value: cdktf.numberToHclTerraform(this._qinVniTunnelCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      qos_cong_count: {
        value: cdktf.numberToHclTerraform(this._qosCongCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      qos_pfc_pol_count: {
        value: cdktf.numberToHclTerraform(this._qosPfcPolCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      realm_count: {
        value: cdktf.numberToHclTerraform(this._realmCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      record_type: {
        value: cdktf.stringToHclTerraform(this._recordType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      record_version: {
        value: cdktf.stringToHclTerraform(this._recordVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_leaf_count: {
        value: cdktf.numberToHclTerraform(this._remoteLeafCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scvmm_count: {
        value: cdktf.numberToHclTerraform(this._scvmmCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_l3_out_count: {
        value: cdktf.numberToHclTerraform(this._sharedL3OutCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_scope: {
        value: cdktf.stringToHclTerraform(this._sharedScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_name: {
        value: cdktf.stringToHclTerraform(this._siteName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smart_call_home: {
        value: cdktf.stringToHclTerraform(this._smartCallHome),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_count: {
        value: cdktf.numberToHclTerraform(this._snapshotCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snmp: {
        value: cdktf.stringToHclTerraform(this._snmp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp_community_access_count: {
        value: cdktf.numberToHclTerraform(this._snmpCommunityAccessCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snmp_group_count: {
        value: cdktf.numberToHclTerraform(this._snmpGroupCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snmp_trap_count: {
        value: cdktf.numberToHclTerraform(this._snmpTrapCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snmp_v3_count: {
        value: cdktf.numberToHclTerraform(this._snmpV3Count),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      span_count: {
        value: cdktf.numberToHclTerraform(this._spanCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      span_dst_count: {
        value: cdktf.numberToHclTerraform(this._spanDstCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      span_src_count: {
        value: cdktf.numberToHclTerraform(this._spanSrcCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spine_count: {
        value: cdktf.numberToHclTerraform(this._spineCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssh_over_v6_count: {
        value: cdktf.numberToHclTerraform(this._sshOverV6Count),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssh_v2_count: {
        value: cdktf.numberToHclTerraform(this._sshV2Count),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      supervisor_module_count: {
        value: cdktf.numberToHclTerraform(this._supervisorModuleCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      syslog_group_count: {
        value: cdktf.numberToHclTerraform(this._syslogGroupCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      syslog_over_v6_count: {
        value: cdktf.numberToHclTerraform(this._syslogOverV6Count),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      system_controller_count: {
        value: cdktf.numberToHclTerraform(this._systemControllerCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tacacs_group_count: {
        value: cdktf.numberToHclTerraform(this._tacacsGroupCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tenant_count: {
        value: cdktf.numberToHclTerraform(this._tenantCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tier_two_leaf_count: {
        value: cdktf.numberToHclTerraform(this._tierTwoLeafCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      total_critical_faults: {
        value: cdktf.numberToHclTerraform(this._totalCriticalFaults),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      twamp: {
        value: cdktf.stringToHclTerraform(this._twamp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      useg: {
        value: cdktf.stringToHclTerraform(this._useg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_ware_vds_count: {
        value: cdktf.numberToHclTerraform(this._vmWareVdsCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vmm_ctrlrp_count: {
        value: cdktf.numberToHclTerraform(this._vmmCtrlrpCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vmm_domp_count: {
        value: cdktf.numberToHclTerraform(this._vmmDompCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vmm_ep_pd_count: {
        value: cdktf.numberToHclTerraform(this._vmmEpPdCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vnsm_dev_count: {
        value: cdktf.numberToHclTerraform(this._vnsmDevCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vpod_count: {
        value: cdktf.numberToHclTerraform(this._vpodCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      webtoken_timeout_seconds: {
        value: cdktf.numberToHclTerraform(this._webtokenTimeoutSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ancestors: {
        value: cdktf.listMapperHcl(dataIntersightNiatelemetryNiaFeatureUsageAncestorsToHclTerraform, true)(this._ancestors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryNiaFeatureUsageAncestorsList",
      },
      parent: {
        value: dataIntersightNiatelemetryNiaFeatureUsageParentToHclTerraform(this._parent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryNiaFeatureUsageParentList",
      },
      permission_resources: {
        value: cdktf.listMapperHcl(dataIntersightNiatelemetryNiaFeatureUsagePermissionResourcesToHclTerraform, true)(this._permissionResources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryNiaFeatureUsagePermissionResourcesList",
      },
      registered_device: {
        value: dataIntersightNiatelemetryNiaFeatureUsageRegisteredDeviceToHclTerraform(this._registeredDevice.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryNiaFeatureUsageRegisteredDeviceList",
      },
      smart_license: {
        value: dataIntersightNiatelemetryNiaFeatureUsageSmartLicenseToHclTerraform(this._smartLicense.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryNiaFeatureUsageSmartLicenseList",
      },
      tags: {
        value: cdktf.listMapperHcl(dataIntersightNiatelemetryNiaFeatureUsageTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryNiaFeatureUsageTagsList",
      },
      version_context: {
        value: dataIntersightNiatelemetryNiaFeatureUsageVersionContextToHclTerraform(this._versionContext.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryNiaFeatureUsageVersionContextList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
