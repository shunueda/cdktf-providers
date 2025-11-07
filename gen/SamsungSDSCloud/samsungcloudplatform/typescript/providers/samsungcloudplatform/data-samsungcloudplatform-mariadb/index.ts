// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/mariadb
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformMariadbConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/mariadb#id DataSamsungcloudplatformMariadb#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * mariadb Cluster Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/mariadb#mariadb_cluster_id DataSamsungcloudplatformMariadb#mariadb_cluster_id}
  */
  readonly mariadbClusterId: string;
}
export interface DataSamsungcloudplatformMariadbBackupConfigFullBackupConfig {
}

export function dataSamsungcloudplatformMariadbBackupConfigFullBackupConfigToTerraform(struct?: DataSamsungcloudplatformMariadbBackupConfigFullBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformMariadbBackupConfigFullBackupConfigToHclTerraform(struct?: DataSamsungcloudplatformMariadbBackupConfigFullBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformMariadbBackupConfigFullBackupConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformMariadbBackupConfigFullBackupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformMariadbBackupConfigFullBackupConfig | undefined) {
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

  // object_storage_bucket_id - computed: true, optional: false, required: false
  public get objectStorageBucketId() {
    return this.getStringAttribute('object_storage_bucket_id');
  }
}

export class DataSamsungcloudplatformMariadbBackupConfigFullBackupConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformMariadbBackupConfigFullBackupConfigOutputReference {
    return new DataSamsungcloudplatformMariadbBackupConfigFullBackupConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSamsungcloudplatformMariadbBackupConfigIncrementalBackupConfig {
}

export function dataSamsungcloudplatformMariadbBackupConfigIncrementalBackupConfigToTerraform(struct?: DataSamsungcloudplatformMariadbBackupConfigIncrementalBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformMariadbBackupConfigIncrementalBackupConfigToHclTerraform(struct?: DataSamsungcloudplatformMariadbBackupConfigIncrementalBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformMariadbBackupConfigIncrementalBackupConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformMariadbBackupConfigIncrementalBackupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformMariadbBackupConfigIncrementalBackupConfig | undefined) {
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

  // backup_schedule_frequency - computed: true, optional: false, required: false
  public get backupScheduleFrequency() {
    return this.getStringAttribute('backup_schedule_frequency');
  }

  // object_storage_bucket_id - computed: true, optional: false, required: false
  public get objectStorageBucketId() {
    return this.getStringAttribute('object_storage_bucket_id');
  }
}

export class DataSamsungcloudplatformMariadbBackupConfigIncrementalBackupConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformMariadbBackupConfigIncrementalBackupConfigOutputReference {
    return new DataSamsungcloudplatformMariadbBackupConfigIncrementalBackupConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSamsungcloudplatformMariadbBackupConfig {
}

export function dataSamsungcloudplatformMariadbBackupConfigToTerraform(struct?: DataSamsungcloudplatformMariadbBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformMariadbBackupConfigToHclTerraform(struct?: DataSamsungcloudplatformMariadbBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformMariadbBackupConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformMariadbBackupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformMariadbBackupConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // full_backup_config - computed: true, optional: false, required: false
  private _fullBackupConfig = new DataSamsungcloudplatformMariadbBackupConfigFullBackupConfigList(this, "full_backup_config", false);
  public get fullBackupConfig() {
    return this._fullBackupConfig;
  }

  // incremental_backup_config - computed: true, optional: false, required: false
  private _incrementalBackupConfig = new DataSamsungcloudplatformMariadbBackupConfigIncrementalBackupConfigList(this, "incremental_backup_config", false);
  public get incrementalBackupConfig() {
    return this._incrementalBackupConfig;
  }
}

export class DataSamsungcloudplatformMariadbBackupConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformMariadbBackupConfigOutputReference {
    return new DataSamsungcloudplatformMariadbBackupConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSamsungcloudplatformMariadbContract {
}

export function dataSamsungcloudplatformMariadbContractToTerraform(struct?: DataSamsungcloudplatformMariadbContract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformMariadbContractToHclTerraform(struct?: DataSamsungcloudplatformMariadbContract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformMariadbContractOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformMariadbContract | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformMariadbContract | undefined) {
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

export class DataSamsungcloudplatformMariadbContractList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformMariadbContractOutputReference {
    return new DataSamsungcloudplatformMariadbContractOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSamsungcloudplatformMariadbMaintenance {
}

export function dataSamsungcloudplatformMariadbMaintenanceToTerraform(struct?: DataSamsungcloudplatformMariadbMaintenance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformMariadbMaintenanceToHclTerraform(struct?: DataSamsungcloudplatformMariadbMaintenance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformMariadbMaintenanceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformMariadbMaintenance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformMariadbMaintenance | undefined) {
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

export class DataSamsungcloudplatformMariadbMaintenanceList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformMariadbMaintenanceOutputReference {
    return new DataSamsungcloudplatformMariadbMaintenanceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSamsungcloudplatformMariadbMariadbInitialConfig {
}

export function dataSamsungcloudplatformMariadbMariadbInitialConfigToTerraform(struct?: DataSamsungcloudplatformMariadbMariadbInitialConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformMariadbMariadbInitialConfigToHclTerraform(struct?: DataSamsungcloudplatformMariadbMariadbInitialConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformMariadbMariadbInitialConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformMariadbMariadbInitialConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformMariadbMariadbInitialConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database_character_set - computed: true, optional: false, required: false
  public get databaseCharacterSet() {
    return this.getStringAttribute('database_character_set');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // database_port - computed: true, optional: false, required: false
  public get databasePort() {
    return this.getNumberAttribute('database_port');
  }

  // database_user_name - computed: true, optional: false, required: false
  public get databaseUserName() {
    return this.getStringAttribute('database_user_name');
  }
}

export class DataSamsungcloudplatformMariadbMariadbInitialConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformMariadbMariadbInitialConfigOutputReference {
    return new DataSamsungcloudplatformMariadbMariadbInitialConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSamsungcloudplatformMariadbMariadbServerGroupBlockStorages {
}

export function dataSamsungcloudplatformMariadbMariadbServerGroupBlockStoragesToTerraform(struct?: DataSamsungcloudplatformMariadbMariadbServerGroupBlockStorages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformMariadbMariadbServerGroupBlockStoragesToHclTerraform(struct?: DataSamsungcloudplatformMariadbMariadbServerGroupBlockStorages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformMariadbMariadbServerGroupBlockStoragesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformMariadbMariadbServerGroupBlockStorages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformMariadbMariadbServerGroupBlockStorages | undefined) {
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

export class DataSamsungcloudplatformMariadbMariadbServerGroupBlockStoragesList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformMariadbMariadbServerGroupBlockStoragesOutputReference {
    return new DataSamsungcloudplatformMariadbMariadbServerGroupBlockStoragesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSamsungcloudplatformMariadbMariadbServerGroupMariadbServers {
}

export function dataSamsungcloudplatformMariadbMariadbServerGroupMariadbServersToTerraform(struct?: DataSamsungcloudplatformMariadbMariadbServerGroupMariadbServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformMariadbMariadbServerGroupMariadbServersToHclTerraform(struct?: DataSamsungcloudplatformMariadbMariadbServerGroupMariadbServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformMariadbMariadbServerGroupMariadbServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformMariadbMariadbServerGroupMariadbServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformMariadbMariadbServerGroupMariadbServers | undefined) {
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

  // mariadb_server_id - computed: true, optional: false, required: false
  public get mariadbServerId() {
    return this.getStringAttribute('mariadb_server_id');
  }

  // mariadb_server_name - computed: true, optional: false, required: false
  public get mariadbServerName() {
    return this.getStringAttribute('mariadb_server_name');
  }

  // mariadb_server_state - computed: true, optional: false, required: false
  public get mariadbServerState() {
    return this.getStringAttribute('mariadb_server_state');
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

  // subnet_ip_address - computed: true, optional: false, required: false
  public get subnetIpAddress() {
    return this.getStringAttribute('subnet_ip_address');
  }
}

export class DataSamsungcloudplatformMariadbMariadbServerGroupMariadbServersList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformMariadbMariadbServerGroupMariadbServersOutputReference {
    return new DataSamsungcloudplatformMariadbMariadbServerGroupMariadbServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSamsungcloudplatformMariadbMariadbServerGroup {
}

export function dataSamsungcloudplatformMariadbMariadbServerGroupToTerraform(struct?: DataSamsungcloudplatformMariadbMariadbServerGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformMariadbMariadbServerGroupToHclTerraform(struct?: DataSamsungcloudplatformMariadbMariadbServerGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformMariadbMariadbServerGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformMariadbMariadbServerGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformMariadbMariadbServerGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_storages - computed: true, optional: false, required: false
  private _blockStorages = new DataSamsungcloudplatformMariadbMariadbServerGroupBlockStoragesList(this, "block_storages", false);
  public get blockStorages() {
    return this._blockStorages;
  }

  // encryption_enabled - computed: true, optional: false, required: false
  public get encryptionEnabled() {
    return this.getBooleanAttribute('encryption_enabled');
  }

  // mariadb_servers - computed: true, optional: false, required: false
  private _mariadbServers = new DataSamsungcloudplatformMariadbMariadbServerGroupMariadbServersList(this, "mariadb_servers", false);
  public get mariadbServers() {
    return this._mariadbServers;
  }

  // server_group_role_type - computed: true, optional: false, required: false
  public get serverGroupRoleType() {
    return this.getStringAttribute('server_group_role_type');
  }

  // server_type - computed: true, optional: false, required: false
  public get serverType() {
    return this.getStringAttribute('server_type');
  }

  // virtual_ip_address - computed: true, optional: false, required: false
  public get virtualIpAddress() {
    return this.getStringAttribute('virtual_ip_address');
  }
}

export class DataSamsungcloudplatformMariadbMariadbServerGroupList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformMariadbMariadbServerGroupOutputReference {
    return new DataSamsungcloudplatformMariadbMariadbServerGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/mariadb samsungcloudplatform_mariadb}
*/
export class DataSamsungcloudplatformMariadb extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_mariadb";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformMariadb resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformMariadb to import
  * @param importFromId The id of the existing DataSamsungcloudplatformMariadb that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/mariadb#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformMariadb to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_mariadb", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/mariadb samsungcloudplatform_mariadb} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformMariadbConfig
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformMariadbConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_mariadb',
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
    this._mariadbClusterId = config.mariadbClusterId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit_enabled - computed: true, optional: false, required: false
  public get auditEnabled() {
    return this.getBooleanAttribute('audit_enabled');
  }

  // backup_config - computed: true, optional: false, required: false
  private _backupConfig = new DataSamsungcloudplatformMariadbBackupConfigList(this, "backup_config", false);
  public get backupConfig() {
    return this._backupConfig;
  }

  // block_id - computed: true, optional: false, required: false
  public get blockId() {
    return this.getStringAttribute('block_id');
  }

  // contract - computed: true, optional: false, required: false
  private _contract = new DataSamsungcloudplatformMariadbContractList(this, "contract", false);
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
  private _maintenance = new DataSamsungcloudplatformMariadbMaintenanceList(this, "maintenance", false);
  public get maintenance() {
    return this._maintenance;
  }

  // mariadb_cluster_id - computed: false, optional: false, required: true
  private _mariadbClusterId?: string; 
  public get mariadbClusterId() {
    return this.getStringAttribute('mariadb_cluster_id');
  }
  public set mariadbClusterId(value: string) {
    this._mariadbClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mariadbClusterIdInput() {
    return this._mariadbClusterId;
  }

  // mariadb_cluster_name - computed: true, optional: false, required: false
  public get mariadbClusterName() {
    return this.getStringAttribute('mariadb_cluster_name');
  }

  // mariadb_cluster_state - computed: true, optional: false, required: false
  public get mariadbClusterState() {
    return this.getStringAttribute('mariadb_cluster_state');
  }

  // mariadb_initial_config - computed: true, optional: false, required: false
  private _mariadbInitialConfig = new DataSamsungcloudplatformMariadbMariadbInitialConfigList(this, "mariadb_initial_config", false);
  public get mariadbInitialConfig() {
    return this._mariadbInitialConfig;
  }

  // mariadb_master_cluster_id - computed: true, optional: false, required: false
  public get mariadbMasterClusterId() {
    return this.getStringAttribute('mariadb_master_cluster_id');
  }

  // mariadb_replica_cluster_ids - computed: true, optional: false, required: false
  public get mariadbReplicaClusterIds() {
    return this.getListAttribute('mariadb_replica_cluster_ids');
  }

  // mariadb_server_group - computed: true, optional: false, required: false
  private _mariadbServerGroup = new DataSamsungcloudplatformMariadbMariadbServerGroupList(this, "mariadb_server_group", false);
  public get mariadbServerGroup() {
    return this._mariadbServerGroup;
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

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // service_zone_id - computed: true, optional: false, required: false
  public get serviceZoneId() {
    return this.getStringAttribute('service_zone_id');
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
      mariadb_cluster_id: cdktf.stringToTerraform(this._mariadbClusterId),
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
      mariadb_cluster_id: {
        value: cdktf.stringToHclTerraform(this._mariadbClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
