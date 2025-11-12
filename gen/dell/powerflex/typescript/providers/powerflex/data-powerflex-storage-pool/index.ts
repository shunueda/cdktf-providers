// https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerflexStoragePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#filter DataPowerflexStoragePool#filter}
  */
  readonly filter?: DataPowerflexStoragePoolFilter;
}
export interface DataPowerflexStoragePoolStoragePoolsLinks {
}

export function dataPowerflexStoragePoolStoragePoolsLinksToTerraform(struct?: DataPowerflexStoragePoolStoragePoolsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexStoragePoolStoragePoolsLinksToHclTerraform(struct?: DataPowerflexStoragePoolStoragePoolsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexStoragePoolStoragePoolsLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexStoragePoolStoragePoolsLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexStoragePoolStoragePoolsLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class DataPowerflexStoragePoolStoragePoolsLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexStoragePoolStoragePoolsLinksOutputReference {
    return new DataPowerflexStoragePoolStoragePoolsLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexStoragePoolStoragePoolsSds {
}

export function dataPowerflexStoragePoolStoragePoolsSdsToTerraform(struct?: DataPowerflexStoragePoolStoragePoolsSds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexStoragePoolStoragePoolsSdsToHclTerraform(struct?: DataPowerflexStoragePoolStoragePoolsSds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexStoragePoolStoragePoolsSdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexStoragePoolStoragePoolsSds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexStoragePoolStoragePoolsSds | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataPowerflexStoragePoolStoragePoolsSdsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexStoragePoolStoragePoolsSdsOutputReference {
    return new DataPowerflexStoragePoolStoragePoolsSdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexStoragePoolStoragePoolsVolumes {
}

export function dataPowerflexStoragePoolStoragePoolsVolumesToTerraform(struct?: DataPowerflexStoragePoolStoragePoolsVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexStoragePoolStoragePoolsVolumesToHclTerraform(struct?: DataPowerflexStoragePoolStoragePoolsVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexStoragePoolStoragePoolsVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexStoragePoolStoragePoolsVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexStoragePoolStoragePoolsVolumes | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataPowerflexStoragePoolStoragePoolsVolumesList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexStoragePoolStoragePoolsVolumesOutputReference {
    return new DataPowerflexStoragePoolStoragePoolsVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexStoragePoolStoragePools {
}

export function dataPowerflexStoragePoolStoragePoolsToTerraform(struct?: DataPowerflexStoragePoolStoragePools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexStoragePoolStoragePoolsToHclTerraform(struct?: DataPowerflexStoragePoolStoragePools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexStoragePoolStoragePoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexStoragePoolStoragePools | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexStoragePoolStoragePools | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_space_usage - computed: true, optional: false, required: false
  public get addressSpaceUsage() {
    return this.getStringAttribute('address_space_usage');
  }

  // address_space_usage_type - computed: true, optional: false, required: false
  public get addressSpaceUsageType() {
    return this.getStringAttribute('address_space_usage_type');
  }

  // background_scanner_bw_limit_kbps - computed: true, optional: false, required: false
  public get backgroundScannerBwLimitKbps() {
    return this.getNumberAttribute('background_scanner_bw_limit_kbps');
  }

  // background_scanner_mode - computed: true, optional: false, required: false
  public get backgroundScannerMode() {
    return this.getStringAttribute('background_scanner_mode');
  }

  // bg_scanner_compare_error_action - computed: true, optional: false, required: false
  public get bgScannerCompareErrorAction() {
    return this.getStringAttribute('bg_scanner_compare_error_action');
  }

  // bg_scanner_read_error_action - computed: true, optional: false, required: false
  public get bgScannerReadErrorAction() {
    return this.getStringAttribute('bg_scanner_read_error_action');
  }

  // capacity_alert_critical_threshold - computed: true, optional: false, required: false
  public get capacityAlertCriticalThreshold() {
    return this.getNumberAttribute('capacity_alert_critical_threshold');
  }

  // capacity_alert_high_threshold - computed: true, optional: false, required: false
  public get capacityAlertHighThreshold() {
    return this.getNumberAttribute('capacity_alert_high_threshold');
  }

  // capacity_usage_state - computed: true, optional: false, required: false
  public get capacityUsageState() {
    return this.getStringAttribute('capacity_usage_state');
  }

  // capacity_usage_type - computed: true, optional: false, required: false
  public get capacityUsageType() {
    return this.getStringAttribute('capacity_usage_type');
  }

  // checksum_enabled - computed: true, optional: false, required: false
  public get checksumEnabled() {
    return this.getBooleanAttribute('checksum_enabled');
  }

  // compression_method - computed: true, optional: false, required: false
  public get compressionMethod() {
    return this.getStringAttribute('compression_method');
  }

  // data_layout - computed: true, optional: false, required: false
  public get dataLayout() {
    return this.getStringAttribute('data_layout');
  }

  // external_acceleration_type - computed: true, optional: false, required: false
  public get externalAccelerationType() {
    return this.getStringAttribute('external_acceleration_type');
  }

  // fgl_accp_id - computed: true, optional: false, required: false
  public get fglAccpId() {
    return this.getStringAttribute('fgl_accp_id');
  }

  // fgl_extra_capacity - computed: true, optional: false, required: false
  public get fglExtraCapacity() {
    return this.getNumberAttribute('fgl_extra_capacity');
  }

  // fgl_nvdimm_metadata_amotization_x100 - computed: true, optional: false, required: false
  public get fglNvdimmMetadataAmotizationX100() {
    return this.getNumberAttribute('fgl_nvdimm_metadata_amotization_x100');
  }

  // fgl_nvdimm_write_cache_size_mb - computed: true, optional: false, required: false
  public get fglNvdimmWriteCacheSizeMb() {
    return this.getNumberAttribute('fgl_nvdimm_write_cache_size_mb');
  }

  // fgl_overprovisioning_factor - computed: true, optional: false, required: false
  public get fglOverprovisioningFactor() {
    return this.getNumberAttribute('fgl_overprovisioning_factor');
  }

  // fgl_perf_profile - computed: true, optional: false, required: false
  public get fglPerfProfile() {
    return this.getStringAttribute('fgl_perf_profile');
  }

  // fgl_write_atomicity_size - computed: true, optional: false, required: false
  public get fglWriteAtomicitySize() {
    return this.getNumberAttribute('fgl_write_atomicity_size');
  }

  // fragmentation_enabled - computed: true, optional: false, required: false
  public get fragmentationEnabled() {
    return this.getBooleanAttribute('fragmentation_enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataPowerflexStoragePoolStoragePoolsLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // media_type - computed: true, optional: false, required: false
  public get mediaType() {
    return this.getStringAttribute('media_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // num_of_parallel_rebuild_rebalance_jobs_per_device - computed: true, optional: false, required: false
  public get numOfParallelRebuildRebalanceJobsPerDevice() {
    return this.getNumberAttribute('num_of_parallel_rebuild_rebalance_jobs_per_device');
  }

  // persistent_checksum_builder_limit_kb - computed: true, optional: false, required: false
  public get persistentChecksumBuilderLimitKb() {
    return this.getNumberAttribute('persistent_checksum_builder_limit_kb');
  }

  // persistent_checksum_enabled - computed: true, optional: false, required: false
  public get persistentChecksumEnabled() {
    return this.getBooleanAttribute('persistent_checksum_enabled');
  }

  // persistent_checksum_state - computed: true, optional: false, required: false
  public get persistentChecksumState() {
    return this.getStringAttribute('persistent_checksum_state');
  }

  // persistent_checksum_validate_on_read - computed: true, optional: false, required: false
  public get persistentChecksumValidateOnRead() {
    return this.getBooleanAttribute('persistent_checksum_validate_on_read');
  }

  // protected_maintenance_mode_io_priority_app_bw_per_device_threshold_kbps - computed: true, optional: false, required: false
  public get protectedMaintenanceModeIoPriorityAppBwPerDeviceThresholdKbps() {
    return this.getNumberAttribute('protected_maintenance_mode_io_priority_app_bw_per_device_threshold_kbps');
  }

  // protected_maintenance_mode_io_priority_app_iops_per_device_threshold - computed: true, optional: false, required: false
  public get protectedMaintenanceModeIoPriorityAppIopsPerDeviceThreshold() {
    return this.getNumberAttribute('protected_maintenance_mode_io_priority_app_iops_per_device_threshold');
  }

  // protected_maintenance_mode_io_priority_bw_limit_per_device_kbps - computed: true, optional: false, required: false
  public get protectedMaintenanceModeIoPriorityBwLimitPerDeviceKbps() {
    return this.getNumberAttribute('protected_maintenance_mode_io_priority_bw_limit_per_device_kbps');
  }

  // protected_maintenance_mode_io_priority_num_of_concurrent_ios_per_device - computed: true, optional: false, required: false
  public get protectedMaintenanceModeIoPriorityNumOfConcurrentIosPerDevice() {
    return this.getNumberAttribute('protected_maintenance_mode_io_priority_num_of_concurrent_ios_per_device');
  }

  // protected_maintenance_mode_io_priority_policy - computed: true, optional: false, required: false
  public get protectedMaintenanceModeIoPriorityPolicy() {
    return this.getStringAttribute('protected_maintenance_mode_io_priority_policy');
  }

  // protected_maintenance_mode_io_priority_quiet_period_msec - computed: true, optional: false, required: false
  public get protectedMaintenanceModeIoPriorityQuietPeriodMsec() {
    return this.getNumberAttribute('protected_maintenance_mode_io_priority_quiet_period_msec');
  }

  // rebalance_enabled - computed: true, optional: false, required: false
  public get rebalanceEnabled() {
    return this.getBooleanAttribute('rebalance_enabled');
  }

  // rebalance_io_priority_app_bw_per_device_threshold_kbps - computed: true, optional: false, required: false
  public get rebalanceIoPriorityAppBwPerDeviceThresholdKbps() {
    return this.getNumberAttribute('rebalance_io_priority_app_bw_per_device_threshold_kbps');
  }

  // rebalance_io_priority_app_iops_per_device_threshold - computed: true, optional: false, required: false
  public get rebalanceIoPriorityAppIopsPerDeviceThreshold() {
    return this.getNumberAttribute('rebalance_io_priority_app_iops_per_device_threshold');
  }

  // rebalance_io_priority_bw_limit_per_device_kbps - computed: true, optional: false, required: false
  public get rebalanceIoPriorityBwLimitPerDeviceKbps() {
    return this.getNumberAttribute('rebalance_io_priority_bw_limit_per_device_kbps');
  }

  // rebalance_io_priority_num_of_concurrent_ios_per_device - computed: true, optional: false, required: false
  public get rebalanceIoPriorityNumOfConcurrentIosPerDevice() {
    return this.getNumberAttribute('rebalance_io_priority_num_of_concurrent_ios_per_device');
  }

  // rebalance_io_priority_policy - computed: true, optional: false, required: false
  public get rebalanceIoPriorityPolicy() {
    return this.getStringAttribute('rebalance_io_priority_policy');
  }

  // rebalance_io_priority_quiet_period_msec - computed: true, optional: false, required: false
  public get rebalanceIoPriorityQuietPeriodMsec() {
    return this.getNumberAttribute('rebalance_io_priority_quiet_period_msec');
  }

  // rebuild_enabled - computed: true, optional: false, required: false
  public get rebuildEnabled() {
    return this.getBooleanAttribute('rebuild_enabled');
  }

  // rebuild_io_priority_app_bw_per_device_threshold_kbps - computed: true, optional: false, required: false
  public get rebuildIoPriorityAppBwPerDeviceThresholdKbps() {
    return this.getNumberAttribute('rebuild_io_priority_app_bw_per_device_threshold_kbps');
  }

  // rebuild_io_priority_app_iops_per_device_threshold - computed: true, optional: false, required: false
  public get rebuildIoPriorityAppIopsPerDeviceThreshold() {
    return this.getNumberAttribute('rebuild_io_priority_app_iops_per_device_threshold');
  }

  // rebuild_io_priority_bw_limit_per_device_in_kbps - computed: true, optional: false, required: false
  public get rebuildIoPriorityBwLimitPerDeviceInKbps() {
    return this.getNumberAttribute('rebuild_io_priority_bw_limit_per_device_in_kbps');
  }

  // rebuild_io_priority_num_of_concurrent_ios_per_device - computed: true, optional: false, required: false
  public get rebuildIoPriorityNumOfConcurrentIosPerDevice() {
    return this.getNumberAttribute('rebuild_io_priority_num_of_concurrent_ios_per_device');
  }

  // rebuild_io_priority_policy - computed: true, optional: false, required: false
  public get rebuildIoPriorityPolicy() {
    return this.getStringAttribute('rebuild_io_priority_policy');
  }

  // rebuild_io_priority_quiet_period_msec - computed: true, optional: false, required: false
  public get rebuildIoPriorityQuietPeriodMsec() {
    return this.getNumberAttribute('rebuild_io_priority_quiet_period_msec');
  }

  // replication_capacity_max_ratio - computed: true, optional: false, required: false
  public get replicationCapacityMaxRatio() {
    return this.getNumberAttribute('replication_capacity_max_ratio');
  }

  // rm_cache_write_handling_mode - computed: true, optional: false, required: false
  public get rmCacheWriteHandlingMode() {
    return this.getStringAttribute('rm_cache_write_handling_mode');
  }

  // sds - computed: true, optional: false, required: false
  private _sds = new DataPowerflexStoragePoolStoragePoolsSdsList(this, "sds", false);
  public get sds() {
    return this._sds;
  }

  // spare_percentage - computed: true, optional: false, required: false
  public get sparePercentage() {
    return this.getNumberAttribute('spare_percentage');
  }

  // use_rf_cache - computed: true, optional: false, required: false
  public get useRfCache() {
    return this.getBooleanAttribute('use_rf_cache');
  }

  // use_rm_cache - computed: true, optional: false, required: false
  public get useRmCache() {
    return this.getBooleanAttribute('use_rm_cache');
  }

  // volumes - computed: true, optional: false, required: false
  private _volumes = new DataPowerflexStoragePoolStoragePoolsVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }

  // vtree_migration_io_priority_app_bw_per_device_threshold_kbps - computed: true, optional: false, required: false
  public get vtreeMigrationIoPriorityAppBwPerDeviceThresholdKbps() {
    return this.getNumberAttribute('vtree_migration_io_priority_app_bw_per_device_threshold_kbps');
  }

  // vtree_migration_io_priority_app_iops_per_device_threshold - computed: true, optional: false, required: false
  public get vtreeMigrationIoPriorityAppIopsPerDeviceThreshold() {
    return this.getNumberAttribute('vtree_migration_io_priority_app_iops_per_device_threshold');
  }

  // vtree_migration_io_priority_bw_limit_per_device_kbps - computed: true, optional: false, required: false
  public get vtreeMigrationIoPriorityBwLimitPerDeviceKbps() {
    return this.getNumberAttribute('vtree_migration_io_priority_bw_limit_per_device_kbps');
  }

  // vtree_migration_io_priority_num_of_concurrent_ios_per_device - computed: true, optional: false, required: false
  public get vtreeMigrationIoPriorityNumOfConcurrentIosPerDevice() {
    return this.getNumberAttribute('vtree_migration_io_priority_num_of_concurrent_ios_per_device');
  }

  // vtree_migration_io_priority_policy - computed: true, optional: false, required: false
  public get vtreeMigrationIoPriorityPolicy() {
    return this.getStringAttribute('vtree_migration_io_priority_policy');
  }

  // vtree_migration_io_priority_quiet_period_msec - computed: true, optional: false, required: false
  public get vtreeMigrationIoPriorityQuietPeriodMsec() {
    return this.getNumberAttribute('vtree_migration_io_priority_quiet_period_msec');
  }

  // zero_padding_enabled - computed: true, optional: false, required: false
  public get zeroPaddingEnabled() {
    return this.getBooleanAttribute('zero_padding_enabled');
  }
}

export class DataPowerflexStoragePoolStoragePoolsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexStoragePoolStoragePoolsOutputReference {
    return new DataPowerflexStoragePoolStoragePoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexStoragePoolFilter {
  /**
  * List of address_space_usage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#address_space_usage DataPowerflexStoragePool#address_space_usage}
  */
  readonly addressSpaceUsage?: string[];
  /**
  * List of address_space_usage_type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#address_space_usage_type DataPowerflexStoragePool#address_space_usage_type}
  */
  readonly addressSpaceUsageType?: string[];
  /**
  * List of background_scanner_bw_limit_kbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#background_scanner_bw_limit_kbps DataPowerflexStoragePool#background_scanner_bw_limit_kbps}
  */
  readonly backgroundScannerBwLimitKbps?: number[];
  /**
  * List of background_scanner_mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#background_scanner_mode DataPowerflexStoragePool#background_scanner_mode}
  */
  readonly backgroundScannerMode?: string[];
  /**
  * List of bg_scanner_compare_error_action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#bg_scanner_compare_error_action DataPowerflexStoragePool#bg_scanner_compare_error_action}
  */
  readonly bgScannerCompareErrorAction?: string[];
  /**
  * List of bg_scanner_read_error_action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#bg_scanner_read_error_action DataPowerflexStoragePool#bg_scanner_read_error_action}
  */
  readonly bgScannerReadErrorAction?: string[];
  /**
  * List of capacity_alert_critical_threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#capacity_alert_critical_threshold DataPowerflexStoragePool#capacity_alert_critical_threshold}
  */
  readonly capacityAlertCriticalThreshold?: number[];
  /**
  * List of capacity_alert_high_threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#capacity_alert_high_threshold DataPowerflexStoragePool#capacity_alert_high_threshold}
  */
  readonly capacityAlertHighThreshold?: number[];
  /**
  * List of capacity_usage_state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#capacity_usage_state DataPowerflexStoragePool#capacity_usage_state}
  */
  readonly capacityUsageState?: string[];
  /**
  * List of capacity_usage_type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#capacity_usage_type DataPowerflexStoragePool#capacity_usage_type}
  */
  readonly capacityUsageType?: string[];
  /**
  * Value for checksum_enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#checksum_enabled DataPowerflexStoragePool#checksum_enabled}
  */
  readonly checksumEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of compression_method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#compression_method DataPowerflexStoragePool#compression_method}
  */
  readonly compressionMethod?: string[];
  /**
  * List of data_layout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#data_layout DataPowerflexStoragePool#data_layout}
  */
  readonly dataLayout?: string[];
  /**
  * List of external_acceleration_type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#external_acceleration_type DataPowerflexStoragePool#external_acceleration_type}
  */
  readonly externalAccelerationType?: string[];
  /**
  * List of fgl_accp_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#fgl_accp_id DataPowerflexStoragePool#fgl_accp_id}
  */
  readonly fglAccpId?: string[];
  /**
  * List of fgl_extra_capacity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#fgl_extra_capacity DataPowerflexStoragePool#fgl_extra_capacity}
  */
  readonly fglExtraCapacity?: number[];
  /**
  * List of fgl_nvdimm_metadata_amotization_x100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#fgl_nvdimm_metadata_amotization_x100 DataPowerflexStoragePool#fgl_nvdimm_metadata_amotization_x100}
  */
  readonly fglNvdimmMetadataAmotizationX100?: number[];
  /**
  * List of fgl_nvdimm_write_cache_size_mb
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#fgl_nvdimm_write_cache_size_mb DataPowerflexStoragePool#fgl_nvdimm_write_cache_size_mb}
  */
  readonly fglNvdimmWriteCacheSizeMb?: number[];
  /**
  * List of fgl_overprovisioning_factor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#fgl_overprovisioning_factor DataPowerflexStoragePool#fgl_overprovisioning_factor}
  */
  readonly fglOverprovisioningFactor?: number[];
  /**
  * List of fgl_perf_profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#fgl_perf_profile DataPowerflexStoragePool#fgl_perf_profile}
  */
  readonly fglPerfProfile?: string[];
  /**
  * List of fgl_write_atomicity_size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#fgl_write_atomicity_size DataPowerflexStoragePool#fgl_write_atomicity_size}
  */
  readonly fglWriteAtomicitySize?: number[];
  /**
  * Value for fragmentation_enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#fragmentation_enabled DataPowerflexStoragePool#fragmentation_enabled}
  */
  readonly fragmentationEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#id DataPowerflexStoragePool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string[];
  /**
  * List of media_type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#media_type DataPowerflexStoragePool#media_type}
  */
  readonly mediaType?: string[];
  /**
  * List of name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#name DataPowerflexStoragePool#name}
  */
  readonly name?: string[];
  /**
  * List of num_of_parallel_rebuild_rebalance_jobs_per_device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#num_of_parallel_rebuild_rebalance_jobs_per_device DataPowerflexStoragePool#num_of_parallel_rebuild_rebalance_jobs_per_device}
  */
  readonly numOfParallelRebuildRebalanceJobsPerDevice?: number[];
  /**
  * List of persistent_checksum_builder_limit_kb
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#persistent_checksum_builder_limit_kb DataPowerflexStoragePool#persistent_checksum_builder_limit_kb}
  */
  readonly persistentChecksumBuilderLimitKb?: number[];
  /**
  * Value for persistent_checksum_enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#persistent_checksum_enabled DataPowerflexStoragePool#persistent_checksum_enabled}
  */
  readonly persistentChecksumEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of persistent_checksum_state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#persistent_checksum_state DataPowerflexStoragePool#persistent_checksum_state}
  */
  readonly persistentChecksumState?: string[];
  /**
  * Value for persistent_checksum_validate_on_read
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#persistent_checksum_validate_on_read DataPowerflexStoragePool#persistent_checksum_validate_on_read}
  */
  readonly persistentChecksumValidateOnRead?: boolean | cdktf.IResolvable;
  /**
  * List of protected_maintenance_mode_io_priority_app_bw_per_device_threshold_kbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#protected_maintenance_mode_io_priority_app_bw_per_device_threshold_kbps DataPowerflexStoragePool#protected_maintenance_mode_io_priority_app_bw_per_device_threshold_kbps}
  */
  readonly protectedMaintenanceModeIoPriorityAppBwPerDeviceThresholdKbps?: number[];
  /**
  * List of protected_maintenance_mode_io_priority_app_iops_per_device_threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#protected_maintenance_mode_io_priority_app_iops_per_device_threshold DataPowerflexStoragePool#protected_maintenance_mode_io_priority_app_iops_per_device_threshold}
  */
  readonly protectedMaintenanceModeIoPriorityAppIopsPerDeviceThreshold?: number[];
  /**
  * List of protected_maintenance_mode_io_priority_bw_limit_per_device_kbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#protected_maintenance_mode_io_priority_bw_limit_per_device_kbps DataPowerflexStoragePool#protected_maintenance_mode_io_priority_bw_limit_per_device_kbps}
  */
  readonly protectedMaintenanceModeIoPriorityBwLimitPerDeviceKbps?: number[];
  /**
  * List of protected_maintenance_mode_io_priority_num_of_concurrent_ios_per_device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#protected_maintenance_mode_io_priority_num_of_concurrent_ios_per_device DataPowerflexStoragePool#protected_maintenance_mode_io_priority_num_of_concurrent_ios_per_device}
  */
  readonly protectedMaintenanceModeIoPriorityNumOfConcurrentIosPerDevice?: number[];
  /**
  * List of protected_maintenance_mode_io_priority_policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#protected_maintenance_mode_io_priority_policy DataPowerflexStoragePool#protected_maintenance_mode_io_priority_policy}
  */
  readonly protectedMaintenanceModeIoPriorityPolicy?: string[];
  /**
  * List of protected_maintenance_mode_io_priority_quiet_period_msec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#protected_maintenance_mode_io_priority_quiet_period_msec DataPowerflexStoragePool#protected_maintenance_mode_io_priority_quiet_period_msec}
  */
  readonly protectedMaintenanceModeIoPriorityQuietPeriodMsec?: number[];
  /**
  * Value for rebalance_enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#rebalance_enabled DataPowerflexStoragePool#rebalance_enabled}
  */
  readonly rebalanceEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of rebalance_io_priority_app_bw_per_device_threshold_kbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#rebalance_io_priority_app_bw_per_device_threshold_kbps DataPowerflexStoragePool#rebalance_io_priority_app_bw_per_device_threshold_kbps}
  */
  readonly rebalanceIoPriorityAppBwPerDeviceThresholdKbps?: number[];
  /**
  * List of rebalance_io_priority_app_iops_per_device_threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#rebalance_io_priority_app_iops_per_device_threshold DataPowerflexStoragePool#rebalance_io_priority_app_iops_per_device_threshold}
  */
  readonly rebalanceIoPriorityAppIopsPerDeviceThreshold?: number[];
  /**
  * List of rebalance_io_priority_bw_limit_per_device_kbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#rebalance_io_priority_bw_limit_per_device_kbps DataPowerflexStoragePool#rebalance_io_priority_bw_limit_per_device_kbps}
  */
  readonly rebalanceIoPriorityBwLimitPerDeviceKbps?: number[];
  /**
  * List of rebalance_io_priority_num_of_concurrent_ios_per_device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#rebalance_io_priority_num_of_concurrent_ios_per_device DataPowerflexStoragePool#rebalance_io_priority_num_of_concurrent_ios_per_device}
  */
  readonly rebalanceIoPriorityNumOfConcurrentIosPerDevice?: number[];
  /**
  * List of rebalance_io_priority_policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#rebalance_io_priority_policy DataPowerflexStoragePool#rebalance_io_priority_policy}
  */
  readonly rebalanceIoPriorityPolicy?: string[];
  /**
  * List of rebalance_io_priority_quiet_period_msec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#rebalance_io_priority_quiet_period_msec DataPowerflexStoragePool#rebalance_io_priority_quiet_period_msec}
  */
  readonly rebalanceIoPriorityQuietPeriodMsec?: number[];
  /**
  * Value for rebuild_enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#rebuild_enabled DataPowerflexStoragePool#rebuild_enabled}
  */
  readonly rebuildEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of rebuild_io_priority_app_bw_per_device_threshold_kbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#rebuild_io_priority_app_bw_per_device_threshold_kbps DataPowerflexStoragePool#rebuild_io_priority_app_bw_per_device_threshold_kbps}
  */
  readonly rebuildIoPriorityAppBwPerDeviceThresholdKbps?: number[];
  /**
  * List of rebuild_io_priority_app_iops_per_device_threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#rebuild_io_priority_app_iops_per_device_threshold DataPowerflexStoragePool#rebuild_io_priority_app_iops_per_device_threshold}
  */
  readonly rebuildIoPriorityAppIopsPerDeviceThreshold?: number[];
  /**
  * List of rebuild_io_priority_bw_limit_per_device_in_kbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#rebuild_io_priority_bw_limit_per_device_in_kbps DataPowerflexStoragePool#rebuild_io_priority_bw_limit_per_device_in_kbps}
  */
  readonly rebuildIoPriorityBwLimitPerDeviceInKbps?: number[];
  /**
  * List of rebuild_io_priority_num_of_concurrent_ios_per_device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#rebuild_io_priority_num_of_concurrent_ios_per_device DataPowerflexStoragePool#rebuild_io_priority_num_of_concurrent_ios_per_device}
  */
  readonly rebuildIoPriorityNumOfConcurrentIosPerDevice?: number[];
  /**
  * List of rebuild_io_priority_policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#rebuild_io_priority_policy DataPowerflexStoragePool#rebuild_io_priority_policy}
  */
  readonly rebuildIoPriorityPolicy?: string[];
  /**
  * List of rebuild_io_priority_quiet_period_msec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#rebuild_io_priority_quiet_period_msec DataPowerflexStoragePool#rebuild_io_priority_quiet_period_msec}
  */
  readonly rebuildIoPriorityQuietPeriodMsec?: number[];
  /**
  * List of replication_capacity_max_ratio
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#replication_capacity_max_ratio DataPowerflexStoragePool#replication_capacity_max_ratio}
  */
  readonly replicationCapacityMaxRatio?: number[];
  /**
  * List of rm_cache_write_handling_mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#rm_cache_write_handling_mode DataPowerflexStoragePool#rm_cache_write_handling_mode}
  */
  readonly rmCacheWriteHandlingMode?: string[];
  /**
  * List of spare_percentage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#spare_percentage DataPowerflexStoragePool#spare_percentage}
  */
  readonly sparePercentage?: number[];
  /**
  * Value for use_rf_cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#use_rf_cache DataPowerflexStoragePool#use_rf_cache}
  */
  readonly useRfCache?: boolean | cdktf.IResolvable;
  /**
  * Value for use_rm_cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#use_rm_cache DataPowerflexStoragePool#use_rm_cache}
  */
  readonly useRmCache?: boolean | cdktf.IResolvable;
  /**
  * List of vtree_migration_io_priority_app_bw_per_device_threshold_kbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#vtree_migration_io_priority_app_bw_per_device_threshold_kbps DataPowerflexStoragePool#vtree_migration_io_priority_app_bw_per_device_threshold_kbps}
  */
  readonly vtreeMigrationIoPriorityAppBwPerDeviceThresholdKbps?: number[];
  /**
  * List of vtree_migration_io_priority_app_iops_per_device_threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#vtree_migration_io_priority_app_iops_per_device_threshold DataPowerflexStoragePool#vtree_migration_io_priority_app_iops_per_device_threshold}
  */
  readonly vtreeMigrationIoPriorityAppIopsPerDeviceThreshold?: number[];
  /**
  * List of vtree_migration_io_priority_bw_limit_per_device_kbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#vtree_migration_io_priority_bw_limit_per_device_kbps DataPowerflexStoragePool#vtree_migration_io_priority_bw_limit_per_device_kbps}
  */
  readonly vtreeMigrationIoPriorityBwLimitPerDeviceKbps?: number[];
  /**
  * List of vtree_migration_io_priority_num_of_concurrent_ios_per_device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#vtree_migration_io_priority_num_of_concurrent_ios_per_device DataPowerflexStoragePool#vtree_migration_io_priority_num_of_concurrent_ios_per_device}
  */
  readonly vtreeMigrationIoPriorityNumOfConcurrentIosPerDevice?: number[];
  /**
  * List of vtree_migration_io_priority_policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#vtree_migration_io_priority_policy DataPowerflexStoragePool#vtree_migration_io_priority_policy}
  */
  readonly vtreeMigrationIoPriorityPolicy?: string[];
  /**
  * List of vtree_migration_io_priority_quiet_period_msec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#vtree_migration_io_priority_quiet_period_msec DataPowerflexStoragePool#vtree_migration_io_priority_quiet_period_msec}
  */
  readonly vtreeMigrationIoPriorityQuietPeriodMsec?: number[];
  /**
  * Value for zero_padding_enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#zero_padding_enabled DataPowerflexStoragePool#zero_padding_enabled}
  */
  readonly zeroPaddingEnabled?: boolean | cdktf.IResolvable;
}

export function dataPowerflexStoragePoolFilterToTerraform(struct?: DataPowerflexStoragePoolFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_space_usage: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addressSpaceUsage),
    address_space_usage_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addressSpaceUsageType),
    background_scanner_bw_limit_kbps: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.backgroundScannerBwLimitKbps),
    background_scanner_mode: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.backgroundScannerMode),
    bg_scanner_compare_error_action: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bgScannerCompareErrorAction),
    bg_scanner_read_error_action: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bgScannerReadErrorAction),
    capacity_alert_critical_threshold: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.capacityAlertCriticalThreshold),
    capacity_alert_high_threshold: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.capacityAlertHighThreshold),
    capacity_usage_state: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.capacityUsageState),
    capacity_usage_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.capacityUsageType),
    checksum_enabled: cdktf.booleanToTerraform(struct!.checksumEnabled),
    compression_method: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.compressionMethod),
    data_layout: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dataLayout),
    external_acceleration_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.externalAccelerationType),
    fgl_accp_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fglAccpId),
    fgl_extra_capacity: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.fglExtraCapacity),
    fgl_nvdimm_metadata_amotization_x100: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.fglNvdimmMetadataAmotizationX100),
    fgl_nvdimm_write_cache_size_mb: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.fglNvdimmWriteCacheSizeMb),
    fgl_overprovisioning_factor: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.fglOverprovisioningFactor),
    fgl_perf_profile: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fglPerfProfile),
    fgl_write_atomicity_size: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.fglWriteAtomicitySize),
    fragmentation_enabled: cdktf.booleanToTerraform(struct!.fragmentationEnabled),
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
    media_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mediaType),
    name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.name),
    num_of_parallel_rebuild_rebalance_jobs_per_device: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.numOfParallelRebuildRebalanceJobsPerDevice),
    persistent_checksum_builder_limit_kb: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.persistentChecksumBuilderLimitKb),
    persistent_checksum_enabled: cdktf.booleanToTerraform(struct!.persistentChecksumEnabled),
    persistent_checksum_state: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.persistentChecksumState),
    persistent_checksum_validate_on_read: cdktf.booleanToTerraform(struct!.persistentChecksumValidateOnRead),
    protected_maintenance_mode_io_priority_app_bw_per_device_threshold_kbps: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.protectedMaintenanceModeIoPriorityAppBwPerDeviceThresholdKbps),
    protected_maintenance_mode_io_priority_app_iops_per_device_threshold: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.protectedMaintenanceModeIoPriorityAppIopsPerDeviceThreshold),
    protected_maintenance_mode_io_priority_bw_limit_per_device_kbps: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.protectedMaintenanceModeIoPriorityBwLimitPerDeviceKbps),
    protected_maintenance_mode_io_priority_num_of_concurrent_ios_per_device: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.protectedMaintenanceModeIoPriorityNumOfConcurrentIosPerDevice),
    protected_maintenance_mode_io_priority_policy: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protectedMaintenanceModeIoPriorityPolicy),
    protected_maintenance_mode_io_priority_quiet_period_msec: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.protectedMaintenanceModeIoPriorityQuietPeriodMsec),
    rebalance_enabled: cdktf.booleanToTerraform(struct!.rebalanceEnabled),
    rebalance_io_priority_app_bw_per_device_threshold_kbps: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.rebalanceIoPriorityAppBwPerDeviceThresholdKbps),
    rebalance_io_priority_app_iops_per_device_threshold: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.rebalanceIoPriorityAppIopsPerDeviceThreshold),
    rebalance_io_priority_bw_limit_per_device_kbps: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.rebalanceIoPriorityBwLimitPerDeviceKbps),
    rebalance_io_priority_num_of_concurrent_ios_per_device: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.rebalanceIoPriorityNumOfConcurrentIosPerDevice),
    rebalance_io_priority_policy: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rebalanceIoPriorityPolicy),
    rebalance_io_priority_quiet_period_msec: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.rebalanceIoPriorityQuietPeriodMsec),
    rebuild_enabled: cdktf.booleanToTerraform(struct!.rebuildEnabled),
    rebuild_io_priority_app_bw_per_device_threshold_kbps: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.rebuildIoPriorityAppBwPerDeviceThresholdKbps),
    rebuild_io_priority_app_iops_per_device_threshold: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.rebuildIoPriorityAppIopsPerDeviceThreshold),
    rebuild_io_priority_bw_limit_per_device_in_kbps: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.rebuildIoPriorityBwLimitPerDeviceInKbps),
    rebuild_io_priority_num_of_concurrent_ios_per_device: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.rebuildIoPriorityNumOfConcurrentIosPerDevice),
    rebuild_io_priority_policy: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rebuildIoPriorityPolicy),
    rebuild_io_priority_quiet_period_msec: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.rebuildIoPriorityQuietPeriodMsec),
    replication_capacity_max_ratio: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.replicationCapacityMaxRatio),
    rm_cache_write_handling_mode: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rmCacheWriteHandlingMode),
    spare_percentage: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.sparePercentage),
    use_rf_cache: cdktf.booleanToTerraform(struct!.useRfCache),
    use_rm_cache: cdktf.booleanToTerraform(struct!.useRmCache),
    vtree_migration_io_priority_app_bw_per_device_threshold_kbps: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.vtreeMigrationIoPriorityAppBwPerDeviceThresholdKbps),
    vtree_migration_io_priority_app_iops_per_device_threshold: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.vtreeMigrationIoPriorityAppIopsPerDeviceThreshold),
    vtree_migration_io_priority_bw_limit_per_device_kbps: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.vtreeMigrationIoPriorityBwLimitPerDeviceKbps),
    vtree_migration_io_priority_num_of_concurrent_ios_per_device: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.vtreeMigrationIoPriorityNumOfConcurrentIosPerDevice),
    vtree_migration_io_priority_policy: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vtreeMigrationIoPriorityPolicy),
    vtree_migration_io_priority_quiet_period_msec: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.vtreeMigrationIoPriorityQuietPeriodMsec),
    zero_padding_enabled: cdktf.booleanToTerraform(struct!.zeroPaddingEnabled),
  }
}


export function dataPowerflexStoragePoolFilterToHclTerraform(struct?: DataPowerflexStoragePoolFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_space_usage: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addressSpaceUsage),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    address_space_usage_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addressSpaceUsageType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    background_scanner_bw_limit_kbps: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.backgroundScannerBwLimitKbps),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    background_scanner_mode: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.backgroundScannerMode),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    bg_scanner_compare_error_action: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bgScannerCompareErrorAction),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    bg_scanner_read_error_action: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bgScannerReadErrorAction),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    capacity_alert_critical_threshold: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.capacityAlertCriticalThreshold),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    capacity_alert_high_threshold: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.capacityAlertHighThreshold),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    capacity_usage_state: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.capacityUsageState),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    capacity_usage_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.capacityUsageType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    checksum_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.checksumEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    compression_method: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.compressionMethod),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    data_layout: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dataLayout),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    external_acceleration_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.externalAccelerationType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    fgl_accp_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fglAccpId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    fgl_extra_capacity: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.fglExtraCapacity),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    fgl_nvdimm_metadata_amotization_x100: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.fglNvdimmMetadataAmotizationX100),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    fgl_nvdimm_write_cache_size_mb: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.fglNvdimmWriteCacheSizeMb),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    fgl_overprovisioning_factor: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.fglOverprovisioningFactor),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    fgl_perf_profile: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fglPerfProfile),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    fgl_write_atomicity_size: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.fglWriteAtomicitySize),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    fragmentation_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.fragmentationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    media_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mediaType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.name),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    num_of_parallel_rebuild_rebalance_jobs_per_device: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.numOfParallelRebuildRebalanceJobsPerDevice),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    persistent_checksum_builder_limit_kb: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.persistentChecksumBuilderLimitKb),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    persistent_checksum_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.persistentChecksumEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    persistent_checksum_state: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.persistentChecksumState),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    persistent_checksum_validate_on_read: {
      value: cdktf.booleanToHclTerraform(struct!.persistentChecksumValidateOnRead),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    protected_maintenance_mode_io_priority_app_bw_per_device_threshold_kbps: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.protectedMaintenanceModeIoPriorityAppBwPerDeviceThresholdKbps),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    protected_maintenance_mode_io_priority_app_iops_per_device_threshold: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.protectedMaintenanceModeIoPriorityAppIopsPerDeviceThreshold),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    protected_maintenance_mode_io_priority_bw_limit_per_device_kbps: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.protectedMaintenanceModeIoPriorityBwLimitPerDeviceKbps),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    protected_maintenance_mode_io_priority_num_of_concurrent_ios_per_device: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.protectedMaintenanceModeIoPriorityNumOfConcurrentIosPerDevice),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    protected_maintenance_mode_io_priority_policy: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protectedMaintenanceModeIoPriorityPolicy),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    protected_maintenance_mode_io_priority_quiet_period_msec: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.protectedMaintenanceModeIoPriorityQuietPeriodMsec),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    rebalance_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.rebalanceEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rebalance_io_priority_app_bw_per_device_threshold_kbps: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.rebalanceIoPriorityAppBwPerDeviceThresholdKbps),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    rebalance_io_priority_app_iops_per_device_threshold: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.rebalanceIoPriorityAppIopsPerDeviceThreshold),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    rebalance_io_priority_bw_limit_per_device_kbps: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.rebalanceIoPriorityBwLimitPerDeviceKbps),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    rebalance_io_priority_num_of_concurrent_ios_per_device: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.rebalanceIoPriorityNumOfConcurrentIosPerDevice),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    rebalance_io_priority_policy: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rebalanceIoPriorityPolicy),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    rebalance_io_priority_quiet_period_msec: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.rebalanceIoPriorityQuietPeriodMsec),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    rebuild_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.rebuildEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rebuild_io_priority_app_bw_per_device_threshold_kbps: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.rebuildIoPriorityAppBwPerDeviceThresholdKbps),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    rebuild_io_priority_app_iops_per_device_threshold: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.rebuildIoPriorityAppIopsPerDeviceThreshold),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    rebuild_io_priority_bw_limit_per_device_in_kbps: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.rebuildIoPriorityBwLimitPerDeviceInKbps),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    rebuild_io_priority_num_of_concurrent_ios_per_device: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.rebuildIoPriorityNumOfConcurrentIosPerDevice),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    rebuild_io_priority_policy: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rebuildIoPriorityPolicy),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    rebuild_io_priority_quiet_period_msec: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.rebuildIoPriorityQuietPeriodMsec),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    replication_capacity_max_ratio: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.replicationCapacityMaxRatio),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    rm_cache_write_handling_mode: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rmCacheWriteHandlingMode),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    spare_percentage: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.sparePercentage),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    use_rf_cache: {
      value: cdktf.booleanToHclTerraform(struct!.useRfCache),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_rm_cache: {
      value: cdktf.booleanToHclTerraform(struct!.useRmCache),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vtree_migration_io_priority_app_bw_per_device_threshold_kbps: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.vtreeMigrationIoPriorityAppBwPerDeviceThresholdKbps),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    vtree_migration_io_priority_app_iops_per_device_threshold: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.vtreeMigrationIoPriorityAppIopsPerDeviceThreshold),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    vtree_migration_io_priority_bw_limit_per_device_kbps: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.vtreeMigrationIoPriorityBwLimitPerDeviceKbps),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    vtree_migration_io_priority_num_of_concurrent_ios_per_device: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.vtreeMigrationIoPriorityNumOfConcurrentIosPerDevice),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    vtree_migration_io_priority_policy: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vtreeMigrationIoPriorityPolicy),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vtree_migration_io_priority_quiet_period_msec: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.vtreeMigrationIoPriorityQuietPeriodMsec),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    zero_padding_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.zeroPaddingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerflexStoragePoolFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexStoragePoolFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressSpaceUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressSpaceUsage = this._addressSpaceUsage;
    }
    if (this._addressSpaceUsageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressSpaceUsageType = this._addressSpaceUsageType;
    }
    if (this._backgroundScannerBwLimitKbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundScannerBwLimitKbps = this._backgroundScannerBwLimitKbps;
    }
    if (this._backgroundScannerMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundScannerMode = this._backgroundScannerMode;
    }
    if (this._bgScannerCompareErrorAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgScannerCompareErrorAction = this._bgScannerCompareErrorAction;
    }
    if (this._bgScannerReadErrorAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgScannerReadErrorAction = this._bgScannerReadErrorAction;
    }
    if (this._capacityAlertCriticalThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityAlertCriticalThreshold = this._capacityAlertCriticalThreshold;
    }
    if (this._capacityAlertHighThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityAlertHighThreshold = this._capacityAlertHighThreshold;
    }
    if (this._capacityUsageState !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityUsageState = this._capacityUsageState;
    }
    if (this._capacityUsageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityUsageType = this._capacityUsageType;
    }
    if (this._checksumEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksumEnabled = this._checksumEnabled;
    }
    if (this._compressionMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionMethod = this._compressionMethod;
    }
    if (this._dataLayout !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLayout = this._dataLayout;
    }
    if (this._externalAccelerationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalAccelerationType = this._externalAccelerationType;
    }
    if (this._fglAccpId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fglAccpId = this._fglAccpId;
    }
    if (this._fglExtraCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.fglExtraCapacity = this._fglExtraCapacity;
    }
    if (this._fglNvdimmMetadataAmotizationX100 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fglNvdimmMetadataAmotizationX100 = this._fglNvdimmMetadataAmotizationX100;
    }
    if (this._fglNvdimmWriteCacheSizeMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.fglNvdimmWriteCacheSizeMb = this._fglNvdimmWriteCacheSizeMb;
    }
    if (this._fglOverprovisioningFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.fglOverprovisioningFactor = this._fglOverprovisioningFactor;
    }
    if (this._fglPerfProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.fglPerfProfile = this._fglPerfProfile;
    }
    if (this._fglWriteAtomicitySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.fglWriteAtomicitySize = this._fglWriteAtomicitySize;
    }
    if (this._fragmentationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragmentationEnabled = this._fragmentationEnabled;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._mediaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaType = this._mediaType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._numOfParallelRebuildRebalanceJobsPerDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.numOfParallelRebuildRebalanceJobsPerDevice = this._numOfParallelRebuildRebalanceJobsPerDevice;
    }
    if (this._persistentChecksumBuilderLimitKb !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentChecksumBuilderLimitKb = this._persistentChecksumBuilderLimitKb;
    }
    if (this._persistentChecksumEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentChecksumEnabled = this._persistentChecksumEnabled;
    }
    if (this._persistentChecksumState !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentChecksumState = this._persistentChecksumState;
    }
    if (this._persistentChecksumValidateOnRead !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentChecksumValidateOnRead = this._persistentChecksumValidateOnRead;
    }
    if (this._protectedMaintenanceModeIoPriorityAppBwPerDeviceThresholdKbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectedMaintenanceModeIoPriorityAppBwPerDeviceThresholdKbps = this._protectedMaintenanceModeIoPriorityAppBwPerDeviceThresholdKbps;
    }
    if (this._protectedMaintenanceModeIoPriorityAppIopsPerDeviceThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectedMaintenanceModeIoPriorityAppIopsPerDeviceThreshold = this._protectedMaintenanceModeIoPriorityAppIopsPerDeviceThreshold;
    }
    if (this._protectedMaintenanceModeIoPriorityBwLimitPerDeviceKbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectedMaintenanceModeIoPriorityBwLimitPerDeviceKbps = this._protectedMaintenanceModeIoPriorityBwLimitPerDeviceKbps;
    }
    if (this._protectedMaintenanceModeIoPriorityNumOfConcurrentIosPerDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectedMaintenanceModeIoPriorityNumOfConcurrentIosPerDevice = this._protectedMaintenanceModeIoPriorityNumOfConcurrentIosPerDevice;
    }
    if (this._protectedMaintenanceModeIoPriorityPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectedMaintenanceModeIoPriorityPolicy = this._protectedMaintenanceModeIoPriorityPolicy;
    }
    if (this._protectedMaintenanceModeIoPriorityQuietPeriodMsec !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectedMaintenanceModeIoPriorityQuietPeriodMsec = this._protectedMaintenanceModeIoPriorityQuietPeriodMsec;
    }
    if (this._rebalanceEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebalanceEnabled = this._rebalanceEnabled;
    }
    if (this._rebalanceIoPriorityAppBwPerDeviceThresholdKbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebalanceIoPriorityAppBwPerDeviceThresholdKbps = this._rebalanceIoPriorityAppBwPerDeviceThresholdKbps;
    }
    if (this._rebalanceIoPriorityAppIopsPerDeviceThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebalanceIoPriorityAppIopsPerDeviceThreshold = this._rebalanceIoPriorityAppIopsPerDeviceThreshold;
    }
    if (this._rebalanceIoPriorityBwLimitPerDeviceKbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebalanceIoPriorityBwLimitPerDeviceKbps = this._rebalanceIoPriorityBwLimitPerDeviceKbps;
    }
    if (this._rebalanceIoPriorityNumOfConcurrentIosPerDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebalanceIoPriorityNumOfConcurrentIosPerDevice = this._rebalanceIoPriorityNumOfConcurrentIosPerDevice;
    }
    if (this._rebalanceIoPriorityPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebalanceIoPriorityPolicy = this._rebalanceIoPriorityPolicy;
    }
    if (this._rebalanceIoPriorityQuietPeriodMsec !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebalanceIoPriorityQuietPeriodMsec = this._rebalanceIoPriorityQuietPeriodMsec;
    }
    if (this._rebuildEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebuildEnabled = this._rebuildEnabled;
    }
    if (this._rebuildIoPriorityAppBwPerDeviceThresholdKbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebuildIoPriorityAppBwPerDeviceThresholdKbps = this._rebuildIoPriorityAppBwPerDeviceThresholdKbps;
    }
    if (this._rebuildIoPriorityAppIopsPerDeviceThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebuildIoPriorityAppIopsPerDeviceThreshold = this._rebuildIoPriorityAppIopsPerDeviceThreshold;
    }
    if (this._rebuildIoPriorityBwLimitPerDeviceInKbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebuildIoPriorityBwLimitPerDeviceInKbps = this._rebuildIoPriorityBwLimitPerDeviceInKbps;
    }
    if (this._rebuildIoPriorityNumOfConcurrentIosPerDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebuildIoPriorityNumOfConcurrentIosPerDevice = this._rebuildIoPriorityNumOfConcurrentIosPerDevice;
    }
    if (this._rebuildIoPriorityPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebuildIoPriorityPolicy = this._rebuildIoPriorityPolicy;
    }
    if (this._rebuildIoPriorityQuietPeriodMsec !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebuildIoPriorityQuietPeriodMsec = this._rebuildIoPriorityQuietPeriodMsec;
    }
    if (this._replicationCapacityMaxRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationCapacityMaxRatio = this._replicationCapacityMaxRatio;
    }
    if (this._rmCacheWriteHandlingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.rmCacheWriteHandlingMode = this._rmCacheWriteHandlingMode;
    }
    if (this._sparePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparePercentage = this._sparePercentage;
    }
    if (this._useRfCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRfCache = this._useRfCache;
    }
    if (this._useRmCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRmCache = this._useRmCache;
    }
    if (this._vtreeMigrationIoPriorityAppBwPerDeviceThresholdKbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.vtreeMigrationIoPriorityAppBwPerDeviceThresholdKbps = this._vtreeMigrationIoPriorityAppBwPerDeviceThresholdKbps;
    }
    if (this._vtreeMigrationIoPriorityAppIopsPerDeviceThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.vtreeMigrationIoPriorityAppIopsPerDeviceThreshold = this._vtreeMigrationIoPriorityAppIopsPerDeviceThreshold;
    }
    if (this._vtreeMigrationIoPriorityBwLimitPerDeviceKbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.vtreeMigrationIoPriorityBwLimitPerDeviceKbps = this._vtreeMigrationIoPriorityBwLimitPerDeviceKbps;
    }
    if (this._vtreeMigrationIoPriorityNumOfConcurrentIosPerDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.vtreeMigrationIoPriorityNumOfConcurrentIosPerDevice = this._vtreeMigrationIoPriorityNumOfConcurrentIosPerDevice;
    }
    if (this._vtreeMigrationIoPriorityPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.vtreeMigrationIoPriorityPolicy = this._vtreeMigrationIoPriorityPolicy;
    }
    if (this._vtreeMigrationIoPriorityQuietPeriodMsec !== undefined) {
      hasAnyValues = true;
      internalValueResult.vtreeMigrationIoPriorityQuietPeriodMsec = this._vtreeMigrationIoPriorityQuietPeriodMsec;
    }
    if (this._zeroPaddingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.zeroPaddingEnabled = this._zeroPaddingEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexStoragePoolFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressSpaceUsage = undefined;
      this._addressSpaceUsageType = undefined;
      this._backgroundScannerBwLimitKbps = undefined;
      this._backgroundScannerMode = undefined;
      this._bgScannerCompareErrorAction = undefined;
      this._bgScannerReadErrorAction = undefined;
      this._capacityAlertCriticalThreshold = undefined;
      this._capacityAlertHighThreshold = undefined;
      this._capacityUsageState = undefined;
      this._capacityUsageType = undefined;
      this._checksumEnabled = undefined;
      this._compressionMethod = undefined;
      this._dataLayout = undefined;
      this._externalAccelerationType = undefined;
      this._fglAccpId = undefined;
      this._fglExtraCapacity = undefined;
      this._fglNvdimmMetadataAmotizationX100 = undefined;
      this._fglNvdimmWriteCacheSizeMb = undefined;
      this._fglOverprovisioningFactor = undefined;
      this._fglPerfProfile = undefined;
      this._fglWriteAtomicitySize = undefined;
      this._fragmentationEnabled = undefined;
      this._id = undefined;
      this._mediaType = undefined;
      this._name = undefined;
      this._numOfParallelRebuildRebalanceJobsPerDevice = undefined;
      this._persistentChecksumBuilderLimitKb = undefined;
      this._persistentChecksumEnabled = undefined;
      this._persistentChecksumState = undefined;
      this._persistentChecksumValidateOnRead = undefined;
      this._protectedMaintenanceModeIoPriorityAppBwPerDeviceThresholdKbps = undefined;
      this._protectedMaintenanceModeIoPriorityAppIopsPerDeviceThreshold = undefined;
      this._protectedMaintenanceModeIoPriorityBwLimitPerDeviceKbps = undefined;
      this._protectedMaintenanceModeIoPriorityNumOfConcurrentIosPerDevice = undefined;
      this._protectedMaintenanceModeIoPriorityPolicy = undefined;
      this._protectedMaintenanceModeIoPriorityQuietPeriodMsec = undefined;
      this._rebalanceEnabled = undefined;
      this._rebalanceIoPriorityAppBwPerDeviceThresholdKbps = undefined;
      this._rebalanceIoPriorityAppIopsPerDeviceThreshold = undefined;
      this._rebalanceIoPriorityBwLimitPerDeviceKbps = undefined;
      this._rebalanceIoPriorityNumOfConcurrentIosPerDevice = undefined;
      this._rebalanceIoPriorityPolicy = undefined;
      this._rebalanceIoPriorityQuietPeriodMsec = undefined;
      this._rebuildEnabled = undefined;
      this._rebuildIoPriorityAppBwPerDeviceThresholdKbps = undefined;
      this._rebuildIoPriorityAppIopsPerDeviceThreshold = undefined;
      this._rebuildIoPriorityBwLimitPerDeviceInKbps = undefined;
      this._rebuildIoPriorityNumOfConcurrentIosPerDevice = undefined;
      this._rebuildIoPriorityPolicy = undefined;
      this._rebuildIoPriorityQuietPeriodMsec = undefined;
      this._replicationCapacityMaxRatio = undefined;
      this._rmCacheWriteHandlingMode = undefined;
      this._sparePercentage = undefined;
      this._useRfCache = undefined;
      this._useRmCache = undefined;
      this._vtreeMigrationIoPriorityAppBwPerDeviceThresholdKbps = undefined;
      this._vtreeMigrationIoPriorityAppIopsPerDeviceThreshold = undefined;
      this._vtreeMigrationIoPriorityBwLimitPerDeviceKbps = undefined;
      this._vtreeMigrationIoPriorityNumOfConcurrentIosPerDevice = undefined;
      this._vtreeMigrationIoPriorityPolicy = undefined;
      this._vtreeMigrationIoPriorityQuietPeriodMsec = undefined;
      this._zeroPaddingEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressSpaceUsage = value.addressSpaceUsage;
      this._addressSpaceUsageType = value.addressSpaceUsageType;
      this._backgroundScannerBwLimitKbps = value.backgroundScannerBwLimitKbps;
      this._backgroundScannerMode = value.backgroundScannerMode;
      this._bgScannerCompareErrorAction = value.bgScannerCompareErrorAction;
      this._bgScannerReadErrorAction = value.bgScannerReadErrorAction;
      this._capacityAlertCriticalThreshold = value.capacityAlertCriticalThreshold;
      this._capacityAlertHighThreshold = value.capacityAlertHighThreshold;
      this._capacityUsageState = value.capacityUsageState;
      this._capacityUsageType = value.capacityUsageType;
      this._checksumEnabled = value.checksumEnabled;
      this._compressionMethod = value.compressionMethod;
      this._dataLayout = value.dataLayout;
      this._externalAccelerationType = value.externalAccelerationType;
      this._fglAccpId = value.fglAccpId;
      this._fglExtraCapacity = value.fglExtraCapacity;
      this._fglNvdimmMetadataAmotizationX100 = value.fglNvdimmMetadataAmotizationX100;
      this._fglNvdimmWriteCacheSizeMb = value.fglNvdimmWriteCacheSizeMb;
      this._fglOverprovisioningFactor = value.fglOverprovisioningFactor;
      this._fglPerfProfile = value.fglPerfProfile;
      this._fglWriteAtomicitySize = value.fglWriteAtomicitySize;
      this._fragmentationEnabled = value.fragmentationEnabled;
      this._id = value.id;
      this._mediaType = value.mediaType;
      this._name = value.name;
      this._numOfParallelRebuildRebalanceJobsPerDevice = value.numOfParallelRebuildRebalanceJobsPerDevice;
      this._persistentChecksumBuilderLimitKb = value.persistentChecksumBuilderLimitKb;
      this._persistentChecksumEnabled = value.persistentChecksumEnabled;
      this._persistentChecksumState = value.persistentChecksumState;
      this._persistentChecksumValidateOnRead = value.persistentChecksumValidateOnRead;
      this._protectedMaintenanceModeIoPriorityAppBwPerDeviceThresholdKbps = value.protectedMaintenanceModeIoPriorityAppBwPerDeviceThresholdKbps;
      this._protectedMaintenanceModeIoPriorityAppIopsPerDeviceThreshold = value.protectedMaintenanceModeIoPriorityAppIopsPerDeviceThreshold;
      this._protectedMaintenanceModeIoPriorityBwLimitPerDeviceKbps = value.protectedMaintenanceModeIoPriorityBwLimitPerDeviceKbps;
      this._protectedMaintenanceModeIoPriorityNumOfConcurrentIosPerDevice = value.protectedMaintenanceModeIoPriorityNumOfConcurrentIosPerDevice;
      this._protectedMaintenanceModeIoPriorityPolicy = value.protectedMaintenanceModeIoPriorityPolicy;
      this._protectedMaintenanceModeIoPriorityQuietPeriodMsec = value.protectedMaintenanceModeIoPriorityQuietPeriodMsec;
      this._rebalanceEnabled = value.rebalanceEnabled;
      this._rebalanceIoPriorityAppBwPerDeviceThresholdKbps = value.rebalanceIoPriorityAppBwPerDeviceThresholdKbps;
      this._rebalanceIoPriorityAppIopsPerDeviceThreshold = value.rebalanceIoPriorityAppIopsPerDeviceThreshold;
      this._rebalanceIoPriorityBwLimitPerDeviceKbps = value.rebalanceIoPriorityBwLimitPerDeviceKbps;
      this._rebalanceIoPriorityNumOfConcurrentIosPerDevice = value.rebalanceIoPriorityNumOfConcurrentIosPerDevice;
      this._rebalanceIoPriorityPolicy = value.rebalanceIoPriorityPolicy;
      this._rebalanceIoPriorityQuietPeriodMsec = value.rebalanceIoPriorityQuietPeriodMsec;
      this._rebuildEnabled = value.rebuildEnabled;
      this._rebuildIoPriorityAppBwPerDeviceThresholdKbps = value.rebuildIoPriorityAppBwPerDeviceThresholdKbps;
      this._rebuildIoPriorityAppIopsPerDeviceThreshold = value.rebuildIoPriorityAppIopsPerDeviceThreshold;
      this._rebuildIoPriorityBwLimitPerDeviceInKbps = value.rebuildIoPriorityBwLimitPerDeviceInKbps;
      this._rebuildIoPriorityNumOfConcurrentIosPerDevice = value.rebuildIoPriorityNumOfConcurrentIosPerDevice;
      this._rebuildIoPriorityPolicy = value.rebuildIoPriorityPolicy;
      this._rebuildIoPriorityQuietPeriodMsec = value.rebuildIoPriorityQuietPeriodMsec;
      this._replicationCapacityMaxRatio = value.replicationCapacityMaxRatio;
      this._rmCacheWriteHandlingMode = value.rmCacheWriteHandlingMode;
      this._sparePercentage = value.sparePercentage;
      this._useRfCache = value.useRfCache;
      this._useRmCache = value.useRmCache;
      this._vtreeMigrationIoPriorityAppBwPerDeviceThresholdKbps = value.vtreeMigrationIoPriorityAppBwPerDeviceThresholdKbps;
      this._vtreeMigrationIoPriorityAppIopsPerDeviceThreshold = value.vtreeMigrationIoPriorityAppIopsPerDeviceThreshold;
      this._vtreeMigrationIoPriorityBwLimitPerDeviceKbps = value.vtreeMigrationIoPriorityBwLimitPerDeviceKbps;
      this._vtreeMigrationIoPriorityNumOfConcurrentIosPerDevice = value.vtreeMigrationIoPriorityNumOfConcurrentIosPerDevice;
      this._vtreeMigrationIoPriorityPolicy = value.vtreeMigrationIoPriorityPolicy;
      this._vtreeMigrationIoPriorityQuietPeriodMsec = value.vtreeMigrationIoPriorityQuietPeriodMsec;
      this._zeroPaddingEnabled = value.zeroPaddingEnabled;
    }
  }

  // address_space_usage - computed: false, optional: true, required: false
  private _addressSpaceUsage?: string[]; 
  public get addressSpaceUsage() {
    return cdktf.Fn.tolist(this.getListAttribute('address_space_usage'));
  }
  public set addressSpaceUsage(value: string[]) {
    this._addressSpaceUsage = value;
  }
  public resetAddressSpaceUsage() {
    this._addressSpaceUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressSpaceUsageInput() {
    return this._addressSpaceUsage;
  }

  // address_space_usage_type - computed: false, optional: true, required: false
  private _addressSpaceUsageType?: string[]; 
  public get addressSpaceUsageType() {
    return cdktf.Fn.tolist(this.getListAttribute('address_space_usage_type'));
  }
  public set addressSpaceUsageType(value: string[]) {
    this._addressSpaceUsageType = value;
  }
  public resetAddressSpaceUsageType() {
    this._addressSpaceUsageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressSpaceUsageTypeInput() {
    return this._addressSpaceUsageType;
  }

  // background_scanner_bw_limit_kbps - computed: false, optional: true, required: false
  private _backgroundScannerBwLimitKbps?: number[]; 
  public get backgroundScannerBwLimitKbps() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('background_scanner_bw_limit_kbps')));
  }
  public set backgroundScannerBwLimitKbps(value: number[]) {
    this._backgroundScannerBwLimitKbps = value;
  }
  public resetBackgroundScannerBwLimitKbps() {
    this._backgroundScannerBwLimitKbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundScannerBwLimitKbpsInput() {
    return this._backgroundScannerBwLimitKbps;
  }

  // background_scanner_mode - computed: false, optional: true, required: false
  private _backgroundScannerMode?: string[]; 
  public get backgroundScannerMode() {
    return cdktf.Fn.tolist(this.getListAttribute('background_scanner_mode'));
  }
  public set backgroundScannerMode(value: string[]) {
    this._backgroundScannerMode = value;
  }
  public resetBackgroundScannerMode() {
    this._backgroundScannerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundScannerModeInput() {
    return this._backgroundScannerMode;
  }

  // bg_scanner_compare_error_action - computed: false, optional: true, required: false
  private _bgScannerCompareErrorAction?: string[]; 
  public get bgScannerCompareErrorAction() {
    return cdktf.Fn.tolist(this.getListAttribute('bg_scanner_compare_error_action'));
  }
  public set bgScannerCompareErrorAction(value: string[]) {
    this._bgScannerCompareErrorAction = value;
  }
  public resetBgScannerCompareErrorAction() {
    this._bgScannerCompareErrorAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgScannerCompareErrorActionInput() {
    return this._bgScannerCompareErrorAction;
  }

  // bg_scanner_read_error_action - computed: false, optional: true, required: false
  private _bgScannerReadErrorAction?: string[]; 
  public get bgScannerReadErrorAction() {
    return cdktf.Fn.tolist(this.getListAttribute('bg_scanner_read_error_action'));
  }
  public set bgScannerReadErrorAction(value: string[]) {
    this._bgScannerReadErrorAction = value;
  }
  public resetBgScannerReadErrorAction() {
    this._bgScannerReadErrorAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgScannerReadErrorActionInput() {
    return this._bgScannerReadErrorAction;
  }

  // capacity_alert_critical_threshold - computed: false, optional: true, required: false
  private _capacityAlertCriticalThreshold?: number[]; 
  public get capacityAlertCriticalThreshold() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('capacity_alert_critical_threshold')));
  }
  public set capacityAlertCriticalThreshold(value: number[]) {
    this._capacityAlertCriticalThreshold = value;
  }
  public resetCapacityAlertCriticalThreshold() {
    this._capacityAlertCriticalThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityAlertCriticalThresholdInput() {
    return this._capacityAlertCriticalThreshold;
  }

  // capacity_alert_high_threshold - computed: false, optional: true, required: false
  private _capacityAlertHighThreshold?: number[]; 
  public get capacityAlertHighThreshold() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('capacity_alert_high_threshold')));
  }
  public set capacityAlertHighThreshold(value: number[]) {
    this._capacityAlertHighThreshold = value;
  }
  public resetCapacityAlertHighThreshold() {
    this._capacityAlertHighThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityAlertHighThresholdInput() {
    return this._capacityAlertHighThreshold;
  }

  // capacity_usage_state - computed: false, optional: true, required: false
  private _capacityUsageState?: string[]; 
  public get capacityUsageState() {
    return cdktf.Fn.tolist(this.getListAttribute('capacity_usage_state'));
  }
  public set capacityUsageState(value: string[]) {
    this._capacityUsageState = value;
  }
  public resetCapacityUsageState() {
    this._capacityUsageState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityUsageStateInput() {
    return this._capacityUsageState;
  }

  // capacity_usage_type - computed: false, optional: true, required: false
  private _capacityUsageType?: string[]; 
  public get capacityUsageType() {
    return cdktf.Fn.tolist(this.getListAttribute('capacity_usage_type'));
  }
  public set capacityUsageType(value: string[]) {
    this._capacityUsageType = value;
  }
  public resetCapacityUsageType() {
    this._capacityUsageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityUsageTypeInput() {
    return this._capacityUsageType;
  }

  // checksum_enabled - computed: false, optional: true, required: false
  private _checksumEnabled?: boolean | cdktf.IResolvable; 
  public get checksumEnabled() {
    return this.getBooleanAttribute('checksum_enabled');
  }
  public set checksumEnabled(value: boolean | cdktf.IResolvable) {
    this._checksumEnabled = value;
  }
  public resetChecksumEnabled() {
    this._checksumEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumEnabledInput() {
    return this._checksumEnabled;
  }

  // compression_method - computed: false, optional: true, required: false
  private _compressionMethod?: string[]; 
  public get compressionMethod() {
    return cdktf.Fn.tolist(this.getListAttribute('compression_method'));
  }
  public set compressionMethod(value: string[]) {
    this._compressionMethod = value;
  }
  public resetCompressionMethod() {
    this._compressionMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionMethodInput() {
    return this._compressionMethod;
  }

  // data_layout - computed: false, optional: true, required: false
  private _dataLayout?: string[]; 
  public get dataLayout() {
    return cdktf.Fn.tolist(this.getListAttribute('data_layout'));
  }
  public set dataLayout(value: string[]) {
    this._dataLayout = value;
  }
  public resetDataLayout() {
    this._dataLayout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLayoutInput() {
    return this._dataLayout;
  }

  // external_acceleration_type - computed: false, optional: true, required: false
  private _externalAccelerationType?: string[]; 
  public get externalAccelerationType() {
    return cdktf.Fn.tolist(this.getListAttribute('external_acceleration_type'));
  }
  public set externalAccelerationType(value: string[]) {
    this._externalAccelerationType = value;
  }
  public resetExternalAccelerationType() {
    this._externalAccelerationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAccelerationTypeInput() {
    return this._externalAccelerationType;
  }

  // fgl_accp_id - computed: false, optional: true, required: false
  private _fglAccpId?: string[]; 
  public get fglAccpId() {
    return cdktf.Fn.tolist(this.getListAttribute('fgl_accp_id'));
  }
  public set fglAccpId(value: string[]) {
    this._fglAccpId = value;
  }
  public resetFglAccpId() {
    this._fglAccpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fglAccpIdInput() {
    return this._fglAccpId;
  }

  // fgl_extra_capacity - computed: false, optional: true, required: false
  private _fglExtraCapacity?: number[]; 
  public get fglExtraCapacity() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('fgl_extra_capacity')));
  }
  public set fglExtraCapacity(value: number[]) {
    this._fglExtraCapacity = value;
  }
  public resetFglExtraCapacity() {
    this._fglExtraCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fglExtraCapacityInput() {
    return this._fglExtraCapacity;
  }

  // fgl_nvdimm_metadata_amotization_x100 - computed: false, optional: true, required: false
  private _fglNvdimmMetadataAmotizationX100?: number[]; 
  public get fglNvdimmMetadataAmotizationX100() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('fgl_nvdimm_metadata_amotization_x100')));
  }
  public set fglNvdimmMetadataAmotizationX100(value: number[]) {
    this._fglNvdimmMetadataAmotizationX100 = value;
  }
  public resetFglNvdimmMetadataAmotizationX100() {
    this._fglNvdimmMetadataAmotizationX100 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fglNvdimmMetadataAmotizationX100Input() {
    return this._fglNvdimmMetadataAmotizationX100;
  }

  // fgl_nvdimm_write_cache_size_mb - computed: false, optional: true, required: false
  private _fglNvdimmWriteCacheSizeMb?: number[]; 
  public get fglNvdimmWriteCacheSizeMb() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('fgl_nvdimm_write_cache_size_mb')));
  }
  public set fglNvdimmWriteCacheSizeMb(value: number[]) {
    this._fglNvdimmWriteCacheSizeMb = value;
  }
  public resetFglNvdimmWriteCacheSizeMb() {
    this._fglNvdimmWriteCacheSizeMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fglNvdimmWriteCacheSizeMbInput() {
    return this._fglNvdimmWriteCacheSizeMb;
  }

  // fgl_overprovisioning_factor - computed: false, optional: true, required: false
  private _fglOverprovisioningFactor?: number[]; 
  public get fglOverprovisioningFactor() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('fgl_overprovisioning_factor')));
  }
  public set fglOverprovisioningFactor(value: number[]) {
    this._fglOverprovisioningFactor = value;
  }
  public resetFglOverprovisioningFactor() {
    this._fglOverprovisioningFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fglOverprovisioningFactorInput() {
    return this._fglOverprovisioningFactor;
  }

  // fgl_perf_profile - computed: false, optional: true, required: false
  private _fglPerfProfile?: string[]; 
  public get fglPerfProfile() {
    return cdktf.Fn.tolist(this.getListAttribute('fgl_perf_profile'));
  }
  public set fglPerfProfile(value: string[]) {
    this._fglPerfProfile = value;
  }
  public resetFglPerfProfile() {
    this._fglPerfProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fglPerfProfileInput() {
    return this._fglPerfProfile;
  }

  // fgl_write_atomicity_size - computed: false, optional: true, required: false
  private _fglWriteAtomicitySize?: number[]; 
  public get fglWriteAtomicitySize() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('fgl_write_atomicity_size')));
  }
  public set fglWriteAtomicitySize(value: number[]) {
    this._fglWriteAtomicitySize = value;
  }
  public resetFglWriteAtomicitySize() {
    this._fglWriteAtomicitySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fglWriteAtomicitySizeInput() {
    return this._fglWriteAtomicitySize;
  }

  // fragmentation_enabled - computed: false, optional: true, required: false
  private _fragmentationEnabled?: boolean | cdktf.IResolvable; 
  public get fragmentationEnabled() {
    return this.getBooleanAttribute('fragmentation_enabled');
  }
  public set fragmentationEnabled(value: boolean | cdktf.IResolvable) {
    this._fragmentationEnabled = value;
  }
  public resetFragmentationEnabled() {
    this._fragmentationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentationEnabledInput() {
    return this._fragmentationEnabled;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string[]; 
  public get id() {
    return cdktf.Fn.tolist(this.getListAttribute('id'));
  }
  public set id(value: string[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // media_type - computed: false, optional: true, required: false
  private _mediaType?: string[]; 
  public get mediaType() {
    return cdktf.Fn.tolist(this.getListAttribute('media_type'));
  }
  public set mediaType(value: string[]) {
    this._mediaType = value;
  }
  public resetMediaType() {
    this._mediaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaTypeInput() {
    return this._mediaType;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string[]; 
  public get name() {
    return cdktf.Fn.tolist(this.getListAttribute('name'));
  }
  public set name(value: string[]) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // num_of_parallel_rebuild_rebalance_jobs_per_device - computed: false, optional: true, required: false
  private _numOfParallelRebuildRebalanceJobsPerDevice?: number[]; 
  public get numOfParallelRebuildRebalanceJobsPerDevice() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('num_of_parallel_rebuild_rebalance_jobs_per_device')));
  }
  public set numOfParallelRebuildRebalanceJobsPerDevice(value: number[]) {
    this._numOfParallelRebuildRebalanceJobsPerDevice = value;
  }
  public resetNumOfParallelRebuildRebalanceJobsPerDevice() {
    this._numOfParallelRebuildRebalanceJobsPerDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfParallelRebuildRebalanceJobsPerDeviceInput() {
    return this._numOfParallelRebuildRebalanceJobsPerDevice;
  }

  // persistent_checksum_builder_limit_kb - computed: false, optional: true, required: false
  private _persistentChecksumBuilderLimitKb?: number[]; 
  public get persistentChecksumBuilderLimitKb() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('persistent_checksum_builder_limit_kb')));
  }
  public set persistentChecksumBuilderLimitKb(value: number[]) {
    this._persistentChecksumBuilderLimitKb = value;
  }
  public resetPersistentChecksumBuilderLimitKb() {
    this._persistentChecksumBuilderLimitKb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentChecksumBuilderLimitKbInput() {
    return this._persistentChecksumBuilderLimitKb;
  }

  // persistent_checksum_enabled - computed: false, optional: true, required: false
  private _persistentChecksumEnabled?: boolean | cdktf.IResolvable; 
  public get persistentChecksumEnabled() {
    return this.getBooleanAttribute('persistent_checksum_enabled');
  }
  public set persistentChecksumEnabled(value: boolean | cdktf.IResolvable) {
    this._persistentChecksumEnabled = value;
  }
  public resetPersistentChecksumEnabled() {
    this._persistentChecksumEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentChecksumEnabledInput() {
    return this._persistentChecksumEnabled;
  }

  // persistent_checksum_state - computed: false, optional: true, required: false
  private _persistentChecksumState?: string[]; 
  public get persistentChecksumState() {
    return cdktf.Fn.tolist(this.getListAttribute('persistent_checksum_state'));
  }
  public set persistentChecksumState(value: string[]) {
    this._persistentChecksumState = value;
  }
  public resetPersistentChecksumState() {
    this._persistentChecksumState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentChecksumStateInput() {
    return this._persistentChecksumState;
  }

  // persistent_checksum_validate_on_read - computed: false, optional: true, required: false
  private _persistentChecksumValidateOnRead?: boolean | cdktf.IResolvable; 
  public get persistentChecksumValidateOnRead() {
    return this.getBooleanAttribute('persistent_checksum_validate_on_read');
  }
  public set persistentChecksumValidateOnRead(value: boolean | cdktf.IResolvable) {
    this._persistentChecksumValidateOnRead = value;
  }
  public resetPersistentChecksumValidateOnRead() {
    this._persistentChecksumValidateOnRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentChecksumValidateOnReadInput() {
    return this._persistentChecksumValidateOnRead;
  }

  // protected_maintenance_mode_io_priority_app_bw_per_device_threshold_kbps - computed: false, optional: true, required: false
  private _protectedMaintenanceModeIoPriorityAppBwPerDeviceThresholdKbps?: number[]; 
  public get protectedMaintenanceModeIoPriorityAppBwPerDeviceThresholdKbps() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('protected_maintenance_mode_io_priority_app_bw_per_device_threshold_kbps')));
  }
  public set protectedMaintenanceModeIoPriorityAppBwPerDeviceThresholdKbps(value: number[]) {
    this._protectedMaintenanceModeIoPriorityAppBwPerDeviceThresholdKbps = value;
  }
  public resetProtectedMaintenanceModeIoPriorityAppBwPerDeviceThresholdKbps() {
    this._protectedMaintenanceModeIoPriorityAppBwPerDeviceThresholdKbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedMaintenanceModeIoPriorityAppBwPerDeviceThresholdKbpsInput() {
    return this._protectedMaintenanceModeIoPriorityAppBwPerDeviceThresholdKbps;
  }

  // protected_maintenance_mode_io_priority_app_iops_per_device_threshold - computed: false, optional: true, required: false
  private _protectedMaintenanceModeIoPriorityAppIopsPerDeviceThreshold?: number[]; 
  public get protectedMaintenanceModeIoPriorityAppIopsPerDeviceThreshold() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('protected_maintenance_mode_io_priority_app_iops_per_device_threshold')));
  }
  public set protectedMaintenanceModeIoPriorityAppIopsPerDeviceThreshold(value: number[]) {
    this._protectedMaintenanceModeIoPriorityAppIopsPerDeviceThreshold = value;
  }
  public resetProtectedMaintenanceModeIoPriorityAppIopsPerDeviceThreshold() {
    this._protectedMaintenanceModeIoPriorityAppIopsPerDeviceThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedMaintenanceModeIoPriorityAppIopsPerDeviceThresholdInput() {
    return this._protectedMaintenanceModeIoPriorityAppIopsPerDeviceThreshold;
  }

  // protected_maintenance_mode_io_priority_bw_limit_per_device_kbps - computed: false, optional: true, required: false
  private _protectedMaintenanceModeIoPriorityBwLimitPerDeviceKbps?: number[]; 
  public get protectedMaintenanceModeIoPriorityBwLimitPerDeviceKbps() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('protected_maintenance_mode_io_priority_bw_limit_per_device_kbps')));
  }
  public set protectedMaintenanceModeIoPriorityBwLimitPerDeviceKbps(value: number[]) {
    this._protectedMaintenanceModeIoPriorityBwLimitPerDeviceKbps = value;
  }
  public resetProtectedMaintenanceModeIoPriorityBwLimitPerDeviceKbps() {
    this._protectedMaintenanceModeIoPriorityBwLimitPerDeviceKbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedMaintenanceModeIoPriorityBwLimitPerDeviceKbpsInput() {
    return this._protectedMaintenanceModeIoPriorityBwLimitPerDeviceKbps;
  }

  // protected_maintenance_mode_io_priority_num_of_concurrent_ios_per_device - computed: false, optional: true, required: false
  private _protectedMaintenanceModeIoPriorityNumOfConcurrentIosPerDevice?: number[]; 
  public get protectedMaintenanceModeIoPriorityNumOfConcurrentIosPerDevice() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('protected_maintenance_mode_io_priority_num_of_concurrent_ios_per_device')));
  }
  public set protectedMaintenanceModeIoPriorityNumOfConcurrentIosPerDevice(value: number[]) {
    this._protectedMaintenanceModeIoPriorityNumOfConcurrentIosPerDevice = value;
  }
  public resetProtectedMaintenanceModeIoPriorityNumOfConcurrentIosPerDevice() {
    this._protectedMaintenanceModeIoPriorityNumOfConcurrentIosPerDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedMaintenanceModeIoPriorityNumOfConcurrentIosPerDeviceInput() {
    return this._protectedMaintenanceModeIoPriorityNumOfConcurrentIosPerDevice;
  }

  // protected_maintenance_mode_io_priority_policy - computed: false, optional: true, required: false
  private _protectedMaintenanceModeIoPriorityPolicy?: string[]; 
  public get protectedMaintenanceModeIoPriorityPolicy() {
    return cdktf.Fn.tolist(this.getListAttribute('protected_maintenance_mode_io_priority_policy'));
  }
  public set protectedMaintenanceModeIoPriorityPolicy(value: string[]) {
    this._protectedMaintenanceModeIoPriorityPolicy = value;
  }
  public resetProtectedMaintenanceModeIoPriorityPolicy() {
    this._protectedMaintenanceModeIoPriorityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedMaintenanceModeIoPriorityPolicyInput() {
    return this._protectedMaintenanceModeIoPriorityPolicy;
  }

  // protected_maintenance_mode_io_priority_quiet_period_msec - computed: false, optional: true, required: false
  private _protectedMaintenanceModeIoPriorityQuietPeriodMsec?: number[]; 
  public get protectedMaintenanceModeIoPriorityQuietPeriodMsec() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('protected_maintenance_mode_io_priority_quiet_period_msec')));
  }
  public set protectedMaintenanceModeIoPriorityQuietPeriodMsec(value: number[]) {
    this._protectedMaintenanceModeIoPriorityQuietPeriodMsec = value;
  }
  public resetProtectedMaintenanceModeIoPriorityQuietPeriodMsec() {
    this._protectedMaintenanceModeIoPriorityQuietPeriodMsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedMaintenanceModeIoPriorityQuietPeriodMsecInput() {
    return this._protectedMaintenanceModeIoPriorityQuietPeriodMsec;
  }

  // rebalance_enabled - computed: false, optional: true, required: false
  private _rebalanceEnabled?: boolean | cdktf.IResolvable; 
  public get rebalanceEnabled() {
    return this.getBooleanAttribute('rebalance_enabled');
  }
  public set rebalanceEnabled(value: boolean | cdktf.IResolvable) {
    this._rebalanceEnabled = value;
  }
  public resetRebalanceEnabled() {
    this._rebalanceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebalanceEnabledInput() {
    return this._rebalanceEnabled;
  }

  // rebalance_io_priority_app_bw_per_device_threshold_kbps - computed: false, optional: true, required: false
  private _rebalanceIoPriorityAppBwPerDeviceThresholdKbps?: number[]; 
  public get rebalanceIoPriorityAppBwPerDeviceThresholdKbps() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('rebalance_io_priority_app_bw_per_device_threshold_kbps')));
  }
  public set rebalanceIoPriorityAppBwPerDeviceThresholdKbps(value: number[]) {
    this._rebalanceIoPriorityAppBwPerDeviceThresholdKbps = value;
  }
  public resetRebalanceIoPriorityAppBwPerDeviceThresholdKbps() {
    this._rebalanceIoPriorityAppBwPerDeviceThresholdKbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebalanceIoPriorityAppBwPerDeviceThresholdKbpsInput() {
    return this._rebalanceIoPriorityAppBwPerDeviceThresholdKbps;
  }

  // rebalance_io_priority_app_iops_per_device_threshold - computed: false, optional: true, required: false
  private _rebalanceIoPriorityAppIopsPerDeviceThreshold?: number[]; 
  public get rebalanceIoPriorityAppIopsPerDeviceThreshold() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('rebalance_io_priority_app_iops_per_device_threshold')));
  }
  public set rebalanceIoPriorityAppIopsPerDeviceThreshold(value: number[]) {
    this._rebalanceIoPriorityAppIopsPerDeviceThreshold = value;
  }
  public resetRebalanceIoPriorityAppIopsPerDeviceThreshold() {
    this._rebalanceIoPriorityAppIopsPerDeviceThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebalanceIoPriorityAppIopsPerDeviceThresholdInput() {
    return this._rebalanceIoPriorityAppIopsPerDeviceThreshold;
  }

  // rebalance_io_priority_bw_limit_per_device_kbps - computed: false, optional: true, required: false
  private _rebalanceIoPriorityBwLimitPerDeviceKbps?: number[]; 
  public get rebalanceIoPriorityBwLimitPerDeviceKbps() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('rebalance_io_priority_bw_limit_per_device_kbps')));
  }
  public set rebalanceIoPriorityBwLimitPerDeviceKbps(value: number[]) {
    this._rebalanceIoPriorityBwLimitPerDeviceKbps = value;
  }
  public resetRebalanceIoPriorityBwLimitPerDeviceKbps() {
    this._rebalanceIoPriorityBwLimitPerDeviceKbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebalanceIoPriorityBwLimitPerDeviceKbpsInput() {
    return this._rebalanceIoPriorityBwLimitPerDeviceKbps;
  }

  // rebalance_io_priority_num_of_concurrent_ios_per_device - computed: false, optional: true, required: false
  private _rebalanceIoPriorityNumOfConcurrentIosPerDevice?: number[]; 
  public get rebalanceIoPriorityNumOfConcurrentIosPerDevice() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('rebalance_io_priority_num_of_concurrent_ios_per_device')));
  }
  public set rebalanceIoPriorityNumOfConcurrentIosPerDevice(value: number[]) {
    this._rebalanceIoPriorityNumOfConcurrentIosPerDevice = value;
  }
  public resetRebalanceIoPriorityNumOfConcurrentIosPerDevice() {
    this._rebalanceIoPriorityNumOfConcurrentIosPerDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebalanceIoPriorityNumOfConcurrentIosPerDeviceInput() {
    return this._rebalanceIoPriorityNumOfConcurrentIosPerDevice;
  }

  // rebalance_io_priority_policy - computed: false, optional: true, required: false
  private _rebalanceIoPriorityPolicy?: string[]; 
  public get rebalanceIoPriorityPolicy() {
    return cdktf.Fn.tolist(this.getListAttribute('rebalance_io_priority_policy'));
  }
  public set rebalanceIoPriorityPolicy(value: string[]) {
    this._rebalanceIoPriorityPolicy = value;
  }
  public resetRebalanceIoPriorityPolicy() {
    this._rebalanceIoPriorityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebalanceIoPriorityPolicyInput() {
    return this._rebalanceIoPriorityPolicy;
  }

  // rebalance_io_priority_quiet_period_msec - computed: false, optional: true, required: false
  private _rebalanceIoPriorityQuietPeriodMsec?: number[]; 
  public get rebalanceIoPriorityQuietPeriodMsec() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('rebalance_io_priority_quiet_period_msec')));
  }
  public set rebalanceIoPriorityQuietPeriodMsec(value: number[]) {
    this._rebalanceIoPriorityQuietPeriodMsec = value;
  }
  public resetRebalanceIoPriorityQuietPeriodMsec() {
    this._rebalanceIoPriorityQuietPeriodMsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebalanceIoPriorityQuietPeriodMsecInput() {
    return this._rebalanceIoPriorityQuietPeriodMsec;
  }

  // rebuild_enabled - computed: false, optional: true, required: false
  private _rebuildEnabled?: boolean | cdktf.IResolvable; 
  public get rebuildEnabled() {
    return this.getBooleanAttribute('rebuild_enabled');
  }
  public set rebuildEnabled(value: boolean | cdktf.IResolvable) {
    this._rebuildEnabled = value;
  }
  public resetRebuildEnabled() {
    this._rebuildEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebuildEnabledInput() {
    return this._rebuildEnabled;
  }

  // rebuild_io_priority_app_bw_per_device_threshold_kbps - computed: false, optional: true, required: false
  private _rebuildIoPriorityAppBwPerDeviceThresholdKbps?: number[]; 
  public get rebuildIoPriorityAppBwPerDeviceThresholdKbps() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('rebuild_io_priority_app_bw_per_device_threshold_kbps')));
  }
  public set rebuildIoPriorityAppBwPerDeviceThresholdKbps(value: number[]) {
    this._rebuildIoPriorityAppBwPerDeviceThresholdKbps = value;
  }
  public resetRebuildIoPriorityAppBwPerDeviceThresholdKbps() {
    this._rebuildIoPriorityAppBwPerDeviceThresholdKbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebuildIoPriorityAppBwPerDeviceThresholdKbpsInput() {
    return this._rebuildIoPriorityAppBwPerDeviceThresholdKbps;
  }

  // rebuild_io_priority_app_iops_per_device_threshold - computed: false, optional: true, required: false
  private _rebuildIoPriorityAppIopsPerDeviceThreshold?: number[]; 
  public get rebuildIoPriorityAppIopsPerDeviceThreshold() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('rebuild_io_priority_app_iops_per_device_threshold')));
  }
  public set rebuildIoPriorityAppIopsPerDeviceThreshold(value: number[]) {
    this._rebuildIoPriorityAppIopsPerDeviceThreshold = value;
  }
  public resetRebuildIoPriorityAppIopsPerDeviceThreshold() {
    this._rebuildIoPriorityAppIopsPerDeviceThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebuildIoPriorityAppIopsPerDeviceThresholdInput() {
    return this._rebuildIoPriorityAppIopsPerDeviceThreshold;
  }

  // rebuild_io_priority_bw_limit_per_device_in_kbps - computed: false, optional: true, required: false
  private _rebuildIoPriorityBwLimitPerDeviceInKbps?: number[]; 
  public get rebuildIoPriorityBwLimitPerDeviceInKbps() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('rebuild_io_priority_bw_limit_per_device_in_kbps')));
  }
  public set rebuildIoPriorityBwLimitPerDeviceInKbps(value: number[]) {
    this._rebuildIoPriorityBwLimitPerDeviceInKbps = value;
  }
  public resetRebuildIoPriorityBwLimitPerDeviceInKbps() {
    this._rebuildIoPriorityBwLimitPerDeviceInKbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebuildIoPriorityBwLimitPerDeviceInKbpsInput() {
    return this._rebuildIoPriorityBwLimitPerDeviceInKbps;
  }

  // rebuild_io_priority_num_of_concurrent_ios_per_device - computed: false, optional: true, required: false
  private _rebuildIoPriorityNumOfConcurrentIosPerDevice?: number[]; 
  public get rebuildIoPriorityNumOfConcurrentIosPerDevice() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('rebuild_io_priority_num_of_concurrent_ios_per_device')));
  }
  public set rebuildIoPriorityNumOfConcurrentIosPerDevice(value: number[]) {
    this._rebuildIoPriorityNumOfConcurrentIosPerDevice = value;
  }
  public resetRebuildIoPriorityNumOfConcurrentIosPerDevice() {
    this._rebuildIoPriorityNumOfConcurrentIosPerDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebuildIoPriorityNumOfConcurrentIosPerDeviceInput() {
    return this._rebuildIoPriorityNumOfConcurrentIosPerDevice;
  }

  // rebuild_io_priority_policy - computed: false, optional: true, required: false
  private _rebuildIoPriorityPolicy?: string[]; 
  public get rebuildIoPriorityPolicy() {
    return cdktf.Fn.tolist(this.getListAttribute('rebuild_io_priority_policy'));
  }
  public set rebuildIoPriorityPolicy(value: string[]) {
    this._rebuildIoPriorityPolicy = value;
  }
  public resetRebuildIoPriorityPolicy() {
    this._rebuildIoPriorityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebuildIoPriorityPolicyInput() {
    return this._rebuildIoPriorityPolicy;
  }

  // rebuild_io_priority_quiet_period_msec - computed: false, optional: true, required: false
  private _rebuildIoPriorityQuietPeriodMsec?: number[]; 
  public get rebuildIoPriorityQuietPeriodMsec() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('rebuild_io_priority_quiet_period_msec')));
  }
  public set rebuildIoPriorityQuietPeriodMsec(value: number[]) {
    this._rebuildIoPriorityQuietPeriodMsec = value;
  }
  public resetRebuildIoPriorityQuietPeriodMsec() {
    this._rebuildIoPriorityQuietPeriodMsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebuildIoPriorityQuietPeriodMsecInput() {
    return this._rebuildIoPriorityQuietPeriodMsec;
  }

  // replication_capacity_max_ratio - computed: false, optional: true, required: false
  private _replicationCapacityMaxRatio?: number[]; 
  public get replicationCapacityMaxRatio() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('replication_capacity_max_ratio')));
  }
  public set replicationCapacityMaxRatio(value: number[]) {
    this._replicationCapacityMaxRatio = value;
  }
  public resetReplicationCapacityMaxRatio() {
    this._replicationCapacityMaxRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationCapacityMaxRatioInput() {
    return this._replicationCapacityMaxRatio;
  }

  // rm_cache_write_handling_mode - computed: false, optional: true, required: false
  private _rmCacheWriteHandlingMode?: string[]; 
  public get rmCacheWriteHandlingMode() {
    return cdktf.Fn.tolist(this.getListAttribute('rm_cache_write_handling_mode'));
  }
  public set rmCacheWriteHandlingMode(value: string[]) {
    this._rmCacheWriteHandlingMode = value;
  }
  public resetRmCacheWriteHandlingMode() {
    this._rmCacheWriteHandlingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rmCacheWriteHandlingModeInput() {
    return this._rmCacheWriteHandlingMode;
  }

  // spare_percentage - computed: false, optional: true, required: false
  private _sparePercentage?: number[]; 
  public get sparePercentage() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('spare_percentage')));
  }
  public set sparePercentage(value: number[]) {
    this._sparePercentage = value;
  }
  public resetSparePercentage() {
    this._sparePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparePercentageInput() {
    return this._sparePercentage;
  }

  // use_rf_cache - computed: false, optional: true, required: false
  private _useRfCache?: boolean | cdktf.IResolvable; 
  public get useRfCache() {
    return this.getBooleanAttribute('use_rf_cache');
  }
  public set useRfCache(value: boolean | cdktf.IResolvable) {
    this._useRfCache = value;
  }
  public resetUseRfCache() {
    this._useRfCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRfCacheInput() {
    return this._useRfCache;
  }

  // use_rm_cache - computed: false, optional: true, required: false
  private _useRmCache?: boolean | cdktf.IResolvable; 
  public get useRmCache() {
    return this.getBooleanAttribute('use_rm_cache');
  }
  public set useRmCache(value: boolean | cdktf.IResolvable) {
    this._useRmCache = value;
  }
  public resetUseRmCache() {
    this._useRmCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRmCacheInput() {
    return this._useRmCache;
  }

  // vtree_migration_io_priority_app_bw_per_device_threshold_kbps - computed: false, optional: true, required: false
  private _vtreeMigrationIoPriorityAppBwPerDeviceThresholdKbps?: number[]; 
  public get vtreeMigrationIoPriorityAppBwPerDeviceThresholdKbps() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('vtree_migration_io_priority_app_bw_per_device_threshold_kbps')));
  }
  public set vtreeMigrationIoPriorityAppBwPerDeviceThresholdKbps(value: number[]) {
    this._vtreeMigrationIoPriorityAppBwPerDeviceThresholdKbps = value;
  }
  public resetVtreeMigrationIoPriorityAppBwPerDeviceThresholdKbps() {
    this._vtreeMigrationIoPriorityAppBwPerDeviceThresholdKbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vtreeMigrationIoPriorityAppBwPerDeviceThresholdKbpsInput() {
    return this._vtreeMigrationIoPriorityAppBwPerDeviceThresholdKbps;
  }

  // vtree_migration_io_priority_app_iops_per_device_threshold - computed: false, optional: true, required: false
  private _vtreeMigrationIoPriorityAppIopsPerDeviceThreshold?: number[]; 
  public get vtreeMigrationIoPriorityAppIopsPerDeviceThreshold() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('vtree_migration_io_priority_app_iops_per_device_threshold')));
  }
  public set vtreeMigrationIoPriorityAppIopsPerDeviceThreshold(value: number[]) {
    this._vtreeMigrationIoPriorityAppIopsPerDeviceThreshold = value;
  }
  public resetVtreeMigrationIoPriorityAppIopsPerDeviceThreshold() {
    this._vtreeMigrationIoPriorityAppIopsPerDeviceThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vtreeMigrationIoPriorityAppIopsPerDeviceThresholdInput() {
    return this._vtreeMigrationIoPriorityAppIopsPerDeviceThreshold;
  }

  // vtree_migration_io_priority_bw_limit_per_device_kbps - computed: false, optional: true, required: false
  private _vtreeMigrationIoPriorityBwLimitPerDeviceKbps?: number[]; 
  public get vtreeMigrationIoPriorityBwLimitPerDeviceKbps() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('vtree_migration_io_priority_bw_limit_per_device_kbps')));
  }
  public set vtreeMigrationIoPriorityBwLimitPerDeviceKbps(value: number[]) {
    this._vtreeMigrationIoPriorityBwLimitPerDeviceKbps = value;
  }
  public resetVtreeMigrationIoPriorityBwLimitPerDeviceKbps() {
    this._vtreeMigrationIoPriorityBwLimitPerDeviceKbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vtreeMigrationIoPriorityBwLimitPerDeviceKbpsInput() {
    return this._vtreeMigrationIoPriorityBwLimitPerDeviceKbps;
  }

  // vtree_migration_io_priority_num_of_concurrent_ios_per_device - computed: false, optional: true, required: false
  private _vtreeMigrationIoPriorityNumOfConcurrentIosPerDevice?: number[]; 
  public get vtreeMigrationIoPriorityNumOfConcurrentIosPerDevice() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('vtree_migration_io_priority_num_of_concurrent_ios_per_device')));
  }
  public set vtreeMigrationIoPriorityNumOfConcurrentIosPerDevice(value: number[]) {
    this._vtreeMigrationIoPriorityNumOfConcurrentIosPerDevice = value;
  }
  public resetVtreeMigrationIoPriorityNumOfConcurrentIosPerDevice() {
    this._vtreeMigrationIoPriorityNumOfConcurrentIosPerDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vtreeMigrationIoPriorityNumOfConcurrentIosPerDeviceInput() {
    return this._vtreeMigrationIoPriorityNumOfConcurrentIosPerDevice;
  }

  // vtree_migration_io_priority_policy - computed: false, optional: true, required: false
  private _vtreeMigrationIoPriorityPolicy?: string[]; 
  public get vtreeMigrationIoPriorityPolicy() {
    return cdktf.Fn.tolist(this.getListAttribute('vtree_migration_io_priority_policy'));
  }
  public set vtreeMigrationIoPriorityPolicy(value: string[]) {
    this._vtreeMigrationIoPriorityPolicy = value;
  }
  public resetVtreeMigrationIoPriorityPolicy() {
    this._vtreeMigrationIoPriorityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vtreeMigrationIoPriorityPolicyInput() {
    return this._vtreeMigrationIoPriorityPolicy;
  }

  // vtree_migration_io_priority_quiet_period_msec - computed: false, optional: true, required: false
  private _vtreeMigrationIoPriorityQuietPeriodMsec?: number[]; 
  public get vtreeMigrationIoPriorityQuietPeriodMsec() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('vtree_migration_io_priority_quiet_period_msec')));
  }
  public set vtreeMigrationIoPriorityQuietPeriodMsec(value: number[]) {
    this._vtreeMigrationIoPriorityQuietPeriodMsec = value;
  }
  public resetVtreeMigrationIoPriorityQuietPeriodMsec() {
    this._vtreeMigrationIoPriorityQuietPeriodMsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vtreeMigrationIoPriorityQuietPeriodMsecInput() {
    return this._vtreeMigrationIoPriorityQuietPeriodMsec;
  }

  // zero_padding_enabled - computed: false, optional: true, required: false
  private _zeroPaddingEnabled?: boolean | cdktf.IResolvable; 
  public get zeroPaddingEnabled() {
    return this.getBooleanAttribute('zero_padding_enabled');
  }
  public set zeroPaddingEnabled(value: boolean | cdktf.IResolvable) {
    this._zeroPaddingEnabled = value;
  }
  public resetZeroPaddingEnabled() {
    this._zeroPaddingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroPaddingEnabledInput() {
    return this._zeroPaddingEnabled;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool powerflex_storage_pool}
*/
export class DataPowerflexStoragePool extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerflex_storage_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerflexStoragePool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerflexStoragePool to import
  * @param importFromId The id of the existing DataPowerflexStoragePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerflexStoragePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerflex_storage_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/storage_pool powerflex_storage_pool} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerflexStoragePoolConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerflexStoragePoolConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerflex_storage_pool',
      terraformGeneratorMetadata: {
        providerName: 'powerflex',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // storage_pools - computed: true, optional: false, required: false
  private _storagePools = new DataPowerflexStoragePoolStoragePoolsList(this, "storage_pools", false);
  public get storagePools() {
    return this._storagePools;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataPowerflexStoragePoolFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataPowerflexStoragePoolFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: dataPowerflexStoragePoolFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataPowerflexStoragePoolFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerflexStoragePoolFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
