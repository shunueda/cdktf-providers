// https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ControllerpropertiesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#alert_manager_use_evms Controllerproperties#alert_manager_use_evms}
  */
  readonly alertManagerUseEvms?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#allow_admin_network_updates Controllerproperties#allow_admin_network_updates}
  */
  readonly allowAdminNetworkUpdates?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#allow_ip_forwarding Controllerproperties#allow_ip_forwarding}
  */
  readonly allowIpForwarding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#allow_unauthenticated_apis Controllerproperties#allow_unauthenticated_apis}
  */
  readonly allowUnauthenticatedApis?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#allow_unauthenticated_nodes Controllerproperties#allow_unauthenticated_nodes}
  */
  readonly allowUnauthenticatedNodes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#api_idle_timeout Controllerproperties#api_idle_timeout}
  */
  readonly apiIdleTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#api_perf_logging_threshold Controllerproperties#api_perf_logging_threshold}
  */
  readonly apiPerfLoggingThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#appviewx_compat_mode Controllerproperties#appviewx_compat_mode}
  */
  readonly appviewxCompatMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#async_patch_merge_period Controllerproperties#async_patch_merge_period}
  */
  readonly asyncPatchMergePeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#async_patch_request_cleanup_duration Controllerproperties#async_patch_request_cleanup_duration}
  */
  readonly asyncPatchRequestCleanupDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#attach_ip_retry_interval Controllerproperties#attach_ip_retry_interval}
  */
  readonly attachIpRetryInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#attach_ip_retry_limit Controllerproperties#attach_ip_retry_limit}
  */
  readonly attachIpRetryLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#bm_use_ansible Controllerproperties#bm_use_ansible}
  */
  readonly bmUseAnsible?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#check_vsvip_fqdn_syntax Controllerproperties#check_vsvip_fqdn_syntax}
  */
  readonly checkVsvipFqdnSyntax?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#cleanup_expired_authtoken_timeout_period Controllerproperties#cleanup_expired_authtoken_timeout_period}
  */
  readonly cleanupExpiredAuthtokenTimeoutPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#cleanup_sessions_timeout_period Controllerproperties#cleanup_sessions_timeout_period}
  */
  readonly cleanupSessionsTimeoutPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#cloud_discovery_interval Controllerproperties#cloud_discovery_interval}
  */
  readonly cloudDiscoveryInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#cloud_reconcile Controllerproperties#cloud_reconcile}
  */
  readonly cloudReconcile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#cloud_reconcile_interval Controllerproperties#cloud_reconcile_interval}
  */
  readonly cloudReconcileInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#cluster_ip_gratuitous_arp_period Controllerproperties#cluster_ip_gratuitous_arp_period}
  */
  readonly clusterIpGratuitousArpPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#consistency_check_timeout_period Controllerproperties#consistency_check_timeout_period}
  */
  readonly consistencyCheckTimeoutPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#controller_resource_info_collection_period Controllerproperties#controller_resource_info_collection_period}
  */
  readonly controllerResourceInfoCollectionPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#crashed_se_reboot Controllerproperties#crashed_se_reboot}
  */
  readonly crashedSeReboot?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#dead_se_detection_timer Controllerproperties#dead_se_detection_timer}
  */
  readonly deadSeDetectionTimer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#default_minimum_api_timeout Controllerproperties#default_minimum_api_timeout}
  */
  readonly defaultMinimumApiTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#del_offline_se_after_reboot_delay Controllerproperties#del_offline_se_after_reboot_delay}
  */
  readonly delOfflineSeAfterRebootDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#detach_ip_retry_interval Controllerproperties#detach_ip_retry_interval}
  */
  readonly detachIpRetryInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#detach_ip_retry_limit Controllerproperties#detach_ip_retry_limit}
  */
  readonly detachIpRetryLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#detach_ip_timeout Controllerproperties#detach_ip_timeout}
  */
  readonly detachIpTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#dns_refresh_period Controllerproperties#dns_refresh_period}
  */
  readonly dnsRefreshPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#dummy Controllerproperties#dummy}
  */
  readonly dummy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#edit_system_limits Controllerproperties#edit_system_limits}
  */
  readonly editSystemLimits?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#enable_api_sharding Controllerproperties#enable_api_sharding}
  */
  readonly enableApiSharding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#enable_memory_balancer Controllerproperties#enable_memory_balancer}
  */
  readonly enableMemoryBalancer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#enable_per_process_stop Controllerproperties#enable_per_process_stop}
  */
  readonly enablePerProcessStop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#enable_resmgr_log_cache_print Controllerproperties#enable_resmgr_log_cache_print}
  */
  readonly enableResmgrLogCachePrint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#event_manager_max_goroutines Controllerproperties#event_manager_max_goroutines}
  */
  readonly eventManagerMaxGoroutines?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#event_manager_max_subscribers Controllerproperties#event_manager_max_subscribers}
  */
  readonly eventManagerMaxSubscribers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#event_manager_processing_time_threshold Controllerproperties#event_manager_processing_time_threshold}
  */
  readonly eventManagerProcessingTimeThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#fatal_error_lease_time Controllerproperties#fatal_error_lease_time}
  */
  readonly fatalErrorLeaseTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#federated_datastore_cleanup_duration Controllerproperties#federated_datastore_cleanup_duration}
  */
  readonly federatedDatastoreCleanupDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#file_object_cleanup_period Controllerproperties#file_object_cleanup_period}
  */
  readonly fileObjectCleanupPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#fileobject_max_file_versions Controllerproperties#fileobject_max_file_versions}
  */
  readonly fileobjectMaxFileVersions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#gslb_purge_batch_size Controllerproperties#gslb_purge_batch_size}
  */
  readonly gslbPurgeBatchSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#gslb_purge_sleep_time_ms Controllerproperties#gslb_purge_sleep_time_ms}
  */
  readonly gslbPurgeSleepTimeMs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#id Controllerproperties#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#ignore_vrf_in_networksubnetlist Controllerproperties#ignore_vrf_in_networksubnetlist}
  */
  readonly ignoreVrfInNetworksubnetlist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#max_dead_se_in_grp Controllerproperties#max_dead_se_in_grp}
  */
  readonly maxDeadSeInGrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#max_pcap_per_tenant Controllerproperties#max_pcap_per_tenant}
  */
  readonly maxPcapPerTenant?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#max_se_spawn_interval_delay Controllerproperties#max_se_spawn_interval_delay}
  */
  readonly maxSeSpawnIntervalDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#max_seq_attach_ip_failures Controllerproperties#max_seq_attach_ip_failures}
  */
  readonly maxSeqAttachIpFailures?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#max_seq_vnic_failures Controllerproperties#max_seq_vnic_failures}
  */
  readonly maxSeqVnicFailures?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#max_threads_cc_vip_bg_worker Controllerproperties#max_threads_cc_vip_bg_worker}
  */
  readonly maxThreadsCcVipBgWorker?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#permission_scoped_shared_admin_networks Controllerproperties#permission_scoped_shared_admin_networks}
  */
  readonly permissionScopedSharedAdminNetworks?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#persistence_key_rotate_period Controllerproperties#persistence_key_rotate_period}
  */
  readonly persistenceKeyRotatePeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#portal_request_burst_limit Controllerproperties#portal_request_burst_limit}
  */
  readonly portalRequestBurstLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#portal_request_rate_limit Controllerproperties#portal_request_rate_limit}
  */
  readonly portalRequestRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#portal_token Controllerproperties#portal_token}
  */
  readonly portalToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#postgres_vacuum_period Controllerproperties#postgres_vacuum_period}
  */
  readonly postgresVacuumPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#process_locked_useraccounts_timeout_period Controllerproperties#process_locked_useraccounts_timeout_period}
  */
  readonly processLockedUseraccountsTimeoutPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#process_pki_profile_timeout_period Controllerproperties#process_pki_profile_timeout_period}
  */
  readonly processPkiProfileTimeoutPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#query_host_fail Controllerproperties#query_host_fail}
  */
  readonly queryHostFail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#resmgr_log_caching_period Controllerproperties#resmgr_log_caching_period}
  */
  readonly resmgrLogCachingPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#restrict_cloud_read_access Controllerproperties#restrict_cloud_read_access}
  */
  readonly restrictCloudReadAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#safenet_hsm_version Controllerproperties#safenet_hsm_version}
  */
  readonly safenetHsmVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#se_create_timeout Controllerproperties#se_create_timeout}
  */
  readonly seCreateTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#se_failover_attempt_interval Controllerproperties#se_failover_attempt_interval}
  */
  readonly seFailoverAttemptInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#se_from_marketplace Controllerproperties#se_from_marketplace}
  */
  readonly seFromMarketplace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#se_offline_del Controllerproperties#se_offline_del}
  */
  readonly seOfflineDel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#se_spawn_retry_interval Controllerproperties#se_spawn_retry_interval}
  */
  readonly seSpawnRetryInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#se_upgrade_flow_cleanup_timeout Controllerproperties#se_upgrade_flow_cleanup_timeout}
  */
  readonly seUpgradeFlowCleanupTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#se_vnic_cooldown Controllerproperties#se_vnic_cooldown}
  */
  readonly seVnicCooldown?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#se_vnic_gc_wait_time Controllerproperties#se_vnic_gc_wait_time}
  */
  readonly seVnicGcWaitTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#secure_channel_cleanup_timeout Controllerproperties#secure_channel_cleanup_timeout}
  */
  readonly secureChannelCleanupTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#secure_channel_controller_token_timeout Controllerproperties#secure_channel_controller_token_timeout}
  */
  readonly secureChannelControllerTokenTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#secure_channel_se_token_timeout Controllerproperties#secure_channel_se_token_timeout}
  */
  readonly secureChannelSeTokenTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#seupgrade_copy_buffer_size Controllerproperties#seupgrade_copy_buffer_size}
  */
  readonly seupgradeCopyBufferSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#seupgrade_copy_pool_size Controllerproperties#seupgrade_copy_pool_size}
  */
  readonly seupgradeCopyPoolSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#seupgrade_fabric_pool_size Controllerproperties#seupgrade_fabric_pool_size}
  */
  readonly seupgradeFabricPoolSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#seupgrade_segroup_min_dead_timeout Controllerproperties#seupgrade_segroup_min_dead_timeout}
  */
  readonly seupgradeSegroupMinDeadTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#shared_ssl_certificates Controllerproperties#shared_ssl_certificates}
  */
  readonly sharedSslCertificates?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#skopeo_retry_interval Controllerproperties#skopeo_retry_interval}
  */
  readonly skopeoRetryInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#skopeo_retry_limit Controllerproperties#skopeo_retry_limit}
  */
  readonly skopeoRetryLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#soft_min_mem_per_se_limit Controllerproperties#soft_min_mem_per_se_limit}
  */
  readonly softMinMemPerSeLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#ssl_certificate_expiry_warning_days Controllerproperties#ssl_certificate_expiry_warning_days}
  */
  readonly sslCertificateExpiryWarningDays?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#system_report_cleanup_interval Controllerproperties#system_report_cleanup_interval}
  */
  readonly systemReportCleanupInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#system_report_limit Controllerproperties#system_report_limit}
  */
  readonly systemReportLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#unresponsive_se_reboot Controllerproperties#unresponsive_se_reboot}
  */
  readonly unresponsiveSeReboot?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#update_dns_entry_retry_limit Controllerproperties#update_dns_entry_retry_limit}
  */
  readonly updateDnsEntryRetryLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#update_dns_entry_timeout Controllerproperties#update_dns_entry_timeout}
  */
  readonly updateDnsEntryTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#upgrade_dns_ttl Controllerproperties#upgrade_dns_ttl}
  */
  readonly upgradeDnsTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#upgrade_fat_se_lease_time Controllerproperties#upgrade_fat_se_lease_time}
  */
  readonly upgradeFatSeLeaseTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#upgrade_lease_time Controllerproperties#upgrade_lease_time}
  */
  readonly upgradeLeaseTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#upgrade_se_per_vs_scale_ops_txn_time Controllerproperties#upgrade_se_per_vs_scale_ops_txn_time}
  */
  readonly upgradeSePerVsScaleOpsTxnTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#uuid Controllerproperties#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#vnic_op_fail_time Controllerproperties#vnic_op_fail_time}
  */
  readonly vnicOpFailTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#vs_awaiting_se_timeout Controllerproperties#vs_awaiting_se_timeout}
  */
  readonly vsAwaitingSeTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#vs_key_rotate_period Controllerproperties#vs_key_rotate_period}
  */
  readonly vsKeyRotatePeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#vs_scaleout_ready_check_interval Controllerproperties#vs_scaleout_ready_check_interval}
  */
  readonly vsScaleoutReadyCheckInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#vs_se_attach_ip_fail Controllerproperties#vs_se_attach_ip_fail}
  */
  readonly vsSeAttachIpFail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#vs_se_bootup_fail Controllerproperties#vs_se_bootup_fail}
  */
  readonly vsSeBootupFail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#vs_se_bootup_fail_patch Controllerproperties#vs_se_bootup_fail_patch}
  */
  readonly vsSeBootupFailPatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#vs_se_create_fail Controllerproperties#vs_se_create_fail}
  */
  readonly vsSeCreateFail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#vs_se_ping_fail Controllerproperties#vs_se_ping_fail}
  */
  readonly vsSePingFail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#vs_se_vnic_fail Controllerproperties#vs_se_vnic_fail}
  */
  readonly vsSeVnicFail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#vs_se_vnic_ip_fail Controllerproperties#vs_se_vnic_ip_fail}
  */
  readonly vsSeVnicIpFail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#vsphere_ha_detection_timeout Controllerproperties#vsphere_ha_detection_timeout}
  */
  readonly vsphereHaDetectionTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#vsphere_ha_recovery_timeout Controllerproperties#vsphere_ha_recovery_timeout}
  */
  readonly vsphereHaRecoveryTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#vsphere_ha_timer_interval Controllerproperties#vsphere_ha_timer_interval}
  */
  readonly vsphereHaTimerInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#warmstart_se_reconnect_wait_time Controllerproperties#warmstart_se_reconnect_wait_time}
  */
  readonly warmstartSeReconnectWaitTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#warmstart_vs_resync_wait_time Controllerproperties#warmstart_vs_resync_wait_time}
  */
  readonly warmstartVsResyncWaitTime?: string;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#configpb_attributes Controllerproperties#configpb_attributes}
  */
  readonly configpbAttributes?: ControllerpropertiesConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * false_positive_learning_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#false_positive_learning_config Controllerproperties#false_positive_learning_config}
  */
  readonly falsePositiveLearningConfig?: ControllerpropertiesFalsePositiveLearningConfig[] | cdktf.IResolvable;
  /**
  * user_agent_cache_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#user_agent_cache_config Controllerproperties#user_agent_cache_config}
  */
  readonly userAgentCacheConfig?: ControllerpropertiesUserAgentCacheConfig[] | cdktf.IResolvable;
}
export interface ControllerpropertiesConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#version Controllerproperties#version}
  */
  readonly version?: string;
}

export function controllerpropertiesConfigpbAttributesToTerraform(struct?: ControllerpropertiesConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function controllerpropertiesConfigpbAttributesToHclTerraform(struct?: ControllerpropertiesConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ControllerpropertiesConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ControllerpropertiesConfigpbAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ControllerpropertiesConfigpbAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class ControllerpropertiesConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : ControllerpropertiesConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): ControllerpropertiesConfigpbAttributesOutputReference {
    return new ControllerpropertiesConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ControllerpropertiesFalsePositiveLearningConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#max_apps_supported Controllerproperties#max_apps_supported}
  */
  readonly maxAppsSupported?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#min_monitor_time Controllerproperties#min_monitor_time}
  */
  readonly minMonitorTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#min_trans_per_application Controllerproperties#min_trans_per_application}
  */
  readonly minTransPerApplication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#min_trans_per_uri Controllerproperties#min_trans_per_uri}
  */
  readonly minTransPerUri?: string;
}

export function controllerpropertiesFalsePositiveLearningConfigToTerraform(struct?: ControllerpropertiesFalsePositiveLearningConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_apps_supported: cdktf.stringToTerraform(struct!.maxAppsSupported),
    min_monitor_time: cdktf.stringToTerraform(struct!.minMonitorTime),
    min_trans_per_application: cdktf.stringToTerraform(struct!.minTransPerApplication),
    min_trans_per_uri: cdktf.stringToTerraform(struct!.minTransPerUri),
  }
}


export function controllerpropertiesFalsePositiveLearningConfigToHclTerraform(struct?: ControllerpropertiesFalsePositiveLearningConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_apps_supported: {
      value: cdktf.stringToHclTerraform(struct!.maxAppsSupported),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_monitor_time: {
      value: cdktf.stringToHclTerraform(struct!.minMonitorTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_trans_per_application: {
      value: cdktf.stringToHclTerraform(struct!.minTransPerApplication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_trans_per_uri: {
      value: cdktf.stringToHclTerraform(struct!.minTransPerUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ControllerpropertiesFalsePositiveLearningConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ControllerpropertiesFalsePositiveLearningConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxAppsSupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAppsSupported = this._maxAppsSupported;
    }
    if (this._minMonitorTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.minMonitorTime = this._minMonitorTime;
    }
    if (this._minTransPerApplication !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTransPerApplication = this._minTransPerApplication;
    }
    if (this._minTransPerUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTransPerUri = this._minTransPerUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ControllerpropertiesFalsePositiveLearningConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxAppsSupported = undefined;
      this._minMonitorTime = undefined;
      this._minTransPerApplication = undefined;
      this._minTransPerUri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxAppsSupported = value.maxAppsSupported;
      this._minMonitorTime = value.minMonitorTime;
      this._minTransPerApplication = value.minTransPerApplication;
      this._minTransPerUri = value.minTransPerUri;
    }
  }

  // max_apps_supported - computed: false, optional: true, required: false
  private _maxAppsSupported?: string; 
  public get maxAppsSupported() {
    return this.getStringAttribute('max_apps_supported');
  }
  public set maxAppsSupported(value: string) {
    this._maxAppsSupported = value;
  }
  public resetMaxAppsSupported() {
    this._maxAppsSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAppsSupportedInput() {
    return this._maxAppsSupported;
  }

  // min_monitor_time - computed: false, optional: true, required: false
  private _minMonitorTime?: string; 
  public get minMonitorTime() {
    return this.getStringAttribute('min_monitor_time');
  }
  public set minMonitorTime(value: string) {
    this._minMonitorTime = value;
  }
  public resetMinMonitorTime() {
    this._minMonitorTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minMonitorTimeInput() {
    return this._minMonitorTime;
  }

  // min_trans_per_application - computed: false, optional: true, required: false
  private _minTransPerApplication?: string; 
  public get minTransPerApplication() {
    return this.getStringAttribute('min_trans_per_application');
  }
  public set minTransPerApplication(value: string) {
    this._minTransPerApplication = value;
  }
  public resetMinTransPerApplication() {
    this._minTransPerApplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTransPerApplicationInput() {
    return this._minTransPerApplication;
  }

  // min_trans_per_uri - computed: false, optional: true, required: false
  private _minTransPerUri?: string; 
  public get minTransPerUri() {
    return this.getStringAttribute('min_trans_per_uri');
  }
  public set minTransPerUri(value: string) {
    this._minTransPerUri = value;
  }
  public resetMinTransPerUri() {
    this._minTransPerUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTransPerUriInput() {
    return this._minTransPerUri;
  }
}

export class ControllerpropertiesFalsePositiveLearningConfigList extends cdktf.ComplexList {
  public internalValue? : ControllerpropertiesFalsePositiveLearningConfig[] | cdktf.IResolvable

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
  public get(index: number): ControllerpropertiesFalsePositiveLearningConfigOutputReference {
    return new ControllerpropertiesFalsePositiveLearningConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ControllerpropertiesUserAgentCacheConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#batch_size Controllerproperties#batch_size}
  */
  readonly batchSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#controller_cache_size Controllerproperties#controller_cache_size}
  */
  readonly controllerCacheSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#max_age Controllerproperties#max_age}
  */
  readonly maxAge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#max_last_hit_time Controllerproperties#max_last_hit_time}
  */
  readonly maxLastHitTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#max_upstream_queries Controllerproperties#max_upstream_queries}
  */
  readonly maxUpstreamQueries?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#max_wait_time Controllerproperties#max_wait_time}
  */
  readonly maxWaitTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#num_entries_upstream_update Controllerproperties#num_entries_upstream_update}
  */
  readonly numEntriesUpstreamUpdate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#percent_reserved_for_bad_bots Controllerproperties#percent_reserved_for_bad_bots}
  */
  readonly percentReservedForBadBots?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#percent_reserved_for_browsers Controllerproperties#percent_reserved_for_browsers}
  */
  readonly percentReservedForBrowsers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#percent_reserved_for_good_bots Controllerproperties#percent_reserved_for_good_bots}
  */
  readonly percentReservedForGoodBots?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#percent_reserved_for_outstanding Controllerproperties#percent_reserved_for_outstanding}
  */
  readonly percentReservedForOutstanding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#se_cache_size Controllerproperties#se_cache_size}
  */
  readonly seCacheSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#upstream_update_interval Controllerproperties#upstream_update_interval}
  */
  readonly upstreamUpdateInterval?: string;
}

export function controllerpropertiesUserAgentCacheConfigToTerraform(struct?: ControllerpropertiesUserAgentCacheConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_size: cdktf.stringToTerraform(struct!.batchSize),
    controller_cache_size: cdktf.stringToTerraform(struct!.controllerCacheSize),
    max_age: cdktf.stringToTerraform(struct!.maxAge),
    max_last_hit_time: cdktf.stringToTerraform(struct!.maxLastHitTime),
    max_upstream_queries: cdktf.stringToTerraform(struct!.maxUpstreamQueries),
    max_wait_time: cdktf.stringToTerraform(struct!.maxWaitTime),
    num_entries_upstream_update: cdktf.stringToTerraform(struct!.numEntriesUpstreamUpdate),
    percent_reserved_for_bad_bots: cdktf.stringToTerraform(struct!.percentReservedForBadBots),
    percent_reserved_for_browsers: cdktf.stringToTerraform(struct!.percentReservedForBrowsers),
    percent_reserved_for_good_bots: cdktf.stringToTerraform(struct!.percentReservedForGoodBots),
    percent_reserved_for_outstanding: cdktf.stringToTerraform(struct!.percentReservedForOutstanding),
    se_cache_size: cdktf.stringToTerraform(struct!.seCacheSize),
    upstream_update_interval: cdktf.stringToTerraform(struct!.upstreamUpdateInterval),
  }
}


export function controllerpropertiesUserAgentCacheConfigToHclTerraform(struct?: ControllerpropertiesUserAgentCacheConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_size: {
      value: cdktf.stringToHclTerraform(struct!.batchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    controller_cache_size: {
      value: cdktf.stringToHclTerraform(struct!.controllerCacheSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_age: {
      value: cdktf.stringToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_last_hit_time: {
      value: cdktf.stringToHclTerraform(struct!.maxLastHitTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_upstream_queries: {
      value: cdktf.stringToHclTerraform(struct!.maxUpstreamQueries),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_wait_time: {
      value: cdktf.stringToHclTerraform(struct!.maxWaitTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_entries_upstream_update: {
      value: cdktf.stringToHclTerraform(struct!.numEntriesUpstreamUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percent_reserved_for_bad_bots: {
      value: cdktf.stringToHclTerraform(struct!.percentReservedForBadBots),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percent_reserved_for_browsers: {
      value: cdktf.stringToHclTerraform(struct!.percentReservedForBrowsers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percent_reserved_for_good_bots: {
      value: cdktf.stringToHclTerraform(struct!.percentReservedForGoodBots),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percent_reserved_for_outstanding: {
      value: cdktf.stringToHclTerraform(struct!.percentReservedForOutstanding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_cache_size: {
      value: cdktf.stringToHclTerraform(struct!.seCacheSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream_update_interval: {
      value: cdktf.stringToHclTerraform(struct!.upstreamUpdateInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ControllerpropertiesUserAgentCacheConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ControllerpropertiesUserAgentCacheConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._controllerCacheSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerCacheSize = this._controllerCacheSize;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    if (this._maxLastHitTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLastHitTime = this._maxLastHitTime;
    }
    if (this._maxUpstreamQueries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUpstreamQueries = this._maxUpstreamQueries;
    }
    if (this._maxWaitTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWaitTime = this._maxWaitTime;
    }
    if (this._numEntriesUpstreamUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.numEntriesUpstreamUpdate = this._numEntriesUpstreamUpdate;
    }
    if (this._percentReservedForBadBots !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentReservedForBadBots = this._percentReservedForBadBots;
    }
    if (this._percentReservedForBrowsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentReservedForBrowsers = this._percentReservedForBrowsers;
    }
    if (this._percentReservedForGoodBots !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentReservedForGoodBots = this._percentReservedForGoodBots;
    }
    if (this._percentReservedForOutstanding !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentReservedForOutstanding = this._percentReservedForOutstanding;
    }
    if (this._seCacheSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.seCacheSize = this._seCacheSize;
    }
    if (this._upstreamUpdateInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamUpdateInterval = this._upstreamUpdateInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ControllerpropertiesUserAgentCacheConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchSize = undefined;
      this._controllerCacheSize = undefined;
      this._maxAge = undefined;
      this._maxLastHitTime = undefined;
      this._maxUpstreamQueries = undefined;
      this._maxWaitTime = undefined;
      this._numEntriesUpstreamUpdate = undefined;
      this._percentReservedForBadBots = undefined;
      this._percentReservedForBrowsers = undefined;
      this._percentReservedForGoodBots = undefined;
      this._percentReservedForOutstanding = undefined;
      this._seCacheSize = undefined;
      this._upstreamUpdateInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchSize = value.batchSize;
      this._controllerCacheSize = value.controllerCacheSize;
      this._maxAge = value.maxAge;
      this._maxLastHitTime = value.maxLastHitTime;
      this._maxUpstreamQueries = value.maxUpstreamQueries;
      this._maxWaitTime = value.maxWaitTime;
      this._numEntriesUpstreamUpdate = value.numEntriesUpstreamUpdate;
      this._percentReservedForBadBots = value.percentReservedForBadBots;
      this._percentReservedForBrowsers = value.percentReservedForBrowsers;
      this._percentReservedForGoodBots = value.percentReservedForGoodBots;
      this._percentReservedForOutstanding = value.percentReservedForOutstanding;
      this._seCacheSize = value.seCacheSize;
      this._upstreamUpdateInterval = value.upstreamUpdateInterval;
    }
  }

  // batch_size - computed: false, optional: true, required: false
  private _batchSize?: string; 
  public get batchSize() {
    return this.getStringAttribute('batch_size');
  }
  public set batchSize(value: string) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // controller_cache_size - computed: false, optional: true, required: false
  private _controllerCacheSize?: string; 
  public get controllerCacheSize() {
    return this.getStringAttribute('controller_cache_size');
  }
  public set controllerCacheSize(value: string) {
    this._controllerCacheSize = value;
  }
  public resetControllerCacheSize() {
    this._controllerCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerCacheSizeInput() {
    return this._controllerCacheSize;
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: string; 
  public get maxAge() {
    return this.getStringAttribute('max_age');
  }
  public set maxAge(value: string) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }

  // max_last_hit_time - computed: false, optional: true, required: false
  private _maxLastHitTime?: string; 
  public get maxLastHitTime() {
    return this.getStringAttribute('max_last_hit_time');
  }
  public set maxLastHitTime(value: string) {
    this._maxLastHitTime = value;
  }
  public resetMaxLastHitTime() {
    this._maxLastHitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLastHitTimeInput() {
    return this._maxLastHitTime;
  }

  // max_upstream_queries - computed: false, optional: true, required: false
  private _maxUpstreamQueries?: string; 
  public get maxUpstreamQueries() {
    return this.getStringAttribute('max_upstream_queries');
  }
  public set maxUpstreamQueries(value: string) {
    this._maxUpstreamQueries = value;
  }
  public resetMaxUpstreamQueries() {
    this._maxUpstreamQueries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUpstreamQueriesInput() {
    return this._maxUpstreamQueries;
  }

  // max_wait_time - computed: false, optional: true, required: false
  private _maxWaitTime?: string; 
  public get maxWaitTime() {
    return this.getStringAttribute('max_wait_time');
  }
  public set maxWaitTime(value: string) {
    this._maxWaitTime = value;
  }
  public resetMaxWaitTime() {
    this._maxWaitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWaitTimeInput() {
    return this._maxWaitTime;
  }

  // num_entries_upstream_update - computed: false, optional: true, required: false
  private _numEntriesUpstreamUpdate?: string; 
  public get numEntriesUpstreamUpdate() {
    return this.getStringAttribute('num_entries_upstream_update');
  }
  public set numEntriesUpstreamUpdate(value: string) {
    this._numEntriesUpstreamUpdate = value;
  }
  public resetNumEntriesUpstreamUpdate() {
    this._numEntriesUpstreamUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numEntriesUpstreamUpdateInput() {
    return this._numEntriesUpstreamUpdate;
  }

  // percent_reserved_for_bad_bots - computed: false, optional: true, required: false
  private _percentReservedForBadBots?: string; 
  public get percentReservedForBadBots() {
    return this.getStringAttribute('percent_reserved_for_bad_bots');
  }
  public set percentReservedForBadBots(value: string) {
    this._percentReservedForBadBots = value;
  }
  public resetPercentReservedForBadBots() {
    this._percentReservedForBadBots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentReservedForBadBotsInput() {
    return this._percentReservedForBadBots;
  }

  // percent_reserved_for_browsers - computed: false, optional: true, required: false
  private _percentReservedForBrowsers?: string; 
  public get percentReservedForBrowsers() {
    return this.getStringAttribute('percent_reserved_for_browsers');
  }
  public set percentReservedForBrowsers(value: string) {
    this._percentReservedForBrowsers = value;
  }
  public resetPercentReservedForBrowsers() {
    this._percentReservedForBrowsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentReservedForBrowsersInput() {
    return this._percentReservedForBrowsers;
  }

  // percent_reserved_for_good_bots - computed: false, optional: true, required: false
  private _percentReservedForGoodBots?: string; 
  public get percentReservedForGoodBots() {
    return this.getStringAttribute('percent_reserved_for_good_bots');
  }
  public set percentReservedForGoodBots(value: string) {
    this._percentReservedForGoodBots = value;
  }
  public resetPercentReservedForGoodBots() {
    this._percentReservedForGoodBots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentReservedForGoodBotsInput() {
    return this._percentReservedForGoodBots;
  }

  // percent_reserved_for_outstanding - computed: false, optional: true, required: false
  private _percentReservedForOutstanding?: string; 
  public get percentReservedForOutstanding() {
    return this.getStringAttribute('percent_reserved_for_outstanding');
  }
  public set percentReservedForOutstanding(value: string) {
    this._percentReservedForOutstanding = value;
  }
  public resetPercentReservedForOutstanding() {
    this._percentReservedForOutstanding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentReservedForOutstandingInput() {
    return this._percentReservedForOutstanding;
  }

  // se_cache_size - computed: false, optional: true, required: false
  private _seCacheSize?: string; 
  public get seCacheSize() {
    return this.getStringAttribute('se_cache_size');
  }
  public set seCacheSize(value: string) {
    this._seCacheSize = value;
  }
  public resetSeCacheSize() {
    this._seCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seCacheSizeInput() {
    return this._seCacheSize;
  }

  // upstream_update_interval - computed: false, optional: true, required: false
  private _upstreamUpdateInterval?: string; 
  public get upstreamUpdateInterval() {
    return this.getStringAttribute('upstream_update_interval');
  }
  public set upstreamUpdateInterval(value: string) {
    this._upstreamUpdateInterval = value;
  }
  public resetUpstreamUpdateInterval() {
    this._upstreamUpdateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamUpdateIntervalInput() {
    return this._upstreamUpdateInterval;
  }
}

export class ControllerpropertiesUserAgentCacheConfigList extends cdktf.ComplexList {
  public internalValue? : ControllerpropertiesUserAgentCacheConfig[] | cdktf.IResolvable

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
  public get(index: number): ControllerpropertiesUserAgentCacheConfigOutputReference {
    return new ControllerpropertiesUserAgentCacheConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties avi_controllerproperties}
*/
export class Controllerproperties extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_controllerproperties";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Controllerproperties resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Controllerproperties to import
  * @param importFromId The id of the existing Controllerproperties that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Controllerproperties to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_controllerproperties", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/controllerproperties avi_controllerproperties} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ControllerpropertiesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ControllerpropertiesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_controllerproperties',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '30.2.5',
        providerVersionConstraint: '30.2.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertManagerUseEvms = config.alertManagerUseEvms;
    this._allowAdminNetworkUpdates = config.allowAdminNetworkUpdates;
    this._allowIpForwarding = config.allowIpForwarding;
    this._allowUnauthenticatedApis = config.allowUnauthenticatedApis;
    this._allowUnauthenticatedNodes = config.allowUnauthenticatedNodes;
    this._apiIdleTimeout = config.apiIdleTimeout;
    this._apiPerfLoggingThreshold = config.apiPerfLoggingThreshold;
    this._appviewxCompatMode = config.appviewxCompatMode;
    this._asyncPatchMergePeriod = config.asyncPatchMergePeriod;
    this._asyncPatchRequestCleanupDuration = config.asyncPatchRequestCleanupDuration;
    this._attachIpRetryInterval = config.attachIpRetryInterval;
    this._attachIpRetryLimit = config.attachIpRetryLimit;
    this._bmUseAnsible = config.bmUseAnsible;
    this._checkVsvipFqdnSyntax = config.checkVsvipFqdnSyntax;
    this._cleanupExpiredAuthtokenTimeoutPeriod = config.cleanupExpiredAuthtokenTimeoutPeriod;
    this._cleanupSessionsTimeoutPeriod = config.cleanupSessionsTimeoutPeriod;
    this._cloudDiscoveryInterval = config.cloudDiscoveryInterval;
    this._cloudReconcile = config.cloudReconcile;
    this._cloudReconcileInterval = config.cloudReconcileInterval;
    this._clusterIpGratuitousArpPeriod = config.clusterIpGratuitousArpPeriod;
    this._consistencyCheckTimeoutPeriod = config.consistencyCheckTimeoutPeriod;
    this._controllerResourceInfoCollectionPeriod = config.controllerResourceInfoCollectionPeriod;
    this._crashedSeReboot = config.crashedSeReboot;
    this._deadSeDetectionTimer = config.deadSeDetectionTimer;
    this._defaultMinimumApiTimeout = config.defaultMinimumApiTimeout;
    this._delOfflineSeAfterRebootDelay = config.delOfflineSeAfterRebootDelay;
    this._detachIpRetryInterval = config.detachIpRetryInterval;
    this._detachIpRetryLimit = config.detachIpRetryLimit;
    this._detachIpTimeout = config.detachIpTimeout;
    this._dnsRefreshPeriod = config.dnsRefreshPeriod;
    this._dummy = config.dummy;
    this._editSystemLimits = config.editSystemLimits;
    this._enableApiSharding = config.enableApiSharding;
    this._enableMemoryBalancer = config.enableMemoryBalancer;
    this._enablePerProcessStop = config.enablePerProcessStop;
    this._enableResmgrLogCachePrint = config.enableResmgrLogCachePrint;
    this._eventManagerMaxGoroutines = config.eventManagerMaxGoroutines;
    this._eventManagerMaxSubscribers = config.eventManagerMaxSubscribers;
    this._eventManagerProcessingTimeThreshold = config.eventManagerProcessingTimeThreshold;
    this._fatalErrorLeaseTime = config.fatalErrorLeaseTime;
    this._federatedDatastoreCleanupDuration = config.federatedDatastoreCleanupDuration;
    this._fileObjectCleanupPeriod = config.fileObjectCleanupPeriod;
    this._fileobjectMaxFileVersions = config.fileobjectMaxFileVersions;
    this._gslbPurgeBatchSize = config.gslbPurgeBatchSize;
    this._gslbPurgeSleepTimeMs = config.gslbPurgeSleepTimeMs;
    this._id = config.id;
    this._ignoreVrfInNetworksubnetlist = config.ignoreVrfInNetworksubnetlist;
    this._maxDeadSeInGrp = config.maxDeadSeInGrp;
    this._maxPcapPerTenant = config.maxPcapPerTenant;
    this._maxSeSpawnIntervalDelay = config.maxSeSpawnIntervalDelay;
    this._maxSeqAttachIpFailures = config.maxSeqAttachIpFailures;
    this._maxSeqVnicFailures = config.maxSeqVnicFailures;
    this._maxThreadsCcVipBgWorker = config.maxThreadsCcVipBgWorker;
    this._permissionScopedSharedAdminNetworks = config.permissionScopedSharedAdminNetworks;
    this._persistenceKeyRotatePeriod = config.persistenceKeyRotatePeriod;
    this._portalRequestBurstLimit = config.portalRequestBurstLimit;
    this._portalRequestRateLimit = config.portalRequestRateLimit;
    this._portalToken = config.portalToken;
    this._postgresVacuumPeriod = config.postgresVacuumPeriod;
    this._processLockedUseraccountsTimeoutPeriod = config.processLockedUseraccountsTimeoutPeriod;
    this._processPkiProfileTimeoutPeriod = config.processPkiProfileTimeoutPeriod;
    this._queryHostFail = config.queryHostFail;
    this._resmgrLogCachingPeriod = config.resmgrLogCachingPeriod;
    this._restrictCloudReadAccess = config.restrictCloudReadAccess;
    this._safenetHsmVersion = config.safenetHsmVersion;
    this._seCreateTimeout = config.seCreateTimeout;
    this._seFailoverAttemptInterval = config.seFailoverAttemptInterval;
    this._seFromMarketplace = config.seFromMarketplace;
    this._seOfflineDel = config.seOfflineDel;
    this._seSpawnRetryInterval = config.seSpawnRetryInterval;
    this._seUpgradeFlowCleanupTimeout = config.seUpgradeFlowCleanupTimeout;
    this._seVnicCooldown = config.seVnicCooldown;
    this._seVnicGcWaitTime = config.seVnicGcWaitTime;
    this._secureChannelCleanupTimeout = config.secureChannelCleanupTimeout;
    this._secureChannelControllerTokenTimeout = config.secureChannelControllerTokenTimeout;
    this._secureChannelSeTokenTimeout = config.secureChannelSeTokenTimeout;
    this._seupgradeCopyBufferSize = config.seupgradeCopyBufferSize;
    this._seupgradeCopyPoolSize = config.seupgradeCopyPoolSize;
    this._seupgradeFabricPoolSize = config.seupgradeFabricPoolSize;
    this._seupgradeSegroupMinDeadTimeout = config.seupgradeSegroupMinDeadTimeout;
    this._sharedSslCertificates = config.sharedSslCertificates;
    this._skopeoRetryInterval = config.skopeoRetryInterval;
    this._skopeoRetryLimit = config.skopeoRetryLimit;
    this._softMinMemPerSeLimit = config.softMinMemPerSeLimit;
    this._sslCertificateExpiryWarningDays = config.sslCertificateExpiryWarningDays;
    this._systemReportCleanupInterval = config.systemReportCleanupInterval;
    this._systemReportLimit = config.systemReportLimit;
    this._unresponsiveSeReboot = config.unresponsiveSeReboot;
    this._updateDnsEntryRetryLimit = config.updateDnsEntryRetryLimit;
    this._updateDnsEntryTimeout = config.updateDnsEntryTimeout;
    this._upgradeDnsTtl = config.upgradeDnsTtl;
    this._upgradeFatSeLeaseTime = config.upgradeFatSeLeaseTime;
    this._upgradeLeaseTime = config.upgradeLeaseTime;
    this._upgradeSePerVsScaleOpsTxnTime = config.upgradeSePerVsScaleOpsTxnTime;
    this._uuid = config.uuid;
    this._vnicOpFailTime = config.vnicOpFailTime;
    this._vsAwaitingSeTimeout = config.vsAwaitingSeTimeout;
    this._vsKeyRotatePeriod = config.vsKeyRotatePeriod;
    this._vsScaleoutReadyCheckInterval = config.vsScaleoutReadyCheckInterval;
    this._vsSeAttachIpFail = config.vsSeAttachIpFail;
    this._vsSeBootupFail = config.vsSeBootupFail;
    this._vsSeBootupFailPatch = config.vsSeBootupFailPatch;
    this._vsSeCreateFail = config.vsSeCreateFail;
    this._vsSePingFail = config.vsSePingFail;
    this._vsSeVnicFail = config.vsSeVnicFail;
    this._vsSeVnicIpFail = config.vsSeVnicIpFail;
    this._vsphereHaDetectionTimeout = config.vsphereHaDetectionTimeout;
    this._vsphereHaRecoveryTimeout = config.vsphereHaRecoveryTimeout;
    this._vsphereHaTimerInterval = config.vsphereHaTimerInterval;
    this._warmstartSeReconnectWaitTime = config.warmstartSeReconnectWaitTime;
    this._warmstartVsResyncWaitTime = config.warmstartVsResyncWaitTime;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._falsePositiveLearningConfig.internalValue = config.falsePositiveLearningConfig;
    this._userAgentCacheConfig.internalValue = config.userAgentCacheConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_manager_use_evms - computed: false, optional: true, required: false
  private _alertManagerUseEvms?: string; 
  public get alertManagerUseEvms() {
    return this.getStringAttribute('alert_manager_use_evms');
  }
  public set alertManagerUseEvms(value: string) {
    this._alertManagerUseEvms = value;
  }
  public resetAlertManagerUseEvms() {
    this._alertManagerUseEvms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertManagerUseEvmsInput() {
    return this._alertManagerUseEvms;
  }

  // allow_admin_network_updates - computed: false, optional: true, required: false
  private _allowAdminNetworkUpdates?: string; 
  public get allowAdminNetworkUpdates() {
    return this.getStringAttribute('allow_admin_network_updates');
  }
  public set allowAdminNetworkUpdates(value: string) {
    this._allowAdminNetworkUpdates = value;
  }
  public resetAllowAdminNetworkUpdates() {
    this._allowAdminNetworkUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAdminNetworkUpdatesInput() {
    return this._allowAdminNetworkUpdates;
  }

  // allow_ip_forwarding - computed: false, optional: true, required: false
  private _allowIpForwarding?: string; 
  public get allowIpForwarding() {
    return this.getStringAttribute('allow_ip_forwarding');
  }
  public set allowIpForwarding(value: string) {
    this._allowIpForwarding = value;
  }
  public resetAllowIpForwarding() {
    this._allowIpForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowIpForwardingInput() {
    return this._allowIpForwarding;
  }

  // allow_unauthenticated_apis - computed: false, optional: true, required: false
  private _allowUnauthenticatedApis?: string; 
  public get allowUnauthenticatedApis() {
    return this.getStringAttribute('allow_unauthenticated_apis');
  }
  public set allowUnauthenticatedApis(value: string) {
    this._allowUnauthenticatedApis = value;
  }
  public resetAllowUnauthenticatedApis() {
    this._allowUnauthenticatedApis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnauthenticatedApisInput() {
    return this._allowUnauthenticatedApis;
  }

  // allow_unauthenticated_nodes - computed: false, optional: true, required: false
  private _allowUnauthenticatedNodes?: string; 
  public get allowUnauthenticatedNodes() {
    return this.getStringAttribute('allow_unauthenticated_nodes');
  }
  public set allowUnauthenticatedNodes(value: string) {
    this._allowUnauthenticatedNodes = value;
  }
  public resetAllowUnauthenticatedNodes() {
    this._allowUnauthenticatedNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnauthenticatedNodesInput() {
    return this._allowUnauthenticatedNodes;
  }

  // api_idle_timeout - computed: false, optional: true, required: false
  private _apiIdleTimeout?: string; 
  public get apiIdleTimeout() {
    return this.getStringAttribute('api_idle_timeout');
  }
  public set apiIdleTimeout(value: string) {
    this._apiIdleTimeout = value;
  }
  public resetApiIdleTimeout() {
    this._apiIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdleTimeoutInput() {
    return this._apiIdleTimeout;
  }

  // api_perf_logging_threshold - computed: false, optional: true, required: false
  private _apiPerfLoggingThreshold?: string; 
  public get apiPerfLoggingThreshold() {
    return this.getStringAttribute('api_perf_logging_threshold');
  }
  public set apiPerfLoggingThreshold(value: string) {
    this._apiPerfLoggingThreshold = value;
  }
  public resetApiPerfLoggingThreshold() {
    this._apiPerfLoggingThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiPerfLoggingThresholdInput() {
    return this._apiPerfLoggingThreshold;
  }

  // appviewx_compat_mode - computed: false, optional: true, required: false
  private _appviewxCompatMode?: string; 
  public get appviewxCompatMode() {
    return this.getStringAttribute('appviewx_compat_mode');
  }
  public set appviewxCompatMode(value: string) {
    this._appviewxCompatMode = value;
  }
  public resetAppviewxCompatMode() {
    this._appviewxCompatMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appviewxCompatModeInput() {
    return this._appviewxCompatMode;
  }

  // async_patch_merge_period - computed: false, optional: true, required: false
  private _asyncPatchMergePeriod?: string; 
  public get asyncPatchMergePeriod() {
    return this.getStringAttribute('async_patch_merge_period');
  }
  public set asyncPatchMergePeriod(value: string) {
    this._asyncPatchMergePeriod = value;
  }
  public resetAsyncPatchMergePeriod() {
    this._asyncPatchMergePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncPatchMergePeriodInput() {
    return this._asyncPatchMergePeriod;
  }

  // async_patch_request_cleanup_duration - computed: false, optional: true, required: false
  private _asyncPatchRequestCleanupDuration?: string; 
  public get asyncPatchRequestCleanupDuration() {
    return this.getStringAttribute('async_patch_request_cleanup_duration');
  }
  public set asyncPatchRequestCleanupDuration(value: string) {
    this._asyncPatchRequestCleanupDuration = value;
  }
  public resetAsyncPatchRequestCleanupDuration() {
    this._asyncPatchRequestCleanupDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncPatchRequestCleanupDurationInput() {
    return this._asyncPatchRequestCleanupDuration;
  }

  // attach_ip_retry_interval - computed: false, optional: true, required: false
  private _attachIpRetryInterval?: string; 
  public get attachIpRetryInterval() {
    return this.getStringAttribute('attach_ip_retry_interval');
  }
  public set attachIpRetryInterval(value: string) {
    this._attachIpRetryInterval = value;
  }
  public resetAttachIpRetryInterval() {
    this._attachIpRetryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachIpRetryIntervalInput() {
    return this._attachIpRetryInterval;
  }

  // attach_ip_retry_limit - computed: false, optional: true, required: false
  private _attachIpRetryLimit?: string; 
  public get attachIpRetryLimit() {
    return this.getStringAttribute('attach_ip_retry_limit');
  }
  public set attachIpRetryLimit(value: string) {
    this._attachIpRetryLimit = value;
  }
  public resetAttachIpRetryLimit() {
    this._attachIpRetryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachIpRetryLimitInput() {
    return this._attachIpRetryLimit;
  }

  // bm_use_ansible - computed: false, optional: true, required: false
  private _bmUseAnsible?: string; 
  public get bmUseAnsible() {
    return this.getStringAttribute('bm_use_ansible');
  }
  public set bmUseAnsible(value: string) {
    this._bmUseAnsible = value;
  }
  public resetBmUseAnsible() {
    this._bmUseAnsible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bmUseAnsibleInput() {
    return this._bmUseAnsible;
  }

  // check_vsvip_fqdn_syntax - computed: false, optional: true, required: false
  private _checkVsvipFqdnSyntax?: string; 
  public get checkVsvipFqdnSyntax() {
    return this.getStringAttribute('check_vsvip_fqdn_syntax');
  }
  public set checkVsvipFqdnSyntax(value: string) {
    this._checkVsvipFqdnSyntax = value;
  }
  public resetCheckVsvipFqdnSyntax() {
    this._checkVsvipFqdnSyntax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkVsvipFqdnSyntaxInput() {
    return this._checkVsvipFqdnSyntax;
  }

  // cleanup_expired_authtoken_timeout_period - computed: false, optional: true, required: false
  private _cleanupExpiredAuthtokenTimeoutPeriod?: string; 
  public get cleanupExpiredAuthtokenTimeoutPeriod() {
    return this.getStringAttribute('cleanup_expired_authtoken_timeout_period');
  }
  public set cleanupExpiredAuthtokenTimeoutPeriod(value: string) {
    this._cleanupExpiredAuthtokenTimeoutPeriod = value;
  }
  public resetCleanupExpiredAuthtokenTimeoutPeriod() {
    this._cleanupExpiredAuthtokenTimeoutPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupExpiredAuthtokenTimeoutPeriodInput() {
    return this._cleanupExpiredAuthtokenTimeoutPeriod;
  }

  // cleanup_sessions_timeout_period - computed: false, optional: true, required: false
  private _cleanupSessionsTimeoutPeriod?: string; 
  public get cleanupSessionsTimeoutPeriod() {
    return this.getStringAttribute('cleanup_sessions_timeout_period');
  }
  public set cleanupSessionsTimeoutPeriod(value: string) {
    this._cleanupSessionsTimeoutPeriod = value;
  }
  public resetCleanupSessionsTimeoutPeriod() {
    this._cleanupSessionsTimeoutPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupSessionsTimeoutPeriodInput() {
    return this._cleanupSessionsTimeoutPeriod;
  }

  // cloud_discovery_interval - computed: false, optional: true, required: false
  private _cloudDiscoveryInterval?: string; 
  public get cloudDiscoveryInterval() {
    return this.getStringAttribute('cloud_discovery_interval');
  }
  public set cloudDiscoveryInterval(value: string) {
    this._cloudDiscoveryInterval = value;
  }
  public resetCloudDiscoveryInterval() {
    this._cloudDiscoveryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudDiscoveryIntervalInput() {
    return this._cloudDiscoveryInterval;
  }

  // cloud_reconcile - computed: false, optional: true, required: false
  private _cloudReconcile?: string; 
  public get cloudReconcile() {
    return this.getStringAttribute('cloud_reconcile');
  }
  public set cloudReconcile(value: string) {
    this._cloudReconcile = value;
  }
  public resetCloudReconcile() {
    this._cloudReconcile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudReconcileInput() {
    return this._cloudReconcile;
  }

  // cloud_reconcile_interval - computed: false, optional: true, required: false
  private _cloudReconcileInterval?: string; 
  public get cloudReconcileInterval() {
    return this.getStringAttribute('cloud_reconcile_interval');
  }
  public set cloudReconcileInterval(value: string) {
    this._cloudReconcileInterval = value;
  }
  public resetCloudReconcileInterval() {
    this._cloudReconcileInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudReconcileIntervalInput() {
    return this._cloudReconcileInterval;
  }

  // cluster_ip_gratuitous_arp_period - computed: false, optional: true, required: false
  private _clusterIpGratuitousArpPeriod?: string; 
  public get clusterIpGratuitousArpPeriod() {
    return this.getStringAttribute('cluster_ip_gratuitous_arp_period');
  }
  public set clusterIpGratuitousArpPeriod(value: string) {
    this._clusterIpGratuitousArpPeriod = value;
  }
  public resetClusterIpGratuitousArpPeriod() {
    this._clusterIpGratuitousArpPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIpGratuitousArpPeriodInput() {
    return this._clusterIpGratuitousArpPeriod;
  }

  // consistency_check_timeout_period - computed: false, optional: true, required: false
  private _consistencyCheckTimeoutPeriod?: string; 
  public get consistencyCheckTimeoutPeriod() {
    return this.getStringAttribute('consistency_check_timeout_period');
  }
  public set consistencyCheckTimeoutPeriod(value: string) {
    this._consistencyCheckTimeoutPeriod = value;
  }
  public resetConsistencyCheckTimeoutPeriod() {
    this._consistencyCheckTimeoutPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consistencyCheckTimeoutPeriodInput() {
    return this._consistencyCheckTimeoutPeriod;
  }

  // controller_resource_info_collection_period - computed: false, optional: true, required: false
  private _controllerResourceInfoCollectionPeriod?: string; 
  public get controllerResourceInfoCollectionPeriod() {
    return this.getStringAttribute('controller_resource_info_collection_period');
  }
  public set controllerResourceInfoCollectionPeriod(value: string) {
    this._controllerResourceInfoCollectionPeriod = value;
  }
  public resetControllerResourceInfoCollectionPeriod() {
    this._controllerResourceInfoCollectionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerResourceInfoCollectionPeriodInput() {
    return this._controllerResourceInfoCollectionPeriod;
  }

  // crashed_se_reboot - computed: false, optional: true, required: false
  private _crashedSeReboot?: string; 
  public get crashedSeReboot() {
    return this.getStringAttribute('crashed_se_reboot');
  }
  public set crashedSeReboot(value: string) {
    this._crashedSeReboot = value;
  }
  public resetCrashedSeReboot() {
    this._crashedSeReboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crashedSeRebootInput() {
    return this._crashedSeReboot;
  }

  // dead_se_detection_timer - computed: false, optional: true, required: false
  private _deadSeDetectionTimer?: string; 
  public get deadSeDetectionTimer() {
    return this.getStringAttribute('dead_se_detection_timer');
  }
  public set deadSeDetectionTimer(value: string) {
    this._deadSeDetectionTimer = value;
  }
  public resetDeadSeDetectionTimer() {
    this._deadSeDetectionTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadSeDetectionTimerInput() {
    return this._deadSeDetectionTimer;
  }

  // default_minimum_api_timeout - computed: false, optional: true, required: false
  private _defaultMinimumApiTimeout?: string; 
  public get defaultMinimumApiTimeout() {
    return this.getStringAttribute('default_minimum_api_timeout');
  }
  public set defaultMinimumApiTimeout(value: string) {
    this._defaultMinimumApiTimeout = value;
  }
  public resetDefaultMinimumApiTimeout() {
    this._defaultMinimumApiTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMinimumApiTimeoutInput() {
    return this._defaultMinimumApiTimeout;
  }

  // del_offline_se_after_reboot_delay - computed: false, optional: true, required: false
  private _delOfflineSeAfterRebootDelay?: string; 
  public get delOfflineSeAfterRebootDelay() {
    return this.getStringAttribute('del_offline_se_after_reboot_delay');
  }
  public set delOfflineSeAfterRebootDelay(value: string) {
    this._delOfflineSeAfterRebootDelay = value;
  }
  public resetDelOfflineSeAfterRebootDelay() {
    this._delOfflineSeAfterRebootDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delOfflineSeAfterRebootDelayInput() {
    return this._delOfflineSeAfterRebootDelay;
  }

  // detach_ip_retry_interval - computed: false, optional: true, required: false
  private _detachIpRetryInterval?: string; 
  public get detachIpRetryInterval() {
    return this.getStringAttribute('detach_ip_retry_interval');
  }
  public set detachIpRetryInterval(value: string) {
    this._detachIpRetryInterval = value;
  }
  public resetDetachIpRetryInterval() {
    this._detachIpRetryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detachIpRetryIntervalInput() {
    return this._detachIpRetryInterval;
  }

  // detach_ip_retry_limit - computed: false, optional: true, required: false
  private _detachIpRetryLimit?: string; 
  public get detachIpRetryLimit() {
    return this.getStringAttribute('detach_ip_retry_limit');
  }
  public set detachIpRetryLimit(value: string) {
    this._detachIpRetryLimit = value;
  }
  public resetDetachIpRetryLimit() {
    this._detachIpRetryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detachIpRetryLimitInput() {
    return this._detachIpRetryLimit;
  }

  // detach_ip_timeout - computed: false, optional: true, required: false
  private _detachIpTimeout?: string; 
  public get detachIpTimeout() {
    return this.getStringAttribute('detach_ip_timeout');
  }
  public set detachIpTimeout(value: string) {
    this._detachIpTimeout = value;
  }
  public resetDetachIpTimeout() {
    this._detachIpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detachIpTimeoutInput() {
    return this._detachIpTimeout;
  }

  // dns_refresh_period - computed: false, optional: true, required: false
  private _dnsRefreshPeriod?: string; 
  public get dnsRefreshPeriod() {
    return this.getStringAttribute('dns_refresh_period');
  }
  public set dnsRefreshPeriod(value: string) {
    this._dnsRefreshPeriod = value;
  }
  public resetDnsRefreshPeriod() {
    this._dnsRefreshPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRefreshPeriodInput() {
    return this._dnsRefreshPeriod;
  }

  // dummy - computed: true, optional: true, required: false
  private _dummy?: string; 
  public get dummy() {
    return this.getStringAttribute('dummy');
  }
  public set dummy(value: string) {
    this._dummy = value;
  }
  public resetDummy() {
    this._dummy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dummyInput() {
    return this._dummy;
  }

  // edit_system_limits - computed: false, optional: true, required: false
  private _editSystemLimits?: string; 
  public get editSystemLimits() {
    return this.getStringAttribute('edit_system_limits');
  }
  public set editSystemLimits(value: string) {
    this._editSystemLimits = value;
  }
  public resetEditSystemLimits() {
    this._editSystemLimits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editSystemLimitsInput() {
    return this._editSystemLimits;
  }

  // enable_api_sharding - computed: false, optional: true, required: false
  private _enableApiSharding?: string; 
  public get enableApiSharding() {
    return this.getStringAttribute('enable_api_sharding');
  }
  public set enableApiSharding(value: string) {
    this._enableApiSharding = value;
  }
  public resetEnableApiSharding() {
    this._enableApiSharding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableApiShardingInput() {
    return this._enableApiSharding;
  }

  // enable_memory_balancer - computed: false, optional: true, required: false
  private _enableMemoryBalancer?: string; 
  public get enableMemoryBalancer() {
    return this.getStringAttribute('enable_memory_balancer');
  }
  public set enableMemoryBalancer(value: string) {
    this._enableMemoryBalancer = value;
  }
  public resetEnableMemoryBalancer() {
    this._enableMemoryBalancer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMemoryBalancerInput() {
    return this._enableMemoryBalancer;
  }

  // enable_per_process_stop - computed: false, optional: true, required: false
  private _enablePerProcessStop?: string; 
  public get enablePerProcessStop() {
    return this.getStringAttribute('enable_per_process_stop');
  }
  public set enablePerProcessStop(value: string) {
    this._enablePerProcessStop = value;
  }
  public resetEnablePerProcessStop() {
    this._enablePerProcessStop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePerProcessStopInput() {
    return this._enablePerProcessStop;
  }

  // enable_resmgr_log_cache_print - computed: false, optional: true, required: false
  private _enableResmgrLogCachePrint?: string; 
  public get enableResmgrLogCachePrint() {
    return this.getStringAttribute('enable_resmgr_log_cache_print');
  }
  public set enableResmgrLogCachePrint(value: string) {
    this._enableResmgrLogCachePrint = value;
  }
  public resetEnableResmgrLogCachePrint() {
    this._enableResmgrLogCachePrint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableResmgrLogCachePrintInput() {
    return this._enableResmgrLogCachePrint;
  }

  // event_manager_max_goroutines - computed: false, optional: true, required: false
  private _eventManagerMaxGoroutines?: string; 
  public get eventManagerMaxGoroutines() {
    return this.getStringAttribute('event_manager_max_goroutines');
  }
  public set eventManagerMaxGoroutines(value: string) {
    this._eventManagerMaxGoroutines = value;
  }
  public resetEventManagerMaxGoroutines() {
    this._eventManagerMaxGoroutines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventManagerMaxGoroutinesInput() {
    return this._eventManagerMaxGoroutines;
  }

  // event_manager_max_subscribers - computed: false, optional: true, required: false
  private _eventManagerMaxSubscribers?: string; 
  public get eventManagerMaxSubscribers() {
    return this.getStringAttribute('event_manager_max_subscribers');
  }
  public set eventManagerMaxSubscribers(value: string) {
    this._eventManagerMaxSubscribers = value;
  }
  public resetEventManagerMaxSubscribers() {
    this._eventManagerMaxSubscribers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventManagerMaxSubscribersInput() {
    return this._eventManagerMaxSubscribers;
  }

  // event_manager_processing_time_threshold - computed: false, optional: true, required: false
  private _eventManagerProcessingTimeThreshold?: string; 
  public get eventManagerProcessingTimeThreshold() {
    return this.getStringAttribute('event_manager_processing_time_threshold');
  }
  public set eventManagerProcessingTimeThreshold(value: string) {
    this._eventManagerProcessingTimeThreshold = value;
  }
  public resetEventManagerProcessingTimeThreshold() {
    this._eventManagerProcessingTimeThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventManagerProcessingTimeThresholdInput() {
    return this._eventManagerProcessingTimeThreshold;
  }

  // fatal_error_lease_time - computed: false, optional: true, required: false
  private _fatalErrorLeaseTime?: string; 
  public get fatalErrorLeaseTime() {
    return this.getStringAttribute('fatal_error_lease_time');
  }
  public set fatalErrorLeaseTime(value: string) {
    this._fatalErrorLeaseTime = value;
  }
  public resetFatalErrorLeaseTime() {
    this._fatalErrorLeaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fatalErrorLeaseTimeInput() {
    return this._fatalErrorLeaseTime;
  }

  // federated_datastore_cleanup_duration - computed: false, optional: true, required: false
  private _federatedDatastoreCleanupDuration?: string; 
  public get federatedDatastoreCleanupDuration() {
    return this.getStringAttribute('federated_datastore_cleanup_duration');
  }
  public set federatedDatastoreCleanupDuration(value: string) {
    this._federatedDatastoreCleanupDuration = value;
  }
  public resetFederatedDatastoreCleanupDuration() {
    this._federatedDatastoreCleanupDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get federatedDatastoreCleanupDurationInput() {
    return this._federatedDatastoreCleanupDuration;
  }

  // file_object_cleanup_period - computed: false, optional: true, required: false
  private _fileObjectCleanupPeriod?: string; 
  public get fileObjectCleanupPeriod() {
    return this.getStringAttribute('file_object_cleanup_period');
  }
  public set fileObjectCleanupPeriod(value: string) {
    this._fileObjectCleanupPeriod = value;
  }
  public resetFileObjectCleanupPeriod() {
    this._fileObjectCleanupPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileObjectCleanupPeriodInput() {
    return this._fileObjectCleanupPeriod;
  }

  // fileobject_max_file_versions - computed: false, optional: true, required: false
  private _fileobjectMaxFileVersions?: string; 
  public get fileobjectMaxFileVersions() {
    return this.getStringAttribute('fileobject_max_file_versions');
  }
  public set fileobjectMaxFileVersions(value: string) {
    this._fileobjectMaxFileVersions = value;
  }
  public resetFileobjectMaxFileVersions() {
    this._fileobjectMaxFileVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileobjectMaxFileVersionsInput() {
    return this._fileobjectMaxFileVersions;
  }

  // gslb_purge_batch_size - computed: false, optional: true, required: false
  private _gslbPurgeBatchSize?: string; 
  public get gslbPurgeBatchSize() {
    return this.getStringAttribute('gslb_purge_batch_size');
  }
  public set gslbPurgeBatchSize(value: string) {
    this._gslbPurgeBatchSize = value;
  }
  public resetGslbPurgeBatchSize() {
    this._gslbPurgeBatchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbPurgeBatchSizeInput() {
    return this._gslbPurgeBatchSize;
  }

  // gslb_purge_sleep_time_ms - computed: false, optional: true, required: false
  private _gslbPurgeSleepTimeMs?: string; 
  public get gslbPurgeSleepTimeMs() {
    return this.getStringAttribute('gslb_purge_sleep_time_ms');
  }
  public set gslbPurgeSleepTimeMs(value: string) {
    this._gslbPurgeSleepTimeMs = value;
  }
  public resetGslbPurgeSleepTimeMs() {
    this._gslbPurgeSleepTimeMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbPurgeSleepTimeMsInput() {
    return this._gslbPurgeSleepTimeMs;
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

  // ignore_vrf_in_networksubnetlist - computed: false, optional: true, required: false
  private _ignoreVrfInNetworksubnetlist?: string; 
  public get ignoreVrfInNetworksubnetlist() {
    return this.getStringAttribute('ignore_vrf_in_networksubnetlist');
  }
  public set ignoreVrfInNetworksubnetlist(value: string) {
    this._ignoreVrfInNetworksubnetlist = value;
  }
  public resetIgnoreVrfInNetworksubnetlist() {
    this._ignoreVrfInNetworksubnetlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreVrfInNetworksubnetlistInput() {
    return this._ignoreVrfInNetworksubnetlist;
  }

  // max_dead_se_in_grp - computed: false, optional: true, required: false
  private _maxDeadSeInGrp?: string; 
  public get maxDeadSeInGrp() {
    return this.getStringAttribute('max_dead_se_in_grp');
  }
  public set maxDeadSeInGrp(value: string) {
    this._maxDeadSeInGrp = value;
  }
  public resetMaxDeadSeInGrp() {
    this._maxDeadSeInGrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDeadSeInGrpInput() {
    return this._maxDeadSeInGrp;
  }

  // max_pcap_per_tenant - computed: false, optional: true, required: false
  private _maxPcapPerTenant?: string; 
  public get maxPcapPerTenant() {
    return this.getStringAttribute('max_pcap_per_tenant');
  }
  public set maxPcapPerTenant(value: string) {
    this._maxPcapPerTenant = value;
  }
  public resetMaxPcapPerTenant() {
    this._maxPcapPerTenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPcapPerTenantInput() {
    return this._maxPcapPerTenant;
  }

  // max_se_spawn_interval_delay - computed: false, optional: true, required: false
  private _maxSeSpawnIntervalDelay?: string; 
  public get maxSeSpawnIntervalDelay() {
    return this.getStringAttribute('max_se_spawn_interval_delay');
  }
  public set maxSeSpawnIntervalDelay(value: string) {
    this._maxSeSpawnIntervalDelay = value;
  }
  public resetMaxSeSpawnIntervalDelay() {
    this._maxSeSpawnIntervalDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSeSpawnIntervalDelayInput() {
    return this._maxSeSpawnIntervalDelay;
  }

  // max_seq_attach_ip_failures - computed: false, optional: true, required: false
  private _maxSeqAttachIpFailures?: string; 
  public get maxSeqAttachIpFailures() {
    return this.getStringAttribute('max_seq_attach_ip_failures');
  }
  public set maxSeqAttachIpFailures(value: string) {
    this._maxSeqAttachIpFailures = value;
  }
  public resetMaxSeqAttachIpFailures() {
    this._maxSeqAttachIpFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSeqAttachIpFailuresInput() {
    return this._maxSeqAttachIpFailures;
  }

  // max_seq_vnic_failures - computed: false, optional: true, required: false
  private _maxSeqVnicFailures?: string; 
  public get maxSeqVnicFailures() {
    return this.getStringAttribute('max_seq_vnic_failures');
  }
  public set maxSeqVnicFailures(value: string) {
    this._maxSeqVnicFailures = value;
  }
  public resetMaxSeqVnicFailures() {
    this._maxSeqVnicFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSeqVnicFailuresInput() {
    return this._maxSeqVnicFailures;
  }

  // max_threads_cc_vip_bg_worker - computed: false, optional: true, required: false
  private _maxThreadsCcVipBgWorker?: string; 
  public get maxThreadsCcVipBgWorker() {
    return this.getStringAttribute('max_threads_cc_vip_bg_worker');
  }
  public set maxThreadsCcVipBgWorker(value: string) {
    this._maxThreadsCcVipBgWorker = value;
  }
  public resetMaxThreadsCcVipBgWorker() {
    this._maxThreadsCcVipBgWorker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxThreadsCcVipBgWorkerInput() {
    return this._maxThreadsCcVipBgWorker;
  }

  // permission_scoped_shared_admin_networks - computed: false, optional: true, required: false
  private _permissionScopedSharedAdminNetworks?: string; 
  public get permissionScopedSharedAdminNetworks() {
    return this.getStringAttribute('permission_scoped_shared_admin_networks');
  }
  public set permissionScopedSharedAdminNetworks(value: string) {
    this._permissionScopedSharedAdminNetworks = value;
  }
  public resetPermissionScopedSharedAdminNetworks() {
    this._permissionScopedSharedAdminNetworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionScopedSharedAdminNetworksInput() {
    return this._permissionScopedSharedAdminNetworks;
  }

  // persistence_key_rotate_period - computed: false, optional: true, required: false
  private _persistenceKeyRotatePeriod?: string; 
  public get persistenceKeyRotatePeriod() {
    return this.getStringAttribute('persistence_key_rotate_period');
  }
  public set persistenceKeyRotatePeriod(value: string) {
    this._persistenceKeyRotatePeriod = value;
  }
  public resetPersistenceKeyRotatePeriod() {
    this._persistenceKeyRotatePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceKeyRotatePeriodInput() {
    return this._persistenceKeyRotatePeriod;
  }

  // portal_request_burst_limit - computed: false, optional: true, required: false
  private _portalRequestBurstLimit?: string; 
  public get portalRequestBurstLimit() {
    return this.getStringAttribute('portal_request_burst_limit');
  }
  public set portalRequestBurstLimit(value: string) {
    this._portalRequestBurstLimit = value;
  }
  public resetPortalRequestBurstLimit() {
    this._portalRequestBurstLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalRequestBurstLimitInput() {
    return this._portalRequestBurstLimit;
  }

  // portal_request_rate_limit - computed: false, optional: true, required: false
  private _portalRequestRateLimit?: string; 
  public get portalRequestRateLimit() {
    return this.getStringAttribute('portal_request_rate_limit');
  }
  public set portalRequestRateLimit(value: string) {
    this._portalRequestRateLimit = value;
  }
  public resetPortalRequestRateLimit() {
    this._portalRequestRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalRequestRateLimitInput() {
    return this._portalRequestRateLimit;
  }

  // portal_token - computed: true, optional: true, required: false
  private _portalToken?: string; 
  public get portalToken() {
    return this.getStringAttribute('portal_token');
  }
  public set portalToken(value: string) {
    this._portalToken = value;
  }
  public resetPortalToken() {
    this._portalToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalTokenInput() {
    return this._portalToken;
  }

  // postgres_vacuum_period - computed: false, optional: true, required: false
  private _postgresVacuumPeriod?: string; 
  public get postgresVacuumPeriod() {
    return this.getStringAttribute('postgres_vacuum_period');
  }
  public set postgresVacuumPeriod(value: string) {
    this._postgresVacuumPeriod = value;
  }
  public resetPostgresVacuumPeriod() {
    this._postgresVacuumPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresVacuumPeriodInput() {
    return this._postgresVacuumPeriod;
  }

  // process_locked_useraccounts_timeout_period - computed: false, optional: true, required: false
  private _processLockedUseraccountsTimeoutPeriod?: string; 
  public get processLockedUseraccountsTimeoutPeriod() {
    return this.getStringAttribute('process_locked_useraccounts_timeout_period');
  }
  public set processLockedUseraccountsTimeoutPeriod(value: string) {
    this._processLockedUseraccountsTimeoutPeriod = value;
  }
  public resetProcessLockedUseraccountsTimeoutPeriod() {
    this._processLockedUseraccountsTimeoutPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processLockedUseraccountsTimeoutPeriodInput() {
    return this._processLockedUseraccountsTimeoutPeriod;
  }

  // process_pki_profile_timeout_period - computed: false, optional: true, required: false
  private _processPkiProfileTimeoutPeriod?: string; 
  public get processPkiProfileTimeoutPeriod() {
    return this.getStringAttribute('process_pki_profile_timeout_period');
  }
  public set processPkiProfileTimeoutPeriod(value: string) {
    this._processPkiProfileTimeoutPeriod = value;
  }
  public resetProcessPkiProfileTimeoutPeriod() {
    this._processPkiProfileTimeoutPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processPkiProfileTimeoutPeriodInput() {
    return this._processPkiProfileTimeoutPeriod;
  }

  // query_host_fail - computed: false, optional: true, required: false
  private _queryHostFail?: string; 
  public get queryHostFail() {
    return this.getStringAttribute('query_host_fail');
  }
  public set queryHostFail(value: string) {
    this._queryHostFail = value;
  }
  public resetQueryHostFail() {
    this._queryHostFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryHostFailInput() {
    return this._queryHostFail;
  }

  // resmgr_log_caching_period - computed: false, optional: true, required: false
  private _resmgrLogCachingPeriod?: string; 
  public get resmgrLogCachingPeriod() {
    return this.getStringAttribute('resmgr_log_caching_period');
  }
  public set resmgrLogCachingPeriod(value: string) {
    this._resmgrLogCachingPeriod = value;
  }
  public resetResmgrLogCachingPeriod() {
    this._resmgrLogCachingPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resmgrLogCachingPeriodInput() {
    return this._resmgrLogCachingPeriod;
  }

  // restrict_cloud_read_access - computed: false, optional: true, required: false
  private _restrictCloudReadAccess?: string; 
  public get restrictCloudReadAccess() {
    return this.getStringAttribute('restrict_cloud_read_access');
  }
  public set restrictCloudReadAccess(value: string) {
    this._restrictCloudReadAccess = value;
  }
  public resetRestrictCloudReadAccess() {
    this._restrictCloudReadAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictCloudReadAccessInput() {
    return this._restrictCloudReadAccess;
  }

  // safenet_hsm_version - computed: true, optional: true, required: false
  private _safenetHsmVersion?: string; 
  public get safenetHsmVersion() {
    return this.getStringAttribute('safenet_hsm_version');
  }
  public set safenetHsmVersion(value: string) {
    this._safenetHsmVersion = value;
  }
  public resetSafenetHsmVersion() {
    this._safenetHsmVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get safenetHsmVersionInput() {
    return this._safenetHsmVersion;
  }

  // se_create_timeout - computed: false, optional: true, required: false
  private _seCreateTimeout?: string; 
  public get seCreateTimeout() {
    return this.getStringAttribute('se_create_timeout');
  }
  public set seCreateTimeout(value: string) {
    this._seCreateTimeout = value;
  }
  public resetSeCreateTimeout() {
    this._seCreateTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seCreateTimeoutInput() {
    return this._seCreateTimeout;
  }

  // se_failover_attempt_interval - computed: false, optional: true, required: false
  private _seFailoverAttemptInterval?: string; 
  public get seFailoverAttemptInterval() {
    return this.getStringAttribute('se_failover_attempt_interval');
  }
  public set seFailoverAttemptInterval(value: string) {
    this._seFailoverAttemptInterval = value;
  }
  public resetSeFailoverAttemptInterval() {
    this._seFailoverAttemptInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seFailoverAttemptIntervalInput() {
    return this._seFailoverAttemptInterval;
  }

  // se_from_marketplace - computed: false, optional: true, required: false
  private _seFromMarketplace?: string; 
  public get seFromMarketplace() {
    return this.getStringAttribute('se_from_marketplace');
  }
  public set seFromMarketplace(value: string) {
    this._seFromMarketplace = value;
  }
  public resetSeFromMarketplace() {
    this._seFromMarketplace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seFromMarketplaceInput() {
    return this._seFromMarketplace;
  }

  // se_offline_del - computed: false, optional: true, required: false
  private _seOfflineDel?: string; 
  public get seOfflineDel() {
    return this.getStringAttribute('se_offline_del');
  }
  public set seOfflineDel(value: string) {
    this._seOfflineDel = value;
  }
  public resetSeOfflineDel() {
    this._seOfflineDel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seOfflineDelInput() {
    return this._seOfflineDel;
  }

  // se_spawn_retry_interval - computed: false, optional: true, required: false
  private _seSpawnRetryInterval?: string; 
  public get seSpawnRetryInterval() {
    return this.getStringAttribute('se_spawn_retry_interval');
  }
  public set seSpawnRetryInterval(value: string) {
    this._seSpawnRetryInterval = value;
  }
  public resetSeSpawnRetryInterval() {
    this._seSpawnRetryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seSpawnRetryIntervalInput() {
    return this._seSpawnRetryInterval;
  }

  // se_upgrade_flow_cleanup_timeout - computed: false, optional: true, required: false
  private _seUpgradeFlowCleanupTimeout?: string; 
  public get seUpgradeFlowCleanupTimeout() {
    return this.getStringAttribute('se_upgrade_flow_cleanup_timeout');
  }
  public set seUpgradeFlowCleanupTimeout(value: string) {
    this._seUpgradeFlowCleanupTimeout = value;
  }
  public resetSeUpgradeFlowCleanupTimeout() {
    this._seUpgradeFlowCleanupTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seUpgradeFlowCleanupTimeoutInput() {
    return this._seUpgradeFlowCleanupTimeout;
  }

  // se_vnic_cooldown - computed: false, optional: true, required: false
  private _seVnicCooldown?: string; 
  public get seVnicCooldown() {
    return this.getStringAttribute('se_vnic_cooldown');
  }
  public set seVnicCooldown(value: string) {
    this._seVnicCooldown = value;
  }
  public resetSeVnicCooldown() {
    this._seVnicCooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seVnicCooldownInput() {
    return this._seVnicCooldown;
  }

  // se_vnic_gc_wait_time - computed: false, optional: true, required: false
  private _seVnicGcWaitTime?: string; 
  public get seVnicGcWaitTime() {
    return this.getStringAttribute('se_vnic_gc_wait_time');
  }
  public set seVnicGcWaitTime(value: string) {
    this._seVnicGcWaitTime = value;
  }
  public resetSeVnicGcWaitTime() {
    this._seVnicGcWaitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seVnicGcWaitTimeInput() {
    return this._seVnicGcWaitTime;
  }

  // secure_channel_cleanup_timeout - computed: false, optional: true, required: false
  private _secureChannelCleanupTimeout?: string; 
  public get secureChannelCleanupTimeout() {
    return this.getStringAttribute('secure_channel_cleanup_timeout');
  }
  public set secureChannelCleanupTimeout(value: string) {
    this._secureChannelCleanupTimeout = value;
  }
  public resetSecureChannelCleanupTimeout() {
    this._secureChannelCleanupTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureChannelCleanupTimeoutInput() {
    return this._secureChannelCleanupTimeout;
  }

  // secure_channel_controller_token_timeout - computed: false, optional: true, required: false
  private _secureChannelControllerTokenTimeout?: string; 
  public get secureChannelControllerTokenTimeout() {
    return this.getStringAttribute('secure_channel_controller_token_timeout');
  }
  public set secureChannelControllerTokenTimeout(value: string) {
    this._secureChannelControllerTokenTimeout = value;
  }
  public resetSecureChannelControllerTokenTimeout() {
    this._secureChannelControllerTokenTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureChannelControllerTokenTimeoutInput() {
    return this._secureChannelControllerTokenTimeout;
  }

  // secure_channel_se_token_timeout - computed: false, optional: true, required: false
  private _secureChannelSeTokenTimeout?: string; 
  public get secureChannelSeTokenTimeout() {
    return this.getStringAttribute('secure_channel_se_token_timeout');
  }
  public set secureChannelSeTokenTimeout(value: string) {
    this._secureChannelSeTokenTimeout = value;
  }
  public resetSecureChannelSeTokenTimeout() {
    this._secureChannelSeTokenTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureChannelSeTokenTimeoutInput() {
    return this._secureChannelSeTokenTimeout;
  }

  // seupgrade_copy_buffer_size - computed: false, optional: true, required: false
  private _seupgradeCopyBufferSize?: string; 
  public get seupgradeCopyBufferSize() {
    return this.getStringAttribute('seupgrade_copy_buffer_size');
  }
  public set seupgradeCopyBufferSize(value: string) {
    this._seupgradeCopyBufferSize = value;
  }
  public resetSeupgradeCopyBufferSize() {
    this._seupgradeCopyBufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seupgradeCopyBufferSizeInput() {
    return this._seupgradeCopyBufferSize;
  }

  // seupgrade_copy_pool_size - computed: false, optional: true, required: false
  private _seupgradeCopyPoolSize?: string; 
  public get seupgradeCopyPoolSize() {
    return this.getStringAttribute('seupgrade_copy_pool_size');
  }
  public set seupgradeCopyPoolSize(value: string) {
    this._seupgradeCopyPoolSize = value;
  }
  public resetSeupgradeCopyPoolSize() {
    this._seupgradeCopyPoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seupgradeCopyPoolSizeInput() {
    return this._seupgradeCopyPoolSize;
  }

  // seupgrade_fabric_pool_size - computed: false, optional: true, required: false
  private _seupgradeFabricPoolSize?: string; 
  public get seupgradeFabricPoolSize() {
    return this.getStringAttribute('seupgrade_fabric_pool_size');
  }
  public set seupgradeFabricPoolSize(value: string) {
    this._seupgradeFabricPoolSize = value;
  }
  public resetSeupgradeFabricPoolSize() {
    this._seupgradeFabricPoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seupgradeFabricPoolSizeInput() {
    return this._seupgradeFabricPoolSize;
  }

  // seupgrade_segroup_min_dead_timeout - computed: false, optional: true, required: false
  private _seupgradeSegroupMinDeadTimeout?: string; 
  public get seupgradeSegroupMinDeadTimeout() {
    return this.getStringAttribute('seupgrade_segroup_min_dead_timeout');
  }
  public set seupgradeSegroupMinDeadTimeout(value: string) {
    this._seupgradeSegroupMinDeadTimeout = value;
  }
  public resetSeupgradeSegroupMinDeadTimeout() {
    this._seupgradeSegroupMinDeadTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seupgradeSegroupMinDeadTimeoutInput() {
    return this._seupgradeSegroupMinDeadTimeout;
  }

  // shared_ssl_certificates - computed: false, optional: true, required: false
  private _sharedSslCertificates?: string; 
  public get sharedSslCertificates() {
    return this.getStringAttribute('shared_ssl_certificates');
  }
  public set sharedSslCertificates(value: string) {
    this._sharedSslCertificates = value;
  }
  public resetSharedSslCertificates() {
    this._sharedSslCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedSslCertificatesInput() {
    return this._sharedSslCertificates;
  }

  // skopeo_retry_interval - computed: false, optional: true, required: false
  private _skopeoRetryInterval?: string; 
  public get skopeoRetryInterval() {
    return this.getStringAttribute('skopeo_retry_interval');
  }
  public set skopeoRetryInterval(value: string) {
    this._skopeoRetryInterval = value;
  }
  public resetSkopeoRetryInterval() {
    this._skopeoRetryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skopeoRetryIntervalInput() {
    return this._skopeoRetryInterval;
  }

  // skopeo_retry_limit - computed: false, optional: true, required: false
  private _skopeoRetryLimit?: string; 
  public get skopeoRetryLimit() {
    return this.getStringAttribute('skopeo_retry_limit');
  }
  public set skopeoRetryLimit(value: string) {
    this._skopeoRetryLimit = value;
  }
  public resetSkopeoRetryLimit() {
    this._skopeoRetryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skopeoRetryLimitInput() {
    return this._skopeoRetryLimit;
  }

  // soft_min_mem_per_se_limit - computed: false, optional: true, required: false
  private _softMinMemPerSeLimit?: string; 
  public get softMinMemPerSeLimit() {
    return this.getStringAttribute('soft_min_mem_per_se_limit');
  }
  public set softMinMemPerSeLimit(value: string) {
    this._softMinMemPerSeLimit = value;
  }
  public resetSoftMinMemPerSeLimit() {
    this._softMinMemPerSeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softMinMemPerSeLimitInput() {
    return this._softMinMemPerSeLimit;
  }

  // ssl_certificate_expiry_warning_days - computed: false, optional: true, required: false
  private _sslCertificateExpiryWarningDays?: number[]; 
  public get sslCertificateExpiryWarningDays() {
    return this.getNumberListAttribute('ssl_certificate_expiry_warning_days');
  }
  public set sslCertificateExpiryWarningDays(value: number[]) {
    this._sslCertificateExpiryWarningDays = value;
  }
  public resetSslCertificateExpiryWarningDays() {
    this._sslCertificateExpiryWarningDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertificateExpiryWarningDaysInput() {
    return this._sslCertificateExpiryWarningDays;
  }

  // system_report_cleanup_interval - computed: false, optional: true, required: false
  private _systemReportCleanupInterval?: string; 
  public get systemReportCleanupInterval() {
    return this.getStringAttribute('system_report_cleanup_interval');
  }
  public set systemReportCleanupInterval(value: string) {
    this._systemReportCleanupInterval = value;
  }
  public resetSystemReportCleanupInterval() {
    this._systemReportCleanupInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemReportCleanupIntervalInput() {
    return this._systemReportCleanupInterval;
  }

  // system_report_limit - computed: false, optional: true, required: false
  private _systemReportLimit?: string; 
  public get systemReportLimit() {
    return this.getStringAttribute('system_report_limit');
  }
  public set systemReportLimit(value: string) {
    this._systemReportLimit = value;
  }
  public resetSystemReportLimit() {
    this._systemReportLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemReportLimitInput() {
    return this._systemReportLimit;
  }

  // unresponsive_se_reboot - computed: false, optional: true, required: false
  private _unresponsiveSeReboot?: string; 
  public get unresponsiveSeReboot() {
    return this.getStringAttribute('unresponsive_se_reboot');
  }
  public set unresponsiveSeReboot(value: string) {
    this._unresponsiveSeReboot = value;
  }
  public resetUnresponsiveSeReboot() {
    this._unresponsiveSeReboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unresponsiveSeRebootInput() {
    return this._unresponsiveSeReboot;
  }

  // update_dns_entry_retry_limit - computed: false, optional: true, required: false
  private _updateDnsEntryRetryLimit?: string; 
  public get updateDnsEntryRetryLimit() {
    return this.getStringAttribute('update_dns_entry_retry_limit');
  }
  public set updateDnsEntryRetryLimit(value: string) {
    this._updateDnsEntryRetryLimit = value;
  }
  public resetUpdateDnsEntryRetryLimit() {
    this._updateDnsEntryRetryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateDnsEntryRetryLimitInput() {
    return this._updateDnsEntryRetryLimit;
  }

  // update_dns_entry_timeout - computed: false, optional: true, required: false
  private _updateDnsEntryTimeout?: string; 
  public get updateDnsEntryTimeout() {
    return this.getStringAttribute('update_dns_entry_timeout');
  }
  public set updateDnsEntryTimeout(value: string) {
    this._updateDnsEntryTimeout = value;
  }
  public resetUpdateDnsEntryTimeout() {
    this._updateDnsEntryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateDnsEntryTimeoutInput() {
    return this._updateDnsEntryTimeout;
  }

  // upgrade_dns_ttl - computed: false, optional: true, required: false
  private _upgradeDnsTtl?: string; 
  public get upgradeDnsTtl() {
    return this.getStringAttribute('upgrade_dns_ttl');
  }
  public set upgradeDnsTtl(value: string) {
    this._upgradeDnsTtl = value;
  }
  public resetUpgradeDnsTtl() {
    this._upgradeDnsTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeDnsTtlInput() {
    return this._upgradeDnsTtl;
  }

  // upgrade_fat_se_lease_time - computed: false, optional: true, required: false
  private _upgradeFatSeLeaseTime?: string; 
  public get upgradeFatSeLeaseTime() {
    return this.getStringAttribute('upgrade_fat_se_lease_time');
  }
  public set upgradeFatSeLeaseTime(value: string) {
    this._upgradeFatSeLeaseTime = value;
  }
  public resetUpgradeFatSeLeaseTime() {
    this._upgradeFatSeLeaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeFatSeLeaseTimeInput() {
    return this._upgradeFatSeLeaseTime;
  }

  // upgrade_lease_time - computed: false, optional: true, required: false
  private _upgradeLeaseTime?: string; 
  public get upgradeLeaseTime() {
    return this.getStringAttribute('upgrade_lease_time');
  }
  public set upgradeLeaseTime(value: string) {
    this._upgradeLeaseTime = value;
  }
  public resetUpgradeLeaseTime() {
    this._upgradeLeaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeLeaseTimeInput() {
    return this._upgradeLeaseTime;
  }

  // upgrade_se_per_vs_scale_ops_txn_time - computed: false, optional: true, required: false
  private _upgradeSePerVsScaleOpsTxnTime?: string; 
  public get upgradeSePerVsScaleOpsTxnTime() {
    return this.getStringAttribute('upgrade_se_per_vs_scale_ops_txn_time');
  }
  public set upgradeSePerVsScaleOpsTxnTime(value: string) {
    this._upgradeSePerVsScaleOpsTxnTime = value;
  }
  public resetUpgradeSePerVsScaleOpsTxnTime() {
    this._upgradeSePerVsScaleOpsTxnTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeSePerVsScaleOpsTxnTimeInput() {
    return this._upgradeSePerVsScaleOpsTxnTime;
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

  // vnic_op_fail_time - computed: false, optional: true, required: false
  private _vnicOpFailTime?: string; 
  public get vnicOpFailTime() {
    return this.getStringAttribute('vnic_op_fail_time');
  }
  public set vnicOpFailTime(value: string) {
    this._vnicOpFailTime = value;
  }
  public resetVnicOpFailTime() {
    this._vnicOpFailTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnicOpFailTimeInput() {
    return this._vnicOpFailTime;
  }

  // vs_awaiting_se_timeout - computed: false, optional: true, required: false
  private _vsAwaitingSeTimeout?: string; 
  public get vsAwaitingSeTimeout() {
    return this.getStringAttribute('vs_awaiting_se_timeout');
  }
  public set vsAwaitingSeTimeout(value: string) {
    this._vsAwaitingSeTimeout = value;
  }
  public resetVsAwaitingSeTimeout() {
    this._vsAwaitingSeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsAwaitingSeTimeoutInput() {
    return this._vsAwaitingSeTimeout;
  }

  // vs_key_rotate_period - computed: false, optional: true, required: false
  private _vsKeyRotatePeriod?: string; 
  public get vsKeyRotatePeriod() {
    return this.getStringAttribute('vs_key_rotate_period');
  }
  public set vsKeyRotatePeriod(value: string) {
    this._vsKeyRotatePeriod = value;
  }
  public resetVsKeyRotatePeriod() {
    this._vsKeyRotatePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsKeyRotatePeriodInput() {
    return this._vsKeyRotatePeriod;
  }

  // vs_scaleout_ready_check_interval - computed: false, optional: true, required: false
  private _vsScaleoutReadyCheckInterval?: string; 
  public get vsScaleoutReadyCheckInterval() {
    return this.getStringAttribute('vs_scaleout_ready_check_interval');
  }
  public set vsScaleoutReadyCheckInterval(value: string) {
    this._vsScaleoutReadyCheckInterval = value;
  }
  public resetVsScaleoutReadyCheckInterval() {
    this._vsScaleoutReadyCheckInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsScaleoutReadyCheckIntervalInput() {
    return this._vsScaleoutReadyCheckInterval;
  }

  // vs_se_attach_ip_fail - computed: false, optional: true, required: false
  private _vsSeAttachIpFail?: string; 
  public get vsSeAttachIpFail() {
    return this.getStringAttribute('vs_se_attach_ip_fail');
  }
  public set vsSeAttachIpFail(value: string) {
    this._vsSeAttachIpFail = value;
  }
  public resetVsSeAttachIpFail() {
    this._vsSeAttachIpFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsSeAttachIpFailInput() {
    return this._vsSeAttachIpFail;
  }

  // vs_se_bootup_fail - computed: false, optional: true, required: false
  private _vsSeBootupFail?: string; 
  public get vsSeBootupFail() {
    return this.getStringAttribute('vs_se_bootup_fail');
  }
  public set vsSeBootupFail(value: string) {
    this._vsSeBootupFail = value;
  }
  public resetVsSeBootupFail() {
    this._vsSeBootupFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsSeBootupFailInput() {
    return this._vsSeBootupFail;
  }

  // vs_se_bootup_fail_patch - computed: false, optional: true, required: false
  private _vsSeBootupFailPatch?: string; 
  public get vsSeBootupFailPatch() {
    return this.getStringAttribute('vs_se_bootup_fail_patch');
  }
  public set vsSeBootupFailPatch(value: string) {
    this._vsSeBootupFailPatch = value;
  }
  public resetVsSeBootupFailPatch() {
    this._vsSeBootupFailPatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsSeBootupFailPatchInput() {
    return this._vsSeBootupFailPatch;
  }

  // vs_se_create_fail - computed: false, optional: true, required: false
  private _vsSeCreateFail?: string; 
  public get vsSeCreateFail() {
    return this.getStringAttribute('vs_se_create_fail');
  }
  public set vsSeCreateFail(value: string) {
    this._vsSeCreateFail = value;
  }
  public resetVsSeCreateFail() {
    this._vsSeCreateFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsSeCreateFailInput() {
    return this._vsSeCreateFail;
  }

  // vs_se_ping_fail - computed: false, optional: true, required: false
  private _vsSePingFail?: string; 
  public get vsSePingFail() {
    return this.getStringAttribute('vs_se_ping_fail');
  }
  public set vsSePingFail(value: string) {
    this._vsSePingFail = value;
  }
  public resetVsSePingFail() {
    this._vsSePingFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsSePingFailInput() {
    return this._vsSePingFail;
  }

  // vs_se_vnic_fail - computed: false, optional: true, required: false
  private _vsSeVnicFail?: string; 
  public get vsSeVnicFail() {
    return this.getStringAttribute('vs_se_vnic_fail');
  }
  public set vsSeVnicFail(value: string) {
    this._vsSeVnicFail = value;
  }
  public resetVsSeVnicFail() {
    this._vsSeVnicFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsSeVnicFailInput() {
    return this._vsSeVnicFail;
  }

  // vs_se_vnic_ip_fail - computed: false, optional: true, required: false
  private _vsSeVnicIpFail?: string; 
  public get vsSeVnicIpFail() {
    return this.getStringAttribute('vs_se_vnic_ip_fail');
  }
  public set vsSeVnicIpFail(value: string) {
    this._vsSeVnicIpFail = value;
  }
  public resetVsSeVnicIpFail() {
    this._vsSeVnicIpFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsSeVnicIpFailInput() {
    return this._vsSeVnicIpFail;
  }

  // vsphere_ha_detection_timeout - computed: false, optional: true, required: false
  private _vsphereHaDetectionTimeout?: string; 
  public get vsphereHaDetectionTimeout() {
    return this.getStringAttribute('vsphere_ha_detection_timeout');
  }
  public set vsphereHaDetectionTimeout(value: string) {
    this._vsphereHaDetectionTimeout = value;
  }
  public resetVsphereHaDetectionTimeout() {
    this._vsphereHaDetectionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsphereHaDetectionTimeoutInput() {
    return this._vsphereHaDetectionTimeout;
  }

  // vsphere_ha_recovery_timeout - computed: false, optional: true, required: false
  private _vsphereHaRecoveryTimeout?: string; 
  public get vsphereHaRecoveryTimeout() {
    return this.getStringAttribute('vsphere_ha_recovery_timeout');
  }
  public set vsphereHaRecoveryTimeout(value: string) {
    this._vsphereHaRecoveryTimeout = value;
  }
  public resetVsphereHaRecoveryTimeout() {
    this._vsphereHaRecoveryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsphereHaRecoveryTimeoutInput() {
    return this._vsphereHaRecoveryTimeout;
  }

  // vsphere_ha_timer_interval - computed: false, optional: true, required: false
  private _vsphereHaTimerInterval?: string; 
  public get vsphereHaTimerInterval() {
    return this.getStringAttribute('vsphere_ha_timer_interval');
  }
  public set vsphereHaTimerInterval(value: string) {
    this._vsphereHaTimerInterval = value;
  }
  public resetVsphereHaTimerInterval() {
    this._vsphereHaTimerInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsphereHaTimerIntervalInput() {
    return this._vsphereHaTimerInterval;
  }

  // warmstart_se_reconnect_wait_time - computed: false, optional: true, required: false
  private _warmstartSeReconnectWaitTime?: string; 
  public get warmstartSeReconnectWaitTime() {
    return this.getStringAttribute('warmstart_se_reconnect_wait_time');
  }
  public set warmstartSeReconnectWaitTime(value: string) {
    this._warmstartSeReconnectWaitTime = value;
  }
  public resetWarmstartSeReconnectWaitTime() {
    this._warmstartSeReconnectWaitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmstartSeReconnectWaitTimeInput() {
    return this._warmstartSeReconnectWaitTime;
  }

  // warmstart_vs_resync_wait_time - computed: false, optional: true, required: false
  private _warmstartVsResyncWaitTime?: string; 
  public get warmstartVsResyncWaitTime() {
    return this.getStringAttribute('warmstart_vs_resync_wait_time');
  }
  public set warmstartVsResyncWaitTime(value: string) {
    this._warmstartVsResyncWaitTime = value;
  }
  public resetWarmstartVsResyncWaitTime() {
    this._warmstartVsResyncWaitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmstartVsResyncWaitTimeInput() {
    return this._warmstartVsResyncWaitTime;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new ControllerpropertiesConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: ControllerpropertiesConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // false_positive_learning_config - computed: false, optional: true, required: false
  private _falsePositiveLearningConfig = new ControllerpropertiesFalsePositiveLearningConfigList(this, "false_positive_learning_config", true);
  public get falsePositiveLearningConfig() {
    return this._falsePositiveLearningConfig;
  }
  public putFalsePositiveLearningConfig(value: ControllerpropertiesFalsePositiveLearningConfig[] | cdktf.IResolvable) {
    this._falsePositiveLearningConfig.internalValue = value;
  }
  public resetFalsePositiveLearningConfig() {
    this._falsePositiveLearningConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get falsePositiveLearningConfigInput() {
    return this._falsePositiveLearningConfig.internalValue;
  }

  // user_agent_cache_config - computed: false, optional: true, required: false
  private _userAgentCacheConfig = new ControllerpropertiesUserAgentCacheConfigList(this, "user_agent_cache_config", true);
  public get userAgentCacheConfig() {
    return this._userAgentCacheConfig;
  }
  public putUserAgentCacheConfig(value: ControllerpropertiesUserAgentCacheConfig[] | cdktf.IResolvable) {
    this._userAgentCacheConfig.internalValue = value;
  }
  public resetUserAgentCacheConfig() {
    this._userAgentCacheConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentCacheConfigInput() {
    return this._userAgentCacheConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_manager_use_evms: cdktf.stringToTerraform(this._alertManagerUseEvms),
      allow_admin_network_updates: cdktf.stringToTerraform(this._allowAdminNetworkUpdates),
      allow_ip_forwarding: cdktf.stringToTerraform(this._allowIpForwarding),
      allow_unauthenticated_apis: cdktf.stringToTerraform(this._allowUnauthenticatedApis),
      allow_unauthenticated_nodes: cdktf.stringToTerraform(this._allowUnauthenticatedNodes),
      api_idle_timeout: cdktf.stringToTerraform(this._apiIdleTimeout),
      api_perf_logging_threshold: cdktf.stringToTerraform(this._apiPerfLoggingThreshold),
      appviewx_compat_mode: cdktf.stringToTerraform(this._appviewxCompatMode),
      async_patch_merge_period: cdktf.stringToTerraform(this._asyncPatchMergePeriod),
      async_patch_request_cleanup_duration: cdktf.stringToTerraform(this._asyncPatchRequestCleanupDuration),
      attach_ip_retry_interval: cdktf.stringToTerraform(this._attachIpRetryInterval),
      attach_ip_retry_limit: cdktf.stringToTerraform(this._attachIpRetryLimit),
      bm_use_ansible: cdktf.stringToTerraform(this._bmUseAnsible),
      check_vsvip_fqdn_syntax: cdktf.stringToTerraform(this._checkVsvipFqdnSyntax),
      cleanup_expired_authtoken_timeout_period: cdktf.stringToTerraform(this._cleanupExpiredAuthtokenTimeoutPeriod),
      cleanup_sessions_timeout_period: cdktf.stringToTerraform(this._cleanupSessionsTimeoutPeriod),
      cloud_discovery_interval: cdktf.stringToTerraform(this._cloudDiscoveryInterval),
      cloud_reconcile: cdktf.stringToTerraform(this._cloudReconcile),
      cloud_reconcile_interval: cdktf.stringToTerraform(this._cloudReconcileInterval),
      cluster_ip_gratuitous_arp_period: cdktf.stringToTerraform(this._clusterIpGratuitousArpPeriod),
      consistency_check_timeout_period: cdktf.stringToTerraform(this._consistencyCheckTimeoutPeriod),
      controller_resource_info_collection_period: cdktf.stringToTerraform(this._controllerResourceInfoCollectionPeriod),
      crashed_se_reboot: cdktf.stringToTerraform(this._crashedSeReboot),
      dead_se_detection_timer: cdktf.stringToTerraform(this._deadSeDetectionTimer),
      default_minimum_api_timeout: cdktf.stringToTerraform(this._defaultMinimumApiTimeout),
      del_offline_se_after_reboot_delay: cdktf.stringToTerraform(this._delOfflineSeAfterRebootDelay),
      detach_ip_retry_interval: cdktf.stringToTerraform(this._detachIpRetryInterval),
      detach_ip_retry_limit: cdktf.stringToTerraform(this._detachIpRetryLimit),
      detach_ip_timeout: cdktf.stringToTerraform(this._detachIpTimeout),
      dns_refresh_period: cdktf.stringToTerraform(this._dnsRefreshPeriod),
      dummy: cdktf.stringToTerraform(this._dummy),
      edit_system_limits: cdktf.stringToTerraform(this._editSystemLimits),
      enable_api_sharding: cdktf.stringToTerraform(this._enableApiSharding),
      enable_memory_balancer: cdktf.stringToTerraform(this._enableMemoryBalancer),
      enable_per_process_stop: cdktf.stringToTerraform(this._enablePerProcessStop),
      enable_resmgr_log_cache_print: cdktf.stringToTerraform(this._enableResmgrLogCachePrint),
      event_manager_max_goroutines: cdktf.stringToTerraform(this._eventManagerMaxGoroutines),
      event_manager_max_subscribers: cdktf.stringToTerraform(this._eventManagerMaxSubscribers),
      event_manager_processing_time_threshold: cdktf.stringToTerraform(this._eventManagerProcessingTimeThreshold),
      fatal_error_lease_time: cdktf.stringToTerraform(this._fatalErrorLeaseTime),
      federated_datastore_cleanup_duration: cdktf.stringToTerraform(this._federatedDatastoreCleanupDuration),
      file_object_cleanup_period: cdktf.stringToTerraform(this._fileObjectCleanupPeriod),
      fileobject_max_file_versions: cdktf.stringToTerraform(this._fileobjectMaxFileVersions),
      gslb_purge_batch_size: cdktf.stringToTerraform(this._gslbPurgeBatchSize),
      gslb_purge_sleep_time_ms: cdktf.stringToTerraform(this._gslbPurgeSleepTimeMs),
      id: cdktf.stringToTerraform(this._id),
      ignore_vrf_in_networksubnetlist: cdktf.stringToTerraform(this._ignoreVrfInNetworksubnetlist),
      max_dead_se_in_grp: cdktf.stringToTerraform(this._maxDeadSeInGrp),
      max_pcap_per_tenant: cdktf.stringToTerraform(this._maxPcapPerTenant),
      max_se_spawn_interval_delay: cdktf.stringToTerraform(this._maxSeSpawnIntervalDelay),
      max_seq_attach_ip_failures: cdktf.stringToTerraform(this._maxSeqAttachIpFailures),
      max_seq_vnic_failures: cdktf.stringToTerraform(this._maxSeqVnicFailures),
      max_threads_cc_vip_bg_worker: cdktf.stringToTerraform(this._maxThreadsCcVipBgWorker),
      permission_scoped_shared_admin_networks: cdktf.stringToTerraform(this._permissionScopedSharedAdminNetworks),
      persistence_key_rotate_period: cdktf.stringToTerraform(this._persistenceKeyRotatePeriod),
      portal_request_burst_limit: cdktf.stringToTerraform(this._portalRequestBurstLimit),
      portal_request_rate_limit: cdktf.stringToTerraform(this._portalRequestRateLimit),
      portal_token: cdktf.stringToTerraform(this._portalToken),
      postgres_vacuum_period: cdktf.stringToTerraform(this._postgresVacuumPeriod),
      process_locked_useraccounts_timeout_period: cdktf.stringToTerraform(this._processLockedUseraccountsTimeoutPeriod),
      process_pki_profile_timeout_period: cdktf.stringToTerraform(this._processPkiProfileTimeoutPeriod),
      query_host_fail: cdktf.stringToTerraform(this._queryHostFail),
      resmgr_log_caching_period: cdktf.stringToTerraform(this._resmgrLogCachingPeriod),
      restrict_cloud_read_access: cdktf.stringToTerraform(this._restrictCloudReadAccess),
      safenet_hsm_version: cdktf.stringToTerraform(this._safenetHsmVersion),
      se_create_timeout: cdktf.stringToTerraform(this._seCreateTimeout),
      se_failover_attempt_interval: cdktf.stringToTerraform(this._seFailoverAttemptInterval),
      se_from_marketplace: cdktf.stringToTerraform(this._seFromMarketplace),
      se_offline_del: cdktf.stringToTerraform(this._seOfflineDel),
      se_spawn_retry_interval: cdktf.stringToTerraform(this._seSpawnRetryInterval),
      se_upgrade_flow_cleanup_timeout: cdktf.stringToTerraform(this._seUpgradeFlowCleanupTimeout),
      se_vnic_cooldown: cdktf.stringToTerraform(this._seVnicCooldown),
      se_vnic_gc_wait_time: cdktf.stringToTerraform(this._seVnicGcWaitTime),
      secure_channel_cleanup_timeout: cdktf.stringToTerraform(this._secureChannelCleanupTimeout),
      secure_channel_controller_token_timeout: cdktf.stringToTerraform(this._secureChannelControllerTokenTimeout),
      secure_channel_se_token_timeout: cdktf.stringToTerraform(this._secureChannelSeTokenTimeout),
      seupgrade_copy_buffer_size: cdktf.stringToTerraform(this._seupgradeCopyBufferSize),
      seupgrade_copy_pool_size: cdktf.stringToTerraform(this._seupgradeCopyPoolSize),
      seupgrade_fabric_pool_size: cdktf.stringToTerraform(this._seupgradeFabricPoolSize),
      seupgrade_segroup_min_dead_timeout: cdktf.stringToTerraform(this._seupgradeSegroupMinDeadTimeout),
      shared_ssl_certificates: cdktf.stringToTerraform(this._sharedSslCertificates),
      skopeo_retry_interval: cdktf.stringToTerraform(this._skopeoRetryInterval),
      skopeo_retry_limit: cdktf.stringToTerraform(this._skopeoRetryLimit),
      soft_min_mem_per_se_limit: cdktf.stringToTerraform(this._softMinMemPerSeLimit),
      ssl_certificate_expiry_warning_days: cdktf.listMapper(cdktf.numberToTerraform, false)(this._sslCertificateExpiryWarningDays),
      system_report_cleanup_interval: cdktf.stringToTerraform(this._systemReportCleanupInterval),
      system_report_limit: cdktf.stringToTerraform(this._systemReportLimit),
      unresponsive_se_reboot: cdktf.stringToTerraform(this._unresponsiveSeReboot),
      update_dns_entry_retry_limit: cdktf.stringToTerraform(this._updateDnsEntryRetryLimit),
      update_dns_entry_timeout: cdktf.stringToTerraform(this._updateDnsEntryTimeout),
      upgrade_dns_ttl: cdktf.stringToTerraform(this._upgradeDnsTtl),
      upgrade_fat_se_lease_time: cdktf.stringToTerraform(this._upgradeFatSeLeaseTime),
      upgrade_lease_time: cdktf.stringToTerraform(this._upgradeLeaseTime),
      upgrade_se_per_vs_scale_ops_txn_time: cdktf.stringToTerraform(this._upgradeSePerVsScaleOpsTxnTime),
      uuid: cdktf.stringToTerraform(this._uuid),
      vnic_op_fail_time: cdktf.stringToTerraform(this._vnicOpFailTime),
      vs_awaiting_se_timeout: cdktf.stringToTerraform(this._vsAwaitingSeTimeout),
      vs_key_rotate_period: cdktf.stringToTerraform(this._vsKeyRotatePeriod),
      vs_scaleout_ready_check_interval: cdktf.stringToTerraform(this._vsScaleoutReadyCheckInterval),
      vs_se_attach_ip_fail: cdktf.stringToTerraform(this._vsSeAttachIpFail),
      vs_se_bootup_fail: cdktf.stringToTerraform(this._vsSeBootupFail),
      vs_se_bootup_fail_patch: cdktf.stringToTerraform(this._vsSeBootupFailPatch),
      vs_se_create_fail: cdktf.stringToTerraform(this._vsSeCreateFail),
      vs_se_ping_fail: cdktf.stringToTerraform(this._vsSePingFail),
      vs_se_vnic_fail: cdktf.stringToTerraform(this._vsSeVnicFail),
      vs_se_vnic_ip_fail: cdktf.stringToTerraform(this._vsSeVnicIpFail),
      vsphere_ha_detection_timeout: cdktf.stringToTerraform(this._vsphereHaDetectionTimeout),
      vsphere_ha_recovery_timeout: cdktf.stringToTerraform(this._vsphereHaRecoveryTimeout),
      vsphere_ha_timer_interval: cdktf.stringToTerraform(this._vsphereHaTimerInterval),
      warmstart_se_reconnect_wait_time: cdktf.stringToTerraform(this._warmstartSeReconnectWaitTime),
      warmstart_vs_resync_wait_time: cdktf.stringToTerraform(this._warmstartVsResyncWaitTime),
      configpb_attributes: cdktf.listMapper(controllerpropertiesConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      false_positive_learning_config: cdktf.listMapper(controllerpropertiesFalsePositiveLearningConfigToTerraform, true)(this._falsePositiveLearningConfig.internalValue),
      user_agent_cache_config: cdktf.listMapper(controllerpropertiesUserAgentCacheConfigToTerraform, true)(this._userAgentCacheConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_manager_use_evms: {
        value: cdktf.stringToHclTerraform(this._alertManagerUseEvms),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_admin_network_updates: {
        value: cdktf.stringToHclTerraform(this._allowAdminNetworkUpdates),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_ip_forwarding: {
        value: cdktf.stringToHclTerraform(this._allowIpForwarding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_unauthenticated_apis: {
        value: cdktf.stringToHclTerraform(this._allowUnauthenticatedApis),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_unauthenticated_nodes: {
        value: cdktf.stringToHclTerraform(this._allowUnauthenticatedNodes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_idle_timeout: {
        value: cdktf.stringToHclTerraform(this._apiIdleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_perf_logging_threshold: {
        value: cdktf.stringToHclTerraform(this._apiPerfLoggingThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      appviewx_compat_mode: {
        value: cdktf.stringToHclTerraform(this._appviewxCompatMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      async_patch_merge_period: {
        value: cdktf.stringToHclTerraform(this._asyncPatchMergePeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      async_patch_request_cleanup_duration: {
        value: cdktf.stringToHclTerraform(this._asyncPatchRequestCleanupDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attach_ip_retry_interval: {
        value: cdktf.stringToHclTerraform(this._attachIpRetryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attach_ip_retry_limit: {
        value: cdktf.stringToHclTerraform(this._attachIpRetryLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bm_use_ansible: {
        value: cdktf.stringToHclTerraform(this._bmUseAnsible),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      check_vsvip_fqdn_syntax: {
        value: cdktf.stringToHclTerraform(this._checkVsvipFqdnSyntax),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cleanup_expired_authtoken_timeout_period: {
        value: cdktf.stringToHclTerraform(this._cleanupExpiredAuthtokenTimeoutPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cleanup_sessions_timeout_period: {
        value: cdktf.stringToHclTerraform(this._cleanupSessionsTimeoutPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_discovery_interval: {
        value: cdktf.stringToHclTerraform(this._cloudDiscoveryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_reconcile: {
        value: cdktf.stringToHclTerraform(this._cloudReconcile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_reconcile_interval: {
        value: cdktf.stringToHclTerraform(this._cloudReconcileInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_ip_gratuitous_arp_period: {
        value: cdktf.stringToHclTerraform(this._clusterIpGratuitousArpPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consistency_check_timeout_period: {
        value: cdktf.stringToHclTerraform(this._consistencyCheckTimeoutPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      controller_resource_info_collection_period: {
        value: cdktf.stringToHclTerraform(this._controllerResourceInfoCollectionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crashed_se_reboot: {
        value: cdktf.stringToHclTerraform(this._crashedSeReboot),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dead_se_detection_timer: {
        value: cdktf.stringToHclTerraform(this._deadSeDetectionTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_minimum_api_timeout: {
        value: cdktf.stringToHclTerraform(this._defaultMinimumApiTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      del_offline_se_after_reboot_delay: {
        value: cdktf.stringToHclTerraform(this._delOfflineSeAfterRebootDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      detach_ip_retry_interval: {
        value: cdktf.stringToHclTerraform(this._detachIpRetryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      detach_ip_retry_limit: {
        value: cdktf.stringToHclTerraform(this._detachIpRetryLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      detach_ip_timeout: {
        value: cdktf.stringToHclTerraform(this._detachIpTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_refresh_period: {
        value: cdktf.stringToHclTerraform(this._dnsRefreshPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dummy: {
        value: cdktf.stringToHclTerraform(this._dummy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edit_system_limits: {
        value: cdktf.stringToHclTerraform(this._editSystemLimits),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_api_sharding: {
        value: cdktf.stringToHclTerraform(this._enableApiSharding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_memory_balancer: {
        value: cdktf.stringToHclTerraform(this._enableMemoryBalancer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_per_process_stop: {
        value: cdktf.stringToHclTerraform(this._enablePerProcessStop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_resmgr_log_cache_print: {
        value: cdktf.stringToHclTerraform(this._enableResmgrLogCachePrint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_manager_max_goroutines: {
        value: cdktf.stringToHclTerraform(this._eventManagerMaxGoroutines),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_manager_max_subscribers: {
        value: cdktf.stringToHclTerraform(this._eventManagerMaxSubscribers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_manager_processing_time_threshold: {
        value: cdktf.stringToHclTerraform(this._eventManagerProcessingTimeThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fatal_error_lease_time: {
        value: cdktf.stringToHclTerraform(this._fatalErrorLeaseTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      federated_datastore_cleanup_duration: {
        value: cdktf.stringToHclTerraform(this._federatedDatastoreCleanupDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_object_cleanup_period: {
        value: cdktf.stringToHclTerraform(this._fileObjectCleanupPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fileobject_max_file_versions: {
        value: cdktf.stringToHclTerraform(this._fileobjectMaxFileVersions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gslb_purge_batch_size: {
        value: cdktf.stringToHclTerraform(this._gslbPurgeBatchSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gslb_purge_sleep_time_ms: {
        value: cdktf.stringToHclTerraform(this._gslbPurgeSleepTimeMs),
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
      ignore_vrf_in_networksubnetlist: {
        value: cdktf.stringToHclTerraform(this._ignoreVrfInNetworksubnetlist),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_dead_se_in_grp: {
        value: cdktf.stringToHclTerraform(this._maxDeadSeInGrp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_pcap_per_tenant: {
        value: cdktf.stringToHclTerraform(this._maxPcapPerTenant),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_se_spawn_interval_delay: {
        value: cdktf.stringToHclTerraform(this._maxSeSpawnIntervalDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_seq_attach_ip_failures: {
        value: cdktf.stringToHclTerraform(this._maxSeqAttachIpFailures),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_seq_vnic_failures: {
        value: cdktf.stringToHclTerraform(this._maxSeqVnicFailures),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_threads_cc_vip_bg_worker: {
        value: cdktf.stringToHclTerraform(this._maxThreadsCcVipBgWorker),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permission_scoped_shared_admin_networks: {
        value: cdktf.stringToHclTerraform(this._permissionScopedSharedAdminNetworks),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persistence_key_rotate_period: {
        value: cdktf.stringToHclTerraform(this._persistenceKeyRotatePeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      portal_request_burst_limit: {
        value: cdktf.stringToHclTerraform(this._portalRequestBurstLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      portal_request_rate_limit: {
        value: cdktf.stringToHclTerraform(this._portalRequestRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      portal_token: {
        value: cdktf.stringToHclTerraform(this._portalToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      postgres_vacuum_period: {
        value: cdktf.stringToHclTerraform(this._postgresVacuumPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      process_locked_useraccounts_timeout_period: {
        value: cdktf.stringToHclTerraform(this._processLockedUseraccountsTimeoutPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      process_pki_profile_timeout_period: {
        value: cdktf.stringToHclTerraform(this._processPkiProfileTimeoutPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_host_fail: {
        value: cdktf.stringToHclTerraform(this._queryHostFail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resmgr_log_caching_period: {
        value: cdktf.stringToHclTerraform(this._resmgrLogCachingPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restrict_cloud_read_access: {
        value: cdktf.stringToHclTerraform(this._restrictCloudReadAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      safenet_hsm_version: {
        value: cdktf.stringToHclTerraform(this._safenetHsmVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_create_timeout: {
        value: cdktf.stringToHclTerraform(this._seCreateTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_failover_attempt_interval: {
        value: cdktf.stringToHclTerraform(this._seFailoverAttemptInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_from_marketplace: {
        value: cdktf.stringToHclTerraform(this._seFromMarketplace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_offline_del: {
        value: cdktf.stringToHclTerraform(this._seOfflineDel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_spawn_retry_interval: {
        value: cdktf.stringToHclTerraform(this._seSpawnRetryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_upgrade_flow_cleanup_timeout: {
        value: cdktf.stringToHclTerraform(this._seUpgradeFlowCleanupTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_vnic_cooldown: {
        value: cdktf.stringToHclTerraform(this._seVnicCooldown),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_vnic_gc_wait_time: {
        value: cdktf.stringToHclTerraform(this._seVnicGcWaitTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_channel_cleanup_timeout: {
        value: cdktf.stringToHclTerraform(this._secureChannelCleanupTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_channel_controller_token_timeout: {
        value: cdktf.stringToHclTerraform(this._secureChannelControllerTokenTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_channel_se_token_timeout: {
        value: cdktf.stringToHclTerraform(this._secureChannelSeTokenTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      seupgrade_copy_buffer_size: {
        value: cdktf.stringToHclTerraform(this._seupgradeCopyBufferSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      seupgrade_copy_pool_size: {
        value: cdktf.stringToHclTerraform(this._seupgradeCopyPoolSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      seupgrade_fabric_pool_size: {
        value: cdktf.stringToHclTerraform(this._seupgradeFabricPoolSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      seupgrade_segroup_min_dead_timeout: {
        value: cdktf.stringToHclTerraform(this._seupgradeSegroupMinDeadTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_ssl_certificates: {
        value: cdktf.stringToHclTerraform(this._sharedSslCertificates),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skopeo_retry_interval: {
        value: cdktf.stringToHclTerraform(this._skopeoRetryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skopeo_retry_limit: {
        value: cdktf.stringToHclTerraform(this._skopeoRetryLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      soft_min_mem_per_se_limit: {
        value: cdktf.stringToHclTerraform(this._softMinMemPerSeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_certificate_expiry_warning_days: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._sslCertificateExpiryWarningDays),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      system_report_cleanup_interval: {
        value: cdktf.stringToHclTerraform(this._systemReportCleanupInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_report_limit: {
        value: cdktf.stringToHclTerraform(this._systemReportLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unresponsive_se_reboot: {
        value: cdktf.stringToHclTerraform(this._unresponsiveSeReboot),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_dns_entry_retry_limit: {
        value: cdktf.stringToHclTerraform(this._updateDnsEntryRetryLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_dns_entry_timeout: {
        value: cdktf.stringToHclTerraform(this._updateDnsEntryTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upgrade_dns_ttl: {
        value: cdktf.stringToHclTerraform(this._upgradeDnsTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upgrade_fat_se_lease_time: {
        value: cdktf.stringToHclTerraform(this._upgradeFatSeLeaseTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upgrade_lease_time: {
        value: cdktf.stringToHclTerraform(this._upgradeLeaseTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upgrade_se_per_vs_scale_ops_txn_time: {
        value: cdktf.stringToHclTerraform(this._upgradeSePerVsScaleOpsTxnTime),
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
      vnic_op_fail_time: {
        value: cdktf.stringToHclTerraform(this._vnicOpFailTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vs_awaiting_se_timeout: {
        value: cdktf.stringToHclTerraform(this._vsAwaitingSeTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vs_key_rotate_period: {
        value: cdktf.stringToHclTerraform(this._vsKeyRotatePeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vs_scaleout_ready_check_interval: {
        value: cdktf.stringToHclTerraform(this._vsScaleoutReadyCheckInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vs_se_attach_ip_fail: {
        value: cdktf.stringToHclTerraform(this._vsSeAttachIpFail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vs_se_bootup_fail: {
        value: cdktf.stringToHclTerraform(this._vsSeBootupFail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vs_se_bootup_fail_patch: {
        value: cdktf.stringToHclTerraform(this._vsSeBootupFailPatch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vs_se_create_fail: {
        value: cdktf.stringToHclTerraform(this._vsSeCreateFail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vs_se_ping_fail: {
        value: cdktf.stringToHclTerraform(this._vsSePingFail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vs_se_vnic_fail: {
        value: cdktf.stringToHclTerraform(this._vsSeVnicFail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vs_se_vnic_ip_fail: {
        value: cdktf.stringToHclTerraform(this._vsSeVnicIpFail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vsphere_ha_detection_timeout: {
        value: cdktf.stringToHclTerraform(this._vsphereHaDetectionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vsphere_ha_recovery_timeout: {
        value: cdktf.stringToHclTerraform(this._vsphereHaRecoveryTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vsphere_ha_timer_interval: {
        value: cdktf.stringToHclTerraform(this._vsphereHaTimerInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      warmstart_se_reconnect_wait_time: {
        value: cdktf.stringToHclTerraform(this._warmstartSeReconnectWaitTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      warmstart_vs_resync_wait_time: {
        value: cdktf.stringToHclTerraform(this._warmstartVsResyncWaitTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(controllerpropertiesConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ControllerpropertiesConfigpbAttributesList",
      },
      false_positive_learning_config: {
        value: cdktf.listMapperHcl(controllerpropertiesFalsePositiveLearningConfigToHclTerraform, true)(this._falsePositiveLearningConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ControllerpropertiesFalsePositiveLearningConfigList",
      },
      user_agent_cache_config: {
        value: cdktf.listMapperHcl(controllerpropertiesUserAgentCacheConfigToHclTerraform, true)(this._userAgentCacheConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ControllerpropertiesUserAgentCacheConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
