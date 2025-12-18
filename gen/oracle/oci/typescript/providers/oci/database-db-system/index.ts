// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseDbSystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#availability_domain DatabaseDbSystem#availability_domain}
  */
  readonly availabilityDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#backup_network_nsg_ids DatabaseDbSystem#backup_network_nsg_ids}
  */
  readonly backupNetworkNsgIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#backup_subnet_id DatabaseDbSystem#backup_subnet_id}
  */
  readonly backupSubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#cluster_name DatabaseDbSystem#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#cluster_placement_group_id DatabaseDbSystem#cluster_placement_group_id}
  */
  readonly clusterPlacementGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#compartment_id DatabaseDbSystem#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#compute_count DatabaseDbSystem#compute_count}
  */
  readonly computeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#compute_model DatabaseDbSystem#compute_model}
  */
  readonly computeModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#cpu_core_count DatabaseDbSystem#cpu_core_count}
  */
  readonly cpuCoreCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#data_storage_percentage DatabaseDbSystem#data_storage_percentage}
  */
  readonly dataStoragePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#data_storage_size_in_gb DatabaseDbSystem#data_storage_size_in_gb}
  */
  readonly dataStorageSizeInGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#database_edition DatabaseDbSystem#database_edition}
  */
  readonly databaseEdition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#defined_tags DatabaseDbSystem#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#disk_redundancy DatabaseDbSystem#disk_redundancy}
  */
  readonly diskRedundancy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#display_name DatabaseDbSystem#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#domain DatabaseDbSystem#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#fault_domains DatabaseDbSystem#fault_domains}
  */
  readonly faultDomains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#freeform_tags DatabaseDbSystem#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#hostname DatabaseDbSystem#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#id DatabaseDbSystem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#kms_key_id DatabaseDbSystem#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#kms_key_version_id DatabaseDbSystem#kms_key_version_id}
  */
  readonly kmsKeyVersionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#license_model DatabaseDbSystem#license_model}
  */
  readonly licenseModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#node_count DatabaseDbSystem#node_count}
  */
  readonly nodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#nsg_ids DatabaseDbSystem#nsg_ids}
  */
  readonly nsgIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#private_ip DatabaseDbSystem#private_ip}
  */
  readonly privateIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#private_ip_v6 DatabaseDbSystem#private_ip_v6}
  */
  readonly privateIpV6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#reco_storage_size_in_gb DatabaseDbSystem#reco_storage_size_in_gb}
  */
  readonly recoStorageSizeInGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#security_attributes DatabaseDbSystem#security_attributes}
  */
  readonly securityAttributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#shape DatabaseDbSystem#shape}
  */
  readonly shape: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#source DatabaseDbSystem#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#source_db_system_id DatabaseDbSystem#source_db_system_id}
  */
  readonly sourceDbSystemId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#sparse_diskgroup DatabaseDbSystem#sparse_diskgroup}
  */
  readonly sparseDiskgroup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#ssh_public_keys DatabaseDbSystem#ssh_public_keys}
  */
  readonly sshPublicKeys: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#storage_volume_performance_mode DatabaseDbSystem#storage_volume_performance_mode}
  */
  readonly storageVolumePerformanceMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#subnet_id DatabaseDbSystem#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#subscription_id DatabaseDbSystem#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#time_zone DatabaseDbSystem#time_zone}
  */
  readonly timeZone?: string;
  /**
  * data_collection_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#data_collection_options DatabaseDbSystem#data_collection_options}
  */
  readonly dataCollectionOptions?: DatabaseDbSystemDataCollectionOptions;
  /**
  * db_home block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#db_home DatabaseDbSystem#db_home}
  */
  readonly dbHome: DatabaseDbSystemDbHome;
  /**
  * db_system_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#db_system_options DatabaseDbSystem#db_system_options}
  */
  readonly dbSystemOptions?: DatabaseDbSystemDbSystemOptions;
  /**
  * maintenance_window_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#maintenance_window_details DatabaseDbSystem#maintenance_window_details}
  */
  readonly maintenanceWindowDetails?: DatabaseDbSystemMaintenanceWindowDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#timeouts DatabaseDbSystem#timeouts}
  */
  readonly timeouts?: DatabaseDbSystemTimeouts;
}
export interface DatabaseDbSystemIormConfigCacheDbPlans {
}

export function databaseDbSystemIormConfigCacheDbPlansToTerraform(struct?: DatabaseDbSystemIormConfigCacheDbPlans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseDbSystemIormConfigCacheDbPlansToHclTerraform(struct?: DatabaseDbSystemIormConfigCacheDbPlans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseDbSystemIormConfigCacheDbPlansOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseDbSystemIormConfigCacheDbPlans | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseDbSystemIormConfigCacheDbPlans | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // db_name - computed: true, optional: false, required: false
  public get dbName() {
    return this.getStringAttribute('db_name');
  }

  // flash_cache_limit - computed: true, optional: false, required: false
  public get flashCacheLimit() {
    return this.getStringAttribute('flash_cache_limit');
  }

  // share - computed: true, optional: false, required: false
  public get share() {
    return this.getNumberAttribute('share');
  }
}

export class DatabaseDbSystemIormConfigCacheDbPlansList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseDbSystemIormConfigCacheDbPlansOutputReference {
    return new DatabaseDbSystemIormConfigCacheDbPlansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseDbSystemIormConfigCache {
}

export function databaseDbSystemIormConfigCacheToTerraform(struct?: DatabaseDbSystemIormConfigCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseDbSystemIormConfigCacheToHclTerraform(struct?: DatabaseDbSystemIormConfigCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseDbSystemIormConfigCacheOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseDbSystemIormConfigCache | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseDbSystemIormConfigCache | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // db_plans - computed: true, optional: false, required: false
  private _dbPlans = new DatabaseDbSystemIormConfigCacheDbPlansList(this, "db_plans", false);
  public get dbPlans() {
    return this._dbPlans;
  }

  // db_system_id - computed: true, optional: false, required: false
  public get dbSystemId() {
    return this.getStringAttribute('db_system_id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // objective - computed: true, optional: false, required: false
  public get objective() {
    return this.getStringAttribute('objective');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DatabaseDbSystemIormConfigCacheList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseDbSystemIormConfigCacheOutputReference {
    return new DatabaseDbSystemIormConfigCacheOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseDbSystemMaintenanceWindowDaysOfWeek {
}

export function databaseDbSystemMaintenanceWindowDaysOfWeekToTerraform(struct?: DatabaseDbSystemMaintenanceWindowDaysOfWeek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseDbSystemMaintenanceWindowDaysOfWeekToHclTerraform(struct?: DatabaseDbSystemMaintenanceWindowDaysOfWeek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseDbSystemMaintenanceWindowDaysOfWeek | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseDbSystemMaintenanceWindowDaysOfWeek | undefined) {
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

export class DatabaseDbSystemMaintenanceWindowDaysOfWeekList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference {
    return new DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseDbSystemMaintenanceWindowMonths {
}

export function databaseDbSystemMaintenanceWindowMonthsToTerraform(struct?: DatabaseDbSystemMaintenanceWindowMonths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseDbSystemMaintenanceWindowMonthsToHclTerraform(struct?: DatabaseDbSystemMaintenanceWindowMonths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseDbSystemMaintenanceWindowMonthsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseDbSystemMaintenanceWindowMonths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseDbSystemMaintenanceWindowMonths | undefined) {
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

export class DatabaseDbSystemMaintenanceWindowMonthsList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseDbSystemMaintenanceWindowMonthsOutputReference {
    return new DatabaseDbSystemMaintenanceWindowMonthsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseDbSystemMaintenanceWindow {
}

export function databaseDbSystemMaintenanceWindowToTerraform(struct?: DatabaseDbSystemMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseDbSystemMaintenanceWindowToHclTerraform(struct?: DatabaseDbSystemMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseDbSystemMaintenanceWindowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseDbSystemMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseDbSystemMaintenanceWindow | undefined) {
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
  private _daysOfWeek = new DatabaseDbSystemMaintenanceWindowDaysOfWeekList(this, "days_of_week", false);
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
  private _months = new DatabaseDbSystemMaintenanceWindowMonthsList(this, "months", false);
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

export class DatabaseDbSystemMaintenanceWindowList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseDbSystemMaintenanceWindowOutputReference {
    return new DatabaseDbSystemMaintenanceWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseDbSystemDataCollectionOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#is_diagnostics_events_enabled DatabaseDbSystem#is_diagnostics_events_enabled}
  */
  readonly isDiagnosticsEventsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#is_health_monitoring_enabled DatabaseDbSystem#is_health_monitoring_enabled}
  */
  readonly isHealthMonitoringEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#is_incident_logs_enabled DatabaseDbSystem#is_incident_logs_enabled}
  */
  readonly isIncidentLogsEnabled?: boolean | cdktf.IResolvable;
}

export function databaseDbSystemDataCollectionOptionsToTerraform(struct?: DatabaseDbSystemDataCollectionOptionsOutputReference | DatabaseDbSystemDataCollectionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_diagnostics_events_enabled: cdktf.booleanToTerraform(struct!.isDiagnosticsEventsEnabled),
    is_health_monitoring_enabled: cdktf.booleanToTerraform(struct!.isHealthMonitoringEnabled),
    is_incident_logs_enabled: cdktf.booleanToTerraform(struct!.isIncidentLogsEnabled),
  }
}


export function databaseDbSystemDataCollectionOptionsToHclTerraform(struct?: DatabaseDbSystemDataCollectionOptionsOutputReference | DatabaseDbSystemDataCollectionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_diagnostics_events_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isDiagnosticsEventsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_health_monitoring_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isHealthMonitoringEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_incident_logs_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isIncidentLogsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseDbSystemDataCollectionOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseDbSystemDataCollectionOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isDiagnosticsEventsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDiagnosticsEventsEnabled = this._isDiagnosticsEventsEnabled;
    }
    if (this._isHealthMonitoringEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isHealthMonitoringEnabled = this._isHealthMonitoringEnabled;
    }
    if (this._isIncidentLogsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isIncidentLogsEnabled = this._isIncidentLogsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseDbSystemDataCollectionOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isDiagnosticsEventsEnabled = undefined;
      this._isHealthMonitoringEnabled = undefined;
      this._isIncidentLogsEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isDiagnosticsEventsEnabled = value.isDiagnosticsEventsEnabled;
      this._isHealthMonitoringEnabled = value.isHealthMonitoringEnabled;
      this._isIncidentLogsEnabled = value.isIncidentLogsEnabled;
    }
  }

  // is_diagnostics_events_enabled - computed: true, optional: true, required: false
  private _isDiagnosticsEventsEnabled?: boolean | cdktf.IResolvable; 
  public get isDiagnosticsEventsEnabled() {
    return this.getBooleanAttribute('is_diagnostics_events_enabled');
  }
  public set isDiagnosticsEventsEnabled(value: boolean | cdktf.IResolvable) {
    this._isDiagnosticsEventsEnabled = value;
  }
  public resetIsDiagnosticsEventsEnabled() {
    this._isDiagnosticsEventsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDiagnosticsEventsEnabledInput() {
    return this._isDiagnosticsEventsEnabled;
  }

  // is_health_monitoring_enabled - computed: true, optional: true, required: false
  private _isHealthMonitoringEnabled?: boolean | cdktf.IResolvable; 
  public get isHealthMonitoringEnabled() {
    return this.getBooleanAttribute('is_health_monitoring_enabled');
  }
  public set isHealthMonitoringEnabled(value: boolean | cdktf.IResolvable) {
    this._isHealthMonitoringEnabled = value;
  }
  public resetIsHealthMonitoringEnabled() {
    this._isHealthMonitoringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHealthMonitoringEnabledInput() {
    return this._isHealthMonitoringEnabled;
  }

  // is_incident_logs_enabled - computed: true, optional: true, required: false
  private _isIncidentLogsEnabled?: boolean | cdktf.IResolvable; 
  public get isIncidentLogsEnabled() {
    return this.getBooleanAttribute('is_incident_logs_enabled');
  }
  public set isIncidentLogsEnabled(value: boolean | cdktf.IResolvable) {
    this._isIncidentLogsEnabled = value;
  }
  public resetIsIncidentLogsEnabled() {
    this._isIncidentLogsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIncidentLogsEnabledInput() {
    return this._isIncidentLogsEnabled;
  }
}
export interface DatabaseDbSystemDbHomeDatabaseConnectionStrings {
}

export function databaseDbSystemDbHomeDatabaseConnectionStringsToTerraform(struct?: DatabaseDbSystemDbHomeDatabaseConnectionStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseDbSystemDbHomeDatabaseConnectionStringsToHclTerraform(struct?: DatabaseDbSystemDbHomeDatabaseConnectionStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseDbSystemDbHomeDatabaseConnectionStrings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseDbSystemDbHomeDatabaseConnectionStrings | undefined) {
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

  // cdb_default - computed: true, optional: false, required: false
  public get cdbDefault() {
    return this.getStringAttribute('cdb_default');
  }

  // cdb_ip_default - computed: true, optional: false, required: false
  public get cdbIpDefault() {
    return this.getStringAttribute('cdb_ip_default');
  }
}

export class DatabaseDbSystemDbHomeDatabaseConnectionStringsList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference {
    return new DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#backup_retention_policy_on_terminate DatabaseDbSystem#backup_retention_policy_on_terminate}
  */
  readonly backupRetentionPolicyOnTerminate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#dbrs_policy_id DatabaseDbSystem#dbrs_policy_id}
  */
  readonly dbrsPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#id DatabaseDbSystem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#is_remote DatabaseDbSystem#is_remote}
  */
  readonly isRemote?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#is_retention_lock_enabled DatabaseDbSystem#is_retention_lock_enabled}
  */
  readonly isRetentionLockEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#remote_region DatabaseDbSystem#remote_region}
  */
  readonly remoteRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#type DatabaseDbSystem#type}
  */
  readonly type?: string;
}

export function databaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsToTerraform(struct?: DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_retention_policy_on_terminate: cdktf.stringToTerraform(struct!.backupRetentionPolicyOnTerminate),
    dbrs_policy_id: cdktf.stringToTerraform(struct!.dbrsPolicyId),
    id: cdktf.stringToTerraform(struct!.id),
    is_remote: cdktf.booleanToTerraform(struct!.isRemote),
    is_retention_lock_enabled: cdktf.booleanToTerraform(struct!.isRetentionLockEnabled),
    remote_region: cdktf.stringToTerraform(struct!.remoteRegion),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function databaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsToHclTerraform(struct?: DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupRetentionPolicyOnTerminate = undefined;
      this._dbrsPolicyId = undefined;
      this._id = undefined;
      this._isRemote = undefined;
      this._isRetentionLockEnabled = undefined;
      this._remoteRegion = undefined;
      this._type = undefined;
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
      this._isRemote = value.isRemote;
      this._isRetentionLockEnabled = value.isRetentionLockEnabled;
      this._remoteRegion = value.remoteRegion;
      this._type = value.type;
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

  // type - computed: true, optional: true, required: false
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
}

export class DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList extends cdktf.ComplexList {
  public internalValue? : DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails[] | cdktf.IResolvable

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
  public get(index: number): DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference {
    return new DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseDbSystemDbHomeDatabaseDbBackupConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#auto_backup_enabled DatabaseDbSystem#auto_backup_enabled}
  */
  readonly autoBackupEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#auto_backup_window DatabaseDbSystem#auto_backup_window}
  */
  readonly autoBackupWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#auto_full_backup_day DatabaseDbSystem#auto_full_backup_day}
  */
  readonly autoFullBackupDay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#auto_full_backup_window DatabaseDbSystem#auto_full_backup_window}
  */
  readonly autoFullBackupWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#backup_deletion_policy DatabaseDbSystem#backup_deletion_policy}
  */
  readonly backupDeletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#recovery_window_in_days DatabaseDbSystem#recovery_window_in_days}
  */
  readonly recoveryWindowInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#run_immediate_full_backup DatabaseDbSystem#run_immediate_full_backup}
  */
  readonly runImmediateFullBackup?: boolean | cdktf.IResolvable;
  /**
  * backup_destination_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#backup_destination_details DatabaseDbSystem#backup_destination_details}
  */
  readonly backupDestinationDetails?: DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails[] | cdktf.IResolvable;
}

export function databaseDbSystemDbHomeDatabaseDbBackupConfigToTerraform(struct?: DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference | DatabaseDbSystemDbHomeDatabaseDbBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_backup_enabled: cdktf.booleanToTerraform(struct!.autoBackupEnabled),
    auto_backup_window: cdktf.stringToTerraform(struct!.autoBackupWindow),
    auto_full_backup_day: cdktf.stringToTerraform(struct!.autoFullBackupDay),
    auto_full_backup_window: cdktf.stringToTerraform(struct!.autoFullBackupWindow),
    backup_deletion_policy: cdktf.stringToTerraform(struct!.backupDeletionPolicy),
    recovery_window_in_days: cdktf.numberToTerraform(struct!.recoveryWindowInDays),
    run_immediate_full_backup: cdktf.booleanToTerraform(struct!.runImmediateFullBackup),
    backup_destination_details: cdktf.listMapper(databaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsToTerraform, true)(struct!.backupDestinationDetails),
  }
}


export function databaseDbSystemDbHomeDatabaseDbBackupConfigToHclTerraform(struct?: DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference | DatabaseDbSystemDbHomeDatabaseDbBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_backup_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.autoBackupEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_backup_window: {
      value: cdktf.stringToHclTerraform(struct!.autoBackupWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_full_backup_day: {
      value: cdktf.stringToHclTerraform(struct!.autoFullBackupDay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_full_backup_window: {
      value: cdktf.stringToHclTerraform(struct!.autoFullBackupWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_deletion_policy: {
      value: cdktf.stringToHclTerraform(struct!.backupDeletionPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recovery_window_in_days: {
      value: cdktf.numberToHclTerraform(struct!.recoveryWindowInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_immediate_full_backup: {
      value: cdktf.booleanToHclTerraform(struct!.runImmediateFullBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    backup_destination_details: {
      value: cdktf.listMapperHcl(databaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsToHclTerraform, true)(struct!.backupDestinationDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseDbSystemDbHomeDatabaseDbBackupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoBackupEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoBackupEnabled = this._autoBackupEnabled;
    }
    if (this._autoBackupWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoBackupWindow = this._autoBackupWindow;
    }
    if (this._autoFullBackupDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoFullBackupDay = this._autoFullBackupDay;
    }
    if (this._autoFullBackupWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoFullBackupWindow = this._autoFullBackupWindow;
    }
    if (this._backupDeletionPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupDeletionPolicy = this._backupDeletionPolicy;
    }
    if (this._recoveryWindowInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryWindowInDays = this._recoveryWindowInDays;
    }
    if (this._runImmediateFullBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.runImmediateFullBackup = this._runImmediateFullBackup;
    }
    if (this._backupDestinationDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupDestinationDetails = this._backupDestinationDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseDbSystemDbHomeDatabaseDbBackupConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoBackupEnabled = undefined;
      this._autoBackupWindow = undefined;
      this._autoFullBackupDay = undefined;
      this._autoFullBackupWindow = undefined;
      this._backupDeletionPolicy = undefined;
      this._recoveryWindowInDays = undefined;
      this._runImmediateFullBackup = undefined;
      this._backupDestinationDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoBackupEnabled = value.autoBackupEnabled;
      this._autoBackupWindow = value.autoBackupWindow;
      this._autoFullBackupDay = value.autoFullBackupDay;
      this._autoFullBackupWindow = value.autoFullBackupWindow;
      this._backupDeletionPolicy = value.backupDeletionPolicy;
      this._recoveryWindowInDays = value.recoveryWindowInDays;
      this._runImmediateFullBackup = value.runImmediateFullBackup;
      this._backupDestinationDetails.internalValue = value.backupDestinationDetails;
    }
  }

  // auto_backup_enabled - computed: true, optional: true, required: false
  private _autoBackupEnabled?: boolean | cdktf.IResolvable; 
  public get autoBackupEnabled() {
    return this.getBooleanAttribute('auto_backup_enabled');
  }
  public set autoBackupEnabled(value: boolean | cdktf.IResolvable) {
    this._autoBackupEnabled = value;
  }
  public resetAutoBackupEnabled() {
    this._autoBackupEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoBackupEnabledInput() {
    return this._autoBackupEnabled;
  }

  // auto_backup_window - computed: true, optional: true, required: false
  private _autoBackupWindow?: string; 
  public get autoBackupWindow() {
    return this.getStringAttribute('auto_backup_window');
  }
  public set autoBackupWindow(value: string) {
    this._autoBackupWindow = value;
  }
  public resetAutoBackupWindow() {
    this._autoBackupWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoBackupWindowInput() {
    return this._autoBackupWindow;
  }

  // auto_full_backup_day - computed: false, optional: true, required: false
  private _autoFullBackupDay?: string; 
  public get autoFullBackupDay() {
    return this.getStringAttribute('auto_full_backup_day');
  }
  public set autoFullBackupDay(value: string) {
    this._autoFullBackupDay = value;
  }
  public resetAutoFullBackupDay() {
    this._autoFullBackupDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoFullBackupDayInput() {
    return this._autoFullBackupDay;
  }

  // auto_full_backup_window - computed: true, optional: true, required: false
  private _autoFullBackupWindow?: string; 
  public get autoFullBackupWindow() {
    return this.getStringAttribute('auto_full_backup_window');
  }
  public set autoFullBackupWindow(value: string) {
    this._autoFullBackupWindow = value;
  }
  public resetAutoFullBackupWindow() {
    this._autoFullBackupWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoFullBackupWindowInput() {
    return this._autoFullBackupWindow;
  }

  // backup_deletion_policy - computed: true, optional: true, required: false
  private _backupDeletionPolicy?: string; 
  public get backupDeletionPolicy() {
    return this.getStringAttribute('backup_deletion_policy');
  }
  public set backupDeletionPolicy(value: string) {
    this._backupDeletionPolicy = value;
  }
  public resetBackupDeletionPolicy() {
    this._backupDeletionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupDeletionPolicyInput() {
    return this._backupDeletionPolicy;
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

  // run_immediate_full_backup - computed: true, optional: true, required: false
  private _runImmediateFullBackup?: boolean | cdktf.IResolvable; 
  public get runImmediateFullBackup() {
    return this.getBooleanAttribute('run_immediate_full_backup');
  }
  public set runImmediateFullBackup(value: boolean | cdktf.IResolvable) {
    this._runImmediateFullBackup = value;
  }
  public resetRunImmediateFullBackup() {
    this._runImmediateFullBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runImmediateFullBackupInput() {
    return this._runImmediateFullBackup;
  }

  // backup_destination_details - computed: false, optional: true, required: false
  private _backupDestinationDetails = new DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList(this, "backup_destination_details", false);
  public get backupDestinationDetails() {
    return this._backupDestinationDetails;
  }
  public putBackupDestinationDetails(value: DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails[] | cdktf.IResolvable) {
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
export interface DatabaseDbSystemDbHomeDatabase {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#admin_password DatabaseDbSystem#admin_password}
  */
  readonly adminPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#backup_id DatabaseDbSystem#backup_id}
  */
  readonly backupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#backup_tde_password DatabaseDbSystem#backup_tde_password}
  */
  readonly backupTdePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#character_set DatabaseDbSystem#character_set}
  */
  readonly characterSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#database_id DatabaseDbSystem#database_id}
  */
  readonly databaseId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#database_software_image_id DatabaseDbSystem#database_software_image_id}
  */
  readonly databaseSoftwareImageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#db_domain DatabaseDbSystem#db_domain}
  */
  readonly dbDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#db_name DatabaseDbSystem#db_name}
  */
  readonly dbName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#db_unique_name DatabaseDbSystem#db_unique_name}
  */
  readonly dbUniqueName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#db_workload DatabaseDbSystem#db_workload}
  */
  readonly dbWorkload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#defined_tags DatabaseDbSystem#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#freeform_tags DatabaseDbSystem#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#kms_key_id DatabaseDbSystem#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#kms_key_version_id DatabaseDbSystem#kms_key_version_id}
  */
  readonly kmsKeyVersionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#ncharacter_set DatabaseDbSystem#ncharacter_set}
  */
  readonly ncharacterSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#pdb_name DatabaseDbSystem#pdb_name}
  */
  readonly pdbName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#pluggable_databases DatabaseDbSystem#pluggable_databases}
  */
  readonly pluggableDatabases?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#tde_wallet_password DatabaseDbSystem#tde_wallet_password}
  */
  readonly tdeWalletPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#time_stamp_for_point_in_time_recovery DatabaseDbSystem#time_stamp_for_point_in_time_recovery}
  */
  readonly timeStampForPointInTimeRecovery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#vault_id DatabaseDbSystem#vault_id}
  */
  readonly vaultId?: string;
  /**
  * db_backup_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#db_backup_config DatabaseDbSystem#db_backup_config}
  */
  readonly dbBackupConfig?: DatabaseDbSystemDbHomeDatabaseDbBackupConfig;
}

export function databaseDbSystemDbHomeDatabaseToTerraform(struct?: DatabaseDbSystemDbHomeDatabaseOutputReference | DatabaseDbSystemDbHomeDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
    backup_id: cdktf.stringToTerraform(struct!.backupId),
    backup_tde_password: cdktf.stringToTerraform(struct!.backupTdePassword),
    character_set: cdktf.stringToTerraform(struct!.characterSet),
    database_id: cdktf.stringToTerraform(struct!.databaseId),
    database_software_image_id: cdktf.stringToTerraform(struct!.databaseSoftwareImageId),
    db_domain: cdktf.stringToTerraform(struct!.dbDomain),
    db_name: cdktf.stringToTerraform(struct!.dbName),
    db_unique_name: cdktf.stringToTerraform(struct!.dbUniqueName),
    db_workload: cdktf.stringToTerraform(struct!.dbWorkload),
    defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.definedTags),
    freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.freeformTags),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    kms_key_version_id: cdktf.stringToTerraform(struct!.kmsKeyVersionId),
    ncharacter_set: cdktf.stringToTerraform(struct!.ncharacterSet),
    pdb_name: cdktf.stringToTerraform(struct!.pdbName),
    pluggable_databases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pluggableDatabases),
    tde_wallet_password: cdktf.stringToTerraform(struct!.tdeWalletPassword),
    time_stamp_for_point_in_time_recovery: cdktf.stringToTerraform(struct!.timeStampForPointInTimeRecovery),
    vault_id: cdktf.stringToTerraform(struct!.vaultId),
    db_backup_config: databaseDbSystemDbHomeDatabaseDbBackupConfigToTerraform(struct!.dbBackupConfig),
  }
}


export function databaseDbSystemDbHomeDatabaseToHclTerraform(struct?: DatabaseDbSystemDbHomeDatabaseOutputReference | DatabaseDbSystemDbHomeDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_password: {
      value: cdktf.stringToHclTerraform(struct!.adminPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_id: {
      value: cdktf.stringToHclTerraform(struct!.backupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_tde_password: {
      value: cdktf.stringToHclTerraform(struct!.backupTdePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    character_set: {
      value: cdktf.stringToHclTerraform(struct!.characterSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_id: {
      value: cdktf.stringToHclTerraform(struct!.databaseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_software_image_id: {
      value: cdktf.stringToHclTerraform(struct!.databaseSoftwareImageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_domain: {
      value: cdktf.stringToHclTerraform(struct!.dbDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_name: {
      value: cdktf.stringToHclTerraform(struct!.dbName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_unique_name: {
      value: cdktf.stringToHclTerraform(struct!.dbUniqueName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_workload: {
      value: cdktf.stringToHclTerraform(struct!.dbWorkload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    defined_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.definedTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    freeform_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.freeformTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_version_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyVersionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ncharacter_set: {
      value: cdktf.stringToHclTerraform(struct!.ncharacterSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pdb_name: {
      value: cdktf.stringToHclTerraform(struct!.pdbName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pluggable_databases: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pluggableDatabases),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tde_wallet_password: {
      value: cdktf.stringToHclTerraform(struct!.tdeWalletPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_stamp_for_point_in_time_recovery: {
      value: cdktf.stringToHclTerraform(struct!.timeStampForPointInTimeRecovery),
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
    db_backup_config: {
      value: databaseDbSystemDbHomeDatabaseDbBackupConfigToHclTerraform(struct!.dbBackupConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseDbSystemDbHomeDatabaseDbBackupConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseDbSystemDbHomeDatabaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseDbSystemDbHomeDatabase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPassword = this._adminPassword;
    }
    if (this._backupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupId = this._backupId;
    }
    if (this._backupTdePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupTdePassword = this._backupTdePassword;
    }
    if (this._characterSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.characterSet = this._characterSet;
    }
    if (this._databaseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseId = this._databaseId;
    }
    if (this._databaseSoftwareImageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseSoftwareImageId = this._databaseSoftwareImageId;
    }
    if (this._dbDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbDomain = this._dbDomain;
    }
    if (this._dbName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbName = this._dbName;
    }
    if (this._dbUniqueName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbUniqueName = this._dbUniqueName;
    }
    if (this._dbWorkload !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbWorkload = this._dbWorkload;
    }
    if (this._definedTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.definedTags = this._definedTags;
    }
    if (this._freeformTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeformTags = this._freeformTags;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._kmsKeyVersionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyVersionId = this._kmsKeyVersionId;
    }
    if (this._ncharacterSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ncharacterSet = this._ncharacterSet;
    }
    if (this._pdbName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdbName = this._pdbName;
    }
    if (this._pluggableDatabases !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluggableDatabases = this._pluggableDatabases;
    }
    if (this._tdeWalletPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.tdeWalletPassword = this._tdeWalletPassword;
    }
    if (this._timeStampForPointInTimeRecovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeStampForPointInTimeRecovery = this._timeStampForPointInTimeRecovery;
    }
    if (this._vaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultId = this._vaultId;
    }
    if (this._dbBackupConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbBackupConfig = this._dbBackupConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseDbSystemDbHomeDatabase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminPassword = undefined;
      this._backupId = undefined;
      this._backupTdePassword = undefined;
      this._characterSet = undefined;
      this._databaseId = undefined;
      this._databaseSoftwareImageId = undefined;
      this._dbDomain = undefined;
      this._dbName = undefined;
      this._dbUniqueName = undefined;
      this._dbWorkload = undefined;
      this._definedTags = undefined;
      this._freeformTags = undefined;
      this._kmsKeyId = undefined;
      this._kmsKeyVersionId = undefined;
      this._ncharacterSet = undefined;
      this._pdbName = undefined;
      this._pluggableDatabases = undefined;
      this._tdeWalletPassword = undefined;
      this._timeStampForPointInTimeRecovery = undefined;
      this._vaultId = undefined;
      this._dbBackupConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminPassword = value.adminPassword;
      this._backupId = value.backupId;
      this._backupTdePassword = value.backupTdePassword;
      this._characterSet = value.characterSet;
      this._databaseId = value.databaseId;
      this._databaseSoftwareImageId = value.databaseSoftwareImageId;
      this._dbDomain = value.dbDomain;
      this._dbName = value.dbName;
      this._dbUniqueName = value.dbUniqueName;
      this._dbWorkload = value.dbWorkload;
      this._definedTags = value.definedTags;
      this._freeformTags = value.freeformTags;
      this._kmsKeyId = value.kmsKeyId;
      this._kmsKeyVersionId = value.kmsKeyVersionId;
      this._ncharacterSet = value.ncharacterSet;
      this._pdbName = value.pdbName;
      this._pluggableDatabases = value.pluggableDatabases;
      this._tdeWalletPassword = value.tdeWalletPassword;
      this._timeStampForPointInTimeRecovery = value.timeStampForPointInTimeRecovery;
      this._vaultId = value.vaultId;
      this._dbBackupConfig.internalValue = value.dbBackupConfig;
    }
  }

  // admin_password - computed: false, optional: false, required: true
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // backup_id - computed: true, optional: true, required: false
  private _backupId?: string; 
  public get backupId() {
    return this.getStringAttribute('backup_id');
  }
  public set backupId(value: string) {
    this._backupId = value;
  }
  public resetBackupId() {
    this._backupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupIdInput() {
    return this._backupId;
  }

  // backup_tde_password - computed: true, optional: true, required: false
  private _backupTdePassword?: string; 
  public get backupTdePassword() {
    return this.getStringAttribute('backup_tde_password');
  }
  public set backupTdePassword(value: string) {
    this._backupTdePassword = value;
  }
  public resetBackupTdePassword() {
    this._backupTdePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupTdePasswordInput() {
    return this._backupTdePassword;
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

  // connection_strings - computed: true, optional: false, required: false
  private _connectionStrings = new DatabaseDbSystemDbHomeDatabaseConnectionStringsList(this, "connection_strings", false);
  public get connectionStrings() {
    return this._connectionStrings;
  }

  // database_id - computed: true, optional: true, required: false
  private _databaseId?: string; 
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }
  public set databaseId(value: string) {
    this._databaseId = value;
  }
  public resetDatabaseId() {
    this._databaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseIdInput() {
    return this._databaseId;
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

  // db_domain - computed: true, optional: true, required: false
  private _dbDomain?: string; 
  public get dbDomain() {
    return this.getStringAttribute('db_domain');
  }
  public set dbDomain(value: string) {
    this._dbDomain = value;
  }
  public resetDbDomain() {
    this._dbDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbDomainInput() {
    return this._dbDomain;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // kms_key_version_id - computed: true, optional: true, required: false
  private _kmsKeyVersionId?: string; 
  public get kmsKeyVersionId() {
    return this.getStringAttribute('kms_key_version_id');
  }
  public set kmsKeyVersionId(value: string) {
    this._kmsKeyVersionId = value;
  }
  public resetKmsKeyVersionId() {
    this._kmsKeyVersionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyVersionIdInput() {
    return this._kmsKeyVersionId;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
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

  // pdb_name - computed: true, optional: true, required: false
  private _pdbName?: string; 
  public get pdbName() {
    return this.getStringAttribute('pdb_name');
  }
  public set pdbName(value: string) {
    this._pdbName = value;
  }
  public resetPdbName() {
    this._pdbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdbNameInput() {
    return this._pdbName;
  }

  // pluggable_databases - computed: true, optional: true, required: false
  private _pluggableDatabases?: string[]; 
  public get pluggableDatabases() {
    return this.getListAttribute('pluggable_databases');
  }
  public set pluggableDatabases(value: string[]) {
    this._pluggableDatabases = value;
  }
  public resetPluggableDatabases() {
    this._pluggableDatabases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluggableDatabasesInput() {
    return this._pluggableDatabases;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tde_wallet_password - computed: true, optional: true, required: false
  private _tdeWalletPassword?: string; 
  public get tdeWalletPassword() {
    return this.getStringAttribute('tde_wallet_password');
  }
  public set tdeWalletPassword(value: string) {
    this._tdeWalletPassword = value;
  }
  public resetTdeWalletPassword() {
    this._tdeWalletPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tdeWalletPasswordInput() {
    return this._tdeWalletPassword;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_stamp_for_point_in_time_recovery - computed: true, optional: true, required: false
  private _timeStampForPointInTimeRecovery?: string; 
  public get timeStampForPointInTimeRecovery() {
    return this.getStringAttribute('time_stamp_for_point_in_time_recovery');
  }
  public set timeStampForPointInTimeRecovery(value: string) {
    this._timeStampForPointInTimeRecovery = value;
  }
  public resetTimeStampForPointInTimeRecovery() {
    this._timeStampForPointInTimeRecovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeStampForPointInTimeRecoveryInput() {
    return this._timeStampForPointInTimeRecovery;
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

  // db_backup_config - computed: false, optional: true, required: false
  private _dbBackupConfig = new DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference(this, "db_backup_config");
  public get dbBackupConfig() {
    return this._dbBackupConfig;
  }
  public putDbBackupConfig(value: DatabaseDbSystemDbHomeDatabaseDbBackupConfig) {
    this._dbBackupConfig.internalValue = value;
  }
  public resetDbBackupConfig() {
    this._dbBackupConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbBackupConfigInput() {
    return this._dbBackupConfig.internalValue;
  }
}
export interface DatabaseDbSystemDbHome {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#create_async DatabaseDbSystem#create_async}
  */
  readonly createAsync?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#database_software_image_id DatabaseDbSystem#database_software_image_id}
  */
  readonly databaseSoftwareImageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#db_version DatabaseDbSystem#db_version}
  */
  readonly dbVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#defined_tags DatabaseDbSystem#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#display_name DatabaseDbSystem#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#freeform_tags DatabaseDbSystem#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#is_unified_auditing_enabled DatabaseDbSystem#is_unified_auditing_enabled}
  */
  readonly isUnifiedAuditingEnabled?: boolean | cdktf.IResolvable;
  /**
  * database block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#database DatabaseDbSystem#database}
  */
  readonly database: DatabaseDbSystemDbHomeDatabase;
}

export function databaseDbSystemDbHomeToTerraform(struct?: DatabaseDbSystemDbHomeOutputReference | DatabaseDbSystemDbHome): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_async: cdktf.booleanToTerraform(struct!.createAsync),
    database_software_image_id: cdktf.stringToTerraform(struct!.databaseSoftwareImageId),
    db_version: cdktf.stringToTerraform(struct!.dbVersion),
    defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.definedTags),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.freeformTags),
    is_unified_auditing_enabled: cdktf.booleanToTerraform(struct!.isUnifiedAuditingEnabled),
    database: databaseDbSystemDbHomeDatabaseToTerraform(struct!.database),
  }
}


export function databaseDbSystemDbHomeToHclTerraform(struct?: DatabaseDbSystemDbHomeOutputReference | DatabaseDbSystemDbHome): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_async: {
      value: cdktf.booleanToHclTerraform(struct!.createAsync),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    database_software_image_id: {
      value: cdktf.stringToHclTerraform(struct!.databaseSoftwareImageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_version: {
      value: cdktf.stringToHclTerraform(struct!.dbVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    defined_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.definedTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    freeform_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.freeformTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    is_unified_auditing_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isUnifiedAuditingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    database: {
      value: databaseDbSystemDbHomeDatabaseToHclTerraform(struct!.database),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseDbSystemDbHomeDatabaseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseDbSystemDbHomeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseDbSystemDbHome | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createAsync !== undefined) {
      hasAnyValues = true;
      internalValueResult.createAsync = this._createAsync;
    }
    if (this._databaseSoftwareImageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseSoftwareImageId = this._databaseSoftwareImageId;
    }
    if (this._dbVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbVersion = this._dbVersion;
    }
    if (this._definedTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.definedTags = this._definedTags;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._freeformTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeformTags = this._freeformTags;
    }
    if (this._isUnifiedAuditingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isUnifiedAuditingEnabled = this._isUnifiedAuditingEnabled;
    }
    if (this._database?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseDbSystemDbHome | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._createAsync = undefined;
      this._databaseSoftwareImageId = undefined;
      this._dbVersion = undefined;
      this._definedTags = undefined;
      this._displayName = undefined;
      this._freeformTags = undefined;
      this._isUnifiedAuditingEnabled = undefined;
      this._database.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._createAsync = value.createAsync;
      this._databaseSoftwareImageId = value.databaseSoftwareImageId;
      this._dbVersion = value.dbVersion;
      this._definedTags = value.definedTags;
      this._displayName = value.displayName;
      this._freeformTags = value.freeformTags;
      this._isUnifiedAuditingEnabled = value.isUnifiedAuditingEnabled;
      this._database.internalValue = value.database;
    }
  }

  // create_async - computed: false, optional: true, required: false
  private _createAsync?: boolean | cdktf.IResolvable; 
  public get createAsync() {
    return this.getBooleanAttribute('create_async');
  }
  public set createAsync(value: boolean | cdktf.IResolvable) {
    this._createAsync = value;
  }
  public resetCreateAsync() {
    this._createAsync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createAsyncInput() {
    return this._createAsync;
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

  // db_home_location - computed: true, optional: false, required: false
  public get dbHomeLocation() {
    return this.getStringAttribute('db_home_location');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_unified_auditing_enabled - computed: true, optional: true, required: false
  private _isUnifiedAuditingEnabled?: boolean | cdktf.IResolvable; 
  public get isUnifiedAuditingEnabled() {
    return this.getBooleanAttribute('is_unified_auditing_enabled');
  }
  public set isUnifiedAuditingEnabled(value: boolean | cdktf.IResolvable) {
    this._isUnifiedAuditingEnabled = value;
  }
  public resetIsUnifiedAuditingEnabled() {
    this._isUnifiedAuditingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUnifiedAuditingEnabledInput() {
    return this._isUnifiedAuditingEnabled;
  }

  // last_patch_history_entry_id - computed: true, optional: false, required: false
  public get lastPatchHistoryEntryId() {
    return this.getStringAttribute('last_patch_history_entry_id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // database - computed: false, optional: false, required: true
  private _database = new DatabaseDbSystemDbHomeDatabaseOutputReference(this, "database");
  public get database() {
    return this._database;
  }
  public putDatabase(value: DatabaseDbSystemDbHomeDatabase) {
    this._database.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database.internalValue;
  }
}
export interface DatabaseDbSystemDbSystemOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#storage_management DatabaseDbSystem#storage_management}
  */
  readonly storageManagement?: string;
}

export function databaseDbSystemDbSystemOptionsToTerraform(struct?: DatabaseDbSystemDbSystemOptionsOutputReference | DatabaseDbSystemDbSystemOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_management: cdktf.stringToTerraform(struct!.storageManagement),
  }
}


export function databaseDbSystemDbSystemOptionsToHclTerraform(struct?: DatabaseDbSystemDbSystemOptionsOutputReference | DatabaseDbSystemDbSystemOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    storage_management: {
      value: cdktf.stringToHclTerraform(struct!.storageManagement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseDbSystemDbSystemOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseDbSystemDbSystemOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageManagement !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageManagement = this._storageManagement;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseDbSystemDbSystemOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._storageManagement = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._storageManagement = value.storageManagement;
    }
  }

  // storage_management - computed: true, optional: true, required: false
  private _storageManagement?: string; 
  public get storageManagement() {
    return this.getStringAttribute('storage_management');
  }
  public set storageManagement(value: string) {
    this._storageManagement = value;
  }
  public resetStorageManagement() {
    this._storageManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageManagementInput() {
    return this._storageManagement;
  }
}
export interface DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#name DatabaseDbSystem#name}
  */
  readonly name?: string;
}

export function databaseDbSystemMaintenanceWindowDetailsDaysOfWeekToTerraform(struct?: DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function databaseDbSystemMaintenanceWindowDetailsDaysOfWeekToHclTerraform(struct?: DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek | cdktf.IResolvable): any {
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

export class DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek | cdktf.IResolvable | undefined) {
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
}

export class DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList extends cdktf.ComplexList {
  public internalValue? : DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek[] | cdktf.IResolvable

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
  public get(index: number): DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference {
    return new DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseDbSystemMaintenanceWindowDetailsMonths {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#name DatabaseDbSystem#name}
  */
  readonly name?: string;
}

export function databaseDbSystemMaintenanceWindowDetailsMonthsToTerraform(struct?: DatabaseDbSystemMaintenanceWindowDetailsMonths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function databaseDbSystemMaintenanceWindowDetailsMonthsToHclTerraform(struct?: DatabaseDbSystemMaintenanceWindowDetailsMonths | cdktf.IResolvable): any {
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

export class DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseDbSystemMaintenanceWindowDetailsMonths | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseDbSystemMaintenanceWindowDetailsMonths | cdktf.IResolvable | undefined) {
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
}

export class DatabaseDbSystemMaintenanceWindowDetailsMonthsList extends cdktf.ComplexList {
  public internalValue? : DatabaseDbSystemMaintenanceWindowDetailsMonths[] | cdktf.IResolvable

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
  public get(index: number): DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference {
    return new DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseDbSystemMaintenanceWindowDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#custom_action_timeout_in_mins DatabaseDbSystem#custom_action_timeout_in_mins}
  */
  readonly customActionTimeoutInMins?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#hours_of_day DatabaseDbSystem#hours_of_day}
  */
  readonly hoursOfDay?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#is_custom_action_timeout_enabled DatabaseDbSystem#is_custom_action_timeout_enabled}
  */
  readonly isCustomActionTimeoutEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#is_monthly_patching_enabled DatabaseDbSystem#is_monthly_patching_enabled}
  */
  readonly isMonthlyPatchingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#lead_time_in_weeks DatabaseDbSystem#lead_time_in_weeks}
  */
  readonly leadTimeInWeeks?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#patching_mode DatabaseDbSystem#patching_mode}
  */
  readonly patchingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#preference DatabaseDbSystem#preference}
  */
  readonly preference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#skip_ru DatabaseDbSystem#skip_ru}
  */
  readonly skipRu?: Array<boolean | cdktf.IResolvable> | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#weeks_of_month DatabaseDbSystem#weeks_of_month}
  */
  readonly weeksOfMonth?: number[];
  /**
  * days_of_week block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#days_of_week DatabaseDbSystem#days_of_week}
  */
  readonly daysOfWeek?: DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek[] | cdktf.IResolvable;
  /**
  * months block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#months DatabaseDbSystem#months}
  */
  readonly months?: DatabaseDbSystemMaintenanceWindowDetailsMonths[] | cdktf.IResolvable;
}

export function databaseDbSystemMaintenanceWindowDetailsToTerraform(struct?: DatabaseDbSystemMaintenanceWindowDetailsOutputReference | DatabaseDbSystemMaintenanceWindowDetails): any {
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
    days_of_week: cdktf.listMapper(databaseDbSystemMaintenanceWindowDetailsDaysOfWeekToTerraform, true)(struct!.daysOfWeek),
    months: cdktf.listMapper(databaseDbSystemMaintenanceWindowDetailsMonthsToTerraform, true)(struct!.months),
  }
}


export function databaseDbSystemMaintenanceWindowDetailsToHclTerraform(struct?: DatabaseDbSystemMaintenanceWindowDetailsOutputReference | DatabaseDbSystemMaintenanceWindowDetails): any {
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
      value: cdktf.listMapperHcl(databaseDbSystemMaintenanceWindowDetailsDaysOfWeekToHclTerraform, true)(struct!.daysOfWeek),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList",
    },
    months: {
      value: cdktf.listMapperHcl(databaseDbSystemMaintenanceWindowDetailsMonthsToHclTerraform, true)(struct!.months),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseDbSystemMaintenanceWindowDetailsMonthsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseDbSystemMaintenanceWindowDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseDbSystemMaintenanceWindowDetails | undefined {
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

  public set internalValue(value: DatabaseDbSystemMaintenanceWindowDetails | undefined) {
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
  private _daysOfWeek = new DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList(this, "days_of_week", false);
  public get daysOfWeek() {
    return this._daysOfWeek;
  }
  public putDaysOfWeek(value: DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek[] | cdktf.IResolvable) {
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
  private _months = new DatabaseDbSystemMaintenanceWindowDetailsMonthsList(this, "months", false);
  public get months() {
    return this._months;
  }
  public putMonths(value: DatabaseDbSystemMaintenanceWindowDetailsMonths[] | cdktf.IResolvable) {
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
export interface DatabaseDbSystemTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#create DatabaseDbSystem#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#delete DatabaseDbSystem#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#update DatabaseDbSystem#update}
  */
  readonly update?: string;
}

export function databaseDbSystemTimeoutsToTerraform(struct?: DatabaseDbSystemTimeouts | cdktf.IResolvable): any {
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


export function databaseDbSystemTimeoutsToHclTerraform(struct?: DatabaseDbSystemTimeouts | cdktf.IResolvable): any {
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

export class DatabaseDbSystemTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseDbSystemTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseDbSystemTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system oci_database_db_system}
*/
export class DatabaseDbSystem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_db_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseDbSystem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseDbSystem to import
  * @param importFromId The id of the existing DatabaseDbSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseDbSystem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_db_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_db_system oci_database_db_system} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseDbSystemConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseDbSystemConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_db_system',
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
    this._availabilityDomain = config.availabilityDomain;
    this._backupNetworkNsgIds = config.backupNetworkNsgIds;
    this._backupSubnetId = config.backupSubnetId;
    this._clusterName = config.clusterName;
    this._clusterPlacementGroupId = config.clusterPlacementGroupId;
    this._compartmentId = config.compartmentId;
    this._computeCount = config.computeCount;
    this._computeModel = config.computeModel;
    this._cpuCoreCount = config.cpuCoreCount;
    this._dataStoragePercentage = config.dataStoragePercentage;
    this._dataStorageSizeInGb = config.dataStorageSizeInGb;
    this._databaseEdition = config.databaseEdition;
    this._definedTags = config.definedTags;
    this._diskRedundancy = config.diskRedundancy;
    this._displayName = config.displayName;
    this._domain = config.domain;
    this._faultDomains = config.faultDomains;
    this._freeformTags = config.freeformTags;
    this._hostname = config.hostname;
    this._id = config.id;
    this._kmsKeyId = config.kmsKeyId;
    this._kmsKeyVersionId = config.kmsKeyVersionId;
    this._licenseModel = config.licenseModel;
    this._nodeCount = config.nodeCount;
    this._nsgIds = config.nsgIds;
    this._privateIp = config.privateIp;
    this._privateIpV6 = config.privateIpV6;
    this._recoStorageSizeInGb = config.recoStorageSizeInGb;
    this._securityAttributes = config.securityAttributes;
    this._shape = config.shape;
    this._source = config.source;
    this._sourceDbSystemId = config.sourceDbSystemId;
    this._sparseDiskgroup = config.sparseDiskgroup;
    this._sshPublicKeys = config.sshPublicKeys;
    this._storageVolumePerformanceMode = config.storageVolumePerformanceMode;
    this._subnetId = config.subnetId;
    this._subscriptionId = config.subscriptionId;
    this._timeZone = config.timeZone;
    this._dataCollectionOptions.internalValue = config.dataCollectionOptions;
    this._dbHome.internalValue = config.dbHome;
    this._dbSystemOptions.internalValue = config.dbSystemOptions;
    this._maintenanceWindowDetails.internalValue = config.maintenanceWindowDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: false, optional: false, required: true
  private _availabilityDomain?: string; 
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }
  public set availabilityDomain(value: string) {
    this._availabilityDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityDomainInput() {
    return this._availabilityDomain;
  }

  // backup_network_nsg_ids - computed: false, optional: true, required: false
  private _backupNetworkNsgIds?: string[]; 
  public get backupNetworkNsgIds() {
    return cdktf.Fn.tolist(this.getListAttribute('backup_network_nsg_ids'));
  }
  public set backupNetworkNsgIds(value: string[]) {
    this._backupNetworkNsgIds = value;
  }
  public resetBackupNetworkNsgIds() {
    this._backupNetworkNsgIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupNetworkNsgIdsInput() {
    return this._backupNetworkNsgIds;
  }

  // backup_subnet_id - computed: true, optional: true, required: false
  private _backupSubnetId?: string; 
  public get backupSubnetId() {
    return this.getStringAttribute('backup_subnet_id');
  }
  public set backupSubnetId(value: string) {
    this._backupSubnetId = value;
  }
  public resetBackupSubnetId() {
    this._backupSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupSubnetIdInput() {
    return this._backupSubnetId;
  }

  // cluster_name - computed: true, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // cluster_placement_group_id - computed: true, optional: true, required: false
  private _clusterPlacementGroupId?: string; 
  public get clusterPlacementGroupId() {
    return this.getStringAttribute('cluster_placement_group_id');
  }
  public set clusterPlacementGroupId(value: string) {
    this._clusterPlacementGroupId = value;
  }
  public resetClusterPlacementGroupId() {
    this._clusterPlacementGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterPlacementGroupIdInput() {
    return this._clusterPlacementGroupId;
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

  // data_storage_percentage - computed: true, optional: true, required: false
  private _dataStoragePercentage?: number; 
  public get dataStoragePercentage() {
    return this.getNumberAttribute('data_storage_percentage');
  }
  public set dataStoragePercentage(value: number) {
    this._dataStoragePercentage = value;
  }
  public resetDataStoragePercentage() {
    this._dataStoragePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoragePercentageInput() {
    return this._dataStoragePercentage;
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

  // disk_redundancy - computed: true, optional: true, required: false
  private _diskRedundancy?: string; 
  public get diskRedundancy() {
    return this.getStringAttribute('disk_redundancy');
  }
  public set diskRedundancy(value: string) {
    this._diskRedundancy = value;
  }
  public resetDiskRedundancy() {
    this._diskRedundancy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskRedundancyInput() {
    return this._diskRedundancy;
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

  // domain - computed: true, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // fault_domains - computed: true, optional: true, required: false
  private _faultDomains?: string[]; 
  public get faultDomains() {
    return this.getListAttribute('fault_domains');
  }
  public set faultDomains(value: string[]) {
    this._faultDomains = value;
  }
  public resetFaultDomains() {
    this._faultDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultDomainsInput() {
    return this._faultDomains;
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

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // iorm_config_cache - computed: true, optional: false, required: false
  private _iormConfigCache = new DatabaseDbSystemIormConfigCacheList(this, "iorm_config_cache", false);
  public get iormConfigCache() {
    return this._iormConfigCache;
  }

  // kms_key_id - computed: false, optional: true, required: false
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

  // kms_key_version_id - computed: false, optional: true, required: false
  private _kmsKeyVersionId?: string; 
  public get kmsKeyVersionId() {
    return this.getStringAttribute('kms_key_version_id');
  }
  public set kmsKeyVersionId(value: string) {
    this._kmsKeyVersionId = value;
  }
  public resetKmsKeyVersionId() {
    this._kmsKeyVersionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyVersionIdInput() {
    return this._kmsKeyVersionId;
  }

  // last_maintenance_run_id - computed: true, optional: false, required: false
  public get lastMaintenanceRunId() {
    return this.getStringAttribute('last_maintenance_run_id');
  }

  // last_patch_history_entry_id - computed: true, optional: false, required: false
  public get lastPatchHistoryEntryId() {
    return this.getStringAttribute('last_patch_history_entry_id');
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

  // listener_port - computed: true, optional: false, required: false
  public get listenerPort() {
    return this.getNumberAttribute('listener_port');
  }

  // maintenance_window - computed: true, optional: false, required: false
  private _maintenanceWindow = new DatabaseDbSystemMaintenanceWindowList(this, "maintenance_window", false);
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }

  // memory_size_in_gbs - computed: true, optional: false, required: false
  public get memorySizeInGbs() {
    return this.getNumberAttribute('memory_size_in_gbs');
  }

  // next_maintenance_run_id - computed: true, optional: false, required: false
  public get nextMaintenanceRunId() {
    return this.getStringAttribute('next_maintenance_run_id');
  }

  // node_count - computed: true, optional: true, required: false
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  public resetNodeCount() {
    this._nodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // nsg_ids - computed: false, optional: true, required: false
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

  // os_version - computed: true, optional: false, required: false
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }

  // point_in_time_data_disk_clone_timestamp - computed: true, optional: false, required: false
  public get pointInTimeDataDiskCloneTimestamp() {
    return this.getStringAttribute('point_in_time_data_disk_clone_timestamp');
  }

  // private_ip - computed: true, optional: true, required: false
  private _privateIp?: string; 
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
  public set privateIp(value: string) {
    this._privateIp = value;
  }
  public resetPrivateIp() {
    this._privateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp;
  }

  // private_ip_v6 - computed: true, optional: true, required: false
  private _privateIpV6?: string; 
  public get privateIpV6() {
    return this.getStringAttribute('private_ip_v6');
  }
  public set privateIpV6(value: string) {
    this._privateIpV6 = value;
  }
  public resetPrivateIpV6() {
    this._privateIpV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpV6Input() {
    return this._privateIpV6;
  }

  // reco_storage_size_in_gb - computed: true, optional: true, required: false
  private _recoStorageSizeInGb?: number; 
  public get recoStorageSizeInGb() {
    return this.getNumberAttribute('reco_storage_size_in_gb');
  }
  public set recoStorageSizeInGb(value: number) {
    this._recoStorageSizeInGb = value;
  }
  public resetRecoStorageSizeInGb() {
    this._recoStorageSizeInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoStorageSizeInGbInput() {
    return this._recoStorageSizeInGb;
  }

  // scan_dns_name - computed: true, optional: false, required: false
  public get scanDnsName() {
    return this.getStringAttribute('scan_dns_name');
  }

  // scan_dns_record_id - computed: true, optional: false, required: false
  public get scanDnsRecordId() {
    return this.getStringAttribute('scan_dns_record_id');
  }

  // scan_ip_ids - computed: true, optional: false, required: false
  public get scanIpIds() {
    return this.getListAttribute('scan_ip_ids');
  }

  // scan_ipv6ids - computed: true, optional: false, required: false
  public get scanIpv6Ids() {
    return this.getListAttribute('scan_ipv6ids');
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

  // shape - computed: false, optional: false, required: true
  private _shape?: string; 
  public get shape() {
    return this.getStringAttribute('shape');
  }
  public set shape(value: string) {
    this._shape = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeInput() {
    return this._shape;
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

  // source_db_system_id - computed: true, optional: true, required: false
  private _sourceDbSystemId?: string; 
  public get sourceDbSystemId() {
    return this.getStringAttribute('source_db_system_id');
  }
  public set sourceDbSystemId(value: string) {
    this._sourceDbSystemId = value;
  }
  public resetSourceDbSystemId() {
    this._sourceDbSystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDbSystemIdInput() {
    return this._sourceDbSystemId;
  }

  // sparse_diskgroup - computed: true, optional: true, required: false
  private _sparseDiskgroup?: boolean | cdktf.IResolvable; 
  public get sparseDiskgroup() {
    return this.getBooleanAttribute('sparse_diskgroup');
  }
  public set sparseDiskgroup(value: boolean | cdktf.IResolvable) {
    this._sparseDiskgroup = value;
  }
  public resetSparseDiskgroup() {
    this._sparseDiskgroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparseDiskgroupInput() {
    return this._sparseDiskgroup;
  }

  // ssh_public_keys - computed: false, optional: false, required: true
  private _sshPublicKeys?: string[]; 
  public get sshPublicKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_public_keys'));
  }
  public set sshPublicKeys(value: string[]) {
    this._sshPublicKeys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeysInput() {
    return this._sshPublicKeys;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // storage_volume_performance_mode - computed: true, optional: true, required: false
  private _storageVolumePerformanceMode?: string; 
  public get storageVolumePerformanceMode() {
    return this.getStringAttribute('storage_volume_performance_mode');
  }
  public set storageVolumePerformanceMode(value: string) {
    this._storageVolumePerformanceMode = value;
  }
  public resetStorageVolumePerformanceMode() {
    this._storageVolumePerformanceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageVolumePerformanceModeInput() {
    return this._storageVolumePerformanceMode;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
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

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_zone - computed: true, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // vip_ids - computed: true, optional: false, required: false
  public get vipIds() {
    return this.getListAttribute('vip_ids');
  }

  // vipv6ids - computed: true, optional: false, required: false
  public get vipv6Ids() {
    return this.getListAttribute('vipv6ids');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }

  // data_collection_options - computed: false, optional: true, required: false
  private _dataCollectionOptions = new DatabaseDbSystemDataCollectionOptionsOutputReference(this, "data_collection_options");
  public get dataCollectionOptions() {
    return this._dataCollectionOptions;
  }
  public putDataCollectionOptions(value: DatabaseDbSystemDataCollectionOptions) {
    this._dataCollectionOptions.internalValue = value;
  }
  public resetDataCollectionOptions() {
    this._dataCollectionOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCollectionOptionsInput() {
    return this._dataCollectionOptions.internalValue;
  }

  // db_home - computed: false, optional: false, required: true
  private _dbHome = new DatabaseDbSystemDbHomeOutputReference(this, "db_home");
  public get dbHome() {
    return this._dbHome;
  }
  public putDbHome(value: DatabaseDbSystemDbHome) {
    this._dbHome.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbHomeInput() {
    return this._dbHome.internalValue;
  }

  // db_system_options - computed: false, optional: true, required: false
  private _dbSystemOptions = new DatabaseDbSystemDbSystemOptionsOutputReference(this, "db_system_options");
  public get dbSystemOptions() {
    return this._dbSystemOptions;
  }
  public putDbSystemOptions(value: DatabaseDbSystemDbSystemOptions) {
    this._dbSystemOptions.internalValue = value;
  }
  public resetDbSystemOptions() {
    this._dbSystemOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSystemOptionsInput() {
    return this._dbSystemOptions.internalValue;
  }

  // maintenance_window_details - computed: false, optional: true, required: false
  private _maintenanceWindowDetails = new DatabaseDbSystemMaintenanceWindowDetailsOutputReference(this, "maintenance_window_details");
  public get maintenanceWindowDetails() {
    return this._maintenanceWindowDetails;
  }
  public putMaintenanceWindowDetails(value: DatabaseDbSystemMaintenanceWindowDetails) {
    this._maintenanceWindowDetails.internalValue = value;
  }
  public resetMaintenanceWindowDetails() {
    this._maintenanceWindowDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowDetailsInput() {
    return this._maintenanceWindowDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseDbSystemTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseDbSystemTimeouts) {
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
      availability_domain: cdktf.stringToTerraform(this._availabilityDomain),
      backup_network_nsg_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._backupNetworkNsgIds),
      backup_subnet_id: cdktf.stringToTerraform(this._backupSubnetId),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      cluster_placement_group_id: cdktf.stringToTerraform(this._clusterPlacementGroupId),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      compute_count: cdktf.numberToTerraform(this._computeCount),
      compute_model: cdktf.stringToTerraform(this._computeModel),
      cpu_core_count: cdktf.numberToTerraform(this._cpuCoreCount),
      data_storage_percentage: cdktf.numberToTerraform(this._dataStoragePercentage),
      data_storage_size_in_gb: cdktf.numberToTerraform(this._dataStorageSizeInGb),
      database_edition: cdktf.stringToTerraform(this._databaseEdition),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      disk_redundancy: cdktf.stringToTerraform(this._diskRedundancy),
      display_name: cdktf.stringToTerraform(this._displayName),
      domain: cdktf.stringToTerraform(this._domain),
      fault_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._faultDomains),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      kms_key_version_id: cdktf.stringToTerraform(this._kmsKeyVersionId),
      license_model: cdktf.stringToTerraform(this._licenseModel),
      node_count: cdktf.numberToTerraform(this._nodeCount),
      nsg_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nsgIds),
      private_ip: cdktf.stringToTerraform(this._privateIp),
      private_ip_v6: cdktf.stringToTerraform(this._privateIpV6),
      reco_storage_size_in_gb: cdktf.numberToTerraform(this._recoStorageSizeInGb),
      security_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._securityAttributes),
      shape: cdktf.stringToTerraform(this._shape),
      source: cdktf.stringToTerraform(this._source),
      source_db_system_id: cdktf.stringToTerraform(this._sourceDbSystemId),
      sparse_diskgroup: cdktf.booleanToTerraform(this._sparseDiskgroup),
      ssh_public_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshPublicKeys),
      storage_volume_performance_mode: cdktf.stringToTerraform(this._storageVolumePerformanceMode),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      data_collection_options: databaseDbSystemDataCollectionOptionsToTerraform(this._dataCollectionOptions.internalValue),
      db_home: databaseDbSystemDbHomeToTerraform(this._dbHome.internalValue),
      db_system_options: databaseDbSystemDbSystemOptionsToTerraform(this._dbSystemOptions.internalValue),
      maintenance_window_details: databaseDbSystemMaintenanceWindowDetailsToTerraform(this._maintenanceWindowDetails.internalValue),
      timeouts: databaseDbSystemTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_domain: {
        value: cdktf.stringToHclTerraform(this._availabilityDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_network_nsg_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._backupNetworkNsgIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      backup_subnet_id: {
        value: cdktf.stringToHclTerraform(this._backupSubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_placement_group_id: {
        value: cdktf.stringToHclTerraform(this._clusterPlacementGroupId),
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
      data_storage_percentage: {
        value: cdktf.numberToHclTerraform(this._dataStoragePercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_storage_size_in_gb: {
        value: cdktf.numberToHclTerraform(this._dataStorageSizeInGb),
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
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      disk_redundancy: {
        value: cdktf.stringToHclTerraform(this._diskRedundancy),
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
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fault_domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._faultDomains),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      kms_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_version_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyVersionId),
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
      node_count: {
        value: cdktf.numberToHclTerraform(this._nodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nsg_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nsgIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      private_ip: {
        value: cdktf.stringToHclTerraform(this._privateIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_ip_v6: {
        value: cdktf.stringToHclTerraform(this._privateIpV6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reco_storage_size_in_gb: {
        value: cdktf.numberToHclTerraform(this._recoStorageSizeInGb),
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
      shape: {
        value: cdktf.stringToHclTerraform(this._shape),
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
      source_db_system_id: {
        value: cdktf.stringToHclTerraform(this._sourceDbSystemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sparse_diskgroup: {
        value: cdktf.booleanToHclTerraform(this._sparseDiskgroup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssh_public_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshPublicKeys),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      storage_volume_performance_mode: {
        value: cdktf.stringToHclTerraform(this._storageVolumePerformanceMode),
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
      time_zone: {
        value: cdktf.stringToHclTerraform(this._timeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_collection_options: {
        value: databaseDbSystemDataCollectionOptionsToHclTerraform(this._dataCollectionOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseDbSystemDataCollectionOptionsList",
      },
      db_home: {
        value: databaseDbSystemDbHomeToHclTerraform(this._dbHome.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseDbSystemDbHomeList",
      },
      db_system_options: {
        value: databaseDbSystemDbSystemOptionsToHclTerraform(this._dbSystemOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseDbSystemDbSystemOptionsList",
      },
      maintenance_window_details: {
        value: databaseDbSystemMaintenanceWindowDetailsToHclTerraform(this._maintenanceWindowDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseDbSystemMaintenanceWindowDetailsList",
      },
      timeouts: {
        value: databaseDbSystemTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseDbSystemTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
