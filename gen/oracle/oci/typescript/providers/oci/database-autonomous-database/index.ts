// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseAutonomousDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#admin_password DatabaseAutonomousDatabase#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#are_primary_whitelisted_ips_used DatabaseAutonomousDatabase#are_primary_whitelisted_ips_used}
  */
  readonly arePrimaryWhitelistedIpsUsed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#auto_refresh_frequency_in_seconds DatabaseAutonomousDatabase#auto_refresh_frequency_in_seconds}
  */
  readonly autoRefreshFrequencyInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#auto_refresh_point_lag_in_seconds DatabaseAutonomousDatabase#auto_refresh_point_lag_in_seconds}
  */
  readonly autoRefreshPointLagInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#autonomous_container_database_id DatabaseAutonomousDatabase#autonomous_container_database_id}
  */
  readonly autonomousContainerDatabaseId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#autonomous_database_backup_id DatabaseAutonomousDatabase#autonomous_database_backup_id}
  */
  readonly autonomousDatabaseBackupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#autonomous_database_id DatabaseAutonomousDatabase#autonomous_database_id}
  */
  readonly autonomousDatabaseId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#autonomous_maintenance_schedule_type DatabaseAutonomousDatabase#autonomous_maintenance_schedule_type}
  */
  readonly autonomousMaintenanceScheduleType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#backup_retention_period_in_days DatabaseAutonomousDatabase#backup_retention_period_in_days}
  */
  readonly backupRetentionPeriodInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#byol_compute_count_limit DatabaseAutonomousDatabase#byol_compute_count_limit}
  */
  readonly byolComputeCountLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#character_set DatabaseAutonomousDatabase#character_set}
  */
  readonly characterSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#clone_table_space_list DatabaseAutonomousDatabase#clone_table_space_list}
  */
  readonly cloneTableSpaceList?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#clone_type DatabaseAutonomousDatabase#clone_type}
  */
  readonly cloneType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#compartment_id DatabaseAutonomousDatabase#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#compute_count DatabaseAutonomousDatabase#compute_count}
  */
  readonly computeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#compute_model DatabaseAutonomousDatabase#compute_model}
  */
  readonly computeModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#cpu_core_count DatabaseAutonomousDatabase#cpu_core_count}
  */
  readonly cpuCoreCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#data_safe_status DatabaseAutonomousDatabase#data_safe_status}
  */
  readonly dataSafeStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#data_storage_size_in_gb DatabaseAutonomousDatabase#data_storage_size_in_gb}
  */
  readonly dataStorageSizeInGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#data_storage_size_in_tbs DatabaseAutonomousDatabase#data_storage_size_in_tbs}
  */
  readonly dataStorageSizeInTbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#database_edition DatabaseAutonomousDatabase#database_edition}
  */
  readonly databaseEdition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#database_management_status DatabaseAutonomousDatabase#database_management_status}
  */
  readonly databaseManagementStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#db_name DatabaseAutonomousDatabase#db_name}
  */
  readonly dbName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#db_version DatabaseAutonomousDatabase#db_version}
  */
  readonly dbVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#db_workload DatabaseAutonomousDatabase#db_workload}
  */
  readonly dbWorkload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#defined_tags DatabaseAutonomousDatabase#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#disaster_recovery_type DatabaseAutonomousDatabase#disaster_recovery_type}
  */
  readonly disasterRecoveryType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#display_name DatabaseAutonomousDatabase#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#enable_delete_scheduled_operations DatabaseAutonomousDatabase#enable_delete_scheduled_operations}
  */
  readonly enableDeleteScheduledOperations?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#freeform_tags DatabaseAutonomousDatabase#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#id DatabaseAutonomousDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#in_memory_percentage DatabaseAutonomousDatabase#in_memory_percentage}
  */
  readonly inMemoryPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#is_access_control_enabled DatabaseAutonomousDatabase#is_access_control_enabled}
  */
  readonly isAccessControlEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#is_auto_scaling_enabled DatabaseAutonomousDatabase#is_auto_scaling_enabled}
  */
  readonly isAutoScalingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#is_auto_scaling_for_storage_enabled DatabaseAutonomousDatabase#is_auto_scaling_for_storage_enabled}
  */
  readonly isAutoScalingForStorageEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#is_backup_retention_locked DatabaseAutonomousDatabase#is_backup_retention_locked}
  */
  readonly isBackupRetentionLocked?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#is_data_guard_enabled DatabaseAutonomousDatabase#is_data_guard_enabled}
  */
  readonly isDataGuardEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#is_dedicated DatabaseAutonomousDatabase#is_dedicated}
  */
  readonly isDedicated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#is_dev_tier DatabaseAutonomousDatabase#is_dev_tier}
  */
  readonly isDevTier?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#is_disable_db_version_upgrade_schedule DatabaseAutonomousDatabase#is_disable_db_version_upgrade_schedule}
  */
  readonly isDisableDbVersionUpgradeSchedule?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#is_disconnect_peer DatabaseAutonomousDatabase#is_disconnect_peer}
  */
  readonly isDisconnectPeer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#is_free_tier DatabaseAutonomousDatabase#is_free_tier}
  */
  readonly isFreeTier?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#is_local_data_guard_enabled DatabaseAutonomousDatabase#is_local_data_guard_enabled}
  */
  readonly isLocalDataGuardEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#is_mtls_connection_required DatabaseAutonomousDatabase#is_mtls_connection_required}
  */
  readonly isMtlsConnectionRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#is_preview_version_with_service_terms_accepted DatabaseAutonomousDatabase#is_preview_version_with_service_terms_accepted}
  */
  readonly isPreviewVersionWithServiceTermsAccepted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#is_refreshable_clone DatabaseAutonomousDatabase#is_refreshable_clone}
  */
  readonly isRefreshableClone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#is_replicate_automatic_backups DatabaseAutonomousDatabase#is_replicate_automatic_backups}
  */
  readonly isReplicateAutomaticBackups?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#is_schedule_db_version_upgrade_to_earliest DatabaseAutonomousDatabase#is_schedule_db_version_upgrade_to_earliest}
  */
  readonly isScheduleDbVersionUpgradeToEarliest?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#is_shrink_only DatabaseAutonomousDatabase#is_shrink_only}
  */
  readonly isShrinkOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#key_version_id DatabaseAutonomousDatabase#key_version_id}
  */
  readonly keyVersionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#kms_key_id DatabaseAutonomousDatabase#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#license_model DatabaseAutonomousDatabase#license_model}
  */
  readonly licenseModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#local_adg_auto_failover_max_data_loss_limit DatabaseAutonomousDatabase#local_adg_auto_failover_max_data_loss_limit}
  */
  readonly localAdgAutoFailoverMaxDataLossLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#max_cpu_core_count DatabaseAutonomousDatabase#max_cpu_core_count}
  */
  readonly maxCpuCoreCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#ncharacter_set DatabaseAutonomousDatabase#ncharacter_set}
  */
  readonly ncharacterSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#nsg_ids DatabaseAutonomousDatabase#nsg_ids}
  */
  readonly nsgIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#ocpu_count DatabaseAutonomousDatabase#ocpu_count}
  */
  readonly ocpuCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#open_mode DatabaseAutonomousDatabase#open_mode}
  */
  readonly openMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#operations_insights_status DatabaseAutonomousDatabase#operations_insights_status}
  */
  readonly operationsInsightsStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#peer_db_id DatabaseAutonomousDatabase#peer_db_id}
  */
  readonly peerDbId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#permission_level DatabaseAutonomousDatabase#permission_level}
  */
  readonly permissionLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#private_endpoint_ip DatabaseAutonomousDatabase#private_endpoint_ip}
  */
  readonly privateEndpointIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#private_endpoint_label DatabaseAutonomousDatabase#private_endpoint_label}
  */
  readonly privateEndpointLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#refreshable_mode DatabaseAutonomousDatabase#refreshable_mode}
  */
  readonly refreshableMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#remote_disaster_recovery_type DatabaseAutonomousDatabase#remote_disaster_recovery_type}
  */
  readonly remoteDisasterRecoveryType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#resource_pool_leader_id DatabaseAutonomousDatabase#resource_pool_leader_id}
  */
  readonly resourcePoolLeaderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#rotate_key_trigger DatabaseAutonomousDatabase#rotate_key_trigger}
  */
  readonly rotateKeyTrigger?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#secret_id DatabaseAutonomousDatabase#secret_id}
  */
  readonly secretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#secret_version_number DatabaseAutonomousDatabase#secret_version_number}
  */
  readonly secretVersionNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#security_attributes DatabaseAutonomousDatabase#security_attributes}
  */
  readonly securityAttributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#shrink_adb_trigger DatabaseAutonomousDatabase#shrink_adb_trigger}
  */
  readonly shrinkAdbTrigger?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#source DatabaseAutonomousDatabase#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#source_id DatabaseAutonomousDatabase#source_id}
  */
  readonly sourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#standby_whitelisted_ips DatabaseAutonomousDatabase#standby_whitelisted_ips}
  */
  readonly standbyWhitelistedIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#state DatabaseAutonomousDatabase#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#subnet_id DatabaseAutonomousDatabase#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#subscription_id DatabaseAutonomousDatabase#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#switchover_to DatabaseAutonomousDatabase#switchover_to}
  */
  readonly switchoverTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#switchover_to_remote_peer_id DatabaseAutonomousDatabase#switchover_to_remote_peer_id}
  */
  readonly switchoverToRemotePeerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#time_of_auto_refresh_start DatabaseAutonomousDatabase#time_of_auto_refresh_start}
  */
  readonly timeOfAutoRefreshStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#time_scheduled_db_version_upgrade DatabaseAutonomousDatabase#time_scheduled_db_version_upgrade}
  */
  readonly timeScheduledDbVersionUpgrade?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#timestamp DatabaseAutonomousDatabase#timestamp}
  */
  readonly timestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#use_latest_available_backup_time_stamp DatabaseAutonomousDatabase#use_latest_available_backup_time_stamp}
  */
  readonly useLatestAvailableBackupTimeStamp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#vault_id DatabaseAutonomousDatabase#vault_id}
  */
  readonly vaultId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#whitelisted_ips DatabaseAutonomousDatabase#whitelisted_ips}
  */
  readonly whitelistedIps?: string[];
  /**
  * customer_contacts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#customer_contacts DatabaseAutonomousDatabase#customer_contacts}
  */
  readonly customerContacts?: DatabaseAutonomousDatabaseCustomerContacts[] | cdktf.IResolvable;
  /**
  * db_tools_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#db_tools_details DatabaseAutonomousDatabase#db_tools_details}
  */
  readonly dbToolsDetails?: DatabaseAutonomousDatabaseDbToolsDetails[] | cdktf.IResolvable;
  /**
  * encryption_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#encryption_key DatabaseAutonomousDatabase#encryption_key}
  */
  readonly encryptionKey?: DatabaseAutonomousDatabaseEncryptionKey;
  /**
  * long_term_backup_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#long_term_backup_schedule DatabaseAutonomousDatabase#long_term_backup_schedule}
  */
  readonly longTermBackupSchedule?: DatabaseAutonomousDatabaseLongTermBackupSchedule[] | cdktf.IResolvable;
  /**
  * resource_pool_summary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#resource_pool_summary DatabaseAutonomousDatabase#resource_pool_summary}
  */
  readonly resourcePoolSummary?: DatabaseAutonomousDatabaseResourcePoolSummary;
  /**
  * scheduled_operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#scheduled_operations DatabaseAutonomousDatabase#scheduled_operations}
  */
  readonly scheduledOperations?: DatabaseAutonomousDatabaseScheduledOperations[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#timeouts DatabaseAutonomousDatabase#timeouts}
  */
  readonly timeouts?: DatabaseAutonomousDatabaseTimeouts;
  /**
  * vanity_url_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#vanity_url_details DatabaseAutonomousDatabase#vanity_url_details}
  */
  readonly vanityUrlDetails?: DatabaseAutonomousDatabaseVanityUrlDetails[] | cdktf.IResolvable;
}
export interface DatabaseAutonomousDatabaseApexDetails {
}

export function databaseAutonomousDatabaseApexDetailsToTerraform(struct?: DatabaseAutonomousDatabaseApexDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseAutonomousDatabaseApexDetailsToHclTerraform(struct?: DatabaseAutonomousDatabaseApexDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseAutonomousDatabaseApexDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousDatabaseApexDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousDatabaseApexDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apex_version - computed: true, optional: false, required: false
  public get apexVersion() {
    return this.getStringAttribute('apex_version');
  }

  // ords_version - computed: true, optional: false, required: false
  public get ordsVersion() {
    return this.getStringAttribute('ords_version');
  }
}

export class DatabaseAutonomousDatabaseApexDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseAutonomousDatabaseApexDetailsOutputReference {
    return new DatabaseAutonomousDatabaseApexDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseAutonomousDatabaseBackupConfig {
}

export function databaseAutonomousDatabaseBackupConfigToTerraform(struct?: DatabaseAutonomousDatabaseBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseAutonomousDatabaseBackupConfigToHclTerraform(struct?: DatabaseAutonomousDatabaseBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseAutonomousDatabaseBackupConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousDatabaseBackupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousDatabaseBackupConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // manual_backup_bucket_name - computed: true, optional: false, required: false
  public get manualBackupBucketName() {
    return this.getStringAttribute('manual_backup_bucket_name');
  }

  // manual_backup_type - computed: true, optional: false, required: false
  public get manualBackupType() {
    return this.getStringAttribute('manual_backup_type');
  }
}

export class DatabaseAutonomousDatabaseBackupConfigList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseAutonomousDatabaseBackupConfigOutputReference {
    return new DatabaseAutonomousDatabaseBackupConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseAutonomousDatabaseConnectionStringsProfiles {
}

export function databaseAutonomousDatabaseConnectionStringsProfilesToTerraform(struct?: DatabaseAutonomousDatabaseConnectionStringsProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseAutonomousDatabaseConnectionStringsProfilesToHclTerraform(struct?: DatabaseAutonomousDatabaseConnectionStringsProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousDatabaseConnectionStringsProfiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousDatabaseConnectionStringsProfiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // consumer_group - computed: true, optional: false, required: false
  public get consumerGroup() {
    return this.getStringAttribute('consumer_group');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // host_format - computed: true, optional: false, required: false
  public get hostFormat() {
    return this.getStringAttribute('host_format');
  }

  // is_regional - computed: true, optional: false, required: false
  public get isRegional() {
    return this.getBooleanAttribute('is_regional');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // session_mode - computed: true, optional: false, required: false
  public get sessionMode() {
    return this.getStringAttribute('session_mode');
  }

  // syntax_format - computed: true, optional: false, required: false
  public get syntaxFormat() {
    return this.getStringAttribute('syntax_format');
  }

  // tls_authentication - computed: true, optional: false, required: false
  public get tlsAuthentication() {
    return this.getStringAttribute('tls_authentication');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DatabaseAutonomousDatabaseConnectionStringsProfilesList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference {
    return new DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseAutonomousDatabaseConnectionStrings {
}

export function databaseAutonomousDatabaseConnectionStringsToTerraform(struct?: DatabaseAutonomousDatabaseConnectionStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseAutonomousDatabaseConnectionStringsToHclTerraform(struct?: DatabaseAutonomousDatabaseConnectionStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseAutonomousDatabaseConnectionStringsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousDatabaseConnectionStrings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousDatabaseConnectionStrings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_connection_strings - computed: true, optional: false, required: false
  private _allConnectionStrings = new cdktf.StringMap(this, "all_connection_strings");
  public get allConnectionStrings() {
    return this._allConnectionStrings;
  }

  // dedicated - computed: true, optional: false, required: false
  public get dedicated() {
    return this.getStringAttribute('dedicated');
  }

  // high - computed: true, optional: false, required: false
  public get high() {
    return this.getStringAttribute('high');
  }

  // low - computed: true, optional: false, required: false
  public get low() {
    return this.getStringAttribute('low');
  }

  // medium - computed: true, optional: false, required: false
  public get medium() {
    return this.getStringAttribute('medium');
  }

  // profiles - computed: true, optional: false, required: false
  private _profiles = new DatabaseAutonomousDatabaseConnectionStringsProfilesList(this, "profiles", false);
  public get profiles() {
    return this._profiles;
  }
}

export class DatabaseAutonomousDatabaseConnectionStringsList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseAutonomousDatabaseConnectionStringsOutputReference {
    return new DatabaseAutonomousDatabaseConnectionStringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseAutonomousDatabaseConnectionUrls {
}

export function databaseAutonomousDatabaseConnectionUrlsToTerraform(struct?: DatabaseAutonomousDatabaseConnectionUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseAutonomousDatabaseConnectionUrlsToHclTerraform(struct?: DatabaseAutonomousDatabaseConnectionUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseAutonomousDatabaseConnectionUrlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousDatabaseConnectionUrls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousDatabaseConnectionUrls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apex_url - computed: true, optional: false, required: false
  public get apexUrl() {
    return this.getStringAttribute('apex_url');
  }

  // database_transforms_url - computed: true, optional: false, required: false
  public get databaseTransformsUrl() {
    return this.getStringAttribute('database_transforms_url');
  }

  // graph_studio_url - computed: true, optional: false, required: false
  public get graphStudioUrl() {
    return this.getStringAttribute('graph_studio_url');
  }

  // machine_learning_notebook_url - computed: true, optional: false, required: false
  public get machineLearningNotebookUrl() {
    return this.getStringAttribute('machine_learning_notebook_url');
  }

  // machine_learning_user_management_url - computed: true, optional: false, required: false
  public get machineLearningUserManagementUrl() {
    return this.getStringAttribute('machine_learning_user_management_url');
  }

  // mongo_db_url - computed: true, optional: false, required: false
  public get mongoDbUrl() {
    return this.getStringAttribute('mongo_db_url');
  }

  // ords_url - computed: true, optional: false, required: false
  public get ordsUrl() {
    return this.getStringAttribute('ords_url');
  }

  // sql_dev_web_url - computed: true, optional: false, required: false
  public get sqlDevWebUrl() {
    return this.getStringAttribute('sql_dev_web_url');
  }
}

export class DatabaseAutonomousDatabaseConnectionUrlsList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseAutonomousDatabaseConnectionUrlsOutputReference {
    return new DatabaseAutonomousDatabaseConnectionUrlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey {
}

export function databaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyToTerraform(struct?: DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyToHclTerraform(struct?: DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arn_role - computed: true, optional: false, required: false
  public get arnRole() {
    return this.getStringAttribute('arn_role');
  }

  // autonomous_database_provider - computed: true, optional: false, required: false
  public get autonomousDatabaseProvider() {
    return this.getStringAttribute('autonomous_database_provider');
  }

  // certificate_directory_name - computed: true, optional: false, required: false
  public get certificateDirectoryName() {
    return this.getStringAttribute('certificate_directory_name');
  }

  // certificate_id - computed: true, optional: false, required: false
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }

  // directory_name - computed: true, optional: false, required: false
  public get directoryName() {
    return this.getStringAttribute('directory_name');
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // key_arn - computed: true, optional: false, required: false
  public get keyArn() {
    return this.getStringAttribute('key_arn');
  }

  // key_name - computed: true, optional: false, required: false
  public get keyName() {
    return this.getStringAttribute('key_name');
  }

  // key_ring - computed: true, optional: false, required: false
  public get keyRing() {
    return this.getStringAttribute('key_ring');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // kms_rest_endpoint - computed: true, optional: false, required: false
  public get kmsRestEndpoint() {
    return this.getStringAttribute('kms_rest_endpoint');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // okv_kms_key - computed: true, optional: false, required: false
  public get okvKmsKey() {
    return this.getStringAttribute('okv_kms_key');
  }

  // okv_uri - computed: true, optional: false, required: false
  public get okvUri() {
    return this.getStringAttribute('okv_uri');
  }

  // project - computed: true, optional: false, required: false
  public get project() {
    return this.getStringAttribute('project');
  }

  // service_endpoint_uri - computed: true, optional: false, required: false
  public get serviceEndpointUri() {
    return this.getStringAttribute('service_endpoint_uri');
  }

  // vault_id - computed: true, optional: false, required: false
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }

  // vault_uri - computed: true, optional: false, required: false
  public get vaultUri() {
    return this.getStringAttribute('vault_uri');
  }
}

export class DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference {
    return new DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseAutonomousDatabaseEncryptionKeyHistoryEntry {
}

export function databaseAutonomousDatabaseEncryptionKeyHistoryEntryToTerraform(struct?: DatabaseAutonomousDatabaseEncryptionKeyHistoryEntry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseAutonomousDatabaseEncryptionKeyHistoryEntryToHclTerraform(struct?: DatabaseAutonomousDatabaseEncryptionKeyHistoryEntry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousDatabaseEncryptionKeyHistoryEntry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousDatabaseEncryptionKeyHistoryEntry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_key - computed: true, optional: false, required: false
  private _encryptionKey = new DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList(this, "encryption_key", false);
  public get encryptionKey() {
    return this._encryptionKey;
  }

  // time_activated - computed: true, optional: false, required: false
  public get timeActivated() {
    return this.getStringAttribute('time_activated');
  }
}

export class DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference {
    return new DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseAutonomousDatabaseKeyHistoryEntry {
}

export function databaseAutonomousDatabaseKeyHistoryEntryToTerraform(struct?: DatabaseAutonomousDatabaseKeyHistoryEntry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseAutonomousDatabaseKeyHistoryEntryToHclTerraform(struct?: DatabaseAutonomousDatabaseKeyHistoryEntry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousDatabaseKeyHistoryEntry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousDatabaseKeyHistoryEntry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_version_id - computed: true, optional: false, required: false
  public get kmsKeyVersionId() {
    return this.getStringAttribute('kms_key_version_id');
  }

  // time_activated - computed: true, optional: false, required: false
  public get timeActivated() {
    return this.getStringAttribute('time_activated');
  }

  // vault_id - computed: true, optional: false, required: false
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
}

export class DatabaseAutonomousDatabaseKeyHistoryEntryList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference {
    return new DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseAutonomousDatabaseLocalStandbyDb {
}

export function databaseAutonomousDatabaseLocalStandbyDbToTerraform(struct?: DatabaseAutonomousDatabaseLocalStandbyDb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseAutonomousDatabaseLocalStandbyDbToHclTerraform(struct?: DatabaseAutonomousDatabaseLocalStandbyDb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseAutonomousDatabaseLocalStandbyDbOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousDatabaseLocalStandbyDb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousDatabaseLocalStandbyDb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // lag_time_in_seconds - computed: true, optional: false, required: false
  public get lagTimeInSeconds() {
    return this.getNumberAttribute('lag_time_in_seconds');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // maintenance_target_component - computed: true, optional: false, required: false
  public get maintenanceTargetComponent() {
    return this.getStringAttribute('maintenance_target_component');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_data_guard_role_changed - computed: true, optional: false, required: false
  public get timeDataGuardRoleChanged() {
    return this.getStringAttribute('time_data_guard_role_changed');
  }

  // time_disaster_recovery_role_changed - computed: true, optional: false, required: false
  public get timeDisasterRecoveryRoleChanged() {
    return this.getStringAttribute('time_disaster_recovery_role_changed');
  }

  // time_maintenance_begin - computed: true, optional: false, required: false
  public get timeMaintenanceBegin() {
    return this.getStringAttribute('time_maintenance_begin');
  }

  // time_maintenance_end - computed: true, optional: false, required: false
  public get timeMaintenanceEnd() {
    return this.getStringAttribute('time_maintenance_end');
  }
}

export class DatabaseAutonomousDatabaseLocalStandbyDbList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseAutonomousDatabaseLocalStandbyDbOutputReference {
    return new DatabaseAutonomousDatabaseLocalStandbyDbOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseAutonomousDatabasePublicConnectionUrls {
}

export function databaseAutonomousDatabasePublicConnectionUrlsToTerraform(struct?: DatabaseAutonomousDatabasePublicConnectionUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseAutonomousDatabasePublicConnectionUrlsToHclTerraform(struct?: DatabaseAutonomousDatabasePublicConnectionUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousDatabasePublicConnectionUrls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousDatabasePublicConnectionUrls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apex_url - computed: true, optional: false, required: false
  public get apexUrl() {
    return this.getStringAttribute('apex_url');
  }

  // database_transforms_url - computed: true, optional: false, required: false
  public get databaseTransformsUrl() {
    return this.getStringAttribute('database_transforms_url');
  }

  // graph_studio_url - computed: true, optional: false, required: false
  public get graphStudioUrl() {
    return this.getStringAttribute('graph_studio_url');
  }

  // machine_learning_notebook_url - computed: true, optional: false, required: false
  public get machineLearningNotebookUrl() {
    return this.getStringAttribute('machine_learning_notebook_url');
  }

  // machine_learning_user_management_url - computed: true, optional: false, required: false
  public get machineLearningUserManagementUrl() {
    return this.getStringAttribute('machine_learning_user_management_url');
  }

  // mongo_db_url - computed: true, optional: false, required: false
  public get mongoDbUrl() {
    return this.getStringAttribute('mongo_db_url');
  }

  // ords_url - computed: true, optional: false, required: false
  public get ordsUrl() {
    return this.getStringAttribute('ords_url');
  }

  // sql_dev_web_url - computed: true, optional: false, required: false
  public get sqlDevWebUrl() {
    return this.getStringAttribute('sql_dev_web_url');
  }
}

export class DatabaseAutonomousDatabasePublicConnectionUrlsList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference {
    return new DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration {
}

export function databaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationToTerraform(struct?: DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationToHclTerraform(struct?: DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disaster_recovery_type - computed: true, optional: false, required: false
  public get disasterRecoveryType() {
    return this.getStringAttribute('disaster_recovery_type');
  }

  // is_replicate_automatic_backups - computed: true, optional: false, required: false
  public get isReplicateAutomaticBackups() {
    return this.getBooleanAttribute('is_replicate_automatic_backups');
  }

  // is_snapshot_standby - computed: true, optional: false, required: false
  public get isSnapshotStandby() {
    return this.getBooleanAttribute('is_snapshot_standby');
  }

  // time_snapshot_standby_enabled_till - computed: true, optional: false, required: false
  public get timeSnapshotStandbyEnabledTill() {
    return this.getStringAttribute('time_snapshot_standby_enabled_till');
  }
}

export class DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference {
    return new DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseAutonomousDatabaseStandbyDb {
}

export function databaseAutonomousDatabaseStandbyDbToTerraform(struct?: DatabaseAutonomousDatabaseStandbyDb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseAutonomousDatabaseStandbyDbToHclTerraform(struct?: DatabaseAutonomousDatabaseStandbyDb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseAutonomousDatabaseStandbyDbOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousDatabaseStandbyDb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousDatabaseStandbyDb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // lag_time_in_seconds - computed: true, optional: false, required: false
  public get lagTimeInSeconds() {
    return this.getNumberAttribute('lag_time_in_seconds');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // maintenance_target_component - computed: true, optional: false, required: false
  public get maintenanceTargetComponent() {
    return this.getStringAttribute('maintenance_target_component');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_data_guard_role_changed - computed: true, optional: false, required: false
  public get timeDataGuardRoleChanged() {
    return this.getStringAttribute('time_data_guard_role_changed');
  }

  // time_disaster_recovery_role_changed - computed: true, optional: false, required: false
  public get timeDisasterRecoveryRoleChanged() {
    return this.getStringAttribute('time_disaster_recovery_role_changed');
  }

  // time_maintenance_begin - computed: true, optional: false, required: false
  public get timeMaintenanceBegin() {
    return this.getStringAttribute('time_maintenance_begin');
  }

  // time_maintenance_end - computed: true, optional: false, required: false
  public get timeMaintenanceEnd() {
    return this.getStringAttribute('time_maintenance_end');
  }
}

export class DatabaseAutonomousDatabaseStandbyDbList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseAutonomousDatabaseStandbyDbOutputReference {
    return new DatabaseAutonomousDatabaseStandbyDbOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseAutonomousDatabaseVanityConnectionUrls {
}

export function databaseAutonomousDatabaseVanityConnectionUrlsToTerraform(struct?: DatabaseAutonomousDatabaseVanityConnectionUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseAutonomousDatabaseVanityConnectionUrlsToHclTerraform(struct?: DatabaseAutonomousDatabaseVanityConnectionUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseAutonomousDatabaseVanityConnectionUrlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousDatabaseVanityConnectionUrls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousDatabaseVanityConnectionUrls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apex_url - computed: true, optional: false, required: false
  public get apexUrl() {
    return this.getStringAttribute('apex_url');
  }

  // database_transforms_url - computed: true, optional: false, required: false
  public get databaseTransformsUrl() {
    return this.getStringAttribute('database_transforms_url');
  }

  // graph_studio_url - computed: true, optional: false, required: false
  public get graphStudioUrl() {
    return this.getStringAttribute('graph_studio_url');
  }

  // machine_learning_notebook_url - computed: true, optional: false, required: false
  public get machineLearningNotebookUrl() {
    return this.getStringAttribute('machine_learning_notebook_url');
  }

  // machine_learning_user_management_url - computed: true, optional: false, required: false
  public get machineLearningUserManagementUrl() {
    return this.getStringAttribute('machine_learning_user_management_url');
  }

  // mongo_db_url - computed: true, optional: false, required: false
  public get mongoDbUrl() {
    return this.getStringAttribute('mongo_db_url');
  }

  // ords_url - computed: true, optional: false, required: false
  public get ordsUrl() {
    return this.getStringAttribute('ords_url');
  }

  // sql_dev_web_url - computed: true, optional: false, required: false
  public get sqlDevWebUrl() {
    return this.getStringAttribute('sql_dev_web_url');
  }
}

export class DatabaseAutonomousDatabaseVanityConnectionUrlsList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseAutonomousDatabaseVanityConnectionUrlsOutputReference {
    return new DatabaseAutonomousDatabaseVanityConnectionUrlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseAutonomousDatabaseCustomerContacts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#email DatabaseAutonomousDatabase#email}
  */
  readonly email?: string;
}

export function databaseAutonomousDatabaseCustomerContactsToTerraform(struct?: DatabaseAutonomousDatabaseCustomerContacts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
  }
}


export function databaseAutonomousDatabaseCustomerContactsToHclTerraform(struct?: DatabaseAutonomousDatabaseCustomerContacts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseAutonomousDatabaseCustomerContactsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousDatabaseCustomerContacts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousDatabaseCustomerContacts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
    }
  }

  // email - computed: true, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }
}

export class DatabaseAutonomousDatabaseCustomerContactsList extends cdktf.ComplexList {
  public internalValue? : DatabaseAutonomousDatabaseCustomerContacts[] | cdktf.IResolvable

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
  public get(index: number): DatabaseAutonomousDatabaseCustomerContactsOutputReference {
    return new DatabaseAutonomousDatabaseCustomerContactsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseAutonomousDatabaseDbToolsDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#compute_count DatabaseAutonomousDatabase#compute_count}
  */
  readonly computeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#is_enabled DatabaseAutonomousDatabase#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#max_idle_time_in_minutes DatabaseAutonomousDatabase#max_idle_time_in_minutes}
  */
  readonly maxIdleTimeInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#name DatabaseAutonomousDatabase#name}
  */
  readonly name: string;
}

export function databaseAutonomousDatabaseDbToolsDetailsToTerraform(struct?: DatabaseAutonomousDatabaseDbToolsDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compute_count: cdktf.numberToTerraform(struct!.computeCount),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    max_idle_time_in_minutes: cdktf.numberToTerraform(struct!.maxIdleTimeInMinutes),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function databaseAutonomousDatabaseDbToolsDetailsToHclTerraform(struct?: DatabaseAutonomousDatabaseDbToolsDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compute_count: {
      value: cdktf.numberToHclTerraform(struct!.computeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_idle_time_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.maxIdleTimeInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseAutonomousDatabaseDbToolsDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousDatabaseDbToolsDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._computeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeCount = this._computeCount;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._maxIdleTimeInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdleTimeInMinutes = this._maxIdleTimeInMinutes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousDatabaseDbToolsDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._computeCount = undefined;
      this._isEnabled = undefined;
      this._maxIdleTimeInMinutes = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._computeCount = value.computeCount;
      this._isEnabled = value.isEnabled;
      this._maxIdleTimeInMinutes = value.maxIdleTimeInMinutes;
      this._name = value.name;
    }
  }

  // compute_count - computed: true, optional: true, required: false
  private _computeCount?: number; 
  public get computeCount() {
    return this.getNumberAttribute('compute_count');
  }
  public set computeCount(value: number) {
    this._computeCount = value;
  }
  public resetComputeCount() {
    this._computeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeCountInput() {
    return this._computeCount;
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // max_idle_time_in_minutes - computed: true, optional: true, required: false
  private _maxIdleTimeInMinutes?: number; 
  public get maxIdleTimeInMinutes() {
    return this.getNumberAttribute('max_idle_time_in_minutes');
  }
  public set maxIdleTimeInMinutes(value: number) {
    this._maxIdleTimeInMinutes = value;
  }
  public resetMaxIdleTimeInMinutes() {
    this._maxIdleTimeInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleTimeInMinutesInput() {
    return this._maxIdleTimeInMinutes;
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
}

export class DatabaseAutonomousDatabaseDbToolsDetailsList extends cdktf.ComplexList {
  public internalValue? : DatabaseAutonomousDatabaseDbToolsDetails[] | cdktf.IResolvable

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
  public get(index: number): DatabaseAutonomousDatabaseDbToolsDetailsOutputReference {
    return new DatabaseAutonomousDatabaseDbToolsDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseAutonomousDatabaseEncryptionKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#arn_role DatabaseAutonomousDatabase#arn_role}
  */
  readonly arnRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#autonomous_database_provider DatabaseAutonomousDatabase#autonomous_database_provider}
  */
  readonly autonomousDatabaseProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#certificate_directory_name DatabaseAutonomousDatabase#certificate_directory_name}
  */
  readonly certificateDirectoryName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#certificate_id DatabaseAutonomousDatabase#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#directory_name DatabaseAutonomousDatabase#directory_name}
  */
  readonly directoryName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#external_id DatabaseAutonomousDatabase#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#key_arn DatabaseAutonomousDatabase#key_arn}
  */
  readonly keyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#key_name DatabaseAutonomousDatabase#key_name}
  */
  readonly keyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#key_ring DatabaseAutonomousDatabase#key_ring}
  */
  readonly keyRing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#kms_key_id DatabaseAutonomousDatabase#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#kms_rest_endpoint DatabaseAutonomousDatabase#kms_rest_endpoint}
  */
  readonly kmsRestEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#location DatabaseAutonomousDatabase#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#okv_kms_key DatabaseAutonomousDatabase#okv_kms_key}
  */
  readonly okvKmsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#okv_uri DatabaseAutonomousDatabase#okv_uri}
  */
  readonly okvUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#project DatabaseAutonomousDatabase#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#service_endpoint_uri DatabaseAutonomousDatabase#service_endpoint_uri}
  */
  readonly serviceEndpointUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#vault_id DatabaseAutonomousDatabase#vault_id}
  */
  readonly vaultId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#vault_uri DatabaseAutonomousDatabase#vault_uri}
  */
  readonly vaultUri?: string;
}

export function databaseAutonomousDatabaseEncryptionKeyToTerraform(struct?: DatabaseAutonomousDatabaseEncryptionKeyOutputReference | DatabaseAutonomousDatabaseEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn_role: cdktf.stringToTerraform(struct!.arnRole),
    autonomous_database_provider: cdktf.stringToTerraform(struct!.autonomousDatabaseProvider),
    certificate_directory_name: cdktf.stringToTerraform(struct!.certificateDirectoryName),
    certificate_id: cdktf.stringToTerraform(struct!.certificateId),
    directory_name: cdktf.stringToTerraform(struct!.directoryName),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    key_arn: cdktf.stringToTerraform(struct!.keyArn),
    key_name: cdktf.stringToTerraform(struct!.keyName),
    key_ring: cdktf.stringToTerraform(struct!.keyRing),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    kms_rest_endpoint: cdktf.stringToTerraform(struct!.kmsRestEndpoint),
    location: cdktf.stringToTerraform(struct!.location),
    okv_kms_key: cdktf.stringToTerraform(struct!.okvKmsKey),
    okv_uri: cdktf.stringToTerraform(struct!.okvUri),
    project: cdktf.stringToTerraform(struct!.project),
    service_endpoint_uri: cdktf.stringToTerraform(struct!.serviceEndpointUri),
    vault_id: cdktf.stringToTerraform(struct!.vaultId),
    vault_uri: cdktf.stringToTerraform(struct!.vaultUri),
  }
}


export function databaseAutonomousDatabaseEncryptionKeyToHclTerraform(struct?: DatabaseAutonomousDatabaseEncryptionKeyOutputReference | DatabaseAutonomousDatabaseEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arn_role: {
      value: cdktf.stringToHclTerraform(struct!.arnRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autonomous_database_provider: {
      value: cdktf.stringToHclTerraform(struct!.autonomousDatabaseProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_directory_name: {
      value: cdktf.stringToHclTerraform(struct!.certificateDirectoryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_id: {
      value: cdktf.stringToHclTerraform(struct!.certificateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    directory_name: {
      value: cdktf.stringToHclTerraform(struct!.directoryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_arn: {
      value: cdktf.stringToHclTerraform(struct!.keyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_name: {
      value: cdktf.stringToHclTerraform(struct!.keyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_ring: {
      value: cdktf.stringToHclTerraform(struct!.keyRing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_rest_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.kmsRestEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    okv_kms_key: {
      value: cdktf.stringToHclTerraform(struct!.okvKmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    okv_uri: {
      value: cdktf.stringToHclTerraform(struct!.okvUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_endpoint_uri: {
      value: cdktf.stringToHclTerraform(struct!.serviceEndpointUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault_id: {
      value: cdktf.stringToHclTerraform(struct!.vaultId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault_uri: {
      value: cdktf.stringToHclTerraform(struct!.vaultUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseAutonomousDatabaseEncryptionKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseAutonomousDatabaseEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arnRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.arnRole = this._arnRole;
    }
    if (this._autonomousDatabaseProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.autonomousDatabaseProvider = this._autonomousDatabaseProvider;
    }
    if (this._certificateDirectoryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateDirectoryName = this._certificateDirectoryName;
    }
    if (this._certificateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateId = this._certificateId;
    }
    if (this._directoryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.directoryName = this._directoryName;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._keyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyArn = this._keyArn;
    }
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._keyRing !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyRing = this._keyRing;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._kmsRestEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsRestEndpoint = this._kmsRestEndpoint;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._okvKmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.okvKmsKey = this._okvKmsKey;
    }
    if (this._okvUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.okvUri = this._okvUri;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._serviceEndpointUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceEndpointUri = this._serviceEndpointUri;
    }
    if (this._vaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultId = this._vaultId;
    }
    if (this._vaultUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultUri = this._vaultUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousDatabaseEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arnRole = undefined;
      this._autonomousDatabaseProvider = undefined;
      this._certificateDirectoryName = undefined;
      this._certificateId = undefined;
      this._directoryName = undefined;
      this._externalId = undefined;
      this._keyArn = undefined;
      this._keyName = undefined;
      this._keyRing = undefined;
      this._kmsKeyId = undefined;
      this._kmsRestEndpoint = undefined;
      this._location = undefined;
      this._okvKmsKey = undefined;
      this._okvUri = undefined;
      this._project = undefined;
      this._serviceEndpointUri = undefined;
      this._vaultId = undefined;
      this._vaultUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arnRole = value.arnRole;
      this._autonomousDatabaseProvider = value.autonomousDatabaseProvider;
      this._certificateDirectoryName = value.certificateDirectoryName;
      this._certificateId = value.certificateId;
      this._directoryName = value.directoryName;
      this._externalId = value.externalId;
      this._keyArn = value.keyArn;
      this._keyName = value.keyName;
      this._keyRing = value.keyRing;
      this._kmsKeyId = value.kmsKeyId;
      this._kmsRestEndpoint = value.kmsRestEndpoint;
      this._location = value.location;
      this._okvKmsKey = value.okvKmsKey;
      this._okvUri = value.okvUri;
      this._project = value.project;
      this._serviceEndpointUri = value.serviceEndpointUri;
      this._vaultId = value.vaultId;
      this._vaultUri = value.vaultUri;
    }
  }

  // arn_role - computed: true, optional: true, required: false
  private _arnRole?: string; 
  public get arnRole() {
    return this.getStringAttribute('arn_role');
  }
  public set arnRole(value: string) {
    this._arnRole = value;
  }
  public resetArnRole() {
    this._arnRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnRoleInput() {
    return this._arnRole;
  }

  // autonomous_database_provider - computed: true, optional: true, required: false
  private _autonomousDatabaseProvider?: string; 
  public get autonomousDatabaseProvider() {
    return this.getStringAttribute('autonomous_database_provider');
  }
  public set autonomousDatabaseProvider(value: string) {
    this._autonomousDatabaseProvider = value;
  }
  public resetAutonomousDatabaseProvider() {
    this._autonomousDatabaseProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousDatabaseProviderInput() {
    return this._autonomousDatabaseProvider;
  }

  // certificate_directory_name - computed: true, optional: true, required: false
  private _certificateDirectoryName?: string; 
  public get certificateDirectoryName() {
    return this.getStringAttribute('certificate_directory_name');
  }
  public set certificateDirectoryName(value: string) {
    this._certificateDirectoryName = value;
  }
  public resetCertificateDirectoryName() {
    this._certificateDirectoryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateDirectoryNameInput() {
    return this._certificateDirectoryName;
  }

  // certificate_id - computed: true, optional: true, required: false
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // directory_name - computed: true, optional: true, required: false
  private _directoryName?: string; 
  public get directoryName() {
    return this.getStringAttribute('directory_name');
  }
  public set directoryName(value: string) {
    this._directoryName = value;
  }
  public resetDirectoryName() {
    this._directoryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryNameInput() {
    return this._directoryName;
  }

  // external_id - computed: true, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // key_arn - computed: true, optional: true, required: false
  private _keyArn?: string; 
  public get keyArn() {
    return this.getStringAttribute('key_arn');
  }
  public set keyArn(value: string) {
    this._keyArn = value;
  }
  public resetKeyArn() {
    this._keyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyArnInput() {
    return this._keyArn;
  }

  // key_name - computed: true, optional: true, required: false
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  public resetKeyName() {
    this._keyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // key_ring - computed: true, optional: true, required: false
  private _keyRing?: string; 
  public get keyRing() {
    return this.getStringAttribute('key_ring');
  }
  public set keyRing(value: string) {
    this._keyRing = value;
  }
  public resetKeyRing() {
    this._keyRing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRingInput() {
    return this._keyRing;
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // kms_rest_endpoint - computed: true, optional: true, required: false
  private _kmsRestEndpoint?: string; 
  public get kmsRestEndpoint() {
    return this.getStringAttribute('kms_rest_endpoint');
  }
  public set kmsRestEndpoint(value: string) {
    this._kmsRestEndpoint = value;
  }
  public resetKmsRestEndpoint() {
    this._kmsRestEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsRestEndpointInput() {
    return this._kmsRestEndpoint;
  }

  // location - computed: true, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // okv_kms_key - computed: true, optional: true, required: false
  private _okvKmsKey?: string; 
  public get okvKmsKey() {
    return this.getStringAttribute('okv_kms_key');
  }
  public set okvKmsKey(value: string) {
    this._okvKmsKey = value;
  }
  public resetOkvKmsKey() {
    this._okvKmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get okvKmsKeyInput() {
    return this._okvKmsKey;
  }

  // okv_uri - computed: true, optional: true, required: false
  private _okvUri?: string; 
  public get okvUri() {
    return this.getStringAttribute('okv_uri');
  }
  public set okvUri(value: string) {
    this._okvUri = value;
  }
  public resetOkvUri() {
    this._okvUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get okvUriInput() {
    return this._okvUri;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // service_endpoint_uri - computed: true, optional: true, required: false
  private _serviceEndpointUri?: string; 
  public get serviceEndpointUri() {
    return this.getStringAttribute('service_endpoint_uri');
  }
  public set serviceEndpointUri(value: string) {
    this._serviceEndpointUri = value;
  }
  public resetServiceEndpointUri() {
    this._serviceEndpointUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEndpointUriInput() {
    return this._serviceEndpointUri;
  }

  // vault_id - computed: true, optional: true, required: false
  private _vaultId?: string; 
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
  public set vaultId(value: string) {
    this._vaultId = value;
  }
  public resetVaultId() {
    this._vaultId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultIdInput() {
    return this._vaultId;
  }

  // vault_uri - computed: true, optional: true, required: false
  private _vaultUri?: string; 
  public get vaultUri() {
    return this.getStringAttribute('vault_uri');
  }
  public set vaultUri(value: string) {
    this._vaultUri = value;
  }
  public resetVaultUri() {
    this._vaultUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultUriInput() {
    return this._vaultUri;
  }
}
export interface DatabaseAutonomousDatabaseLongTermBackupSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#is_disabled DatabaseAutonomousDatabase#is_disabled}
  */
  readonly isDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#repeat_cadence DatabaseAutonomousDatabase#repeat_cadence}
  */
  readonly repeatCadence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#retention_period_in_days DatabaseAutonomousDatabase#retention_period_in_days}
  */
  readonly retentionPeriodInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#time_of_backup DatabaseAutonomousDatabase#time_of_backup}
  */
  readonly timeOfBackup?: string;
}

export function databaseAutonomousDatabaseLongTermBackupScheduleToTerraform(struct?: DatabaseAutonomousDatabaseLongTermBackupSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_disabled: cdktf.booleanToTerraform(struct!.isDisabled),
    repeat_cadence: cdktf.stringToTerraform(struct!.repeatCadence),
    retention_period_in_days: cdktf.numberToTerraform(struct!.retentionPeriodInDays),
    time_of_backup: cdktf.stringToTerraform(struct!.timeOfBackup),
  }
}


export function databaseAutonomousDatabaseLongTermBackupScheduleToHclTerraform(struct?: DatabaseAutonomousDatabaseLongTermBackupSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.isDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    repeat_cadence: {
      value: cdktf.stringToHclTerraform(struct!.repeatCadence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention_period_in_days: {
      value: cdktf.numberToHclTerraform(struct!.retentionPeriodInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_of_backup: {
      value: cdktf.stringToHclTerraform(struct!.timeOfBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousDatabaseLongTermBackupSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDisabled = this._isDisabled;
    }
    if (this._repeatCadence !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatCadence = this._repeatCadence;
    }
    if (this._retentionPeriodInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPeriodInDays = this._retentionPeriodInDays;
    }
    if (this._timeOfBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOfBackup = this._timeOfBackup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousDatabaseLongTermBackupSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isDisabled = undefined;
      this._repeatCadence = undefined;
      this._retentionPeriodInDays = undefined;
      this._timeOfBackup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isDisabled = value.isDisabled;
      this._repeatCadence = value.repeatCadence;
      this._retentionPeriodInDays = value.retentionPeriodInDays;
      this._timeOfBackup = value.timeOfBackup;
    }
  }

  // is_disabled - computed: true, optional: true, required: false
  private _isDisabled?: boolean | cdktf.IResolvable; 
  public get isDisabled() {
    return this.getBooleanAttribute('is_disabled');
  }
  public set isDisabled(value: boolean | cdktf.IResolvable) {
    this._isDisabled = value;
  }
  public resetIsDisabled() {
    this._isDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDisabledInput() {
    return this._isDisabled;
  }

  // repeat_cadence - computed: true, optional: true, required: false
  private _repeatCadence?: string; 
  public get repeatCadence() {
    return this.getStringAttribute('repeat_cadence');
  }
  public set repeatCadence(value: string) {
    this._repeatCadence = value;
  }
  public resetRepeatCadence() {
    this._repeatCadence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatCadenceInput() {
    return this._repeatCadence;
  }

  // retention_period_in_days - computed: true, optional: true, required: false
  private _retentionPeriodInDays?: number; 
  public get retentionPeriodInDays() {
    return this.getNumberAttribute('retention_period_in_days');
  }
  public set retentionPeriodInDays(value: number) {
    this._retentionPeriodInDays = value;
  }
  public resetRetentionPeriodInDays() {
    this._retentionPeriodInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInDaysInput() {
    return this._retentionPeriodInDays;
  }

  // time_of_backup - computed: true, optional: true, required: false
  private _timeOfBackup?: string; 
  public get timeOfBackup() {
    return this.getStringAttribute('time_of_backup');
  }
  public set timeOfBackup(value: string) {
    this._timeOfBackup = value;
  }
  public resetTimeOfBackup() {
    this._timeOfBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOfBackupInput() {
    return this._timeOfBackup;
  }
}

export class DatabaseAutonomousDatabaseLongTermBackupScheduleList extends cdktf.ComplexList {
  public internalValue? : DatabaseAutonomousDatabaseLongTermBackupSchedule[] | cdktf.IResolvable

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
  public get(index: number): DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference {
    return new DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseAutonomousDatabaseResourcePoolSummary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#is_disabled DatabaseAutonomousDatabase#is_disabled}
  */
  readonly isDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#pool_size DatabaseAutonomousDatabase#pool_size}
  */
  readonly poolSize?: number;
}

export function databaseAutonomousDatabaseResourcePoolSummaryToTerraform(struct?: DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference | DatabaseAutonomousDatabaseResourcePoolSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_disabled: cdktf.booleanToTerraform(struct!.isDisabled),
    pool_size: cdktf.numberToTerraform(struct!.poolSize),
  }
}


export function databaseAutonomousDatabaseResourcePoolSummaryToHclTerraform(struct?: DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference | DatabaseAutonomousDatabaseResourcePoolSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.isDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pool_size: {
      value: cdktf.numberToHclTerraform(struct!.poolSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseAutonomousDatabaseResourcePoolSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDisabled = this._isDisabled;
    }
    if (this._poolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolSize = this._poolSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousDatabaseResourcePoolSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isDisabled = undefined;
      this._poolSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isDisabled = value.isDisabled;
      this._poolSize = value.poolSize;
    }
  }

  // available_compute_capacity - computed: true, optional: false, required: false
  public get availableComputeCapacity() {
    return this.getNumberAttribute('available_compute_capacity');
  }

  // is_disabled - computed: true, optional: true, required: false
  private _isDisabled?: boolean | cdktf.IResolvable; 
  public get isDisabled() {
    return this.getBooleanAttribute('is_disabled');
  }
  public set isDisabled(value: boolean | cdktf.IResolvable) {
    this._isDisabled = value;
  }
  public resetIsDisabled() {
    this._isDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDisabledInput() {
    return this._isDisabled;
  }

  // pool_size - computed: true, optional: true, required: false
  private _poolSize?: number; 
  public get poolSize() {
    return this.getNumberAttribute('pool_size');
  }
  public set poolSize(value: number) {
    this._poolSize = value;
  }
  public resetPoolSize() {
    this._poolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolSizeInput() {
    return this._poolSize;
  }

  // total_compute_capacity - computed: true, optional: false, required: false
  public get totalComputeCapacity() {
    return this.getNumberAttribute('total_compute_capacity');
  }
}
export interface DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#name DatabaseAutonomousDatabase#name}
  */
  readonly name: string;
}

export function databaseAutonomousDatabaseScheduledOperationsDayOfWeekToTerraform(struct?: DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference | DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function databaseAutonomousDatabaseScheduledOperationsDayOfWeekToHclTerraform(struct?: DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference | DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface DatabaseAutonomousDatabaseScheduledOperations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#scheduled_start_time DatabaseAutonomousDatabase#scheduled_start_time}
  */
  readonly scheduledStartTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#scheduled_stop_time DatabaseAutonomousDatabase#scheduled_stop_time}
  */
  readonly scheduledStopTime?: string;
  /**
  * day_of_week block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#day_of_week DatabaseAutonomousDatabase#day_of_week}
  */
  readonly dayOfWeek?: DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek;
}

export function databaseAutonomousDatabaseScheduledOperationsToTerraform(struct?: DatabaseAutonomousDatabaseScheduledOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scheduled_start_time: cdktf.stringToTerraform(struct!.scheduledStartTime),
    scheduled_stop_time: cdktf.stringToTerraform(struct!.scheduledStopTime),
    day_of_week: databaseAutonomousDatabaseScheduledOperationsDayOfWeekToTerraform(struct!.dayOfWeek),
  }
}


export function databaseAutonomousDatabaseScheduledOperationsToHclTerraform(struct?: DatabaseAutonomousDatabaseScheduledOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scheduled_start_time: {
      value: cdktf.stringToHclTerraform(struct!.scheduledStartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduled_stop_time: {
      value: cdktf.stringToHclTerraform(struct!.scheduledStopTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_of_week: {
      value: databaseAutonomousDatabaseScheduledOperationsDayOfWeekToHclTerraform(struct!.dayOfWeek),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseAutonomousDatabaseScheduledOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousDatabaseScheduledOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scheduledStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduledStartTime = this._scheduledStartTime;
    }
    if (this._scheduledStopTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduledStopTime = this._scheduledStopTime;
    }
    if (this._dayOfWeek?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousDatabaseScheduledOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scheduledStartTime = undefined;
      this._scheduledStopTime = undefined;
      this._dayOfWeek.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scheduledStartTime = value.scheduledStartTime;
      this._scheduledStopTime = value.scheduledStopTime;
      this._dayOfWeek.internalValue = value.dayOfWeek;
    }
  }

  // scheduled_start_time - computed: false, optional: true, required: false
  private _scheduledStartTime?: string; 
  public get scheduledStartTime() {
    return this.getStringAttribute('scheduled_start_time');
  }
  public set scheduledStartTime(value: string) {
    this._scheduledStartTime = value;
  }
  public resetScheduledStartTime() {
    this._scheduledStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledStartTimeInput() {
    return this._scheduledStartTime;
  }

  // scheduled_stop_time - computed: false, optional: true, required: false
  private _scheduledStopTime?: string; 
  public get scheduledStopTime() {
    return this.getStringAttribute('scheduled_stop_time');
  }
  public set scheduledStopTime(value: string) {
    this._scheduledStopTime = value;
  }
  public resetScheduledStopTime() {
    this._scheduledStopTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledStopTimeInput() {
    return this._scheduledStopTime;
  }

  // day_of_week - computed: false, optional: true, required: false
  private _dayOfWeek = new DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference(this, "day_of_week");
  public get dayOfWeek() {
    return this._dayOfWeek;
  }
  public putDayOfWeek(value: DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek) {
    this._dayOfWeek.internalValue = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek.internalValue;
  }
}

export class DatabaseAutonomousDatabaseScheduledOperationsList extends cdktf.ComplexList {
  public internalValue? : DatabaseAutonomousDatabaseScheduledOperations[] | cdktf.IResolvable

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
  public get(index: number): DatabaseAutonomousDatabaseScheduledOperationsOutputReference {
    return new DatabaseAutonomousDatabaseScheduledOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseAutonomousDatabaseTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#create DatabaseAutonomousDatabase#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#delete DatabaseAutonomousDatabase#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#update DatabaseAutonomousDatabase#update}
  */
  readonly update?: string;
}

export function databaseAutonomousDatabaseTimeoutsToTerraform(struct?: DatabaseAutonomousDatabaseTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function databaseAutonomousDatabaseTimeoutsToHclTerraform(struct?: DatabaseAutonomousDatabaseTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseAutonomousDatabaseTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseAutonomousDatabaseTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousDatabaseTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface DatabaseAutonomousDatabaseVanityUrlDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#api_gateway_id DatabaseAutonomousDatabase#api_gateway_id}
  */
  readonly apiGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#is_disabled DatabaseAutonomousDatabase#is_disabled}
  */
  readonly isDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#vanity_url_host_name DatabaseAutonomousDatabase#vanity_url_host_name}
  */
  readonly vanityUrlHostName?: string;
}

export function databaseAutonomousDatabaseVanityUrlDetailsToTerraform(struct?: DatabaseAutonomousDatabaseVanityUrlDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_gateway_id: cdktf.stringToTerraform(struct!.apiGatewayId),
    is_disabled: cdktf.booleanToTerraform(struct!.isDisabled),
    vanity_url_host_name: cdktf.stringToTerraform(struct!.vanityUrlHostName),
  }
}


export function databaseAutonomousDatabaseVanityUrlDetailsToHclTerraform(struct?: DatabaseAutonomousDatabaseVanityUrlDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_gateway_id: {
      value: cdktf.stringToHclTerraform(struct!.apiGatewayId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.isDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vanity_url_host_name: {
      value: cdktf.stringToHclTerraform(struct!.vanityUrlHostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseAutonomousDatabaseVanityUrlDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousDatabaseVanityUrlDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGatewayId !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGatewayId = this._apiGatewayId;
    }
    if (this._isDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDisabled = this._isDisabled;
    }
    if (this._vanityUrlHostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vanityUrlHostName = this._vanityUrlHostName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousDatabaseVanityUrlDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGatewayId = undefined;
      this._isDisabled = undefined;
      this._vanityUrlHostName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiGatewayId = value.apiGatewayId;
      this._isDisabled = value.isDisabled;
      this._vanityUrlHostName = value.vanityUrlHostName;
    }
  }

  // api_gateway_id - computed: true, optional: true, required: false
  private _apiGatewayId?: string; 
  public get apiGatewayId() {
    return this.getStringAttribute('api_gateway_id');
  }
  public set apiGatewayId(value: string) {
    this._apiGatewayId = value;
  }
  public resetApiGatewayId() {
    this._apiGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGatewayIdInput() {
    return this._apiGatewayId;
  }

  // is_disabled - computed: true, optional: true, required: false
  private _isDisabled?: boolean | cdktf.IResolvable; 
  public get isDisabled() {
    return this.getBooleanAttribute('is_disabled');
  }
  public set isDisabled(value: boolean | cdktf.IResolvable) {
    this._isDisabled = value;
  }
  public resetIsDisabled() {
    this._isDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDisabledInput() {
    return this._isDisabled;
  }

  // vanity_url_host_name - computed: true, optional: true, required: false
  private _vanityUrlHostName?: string; 
  public get vanityUrlHostName() {
    return this.getStringAttribute('vanity_url_host_name');
  }
  public set vanityUrlHostName(value: string) {
    this._vanityUrlHostName = value;
  }
  public resetVanityUrlHostName() {
    this._vanityUrlHostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vanityUrlHostNameInput() {
    return this._vanityUrlHostName;
  }
}

export class DatabaseAutonomousDatabaseVanityUrlDetailsList extends cdktf.ComplexList {
  public internalValue? : DatabaseAutonomousDatabaseVanityUrlDetails[] | cdktf.IResolvable

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
  public get(index: number): DatabaseAutonomousDatabaseVanityUrlDetailsOutputReference {
    return new DatabaseAutonomousDatabaseVanityUrlDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database oci_database_autonomous_database}
*/
export class DatabaseAutonomousDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_autonomous_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseAutonomousDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseAutonomousDatabase to import
  * @param importFromId The id of the existing DatabaseAutonomousDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseAutonomousDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_autonomous_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_autonomous_database oci_database_autonomous_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseAutonomousDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseAutonomousDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_autonomous_database',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminPassword = config.adminPassword;
    this._arePrimaryWhitelistedIpsUsed = config.arePrimaryWhitelistedIpsUsed;
    this._autoRefreshFrequencyInSeconds = config.autoRefreshFrequencyInSeconds;
    this._autoRefreshPointLagInSeconds = config.autoRefreshPointLagInSeconds;
    this._autonomousContainerDatabaseId = config.autonomousContainerDatabaseId;
    this._autonomousDatabaseBackupId = config.autonomousDatabaseBackupId;
    this._autonomousDatabaseId = config.autonomousDatabaseId;
    this._autonomousMaintenanceScheduleType = config.autonomousMaintenanceScheduleType;
    this._backupRetentionPeriodInDays = config.backupRetentionPeriodInDays;
    this._byolComputeCountLimit = config.byolComputeCountLimit;
    this._characterSet = config.characterSet;
    this._cloneTableSpaceList = config.cloneTableSpaceList;
    this._cloneType = config.cloneType;
    this._compartmentId = config.compartmentId;
    this._computeCount = config.computeCount;
    this._computeModel = config.computeModel;
    this._cpuCoreCount = config.cpuCoreCount;
    this._dataSafeStatus = config.dataSafeStatus;
    this._dataStorageSizeInGb = config.dataStorageSizeInGb;
    this._dataStorageSizeInTbs = config.dataStorageSizeInTbs;
    this._databaseEdition = config.databaseEdition;
    this._databaseManagementStatus = config.databaseManagementStatus;
    this._dbName = config.dbName;
    this._dbVersion = config.dbVersion;
    this._dbWorkload = config.dbWorkload;
    this._definedTags = config.definedTags;
    this._disasterRecoveryType = config.disasterRecoveryType;
    this._displayName = config.displayName;
    this._enableDeleteScheduledOperations = config.enableDeleteScheduledOperations;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._inMemoryPercentage = config.inMemoryPercentage;
    this._isAccessControlEnabled = config.isAccessControlEnabled;
    this._isAutoScalingEnabled = config.isAutoScalingEnabled;
    this._isAutoScalingForStorageEnabled = config.isAutoScalingForStorageEnabled;
    this._isBackupRetentionLocked = config.isBackupRetentionLocked;
    this._isDataGuardEnabled = config.isDataGuardEnabled;
    this._isDedicated = config.isDedicated;
    this._isDevTier = config.isDevTier;
    this._isDisableDbVersionUpgradeSchedule = config.isDisableDbVersionUpgradeSchedule;
    this._isDisconnectPeer = config.isDisconnectPeer;
    this._isFreeTier = config.isFreeTier;
    this._isLocalDataGuardEnabled = config.isLocalDataGuardEnabled;
    this._isMtlsConnectionRequired = config.isMtlsConnectionRequired;
    this._isPreviewVersionWithServiceTermsAccepted = config.isPreviewVersionWithServiceTermsAccepted;
    this._isRefreshableClone = config.isRefreshableClone;
    this._isReplicateAutomaticBackups = config.isReplicateAutomaticBackups;
    this._isScheduleDbVersionUpgradeToEarliest = config.isScheduleDbVersionUpgradeToEarliest;
    this._isShrinkOnly = config.isShrinkOnly;
    this._keyVersionId = config.keyVersionId;
    this._kmsKeyId = config.kmsKeyId;
    this._licenseModel = config.licenseModel;
    this._localAdgAutoFailoverMaxDataLossLimit = config.localAdgAutoFailoverMaxDataLossLimit;
    this._maxCpuCoreCount = config.maxCpuCoreCount;
    this._ncharacterSet = config.ncharacterSet;
    this._nsgIds = config.nsgIds;
    this._ocpuCount = config.ocpuCount;
    this._openMode = config.openMode;
    this._operationsInsightsStatus = config.operationsInsightsStatus;
    this._peerDbId = config.peerDbId;
    this._permissionLevel = config.permissionLevel;
    this._privateEndpointIp = config.privateEndpointIp;
    this._privateEndpointLabel = config.privateEndpointLabel;
    this._refreshableMode = config.refreshableMode;
    this._remoteDisasterRecoveryType = config.remoteDisasterRecoveryType;
    this._resourcePoolLeaderId = config.resourcePoolLeaderId;
    this._rotateKeyTrigger = config.rotateKeyTrigger;
    this._secretId = config.secretId;
    this._secretVersionNumber = config.secretVersionNumber;
    this._securityAttributes = config.securityAttributes;
    this._shrinkAdbTrigger = config.shrinkAdbTrigger;
    this._source = config.source;
    this._sourceId = config.sourceId;
    this._standbyWhitelistedIps = config.standbyWhitelistedIps;
    this._state = config.state;
    this._subnetId = config.subnetId;
    this._subscriptionId = config.subscriptionId;
    this._switchoverTo = config.switchoverTo;
    this._switchoverToRemotePeerId = config.switchoverToRemotePeerId;
    this._timeOfAutoRefreshStart = config.timeOfAutoRefreshStart;
    this._timeScheduledDbVersionUpgrade = config.timeScheduledDbVersionUpgrade;
    this._timestamp = config.timestamp;
    this._useLatestAvailableBackupTimeStamp = config.useLatestAvailableBackupTimeStamp;
    this._vaultId = config.vaultId;
    this._whitelistedIps = config.whitelistedIps;
    this._customerContacts.internalValue = config.customerContacts;
    this._dbToolsDetails.internalValue = config.dbToolsDetails;
    this._encryptionKey.internalValue = config.encryptionKey;
    this._longTermBackupSchedule.internalValue = config.longTermBackupSchedule;
    this._resourcePoolSummary.internalValue = config.resourcePoolSummary;
    this._scheduledOperations.internalValue = config.scheduledOperations;
    this._timeouts.internalValue = config.timeouts;
    this._vanityUrlDetails.internalValue = config.vanityUrlDetails;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actual_used_data_storage_size_in_tbs - computed: true, optional: false, required: false
  public get actualUsedDataStorageSizeInTbs() {
    return this.getNumberAttribute('actual_used_data_storage_size_in_tbs');
  }

  // additional_attributes - computed: true, optional: false, required: false
  private _additionalAttributes = new cdktf.StringMap(this, "additional_attributes");
  public get additionalAttributes() {
    return this._additionalAttributes;
  }

  // admin_password - computed: true, optional: true, required: false
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  public resetAdminPassword() {
    this._adminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // allocated_storage_size_in_tbs - computed: true, optional: false, required: false
  public get allocatedStorageSizeInTbs() {
    return this.getNumberAttribute('allocated_storage_size_in_tbs');
  }

  // apex_details - computed: true, optional: false, required: false
  private _apexDetails = new DatabaseAutonomousDatabaseApexDetailsList(this, "apex_details", false);
  public get apexDetails() {
    return this._apexDetails;
  }

  // are_primary_whitelisted_ips_used - computed: true, optional: true, required: false
  private _arePrimaryWhitelistedIpsUsed?: boolean | cdktf.IResolvable; 
  public get arePrimaryWhitelistedIpsUsed() {
    return this.getBooleanAttribute('are_primary_whitelisted_ips_used');
  }
  public set arePrimaryWhitelistedIpsUsed(value: boolean | cdktf.IResolvable) {
    this._arePrimaryWhitelistedIpsUsed = value;
  }
  public resetArePrimaryWhitelistedIpsUsed() {
    this._arePrimaryWhitelistedIpsUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arePrimaryWhitelistedIpsUsedInput() {
    return this._arePrimaryWhitelistedIpsUsed;
  }

  // auto_refresh_frequency_in_seconds - computed: true, optional: true, required: false
  private _autoRefreshFrequencyInSeconds?: number; 
  public get autoRefreshFrequencyInSeconds() {
    return this.getNumberAttribute('auto_refresh_frequency_in_seconds');
  }
  public set autoRefreshFrequencyInSeconds(value: number) {
    this._autoRefreshFrequencyInSeconds = value;
  }
  public resetAutoRefreshFrequencyInSeconds() {
    this._autoRefreshFrequencyInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRefreshFrequencyInSecondsInput() {
    return this._autoRefreshFrequencyInSeconds;
  }

  // auto_refresh_point_lag_in_seconds - computed: true, optional: true, required: false
  private _autoRefreshPointLagInSeconds?: number; 
  public get autoRefreshPointLagInSeconds() {
    return this.getNumberAttribute('auto_refresh_point_lag_in_seconds');
  }
  public set autoRefreshPointLagInSeconds(value: number) {
    this._autoRefreshPointLagInSeconds = value;
  }
  public resetAutoRefreshPointLagInSeconds() {
    this._autoRefreshPointLagInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRefreshPointLagInSecondsInput() {
    return this._autoRefreshPointLagInSeconds;
  }

  // autonomous_container_database_id - computed: true, optional: true, required: false
  private _autonomousContainerDatabaseId?: string; 
  public get autonomousContainerDatabaseId() {
    return this.getStringAttribute('autonomous_container_database_id');
  }
  public set autonomousContainerDatabaseId(value: string) {
    this._autonomousContainerDatabaseId = value;
  }
  public resetAutonomousContainerDatabaseId() {
    this._autonomousContainerDatabaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousContainerDatabaseIdInput() {
    return this._autonomousContainerDatabaseId;
  }

  // autonomous_database_backup_id - computed: true, optional: true, required: false
  private _autonomousDatabaseBackupId?: string; 
  public get autonomousDatabaseBackupId() {
    return this.getStringAttribute('autonomous_database_backup_id');
  }
  public set autonomousDatabaseBackupId(value: string) {
    this._autonomousDatabaseBackupId = value;
  }
  public resetAutonomousDatabaseBackupId() {
    this._autonomousDatabaseBackupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousDatabaseBackupIdInput() {
    return this._autonomousDatabaseBackupId;
  }

  // autonomous_database_id - computed: true, optional: true, required: false
  private _autonomousDatabaseId?: string; 
  public get autonomousDatabaseId() {
    return this.getStringAttribute('autonomous_database_id');
  }
  public set autonomousDatabaseId(value: string) {
    this._autonomousDatabaseId = value;
  }
  public resetAutonomousDatabaseId() {
    this._autonomousDatabaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousDatabaseIdInput() {
    return this._autonomousDatabaseId;
  }

  // autonomous_maintenance_schedule_type - computed: true, optional: true, required: false
  private _autonomousMaintenanceScheduleType?: string; 
  public get autonomousMaintenanceScheduleType() {
    return this.getStringAttribute('autonomous_maintenance_schedule_type');
  }
  public set autonomousMaintenanceScheduleType(value: string) {
    this._autonomousMaintenanceScheduleType = value;
  }
  public resetAutonomousMaintenanceScheduleType() {
    this._autonomousMaintenanceScheduleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousMaintenanceScheduleTypeInput() {
    return this._autonomousMaintenanceScheduleType;
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // available_upgrade_versions - computed: true, optional: false, required: false
  public get availableUpgradeVersions() {
    return this.getListAttribute('available_upgrade_versions');
  }

  // backup_config - computed: true, optional: false, required: false
  private _backupConfig = new DatabaseAutonomousDatabaseBackupConfigList(this, "backup_config", false);
  public get backupConfig() {
    return this._backupConfig;
  }

  // backup_retention_period_in_days - computed: true, optional: true, required: false
  private _backupRetentionPeriodInDays?: number; 
  public get backupRetentionPeriodInDays() {
    return this.getNumberAttribute('backup_retention_period_in_days');
  }
  public set backupRetentionPeriodInDays(value: number) {
    this._backupRetentionPeriodInDays = value;
  }
  public resetBackupRetentionPeriodInDays() {
    this._backupRetentionPeriodInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionPeriodInDaysInput() {
    return this._backupRetentionPeriodInDays;
  }

  // byol_compute_count_limit - computed: true, optional: true, required: false
  private _byolComputeCountLimit?: number; 
  public get byolComputeCountLimit() {
    return this.getNumberAttribute('byol_compute_count_limit');
  }
  public set byolComputeCountLimit(value: number) {
    this._byolComputeCountLimit = value;
  }
  public resetByolComputeCountLimit() {
    this._byolComputeCountLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byolComputeCountLimitInput() {
    return this._byolComputeCountLimit;
  }

  // character_set - computed: true, optional: true, required: false
  private _characterSet?: string; 
  public get characterSet() {
    return this.getStringAttribute('character_set');
  }
  public set characterSet(value: string) {
    this._characterSet = value;
  }
  public resetCharacterSet() {
    this._characterSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get characterSetInput() {
    return this._characterSet;
  }

  // clone_table_space_list - computed: true, optional: true, required: false
  private _cloneTableSpaceList?: number[]; 
  public get cloneTableSpaceList() {
    return this.getNumberListAttribute('clone_table_space_list');
  }
  public set cloneTableSpaceList(value: number[]) {
    this._cloneTableSpaceList = value;
  }
  public resetCloneTableSpaceList() {
    this._cloneTableSpaceList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneTableSpaceListInput() {
    return this._cloneTableSpaceList;
  }

  // clone_type - computed: true, optional: true, required: false
  private _cloneType?: string; 
  public get cloneType() {
    return this.getStringAttribute('clone_type');
  }
  public set cloneType(value: string) {
    this._cloneType = value;
  }
  public resetCloneType() {
    this._cloneType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneTypeInput() {
    return this._cloneType;
  }

  // cluster_placement_group_id - computed: true, optional: false, required: false
  public get clusterPlacementGroupId() {
    return this.getStringAttribute('cluster_placement_group_id');
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // compute_count - computed: true, optional: true, required: false
  private _computeCount?: number; 
  public get computeCount() {
    return this.getNumberAttribute('compute_count');
  }
  public set computeCount(value: number) {
    this._computeCount = value;
  }
  public resetComputeCount() {
    this._computeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeCountInput() {
    return this._computeCount;
  }

  // compute_model - computed: true, optional: true, required: false
  private _computeModel?: string; 
  public get computeModel() {
    return this.getStringAttribute('compute_model');
  }
  public set computeModel(value: string) {
    this._computeModel = value;
  }
  public resetComputeModel() {
    this._computeModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeModelInput() {
    return this._computeModel;
  }

  // connection_strings - computed: true, optional: false, required: false
  private _connectionStrings = new DatabaseAutonomousDatabaseConnectionStringsList(this, "connection_strings", false);
  public get connectionStrings() {
    return this._connectionStrings;
  }

  // connection_urls - computed: true, optional: false, required: false
  private _connectionUrls = new DatabaseAutonomousDatabaseConnectionUrlsList(this, "connection_urls", false);
  public get connectionUrls() {
    return this._connectionUrls;
  }

  // cpu_core_count - computed: true, optional: true, required: false
  private _cpuCoreCount?: number; 
  public get cpuCoreCount() {
    return this.getNumberAttribute('cpu_core_count');
  }
  public set cpuCoreCount(value: number) {
    this._cpuCoreCount = value;
  }
  public resetCpuCoreCount() {
    this._cpuCoreCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCoreCountInput() {
    return this._cpuCoreCount;
  }

  // data_safe_status - computed: true, optional: true, required: false
  private _dataSafeStatus?: string; 
  public get dataSafeStatus() {
    return this.getStringAttribute('data_safe_status');
  }
  public set dataSafeStatus(value: string) {
    this._dataSafeStatus = value;
  }
  public resetDataSafeStatus() {
    this._dataSafeStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSafeStatusInput() {
    return this._dataSafeStatus;
  }

  // data_storage_size_in_gb - computed: true, optional: true, required: false
  private _dataStorageSizeInGb?: number; 
  public get dataStorageSizeInGb() {
    return this.getNumberAttribute('data_storage_size_in_gb');
  }
  public set dataStorageSizeInGb(value: number) {
    this._dataStorageSizeInGb = value;
  }
  public resetDataStorageSizeInGb() {
    this._dataStorageSizeInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStorageSizeInGbInput() {
    return this._dataStorageSizeInGb;
  }

  // data_storage_size_in_tbs - computed: true, optional: true, required: false
  private _dataStorageSizeInTbs?: number; 
  public get dataStorageSizeInTbs() {
    return this.getNumberAttribute('data_storage_size_in_tbs');
  }
  public set dataStorageSizeInTbs(value: number) {
    this._dataStorageSizeInTbs = value;
  }
  public resetDataStorageSizeInTbs() {
    this._dataStorageSizeInTbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStorageSizeInTbsInput() {
    return this._dataStorageSizeInTbs;
  }

  // database_edition - computed: true, optional: true, required: false
  private _databaseEdition?: string; 
  public get databaseEdition() {
    return this.getStringAttribute('database_edition');
  }
  public set databaseEdition(value: string) {
    this._databaseEdition = value;
  }
  public resetDatabaseEdition() {
    this._databaseEdition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseEditionInput() {
    return this._databaseEdition;
  }

  // database_management_status - computed: true, optional: true, required: false
  private _databaseManagementStatus?: string; 
  public get databaseManagementStatus() {
    return this.getStringAttribute('database_management_status');
  }
  public set databaseManagementStatus(value: string) {
    this._databaseManagementStatus = value;
  }
  public resetDatabaseManagementStatus() {
    this._databaseManagementStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseManagementStatusInput() {
    return this._databaseManagementStatus;
  }

  // dataguard_region_type - computed: true, optional: false, required: false
  public get dataguardRegionType() {
    return this.getStringAttribute('dataguard_region_type');
  }

  // db_name - computed: false, optional: false, required: true
  private _dbName?: string; 
  public get dbName() {
    return this.getStringAttribute('db_name');
  }
  public set dbName(value: string) {
    this._dbName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNameInput() {
    return this._dbName;
  }

  // db_version - computed: true, optional: true, required: false
  private _dbVersion?: string; 
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }
  public set dbVersion(value: string) {
    this._dbVersion = value;
  }
  public resetDbVersion() {
    this._dbVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbVersionInput() {
    return this._dbVersion;
  }

  // db_workload - computed: true, optional: true, required: false
  private _dbWorkload?: string; 
  public get dbWorkload() {
    return this.getStringAttribute('db_workload');
  }
  public set dbWorkload(value: string) {
    this._dbWorkload = value;
  }
  public resetDbWorkload() {
    this._dbWorkload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbWorkloadInput() {
    return this._dbWorkload;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // disaster_recovery_region_type - computed: true, optional: false, required: false
  public get disasterRecoveryRegionType() {
    return this.getStringAttribute('disaster_recovery_region_type');
  }

  // disaster_recovery_type - computed: true, optional: true, required: false
  private _disasterRecoveryType?: string; 
  public get disasterRecoveryType() {
    return this.getStringAttribute('disaster_recovery_type');
  }
  public set disasterRecoveryType(value: string) {
    this._disasterRecoveryType = value;
  }
  public resetDisasterRecoveryType() {
    this._disasterRecoveryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disasterRecoveryTypeInput() {
    return this._disasterRecoveryType;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // enable_delete_scheduled_operations - computed: false, optional: true, required: false
  private _enableDeleteScheduledOperations?: boolean | cdktf.IResolvable; 
  public get enableDeleteScheduledOperations() {
    return this.getBooleanAttribute('enable_delete_scheduled_operations');
  }
  public set enableDeleteScheduledOperations(value: boolean | cdktf.IResolvable) {
    this._enableDeleteScheduledOperations = value;
  }
  public resetEnableDeleteScheduledOperations() {
    this._enableDeleteScheduledOperations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDeleteScheduledOperationsInput() {
    return this._enableDeleteScheduledOperations;
  }

  // encryption_key_history_entry - computed: true, optional: false, required: false
  private _encryptionKeyHistoryEntry = new DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList(this, "encryption_key_history_entry", false);
  public get encryptionKeyHistoryEntry() {
    return this._encryptionKeyHistoryEntry;
  }

  // failed_data_recovery_in_seconds - computed: true, optional: false, required: false
  public get failedDataRecoveryInSeconds() {
    return this.getNumberAttribute('failed_data_recovery_in_seconds');
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // in_memory_area_in_gbs - computed: true, optional: false, required: false
  public get inMemoryAreaInGbs() {
    return this.getNumberAttribute('in_memory_area_in_gbs');
  }

  // in_memory_percentage - computed: true, optional: true, required: false
  private _inMemoryPercentage?: number; 
  public get inMemoryPercentage() {
    return this.getNumberAttribute('in_memory_percentage');
  }
  public set inMemoryPercentage(value: number) {
    this._inMemoryPercentage = value;
  }
  public resetInMemoryPercentage() {
    this._inMemoryPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inMemoryPercentageInput() {
    return this._inMemoryPercentage;
  }

  // infrastructure_type - computed: true, optional: false, required: false
  public get infrastructureType() {
    return this.getStringAttribute('infrastructure_type');
  }

  // is_access_control_enabled - computed: true, optional: true, required: false
  private _isAccessControlEnabled?: boolean | cdktf.IResolvable; 
  public get isAccessControlEnabled() {
    return this.getBooleanAttribute('is_access_control_enabled');
  }
  public set isAccessControlEnabled(value: boolean | cdktf.IResolvable) {
    this._isAccessControlEnabled = value;
  }
  public resetIsAccessControlEnabled() {
    this._isAccessControlEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAccessControlEnabledInput() {
    return this._isAccessControlEnabled;
  }

  // is_auto_scaling_enabled - computed: true, optional: true, required: false
  private _isAutoScalingEnabled?: boolean | cdktf.IResolvable; 
  public get isAutoScalingEnabled() {
    return this.getBooleanAttribute('is_auto_scaling_enabled');
  }
  public set isAutoScalingEnabled(value: boolean | cdktf.IResolvable) {
    this._isAutoScalingEnabled = value;
  }
  public resetIsAutoScalingEnabled() {
    this._isAutoScalingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoScalingEnabledInput() {
    return this._isAutoScalingEnabled;
  }

  // is_auto_scaling_for_storage_enabled - computed: true, optional: true, required: false
  private _isAutoScalingForStorageEnabled?: boolean | cdktf.IResolvable; 
  public get isAutoScalingForStorageEnabled() {
    return this.getBooleanAttribute('is_auto_scaling_for_storage_enabled');
  }
  public set isAutoScalingForStorageEnabled(value: boolean | cdktf.IResolvable) {
    this._isAutoScalingForStorageEnabled = value;
  }
  public resetIsAutoScalingForStorageEnabled() {
    this._isAutoScalingForStorageEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoScalingForStorageEnabledInput() {
    return this._isAutoScalingForStorageEnabled;
  }

  // is_backup_retention_locked - computed: true, optional: true, required: false
  private _isBackupRetentionLocked?: boolean | cdktf.IResolvable; 
  public get isBackupRetentionLocked() {
    return this.getBooleanAttribute('is_backup_retention_locked');
  }
  public set isBackupRetentionLocked(value: boolean | cdktf.IResolvable) {
    this._isBackupRetentionLocked = value;
  }
  public resetIsBackupRetentionLocked() {
    this._isBackupRetentionLocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBackupRetentionLockedInput() {
    return this._isBackupRetentionLocked;
  }

  // is_data_guard_enabled - computed: true, optional: true, required: false
  private _isDataGuardEnabled?: boolean | cdktf.IResolvable; 
  public get isDataGuardEnabled() {
    return this.getBooleanAttribute('is_data_guard_enabled');
  }
  public set isDataGuardEnabled(value: boolean | cdktf.IResolvable) {
    this._isDataGuardEnabled = value;
  }
  public resetIsDataGuardEnabled() {
    this._isDataGuardEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDataGuardEnabledInput() {
    return this._isDataGuardEnabled;
  }

  // is_dedicated - computed: true, optional: true, required: false
  private _isDedicated?: boolean | cdktf.IResolvable; 
  public get isDedicated() {
    return this.getBooleanAttribute('is_dedicated');
  }
  public set isDedicated(value: boolean | cdktf.IResolvable) {
    this._isDedicated = value;
  }
  public resetIsDedicated() {
    this._isDedicated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDedicatedInput() {
    return this._isDedicated;
  }

  // is_dev_tier - computed: true, optional: true, required: false
  private _isDevTier?: boolean | cdktf.IResolvable; 
  public get isDevTier() {
    return this.getBooleanAttribute('is_dev_tier');
  }
  public set isDevTier(value: boolean | cdktf.IResolvable) {
    this._isDevTier = value;
  }
  public resetIsDevTier() {
    this._isDevTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDevTierInput() {
    return this._isDevTier;
  }

  // is_disable_db_version_upgrade_schedule - computed: true, optional: true, required: false
  private _isDisableDbVersionUpgradeSchedule?: boolean | cdktf.IResolvable; 
  public get isDisableDbVersionUpgradeSchedule() {
    return this.getBooleanAttribute('is_disable_db_version_upgrade_schedule');
  }
  public set isDisableDbVersionUpgradeSchedule(value: boolean | cdktf.IResolvable) {
    this._isDisableDbVersionUpgradeSchedule = value;
  }
  public resetIsDisableDbVersionUpgradeSchedule() {
    this._isDisableDbVersionUpgradeSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDisableDbVersionUpgradeScheduleInput() {
    return this._isDisableDbVersionUpgradeSchedule;
  }

  // is_disconnect_peer - computed: false, optional: true, required: false
  private _isDisconnectPeer?: boolean | cdktf.IResolvable; 
  public get isDisconnectPeer() {
    return this.getBooleanAttribute('is_disconnect_peer');
  }
  public set isDisconnectPeer(value: boolean | cdktf.IResolvable) {
    this._isDisconnectPeer = value;
  }
  public resetIsDisconnectPeer() {
    this._isDisconnectPeer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDisconnectPeerInput() {
    return this._isDisconnectPeer;
  }

  // is_free_tier - computed: true, optional: true, required: false
  private _isFreeTier?: boolean | cdktf.IResolvable; 
  public get isFreeTier() {
    return this.getBooleanAttribute('is_free_tier');
  }
  public set isFreeTier(value: boolean | cdktf.IResolvable) {
    this._isFreeTier = value;
  }
  public resetIsFreeTier() {
    this._isFreeTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFreeTierInput() {
    return this._isFreeTier;
  }

  // is_local_data_guard_enabled - computed: true, optional: true, required: false
  private _isLocalDataGuardEnabled?: boolean | cdktf.IResolvable; 
  public get isLocalDataGuardEnabled() {
    return this.getBooleanAttribute('is_local_data_guard_enabled');
  }
  public set isLocalDataGuardEnabled(value: boolean | cdktf.IResolvable) {
    this._isLocalDataGuardEnabled = value;
  }
  public resetIsLocalDataGuardEnabled() {
    this._isLocalDataGuardEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLocalDataGuardEnabledInput() {
    return this._isLocalDataGuardEnabled;
  }

  // is_mtls_connection_required - computed: true, optional: true, required: false
  private _isMtlsConnectionRequired?: boolean | cdktf.IResolvable; 
  public get isMtlsConnectionRequired() {
    return this.getBooleanAttribute('is_mtls_connection_required');
  }
  public set isMtlsConnectionRequired(value: boolean | cdktf.IResolvable) {
    this._isMtlsConnectionRequired = value;
  }
  public resetIsMtlsConnectionRequired() {
    this._isMtlsConnectionRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMtlsConnectionRequiredInput() {
    return this._isMtlsConnectionRequired;
  }

  // is_preview - computed: true, optional: false, required: false
  public get isPreview() {
    return this.getBooleanAttribute('is_preview');
  }

  // is_preview_version_with_service_terms_accepted - computed: true, optional: true, required: false
  private _isPreviewVersionWithServiceTermsAccepted?: boolean | cdktf.IResolvable; 
  public get isPreviewVersionWithServiceTermsAccepted() {
    return this.getBooleanAttribute('is_preview_version_with_service_terms_accepted');
  }
  public set isPreviewVersionWithServiceTermsAccepted(value: boolean | cdktf.IResolvable) {
    this._isPreviewVersionWithServiceTermsAccepted = value;
  }
  public resetIsPreviewVersionWithServiceTermsAccepted() {
    this._isPreviewVersionWithServiceTermsAccepted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPreviewVersionWithServiceTermsAcceptedInput() {
    return this._isPreviewVersionWithServiceTermsAccepted;
  }

  // is_reconnect_clone_enabled - computed: true, optional: false, required: false
  public get isReconnectCloneEnabled() {
    return this.getBooleanAttribute('is_reconnect_clone_enabled');
  }

  // is_refreshable_clone - computed: true, optional: true, required: false
  private _isRefreshableClone?: boolean | cdktf.IResolvable; 
  public get isRefreshableClone() {
    return this.getBooleanAttribute('is_refreshable_clone');
  }
  public set isRefreshableClone(value: boolean | cdktf.IResolvable) {
    this._isRefreshableClone = value;
  }
  public resetIsRefreshableClone() {
    this._isRefreshableClone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRefreshableCloneInput() {
    return this._isRefreshableClone;
  }

  // is_remote_data_guard_enabled - computed: true, optional: false, required: false
  public get isRemoteDataGuardEnabled() {
    return this.getBooleanAttribute('is_remote_data_guard_enabled');
  }

  // is_replicate_automatic_backups - computed: true, optional: true, required: false
  private _isReplicateAutomaticBackups?: boolean | cdktf.IResolvable; 
  public get isReplicateAutomaticBackups() {
    return this.getBooleanAttribute('is_replicate_automatic_backups');
  }
  public set isReplicateAutomaticBackups(value: boolean | cdktf.IResolvable) {
    this._isReplicateAutomaticBackups = value;
  }
  public resetIsReplicateAutomaticBackups() {
    this._isReplicateAutomaticBackups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isReplicateAutomaticBackupsInput() {
    return this._isReplicateAutomaticBackups;
  }

  // is_schedule_db_version_upgrade_to_earliest - computed: true, optional: true, required: false
  private _isScheduleDbVersionUpgradeToEarliest?: boolean | cdktf.IResolvable; 
  public get isScheduleDbVersionUpgradeToEarliest() {
    return this.getBooleanAttribute('is_schedule_db_version_upgrade_to_earliest');
  }
  public set isScheduleDbVersionUpgradeToEarliest(value: boolean | cdktf.IResolvable) {
    this._isScheduleDbVersionUpgradeToEarliest = value;
  }
  public resetIsScheduleDbVersionUpgradeToEarliest() {
    this._isScheduleDbVersionUpgradeToEarliest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isScheduleDbVersionUpgradeToEarliestInput() {
    return this._isScheduleDbVersionUpgradeToEarliest;
  }

  // is_shrink_only - computed: false, optional: true, required: false
  private _isShrinkOnly?: boolean | cdktf.IResolvable; 
  public get isShrinkOnly() {
    return this.getBooleanAttribute('is_shrink_only');
  }
  public set isShrinkOnly(value: boolean | cdktf.IResolvable) {
    this._isShrinkOnly = value;
  }
  public resetIsShrinkOnly() {
    this._isShrinkOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isShrinkOnlyInput() {
    return this._isShrinkOnly;
  }

  // key_history_entry - computed: true, optional: false, required: false
  private _keyHistoryEntry = new DatabaseAutonomousDatabaseKeyHistoryEntryList(this, "key_history_entry", false);
  public get keyHistoryEntry() {
    return this._keyHistoryEntry;
  }

  // key_store_id - computed: true, optional: false, required: false
  public get keyStoreId() {
    return this.getStringAttribute('key_store_id');
  }

  // key_store_wallet_name - computed: true, optional: false, required: false
  public get keyStoreWalletName() {
    return this.getStringAttribute('key_store_wallet_name');
  }

  // key_version_id - computed: false, optional: true, required: false
  private _keyVersionId?: string; 
  public get keyVersionId() {
    return this.getStringAttribute('key_version_id');
  }
  public set keyVersionId(value: string) {
    this._keyVersionId = value;
  }
  public resetKeyVersionId() {
    this._keyVersionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVersionIdInput() {
    return this._keyVersionId;
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // kms_key_lifecycle_details - computed: true, optional: false, required: false
  public get kmsKeyLifecycleDetails() {
    return this.getStringAttribute('kms_key_lifecycle_details');
  }

  // kms_key_version_id - computed: true, optional: false, required: false
  public get kmsKeyVersionId() {
    return this.getStringAttribute('kms_key_version_id');
  }

  // license_model - computed: true, optional: true, required: false
  private _licenseModel?: string; 
  public get licenseModel() {
    return this.getStringAttribute('license_model');
  }
  public set licenseModel(value: string) {
    this._licenseModel = value;
  }
  public resetLicenseModel() {
    this._licenseModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseModelInput() {
    return this._licenseModel;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // local_adg_auto_failover_max_data_loss_limit - computed: true, optional: true, required: false
  private _localAdgAutoFailoverMaxDataLossLimit?: number; 
  public get localAdgAutoFailoverMaxDataLossLimit() {
    return this.getNumberAttribute('local_adg_auto_failover_max_data_loss_limit');
  }
  public set localAdgAutoFailoverMaxDataLossLimit(value: number) {
    this._localAdgAutoFailoverMaxDataLossLimit = value;
  }
  public resetLocalAdgAutoFailoverMaxDataLossLimit() {
    this._localAdgAutoFailoverMaxDataLossLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAdgAutoFailoverMaxDataLossLimitInput() {
    return this._localAdgAutoFailoverMaxDataLossLimit;
  }

  // local_disaster_recovery_type - computed: true, optional: false, required: false
  public get localDisasterRecoveryType() {
    return this.getStringAttribute('local_disaster_recovery_type');
  }

  // local_standby_db - computed: true, optional: false, required: false
  private _localStandbyDb = new DatabaseAutonomousDatabaseLocalStandbyDbList(this, "local_standby_db", false);
  public get localStandbyDb() {
    return this._localStandbyDb;
  }

  // maintenance_target_component - computed: true, optional: false, required: false
  public get maintenanceTargetComponent() {
    return this.getStringAttribute('maintenance_target_component');
  }

  // max_cpu_core_count - computed: true, optional: true, required: false
  private _maxCpuCoreCount?: number; 
  public get maxCpuCoreCount() {
    return this.getNumberAttribute('max_cpu_core_count');
  }
  public set maxCpuCoreCount(value: number) {
    this._maxCpuCoreCount = value;
  }
  public resetMaxCpuCoreCount() {
    this._maxCpuCoreCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCpuCoreCountInput() {
    return this._maxCpuCoreCount;
  }

  // memory_per_compute_unit_in_gbs - computed: true, optional: false, required: false
  public get memoryPerComputeUnitInGbs() {
    return this.getNumberAttribute('memory_per_compute_unit_in_gbs');
  }

  // memory_per_oracle_compute_unit_in_gbs - computed: true, optional: false, required: false
  public get memoryPerOracleComputeUnitInGbs() {
    return this.getNumberAttribute('memory_per_oracle_compute_unit_in_gbs');
  }

  // ncharacter_set - computed: true, optional: true, required: false
  private _ncharacterSet?: string; 
  public get ncharacterSet() {
    return this.getStringAttribute('ncharacter_set');
  }
  public set ncharacterSet(value: string) {
    this._ncharacterSet = value;
  }
  public resetNcharacterSet() {
    this._ncharacterSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ncharacterSetInput() {
    return this._ncharacterSet;
  }

  // net_services_architecture - computed: true, optional: false, required: false
  public get netServicesArchitecture() {
    return this.getStringAttribute('net_services_architecture');
  }

  // next_long_term_backup_time_stamp - computed: true, optional: false, required: false
  public get nextLongTermBackupTimeStamp() {
    return this.getStringAttribute('next_long_term_backup_time_stamp');
  }

  // nsg_ids - computed: true, optional: true, required: false
  private _nsgIds?: string[]; 
  public get nsgIds() {
    return cdktf.Fn.tolist(this.getListAttribute('nsg_ids'));
  }
  public set nsgIds(value: string[]) {
    this._nsgIds = value;
  }
  public resetNsgIds() {
    this._nsgIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsgIdsInput() {
    return this._nsgIds;
  }

  // ocpu_count - computed: true, optional: true, required: false
  private _ocpuCount?: number; 
  public get ocpuCount() {
    return this.getNumberAttribute('ocpu_count');
  }
  public set ocpuCount(value: number) {
    this._ocpuCount = value;
  }
  public resetOcpuCount() {
    this._ocpuCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpuCountInput() {
    return this._ocpuCount;
  }

  // open_mode - computed: true, optional: true, required: false
  private _openMode?: string; 
  public get openMode() {
    return this.getStringAttribute('open_mode');
  }
  public set openMode(value: string) {
    this._openMode = value;
  }
  public resetOpenMode() {
    this._openMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openModeInput() {
    return this._openMode;
  }

  // operations_insights_status - computed: true, optional: true, required: false
  private _operationsInsightsStatus?: string; 
  public get operationsInsightsStatus() {
    return this.getStringAttribute('operations_insights_status');
  }
  public set operationsInsightsStatus(value: string) {
    this._operationsInsightsStatus = value;
  }
  public resetOperationsInsightsStatus() {
    this._operationsInsightsStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInsightsStatusInput() {
    return this._operationsInsightsStatus;
  }

  // peer_db_id - computed: true, optional: true, required: false
  private _peerDbId?: string; 
  public get peerDbId() {
    return this.getStringAttribute('peer_db_id');
  }
  public set peerDbId(value: string) {
    this._peerDbId = value;
  }
  public resetPeerDbId() {
    this._peerDbId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerDbIdInput() {
    return this._peerDbId;
  }

  // peer_db_ids - computed: true, optional: false, required: false
  public get peerDbIds() {
    return this.getListAttribute('peer_db_ids');
  }

  // permission_level - computed: true, optional: true, required: false
  private _permissionLevel?: string; 
  public get permissionLevel() {
    return this.getStringAttribute('permission_level');
  }
  public set permissionLevel(value: string) {
    this._permissionLevel = value;
  }
  public resetPermissionLevel() {
    this._permissionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionLevelInput() {
    return this._permissionLevel;
  }

  // private_endpoint - computed: true, optional: false, required: false
  public get privateEndpoint() {
    return this.getStringAttribute('private_endpoint');
  }

  // private_endpoint_ip - computed: true, optional: true, required: false
  private _privateEndpointIp?: string; 
  public get privateEndpointIp() {
    return this.getStringAttribute('private_endpoint_ip');
  }
  public set privateEndpointIp(value: string) {
    this._privateEndpointIp = value;
  }
  public resetPrivateEndpointIp() {
    this._privateEndpointIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointIpInput() {
    return this._privateEndpointIp;
  }

  // private_endpoint_label - computed: true, optional: true, required: false
  private _privateEndpointLabel?: string; 
  public get privateEndpointLabel() {
    return this.getStringAttribute('private_endpoint_label');
  }
  public set privateEndpointLabel(value: string) {
    this._privateEndpointLabel = value;
  }
  public resetPrivateEndpointLabel() {
    this._privateEndpointLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointLabelInput() {
    return this._privateEndpointLabel;
  }

  // provisionable_cpus - computed: true, optional: false, required: false
  public get provisionableCpus() {
    return this.getNumberListAttribute('provisionable_cpus');
  }

  // public_connection_urls - computed: true, optional: false, required: false
  private _publicConnectionUrls = new DatabaseAutonomousDatabasePublicConnectionUrlsList(this, "public_connection_urls", false);
  public get publicConnectionUrls() {
    return this._publicConnectionUrls;
  }

  // public_endpoint - computed: true, optional: false, required: false
  public get publicEndpoint() {
    return this.getStringAttribute('public_endpoint');
  }

  // refreshable_mode - computed: true, optional: true, required: false
  private _refreshableMode?: string; 
  public get refreshableMode() {
    return this.getStringAttribute('refreshable_mode');
  }
  public set refreshableMode(value: string) {
    this._refreshableMode = value;
  }
  public resetRefreshableMode() {
    this._refreshableMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshableModeInput() {
    return this._refreshableMode;
  }

  // refreshable_status - computed: true, optional: false, required: false
  public get refreshableStatus() {
    return this.getStringAttribute('refreshable_status');
  }

  // remote_disaster_recovery_configuration - computed: true, optional: false, required: false
  private _remoteDisasterRecoveryConfiguration = new DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList(this, "remote_disaster_recovery_configuration", false);
  public get remoteDisasterRecoveryConfiguration() {
    return this._remoteDisasterRecoveryConfiguration;
  }

  // remote_disaster_recovery_type - computed: true, optional: true, required: false
  private _remoteDisasterRecoveryType?: string; 
  public get remoteDisasterRecoveryType() {
    return this.getStringAttribute('remote_disaster_recovery_type');
  }
  public set remoteDisasterRecoveryType(value: string) {
    this._remoteDisasterRecoveryType = value;
  }
  public resetRemoteDisasterRecoveryType() {
    this._remoteDisasterRecoveryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteDisasterRecoveryTypeInput() {
    return this._remoteDisasterRecoveryType;
  }

  // resource_pool_leader_id - computed: true, optional: true, required: false
  private _resourcePoolLeaderId?: string; 
  public get resourcePoolLeaderId() {
    return this.getStringAttribute('resource_pool_leader_id');
  }
  public set resourcePoolLeaderId(value: string) {
    this._resourcePoolLeaderId = value;
  }
  public resetResourcePoolLeaderId() {
    this._resourcePoolLeaderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePoolLeaderIdInput() {
    return this._resourcePoolLeaderId;
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // rotate_key_trigger - computed: false, optional: true, required: false
  private _rotateKeyTrigger?: boolean | cdktf.IResolvable; 
  public get rotateKeyTrigger() {
    return this.getBooleanAttribute('rotate_key_trigger');
  }
  public set rotateKeyTrigger(value: boolean | cdktf.IResolvable) {
    this._rotateKeyTrigger = value;
  }
  public resetRotateKeyTrigger() {
    this._rotateKeyTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotateKeyTriggerInput() {
    return this._rotateKeyTrigger;
  }

  // secret_id - computed: true, optional: true, required: false
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  public resetSecretId() {
    this._secretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // secret_version_number - computed: true, optional: true, required: false
  private _secretVersionNumber?: number; 
  public get secretVersionNumber() {
    return this.getNumberAttribute('secret_version_number');
  }
  public set secretVersionNumber(value: number) {
    this._secretVersionNumber = value;
  }
  public resetSecretVersionNumber() {
    this._secretVersionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionNumberInput() {
    return this._secretVersionNumber;
  }

  // security_attributes - computed: true, optional: true, required: false
  private _securityAttributes?: { [key: string]: string }; 
  public get securityAttributes() {
    return this.getStringMapAttribute('security_attributes');
  }
  public set securityAttributes(value: { [key: string]: string }) {
    this._securityAttributes = value;
  }
  public resetSecurityAttributes() {
    this._securityAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityAttributesInput() {
    return this._securityAttributes;
  }

  // service_console_url - computed: true, optional: false, required: false
  public get serviceConsoleUrl() {
    return this.getStringAttribute('service_console_url');
  }

  // shrink_adb_trigger - computed: true, optional: true, required: false
  private _shrinkAdbTrigger?: number; 
  public get shrinkAdbTrigger() {
    return this.getNumberAttribute('shrink_adb_trigger');
  }
  public set shrinkAdbTrigger(value: number) {
    this._shrinkAdbTrigger = value;
  }
  public resetShrinkAdbTrigger() {
    this._shrinkAdbTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shrinkAdbTriggerInput() {
    return this._shrinkAdbTrigger;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_id - computed: true, optional: true, required: false
  private _sourceId?: string; 
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }
  public set sourceId(value: string) {
    this._sourceId = value;
  }
  public resetSourceId() {
    this._sourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdInput() {
    return this._sourceId;
  }

  // standby_db - computed: true, optional: false, required: false
  private _standbyDb = new DatabaseAutonomousDatabaseStandbyDbList(this, "standby_db", false);
  public get standbyDb() {
    return this._standbyDb;
  }

  // standby_whitelisted_ips - computed: true, optional: true, required: false
  private _standbyWhitelistedIps?: string[]; 
  public get standbyWhitelistedIps() {
    return this.getListAttribute('standby_whitelisted_ips');
  }
  public set standbyWhitelistedIps(value: string[]) {
    this._standbyWhitelistedIps = value;
  }
  public resetStandbyWhitelistedIps() {
    this._standbyWhitelistedIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyWhitelistedIpsInput() {
    return this._standbyWhitelistedIps;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // subscription_id - computed: true, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // supported_regions_to_clone_to - computed: true, optional: false, required: false
  public get supportedRegionsToCloneTo() {
    return this.getListAttribute('supported_regions_to_clone_to');
  }

  // switchover_to - computed: false, optional: true, required: false
  private _switchoverTo?: string; 
  public get switchoverTo() {
    return this.getStringAttribute('switchover_to');
  }
  public set switchoverTo(value: string) {
    this._switchoverTo = value;
  }
  public resetSwitchoverTo() {
    this._switchoverTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchoverToInput() {
    return this._switchoverTo;
  }

  // switchover_to_remote_peer_id - computed: false, optional: true, required: false
  private _switchoverToRemotePeerId?: string; 
  public get switchoverToRemotePeerId() {
    return this.getStringAttribute('switchover_to_remote_peer_id');
  }
  public set switchoverToRemotePeerId(value: string) {
    this._switchoverToRemotePeerId = value;
  }
  public resetSwitchoverToRemotePeerId() {
    this._switchoverToRemotePeerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchoverToRemotePeerIdInput() {
    return this._switchoverToRemotePeerId;
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_data_guard_role_changed - computed: true, optional: false, required: false
  public get timeDataGuardRoleChanged() {
    return this.getStringAttribute('time_data_guard_role_changed');
  }

  // time_deletion_of_free_autonomous_database - computed: true, optional: false, required: false
  public get timeDeletionOfFreeAutonomousDatabase() {
    return this.getStringAttribute('time_deletion_of_free_autonomous_database');
  }

  // time_disaster_recovery_role_changed - computed: true, optional: false, required: false
  public get timeDisasterRecoveryRoleChanged() {
    return this.getStringAttribute('time_disaster_recovery_role_changed');
  }

  // time_earliest_available_db_version_upgrade - computed: true, optional: false, required: false
  public get timeEarliestAvailableDbVersionUpgrade() {
    return this.getStringAttribute('time_earliest_available_db_version_upgrade');
  }

  // time_latest_available_db_version_upgrade - computed: true, optional: false, required: false
  public get timeLatestAvailableDbVersionUpgrade() {
    return this.getStringAttribute('time_latest_available_db_version_upgrade');
  }

  // time_local_data_guard_enabled - computed: true, optional: false, required: false
  public get timeLocalDataGuardEnabled() {
    return this.getStringAttribute('time_local_data_guard_enabled');
  }

  // time_maintenance_begin - computed: true, optional: false, required: false
  public get timeMaintenanceBegin() {
    return this.getStringAttribute('time_maintenance_begin');
  }

  // time_maintenance_end - computed: true, optional: false, required: false
  public get timeMaintenanceEnd() {
    return this.getStringAttribute('time_maintenance_end');
  }

  // time_of_auto_refresh_start - computed: true, optional: true, required: false
  private _timeOfAutoRefreshStart?: string; 
  public get timeOfAutoRefreshStart() {
    return this.getStringAttribute('time_of_auto_refresh_start');
  }
  public set timeOfAutoRefreshStart(value: string) {
    this._timeOfAutoRefreshStart = value;
  }
  public resetTimeOfAutoRefreshStart() {
    this._timeOfAutoRefreshStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOfAutoRefreshStartInput() {
    return this._timeOfAutoRefreshStart;
  }

  // time_of_joining_resource_pool - computed: true, optional: false, required: false
  public get timeOfJoiningResourcePool() {
    return this.getStringAttribute('time_of_joining_resource_pool');
  }

  // time_of_last_failover - computed: true, optional: false, required: false
  public get timeOfLastFailover() {
    return this.getStringAttribute('time_of_last_failover');
  }

  // time_of_last_refresh - computed: true, optional: false, required: false
  public get timeOfLastRefresh() {
    return this.getStringAttribute('time_of_last_refresh');
  }

  // time_of_last_refresh_point - computed: true, optional: false, required: false
  public get timeOfLastRefreshPoint() {
    return this.getStringAttribute('time_of_last_refresh_point');
  }

  // time_of_last_switchover - computed: true, optional: false, required: false
  public get timeOfLastSwitchover() {
    return this.getStringAttribute('time_of_last_switchover');
  }

  // time_of_next_refresh - computed: true, optional: false, required: false
  public get timeOfNextRefresh() {
    return this.getStringAttribute('time_of_next_refresh');
  }

  // time_reclamation_of_free_autonomous_database - computed: true, optional: false, required: false
  public get timeReclamationOfFreeAutonomousDatabase() {
    return this.getStringAttribute('time_reclamation_of_free_autonomous_database');
  }

  // time_scheduled_db_version_upgrade - computed: true, optional: true, required: false
  private _timeScheduledDbVersionUpgrade?: string; 
  public get timeScheduledDbVersionUpgrade() {
    return this.getStringAttribute('time_scheduled_db_version_upgrade');
  }
  public set timeScheduledDbVersionUpgrade(value: string) {
    this._timeScheduledDbVersionUpgrade = value;
  }
  public resetTimeScheduledDbVersionUpgrade() {
    this._timeScheduledDbVersionUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeScheduledDbVersionUpgradeInput() {
    return this._timeScheduledDbVersionUpgrade;
  }

  // time_undeleted - computed: true, optional: false, required: false
  public get timeUndeleted() {
    return this.getStringAttribute('time_undeleted');
  }

  // time_until_reconnect_clone_enabled - computed: true, optional: false, required: false
  public get timeUntilReconnectCloneEnabled() {
    return this.getStringAttribute('time_until_reconnect_clone_enabled');
  }

  // timestamp - computed: true, optional: true, required: false
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

  // total_backup_storage_size_in_gbs - computed: true, optional: false, required: false
  public get totalBackupStorageSizeInGbs() {
    return this.getNumberAttribute('total_backup_storage_size_in_gbs');
  }

  // use_latest_available_backup_time_stamp - computed: true, optional: true, required: false
  private _useLatestAvailableBackupTimeStamp?: boolean | cdktf.IResolvable; 
  public get useLatestAvailableBackupTimeStamp() {
    return this.getBooleanAttribute('use_latest_available_backup_time_stamp');
  }
  public set useLatestAvailableBackupTimeStamp(value: boolean | cdktf.IResolvable) {
    this._useLatestAvailableBackupTimeStamp = value;
  }
  public resetUseLatestAvailableBackupTimeStamp() {
    this._useLatestAvailableBackupTimeStamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLatestAvailableBackupTimeStampInput() {
    return this._useLatestAvailableBackupTimeStamp;
  }

  // used_data_storage_size_in_gbs - computed: true, optional: false, required: false
  public get usedDataStorageSizeInGbs() {
    return this.getNumberAttribute('used_data_storage_size_in_gbs');
  }

  // used_data_storage_size_in_tbs - computed: true, optional: false, required: false
  public get usedDataStorageSizeInTbs() {
    return this.getNumberAttribute('used_data_storage_size_in_tbs');
  }

  // vanity_connection_urls - computed: true, optional: false, required: false
  private _vanityConnectionUrls = new DatabaseAutonomousDatabaseVanityConnectionUrlsList(this, "vanity_connection_urls", false);
  public get vanityConnectionUrls() {
    return this._vanityConnectionUrls;
  }

  // vault_id - computed: true, optional: true, required: false
  private _vaultId?: string; 
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
  public set vaultId(value: string) {
    this._vaultId = value;
  }
  public resetVaultId() {
    this._vaultId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultIdInput() {
    return this._vaultId;
  }

  // whitelisted_ips - computed: false, optional: true, required: false
  private _whitelistedIps?: string[]; 
  public get whitelistedIps() {
    return cdktf.Fn.tolist(this.getListAttribute('whitelisted_ips'));
  }
  public set whitelistedIps(value: string[]) {
    this._whitelistedIps = value;
  }
  public resetWhitelistedIps() {
    this._whitelistedIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistedIpsInput() {
    return this._whitelistedIps;
  }

  // customer_contacts - computed: false, optional: true, required: false
  private _customerContacts = new DatabaseAutonomousDatabaseCustomerContactsList(this, "customer_contacts", false);
  public get customerContacts() {
    return this._customerContacts;
  }
  public putCustomerContacts(value: DatabaseAutonomousDatabaseCustomerContacts[] | cdktf.IResolvable) {
    this._customerContacts.internalValue = value;
  }
  public resetCustomerContacts() {
    this._customerContacts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerContactsInput() {
    return this._customerContacts.internalValue;
  }

  // db_tools_details - computed: false, optional: true, required: false
  private _dbToolsDetails = new DatabaseAutonomousDatabaseDbToolsDetailsList(this, "db_tools_details", true);
  public get dbToolsDetails() {
    return this._dbToolsDetails;
  }
  public putDbToolsDetails(value: DatabaseAutonomousDatabaseDbToolsDetails[] | cdktf.IResolvable) {
    this._dbToolsDetails.internalValue = value;
  }
  public resetDbToolsDetails() {
    this._dbToolsDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbToolsDetailsInput() {
    return this._dbToolsDetails.internalValue;
  }

  // encryption_key - computed: false, optional: true, required: false
  private _encryptionKey = new DatabaseAutonomousDatabaseEncryptionKeyOutputReference(this, "encryption_key");
  public get encryptionKey() {
    return this._encryptionKey;
  }
  public putEncryptionKey(value: DatabaseAutonomousDatabaseEncryptionKey) {
    this._encryptionKey.internalValue = value;
  }
  public resetEncryptionKey() {
    this._encryptionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey.internalValue;
  }

  // long_term_backup_schedule - computed: false, optional: true, required: false
  private _longTermBackupSchedule = new DatabaseAutonomousDatabaseLongTermBackupScheduleList(this, "long_term_backup_schedule", false);
  public get longTermBackupSchedule() {
    return this._longTermBackupSchedule;
  }
  public putLongTermBackupSchedule(value: DatabaseAutonomousDatabaseLongTermBackupSchedule[] | cdktf.IResolvable) {
    this._longTermBackupSchedule.internalValue = value;
  }
  public resetLongTermBackupSchedule() {
    this._longTermBackupSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longTermBackupScheduleInput() {
    return this._longTermBackupSchedule.internalValue;
  }

  // resource_pool_summary - computed: false, optional: true, required: false
  private _resourcePoolSummary = new DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference(this, "resource_pool_summary");
  public get resourcePoolSummary() {
    return this._resourcePoolSummary;
  }
  public putResourcePoolSummary(value: DatabaseAutonomousDatabaseResourcePoolSummary) {
    this._resourcePoolSummary.internalValue = value;
  }
  public resetResourcePoolSummary() {
    this._resourcePoolSummary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePoolSummaryInput() {
    return this._resourcePoolSummary.internalValue;
  }

  // scheduled_operations - computed: false, optional: true, required: false
  private _scheduledOperations = new DatabaseAutonomousDatabaseScheduledOperationsList(this, "scheduled_operations", true);
  public get scheduledOperations() {
    return this._scheduledOperations;
  }
  public putScheduledOperations(value: DatabaseAutonomousDatabaseScheduledOperations[] | cdktf.IResolvable) {
    this._scheduledOperations.internalValue = value;
  }
  public resetScheduledOperations() {
    this._scheduledOperations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledOperationsInput() {
    return this._scheduledOperations.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseAutonomousDatabaseTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseAutonomousDatabaseTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vanity_url_details - computed: false, optional: true, required: false
  private _vanityUrlDetails = new DatabaseAutonomousDatabaseVanityUrlDetailsList(this, "vanity_url_details", false);
  public get vanityUrlDetails() {
    return this._vanityUrlDetails;
  }
  public putVanityUrlDetails(value: DatabaseAutonomousDatabaseVanityUrlDetails[] | cdktf.IResolvable) {
    this._vanityUrlDetails.internalValue = value;
  }
  public resetVanityUrlDetails() {
    this._vanityUrlDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vanityUrlDetailsInput() {
    return this._vanityUrlDetails.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_password: cdktf.stringToTerraform(this._adminPassword),
      are_primary_whitelisted_ips_used: cdktf.booleanToTerraform(this._arePrimaryWhitelistedIpsUsed),
      auto_refresh_frequency_in_seconds: cdktf.numberToTerraform(this._autoRefreshFrequencyInSeconds),
      auto_refresh_point_lag_in_seconds: cdktf.numberToTerraform(this._autoRefreshPointLagInSeconds),
      autonomous_container_database_id: cdktf.stringToTerraform(this._autonomousContainerDatabaseId),
      autonomous_database_backup_id: cdktf.stringToTerraform(this._autonomousDatabaseBackupId),
      autonomous_database_id: cdktf.stringToTerraform(this._autonomousDatabaseId),
      autonomous_maintenance_schedule_type: cdktf.stringToTerraform(this._autonomousMaintenanceScheduleType),
      backup_retention_period_in_days: cdktf.numberToTerraform(this._backupRetentionPeriodInDays),
      byol_compute_count_limit: cdktf.numberToTerraform(this._byolComputeCountLimit),
      character_set: cdktf.stringToTerraform(this._characterSet),
      clone_table_space_list: cdktf.listMapper(cdktf.numberToTerraform, false)(this._cloneTableSpaceList),
      clone_type: cdktf.stringToTerraform(this._cloneType),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      compute_count: cdktf.numberToTerraform(this._computeCount),
      compute_model: cdktf.stringToTerraform(this._computeModel),
      cpu_core_count: cdktf.numberToTerraform(this._cpuCoreCount),
      data_safe_status: cdktf.stringToTerraform(this._dataSafeStatus),
      data_storage_size_in_gb: cdktf.numberToTerraform(this._dataStorageSizeInGb),
      data_storage_size_in_tbs: cdktf.numberToTerraform(this._dataStorageSizeInTbs),
      database_edition: cdktf.stringToTerraform(this._databaseEdition),
      database_management_status: cdktf.stringToTerraform(this._databaseManagementStatus),
      db_name: cdktf.stringToTerraform(this._dbName),
      db_version: cdktf.stringToTerraform(this._dbVersion),
      db_workload: cdktf.stringToTerraform(this._dbWorkload),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      disaster_recovery_type: cdktf.stringToTerraform(this._disasterRecoveryType),
      display_name: cdktf.stringToTerraform(this._displayName),
      enable_delete_scheduled_operations: cdktf.booleanToTerraform(this._enableDeleteScheduledOperations),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      in_memory_percentage: cdktf.numberToTerraform(this._inMemoryPercentage),
      is_access_control_enabled: cdktf.booleanToTerraform(this._isAccessControlEnabled),
      is_auto_scaling_enabled: cdktf.booleanToTerraform(this._isAutoScalingEnabled),
      is_auto_scaling_for_storage_enabled: cdktf.booleanToTerraform(this._isAutoScalingForStorageEnabled),
      is_backup_retention_locked: cdktf.booleanToTerraform(this._isBackupRetentionLocked),
      is_data_guard_enabled: cdktf.booleanToTerraform(this._isDataGuardEnabled),
      is_dedicated: cdktf.booleanToTerraform(this._isDedicated),
      is_dev_tier: cdktf.booleanToTerraform(this._isDevTier),
      is_disable_db_version_upgrade_schedule: cdktf.booleanToTerraform(this._isDisableDbVersionUpgradeSchedule),
      is_disconnect_peer: cdktf.booleanToTerraform(this._isDisconnectPeer),
      is_free_tier: cdktf.booleanToTerraform(this._isFreeTier),
      is_local_data_guard_enabled: cdktf.booleanToTerraform(this._isLocalDataGuardEnabled),
      is_mtls_connection_required: cdktf.booleanToTerraform(this._isMtlsConnectionRequired),
      is_preview_version_with_service_terms_accepted: cdktf.booleanToTerraform(this._isPreviewVersionWithServiceTermsAccepted),
      is_refreshable_clone: cdktf.booleanToTerraform(this._isRefreshableClone),
      is_replicate_automatic_backups: cdktf.booleanToTerraform(this._isReplicateAutomaticBackups),
      is_schedule_db_version_upgrade_to_earliest: cdktf.booleanToTerraform(this._isScheduleDbVersionUpgradeToEarliest),
      is_shrink_only: cdktf.booleanToTerraform(this._isShrinkOnly),
      key_version_id: cdktf.stringToTerraform(this._keyVersionId),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      license_model: cdktf.stringToTerraform(this._licenseModel),
      local_adg_auto_failover_max_data_loss_limit: cdktf.numberToTerraform(this._localAdgAutoFailoverMaxDataLossLimit),
      max_cpu_core_count: cdktf.numberToTerraform(this._maxCpuCoreCount),
      ncharacter_set: cdktf.stringToTerraform(this._ncharacterSet),
      nsg_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nsgIds),
      ocpu_count: cdktf.numberToTerraform(this._ocpuCount),
      open_mode: cdktf.stringToTerraform(this._openMode),
      operations_insights_status: cdktf.stringToTerraform(this._operationsInsightsStatus),
      peer_db_id: cdktf.stringToTerraform(this._peerDbId),
      permission_level: cdktf.stringToTerraform(this._permissionLevel),
      private_endpoint_ip: cdktf.stringToTerraform(this._privateEndpointIp),
      private_endpoint_label: cdktf.stringToTerraform(this._privateEndpointLabel),
      refreshable_mode: cdktf.stringToTerraform(this._refreshableMode),
      remote_disaster_recovery_type: cdktf.stringToTerraform(this._remoteDisasterRecoveryType),
      resource_pool_leader_id: cdktf.stringToTerraform(this._resourcePoolLeaderId),
      rotate_key_trigger: cdktf.booleanToTerraform(this._rotateKeyTrigger),
      secret_id: cdktf.stringToTerraform(this._secretId),
      secret_version_number: cdktf.numberToTerraform(this._secretVersionNumber),
      security_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._securityAttributes),
      shrink_adb_trigger: cdktf.numberToTerraform(this._shrinkAdbTrigger),
      source: cdktf.stringToTerraform(this._source),
      source_id: cdktf.stringToTerraform(this._sourceId),
      standby_whitelisted_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._standbyWhitelistedIps),
      state: cdktf.stringToTerraform(this._state),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      switchover_to: cdktf.stringToTerraform(this._switchoverTo),
      switchover_to_remote_peer_id: cdktf.stringToTerraform(this._switchoverToRemotePeerId),
      time_of_auto_refresh_start: cdktf.stringToTerraform(this._timeOfAutoRefreshStart),
      time_scheduled_db_version_upgrade: cdktf.stringToTerraform(this._timeScheduledDbVersionUpgrade),
      timestamp: cdktf.stringToTerraform(this._timestamp),
      use_latest_available_backup_time_stamp: cdktf.booleanToTerraform(this._useLatestAvailableBackupTimeStamp),
      vault_id: cdktf.stringToTerraform(this._vaultId),
      whitelisted_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._whitelistedIps),
      customer_contacts: cdktf.listMapper(databaseAutonomousDatabaseCustomerContactsToTerraform, true)(this._customerContacts.internalValue),
      db_tools_details: cdktf.listMapper(databaseAutonomousDatabaseDbToolsDetailsToTerraform, true)(this._dbToolsDetails.internalValue),
      encryption_key: databaseAutonomousDatabaseEncryptionKeyToTerraform(this._encryptionKey.internalValue),
      long_term_backup_schedule: cdktf.listMapper(databaseAutonomousDatabaseLongTermBackupScheduleToTerraform, true)(this._longTermBackupSchedule.internalValue),
      resource_pool_summary: databaseAutonomousDatabaseResourcePoolSummaryToTerraform(this._resourcePoolSummary.internalValue),
      scheduled_operations: cdktf.listMapper(databaseAutonomousDatabaseScheduledOperationsToTerraform, true)(this._scheduledOperations.internalValue),
      timeouts: databaseAutonomousDatabaseTimeoutsToTerraform(this._timeouts.internalValue),
      vanity_url_details: cdktf.listMapper(databaseAutonomousDatabaseVanityUrlDetailsToTerraform, true)(this._vanityUrlDetails.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_password: {
        value: cdktf.stringToHclTerraform(this._adminPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      are_primary_whitelisted_ips_used: {
        value: cdktf.booleanToHclTerraform(this._arePrimaryWhitelistedIpsUsed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_refresh_frequency_in_seconds: {
        value: cdktf.numberToHclTerraform(this._autoRefreshFrequencyInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_refresh_point_lag_in_seconds: {
        value: cdktf.numberToHclTerraform(this._autoRefreshPointLagInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      autonomous_container_database_id: {
        value: cdktf.stringToHclTerraform(this._autonomousContainerDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      autonomous_database_backup_id: {
        value: cdktf.stringToHclTerraform(this._autonomousDatabaseBackupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      autonomous_database_id: {
        value: cdktf.stringToHclTerraform(this._autonomousDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      autonomous_maintenance_schedule_type: {
        value: cdktf.stringToHclTerraform(this._autonomousMaintenanceScheduleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_retention_period_in_days: {
        value: cdktf.numberToHclTerraform(this._backupRetentionPeriodInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      byol_compute_count_limit: {
        value: cdktf.numberToHclTerraform(this._byolComputeCountLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      character_set: {
        value: cdktf.stringToHclTerraform(this._characterSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clone_table_space_list: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._cloneTableSpaceList),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      clone_type: {
        value: cdktf.stringToHclTerraform(this._cloneType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compute_count: {
        value: cdktf.numberToHclTerraform(this._computeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      compute_model: {
        value: cdktf.stringToHclTerraform(this._computeModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_core_count: {
        value: cdktf.numberToHclTerraform(this._cpuCoreCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_safe_status: {
        value: cdktf.stringToHclTerraform(this._dataSafeStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_storage_size_in_gb: {
        value: cdktf.numberToHclTerraform(this._dataStorageSizeInGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_storage_size_in_tbs: {
        value: cdktf.numberToHclTerraform(this._dataStorageSizeInTbs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      database_edition: {
        value: cdktf.stringToHclTerraform(this._databaseEdition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_management_status: {
        value: cdktf.stringToHclTerraform(this._databaseManagementStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_name: {
        value: cdktf.stringToHclTerraform(this._dbName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_version: {
        value: cdktf.stringToHclTerraform(this._dbVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_workload: {
        value: cdktf.stringToHclTerraform(this._dbWorkload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      disaster_recovery_type: {
        value: cdktf.stringToHclTerraform(this._disasterRecoveryType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_delete_scheduled_operations: {
        value: cdktf.booleanToHclTerraform(this._enableDeleteScheduledOperations),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      in_memory_percentage: {
        value: cdktf.numberToHclTerraform(this._inMemoryPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_access_control_enabled: {
        value: cdktf.booleanToHclTerraform(this._isAccessControlEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_auto_scaling_enabled: {
        value: cdktf.booleanToHclTerraform(this._isAutoScalingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_auto_scaling_for_storage_enabled: {
        value: cdktf.booleanToHclTerraform(this._isAutoScalingForStorageEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_backup_retention_locked: {
        value: cdktf.booleanToHclTerraform(this._isBackupRetentionLocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_data_guard_enabled: {
        value: cdktf.booleanToHclTerraform(this._isDataGuardEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_dedicated: {
        value: cdktf.booleanToHclTerraform(this._isDedicated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_dev_tier: {
        value: cdktf.booleanToHclTerraform(this._isDevTier),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_disable_db_version_upgrade_schedule: {
        value: cdktf.booleanToHclTerraform(this._isDisableDbVersionUpgradeSchedule),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_disconnect_peer: {
        value: cdktf.booleanToHclTerraform(this._isDisconnectPeer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_free_tier: {
        value: cdktf.booleanToHclTerraform(this._isFreeTier),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_local_data_guard_enabled: {
        value: cdktf.booleanToHclTerraform(this._isLocalDataGuardEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_mtls_connection_required: {
        value: cdktf.booleanToHclTerraform(this._isMtlsConnectionRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_preview_version_with_service_terms_accepted: {
        value: cdktf.booleanToHclTerraform(this._isPreviewVersionWithServiceTermsAccepted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_refreshable_clone: {
        value: cdktf.booleanToHclTerraform(this._isRefreshableClone),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_replicate_automatic_backups: {
        value: cdktf.booleanToHclTerraform(this._isReplicateAutomaticBackups),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_schedule_db_version_upgrade_to_earliest: {
        value: cdktf.booleanToHclTerraform(this._isScheduleDbVersionUpgradeToEarliest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_shrink_only: {
        value: cdktf.booleanToHclTerraform(this._isShrinkOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key_version_id: {
        value: cdktf.stringToHclTerraform(this._keyVersionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_model: {
        value: cdktf.stringToHclTerraform(this._licenseModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_adg_auto_failover_max_data_loss_limit: {
        value: cdktf.numberToHclTerraform(this._localAdgAutoFailoverMaxDataLossLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_cpu_core_count: {
        value: cdktf.numberToHclTerraform(this._maxCpuCoreCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ncharacter_set: {
        value: cdktf.stringToHclTerraform(this._ncharacterSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nsg_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nsgIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ocpu_count: {
        value: cdktf.numberToHclTerraform(this._ocpuCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      open_mode: {
        value: cdktf.stringToHclTerraform(this._openMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operations_insights_status: {
        value: cdktf.stringToHclTerraform(this._operationsInsightsStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_db_id: {
        value: cdktf.stringToHclTerraform(this._peerDbId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permission_level: {
        value: cdktf.stringToHclTerraform(this._permissionLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_endpoint_ip: {
        value: cdktf.stringToHclTerraform(this._privateEndpointIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_endpoint_label: {
        value: cdktf.stringToHclTerraform(this._privateEndpointLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refreshable_mode: {
        value: cdktf.stringToHclTerraform(this._refreshableMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_disaster_recovery_type: {
        value: cdktf.stringToHclTerraform(this._remoteDisasterRecoveryType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_pool_leader_id: {
        value: cdktf.stringToHclTerraform(this._resourcePoolLeaderId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotate_key_trigger: {
        value: cdktf.booleanToHclTerraform(this._rotateKeyTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      secret_id: {
        value: cdktf.stringToHclTerraform(this._secretId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_version_number: {
        value: cdktf.numberToHclTerraform(this._secretVersionNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_attributes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._securityAttributes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      shrink_adb_trigger: {
        value: cdktf.numberToHclTerraform(this._shrinkAdbTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_id: {
        value: cdktf.stringToHclTerraform(this._sourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      standby_whitelisted_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._standbyWhitelistedIps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switchover_to: {
        value: cdktf.stringToHclTerraform(this._switchoverTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switchover_to_remote_peer_id: {
        value: cdktf.stringToHclTerraform(this._switchoverToRemotePeerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_of_auto_refresh_start: {
        value: cdktf.stringToHclTerraform(this._timeOfAutoRefreshStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_scheduled_db_version_upgrade: {
        value: cdktf.stringToHclTerraform(this._timeScheduledDbVersionUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timestamp: {
        value: cdktf.stringToHclTerraform(this._timestamp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_latest_available_backup_time_stamp: {
        value: cdktf.booleanToHclTerraform(this._useLatestAvailableBackupTimeStamp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vault_id: {
        value: cdktf.stringToHclTerraform(this._vaultId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      whitelisted_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._whitelistedIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      customer_contacts: {
        value: cdktf.listMapperHcl(databaseAutonomousDatabaseCustomerContactsToHclTerraform, true)(this._customerContacts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseAutonomousDatabaseCustomerContactsList",
      },
      db_tools_details: {
        value: cdktf.listMapperHcl(databaseAutonomousDatabaseDbToolsDetailsToHclTerraform, true)(this._dbToolsDetails.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DatabaseAutonomousDatabaseDbToolsDetailsList",
      },
      encryption_key: {
        value: databaseAutonomousDatabaseEncryptionKeyToHclTerraform(this._encryptionKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseAutonomousDatabaseEncryptionKeyList",
      },
      long_term_backup_schedule: {
        value: cdktf.listMapperHcl(databaseAutonomousDatabaseLongTermBackupScheduleToHclTerraform, true)(this._longTermBackupSchedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseAutonomousDatabaseLongTermBackupScheduleList",
      },
      resource_pool_summary: {
        value: databaseAutonomousDatabaseResourcePoolSummaryToHclTerraform(this._resourcePoolSummary.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseAutonomousDatabaseResourcePoolSummaryList",
      },
      scheduled_operations: {
        value: cdktf.listMapperHcl(databaseAutonomousDatabaseScheduledOperationsToHclTerraform, true)(this._scheduledOperations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DatabaseAutonomousDatabaseScheduledOperationsList",
      },
      timeouts: {
        value: databaseAutonomousDatabaseTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseAutonomousDatabaseTimeouts",
      },
      vanity_url_details: {
        value: cdktf.listMapperHcl(databaseAutonomousDatabaseVanityUrlDetailsToHclTerraform, true)(this._vanityUrlDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseAutonomousDatabaseVanityUrlDetailsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
