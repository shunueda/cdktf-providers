// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_autonomous_container_database_add_standby
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseAutonomousContainerDatabaseAddStandbyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_autonomous_container_database_add_standby#autonomous_container_database_id DatabaseAutonomousContainerDatabaseAddStandby#autonomous_container_database_id}
  */
  readonly autonomousContainerDatabaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_autonomous_container_database_add_standby#fast_start_fail_over_lag_limit_in_seconds DatabaseAutonomousContainerDatabaseAddStandby#fast_start_fail_over_lag_limit_in_seconds}
  */
  readonly fastStartFailOverLagLimitInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_autonomous_container_database_add_standby#id DatabaseAutonomousContainerDatabaseAddStandby#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_autonomous_container_database_add_standby#is_automatic_failover_enabled DatabaseAutonomousContainerDatabaseAddStandby#is_automatic_failover_enabled}
  */
  readonly isAutomaticFailoverEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_autonomous_container_database_add_standby#peer_autonomous_container_database_compartment_id DatabaseAutonomousContainerDatabaseAddStandby#peer_autonomous_container_database_compartment_id}
  */
  readonly peerAutonomousContainerDatabaseCompartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_autonomous_container_database_add_standby#peer_autonomous_container_database_display_name DatabaseAutonomousContainerDatabaseAddStandby#peer_autonomous_container_database_display_name}
  */
  readonly peerAutonomousContainerDatabaseDisplayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_autonomous_container_database_add_standby#peer_autonomous_vm_cluster_id DatabaseAutonomousContainerDatabaseAddStandby#peer_autonomous_vm_cluster_id}
  */
  readonly peerAutonomousVmClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_autonomous_container_database_add_standby#peer_cloud_autonomous_vm_cluster_id DatabaseAutonomousContainerDatabaseAddStandby#peer_cloud_autonomous_vm_cluster_id}
  */
  readonly peerCloudAutonomousVmClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_autonomous_container_database_add_standby#peer_db_unique_name DatabaseAutonomousContainerDatabaseAddStandby#peer_db_unique_name}
  */
  readonly peerDbUniqueName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_autonomous_container_database_add_standby#protection_mode DatabaseAutonomousContainerDatabaseAddStandby#protection_mode}
  */
  readonly protectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_autonomous_container_database_add_standby#standby_maintenance_buffer_in_days DatabaseAutonomousContainerDatabaseAddStandby#standby_maintenance_buffer_in_days}
  */
  readonly standbyMaintenanceBufferInDays?: number;
  /**
  * peer_autonomous_container_database_backup_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_autonomous_container_database_add_standby#peer_autonomous_container_database_backup_config DatabaseAutonomousContainerDatabaseAddStandby#peer_autonomous_container_database_backup_config}
  */
  readonly peerAutonomousContainerDatabaseBackupConfig?: DatabaseAutonomousContainerDatabaseAddStandbyPeerAutonomousContainerDatabaseBackupConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_autonomous_container_database_add_standby#timeouts DatabaseAutonomousContainerDatabaseAddStandby#timeouts}
  */
  readonly timeouts?: DatabaseAutonomousContainerDatabaseAddStandbyTimeouts;
}
export interface DatabaseAutonomousContainerDatabaseAddStandbyBackupConfigBackupDestinationDetails {
}

export function databaseAutonomousContainerDatabaseAddStandbyBackupConfigBackupDestinationDetailsToTerraform(struct?: DatabaseAutonomousContainerDatabaseAddStandbyBackupConfigBackupDestinationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseAutonomousContainerDatabaseAddStandbyBackupConfigBackupDestinationDetailsToHclTerraform(struct?: DatabaseAutonomousContainerDatabaseAddStandbyBackupConfigBackupDestinationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseAutonomousContainerDatabaseAddStandbyBackupConfigBackupDestinationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousContainerDatabaseAddStandbyBackupConfigBackupDestinationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousContainerDatabaseAddStandbyBackupConfigBackupDestinationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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

export class DatabaseAutonomousContainerDatabaseAddStandbyBackupConfigBackupDestinationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseAutonomousContainerDatabaseAddStandbyBackupConfigBackupDestinationDetailsOutputReference {
    return new DatabaseAutonomousContainerDatabaseAddStandbyBackupConfigBackupDestinationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseAutonomousContainerDatabaseAddStandbyBackupConfig {
}

export function databaseAutonomousContainerDatabaseAddStandbyBackupConfigToTerraform(struct?: DatabaseAutonomousContainerDatabaseAddStandbyBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseAutonomousContainerDatabaseAddStandbyBackupConfigToHclTerraform(struct?: DatabaseAutonomousContainerDatabaseAddStandbyBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseAutonomousContainerDatabaseAddStandbyBackupConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousContainerDatabaseAddStandbyBackupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousContainerDatabaseAddStandbyBackupConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_destination_details - computed: true, optional: false, required: false
  private _backupDestinationDetails = new DatabaseAutonomousContainerDatabaseAddStandbyBackupConfigBackupDestinationDetailsList(this, "backup_destination_details", false);
  public get backupDestinationDetails() {
    return this._backupDestinationDetails;
  }

  // recovery_window_in_days - computed: true, optional: false, required: false
  public get recoveryWindowInDays() {
    return this.getNumberAttribute('recovery_window_in_days');
  }
}

export class DatabaseAutonomousContainerDatabaseAddStandbyBackupConfigList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseAutonomousContainerDatabaseAddStandbyBackupConfigOutputReference {
    return new DatabaseAutonomousContainerDatabaseAddStandbyBackupConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseAutonomousContainerDatabaseAddStandbyDataguard {
}

export function databaseAutonomousContainerDatabaseAddStandbyDataguardToTerraform(struct?: DatabaseAutonomousContainerDatabaseAddStandbyDataguard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseAutonomousContainerDatabaseAddStandbyDataguardToHclTerraform(struct?: DatabaseAutonomousContainerDatabaseAddStandbyDataguard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseAutonomousContainerDatabaseAddStandbyDataguardOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousContainerDatabaseAddStandbyDataguard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousContainerDatabaseAddStandbyDataguard | undefined) {
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

export class DatabaseAutonomousContainerDatabaseAddStandbyDataguardList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseAutonomousContainerDatabaseAddStandbyDataguardOutputReference {
    return new DatabaseAutonomousContainerDatabaseAddStandbyDataguardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseAutonomousContainerDatabaseAddStandbyDataguardGroupMembers {
}

export function databaseAutonomousContainerDatabaseAddStandbyDataguardGroupMembersToTerraform(struct?: DatabaseAutonomousContainerDatabaseAddStandbyDataguardGroupMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseAutonomousContainerDatabaseAddStandbyDataguardGroupMembersToHclTerraform(struct?: DatabaseAutonomousContainerDatabaseAddStandbyDataguardGroupMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseAutonomousContainerDatabaseAddStandbyDataguardGroupMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousContainerDatabaseAddStandbyDataguardGroupMembers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousContainerDatabaseAddStandbyDataguardGroupMembers | undefined) {
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

export class DatabaseAutonomousContainerDatabaseAddStandbyDataguardGroupMembersList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseAutonomousContainerDatabaseAddStandbyDataguardGroupMembersOutputReference {
    return new DatabaseAutonomousContainerDatabaseAddStandbyDataguardGroupMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseAutonomousContainerDatabaseAddStandbyKeyHistoryEntry {
}

export function databaseAutonomousContainerDatabaseAddStandbyKeyHistoryEntryToTerraform(struct?: DatabaseAutonomousContainerDatabaseAddStandbyKeyHistoryEntry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseAutonomousContainerDatabaseAddStandbyKeyHistoryEntryToHclTerraform(struct?: DatabaseAutonomousContainerDatabaseAddStandbyKeyHistoryEntry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseAutonomousContainerDatabaseAddStandbyKeyHistoryEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousContainerDatabaseAddStandbyKeyHistoryEntry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousContainerDatabaseAddStandbyKeyHistoryEntry | undefined) {
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

export class DatabaseAutonomousContainerDatabaseAddStandbyKeyHistoryEntryList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseAutonomousContainerDatabaseAddStandbyKeyHistoryEntryOutputReference {
    return new DatabaseAutonomousContainerDatabaseAddStandbyKeyHistoryEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseAutonomousContainerDatabaseAddStandbyMaintenanceWindowDaysOfWeek {
}

export function databaseAutonomousContainerDatabaseAddStandbyMaintenanceWindowDaysOfWeekToTerraform(struct?: DatabaseAutonomousContainerDatabaseAddStandbyMaintenanceWindowDaysOfWeek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseAutonomousContainerDatabaseAddStandbyMaintenanceWindowDaysOfWeekToHclTerraform(struct?: DatabaseAutonomousContainerDatabaseAddStandbyMaintenanceWindowDaysOfWeek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseAutonomousContainerDatabaseAddStandbyMaintenanceWindowDaysOfWeekOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousContainerDatabaseAddStandbyMaintenanceWindowDaysOfWeek | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousContainerDatabaseAddStandbyMaintenanceWindowDaysOfWeek | undefined) {
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

export class DatabaseAutonomousContainerDatabaseAddStandbyMaintenanceWindowDaysOfWeekList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseAutonomousContainerDatabaseAddStandbyMaintenanceWindowDaysOfWeekOutputReference {
    return new DatabaseAutonomousContainerDatabaseAddStandbyMaintenanceWindowDaysOfWeekOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseAutonomousContainerDatabaseAddStandbyMaintenanceWindowMonths {
}

export function databaseAutonomousContainerDatabaseAddStandbyMaintenanceWindowMonthsToTerraform(struct?: DatabaseAutonomousContainerDatabaseAddStandbyMaintenanceWindowMonths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseAutonomousContainerDatabaseAddStandbyMaintenanceWindowMonthsToHclTerraform(struct?: DatabaseAutonomousContainerDatabaseAddStandbyMaintenanceWindowMonths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseAutonomousContainerDatabaseAddStandbyMaintenanceWindowMonthsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousContainerDatabaseAddStandbyMaintenanceWindowMonths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousContainerDatabaseAddStandbyMaintenanceWindowMonths | undefined) {
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

export class DatabaseAutonomousContainerDatabaseAddStandbyMaintenanceWindowMonthsList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseAutonomousContainerDatabaseAddStandbyMaintenanceWindowMonthsOutputReference {
    return new DatabaseAutonomousContainerDatabaseAddStandbyMaintenanceWindowMonthsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseAutonomousContainerDatabaseAddStandbyMaintenanceWindow {
}

export function databaseAutonomousContainerDatabaseAddStandbyMaintenanceWindowToTerraform(struct?: DatabaseAutonomousContainerDatabaseAddStandbyMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseAutonomousContainerDatabaseAddStandbyMaintenanceWindowToHclTerraform(struct?: DatabaseAutonomousContainerDatabaseAddStandbyMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseAutonomousContainerDatabaseAddStandbyMaintenanceWindowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousContainerDatabaseAddStandbyMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousContainerDatabaseAddStandbyMaintenanceWindow | undefined) {
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
  private _daysOfWeek = new DatabaseAutonomousContainerDatabaseAddStandbyMaintenanceWindowDaysOfWeekList(this, "days_of_week", false);
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
  private _months = new DatabaseAutonomousContainerDatabaseAddStandbyMaintenanceWindowMonthsList(this, "months", false);
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

export class DatabaseAutonomousContainerDatabaseAddStandbyMaintenanceWindowList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseAutonomousContainerDatabaseAddStandbyMaintenanceWindowOutputReference {
    return new DatabaseAutonomousContainerDatabaseAddStandbyMaintenanceWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseAutonomousContainerDatabaseAddStandbyPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_autonomous_container_database_add_standby#backup_retention_policy_on_terminate DatabaseAutonomousContainerDatabaseAddStandby#backup_retention_policy_on_terminate}
  */
  readonly backupRetentionPolicyOnTerminate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_autonomous_container_database_add_standby#dbrs_policy_id DatabaseAutonomousContainerDatabaseAddStandby#dbrs_policy_id}
  */
  readonly dbrsPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_autonomous_container_database_add_standby#id DatabaseAutonomousContainerDatabaseAddStandby#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_autonomous_container_database_add_standby#internet_proxy DatabaseAutonomousContainerDatabaseAddStandby#internet_proxy}
  */
  readonly internetProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_autonomous_container_database_add_standby#is_retention_lock_enabled DatabaseAutonomousContainerDatabaseAddStandby#is_retention_lock_enabled}
  */
  readonly isRetentionLockEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_autonomous_container_database_add_standby#type DatabaseAutonomousContainerDatabaseAddStandby#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_autonomous_container_database_add_standby#vpc_password DatabaseAutonomousContainerDatabaseAddStandby#vpc_password}
  */
  readonly vpcPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_autonomous_container_database_add_standby#vpc_user DatabaseAutonomousContainerDatabaseAddStandby#vpc_user}
  */
  readonly vpcUser?: string;
}

export function databaseAutonomousContainerDatabaseAddStandbyPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsToTerraform(struct?: DatabaseAutonomousContainerDatabaseAddStandbyPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_retention_policy_on_terminate: cdktf.stringToTerraform(struct!.backupRetentionPolicyOnTerminate),
    dbrs_policy_id: cdktf.stringToTerraform(struct!.dbrsPolicyId),
    id: cdktf.stringToTerraform(struct!.id),
    internet_proxy: cdktf.stringToTerraform(struct!.internetProxy),
    is_retention_lock_enabled: cdktf.booleanToTerraform(struct!.isRetentionLockEnabled),
    type: cdktf.stringToTerraform(struct!.type),
    vpc_password: cdktf.stringToTerraform(struct!.vpcPassword),
    vpc_user: cdktf.stringToTerraform(struct!.vpcUser),
  }
}


export function databaseAutonomousContainerDatabaseAddStandbyPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsToHclTerraform(struct?: DatabaseAutonomousContainerDatabaseAddStandbyPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails | cdktf.IResolvable): any {
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
    dbrs_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.dbrsPolicyId),
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
    is_retention_lock_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isRetentionLockEnabled),
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

export class DatabaseAutonomousContainerDatabaseAddStandbyPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousContainerDatabaseAddStandbyPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupRetentionPolicyOnTerminate !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupRetentionPolicyOnTerminate = this._backupRetentionPolicyOnTerminate;
    }
    if (this._dbrsPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbrsPolicyId = this._dbrsPolicyId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._internetProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetProxy = this._internetProxy;
    }
    if (this._isRetentionLockEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRetentionLockEnabled = this._isRetentionLockEnabled;
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

  public set internalValue(value: DatabaseAutonomousContainerDatabaseAddStandbyPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupRetentionPolicyOnTerminate = undefined;
      this._dbrsPolicyId = undefined;
      this._id = undefined;
      this._internetProxy = undefined;
      this._isRetentionLockEnabled = undefined;
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
      this._dbrsPolicyId = value.dbrsPolicyId;
      this._id = value.id;
      this._internetProxy = value.internetProxy;
      this._isRetentionLockEnabled = value.isRetentionLockEnabled;
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

  // dbrs_policy_id - computed: true, optional: true, required: false
  private _dbrsPolicyId?: string; 
  public get dbrsPolicyId() {
    return this.getStringAttribute('dbrs_policy_id');
  }
  public set dbrsPolicyId(value: string) {
    this._dbrsPolicyId = value;
  }
  public resetDbrsPolicyId() {
    this._dbrsPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbrsPolicyIdInput() {
    return this._dbrsPolicyId;
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

export class DatabaseAutonomousContainerDatabaseAddStandbyPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList extends cdktf.ComplexList {
  public internalValue? : DatabaseAutonomousContainerDatabaseAddStandbyPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails[] | cdktf.IResolvable

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
  public get(index: number): DatabaseAutonomousContainerDatabaseAddStandbyPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference {
    return new DatabaseAutonomousContainerDatabaseAddStandbyPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseAutonomousContainerDatabaseAddStandbyPeerAutonomousContainerDatabaseBackupConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_autonomous_container_database_add_standby#recovery_window_in_days DatabaseAutonomousContainerDatabaseAddStandby#recovery_window_in_days}
  */
  readonly recoveryWindowInDays?: number;
  /**
  * backup_destination_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_autonomous_container_database_add_standby#backup_destination_details DatabaseAutonomousContainerDatabaseAddStandby#backup_destination_details}
  */
  readonly backupDestinationDetails?: DatabaseAutonomousContainerDatabaseAddStandbyPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails[] | cdktf.IResolvable;
}

export function databaseAutonomousContainerDatabaseAddStandbyPeerAutonomousContainerDatabaseBackupConfigToTerraform(struct?: DatabaseAutonomousContainerDatabaseAddStandbyPeerAutonomousContainerDatabaseBackupConfigOutputReference | DatabaseAutonomousContainerDatabaseAddStandbyPeerAutonomousContainerDatabaseBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recovery_window_in_days: cdktf.numberToTerraform(struct!.recoveryWindowInDays),
    backup_destination_details: cdktf.listMapper(databaseAutonomousContainerDatabaseAddStandbyPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsToTerraform, true)(struct!.backupDestinationDetails),
  }
}


export function databaseAutonomousContainerDatabaseAddStandbyPeerAutonomousContainerDatabaseBackupConfigToHclTerraform(struct?: DatabaseAutonomousContainerDatabaseAddStandbyPeerAutonomousContainerDatabaseBackupConfigOutputReference | DatabaseAutonomousContainerDatabaseAddStandbyPeerAutonomousContainerDatabaseBackupConfig): any {
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
      value: cdktf.listMapperHcl(databaseAutonomousContainerDatabaseAddStandbyPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsToHclTerraform, true)(struct!.backupDestinationDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseAutonomousContainerDatabaseAddStandbyPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseAutonomousContainerDatabaseAddStandbyPeerAutonomousContainerDatabaseBackupConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseAutonomousContainerDatabaseAddStandbyPeerAutonomousContainerDatabaseBackupConfig | undefined {
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

  public set internalValue(value: DatabaseAutonomousContainerDatabaseAddStandbyPeerAutonomousContainerDatabaseBackupConfig | undefined) {
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
  private _backupDestinationDetails = new DatabaseAutonomousContainerDatabaseAddStandbyPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList(this, "backup_destination_details", false);
  public get backupDestinationDetails() {
    return this._backupDestinationDetails;
  }
  public putBackupDestinationDetails(value: DatabaseAutonomousContainerDatabaseAddStandbyPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails[] | cdktf.IResolvable) {
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
export interface DatabaseAutonomousContainerDatabaseAddStandbyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_autonomous_container_database_add_standby#create DatabaseAutonomousContainerDatabaseAddStandby#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_autonomous_container_database_add_standby#delete DatabaseAutonomousContainerDatabaseAddStandby#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_autonomous_container_database_add_standby#update DatabaseAutonomousContainerDatabaseAddStandby#update}
  */
  readonly update?: string;
}

export function databaseAutonomousContainerDatabaseAddStandbyTimeoutsToTerraform(struct?: DatabaseAutonomousContainerDatabaseAddStandbyTimeouts | cdktf.IResolvable): any {
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


export function databaseAutonomousContainerDatabaseAddStandbyTimeoutsToHclTerraform(struct?: DatabaseAutonomousContainerDatabaseAddStandbyTimeouts | cdktf.IResolvable): any {
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

export class DatabaseAutonomousContainerDatabaseAddStandbyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseAutonomousContainerDatabaseAddStandbyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseAutonomousContainerDatabaseAddStandbyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_autonomous_container_database_add_standby oci_database_autonomous_container_database_add_standby}
*/
export class DatabaseAutonomousContainerDatabaseAddStandby extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_autonomous_container_database_add_standby";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseAutonomousContainerDatabaseAddStandby resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseAutonomousContainerDatabaseAddStandby to import
  * @param importFromId The id of the existing DatabaseAutonomousContainerDatabaseAddStandby that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_autonomous_container_database_add_standby#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseAutonomousContainerDatabaseAddStandby to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_autonomous_container_database_add_standby", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_autonomous_container_database_add_standby oci_database_autonomous_container_database_add_standby} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseAutonomousContainerDatabaseAddStandbyConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseAutonomousContainerDatabaseAddStandbyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_autonomous_container_database_add_standby',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autonomousContainerDatabaseId = config.autonomousContainerDatabaseId;
    this._fastStartFailOverLagLimitInSeconds = config.fastStartFailOverLagLimitInSeconds;
    this._id = config.id;
    this._isAutomaticFailoverEnabled = config.isAutomaticFailoverEnabled;
    this._peerAutonomousContainerDatabaseCompartmentId = config.peerAutonomousContainerDatabaseCompartmentId;
    this._peerAutonomousContainerDatabaseDisplayName = config.peerAutonomousContainerDatabaseDisplayName;
    this._peerAutonomousVmClusterId = config.peerAutonomousVmClusterId;
    this._peerCloudAutonomousVmClusterId = config.peerCloudAutonomousVmClusterId;
    this._peerDbUniqueName = config.peerDbUniqueName;
    this._protectionMode = config.protectionMode;
    this._standbyMaintenanceBufferInDays = config.standbyMaintenanceBufferInDays;
    this._peerAutonomousContainerDatabaseBackupConfig.internalValue = config.peerAutonomousContainerDatabaseBackupConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autonomous_container_database_id - computed: false, optional: false, required: true
  private _autonomousContainerDatabaseId?: string; 
  public get autonomousContainerDatabaseId() {
    return this.getStringAttribute('autonomous_container_database_id');
  }
  public set autonomousContainerDatabaseId(value: string) {
    this._autonomousContainerDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousContainerDatabaseIdInput() {
    return this._autonomousContainerDatabaseId;
  }

  // autonomous_exadata_infrastructure_id - computed: true, optional: false, required: false
  public get autonomousExadataInfrastructureId() {
    return this.getStringAttribute('autonomous_exadata_infrastructure_id');
  }

  // autonomous_vm_cluster_id - computed: true, optional: false, required: false
  public get autonomousVmClusterId() {
    return this.getStringAttribute('autonomous_vm_cluster_id');
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // available_cpus - computed: true, optional: false, required: false
  public get availableCpus() {
    return this.getNumberAttribute('available_cpus');
  }

  // backup_config - computed: true, optional: false, required: false
  private _backupConfig = new DatabaseAutonomousContainerDatabaseAddStandbyBackupConfigList(this, "backup_config", false);
  public get backupConfig() {
    return this._backupConfig;
  }

  // cloud_autonomous_vm_cluster_id - computed: true, optional: false, required: false
  public get cloudAutonomousVmClusterId() {
    return this.getStringAttribute('cloud_autonomous_vm_cluster_id');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compute_model - computed: true, optional: false, required: false
  public get computeModel() {
    return this.getStringAttribute('compute_model');
  }

  // dataguard - computed: true, optional: false, required: false
  private _dataguard = new DatabaseAutonomousContainerDatabaseAddStandbyDataguardList(this, "dataguard", false);
  public get dataguard() {
    return this._dataguard;
  }

  // dataguard_group_members - computed: true, optional: false, required: false
  private _dataguardGroupMembers = new DatabaseAutonomousContainerDatabaseAddStandbyDataguardGroupMembersList(this, "dataguard_group_members", false);
  public get dataguardGroupMembers() {
    return this._dataguardGroupMembers;
  }

  // db_name - computed: true, optional: false, required: false
  public get dbName() {
    return this.getStringAttribute('db_name');
  }

  // db_split_threshold - computed: true, optional: false, required: false
  public get dbSplitThreshold() {
    return this.getNumberAttribute('db_split_threshold');
  }

  // db_unique_name - computed: true, optional: false, required: false
  public get dbUniqueName() {
    return this.getStringAttribute('db_unique_name');
  }

  // db_version - computed: true, optional: false, required: false
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // distribution_affinity - computed: true, optional: false, required: false
  public get distributionAffinity() {
    return this.getStringAttribute('distribution_affinity');
  }

  // dst_file_version - computed: true, optional: false, required: false
  public get dstFileVersion() {
    return this.getStringAttribute('dst_file_version');
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

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
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

  // is_dst_file_update_enabled - computed: true, optional: false, required: false
  public get isDstFileUpdateEnabled() {
    return this.getBooleanAttribute('is_dst_file_update_enabled');
  }

  // is_multiple_standby - computed: true, optional: false, required: false
  public get isMultipleStandby() {
    return this.getBooleanAttribute('is_multiple_standby');
  }

  // key_history_entry - computed: true, optional: false, required: false
  private _keyHistoryEntry = new DatabaseAutonomousContainerDatabaseAddStandbyKeyHistoryEntryList(this, "key_history_entry", false);
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

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
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
  private _maintenanceWindow = new DatabaseAutonomousContainerDatabaseAddStandbyMaintenanceWindowList(this, "maintenance_window", false);
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

  // net_services_architecture - computed: true, optional: false, required: false
  public get netServicesArchitecture() {
    return this.getStringAttribute('net_services_architecture');
  }

  // next_maintenance_run_id - computed: true, optional: false, required: false
  public get nextMaintenanceRunId() {
    return this.getStringAttribute('next_maintenance_run_id');
  }

  // okv_end_point_group_name - computed: true, optional: false, required: false
  public get okvEndPointGroupName() {
    return this.getStringAttribute('okv_end_point_group_name');
  }

  // patch_id - computed: true, optional: false, required: false
  public get patchId() {
    return this.getStringAttribute('patch_id');
  }

  // patch_model - computed: true, optional: false, required: false
  public get patchModel() {
    return this.getStringAttribute('patch_model');
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

  // reserved_cpus - computed: true, optional: false, required: false
  public get reservedCpus() {
    return this.getNumberAttribute('reserved_cpus');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // service_level_agreement_type - computed: true, optional: false, required: false
  public get serviceLevelAgreementType() {
    return this.getStringAttribute('service_level_agreement_type');
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

  // vault_id - computed: true, optional: false, required: false
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }

  // version_preference - computed: true, optional: false, required: false
  public get versionPreference() {
    return this.getStringAttribute('version_preference');
  }

  // vm_failover_reservation - computed: true, optional: false, required: false
  public get vmFailoverReservation() {
    return this.getNumberAttribute('vm_failover_reservation');
  }

  // peer_autonomous_container_database_backup_config - computed: false, optional: true, required: false
  private _peerAutonomousContainerDatabaseBackupConfig = new DatabaseAutonomousContainerDatabaseAddStandbyPeerAutonomousContainerDatabaseBackupConfigOutputReference(this, "peer_autonomous_container_database_backup_config");
  public get peerAutonomousContainerDatabaseBackupConfig() {
    return this._peerAutonomousContainerDatabaseBackupConfig;
  }
  public putPeerAutonomousContainerDatabaseBackupConfig(value: DatabaseAutonomousContainerDatabaseAddStandbyPeerAutonomousContainerDatabaseBackupConfig) {
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
  private _timeouts = new DatabaseAutonomousContainerDatabaseAddStandbyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseAutonomousContainerDatabaseAddStandbyTimeouts) {
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
      autonomous_container_database_id: cdktf.stringToTerraform(this._autonomousContainerDatabaseId),
      fast_start_fail_over_lag_limit_in_seconds: cdktf.numberToTerraform(this._fastStartFailOverLagLimitInSeconds),
      id: cdktf.stringToTerraform(this._id),
      is_automatic_failover_enabled: cdktf.booleanToTerraform(this._isAutomaticFailoverEnabled),
      peer_autonomous_container_database_compartment_id: cdktf.stringToTerraform(this._peerAutonomousContainerDatabaseCompartmentId),
      peer_autonomous_container_database_display_name: cdktf.stringToTerraform(this._peerAutonomousContainerDatabaseDisplayName),
      peer_autonomous_vm_cluster_id: cdktf.stringToTerraform(this._peerAutonomousVmClusterId),
      peer_cloud_autonomous_vm_cluster_id: cdktf.stringToTerraform(this._peerCloudAutonomousVmClusterId),
      peer_db_unique_name: cdktf.stringToTerraform(this._peerDbUniqueName),
      protection_mode: cdktf.stringToTerraform(this._protectionMode),
      standby_maintenance_buffer_in_days: cdktf.numberToTerraform(this._standbyMaintenanceBufferInDays),
      peer_autonomous_container_database_backup_config: databaseAutonomousContainerDatabaseAddStandbyPeerAutonomousContainerDatabaseBackupConfigToTerraform(this._peerAutonomousContainerDatabaseBackupConfig.internalValue),
      timeouts: databaseAutonomousContainerDatabaseAddStandbyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      autonomous_container_database_id: {
        value: cdktf.stringToHclTerraform(this._autonomousContainerDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fast_start_fail_over_lag_limit_in_seconds: {
        value: cdktf.numberToHclTerraform(this._fastStartFailOverLagLimitInSeconds),
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
      is_automatic_failover_enabled: {
        value: cdktf.booleanToHclTerraform(this._isAutomaticFailoverEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      standby_maintenance_buffer_in_days: {
        value: cdktf.numberToHclTerraform(this._standbyMaintenanceBufferInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      peer_autonomous_container_database_backup_config: {
        value: databaseAutonomousContainerDatabaseAddStandbyPeerAutonomousContainerDatabaseBackupConfigToHclTerraform(this._peerAutonomousContainerDatabaseBackupConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseAutonomousContainerDatabaseAddStandbyPeerAutonomousContainerDatabaseBackupConfigList",
      },
      timeouts: {
        value: databaseAutonomousContainerDatabaseAddStandbyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseAutonomousContainerDatabaseAddStandbyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
