// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseAutonomousContainerDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#autonomous_container_database_backup_id DatabaseAutonomousContainerDatabase#autonomous_container_database_backup_id}
  */
  readonly autonomousContainerDatabaseBackupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#autonomous_exadata_infrastructure_id DatabaseAutonomousContainerDatabase#autonomous_exadata_infrastructure_id}
  */
  readonly autonomousExadataInfrastructureId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#autonomous_vm_cluster_id DatabaseAutonomousContainerDatabase#autonomous_vm_cluster_id}
  */
  readonly autonomousVmClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#cloud_autonomous_vm_cluster_id DatabaseAutonomousContainerDatabase#cloud_autonomous_vm_cluster_id}
  */
  readonly cloudAutonomousVmClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#compartment_id DatabaseAutonomousContainerDatabase#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#database_software_image_id DatabaseAutonomousContainerDatabase#database_software_image_id}
  */
  readonly databaseSoftwareImageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#db_name DatabaseAutonomousContainerDatabase#db_name}
  */
  readonly dbName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#db_split_threshold DatabaseAutonomousContainerDatabase#db_split_threshold}
  */
  readonly dbSplitThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#db_unique_name DatabaseAutonomousContainerDatabase#db_unique_name}
  */
  readonly dbUniqueName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#db_version DatabaseAutonomousContainerDatabase#db_version}
  */
  readonly dbVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#defined_tags DatabaseAutonomousContainerDatabase#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#display_name DatabaseAutonomousContainerDatabase#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#distribution_affinity DatabaseAutonomousContainerDatabase#distribution_affinity}
  */
  readonly distributionAffinity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#failover_trigger DatabaseAutonomousContainerDatabase#failover_trigger}
  */
  readonly failoverTrigger?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#fast_start_fail_over_lag_limit_in_seconds DatabaseAutonomousContainerDatabase#fast_start_fail_over_lag_limit_in_seconds}
  */
  readonly fastStartFailOverLagLimitInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#freeform_tags DatabaseAutonomousContainerDatabase#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#id DatabaseAutonomousContainerDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#is_automatic_failover_enabled DatabaseAutonomousContainerDatabase#is_automatic_failover_enabled}
  */
  readonly isAutomaticFailoverEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#is_dst_file_update_enabled DatabaseAutonomousContainerDatabase#is_dst_file_update_enabled}
  */
  readonly isDstFileUpdateEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#key_store_id DatabaseAutonomousContainerDatabase#key_store_id}
  */
  readonly keyStoreId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#key_version_id DatabaseAutonomousContainerDatabase#key_version_id}
  */
  readonly keyVersionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#kms_key_id DatabaseAutonomousContainerDatabase#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#net_services_architecture DatabaseAutonomousContainerDatabase#net_services_architecture}
  */
  readonly netServicesArchitecture?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#okv_end_point_group_name DatabaseAutonomousContainerDatabase#okv_end_point_group_name}
  */
  readonly okvEndPointGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#patch_model DatabaseAutonomousContainerDatabase#patch_model}
  */
  readonly patchModel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#peer_autonomous_container_database_compartment_id DatabaseAutonomousContainerDatabase#peer_autonomous_container_database_compartment_id}
  */
  readonly peerAutonomousContainerDatabaseCompartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#peer_autonomous_container_database_display_name DatabaseAutonomousContainerDatabase#peer_autonomous_container_database_display_name}
  */
  readonly peerAutonomousContainerDatabaseDisplayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#peer_autonomous_exadata_infrastructure_id DatabaseAutonomousContainerDatabase#peer_autonomous_exadata_infrastructure_id}
  */
  readonly peerAutonomousExadataInfrastructureId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#peer_autonomous_vm_cluster_id DatabaseAutonomousContainerDatabase#peer_autonomous_vm_cluster_id}
  */
  readonly peerAutonomousVmClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#peer_cloud_autonomous_vm_cluster_id DatabaseAutonomousContainerDatabase#peer_cloud_autonomous_vm_cluster_id}
  */
  readonly peerCloudAutonomousVmClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#peer_db_unique_name DatabaseAutonomousContainerDatabase#peer_db_unique_name}
  */
  readonly peerDbUniqueName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#protection_mode DatabaseAutonomousContainerDatabase#protection_mode}
  */
  readonly protectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#reinstate_trigger DatabaseAutonomousContainerDatabase#reinstate_trigger}
  */
  readonly reinstateTrigger?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#rotate_key_trigger DatabaseAutonomousContainerDatabase#rotate_key_trigger}
  */
  readonly rotateKeyTrigger?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#service_level_agreement_type DatabaseAutonomousContainerDatabase#service_level_agreement_type}
  */
  readonly serviceLevelAgreementType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#source DatabaseAutonomousContainerDatabase#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#standby_maintenance_buffer_in_days DatabaseAutonomousContainerDatabase#standby_maintenance_buffer_in_days}
  */
  readonly standbyMaintenanceBufferInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#switchover_trigger DatabaseAutonomousContainerDatabase#switchover_trigger}
  */
  readonly switchoverTrigger?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#vault_id DatabaseAutonomousContainerDatabase#vault_id}
  */
  readonly vaultId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#version_preference DatabaseAutonomousContainerDatabase#version_preference}
  */
  readonly versionPreference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#vm_failover_reservation DatabaseAutonomousContainerDatabase#vm_failover_reservation}
  */
  readonly vmFailoverReservation?: number;
  /**
  * backup_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#backup_config DatabaseAutonomousContainerDatabase#backup_config}
  */
  readonly backupConfig?: DatabaseAutonomousContainerDatabaseBackupConfig;
  /**
  * customer_contacts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#customer_contacts DatabaseAutonomousContainerDatabase#customer_contacts}
  */
  readonly customerContacts?: DatabaseAutonomousContainerDatabaseCustomerContacts[] | cdktf.IResolvable;
  /**
  * maintenance_window_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#maintenance_window_details DatabaseAutonomousContainerDatabase#maintenance_window_details}
  */
  readonly maintenanceWindowDetails?: DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails;
  /**
  * peer_autonomous_container_database_backup_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#peer_autonomous_container_database_backup_config DatabaseAutonomousContainerDatabase#peer_autonomous_container_database_backup_config}
  */
  readonly peerAutonomousContainerDatabaseBackupConfig?: DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#timeouts DatabaseAutonomousContainerDatabase#timeouts}
  */
  readonly timeouts?: DatabaseAutonomousContainerDatabaseTimeouts;
}
export interface DatabaseAutonomousContainerDatabaseAssociatedBackupConfigurationDetails {
}

export function databaseAutonomousContainerDatabaseAssociatedBackupConfigurationDetailsToTerraform(struct?: DatabaseAutonomousContainerDatabaseAssociatedBackupConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseAutonomousContainerDatabaseAssociatedBackupConfigurationDetailsToHclTerraform(struct?: DatabaseAutonomousContainerDatabaseAssociatedBackupConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseAutonomousContainerDatabaseAssociatedBackupConfigurationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousContainerDatabaseAssociatedBackupConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousContainerDatabaseAssociatedBackupConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_destination_attach_history - computed: true, optional: false, required: false
  public get backupDestinationAttachHistory() {
    return this.getListAttribute('backup_destination_attach_history');
  }

  // backup_retention_policy_on_terminate - computed: true, optional: false, required: false
  public get backupRetentionPolicyOnTerminate() {
    return this.getStringAttribute('backup_retention_policy_on_terminate');
  }

  // dbrs_policy_id - computed: true, optional: false, required: false
  public get dbrsPolicyId() {
    return this.getStringAttribute('dbrs_policy_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internet_proxy - computed: true, optional: false, required: false
  public get internetProxy() {
    return this.getStringAttribute('internet_proxy');
  }

  // is_retention_lock_enabled - computed: true, optional: false, required: false
  public get isRetentionLockEnabled() {
    return this.getBooleanAttribute('is_retention_lock_enabled');
  }

  // recovery_window_in_days - computed: true, optional: false, required: false
  public get recoveryWindowInDays() {
    return this.getNumberAttribute('recovery_window_in_days');
  }

  // space_utilized_in_gbs - computed: true, optional: false, required: false
  public get spaceUtilizedInGbs() {
    return this.getNumberAttribute('space_utilized_in_gbs');
  }

  // time_at_which_storage_details_are_updated - computed: true, optional: false, required: false
  public get timeAtWhichStorageDetailsAreUpdated() {
    return this.getStringAttribute('time_at_which_storage_details_are_updated');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vpc_password - computed: true, optional: false, required: false
  public get vpcPassword() {
    return this.getStringAttribute('vpc_password');
  }

  // vpc_user - computed: true, optional: false, required: false
  public get vpcUser() {
    return this.getStringAttribute('vpc_user');
  }
}

export class DatabaseAutonomousContainerDatabaseAssociatedBackupConfigurationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseAutonomousContainerDatabaseAssociatedBackupConfigurationDetailsOutputReference {
    return new DatabaseAutonomousContainerDatabaseAssociatedBackupConfigurationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseAutonomousContainerDatabaseBackupDestinationPropertiesListStruct {
}

export function databaseAutonomousContainerDatabaseBackupDestinationPropertiesListStructToTerraform(struct?: DatabaseAutonomousContainerDatabaseBackupDestinationPropertiesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseAutonomousContainerDatabaseBackupDestinationPropertiesListStructToHclTerraform(struct?: DatabaseAutonomousContainerDatabaseBackupDestinationPropertiesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseAutonomousContainerDatabaseBackupDestinationPropertiesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousContainerDatabaseBackupDestinationPropertiesListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousContainerDatabaseBackupDestinationPropertiesListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_destination_attach_history - computed: true, optional: false, required: false
  public get backupDestinationAttachHistory() {
    return this.getListAttribute('backup_destination_attach_history');
  }

  // space_utilized_in_gbs - computed: true, optional: false, required: false
  public get spaceUtilizedInGbs() {
    return this.getNumberAttribute('space_utilized_in_gbs');
  }

  // time_at_which_storage_details_are_updated - computed: true, optional: false, required: false
  public get timeAtWhichStorageDetailsAreUpdated() {
    return this.getStringAttribute('time_at_which_storage_details_are_updated');
  }
}

export class DatabaseAutonomousContainerDatabaseBackupDestinationPropertiesListStructList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseAutonomousContainerDatabaseBackupDestinationPropertiesListStructOutputReference {
    return new DatabaseAutonomousContainerDatabaseBackupDestinationPropertiesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseAutonomousContainerDatabaseDataguard {
}

export function databaseAutonomousContainerDatabaseDataguardToTerraform(struct?: DatabaseAutonomousContainerDatabaseDataguard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseAutonomousContainerDatabaseDataguardToHclTerraform(struct?: DatabaseAutonomousContainerDatabaseDataguard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseAutonomousContainerDatabaseDataguardOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousContainerDatabaseDataguard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousContainerDatabaseDataguard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apply_lag - computed: true, optional: false, required: false
  public get applyLag() {
    return this.getStringAttribute('apply_lag');
  }

  // apply_rate - computed: true, optional: false, required: false
  public get applyRate() {
    return this.getStringAttribute('apply_rate');
  }

  // automatic_failover_target - computed: true, optional: false, required: false
  public get automaticFailoverTarget() {
    return this.getStringAttribute('automatic_failover_target');
  }

  // autonomous_container_database_id - computed: true, optional: false, required: false
  public get autonomousContainerDatabaseId() {
    return this.getStringAttribute('autonomous_container_database_id');
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // fast_start_fail_over_lag_limit_in_seconds - computed: true, optional: false, required: false
  public get fastStartFailOverLagLimitInSeconds() {
    return this.getNumberAttribute('fast_start_fail_over_lag_limit_in_seconds');
  }

  // is_automatic_failover_enabled - computed: true, optional: false, required: false
  public get isAutomaticFailoverEnabled() {
    return this.getBooleanAttribute('is_automatic_failover_enabled');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // protection_mode - computed: true, optional: false, required: false
  public get protectionMode() {
    return this.getStringAttribute('protection_mode');
  }

  // redo_transport_mode - computed: true, optional: false, required: false
  public get redoTransportMode() {
    return this.getStringAttribute('redo_transport_mode');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_lag_refreshed_on - computed: true, optional: false, required: false
  public get timeLagRefreshedOn() {
    return this.getStringAttribute('time_lag_refreshed_on');
  }

  // time_last_role_changed - computed: true, optional: false, required: false
  public get timeLastRoleChanged() {
    return this.getStringAttribute('time_last_role_changed');
  }

  // time_last_synced - computed: true, optional: false, required: false
  public get timeLastSynced() {
    return this.getStringAttribute('time_last_synced');
  }

  // transport_lag - computed: true, optional: false, required: false
  public get transportLag() {
    return this.getStringAttribute('transport_lag');
  }
}

export class DatabaseAutonomousContainerDatabaseDataguardList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseAutonomousContainerDatabaseDataguardOutputReference {
    return new DatabaseAutonomousContainerDatabaseDataguardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseAutonomousContainerDatabaseDataguardGroupMembers {
}

export function databaseAutonomousContainerDatabaseDataguardGroupMembersToTerraform(struct?: DatabaseAutonomousContainerDatabaseDataguardGroupMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseAutonomousContainerDatabaseDataguardGroupMembersToHclTerraform(struct?: DatabaseAutonomousContainerDatabaseDataguardGroupMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseAutonomousContainerDatabaseDataguardGroupMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousContainerDatabaseDataguardGroupMembers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousContainerDatabaseDataguardGroupMembers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apply_lag - computed: true, optional: false, required: false
  public get applyLag() {
    return this.getStringAttribute('apply_lag');
  }

  // apply_rate - computed: true, optional: false, required: false
  public get applyRate() {
    return this.getStringAttribute('apply_rate');
  }

  // automatic_failover_target - computed: true, optional: false, required: false
  public get automaticFailoverTarget() {
    return this.getStringAttribute('automatic_failover_target');
  }

  // autonomous_container_database_id - computed: true, optional: false, required: false
  public get autonomousContainerDatabaseId() {
    return this.getStringAttribute('autonomous_container_database_id');
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // fast_start_fail_over_lag_limit_in_seconds - computed: true, optional: false, required: false
  public get fastStartFailOverLagLimitInSeconds() {
    return this.getNumberAttribute('fast_start_fail_over_lag_limit_in_seconds');
  }

  // is_automatic_failover_enabled - computed: true, optional: false, required: false
  public get isAutomaticFailoverEnabled() {
    return this.getBooleanAttribute('is_automatic_failover_enabled');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // protection_mode - computed: true, optional: false, required: false
  public get protectionMode() {
    return this.getStringAttribute('protection_mode');
  }

  // redo_transport_mode - computed: true, optional: false, required: false
  public get redoTransportMode() {
    return this.getStringAttribute('redo_transport_mode');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_lag_refreshed_on - computed: true, optional: false, required: false
  public get timeLagRefreshedOn() {
    return this.getStringAttribute('time_lag_refreshed_on');
  }

  // time_last_role_changed - computed: true, optional: false, required: false
  public get timeLastRoleChanged() {
    return this.getStringAttribute('time_last_role_changed');
  }

  // time_last_synced - computed: true, optional: false, required: false
  public get timeLastSynced() {
    return this.getStringAttribute('time_last_synced');
  }

  // transport_lag - computed: true, optional: false, required: false
  public get transportLag() {
    return this.getStringAttribute('transport_lag');
  }
}

export class DatabaseAutonomousContainerDatabaseDataguardGroupMembersList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseAutonomousContainerDatabaseDataguardGroupMembersOutputReference {
    return new DatabaseAutonomousContainerDatabaseDataguardGroupMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseAutonomousContainerDatabaseKeyHistoryEntry {
}

export function databaseAutonomousContainerDatabaseKeyHistoryEntryToTerraform(struct?: DatabaseAutonomousContainerDatabaseKeyHistoryEntry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseAutonomousContainerDatabaseKeyHistoryEntryToHclTerraform(struct?: DatabaseAutonomousContainerDatabaseKeyHistoryEntry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousContainerDatabaseKeyHistoryEntry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousContainerDatabaseKeyHistoryEntry | undefined) {
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

export class DatabaseAutonomousContainerDatabaseKeyHistoryEntryList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference {
    return new DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeek {
}

export function databaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekToTerraform(struct?: DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekToHclTerraform(struct?: DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeek | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeek | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference {
    return new DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseAutonomousContainerDatabaseMaintenanceWindowMonths {
}

export function databaseAutonomousContainerDatabaseMaintenanceWindowMonthsToTerraform(struct?: DatabaseAutonomousContainerDatabaseMaintenanceWindowMonths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseAutonomousContainerDatabaseMaintenanceWindowMonthsToHclTerraform(struct?: DatabaseAutonomousContainerDatabaseMaintenanceWindowMonths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousContainerDatabaseMaintenanceWindowMonths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousContainerDatabaseMaintenanceWindowMonths | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference {
    return new DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseAutonomousContainerDatabaseMaintenanceWindow {
}

export function databaseAutonomousContainerDatabaseMaintenanceWindowToTerraform(struct?: DatabaseAutonomousContainerDatabaseMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseAutonomousContainerDatabaseMaintenanceWindowToHclTerraform(struct?: DatabaseAutonomousContainerDatabaseMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousContainerDatabaseMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousContainerDatabaseMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_action_timeout_in_mins - computed: true, optional: false, required: false
  public get customActionTimeoutInMins() {
    return this.getNumberAttribute('custom_action_timeout_in_mins');
  }

  // days_of_week - computed: true, optional: false, required: false
  private _daysOfWeek = new DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList(this, "days_of_week", false);
  public get daysOfWeek() {
    return this._daysOfWeek;
  }

  // hours_of_day - computed: true, optional: false, required: false
  public get hoursOfDay() {
    return this.getNumberListAttribute('hours_of_day');
  }

  // is_custom_action_timeout_enabled - computed: true, optional: false, required: false
  public get isCustomActionTimeoutEnabled() {
    return this.getBooleanAttribute('is_custom_action_timeout_enabled');
  }

  // is_monthly_patching_enabled - computed: true, optional: false, required: false
  public get isMonthlyPatchingEnabled() {
    return this.getBooleanAttribute('is_monthly_patching_enabled');
  }

  // lead_time_in_weeks - computed: true, optional: false, required: false
  public get leadTimeInWeeks() {
    return this.getNumberAttribute('lead_time_in_weeks');
  }

  // months - computed: true, optional: false, required: false
  private _months = new DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList(this, "months", false);
  public get months() {
    return this._months;
  }

  // patching_mode - computed: true, optional: false, required: false
  public get patchingMode() {
    return this.getStringAttribute('patching_mode');
  }

  // preference - computed: true, optional: false, required: false
  public get preference() {
    return this.getStringAttribute('preference');
  }

  // skip_ru - computed: true, optional: false, required: false
  private _skipRu = new cdktf.BooleanList(this, "skip_ru", false);
  public get skipRu() {
    return this._skipRu;
  }

  // weeks_of_month - computed: true, optional: false, required: false
  public get weeksOfMonth() {
    return this.getNumberListAttribute('weeks_of_month');
  }
}

export class DatabaseAutonomousContainerDatabaseMaintenanceWindowList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference {
    return new DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseAutonomousContainerDatabaseRecoveryApplianceDetails {
}

export function databaseAutonomousContainerDatabaseRecoveryApplianceDetailsToTerraform(struct?: DatabaseAutonomousContainerDatabaseRecoveryApplianceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseAutonomousContainerDatabaseRecoveryApplianceDetailsToHclTerraform(struct?: DatabaseAutonomousContainerDatabaseRecoveryApplianceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseAutonomousContainerDatabaseRecoveryApplianceDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousContainerDatabaseRecoveryApplianceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousContainerDatabaseRecoveryApplianceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allocated_storage_size_in_gbs - computed: true, optional: false, required: false
  public get allocatedStorageSizeInGbs() {
    return this.getNumberAttribute('allocated_storage_size_in_gbs');
  }

  // recovery_window_in_days - computed: true, optional: false, required: false
  public get recoveryWindowInDays() {
    return this.getNumberAttribute('recovery_window_in_days');
  }

  // time_recovery_appliance_details_updated - computed: true, optional: false, required: false
  public get timeRecoveryApplianceDetailsUpdated() {
    return this.getStringAttribute('time_recovery_appliance_details_updated');
  }
}

export class DatabaseAutonomousContainerDatabaseRecoveryApplianceDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseAutonomousContainerDatabaseRecoveryApplianceDetailsOutputReference {
    return new DatabaseAutonomousContainerDatabaseRecoveryApplianceDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#backup_retention_policy_on_terminate DatabaseAutonomousContainerDatabase#backup_retention_policy_on_terminate}
  */
  readonly backupRetentionPolicyOnTerminate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#id DatabaseAutonomousContainerDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#internet_proxy DatabaseAutonomousContainerDatabase#internet_proxy}
  */
  readonly internetProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#is_remote DatabaseAutonomousContainerDatabase#is_remote}
  */
  readonly isRemote?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#is_retention_lock_enabled DatabaseAutonomousContainerDatabase#is_retention_lock_enabled}
  */
  readonly isRetentionLockEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#remote_region DatabaseAutonomousContainerDatabase#remote_region}
  */
  readonly remoteRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#type DatabaseAutonomousContainerDatabase#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#vpc_password DatabaseAutonomousContainerDatabase#vpc_password}
  */
  readonly vpcPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#vpc_user DatabaseAutonomousContainerDatabase#vpc_user}
  */
  readonly vpcUser?: string;
}

export function databaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsToTerraform(struct?: DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference | DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_retention_policy_on_terminate: cdktf.stringToTerraform(struct!.backupRetentionPolicyOnTerminate),
    id: cdktf.stringToTerraform(struct!.id),
    internet_proxy: cdktf.stringToTerraform(struct!.internetProxy),
    is_remote: cdktf.booleanToTerraform(struct!.isRemote),
    is_retention_lock_enabled: cdktf.booleanToTerraform(struct!.isRetentionLockEnabled),
    remote_region: cdktf.stringToTerraform(struct!.remoteRegion),
    type: cdktf.stringToTerraform(struct!.type),
    vpc_password: cdktf.stringToTerraform(struct!.vpcPassword),
    vpc_user: cdktf.stringToTerraform(struct!.vpcUser),
  }
}


export function databaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsToHclTerraform(struct?: DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference | DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_retention_policy_on_terminate: {
      value: cdktf.stringToHclTerraform(struct!.backupRetentionPolicyOnTerminate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internet_proxy: {
      value: cdktf.stringToHclTerraform(struct!.internetProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_remote: {
      value: cdktf.booleanToHclTerraform(struct!.isRemote),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_retention_lock_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isRetentionLockEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remote_region: {
      value: cdktf.stringToHclTerraform(struct!.remoteRegion),
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
    vpc_password: {
      value: cdktf.stringToHclTerraform(struct!.vpcPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_user: {
      value: cdktf.stringToHclTerraform(struct!.vpcUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupRetentionPolicyOnTerminate !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupRetentionPolicyOnTerminate = this._backupRetentionPolicyOnTerminate;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._internetProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetProxy = this._internetProxy;
    }
    if (this._isRemote !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRemote = this._isRemote;
    }
    if (this._isRetentionLockEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRetentionLockEnabled = this._isRetentionLockEnabled;
    }
    if (this._remoteRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteRegion = this._remoteRegion;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vpcPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcPassword = this._vpcPassword;
    }
    if (this._vpcUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcUser = this._vpcUser;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupRetentionPolicyOnTerminate = undefined;
      this._id = undefined;
      this._internetProxy = undefined;
      this._isRemote = undefined;
      this._isRetentionLockEnabled = undefined;
      this._remoteRegion = undefined;
      this._type = undefined;
      this._vpcPassword = undefined;
      this._vpcUser = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupRetentionPolicyOnTerminate = value.backupRetentionPolicyOnTerminate;
      this._id = value.id;
      this._internetProxy = value.internetProxy;
      this._isRemote = value.isRemote;
      this._isRetentionLockEnabled = value.isRetentionLockEnabled;
      this._remoteRegion = value.remoteRegion;
      this._type = value.type;
      this._vpcPassword = value.vpcPassword;
      this._vpcUser = value.vpcUser;
    }
  }

  // backup_retention_policy_on_terminate - computed: true, optional: true, required: false
  private _backupRetentionPolicyOnTerminate?: string; 
  public get backupRetentionPolicyOnTerminate() {
    return this.getStringAttribute('backup_retention_policy_on_terminate');
  }
  public set backupRetentionPolicyOnTerminate(value: string) {
    this._backupRetentionPolicyOnTerminate = value;
  }
  public resetBackupRetentionPolicyOnTerminate() {
    this._backupRetentionPolicyOnTerminate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionPolicyOnTerminateInput() {
    return this._backupRetentionPolicyOnTerminate;
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

  // internet_proxy - computed: true, optional: true, required: false
  private _internetProxy?: string; 
  public get internetProxy() {
    return this.getStringAttribute('internet_proxy');
  }
  public set internetProxy(value: string) {
    this._internetProxy = value;
  }
  public resetInternetProxy() {
    this._internetProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetProxyInput() {
    return this._internetProxy;
  }

  // is_remote - computed: true, optional: true, required: false
  private _isRemote?: boolean | cdktf.IResolvable; 
  public get isRemote() {
    return this.getBooleanAttribute('is_remote');
  }
  public set isRemote(value: boolean | cdktf.IResolvable) {
    this._isRemote = value;
  }
  public resetIsRemote() {
    this._isRemote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRemoteInput() {
    return this._isRemote;
  }

  // is_retention_lock_enabled - computed: true, optional: true, required: false
  private _isRetentionLockEnabled?: boolean | cdktf.IResolvable; 
  public get isRetentionLockEnabled() {
    return this.getBooleanAttribute('is_retention_lock_enabled');
  }
  public set isRetentionLockEnabled(value: boolean | cdktf.IResolvable) {
    this._isRetentionLockEnabled = value;
  }
  public resetIsRetentionLockEnabled() {
    this._isRetentionLockEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRetentionLockEnabledInput() {
    return this._isRetentionLockEnabled;
  }

  // remote_region - computed: true, optional: true, required: false
  private _remoteRegion?: string; 
  public get remoteRegion() {
    return this.getStringAttribute('remote_region');
  }
  public set remoteRegion(value: string) {
    this._remoteRegion = value;
  }
  public resetRemoteRegion() {
    this._remoteRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteRegionInput() {
    return this._remoteRegion;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vpc_password - computed: false, optional: true, required: false
  private _vpcPassword?: string; 
  public get vpcPassword() {
    return this.getStringAttribute('vpc_password');
  }
  public set vpcPassword(value: string) {
    this._vpcPassword = value;
  }
  public resetVpcPassword() {
    this._vpcPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcPasswordInput() {
    return this._vpcPassword;
  }

  // vpc_user - computed: true, optional: true, required: false
  private _vpcUser?: string; 
  public get vpcUser() {
    return this.getStringAttribute('vpc_user');
  }
  public set vpcUser(value: string) {
    this._vpcUser = value;
  }
  public resetVpcUser() {
    this._vpcUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcUserInput() {
    return this._vpcUser;
  }
}
export interface DatabaseAutonomousContainerDatabaseBackupConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#recovery_window_in_days DatabaseAutonomousContainerDatabase#recovery_window_in_days}
  */
  readonly recoveryWindowInDays?: number;
  /**
  * backup_destination_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#backup_destination_details DatabaseAutonomousContainerDatabase#backup_destination_details}
  */
  readonly backupDestinationDetails?: DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails;
}

export function databaseAutonomousContainerDatabaseBackupConfigToTerraform(struct?: DatabaseAutonomousContainerDatabaseBackupConfigOutputReference | DatabaseAutonomousContainerDatabaseBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recovery_window_in_days: cdktf.numberToTerraform(struct!.recoveryWindowInDays),
    backup_destination_details: databaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsToTerraform(struct!.backupDestinationDetails),
  }
}


export function databaseAutonomousContainerDatabaseBackupConfigToHclTerraform(struct?: DatabaseAutonomousContainerDatabaseBackupConfigOutputReference | DatabaseAutonomousContainerDatabaseBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recovery_window_in_days: {
      value: cdktf.numberToHclTerraform(struct!.recoveryWindowInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    backup_destination_details: {
      value: databaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsToHclTerraform(struct!.backupDestinationDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseAutonomousContainerDatabaseBackupConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseAutonomousContainerDatabaseBackupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recoveryWindowInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryWindowInDays = this._recoveryWindowInDays;
    }
    if (this._backupDestinationDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupDestinationDetails = this._backupDestinationDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousContainerDatabaseBackupConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recoveryWindowInDays = undefined;
      this._backupDestinationDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recoveryWindowInDays = value.recoveryWindowInDays;
      this._backupDestinationDetails.internalValue = value.backupDestinationDetails;
    }
  }

  // recovery_window_in_days - computed: true, optional: true, required: false
  private _recoveryWindowInDays?: number; 
  public get recoveryWindowInDays() {
    return this.getNumberAttribute('recovery_window_in_days');
  }
  public set recoveryWindowInDays(value: number) {
    this._recoveryWindowInDays = value;
  }
  public resetRecoveryWindowInDays() {
    this._recoveryWindowInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryWindowInDaysInput() {
    return this._recoveryWindowInDays;
  }

  // backup_destination_details - computed: false, optional: true, required: false
  private _backupDestinationDetails = new DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference(this, "backup_destination_details");
  public get backupDestinationDetails() {
    return this._backupDestinationDetails;
  }
  public putBackupDestinationDetails(value: DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails) {
    this._backupDestinationDetails.internalValue = value;
  }
  public resetBackupDestinationDetails() {
    this._backupDestinationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupDestinationDetailsInput() {
    return this._backupDestinationDetails.internalValue;
  }
}
export interface DatabaseAutonomousContainerDatabaseCustomerContacts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#email DatabaseAutonomousContainerDatabase#email}
  */
  readonly email?: string;
}

export function databaseAutonomousContainerDatabaseCustomerContactsToTerraform(struct?: DatabaseAutonomousContainerDatabaseCustomerContacts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
  }
}


export function databaseAutonomousContainerDatabaseCustomerContactsToHclTerraform(struct?: DatabaseAutonomousContainerDatabaseCustomerContacts | cdktf.IResolvable): any {
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

export class DatabaseAutonomousContainerDatabaseCustomerContactsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousContainerDatabaseCustomerContacts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseAutonomousContainerDatabaseCustomerContacts | cdktf.IResolvable | undefined) {
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

export class DatabaseAutonomousContainerDatabaseCustomerContactsList extends cdktf.ComplexList {
  public internalValue? : DatabaseAutonomousContainerDatabaseCustomerContacts[] | cdktf.IResolvable

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
  public get(index: number): DatabaseAutonomousContainerDatabaseCustomerContactsOutputReference {
    return new DatabaseAutonomousContainerDatabaseCustomerContactsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#name DatabaseAutonomousContainerDatabase#name}
  */
  readonly name: string;
}

export function databaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekToTerraform(struct?: DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function databaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekToHclTerraform(struct?: DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek | cdktf.IResolvable): any {
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

export class DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList extends cdktf.ComplexList {
  public internalValue? : DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek[] | cdktf.IResolvable

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
  public get(index: number): DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference {
    return new DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#name DatabaseAutonomousContainerDatabase#name}
  */
  readonly name: string;
}

export function databaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsToTerraform(struct?: DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function databaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsToHclTerraform(struct?: DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths | cdktf.IResolvable): any {
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

export class DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList extends cdktf.ComplexList {
  public internalValue? : DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths[] | cdktf.IResolvable

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
  public get(index: number): DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference {
    return new DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#custom_action_timeout_in_mins DatabaseAutonomousContainerDatabase#custom_action_timeout_in_mins}
  */
  readonly customActionTimeoutInMins?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#hours_of_day DatabaseAutonomousContainerDatabase#hours_of_day}
  */
  readonly hoursOfDay?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#is_custom_action_timeout_enabled DatabaseAutonomousContainerDatabase#is_custom_action_timeout_enabled}
  */
  readonly isCustomActionTimeoutEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#is_monthly_patching_enabled DatabaseAutonomousContainerDatabase#is_monthly_patching_enabled}
  */
  readonly isMonthlyPatchingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#lead_time_in_weeks DatabaseAutonomousContainerDatabase#lead_time_in_weeks}
  */
  readonly leadTimeInWeeks?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#patching_mode DatabaseAutonomousContainerDatabase#patching_mode}
  */
  readonly patchingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#preference DatabaseAutonomousContainerDatabase#preference}
  */
  readonly preference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#skip_ru DatabaseAutonomousContainerDatabase#skip_ru}
  */
  readonly skipRu?: Array<boolean | cdktf.IResolvable> | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#weeks_of_month DatabaseAutonomousContainerDatabase#weeks_of_month}
  */
  readonly weeksOfMonth?: number[];
  /**
  * days_of_week block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#days_of_week DatabaseAutonomousContainerDatabase#days_of_week}
  */
  readonly daysOfWeek?: DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek[] | cdktf.IResolvable;
  /**
  * months block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#months DatabaseAutonomousContainerDatabase#months}
  */
  readonly months?: DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths[] | cdktf.IResolvable;
}

export function databaseAutonomousContainerDatabaseMaintenanceWindowDetailsToTerraform(struct?: DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference | DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_action_timeout_in_mins: cdktf.numberToTerraform(struct!.customActionTimeoutInMins),
    hours_of_day: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.hoursOfDay),
    is_custom_action_timeout_enabled: cdktf.booleanToTerraform(struct!.isCustomActionTimeoutEnabled),
    is_monthly_patching_enabled: cdktf.booleanToTerraform(struct!.isMonthlyPatchingEnabled),
    lead_time_in_weeks: cdktf.numberToTerraform(struct!.leadTimeInWeeks),
    patching_mode: cdktf.stringToTerraform(struct!.patchingMode),
    preference: cdktf.stringToTerraform(struct!.preference),
    skip_ru: cdktf.listMapper(cdktf.booleanToTerraform, false)(struct!.skipRu),
    weeks_of_month: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.weeksOfMonth),
    days_of_week: cdktf.listMapper(databaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekToTerraform, true)(struct!.daysOfWeek),
    months: cdktf.listMapper(databaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsToTerraform, true)(struct!.months),
  }
}


export function databaseAutonomousContainerDatabaseMaintenanceWindowDetailsToHclTerraform(struct?: DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference | DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_action_timeout_in_mins: {
      value: cdktf.numberToHclTerraform(struct!.customActionTimeoutInMins),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hours_of_day: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.hoursOfDay),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    is_custom_action_timeout_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isCustomActionTimeoutEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_monthly_patching_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isMonthlyPatchingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lead_time_in_weeks: {
      value: cdktf.numberToHclTerraform(struct!.leadTimeInWeeks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    patching_mode: {
      value: cdktf.stringToHclTerraform(struct!.patchingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preference: {
      value: cdktf.stringToHclTerraform(struct!.preference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_ru: {
      value: cdktf.listMapperHcl(cdktf.booleanToHclTerraform, false)(struct!.skipRu),
      isBlock: false,
      type: "list",
      storageClassType: "booleanList",
    },
    weeks_of_month: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.weeksOfMonth),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    days_of_week: {
      value: cdktf.listMapperHcl(databaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekToHclTerraform, true)(struct!.daysOfWeek),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList",
    },
    months: {
      value: cdktf.listMapperHcl(databaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsToHclTerraform, true)(struct!.months),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customActionTimeoutInMins !== undefined) {
      hasAnyValues = true;
      internalValueResult.customActionTimeoutInMins = this._customActionTimeoutInMins;
    }
    if (this._hoursOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.hoursOfDay = this._hoursOfDay;
    }
    if (this._isCustomActionTimeoutEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCustomActionTimeoutEnabled = this._isCustomActionTimeoutEnabled;
    }
    if (this._isMonthlyPatchingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMonthlyPatchingEnabled = this._isMonthlyPatchingEnabled;
    }
    if (this._leadTimeInWeeks !== undefined) {
      hasAnyValues = true;
      internalValueResult.leadTimeInWeeks = this._leadTimeInWeeks;
    }
    if (this._patchingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchingMode = this._patchingMode;
    }
    if (this._preference !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference;
    }
    if (this._skipRu !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipRu = this._skipRu;
    }
    if (this._weeksOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeksOfMonth = this._weeksOfMonth;
    }
    if (this._daysOfWeek?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfWeek = this._daysOfWeek?.internalValue;
    }
    if (this._months?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.months = this._months?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customActionTimeoutInMins = undefined;
      this._hoursOfDay = undefined;
      this._isCustomActionTimeoutEnabled = undefined;
      this._isMonthlyPatchingEnabled = undefined;
      this._leadTimeInWeeks = undefined;
      this._patchingMode = undefined;
      this._preference = undefined;
      this._skipRu = undefined;
      this._weeksOfMonth = undefined;
      this._daysOfWeek.internalValue = undefined;
      this._months.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customActionTimeoutInMins = value.customActionTimeoutInMins;
      this._hoursOfDay = value.hoursOfDay;
      this._isCustomActionTimeoutEnabled = value.isCustomActionTimeoutEnabled;
      this._isMonthlyPatchingEnabled = value.isMonthlyPatchingEnabled;
      this._leadTimeInWeeks = value.leadTimeInWeeks;
      this._patchingMode = value.patchingMode;
      this._preference = value.preference;
      this._skipRu = value.skipRu;
      this._weeksOfMonth = value.weeksOfMonth;
      this._daysOfWeek.internalValue = value.daysOfWeek;
      this._months.internalValue = value.months;
    }
  }

  // custom_action_timeout_in_mins - computed: true, optional: true, required: false
  private _customActionTimeoutInMins?: number; 
  public get customActionTimeoutInMins() {
    return this.getNumberAttribute('custom_action_timeout_in_mins');
  }
  public set customActionTimeoutInMins(value: number) {
    this._customActionTimeoutInMins = value;
  }
  public resetCustomActionTimeoutInMins() {
    this._customActionTimeoutInMins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customActionTimeoutInMinsInput() {
    return this._customActionTimeoutInMins;
  }

  // hours_of_day - computed: true, optional: true, required: false
  private _hoursOfDay?: number[]; 
  public get hoursOfDay() {
    return this.getNumberListAttribute('hours_of_day');
  }
  public set hoursOfDay(value: number[]) {
    this._hoursOfDay = value;
  }
  public resetHoursOfDay() {
    this._hoursOfDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursOfDayInput() {
    return this._hoursOfDay;
  }

  // is_custom_action_timeout_enabled - computed: true, optional: true, required: false
  private _isCustomActionTimeoutEnabled?: boolean | cdktf.IResolvable; 
  public get isCustomActionTimeoutEnabled() {
    return this.getBooleanAttribute('is_custom_action_timeout_enabled');
  }
  public set isCustomActionTimeoutEnabled(value: boolean | cdktf.IResolvable) {
    this._isCustomActionTimeoutEnabled = value;
  }
  public resetIsCustomActionTimeoutEnabled() {
    this._isCustomActionTimeoutEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCustomActionTimeoutEnabledInput() {
    return this._isCustomActionTimeoutEnabled;
  }

  // is_monthly_patching_enabled - computed: true, optional: true, required: false
  private _isMonthlyPatchingEnabled?: boolean | cdktf.IResolvable; 
  public get isMonthlyPatchingEnabled() {
    return this.getBooleanAttribute('is_monthly_patching_enabled');
  }
  public set isMonthlyPatchingEnabled(value: boolean | cdktf.IResolvable) {
    this._isMonthlyPatchingEnabled = value;
  }
  public resetIsMonthlyPatchingEnabled() {
    this._isMonthlyPatchingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMonthlyPatchingEnabledInput() {
    return this._isMonthlyPatchingEnabled;
  }

  // lead_time_in_weeks - computed: true, optional: true, required: false
  private _leadTimeInWeeks?: number; 
  public get leadTimeInWeeks() {
    return this.getNumberAttribute('lead_time_in_weeks');
  }
  public set leadTimeInWeeks(value: number) {
    this._leadTimeInWeeks = value;
  }
  public resetLeadTimeInWeeks() {
    this._leadTimeInWeeks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leadTimeInWeeksInput() {
    return this._leadTimeInWeeks;
  }

  // patching_mode - computed: true, optional: true, required: false
  private _patchingMode?: string; 
  public get patchingMode() {
    return this.getStringAttribute('patching_mode');
  }
  public set patchingMode(value: string) {
    this._patchingMode = value;
  }
  public resetPatchingMode() {
    this._patchingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchingModeInput() {
    return this._patchingMode;
  }

  // preference - computed: true, optional: true, required: false
  private _preference?: string; 
  public get preference() {
    return this.getStringAttribute('preference');
  }
  public set preference(value: string) {
    this._preference = value;
  }
  public resetPreference() {
    this._preference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference;
  }

  // skip_ru - computed: true, optional: true, required: false
  private _skipRu?: Array<boolean | cdktf.IResolvable> | cdktf.IResolvable; 
  public get skipRu() {
    return this.interpolationForAttribute('skip_ru');
  }
  public set skipRu(value: Array<boolean | cdktf.IResolvable> | cdktf.IResolvable) {
    this._skipRu = value;
  }
  public resetSkipRu() {
    this._skipRu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipRuInput() {
    return this._skipRu;
  }

  // weeks_of_month - computed: true, optional: true, required: false
  private _weeksOfMonth?: number[]; 
  public get weeksOfMonth() {
    return this.getNumberListAttribute('weeks_of_month');
  }
  public set weeksOfMonth(value: number[]) {
    this._weeksOfMonth = value;
  }
  public resetWeeksOfMonth() {
    this._weeksOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeksOfMonthInput() {
    return this._weeksOfMonth;
  }

  // days_of_week - computed: false, optional: true, required: false
  private _daysOfWeek = new DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList(this, "days_of_week", false);
  public get daysOfWeek() {
    return this._daysOfWeek;
  }
  public putDaysOfWeek(value: DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek[] | cdktf.IResolvable) {
    this._daysOfWeek.internalValue = value;
  }
  public resetDaysOfWeek() {
    this._daysOfWeek.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfWeekInput() {
    return this._daysOfWeek.internalValue;
  }

  // months - computed: false, optional: true, required: false
  private _months = new DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList(this, "months", false);
  public get months() {
    return this._months;
  }
  public putMonths(value: DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths[] | cdktf.IResolvable) {
    this._months.internalValue = value;
  }
  public resetMonths() {
    this._months.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthsInput() {
    return this._months.internalValue;
  }
}
export interface DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#backup_retention_policy_on_terminate DatabaseAutonomousContainerDatabase#backup_retention_policy_on_terminate}
  */
  readonly backupRetentionPolicyOnTerminate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#id DatabaseAutonomousContainerDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#internet_proxy DatabaseAutonomousContainerDatabase#internet_proxy}
  */
  readonly internetProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#is_remote DatabaseAutonomousContainerDatabase#is_remote}
  */
  readonly isRemote?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#is_retention_lock_enabled DatabaseAutonomousContainerDatabase#is_retention_lock_enabled}
  */
  readonly isRetentionLockEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#remote_region DatabaseAutonomousContainerDatabase#remote_region}
  */
  readonly remoteRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#type DatabaseAutonomousContainerDatabase#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#vpc_password DatabaseAutonomousContainerDatabase#vpc_password}
  */
  readonly vpcPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#vpc_user DatabaseAutonomousContainerDatabase#vpc_user}
  */
  readonly vpcUser?: string;
}

export function databaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsToTerraform(struct?: DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_retention_policy_on_terminate: cdktf.stringToTerraform(struct!.backupRetentionPolicyOnTerminate),
    id: cdktf.stringToTerraform(struct!.id),
    internet_proxy: cdktf.stringToTerraform(struct!.internetProxy),
    is_remote: cdktf.booleanToTerraform(struct!.isRemote),
    is_retention_lock_enabled: cdktf.booleanToTerraform(struct!.isRetentionLockEnabled),
    remote_region: cdktf.stringToTerraform(struct!.remoteRegion),
    type: cdktf.stringToTerraform(struct!.type),
    vpc_password: cdktf.stringToTerraform(struct!.vpcPassword),
    vpc_user: cdktf.stringToTerraform(struct!.vpcUser),
  }
}


export function databaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsToHclTerraform(struct?: DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_retention_policy_on_terminate: {
      value: cdktf.stringToHclTerraform(struct!.backupRetentionPolicyOnTerminate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internet_proxy: {
      value: cdktf.stringToHclTerraform(struct!.internetProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_remote: {
      value: cdktf.booleanToHclTerraform(struct!.isRemote),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_retention_lock_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isRetentionLockEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remote_region: {
      value: cdktf.stringToHclTerraform(struct!.remoteRegion),
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
    vpc_password: {
      value: cdktf.stringToHclTerraform(struct!.vpcPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_user: {
      value: cdktf.stringToHclTerraform(struct!.vpcUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupRetentionPolicyOnTerminate !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupRetentionPolicyOnTerminate = this._backupRetentionPolicyOnTerminate;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._internetProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetProxy = this._internetProxy;
    }
    if (this._isRemote !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRemote = this._isRemote;
    }
    if (this._isRetentionLockEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRetentionLockEnabled = this._isRetentionLockEnabled;
    }
    if (this._remoteRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteRegion = this._remoteRegion;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vpcPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcPassword = this._vpcPassword;
    }
    if (this._vpcUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcUser = this._vpcUser;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupRetentionPolicyOnTerminate = undefined;
      this._id = undefined;
      this._internetProxy = undefined;
      this._isRemote = undefined;
      this._isRetentionLockEnabled = undefined;
      this._remoteRegion = undefined;
      this._type = undefined;
      this._vpcPassword = undefined;
      this._vpcUser = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupRetentionPolicyOnTerminate = value.backupRetentionPolicyOnTerminate;
      this._id = value.id;
      this._internetProxy = value.internetProxy;
      this._isRemote = value.isRemote;
      this._isRetentionLockEnabled = value.isRetentionLockEnabled;
      this._remoteRegion = value.remoteRegion;
      this._type = value.type;
      this._vpcPassword = value.vpcPassword;
      this._vpcUser = value.vpcUser;
    }
  }

  // backup_retention_policy_on_terminate - computed: true, optional: true, required: false
  private _backupRetentionPolicyOnTerminate?: string; 
  public get backupRetentionPolicyOnTerminate() {
    return this.getStringAttribute('backup_retention_policy_on_terminate');
  }
  public set backupRetentionPolicyOnTerminate(value: string) {
    this._backupRetentionPolicyOnTerminate = value;
  }
  public resetBackupRetentionPolicyOnTerminate() {
    this._backupRetentionPolicyOnTerminate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionPolicyOnTerminateInput() {
    return this._backupRetentionPolicyOnTerminate;
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

  // internet_proxy - computed: true, optional: true, required: false
  private _internetProxy?: string; 
  public get internetProxy() {
    return this.getStringAttribute('internet_proxy');
  }
  public set internetProxy(value: string) {
    this._internetProxy = value;
  }
  public resetInternetProxy() {
    this._internetProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetProxyInput() {
    return this._internetProxy;
  }

  // is_remote - computed: true, optional: true, required: false
  private _isRemote?: boolean | cdktf.IResolvable; 
  public get isRemote() {
    return this.getBooleanAttribute('is_remote');
  }
  public set isRemote(value: boolean | cdktf.IResolvable) {
    this._isRemote = value;
  }
  public resetIsRemote() {
    this._isRemote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRemoteInput() {
    return this._isRemote;
  }

  // is_retention_lock_enabled - computed: true, optional: true, required: false
  private _isRetentionLockEnabled?: boolean | cdktf.IResolvable; 
  public get isRetentionLockEnabled() {
    return this.getBooleanAttribute('is_retention_lock_enabled');
  }
  public set isRetentionLockEnabled(value: boolean | cdktf.IResolvable) {
    this._isRetentionLockEnabled = value;
  }
  public resetIsRetentionLockEnabled() {
    this._isRetentionLockEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRetentionLockEnabledInput() {
    return this._isRetentionLockEnabled;
  }

  // remote_region - computed: true, optional: true, required: false
  private _remoteRegion?: string; 
  public get remoteRegion() {
    return this.getStringAttribute('remote_region');
  }
  public set remoteRegion(value: string) {
    this._remoteRegion = value;
  }
  public resetRemoteRegion() {
    this._remoteRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteRegionInput() {
    return this._remoteRegion;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vpc_password - computed: true, optional: true, required: false
  private _vpcPassword?: string; 
  public get vpcPassword() {
    return this.getStringAttribute('vpc_password');
  }
  public set vpcPassword(value: string) {
    this._vpcPassword = value;
  }
  public resetVpcPassword() {
    this._vpcPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcPasswordInput() {
    return this._vpcPassword;
  }

  // vpc_user - computed: true, optional: true, required: false
  private _vpcUser?: string; 
  public get vpcUser() {
    return this.getStringAttribute('vpc_user');
  }
  public set vpcUser(value: string) {
    this._vpcUser = value;
  }
  public resetVpcUser() {
    this._vpcUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcUserInput() {
    return this._vpcUser;
  }
}

export class DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList extends cdktf.ComplexList {
  public internalValue? : DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails[] | cdktf.IResolvable

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
  public get(index: number): DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference {
    return new DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#recovery_window_in_days DatabaseAutonomousContainerDatabase#recovery_window_in_days}
  */
  readonly recoveryWindowInDays?: number;
  /**
  * backup_destination_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#backup_destination_details DatabaseAutonomousContainerDatabase#backup_destination_details}
  */
  readonly backupDestinationDetails?: DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails[] | cdktf.IResolvable;
}

export function databaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigToTerraform(struct?: DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference | DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recovery_window_in_days: cdktf.numberToTerraform(struct!.recoveryWindowInDays),
    backup_destination_details: cdktf.listMapper(databaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsToTerraform, true)(struct!.backupDestinationDetails),
  }
}


export function databaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigToHclTerraform(struct?: DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference | DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recovery_window_in_days: {
      value: cdktf.numberToHclTerraform(struct!.recoveryWindowInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    backup_destination_details: {
      value: cdktf.listMapperHcl(databaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsToHclTerraform, true)(struct!.backupDestinationDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recoveryWindowInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryWindowInDays = this._recoveryWindowInDays;
    }
    if (this._backupDestinationDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupDestinationDetails = this._backupDestinationDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recoveryWindowInDays = undefined;
      this._backupDestinationDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recoveryWindowInDays = value.recoveryWindowInDays;
      this._backupDestinationDetails.internalValue = value.backupDestinationDetails;
    }
  }

  // recovery_window_in_days - computed: true, optional: true, required: false
  private _recoveryWindowInDays?: number; 
  public get recoveryWindowInDays() {
    return this.getNumberAttribute('recovery_window_in_days');
  }
  public set recoveryWindowInDays(value: number) {
    this._recoveryWindowInDays = value;
  }
  public resetRecoveryWindowInDays() {
    this._recoveryWindowInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryWindowInDaysInput() {
    return this._recoveryWindowInDays;
  }

  // backup_destination_details - computed: false, optional: true, required: false
  private _backupDestinationDetails = new DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList(this, "backup_destination_details", false);
  public get backupDestinationDetails() {
    return this._backupDestinationDetails;
  }
  public putBackupDestinationDetails(value: DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails[] | cdktf.IResolvable) {
    this._backupDestinationDetails.internalValue = value;
  }
  public resetBackupDestinationDetails() {
    this._backupDestinationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupDestinationDetailsInput() {
    return this._backupDestinationDetails.internalValue;
  }
}
export interface DatabaseAutonomousContainerDatabaseTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#create DatabaseAutonomousContainerDatabase#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#delete DatabaseAutonomousContainerDatabase#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#update DatabaseAutonomousContainerDatabase#update}
  */
  readonly update?: string;
}

export function databaseAutonomousContainerDatabaseTimeoutsToTerraform(struct?: DatabaseAutonomousContainerDatabaseTimeouts | cdktf.IResolvable): any {
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


export function databaseAutonomousContainerDatabaseTimeoutsToHclTerraform(struct?: DatabaseAutonomousContainerDatabaseTimeouts | cdktf.IResolvable): any {
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

export class DatabaseAutonomousContainerDatabaseTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseAutonomousContainerDatabaseTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseAutonomousContainerDatabaseTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database oci_database_autonomous_container_database}
*/
export class DatabaseAutonomousContainerDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_autonomous_container_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseAutonomousContainerDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseAutonomousContainerDatabase to import
  * @param importFromId The id of the existing DatabaseAutonomousContainerDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseAutonomousContainerDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_autonomous_container_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_container_database oci_database_autonomous_container_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseAutonomousContainerDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseAutonomousContainerDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_autonomous_container_database',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autonomousContainerDatabaseBackupId = config.autonomousContainerDatabaseBackupId;
    this._autonomousExadataInfrastructureId = config.autonomousExadataInfrastructureId;
    this._autonomousVmClusterId = config.autonomousVmClusterId;
    this._cloudAutonomousVmClusterId = config.cloudAutonomousVmClusterId;
    this._compartmentId = config.compartmentId;
    this._databaseSoftwareImageId = config.databaseSoftwareImageId;
    this._dbName = config.dbName;
    this._dbSplitThreshold = config.dbSplitThreshold;
    this._dbUniqueName = config.dbUniqueName;
    this._dbVersion = config.dbVersion;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._distributionAffinity = config.distributionAffinity;
    this._failoverTrigger = config.failoverTrigger;
    this._fastStartFailOverLagLimitInSeconds = config.fastStartFailOverLagLimitInSeconds;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isAutomaticFailoverEnabled = config.isAutomaticFailoverEnabled;
    this._isDstFileUpdateEnabled = config.isDstFileUpdateEnabled;
    this._keyStoreId = config.keyStoreId;
    this._keyVersionId = config.keyVersionId;
    this._kmsKeyId = config.kmsKeyId;
    this._netServicesArchitecture = config.netServicesArchitecture;
    this._okvEndPointGroupName = config.okvEndPointGroupName;
    this._patchModel = config.patchModel;
    this._peerAutonomousContainerDatabaseCompartmentId = config.peerAutonomousContainerDatabaseCompartmentId;
    this._peerAutonomousContainerDatabaseDisplayName = config.peerAutonomousContainerDatabaseDisplayName;
    this._peerAutonomousExadataInfrastructureId = config.peerAutonomousExadataInfrastructureId;
    this._peerAutonomousVmClusterId = config.peerAutonomousVmClusterId;
    this._peerCloudAutonomousVmClusterId = config.peerCloudAutonomousVmClusterId;
    this._peerDbUniqueName = config.peerDbUniqueName;
    this._protectionMode = config.protectionMode;
    this._reinstateTrigger = config.reinstateTrigger;
    this._rotateKeyTrigger = config.rotateKeyTrigger;
    this._serviceLevelAgreementType = config.serviceLevelAgreementType;
    this._source = config.source;
    this._standbyMaintenanceBufferInDays = config.standbyMaintenanceBufferInDays;
    this._switchoverTrigger = config.switchoverTrigger;
    this._vaultId = config.vaultId;
    this._versionPreference = config.versionPreference;
    this._vmFailoverReservation = config.vmFailoverReservation;
    this._backupConfig.internalValue = config.backupConfig;
    this._customerContacts.internalValue = config.customerContacts;
    this._maintenanceWindowDetails.internalValue = config.maintenanceWindowDetails;
    this._peerAutonomousContainerDatabaseBackupConfig.internalValue = config.peerAutonomousContainerDatabaseBackupConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_backup_configuration_details - computed: true, optional: false, required: false
  private _associatedBackupConfigurationDetails = new DatabaseAutonomousContainerDatabaseAssociatedBackupConfigurationDetailsList(this, "associated_backup_configuration_details", false);
  public get associatedBackupConfigurationDetails() {
    return this._associatedBackupConfigurationDetails;
  }

  // autonomous_container_database_backup_id - computed: true, optional: true, required: false
  private _autonomousContainerDatabaseBackupId?: string; 
  public get autonomousContainerDatabaseBackupId() {
    return this.getStringAttribute('autonomous_container_database_backup_id');
  }
  public set autonomousContainerDatabaseBackupId(value: string) {
    this._autonomousContainerDatabaseBackupId = value;
  }
  public resetAutonomousContainerDatabaseBackupId() {
    this._autonomousContainerDatabaseBackupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousContainerDatabaseBackupIdInput() {
    return this._autonomousContainerDatabaseBackupId;
  }

  // autonomous_exadata_infrastructure_id - computed: true, optional: true, required: false
  private _autonomousExadataInfrastructureId?: string; 
  public get autonomousExadataInfrastructureId() {
    return this.getStringAttribute('autonomous_exadata_infrastructure_id');
  }
  public set autonomousExadataInfrastructureId(value: string) {
    this._autonomousExadataInfrastructureId = value;
  }
  public resetAutonomousExadataInfrastructureId() {
    this._autonomousExadataInfrastructureId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousExadataInfrastructureIdInput() {
    return this._autonomousExadataInfrastructureId;
  }

  // autonomous_vm_cluster_id - computed: true, optional: true, required: false
  private _autonomousVmClusterId?: string; 
  public get autonomousVmClusterId() {
    return this.getStringAttribute('autonomous_vm_cluster_id');
  }
  public set autonomousVmClusterId(value: string) {
    this._autonomousVmClusterId = value;
  }
  public resetAutonomousVmClusterId() {
    this._autonomousVmClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousVmClusterIdInput() {
    return this._autonomousVmClusterId;
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // available_cpus - computed: true, optional: false, required: false
  public get availableCpus() {
    return this.getNumberAttribute('available_cpus');
  }

  // backup_destination_properties_list - computed: true, optional: false, required: false
  private _backupDestinationPropertiesList = new DatabaseAutonomousContainerDatabaseBackupDestinationPropertiesListStructList(this, "backup_destination_properties_list", false);
  public get backupDestinationPropertiesList() {
    return this._backupDestinationPropertiesList;
  }

  // cloud_autonomous_vm_cluster_id - computed: true, optional: true, required: false
  private _cloudAutonomousVmClusterId?: string; 
  public get cloudAutonomousVmClusterId() {
    return this.getStringAttribute('cloud_autonomous_vm_cluster_id');
  }
  public set cloudAutonomousVmClusterId(value: string) {
    this._cloudAutonomousVmClusterId = value;
  }
  public resetCloudAutonomousVmClusterId() {
    this._cloudAutonomousVmClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAutonomousVmClusterIdInput() {
    return this._cloudAutonomousVmClusterId;
  }

  // compartment_id - computed: true, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // compute_model - computed: true, optional: false, required: false
  public get computeModel() {
    return this.getStringAttribute('compute_model');
  }

  // database_software_image_id - computed: true, optional: true, required: false
  private _databaseSoftwareImageId?: string; 
  public get databaseSoftwareImageId() {
    return this.getStringAttribute('database_software_image_id');
  }
  public set databaseSoftwareImageId(value: string) {
    this._databaseSoftwareImageId = value;
  }
  public resetDatabaseSoftwareImageId() {
    this._databaseSoftwareImageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseSoftwareImageIdInput() {
    return this._databaseSoftwareImageId;
  }

  // dataguard - computed: true, optional: false, required: false
  private _dataguard = new DatabaseAutonomousContainerDatabaseDataguardList(this, "dataguard", false);
  public get dataguard() {
    return this._dataguard;
  }

  // dataguard_group_members - computed: true, optional: false, required: false
  private _dataguardGroupMembers = new DatabaseAutonomousContainerDatabaseDataguardGroupMembersList(this, "dataguard_group_members", false);
  public get dataguardGroupMembers() {
    return this._dataguardGroupMembers;
  }

  // db_name - computed: true, optional: true, required: false
  private _dbName?: string; 
  public get dbName() {
    return this.getStringAttribute('db_name');
  }
  public set dbName(value: string) {
    this._dbName = value;
  }
  public resetDbName() {
    this._dbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNameInput() {
    return this._dbName;
  }

  // db_split_threshold - computed: true, optional: true, required: false
  private _dbSplitThreshold?: number; 
  public get dbSplitThreshold() {
    return this.getNumberAttribute('db_split_threshold');
  }
  public set dbSplitThreshold(value: number) {
    this._dbSplitThreshold = value;
  }
  public resetDbSplitThreshold() {
    this._dbSplitThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSplitThresholdInput() {
    return this._dbSplitThreshold;
  }

  // db_unique_name - computed: true, optional: true, required: false
  private _dbUniqueName?: string; 
  public get dbUniqueName() {
    return this.getStringAttribute('db_unique_name');
  }
  public set dbUniqueName(value: string) {
    this._dbUniqueName = value;
  }
  public resetDbUniqueName() {
    this._dbUniqueName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbUniqueNameInput() {
    return this._dbUniqueName;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // distribution_affinity - computed: true, optional: true, required: false
  private _distributionAffinity?: string; 
  public get distributionAffinity() {
    return this.getStringAttribute('distribution_affinity');
  }
  public set distributionAffinity(value: string) {
    this._distributionAffinity = value;
  }
  public resetDistributionAffinity() {
    this._distributionAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionAffinityInput() {
    return this._distributionAffinity;
  }

  // dst_file_version - computed: true, optional: false, required: false
  public get dstFileVersion() {
    return this.getStringAttribute('dst_file_version');
  }

  // failover_trigger - computed: false, optional: true, required: false
  private _failoverTrigger?: number; 
  public get failoverTrigger() {
    return this.getNumberAttribute('failover_trigger');
  }
  public set failoverTrigger(value: number) {
    this._failoverTrigger = value;
  }
  public resetFailoverTrigger() {
    this._failoverTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverTriggerInput() {
    return this._failoverTrigger;
  }

  // fast_start_fail_over_lag_limit_in_seconds - computed: true, optional: true, required: false
  private _fastStartFailOverLagLimitInSeconds?: number; 
  public get fastStartFailOverLagLimitInSeconds() {
    return this.getNumberAttribute('fast_start_fail_over_lag_limit_in_seconds');
  }
  public set fastStartFailOverLagLimitInSeconds(value: number) {
    this._fastStartFailOverLagLimitInSeconds = value;
  }
  public resetFastStartFailOverLagLimitInSeconds() {
    this._fastStartFailOverLagLimitInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastStartFailOverLagLimitInSecondsInput() {
    return this._fastStartFailOverLagLimitInSeconds;
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

  // infrastructure_type - computed: true, optional: false, required: false
  public get infrastructureType() {
    return this.getStringAttribute('infrastructure_type');
  }

  // is_automatic_failover_enabled - computed: true, optional: true, required: false
  private _isAutomaticFailoverEnabled?: boolean | cdktf.IResolvable; 
  public get isAutomaticFailoverEnabled() {
    return this.getBooleanAttribute('is_automatic_failover_enabled');
  }
  public set isAutomaticFailoverEnabled(value: boolean | cdktf.IResolvable) {
    this._isAutomaticFailoverEnabled = value;
  }
  public resetIsAutomaticFailoverEnabled() {
    this._isAutomaticFailoverEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutomaticFailoverEnabledInput() {
    return this._isAutomaticFailoverEnabled;
  }

  // is_data_guard_enabled - computed: true, optional: false, required: false
  public get isDataGuardEnabled() {
    return this.getBooleanAttribute('is_data_guard_enabled');
  }

  // is_dst_file_update_enabled - computed: true, optional: true, required: false
  private _isDstFileUpdateEnabled?: boolean | cdktf.IResolvable; 
  public get isDstFileUpdateEnabled() {
    return this.getBooleanAttribute('is_dst_file_update_enabled');
  }
  public set isDstFileUpdateEnabled(value: boolean | cdktf.IResolvable) {
    this._isDstFileUpdateEnabled = value;
  }
  public resetIsDstFileUpdateEnabled() {
    this._isDstFileUpdateEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDstFileUpdateEnabledInput() {
    return this._isDstFileUpdateEnabled;
  }

  // is_multiple_standby - computed: true, optional: false, required: false
  public get isMultipleStandby() {
    return this.getBooleanAttribute('is_multiple_standby');
  }

  // key_history_entry - computed: true, optional: false, required: false
  private _keyHistoryEntry = new DatabaseAutonomousContainerDatabaseKeyHistoryEntryList(this, "key_history_entry", false);
  public get keyHistoryEntry() {
    return this._keyHistoryEntry;
  }

  // key_store_id - computed: true, optional: true, required: false
  private _keyStoreId?: string; 
  public get keyStoreId() {
    return this.getStringAttribute('key_store_id');
  }
  public set keyStoreId(value: string) {
    this._keyStoreId = value;
  }
  public resetKeyStoreId() {
    this._keyStoreId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStoreIdInput() {
    return this._keyStoreId;
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

  // kms_key_version_id - computed: true, optional: false, required: false
  public get kmsKeyVersionId() {
    return this.getStringAttribute('kms_key_version_id');
  }

  // largest_provisionable_autonomous_database_in_cpus - computed: true, optional: false, required: false
  public get largestProvisionableAutonomousDatabaseInCpus() {
    return this.getNumberAttribute('largest_provisionable_autonomous_database_in_cpus');
  }

  // last_maintenance_run_id - computed: true, optional: false, required: false
  public get lastMaintenanceRunId() {
    return this.getStringAttribute('last_maintenance_run_id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // list_one_off_patches - computed: true, optional: false, required: false
  public get listOneOffPatches() {
    return this.getListAttribute('list_one_off_patches');
  }

  // maintenance_window - computed: true, optional: false, required: false
  private _maintenanceWindow = new DatabaseAutonomousContainerDatabaseMaintenanceWindowList(this, "maintenance_window", false);
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }

  // memory_per_compute_unit_in_gbs - computed: true, optional: false, required: false
  public get memoryPerComputeUnitInGbs() {
    return this.getNumberAttribute('memory_per_compute_unit_in_gbs');
  }

  // memory_per_oracle_compute_unit_in_gbs - computed: true, optional: false, required: false
  public get memoryPerOracleComputeUnitInGbs() {
    return this.getNumberAttribute('memory_per_oracle_compute_unit_in_gbs');
  }

  // net_services_architecture - computed: true, optional: true, required: false
  private _netServicesArchitecture?: string; 
  public get netServicesArchitecture() {
    return this.getStringAttribute('net_services_architecture');
  }
  public set netServicesArchitecture(value: string) {
    this._netServicesArchitecture = value;
  }
  public resetNetServicesArchitecture() {
    this._netServicesArchitecture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netServicesArchitectureInput() {
    return this._netServicesArchitecture;
  }

  // next_maintenance_run_id - computed: true, optional: false, required: false
  public get nextMaintenanceRunId() {
    return this.getStringAttribute('next_maintenance_run_id');
  }

  // okv_end_point_group_name - computed: true, optional: true, required: false
  private _okvEndPointGroupName?: string; 
  public get okvEndPointGroupName() {
    return this.getStringAttribute('okv_end_point_group_name');
  }
  public set okvEndPointGroupName(value: string) {
    this._okvEndPointGroupName = value;
  }
  public resetOkvEndPointGroupName() {
    this._okvEndPointGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get okvEndPointGroupNameInput() {
    return this._okvEndPointGroupName;
  }

  // patch_id - computed: true, optional: false, required: false
  public get patchId() {
    return this.getStringAttribute('patch_id');
  }

  // patch_model - computed: false, optional: false, required: true
  private _patchModel?: string; 
  public get patchModel() {
    return this.getStringAttribute('patch_model');
  }
  public set patchModel(value: string) {
    this._patchModel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patchModelInput() {
    return this._patchModel;
  }

  // peer_autonomous_container_database_compartment_id - computed: true, optional: true, required: false
  private _peerAutonomousContainerDatabaseCompartmentId?: string; 
  public get peerAutonomousContainerDatabaseCompartmentId() {
    return this.getStringAttribute('peer_autonomous_container_database_compartment_id');
  }
  public set peerAutonomousContainerDatabaseCompartmentId(value: string) {
    this._peerAutonomousContainerDatabaseCompartmentId = value;
  }
  public resetPeerAutonomousContainerDatabaseCompartmentId() {
    this._peerAutonomousContainerDatabaseCompartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAutonomousContainerDatabaseCompartmentIdInput() {
    return this._peerAutonomousContainerDatabaseCompartmentId;
  }

  // peer_autonomous_container_database_display_name - computed: true, optional: true, required: false
  private _peerAutonomousContainerDatabaseDisplayName?: string; 
  public get peerAutonomousContainerDatabaseDisplayName() {
    return this.getStringAttribute('peer_autonomous_container_database_display_name');
  }
  public set peerAutonomousContainerDatabaseDisplayName(value: string) {
    this._peerAutonomousContainerDatabaseDisplayName = value;
  }
  public resetPeerAutonomousContainerDatabaseDisplayName() {
    this._peerAutonomousContainerDatabaseDisplayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAutonomousContainerDatabaseDisplayNameInput() {
    return this._peerAutonomousContainerDatabaseDisplayName;
  }

  // peer_autonomous_exadata_infrastructure_id - computed: true, optional: true, required: false
  private _peerAutonomousExadataInfrastructureId?: string; 
  public get peerAutonomousExadataInfrastructureId() {
    return this.getStringAttribute('peer_autonomous_exadata_infrastructure_id');
  }
  public set peerAutonomousExadataInfrastructureId(value: string) {
    this._peerAutonomousExadataInfrastructureId = value;
  }
  public resetPeerAutonomousExadataInfrastructureId() {
    this._peerAutonomousExadataInfrastructureId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAutonomousExadataInfrastructureIdInput() {
    return this._peerAutonomousExadataInfrastructureId;
  }

  // peer_autonomous_vm_cluster_id - computed: true, optional: true, required: false
  private _peerAutonomousVmClusterId?: string; 
  public get peerAutonomousVmClusterId() {
    return this.getStringAttribute('peer_autonomous_vm_cluster_id');
  }
  public set peerAutonomousVmClusterId(value: string) {
    this._peerAutonomousVmClusterId = value;
  }
  public resetPeerAutonomousVmClusterId() {
    this._peerAutonomousVmClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAutonomousVmClusterIdInput() {
    return this._peerAutonomousVmClusterId;
  }

  // peer_cloud_autonomous_vm_cluster_id - computed: true, optional: true, required: false
  private _peerCloudAutonomousVmClusterId?: string; 
  public get peerCloudAutonomousVmClusterId() {
    return this.getStringAttribute('peer_cloud_autonomous_vm_cluster_id');
  }
  public set peerCloudAutonomousVmClusterId(value: string) {
    this._peerCloudAutonomousVmClusterId = value;
  }
  public resetPeerCloudAutonomousVmClusterId() {
    this._peerCloudAutonomousVmClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerCloudAutonomousVmClusterIdInput() {
    return this._peerCloudAutonomousVmClusterId;
  }

  // peer_db_unique_name - computed: true, optional: true, required: false
  private _peerDbUniqueName?: string; 
  public get peerDbUniqueName() {
    return this.getStringAttribute('peer_db_unique_name');
  }
  public set peerDbUniqueName(value: string) {
    this._peerDbUniqueName = value;
  }
  public resetPeerDbUniqueName() {
    this._peerDbUniqueName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerDbUniqueNameInput() {
    return this._peerDbUniqueName;
  }

  // protection_mode - computed: true, optional: true, required: false
  private _protectionMode?: string; 
  public get protectionMode() {
    return this.getStringAttribute('protection_mode');
  }
  public set protectionMode(value: string) {
    this._protectionMode = value;
  }
  public resetProtectionMode() {
    this._protectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionModeInput() {
    return this._protectionMode;
  }

  // provisionable_cpus - computed: true, optional: false, required: false
  public get provisionableCpus() {
    return this.getNumberListAttribute('provisionable_cpus');
  }

  // provisioned_cpus - computed: true, optional: false, required: false
  public get provisionedCpus() {
    return this.getNumberAttribute('provisioned_cpus');
  }

  // reclaimable_cpus - computed: true, optional: false, required: false
  public get reclaimableCpus() {
    return this.getNumberAttribute('reclaimable_cpus');
  }

  // recovery_appliance_details - computed: true, optional: false, required: false
  private _recoveryApplianceDetails = new DatabaseAutonomousContainerDatabaseRecoveryApplianceDetailsList(this, "recovery_appliance_details", false);
  public get recoveryApplianceDetails() {
    return this._recoveryApplianceDetails;
  }

  // reinstate_trigger - computed: false, optional: true, required: false
  private _reinstateTrigger?: number; 
  public get reinstateTrigger() {
    return this.getNumberAttribute('reinstate_trigger');
  }
  public set reinstateTrigger(value: number) {
    this._reinstateTrigger = value;
  }
  public resetReinstateTrigger() {
    this._reinstateTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reinstateTriggerInput() {
    return this._reinstateTrigger;
  }

  // reserved_cpus - computed: true, optional: false, required: false
  public get reservedCpus() {
    return this.getNumberAttribute('reserved_cpus');
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

  // service_level_agreement_type - computed: true, optional: true, required: false
  private _serviceLevelAgreementType?: string; 
  public get serviceLevelAgreementType() {
    return this.getStringAttribute('service_level_agreement_type');
  }
  public set serviceLevelAgreementType(value: string) {
    this._serviceLevelAgreementType = value;
  }
  public resetServiceLevelAgreementType() {
    this._serviceLevelAgreementType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLevelAgreementTypeInput() {
    return this._serviceLevelAgreementType;
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

  // standby_maintenance_buffer_in_days - computed: true, optional: true, required: false
  private _standbyMaintenanceBufferInDays?: number; 
  public get standbyMaintenanceBufferInDays() {
    return this.getNumberAttribute('standby_maintenance_buffer_in_days');
  }
  public set standbyMaintenanceBufferInDays(value: number) {
    this._standbyMaintenanceBufferInDays = value;
  }
  public resetStandbyMaintenanceBufferInDays() {
    this._standbyMaintenanceBufferInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyMaintenanceBufferInDaysInput() {
    return this._standbyMaintenanceBufferInDays;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // switchover_trigger - computed: false, optional: true, required: false
  private _switchoverTrigger?: number; 
  public get switchoverTrigger() {
    return this.getNumberAttribute('switchover_trigger');
  }
  public set switchoverTrigger(value: number) {
    this._switchoverTrigger = value;
  }
  public resetSwitchoverTrigger() {
    this._switchoverTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchoverTriggerInput() {
    return this._switchoverTrigger;
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

  // time_of_last_backup - computed: true, optional: false, required: false
  public get timeOfLastBackup() {
    return this.getStringAttribute('time_of_last_backup');
  }

  // time_snapshot_standby_revert - computed: true, optional: false, required: false
  public get timeSnapshotStandbyRevert() {
    return this.getStringAttribute('time_snapshot_standby_revert');
  }

  // total_cpus - computed: true, optional: false, required: false
  public get totalCpus() {
    return this.getNumberAttribute('total_cpus');
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

  // version_preference - computed: true, optional: true, required: false
  private _versionPreference?: string; 
  public get versionPreference() {
    return this.getStringAttribute('version_preference');
  }
  public set versionPreference(value: string) {
    this._versionPreference = value;
  }
  public resetVersionPreference() {
    this._versionPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionPreferenceInput() {
    return this._versionPreference;
  }

  // vm_failover_reservation - computed: true, optional: true, required: false
  private _vmFailoverReservation?: number; 
  public get vmFailoverReservation() {
    return this.getNumberAttribute('vm_failover_reservation');
  }
  public set vmFailoverReservation(value: number) {
    this._vmFailoverReservation = value;
  }
  public resetVmFailoverReservation() {
    this._vmFailoverReservation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmFailoverReservationInput() {
    return this._vmFailoverReservation;
  }

  // backup_config - computed: false, optional: true, required: false
  private _backupConfig = new DatabaseAutonomousContainerDatabaseBackupConfigOutputReference(this, "backup_config");
  public get backupConfig() {
    return this._backupConfig;
  }
  public putBackupConfig(value: DatabaseAutonomousContainerDatabaseBackupConfig) {
    this._backupConfig.internalValue = value;
  }
  public resetBackupConfig() {
    this._backupConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupConfigInput() {
    return this._backupConfig.internalValue;
  }

  // customer_contacts - computed: false, optional: true, required: false
  private _customerContacts = new DatabaseAutonomousContainerDatabaseCustomerContactsList(this, "customer_contacts", false);
  public get customerContacts() {
    return this._customerContacts;
  }
  public putCustomerContacts(value: DatabaseAutonomousContainerDatabaseCustomerContacts[] | cdktf.IResolvable) {
    this._customerContacts.internalValue = value;
  }
  public resetCustomerContacts() {
    this._customerContacts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerContactsInput() {
    return this._customerContacts.internalValue;
  }

  // maintenance_window_details - computed: false, optional: true, required: false
  private _maintenanceWindowDetails = new DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference(this, "maintenance_window_details");
  public get maintenanceWindowDetails() {
    return this._maintenanceWindowDetails;
  }
  public putMaintenanceWindowDetails(value: DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails) {
    this._maintenanceWindowDetails.internalValue = value;
  }
  public resetMaintenanceWindowDetails() {
    this._maintenanceWindowDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowDetailsInput() {
    return this._maintenanceWindowDetails.internalValue;
  }

  // peer_autonomous_container_database_backup_config - computed: false, optional: true, required: false
  private _peerAutonomousContainerDatabaseBackupConfig = new DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference(this, "peer_autonomous_container_database_backup_config");
  public get peerAutonomousContainerDatabaseBackupConfig() {
    return this._peerAutonomousContainerDatabaseBackupConfig;
  }
  public putPeerAutonomousContainerDatabaseBackupConfig(value: DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig) {
    this._peerAutonomousContainerDatabaseBackupConfig.internalValue = value;
  }
  public resetPeerAutonomousContainerDatabaseBackupConfig() {
    this._peerAutonomousContainerDatabaseBackupConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAutonomousContainerDatabaseBackupConfigInput() {
    return this._peerAutonomousContainerDatabaseBackupConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseAutonomousContainerDatabaseTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseAutonomousContainerDatabaseTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      autonomous_container_database_backup_id: cdktf.stringToTerraform(this._autonomousContainerDatabaseBackupId),
      autonomous_exadata_infrastructure_id: cdktf.stringToTerraform(this._autonomousExadataInfrastructureId),
      autonomous_vm_cluster_id: cdktf.stringToTerraform(this._autonomousVmClusterId),
      cloud_autonomous_vm_cluster_id: cdktf.stringToTerraform(this._cloudAutonomousVmClusterId),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      database_software_image_id: cdktf.stringToTerraform(this._databaseSoftwareImageId),
      db_name: cdktf.stringToTerraform(this._dbName),
      db_split_threshold: cdktf.numberToTerraform(this._dbSplitThreshold),
      db_unique_name: cdktf.stringToTerraform(this._dbUniqueName),
      db_version: cdktf.stringToTerraform(this._dbVersion),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      distribution_affinity: cdktf.stringToTerraform(this._distributionAffinity),
      failover_trigger: cdktf.numberToTerraform(this._failoverTrigger),
      fast_start_fail_over_lag_limit_in_seconds: cdktf.numberToTerraform(this._fastStartFailOverLagLimitInSeconds),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_automatic_failover_enabled: cdktf.booleanToTerraform(this._isAutomaticFailoverEnabled),
      is_dst_file_update_enabled: cdktf.booleanToTerraform(this._isDstFileUpdateEnabled),
      key_store_id: cdktf.stringToTerraform(this._keyStoreId),
      key_version_id: cdktf.stringToTerraform(this._keyVersionId),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      net_services_architecture: cdktf.stringToTerraform(this._netServicesArchitecture),
      okv_end_point_group_name: cdktf.stringToTerraform(this._okvEndPointGroupName),
      patch_model: cdktf.stringToTerraform(this._patchModel),
      peer_autonomous_container_database_compartment_id: cdktf.stringToTerraform(this._peerAutonomousContainerDatabaseCompartmentId),
      peer_autonomous_container_database_display_name: cdktf.stringToTerraform(this._peerAutonomousContainerDatabaseDisplayName),
      peer_autonomous_exadata_infrastructure_id: cdktf.stringToTerraform(this._peerAutonomousExadataInfrastructureId),
      peer_autonomous_vm_cluster_id: cdktf.stringToTerraform(this._peerAutonomousVmClusterId),
      peer_cloud_autonomous_vm_cluster_id: cdktf.stringToTerraform(this._peerCloudAutonomousVmClusterId),
      peer_db_unique_name: cdktf.stringToTerraform(this._peerDbUniqueName),
      protection_mode: cdktf.stringToTerraform(this._protectionMode),
      reinstate_trigger: cdktf.numberToTerraform(this._reinstateTrigger),
      rotate_key_trigger: cdktf.booleanToTerraform(this._rotateKeyTrigger),
      service_level_agreement_type: cdktf.stringToTerraform(this._serviceLevelAgreementType),
      source: cdktf.stringToTerraform(this._source),
      standby_maintenance_buffer_in_days: cdktf.numberToTerraform(this._standbyMaintenanceBufferInDays),
      switchover_trigger: cdktf.numberToTerraform(this._switchoverTrigger),
      vault_id: cdktf.stringToTerraform(this._vaultId),
      version_preference: cdktf.stringToTerraform(this._versionPreference),
      vm_failover_reservation: cdktf.numberToTerraform(this._vmFailoverReservation),
      backup_config: databaseAutonomousContainerDatabaseBackupConfigToTerraform(this._backupConfig.internalValue),
      customer_contacts: cdktf.listMapper(databaseAutonomousContainerDatabaseCustomerContactsToTerraform, true)(this._customerContacts.internalValue),
      maintenance_window_details: databaseAutonomousContainerDatabaseMaintenanceWindowDetailsToTerraform(this._maintenanceWindowDetails.internalValue),
      peer_autonomous_container_database_backup_config: databaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigToTerraform(this._peerAutonomousContainerDatabaseBackupConfig.internalValue),
      timeouts: databaseAutonomousContainerDatabaseTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      autonomous_container_database_backup_id: {
        value: cdktf.stringToHclTerraform(this._autonomousContainerDatabaseBackupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      autonomous_exadata_infrastructure_id: {
        value: cdktf.stringToHclTerraform(this._autonomousExadataInfrastructureId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      autonomous_vm_cluster_id: {
        value: cdktf.stringToHclTerraform(this._autonomousVmClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_autonomous_vm_cluster_id: {
        value: cdktf.stringToHclTerraform(this._cloudAutonomousVmClusterId),
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
      database_software_image_id: {
        value: cdktf.stringToHclTerraform(this._databaseSoftwareImageId),
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
      db_split_threshold: {
        value: cdktf.numberToHclTerraform(this._dbSplitThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_unique_name: {
        value: cdktf.stringToHclTerraform(this._dbUniqueName),
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
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distribution_affinity: {
        value: cdktf.stringToHclTerraform(this._distributionAffinity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failover_trigger: {
        value: cdktf.numberToHclTerraform(this._failoverTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fast_start_fail_over_lag_limit_in_seconds: {
        value: cdktf.numberToHclTerraform(this._fastStartFailOverLagLimitInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      is_automatic_failover_enabled: {
        value: cdktf.booleanToHclTerraform(this._isAutomaticFailoverEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_dst_file_update_enabled: {
        value: cdktf.booleanToHclTerraform(this._isDstFileUpdateEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key_store_id: {
        value: cdktf.stringToHclTerraform(this._keyStoreId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      net_services_architecture: {
        value: cdktf.stringToHclTerraform(this._netServicesArchitecture),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      okv_end_point_group_name: {
        value: cdktf.stringToHclTerraform(this._okvEndPointGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      patch_model: {
        value: cdktf.stringToHclTerraform(this._patchModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_autonomous_container_database_compartment_id: {
        value: cdktf.stringToHclTerraform(this._peerAutonomousContainerDatabaseCompartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_autonomous_container_database_display_name: {
        value: cdktf.stringToHclTerraform(this._peerAutonomousContainerDatabaseDisplayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_autonomous_exadata_infrastructure_id: {
        value: cdktf.stringToHclTerraform(this._peerAutonomousExadataInfrastructureId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_autonomous_vm_cluster_id: {
        value: cdktf.stringToHclTerraform(this._peerAutonomousVmClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_cloud_autonomous_vm_cluster_id: {
        value: cdktf.stringToHclTerraform(this._peerCloudAutonomousVmClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_db_unique_name: {
        value: cdktf.stringToHclTerraform(this._peerDbUniqueName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protection_mode: {
        value: cdktf.stringToHclTerraform(this._protectionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reinstate_trigger: {
        value: cdktf.numberToHclTerraform(this._reinstateTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rotate_key_trigger: {
        value: cdktf.booleanToHclTerraform(this._rotateKeyTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_level_agreement_type: {
        value: cdktf.stringToHclTerraform(this._serviceLevelAgreementType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      standby_maintenance_buffer_in_days: {
        value: cdktf.numberToHclTerraform(this._standbyMaintenanceBufferInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      switchover_trigger: {
        value: cdktf.numberToHclTerraform(this._switchoverTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vault_id: {
        value: cdktf.stringToHclTerraform(this._vaultId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_preference: {
        value: cdktf.stringToHclTerraform(this._versionPreference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_failover_reservation: {
        value: cdktf.numberToHclTerraform(this._vmFailoverReservation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backup_config: {
        value: databaseAutonomousContainerDatabaseBackupConfigToHclTerraform(this._backupConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseAutonomousContainerDatabaseBackupConfigList",
      },
      customer_contacts: {
        value: cdktf.listMapperHcl(databaseAutonomousContainerDatabaseCustomerContactsToHclTerraform, true)(this._customerContacts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseAutonomousContainerDatabaseCustomerContactsList",
      },
      maintenance_window_details: {
        value: databaseAutonomousContainerDatabaseMaintenanceWindowDetailsToHclTerraform(this._maintenanceWindowDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsList",
      },
      peer_autonomous_container_database_backup_config: {
        value: databaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigToHclTerraform(this._peerAutonomousContainerDatabaseBackupConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigList",
      },
      timeouts: {
        value: databaseAutonomousContainerDatabaseTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseAutonomousContainerDatabaseTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
