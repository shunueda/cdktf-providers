// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/sqlserver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformSqlserverConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/sqlserver#id DataSamsungcloudplatformSqlserver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * MS SQL Server Cluster Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/sqlserver#sqlserver_cluster_id DataSamsungcloudplatformSqlserver#sqlserver_cluster_id}
  */
  readonly sqlserverClusterId: string;
}
export interface DataSamsungcloudplatformSqlserverBackupConfigFullBackupConfig {
}

export function dataSamsungcloudplatformSqlserverBackupConfigFullBackupConfigToTerraform(struct?: DataSamsungcloudplatformSqlserverBackupConfigFullBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformSqlserverBackupConfigFullBackupConfigToHclTerraform(struct?: DataSamsungcloudplatformSqlserverBackupConfigFullBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformSqlserverBackupConfigFullBackupConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformSqlserverBackupConfigFullBackupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformSqlserverBackupConfigFullBackupConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // archive_backup_schedule_frequency - computed: true, optional: false, required: false
  public get archiveBackupScheduleFrequency() {
    return this.getStringAttribute('archive_backup_schedule_frequency');
  }

  // backup_retention_period - computed: true, optional: false, required: false
  public get backupRetentionPeriod() {
    return this.getStringAttribute('backup_retention_period');
  }

  // backup_start_hour - computed: true, optional: false, required: false
  public get backupStartHour() {
    return this.getNumberAttribute('backup_start_hour');
  }

  // full_backup_day_of_week - computed: true, optional: false, required: false
  public get fullBackupDayOfWeek() {
    return this.getStringAttribute('full_backup_day_of_week');
  }

  // object_storage_bucket_id - computed: true, optional: false, required: false
  public get objectStorageBucketId() {
    return this.getStringAttribute('object_storage_bucket_id');
  }
}

export class DataSamsungcloudplatformSqlserverBackupConfigFullBackupConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformSqlserverBackupConfigFullBackupConfigOutputReference {
    return new DataSamsungcloudplatformSqlserverBackupConfigFullBackupConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSamsungcloudplatformSqlserverBackupConfig {
}

export function dataSamsungcloudplatformSqlserverBackupConfigToTerraform(struct?: DataSamsungcloudplatformSqlserverBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformSqlserverBackupConfigToHclTerraform(struct?: DataSamsungcloudplatformSqlserverBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformSqlserverBackupConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformSqlserverBackupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformSqlserverBackupConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // full_backup_config - computed: true, optional: false, required: false
  private _fullBackupConfig = new DataSamsungcloudplatformSqlserverBackupConfigFullBackupConfigList(this, "full_backup_config", false);
  public get fullBackupConfig() {
    return this._fullBackupConfig;
  }
}

export class DataSamsungcloudplatformSqlserverBackupConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformSqlserverBackupConfigOutputReference {
    return new DataSamsungcloudplatformSqlserverBackupConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSamsungcloudplatformSqlserverContract {
}

export function dataSamsungcloudplatformSqlserverContractToTerraform(struct?: DataSamsungcloudplatformSqlserverContract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformSqlserverContractToHclTerraform(struct?: DataSamsungcloudplatformSqlserverContract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformSqlserverContractOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformSqlserverContract | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformSqlserverContract | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // contract_end_date - computed: true, optional: false, required: false
  public get contractEndDate() {
    return this.getStringAttribute('contract_end_date');
  }

  // contract_period - computed: true, optional: false, required: false
  public get contractPeriod() {
    return this.getStringAttribute('contract_period');
  }

  // contract_start_date - computed: true, optional: false, required: false
  public get contractStartDate() {
    return this.getStringAttribute('contract_start_date');
  }

  // next_contract_end_date - computed: true, optional: false, required: false
  public get nextContractEndDate() {
    return this.getStringAttribute('next_contract_end_date');
  }

  // next_contract_period - computed: true, optional: false, required: false
  public get nextContractPeriod() {
    return this.getStringAttribute('next_contract_period');
  }
}

export class DataSamsungcloudplatformSqlserverContractList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformSqlserverContractOutputReference {
    return new DataSamsungcloudplatformSqlserverContractOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSamsungcloudplatformSqlserverMaintenance {
}

export function dataSamsungcloudplatformSqlserverMaintenanceToTerraform(struct?: DataSamsungcloudplatformSqlserverMaintenance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformSqlserverMaintenanceToHclTerraform(struct?: DataSamsungcloudplatformSqlserverMaintenance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformSqlserverMaintenanceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformSqlserverMaintenance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformSqlserverMaintenance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // maintenance_period - computed: true, optional: false, required: false
  public get maintenancePeriod() {
    return this.getStringAttribute('maintenance_period');
  }

  // maintenance_start_day_of_week - computed: true, optional: false, required: false
  public get maintenanceStartDayOfWeek() {
    return this.getStringAttribute('maintenance_start_day_of_week');
  }

  // maintenance_start_time - computed: true, optional: false, required: false
  public get maintenanceStartTime() {
    return this.getStringAttribute('maintenance_start_time');
  }
}

export class DataSamsungcloudplatformSqlserverMaintenanceList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformSqlserverMaintenanceOutputReference {
    return new DataSamsungcloudplatformSqlserverMaintenanceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSamsungcloudplatformSqlserverQuorumServerGroupBlockStorages {
}

export function dataSamsungcloudplatformSqlserverQuorumServerGroupBlockStoragesToTerraform(struct?: DataSamsungcloudplatformSqlserverQuorumServerGroupBlockStorages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformSqlserverQuorumServerGroupBlockStoragesToHclTerraform(struct?: DataSamsungcloudplatformSqlserverQuorumServerGroupBlockStorages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformSqlserverQuorumServerGroupBlockStoragesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformSqlserverQuorumServerGroupBlockStorages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformSqlserverQuorumServerGroupBlockStorages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_storage_group_id - computed: true, optional: false, required: false
  public get blockStorageGroupId() {
    return this.getStringAttribute('block_storage_group_id');
  }

  // block_storage_name - computed: true, optional: false, required: false
  public get blockStorageName() {
    return this.getStringAttribute('block_storage_name');
  }

  // block_storage_role_type - computed: true, optional: false, required: false
  public get blockStorageRoleType() {
    return this.getStringAttribute('block_storage_role_type');
  }

  // block_storage_size - computed: true, optional: false, required: false
  public get blockStorageSize() {
    return this.getNumberAttribute('block_storage_size');
  }

  // block_storage_type - computed: true, optional: false, required: false
  public get blockStorageType() {
    return this.getStringAttribute('block_storage_type');
  }
}

export class DataSamsungcloudplatformSqlserverQuorumServerGroupBlockStoragesList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformSqlserverQuorumServerGroupBlockStoragesOutputReference {
    return new DataSamsungcloudplatformSqlserverQuorumServerGroupBlockStoragesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSamsungcloudplatformSqlserverQuorumServerGroupSqlserverServers {
}

export function dataSamsungcloudplatformSqlserverQuorumServerGroupSqlserverServersToTerraform(struct?: DataSamsungcloudplatformSqlserverQuorumServerGroupSqlserverServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformSqlserverQuorumServerGroupSqlserverServersToHclTerraform(struct?: DataSamsungcloudplatformSqlserverQuorumServerGroupSqlserverServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformSqlserverQuorumServerGroupSqlserverServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformSqlserverQuorumServerGroupSqlserverServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformSqlserverQuorumServerGroupSqlserverServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zone_name - computed: true, optional: false, required: false
  public get availabilityZoneName() {
    return this.getStringAttribute('availability_zone_name');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_dt - computed: true, optional: false, required: false
  public get createdDt() {
    return this.getStringAttribute('created_dt');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_dt - computed: true, optional: false, required: false
  public get modifiedDt() {
    return this.getStringAttribute('modified_dt');
  }

  // server_role_type - computed: true, optional: false, required: false
  public get serverRoleType() {
    return this.getStringAttribute('server_role_type');
  }

  // sqlserver_server_id - computed: true, optional: false, required: false
  public get sqlserverServerId() {
    return this.getStringAttribute('sqlserver_server_id');
  }

  // sqlserver_server_name - computed: true, optional: false, required: false
  public get sqlserverServerName() {
    return this.getStringAttribute('sqlserver_server_name');
  }

  // sqlserver_server_state - computed: true, optional: false, required: false
  public get sqlserverServerState() {
    return this.getStringAttribute('sqlserver_server_state');
  }

  // subnet_ip_address - computed: true, optional: false, required: false
  public get subnetIpAddress() {
    return this.getStringAttribute('subnet_ip_address');
  }
}

export class DataSamsungcloudplatformSqlserverQuorumServerGroupSqlserverServersList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformSqlserverQuorumServerGroupSqlserverServersOutputReference {
    return new DataSamsungcloudplatformSqlserverQuorumServerGroupSqlserverServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSamsungcloudplatformSqlserverQuorumServerGroup {
}

export function dataSamsungcloudplatformSqlserverQuorumServerGroupToTerraform(struct?: DataSamsungcloudplatformSqlserverQuorumServerGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformSqlserverQuorumServerGroupToHclTerraform(struct?: DataSamsungcloudplatformSqlserverQuorumServerGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformSqlserverQuorumServerGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformSqlserverQuorumServerGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformSqlserverQuorumServerGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_storages - computed: true, optional: false, required: false
  private _blockStorages = new DataSamsungcloudplatformSqlserverQuorumServerGroupBlockStoragesList(this, "block_storages", false);
  public get blockStorages() {
    return this._blockStorages;
  }

  // encryption_enabled - computed: true, optional: false, required: false
  public get encryptionEnabled() {
    return this.getBooleanAttribute('encryption_enabled');
  }

  // server_group_role_type - computed: true, optional: false, required: false
  public get serverGroupRoleType() {
    return this.getStringAttribute('server_group_role_type');
  }

  // server_type - computed: true, optional: false, required: false
  public get serverType() {
    return this.getStringAttribute('server_type');
  }

  // sqlserver_servers - computed: true, optional: false, required: false
  private _sqlserverServers = new DataSamsungcloudplatformSqlserverQuorumServerGroupSqlserverServersList(this, "sqlserver_servers", false);
  public get sqlserverServers() {
    return this._sqlserverServers;
  }

  // virtual_ip_address - computed: true, optional: false, required: false
  public get virtualIpAddress() {
    return this.getStringAttribute('virtual_ip_address');
  }
}

export class DataSamsungcloudplatformSqlserverQuorumServerGroupList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformSqlserverQuorumServerGroupOutputReference {
    return new DataSamsungcloudplatformSqlserverQuorumServerGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSamsungcloudplatformSqlserverSqlserverInitialConfigSqlserverActiveDirectory {
}

export function dataSamsungcloudplatformSqlserverSqlserverInitialConfigSqlserverActiveDirectoryToTerraform(struct?: DataSamsungcloudplatformSqlserverSqlserverInitialConfigSqlserverActiveDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformSqlserverSqlserverInitialConfigSqlserverActiveDirectoryToHclTerraform(struct?: DataSamsungcloudplatformSqlserverSqlserverInitialConfigSqlserverActiveDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformSqlserverSqlserverInitialConfigSqlserverActiveDirectoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformSqlserverSqlserverInitialConfigSqlserverActiveDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformSqlserverSqlserverInitialConfigSqlserverActiveDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ad_server_user_id - computed: true, optional: false, required: false
  public get adServerUserId() {
    return this.getStringAttribute('ad_server_user_id');
  }

  // ad_server_user_password - computed: true, optional: false, required: false
  public get adServerUserPassword() {
    return this.getStringAttribute('ad_server_user_password');
  }

  // dns_server_ips - computed: true, optional: false, required: false
  public get dnsServerIps() {
    return this.getListAttribute('dns_server_ips');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // domain_net_bios_name - computed: true, optional: false, required: false
  public get domainNetBiosName() {
    return this.getStringAttribute('domain_net_bios_name');
  }

  // failover_cluster_name - computed: true, optional: false, required: false
  public get failoverClusterName() {
    return this.getStringAttribute('failover_cluster_name');
  }
}

export class DataSamsungcloudplatformSqlserverSqlserverInitialConfigSqlserverActiveDirectoryList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformSqlserverSqlserverInitialConfigSqlserverActiveDirectoryOutputReference {
    return new DataSamsungcloudplatformSqlserverSqlserverInitialConfigSqlserverActiveDirectoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSamsungcloudplatformSqlserverSqlserverInitialConfig {
}

export function dataSamsungcloudplatformSqlserverSqlserverInitialConfigToTerraform(struct?: DataSamsungcloudplatformSqlserverSqlserverInitialConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformSqlserverSqlserverInitialConfigToHclTerraform(struct?: DataSamsungcloudplatformSqlserverSqlserverInitialConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformSqlserverSqlserverInitialConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformSqlserverSqlserverInitialConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformSqlserverSqlserverInitialConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database_collation - computed: true, optional: false, required: false
  public get databaseCollation() {
    return this.getStringAttribute('database_collation');
  }

  // database_names - computed: true, optional: false, required: false
  public get databaseNames() {
    return this.getListAttribute('database_names');
  }

  // database_port - computed: true, optional: false, required: false
  public get databasePort() {
    return this.getNumberAttribute('database_port');
  }

  // database_service_name - computed: true, optional: false, required: false
  public get databaseServiceName() {
    return this.getStringAttribute('database_service_name');
  }

  // database_user_name - computed: true, optional: false, required: false
  public get databaseUserName() {
    return this.getStringAttribute('database_user_name');
  }

  // sqlserver_active_directory - computed: true, optional: false, required: false
  private _sqlserverActiveDirectory = new DataSamsungcloudplatformSqlserverSqlserverInitialConfigSqlserverActiveDirectoryList(this, "sqlserver_active_directory", true);
  public get sqlserverActiveDirectory() {
    return this._sqlserverActiveDirectory;
  }
}

export class DataSamsungcloudplatformSqlserverSqlserverInitialConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformSqlserverSqlserverInitialConfigOutputReference {
    return new DataSamsungcloudplatformSqlserverSqlserverInitialConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSamsungcloudplatformSqlserverSqlserverServerGroupBlockStorages {
}

export function dataSamsungcloudplatformSqlserverSqlserverServerGroupBlockStoragesToTerraform(struct?: DataSamsungcloudplatformSqlserverSqlserverServerGroupBlockStorages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformSqlserverSqlserverServerGroupBlockStoragesToHclTerraform(struct?: DataSamsungcloudplatformSqlserverSqlserverServerGroupBlockStorages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformSqlserverSqlserverServerGroupBlockStoragesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformSqlserverSqlserverServerGroupBlockStorages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformSqlserverSqlserverServerGroupBlockStorages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_storage_group_id - computed: true, optional: false, required: false
  public get blockStorageGroupId() {
    return this.getStringAttribute('block_storage_group_id');
  }

  // block_storage_name - computed: true, optional: false, required: false
  public get blockStorageName() {
    return this.getStringAttribute('block_storage_name');
  }

  // block_storage_role_type - computed: true, optional: false, required: false
  public get blockStorageRoleType() {
    return this.getStringAttribute('block_storage_role_type');
  }

  // block_storage_size - computed: true, optional: false, required: false
  public get blockStorageSize() {
    return this.getNumberAttribute('block_storage_size');
  }

  // block_storage_type - computed: true, optional: false, required: false
  public get blockStorageType() {
    return this.getStringAttribute('block_storage_type');
  }
}

export class DataSamsungcloudplatformSqlserverSqlserverServerGroupBlockStoragesList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformSqlserverSqlserverServerGroupBlockStoragesOutputReference {
    return new DataSamsungcloudplatformSqlserverSqlserverServerGroupBlockStoragesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSamsungcloudplatformSqlserverSqlserverServerGroupSqlserverServers {
}

export function dataSamsungcloudplatformSqlserverSqlserverServerGroupSqlserverServersToTerraform(struct?: DataSamsungcloudplatformSqlserverSqlserverServerGroupSqlserverServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformSqlserverSqlserverServerGroupSqlserverServersToHclTerraform(struct?: DataSamsungcloudplatformSqlserverSqlserverServerGroupSqlserverServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformSqlserverSqlserverServerGroupSqlserverServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformSqlserverSqlserverServerGroupSqlserverServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformSqlserverSqlserverServerGroupSqlserverServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zone_name - computed: true, optional: false, required: false
  public get availabilityZoneName() {
    return this.getStringAttribute('availability_zone_name');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_dt - computed: true, optional: false, required: false
  public get createdDt() {
    return this.getStringAttribute('created_dt');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_dt - computed: true, optional: false, required: false
  public get modifiedDt() {
    return this.getStringAttribute('modified_dt');
  }

  // server_role_type - computed: true, optional: false, required: false
  public get serverRoleType() {
    return this.getStringAttribute('server_role_type');
  }

  // sqlserver_server_id - computed: true, optional: false, required: false
  public get sqlserverServerId() {
    return this.getStringAttribute('sqlserver_server_id');
  }

  // sqlserver_server_name - computed: true, optional: false, required: false
  public get sqlserverServerName() {
    return this.getStringAttribute('sqlserver_server_name');
  }

  // sqlserver_server_state - computed: true, optional: false, required: false
  public get sqlserverServerState() {
    return this.getStringAttribute('sqlserver_server_state');
  }

  // subnet_ip_address - computed: true, optional: false, required: false
  public get subnetIpAddress() {
    return this.getStringAttribute('subnet_ip_address');
  }
}

export class DataSamsungcloudplatformSqlserverSqlserverServerGroupSqlserverServersList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformSqlserverSqlserverServerGroupSqlserverServersOutputReference {
    return new DataSamsungcloudplatformSqlserverSqlserverServerGroupSqlserverServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSamsungcloudplatformSqlserverSqlserverServerGroup {
}

export function dataSamsungcloudplatformSqlserverSqlserverServerGroupToTerraform(struct?: DataSamsungcloudplatformSqlserverSqlserverServerGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformSqlserverSqlserverServerGroupToHclTerraform(struct?: DataSamsungcloudplatformSqlserverSqlserverServerGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformSqlserverSqlserverServerGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformSqlserverSqlserverServerGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformSqlserverSqlserverServerGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_storages - computed: true, optional: false, required: false
  private _blockStorages = new DataSamsungcloudplatformSqlserverSqlserverServerGroupBlockStoragesList(this, "block_storages", false);
  public get blockStorages() {
    return this._blockStorages;
  }

  // encryption_enabled - computed: true, optional: false, required: false
  public get encryptionEnabled() {
    return this.getBooleanAttribute('encryption_enabled');
  }

  // server_group_role_type - computed: true, optional: false, required: false
  public get serverGroupRoleType() {
    return this.getStringAttribute('server_group_role_type');
  }

  // server_type - computed: true, optional: false, required: false
  public get serverType() {
    return this.getStringAttribute('server_type');
  }

  // sqlserver_servers - computed: true, optional: false, required: false
  private _sqlserverServers = new DataSamsungcloudplatformSqlserverSqlserverServerGroupSqlserverServersList(this, "sqlserver_servers", false);
  public get sqlserverServers() {
    return this._sqlserverServers;
  }

  // virtual_ip_address - computed: true, optional: false, required: false
  public get virtualIpAddress() {
    return this.getStringAttribute('virtual_ip_address');
  }
}

export class DataSamsungcloudplatformSqlserverSqlserverServerGroupList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformSqlserverSqlserverServerGroupOutputReference {
    return new DataSamsungcloudplatformSqlserverSqlserverServerGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/sqlserver samsungcloudplatform_sqlserver}
*/
export class DataSamsungcloudplatformSqlserver extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_sqlserver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformSqlserver resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformSqlserver to import
  * @param importFromId The id of the existing DataSamsungcloudplatformSqlserver that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/sqlserver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformSqlserver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_sqlserver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/sqlserver samsungcloudplatform_sqlserver} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformSqlserverConfig
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformSqlserverConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_sqlserver',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.15.0'
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
    this._sqlserverClusterId = config.sqlserverClusterId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit_enabled - computed: true, optional: false, required: false
  public get auditEnabled() {
    return this.getBooleanAttribute('audit_enabled');
  }

  // backup_config - computed: true, optional: false, required: false
  private _backupConfig = new DataSamsungcloudplatformSqlserverBackupConfigList(this, "backup_config", false);
  public get backupConfig() {
    return this._backupConfig;
  }

  // block_id - computed: true, optional: false, required: false
  public get blockId() {
    return this.getStringAttribute('block_id');
  }

  // contract - computed: true, optional: false, required: false
  private _contract = new DataSamsungcloudplatformSqlserverContractList(this, "contract", false);
  public get contract() {
    return this._contract;
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_dt - computed: true, optional: false, required: false
  public get createdDt() {
    return this.getStringAttribute('created_dt');
  }

  // database_version - computed: true, optional: false, required: false
  public get databaseVersion() {
    return this.getStringAttribute('database_version');
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

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // maintenance - computed: true, optional: false, required: false
  private _maintenance = new DataSamsungcloudplatformSqlserverMaintenanceList(this, "maintenance", false);
  public get maintenance() {
    return this._maintenance;
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_dt - computed: true, optional: false, required: false
  public get modifiedDt() {
    return this.getStringAttribute('modified_dt');
  }

  // nat_ip_address - computed: true, optional: false, required: false
  public get natIpAddress() {
    return this.getStringAttribute('nat_ip_address');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // quorum_server_group - computed: true, optional: false, required: false
  private _quorumServerGroup = new DataSamsungcloudplatformSqlserverQuorumServerGroupList(this, "quorum_server_group", false);
  public get quorumServerGroup() {
    return this._quorumServerGroup;
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // service_zone_id - computed: true, optional: false, required: false
  public get serviceZoneId() {
    return this.getStringAttribute('service_zone_id');
  }

  // sqlserver_cluster_id - computed: false, optional: false, required: true
  private _sqlserverClusterId?: string; 
  public get sqlserverClusterId() {
    return this.getStringAttribute('sqlserver_cluster_id');
  }
  public set sqlserverClusterId(value: string) {
    this._sqlserverClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlserverClusterIdInput() {
    return this._sqlserverClusterId;
  }

  // sqlserver_cluster_name - computed: true, optional: false, required: false
  public get sqlserverClusterName() {
    return this.getStringAttribute('sqlserver_cluster_name');
  }

  // sqlserver_cluster_state - computed: true, optional: false, required: false
  public get sqlserverClusterState() {
    return this.getStringAttribute('sqlserver_cluster_state');
  }

  // sqlserver_initial_config - computed: true, optional: false, required: false
  private _sqlserverInitialConfig = new DataSamsungcloudplatformSqlserverSqlserverInitialConfigList(this, "sqlserver_initial_config", false);
  public get sqlserverInitialConfig() {
    return this._sqlserverInitialConfig;
  }

  // sqlserver_master_cluster_id - computed: true, optional: false, required: false
  public get sqlserverMasterClusterId() {
    return this.getStringAttribute('sqlserver_master_cluster_id');
  }

  // sqlserver_secondary_cluster_id - computed: true, optional: false, required: false
  public get sqlserverSecondaryClusterId() {
    return this.getStringAttribute('sqlserver_secondary_cluster_id');
  }

  // sqlserver_server_group - computed: true, optional: false, required: false
  private _sqlserverServerGroup = new DataSamsungcloudplatformSqlserverSqlserverServerGroupList(this, "sqlserver_server_group", false);
  public get sqlserverServerGroup() {
    return this._sqlserverServerGroup;
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      sqlserver_cluster_id: cdktf.stringToTerraform(this._sqlserverClusterId),
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
      sqlserver_cluster_id: {
        value: cdktf.stringToHclTerraform(this._sqlserverClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
